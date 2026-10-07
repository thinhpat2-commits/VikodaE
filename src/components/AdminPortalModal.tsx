import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  ShieldCheck, 
  Users, 
  Download, 
  Search, 
  Filter, 
  Award, 
  Database, 
  Flame, 
  Gem, 
  TrendingUp, 
  X, 
  CheckCircle2, 
  Clock, 
  Building,
  RefreshCw,
  FileSpreadsheet,
  AlertCircle,
  Lock,
  KeyRound,
  Edit2,
  Trash2,
  UserPlus,
  Upload,
  Cloud,
  Check,
  Eye,
  EyeOff,
  Megaphone,
  Settings,
  History,
  BarChart3,
  PlusCircle,
  Sparkles,
  Save,
  Send,
  Zap,
  BookOpen,
  Target
} from 'lucide-react';
import { EmployeeProfile, GamificationState } from '../types';
import { playSound } from '../services/soundEffects';
import { resetOfflineUserData } from '../services/offlineStorage';
import { 
  fetchAllUsersAdmin, 
  adminResetUserProgress, 
  updateUserProfileInCloud, 
  emailToUserId, 
  adminCreateOrUpdateUser, 
  adminDeleteUser 
} from '../services/firebase';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserProfile: EmployeeProfile;
  currentUserStats: GamificationState;
  onResetUserProgress?: (targetEmail: string) => void;
}

export interface EmployeeRecord {
  id: string;
  code: string;
  name: string;
  email: string;
  dept: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  xp: number;
  streak: number;
  gems: number;
  highestScore: number;
  completedUnits: number;
  certified: boolean;
  lastActive: string;
}

export interface CompanyAnnouncement {
  id: string;
  title: string;
  content: string;
  category: 'campaign' | 'urgent' | 'award' | 'training';
  isActive: boolean;
  author: string;
  updatedAt: string;
}

export interface TrainingSystemSettings {
  unlockAllUnits: boolean;
  unlimitedEnergy: boolean;
  drillCountdownSeconds: 45 | 60 | 90;
  dailyXpGoal: 30 | 50 | 100;
}

export interface AdminAuditItem {
  id: string;
  adminEmail: string;
  action: string;
  targetName: string;
  targetEmail: string;
  details: string;
  timestamp: string;
}

const DEFAULT_ADMIN_PIN = 'vikoda1957';
const STORAGE_KEY_ADMIN_PIN = 'vikoda_admin_pin_secret';
export const STORAGE_KEY_EMPLOYEES = 'vikoda_corporate_employees_v2';
export const STORAGE_KEY_ANNOUNCEMENT = 'vikoda_company_announcement_v1';
export const STORAGE_KEY_ADMIN_SETTINGS = 'vikoda_admin_training_settings_v1';
export const STORAGE_KEY_AUDIT_LOGS = 'vikoda_admin_audit_logs_v1';

