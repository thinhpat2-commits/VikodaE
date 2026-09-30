import React, { useState } from 'react';
import { 
  Volume2, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { VIKODA_PITCH_CARDS } from '../data/vikodaData';
import { VikodaPitchCard } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface VikodaPitchDeckProps {
  speechRate: number;
  onOpenPitchSimulator: () => void;
}

export const VikodaPitchDeck: React.FC<VikodaPitchDeckProps> = ({ 
  speechRate,
  onOpenPitchSimulator
}) => {
  const [selectedCardId, setSelectedCardId] = useState<string>(VIKODA_PITCH_CARDS[0].id);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showSosCheatSheet, setShowSosCheatSheet] = useState(false);

  const selectedCard = VIKODA_PITCH_CARDS.find((c) => c.id === selectedCardId) || VIKODA_PITCH_CARDS[0];

  const handlePlay = (card: VikodaPitchCard) => {
    if (playingId === card.id) {
      stopSpeech();
      setPlayingId(null);
    } else {
      setPlayingId(card.id);
      playSpeech(card.audioText, speechRate, 'en-US', () => setPlayingId(null));
    }
  };

  const handleCopy = (card: VikodaPitchCard) => {
    const textToCopy = `${card.englishHeadline}\n\n` + card.bulletPoints.map((b) => `• ${b.en}`).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(card.id);
    playSound('click');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4 pb-28 max-w-md mx-auto">
      
      {/* 1. Clean Infographic: 4 Key Metrics */}
      <div className="bg-white rounded-3xl border border-sky-100 p-4 shadow-2xs space-y-3">
        <div className="flex items-center justify-between border-b border-sky-50 pb-2">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            4 Con Số Vàng Về Nguồn Khoáng Đảnh Thạnh
          </span>
          <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">
            Since 1957
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="p-2 rounded-2xl bg-sky-50/70">
            <div className="text-base font-black text-[#0066CC]">pH 9.0</div>
            <div className="text-[9px] text-slate-500 font-medium">Kiềm tự nhiên</div>
          </div>
          <div className="p-2 rounded-2xl bg-purple-50/70">
            <div className="text-base font-black text-purple-700">220m</div>
            <div className="text-[9px] text-slate-500 font-medium">Độ sâu mỏ</div>
          </div>
          <div className="p-2 rounded-2xl bg-rose-50/70">
            <div className="text-base font-black text-rose-600">72°C</div>
            <div className="text-[9px] text-slate-500 font-medium">Tại vòi phun</div>
          </div>
          <div className="p-2 rounded-2xl bg-emerald-50/70">
            <div className="text-base font-black text-emerald-600">35 ha</div>
            <div className="text-[9px] text-slate-500 font-medium">Vành đai xanh</div>
          </div>
        </div>
      </div>

      {/* 2. Main Pitch Simulator Hero Button */}
      <button
        onClick={() => {
          playSound('click');
          onOpenPitchSimulator();
        }}
        className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#0284C7] hover:opacity-95 text-white shadow-sm flex items-center justify-between text-left transition-all active:scale-98 cursor-pointer"
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-lg shrink-0">
            🤝
          </div>
          <div>
            <div className="text-xs font-black">Giả Lập Pitching Thực Chiến</div>
            <div className="text-[10px] text-sky-100">Tập dượt giới thiệu với đối tác ngoại quốc</div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-white/80" />
      </button>

      {/* 3. Slide Stepper & Quick Direct Jump (Replaces clunky horizontal scroll) */}
      <div className="bg-white rounded-3xl border border-sky-100 p-3 shadow-2xs space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          {/* Previous Button */}
          <button
            onClick={() => {
              const currentIdx = VIKODA_PITCH_CARDS.findIndex((c) => c.id === selectedCardId);
              const prevIdx = currentIdx > 0 ? currentIdx - 1 : VIKODA_PITCH_CARDS.length - 1;
              setSelectedCardId(VIKODA_PITCH_CARDS[prevIdx].id);
              playSound('click');
            }}
            className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0066CC] font-extrabold text-xs flex items-center gap-1 border border-sky-200/80 transition-all active:scale-95 cursor-pointer shrink-0"
            title="Slide trước"
          >
            <span>◀</span>
            <span className="hidden sm:inline">Trước</span>
          </button>

          {/* Current Slide Indicator & Quick Title */}
          <div className="text-center flex-1 min-w-0 px-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-sky-600 block">
              Slide {VIKODA_PITCH_CARDS.findIndex((c) => c.id === selectedCardId) + 1} / {VIKODA_PITCH_CARDS.length}
            </span>
            <div className="text-xs font-black text-slate-800 truncate">
              {selectedCard.topic}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => {
              const currentIdx = VIKODA_PITCH_CARDS.findIndex((c) => c.id === selectedCardId);
              const nextIdx = currentIdx < VIKODA_PITCH_CARDS.length - 1 ? currentIdx + 1 : 0;
              setSelectedCardId(VIKODA_PITCH_CARDS[nextIdx].id);
              playSound('click');
            }}
            className="px-3 py-1.5 rounded-xl bg-[#0066CC] hover:bg-[#0052a3] text-white font-extrabold text-xs flex items-center gap-1 shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
            title="Slide kế tiếp"
          >
            <span className="hidden sm:inline">Kế tiếp</span>
            <span>▶</span>
          </button>
        </div>

        {/* 8 Numbered Jump Pills: Tap to jump directly, no horizontal scroll needed */}
        <div className="grid grid-cols-8 gap-1 pt-1 border-t border-slate-100">
          {VIKODA_PITCH_CARDS.map((card, idx) => {
            const isSelected = card.id === selectedCardId;
            return (
              <button
                key={card.id}
                onClick={() => {
                  setSelectedCardId(card.id);
                  playSound('click');
                }}
                className={`py-1.5 text-center rounded-lg text-xs font-black transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0066CC] text-white shadow-xs scale-105 ring-2 ring-sky-300'
                    : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                }`}
                title={`Nhảy tới Slide ${idx + 1}: ${card.topic}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Active Pitch Card Content */}
      <div className="bg-white rounded-3xl border border-sky-100 p-4 shadow-2xs space-y-3.5 animate-fade-in">
        
        {/* Card Header & Controls */}
        <div className="flex items-start justify-between border-b border-sky-50 pb-2.5">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#0066CC] tracking-wider block">
              {selectedCard.topic}
            </span>
            <h3 className="text-sm font-black text-slate-800 mt-0.5">
              {selectedCard.englishHeadline}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {selectedCard.vietnameseHeadline}
            </p>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            <button
              onClick={() => handlePlay(selectedCard)}
              className={`p-1.5 rounded-xl transition-all cursor-pointer ${
                playingId === selectedCard.id
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-sky-50 text-[#0066CC] hover:bg-sky-100'
              }`}
              title="Nghe phát âm chuẩn"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleCopy(selectedCard)}
              className="p-1.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              title="Sao chép nội dung"
            >
              {copiedId === selectedCard.id ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Bullet Points */}
        <div className="space-y-2.5">
          {selectedCard.bulletPoints.map((point, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-sky-50/40 border border-sky-100/60 space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 rounded-full bg-cyan-500 text-white text-[9px] font-black flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold text-[#005A9C]">
                  {point.keyword}
                </span>
                {point.phonetics && (
                  <span className="text-[10px] text-slate-400 font-mono">
                    {point.phonetics}
                  </span>
                )}
              </div>
              <p className="text-xs font-semibold text-slate-800 leading-relaxed pl-6">
                {point.en}
              </p>
              <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                {point.vi}
              </p>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="p-2.5 rounded-2xl bg-amber-50/80 border border-amber-200/60 flex items-start space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-900 font-medium leading-relaxed">
            <strong className="font-bold">Mẹo:</strong> {selectedCard.proTip}
          </p>
        </div>

      </div>

      {/* 5. SOS Quick Cheat-sheet */}
      <div className="bg-white rounded-3xl border border-sky-100 p-3.5 shadow-2xs space-y-2.5">
        <button
          onClick={() => {
            playSound('click');
            setShowSosCheatSheet(!showSosCheatSheet);
          }}
          className="w-full flex items-center justify-between text-left cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm">🆘</span>
            <div>
              <span className="text-xs font-bold text-slate-800 block">
                Thẻ Cứu Nguy Cấp Tốc
              </span>
              <span className="text-[10px] text-slate-400">
                Câu thần chú khi gặp khách nước ngoài bất ngờ
              </span>
            </div>
          </div>
          <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${showSosCheatSheet ? 'rotate-90' : ''}`} />
        </button>

        {showSosCheatSheet && (
          <div className="pt-2 border-t border-slate-100 space-y-2 text-xs animate-fade-in">
            <div className="p-2.5 rounded-xl bg-slate-50 space-y-0.5">
              <strong className="text-slate-800">1. Khi khách vừa tới:</strong>
              <p className="text-[#0066CC] font-bold">"Welcome to Vikoda! Please have a seat."</p>
              <p className="text-[10px] text-slate-500">Chào mừng đến Vikoda! Xin mời ngồi.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 space-y-0.5">
              <strong className="text-slate-800">2. Mời nước:</strong>
              <p className="text-[#0066CC] font-bold">"Would you like a cold bottle of Vikoda?"</p>
              <p className="text-[10px] text-slate-500">Mời ngài dùng chai Vikoda tươi mát.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 space-y-0.5">
              <strong className="text-slate-800">3. Khi khách nói quá nhanh:</strong>
              <p className="text-[#0066CC] font-bold">"Could you speak a little slower, please?"</p>
              <p className="text-[10px] text-slate-500">Xin ngài nói chậm lại một chút để tôi nghe rõ ạ.</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
