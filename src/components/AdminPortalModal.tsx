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
  EyeOff
} from 'lucide-react';
import { EmployeeProfile, GamificationState } from '../types';
import { playSound } from '../services/soundEffects';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserProfile: EmployeeProfile;
  currentUserStats: GamificationState;
}

export interface EmployeeRecord {
  id: string;
  code: string;
  name: string;
  email: string;
  dept: string;
  title: string;
  level: 'A1' | 'B1' | 'C1' | 'C2';
  xp: number;
  streak: number;
  gems: number;
  highestScore: number;
  completedUnits: number;
  certified: boolean;
  lastActive: string;
}

const DEFAULT_ADMIN_PIN = 'vikoda1957';
const STORAGE_KEY_ADMIN_PIN = 'vikoda_admin_pin_secret';
const STORAGE_KEY_EMPLOYEES = 'vikoda_corporate_employees_v2';

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
    title: 'Chuyên Viên PR & Truyền Thông',
    level: 'B1',
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
    title: 'Kỹ Sư Kiểm Soát Chất Lượng Nguồn 220m',
    level: 'C1',
    xp: 1560,
    streak: 11,
    gems: 230,
    highestScore: 590,
    completedUnits: 15,
    certified: true,
    lastActive: 'Hôm nay'
  },
  {
    id: 'emp-6',
    code: 'VKD-2020',
    name: 'Vũ Hải Yến',
    email: 'yen.finance@vikoda.com.vn',
    dept: 'Phòng Tài Chính - Kế Toán',
    title: 'Chuyên Viên Thanh Toán Quốc Tế & L/C',
    level: 'B1',
    xp: 750,
    streak: 5,
    gems: 80,
    highestScore: 390,
    completedUnits: 6,
    certified: false,
    lastActive: '3 ngày trước'
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
  currentUserStats
}) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [inputPin, setInputPin] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);
  const [showPin, setShowPin] = useState<boolean>(false);

  // Change PIN modal
  const [isChangingPin, setIsChangingPin] = useState<boolean>(false);
  const [newPin, setNewPin] = useState<string>('');

  // Department filter & search
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active view inside Admin
  const [adminTab, setAdminTab] = useState<'employees' | 'cloud_database'>('employees');

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

  // Editing modal state
  const [editingEmployee, setEditingEmployee] = useState<EmployeeRecord | null>(null);
  const [deletingEmployeeId, setDeletingEmployeeId] = useState<string | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);

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

  // Sync current user's active session stats into the employee list
  useEffect(() => {
    setEmployees((prev) =>
      prev.map((emp) => {
        if (emp.code === currentUserProfile.employeeCode) {
          return {
            ...emp,
            name: currentUserProfile.fullName || emp.name,
            dept: currentUserProfile.department || emp.dept,
            title: currentUserProfile.title || emp.title,
            xp: Math.max(emp.xp, currentUserStats.xp),
            gems: Math.max(emp.gems, currentUserStats.gems),
            streak: Math.max(emp.streak, currentUserStats.streakDays),
            highestScore: Math.max(emp.highestScore, currentUserProfile.highestDrillScore || 0),
            lastActive: 'Đang hoạt động'
          };
        }
        return emp;
      })
    );
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
      const cleanQ = searchQuery.toLowerCase().trim();
      const matchSearch =
        !cleanQ ||
        emp.name.toLowerCase().includes(cleanQ) ||
        emp.code.toLowerCase().includes(cleanQ) ||
        emp.title.toLowerCase().includes(cleanQ);

      return matchDept && matchSearch;
    });
  }, [employees, selectedDept, searchQuery]);

  // Overall Statistics
  const totalEmployees = employees.length;
  const certifiedCount = employees.filter((e) => e.certified).length;
  const totalXP = employees.reduce((acc, curr) => acc + curr.xp, 0);
  const avgScore = totalEmployees > 0 
    ? Math.round(employees.reduce((acc, curr) => acc + curr.highestScore, 0) / totalEmployees) 
    : 0;

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
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEmployee) return;

    setEmployees((prev) =>
      prev.map((emp) => (emp.id === editingEmployee.id ? editingEmployee : emp))
    );
    playSound('success');
    setEditingEmployee(null);
    setToastMessage(`Đã cập nhật thông tin nhân sự ${editingEmployee.name} (${editingEmployee.code})!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Delete employee
  const handleDeleteEmployee = (id: string) => {
    const target = employees.find((e) => e.id === id);
    setEmployees((prev) => prev.filter((e) => e.id !== id));
    playSound('click');
    setDeletingEmployeeId(null);
    setToastMessage(`Đã xóa tài khoản nhân sự ${target?.name || ''} khỏi hệ thống đào tạo!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Create new employee
  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeData.code || !newEmployeeData.name) {
      setToastMessage('Vui lòng điền đủ Mã NV và Họ Tên!');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    const created: EmployeeRecord = {
      id: `emp-${Date.now()}`,
      code: newEmployeeData.code.trim().toUpperCase(),
      name: newEmployeeData.name.trim(),
      email: newEmployeeData.email?.trim() || `${newEmployeeData.code.toLowerCase()}@vikoda.com.vn`,
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

            {/* Admin Tabs */}
            <div className="bg-slate-100 px-4 pt-2 border-b border-slate-200 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setAdminTab('employees')}
                  className={`px-3 py-2 text-xs font-black border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'employees'
                      ? 'border-[#0070D1] text-[#0070D1] bg-white rounded-t-xl'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Danh Sách Học Viên & Chỉnh Sửa ({employees.length})</span>
                </button>

                <button
                  onClick={() => setAdminTab('cloud_database')}
                  className={`px-3 py-2 text-xs font-black border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    adminTab === 'cloud_database'
                      ? 'border-[#0070D1] text-[#0070D1] bg-white rounded-t-xl'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Cloud className="w-4 h-4" />
                  <span>Cơ Sở Dữ Liệu Online & Sao Lưu Mây</span>
                </button>
              </div>

              {adminTab === 'employees' && (
                <button
                  onClick={() => setIsCreatingNew(true)}
                  className="px-3 py-1.5 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs cursor-pointer shadow-xs flex items-center gap-1 active:scale-95 transition-all mb-1"
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
            {adminTab === 'employees' ? (
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

                {/* Toolbar: Search, Dept Filter & Export Button */}
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

                  {/* Department Filter & Export Action */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
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
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                    <table className="w-full text-left text-xs border-collapse">
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
            ) : (
              /* TAB 2: ONLINE CLOUD DATABASE & BACKUP SYSTEM */
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

    </div>
  );

  return createPortal(modalContent, document.body);
};
