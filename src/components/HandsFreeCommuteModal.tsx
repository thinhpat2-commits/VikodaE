import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  Headphones, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  RotateCcw, 
  Volume2, 
  X, 
  Sparkles,
  Sliders
} from 'lucide-react';
import { CourseLevel, VIKODA_CURRICULUM } from '../data/curriculumData';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface HandsFreeCommuteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLevel: CourseLevel;
  speechRate: number;
}

interface PlaylistPhrase {
  id: string;
  en: string;
  vi: string;
  unitTitle: string;
}

export const HandsFreeCommuteModal: React.FC<HandsFreeCommuteModalProps> = ({
  isOpen,
  onClose,
  selectedLevel,
  speechRate: initialSpeechRate
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [rate, setRate] = useState<number>(1.0);
  const [phase, setPhase] = useState<'speaking_en' | 'user_pause' | 'speaking_vi' | 'idle'>('idle');
  const [pauseCountdown, setPauseCountdown] = useState<number>(3);

  // Extract all phrases from current level curriculum
  const playlist: PlaylistPhrase[] = React.useMemo(() => {
    const units = VIKODA_CURRICULUM.filter(u => u.level === selectedLevel);
    const phrases: PlaylistPhrase[] = [];
    units.forEach(u => {
      u.exercises.forEach(ex => {
        if (ex.englishSentence && ex.promptVi) {
          phrases.push({
            id: ex.id,
            en: ex.englishSentence,
            vi: ex.promptVi.replace('Sắp xếp câu: ', '').replace('Dịch câu: ', '').replace(/"/g, ''),
            unitTitle: `Bài ${u.unitNumber}: ${u.title}`
          });
        }
      });
    });
    return phrases.length > 0 ? phrases : [
      {
        id: 'fallback-1',
        en: 'Good morning! Welcome to Vikoda.',
        vi: 'Chào buổi sáng! Chào mừng quý khách đến với Vikoda.',
        unitTitle: 'Chào hỏi ngoại giao'
      },
      {
        id: 'fallback-2',
        en: 'Vikoda is 100% natural alkaline mineral water with a rare pH of 9.0.',
        vi: 'Vikoda là nước khoáng kiềm thiên nhiên 100% sở hữu độ pH 9.0 tự nhiên quý hiếm.',
        unitTitle: 'Khoáng kiềm tự nhiên'
      }
    ];
  }, [selectedLevel]);

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  const currentIdxRef = useRef(currentIndex);
  currentIdxRef.current = currentIndex;

  const timerRef = useRef<any>(null);

  // Stop everything when modal closes
  useEffect(() => {
    if (!isOpen) {
      stopSpeech();
      setIsPlaying(false);
      clearTimeout(timerRef.current);
    }
  }, [isOpen]);

  const runLoopStep = (idx: number) => {
    if (!isPlayingRef.current) return;
    const phrase = playlist[idx % playlist.length];

    // Phase 1: Speak English
    setPhase('speaking_en');
    playSpeech(phrase.en, rate, 'en-US', () => {
      if (!isPlayingRef.current) return;

      // Phase 2: Pause 3.5s for user shadowing
      setPhase('user_pause');
      setPauseCountdown(3);

      let counter = 3;
      const countInterval = setInterval(() => {
        counter--;
        setPauseCountdown(counter);
        if (counter <= 0) {
          clearInterval(countInterval);
        }
      }, 1000);

      timerRef.current = setTimeout(() => {
        clearInterval(countInterval);
        if (!isPlayingRef.current) return;

        // Phase 3: Speak Vietnamese translation
        setPhase('speaking_vi');
        playSpeech(phrase.vi, 1.0, 'vi-VN', () => {
          if (!isPlayingRef.current) return;

          // Short 1s buffer before moving to next phrase
          timerRef.current = setTimeout(() => {
            if (!isPlayingRef.current) return;
            const nextIdx = (idx + 1) % playlist.length;
            setCurrentIndex(nextIdx);
            runLoopStep(nextIdx);
          }, 1000);
        });
      }, 3500);
    });
  };

  const handleTogglePlay = () => {
    playSound('click');
    if (isPlaying) {
      stopSpeech();
      clearTimeout(timerRef.current);
      setIsPlaying(false);
      setPhase('idle');
    } else {
      setIsPlaying(true);
      isPlayingRef.current = true;
      runLoopStep(currentIndex);
    }
  };

  const handleNext = () => {
    playSound('click');
    stopSpeech();
    clearTimeout(timerRef.current);
    const nextIdx = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIdx);
    if (isPlaying) {
      runLoopStep(nextIdx);
    }
  };

  const handlePrev = () => {
    playSound('click');
    stopSpeech();
    clearTimeout(timerRef.current);
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    setCurrentIndex(prevIdx);
    if (isPlaying) {
      runLoopStep(prevIdx);
    }
  };

  if (!isOpen || typeof document === 'undefined') return null;

  const currentPhrase = playlist[currentIndex % playlist.length];

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-150"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
      onClick={() => {
        stopSpeech();
        onClose();
      }}
    >
      <div 
        className="bg-slate-900 text-white w-full max-w-md rounded-3xl border-2 border-slate-700 shadow-2xl flex flex-col overflow-hidden max-h-[92dvh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full">
                  Chế Độ Nghe Rảnh Tay
                </span>
                <span className="text-[10px] text-slate-400 font-bold">
                  {playlist.length} câu • Cửa {selectedLevel}
                </span>
              </div>
              <h3 className="text-sm font-black text-white mt-0.5">
                Luyện Shadowing Khi Di Chuyển
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Display Area */}
        <div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-5">
          
          <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            {currentPhrase.unitTitle} ({currentIndex + 1}/{playlist.length})
          </span>

          {/* English Phrase */}
          <div className="space-y-3 max-w-sm w-full">
            <h2 className="text-lg sm:text-xl font-black text-white leading-snug tracking-tight break-words">
              "{currentPhrase.en}"
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 font-medium break-words">
              {currentPhrase.vi}
            </p>
          </div>

          {/* Visual Shadowing Pulse Indicator */}
          <div className="py-2 flex flex-col items-center space-y-2">
            {phase === 'speaking_en' && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 animate-pulse">
                <Volume2 className="w-4 h-4" />
                <span>Giọng Michael US đang đọc...</span>
              </div>
            )}

            {phase === 'user_pause' && (
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-black text-amber-400 animate-bounce">
                  🗣️ Lặp lại to: {pauseCountdown}s
                </span>
                <span className="text-[10px] text-slate-400">
                  (Hãy nhại to lại câu vừa nghe với ngữ điệu tự tin)
                </span>
              </div>
            )}

            {phase === 'speaking_vi' && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <span>✓ Nghĩa tiếng Việt</span>
              </div>
            )}

            {phase === 'idle' && (
              <span className="text-xs text-slate-500">
                Nhấn Bắt Đầu để tự động chạy liên tục
              </span>
            )}
          </div>
        </div>

        {/* Thumb-friendly Playback Controls */}
        <div className="p-5 bg-slate-950/90 border-t border-slate-800 space-y-4">
          
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white transition-all active:scale-95 cursor-pointer"
              title="Câu trước"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={handleTogglePlay}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer shadow-lg ${
                isPlaying 
                  ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/30' 
                  : 'bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/30'
              }`}
              title={isPlaying ? 'Tạm dừng' : 'Bắt đầu phát'}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current ml-1" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white transition-all active:scale-95 cursor-pointer"
              title="Câu kế tiếp"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Speed Selector (0.8x, 1.0x, 1.2x) */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
            <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5" />
              <span>Tốc độ đọc:</span>
            </span>

            <div className="flex items-center space-x-1.5">
              {[0.8, 1.0, 1.2].map((spd) => (
                <button
                  key={spd}
                  onClick={() => {
                    setRate(spd);
                    playSound('click');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                    rate === spd
                      ? 'bg-cyan-500 text-slate-950 font-black'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
