import React, { useState, useEffect, useRef } from 'react';
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
  Trophy,
  ArrowRight,
  Check
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

// Build 3 distinct choices with guaranteed unique strings and exact correctIndex
const normalizeReviewItem = (item: MistakeVaultItem): MistakeVaultItem => {
  // If item already has valid options and valid correctIndex
  if (
    item.options && 
    item.options.length >= 2 && 
    typeof item.correctIndex === 'number' && 
    item.correctIndex >= 0 && 
    item.correctIndex < item.options.length
  ) {
    return item;
  }

  const correct = (item.correctSentence || '').trim() || 'We provide natural alkaline mineral water.';
  const wrongGiven = (item.wrongChoiceGiven || '').trim();

  // Create clean grammatical distractors
  const distractors: string[] = [];
  if (wrongGiven && wrongGiven !== correct && wrongGiven.length > 5) {
    distractors.push(wrongGiven);
  }

  // Preposition and verb form variations
  const d1 = correct.replace(/\bhave\b/i, 'has').replace(/\bare\b/i, 'is').replace(/\bwe\b/i, 'us');
  if (d1 !== correct) distractors.push(d1);

  const d2 = correct.replace(/\bto\b/i, 'for').replace(/\bin\b/i, 'at').replace(/\bwater\b/i, 'waters');
  if (d2 !== correct && d2 !== d1) distractors.push(d2);

  const d3 = correct.replace(/\bnaturally\b/i, 'natural').replace(/\balkaline\b/i, 'acidic');
  if (d3 !== correct && d3 !== d2 && d3 !== d1) distractors.push(d3);

  // Filter out any duplicates
  const uniqueDistractors = Array.from(new Set(distractors.filter(d => d !== correct))).slice(0, 3);
  if (uniqueDistractors.length === 0) {
    uniqueDistractors.push('This statement is grammatically incorrect in diplomatic context.');
    uniqueDistractors.push('We do not recommend this expression for international clients.');
  }

  const allOpts = [correct, ...uniqueDistractors];

  // Stable random shuffle
  for (let i = allOpts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allOpts[i], allOpts[j]] = [allOpts[j], allOpts[i]];
  }

  const correctIdx = allOpts.indexOf(correct);

  return {
    ...item,
    options: allOpts,
    correctIndex: correctIdx >= 0 ? correctIdx : 0,
  };
};

