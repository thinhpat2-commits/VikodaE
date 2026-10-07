import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Gem, 
  Zap, 
  Trophy, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  ArrowRight,
  Target,
  Sparkles,
  Award,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';
import { GamificationState, EmployeeProfile } from '../../types';
import { playSound, isStealthOfficeMode, setStealthOfficeMode, subscribeStealthMode } from '../../services/soundEffects';
import { 
  VOICE_OPTIONS, 
  getSelectedVoiceId, 
  subscribeVoiceChange,
  VoiceOptionId 
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
  onOpenArena,
  onOpenPvPArena,
  onOpenDailyReview,
  onOpenCoach,
  onOpenPlacementTest,
  onOpenProfile,
  onOpenSOS,
}) => {
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

  const activeVoiceOption = VOICE_OPTIONS.find((v) => v.id === currentVoice) || VOICE_OPTIONS[0];

  const { currentTier, estimatedToeic, estimatedIelts } = calculateProficiency(stats);

  // 7-day streak calendar calculations (Monday to Sunday)
  const daysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const todayDayIndex = (new Date().getDay() + 6) % 7; // 0 for Mon, 6 for Sun

  // Quests progress simulations based on actual state and Admin dailyXpGoal
  const dailyGoalTarget = (() => {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem('vikoda_admin_training_settings_v1');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.dailyXpGoal) return Number(parsed.dailyXpGoal);
        }
      } catch (e) {}
    }
    return 50;
  })();

  const quest1Progress = Math.min(100, Math.round(((stats.xp % dailyGoalTarget) / dailyGoalTarget) * 100));
  const quest2Progress = stats.completedNodeIds.length > 0 ? 100 : 0;
  const quest3Progress = stats.arenaStats?.matchesPlayed ? Math.min(100, stats.arenaStats.matchesPlayed * 50) : 0;

  return (
    <aside className="w-80 shrink-0 min-h-screen sticky top-0 p-5 space-y-4 border-l border-slate-200/80 bg-slate-50/50 select-none">
      
      {/* 1. TOP CURRENCY & STATUS BAR */}
      <div className="flex items-center justify-between gap-2 p-2 bg-white rounded-2xl border border-slate-200 shadow-2xs">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-black text-amber-900">
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span>{stats.streakDays}</span>
        </div>

        {/* Gems */}
        <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-black text-cyan-900">
          <Gem className="w-4 h-4 fill-cyan-500 text-cyan-500" />
          <span>{stats.gems}</span>
        </div>

        {/* Voice Selector */}
        <button
          onClick={() => setIsVoiceModalOpen(true)}
          className="p-1.5 rounded-xl hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer"
          title="Chọn giọng đọc AI"
        >
          <span>{activeVoiceOption.flag}</span>
        </button>

        {/* Stealth Toggle */}
        <button
          onClick={toggleStealth}
          className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-600 cursor-pointer"
          title={isStealth ? 'Chế độ công sở: Đã tắt chuông' : 'Bật hiệu ứng âm thanh'}
        >
          {isStealth ? (
            <VolumeX className="w-4 h-4 text-rose-500" />
          ) : (
            <Volume2 className="w-4 h-4 text-slate-500" />
          )}
        </button>
      </div>

      {/* GLOBAL PROFICIENCY SPOTLIGHT CARD */}
      <div 
        onClick={() => {
          playSound('click');
          if (onOpenProfile) {
            onOpenProfile();
          } else if (onOpenPlacementTest) {
            onOpenPlacementTest();
          }
        }}
        className="group bg-gradient-to-br from-[#004B87] via-[#0070D1] to-[#009FE3] p-4 rounded-3xl text-white shadow-md border border-sky-300/40 relative overflow-hidden cursor-pointer hover:shadow-lg transition-all active:scale-98"
        title="Bấm để xem chi tiết Bảng Đo Lường Trình Độ Quốc Tế"
      >
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center text-white shrink-0 shadow-xs">
              <span className="text-base font-black">{currentTier.cefr}</span>
              <span className="text-[7px] font-black uppercase text-sky-200">CEFR</span>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>Thành Tích Quốc Tế</span>
              </div>
              <div className="text-xs font-black text-white truncate max-w-[140px]">
                {currentTier.title.split('(')[0]}
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-black text-amber-300 block">~{estimatedToeic}</span>
            <span className="text-[9px] text-sky-100 font-medium">TOEIC Eq.</span>
          </div>
        </div>

        <div className="mt-2.5 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-bold text-sky-100">
          <span>Lộ trình: <strong className="text-amber-300">100 Bài • 700+ Câu</strong></span>
          <span className="flex items-center gap-0.5 text-amber-300 group-hover:translate-x-0.5 transition-transform">
            <span>Năng lực ➜</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* 2. STREAK CALENDAR CARD (DUOLINGO STYLE) */}
      <div className="bg-white p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Flame className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900 leading-none">
                Chuỗi {stats.streakDays} ngày
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
              className="text-[10px] font-black text-[#0070D1] hover:underline cursor-pointer"
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
                      ? 'bg-amber-500 text-white shadow-xs'
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

      {/* 3. DAILY QUESTS (NHIỆM VỤ HÀNG NGÀY - DUOLINGO STYLE) */}
      <div className="bg-white p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-indigo-500" />
            <span>Nhiệm Vụ Hôm Nay</span>
          </div>
          <span className="text-[10px] font-extrabold text-amber-600">3/3 mở rương</span>
        </div>

        {/* Quest 1 */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span className="truncate">Kiếm {dailyGoalTarget} XP hôm nay</span>
            <span className="text-[10px] text-slate-400 shrink-0">+{stats.xp % dailyGoalTarget}/{dailyGoalTarget} XP</span>
          </div>
          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300"
              style={{ width: `${quest1Progress}%` }}
            />
          </div>
        </div>

        {/* Quest 2 */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span className="truncate">Hoàn thành 1 bài học</span>
            <span className="text-[10px] text-slate-400 shrink-0">1 bài</span>
          </div>
          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${quest2Progress}%` }}
            />
          </div>
        </div>

        {/* Quest 3 */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span className="truncate">Thách đấu 1 trận 1v1</span>
            <span className="text-[10px] text-slate-400 shrink-0">1 trận</span>
          </div>
          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-300"
              style={{ width: `${quest3Progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4. COMPANY LEAGUE RANK WIDGET (BẢNG THI ĐUA DOANH NGHIỆP THEO CẤP ĐỘ CEFR) */}
      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 p-4 rounded-3xl border-2 border-indigo-200 border-b-4 border-b-indigo-300 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-base shadow-xs">
              🏆
            </div>
            <div>
              <div className="text-xs font-black text-indigo-950 uppercase tracking-wide flex items-center gap-1.5">
                <span>Bảng Vàng Thi Đua</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-indigo-200 text-indigo-900 font-extrabold">
                  {currentTier.cefr}
                </span>
              </div>
              <div className="text-[10px] text-indigo-700 font-bold truncate max-w-[150px]">
                {currentTier.title}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-snug">
          Bạn đang tranh tài tại <span className="font-black text-indigo-700">Bảng {currentTier.cefr}</span> cùng các đồng nghiệp cùng năng lực!
        </p>

        <button
          onClick={() => {
            playSound('click');
            onOpenLeaderboard();
          }}
          className="w-full py-2 rounded-xl bg-white hover:bg-indigo-50 text-indigo-900 font-black text-xs border border-indigo-200 shadow-2xs active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Xem Bảng Xếp Hạng {currentTier.cefr}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <VoiceSelectorModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onSelectVoice={(vId) => setCurrentVoice(vId)}
      />

    </aside>
  );
};
