import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Compass, Swords, Mic, RotateCcw, Volume2, MessageSquare, Zap } from 'lucide-react';
import { VikoMascot, MascotMood } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { playSpeech } from '../services/speechService';
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
  const [isDialogueOpen, setIsDialogueOpen] = useState<boolean>(true);
  const [activeTipIndex, setActiveTipIndex] = useState<number>(0);
  const [currentMood, setCurrentMood] = useState<MascotMood>('waving');
  const [isJumping, setIsJumping] = useState<boolean>(false);

  const tips = [
    {
      id: 'next_lesson',
      icon: <Compass className="w-4 h-4 text-[#0070D1]" />,
      actionText: 'Vào Học Ngay',
      action: onStartLesson,
      badge: 'LỘ TRÌNH CHÍNH',
      headline: `Hôm nay: Học Bài ${currentUnitNumber}!`,
      subtext: `Hoàn thành bài "${currentUnitTitle}" để duy trì chuỗi ${streakDays} ngày rực lửa nhé!`,
      speech: `Chào bạn! Hôm nay hãy hoàn thành bài số ${currentUnitNumber}: ${currentUnitTitle} cùng Viko nhé!`,
      mood: 'waving' as MascotMood,
    },
    {
      id: 'workplace_tip',
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      actionText: 'Luyện Giao Tiếp',
      action: onStartLesson,
      badge: 'MẸO CÔNG SỞ',
      headline: 'Tự tin đàm phán khoáng kiềm!',
      subtext: 'Hãy nói: "Our natural alkaline water pH 9.0 is bottled directly at the source in Danh Thanh."',
      speech: 'Mẹo công sở: Hãy tự tin giới thiệu nguồn khoáng kiềm Đảnh Thạnh với đối tác quốc tế nhé!',
      mood: 'idea' as MascotMood,
    },
    {
      id: 'pvp_arena',
      icon: <Swords className="w-4 h-4 text-rose-500" />,
      actionText: 'Thách Đấu 1v1',
      action: onGoToPvP,
      badge: 'ĐẤU TRƯỜNG',
      headline: 'Đổi gió so tài cùng đồng nghiệp!',
      subtext: '5 hiệp phản xạ Incoterms & mỏ Đảnh Thạnh đang chờ bạn dẫn đầu bảng xếp hạng!',
      speech: 'Sẵn sàng thi đấu đối kháng chưa? Vào Đấu trường 1v1 ngay nào!',
      mood: 'fire_battle' as MascotMood,
    },
    {
      id: 'voice_coach',
      icon: <Mic className="w-4 h-4 text-purple-500" />,
      actionText: 'Luyện Phát Âm',
      action: onGoToVoice,
      badge: 'PHÁT ÂM CHUẨN',
      headline: 'Chuẩn hóa phát âm bản ngữ!',
      subtext: 'Luyện tập ngữ điệu chuyên nghiệp để chuẩn bị đón tiếp các đoàn khách VIP & đối tác xuất khẩu.',
      speech: 'Cùng luyện phát âm chuẩn ngữ điệu bản ngữ với phòng AI Speaking Lab nhé!',
      mood: 'celebrate' as MascotMood,
    },
    {
      id: 'quick_review',
      icon: <RotateCcw className="w-4 h-4 text-emerald-500" />,
      actionText: 'Ôn 3 Phút',
      action: onGoToReview,
      badge: 'GHI NHỚ SÂU',
      headline: 'Xóa sạch bẫy câu hay nhầm lẫn!',
      subtext: 'Chỉ 3 phút lặp lại ngắt quãng để ghi nhớ vĩnh viễn thuật ngữ chuỗi cung ứng và kho bãi.',
      speech: 'Dành 3 phút ôn tập ngắt quãng sẽ giúp bạn nhớ từ vựng sâu hơn gấp mười lần!',
      mood: 'thinking' as MascotMood,
    }
  ];

  const currentTip = tips[activeTipIndex % tips.length];

  // Mascot Touch Interaction
  const handleMascotTap = () => {
    playSound('correct');
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);

    // Toggle dialogue if closed, or cycle to next tip with playful mood
    if (!isDialogueOpen) {
      setIsDialogueOpen(true);
    } else {
      const nextIdx = (activeTipIndex + 1) % tips.length;
      setActiveTipIndex(nextIdx);
      setCurrentMood(tips[nextIdx].mood);
    }
  };

  const handleNextTip = () => {
    playSound('click');
    const nextIdx = (activeTipIndex + 1) % tips.length;
    setActiveTipIndex(nextIdx);
    setCurrentMood(tips[nextIdx].mood);
  };

  const handleSpeakAloud = () => {
    playSound('click');
    playSpeech(currentTip.speech, 1.0, 'vi-VN');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end select-none">
      
      {/* 1. DUOLINGO SPEECH DIALOGUE BUBBLE */}
      {isDialogueOpen && (
        <div className="mb-3 max-w-xs sm:max-w-sm w-full bg-white/95 backdrop-blur-md rounded-3xl p-4 shadow-2xl border-2 border-cyan-300 border-b-4 border-b-[#0070D1] relative animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Close / Minimize Button */}
          <button
            onClick={() => {
              playSound('click');
              setIsDialogueOpen(false);
            }}
            className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-white hover:bg-slate-100 text-slate-500 border-2 border-slate-200 flex items-center justify-center text-xs cursor-pointer shadow-md active:scale-95 transition-all"
            title="Thu nhỏ lời thoại"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Dialogue Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-200/50">
                {currentTip.badge}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleSpeakAloud}
                className="p-1 rounded-lg hover:bg-sky-50 text-cyan-600 cursor-pointer transition-colors"
                title="Đọc lời thoại thành tiếng"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextTip}
                className="text-[10px] font-black text-cyan-600 hover:text-cyan-800 cursor-pointer flex items-center gap-0.5 bg-cyan-50 hover:bg-cyan-100 px-2 py-0.5 rounded-lg transition-all"
                title="Đổi gợi ý & biểu cảm khác"
              >
                <span>Đổi ý ↻</span>
              </button>
            </div>
          </div>

          {/* Dialogue Body */}
          <div className="py-2.5 space-y-1">
            <h4 className="text-xs font-black text-slate-900 leading-snug flex items-center gap-1.5">
              <span>{currentTip.headline}</span>
            </h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {currentTip.subtext}
            </p>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-1 flex items-center gap-2">
            <button
              onClick={() => {
                playSound('click');
                currentTip.action();
              }}
              className="w-full py-2 px-3.5 rounded-2xl bg-gradient-to-r from-[#0070D1] to-[#009FE3] hover:from-[#005bb5] hover:to-[#0088c7] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md border-b-3 border-[#004b96] active:translate-y-0.5 transition-all cursor-pointer"
            >
              {currentTip.icon}
              <span>{currentTip.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pointer Triangle to Mascot */}
          <div className="absolute -bottom-2.5 right-10 w-0 h-0 border-x-6 border-x-transparent border-t-8 border-t-[#0070D1]" />
        </div>
      )}

      {/* 2. LIVING TOUCHABLE 3D VIKO MASCOT */}
      <div 
        onClick={handleMascotTap}
        className={`relative group cursor-pointer transition-transform duration-200 select-none ${
          isJumping ? 'scale-120 -translate-y-4' : 'hover:scale-105 active:scale-95'
        }`}
        title="Chạm vào Viko để nhận hướng dẫn & nảy vui nhộn!"
      >
        {/* Ripple Water Glow Ring */}
        <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-md group-hover:bg-cyan-400/35 transition-all animate-pulse pointer-events-none" />

        {/* Mascot Figure with Physical Shadow */}
        <div className="relative">
          <VikoMascot
            size="md"
            mood={isJumping ? 'celebrate' : (isDialogueOpen ? currentTip.mood : 'waving')}
            interactive={false}
          />
        </div>

        {/* Floating Tap Hint (when dialogue is collapsed) */}
        {!isDialogueOpen && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white font-black text-[9px] px-2 py-0.5 rounded-full shadow-md whitespace-nowrap animate-bounce border border-white">
            Chạm vào tôi! 💧
          </div>
        )}
      </div>

    </div>
  );
};
