import React from 'react';
import { 
  Award, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  ChevronRight, 
  BookOpen, 
  Headphones, 
  Mic, 
  Briefcase, 
  ShieldCheck, 
  Sparkles,
  Info
} from 'lucide-react';
import { CourseLevel } from '../data/curriculumData';
import { GamificationState, EmployeeProfile } from '../types';
import { VikoMascot } from './brand/VikodaLogos';

interface GlobalProficiencyDashboardProps {
  stats: GamificationState;
  profile: EmployeeProfile;
  onOpenPlacementTest?: () => void;
  onNavigateToStudy?: () => void;
}

export interface ProficiencyTier {
  cefr: CourseLevel;
  toeicRange: string;
  ieltsRange: string;
  title: string;
  badgeColor: string;
  accentBg: string;
  borderClass: string;
  textClass: string;
  description: string;
  realWorldReadiness: string;
  requiredXp: number;
  requiredLessons: number;
}

export const PROFICIENCY_TIERS: ProficiencyTier[] = [
  {
    cefr: 'A1',
    toeicRange: '250 - 400',
    ieltsRange: '3.0 - 4.0',
    title: 'Tân Binh Văn Phòng (Workplace Novice)',
    badgeColor: 'bg-emerald-500',
    accentBg: 'bg-emerald-50',
    borderClass: 'border-emerald-200',
    textClass: 'text-emerald-700',
    description: 'Nắm vững các mẫu câu chào hỏi, tự giới thiệu tên, phòng ban và hỏi thăm đồng nghiệp cơ bản.',
    realWorldReadiness: 'Tự tin bắt tay, trao danh thiếp và giới thiệu bản thân với khách quốc tế.',
    requiredXp: 0,
    requiredLessons: 0,
  },
  {
    cefr: 'A2',
    toeicRange: '405 - 550',
    ieltsRange: '4.0 - 5.0',
    title: 'Tiếp Thị Viên Tự Tin (Product Presenter)',
    badgeColor: 'bg-sky-500',
    accentBg: 'bg-sky-50',
    borderClass: 'border-sky-200',
    textClass: 'text-sky-700',
    description: 'Thuyết minh lưu loát về nguồn khoáng Đảnh Thạnh 220m, độ kiềm tự nhiên pH 9.0 và các chứng nhận an toàn.',
    realWorldReadiness: 'Dẫn khách tham quan nhà máy, giải thích sự khác biệt giữa nước khoáng kiềm thiên nhiên và nước lọc RO.',
    requiredXp: 350,
    requiredLessons: 8,
  },
  {
    cefr: 'B1',
    toeicRange: '555 - 700',
    ieltsRange: '5.0 - 6.0',
    title: 'Đại Sứ Kinh Doanh (Business Ambassador)',
    badgeColor: 'bg-blue-600',
    accentBg: 'bg-blue-50',
    borderClass: 'border-blue-200',
    textClass: 'text-blue-800',
    description: 'Giao tiếp độc lập qua email thương mại, xử lý từ chối về giá và giới thiệu chính sách chiết khấu phân phối.',
    realWorldReadiness: 'Đàm phán đưa Vikoda vào các chuỗi nhà hàng, khách sạn 5 sao (HORECA) và siêu thị đối tác.',
    requiredXp: 900,
    requiredLessons: 18,
  },
  {
    cefr: 'B2',
    toeicRange: '705 - 850',
    ieltsRange: '6.0 - 7.0',
    title: 'Chuyên Gia Đàm Phán Xuất Khẩu (Export Negotiator)',
    badgeColor: 'bg-indigo-600',
    accentBg: 'bg-indigo-50',
    borderClass: 'border-indigo-200',
    textClass: 'text-indigo-800',
    description: 'Đàm phán hợp đồng thương mại quốc tế, Incoterms 2020 (FOB Da Nang, CIF Tokyo), thanh toán L/C và giải quyết khiếu nại.',
    realWorldReadiness: 'Đại diện công ty đàm phán hợp đồng container xuất khẩu lớn với các nhà nhập khẩu Nhật Bản, Mỹ, Hàn Quốc.',
    requiredXp: 1800,
    requiredLessons: 28,
  },
  {
    cefr: 'C1-C2',
    toeicRange: '855 - 990',
    ieltsRange: '7.5 - 9.0',
    title: 'Lãnh Đạo Ngoại Giao Thương Hiệu (Global Strategic Leader)',
    badgeColor: 'bg-amber-500',
    accentBg: 'bg-amber-50',
    borderClass: 'border-amber-300',
    textClass: 'text-amber-900',
    description: 'Diễn thuyết tại hội thảo nước uống toàn cầu, bảo vệ chiến lược giá trị thương hiệu và ký kết liên doanh quốc tế.',
    realWorldReadiness: 'Đại sứ thương hiệu toàn quyền đại diện Vikoda trên các diễn đàn thượng đỉnh kinh tế thế giới.',
    requiredXp: 3000,
    requiredLessons: 38,
  },
];

