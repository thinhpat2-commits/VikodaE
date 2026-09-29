import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Volume2, 
  Flame, 
  Sparkles, 
  Zap, 
  Target, 
  Award, 
  ChevronRight,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { CourseLevel, UnitLesson, SideQuestItem } from '../data/curriculumData';
import { playSound } from '../services/soundEffects';

interface DailyActionCoachProps {
  selectedLevel: CourseLevel;
  completedUnitIds: string[];
  displayedLessons: UnitLesson[];
  sideQuests: SideQuestItem[];
  onStartLesson: (lesson: UnitLesson) => void;
  onGoToVoiceCoach: () => void;
  onOpenSideQuest: (sq: SideQuestItem) => void;
  onOpenArena: () => void;
  onOpenPlacementTest: () => void;
  hasTakenPlacementTest: boolean;
}

export const DailyActionCoach: React.FC<DailyActionCoachProps> = ({
  selectedLevel,
  completedUnitIds,
  displayedLessons,
  sideQuests,
  onStartLesson,
  onGoToVoiceCoach,
  onOpenSideQuest,
  onOpenArena,
  onOpenPlacementTest,
  hasTakenPlacementTest,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  // Find the next incomplete lesson
  const currentActiveIndex = displayedLessons.findIndex((l) => !completedUnitIds.includes(l.id));
  const activeLesson = currentActiveIndex !== -1 ? displayedLessons[currentActiveIndex] : displayedLessons[displayedLessons.length - 1];
  const allCompleted = currentActiveIndex === -1 && displayedLessons.length > 0;

  // Find available side quest
  const availableSideQuest = sideQuests.find(
    (sq) => sq.level === selectedLevel && !completedUnitIds.includes(sq.id)
  );

  // Calculate daily routine steps
  // 1. Placement Test (if not taken) or Lesson
  // 2. Pronunciation Voice Pitch
  // 3. Side-Quest
  // 4. ARENA Drill
  const steps = [
    {
      id: 'step-lesson',
      title: allCompleted ? 'Ôn Luyện Bài Học Then Chốt' : `Học Bài ${activeLesson.unitNumber}: ${activeLesson.title}`,
      description: allCompleted ? 'Giữ vững phản xạ 3 phút mỗi ngày' : 'Nắm vững từ vựng & cấu trúc ngoại giao quốc tế',
      icon: '📚',
      isCompleted: completedUnitIds.includes(activeLesson.id),
      badge: 'CỐT LÕI',
      actionLabel: 'Học Ngay',
      action: () => onStartLesson(activeLesson),
    },
    {
      id: 'step-voice',
      title: 'Luyện Ngữ Điệu VikoVoice AI',
      description: 'Luyện nối âm & độ vang tự nhiên như người Mỹ/Anh',
      icon: '🎙️',
      isCompleted: completedUnitIds.length > 0,
      badge: 'BẢN NGỮ',
      actionLabel: 'Luyện Giọng',
      action: onGoToVoiceCoach,
    },
    {
      id: 'step-arena',
      title: 'Thử Thách Đấu Trường ARENA Phản Xạ',
      description: 'Rèn tốc độ xử lý câu hỏi đối tác dưới áp lực thời gian',
      icon: '⚡',
      isCompleted: false,
      badge: 'TỐC ĐỘ',
      actionLabel: 'Thực Chiến',
      action: onOpenArena,
    },
    ...(availableSideQuest ? [{
      id: 'step-quest',
      title: availableSideQuest.title,
      description: availableSideQuest.subtitle,
      icon: availableSideQuest.icon,
      isCompleted: false,
      badge: 'MỞ RỘNG',
      actionLabel: 'Mở Khóa',
      action: () => onOpenSideQuest(availableSideQuest),
    }] : [])
  ];

  const completedStepsCount = steps.filter(s => s.isCompleted).length;
  const progressPercent = Math.round((completedStepsCount / steps.length) * 100);

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-sm overflow-hidden transition-all">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-sky-500 via-[#009FE3] to-[#0070D1] p-3.5 sm:p-4 text-white">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-lg shrink-0">
              🧭
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-black bg-white/20 px-2 py-0.5 rounded-full">
                  Lộ Trình Chỉ Dẫn Thông Minh
                </span>
                <span className="text-[10px] font-bold text-sky-100">
                  Cửa {selectedLevel}
                </span>
              </div>
              <h3 className="text-sm font-black text-white leading-tight mt-0.5">
                {allCompleted 
                  ? '🎉 Bạn Đã Hoàn Thành Cửa Này! Sẵn Sàng Vượt Cấp?'
                  : `Hôm Nay Nên Làm Gì? (${completedStepsCount}/${steps.length} Nhiệm Vụ Xong)`}
              </h3>
            </div>
          </div>

          {/* Toggle Expand / Test Button */}
          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              onClick={() => {
                playSound('click');
                onOpenPlacementTest();
              }}
              className="px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-[11px] shadow-xs cursor-pointer flex items-center gap-1 transition-all active:scale-95"
              title="Đo lường trình độ & kiểm tra lại kỹ năng bất kỳ lúc nào"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Test Trình Độ</span>
              <span className="sm:hidden">Test</span>
            </button>
          </div>
        </div>

        {/* Daily Progress Bar */}
        <div className="mt-3 space-y-1">
          <div className="flex justify-between text-[10px] font-bold text-sky-100">
            <span>Tiến độ hoàn thiện kỹ năng hôm nay</span>
            <span className="font-black text-white">{progressPercent}%</span>
          </div>
          <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-amber-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Checklist of Next Actions */}
      <div className="p-3 sm:p-4 space-y-2.5">
        
        {/* Next Best Action Focus Card (The #1 thing to do right now!) */}
        {!allCompleted && (
          <div className="p-3 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-left flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5 min-w-0">
              <span className="text-2xl shrink-0">🎯</span>
              <div className="min-w-0">
                <span className="text-[9px] font-black uppercase text-amber-800 tracking-wider block">
                  Ưu Tiên Số 1 Bây Giờ:
                </span>
                <h4 className="text-xs font-black text-slate-900 truncate">
                  {steps[0].title}
                </h4>
                <p className="text-[10px] text-slate-600 truncate">
                  {steps[0].description}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                playSound('click');
                steps[0].action();
              }}
              className="px-3 py-1.5 rounded-xl btn-duo-green text-white font-black text-xs shrink-0 flex items-center gap-1 cursor-pointer active:scale-95 shadow-xs"
            >
              <span>Vào Học</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Step List */}
        <div className="space-y-1.5 pt-1">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              onClick={() => {
                playSound('click');
                step.action();
              }}
              className={`p-2.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer active:scale-[0.99] ${
                step.isCompleted
                  ? 'bg-slate-50 border-slate-200 opacity-75'
                  : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 shadow-2xs'
              }`}
            >
              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                <div className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center text-sm shrink-0">
                  {step.isCompleted ? '✓' : step.icon}
                </div>
                <div className="min-w-0 text-left">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`text-xs font-black leading-tight ${step.isCompleted ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {step.title}
                    </span>
                    <span className="text-[8px] font-black px-1.5 py-0.2 rounded uppercase bg-sky-100 text-[#0070D1]">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 shrink-0">
                {step.isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <button
                    className="px-2.5 py-1 rounded-lg bg-sky-50 text-[#0070D1] hover:bg-[#009FE3] hover:text-white border border-sky-200 text-[10px] font-black transition-colors"
                  >
                    {step.actionLabel}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Native Skill Polish Quote */}
        <div className="p-2.5 rounded-xl bg-sky-50/80 border border-sky-200/80 text-[11px] text-slate-700 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-snug">
            <b className="text-[#0070D1]">Lời khuyên bản ngữ:</b> Khi đối tác quốc tế hỏi về mỏ khoáng, hãy giữ ngữ điệu đi xuống tự tin ở cuối câu để khẳng định chất lượng nguyên bản từ 1957.
          </p>
        </div>

      </div>
    </div>
  );
};
