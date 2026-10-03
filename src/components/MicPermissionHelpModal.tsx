import React from 'react';
import { createPortal } from 'react-dom';
import { Lock, ShieldAlert, CheckCircle, RotateCw, X, Mic } from 'lucide-react';

interface MicPermissionHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export const MicPermissionHelpModal: React.FC<MicPermissionHelpModalProps> = ({
  isOpen,
  onClose,
  onRetry,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-rose-500 to-amber-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-black">Mở Khóa Quyền Micro</h3>
              <p className="text-xs text-white/80 font-medium">Chỉ mất 5 giây để kích hoạt lại</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Step Visual Guidance */}
        <div className="p-5 space-y-4">
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 font-medium">
            💡 Trình duyệt đang chặn micro. Hãy làm theo 2 bước bên dưới để tiếp tục luyện phát âm:
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="w-7 h-7 rounded-xl bg-[#0070D1] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                1
              </div>
              <div className="text-xs space-y-1">
                <p className="font-black text-slate-800 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-600 inline" />
                  Bấm vào biểu tượng Ổ Khóa hoặc Cài đặt
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Ở góc bên trái thanh địa chỉ trình duyệt web (cạnh đường dẫn URL).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="w-7 h-7 rounded-xl bg-[#0070D1] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                2
              </div>
              <div className="text-xs space-y-1">
                <p className="font-black text-slate-800 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-emerald-600 inline" />
                  Bật quyền "Microphone" sang Cho phép (Allow)
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Chuyển mục <strong>Microphone</strong> từ <em>Chặn</em> thành <strong>Cho phép (Allow)</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                onClose();
                onRetry();
              }}
              className="flex-1 py-3 px-4 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
            >
              <RotateCw className="w-4 h-4" />
              <span>Tôi Đã Bật, Thử Lại Ngay</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};
