/**
 * Web Audio API synthesizer for gamified sounds (Duolingo & ELSA style)
 * Instant, 100% offline, zero latency, no external mp3 assets needed.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

const STORAGE_KEY_STEALTH_MODE = 'vikoda_office_stealth_mode_v1';

export const isStealthOfficeMode = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY_STEALTH_MODE) === 'true';
};

export const setStealthOfficeMode = (enabled: boolean) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_STEALTH_MODE, enabled ? 'true' : 'false');
    window.dispatchEvent(new CustomEvent('vikoda_stealth_mode_changed', { detail: enabled }));
  }
};

export const subscribeStealthMode = (listener: (enabled: boolean) => void) => {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<boolean>;
    listener(customEvent.detail ?? isStealthOfficeMode());
  };
  window.addEventListener('vikoda_stealth_mode_changed', handler);
  return () => {
    window.removeEventListener('vikoda_stealth_mode_changed', handler);
  };
};

export type SoundType = 'correct' | 'wrong' | 'gem' | 'levelup' | 'click' | 'streak' | 'celebrate' | 'success';

export const playSound = (type: SoundType) => {
  // If user is in Office Stealth Mode, suppress all game SFX (preserve quiet office environment)
  if (isStealthOfficeMode() && type !== 'click') {
    return;
  }

  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  if (type === 'success') {
    type = 'correct';
  }
  if (type === 'celebrate') {
    type = 'levelup';
  }

  if (type === 'click') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
    return;
  }

  if (type === 'correct') {
    // Duolingo cheerful chime: two ascending pleasant tones
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.setValueAtTime(880, now + 0.1); // A5

    osc2.frequency.setValueAtTime(1174.66, now + 0.1); // D6

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.35);
    osc2.start(now + 0.1);
    osc2.stop(now + 0.35);
    return;
  }

  if (type === 'gem' || type === 'streak') {
    // Crystal gem chime
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.15, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.25);
    });
    return;
  }

  if (type === 'levelup') {
    // Fanfare
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.09);
      gain.gain.setValueAtTime(0.25, now + i * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.09 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.09);
      osc.stop(now + i * 0.09 + 0.4);
    });
    return;
  }

  if (type === 'wrong') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(140, now + 0.25);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }
};
