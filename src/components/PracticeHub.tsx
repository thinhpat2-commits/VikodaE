import React from 'react';
import { 
  Swords, 
  RotateCcw, 
  Zap, 
  Mic, 
  ChevronRight,
  Target,
  Briefcase,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { playSound } from '../services/soundEffects';
import { GamificationState, EmployeeProfile } from '../types';
import { VIKODA_CURRICULUM } from '../data/curriculumData';

interface PracticeHubProps {
  stats: GamificationState;
  profile: EmployeeProfile;
  onOpenPvPArena: () => void;
  onOpenDailyReview: () => void;
  onOpenEndlessDrill: () => void;
  onGoToVoiceCoach: () => void;
  onOpenPitchSimulator?: () => void;
}

export const PracticeHub: React.FC<PracticeHubProps> = ({
  stats,
  profile,
  onOpenPvPArena,
  onOpenDailyReview,
  onOpenEndlessDrill,
  onGoToVoiceCoach,
  onOpenPitchSimulator,
}) => {
  const masteredMistakesCount = stats.mistakesVault
    ? stats.mistakesVault.filter((m) => m.mastered).length
    : 0;
  const unmasteredMistakesCount = stats.mistakesVault
    ? stats.mistakesVault.filter((m) => !m.mastered).length
    : 0;

  // Total questions in curriculum
  const totalCurriculumQuestions = VIKODA_CURRICULUM.reduce(
    (acc, curr) => acc + (curr.exercises ? curr.exercises.length : 0),
    0
  );

  return (
    <div className="space-y-4 max-w-2xl mx-auto pb-24 animate-in fade-in duration-200 select-none">
      
      {/* 1. COMPACT, PURPOSE-DRIVEN ACTION HEADER */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200/90 shadow-2xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#005A9C] via-[#0070D1] to-[#009FE3] text-white flex items-center justify-center text-2xl shadow-xs shrink-0">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Đấu Trường Luyện Tập Chiều Sâu
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-sky-100 text-[#0070D1] text-[10px] font-black uppercase tracking-wider">
                  4 Trọng Tâm
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Đồng bộ trực tiếp cùng <strong>100 bài học chuẩn quốc tế</strong> & <strong>{totalCurriculumQuestions}+ câu hỏi thực chiến</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Real-time Continuous Practice & Repetition Metric Strip */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
          <div className="p-2 rounded-2xl bg-sky-50/70">
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold block uppercase truncate">Kho Câu Hỏi</span>
            <span className="text-xs sm:text-sm font-black text-[#0070D1]">{totalCurriculumQuestions} Câu</span>
          </div>
          <div className="p-2 rounded-2xl bg-blue-50/70">
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold block uppercase truncate">Lượt Luyện Tập</span>
            <span className="text-xs sm:text-sm font-black text-blue-700">
              {stats.practiceStats?.totalPracticeCount || profile.totalPracticeCount || stats.completedNodeIds.length || 0}
            </span>
          </div>
          <div className="p-2 rounded-2xl bg-purple-50/70">
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold block uppercase truncate">Làm Lại (Ôn)</span>
            <span className="text-xs sm:text-sm font-black text-purple-700">
              {stats.practiceStats?.repetitionCount || 0} Lần
            </span>
          </div>
          <div className="p-2 rounded-2xl bg-emerald-50/70">
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold block uppercase truncate">Lỗi Đã Xóa</span>
            <span className="text-xs sm:text-sm font-black text-emerald-700">{masteredMistakesCount} Lỗi</span>
          </div>
        </div>
      </div>

      {/* 2. THE 4 DEEP SPECIALIZED PRACTICE ARENAS (BALANCED HEIGHTS, ZERO-SLOP) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
        
        {/* Arena 1: 60s Speed Reflex Drill */}
        <div 
          onClick={() => {
            playSound('click');
            onOpenEndlessDrill();
          }}
          className="group bg-white hover:bg-sky-50/40 rounded-3xl p-5 border border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-[#005A9C] text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                ⚡
              </div>
              <span className="text-[11px] font-bold text-sky-700">
                Phản Xạ 60s
              </span>
            </div>

            <div className="mt-3.5 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#0070D1] transition-colors flex items-center justify-between">
                <span className="truncate">Đấu Trường Phản Xạ Siêu Tốc</span>
                <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed break-words">
                Rút ngẫu nhiên từ kho {totalCurriculumQuestions} câu hỏi theo 3 cấp độ (A1, B1, C1). Đếm ngược 60s, nhân điểm chuỗi đúng liên tiếp.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">
              Kỷ lục: <strong className="text-[#0070D1]">{profile.highestDrillScore || stats.highestDrillScore || 0}đ</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs shadow-2xs transition-all">
              Vào Luyện ➜
            </span>
          </div>
        </div>

        {/* Arena 2: Deep B2B Negotiation & Buyer Pitch Simulator */}
        <div 
          onClick={() => {
            playSound('click');
            if (onOpenPitchSimulator) {
              onOpenPitchSimulator();
            } else {
              onOpenEndlessDrill();
            }
          }}
          className="group bg-white hover:bg-emerald-50/40 rounded-3xl p-5 border border-slate-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                💼
              </div>
              <span className="text-[11px] font-bold text-emerald-700">
                Đàm Phán B2B
              </span>
            </div>

            <div className="mt-3.5 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-800 transition-colors flex items-center justify-between">
                <span className="truncate">Giả Lập Đàm Phán B2B</span>
                <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed break-words">
                Đối thoại đa hiệp cùng Giám đốc mua hàng quốc tế (Tokyo, London). Xử lý ép giá, hoài nghi độ kiềm nhân tạo, Incoterms và L/C.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800">
              Đối tác Nhật & Châu Âu
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-2xs transition-all">
              Đàm Phán ➜
            </span>
          </div>
        </div>

        {/* Arena 3: VikoVoice AI Pronunciation Coach */}
        <div 
          onClick={() => {
            playSound('click');
            onGoToVoiceCoach();
          }}
          className="group bg-white hover:bg-purple-50/40 rounded-3xl p-5 border border-slate-200/90 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-700 text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                🎙️
              </div>
              <span className="text-[11px] font-bold text-purple-700">
                Chấm Mic Từng Từ
              </span>
            </div>

            <div className="mt-3.5 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-purple-700 transition-colors flex items-center justify-between">
                <span className="truncate">VikoVoice AI • Luyện Âm B2B</span>
                <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed break-words">
                Luyện phát âm chuẩn xác các thuật ngữ Vikoda (Alkaline, Artesian, Bottling, Electrolytes). Bắt mic phân tích âm cuối theo thang điểm 100.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-purple-800">
              Chuẩn ngữ điệu bản ngữ
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs shadow-2xs transition-all">
              Luyện Mic ➜
            </span>
          </div>
        </div>

        {/* Arena 4: Daily Mistakes Vault */}
        <div 
          onClick={() => {
            playSound('click');
            onOpenDailyReview();
          }}
          className="group bg-white hover:bg-amber-50/40 rounded-3xl p-5 border border-slate-200/90 hover:border-amber-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                🔁
              </div>
              <span className={`text-[11px] font-bold ${unmasteredMistakesCount > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>
                {unmasteredMistakesCount > 0 ? `${unmasteredMistakesCount} câu cần ôn` : 'Đã sạch lỗi'}
              </span>
            </div>

            <div className="mt-3.5 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span className="truncate">Kho Lỗi Sai & Ôn Điểm Yếu</span>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed break-words">
                Tự động gom mọi câu làm sai từ 100 bài học và đấu trường. Luyện lặp ngắt quãng (Spaced Repetition) để xóa sạch lỗ hổng kiến thức.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-amber-900">
              Đã xóa {masteredMistakesCount} lỗi
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-2xs transition-all">
              Ôn Tập ➜
            </span>
          </div>
        </div>

      </div>

      {/* 3. ĐẤU TRƯỜNG ĐỐI KHÁNG 1V1 (DÀNH CHO THI ĐUA NỘI BỘ VIKODA) */}
      <div 
        onClick={() => {
          playSound('click');
          onOpenPvPArena();
        }}
        className="bg-gradient-to-r from-rose-500 via-rose-600 to-red-600 rounded-3xl p-4 text-white shadow-md border-b-4 border-rose-800 flex items-center justify-between gap-3 cursor-pointer hover:opacity-95 transition-all active:scale-98"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shrink-0">
            ⚔️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-black">Thách Đấu 1v1 Đồng Nghiệp</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-black uppercase">
                Elo {stats.arenaStats?.eloRating || 1200}
              </span>
            </div>
            <p className="text-xs text-rose-100 font-medium">
              5 câu hỏi phản xạ đối kháng trực tiếp, thi đua bảng vàng nội bộ Vikoda
            </p>
          </div>
        </div>
        <span className="px-3.5 py-2 rounded-2xl bg-white text-rose-600 font-black text-xs shadow-sm shrink-0">
          Thách Đấu ➜
        </span>
      </div>

    </div>
  );
};
