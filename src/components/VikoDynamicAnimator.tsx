import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Volume2, Sparkles, Heart, Zap, Flame, Activity } from 'lucide-react';
import { getAssetSrc } from './brand/VikodaLogos';
import { playSound } from '../services/soundEffects';
import { getEquippedSkinId, EVENT_SKIN_UPDATED } from '../services/mascotWardrobe';

export type MascotAnimMode = 
  | 'idle' 
  | 'waving' 
  | 'bowing' 
  | 'laughing' 
  | 'talking' 
  | 'celebrating' 
  | 'tickled'
  | 'surprised'
  | 'dancing'
  | 'bottle_hug'
  | 'cool_shades'
  | 'fire_battle'
  | 'student_book'
  | 'trophy_winner'
  | 'microphone'
  | 'sleepy'
  | 'thinking'
  | 'idea'
  | 'sad_cry'
  | 'business'
  // 5 TRẠNG THÁI CHUYỂN ĐỘNG CỐT LÕI (MINIMALIST SPRITE 8 FPS & CODE TWEENING):
  | 'idle'               // Đứng chờ: Play [Idle_1] -> [Idle_2] -> [Idle_3] -> [Idle_2] (Ping-pong loop)
  | 'walk'               // Đi bộ: Play [Walk_1] -> [Walk_2] -> [Walk_3] -> [Walk_4] (Lặp vô hạn)
  | 'ponder'             // Ngập ngừng: Frame tĩnh [Ponder_1] + Code Rotate -5°..+5° (1s)
  | 'sad'                // Thất bại: Frame tĩnh [Sad_1] + Code Shake X liên tục (0.5s)
  | 'laugh'              // Tương tác chạm: Frame tĩnh [Laugh] + Scale Y 80% & X 110% -> ElasticOut 100%
  // CÁC CHUYỂN ĐỘNG MỞ RỘNG KHÁC:
  | 'run'                // Chạy nhanh 3 frames Ping-pong + Ghost trail
  | 'map_sprint'         // Alias Chạy nhanh
  | 'map_hesitate'       // Alias Ngập ngừng (Ponder)
  | 'wrong_encourage'    // Sai (Shake 0.5s) -> Khích lệ (Chống hông)
  | 'prep_challenge'     // Sẵn sàng (Kéo kính + Chống hông)
  | 'streak_fever'       // Ăn mừng (Trục Y Jump)
  | 'afk_sleep'          // Ngủ gật + bóng nước phập phồng
  | 'afk_drink_vikoda'   // Tu nước khoáng Vikoda
  | 'afk_music_vibe'     // Phiêu theo âm nhạc
  | 'drag_stretch';      // Kéo dãn - 100% Code Tweening

export interface MinimalistSpriteChartItem {
  category: '1. Di chuyển' | '2. Trạng thái chờ' | '3. Phản hồi' | '4. Tương tác' | '5. Khớp tay động';
  stateName: string;
  frameCount: number;
  frameRule: string;
  codeCheat: string;
}

/**
 * BẢNG TỐI GIẢN ASSET & LOGIC CODE LẶP (ANIMATION LOGIC 8 FPS & MODULAR ARM RIG)
 * Tối ưu hóa cực hạn, giảm từ hơn 200 frames xuống chỉ còn ~19-25 frames cho toàn bộ app!
 */
export const MINIMALIST_SPRITE_CHART: MinimalistSpriteChartItem[] = [
  {
    category: '5. Khớp tay động',
    stateName: 'Bóc tách khớp tay (Modular Arm Rig)',
    frameCount: 1,
    frameRule: 'Thân Viko tĩnh (1 Base Image) + Khớp vai động 60 FPS CSS Tween xoay lắc -10°..+28°.',
    codeCheat: 'Tiết kiệm 85% frame vẽ tay, 0% lệch nhân vật AI. Đổi cử chỉ: Vẫy chào -> Nghỉ -> Chỉ bài -> Like',
  },
  {
    category: '2. Trạng thái chờ',
    stateName: 'Đứng chờ (Idle)',
    frameCount: 3,
    frameRule: 'Play frame [Idle_1] -> [Idle_2] -> [Idle_3] -> [Idle_2]. Lặp vô hạn (Ping-pong loop).',
    codeCheat: 'Vẽ 3 frame nhịp thở. Code tự động lặp ngược Ping-pong 1-2-3-2 tạo độ phồng sống động',
  },
  {
    category: '1. Di chuyển',
    stateName: 'Đi bộ (Walk)',
    frameCount: 4,
    frameRule: 'Play frame [Walk_1] -> [Walk_2] -> [Walk_3] -> [Walk_4]. Lặp vô hạn.',
    codeCheat: 'Chu kỳ 4 bước kinh điển. Nhịp 8 FPS bước chân vững chãi + nhấp nhô nhẹ trục Y',
  },
  {
    category: '2. Trạng thái chờ',
    stateName: 'Ngập ngừng (Ponder)',
    frameCount: 1,
    frameRule: 'Lấy frame tĩnh [Ponder_1] (Đúng 1 ảnh xoa cằm).',
    codeCheat: 'Code Rotate lắc nhẹ ảnh từ -5 độ đến 5 độ trong 1 giây (Tiết kiệm 100% frame vẽ thêm)',
  },
  {
    category: '3. Phản hồi',
    stateName: 'Thất bại (Sad)',
    frameCount: 1,
    frameRule: 'Lấy frame tĩnh [Sad_1] (Đúng 1 ảnh xị mặt rơm rớm).',
    codeCheat: 'Dùng code Shake (rung lắc tọa độ X liên tục) trong 0.5 giây (Tiết kiệm 100% frame vẽ thêm)',
  },
  {
    category: '4. Tương tác',
    stateName: 'Tương tác chạm (Tap/Tickle)',
    frameCount: 1,
    frameRule: 'Khi chạm mascot, lấy frame tĩnh [Laugh] (Đúng 1 ảnh cười tít mắt).',
    codeCheat: 'Code Scale: ép trục Y xuống 80% và phóng trục X lên 110%, sau đó nảy (ElasticOut) về 100%',
  },
  {
    category: '1. Di chuyển',
    stateName: 'Chạy nhanh (Run / Sprint)',
    frameCount: 3,
    frameRule: 'Ping-pong 3 frames cực nhanh (1 -> 2 -> 3 -> 2 -> 1)',
    codeCheat: 'Dáng đổ về trước skewX(-16deg) + Vệt bóng mờ kép (dual ghost trail) đuổi theo sau',
  },
  {
    category: '3. Phản hồi',
    stateName: 'Ăn mừng (Jump / Streak)',
    frameCount: 3,
    frameRule: 'Chu kỳ 3 bước (Nhún đà -> Vươn người -> Tiếp đất)',
    codeCheat: 'Code di chuyển trục Y tung lên không trung (translateY(-28px)) rồi nhún tiếp đất',
  },
];

