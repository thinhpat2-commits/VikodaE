import { useState, useEffect, useRef, useCallback } from 'react';
import { playSound } from '../services/soundEffects';
import {
  playSpeech,
  stopSpeech,
  evaluatePronunciationDetails,
  DetailedSpeechEvaluation,
  startSpeechRecognition,
  finishSpeechRecognition,
  stopSpeechRecognition,
  isSpeechRecognitionSupported,
} from '../services/speechService';

export interface UseSpeechPracticeOptions {
  onPassed?: (evaluation: DetailedSpeechEvaluation) => void;
  onFailed?: (evaluation: DetailedSpeechEvaluation) => void;
  onResult?: (transcript: string, evaluation: DetailedSpeechEvaluation) => void;
  passThreshold?: number;
  lang?: string;
}

export interface UseSpeechPracticeReturn {
  // State
  isRecording: boolean;
  isPlayingAudio: boolean;
  spokenText: string;
  liveInterimText: string;
  errorMessage: string;
  evaluation: DetailedSpeechEvaluation | null;
  speechScore: number | null;
  isSupported: boolean;

  // Actions
  startSpeaking: (targetSentence: string) => void;
  stopSpeaking: () => void;
  playAudio: (text: string, rate?: number) => void;
  stopAudio: () => void;
  reset: () => void;
}

/**
 * Unified Voice Practice Hook (Single Source of Truth)
 * Eliminates duplicate state, duplicated event handling, and fragmented fixes.
 * Used across DuolingoGameArena, ElsaSpeakingCoach, VikodaVoiceCoach, etc.
 */
export function useSpeechPractice(
  options: UseSpeechPracticeOptions = {}
): UseSpeechPracticeReturn {
  const {
    onPassed,
    onFailed,
    onResult,
    passThreshold = 50,
    lang = 'en-US',
  } = options;

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [spokenText, setSpokenText] = useState<string>('');
  const [liveInterimText, setLiveInterimText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [evaluation, setEvaluation] = useState<DetailedSpeechEvaluation | null>(null);
  const [speechScore, setSpeechScore] = useState<number | null>(null);

  const targetSentenceRef = useRef<string>('');
  const isSupported = isSpeechRecognitionSupported();

  // Auto cleanup audio and mic on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
      stopSpeechRecognition();
    };
  }, []);

  const reset = useCallback(() => {
    stopSpeech();
    stopSpeechRecognition();
    setIsRecording(false);
    setIsPlayingAudio(false);
    setSpokenText('');
    setLiveInterimText('');
    setErrorMessage('');
    setEvaluation(null);
    setSpeechScore(null);
  }, []);

  const stopAudio = useCallback(() => {
    stopSpeech();
    setIsPlayingAudio(false);
  }, []);

  const playAudio = useCallback(
    (text: string, rate: number = 1.0) => {
      if (!text) return;
      stopAudio();
      setIsPlayingAudio(true);
      playSpeech(text, rate, lang, () => {
        setIsPlayingAudio(false);
      });
    },
    [lang, stopAudio]
  );

  const stopSpeaking = useCallback(() => {
    finishSpeechRecognition();
    setIsRecording(false);
  }, []);

  const startSpeaking = useCallback(
    (targetSentence: string) => {
      if (isRecording) {
        // Tap to stop manual override
        finishSpeechRecognition();
        return;
      }

      if (!isSupported) {
        setErrorMessage(
          'Trình duyệt chưa hỗ trợ micro trực tiếp. Vui lòng mở bằng Google Chrome hoặc Microsoft Edge!'
        );
        return;
      }

      // Stop any audio currently playing
      stopAudio();
      playSound('click');

      targetSentenceRef.current = targetSentence;
      setIsRecording(true);
      setSpokenText('');
      setLiveInterimText('');
      setErrorMessage('');
      setEvaluation(null);
      setSpeechScore(null);

      startSpeechRecognition(
        // On Final Result (Auto-triggered when speaker pauses or completes sentence)
        (finalTranscript) => {
          setSpokenText(finalTranscript);
          setLiveInterimText('');
          setIsRecording(false);

          const evalResult = evaluatePronunciationDetails(
            targetSentenceRef.current,
            finalTranscript
          );

          setEvaluation(evalResult);
          setSpeechScore(evalResult.score);

          const passed = evalResult.score >= passThreshold;
          if (passed) {
            playSound('correct');
            if (onPassed) onPassed(evalResult);
          } else {
            playSound('wrong');
            if (onFailed) onFailed(evalResult);
          }

          if (onResult) {
            onResult(finalTranscript, evalResult);
          }
        },
        // On End
        () => {
          setIsRecording(false);
        },
        // On Error
        (errorMsg) => {
          setErrorMessage(errorMsg);
          setIsRecording(false);
        },
        // On Interim Streaming (Live spoken words)
        (interim) => {
          setLiveInterimText(interim);
        },
        lang
      );
    },
    [isRecording, isSupported, stopAudio, passThreshold, onPassed, onFailed, onResult, lang]
  );

  return {
    isRecording,
    isPlayingAudio,
    spokenText,
    liveInterimText,
    errorMessage,
    evaluation,
    speechScore,
    isSupported,
    startSpeaking,
    stopSpeaking,
    playAudio,
    stopAudio,
    reset,
  };
}
