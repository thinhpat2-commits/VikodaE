import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Volume2, 
  Copy, 
  Check, 
  RefreshCw, 
  Lightbulb
} from 'lucide-react';
import { translateToBoardroomEnglish, BoardroomTranslateResult } from '../services/geminiService';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  speechRate
}) => {
  const [inputText, setInputText] = useState<string>(
    'Tôi muốn giới thiệu với đối tác Nhật Bản rằng nước khoáng kiềm Vikoda có độ pH 9.0 hoàn toàn tự nhiên, không qua điện phân.'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<BoardroomTranslateResult | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    playSound('click');
    try {
      const data = await translateToBoardroomEnglish(inputText, 'Giới thiệu sản phẩm Vikoda với đối tác quốc tế');
      setResult(data);
      playSound('correct');
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    playSound('click');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePlay = (text: string, key: string) => {
    if (playingKey === key) {
      stopSpeech();
      setPlayingKey(null);
    } else {
      setPlayingKey(key);
      playSpeech(text, speechRate, 'en-US', () => setPlayingKey(null));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-sky-100 flex items-center justify-between bg-sky-50/50">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0066CC] to-[#A855F7] flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 leading-tight">
                AI Cố Vấn Vikoda Global
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Chuyển ý tưởng tiếng Việt sang tiếng Anh tự nhiên chỉ trong 2 giây
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          
          {/* Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Nhập câu tiếng Việt bạn muốn diễn đạt:
            </label>
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhập bất kỳ câu nào bạn muốn nói với khách..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0066CC] transition-colors"
            />
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap gap-1">
            {[
              'Giới thiệu mỏ Đảnh Thạnh 220m',
              'Giải thích tại sao nước kiềm tốt cho dạ dày',
              'Mời khách dùng thử chai thủy tinh cao cấp'
            ].map((preset, i) => (
              <button
                key={i}
                onClick={() => setInputText(preset)}
                className="text-[10px] font-semibold px-2 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0066CC] transition-colors border border-sky-100"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Translate Button */}
          <button
            disabled={isLoading || !inputText.trim()}
            onClick={handleTranslate}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#00A3E0] hover:opacity-95 text-white font-extrabold text-xs shadow-md shadow-sky-500/20 transition-all flex items-center justify-center space-x-1.5 btn-duo-primary disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Đang tinh chỉnh giọng văn...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Dịch Sang Tiếng Anh Chuẩn Doanh Nghiệp</span>
              </>
            )}
          </button>

          {/* Results */}
          {result && (
            <div className="space-y-3 pt-2 animate-fadeIn">
              
              {/* Option 1: Executive */}
              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-purple-900">
                    💼 Executive (Trang trọng / Sếp lớn & Đối tác quốc tế)
                  </span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handlePlay(result.executiveOption.english, 'exec')}
                      className={`p-1 rounded-full text-xs ${playingKey === 'exec' ? 'text-purple-700 font-bold' : 'text-slate-500'}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleCopy(result.executiveOption.english, 'exec')}
                      className="p-1 rounded-full text-slate-500"
                    >
                      {copiedKey === 'exec' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-900">"{result.executiveOption.english}"</p>
                <p className="text-[10px] text-slate-500">{result.executiveOption.nuance}</p>
              </div>

              {/* Option 2: Collaborative */}
              <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#0066CC]">
                    🤝 Collaborative (Giao tiếp cởi mở / Họp team)
                  </span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handlePlay(result.collaborativeOption.english, 'collab')}
                      className={`p-1 rounded-full text-xs ${playingKey === 'collab' ? 'text-[#0066CC] font-bold' : 'text-slate-500'}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleCopy(result.collaborativeOption.english, 'collab')}
                      className="p-1 rounded-full text-slate-500"
                    >
                      {copiedKey === 'collab' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-900">"{result.collaborativeOption.english}"</p>
                <p className="text-[10px] text-slate-500">{result.collaborativeOption.nuance}</p>
              </div>

              {/* Option 3: Concise */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-slate-800">
                    ⚡ Concise (Nhắn tin nhanh / Slack & Teams)
                  </span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handlePlay(result.conciseChatOption.english, 'chat')}
                      className={`p-1 rounded-full text-xs ${playingKey === 'chat' ? 'text-slate-900 font-bold' : 'text-slate-500'}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleCopy(result.conciseChatOption.english, 'chat')}
                      className="p-1 rounded-full text-slate-500"
                    >
                      {copiedKey === 'chat' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-900">"{result.conciseChatOption.english}"</p>
                <p className="text-[10px] text-slate-500">{result.conciseChatOption.nuance}</p>
              </div>

              {/* Cultural Caution */}
              {result.culturalCaution && (
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-start space-x-1.5">
                  <span className="text-base shrink-0">💡</span>
                  <span><strong>Lưu ý văn hóa: </strong>{result.culturalCaution}</span>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
