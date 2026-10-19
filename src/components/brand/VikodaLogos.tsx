import React from 'react';

/**
 * VIKODA 3D ASSETS SYSTEM
 * Official assets provided by user & sliced into high-res transparent PNGs.
 */
const RAW_VIKODA_ASSETS = {
  mascot3D: '/assets/viko_mascot_3d.png',
  mascotHappy: '/assets/mascot_happy.png',
  mascotWave: '/assets/mascot_wave.png',
  mascotJumpCheer: '/assets/mascot_jump_cheer.png',
  mascotSadCry: '/assets/mascot_sad_cry.png',
  mascotSurprised: '/assets/mascot_surprised.png',
  mascotThinking: '/assets/mascot_thinking.png',
  mascotIdea: '/assets/mascot_idea.png',
  mascotFireBattle: '/assets/mascot_fire_battle.png',
  mascotBottleHug: '/assets/mascot_bottle_hug.png',
  mascotBusinessSuit: '/assets/mascot_business_suit.png',
  mascotStudentBook: '/assets/mascot_student_book.png',
  mascotTrophyWinner: '/assets/mascot_trophy_winner.png',
  mascotCoolShades: '/assets/mascot_cool_shades.png',
  mascotSleepy: '/assets/mascot_sleepy.png',
  mascotDancing: '/assets/mascot_dancing.png',
  mascotMicrophone: '/assets/mascot_microphone.png',
  streakFire: '/assets/streak_fire_3d.png',
  heartRed: '/assets/heart_red_3d.png',
  heartPurple: '/assets/heart_purple_3d.png',
  gemCyan: '/assets/gem_cyan_3d.png',
  gemEmerald: '/assets/gem_emerald_3d.png',
  chestClosed: '/assets/chest_closed_3d.png',
  chestOpen: '/assets/chest_open_3d.png',
  logo3D: '/assets/vikoda_learn_english_logo.png',
  nodeStarGold: '/assets/node_star_gold_3d.png',
  nodeWaterCyan: '/assets/node_water_cyan_3d.png',
  nodeStoneWater: '/assets/node_stone_water_3d.png?v=2',
  nodeStoneLock: '/assets/node_stone_lock_3d.png',
  nodeCrown: '/assets/node_crown_boss_3d.png',
  trophyDanhThanh: '/assets/trophy_danhthanh_3d.png',
  skillSpeaking: '/assets/skill_speaking_3d.png',
  skillListening: '/assets/skill_listening_3d.png',
  skillReading: '/assets/skill_reading_3d.png',
  skillWriting: '/assets/skill_writing_3d.png',
  vikodaWordmark: '/assets/vikoda_wordmark_clean.png',
  danhThanhEmblem: '/assets/danhthanh_emblem_circle.png',
  danhThanhWordmark: '/assets/danhthanh_wordmark_clean.png',
  vikodaBottle: '/assets/vikoda_bottle_3d.png',
  badgeStreak7: '/assets/badge_streak_7.png',
  badgePerfect: '/assets/badge_perfect_score.png',
  effectComboFire: '/assets/effect_combo_fire_3d.png',
  effectStardustBurst: '/assets/effect_stardust_burst_3d.png',
  effectWaterSplash: '/assets/effect_water_splash_3d.png',
  effectLevelUpAura: '/assets/effect_level_up_aura_3d.png',
  effectShieldProtect: '/assets/effect_shield_protect_3d.png',
  effectConfettiCelebration: '/assets/effect_confetti_celebration_3d.png',
  effectLightningSpark: '/assets/effect_lightning_spark_3d.png',
  // Living Map Companion Automatic Animation Frames
  mascotAnimIdle: '/assets/mascot_anim_idle.png',
  mascotAnimWave: '/assets/mascot_anim_wave.png',
  mascotAnimGuide: '/assets/mascot_anim_guide.png',
  mascotAnimThumbsUp: '/assets/mascot_anim_thumbsup.png',
  mascotAnimBounce: '/assets/mascot_anim_bounce.png',
  mascotAnimListen: '/assets/mascot_anim_listen.png',
  mascotAnimSleepy: '/assets/mascot_anim_sleepy.png',
  // Bộ Sprite Tối Giản (Minimalist Sprite Sheet 8 FPS & Code Tweening)
  mascotIdle1: '/assets/mascot_idle_1.png',
  mascotIdle2: '/assets/mascot_idle_2.png',
  mascotIdle3: '/assets/mascot_idle_3.png',
  mascotWalk1: '/assets/mascot_walk_1.png',
  mascotWalk2: '/assets/mascot_walk_2.png',
  mascotWalk3: '/assets/mascot_walk_3.png',
  mascotWalk4: '/assets/mascot_walk_4.png',
  mascotPonder1: '/assets/mascot_ponder_1.png',
  mascotSad1: '/assets/mascot_sad_1.png',
  mascotLaugh: '/assets/mascot_laugh.png',
};

