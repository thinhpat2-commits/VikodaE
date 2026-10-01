import React from 'react';

/**
 * VIKODA MASCOT - "VIKO"
 * A charming, plump, glossy mineral water droplet mascot from the 1957 Đảnh Thạnh spring.
 * Supports expressive emotional states: waving, dancing, scratching head, thinking, celebrate, etc.
 */
export type MascotMood = 
  | 'happy' 
  | 'thinking' 
  | 'proud' 
  | 'zen' 
  | 'cheering' 
  | 'celebrate'
  | 'waving'
  | 'dancing'
  | 'scratching_head';

export interface VikoMascotProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mood?: MascotMood;
}

export const VikoMascot: React.FC<VikoMascotProps> = ({
  className = '',
  size = 'md',
  mood = 'happy'
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-visible"
      >
        <defs>
          {/* Main 3D Droplet Gradient */}
          <linearGradient id="viko_body" x1="20" y1="20" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.45" stopColor="#009FE3" />
            <stop offset="0.85" stopColor="#0072CE" />
            <stop offset="1" stopColor="#005A9C" />
          </linearGradient>

          {/* 3D Bottom Bevel Shadow */}
          <linearGradient id="viko_bevel" x1="60" y1="90" x2="60" y2="125" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00355E" stopOpacity="0" />
            <stop offset="1" stopColor="#002240" stopOpacity="0.65" />
          </linearGradient>

          {/* Glossy Curved Highlight */}
          <linearGradient id="viko_highlight" x1="40" y1="25" x2="35" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="0.6" stopColor="#FFFFFF" stopOpacity="0.25" />
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

        {/* ================= MOOD SPECIFIC DETAILS ================= */}
        {mood === 'waving' ? (
          // 1. WAVING: Cheerful face + One little hand waving in the air!
          <>
            {/* Eyes */}
            <ellipse cx="46" cy="72" rx="7.5" ry="9" fill="#002B4D" />
            <circle cx="44" cy="69" r="3.2" fill="#FFFFFF" />
            <circle cx="49" cy="74" r="1.4" fill="#FFFFFF" />

            <ellipse cx="74" cy="72" rx="7.5" ry="9" fill="#002B4D" />
            <circle cx="72" cy="69" r="3.2" fill="#FFFFFF" />
            <circle cx="77" cy="74" r="1.4" fill="#FFFFFF" />

            {/* Happy Smile */}
            <path d="M51 84C51 91 69 91 69 84" stroke="#002B4D" strokeWidth="3" strokeLinecap="round" />

            {/* Left resting hand */}
            <circle cx="22" cy="84" r="5" fill="#38BDF8" stroke="#0072CE" strokeWidth="1.5" />

            {/* Right hand waving high with movement trail */}
            <g className="animate-bounce origin-bottom">
              <circle cx="104" cy="56" r="6" fill="#38BDF8" stroke="#0072CE" strokeWidth="1.8" />
              {/* Motion wave ripples */}
              <path d="M112 50C114 53 114 58 112 61" stroke="#009FE3" strokeWidth="2" strokeLinecap="round" />
              <path d="M116 48C119 52 119 60 116 64" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </>
        ) : mood === 'dancing' || mood === 'celebrate' ? (
          // 2. DANCING / COMBO STREAK: Joyful closed happy eyes, big open mouth, arms up & musical sparkle notes!
          <>
            <path d="M38 73C42 67 49 67 53 73" stroke="#002B4D" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M67 73C71 67 78 67 82 73" stroke="#002B4D" strokeWidth="3.5" strokeLinecap="round" />
            
            {/* Wide happy open mouth */}
            <path d="M48 83C48 94 72 94 72 83C72 81 48 81 48 83Z" fill="#002B4D" />
            <path d="M52 86C52 93 68 93 68 86C62 88 58 88 52 86Z" fill="#FF6B8B" />

            {/* Both hands raised in victory */}
            <circle cx="16" cy="62" r="5.5" fill="#38BDF8" stroke="#0072CE" strokeWidth="1.5" />
            <circle cx="104" cy="62" r="5.5" fill="#38BDF8" stroke="#0072CE" strokeWidth="1.5" />

            {/* Musical notes & sparkles floating */}
            <text x="10" y="44" fontSize="13" fill="#EAB308" className="animate-pulse">✨</text>
            <text x="96" y="40" fontSize="13" fill="#EAB308" className="animate-pulse">🎵</text>
            <text x="56" y="8" fontSize="14" fill="#F59E0B">👑</text>
          </>
        ) : mood === 'scratching_head' || mood === 'thinking' ? (
          // 3. SCRATCHING HEAD / THINKING (WHEN WRONG): Puzzled eyes, hand on head, sweatdrop 💧
          <>
            {/* Puzzled looking up eyes */}
            <ellipse cx="46" cy="70" rx="6" ry="7.5" fill="#002B4D" />
            <circle cx="48" cy="67" r="2.5" fill="#FFFFFF" />
            <ellipse cx="74" cy="70" rx="6" ry="7.5" fill="#002B4D" />
            <circle cx="76" cy="67" r="2.5" fill="#FFFFFF" />

            {/* Small wavy puzzled mouth */}
            <path d="M54 86C57 88 60 84 63 86C66 88 68 85 70 86" stroke="#002B4D" strokeWidth="2.5" strokeLinecap="round" />

            {/* Hand raised scratching side of head */}
            <circle cx="86" cy="50" r="5.5" fill="#38BDF8" stroke="#005A9C" strokeWidth="1.5" />
            {/* Scratch marks */}
            <path d="M90 40L94 36" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M93 45L98 43" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />

            {/* Cute Anime Blue Sweat Drop 💧 */}
            <path
              d="M32 46C32 46 27 54 27 58C27 61 29 63 32 63C35 63 37 61 37 58C37 54 32 46 32 46Z"
              fill="#38BDF8"
              stroke="#0284C7"
              strokeWidth="1"
            />
          </>
        ) : mood === 'zen' ? (
          // Zen: Peaceful closed eyes
          <>
            <path d="M40 73C44 70 48 70 52 73" stroke="#00355E" strokeWidth="3" strokeLinecap="round" />
            <path d="M68 73C72 70 76 70 80 73" stroke="#00355E" strokeWidth="3" strokeLinecap="round" />
            <path d="M55 83C58 86 62 86 65 83" stroke="#00355E" strokeWidth="2.5" strokeLinecap="round" />
          </>
        ) : mood === 'proud' ? (
          // Proud: Champion medal
          <>
            <path d="M38 74C42 68 49 68 53 74" stroke="#002B4D" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M67 74C71 68 78 68 82 74" stroke="#002B4D" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M51 84C51 90 69 90 69 84" stroke="#002B4D" strokeWidth="3" strokeLinecap="round" />
            <circle cx="60" cy="106" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
            <text x="60" y="110" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#78350F">1</text>
          </>
        ) : (
          // Default Cheering / Happy: Warm big glossy eyes
          <>
            <ellipse cx="46" cy="72" rx="7.5" ry="9" fill="#002B4D" />
            <circle cx="44" cy="69" r="3.2" fill="#FFFFFF" />
            <circle cx="49" cy="74" r="1.4" fill="#FFFFFF" />

            <ellipse cx="74" cy="72" rx="7.5" ry="9" fill="#002B4D" />
            <circle cx="72" cy="69" r="3.2" fill="#FFFFFF" />
            <circle cx="77" cy="74" r="1.4" fill="#FFFFFF" />

            <path d="M51 84C51 90 69 90 69 84" stroke="#002B4D" strokeWidth="3" strokeLinecap="round" />

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
      <circle cx="50" cy="52" r="44" fill="#004D8C" />
      <circle cx="50" cy="48" r="44" fill="#009FE3" />
      <circle cx="50" cy="48" r="38" fill="#FFFFFF" />
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
        <span className="text-[#009FE3] text-[22px] font-black tracking-tight">Viko</span>
        <span className="text-[#005A9C] text-[22px] font-black tracking-tight">da</span>
        <span className="text-[#FF9600] text-[23px] font-black tracking-tight ml-0.5">E</span>
      </div>
      {showTagline && (
        <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase -mt-0.5">
          Khoáng Kiềm Tự Nhiên pH 9.0
        </span>
      )}
    </div>
  );
};

export const HeaderBrandLogo: React.FC<{ className?: string }> = ({ className = 'h-8' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <VikodaWordmark />
    </div>
  );
};

export const BalancedStonesMascot = VikoMascot;
