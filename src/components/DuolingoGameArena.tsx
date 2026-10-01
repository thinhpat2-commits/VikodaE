import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Volume2, 
  Mic, 
  MicOff, 
  Check, 
  AlertCircle, 
  Sparkles,
  Settings2,
  ChevronRight,
  HelpCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { UnitLesson, LessonExercise } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { VoiceSelectorModal } from './VoiceSelectorModal';
import { 
  playSpeech, 
  stopSpeech, 
  calculateSimilarity, 
  startSpeechRecognition,
  isSpeechRecognitionSupported,
  VOICE_OPTIONS,
  getSelectedVoiceId,
  subscribeVoiceChange,
  VoiceOptionId
} from '../services/speechService';

interface DuolingoGameArenaProps {
  lesson: UnitLesson;
  onClose: () => void;
  onFinishLesson: (xpGain: number, gemGain: number, starsEarned: number) => void;
  speechRate: number;
  onRecordMistake?: (mistakeData: any) => void;
}

// Generate challenging distractor words so word-order exercises are not trivial
const generateChallengingWordPool = (targetSentence: string, originalPool?: string[]): string[] => {
  const targetWords = targetSentence.trim().split(/\s+/);
  
  const GRAMMAR_DISTRACTORS: Record<string, string[]> = {
    'is': ['are', 'was'],
    'are': ['is', 'were'],
    'has': ['have', 'had'],
    'have': ['has', 'having'],
    'was': ['were', 'is'],
    'were': ['was', 'are'],
    'do': ['does', 'did'],
    'does': ['do', 'doing'],
    'at': ['in', 'on'],
    'in': ['at', 'to'],
    'to': ['for', 'from'],
    'from': ['of', 'to'],
    'natural': ['artificial', 'synthetic'],
    'alkaline': ['acidic', 'purified'],
    'mineral': ['ordinary', 'tap'],
    'spring': ['river', 'well'],
    'water': ['liquid', 'drink'],
    'company': ['store', 'vendor'],
    'export': ['import', 'local'],
    'container': ['package', 'bottle'],
    'tested': ['untested', 'rejected'],
    'bottled': ['canned', 'brewed'],
    'our': ['their', 'your'],
    'we': ['they', 'you'],
    'proud': ['ashamed', 'afraid'],
    'pleasure': ['sorry', 'problem'],
    'meet': ['see', 'leave'],
  };

  const poolSet = new Set<string>();
  const result: string[] = [];

  // Add target words
  targetWords.forEach(w => {
    result.push(w);
    poolSet.add(w.toLowerCase().replace(/[^\w]/g, ''));
  });

  // Add words from original pool if present
  if (originalPool) {
    originalPool.forEach(w => {
      const clean = w.toLowerCase().replace(/[^\w]/g, '');
      if (!poolSet.has(clean)) {
        result.push(w);
        poolSet.add(clean);
      }
    });
  }

  // Generate 2-3 realistic grammatical distractors
  targetWords.forEach(w => {
    const clean = w.toLowerCase().replace(/[^\w]/g, '');
    if (GRAMMAR_DISTRACTORS[clean]) {
      const candidates = GRAMMAR_DISTRACTORS[clean];
      for (const cand of candidates) {
        if (!poolSet.has(cand) && result.length < targetWords.length + 4) {
          result.push(cand);
          poolSet.add(cand);
          break;
        }
      }
    }
  });

  // Fisher-Yates Shuffle
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

export const DuolingoGameArena: React.FC<DuolingoGameArenaProps> = ({
  lesson,
  onClose,
  onFinishLesson,
  speechRate,
  onRecordMistake
}) => {
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const [selectedWordChips, setSelectedWordChips] = useState<string[]>([]);
  const [availableWordChips, setAvailableWordChips] = useState<string[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  
  // Voice speaking & settings states
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [spokenText, setSpokenText] = useState<string>('');
  const [speechScore, setSpeechScore] = useState<number | null>(null);
  const [speechFeedback, setSpeechFeedback] = useState<string>('');
  const [currentVoiceId, setCurrentVoiceId] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);

  // Evaluation & Star Scoring states
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [isLessonFinished, setIsLessonFinished] = useState<boolean>(false);
  const [showGrammarDetail, setShowGrammarDetail] = useState<boolean>(false);
  const [streakCombo, setStreakCombo] = useState<number>(0);
  const [lessonMistakeCount, setLessonMistakeCount] = useState<number>(0);

  const silenceTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const unsub = subscribeVoiceChange((vId) => setCurrentVoiceId(vId));
    return unsub;
  }, []);

  const currentExercise: LessonExercise = lesson.exercises[exerciseIndex];

  // Initialize exercise state
  useEffect(() => {
    if (currentExercise.type === 'word_order') {
      const challengingPool = generateChallengingWordPool(
        currentExercise.englishSentence,
        currentExercise.wordPool
      );
      setAvailableWordChips(challengingPool);
      setSelectedWordChips([]);
    } else {
      setAvailableWordChips([]);
      setSelectedWordChips([]);
    }

    setSelectedChoice(null);
    setIsRecording(false);
    setSpokenText('');
    setSpeechScore(null);
    setSpeechFeedback('');
    setIsEvaluated(false);
    setIsAnswerCorrect(false);
    setShowGrammarDetail(false);

    // Auto-play audio only for listening comprehension
    if (currentExercise.type === 'listen_choice') {
      playSpeech(currentExercise.audioText, speechRate, 'en-US');
    }
  }, [exerciseIndex, currentExercise]);

  const handlePlayAudio = () => {
    playSpeech(currentExercise.audioText, speechRate, 'en-US');
  };

  // Word tap actions
  const handleTapAvailableWord = (word: string, index: number) => {
    if (isEvaluated) return;
    playSound('click');
    const newAvail = [...availableWordChips];
    newAvail.splice(index, 1);
    setAvailableWordChips(newAvail);
    setSelectedWordChips([...selectedWordChips, word]);
  };

  const handleTapSelectedWord = (word: string, index: number) => {
    if (isEvaluated) return;
    playSound('click');
    const newSelected = [...selectedWordChips];
    newSelected.splice(index, 1);
    setSelectedWordChips(newSelected);
    setAvailableWordChips([...availableWordChips, word]);
  };

  // REAL SPEECH RECOGNITION
  const handleStartSpeaking = () => {
    if (isRecording) {
      setIsRecording(false);
      if (silenceTimeoutRef.current) clearTimeout(silenceTimeoutRef.current);
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setSpeechFeedback('Trình duyệt chưa hỗ trợ micro trực tiếp. Vui lòng sử dụng Google Chrome hoặc Microsoft Edge!');
      return;
    }

    playSound('click');
    setIsRecording(true);
    setSpokenText('');
    setSpeechScore(null);
    setSpeechFeedback('Đang lắng nghe... Hãy đọc to câu tiếng Anh ở trên!');

    let receivedSpeech = false;

    if (silenceTimeoutRef.current) clearTimeout(silenceTimeoutRef.current);
    silenceTimeoutRef.current = setTimeout(() => {
      if (!receivedSpeech) {
        setIsRecording(false);
        setSpokenText('(Không có âm thanh)');
        setSpeechScore(0);
        setSpeechFeedback('⚠️ Không ghi nhận được giọng nói. Bạn hãy kiểm tra micro và đọc to rõ nhé!');
        playSound('wrong');
      }
    }, 6000);

    startSpeechRecognition(
      (transcript) => {
        receivedSpeech = true;
        if (silenceTimeoutRef.current) clearTimeout(silenceTimeoutRef.current);
        setIsRecording(false);

        const cleanTranscript = (transcript || '').trim();
        if (!cleanTranscript) {
          setSpokenText('(Không nghe rõ)');
          setSpeechScore(0);
          setSpeechFeedback('⚠️ Chưa nghe rõ âm thanh. Hãy bấm lại micro và đọc to câu trên!');
          playSound('wrong');
          return;
        }

        setSpokenText(cleanTranscript);
        const score = calculateSimilarity(currentExercise.englishSentence, cleanTranscript);
        setSpeechScore(score);

        if (score >= 65) {
          setSpeechFeedback(`🎉 Xuất sắc! Phát âm chuẩn ${score}% so với người bản ngữ.`);
          playSound('success');
        } else if (score >= 40) {
          setSpeechFeedback(`👍 Đạt ${score}%. Chú ý phát âm rõ trọng âm và âm đuôi để nâng điểm nhé!`);
        } else {
          setSpeechFeedback(`❌ Chỉ đạt ${score}%. Bạn cần đọc sát với câu tiếng Anh mẫu ở trên.`);
          playSound('wrong');
        }
      },
      () => {
        setIsRecording(false);
      },
      'en-US'
    );
  };

  // Check Answer Handler
  const handleCheckAnswer = () => {
    if (isEvaluated) return;

    let correct = false;

    if (currentExercise.type === 'word_order') {
      const builtSentence = selectedWordChips.join(' ').trim();
      const targetSentence = currentExercise.englishSentence.trim();
      
      const cleanBuilt = builtSentence.toLowerCase().replace(/[.,!?'"]/g, '');
      const cleanTarget = targetSentence.toLowerCase().replace(/[.,!?'"]/g, '');

      if (cleanBuilt === cleanTarget) {
        correct = true;
      }
    } else if (currentExercise.type === 'choice') {
      if (selectedChoice === currentExercise.correctIndex) {
        correct = true;
      }
    } else if (currentExercise.type === 'speak') {
      if (speechScore !== null && speechScore >= 60) {
        correct = true;
      }
    }

    setIsEvaluated(true);
    setIsAnswerCorrect(correct);

    if (correct) {
      const nextCombo = streakCombo + 1;
      setStreakCombo(nextCombo);
      if (nextCombo >= 3) {
        playSound('celebrate');
        confetti({
          particleCount: 45,
          spread: 70,
          origin: { y: 0.7 }
        });
      } else {
        playSound('correct');
        confetti({
          particleCount: 25,
          spread: 50,
          origin: { y: 0.85 }
        });
      }
    } else {
      setStreakCombo(0);
      setLessonMistakeCount(prev => prev + 1);
      playSound('wrong');
      if (onRecordMistake) {
        onRecordMistake({
          questionId: currentExercise.id,
          promptEn: currentExercise.promptEn || currentExercise.promptVi,
          promptVi: currentExercise.promptVi,
          correctSentence: currentExercise.englishSentence,
          wrongChoiceGiven: currentExercise.options && selectedChoice !== null
            ? currentExercise.options[selectedChoice]
            : selectedWordChips.join(' ') || (spokenText || 'Chưa đúng'),
          options: currentExercise.options || [],
          correctIndex: currentExercise.correctIndex ?? 0,
          explanation: currentExercise.whyWrong || currentExercise.explanation || 'Chú ý cấu trúc ngữ pháp chuẩn quốc tế.',
          category: lesson.title,
        });
      }
    }
  };

  // Accurate stars based on mistakes:
  // 0 mistakes = 3 stars (3/3)
  // 1 mistake = 2 stars (2/3)
  // 2+ mistakes = 1 star (1/3)
  const earnedStars = lessonMistakeCount === 0 ? 3 : lessonMistakeCount === 1 ? 2 : 1;

  const handleContinue = () => {
    playSound('click');
    stopSpeech();

    if (exerciseIndex + 1 < lesson.exercises.length) {
      setExerciseIndex(prev => prev + 1);
    } else {
      setIsLessonFinished(true);
      playSound('celebrate');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onFinishLesson(lesson.xpReward, lesson.gemReward, earnedStars);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (!isEvaluated) {
          const canSubmit = 
            (currentExercise.type === 'word_order' && selectedWordChips.length > 0) ||
            (currentExercise.type === 'choice' && selectedChoice !== null) ||
            (currentExercise.type === 'speak' && speechScore !== null && speechScore > 0);
          if (canSubmit) {
            handleCheckAnswer();
          }
        } else {
          handleContinue();
        }
      } else if (e.key === ' ' && isEvaluated) {
        e.preventDefault();
        handlePlayAudio();
      } else if (!isEvaluated && currentExercise.type === 'choice' && currentExercise.options) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (idx < currentExercise.options.length) {
            setSelectedChoice(idx);
            playSound('click');
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEvaluated, selectedChoice, selectedWordChips, speechScore, currentExercise]);

  const progressPercent = ((exerciseIndex + (isEvaluated && isAnswerCorrect ? 1 : 0)) / lesson.exercises.length) * 100;

  // Determine Question Prompt & Instruction
  const getQuestionInstruction = () => {
    if (currentExercise.type === 'word_order') {
      return 'Dịch và ghép câu tiếng Anh hoàn chỉnh:';
    }
    if (currentExercise.type === 'choice') {
      return 'Chọn câu tiếng Anh chính xác nhất:';
    }
    if (currentExercise.type === 'speak') {
      return 'Luyện phát âm câu sau vào micro:';
    }
    return 'Lắng nghe và chọn đáp án đúng:';
  };

  const getMainQuestionText = () => {
    if (currentExercise.type === 'word_order' || currentExercise.type === 'choice') {
      return currentExercise.promptVi;
    }
    return currentExercise.englishSentence;
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between select-none animate-in fade-in duration-150">
      
      {/* 1. TOP HEADER BAR */}
      <div className="px-4 py-3 border-b border-slate-200/90 flex items-center justify-between gap-3 max-w-3xl mx-auto w-full">
        <button
          onClick={() => {
            stopSpeech();
            playSound('click');
            onClose();
          }}
          className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
          title="Thoát bài học"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 bg-slate-100 h-3.5 rounded-full overflow-hidden border border-slate-200/80">
          <div
            className="bg-[#22c55e] h-full transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Quick Voice Switcher */}
        <button
          onClick={() => {
            playSound('click');
            setIsVoicePickerOpen(true);
          }}
          className="px-2 py-1 rounded-xl bg-sky-50 border border-sky-200 text-[#0070D1] hover:bg-sky-100 text-xs font-bold flex items-center gap-1 cursor-pointer shrink-0"
          title="Chọn giọng phát âm AI"
        >
          <span>{VOICE_OPTIONS.find(v => v.id === currentVoiceId)?.flag || '🇺🇸'}</span>
          <Settings2 className="w-3.5 h-3.5 text-sky-600" />
        </button>

        <VoiceSelectorModal
          isOpen={isVoicePickerOpen}
          onClose={() => setIsVoicePickerOpen(false)}
          onSelectVoice={(vId) => setCurrentVoiceId(vId)}
        />
      </div>

      {/* 2. MAIN EXERCISE CANVAS */}
      {!isLessonFinished ? (
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 sm:py-5 max-w-2xl mx-auto w-full flex flex-col justify-between">
          
          {/* Question Prompt with Mascot reaction */}
          <div className="flex items-start gap-3 sm:gap-3.5 pt-1 sm:pt-2">
            <div className="shrink-0 mt-1 flex flex-col items-center">
              <VikoMascot 
                size="md" 
                mood={
                  isEvaluated 
                    ? (isAnswerCorrect 
                        ? (streakCombo >= 3 ? 'dancing' : 'celebrate') 
                        : 'scratching_head') 
                    : (streakCombo >= 3 ? 'dancing' : 'happy')
                } 
              />
              {streakCombo >= 3 && (
                <span className="mt-1 px-1.5 py-0.2 rounded-full bg-amber-400 text-amber-950 font-black text-[9px] shadow-xs animate-bounce whitespace-nowrap">
                  🔥 x{streakCombo} Streak!
                </span>
              )}
            </div>

            <div className="flex-1 bg-sky-50/80 border-2 border-sky-200 rounded-3xl p-3.5 sm:p-4 shadow-xs relative">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-black text-[#0070D1] tracking-wider">
                  {getQuestionInstruction()}
                </span>
                
                {/* Audio Button */}
                {(currentExercise.type === 'speak' || isEvaluated) ? (
                  <button
                    onClick={handlePlayAudio}
                    className="p-1.5 rounded-full bg-white hover:bg-sky-100 text-[#0070D1] shadow-2xs border border-sky-200 cursor-pointer transition-transform active:scale-90"
                    title="Nghe phát âm chuẩn (Phím Space)"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="text-[9px] text-slate-400 italic">
                    (Nghe sau khi trả lời)
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug break-words">
                  {getMainQuestionText()}
                </h3>

                {currentExercise.type === 'speak' && (
                  <p className="text-xs text-slate-500 font-medium">
                    👉 {currentExercise.promptVi}
                  </p>
                )}
                {currentExercise.type === 'speak' && currentExercise.phonetics && (
                  <p className="text-[11px] font-mono text-cyan-800 font-bold">
                    {currentExercise.phonetics}
                  </p>
                )}
              </div>

              {/* Emotional Mascot Encouragement Bubble */}
              {isEvaluated && !isAnswerCorrect && (
                <div className="mt-2.5 p-2 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1.5 animate-in fade-in">
                  <span>💡 Viko động viên:</span>
                  <span className="italic">"Thử lại nhé, bạn sắp làm được rồi! 💪"</span>
                </div>
              )}

              {/* Combo Streak Cheering */}
              {isEvaluated && isAnswerCorrect && streakCombo >= 3 && (
                <div className="mt-2.5 p-2 rounded-xl bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs font-black flex items-center gap-1.5 animate-bounce">
                  <span>🎉 Viko nhảy múa:</span>
                  <span>"Quá đỉnh! Giữ vững chuỗi đúng x{streakCombo} nhé!"</span>
                </div>
              )}
            </div>
          </div>

          {/* Exercise Interaction Body */}
          <div className="flex-1 flex flex-col justify-center space-y-4 py-4 sm:py-6">
            
            {/* TYPE 1: WORD ORDER */}
            {currentExercise.type === 'word_order' && (
              <div className="space-y-4">
                {/* Sentence Answer Slots */}
                <div className="min-h-[64px] p-3 rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/40 flex flex-wrap gap-2 items-center">
                  {selectedWordChips.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTapSelectedWord(word, idx)}
                      className="px-3 py-1.5 rounded-xl bg-[#009FE3] text-white text-xs font-black border-b-3 border-[#0072CE] active:translate-y-0.5 cursor-pointer shadow-xs"
                    >
                      {word}
                    </button>
                  ))}
                  {selectedWordChips.length === 0 && (
                    <span className="text-xs text-slate-400 font-medium italic">
                      Chạm vào các từ bên dưới để ghép câu (chú ý có từ gây nhiễu)...
                    </span>
                  )}
                </div>

                {/* Available Word Pool */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {availableWordChips.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTapAvailableWord(word, idx)}
                      className="px-3.5 py-2 rounded-xl bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 hover:border-sky-300 text-slate-800 text-xs font-black active:translate-y-0.5 active:border-b-2 cursor-pointer shadow-xs"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TYPE 2: MULTIPLE CHOICE */}
            {currentExercise.type === 'choice' && currentExercise.options && (
              <div className="space-y-2.5">
                {currentExercise.options.map((option, idx) => {
                  const isSelected = selectedChoice === idx;
                  let style = 'bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-800 hover:border-sky-300';

                  if (isEvaluated) {
                    if (idx === currentExercise.correctIndex) {
                      style = 'bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 font-black';
                    } else if (isSelected) {
                      style = 'bg-rose-50 border-2 border-rose-500 border-b-4 border-b-rose-600 text-rose-950 font-bold';
                    } else {
                      style = 'opacity-40 border-slate-200 border-b-2';
                    }
                  } else if (isSelected) {
                    style = 'bg-sky-50 border-2 border-[#009FE3] border-b-4 border-b-[#0072CE] text-[#0070D1] font-black';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isEvaluated}
                      onClick={() => {
                        playSound('click');
                        setSelectedChoice(idx);
                      }}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer active:translate-y-0.5 ${style}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-black text-slate-700 border border-slate-300 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-bold">{option}</span>
                      </div>
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-black shrink-0 ml-2">
                        {String.fromCharCode(65 + idx)}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* TYPE 3: REAL VOICE SPEAKING */}
            {currentExercise.type === 'speak' && (
              <div className="text-center space-y-4 py-2">
                <div className="py-2">
                  <button
                    onClick={handleStartSpeaking}
                    className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center shadow-lg transition-all cursor-pointer ${
                      isRecording
                        ? 'bg-rose-500 text-white animate-pulse scale-110 border-b-4 border-rose-700'
                        : 'bg-[#009FE3] border-b-4 border-[#0072CE] text-white hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </button>
                  <p className="text-xs text-slate-500 font-bold mt-2">
                    {isRecording ? 'Đang lắng nghe... Hãy nói ngay!' : 'Nhấn vào micro và đọc câu tiếng Anh ở trên'}
                  </p>
                </div>

                {spokenText && (
                  <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-xs max-w-md mx-auto">
                    <p className="text-slate-600 font-semibold italic">Giọng bạn: "{spokenText}"</p>
                    {speechScore !== null && (
                      <p className={`font-black text-sm mt-1.5 ${
                        speechScore >= 65 ? 'text-emerald-600' : speechScore > 0 ? 'text-amber-600' : 'text-rose-600'
                      }`}>
                        Độ chuẩn phát âm: {speechScore}%
                      </p>
                    )}
                    {speechFeedback && (
                      <p className="text-[11px] text-slate-500 mt-1 font-medium">
                        {speechFeedback}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      ) : (
        /* LESSON FINISHED SUMMARY (ACCURATE STAR SCORING) */
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4 max-w-sm mx-auto">
          <VikoMascot size="xl" mood="celebrate" />

          {/* Dynamic 3-Star Rating Animation */}
          <div className="flex items-center justify-center gap-2 py-1">
            {[1, 2, 3].map((starNum) => (
              <div
                key={starNum}
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-md transition-all ${
                  starNum <= earnedStars
                    ? 'bg-gradient-to-tr from-amber-400 to-amber-300 text-amber-950 scale-110 border-2 border-amber-500'
                    : 'bg-slate-100 text-slate-300 border border-slate-200'
                }`}
              >
                <Star className="w-6 h-6 fill-current" />
              </div>
            ))}
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900">
              {earnedStars === 3 ? 'Hoàn Hảo 3/3 Sao!' : earnedStars === 2 ? 'Rất Tốt 2/3 Sao!' : 'Đạt 1/3 Sao!'}
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              {earnedStars === 3
                ? 'Xuất sắc! Bạn không mắc lỗi nào trong bài học.'
                : earnedStars === 2
                ? 'Bạn chỉ làm sai 1 câu. Hãy tiếp tục phát huy!'
                : `Bạn đã hoàn thành nhưng sai ${lessonMistakeCount} câu. Hãy luyện lại để đạt 3 sao trọn vẹn nhé!`}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-200 border-b-4 border-b-amber-300 text-center">
              <div className="text-2xl font-black text-amber-600">+{lesson.xpReward}</div>
              <div className="text-[10px] text-amber-800 font-black uppercase">Kinh Nghiệm XP</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-cyan-50 border-2 border-cyan-200 border-b-4 border-b-cyan-300 text-center">
              <div className="text-2xl font-black text-[#0070D1]">+{lesson.gemReward} 💎</div>
              <div className="text-[10px] text-cyan-800 font-black uppercase">Ngọc Khoáng</div>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="w-full py-3.5 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] border-b-4 border-[#15803d] text-white font-black text-sm uppercase tracking-wide cursor-pointer shadow-md"
          >
            Nhận Thưởng & Tiếp Tục
          </button>
        </div>
      )}

      {/* 3. CENTERED & BALANCED BOTTOM ACTION BAR (FIXES BUTTON SKEWED TO ONE SIDE) */}
      {!isLessonFinished && (
        <div className={`border-t-2 transition-colors duration-200 shrink-0 ${
          isEvaluated
            ? isAnswerCorrect
              ? 'bg-[#d7ffb8] border-[#b8f28b] text-[#1c4d00]'
              : 'bg-[#ffdfe0] border-[#ffb8ba] text-[#581619]'
            : 'bg-white border-slate-200'
        }`}>
          <div className="max-w-2xl mx-auto px-4 py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            
            {/* Feedback Info (When Evaluated) */}
            {isEvaluated ? (
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2.5">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isAnswerCorrect ? 'bg-[#22c55e] text-white' : 'bg-[#e11d48] text-white'
                  }`}>
                    {isAnswerCorrect ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <AlertCircle className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-black text-xs sm:text-sm">
                      {isAnswerCorrect ? 'Chính xác! Tuyệt vời!' : 'Đáp án đúng là:'}
                    </div>
                    {!isAnswerCorrect && (
                      <div className="text-xs sm:text-sm font-bold text-rose-950 break-words mt-0.5 leading-snug">
                        "{currentExercise.englishSentence}"
                      </div>
                    )}
                    {/* Clear Button To Open Detailed Explanation Modal */}
                    {!isAnswerCorrect && (
                      <button
                        onClick={() => setShowGrammarDetail(true)}
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-black text-rose-900 bg-rose-200/80 hover:bg-rose-300 px-2.5 py-1 rounded-xl transition-all cursor-pointer shadow-2xs border border-rose-300 active:scale-95"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Xem giải thích chi tiết & bẫy câu này</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 text-xs text-slate-400 font-bold hidden sm:block truncate">
                {currentExercise.type === 'speak' 
                  ? 'Nhấn micro và đọc to câu trên để hệ thống chấm điểm'
                  : 'Chọn đáp án rồi nhấn Kiểm Tra (hoặc phím Enter)'}
              </div>
            )}

            {/* Action Button: Full-width on mobile, neatly aligned on desktop */}
            <div className="w-full sm:w-auto shrink-0 flex justify-center sm:justify-end">
              {!isEvaluated ? (
                <button
                  disabled={
                    (currentExercise.type === 'word_order' && selectedWordChips.length === 0) ||
                    (currentExercise.type === 'choice' && selectedChoice === null) ||
                    (currentExercise.type === 'speak' && (speechScore === null || speechScore === 0))
                  }
                  onClick={handleCheckAnswer}
                  className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 sm:py-3 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] border-b-4 border-[#004b96] text-white font-black text-sm uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md active:translate-y-0.5 text-center flex items-center justify-center gap-2"
                >
                  <span>Kiểm Tra</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className={`w-full sm:w-auto min-w-[180px] px-8 py-3.5 sm:py-3 rounded-2xl font-black text-sm uppercase tracking-wider cursor-pointer shadow-md active:translate-y-0.5 text-center flex items-center justify-center gap-2 ${
                    isAnswerCorrect
                      ? 'bg-[#22c55e] hover:bg-[#16a34a] border-b-4 border-[#15803d] text-white'
                      : 'bg-[#e11d48] hover:bg-[#be123c] border-b-4 border-[#9f1239] text-white'
                  }`}
                >
                  <span>Tiếp Tục</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 4. EXPANDED DETAILED EXPLANATION BOTTOM SHEET (SOLVES: "chỗ giải thích bị dài quá ko đọc dc") */}
      {showGrammarDetail && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-6 border-2 border-slate-200 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-6 duration-200">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
                  💡
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">Giải Thích Chi Tiết & Bẫy Câu Hỏi</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Bí quyết giao tiếp chuẩn mực Vikoda</p>
                </div>
              </div>
              <button
                onClick={() => setShowGrammarDetail(false)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Target sentence */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
              <span className="text-[10px] font-black uppercase text-emerald-800">✅ Câu trả lời chuẩn xác:</span>
              <p className="text-sm font-black text-emerald-950 font-sans break-words">
                "{currentExercise.englishSentence}"
              </p>
              {currentExercise.phonetics && (
                <p className="text-[11px] font-mono text-emerald-700 font-bold break-words">
                  {currentExercise.phonetics}
                </p>
              )}
            </div>

            {/* Why wrong & grammar analysis */}
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs space-y-1.5">
              <span className="text-[10px] font-black uppercase text-rose-800">⚠️ Phân tích bẫy lỗi thường gặp:</span>
              <p className="text-xs text-rose-950 font-medium leading-relaxed break-words">
                {currentExercise.whyWrong || currentExercise.explanation}
              </p>
            </div>

            {/* Crucial Note */}
            {currentExercise.crucialNote && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-800">⚡ Lưu ý thực chiến với đối tác:</span>
                <p className="text-xs text-amber-950 font-medium leading-relaxed break-words">
                  {currentExercise.crucialNote}
                </p>
              </div>
            )}

            {/* Memory Hook */}
            {currentExercise.memoryHook && (
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs space-y-1">
                <span className="text-[10px] font-black uppercase text-[#0070D1]">🧠 Mẹo nhớ lâu (Memory Hook):</span>
                <p className="text-xs text-slate-800 font-bold break-words">
                  {currentExercise.memoryHook}
                </p>
              </div>
            )}

            <button
              onClick={() => setShowGrammarDetail(false)}
              className="w-full py-3.5 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-md"
            >
              Đã Hiểu • Tiếp Tục Bài Học
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
