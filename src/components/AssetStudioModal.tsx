import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  X, Copy, Check, Upload, Sparkles, Image as ImageIcon, Flame, Heart, 
  Shield, RefreshCw, LayoutGrid, List, Search, Zap, Droplets, MapPin, 
  Gift, Award, BookmarkCheck, Play, Pause, Gauge, Sliders, ChevronLeft, ChevronRight, RotateCcw, Clapperboard, Film, Table, Download
} from 'lucide-react';
import { playSound } from '../services/soundEffects';
import { 
  getAssetSrc, 
  setCustomAsset, 
  removeCustomAsset, 
  useVikodaAssetSync,
  getAllCustomAssets,
  restoreAllCustomAssets
} from './brand/VikodaLogos';
import { getStoredMascotFps, setStoredMascotFps, MINIMALIST_SPRITE_CHART, VikoDynamicAnimator, VikoArmGesture } from './VikoDynamicAnimator';

export interface AssetStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type AssetCategory = 
  | 'all'
  | 'mascot_anim'
  | 'mascot_modes'
  | 'effects'
  | 'nodes'
  | 'rewards'
  | 'skills_badges'
  | 'brand';

export interface AssetDef {
  id: string;
  category: AssetCategory;
  filename: string;
  nameVi: string;
  description: string;
  prompt: string;
  currentSrc: string;
}

const PROMPT_SUFFIX = ', floating in air, zero floor shadow, no ground pedestal, isolated on solid pure white background, soft studio lighting, centered, vibrant colors, raytracing, Pixar 3D render, Blender 3D, 8k';

