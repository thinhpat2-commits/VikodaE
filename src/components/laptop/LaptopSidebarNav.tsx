import React from 'react';
import { 
  Compass, 
  Swords, 
  Trophy, 
  User, 
  Sparkles, 
  LogOut,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { HeaderBrandLogo } from '../brand/VikodaLogos';
import { CourseLevel } from '../../data/curriculumData';
import { EmployeeProfile, GamificationState } from '../../types';
import { playSound } from '../../services/soundEffects';

interface LaptopSidebarNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedLevel: CourseLevel;
  setSelectedLevel: (level: CourseLevel) => void;
  profile: EmployeeProfile;
  stats: GamificationState;
  onOpenProfile: () => void;
  onOpenLeaderboard: () => void;
  onOpenAi: () => void;
  onOpenAdmin: () => void;
  onOpenCoach?: () => void;
  onLogout?: () => void;
  isCloudSynced?: boolean;
}

export const LaptopSidebarNav: React.FC<LaptopSidebarNavProps> = ({
  activeTab,
  setActiveTab,
  selectedLevel,
  setSelectedLevel,
  profile,
  onOpenProfile,
  onOpenLeaderboard,
  onOpenAi,
  onOpenAdmin,
  onOpenCoach,
  onLogout,
  isCloudSynced = false,
}) => {
  const isAuthorizedAdmin = profile.email?.toLowerCase().trim() === 'thinh.pat2@gmail.com' || profile.isAdmin;

  // Duolingo Proven 4-Pillar Core Navigation
  const navItems = [
    { id: 'path', label: 'LỘ TRÌNH HỌC', icon: Compass, badge: 'Chính' },
    { id: 'practice', label: 'LUYỆN TẬP & ĐẤU TRƯỜNG', icon: Swords, badge: 'Thực Chiến' },
    { id: 'leaderboard', label: 'BẢNG XẾP HẠNG', icon: Trophy, badge: 'Thi Đua' },
    { id: 'profile', label: 'HỒ SƠ & MỤC TIÊU', icon: User, badge: 'Tiến Độ' },
  ];

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-slate-200 min-h-screen sticky top-0 flex flex-col justify-between p-4 shadow-2xs z-30 select-none">
      
      {/* Top Branding & Primary Nav */}
      <div className="space-y-4">
        
        {/* Brand Logo Header */}
        <div className="px-2 pt-1 pb-1">
          <div className="flex items-center gap-2">
            <HeaderBrandLogo className="h-8 w-auto" />
          </div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
            Enterprise English Pro
          </div>
        </div>

        {/* Level Switcher (Pill Matrix) */}
        <div className="px-1">
          <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 px-1">
            Cấp Độ Khóa Học
          </div>
          <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            {(['A1', 'A2-B1', 'B2-C1', 'C2'] as CourseLevel[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  playSound('click');
                  setSelectedLevel(lvl);
                }}
                className={`py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-[#0070D1] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lvl === 'A2-B1' ? 'B1' : lvl === 'B2-C1' ? 'C1' : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Duolingo Core 4-Pillar Menu */}
        <nav className="space-y-1.5 pt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playSound('click');
                  if (item.id === 'leaderboard') {
                    onOpenLeaderboard();
                  } else if (item.id === 'profile') {
                    onOpenProfile();
                  } else {
                    setActiveTab(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl font-black text-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-50 text-[#0070D1] border-2 border-sky-300 shadow-xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#0070D1] stroke-[2.5]' : 'text-slate-400'}`} />
                  <span className="tracking-wide">{item.label}</span>
                </div>
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${
                  isActive ? 'bg-sky-200/80 text-sky-900' : 'bg-slate-100 text-slate-400'
                }`}>
                  {item.badge}
                </span>
              </button>
            );
          })}

          {/* Quick AI Boardroom Assistant */}
          <button
            onClick={() => {
              playSound('click');
              onOpenAi();
            }}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-xs text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer border border-slate-200 mt-2"
          >
            <Sparkles className="w-4 h-4 text-[#0070D1]" />
            <span>Trợ Lý Dịch Thuật AI</span>
          </button>

          {/* Admin Portal (Super Admin only) */}
          {isAuthorizedAdmin && (
            <button
              onClick={() => {
                playSound('click');
                onOpenAdmin();
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-xs text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer mt-1"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Cổng Quản Trị Admin</span>
            </button>
          )}
        </nav>
      </div>

      {/* Bottom Profile & Logout Footer */}
      <div className="pt-4 border-t border-slate-200 space-y-2">
        <div 
          onClick={() => {
            playSound('click');
            onOpenProfile();
          }}
          className="flex items-center gap-2.5 p-2 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer"
          title="Xem hồ sơ & Đổi Avatar"
        >
          <div className="relative shrink-0">
            <img
              src={profile.avatarUrl}
              alt=""
              className="w-9 h-9 rounded-full object-cover border border-slate-200"
            />
            {isCloudSynced && (
              <span 
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white"
                title="Đã đồng bộ mây"
              />
            )}
          </div>
          <div className="truncate flex-1">
            <div className="text-xs font-black text-slate-900 truncate">{profile.fullName}</div>
            <div className="text-[10px] text-slate-400 font-mono truncate">{profile.employeeCode}</div>
          </div>
        </div>

        {onLogout && (
          <button
            onClick={() => {
              playSound('click');
              onLogout();
            }}
            className="w-full py-2 px-3 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đăng Xuất</span>
          </button>
        )}
      </div>

    </aside>
  );
};
