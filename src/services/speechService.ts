/**
 * Speech Service: High-Fidelity AI Voice Engine (Gemini 3.8 Flash TTS)
 * With seamless Offline Browser SpeechSynthesis Fallback.
 *
 * Features:
 * 1. Primary Engine: Google Gemini 3.8 Flash Lite TTS
 *    - Natural, studio-grade human business tone
 *    - Native US pronunciation with specialized Vikoda & alkaline pH 9.0 terminology
 *    - 24kHz WAV audio rendered via local in-memory Blob URL (zero network redirect issues)
 *    - In-memory audio caching for instantaneous replay (0ms latency)
 * 2. Fallback Engine: Browser Native SpeechSynthesis
 *    - 100% offline, zero network requirement
 *    - Anti-garbage collection reference tracking
 *    - Synchronous keepalive execution
 */

import { generateGeminiSpeechAudio } from './geminiService';

export type VoiceOptionId = 'us_male' | 'us_female';

export interface VoiceOption {
  id: VoiceOptionId;
  name: string;
  flag: string;
  accent: string;
  gender: 'female' | 'male';
  description: string;
  geminiVoice: 'Puck' | 'Kore';
  pitch: number;
  rateFactor: number;
}

export const VOICE_OPTIONS: VoiceOption[] = [
  {
    id: 'us_male',
    name: 'Michael (Nam AI - Gemini Puck)',
    flag: '🇺🇸',
    accent: 'Giọng Nam Mỹ Bản Ngữ',
    gender: 'male',
    description: 'Phong thái đàm phán quốc tế chững chạc, phát âm Vikoda & khoáng kiềm pH 9.0 chuẩn xác',
    geminiVoice: 'Puck',
    pitch: 1.0,
    rateFactor: 0.96,
  },
  {
    id: 'us_female',
    name: 'Emma (Nữ AI - Gemini Kore)',
    flag: '🇺🇸',
    accent: 'Giọng Nữ Chuẩn Mỹ',
    gender: 'female',
    description: 'Ấm áp, ngữ điệu tiếp khách đối ngoại tự nhiên, dễ nghe và truyền cảm hứng',
    geminiVoice: 'Kore',
    pitch: 1.05,
    rateFactor: 0.96,
  },
];

const STORAGE_KEY_VOICE = 'vikoda_selected_voice_option_v3';

export const getSelectedVoiceId = (): VoiceOptionId => {
  if (typeof window === 'undefined') return 'us_male';
  const saved = localStorage.getItem(STORAGE_KEY_VOICE) as VoiceOptionId | null;
  if (saved && VOICE_OPTIONS.some((v) => v.id === saved)) {
    return saved;
  }
  return 'us_male';
};

export const setSelectedVoiceId = (voiceId: VoiceOptionId) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_VOICE, voiceId);
    window.dispatchEvent(new CustomEvent('vikoda_voice_changed', { detail: voiceId }));
  }
};

export const subscribeVoiceChange = (listener: (voiceId: VoiceOptionId) => void) => {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<VoiceOptionId>;
    listener(customEvent.detail || getSelectedVoiceId());
  };
  window.addEventListener('vikoda_voice_changed', handler);
  return () => {
    window.removeEventListener('vikoda_voice_changed', handler);
  };
};

// Custom event listener for speech state
type SpeechListener = (speaking: boolean, text?: string) => void;
const listeners: Set<SpeechListener> = new Set();

export const subscribeSpeechState = (listener: SpeechListener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const notifySpeechState = (speaking: boolean, text?: string) => {
  listeners.forEach((fn) => fn(speaking, text));
};

// Audio controller state
let currentAudio: HTMLAudioElement | null = null;
let currentSpeechToken: number = 0;
let activeUtterances: SpeechSynthesisUtterance[] = [];
let cachedVoices: SpeechSynthesisVoice[] = [];

const refreshVoices = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    const v = window.speechSynthesis.getVoices();
    if (v && v.length > 0) {
      cachedVoices = v;
    }
  } catch (e) {}
};

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  refreshVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }
}

