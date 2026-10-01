import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Compass, Swords, Mic, RotateCcw } from 'lucide-react';
import { VikoMascot } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { CourseLevel } from '../data/curriculumData';

interface VikoNavigatorGuideProps {
  currentUnitTitle: string;
  currentUnitNumber: number;
  streakDays: number;
  selectedLevel: CourseLevel;
  onStartLesson: () => void;
  onGoToPvP: () => void;
  onGoToVoice: () => void;
  onGoToReview: () => void;
}

export const VikoNavigatorGuide: React.FC<VikoNavigatorGuideProps> = ({
  currentUnitTitle,
  currentUnitNumber,
  streakDays,
  selectedLevel,
  onStartLesson,
  onGoToPvP,
  onGoToVoice,
  onGoToReview,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeTipIndex, setActiveTipIndex] = useState<number>(0);

  const tips = [
    {
      id: 'next_lesson',
      icon: <Compass className="w-4 h-4 text-[#0070D1]" />,
      actionText: 'Vào Học Ngay',
      action: onStartLesson,
      headline: `Hôm nay: Học Bài ${currentUnitNumber}!`,
      subtext: `Hoàn thành bài "${currentUnitTitle}" để duy trì chuỗi ${streakDays} ngày nhé!`,
      mood: 'waving' as const,
    },
    {
      id: 'pvp_arena',
      icon: <Swords className="w-4 h-4 text-rose-500" />,
      actionText: 'Thách Đấu 1v1',
      action: onGoToPvP,
      headline: 'Đổi gió cùng Đấu Trường 1v1!',
      subtext: 'So tài 5 hiệp phản xạ Incoterms & mỏ Đảnh Thạnh với đồng nghiệp nào!',
      mood: 'dancing' as const,
    },
    {
      id: 'voice_coach',
      icon: <Mic className="w-4 h-4 text-purple-500" />,
      actionText: 'Luyện Phát Âm',
      action: onGoToVoice,
      headline: 'Chuẩn hóa phát âm bản ngữ!',
      subtext: 'Luyện câu chào hàng khoáng kiềm pH 9.0 để chuẩn bị đón khách VIP.',
      mood: 'proud' as const,
    },
    {
      id: 'quick_review',
      icon: <RotateCcw className="w-4 h-4 text-amber-500" />,
      actionText: 'Ôn 3 Phút',
      action: onGoToReview,
      headline: 'Xóa sạch bẫy câu hay sai!',
      subtext: 'Dành 3 phút lặp lại ngắt quãng để không bao giờ nhầm từ vựng nữa.',
      mood: 'thinking' as const,
    }
  ];

  const currentTip = tips[activeTipIndex % tips.length];

  const handleNextTip = () => {
    playSound('click');
    setActiveTipIndex(prev => (prev + 1) % tips.length);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-20 right-4 z-30 animate-bounce">
        <button
          onClick={() => {
            playSound('click');
            setIsOpen(true);
          }}
          className="p-2 bg-white rounded-full shadow-xl border-2 border-sky-300 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          title="Bấm để nhận gợi ý học từ Viko"
        >
          <VikoMascot size="xs" mood="waving" />
          <span className="text-[11px] font-black text-[#0070D1] pr-1">Viko Gợi Ý</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-18 sm:bottom-6 right-3 sm:right-6 z-30 max-w-xs sm:max-w-sm w-full animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="bg-white rounded-3xl p-3.5 sm:p-4 shadow-2xl border-2 border-sky-200 border-b-4 border-b-[#0072CE] relative flex items-start gap-3">
        
        {/* Dismiss Button */}
        <button
          onClick={() => {
            playSound('click');
            setIsOpen(false);
          }}
          className="absolute -top-2.5 -right-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 border border-slate-300 flex items-center justify-center text-xs cursor-pointer shadow-xs"
          title="Thu nhỏ trợ lý Viko"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Mascot Avatar with Active Mood */}
        <div className="shrink-0 pt-0.5">
          <VikoMascot size="sm" mood={currentTip.mood} />
        </div>

        {/* Speech Bubble Content */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-black uppercase tracking-wider text-[#0070D1] bg-sky-100 px-1.5 py-0.2 rounded-md">
              Viko Hướng Dẫn
            </span>
            <button
              onClick={handleNextTip}
              className="text-[10px] font-bold text-slate-400 hover:text-sky-600 cursor-pointer"
              title="Xem gợi ý khác"
            >
              Gợi ý khác ↻
            </button>
          </div>

          <h4 className="text-xs font-black text-slate-900 leading-snug">
            {currentTip.headline}
          </h4>
          <p className="text-[11px] text-slate-500 leading-tight">
            {currentTip.subtext}
          </p>

          {/* Action Trigger Button */}
          <div className="pt-1 flex items-center gap-2">
            <button
              onClick={() => {
                playSound('click');
                currentTip.action();
              }}
              className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-[#0070D1] to-[#009FE3] hover:from-[#005bb5] hover:to-[#0088c7] text-white font-black text-[11px] flex items-center gap-1 shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              {currentTip.icon}
              <span>{currentTip.actionText}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
