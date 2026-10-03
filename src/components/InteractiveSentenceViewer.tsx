import React, { useState } from 'react';
import { Volume2, Sparkles, X } from 'lucide-react';
import { playSingleWord, playSpeech, getWordPhonetic } from '../services/speechService';

interface InteractiveSentenceViewerProps {
  sentence: string;
  translation?: string;
  highlightWords?: string[];
  onPlayFullSentence?: () => void;
  className?: string;
}

export const InteractiveSentenceViewer: React.FC<InteractiveSentenceViewerProps> = ({
  sentence,
  translation,
  className = '',
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [activePhonetic, setActivePhonetic] = useState<{ ipa: string; tip?: string } | null>(null);

  if (!sentence) return null;

  // Split sentence into words preserving punctuation for display
  const tokens = sentence.split(/(\s+)/);

  const handleWordClick = (token: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanWord = token.replace(/[^a-zA-Z0-9']/g, '').trim();
    if (!cleanWord) return;

    setSelectedWord(cleanWord);
    const phonetic = getWordPhonetic(cleanWord);
    setActivePhonetic(phonetic);

    // Play instant audio of this word
    playSingleWord(cleanWord, 0.85);
  };

  return (
    <div className={`space-y-2.5 text-center ${className}`}>
      {/* Interactive Word Chips */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-3 sm:p-4 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-2xs">
        {tokens.map((token, idx) => {
          const isWhitespace = /^\s+$/.test(token);
          if (isWhitespace) return <span key={idx} className="w-1" />;

          const cleanWord = token.replace(/[^a-zA-Z0-9']/g, '').trim();
          const isWord = Boolean(cleanWord);
          const isSelected = selectedWord?.toLowerCase() === cleanWord.toLowerCase();

          if (!isWord) {
            return (
              <span key={idx} className="text-slate-500 font-bold text-base sm:text-lg">
                {token}
              </span>
            );
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => handleWordClick(token, e)}
              className={`group relative px-2.5 py-1 rounded-xl text-base sm:text-lg font-black transition-all cursor-pointer select-none active:scale-95 ${
                isSelected
                  ? 'bg-[#0070D1] text-white shadow-md -translate-y-0.5 ring-2 ring-sky-300'
                  : 'bg-white hover:bg-sky-50 text-slate-800 border border-slate-200 hover:border-sky-300 shadow-2xs'
              }`}
              title={`Bấm để nghe riêng từ "${cleanWord}" và xem phiên âm IPA`}
            >
              <span>{token}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-sky-400 ring-2 ring-white" />
            </button>
          );
        })}
      </div>

      {/* Floating Word IPA Card (When a word is tapped) */}
      {selectedWord && activePhonetic && (
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-sky-50 border border-sky-300 text-sky-950 text-xs shadow-md animate-in fade-in slide-in-from-top-1">
          <button
            onClick={() => playSingleWord(selectedWord, 0.8)}
            className="w-7 h-7 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-2xs active:scale-90"
            title="Nghe lại từ này"
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>

          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-slate-900 text-sm">{selectedWord}</span>
              <span className="font-mono text-xs font-bold text-[#0070D1] bg-white px-2 py-0.5 rounded-lg border border-sky-200">
                {activePhonetic.ipa}
              </span>
            </div>
            {activePhonetic.tip && (
              <p className="text-[10px] text-slate-600 font-medium mt-0.5">
                💡 {activePhonetic.tip}
              </p>
            )}
          </div>

          <button
            onClick={() => {
              setSelectedWord(null);
              setActivePhonetic(null);
            }}
            className="w-5 h-5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 flex items-center justify-center ml-1 cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Vietnamese Meaning Translation */}
      {translation && (
        <p className="text-xs sm:text-sm text-slate-500 font-medium italic">
          "{translation}"
        </p>
      )}

      <p className="text-[11px] text-slate-400 font-medium">
        👆 <em>Mẹo: Bạn có thể bấm vào từng từ ở trên để nghe phát âm & xem phiên âm IPA riêng lẻ</em>
      </p>
    </div>
  );
};
