import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  Gem, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Headphones, 
  Search, 
  Award, 
  ShieldCheck, 
  LogOut,
  ChevronDown,
  Trophy,
  User,
  SlidersHorizontal
} from 'lucide-react';
import { GamificationState, EmployeeProfile } from '../types';
import { CourseLevel } from '../data/curriculumData';
import { HeaderBrandLogo } from './brand/VikodaLogos';
import { playSound, isStealthOfficeMode, setStealthOfficeMode, subscribeStealthMode } from '../services/soundEffects';
import { 
  VOICE_OPTIONS, 
  getSelectedVoiceId, 
  subscribeVoiceChange,
  VoiceOptionId 
} from '../services/speechService';
import { VoiceSelectorModal } from './VoiceSelectorModal';

interface VikodaHeaderProps {
  stats: GamificationState;
  selectedLevel: CourseLevel;
  setSelectedLevel: (level: CourseLevel) => void;
  speechRate: number;
  setSpeechRate: (r: number) => void;
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
  onOpenLeaderboard,
  onGoHome,
  onOpenSOS = () => {},
  onOpenCommute = () => {},
  onOpenSearch = () => {},
  onOpenPortfolio = () => {},
  onOpenAdmin = () => {},
  onOpenPvPArena,
  onOpenDailyReview,
  onOpenCoach,
  onOpenPlacementTest,
  isCloudSynced = false,
  onLogout,
}) => {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [currentVoice, setCurrentVoice] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isStealth, setIsStealth] = useState<boolean>(() => isStealthOfficeMode());
  const [isMasterMenuOpen, setIsMasterMenuOpen] = useState<boolean>(false);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const levelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubVoice = subscribeVoiceChange((vId) => setCurrentVoice(vId));
    const unsubStealth = subscribeStealthMode((enabled) => setIsStealth(enabled));
    return () => {
      unsubVoice();
      unsubStealth();
    };
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMasterMenuOpen(false);
      }
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

  const activeVoiceOption = VOICE_OPTIONS.find((v) => v.id === currentVoice) || VOICE_OPTIONS[0];
  const isAuthorizedAdmin = profile.email?.toLowerCase().trim() === 'thinh.pat2@gmail.com' || profile.isAdmin;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-xl mx-auto px-2.5 sm:px-4 h-13 sm:h-14 flex items-center justify-between gap-1.5 sm:gap-2">
          
          {/* ================= LEFT CLUSTER: LOGO + LEVEL BADGE ================= */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => {
                playSound('click');
                onGoHome();
              }}
              className="transition-transform active:scale-95 cursor-pointer flex items-center"
              title="Về Trang Chủ Vikoda"
            >
              <HeaderBrandLogo className="h-6 sm:h-7 w-auto" />
            </button>

            {/* Level Selector Dropdown */}
            <div className="relative" ref={levelRef}>
              <button
                type="button"
                onClick={() => {
                  playSound('click');
                  setIsLevelDropdownOpen(!isLevelDropdownOpen);
                }}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0070D1] border border-sky-200 text-[11px] sm:text-xs font-black flex items-center gap-0.5 sm:gap-1 transition-all active:scale-95 cursor-pointer"
                title="Đổi cấp độ khóa học"
              >
                <span>{selectedLevel}</span>
                <ChevronDown className="w-3 h-3 text-sky-600" />
              </button>

              {isLevelDropdownOpen && (
                <div className="absolute left-0 mt-1.5 w-44 rounded-2xl bg-white border border-slate-200 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Chọn Cấp Độ
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

          {/* ================= RIGHT CLUSTER: STATS + UNIFIED MENU HUB ================= */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            
            {/* Compact Stats Pill: Streak & Gems (Fits on any mobile screen) */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-xs font-black text-slate-700 select-none">
              <span className="flex items-center gap-0.5 text-amber-600" title="Chuỗi ngày liên tục">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
                <span className="tabular-nums">{stats.streakDays}</span>
              </span>
              <span className="text-slate-300 font-normal">·</span>
              <span className="flex items-center gap-0.5 text-cyan-700" title="Đá quý tích lũy">
                <Gem className="w-3 h-3 fill-cyan-500 text-cyan-600 shrink-0" />
                <span className="tabular-nums">{stats.gems}</span>
              </span>
            </div>

            {/* Desktop Only: Direct AI Shortcut (Hidden on tiny mobile to guarantee ZERO overflow) */}
            <button
              onClick={() => {
                playSound('click');
                onOpenAi();
              }}
              className="hidden sm:flex p-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0070D1] border border-sky-200/80 transition-transform active:scale-95 cursor-pointer"
              title="Trợ lý AI Vikoda"
            >
              <Sparkles className="w-4 h-4 text-[#0070D1]" />
            </button>

            {/* UNIFIED MASTER MENU HUB (Avatar + Chevron Trigger) */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => {
                  playSound('click');
                  setIsMasterMenuOpen(!isMasterMenuOpen);
                }}
                className={`p-0.5 sm:p-1 rounded-2xl border transition-all cursor-pointer flex items-center gap-1 shadow-2xs ${
                  isMasterMenuOpen
                    ? 'border-sky-500 bg-sky-50 ring-2 ring-sky-200'
                    : 'border-slate-200 hover:border-sky-300 bg-white'
                }`}
                title="Menu Tiện Ích & Hồ Sơ Cá Nhân"
              >
                <div className="relative">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.fullName}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover"
                  />
                  {isCloudSynced && (
                    <span 
                      className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white"
                      title="Đã đồng bộ thời gian thực"
                    />
                  )}
                </div>
                <ChevronDown className="w-3 h-3 text-slate-500 pr-0.5" />
              </button>

              {/* Master Dropdown Drawer */}
              {isMasterMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100 space-y-1">
                  
                  {/* User Profile Card Header */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-1">
                    <div className="flex items-center gap-2">
                      <img
                        src={profile.avatarUrl}
                        alt=""
                        className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <div className="truncate flex-1">
                        <div className="text-xs font-black text-slate-800 truncate">{profile.fullName}</div>
                        <div className="text-[10px] text-slate-400 truncate">{profile.email || profile.employeeCode}</div>
                      </div>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-slate-200 flex items-center justify-between text-[10px] font-bold">
                      <button
                        onClick={() => {
                          playSound('click');
                          setIsMasterMenuOpen(false);
                          onOpenProfile();
                        }}
                        className="text-[#0070D1] hover:underline flex items-center gap-1"
                      >
                        <User className="w-3 h-3" />
                        <span>Xem & Đổi Avatar</span>
                      </button>
                      <span className="text-slate-400">ID: {profile.employeeCode}</span>
                    </div>
                  </div>

                  {/* Quick AI Trigger for Mobile */}
                  <button
                    onClick={() => {
                      playSound('click');
                      setIsMasterMenuOpen(false);
                      onOpenAi();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-sky-900 bg-sky-50/80 hover:bg-sky-100 transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#0070D1]" />
                    <div>
                      <div className="leading-tight">Trợ Lý AI Vikoda</div>
                      <div className="text-[10px] text-sky-600 font-normal">Hỏi đáp từ vựng & sửa lỗi giao tiếp</div>
                    </div>
                  </button>

                  <div className="px-2.5 pt-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Bộ Tiện Ích Đào Tạo & Thi Đấu
                  </div>

                  {/* 0.1 1v1 PvP Arena */}
                  {onOpenPvPArena && (
                    <button
                      onClick={() => {
                        playSound('click');
                        setIsMasterMenuOpen(false);
                        onOpenPvPArena();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-900 bg-rose-50/70 hover:bg-rose-100 transition-colors flex items-center gap-2.5 cursor-pointer"
                    >
                      <span className="text-sm">⚔️</span>
                      <div>
                        <div className="leading-tight flex items-center gap-1.5">
                          <span>Đấu Trường 1v1 PvP</span>
                          <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[9px] font-bold">HOT</span>
                        </div>
                        <div className="text-[10px] text-rose-700 font-normal">Thách đấu đối kháng với đồng nghiệp</div>
                      </div>
                    </button>
                  )}

                  {/* 0.2 Daily Quick Review */}
                  {onOpenDailyReview && (
                    <button
                      onClick={() => {
                        playSound('click');
                        setIsMasterMenuOpen(false);
                        onOpenDailyReview();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50/70 hover:bg-amber-100 transition-colors flex items-center gap-2.5 cursor-pointer"
                    >
                      <span className="text-sm">🔁</span>
                      <div>
                        <div className="leading-tight">Ôn Tập Nhanh 3 Phút</div>
                        <div className="text-[10px] text-amber-700 font-normal">Sửa các câu hay nhầm lẫn trong giao tiếp</div>
                      </div>
                    </button>
                  )}

                  {/* 0.3 AI Learning Coach & Planner */}
                  {onOpenCoach && (
                    <button
                      onClick={() => {
                        playSound('click');
                        setIsMasterMenuOpen(false);
                        onOpenCoach();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-sky-900 hover:bg-sky-50 transition-colors flex items-center gap-2.5 cursor-pointer"
                    >
                      <span className="text-sm">🧭</span>
                      <div>
                        <div className="leading-tight">Huấn Luyện Viên AI & Lịch Học</div>
                        <div className="text-[10px] text-sky-600 font-normal">Định hướng mục tiêu học tập theo tuần</div>
                      </div>
                    </button>
                  )}

                  {/* 0.4 Placement Test 4 Skills */}
                  {onOpenPlacementTest && (
                    <button
                      onClick={() => {
                        playSound('click');
                        setIsMasterMenuOpen(false);
                        onOpenPlacementTest();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-emerald-900 hover:bg-emerald-50 transition-colors flex items-center gap-2.5 cursor-pointer"
                    >
                      <span className="text-sm">📝</span>
                      <div>
                        <div className="leading-tight">Test Xếp Lớp Chuẩn Quốc Tế</div>
                        <div className="text-[10px] text-emerald-700 font-normal">Đánh giá 4 kỹ năng & quy đổi TOEIC</div>
                      </div>
                    </button>
                  )}

                  <div className="px-2.5 pt-1 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Bộ Tiện Ích Doanh Nghiệp
                  </div>

                  {/* 1. SOS 60s */}
                  <button
                    onClick={() => {
                      playSound('click');
                      setIsMasterMenuOpen(false);
                      onOpenSOS();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-rose-50 hover:text-rose-700 transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-sm">🚨</span>
                    <div>
                      <div className="leading-tight">Cẩm Nang SOS 60 Giây</div>
                      <div className="text-[10px] text-slate-400 font-normal">Cứu nguy trước cuộc họp VIP</div>
                    </div>
                  </button>

                  {/* 2. Hands-Free Commute */}
                  <button
                    onClick={() => {
                      playSound('click');
                      setIsMasterMenuOpen(false);
                      onOpenCommute();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <Headphones className="w-4 h-4 text-sky-600" />
                    <div>
                      <div className="leading-tight">Luyện Nghe Rảnh Tay</div>
                      <div className="text-[10px] text-slate-400 font-normal">Tự động phát khi lái xe</div>
                    </div>
                  </button>

                  {/* 3. Pocket Search */}
                  <button
                    onClick={() => {
                      playSound('click');
                      setIsMasterMenuOpen(false);
                      onOpenSearch();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <Search className="w-4 h-4 text-indigo-600" />
                    <div>
                      <div className="leading-tight">Tra Cứu Bỏ Túi</div>
                      <div className="text-[10px] text-slate-400 font-normal">Thuật ngữ mỏ khoáng & Incoterms</div>
                    </div>
                  </button>

                  {/* 4. CEO Portfolio */}
                  <button
                    onClick={() => {
                      playSound('click');
                      setIsMasterMenuOpen(false);
                      onOpenPortfolio();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="leading-tight">Chứng Chỉ Số CEO</div>
                      <div className="text-[10px] text-slate-400 font-normal">Bản ghi âm & Chứng nhận hoàn thành</div>
                    </div>
                  </button>

                  {/* 5. Leaderboard */}
                  <button
                    onClick={() => {
                      playSound('click');
                      setIsMasterMenuOpen(false);
                      onOpenLeaderboard();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-800 transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="leading-tight">Bảng Xếp Hạng Toàn Công Ty</div>
                      <div className="text-[10px] text-slate-400 font-normal">Thi đua phòng ban Vikoda</div>
                    </div>
                  </button>

                  {/* 6. ADMIN PORTAL (ONLY VISIBLE IF AUTHORIZED ADMIN) */}
                  {isAuthorizedAdmin && (
                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          playSound('click');
                          setIsMasterMenuOpen(false);
                          onOpenAdmin();
                        }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-50/70 hover:bg-amber-100 transition-colors flex items-center gap-2.5 cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <div>
                          <div className="leading-tight">Cổng Quản Trị Nhân Sự (Admin)</div>
                          <div className="text-[10px] text-amber-700 font-normal">Reset tiến độ & Kiểm toán mây</div>
                        </div>
                      </button>
                    </div>
                  )}

                  {/* Audio Controls (Voice & Office Stealth) */}
                  <div className="pt-1 border-t border-slate-100 flex items-center justify-between px-2.5 py-1.5 text-xs text-slate-600">
                    <button
                      onClick={() => {
                        setIsMasterMenuOpen(false);
                        setIsVoiceModalOpen(true);
                      }}
                      className="text-[11px] font-bold text-sky-700 hover:underline flex items-center gap-1"
                    >
                      <span>Giọng đọc:</span>
                      <span>{activeVoiceOption.flag}</span>
                    </button>

                    <button
                      onClick={toggleStealth}
                      className="text-[11px] font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                    >
                      {isStealth ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5 text-slate-500" />}
                      <span>{isStealth ? 'Tắt chuông' : 'Bật chuông'}</span>
                    </button>
                  </div>

                  {/* LOGOUT BUTTON */}
                  {onLogout && (
                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          playSound('click');
                          setIsMasterMenuOpen(false);
                          onLogout();
                        }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-700 hover:bg-rose-50 transition-colors flex items-center gap-2.5 cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5 text-rose-600" />
                        <span>Đăng Xuất Khỏi Thiết Bị</span>
                      </button>
                    </div>
                  )}

                </div>
              )}
            </div>

          </div>

        </div>
      </header>

      {/* Voice Selector Modal */}
      <VoiceSelectorModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
      />
    </>
  );
};