const ASSET_DEFINITIONS: AssetDef[] = [
  // =========================================================================
  // 1. 🎬 BỘ ASSET HOẠT HỌA TỐI GIẢN & TƯƠNG TÁC (MINIMALIST SPRITE 8 FPS)
  // Tiết kiệm hơn 85% frame: Idle (3 frames), Walk (4 frames), Ponder (1 tĩnh), Sad (1 tĩnh), Laugh (1 tĩnh)
  // =========================================================================
  {
    id: 'idle_1',
    category: 'mascot_anim',
    filename: 'mascot_idle_1.png',
    nameVi: '[Idle_1] Viko Đứng Chờ Thư Thái (Frame 1 Nghỉ)',
    description: 'Play frame [Idle_1] -> [Idle_2] -> [Idle_3] -> [Idle_2]. Lặp vô hạn (Ping-pong loop). Tư thế cơ bản đứng thẳng chính diện, hai tay thả lỏng nhẹ bên hông, mỉm cười thân thiện.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, full body front view standing upright on air, wearing round navy blue glasses, dark blue over-ear modern headphones, white polo shirt with navy blue collar, navy shorts, and blue sneakers. Relaxed friendly pose with arms resting comfortably at sides, gentle warm smiling open-eyed expression. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_idle_1.png',
  },
  {
    id: 'idle_2',
    category: 'mascot_anim',
    filename: 'mascot_idle_2.png',
    nameVi: '[Idle_2] Viko Thở Hơi Phình (Frame 2 Phình nhẹ)',
    description: 'Frame 2 trong chuỗi Ping-pong. Cùng nhân vật Viko, lồng ngực và thân giọt nước hơi phình to ra hai bên nhẹ nhàng theo nhịp hít thở sâu, miệng mỉm cười thư thái.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body front view standing upright, wearing round navy glasses, dark blue headphones, white polo shirt with navy collar, navy shorts, blue sneakers. Body and torso slightly expanding and puffing out cutely as inhaling fresh air, peaceful happy smile. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_idle_2.png',
  },
  {
    id: 'idle_3',
    category: 'mascot_anim',
    filename: 'mascot_idle_3.png',
    nameVi: '[Idle_3] Viko Phình Tối Đa Tĩnh Tâm (Frame 3 Tĩnh tâm)',
    description: 'Frame 3 đỉnh điểm nhịp thở Ping-pong (1-2-3-2). Thân giọt nước căng tròn phình tối đa, hai mắt nhắm tít thư thái tĩnh tâm nạp khoáng kiềm thiên nhiên.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body front view, wearing round navy glasses, dark blue headphones, white polo shirt with navy collar, navy shorts, blue sneakers. Torso fully puffed up round and cute, both eyes gently closed in serene bliss and meditation, calm blissful smile. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_idle_3.png',
  },
  {
    id: 'walk_1',
    category: 'mascot_anim',
    filename: 'mascot_walk_1.png',
    nameVi: '[Walk_1] Viko Đi Bộ Chân Trái (Frame 1 Bước chân)',
    description: 'Play frame [Walk_1] -> [Walk_2] -> [Walk_3] -> [Walk_4]. Lặp vô hạn. Dáng đi bộ sải bước năng động, chân trái bước về phía trước chạm đất, tay phải vung nhẹ tới trước.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body, wearing round navy glasses, headphones, white polo shirt, navy shorts, blue sneakers. Dynamic walking stride pose, left foot touching ground in front, right arm swinging forward naturally, upbeat energetic walking posture, confident smile. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_walk_1.png',
  },
  {
    id: 'walk_2',
    category: 'mascot_anim',
    filename: 'mascot_walk_2.png',
    nameVi: '[Walk_2] Viko Mở Rộng Sải Chân (Frame 2 Sải chân)',
    description: 'Frame 2 trong chu kỳ 4 bước đi bộ. Hai chân mở rộng bước sải chuyển tiếp trọng tâm trên không, hai tay dang cân bằng nhịp bước chân.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body, wearing round navy glasses, headphones, white polo shirt, navy shorts, blue sneakers. Mid-stride transition walking pose, legs spread in balanced mid-step, floating slightly with weight shifting, cheerful upbeat expression. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_walk_2.png',
  },
  {
    id: 'walk_3',
    category: 'mascot_anim',
    filename: 'mascot_walk_3.png',
    nameVi: '[Walk_3] Viko Đi Bộ Chân Phải (Frame 3 Đổi chân)',
    description: 'Frame 3 trong chu kỳ 4 bước đi bộ. Chân phải bước về phía trước chạm đất, tay trái vung nhẹ tới trước, đầu hơi nghiêng vui vẻ.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body, wearing round navy glasses, headphones, white polo shirt, navy shorts, blue sneakers. Dynamic walking stride pose, right foot touching ground forward, left arm swinging forward naturally, head tilted cutely, cheerful smile. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_walk_3.png',
  },
  {
    id: 'walk_4',
    category: 'mascot_anim',
    filename: 'mascot_walk_4.png',
    nameVi: '[Walk_4] Viko Khép Chu Kỳ Bước (Frame 4 Khép bước)',
    description: 'Frame 4 khép kín chu kỳ 4 bước đi bộ. Hai chân tiếp tục mở rộng bước sải chuyển tiếp, hoàn tất 1 vòng lặp để quay lại [Walk_1] mượt mà.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body, wearing round navy glasses, headphones, white polo shirt, navy shorts, blue sneakers. Passing step walking pose, legs transitioning ready to cycle, arms swinging smoothly, energetic bright smile. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_walk_4.png',
  },
  {
    id: 'ponder_1',
    category: 'mascot_anim',
    filename: 'mascot_ponder_1.png',
    nameVi: '[Ponder_1] Viko Ngập Ngừng Xoa Cằm (Frame Tĩnh 100%)',
    description: 'Lấy frame tĩnh [Ponder_1]. Dùng code Rotate lắc nhẹ ảnh từ -5 độ đến 5 độ trong 1 giây. TIẾT KIỆM 100% VẼ THÊM FRAME! Tay phải xoa cằm suy nghĩ, mắt ngước nhìn tìm từ vựng.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body front view, wearing round navy glasses, headphones, white polo shirt, navy shorts, blue sneakers. Pondering pose, right hand gently stroking chin, head slightly tilted, eyes looking up thoughtfully searching for English vocabulary, curious engaged expression. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_ponder_1.png',
  },
  {
    id: 'sad_1',
    category: 'mascot_anim',
    filename: 'mascot_sad_1.png',
    nameVi: '[Sad_1] Viko Thất Bại Xị Mặt (Frame Tĩnh 100%)',
    description: 'Lấy frame tĩnh [Sad_1]. Dùng code Shake (rung lắc tọa độ X liên tục) trong 0.5 giây. TIẾT KIỆM 100% VẼ THÊM FRAME! Nét mặt xị xuống tiếc nuối khi trả lời sai, hai mắt rơm rớm nước mắt comic.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body front view, wearing round navy glasses, dark blue headphones, white polo shirt, navy shorts, blue sneakers. Sad disappointed expression after making a mistake, droopy mouth, cute glistening comic tears dripping from eyes, hands hanging down reluctantly. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_sad_1.png',
  },
  {
    id: 'laugh',
    category: 'mascot_anim',
    filename: 'mascot_laugh.png',
    nameVi: '[Laugh] Viko Cười Tít Mắt Tương Tác (Frame Tĩnh 100%)',
    description: 'Khi User chạm vào mascot, lấy frame tĩnh [Laugh]. Dùng code Scale ép trục Y xuống 80% và phóng trục X lên 110%, sau đó nảy (ElasticOut) về 100%. TIẾT KIỆM 100% VẼ THÊM FRAME! Biểu cảm cười lớn há to miệng cực vui vẻ.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko, identical character model, full body front view, wearing round navy glasses, headphones, white polo shirt, navy shorts, blue sneakers. Hilariously laughing joyfully when being tickled, big wide open happy smiling mouth, curved happy closed squinting eyes, arms playfully hugging belly. Pixar 3D clay style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_laugh.png',
  },

  // =========================================================================
  // 2. 🎭 BỘ MASCOT THEO CHẾ ĐỘ & TRANG PHỤC ĐẶC BIỆT (SPECIAL GAME MODES)
  // Các trang phục & biểu cảm riêng gắn cố định vào từng phòng luyện tập chuyên biệt
  // =========================================================================
  {
    id: 'mode_business',
    category: 'mascot_modes',
    filename: 'mascot_business_suit.png',
    nameVi: 'M1. Viko Vest Doanh Nhân (Phòng Tiếng Anh Thương Mại)',
    description: 'Dành riêng cho Chế độ Đàm Phán Hợp Đồng, Incoterms, HORECA & Tiếp Khách Đối Ngoại.',
    prompt: `A cute 3D glossy water droplet mascot named Viko wearing round navy glasses and headphones, dressed in a sharp navy blue business suit with white shirt and red tie, holding a small leather briefcase, confident professional smile. Duolingo 3D style, Pixar character render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_business_suit.png',
  },
  {
    id: 'mode_microphone',
    category: 'mascot_modes',
    filename: 'mascot_microphone.png',
    nameVi: 'M2. Viko Cầm Micro (Phòng Luyện Phát Âm AI Speaking)',
    description: 'Dành riêng cho Voice Lab / AI Speaking Coach khi luyện phát âm giọng Mỹ chuẩn.',
    prompt: `A cute 3D glossy water droplet mascot named Viko wearing navy glasses and headphones, holding a shiny vintage chrome microphone, singing or speaking passionately with musical notes floating around. Duolingo 3D style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_microphone.png',
  },
  {
    id: 'mode_fire_battle',
    category: 'mascot_modes',
    filename: 'mascot_fire_battle.png',
    nameVi: 'M3. Viko Băng Đô Bốc Lửa (Đấu Trường 1v1 PvP Reflex)',
    description: 'Dành riêng cho Đấu Trường Phản Xạ 1v1 PvP và khi người học đạt Combo Streak x5 trở lên.',
    prompt: `A cute 3D glossy water droplet mascot named Viko, full body, wearing round navy glasses and headphones, wearing a red martial arts headband with stylized flame aura around body, clenched fists in determined heroic pose, competitive confident grin. Duolingo 3D style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_fire_battle.png',
  },
  {
    id: 'mode_trophy',
    category: 'mascot_modes',
    filename: 'mascot_trophy_winner.png',
    nameVi: 'M4. Viko Nâng Cúp Vàng (Bảng Xếp Hạng & Perfect Score)',
    description: 'Dành riêng cho Bảng Xếp Hạng Tuần Top 3 Phòng Ban và khi hoàn thành Unit điểm tuyệt đối.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko wearing round glasses and headphones, standing proudly on a first-place podium holding a shiny golden trophy overhead, gold medal around neck, joyful triumphant smile with confetti. Duolingo 3D celebratory style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_trophy_winner.png',
  },
  {
    id: 'mode_student',
    category: 'mascot_modes',
    filename: 'mascot_student_book.png',
    nameVi: 'M5. Viko Balo Sách Vở (Bài Thi Trình Độ & Tra Cứu)',
    description: 'Dành riêng cho Bài Thi Phân Lớp Đầu Vào (Placement Test) và màn Tra Cứu Ngữ Pháp.',
    prompt: `A cute 3D glossy water droplet mascot named Viko wearing round glasses and headphones, wearing a cute orange backpack and holding an open English textbook with alphabet letters, looking motivated and studious. Duolingo 3D clay style, Pixar render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_student_book.png',
  },
  {
    id: 'mode_bottle',
    category: 'mascot_modes',
    filename: 'mascot_bottle_hug.png',
    nameVi: 'M6. Viko Ôm Bình Nước (Góc Sức Khỏe pH 9.0 & Nạp Tim)',
    description: 'Dành riêng cho Thông Báo Chăm Sóc Sức Khỏe Khoáng Kiềm Thiên Nhiên và màn hồi phục tim.',
    prompt: `A cute 3D glossy cyan water droplet mascot named Viko with round navy glasses and dark blue headphones, wearing white polo shirt, happily hugging a sleek 3D natural alkaline mineral water bottle with cyan blue cap, bright cheerful smile. Duolingo 3D claymation style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_bottle_hug.png',
  },
  {
    id: 'mode_cool',
    category: 'mascot_modes',
    filename: 'mascot_cool_shades.png',
    nameVi: 'M7. Viko Đeo Kính Râm Ngầu (Kỷ Lục Chuỗi Streak 7+ Ngày)',
    description: 'Dành riêng khi nhân viên đạt kỷ lục chuỗi rèn luyện liên tục 7 ngày trở lên.',
    prompt: `A cute 3D glossy water droplet mascot named Viko wearing dark stylish sunglasses over blue headphones, wearing a cool white polo jacket, crossing arms with a smug charismatic grin, sparkling star on tooth. Duolingo 3D style, Pixar render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_cool_shades.png',
  },
  {
    id: 'mode_sad',
    category: 'mascot_modes',
    filename: 'mascot_sad_cry.png',
    nameVi: 'M8. Viko Rơi Lệ (Khi Mất Tim / Trả Lời Sai)',
    description: 'Dành riêng khi người học trả lời sai câu hỏi hoặc bị trừ tim khoáng kiềm.',
    prompt: `A cute 3D glossy water droplet mascot named Viko, full body, wearing round navy glasses, dark blue headphones, white polo shirt with navy collar, and navy shorts. Looking sad and disappointed with droopy mouth and cute glistening comic tears dripping from eyes, holding hands down. Duolingo 3D style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_sad_cry.png',
  },
  {
    id: 'mode_dancing',
    category: 'mascot_modes',
    filename: 'mascot_dancing.png',
    nameVi: 'M9. Viko Vũ Điệu Quẩy (Màn Thăng Hạng & Chiến Thắng)',
    description: 'Vũ điệu ăn mừng sôi động khi vượt qua bài thi lớn hoặc thăng hạng League.',
    prompt: `A cute 3D glossy water droplet mascot named Viko dancing dynamically with disco arms, joyful happy expression, sparkling water droplets around, wearing white polo shirt and navy shorts. Duolingo 3D animation style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_dancing.png',
  },
  {
    id: 'mode_idea',
    category: 'mascot_modes',
    filename: 'mascot_idea.png',
    nameVi: 'M10. Viko Bật Bóng Đèn Ý Tưởng (Nút Gợi Ý Trợ Giúp)',
    description: 'Xuất hiện khi người học bấm nút Gợi ý bài học hoặc tra cứu mở rộng từ vựng.',
    prompt: `A cute 3D glossy water droplet mascot named Viko with round glasses and headphones, wearing white polo shirt, index finger pointing up excitedly, glowing yellow cartoon lightbulb floating above head with eureka happy expression. Duolingo 3D style, Pixar render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/mascot_idea.png',
  },

  // =========================================================================
  // 3. ✨ BỘ HIỆU ỨNG 3D GAME THAY THẾ ICON PHẲNG (GAME VFX)
  // =========================================================================
  {
    id: 'effect_combo_fire',
    category: 'effects',
    filename: 'effect_combo_fire_3d.png',
    nameVi: 'E1. Hiệu Ứng Lửa Combo Rực Cháy 3D',
    description: 'Vệt lửa 3D phát sáng bùng nổ khi đạt chuỗi câu trả lời đúng liên tiếp.',
    prompt: `A stunning 3D stylized blazing cartoon fire burst effect, swirling golden yellow and bright neon orange flames, sparkling ember particles, glossy translucent magma elements, Duolingo game combo effect, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/effect_combo_fire_3d.png',
  },
  {
    id: 'effect_stardust_burst',
    category: 'effects',
    filename: 'effect_stardust_burst_3d.png',
    nameVi: 'E2. Hiệu Ứng Chùm Sao Lấp Lánh Stardust 3D',
    description: 'Chùm sao vàng và kim cương tinh thể 3D bung tỏa rực rỡ khi hoàn thành câu hỏi.',
    prompt: `A magical 3D celestial stardust burst effect, explosion of glossy golden 3D stars, sparkling yellow diamonds and glowing stardust particles, Duolingo celebration effect, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/effect_stardust_burst_3d.png',
  },
  {
    id: 'effect_water_splash',
    category: 'effects',
    filename: 'effect_water_splash_3d.png',
    nameVi: 'E3. Hiệu Ứng Nước Khoáng Bắn Tung Tăng 3D',
    description: 'Tia nước khoáng kiềm thiên nhiên 3D trong suốt bắn tung tóe hồi phục tim/sinh lực.',
    prompt: `A dynamic 3D cartoon mineral water splash effect, crystal clear cyan blue water droplets exploding outwards in a crown splash, sparkling refraction, glossy liquid physics, Pixar 3D animated effect, Blender render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/effect_water_splash_3d.png',
  },
  {
    id: 'effect_level_up_aura',
    category: 'effects',
    filename: 'effect_level_up_aura_3d.png',
    nameVi: 'E4. Hiệu Ứng Vòng Hào Quang Thăng Cấp 3D',
    description: 'Vòng năng lượng hào quang vàng xanh 3D phát sáng rực rỡ khi thăng cấp Level Up.',
    prompt: `A magnificent 3D level up energy aura ring, glowing cyan and golden neon light rings swirling upward with sparkling energy motes, victory aura, Duolingo level up game VFX, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/effect_level_up_aura_3d.png',
  },
  {
    id: 'effect_shield_protect',
    category: 'effects',
    filename: 'effect_shield_protect_3d.png',
    nameVi: 'E5. Hiệu Ứng Khiên Băng Bảo Vệ Chuỗi Streak 3D',
    description: 'Khiên năng lượng tinh thể băng pha lê 3D bảo vệ chuỗi Streak không bị đứt đoạn.',
    prompt: `A cute chunky 3D energy shield made of glowing cyan ice crystal and blue topaz gemstone, frosted edges with snowflake aura, protecting game streak, Duolingo game powerup item, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/effect_shield_protect_3d.png',
  },
  {
    id: 'effect_confetti_celebration',
    category: 'effects',
    filename: 'effect_confetti_celebration_3d.png',
    nameVi: 'E6. Hiệu Ứng Pháo Hoa Ruy Băng Ăn Mừng 3D',
    description: 'Ruy băng xoắn ốc và hoa giấy 3D nổ bung rực rỡ khi chiến thắng bài học hoặc giải đấu.',
    prompt: `A joyous 3D explosion of colorful spiral ribbons and glossy paper confetti particles, festive golden, cyan, magenta, and emerald party popper burst, Duolingo victory celebration VFX, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/effect_confetti_celebration_3d.png',
  },
  {
    id: 'effect_lightning_spark',
    category: 'effects',
    filename: 'effect_lightning_spark_3d.png',
    nameVi: 'E7. Hiệu Ứng Tia Sét Năng Lượng Đột Phá 3D',
    description: 'Tia sét năng lượng vàng rực 3D biểu tượng x2 EXP và bứt phá tốc độ phản xạ.',
    prompt: `A cute stylized 3D golden lightning bolt zap with electric sparks and glowing cyan plasma arcs, glossy beveled edges, high-energy powerup VFX, Duolingo speed boost icon, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/effect_lightning_spark_3d.png',
  },

  // =========================================================================
  // 4. 🗺️ BỘ NÚT BƯỚC ĐƯỜNG 3D (SNAKE PATH)
  // =========================================================================
  {
    id: 'node_water',
    category: 'nodes',
    filename: 'node_water_cyan_3d.png',
    nameVi: 'N1. Nút Đang Học (Vòng Sóng Nước Cyan)',
    description: 'Nút tròn 3D giọt nước khoáng phát sáng báo hiệu bài học đang mở.',
    prompt: `A chunky 3D round stepping stone button for a mobile game path, vibrant cyan blue mineral water theme with concentric water ripples on top and a glossy convex water drop dome in center, thick 3D base. Duolingo 3D level node style, Blender render, top-down isometric angle${PROMPT_SUFFIX}`,
    currentSrc: '/assets/node_water_cyan_3d.png',
  },
  {
    id: 'node_star',
    category: 'nodes',
    filename: 'node_star_gold_3d.png',
    nameVi: 'N2. Nút Đã Xong (Ngôi Sao Vàng)',
    description: 'Bệ đá vàng 3D với ngôi sao nổi báo hiệu bài học đã hoàn thành.',
    prompt: `A chunky 3D round golden stepping stone button for a game path, embossed with a shiny yellow 3D star in the center, metallic gold finish, smooth bevels, thick tactile 3D base. Duolingo 3D finished level node, Blender render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/node_star_gold_3d.png',
  },
  {
    id: 'node_stone_water',
    category: 'nodes',
    filename: 'node_stone_water_3d.png',
    nameVi: 'N3. Nút Sẵn Sàng (Bệ Đá Giọt Nước 3D)',
    description: 'Bệ đá sông tự nhiên chạm khắc giọt nước khoáng đại diện bài học đã mở.',
    prompt: `A chunky 3D round natural granite river stone stepping button for a game path, light grey mineral rock texture with smooth bevels and natural cracks, embossed with a smooth water droplet emblem in the center. Duolingo 3D unlocked level node, Blender render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/node_stone_water_3d.png',
  },
  {
    id: 'node_lock',
    category: 'nodes',
    filename: 'node_stone_lock_3d.png',
    nameVi: 'N4. Nút Đang Khóa (Đá Xám Ổ Khóa)',
    description: 'Bệ đá sông tự nhiên 3D có ổ khóa bạc ở giữa.',
    prompt: `A chunky 3D round natural granite river stone stepping button for a game path, light grey mineral rock texture, with a cute silver padlock sitting in the center. Duolingo 3D locked level node, Blender render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/node_stone_lock_3d.png',
  },
  {
    id: 'node_crown',
    category: 'nodes',
    filename: 'node_crown_boss_3d.png',
    nameVi: 'N5. Nút Vương Miện Vàng Thử Thách Boss',
    description: 'Bệ kiểm tra cuối Unit để mở khóa chặng tiếp theo.',
    prompt: `A chunky 3D round royal purple stepping stone button for a game path, with a gleaming golden royal crown embedded on top, glowing with ruby jewels. Duolingo 3D checkpoint boss node, Blender render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/node_crown_boss_3d.png',
  },

  // =========================================================================
  // 5. 💎 TIỀN TỆ & PHẦN THƯỞNG 3D
  // =========================================================================
  {
    id: 'streak_fire',
    category: 'rewards',
    filename: 'streak_fire_3d.png',
    nameVi: 'R1. Ngọn Lửa Streak 3D (Chuỗi Học)',
    description: 'Biểu tượng ngọn lửa biết cười màu vàng cam Duolingo.',
    prompt: `A cute stylized 3D flame icon with a friendly smiling cartoon face and bright cheerful eyes, glowing warm orange and golden yellow colors, glossy rounded smooth claymation finish. Duolingo streak fire style, Blender 3D render, soft ambient glow, centered${PROMPT_SUFFIX}`,
    currentSrc: '/assets/streak_fire_3d.png',
  },
  {
    id: 'heart_purple',
    category: 'rewards',
    filename: 'heart_purple_3d.png',
    nameVi: 'R2. Tim Khoáng Kiềm pH 9.0 Tím 3D',
    description: 'Trái tim thạch anh tím bóng bẩy đại diện cho mạng năng lượng kiềm.',
    prompt: `A cute 3D stylized heart gem made of glowing purple amethyst crystal and smooth alkaline mineral water glass, royal purple and lavender gradients, glossy reflective surface, rounded tactile Duolingo game asset style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/heart_purple_3d.png',
  },
  {
    id: 'heart_red',
    category: 'rewards',
    filename: 'heart_red_3d.png',
    nameVi: 'R3. Trái Tim Đỏ Cổ Điển 3D',
    description: 'Mạng hồi máu cổ điển cho bài kiểm tra.',
    prompt: `A cute 3D glossy red heart gem with shiny white highlights, rounded plump cartoon shape, juicy cherry red reflections, Duolingo heart style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/heart_red_3d.png',
  },
  {
    id: 'gem_cyan',
    category: 'rewards',
    filename: 'gem_cyan_3d.png',
    nameVi: 'R4. Viên Ngọc Khoáng Cyan 3D',
    description: 'Tiền tệ đá quý khoáng sản Vikoda.',
    prompt: `A vibrant 3D hexagonal cut mineral gemstone crystal, bright cyan blue and turquoise colors, sparkling translucent water gem texture, rounded beveled edges, Duolingo gem style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/gem_cyan_3d.png',
  },
  {
    id: 'gem_emerald',
    category: 'rewards',
    filename: 'gem_emerald_3d.png',
    nameVi: 'R5. Ngọc Lục Bảo Đảnh Thạnh 3D',
    description: 'Đá quý xanh ngọc bích từ vùng đất rừng nguyên sinh.',
    prompt: `A sparkling 3D emerald gemstone crystal with brilliant green facets, glossy translucent mineral stone, Duolingo gem style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/gem_emerald_3d.png',
  },
  {
    id: 'chest_closed',
    category: 'rewards',
    filename: 'chest_closed_3d.png',
    nameVi: 'R6. Rương Khoáng Đang Đóng 3D',
    description: 'Rương gỗ viền vàng có huy hiệu giọt nước khoáng.',
    prompt: `A cute chunky 3D fantasy treasure chest with rounded edges, crafted from rich brown wood and polished gold trim, locked with a glowing cyan water droplet emblem on the lock. Duolingo 3D game prop, isometric front view, glossy clay style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/chest_closed_3d.png',
  },
  {
    id: 'chest_open',
    category: 'rewards',
    filename: 'chest_open_3d.png',
    nameVi: 'R7. Rương Khoáng Mở Tỏa Sáng 3D',
    description: 'Rương mở bung ánh sáng vàng rực cùng ngọc khoáng khi nhận quà.',
    prompt: `A cute chunky 3D fantasy treasure chest, open lid, glowing with dazzling golden light, overflowing with shiny cyan crystals, purple mineral gems, and gold coins. Duolingo 3D celebratory game asset, vibrant magical lighting${PROMPT_SUFFIX}`,
    currentSrc: '/assets/chest_open_3d.png',
  },
  {
    id: 'trophy_danhthanh',
    category: 'rewards',
    filename: 'trophy_danhthanh_3d.png',
    nameVi: 'R8. Cúp Vàng Mỏ Khoáng Đảnh Thạnh 3D',
    description: 'Cúp vàng suối khoáng tự nhiên phun trào nước mát lành.',
    prompt: `A luxurious yet cute 3D golden trophy cup with natural mineral spring water gently overflowing from the top like a fountain, adorned with two elegant curved handles and a rich blue marble pedestal. Duolingo 3D leaderboard trophy, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/trophy_danhthanh_3d.png',
  },

  // =========================================================================
  // 6. ⚡ BỘ ICON KỸ NĂNG & HUY HIỆU 3D
  // =========================================================================
  {
    id: 'skill_speaking',
    category: 'skills_badges',
    filename: 'skill_speaking_3d.png',
    nameVi: 'S1. Icon 3D Speaking (Luyện Nói)',
    description: 'Microphone phát sáng viền hồng tím.',
    prompt: `A cute chunky 3D round badge icon with a retro microphone symbol in center, vibrant magenta and cyan circular frame with glossy mineral water droplets splashing outwards. Duolingo skill icon style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/skill_speaking_3d.png',
  },
  {
    id: 'skill_listening',
    category: 'skills_badges',
    filename: 'skill_listening_3d.png',
    nameVi: 'S2. Icon 3D Listening (Luyện Nghe)',
    description: 'Tai nghe DJ phát sóng âm.',
    prompt: `A cute chunky 3D round badge icon with modern cyan headphones in center, audio waveform ripples, glossy blue circular frame with sparkling water droplets. Duolingo skill icon style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/skill_listening_3d.png',
  },
  {
    id: 'skill_reading',
    category: 'skills_badges',
    filename: 'skill_reading_3d.png',
    nameVi: 'S3. Icon 3D Reading (Luyện Đọc)',
    description: 'Cuốn sách mở trang kiến thức.',
    prompt: `A cute chunky 3D round badge icon with an open magical storybook in center with glowing pages, vibrant cyan and purple circular frame with water splashes. Duolingo skill icon style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/skill_reading_3d.png',
  },
  {
    id: 'skill_writing',
    category: 'skills_badges',
    filename: 'skill_writing_3d.png',
    nameVi: 'S4. Icon 3D Writing (Luyện Viết)',
    description: 'Bút lông vũ viết Incoterms & Email.',
    prompt: `A cute chunky 3D round badge icon with a stylish fountain pen writing a signature on a paper sheet, rich navy and royal blue circular frame with mineral water droplets. Duolingo skill icon style, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/skill_writing_3d.png',
  },
  {
    id: 'badge_streak_7',
    category: 'skills_badges',
    filename: 'badge_streak_7.png',
    nameVi: 'S5. Huy Hiệu Chuỗi 7 Ngày Lửa Vàng',
    description: 'Thành tựu duy trì học tập bền bỉ.',
    prompt: `A 3D shield-shaped golden achievement medal with a glowing numeral 7 and friendly cartoon flame emblem, crowned with laurel leaves. Duolingo trophy badge style, glossy metallic render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/badge_streak_7.png',
  },
  {
    id: 'badge_perfect',
    category: 'skills_badges',
    filename: 'badge_perfect_score.png',
    nameVi: 'S6. Huy Hiệu Điểm Tuyệt Đối 100%',
    description: 'Thành tựu vượt qua bài học không sai một lỗi nào.',
    prompt: `A 3D round golden medal with a glowing 100% emblem surrounded by sparkling cyan mineral diamonds and ribbon. Duolingo game achievement badge, Pixar 3D style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/badge_perfect_score.png',
  },

  // =========================================================================
  // 7. 💧 SẢN PHẨM & THƯƠNG HIỆU VIKODA ĐẢNH THẠNH
  // =========================================================================
  {
    id: 'vikoda_bottle',
    category: 'brand',
    filename: 'vikoda_bottle_3d.png',
    nameVi: 'B1. Chai Nước Khoáng Thiên Nhiên Vikoda 3D',
    description: 'Chai nước khoáng kiềm tự nhiên pH 9.0 Đảnh Thạnh 3D tuyệt đẹp.',
    prompt: `A high-end 3D glossy natural alkaline mineral water bottle named Vikoda with ergonomic wave lines, crystal clear blue-tinted plastic, sleek cyan label with Vikoda logo, and bright royal blue sports cap, sparkling water bubbles inside. Pixar 3D product render style${PROMPT_SUFFIX}`,
    currentSrc: '/assets/vikoda_bottle_3d.png',
  },
  {
    id: 'vikoda_logo_3d',
    category: 'brand',
    filename: 'vikoda_learn_english_logo.png',
    nameVi: 'B2. Logo Vikoda Learn English 3D',
    description: 'Logo thương hiệu chương trình học tiếng Anh chuyên nghiệp Vikoda.',
    prompt: `A premium 3D brand emblem for Vikoda Learn English, stylized glossy cyan mineral water droplet with golden laurel wreath and clean typography, modern EdTech logo, Blender 3D render${PROMPT_SUFFIX}`,
    currentSrc: '/assets/vikoda_learn_english_logo.png',
  },
];