export const calculateProficiency = (stats: GamificationState): {
  currentTier: ProficiencyTier;
  nextTier: ProficiencyTier | null;
  currentTierIndex: number;
  progressToNext: number;
  estimatedToeic: number;
  estimatedIelts: number;
  pillarScores: {
    listening: number;
    speaking: number;
    vocabulary: number;
    negotiation: number;
  };
} => {
  const completedCount = stats.completedNodeIds ? stats.completedNodeIds.length : 0;
  const xp = stats.xp || 0;
  const threeStarCount = stats.unitStars
    ? Object.values(stats.unitStars).filter((s) => s === 3).length
    : 0;
  const arenaWins = stats.arenaStats?.wins || 0;

  // 1. Phân cấp bậc CEFR chuẩn xác dựa trên số bài học thực tế (42 Bài) & Điểm kinh nghiệm
  let tierIndex = 0;
  if (completedCount >= 34 || xp >= 3000) {
    tierIndex = 4; // C1-C2 (Lãnh Đạo Ngoại Giao Thương Hiệu)
  } else if (completedCount >= 24 || xp >= 1800) {
    tierIndex = 3; // B2 (Chuyên Gia Đàm Phán Xuất Khẩu)
  } else if (completedCount >= 14 || xp >= 900) {
    tierIndex = 2; // B1 (Đại Sứ Kinh Doanh)
  } else if (completedCount >= 6 || xp >= 350) {
    tierIndex = 1; // A2 (Tiếp Thị Viên Tự Tin)
  } else {
    tierIndex = 0; // A1 (Tân Binh Văn Phòng)
  }

  // Nếu đã làm bài thi đánh giá năng lực hợp lệ (Placement Test)
  if (stats.placementTest?.recommendedLevel) {
    const lvl = stats.placementTest.recommendedLevel;
    let testTier = 0;
    if (lvl === 'A1') testTier = 0;
    else if (lvl === 'A2' || lvl === 'A2-B1') testTier = 1;
    else if (lvl === 'B1') testTier = 2;
    else if (lvl === 'B2' || lvl === 'B2-C1') testTier = 3;
    else if (lvl === 'C1-C2' || lvl === 'C2') testTier = 4;

    // Giữ cấp độ bài test nếu học viên có năng lực sẵn, nhưng khởi điểm A1 nếu mới học
    if (completedCount > 0 || testTier <= 1) {
      tierIndex = Math.max(tierIndex, testTier);
    }
  }

  const currentTier = PROFICIENCY_TIERS[tierIndex];
  const nextTier = tierIndex < PROFICIENCY_TIERS.length - 1 ? PROFICIENCY_TIERS[tierIndex + 1] : null;

  let progressToNext = 100;
  if (nextTier) {
    const prevLessons = currentTier.requiredLessons;
    const targetLessons = nextTier.requiredLessons;
    const lessonRatio = (completedCount - prevLessons) / Math.max(1, targetLessons - prevLessons);
    
    const prevXp = currentTier.requiredXp;
    const targetXp = nextTier.requiredXp;
    const xpRatio = (xp - prevXp) / Math.max(1, targetXp - prevXp);

    const rawProgress = Math.max(0, Math.min(0.99, (lessonRatio * 0.6 + xpRatio * 0.4)));
    progressToNext = Math.round(rawProgress * 100);
  }

  // Ước lượng TOEIC / IELTS bám sát tiến độ thực tế
  const baseToeicByTier = [280, 420, 560, 720, 860];
  const baseIeltsByTier = [3.0, 4.0, 5.0, 6.0, 7.5];
  const bonusToeic = Math.min(100, Math.round((progressToNext / 100) * 100));
  const estimatedToeic = Math.min(990, baseToeicByTier[tierIndex] + bonusToeic);
  const estimatedIelts = parseFloat((baseIeltsByTier[tierIndex] + (progressToNext >= 50 ? 0.5 : 0)).toFixed(1));

  // 2. CÔNG THỨC 4 TRỤ CỘT NĂNG LỰC CHÂN THỰC (0 - 100)
  // Xóa bỏ hoàn toàn việc cộng ảo lên 90-100 khi mới học vài bài!
  // Điểm số phản ánh đúng số bài học (42 bài), chất lượng 3 sao, chuỗi streak và thành tích đấu trường.
  const totalUnits = 42;
  const progressRatio = Math.min(1, completedCount / totalUnits);
  const threeStarRatio = Math.min(1, threeStarCount / totalUnits);

  // 1. Nghe hiểu (Listening): Bắt đầu từ 15đ, tích lũy theo số bài học & sao đạt được
  const listening = Math.min(
    98,
    Math.max(15, Math.round(
      15 + progressRatio * 55 + threeStarRatio * 20 + Math.min(10, (xp / 400))
    ))
  );

  // 2. Phát âm & Nói (Speaking): Bắt đầu từ 12đ, tích lũy qua bài nói và luyện âm AI
  const speaking = Math.min(
    98,
    Math.max(12, Math.round(
      12 + progressRatio * 52 + threeStarRatio * 22 + Math.min(10, completedCount * 0.3)
    ))
  );

  // 3. Vốn từ vựng (Vocabulary): Bắt đầu từ 16đ, tăng theo từ vựng từng Unit và chuỗi streak
  const vocabulary = Math.min(
    98,
    Math.max(16, Math.round(
      16 + progressRatio * 58 + Math.min(12, (stats.streakDays || 1) * 1.5) + threeStarRatio * 10
    ))
  );

  // 4. Đàm phán thương vụ (Negotiation): Bắt đầu từ 10đ (người mới A1 chưa học đàm phán).
  // Tăng mạnh khi học các bài Unit B1/B2 và có chiến thắng Đấu trường 1v1
  const b2bRatio = Math.min(1, Math.max(0, completedCount - 6) / 36);
  const negotiation = Math.min(
    98,
    Math.max(10, Math.round(
      10 + b2bRatio * 60 + Math.min(18, arenaWins * 3) + threeStarRatio * 10
    ))
  );

  const pillarScores = {
    listening,
    speaking,
    vocabulary,
    negotiation,
  };

  return {
    currentTier,
    nextTier,
    currentTierIndex: tierIndex,
    progressToNext,
    estimatedToeic,
    estimatedIelts,
    pillarScores,
  };
};

