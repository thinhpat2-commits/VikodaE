import React, { useState, useRef, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Lock, 
  BookOpen, 
  Volume2, 
  X, 
  Sparkles, 
  ArrowRight, 
  Crown, 
  Gift, 
  Flame, 
  Play, 
  Target, 
  Award, 
  ChevronRight 
} from 'lucide-react';
import { VIKODA_CURRICULUM, UnitLesson, CourseLevel } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { DuolingoGameArena } from './DuolingoGameArena';
import { PlacementTestModal, PlacementTestResult } from './PlacementTestModal';
import { VikoNavigatorGuide } from './VikoNavigatorGuide';
import { playSound } from '../services/soundEffects';
import { playSpeech } from '../services/speechService';

interface DuolingoHomeProps {
  selectedLevel: CourseLevel;
  setSelectedLevel: (lvl: CourseLevel) => void;
  completedUnitIds: string[];
  onCompleteUnit: (unitId: string, xp: number, gems: number, stars?: number) => void;
  speechRate: number;
  onGoToVoiceCoach: () => void;
  onGoToPitchDeck: () => void;
  onGoToBattle?: () => void;
  onOpenEndlessDrill: () => void;
  onOpenLeaderboard: () => void;
  highestDrillScore: number;
  onRecordMistake?: (mistake: any) => void;
  onOpenPvPArena?: () => void;
  onOpenDailyReview?: () => void;
  onOpenCoach?: () => void;
  streakDays?: number;
  unitStars?: Record<string, number>;
  onOpenPlacementTest?: () => void;
  placementTestResult?: any;
  onOpenProfile?: () => void;
}

