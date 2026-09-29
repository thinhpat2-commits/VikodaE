import React, { useState } from 'react';
import { 
  Volume2, 
  Search, 
  RotateCw, 
  Check, 
  BookmarkCheck, 
  Bookmark, 
  Layers, 
  List, 
  Lightbulb, 
  AlertCircle
} from 'lucide-react';
import { BUSINESS_VOCAB } from '../data/businessVocab';
import { BusinessVocabItem, IndustryTrack } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';

interface VocabVaultProps {
  speechRate: number;
}

export const VocabVault: React.FC<VocabVaultProps> = ({ speechRate }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryTrack>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [memorizedIds, setMemorizedIds] = useState<string[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filteredVocab = BUSINESS_VOCAB.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definitionVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.exampleEn || item.exampleSentenceEn || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesIndustry = selectedIndustry === 'all' || item.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const toggleMemorized = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (memorizedIds.includes(id)) {
      setMemorizedIds(memorizedIds.filter((item) => item !== id));
    } else {
      setMemorizedIds([...memorizedIds, id]);
    }
  };

  const handlePlayAudio = (item: BusinessVocabItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingId === item.id) {
      stopSpeech();
      setPlayingId(null);
    } else {
      setPlayingId(item.id);
      playSpeech(`${item.term}. ${item.exampleEn || item.exampleSentenceEn || ''}`, speechRate, 'en-US', () => setPlayingId(null));
    }
  };

  const toggleFlip = (id: string) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center space-x-2">
            <span>Từ Vựng & Thành Ngữ Công Sở Thực Chiến</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Các thuật ngữ, tiếng lóng doanh nghiệp (Corporate Slang) mà người bản ngữ dùng hàng ngày trong Slack & họp hành.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'cards' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Thẻ Flashcard</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'list' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Danh Sách</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo từ, nghĩa hoặc ví dụ..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'general', label: 'Văn phòng chung' },
            { id: 'marketing', label: 'Marketing & Sales' },
            { id: 'finance', label: 'Tài chính & Đầu tư' },
            { id: 'hr', label: 'Tuyển dụng & HR' },
          ].map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id as IndustryTrack)}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                selectedIndustry === ind.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      {/* FLASHCARDS VIEW */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVocab.map((item) => {
            const isFlipped = flippedCardId === item.id;
            const isMemorized = memorizedIds.includes(item.id);
            const isPlaying = playingId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                className={`relative min-h-[300px] p-6 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between select-none shadow-xl ${
                  isFlipped
                    ? 'bg-slate-950 border-amber-500/50'
                    : isMemorized
                    ? 'bg-slate-900/60 border-emerald-900/40'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Card Top: Type & Audio/Save buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.type.replace('_', ' ')}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 capitalize">
                      {item.industry}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={(e) => handlePlayAudio(item, e)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isPlaying ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => toggleMemorized(item.id, e)}
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-700 transition-colors"
                      title={isMemorized ? 'Đã nhớ từ này' : 'Đánh dấu đã nhớ'}
                    >
                      {isMemorized ? (
                        <BookmarkCheck className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                      ) : (
                        <Bookmark className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Card Content (Flip state) */}
                {!isFlipped ? (
                  /* FRONT OF CARD */
                  <div className="my-auto text-center space-y-2 py-4">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {item.term}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/80">{item.phonetics}</p>
                    <p className="text-sm font-medium text-slate-300 mt-2">
                      {item.definitionVi}
                    </p>
                    <div className="pt-3 text-[11px] text-slate-500 flex items-center justify-center space-x-1">
                      <RotateCw className="w-3 h-3" />
                      <span>Nhấp thẻ để xem ví dụ & ngữ cảnh dùng</span>
                    </div>
                  </div>
                ) : (
                  /* BACK OF CARD: DEEP CONTEXT */
                  <div className="space-y-3 py-2 text-xs">
                    <div>
                      <span className="font-semibold text-slate-400 block mb-0.5">Ví dụ thực tế:</span>
                      <p className="text-slate-100 italic">"{item.exampleEn || item.exampleSentenceEn || ''}"</p>
                      <p className="text-slate-400 mt-0.5">{item.exampleVi || item.exampleSentenceVi || ''}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
                      <div className="flex items-center space-x-1 font-bold text-amber-400">
                        <Lightbulb className="w-3 h-3" />
                        <span>Ngữ cảnh sếp & đồng nghiệp dùng:</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{item.corporateContext || item.boardroomTip || ''}</p>
                    </div>

                    <div className="p-2 rounded-lg bg-rose-950/20 border border-rose-900/30 text-rose-300">
                      <div className="flex items-center space-x-1 font-semibold text-rose-400 text-[11px]">
                        <AlertCircle className="w-3 h-3" />
                        <span>Tránh dịch thô:</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.avoidMistake || item.avoidLiteralTranslation || ''}</p>
                    </div>
                  </div>
                )}

                {/* Card Footer */}
                <div className="text-[10px] text-slate-500 text-right pt-2 border-t border-slate-800/80">
                  {isMemorized ? '✓ Đã thuộc' : 'Chưa thuộc'}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="divide-y divide-slate-800">
            {filteredVocab.map((item) => {
              const isMemorized = memorizedIds.includes(item.id);
              const isPlaying = playingId === item.id;
              return (
                <div key={item.id} className="p-4 hover:bg-slate-800/40 transition-colors space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-base font-bold text-white">{item.term}</span>
                        <span className="text-xs font-mono text-amber-400/80">{item.phonetics}</span>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {item.type.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">{item.definitionVi}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => handlePlayAudio(item, e)}
                        className={`p-1.5 rounded-lg border text-xs flex items-center space-x-1 ${
                          isPlaying ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Nghe</span>
                      </button>

                      <button
                        onClick={(e) => toggleMemorized(item.id, e)}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-700"
                      >
                        {isMemorized ? <BookmarkCheck className="w-4 h-4 text-emerald-400" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
                    <div>
                      <span className="text-slate-400 font-medium">Ví dụ: </span>
                      <span className="text-slate-200 italic">"{item.exampleEn || item.exampleSentenceEn || ''}"</span>
                    </div>
                    <div>
                      <span className="text-amber-400 font-medium">Lưu ý: </span>
                      <span className="text-slate-300">{item.corporateContext || item.boardroomTip || ''}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
