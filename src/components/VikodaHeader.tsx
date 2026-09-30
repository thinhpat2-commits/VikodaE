import React, { useState, useEffect } from 'react';
import { Flame, Gem, Sparkles, Volume2, VolumeX, Zap, Headphones, Search, Award } from 'lucide-react';
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
}) => {
  const [activeTooltip, setActiveTooltip] = useState<'streak' | 'gems' | 'hearts' | null>(null);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [currentVoice, setCurrentVoice] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isStealth, setIsStealth] = useState<boolean>(() => isStealthOfficeMode());

  useEffect(() => {
    const unsubVoice = subscribeVoiceChange((vId) => setCurrentVoice(vId));
    const unsubStealth = subscribeStealthMode((enabled) => setIsStealth(enabled));
    return () => {
      unsubVoice();
      unsubStealth();
    };
  }, []);

  const toggleStealth = () => {
    const nextVal = !isStealth;
    setIsStealth(nextVal);
    setStealthOfficeMode(nextVal);
  };

  const toggleTooltip = (type: 'streak' | 'gems' | 'hearts') => {
    playSound('click');
    setActiveTooltip((prev) => (prev === type ? null : type));
  };

  const activeVoiceOption = VOICE_OPTIONS.find((v) => v.id === currentVoice) || VOICE_OPTIONS[0];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-200/80 shadow-xs">
      
      {/* Top Bar: Duolingo HUD Style */}
      <div className="max-w-md mx-auto px-3 sm:px-3.5 py-1.5 sm:py-2 flex items-center justify-between relative">
        
        {/* Duolingo Vikoda Brand Lockup: Click to return to Home Roadmap */}
        <button 
          className="flex items-center cursor-pointer transition-transform active:scale-95 text-left shrink-0" 
          onClick={onGoHome}
          title="Trang Chủ Lộ Trình Vikoda"
          aria-label="Về trang chủ Vikoda"
        >
          <HeaderBrandLogo className="h-7 sm:h-8" />
        </button>

        {/* Right HUD: Stealth, Streak, Gems, Voice & Profile */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          
          {/* 0. STEALTH OFFICE MODE TOGGLE (Tắt tiếng chuông ồn ào ở văn phòng) */}
          <button
            onClick={toggleStealth}
            className={`p-1 sm:p-1.5 rounded-xl border transition-all cursor-pointer ${
              isStealth 
                ? 'bg-rose-50 text-rose-600 border-rose-300 font-black' 
                : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
            }`}
            title={isStealth ? 'Chế độ văn phòng: BẬT (Đã tắt toàn bộ tiếng chuông game)' : 'Chế độ văn phòng: TẮT (Đang bật tiếng chuông game)'}
          >
            {isStealth ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* 1. STREAK (Chuỗi ngày liên tục) */}
          <button
            onClick={() => toggleTooltip('streak')}
            className={`flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-xl font-extrabold text-[11px] sm:text-xs transition-all cursor-pointer select-none border-b-2 ${
              activeTooltip === 'streak'
                ? 'bg-amber-100 text-amber-900 border-amber-400 scale-105'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100/80 border-amber-300/80 active:translate-y-0.5'
            }`}
            title="Lý do: Chuỗi ngày học liên tục để rèn phản xạ"
          >
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500 text-amber-500 shrink-0" />
            <span className="tabular-nums">{stats.streakDays}</span>
          </button>

          {/* 2. GEMS (Ngọc khoáng thiên nhiên) */}
          <button
            onClick={() => toggleTooltip('gems')}
            className={`flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-xl font-extrabold text-[11px] sm:text-xs transition-all cursor-pointer select-none border-b-2 ${
              activeTooltip === 'gems'
                ? 'bg-cyan-100 text-cyan-900 border-cyan-400 scale-105'
                : 'bg-cyan-50 text-[#0070D1] hover:bg-cyan-100/80 border-cyan-300/80 active:translate-y-0.5'
            }`}
            title="Lý do: Điểm khoáng chất tích lũy khi làm đúng"
          >
            <Gem className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-cyan-500 text-cyan-600 shrink-0" />
            <span className="tabular-nums">{stats.gems}</span>
          </button>

          {/* 3. VOICE SELECTOR TRIGGER (Chọn giọng đọc: US Male Michael, UK Male, US Female) */}
          <button
            onClick={() => {
              playSound('click');
              setIsVoiceModalOpen(true);
            }}
            className="flex items-center space-x-1 px-1.5 sm:px-2 py-1 rounded-xl font-bold text-xs bg-sky-50 text-[#0070D1] hover:bg-sky-100 border border-sky-200/80 active:translate-y-0.5 cursor-pointer shadow-2xs"
            title="Đổi giọng đọc AI (Michael US Rõ Nét, Oliver UK, Emma US)"
          >
            <span className="text-xs">{activeVoiceOption.flag}</span>
            <Volume2 className="w-3.5 h-3.5 text-[#0070D1]" />
          </button>

          {/* 4. AI COACH SHORTCUT */}
          <button
            onClick={() => {
              playSound('click');
              onOpenAi();
            }}
            className="p-1 sm:p-1.5 rounded-xl bg-sky-50 text-[#0066CC] hover:bg-sky-100 border border-sky-200/80 transition-transform active:scale-95 cursor-pointer"
            title="Trợ lý AI Vikoda"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0066CC]" />
          </button>

          {/* 5. USER PROFILE AVATAR (Click to view profile info) */}
          <button
            onClick={() => {
              playSound('click');
              onOpenProfile();
            }}
            className="relative p-0.5 rounded-full border-2 border-sky-400 hover:border-sky-600 transition-transform active:scale-95 cursor-pointer shadow-2xs shrink-0"
            title={`Hồ sơ: ${profile.fullName} (${profile.employeeCode})`}
          >
            <img
              src={profile.avatarUrl}
              alt={profile.fullName}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* EXECUTIVE QUICK UTILITY BAR: 1-Tap Pre-Meeting, Commute, Search, CEO Portfolio */}
      <div className="max-w-md mx-auto px-3 sm:px-3.5 pb-2">
        <div className="grid grid-cols-4 gap-1.5 text-[10px] font-black">
          <button 
            onClick={() => {
              playSound('click');
              onOpenSOS();
            }} 
            className="py-1.5 px-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 flex items-center justify-center gap-1 shadow-2xs transition-all active:scale-95 cursor-pointer"
            title="Cẩm nang nhẩm nhanh 60 giây trước cuộc họp ngoại giao"
          >
            <Zap className="w-3 h-3 fill-current" />
            <span className="truncate">Cứu Nguy 60s</span>
          </button>

          <button 
            onClick={() => {
              playSound('click');
              onOpenCommute();
            }} 
            className="py-1.5 px-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-1 shadow-2xs transition-all active:scale-95 cursor-pointer"
            title="Chế độ nghe rảnh tay khi di chuyển / lái xe / đi bộ"
          >
            <Headphones className="w-3 h-3" />
            <span className="truncate">Rảnh Tay</span>
          </button>

          <button 
            onClick={() => {
              playSound('click');
              onOpenSearch();
            }} 
            className="py-1.5 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center gap-1 border border-slate-200 transition-all active:scale-95 cursor-pointer"
            title="Tra cứu nhanh mẫu câu & thuật ngữ xuất khẩu"
          >
            <Search className="w-3 h-3 text-[#0070D1]" />
            <span className="truncate">Tra Cứu</span>
          </button>

          <button 
            onClick={() => {
              playSound('click');
              onOpenPortfolio();
            }} 
            className="py-1.5 px-1 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 flex items-center justify-center gap-1 border border-indigo-200 transition-all active:scale-95 cursor-pointer"
            title="Xem báo cáo đối chiếu giọng nói và chứng nhận Đại sứ trình CEO"
          >
            <Award className="w-3 h-3 text-indigo-600" />
            <span className="truncate">Báo Cáo CEO</span>
          </button>
        </div>
      </div>

      {/* Tooltip drawer for Streak / Gems / Hearts */}
      {activeTooltip && (
        <div className="bg-slate-900 text-white text-xs px-4 py-2 border-t border-slate-800 flex items-center justify-between animate-in slide-in-from-top-1 duration-150">
          <div>
            {activeTooltip === 'streak' && (
              <span>🔥 <b>Chuỗi {stats.streakDays} ngày</b>: Học mỗi ngày giúp tạo phản xạ tiếng Anh tự nhiên khi gặp khách hàng quốc tế.</span>
            )}
            {activeTooltip === 'gems' && (
              <span>💎 <b>{stats.gems} Viên Ngọc</b>: Tích lũy để đổi vật phẩm mở rộng và thăng cấp huy hiệu đại sứ.</span>
            )}
          </div>
          <button
            onClick={() => setActiveTooltip(null)}
            className="text-slate-400 hover:text-white p-1 ml-2 font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Duolingo-style Segmented Level Selector with Tactile Depth */}
      <div className="max-w-md mx-auto px-3.5 pb-2">
        <div className="bg-slate-100/90 p-1 rounded-2xl flex gap-1 border-2 border-slate-200/80">
          
          {/* LEVEL A1 */}
          <button
            onClick={() => {
              playSound('click');
              setSelectedLevel('A1');
            }}
            className={`flex-1 py-1.5 px-1 rounded-xl text-[11px] font-black tracking-tight transition-all text-center cursor-pointer ${
              selectedLevel === 'A1'
                ? 'bg-emerald-500 text-white shadow-[0_2px_0_#15803d]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
            title="Mục tiêu: Đón tiếp đoàn khách quốc tế & Chào hỏi văn phòng"
          >
            🌱 A1: Đón Khách
          </button>

          {/* LEVEL A2-B1 */}
          <button
            onClick={() => {
              playSound('click');
              setSelectedLevel('A2-B1');
            }}
            className={`flex-1 py-1.5 px-1 rounded-xl text-[11px] font-black tracking-tight transition-all text-center cursor-pointer ${
              selectedLevel === 'A2-B1'
                ? 'bg-[#009FE3] text-white shadow-[0_2px_0_#0072ce]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
            title="Mục tiêu: Dẫn tour mỏ Đảnh Thạnh & Thuyết trình độ pH 9.0"
          >
            💼 B1: Mỏ Khoáng
          </button>

          {/* LEVEL B2-C1 */}
          <button
            onClick={() => {
              playSound('click');
              setSelectedLevel('B2-C1');
            }}
            className={`flex-1 py-1.5 px-1 rounded-xl text-[10px] sm:text-[11px] font-black tracking-tight transition-all text-center cursor-pointer ${
              selectedLevel === 'B2-C1'
                ? 'bg-indigo-600 text-white shadow-[0_2px_0_#4338ca]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
            title="Mục tiêu: Báo giá CIF/FOB & Đàm phán hợp đồng container xuất khẩu"
          >
            💎 C1: Xuất Khẩu
          </button>

          {/* LEVEL C2 */}
          <button
            onClick={() => {
              playSound('click');
              setSelectedLevel('C2');
            }}
            className={`flex-1 py-1.5 px-1 rounded-xl text-[10px] sm:text-[11px] font-black tracking-tight transition-all text-center cursor-pointer ${
              selectedLevel === 'C2'
                ? 'bg-purple-600 text-white shadow-[0_2px_0_#581c87]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
            title="Mục tiêu: Đàm phán cấp CEO, Thành ngữ thương trường & Lối nói Bản Ngữ"
          >
            👑 C2: Bản Ngữ
          </button>
        </div>
      </div>

    </header>

    {/* Responsive Voice Selector Modal outside header element */}
    <VoiceSelectorModal
      isOpen={isVoiceModalOpen}
      onClose={() => setIsVoiceModalOpen(false)}
      onSelectVoice={(vId) => setCurrentVoice(vId)}
    />
  </>
);
};


