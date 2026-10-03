import React from 'react';
import { Volume2 } from 'lucide-react';
import { LiveCircularMicButton } from './LiveCircularMicButton';

export interface SpeechPracticeControllerProps {
  isRecording: boolean;
  isPlayingAudio?: boolean;
  liveInterimText?: string;
  errorMessage?: string;
  onStartSpeaking: () => void;
  onPlaySampleAudio: (rate?: number) => void;
  speechRate?: number;
  sampleAudioDisabled?: boolean;
  instructionText?: string;
}

/**
 * Unified Voice Controller (SSOT for all Speaking Exercises)
 * Eliminates duplicate markup, ensures consistent responsive layout and visualizer.
 */
export const SpeechPracticeController: React.FC<SpeechPracticeControllerProps> = ({
  isRecording,
  isPlayingAudio = false,
  liveInterimText = '',
  errorMessage = '',
  onStartSpeaking,
  onPlaySampleAudio,
  speechRate = 1.0,
  sampleAudioDisabled = false,
  instructionText = 'Nhấn vào micro để luyện đọc (Nói xong hệ thống tự chấm điểm)',
}) => {
  return (
    <div className="space-y-3 py-1 max-w-md mx-auto w-full text-center">
      {/* Central 3-Button Control Bar */}
      <div className="flex items-center justify-center gap-6 py-2">
        {/* Sample Audio Button (Normal Speed) */}
        <button
          onClick={() => onPlaySampleAudio(speechRate)}
          disabled={sampleAudioDisabled || isRecording}
          className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer shadow-2xs active:scale-95 ${
            isPlayingAudio
              ? 'bg-[#0070D1] text-white shadow-md ring-2 ring-sky-300'
              : 'bg-sky-50 hover:bg-sky-100 text-[#0070D1] border-2 border-sky-200'
          } ${sampleAudioDisabled || isRecording ? 'opacity-50 cursor-not-allowed' : ''}`}
          title="Nghe phát âm chuẩn của người bản xứ"
        >
          <Volume2 className="w-5 h-5" />
          <span className="text-[9px] font-black uppercase tracking-tight">Nghe Mẫu</span>
        </button>

        {/* Circular Live Mic with Real-Time Acoustic Ripple Waves */}
        <LiveCircularMicButton
          isRecording={isRecording}
          onClick={onStartSpeaking}
          size="lg"
        />

        {/* Slow Sample Audio Button (0.75x) */}
        <button
          onClick={() => onPlaySampleAudio(0.75)}
          disabled={sampleAudioDisabled || isRecording}
          className={`w-14 h-14 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 border-2 border-slate-200 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs ${
            sampleAudioDisabled || isRecording ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          title="Nghe phát âm tốc độ chậm 0.75x"
        >
          <span className="text-base leading-none">🐢</span>
          <span className="text-[9px] font-black uppercase tracking-tight">Chậm 0.75x</span>
        </button>
      </div>

      {/* Dynamic Status Guidance & Real-time Live Words */}
      {isRecording ? (
        <div className="space-y-2 animate-in fade-in">
          {liveInterimText ? (
            <div className="inline-block px-4 py-2 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 font-bold text-xs shadow-xs animate-pulse">
              <span className="text-[10px] text-amber-700 uppercase block font-black mb-0.5">
                🎙️ Đang nghe giọng bạn:
              </span>
              "{liveInterimText}"
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Micro đang mở! Hãy đọc to câu tiếng Anh ở trên</span>
            </div>
          )}
          <p className="text-[11px] text-slate-500 font-medium">
            ⚡ Đọc xong hệ thống sẽ <strong>tự động chấm điểm</strong> (không cần bấm nộp)
          </p>
        </div>
      ) : (
        <p className="text-xs text-slate-500 font-bold">
          {instructionText}
        </p>
      )}

      {/* Error Message Warning Banner */}
      {errorMessage && (
        <div className="p-3 rounded-2xl bg-rose-50 border-2 border-rose-200 text-xs text-rose-900 font-medium space-y-1 text-center animate-in fade-in max-w-sm mx-auto">
          <p className="font-bold">⚠️ {errorMessage}</p>
          <p className="text-[11px] text-slate-500">
            Gợi ý: Nhấp vào biểu tượng micro trên thanh địa chỉ trình duyệt để cấp quyền.
          </p>
        </div>
      )}
    </div>
  );
};
