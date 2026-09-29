import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Zap, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Trophy, 
  Flame, 
  RotateCcw,
  ArrowRight,
  Shield,
  Clock,
  BookOpen,
  Settings2
} from 'lucide-react';
import { VIKODA_CURRICULUM, LessonExercise } from '../data/curriculumData';
import { VikoMascot } from './brand/VikodaLogos';
import { VoiceSelectorModal } from './VoiceSelectorModal';
import { 
  playSpeech, 
  VOICE_OPTIONS, 
  getSelectedVoiceId, 
  subscribeVoiceChange,
  VoiceOptionId
} from '../services/speechService';
import { playSound } from '../services/soundEffects';

export type ArenaTier = 'bronze' | 'silver' | 'gold' | 'diamond';

interface ArenaTierConfig {
  id: ArenaTier;
  title: string;
  badge: string;
  questionCount: number;
  timePerQuestion: number; // in seconds
  description: string;
  xpMultiplier: number;
  bgBorder: string;
  accentColor: string;
}

const ARENA_TIERS: ArenaTierConfig[] = [
  {
    id: 'bronze',
    title: 'Đấu Trường Đồng (Tân Binh)',
    badge: '🥉 CƠ BẢN',
    questionCount: 5,
    timePerQuestion: 15,
    description: '5 câu giao tiếp chào đón & mời nước cơ bản • 15 giây/câu',
    xpMultiplier: 1.0,
    bgBorder: 'border-amber-300 hover:border-amber-500',
    accentColor: '#D97706',
  },
  {
    id: 'silver',
    title: 'Đấu Trường Bạc (Chiến Binh Văn Phòng)',
    badge: '🥈 VĂN PHÒNG',
    questionCount: 10,
    timePerQuestion: 10,
    description: '10 câu hỏi tốc độ về mỏ Đảnh Thạnh & giao tiếp công sở • 10 giây/câu',
    xpMultiplier: 1.5,
    bgBorder: 'border-slate-300 hover:border-slate-500',
    accentColor: '#64748B',
  },
  {
    id: 'gold',
    title: 'Đấu Trường Vàng (Chuyên Gia Đàm Phán)',
    badge: '🥇 THƯƠNG THẢO',
    questionCount: 15,
    timePerQuestion: 8,
    description: '15 câu hỏi xử lý phản bác B2B & đặc tính nước kiềm • 8 giây/câu',
    xpMultiplier: 2.0,
    bgBorder: 'border-yellow-400 hover:border-yellow-600',
    accentColor: '#CA8A04',
  },
  {
    id: 'diamond',
    title: 'Đấu Trường Kim Cương (Đại Sứ Toàn Cầu)',
    badge: '💎 TOÀN CẦU',
    questionCount: 20,
    timePerQuestion: 6,
    description: '20 câu đỉnh cao CIF/FOB, kiểm định FDA & chốt hợp đồng • 6 giây/câu',
    xpMultiplier: 3.0,
    bgBorder: 'border-cyan-400 hover:border-cyan-600',
    accentColor: '#009FE3',
  },
];

interface EndlessDrillArenaProps {
  onClose: () => void;
  onFinishDrill: (score: number, xpGain: number, gemGain: number) => void;
  bestScore: number;
  speechRate: number;
}

