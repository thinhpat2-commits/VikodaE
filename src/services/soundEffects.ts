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

export type SoundType = 
  | 'correct' 
  | 'wrong' 
  | 'gem' 
  | 'levelup' 
  | 'click' 
  | 'streak' 
  | 'celebrate' 
  | 'success' 
  | 'boing' 
  | 'pop' 
  | 'drink' 
  | 'tickle'
  | 'splash'
  | 'bottle_cap'
  | 'bubble_fizz'
  | 'combo'
  | 'fanfare_victory';

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
    type = 'fanfare_victory';
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

  // 1. Signature Vikoda Water Splash (Giọt nước Đảnh Thạnh tí tách rơi)
  if (type === 'splash') {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(1480, now);
    osc1.frequency.exponentialRampToValueAtTime(560, now + 0.12);

    osc2.frequency.setValueAtTime(2200, now);
    osc2.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.28);
    osc2.start(now);
    osc2.stop(now + 0.28);
    return;
  }

  // 2. Signature Bottle Cap Snap (Tiếng mở nắp chai khoáng giòn tan)
  if (type === 'bottle_cap') {
    const osc = ctx.createOscillator();
    const ring = ctx.createOscillator();
    const gain = ctx.createGain();
    const ringGain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(2400, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.04);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    ring.type = 'sine';
    ring.frequency.setValueAtTime(1760, now + 0.02);
    ringGain.gain.setValueAtTime(0.12, now + 0.02);
    ringGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);
    ring.connect(ringGain);
    ringGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
    ring.start(now + 0.02);
    ring.stop(now + 0.18);
    return;
  }

  // 3. Signature Bubble Fizz (Tiếng sủi bọt khí khoáng kiềm dâng trào)
  if (type === 'bubble_fizz') {
    const freqs = [620, 840, 1120, 1480, 1860];
    freqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const time = now + idx * 0.035;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f * 0.8, time);
      osc.frequency.exponentialRampToValueAtTime(f * 1.3, time + 0.04);

      gain.gain.setValueAtTime(0.14, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(time);
      osc.stop(time + 0.05);
    });
    return;
  }

  // 4. Combo Streak Arpeggio (Tiếng combo thăng hoa chuỗi liên hoàn)
  if (type === 'combo') {
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51]; // C5 E5 G5 B5 C6 E6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startT = now + idx * 0.045;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startT);
      gain.gain.setValueAtTime(0.18, startT);
      gain.gain.exponentialRampToValueAtTime(0.001, startT + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startT);
      osc.stop(startT + 0.28);
    });
    return;
  }

  // 5. Fanfare Victory (Chiến thắng tưng bừng)
  if (type === 'fanfare_victory') {
    const chord = [523.25, 659.25, 783.99, 1046.5]; // C major chord
    chord.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    });
    return;
  }

  if (type === 'pop') {
    // Air bubble pop sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.06);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);
    return;
  }

  if (type === 'boing') {
    // Cartoon rubber spring boing sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.22);
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.26);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.26);
    return;
  }

  if (type === 'drink') {
    // Refreshing mineral water gulp
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(340, now);
    osc.frequency.exponentialRampToValueAtTime(620, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.18);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
    return;
  }

  if (type === 'tickle') {
    // Playful chirp giggle wobble
    [0, 0.06, 0.12].forEach((offset, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(idx % 2 === 0 ? 750 : 920, now + offset);
      osc.frequency.exponentialRampToValueAtTime(idx % 2 === 0 ? 950 : 800, now + offset + 0.05);
      gain.gain.setValueAtTime(0.18, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.05);
    });
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
