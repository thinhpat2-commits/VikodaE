/**
 * Speech Service: Handles Text-to-Speech (TTS) and Speech-to-Text (STT)
 * With 3 curated voice options for clear, natural, comfortable listening:
 * 1. US Female (Emma) - Warm, gentle, exceptionally clear
 * 2. US Male (David) - Confident, resonant, professional boardroom tone
 * 3. UK Neutral (Victoria / Oliver) - Oxford British, elegant and diplomatic
 */

export type VoiceOptionId = 'us_male' | 'uk_male' | 'us_female';

export interface VoiceOption {
  id: VoiceOptionId;
  name: string;
  flag: string;
  accent: string;
  gender: 'female' | 'male';
  description: string;
  pitch: number;
  rateFactor: number;
}

export const VOICE_OPTIONS: VoiceOption[] = [
  {
    id: 'us_male',
    name: 'David (Mỹ - Nam)',
    flag: '🇺🇸',
    accent: 'Giọng Nam Chuẩn Mỹ',
    gender: 'male',
    description: 'Trầm ấm, đĩnh đạc, chuẩn phong thái đàm phán quốc tế',
    pitch: 0.95,
    rateFactor: 0.98,
  },
  {
    id: 'uk_male',
    name: 'Oliver (Anh - Nam Chuẩn)',
    flag: '🇬🇧',
    accent: 'Giọng Nam Chuẩn Oxford',
    gender: 'male',
    description: 'Thanh lịch, chuẩn mực ngoại giao tại các hội nghị toàn cầu',
    pitch: 0.96,
    rateFactor: 0.95,
  },
  {
    id: 'us_female',
    name: 'Emma (Mỹ - Nữ)',
    flag: '🇺🇸',
    accent: 'Giọng Nữ Chuẩn Mỹ',
    gender: 'female',
    description: 'Ấm áp, phát âm tròn vành rõ chữ, dễ nghe nhất cho người học',
    pitch: 1.05,
    rateFactor: 0.95,
  },
];

const STORAGE_KEY_VOICE = 'vikoda_selected_voice_option_v2';

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

/**
 * Find the best matching browser SpeechSynthesisVoice based on selected profile
 */
const findBestBrowserVoice = (voiceId: VoiceOptionId): SpeechSynthesisVoice | undefined => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return undefined;

  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return undefined;

  if (voiceId === 'uk_male') {
    // UK Male voice
    const ukMaleVoice = voices.find(
      (v) =>
        (v.lang === 'en-GB' || v.lang.includes('GB') || v.lang.includes('UK')) &&
        (v.name.includes('Oliver') || v.name.includes('George') || v.name.includes('Daniel') || v.name.includes('Arthur') || v.name.includes('Male'))
    );
    if (ukMaleVoice) return ukMaleVoice;
    const anyUk = voices.find((v) => v.lang === 'en-GB' || v.lang.includes('GB'));
    if (anyUk) return anyUk;
  } else if (voiceId === 'us_male') {
    // US Male voice
    const maleVoice = voices.find(
      (v) =>
        (v.lang === 'en-US' || v.lang.startsWith('en')) &&
        (v.name.includes('David') || v.name.includes('Alex') || v.name.includes('Guy') || v.name.includes('Tom') || v.name.includes('Male'))
    );
    if (maleVoice) return maleVoice;
  } else {
    // US Female voice
    const femaleVoice = voices.find(
      (v) =>
        (v.lang === 'en-US' || v.lang.startsWith('en')) &&
        (v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('Emma') || v.name.includes('Ava') || v.name.includes('Female'))
    );
    if (femaleVoice) return femaleVoice;
  }

  // Fallback to any English voice
  return voices.find((v) => v.lang === 'en-US') || voices.find((v) => v.lang.startsWith('en'));
};

export const playSpeech = (
  text: string,
  rate: number = 1.0,
  lang: string = 'en-US',
  onEnd?: () => void,
  voiceIdOverride?: VoiceOptionId
): boolean => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported on this browser.');
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const selectedVoiceId = voiceIdOverride || getSelectedVoiceId();
  const option = VOICE_OPTIONS.find((v) => v.id === selectedVoiceId) || VOICE_OPTIONS[0];

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = option.id === 'uk_male' ? 'en-GB' : 'en-US';
  utterance.rate = Math.max(0.6, Math.min(rate * option.rateFactor, 1.4));
  utterance.pitch = option.pitch;

  const matchedVoice = findBestBrowserVoice(selectedVoiceId);
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onstart = () => {
    notifySpeechState(true, text);
  };

  utterance.onend = () => {
    notifySpeechState(false);
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.warn('Speech error', e);
    notifySpeechState(false);
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
  return true;
};

export const previewVoiceSample = (voiceId: VoiceOptionId, onEnd?: () => void) => {
  const samplePhrase = voiceId === 'uk_male' 
    ? 'Good day! Welcome to Vikoda natural alkaline mineral water.'
    : voiceId === 'us_male'
    ? 'Hello partners! We are excited to introduce Vikoda pH 9.0 to the global market.'
    : 'Welcome to Vikoda! Let us practice English together every single day.';

  playSpeech(samplePhrase, 1.0, voiceId === 'uk_male' ? 'en-GB' : 'en-US', onEnd, voiceId);
};

export const stopSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
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


