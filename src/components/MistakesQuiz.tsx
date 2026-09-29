import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  HelpCircle,
  Award,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { COMMON_MISTAKES } from '../data/commonMistakes';
import { CommonMistakeItem } from '../types';

interface MistakesQuizProps {
  onQuizCompleted: (score: number, total: number) => void;
}

export const MistakesQuiz: React.FC<MistakesQuizProps> = ({ onQuizCompleted }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [reviewMode, setReviewMode] = useState<boolean>(false);

  const currentQuestion: CommonMistakeItem = COMMON_MISTAKES[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctOptionIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < COMMON_MISTAKES.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      onQuizCompleted(score + (selectedOptionIndex === currentQuestion.correctOptionIndex ? 1 : 0), COMMON_MISTAKES.length);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setIsFinished(false);
    setScore(0);
    setReviewMode(false);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center space-x-2">
            <span>Sửa Lỗi Tiếng Anh Công Sở Thường Gặp</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Nhận diện và sửa 8 bẫy lỗi kinh điển mà người Việt hay mắc trong email và giao tiếp với sếp Tây.
          </p>
        </div>

        <button
          onClick={restartQuiz}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Làm lại từ đầu</span>
        </button>
      </div>

      {!isFinished ? (
        /* QUIZ ACTIVE VIEW */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6 max-w-3xl mx-auto">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-white">
              Câu hỏi {currentIndex + 1} / {COMMON_MISTAKES.length}
            </span>
            <span className="text-amber-400 font-bold">
              Điểm hiện tại: {score} câu đúng
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-amber-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / COMMON_MISTAKES.length) * 100}%` }}
            />
          </div>

          {/* Context box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Nghĩa tiếng Việt muốn diễn đạt:</span>
            </div>
            <p className="text-base text-slate-100 font-semibold">
              "{currentQuestion.vietnameseMeaning}"
            </p>
          </div>

          {/* Question Prompt */}
          <div>
            <h3 className="text-sm font-bold text-slate-300 mb-3">
              Chọn câu viết đúng chuẩn ngữ pháp & văn phong doanh nghiệp:
            </h3>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5">
              {currentQuestion.options.map((option: string, idx: number) => {
                const isSelected = selectedOptionIndex === idx;
                const isCorrect = idx === currentQuestion.correctOptionIndex;

                let buttonClass = 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-200';
                if (isAnswered) {
                  if (isCorrect) {
                    buttonClass = 'bg-emerald-950/30 border-emerald-500 text-emerald-200 font-semibold';
                  } else if (isSelected) {
                    buttonClass = 'bg-rose-950/30 border-rose-500 text-rose-200';
                  } else {
                    buttonClass = 'bg-slate-950/30 border-slate-800/40 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between text-sm ${buttonClass}`}
                  >
                    <span>{option}</span>
                    {isAnswered && (
                      <span className="shrink-0 ml-3">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-400" />
                        ) : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Explanation upon Answer */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn text-xs">
              <div className="flex items-center space-x-2 text-amber-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Giải thích cặn kẽ:</span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                {currentQuestion.explanation}
              </p>
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200">
                <span className="font-semibold text-amber-300">Vì sao người Việt hay sai: </span>
                {currentQuestion.whyVietnameseMakeIt}
              </div>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>
                  {currentIndex < COMMON_MISTAKES.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả bài kiểm tra'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* QUIZ SUMMARY & REVIEW */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center space-y-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white">Hoàn Thành Bài Kiểm Tra Sửa Lỗi!</h2>
            <p className="text-sm text-slate-400 mt-1">
              Bạn đã kiểm tra toàn bộ {COMMON_MISTAKES.length} bẫy lỗi kinh điển trong tiếng Anh công sở.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 max-w-sm mx-auto">
            <div className="text-4xl font-extrabold text-amber-400">
              {score} / {COMMON_MISTAKES.length}
            </div>
            <div className="text-xs text-slate-400 mt-1">Câu trả lời chính xác</div>
          </div>

          <div className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed text-left p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <span className="font-bold text-amber-400 block mb-1">Lời khuyên của Chuyên Gia:</span>
            {score >= 7 ? (
              <span>Phong độ ngữ pháp của bạn rất vững! Bạn đã loại bỏ hầu hết các lối mòn tư duy dịch từng từ (word-by-word) trong giao tiếp văn phòng.</span>
            ) : (
              <span>Hãy chú ý các động từ như "discuss" (không có about) và "explain" (explain to someone). Luyện tập thường xuyên để phản xạ tự nhiên hơn nhé!</span>
            )}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={restartQuiz}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              Làm lại bài kiểm tra
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
