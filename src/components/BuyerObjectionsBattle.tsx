import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Award,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { BUYER_QA_LIST } from '../data/vikodaData';
import { BuyerQAItem } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface BuyerObjectionsBattleProps {
  speechRate: number;
  onAwardXpAndGems: (xp: number, gems: number) => void;
}

export const BuyerObjectionsBattle: React.FC<BuyerObjectionsBattleProps> = ({
  speechRate,
  onAwardXpAndGems,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [battleScore, setBattleScore] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const currentQA: BuyerQAItem = BUYER_QA_LIST[currentIndex];

  const getOptions = (qa: BuyerQAItem) => {
    switch (qa.id) {
      case 'qa-1':
        return [
          {
            text: 'Artificial alkaline water is forced by electrolysis and loses pH quickly. Vikoda absorbs natural alkaline minerals through deep rock layers, keeping a stable pH 9.0 for up to 3 years.',
            isCorrect: true,
            feedback: 'Xuất sắc! Nêu bật được 2 yếu tố then chốt: kiềm tự nhiên qua tầng địa chất và độ bền pH 3 năm.'
          },
          {
            text: 'Vikoda adds baking soda to make it alkaline just like foreign brands.',
            isCorrect: false,
            feedback: 'Sai hoàn toàn! Vikoda KHÔNG BAO GIỜ thêm baking soda hay hóa chất nhân tạo.'
          },
          {
            text: 'They are completely the same, only the brand name is different.',
            isCorrect: false,
            feedback: 'Đánh mất hoàn toàn lợi thế cạnh tranh cốt lõi của Vikoda!'
          }
        ];
      case 'qa-2':
        return [
          {
            text: 'Drinking water with minerals always causes kidney stones so please drink less.',
            isCorrect: false,
            feedback: 'Sai lầm nghiêm trọng! Khiến khách hàng sợ hãi và từ chối mua hàng.'
          },
          {
            text: 'No, in Vikoda, calcium and magnesium salts are completely soluble at all temperatures. Magnesium even aids kidney excretion, and our balanced TDS of 100-400 mg/L is certified safe for daily drinking.',
            isCorrect: true,
            feedback: 'Câu trả lời chuẩn mực y khoa! Dẫn chứng muối hòa tan hoàn toàn và chỉ số TDS chuẩn mực.'
          },
          {
            text: 'I am not sure, you should consult a doctor first.',
            isCorrect: false,
            feedback: 'Thiếu tính chuyên nghiệp và kiến thức chuyên môn về sản phẩm.'
          }
        ];
      default:
        return [
          {
            text: 'Because imported water is too cheap and Vikoda is much more expensive.',
            isCorrect: false,
            feedback: 'Không đúng thực tế kinh doanh.'
          },
          {
            text: 'Vikoda delivers world-class pH 9.0 natural water with 85% lower carbon footprint, packaged in gorgeous luxury glass bottles that delight guests at half the logistics cost.',
            isCorrect: true,
            feedback: 'Thuyết phục tuyệt đối! Kết hợp giữa đẳng cấp (chai thủy tinh), giảm khí thải carbon và tối ưu chi phí vận hành.'
          },
          {
            text: 'You should buy it just because it is made in Vietnam.',
            isCorrect: false,
            feedback: 'Chưa đủ lý do kinh doanh thuyết phục các GM khách sạn 5 sao quốc tế.'
          }
        ];
    }
  };

  const options = getOptions(currentQA);

  const handlePlayAudio = (text: string) => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      playSpeech(text, speechRate, 'en-US', () => setIsPlayingAudio(false));
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswerIndex(idx);
    setIsAnswered(true);

    if (options[idx].isCorrect) {
      playSound('correct');
      setBattleScore(battleScore + 1);
      onAwardXpAndGems(40, 15);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      playSound('wrong');
    }
  };

  const handleNext = () => {
    if (currentIndex < BUYER_QA_LIST.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
      stopSpeech();
    }
  };

  const restartBattle = () => {
    setCurrentIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setBattleScore(0);
    stopSpeech();
  };

  return (
    <div className="space-y-5 pb-24 max-w-lg mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
            Đấu Trí Đàm Phán
          </span>
          <h2 className="text-lg font-extrabold text-slate-900 mt-1">
            Xử Lý Câu Hỏi Hóc Búa Của Khách Ngoại
          </h2>
        </div>

        <div className="text-xs text-slate-500 font-bold">
          {currentIndex + 1} / {BUYER_QA_LIST.length}
        </div>
      </div>

      {/* Main Battle Arena Card */}
      <div className="bg-white rounded-3xl border border-sky-100 p-5 shadow-xl shadow-sky-500/10 space-y-4">
        
        {/* Buyer Question Bubble */}
        <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🧑‍💼</span>
              <span className="text-xs font-bold text-amber-300">
                {currentQA.clientType} hỏi:
              </span>
            </div>

            <button
              onClick={() => handlePlayAudio(currentQA.foreignQuestionEn)}
              className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Nghe câu hỏi</span>
            </button>
          </div>

          <p className="text-sm font-extrabold text-white leading-snug">
            "{currentQA.foreignQuestionEn}"
          </p>
          <p className="text-xs text-slate-400 italic">
            Dịch: {currentQA.foreignQuestionVi}
          </p>
        </div>

        {/* Multiple Choice Answers */}
        <div className="space-y-2.5 pt-1">
          <label className="text-xs font-bold text-slate-700 block">
            Chọn câu trả lời sắc sảo chuẩn Vikoda:
          </label>

          {options.map((opt, i) => {
            const isSelected = selectedAnswerIndex === i;

            let style = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-sky-50 hover:border-sky-300';
            if (isAnswered) {
              if (opt.isCorrect) {
                style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
              } else if (isSelected) {
                style = 'bg-rose-50 border-rose-500 text-rose-950';
              } else {
                style = 'opacity-40 border-slate-200';
              }
            }

            return (
              <button
                key={i}
                disabled={isAnswered}
                onClick={() => handleSelectOption(i)}
                className={`w-full text-left p-3.5 rounded-2xl border text-xs leading-relaxed transition-all flex items-start justify-between gap-2 ${style}`}
              >
                <span>{opt.text}</span>
                {isAnswered && (
                  <span className="shrink-0 mt-0.5">
                    {opt.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : isSelected ? (
                      <XCircle className="w-4 h-4 text-rose-600" />
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Expert Audio */}
        {isAnswered && (
          <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-xs space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-[#0066CC]">
                Phân Tích Của Chuyên Gia:
              </span>
              <button
                onClick={() => handlePlayAudio(currentQA.audioText)}
                className="flex items-center space-x-1 text-xs font-bold text-[#0066CC] hover:underline"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe đáp án mẫu</span>
              </button>
            </div>

            <p className="text-slate-700">
              {options[selectedAnswerIndex || 0].feedback}
            </p>

            <div className="pt-1 flex flex-wrap gap-1">
              {currentQA.highlightedTerms.map((term, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-sky-200 text-[10px] text-cyan-800 font-semibold">
                  {term.term}: {term.meaning}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Next Question Button */}
        {isAnswered && currentIndex < BUYER_QA_LIST.length - 1 && (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-2xl bg-[#0066CC] hover:bg-[#0052CC] text-white font-extrabold text-xs shadow-md flex items-center justify-center space-x-1 transition-all active:scale-98"
          >
            <span>Câu hỏi tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {isAnswered && currentIndex === BUYER_QA_LIST.length - 1 && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <span className="text-3xl">🏆</span>
            <h4 className="text-sm font-extrabold text-emerald-900">
              Hoàn thành phiên đàm phán!
            </h4>
            <p className="text-xs text-emerald-700 font-medium">
              Bạn đã chứng minh bản lĩnh của một đại sứ Vikoda thực thụ trước khách hàng quốc tế.
            </p>
            <button
              onClick={restartBattle}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
            >
              Luyện lại từ đầu
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