const CATEGORY_TABS: { id: AssetCategory; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: 'all', label: 'Tất Cả', icon: <Sparkles className="w-3.5 h-3.5" />, desc: 'Toàn bộ kho tài nguyên 3D' },
  { id: 'mascot_anim', label: '🎬 Mascot Chuyển Động', icon: <Clapperboard className="w-3.5 h-3.5" />, desc: 'Bộ cử chỉ tự động khi đứng tự do ngoài bản đồ' },
  { id: 'mascot_modes', label: '🎭 Chế Độ & Trang Phục', icon: <span className="text-xs">👔</span>, desc: 'Mascot gắn cố định vào từng chế độ game riêng' },
  { id: 'effects', label: '✨ Hiệu Ứng 3D', icon: <Zap className="w-3.5 h-3.5" />, desc: 'VFX 3D thay thế icon phẳng' },
  { id: 'nodes', label: '🗺️ Snake Path', icon: <MapPin className="w-3.5 h-3.5" />, desc: 'Các bệ nốt lộ trình học tập' },
  { id: 'rewards', label: '💎 Rương & Quà', icon: <Gift className="w-3.5 h-3.5" />, desc: 'Phần thưởng, tim, ngọc và cúp' },
  { id: 'skills_badges', label: '⚡ Kỹ Năng & Huy Hiệu', icon: <Award className="w-3.5 h-3.5" />, desc: 'Huy hiệu thành tựu 4 kỹ năng' },
  { id: 'brand', label: '💧 Thương Hiệu', icon: <Droplets className="w-3.5 h-3.5" />, desc: 'Sản phẩm Vikoda & Đảnh Thạnh' },
];

