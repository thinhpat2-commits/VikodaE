import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  BookOpen, 
  Award,
  ChevronRight,
  Flame,
  Brain,
  Zap,
  HelpCircle,
  Trophy
} from 'lucide-react';
import { MistakeVaultItem } from '../types';
import { playSound } from '../services/soundEffects';
import { playSpeech } from '../services/speechService';
import { COMMON_MISTAKES } from '../data/commonMistakes';

interface DailyQuickReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  mistakesVault: MistakeVaultItem[];
  onMasterMistake: (mistakeId: string) => void;
  onAwardReviewXp: (xp: number, gems: number) => void;
  speechRate: number;
}

export const DailyQuickReviewModal: React.FC<DailyQuickReviewModalProps> = ({
  isOpen,
  onClose,
  mistakesVault,
  onMasterMistake,
  onAwardReviewXp,
  speechRate
}) => {
  // Active review questions (from user's real mistakes or default common pitfalls)
  const [questions, setQuestions] = useState<MistakeVaultItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Initialize review session
  useEffect(() => {
    if (!isOpen) return;

    // Filter unmastered user mistakes
    const unmastered = mistakesVault.filter(m => !m.mastered);

    if (unmastered.length > 0) {
      // Shuffle & pick up to 5-8 questions
      const shuffled = [...unmastered].sort(() => 0.5 - Math.random()).slice(0, 8);
      setQuestions(shuffled);
    } else {
      // Fallback to top corporate common mistakes from official handbook
      const fallbackItems: MistakeVaultItem[] = COMMON_MISTAKES.slice(0, 6).map((cm, idx) => ({
        id: `fb-${cm.id || idx}`,
        questionId: cm.id,
        promptEn: 'Choose the grammatically and diplomatically correct sentence:',
        promptVi: cm.vietnameseMeaning,
        correctSentence: cm.correctSentence,
        options: cm.options,
        correctIndex: cm.correctOptionIndex,
        explanation: cm.explanation || cm.ruleExplanation || 'Chuẩn xác theo ngữ pháp thương mại quốc tế.',
        crucialNote: cm.whyVietnameseMakeIt || 'Lỗi bẫy người Việt rất hay dịch thô word-by-word.',
        category: cm.category || 'Business English',
        failedCount: 1,
        mastered: false,
        addedAt: Date.now()
      }));
      setQuestions(fallbackItems);
    }

    setCurrentIndex(0);
    setSelectedOption(null);
    setIsEvaluated(false);
    setIsCorrect(false);
    setCorrectCount(0);
    setIsFinished(false);
  }, [isOpen, mistakesVault]);

  // Keyboard navigation on PC (1, 2, 3, 4, Enter, Space)
  useEffect(() => {
    if (!isOpen || isFinished || questions.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const q = questions[currentIndex];
      if (!q) return;

      if (!isEvaluated) {
        if (e.key >= '1' && e.key <= String(q.options.length)) {
          const idx = parseInt(e.key) - 1;
          handleSelectOption(idx);
        } else if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          playSpeech(q.correctSentence, speechRate, 'en-US');
        }
      } else {
        if (e.key === 'Enter') {
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFinished, currentIndex, isEvaluated, questions]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isEvaluated || !currentQ) return;
    playSound('click');
    setSelectedOption(idx);
    setIsEvaluated(true);

    const right = idx === currentQ.correctIndex;
    setIsCorrect(right);

    if (right) {
      playSound('success');
      setCorrectCount(prev => prev + 1);
      onMasterMistake(currentQ.id);
      playSpeech(currentQ.correctSentence, speechRate, 'en-US');
    } else {
      playSound('wrong');
    }
  };

  const handleNextQuestion = () => {
    playSound('click');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsEvaluated(false);
      setIsCorrect(false);
    } else {
      setIsFinished(true);
      const earnedXp = Math.max(30, correctCount * 15);
      const earnedGems = Math.max(5, correctCount * 3);
      onAwardReviewXp(earnedXp, earnedGems);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-4xl border border-sky-100 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-2xl backdrop-blur-xs">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg md:text-xl font-black tracking-tight">Daily Quick Review</h2>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
                  3-Min Spaced Repetition
                </span>
              </div>
              <p className="text-xs text-amber-100 font-medium">
                Ôn tập nhanh các câu hay nhầm lẫn để ghi nhớ vĩnh viễn
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-1 px-3 py-1 bg-white/15 rounded-full text-xs font-bold">
              <Flame className="w-4 h-4 text-amber-200" />
              <span>{correctCount}/{questions.length} Mastered</span>
            </div>
            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="p-2 rounded-full hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2">
          <div 
            className="bg-amber-500 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + (isEvaluated ? 1 : 0)) / (questions.length || 1)) * 100}%` }}
          />
        </div>

        {/* Main Body */}
        {!isFinished && currentQ ? (
          <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-6">
            
            {/* Question Card */}
            <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/30 rounded-2xl p-5 md:p-6 border border-amber-200/60 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black uppercase tracking-wider">
                  Question {currentIndex + 1} of {questions.length} • {currentQ.category}
                </span>
                <span className="hidden md:inline-block text-xs font-semibold text-slate-500 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200">
                  ⌨️ Bấm phím 1 - {currentQ.options.length} để chọn
                </span>
              </div>

              {/* Prompt En / Vi */}
              <h3 className="text-lg md:text-2xl font-black text-slate-900 leading-snug">
                {currentQ.promptEn || 'Select the most professional business response:'}
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-medium mt-1">
                👉 Ngữ cảnh tiếng Việt: <span className="font-bold text-slate-800">{currentQ.promptVi}</span>
              </p>
            </div>

            {/* Options Grid (Large PC buttons) */}
            <div className="grid grid-cols-1 gap-3.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isThisCorrect = idx === currentQ.correctIndex;

                let btnStyle = "bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 hover:border-amber-300";
                
                if (isEvaluated) {
                  if (isThisCorrect) {
                    btnStyle = "bg-emerald-50 border-2 border-emerald-500 text-emerald-900 shadow-sm";
                  } else if (isSelected && !isThisCorrect) {
                    btnStyle = "bg-rose-50 border-2 border-rose-500 text-rose-900";
                  } else {
                    btnStyle = "bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-60";
                  }
                } else if (isSelected) {
                  btnStyle = "bg-amber-50 border-2 border-amber-500 text-amber-900";
                }

                return (
                  <button
                    key={idx}
                    disabled={isEvaluated}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl font-bold transition-all flex items-start space-x-4 cursor-pointer text-base md:text-lg ${btnStyle}`}
                  >
                    <span className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-sm shrink-0 border border-slate-300">
                      {idx + 1}
                    </span>
                    <span className="flex-1 pt-0.5 leading-relaxed">{opt}</span>
                    {isEvaluated && isThisCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {isEvaluated && isSelected && !isThisCorrect && (
                      <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Pedagogy Card */}
            {isEvaluated && (
              <div className={`rounded-2xl p-5 md:p-6 border animate-in slide-in-from-bottom-2 duration-200 ${
                isCorrect ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' : 'bg-rose-50/70 border-rose-300 text-rose-950'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-rose-600" />
                    )}
                    <span className="font-black text-base md:text-lg">
                      {isCorrect ? 'Tuyệt vời! Bạn đã làm chủ câu hỏi này.' : 'Chưa chính xác! Hãy lưu ý phân tích bên dưới:'}
                    </span>
                  </div>
                  <button
                    onClick={() => playSpeech(currentQ.correctSentence, speechRate, 'en-US')}
                    className="px-3 py-1.5 rounded-xl bg-white shadow-xs border border-slate-200 text-slate-700 hover:text-amber-600 flex items-center space-x-1.5 text-xs font-bold cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Nghe câu chuẩn</span>
                  </button>
                </div>

                <p className="text-sm md:text-base font-medium text-slate-800 mb-2 leading-relaxed">
                  💡 <span className="font-bold">Giải thích:</span> {currentQ.explanation}
                </p>

                {currentQ.crucialNote && (
                  <div className="mt-3 p-3.5 bg-white/80 rounded-xl border border-amber-200/80 text-xs md:text-sm text-slate-700">
                    <span className="font-extrabold text-amber-800">⚠️ Bẫy giao tiếp & Lưu ý thương mại:</span> {currentQ.crucialNote}
                  </div>
                )}
              </div>
            )}

          </div>
        ) : isFinished ? (
          /* Finished Screen */
          <div className="p-8 md:p-12 text-center space-y-6 flex-1 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-300 flex items-center justify-center text-amber-600 shadow-lg animate-bounce">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                Hoàn Thành Phiên Ôn Tập Nhanh!
              </h3>
              <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto">
                Bạn đã xử lý <span className="font-bold text-amber-600">{correctCount}/{questions.length} câu</span> lỗi sai. 
                Lặp lại hằng ngày là bí quyết ghi nhớ vĩnh viễn của chuyên gia!
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <div className="px-5 py-3 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                <div className="text-xs uppercase font-extrabold text-amber-700">Điểm thưởng</div>
                <div className="text-xl md:text-2xl font-black text-amber-600">+{Math.max(30, correctCount * 15)} XP</div>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-sky-50 border border-sky-200 text-center">
                <div className="text-xs uppercase font-extrabold text-[#005A9C]">Ngọc khoáng</div>
                <div className="text-xl md:text-2xl font-black text-[#0072CE]">+{Math.max(5, correctCount * 3)} Gems</div>
              </div>
            </div>

            <button
              onClick={() => {
                playSound('success');
                onClose();
              }}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-base shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-orange-600 transition-all cursor-pointer active:translate-y-0.5"
            >
              Tiếp tục học lộ trình chính
            </button>
          </div>
        ) : null}

        {/* Bottom Footer Actions */}
        {!isFinished && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              {isEvaluated ? 'Nhấn Enter hoặc nút bên phải để sang câu kế tiếp' : 'Chọn đáp án bằng chuột hoặc bấm phím số'}
            </span>

            <div className="flex items-center space-x-3 ml-auto">
              {isEvaluated ? (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-base flex items-center space-x-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:translate-y-0.5"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Review'}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <span className="text-xs font-semibold text-slate-500">
                  Hãy chọn một phương án để kiểm tra
                </span>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