export const GlobalProficiencyDashboard: React.FC<GlobalProficiencyDashboardProps> = ({
  stats,
  profile,
  onOpenPlacementTest,
  onNavigateToStudy,
}) => {
  const {
    currentTier,
    nextTier,
    currentTierIndex,
    progressToNext,
    estimatedToeic,
    estimatedIelts,
    pillarScores,
  } = calculateProficiency(stats);

  return (
    <div className="space-y-4">
      
      {/* 1. Hero Spotlight: CEFR / TOEIC / IELTS International Badge */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#004B87] via-[#0070D1] to-[#009FE3] p-5 sm:p-6 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center shadow-lg shrink-0">
              <span className="text-2xl font-black tracking-tight">{currentTier.cefr}</span>
              <span className="text-[9px] font-black uppercase text-sky-200">CEFR</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-bold text-sky-100 mb-1 border border-white/20">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Thước Đo Năng Lực Quốc Tế</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight leading-snug">
                {currentTier.title}
              </h2>
              <p className="text-xs text-sky-100 font-medium">
                {profile.fullName} • Mã NV: {profile.employeeCode || 'VKD-1957'}
              </p>
            </div>
          </div>

          <VikoMascot size="sm" mood="celebrate" />
        </div>

        {/* Global Equivalent Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/20">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 border border-white/20 text-center">
            <span className="text-[10px] font-black uppercase text-sky-200 block">Ước Lượng TOEIC</span>
            <span className="text-xl sm:text-2xl font-black text-amber-300 mt-0.5 block">
              ~{estimatedToeic}
            </span>
            <span className="text-[10px] text-white/80 font-medium">/ 990 Điểm</span>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 border border-white/20 text-center">
            <span className="text-[10px] font-black uppercase text-sky-200 block">Ước Lượng IELTS</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-300 mt-0.5 block">
              Band {estimatedIelts}
            </span>
            <span className="text-[10px] text-white/80 font-medium">/ 9.0 Điểm</span>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-white/15 backdrop-blur-md rounded-2xl p-2.5 border border-white/20 text-center flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase text-sky-200 block">Trạng Thái Sẵn Sàng</span>
            <span className="text-xs font-black text-white mt-1 block leading-tight">
              Sẵn Sàng Tiếp Khách
            </span>
            <span className="text-[10px] text-sky-200 font-medium mt-0.5">Thương vụ Quốc tế</span>
          </div>
        </div>

        {/* Real-world readiness descriptor */}
        <div className="mt-3.5 p-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 text-xs text-white/95 leading-relaxed">
          <strong className="text-amber-300 font-black">Khả năng thực chiến: </strong>
          {currentTier.realWorldReadiness}
        </div>
      </div>

      {/* 2. Interactive Multi-tier Benchmark Scale (A1 -> C2) */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200/80 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#0070D1]" />
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
              Bản Đồ Nâng Cấp Năng Lực Toàn Cầu
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            5 Cấp Độ Chuẩn CEFR
          </span>
        </div>

        {/* The 5 Tiers Stepper */}
        <div className="grid grid-cols-5 gap-1.5 pt-1">
          {PROFICIENCY_TIERS.map((tier, idx) => {
            const isCompleted = idx < currentTierIndex;
            const isCurrent = idx === currentTierIndex;
            const isLocked = idx > currentTierIndex;

            return (
              <div 
                key={tier.cefr}
                className={`relative flex flex-col items-center p-2 rounded-2xl border transition-all text-center ${
                  isCurrent
                    ? `${tier.accentBg} ${tier.borderClass} ring-2 ring-sky-400 shadow-md`
                    : isCompleted
                    ? 'bg-slate-50 border-slate-200'
                    : 'bg-slate-50/60 border-slate-200/60 opacity-60'
                }`}
              >
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black mb-1 ${
                  isCurrent
                    ? 'bg-[#0070D1] text-white shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : tier.cefr}
                </span>

                <span className="text-[11px] font-black text-slate-900 block truncate w-full">
                  {tier.cefr}
                </span>
                <span className="text-[9px] font-bold text-slate-500 hidden sm:block">
                  TOEIC {tier.toeicRange.split('-')[0]}
                </span>
                <span className="text-[9px] font-bold text-[#0070D1] hidden sm:block">
                  IELTS {tier.ieltsRange.split('-')[0]}
                </span>

                {isCurrent && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-amber-400 text-amber-950 font-black text-[8px] uppercase tracking-wider shadow-xs whitespace-nowrap">
                    Bạn ở đây
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Next Tier Milestone Banner */}
        {nextTier ? (
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-amber-950">
                <Target className="w-4 h-4 text-amber-600" />
                <span>Mục tiêu tiếp theo: Thăng hạng lên {nextTier.cefr} ({nextTier.title})</span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Tương đương <strong>TOEIC {nextTier.toeicRange}</strong> | <strong>IELTS {nextTier.ieltsRange}</strong>. Tiến độ hiện tại: <strong>{progressToNext}%</strong>.
              </p>
              {/* Progress bar */}
              <div className="w-full bg-amber-200/70 h-2 rounded-full overflow-hidden mt-1.5">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressToNext}%` }}
                />
              </div>
            </div>

            {onNavigateToStudy && (
              <button
                onClick={onNavigateToStudy}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1 cursor-pointer shadow-xs shrink-0 active:scale-95 transition-all"
              >
                <span>Học Tiếp</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-bold flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Chúc mừng! Bạn đã đạt Cấp Độ Cao Nhất C1-C2 (Lãnh Đạo Ngoại Giao Toàn Cầu)!</span>
          </div>
        )}
      </div>

      {/* 3. 4-Pillar Competency Radar / Metric Bars */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200/80 shadow-xs space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
              4 Cột Trụ Năng Lực Thực Chiến
            </h3>
          </div>
          <span className="text-[10px] text-slate-400 font-bold">
            Thang Điểm 100
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          {/* Pillar 1: Listening */}
          <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-indigo-100 text-indigo-700">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">Nghe Hiểu Phản Xạ</span>
                  <span className="text-[10px] text-slate-500 font-medium">Bắt âm tốc độ tự nhiên</span>
                </div>
              </div>
              <span className="text-sm font-black text-indigo-700">{pillarScores.listening}%</span>
            </div>
            <div className="w-full bg-indigo-200/60 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${pillarScores.listening}%` }} />
            </div>
          </div>

          {/* Pillar 2: Speaking */}
          <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700">
                  <Mic className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">Phát Âm & Ngữ Điệu</span>
                  <span className="text-[10px] text-slate-500 font-medium">Chuẩn vị âm & âm đuôi ELSA</span>
                </div>
              </div>
              <span className="text-sm font-black text-emerald-700">{pillarScores.speaking}%</span>
            </div>
            <div className="w-full bg-emerald-200/60 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${pillarScores.speaking}%` }} />
            </div>
          </div>

          {/* Pillar 3: Export Vocabulary */}
          <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-amber-100 text-amber-700">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">Từ Vựng Xuất Khẩu</span>
                  <span className="text-[10px] text-slate-500 font-medium">Khoáng kiềm pH 9.0 & FOB/CIF</span>
                </div>
              </div>
              <span className="text-sm font-black text-amber-700">{pillarScores.vocabulary}%</span>
            </div>
            <div className="w-full bg-amber-200/60 h-2 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full rounded-full" style={{ width: `${pillarScores.vocabulary}%` }} />
            </div>
          </div>

          {/* Pillar 4: Negotiation Reflex */}
          <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-sky-100 text-sky-700">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black text-slate-900 block">Bản Lĩnh Đàm Phán</span>
                  <span className="text-[10px] text-slate-500 font-medium">Hóa giải phản bác & Chốt đơn</span>
                </div>
              </div>
              <span className="text-sm font-black text-[#0070D1]">{pillarScores.negotiation}%</span>
            </div>
            <div className="w-full bg-sky-200/60 h-2 rounded-full overflow-hidden">
              <div className="bg-[#0070D1] h-full rounded-full" style={{ width: `${pillarScores.negotiation}%` }} />
            </div>
          </div>

        </div>

        {/* Action Button: Take Official Placement Test */}
        {onOpenPlacementTest && (
          <div className="pt-1 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-medium">
              Muốn kiểm tra lại trình độ đầu vào chính xác 100%?
            </span>
            <button
              onClick={onOpenPlacementTest}
              className="px-3.5 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[#0070D1] font-bold text-xs cursor-pointer shadow-2xs transition-all active:scale-95"
            >
              Thi Đánh Giá Đầu Vào
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
