import React from 'react';

/**
 * Duolingo-style Vikoda Brand Assets:
 * 1. "Viko" Mascot: Adorable, energetic, 3D-chunky natural alkaline mineral droplet
 *    - Friendly, expressive, beloved Duolingo mascot aesthetic
 *    - Moods: 'happy' | 'cheering' | 'celebrate' | 'thinking' | 'proud' | 'zen'
 * 2. CompanyEmblem: Clean, iconic Đảnh Thạnh spring fountain circle
 * 3. VikodaWordmark: Bold, friendly, geometric brand typography (viko cyan + da navy)
 * 4. HeaderBrandLogo: Compact, pristine pairing for the navigation bar
 */

export type VikoMood = 'happy' | 'cheering' | 'celebrate' | 'thinking' | 'proud' | 'zen';

export const VikoMascot: React.FC<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mood?: VikoMood;
  className?: string;
}> = ({ size = 'md', mood = 'happy', className = '' }) => {
  const sizePx = {
    xs: 28,
    sm: 40,
    md: 56,
    lg: 80,
    xl: 110,
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none shrink-0 ${className}`}
      style={{ width: sizePx, height: sizePx }}
      aria-label={`Mascot Viko - ${mood}`}
    >
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-transform duration-200"
      >
        <defs>
          {/* Main Body Gradient: Duolingo-grade vibrant Cyan */}
          <linearGradient id="viko_body" x1="20" y1="15" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.45" stopColor="#00A3FF" />
            <stop offset="1" stopColor="#0070D1" />
          </linearGradient>

          {/* 3D Bottom Bevel Shadow for tactile Duolingo toy depth */}
          <linearGradient id="viko_bevel" x1="60" y1="95" x2="60" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#005A9C" stopOpacity="0" />
            <stop offset="1" stopColor="#004A80" stopOpacity="0.55" />
          </linearGradient>

          {/* Highlights */}
          <linearGradient id="viko_highlight" x1="30" y1="25" x2="65" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Belly soft light */}
          <linearGradient id="viko_belly" x1="60" y1="70" x2="60" y2="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BAE6FD" stopOpacity="0.45" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="60" cy="122" rx="36" ry="7" fill="#00355E" fillOpacity="0.18" />

        {/* Main Droplet Body (Plump, friendly curved teardrop) */}
        <path
          d="M60 14C60 14 30 52 22 78C14 102 32 118 60 118C88 118 106 102 98 78C90 52 60 14 60 14Z"
          fill="url(#viko_body)"
        />

        {/* 3D Bevel Base Overlay */}
        <path
          d="M26 88C32 108 45 118 60 118C75 118 88 108 94 88C98 102 88 118 60 118C32 118 22 102 26 88Z"
          fill="url(#viko_bevel)"
        />

        {/* Soft Belly Light */}
        <ellipse cx="60" cy="94" rx="24" ry="16" fill="url(#viko_belly)" />

        {/* Top-Left Gloss Highlight */}
        <path
          d="M60 22C52 34 36 56 32 74C30 82 32 88 32 88C30 76 38 52 56 30C58 27 59 24 60 22Z"
          fill="url(#viko_highlight)"
        />

        {/* Mineral Sparkle Star ✦ on crest */}
        <path
          d="M60 4L62.5 12L70 14.5L62.5 17L60 25L57.5 17L50 14.5L57.5 12L60 4Z"
          fill="#FFF066"
          stroke="#FFFFFF"
          strokeWidth="1"
        />

        {/* Rosy Cheeks */}
        <ellipse cx="36" cy="85" rx="5.5" ry="3.5" fill="#FF6B8B" fillOpacity="0.75" />
        <ellipse cx="84" cy="85" rx="5.5" ry="3.5" fill="#FF6B8B" fillOpacity="0.75" />

        {/* MOOD SPECIFIC DETAILS */}
        {mood === 'zen' ? (
          // Zen / Serene: Peaceful closed curved eyes
          <>
            <path d="M40 73C44 70 48 70 52 73" stroke="#00355E" strokeWidth="3" strokeLinecap="round" />
            <path d="M68 73C72 70 76 70 80 73" stroke="#00355E" strokeWidth="3" strokeLinecap="round" />
            <path d="M55 83C58 86 62 86 65 83" stroke="#00355E" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : mood === 'thinking' ? (
          // Thinking: Eyes looking up to top-right
          <>
            <ellipse cx="46" cy="71" rx="6.5" ry="8" fill="#002B4D" />
            <circle cx="48" cy="68" r="2.8" fill="#FFFFFF" />
            <ellipse cx="74" cy="71" rx="6.5" ry="8" fill="#002B4D" />
            <circle cx="76" cy="68" r="2.8" fill="#FFFFFF" />
            {/* Cute small puzzled 'o' mouth */}
            <ellipse cx="60" cy="86" rx="3.5" ry="4" fill="#002B4D" />
            {/* Hand on cheek */}
            <circle cx="78" cy="88" r="4.5" fill="#38BDF8" stroke="#005A9C" strokeWidth="1" />
          </>
        ) : mood === 'celebrate' || mood === 'proud' ? (
          // Celebrating: Super happy smiling eyes & big open mouth
          <>
            <path d="M38 74C42 68 49 68 53 74" stroke="#002B4D" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M67 74C71 68 78 68 82 74" stroke="#002B4D" strokeWidth="3.5" strokeLinecap="round" />
            {/* Wide happy open mouth with pink tongue */}
            <path
              d="M48 84C48 94 72 94 72 84C72 82 48 82 48 84Z"
              fill="#002B4D"
            />
            <path
              d="M52 87C52 93 68 93 68 87C62 89 58 89 52 87Z"
              fill="#FF6B8B"
            />
            {/* Champion Gold Medal */}
            <circle cx="60" cy="106" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
            <text x="60" y="110" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#78350F">1</text>
          </>
        ) : (
          // Default Happy / Cheering: Big Duolingo-style glossy anime eyes & warm smile
          <>
            {/* Left Eye */}
            <ellipse cx="46" cy="72" rx="7.5" ry="9" fill="#002B4D" />
            <circle cx="44" cy="69" r="3.2" fill="#FFFFFF" />
            <circle cx="49" cy="74" r="1.4" fill="#FFFFFF" />

            {/* Right Eye */}
            <ellipse cx="74" cy="72" rx="7.5" ry="9" fill="#002B4D" />
            <circle cx="72" cy="69" r="3.2" fill="#FFFFFF" />
            <circle cx="77" cy="74" r="1.4" fill="#FFFFFF" />

            {/* Friendly Warm Smile */}
            <path
              d="M51 84C51 90 69 90 69 84"
              stroke="#002B4D"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* If cheering, show little hands */}
            {mood === 'cheering' && (
              <>
                <circle cx="20" cy="74" r="5" fill="#38BDF8" stroke="#0072CE" strokeWidth="1.5" />
                <circle cx="100" cy="74" r="5" fill="#38BDF8" stroke="#0072CE" strokeWidth="1.5" />
              </>
            )}
          </>
        )}
      </svg>
    </div>
  );
};

export const CompanyEmblem: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`shrink-0 select-none ${className}`}
    >
      {/* 3D Circular Bevel */}
      <circle cx="50" cy="52" r="44" fill="#004D8C" />
      <circle cx="50" cy="48" r="44" fill="#009FE3" />
      <circle cx="50" cy="48" r="38" fill="#FFFFFF" />

      {/* Stylized Twin Mineral Fountain Geyser */}
      <path
        d="M32 66C32 46 44 38 50 24C52 36 43 48 43 64C43 70 46 74 50 75C40 75 32 71 32 66Z"
        fill="#005A9C"
      />
      <path
        d="M68 66C68 46 56 38 50 24C48 36 57 48 57 64C57 70 54 74 50 75C60 75 68 71 68 66Z"
        fill="#009FE3"
      />
      <circle cx="50" cy="50" r="5.5" fill="#009FE3" />
      <circle cx="50" cy="22" r="2.5" fill="#38BDF8" />
    </svg>
  );
};

export const VikodaWordmark: React.FC<{ 
  className?: string;
  showTagline?: boolean;
}> = ({ className = 'h-7', showTagline = false }) => {
  return (
    <div className={`inline-flex flex-col justify-center select-none ${className}`}>
      <div className="flex items-center leading-none tracking-tight">
        <span className="text-[#009FE3] text-[22px] font-black tracking-tight">viko</span>
        <span className="text-[#005A9C] text-[22px] font-black tracking-tight">da</span>
      </div>
      {showTagline && (
        <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase -mt-0.5">
          Khoáng Kiềm Tự Nhiên pH 9.0
        </span>
      )}
    </div>
  );
};

/**
 * Duolingo-style Header Brand Lockup:
 * Playful mini Viko Mascot + crisp Vikoda Wordmark
 * Compact, tactile, cheerful!
 */
export const HeaderBrandLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <VikodaWordmark />
    </div>
  );
};

/**
 * Backward compatibility alias for any existing imports of BalancedStonesMascot
 */
export const BalancedStonesMascot = VikoMascot;