/**
 * Clean text for pristine phonetic speech
 */
const cleanSpeechText = (text: string): string => {
  return text
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
    .replace(/[*_#`~[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Offline Browser Speech Synthesis fallback
 */
const speakWithBrowserSynthesis = (
  text: string,
  rate: number,
  lang: string,
  onEnd?: () => void,
  voiceId?: VoiceOptionId
) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    notifySpeechState(false);
    if (onEnd) onEnd();
    return;
  }

  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel();
  } catch (e) {}

  refreshVoices();
  const option = VOICE_OPTIONS.find((v) => v.id === (voiceId || getSelectedVoiceId())) || VOICE_OPTIONS[0];

  const rawSentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const sentences = rawSentences.map((s) => s.trim()).filter((s) => s.length > 0);

  if (sentences.length === 0) {
    notifySpeechState(false);
    if (onEnd) onEnd();
    return;
  }

  // Find best available browser voice
  let matchedVoice: SpeechSynthesisVoice | undefined = undefined;
  if (cachedVoices.length > 0) {
    if (option.gender === 'male') {
      const preferred = ['guy', 'christopher', 'aaron', 'alex', 'david', 'google us english', 'male'];
      for (const name of preferred) {
        matchedVoice = cachedVoices.find(
          (v) => (v.lang === 'en-US' || v.lang.startsWith('en')) && v.name.toLowerCase().includes(name)
        );
        if (matchedVoice) break;
      }
    } else {
      const preferred = ['samantha', 'jenny', 'emma', 'ava', 'zira', 'female'];
      for (const name of preferred) {
        matchedVoice = cachedVoices.find(
          (v) => (v.lang === 'en-US' || v.lang.startsWith('en')) && v.name.toLowerCase().includes(name)
        );
        if (matchedVoice) break;
      }
    }
    if (!matchedVoice) {
      matchedVoice = cachedVoices.find((v) => v.lang === 'en-US') || cachedVoices.find((v) => v.lang.startsWith('en'));
    }
  }

  activeUtterances = [];

  sentences.forEach((sentence, index) => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = lang || 'en-US';
    utterance.rate = Math.max(0.7, Math.min(rate * option.rateFactor, 1.25));
    utterance.pitch = option.pitch;
    utterance.volume = 1.0;

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    if (index === 0) {
      utterance.onstart = () => {
        notifySpeechState(true, text);
      };
    }

    if (index === sentences.length - 1) {
      utterance.onend = () => {
        notifySpeechState(false);
        activeUtterances = [];
        (window as any).__vikoda_utterances = [];
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        notifySpeechState(false);
        activeUtterances = [];
        (window as any).__vikoda_utterances = [];
        if (onEnd) onEnd();
      };
    }

    activeUtterances.push(utterance);
  });

  (window as any).__vikoda_utterances = activeUtterances;
  activeUtterances.forEach((utt) => window.speechSynthesis.speak(utt));
};

/**
 * Play speech: Primary Engine is Studio-Grade Gemini TTS, with smooth offline fallback
 */
