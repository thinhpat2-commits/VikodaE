import React from 'react';
import { 
  Home, 
  Dumbbell, 
  Trophy, 
  User, 
  Sparkles, 
  LogOut,
  ShieldCheck,
  Gift,
  Flame,
  Settings,
  Sun,
  Moon
} from 'lucide-react';
import { VIKODA_ASSETS } from '../brand/VikodaLogos';
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
  onOpenAssetStudio?: () => void;
  onOpenCoach?: () => void;
  onLogout?: () => void;
  isCloudSynced?: boolean;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const LaptopSidebarNav: React.FC<LaptopSidebarNavProps> = ({
  activeTab,
  setActiveTab,
  selectedLevel,
  setSelectedLevel,
  profile,
  stats,
  onOpenProfile,
  onOpenLeaderboard,
  onOpenAi,
  onOpenAdmin,
  onOpenAssetStudio,
  onLogout,
  isCloudSynced = false,
  isDarkMode = false,
  onToggleDarkMode,
}) => {
  const isAuthorizedAdmin = profile.email?.toLowerCase().trim() === 'thinh.pat2@gmail.com' || profile.isAdmin;

  // Duolingo Proven Core Navigation Items
  const navItems = [
    { id: 'path', label: 'HỌC TẬP', icon: Home },
    { id: 'practice', label: 'LUYỆN TẬP', icon: Dumbbell },
    { id: 'leaderboard', label: 'BẢNG XẾP HẠNG', icon: Trophy },
    { id: 'quests', label: 'NHIỆM VỤ', icon: Gift },
    { id: 'profile', label: 'HỒ SƠ CÁ NHÂN', icon: User },
  ];

  return (
    <aside className="w-64 shrink-0 bg-white border-r-2 border-slate-200 min-h-screen sticky top-0 flex flex-col justify-between p-4 z-30 select-none">
      
      {/* Top Branding & Primary Nav */}
      <div className="space-y-5">
        
        {/* Brand Logo Header */}
        <div className="px-2 pt-2 pb-1">
          <div className="flex items-center gap-3">
            <img 
              src={VIKODA_ASSETS.logo3D} 
              alt="Vikoda Học Tiếng Anh"
              className="h-11 w-auto object-contain filter drop-shadow-xs cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setActiveTab('path')}
            />
          </div>
        </div>

        {/* Level Switcher (5 Progressive Tiers) */}
        <div className="px-1">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2 px-1 flex items-center justify-between">
            <span>CẤP ĐỘ LỘ TRÌNH</span>
            <span className="text-[#009FE3] font-black">{selectedLevel}</span>
          </div>
          <div className="grid grid-cols-5 gap-1 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            {(['A1', 'A2', 'B1', 'B2', 'C1-C2'] as CourseLevel[]).map((lvl) => {
              const label = lvl === 'C1-C2' ? 'C1' : lvl;
              const isSelected = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => {
                    playSound('click');
                    setSelectedLevel(lvl);
                  }}
                  className={`py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#009FE3] text-white shadow-xs border-b-2 border-[#0077b6]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Duolingo Core Menu */}
        <nav className="space-y-2 pt-1">
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
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-50 text-[#009FE3] border-2 border-[#009FE3] shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 border-2 border-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#009FE3] stroke-[2.5]' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 space-y-2">
            {/* Quick AI Boardroom Assistant */}
            <button
              onClick={() => {
                playSound('click');
                onOpenAi();
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bold text-xs text-slate-700 hover:bg-sky-50 hover:text-[#009FE3] transition-colors cursor-pointer border border-slate-200"
            >
              <Sparkles className="w-4 h-4 text-[#009FE3]" />
              <span>Trợ Lý Dịch Thuật AI</span>
            </button>

            {/* 3D Asset Studio Modal Trigger (Chỉ dành cho Admin / Content Creator để người học không bị xao nhãng) */}
            {isAuthorizedAdmin && onOpenAssetStudio && (
              <button
                onClick={() => {
                  playSound('click');
                  onOpenAssetStudio();
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bold text-xs text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors cursor-pointer shadow-2xs"
                title="Quản lý và sinh tài nguyên 3D qua Gemini Imagen (Chỉ Admin)"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Studio Asset 3D (Admin)</span>
              </button>
            )}

            {/* Admin Portal (if admin) */}
            {isAuthorizedAdmin && (
              <button
                onClick={() => {
                  playSound('click');
                  onOpenAdmin();
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bold text-xs text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer shadow-2xs"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Cổng Quản Trị Admin</span>
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* Theme Switcher & Bottom Profile Footer */}
      <div className="pt-3 border-t-2 border-slate-100 dark:border-slate-800 space-y-2">
        {onToggleDarkMode && (
          <button
            onClick={onToggleDarkMode}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              isDarkMode
                ? 'bg-slate-800/80 hover:bg-slate-800 border-amber-400/30 text-amber-300'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <div className="flex items-center gap-2">
              {isDarkMode ? (
                <Sun className="w-4 h-4 fill-amber-400 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
              <span>{isDarkMode ? 'Giao Diện Đêm (Dark)' : 'Giao Diện Ngày (Light)'}</span>
            </div>
            <span className="text-[10px] font-mono opacity-60">
              {isDarkMode ? 'BẬT' : 'TẮT'}
            </span>
          </button>
        )}

        <div 
          onClick={() => {
            playSound('click');
            onOpenProfile();
          }}
          className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
          title="Xem hồ sơ & Thành tích"
        >
          <div className="relative shrink-0">
            <img
              src={profile.avatarUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'}
              alt=""
              className="w-10 h-10 rounded-full object-cover border-2 border-slate-200"
            />
            {isCloudSynced && (
              <span 
                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"
                title="Đã đồng bộ Cloud"
              />
            )}
          </div>
          <div className="truncate flex-1">
            <div className="text-xs font-black text-slate-900 truncate">{profile.fullName || 'Khách Học Thử'}</div>
            <div className="text-[10px] text-slate-400 font-mono truncate">{profile.employeeCode || 'VKD-MEMBER'}</div>
          </div>
        </div>

        {onLogout && (
          <button
            onClick={() => {
              playSound('click');
              onLogout();
            }}
            className="w-full py-2 px-3 rounded-xl text-xs font-bold text-rose-600 bg-rose-50/70 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đăng Xuất</span>
          </button>
        )}
      </div>

    </aside>
  );
};
