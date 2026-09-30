import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  Gem, 
  Zap, 
  Award, 
  Search, 
  Headphones, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Trophy,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { GamificationState, EmployeeProfile } from '../../types';
import { playSound, isStealthOfficeMode, setStealthOfficeMode, subscribeStealthMode } from '../../services/soundEffects';
import { 
  VOICE_OPTIONS, 
  getSelectedVoiceId, 
  subscribeVoiceChange,
  VoiceOptionId 
} from '../../services/speechService';
import { VoiceSelectorModal } from '../VoiceSelectorModal';

interface LaptopRightPanelProps {
  stats: GamificationState;
  profile: EmployeeProfile;
  onOpenArena: () => void;
  onOpenSOS: () => void;
  onOpenCommute: () => void;
  onOpenSearch: () => void;
  onOpenPortfolio: () => void;
  onOpenLeaderboard: () => void;
}

export const LaptopRightPanel: React.FC<LaptopRightPanelProps> = ({
  stats,
  profile,
  onOpenArena,
  onOpenSOS,
  onOpenCommute,
  onOpenSearch,
  onOpenPortfolio,
  onOpenLeaderboard,
}) => {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [currentVoice, setCurrentVoice] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isStealth, setIsStealth] = useState<boolean>(() => isStealthOfficeMode());

  useEffect(() => {
    const unsubVoice = subscribeVoiceChange((vId) => setCurrentVoice(vId));
    const unsubStealth = subscribeStealthMode((enabled) => setIsStealth(enabled));
    return () => {
      unsubVoice();
      unsubStealth();
    };
  }, []);

  const toggleStealth = () => {
    const nextVal = !isStealth;
    setIsStealth(nextVal);
    setStealthOfficeMode(nextVal);
  };

  const activeVoiceOption = VOICE_OPTIONS.find((v) => v.id === currentVoice) || VOICE_OPTIONS[0];

  return (
    <aside className="w-80 shrink-0 min-h-screen sticky top-0 p-5 space-y-4 border-l border-slate-200/80 bg-slate-50/50 select-none">
      
      {/* 1. Daily Stats Card (Streak & Gems) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
          Chỉ Số Đào Tạo Hôm Nay
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Streak */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Flame className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="text-base font-black text-amber-950 leading-none">{stats.streakDays} Ngày</div>
              <div className="text-[10px] text-amber-700 font-bold mt-0.5">Chuỗi liên tục</div>
            </div>
          </div>

          {/* Gems */}
          <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Gem className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="text-base font-black text-cyan-950 leading-none">{stats.gems}</div>
              <div className="text-[10px] text-cyan-700 font-bold mt-0.5">Khoáng chất</div>
            </div>
          </div>
        </div>

        {/* Level Rank */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Danh hiệu nội bộ:</span>
          <span className="text-[#0070D1] font-black">{stats.rank}</span>
        </div>
      </div>

      {/* 2. Quick Arena Challenge Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-4 text-white shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-black text-xs uppercase tracking-wide">
            <Zap className="w-4 h-4 fill-white" />
            <span>Arena Phản Xạ 60s</span>
          </div>
          <span className="text-[10px] font-extrabold bg-white/20 px-2 py-0.5 rounded-full">
            x3 XP
          </span>
        </div>
        <p className="text-xs text-amber-50 leading-snug">
          Thử thách phản xạ từ vựng xuất khẩu nhanh trong 60 giây.
        </p>
        <button
          onClick={() => {
            playSound('click');
            onOpenArena();
          }}
          className="w-full py-2 rounded-xl bg-white text-amber-950 font-black text-xs shadow-2xs hover:bg-amber-50 active:scale-98 transition-all cursor-pointer"
        >
          ⚡ Bắt Đầu Thử Thách Ngay
        </button>
      </div>

      {/* 3. Executive Toolset Shortcuts */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
          Công Cụ Điều Hành Bổ Trợ
        </div>

        <button
          onClick={() => {
            playSound('click');
            onOpenSOS();
          }}
          className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50 text-slate-800 transition-colors flex items-center gap-2.5 cursor-pointer group"
        >
          <span className="text-base group-hover:scale-110 transition-transform">🚨</span>
          <div>
            <div className="text-xs font-black text-slate-800">Cẩm Nang SOS 60 Giây</div>
            <div className="text-[10px] text-slate-400">Cứu nguy trước đàm phán VIP</div>
          </div>
        </button>

        <button
          onClick={() => {
            playSound('click');
            onOpenCommute();
          }}
          className="w-full text-left p-2.5 rounded-xl hover:bg-sky-50 text-slate-800 transition-colors flex items-center gap-2.5 cursor-pointer group"
        >
          <Headphones className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-xs font-black text-slate-800">Luyện Nghe Rảnh Tay</div>
            <div className="text-[10px] text-slate-400">Tự động phát khi đi xe</div>
          </div>
        </button>

        <button
          onClick={() => {
            playSound('click');
            onOpenSearch();
          }}
          className="w-full text-left p-2.5 rounded-xl hover:bg-indigo-50 text-slate-800 transition-colors flex items-center gap-2.5 cursor-pointer group"
        >
          <Search className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-xs font-black text-slate-800">Tra Cứu Bỏ Túi</div>
            <div className="text-[10px] text-slate-400">Thuật ngữ mỏ khoáng & B2B</div>
          </div>
        </button>

        <button
          onClick={() => {
            playSound('click');
            onOpenPortfolio();
          }}
          className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50 text-slate-800 transition-colors flex items-center gap-2.5 cursor-pointer group"
        >
          <Award className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-xs font-black text-slate-800">Chứng Chỉ Số CEO</div>
            <div className="text-[10px] text-slate-400">Ghi âm & Chứng nhận hoàn tất</div>
          </div>
        </button>
      </div>

      {/* 4. Audio & Office Stealth Settings */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs space-y-2 text-xs font-bold text-slate-700">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Âm Thanh & Giọng Đọc</span>
          <button
            onClick={() => setIsVoiceModalOpen(true)}
            className="text-[10px] font-bold text-[#0070D1] hover:underline"
          >
            Đổi giọng
          </button>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-xs truncate max-w-[150px]">{activeVoiceOption.flag} {activeVoiceOption.name}</span>
          <button
            onClick={toggleStealth}
            className={`p-1.5 rounded-lg border flex items-center gap-1 text-[11px] cursor-pointer ${
              isStealth 
                ? 'bg-rose-50 text-rose-600 border-rose-200' 
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {isStealth ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isStealth ? 'Tắt tiếng' : 'Bật tiếng'}</span>
          </button>
        </div>
      </div>

      <VoiceSelectorModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
      />
    </aside>
  );
};
