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
  Clock
} from 'lucide-react';
import { playSound } from '../services/soundEffects';
import { GamificationState, EmployeeProfile } from '../types';

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
  const unmasteredMistakesCount = stats.mistakesVault
    ? stats.mistakesVault.filter((m) => !m.mastered).length
    : 0;

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-20 animate-in fade-in duration-200">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-slate-700/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-black text-cyan-300 uppercase tracking-widest border border-white/10">
            <Zap className="w-3.5 h-3.5 fill-cyan-300" />
            <span>Trung Tâm Luyện Tập & Đấu Trường</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            Nâng Cao Phản Xạ & Thực Chiến
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Chọn chế độ luyện tập chuyên sâu để củng cố kiến thức, so tài đối kháng 1v1 hoặc xóa bỏ triệt để các lỗi sai thường gặp.
          </p>
        </div>
      </div>

      {/* SECTION 1: CÁC CHẾ ĐỘ THỰC CHIẾN HÀNG ĐẦU (PRIMARY PRACTICE MODES) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Swords className="w-4 h-4 text-rose-500" />
            <span>Đấu Trường & Ôn Luyện Hằng Ngày</span>
          </div>
          <span className="text-[11px] font-bold text-slate-400">Được đề xuất mỗi ngày</span>
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
                HOT · Thi đấu
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-rose-700 transition-colors flex items-center gap-1.5">
                <span>Đấu Trường 1v1 PvP</span>
                <ChevronRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                So tài phản xạ 5 hiệp đối kháng trực tiếp với đồng nghiệp Vikoda. Xếp hạng Elo thăng hạng tuần.
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
                <span>Ôn Tập Nhanh 3 Phút</span>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                Kho gom các câu bạn từng làm sai. Áp dụng lặp lại ngắt quãng (Spaced Repetition) để nhớ vĩnh viễn.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-900">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>3 phút / phiên</span>
              </span>
              <span className="text-emerald-600 font-bold">+10 XP · +5 💎</span>
            </div>
          </div>

          {/* Card 3: Arena Phản Xạ 60s */}
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
                Tốc độ cao
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#0070D1] transition-colors flex items-center gap-1.5">
                <span>Arena Phản Xạ 60 Giây</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                Trả lời nhanh nhất có thể trong 60 giây. Càng chuỗi đúng liên tiếp càng nhân hệ số điểm cao.
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
                AI Voice
              </span>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-base font-black text-slate-900 group-hover:text-purple-700 transition-colors flex items-center gap-1.5">
                <span>VikoVoice AI Phát Âm</span>
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

      {/* SECTION 2: MÔ PHỎNG THỰC TẾ DOANH NGHIỆP (B2B ROLEPLAY & SIMULATORS) */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5 px-1">
          <Sparkles className="w-4 h-4 text-[#0070D1]" />
          <span>Mô Phỏng Tình Huống B2B & Thương Thảo</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Pitch Deck B2B */}
          <div
            onClick={() => {
              playSound('click');
              onGoToPitchDeck();
            }}
            className="bg-white hover:bg-sky-50/50 p-4 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🤝</span>
              <div>
                <h4 className="text-xs font-black text-slate-900">Pitch Deck B2B</h4>
                <p className="text-[10px] text-slate-400">Chào hàng & Thuyết trình</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#0070D1] font-bold">
              <span>Vào mô phỏng</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Buyer Objections Battle */}
          <div
            onClick={() => {
              playSound('click');
              onGoToBuyerBattle();
            }}
            className="bg-white hover:bg-sky-50/50 p-4 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🛡️</span>
              <div>
                <h4 className="text-xs font-black text-slate-900">Đấu Trí Phản Bác</h4>
                <p className="text-[10px] text-slate-400">Xử lý buyer khó tính</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#0070D1] font-bold">
              <span>Vào đối thoại</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Email Studio B2B */}
          <div
            onClick={() => {
              playSound('click');
              onGoToEmailStudio();
            }}
            className="bg-white hover:bg-sky-50/50 p-4 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">✉️</span>
              <div>
                <h4 className="text-xs font-black text-slate-900">Email Studio B2B</h4>
                <p className="text-[10px] text-slate-400">Thư thương mại chuẩn</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#0070D1] font-bold">
              <span>Mở thư viện</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 3: BỘ CÔNG CỤ CỨU NGUY & ĐÁNH GIÁ (UTILITIES & ASSESSMENT) */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎒</span>
          <div>
            <div className="font-black text-slate-800">Bộ Công Cụ Tiện Ích Bổ Trợ</div>
            <div className="text-[10px] text-slate-400">Hỗ trợ khẩn cấp trước cuộc họp và di chuyển</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              playSound('click');
              onOpenSOS();
            }}
            className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-rose-800 border border-rose-200 font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
          >
            <span>🚨 SOS 60s</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              onOpenCommute();
            }}
            className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-sky-50 text-sky-800 border border-sky-200 font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
          >
            <Headphones className="w-3.5 h-3.5 text-sky-600" />
            <span>Rảnh tay</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              onOpenPlacementTest();
            }}
            className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
          >
            <span>📝 Test 4 Kỹ Năng</span>
          </button>
        </div>
      </div>

    </div>
  );
};
