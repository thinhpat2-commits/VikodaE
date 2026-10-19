import React from 'react';
import { createPortal } from 'react-dom';
import { X, Mail } from 'lucide-react';
import { ExportEmailStudio } from './ExportEmailStudio';
import { playSound } from '../services/soundEffects';

interface ExportEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
}

export const ExportEmailModal: React.FC<ExportEmailModalProps> = ({
  isOpen,
  onClose,
  speechRate,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-150 select-none">
      <div className="bg-white w-full max-w-2xl rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-400 shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-[#0070D1] flex items-center justify-center text-white font-black text-sm shadow-xs">
              ✉️
            </div>
            <div>
              <h2 className="text-sm font-black tracking-tight text-white flex items-center gap-1.5">
                <span>Xưởng Email & Báo Giá Xuất Khẩu Vikoda</span>
                <span className="px-1.5 py-0.5 rounded-full bg-sky-500/30 text-sky-300 text-[10px] font-black uppercase">
                  B2B Studio
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 font-medium">
                Chào hàng Tokyo/London, báo giá CIF/FOB, nộp chứng chỉ FDA & Điền nhanh biến số
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
          <ExportEmailStudio speechRate={speechRate} />
        </div>
      </div>
    </div>,
    document.body
  );
};
