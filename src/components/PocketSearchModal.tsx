import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
  Search, 
  Volume2, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  BookOpen, 
  Filter
} from 'lucide-react';
import { VIKODA_CURRICULUM } from '../data/curriculumData';
import { VIKODA_PITCH_CARDS } from '../data/vikodaData';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface PocketSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
}

interface SearchableItem {
  id: string;
  source: 'lesson' | 'pitch' | 'objection';
  sourceLabel: string;
  en: string;
  vi: string;
  phonetics?: string;
  category: string;
}

export const PocketSearchModal: React.FC<PocketSearchModalProps> = ({
  isOpen,
  onClose,
  speechRate
}) => {
  const [query, setQuery] = useState<string>('');
  const [filterSource, setFilterSource] = useState<'all' | 'lesson' | 'pitch'>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Index all content once
  const searchIndex: SearchableItem[] = useMemo(() => {
    const list: SearchableItem[] = [];

    // 1. Lessons
    VIKODA_CURRICULUM.forEach(u => {
      u.exercises.forEach(ex => {
        if (ex.englishSentence) {
          list.push({
            id: `lex-${ex.id}`,
            source: 'lesson',
            sourceLabel: `Bài ${u.unitNumber} (${u.level})`,
            en: ex.englishSentence,
            vi: ex.promptVi.replace('Sắp xếp câu: ', '').replace('Dịch câu: ', '').replace(/"/g, ''),
            phonetics: ex.phonetics,
            category: u.title
          });
        }
      });
    });

    // 2. Pitch Cards
    VIKODA_PITCH_CARDS.forEach(card => {
      card.bulletPoints.forEach((bp, bIdx) => {
        list.push({
          id: `pitch-${card.id}-${bIdx}`,
          source: 'pitch',
          sourceLabel: `Pitch: ${card.topic}`,
          en: bp.en,
          vi: bp.vi,
          phonetics: bp.phonetics,
          category: card.topic
        });
      });
    });

    return list;
  }, []);

  // Filter items based on query and category
  const filteredResults = useMemo(() => {
    const cleanQ = query.trim().toLowerCase();
    return searchIndex.filter(item => {
      const matchSource = filterSource === 'all' || item.source === filterSource;
      if (!matchSource) return false;
      if (!cleanQ) return true;

      return (
        item.en.toLowerCase().includes(cleanQ) ||
        item.vi.toLowerCase().includes(cleanQ) ||
        item.category.toLowerCase().includes(cleanQ)
      );
    }).slice(0, 30);
  }, [query, filterSource, searchIndex]);

  if (!isOpen || typeof document === 'undefined') return null;

  const handlePlay = (item: SearchableItem) => {
    if (playingId === item.id) {
      stopSpeech();
      setPlayingId(null);
    } else {
      setPlayingId(item.id);
      playSpeech(item.en, speechRate, 'en-US', () => setPlayingId(null));
    }
  };

  const handleCopy = (item: SearchableItem) => {
    navigator.clipboard.writeText(item.en);
    setCopiedId(item.id);
    playSound('click');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-150"
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
        className="bg-white w-full max-w-lg rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-400 shadow-2xl flex flex-col overflow-hidden max-h-[90dvh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[#0070D1]">
              <Search className="w-5 h-5" />
              <h3 className="text-sm font-black text-slate-900">
                Tra Cứu Nhanh Mẫu Câu & Thuật Ngữ Vikoda
              </h3>
            </div>
            <button
              onClick={() => {
                stopSpeech();
                playSound('click');
                onClose();
              }}
              className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Box */}
          <div className="relative">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Gõ từ khóa: giá, pH 9.0, 220m, Incoterms, đón khách..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white border-2 border-slate-200 focus:border-[#009FE3] text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 text-[11px] font-bold">
            <span className="text-slate-400 text-[10px] uppercase font-black mr-1">Lọc:</span>
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'lesson', label: 'Bài học Lộ trình' },
              { id: 'pitch', label: 'Slide Pitching' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => {
                  setFilterSource(f.id as any);
                  playSound('click');
                }}
                className={`px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                  filterSource === f.id
                    ? 'bg-[#0070D1] text-white shadow-2xs font-black'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2.5 flex-1">
          {filteredResults.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <span className="text-3xl">🔍</span>
              <p className="text-xs font-bold text-slate-500">
                Không tìm thấy câu phù hợp với từ khóa "{query}"
              </p>
              <p className="text-[10px] text-slate-400">
                Thử tìm: "pH", "mỏ khoáng", "container", "FOB", "welcome"...
              </p>
            </div>
          ) : (
            filteredResults.map(item => {
              const isPlaying = playingId === item.id;
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-2xs transition-all space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#0070D1] bg-sky-50 px-1.5 py-0.2 rounded inline-block">
                        {item.sourceLabel}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 leading-snug">
                        {item.en}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        {item.vi}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0 pt-0.5">
                      <button
                        onClick={() => handlePlay(item)}
                        className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                          isPlaying
                            ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
                            : 'bg-sky-50 text-[#0070D1] hover:bg-sky-100 border-sky-200'
                        }`}
                        title="Nghe phát âm chuẩn US"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleCopy(item)}
                        className="p-1.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 cursor-pointer"
                        title="Sao chép câu"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {item.phonetics && (
                    <div className="text-[10px] font-mono text-slate-400 pt-0.5">
                      {item.phonetics}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
          <span>Tìm thấy {filteredResults.length} kết quả</span>
          <button
            onClick={() => {
              stopSpeech();
              playSound('click');
              onClose();
            }}
            className="px-3 py-1 rounded-xl bg-slate-200 hover:bg-slate-300 font-black text-slate-700 cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
