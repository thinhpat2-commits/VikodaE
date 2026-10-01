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
  UserCheck
} from 'lucide-react';
import { LeaderboardEntry, EmployeeProfile, GamificationState } from '../types';
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
  const [filterTab, setFilterTab] = useState<'xp' | 'streak' | 'drill'>('xp');
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

  // 1. Add all real users from Cloud Firestore
  cloudUsers.forEach((u) => {
    const isMe = 
      (currentUser.email && u.email.toLowerCase() === currentUser.email.toLowerCase()) ||
      u.userId === ('usr_' + (currentUser.email || '').replace(/[^a-z0-9]/g, '_'));

    registeredEmails.add(u.email.toLowerCase().trim());

    entries.push({
      id: u.userId,
      name: isMe ? `${currentUser.fullName || u.displayName} (Bạn)` : u.displayName,
      code: u.userId.toUpperCase().replace('USR_', 'VKD-'),
      dept: isMe ? currentUser.department : (u.department || 'Nhân Viên Vikoda'),
      avatar: isMe ? currentUser.avatarUrl : (u.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'),
      drillScore: isMe ? Math.max(currentUser.highestDrillScore || 0, stats.highestDrillScore || 0) : (u.highestDrillScore || 300),
      xp: isMe ? Math.max(stats.xp, u.xp || 0) : (u.xp || 0),
      streak: isMe ? Math.max(stats.streakDays, u.streak || 0) : (u.streak || 0),
      rankBadge: u.role === 'admin' ? '👑 Admin' : 'Học Viên',
      isCurrentUser: isMe,
    });
  });

  // 2. Ensure current user is in entries if not found in cloud
  if (currentUser.email && !registeredEmails.has(currentUser.email.toLowerCase().trim())) {
    entries.push({
      id: 'current_user',
      name: `${currentUser.fullName} (Bạn)`,
      code: currentUser.employeeCode || 'VKD-USER',
      dept: currentUser.department || 'Phòng Kinh Doanh & Xuất Khẩu',
      avatar: currentUser.avatarUrl,
      drillScore: Math.max(currentUser.highestDrillScore || 0, stats.highestDrillScore || 0),
      xp: stats.xp,
      streak: stats.streakDays,
      rankBadge: currentUser.isAdmin ? '👑 Admin' : 'Học Viên',
      isCurrentUser: true,
    });
    registeredEmails.add(currentUser.email.toLowerCase().trim());
  }

  // 3. Add Corporate Benchmarks if fewer than 5 users so the board is always lively
  const BENCHMARKS: LeaderboardEntry[] = [
    {
      id: 'vkd-bm-1',
      name: 'Nguyễn Thu Trang',
      code: 'VKD-0824',
      dept: 'Kinh Doanh Quốc Tế',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
      drillScore: 880,
      xp: 1850,
      streak: 15,
      rankBadge: 'Top 5',
    },
    {
      id: 'vkd-bm-2',
      name: 'Phạm Hoàng Nam',
      code: 'VKD-1092',
      dept: 'HORECA 5-Star Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      drillScore: 720,
      xp: 1420,
      streak: 12,
      rankBadge: 'Top 5',
    }
  ];

  BENCHMARKS.forEach(bm => {
    if (entries.length < 5 && !entries.some(e => e.id === bm.id)) {
      entries.push(bm);
    }
  });

  // Sort based on current filter
  const sortedEntries = [...entries].sort((a, b) => {
    if (filterTab === 'xp') return (b.xp || 0) - (a.xp || 0);
    if (filterTab === 'streak') return (b.streak || 0) - (a.streak || 0);
    return (b.drillScore || 0) - (a.drillScore || 0);
  });

  const currentUserRankIndex = sortedEntries.findIndex((e) => e.isCurrentUser);

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

        {/* Filter Pills */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => {
              playSound('click');
              setFilterTab('xp');
            }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer ${
              filterTab === 'xp'
                ? 'bg-[#0070D1] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kinh Nghiệm XP</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setFilterTab('streak');
            }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer ${
              filterTab === 'streak'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Chuỗi Streak</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setFilterTab('drill');
            }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 cursor-pointer ${
              filterTab === 'drill'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Điểm Đấu</span>
          </button>
        </div>

        {/* Leaderboard User List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {sortedEntries.map((entry, index) => {
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
                {/* Left: Rank + Avatar + Name */}
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
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {entry.code} • {entry.dept}
                    </div>
                  </div>
                </div>

                {/* Right: Score/Stats */}
                <div className="text-right shrink-0">
                  {filterTab === 'xp' && (
                    <div>
                      <div className="text-xs font-black text-[#0070D1] flex items-center justify-end gap-0.5">
                        <Sparkles className="w-3 h-3" />
                        <span>{entry.xp}</span>
                      </div>
                      <span className="text-[9px] text-slate-400">Tổng XP</span>
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Current User Fixed Status Bar at Bottom */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0 flex items-center justify-between gap-2">
          <div className="text-xs">
            <span className="text-slate-500 font-medium">Hạng của bạn: </span>
            <strong className="text-[#0070D1] font-black">
              #{currentUserRankIndex !== -1 ? currentUserRankIndex + 1 : '—'}
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
