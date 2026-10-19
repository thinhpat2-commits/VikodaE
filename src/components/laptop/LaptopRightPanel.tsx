import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  ChevronRight,
  Sparkles,
  Trophy,
  Award
} from 'lucide-react';
import { GamificationState, EmployeeProfile } from '../../types';
import { VIKODA_ASSETS, VikoMascot, MascotMood, useVikodaAssetSync } from '../brand/VikodaLogos';
import { VikoDynamicAnimator } from '../VikoDynamicAnimator';
import { playSound, isStealthOfficeMode, setStealthOfficeMode, subscribeStealthMode } from '../../services/soundEffects';
import { 
  VOICE_OPTIONS, 
  getSelectedVoiceId, 
  subscribeVoiceChange,
  VoiceOptionId,
  playVikoMascotSpeech
} from '../../services/speechService';
import { VoiceSelectorModal } from '../VoiceSelectorModal';
import { calculateProficiency } from '../GlobalProficiencyDashboard';

interface LaptopRightPanelProps {
  stats: GamificationState;
  profile: EmployeeProfile;
  onOpenLeaderboard: () => void;
  onOpenArena: () => void;
  onOpenPvPArena?: () => void;
  onOpenDailyReview?: () => void;
  onOpenCoach?: () => void;
  onOpenPlacementTest?: () => void;
  onOpenProfile?: () => void;
  onOpenSOS?: () => void;
  onOpenCommute?: () => void;
  onOpenSearch?: () => void;
  onOpenPortfolio?: () => void;
}

