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
  TrendingUp,
  Mic,
  Swords,
  Layers,
  ChevronDown
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
  onGoToPitchDeck: () => void;
  onGoToBattle: () => void;
  onOpenSideQuest: (sq: SideQuestItem) => void;
  onOpenArena: () => void;
  onOpenPlacementTest: () => void;
  hasTakenPlacementTest: boolean;
  highestDrillScore: number;
}

export const DailyActionCoach: React.FC<DailyActionCoachProps> = ({
  selectedLevel,
  completedUnitIds,
  displayedLessons,
  sideQuests,
  onStartLesson,
  onGoToVoiceCoach,
  onGoToPitchDeck,
  onGoToBattle,
  onOpenSideQuest,
  onOpenArena,
  onOpenPlacementTest,
  hasTakenPlacementTest,
  highestDrillScore,
}) => {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState<boolean>(false);

  // 1. Find next incomplete lesson
  const currentActiveIndex = displayedLessons.findIndex((l) => !completedUnitIds.includes(l.id));
  const activeLesson = currentActiveIndex !== -1 ? displayedLessons[currentActiveIndex] : displayedLessons[displayedLessons.length - 1];
  const allLessonsCompleted = currentActiveIndex === -1 && displayedLessons.length > 0;

  // 2. Find available side quest
  const availableSideQuest = sideQuests.find(
    (sq) => sq.level === selectedLevel && !completedUnitIds.includes(sq.id)
  ) || sideQuests[0];

  // 3. Dynamic Native Mastery calculation based on progress
  const completedCount = completedUnitIds.filter(id => id.startsWith('unit-') || id.startsWith('sq-')).length;
  const pronMeter = Math.min(98, 45 + completedCount * 4 + (highestDrillScore > 300 ? 15 : 5));
  const mineralMeter = Math.min(99, 50 + completedCount * 4);
  const b2bMeter = Math.min(95, 40 + completedCount * 3 + (selectedLevel === 'B2-C1' || selectedLevel === 'C2' ? 20 : 5));
  const pitchMeter = Math.min(96, 42 + completedCount * 4 + (selectedLevel === 'C2' ? 25 : 10));

  // Determine current Milestone Title
  let milestoneRank = '🌱 Nhập Môn Văn Phòng (A1)';
  let nextMilestoneGoal = 'Tự tin phản xạ công sở (Cần thêm 3 bài)';
  let milestonePercent = 25;
  if (completedCount >= 12 || selectedLevel === 'C2') {
    milestoneRank = 'Bậc Thầy Bản Ngữ & Dealmaker';
    nextMilestoneGoal = 'Đỉnh Cao Ngoại Giao Toàn Cầu (Max Tier)';
    milestonePercent = 95;
  } else if (completedCount >= 8 || selectedLevel === 'B2-C1') {
    milestoneRank = 'Chuyên Gia Đàm Phán B2B';
    nextMilestoneGoal = 'Bậc Thầy Bản Ngữ (Cần xong Cửa C2)';
    milestonePercent = 75;
  } else if (completedCount >= 4 || selectedLevel === 'A2-B1') {
    milestoneRank = 'Đại Sứ Thương Hiệu Vikoda';
    nextMilestoneGoal = 'Chuyên Gia Đàm Phán (Cần xong Cửa B1)';
    milestonePercent = 50;
  }

  // 4. Generate the 5-step Guided Next Action Journey
  interface ActionStep {
    id: string;
    type: 'test' | 'lesson' | 'voice' | 'quest' | 'battle' | 'arena';
    title: string;
    subtitle: string;
    icon: string;
    badge: string;
    badgeColor: string;
    isCompleted: boolean;
    isCurrentBest: boolean;
    whyCrucial: string;
    actionLabel: string;
    onExecute: () => void;
  }

  const steps: ActionStep[] = [];

  // Step 0: Placement Test (Priority #1 if not tested yet)
  if (!hasTakenPlacementTest) {
    steps.push({
      id: 'step-placement',
      type: 'test',
      title: 'Bài Test Trình Độ Đầu Vào (2 Phút)',
      subtitle: 'Đo 4 kỹ năng: Phát âm, Mỏ khoáng, B2B & Pitching',
      icon: '🎯',
      badge: 'BẮT BUỘC ĐẦU TIÊN',
      badgeColor: 'bg-rose-100 text-rose-700 border-rose-300',
      isCompleted: false,
      isCurrentBest: true,
      whyCrucial: 'Giúp xếp lớp chính xác và tạo lộ trình học cá nhân hóa ngay từ phút đầu tiên.',
      actionLabel: 'Làm Test Ngay',
      onExecute: onOpenPlacementTest,
    });
  }

  // Step 1: Core Unit Lesson
  steps.push({
    id: 'step-core-lesson',
    type: 'lesson',
    title: allLessonsCompleted 
      ? `Ôn Luyện Bài ${activeLesson?.unitNumber || 1}: ${activeLesson?.title || 'Đón Khách'}`
      : `Bài ${activeLesson?.unitNumber || 1}: ${activeLesson?.title || 'Bài Học Cốt Lõi'}`,
    subtitle: allLessonsCompleted 
      ? 'Giữ vững phản xạ 3 phút mỗi ngày' 
      : (activeLesson?.subtitle || 'Làm chủ từ vựng & phản xạ ngoại giao'),
    icon: '📚',
    badge: 'BÀI HỌC CỐT LÕI',
    badgeColor: 'bg-sky-100 text-[#0070D1] border-sky-300',
    isCompleted: allLessonsCompleted ? false : (activeLesson ? completedUnitIds.includes(activeLesson.id) : false),
    isCurrentBest: hasTakenPlacementTest && (!activeLesson || !completedUnitIds.includes(activeLesson.id)),
    whyCrucial: 'Nạp nền tảng từ vựng và cấu trúc câu đàm phán trước khi luyện giọng.',
    actionLabel: 'Vào Học',
    onExecute: () => activeLesson && onStartLesson(activeLesson),
  });

  // Step 2: VikoVoice Shadowing (Pronunciation)
  steps.push({
    id: 'step-voice-coach',
    type: 'voice',
    title: 'Luyện Ngữ Điệu VikoVoice AI',
    subtitle: 'Nói nối âm mượt mà chuẩn giọng Michael US',
    icon: '🎙️',
    badge: 'CHUẨN BẢN NGỮ',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-300',
    isCompleted: completedUnitIds.length > 2,
    isCurrentBest: hasTakenPlacementTest && (activeLesson ? completedUnitIds.includes(activeLesson.id) : false),
    whyCrucial: 'Luyện nói to ngay sau khi học giúp não bộ khắc sâu khẩu hình và phản xạ tự nhiên.',
    actionLabel: 'Luyện Giọng',
    onExecute: onGoToVoiceCoach,
  });

  // Step 3: Interactive Side Quest
  if (availableSideQuest) {
    steps.push({
      id: 'step-side-quest',
      type: 'quest',
      title: availableSideQuest.title,
      subtitle: availableSideQuest.subtitle,
      icon: availableSideQuest.icon,
      badge: availableSideQuest.badge,
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      isCompleted: completedUnitIds.includes(availableSideQuest.id),
      isCurrentBest: false,
      whyCrucial: availableSideQuest.content.whyCrucial.slice(0, 75) + '...',
      actionLabel: 'Chinh Phục',
      onExecute: () => onOpenSideQuest(availableSideQuest),
    });
  }

  // Step 4: Buyer Objection Battle
  steps.push({
    id: 'step-objection-battle',
    type: 'battle',
    title: 'Đấu Trí Bẻ Gãy Phản Bác Của Buyer',
    subtitle: 'Đối kháng tình huống chê giá đắt & so sánh với đối thủ',
    icon: '⚔️',
    badge: 'THỰC CHIẾN B2B',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-300',
    isCompleted: false,
    isCurrentBest: false,
    whyCrucial: 'Rèn sự tự tin khi đối mặt với khách hàng quốc tế khó tính và bảo vệ giá trị sản phẩm.',
    actionLabel: 'Vào Đấu Trí',
    onExecute: onGoToBattle,
  });

  // Step 5: ARENA Speed Drill
  steps.push({
    id: 'step-arena-drill',
    type: 'arena',
    title: 'Thử Thách Đấu Trường ARENA 60s',
    subtitle: `Phản xạ chớp nhoáng • Kỷ lục: ${highestDrillScore || 0} điểm`,
    icon: '⚡',
    badge: 'ĐUA TỐC ĐỘ x3 XP',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-300',
    isCompleted: false,
    isCurrentBest: false,
    whyCrucial: 'Nâng tốc độ xử lý câu hỏi của đối tác dưới áp lực thời gian thực.',
    actionLabel: 'Vào Thi Đấu',
    onExecute: onOpenArena,
  });

  // Find the top active task
  const topTask = steps.find(s => s.isCurrentBest) || steps[0];
  const completedStepsCount = steps.filter(s => s.isCompleted).length;
  const progressPercent = Math.round((completedStepsCount / steps.length) * 100);

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-sm overflow-hidden transition-all space-y-0">
      
      {/* 1. Placement Test Banner if not taken yet */}
      {!hasTakenPlacementTest && (
        <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 p-3.5 text-white flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center text-xl shrink-0 animate-bounce">
              🎯
            </div>
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-black tracking-wider bg-white/25 px-2 py-0.5 rounded-full inline-block">
                Bước Đầu Tiên Quan Trọng
              </span>
              <h4 className="text-xs font-black text-white leading-snug mt-0.5">
                Chưa Rõ Trình Độ Của Mình? Làm Test 2 Phút Ngay!
              </h4>
              <p className="text-[10px] text-pink-100 truncate">
                Đo 4 kỹ năng & nhận Lộ trình Cá nhân hóa lập tức
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onOpenPlacementTest();
            }}
            className="px-3 py-1.5 rounded-xl bg-white text-rose-600 hover:bg-rose-50 font-black text-xs shrink-0 shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            Làm Test
          </button>
        </div>
      )}

      {/* 2. Top Header: Smart Roadmap & Next Best Action */}
      <div className="bg-gradient-to-r from-[#009FE3] via-[#0070D1] to-sky-600 p-3.5 text-white">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-lg shrink-0">
              🧭
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-black bg-white/20 px-2 py-0.5 rounded-full">
                  Hành Trình Khuyên Dùng
                </span>
                <span className="text-[10px] font-bold text-sky-100">
                  {selectedLevel === 'A1' ? '🌱 Tân Binh A1' : selectedLevel === 'A2-B1' ? '💼 Mỏ Khoáng B1' : selectedLevel === 'B2-C1' ? '💎 Xuất Khẩu C1' : '👑 Bản Ngữ C2'}
                </span>
              </div>
              <h3 className="text-sm font-black text-white leading-tight mt-0.5">
                Mở App Ra Nên Làm Gì? ({completedStepsCount}/{steps.length} xong)
              </h3>
            </div>
          </div>

          {/* Test/Retake button */}
          <button
            onClick={() => {
              playSound('click');
              onOpenPlacementTest();
            }}
            className="px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-[11px] shadow-xs cursor-pointer flex items-center gap-1 transition-all active:scale-95 shrink-0"
            title="Đo lường trình độ & kiểm tra lại kỹ năng bất kỳ lúc nào"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{hasTakenPlacementTest ? 'Test Lại' : 'Test Đầu Vào'}</span>
          </button>
        </div>

        {/* Milestone Indicator & Progress bar */}
        <div className="mt-2.5 pt-2 border-t border-white/20 space-y-1.5">
          <div className="flex justify-between items-center text-[10px] font-bold text-sky-100">
            <span className="flex items-center gap-1">
              <span>Mốc hiện tại:</span>
              <b className="text-amber-300 font-black">{milestoneRank}</b>
            </span>
            <span className="text-white font-extrabold">{milestonePercent}% tiến độ</span>
          </div>
          <div className="w-full bg-black/25 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-amber-400 h-full rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${milestonePercent}%` }}
            />
          </div>
          <div className="text-[9px] text-sky-100 text-right">
            Mục tiêu kế tiếp: <span className="text-white font-bold">{nextMilestoneGoal}</span>
          </div>
        </div>
      </div>

      {/* 3. Hero Card: The #1 Priority Action Right Now */}
      <div className="p-3 sm:p-4 space-y-3">
        
        <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-50 via-amber-100/60 to-amber-50 border-2 border-amber-300 shadow-xs flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 border-b-2 border-amber-600 flex items-center justify-center text-xl text-white shadow-2xs shrink-0">
              {topTask.icon}
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-black uppercase text-amber-800 tracking-wider block">
                🎯 BƯỚC TIẾP THEO CỦA BẠN:
              </span>
              <h4 className="text-xs font-black text-slate-900 truncate">
                {topTask.title}
              </h4>
              <p className="text-[10px] text-slate-600 line-clamp-1">
                {topTask.whyCrucial}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSound('click');
              topTask.onExecute();
            }}
            className="px-3.5 py-2 rounded-xl btn-duo-green text-white font-black text-xs shrink-0 flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-xs"
          >
            <span>{topTask.actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </button>
        </div>

        {/* 4. Sequence Checklist of 5 Integrated Missions */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Chuỗi Nhiệm Vụ Hoàn Thiện Kỹ Năng:
            </span>
            <span className="text-[10px] font-black text-[#0070D1]">
              {completedStepsCount}/{steps.length} Hoàn Thành
            </span>
          </div>

          {steps.map((step, idx) => (
            <div
              key={step.id}
              onClick={() => {
                playSound('click');
                step.onExecute();
              }}
              className={`p-2.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer active:scale-[0.99] ${
                step.isCompleted
                  ? 'bg-slate-50 border-slate-200 opacity-80'
                  : step.isCurrentBest
                  ? 'bg-sky-50/70 border-sky-400 shadow-xs ring-2 ring-sky-300/40'
                  : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/40'
              }`}
            >
              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-sm shrink-0 ${
                  step.isCompleted ? 'bg-emerald-100 text-emerald-700 font-bold' : 'bg-slate-100'
                }`}>
                  {step.isCompleted ? '✓' : step.icon}
                </div>
                <div className="min-w-0 text-left">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={`text-xs font-black leading-tight ${step.isCompleted ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {step.title}
                    </span>
                    <span className={`text-[8px] font-black px-1.5 py-0.2 rounded uppercase border ${step.badgeColor}`}>
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 shrink-0">
                {step.isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <button
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition-colors ${
                      step.isCurrentBest
                        ? 'bg-[#009FE3] text-white hover:bg-[#0072ce] shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-800'
                    }`}
                  >
                    {step.actionLabel}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 5. Collapsible Native Skill Mastery Meters (4 Pillars) */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/60">
          <button
            onClick={() => {
              playSound('click');
              setIsSkillsExpanded(!isSkillsExpanded);
            }}
            className="w-full p-2.5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-100/70 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-[#0070D1]" />
              <span className="text-xs font-black text-slate-800">
                4 Cột Mốc Kỹ Năng Đạt Chuẩn Bản Ngữ
              </span>
            </div>
            <div className="flex items-center space-x-1 text-slate-400">
              <span className="text-[10px] font-bold text-[#0070D1]">
                {Math.round((pronMeter + mineralMeter + b2bMeter + pitchMeter) / 4)}% TB
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSkillsExpanded ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {isSkillsExpanded && (
            <div className="p-3 pt-1 border-t border-slate-200 space-y-2.5 bg-white animate-in fade-in duration-150">
              {/* Skill 1 */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-700 flex items-center gap-1">
                    <span>🎙️</span> Khẩu Hình & Nối Âm (Linking Sounds)
                  </span>
                  <span className="text-purple-600 font-black">{pronMeter}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full transition-all duration-500" style={{ width: `${pronMeter}%` }} />
                </div>
              </div>

              {/* Skill 2 */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-700 flex items-center gap-1">
                    <span>💎</span> Tri Thức Mỏ Khoáng Đảnh Thạnh pH 9.0
                  </span>
                  <span className="text-[#0070D1] font-black">{mineralMeter}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#009FE3] h-full rounded-full transition-all duration-500" style={{ width: `${mineralMeter}%` }} />
                </div>
              </div>

              {/* Skill 3 */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-700 flex items-center gap-1">
                    <span>🛡️</span> Bản Lĩnh Đối Kháng Giá & Buyer Khó Tính
                  </span>
                  <span className="text-rose-600 font-black">{b2bMeter}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full rounded-full transition-all duration-500" style={{ width: `${b2bMeter}%` }} />
                </div>
              </div>

              {/* Skill 4 */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-700 flex items-center gap-1">
                    <span>🥂</span> Thuyết Trình Đóng Hợp Đồng & Ký Kết
                  </span>
                  <span className="text-amber-600 font-black">{pitchMeter}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${pitchMeter}%` }} />
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
