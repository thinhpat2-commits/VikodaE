import React, { useState, useRef, useEffect } from 'react';
import { 
  Flame, 
  Gem, 
  Sparkles, 
  ChevronDown, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { HeaderBrandLogo } from './brand/VikodaLogos';
import { CourseLevel } from '../data/curriculumData';
import { EmployeeProfile, GamificationState } from '../types';
import { playSound, isStealthOfficeMode, setStealthOfficeMode, subscribeStealthMode } from '../services/soundEffects';

interface VikodaHeaderProps {
  stats: GamificationState;
  selectedLevel: CourseLevel;
  setSelectedLevel: (level: CourseLevel) => void;
  speechRate: number;
  setSpeechRate: (rate: number) => void;
  onOpenAi: () => void;
  profile: EmployeeProfile;
  onOpenProfile: () => void;
  onOpenLeaderboard: () => void;
  onGoHome: () => void;
  onOpenSOS?: () => void;
  onOpenCommute?: () => void;
  onOpenSearch?: () => void;
  onOpenPortfolio?: () => void;
  onOpenAdmin?: () => void;
  onOpenPvPArena?: () => void;
  onOpenDailyReview?: () => void;
  onOpenCoach?: () => void;
  onOpenPlacementTest?: () => void;
  isCloudSynced?: boolean;
  onLogout?: () => void;
}

export const VikodaHeader: React.FC<VikodaHeaderProps> = ({
  stats,
  selectedLevel,
  setSelectedLevel,
  onOpenAi,
  profile,
  onOpenProfile,
  onGoHome,
  isCloudSynced = false,
}) => {
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState<boolean>(false);
  const [isStealth, setIsStealth] = useState<boolean>(() => isStealthOfficeMode());
  const levelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubStealth = subscribeStealthMode((enabled) => setIsStealth(enabled));
    return () => unsubStealth();
  }, []);

  // Close level dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (levelRef.current && !levelRef.current.contains(e.target as Node)) {
        setIsLevelDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleStealth = () => {
    const nextVal = !isStealth;
    setIsStealth(nextVal);
    setStealthOfficeMode(nextVal);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-xl mx-auto px-3 sm:px-4 h-13 sm:h-14 flex items-center justify-between gap-2">
        
        {/* ================= LEFT: BRAND LOGO + COMPACT LEVEL PILL ================= */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => {
              playSound('click');
              onGoHome();
            }}
            className="transition-transform active:scale-95 cursor-pointer flex items-center"
            title="Trang Chủ Lộ Trình"
          >
            <HeaderBrandLogo className="h-6 sm:h-7 w-auto" />
          </button>

          {/* Level Switcher Dropdown */}
          <div className="relative" ref={levelRef}>
            <button
              type="button"
              onClick={() => {
                playSound('click');
                setIsLevelDropdownOpen(!isLevelDropdownOpen);
              }}
              className="px-2 py-0.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0070D1] border border-sky-200 text-xs font-black flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
              title="Đổi cấp độ khóa học"
            >
              <span>{selectedLevel}</span>
              <ChevronDown className="w-3 h-3 text-sky-600" />
            </button>

            {isLevelDropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-44 rounded-2xl bg-white border border-slate-200 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  Cấp Độ Khóa Học
                </div>
                {[
                  { id: 'A1', label: 'Cấp độ A1 (Nhập môn)' },
                  { id: 'A2-B1', label: 'Cấp độ B1 (Mỏ khoáng)' },
                  { id: 'B2-C1', label: 'Cấp độ C1 (Xuất khẩu)' },
                  { id: 'C2', label: 'Cấp độ C2 (Bản ngữ CEO)' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => {
                      playSound('click');
                      setSelectedLevel(lvl.id as CourseLevel);
                      setIsLevelDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-between ${
                      selectedLevel === lvl.id
                        ? 'bg-[#0070D1] text-white'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{lvl.label}</span>
                    {selectedLevel === lvl.id && <span className="text-[10px]">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ================= RIGHT: STREAK + GEMS + SOUND + AVATAR ================= */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Streak & Gems Pill */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-xs font-black text-slate-700 select-none">
            <span className="flex items-center gap-0.5 text-amber-600" title="Chuỗi ngày học liên tục">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
              <span className="tabular-nums">{stats.streakDays}</span>
            </span>
            <span className="text-slate-300 font-normal">·</span>
            <span className="flex items-center gap-0.5 text-cyan-700" title="Ngọc khoáng tích lũy">
              <Gem className="w-3 h-3 fill-cyan-500 text-cyan-600 shrink-0" />
              <span className="tabular-nums">{stats.gems}</span>
            </span>
          </div>

          {/* AI Translator Shortcut */}
          <button
            onClick={() => {
              playSound('click');
              onOpenAi();
            }}
            className="p-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0070D1] border border-sky-200/80 transition-transform active:scale-95 cursor-pointer"
            title="Trợ lý Dịch Thuật AI"
          >
            <Sparkles className="w-4 h-4 text-[#0070D1]" />
          </button>

          {/* Stealth Mode Mute/Unmute */}
          <button
            onClick={toggleStealth}
            className="p-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 border border-slate-200 transition-transform active:scale-95 cursor-pointer"
            title={isStealth ? 'Đang tắt chuông' : 'Đang bật hiệu ứng âm thanh'}
          >
            {isStealth ? (
              <VolumeX className="w-4 h-4 text-rose-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Avatar Button: DIRECTLY OPENS 1-PAGE DIGITAL PROFILE BADGE */}
          <button
            type="button"
            onClick={() => {
              playSound('click');
              onOpenProfile();
            }}
            className="p-0.5 rounded-full border border-slate-200 hover:border-sky-400 bg-white transition-all cursor-pointer shadow-2xs active:scale-95 shrink-0 ml-0.5"
            title="Xem Thẻ Nhân Viên & Thành Tích"
          >
            <div className="relative">
              <img
                src={profile.avatarUrl}
                alt={profile.fullName}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
              />
              {isCloudSynced && (
                <span 
                  className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white"
                  title="Đã đồng bộ mây"
                />
              )}
            </div>
          </button>

        </div>

      </div>
    </header>
  );
};
