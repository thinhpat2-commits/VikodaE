import React from 'react';
import { 
  Briefcase, 
  Mail, 
  Mic, 
  MessageSquare, 
  BookOpen, 
  AlertTriangle, 
  Flame, 
  Sparkles,
  Volume2
} from 'lucide-react';
import { UserStats, UserLevel } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userStats: UserStats;
  userLevel: UserLevel;
  setUserLevel: (level: UserLevel) => void;
  speechRate: number;
  setSpeechRate: (rate: number) => void;
  onOpenAiModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userStats,
  userLevel,
  setUserLevel,
  speechRate,
  setSpeechRate,
  onOpenAiModal
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Lộ Trình', icon: Briefcase },
    { id: 'email', label: 'Email Studio', icon: Mail },
    { id: 'meeting', label: 'Họp & Thuyết Trình', icon: Mic },
    { id: 'roleplay', label: 'Tình Huống', icon: MessageSquare },
    { id: 'vocab', label: 'Từ Vựng Thực Chiến', icon: BookOpen },
    { id: 'mistakes', label: 'Sửa Lỗi Thường Gặp', icon: AlertTriangle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-white tracking-tight">BizSpeak</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Pro Work
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Tiếng Anh Công Sở Cho Người Đi Làm</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: Streak, Level, Audio Speed & AI Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Daily Streak */}
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold" title="Chuỗi ngày luyện tập liên tiếp">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{userStats.streakDays} ngày</span>
            </div>

            {/* Level Selector */}
            <div className="relative hidden lg:block">
              <select
                aria-label="Chọn trình độ"
                value={userLevel}
                onChange={(e) => setUserLevel(e.target.value as UserLevel)}
                className="bg-slate-800 text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-medium focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="A2-B1">Cấp độ A2-B1 (Cơ bản)</option>
                <option value="B2">Cấp độ B2 (Tự tin)</option>
                <option value="C1">Cấp độ C1 (Lãnh đạo)</option>
              </select>
            </div>

            {/* Audio Speed Control */}
            <div className="hidden sm:flex items-center space-x-1 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700/60 text-xs text-slate-300">
              <Volume2 className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => setSpeechRate(speechRate === 0.8 ? 1.0 : speechRate === 1.0 ? 1.2 : 0.8)}
                className="font-medium text-amber-400 hover:text-amber-300 transition-colors"
                title="Tốc độ đọc giọng bản xứ"
              >
                {speechRate}x
              </button>
            </div>

            {/* AI Assistant Quick Trigger */}
            <button
              onClick={onOpenAiModal}
              className="flex items-center space-x-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold px-3 py-1.5 rounded-lg text-xs shadow-md shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Cố Vấn</span>
              <span className="sm:hidden">AI</span>
            </button>

          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-slate-800/80 overflow-x-auto gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center py-1 px-2 rounded text-[11px] font-medium whitespace-nowrap ${
                  isActive ? 'text-amber-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
