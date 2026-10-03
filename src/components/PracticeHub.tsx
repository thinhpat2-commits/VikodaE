import React, { useState } from 'react';
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
  Clock,
  Target,
  CheckCircle2,
  SlidersHorizontal,
  Info,
  Radio,
  FileText
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
  onGoToPitchDeck: () => void;
  onGoToBuyerBattle: () => void;
  onGoToEmailStudio: () => void;
  onOpenSOS: () => void;
  onOpenCommute: () => void;
  onOpenSearch: () => void;
  onOpenPlacementTest: () => void;
  onOpenProfile?: () => void;
}

type PracticeCategory = 'all' | 'arena' | 'speech' | 'b2b' | 'toolkit';

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
  onOpenProfile,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PracticeCategory>('all');

  const completedUnitIds = stats.completedNodeIds || [];
  const unitStars = stats.unitStars || {};

  const totalUnitsCount = VIKODA_CURRICULUM.length;
  const totalQuestionsCount = VIKODA_CURRICULUM.reduce((sum, u) => sum + (u.exercises ? u.exercises.length : 0), 0);
  const totalCompletedUnits = completedUnitIds.length;
  const threeStarUnitsCount = Object.values(unitStars).filter((s) => s === 3).length;
  const masteredMistakesCount = stats.mistakesVault
    ? stats.mistakesVault.filter((m) => m.mastered).length
    : 0;
  const unmasteredMistakesCount = stats.mistakesVault
    ? stats.mistakesVault.filter((m) => !m.mastered).length
    : 0;

  const handleOpenReport = () => {
    playSound('click');
    if (onOpenProfile) {
      onOpenProfile();
    } else {
      onOpenPlacementTest();
    }
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto pb-24 animate-in fade-in duration-200 select-none">
      
      {/* 1. COMPACT, ACTION-FOCUSED HEADER BAR */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-slate-200/90 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#005A9C] to-[#009FE3] text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              ⚡
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Kho Luyện Tập & Đấu Trường Thực Chiến</span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                8 Chế độ thực chiến chọn lọc: Đấu 1v1 • Mic AI • Sát hạch B2B • Soạn thư
              </p>
            </div>
          </div>

          {/* Quick Benchmark Button */}
          <button
            type="button"
            onClick={handleOpenReport}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 font-black text-xs shadow-2xs cursor-pointer active:scale-95 transition-all"
            title="Xem toàn bộ Bảng Đo Lường Chuẩn Quốc Tế (CEFR • TOEIC • IELTS)"
          >
            <Award className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
            <span>Thước Đo CEFR / TOEIC</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
          </button>
        </div>

        {/* Dynamic Status Strip (Clean & Non-intrusive) */}
        <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-600 flex-wrap gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span>📘 Bài học: <strong className="text-[#0070D1]">{totalCompletedUnits}/{totalUnitsCount}</strong></span>
            <span className="text-slate-300">•</span>
            <span>🎯 Kho câu: <strong className="text-emerald-600">{totalQuestionsCount}+ câu</strong></span>
            <span className="text-slate-300">•</span>
            <span>🎙️ Mẫu câu AI: <strong className="text-purple-600">50 câu</strong></span>
            <span className="text-slate-300">•</span>
            <span>⭐ Đạt 3 sao: <strong className="text-amber-600">{threeStarUnitsCount} bài</strong></span>
          </div>

          <span className="text-[10px] text-slate-400 font-medium hidden md:inline">
            Chuẩn quốc tế EdTech
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar pt-1">
          {[
            { id: 'all', label: 'Tất Cả (8)', icon: Sparkles },
            { id: 'arena', label: '⚔️ Đấu Trường (3)', icon: Swords },
            { id: 'speech', label: '🎙️ Huấn Luyện AI (2)', icon: Mic },
            { id: 'b2b', label: '💼 Thực Chiến B2B (2)', icon: Zap },
            { id: 'toolkit', label: '🧰 Tiện Ích Bỏ Túi (3)', icon: Headphones },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playSound('click');
                setSelectedCategory(cat.id as PracticeCategory);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                selectedCategory === cat.id
                  ? 'bg-[#0070D1] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. CORE ARENAS & REAL-TIME COMBAT (PHẦN 1: ĐẤU TRƯỜNG & TỐC ĐỘ) */}
      {(selectedCategory === 'all' || selectedCategory === 'arena') && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Swords className="w-4 h-4 text-rose-500" />
              <span>Đấu Trường Đối Kháng & Phản Xạ Nhanh</span>
            </h2>
            <span className="text-[11px] font-bold text-slate-400">3 chế độ thi đấu</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            
            {/* Card 1: 1v1 PvP Arena */}
            <div 
              onClick={() => {
                playSound('click');
                onOpenPvPArena();
              }}
              className="group bg-white hover:bg-rose-50/40 rounded-3xl p-4.5 border-2 border-rose-200/90 border-b-4 border-b-rose-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    ⚔️
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase tracking-wider">
                    PvP 1v1
                  </span>
                </div>

                <div className="mt-3 space-y-1">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-rose-700 transition-colors flex items-center gap-1">
                    <span>Đấu Trường 1v1 Đồng Nghiệp</span>
                    <ChevronRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    So tài phản xạ 5 hiệp đối kháng trực tiếp. Cạnh tranh bảng xếp hạng Elo nội bộ Vikoda.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-rose-800 font-mono">
                  Elo {stats.arenaStats?.eloRating || 1200}
                </span>
                <span className="px-3 py-1 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-[11px] shadow-2xs group-hover:shadow-xs transition-all">
                  Vào Đấu ➜
                </span>
              </div>
            </div>

            {/* Card 2: 60s Speed Drill */}
            <div 
              onClick={() => {
                playSound('click');
                onOpenEndlessDrill();
              }}
              className="group bg-white hover:bg-cyan-50/40 rounded-3xl p-4.5 border-2 border-cyan-200/90 border-b-4 border-b-cyan-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    ⚡
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-black uppercase tracking-wider">
                    Phản Xạ 60s
                  </span>
                </div>

                <div className="mt-3 space-y-1">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#0070D1] transition-colors flex items-center gap-1">
                    <span>Đấu Trường Phản Xạ 60s</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    Trả lời nhanh không giới hạn trong 60 giây theo 3 cấp độ (A1, B1, C1). Rèn phản xạ siêu tốc.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600">
                  Kỷ lục: <strong className="text-[#0070D1]">{profile.highestDrillScore || stats.highestDrillScore || 0}đ</strong>
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-[11px] shadow-2xs group-hover:shadow-xs transition-all">
                  Bắt Đầu ➜
                </span>
              </div>
            </div>

            {/* Card 3: Daily Mistakes Vault */}
            <div 
              onClick={() => {
                playSound('click');
                onOpenDailyReview();
              }}
              className="group bg-white hover:bg-amber-50/40 rounded-3xl p-4.5 border-2 border-amber-200/90 border-b-4 border-b-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
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
                  <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center gap-1">
                    <span>Kho Lỗi Sai & Ôn Điểm Yếu</span>
                    <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    Tự động lưu các câu làm sai. Luyện lại định kỳ ngắt quãng để ghi nhớ vĩnh viễn và không tái phạm.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900">
                  Đã xóa {masteredMistakesCount} lỗi
                </span>
                <span className="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[11px] shadow-2xs group-hover:shadow-xs transition-all">
                  Ôn Tập ➜
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 3. AI SPEECH & PRONUNCIATION COACHING (PHẦN 2: HUẤN LUYỆN VIÊN AI) */}
      {(selectedCategory === 'all' || selectedCategory === 'speech') && (
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Mic className="w-4 h-4 text-purple-600" />
              <span>Huấn Luyện Viên Phát Âm AI & Thuyết Trình</span>
            </h2>
            <span className="text-[11px] font-bold text-slate-400">Chấm mic từng từ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* VikoVoice AI Coach */}
            <div 
              onClick={() => {
                playSound('click');
                onGoToVoiceCoach();
              }}
              className="group bg-white hover:bg-purple-50/40 rounded-3xl p-5 border-2 border-purple-200/90 border-b-4 border-b-purple-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    🎙️
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black uppercase tracking-wider">
                    50 Mẫu Câu AI
                  </span>
                </div>

                <div className="mt-3.5 space-y-1">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-purple-700 transition-colors flex items-center gap-1.5">
                    <span>VikoVoice AI • Luyện Phát Âm B2B</span>
                    <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Luyện 50 mẫu câu ngoại giao chuẩn Oxford. AI bắt âm micro trực tiếp, phân tích âm đuôi (/s/, /z/, /t/, /d/) và chấm điểm 1–100%.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-purple-800">
                  Chấm điểm chuẩn bản ngữ
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs shadow-2xs group-hover:shadow-xs transition-all">
                  Luyện Nói Mic ➜
                </span>
              </div>
            </div>

            {/* Pitch Deck Presentation Simulator */}
            <div 
              onClick={() => {
                playSound('click');
                onGoToPitchDeck();
              }}
              className="group bg-white hover:bg-sky-50/40 rounded-3xl p-5 border-2 border-sky-200/90 border-b-4 border-b-sky-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    🤝
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-black uppercase tracking-wider">
                    Pitch Deck 3 Phút
                  </span>
                </div>

                <div className="mt-3.5 space-y-1">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#0070D1] transition-colors flex items-center gap-1.5">
                    <span>Sát Hạch Pitch Deck Doanh Nghiệp</span>
                    <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    10 Slide mô phỏng bài thuyết trình mỏ khoáng Đảnh Thạnh 220m, độ kiềm tự nhiên pH 9.0 và chứng nhận an toàn quốc tế.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-sky-800">
                  10 Slide chuẩn thương vụ
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs shadow-2xs group-hover:shadow-xs transition-all">
                  Thuyết Trình ➜
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 4. B2B & EXPORT NEGOTIATION WORKSHOP (PHẦN 3: THỰC CHIẾN THƯƠNG MẠI B2B) */}
      {(selectedCategory === 'all' || selectedCategory === 'b2b') && (
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Thực Chiến B2B, HORECA 5 Sao & Xuất Khẩu</span>
            </h2>
            <span className="text-[11px] font-bold text-slate-400">Kịch bản đối thoại thực tế</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Buyer Objections Battle */}
            <div 
              onClick={() => {
                playSound('click');
                onGoToBuyerBattle();
              }}
              className="group bg-white hover:bg-emerald-50/40 rounded-3xl p-5 border-2 border-emerald-200/90 border-b-4 border-b-emerald-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    🛡️
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                    Đối Thoại Gay Gắt
                  </span>
                </div>

                <div className="mt-3.5 space-y-1">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-800 transition-colors flex items-center gap-1.5">
                    <span>Đấu Trí Xử Lý Từ Chối Đối Tác</span>
                    <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    10 Tình huống đối đầu gay gắt với Giám đốc Thu mua quốc tế: chê giá cao, đòi chiết khấu 50%, đòi kiểm định phòng lab Tokyo.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800">
                  10 Tình huống ngoại giao
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-2xs group-hover:shadow-xs transition-all">
                  Vào Đấu Trí ➜
                </span>
              </div>
            </div>

            {/* Export Email Studio */}
            <div 
              onClick={() => {
                playSound('click');
                onGoToEmailStudio();
              }}
              className="group bg-white hover:bg-indigo-50/40 rounded-3xl p-5 border-2 border-indigo-200/90 border-b-4 border-b-indigo-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    ✉️
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase tracking-wider">
                    12 Mẫu Quốc Tế
                  </span>
                </div>

                <div className="mt-3.5 space-y-1">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-indigo-800 transition-colors flex items-center gap-1.5">
                    <span>Xưởng Soạn Thảo Thư Ngoại Thương</span>
                    <ChevronRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Kho 12 mẫu thư thương mại chuẩn mực quốc tế: Incoterms 2020 (FOB Da Nang, CIF Tokyo), thanh toán L/C, giải quyết khiếu nại vỡ hàng.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-800">
                  Chuẩn mực Incoterms 2020
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-2xs group-hover:shadow-xs transition-all">
                  Soạn Thư ➜
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 5. EXECUTIVE POCKET TOOLKITS (PHẦN 4: TIỆN ÍCH BỎ TÚI CẤP TỐC) */}
      {(selectedCategory === 'all' || selectedCategory === 'toolkit') && (
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Headphones className="w-4 h-4 text-sky-600" />
              <span>Tiện Ích Ngoại Giao Bỏ Túi Cấp Tốc</span>
            </h2>
            <span className="text-[11px] font-bold text-slate-400">Dùng ngay khi cần</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* SOS 60s */}
            <div
              onClick={() => {
                playSound('click');
                onOpenSOS();
              }}
              className="group bg-white hover:bg-rose-50/50 p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                  🚨
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-rose-700 truncate">SOS Phòng Họp 60s</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">Cứu nguy khi họp trực tuyến</p>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-rose-600 font-bold">
                <span>Mở Cứu Nguy</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Commute Podcast */}
            <div
              onClick={() => {
                playSound('click');
                onOpenCommute();
              }}
              className="group bg-white hover:bg-sky-50/50 p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 text-[#0070D1] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                  🎧
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-[#0070D1] truncate">Podcast Shadowing</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">Luyện nghe khi đi xe/di chuyển</p>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#0070D1] font-bold">
                <span>Bật Podcast</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Pocket Search */}
            <div
              onClick={() => {
                playSound('click');
                onOpenSearch();
              }}
              className="group bg-white hover:bg-emerald-50/50 p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                  🔍
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-black text-slate-900 group-hover:text-emerald-700 truncate">Tra Cứu Bỏ Túi</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">Từ vựng khoáng kiềm & câu mẫu</p>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-600 font-bold">
                <span>Tra Cứu Nhanh</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
