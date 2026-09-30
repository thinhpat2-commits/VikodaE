import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  Sparkles, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { SPEAKING_CHALLENGES } from '../data/vikodaData';
import { SpeakingChallenge } from '../types';
import { playSound } from '../services/soundEffects';
import { 
  playSpeech, 
  stopSpeech, 
  calculateSimilarity, 
  isSpeechRecognitionSupported 
} from '../services/speechService';

interface ElsaSpeakingCoachProps {
  speechRate: number;
  onAwardXpAndGems: (xp: number, gems: number) => void;
}

export const ElsaSpeakingCoach: React.FC<ElsaSpeakingCoachProps> = ({
  speechRate,
  onAwardXpAndGems,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [speechScore, setSpeechScore] = useState<number | null>(null);
  const [isPlayingNative, setIsPlayingNative] = useState<boolean>(false);

  const currentChallenge: SpeakingChallenge = SPEAKING_CHALLENGES[currentIndex];

  const handlePlayNative = (slow: boolean = false) => {
    if (isPlayingNative) {
      stopSpeech();
      setIsPlayingNative(false);
    } else {
      setIsPlayingNative(true);
      const rate = slow ? 0.75 : speechRate;
      playSpeech(currentChallenge.englishSentence, rate, 'en-US', () => setIsPlayingNative(false));
    }
  };

  const handleStartSpeaking = () => {
    if (!isSpeechRecognitionSupported()) {
      setSpokenTranscript('Trình duyệt chưa hỗ trợ Web Speech Recognition. Hãy mở trên Chrome hoặc Edge.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsRecording(true);
    setSpokenTranscript('Đang lắng nghe giọng bạn...');
    setSpeechScore(null);
    playSound('click');

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setSpokenTranscript(text);
      const score = calculateSimilarity(currentChallenge.englishSentence, text);
      setSpeechScore(score);

      if (score >= 80) {
        playSound('correct');
        onAwardXpAndGems(30, 10);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        playSound('wrong');
      }
    };

    recognition.onerror = (e: any) => {
      console.warn('Speech error', e);
      setIsRecording(false);
      setSpokenTranscript('Chưa nhận rõ giọng. Hãy nói to và gần micro hơn nhé.');
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    try {
      recognition.start();
    } catch (e) {
      console.warn(e);
      setIsRecording(false);
    }
  };

  const nextChallenge = () => {
    if (currentIndex < SPEAKING_CHALLENGES.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSpeechScore(null);
      setSpokenTranscript('');
      stopSpeech();
    }
  };

  const prevChallenge = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSpeechScore(null);
      setSpokenTranscript('');
      stopSpeech();
    }
  };

  return (
    <div className="space-y-5 pb-24 max-w-lg mx-auto">
      
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
            ELSA Coach Vikoda
          </span>
          <h2 className="text-lg font-extrabold text-slate-900 mt-1">
            Luyện Phát Âm Chuẩn Bản Ngữ
          </h2>
        </div>

        <div className="text-xs text-slate-500 font-bold">
          {currentIndex + 1} / {SPEAKING_CHALLENGES.length}
        </div>
      </div>

      {/* Main Pronunciation Card */}
      <div className="bg-white rounded-3xl border border-sky-100 p-6 shadow-xl shadow-sky-500/10 text-center space-y-5 relative overflow-hidden">
        
        {/* Category Badge */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-400">
            {currentChallenge.title}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
            +30 XP
          </span>
        </div>

        {/* English Sentence */}
        <div className="space-y-2 py-2">
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
            "{currentChallenge.englishSentence}"
          </p>
          <p className="text-xs font-mono text-cyan-700 font-semibold bg-cyan-50/70 inline-block px-3 py-1 rounded-full">
            {currentChallenge.phonetics}
          </p>
          <p className="text-xs text-slate-500 font-medium">
            {currentChallenge.vietnameseMeaning}
          </p>
        </div>

        {/* Native Audio Controls */}
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => handlePlayNative(false)}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-extrabold transition-all ${
              isPlayingNative
                ? 'bg-[#0066CC] text-white shadow-md'
                : 'bg-sky-50 hover:bg-sky-100 text-[#0066CC]'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe mẫu (Chuẩn)</span>
          </button>

          <button
            onClick={() => handlePlayNative(true)}
            className="flex items-center space-x-1 px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            title="Nghe tốc độ chậm"
          >
            <span>🐢 Chậm</span>
          </button>
        </div>

        {/* ELSA-Style Big Mic Button */}
        <div className="py-2">
          <button
            onClick={handleStartSpeaking}
            className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center transition-all cursor-pointer shadow-lg ${
              isRecording
                ? 'bg-rose-500 text-white animate-pulse shadow-rose-500/50 scale-110'
                : 'bg-gradient-to-tr from-[#0066CC] to-[#00A3E0] hover:scale-105 text-white shadow-sky-500/40'
            }`}
          >
            {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
          </button>
          <p className="text-xs text-slate-400 font-medium mt-2">
            {isRecording ? 'Đang lắng nghe... Hãy nói ngay!' : 'Nhấn vào micro để luyện nói'}
          </p>
        </div>

        {/* Speech Recognition Feedback Gauge */}
        {speechScore !== null && (
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2 animate-fadeIn text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Độ chuẩn phát âm ELSA:</span>
              <span className={`text-base font-extrabold px-3 py-0.5 rounded-full ${
                speechScore >= 80
                  ? 'bg-emerald-100 text-emerald-800'
                  : speechScore >= 50
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-rose-100 text-rose-800'
              }`}>
                {speechScore}%
              </span>
            </div>

            <p className="text-xs text-slate-600 font-medium italic">
              Bạn vừa nói: "{spokenTranscript}"
            </p>

            {speechScore >= 80 ? (
              <p className="text-xs text-emerald-700 font-bold flex items-center space-x-1">
                <span>🎉 Xuất sắc! Ngữ điệu rất tự tin và chuẩn phong thái đại sứ Vikoda.</span>
              </p>
            ) : (
              <p className="text-xs text-amber-700 font-semibold">
                💡 Gợi ý: Hãy chú ý nhấn mạnh các từ khoá chính: {currentChallenge.keyWords.join(', ')}.
              </p>
            )}
          </div>
        )}

        {/* Cultural / Delivery Note */}
        <div className="p-3 rounded-2xl bg-purple-50/60 border border-purple-100 text-left text-xs text-purple-900 flex items-start space-x-2">
          <span className="text-base shrink-0">✨</span>
          <div>
            <strong className="text-purple-950 font-bold">Phong thái: </strong>
            <span>{currentChallenge.culturalNote}</span>
          </div>
        </div>

      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-between">
        <button
          disabled={currentIndex === 0}
          onClick={prevChallenge}
          className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Câu trước</span>
        </button>

        <button
          disabled={currentIndex === SPEAKING_CHALLENGES.length - 1}
          onClick={nextChallenge}
          className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-[#0066CC] hover:bg-[#0052CC] text-white text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
        >
          <span>Câu tiếp theo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
