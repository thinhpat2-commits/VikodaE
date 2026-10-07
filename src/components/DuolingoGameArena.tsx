import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Volume2, 
  VolumeX,
  Mic, 
  MicOff, 
  Check, 
  AlertCircle, 
  Sparkles,
  Settings2,
  ChevronRight,
  HelpCircle,
  ArrowRight,
  Star,
  Headphones,
  BookOpen,
  Edit3,
  Puzzle,
  RotateCcw,
  ShieldAlert,
  Zap
} from 'lucide-react';
import { UnitLesson, LessonExercise } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { VoiceSelectorModal } from './VoiceSelectorModal';
import { LiveCircularMicButton } from './LiveCircularMicButton';
import { InteractiveSentenceViewer } from './InteractiveSentenceViewer';
import { MicPermissionHelpModal } from './MicPermissionHelpModal';
import { STORAGE_KEY_ADMIN_SETTINGS, TrainingSystemSettings } from './AdminPortalModal';
import { 
  playSpeech, 
  stopSpeech, 
  calculateSimilarity, 
  evaluatePronunciationDetails,
  DetailedSpeechEvaluation,
  startSpeechRecognition,
  stopSpeechRecognition,
  finishSpeechRecognition,
  isSpeechRecognitionSupported,
  VOICE_OPTIONS,
  getSelectedVoiceId,
  subscribeVoiceChange,
  VoiceOptionId,
  triggerHaptic
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
        if (!poolSet.has(cand.toLowerCase()) && result.length < targetWords.length + 3) {
          result.push(cand);
          poolSet.add(cand.toLowerCase());
          break;
        }
      }
    }
  });

  // Randomize word pool order
  return result.sort(() => 0.5 - Math.random());
};

// Intelligently prepare session exercises with randomized order and randomized option positions
const prepareSessionExercises = (exercises: LessonExercise[]): LessonExercise[] => {
  const cloned: LessonExercise[] = JSON.parse(JSON.stringify(exercises));

  // 1. For choice, listen_choice, fill_blank: shuffle options and recalculate correctIndex
  const processed = cloned.map((ex) => {
    if ((ex.type === 'choice' || ex.type === 'listen_choice' || ex.type === 'fill_blank') && ex.options && ex.options.length > 1) {
      const correctIdx = ex.correctIndex ?? 0;
      const correctOptionText = ex.options[correctIdx];
      
      // Shuffle options copy
      const shuffledOptions = [...ex.options].sort(() => 0.5 - Math.random());
      const newCorrectIdx = shuffledOptions.findIndex(opt => opt === correctOptionText);

      return {
        ...ex,
        options: shuffledOptions,
        correctIndex: newCorrectIdx >= 0 ? newCorrectIdx : 0
      };
    }
    return ex;
  });

  // 2. Shuffle exercises sequence so learners don't face identical order every session
  return [...processed].sort(() => 0.5 - Math.random());
};

