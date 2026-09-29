import React, { useState } from 'react';
import { 
  Volume2, 
  Mic, 
  MicOff, 
  Sparkles, 
  Check, 
  Bookmark, 
  BookmarkCheck,
  RefreshCw,
  Lightbulb,
  Headphones
} from 'lucide-react';
import { MEETING_PHRASES } from '../data/meetingPhrases';
import { MeetingPhrase } from '../types';
import { playSpeech, stopSpeech, calculateSimilarity, isSpeechRecognitionSupported } from '../services/speechService';

interface MeetingSurvivalProps {
  speechRate: number;
  onPhraseLearned: (phrase: MeetingPhrase) => void;
  learnedPhraseIds: string[];
}

export const MeetingSurvival: React.FC<MeetingSurvivalProps> = ({
  speechRate,
  onPhraseLearned,
  learnedPhraseIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);
  
  // Microphone recording & evaluation state
  const [recordingId, setRecordingId] = useState<string | null>(null);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [scoreResult, setScoreResult] = useState<{ id: string; score: number } | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả tình huống' },
    { id: 'open', label: 'Mở đầu cuộc họp' },
    { id: 'interrupt', label: 'Ngắt lời lịch thiệp' },
    { id: 'clarify', label: 'Câu giờ / Hỏi lại' },
    { id: 'disagree', label: 'Bất đồng ngoại giao' },
    { id: 'conclude', label: 'Chốt việc (Action Items)' },
    { id: 'techissue', label: 'Sự cố mic / Lag mạng' },
    { id: 'smalltalk', label: 'Small Talk đầu giờ' },
  ];

  const filteredPhrases = selectedCategory === 'all'
    ? MEETING_PHRASES
    : MEETING_PHRASES.filter((p) => p.category === selectedCategory);

  const handlePlayAudio = (phrase: MeetingPhrase) => {
    if (playingId === phrase.id) {
      stopSpeech();
      setPlayingId(null);
    } else {
      setPlayingId(phrase.id);
      playSpeech(phrase.english, speechRate, 'en-US', () => setPlayingId(null));
    }
  };

  const handleStartRecording = (phrase: MeetingPhrase) => {
    if (!isSpeechRecognitionSupported()) {
      alert('Trình duyệt của bạn hiện chưa hỗ trợ Web Speech Recognition. Bạn có thể sử dụng Google Chrome hoặc Edge.');
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setRecordingId(phrase.id);
    setSpokenTranscript('Đang lắng nghe bạn nói...');
    setScoreResult(null);

    recognition.onstart = () => {
      // recording started
    };

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      setSpokenTranscript(speechToText);
      const similarity = calculateSimilarity(phrase.english, speechToText);
      setScoreResult({ id: phrase.id, score: similarity });
      if (similarity >= 70) {
        onPhraseLearned(phrase);
      }
    };

    recognition.onerror = (e: any) => {
      console.warn('Speech recognition error', e);
      setRecordingId(null);
      setSpokenTranscript('Không nghe rõ âm thanh. Hãy thử nói lại gần mic hơn nhé.');
    };

    recognition.onend = () => {
      setRecordingId(null);
    };

    try {
      recognition.start();
    } catch (e) {
      console.warn(e);
      setRecordingId(null);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center space-x-2">
            <span>Meeting & Presentation Survival Toolkit</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Bộ câu nói "cứu cánh" khi họp trực tuyến với sếp và đối tác: nghe mẫu giọng bản xứ & luyện nói với Mic.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
          <Headphones className="w-4 h-4 text-amber-400" />
          <span>Đã thành thạo: <strong className="text-amber-400">{learnedPhraseIds.length}</strong>/{MEETING_PHRASES.length} câu</span>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Phrases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPhrases.map((phrase) => {
          const isPlaying = playingId === phrase.id;
          const isRecording = recordingId === phrase.id;
          const isLearned = learnedPhraseIds.includes(phrase.id);
          const hasScore = scoreResult && scoreResult.id === phrase.id;

          return (
            <div
              key={phrase.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isLearned
                  ? 'bg-slate-900/70 border-emerald-900/40 shadow-sm'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-lg'
              }`}
            >
              <div className="space-y-3">
                {/* Tone tag & Action badges */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      phrase.tone === 'diplomatic'
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                        : phrase.tone === 'polite'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {phrase.tone === 'diplomatic' ? 'Ngoại giao khéo léo' : phrase.tone === 'polite' ? 'Lịch sự tôn trọng' : 'Quả quyết dứt khoát'}
                    </span>

                    {isLearned && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center space-x-1">
                        <Check className="w-3 h-3" />
                        <span>Đã lưu</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onPhraseLearned(phrase)}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                    title={isLearned ? 'Đã thành thạo' : 'Lưu vào danh sách thành thạo'}
                  >
                    {isLearned ? (
                      <BookmarkCheck className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* English phrase */}
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    "{phrase.english}"
                  </h3>
                  {phrase.phonetics && (
                    <p className="text-xs font-mono text-amber-400/80 mt-1">
                      {phrase.phonetics}
                    </p>
                  )}
                </div>

                {/* Vietnamese meaning */}
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-slate-400 block mb-0.5">Ý nghĩa:</span>
                  <span>{phrase.vietnamese}</span>
                </div>

                {/* Corporate Situation context */}
                <div className="flex items-start space-x-2 text-xs text-slate-400">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{phrase.situation}</span>
                </div>

                {/* Alternative */}
                {phrase.alternative && (
                  <div className="text-[11px] text-slate-500 border-t border-slate-800/80 pt-2">
                    <span className="text-slate-400">Cách nói tương đương: </span>
                    <span className="text-slate-300 italic">"{phrase.alternative}"</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Listen & Speak */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePlayAudio(phrase)}
                    className={`flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      isPlaying
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlaying ? 'Đang phát...' : 'Nghe phát âm'}</span>
                  </button>

                  <button
                    onClick={() => handleStartRecording(phrase)}
                    className={`flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      isRecording
                        ? 'bg-rose-500 text-white border-rose-400 animate-pulse'
                        : 'bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border-slate-700'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                    <span>{isRecording ? 'Đang nghe...' : 'Luyện nói qua Mic'}</span>
                  </button>
                </div>

                {/* Speech Recognition Feedback */}
                {(isRecording || (hasScore && scoreResult.id === phrase.id)) && (
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Bạn đã nói:</span>
                      {hasScore && (
                        <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                          scoreResult.score >= 80
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : scoreResult.score >= 50
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-rose-500/20 text-rose-400'
                        }`}>
                          Độ chuẩn: {scoreResult.score}%
                        </span>
                      )}
                    </div>
                    <p className="text-slate-200 italic font-medium">"{spokenTranscript}"</p>
                    {hasScore && scoreResult.score >= 80 && (
                      <p className="text-emerald-400 font-semibold text-[11px] mt-1">
                        🎉 Phát âm rất tự nhiên và đúng nhịp điệu doanh nghiệp!
                      </p>
                    )}
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
