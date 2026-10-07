import React, { useState, useEffect } from 'react';
import { 
  X, 
  Trophy, 
  Flame, 
  Sparkles, 
  Medal, 
  Crown, 
  Zap, 
  Award, 
  TrendingUp, 
  RefreshCw,
  UserCheck,
  RotateCcw
} from 'lucide-react';
import { LeaderboardEntry, EmployeeProfile, GamificationState } from '../types';
import { CourseLevel } from '../data/curriculumData';
import { CompanyEmblem } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { fetchAllUsersAdmin, UserCloudProfile } from '../services/firebase';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: EmployeeProfile;
  stats: GamificationState;
  onStartDrill: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  stats,
  onStartDrill
}) => {
  const [filterTab, setFilterTab] = useState<'xp' | 'streak' | 'drill' | 'practice'>('xp');
  const [cohortFilter, setCohortFilter] = useState<'all' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1-C2'>('all');
  const [cloudUsers, setCloudUsers] = useState<UserCloudProfile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch real users from Cloud Firestore
  const loadLeaderboardData = async () => {
    setIsLoading(true);
    try {
      const users = await fetchAllUsersAdmin();
      setCloudUsers(users);
    } catch (e) {
      console.warn('Leaderboard cloud fetch notice:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeaderboardData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Build combined real + corporate benchmark list
  const entries: LeaderboardEntry[] = [];
  const registeredEmails = new Set<string>();

  const myPracticeCount = stats.practiceStats?.totalPracticeCount || currentUser.totalPracticeCount || stats.completedNodeIds.length || 0;

  // Helper to compute CEFR level from XP and completed lessons
  const computeCefr = (xp: number, completedCount: number = 0, explicitLevel?: CourseLevel): CourseLevel => {
    if (explicitLevel && ['A1', 'A2', 'B1', 'B2', 'C1-C2'].includes(explicitLevel)) return explicitLevel;
    if (completedCount >= 80 || xp >= 4500) return 'C1-C2';
    if (completedCount >= 60 || xp >= 2800) return 'B2';
    if (completedCount >= 40 || xp >= 1600) return 'B1';
    if (completedCount >= 20 || xp >= 700) return 'A2';
    return 'A1';
  };

  const myLevel: CourseLevel = computeCefr(stats.xp, stats.completedNodeIds.length);

  // 1. Add all real users from Cloud Firestore
  cloudUsers.forEach((u) => {
    const isMe = 
      (currentUser.email && u.email.toLowerCase() === currentUser.email.toLowerCase()) ||
      u.userId === ('usr_' + (currentUser.email || '').replace(/[^a-z0-9]/g, '_'));

    registeredEmails.add(u.email.toLowerCase().trim());

    const userXp = isMe ? Math.max(stats.xp, u.xp || 0) : (u.xp || 0);
    const completedUnits = isMe ? stats.completedNodeIds.length : (u.completedLessons ? u.completedLessons.length : Math.round(userXp / 50));
    const userLevel = computeCefr(userXp, completedUnits, u.currentLevel as CourseLevel);

    entries.push({
      id: u.userId,
      name: isMe ? `${currentUser.fullName || u.displayName} (Bạn)` : u.displayName,
      code: u.userId.toUpperCase().replace('USR_', 'VKD-'),
      dept: isMe ? currentUser.department : (u.department || 'Nhân Viên Vikoda'),
      avatar: isMe ? currentUser.avatarUrl : (u.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'),
      drillScore: isMe ? Math.max(currentUser.highestDrillScore || 0, stats.highestDrillScore || 0) : (u.highestDrillScore || 300),
      xp: userXp,
      streak: isMe ? Math.max(stats.streakDays, u.streak || 0) : (u.streak || 0),
      practiceCount: isMe ? myPracticeCount : Math.max(12, Math.round((u.xp || 100) / 45)),
      rankBadge: u.role === 'admin' ? '👑 Admin' : 'Học Viên',
      level: userLevel,
      isCurrentUser: isMe,
    });
  });

  // 2. Ensure current user is in entries if not found in cloud
  if (currentUser.email && !registeredEmails.has(currentUser.email.toLowerCase().trim())) {
    entries.push({
      id: 'current_user',
      name: `${currentUser.fullName || 'Bạn'} (Bạn)`,
      code: currentUser.employeeCode || 'VKD-USER',
      dept: currentUser.department || 'Phòng Kinh Doanh & Xuất Khẩu',
      avatar: currentUser.avatarUrl,
      drillScore: Math.max(currentUser.highestDrillScore || 0, stats.highestDrillScore || 0),
      xp: stats.xp,
      streak: stats.streakDays,
      practiceCount: myPracticeCount,
      rankBadge: currentUser.isAdmin ? '👑 Admin' : 'Học Viên',
      level: myLevel,
      isCurrentUser: true,
    });
    registeredEmails.add(currentUser.email.toLowerCase().trim());
  }

  // 3. Corporate Benchmark Roster covering all CEFR levels to ensure lively competition in every tier
  const CORPORATE_BENCHMARKS: LeaderboardEntry[] = [
    // --- Bảng A1 (Tân Binh Văn Phòng) ---
    {
      id: 'vkd-bm-a1-1',
      name: 'Nguyễn Văn Hùng',
      code: 'VKD-2035',
      dept: 'Kho Vận & Vận Chuyển Đảnh Thạnh',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      drillScore: 380,
      xp: 420,
      streak: 7,
      practiceCount: 22,
      rankBadge: 'Tân Binh A1',
      level: 'A1',
    },
    {
      id: 'vkd-bm-a1-2',
      name: 'Lê Thuỳ Dung',
      code: 'VKD-2041',
      dept: 'Hành Chính Nhân Sự',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
      drillScore: 410,
      xp: 590,
      streak: 9,
      practiceCount: 28,
      rankBadge: 'Tân Binh A1',
      level: 'A1',
    },
    // --- Bảng A2 (Tiếp Thị Viên Tự Tin) ---
    {
      id: 'vkd-bm-a2-1',
      name: 'Phan Quốc Bảo',
      code: 'VKD-2018',
      dept: 'Kỹ Thuật Dây Chuyền Krones',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
      drillScore: 540,
      xp: 980,
      streak: 8,
      practiceCount: 35,
      rankBadge: 'Tiếp Thị A2',
      level: 'A2',
    },
    {
      id: 'vkd-bm-a2-2',
      name: 'Vũ Thảo My',
      code: 'VKD-2024',
      dept: 'Chăm Sóc Khách Hàng',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      drillScore: 610,
      xp: 1350,
      streak: 11,
      practiceCount: 42,
      rankBadge: 'Tiếp Thị A2',
      level: 'A2',
    },
    // --- Bảng B1 (Đại Sứ Kinh Doanh) ---
    {
      id: 'vkd-bm-b1-1',
      name: 'Lê Hoàng Nam',
      code: 'VKD-1092',
      dept: 'HORECA 5-Star Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      drillScore: 720,
      xp: 1920,
      streak: 14,
      practiceCount: 56,
      rankBadge: 'Đại Sứ B1',
      level: 'B1',
    },
    {
      id: 'vkd-bm-b1-2',
      name: 'Phạm Thu Trang',
      code: 'VKD-0824',
      dept: 'Tiếp Thị & Truyền Thông',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
      drillScore: 790,
      xp: 2350,
      streak: 16,
      practiceCount: 64,
      rankBadge: 'Đại Sứ B1',
      level: 'B1',
    },
    // --- Bảng B2 (Chuyên Gia Đàm Phán) ---
    {
      id: 'vkd-bm-b2-1',
      name: 'Trần Văn Minh',
      code: 'VKD-1957',
      dept: 'Kinh Doanh Quốc Tế',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      drillScore: 860,
      xp: 3450,
      streak: 21,
      practiceCount: 82,
      rankBadge: 'Đàm Phán B2',
      level: 'B2',
    },
    {
      id: 'vkd-bm-b2-2',
      name: 'Đặng Tuấn Anh',
      code: 'VKD-1995',
      dept: 'Nhà Máy Khoáng Đảnh Thạnh (R&D)',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
      drillScore: 820,
      xp: 3100,
      streak: 19,
      practiceCount: 75,
      rankBadge: 'Đàm Phán B2',
      level: 'B2',
    },
    // --- Bảng C1-C2 (Lãnh Đạo Ngoại Giao) ---
    {
      id: 'vkd-bm-c-1',
      name: 'Nguyễn Thị Mai Lan',
      code: 'VKD-1988',
      dept: 'Kinh Doanh Xuất Khẩu (Nhật Bản & Mỹ)',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
      drillScore: 920,
      xp: 4950,
      streak: 26,
      practiceCount: 108,
      rankBadge: 'Lãnh Đạo C1-C2',
      level: 'C1-C2',
    },
    {
      id: 'vkd-bm-c-2',
      name: 'Hoàng Quốc Việt',
      code: 'VKD-1960',
      dept: 'Ban Giám Đốc & Vận Hành',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
      drillScore: 950,
      xp: 5600,
      streak: 30,
      practiceCount: 125,
      rankBadge: 'Lãnh Đạo C1-C2',
      level: 'C1-C2',
    }
  ];

  CORPORATE_BENCHMARKS.forEach(bm => {
    if (!entries.some(e => e.id === bm.id)) {
      entries.push(bm);
    }
  });

  // Sort based on current filterTab
  const sortedEntries = [...entries].sort((a, b) => {
    if (filterTab === 'xp') return (b.xp || 0) - (a.xp || 0);
    if (filterTab === 'streak') return (b.streak || 0) - (a.streak || 0);
    if (filterTab === 'practice') return (b.practiceCount || 0) - (a.practiceCount || 0);
    return (b.drillScore || 0) - (a.drillScore || 0);
  });

  // Filter by CEFR cohort (Support C1, C2 and C1-C2 in the executive leader board)
  const displayedEntries = sortedEntries.filter((entry) => {
    if (cohortFilter === 'all') return true;
    const lvl = String(entry.level || '');
    if (cohortFilter === 'C1-C2') {
      return lvl.includes('C1') || lvl.includes('C2');
    }
    return entry.level === cohortFilter;
  });

  const currentUserRankInCurrentBoard = displayedEntries.findIndex((e) => e.isCurrentUser);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full border border-sky-100 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#005A9C] via-[#0072CE] to-[#0284C7] p-4 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <CompanyEmblem className="w-8 h-8" />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-black tracking-tight">Bảng Vàng Thi Đua Vikoda</h3>
                <span className="text-[9px] bg-white/20 px-1.5 py-0.2 rounded-md font-bold text-sky-100">
                  Cloud Live
                </span>
              </div>
              <p className="text-[10px] text-sky-100 font-medium">Bảng xếp hạng thời gian thực toàn công ty</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                playSound('click');
                loadLeaderboardData();
              }}
              disabled={isLoading}
              className={`p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer ${
                isLoading ? 'animate-spin' : ''
              }`}
              title="Làm mới bảng xếp hạng"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CEFR Tier Switcher: A1, A2, B1, B2, C1-C2 */}
        <div className="p-2 bg-sky-50/60 border-b border-sky-100/80 shrink-0">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none pb-0.5 text-[10px]">
            {[
              { id: 'all', label: 'Tất Cả', icon: '🌟' },
              { id: 'A1', label: 'Bảng A1', icon: '🥉' },
              { id: 'A2', label: 'Bảng A2', icon: '🥈' },
              { id: 'B1', label: 'Bảng B1', icon: '🥇' },
              { id: 'B2', label: 'Bảng B2', icon: '💎' },
              { id: 'C1-C2', label: 'Bảng C1-C2', icon: '👑' },
            ].map((tier) => {
              const isActive = cohortFilter === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => {
                    playSound('click');
                    setCohortFilter(tier.id as any);
                  }}
                  className={`py-1 px-2.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#0070D1] text-white shadow-xs scale-102'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{tier.icon}</span>
                  <span>{tier.label}</span>
                </button>
              );
            })}
          </div>

          {/* Motivational Tier Note */}
          <div className="mt-1.5 px-2 py-1 rounded-xl bg-white/90 border border-sky-200/60 flex items-center justify-between text-[10px] text-slate-600">
            <span className="truncate">
              {cohortFilter === 'all' && '🌟 Thi đua toàn diện: Ghi nhận sự nỗ lực vượt bậc của mọi cá nhân!'}
              {cohortFilter === 'A1' && '🥉 Bảng A1: Dành cho tân binh rèn phát âm chuẩn Vikoda và chào hỏi văn phòng.'}
              {cohortFilter === 'A2' && '🥈 Bảng A2: Dành cho tiếp thị viên tự tin giới thiệu mỏ Đảnh Thạnh 220m.'}
              {cohortFilter === 'B1' && '🥇 Bảng B1: Dành cho đại sứ thương hiệu thuyết trình giá trị khoáng kiềm pH 9.0.'}
              {cohortFilter === 'B2' && '💎 Bảng B2: Dành cho chuyên viên đàm phán HORECA 5 sao và bảo vệ giá.'}
              {cohortFilter === 'C1-C2' && '👑 Bảng C1-C2: Dành cho thủ lĩnh ngoại giao dẫn dắt hợp đồng quốc tế Incoterms.'}
            </span>
            <span className="font-black text-[#0070D1] shrink-0 ml-1.5">
              {displayedEntries.length} học viên
            </span>
          </div>
        </div>

        {/* Metric Filter Pills */}
        <div className="p-2.5 bg-slate-50 border-b border-slate-200 grid grid-cols-4 gap-1.5 shrink-0 text-[11px]">
          <button
            onClick={() => {
              playSound('click');
              setFilterTab('xp');
            }}
            className={`py-1.5 px-1 rounded-xl font-black transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
              filterTab === 'xp'
                ? 'bg-[#0070D1] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Điểm XP</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setFilterTab('practice');
            }}
            className={`py-1.5 px-1 rounded-xl font-black transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
              filterTab === 'practice'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Lượt Luyện</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setFilterTab('streak');
            }}
            className={`py-1.5 px-1 rounded-xl font-black transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
              filterTab === 'streak'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Flame className="w-3.5 h-3.5 fill-current shrink-0" />
            <span className="truncate">Streak</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setFilterTab('drill');
            }}
            className={`py-1.5 px-1 rounded-xl font-black transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
              filterTab === 'drill'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Phản Xạ</span>
          </button>
        </div>

        {/* Leaderboard User List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {displayedEntries.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              Chưa có học viên trong bảng cấp độ này. Hãy là người đầu tiên bứt phá!
            </div>
          ) : (
            displayedEntries.map((entry, index) => {
              const rank = index + 1;
              let rankColor = 'bg-slate-100 text-slate-700 border-slate-200';
              let rankIcon = null;

              if (rank === 1) {
                rankColor = 'bg-amber-400 text-amber-950 border-amber-500 shadow-xs';
                rankIcon = <Crown className="w-3.5 h-3.5 fill-amber-950 text-amber-950 inline ml-0.5" />;
              } else if (rank === 2) {
                rankColor = 'bg-slate-200 text-slate-900 border-slate-300';
                rankIcon = <Medal className="w-3.5 h-3.5 text-slate-700 inline ml-0.5" />;
              } else if (rank === 3) {
                rankColor = 'bg-amber-700/20 text-amber-900 border-amber-700/30';
                rankIcon = <Medal className="w-3.5 h-3.5 text-amber-800 inline ml-0.5" />;
              }

              return (
                <div
                  key={entry.id}
                  className={`p-2.5 rounded-2xl border transition-all flex items-center justify-between gap-2.5 ${
                    entry.isCurrentUser
                      ? 'bg-sky-50/90 border-[#0070D1] ring-2 ring-sky-200'
                      : 'bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  {/* Left: Rank + Avatar + Name + Level Badge */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-6 h-6 rounded-xl border flex items-center justify-center font-black text-xs shrink-0 ${rankColor}`}>
                      <span>{rank}</span>
                    </div>

                    <img
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0 bg-white"
                    />

                    <div className="min-w-0 truncate">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-black text-slate-900 text-xs truncate">
                          {entry.name}
                        </span>
                        {rankIcon}
                        {entry.level && (
                          <span
                            className={`text-[9px] font-black px-1.5 py-0.2 rounded-md border shrink-0 ${
                              entry.level === 'A1'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                : entry.level === 'A2'
                                ? 'bg-sky-50 text-sky-700 border-sky-300'
                                : entry.level === 'B1'
                                ? 'bg-blue-50 text-blue-700 border-blue-300'
                                : entry.level === 'B2'
                                ? 'bg-indigo-50 text-indigo-700 border-indigo-300'
                                : 'bg-amber-50 text-amber-900 border-amber-300'
                            }`}
                          >
                            {entry.level}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate flex items-center gap-1.5">
                        <span>{entry.code}</span>
                        <span>•</span>
                        <span className="truncate">{entry.dept}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Score/Stats with Effort Details */}
                  <div className="text-right shrink-0">
                    {filterTab === 'xp' && (
                      <div>
                        <div className="text-xs font-black text-[#0070D1] flex items-center justify-end gap-0.5">
                          <Sparkles className="w-3 h-3" />
                          <span>{entry.xp.toLocaleString()}</span>
                        </div>
                        <span className="text-[9px] text-slate-400">
                          {entry.practiceCount ? `${entry.practiceCount} lượt luyện` : 'Tổng XP'}
                        </span>
                      </div>
                    )}

                    {filterTab === 'streak' && (
                      <div>
                        <div className="text-xs font-black text-amber-600 flex items-center justify-end gap-0.5">
                          <Flame className="w-3 h-3 fill-amber-500" />
                          <span>{entry.streak}</span>
                        </div>
                        <span className="text-[9px] text-slate-400">Ngày streak</span>
                      </div>
                    )}

                    {filterTab === 'drill' && (
                      <div>
                        <div className="text-xs font-black text-emerald-600 flex items-center justify-end gap-0.5">
                          <Trophy className="w-3 h-3" />
                          <span>{entry.drillScore}</span>
                        </div>
                        <span className="text-[9px] text-slate-400">Điểm kỷ lục</span>
                      </div>
                    )}

                    {filterTab === 'practice' && (
                      <div>
                        <div className="text-xs font-black text-purple-700 flex items-center justify-end gap-0.5">
                          <RotateCcw className="w-3 h-3" />
                          <span>{entry.practiceCount || 0}</span>
                        </div>
                        <span className="text-[9px] text-slate-400">Lượt làm lại</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Current User Fixed Status Bar at Bottom */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0 flex items-center justify-between gap-2">
          <div className="text-xs">
            <span className="text-slate-500 font-medium">
              {cohortFilter === 'all' ? 'Hạng toàn đoàn: ' : `Hạng trong ${cohortFilter}: `}
            </span>
            <strong className="text-[#0070D1] font-black">
              #{currentUserRankInCurrentBoard !== -1 ? currentUserRankInCurrentBoard + 1 : '—'}
            </strong>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
              onStartDrill();
            }}
            className="py-1.5 px-3 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            <Trophy className="w-3 h-3" />
            <span>Cày Điểm Leo Rank</span>
          </button>
        </div>

      </div>
    </div>
  );
};
