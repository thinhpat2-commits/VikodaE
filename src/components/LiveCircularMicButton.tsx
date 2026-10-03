import React, { useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';

interface LiveCircularMicButtonProps {
  isRecording: boolean;
  onClick: () => void;
  title?: string;
  size?: 'md' | 'lg';
}

/**
 * LiveCircularMicButton
 * 100% Real-Time Live Acoustic Volume Visualizer (60fps DOM direct transform)
 * Circular rings expand when speaker's voice is loud, shrink when soft/pausing.
 * Zero React re-renders during speech = 0% lag, ultra responsive!
 */
export const LiveCircularMicButton: React.FC<LiveCircularMicButtonProps> = ({
  isRecording,
  onClick,
  title,
  size = 'lg',
}) => {
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const ring3Ref = useRef<HTMLDivElement>(null);

  const streamRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRecording) {
      // Cleanup previous stream
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
        audioCtxRef.current = null;
      }

      // Reset rings
      if (ring1Ref.current) {
        ring1Ref.current.style.transform = 'scale(1)';
        ring1Ref.current.style.opacity = '0';
      }
      if (ring2Ref.current) {
        ring2Ref.current.style.transform = 'scale(1)';
        ring2Ref.current.style.opacity = '0';
      }
      if (ring3Ref.current) {
        ring3Ref.current.style.transform = 'scale(1)';
        ring3Ref.current.style.opacity = '0';
      }
      return;
    }

    // When recording starts: bind real-time AudioContext frequency analyzer
    let isCancelled = false;
    let smoothedVolume = 0;

    const startAudioAnalyzer = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });

        if (isCancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = stream;

        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioContextClass();
        audioCtxRef.current = audioCtx;

        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
        }

        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.35; // Fast, snappy response to speech!
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const renderLoop = () => {
          if (isCancelled) return;

          analyser.getByteFrequencyData(dataArray);

          // Focus on primary human speech frequency bins (approx 150Hz - 3400Hz)
          let sum = 0;
          const startBin = 2;
          const endBin = Math.min(38, dataArray.length);
          for (let i = startBin; i < endBin; i++) {
            sum += dataArray[i];
          }
          const rawAvg = sum / (endBin - startBin);

          // Normalize raw volume (background noise gate ~ 10, loud peak ~ 90)
          const targetVol = Math.max(0, Math.min(1.0, (rawAvg - 8) / 70));

          // Quick attack, gentle decay for natural organic expansion
          if (targetVol > smoothedVolume) {
            smoothedVolume = smoothedVolume * 0.4 + targetVol * 0.6;
          } else {
            smoothedVolume = smoothedVolume * 0.75 + targetVol * 0.25;
          }

          // Directly transform DOM rings in 60fps (ZERO React state re-render!)
          if (ring1Ref.current) {
            const s1 = 1 + smoothedVolume * 0.45;
            ring1Ref.current.style.transform = `scale(${s1})`;
            ring1Ref.current.style.opacity = `${0.35 + smoothedVolume * 0.65}`;
          }

          if (ring2Ref.current) {
            const s2 = 1 + smoothedVolume * 0.95;
            ring2Ref.current.style.transform = `scale(${s2})`;
            ring2Ref.current.style.opacity = `${0.2 + smoothedVolume * 0.55}`;
          }

          if (ring3Ref.current) {
            const s3 = 1 + smoothedVolume * 1.5;
            ring3Ref.current.style.transform = `scale(${s3})`;
            ring3Ref.current.style.opacity = `${smoothedVolume > 0.12 ? smoothedVolume * 0.5 : 0}`;
          }

          animFrameRef.current = requestAnimationFrame(renderLoop);
        };

        renderLoop();
      } catch (err) {
        // Fallback: if getUserMedia fails, gentle CSS pulse
        if (ring1Ref.current) ring1Ref.current.style.opacity = '0.5';
        if (ring2Ref.current) ring2Ref.current.style.opacity = '0.3';
      }
    };

    startAudioAnalyzer();

    return () => {
      isCancelled = true;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
        audioCtxRef.current = null;
      }
    };
  }, [isRecording]);

  const buttonDimensions = size === 'lg' ? 'w-20 h-20 sm:w-22 sm:h-22' : 'w-16 h-16';
  const iconSize = size === 'lg' ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-7 h-7';

  return (
    <div className="relative inline-flex items-center justify-center select-none my-2">
      {/* Wave Ring 3: Outermost expansive acoustic shockwave */}
      <div
        ref={ring3Ref}
        aria-hidden="true"
        className={`absolute rounded-full pointer-events-none transition-transform duration-75 ease-out ${
          isRecording ? 'block' : 'hidden'
        }`}
        style={{
          width: size === 'lg' ? '128px' : '100px',
          height: size === 'lg' ? '128px' : '100px',
          backgroundColor: 'rgba(0, 163, 224, 0.15)',
          border: '1.5px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 0 30px rgba(0, 163, 224, 0.35)',
          opacity: 0,
          transform: 'scale(1)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Wave Ring 2: Medium pulsating acoustic wave */}
      <div
        ref={ring2Ref}
        aria-hidden="true"
        className={`absolute rounded-full pointer-events-none transition-transform duration-75 ease-out ${
          isRecording ? 'block' : 'hidden'
        }`}
        style={{
          width: size === 'lg' ? '110px' : '88px',
          height: size === 'lg' ? '110px' : '88px',
          backgroundColor: 'rgba(0, 112, 209, 0.25)',
          border: '2px solid rgba(56, 189, 248, 0.6)',
          boxShadow: '0 0 20px rgba(0, 112, 209, 0.5)',
          opacity: 0,
          transform: 'scale(1)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Wave Ring 1: Immediate tight glowing ripple */}
      <div
        ref={ring1Ref}
        aria-hidden="true"
        className={`absolute rounded-full pointer-events-none transition-transform duration-75 ease-out ${
          isRecording ? 'block' : 'hidden'
        }`}
        style={{
          width: size === 'lg' ? '96px' : '76px',
          height: size === 'lg' ? '96px' : '76px',
          backgroundColor: 'rgba(56, 189, 248, 0.35)',
          border: '2.5px solid rgba(14, 165, 233, 0.8)',
          boxShadow: '0 0 15px rgba(56, 189, 248, 0.8)',
          opacity: 0,
          transform: 'scale(1)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Main Core Interactive Circular Mic Button */}
      <button
        onClick={onClick}
        className={`${buttonDimensions} rounded-full flex flex-col items-center justify-center transition-all cursor-pointer z-10 active:scale-95 shadow-xl ${
          isRecording
            ? 'bg-rose-500 hover:bg-rose-600 text-white border-4 border-rose-300 ring-4 ring-rose-200/80 shadow-[0_0_24px_rgba(244,63,94,0.7)] animate-pulse'
            : 'bg-[#0070D1] hover:bg-[#005bb5] text-white border-4 border-sky-300/80 shadow-[0_6px_0_#005bb5] hover:shadow-[0_8px_0_#005bb5] hover:-translate-y-0.5'
        }`}
        title={title || (isRecording ? 'Đang lắng nghe... (Nói xong tự chấm)' : 'Bấm vào để đọc')}
        aria-label={isRecording ? 'Dừng thu âm' : 'Bắt đầu đọc'}
      >
        {isRecording ? (
          <MicOff className={iconSize} />
        ) : (
          <Mic className={iconSize} />
        )}
      </button>
    </div>
  );
};
