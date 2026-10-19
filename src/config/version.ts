/**
 * VIKODA EDTECH SYSTEM VERSION & CHANGELOG CONFIGURATION
 * Single Source of Truth (SSOT) for application versioning and release notes.
 */

export interface VersionChangelogItem {
  version: string;
  releaseDate: string;
  codename: string;
  highlights: string[];
  type: 'major' | 'minor' | 'patch';
}

export const CURRENT_APP_VERSION = '2.6.0';
export const CURRENT_BUILD_NUMBER = '2026.10.19.03';
export const CURRENT_RELEASE_CODENAME = 'Duolingo Pedagogical Engine & Native Tri-Voice';

export const APP_CHANGELOG: VersionChangelogItem[] = [
  {
    version: '2.6.0',
    releaseDate: '19/10/2026',
    codename: 'Duolingo Pedagogical Engine & Native Tri-Voice',
    type: 'minor',
    highlights: [
      '🔥 Hoàn thiện 100/100 Unit (500 bài tập) theo chu trình tương tác 5 bước Duolingo: Nối từ, Đọc chuẩn, Sắp xếp câu, Điền từ, Chat rẽ nhánh B2B.',
      '🎙️ Bộ 3 Giọng Đọc Bản Ngữ Siêu Tốc 0ms: Michael (Nam Mỹ B2B), Emma (Nữ Mỹ Ngoại Giao) và James (Nam Anh Oxford & SIAC).',
      '⚡ Đột phá Native Audio Engine: Triệt tiêu 100% độ trễ mạng, giải quyết dứt điểm lỗi đơ hàng đợi Chrome và lỗi autoplay trên Safari iOS.',
      '🎯 Chuyển đổi giọng đọc tức thì 1-chạm: Đặt trực tiếp trên thanh công cụ Laptop, Header Mobile, Đấu trường Duolingo & Đấu trường Phản xạ.',
      '📝 Tinh chỉnh sư phạm & ngữ pháp chuyên sâu: Loại bỏ từ xao nhãng đơn điệu, tự nhiên hóa toàn bộ lời dịch tiếng Việt chuẩn văn phong Vikoda.'
    ]
  },
  {
    version: '2.5.0',
    releaseDate: '19/10/2026',
    codename: 'Alkaline Precision & SRS Spaced Repetition',
    type: 'minor',
    highlights: [
      '🧠 Tích hợp Thuật toán Lặp lại Ngắt quãng SuperMemo-2 (SM-2) chống quên lãng Ebbinghaus.',
      '💧 Cơ chế trực quan "Nạp Năng Lượng Kiềm Trí Nhớ" trên bản đồ hành trình khi bài học quá 48h.',
      '🎙️ Nâng cấp Mô hình Phân tích Ngữ âm Âm học AI (ELSA Benchmark) chỉ rõ khẩu hình và âm đuôi /s/, /t/, /d/.',
      '🎨 Khắc phục hoàn toàn lỗi hiển thị bệ đá khoáng 3D giọt nước (node_stone_water_3d) đạt chuẩn 665x521.',
      '✨ Tinh gọn giao diện (Zero-Friction Micro-learning): Ẩn Asset Studio khỏi người học phổ thông.',
      '📌 Bổ sung Trung tâm Phiên bản & Nhật ký Cập nhật hệ thống (Version Badge & What\'s New).'
    ]
  },
  {
    version: '2.4.0',
    releaseDate: '10/10/2026',
    codename: '3D Asset Studio & Living Mascot Viko',
    type: 'minor',
    highlights: [
      '🤖 Khởi tạo linh vật Viko 3D tương tác cảm ứng, tự động đổi biểu cảm theo tâm trạng người học.',
      '🎨 Ra mắt Asset Studio 3D tích hợp Google Gemini Imagen cho phép sinh ảnh tài nguyên trực tiếp.',
      '💻 Tối ưu giao diện Laptop/Desktop 3 cột chuyên nghiệp với bảng điều khiển thông minh.'
    ]
  },
  {
    version: '2.3.0',
    releaseDate: '30/09/2026',
    codename: 'Firebase Cloud Sync & Multi-tier Curriculum',
    type: 'minor',
    highlights: [
      '☁️ Đồng bộ tiến độ học tập và thành tích thời gian thực qua Firebase Firestore.',
      '🗺️ Mở rộng lộ trình 100 bài học toàn diện chuẩn CEFR từ A1 đến C2.',
      '⚔️ Đấu trường Thách đấu 1v1 PvP đối kháng giữa các phòng ban nội bộ Vikoda.'
    ]
  }
];

const STORAGE_KEY_LAST_SEEN_VERSION = 'vikoda_last_seen_version';

/**
 * Kiểm tra xem người dùng có vừa cập nhật lên phiên bản mới hay không
 */
export const checkIsNewVersionAvailable = (): { isNew: boolean; oldVersion: string | null } => {
  if (typeof window === 'undefined') return { isNew: false, oldVersion: null };
  try {
    const lastSeen = localStorage.getItem(STORAGE_KEY_LAST_SEEN_VERSION);
    if (!lastSeen) {
      localStorage.setItem(STORAGE_KEY_LAST_SEEN_VERSION, CURRENT_APP_VERSION);
      return { isNew: false, oldVersion: null };
    }
    if (lastSeen !== CURRENT_APP_VERSION) {
      localStorage.setItem(STORAGE_KEY_LAST_SEEN_VERSION, CURRENT_APP_VERSION);
      return { isNew: true, oldVersion: lastSeen };
    }
  } catch (e) {}
  return { isNew: false, oldVersion: null };
};