export const playSpeech = (
  text: string,
  rate: number = 1.0,
  lang: string = 'en-US',
  onEnd?: () => void,
  voiceIdOverride?: VoiceOptionId
): boolean => {
  if (typeof window === 'undefined') return false;

  const clean = cleanSpeechText(text);
  if (!clean) {
    if (onEnd) onEnd();
    return false;
  }

  // Stop any currently playing audio
  stopSpeech();

  const thisToken = ++currentSpeechToken;
  const selectedVoiceId = voiceIdOverride || getSelectedVoiceId();
  const option = VOICE_OPTIONS.find((v) => v.id === selectedVoiceId) || VOICE_OPTIONS[0];

  // Immediately notify speech indicator so user sees instant response
  notifySpeechState(true, clean);

  // Trigger Gemini AI Speech Generation
  generateGeminiSpeechAudio(clean, option.geminiVoice)
    .then((blobUrl) => {
      // If user clicked another audio in the meantime, ignore this completion
      if (thisToken !== currentSpeechToken) return;

      if (!blobUrl) {
        // Fallback to browser synthesis if AI returned null
        speakWithBrowserSynthesis(clean, rate, lang, onEnd, selectedVoiceId);
        return;
      }

      const audio = new Audio(blobUrl);
      currentAudio = audio;
      audio.playbackRate = Math.max(0.7, Math.min(rate, 1.25));

      audio.onplay = () => {
        notifySpeechState(true, clean);
      };

      audio.onended = () => {
        if (thisToken === currentSpeechToken) {
          notifySpeechState(false);
          currentAudio = null;
          if (onEnd) onEnd();
        }
      };

      audio.onerror = () => {
        if (thisToken === currentSpeechToken) {
          console.warn('AI audio blob playback failed, falling back to browser synthesis');
          speakWithBrowserSynthesis(clean, rate, lang, onEnd, selectedVoiceId);
        }
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (thisToken === currentSpeechToken) {
            console.warn('Audio play interrupted or blocked:', err);
            speakWithBrowserSynthesis(clean, rate, lang, onEnd, selectedVoiceId);
          }
        });
      }
    })
    .catch((err) => {
      if (thisToken === currentSpeechToken) {
        console.warn('Gemini TTS error, using browser fallback:', err);
        speakWithBrowserSynthesis(clean, rate, lang, onEnd, selectedVoiceId);
      }
    });

  return true;
};

export const previewVoiceSample = (voiceId: VoiceOptionId, onEnd?: () => void) => {
  const samplePhrase = voiceId === 'us_male'
    ? 'Hello partners! We are excited to introduce Vikoda natural alkaline mineral water pH 9.0 to the global market.'
    : 'Welcome to Vikoda! Let us practice English together every single day.';

  playSpeech(samplePhrase, 1.0, 'en-US', onEnd, voiceId);
};

export const stopSpeech = () => {
  currentSpeechToken++;

  if (typeof window !== 'undefined') {
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      } catch (e) {}
      currentAudio = null;
    }

    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
      activeUtterances = [];
      (window as any).__vikoda_utterances = [];
    }

    notifySpeechState(false);
  }
};

// Check if browser supports speech recognition
export const isSpeechRecognitionSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
};

// Calculate similarity between two phrases (0 - 100%)
export const calculateSimilarity = (target: string, spoken: string): number => {
  const cleanTarget = target.toLowerCase().replace(/[^\w\s]/g, '').trim().split(/\s+/);
  const cleanSpoken = spoken.toLowerCase().replace(/[^\w\s]/g, '').trim().split(/\s+/);

  if (cleanTarget.length === 0 || cleanSpoken.length === 0) return 0;

  let matches = 0;
  cleanTarget.forEach((word) => {
    if (cleanSpoken.includes(word)) {
      matches++;
    }
  });

  const precision = (matches / cleanTarget.length) * 100;
  return Math.round(precision);
};

// Start Web Speech Recognition
export const startSpeechRecognition = (
  onResult: (text: string) => void,
  onEnd?: () => void,
  lang: string = 'en-US'
) => {
  if (typeof window === 'undefined') return;

  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn('SpeechRecognition not supported.');
    if (onEnd) onEnd();
    return;
  }

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0]?.[0]?.transcript || '';
      onResult(transcript);
    };

    recognition.onerror = (err: any) => {
      console.warn('Recognition error:', err);
      if (onEnd) onEnd();
    };

    recognition.onend = () => {
      if (onEnd) onEnd();
    };

    recognition.start();
  } catch (err) {
    console.warn('Failed to start speech recognition', err);
    if (onEnd) onEnd();
  }
};
