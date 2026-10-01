import React from 'react';
import { Compass, Swords, Trophy, User, Zap } from 'lucide-react';
import { playSound } from '../services/soundEffects';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (t: string) => void;
  onOpenPvPArena?: () => void;
  onOpenLeaderboard?: () => void;
  onOpenProfile?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  activeTab, 
  setActiveTab,
  onOpenPvPArena,
  onOpenLeaderboard,
  onOpenProfile
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-200/90 shadow-lg px-2 py-1.5 select-none">
      <div className="max-w-md mx-auto flex items-center justify-around">
        
        {/* Tab 1: Learn (Lộ Trình) */}
        <button
          onClick={() => {
            playSound('click');
            setActiveTab('path');
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all cursor-pointer ${
            activeTab === 'path'
              ? 'text-[#0070D1] font-black'
              : 'text-slate-400 hover:text-slate-700 font-bold'
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${
            activeTab === 'path' 
              ? 'bg-sky-100 text-[#0070D1] shadow-2xs border border-sky-300' 
              : 'bg-transparent'
          }`}>
            <Compass className={`w-5 h-5 ${activeTab === 'path' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-black">Lộ Trình</span>
        </button>

        {/* Tab 2: Practice Hub (Luyện Tập) */}
        <button
          onClick={() => {
            playSound('click');
            setActiveTab('practice');
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all cursor-pointer ${
            activeTab === 'practice'
              ? 'text-[#0070D1] font-black'
              : 'text-slate-400 hover:text-slate-700 font-bold'
          }`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${
            activeTab === 'practice' 
              ? 'bg-sky-100 text-[#0070D1] shadow-2xs border border-sky-300' 
              : 'bg-transparent'
          }`}>
            <Zap className={`w-5 h-5 ${activeTab === 'practice' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-black">Luyện Tập</span>
        </button>

        {/* Tab 3: 1v1 PvP Arena (Đấu Trường) */}
        <button
          onClick={() => {
            playSound('click');
            if (onOpenPvPArena) onOpenPvPArena();
          }}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all cursor-pointer text-rose-600 hover:text-rose-700 font-bold"
        >
          <div className="p-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 shadow-2xs">
            <Swords className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-black">Đấu 1v1</span>
        </button>

        {/* Tab 4: Leaderboard (Bảng Vàng) */}
        <button
          onClick={() => {
            playSound('click');
            if (onOpenLeaderboard) onOpenLeaderboard();
          }}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all cursor-pointer text-slate-400 hover:text-slate-700 font-bold"
        >
          <div className="p-1.5 rounded-xl bg-transparent">
            <Trophy className="w-5 h-5 stroke-2 text-amber-500" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-black">Bảng Vàng</span>
        </button>

        {/* Tab 5: Profile (Hồ Sơ) */}
        <button
          onClick={() => {
            playSound('click');
            if (onOpenProfile) onOpenProfile();
          }}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all cursor-pointer text-slate-400 hover:text-slate-700 font-bold"
        >
          <div className="p-1.5 rounded-xl bg-transparent">
            <User className="w-5 h-5 stroke-2" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight font-black">Hồ Sơ</span>
        </button>

      </div>
    </nav>
  );
};
