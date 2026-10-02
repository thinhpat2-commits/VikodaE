import React from 'react';
import { 
  Swords, 
  RotateCcw, 
  Zap, 
  Mic, 
  Sparkles, 
  ShieldAlert, 
  Mail, 
  Headphones, 
  Search, 
  Award,
  ChevronRight,
  Flame,
  Trophy,
  Brain,
  CheckCircle2,
  Clock,
  Target,
  BarChart3,
  TrendingUp,
  BookOpen,
  Edit3,
  Layers,
  Star
} from 'lucide-react';
import { playSound } from '../services/soundEffects';
import { GamificationState, EmployeeProfile } from '../types';
import { VIKODA_CURRICULUM, CourseLevel } from '../data/curriculumData';

interface PracticeHubProps {
  stats: GamificationState;
  profile: EmployeeProfile;
  onOpenPvPArena: () => void;
  onOpenDailyReview: () => void;
  onOpenEndlessDrill: () => void;
  onGoToVoiceCoach: () => void;
  onGoToPitchDeck: () => void;
  onGoToBuyerBattle: () => void;
  onGoToEmailStudio: () => void;
  onOpenSOS: () => void;
  onOpenCommute: () => void;
  onOpenSearch: () => void;
  onOpenPlacementTest: () => void;
}