export const STORAGE_CUSTOM_ASSET_PREFIX = 'vikoda_custom_asset_';
export const STORAGE_ASSET_VERSION = 'vikoda_asset_version';

import { 
  saveCustomAssetOffline, 
  loadAllCustomAssetsOffline, 
  removeCustomAssetOffline 
} from '../../services/offlineStorage';

// In-memory cache for instant 0ms preview without hitting browser localStorage 5MB quota
const inMemoryCustomAssets = new Map<string, string>();

/** Default fallback map cho bộ Sprite tối giản nếu chưa tạo file tùy biến */
const DEFAULT_FALLBACK_MAP: Record<string, string> = {
  'mascot_idle_1.png': '/assets/mascot_anim_idle.png',
  'mascot_idle_2.png': '/assets/mascot_happy.png',
  'mascot_idle_3.png': '/assets/mascot_anim_sleepy.png',
  'mascot_walk_1.png': '/assets/mascot_anim_guide.png',
  'mascot_walk_2.png': '/assets/mascot_happy.png',
  'mascot_walk_3.png': '/assets/mascot_anim_wave.png',
  'mascot_walk_4.png': '/assets/mascot_anim_bounce.png',
  'mascot_ponder_1.png': '/assets/mascot_pondering.png',
  'mascot_sad_1.png': '/assets/mascot_sad_cry.png',
  'mascot_laugh.png': '/assets/mascot_jump_cheer.png',
};

// Asynchronously load all custom assets from IndexedDB on startup (Survives refreshes & updates)
if (typeof window !== 'undefined') {
  loadAllCustomAssetsOffline().then((storedMap) => {
    let hasItems = false;
    Object.entries(storedMap).forEach(([fn, dataUrl]) => {
      if (fn && dataUrl) {
        inMemoryCustomAssets.set(fn, dataUrl);
        hasItems = true;
      }
    });
    if (hasItems) {
      window.dispatchEvent(new CustomEvent('vikoda_assets_updated'));
    }
  }).catch(() => {});
}

/**
 * RE-RESOLVE ASSET PATH WITH LOCAL CUSTOM OVERRIDES & CACHE BUSTING
 */
export const getAssetSrc = (defaultPath: string): string => {
  if (!defaultPath || typeof defaultPath !== 'string') return '';
  if (typeof window === 'undefined') return defaultPath;
  const filename = defaultPath.split('/').pop()?.split('?')[0] || '';

  // 1. In-memory map (instant 0ms response, zero quota consumption)
  if (inMemoryCustomAssets.has(filename)) {
    return inMemoryCustomAssets.get(filename)!;
  }

  // 2. LocalStorage override or disk cache-buster
  try {
    const custom = localStorage.getItem(STORAGE_CUSTOM_ASSET_PREFIX + filename);
    if (custom) return custom;
    const v = localStorage.getItem(STORAGE_ASSET_VERSION);
    if (v) return `${defaultPath}?v=${v}`;
  } catch (e) {}

  // 3. Fallback map nếu file chưa được vẽ
  if (DEFAULT_FALLBACK_MAP[filename]) {
    return DEFAULT_FALLBACK_MAP[filename];
  }

  return defaultPath;
};

/**
 * DYNAMIC PROXY: Automatically returns the latest custom or cache-busted asset URL
 */
export const VIKODA_ASSETS: typeof RAW_VIKODA_ASSETS = new Proxy(RAW_VIKODA_ASSETS, {
  get(target, prop) {
    if (typeof prop !== 'string') {
      return (target as any)[prop];
    }
    if (prop in target) {
      const val = (target as Record<string, string>)[prop];
      return typeof val === 'string' ? getAssetSrc(val) : val;
    }
    return (target as any)[prop];
  }
});

/**
 * REACT HOOK: Re-renders component instantly whenever Studio updates or pastes an asset
 */
