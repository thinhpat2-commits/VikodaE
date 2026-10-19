import React from 'react';
import { createPortal } from 'react-dom';
import { X, MessageSquare } from 'lucide-react';
import { RoleplaySimulation } from './RoleplaySimulation';
import { playSound } from '../services/soundEffects';

interface RoleplayModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
  onAwardXpAndGems?: (xp: number, gems: number) => void;
}

export const RoleplayModal: React.FC<RoleplayModalProps> = ({
  isOpen,
  onClose,
  speechRate,
  onAwardXpAndGems,
}) => {
  if (!isOpen) return null;

  const handleCompleteScenario = (_scenarioId: string, score: number) => {
    if (onAwardXpAndGems) {
      const earnedXp = Math.min(50, Math.round(score * 0.5));
      const earnedGems = score >= 80 ? 15 : 5;
      onAwardXpAndGems(earnedXp, earnedGems);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-150 select-none">
      <div className="bg-white w-full max-w-2xl rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-400 shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-xs">
              🎭
            </div>
            <div>
              <h2 className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
                <span>Mô Phỏng Hội Thoại & Đàm Thoại Công Sở</span>
                <span className="px-1.5 py-0.5 rounded-full bg-amber-500/30 text-amber-300 text-[10px] font-black uppercase">
                  Roleplay
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 font-medium">
                Xử lý tình huống tương tác thực tế cùng sếp, đồng nghiệp và đối tác
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-slate-50/50">
          <RoleplaySimulation
            speechRate={speechRate}
            onCompleteScenario={handleCompleteScenario}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
