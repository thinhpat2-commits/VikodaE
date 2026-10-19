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
  ChevronRight,
  Megaphone
} from 'lucide-react';
import { VIKODA_CURRICULUM, UnitLesson, CourseLevel } from '../data/curriculumData';
import { VIKODA_ASSETS, useVikodaAssetSync } from './brand/VikodaLogos';
import { DuolingoGameArena } from './DuolingoGameArena';
import { PlacementTestModal, PlacementTestResult } from './PlacementTestModal';
import { DraggableVikoCompanion } from './DraggableVikoCompanion';
import { playSound } from '../services/soundEffects';
import { playSpeech } from '../services/speechService';
import { 
  STORAGE_KEY_ANNOUNCEMENT, 
  STORAGE_KEY_ADMIN_SETTINGS, 
  CompanyAnnouncement, 
  TrainingSystemSettings 
} from './AdminPortalModal';

interface DuolingoHomeProps {
  selectedLevel: CourseLevel;
  setSelectedLevel: (lvl: CourseLevel) => void;
  completedUnitIds: string[];
  onCompleteUnit: (unitId: string, xp: number, gems: number, stars?: number) => void;
  speechRate: number;
  onGoToVoiceCoach: () => void;
  onGoToPitchDeck?: () => void;
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
  isTestAccount?: boolean;
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
  isTestAccount = false,
}) => {
  useVikodaAssetSync();
  const [activeLesson, setActiveLesson] = useState<UnitLesson | null>(null);
  const [isGuidebookOpen, setIsGuidebookOpen] = useState<boolean>(false);
  const [popoverNodeIndex, setPopoverNodeIndex] = useState<number | null>(null);
  const [isChestClaimed, setIsChestClaimed] = useState<boolean>(false);
  const [showChestReward, setShowChestReward] = useState<boolean>(false);
  const [isPlacementTestOpen, setIsPlacementTestOpen] = useState<boolean>(false);

  // Corporate announcement & training settings from Admin Portal
  const [announcement, setAnnouncement] = useState<CompanyAnnouncement | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_ANNOUNCEMENT);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {}
      }
    }
    return null;
  });
  const [isAnnouncementDismissed, setIsAnnouncementDismissed] = useState<boolean>(false);

  const [trainingSettings, setTrainingSettings] = useState<TrainingSystemSettings | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_ADMIN_SETTINGS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {}
      }
    }
    return null;
  });

  const [showMascot, setShowMascot] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vikoda_show_mascot_companion');
      if (saved !== null) return saved === 'true';
    }
    return true;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const savedAnn = localStorage.getItem(STORAGE_KEY_ANNOUNCEMENT);
        if (savedAnn) {
          try {
            setAnnouncement(JSON.parse(savedAnn));
          } catch (e) {}
        }
        const savedSet = localStorage.getItem(STORAGE_KEY_ADMIN_SETTINGS);
        if (savedSet) {
          try {
            setTrainingSettings(JSON.parse(savedSet));
          } catch (e) {}
        }
        const savedMascot = localStorage.getItem('vikoda_show_mascot_companion');
        if (savedMascot !== null) {
          setShowMascot(savedMascot === 'true');
        }
      }
    };

    const handleMascotVisibility = (e: any) => {
      setShowMascot(e.detail?.visible ?? true);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('vikoda_mascot_visibility_updated' as any, handleMascotVisibility);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('vikoda_mascot_visibility_updated' as any, handleMascotVisibility);
    };
  }, []);

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
      
      {/* 0. COMPANY ANNOUNCEMENT BANNER (CONTROLLED BY ADMIN PORTAL) */}
      {announcement && announcement.isActive && !isAnnouncementDismissed && (
        <div className="p-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl text-white shadow-md border-b-4 border-amber-700 flex items-start justify-between gap-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-start gap-2.5">
            <div className="p-2 bg-white/20 rounded-2xl shrink-0 mt-0.5 shadow-2xs">
              <Megaphone className="w-4 h-4 text-white" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[9px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                  {announcement.category === 'campaign' ? '🔥 Chiến Dịch Đào Tạo' : '📢 Thông Báo Toàn Công Ty'}
                </span>
                <span className="text-[10px] text-amber-100 font-bold">{announcement.author}</span>
              </div>
              <h4 className="text-xs font-black tracking-tight">{announcement.title}</h4>
              <p className="text-[11px] text-amber-100 leading-snug">{announcement.content}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playSound('click');
              setIsAnnouncementDismissed(true);
            }}
            className="p-1 rounded-xl hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer shrink-0"
            title="Đóng thông báo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 1. COMPACT 5-TIER LEVEL SELECTOR PILLS (Mobile only, on Laptop it is in Left Sidebar) */}
      <div className="lg:hidden flex items-center justify-between gap-1 p-1 bg-slate-200/60 rounded-2xl overflow-x-auto">
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

      {/* 🧪 TEST ACCOUNT STATUS BANNER */}
      {isTestAccount && (
        <div className="mb-3 w-full p-3 rounded-2xl bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-950/95 text-white border-2 border-purple-400 shadow-md flex items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-xl shrink-0">🧪</span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11.5px] font-black text-purple-200 uppercase tracking-wider">Tài Khoản Test VIP</span>
                <span className="px-1.5 py-0.2 rounded-full bg-purple-400 text-slate-950 font-black text-[9px] uppercase tracking-wide">Mở Full 100% Bài Học</span>
              </div>
              <p className="text-[11px] text-purple-100 truncate">
                Tất cả bài học trên bản đồ & mọi Cấp độ (A1 - C2) đã được mở khóa tự do để kiểm thử toàn diện!
              </p>
            </div>
          </div>
          <span className="px-2 py-1 rounded-xl bg-purple-500/30 text-purple-200 border border-purple-400/40 text-[10px] font-black shrink-0 hidden sm:inline">
            ✓ Full Access
          </span>
        </div>
      )}

      {/* 2. DUOLINGO SIGNATURE STICKY UNIT BANNER */}
      <div className="sticky top-2 z-30 bg-gradient-to-r from-[#0070D1] to-[#009FE3] rounded-3xl p-4 sm:p-5 text-white shadow-lg border-b-[5px] border-[#005599] flex items-center justify-between gap-4">
        <div className="space-y-1 min-w-0 flex-1">
          <div className="text-[11px] font-black uppercase tracking-widest text-sky-100 flex items-center gap-2 truncate">
            <span className="bg-white/20 px-2 py-0.5 rounded-lg">CỬA {activeLessonInfo?.unitNumber || 1}</span>
            <span>•</span>
            <span>CẤP ĐỘ {selectedLevel}</span>
          </div>
          <h2 className="text-base sm:text-lg font-black truncate leading-snug">
            {activeLessonInfo ? activeLessonInfo.title : 'Chương Trình Vikoda'}
          </h2>
          <div className="text-[11px] text-sky-100 font-medium truncate">
            {activeLessonInfo ? activeLessonInfo.subtitle : 'Tiếng Anh Doanh Nghiệp Chuẩn Quốc Tế'}
          </div>
        </div>

        <button
          onClick={() => {
            playSound('click');
            setIsGuidebookOpen(true);
          }}
          className="px-4 py-2.5 rounded-2xl bg-white text-[#0070D1] font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md border-b-4 border-slate-300 hover:bg-slate-50 active:translate-y-1 active:border-b-2 transition-all shrink-0 cursor-pointer"
          title="Sổ tay hướng dẫn & mẫu câu"
        >
          <BookOpen className="w-4 h-4 stroke-[2.5]" />
          <span>HƯỚNG DẪN</span>
        </button>
      </div>

      {/* 3. THE TRUE CURVING COBBLESTONE SNAKE PATH */}
      <div ref={containerRef} className="relative py-6 px-4 w-full flex flex-col items-center">
        
        {/* Curving SVG Connector Path */}
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
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray="20 12"
            />
            {/* Inner accent line */}
            <path
              d={buildSvgPath()}
              fill="none"
              stroke="#009FE3"
              strokeOpacity="0.4"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Nodes positioned along the S-Curve */}
        <div className="relative z-10 w-full max-w-[360px]" style={{ height: `${svgHeight}px` }}>
          {displayedLessons.map((lesson, idx) => {
            const isCompleted = completedUnitIds.includes(lesson.id);
            const isUnlocked = Boolean(isTestAccount) || Boolean(trainingSettings?.unlockAllUnits) || idx === 0 || completedUnitIds.includes(displayedLessons[idx - 1].id) || isCompleted;
            const isCurrent = idx === currentActiveIndex;
            const isPopoverOpen = popoverNodeIndex === idx;

            const xPct = getNodePositionPct(idx);
            const yPx = idx * nodeRowHeight + 10;
            const isShiftedRight = xPct > 50;

            const isMilestone = (idx + 1) % 10 === 0;

            // Select 3D node asset
            const nodeAsset = isCompleted 
              ? VIKODA_ASSETS.nodeStarGold 
              : isCurrent 
              ? VIKODA_ASSETS.nodeWaterCyan 
              : isMilestone && isUnlocked
              ? VIKODA_ASSETS.nodeCrown
              : isUnlocked 
              ? VIKODA_ASSETS.nodeStoneWater 
              : VIKODA_ASSETS.nodeStoneLock;

            return (
              <div
                key={lesson.id}
                className="absolute -translate-x-1/2"
                style={{
                  left: `${xPct}%`,
                  top: `${yPx}px`,
                }}
              >
                
                {/* Bouncing START / BẮT ĐẦU Badge (When no popover open) */}
                {isCurrent && isUnlocked && !isPopoverOpen && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none">
                    <div className="bg-[#0070D1] text-white px-3 py-1 rounded-2xl font-black text-xs shadow-lg border-b-4 border-[#004b96] whitespace-nowrap uppercase tracking-wider">
                      BẮT ĐẦU!
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-8 border-t-[#004b96]" />
                    </div>
                  </div>
                )}

                {/* 3D Node Stepping Stone Button with Radiant Water Waves */}
                <div className="relative flex flex-col items-center">
                  {/* Glowing Concentric Water Ripple Waves on Current Active Node */}
                  {isCurrent && isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                      {/* Deep Cyan Water Ripple Wave 1 */}
                      <span className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full border-3 border-cyan-400 animate-ping opacity-75" style={{ animationDuration: '2.2s' }} />
                      {/* Outer Sky Blue Water Ripple Wave 2 */}
                      <span className="absolute w-32 sm:w-36 h-32 sm:h-36 rounded-full border-2 border-sky-300 animate-ping opacity-45" style={{ animationDuration: '3.0s', animationDelay: '0.9s' }} />
                      {/* Glowing Mineral Energy Aura */}
                      <span className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-cyan-400/35 blur-xl animate-pulse" />
                    </div>
                  )}

                  <button
                    disabled={!isUnlocked}
                    onClick={() => handleNodeClick(idx, lesson, isUnlocked)}
                    className={`node-popover-trigger relative transition-all cursor-pointer select-none filter active:scale-95 ${
                      !isUnlocked ? 'cursor-not-allowed opacity-75' : 'hover:scale-105'
                    }`}
                    title={
                      isCompleted
                        ? `Đã hoàn thành! Bấm để xem lại (+5 XP)`
                        : isUnlocked
                        ? `Bấm để bắt đầu: ${lesson.title}`
                        : `Cần hoàn thành bài trước để mở khóa`
                    }
                  >
                    <img 
                      src={nodeAsset} 
                      alt={`Bài ${lesson.unitNumber}`}
                      className={`w-22 sm:w-24 h-18 sm:h-20 object-contain transition-transform duration-200 hover:scale-105 active:scale-95 ${
                        isCurrent ? 'drop-shadow-[0_10px_20px_rgba(0,159,227,0.5)] animate-duo-float' : 'drop-shadow-md'
                      }`}
                    />
                  </button>

                  {/* Completed Check Badge */}
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-md pointer-events-none">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}

                  {/* Dynamic Star Rating for completed */}
                  {isCompleted && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 border-2 border-white text-[9px] font-black shadow-xs whitespace-nowrap pointer-events-none">
                      <Star className="w-2.5 h-2.5 fill-amber-950 text-amber-950" />
                      <span>{unitStars[lesson.id] ?? 3}/3</span>
                    </div>
                  )}
                </div>

                {/* DUOLINGO TAP-TO-INSPECT POPOVER CARD - AUTO-CLAMPED TO PREVENT OVERFLOW */}
                {isPopoverOpen && isUnlocked && (
                  <div 
                    className={`node-popover-box absolute -top-28 z-50 animate-in fade-in zoom-in-95 duration-150 w-64 max-w-[calc(100vw-36px)] ${
                      xPct < 35 
                        ? '-left-3 translate-x-0' 
                        : xPct > 65 
                        ? '-right-3 translate-x-0' 
                        : 'left-1/2 -translate-x-1/2'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-3.5 shadow-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 relative text-left">
                      {/* Triangle Pointer down */}
                      <div 
                        className={`absolute -bottom-2 w-0 h-0 border-x-6 border-x-transparent border-t-8 border-t-white ${
                          xPct < 35 
                            ? 'left-10' 
                            : xPct > 65 
                            ? 'right-10' 
                            : 'left-1/2 -translate-x-1/2'
                        }`} 
                      />
                      
                      <div className="flex items-center justify-between mb-1 gap-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 truncate">
                          Bài {lesson.unitNumber}/100 • {lesson.exercises?.length || 7} câu
                        </span>
                        <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200 shrink-0">
                          +{lesson.xpReward} XP • +{lesson.gemReward} 💎
                        </span>
                      </div>

                      <h4 className="text-xs font-black text-slate-900 leading-snug mb-1 line-clamp-2 break-words">
                        {lesson.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mb-2.5 line-clamp-1 break-words">
                        {lesson.subtitle}
                      </p>

                      <button
                        onClick={() => handleStartLesson(lesson)}
                        className={`w-full py-3 px-4 rounded-2xl font-black text-xs text-white uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md border-b-4 active:translate-y-1 active:border-b-2 cursor-pointer ${
                          isCompleted
                            ? 'bg-[#22c55e] hover:bg-[#16a34a] border-[#15803d]'
                            : 'bg-[#009FE3] hover:bg-[#0077b6] border-[#005a9c]'
                        }`}
                      >
                        <Play className="w-4 h-4 fill-white" />
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
              className="relative transition-all cursor-pointer active:scale-95 hover:scale-105"
              title={
                allCompletedInLevel
                  ? isChestClaimed
                    ? 'Đã nhận thưởng rương khoáng chất!'
                    : 'Bấm để nhận rương khoáng chất!'
                  : 'Hoàn thành tất cả các bài để mở rương'
              }
            >
              <img 
                src={isChestClaimed ? VIKODA_ASSETS.chestOpen : VIKODA_ASSETS.chestClosed}
                alt="Rương Thưởng"
                className={`w-20 h-20 object-contain ${
                  allCompletedInLevel && !isChestClaimed 
                    ? 'animate-bounce drop-shadow-[0_10px_20px_rgba(245,158,11,0.5)]' 
                    : 'drop-shadow-lg'
                }`}
              />
            </button>
            <div className="mt-1 text-center">
              <span className="text-[11px] font-black text-slate-700 block uppercase tracking-wider">
                {isChestClaimed ? 'Đã Nhận' : 'Rương Khoáng'}
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

      {/* Draggable Living 3D Viko Mascot Companion (100% English & Touch-Interactive) */}
      {!activeLesson && showMascot && (
        <DraggableVikoCompanion
          currentUnitTitle={activeLessonInfo?.title || 'Vikoda English Lesson'}
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