/**
 * 🦾 HỆ THỐNG KHỚP TAY BÓC TÁCH (MODULAR ARM RIGGING)
 * Sáng kiến bóc tách cánh tay cơ động khỏi thân chính:
 * 1 Thân gốc tĩnh (Base Torso) + Khớp xoay vai 60 FPS CSS Tweening
 */
export type VikoArmGesture = 
  | 'auto'          // Tự động luân chuyển cử chỉ (Auto-Fidget & Guidance loop)
  | 'rest'          // Nghỉ: Buông xuôi bên hông, thở nhịp nhàng Ping-pong
  | 'wave'          // Vẫy tay: Khớp vai lắc góc -10° <-> +28° chào bạn học
  | 'point'         // Chỉ bài: Cánh tay duỗi thẳng ra hiệu vào bài học + điểm sáng ngón tay
  | 'thumbs_up'     // Cổ vũ: Giơ ngón cái Like khích lệ học viên
  | 'drink_vikoda'; // Tu nước: Cầm chai khoáng kiềm Vikoda nhấp một ngụm

export interface VikoDynamicAnimatorProps {
  mode?: MascotAnimMode;
  armGesture?: VikoArmGesture; // Cử chỉ cánh tay độc lập (Modular Arm Rig)
  enableAutoArmLoop?: boolean; // Tự động luân chuyển cử chỉ tay khi ở Idle
  customShoulderAngle?: number; // Góc xoay khớp vai tùy chỉnh (từ Studio slider)
  showArmRigOverlay?: boolean; // Hiển thị vòng tròn tâm khớp vai (Studio Debug)
  onArmGestureChange?: (gesture: VikoArmGesture) => void;
  isSpeaking?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onTap?: () => void;
  className?: string;
  showShadow?: boolean;
  autoAnimate?: boolean;
  isDragging?: boolean;
  enableEyeTracking?: boolean;
  onWakeUp?: () => void;
  bubbleText?: string;
  speechText?: string;
  fps?: number; // Mặc định 8 FPS retro claymation theo yêu cầu người dùng
  showFpsBadge?: boolean; // Hiển thị HUD thông số 8 FPS & Ping-Pong
}

/**
 * Thuật toán tính toán bước chuyển Ping-Pong: 0 -> 1 -> 2 -> 1 -> 0 -> 1 ...
 */
export const getPingPongNextIndex = (
  currentIndex: number,
  direction: 1 | -1,
  totalFrames: number
): { nextIndex: number; nextDirection: 1 | -1 } => {
  if (totalFrames <= 1) return { nextIndex: 0, nextDirection: 1 };
  let next = currentIndex + direction;
  let newDir = direction;
  if (next >= totalFrames) {
    newDir = -1;
    next = totalFrames - 2;
  } else if (next < 0) {
    newDir = 1;
    next = 1;
  }
  return { nextIndex: Math.max(0, Math.min(next, totalFrames - 1)), nextDirection: newDir };
};

/**
 * POOL TỐI GIẢN: Thu gọn toàn bộ kho asset tĩnh về bộ sprite sheet nhỏ gọn (~24 frames)
 */
const resolveAssetFrames = () => ({
  animIdle: getAssetSrc('/assets/mascot_anim_idle.png') || getAssetSrc('/assets/viko_mascot_3d.png'),
  animWave: getAssetSrc('/assets/mascot_anim_wave.png') || getAssetSrc('/assets/mascot_wave.png'),
  animGuide: getAssetSrc('/assets/mascot_anim_guide.png') || getAssetSrc('/assets/viko_mascot_3d.png'),
  animThumbsUp: getAssetSrc('/assets/mascot_anim_thumbsup.png') || getAssetSrc('/assets/mascot_jump_cheer.png'),
  animBounce: getAssetSrc('/assets/mascot_anim_bounce.png') || getAssetSrc('/assets/mascot_jump_cheer.png'),
  animListen: getAssetSrc('/assets/mascot_anim_listen.png') || getAssetSrc('/assets/mascot_thinking.png'),
  animSleepy: getAssetSrc('/assets/mascot_anim_sleepy.png') || getAssetSrc('/assets/mascot_sleepy.png'),
  happy: getAssetSrc('/assets/viko_mascot_3d.png'),
  wave: getAssetSrc('/assets/mascot_wave.png'),
  jumpCheer: getAssetSrc('/assets/mascot_jump_cheer.png'),
  thinking: getAssetSrc('/assets/mascot_thinking.png'),
  surprised: getAssetSrc('/assets/mascot_surprised.png'),
  dancing: getAssetSrc('/assets/mascot_dancing.png'),
  bottleHug: getAssetSrc('/assets/mascot_bottle_hug.png'),
  coolShades: getAssetSrc('/assets/mascot_cool_shades.png'),
  fireBattle: getAssetSrc('/assets/mascot_fire_battle.png'),
  studentBook: getAssetSrc('/assets/mascot_student_book.png'),
  trophyWinner: getAssetSrc('/assets/mascot_trophy_winner.png'),
  microphone: getAssetSrc('/assets/mascot_microphone.png'),
  sleepy: getAssetSrc('/assets/mascot_sleepy.png'),
  idea: getAssetSrc('/assets/mascot_idea.png'),
  sadCry: getAssetSrc('/assets/mascot_sad_cry.png'),
  businessSuit: getAssetSrc('/assets/mascot_business_suit.png'),
  // 5 TRẠNG THÁI SPRITE TỐI GIẢN CHUẨN:
  idle1: getAssetSrc('/assets/mascot_idle_1.png') || getAssetSrc('/assets/mascot_anim_idle.png') || getAssetSrc('/assets/viko_mascot_3d.png'),
  idle2: getAssetSrc('/assets/mascot_idle_2.png') || getAssetSrc('/assets/mascot_happy.png'),
  idle3: getAssetSrc('/assets/mascot_idle_3.png') || getAssetSrc('/assets/mascot_anim_sleepy.png'),
  walk1: getAssetSrc('/assets/mascot_walk_1.png') || getAssetSrc('/assets/mascot_anim_guide.png'),
  walk2: getAssetSrc('/assets/mascot_walk_2.png') || getAssetSrc('/assets/mascot_happy.png'),
  walk3: getAssetSrc('/assets/mascot_walk_3.png') || getAssetSrc('/assets/mascot_anim_wave.png'),
  walk4: getAssetSrc('/assets/mascot_walk_4.png') || getAssetSrc('/assets/mascot_anim_bounce.png'),
  ponder1: getAssetSrc('/assets/mascot_ponder_1.png') || getAssetSrc('/assets/mascot_pondering.png') || getAssetSrc('/assets/mascot_thinking.png'),
  sad1: getAssetSrc('/assets/mascot_sad_1.png') || getAssetSrc('/assets/mascot_sad_cry.png'),
  laugh: getAssetSrc('/assets/mascot_laugh.png') || getAssetSrc('/assets/mascot_jump_cheer.png'),
});