export const useVikodaAssetSync = () => {
  const [, setTick] = React.useState(0);
  React.useEffect(() => {
    const handleUpdate = () => setTick((t) => t + 1);
    window.addEventListener('vikoda_assets_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('vikoda_assets_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);
};

export const setCustomAsset = (filename: string, src: string) => {
  if (typeof window !== 'undefined') {
    // 1. Store in memory for instant 0ms rendering
    inMemoryCustomAssets.set(filename, src);

    // 2. Persist in IndexedDB (survives app updates, page reloads, browser restarts)
    saveCustomAssetOffline(filename, src).catch(() => {});

    // 3. Store lightweight URL in localStorage for instant cache busting
    try {
      const lightweightUrl = `/assets/${filename}?t=${Date.now()}`;
      localStorage.setItem(STORAGE_CUSTOM_ASSET_PREFIX + filename, lightweightUrl);
      localStorage.setItem(STORAGE_ASSET_VERSION, Date.now().toString());
    } catch (err) {}

    window.dispatchEvent(new CustomEvent('vikoda_assets_updated', { detail: { filename, src } }));
  }
};

export const removeCustomAsset = (filename: string) => {
  if (typeof window !== 'undefined') {
    inMemoryCustomAssets.delete(filename);
    removeCustomAssetOffline(filename).catch(() => {});
    try {
      localStorage.removeItem(STORAGE_CUSTOM_ASSET_PREFIX + filename);
      localStorage.setItem(STORAGE_ASSET_VERSION, Date.now().toString());
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('vikoda_assets_updated', { detail: { filename } }));
  }
};

/**
 * Get all active custom assets (for backup or status reporting)
 */
export const getAllCustomAssets = (): Record<string, string> => {
  const result: Record<string, string> = {};
  inMemoryCustomAssets.forEach((val, key) => {
    result[key] = val;
  });
  return result;
};

/**
 * Restore all custom assets from an exported backup
 */
export const restoreAllCustomAssets = async (assets: Record<string, string>): Promise<number> => {
  let count = 0;
  for (const [fn, dataUrl] of Object.entries(assets)) {
    if (fn && dataUrl) {
      setCustomAsset(fn, dataUrl);
      count++;
    }
  }
  return count;
};


export type MascotMood = 
  | 'happy' 
  | 'thinking' 
  | 'proud' 
  | 'zen' 
  | 'cheering' 
  | 'celebrate'
  | 'waving'
  | 'dancing'
  | 'scratching_head'
  | 'sad'
  | 'crying'
  | 'surprised'
  | 'idea'
  | 'fire_battle'
  | 'bottle_hug'
  | 'business'
  | 'student'
  | 'trophy'
  | 'cool'
  | 'sleepy'
  | 'microphone'
  | 'singing'
  // 4 NHÓM MỚI:
  | 'wrong_encourage'
  | 'prep_challenge'
  | 'streak_fever'
  | 'afk_sleep'
  | 'afk_drink_vikoda'
  | 'afk_music_vibe'
  | 'map_sprint'
  | 'map_hesitate'
  | 'ponder'
  | 'laugh';

import { playSound } from '../../services/soundEffects';

export interface VikoMascotProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  mood?: MascotMood;
  speechText?: string;
  interactive?: boolean;
}

const VIKO_CHEER_QUOTES = [
  'Cùng Viko luyện 5 phút tiếng Anh nhé! 💧',
  'Tuyệt vời! Bạn đang làm rất tốt đấy! 🌟',
  'Vikoda pH 9.0 sẵn sàng tiếp năng lượng! ⚡',
  'Đảnh Thạnh 1957 - Tự hào vươn tầm! 🏆',
  'Giữ vững chuỗi Streak hôm nay nhé! 🔥'
];

/**
 * 3D VIKO MASCOT - Giọt Nước Khoáng Kiềm Duolingo-Grade
 * Chuyển động nhịp thở bồng bềnh mượt mà, bóng đổ 3D sống động, tương tác chạm nảy vui nhộn.
 */
export const VikoMascot: React.FC<VikoMascotProps> = ({
  className = '',
  size = 'md',
  mood = 'happy',
  speechText,
  interactive = true,
}) => {
  useVikodaAssetSync();
  const [isTapped, setIsTapped] = React.useState(false);
  const [quoteIndex, setQuoteIndex] = React.useState(0);
  const [showInteractiveQuote, setShowInteractiveQuote] = React.useState(false);

  // Upgraded prominent Duolingo-style size scale
  const sizeMap = {
    xs: 'w-10 h-12',
    sm: 'w-16 h-20',
    md: 'w-28 h-34',
    lg: 'w-36 h-44',
    xl: 'w-48 h-56',
    '2xl': 'w-60 h-68'
  };

  const getMascotSrc = (m: MascotMood) => {
    switch (m) {
      case 'laugh':
        return getAssetSrc(VIKODA_ASSETS.mascotLaugh || VIKODA_ASSETS.mascotJumpCheer);
      case 'streak_fever':
      case 'map_sprint':
      case 'dancing':
        return getAssetSrc(VIKODA_ASSETS.mascotDancing || VIKODA_ASSETS.mascotJumpCheer);
      case 'prep_challenge':
      case 'cool':
        return getAssetSrc(VIKODA_ASSETS.mascotCoolShades || VIKODA_ASSETS.mascot3D);
      case 'afk_drink_vikoda':
      case 'bottle_hug':
        return getAssetSrc(VIKODA_ASSETS.mascotBottleHug || VIKODA_ASSETS.mascotHappy);
      case 'afk_music_vibe':
      case 'microphone':
      case 'singing':
        return getAssetSrc(VIKODA_ASSETS.mascotMicrophone || VIKODA_ASSETS.mascot3D);
      case 'celebrate':
      case 'cheering':
      case 'proud':
        return getAssetSrc(VIKODA_ASSETS.mascotJumpCheer);
      case 'wrong_encourage':
      case 'sad':
      case 'crying':
        return getAssetSrc(VIKODA_ASSETS.mascotSad1 || VIKODA_ASSETS.mascotSadCry);
      case 'surprised':
        return getAssetSrc(VIKODA_ASSETS.mascotSurprised);
      case 'ponder':
      case 'map_hesitate':
      case 'thinking':
      case 'scratching_head':
        return getAssetSrc(VIKODA_ASSETS.mascotPonder1 || VIKODA_ASSETS.mascotThinking);
      case 'scratching_head':
        return getAssetSrc(VIKODA_ASSETS.mascotThinking);
      case 'idea':
        return getAssetSrc(VIKODA_ASSETS.mascotIdea);
      case 'fire_battle':
        return getAssetSrc(VIKODA_ASSETS.mascotFireBattle || VIKODA_ASSETS.mascotJumpCheer);
      case 'business':
        return getAssetSrc(VIKODA_ASSETS.mascotBusinessSuit || VIKODA_ASSETS.mascot3D);
      case 'student':
        return getAssetSrc(VIKODA_ASSETS.mascotStudentBook || VIKODA_ASSETS.mascotIdea);
      case 'trophy':
        return getAssetSrc(VIKODA_ASSETS.mascotTrophyWinner || VIKODA_ASSETS.mascotJumpCheer);
      case 'afk_sleep':
      case 'sleepy':
        return getAssetSrc(VIKODA_ASSETS.mascotSleepy || VIKODA_ASSETS.mascotSadCry);
      case 'waving':
        return getAssetSrc(VIKODA_ASSETS.mascot3D || VIKODA_ASSETS.mascotWave);
      case 'happy':
      default:
        return getAssetSrc(VIKODA_ASSETS.mascot3D || VIKODA_ASSETS.mascotHappy);
    }
  };

  const isCelebration = mood === 'celebrate' || mood === 'dancing' || mood === 'cheering' || mood === 'proud' || mood === 'trophy' || mood === 'streak_fever';
  const isThinking = mood === 'thinking' || mood === 'scratching_head' || mood === 'map_hesitate';
  const isSad = mood === 'sad' || mood === 'crying' || mood === 'wrong_encourage';
  const isFierce = mood === 'fire_battle' || mood === 'prep_challenge';
  const isSprint = mood === 'map_sprint';

  const handleMascotClick = () => {
    if (!interactive) return;
    playSound('click');
    setIsTapped(true);
    if (!speechText) {
      setQuoteIndex(prev => (prev + 1) % VIKO_CHEER_QUOTES.length);
      setShowInteractiveQuote(true);
      setTimeout(() => setShowInteractiveQuote(false), 3200);
    }
    setTimeout(() => setIsTapped(false), 450);
  };

  // Determine motion class
  const getMotionClass = () => {
    if (isTapped) return 'scale-115 -translate-y-3 rotate-2 transition-transform duration-200';
    if (isSprint) return 'animate-sprint-dash';
    if (isCelebration) return 'animate-mascot-joy';
    if (isThinking) return 'animate-mascot-ponder';
    if (isSad) return 'animate-mascot-sad';
    return 'animate-mascot-idle';
  };

  const activeSpeech = speechText || (showInteractiveQuote ? VIKO_CHEER_QUOTES[quoteIndex] : null);

  return (
    <div 
      onClick={handleMascotClick}
      className={`relative inline-flex flex-col items-center justify-center select-none ${sizeMap[size]} ${interactive ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Dynamic 3D Contact Shadow underneath feet */}
      <div 
        className={`absolute -bottom-1 w-[68%] h-2.5 bg-slate-900/25 rounded-full blur-[1.5px] pointer-events-none transition-all duration-300 ${
          isCelebration ? 'scale-75 opacity-15' : 'animate-mascot-shadow'
        }`} 
      />

      {/* 3D Rendered Mascot with organic fluid breathing */}
      <img
        src={getMascotSrc(mood)}
        alt="Viko Mascot 3D"
        className={`w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,159,227,0.22)] transition-transform duration-300 hover:scale-105 active:scale-95 ${getMotionClass()}`}
      />

      {/* Dynamic mood particles */}
      {isCelebration && (
        <span className="absolute -top-3 -right-2 text-lg animate-ping pointer-events-none">✨</span>
      )}
      {isThinking && (
        <span className="absolute -top-3 -right-2 text-xs font-black text-amber-500 bg-white border border-amber-200 rounded-full px-1.5 py-0.5 shadow-md pointer-events-none animate-bounce">💡</span>
      )}
      {isSad && (
        <span className="absolute top-1/3 -right-1 text-sm animate-mascot-tear pointer-events-none">💧</span>
      )}
      {isFierce && (
        <span className="absolute -top-3 -right-2 text-base animate-pulse pointer-events-none">🔥</span>
      )}

      {/* Duolingo Speech bubble */}
      {activeSpeech && (
        <div className="absolute left-full ml-3 top-1 z-30 bg-white text-slate-800 text-xs font-extrabold px-3.5 py-2.5 rounded-2xl shadow-xl border-2 border-slate-100 whitespace-nowrap animate-in fade-in slide-in-from-left-2">
          {activeSpeech}
          <div className="absolute top-3.5 -left-2 w-0 h-0 border-t-6 border-t-transparent border-r-8 border-r-white border-b-6 border-b-transparent"></div>
        </div>
      )}
    </div>
  );
};

/**
 * VIKODA OFFICIAL 3D LOGO
 */
export const VikodaWordmark: React.FC<{ 
  className?: string;
  showTagline?: boolean;
}> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src={VIKODA_ASSETS.logo3D}
        alt="Vikoda Học Tiếng Anh"
        className="h-10 sm:h-12 w-auto object-contain drop-shadow-xs"
      />
    </div>
  );
};

export const HeaderBrandLogo: React.FC<{ className?: string; showTagline?: boolean }> = ({ 
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src={VIKODA_ASSETS.logo3D}
        alt="Vikoda Học Tiếng Anh"
        className="h-9 sm:h-11 w-auto object-contain drop-shadow-xs"
      />
    </div>
  );
};

export const CompanyEmblem: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <div className={`shrink-0 select-none inline-flex items-center justify-center rounded-xl overflow-hidden ${className}`}>
      <img src={VIKODA_ASSETS.danhThanhEmblem} alt="Đảnh Thạnh" className="w-full h-full object-contain" />
    </div>
  );
};

export const VikodaOfficialIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => {
  return (
    <div className={`shrink-0 select-none inline-flex items-center justify-center rounded-xl overflow-hidden ${className}`}>
      <img src={VIKODA_ASSETS.danhThanhEmblem} alt="Vikoda" className="w-full h-full object-contain" />
    </div>
  );
};

export const VikodaZenStones: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <div className={`shrink-0 select-none inline-flex items-center justify-center ${className}`}>
      <img src={VIKODA_ASSETS.trophyDanhThanh} alt="Đảnh Thạnh" className="w-full h-full object-contain" />
    </div>
  );
};

export const BalancedStonesMascot = VikoMascot;

