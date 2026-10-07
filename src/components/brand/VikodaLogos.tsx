import React from 'react';

/**
 * VIKODA MASCOT - "VIKO" (Duolingo-Style Minimalist Water Droplet)
 * Flat, clean, friendly, vibrant Cyan mascot with big anime eyes & sweet smile.
 * Strictly NO complex charms, NO emojis, NO chaotic gradients.
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

  const isCelebration = mood === 'celebrate' || mood === 'dancing' || mood === 'cheering' || mood === 'proud';
  const isThinking = mood === 'thinking' || mood === 'scratching_head';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Soft Ground Shadow */}
        <ellipse cx="50" cy="104" rx="28" ry="5" fill="#003B70" fillOpacity="0.12" />

        {/* Droplet Body - Clean, plump, adorable Duolingo style in Vikoda Cyan */}
        <path
          d="M50 8C50 8 20 46 16 68C12 90 28 102 50 102C72 102 88 90 84 68C80 46 50 8 50 8Z"
          fill="#009FE3"
        />

        {/* Soft Tonal Highlight on forehead */}
        <path
          d="M50 16C44 26 30 46 26 62C25 66 26 70 26 70C25 62 31 42 46 22C48 19 49 17 50 16Z"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />

        {/* Cute Blushing Cheeks */}
        <ellipse cx="30" cy="74" rx="5" ry="3.2" fill="#FB7185" fillOpacity="0.8" />
        <ellipse cx="70" cy="74" rx="5" ry="3.2" fill="#FB7185" fillOpacity="0.8" />

        {isCelebration ? (
          // Joyful Eyes (^ _ ^) and Big Happy Smile
          <>
            <path d="M30 63C34 57 41 57 45 63" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M55 63C59 57 66 57 70 63" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M42 73C42 81 58 81 58 73" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            {/* Little raised hands */}
            <circle cx="14" cy="56" r="5" fill="#009FE3" stroke="#007BB0" strokeWidth="1.5" />
            <circle cx="86" cy="56" r="5" fill="#009FE3" stroke="#007BB0" strokeWidth="1.5" />
          </>
        ) : isThinking ? (
          // Puzzled Eyes and Hand on Chin
          <>
            <ellipse cx="38" cy="62" rx="6" ry="7.5" fill="#0F172A" />
            <circle cx="40" cy="59" r="2.2" fill="#FFFFFF" />
            <ellipse cx="62" cy="62" rx="6" ry="7.5" fill="#0F172A" />
            <circle cx="64" cy="59" r="2.2" fill="#FFFFFF" />
            {/* Little thoughtful mouth */}
            <ellipse cx="50" cy="76" rx="2.5" ry="3.5" fill="#0F172A" />
            {/* Hand on cheek */}
            <circle cx="72" cy="72" r="4.5" fill="#009FE3" stroke="#007BB0" strokeWidth="1.5" />
          </>
        ) : (
          // Standard Friendly Waving Face (Duo signature look)
          <>
            {/* Left Eye */}
            <ellipse cx="38" cy="63" rx="6.5" ry="8" fill="#0F172A" />
            <circle cx="36" cy="60" r="2.6" fill="#FFFFFF" />
            <circle cx="40" cy="65" r="1.2" fill="#FFFFFF" />

            {/* Right Eye */}
            <ellipse cx="62" cy="63" rx="6.5" ry="8" fill="#0F172A" />
            <circle cx="60" cy="60" r="2.6" fill="#FFFFFF" />
            <circle cx="64" cy="65" r="1.2" fill="#FFFFFF" />

            {/* Sweet Smile */}
            <path d="M43 74C43 80 57 80 57 74" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

            {/* Waving little hand */}
            <g className="origin-bottom animate-bounce">
              <circle cx="86" cy="54" r="5" fill="#009FE3" stroke="#007BB0" strokeWidth="1.5" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
};

/**
 * VIKODA OFFICIAL BRAND ASSETS
 * Standardized across all tabs, modals, and screen sizes.
 * Primary Brand Color: Vikoda Cyan #009FE3 (Official Pantone Process Cyan)
 * Secondary: Royal Navy #003B70, Pure White #FFFFFF
 * Strictly NO unwanted taglines ("không ghi khoáng kiềm đảnh thạnh gì hết").
 */

/**
 * 4-Layer Balanced Zen Stones (Nguyên Bản Như Ngọc Trong Đá)
 * Exact recreation of the official brand artwork from Avatar.jpg
 */
export const VikodaZenStones: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`shrink-0 select-none ${className}`}
    >
      {/* Concentric Water Ripples at Base */}
      <ellipse cx="50" cy="85" rx="38" ry="9" fill="#7C3AED" fillOpacity="0.25" stroke="#6D28D9" strokeWidth="1.5" />
      <ellipse cx="50" cy="85" rx="30" ry="6.5" fill="#6D28D9" stroke="#5B21B6" strokeWidth="1.5" />
      <ellipse cx="50" cy="85" rx="20" ry="4" fill="#4C1D95" />

      {/* Stone 4 (Base): pH 9.0 Pure Alkaline Cyan */}
      <path 
        d="M20 72C20 62 33 55 50 55C67 55 80 62 80 72C80 82 66 84 50 84C34 84 20 82 20 72Z" 
        fill="#009FE3" 
      />
      <text x="50" y="75" fill="#FFFFFF" fontSize="9.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
        pH 9.0
      </text>

      {/* Stone 3: Deep Royal Azure (Bù khoáng chất) */}
      <path 
        d="M24 53C24 45 35 40 50 40C65 40 76 45 76 53C76 61 64 63 50 63C36 63 24 61 24 53Z" 
        fill="#2563EB" 
      />
      <ellipse cx="50" cy="46" rx="14" ry="2" fill="#60A5FA" fillOpacity="0.35" />

      {/* Stone 2: Majestic Violet (Đóng chai tại nguồn) */}
      <path 
        d="M31 38C31 30 39 26 50 26C61 26 69 30 69 38C69 46 60 48 50 48C40 48 31 46 31 38Z" 
        fill="#7C3AED" 
      />
      <ellipse cx="50" cy="32" rx="10" ry="2" fill="#A78BFA" fillOpacity="0.4" />

      {/* Stone 1 (Top Gem): Radiant Magenta Orchid */}
      <path 
        d="M39 23C39 16 44 13 50 13C56 13 61 16 61 23C61 29 55 30 50 30C45 30 39 29 39 23Z" 
        fill="#D946EF" 
      />
      <ellipse cx="50" cy="18" rx="6" ry="1.5" fill="#F0ABFC" fillOpacity="0.5" />
    </svg>
  );
};

