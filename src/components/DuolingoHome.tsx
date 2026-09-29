import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Zap,
  Trophy,
  BookOpen,
  Volume2,
  X,
  Gift,
  Sparkles,
  Lock,
  ChevronRight
} from 'lucide-react';
import { VIKODA_CURRICULUM, VIKODA_SIDE_QUESTS, UnitLesson, SideQuestItem, CourseLevel } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { DuolingoGameArena } from './DuolingoGameArena';
import { playSound } from '../services/soundEffects';
import { playSpeech } from '../services/speechService';

interface DuolingoHomeProps {
  selectedLevel: CourseLevel;
  setSelectedLevel: (lvl: CourseLevel) => void;
  completedUnitIds: string[];
  onCompleteUnit: (unitId: string, xp: number, gems: number) => void;
  speechRate: number;
  onGoToVoiceCoach: () => void;
  onGoToPitchDeck: () => void;
  onOpenEndlessDrill: () => void;
  onOpenLeaderboard: () => void;
  highestDrillScore: number;
}

export const DuolingoHome: React.FC<DuolingoHomeProps> = ({
  selectedLevel,
  completedUnitIds,
  onCompleteUnit,
  speechRate,
  onOpenEndlessDrill,
  onOpenLeaderboard,
  highestDrillScore
}) => {
  const [activeLesson, setActiveLesson] = useState<UnitLesson | null>(null);
  const [isGuidebookOpen, setIsGuidebookOpen] = useState<boolean>(false);
  const [isChestClaimed, setIsChestClaimed] = useState<boolean>(false);
  const [showChestReward, setShowChestReward] = useState<boolean>(false);
  const [activeSideQuest, setActiveSideQuest] = useState<SideQuestItem | null>(null);
  const [sideQuestAnswer, setSideQuestAnswer] = useState<number | null>(null);
  const [isSideQuestAnswered, setIsSideQuestAnswered] = useState<boolean>(false);

  // Filter lessons based on selected level (5 units per level)
  const displayedLessons = VIKODA_CURRICULUM.filter((u) => u.level === selectedLevel);
  const allCompletedInLevel = displayedLessons.every((l) => completedUnitIds.includes(l.id));

  // Determine active (current) lesson index: first unlocked lesson that is not completed
  let currentActiveIndex = 0;
  for (let i = 0; i < displayedLessons.length; i++) {
    if (!completedUnitIds.includes(displayedLessons[i].id)) {
      currentActiveIndex = i;
      break;
    }
    if (i === displayedLessons.length - 1) {
      currentActiveIndex = displayedLessons.length; // all completed
    }
  }

  const handleStartLesson = (lesson: UnitLesson) => {
    playSound('click');
    setActiveLesson(lesson);
  };

  const handleOpenChest = () => {
    if (isChestClaimed) {
      playSound('click');
      return;
    }
    playSound('celebrate');
    setIsChestClaimed(true);
    setShowChestReward(true);
    onCompleteUnit('bonus_chest_' + selectedLevel, 50, 15);
  };

  return (
    <div className="space-y-4 pb-28 max-w-md mx-auto">
      
      {/* 1. Duolingo-style Unit Section Banner */}
      <div className="bg-[#009FE3] border-b-4 border-[#0072CE] p-4 rounded-3xl text-white shadow-md relative overflow-hidden">
        {/* Soft background circles */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-center justify-between gap-3 relative z-10">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-black tracking-wide uppercase">
                {selectedLevel === 'A1' ? 'CỬA 1 • NHẬP MÔN' : selectedLevel === 'A2-B1' ? 'CỬA 2 • VĂN PHÒNG' : 'CỬA 3 • XUẤT KHẨU'}
              </span>
            </div>

            <h2 className="text-base font-black tracking-tight leading-snug text-white">
              {selectedLevel === 'A1' 
                ? 'Giao Tiếp & Chào Đón Đoàn Khách' 
                : selectedLevel === 'A2-B1' 
                ? 'Giới Thiệu Mỏ Đảnh Thạnh pH 9.0' 
                : 'Thương Thảo & Xuất Khẩu Container'}
            </h2>
            
            <p className="text-xs text-sky-100 font-medium">
              Lộ trình 5 bài học thực chiến • 3 phút mỗi bài
            </p>

            {/* Guidebook Button ("Sổ tay kiến thức" - mọi nút bấm đều có lý do) */}
            <div className="pt-1.5">
              <button
                onClick={() => {
                  playSound('click');
                  setIsGuidebookOpen(true);
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white text-[#0066CC] hover:bg-sky-50 font-extrabold text-xs border-b-2 border-slate-300 active:translate-y-0.5 transition-all cursor-pointer shadow-2xs"
                title="Lý do: Xem nhanh mẫu câu & từ vựng cần nhớ trước khi học"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#0070D1]" />
                <span>Sổ Tay Ghi Nhớ</span>
              </button>
            </div>
          </div>

          {/* Viko Mascot Cheering */}
          <div className="shrink-0 flex flex-col items-center">
            <VikoMascot size="lg" mood="cheering" className="animate-duo-float" />
          </div>
        </div>
      </div>

      {/* 2. Action Cards: ARENA Đấu Trường Phản Xạ & Bảng Xếp Hạng */}
      <div className="grid grid-cols-2 gap-2.5">
        
        {/* Arena Đấu Trường Phản Xạ Nhanh */}
        <button
          onClick={() => {
            playSound('click');
            onOpenEndlessDrill();
          }}
          className="p-3 rounded-2xl bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 hover:border-amber-300 hover:border-b-amber-400 shadow-xs flex items-center space-x-2.5 text-left transition-all active:translate-y-0.5 active:border-b-2 cursor-pointer group"
          title="Lý do: Đấu trường phản xạ 4 cấp bậc (Đồng, Bạc, Vàng, Kim Cương)"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-800 flex items-center gap-1">
              <span>ARENA Phản Xạ</span>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            </div>
            <div className="text-[10px] text-amber-600 font-bold">4 Cấp Bậc • x3 XP</div>
          </div>
        </button>

        {/* Bảng Xếp Hạng */}
        <button
          onClick={() => {
            playSound('click');
            onOpenLeaderboard();
          }}
          className="p-3 rounded-2xl bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 hover:border-cyan-300 hover:border-b-cyan-400 shadow-xs flex items-center space-x-2.5 text-left transition-all active:translate-y-0.5 active:border-b-2 cursor-pointer group"
          title="Lý do: Theo dõi thứ hạng thi đua giữa các phòng ban Vikoda"
        >
          <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-200 group-hover:scale-105 transition-transform">
            <Trophy className="w-5 h-5 fill-cyan-500 text-cyan-600" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-800">Bảng Xếp Hạng</div>
            <div className="text-[10px] text-[#0070D1] font-bold">{highestDrillScore || 0} điểm kỷ lục</div>
          </div>
        </button>

      </div>

      {/* 3. The 5-Unit Winding Duolingo Path with Side-Quests in Whitespace */}
      <div className="relative py-6 max-w-sm mx-auto">
        
        {/* Soft curving vertical path guide */}
        <div className="absolute top-8 bottom-12 left-1/2 -translate-x-1/2 w-3 bg-slate-200 rounded-full" />

        <div className="space-y-10 relative z-10">
          {displayedLessons.map((lesson, idx) => {
            const isCompleted = completedUnitIds.includes(lesson.id);
            const isUnlocked = idx === 0 || completedUnitIds.includes(displayedLessons[idx - 1].id) || isCompleted;
            const isCurrent = idx === currentActiveIndex;

            // Gentle serpentine path offsets on mobile and desktop
            const offsets = ['translate-x-0', 'translate-x-6 sm:translate-x-8', '-translate-x-6 sm:-translate-x-8', 'translate-x-5 sm:translate-x-7', 'translate-x-0'];
            const offsetClass = offsets[idx % offsets.length];

            // Check if there is an adjacent side-quest at this slot
            const sideQuest = VIKODA_SIDE_QUESTS.find(
              (sq) => sq.slotAfterUnitIndex === idx && sq.level === selectedLevel
            );

            return (
              <React.Fragment key={lesson.id}>
                {/* Main Stepping Stone Container */}
                <div className={`flex flex-col items-center ${offsetClass}`}>
                  
                  {/* Active Lesson Floating Speech Bubble (Duolingo Style: "BẮT ĐẦU!") */}
                  {isCurrent && isUnlocked && (
                    <div className="mb-2 animate-bounce">
                      <div className="relative bg-[#009FE3] text-white px-3 py-1 rounded-xl font-black text-xs shadow-md border-b-2 border-[#0072CE]">
                        <span>BẮT ĐẦU!</span>
                        {/* Triangle Pointer down */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-6 border-t-[#0072CE]" />
                      </div>
                    </div>
                  )}

                  {/* 3D Circular Stepping Stone Button */}
                  <div className="relative">
                    <button
                      disabled={!isUnlocked}
                      onClick={() => handleStartLesson(lesson)}
                      className={`w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer select-none ${
                        isCompleted
                          ? 'bg-[#22c55e] border-b-[6px] border-[#15803d] active:border-b-2 active:translate-y-1 text-white shadow-md'
                          : isCurrent
                          ? 'bg-[#009FE3] border-b-[6px] border-[#0072CE] active:border-b-2 active:translate-y-1 text-white shadow-lg ring-4 ring-sky-300/60 scale-105'
                          : isUnlocked
                          ? 'bg-[#009FE3] border-b-[6px] border-[#0072CE] active:border-b-2 active:translate-y-1 text-white shadow-md'
                          : 'bg-slate-200 border-b-[6px] border-slate-300 text-slate-400 cursor-not-allowed'
                      }`}
                      title={
                        isCompleted
                          ? `Đã hoàn thành! Bấm để ôn luyện lại (+5 XP)`
                          : isUnlocked
                          ? `Bấm để bắt đầu học bài ${lesson.unitNumber}: ${lesson.title}`
                          : `Cần hoàn thành bài trước để mở khóa`
                      }
                    >
                      {isUnlocked ? (
                        <span className="text-3xl drop-shadow-xs">{lesson.icon}</span>
                      ) : (
                        <Lock className="w-7 h-7 text-slate-400" />
                      )}
                    </button>

                    {/* Completion Check Badge */}
                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-[#22c55e] flex items-center justify-center text-[#22c55e] shadow-xs">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}

                    {/* 3-Star Rating Badge for Completed Lessons */}
                    {isCompleted && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-0.5 bg-amber-400 px-2 py-0.5 rounded-full border-2 border-white text-[10px] text-amber-950 font-black shadow-xs whitespace-nowrap">
                        <Star className="w-3 h-3 fill-amber-950" />
                        <span>3/3</span>
                      </div>
                    )}
                  </div>

                  {/* Lesson Title Card */}
                  <div className="mt-2.5 text-center max-w-[170px] bg-white px-3 py-1.5 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                      Bài {lesson.unitNumber}
                    </span>
                    <h4 className="text-xs font-black text-slate-800 leading-snug line-clamp-2">
                      {lesson.title}
                    </h4>
                  </div>

                </div>

                {/* Integrated Side-Quest Milestone Node: Clean, no collision on mobile */}
                {sideQuest && (
                  <div className="flex flex-col items-center py-1">
                    <button
                      onClick={() => {
                        playSound('click');
                        setActiveSideQuest(sideQuest);
                        setSideQuestAnswer(null);
                        setIsSideQuestAnswered(false);
                      }}
                      className="group flex items-center gap-3 bg-gradient-to-r from-amber-50 via-amber-100/70 to-amber-50 hover:from-amber-100 hover:to-amber-200/60 border-2 border-amber-300 border-b-4 border-b-amber-500 px-3.5 py-2.5 rounded-2xl shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer max-w-[270px] w-full"
                      title={`Khám phá chuyên sâu: ${sideQuest.title}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-400 border-b-2 border-amber-600 flex items-center justify-center text-xl text-white shadow-2xs shrink-0 group-hover:rotate-6 transition-transform">
                        {sideQuest.icon}
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[8px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/80 px-1.5 py-0.5 rounded leading-none">
                            {sideQuest.badge}
                          </span>
                          <span className="text-[9px] font-black text-amber-600">+{sideQuest.xpReward} XP</span>
                        </div>
                        <div className="text-xs font-black text-slate-800 truncate mt-0.5">
                          {sideQuest.title}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {sideQuest.subtitle}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0" />
                    </button>
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {/* Bonus Milestone Chest at Path End */}
          <div className="flex flex-col items-center pt-2">
            <button
              onClick={handleOpenChest}
              className={`w-18 h-18 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer border-b-[6px] ${
                allCompletedInLevel
                  ? isChestClaimed
                    ? 'bg-slate-100 border-slate-300 text-slate-400'
                    : 'bg-amber-400 border-amber-600 active:border-b-2 active:translate-y-1 text-white shadow-lg animate-pulse'
                  : 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
              }`}
              title={
                allCompletedInLevel
                  ? isChestClaimed
                    ? 'Đã nhận thưởng rương khoáng!'
                    : 'Mở rương khoáng nhận +50 XP & +15 Ngọc!'
                  : 'Hoàn thành đủ 5 bài để mở rương'
              }
            >
              <Gift className="w-8 h-8 text-amber-900" />
            </button>
            <div className="mt-2 text-center bg-white px-3 py-1 rounded-xl border-2 border-slate-200 border-b-4 border-b-slate-300 text-[10px] font-black text-slate-700">
              {allCompletedInLevel 
                ? isChestClaimed ? '✓ Đã nhận rương thưởng' : '🎁 Mở rương thưởng!' 
                : '🔒 Rương khoáng (Cần xong 5 bài)'}
            </div>
          </div>

        </div>
      </div>

      {/* Guidebook Cheatsheet Modal */}
      {isGuidebookOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-3xl p-5 border-2 border-slate-200 border-b-6 border-b-slate-300 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
            
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-[#009FE3]" />
                <h3 className="text-base font-black text-slate-900">
                  Sổ Tay Ghi Nhớ • Cấp Độ {selectedLevel}
                </h3>
              </div>
              <button
                onClick={() => setIsGuidebookOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 space-y-3 pr-1 text-xs">
              <p className="text-slate-500 font-medium">
                Các mẫu câu then chốt được dùng nhiều nhất khi giao tiếp đối tác quốc tế tại Vikoda:
              </p>

              {displayedLessons.map((l) => (
                <div key={l.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                  <div className="flex items-center space-x-2 font-black text-[#0070D1]">
                    <span>{l.icon}</span>
                    <span>Bài {l.unitNumber}: {l.title} ({l.exercises.length} câu)</span>
                  </div>
                  <div className="space-y-2 pl-2 border-l-2 border-sky-300">
                    {l.exercises.map((ex, exIdx) => (
                      <div key={ex.id} className="space-y-1 pb-1.5 border-b border-slate-200/60 last:border-b-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1">
                            <div className="font-bold text-slate-800 text-[11px] leading-snug">
                              <span className="text-sky-600 font-black mr-1">{exIdx + 1}.</span>
                              {ex.englishSentence}
                            </div>
                            <div className="text-[10px] text-slate-500">{ex.promptVi}</div>
                          </div>
                          <button
                            onClick={() => playSpeech(ex.englishSentence, speechRate, 'en-US')}
                            className="p-1 rounded-lg bg-white border border-slate-200 text-sky-600 hover:bg-sky-50 cursor-pointer shrink-0"
                            title="Nghe phát âm chuẩn"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        {ex.vocabularyHighlights && ex.vocabularyHighlights.length > 0 && (
                          <div className="flex flex-wrap gap-1 pt-0.5">
                            {ex.vocabularyHighlights.map((vh, vIdx) => (
                              <span
                                key={vIdx}
                                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px]"
                              >
                                <span className="font-bold text-[#0070D1]">{vh.word}</span>
                                <span className="text-slate-500">({vh.meaning})</span>
                                <button
                                  onClick={() => playSpeech(vh.word, speechRate, 'en-US')}
                                  className="text-slate-400 hover:text-sky-600 cursor-pointer"
                                  title={`Nghe: ${vh.word}`}
                                >
                                  <Volume2 className="w-2.5 h-2.5" />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsGuidebookOpen(false)}
              className="w-full py-2.5 rounded-2xl btn-duo-primary font-black text-xs text-white uppercase tracking-wider cursor-pointer"
            >
              Đã hiểu • Quay lại lộ trình học
            </button>
          </div>
        </div>
      )}

      {/* Side-Quest Interactive Micro-Learning Modal */}
      {activeSideQuest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-md rounded-3xl p-5 border-2 border-slate-200 border-b-6 border-b-slate-300 shadow-2xl space-y-4 max-h-[88vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{activeSideQuest.icon}</span>
                <div>
                  <div className="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md inline-block">
                    {activeSideQuest.badge}
                  </div>
                  <h3 className="text-sm font-black text-slate-900 leading-tight">
                    {activeSideQuest.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveSideQuest(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 space-y-3.5 pr-1 text-xs">
              
              {/* Introduction & Why Crucial */}
              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                <div className="font-black text-amber-900 flex items-center gap-1">
                  <span>💡</span>
                  <span>Bối Cảnh Thực Tế & Vì Sao Quan Trọng:</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {activeSideQuest.content.introduction}
                </p>
                <div className="p-2 rounded-xl bg-white border border-amber-200 text-amber-950 font-bold">
                  ⚡ {activeSideQuest.content.whyCrucial}
                </div>
              </div>

              {/* Memory Hook */}
              <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                <div className="font-black text-[#0070D1] flex items-center gap-1">
                  <span>🧠</span>
                  <span>Mẹo Ghi Nhớ Siêu Tốc (Mnemonics):</span>
                </div>
                <p className="text-slate-800 font-semibold leading-relaxed">
                  {activeSideQuest.content.memoryHook}
                </p>
              </div>

              {/* Key Vocabulary List with Audio */}
              <div className="space-y-1.5">
                <div className="font-black text-slate-800 flex items-center justify-between">
                  <span>📚 Từ Vựng Cốt Lõi:</span>
                  <span className="text-[10px] text-slate-400 font-medium">Nhấp loa để nghe giọng chuẩn</span>
                </div>
                <div className="space-y-1.5">
                  {activeSideQuest.content.keyVocabulary.map((v, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="font-bold text-slate-900">{v.word}</div>
                        <div className="text-[10px] text-cyan-800 font-mono font-bold">{v.phonetic}</div>
                        <div className="text-[11px] text-slate-600 mt-0.5">{v.meaning}</div>
                      </div>
                      <button
                        onClick={() => playSpeech(v.word, speechRate, 'en-US')}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-[#0070D1] hover:bg-sky-50 cursor-pointer shrink-0"
                        title="Nghe phát âm chuẩn"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge Question */}
              <div className="p-3.5 rounded-2xl bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 space-y-2">
                <div className="font-black text-slate-900 flex items-center gap-1">
                  <span>🎯</span>
                  <span>Thử Thách Tình Huống:</span>
                </div>
                <p className="text-slate-700 font-medium">
                  {activeSideQuest.content.challengeQuestion.prompt}
                </p>

                <div className="space-y-1.5 pt-1">
                  {activeSideQuest.content.challengeQuestion.options.map((opt, oIdx) => {
                    const isSelected = sideQuestAnswer === oIdx;
                    let style = 'bg-slate-50 border-slate-200 text-slate-700 hover:border-sky-300';
                    if (isSideQuestAnswered) {
                      if (oIdx === activeSideQuest.content.challengeQuestion.correctIndex) {
                        style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                      } else if (isSelected) {
                        style = 'bg-rose-50 border-rose-500 text-rose-950';
                      } else {
                        style = 'opacity-40';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isSideQuestAnswered}
                        onClick={() => {
                          playSound('click');
                          setSideQuestAnswer(oIdx);
                          setIsSideQuestAnswered(true);
                          if (oIdx === activeSideQuest.content.challengeQuestion.correctIndex) {
                            playSound('correct');
                          } else {
                            playSound('wrong');
                          }
                        }}
                        className={`w-full p-2.5 rounded-xl border-2 text-left text-xs transition-all flex items-center justify-between cursor-pointer ${style}`}
                      >
                        <span>{opt}</span>
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 ml-2">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation after answered */}
                {isSideQuestAnswered && (
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-[11px] space-y-1 animate-in fade-in">
                    <p className="font-bold text-[#0070D1]">
                      💡 {activeSideQuest.content.challengeQuestion.explanation}
                    </p>
                    <p className="text-slate-600 font-medium">
                      ⚡ Lưu ý: {activeSideQuest.content.challengeQuestion.crucialNote}
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Footer */}
            {isSideQuestAnswered ? (
              <button
                onClick={() => {
                  onCompleteUnit(activeSideQuest.id, activeSideQuest.xpReward, activeSideQuest.gemReward);
                  setActiveSideQuest(null);
                }}
                className="w-full py-3 rounded-2xl btn-duo-green text-white font-black text-xs uppercase cursor-pointer"
              >
                Nhận Thưởng +{activeSideQuest.xpReward} XP & +{activeSideQuest.gemReward} 💎
              </button>
            ) : (
              <button
                onClick={() => setActiveSideQuest(null)}
                className="w-full py-2.5 rounded-2xl btn-duo-white text-slate-600 font-black text-xs uppercase cursor-pointer"
              >
                Đóng
              </button>
            )}

          </div>
        </div>
      )}

      {/* Bonus Chest Reward Modal */}
      {showChestReward && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl p-6 border-2 border-slate-200 border-b-6 border-b-slate-300 text-center space-y-4">
            <VikoMascot size="lg" mood="celebrate" className="mx-auto" />
            <h3 className="text-lg font-black text-amber-600">
              🎉 Chúc mừng bạn đã hoàn thành Cửa {selectedLevel}!
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              Bạn nhận được phần thưởng xuất sắc từ Ban Giám Đốc Vikoda:
            </p>
            <div className="flex justify-center items-center gap-4 py-2">
              <div className="bg-amber-50 px-4 py-2 rounded-2xl border-2 border-amber-200 text-amber-800 font-black text-sm">
                +50 XP
              </div>
              <div className="bg-cyan-50 px-4 py-2 rounded-2xl border-2 border-cyan-200 text-cyan-800 font-black text-sm">
                +15 💎 Ngọc
              </div>
            </div>
            <button
              onClick={() => setShowChestReward(false)}
              className="w-full py-3 rounded-2xl btn-duo-green text-white font-black text-xs uppercase cursor-pointer"
            >
              Nhận Thưởng & Tiếp Tục
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Interactive Lesson Arena */}
      {activeLesson && (
        <DuolingoGameArena
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
          onFinishLesson={(xp, gems) => {
            onCompleteUnit(activeLesson.id, xp, gems);
          }}
          speechRate={speechRate}
        />
      )}

    </div>
  );
};

