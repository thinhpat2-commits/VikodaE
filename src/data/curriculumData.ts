import { LEVEL_A1_UNITS } from './curriculumLevels/levelA1';
import { LEVEL_A2_UNITS } from './curriculumLevels/levelA2';
import { LEVEL_B1_UNITS } from './curriculumLevels/levelB1';
import { LEVEL_B2_UNITS } from './curriculumLevels/levelB2';
import { LEVEL_C1C2_UNITS } from './curriculumLevels/levelC1C2';
import { LEVEL_C2_UNITS } from './curriculumLevels/levelC2';

export type CourseLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1-C2' | 'A2-B1' | 'B2-C1' | 'C2';

export interface VocabularyHighlight {
  word: string;
  meaning: string;
  phonetic?: string;
}

export interface LessonExercise {
  id: string;
  type: 'word_order' | 'speak' | 'choice' | 'listen_choice' | 'fill_blank';
  promptVi: string;
  promptEn?: string;
  englishSentence: string;
  phonetics?: string;
  audioText: string;
  wordPool?: string[]; // for word_order
  options?: string[]; // for choice, listen_choice, fill_blank
  correctIndex?: number;
  blankWord?: string; // the word to be filled in for fill_blank
  vietnameseMeaning?: string; // Nghĩa tiếng Việt chuẩn xác của câu tiếng Anh
  explanation: string;
  // Deep learning pedagogical fields:
  whyWrong?: string; // Tại sao sai & lỗi phổ biến người Việt hay mắc
  crucialNote?: string; // Lưu ý quan trọng khi đối thoại với đối tác quốc tế
  memoryHook?: string; // Mẹo nhớ lâu (Mnemonics / liên tưởng dễ nhớ)
  vocabularyHighlights?: VocabularyHighlight[];
}

export interface SideQuestItem {
  id: string;
  level: CourseLevel;
  slotAfterUnitIndex: number; // vị trí sau bài thứ mấy trên lộ trình (0-9)
  side: 'left' | 'right';
  badge: string;
  title: string;
  subtitle: string;
  icon: string;
  xpReward: number;
  gemReward: number;
  content: {
    introduction: string;
    whyCrucial: string;
    memoryHook: string;
    keyVocabulary: { word: string; meaning: string; phonetic: string; example: string }[];
    challengeQuestion: {
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
      crucialNote: string;
    };
  };
}

export interface UnitLesson {
  id: string;
  unitNumber: number;
  title: string;
  subtitle: string;
  level: CourseLevel;
  icon: string;
  color: 'emerald' | 'cyan' | 'blue' | 'purple' | 'amber';
  xpReward: number;
  gemReward: number;
  exercises: LessonExercise[];
}

import { EXPANDED_LESSON_EXERCISES } from './curriculumExtensions/globalCurriculumExpansion';
import { COMPREHENSIVE_EXPANSION_EXERCISES } from './curriculumExtensions/comprehensiveCurriculumExpansion';
import { LEVEL_A2B1_UNITS } from './curriculumLevels/levelA2B1';
import { LEVEL_B2C1_UNITS } from './curriculumLevels/levelB2C1';

import { MASTER_100_UNITS } from './curriculumLevels/master100Units';

// 100 CANONICAL UNITS (UNITS 1 TO 100) ACROSS 5 PROGRESSIVE LEVELS (20 UNITS PER LEVEL)
// A1 (1-20), A2 (21-40), B1 (41-60), B2 (61-80), C1-C2 (81-100)
// 65% International Business/Workplace English + 35% Vikoda Danh Thanh Mineral Depth
export const VIKODA_CURRICULUM: UnitLesson[] = MASTER_100_UNITS;