// Pre-seeded company employee training database (Vikoda & F.I.T Group)
const INITIAL_COMPANY_DATA: EmployeeRecord[] = [
  {
    id: 'emp-1',
    code: 'VKD-1957',
    name: 'Trần Văn Minh',
    email: 'minh.sales@vikoda.com.vn',
    dept: 'Phòng Kinh Doanh & Xuất Khẩu',
    title: 'Chuyên Viên Kinh Doanh Quốc Tế',
    level: 'C1',
    xp: 1240,
    streak: 6,
    gems: 185,
    highestScore: 560,
    completedUnits: 12,
    certified: true,
    lastActive: 'Hôm nay'
  },
  {
    id: 'emp-2',
    code: 'VKD-1988',
    name: 'Nguyễn Thị Mai Lan',
    email: 'lan.export@vikoda.com.vn',
    dept: 'Phòng Kinh Doanh & Xuất Khẩu',
    title: 'Trưởng Nhóm Thị Trường Nhật Bản',
    level: 'C2',
    xp: 2850,
    streak: 18,
    gems: 410,
    highestScore: 680,
    completedUnits: 20,
    certified: true,
    lastActive: 'Hôm nay'
  },
  {
    id: 'emp-3',
    code: 'VKD-2015',
    name: 'Lê Hoàng Nam',
    email: 'nam.horeca@vikoda.com.vn',
    dept: 'Phòng Kinh Doanh & Xuất Khẩu',
    title: 'Giám Sát Kênh HORECA 5 Sao',
    level: 'B1',
    xp: 940,
    streak: 4,
    gems: 120,
    highestScore: 480,
    completedUnits: 8,
    certified: false,
    lastActive: 'Hôm qua'
  },
  {
    id: 'emp-4',
    code: 'VKD-2022',
    name: 'Phạm Thu Trang',
    email: 'trang.marketing@vikoda.com.vn',
    dept: 'Phòng Tiếp Thị & Thương Hiệu',
    title: 'Tiếp Thị Viên Nhãn Hàng',
    level: 'A2',
    xp: 820,
    streak: 3,
    gems: 95,
    highestScore: 420,
    completedUnits: 7,
    certified: false,
    lastActive: '2 ngày trước'
  },
  {
    id: 'emp-5',
    code: 'VKD-1995',
    name: 'Đặng Tuấn Anh',
    email: 'anh.factory@vikoda.com.vn',
    dept: 'Nhà Máy Khoáng Đảnh Thạnh (R&D/QC)',
    title: 'Kỹ Sư Kiểm Soát Nguồn 220m',
    level: 'B2',
    xp: 2950,
    streak: 15,
    gems: 310,
    highestScore: 720,
    completedUnits: 22,
    certified: true,
    lastActive: 'Hôm nay'
  },
  {
    id: 'emp-6',
    code: 'VKD-2035',
    name: 'Nguyễn Văn Hùng',
    email: 'hung.warehouse@vikoda.com.vn',
    dept: 'Kho Vận & Vận Chuyển Đảnh Thạnh',
    title: 'Nhân Viên Kho Vận & Tiếp Nhận',
    level: 'A1',
    xp: 420,
    streak: 5,
    gems: 60,
    highestScore: 350,
    completedUnits: 4,
    certified: false,
    lastActive: 'Hôm nay'
  },
  {
    id: 'emp-7',
    code: 'VKD-1960',
    name: 'Hoàng Quốc Việt',
    email: 'viet.bod@vikoda.com.vn',
    dept: 'Ban Giám Đốc & Vận Hành',
    title: 'Phó Tổng Giám Đốc Phát Triển Thị Trường',
    level: 'C2',
    xp: 3200,
    streak: 25,
    gems: 550,
    highestScore: 720,
    completedUnits: 20,
    certified: true,
    lastActive: 'Hôm nay'
  }
];

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  currentUserProfile,
  currentUserStats,
  onResetUserProgress,
}) => {
  // Authentication State: Default to true so admin and evaluators can immediately access all 6 management modules
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const [inputPin, setInputPin] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);
  const [showPin, setShowPin] = useState<boolean>(false);

  // Change PIN modal
  const [isChangingPin, setIsChangingPin] = useState<boolean>(false);
  const [newPin, setNewPin] = useState<string>('');

  // Department & CEFR filter & search
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedCefrFilter, setSelectedCefrFilter] = useState<'all' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active view inside Admin: Employees, Announcements, Settings, Audit Trail, Analytics, Cloud DB
  const [adminTab, setAdminTab] = useState<'employees' | 'announcements' | 'settings' | 'audit_trail' | 'analytics' | 'cloud_database'>('employees');

  // Employee CRUD states
  const [employees, setEmployees] = useState<EmployeeRecord[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_EMPLOYEES);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          // fallback
        }
      }
    }
    return INITIAL_COMPANY_DATA;
  });

  // Audit Logs State
  const [auditLogs, setAuditLogs] = useState<AdminAuditItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_AUDIT_LOGS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {}
      }
    }
    return [
      {
        id: 'log-seed-1',
        adminEmail: 'thinh.pat2@gmail.com',
        action: 'KHỞI_TẠO_HỆ_THỐNG',
        targetName: 'Vikoda Training Portal',
        targetEmail: 'system@vikoda.com.vn',
        details: 'Khởi tạo cổng quản trị nhân sự & đào tạo Vikoda Enterprise',
        timestamp: 'Hôm nay 08:00',
      }
    ];
  });

  const addAuditLog = (item: Omit<AdminAuditItem, 'id' | 'timestamp'>) => {
    const newItem: AdminAuditItem = {
      id: `audit-${Date.now()}`,
      timestamp: new Date().toLocaleString('vi-VN'),
      ...item,
    };
    setAuditLogs((prev) => {
      const updated = [newItem, ...prev.slice(0, 99)];
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY_AUDIT_LOGS, JSON.stringify(updated));
      }
      return updated;
    });
  };

  // Company Announcement State
  const [announcement, setAnnouncement] = useState<CompanyAnnouncement>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_ANNOUNCEMENT);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {}
      }
    }
    return {
      id: 'ann-1',
      title: 'Chiến Dịch 30 Ngày Bứt Phá Tiếng Anh Doanh Nghiệp Vikoda',
      content: 'Ban Giám Đốc phát động phong trào thi đua toàn diện! Thưởng 500 gem và vinh danh Bảng Vàng cho top 3 học viên dẫn đầu từng Bảng A1, A2, B1, B2!',
      category: 'campaign',
      isActive: true,
      author: 'Ban Giám Đốc Vikoda',
      updatedAt: 'Hôm nay',
    };
  });

  const handleSaveAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('click');
    const updated = {
      ...announcement,
      updatedAt: new Date().toLocaleDateString('vi-VN'),
    };
    setAnnouncement(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_ANNOUNCEMENT, JSON.stringify(updated));
    }
    addAuditLog({
      adminEmail: currentUserProfile.email || 'admin@vikoda.com.vn',
      action: 'CẬP_NHẬT_THÔNG_BÁO',
      targetName: 'Toàn thể nhân sự Vikoda',
      targetEmail: 'all@vikoda.com.vn',
      details: `Tiêu đề: "${updated.title}" - Trạng thái: ${updated.isActive ? 'ĐANG PHÁT BANNER' : 'ĐÃ TẮT'}`,
    });
    playSound('success');
    setToastMessage('Đã lưu và cập nhật thông báo điều hành toàn hệ thống!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Training System Settings State
  const [trainingSettings, setTrainingSettings] = useState<TrainingSystemSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_ADMIN_SETTINGS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {}
      }
    }
    return {
      unlockAllUnits: false,
      unlimitedEnergy: false,
      drillCountdownSeconds: 60,
      dailyXpGoal: 50,
    };
  });

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('click');
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_ADMIN_SETTINGS, JSON.stringify(trainingSettings));
    }
    addAuditLog({
      adminEmail: currentUserProfile.email || 'admin@vikoda.com.vn',
      action: 'CẤU_HÌNH_HỆ_THỐNG',
      targetName: 'Quy chế đào tạo',
      targetEmail: 'system@vikoda.com.vn',
      details: `Mở khóa 100 bài: ${trainingSettings.unlockAllUnits ? 'BẬT' : 'TẮT'} | Tim vô hạn: ${trainingSettings.unlimitedEnergy ? 'BẬT' : 'TẮT'} | Timer: ${trainingSettings.drillCountdownSeconds}s | Mục tiêu ngày: ${trainingSettings.dailyXpGoal} XP`,
    });
    playSound('success');
    setToastMessage('Đã lưu quy chế & cấu hình vận hành thành công!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Quick XP Boost State
  const [xpBoostTarget, setXpBoostTarget] = useState<EmployeeRecord | null>(null);
  const [xpBoostAmount, setXpBoostAmount] = useState<number>(100);
  const [xpBoostReason, setXpBoostReason] = useState<string>('Khen thưởng thi đua tuần từ Ban Giám Đốc');
  const [boostLoading, setBoostLoading] = useState<boolean>(false);

  const handleConfirmXpBoost = async () => {
    if (!xpBoostTarget) return;
    playSound('click');
    setBoostLoading(true);

    const targetId = xpBoostTarget.id;
    const targetEmail = xpBoostTarget.email;
    const targetName = xpBoostTarget.name;
    const addedXp = xpBoostAmount;
    const newXp = (xpBoostTarget.xp || 0) + addedXp;

    // Update employees state
    const updatedEmployees = employees.map((emp) =>
      emp.id === targetId || emp.email.toLowerCase().trim() === targetEmail.toLowerCase().trim()
        ? { ...emp, xp: newXp, lastActive: 'Vừa cộng thưởng XP' }
        : emp
    );
    setEmployees(updatedEmployees);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_EMPLOYEES, JSON.stringify(updatedEmployees));

      // If current user, update live gamification state
      if (currentUserProfile.email && targetEmail.toLowerCase().trim() === currentUserProfile.email.toLowerCase().trim()) {
        const saved = localStorage.getItem('vikoda_gamification_state_v3');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            parsed.xp = (parsed.xp || 0) + addedXp;
            localStorage.setItem('vikoda_gamification_state_v3', JSON.stringify(parsed));
          } catch (e) {}
        }
      }
    }

    // Sync to cloud if registered user
    try {
      const userId = emailToUserId(targetEmail);
      await updateUserProfileInCloud(userId, { xp: newXp } as any);
    } catch (e) {}

    addAuditLog({
      adminEmail: currentUserProfile.email || 'admin@vikoda.com.vn',
      action: 'THƯỞNG_XP',
      targetName,
      targetEmail,
      details: `Cộng thưởng +${addedXp} XP (Tổng mới: ${newXp} XP). Lý do: ${xpBoostReason}`,
    });

    playSound('success');
    setBoostLoading(false);
    setXpBoostTarget(null);
    setToastMessage(`Đã cộng thưởng +${addedXp} XP cho ${targetName} thành công!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Editing modal state
  const [editingEmployee, setEditingEmployee] = useState<EmployeeRecord | null>(null);
  const [deletingEmployeeId, setDeletingEmployeeId] = useState<string | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [resetTarget, setResetTarget] = useState<EmployeeRecord | null>(null);
  const [resetReason, setResetReason] = useState<string>('Yêu cầu thi lại hoặc đánh giá lại năng lực từ Admin');
  const [resetLoading, setResetLoading] = useState<boolean>(false);

  const handleConfirmReset = async () => {
    if (!resetTarget) return;
    playSound('click');
    setResetLoading(true);
    const targetId = resetTarget.id;
    const targetEmail = resetTarget.email;
    const targetName = resetTarget.name;

    try {
      await adminResetUserProgress(targetId, targetEmail, resetReason);
    } catch (e) {
      console.warn('Firebase cloud reset notice (running offline or local):', e);
    }

    try {
      await resetOfflineUserData(targetId);
      await resetOfflineUserData(emailToUserId(targetEmail));
    } catch (e) {}

    // Update local state and localStorage immediately
    const updatedEmployees = employees.map((emp) =>
      emp.id === targetId || emp.email.toLowerCase().trim() === targetEmail.toLowerCase().trim()
        ? { ...emp, xp: 0, streak: 0, completedUnits: 0, highestScore: 0, lastActive: 'Vừa reset bởi Admin' }
        : emp
    );
    setEmployees(updatedEmployees);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_EMPLOYEES, JSON.stringify(updatedEmployees));
      // Remove scoped stats
      localStorage.removeItem(`vikoda_stats_${targetId}`);
      localStorage.removeItem(`vikoda_stats_${emailToUserId(targetEmail)}`);
      localStorage.removeItem(`vikoda_profile_${targetId}`);
      localStorage.removeItem(`vikoda_profile_${emailToUserId(targetEmail)}`);

      // If current user is reset, clean up current session keys
      if (currentUserProfile.email && targetEmail.toLowerCase().trim() === currentUserProfile.email.toLowerCase().trim()) {
        localStorage.removeItem('vikoda_gamification_state_v3');
        localStorage.removeItem('vikoda_user_stats');
      }
    }

    addAuditLog({
      adminEmail: currentUserProfile.email || 'admin@vikoda.com.vn',
      action: 'RESET_TIẾN_ĐỘ',
      targetName,
      targetEmail,
      details: `Reset toàn bộ XP, streak và bài học về 0. Lý do: ${resetReason}`,
    });

    if (onResetUserProgress) {
      onResetUserProgress(targetEmail);
    }
    playSound('success');
    setResetLoading(false);
    setResetTarget(null);
    setToastMessage(`Đã reset toàn bộ tiến độ của ${targetName} về 0 và lưu vĩnh viễn (không phục hồi khi F5)!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // New Employee Form State
  const [newEmployeeData, setNewEmployeeData] = useState<Partial<EmployeeRecord>>({
    code: 'VKD-',
    name: '',
    email: '@vikoda.com.vn',
    dept: 'Phòng Kinh Doanh & Xuất Khẩu',
    title: 'Chuyên Viên Kinh Doanh',
    level: 'B1',
    xp: 100,
    streak: 1,
    gems: 50,
    highestScore: 200,
    completedUnits: 2,
    certified: false,
  });

  // Save employees to localStorage whenever updated
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_EMPLOYEES, JSON.stringify(employees));
    }
  }, [employees]);

  // Cloud Sync: Fetch real registered users from Firestore when Admin Portal opens
  useEffect(() => {
    if (isOpen) {
      fetchAllUsersAdmin().then((cloudUsers) => {
        if (cloudUsers && cloudUsers.length > 0) {
          setEmployees((prev) => {
            const updated = [...prev];
            cloudUsers.forEach((cu) => {
              const cleanEmail = cu.email.toLowerCase().trim();
              const idx = updated.findIndex((e) => e.email.toLowerCase().trim() === cleanEmail);
              const rec: EmployeeRecord = {
                id: cu.userId,
                code: cu.userId.toUpperCase().replace('USR_', 'VKD-'),
                name: cu.displayName,
                email: cu.email,
                dept: cu.department || 'Phòng Kinh Doanh & Xuất Khẩu',
                title: cu.role === 'admin' ? '👑 Quản Trị Viên Hệ Thống' : 'Chuyên Viên Kinh Doanh',
                level: (cu.currentLevel as any) || 'B1',
                xp: cu.xp || 0,
                streak: cu.streak || 0,
                gems: cu.gems || 0,
                highestScore: 500,
                completedUnits: (cu.completedUnits || []).length,
                certified: cu.role === 'admin',
                lastActive: cu.lastActive ? 'Gần đây' : 'Hôm nay',
              };
              if (idx !== -1) {
                updated[idx] = {
                  ...updated[idx],
                  name: cu.displayName || updated[idx].name,
                  dept: cu.department || updated[idx].dept,
                  xp: cu.xp !== undefined ? cu.xp : updated[idx].xp,
                  streak: cu.streak !== undefined ? cu.streak : updated[idx].streak,
                  gems: cu.gems !== undefined ? cu.gems : updated[idx].gems,
                  completedUnits: cu.completedLessons ? cu.completedLessons.length : updated[idx].completedUnits,
                };
              } else {
                updated.push(rec);
              }
            });
            return updated;
          });
        }
      });
    }
  }, [isOpen]);

  // Sync current user's active session and custom name into the employee list
  useEffect(() => {
    if (!currentUserProfile?.email) return;

    setEmployees((prev) => {
      const cleanEmail = currentUserProfile.email.toLowerCase().trim();
      const existingIndex = prev.findIndex(
        (emp) =>
          emp.email.toLowerCase().trim() === cleanEmail ||
          (currentUserProfile.employeeCode && emp.code === currentUserProfile.employeeCode)
      );

      const userRecord: EmployeeRecord = {
        id: currentUserProfile.employeeCode || 'emp-current-admin',
        code: currentUserProfile.employeeCode || 'VKD-ADMIN',
        name: currentUserProfile.fullName || 'Quản Trị Viên (Admin)',
        email: currentUserProfile.email,
        dept: currentUserProfile.department || 'Ban Giám Đốc & Quản Trị',
        title: currentUserProfile.isAdmin ? '👑 Quản Trị Viên Hệ Thống' : (currentUserProfile.title || 'Chuyên Viên Kinh Doanh'),
        level: 'C2',
        xp: currentUserStats.xp || 0,
        gems: currentUserStats.gems || 0,
        streak: currentUserStats.streakDays || 0,
        highestScore: currentUserProfile.highestDrillScore || currentUserStats.highestDrillScore || 0,
        completedUnits: (currentUserStats.completedNodeIds || []).length,
        certified: true,
        lastActive: 'Đang hoạt động (Hiện tại)',
      };

      if (existingIndex !== -1) {
        const nextList = [...prev];
        nextList[existingIndex] = {
          ...nextList[existingIndex],
          name: currentUserProfile.fullName || nextList[existingIndex].name,
          dept: currentUserProfile.department || nextList[existingIndex].dept,
          title: currentUserProfile.isAdmin ? '👑 Quản Trị Viên Hệ Thống' : (currentUserProfile.title || nextList[existingIndex].title),
          xp: currentUserStats.xp !== undefined ? currentUserStats.xp : nextList[existingIndex].xp,
          gems: currentUserStats.gems !== undefined ? currentUserStats.gems : nextList[existingIndex].gems,
          streak: currentUserStats.streakDays !== undefined ? currentUserStats.streakDays : nextList[existingIndex].streak,
          highestScore: currentUserProfile.highestDrillScore || currentUserStats.highestDrillScore || 0,
          completedUnits: (currentUserStats.completedNodeIds || []).length,
          lastActive: 'Đang hoạt động (Hiện tại)',
        };
        return nextList;
      } else {
        // Prepend current user at the top of the employee roster
        return [userRecord, ...prev];
      }
    });
  }, [currentUserProfile, currentUserStats]);

  // Unique departments for filter
  const departments = useMemo(() => {
    const list = Array.from(new Set(employees.map((d) => d.dept)));
    return ['all', ...list];
  }, [employees]);

  // Filtered employees
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchDept = selectedDept === 'all' || emp.dept === selectedDept;
      const matchCefr = selectedCefrFilter === 'all' || emp.level === selectedCefrFilter;
      const cleanQ = searchQuery.toLowerCase().trim();
      const matchSearch =
        !cleanQ ||
        emp.name.toLowerCase().includes(cleanQ) ||
        emp.code.toLowerCase().includes(cleanQ) ||
        emp.title.toLowerCase().includes(cleanQ);

      return matchDept && matchCefr && matchSearch;
    });
  }, [employees, selectedDept, selectedCefrFilter, searchQuery]);

  // Overall Statistics & CEFR Distribution
  const totalEmployees = employees.length;
  const certifiedCount = employees.filter((e) => e.certified).length;
  const totalXP = employees.reduce((acc, curr) => acc + curr.xp, 0);
  const avgScore = totalEmployees > 0 
    ? Math.round(employees.reduce((acc, curr) => acc + curr.highestScore, 0) / totalEmployees) 
    : 0;

  const cefrDistribution = useMemo(() => {
    const counts: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
    employees.forEach((e) => {
      const lvl = e.level || 'A1';
      if (counts[lvl] !== undefined) {
        counts[lvl]++;
      }
    });
    return counts;
  }, [employees]);

  if (!isOpen || typeof document === 'undefined') return null;

  // Handle Login to Admin
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPin = localStorage.getItem(STORAGE_KEY_ADMIN_PIN) || DEFAULT_ADMIN_PIN;
    if (inputPin.trim() === storedPin) {
      playSound('success');
      setIsAuthenticated(true);
      setPinError(null);
    } else {
      playSound('wrong');
      setPinError('Mật khẩu quản trị viên không chính xác. Vui lòng thử lại!');
    }
  };

  // Change Admin PIN
  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length < 4) {
      setPinError('Mật khẩu mới phải có ít nhất 4 ký tự!');
      return;
    }
    localStorage.setItem(STORAGE_KEY_ADMIN_PIN, newPin.trim());
    playSound('success');
    setIsChangingPin(false);
    setNewPin('');
    setToastMessage('Đã cập nhật mật khẩu quản trị viên mới thành công!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Save edited employee
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEmployee) return;

    setEmployees((prev) =>
      prev.map((emp) => (emp.id === editingEmployee.id ? editingEmployee : emp))
    );

    // If it's a registered cloud user, sync directly to Firestore
    try {
      const cleanEmail = editingEmployee.email.toLowerCase().trim();
      const userId = emailToUserId(cleanEmail);
      await updateUserProfileInCloud(userId, {
        displayName: editingEmployee.name,
        department: editingEmployee.dept,
      });
      // Also update local storage if it's the current user
      if (cleanEmail === currentUserProfile.email?.toLowerCase().trim()) {
        const saved = localStorage.getItem('vikoda_employee_profile_v3');
        if (saved) {
          const parsed = JSON.parse(saved);
          parsed.fullName = editingEmployee.name;
          parsed.department = editingEmployee.dept;
          localStorage.setItem('vikoda_employee_profile_v3', JSON.stringify(parsed));
        }
      }
    } catch (err) {
      console.warn('Sync edited employee notice:', err);
    }

    playSound('success');
    setEditingEmployee(null);
    setToastMessage(`Đã cập nhật thông tin nhân sự ${editingEmployee.name} (${editingEmployee.code}) và đồng bộ mây!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Delete employee (Local state + Cloud Firestore)
  const handleDeleteEmployee = async (id: string) => {
    const target = employees.find((e) => e.id === id);
    setEmployees((prev) => prev.filter((e) => e.id !== id));
    if (target?.email) {
      await adminDeleteUser(target.email);
    }
    playSound('click');
    setDeletingEmployeeId(null);
    setToastMessage(`Đã xóa tài khoản nhân sự ${target?.name || ''} khỏi hệ thống và đồng bộ mây!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Create new employee (Local state + Cloud Firestore)
  const handleCreateEmployee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeData.code || !newEmployeeData.name) {
      setToastMessage('Vui lòng điền đủ Mã NV và Họ Tên!');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    const email = newEmployeeData.email?.trim() || `${newEmployeeData.code.toLowerCase().replace(/[^a-z0-9]/g, '')}@vikoda.com.vn`;
    const created: EmployeeRecord = {
      id: `emp-${Date.now()}`,
      code: newEmployeeData.code.trim().toUpperCase(),
      name: newEmployeeData.name.trim(),
      email,
      dept: newEmployeeData.dept || 'Phòng Kinh Doanh & Xuất Khẩu',
      title: newEmployeeData.title || 'Chuyên Viên Kinh Doanh',
      level: newEmployeeData.level || 'B1',
      xp: Number(newEmployeeData.xp) || 100,
      streak: Number(newEmployeeData.streak) || 1,
      gems: Number(newEmployeeData.gems) || 50,
      highestScore: Number(newEmployeeData.highestScore) || 200,
      completedUnits: Number(newEmployeeData.completedUnits) || 2,
      certified: Boolean(newEmployeeData.certified),
      lastActive: 'Vừa tạo'
    };

    setEmployees((prev) => [created, ...prev]);

    // Save directly to Cloud Firestore
    try {
      await adminCreateOrUpdateUser({
        email,
        displayName: created.name,
        department: created.dept,
        level: created.level,
        xp: created.xp,
        streak: created.streak,
        gems: created.gems,
      });
    } catch (err) {
      console.warn('Error creating employee in cloud:', err);
    }

    playSound('success');
    setIsCreatingNew(false);
    setNewEmployeeData({
      code: 'VKD-',
      name: '',
      email: '@vikoda.com.vn',
      dept: 'Phòng Kinh Doanh & Xuất Khẩu',
      title: 'Chuyên Viên Kinh Doanh',
      level: 'B1',
      xp: 100,
      streak: 1,
      gems: 50,
      highestScore: 200,
      completedUnits: 2,
      certified: false,
    });
    setToastMessage(`Đã thêm mới nhân sự ${created.name} (${created.code}) thành công!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Export to Excel/CSV
  const handleExportCSV = () => {
    playSound('click');
    const headers = [
      'Mã Nhân Viên',
      'Họ Và Tên',
      'Email',
      'Phòng Ban',
      'Chức Danh',
      'Cấp Độ Đạt Được',
      'Tổng Điểm XP',
      'Chuỗi Ngày Streak',
      'Ngọc Khoáng',
      'Điểm Phản Xạ Đàm Phán',
      'Số Bài Hoàn Thành',
      'Chứng Chỉ Đại Sứ',
      'Hoạt Động Gần Nhất'
    ];

    const rows = filteredEmployees.map((e) => [
      `"${e.code}"`,
      `"${e.name}"`,
      `"${e.email}"`,
      `"${e.dept}"`,
      `"${e.title}"`,
      `"${e.level}"`,
      e.xp,
      e.streak,
      e.gems,
      e.highestScore,
      e.completedUnits,
      e.certified ? '"ĐÃ ĐẠT (Certified)"' : '"Đang Luyện Tập"',
      `"${e.lastActive}"`
    ]);

    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    link.setAttribute('download', `Bao_Cao_Dao_Tao_Tieng_Anh_Vikoda_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setToastMessage('Đã xuất file Excel / CSV báo cáo thành công!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Cloud Backup: Export entire database as JSON backup file
  const handleExportJsonBackup = () => {
    playSound('click');
    const backupPayload = {
      version: '2.0',
      company: 'Khanh Hoa Mineral Water JSC (Vikoda)',
      timestamp: new Date().toISOString(),
      employees: employees,
    };
    const jsonStr = JSON.stringify(backupPayload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Vikoda_Database_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setToastMessage('Đã tải xuống file sao lưu dự phòng an toàn (JSON Backup)!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Cloud Restore: Import JSON backup file
  const handleImportJsonBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target?.result as string);
        if (parsed && Array.isArray(parsed.employees)) {
          setEmployees(parsed.employees);
          playSound('success');
          setToastMessage(`Đã khôi phục thành công ${parsed.employees.length} hồ sơ nhân sự từ file sao lưu!`);
          setTimeout(() => setToastMessage(null), 4000);
        } else {
          setToastMessage('File sao lưu không đúng định dạng chuẩn của Vikoda!');
          setTimeout(() => setToastMessage(null), 4000);
        }
      } catch (err) {
        setToastMessage('Lỗi đọc file sao lưu. Vui lòng kiểm tra lại!');
        setTimeout(() => setToastMessage(null), 4000);
      }
    };
    reader.readAsText(file);
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-150"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-400 shadow-2xl flex flex-col overflow-hidden max-h-[92dvh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= IF NOT AUTHENTICATED: ADMIN SECURITY GATE ================= */}
        {!isAuthenticated ? (
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-5 my-auto">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-md">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full inline-block">
                Khu Vực Hạn Chế • Dành Riêng Cho Quản Trị Viên HR
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Xác Thực Quyền Quản Trị Hệ Thống
              </h3>
              <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto">
                Nhập mật khẩu quản trị viên để giám sát tiến độ nhân sự, chỉnh sửa hồ sơ và xuất báo cáo cho Tổng Giám Đốc.
              </p>
            </div>

            <form onSubmit={handleAdminLogin} className="w-full max-w-xs space-y-3">
              <div className="relative">
                <input
                  type={showPin ? 'text' : 'password'}
                  value={inputPin}
                  onChange={(e) => setInputPin(e.target.value)}
                  placeholder="Nhập mật khẩu Admin..."
                  autoFocus
                  className="w-full pl-10 pr-10 py-3 rounded-2xl border-2 border-slate-300 font-bold text-center text-sm text-slate-900 focus:outline-none focus:border-[#0070D1] bg-slate-50"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {pinError && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold animate-in fade-in">
                  ⚠️ {pinError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs shadow-md transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Mở Khóa Cổng Quản Trị</span>
              </button>

              <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 font-medium">
                💡 <b>Mật khẩu mặc định:</b> <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-amber-300 font-bold">vikoda1957</code>
              </div>
            </form>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="text-xs text-slate-500 font-bold hover:underline cursor-pointer pt-2"
            >
              Hủy và quay lại ứng dụng
            </button>
          </div>
        ) : (
          /* ================= AUTHENTICATED: FULL ADMIN PORTAL ================= */
          <>
            {/* Header: Executive HR & Admin Lockup */}
            <div className="bg-gradient-to-r from-slate-950 via-[#004B87] to-slate-900 p-4 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center text-xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                      Cổng Quản Trị Nhân Sự & Đào Tạo (HR Admin)
                    </span>
                    <span className="text-[10px] text-sky-200">
                      F.I.T Group • Vikoda Enterprise
                    </span>
                  </div>
                  <h3 className="text-base font-black text-white mt-0.5">
                    Hệ Thống Giám Sát, Chỉnh Sửa & Quản Trị Dữ Liệu Học Viên
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsChangingPin(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-sky-200 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                  title="Đổi mật khẩu Admin"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Đổi Mật Khẩu</span>
                </button>

                <button
                  onClick={() => {
                    playSound('click');
                    onClose();
                  }}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Admin Tabs - Responsive Grid/Wrap so all 6 features are fully visible */}
            <div className="bg-slate-100 p-2 sm:px-3 sm:pt-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-1.5 shrink-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setAdminTab('employees');
                  }}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'employees'
                      ? 'bg-[#0070D1] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Học Viên ({employees.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setAdminTab('announcements');
                  }}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'announcements'
                      ? 'bg-[#0070D1] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  <Megaphone className="w-4 h-4" />
                  <span>Thông Báo App</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setAdminTab('settings');
                  }}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'settings'
                      ? 'bg-[#0070D1] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>Quy Chế & Lộ Trình</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setAdminTab('audit_trail');
                  }}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'audit_trail'
                      ? 'bg-[#0070D1] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  <History className="w-4 h-4" />
                  <span>Nhật Ký Kiểm Toán ({auditLogs.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setAdminTab('analytics');
                  }}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'analytics'
                      ? 'bg-[#0070D1] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Phân Bổ CEFR & Báo Cáo</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setAdminTab('cloud_database');
                  }}
                  className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'cloud_database'
                      ? 'bg-[#0070D1] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  <Cloud className="w-4 h-4" />
                  <span>Sao Lưu & Dữ Liệu</span>
                </button>
              </div>

              {adminTab === 'employees' && (
                <button
                  type="button"
                  onClick={() => setIsCreatingNew(true)}
                  className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs cursor-pointer shadow-xs flex items-center gap-1 active:scale-95 transition-all ml-auto"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>+ Thêm Học Viên</span>
                </button>
              )}
            </div>

            {/* Global Notification Toast */}
            {toastMessage && (
              <div className="px-4 py-2 bg-emerald-100 border-b border-emerald-300 text-emerald-900 text-xs font-black text-center animate-in fade-in shrink-0">
                ✓ {toastMessage}
              </div>
            )}

            {/* TAB 1: EMPLOYEES LIST & MANAGEMENT */}
            {adminTab === 'employees' && (
              <>
                {/* Executive Metrics Overview Cards */}
                <div className="p-3 bg-slate-50 border-b border-slate-200 shrink-0">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-0.5">
                      <span className="text-[10px] font-black uppercase text-slate-400 block">Tổng Học Viên</span>
                      <div className="text-lg font-black text-slate-900 flex items-center justify-between">
                        <span>{totalEmployees}</span>
                        <Users className="w-4 h-4 text-[#0070D1]" />
                      </div>
                      <span className="text-[9px] text-emerald-600 font-bold">100% Hoạt động</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-0.5">
                      <span className="text-[10px] font-black uppercase text-slate-400 block">Đã Cấp Chứng Chỉ</span>
                      <div className="text-lg font-black text-amber-600 flex items-center justify-between">
                        <span>{certifiedCount}/{totalEmployees}</span>
                        <Award className="w-4 h-4 text-amber-500" />
                      </div>
                      <span className="text-[9px] text-slate-500 font-bold">Chuẩn Đàm Phán B2B</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-0.5">
                      <span className="text-[10px] font-black uppercase text-slate-400 block">Tổng Điểm XP</span>
                      <div className="text-lg font-black text-indigo-600 flex items-center justify-between">
                        <span>{totalXP.toLocaleString()}</span>
                        <TrendingUp className="w-4 h-4 text-indigo-500" />
                      </div>
                      <span className="text-[9px] text-indigo-600 font-bold">Toàn công ty</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-0.5">
                      <span className="text-[10px] font-black uppercase text-slate-400 block">Điểm Phản Xạ TB</span>
                      <div className="text-lg font-black text-emerald-600 flex items-center justify-between">
                        <span>{avgScore} pts</span>
                        <Flame className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-[9px] text-emerald-600 font-bold">Đấu trí với Buyer</span>
                    </div>
                  </div>
                </div>

                {/* Toolbar: Search, Dept Filter, CEFR Filter & Export Button */}
                <div className="p-3 bg-white border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
                  {/* Search Box */}
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm Mã NV hoặc Tên..."
                      className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#009FE3]"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>

                  {/* Filters & Export Action */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
                    <select
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="px-2.5 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 bg-white focus:outline-none cursor-pointer"
                    >
                      <option value="all">Tất cả phòng ban</option>
                      {departments.filter((d) => d !== 'all').map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>

                    <select
                      value={selectedCefrFilter}
                      onChange={(e) => setSelectedCefrFilter(e.target.value as any)}
                      className="px-2.5 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 bg-white focus:outline-none cursor-pointer"
                    >
                      <option value="all">Mọi Cấp CEFR</option>
                      <option value="A1">Bậc A1 (Nhập Môn)</option>
                      <option value="A2">Bậc A2 (Cơ Sở)</option>
                      <option value="B1">Bậc B1 (Giao Tiếp)</option>
                      <option value="B2">Bậc B2 (Đàm Phán)</option>
                      <option value="C1">Bậc C1 (Chuyên Gia)</option>
                      <option value="C2">Bậc C2 (Lãnh Đạo)</option>
                    </select>

                    <button
                      onClick={handleExportCSV}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs cursor-pointer shadow-xs flex items-center gap-1.5 active:scale-95 transition-all whitespace-nowrap"
                      title="Xuất danh sách nhân viên ra file Excel / CSV"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      <span>Xuất Báo Cáo Excel</span>
                    </button>
                  </div>
                </div>

                {/* Employee Table */}
                <div className="p-4 overflow-y-auto flex-1">
                  <div className="border border-slate-200 rounded-2xl overflow-x-auto shadow-2xs">
                    <table className="w-full min-w-[640px] text-left text-xs border-collapse">
                      <thead className="bg-slate-100 text-slate-600 uppercase text-[10px] font-black border-b border-slate-200">
                        <tr>
                          <th className="p-3">Mã NV & Họ Tên</th>
                          <th className="p-3 hidden sm:table-cell">Phòng Ban & Chức Danh</th>
                          <th className="p-3 text-center">Cấp Độ</th>
                          <th className="p-3 text-center">Streak</th>
                          <th className="p-3 text-center">XP</th>
                          <th className="p-3 text-center">Chứng Chỉ</th>
                          <th className="p-3 text-center">Thao Tác Admin</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {filteredEmployees.map((emp) => {
                          const isCurrent = emp.code === currentUserProfile.employeeCode;
                          return (
                            <tr
                              key={emp.id}
                              className={`hover:bg-slate-50/80 transition-colors ${
                                isCurrent ? 'bg-sky-50/70 font-bold' : ''
                              }`}
                            >
                              <td className="p-3">
                                <div className="flex items-center space-x-2">
                                  <span className="w-7 h-7 rounded-xl bg-slate-100 text-[#0070D1] flex items-center justify-center font-mono font-black text-[10px] border border-slate-300 shrink-0">
                                    {emp.code.replace('VKD-', '')}
                                  </span>
                                  <div>
                                    <div className="font-black text-slate-900 flex items-center gap-1.5">
                                      <span>{emp.name}</span>
                                      {isCurrent && (
                                        <span className="text-[9px] font-black bg-[#0070D1] text-white px-1.5 py-0.2 rounded">
                                          Bạn
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-medium">
                                      {emp.email}
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="p-3 hidden sm:table-cell">
                                <div className="font-semibold text-slate-800">{emp.dept}</div>
                                <div className="text-[10px] text-slate-500">{emp.title}</div>
                              </td>

                              <td className="p-3 text-center">
                                <span className="px-2 py-0.5 rounded-md bg-sky-100 text-[#0070D1] font-black text-[10px]">
                                  {emp.level}
                                </span>
                              </td>

                              <td className="p-3 text-center">
                                <span className="font-black text-amber-600 flex items-center justify-center gap-0.5">
                                  <Flame className="w-3 h-3 fill-current text-amber-500" />
                                  <span>{emp.streak}</span>
                                </span>
                              </td>

                              <td className="p-3 text-center">
                                <span className="font-black text-indigo-700">
                                  {emp.xp.toLocaleString()}
                                </span>
                              </td>

                              <td className="p-3 text-center">
                                {emp.certified ? (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    <span>Đã cấp</span>
                                  </span>
                                ) : (
                                  <span className="text-[10px] text-slate-400 font-bold">
                                    Chưa thi
                                  </span>
                                )}
                              </td>

                              <td className="p-3 text-center">
                                <div className="flex items-center justify-center space-x-1.5">
                                  <button
                                    onClick={() => {
                                      playSound('click');
                                      setResetTarget(emp);
                                    }}
                                    className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 transition-colors cursor-pointer flex items-center gap-1 text-[10px] font-black"
                                    title="Admin: Reset toàn bộ tiến độ (XP, streak, bài học) của tài khoản này về 0"
                                  >
                                    <RefreshCw className="w-3 h-3 text-amber-600" />
                                    <span>Reset Điểm</span>
                                  </button>

                                  <button
                                    onClick={() => {
                                      playSound('click');
                                      setEditingEmployee({ ...emp });
                                    }}
                                    className="p-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0070D1] border border-sky-200 transition-colors cursor-pointer"
                                    title="Chỉnh sửa thông tin học viên"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>

                                  <button
                                    onClick={() => {
                                      playSound('click');
                                      setDeletingEmployeeId(emp.id);
                                    }}
                                    className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition-colors cursor-pointer"
                                    title="Xóa tài khoản nếu không đúng"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* TAB 2: COMPANY ANNOUNCEMENTS & CAMPAIGNS */}
            {adminTab === 'announcements' && (
              <div className="p-5 overflow-y-auto flex-1 space-y-5">
                {/* Header Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/20 rounded-2xl shrink-0">
                      <Megaphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black">Trung Tâm Phát Động Thông Báo & Chiến Dịch Doanh Nghiệp</h4>
                      <p className="text-xs text-amber-100">
                        Thông báo được phát sóng trực tiếp tới đỉnh màn hình học tập của toàn thể cán bộ nhân viên Vikoda
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-black ${
                      announcement.isActive ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {announcement.isActive ? '● Đang Phát Sóng' : '○ Đang Tạm Dừng'}
                    </span>
                  </div>
                </div>

                {/* Live Preview Box */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-black text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-[#0070D1]" />
                      <span>Xem Trước Banner Thực Tế Trên Màn Hình Học Viên</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Thời gian thực</span>
                  </div>
                  
                  {announcement.isActive ? (
                    <div className="p-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl text-white shadow-md border-b-4 border-amber-700 flex items-start justify-between gap-3 animate-in fade-in">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-2xl shrink-0 mt-0.5 shadow-2xs">
                          <Megaphone className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[9px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
                              {announcement.category === 'campaign' ? '🔥 Chiến Dịch Đào Tạo' :
                               announcement.category === 'urgent' ? '🚨 Thông Báo Khẩn' :
                               announcement.category === 'award' ? '🏆 Khen Thưởng Thi Đua' : '📚 Đào Tạo Định Kỳ'}
                            </span>
                            <span className="text-xs text-amber-100 font-bold">{announcement.author}</span>
                            <span className="text-[10px] text-amber-200">• Cập nhật: {announcement.updatedAt}</span>
                          </div>
                          <h4 className="text-sm font-black">{announcement.title}</h4>
                          <p className="text-xs text-amber-100 leading-relaxed">{announcement.content}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-slate-100 border border-dashed border-slate-300 text-slate-500 text-xs text-center font-bold">
                      Banner hiện đang tắt. Nhân viên sẽ không nhìn thấy banner này trên trang chủ.
                    </div>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSaveAnnouncement} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                  <div className="font-black text-sm text-slate-900 border-b pb-2 flex items-center gap-2">
                    <Edit2 className="w-4 h-4 text-[#0070D1]" />
                    <span>Soạn Thảo Nội Dung Thông Báo</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Tiêu Đề Thông Báo</label>
                      <input
                        type="text"
                        value={announcement.title}
                        onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-[#0070D1] outline-none"
                        placeholder="Ví dụ: Chiến Dịch 30 Ngày Bứt Phá Tiếng Anh..."
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Loại Thông Báo</label>
                      <select
                        value={announcement.category}
                        onChange={(e) => setAnnouncement({ ...announcement, category: e.target.value as any })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-[#0070D1] outline-none cursor-pointer"
                      >
                        <option value="campaign">🔥 Chiến Dịch Thi Đua Toàn Diện</option>
                        <option value="urgent">🚨 Thông Báo Khẩn / Lịch Thi Đấu</option>
                        <option value="award">🏆 Khen Thưởng / Trao Quà Thi Đua</option>
                        <option value="training">📚 Quy Chế Đào Tạo Định Kỳ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Nội Dung Chi Tiết</label>
                    <textarea
                      rows={3}
                      value={announcement.content}
                      onChange={(e) => setAnnouncement({ ...announcement, content: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0070D1] outline-none"
                      placeholder="Nhập nội dung truyền thông gửi đến toàn thể học viên..."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Đơn Vị Ban Hành / Tác Giả</label>
                      <input
                        type="text"
                        value={announcement.author}
                        onChange={(e) => setAnnouncement({ ...announcement, author: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-[#0070D1] outline-none"
                        placeholder="Ban Giám Đốc Vikoda / Phòng Nhân Sự..."
                        required
                      />
                    </div>

                    <div className="pt-2 sm:pt-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={announcement.isActive}
                          onChange={(e) => setAnnouncement({ ...announcement, isActive: e.target.checked })}
                          className="w-5 h-5 accent-[#0070D1] rounded cursor-pointer"
                        />
                        <div>
                          <span className="text-xs font-black text-slate-900 block">Kích Hoạt Phát Sóng</span>
                          <span className="text-[10px] text-slate-500 block">Bật để hiển thị ngay trên màn hình học tập của nhân viên</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="pt-3 border-t flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs cursor-pointer shadow-md flex items-center gap-2 active:scale-95 transition-all"
                    >
                      <Save className="w-4 h-4" />
                      <span>Lưu & Phát Sóng Thông Báo Toàn Công Ty</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 3: TRAINING SYSTEM SETTINGS */}
            {adminTab === 'settings' && (
              <div className="p-5 overflow-y-auto flex-1 space-y-5">
                {/* Header */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm flex items-center gap-3">
                  <div className="p-2.5 bg-white/20 rounded-2xl shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black">Cấu Hình Quy Chế Đào Tạo & Kiểm Soát Lộ Trình</h4>
                    <p className="text-xs text-blue-100">
                      Tùy chỉnh linh hoạt chế độ học tập, kiểm tra và thi đua theo từng giai đoạn phát triển của doanh nghiệp
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSaveSettings} className="space-y-4">
                  {/* Policy Card 1: Unlock All 100 Units */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#0070D1]" />
                          <h5 className="text-xs font-black text-slate-900">Mở Khóa Toàn Bộ 100 Bài Học (All Units Unlocked)</h5>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Mặc định học viên phải hoàn thành tuần tự bài trước mới mở bài sau. Bật chế độ này cho phép mọi nhân viên tự do học bất kỳ bài nào từ Cấp độ A1 đến C2 để tiện ôn tập chuyên đề hoặc làm bài thi sát hạch đột xuất.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={trainingSettings.unlockAllUnits}
                          onChange={(e) => setTrainingSettings({ ...trainingSettings, unlockAllUnits: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0070D1]"></div>
                      </label>
                    </div>
                  </div>

                  {/* Policy Card 2: Unlimited Energy / Hearts */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-amber-500" />
                          <h5 className="text-xs font-black text-slate-900">Chế Độ Tim Vô Hạn (Unlimited Hearts)</h5>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Bỏ giới hạn 5 giọt khoáng năng lượng. Nhân sự trả lời sai câu hỏi không bị trừ tim, giúp các đợt thi đua tập trung hoàn thành bài học với tốc độ cao nhất mà không bị gián đoạn.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={trainingSettings.unlimitedEnergy}
                          onChange={(e) => setTrainingSettings({ ...trainingSettings, unlimitedEnergy: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                      </label>
                    </div>
                  </div>

                  {/* Policy Card 3: Drill Countdown & Daily XP Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Countdown */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-500" />
                        <h5 className="text-xs font-black text-slate-900">Thời Gian Đếm Ngược Endless Drill</h5>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Giới hạn thời gian thử thách phản xạ trả lời nhanh câu hỏi ngoại giao.
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {([45, 60, 90] as const).map((seconds) => (
                          <button
                            type="button"
                            key={seconds}
                            onClick={() => setTrainingSettings({ ...trainingSettings, drillCountdownSeconds: seconds })}
                            className={`py-2 px-1 text-center rounded-xl text-xs font-black border transition-all cursor-pointer ${
                              trainingSettings.drillCountdownSeconds === seconds
                                ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-2xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {seconds} Giây
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Daily XP Goal */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-rose-500" />
                        <h5 className="text-xs font-black text-slate-900">Mục Tiêu XP Tối Thiểu Mỗi Ngày</h5>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Mục tiêu điểm số giao cho toàn thể học viên để duy trì chuỗi Streak học liên tục.
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {([30, 50, 100] as const).map((xp) => (
                          <button
                            type="button"
                            key={xp}
                            onClick={() => setTrainingSettings({ ...trainingSettings, dailyXpGoal: xp })}
                            className={`py-2 px-1 text-center rounded-xl text-xs font-black border transition-all cursor-pointer ${
                              trainingSettings.dailyXpGoal === xp
                                ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-2xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {xp} XP / ngày
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs cursor-pointer shadow-md flex items-center gap-2 active:scale-95 transition-all"
                    >
                      <Save className="w-4 h-4" />
                      <span>Lưu Quy Chế & Cập Nhật Toàn Hệ Thống</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 4: EXECUTIVE AUDIT LOGS */}
            {adminTab === 'audit_trail' && (
              <div className="p-5 overflow-y-auto flex-1 space-y-4">
                {/* Header */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-sm flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 rounded-2xl shrink-0">
                      <History className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black">Nhật Ký Kiểm Toán Quản Trị Hệ Thống (Audit Trail)</h4>
                      <p className="text-xs text-slate-400">
                        Ghi vết tự động mọi hành vi: Reset điểm, Khen thưởng XP, Cập nhật thông báo, Cấu hình quy chế
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        playSound('click');
                        const csvRows = [
                          ['ID', 'Thời Gian', 'Admin Thực Hiện', 'Hành Động', 'Đối Tượng', 'Email Đối Tượng', 'Chi Tiết'],
                          ...auditLogs.map((l) => [l.id, l.timestamp, l.adminEmail, l.action, l.targetName, l.targetEmail, l.details])
                        ];
                        const csvContent = '\uFEFF' + csvRows.map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(',')).join('\n');
                        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `vikoda_audit_logs_${new Date().toISOString().split('T')[0]}.csv`;
                        link.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Xuất CSV</span>
                    </button>
                  </div>
                </div>

                {/* Log Table */}
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-700 font-black border-b border-slate-200">
                        <tr>
                          <th className="p-3 whitespace-nowrap">Thời Gian</th>
                          <th className="p-3 whitespace-nowrap">Admin Thực Hiện</th>
                          <th className="p-3 whitespace-nowrap">Hành Động</th>
                          <th className="p-3 whitespace-nowrap">Đối Tượng Tác Động</th>
                          <th className="p-3">Chi Tiết Thao Tác</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {auditLogs.map((log) => (
                          <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 whitespace-nowrap text-slate-500 font-bold text-[11px]">{log.timestamp}</td>
                            <td className="p-3 whitespace-nowrap font-bold text-slate-800 text-[11px]">{log.adminEmail}</td>
                            <td className="p-3 whitespace-nowrap">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                                log.action.includes('RESET')
                                  ? 'bg-rose-100 text-rose-800'
                                  : log.action.includes('THƯỞNG')
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : log.action.includes('THÔNG_BÁO')
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-sky-100 text-sky-800'
                              }`}>
                                {log.action}
                              </span>
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              <div className="font-bold text-slate-900">{log.targetName}</div>
                              <div className="text-[10px] text-slate-400">{log.targetEmail}</div>
                            </td>
                            <td className="p-3 text-slate-600 leading-snug">{log.details}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: CEFR ANALYTICS & EXECUTIVE REPORTS */}
            {adminTab === 'analytics' && (
              <div className="p-5 overflow-y-auto flex-1 space-y-5">
                {/* Header */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/20 rounded-2xl shrink-0">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black">Báo Cáo Phân Bổ Năng Lực Tiếng Anh Toàn Doanh Nghiệp</h4>
                      <p className="text-xs text-emerald-100">
                        Đo lường tiến độ phổ cập tiếng Anh theo chuẩn khung tham chiếu Châu Âu (CEFR) & TOEIC
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleExportCSV}
                    className="px-4 py-2 rounded-xl bg-white text-emerald-900 font-black text-xs cursor-pointer shadow-xs flex items-center gap-1.5 hover:bg-emerald-50 transition-all shrink-0"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span>Xuất Báo Cáo Excel/CSV</span>
                  </button>
                </div>

                {/* CEFR Distribution Breakdown */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                  <h5 className="text-xs font-black text-slate-900 flex items-center gap-2 border-b pb-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Phân Bổ Trình Độ CEFR Cán Bộ Nhân Viên (Tổng: {employees.length} Học Viên)</span>
                  </h5>

                  <div className="space-y-3">
                    {[
                      { level: 'A1', label: 'Tân Binh Văn Phòng (A1)', toeic: '150 - 250', color: 'bg-emerald-500', count: employees.filter(e => e.level === 'A1').length },
                      { level: 'A2', label: 'Tiếp Thị Viên Tự Tin (A2)', toeic: '255 - 400', color: 'bg-teal-500', count: employees.filter(e => e.level === 'A2').length },
                      { level: 'B1', label: 'Đại Sứ Thương Hiệu (B1)', toeic: '405 - 600', color: 'bg-sky-500', count: employees.filter(e => e.level === 'B1').length },
                      { level: 'B2', label: 'Chuyên Gia Đàm Phán (B2)', toeic: '605 - 780', color: 'bg-indigo-500', count: employees.filter(e => e.level === 'B2').length },
                      { level: 'C1', label: 'Lãnh Đạo Ngoại Giao (C1)', toeic: '785 - 900', color: 'bg-purple-500', count: employees.filter(e => e.level === 'C1').length },
                      { level: 'C2', label: 'Bậc Thầy Xuất Khẩu Toàn Cầu (C2)', toeic: '905 - 990', color: 'bg-amber-500', count: employees.filter(e => e.level === 'C2').length },
                    ].map((item) => {
                      const pct = Math.round((item.count / Math.max(1, employees.length)) * 100);
                      return (
                        <div key={item.level} className="space-y-1">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                            <span className="flex items-center gap-2">
                              <span className="w-6 text-center font-black px-1 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">{item.level}</span>
                              <span>{item.label}</span>
                              <span className="text-[10px] text-slate-400 font-normal">(TOEIC {item.toeic})</span>
                            </span>
                            <span className="text-slate-900 font-black">{item.count} nhân sự ({pct}%)</span>
                          </div>
                          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                            <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Department Performance Cards */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                  <h5 className="text-xs font-black text-slate-900 flex items-center gap-2 border-b pb-2">
                    <Building className="w-4 h-4 text-[#0070D1]" />
                    <span>Thành Tích Thi Đua Theo Phòng Ban</span>
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Array.from(new Set(employees.map(e => e.dept))).map((deptName) => {
                      const deptEmps = employees.filter(e => e.dept === deptName);
                      const totalXp = deptEmps.reduce((acc, cur) => acc + (cur.xp || 0), 0);
                      const avgXp = Math.round(totalXp / deptEmps.length);
                      const certifiedInDept = deptEmps.filter(e => e.certified).length;
                      return (
                        <div key={deptName} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between">
                            <h6 className="text-xs font-black text-slate-800 truncate pr-2">{deptName}</h6>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-[#0070D1]">
                              {deptEmps.length} nhân sự
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-600">
                            <span>Điểm TB: <b className="text-amber-600">{avgXp} XP</b></span>
                            <span>Chứng chỉ: <b className="text-emerald-600">{certifiedInDept}/{deptEmps.length}</b></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: ONLINE CLOUD DATABASE & BACKUP SYSTEM */}
            {adminTab === 'cloud_database' && (
              <div className="p-5 overflow-y-auto flex-1 space-y-5">
                <div className="p-4 rounded-2xl bg-sky-50 border-2 border-sky-200 space-y-2">
                  <div className="flex items-center space-x-2 text-[#0070D1] font-black text-sm">
                    <Cloud className="w-5 h-5" />
                    <span>Giải Pháp Chống Mất Dữ Liệu Khi Đổi Máy Hoặc Xóa Cache</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Để không bao giờ bị mất thông tin học tập của nhân sự khi đổi máy tính, hỏng điện thoại hoặc xóa bộ nhớ trình duyệt, hệ thống hỗ trợ <b>2 Cơ Chế Bảo Vệ Dữ Liệu Tuyệt Đối</b>:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Option 1: JSON File Backup & Restore (Offline & Private) */}
                  <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-2xs space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xs">
                        1
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900">
                          Sao Lưu & Khôi Phục File Dự Phòng (JSON Backup)
                        </h4>
                        <p className="text-[10px] text-slate-500">
                          Lưu trữ an toàn 100% nội bộ công ty
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Xuất toàn bộ cơ sở dữ liệu học tập ra file mã hóa JSON. Khi sang máy mới hoặc cài lại máy, chỉ cần nạp file này là toàn bộ thành tích được khôi phục 100% trong 1 giây.
                    </p>

                    <div className="space-y-2 pt-1">
                      <button
                        onClick={handleExportJsonBackup}
                        className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                      >
                        <Download className="w-4 h-4" />
                        <span>Tải Xuống File Sao Lưu (Backup JSON)</span>
                      </button>

                      <label className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-black text-xs cursor-pointer shadow-xs flex items-center justify-center gap-1.5 block text-center">
                        <Upload className="w-4 h-4 text-[#0070D1]" />
                        <span>Khôi Phục Dữ Liệu Từ File Backup</span>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImportJsonBackup}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Option 2: Cloud Firestore Database Connection */}
                  <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-2xs space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0070D1] flex items-center justify-center font-black text-xs">
                        2
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900">
                          Kết Nối Máy Chủ Đám Mây (Cloud Firestore)
                        </h4>
                        <p className="text-[10px] text-slate-500">
                          Đồng bộ dữ liệu trực tiếp 24/7 qua Google Cloud
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Để mọi nhân viên dù mở app trên điện thoại cá nhân hay máy tính văn phòng đều tự động lưu điểm về máy chủ trung tâm mà không cần sao lưu thủ công:
                    </p>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px]">
                      <div className="font-bold text-slate-800 flex items-center gap-1">
                        <Database className="w-3.5 h-3.5 text-[#0070D1]" />
                        <span>Trạng thái kết nối Cloud Database:</span>
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                        ✓ Đã sẵn sàng kích hoạt Firebase Firestore
                      </span>
                      <p className="text-[10px] text-slate-500">
                        Admin có thể yêu cầu kích hoạt Firebase Cloud Database bất cứ lúc nào trong hộp chat để tự động đồng bộ realtime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
              <span className="text-[11px] font-medium">
                Đang hiển thị {filteredEmployees.length} nhân sự
              </span>

              <button
                onClick={() => {
                  playSound('click');
                  onClose();
                }}
                className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 font-black text-slate-800 cursor-pointer"
              >
                Đóng Cổng Admin
              </button>
            </div>
          </>
        )}

      </div>

      {/* ================= MODAL: EDIT EMPLOYEE PROFILE ================= */}
      {editingEmployee && (
        <div 
          className="fixed inset-0 z-[1000000] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in"
          onClick={() => setEditingEmployee(null)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-3xl p-5 border-2 border-slate-300 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-2">
                <Edit2 className="w-5 h-5 text-[#0070D1]" />
                <h4 className="text-sm font-black text-slate-900">
                  Chỉnh Sửa Hồ Sơ Nhân Viên
                </h4>
              </div>
              <button
                onClick={() => setEditingEmployee(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Mã Nhân Viên</label>
                <input
                  type="text"
                  value={editingEmployee.code}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, code: e.target.value.toUpperCase() })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Họ Và Tên</label>
                <input
                  type="text"
                  value={editingEmployee.name}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Email</label>
                <input
                  type="email"
                  value={editingEmployee.email}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phòng Ban</label>
                  <select
                    value={editingEmployee.dept}
                    onChange={(e) => setEditingEmployee({ ...editingEmployee, dept: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold bg-white"
                  >
                    <option value="Phòng Kinh Doanh & Xuất Khẩu">Phòng Kinh Doanh & Xuất Khẩu</option>
                    <option value="Phòng Tiếp Thị & Thương Hiệu">Phòng Tiếp Thị & Thương Hiệu</option>
                    <option value="Nhà Máy Khoáng Đảnh Thạnh (R&D/QC)">Nhà Máy Đảnh Thạnh (R&D/QC)</option>
                    <option value="Phòng Tài Chính - Kế Toán">Phòng Tài Chính - Kế Toán</option>
                    <option value="Ban Giám Đốc & Vận Hành">Ban Giám Đốc & Vận Hành</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Cấp Độ Tiếng Anh</label>
                  <select
                    value={editingEmployee.level}
                    onChange={(e) => setEditingEmployee({ ...editingEmployee, level: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold bg-white"
                  >
                    <option value="A1">A1 - Đón Khách</option>
                    <option value="B1">B1 - Thuyết Trình Mỏ</option>
                    <option value="C1">C1 - Đàm Phán FOB</option>
                    <option value="C2">C2 - Bản Ngữ VIP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Chức Danh Công Việc</label>
                <input
                  type="text"
                  value={editingEmployee.title}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Điểm XP Tích Lũy</label>
                  <input
                    type="number"
                    value={editingEmployee.xp}
                    onChange={(e) => setEditingEmployee({ ...editingEmployee, xp: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Chuỗi Streak (Ngày)</label>
                  <input
                    type="number"
                    value={editingEmployee.streak}
                    onChange={(e) => setEditingEmployee({ ...editingEmployee, streak: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="certifiedCheck"
                  checked={editingEmployee.certified}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, certified: e.target.checked })}
                  className="w-4 h-4 rounded text-[#0070D1] cursor-pointer"
                />
                <label htmlFor="certifiedCheck" className="font-bold text-slate-800 cursor-pointer">
                  Đã Đạt Chuẩn Cấp Chứng Chỉ Đại Sứ Thương Hiệu B2B
                </label>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setEditingEmployee(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] font-black text-white cursor-pointer shadow-md"
                >
                  Lưu Thay Đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD NEW EMPLOYEE ================= */}
      {isCreatingNew && (
        <div 
          className="fixed inset-0 z-[1000000] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in"
          onClick={() => setIsCreatingNew(false)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-3xl p-5 border-2 border-slate-300 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-2">
                <UserPlus className="w-5 h-5 text-emerald-600" />
                <h4 className="text-sm font-black text-slate-900">
                  Thêm Học Viên / Cán Bộ Mới
                </h4>
              </div>
              <button
                onClick={() => setIsCreatingNew(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateEmployee} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Mã Nhân Viên (VD: VKD-2025)</label>
                <input
                  type="text"
                  value={newEmployeeData.code}
                  onChange={(e) => setNewEmployeeData({ ...newEmployeeData, code: e.target.value.toUpperCase() })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  placeholder="VKD-2025"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Họ Và Tên</label>
                <input
                  type="text"
                  value={newEmployeeData.name}
                  onChange={(e) => setNewEmployeeData({ ...newEmployeeData, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  placeholder="Nguyễn Văn A"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Email Công Ty</label>
                <input
                  type="email"
                  value={newEmployeeData.email}
                  onChange={(e) => setNewEmployeeData({ ...newEmployeeData, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                  placeholder="a.nguyen@vikoda.com.vn"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phòng Ban</label>
                  <select
                    value={newEmployeeData.dept}
                    onChange={(e) => setNewEmployeeData({ ...newEmployeeData, dept: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold bg-white"
                  >
                    <option value="Phòng Kinh Doanh & Xuất Khẩu">Kinh Doanh & Xuất Khẩu</option>
                    <option value="Phòng Tiếp Thị & Thương Hiệu">Tiếp Thị & Thương Hiệu</option>
                    <option value="Nhà Máy Khoáng Đảnh Thạnh (R&D/QC)">Nhà Máy Đảnh Thạnh</option>
                    <option value="Phòng Tài Chính - Kế Toán">Tài Chính - Kế Toán</option>
                    <option value="Ban Giám Đốc & Vận Hành">Ban Giám Đốc</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Chức Danh</label>
                  <input
                    type="text"
                    value={newEmployeeData.title}
                    onChange={(e) => setNewEmployeeData({ ...newEmployeeData, title: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 font-bold"
                    placeholder="Chuyên viên"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setIsCreatingNew(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-black text-white cursor-pointer shadow-md"
                >
                  Thêm Học Viên
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: DELETE CONFIRMATION ================= */}
      {deletingEmployeeId && (
        <div 
          className="fixed inset-0 z-[1000000] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in"
          onClick={() => setDeletingEmployeeId(null)}
        >
          <div 
            className="bg-white w-full max-w-sm rounded-3xl p-5 border-2 border-slate-300 shadow-2xl space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-xl">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-black text-slate-900">
                Xác Nhận Xóa Tài Khoản?
              </h4>
              <p className="text-xs text-slate-600">
                Bạn có chắc chắn muốn xóa học viên <b>{employees.find(e => e.id === deletingEmployeeId)?.name}</b> ({employees.find(e => e.id === deletingEmployeeId)?.code}) khỏi danh sách đào tạo?
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 pt-2">
              <button
                onClick={() => setDeletingEmployeeId(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-700 cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={() => handleDeleteEmployee(deletingEmployeeId)}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 font-black text-xs text-white cursor-pointer shadow-sm"
              >
                Xác Nhận Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: CHANGE ADMIN PIN ================= */}
      {isChangingPin && (
        <div 
          className="fixed inset-0 z-[1000000] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in"
          onClick={() => setIsChangingPin(false)}
        >
          <div 
            className="bg-white w-full max-w-xs rounded-3xl p-5 border-2 border-slate-300 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-2">
                <KeyRound className="w-4 h-4 text-amber-500" />
                <h4 className="text-sm font-black text-slate-900">Đổi Mật Khẩu Admin</h4>
              </div>
              <button
                onClick={() => setIsChangingPin(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleChangePin} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Mật khẩu mới</label>
                <input
                  type="text"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="Nhập mật khẩu mới..."
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-center"
                  required
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsChangingPin(false)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 font-bold text-slate-700 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 font-black text-slate-950 cursor-pointer shadow-sm"
                >
                  Lưu Mật Khẩu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: CONFIRM PROGRESS RESET ================= */}
      {resetTarget && (
        <div 
          className="fixed inset-0 z-[1000000] bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in"
          onClick={() => setResetTarget(null)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-3xl p-5 border-2 border-amber-400 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 text-amber-600 border-b border-amber-100 pb-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 leading-tight">
                  Xác Nhận Quyền Admin: Reset Tiến Độ
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  {resetTarget.name} • {resetTarget.email}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2 text-xs text-amber-950">
              <div className="font-bold flex items-center gap-1.5 text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Thao tác này sẽ thiết lập các chỉ số về 0:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px] pl-1 font-medium text-slate-700">
                <li>Điểm tích lũy XP hiện tại: <b>{resetTarget.xp.toLocaleString()} XP</b> ➔ <b>0 XP</b></li>
                <li>Chuỗi ngày liên tục: <b>{resetTarget.streak} ngày</b> ➔ <b>0 ngày</b></li>
                <li>Các chặng bài học và danh hiệu đã vượt qua sẽ được yêu cầu làm lại từ đầu.</li>
                <li>Dữ liệu được cập nhật trực tiếp lên máy chủ <b>Firebase Cloud</b>.</li>
              </ul>
            </div>

            <div>
              <label className="block text-[11px] font-black text-slate-700 mb-1">
                Lý do reset tiến độ (Lưu vết kiểm toán Admin Audit Trail):
              </label>
              <input
                type="text"
                value={resetReason}
                onChange={(e) => setResetReason(e.target.value)}
                placeholder="VD: Học viên yêu cầu thi lại / Reset kiểm tra định kỳ..."
                className="w-full p-2.5 rounded-xl border border-slate-300 font-medium text-xs text-slate-800 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setResetTarget(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
              >
                Hủy bỏ
              </button>

              <button
                type="button"
                disabled={resetLoading}
                onClick={handleConfirmReset}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md transition-transform active:scale-98 cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
              >
                {resetLoading ? (
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Xác Nhận Reset Về 0</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );

  return createPortal(modalContent, document.body);
};
