import React from 'react';
import { Compass, Mic, Sparkles, Swords, Mail } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (t: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'path', label: 'Lộ Trình', icon: Compass, desc: 'Bản đồ bài học' },
    { id: 'speaking', label: 'VikoVoice', icon: Mic, desc: 'Luyện phát âm AI' },
    { id: 'pitch', label: 'Pitch Deck', icon: Sparkles, desc: 'Chào hàng quốc tế' },
    { id: 'battle', label: 'Đấu Trí', icon: Swords, desc: 'Xử lý phản bác' },
    { id: 'email', label: 'Thư B2B', icon: Mail, desc: 'Mẫu thư xuất khẩu' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-200/90 shadow-lg px-2 py-1.5 select-none">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all cursor-pointer select-none active:translate-y-0.5 ${
                isActive
                  ? 'text-[#0070D1] font-black'
                  : 'text-slate-400 hover:text-slate-700 font-bold'
              }`}
              title={`Chuyển sang: ${tab.label} (${tab.desc})`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${
                isActive 
                  ? 'bg-sky-100 text-[#0070D1] shadow-2xs border border-sky-300' 
                  : 'bg-transparent'
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-black">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