export const DuolingoGameArena: React.FC<DuolingoGameArenaProps> = ({
  lesson,
  onClose,
  onFinishLesson,
  speechRate,
  onRecordMistake
}) => {
  // Session exercises: pre-shuffled once per session to avoid predictable patterns
  const [sessionExercises, setSessionExercises] = useState<LessonExercise[]>(() => 
    prepareSessionExercises(lesson.exercises)
  );

  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const [selectedWordChips, setSelectedWordChips] = useState<string[]>([]);
  const [availableWordChips, setAvailableWordChips] = useState<string[]>([]);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  
  // Voice speaking & settings states
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [spokenText, setSpokenText] = useState<string>('');
  const [liveInterimText, setLiveInterimText] = useState<string>('');
  const [micErrorMessage, setMicErrorMessage] = useState<string>('');
  const [pronunciationDetails, setPronunciationDetails] = useState<DetailedSpeechEvaluation | null>(null);
  const [speechScore, setSpeechScore] = useState<number | null>(null);
  const [speechFeedback, setSpeechFeedback] = useState<string>('');
  const [currentVoiceId, setCurrentVoiceId] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);

  // Audio listening states
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Evaluation & Star Scoring states
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [isLessonFinished, setIsLessonFinished] = useState<boolean>(false);
  const [showGrammarDetail, setShowGrammarDetail] = useState<boolean>(false);
  const [streakCombo, setStreakCombo] = useState<number>(0);
  const [lessonMistakeCount, setLessonMistakeCount] = useState<number>(0);

  // Quiet Office Study Mode & Mic Permission Modal states
  const [isQuietModeActive, setIsQuietModeActive] = useState<boolean>(() => {
    try {
      return localStorage.getItem('vikoda_quiet_study_mode') === 'true';
    } catch (e) {
      return false;
    }
  });
  const [showMicPermissionHelp, setShowMicPermissionHelp] = useState<boolean>(false);
  const [hasUnlimitedEnergy] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_ADMIN_SETTINGS);
        if (raw) {
          const parsed: TrainingSystemSettings = JSON.parse(raw);
          return Boolean(parsed.unlimitedEnergy);
        }
      } catch (e) {}
    }
    return false;
  });

  useEffect(() => {
    const unsub = subscribeVoiceChange((vId) => setCurrentVoiceId(vId));
    return () => {
      unsub();
      stopSpeech();
      stopSpeechRecognition();
    };
  }, []);

  // When lesson changes or restarts, prepare fresh randomized exercises
  const [skippedSpeakingSentences, setSkippedSpeakingSentences] = useState<string[]>([]);
  const [isSkippedNeutral, setIsSkippedNeutral] = useState<boolean>(false);

  useEffect(() => {
    setSessionExercises(prepareSessionExercises(lesson.exercises));
    setExerciseIndex(0);
    setLessonMistakeCount(0);
    setStreakCombo(0);
    setSkippedSpeakingSentences([]);
    setIsLessonFinished(false);
  }, [lesson.id]);

  const currentExercise: LessonExercise = sessionExercises[exerciseIndex] || sessionExercises[0] || lesson.exercises[0];

  // Quiet Mode Pass Handler (Nhân viên ở văn phòng / không tiện nói / pass khi không đạt điểm)
  // ĐÚNG CHUẨN SƯ PHẠM: KHÔNG CỘNG KHÔNG TRỪ (0 điểm, 0 XP, 0 ngọc, không trừ tim, lưu lại học sau)
  const handlePassSpeakingQuietly = (reason: 'quiet_office' | 'low_score_override') => {
    playSound('click');
    triggerHaptic('light');
    setIsRecording(false);
    stopSpeech();
    stopSpeechRecognition();

    // Lưu vào danh sách để luyện nói sau khi rảnh tay
    if (!skippedSpeakingSentences.includes(currentExercise.englishSentence)) {
      setSkippedSpeakingSentences((prev) => [...prev, currentExercise.englishSentence]);
    }

    setSpeechScore(null); // Không chấm điểm giả
    setIsSkippedNeutral(true);
    setSpeechFeedback(
      reason === 'quiet_office'
        ? '🤫 Đã lưu câu này để luyện nói sau (Không cộng/trừ điểm). Bạn có thể tiếp tục câu tiếp theo mà không bị trừ tim!'
        : '🤝 Đã lưu câu này để luyện lại sau khi rảnh tay (Không cộng/trừ điểm hay tim).'
    );
    setIsAnswerCorrect(false);
    setIsEvaluated(true);
    // Giữ nguyên chuỗi combo hiện tại, không tăng ảo và không reset
  };

  // Initialize exercise state
  useEffect(() => {
    if (!currentExercise) return;

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
    setLiveInterimText('');
    setMicErrorMessage('');
    setPronunciationDetails(null);
    setSpeechScore(null);
    setSpeechFeedback('');
    setIsEvaluated(false);
    setIsAnswerCorrect(false);
    setIsSkippedNeutral(false);
    setShowGrammarDetail(false);
    setIsPlayingAudio(false);

    // Auto-play audio only for listening comprehension with true onEnd callback
    if (currentExercise.type === 'listen_choice') {
      const textToPlay = currentExercise.audioText || currentExercise.englishSentence || '';
      if (textToPlay) {
        setIsPlayingAudio(true);
        playSpeech(textToPlay, speechRate, 'en-US', () => setIsPlayingAudio(false));
      }
    }
  }, [exerciseIndex, currentExercise]);

  const handlePlayAudio = (rate: number = speechRate) => {
    const textToPlay = currentExercise.audioText || currentExercise.englishSentence || '';
    if (!textToPlay) return;
    setIsPlayingAudio(true);
    playSpeech(textToPlay, rate, 'en-US', () => setIsPlayingAudio(false));
  };

  // Word tap actions for word_order
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

  // REAL SPEECH RECOGNITION (TỰ ĐỘNG CHẤM ĐIỂM, KHÔNG CẦN BẤM NỘP)
  const handleStartSpeaking = () => {
    if (isRecording) {
      // Optional manual stop if user wants to evaluate immediately
      finishSpeechRecognition();
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setMicErrorMessage('Trình duyệt chưa hỗ trợ micro trực tiếp. Vui lòng sử dụng Google Chrome hoặc Microsoft Edge!');
      return;
    }

    playSound('click');
    triggerHaptic('light');
    setIsRecording(true);
    setSpokenText('');
    setLiveInterimText('');
    setMicErrorMessage('');
    setPronunciationDetails(null);
    setSpeechScore(null);
    setSpeechFeedback('Đang mở micro... Hãy đọc to câu tiếng Anh ở trên!');

    startSpeechRecognition(
      // On Final Result (Tự động nộp bài và chấm điểm ngay khi đọc xong)
      (transcript) => {
        setSpokenText(transcript);
        setLiveInterimText('');
        setIsRecording(false);

        const details = evaluatePronunciationDetails(
          currentExercise.englishSentence,
          transcript
        );
        setPronunciationDetails(details);
        setSpeechScore(details.score);
        setSpeechFeedback(details.feedback);

        if (details.passed) {
          playSound('correct');
          triggerHaptic('success');
        } else {
          playSound('wrong');
          triggerHaptic('warning');
        }
      },
      // On End
      () => {
        setIsRecording(false);
      },
      // On Error
      (errorMsg) => {
        setMicErrorMessage(errorMsg);
        setIsRecording(false);
        if (errorMsg.includes('quyền') || errorMsg.includes('not-allowed')) {
          setShowMicPermissionHelp(true);
        }
      },
      // On Interim Streaming (Live Words)
      (interim) => {
        setLiveInterimText(interim);
      },
      'en-US',
      currentExercise.englishSentence
    );
  };

  // Check Answer Handler
  const handleCheckAnswer = () => {
    if (isEvaluated) return;

    let correct = false;

    if (currentExercise.type === 'word_order') {
      const normalizeSentence = (s: string) => 
        s.toLowerCase()
         .replace(/[’‘`]/g, "'")
         .replace(/[“”]/g, '"')
         .replace(/[.,!?'"–—\-]/g, '')
         .replace(/\s+/g, ' ')
         .trim();

      const cleanBuilt = normalizeSentence(selectedWordChips.join(' '));
      const cleanTarget = normalizeSentence(currentExercise.englishSentence);

      if (cleanBuilt === cleanTarget) {
        correct = true;
      }
    } else if (currentExercise.type === 'choice' || currentExercise.type === 'listen_choice' || currentExercise.type === 'fill_blank') {
      if (selectedChoice === currentExercise.correctIndex) {
        correct = true;
      }
    } else if (currentExercise.type === 'speak') {
      if (speechScore !== null && speechScore >= 55) {
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
      }
    } else {
      setStreakCombo(0);
      setLessonMistakeCount(prev => prev + 1);
      playSound('wrong');

      // Record mistake for Daily Quick Review Vault
      if (onRecordMistake) {
        onRecordMistake({
          id: `mistake-${Date.now()}-${currentExercise.id}`,
          exerciseId: currentExercise.id,
          unitId: lesson.id,
          unitTitle: lesson.title,
          promptVi: currentExercise.promptVi,
          correctEnglish: currentExercise.englishSentence,
          userAnswer: currentExercise.type === 'word_order' 
            ? selectedWordChips.join(' ') 
            : currentExercise.options && selectedChoice !== null 
            ? currentExercise.options[selectedChoice] 
            : spokenText,
          explanation: currentExercise.explanation,
          whyWrong: currentExercise.whyWrong,
          crucialNote: currentExercise.crucialNote,
          timestamp: Date.now(),
          mastered: false,
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

    if (exerciseIndex + 1 < sessionExercises.length) {
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
            ((currentExercise.type === 'choice' || currentExercise.type === 'listen_choice' || currentExercise.type === 'fill_blank') && selectedChoice !== null) ||
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
      } else if (!isEvaluated && (currentExercise.type === 'choice' || currentExercise.type === 'listen_choice' || currentExercise.type === 'fill_blank') && currentExercise.options) {
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

  const progressPercent = ((exerciseIndex + (isEvaluated && isAnswerCorrect ? 1 : 0)) / sessionExercises.length) * 100;

  // Determine Question Skill Badge
  const getSkillBadge = () => {
    switch (currentExercise.type) {
      case 'listen_choice':
        return {
          icon: Headphones,
          label: 'Luyện Nghe Phản Xạ',
          color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
        };
      case 'speak':
        return {
          icon: Mic,
          label: 'Luyện Phát Âm AI',
          color: 'bg-emerald-100 text-emerald-800 border-emerald-200'
        };
      case 'choice':
        return {
          icon: BookOpen,
          label: 'Đọc Hiểu Tình Huống',
          color: 'bg-sky-100 text-sky-800 border-sky-200'
        };
      case 'fill_blank':
        return {
          icon: Puzzle,
          label: 'Điền Từ Chỗ Trống',
          color: 'bg-amber-100 text-amber-800 border-amber-200'
        };
      case 'word_order':
      default:
        return {
          icon: Edit3,
          label: 'Ghép Câu & Ngữ Pháp',
          color: 'bg-purple-100 text-purple-800 border-purple-200'
        };
    }
  };

  const skillBadge = getSkillBadge();
  const SkillIcon = skillBadge.icon;

  // Question Instruction Text
  const getQuestionInstruction = () => {
    if (currentExercise.type === 'word_order') {
      return 'Dịch và ghép câu tiếng Anh hoàn chỉnh:';
    }
    if (currentExercise.type === 'choice') {
      return 'Chọn câu tiếng Anh chuẩn mực nhất:';
    }
    if (currentExercise.type === 'speak') {
      return 'Luyện phát âm câu sau vào micro:';
    }
    if (currentExercise.type === 'fill_blank') {
      return 'Chọn từ thích hợp điền vào ô trống:';
    }
    return 'Lắng nghe đoạn ghi âm và chọn câu trả lời đúng:';
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

        {/* Unlimited Hearts indicator when Admin enabled */}
        {hasUnlimitedEnergy && (
          <div 
            className="px-2 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-[11px] flex items-center gap-1 shadow-2xs shrink-0 select-none animate-in fade-in"
            title="Admin đã kích hoạt Chế độ Tim Vô Hạn: Làm sai không bị trừ tim!"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Tim Vô Hạn</span>
          </div>
        )}

        {/* Quiet Office Mode Toggle (Dành cho nhân viên cần im lặng) */}
        <button
          onClick={() => {
            playSound('click');
            const next = !isQuietModeActive;
            setIsQuietModeActive(next);
            try {
              localStorage.setItem('vikoda_quiet_study_mode', String(next));
            } catch (e) {}
            if (next && currentExercise.type === 'speak' && !isEvaluated) {
              handlePassSpeakingQuietly('quiet_office');
            }
          }}
          className={`px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 border ${
            isQuietModeActive
              ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-xs'
              : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
          }`}
          title={isQuietModeActive ? 'Chế độ im lặng đang BẬT (Tự động bỏ qua bài nói)' : 'Bấm để bật Chế độ im lặng (Khi ở văn phòng, nơi công cộng)'}
        >
          {isQuietModeActive ? <VolumeX className="w-3.5 h-3.5 text-amber-600" /> : <Volume2 className="w-3.5 h-3.5 text-slate-500" />}
          <span className="hidden sm:inline">{isQuietModeActive ? 'Đang Im Lặng' : 'Im Lặng'}</span>
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
              <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                <div className="flex items-center gap-1.5">
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${skillBadge.color}`}>
                    <SkillIcon className="w-3 h-3" />
                    <span>{skillBadge.label}</span>
                  </div>
                  <span className="text-[10px] uppercase font-black text-[#0070D1] tracking-wider hidden sm:inline">
                    • {getQuestionInstruction()}
                  </span>
                </div>
                
                {/* Audio Button */}
                {(currentExercise.type === 'speak' || currentExercise.type === 'listen_choice' || isEvaluated) && (
                  <button
                    onClick={() => handlePlayAudio(speechRate)}
                    className="p-1.5 rounded-full bg-white hover:bg-sky-100 text-[#0070D1] shadow-2xs border border-sky-200 cursor-pointer transition-transform active:scale-90"
                    title="Nghe phát âm chuẩn (Phím Space)"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Main question prompt */}
              <div className="space-y-1">
                {currentExercise.type === 'listen_choice' ? (
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-bold text-slate-600">
                      {currentExercise.promptVi}
                    </p>
                    {/* Audio Player Card for Listening Questions */}
                    <div className="p-3 bg-white rounded-2xl border-2 border-indigo-200 shadow-xs flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handlePlayAudio(speechRate)}
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                            isPlayingAudio 
                              ? 'bg-indigo-600 text-white scale-105 shadow-md animate-pulse' 
                              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                          }`}
                          title="Bấm để nghe âm thanh"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                        <div>
                          <div className="text-xs font-black text-slate-800">Đoạn Hội Thoại Âm Thanh</div>
                          <div className="text-[11px] text-slate-500 font-medium">Bấm loa để nghe rõ từng từ</div>
                        </div>
                      </div>

                      <button
                        onClick={() => handlePlayAudio(0.75)}
                        className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-[10px] cursor-pointer"
                        title="Nghe tốc độ chậm 0.75x"
                      >
                        🐢 0.75x
                      </button>
                    </div>
                  </div>
                ) : currentExercise.type === 'fill_blank' ? (
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-bold text-slate-600">
                      {currentExercise.promptVi}
                    </p>
                    {/* Sentence with Blank Highlight */}
                    <div className="p-3.5 bg-white rounded-2xl border-2 border-amber-200 shadow-xs text-sm sm:text-base font-black text-slate-900 leading-relaxed">
                      {(() => {
                        const targetBlank = currentExercise.blankWord || '';
                        let displaySentence = currentExercise.englishSentence;
                        
                        // If sentence doesn't contain [ _____ ], replace the target blankWord with [ _____ ]
                        if (!displaySentence.includes('_____') && !displaySentence.includes('____') && targetBlank) {
                          const regex = new RegExp(`\\b${targetBlank}\\b`, 'i');
                          displaySentence = displaySentence.replace(regex, '[ _____ ]');
                        }

                        return displaySentence.split(/\[\s*_{2,}\s*\]|_{3,}/).map((chunk, idx, arr) => (
                          <React.Fragment key={idx}>
                            <span>{chunk}</span>
                            {idx < arr.length - 1 && (
                              <span className={`inline-block px-3 py-1 mx-1.5 rounded-xl border-2 transition-all font-black text-xs sm:text-sm ${
                                selectedChoice !== null && currentExercise.options
                                  ? 'bg-sky-100 border-[#009FE3] text-[#0070D1] shadow-2xs scale-105'
                                  : 'bg-amber-100/70 border-dashed border-amber-400 text-amber-800 animate-pulse'
                              }`}>
                                {selectedChoice !== null && currentExercise.options
                                  ? currentExercise.options[selectedChoice]
                                  : '❓ [ _____ ]'}
                              </span>
                            )}
                          </React.Fragment>
                        ));
                      })()}
                    </div>
                  </div>
                ) : currentExercise.type === 'speak' ? (
                  <div className="space-y-1">
                    <InteractiveSentenceViewer
                      sentence={currentExercise.englishSentence}
                      translation={currentExercise.promptVi}
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug break-words">
                      {currentExercise.type === 'word_order' || currentExercise.type === 'choice' 
                        ? currentExercise.promptVi 
                        : currentExercise.englishSentence}
                    </h3>
                  </div>
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

            {/* TYPE 2: MULTIPLE CHOICE, LISTEN_CHOICE & FILL_BLANK */}
            {(currentExercise.type === 'choice' || currentExercise.type === 'listen_choice' || currentExercise.type === 'fill_blank') && currentExercise.options && (
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

            {/* TYPE 3: REAL VOICE SPEAKING (STUDIO GRADE EVALUATION) */}
            {currentExercise.type === 'speak' && (
              <div className="space-y-4 py-2 max-w-lg mx-auto w-full">
                
                {/* Control bar: Sample listen + Live Circular Mic with real-time acoustic wave rings */}
                <div className="flex items-center justify-center gap-6 py-3">
                  {/* Listen to Sample Audio Button */}
                  <button
                    onClick={() => handlePlayAudio(speechRate)}
                    className="w-14 h-14 rounded-2xl bg-sky-50 hover:bg-sky-100 text-[#0070D1] border-2 border-sky-200 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
                    title="Nghe phát âm chuẩn của người bản xứ trước khi đọc"
                  >
                    <Volume2 className="w-5 h-5" />
                    <span className="text-[9px] font-black uppercase tracking-tight">Nghe Mẫu</span>
                  </button>

                  {/* Circular Live Mic Button with Real-Time Acoustic Ripple Waves */}
                  <LiveCircularMicButton
                    isRecording={isRecording}
                    onClick={handleStartSpeaking}
                    size="lg"
                  />

                  {/* Slow Sample Listen (0.75x) */}
                  <button
                    onClick={() => handlePlayAudio(0.75)}
                    className="w-14 h-14 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 border-2 border-slate-200 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer shadow-2xs"
                    title="Nghe phát âm tốc độ chậm 0.75x"
                  >
                    <span className="text-base leading-none">🐢</span>
                    <span className="text-[9px] font-black uppercase tracking-tight">Chậm 0.75x</span>
                  </button>
                </div>

                {/* Status Guidance & Live Word Streaming (Clean, No Box) */}
                {isRecording ? (
                  <div className="text-center space-y-2 animate-in fade-in">
                    {liveInterimText ? (
                      <div className="inline-block px-4 py-2 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 font-bold text-xs shadow-xs animate-pulse">
                        <span className="text-[10px] text-amber-700 uppercase block font-black mb-0.5">🎙️ Đang nghe giọng bạn:</span>
                        "{liveInterimText}"
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span>Micro đang mở! Hãy đọc to câu tiếng Anh ở trên</span>
                      </div>
                    )}
                    <p className="text-[11px] text-slate-500 font-medium">
                      ⚡ Đọc xong hệ thống sẽ <strong>tự động chấm điểm</strong> (không cần bấm nộp)
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <p className="text-xs text-slate-500 font-bold">
                      Nhấn vào biểu tượng Micro tròn để đọc (Nói xong hệ thống tự chấm)
                    </p>

                    {/* Quiet Study Pass Button (Dành cho nhân viên cần im lặng) */}
                    <div>
                      <button
                        type="button"
                        onClick={() => handlePassSpeakingQuietly('quiet_office')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 border border-slate-300 text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
                        title="Nhân viên đang ở văn phòng, nơi đông người hoặc không tiện nói"
                      >
                        <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                        <span>🤫 Tôi không tiện nói lúc này (Bỏ qua & không trừ tim)</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Error Message Warning Box */}
                {micErrorMessage && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border-2 border-rose-200 text-xs text-rose-900 font-medium space-y-1.5 text-center animate-in fade-in">
                    <p className="font-bold">⚠️ {micErrorMessage}</p>
                    <div className="flex items-center justify-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setShowMicPermissionHelp(true)}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-rose-200/80 hover:bg-rose-300 text-rose-900 font-bold text-[11px] cursor-pointer"
                      >
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Xem cách mở khóa micro</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePassSpeakingQuietly('quiet_office')}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-[11px] cursor-pointer"
                      >
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>Bỏ qua bài nói này</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Pronunciation Evaluation & Word-by-Word Breakdown */}
                {spokenText && (
                  <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-3">
                    
                    {/* Header Score & Feedback */}
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className={`text-base font-black px-2.5 py-0.5 rounded-xl border ${
                          speechScore !== null && speechScore >= 75
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : speechScore !== null && speechScore >= 55
                            ? 'bg-amber-100 text-amber-900 border-amber-300'
                            : 'bg-rose-100 text-rose-900 border-rose-300'
                        }`}>
                          Độ chuẩn: {speechScore}%
                        </span>
                        <span className="text-xs font-bold text-slate-600">
                          {speechScore !== null && speechScore >= 55 ? '✅ Đạt Yêu Cầu' : '❌ Chưa Đạt (>= 55%)'}
                        </span>
                      </div>

                      <span className="text-[10px] text-slate-400 font-bold">
                        Chuẩn CEFR Business
                      </span>
                    </div>

                    {/* Word-by-Word Visual Analysis */}
                    {pronunciationDetails && pronunciationDetails.words.length > 0 && (
                      <div className="space-y-1.5 text-left">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                          Chi tiết từng từ bạn đã phát âm:
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {pronunciationDetails.words.map((item, wIdx) => (
                            <span
                              key={wIdx}
                              className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition-all ${
                                item.status === 'correct'
                                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300 shadow-2xs'
                                  : item.status === 'close'
                                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                                  : 'bg-rose-100 text-rose-900 border-rose-300 line-through opacity-80'
                              }`}
                              title={
                                item.status === 'correct'
                                  ? 'Phát âm chuẩn xác!'
                                  : item.status === 'close'
                                  ? `Gần đúng (nhận được: "${item.spokenMatch || ''}")`
                                  : 'Từ này bị thiếu hoặc chưa nhận diện được'
                              }
                            >
                              {item.word}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Ending Sound Alerts (ELSA Standard) */}
                    {pronunciationDetails && pronunciationDetails.endingSoundAlerts && pronunciationDetails.endingSoundAlerts.length > 0 && (
                      <div className="space-y-1 text-left">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block">
                          ⚡ Góp ý âm đuôi (Ending Sounds):
                        </span>
                        {pronunciationDetails.endingSoundAlerts.map((alert, aIdx) => (
                          <div key={aIdx} className="p-2 bg-amber-50 border border-amber-300 text-amber-950 text-xs font-bold rounded-xl flex items-center gap-1.5">
                            <span className="text-sm">⚠️</span>
                            <span>{alert}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Spoken Text Transcript */}
                    <div className="text-left text-xs bg-white p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 block">Văn bản máy nghe được:</span>
                      <p className="text-slate-800 font-medium italic mt-0.5">"{spokenText}"</p>
                    </div>

                    {/* Feedback message */}
                    {speechFeedback && (
                      <p className="text-xs font-bold text-[#0070D1] text-left">
                        💡 {speechFeedback}
                      </p>
                    )}

                    {/* Override / Pass Button for low score so employee never gets stuck */}
                    {speechScore !== null && speechScore < 55 && (
                      <div className="pt-2 border-t border-slate-200 space-y-1.5">
                        <button
                          type="button"
                          onClick={() => handlePassSpeakingQuietly('low_score_override')}
                          className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-98"
                        >
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Chấp nhận kết quả & Tiếp tục (Không trừ tim)</span>
                        </button>
                        <p className="text-[10px] text-slate-500 text-center">
                          Dành cho nhân viên đang học trong môi trường ồn hoặc micro bắt âm yếu.
                        </p>
                      </div>
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

          {skippedSpeakingSentences.length > 0 && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 font-bold flex items-center gap-2 text-left w-full">
              <VolumeX className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Đã lưu {skippedSpeakingSentences.length} câu nói vào Sổ tay để bạn luyện nói lại khi thuận tiện!</span>
            </div>
          )}

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

      {/* 3. CENTERED & BALANCED BOTTOM ACTION BAR */}
      {!isLessonFinished && (
        <div className={`border-t-2 transition-colors duration-200 shrink-0 ${
          isEvaluated
            ? isSkippedNeutral
              ? 'bg-slate-100 border-slate-300 text-slate-800'
              : isAnswerCorrect
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
                    isSkippedNeutral
                      ? 'bg-slate-600 text-white'
                      : isAnswerCorrect
                      ? 'bg-[#22c55e] text-white'
                      : 'bg-[#e11d48] text-white'
                  }`}>
                    {isSkippedNeutral ? (
                      <VolumeX className="w-4 h-4" />
                    ) : isAnswerCorrect ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <AlertCircle className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-black text-xs sm:text-sm">
                      {isSkippedNeutral
                        ? 'Đã lưu vào sổ tay luyện nói sau'
                        : isAnswerCorrect
                        ? 'Chính xác! Tuyệt vời!'
                        : 'Đáp án đúng là:'}
                    </div>
                    {isSkippedNeutral ? (
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        Bỏ qua câu này (không cộng/trừ điểm hay tim).
                      </div>
                    ) : isAnswerCorrect ? (
                      <div className="space-y-1 mt-0.5">
                        <div className="text-xs sm:text-sm font-semibold text-emerald-950 break-words leading-snug">
                          {currentExercise.vietnameseMeaning 
                            ? `Dịch nghĩa: "${currentExercise.vietnameseMeaning}"`
                            : currentExercise.promptVi
                            ? `Ý nghĩa: "${currentExercise.promptVi.replace(/^(Sắp xếp câu chuẩn|Luyện nói phát âm dõng dạc câu giao tiếp cho|Nghe phát âm chuẩn và chọn câu phản hồi lịch thiệp nhất|Điền từ thích hợp vào chỗ trống để hoàn thiện câu|Chọn câu phản hồi ngoại giao chuẩn mực nhất|Dịch và ghép câu|Chọn câu tiếng Anh chuẩn mực nhất|Luyện phát âm câu sau vào micro|Chọn từ thích hợp điền vào ô trống|Lắng nghe đoạn ghi âm và chọn câu trả lời đúng):?\s*/i, '').replace(/["”]/g, '')}"`
                            : `"${currentExercise.englishSentence}"`}
                        </div>
                        <button
                          onClick={() => setShowGrammarDetail(true)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-200/60 hover:bg-emerald-200 px-2.5 py-0.5 rounded-lg transition-all cursor-pointer border border-emerald-300"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Xem phân tích chi tiết & mẹo nhớ</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1 mt-0.5">
                        <div className="text-xs sm:text-sm font-bold text-rose-950 break-words leading-snug">
                          "{currentExercise.englishSentence}"
                        </div>
                        {(currentExercise.vietnameseMeaning || currentExercise.promptVi) && (
                          <div className="text-xs font-semibold text-rose-800">
                            Dịch nghĩa: "{currentExercise.vietnameseMeaning || currentExercise.promptVi.replace(/^(Sắp xếp câu chuẩn|Luyện nói phát âm dõng dạc câu giao tiếp cho|Nghe phát âm chuẩn và chọn câu phản hồi lịch thiệp nhất|Điền từ thích hợp vào chỗ trống để hoàn thiện câu):?\s*/i, '').replace(/["”]/g, '')}"
                          </div>
                        )}
                        <button
                          onClick={() => setShowGrammarDetail(true)}
                          className="inline-flex items-center gap-1 text-[11px] font-black text-rose-900 bg-rose-200/80 hover:bg-rose-300 px-2.5 py-1 rounded-xl transition-all cursor-pointer shadow-2xs border border-rose-300 active:scale-95"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Xem giải thích chi tiết & bẫy câu này</span>
                        </button>
                      </div>
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

            {/* Action Button */}
            <div className="w-full sm:w-auto shrink-0 flex justify-center sm:justify-end">
              {!isEvaluated ? (
                <button
                  disabled={
                    (currentExercise.type === 'word_order' && selectedWordChips.length === 0) ||
                    ((currentExercise.type === 'choice' || currentExercise.type === 'listen_choice' || currentExercise.type === 'fill_blank') && selectedChoice === null) ||
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
                    isSkippedNeutral
                      ? 'bg-slate-700 hover:bg-slate-800 border-b-4 border-slate-900 text-white'
                      : isAnswerCorrect
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

      {/* 4. EXPANDED DETAILED EXPLANATION BOTTOM SHEET */}
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

      {/* Mic Permission Guidance Modal */}
      <MicPermissionHelpModal
        isOpen={showMicPermissionHelp}
        onClose={() => setShowMicPermissionHelp(false)}
        onRetry={handleStartSpeaking}
      />

    </div>
  );
};