export const LaptopRightPanel: React.FC<LaptopRightPanelProps> = ({
  stats,
  profile,
  onOpenLeaderboard,
  onOpenCoach,
  onOpenProfile,
  onOpenPlacementTest,
}) => {
  useVikodaAssetSync();
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [currentVoice, setCurrentVoice] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isStealth, setIsStealth] = useState<boolean>(() => isStealthOfficeMode());
  const [panelMascotMood, setPanelMascotMood] = useState<MascotMood>('bottle_hug');

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

  const activeVoiceOption = VOICE_OPTIONS.find((v) => v.id === currentVoice) || VOICE_OPTIONS[0];
  const { currentTier, estimatedToeic } = calculateProficiency(stats);

  const daysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const todayDayIndex = (new Date().getDay() + 6) % 7;

  return (
    <aside className="w-80 shrink-0 min-h-screen sticky top-0 p-5 space-y-4 border-l-2 border-slate-200 bg-white select-none">
      
      {/* 1. TOP CURRENCY BAR (DUOLINGO 3D MASTERCLASS) */}
      <div className="flex items-center justify-between gap-2 p-2 bg-slate-50/80 rounded-2xl border-2 border-slate-200 shadow-2xs">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-black text-amber-900" title="Chuỗi ngày rèn luyện liên tục">
          <img src={VIKODA_ASSETS.streakFire} alt="Streak" className="w-6 h-6 object-contain filter drop-shadow-xs" />
          <span className="text-sm font-black">{stats.streakDays || 1}</span>
        </div>

        {/* Gems */}
        <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-black text-cyan-900" title="Đá Quý Khoáng Chất">
          <img src={VIKODA_ASSETS.gemCyan} alt="Gems" className="w-5 h-6 object-contain filter drop-shadow-xs" />
          <span className="text-sm font-black">{stats.gems || 483}</span>
        </div>

        {/* Hearts / Alkaline Health */}
        <div className="flex items-center gap-1 px-2 py-1 text-xs font-black text-purple-900" title="Độ Kiềm Tự Nhiên pH 9.0">
          <img src={VIKODA_ASSETS.heartPurple} alt="Heart" className="w-5 h-5 object-contain filter drop-shadow-xs" />
          <span className="text-sm font-black">5/5</span>
        </div>

        {/* Audio Stealth Toggle */}
        <button
          onClick={toggleStealth}
          className="p-1.5 rounded-xl hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
          title={isStealth ? 'Đang tắt tiếng' : 'Đang bật âm thanh'}
        >
          {isStealth ? (
            <VolumeX className="w-4 h-4 text-rose-500" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#009FE3]" />
          )}
        </button>
      </div>

      {/* 2.5 INTERACTIVE LIVE VIKO MASCOT CARD */}
      <div className="bg-gradient-to-br from-sky-50 via-cyan-50/60 to-white p-3.5 rounded-3xl border-2 border-cyan-200/80 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-sm">💧</span>
            <span className="text-[11px] font-black uppercase text-cyan-900 tracking-wider">Bạn Đồng Hành Viko</span>
          </div>
          <button
            onClick={() => {
              playSound('click');
              playVikoMascotSpeech("Keep going! You are doing awesome with Vikoda English today!");
            }}
            className="text-[10px] font-bold text-cyan-700 hover:text-cyan-900 bg-cyan-100 hover:bg-cyan-200 px-2 py-0.5 rounded-full transition-colors cursor-pointer flex items-center gap-1"
            title="Nghe Viko trò chuyện"
          >
            <Volume2 className="w-3 h-3" />
            <span>Nói chuyện</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div 
            onClick={() => {
              playSound('click');
              playVikoMascotSpeech("Keep going! You are doing awesome with Vikoda English today!");
            }}
            className="cursor-pointer hover:scale-105 active:scale-95 transition-transform shrink-0"
            title="Bấm để nghe Viko trò chuyện"
          >
            <VikoDynamicAnimator size="sm" autoAnimate={true} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11.5px] font-bold text-slate-800 leading-snug">
              "Luyện tập 15 phút mỗi ngày cùng Viko để bứt phá tiếng Anh đàm phán quốc tế nhé! 💧"
            </p>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-cyan-700 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tự động tương tác</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STREAK CALENDAR CARD */}
      <div className="bg-white p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={VIKODA_ASSETS.streakFire} alt="Fire" className="w-7 h-7 object-contain" />
            <div>
              <div className="text-sm font-black text-slate-900 leading-none">
                Chuỗi {stats.streakDays || 1} ngày
              </div>
              <div className="text-[10px] text-amber-600 font-bold mt-0.5">
                Rèn luyện đều đặn
              </div>
            </div>
          </div>
          {onOpenCoach && (
            <button
              onClick={() => {
                playSound('click');
                onOpenCoach();
              }}
              className="text-[11px] font-black text-[#009FE3] hover:underline cursor-pointer"
            >
              Lịch học
            </button>
          )}
        </div>

        {/* 7 Day Circles */}
        <div className="grid grid-cols-7 gap-1 pt-1">
          {daysOfWeek.map((d, idx) => {
            const isDone = idx <= todayDayIndex;
            const isToday = idx === todayDayIndex;
            return (
              <div key={d} className="flex flex-col items-center gap-1">
                <span className="text-[9px] font-bold text-slate-400">{d}</span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                    isDone
                      ? 'bg-amber-500 text-white shadow-xs border-b-2 border-amber-700'
                      : isToday
                      ? 'bg-amber-100 text-amber-700 ring-2 ring-amber-400'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {isDone ? '✓' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. DAILY QUESTS (NHIỆM VỤ HÀNG NGÀY VỚI RƯƠNG VÀNG) */}
      <div className="bg-white p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <img src={VIKODA_ASSETS.chestClosed} alt="Chest" className="w-5 h-5 object-contain" />
            <span>Nhiệm Vụ Hôm Nay</span>
          </div>
          <span className="text-[10px] font-extrabold text-amber-600">Mở rương quà</span>
        </div>

        <div className="space-y-2.5">
          {/* Quest 1 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="truncate">Kiếm 20 điểm KN hôm nay</span>
              <span className="text-amber-600 shrink-0 font-extrabold">20/20</span>
            </div>
            <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full w-full" />
            </div>
          </div>

          {/* Quest 2 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="truncate">Hoàn thành 1 bài luyện nói</span>
              <span className="text-[#009FE3] shrink-0 font-extrabold">1/1</span>
            </div>
            <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div className="h-full bg-gradient-to-r from-sky-400 to-[#009FE3] rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. LEADERBOARD PREVIEW (CÚP VÀNG ĐẢNH THẠNH) */}
      <div 
        onClick={() => {
          playSound('click');
          onOpenLeaderboard();
        }}
        className="bg-white p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs cursor-pointer hover:border-amber-300 transition-all space-y-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={VIKODA_ASSETS.trophyDanhThanh} alt="Trophy" className="w-7 h-7 object-contain" />
            <div>
              <div className="text-xs font-black uppercase text-slate-900">Bảng Xếp Hạng Tuần</div>
              <div className="text-[10px] text-slate-400 font-bold">Top 3 Phòng Ban Xuất Sắc</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Voice Selector Modal */}
      {isVoiceModalOpen && (
        <VoiceSelectorModal 
          isOpen={isVoiceModalOpen} 
          onClose={() => setIsVoiceModalOpen(false)} 
        />
      )}

    </aside>
  );
};