export const STORAGE_KEY_VIKO_FPS = 'vikoda_mascot_anim_fps';
export const EVENT_VIKO_FPS_UPDATED = 'vikoda_mascot_anim_speed_updated';

export const getStoredMascotFps = (): number => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY_VIKO_FPS);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 2 && parsed <= 24) return parsed;
    }
  }
  return 5; // Mặc định 5 FPS (~200ms) - nhịp thở êm ái, tự nhiên
};

export const setStoredMascotFps = (newFps: number) => {
  const clamped = Math.min(24, Math.max(2, Math.round(newFps)));
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY_VIKO_FPS, clamped.toString());
      window.dispatchEvent(new CustomEvent(EVENT_VIKO_FPS_UPDATED, { detail: { fps: clamped } }));
    } catch (e) {}
  }
};

export const VikoDynamicAnimator: React.FC<VikoDynamicAnimatorProps> = ({
  mode = 'idle',
  armGesture = 'auto',
  enableAutoArmLoop = true,
  customShoulderAngle,
  showArmRigOverlay = false,
  onArmGestureChange,
  isSpeaking = false,
  size = 'md',
  onTap,
  className = '',
  showShadow = true,
  autoAnimate = true,
  isDragging = false,
  enableEyeTracking = true,
  onWakeUp,
  bubbleText,
  speechText,
  fps,
  showFpsBadge = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frames, setFrames] = useState(resolveAssetFrames);

  // 🦾 MODULAR ARM RIG STATE & AUTO-FIDGET LOOP (Cử chỉ tay tự động khi đứng chờ)
  const [autoArmGesture, setAutoArmGesture] = useState<'wave' | 'rest' | 'point' | 'thumbs_up'>('wave');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Dynamic FPS synced with Studio adjustment slider & localStorage
  const [currentFps, setCurrentFps] = useState<number>(() => {
    if (typeof fps === 'number' && fps > 0) return fps;
    return getStoredMascotFps();
  });

  // Mascot Wardrobe Skin State (Trang phục được trang bị)
  const [equippedSkin, setEquippedSkin] = useState<string>(() => getEquippedSkinId());

  useEffect(() => {
    const handleSkinUpdate = (e: any) => {
      setEquippedSkin(e.detail?.skinId || getEquippedSkinId());
    };
    window.addEventListener(EVENT_SKIN_UPDATED, handleSkinUpdate);
    window.addEventListener('storage', handleSkinUpdate);
    return () => {
      window.removeEventListener(EVENT_SKIN_UPDATED, handleSkinUpdate);
      window.removeEventListener('storage', handleSkinUpdate);
    };
  }, []);

  // Listen to Studio animation speed adjustments in realtime
  useEffect(() => {
    const handleSpeedUpdate = (e: any) => {
      const updated = e?.detail?.fps;
      if (typeof updated === 'number' && updated >= 2 && updated <= 24) {
        setCurrentFps(updated);
      } else {
        setCurrentFps(getStoredMascotFps());
      }
    };
    window.addEventListener(EVENT_VIKO_FPS_UPDATED, handleSpeedUpdate);
    window.addEventListener('storage', handleSpeedUpdate);
    return () => {
      window.removeEventListener(EVENT_VIKO_FPS_UPDATED, handleSpeedUpdate);
      window.removeEventListener('storage', handleSpeedUpdate);
    };
  }, []);

  // Active animation mode
  const [activeMode, setActiveMode] = useState<MascotAnimMode>(mode);

  // 🦾 TỰ ĐỘNG LUÂN CHUYỂN CỬ CHỈ TAY KHI ĐỨNG CHỜ (AUTO-FIDGET & GUIDANCE LOOP)
  useEffect(() => {
    if (activeMode !== 'idle' || isDragging || isSpeaking || armGesture !== 'auto' || !enableAutoArmLoop || !autoAnimate) {
      return;
    }

    let timer: number;
    let step = 0;
    const schedule = [
      { gesture: 'wave' as const, duration: 3500 },     // 0 -> 3.5s: Vẫy tay chào bạn
      { gesture: 'rest' as const, duration: 8000 },     // 3.5s -> 11.5s: Nghỉ thở nhịp nhàng
      { gesture: 'point' as const, duration: 6000 },    // 11.5s -> 17.5s: Chỉ bài học trên bản đồ
      { gesture: 'thumbs_up' as const, duration: 4000 }, // 17.5s -> 21.5s: Like cổ vũ khích lệ
    ];

    const runStep = () => {
      const cur = schedule[step % schedule.length];
      setAutoArmGesture(cur.gesture);
      if (onArmGestureChange) onArmGestureChange(cur.gesture);
      step = (step + 1) % schedule.length;
      timer = window.setTimeout(runStep, cur.duration);
    };

    runStep();
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [activeMode, isDragging, isSpeaking, armGesture, enableAutoArmLoop, autoAnimate, onArmGestureChange]);

  // Cử chỉ tay hiệu dụng hiện tại
  const currentEffectiveArmGesture: 'wave' | 'rest' | 'point' | 'thumbs_up' | 'drink_vikoda' = useMemo(() => {
    if (activeMode !== 'idle') {
      if (activeMode === 'waving') return 'wave';
      if (activeMode === 'afk_drink_vikoda' || activeMode === 'bottle_hug') return 'drink_vikoda';
      return 'rest';
    }
    // Hover chuột vào linh vật: Ưu tiên vẫy tay chào nhiệt tình ngay lập tức!
    if (isHovered) return 'wave';
    if (armGesture && armGesture !== 'auto') return armGesture;
    return autoArmGesture;
  }, [activeMode, isHovered, armGesture, autoArmGesture]);

  // 8 FPS PING-PONG ENGINE STATES
  const [spriteFrameIdx, setSpriteFrameIdx] = useState<number>(0);
  const spritePingPongDirRef = useRef<1 | -1>(1);

  // Code Tweens: transform style for squashing, stretching, shaking, tilting
  const [transformStyle, setTransformStyle] = useState<string>('scale(1, 1) translateY(0px)');
  const [isShakeActive, setIsShakeActive] = useState<boolean>(false);
  const [activeParticle, setActiveParticle] = useState<string | null>(null);

  // Procedural Eye & Head Tilt Tracking cursor offsets
  const [cursorOffset, setCursorOffset] = useState<{ tiltDeg: number; offsetPx: number }>({ tiltDeg: 0, offsetPx: 0 });

  // Nhóm Phản hồi: Wrong -> Encourage 2-phase state
  const [wrongPhase, setWrongPhase] = useState<'sad' | 'encourage'>('sad');

  // Nhóm Chờ đợi: AFK Sleep Bubble state & Pop animation
  const [isSleepBubblePopped, setIsSleepBubblePopped] = useState<boolean>(false);
  const [isWakingUp, setIsWakingUp] = useState<boolean>(false);

  // Nhóm Tương tác chạm: Boing Spring rebound
  const [isBoingSpring, setIsBoingSpring] = useState<boolean>(false);

  const animTimeoutRef = useRef<number | null>(null);
  const secondaryTimeoutRef = useRef<number | null>(null);

  // Live listener: When Studio updates an asset, refresh frames
  useEffect(() => {
    const handleAssetsUpdated = () => setFrames(resolveAssetFrames());
    window.addEventListener('vikoda_assets_updated', handleAssetsUpdated);
    window.addEventListener('storage', handleAssetsUpdated);
    return () => {
      window.removeEventListener('vikoda_assets_updated', handleAssetsUpdated);
      window.removeEventListener('storage', handleAssetsUpdated);
    };
  }, []);

  // Preload frames
  useEffect(() => {
    const assetList = [
      frames.animIdle,
      frames.animGuide,
      frames.animWave,
      frames.animThumbsUp,
      frames.animBounce,
      frames.animSleepy,
      frames.coolShades,
      frames.thinking,
      frames.sadCry,
      frames.jumpCheer,
      frames.happy,
      frames.idle1,
      frames.idle2,
      frames.idle3,
      frames.walk1,
      frames.walk2,
      frames.walk3,
      frames.walk4,
      frames.ponder1,
      frames.sad1,
      frames.laugh,
    ];
    assetList.forEach((src) => {
      if (src && typeof window !== 'undefined') {
        const img = new Image();
        img.src = src;
      }
    });
  }, [frames]);

  // Sync external mode changes
  useEffect(() => {
    if (isSpeaking) {
      setActiveMode(mode !== 'idle' ? mode : 'talking');
    } else {
      setActiveMode(mode);
    }
  }, [mode, isSpeaking]);

  /**
   * BẢNG ÁNH XẠ MINIMALIST SPRITE SHEET TƯƠNG ỨNG TỪNG TRẠNG THÁI
   * 1. Idle (Đứng chờ): Play [Idle_1] -> [Idle_2] -> [Idle_3] -> [Idle_2]. Lặp vô hạn (Ping-pong loop).
   * 2. Walk (Đi bộ): Play [Walk_1] -> [Walk_2] -> [Walk_3] -> [Walk_4]. Lặp vô hạn.
   * 3. Ngập ngừng (Ponder): Frame tĩnh [Ponder_1] + Code Rotate -5°..+5° (1s).
   * 4. Thất bại (Sad): Frame tĩnh [Sad_1] + Code Shake X (0.5s).
   * 5. Tương tác chạm (Tap/Tickle): Frame tĩnh [Laugh] + Code Scale Y 80% & X 110% -> ElasticOut 100%.
   */
  const currentSpriteDef = useMemo(() => {
    const isWalk = activeMode === 'walk';
    const isRun = activeMode === 'run' || activeMode === 'map_sprint';
    const isPonder = activeMode === 'ponder' || activeMode === 'map_hesitate';
    const isJump = activeMode === 'streak_fever' || activeMode === 'celebrating' || activeMode === 'dancing';
    const isSad = activeMode === 'sad' || activeMode === 'sad_cry' || (activeMode === 'wrong_encourage' && wrongPhase === 'sad');
    const isReady = activeMode === 'prep_challenge' || (activeMode === 'wrong_encourage' && wrongPhase === 'encourage');
    const isTapLaugh = activeMode === 'laugh' || activeMode === 'tickled';

    // 1. DI CHUYỂN
    // Walk (Đi bộ): Play frame [Walk_1] -> [Walk_2] -> [Walk_3] -> [Walk_4]. Lặp vô hạn.
    if (isWalk) {
      return {
        key: 'walk',
        nameVi: 'Đi bộ (Walk)',
        frames: [frames.walk1, frames.walk2, frames.walk3, frames.walk4],
        isPingPong: false, // Chu kỳ 4 bước kinh điển lặp vô hạn
        fps: currentFps,
      };
    }
    if (isRun) {
      return {
        key: 'run',
        nameVi: 'Chạy nhanh (Run)',
        frames: [frames.animBounce, frames.dancing, frames.jumpCheer],
        isPingPong: true, // 1 -> 2 -> 3 -> 2 -> 1
        fps: Math.max(currentFps + 2, Math.round(currentFps * 1.3)),
      };
    }

    // 2. TRẠNG THÁI CHỜ
    // Ngập ngừng (Ponder): Lấy frame tĩnh [Ponder_1]. Dùng code Rotate lắc nhẹ ảnh từ -5 độ đến 5 độ trong 1 giây.
    if (isPonder) {
      return {
        key: 'ponder',
        nameVi: 'Ngập ngừng (Ponder)',
        frames: [frames.ponder1],
        isPingPong: false,
        fps: currentFps,
      };
    }

    // 3. PHẢN HỒI
    // Thất bại (Sad): Lấy frame tĩnh [Sad_1]. Dùng code Shake (rung lắc tọa độ X liên tục) trong 0.5 giây.
    if (isSad) {
      return {
        key: 'sad',
        nameVi: 'Thất bại (Sad)',
        frames: [frames.sad1],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (isJump) {
      return {
        key: 'jump',
        nameVi: 'Ăn mừng (Jump)',
        frames: [frames.animBounce, frames.jumpCheer, frames.happy],
        isPingPong: false, // 1 Nhún đà -> 2 Vươn người -> 3 Tiếp đất
        fps: currentFps,
      };
    }
    if (isReady) {
      return {
        key: 'ready',
        nameVi: 'Khích lệ / Sẵn sàng',
        frames: [frames.coolShades, frames.animThumbsUp],
        isPingPong: true, // 1 -> 2 -> 1
        fps: currentFps,
      };
    }

    // 4. TƯƠNG TÁC
    // Tương tác chạm (Tap/Tickle): Khi User chạm vào mascot, lấy frame tĩnh [Laugh]. Dùng code Scale ép trục Y xuống 80% và phóng trục X lên 110%, sau đó nảy (ElasticOut) về 100%.
    if (isTapLaugh) {
      return {
        key: 'laugh',
        nameVi: 'Tương tác chạm (Tap/Tickle)',
        frames: [frames.laugh],
        isPingPong: false,
        fps: currentFps,
      };
    }

    if (activeMode === 'surprised') {
      return {
        key: 'surprised',
        nameVi: 'Ngạc nhiên (Surprised)',
        frames: [frames.surprised || frames.happy],
        isPingPong: false,
        fps: currentFps,
      };
    }

    // MẶC ĐỊNH: ĐỨNG CHỜ (IDLE)
    // Nếu học viên đang trang bị trang phục đặc biệt từ Tủ Đồ:
    if (equippedSkin === 'business') {
      return {
        key: 'idle_business',
        nameVi: 'Viko Doanh Nhân (B2B Suit)',
        frames: [frames.businessSuit],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (equippedSkin === 'cool') {
      return {
        key: 'idle_cool',
        nameVi: 'Viko Phong Cách (Cool Shades)',
        frames: [frames.coolShades],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (equippedSkin === 'student') {
      return {
        key: 'idle_student',
        nameVi: 'Viko Học Giả (Student Scholar)',
        frames: [frames.studentBook],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (equippedSkin === 'trophy') {
      return {
        key: 'idle_trophy',
        nameVi: 'Viko Quán Quân (Trophy Winner)',
        frames: [frames.trophyWinner],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (equippedSkin === 'bottle_hug') {
      return {
        key: 'idle_bottle_hug',
        nameVi: 'Viko Nạp Khoáng (Bottle Hug)',
        frames: [frames.bottleHug],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (equippedSkin === 'fire_battle') {
      return {
        key: 'idle_fire_battle',
        nameVi: 'Viko Chiến Binh (Fire Battle)',
        frames: [frames.fireBattle],
        isPingPong: false,
        fps: currentFps,
      };
    }

    // 🦾 CỬ CHỈ CÁNH TAY TỰ ĐỘNG / ĐỘC LẬP (MODULAR ARM RIG):
    if (currentEffectiveArmGesture === 'wave') {
      return {
        key: 'arm_wave',
        nameVi: 'Viko Vẫy Tay Chào (Wave Arm)',
        frames: [frames.animWave || frames.wave || frames.idle1],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (currentEffectiveArmGesture === 'point') {
      return {
        key: 'arm_point',
        nameVi: 'Viko Chỉ Bài Học (Point Arm)',
        frames: [frames.animGuide || frames.idle1],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (currentEffectiveArmGesture === 'thumbs_up') {
      return {
        key: 'arm_thumbs_up',
        nameVi: 'Viko Like Cổ Vũ (Thumbs Up)',
        frames: [frames.animThumbsUp || frames.jumpCheer || frames.idle1],
        isPingPong: false,
        fps: currentFps,
      };
    }
    if (currentEffectiveArmGesture === 'drink_vikoda') {
      return {
        key: 'arm_drink',
        nameVi: 'Viko Nạp Khoáng (Drink Vikoda)',
        frames: [frames.bottleHug || frames.idle1],
        isPingPong: false,
        fps: currentFps,
      };
    }

    // Trang phục mặc định (Nghỉ - Rest): Play frame [Idle_1] -> [Idle_2] -> [Idle_3] -> [Idle_2] (Ping-pong loop)
    return {
      key: 'idle',
      nameVi: 'Đứng chờ (Idle)',
      frames: [frames.idle1, frames.idle2, frames.idle3, frames.idle2],
      isPingPong: false,
      fps: currentFps,
    };
  }, [activeMode, wrongPhase, frames, currentFps, equippedSkin, currentEffectiveArmGesture]);

  /**
   * CLOCK TICKER - BỘ ĐẾM FRAME TỰ ĐỘNG THEO FPS ĐƯỢC CHỈ ĐỊNH/ĐỒNG BỘ TỪ STUDIO
   */
  useEffect(() => {
    if (isDragging || activeMode === 'drag_stretch' || isWakingUp) {
      setSpriteFrameIdx(0);
      return;
    }

    const targetFps = currentSpriteDef.fps || currentFps;
    const intervalMs = Math.round(1000 / targetFps);

    const ticker = window.setInterval(() => {
      setSpriteFrameIdx((prev) => {
        if (!currentSpriteDef.isPingPong) {
          // Lặp tuần tự (ví dụ: chu kỳ 4 bước đi bộ: 0 -> 1 -> 2 -> 3 -> 0)
          return (prev + 1) % currentSpriteDef.frames.length;
        } else {
          // Lặp ngược Ping-pong chuẩn: 0 -> 1 -> 2 -> 1 -> 0
          const { nextIndex, nextDirection } = getPingPongNextIndex(
            prev,
            spritePingPongDirRef.current,
            currentSpriteDef.frames.length
          );
          spritePingPongDirRef.current = nextDirection;
          return nextIndex;
        }
      });
    }, intervalMs);

    return () => clearInterval(ticker);
  }, [currentSpriteDef, currentFps, isDragging, activeMode, isWakingUp]);

  /**
   * CODE TWEENING ENGINE - THỦ THUẬT "ĂN GIAN" TIẾT KIỆM FRAME BẰNG CODE
   */
  useEffect(() => {
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    if (secondaryTimeoutRef.current) clearTimeout(secondaryTimeoutRef.current);

    // 1. DI CHUYỂN
    // Đi bộ: nhấp nhô nhẹ trục Y theo bước chân
    if (activeMode === 'walk') {
      setActiveParticle('👣');
      const yOffset = spriteFrameIdx % 2 === 0 ? '-3px' : '0px';
      const rot = spriteFrameIdx % 2 === 0 ? '-2deg' : '2deg';
      setTransformStyle(`translateY(${yOffset}) rotate(${rot})`);
      return;
    }

    // Chạy nhanh: Dáng người chúi về phía trước skewX(-16deg)
    if (activeMode === 'run' || activeMode === 'map_sprint') {
      setActiveParticle('💨');
      const yOffset = spriteFrameIdx === 1 ? '-8px' : '0px';
      setTransformStyle(`skewX(-16deg) translateY(${yOffset}) scale(1.05, 0.95)`);
      return;
    }

    // 2. TRẠNG THÁI CHỜ
    // Thở cơ bản (Idle & Cử chỉ cánh tay tự động):
    if (activeMode === 'idle') {
      if (currentEffectiveArmGesture === 'wave') {
        setActiveParticle('👋');
        setTransformStyle('scale(1.02, 1) translateY(-2px)');
        return;
      }
      if (currentEffectiveArmGesture === 'point') {
        setActiveParticle('👉');
        setTransformStyle('scale(1.03, 1) translateY(-1px)');
        return;
      }
      if (currentEffectiveArmGesture === 'thumbs_up') {
        setActiveParticle('👍');
        setTransformStyle('scale(1.05, 1.02) translateY(-3px)');
        return;
      }
      if (currentEffectiveArmGesture === 'drink_vikoda') {
        setActiveParticle('💧');
        setTransformStyle('scale(1, 1) translateY(0px)');
        return;
      }
      setActiveParticle(null);
      if (spriteFrameIdx === 0) {
        setTransformStyle('scale(1, 1) translateY(0px)');
      } else if (spriteFrameIdx === 1) {
        setTransformStyle('scale(1.025, 1.015) translateY(-2px)');
      } else {
        setTransformStyle('scale(1.045, 0.985) translateY(-3px)');
      }
      return;
    }

    // Ngập ngừng (Ponder): Lấy frame tĩnh [Ponder_1]. Dùng code Rotate lắc nhẹ ảnh từ -5 độ đến 5 độ trong 1 giây.
    if (activeMode === 'ponder' || activeMode === 'map_hesitate') {
      setActiveParticle('🤔');
      setTransformStyle('scale(1, 1) translateY(-2px)');
      return;
    }

    // 3. PHẢN HỒI
    // Ăn mừng (Jump): Di chuyển tọa độ trục Y tung lên không trung và rơi xuống
    if (activeMode === 'streak_fever' || activeMode === 'celebrating') {
      setActiveParticle('💖');
      if (spriteFrameIdx === 0) {
        // Nhún lấy đà
        setTransformStyle('scale(1.18, 0.82) translateY(5px)');
      } else if (spriteFrameIdx === 1) {
        // Vươn người trên không
        setTransformStyle('scale(0.92, 1.15) translateY(-28px) rotate(15deg)');
      } else {
        // Rơi xuống tiếp đất
        setTransformStyle('scale(1.1, 0.9) translateY(2px) rotate(0deg)');
      }
      return;
    }

    // Thất bại (Sad): Lấy frame tĩnh [Sad_1]. Dùng code Shake (rung lắc tọa độ X liên tục) trong 0.5 giây.
    if (activeMode === 'sad' || activeMode === 'sad_cry' || (activeMode === 'wrong_encourage' && wrongPhase === 'sad')) {
      setActiveParticle('💧');
      setIsShakeActive(true);
      setTransformStyle('scale(0.95, 0.95) translateY(4px)');

      animTimeoutRef.current = window.setTimeout(() => {
        setIsShakeActive(false);

        // Nếu là wrong_encourage, sau 1.8s chuyển sang Pha 2: Khích lệ / Sẵn sàng
        if (activeMode === 'wrong_encourage') {
          setWrongPhase('encourage');
          setActiveParticle('💪');
          setTransformStyle('scale(1.06, 1.04) translateY(-3px)');
        }
      }, 500); // 0.5 giây rung lắc tọa độ X liên tục chuẩn xác theo yêu cầu

      return () => {
        if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      };
    }

    // Khích lệ / Sẵn sàng: Ưỡn ngực tự tin scale(1.06, 1.04)
    if (activeMode === 'prep_challenge' || (activeMode === 'wrong_encourage' && wrongPhase === 'encourage')) {
      setActiveParticle(activeMode === 'prep_challenge' ? '🔥' : '💪');
      setTransformStyle('scale(1.06, 1.04) translateY(-3px) rotate(-1deg)');
      return;
    }

    // 4. TƯƠNG TÁC (TOUCH) - 100% CODE
    // Tương tác chạm (Tap/Tickle): Khi User chạm vào mascot, lấy frame tĩnh [Laugh]. Dùng code Scale ép trục Y (chiều cao) xuống 80% và phóng trục X (chiều ngang) lên 110%, sau đó nảy (ElasticOut) về 100%.
    if (activeMode === 'laugh' || activeMode === 'tickled') {
      setActiveParticle('😆');
      playSound('tickle');
      setIsBoingSpring(true);
      setTransformStyle('scale(1.1, 0.8) translateY(6px)');
      animTimeoutRef.current = window.setTimeout(() => {
        setTransformStyle('scale(0.94, 1.14) translateY(-6px)');
        secondaryTimeoutRef.current = window.setTimeout(() => {
          setTransformStyle('scale(1, 1) translateY(0px)');
          setIsBoingSpring(false);
          setActiveParticle(null);
          setActiveMode('idle');
        }, 320);
      }, 150);
      return;
    }

    if (activeMode === 'drag_stretch' || isDragging) {
      setActiveParticle('💧');
      // Kéo dài trục Y
      setTransformStyle('scale(0.82, 1.32) translateY(-14px) rotate(-2deg)');
      return;
    }

    // AFK Modes
    if (activeMode === 'afk_sleep') {
      setActiveParticle('💤');
      setTransformStyle('scale(0.96, 0.95) translateY(5px) rotate(3deg)');
      return;
    }

    if (activeMode === 'afk_drink_vikoda') {
      setActiveParticle('💧');
      playSound('drink');
      setTransformStyle('scale(1.04, 0.96) translateY(3px) rotate(2deg)');
      animTimeoutRef.current = window.setTimeout(() => {
        setActiveParticle('✨');
        setTransformStyle('scale(1.06, 1.02) translateY(-4px) rotate(0deg)');
        secondaryTimeoutRef.current = window.setTimeout(() => {
          setTransformStyle('scale(1, 1) translateY(0px)');
          setActiveMode('idle');
        }, 1200);
      }, 1000);
      return;
    }

    if (activeMode === 'afk_music_vibe') {
      setActiveParticle('🎵');
      const rot = spriteFrameIdx % 2 === 0 ? '-6deg' : '6deg';
      setTransformStyle(`rotate(${rot}) translateY(${spriteFrameIdx % 2 === 0 ? '2px' : '-3px'})`);
      return;
    }
  }, [activeMode, spriteFrameIdx, wrongPhase, isDragging]);

  // Procedural Eye & Head Tracking
  useEffect(() => {
    if (!enableEyeTracking || isDragging || activeMode !== 'idle' || isSpeaking || isWakingUp) {
      setCursorOffset({ tiltDeg: 0, offsetPx: 0 });
      return;
    }

    let rafId: number | null = null;
    const handlePointerMove = (e: PointerEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const tiltDeg = Math.max(-4.5, Math.min(4.5, dx / 90));
        const offsetPx = Math.max(-3, Math.min(3, dy / 110));
        setCursorOffset({ tiltDeg, offsetPx });
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [enableEyeTracking, isDragging, activeMode, isSpeaking, isWakingUp]);

  // Pointer down handler: 100% Code Squash & Stretch
  const handlePointerDown = (e: React.PointerEvent | React.MouseEvent) => {
    // Nếu đang ngủ gật: Chạm làm vỡ bong bóng, đánh thức mascot!
    if (activeMode === 'afk_sleep' || activeMode === 'sleepy') {
      e.stopPropagation();
      setIsSleepBubblePopped(true);
      playSound('pop');
      setIsWakingUp(true);
      setActiveParticle('😲');
      setTransformStyle('scale(1.22, 0.82) translateY(-14px) rotate(-4deg)');

      setTimeout(() => {
        setTransformStyle('scale(0.94, 1.1) translateY(-4px) rotate(3deg)');
        setTimeout(() => {
          setTransformStyle('scale(1, 1) translateY(0px) rotate(0deg)');
          setIsWakingUp(false);
          setIsSleepBubblePopped(false);
          setActiveParticle('✨');
          setActiveMode('idle');
          if (onWakeUp) onWakeUp();
        }, 300);
      }, 250);
      return;
    }

    // Tương tác chạm (Tap/Tickle): Khi User chạm vào mascot, lấy frame tĩnh [Laugh]. Dùng code Scale ép trục Y xuống 80% và phóng trục X lên 110%, sau đó nảy (ElasticOut) về 100%.
    setActiveMode('laugh');
    setIsBoingSpring(true);
    playSound('tickle');
    setActiveParticle('😆');
    setTransformStyle('scale(1.1, 0.8) translateY(6px)');
    setTimeout(() => {
      setTransformStyle('scale(0.94, 1.14) translateY(-6px)');
      setTimeout(() => {
        setTransformStyle('scale(1, 1) translateY(0px)');
        setIsBoingSpring(false);
        setActiveParticle(null);
        setActiveMode('idle');
      }, 320);
    }, 150);
  };

  // Lấy ảnh hiển thị hiện tại theo 8 FPS frame index
  const currentAssetSrc = isWakingUp
    ? (frames.surprised || frames.happy)
    : (currentSpriteDef.frames[spriteFrameIdx] || frames.happy);

  const baseTilt = enableEyeTracking && cursorOffset.tiltDeg !== 0 && activeMode === 'idle' && !isDragging
    ? `${transformStyle} rotate(${cursorOffset.tiltDeg}deg) translateY(${cursorOffset.offsetPx}px)`
    : transformStyle;

  const effectiveTransform = typeof customShoulderAngle === 'number'
    ? `${baseTilt} rotate(${customShoulderAngle}deg)`
    : baseTilt;

  const armAnimClass = activeMode === 'idle'
    ? currentEffectiveArmGesture === 'wave'
      ? 'animate-arm-wave'
      : currentEffectiveArmGesture === 'point'
      ? 'animate-arm-point'
      : currentEffectiveArmGesture === 'thumbs_up'
      ? 'animate-arm-thumbsup'
      : ''
    : '';

  const sizeDimensions = {
    sm: 'w-16 h-20',
    md: 'w-24 sm:w-28 h-28 sm:h-32',
    lg: 'w-32 sm:w-36 h-36 sm:h-42',
    xl: 'w-44 sm:w-48 h-48 sm:h-54',
  };

  const isRunMode = activeMode === 'run' || activeMode === 'map_sprint';
  const isStreakMode = activeMode === 'streak_fever';
  const isPrepMode = activeMode === 'prep_challenge';
  const isSleepMode = (activeMode === 'afk_sleep' || activeMode === 'sleepy') && !isWakingUp;

  return (
    <div 
      ref={containerRef}
      onClick={onTap}
      onPointerDown={handlePointerDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex flex-col items-center justify-center select-none cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95 ${sizeDimensions[size]} ${className}`}
      title="Bấm vào để tương tác với Viko!"
    >
      {/* 8 FPS & PING-PONG REALTIME METRIC BADGE (HUD) */}
      {showFpsBadge && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-slate-900/85 backdrop-blur-xs text-white px-2 py-0.5 rounded-full text-[8.5px] font-black border border-cyan-400/50 shadow-md whitespace-nowrap z-40 pointer-events-none">
          <Activity className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
          <span>{currentFps} FPS</span>
          <span className="text-slate-400">•</span>
          <span className="text-amber-300">
            {currentSpriteDef.isPingPong ? 'Ping-Pong ⮂' : 'Loop ↻'}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-emerald-300">
            F{spriteFrameIdx + 1}/{currentSpriteDef.frames.length}
          </span>
        </div>
      )}

      {/* Dynamic 3D Contact Shadow */}
      {showShadow && (
        <div 
          className="absolute -bottom-1 w-[65%] h-2.5 bg-slate-900/25 rounded-full blur-[2px] pointer-events-none transition-transform duration-200"
          style={{
            transform: effectiveTransform.includes('translateY(-') 
              ? 'scale(0.7) opacity(0.5)' 
              : effectiveTransform.includes('translateY(6px') || effectiveTransform.includes('translateY(5px')
              ? 'scale(1.15) opacity(1)'
              : 'scale(1) opacity(0.85)'
          }}
        />
      )}

      {/* Radiant Aura Glow */}
      {(isStreakMode || isPrepMode) && (
        <div 
          className="absolute inset-0 rounded-full blur-md pointer-events-none transition-all duration-300"
          style={{
            background: isStreakMode 
              ? 'radial-gradient(circle, rgba(250,204,21,0.5) 0%, rgba(14,165,233,0.35) 60%, transparent 80%)'
              : 'radial-gradient(circle, rgba(239,68,68,0.4) 0%, rgba(249,115,22,0.3) 60%, transparent 80%)',
            animation: 'mineralAuraPulse 1.6s ease-in-out infinite',
            transform: 'scale(1.35)'
          }}
        />
      )}

      {/* Sủi bọt khoáng li ti */}
      {isStreakMode && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 flex items-center justify-center">
          <span className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-cyan-200/90 shadow-[0_0_6px_rgba(56,189,248,0.8)] animate-mineral-bubble" style={{ animationDelay: '0s' }} />
          <span className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-amber-200/90 shadow-[0_0_6px_rgba(250,204,21,0.8)] animate-mineral-bubble" style={{ animationDelay: '0.35s' }} />
          <span className="absolute bottom-2 left-1/2 w-2 h-2 rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.9)] animate-mineral-bubble" style={{ animationDelay: '0.7s' }} />
        </div>
      )}

      {/* VỆT BÓNG MỜ (GHOST TRAIL AFTERIMAGES) - THỦ THUẬT "ĂN GIAN" TỐC ĐỘ 3 FRAMES */}
      {isRunMode && (
        <>
          <img
            src={currentAssetSrc}
            alt="Ghost trail 1"
            className="absolute inset-0 w-full h-full object-contain ghost-trail-afterimage-1"
          />
          <img
            src={currentAssetSrc}
            alt="Ghost trail 2"
            className="absolute inset-0 w-full h-full object-contain ghost-trail-afterimage-2"
          />
          <div className="absolute -bottom-1 -left-4 pointer-events-none flex gap-1 z-0">
            <span className="text-sm animate-ping opacity-80">💦</span>
          </div>
        </>
      )}

      {/* Stable 3D Mascot Image with 8 FPS Stepped Tweening, Arm Rigging & Shake Effect */}
      <img
        src={currentAssetSrc}
        alt="Viko Mascot 3D"
        className={`w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,159,227,0.25)] pointer-events-none ${armAnimClass} ${
          isShakeActive ? 'animate-mascot-sad-shake' : ''
        } ${
          activeMode === 'ponder' || activeMode === 'map_hesitate' ? 'animate-mascot-ponder' : ''
        } ${isBoingSpring ? 'animate-mascot-tap-elastic' : ''}`}
        style={{
          transform: effectiveTransform,
          transition: isBoingSpring || isShakeActive || activeMode === 'ponder' || activeMode === 'map_hesitate' 
            ? 'none' 
            : `transform ${Math.round(1000 / (currentSpriteDef.fps || currentFps))}ms cubic-bezier(0.2, 0.8, 0.4, 1)`,
          willChange: 'transform',
        }}
      />

      {/* 🦾 Điểm sáng lan tỏa ở đầu ngón tay khi chỉ bài học (Fingertip Guidance Ripple) */}
      {currentEffectiveArmGesture === 'point' && activeMode === 'idle' && (
        <div className="absolute top-[48%] right-[4%] pointer-events-none z-30 flex items-center justify-center">
          <span className="w-5 h-5 rounded-full bg-cyan-400/80 animate-fingertip-ripple absolute" />
          <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#00c0f9] relative" />
          <span className="text-[11px] absolute -top-5 -right-2 animate-bounce">✨</span>
        </div>
      )}

      {/* 🦾 Bong bóng chào thân thiện khi rê chuột (Hover Friendly Greeting) */}
      {isHovered && activeMode === 'idle' && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-2.5 py-0.5 rounded-full text-[9px] font-black shadow-md border border-white/60 animate-bounce pointer-events-none whitespace-nowrap z-30">
          <span>👋 Chào bạn, học thôi!</span>
        </div>
      )}

      {/* 🦾 Vòng tròn tâm khớp vai kiểm tra cử chỉ (Shoulder Joint Socket Overlay) */}
      {showArmRigOverlay && (
        <div className="absolute top-[48%] right-[16%] -translate-y-1/2 pointer-events-none z-40 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-dashed border-amber-400 bg-amber-400/20 animate-spin" />
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-black text-amber-900 bg-amber-100 border border-amber-300 px-1 py-0.2 rounded-xs whitespace-nowrap shadow-xs">
            Khớp vai: {customShoulderAngle || 0}°
          </span>
        </div>
      )}

      {/* Bong bóng nước ngủ phập phồng ở mũi & nổ POP */}
      {isSleepMode && (
        <div 
          onClick={handlePointerDown}
          className="absolute top-7 right-4 z-20 cursor-pointer pointer-events-auto"
          title="Chạm vào để làm vỡ bong bóng đánh thức Viko!"
        >
          {isSleepBubblePopped ? (
            <span className="text-lg animate-ping text-sky-400">💥</span>
          ) : (
            <div className="w-5 h-5 rounded-full bg-sky-300/60 border border-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7)] backdrop-blur-2xs animate-sleep-bubble flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90 absolute top-0.5 right-1" />
            </div>
          )}
        </div>
      )}

      {/* Tung tim bay lượn sóng */}
      {isStreakMode && (
        <div className="absolute -top-6 -right-3 pointer-events-none z-30">
          <span className="text-2xl animate-heart-burst inline-block">💖</span>
        </div>
      )}

      {/* Floating Particle / Reaction Badge */}
      {activeParticle && !isStreakMode && (
        <span className="absolute -top-3 -right-2 text-xl animate-bounce pointer-events-none filter drop-shadow-md z-30">
          {activeParticle}
        </span>
      )}

      {/* Dynamic Motivational Context Bubble */}
      {activeMode === 'wrong_encourage' && wrongPhase === 'encourage' && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-2.5 py-0.5 rounded-full text-[9.5px] font-black shadow-lg border border-white/50 animate-bounce pointer-events-none whitespace-nowrap z-30">
          <span>💪 Cố lên, thử lại nào!</span>
        </div>
      )}

      {activeMode === 'prep_challenge' && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-amber-600 text-white px-2.5 py-0.5 rounded-full text-[9.5px] font-black shadow-lg border border-white/50 animate-pulse pointer-events-none whitespace-nowrap z-30">
          <span>🔥 Quyết tâm 100%!</span>
        </div>
      )}

      {activeMode === 'afk_drink_vikoda' && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-2 py-0.5 rounded-full text-[9px] font-black shadow-md border border-white/50 pointer-events-none whitespace-nowrap z-30 animate-in fade-in">
          <span>💧 +100% Khỏe Khoắn!</span>
        </div>
      )}

      {/* Speaking Soundwaves Visualizer */}
      {isSpeaking && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-cyan-600/90 text-white px-2 py-0.5 rounded-full text-[9px] font-black shadow-md border border-white/40 animate-pulse pointer-events-none whitespace-nowrap z-30">
          <Volume2 className="w-2.5 h-2.5" />
          <span>Speaking...</span>
        </div>
      )}
    </div>
  );
};
