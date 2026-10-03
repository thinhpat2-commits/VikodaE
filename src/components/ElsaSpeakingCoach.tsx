import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
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
import { LiveCircularMicButton } from './LiveCircularMicButton';
import { InteractiveSentenceViewer } from './InteractiveSentenceViewer';
import { 
  playSpeech, 
  stopSpeech, 
  evaluatePronunciationDetails, 
  DetailedSpeechEvaluation,
  isSpeechRecognitionSupported,
  startSpeechRecognition,
  finishSpeechRecognition,
  stopSpeechRecognition,
  triggerHaptic
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
  const [evaluation, setEvaluation] = useState<DetailedSpeechEvaluation | null>(null);

  const currentChallenge: SpeakingChallenge = SPEAKING_CHALLENGES[currentIndex];

  useEffect(() => {
    return () => {
      stopSpeech();
      stopSpeechRecognition();
    };
  }, []);

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
    if (isRecording) {
      finishSpeechRecognition();
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setSpokenTranscript('Trình duyệt chưa hỗ trợ Web Speech Recognition. Hãy mở trên Chrome hoặc Edge.');
      return;
    }

    setIsRecording(true);
    setSpokenTranscript('Đang lắng nghe... Hãy đọc to câu trên!');
    setSpeechScore(null);
    setEvaluation(null);
    playSound('click');
    triggerHaptic('light');

    startSpeechRecognition(
      (finalText) => {
        setSpokenTranscript(finalText);
        const evalResult = evaluatePronunciationDetails(currentChallenge.englishSentence, finalText);
        setEvaluation(evalResult);
        setSpeechScore(evalResult.score);
        setIsRecording(false);

        if (evalResult.score >= 60) {
          playSound('correct');
          triggerHaptic('success');
          onAwardXpAndGems(30, 10);
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 }
          });
        } else {
          playSound('wrong');
          triggerHaptic('warning');
        }
      },
      () => {
        setIsRecording(false);
      },
      (errorMsg) => {
        setIsRecording(false);
        setSpokenTranscript(errorMsg || 'Chưa nhận rõ giọng. Hãy nói to và gần micro hơn nhé.');
      },
      (interim) => {
        setSpokenTranscript(interim);
      },
      'en-US',
      currentChallenge.englishSentence
    );
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

        {/* Interactive Sentence & Word Explorer */}
        <div className="py-2">
          <InteractiveSentenceViewer
            sentence={currentChallenge.englishSentence}
            translation={currentChallenge.vietnameseMeaning}
          />
        </div>

        {/* Native Audio Controls */}
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => handlePlayNative(false)}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
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
            className="flex items-center space-x-1 px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            title="Nghe tốc độ chậm"
          >
            <span>🐢 Chậm</span>
          </button>
        </div>

        {/* ELSA-Style Live Circular Mic Button with Real-Time Acoustic Ripple Waves */}
        <div className="py-2 space-y-2 text-center">
          <LiveCircularMicButton
            isRecording={isRecording}
            onClick={handleStartSpeaking}
            size="lg"
          />

          {isRecording ? (
            <div className="space-y-1 animate-in fade-in">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Micro đang nghe! Hãy đọc to câu ở trên</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                ⚡ Đọc xong hệ thống sẽ <strong>tự động chấm điểm ELSA</strong>
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-slate-500 font-medium">
                Nhấn vào micro để luyện nói (Nói xong tự động chấm điểm)
              </p>

              {/* Quiet Office Pass */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    triggerHaptic('light');
                    setSpeechScore(null);
                    setSpokenTranscript('');
                    setEvaluation(null);
                    if (currentIndex + 1 < SPEAKING_CHALLENGES.length) {
                      setCurrentIndex((prev) => prev + 1);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold border border-slate-300 transition-all cursor-pointer shadow-2xs active:scale-95"
                  title="Dành cho nhân viên đang ở văn phòng, nơi cần giữ im lặng (Không cộng/trừ điểm)"
                >
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span>🤫 Tôi không tiện nói lúc này (Luyện nói sau)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Speech Recognition Feedback Gauge */}
        {speechScore !== null && (
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2.5 animate-fadeIn text-left">
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

            {/* Ending Sound Alerts */}
            {evaluation?.endingSoundAlerts && evaluation.endingSoundAlerts.length > 0 && (
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-black uppercase text-amber-800 block">
                  ⚡ Góp ý âm đuôi (Ending Sounds):
                </span>
                {evaluation.endingSoundAlerts.map((alert, aIdx) => (
                  <div key={aIdx} className="p-2 bg-amber-50 border border-amber-300 text-amber-950 text-xs font-bold rounded-xl flex items-center gap-1.5">
                    <span>⚠️</span>
                    <span>{alert}</span>
                  </div>
                ))}
              </div>
            )}

            {speechScore >= 80 ? (
              <p className="text-xs text-emerald-700 font-bold flex items-center space-x-1">
                <span>🎉 Xuất sắc! Ngữ điệu rất tự tin và chuẩn phong thái đại sứ Vikoda.</span>
              </p>
            ) : (
              <div className="space-y-2">
                <p className="text-xs text-amber-700 font-semibold">
                  💡 Gợi ý: Hãy chú ý nhấn mạnh các từ khoá chính: {currentChallenge.keyWords.join(', ')}.
                </p>
                {/* Override Pass for Low Score */}
                <div className="pt-1 border-t border-amber-200">
                  <button
                    type="button"
                    onClick={() => {
                      playSound('click');
                      triggerHaptic('light');
                      setSpeechScore(null);
                      setSpokenTranscript('');
                      setEvaluation(null);
                      if (currentIndex + 1 < SPEAKING_CHALLENGES.length) {
                        setCurrentIndex((prev) => prev + 1);
                      }
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-98"
                  >
                    <VolumeX className="w-4 h-4 text-slate-600" />
                    <span>Lưu câu này để luyện lại sau & Sang câu tiếp</span>
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-0.5">
                    Không trừ điểm/tim. Bạn có thể luyện lại bất cứ khi nào thuận tiện.
                  </p>
                </div>
              </div>
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