export const EndlessDrillArena: React.FC<EndlessDrillArenaProps> = ({
  onClose,
  onFinishDrill,
  bestScore,
  speechRate
}) => {
  const allExercises = VIKODA_CURRICULUM.flatMap((u) => u.exercises);

  const [selectedTier, setSelectedTier] = useState<ArenaTier | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [drillQuestions, setDrillQuestions] = useState<LessonExercise[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [missedQuestions, setMissedQuestions] = useState<LessonExercise[]>([]);
  const [currentVoiceId, setCurrentVoiceId] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const unsub = subscribeVoiceChange((vId) => setCurrentVoiceId(vId));
    return unsub;
  }, []);

  const tierConfig = ARENA_TIERS.find((t) => t.id === selectedTier) || ARENA_TIERS[1];

  // Start a new drill with chosen tier
  const startTier = (tier: ArenaTier) => {
    setSelectedTier(tier);
    const cfg = ARENA_TIERS.find((t) => t.id === tier) || ARENA_TIERS[1];
    const shuffled = [...allExercises].sort(() => 0.5 - Math.random()).slice(0, cfg.questionCount);
    setDrillQuestions(shuffled);
    setQuestionIndex(0);
    setCurrentScore(0);
    setCombo(0);
    setMaxCombo(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setIsFinished(false);
    setMissedQuestions([]);
    setTimeLeft(cfg.timePerQuestion);
    playSound('click');
  };

  const currentExercise = drillQuestions[questionIndex];

  // Timer countdown per question
  useEffect(() => {
    if (!selectedTier || isFinished || hasAnswered) return;

    if (timeLeft <= 0) {
      // Time expired! Mark as wrong
      handleSelectOption(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedTier, isFinished, hasAnswered, timeLeft]);

  // Fallback options
  const options = currentExercise?.options || [
    currentExercise?.englishSentence,
    'This option is completely incorrect and inappropriate for Vikoda.',
    'We avoid using this casual phrasing in export negotiations.'
  ].sort(() => 0.5 - Math.random());

  const correctIndex = currentExercise?.correctIndex ?? options.indexOf(currentExercise?.englishSentence || '');

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;

    setSelectedOption(idx);
    setHasAnswered(true);

    const correct = idx === correctIndex;
    setIsCorrect(correct);

    if (correct) {
      playSound('success');
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
      const points = 100 * (1 + newCombo * 0.25) * tierConfig.xpMultiplier;
      setCurrentScore((prev) => Math.round(prev + points));
    } else {
      playSound('wrong');
      setCombo(0);
      if (currentExercise) {
        setMissedQuestions((prev) => [...prev, currentExercise]);
      }
    }
  };

  const handleNext = () => {
    playSound('click');
    if (questionIndex + 1 < drillQuestions.length) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setIsCorrect(false);
      setTimeLeft(tierConfig.timePerQuestion);
    } else {
      // Completed drill!
      setIsFinished(true);
      playSound('celebrate');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleSaveAndExit = () => {
    const xpGain = Math.round(currentScore / 8);
    const gemGain = Math.round(currentScore / 40);
    onFinishDrill(currentScore, xpGain, gemGain);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-300 w-full max-w-lg shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Arena Top Navigation */}
        <div className="px-5 py-3.5 border-b-2 border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black shadow-xs">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 leading-tight">
                Arena Đấu Trường Phản Xạ
              </h3>
              <p className="text-[10px] text-slate-500 font-bold">
                {selectedTier ? tierConfig.title : 'Chọn cấp bậc đấu trường để thử thách'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Quick Voice Switcher */}
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

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. TIER SELECTION SCREEN */}
        {!selectedTier ? (
          <div className="p-5 overflow-y-auto space-y-4">
            <div className="text-center space-y-1">
              <VikoMascot size="md" mood="cheering" className="mx-auto" />
              <h2 className="text-base font-black text-slate-900">
                Thử Thách Phản Xạ Tiếng Anh B2B
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Càng lên cấp bậc cao, câu hỏi càng đa dạng và thời gian càng gấp rút!
              </p>
            </div>

            <div className="space-y-2.5">
              {ARENA_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => startTier(tier.id)}
                  className={`w-full p-4 rounded-2xl bg-white border-2 ${tier.bgBorder} border-b-4 shadow-xs hover:shadow-md text-left transition-all active:translate-y-0.5 cursor-pointer flex items-center justify-between group`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        {tier.badge}
                      </span>
                      <h4 className="text-xs font-black text-slate-900 group-hover:text-[#0070D1]">
                        {tier.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-snug">
                      {tier.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <span className="text-xs font-black text-amber-600 block">
                      x{tier.xpMultiplier} XP
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      {tier.questionCount} câu
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-slate-600 flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
              <span>
                Điểm kỷ lục cá nhân của bạn: <strong>{bestScore} điểm</strong>. Tham gia đấu trường để thăng hạng!
              </span>
            </div>
          </div>
        ) : !isFinished ? (
          /* 2. IN-GAME ARENA QUESTION */
          <div className="p-5 overflow-y-auto space-y-4 flex-1 flex flex-col justify-between">
            
            {/* HUD Status Bar: Question Index, Timer, Combo, Score */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-slate-500">
                  Câu {questionIndex + 1} / {drillQuestions.length}
                </span>

                {/* Countdown Timer with Warning Color */}
                <div className={`flex items-center space-x-1 px-2.5 py-0.5 rounded-full font-black text-xs ${
                  timeLeft <= 3
                    ? 'bg-rose-100 text-rose-700 animate-pulse border border-rose-300'
                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{timeLeft}s</span>
                </div>

                <div className="flex items-center space-x-1 text-amber-500">
                  <Flame className="w-4 h-4 fill-amber-500" />
                  <span>Combo x{combo}</span>
                </div>

                <span className="text-[#0070D1] tabular-nums font-black text-sm">
                  {currentScore} pts
                </span>
              </div>

              {/* Timer Progress Bar */}
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className={`h-full transition-all duration-1000 ${
                    timeLeft <= 3 ? 'bg-rose-500' : 'bg-amber-400'
                  }`}
                  style={{ width: `${(timeLeft / tierConfig.timePerQuestion) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border-2 border-sky-200 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-[#0070D1] tracking-wide">
                  Tình Huống Đối Ngoại
                </span>
                <button
                  onClick={() => playSpeech(currentExercise?.audioText || currentExercise?.englishSentence, speechRate, 'en-US')}
                  className="p-1 rounded-lg bg-white border border-sky-200 text-[#0070D1] hover:bg-sky-100 cursor-pointer"
                  title="Nghe phát âm chuẩn"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-sm font-black text-slate-900 leading-snug">
                {currentExercise?.promptVi}
              </h3>
              {currentExercise?.phonetics && (
                <p className="text-[11px] font-mono text-cyan-800 font-bold">
                  {currentExercise.phonetics}
                </p>
              )}
            </div>

            {/* Options List */}
            <div className="space-y-2 py-1">
              {options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                let btnStyle = 'bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-800 hover:border-sky-300';

                if (hasAnswered) {
                  if (idx === correctIndex) {
                    btnStyle = 'bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 font-black';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-50 border-2 border-rose-500 border-b-4 border-b-rose-600 text-rose-950 font-bold';
                  } else {
                    btnStyle = 'opacity-40 border-slate-200 border-b-2';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl text-xs transition-all flex items-center justify-between cursor-pointer active:translate-y-0.5 ${btnStyle}`}
                  >
                    <span className="font-bold flex-1">{option}</span>
                    <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-black shrink-0 ml-2">
                      {String.fromCharCode(65 + idx)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Deep Learning Pedagogical Feedback Drawer */}
            {hasAnswered && (
              <div className="p-3.5 rounded-2xl bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 space-y-2 text-xs animate-in fade-in">
                <div className="flex items-center space-x-1.5 font-black text-sm">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-700">Rất sắc bén! (+100 Combo)</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-rose-600" />
                      <span className="text-rose-700">
                        {selectedOption === -1 ? 'Hết giờ!' : 'Cần lưu ý!'}
                      </span>
                    </>
                  )}
                </div>

                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 leading-relaxed font-medium">
                  <strong className={isCorrect ? 'text-emerald-900 font-bold' : 'text-rose-900 font-bold'}>
                    {isCorrect ? '💡 Điểm cộng: ' : '❌ Vì sao sai? '}
                  </strong>
                  <span>{currentExercise?.whyWrong || currentExercise?.explanation}</span>
                </div>

                {/* Crucial Note & Memory Hook */}
                {currentExercise?.crucialNote && (
                  <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 leading-relaxed">
                    <strong className="font-black text-amber-900">⚡ Lưu ý đối ngoại: </strong>
                    <span>{currentExercise.crucialNote}</span>
                  </div>
                )}

                {/* Memory Hook */}
                <div className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-950 leading-relaxed">
                  <strong className="font-black text-[#0070D1]">🧠 Mẹo nhớ lâu: </strong>
                  <span>
                    {currentExercise?.memoryHook ||
                      `Ghi nhớ cụm từ: "${currentExercise?.englishSentence.split(' ').slice(0, 3).join(' ')}" - luyện nói to 2 lần để khắc sâu phản xạ.`}
                  </span>
                </div>

                {/* Vocabulary Highlights */}
                {currentExercise?.vocabularyHighlights && currentExercise.vocabularyHighlights.length > 0 && (
                  <div className="p-2 rounded-xl bg-violet-50 border border-violet-200 text-violet-950 space-y-1">
                    <div className="font-black text-violet-900 text-[11px]">📚 Từ vựng then chốt:</div>
                    <div className="flex flex-wrap gap-1">
                      {currentExercise.vocabularyHighlights.map((vh, vi) => (
                        <span key={vi} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white border border-violet-200 text-[11px]">
                          <strong className="text-[#0070D1]">{vh.word}</strong>
                          <span className="text-slate-500">({vh.meaning})</span>
                          <button
                            onClick={() => playSpeech(vh.word, speechRate, 'en-US')}
                            className="text-violet-600 hover:text-violet-800"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-2.5 h-2.5" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className="w-full py-2.5 rounded-xl btn-duo-primary text-white font-black text-xs uppercase tracking-wider cursor-pointer mt-1"
                >
                  {questionIndex + 1 < drillQuestions.length ? 'Câu Tiếp Theo • Đi Tiếp' : 'Xem Kết Quả Đấu Trường'}
                </button>
              </div>
            )}

          </div>
        ) : (
          /* 3. ARENA COMPLETED REVIEW SCREEN */
          <div className="p-5 overflow-y-auto space-y-4 text-center">
            <VikoMascot size="lg" mood="celebrate" className="mx-auto" />

            <div className="space-y-1">
              <h2 className="text-xl font-black text-slate-900">
                Hoàn Thành {tierConfig.title}!
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Bạn đã vượt qua đấu trường phản xạ với phong độ xuất sắc
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 text-center">
                <div className="text-lg font-black text-amber-600">{currentScore}</div>
                <div className="text-[9px] text-amber-800 font-bold uppercase">Tổng Điểm</div>
              </div>
              <div className="p-3 rounded-2xl bg-cyan-50 border-2 border-cyan-200 text-center">
                <div className="text-lg font-black text-[#0070D1]">x{maxCombo}</div>
                <div className="text-[9px] text-cyan-800 font-bold uppercase">Combo Tối Đa</div>
              </div>
              <div className="p-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-center">
                <div className="text-lg font-black text-purple-600">+{Math.round(currentScore / 8)}</div>
                <div className="text-[9px] text-purple-800 font-bold uppercase">Kinh Nghiệm XP</div>
              </div>
            </div>

            {/* Review Section: Mẹo Nhớ Lâu Cho Các Câu Sai */}
            {missedQuestions.length > 0 && (
              <div className="text-left space-y-2 pt-2">
                <div className="flex items-center space-x-1.5 text-xs font-black text-rose-800">
                  <BookOpen className="w-4 h-4 text-rose-600" />
                  <span>Ôn Tập & Mẹo Nhớ {missedQuestions.length} Câu Cần Lưu Ý:</span>
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {missedQuestions.map((q, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-bold text-slate-800">"{q.englishSentence}"</div>
                        <button
                          onClick={() => playSpeech(q.audioText || q.englishSentence, speechRate, 'en-US')}
                          className="p-1 rounded-lg bg-white border border-rose-200 text-rose-700 hover:bg-rose-100 cursor-pointer shrink-0"
                          title="Nghe lại"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-600">{q.promptVi}</div>
                      
                      {/* Reason / Why wrong */}
                      <div className="text-[11px] text-slate-700 bg-white p-2 rounded-xl border border-rose-100 font-medium">
                        <strong className="text-rose-900">❌ Vì sao dễ nhầm: </strong>
                        <span>{q.whyWrong || q.explanation}</span>
                      </div>

                      {/* Crucial note */}
                      {q.crucialNote && (
                        <div className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded-xl border border-amber-200 font-medium">
                          <strong>⚡ Lưu ý đối ngoại: </strong>
                          <span>{q.crucialNote}</span>
                        </div>
                      )}

                      {/* Memory hook */}
                      <div className="text-[11px] text-[#0070D1] bg-sky-50 p-2 rounded-xl border border-sky-200 font-semibold">
                        <strong>🧠 Mẹo nhớ lâu: </strong>
                        <span>
                          {q.memoryHook ||
                            `Khắc sâu cụm từ "${q.englishSentence.split(' ').slice(0, 3).join(' ')}" - luyện nói 2 lần để tạo phản xạ.`}
                        </span>
                      </div>

                      {/* Vocab if available */}
                      {q.vocabularyHighlights && q.vocabularyHighlights.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {q.vocabularyHighlights.map((vh, vi) => (
                            <span key={vi} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white border border-violet-200 text-[10px]">
                              <strong className="text-[#0070D1]">{vh.word}</strong>
                              <span className="text-slate-500">({vh.meaning})</span>
                              <button
                                onClick={() => playSpeech(vh.word, speechRate, 'en-US')}
                                className="text-violet-600 hover:text-violet-800"
                              >
                                <Volume2 className="w-2.5 h-2.5" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setSelectedTier(null)}
                className="flex-1 py-3 rounded-2xl btn-duo-white text-slate-700 font-black text-xs uppercase cursor-pointer"
              >
                Đổi Cấp Bậc
              </button>
              <button
                onClick={handleSaveAndExit}
                className="flex-1 py-3 rounded-2xl btn-duo-green text-white font-black text-xs uppercase cursor-pointer"
              >
                Lưu & Nhận Thưởng
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
