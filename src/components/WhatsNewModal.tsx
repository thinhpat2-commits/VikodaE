import React from 'react';
import { X, Sparkles, CheckCircle2, History, ShieldCheck, ArrowRight } from 'lucide-react';
import { CURRENT_APP_VERSION, CURRENT_BUILD_NUMBER, CURRENT_RELEASE_CODENAME, APP_CHANGELOG } from '../config/version';
import { playSound } from '../services/soundEffects';

interface WhatsNewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsNewModal: React.FC<WhatsNewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const currentRelease = APP_CHANGELOG[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-150 select-none">
      <div className="bg-white w-full max-w-lg rounded-3xl p-5 border-2 border-slate-200 border-b-6 border-b-slate-300 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#005A9C] via-[#0070D1] to-[#009FE3] text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              💎
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-slate-900">
                  Vikoda EdTech Platform
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-sky-100 text-[#0070D1] font-mono text-[10px] font-black">
                  v{CURRENT_APP_VERSION}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Bản dựng: {CURRENT_BUILD_NUMBER} • {CURRENT_RELEASE_CODENAME}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto flex-1 space-y-4 pr-1 text-xs">
          
          {/* Current Version Card */}
          <div className="p-4 bg-gradient-to-br from-sky-50 via-cyan-50/50 to-white rounded-2xl border-2 border-sky-200/80 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase text-sky-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#0070D1]" />
                Điểm Nổi Bật Bản v{currentRelease.version} ({currentRelease.releaseDate})
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase">
                Hiện Tại
              </span>
            </div>

            <div className="space-y-2">
              {currentRelease.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-700 font-medium leading-relaxed">
                  <span className="text-sm shrink-0 mt-0.5">{h.slice(0, 2)}</span>
                  <span className="text-[11.5px]">{h.slice(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Releases History */}
          <div className="space-y-2 pt-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
              <History className="w-3.5 h-3.5" />
              Lịch sử các phiên bản trước:
            </span>

            {APP_CHANGELOG.slice(1).map((item) => (
              <div key={item.version} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-black text-slate-800 text-[11px]">
                    Phiên bản v{item.version} • {item.codename}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{item.releaseDate}</span>
                </div>
                <div className="space-y-1 pl-2 border-l-2 border-slate-300">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="text-[10.5px] text-slate-600 font-medium truncate">
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="w-full py-2.5 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] font-black text-xs text-white uppercase tracking-wider cursor-pointer shadow-md transition-all active:scale-98"
        >
          Đã Nắm Rõ • Tiếp Tục Học Tập
        </button>

      </div>
    </div>
  );
};
