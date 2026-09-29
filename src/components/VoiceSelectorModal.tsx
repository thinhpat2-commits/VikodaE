import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Volume2, Play, Check, X } from 'lucide-react';
import { 
  VOICE_OPTIONS, 
  VoiceOptionId, 
  getSelectedVoiceId, 
  setSelectedVoiceId, 
  previewVoiceSample,
  stopSpeech,
  subscribeVoiceChange
} from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface VoiceSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVoice?: (voiceId: VoiceOptionId) => void;
}

export const VoiceSelectorModal: React.FC<VoiceSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectVoice,
}) => {
  const [currentVoice, setCurrentVoice] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [playingId, setPlayingId] = useState<VoiceOptionId | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync state whenever modal opens or global voice changes
  useEffect(() => {
    if (isOpen) {
      setCurrentVoice(getSelectedVoiceId());
    }
  }, [isOpen]);

  useEffect(() => {
    const unsubscribe = subscribeVoiceChange((newVoiceId) => {
      setCurrentVoice(newVoiceId);
    });
    return unsubscribe;
  }, []);

  if (!isOpen || !mounted || typeof document === 'undefined') return null;

  const handleSelect = (vId: VoiceOptionId) => {
    playSound('click');
    setSelectedVoiceId(vId);
    setCurrentVoice(vId);
    if (onSelectVoice) {
      onSelectVoice(vId);
    }
    // Preview briefly so user hears confirmation
    previewVoiceSample(vId, () => setPlayingId(null));
    setPlayingId(vId);
    // Smooth auto-dismiss after selection
    setTimeout(() => {
      onClose();
    }, 350);
  };

  const handlePreviewOnly = (vId: VoiceOptionId, e: React.MouseEvent) => {
    e.stopPropagation();
    playSound('click');
    if (playingId === vId) {
      stopSpeech();
      setPlayingId(null);
    } else {
      setPlayingId(vId);
      previewVoiceSample(vId, () => {
        setPlayingId(null);
      });
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
      onClick={() => {
        stopSpeech();
        onClose();
      }}
    >
      <div 
        className="bg-white w-full max-w-[340px] rounded-2xl p-4 border border-slate-200 shadow-2xl space-y-3 relative m-auto animate-in fade-in zoom-in-95 duration-150"
        style={{
          maxHeight: 'calc(100dvh - 32px)',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Header */}
        <div className="flex items-center justify-between border-b pb-2.5 border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#0070D1] flex items-center justify-center shrink-0">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 leading-tight">
                Chọn Giọng Đọc AI
              </h3>
              <p className="text-[10px] text-slate-500 font-medium">
                3 giọng đọc chuẩn phát âm quốc tế
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Voice Options */}
        <div className="space-y-2">
          {VOICE_OPTIONS.map((voice) => {
            const isSelected = currentVoice === voice.id;
            const isPlaying = playingId === voice.id;

            return (
              <div
                key={voice.id}
                onClick={() => handleSelect(voice.id)}
                className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between active:scale-[0.98] ${
                  isSelected
                    ? 'bg-sky-50/90 border-[#009FE3] shadow-xs'
                    : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-slate-50'
                }`}
              >
                {/* Left: Flag & Details */}
                <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                  <span className="text-2xl shrink-0 leading-none">{voice.flag}</span>
                  <div className="min-w-0 text-left">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-black text-slate-900 leading-tight">
                        {voice.name}
                      </span>
                      {isSelected && (
                        <span className="text-[9px] font-black text-[#0070D1] bg-sky-100 px-1.5 py-0.5 rounded-md leading-none">
                          Đang chọn
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium leading-tight truncate mt-0.5">
                      {voice.accent}
                    </div>
                  </div>
                </div>

                {/* Right: Checkmark & Preview */}
                <div className="flex items-center space-x-1.5 shrink-0">
                  <button
                    onClick={(e) => handlePreviewOnly(voice.id, e)}
                    className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      isPlaying
                        ? 'bg-amber-400 text-slate-900 border-amber-500 animate-pulse'
                        : 'bg-slate-50 hover:bg-sky-100 text-[#0070D1] border-slate-200'
                    }`}
                    title="Nghe thử phát âm"
                    aria-label={`Nghe thử giọng ${voice.name}`}
                  >
                    <Play className={`w-3.5 h-3.5 fill-current ${isPlaying ? 'animate-spin' : ''}`} />
                  </button>

                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-[#0070D1] text-white' : 'border border-slate-300'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-1">
          <button
            onClick={() => {
              stopSpeech();
              playSound('click');
              onClose();
            }}
            className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase cursor-pointer transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