export const PracticeHub: React.FC<PracticeHubProps> = ({
  stats,
  profile,
  onOpenPvPArena,
  onOpenDailyReview,
  onOpenEndlessDrill,
  onGoToVoiceCoach,
  onGoToPitchDeck,
  onGoToBuyerBattle,
  onGoToEmailStudio,
  onOpenSOS,
  onOpenCommute,
  onOpenSearch,
  onOpenPlacementTest,
}) => {
  const completedUnitIds = stats.completedNodeIds || [];
  const unitStars = stats.unitStars || {};

  // Calculate per-level mastery
  const getLevelProgress = (lvl: CourseLevel) => {
    const levelUnits = VIKODA_CURRICULUM.filter(u => u.level === lvl);
    if (levelUnits.length === 0) return { completed: 0, total: 8, pct: 0 };
    const completed = levelUnits.filter(u => completedUnitIds.includes(u.id)).length;
    const pct = Math.round((completed / levelUnits.length) * 100);
    return { completed, total: levelUnits.length, pct };
  };

  const a1Prog = getLevelProgress('A1');
  const a2Prog = getLevelProgress('A2');
  const b1Prog = getLevelProgress('B1');
  const b2Prog = getLevelProgress('B2');
  const c1Prog = getLevelProgress('C1-C2');

  const totalCompletedUnits = completedUnitIds.length;
  const threeStarUnitsCount = Object.values(unitStars).filter(s => s === 3).length;
  const unmasteredMistakesCount = stats.mistakesVault
    ? stats.mistakesVault.filter((m) => !m.mastered).length
    : 0;
  const masteredMistakesCount = stats.mistakesVault
    ? stats.mistakesVault.filter((m) => m.mastered).length
    : 0;

  // Estimated 4 skills scores based on activities
  const listeningScore = Math.min(100, Math.round(30 + (totalCompletedUnits * 1.8) + (stats.placementTest?.skills?.listening || 0) * 0.4));
  const speakingScore = Math.min(100, Math.round(25 + (profile.totalPracticeCount * 3) + (stats.placementTest?.skills?.speaking || 0) * 0.4));
  const readingScore = Math.min(100, Math.round(35 + (totalCompletedUnits * 1.6) + (stats.placementTest?.skills?.reading || 0) * 0.4));
  const writingScore = Math.min(100, Math.round(20 + (totalCompletedUnits * 1.5) + (threeStarUnitsCount * 2) + (stats.placementTest?.skills?.writing || 0) * 0.4));

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-24 animate-in fade-in duration-200 select-none">
      
      {/* 1. HERO HEADER: CHUYÊN GIA ĐÀO TẠO & ĐO LƯỜNG TIẾN BỘ */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#003865] rounded-3xl p-5 sm:p-6 text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-sky-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-black text-cyan-300 uppercase tracking-widest border border-white/10">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Bảng Đo Lường Năng Lực & Thực Chiến</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
              Trung Tâm Luyện Tập & Tiến Bộ
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
              Theo dõi sự tiến bộ từng ngày qua 5 cấp độ và 4 kỹ năng công sở thực tế. Chọn các công cụ cốt lõi bên dưới để xóa điểm yếu và rèn luyện phản xạ.
            </p>
          </div>

          <div className="flex md:flex-col items-center justify-between md:justify-center gap-2 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center">
              <div className="text-xs text-sky-200 font-bold uppercase tracking-wider">Trình Độ CEFR</div>
              <div className="text-xl sm:text-2xl font-black text-white">
                {stats.placementTest ? stats.placementTest.recommendedLevel : (totalCompletedUnits >= 24 ? 'B2' : totalCompletedUnits >= 16 ? 'B1' : totalCompletedUnits >= 8 ? 'A2' : 'A1')}
              </div>
            </div>
            <button
              onClick={() => {
                playSound('click');
                onOpenPlacementTest();
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-[11px] cursor-pointer shadow-xs transition-transform active:scale-95"
            >
              {stats.placementTest ? 'Test Lại' : 'Đánh Giá Năng Lực'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. BẢNG TIẾN ĐỘ 4 KỸ NĂNG & 5 CẤP ĐỘ (VISUAL COMPETENCY RADAR) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-sky-100 text-[#0070D1]">
              <BarChart3 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900">Bảng Đo Lường Năng Lực Công Sở</h2>
              <p className="text-[11px] text-slate-500 font-medium">Cập nhật trực tiếp theo kết quả luyện tập của bạn</p>
            </div>
          </div>
          <span className="text-xs font-black text-[#0070D1] bg-sky-50 px-2.5 py-1 rounded-xl border border-sky-200">
            {totalCompletedUnits}/40 Bài Hoàn Thành
          </span>
        </div>

        {/* 4 Core Skills Progress Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Skill 1: Listening */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2">
            <div className="flex items-center justify-between text-indigo-900">
              <span className="text-xs font-black flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-indigo-600" />
                <span>Nghe Hiểu</span>
              </span>
              <span className="text-xs font-black">{listeningScore}%</span>
            </div>
            <div className="w-full bg-indigo-200/80 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${listeningScore}%` }} />
            </div>
            <p className="text-[10px] text-indigo-700/80 font-medium">Phản xạ hội thoại & điện thoại</p>
          </div>

          {/* Skill 2: Speaking */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between text-emerald-900">
              <span className="text-xs font-black flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5 text-emerald-600" />
                <span>Phát Âm AI</span>
              </span>
              <span className="text-xs font-black">{speakingScore}%</span>
            </div>
            <div className="w-full bg-emerald-200/80 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: `${speakingScore}%` }} />
            </div>
            <p className="text-[10px] text-emerald-700/80 font-medium">Ngữ điệu pitch mỏ khoáng</p>
          </div>

          {/* Skill 3: Reading */}
          <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
            <div className="flex items-center justify-between text-sky-900">
              <span className="text-xs font-black flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#0070D1]" />
                <span>Đọc Hiểu</span>
              </span>
              <span className="text-xs font-black">{readingScore}%</span>
            </div>
            <div className="w-full bg-sky-200/80 h-2 rounded-full overflow-hidden">
              <div className="bg-[#0070D1] h-full rounded-full transition-all duration-500" style={{ width: `${readingScore}%` }} />
            </div>
            <p className="text-[10px] text-sky-700/80 font-medium">Tài liệu kỹ thuật & hợp đồng</p>
          </div>

          {/* Skill 4: Writing */}
          <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between text-purple-900">
              <span className="text-xs font-black flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-purple-600" />
                <span>Ghép Câu</span>
              </span>
              <span className="text-xs font-black">{writingScore}%</span>
            </div>
            <div className="w-full bg-purple-200/80 h-2 rounded-full overflow-hidden">
              <div className="bg-purple-600 h-full rounded-full transition-all duration-500" style={{ width: `${writingScore}%` }} />
            </div>
            <p className="text-[10px] text-purple-700/80 font-medium">Email & cú pháp thương mại</p>
          </div>
        </div>

        {/* 5-Level Progressive Mastery Bars */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center justify-between">
            <span>Tiến Độ Chinh Phục 5 Cấp Độ</span>
            <span className="text-slate-400 font-bold text-[11px]">8 bài / cấp độ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {[
              { lvl: 'A1', name: 'A1: Văn Phòng', prog: a1Prog, color: 'bg-emerald-500' },
              { lvl: 'A2', name: 'A2: Phòng Ban', prog: a2Prog, color: 'bg-cyan-500' },
              { lvl: 'B1', name: 'B1: Đại Sứ Vikoda', prog: b1Prog, color: 'bg-[#0070D1]' },
              { lvl: 'B2', name: 'B2: Bán Hàng B2B', prog: b2Prog, color: 'bg-purple-500' },
              { lvl: 'C1-C2', name: 'C1-C2: C-Suite', prog: c1Prog, color: 'bg-amber-500' },
            ].map((item) => (
              <div key={item.lvl} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-black">
                  <span className="text-slate-800">{item.name}</span>
                  <span className="text-slate-500">{item.prog.completed}/{item.prog.total}</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className={`${item.color} h-full rounded-full transition-all duration-300`} style={{ width: `${item.prog.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three Value Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
            <div className="text-lg font-black text-amber-600 flex items-center justify-center gap-1">
              <span>{threeStarUnitsCount}</span>
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div className="text-[10px] text-amber-800 font-bold">Bài Đạt 3 Sao Trọn Vẹn</div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="text-lg font-black text-emerald-600 flex items-center justify-center gap-1">
              <span>{masteredMistakesCount}</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-[10px] text-emerald-800 font-bold">Lỗi Sai Đã Xóa Bỏ</div>
          </div>

          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200">
            <div className="text-lg font-black text-[#0070D1] flex items-center justify-center gap-1">
              <span>{totalCompletedUnits * 5}+</span>
              <Brain className="w-4 h-4 text-[#0070D1]" />
            </div>
            <div className="text-[10px] text-sky-800 font-bold">Mẫu Câu Vikoda Thành Thạo</div>
          </div>
        </div>
      </div>

      {/* 3. BỐN CÔNG CỤ LUYỆN TẬP PHẢN XẠ CỐT LÕI (THE 4 CORE PRACTICE PILLARS) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Swords className="w-4 h-4 text-rose-500" />
            <span>4 Chế Độ Luyện Phản Xạ Cốt Lõi</span>
          </div>
          <span className="text-[11px] font-bold text-slate-400">Khuyên dùng hằng ngày</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          
          {/* Card 1: 1v1 PvP Arena */}
          <div 
            onClick={() => {
              playSound('click');
              onOpenPvPArena();
            }}
            className="group relative bg-white hover:bg-rose-50/50 rounded-2xl p-5 border-2 border-rose-200/80 border-b-4 border-b-rose-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform shrink-0">
                ⚔️
              </div>
              <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase tracking-wider">
                Thi đấu 1v1
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-rose-700 transition-colors flex items-center gap-1.5">
                <span>Đấu Trường 1v1 PvP Đồng Nghiệp</span>
                <ChevronRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                So tài phản xạ 5 hiệp đối kháng trực tiếp. Cạnh tranh bảng xếp hạng Elo nội bộ Vikoda.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-800">
              <span>Hạng: {stats.arenaStats?.rankTitle || 'Đấu Sĩ Vikoda'}</span>
              <span className="font-mono font-black">Elo {stats.arenaStats?.eloRating || 1200}</span>
            </div>
          </div>

          {/* Card 2: Daily Quick Review (Mistakes Vault) */}
          <div 
            onClick={() => {
              playSound('click');
              onOpenDailyReview();
            }}
            className="group relative bg-white hover:bg-amber-50/50 rounded-2xl p-5 border-2 border-amber-200/80 border-b-4 border-b-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform shrink-0">
                🔁
              </div>
              {unmasteredMistakesCount > 0 ? (
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-black animate-pulse">
                  {unmasteredMistakesCount} câu cần sửa
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                  Đã sạch lỗi
                </span>
              )}
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center gap-1.5">
                <span>Ôn Tập Điểm Yếu (Kho Lỗi Sai)</span>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                Tự động gom các câu bạn từng làm sai. Luyện lại theo chu kỳ để nhớ vĩnh viễn và không tái phạm.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-900">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>3 phút mỗi ngày</span>
              </span>
              <span className="text-emerald-600 font-bold">+10 XP · +5 💎</span>
            </div>
          </div>

          {/* Card 3: Arena Phản Xạ 60s (3 Tiers) */}
          <div 
            onClick={() => {
              playSound('click');
              onOpenEndlessDrill();
            }}
            className="group relative bg-white hover:bg-cyan-50/50 rounded-2xl p-5 border-2 border-cyan-200/80 border-b-4 border-b-cyan-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform shrink-0">
                ⚡
              </div>
              <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-black uppercase tracking-wider">
                3 Cấp Độ Rõ Ràng
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#0070D1] transition-colors flex items-center gap-1.5">
                <span>Arena Phản Xạ Tốc Độ (60 Giây)</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                Luyện tư duy tiếng Anh nhanh: Cơ Bản (A1) • Trung Cấp (B1) • Nâng Cao (C1). Rèn phản xạ tức thì.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Kỷ lục của bạn:</span>
              <span className="text-[#0070D1] font-black">{profile.highestDrillScore || stats.highestDrillScore || 0} điểm</span>
            </div>
          </div>

          {/* Card 4: VikoVoice AI (Pronunciation Coach) */}
          <div 
            onClick={() => {
              playSound('click');
              onGoToVoiceCoach();
            }}
            className="group relative bg-white hover:bg-purple-50/50 rounded-2xl p-5 border-2 border-purple-200/80 border-b-4 border-b-purple-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform shrink-0">
                🎙️
              </div>
              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black uppercase tracking-wider">
                Micro Trực Tiếp
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-purple-700 transition-colors flex items-center gap-1.5">
                <span>VikoVoice AI Luyện Phát Âm</span>
                <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                Luyện nói và chuẩn hóa ngữ điệu bản ngữ câu pitch khoáng kiềm, đàm phán hợp đồng container.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-900">
              <span>Nhận diện âm thanh</span>
              <span className="text-purple-600 font-bold">Chấm điểm 1-100%</span>
            </div>
          </div>

        </div>
      </div>

      {/* 4. TÚI ĐỒ NGHỀ DOANH NGHIỆP TINH GỌN (EXECUTIVE WORKPLACE TOOLKIT) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#0070D1]" />
            <span>Túi Đồ Nghề Doanh Nghiệp (Mô Phỏng & Tiện Ích)</span>
          </div>
          <span className="text-[11px] font-bold text-slate-400">Công cụ chuyên sâu</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          {/* Pitch Deck B2B */}
          <div
            onClick={() => {
              playSound('click');
              onGoToPitchDeck();
            }}
            className="bg-white hover:bg-sky-50/50 p-3.5 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🤝</span>
              <div className="truncate">
                <h4 className="text-xs font-black text-slate-900 truncate">Pitch Deck B2B</h4>
                <p className="text-[10px] text-slate-400 truncate">Thuyết trình nguồn khoáng</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-[#0070D1] font-bold">
              <span>Mở Slide</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* Buyer Objections Battle */}
          <div
            onClick={() => {
              playSound('click');
              onGoToBuyerBattle();
            }}
            className="bg-white hover:bg-sky-50/50 p-3.5 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🛡️</span>
              <div className="truncate">
                <h4 className="text-xs font-black text-slate-900 truncate">Đấu Trí Buyer</h4>
                <p className="text-[10px] text-slate-400 truncate">Xử lý phản bác HORECA</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-[#0070D1] font-bold">
              <span>Vào Đấu Trí</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* Email Studio B2B */}
          <div
            onClick={() => {
              playSound('click');
              onGoToEmailStudio();
            }}
            className="bg-white hover:bg-sky-50/50 p-3.5 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">✉️</span>
              <div className="truncate">
                <h4 className="text-xs font-black text-slate-900 truncate">Email Studio</h4>
                <p className="text-[10px] text-slate-400 truncate">Mẫu thư thương mại</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-[#0070D1] font-bold">
              <span>Mở Thư Viện</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* SOS 60s & Commute Tools */}
          <div
            onClick={() => {
              playSound('click');
              onOpenSOS();
            }}
            className="bg-white hover:bg-rose-50/50 p-3.5 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🚨</span>
              <div className="truncate">
                <h4 className="text-xs font-black text-slate-900 truncate">SOS Phòng Họp</h4>
                <p className="text-[10px] text-slate-400 truncate">Cứu nguy trong 60 giây</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-rose-600 font-bold">
              <span>Tra Cứu</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
