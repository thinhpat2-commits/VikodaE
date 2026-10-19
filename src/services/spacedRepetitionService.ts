/**
 * SPACED REPETITION SYSTEM (SRS) - SUPERMEMO-2 (SM-2) ALGORITHM
 * 
 * Áp dụng nguyên lý Khoa học Não bộ Ebbinghaus Forgetting Curve:
 * - Sau 24h - 48h không nhắc lại, não bộ quên 60-70% từ vựng & cấu trúc kỹ thuật.
 * - Hệ Thống "Phục Hồi Năng Lượng Kiềm Trí Nhớ" (Alkaline Memory Restoration):
 *   Tự động tính toán chu kỳ lặp tối ưu: 1 ngày -> 3 ngày -> 7 ngày -> 14 ngày -> 30 ngày.
 */

export interface UnitMemoryInfo {
  unitId: string;
  repetitionCount: number; // Số lần đã ôn tập thành công
  easeFactor: number;      // Hệ số dễ/khó SM-2 (mặc định 2.5)
  intervalDays: number;    // Khoảng cách ngày đến lần ôn tiếp theo
  lastReviewedAt: number;  // Timestamp lần học/ôn gần nhất
  nextReviewAt: number;    // Timestamp hạn chót cần ôn tập
  retentionScore: number;  // % độ tươi mới trí nhớ (0 - 100%)
  needsReview: boolean;    // Cần ôn tập để bảo tồn năng lượng kiềm?
}

const STORAGE_KEY_SRS = 'vikoda_spaced_repetition_v1';

// Lấy toàn bộ dữ liệu SRS từ localStorage
export const loadSRSData = (): Record<string, UnitMemoryInfo> => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SRS);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Lỗi đọc dữ liệu SRS:', err);
    return {};
  }
};

// Lưu toàn bộ dữ liệu SRS vào localStorage
export const saveSRSData = (data: Record<string, UnitMemoryInfo>) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_SRS, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('vikoda_srs_updated'));
  } catch (err) {
    console.warn('Lỗi lưu dữ liệu SRS:', err);
  }
};

/**
 * Tính toán % độ tươi mới trí nhớ theo đường cong Ebbinghaus Decay:
 * R = e^(-t / S) * 100
 */
export const calculateRetentionScore = (lastReviewedAt: number, intervalDays: number): number => {
  const now = Date.now();
  const elapsedDays = Math.max(0, (now - lastReviewedAt) / (1000 * 60 * 60 * 24));
  
  // S là hệ số bền vững trí nhớ (tính theo ngày)
  const stability = Math.max(1, intervalDays * 1.5);
  const retention = Math.exp(-elapsedDays / stability) * 100;
  
  return Math.max(0, Math.min(100, Math.round(retention)));
};

/**
 * Lấy trạng thái trí nhớ của một bài học cụ thể
 */
export const getUnitMemoryInfo = (unitId: string, isCompleted: boolean): UnitMemoryInfo => {
  const srsMap = loadSRSData();
  const now = Date.now();

  if (!isCompleted) {
    return {
      unitId,
      repetitionCount: 0,
      easeFactor: 2.5,
      intervalDays: 1,
      lastReviewedAt: now,
      nextReviewAt: now + 24 * 60 * 60 * 1000,
      retentionScore: 0,
      needsReview: false,
    };
  }

  const existing = srsMap[unitId];
  if (!existing) {
    // Mới hoàn thành bài học, thiết lập mốc ôn tập sau 1 ngày (24h)
    const initialInfo: UnitMemoryInfo = {
      unitId,
      repetitionCount: 1,
      easeFactor: 2.5,
      intervalDays: 1,
      lastReviewedAt: now,
      nextReviewAt: now + 24 * 60 * 60 * 1000,
      retentionScore: 100,
      needsReview: false,
    };
    srsMap[unitId] = initialInfo;
    saveSRSData(srsMap);
    return initialInfo;
  }

  const retention = calculateRetentionScore(existing.lastReviewedAt, existing.intervalDays);
  const needsReview = now >= existing.nextReviewAt || retention < 70;

  return {
    ...existing,
    retentionScore: retention,
    needsReview,
  };
};

/**
 * Cập nhật tiến độ ôn tập theo thuật toán SuperMemo-2 (SM-2)
 * @param unitId ID của bài học
 * @param performanceRating Điểm đánh giá (3: Tạm được, 4: Tốt, 5: Xuất sắc)
 */
export const recordUnitReviewSuccess = (
  unitId: string,
  performanceRating: number = 5
): UnitMemoryInfo => {
  const srsMap = loadSRSData();
  const now = Date.now();
  const current = srsMap[unitId] || {
    unitId,
    repetitionCount: 0,
    easeFactor: 2.5,
    intervalDays: 1,
    lastReviewedAt: now,
    nextReviewAt: now,
    retentionScore: 100,
    needsReview: false,
  };

  const rep = current.repetitionCount + 1;
  let interval = 1;

  if (rep === 1) {
    interval = 1; // 1 ngày
  } else if (rep === 2) {
    interval = 3; // 3 ngày
  } else if (rep === 3) {
    interval = 7; // 7 ngày
  } else if (rep === 4) {
    interval = 14; // 14 ngày
  } else {
    // Công thức SM-2: I(n) = I(n-1) * EF
    interval = Math.round(current.intervalDays * current.easeFactor);
  }

  // Điều chỉnh Ease Factor theo SM-2
  const q = Math.max(3, Math.min(5, performanceRating));
  const newEF = Math.max(1.3, current.easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));

  const updated: UnitMemoryInfo = {
    unitId,
    repetitionCount: rep,
    easeFactor: parseFloat(newEF.toFixed(2)),
    intervalDays: interval,
    lastReviewedAt: now,
    nextReviewAt: now + interval * 24 * 60 * 60 * 1000,
    retentionScore: 100,
    needsReview: false,
  };

  srsMap[unitId] = updated;
  saveSRSData(srsMap);
  return updated;
};

/**
 * Lấy danh sách các bài học đã hoàn thành nhưng đang đến hạn cần ôn tập
 */
export const getUnitsNeedingReview = (completedUnitIds: string[]): string[] => {
  return completedUnitIds.filter((id) => {
    const info = getUnitMemoryInfo(id, true);
    return info.needsReview;
  });
};
