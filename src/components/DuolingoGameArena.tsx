import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Volume2, 
  Mic, 
  MicOff, 
  Check, 
  AlertCircle, 
  Sparkles,
  Award,
  Settings2
} from 'lucide-react';
import { UnitLesson, LessonExercise } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { VoiceSelectorModal } from './VoiceSelectorModal';
import { 
  playSpeech, 
  stopSpeech, 
  calculateSimilarity, 
  isSpeechRecognitionSupported,
  VOICE_OPTIONS,
  getSelectedVoiceId,
  subscribeVoiceChange,
  VoiceOptionId
} from '../services/speechService';

interface DuolingoGameArenaProps {
  lesson: UnitLesson;
  onClose: () => void;
  onFinishLesson: (xpGain: number, gemGain: number) => void;
  speechRate: number;
  onRecordMistake?: (mistakeData: any) => void;
}

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
  const [currentVoiceId, setCurrentVoiceId] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const unsub = subscribeVoiceChange((vId) => setCurrentVoiceId(vId));
    return unsub;
  }, []);

  // Evaluation states
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [isLessonFinished, setIsLessonFinished] = useState<boolean>(false);

  const currentExercise: LessonExercise = lesson.exercises[exerciseIndex];

  // Initialize exercise state
  React.useEffect(() => {
    if (currentExercise.type === 'word_order' && currentExercise.wordPool) {
      setAvailableWordChips([...currentExercise.wordPool]);
      setSelectedWordChips([]);
    } else {
      setAvailableWordChips([]);
      setSelectedWordChips([]);
    }
    setSelectedChoice(null);
    setIsRecording(false);
    setSpokenText('');
    setSpeechScore(null);
    setIsEvaluated(false);
    setIsAnswerCorrect(false);

    // Play prompt audio automatically for listening practice
    if (currentExercise.audioText) {
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

  // Voice recording
  const handleStartSpeaking = () => {
    if (!isSpeechRecognitionSupported()) {
      setSpokenText('Trình duyệt chưa hỗ trợ Web Speech Recognition. Hãy mở trên Chrome hoặc Edge.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsRecording(true);
    setSpokenText('Đang lắng nghe...');
    setSpeechScore(null);
    playSound('click');

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setSpokenText(text);
      const score = calculateSimilarity(currentExercise.englishSentence, text);
      setSpeechScore(score);
    };

    recognition.onerror = () => {
      setIsRecording(false);
      setSpokenText('Chưa nghe rõ, hãy thử nói lại gần micro hơn.');
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    try {
      recognition.start();
    } catch (e) {
      setIsRecording(false);
    }
  };

  // Check Answer
  const handleCheckAnswer = () => {
    let correct = false;

    if (currentExercise.type === 'word_order') {
      const assembled = selectedWordChips.join(' ').toLowerCase().replace(/[^\w\s]/g, '').trim();
      const target = currentExercise.englishSentence.toLowerCase().replace(/[^\w\s]/g, '').trim();
      correct = assembled === target;
    } else if (currentExercise.type === 'choice') {
      correct = selectedChoice === currentExercise.correctIndex;
    } else if (currentExercise.type === 'speak') {
      correct = (speechScore ?? 0) >= 65;
    }

    setIsEvaluated(true);
    setIsAnswerCorrect(correct);

    if (correct) {
      playSound('correct');
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    } else {
      playSound('wrong');
      if (onRecordMistake) {
        onRecordMistake({
          questionId: currentExercise.id,
          promptEn: currentExercise.promptEn || 'Formulate the correct business sentence:',
          promptVi: currentExercise.promptVi,
          correctSentence: currentExercise.englishSentence,
          wrongChoiceGiven: currentExercise.type === 'choice' && currentExercise.options && selectedChoice !== null ? currentExercise.options[selectedChoice] : '',
          options: currentExercise.options || [currentExercise.englishSentence],
          correctIndex: currentExercise.correctIndex ?? 0,
          explanation: currentExercise.explanation,
          crucialNote: currentExercise.crucialNote,
          category: lesson.title
        });
      }
    }
  };

  // Keyboard navigation on PC (1-4 for options, Enter for check/next, Space for audio)
  React.useEffect(() => {
    if (isLessonFinished) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isEvaluated) {
        if (currentExercise.type === 'choice' && currentExercise.options) {
          if (e.key >= '1' && e.key <= String(currentExercise.options.length)) {
            const idx = parseInt(e.key) - 1;
            setSelectedChoice(idx);
            playSound('click');
          }
        }
        if (e.key === 'Enter') {
          if (currentExercise.type === 'choice' && selectedChoice !== null) {
            handleCheckAnswer();
          } else if (currentExercise.type === 'word_order' && selectedWordChips.length > 0) {
            handleCheckAnswer();
          } else if (currentExercise.type === 'speak' && speechScore !== null) {
            handleCheckAnswer();
          }
        } else if (e.key === ' ' || e.key === 'Spacebar') {
          if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
          e.preventDefault();
          handlePlayAudio();
        }
      } else {
        if (e.key === 'Enter') {
          handleContinue();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEvaluated, isLessonFinished, currentExercise, selectedChoice, selectedWordChips, speechScore]);

  const handleContinue = () => {
    playSound('click');
    if (exerciseIndex < lesson.exercises.length - 1) {
      setExerciseIndex(exerciseIndex + 1);
    } else {
      // Completed all exercises in unit!
      setIsLessonFinished(true);
      playSound('levelup');
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.5 }
      });
      onFinishLesson(lesson.xpReward, lesson.gemReward);
    }
  };

  const progressPercent = Math.round(((exerciseIndex + 1) / lesson.exercises.length) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <div className="px-4 md:px-6 py-3 border-b-2 border-slate-100 flex items-center justify-between gap-4 max-w-3xl lg:max-w-4xl mx-auto w-full">
        <button
          onClick={() => {
            stopSpeech();
            onClose();
          }}
          className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
          title="Đóng bài học"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar (Duolingo Style) */}
        <div className="flex-1 bg-slate-100 h-4 rounded-full overflow-hidden border border-slate-200">
          <div
            className="bg-[#22c55e] h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Quick Voice Switcher in Lesson */}
        <div>
          <button
            onClick={() => {
              playSound('click');
              setIsVoicePickerOpen(true);
            }}
            className="px-2 py-1 rounded-xl bg-sky-50 border border-sky-200 text-[#0070D1] hover:bg-sky-100 text-xs font-bold flex items-center space-x-1 cursor-pointer active:translate-y-0.5"
            title="Đổi giọng đọc AI (Mỹ Nam, Anh Nam Chuẩn, Mỹ Nữ)"
          >
            <span>{VOICE_OPTIONS.find(v => v.id === currentVoiceId)?.flag || '🇺🇸'}</span>
            <Settings2 className="w-3.5 h-3.5" />
          </button>

          <VoiceSelectorModal
            isOpen={isVoicePickerOpen}
            onClose={() => setIsVoicePickerOpen(false)}
            onSelectVoice={(vId) => setCurrentVoiceId(vId)}
          />
        </div>

        <div className="flex items-center space-x-1 text-xs font-black text-amber-500 shrink-0">
          <span>✨</span>
          <span>{lesson.xpReward} XP</span>
        </div>
      </div>

      {/* Main Exercise Area (Widescreen PC layout) */}
      {!isLessonFinished ? (
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-5 max-w-3xl lg:max-w-4xl mx-auto w-full flex flex-col justify-between space-y-5">
          
          {/* Mascot Speech Bubble & Prompt */}
          <div className="flex items-start space-x-4 pt-1">
            <div className="shrink-0">
              <VikoMascot 
                size="md" 
                mood={isEvaluated ? (isAnswerCorrect ? 'celebrate' : 'thinking') : 'happy'} 
              />
            </div>

            <div className="flex-1 bg-sky-50 border-2 border-sky-200 rounded-3xl rounded-tl-xs p-4 md:p-5 shadow-xs relative">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] uppercase font-black text-[#0070D1] tracking-wider">
                  {lesson.title}
                </span>
                <button
                  onClick={handlePlayAudio}
                  className="p-1.5 rounded-full bg-white hover:bg-sky-100 text-[#0066CC] shadow-2xs border border-sky-200 cursor-pointer"
                  title="Nghe phát âm chuẩn (Phím Space)"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1">
                <h3 className="text-base md:text-xl font-black text-slate-900 leading-snug">
                  {currentExercise.promptEn || currentExercise.promptVi}
                </h3>
                {currentExercise.promptEn && (
                  <p className="text-xs md:text-sm text-slate-500 font-medium">
                    👉 {currentExercise.promptVi}
                  </p>
                )}
              </div>
              {currentExercise.phonetics && (
                <p className="text-xs font-mono text-cyan-800 font-bold mt-1.5">
                  {currentExercise.phonetics}
                </p>
              )}
            </div>
          </div>

          {/* Exercise Specific Controls */}
          <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
            
            {/* TYPE 1: WORD ORDER (DUOLINGO SENTENCE BUILDER) */}
            {currentExercise.type === 'word_order' && (
              <div className="space-y-4">
                {/* Sentence Answer Slots */}
                <div className="min-h-[64px] p-3 rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/50 flex flex-wrap gap-2 items-center">
                  {selectedWordChips.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTapSelectedWord(word, idx)}
                      className="px-3.5 py-2 rounded-xl bg-[#009FE3] text-white text-xs font-black border-b-3 border-[#0072CE] active:translate-y-0.5 active:border-b-0 cursor-pointer"
                    >
                      {word}
                    </button>
                  ))}
                  {selectedWordChips.length === 0 && (
                    <span className="text-xs text-slate-400 font-medium italic">
                      Nhấp vào các từ bên dưới để ghép câu hoàn chỉnh...
                    </span>
                  )}
                </div>

                {/* Available Word Pool */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {availableWordChips.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTapAvailableWord(word, idx)}
                      className="px-3.5 py-2 rounded-xl bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 hover:border-sky-300 text-slate-800 text-xs font-black active:translate-y-0.5 active:border-b-2 cursor-pointer"
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
                      className={`w-full text-left p-4 md:p-5 rounded-2xl text-sm md:text-base transition-all flex items-center justify-between cursor-pointer active:translate-y-0.5 ${style}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-black text-slate-700 border border-slate-300 shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-bold">{option}</span>
                      </div>
                      <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-black shrink-0 ml-2">
                        {String.fromCharCode(65 + idx)}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* TYPE 3: VIKODA VOICE SPEAKING */}
            {currentExercise.type === 'speak' && (
              <div className="text-center space-y-4 py-2">
                <p className="text-base font-black text-[#0070D1]">
                  "{currentExercise.englishSentence}"
                </p>

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
                    {isRecording ? 'Đang lắng nghe... Nói ngay!' : 'Nhấn micro và đọc câu trên'}
                  </p>
                </div>

                {spokenText && (
                  <div className="p-3 rounded-2xl bg-sky-50 border-2 border-sky-200 text-xs">
                    <p className="text-slate-600 font-semibold italic">"{spokenText}"</p>
                    {speechScore !== null && (
                      <p className={`font-black text-sm mt-1 ${speechScore >= 65 ? 'text-emerald-600' : 'text-amber-600'}`}>
                        Độ chuẩn Vikoda Voice: {speechScore}%
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Bottom Space holder */}
          <div className="h-20" />
        </div>
      ) : (
        /* LESSON FINISHED SUMMARY */
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-5 max-w-sm mx-auto">
          <VikoMascot size="xl" mood="celebrate" />

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900">
              Xuất Sắc Hoàn Thành!
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Bạn đã làm chủ bài học: <strong>{lesson.title}</strong>
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
            className="w-full py-3.5 rounded-2xl btn-duo-green text-white font-black text-sm uppercase tracking-wide cursor-pointer"
          >
            Nhận Thưởng & Tiếp Tục
          </button>
        </div>
      )}

      {/* Bottom Action Drawer (Duolingo Deep Learning Pedagogy) */}
      {!isLessonFinished && (
        <div className={`p-4 border-t-2 max-h-[45vh] overflow-y-auto transition-all ${
          isEvaluated
            ? isAnswerCorrect
              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-lg'
              : 'bg-rose-50 border-rose-400 text-rose-950 shadow-lg'
            : 'bg-white border-slate-200'
        }`}>
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            
            {isEvaluated ? (
              <div className="flex-1 space-y-2 w-full text-xs">
                {/* Header status */}
                <div className="flex items-center space-x-1.5 font-black text-sm">
                  {isAnswerCorrect ? (
                    <>
                      <Check className="w-5 h-5 stroke-[3] text-emerald-600" />
                      <span className="text-emerald-800">Chính xác tuyệt vời!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-rose-600" />
                      <span className="text-rose-800">Cần lưu ý • Đáp án đúng là:</span>
                    </>
                  )}
                </div>

                {!isAnswerCorrect && (
                  <div className="p-2.5 rounded-xl bg-white border border-rose-200 font-black text-rose-950 text-sm flex items-center justify-between">
                    <span>"{currentExercise.englishSentence}"</span>
                    <button
                      onClick={() => playSpeech(currentExercise.englishSentence, speechRate, 'en-US')}
                      className="p-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 cursor-pointer"
                      title="Nghe lại đáp án đúng"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Pedagogical 3-Tier Guidance */}
                <div className="space-y-1.5 pt-1">
                  {/* Tier 1: Giải thích / Tại sao sai */}
                  <div className="p-2 rounded-xl bg-white/80 border border-slate-200/80 leading-relaxed font-medium">
                    <strong className={isAnswerCorrect ? 'text-emerald-900 font-bold' : 'text-rose-900 font-bold'}>
                      {isAnswerCorrect ? '💡 Phân tích câu: ' : '❌ Vì sao dễ nhầm lẫn? '}
                    </strong>
                    <span>{currentExercise.whyWrong || currentExercise.explanation}</span>
                  </div>

                  {/* Tier 2: Lưu ý cốt lõi khi làm việc với đối tác */}
                  {currentExercise.crucialNote && (
                    <div className="p-2 rounded-xl bg-amber-50/90 border border-amber-200/80 text-amber-950 leading-relaxed">
                      <strong className="font-black text-amber-900">⚡ Lưu ý đối ngoại: </strong>
                      <span>{currentExercise.crucialNote}</span>
                    </div>
                  )}

                  {/* Tier 3: Mẹo nhớ lâu (Mnemonics / Gốc từ) */}
                  <div className="p-2 rounded-xl bg-sky-50/90 border border-sky-200/80 text-sky-950 leading-relaxed">
                    <strong className="font-black text-[#0070D1]">🧠 Mẹo nhớ lâu: </strong>
                    <span>
                      {currentExercise.memoryHook ||
                        `Tập trung liên tưởng cấu trúc "${currentExercise.englishSentence.split(' ').slice(0, 3).join(' ')}" - nói to 3 lần để hình thành phản xạ tự nhiên.`}
                    </span>
                  </div>

                  {/* Tier 4: Từ vựng then chốt cần khắc sâu */}
                  {currentExercise.vocabularyHighlights && currentExercise.vocabularyHighlights.length > 0 && (
                    <div className="p-2.5 rounded-xl bg-violet-50/90 border border-violet-200/80 text-violet-950">
                      <div className="font-black text-violet-900 mb-1.5 flex items-center justify-between">
                        <span>📚 Từ vựng quan trọng cần ghi nhớ:</span>
                        <span className="text-[10px] text-violet-600 font-normal">Nhấp loa để nghe giọng đọc</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {currentExercise.vocabularyHighlights.map((vh, vIdx) => (
                          <span
                            key={vIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-violet-200 text-xs shadow-2xs"
                          >
                            <span className="font-black text-[#0070D1]">{vh.word}</span>
                            {vh.phonetic && (
                              <span className="text-slate-400 font-mono text-[10px]">/{vh.phonetic}/</span>
                            )}
                            <span className="text-slate-600 font-medium">({vh.meaning})</span>
                            <button
                              onClick={() => playSpeech(vh.word, speechRate, 'en-US')}
                              className="p-1 rounded-md hover:bg-violet-100 text-violet-600 cursor-pointer"
                              title={`Nghe phát âm từ: ${vh.word}`}
                            >
                              <Volume2 className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex-1 text-xs text-slate-500 font-bold hidden sm:block">
                Hoàn thành để nhận +{lesson.xpReward} XP & +{lesson.gemReward} 💎
              </div>
            )}

            <div className="w-full sm:w-auto flex justify-end pt-2 sm:pt-0">
              {!isEvaluated ? (
                <button
                  disabled={
                    (currentExercise.type === 'word_order' && selectedWordChips.length === 0) ||
                    (currentExercise.type === 'choice' && selectedChoice === null) ||
                    (currentExercise.type === 'speak' && speechScore === null)
                  }
                  onClick={handleCheckAnswer}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl btn-duo-primary text-white font-black text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed shrink-0 cursor-pointer"
                >
                  Kiểm Tra
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-white font-black text-xs uppercase tracking-wider shrink-0 cursor-pointer ${
                    isAnswerCorrect ? 'btn-duo-green' : 'btn-duo-rose'
                  }`}
                >
                  {isAnswerCorrect ? 'Tiếp Tục • +XP' : 'Đã Hiểu • Đi Tiếp'}
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

