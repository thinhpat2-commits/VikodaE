import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  X, 
  Volume2, 
  Compass, 
  Swords, 
  Mic, 
  RotateCcw, 
  Droplet,
  Sparkles
} from 'lucide-react';
import { VikoDynamicAnimator, MascotAnimMode } from './VikoDynamicAnimator';
import { playSound } from '../services/soundEffects';
import { playVikoMascotSpeech, stopSpeech } from '../services/speechService';
import { CourseLevel } from '../data/curriculumData';

interface DraggableVikoCompanionProps {
  currentUnitTitle: string;
  currentUnitNumber: number;
  streakDays: number;
  selectedLevel: CourseLevel;
  onStartLesson: () => void;
  onGoToPvP: () => void;
  onGoToVoice: () => void;
  onGoToReview: () => void;
}

interface EnglishAdvice {
  id: string;
  category: string;
  icon: React.ReactNode;
  headline: string;
  adviceEn: string;
  speechText: string;
  actionText: string;
  action: () => void;
  animMode: MascotAnimMode;
}

const STORAGE_KEY_VIKO_POS = 'vikoda_viko_companion_pos_v2';

export const DraggableVikoCompanion: React.FC<DraggableVikoCompanionProps> = ({
  currentUnitTitle,
  currentUnitNumber,
  streakDays,
  selectedLevel,
  onStartLesson,
  onGoToPvP,
  onGoToVoice,
  onGoToReview,
}) => {
  // Dragging state
  const [pos, setPos] = useState<{ x: number; y: number }>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_VIKO_POS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {}
      }
      return { x: window.innerWidth - 160, y: window.innerHeight - 200 };
    }
    return { x: 950, y: 550 };
  });

  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
  });
  const hasMovedRef = useRef(false);

  // Rapid tap & spam detection
  const lastTapTimeRef = useRef<number>(0);
  const rapidTapCountRef = useRef<number>(0);
  const isCooldownRef = useRef<boolean>(false);
  const [spamNotice, setSpamNotice] = useState<string | null>(null);

  // Dynamic animation mode & speech state
  const [animMode, setAnimMode] = useState<MascotAnimMode>('idle');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [currentAdviceIndex, setCurrentAdviceIndex] = useState(0);

  // 18s INACTIVITY IDLE AFK DETECTION (Nhóm 2: Ngủ gật, uống nước Vikoda, hoặc phiêu nhạc)
  useEffect(() => {
    let afkTimer: number | null = null;

    const resetAfkTimer = () => {
      if (afkTimer) window.clearTimeout(afkTimer);
      afkTimer = window.setTimeout(() => {
        if (!dialogueOpen && !isSpeaking && !isDragging) {
          const afkModes: MascotAnimMode[] = ['afk_sleep', 'afk_drink_vikoda', 'afk_music_vibe'];
          const picked = afkModes[Math.floor(Math.random() * afkModes.length)];
          setAnimMode(picked);
        }
      }, 18000); // 18s idle
    };

    window.addEventListener('pointermove', resetAfkTimer, { passive: true });
    window.addEventListener('keydown', resetAfkTimer, { passive: true });
    window.addEventListener('scroll', resetAfkTimer, { passive: true });
    window.addEventListener('click', resetAfkTimer, { passive: true });
    resetAfkTimer();

    return () => {
      if (afkTimer) window.clearTimeout(afkTimer);
      window.removeEventListener('pointermove', resetAfkTimer);
      window.removeEventListener('keydown', resetAfkTimer);
      window.removeEventListener('scroll', resetAfkTimer);
      window.removeEventListener('click', resetAfkTimer);
    };
  }, [dialogueOpen, isSpeaking, isDragging]);

  // 100% RELEVANT LEARNING ORIENTATION (Bản định hướng học tập & chuyên môn Vikoda)
  const adviceList: EnglishAdvice[] = [
    {
      id: 'next_lesson',
      category: 'ĐỊNH HƯỚNG BÀI HỌC 🎯',
      icon: <Compass className="w-3.5 h-3.5 text-cyan-600" />,
      headline: `Unit ${currentUnitNumber}: ${currentUnitTitle}`,
      adviceEn: `Complete Unit ${currentUnitNumber}: ${currentUnitTitle} to earn 20 XP and advance your roadmap.`,
      speechText: `Let's complete Unit ${currentUnitNumber}: ${currentUnitTitle}. Finish this lesson to earn twenty XP and advance your learning roadmap.`,
      actionText: 'Start Lesson',
      action: onStartLesson,
      animMode: 'student_book',
    },
    {
      id: 'workplace_english',
      category: 'TỪ VỰNG VIKODA 💼',
      icon: <Droplet className="w-3.5 h-3.5 text-blue-600" />,
      headline: 'Natural Alkaline Water pH 9.0',
      adviceEn: `Key business phrase: "Our natural alkaline mineral water is bottled directly at the pristine source with pH 9.0."`,
      speechText: `Key business phrase to master: Our natural alkaline mineral water is bottled directly at the pristine source with p H nine point zero.`,
      actionText: 'Practice Phrase',
      action: onStartLesson,
      animMode: 'business',
    },
    {
      id: 'streak_habit',
      category: 'MỤC TIÊU HÀNG NGÀY 🔥',
      icon: <Sparkles className="w-3.5 h-3.5 text-orange-500" />,
      headline: `Protect Your ${streakDays}-Day Streak`,
      adviceEn: `Spend just 5 minutes today to protect your ${streakDays}-day streak and stay ahead on the leaderboard.`,
      speechText: `Spend just five minutes today to protect your ${streakDays}-day streak and stay ahead on the leaderboard.`,
      actionText: 'Keep Streak',
      action: onStartLesson,
      animMode: 'cool_shades',
    },
    {
      id: 'speaking_lab',
      category: 'PHÒNG LUYỆN NÓI AI 🎙️',
      icon: <Mic className="w-3.5 h-3.5 text-purple-600" />,
      headline: 'Business Intonation & Cadence',
      adviceEn: `Practice speaking in the Voice Lab to master clear American intonation for international client meetings.`,
      speechText: `Practice speaking in the Voice Lab to master clear American intonation for international client meetings.`,
      actionText: 'Open Voice Lab',
      action: onGoToVoice,
      animMode: 'microphone',
    },
    {
      id: 'trade_reflex',
      category: 'ĐẤU TRƯỜNG PHẢN XẠ ⚔️',
      icon: <Swords className="w-3.5 h-3.5 text-rose-500" />,
      headline: 'Incoterms & FOB/CIF Reflex',
      adviceEn: `Sharpen trade terms in the 1v1 Arena to build rapid English reflexes for logistics negotiation.`,
      speechText: `Sharpen trade terms in the 1v1 Arena to build rapid English reflexes for international logistics negotiation.`,
      actionText: 'Enter Arena',
      action: onGoToPvP,
      animMode: 'fire_battle',
    },
    {
      id: 'caring_wellness',
      category: 'CHĂM SÓC SỨC KHỎE 💧',
      icon: <Droplet className="w-3.5 h-3.5 text-sky-500" />,
      headline: 'Stay Hydrated & Energized',
      adviceEn: `How are you feeling today? Remember to sip natural alkaline mineral water to stay fresh and focused while studying!`,
      speechText: `How are you feeling today? Remember to sip some natural alkaline mineral water to keep your body refreshed and energized while studying.`,
      actionText: 'Drink Water 💧',
      action: onStartLesson,
      animMode: 'bottle_hug',
    },
    {
      id: 'viko_cheer',
      category: 'ĐỘNG VIÊN TỪ VIKO 🌟',
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" />,
      headline: 'You Are Making Great Progress!',
      adviceEn: `Every lesson you finish brings Vikoda closer to global partners. You are doing fantastic, keep going!`,
      speechText: `Every lesson you finish brings Vikoda closer to global partners. You are doing fantastic, keep going!`,
      actionText: 'Keep Going! 🚀',
      action: onStartLesson,
      animMode: 'dancing',
    },
  ];

  const currentAdvice = adviceList[currentAdviceIndex % adviceList.length];

  // Mascot operates in 100% continuous automatic animation mode when standing freely outside on the map

  // Window resize bounds check
  useEffect(() => {
    const handleResize = () => {
      setPos(prev => ({
        x: Math.min(Math.max(20, prev.x), window.innerWidth - 150),
        y: Math.min(Math.max(50, prev.y), window.innerHeight - 170),
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save pos
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_VIKO_POS, JSON.stringify(pos));
    }
  }, [pos]);

  // Pointer drag listeners
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: pos.x,
      initialY: pos.y,
    };
    hasMovedRef.current = false;
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
      hasMovedRef.current = true;
    }
    const newX = Math.min(Math.max(10, dragStartRef.current.initialX + dx), window.innerWidth - 140);
    const newY = Math.min(Math.max(40, dragStartRef.current.initialY + dy), window.innerHeight - 160);
    setPos({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (err) {}

    // Tap detected (not dragging)
    if (!hasMovedRef.current) {
      handleMascotTap();
    } else {
      // Elastic Boing Spring Rebound khi thả tay (Nhóm 4 Kéo giãn)
      playSound('boing');
      setAnimMode('drag_stretch');
      setTimeout(() => {
        setAnimMode('idle');
      }, 550);
    }
  };

  /**
   * PLAY MASCOT'S CLEAR AMERICAN VOICE (AT MEASURED, SLOW SPEED)
   */
  const speakAdvice = (text: string, onFinish?: () => void) => {
    setIsSpeaking(true);
    playVikoMascotSpeech(text, () => {
      setIsSpeaking(false);
      if (onFinish) onFinish();
    });
  };

  /**
   * ON TAP: SMART ANTI-SPAM DEBOUNCING & CURRICULUM READING
   */
  const handleMascotTap = () => {
    const now = Date.now();
    const timeDelta = now - lastTapTimeRef.current;
    lastTapTimeRef.current = now;

    // Track rapid spamming (< 400ms between taps)
    if (timeDelta < 400) {
      rapidTapCountRef.current++;
    } else {
      rapidTapCountRef.current = 1;
    }

    // SLEEPY WAKE UP: When tapped while sleeping, spring awake cheerfully & pop bubble (Nhóm 2)
    if (animMode === 'sleepy' || animMode === 'afk_sleep') {
      playSound('pop');
      setAnimMode('surprised');
      setDialogueOpen(true);
      speakAdvice("Oáp! Viko giật mình tỉnh dậy rồi! Cùng tiếp tục luyện tiếng Anh nào!");
      setTimeout(() => {
        setAnimMode('waving');
      }, 800);
      return;
    }

    // SPAM DETECTED: Rapid tap 3+ times (< 400ms) -> Nhóm 4 Bị chọc ghẹo nhột!
    if (rapidTapCountRef.current >= 3) {
      stopSpeech();
      setIsSpeaking(false);
      setAnimMode('tickled');
      playSound('tickle');

      const playfulWarnings = [
        "Hihi nhột quá! Đừng cù lét Viko nữa mà, để Viko nói nốt nào! 😆",
        "Haha nhột thật đấy! Chạm 1 cái thôi để nghe Viko hướng dẫn nha!",
        "Ái chà chà! Cù léc giọt nước hoài là Viko biến thành bong bóng đó nha! 💦",
      ];
      const warningText = playfulWarnings[Math.floor(Math.random() * playfulWarnings.length)];
      setSpamNotice(warningText);
      setDialogueOpen(true);

      isCooldownRef.current = true;
      speakAdvice(warningText, () => {
        isCooldownRef.current = false;
        setSpamNotice(null);
        setAnimMode('idle');
      });

      setTimeout(() => {
        isCooldownRef.current = false;
      }, 1500);

      return;
    }

    // NORMAL TAP: Stop previous speech cleanly, clear spam, and transition smoothly
    stopSpeech();
    isCooldownRef.current = false;
    setSpamNotice(null);
    playSound('correct');

    let targetAdvice: EnglishAdvice;
    if (!dialogueOpen) {
      setDialogueOpen(true);
      targetAdvice = currentAdvice;
      setAnimMode(currentAdvice.animMode);
    } else {
      const nextIdx = (currentAdviceIndex + 1) % adviceList.length;
      setCurrentAdviceIndex(nextIdx);
      targetAdvice = adviceList[nextIdx];
      setAnimMode(adviceList[nextIdx].animMode);
    }

    speakAdvice(targetAdvice.speechText);
  };

  const handleNextAdvice = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopSpeech();
    isCooldownRef.current = false;
    setSpamNotice(null);
    playSound('click');

    const nextIdx = (currentAdviceIndex + 1) % adviceList.length;
    setCurrentAdviceIndex(nextIdx);
    setAnimMode(adviceList[nextIdx].animMode);

    speakAdvice(adviceList[nextIdx].speechText);
  };

  const handleSpeakAloud = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopSpeech();
    isCooldownRef.current = false;
    setSpamNotice(null);
    playSound('click');
    speakAdvice(currentAdvice.speechText);
  };

  const handleCloseDialogue = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSound('click');
    stopSpeech();
    setIsSpeaking(false);
    setDialogueOpen(false);
    setSpamNotice(null);
    setAnimMode('idle');
  };

  // Check if mascot is near top edge of window
  const isNearTop = pos.y < 210;

  return (
    <div
      style={{
        position: 'fixed',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: 50,
      }}
      className="select-none touch-none"
    >
      {/* 1. COMPACT COMIC SPEECH BUBBLE DIRECTLY ABOVE MASCOT */}
      {dialogueOpen && (
        <div
          className={`absolute z-50 pointer-events-auto transition-all duration-200 animate-in fade-in zoom-in-95 ${
            isNearTop ? 'top-full mt-3' : 'bottom-full mb-3'
          } ${
            pos.x < 120 
              ? 'left-0' 
              : pos.x > (typeof window !== 'undefined' ? window.innerWidth - 180 : 800)
              ? 'right-0' 
              : 'left-1/2 -translate-x-1/2'
          }`}
          style={{
            width: '270px',
            maxWidth: '85vw',
          }}
        >
          <div className="relative bg-white/98 backdrop-blur-md rounded-2xl p-3 shadow-[0_12px_32px_rgba(0,56,130,0.22)] border-2 border-cyan-400 border-b-4 border-b-[#0070D1]">
            
            {/* Comic Tail Pointer */}
            {!isNearTop ? (
              // Downward tail pointing to Viko's head
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-7 border-x-transparent border-t-8 border-t-[#0070D1]">
                <div className="absolute -top-[9px] -left-[7px] w-0 h-0 border-x-7 border-x-transparent border-t-8 border-t-white" />
              </div>
            ) : (
              // Upward tail if flipped below
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-7 border-x-transparent border-b-8 border-b-cyan-400">
                <div className="absolute top-[1px] -left-[7px] w-0 h-0 border-x-7 border-x-transparent border-b-8 border-b-white" />
              </div>
            )}

            {/* Natural, Warm Comic Speech Bubble Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">💧</span>
                <span className="text-[11.5px] font-black text-cyan-900">Viko Đồng Hành</span>
                <span className="text-[9.5px] font-bold text-slate-400">• {currentAdvice.category}</span>
              </div>

              <div className="flex items-center gap-1">
                {/* Voice Pronounce */}
                <button
                  onClick={handleSpeakAloud}
                  className={`p-1 rounded-lg transition-all cursor-pointer ${
                    isSpeaking
                      ? 'bg-cyan-500 text-white animate-pulse'
                      : 'hover:bg-cyan-100 text-cyan-700'
                  }`}
                  title="Nghe Viko phát âm"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>

                {/* Close */}
                <button
                  onClick={handleCloseDialogue}
                  className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                  title="Đóng"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Natural, Warm Content */}
            <div className="py-2.5">
              {spamNotice ? (
                <div className="flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 p-2 rounded-xl animate-bounce">
                  <span className="text-base shrink-0">😆</span>
                  <p className="text-[11.5px] font-bold leading-tight">
                    "{spamNotice}"
                  </p>
                </div>
              ) : (
                <p className="text-[12px] font-semibold text-slate-800 leading-snug">
                  "{currentAdvice.adviceEn}"
                </p>
              )}
            </div>

            {/* Clean Natural Actions */}
            {!spamNotice && (
              <div className="flex items-center gap-1.5 pt-0.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playSound('click');
                    currentAdvice.action();
                  }}
                  className="flex-1 py-1.5 px-3 rounded-xl bg-gradient-to-r from-[#0070D1] to-[#009FE3] hover:from-[#005bb5] hover:to-[#0088c7] text-white font-black text-[11px] flex items-center justify-center gap-1.5 shadow-xs border-b-2 border-[#004b96] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  {currentAdvice.icon}
                  <span className="truncate">{currentAdvice.actionText}</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </button>
                <button
                  onClick={handleNextAdvice}
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs transition-all cursor-pointer shrink-0"
                  title="Đổi lời khuyên khác"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. DYNAMIC LIVE MASCOT WITH AUTOMATIC ANIMATION (CLEAN & MINIMALIST) */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`relative flex flex-col items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-150 ${
          isDragging ? 'scale-110 -rotate-3' : 'hover:scale-105'
        }`}
        title="Viko Tự Động Chuyển Động • Bấm để Trò Chuyện • Kéo để Di Chuyển"
      >
        {/* Glow Ring Behind Mascot */}
        <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-md pointer-events-none animate-pulse" />

        <VikoDynamicAnimator
          mode={animMode}
          isSpeaking={isSpeaking}
          autoAnimate={!dialogueOpen}
          isDragging={isDragging}
          enableEyeTracking={!isDragging && !dialogueOpen}
          size="md"
          onTap={handleMascotTap}
          showFpsBadge={false}
        />
      </div>
    </div>
  );
};