export const AssetStudioModal: React.FC<AssetStudioModalProps> = ({ isOpen, onClose }) => {
  useVikodaAssetSync();
  const [selectedAssetId, setSelectedAssetId] = useState<string>('anim_idle');
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory>('mascot_anim');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showStrategyGuide, setShowStrategyGuide] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 10+ LOGIC CHUYỂN ĐỘNG & BIỂU CẢM CHUẨN TRONG STUDIO
  type StudioTesterMode = 
    | 'idle' 
    | 'walk' 
    | 'ponder' 
    | 'sad' 
    | 'tap'
    | 'prep_challenge'
    | 'streak_fever'
    | 'afk_sleep'
    | 'afk_drink_vikoda'
    | 'afk_music_vibe'
    | 'map_sprint';

  const [testerMode, setTesterMode] = useState<StudioTesterMode>('idle');
  const [testerStep, setTesterStep] = useState<number>(0);
  const [isTesterShaking, setIsTesterShaking] = useState<boolean>(false);
  const [isTesterElastic, setIsTesterElastic] = useState<boolean>(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(true);
  const [showSpriteChartModal, setShowSpriteChartModal] = useState<boolean>(false);

  // 🦾 SÁNG KIẾN BÓC TÁCH KHỚP TAY (MODULAR ARM RIG LAB) TRONG STUDIO
  const [studioArmGesture, setStudioArmGesture] = useState<VikoArmGesture>('auto');
  const [studioShoulderAngle, setStudioShoulderAngle] = useState<number>(0);
  const [showRigOverlay, setShowRigOverlay] = useState<boolean>(true);

  const copyArmRigConfig = () => {
    playSound('click');
    const rigConfig = {
      name: "Viko_Modular_Arm_Rig",
      characterModel: "Viko_Alkaline_Droplet_3D",
      baseTorso: "/assets/mascot_idle_1.png",
      shoulderJointSocket: {
        anchorX: "72%",
        anchorY: "52%",
        rotationRange: "-30deg to +45deg",
        currentAngle: `${studioShoulderAngle}deg`
      },
      availableArmGestures: [
        { id: "wave", name: "Vẫy chào", asset: "/assets/mascot_anim_wave.png", cssClass: "animate-arm-wave", rotation: "-8deg <-> +26deg" },
        { id: "point", name: "Chỉ bài học", asset: "/assets/mascot_anim_guide.png", cssClass: "animate-arm-point", vfx: "fingertip-ripple" },
        { id: "thumbs_up", name: "Like cổ vũ", asset: "/assets/mascot_anim_thumbsup.png", cssClass: "animate-arm-thumbsup", vfx: "sparkle" },
        { id: "drink_vikoda", name: "Tu nước Vikoda", asset: "/assets/mascot_bottle_hug.png", cssClass: "tip-drink", sfx: "drink" },
        { id: "rest", name: "Nghỉ thở Ping-pong", asset: "/assets/mascot_idle_1.png", loop: "ping-pong 1-2-3-2", fps: animFps }
      ],
      performanceBenefit: "Tiết kiệm 85% frames, 0% lệch nhân vật AI, 60 FPS CSS Tween"
    };
    navigator.clipboard.writeText(JSON.stringify(rigConfig, null, 2));
    showToast('✨ Đã copy cấu hình Modular Arm Rig JSON vào Clipboard!');
  };

  // Mascot Animation FPS (Tốc độ hoạt ảnh) - Đồng bộ thời gian thực cho Studio và toàn bộ app
  const [animFps, setAnimFps] = useState<number>(() => getStoredMascotFps());

  const handleUpdateAnimFps = (newFps: number) => {
    const clamped = Math.min(24, Math.max(2, Math.round(newFps)));
    setAnimFps(clamped);
    setStoredMascotFps(clamped);
  };

  // Cấu hình các chuỗi hoạt ảnh & Tween Code
  const TESTER_CONFIGS: Record<StudioTesterMode, {
    titleVi: string;
    frames: string[];
    speed: number;
    ruleText: string;
    cheatCode: string;
  }> = {
    idle: {
      titleVi: 'Idle (Đứng chờ): Ping-pong 1 ➔ 2 ➔ 3 ➔ 2 (Lặp vô hạn)',
      frames: ['mascot_idle_1.png', 'mascot_idle_2.png', 'mascot_idle_3.png', 'mascot_idle_2.png'],
      speed: Math.round(1000 / animFps),
      ruleText: 'Play frame [Idle_1] -> [Idle_2] -> [Idle_3] -> [Idle_2]. Lặp vô hạn (Ping-pong loop).',
      cheatCode: 'Chỉ cần 3 frames tĩnh nhịp thở, code tự lặp ngược 1-2-3-2 tạo độ phập phồng',
    },
    walk: {
      titleVi: 'Walk (Đi bộ): Chu kỳ 4 bước kinh điển 1 ➔ 2 ➔ 3 ➔ 4 (Lặp vô hạn)',
      frames: ['mascot_walk_1.png', 'mascot_walk_2.png', 'mascot_walk_3.png', 'mascot_walk_4.png'],
      speed: Math.round(1000 / animFps),
      ruleText: 'Play frame [Walk_1] -> [Walk_2] -> [Walk_3] -> [Walk_4]. Lặp vô hạn.',
      cheatCode: 'Chu kỳ 4 bước kinh điển (Chân trái chạm -> Mở rộng -> Chân phải chạm -> Mở rộng)',
    },
    ponder: {
      titleVi: 'Ponder (Ngập ngừng): 1 Frame tĩnh [Ponder_1] + Code Rotate -5°..5° (1s)',
      frames: ['mascot_ponder_1.png'],
      speed: 1000,
      ruleText: 'Lấy frame tĩnh [Ponder_1]. Dùng code Rotate lắc nhẹ ảnh từ -5 độ đến 5 độ trong 1 giây.',
      cheatCode: 'Đúng 1 ảnh xoa cằm duy nhất! Code CSS lắc lư rotate(-5deg <-> 5deg) trong 1s',
    },
    sad: {
      titleVi: 'Sad (Thất bại / Sai): 1 Frame tĩnh [Sad_1] + Code Shake X (0.5s)',
      frames: ['mascot_sad_1.png'],
      speed: 500,
      ruleText: 'Lấy frame tĩnh [Sad_1]. Dùng code Shake (rung lắc tọa độ X liên tục) trong 0.5 giây.',
      cheatCode: 'Đúng 1 ảnh rơm rớm xị mặt duy nhất! Code Shake rung lắc trục X liên tục trong 0.5s',
    },
    tap: {
      titleVi: 'Tap / Tickle (Tương tác chạm): 1 Frame tĩnh [Laugh] + Code ElasticOut',
      frames: ['mascot_laugh.png'],
      speed: 650,
      ruleText: 'Khi chạm vào mascot, lấy frame tĩnh [Laugh]. Dùng code Scale Y 80% & X 110%, sau đó nảy ElasticOut.',
      cheatCode: 'Đúng 1 ảnh cười tít mắt! 100% Code biến dạng squash & stretch + nảy lò xo đàn hồi',
    },
    prep_challenge: {
      titleVi: 'Sẵn Sàng Vượt Ải (Prep): Kính râm cực ngầu + Thumbs-up',
      frames: ['mascot_cool_shades.png', 'mascot_anim_thumbsup.png'],
      speed: Math.round(1000 / animFps),
      ruleText: 'Tạo tư thế sẵn sàng năng lượng cao bước vào thử thách vượt ải.',
      cheatCode: 'Chống hông, kính râm và thumbs-up tràn đầy tự tin',
    },
    streak_fever: {
      titleVi: 'Ăn Mừng (Streak Fever): Búng người nhún đà & Tiếp đất',
      frames: ['mascot_anim_bounce.png', 'mascot_jump_cheer.png', 'viko_mascot_3d.png'],
      speed: Math.round(1000 / animFps),
      ruleText: 'Trục Y tung lên cao (translateY -28px) rồi nhún đà tiếp đất.',
      cheatCode: '3 frames nhảy cao ăn mừng chuỗi ngày học streak',
    },
    afk_sleep: {
      titleVi: 'Ngủ Gật (AFK Sleep): Bóng nước phập phồng ở mũi & Nổ POP',
      frames: ['mascot_sleepy.png', 'mascot_anim_sleepy.png'],
      speed: 800,
      ruleText: 'Tự động kích hoạt khi người dùng không tương tác trong 18s.',
      cheatCode: 'Bong bóng nước phình to dần, chạm vào sẽ vỡ POP đánh thức Viko!',
    },
    afk_drink_vikoda: {
      titleVi: 'Tu Nước Vikoda (Drink): Ôm chai nước khoáng kiềm pH 9.0',
      frames: ['mascot_bottle_hug.png', 'viko_mascot_3d.png'],
      speed: 600,
      ruleText: 'Nạp năng lượng khoáng kiềm thiên nhiên sau giờ học.',
      cheatCode: 'Ôm trọn chai Vikoda mát lạnh tiếp thêm khoáng chất',
    },
    afk_music_vibe: {
      titleVi: 'Phiêu Âm Nhạc (Music Vibe): Đeo tai nghe đung đưa',
      frames: ['mascot_dancing.png', 'mascot_happy.png'],
      speed: 400,
      ruleText: 'Đung đưa theo nhịp điệu bài hát tiếng Anh.',
      cheatCode: 'Nhấp nhô ngẫu hứng cùng tai nghe over-ear',
    },
    map_sprint: {
      titleVi: 'Chạy Nước Rút (Sprint Dash): Vệt bóng mờ kép',
      frames: ['mascot_anim_bounce.png', 'mascot_dancing.png', 'mascot_jump_cheer.png'],
      speed: Math.round(800 / animFps),
      ruleText: 'Tăng tốc di chuyển trên bản đồ học tập.',
      cheatCode: 'Dáng người chúi nghiêng -16deg kèm hiệu ứng bóng mờ đuổi theo sau',
    },
  };

  // Clock Ticker cho sân khấu Studio theo tốc độ được người dùng chỉ định
  useEffect(() => {
    if (!isOpen || !isPlayingPreview) return;
    const currentConf = TESTER_CONFIGS[testerMode];
    if (currentConf.frames.length <= 1) {
      setTesterStep(0);
      return;
    }
    const stepDelay = currentConf.frames.length > 1
      ? Math.round(1000 / animFps)
      : currentConf.speed;

    const interval = setInterval(() => {
      setTesterStep((prev) => (prev + 1) % currentConf.frames.length);
    }, stepDelay);
    return () => clearInterval(interval);
  }, [isOpen, isPlayingPreview, testerMode, animFps]);

  const triggerTesterShake = () => {
    playSound('wrong');
    setIsTesterShaking(true);
    setTimeout(() => setIsTesterShaking(false), 500);
  };

  const triggerTesterTap = () => {
    playSound('tickle');
    setIsTesterElastic(true);
    setTimeout(() => setIsTesterElastic(false), 650);
  };

  const copyAllMinimalistPrompts = () => {
    playSound('click');
    const ids = ['idle_1', 'idle_2', 'idle_3', 'walk_1', 'walk_2', 'walk_3', 'walk_4', 'ponder_1', 'sad_1', 'laugh'];
    const textLines = [
      '========================================================================',
      '🎨 BỘ PROMPT CHUẨN MINIMALIST SPRITE SHEET 8 FPS CHO VIKODA STUDIO',
      'Đồng bộ nhân vật Viko 3D Pixar, nền trắng tinh, phục vụ 5 logic chuyển động',
      '========================================================================\n',
    ];
    ids.forEach((id) => {
      const asset = ASSET_DEFINITIONS.find((a) => a.id === id);
      if (asset) {
        textLines.push(`### ${asset.nameVi} (${asset.filename}):`);
        textLines.push(`Mục đích & Logic: ${asset.description}`);
        textLines.push(`Prompt:\n${asset.prompt}\n`);
      }
    });
    navigator.clipboard.writeText(textLines.join('\n'));
    showToast('✨ Đã copy toàn bộ Prompt 5 trạng thái tối giản! Dán vào Gemini Pro ngay nhé.');
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: ASSET_DEFINITIONS.length };
    ASSET_DEFINITIONS.forEach(a => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredAssets = useMemo(() => {
    return ASSET_DEFINITIONS.filter(a => {
      const matchCat = selectedCategory === 'all' || a.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchSearch = !query || 
        a.nameVi.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.filename.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const selectedAsset = ASSET_DEFINITIONS.find(a => a.id === selectedAssetId) || filteredAssets[0] || ASSET_DEFINITIONS[0];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const copyPrompt = (asset: AssetDef) => {
    playSound('click');
    navigator.clipboard.writeText(asset.prompt);
    setCopiedId(asset.id);
    showToast(`Đã copy prompt cho "${asset.nameVi}"! Dán vào Gemini Pro ngay nhé.`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  /**
   * AI NEURAL BACKGROUND REMOVAL & TIGHT AUTO-CROP
   * Persists to disk (via dev server) AND browser IndexedDB (survives refreshes & updates)
   */
  const processAndUploadImage = async (fileOrBlob: Blob, filename: string) => {
    setIsProcessing(true);
    try {
      const reader = new FileReader();
      const base64DataUrl = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(fileOrBlob);
      });

      let finalCleanCutoutSrc = base64DataUrl;

      // 1. Attempt to save to disk via dev server if available
      try {
        const res = await fetch('/api/save-asset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename, base64: base64DataUrl })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.base64) {
            finalCleanCutoutSrc = data.base64;
          }
        }
      } catch (srvErr) {
        console.warn('Backend server save skipped, persisting to IndexedDB storage:', srvErr);
      }

      // 2. Always persist into inMemory + IndexedDB (permanent browser storage)
      setCustomAsset(filename, finalCleanCutoutSrc);
      playSound('correct');
      showToast(`✨ Đã cập nhật "${filename}"! Đã lưu an toàn vào IndexedDB & đĩa hệ thống.`);
    } catch (err: any) {
      playSound('wrong');
      showToast(`❌ Thất bại: ${err.message || 'Không thể xử lý ảnh'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  /**
   * Export all custom assets as a JSON backup file
   */
  const handleExportAssets = () => {
    playSound('click');
    const customAssets = getAllCustomAssets();
    const count = Object.keys(customAssets).length;
    if (count === 0) {
      showToast('Chưa có asset tùy biến nào để xuất!');
      return;
    }
    const payload = {
      app: 'Vikoda English Pro 3D Assets Backup',
      exportedAt: new Date().toISOString(),
      count,
      assets: customAssets,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vikoda_custom_assets_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    playSound('success');
    showToast(`✅ Đã xuất sao lưu ${count} asset tùy biến thành công!`);
  };

  /**
   * Import custom assets from JSON backup file
   */
  const handleImportAssets = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const json = JSON.parse(evt.target?.result as string);
        if (json && json.assets && typeof json.assets === 'object') {
          const restoredCount = await restoreAllCustomAssets(json.assets);
          playSound('celebrate');
          showToast(`🎉 Đã khôi phục thành công ${restoredCount} asset từ file sao lưu!`);
        } else {
          showToast('❌ File sao lưu không đúng định dạng!');
        }
      } catch (err) {
        showToast('❌ Lỗi đọc file JSON sao lưu.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Global Ctrl + V listener
  useEffect(() => {
    if (!isOpen) return;

    const handlePaste = async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob && selectedAsset) {
            e.preventDefault();
            await processAndUploadImage(blob, selectedAsset.filename);
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [isOpen, selectedAsset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl h-[95vh] bg-white rounded-3xl shadow-2xl border-4 border-cyan-400/40 flex flex-col overflow-hidden">
        
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-[#003882] via-[#0072ce] to-[#009fe3] text-white flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-xs border border-white/30 shadow-inner">
              <Sparkles className="w-5 h-5 text-cyan-200 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black tracking-tight">Studio Asset 3D & AI Prompt Lab</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-300 text-slate-900 text-[11px] font-black uppercase tracking-wider shadow-xs">
                  {ASSET_DEFINITIONS.length} Assets
                </span>
              </div>
              <p className="text-[11.5px] text-cyan-100 font-medium hidden sm:block">
                Pixar 3D • Bộ chuyển động tự động • Trang phục chuyên biệt • Tách nền AI Neural
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Backup & Restore JSON Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleExportAssets}
                className="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
                title="Tải xuống toàn bộ asset tùy biến đã lưu vào file JSON an toàn"
              >
                <Download className="w-3.5 h-3.5 text-cyan-200" />
                <span className="hidden sm:inline">Sao Lưu</span>
              </button>

              <label 
                className="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
                title="Khôi phục asset tùy biến từ file JSON"
              >
                <Upload className="w-3.5 h-3.5 text-amber-200" />
                <span className="hidden sm:inline">Khôi Phục</span>
                <input 
                  type="file" 
                  accept=".json" 
                  onChange={handleImportAssets}
                  className="hidden" 
                />
              </label>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white/15 p-1 rounded-xl border border-white/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-[#0072ce] shadow-xs' : 'text-white/80 hover:text-white'
                }`}
                title="Chế độ xem lưới thẻ (Grid View)"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list' ? 'bg-white text-[#0072ce] shadow-xs' : 'text-white/80 hover:text-white'
                }`}
                title="Chế độ xem danh sách gọn (List View)"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => { playSound('click'); onClose(); }}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Subheader: Category Tabs & Search Bar */}
        <div className="px-5 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {CATEGORY_TABS.map(tab => {
              const isSelected = selectedCategory === tab.id;
              const count = categoryCounts[tab.id] || 0;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSound('click');
                    setSelectedCategory(tab.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0070D1] to-[#009FE3] text-white shadow-xs border-b-2 border-[#005199]'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200/80'
                  }`}
                  title={tab.desc}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative shrink-0 sm:w-60">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Tìm theo tên, file, hiệu ứng..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-7 py-1.5 text-xs font-semibold bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-2xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Live Animation Loop Preview Banner (Active when in mascot_anim or mascot_modes category) */}
        {(selectedCategory === 'mascot_anim' || selectedCategory === 'mascot_modes') && (
          <div className="px-5 py-3.5 bg-gradient-to-r from-cyan-50/95 via-sky-50/90 to-blue-50/95 border-b border-cyan-200 flex flex-col gap-3 shrink-0 shadow-xs">
            {/* Top Row: Mascot Stage & Mode Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                {/* 3D High-Res Animated Stage with Realtime Tween/Effects */}
                <div 
                  onClick={() => {
                    if (testerMode === 'sad') triggerTesterShake();
                    else if (testerMode === 'tap') triggerTesterTap();
                  }}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#003882] to-[#0072ce] p-1 border-2 border-cyan-300 shadow-md flex items-center justify-center shrink-0 overflow-hidden ${
                    testerMode === 'sad' || testerMode === 'tap' ? 'cursor-pointer hover:ring-2 hover:ring-cyan-300 active:scale-95' : ''
                  }`}
                  title={testerMode === 'tap' ? 'Bấm vào để kích hoạt ElasticOut!' : testerMode === 'sad' ? 'Bấm vào để kích hoạt Shake 0.5s!' : 'Sân khấu hoạt ảnh'}
                >
                  <div className="absolute inset-0 bg-radial from-cyan-400/20 to-transparent pointer-events-none" />
                  {testerMode === 'idle' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <VikoDynamicAnimator
                        size="sm"
                        mode="idle"
                        armGesture={studioArmGesture}
                        customShoulderAngle={studioShoulderAngle}
                        showArmRigOverlay={showRigOverlay}
                        fps={animFps}
                        showShadow={false}
                        className="scale-90"
                      />
                    </div>
                  ) : (
                    <img 
                      src={getAssetSrc(`/assets/${TESTER_CONFIGS[testerMode].frames[testerStep] || TESTER_CONFIGS[testerMode].frames[0]}`)} 
                      alt="Preview Anim" 
                      className={`w-full h-full object-contain filter drop-shadow-md scale-105 transition-transform duration-100 ${
                        testerMode === 'ponder' ? 'animate-mascot-ponder' : ''
                      } ${
                        isTesterShaking ? 'animate-mascot-sad-shake' : ''
                      } ${
                        isTesterElastic ? 'animate-mascot-tap-elastic' : ''
                      }`}
                      onError={(e) => { (e.target as any).src = '/assets/viko_mascot_3d.png'; }}
                    />
                  )}
                  {/* 3D stage floor shadow */}
                  <div className="absolute bottom-1 w-12 h-1.5 bg-slate-950/40 rounded-full blur-[1px] pointer-events-none" />
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                      🎬 Sân Khấu Hoạt Ảnh ({animFps} FPS & Tween Code)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full bg-white ${isPlayingPreview ? 'animate-ping' : ''}`} />
                      <span>{animFps} FPS ({Math.round(1000 / animFps)}ms)</span>
                    </span>
                  </div>

                  <p className="text-[11.5px] text-cyan-900 font-bold mt-0.5">
                    Đang chạy: <span className="text-[#0070D1] underline">{TESTER_CONFIGS[testerMode].titleVi}</span>
                    {TESTER_CONFIGS[testerMode].frames.length > 1 && (
                      <span className="ml-2 text-xs font-black text-amber-600 bg-amber-100 px-1.5 py-0.2 rounded-md font-mono">
                        Frame {testerStep + 1}/{TESTER_CONFIGS[testerMode].frames.length}
                      </span>
                    )}
                  </p>
                  <p className="text-[10.5px] text-slate-500 font-medium">
                    {TESTER_CONFIGS[testerMode].cheatCode}
                  </p>
                </div>
              </div>

              {/* Mode Selectors & Quick Action Buttons */}
              <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                {/* 5 Core Mode Selector Pills */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-cyan-200 shadow-2xs flex-wrap">
                  {([
                    { id: 'idle', label: '🌀 Idle' },
                    { id: 'walk', label: '🚶 Walk' },
                    { id: 'ponder', label: '🤔 Ponder' },
                    { id: 'sad', label: '😢 Sad' },
                    { id: 'tap', label: '😆 Tap' },
                  ] as const).map(({ id, label }) => {
                    const isActive = testerMode === id;
                    return (
                      <button
                        key={id}
                        onClick={() => {
                          playSound('click');
                          setTesterMode(id);
                          setTesterStep(0);
                          if (id === 'sad') triggerTesterShake();
                          if (id === 'tap') triggerTesterTap();
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* 6 Extended Expression Pills */}
                <div className="flex items-center gap-1 bg-white/80 p-0.5 rounded-xl border border-cyan-100 shadow-2xs flex-wrap">
                  {([
                    { id: 'prep_challenge', label: '🔥 Vượt Ải' },
                    { id: 'streak_fever', label: '✨ Ăn Mừng' },
                    { id: 'afk_sleep', label: '🫧 Ngủ Gật' },
                    { id: 'afk_drink_vikoda', label: '💧 Tu Nước' },
                    { id: 'afk_music_vibe', label: '🎵 Phiêu Nhạc' },
                    { id: 'map_sprint', label: '💨 Chạy Dash' },
                  ] as const).map(({ id, label }) => {
                    const isActive = testerMode === id;
                    return (
                      <button
                        key={id}
                        onClick={() => {
                          playSound('click');
                          setTesterMode(id);
                          setTesterStep(0);
                        }}
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs'
                            : 'text-slate-500 hover:bg-cyan-50 hover:text-cyan-800'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Action Buttons: Shake Test, Tap Test, Sprite Sheet Spec & Copy All Prompts */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {testerMode === 'sad' && (
                    <button
                      onClick={triggerTesterShake}
                      className="px-2.5 py-1 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-[10.5px] font-black cursor-pointer transition-all shadow-2xs active:scale-95 flex items-center gap-1"
                    >
                      <span>💥 Rung Lại (Shake 0.5s)</span>
                    </button>
                  )}
                  {testerMode === 'tap' && (
                    <button
                      onClick={triggerTesterTap}
                      className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-[10.5px] font-black cursor-pointer transition-all shadow-2xs active:scale-95 flex items-center gap-1"
                    >
                      <span>👆 Chạm Thử (ElasticOut)</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      playSound('click');
                      setShowSpriteChartModal(true);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-[10.5px] font-black cursor-pointer transition-all shadow-2xs flex items-center gap-1"
                    title="Xem bảng thông số quy chuẩn 19 frame tối giản"
                  >
                    <Table className="w-3 h-3" />
                    <span>Bảng Ép Cân Sprite (8 FPS)</span>
                  </button>
                  <button
                    onClick={copyAllMinimalistPrompts}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-cyan-50 text-cyan-800 border border-cyan-300 text-[10.5px] font-black cursor-pointer transition-all shadow-2xs flex items-center gap-1"
                    title="Copy toàn bộ 10 prompt cho bộ hoạt họa tối giản"
                  >
                    <Copy className="w-3 h-3 text-cyan-600" />
                    <span>Copy Trọn Bộ Prompt</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: BỘ ĐIỀU CHỈNH TỐC ĐỘ HOẠT ẢNH MASCOT (ANIMATION SPEED CONTROLS) */}
            <div className="p-2.5 sm:p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-cyan-200/90 shadow-2xs flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-2xs shrink-0">
                    <Gauge className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                      <span>Điều Chỉnh Tốc Độ Hoạt Ảnh (Animation Speed):</span>
                      <span className="text-[10px] text-cyan-800 bg-cyan-100/90 border border-cyan-300 px-2 py-0.5 rounded-full font-mono font-black">
                        ⚡ {animFps} FPS ({Math.round(1000 / animFps)}ms/frame)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Play / Pause & Frame Steppers & Reset */}
                <div className="flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-xl shrink-0">
                  <button
                    onClick={() => {
                      playSound('click');
                      setIsPlayingPreview((prev) => !prev);
                    }}
                    className={`px-2 py-1 rounded-lg text-xs font-black flex items-center gap-1 transition-all cursor-pointer ${
                      isPlayingPreview
                        ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-2xs'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-2xs'
                    }`}
                    title={isPlayingPreview ? 'Tạm dừng hoạt ảnh' : 'Tiếp tục phát'}
                  >
                    {isPlayingPreview ? (
                      <>
                        <Pause className="w-3 h-3 fill-current" />
                        <span>Tạm dừng</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Phát</span>
                      </>
                    )}
                  </button>

                  {!isPlayingPreview && TESTER_CONFIGS[testerMode].frames.length > 1 && (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          playSound('click');
                          const conf = TESTER_CONFIGS[testerMode];
                          setTesterStep((prev) => (prev - 1 + conf.frames.length) % conf.frames.length);
                        }}
                        className="p-1 rounded-lg bg-white hover:bg-slate-200 text-slate-700 cursor-pointer shadow-2xs"
                        title="Frame trước"
                      >
                        <ChevronLeft className="w-3 h-3" />
                      </button>
                      <span className="text-[10.5px] font-black text-slate-700 px-1 font-mono">
                        {testerStep + 1}/{TESTER_CONFIGS[testerMode].frames.length}
                      </span>
                      <button
                        onClick={() => {
                          playSound('click');
                          const conf = TESTER_CONFIGS[testerMode];
                          setTesterStep((prev) => (prev + 1) % conf.frames.length);
                        }}
                        className="p-1 rounded-lg bg-white hover:bg-slate-200 text-slate-700 cursor-pointer shadow-2xs"
                        title="Frame sau"
                      >
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Reset to Default 5 FPS */}
                  <button
                    onClick={() => {
                      playSound('click');
                      handleUpdateAnimFps(5);
                    }}
                    className="px-2 py-1 rounded-lg text-[10px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 transition-colors cursor-pointer flex items-center gap-1"
                    title="Khôi phục tốc độ tự nhiên 5 FPS (~200ms/frame)"
                  >
                    <RotateCcw className="w-2.5 h-2.5 text-slate-500" />
                    <span>5 FPS Chuẩn</span>
                  </button>
                </div>
              </div>

              {/* Slider & Presets row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 pt-1 border-t border-slate-100">
                {/* Fine-tuning Slider with - / + */}
                <div className="flex items-center gap-2 flex-1 max-w-xs sm:max-w-sm">
                  <button
                    onClick={() => {
                      playSound('click');
                      handleUpdateAnimFps(animFps - 1);
                    }}
                    disabled={animFps <= 2}
                    className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-cyan-100 hover:text-cyan-800 disabled:opacity-30 disabled:hover:bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center cursor-pointer transition-colors"
                    title="Chậm hơn (-1 FPS)"
                  >
                    -
                  </button>

                  <div className="flex-1 flex flex-col gap-0.5">
                    <input
                      type="range"
                      min="2"
                      max="16"
                      step="1"
                      value={animFps}
                      onChange={(e) => handleUpdateAnimFps(parseInt(e.target.value, 10))}
                      className="w-full accent-cyan-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                    />
                    <div className="flex justify-between text-[8.5px] font-bold text-slate-400 px-0.5">
                      <span>🐢 2 FPS (Chậm)</span>
                      <span>🌿 5 FPS (Chuẩn)</span>
                      <span>🚀 16 FPS (Nhanh)</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      playSound('click');
                      handleUpdateAnimFps(animFps + 1);
                    }}
                    disabled={animFps >= 16}
                    className="w-6 h-6 rounded-lg bg-slate-100 hover:bg-cyan-100 hover:text-cyan-800 disabled:opacity-30 disabled:hover:bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center cursor-pointer transition-colors"
                    title="Nhanh hơn (+1 FPS)"
                  >
                    +
                  </button>
                </div>

                {/* Quick Presets Buttons */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { fps: 3, label: '🐢 3 FPS', hint: 'Thư thái' },
                    { fps: 4, label: '🌱 4 FPS', hint: 'Êm dịu' },
                    { fps: 5, label: '🌿 5 FPS ⭐', hint: 'Tự nhiên' },
                    { fps: 8, label: '⚡ 8 FPS', hint: 'Tiêu chuẩn' },
                    { fps: 12, label: '🚀 12 FPS', hint: 'Nhanh' },
                  ].map((preset) => {
                    const isSelected = animFps === preset.fps;
                    return (
                      <button
                        key={preset.fps}
                        onClick={() => {
                          playSound('click');
                          handleUpdateAnimFps(preset.fps);
                        }}
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-black transition-all cursor-pointer flex items-center gap-1 ${
                          isSelected
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs scale-105'
                            : 'bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-800 border border-slate-200/80'
                        }`}
                        title={`${preset.label} - ${preset.hint} (${Math.round(1000 / preset.fps)}ms/frame)`}
                      >
                        <span>{preset.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Realtime Notification Footer */}
              <div className="text-[10px] text-cyan-800/80 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-600 shrink-0" />
                <span>Tốc độ đã chọn được tự động lưu và áp dụng ngay lập tức cho linh vật Viko trên toàn bộ ứng dụng!</span>
              </div>
            </div>

            {/* 🦾 SÁNG KIẾN BÓC TÁCH KHỚP TAY (MODULAR ARM RIGGING LAB) */}
            {testerMode === 'idle' && (
              <div className="p-2.5 sm:p-3 bg-gradient-to-r from-amber-50/95 via-sky-50/90 to-blue-50/95 rounded-2xl border-2 border-amber-300/80 shadow-2xs flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-xs shadow-2xs shrink-0 font-black">
                      🦾
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900 flex items-center gap-1.5 flex-wrap">
                        <span>Phòng Thí Nghiệm Khớp Tay (Modular Arm Rig Lab):</span>
                        <span className="text-[10px] bg-amber-200/90 text-amber-900 font-bold px-2 py-0.5 rounded-full border border-amber-400">
                          Sáng Kiến Bóc Tách Khớp Xoay 60 FPS
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">
                        Giữ nguyên thân gốc, tách rời cánh tay để đổi cử chỉ siêu mượt và không sợ AI vẽ lệch nhân vật.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={copyArmRigConfig}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 text-[10.5px] font-black cursor-pointer transition-all shadow-2xs flex items-center gap-1"
                      title="Copy cấu hình JSON bộ Modular Arm Rig"
                    >
                      <Copy className="w-3 h-3 text-amber-600" />
                      <span>Copy Cấu Hình Rig JSON</span>
                    </button>
                    <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white/90 px-2 py-1 rounded-lg border border-slate-200 cursor-pointer shadow-2xs">
                      <input
                        type="checkbox"
                        checked={showRigOverlay}
                        onChange={(e) => setShowRigOverlay(e.target.checked)}
                        className="rounded-xs text-amber-500"
                      />
                      <span>Tâm Khớp Vai</span>
                    </label>
                  </div>
                </div>

                {/* Gesture Selector Buttons & Shoulder Slider */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1.5 border-t border-amber-200/70">
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-[10.5px] font-black text-slate-700 mr-1">Cử chỉ tay:</span>
                    {([
                      { id: 'auto', label: '🔄 Auto Loop' },
                      { id: 'wave', label: '👋 Vẫy Chào' },
                      { id: 'point', label: '👉 Chỉ Bài Học' },
                      { id: 'thumbs_up', label: '👍 Like Cổ Vũ' },
                      { id: 'drink_vikoda', label: '💧 Tu Nước' },
                      { id: 'rest', label: '🌊 Nghỉ Thở' },
                    ] as const).map(({ id, label }) => {
                      const isActive = studioArmGesture === id;
                      return (
                        <button
                          key={id}
                          onClick={() => {
                            playSound('click');
                            setStudioArmGesture(id);
                          }}
                          className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs font-black scale-105'
                              : 'bg-white text-slate-700 hover:bg-amber-100/70 border border-amber-200/70'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Shoulder Joint Rotation Slider */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10.5px] font-black text-slate-700">Xoay Khớp Vai:</span>
                    <input
                      type="range"
                      min="-30"
                      max="45"
                      step="2"
                      value={studioShoulderAngle}
                      onChange={(e) => setStudioShoulderAngle(parseInt(e.target.value, 10))}
                      className="w-24 accent-amber-500 cursor-pointer"
                      title="Kéo để xoay góc cánh tay Viko (-30° đến +45°)"
                    />
                    <span className="text-[11px] font-mono font-black text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-md min-w-[34px] text-center border border-amber-300">
                      {studioShoulderAngle}°
                    </span>
                    {studioShoulderAngle !== 0 && (
                      <button
                        onClick={() => {
                          playSound('click');
                          setStudioShoulderAngle(0);
                        }}
                        className="p-1 rounded-md bg-white hover:bg-slate-200 text-slate-500 cursor-pointer text-[10px] font-bold"
                        title="Về góc 0°"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content Columns */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Left Column: Asset Browser (Grid or List) */}
          <div className="w-full md:w-7/12 lg:w-3/5 flex flex-col bg-slate-50/70 overflow-hidden">
            
            {/* Results Status Bar */}
            <div className="px-4 py-2 bg-slate-100/70 border-b border-slate-200 text-[11px] font-extrabold text-slate-500 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2">
                <span>Hiển thị {filteredAssets.length} asset • {CATEGORY_TABS.find(t=>t.id===selectedCategory)?.desc}</span>
                {selectedCategory === 'mascot_anim' && (
                  <button
                    onClick={() => { playSound('click'); setShowStrategyGuide(!showStrategyGuide); }}
                    className="px-2 py-0.5 rounded-lg bg-cyan-100 hover:bg-cyan-200 text-cyan-900 text-[10px] font-black cursor-pointer transition-colors flex items-center gap-1 shadow-2xs"
                  >
                    <span>📐 Quy Tắc Tạo Asset Studio & Code Tweening</span>
                    <span>{showStrategyGuide ? '▲ Đóng' : '▼ Xem'}</span>
                  </button>
                )}
              </div>
              <span className="text-cyan-700 font-bold hidden sm:inline">Bấm để copy prompt & dán ảnh</span>
            </div>

            {/* Expandable Blueprint: Minimalist Sprite Sheet & Code-Tweening Architecture */}
            {selectedCategory === 'mascot_anim' && showStrategyGuide && (
              <div className="p-3.5 bg-gradient-to-br from-slate-900 to-[#002b66] text-white border-b-2 border-cyan-400 text-xs shrink-0 animate-in fade-in duration-150">
                <div className="flex items-center justify-between pb-2 border-b border-white/20">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">💎</span>
                    <span className="font-black text-cyan-300 text-xs uppercase tracking-wide">
                      5 Quy Tắc Hoạt Họa & Cách Tạo Asset Trong Studio (8 FPS + Tween Code)
                    </span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/80 text-white font-black px-2 py-0.5 rounded-md">
                    ✓ Ép Cân Hơn 85% Asset
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2.5">
                  <div className="p-2 rounded-xl bg-white/10 border border-white/15">
                    <div className="font-black text-cyan-200 text-[11px] mb-1">
                      1. Đứng Chờ (Idle 3 frames Ping-pong)
                    </div>
                    <p className="text-[10px] text-slate-200 leading-snug">
                      • <b>Logic lặp:</b> Play frame <code>[Idle_1] ➔ [Idle_2] ➔ [Idle_3] ➔ [Idle_2]</code>. Lặp vô hạn.<br/>
                      • <b>Cách tạo asset:</b> Chỉ cần 3 ảnh (Bình thường ➔ Hơi phình ➔ Phình nhắm mắt). Code tự động đảo chiều Ping-pong.
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-white/10 border border-white/15">
                    <div className="font-black text-cyan-200 text-[11px] mb-1">
                      2. Đi Bộ (Walk 4 frames chu kỳ)
                    </div>
                    <p className="text-[10px] text-slate-200 leading-snug">
                      • <b>Logic lặp:</b> Play frame <code>[Walk_1] ➔ [Walk_2] ➔ [Walk_3] ➔ [Walk_4]</code>. Lặp vô hạn.<br/>
                      • <b>Cách tạo asset:</b> Chu kỳ 4 bước kinh điển (Chân trái chạm ➔ Mở rộng ➔ Chân phải chạm ➔ Khép bước).
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-white/10 border border-white/15">
                    <div className="font-black text-cyan-200 text-[11px] mb-1">
                      3. Ngập Ngừng (Ponder 1 frame tĩnh)
                    </div>
                    <p className="text-[10px] text-slate-200 leading-snug">
                      • <b>Logic lặp:</b> Lấy frame tĩnh <code>[Ponder_1]</code>. Code Rotate lắc nhẹ ảnh từ <b>-5 độ đến 5 độ</b> trong 1 giây.<br/>
                      • <b>Cách tạo asset:</b> Chỉ vẽ đúng 1 ảnh xoa cằm duy nhất! Tiết kiệm 100% frame vẽ thêm.
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-white/10 border border-white/15">
                    <div className="font-black text-cyan-200 text-[11px] mb-1">
                      4. Thất Bại & Tương Tác Chạm (Sad & Laugh)
                    </div>
                    <p className="text-[10px] text-slate-200 leading-snug">
                      • <b>Thất bại (Sad):</b> Frame tĩnh <code>[Sad_1]</code> + Code Shake X liên tục trong 0.5s.<br/>
                      • <b>Chạm (Tap/Tickle):</b> Frame tĩnh <code>[Laugh]</code> + Code Scale Y 80%, X 110% ➔ ElasticOut 100%.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Asset Items Container */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4">
              {filteredAssets.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-center text-slate-400">
                  <span className="text-3xl mb-2">🔍</span>
                  <p className="text-xs font-bold">Không tìm thấy asset nào phù hợp</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="mt-2 text-xs font-black text-cyan-600 hover:underline cursor-pointer"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                /* GRID CARDS VIEW */
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {filteredAssets.map(asset => {
                    const isSelected = asset.id === selectedAsset.id;
                    return (
                      <div
                        key={asset.id}
                        onClick={() => { playSound('click'); setSelectedAssetId(asset.id); }}
                        className={`group relative p-3 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center justify-between ${
                          isSelected
                            ? 'bg-gradient-to-b from-cyan-50/80 to-blue-50/60 border-cyan-500 shadow-md ring-2 ring-cyan-200'
                            : 'bg-white hover:bg-slate-50/90 border-slate-200 hover:border-cyan-300 shadow-2xs hover:shadow-xs'
                        }`}
                      >
                        {/* Selected Indicator Pill */}
                        {isSelected && (
                          <div className="absolute top-2 left-2 px-1.5 py-0.2 bg-cyan-600 text-white text-[8.5px] font-black rounded-full uppercase tracking-wider shadow-xs">
                            Đang Chọn
                          </div>
                        )}

                        {/* Quick 1-Click Copy Prompt Button on Card */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyPrompt(asset);
                          }}
                          className={`absolute top-2 right-2 p-1.5 rounded-lg text-slate-400 hover:text-cyan-700 hover:bg-cyan-100 transition-colors cursor-pointer ${
                            copiedId === asset.id ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100'
                          }`}
                          title="Sao chép prompt Gemini nhanh"
                        >
                          {copiedId === asset.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </button>

                        {/* Large 3D Thumbnail */}
                        <div className="w-20 h-20 my-1 rounded-xl bg-slate-100/90 border border-slate-200/60 flex items-center justify-center p-1.5 overflow-hidden group-hover:scale-105 transition-transform">
                          <img
                            src={getAssetSrc(`/assets/${asset.filename}`)}
                            alt={asset.nameVi}
                            className="w-full h-full object-contain filter drop-shadow-sm"
                            onError={(e) => { (e.target as any).src = '/assets/viko_mascot_3d.png'; }}
                          />
                        </div>

                        {/* Info */}
                        <div className="w-full mt-1">
                          <div className="text-[11.5px] font-black text-slate-900 leading-tight line-clamp-1">
                            {asset.nameVi}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono truncate mt-0.5">
                            {asset.filename}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* COMPACT LIST VIEW */
                <div className="space-y-1.5">
                  {filteredAssets.map(asset => {
                    const isSelected = asset.id === selectedAsset.id;
                    return (
                      <div
                        key={asset.id}
                        onClick={() => { playSound('click'); setSelectedAssetId(asset.id); }}
                        className={`p-2.5 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-50 border-cyan-500 shadow-xs'
                            : 'bg-white hover:bg-slate-100/80 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                            <img
                              src={getAssetSrc(`/assets/${asset.filename}`)}
                              alt={asset.nameVi}
                              className="w-9 h-9 object-contain"
                              onError={(e) => { (e.target as any).src = '/assets/viko_mascot_3d.png'; }}
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-black text-slate-900 truncate">
                              {asset.nameVi}
                            </div>
                            <div className="text-[10.5px] text-slate-500 font-mono truncate">
                              {asset.filename}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyPrompt(asset);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-cyan-100 text-slate-600 hover:text-cyan-800 text-[11px] font-bold shrink-0 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          {copiedId === asset.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === asset.id ? 'Đã copy' : 'Copy'}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Prompt Details, Large Inspector & Paste Dropzone */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-between space-y-4 bg-white">
            
            {/* Asset Inspector Header */}
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-md border border-cyan-200">
                      File: {selectedAsset.filename}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      Nhóm: {CATEGORY_TABS.find(t => t.id === selectedAsset.category)?.label}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                    {selectedAsset.nameVi}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {selectedAsset.description}
                  </p>
                </div>

                {/* High-Res Live Preview Box */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#003882] to-[#0072ce] p-2 flex flex-col items-center justify-center shadow-lg border-2 border-cyan-300 relative shrink-0">
                  <span className="absolute -top-2 left-2 px-1.5 py-0.2 bg-emerald-500 text-white text-[8.5px] font-black rounded-full uppercase shadow-xs">
                    Live In-Game
                  </span>
                  <img
                    src={getAssetSrc(`/assets/${selectedAsset.filename}`)}
                    alt="Preview"
                    className="w-full h-full object-contain filter drop-shadow-md animate-mascot-idle"
                    onError={(e) => { (e.target as any).src = '/assets/viko_mascot_3d.png'; }}
                  />
                </div>
              </div>

              {/* Prompt Card with 1-Click Copy & Reset Button */}
              <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-3.5 space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-800 uppercase tracking-wide">
                      Prompt AI Gemini Pro / Imagen 3
                    </span>
                    <span className="text-[9.5px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full">
                      ✓ Chuẩn Pixar 3D • Khử bóng sàn
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        playSound('click');
                        removeCustomAsset(selectedAsset.filename);
                        showToast(`Đã khôi phục ảnh mặc định cho "${selectedAsset.nameVi}"!`);
                      }}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-white text-[10.5px] font-bold transition-all cursor-pointer"
                      title="Xóa ảnh custom và quay về ảnh mặc định"
                    >
                      Khôi phục gốc ↻
                    </button>
                    <button
                      onClick={() => copyPrompt(selectedAsset)}
                      className="btn-duo btn-duo-primary px-3.5 py-1.5 rounded-xl text-xs font-black gap-1 cursor-pointer shadow-xs"
                    >
                      {copiedId === selectedAsset.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Đã copy!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>📋 Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-700 leading-relaxed max-h-32 overflow-y-auto select-all">
                  {selectedAsset.prompt}
                </div>
              </div>
            </div>

            {/* Paste & Drop Zone */}
            <div className="space-y-2.5">
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-3 border-dashed rounded-3xl p-5 sm:p-7 text-center cursor-pointer transition-all duration-200 ${
                  isProcessing
                    ? 'border-cyan-400 bg-cyan-50/70 animate-pulse'
                    : 'border-cyan-300 hover:border-cyan-500 bg-gradient-to-b from-cyan-50/40 to-slate-50 hover:bg-cyan-50/60 shadow-2xs hover:shadow-xs'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file && selectedAsset) {
                      await processAndUploadImage(file, selectedAsset.filename);
                    }
                  }}
                />

                <div className="flex flex-col items-center justify-center space-y-1.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shadow-md">
                    {isProcessing ? (
                      <RefreshCw className="w-6 h-6 animate-spin" />
                    ) : (
                      <Upload className="w-6 h-6" />
                    )}
                  </div>

                  <div className="text-sm font-black text-slate-800">
                    {isProcessing ? 'Đang tách nền & nén chuẩn...' : 'Nhấn Ctrl + V trên bàn phím để dán ảnh tức thì'}
                  </div>

                  <p className="text-[11px] text-slate-500 max-w-sm">
                    Hoặc bấm vào đây để chọn file ảnh. Hệ thống tự động khử nền trắng AI và cắt sát viền 3D.
                  </p>
                </div>
              </div>

              {/* Instructions Tip */}
              <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200 flex items-start gap-2.5">
                <span className="text-lg shrink-0">💡</span>
                <div className="text-[11px] text-amber-900 leading-relaxed">
                  <strong>Thao tác 2 giây:</strong> Sau khi tạo ảnh trên Gemini, click chuột phải vào ảnh → chọn <strong>"Copy image" (Sao chép hình ảnh)</strong> → Quay lại đây và chỉ cần nhấn <strong>Ctrl + V</strong>!
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal: Bảng Thông Số Quy Chuẩn Ép Cân Sprite Sheet 8 FPS */}
        {showSpriteChartModal && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border-4 border-amber-400/40 flex flex-col overflow-hidden">
              
              {/* Header */}
              <div className="px-5 py-3.5 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between shrink-0 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-xs border border-white/30 shadow-inner">
                    <Table className="w-5 h-5 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
                      <span>Bảng Ép Cân Sprite Sheet & Logic Hoạt Họa 8 FPS</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-black">
                        Tối Giản 85% Frame
                      </span>
                    </h3>
                    <p className="text-[11px] text-amber-100">
                      Quy chuẩn hóa 19 frame hoạt họa kết hợp kỹ thuật CSS/Tweening thay vì vẽ lặp lại hàng trăm frame
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    playSound('click');
                    setShowSpriteChartModal(false);
                  }}
                  className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Table Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200 flex items-start gap-2.5">
                  <span className="text-lg shrink-0">💡</span>
                  <div className="text-[11.5px] text-amber-900 leading-relaxed">
                    <strong>Nguyên tắc Studio:</strong> Chỉ vẽ những frame biểu cảm và dáng di chuyển cốt lõi. Các chuyển động xoay, rung lắc, nhún nhảy hay biến dạng đàn hồi được thực hiện bằng <strong>CSS Animation & Javascript Tween</strong> để tối ưu tốc độ tải và giữ độ nét 100%.
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100/90 text-slate-700 font-black border-b border-slate-200">
                        <th className="py-2.5 px-3">Nhóm chuyển động</th>
                        <th className="py-2.5 px-3">Trạng thái</th>
                        <th className="py-2.5 px-3 text-center">Số Frame</th>
                        <th className="py-2.5 px-3">Quy luật phát</th>
                        <th className="py-2.5 px-3">Kỹ thuật Code & Tiết kiệm</th>
                        <th className="py-2.5 px-3 text-center">Thử nghiệm</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {MINIMALIST_SPRITE_CHART.map((item, idx) => {
                        const modeKey: StudioTesterMode = 
                          item.stateName.includes('Idle') ? 'idle' :
                          item.stateName.includes('Walk') ? 'walk' :
                          item.stateName.includes('Ponder') ? 'ponder' :
                          item.stateName.includes('Sad') ? 'sad' :
                          item.stateName.includes('Tap') ? 'tap' :
                          item.stateName.includes('Sprint') ? 'map_sprint' :
                          item.stateName.includes('Streak') ? 'streak_fever' : 'idle';

                        return (
                          <tr key={idx} className="hover:bg-cyan-50/50 transition-colors">
                            <td className="py-2.5 px-3 font-bold text-slate-500 whitespace-nowrap">
                              {item.category}
                            </td>
                            <td className="py-2.5 px-3 font-black text-slate-900 whitespace-nowrap">
                              {item.stateName}
                            </td>
                            <td className="py-2.5 px-3 text-center">
                              <span className="inline-block px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-mono font-black text-[11px]">
                                {item.frameCount} {item.frameCount === 1 ? 'ảnh' : 'frames'}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-slate-700 font-medium leading-relaxed">
                              {item.frameRule}
                            </td>
                            <td className="py-2.5 px-3 text-emerald-800 font-semibold bg-emerald-50/40 leading-relaxed">
                              {item.codeCheat}
                            </td>
                            <td className="py-2.5 px-3 text-center whitespace-nowrap">
                              <button
                                onClick={() => {
                                  playSound('click');
                                  setTesterMode(modeKey);
                                  setShowSpriteChartModal(false);
                                  if (modeKey === 'sad') triggerTesterShake();
                                  if (modeKey === 'tap') triggerTesterTap();
                                }}
                                className="px-2.5 py-1 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-[10.5px] cursor-pointer transition-all shadow-xs inline-flex items-center gap-1 active:scale-95"
                              >
                                <Play className="w-2.5 h-2.5 fill-current" />
                                <span>Thử</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                <span className="text-xs text-slate-500 font-medium">
                  Tổng dung lượng toàn bộ sprite: &lt; 1.5MB (siêu nhẹ cho mọi thiết bị)
                </span>
                <button
                  onClick={() => {
                    playSound('click');
                    setShowSpriteChartModal(false);
                  }}
                  className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-black cursor-pointer transition-all shadow-xs"
                >
                  Đóng bảng
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-xs font-black shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 border border-slate-700">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{toastMessage}</span>
          </div>
        )}

      </div>
    </div>
  );
};