export const DuolingoHome: React.FC<DuolingoHomeProps> = ({
  selectedLevel,
  setSelectedLevel,
  completedUnitIds,
  onCompleteUnit,
  speechRate,
  onGoToVoiceCoach,
  onGoToPitchDeck,
  onGoToBattle = () => {},
  onOpenEndlessDrill,
  onOpenLeaderboard,
  highestDrillScore,
  onRecordMistake,
  onOpenPvPArena,
  onOpenDailyReview,
  onOpenCoach,
  streakDays = 1,
  unitStars = {},
  onOpenPlacementTest,
  placementTestResult,
  onOpenProfile,
}) => {
  const [activeLesson, setActiveLesson] = useState<UnitLesson | null>(null);
  const [isGuidebookOpen, setIsGuidebookOpen] = useState<boolean>(false);
  const [popoverNodeIndex, setPopoverNodeIndex] = useState<number | null>(null);
  const [isChestClaimed, setIsChestClaimed] = useState<boolean>(false);
  const [showChestReward, setShowChestReward] = useState<boolean>(false);
  const [isPlacementTestOpen, setIsPlacementTestOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter lessons based on selected level
  const displayedLessons = VIKODA_CURRICULUM.filter((u) => u.level === selectedLevel);
  const allCompletedInLevel = displayedLessons.every((l) => completedUnitIds.includes(l.id));

  // Determine current active index
  let currentActiveIndex = 0;
  for (let i = 0; i < displayedLessons.length; i++) {
    if (!completedUnitIds.includes(displayedLessons[i].id)) {
      currentActiveIndex = i;
      break;
    }
    if (i === displayedLessons.length - 1) {
      currentActiveIndex = displayedLessons.length;
    }
  }

  const activeLessonInfo = displayedLessons[currentActiveIndex] || displayedLessons[displayedLessons.length - 1];

  // Close popover when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.node-popover-trigger') && !target.closest('.node-popover-box')) {
        setPopoverNodeIndex(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleNodeClick = (index: number, lesson: UnitLesson, isUnlocked: boolean) => {
    playSound('click');
    if (!isUnlocked) return;
    if (popoverNodeIndex === index) {
      // If already open, start lesson immediately
      setActiveLesson(lesson);
      setPopoverNodeIndex(null);
    } else {
      setPopoverNodeIndex(index);
    }
  };

  const handleStartLesson = (lesson: UnitLesson) => {
    playSound('click');
    setPopoverNodeIndex(null);
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
    onCompleteUnit('bonus_chest_' + selectedLevel, 50, 20);
  };

  const handleSavePlacementResult = (result: PlacementTestResult) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('vikoda_placement_test_completed_v3', 'true');
    }
    setSelectedLevel(result.recommendedLevel);
    onCompleteUnit('placement_test_completed', 50, 15);
  };

  // Serpentine X coordinates percentage (sin wave)
  // Distance from center: ~26% of container width
  const getNodePositionPct = (idx: number) => {
    // 0: 50% (Center)
    // 1: 76% (Right)
    // 2: 66% (Soft Right)
    // 3: 50% (Center)
    // 4: 24% (Left)
    // 5: 34% (Soft Left)
    const sinOffsets = [0, 26, 16, 0, -26, -16];
    return 50 + sinOffsets[idx % sinOffsets.length];
  };

  // Node height in pixels for the SVG track calculation
  const nodeRowHeight = 110;
  const totalNodesCount = displayedLessons.length + 1; // Lessons + final chest
  const svgHeight = totalNodesCount * nodeRowHeight;

  // Build SVG path d string
  const buildSvgPath = () => {
    let d = '';
    for (let i = 0; i < totalNodesCount; i++) {
      const x = (getNodePositionPct(i) / 100) * 360; // normalized to 360px SVG viewbox
      const y = i * nodeRowHeight + 50;
      if (i === 0) {
        d += `M ${x} ${y}`;
      } else {
        const prevX = (getNodePositionPct(i - 1) / 100) * 360;
        const prevY = (i - 1) * nodeRowHeight + 50;
        const midY = (prevY + y) / 2;
        // Cubic bezier S-curve
        d += ` C ${prevX} ${midY}, ${x} ${midY}, ${x} ${y}`;
      }
    }
    return d;
  };

  return (
    <div className="space-y-4 pb-24 max-w-md mx-auto w-full select-none animate-in fade-in duration-200">
      
      {/* 1. COMPACT 5-TIER LEVEL SELECTOR PILLS */}
      <div className="flex items-center justify-between gap-1 p-1 bg-slate-200/60 rounded-2xl overflow-x-auto">
        {(['A1', 'A2', 'B1', 'B2', 'C1-C2'] as CourseLevel[]).map((lvl) => {
          const isLvlActive = selectedLevel === lvl;
          const displayLabel = 
            lvl === 'A1' ? 'A1 Cơ Bản' :
            lvl === 'A2' ? 'A2 Phòng Ban' :
            lvl === 'B1' ? 'B1 Mỏ Đảnh Thạnh' :
            lvl === 'B2' ? 'B2 Bán Hàng' : 'C1-C2 Lãnh Đạo';
          return (
            <button
              key={lvl}
              onClick={() => {
                playSound('click');
                setSelectedLevel(lvl);
                setPopoverNodeIndex(null);
              }}
              className={`flex-1 py-1.5 px-1.5 rounded-xl text-[11px] sm:text-xs font-black transition-all cursor-pointer whitespace-nowrap text-center ${
                isLvlActive
                  ? 'bg-white text-[#0070D1] shadow-2xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title={displayLabel}
            >
              {lvl}
            </button>
          );
        })}
      </div>

      {/* 2. DUOLINGO SIGNATURE STICKY UNIT BANNER */}
      <div className="sticky top-2 z-30 bg-gradient-to-r from-[#0070D1] to-[#009FE3] rounded-3xl p-4 text-white shadow-md border-b-4 border-[#005bb5] flex items-center justify-between gap-3">
        <div className="space-y-0.5 truncate">
          <div className="text-[10px] font-black uppercase tracking-widest text-sky-100 flex items-center gap-1.5">
            <span>CẤP ĐỘ {selectedLevel}</span>
            <span>•</span>
            <span>{
              selectedLevel === 'A1' ? 'PHẦN 1: GIAO TIẾP VĂN PHÒNG CƠ BẢN' :
              selectedLevel === 'A2' ? 'PHẦN 2: TIẾNG ANH ĐA PHÒNG BAN' :
              selectedLevel === 'B1' ? 'PHẦN 3: ĐẠI SỨ VIKODA & MỎ ĐẢNH THẠNH' :
              selectedLevel === 'B2' ? 'PHẦN 4: BÁN HÀNG B2B & HORECA' :
              'PHẦN 5: XUẤT KHẨU TOÀN CẦU & C-SUITE'
            }</span>
          </div>
          <h2 className="text-sm font-black truncate leading-snug">
            {activeLessonInfo ? activeLessonInfo.title : 'Chương Trình Vikoda'}
          </h2>
        </div>

        <button
          onClick={() => {
            playSound('click');
            setIsGuidebookOpen(true);
          }}
          className="px-3 py-1.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs flex items-center gap-1.5 backdrop-blur-md border border-white/30 transition-all shrink-0 active:scale-95 cursor-pointer shadow-2xs"
          title="Sổ tay ghi nhớ từ vựng và mẫu câu ngoại giao"
        >
          <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>SỔ TAY</span>
        </button>
      </div>

      {/* 3. THE TRUE CURVING COBBLESTONE SNAKE PATH (NO GREY POLE, SMOOTH S-CURVE) */}
      <div ref={containerRef} className="relative py-6 px-4 w-full flex flex-col items-center">
        
        {/* Curving SVG Connector Path (Soft, organic cobblestone feel) */}
        <div className="absolute inset-0 w-full pointer-events-none flex justify-center">
          <svg
            viewBox={`0 0 360 ${svgHeight}`}
            className="w-full max-w-[360px] h-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Background shadow path */}
            <path
              d={buildSvgPath()}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="16 10"
            />
            {/* Inner accent line */}
            <path
              d={buildSvgPath()}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Nodes positioned along the S-Curve */}
        <div className="relative z-10 w-full max-w-[360px]" style={{ height: `${svgHeight}px` }}>
          {displayedLessons.map((lesson, idx) => {
            const isCompleted = completedUnitIds.includes(lesson.id);
            const isUnlocked = idx === 0 || completedUnitIds.includes(displayedLessons[idx - 1].id) || isCompleted;
            const isCurrent = idx === currentActiveIndex;
            const isPopoverOpen = popoverNodeIndex === idx;

            const xPct = getNodePositionPct(idx);
            const yPx = idx * nodeRowHeight + 10;
            const isShiftedRight = xPct > 50;

            // Determine Node Icon
            let nodeIcon = lesson.icon;
            if (idx === 2) nodeIcon = '📖'; // Story/dialogue node
            if (idx === displayedLessons.length - 1) nodeIcon = '👑'; // Final milestone

            return (
              <div
                key={lesson.id}
                className="absolute -translate-x-1/2"
                style={{
                  left: `${xPct}%`,
                  top: `${yPx}px`,
                }}
              >
                
                {/* Viko Mascot Standing Proudly Beside Current Node Waving */}
                {isCurrent && isUnlocked && (
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 pointer-events-none flex items-center z-10 ${
                      isShiftedRight ? '-left-15 sm:-left-20' : '-right-15 sm:-right-20'
                    }`}
                  >
                    <div className="animate-pulse">
                      <VikoMascot size="sm" mood="waving" />
                    </div>
                  </div>
                )}

                {/* Bouncing START / BẮT ĐẦU Badge (When no popover open) */}
                {isCurrent && isUnlocked && !isPopoverOpen && (
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none">
                    <div className="bg-[#0070D1] text-white px-2.5 py-0.5 rounded-xl font-black text-[11px] shadow-md border-b-2 border-[#005bb5] whitespace-nowrap">
                      BẮT ĐẦU!
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-6 border-t-[#005bb5]" />
                    </div>
                  </div>
                )}

                {/* 3D Round Node Stepping Stone */}
                <div className="relative flex flex-col items-center">
                  <button
                    disabled={!isUnlocked}
                    onClick={() => handleNodeClick(idx, lesson, isUnlocked)}
                    className={`node-popover-trigger w-19 h-19 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer select-none relative ${
                      isCompleted
                        ? 'bg-[#22c55e] border-b-[6px] border-[#15803d] active:border-b-2 active:translate-y-1 text-white shadow-md hover:brightness-105'
                        : isCurrent
                        ? 'bg-[#0070D1] border-b-[6px] border-[#005bb5] active:border-b-2 active:translate-y-1 text-white shadow-xl ring-4 ring-sky-300/80 scale-105 hover:brightness-105'
                        : isUnlocked
                        ? 'bg-[#009FE3] border-b-[6px] border-[#0070D1] active:border-b-2 active:translate-y-1 text-white shadow-md hover:brightness-105'
                        : 'bg-slate-200 border-b-[6px] border-slate-300 text-slate-400 cursor-not-allowed'
                    }`}
                    title={
                      isCompleted
                        ? `Đã hoàn thành! Bấm để xem lại (+5 XP)`
                        : isUnlocked
                        ? `Bấm để bắt đầu: ${lesson.title}`
                        : `Cần hoàn thành bài trước để mở khóa`
                    }
                  >
                    {isUnlocked ? (
                      <span className="text-3xl drop-shadow-xs">{nodeIcon}</span>
                    ) : (
                      <Lock className="w-7 h-7 text-slate-400" />
                    )}
                  </button>

                  {/* Completed Check Badge */}
                  {isCompleted && (
                    <div className="absolute -top-0.5 -right-0.5 w-6 h-6 rounded-full bg-white border-2 border-[#22c55e] flex items-center justify-center text-[#22c55e] shadow-xs pointer-events-none">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}

                  {/* Dynamic Star Rating for completed (Accurately reflects mistakes) */}
                  {isCompleted && (
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-0.5 px-2 py-0.5 rounded-full border-2 border-white text-[9px] font-black shadow-xs whitespace-nowrap pointer-events-none ${
                      (unitStars[lesson.id] ?? 3) === 3
                        ? 'bg-amber-400 text-amber-950 ring-1 ring-amber-500/40'
                        : (unitStars[lesson.id] ?? 3) === 2
                        ? 'bg-amber-200 text-amber-900 border-amber-300'
                        : 'bg-slate-200 text-slate-700 border-slate-300'
                    }`}>
                      <Star className={`w-2.5 h-2.5 ${
                        (unitStars[lesson.id] ?? 3) === 3 ? 'fill-amber-950 text-amber-950' : 'fill-amber-600 text-amber-600'
                      }`} />
                      <span>{unitStars[lesson.id] ?? 3}/3</span>
                    </div>
                  )}
                </div>

                {/* DUOLINGO TAP-TO-INSPECT POPOVER CARD */}
                {isPopoverOpen && isUnlocked && (
                  <div className="node-popover-box absolute -top-28 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 duration-150 w-64">
                    <div className="bg-white rounded-2xl p-3.5 shadow-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 relative text-left">
                      {/* Triangle Pointer down */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-8 border-t-white" />
                      
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          Bài {lesson.unitNumber}
                        </span>
                        <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200">
                          +{lesson.xpReward} XP • +{lesson.gemReward} 💎
                        </span>
                      </div>

                      <h4 className="text-xs font-black text-slate-900 leading-snug mb-2.5 line-clamp-2">
                        {lesson.title}
                      </h4>

                      <button
                        onClick={() => handleStartLesson(lesson)}
                        className={`w-full py-2 px-3 rounded-xl font-black text-xs text-white uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-98 cursor-pointer ${
                          isCompleted
                            ? 'bg-[#22c55e] hover:bg-[#16a34a] border-b-2 border-[#15803d]'
                            : 'bg-[#0070D1] hover:bg-[#005bb5] border-b-2 border-[#004b96]'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{isCompleted ? 'ÔN TẬP LẠI (+5 XP)' : 'BẮT ĐẦU HỌC'}</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}

          {/* FINAL MILESTONE CHEST AT PATH END */}
          <div
            className="absolute -translate-x-1/2 flex flex-col items-center"
            style={{
              left: `${getNodePositionPct(displayedLessons.length)}%`,
              top: `${displayedLessons.length * nodeRowHeight + 10}px`,
            }}
          >
            <button
              onClick={handleOpenChest}
              className={`w-19 h-19 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer border-b-[6px] ${
                allCompletedInLevel
                  ? isChestClaimed
                    ? 'bg-slate-100 border-slate-300 text-slate-400'
                    : 'bg-gradient-to-br from-amber-400 to-yellow-500 border-amber-600 active:border-b-2 active:translate-y-1 text-white shadow-xl animate-pulse ring-4 ring-amber-300'
                  : 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
              }`}
              title={
                allCompletedInLevel
                  ? isChestClaimed
                    ? 'Đã nhận thưởng rương khoáng chất!'
                    : 'Bấm để nhận rương khoáng chất!'
                  : 'Hoàn thành tất cả các bài để mở rương'
              }
            >
              <span className="text-3xl">🎁</span>
            </button>
            <div className="mt-1 text-center">
              <span className="text-[10px] font-black text-slate-700 block">
                {isChestClaimed ? 'Đã nhận' : 'Rương Khoáng'}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Guidebook Cheatsheet Modal */}
      {isGuidebookOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-lg rounded-3xl p-5 border-2 border-slate-200 border-b-6 border-b-slate-300 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
            
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-[#0070D1]" />
                <h3 className="text-sm font-black text-slate-900">
                  Sổ Tay Bài Học • Cấp Độ {selectedLevel}
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
                Các mẫu câu ngoại giao chuẩn Oxford/Cambridge được dùng nhiều nhất tại Vikoda:
              </p>

              {displayedLessons.map((l) => (
                <div key={l.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-2 font-black text-[#0070D1]">
                    <span>{l.icon}</span>
                    <span>Bài {l.unitNumber}: {l.title}</span>
                  </div>
                  <div className="space-y-1.5 pl-2 border-l-2 border-sky-300">
                    {l.exercises.map((ex, exIdx) => (
                      <div key={ex.id} className="space-y-0.5 pb-1 border-b border-slate-200/50 last:border-b-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1 min-w-0">
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsGuidebookOpen(false)}
              className="w-full py-2.5 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] font-black text-xs text-white uppercase tracking-wider cursor-pointer shadow-md"
            >
              Đã hiểu • Quay lại lộ trình
            </button>
          </div>
        </div>
      )}

      {/* Interactive Viko Navigator Guide (Smart directional helper) */}
      {!activeLesson && (
        <VikoNavigatorGuide
          currentUnitTitle={activeLessonInfo?.title || 'Bài học Vikoda'}
          currentUnitNumber={activeLessonInfo?.unitNumber || 1}
          streakDays={streakDays}
          selectedLevel={selectedLevel}
          onStartLesson={() => {
            if (activeLessonInfo) {
              handleStartLesson(activeLessonInfo);
            }
          }}
          onGoToPvP={() => {
            if (onOpenPvPArena) onOpenPvPArena();
          }}
          onGoToVoice={onGoToVoiceCoach}
          onGoToReview={() => {
            if (onOpenDailyReview) onOpenDailyReview();
          }}
        />
      )}

      {/* Fullscreen Interactive Lesson Arena */}
      {activeLesson && (
        <DuolingoGameArena
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
          onFinishLesson={(xp, gems, stars) => {
            onCompleteUnit(activeLesson.id, xp, gems, stars);
          }}
          speechRate={speechRate}
          onRecordMistake={onRecordMistake}
        />
      )}

      {/* Placement Test Modal */}
      {isPlacementTestOpen && (
        <PlacementTestModal
          isOpen={isPlacementTestOpen}
          onClose={() => setIsPlacementTestOpen(false)}
          onSaveResult={handleSavePlacementResult}
          speechRate={speechRate}
        />
      )}

    </div>
  );
};
