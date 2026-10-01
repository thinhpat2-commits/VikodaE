import React from 'react';
import { 
  Compass, 
  Mic, 
  Sparkles, 
  Swords, 
  Mail, 
  Trophy, 
  BookOpen, 
  User, 
  LogOut,
  ChevronDown,
  ShieldCheck
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
  onOpenPvPArena?: () => void;
  onOpenDailyReview?: () => void;
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
  onOpenPvPArena,
  onOpenDailyReview,
  onOpenCoach,
  onLogout,
  isCloudSynced = false,
}) => {
  const isAuthorizedAdmin = profile.email?.toLowerCase().trim() === 'thinh.pat2@gmail.com' || profile.isAdmin;

  const navItems = [
    { id: 'path', label: 'Lộ Trình Học Tập', icon: Compass, badge: 'Chính' },
    { id: 'speaking', label: 'VikoVoice AI', icon: Mic, badge: 'Phát Âm' },
    { id: 'pitch', label: 'Pitch Deck B2B', icon: Sparkles, badge: 'Thương Thảo' },
    { id: 'battle', label: 'Đấu Trí Phản Bác', icon: Swords, badge: 'Xử Lý' },
    { id: 'email', label: 'Thư B2B Quốc Tế', icon: Mail, badge: 'Incoterms' },
  ];

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-slate-200 min-h-screen sticky top-0 flex flex-col justify-between p-4 shadow-2xs z-30 select-none">
      
      {/* Top Branding & Level Switcher */}
      <div className="space-y-4">
        {/* Brand Logo */}
        <div className="px-2 pt-1">
          <div className="flex items-center gap-2">
            <HeaderBrandLogo className="h-8 w-auto" />
          </div>
          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">
            Enterprise English Pro
          </div>
        </div>

        {/* Level Switcher (Laptop Dropdown) */}
        <div className="px-2">
          <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
            Cấp Độ Khóa Học
          </label>
          <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl">
            {(['A1', 'A2-B1', 'B2-C1', 'C2'] as CourseLevel[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  playSound('click');
                  setSelectedLevel(lvl);
                }}
                className={`py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-[#0070D1] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {lvl === 'A2-B1' ? 'B1' : lvl === 'B2-C1' ? 'C1' : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <nav className="space-y-1 pt-2">
          <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 mb-1">
            Danh Mục Đào Tạo
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playSound('click');
                  setActiveTab(item.id);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-50 text-[#0070D1] shadow-2xs border border-sky-200'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#0070D1]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md ${
                  isActive ? 'bg-sky-200/80 text-sky-900' : 'bg-slate-100 text-slate-400'
                }`}>
                  {item.badge}
                </span>
              </button>
            );
          })}

          {/* 1v1 PvP Arena */}
          {onOpenPvPArena && (
            <button
              onClick={() => {
                playSound('click');
                onOpenPvPArena();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-xs text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer mt-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-sm">⚔️</span>
                <span>Đấu Trường 1v1 PvP</span>
              </div>
              <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-rose-200 text-rose-900">
                HOT
              </span>
            </button>
          )}

          {/* Daily Quick Review */}
          {onOpenDailyReview && (
            <button
              onClick={() => {
                playSound('click');
                onOpenDailyReview();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer mt-1"
            >
              <span className="text-sm">🔁</span>
              <span>Ôn Tập Nhanh (Hay Sai)</span>
            </button>
          )}

          {/* Personal AI Learning Coach & Planner */}
          {onOpenCoach && (
            <button
              onClick={() => {
                playSound('click');
                onOpenCoach();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors cursor-pointer mt-1"
            >
              <span className="text-sm">🧭</span>
              <span>AI Coach & Lịch Học</span>
            </button>
          )}

          {/* Quick AI Boardroom Assistant in Sidebar */}
          <button
            onClick={() => {
              playSound('click');
              onOpenAi();
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer border border-slate-200 mt-1"
          >
            <Sparkles className="w-4 h-4 text-[#0070D1]" />
            <span>Trợ Lý Dịch Thuật AI</span>
          </button>

          {/* Leaderboard in Sidebar */}
          <button
            onClick={() => {
              playSound('click');
              onOpenLeaderboard();
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Bảng Xếp Hạng Doanh Nghiệp</span>
          </button>

          {/* Admin Portal (ONLY VISIBLE IF AUTHORIZED ADMIN) */}
          {isAuthorizedAdmin && (
            <button
              onClick={() => {
                playSound('click');
                onOpenAdmin();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold text-xs text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer mt-1"
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
          className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
          title="Xem hồ sơ & đổi Avatar"
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
            <span>Đăng Xuất Khỏi Thiết Bị</span>
          </button>
        )}
      </div>

    </aside>
  );
};
