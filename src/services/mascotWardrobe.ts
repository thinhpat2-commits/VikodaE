export interface MascotSkin {
  id: string;
  nameVi: string;
  descVi: string;
  costGems: number;
  previewSrc: string;
  badge: string;
  unlockedByDefault?: boolean;
}

export const MASCOT_SKINS: MascotSkin[] = [
  {
    id: 'default',
    nameVi: 'Viko Năng Động (Polo & Headphones)',
    descVi: 'Trang phục thể thao nguyên bản, sẵn sàng học tập mỗi ngày.',
    costGems: 0,
    previewSrc: '/assets/viko_mascot_3d.png',
    badge: 'Mặc định',
    unlockedByDefault: true,
  },
  {
    id: 'business',
    nameVi: 'Viko Doanh Nhân (Executive B2B Suit)',
    descVi: 'Vest xanh navy lịch lãm, phong thái đàm phán thương mại quốc tế.',
    costGems: 80,
    previewSrc: '/assets/mascot_business_suit.png',
    badge: 'Doanh Nhân',
  },
  {
    id: 'cool',
    nameVi: 'Viko Phong Cách (Cool Shades)',
    descVi: 'Kính râm cực ngầu, tràn đầy năng lượng bứt phá thử thách.',
    costGems: 50,
    previewSrc: '/assets/mascot_cool_shades.png',
    badge: 'Cực Ngầu',
  },
  {
    id: 'student',
    nameVi: 'Viko Học Giả (Student Scholar)',
    descVi: 'Đeo ba lô tri thức và ôm giáo trình tiếng Anh chuyên sâu.',
    costGems: 60,
    previewSrc: '/assets/mascot_student_book.png',
    badge: 'Học Giả',
  },
  {
    id: 'trophy',
    nameVi: 'Viko Nhà Vô Địch (Trophy Winner)',
    descVi: 'Nâng cao cúp vàng danh giá của Tập đoàn F.I.T & Vikoda.',
    costGems: 120,
    previewSrc: '/assets/mascot_trophy_winner.png',
    badge: 'Quán Quân',
  },
  {
    id: 'bottle_hug',
    nameVi: 'Viko Nạp Khoáng (Vikoda Bottle Hug)',
    descVi: 'Tiếp thêm năng lượng khoáng kiềm thiên nhiên Đảnh Thạnh pH 9.0.',
    costGems: 70,
    previewSrc: '/assets/mascot_bottle_hug.png',
    badge: 'Khoáng Kiềm',
  },
  {
    id: 'fire_battle',
    nameVi: 'Viko Chiến Binh (PvP Fire Battle)',
    descVi: 'Ngọn lửa rực cháy ý chí quyết đấu trong Đấu Trường 1v1.',
    costGems: 100,
    previewSrc: '/assets/mascot_fire_battle.png',
    badge: 'Đấu Sĩ',
  },
];

export const STORAGE_KEY_EQUIPPED_SKIN = 'vikoda_equipped_skin_v1';
export const STORAGE_KEY_UNLOCKED_SKINS = 'vikoda_unlocked_skins_v1';
export const EVENT_SKIN_UPDATED = 'vikoda_mascot_skin_updated';

export const getEquippedSkinId = (): string => {
  if (typeof window === 'undefined') return 'default';
  return localStorage.getItem(STORAGE_KEY_EQUIPPED_SKIN) || 'default';
};

export const setEquippedSkinId = (skinId: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_EQUIPPED_SKIN, skinId);
    window.dispatchEvent(new CustomEvent(EVENT_SKIN_UPDATED, { detail: { skinId } }));
  }
};

export const getUnlockedSkinIds = (): string[] => {
  if (typeof window === 'undefined') return ['default'];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_UNLOCKED_SKINS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return ['default'];
};

export const unlockSkinId = (skinId: string) => {
  const current = getUnlockedSkinIds();
  if (!current.includes(skinId)) {
    const next = [...current, skinId];
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_UNLOCKED_SKINS, JSON.stringify(next));
    }
  }
};