export const VIKODA_SIDE_QUESTS: SideQuestItem[] = [
  {
    id: 'sq-1',
    level: 'A1',
    slotAfterUnitIndex: 0, // Between Unit 1 and Unit 2
    side: 'left',
    badge: 'TỪ VỰNG CỐT LÕI',
    title: '5 Từ Khóa Vàng Vikoda',
    subtitle: 'Nắm vững 5 từ bắt buộc phải biết khi giới thiệu nước khoáng',
    icon: '💡',
    xpReward: 25,
    gemReward: 8,
    content: {
      introduction: 'Rất nhiều nhân viên nhầm lẫn giữa "Purified water" (nước lọc tinh khiết RO) và "Natural mineral water" (nước khoáng thiên nhiên). Đối tác nước ngoài đặc biệt khắt khe về việc phân định này.',
      whyCrucial: 'Nói "Purified water" sẽ làm giảm giá trị sản phẩm, vì Vikoda là mỏ khoáng thiên nhiên Đảnh Thạnh khai thác ở độ sâu 220m, chứ không phải nước lọc qua màng nhân tạo.',
      memoryHook: 'Nhớ câu thần chú: "MINERAL = Mỏ khoáng ngàn năm, PURIFIED = Nước lọc qua máy thông thường". Luôn dùng "Natural Alkaline Mineral Water"!',
      keyVocabulary: [
        { word: 'Natural mineral water', meaning: 'Nước khoáng thiên nhiên', phonetic: '/ˈnætʃrəl ˈmɪnərəl ˈwɔːtər/', example: 'Vikoda is 100% natural mineral water.' },
        { word: 'Alkaline', meaning: 'Có tính kiềm (pH > 7)', phonetic: '/ˈælkəlaɪn/', example: 'Our water is naturally alkaline at pH 9.0.' },
        { word: 'Spring source', meaning: 'Nguồn mỏ ngầm', phonetic: '/sprɪŋ sɔːrs/', example: 'Bottled directly at the Danh Thanh spring source.' },
        { word: 'Electrolyte', meaning: 'Chất điện giải tự nhiên', phonetic: '/ɪˈlɛktrəlaɪt/', example: 'Rich in essential electrolytes like Calcium and Magnesium.' },
        { word: 'Pristine', meaning: 'Nguyên bản, thanh khiết tuyệt đối', phonetic: '/ˈprɪstiːn/', example: 'Preserving nature’s pristine balance.' }
      ],
      challengeQuestion: {
        prompt: 'Khách Nhật hỏi: "Is Vikoda processed through artificial electrolysis?" (Vikoda có điện phân nhân tạo không?). Bạn trả lời thế nào chuẩn nhất?',
        options: [
          'No, our pH 9.0 alkalinity is 100% naturally formed in the underground rocks.',
          'Yes, we use machines to make it alkaline.',
          'I don’t know, it is just water.'
        ],
        correctIndex: 0,
        explanation: 'Khách quốc tế đánh giá cực cao tính kiềm tự nhiên (naturally formed) thay vì nhân tạo (artificial electrolysis).',
        crucialNote: 'Tuyệt đối nhấn mạnh chữ "NATURALLY" để tôn vinh giá trị nguồn nước Đảnh Thạnh quý hiếm.'
      }
    }
  },
  {
    id: 'sq-2',
    level: 'A1',
    slotAfterUnitIndex: 2, // Between Unit 3 and Unit 4
    side: 'right',
    badge: 'VĂN HÓA GIAO TIẾP',
    title: 'Nghệ Thuật Trao Danh Thiếp & Bắt Tay',
    subtitle: 'Nghi thức ngoại giao chuẩn quốc tế tránh mất điểm',
    icon: '🤝',
    xpReward: 30,
    gemReward: 10,
    content: {
      introduction: 'Trong văn hóa kinh doanh quốc tế, ấn tượng 30 giây đầu tiên quyết định 80% sự thành bại của thương vụ.',
      whyCrucial: 'Trao danh thiếp một tay, để danh thiếp vào túi quần sau, hoặc bắt tay quá lỏng lẻo (dead fish handshake) sẽ khiến đối tác phương Tây hoặc Nhật Bản cảm thấy bị thiếu tôn trọng.',
      memoryHook: 'Quy tắc 2 tay & Mắt nhìn thẳng: "Trao bằng 2 tay, mắt nhìn đối diện, đọc tên đối tác rồi mới nhẹ nhàng cất vào sổ tay".',
      keyVocabulary: [
        { word: 'Business card', meaning: 'Danh thiếp công ty', phonetic: '/ˈbɪznəs kɑːrd/', example: 'Here is my business card.' },
        { word: 'Firm handshake', meaning: 'Cái bắt tay chắc chắn, tự tin', phonetic: '/fɜːrm ˈhændʃeɪk/', example: 'A firm handshake shows confidence.' },
        { word: 'It is a pleasure', meaning: 'Rất hân hạnh được diện kiến', phonetic: '/ɪt ɪz ə ˈplɛʒər/', example: 'It is a pleasure to welcome you to Vikoda.' },
        { word: 'On behalf of', meaning: 'Thay mặt cho toàn thể công ty', phonetic: '/ɒn bɪˈhæf əv/', example: 'On behalf of our board, welcome.' }
      ],
      challengeQuestion: {
        prompt: 'Khi trao danh thiếp cho đối tác Nhật Bản hoặc Châu Âu, câu nói nào vừa khiêm nhường vừa chuyên nghiệp?',
        options: [
          'Here is my business card. Please feel free to reach out to me directly.',
          'Take my card right now.',
          'Look at my phone number.'
        ],
        correctIndex: 0,
        explanation: '"Please feel free to reach out" là cấu trúc mở lời lịch thiệp nhất để duy trì liên lạc sau cuộc gặp.',
        crucialNote: 'Luôn đưa danh thiếp sao cho mặt chữ xuôi theo hướng đọc của người nhận.'
      }
    }
  },
  {
    id: 'sq-3',
    level: 'A2-B1',
    slotAfterUnitIndex: 1, // Between Unit 12 and Unit 13
    side: 'left',
    badge: 'GIẢI MÃ KHOÁNG CHẤT',
    title: 'Giải Mã Khoáng Kiềm pH 9.0',
    subtitle: 'Bí quyết giải thích cơ chế trung hòa axit dạ dày bằng tiếng Anh',
    icon: '🧪',
    xpReward: 35,
    gemReward: 12,
    content: {
      introduction: 'Khách hàng hiện đại rất quan tâm đến sức khỏe đường ruột và tính kiềm. Bạn cần biết cách giải thích đơn giản mà giàu cơ sở khoa học.',
      whyCrucial: 'Đối tác B2B thường hỏi về chỉ số TDS (Total Dissolved Solids) và nồng độ HCO3- (Bicarbonate). Trả lời mạch lạc sẽ khẳng định sự uy tín của đội ngũ Vikoda.',
      memoryHook: 'HCO3- = "Hết Chua Ợ": Bicarbonate trung hòa axit dạ dày dư thừa (neutralizes excess stomach acid).',
      keyVocabulary: [
        { word: 'Neutralize', meaning: 'Trung hòa axit', phonetic: '/ˈnjuːtrəlaɪz/', example: 'Vikoda neutralizes excess acidity.' },
        { word: 'Bicarbonate (HCO3-)', meaning: 'Muối khoáng hydrocacbonat', phonetic: '/baɪˈkɑːrbənət/', example: 'Rich in natural bicarbonate.' },
        { word: 'Optimum hydration', meaning: 'Bù nước tối ưu tế bào', phonetic: '/ˈɒptɪməm haɪˈdreɪʃən/', example: 'Micro-clusters ensure optimum cellular hydration.' },
        { word: 'Zero additives', meaning: 'Không phụ gia, nguyên chất 100%', phonetic: '/ˈzɪəroʊ ˈædətɪvz/', example: 'Zero chemicals and zero additives.' }
      ],
      challengeQuestion: {
        prompt: 'Đối tác hỏi: "Why should my customers choose Vikoda over standard bottled water?" (Tại sao nên chọn Vikoda thay vì nước thường?). Điểm then chốt nào thuyết phục nhất?',
        options: [
          'Because its natural pH 9.0 and rare minerals help neutralize stomach acid and boost daily vitality without chemicals.',
          'Because our bottle is blue.',
          'Because it is cheap.'
        ],
        correctIndex: 0,
        explanation: 'Nhấn mạnh bộ 3: "Natural pH 9.0" + "rare minerals" + "neutralize stomach acid without chemicals".',
        crucialNote: 'Không bao giờ hạ thấp đối thủ cạnh tranh bằng lời lẽ xấu, luôn tập trung vào giá trị nguyên bản của Vikoda.'
      }
    }
  },
  {
    id: 'sq-4',
    level: 'B2-C1',
    slotAfterUnitIndex: 2, // Between Unit 23 and Unit 24
    side: 'right',
    badge: 'XỬ LÝ TÌNH HUỐNG',
    title: 'Ứng Biến Sự Cố Hàng Hải & Đàm Phán',
    subtitle: 'Xử lý khi cước tàu biến động hoặc trễ container xuất khẩu',
    icon: '⚡',
    xpReward: 40,
    gemReward: 15,
    content: {
      introduction: 'Trong xuất nhập khẩu, rủi ro biến động giá cước tàu (Ocean Freight) và chậm trễ lịch tàu (Vessel Delay) xảy ra thường xuyên. Thái độ xử lý minh bạch sẽ biến sự cố thành cơ hội thắt chặt lòng tin.',
      whyCrucial: 'Khách hàng quốc tế ghét nhất là sự im lặng hoặc đổ lỗi. Bạn cần thông báo trước, đưa ra giải pháp thay thế (Alternative Solution) ngay trong cùng một email/cuộc gọi.',
      memoryHook: 'Quy tắc 3 Bước: "1. Thừa nhận trung thực -> 2. Cập nhật lịch mới -> 3. Tặng giải pháp hỗ trợ (Bonus/Discount on next batch)".',
      keyVocabulary: [
        { word: 'Vessel delay', meaning: 'Chậm trễ tàu biển', phonetic: '/ˈvɛsl dɪˈleɪ/', example: 'Due to severe weather, the vessel delay is 3 days.' },
        { word: 'Ocean freight', meaning: 'Cước vận tải biển', phonetic: '/ˈoʊʃən freɪt/', example: 'We absorb the freight surcharge for this shipment.' },
        { word: 'Lead time', meaning: 'Thời gian từ đặt hàng đến giao hàng', phonetic: '/liːd taɪm/', example: 'Our standard lead time is 14 days.' },
        { word: 'Mitigate risk', meaning: 'Giảm thiểu tối đa rủi ro', phonetic: '/ˈmɪtɪgeɪt rɪsk/', example: 'We have taken proactive steps to mitigate any delay.' }
      ],
      challengeQuestion: {
        prompt: 'Nếu container nước khoáng bị chậm cập cảng Singapore do thời tiết biển động, email nào thể hiện đẳng cấp xuất khẩu chuyên nghiệp nhất?',
        options: [
          'We regret to inform you that shipping line ETA is delayed by 2 days due to typhoon. We are monitoring closely and waive local warehousing fees.',
          'Not our fault, go ask the ship captain.',
          'The boat is late, just wait.'
        ],
        correctIndex: 0,
        explanation: 'Minh bạch lý do thời tiết bất khả kháng (force majeure) kèm hành động thiết thực hỗ trợ chi phí kho bãi.',
        crucialNote: 'Luôn giữ bình tĩnh, chuyên nghiệp và đồng hành cùng khách hàng trong mọi tình huống.'
      }
    }
  },
  {
    id: 'sq-5',
    level: 'A2-B1',
    slotAfterUnitIndex: 3, // Between Unit 14 and Unit 15
    side: 'right',
    badge: 'THỰC ĐỊA NHÀ MÁY',
    title: 'Nghệ Thuật Dẫn Tour Mỏ 220m',
    subtitle: 'Kỹ năng thuyết minh thực địa khiến đối tác trầm trồ',
    icon: '🧭',
    xpReward: 35,
    gemReward: 12,
    content: {
      introduction: 'Dẫn khách thăm mỏ khoáng Đảnh Thạnh không chỉ là chỉ đường, mà là nghệ thuật truyền cảm hứng về cội nguồn thiên nhiên kỳ vĩ.',
      whyCrucial: 'Khi khách tận mắt chứng kiến vòi nước 72°C phun trào giữa vành đai rừng xanh 35ha, niềm tin vào thương hiệu được củng cố gấp bội phần.',
      memoryHook: 'Công thức 3Đ: "Độ sâu 220m - Độ nóng 72°C - Độ kiềm 9.0". Nắm chắc 3 số liệu này bạn sẽ làm chủ mọi tour tham quan!',
      keyVocabulary: [
        { word: 'Artesian aquifer', meaning: 'Tầng ngậm nước ngầm phun tự nhiên', phonetic: '/ɑːrˈtiːʒən ˈækwɪfər/', example: 'Our artesian aquifer lies beneath virgin basalt.' },
        { word: 'Virgin purity', meaning: 'Độ tinh khiết nguyên sơ', phonetic: '/ˈvɜːrdʒɪn ˈpjʊərəti/', example: 'Preserved in its virgin purity for millennia.' },
        { word: 'Sanitary barrier', meaning: 'Hàng rào vệ sinh an toàn', phonetic: '/ˈsænɪtəri ˈbæriər/', example: 'The 35ha sanctuary serves as a natural sanitary barrier.' },
        { word: 'Immaculate', meaning: 'Sạch không tì vết, vô trùng', phonetic: '/ɪˈmækjələt/', example: 'The automated bottling hall is kept immaculate.' }
      ],
      challengeQuestion: {
        prompt: 'Khi đứng trước vòi phun khoáng nóng 72°C, câu giới thiệu nào gây ấn tượng khoa học mạnh mẽ nhất?',
        options: [
          'This 72°C natural temperature proves the spring originates from ancient geothermal depths untouched by surface rainwater.',
          'The water is hot because we boiled it with a heater.',
          'Be careful, it is dangerous hot water.'
        ],
        correctIndex: 0,
        explanation: 'Nhấn mạnh nguồn gốc địa nhiệt cổ xưa (ancient geothermal depths) chứng minh sự cách ly hoàn toàn khỏi nước mưa bề mặt.',
        crucialNote: 'Để khách thử chạm tay vào dòng nước ấm mát sau khi hạ nhiệt để cảm nhận vị ngọt của Silic.'
      }
    }
  },
  {
    id: 'sq-6',
    level: 'B2-C1',
    slotAfterUnitIndex: 0, // Between Unit 21 and Unit 22
    side: 'left',
    badge: 'CHIẾN LƯỢC ESG',
    title: 'Đòn Bẩy ESG Thuyết Phục GM',
    subtitle: 'Nghệ thuật chốt hợp đồng nhờ chiến lược phát triển bền vững',
    icon: '🌱',
    xpReward: 45,
    gemReward: 15,
    content: {
      introduction: 'Các tập đoàn khách sạn 5 sao quốc tế (Marriott, Accor, IHG) đều có cam kết giảm rác thải nhựa toàn cầu trước năm 2030.',
      whyCrucial: 'Nói về giá thành chỉ là cạnh tranh tầm thấp. Nói về mục tiêu ESG (Môi trường - Xã hội - Quản trị) sẽ đưa bạn ngồi vào bàn đàm phán cấp Tổng Giám Đốc.',
      memoryHook: 'Quy tắc 3 Không: "Không nhựa dùng một lần - Không vận chuyển xa - Không hóa chất can thiệp".',
      keyVocabulary: [
        { word: 'Zero single-use plastic', meaning: 'Loại bỏ hoàn toàn nhựa dùng 1 lần', phonetic: '/ˈzɪəroʊ ˈsɪŋgl juːs ˈplæstɪk/', example: 'Helping your resort achieve zero single-use plastic.' },
        { word: 'Carbon offset', meaning: 'Bù trừ và giảm thiểu carbon', phonetic: '/ˈkɑːrbən ˈɒfsɛt/', example: 'Local sourcing provides massive carbon offset.' },
        { word: 'Corporate Social Responsibility (CSR)', meaning: 'Trách nhiệm xã hội doanh nghiệp', phonetic: '/ˈkɔːrpərət ˈsoʊʃl rɪˌspɒnsəˈbɪləti/', example: 'Aligned with your global CSR policies.' },
        { word: 'Eco-luxury', meaning: 'Đẳng cấp sang trọng gắn liền với sinh thái', phonetic: '/ˈiːkoʊ ˈlʌkʃəri/', example: 'Vikoda glass embodies the true spirit of eco-luxury.' }
      ],
      challengeQuestion: {
        prompt: 'Khi trình bày với Hội đồng Quản trị khách sạn 5 sao, luận điểm ESG nào mang tính quyết định nhất?',
        options: [
          'Switching to Vikoda glass bottles reduces your beverage supply chain carbon emissions by 85% while eliminating 200,000 plastic bottles annually.',
          'Vikoda is just a local water brand from Vietnam.',
          'We give you free keychains if you sign today.'
        ],
        correctIndex: 0,
        explanation: 'Con số cụ thể: giảm 85% khí thải carbon chuỗi cung ứng và cắt giảm 200,000 chai nhựa mỗi năm là bằng chứng ESG không thể chối từ.',
        crucialNote: 'Cung cấp báo cáo chứng nhận lượng rác thải nhựa cắt giảm để khách sạn đưa vào Báo cáo thường niên (Annual Sustainability Report).'
      }
    }
  },
  {
    id: 'sq-7',
    level: 'C2',
    slotAfterUnitIndex: 0, // Between Unit 31 and Unit 32
    side: 'left',
    badge: 'NGOẠI GIAO BÀN TIỆC',
    title: 'Nghệ Thuật Small Talk & Kết Nối Cấp Cao',
    subtitle: 'Nói chuyện tự nhiên với các tỷ phú và Tổng Giám Đốc tại tiệc tối ngoại giao',
    icon: '🍸',
    xpReward: 50,
    gemReward: 20,
    content: {
      introduction: 'Thương vụ triệu đô không được chốt trong phòng họp, mà thường được mở màn qua những mẩu chuyện small talk tinh tế tại bàn tiệc tối.',
      whyCrucial: 'Nói tiếng Anh lưu loát thôi chưa đủ; cần biết cách khen ngợi văn minh, khéo léo chuyển chủ đề sang nguồn khoáng Đảnh Thạnh mà không gượng ép.',
      memoryHook: 'Quy tắc FORM: Family - Occupation - Recreation - Mineral (Gia đình - Công việc - Giải trí - Tinh hoa khoáng sản).',
      keyVocabulary: [
        { word: 'Ice-breaker', meaning: 'Lời mở đầu phá vỡ sự xa cách', phonetic: '/ˈaɪsˌbreɪkər/', example: 'A refreshing glass of Vikoda is the ultimate ice-breaker.' },
        { word: 'Rapport', meaning: 'Mối liên kết hòa hợp, tin cậy', phonetic: '/ræˈpɔːr/', example: 'Building instant rapport with European dignitaries.' },
        { word: 'Sommelier pairing', meaning: 'Nghệ thuật kết hợp nước khoáng với món ăn cao cấp', phonetic: '/səˈmɛljeɪ ˈpɛərɪŋ/', example: 'Our sparkling mineral water offers flawless sommelier pairing.' }
      ],
      challengeQuestion: {
        prompt: 'Tại bàn tiệc tối với Chủ tịch đối tác, câu mở chuyện nào tự nhiên và đẳng cấp nhất?',
        options: [
          'It is magnificent to meet you in person, Mr. Chairman. Notice how Dan Thanh mineral water cleanses the palate between courses?',
          'Give me your money right now for my water.',
          'Why are you eating so slowly?'
        ],
        correctIndex: 0,
        explanation: 'Nhã nhặn, tôn trọng đối tác và khéo léo hướng sự chú ý vào công năng làm sạch vị giác (cleanses the palate) của nước khoáng Đảnh Thạnh.',
        crucialNote: 'Để ý tư thế cầm ly chân cao thanh lịch khi dùng nước khoáng có ga.'
      }
    }
  },
  {
    id: 'sq-8',
    level: 'C2',
    slotAfterUnitIndex: 2, // Between Unit 33 and Unit 34
    side: 'right',
    badge: 'TÂM LÝ ĐÀM PHÁN',
    title: 'Quyền Lực Của Khoảng Lặng Chiến Lược',
    subtitle: 'Làm chủ Strategic Silence để đối tác tự nhượng bộ trên bàn đàm phán',
    icon: '🤫',
    xpReward: 50,
    gemReward: 20,
    content: {
      introduction: 'Người thiếu kinh nghiệm sợ sự im lặng nên thường lấp đầy bằng cách vội vã nhượng bộ giá. Chuyên gia bản ngữ coi sự im lặng là vũ khí tối thượng.',
      whyCrucial: 'Sau khi bạn đưa ra mức giá CIF 18.50 USD/thùng, hãy dừng lại, giữ ánh mắt ấm áp nhưng kiên định và để đối tác là người lên tiếng trước.',
      memoryHook: 'HE WHO SPEAKS FIRST LOSES = Trong khoảng lặng sau đề xuất giá, ai mở lời trước người đó nhượng bộ!',
      keyVocabulary: [
        { word: 'Strategic silence', meaning: 'Khoảng lặng chiến lược trong đàm phán', phonetic: '/strəˈtiːdʒɪk ˈsaɪləns/', example: 'Use strategic silence right after stating your FOB offer.' },
        { word: 'Concession trading', meaning: 'Trao đổi nhượng bộ có qua có lại', phonetic: '/kənˈsɛʃn ˈtreɪdɪŋ/', example: 'Never give a discount without demanding larger volume.' },
        { word: 'Walk-away point', meaning: 'Điểm sàn dừng đàm phán bảo vệ danh dự', phonetic: '/wɔːk əˈweɪ pɔɪnt/', example: 'Know your walk-away point before entering the room.' }
      ],
      challengeQuestion: {
        prompt: 'Sau khi đưa ra đề xuất giá xuất khẩu container, bạn nên làm gì tiếp theo?',
        options: [
          'Maintain calm eye contact, remain silent for 5-7 seconds, and allow the counterpart to respond first.',
          'Start talking rapidly and immediately say "We can lower the price if you want".',
          'Run out of the room.'
        ],
        correctIndex: 0,
        explanation: 'Giữ ánh mắt điềm tĩnh, im lặng 5-7 giây thể hiện sự tự tin tuyệt đối vào giá trị sản phẩm và buộc đối tác phải cân nhắc kỹ đề xuất của bạn.',
        crucialNote: 'Nếu đối tác im lặng, đừng sợ hãi. Đó là dấu hiệu họ đang tính toán con số trong đầu!'
      }
    }
  }
];
