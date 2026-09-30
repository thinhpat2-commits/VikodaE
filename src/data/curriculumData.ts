export type CourseLevel = 'A1' | 'A2-B1' | 'B2-C1' | 'C2';

export interface VocabularyHighlight {
  word: string;
  meaning: string;
  phonetic?: string;
}

export interface LessonExercise {
  id: string;
  type: 'word_order' | 'speak' | 'choice' | 'listen_choice';
  promptVi: string;
  englishSentence: string;
  phonetics?: string;
  audioText: string;
  wordPool?: string[]; // for word_order
  options?: string[]; // for choice
  correctIndex?: number;
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
  slotAfterUnitIndex: number; // vị trí sau bài thứ mấy trên lộ trình (0-3)
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

export const VIKODA_CURRICULUM: UnitLesson[] = [
  // ==================== LEVEL A1: KHỞI ĐỘNG (DỄ, VĂN PHÒNG CHO NGƯỜI MỚI BẮT ĐẦU) ====================
  {
    id: 'unit-1',
    unitNumber: 1,
    title: 'Chào Hỏi & Giới Thiệu Bản Thân',
    subtitle: 'Mở lời tự tin khi gặp đồng nghiệp và khách nước ngoài',
    level: 'A1',
    icon: '👋',
    color: 'emerald',
    xpReward: 30,
    gemReward: 10,
    exercises: [
      {
        id: 'u1-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Xin chào, tôi là Minh đến từ công ty Vikoda."',
        englishSentence: 'Hello, I am Minh from Vikoda.',
        audioText: 'Hello, I am Minh from Vikoda.',
        phonetics: '/həˈloʊ, aɪ æm mɪn frəm vɪˈkoʊdə/',
        wordPool: ['Hello,', 'I', 'am', 'Minh', 'from', 'Vikoda.', 'water', 'are', 'good'],
        explanation: 'Cách giới thiệu ngắn gọn, lịch sự nhất trong giao tiếp công sở quốc tế.',
        whyWrong: 'Người Việt hay nói "I come from Vikoda company" - người bản xứ chỉ cần "I am [Tên] from Vikoda".',
        crucialNote: 'Khi xưng tên với đối tác quốc tế, phát âm rõ tên và nở nụ cười chào đón chân thành.',
        memoryHook: 'Công thức 3 phần: "Hello + I am [Tên] + from Vikoda". Dễ nhớ, chuyên nghiệp!',
        vocabularyHighlights: [
          { word: 'Representative', meaning: 'Đại diện', phonetic: 'ˌrɛprɪˈzɛntətɪv' },
          { word: 'Headquarters', meaning: 'Trụ sở chính', phonetic: 'ˈhɛdˌkwɔːrtərz' }
        ]
      },
      {
        id: 'u1-e2',
        type: 'choice',
        promptVi: 'Khi khách nước ngoài bước vào sảnh công ty, câu chào nào chuẩn lịch sự nhất?',
        englishSentence: 'Good morning! Welcome to Vikoda.',
        audioText: 'Good morning! Welcome to Vikoda.',
        options: [
          'Good morning! Welcome to Vikoda.',
          'What do you want here?',
          'Hey you, who are you?'
        ],
        correctIndex: 0,
        explanation: '"Welcome to Vikoda" là câu chào mừng chuẩn mực quốc tế thể hiện sự hiếu khách.',
        whyWrong: 'Hỏi "What do you want?" nghe rất cộc lốc và thô lỗ trong văn hóa phương Tây.',
        crucialNote: 'Chào kèm cử chỉ cúi đầu nhẹ và hướng tay mời khách tiến vào quầy lễ tân.',
        memoryHook: 'Nhớ câu thần chú: "Welcome to + Tên công ty" luôn là tấm danh thiếp mở đầu hoàn hảo.',
        vocabularyHighlights: [
          { word: 'Welcome', meaning: 'Chào mừng, đón tiếp', phonetic: 'ˈwɛlkəm' },
          { word: 'Hospitality', meaning: 'Sự hiếu khách', phonetic: 'ˌhɒspɪˈtæləti' }
        ]
      },
      {
        id: 'u1-e3',
        type: 'speak',
        promptVi: 'Hãy luyện nói câu: "Rất vui được gặp bạn!"',
        englishSentence: 'Nice to meet you.',
        audioText: 'Nice to meet you.',
        phonetics: '/naɪs tuː miːt juː/',
        explanation: 'Nói với nụ cười thân thiện và cái bắt tay nhẹ hoặc gật đầu lịch thiệp.',
        whyWrong: 'Tránh nói nhầm "Nice to meet you again" cho lần đầu gặp gỡ.',
        crucialNote: 'Lần đầu gặp dùng "meet", từ lần thứ 2 trở đi nên đổi sang "Nice to see you again".',
        memoryHook: 'MEET = Gặp Mới (lần đầu), SEE = Thấy Quen (đã gặp rồi).',
        vocabularyHighlights: [
          { word: 'Pleasure', meaning: 'Niềm vinh hạnh', phonetic: 'ˈplɛʒər' },
          { word: 'Greeting', meaning: 'Lời chào hỏi', phonetic: 'ˈgriːtɪŋ' }
        ]
      },
      {
        id: 'u1-e4',
        type: 'word_order',
        promptVi: 'Sắp xếp câu trao danh thiếp: "Đây là danh thiếp của tôi, tôi là đại diện kinh doanh."',
        englishSentence: 'Here is my business card, I am the sales representative.',
        audioText: 'Here is my business card, I am the sales representative.',
        phonetics: '/hɪər ɪz maɪ ˈbɪznəs kɑːrd, aɪ æm ðə seɪlz ˌrɛprɪˈzɛntətɪv/',
        wordPool: ['Here', 'is', 'my', 'business', 'card,', 'I', 'am', 'the', 'sales', 'representative.', 'take', 'paper'],
        explanation: 'Cách trao danh thiếp trang trọng và giới thiệu vị trí công tác.',
        whyWrong: 'Không nên nói "Take my card" vì mang tính ra lệnh.',
        crucialNote: 'Trao danh thiếp bằng cả hai tay theo phong cách ngoại giao Á - Âu chu đáo.',
        memoryHook: '"Here is my..." + trao 2 tay + mắt nhìn thẳng = 100 điểm thanh lịch.',
        vocabularyHighlights: [
          { word: 'Business card', meaning: 'Danh thiếp', phonetic: 'ˈbɪznəs kɑːrd' },
          { word: 'Sales representative', meaning: 'Đại diện kinh doanh', phonetic: 'seɪlz ˌrɛprɪˈzɛntətɪv' }
        ]
      },
      {
        id: 'u1-e5',
        type: 'choice',
        promptVi: 'Hỏi thăm chuyến bay của đối tác đến Việt Nam/Khánh Hòa một cách thân thiện:',
        englishSentence: 'Did you have a pleasant flight to Vietnam?',
        audioText: 'Did you have a pleasant flight to Vietnam?',
        options: [
          'Did you have a pleasant flight to Vietnam?',
          'Is your plane crashed?',
          'Why did you fly here?'
        ],
        correctIndex: 0,
        explanation: '"Did you have a pleasant flight?" là câu hỏi small-talk kinh điển phá băng mọi sự ngượng ngùng.',
        whyWrong: 'Small talk giúp tạo bầu không khí ấm áp trước khi đi vào nội dung thương thảo kinh doanh.',
        crucialNote: 'Lắng nghe phản hồi của khách, nếu khách mệt mỏi hãy chủ động mời nước khoáng lạnh ngay.',
        memoryHook: '"Pleasant flight" = Chuyến bay êm ả, dễ chịu.',
        vocabularyHighlights: [
          { word: 'Pleasant', meaning: 'Dễ chịu, thoải mái', phonetic: 'ˈplɛznt' },
          { word: 'Small talk', meaning: 'Trò chuyện xã giao', phonetic: 'smɔːl tɔːk' }
        ]
      },
      {
        id: 'u1-e6',
        type: 'speak',
        promptVi: 'Nói câu chào mừng nồng hậu thay mặt toàn thể công ty:',
        englishSentence: 'We are delighted to welcome you to our headquarters.',
        audioText: 'We are delighted to welcome you to our headquarters.',
        phonetics: '/wiː ɑːr dɪˈlaɪtɪd tuː ˈwɛlkəm juː tuː aʊər ˈhɛdˌkwɔːrtərz/',
        explanation: '"Delighted to welcome you" thể hiện đẳng cấp đón tiếp của một doanh nghiệp tầm cỡ.',
        whyWrong: 'Dùng "very happy" cũng được nhưng "delighted" trang trọng và chuyên nghiệp hơn rất nhiều.',
        crucialNote: 'Từ "headquarters" luôn có chữ "s" ở đuôi dù là số ít hay số nhiều.',
        memoryHook: 'DELIGHTED = Vui mừng tột bậc. Head + quarters = Trụ sở đầu não.',
        vocabularyHighlights: [
          { word: 'Delighted', meaning: 'Rất vui mừng, vinh dự', phonetic: 'dɪˈlaɪtɪd' },
          { word: 'Headquarters', meaning: 'Trụ sở công ty', phonetic: 'ˈhɛdˌkwɔːrtərz' }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    title: 'Mời Nước & Tiếp Khách Chu Đáo',
    subtitle: 'Mời khách chai nước khoáng Vikoda mát lạnh',
    level: 'A1',
    icon: '💧',
    color: 'cyan',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u2-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Xin mời anh/chị dùng một chai nước Vikoda mát lạnh."',
        englishSentence: 'Would you like a cold bottle of Vikoda?',
        audioText: 'Would you like a cold bottle of Vikoda?',
        phonetics: '/wʊd juː laɪk ə koʊld ˈbɒtl əv vɪˈkoʊdə/',
        wordPool: ['Would', 'you', 'like', 'a', 'cold', 'bottle', 'of', 'Vikoda?', 'drink', 'water'],
        explanation: 'Cấu trúc "Would you like...?" lịch sự hơn rất nhiều so với "Do you want...?".',
        whyWrong: 'Tuyệt đối không dùng "Do you want to drink?" vì nghe như mệnh lệnh gặng hỏi.',
        crucialNote: 'Khi đưa chai nước, xoay nhãn hiệu Vikoda hướng về phía khách hàng.',
        memoryHook: '"Would you like" = Lời mời thanh lịch bậc nhất trong tiếng Anh giao tiếp.',
        vocabularyHighlights: [
          { word: 'Would you like', meaning: 'Bạn có muốn dùng...', phonetic: 'wʊd juː laɪk' },
          { word: 'Chilled bottle', meaning: 'Chai nước ướp lạnh vừa phải', phonetic: 'tʃɪld ˈbɒtl' }
        ]
      },
      {
        id: 'u2-e2',
        type: 'choice',
        promptVi: 'Giải thích ngắn gọn chai nước Vikoda cho khách dễ hiểu:',
        englishSentence: 'It is 100% natural alkaline mineral water.',
        audioText: 'It is one hundred percent natural alkaline mineral water.',
        options: [
          'It is 100% natural alkaline mineral water.',
          'It is dirty tap water.',
          'It has chemical and sugar.'
        ],
        correctIndex: 0,
        explanation: '"100% natural alkaline mineral water" (Nước khoáng kiềm thiên nhiên 100%) là câu cửa miệng định vị thương hiệu.',
        whyWrong: 'Tránh nói "purified water" (nước lọc tinh khiết RO), vì Vikoda là mỏ khoáng tự nhiên quý hiếm!',
        crucialNote: 'Nhấn mạnh chữ "NATURAL" - kiềm tự nhiên từ lòng đất mẹ chứ không phải nhân tạo.',
        memoryHook: 'Bộ 4 chữ vàng: "100% Natural Alkaline Mineral Water" - đọc liền mạch 5 lần để tạo phản xạ.',
        vocabularyHighlights: [
          { word: 'Natural alkaline', meaning: 'Kiềm tự nhiên', phonetic: 'ˈnætʃrəl ˈælkəlaɪn' },
          { word: 'Mineral water', meaning: 'Nước khoáng thiên nhiên', phonetic: 'ˈmɪnərəl ˈwɔːtər' }
        ]
      },
      {
        id: 'u2-e3',
        type: 'speak',
        promptVi: 'Luyện nói câu mời khách ngồi vào phòng họp:',
        englishSentence: 'Please have a seat, our manager is coming.',
        audioText: 'Please have a seat, our manager is coming.',
        phonetics: '/pliːz hæv ə siːt, aʊər ˈmænɪdʒər ɪz ˈkʌmɪŋ/',
        explanation: '"Please have a seat" là cách mời ngồi chuyên nghiệp thay cho "Sit down".',
        whyWrong: 'Nói "Sit down" giống như lệnh cho học sinh hoặc thú cưng, không dùng trong tiếp khách doanh nghiệp.',
        crucialNote: 'Kèm theo động tác mở lòng bàn tay hướng về phía chiếc ghế họp.',
        memoryHook: '"HAVE A SEAT" = Mời an tọa lịch thiệp.',
        vocabularyHighlights: [
          { word: 'Have a seat', meaning: 'Mời ngồi', phonetic: 'hæv ə siːt' },
          { word: 'Conference room', meaning: 'Phòng hội nghị / phòng họp', phonetic: 'ˈkɒnfərəns ruːm' }
        ]
      },
      {
        id: 'u2-e4',
        type: 'choice',
        promptVi: 'Khi khách hỏi về cảm giác khi uống nước Vikoda, bạn mô tả ra sao?',
        englishSentence: 'It has a naturally sweet taste and a crisp, refreshing finish.',
        audioText: 'It has a naturally sweet taste and a crisp, refreshing finish.',
        options: [
          'It has a naturally sweet taste and a crisp, refreshing finish.',
          'It tastes like bitter medicine.',
          'It has a very bad chemical smell.'
        ],
        correctIndex: 0,
        explanation: 'Hậu vị ngọt thanh tự nhiên nhờ vi khoáng Silic (axit Metasilicic) đặc trưng của mỏ Đảnh Thạnh.',
        whyWrong: 'Nước khoáng Đảnh Thạnh không hề có vị lợ gắt như nước khoáng nhân tạo, mà rất thanh mát.',
        crucialNote: '"Crisp, refreshing finish" là cụm từ các chuyên gia ẩm thực quốc tế cực kỳ yêu thích.',
        memoryHook: 'CRISP (thanh mát) + REFRESHING (sảng khoái) = Cặp đôi miêu tả nước uống thượng hạng.',
        vocabularyHighlights: [
          { word: 'Naturally sweet', meaning: 'Vị ngọt thanh tự nhiên', phonetic: 'ˈnætʃrəli swiːt' },
          { word: 'Refreshing finish', meaning: 'Hậu vị thanh mát sảng khoái', phonetic: 'rɪˈfrɛʃɪŋ ˈfɪnɪʃ' }
        ]
      },
      {
        id: 'u2-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Nguồn nước phun lên từ lòng đất ở nhiệt độ 72 độ C."',
        englishSentence: 'The water emerges from the earth at 72 degrees Celsius.',
        audioText: 'The water emerges from the earth at 72 degrees Celsius.',
        phonetics: '/ðə ˈwɔːtər ɪˈmɜːrdʒɪz frəm ði ɜːrθ æt ˈsɛvnti tuː dɪˈgriːz ˈsɛlsiəs/',
        wordPool: ['The', 'water', 'emerges', 'from', 'the', 'earth', 'at', '72', 'degrees', 'Celsius.', 'cold', 'ice'],
        explanation: 'Nhiệt độ 72°C tại vòi phun chứng minh nguồn khoáng nguyên sinh sâu thẳm trong lòng núi lửa cổ.',
        whyWrong: 'Dùng từ "emerges" (tuôn trào/xuất lộ tự nhiên) đắt giá hơn nhiều so with "comes".',
        crucialNote: '72 độ C là bằng chứng sắt đá cho nguồn nước vô trùng tuyệt đối từ lòng địa chất ngàn năm.',
        memoryHook: '72°C Đảnh Thạnh = Nhiệt độ vàng của mỏ khoáng nóng thiên nhiên.',
        vocabularyHighlights: [
          { word: 'Emerge', meaning: 'Phun lên, xuất lộ tự nhiên', phonetic: 'ɪˈmɜːrdʒ' },
          { word: 'Degrees Celsius', meaning: 'Độ C', phonetic: 'dɪˈgriːz ˈsɛlsiəs' }
        ]
      },
      {
        id: 'u2-e6',
        type: 'speak',
        promptVi: 'Hỏi sở thích của đối tác: "Bạn thích nước khoáng không ga hay có ga hơn?"',
        englishSentence: 'Would you prefer still water or sparkling mineral water?',
        audioText: 'Would you prefer still water or sparkling mineral water?',
        phonetics: '/wʊd juː prɪˈfɜːr stɪl ˈwɔːtər ɔːr ˈspɑːrklɪŋ ˈmɪnərəl ˈwɔːtər/',
        explanation: '"Still water" là nước không ga, "Sparkling water" là nước khoáng có ga.',
        whyWrong: 'Người Việt hay gọi nước không ga là "no gas" - người nước ngoài chuẩn dùng "still water".',
        crucialNote: 'Tại các nhà hàng 5 sao quốc tế, phục vụ luôn hỏi câu "Still or sparkling?".',
        memoryHook: 'STILL = Yên tĩnh (không ga), SPARKLING = Lấp lánh sủi tăm (có ga).',
        vocabularyHighlights: [
          { word: 'Still water', meaning: 'Nước khoáng không ga', phonetic: 'stɪl ˈwɔːtər' },
          { word: 'Sparkling water', meaning: 'Nước khoáng có ga', phonetic: 'ˈspɑːrklɪŋ ˈwɔːtər' }
        ]
      }
    ]
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    title: 'Giao Tiếp Văn Phòng Cơ Bản 101',
    subtitle: 'Nhờ hỗ trợ, cảm ơn và xin phép nói chậm lại',
    level: 'A1',
    icon: '🏢',
    color: 'blue',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u3-e1',
        type: 'choice',
        promptVi: 'Khi đối tác ngoại quốc nói quá nhanh, bạn muốn nhờ họ nói chậm lại:',
        englishSentence: 'Could you speak a little slower, please?',
        audioText: 'Could you speak a little slower, please?',
        options: [
          'Could you speak a little slower, please?',
          'What? You talk too fast!',
          'Speak slow now!'
        ],
        correctIndex: 0,
        explanation: 'Người bản xứ rất tôn trọng khi bạn dùng "Could you speak a little slower, please?".',
        whyWrong: 'Nói "You talk too fast" mang tính chỉ trích đối phương, làm mất hòa khí trong buổi làm việc.',
        crucialNote: 'Thêm chữ "please" ở cuối câu với ngữ điệu nhẹ nhàng đi lên.',
        memoryHook: '"Could you speak a little slower" - nói chậm, rõ ràng để đối tác hiểu ý bạn ngay.',
        vocabularyHighlights: [
          { word: 'Speak slower', meaning: 'Nói chậm lại', phonetic: 'spiːk ˈsloʊər' },
          { word: 'Could you', meaning: 'Bạn có thể vui lòng...', phonetic: 'kʊd juː' }
        ]
      },
      {
        id: 'u3-e2',
        type: 'word_order',
        promptVi: 'Dịch câu: "Cảm ơn bạn rất nhiều vì sự hỗ trợ."',
        englishSentence: 'Thank you very much for your support.',
        audioText: 'Thank you very much for your support.',
        phonetics: '/θæŋk juː ˈvɛri mʌtʃ fɔːr jʊər səˈpɔːrt/',
        wordPool: ['Thank', 'you', 'very', 'much', 'for', 'your', 'support.', 'help', 'good'],
        explanation: 'Câu cảm ơn chuẩn mực gửi đến đồng nghiệp và đối tác.',
        whyWrong: 'Nhiều người nói "Thanks for your help" - thân mật, nhưng "support" trang trọng hơn cho B2B.',
        crucialNote: 'Dùng trong email hoặc khi kết thúc một cuộc trao đổi xử lý công việc.',
        memoryHook: 'Support = Nâng đỡ, hỗ trợ đắc lực.',
        vocabularyHighlights: [
          { word: 'Support', meaning: 'Sự hỗ trợ, đồng hành', phonetic: 'səˈpɔːrt' },
          { word: 'Appreciation', meaning: 'Sự trân trọng cảm kích', phonetic: 'əˌpriːʃiˈeɪʃn' }
        ]
      },
      {
        id: 'u3-e3',
        type: 'speak',
        promptVi: 'Chào tạm biệt đồng nghiệp vào cuối ngày làm việc:',
        englishSentence: 'Have a great evening! See you tomorrow.',
        audioText: 'Have a great evening! See you tomorrow.',
        phonetics: '/hæv ə greɪt ˈiːvnɪŋ! siː juː təˈmɒroʊ/',
        explanation: 'Tạo không khí làm việc vui vẻ, gắn kết trong văn phòng.',
        whyWrong: 'Đừng chỉ nói "Bye" cụt ngủn, hãy thêm lời chúc buổi tối vui vẻ.',
        crucialNote: 'Nụ cười tươi lúc ra về giúp xây dựng văn hóa công sở tích cực.',
        memoryHook: 'HAVE A GREAT EVENING = Chúc một buổi tối tuyệt vời!',
        vocabularyHighlights: [
          { word: 'Evening', meaning: 'Buổi tối', phonetic: 'ˈiːvnɪŋ' },
          { word: 'Colleague', meaning: 'Đồng nghiệp', phonetic: 'ˈkɒliːg' }
        ]
      },
      {
        id: 'u3-e4',
        type: 'choice',
        promptVi: 'Khi chưa nghe rõ một ý của đối tác, bạn xin phép hỏi lại một cách nhã nhặn:',
        englishSentence: 'Pardon me, could you repeat that once more?',
        audioText: 'Pardon me, could you repeat that once more?',
        options: [
          'Pardon me, could you repeat that once more?',
          'What did you say?',
          'Say again!'
        ],
        correctIndex: 0,
        explanation: '"Pardon me" hoặc "Could you repeat that" là cách chuẩn để xin nhắc lại mà không hề gây khó chịu.',
        whyWrong: 'Tuyệt đối tránh "What?" vì nghe như đang giật mình thách thức người nghe.',
        crucialNote: 'Kèm theo biểu cảm chăm chú và gật đầu tiếp thu khi đối tác nhắc lại.',
        memoryHook: 'PARDON = Xin thứ lỗi, cho tôi xin nghe lại.',
        vocabularyHighlights: [
          { word: 'Pardon', meaning: 'Xin thứ lỗi, xin nhắc lại', phonetic: 'ˈpɑːrdn' },
          { word: 'Repeat', meaning: 'Lặp lại', phonetic: 'rɪˈpiːt' }
        ]
      },
      {
        id: 'u3-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Tôi sẽ gửi email cho bạn tài liệu chi tiết vào chiều nay."',
        englishSentence: 'I will email you the detailed documents this afternoon.',
        audioText: 'I will email you the detailed documents this afternoon.',
        phonetics: '/aɪ wɪl ˈiːmeɪl juː ðə ˈdiːteɪld ˈdɒkjʊmənts ðɪs ˌæftərˈnuːn/',
        wordPool: ['I', 'will', 'email', 'you', 'the', 'detailed', 'documents', 'this', 'afternoon.', 'send', 'paper'],
        explanation: 'Cam kết hành động cụ thể và mốc thời gian rõ ràng (this afternoon).',
        whyWrong: '"Email" có thể dùng như một động từ (I will email you) thay vì nói dài dòng "I will send an email".',
        crucialNote: 'Luôn giữ đúng lời hứa về thời hạn gửi tài liệu để xây dựng uy tín với đối tác.',
        memoryHook: 'Detailed documents = Tài liệu chi tiết có bằng chứng cụ thể.',
        vocabularyHighlights: [
          { word: 'Detailed', meaning: 'Chi tiết, tường tận', phonetic: 'ˈdiːteɪld' },
          { word: 'Documents', meaning: 'Tài liệu, hồ sơ', phonetic: 'ˈdɒkjʊmənts' }
        ]
      },
      {
        id: 'u3-e6',
        type: 'speak',
        promptVi: 'Luyện câu thể hiện tinh thần sẵn sàng tương trợ đối tác:',
        englishSentence: 'Please feel free to ask if you have any questions.',
        audioText: 'Please feel free to ask if you have any questions.',
        phonetics: '/pliːz fiːl friː tuː æsk ɪf juː hæv ˈɛni ˈkwɛstʃənz/',
        explanation: '"Please feel free to..." là câu cửa miệng thể hiện sự cởi mở, sẵn lòng hỗ trợ hết mình.',
        whyWrong: 'Đừng ngần ngại kết thúc mọi buổi trao đổi bằng câu này để đối tác thoải mái mở lời.',
        crucialNote: 'Tạo tâm lý tin cậy và không tạo rào cản cho đối tác quốc tế.',
        memoryHook: 'FEEL FREE = Cứ tự nhiên, đừng ngại ngùng!',
        vocabularyHighlights: [
          { word: 'Feel free', meaning: 'Cứ tự nhiên, thoải mái', phonetic: 'fiːl friː' },
          { word: 'Assistance', meaning: 'Sự trợ giúp', phonetic: 'əˈsɪstəns' }
        ]
      }
    ]
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    title: 'Trực Điện Thoại & Hẹn Gặp Khách',
    subtitle: 'Nghe máy chuẩn chỉ, nối máy và ghi nhận lời nhắn',
    level: 'A1',
    icon: '📞',
    color: 'emerald',
    xpReward: 45,
    gemReward: 12,
    exercises: [
      {
        id: 'u4-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp câu nhấc máy lễ tân: "Vikoda xin nghe, tôi có thể giúp gì cho quý khách?"',
        englishSentence: 'Vikoda company, how may I help you?',
        audioText: 'Vikoda company, how may I help you?',
        phonetics: '/vɪˈkoʊdə ˈkʌmpəni, haʊ meɪ aɪ hɛlp juː/',
        wordPool: ['Vikoda', 'company,', 'how', 'may', 'I', 'help', 'you?', 'what', 'call'],
        explanation: '"How may I help you?" là câu chào kinh điển khi nhận cuộc gọi doanh nghiệp.',
        whyWrong: 'Không nên nói "Who is calling?" ngay khi vừa nhấc máy vì thiếu thiện cảm.',
        crucialNote: 'Giọng điệu khi nghe điện thoại phải tươi tắn, có "nụ cười trong giọng nói" (smiling voice).',
        memoryHook: 'Tên công ty + "How may I help you?" = Chuẩn mực lễ tân quốc tế.',
        vocabularyHighlights: [
          { word: 'How may I help you', meaning: 'Tôi có thể hỗ trợ gì cho bạn', phonetic: 'haʊ meɪ aɪ hɛlp juː' },
          { word: 'Receptionist', meaning: 'Nhân viên lễ tân', phonetic: 'rɪˈsɛpʃənɪst' }
        ]
      },
      {
        id: 'u4-e2',
        type: 'choice',
        promptVi: 'Khi người gọi muốn gặp sếp mà sếp đang họp, bạn trả lời khéo léo ra sao?',
        englishSentence: 'He is in a meeting right now. May I take a message?',
        audioText: 'He is in a meeting right now. May I take a message?',
        options: [
          'He is in a meeting right now. May I take a message?',
          'He is busy, do not call again.',
          'I do not know where he is.'
        ],
        correctIndex: 0,
        explanation: '"May I take a message?" (Tôi có thể ghi lại lời nhắn không?) thể hiện sự chu đáo tuyệt đối.',
        whyWrong: 'Nói sếp "busy" nghe giống như sếp né tránh khách hàng; "in a meeting" nghe chuyên nghiệp hơn.',
        crucialNote: 'Luôn chuẩn bị sẵn giấy bút để ghi lại tên khách, số điện thoại và nội dung nhắn gửi.',
        memoryHook: '"Take a message" = Ghi lại tin nhắn để chuyển giao.',
        vocabularyHighlights: [
          { word: 'Take a message', meaning: 'Ghi lại lời nhắn', phonetic: 'teɪk ə ˈmɛsɪdʒ' },
          { word: 'In a meeting', meaning: 'Đang bận họp', phonetic: 'ɪn ə ˈmiːtɪŋ' }
        ]
      },
      {
        id: 'u4-e3',
        type: 'speak',
        promptVi: 'Nói câu xin phép giữ máy để chuyển máy:',
        englishSentence: 'Please hold on, I will transfer your call.',
        audioText: 'Please hold on, I will transfer your call.',
        phonetics: '/pliːz hoʊld ɒn, aɪ wɪl trænsˈfɜːr jʊər kɔːl/',
        explanation: '"Please hold on" dùng khi yêu cầu đối tác chờ máy một chút.',
        whyWrong: 'Đừng dập máy hay để khách nghe tiếng ồn xung quanh mà không báo trước.',
        crucialNote: 'Từ "transfer" nghĩa là chuyển hướng cuộc gọi sang máy nhánh của phòng ban liên quan.',
        memoryHook: 'HOLD ON = Giữ máy chờ một chút. TRANSFER = Nối máy sang nhánh khác.',
        vocabularyHighlights: [
          { word: 'Hold on', meaning: 'Giữ máy chờ', phonetic: 'hoʊld ɒn' },
          { word: 'Transfer', meaning: 'Chuyển cuộc gọi', phonetic: 'trænsˈfɜːr' }
        ]
      },
      {
        id: 'u4-e4',
        type: 'choice',
        promptVi: 'Hỏi tên đối tác ở đầu dây bên kia một cách lịch sự:',
        englishSentence: 'May I ask who is calling, please?',
        audioText: 'May I ask who is calling, please?',
        options: [
          'May I ask who is calling, please?',
          'Who are you?',
          'Tell me your name!'
        ],
        correctIndex: 0,
        explanation: '"May I ask who is calling, please?" là câu hỏi danh tính chuẩn mực nhất qua điện thoại.',
        whyWrong: 'Hỏi "Who are you?" qua điện thoại bị coi là cực kỳ bất lịch sự trong tiếng Anh.',
        crucialNote: 'Ghi nhớ tên đối tác để xưng hô kính trọng ở các câu tiếp theo.',
        memoryHook: '"May I ask who is calling" = Cho tôi xin phép được biết quý danh người gọi.',
        vocabularyHighlights: [
          { word: 'May I ask', meaning: 'Cho tôi xin phép hỏi...', phonetic: 'meɪ aɪ æsk' },
          { word: 'Caller ID', meaning: 'Thông tin người gọi', phonetic: 'ˈkɔːlər aɪ-diː' }
        ]
      },
      {
        id: 'u4-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Tôi sẽ bảo anh ấy gọi lại cho bạn sớm nhất có thể."',
        englishSentence: 'I will ask him to call you back as soon as possible.',
        audioText: 'I will ask him to call you back as soon as possible.',
        phonetics: '/aɪ wɪl æsk hɪm tuː kɔːl juː bæk æz suːn æz ˈpɒsəbl/',
        wordPool: ['I', 'will', 'ask', 'him', 'to', 'call', 'you', 'back', 'as', 'soon', 'as', 'possible.', 'later'],
        explanation: '"As soon as possible (ASAP)" thể hiện sự sốt sắng phục vụ đối tác.',
        whyWrong: 'Nhớ cấu trúc: "ask someone to do something" (nhờ/bảo ai làm gì).',
        crucialNote: 'Khi hứa gọi lại, hãy đảm bảo chuyển ngay lời nhắn cho người phụ trách.',
        memoryHook: 'ASAP = Càng sớm càng tốt, phản ứng nhanh.',
        vocabularyHighlights: [
          { word: 'Call back', meaning: 'Gọi lại', phonetic: 'kɔːl bæk' },
          { word: 'As soon as possible', meaning: 'Sớm nhất có thể', phonetic: 'æz suːn æz ˈpɒsəbl' }
        ]
      },
      {
        id: 'u4-e6',
        type: 'speak',
        promptVi: 'Chốt lịch hẹn gặp trực tiếp tại văn phòng tuần tới:',
        englishSentence: 'Could we schedule a meeting for next Tuesday at ten?',
        audioText: 'Could we schedule a meeting for next Tuesday at ten?',
        phonetics: '/kʊd wiː ˈskɛdʒuːl ə ˈmiːtɪŋ fɔːr nɛkst ˈtjuːzdeɪ æt tɛn/',
        explanation: 'Cấu trúc chốt thời gian gặp gỡ chuyên nghiệp giữa các doanh nghiệp.',
        whyWrong: 'Dùng từ "schedule" (lên lịch) chuẩn xác hơn từ "make a meeting".',
        crucialNote: 'Nhắc lại thời gian cụ thể (ngày thứ mấy, mấy giờ) để tránh lệch múi giờ.',
        memoryHook: 'SCHEDULE = Lên lịch hẹn trang trọng.',
        vocabularyHighlights: [
          { word: 'Schedule', meaning: 'Lên lịch, sắp xếp cuộc họp', phonetic: 'ˈskɛdʒuːl' },
          { word: 'Appointment', meaning: 'Cuộc hẹn', phonetic: 'əˈpɔɪntmənt' }
        ]
      }
    ]
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    title: 'Chỉ Dẫn & Trao Quà Tặng Vikoda',
    subtitle: 'Chỉ đường phòng họp, nhà ăn và tặng quà lưu niệm nước khoáng',
    level: 'A1',
    icon: '🎁',
    color: 'amber',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u5-e1',
        type: 'choice',
        promptVi: 'Chỉ lối vào phòng họp lớn tầng 2 cho đoàn khách:',
        englishSentence: 'The meeting room is on the second floor, this way please.',
        audioText: 'The meeting room is on the second floor, this way please.',
        options: [
          'The meeting room is on the second floor, this way please.',
          'Go up somewhere.',
          'Find the room yourself.'
        ],
        correctIndex: 0,
        explanation: '"This way please" (Mời đi lối này) vừa lịch sự vừa ân cần.',
        whyWrong: 'Khách đến nơi lạ rất dễ bỡ ngỡ, việc dẫn đường chu đáo để lại ấn tượng tốt đẹp.',
        crucialNote: 'Đi trước khách nửa bước và dùng tay hướng dẫn lối đi lên thang máy hoặc cầu thang.',
        memoryHook: '"This way please" = Lối này, xin mời quý khách đi trước.',
        vocabularyHighlights: [
          { word: 'Second floor', meaning: 'Tầng hai', phonetic: 'ˈsɛkənd flɔːr' },
          { word: 'This way please', meaning: 'Xin mời đi lối này', phonetic: 'ðɪs weɪ pliːz' }
        ]
      },
      {
        id: 'u5-e2',
        type: 'word_order',
        promptVi: 'Sắp xếp câu tặng quà kỷ niệm: "Đây là món quà đặc biệt từ mỏ khoáng Đảnh Thạnh gửi tặng bạn."',
        englishSentence: 'This is a special gift from Danh Thanh spring for you.',
        audioText: 'This is a special gift from Danh Thanh spring for you.',
        phonetics: '/ðɪs ɪz ə ˈspɛʃl gɪft frəm daɪn taɪŋ sprɪŋ fɔːr juː/',
        wordPool: ['This', 'is', 'a', 'special', 'gift', 'from', 'Danh', 'Thanh', 'spring', 'for', 'you.', 'buy'],
        explanation: 'Tặng quà lưu niệm kết hợp nhắc đến mỏ Đảnh Thạnh giúp khắc sâu dấu ấn thương hiệu.',
        whyWrong: 'Tặng quà bằng tiếng Anh nên nhấn mạnh nguồn gốc mỏ khoáng tự nhiên ("from Danh Thanh spring").',
        crucialNote: 'Hộp quà Vikoda thủy tinh kèm brochure song ngữ là món quà ngoại giao hoàn hảo.',
        memoryHook: 'Special gift from spring = Món quà đặc biệt từ suối khoáng ngàn năm.',
        vocabularyHighlights: [
          { word: 'Special gift', meaning: 'Món quà đặc biệt', phonetic: 'ˈspɛʃl gɪft' },
          { word: 'Spring', meaning: 'Mỏ nước khoáng, suối nguồn', phonetic: 'sprɪŋ' }
        ]
      },
      {
        id: 'u5-e3',
        type: 'speak',
        promptVi: 'Tiễn khách ra sảnh và chúc chuyến đi tốt lành:',
        englishSentence: 'Thank you for visiting us. Have a safe flight!',
        audioText: 'Thank you for visiting us. Have a safe flight!',
        phonetics: '/θæŋk juː fɔːr ˈvɪzɪtɪŋ ʌs. hæv ə seɪf flaɪt!/',
        explanation: 'Lời chúc ấm áp để lại thiện cảm sâu sắc cho đối tác quốc tế.',
        whyWrong: 'Lời chào tạm biệt chu đáo là khâu cuối cùng quyết định ấn tượng đọng lại sau chuyến thăm.',
        crucialNote: 'Đứng tiễn cho đến khi xe của khách rời khỏi khuôn viên trụ sở.',
        memoryHook: 'THANK YOU FOR VISITING = Cảm ơn vì chuyến ghé thăm quý báu.',
        vocabularyHighlights: [
          { word: 'Visiting', meaning: 'Ghé thăm', phonetic: 'ˈvɪzɪtɪŋ' },
          { word: 'Safe flight', meaning: 'Chuyến bay an toàn, thuận buồm xuôi gió', phonetic: 'seɪf flaɪt' }
        ]
      },
      {
        id: 'u5-e4',
        type: 'choice',
        promptVi: 'Mời đoàn đối tác dùng bữa trưa nhẹ tại nhà ăn công ty hoặc nhà hàng địa phương:',
        englishSentence: 'We would love to invite you to join us for lunch.',
        audioText: 'We would love to invite you to join us for lunch.',
        options: [
          'We would love to invite you to join us for lunch.',
          'Go buy your own food now.',
          'Eat anything you can find.'
        ],
        correctIndex: 0,
        explanation: '"We would love to invite you to join us for lunch" thể hiện lòng hiếu khách nồng hậu của người Việt Nam.',
        whyWrong: 'Bữa trưa là cơ hội vàng để kết nối cá nhân sâu sắc hơn với đối tác nước ngoài.',
        crucialNote: 'Nhớ hỏi trước xem đối tác có kiêng ăn món gì (dị ứng, ăn chay, đạo Hồi Halal) hay không.',
        memoryHook: 'WE WOULD LOVE TO INVITE YOU = Chúng tôi rất vinh hạnh được mời bạn.',
        vocabularyHighlights: [
          { word: 'Invite', meaning: 'Mời mọc trang trọng', phonetic: 'ɪnˈvaɪt' },
          { word: 'Dietary restriction', meaning: 'Yêu cầu kiêng cữ món ăn', phonetic: 'ˈdaɪətəri rɪˈstrɪkʃn' }
        ]
      },
      {
        id: 'u5-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Chiếc hộp này chứa các mẫu chai nước khoáng thủy tinh cao cấp nhất của chúng tôi."',
        englishSentence: 'This box contains samples of our premium glass bottles.',
        audioText: 'This box contains samples of our premium glass bottles.',
        phonetics: '/ðɪs bɒks kənˈteɪnz ˈsɑːmplz əv aʊər ˈpriːmiəm glæs ˈbɒtlz/',
        wordPool: ['This', 'box', 'contains', 'samples', 'of', 'our', 'premium', 'glass', 'bottles.', 'sell', 'dirty'],
        explanation: 'Giới thiệu hộp mẫu thử (sample box) chai thủy tinh sang trọng.',
        whyWrong: 'Dùng từ "premium glass bottles" thể hiện phân khúc cao cấp cho các khách sạn 5 sao.',
        crucialNote: 'Chai thủy tinh Vikoda 430ml là dòng sản phẩm chủ lực định vị cao cấp.',
        memoryHook: 'Premium glass bottles = Chai thủy tinh thượng hạng.',
        vocabularyHighlights: [
          { word: 'Contains', meaning: 'Chứa đựng', phonetic: 'kənˈteɪnz' },
          { word: 'Premium glass', meaning: 'Thủy tinh cao cấp', phonetic: 'ˈpriːmiəm glæs' }
        ]
      },
      {
        id: 'u5-e6',
        type: 'speak',
        promptVi: 'Nói lời hứa hẹn sẽ duy trì liên lạc và đón tiếp khách trong lần công tác sau:',
        englishSentence: 'We look forward to collaborating with you soon.',
        audioText: 'We look forward to collaborating with you soon.',
        phonetics: '/wiː lʊk ˈfɔːrwərd tuː kəˈlæbəreɪtɪŋ wɪð juː suːn/',
        explanation: 'Khẳng định mong muốn hợp tác lâu dài sau buổi tiếp đón đầu tiên.',
        whyWrong: 'Nhớ quy tắc ngữ pháp: Sau "look forward to" luôn đi kèm động từ thêm -ING (collaborating).',
        crucialNote: '"Collaborating" (hợp tác cùng có lợi) nghe đối tác hơn từ "working with".',
        memoryHook: 'LOOK FORWARD TO + V-ING = Trông chờ, mong mỏi ngày cộng tác.',
        vocabularyHighlights: [
          { word: 'Collaborate', meaning: 'Cộng tác, hợp tác chiến lược', phonetic: 'kəˈlæbəreɪt' },
          { word: 'Partnership', meaning: 'Mối quan hệ đối tác', phonetic: 'ˈpɑːrtnərʃɪp' }
        ]
      }
    ]
  },

  // ==================== LEVEL A2-B1: BÁN HÀNG & TIẾP ĐÓN KHÁCH THĂM NHÀ MÁY ====================
  {
    id: 'unit-6',
    unitNumber: 1,
    title: 'Tiếp Đón Khách Thăm Mỏ Đảnh Thạnh',
    subtitle: 'Độ sâu 220m, nhiệt độ 72°C và vành đai xanh 35ha',
    level: 'A2-B1',
    icon: '🏞️',
    color: 'emerald',
    xpReward: 55,
    gemReward: 15,
    exercises: [
      {
        id: 'u6-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Nước được khai thác từ độ sâu 220 mét."',
        englishSentence: 'The water is extracted from a depth of 220 meters.',
        audioText: 'The water is extracted from a depth of 220 meters.',
        phonetics: '/ðə ˈwɔːtər ɪz ɪkˈstræktɪd frəm ə dɛpθ əv tuː ˈhʌndrəd ˈtwɛnti ˈmiːtərz/',
        wordPool: ['The', 'water', 'is', 'extracted', 'from', 'a', 'depth', 'of', '220', 'meters.', 'deep', 'take'],
        explanation: '"Extracted from a depth of..." là cụm từ kỹ thuật chuẩn khi giới thiệu nhà máy.',
        whyWrong: 'Dùng từ "extracted" (khai thác chuẩn địa chất) thay vì "taken" hay "pumped" đơn thuần.',
        crucialNote: 'Độ sâu 220m nằm sâu dưới các tầng đá magma cổ, đảm bảo nước không bị nhiễm bẩn bề mặt.',
        memoryHook: 'Depth of 220 meters = Độ sâu 220 mét chạm tới tầng khoáng nguyên thủy.',
        vocabularyHighlights: [
          { word: 'Extracted', meaning: 'Được khai thác', phonetic: 'ɪkˈstræktɪd' },
          { word: 'Depth', meaning: 'Độ sâu địa chất', phonetic: 'dɛpθ' }
        ]
      },
      {
        id: 'u6-e2',
        type: 'choice',
        promptVi: 'Nhiệt độ tại vòi phun của mỏ khoáng Đảnh Thạnh là bao nhiêu?',
        englishSentence: 'The spring temperature at the tap reaches seventy-two degrees Celsius.',
        audioText: 'The spring temperature at the tap reaches seventy-two degrees Celsius.',
        options: [
          'The spring temperature at the tap reaches seventy-two degrees Celsius.',
          'The tap water is freezing at 0 degrees Celsius.',
          'The tap temperature is 30 degrees Celsius.'
        ],
        correctIndex: 0,
        explanation: 'Nhiệt độ tự nhiên 72°C chứng minh nguồn khoáng nóng sâu trong lòng núi lửa cổ.',
        whyWrong: 'Nước khoáng đạt 72°C tự nhiên chứng tỏ tính vô trùng tuyệt đối từ lòng đất.',
        crucialNote: 'Nhắc đến nhiệt độ 72°C để phân biệt với các loại nước ngầm thông thường chỉ có nhiệt độ 25-28°C.',
        memoryHook: '72 DEGREES CELSIUS = Nhiệt độ nóng nguyên bản tại vòi phun mỏ Đảnh Thạnh.',
        vocabularyHighlights: [
          { word: 'Spring temperature', meaning: 'Nhiệt độ mỏ khoáng', phonetic: 'sprɪŋ ˈtɛmprətʃər' },
          { word: 'At the tap', meaning: 'Tại vòi phun nguyên thủy', phonetic: 'æt ðə tæp' }
        ]
      },
      {
        id: 'u6-e3',
        type: 'speak',
        promptVi: 'Luyện nói câu giới thiệu vành đai bảo vệ sinh thái 35 hecta:',
        englishSentence: 'We protect our source with a 35-hectare green ecological zone.',
        audioText: 'We protect our source with a 35-hectare green ecological zone.',
        phonetics: '/wiː prəˈtɛkt aʊər sɔːrs wɪð ə θɜːrti-faɪv ˈhɛktɛər griːn ˌiːkəˈlɒdʒɪkl zoʊn/',
        explanation: 'Khẳng định nguồn nước được cách ly hoàn toàn khỏi khu dân cư và chất thải ô nhiễm.',
        whyWrong: 'Nhiều người nói "forest" - từ chuyên ngành là "ecological sanctuary" hoặc "green ecological zone".',
        crucialNote: 'Khách hàng B2B Châu Âu đặc biệt quan tâm tới bán kính bảo vệ nguồn nước khỏi thuốc trừ sâu.',
        memoryHook: '35 HECTARES = Vành đai xanh bảo hộ sự tinh khiết ngàn năm.',
        vocabularyHighlights: [
          { word: 'Ecological zone', meaning: 'Vành đai sinh thái', phonetic: 'ˌiːkəˈlɒdʒɪkl zoʊn' },
          { word: 'Sanctuary', meaning: 'Vùng bảo tồn bất khả xâm phạm', phonetic: 'ˈsæŋktʃuəri' }
        ]
      },
      {
        id: 'u6-e4',
        type: 'choice',
        promptVi: 'Giới thiệu về lịch sử phát hiện mỏ Đảnh Thạnh năm 1957:',
        englishSentence: 'Danh Thanh mineral spring was officially discovered and tested by French geologists in 1957.',
        audioText: 'Danh Thanh mineral spring was officially discovered and tested by French geologists in 1957.',
        options: [
          'Danh Thanh mineral spring was officially discovered and tested by French geologists in 1957.',
          'Vikoda was discovered by a tourist yesterday.',
          'Nobody tested the spring before 2020.'
        ],
        correctIndex: 0,
        explanation: 'Năm 1957, các nhà địa chất học người Pháp và bác sĩ Henri Fontaine đã khám phá và công nhận mỏ Đảnh Thạnh.',
        whyWrong: 'Di sản lịch sử từ năm 1957 khẳng định giá trị bền vững lâu đời ngang tầm các mỏ khoáng châu Âu.',
        crucialNote: 'Dẫn chứng tài liệu nghiên cứu địa chất Pháp là luận điểm thuyết phục bậc nhất.',
        memoryHook: 'SINCE 1957 = Di sản gần 70 năm khai phóng kho báu ngọc trong đá.',
        vocabularyHighlights: [
          { word: 'French geologists', meaning: 'Các nhà địa chất học người Pháp', phonetic: 'frɛnʧ dʒiˈɒlədʒɪsts' },
          { word: 'Heritage', meaning: 'Di sản thiên nhiên', phonetic: 'ˈhɛrɪtɪdʒ' }
        ]
      },
      {
        id: 'u6-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Nguồn nước được lọc tự nhiên qua nhiều tầng đá granit nguyên sinh."',
        englishSentence: 'The water is naturally filtered through layers of pristine granite.',
        audioText: 'The water is naturally filtered through layers of pristine granite.',
        phonetics: '/ðə ˈwɔːtər ɪz ˈnætʃrəli ˈfɪltərd θruː ˈleɪərz əv ˈprɪstiːn ˈgrænɪt/',
        wordPool: ['The', 'water', 'is', 'naturally', 'filtered', 'through', 'layers', 'of', 'pristine', 'granite.', 'plastic'],
        explanation: 'Đá granit đóng vai trò như một màng lọc tự nhiên vĩ đại làm giàu khoáng chất.',
        whyWrong: 'Dùng từ "pristine granite" (đá hoa cương nguyên thủy) tạo hình tượng sang trọng và thuần khiết.',
        crucialNote: 'Chính quá trình thẩm thấu hàng trăm năm qua đá granit tạo nên hàm lượng Silic quý hiếm.',
        memoryHook: 'Filtered through granite = Lọc qua tầng đá ngọc ngàn năm.',
        vocabularyHighlights: [
          { word: 'Naturally filtered', meaning: 'Được lọc tự nhiên', phonetic: 'ˈnætʃrəli ˈfɪltərd' },
          { word: 'Pristine granite', meaning: 'Đá granit nguyên sinh', phonetic: 'ˈprɪstiːn ˈgrænɪt' }
        ]
      },
      {
        id: 'u6-e6',
        type: 'speak',
        promptVi: 'Tuyên bố tự hào về mỏ Đảnh Thạnh: "Đây là báu vật vô giá của thiên nhiên Khánh Hòa."',
        englishSentence: 'This spring is an invaluable natural treasure of Khanh Hoa province.',
        audioText: 'This spring is an invaluable natural treasure of Khanh Hoa province.',
        phonetics: '/ðɪs sprɪŋ ɪz ən ɪnˈvæljʊəbl ˈnætʃrəl ˈtrɛʒər əv kɑːn hwɑː ˈprɒvɪns/',
        explanation: '"Invaluable natural treasure" truyền tải lòng tự tôn và giá trị độc bản của Vikoda.',
        whyWrong: 'Từ "invaluable" nghĩa là "vô giá, quý báu khôn cùng" (không phải là không có giá trị).',
        crucialNote: 'Nhấn mạnh mối liên hệ giữa thiên nhiên Khánh Hòa và thương hiệu quốc gia.',
        memoryHook: 'INVALUABLE = Quý giá đến mức không tiền bạc nào đo đếm nổi.',
        vocabularyHighlights: [
          { word: 'Invaluable', meaning: 'Vô giá, cực kỳ quý báu', phonetic: 'ɪnˈvæljʊəbl' },
          { word: 'Natural treasure', meaning: 'Bảo vật tự nhiên', phonetic: 'ˈnætʃrəl ˈtrɛʒər' }
        ]
      }
    ]
  },
  {
    id: 'unit-7',
    unitNumber: 2,
    title: '5 Yếu Tố Khẳng Định Vị Thế "Nước Tốt"',
    subtitle: 'Giải thích độ kiềm pH 9.0 tự nhiên và axit Metasilicic',
    level: 'A2-B1',
    icon: '💎',
    color: 'cyan',
    xpReward: 60,
    gemReward: 18,
    exercises: [
      {
        id: 'u7-e1',
        type: 'choice',
        promptVi: 'Vì sao nước kiềm pH 9.0 của Vikoda tốt cho sức khỏe dạ dày?',
        englishSentence: 'It naturally neutralizes excess stomach acid and eases heartburn.',
        audioText: 'It naturally neutralizes excess stomach acid and eases heartburn.',
        options: [
          'It naturally neutralizes excess stomach acid and eases heartburn.',
          'It makes your stomach produce more acid.',
          'It has no effect on digestion.'
        ],
        correctIndex: 0,
        explanation: '"Neutralize excess stomach acid" = Trung hòa axit dư thừa trong dạ dày, đẩy lùi chứng ợ chua và trào ngược.',
        whyWrong: 'Vikoda chỉ trung hòa axit dư thừa (excess acid) chứ không triệt tiêu axit tiêu hóa sinh lý bình thường.',
        crucialNote: 'Độ kiềm pH 9.0 là độ kiềm lý tưởng nhất được các chuyên gia y tế khuyên dùng.',
        memoryHook: 'NEUTRALIZE EXCESS ACID = Trung hòa axit dư thừa, êm dịu dạ dày.',
        vocabularyHighlights: [
          { word: 'Neutralize', meaning: 'Trung hòa axit', phonetic: 'ˈnjuːtrəlaɪz' },
          { word: 'Excess stomach acid', meaning: 'Axit dạ dày dư thừa', phonetic: 'ɪkˈsɛs ˈstʌmək ˈæsɪd' },
          { word: 'Heartburn', meaning: 'Chứng ợ nóng, trào ngược', phonetic: 'ˈhɑːrtbɜːrn' }
        ]
      },
      {
        id: 'u7-e2',
        type: 'word_order',
        promptVi: 'Dịch câu: "Axit Metasilicic giúp da sáng khỏe và khớp linh hoạt."',
        englishSentence: 'Metasilicic acid supports radiant skin and flexible joints.',
        audioText: 'Metasilicic acid supports radiant skin and flexible joints.',
        phonetics: '/ˌmɛtəsɪˈlɪsɪk ˈæsɪd səˈpɔːrts ˈreɪdiənt skɪn ænd ˈflɛksəbl dʒɔɪnts/',
        wordPool: ['Metasilicic', 'acid', 'supports', 'radiant', 'skin', 'and', 'flexible', 'joints.', 'good', 'bone'],
        explanation: 'H2SiO3 là thành phần độc bản tạo nên vị ngọt dịu thanh mát và kích thích tái tạo collagen tự nhiên.',
        whyWrong: 'Axit Metasilicic (H2SiO3) là vi khoáng làm đẹp (beauty mineral) rất hiếm trong nước đóng chai.',
        crucialNote: 'Khi giới thiệu cho đối tác nữ hoặc chuỗi Spa cao cấp, luôn nhấn mạnh công dụng dưỡng da của Silic.',
        memoryHook: 'METASILICIC = Silic quý tạo Collagen cho da sáng & khớp dẻo dai.',
        vocabularyHighlights: [
          { word: 'Metasilicic acid', meaning: 'Axit Metasilicic (H2SiO3)', phonetic: 'ˌmɛtəsɪˈlɪsɪk ˈæsɪd' },
          { word: 'Radiant skin', meaning: 'Làn da rạng rỡ, căng tràn sức sống', phonetic: 'ˈreɪdiənt skɪn' },
          { word: 'Flexible joints', meaning: 'Xương khớp linh hoạt', phonetic: 'ˈflɛksəbl dʒɔɪnts' }
        ]
      },
      {
        id: 'u7-e3',
        type: 'speak',
        promptVi: 'Khẳng định độ bền pH vượt trội suốt 3 năm:',
        englishSentence: 'Vikoda maintains a stable pH 9.0 for up to three years.',
        audioText: 'Vikoda maintains a stable pH 9.0 for up to three years.',
        phonetics: '/vɪˈkoʊdə meɪnˈteɪnz ə ˈsteɪbl piː-eɪtʃ naɪn fɔːr ʌp tuː θriː jɪərz/',
        explanation: 'Điểm khác biệt tuyệt đối so với nước máy kiềm nhân tạo bị mất kiềm sau vài giờ.',
        whyWrong: 'Máy lọc điện phân kiềm chỉ giữ kiềm được 24-48h, còn Vikoda giữ kiềm tự nhiên bền vững 3 năm.',
        crucialNote: 'Bảo chứng thời hạn lưu kho (shelf life) là tiêu chí hàng đầu của các chuỗi siêu thị và nhà xuất khẩu.',
        memoryHook: 'STABLE pH 9.0 UP TO 3 YEARS = Độ kiềm bền vững suốt 3 năm.',
        vocabularyHighlights: [
          { word: 'Stable pH', meaning: 'Độ pH ổn định bền vững', phonetic: 'ˈsteɪbl piː-eɪtʃ' },
          { word: 'Shelf life', meaning: 'Thời hạn sử dụng trên kệ', phonetic: 'ʃɛlf laɪf' }
        ]
      },
      {
        id: 'u7-e4',
        type: 'choice',
        promptVi: 'Chỉ số chống oxy hóa ORP của Vikoda là bao nhiêu và có ý nghĩa gì?',
        englishSentence: 'Vikoda has a negative ORP of minus 100 millivolts to fight free radicals.',
        audioText: 'Vikoda has a negative ORP of minus 100 millivolts to fight free radicals.',
        options: [
          'Vikoda has a negative ORP of minus 100 millivolts to fight free radicals.',
          'ORP is positive 500 millivolts causing rapid oxidation.',
          'Vikoda has no electrical potential.'
        ],
        correctIndex: 0,
        explanation: 'Chỉ số ORP âm (-100mV) thể hiện khả năng khử oxy hóa mạnh mẽ, chống lão hóa tế bào.',
        whyWrong: 'Nước lọc RO hoặc nước máy có ORP dương (+200 đến +400mV), còn Vikoda có ORP âm bảo vệ tế bào.',
        crucialNote: 'ORP (Oxidation Reduction Potential) là thuật ngữ khoa học đỉnh cao làm mê hoặc các buyer chuyên nghiệp.',
        memoryHook: 'ORP ÂM (-100mV) = Khắc tinh của gốc tự do (free radicals).',
        vocabularyHighlights: [
          { word: 'Negative ORP', meaning: 'Chỉ số ORP âm chống oxy hóa', phonetic: 'ˈnɛgətɪv oʊ-ɑːr-piː' },
          { word: 'Free radicals', meaning: 'Các gốc tự do gây lão hóa', phonetic: 'friː ˈrædɪklz' }
        ]
      },
      {
        id: 'u7-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Các cụm phân tử nước siêu nhỏ giúp thẩm thấu nhanh vào từng tế bào."',
        englishSentence: 'Micro-clusters of water molecules allow rapid cellular hydration.',
        audioText: 'Micro-clusters of water molecules allow rapid cellular hydration.',
        phonetics: '/ˈmaɪkroʊ-ˈklʌstərz əv ˈwɔːtər ˈmɒlɪkjuːlz əˈlaʊ ˈræpɪd ˈsɛljʊlər haɪˈdreɪʃn/',
        wordPool: ['Micro-clusters', 'of', 'water', 'molecules', 'allow', 'rapid', 'cellular', 'hydration.', 'slow', 'fat'],
        explanation: 'Cụm phân tử nước siêu nhỏ thẩm thấu qua màng tế bào nhanh hơn gấp nhiều lần nước thông thường.',
        whyWrong: 'Uống Vikoda không bao giờ bị ậm ạch bụng nhờ tốc độ hấp thụ tế bào cực nhanh.',
        crucialNote: 'Rất thích hợp cho vận động viên, người tập gym và người thường xuyên vận động mạnh.',
        memoryHook: 'MICRO-CLUSTERS = Cụm phân tử siêu vi thẩm thấu tức thì.',
        vocabularyHighlights: [
          { word: 'Micro-clusters', meaning: 'Cụm phân tử nước siêu nhỏ', phonetic: 'ˈmaɪkroʊ-ˈklʌstərz' },
          { word: 'Cellular hydration', meaning: 'Cấp nước ở cấp độ tế bào', phonetic: 'ˈsɛljʊlər haɪˈdreɪʃn' }
        ]
      },
      {
        id: 'u7-e6',
        type: 'speak',
        promptVi: 'Tổng kết 5 yếu tố vàng: "Vikoda là đỉnh cao của nước khoáng kiềm thiên nhiên chăm sóc sức khỏe chủ động."',
        englishSentence: 'Vikoda represents the pinnacle of natural wellness hydration.',
        audioText: 'Vikoda represents the pinnacle of natural wellness hydration.',
        phonetics: '/vɪˈkoʊdə ˌrɛprɪˈzɛnts ðə ˈpɪnəkl əv ˈnætʃrəl ˈwɛlnəs haɪˈdreɪʃn/',
        explanation: '"Pinnacle of natural wellness hydration" định vị Vikoda ở đẳng cấp cao nhất trên thị trường đồ uống.',
        whyWrong: 'Dùng từ "pinnacle" (đỉnh cao, tinh hoa) thể hiện niềm tự hào tuyệt đối về thương hiệu.',
        crucialNote: 'Wellness hydration là xu hướng tỷ đô đang bùng nổ trên toàn cầu.',
        memoryHook: 'PINNACLE = Đỉnh cao không đối thủ.',
        vocabularyHighlights: [
          { word: 'Pinnacle', meaning: 'Đỉnh cao, tột đỉnh', phonetic: 'ˈpɪnəkl' },
          { word: 'Wellness hydration', meaning: 'Nước uống chăm sóc sức khỏe chủ động', phonetic: 'ˈwɛlnəs haɪˈdreɪʃn' }
        ]
      }
    ]
  },
  {
    id: 'unit-8',
    unitNumber: 3,
    title: 'Phân Biệt Nước Khoáng Thiên Nhiên vs Nước RO',
    subtitle: 'Giải thích vì sao nước cất khử khoáng RO không thể so sánh với Vikoda',
    level: 'A2-B1',
    icon: '🔬',
    color: 'blue',
    xpReward: 65,
    gemReward: 20,
    exercises: [
      {
        id: 'u8-e1',
        type: 'choice',
        promptVi: 'Sự khác biệt lớn nhất giữa nước tinh khiết lọc RO và nước khoáng thiên nhiên Vikoda là gì?',
        englishSentence: 'RO water strips out essential minerals, while Vikoda naturally contains vital electrolytes.',
        audioText: 'RO water strips out essential minerals, while Vikoda naturally contains vital electrolytes.',
        options: [
          'RO water strips out essential minerals, while Vikoda naturally contains vital electrolytes.',
          'RO water has more vitamins than Vikoda.',
          'They are exactly the same thing.'
        ],
        correctIndex: 0,
        explanation: 'Lọc RO làm nước trở thành nước "chết" mất hết vi khoáng, còn Vikoda giữ trọn vẹn điện giải tự nhiên.',
        whyWrong: 'Nước lọc RO (như Aquafina, Dasani) là nước tinh khiết bị rút cạn khoáng, tính axit nhẹ pH 5.5 - 6.5.',
        crucialNote: 'Khi tư vấn cho các chuyên gia dinh dưỡng hoặc bác sĩ, nhấn mạnh sự nguy hại khi uống nước mất khoáng lâu dài.',
        memoryHook: 'RO = Rút cạn Oanh liệt (mất khoáng). VIKODA = Vẹn nguyên Ion Khoáng Đảnh Thạnh.',
        vocabularyHighlights: [
          { word: 'Strips out', meaning: 'Tẩy sạch, rút cạn kiệt', phonetic: 'strɪps aʊt' },
          { word: 'Vital electrolytes', meaning: 'Điện giải thiết yếu cho sự sống', phonetic: 'ˈvaɪtl ɪˈlɛktrəlaɪts' }
        ]
      },
      {
        id: 'u8-e2',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Nước của chúng tôi có hàm lượng khoáng nhẹ lý tưởng để uống mỗi ngày."',
        englishSentence: 'Our water has light mineral content ideal for daily hydration.',
        audioText: 'Our water has light mineral content ideal for daily hydration.',
        phonetics: '/aʊər ˈwɔːtər hæz laɪt ˈmɪnərəl ˈkɒntɛnt aɪˈdiːəl fɔːr ˈdeɪli haɪˈdreɪʃn/',
        wordPool: ['Our', 'water', 'has', 'light', 'mineral', 'content', 'ideal', 'for', 'daily', 'hydration.', 'drink', 'salty'],
        explanation: 'TDS nhẹ (100 - 400 mg/L) an toàn tuyệt đối cho thận khi uống liên tục cả đời.',
        whyWrong: 'Nhiều người sợ sỏi thận vì nhầm với nước khoáng nặng Châu Âu (TDS > 1000mg/L). TDS của Vikoda là khoáng nhẹ lý tưởng.',
        crucialNote: 'Chỉ số TDS 100-400 mg/L giúp bù khoáng mà không gây áp lực lọc cho cầu thận.',
        memoryHook: 'LIGHT MINERAL CONTENT = Khoáng nhẹ êm ái, uống cả đời an tâm.',
        vocabularyHighlights: [
          { word: 'Light mineral content', meaning: 'Hàm lượng khoáng nhẹ', phonetic: 'laɪt ˈmɪnərəl ˈkɒntɛnt' },
          { word: 'Daily hydration', meaning: 'Bù nước hàng ngày', phonetic: 'ˈdeɪli haɪˈdreɪʃn' }
        ]
      },
      {
        id: 'u8-e3',
        type: 'speak',
        promptVi: 'Luyện nói câu cam kết nguyên chất 100% không xử lý hóa chất:',
        englishSentence: 'We preserve original nature without any chemical additives.',
        audioText: 'We preserve original nature without any chemical additives.',
        phonetics: '/wiː prɪˈzɜːrv əˈrɪdʒənl ˈneɪtʃər wɪˈðaʊt ˈɛni ˈkɛmɪkl ˈædɪtɪvz/',
        explanation: 'Thông điệp củng cố niềm tin tuyệt đối cho khách hàng cao cấp.',
        whyWrong: 'Dùng từ "preserve original nature" (bảo tồn tự nhiên nguyên bản) thể hiện triết lý đạo đức sản xuất.',
        crucialNote: 'Tuyệt đối không pha trộn muối khoáng nhân tạo hay chất điều vị.',
        memoryHook: 'ZERO CHEMICAL ADDITIVES = 100% nguyên bản không phụ gia.',
        vocabularyHighlights: [
          { word: 'Preserve', meaning: 'Gìn giữ, bảo tồn nguyên vẹn', phonetic: 'prɪˈzɜːrv' },
          { word: 'Chemical additives', meaning: 'Phụ gia hóa chất', phonetic: 'ˈkɛmɪkl ˈædɪtɪvz' }
        ]
      },
      {
        id: 'u8-e4',
        type: 'choice',
        promptVi: 'Điểm khác biệt về độ pH giữa nước RO và nước khoáng Vikoda là gì?',
        englishSentence: 'RO water is slightly acidic at pH 6, whereas Vikoda is naturally alkaline at pH 9.',
        audioText: 'RO water is slightly acidic at pH 6, whereas Vikoda is naturally alkaline at pH 9.',
        options: [
          'RO water is slightly acidic at pH 6, whereas Vikoda is naturally alkaline at pH 9.',
          'RO water has pH 14 and Vikoda has pH 1.',
          'Both waters have exactly the same neutral pH 7.'
        ],
        correctIndex: 0,
        explanation: 'Nước lọc RO mất khoáng kiềm nên hấp thụ CO2 từ không khí thành axit cacbonic nhẹ (pH 5.5-6.5), trong khi Vikoda vững vàng ở pH 9.0.',
        whyWrong: 'Uống nước có tính axit kéo dài góp phần làm tăng gánh nặng axit hóa nội môi cơ thể.',
        crucialNote: '"Whereas" dùng để tạo sự đối lập tương phản rõ rệt trong câu so sánh B2B.',
        memoryHook: 'RO = Hơi Axit (pH 6), VIKODA = Kiềm Tự Nhiên Hoàn Hảo (pH 9).',
        vocabularyHighlights: [
          { word: 'Slightly acidic', meaning: 'Có tính axit nhẹ', phonetic: 'ˈslaɪtli əˈsɪdɪk' },
          { word: 'Whereas', meaning: 'Trong khi đó (đối lập)', phonetic: 'ˌweərˈæz' }
        ]
      },
      {
        id: 'u8-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Nước khử khoáng có thể rút bớt khoáng chất tự nhiên khỏi cơ thể bạn."',
        englishSentence: 'Demineralized water can leach vital minerals from your body cells.',
        audioText: 'Demineralized water can leach vital minerals from your body cells.',
        phonetics: '/diːˈmɪnərəlaɪzd ˈwɔːtər kæn liːʧ ˈvaɪtl ˈmɪnərəlz frəm jʊər ˈbɒdi sɛlz/',
        wordPool: ['Demineralized', 'water', 'can', 'leach', 'vital', 'minerals', 'from', 'your', 'body', 'cells.', 'add', 'give'],
        explanation: 'Tổ chức Y tế Thế giới (WHO) cảnh báo nước cất/RO khử khoáng có xu hướng hòa tan và rửa trôi khoáng chất trong tế bào.',
        whyWrong: 'Động từ "leach" nghĩa là "thấm lọc và rút bớt vi chất" - từ chuẩn khoa học y tế.',
        crucialNote: 'Đây là vũ khí lập luận đanh thép để thuyết phục chuỗi khách sạn bỏ máy lọc nước RO giá rẻ.',
        memoryHook: 'LEACH = Rút ruột vi khoáng.',
        vocabularyHighlights: [
          { word: 'Demineralized water', meaning: 'Nước bị khử hết khoáng', phonetic: 'diːˈmɪnərəlaɪzd ˈwɔːtər' },
          { word: 'Leach', meaning: 'Rửa trôi, rút bớt khoáng chất', phonetic: 'liːʧ' }
        ]
      },
      {
        id: 'u8-e6',
        type: 'speak',
        promptVi: 'Khẳng định sự hòa quyện cân bằng của 5 vi khoáng thiết yếu:',
        englishSentence: 'Vikoda offers a harmonious balance of Calcium, Magnesium, Potassium, and Sodium.',
        audioText: 'Vikoda offers a harmonious balance of Calcium, Magnesium, Potassium, and Sodium.',
        phonetics: '/vɪˈkoʊdə ˈɒfərz ə hɑːrˈmoʊniəs ˈbæləns əv ˈkælsiəm, mægˈniːziəm, pəˈtæsiəm, ænd ˈsoʊdiəm/',
        explanation: 'Bộ 4 ion điện giải kim loại kiềm và kiềm thổ giúp dẫn truyền xung thần kinh và co bóp cơ trơn tối ưu.',
        whyWrong: 'Nhớ phát âm đúng các nguyên tố: Calcium /kælsiəm/, Magnesium /mægniːziəm/, Potassium /pətæsiəm/.',
        crucialNote: 'Tỷ lệ cân bằng tự nhiên này do mẹ thiên nhiên nhào nặn qua hàng triệu năm, nhân tạo không thể sao chép.',
        memoryHook: 'HARMONIOUS BALANCE = Cân bằng hài hòa tự nhiên.',
        vocabularyHighlights: [
          { word: 'Harmonious balance', meaning: 'Sự cân bằng hài hòa', phonetic: 'hɑːrˈmoʊniəs ˈbæləns' },
          { word: 'Electrolyte balance', meaning: 'Cân bằng điện giải', phonetic: 'ɪˈlɛktrəlaɪt ˈbæləns' }
        ]
      }
    ]
  },
  {
    id: 'unit-9',
    unitNumber: 4,
    title: 'Quy Trình Đóng Chai Vô Trùng Tại Nguồn',
    subtitle: 'Dẫn khách tham quan dây chuyền hiện đại khép kín tại mỏ',
    level: 'A2-B1',
    icon: '⚙️',
    color: 'emerald',
    xpReward: 70,
    gemReward: 20,
    exercises: [
      {
        id: 'u9-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Nước được đóng chai trực tiếp tại nguồn theo quy trình khép kín."',
        englishSentence: 'The water is bottled directly at the source in a closed system.',
        audioText: 'The water is bottled directly at the source in a closed system.',
        phonetics: '/ðə ˈwɔːtər ɪz ˈbɒtld dəˈrɛktli æt ðə sɔːrs ɪn ə kloʊzd ˈsɪstəm/',
        wordPool: ['The', 'water', 'is', 'bottled', 'directly', 'at', 'the', 'source', 'in', 'a', 'closed', 'system.', 'open'],
        explanation: '"Bottled directly at the source" là chứng nhận danh giá nhất của ngành nước khoáng thế giới.',
        whyWrong: 'Không chở nước bằng xe bồn về nhà máy ở nơi khác, mà nhà máy đặt ngay miệng mỏ khoáng Đảnh Thạnh.',
        crucialNote: 'Tiêu chuẩn Codex Alimentarius quốc tế quy định nước khoáng đích thực phải được đóng chai ngay tại nguồn.',
        memoryHook: 'BOTTLED DIRECTLY AT SOURCE = Đóng chai trực tiếp tại miệng mỏ.',
        vocabularyHighlights: [
          { word: 'Bottled directly', meaning: 'Đóng chai trực tiếp', phonetic: 'ˈbɒtld dəˈrɛktli' },
          { word: 'Closed system', meaning: 'Hệ thống khép kín vô trùng', phonetic: 'kloʊzd ˈsɪstəm' }
        ]
      },
      {
        id: 'u9-e2',
        type: 'choice',
        promptVi: 'Hỏi đối tác có muốn đeo đồ bảo hộ trước khi bước vào phòng vô trùng không:',
        englishSentence: 'Please put on this sanitized coat and hairnet before entering the cleanroom.',
        audioText: 'Please put on this sanitized coat and hairnet before entering the cleanroom.',
        options: [
          'Please put on this sanitized coat and hairnet before entering the cleanroom.',
          'Just walk inside with your dirty shoes.',
          'Do not wash your hands.'
        ],
        correctIndex: 0,
        explanation: 'Thể hiện sự tuân thủ quy chuẩn phòng sạch chuẩn quốc tế ISO 22000 & HACCP.',
        whyWrong: 'Bắt buộc tuân thủ quy định vệ sinh an toàn thực phẩm để đảm bảo vô trùng cho dây chuyền.',
        crucialNote: 'Phòng sạch (cleanroom) ngăn ngừa mọi vi sinh vật và bụi mịn lơ lửng.',
        memoryHook: 'Sanitized coat + hairnet = Áo khử trùng + mũ trùm tóc.',
        vocabularyHighlights: [
          { word: 'Sanitized coat', meaning: 'Áo choàng đã khử khuẩn', phonetic: 'ˈsænɪtaɪzd koʊt' },
          { word: 'Cleanroom', meaning: 'Phòng sạch vô trùng', phonetic: 'ˈkliːnruːm' }
        ]
      },
      {
        id: 'u9-e3',
        type: 'speak',
        promptVi: 'Nói câu giới thiệu công suất tự động hóa cao:',
        englishSentence: 'Our automated production line ensures maximum hygiene and consistency.',
        audioText: 'Our automated production line ensures maximum hygiene and consistency.',
        phonetics: '/aʊər ˈɔːtəmeɪtɪd prəˈdʌkʃn laɪn ɪnˈʃʊərz ˈmæksɪməm ˈhaɪdʒiːn ænd kənˈsɪstənsi/',
        explanation: 'Tạo dựng sự an tâm cho người mua hàng về chất lượng đồng đều.',
        whyWrong: 'Tự động hóa hoàn toàn từ khâu thổi chai, chiết rót đến đóng nắp loại bỏ 100% can thiệp thủ công của con người.',
        crucialNote: '"Consistency" (tính đồng nhất từng giọt nước) là yếu tố các chuỗi F&B toàn cầu yêu cầu nghiêm ngặt.',
        memoryHook: 'AUTOMATED LINE = Dây chuyền tự động hóa chuẩn xác tuyệt đối.',
        vocabularyHighlights: [
          { word: 'Automated line', meaning: 'Dây chuyền tự động hóa', phonetic: 'ˈɔːtəmeɪtɪd laɪn' },
          { word: 'Consistency', meaning: 'Độ đồng đều và ổn định chất lượng', phonetic: 'kənˈsɪstənsi' }
        ]
      },
      {
        id: 'u9-e4',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Công nghệ màng lọc đa tầng giữ nguyên hàm lượng khoáng tự nhiên."',
        englishSentence: 'Multi-stage filtration preserves natural mineral ratios.',
        audioText: 'Multi-stage filtration preserves natural mineral ratios.',
        phonetics: '/ˈmʌlti-steɪdʒ fɪlˈtreɪʃn prɪˈzɜːrvz ˈnætʃrəl ˈmɪnərəl ˈreɪʃioʊz/',
        wordPool: ['Multi-stage', 'filtration', 'preserves', 'natural', 'mineral', 'ratios.', 'kill', 'sugar'],
        explanation: 'Lọc cơ học vi sinh hiện đại loại bỏ tạp chất lơ lửng mà không làm suy chuyển cấu trúc ion khoáng.',
        whyWrong: 'Khác với màng RO ép nén làm mất khoáng, màng lọc của Vikoda được hiệu chỉnh giữ trọn điện giải.',
        crucialNote: 'Tỷ lệ khoáng (mineral ratios) chính là linh hồn tạo nên hương vị đặc sắc của Vikoda.',
        memoryHook: 'Multi-stage filtration = Lọc đa tầng bảo tồn khoáng.',
        vocabularyHighlights: [
          { word: 'Multi-stage filtration', meaning: 'Lọc đa cấp hiện đại', phonetic: 'ˈmʌlti-steɪdʒ fɪlˈtreɪʃn' },
          { word: 'Mineral ratios', meaning: 'Tỷ lệ thành phần khoáng chất', phonetic: 'ˈmɪnərəl ˈreɪʃioʊz' }
        ]
      },
      {
        id: 'u9-e5',
        type: 'choice',
        promptVi: 'Quy trình kiểm tra chất lượng vi sinh được thực hiện với tần suất ra sao?',
        englishSentence: 'Every single batch undergoes microbiological testing in our certified on-site lab.',
        audioText: 'Every single batch undergoes microbiological testing in our certified on-site lab.',
        options: [
          'Every single batch undergoes microbiological testing in our certified on-site lab.',
          'We test water once every ten years.',
          'We never test anything in the laboratory.'
        ],
        correctIndex: 0,
        explanation: 'Mỗi lô hàng đều được kiểm nghiệm chỉ tiêu vi sinh gắt gao ngay tại phòng thí nghiệm đạt chuẩn ISO tại nhà máy.',
        whyWrong: 'Kiểm soát chất lượng theo lô (batch by batch) là cam kết thép cho các thị trường khó tính như Nhật và Mỹ.',
        crucialNote: '"On-site lab" giúp phản ứng tức thì và cấp chứng thư phân tích COA (Certificate of Analysis) nhanh chóng.',
        memoryHook: 'EVERY SINGLE BATCH = Từng lô hàng đều được soi chiếu nghiêm ngặt.',
        vocabularyHighlights: [
          { word: 'Batch', meaning: 'Lô sản xuất', phonetic: 'bætʃ' },
          { word: 'Microbiological testing', meaning: 'Kiểm nghiệm vi sinh', phonetic: 'ˌmaɪkroʊˌbaɪəˈlɒdʒɪkl ˈtɛstɪŋ' }
        ]
      },
      {
        id: 'u9-e6',
        type: 'speak',
        promptVi: 'Khẳng định chứng nhận nhà máy đạt chuẩn vệ sinh an toàn quốc tế:',
        englishSentence: 'Our plant is certified with ISO 22000 and HACCP food safety standards.',
        audioText: 'Our plant is certified with ISO 22000 and HACCP food safety standards.',
        phonetics: '/aʊər plænt ɪz ˈsɜːrtɪfaɪd wɪð ˈaɪ-ɛs-oʊ ˈtwɛnti-tuː ˈθaʊznd ænd ˈhæsæp fuːd ˈseɪfti ˈstændərdz/',
        explanation: 'ISO 22000 và HACCP là tấm hộ chiếu thông hành bắt buộc cho mọi sản phẩm đồ uống xuất khẩu.',
        whyWrong: 'Đọc HACCP chuẩn quốc tế là /ˈhæsæp/.',
        crucialNote: 'Khi đàm phán hợp đồng, đối tác quốc tế luôn yêu cầu gửi kèm bản sao song ngữ của 2 chứng chỉ này.',
        memoryHook: 'ISO 22000 + HACCP = Cặp đôi chứng chỉ an toàn thực phẩm toàn cầu.',
        vocabularyHighlights: [
          { word: 'Plant', meaning: 'Nhà máy, cơ sở chế biến', phonetic: 'plænt' },
          { word: 'Food safety standards', meaning: 'Tiêu chuẩn an toàn thực phẩm', phonetic: 'fuːd ˈseɪfti ˈstændərdz' }
        ]
      }
    ]
  },
  {
    id: 'unit-10',
    unitNumber: 5,
    title: 'Viết Thư & Gửi Báo Giá Cho Khách Hàng',
    subtitle: 'Gửi mẫu dùng thử (sample), bảng phân tích khoáng và thư cảm ơn',
    level: 'A2-B1',
    icon: '✉️',
    color: 'purple',
    xpReward: 75,
    gemReward: 22,
    exercises: [
      {
        id: 'u10-e1',
        type: 'choice',
        promptVi: 'Cách viết câu mở đầu email gửi kèm hồ sơ năng lực công ty:',
        englishSentence: 'Please find attached our latest company profile and mineral test report.',
        audioText: 'Please find attached our latest company profile and mineral test report.',
        options: [
          'Please find attached our latest company profile and mineral test report.',
          'I throw this file to you.',
          'Open the file right now.'
        ],
        correctIndex: 0,
        explanation: '"Please find attached..." là mẫu câu kinh điển trong thư điện tử thương mại.',
        whyWrong: 'Tránh dùng "I attach this file" - mẫu "Please find attached" trang trọng và lịch thiệp hơn rất nhiều.',
        crucialNote: 'Gửi kèm bảng phân tích khoáng (mineral test report) để chứng minh tính trung thực và khoa học.',
        memoryHook: 'PLEASE FIND ATTACHED = Xin vui lòng xem tệp đính kèm.',
        vocabularyHighlights: [
          { word: 'Please find attached', meaning: 'Xin vui lòng xem đính kèm', phonetic: 'pliːz faɪnd əˈtætʃt' },
          { word: 'Company profile', meaning: 'Hồ sơ năng lực công ty', phonetic: 'ˈkʌmpəni ˈproʊfaɪl' }
        ]
      },
      {
        id: 'u10-e2',
        type: 'word_order',
        promptVi: 'Dịch câu: "Chúng tôi rất vui lòng được gửi mẫu thử miễn phí đến khách sạn của bạn."',
        englishSentence: 'We are pleased to send complimentary samples to your hotel.',
        audioText: 'We are pleased to send complimentary samples to your hotel.',
        phonetics: '/wiː ɑːr pliːzd tuː sɛnd ˌkɒmplɪˈmɛntri ˈsɑːmplz tuː jʊər hoʊˈtɛl/',
        wordPool: ['We', 'are', 'pleased', 'to', 'send', 'complimentary', 'samples', 'to', 'your', 'hotel.', 'pay', 'expensive'],
        explanation: '"Complimentary samples" = Mẫu thử miễn phí trang trọng dành riêng cho các đối tác VIP.',
        whyWrong: 'Dùng từ "complimentary" thay cho "free" để nâng tầm sự sang trọng của quà tặng dùng thử.',
        crucialNote: 'Gửi kèm thư tay của Giám đốc kinh doanh khi chuyển thùng hàng mẫu đến khách sạn.',
        memoryHook: 'COMPLIMENTARY SAMPLES = Mẫu phẩm mời thử miễn phí cao cấp.',
        vocabularyHighlights: [
          { word: 'Complimentary', meaning: 'Được tặng miễn phí (trang trọng)', phonetic: 'ˌkɒmplɪˈmɛntri' },
          { word: 'Samples', meaning: 'Hàng mẫu dùng thử', phonetic: 'ˈsɑːmplz' }
        ]
      },
      {
        id: 'u10-e3',
        type: 'speak',
        promptVi: 'Nói câu kết thúc email hẹn thảo luận thêm:',
        englishSentence: 'I look forward to hearing your feedback soon.',
        audioText: 'I look forward to hearing your feedback soon.',
        phonetics: '/aɪ lʊk ˈfɔːrwərd tuː ˈhɪərɪŋ jʊər ˈfiːdbæk suːn/',
        explanation: 'Nhớ dùng V-ing sau "look forward to".',
        whyWrong: 'Lỗi ngữ pháp cực kỳ phổ biến của người Việt: viết "look forward to hear" thay vì "hearing".',
        crucialNote: 'Lời kết lịch sự thúc đẩy đối tác hồi âm nhanh chóng.',
        memoryHook: 'LOOK FORWARD TO + HEARING = Ngóng đợi phản hồi.',
        vocabularyHighlights: [
          { word: 'Feedback', meaning: 'Ý kiến phản hồi, đánh giá', phonetic: 'ˈfiːdbæk' },
          { word: 'Look forward to', meaning: 'Trông chờ, mong mỏi', phonetic: 'lʊk ˈfɔːrwərd tuː' }
        ]
      },
      {
        id: 'u10-e4',
        type: 'choice',
        promptVi: 'Khi đối tác hỏi về thời hạn hiệu lực của bảng báo giá và chiết khấu số lượng lớn:',
        englishSentence: 'This quotation is valid for thirty days, with attractive volume discount tiers.',
        audioText: 'This quotation is valid for thirty days, with attractive volume discount tiers.',
        options: [
          'This quotation is valid for thirty days, with attractive volume discount tiers.',
          'Price changes every minute without notice.',
          'We do not offer any discounts for large orders.'
        ],
        correctIndex: 0,
        explanation: 'Báo giá chuẩn luôn có thời hạn hiệu lực (quotation validity) và các bậc chiết khấu theo sản lượng (volume discount tiers).',
        whyWrong: 'Không bao giờ để báo giá vô thời hạn vì biến động giá cước vận chuyển và nguyên vật liệu.',
        crucialNote: 'Volume discount khuyến khích đối tác đặt đơn hàng số lượng container lớn hơn.',
        memoryHook: 'QUOTATION VALIDITY = Thời hạn báo giá. VOLUME DISCOUNT = Chiết khấu theo số lượng.',
        vocabularyHighlights: [
          { word: 'Quotation', meaning: 'Bảng báo giá thương mại', phonetic: 'kwoʊˈteɪʃn' },
          { word: 'Volume discount', meaning: 'Chiết khấu sản lượng đặt hàng', phonetic: 'ˈvɒljuːm ˈdɪskaʊnt' }
        ]
      },
      {
        id: 'u10-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Chúng tôi đảm bảo giao hàng đúng tiến độ đến bất kỳ cảng biển nào."',
        englishSentence: 'We ensure on-time delivery to any international seaport.',
        audioText: 'We ensure on-time delivery to any international seaport.',
        phonetics: '/wiː ɪnˈʃʊər ɒn-taɪm dɪˈlɪvəri tuː ˈɛni ˌɪntərˈnæʃənl ˈsiːpɔːrt/',
        wordPool: ['We', 'ensure', 'on-time', 'delivery', 'to', 'any', 'international', 'seaport.', 'late', 'cancel'],
        explanation: 'Cam kết giao hàng đúng hẹn là yếu tố then chốt giúp xây dựng uy tín chuỗi cung ứng vững chắc.',
        whyWrong: 'Dùng từ "ensure on-time delivery" thể hiện năng lực logistics chuyên nghiệp.',
        crucialNote: 'Khánh Hòa có vị trí địa lý đắc địa gần các cảng biển nước sâu quốc tế.',
        memoryHook: 'ON-TIME DELIVERY = Giao hàng chuẩn giờ, đúng hẹn.',
        vocabularyHighlights: [
          { word: 'On-time delivery', meaning: 'Giao hàng đúng tiến độ', phonetic: 'ɒn-taɪm dɪˈlɪvəri' },
          { word: 'Seaport', meaning: 'Cảng biển quốc tế', phonetic: 'ˈsiːpɔːrt' }
        ]
      },
      {
        id: 'u10-e6',
        type: 'speak',
        promptVi: 'Đề xuất cuộc gọi video 15 phút để thảo luận chi tiết hợp đồng hợp tác:',
        englishSentence: 'Could we arrange a 15-minute video call next Wednesday to discuss terms?',
        audioText: 'Could we arrange a 15-minute video call next Wednesday to discuss terms?',
        phonetics: '/kʊd wiː əˈreɪndʒ ə ˈfɪfˈtiːn ˈmɪnɪt ˈvɪdioʊ kɔːl nɛkst ˈwɛnzdeɪ tuː dɪˈskʌs tɜːrmz/',
        explanation: 'Lời đề xuất họp ngắn (15-minute call) có tỷ lệ đồng ý cao gấp 3 lần so với yêu cầu một cuộc họp kéo dài.',
        whyWrong: 'Chỉ định ngày cụ thể (next Wednesday) giúp đối tác dễ kiểm tra lịch trình hơn là hỏi chung chung "when are you free".',
        crucialNote: '"Discuss terms" nghĩa là thảo luận các điều khoản thương mại cùng có lợi.',
        memoryHook: '15-MINUTE VIDEO CALL = Cuộc gọi ngắn gọn, chốt việc thần tốc.',
        vocabularyHighlights: [
          { word: 'Arrange', meaning: 'Thu xếp, sắp đặt', phonetic: 'əˈreɪndʒ' },
          { word: 'Discuss terms', meaning: 'Thảo luận điều khoản hợp đồng', phonetic: 'dɪˈskʌs tɜːrmz' }
        ]
      }
    ]
  },

  // ==================== LEVEL B2-C1: ĐẠI SỨ TOÀN CẦU, CEO & THƯƠNG THẢO XUẤT KHẨU ====================
  {
    id: 'unit-11',
    unitNumber: 1,
    title: 'Đấu Trí: Xử Lý Thắc Mắc Khó Của Buyer',
    subtitle: 'Giải đáp sỏi thận và so sánh với máy lọc kiềm điện phân',
    level: 'B2-C1',
    icon: '⚔️',
    color: 'purple',
    xpReward: 80,
    gemReward: 25,
    exercises: [
      {
        id: 'u11-e1',
        type: 'choice',
        promptVi: 'Khách hỏi: "Uống nước khoáng kiềm hàng ngày có bị sỏi thận không?"',
        englishSentence: 'No, minerals in Vikoda are fully dissolved, and magnesium even aids kidney excretion.',
        audioText: 'No, minerals in Vikoda are fully dissolved, and magnesium even aids kidney excretion.',
        options: [
          'No, minerals in Vikoda are fully dissolved, and magnesium even aids kidney excretion.',
          'Yes, it can cause severe kidney stones.',
          'Nobody knows the answer yet.'
        ],
        correctIndex: 0,
        explanation: 'Muối Ca, Mg hòa tan hoàn toàn ở dạng ion sinh học, Magie ức chế kết tinh canxi oxalat và kích hoạt bài tiết thận.',
        whyWrong: 'Sỏi thận chỉ hình thành khi uống thiếu nước hoặc uống khoáng chất vô cơ thô kết tủa, còn Vikoda là khoáng nhẹ hòa tan 100%.',
        crucialNote: 'Chỉ số TDS 100-400 mg/L là ngưỡng an toàn tuyệt đối được y khoa công nhận cho việc bù nước trọn đời.',
        memoryHook: 'MAGNESIUM AIDS EXCRETION = Magie trợ thủ đắc lực bài tiết cặn thận.',
        vocabularyHighlights: [
          { word: 'Fully dissolved', meaning: 'Hòa tan hoàn toàn', phonetic: 'ˈfʊli dɪˈzɒlvd' },
          { word: 'Kidney excretion', meaning: 'Sự bài tiết của thận', phonetic: 'ˈkɪdni ɪkˈskriːʃn' },
          { word: 'Inhibit crystallization', meaning: 'Ức chế sự kết tinh sỏi', phonetic: 'ɪnˈhɪbɪt ˌkrɪstəlaɪˈzeɪʃn' }
        ]
      },
      {
        id: 'u11-e2',
        type: 'word_order',
        promptVi: 'Dịch câu: "Khác với nước kiềm nhân tạo, Vikoda không cần điện phân."',
        englishSentence: 'Unlike artificial alkaline water, Vikoda requires no electrolysis.',
        audioText: 'Unlike artificial alkaline water, Vikoda requires no electrolysis.',
        phonetics: '/ʌnˈlaɪk ˌɑːrtɪˈfɪʃl ˈælkəlaɪn ˈwɔːtər, vɪˈkoʊdə rɪˈkwaɪərz noʊ ɪˌlɛkˈtrɒləsɪs/',
        wordPool: ['Unlike', 'artificial', 'alkaline', 'water,', 'Vikoda', 'requires', 'no', 'electrolysis.', 'machine', 'chemical'],
        explanation: 'Khẳng định giá trị nguyên bản của thiên nhiên Khánh Hòa: không xung điện, không hóa chất, không phụ gia.',
        whyWrong: 'Máy Kangen hoặc ion kiềm gia đình dùng dòng điện cưỡng bức tách nước, dễ biến chất khi tiếp xúc không khí.',
        crucialNote: 'Buyer quốc tế đánh giá cao "pure origin" và "naturally occurring alkalinity".',
        memoryHook: 'NO ELECTROLYSIS = Không can thiệp điện phân nhân tạo.',
        vocabularyHighlights: [
          { word: 'Electrolysis', meaning: 'Quá trình điện phân nhân tạo', phonetic: 'ɪˌlɛkˈtrɒləsɪs' },
          { word: 'Artificial alkaline', meaning: 'Kiềm nhân tạo ép buộc', phonetic: 'ˌɑːrtɪˈfɪʃl ˈælkəlaɪn' }
        ]
      },
      {
        id: 'u11-e3',
        type: 'speak',
        promptVi: 'Pitch chai thủy tinh cao cấp cho Tổng Giám Đốc khách sạn 5 sao:',
        englishSentence: 'Our luxury glass bottles reduce carbon footprint by 85% compared to imported brands.',
        audioText: 'Our luxury glass bottles reduce carbon footprint by 85% compared to imported brands.',
        phonetics: '/aʊər ˈlʌkʃəri glæs ˈbɒtlz rɪˈdjuːs ˈkɑːrbən ˈfʊtprɪnt baɪ eɪti-faɪv pərˈsɛnt/',
        explanation: 'Đánh trúng ưu tiên phát triển bền vững (ESG & Zero-plastic) của các tập đoàn khách sạn quốc tế.',
        whyWrong: 'Nhập khẩu nước từ Pháp hay Ý phải vận chuyển bằng tàu biển hàng chục ngàn dặm, phát thải CO2 khổng lồ.',
        crucialNote: 'Chỉ số giảm 85% phát thải carbon là con số vàng khiến các nhà quản lý ESG gật đầu.',
        memoryHook: 'REDUCE CARBON FOOTPRINT BY 85% = Cắt giảm 85% phát thải carbon.',
        vocabularyHighlights: [
          { word: 'Carbon footprint', meaning: 'Dấu chân carbon phát thải', phonetic: 'ˈkɑːrbən ˈfʊtprɪnt' },
          { word: 'Sustainability', meaning: 'Tính bền vững môi trường', phonetic: 'səsˌteɪnəˈbɪləti' }
        ]
      },
      {
        id: 'u11-e4',
        type: 'choice',
        promptVi: 'Khách hỏi: "Độ kiềm pH 9.0 có làm mất đi axit dịch vị cần thiết để tiêu hóa thức ăn không?"',
        englishSentence: 'No, it only buffers excess pathological acid without disrupting natural gastric digestion.',
        audioText: 'No, it only buffers excess pathological acid without disrupting natural gastric digestion.',
        options: [
          'No, it only buffers excess pathological acid without disrupting natural gastric digestion.',
          'Yes, it completely destroys all digestive enzymes in your stomach.',
          'Water has nothing to do with stomach acid.'
        ],
        correctIndex: 0,
        explanation: 'Cơ chế đệm sinh học (buffering capacity) của ion Bicarbonate (HCO3-) chỉ trung hòa axit dư thừa bệnh lý do căng thẳng hay bia rượu.',
        whyWrong: 'Dạ dày có cơ chế tự điều tiết tinh vi; Vikoda hỗ trợ duy trì cân bằng nội môi (homeostatic balance).',
        crucialNote: '"Buffer" là thuật ngữ sinh hóa cao cấp diễn tả khả năng tự động cân bằng pH.',
        memoryHook: 'BUFFERS EXCESS ACID = Đệm trung hòa axit dư thừa, bảo vệ niêm mạc.',
        vocabularyHighlights: [
          { word: 'Buffer', meaning: 'Cân bằng đệm sinh học', phonetic: 'ˈbʌfər' },
          { word: 'Gastric digestion', meaning: 'Sự tiêu hóa dịch vị dạ dày', phonetic: 'ˈgæstrɪk daɪˈdʒɛstʃn' }
        ]
      },
      {
        id: 'u11-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Nước kiềm nhân tạo mất tính kiềm trong vòng 48 giờ sau khi mở nắp."',
        englishSentence: 'Artificial alkaline water loses its alkalinity within forty-eight hours of opening.',
        audioText: 'Artificial alkaline water loses its alkalinity within forty-eight hours of opening.',
        phonetics: '/ˌɑːrtɪˈfɪʃl ˈælkəlaɪn ˈwɔːtər ˈluːzɪz ɪts ˌælkəˈlɪnəti wɪðˈɪn ˈfɔːrti-eɪt ˈaʊərz əv ˈoʊpnɪŋ/',
        wordPool: ['Artificial', 'alkaline', 'water', 'loses', 'its', 'alkalinity', 'within', 'forty-eight', 'hours', 'of', 'opening.', 'keeps'],
        explanation: 'Nước kiềm nhân tạo chỉ là sự dịch chuyển điện tích tạm thời, rất dễ bị tái oxy hóa và tụt pH.',
        whyWrong: 'Ngược lại, Vikoda chứa các muối kiềm tự nhiên bền vững, giữ vững độ kiềm pH 9.0 ngay cả khi mở nắp nhiều ngày.',
        crucialNote: 'Đây là lý do khoa học chứng minh tại sao máy lọc nước ion kiềm không thể thay thế nước khoáng đóng chai thiên nhiên.',
        memoryHook: 'LOSES ALKALINITY IN 48 HOURS = Kiềm nhân tạo bốc hơi sau 2 ngày.',
        vocabularyHighlights: [
          { word: 'Alkalinity', meaning: 'Độ kiềm, tính kiềm', phonetic: 'ˌælkəˈlɪnəti' },
          { word: 'Degradation', meaning: 'Sự suy giảm, thoái hóa', phonetic: 'ˌdɛgrəˈdeɪʃn' }
        ]
      },
      {
        id: 'u11-e6',
        type: 'speak',
        promptVi: 'Tuyên bố cam kết không chứa hạt vi nhựa: "Bao bì thủy tinh loại bỏ 100% rủi ro thôi nhiễm vi nhựa."',
        englishSentence: 'Our premium glass packaging eliminates 100% of microplastic contamination risks.',
        audioText: 'Our premium glass packaging eliminates 100% of microplastic contamination risks.',
        phonetics: '/aʊər ˈpriːmiəm glæs ˈpækɪdʒɪŋ ɪˈlɪmɪneɪts wʌn ˈhʌndrəd pərˈsɛnt əv ˌmaɪkroʊˈplæstɪk kənˌtæmɪˈneɪʃn rɪsks/',
        explanation: 'Khách hàng thượng lưu cực kỳ nhạy cảm với vi nhựa (microplastics) và hóa chất thôi nhiễm từ nhựa PET.',
        whyWrong: 'Chai thủy tinh trơ về mặt hóa học, bảo tồn trọn vẹn hương vị và độ tinh khiết không tì vết.',
        crucialNote: 'Zero microplastics là tiêu chí số 1 tại các hội nghị thượng đỉnh y tế và ẩm thực quốc tế.',
        memoryHook: 'ZERO MICROPLASTICS = Không vi nhựa, an toàn tuyệt đối.',
        vocabularyHighlights: [
          { word: 'Microplastics', meaning: 'Hạt vi nhựa độc hại', phonetic: 'ˌmaɪkroʊˈplæstɪks' },
          { word: 'Contamination', meaning: 'Sự thôi nhiễm, nhiễm tạp chất', phonetic: 'kənˌtæmɪˈneɪʃn' }
        ]
      }
    ]
  },
  {
    id: 'unit-12',
    unitNumber: 2,
    title: 'Thuyết Phục Chuỗi Khách Sạn 5 Sao Dùng Chai Thủy Tinh',
    subtitle: 'Chiến lược HORECA: Định vị thương hiệu xanh & đẳng cấp bàn tiệc',
    level: 'B2-C1',
    icon: '🏨',
    color: 'cyan',
    xpReward: 85,
    gemReward: 25,
    exercises: [
      {
        id: 'u12-e1',
        type: 'choice',
        promptVi: 'Khi Tổng Giám Đốc resort quốc tế so sánh Vikoda với Evian hay San Pellegrino, bạn đáp lại thế nào?',
        englishSentence: 'Vikoda offers equivalent European mineral heritage at a competitive local supply cost.',
        audioText: 'Vikoda offers equivalent European mineral heritage at a competitive local supply cost.',
        options: [
          'Vikoda offers equivalent European mineral heritage at a competitive local supply cost.',
          'Imported water is way better, do not buy Vikoda.',
          'We sell the cheapest plastic bottles.'
        ],
        correctIndex: 0,
        explanation: 'Định vị ngang tầm chất lượng di sản Châu Âu nhưng tối ưu chi phí vận chuyển và lượng phát thải CO2.',
        whyWrong: 'Không bao giờ hạ thấp sản phẩm của mình hay khen đối thủ nhập khẩu; hãy khẳng định Vikoda sở hữu di sản tương đương.',
        crucialNote: 'Tối ưu chi phí logistics địa phương (local supply) giúp tăng biên lợi nhuận cho khách sạn.',
        memoryHook: 'EQUIVALENT HERITAGE, LOCAL COST = Di sản tương đương, chi phí nội địa tối ưu.',
        vocabularyHighlights: [
          { word: 'Equivalent', meaning: 'Ngang tầm, tương đương', phonetic: 'ɪˈkwɪvələnt' },
          { word: 'Mineral heritage', meaning: 'Di sản khoáng chất', phonetic: 'ˈmɪnərəl ˈhɛrɪtɪdʒ' }
        ]
      },
      {
        id: 'u12-e2',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Thiết kế chai thủy tinh mang lại vẻ sang trọng cho mọi bàn tiệc fine-dining."',
        englishSentence: 'The glass bottle design brings elegance to every fine-dining table.',
        audioText: 'The glass bottle design brings elegance to every fine-dining table.',
        phonetics: '/ðə glæs ˈbɒtl dɪˈzaɪn brɪŋz ˈɛlɪgəns tuː ˈɛvri faɪn-ˈdaɪnɪŋ ˈteɪbl/',
        wordPool: ['The', 'glass', 'bottle', 'design', 'brings', 'elegance', 'to', 'every', 'fine-dining', 'table.', 'ugly'],
        explanation: 'Nhấn mạnh yếu tố thẩm mỹ nâng tầm trải nghiệm ẩm thực cao cấp.',
        whyWrong: 'Fine-dining đòi hỏi mọi chi tiết từ khăn trải bàn, ly pha lê đến chai nước phải toát lên sự tinh tế.',
        crucialNote: 'Chai thủy tinh Vikoda 430ml được thiết kế tối giản chuẩn Bắc Âu (minimalist).',
        memoryHook: 'BRINGS ELEGANCE = Mang lại nét thanh lịch quý phái.',
        vocabularyHighlights: [
          { word: 'Elegance', meaning: 'Sự thanh lịch, tao nhã', phonetic: 'ˈɛlɪgəns' },
          { word: 'Fine-dining', meaning: 'Ẩm thực cao cấp Michelin', phonetic: 'faɪn-ˈdaɪnɪŋ' }
        ]
      },
      {
        id: 'u12-e3',
        type: 'speak',
        promptVi: 'Đề xuất chương trình thu hồi và tái sử dụng vỏ chai bảo vệ môi trường:',
        englishSentence: 'We offer a circular bottle-return program aligned with your sustainability goals.',
        audioText: 'We offer a circular bottle-return program aligned with your sustainability goals.',
        phonetics: '/wiː ˈɒfər ə ˈsɜːrkjələr ˈbɒtl-rɪˈtɜːrn ˈproʊgræm əˈlaɪnd wɪð jʊər səsˌteɪnəˈbɪləti goʊlz/',
        explanation: 'Giải pháp kinh tế tuần hoàn (Circular economy) khiến các chuỗi 5 sao quốc tế gật đầu ngay lập tức.',
        whyWrong: 'Khách sạn 5 sao không muốn xả rác thủy tinh ra môi trường; mô hình hoàn vỏ chai giải quyết triệt để bài toán này.',
        crucialNote: '"Aligned with your sustainability goals" gắn kết trực tiếp với KPI môi trường của Tổng Giám Đốc khách sạn.',
        memoryHook: 'CIRCULAR BOTTLE-RETURN = Kinh tế tuần hoàn thu hồi vỏ chai.',
        vocabularyHighlights: [
          { word: 'Circular economy', meaning: 'Kinh tế tuần hoàn', phonetic: 'ˈsɜːrkjələr ɪˈkɒnəmi' },
          { word: 'Aligned with', meaning: 'Đồng điệu, ăn khớp với mục tiêu', phonetic: 'əˈlaɪnd wɪð' }
        ]
      },
      {
        id: 'u12-e4',
        type: 'choice',
        promptVi: 'Đề xuất gửi tặng thùng nếm thử đặc quyền cho Bếp trưởng và chuyên gia rượu vang (Sommelier):',
        englishSentence: 'We would love to present a tasting crate for your executive chef and sommelier.',
        audioText: 'We would love to present a tasting crate for your executive chef and sommelier.',
        options: [
          'We would love to present a tasting crate for your executive chef and sommelier.',
          'Drink tap water, it is cheaper.',
          'Sell this water without tasting.'
        ],
        correctIndex: 0,
        explanation: 'Sommelier và Bếp trưởng là người quyết định danh mục nước uống (water menu) trên bàn tiệc.',
        whyWrong: 'Tặng thùng tasting crate thể hiện sự am hiểu nghi thức ẩm thực quốc tế đỉnh cao.',
        crucialNote: 'Từ "sommelier" phát âm chuẩn Pháp: /səˈmɛljeɪ/.',
        memoryHook: 'TASTING CRATE = Thùng nếm thử chuyên gia.',
        vocabularyHighlights: [
          { word: 'Tasting crate', meaning: 'Thùng mẫu thử nếm rượu/nước cao cấp', phonetic: 'ˈteɪstɪŋ kreɪt' },
          { word: 'Sommelier', meaning: 'Chuyên gia nếm thử đồ uống & rượu', phonetic: 'səˈmɛljeɪ' }
        ]
      },
      {
        id: 'u12-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Hậu vị ngọt thanh của Silic giúp thanh lọc vòm họng giữa các món ăn."',
        englishSentence: 'The gentle sweetness of silica cleanses the palate between dishes.',
        audioText: 'The gentle sweetness of silica cleanses the palate between dishes.',
        phonetics: '/ðə ˈdʒɛntl ˈswiːtnəs əv ˈsɪlɪkə ˈklɛnzɪz ðə ˈpælɪt bɪˈtwiːn ˈdɪʃɪz/',
        wordPool: ['The', 'gentle', 'sweetness', 'of', 'silica', 'cleanses', 'the', 'palate', 'between', 'dishes.', 'make', 'fat'],
        explanation: 'Trong nghệ thuật ẩm thực cao cấp, nước khoáng chất lượng phải làm sạch gai vị giác (palate cleanser) để thực khách thưởng trọn món tiếp theo.',
        whyWrong: 'Nước khoáng có ga nặng hoặc nước có mùi lạ sẽ phá hỏng vị giác thưởng rượu vang và bít tết hảo hạng.',
        crucialNote: '"Cleanse the palate" là thuật ngữ chuyên sâu gây kinh ngạc cho bất kỳ Giám đốc F&B nào.',
        memoryHook: 'CLEANSES THE PALATE = Làm sạch vòm họng, chuẩn bị cho món ngon mới.',
        vocabularyHighlights: [
          { word: 'Cleanse the palate', meaning: 'Làm sạch vòm họng / vị giác', phonetic: 'klɛnz ðə ˈpælɪt' },
          { word: 'Gentle sweetness', meaning: 'Vị ngọt thanh dịu nhẹ', phonetic: 'ˈdʒɛntl ˈswiːtnəs' }
        ]
      },
      {
        id: 'u12-e6',
        type: 'speak',
        promptVi: 'Đề xuất giải pháp cá nhân hóa thương hiệu: "Chúng tôi hỗ trợ in logo đồng thương hiệu cho khu nghỉ dưỡng của bạn."',
        englishSentence: 'We can provide bespoke co-branded labeling tailored for your luxury suites.',
        audioText: 'We can provide bespoke co-branded labeling tailored for your luxury suites.',
        phonetics: '/wiː kæn prəˈvaɪd bɪˈspoʊk koʊ-ˈbrændɪd ˈleɪblɪŋ ˈteɪlərd fɔːr jʊər ˈlʌkʃəri swiːts/',
        explanation: 'Dịch vụ Bespoke Co-Branding là vũ khí hạ gục các chuỗi resort siêu sang muốn định vị thương hiệu riêng.',
        whyWrong: '"Bespoke" nghĩa là may đo độc bản cao cấp, dùng thay cho từ "customized" thông thường.',
        crucialNote: 'Chai nước khoáng gắn logo khu nghỉ dưỡng đặt tại phòng Tổng thống (Presidential Suite) tạo dấu ấn khó quên.',
        memoryHook: 'BESPOKE CO-BRANDED = Thiết kế đồng thương hiệu may đo độc bản.',
        vocabularyHighlights: [
          { word: 'Bespoke', meaning: 'May đo riêng, thiết kế độc bản', phonetic: 'bɪˈspoʊk' },
          { word: 'Co-branded', meaning: 'Đồng thương hiệu hợp tác', phonetic: 'koʊ-ˈbrændɪd' }
        ]
      }
    ]
  },
  {
    id: 'unit-13',
    unitNumber: 3,
    title: 'Đàm Phán Hợp Đồng Xuất Khẩu & Incoterms',
    subtitle: 'Thương thảo điều kiện giao hàng FOB/CIF, dung sai thanh toán L/C và container',
    level: 'B2-C1',
    icon: '🚢',
    color: 'blue',
    xpReward: 90,
    gemReward: 30,
    exercises: [
      {
        id: 'u13-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Giá của chúng tôi được tính theo điều kiện FOB cảng Cát Lái hoặc Hải Phòng."',
        englishSentence: 'Our price is quoted on FOB Cat Lai or Hai Phong port terms.',
        audioText: 'Our price is quoted on FOB Cat Lai or Hai Phong port terms.',
        phonetics: '/aʊər praɪs ɪz ˈkwoʊtɪd ɒn ɛf-oʊ-biː kæt laɪ ɔːr haɪ fɒŋ pɔːrt tɜːrmz/',
        wordPool: ['Our', 'price', 'is', 'quoted', 'on', 'FOB', 'Cat', 'Lai', 'or', 'Hai', 'Phong', 'port', 'terms.', 'buy'],
        explanation: 'FOB (Free On Board) là điều kiện giao hàng phổ biến nhất trong xuất khẩu nước uống.',
        whyWrong: 'FOB quy định người bán chịu chi phí đưa hàng lên tàu; từ lúc hàng qua lan can tàu, người mua chịu cước biển.',
        crucialNote: 'Đối tác có đại lý vận tải biển (freight forwarder) riêng thường ưu tiên chọn điều kiện FOB.',
        memoryHook: 'FOB = Giao hàng lên tàu là xong trách nhiệm cảng đi.',
        vocabularyHighlights: [
          { word: 'FOB (Free On Board)', meaning: 'Giao hàng lên tàu', phonetic: 'ɛf-oʊ-biː' },
          { word: 'Port terms', meaning: 'Điều kiện cảng biển', phonetic: 'pɔːrt tɜːrmz' }
        ]
      },
      {
        id: 'u13-e2',
        type: 'choice',
        promptVi: 'Khi đối tác hỏi về số lượng đặt hàng tối thiểu (MOQ) cho container 20 feet:',
        englishSentence: 'The minimum order quantity is one 20-foot container, roughly 1,400 cartons.',
        audioText: 'The minimum order quantity is one 20-foot container, roughly 1,400 cartons.',
        options: [
          'The minimum order quantity is one 20-foot container, roughly 1,400 cartons.',
          'You must buy 100 containers right now.',
          'We only sell single bottles by hand.'
        ],
        correctIndex: 0,
        explanation: '"Minimum order quantity (MOQ)" là thuật ngữ cốt lõi trong thương mại quốc tế.',
        whyWrong: '1 container 20ft chứa xấp xỉ 1,400 thùng carton (tùy dung tích chai 330ml hay 430ml và quy cách pallet).',
        crucialNote: 'Nắm vững sức chứa container (container payload) giúp tính toán bài toán chi phí cước biển cho khách.',
        memoryHook: 'MOQ = Số lượng đặt hàng tối thiểu để vận hành máy.',
        vocabularyHighlights: [
          { word: 'Minimum order quantity (MOQ)', meaning: 'Số lượng đặt hàng tối thiểu', phonetic: 'ˈmɪnɪməm ˈɔːrdər ˈkwɒntəti' },
          { word: 'Carton', meaning: 'Thùng carton đựng nước', phonetic: 'ˈkɑːrtn' }
        ]
      },
      {
        id: 'u13-e3',
        type: 'speak',
        promptVi: 'Nói câu chốt phương thức thanh toán an toàn qua Thư tín dụng:',
        englishSentence: 'We accept payment by irrevocable Letter of Credit at sight.',
        audioText: 'We accept payment by irrevocable Letter of Credit at sight.',
        phonetics: '/wiː ækˈsɛpt ˈpeɪmənt baɪ ɪˈrɛvəkəbl ˈlɛtər əv ˈkrɛdɪt æt saɪt/',
        explanation: '"Irrevocable L/C at sight" là chuẩn mực thanh toán an toàn hàng đầu thế giới.',
        whyWrong: 'Đừng dùng "T/T 100% advance" cho khách mới vì khách quốc tế sẽ e ngại rủi ro lừa đảo.',
        crucialNote: 'L/C không thể hủy ngang trả ngay (at sight) đảm bảo ngân hàng thanh toán ngay khi xuất trình đủ bộ chứng từ hợp lệ.',
        memoryHook: 'IRREVOCABLE L/C AT SIGHT = Thư tín dụng không thể hủy ngang trả ngay.',
        vocabularyHighlights: [
          { word: 'Irrevocable L/C', meaning: 'Thư tín dụng không hủy ngang', phonetic: 'ɪˈrɛvəkəbl ɛl-siː' },
          { word: 'At sight', meaning: 'Thanh toán ngay khi thấy chứng từ', phonetic: 'æt saɪt' }
        ]
      },
      {
        id: 'u13-e4',
        type: 'choice',
        promptVi: 'Khi đối tác muốn mua theo giá CIF (bao gồm tiền hàng, bảo hiểm và cước tàu):',
        englishSentence: 'Our CIF price includes ocean freight and marine cargo insurance to your destination port.',
        audioText: 'Our CIF price includes ocean freight and marine cargo insurance to your destination port.',
        options: [
          'Our CIF price includes ocean freight and marine cargo insurance to your destination port.',
          'CIF means you pay all insurance and freight yourself.',
          'We do not know where your port is.'
        ],
        correctIndex: 0,
        explanation: 'CIF (Cost, Insurance, and Freight): Người bán chịu chi phí vận chuyển và mua bảo hiểm hàng hải cho lô hàng đến tận cảng đến của khách.',
        whyWrong: 'CIF mang lại sự thuận tiện trọn gói cho những người mua không quen đặt tàu tại Việt Nam.',
        crucialNote: 'Luôn kiểm tra hợp đồng bảo hiểm phải đạt chuẩn bảo hiểm mọi rủi ro hàng hải (Institute Cargo Clauses A).',
        memoryHook: 'CIF = Cost + Insurance + Freight (Giá hàng + Bảo hiểm + Cước tàu).',
        vocabularyHighlights: [
          { word: 'CIF', meaning: 'Tiền hàng, bảo hiểm và cước phí', phonetic: 'siː-aɪ-ɛf' },
          { word: 'Marine cargo insurance', meaning: 'Bảo hiểm hàng hóa đường biển', phonetic: 'məˈriːn ˈkɑːrgoʊ ɪnˈʃʊərəns' }
        ]
      },
      {
        id: 'u13-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Hàng hóa được xếp trên pallet gỗ hun trùng và quấn màng co chống ẩm."',
        englishSentence: 'Goods are palletized on heat-treated pallets with protective shrink wrap.',
        audioText: 'Goods are palletized on heat-treated pallets with protective shrink wrap.',
        phonetics: '/gʊdz ɑːr ˈpælɪtaɪzd ɒn hiːt-ˈtriːtɪd ˈpælɪts wɪð prəˈtɛktɪv ʃrɪŋk ræp/',
        wordPool: ['Goods', 'are', 'palletized', 'on', 'heat-treated', 'pallets', 'with', 'protective', 'shrink', 'wrap.', 'wet', 'break'],
        explanation: 'Quy chuẩn đóng gói xuất khẩu đòi hỏi pallet gỗ phải được khử trùng nhiệt (heat-treated ISPM 15) để tránh mối mọt lây lan.',
        whyWrong: 'Màng co (shrink wrap) giúp các kiện chai thủy tinh không bị xô lệch vỡ nứt khi tàu rung lắc trên biển.',
        crucialNote: 'Hải quan các nước phát triển như Mỹ và Úc sẽ trả hàng về nếu pallet chưa qua xử lý nhiệt.',
        memoryHook: 'HEAT-TREATED PALLETS = Pallet gỗ xử lý nhiệt chuẩn kiểm dịch.',
        vocabularyHighlights: [
          { word: 'Palletized', meaning: 'Được đóng trên tấm pallet', phonetic: 'ˈpælɪtaɪzd' },
          { word: 'Shrink wrap', meaning: 'Màng co bảo vệ chống sốc & ẩm', phonetic: 'ʃrɪŋk ræp' }
        ]
      },
      {
        id: 'u13-e6',
        type: 'speak',
        promptVi: 'Cam kết thời gian sản xuất và giao hàng (Lead Time):',
        englishSentence: 'Our standard production lead time is fourteen business days upon L/C receipt.',
        audioText: 'Our standard production lead time is fourteen business days upon L/C receipt.',
        phonetics: '/aʊər ˈstændərd prəˈdʌkʃn liːd taɪm ɪz ˌfɔːrˈtiːn ˈbɪznəs deɪz əˈpɒn ɛl-siː rɪˈsiːt/',
        explanation: '"Lead time" là khoảng thời gian từ lúc nhận bảo lãnh ngân hàng L/C đến khi đóng xong hàng ra cảng.',
        whyWrong: '14 ngày làm việc là tốc độ sản xuất và đóng gói cực kỳ nhanh nhẹn của nhà máy Vikoda.',
        crucialNote: 'Nêu rõ "business days" (ngày làm việc) để loại trừ thứ Bảy, Chủ Nhật và ngày lễ Tết.',
        memoryHook: 'LEAD TIME = Thời gian sản xuất và chuẩn bị hàng.',
        vocabularyHighlights: [
          { word: 'Lead time', meaning: 'Thời gian thực hiện đơn hàng', phonetic: 'liːd taɪm' },
          { word: 'Upon receipt', meaning: 'Ngay sau khi nhận được', phonetic: 'əˈpɒn rɪˈsiːt' }
        ]
      }
    ]
  },
  {
    id: 'unit-14',
    unitNumber: 4,
    title: 'Tiêu Chuẩn Chất Lượng Quốc Tế & Kiểm Định',
    subtitle: 'Thuyết phục khách hàng khó tính bằng chứng nhận ISO 22000, HACCP và US FDA',
    level: 'B2-C1',
    icon: '📜',
    color: 'emerald',
    xpReward: 95,
    gemReward: 30,
    exercises: [
      {
        id: 'u14-e1',
        type: 'choice',
        promptVi: 'Đưa ra bằng chứng khoa học về nguồn nước Đảnh Thạnh được các nhà địa chất công nhận:',
        englishSentence: 'Our spring was rigorously surveyed and certified by leading French geologists in 1957.',
        audioText: 'Our spring was rigorously surveyed and certified by leading French geologists in 1957.',
        options: [
          'Our spring was rigorously surveyed and certified by leading French geologists in 1957.',
          'We found the water yesterday by accident.',
          'No lab has ever tested our water.'
        ],
        correctIndex: 0,
        explanation: 'Nhắc đến các nhà địa chất học Pháp và tiến sĩ Henri Fontaine khẳng định uy tín lịch sử.',
        whyWrong: 'Nghiên cứu của các nhà khoa học Pháp thời thuộc địa đã lập bản đồ khoáng học chi tiết cho mỏ Đảnh Thạnh.',
        crucialNote: 'Từ "rigorously surveyed" thể hiện sự khảo sát kỹ lưỡng, bài bản và độc lập.',
        memoryHook: 'RIGOROUSLY SURVEYED IN 1957 = Được khảo sát bài bản từ 1957.',
        vocabularyHighlights: [
          { word: 'Rigorously surveyed', meaning: 'Khảo sát nghiêm ngặt, bài bản', phonetic: 'ˈrɪgərəsli sɜːrˈveɪd' },
          { word: 'Certified', meaning: 'Được chứng nhận chính thức', phonetic: 'ˈsɜːrtɪfaɪd' }
        ]
      },
      {
        id: 'u14-e2',
        type: 'word_order',
        promptVi: 'Dịch câu: "Cơ sở sản xuất của chúng tôi tuân thủ nghiêm ngặt hệ thống quản lý HACCP."',
        englishSentence: 'Our manufacturing facility strictly complies with HACCP management systems.',
        audioText: 'Our manufacturing facility strictly complies with HACCP management systems.',
        phonetics: '/aʊər ˌmænjʊˈfækʧərɪŋ fəˈsɪlɪti ˈstrɪktli kəmˈplaɪz wɪð ˈhæsæp ˈmænɪdʒmənt ˈsɪstəmz/',
        wordPool: ['Our', 'manufacturing', 'facility', 'strictly', 'complies', 'with', 'HACCP', 'management', 'systems.', 'ignore'],
        explanation: 'Chứng chỉ HACCP là tấm vé thông hành vào thị trường Mỹ, Nhật Bản và Châu Âu.',
        whyWrong: 'Cấu trúc "strictly complies with" (tuân thủ nghiêm ngặt) là từ đắt giá trong đàm phán hợp đồng chất lượng.',
        crucialNote: 'HACCP kiểm soát các điểm giới hạn tới hạn (Critical Control Points) để không xảy ra bất kỳ lỗi ô nhiễm nào.',
        memoryHook: 'STRICTLY COMPLIES WITH = Tuân thủ tuyệt đối không nhân nhượng.',
        vocabularyHighlights: [
          { word: 'Manufacturing facility', meaning: 'Cơ sở sản xuất, nhà xưởng', phonetic: 'ˌmænjʊˈfækʧərɪŋ fəˈsɪlɪti' },
          { word: 'Strictly complies with', meaning: 'Tuân thủ nghiêm ngặt', phonetic: 'ˈstrɪktli kəmˈplaɪz wɪð' }
        ]
      },
      {
        id: 'u14-e3',
        type: 'speak',
        promptVi: 'Nói câu cam kết kiểm định chất lượng từng lô hàng xuất xưởng:',
        englishSentence: 'Every single batch undergoes multi-stage microbiological testing before dispatch.',
        audioText: 'Every single batch undergoes multi-stage microbiological testing before dispatch.',
        phonetics: '/ˈɛvri ˈsɪŋgl bætʃ ˌʌndərˈgoʊz ˈmʌlti-steɪdʒ ˌmaɪkroʊˌbaɪəˈlɒdʒɪkl ˈtɛstɪŋ bɪˈfɔːr dɪˈspætʃ/',
        explanation: 'Khẳng định quy trình kiểm soát vi sinh gắt gao tạo niềm tin sắt đá.',
        whyWrong: 'Trước khi xuất xưởng (dispatch), nước phải được lưu mẫu và kiểm tra vi khuẩn hiếu khí, Coliforms, E.coli âm tính.',
        crucialNote: 'Chứng chỉ COA đi kèm từng vận đơn (B/L) cho khách hàng.',
        memoryHook: 'BEFORE DISPATCH = Trước khi xuất kho bến bãi.',
        vocabularyHighlights: [
          { word: 'Undergoes', meaning: 'Trải qua quá trình kiểm định', phonetic: 'ˌʌndərˈgoʊz' },
          { word: 'Dispatch', meaning: 'Xuất hàng, điều phối hàng', phonetic: 'dɪˈspætʃ' }
        ]
      },
      {
        id: 'u14-e4',
        type: 'choice',
        promptVi: 'Khẳng định mã đăng ký với Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (US FDA):',
        englishSentence: 'Vikoda is registered with the US FDA for seamless customs clearance into North America.',
        audioText: 'Vikoda is registered with the US FDA for seamless customs clearance into North America.',
        options: [
          'Vikoda is registered with the US FDA for seamless customs clearance into North America.',
          'We avoid FDA regulations completely.',
          'FDA does not care about water bottles.'
        ],
        correctIndex: 0,
        explanation: 'Đăng ký FDA là điều kiện bắt buộc để hàng hóa cập cảng và thông quan vào thị trường Mỹ.',
        whyWrong: 'FDA quản lý cực kỳ chặt chẽ nguồn nước, nhãn mác và hồ sơ truy xuất nguồn gốc (traceability).',
        crucialNote: 'Cung cấp số FDA Registration Number ngay trên hồ sơ năng lực gửi buyer Mỹ.',
        memoryHook: 'US FDA REGISTERED = Đạt chuẩn kiểm định dược thực phẩm Hoa Kỳ.',
        vocabularyHighlights: [
          { word: 'US FDA', meaning: 'Cục Quản lý Thực phẩm & Dược phẩm Mỹ', phonetic: 'juː-ɛs ɛf-diː-eɪ' },
          { word: 'Customs clearance', meaning: 'Thông quan xuất nhập khẩu', phonetic: 'ˈkʌstəmz ˈklɪərəns' }
        ]
      },
      {
        id: 'u14-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Sản phẩm của chúng tôi cũng đạt chứng nhận Halal cho thị trường Trung Đông."',
        englishSentence: 'Our products are also Halal certified for the Middle East market.',
        audioText: 'Our products are also Halal certified for the Middle East market.',
        phonetics: '/aʊər ˈprɒdʌkts ɑːr ˈɔːlsoʊ həˈlɑːl ˈsɜːrtɪfaɪd fɔːr ðə ˈmɪdl iːst ˈmɑːrkɪt/',
        wordPool: ['Our', 'products', 'are', 'also', 'Halal', 'certified', 'for', 'the', 'Middle', 'East', 'market.', 'pork'],
        explanation: 'Chứng nhận Halal mở ra cánh cửa tiến vào thị trường giàu có của các tiểu vương quốc Ả Rập (UAE, Qatar, Saudi Arabia) và Đông Nam Á (Malaysia, Indonesia).',
        whyWrong: 'Halal xác nhận toàn bộ quy trình từ nguồn đến đóng gói đều thanh tịnh và không nhiễm tạp chất cấm.',
        crucialNote: 'Thị trường Trung Đông tiêu thụ lượng nước đóng chai khổng lồ do khí hậu sa mạc nắng nóng.',
        memoryHook: 'HALAL CERTIFIED = Đạt chuẩn thanh tịnh Hồi giáo quốc tế.',
        vocabularyHighlights: [
          { word: 'Halal certified', meaning: 'Đạt chứng chỉ Halal', phonetic: 'həˈlɑːl ˈsɜːrtɪfaɪd' },
          { word: 'Middle East', meaning: 'Thị trường Trung Đông', phonetic: 'ˈmɪdl iːst' }
        ]
      },
      {
        id: 'u14-e6',
        type: 'speak',
        promptVi: 'Cung cấp kết quả phân tích kiểm định độc lập từ phòng thí nghiệm danh tiếng Eurofins và SGS:',
        englishSentence: 'Independent lab reports from SGS and Eurofins verify our pristine mineral composition.',
        audioText: 'Independent lab reports from SGS and Eurofins verify our pristine mineral composition.',
        phonetics: '/ˌɪndɪˈpɛndənt læb rɪˈpɔːrts frəm ɛs-dʒiː-ɛs ænd ˈjʊərəʊfɪnz ˈvɛrɪfaɪ aʊər ˈprɪstiːn ˈmɪnərəl ˌkɒmpəˈzɪʃn/',
        explanation: 'SGS và Eurofins là 2 tập đoàn giám định độc lập hàng đầu thế giới được mọi chính phủ thừa nhận.',
        whyWrong: 'Lời tự khen của nhà sản xuất không bao giờ bằng một bản chứng thư giám định của SGS.',
        crucialNote: 'Báo cáo phân tích xác nhận không có kim loại nặng (Asen, Chì, Thủy ngân) và chỉ số khoáng trung thực 100%.',
        memoryHook: 'SGS & EUROFINS VERIFIED = Kiểm định độc lập chuẩn quốc tế.',
        vocabularyHighlights: [
          { word: 'Independent lab', meaning: 'Phòng thí nghiệm độc lập uy tín', phonetic: 'ˌɪndɪˈpɛndənt læb' },
          { word: 'Verify', meaning: 'Xác thực, bảo chứng tính xác thực', phonetic: 'ˈvɛrɪfaɪ' }
        ]
      }
    ]
  },
  {
    id: 'unit-15',
    unitNumber: 5,
    title: 'Tầm Nhìn Lãnh Đạo & Đối Tác Chiến Lược Toàn Cầu',
    subtitle: 'CEO Speech: Lan tỏa di sản nước khoáng nguyên bản Việt Nam ra thế giới',
    level: 'B2-C1',
    icon: '👑',
    color: 'amber',
    xpReward: 100,
    gemReward: 35,
    exercises: [
      {
        id: 'u15-e1',
        type: 'choice',
        promptVi: 'Khẳng định sứ mệnh thương hiệu trước các nhà đầu tư và đối tác toàn cầu:',
        englishSentence: 'Our mission is to elevate Vietnamese natural treasures to world-class wellness standards.',
        audioText: 'Our mission is to elevate Vietnamese natural treasures to world-class wellness standards.',
        options: [
          'Our mission is to elevate Vietnamese natural treasures to world-class wellness standards.',
          'We only care about short-term profit.',
          'We do not want to go international.'
        ],
        correctIndex: 0,
        explanation: 'Truyền cảm hứng về khát vọng đưa bảo vật khoáng nóng Đảnh Thạnh ra bản đồ ẩm thực thế giới.',
        whyWrong: 'Sứ mệnh cao cả (noble mission) tạo nên sự cộng hưởng tâm lý với các nhà đầu tư lớn.',
        crucialNote: 'Tập trung vào từ "elevate" (nâng tầm vị thế) và "wellness standards" (tiêu chuẩn sống khỏe toàn cầu).',
        memoryHook: 'ELEVATE NATURAL TREASURES = Nâng tầm bảo vật thiên nhiên Việt Nam.',
        vocabularyHighlights: [
          { word: 'Elevate', meaning: 'Nâng tầm, tôn vinh vị thế', phonetic: 'ˈɛlɪveɪt' },
          { word: 'Wellness standards', meaning: 'Tiêu chuẩn sống khỏe toàn diện', phonetic: 'ˈwɛlnəs ˈstændərdz' }
        ]
      },
      {
        id: 'u15-e2',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Vikoda cam kết phát triển bền vững và mang lại giá trị trọn đời cho đối tác."',
        englishSentence: 'Vikoda commits to sustainable growth and long-term partnership value.',
        audioText: 'Vikoda commits to sustainable growth and long-term partnership value.',
        phonetics: '/vɪˈkoʊdə kəˈmɪts tuː səsˈteɪnəbl groʊθ ænd lɒŋ-tɜːrm ˈpɑːrtnərʃɪp ˈvæljuː/',
        wordPool: ['Vikoda', 'commits', 'to', 'sustainable', 'growth', 'and', 'long-term', 'partnership', 'value.', 'short', 'harm'],
        explanation: 'Tuyên bố đối tác chiến lược thể hiện tầm vóc của ban điều hành cấp cao.',
        whyWrong: 'Trong giao thương quốc tế, giá trị quan hệ lâu dài (long-term value) quan trọng hơn nhiều một đơn hàng chớp nhoáng.',
        crucialNote: 'Khẳng định sự đồng hành hỗ trợ marketing, POSM và khuyến mãi cùng đối tác.',
        memoryHook: 'LONG-TERM PARTNERSHIP VALUE = Giá trị đối tác trường tồn.',
        vocabularyHighlights: [
          { word: 'Commits to', meaning: 'Cam kết phụng sự', phonetic: 'kəˈmɪts tuː' },
          { word: 'Sustainable growth', meaning: 'Tăng trưởng bền vững', phonetic: 'səsˈteɪnəbl groʊθ' }
        ]
      },
      {
        id: 'u15-e3',
        type: 'speak',
        promptVi: 'Nói câu kết bài thuyết trình của CEO trong buổi lễ ký kết đối tác:',
        englishSentence: 'Together, let us share nature’s pristine gift with consumers worldwide. Thank you.',
        audioText: 'Together, let us share natures pristine gift with consumers worldwide. Thank you.',
        phonetics: '/təˈgɛðər, lɛt ʌs ʃɛər ˈneɪtʃərz ˈprɪstiːn gɪft wɪð kənˈsjuːmərz ˌwɜːrldˈwaɪd. θæŋk juː/',
        explanation: 'Lời kết truyền cảm hứng mạnh mẽ, khép lại buổi đàm phán bằng một cái bắt tay thành công.',
        whyWrong: 'Câu nói gợi mở tinh thần liên minh cùng chung lý tưởng phụng sự sức khỏe người tiêu dùng toàn cầu.',
        crucialNote: 'Phát âm chữ "Together" với giọng vang, dứt khoát và hướng ánh mắt tự tin về phía toàn thể hội trường.',
        memoryHook: 'TOGETHER, LET US SHARE NATURE’S PRISTINE GIFT = Cùng nhau lan tỏa quà tặng thanh khiết của đất mẹ.',
        vocabularyHighlights: [
          { word: 'Pristine gift', meaning: 'Món quà thuần khiết của tạo hóa', phonetic: 'ˈprɪstiːn gɪft' },
          { word: 'Worldwide', meaning: 'Trên quy mô toàn thế giới', phonetic: 'ˌwɜːrldˈwaɪd' }
        ]
      },
      {
        id: 'u15-e4',
        type: 'choice',
        promptVi: 'Giới thiệu về sức mạnh hậu thuẫn của tập đoàn F.I.T Group đằng sau Vikoda:',
        englishSentence: 'Vikoda is backed by F.I.T Group, a multi-billion financial conglomerate with robust distribution.',
        audioText: 'Vikoda is backed by F.I.T Group, a multi-billion financial conglomerate with robust distribution.',
        options: [
          'Vikoda is backed by F.I.T Group, a multi-billion financial conglomerate with robust distribution.',
          'Vikoda is a tiny family shop with no money.',
          'We have no delivery network.'
        ],
        correctIndex: 0,
        explanation: 'Sức mạnh tài chính và hệ sinh thái đa ngành vững chắc của F.I.T Group đảm bảo năng lực cung ứng không gián đoạn.',
        whyWrong: 'Đối tác toàn cầu luôn chọn ký hợp đồng dài hạn với các công ty có hậu thuẫn tài chính hùng mạnh.',
        crucialNote: '"Conglomerate" nghĩa là tập đoàn kinh tế đa ngành quy mô lớn.',
        memoryHook: 'BACKED BY F.I.T GROUP = Được bảo chứng bởi tiềm lực Tập đoàn F.I.T.',
        vocabularyHighlights: [
          { word: 'Backed by', meaning: 'Được hậu thuẫn, bảo trợ bởi', phonetic: 'bækt baɪ' },
          { word: 'Financial conglomerate', meaning: 'Tập đoàn tài chính đa ngành', phonetic: 'faɪˈnænʃl kənˈglɒmərət' }
        ]
      },
      {
        id: 'u15-e5',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Chúng tôi cung cấp dịch vụ gia công nhãn riêng OEM chuyên nghiệp cho các chuỗi siêu thị."',
        englishSentence: 'We provide specialized OEM and private label services for supermarket chains.',
        audioText: 'We provide specialized OEM and private label services for supermarket chains.',
        phonetics: '/wiː prəˈvaɪd ˈspɛʃəlaɪzd oʊ-iː-ɛm ænd ˈpraɪvət ˈleɪbl ˈsɜːrvɪsɪz fɔːr ˈsuːpərmɑːrkɪt ʧeɪnz/',
        wordPool: ['We', 'provide', 'specialized', 'OEM', 'and', 'private', 'label', 'services', 'for', 'supermarket', 'chains.', 'bad'],
        explanation: 'Dịch vụ OEM / Private Label (gia công nhãn hàng riêng) là kênh xuất khẩu bùng nổ cho các chuỗi bán lẻ quốc tế như Costco, Walmart, Aeon.',
        whyWrong: 'Nhà máy hiện đại của Vikoda hoàn toàn đáp ứng các tiêu chuẩn khắt khe về công thức đóng chai nhãn riêng.',
        crucialNote: 'OEM (Original Equipment Manufacturer) là từ vựng cốt tử trong sản xuất xuất khẩu.',
        memoryHook: 'OEM & PRIVATE LABEL = Gia công sản xuất thương hiệu riêng.',
        vocabularyHighlights: [
          { word: 'OEM', meaning: 'Sản xuất theo thiết bị gốc', phonetic: 'oʊ-iː-ɛm' },
          { word: 'Private label', meaning: 'Nhãn hàng riêng của chuỗi bán lẻ', phonetic: 'ˈpraɪvət ˈleɪbl' }
        ]
      },
      {
        id: 'u15-e6',
        type: 'speak',
        promptVi: 'Nâng ly chúc mừng ký kết hợp đồng liên minh chiến lược thành công:',
        englishSentence: 'Let us raise a glass of sparkling mineral water to our successful strategic alliance!',
        audioText: 'Let us raise a glass of sparkling mineral water to our successful strategic alliance!',
        phonetics: '/lɛt ʌs reɪz ə glæs əv ˈspɑːrklɪŋ ˈmɪnərəl ˈwɔːtər tuː aʊər səkˈsɛsfʊl strəˈtiːdʒɪk əˈlaɪəns/',
        explanation: 'Lời chúc mừng toast danh dự kết thúc lễ ký kết, nâng tầm phong thái ngoại giao chuyên nghiệp.',
        whyWrong: 'Nâng ly bằng nước khoáng có ga Đảnh Thạnh mát lạnh tôn vinh ngay chính sản phẩm chủ lực của công ty.',
        crucialNote: 'Cụm từ "strategic alliance" (liên minh chiến lược) khẳng định mối quan hệ bền chặt vượt trên mua bán thông thường.',
        memoryHook: 'RAISE A GLASS TO STRATEGIC ALLIANCE = Nâng ly chúc mừng liên minh chiến lược!',
        vocabularyHighlights: [
          { word: 'Raise a glass', meaning: 'Nâng ly chúc mừng', phonetic: 'reɪz ə glæs' },
          { word: 'Strategic alliance', meaning: 'Liên minh chiến lược', phonetic: 'strəˈtiːdʒɪk əˈlaɪəns' }
        ]
      }
    ]
  },
  // ==================== LEVEL C2: BẬC THẦY BẢN NGỮ & ĐÀM PHÁN TOÀN CẦU (NATIVE MASTER) ====================
  {
    id: 'unit-16',
    unitNumber: 16,
    title: 'Thành Ngữ Thương Trường & Lối Nói Bản Ngữ',
    subtitle: 'Làm chủ các executive idioms giúp bạn nói chuyện như một Tổng Giám Đốc Mỹ',
    level: 'C2',
    icon: '👑',
    color: 'purple',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u16-e1',
        type: 'choice',
        promptVi: 'Khi đàm phán hợp đồng phân phối, bạn muốn nói: "Chúng tôi muốn tạo ra một sân chơi công bằng cho cả hai bên", người bản xứ dùng thành ngữ nào?',
        englishSentence: 'We want to ensure a level playing field for all regional distributors.',
        audioText: 'We want to ensure a level playing field for all regional distributors.',
        options: [
          'We want to ensure a level playing field for all regional distributors.',
          'We want to make the ground flat and smooth.',
          'We want to play an equal soccer match.'
        ],
        correctIndex: 0,
        explanation: '"A level playing field" là thành ngữ boardroom chuẩn mực có nghĩa là môi trường cạnh tranh công bằng, không ai bị thiên vị.',
        whyWrong: 'Dịch word-by-word "make ground flat" nghe ngô nghê và không thuộc văn phong kinh doanh.',
        crucialNote: 'Thành ngữ này khẳng định uy tín và sự minh bạch trong chính sách giá của Vikoda.',
        memoryHook: 'LEVEL PLAYING FIELD = Sân chơi công bằng, minh bạch.',
        vocabularyHighlights: [
          { word: 'Level playing field', meaning: 'Sân chơi cạnh tranh công bằng', phonetic: 'ˈlɛvl ˈpleɪɪŋ fiːld' },
          { word: 'Regional distributor', meaning: 'Nhà phân phối vùng', phonetic: 'ˈriːdʒənl dɪˈstrɪbjətər' }
        ]
      },
      {
        id: 'u16-e2',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Để thúc đẩy hợp đồng chốt nhanh hơn, chúng tôi sẽ hỗ trợ thêm chi phí trưng bày kệ hàng."',
        englishSentence: 'To sweeten the deal, we will subsidize your premier shelf display costs.',
        audioText: 'To sweeten the deal, we will subsidize your premier shelf display costs.',
        phonetics: '/tuː ˈswiːtn ðə diːl, wiː wɪl ˈsʌbsɪdaɪz jɔːr ˈprɛmiər ʃɛlf dɪˈspleɪ kɒsts/',
        wordPool: ['To', 'sweeten', 'the', 'deal,', 'we', 'will', 'subsidize', 'your', 'premier', 'shelf', 'display', 'costs.', 'salt', 'kill'],
        explanation: '"Sweeten the deal" là thành ngữ bản ngữ kinh điển nghĩa là đưa thêm ưu đãi hấp dẫn để đối tác dễ dàng gật đầu ký hợp đồng.',
        whyWrong: 'Thay vì giảm giá trực tiếp làm mất giá trị sản phẩm, hãy "sweeten the deal" bằng chi phí marketing hoặc POSM.',
        crucialNote: 'Từ "subsidize" (trợ giá / hỗ trợ chi phí) nghe lịch thiệp và mang tính hỗ trợ tài chính cao cấp.',
        memoryHook: 'SWEETEN THE DEAL = Thêm đường cho ngọt, thêm ưu đãi để chốt deal!',
        vocabularyHighlights: [
          { word: 'Sweeten the deal', meaning: 'Thêm ưu đãi hấp dẫn để chốt hợp đồng', phonetic: 'ˈswiːtn ðə diːl' },
          { word: 'Subsidize', meaning: 'Trợ cấp, hỗ trợ kinh phí', phonetic: 'ˈsʌbsɪdaɪz' }
        ]
      },
      {
        id: 'u16-e3',
        type: 'speak',
        promptVi: 'Luyện câu thể hiện tư duy nhạy bén khi đối thoại với đối tác quốc tế:',
        englishSentence: 'Reading between the lines, your main concern is inventory turnover, not the unit cost.',
        audioText: 'Reading between the lines, your main concern is inventory turnover, not the unit cost.',
        phonetics: '/ˈriːdɪŋ bɪˈtwiːn ðə laɪnz, jɔːr meɪn kənˈsɜːrn ɪz ˈɪnvəntɔːri ˈtɜːrnˌoʊvər, nɒt ðə ˈjuːnɪt kɒst/',
        explanation: '"Read between the lines" (Đọc được ẩn ý / thấu hiểu tâm lý ngầm) là đỉnh cao của nhà đàm phán thấu thị.',
        whyWrong: 'Đối tác thường phàn nàn về giá, nhưng thực chất họ lo ngại hàng bán chậm (inventory turnover). Nắm đúng tâm lý này bạn sẽ làm chủ bàn đàm phán.',
        crucialNote: 'Nói câu này với giọng ấm, đồng cảm, mắt nhìn thẳng vào đối tác để tạo sự kết nối tin cậy.',
        memoryHook: 'READ BETWEEN THE LINES = Đọc ra ẩn ý đằng sau lời nói.',
        vocabularyHighlights: [
          { word: 'Read between the lines', meaning: 'Đọc ra ẩn ý, thấu hiểu ngầm', phonetic: 'riːd bɪˈtwiːn ðə laɪnz' },
          { word: 'Inventory turnover', meaning: 'Tốc độ quay vòng hàng tồn kho', phonetic: 'ˈɪnvəntɔːri ˈtɜːrnˌoʊvər' }
        ]
      },
      {
        id: 'u16-e4',
        type: 'choice',
        promptVi: 'Khi muốn nói sản phẩm chai thủy tinh Vikoda sẽ tạo ra bước đột phá doanh thu thực sự cho chuỗi resort:',
        englishSentence: 'This eco-luxury glass bottle lineup will genuinely move the needle for your beverage revenue.',
        audioText: 'This eco-luxury glass bottle lineup will genuinely move the needle for your beverage revenue.',
        options: [
          'This eco-luxury glass bottle lineup will genuinely move the needle for your beverage revenue.',
          'This water bottle will touch your sewing needle.',
          'This water is cheap so buy it now.'
        ],
        correctIndex: 0,
        explanation: '"Move the needle" là thành ngữ quản trị cao cấp chỉ hành động tạo ra tác động rõ rệt, thay đổi cục diện đáng kể.',
        whyWrong: '"Move the needle" xuất phát từ đồng hồ đo lường, không liên quan đến cái kim may vá thông thường.',
        crucialNote: 'Các Giám đốc F&B 5 sao đánh giá rất cao những sản phẩm giúp họ "move the needle" về cả doanh thu lẫn tiêu chuẩn xanh ESG.',
        memoryHook: 'MOVE THE NEEDLE = Làm kim đồng hồ dịch chuyển, tạo đột phá rõ rệt!',
        vocabularyHighlights: [
          { word: 'Move the needle', meaning: 'Tạo đột phá rõ rệt, làm chuyển biến cục diện', phonetic: 'muːv ðə ˈniːdl' },
          { word: 'Beverage revenue', meaning: 'Doanh thu ngành đồ uống', phonetic: 'ˈbɛvərɪdʒ ˈrɛvənjuː' }
        ]
      }
    ]
  },
  {
    id: 'unit-17',
    unitNumber: 17,
    title: 'Xử Lý Phản Bác Cấp Cao (Feel - Felt - Found)',
    subtitle: 'Nghệ thuật đảo ngược thế cờ khi đối tác khó tính so sánh với các tập đoàn đa quốc gia',
    level: 'C2',
    icon: '🛡️',
    color: 'cyan',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u17-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp công thức đàm phán kinh điển Feel-Felt-Found: "Tôi hiểu cảm giác của bạn, nhiều đối tác ban đầu cũng nghĩ vậy, nhưng sau đó họ nhận ra giá trị vượt trội của Vikoda."',
        englishSentence: 'I understand how you feel, other buyers felt the same, but they found that Vikoda drove higher retention.',
        audioText: 'I understand how you feel, other buyers felt the same, but they found that Vikoda drove higher retention.',
        phonetics: '/aɪ ˌʌndərˈstænd haʊ juː fiːl, ˈʌðər ˈbaɪərz fɛlt ðə seɪm, bʌt ðeɪ faʊnd ðæt vɪˈkoʊdə droʊv ˈhaɪər rɪˈtɛnʃn/',
        wordPool: ['I', 'understand', 'how', 'you', 'feel,', 'other', 'buyers', 'felt', 'the', 'same,', 'but', 'they', 'found', 'that', 'Vikoda', 'drove', 'higher', 'retention.', 'hate'],
        explanation: 'Khung đàm phán "Feel - Felt - Found" của Harvard: Đồng cảm (Feel) -> Bình thường hóa (Felt) -> Khám phá giải pháp thực chứng (Found).',
        whyWrong: 'Tuyệt đối không tranh cãi "You are wrong" với khách hàng. Hãy dẫn dắt họ bằng trải nghiệm của các đối tác đi trước.',
        crucialNote: 'Từ "retention" (tỷ lệ khách hàng quay lại mua tiếp) là chỉ số vàng trong bán lẻ.',
        memoryHook: '3F THẦN THÁNH: FEEL (Thấu cảm) -> FELT (Đồng cảnh) -> FOUND (Khai sáng giá trị)!',
        vocabularyHighlights: [
          { word: 'Higher retention', meaning: 'Tỷ lệ khách hàng gắn bó/mua lại cao hơn', phonetic: 'ˈhaɪər rɪˈtɛnʃn' },
          { word: 'Value proposition', meaning: 'Tuyên bố giá trị độc bản', phonetic: 'ˈvæljuː ˌprɒpəˈzɪʃn' }
        ]
      },
      {
        id: 'u17-e2',
        type: 'speak',
        promptVi: 'Nói câu phản hồi đĩnh đạc khi đối tác so sánh với Evian hoặc San Pellegrino:',
        englishSentence: 'While European brands offer history, Vikoda provides a rare natural pH 9.0 synergy that no imported water can replicate at source.',
        audioText: 'While European brands offer history, Vikoda provides a rare natural pH nine point oh synergy that no imported water can replicate at source.',
        phonetics: '/waɪl ˌjʊərəˈpiːən brændz ˈɒfər ˈhɪstəri, vɪˈkoʊdə prəˈvaɪdz ə rɛər ˈnætʃrəl piː-eɪtʃ naɪn pɔɪnt oʊ ˈsɪnərdʒi ðæt noʊ ɪmˈpɔːrtɪd ˈwɔːtər kæn ˈrɛplɪkeɪt æt sɔːrs/',
        explanation: 'Tôn trọng đối thủ nhưng nêu bật lợi thế độc bản: Tính kiềm tự nhiên pH 9.0 nguyên bản tại vòi mà không nước nhập khẩu nào sao chép được.',
        whyWrong: 'Không dìm hàng đối thủ mà định vị Vikoda vào một phân khúc khác biệt hoàn toàn (Authentic Alkaline Synergy).',
        crucialNote: 'Từ "replicate at source" (tái tạo nguyên bản tại nguồn) thể hiện tính độc quyền thiên nhiên.',
        memoryHook: 'TÔN TRỌNG ĐỐI THỦ + ĐỘC BẢN VIKODA PH 9.0 = Vô đối trên thị trường!',
        vocabularyHighlights: [
          { word: 'Synergy', meaning: 'Sự cộng hưởng khoáng chất tương hỗ', phonetic: 'ˈsɪnərdʒi' },
          { word: 'Replicate', meaning: 'Sao chép, tái tạo lại', phonetic: 'ˈrɛplɪkeɪt' }
        ]
      }
    ]
  },
  {
    id: 'unit-18',
    unitNumber: 18,
    title: 'Incoterms & Thanh Toán Quốc Tế Cấp Chuyên Gia',
    subtitle: 'Nắm vững LC at Sight, Giám định SGS và Vận tải viễn dương bảo toàn khoáng chất',
    level: 'C2',
    icon: '🚢',
    color: 'blue',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u18-e1',
        type: 'choice',
        promptVi: 'Khi đàm phán điều khoản thanh toán an toàn tuyệt đối cho container xuất khẩu đi Trung Đông / Hoa Kỳ:',
        englishSentence: 'Our standard terms require an Irrevocable Letter of Credit at sight confirmed by a top-tier international bank.',
        audioText: 'Our standard terms require an Irrevocable Letter of Credit at sight confirmed by a top-tier international bank.',
        options: [
          'Our standard terms require an Irrevocable Letter of Credit at sight confirmed by a top-tier international bank.',
          'Please send us cash in an envelope via post.',
          'You can pay whenever you feel like it next year.'
        ],
        correctIndex: 0,
        explanation: '"Irrevocable LC at sight" (Thư tín dụng không thể hủy ngang trả ngay) là phương thức thanh toán chuẩn quốc tế đảm bảo an toàn vốn tối đa.',
        whyWrong: 'Xuất khẩu đường biển luôn cần thư tín dụng có xác nhận (confirmed LC) từ ngân hàng hạng nhất (top-tier bank).',
        crucialNote: 'Đây là điều khoản chuẩn mà phòng Tài chính & Kế toán Vikoda luôn áp dụng.',
        memoryHook: 'IRREVOCABLE LC AT SIGHT = Thư tín dụng không hủy ngang, tiền về ngay khi xuất trình chứng từ!',
        vocabularyHighlights: [
          { word: 'Irrevocable LC', meaning: 'Thư tín dụng không thể hủy ngang', phonetic: 'ɪˈrɛvəkəbl ɛl-siː' },
          { word: 'At sight', meaning: 'Thanh toán ngay khi nhìn thấy chứng từ hợp lệ', phonetic: 'æt saɪt' }
        ]
      },
      {
        id: 'u18-e2',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Mỗi lô hàng xuất khẩu đều kèm theo Chứng thư Phân tích Khoáng chất độc lập từ SGS hoặc Eurofins."',
        englishSentence: 'Every export consignment is accompanied by an independent SGS Certificate of Mineral Analysis.',
        audioText: 'Every export consignment is accompanied by an independent SGS Certificate of Mineral Analysis.',
        phonetics: '/ˈɛvri ˈɛkspɔːrt kənˈsaɪnmənt ɪz əˈkʌmpənid baɪ ən ˌɪndɪˈpɛndənt ɛs-dʒiː-ɛs sərˈtɪfɪkət əv ˈmɪnərəl əˈnæləsɪs/',
        wordPool: ['Every', 'export', 'consignment', 'is', 'accompanied', 'by', 'an', 'independent', 'SGS', 'Certificate', 'of', 'Mineral', 'Analysis.', 'fake'],
        explanation: 'Chứng thư kiểm nghiệm SGS / Eurofins là tấm hộ chiếu thông quan và bảo chứng chất lượng cho Vikoda trên toàn cầu.',
        whyWrong: '"Consignment" là từ chuyên ngành ngoại thương chỉ lô hàng gửi xuất khẩu.',
        crucialNote: 'Nhắc đến SGS và Eurofins tạo niềm tin lập tức cho các nhà nhập khẩu tại Nhật Bản và Châu Âu.',
        memoryHook: 'SGS CERTIFICATE = Tấm khiên bảo chứng phẩm cấp quốc tế.',
        vocabularyHighlights: [
          { word: 'Consignment', meaning: 'Lô hàng xuất khẩu', phonetic: 'kənˈsaɪnmənt' },
          { word: 'Certificate of Analysis', meaning: 'Chứng thư kiểm nghiệm thành phần', phonetic: 'sərˈtɪfɪkət əv əˈnæləsɪs' }
        ]
      }
    ]
  },
  {
    id: 'unit-19',
    unitNumber: 19,
    title: 'Khoa Học Khoáng Kiềm & Thẩm Thấu Tế Bào Chuyên Sâu',
    subtitle: 'Giải thích cơ chế Bicarbonate HCO3- và liên kết Hydro tự nhiên bằng tiếng Anh khoa học',
    level: 'C2',
    icon: '🧬',
    color: 'emerald',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u19-e1',
        type: 'speak',
        promptVi: 'Thuyết trình cơ chế kiềm tự nhiên đối trọng với tính axit trong dạ dày:',
        englishSentence: 'Vikoda’s abundant natural bicarbonate buffers metabolic acidity and optimizes cellular hydration without stressing renal function.',
        audioText: 'Vikodas abundant natural bicarbonate buffers metabolic acidity and optimizes cellular hydration without stressing renal function.',
        phonetics: '/vɪˈkoʊdəz əˈbʌndənt ˈnætʃrəl baɪˈkɑːrbənət ˈbʌfərz ˌmɛtəˈbɒlɪk əˈsɪdəti ænd ˈɒptɪmaɪzɪz ˈsɛljələr haɪˈdreɪʃn wɪˈðaʊt ˈstrɛsɪŋ ˈriːnl ˈfʌŋkʃn/',
        explanation: 'Câu nói đậm chất khoa học y khoa: Muối Hydrogencarbonate (Bicarbonate) tự nhiên giúp đệm axit chuyển hóa và tối ưu thẩm thấu tế bào.',
        whyWrong: '"Without stressing renal function" (không gây áp lực cho thận) khẳng định chỉ số TDS cân bằng của Vikoda phù hợp uống hàng ngày.',
        crucialNote: 'Các bác sĩ và chuyên gia dinh dưỡng quốc tế cực kỳ chú trọng cơ chế đệm axit sinh học này.',
        memoryHook: 'BICARBONATE BUFFERS ACIDITY = Muối khoáng kiềm trung hòa axit dư thừa!',
        vocabularyHighlights: [
          { word: 'Bicarbonate', meaning: 'Gốc khoáng kiềm Hydrogencarbonate (HCO3-)', phonetic: 'baɪˈkɑːrbənət' },
          { word: 'Cellular hydration', meaning: 'Sự thẩm thấu cấp ẩm đến từng tế bào', phonetic: 'ˈsɛljələr haɪˈdreɪʃn' }
        ]
      }
    ]
  },
  {
    id: 'unit-20',
    unitNumber: 20,
    title: 'Thuyết Trình Hội Đồng Quản Trị & Lễ Ký Kết Đỉnh Cao',
    subtitle: 'Kỹ năng đóng gói thương vụ triệu đô, trả lời chất vấn cổ đông và nâng ly ngoại giao',
    level: 'C2',
    icon: '🥂',
    color: 'amber',
    xpReward: 60,
    gemReward: 25,
    exercises: [
      {
        id: 'u20-e1',
        type: 'word_order',
        promptVi: 'Sắp xếp câu: "Hôm nay chúng ta không chỉ ký một hợp đồng phân phối, mà mở ra một kỷ nguyên mới cho ngành nước khoáng kiềm nguyên bản."',
        englishSentence: 'Today we do not merely sign a contract, we inaugurate a new era for natural alkaline wellness.',
        audioText: 'Today we do not merely sign a contract, we inaugurate a new era for natural alkaline wellness.',
        phonetics: '/təˈdeɪ wiː duː nɒt ˈmɪərli saɪn ə ˈkɒntrækt, wiː ɪˈnɔːgjəreɪt ə njuː ˈɪərə fɔːr ˈnætʃrəl ˈælkəlaɪn ˈwɛlnɪs/',
        wordPool: ['Today', 'we', 'do', 'not', 'merely', 'sign', 'a', 'contract,', 'we', 'inaugurate', 'a', 'new', 'era', 'for', 'natural', 'alkaline', 'wellness.', 'ugly'],
        explanation: 'Lời phát biểu truyền cảm hứng của nhà lãnh đạo ngoại giao tại lễ ký kết hợp đồng đại lý độc quyền.',
        whyWrong: 'Dùng từ "inaugurate a new era" (khai mở một kỷ nguyên mới) nâng tầm quan hệ đối tác chiến lược.',
        crucialNote: 'Ánh mắt kiên định, nụ cười ấm áp, nâng ly Vikoda Thủy Tinh lấp lánh hướng về toàn thể quan khách.',
        memoryHook: 'INAUGURATE A NEW ERA = Khởi đầu một kỷ nguyên rực rỡ!',
        vocabularyHighlights: [
          { word: 'Inaugurate', meaning: 'Khai mở, long trọng khởi xướng', phonetic: 'ɪˈnɔːgjəreɪt' },
          { word: 'Wellness', meaning: 'Sức khỏe toàn diện thể chất và tinh thần', phonetic: 'ˈwɛlnɪs' }
        ]
      }
    ]
  }
];

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
    slotAfterUnitIndex: 1, // Between Unit 7 and Unit 8
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
    slotAfterUnitIndex: 2, // Between Unit 13 and Unit 14
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
    slotAfterUnitIndex: 3, // Between Unit 9 and Unit 10
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
    slotAfterUnitIndex: 0, // Between Unit 11 and Unit 12
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
    slotAfterUnitIndex: 0, // Between Unit 16 and Unit 17
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
    slotAfterUnitIndex: 2, // Between Unit 18 and Unit 19
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

