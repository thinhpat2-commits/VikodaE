import React, { useState } from 'react';
import { 
  X, 
  Trophy, 
  Flame, 
  Sparkles, 
  Medal, 
  Crown, 
  Zap, 
  Award, 
  ChevronRight,
  TrendingUp,
  Users
} from 'lucide-react';
import { LeaderboardEntry, EmployeeProfile, GamificationState } from '../types';
import { CompanyEmblem } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';

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
  const [filterTab, setFilterTab] = useState<'drill' | 'xp' | 'streak'>('drill');

  if (!isOpen) return null;

  // Mock Vikoda Enterprise Leaderboard with real employees & department avatars
  const mockEntries: LeaderboardEntry[] = [
    {
      id: 'vkd-top-1',
      name: 'Nguyễn Thu Trang',
      code: 'VKD-0824',
      dept: 'Kinh Doanh Quốc Tế',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
      drillScore: 980,
      xp: 2450,
      streak: 28,
      rankBadge: '🥇 Quán Quân Tuần'
    },
    {
      id: 'vkd-top-2',
      name: 'Phạm Hoàng Nam',
      code: 'VKD-1092',
      dept: 'HORECA 5-Star Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      drillScore: 920,
      xp: 2180,
      streak: 21,
      rankBadge: '🥈 Á Quân'
    },
    {
      id: 'vkd-top-3',
      name: 'Lê Hoàng Anh',
      code: 'VKD-0315',
      dept: 'Quản Lý Chất Lượng QA/QC',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      drillScore: 860,
      xp: 1950,
      streak: 19,
      rankBadge: '🥉 Top 3'
    },
    {
      id: 'vkd-top-4',
      name: 'Trần Thị Mai',
      code: 'VKD-2204',
      dept: 'Marketing & Brand',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
      drillScore: 780,
      xp: 1640,
      streak: 14,
      rankBadge: 'Top 5'
    },
    {
      id: 'vkd-top-5',
      name: 'Vũ Đức Thịnh',
      code: 'VKD-1957',
      dept: 'Ban Giám Đốc (CEO Office)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      drillScore: 750,
      xp: 1520,
      streak: 12,
      rankBadge: 'Top 5'
    },
    {
      id: 'current-user-slot',
      name: currentUser.fullName || 'Bạn (Tôi)',
      code: currentUser.employeeCode || 'VKD-USER',
      dept: currentUser.department || 'Nhân Viên Vikoda',
      avatar: currentUser.avatarUrl,
      drillScore: Math.max(currentUser.highestDrillScore || 0, stats.highestDrillScore || 0, 480),
      xp: stats.xp,
      streak: stats.streakDays,
      rankBadge: 'Của Bạn',
      isCurrentUser: true
    },
    {
      id: 'vkd-top-7',
      name: 'Đặng Tuấn Kiệt',
      code: 'VKD-3301',
      dept: 'Sản Xuất Mỏ Đảnh Thạnh',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
      drillScore: 420,
      xp: 980,
      streak: 7,
      rankBadge: 'Top 10'
    }
  ];

  // Sort based on current filter
  const sortedEntries = [...mockEntries].sort((a, b) => {
    if (filterTab === 'drill') return b.drillScore - a.drillScore;
    if (filterTab === 'xp') return b.xp - a.xp;
    return b.streak - a.streak;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-sky-100 shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-amber-500 via-[#0066CC] to-[#0072CE] p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-amber-300">
              <Trophy className="w-5 h-5 fill-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-black tracking-tight">Bảng Xếp Hạng Thi Đua Vikoda</h3>
              <p className="text-[10px] text-sky-100 font-medium">Vinh danh cao thủ luyện tập tiếng Anh toàn công ty</p>
            </div>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Filter */}
        <div className="bg-slate-100 p-1.5 flex gap-1 border-b border-slate-200">
          <button
            onClick={() => {
              playSound('click');
              setFilterTab('drill');
            }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 ${
              filterTab === 'drill'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Điểm Luyện Cao Nhất</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setFilterTab('xp');
            }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 ${
              filterTab === 'xp'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Tổng XP Tích Lũy</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setFilterTab('streak');
            }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 ${
              filterTab === 'streak'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Chuỗi Streak</span>
          </button>
        </div>

        {/* List of Rankings */}
        <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
          {sortedEntries.map((entry, index) => {
            const rankPos = index + 1;
            const isTop3 = rankPos <= 3;
            const isMe = entry.isCurrentUser;

            return (
              <div
                key={entry.id}
                className={`p-3 rounded-2xl flex items-center justify-between transition-all ${
                  isMe
                    ? 'bg-sky-50 border-2 border-sky-400 shadow-sm'
                    : isTop3
                    ? 'bg-gradient-to-r from-amber-50/70 to-white border border-amber-200'
                    : 'bg-white border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {/* Left: Position & Avatar & Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-7 text-center font-black">
                    {rankPos === 1 ? (
                      <span className="text-xl">🥇</span>
                    ) : rankPos === 2 ? (
                      <span className="text-xl">🥈</span>
                    ) : rankPos === 3 ? (
                      <span className="text-xl">🥉</span>
                    ) : (
                      <span className="text-xs text-slate-400 font-extrabold">{rankPos}</span>
                    )}
                  </div>

                  <img
                    src={entry.avatar}
                    alt={entry.name}
                    className="w-10 h-10 rounded-xl object-cover border border-slate-200"
                  />

                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-black text-slate-900">
                        {entry.name}
                      </span>
                      {isMe && (
                        <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-cyan-500 text-white">
                          BẠN
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {entry.code} • {entry.dept}
                    </div>
                  </div>
                </div>

                {/* Right: Scores */}
                <div className="text-right">
                  {filterTab === 'drill' && (
                    <div>
                      <div className="text-sm font-black text-amber-600 flex items-center justify-end space-x-1">
                        <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{entry.drillScore} pts</span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-semibold">Điểm kỷ lục</span>
                    </div>
                  )}

                  {filterTab === 'xp' && (
                    <div>
                      <div className="text-sm font-black text-[#0066CC] flex items-center justify-end space-x-1">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{entry.xp} XP</span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-semibold">Cấp bậc tinh hoa</span>
                    </div>
                  )}

                  {filterTab === 'streak' && (
                    <div>
                      <div className="text-sm font-black text-rose-600 flex items-center justify-end space-x-1">
                        <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                        <span>{entry.streak} ngày</span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-semibold">Học liên tục</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA: Start Endless Drill to boost score */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-slate-800">
              Muốn bứt phá leo Top 1?
            </div>
            <div className="text-[10px] text-slate-500">
              Luyện phản xạ nhanh với chế độ Luyện Tập Bất Tận
            </div>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
              onStartDrill();
            }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-black shadow-md flex items-center space-x-1.5 cursor-pointer active:scale-95 transition-all"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Vào Luyện Ngay</span>
          </button>
        </div>

      </div>
    </div>
  );
};