export const CompanyEmblem: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <div className={`shrink-0 select-none inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#005A9C] to-[#009FE3] text-white font-black font-sans shadow-xs ${className}`}>
      <span className="text-sm font-black leading-none">V</span>
    </div>
  );
};

export const VikodaOfficialIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => {
  return (
    <div className={`shrink-0 select-none inline-flex items-center justify-center rounded-xl bg-[#009FE3] text-white font-black font-sans shadow-xs ${className}`}>
      <span className="text-sm font-black leading-none">V</span>
    </div>
  );
};

/**
 * Official Vikoda Wordmark with "ENGLISH PRO"
 * Sử dụng Typography tiêu chuẩn, sắc nét, đúng mã màu Cyan #009FE3 và Royal Navy #003B70.
 * Hoàn toàn không vẽ bùa hay dùng vector tự chế méo mó.
 */
export const VikodaWordmark: React.FC<{ 
  className?: string;
  showTagline?: boolean;
}> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <span className="text-xl sm:text-2xl font-black tracking-tight text-[#009FE3] font-sans leading-none">
        Vikoda
      </span>

      {/* ENGLISH PRO Badge */}
      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-[#003B70] via-[#004B87] to-[#0070D1] text-white shadow-2xs border border-sky-400/30">
        <span className="text-[10px] sm:text-[11px] font-black tracking-wider uppercase font-sans">
          ENGLISH
        </span>
        <span className="text-[9px] sm:text-[10px] font-black text-amber-300 uppercase tracking-widest font-sans">
          PRO
        </span>
      </div>
    </div>
  );
};

export const HeaderBrandLogo: React.FC<{ className?: string; showTagline?: boolean }> = ({ 
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <VikodaWordmark />
    </div>
  );
};

export const BalancedStonesMascot = VikoMascot;