export const DailyQuickReviewModal: React.FC<DailyQuickReviewModalProps> = ({
  isOpen,
  onClose,
  mistakesVault,
  onMasterMistake,
  onAwardReviewXp,
  speechRate
}) => {
  const [questions, setQuestions] = useState<MistakeVaultItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Initialize review session ONLY ONCE when modal is opened (not on mistakesVault update)
  useEffect(() => {
    if (!isOpen) return;

    // Filter unmastered user mistakes
    const unmastered = (mistakesVault || []).filter(m => !m.mastered);
    let sessionPool: MistakeVaultItem[] = [];

    if (unmastered.length > 0) {
      sessionPool = [...unmastered].sort(() => 0.5 - Math.random()).slice(0, 6);
    }

    // Supplement with high-frequency corporate mistakes
    if (sessionPool.length < 5) {
      const needed = 5 - sessionPool.length;
      const fallbackItems: MistakeVaultItem[] = COMMON_MISTAKES.slice(0, 10).map((cm, idx) => ({
        id: `cm-fix-${cm.id || idx}`,
        questionId: cm.id,
        promptEn: 'Chọn câu tiếng Anh chính xác và chuẩn ngoại giao nhất:',
        promptVi: cm.vietnameseMeaning,
        correctSentence: cm.correctSentence,
        options: cm.options,
        correctIndex: cm.correctOptionIndex,
        explanation: cm.explanation || 'Chuẩn xác theo ngữ pháp thương mại quốc tế.',
        crucialNote: cm.whyVietnameseMakeIt || 'Lỗi bẫy người Việt rất hay dịch thô từng từ.',
        category: cm.category || 'Business English',
        failedCount: 1,
        mastered: false,
        addedAt: Date.now()
      }));

      const added = fallbackItems.slice(0, needed);
      sessionPool = [...sessionPool, ...added];
    }

    const preparedQuestions = sessionPool.map(normalizeReviewItem);
    setQuestions(preparedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsEvaluated(false);
    setIsCorrect(false);
    setCorrectCount(0);
    setIsFinished(false);
  }, [isOpen]); // CRITICAL FIX: Only run on isOpen change, not mistakesVault

  // Keyboard navigation on PC (1, 2, 3, 4, Enter)
  useEffect(() => {
    if (!isOpen || isFinished || questions.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const q = questions[currentIndex];
      if (!q) return;

      if (!isEvaluated) {
        if (e.key >= '1' && e.key <= String((q.options || []).length)) {
          const idx = parseInt(e.key, 10) - 1;
          handleSelectOption(idx);
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
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

    const isAnswerRight = idx === currentQ.correctIndex;
    setIsCorrect(isAnswerRight);

    if (isAnswerRight) {
      playSound('success');
      setCorrectCount(prev => prev + 1);
      if (currentQ.id) {
        onMasterMistake(currentQ.id);
      }
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
      playSound('celebrate');
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl w-full max-w-2xl border border-sky-100 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Top Header Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between shadow-xs shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-white/20 rounded-2xl backdrop-blur-xs shrink-0">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-sm sm:text-base font-black tracking-tight">Ôn Tập Nhanh 3 Phút</h2>
                <span className="px-2 py-0.2 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-wider">
                  Spaced Repetition
                </span>
              </div>
              <p className="text-[11px] text-amber-100 font-medium hidden sm:block">
                Khắc phục triệt để các bẫy ngữ pháp và câu hay nhầm lẫn
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 px-2.5 py-1 bg-white/20 rounded-full text-xs font-black">
              <Flame className="w-3.5 h-3.5 text-amber-200 fill-current" />
              <span>{correctCount}/{questions.length} Đúng</span>
            </div>
            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-all cursor-pointer"
              title="Đóng ôn tập"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2 shrink-0">
          <div 
            className="bg-amber-500 h-full transition-all duration-300 rounded-r-full"
            style={{ width: `${((currentIndex + (isEvaluated ? 1 : 0)) / (questions.length || 1)) * 100}%` }}
          />
        </div>

        {/* Main Body */}
        {!isFinished && currentQ ? (
          <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-4">
            
            {/* Question Card */}
            <div className="bg-gradient-to-br from-amber-50/70 to-orange-50/40 rounded-2xl p-4 sm:p-5 border border-amber-200 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Câu {currentIndex + 1} / {questions.length} • {currentQ.category || 'Business English'}
                </span>
                <span className="text-[11px] text-slate-400 font-semibold hidden sm:inline">
                  (Bấm phím 1 - {(currentQ.options || []).length})
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                {currentQ.promptVi || 'Chọn câu tiếng Anh chuẩn xác nhất:'}
              </h3>

              {currentQ.promptEn && currentQ.promptEn !== currentQ.promptVi && (
                <p className="text-xs text-slate-600 font-medium">
                  👉 {currentQ.promptEn}
                </p>
              )}
            </div>

            {/* Options List with Deterministic Highlighting */}
            <div className="space-y-2.5">
              {(currentQ.options || []).map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isThisTheCorrectAnswer = idx === currentQ.correctIndex;

                let btnStyle = "bg-white hover:bg-slate-50 border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-800 hover:border-amber-300";
                
                if (isEvaluated) {
                  if (isThisTheCorrectAnswer) {
                    btnStyle = "bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-200";
                  } else if (isSelected && !isThisTheCorrectAnswer) {
                    btnStyle = "bg-rose-50 border-2 border-rose-500 border-b-4 border-b-rose-600 text-rose-950 font-bold";
                  } else {
                    btnStyle = "bg-slate-50 border-2 border-slate-200 border-b-2 text-slate-400 opacity-40";
                  }
                } else if (isSelected) {
                  btnStyle = "bg-amber-50 border-2 border-amber-500 border-b-4 border-b-amber-600 text-amber-950 font-black";
                }

                return (
                  <button
                    key={idx}
                    disabled={isEvaluated}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all flex items-start space-x-3 cursor-pointer text-xs sm:text-sm active:translate-y-0.5 ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-black text-xs shrink-0 border border-slate-300 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="flex-1 leading-snug break-words">{opt}</span>
                    {isEvaluated && isThisTheCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {isEvaluated && isSelected && !isThisTheCorrectAnswer && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Audio Replay Card */}
            {isEvaluated && (
              <div className={`rounded-2xl p-4 border animate-in slide-in-from-bottom-2 duration-150 space-y-2 ${
                isCorrect ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950' : 'bg-rose-50/80 border-rose-300 text-rose-950'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600" />
                    )}
                    <span className="font-black text-xs sm:text-sm">
                      {isCorrect ? 'Chính xác! Bạn đã ghi nhớ chuẩn!' : 'Chưa đúng! Đáp án chuẩn là:'}
                    </span>
                  </div>
                  <button
                    onClick={() => playSpeech(currentQ.correctSentence, speechRate, 'en-US')}
                    className="px-2.5 py-1 rounded-xl bg-white shadow-2xs border border-slate-200 text-slate-700 hover:text-amber-600 flex items-center space-x-1 text-xs font-bold cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Nghe</span>
                  </button>
                </div>

                {!isCorrect && (
                  <p className="text-xs sm:text-sm font-black text-rose-950 break-words">
                    "{currentQ.correctSentence}"
                  </p>
                )}

                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  💡 <span className="font-bold">Phân tích:</span> {currentQ.explanation}
                </p>

                {currentQ.crucialNote && (
                  <div className="p-2.5 bg-white/90 rounded-xl border border-amber-200 text-[11px] text-amber-900 font-bold">
                    ⚡ <span className="underline">Lưu ý:</span> {currentQ.crucialNote}
                  </div>
                )}
              </div>
            )}

          </div>
        ) : isFinished ? (
          /* Finished Screen */
          <div className="p-6 sm:p-8 text-center space-y-5 flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 border-4 border-amber-400 flex items-center justify-center text-amber-600 shadow-md">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Hoàn Thành Phiên Ôn Tập 3 Phút!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                Bạn đã trả lời đúng <strong className="text-amber-600 font-black">{correctCount}/{questions.length} câu</strong> bẫy.
                Lặp lại ngắt quãng hằng ngày sẽ giúp bạn phản xạ tự nhiên không bao giờ sai!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              <div className="p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 text-center">
                <div className="text-[10px] uppercase font-black text-amber-800">Điểm thưởng</div>
                <div className="text-xl font-black text-amber-600">+{Math.max(30, correctCount * 15)} XP</div>
              </div>
              <div className="p-3 rounded-2xl bg-sky-50 border-2 border-sky-200 text-center">
                <div className="text-[10px] uppercase font-black text-sky-800">Ngọc khoáng</div>
                <div className="text-xl font-black text-[#0070D1]">+{Math.max(5, correctCount * 3)} 💎</div>
              </div>
            </div>

            <button
              onClick={() => {
                playSound('success');
                onClose();
              }}
              className="w-full max-w-xs py-3.5 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] border-b-4 border-[#15803d] text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-md active:translate-y-0.5"
            >
              Tiếp Tục Lộ Trình
            </button>
          </div>
        ) : null}

        {/* BOTTOM ACTION BAR */}
        {!isFinished && isEvaluated && (
          <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 shrink-0 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-2 duration-150">
            <div className="text-xs text-slate-500 font-bold hidden sm:block">
              {isCorrect ? '✅ Đã chọn chính xác!' : '❌ Hãy ghi nhớ giải thích bên trên.'}
            </div>

            <button
              onClick={handleNextQuestion}
              className={`w-full sm:w-auto min-w-[200px] py-3.5 px-6 rounded-2xl font-black text-xs uppercase tracking-wider cursor-pointer shadow-md flex items-center justify-center gap-2 active:translate-y-0.5 ml-auto text-white ${
                isCorrect
                  ? 'bg-[#22c55e] hover:bg-[#16a34a] border-b-4 border-[#15803d]'
                  : 'bg-[#0070D1] hover:bg-[#005bb5] border-b-4 border-[#004b96]'
              }`}
            >
              <span>{currentIndex < questions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả Ôn Tập'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
