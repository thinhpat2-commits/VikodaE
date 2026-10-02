import { UnitLesson } from '../curriculumData';

export const LEVEL_A1_UNITS: UnitLesson[] = [
  {
    id: 'unit-1',
    unitNumber: 1,
    title: 'Chào Hỏi & Làm Quen Đồng Nghiệp',
    subtitle: 'Mở lời tự tin, giới thiệu bản thân và hỏi thăm thân thiện',
    level: 'A1',
    icon: '👋',
    color: 'emerald',
    xpReward: 30,
    gemReward: 10,
    exercises: [
      {
        id: 'u1-e1',
        type: 'choice',
        promptEn: 'Choose the most natural way to introduce yourself to a new colleague:',
        promptVi: 'Chọn câu tự giới thiệu bản thân tự nhiên nhất với đồng nghiệp mới:',
        englishSentence: 'Hello, I am Minh from the sales team. Nice to meet you!',
        audioText: 'Hello, I am Minh from the sales team. Nice to meet you!',
        options: [
          'Hello, I am Minh from the sales team. Nice to meet you!',
          'Hey, who are you? Tell me right now.',
          'My name is someone and I work here.'
        ],
        correctIndex: 0,
        explanation: 'Cấu trúc "Hello, I am [Tên] from [Bộ phận]. Nice to meet you!" là chuẩn mực giao tiếp văn phòng quốc tế.',
        whyWrong: 'Không dùng câu cộc lốc hoặc thiếu chủ ngữ.',
        crucialNote: 'Kèm theo nụ cười nhẹ và ánh mắt thân thiện khi chào.',
        memoryHook: 'Formula: Hello + I am [Tên] + from [Team] + Nice to meet you!'
      },
      {
        id: 'u1-e2',
        type: 'speak',
        promptEn: 'Practice introducing your job at Vikoda clearly:',
        promptVi: 'Luyện nói câu giới thiệu bạn đang làm việc tại Vikoda:',
        englishSentence: 'I work at Vikoda Mineral Water Company.',
        audioText: 'I work at Vikoda Mineral Water Company.',
        phonetics: '/aɪ wɜːrk æt vɪˈkoʊdə ˈmɪnərəl ˈwɔːtər ˈkʌmpəni/',
        explanation: '"I work at [Company]" là cách nói ngắn gọn, dễ nhớ và tự nhiên nhất.',
        whyWrong: 'Phát âm rõ từ "Mineral" (/ˈmɪnərəl/) và "Water" (/ˈwɔːtər/).',
        crucialNote: 'Nhấn vào âm đầu của "VI-koda".',
        memoryHook: 'I work at Vikoda = Tôi làm việc tại Vikoda.'
      },
      {
        id: 'u1-e3',
        type: 'word_order',
        promptEn: 'Arrange the words to ask how your colleague is doing today:',
        promptVi: 'Sắp xếp câu hỏi thăm đồng nghiệp hôm nay thế nào:',
        englishSentence: 'Good morning, how are you doing today?',
        audioText: 'Good morning, how are you doing today?',
        phonetics: '/ɡʊd ˈmɔːrnɪŋ, haʊ ɑːr juː ˈduːɪŋ təˈdeɪ/',
        wordPool: ['Good', 'morning,', 'how', 'are', 'you', 'doing', 'today?', 'what', 'is'],
        explanation: '"How are you doing today?" là câu hỏi thăm phổ biến hàng đầu mỗi sáng tại nơi làm việc.',
        whyWrong: 'Thân thiện hơn nhiều so với câu sách vở khô cứng "How do you do?".',
        crucialNote: 'Khi người khác hỏi câu này, có thể đáp: "I am doing great, thank you! And you?".',
        memoryHook: 'How are you doing = Bạn khỏe không / Hôm nay thế nào?'
      },
      {
        id: 'u1-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the audio and choose the polite response to a greeting:',
        promptVi: 'Bấm nghe audio và chọn câu hồi đáp lịch sự khi được chào mừng:',
        englishSentence: 'Welcome to our office. It is great to have you here.',
        audioText: 'Welcome to our office. It is great to have you here.',
        options: [
          'Thank you very much. I am excited to be here.',
          'No problem, I don’t care.',
          'Why did you invite me here?'
        ],
        correctIndex: 0,
        explanation: '"Thank you very much. I am excited to be here." thể hiện thái độ hào hứng, tích cực.',
        whyWrong: 'Hồi đáp nhiệt tình giúp xây dựng ấn tượng tốt trong ngày đầu làm việc.',
        crucialNote: 'Giữ tông giọng tự tin và ấm áp.',
        memoryHook: 'Excited to be here = Rất hào hứng được có mặt tại đây.'
      },
      {
        id: 'u1-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the blank with the correct word for greeting at work:',
        promptVi: 'Điền từ thích hợp vào chỗ trống để chào mừng đồng nghiệp:',
        englishSentence: 'Welcome to our [ _____ ], it is great to work with you.',
        audioText: 'Welcome to our team, it is great to work with you.',
        options: ['team', 'house', 'car'],
        correctIndex: 0,
        blankWord: 'team',
        explanation: '"Welcome to our team" = Chào mừng bạn gia nhập đội ngũ của chúng tôi.',
        whyWrong: 'Trong môi trường công sở, "team" là từ chỉ đội ngũ, phòng ban.',
        crucialNote: 'Nói câu này tạo cảm giác gắn kết cho người mới.',
        memoryHook: 'Welcome to our team = Chào mừng về đội!'
      }
    ]
  },
  {
    id: 'unit-2',
    unitNumber: 2,
    title: 'Chào Khách & Mời Nước Mát Lạnh',
    subtitle: 'Nghi thức tiếp khách chu đáo và mời dùng chai nước Vikoda',
    level: 'A1',
    icon: '💧',
    color: 'cyan',
    xpReward: 30,
    gemReward: 10,
    exercises: [
      {
        id: 'u2-e1',
        type: 'listen_choice',
        promptEn: 'Listen to the host offering water and select the correct beverage offered:',
        promptVi: 'Lắng nghe chủ nhà mời nước và chọn loại nước uống được mời:',
        englishSentence: 'Would you like a chilled bottle of natural mineral water?',
        audioText: 'Would you like a chilled bottle of natural mineral water?',
        options: [
          'Chai nước khoáng thiên nhiên ướp lạnh mát lành',
          'Một cốc cà phê nóng không đường',
          'Một ly rượu vang đỏ'
        ],
        correctIndex: 0,
        explanation: '"A chilled bottle of natural mineral water" = Một chai nước khoáng thiên nhiên ướp mát.',
        whyWrong: '"Chilled" nghĩa là được làm mát ở nhiệt độ lý tưởng (10-15°C).',
        crucialNote: 'Đây là câu mời nước mở đầu tiêu chuẩn tại văn phòng và showroom Vikoda.',
        memoryHook: 'Chilled bottle = Chai nước ướp lạnh thanh khiết.'
      },
      {
        id: 'u2-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence to invite the guest to have a seat:',
        promptVi: 'Sắp xếp câu mời khách an tọa lịch sự:',
        englishSentence: 'Please have a seat while you wait.',
        audioText: 'Please have a seat while you wait.',
        phonetics: '/pliːz hæv ə siːt waɪl juː weɪt/',
        wordPool: ['Please', 'have', 'a', 'seat', 'while', 'you', 'wait.', 'stand', 'sit'],
        explanation: '"Please have a seat" là cách nói lịch thiệp, trang trọng hơn "Sit down".',
        whyWrong: 'Tuyệt đối không ra lệnh "Sit down" với khách quý.',
        crucialNote: 'Đưa bàn tay mở hướng về hàng ghế khi nói câu này.',
        memoryHook: 'Have a seat = Mời ngồi lịch sự.'
      },
      {
        id: 'u2-e3',
        type: 'choice',
        promptEn: 'Choose the best phrase to say when handing a bottle of Vikoda to a guest:',
        promptVi: 'Chọn câu nói chuẩn nhất khi trao chai nước Vikoda tận tay khách:',
        englishSentence: 'Here is some chilled water for you. Please enjoy!',
        audioText: 'Here is some chilled water for you. Please enjoy!',
        options: [
          'Here is some chilled water for you. Please enjoy!',
          'Drink this water immediately.',
          'Take the bottle and go.'
        ],
        correctIndex: 0,
        explanation: '"Here is some chilled water for you. Please enjoy!" thể hiện sự hiếu khách chu đáo.',
        whyWrong: 'Trao chai nước bằng hai tay, hướng logo Vikoda về phía tầm nhìn của khách.',
        crucialNote: 'Lời mời "Please enjoy!" ngắn gọn và tinh tế.',
        memoryHook: 'Here is... Please enjoy! = Mời anh/chị dùng nước ạ!'
      },
      {
        id: 'u2-e4',
        type: 'speak',
        promptEn: 'Practice offering help to a visiting guest:',
        promptVi: 'Luyện nói câu hỏi thăm khách có cần thêm gì không:',
        englishSentence: 'Can I get you anything else to drink?',
        audioText: 'Can I get you anything else to drink?',
        phonetics: '/kæn aɪ ɡɛt juː ˈɛniθɪŋ ɛls tuː drɪŋk/',
        explanation: '"Can I get you anything else...?" là câu hỏi chăm sóc khách hàng chuẩn mực.',
        whyWrong: 'Âm đuôi /s/ trong từ "else" cần phát âm rõ ràng.',
        crucialNote: 'Khách có thể chọn nước khoáng có ga (Sparkling) hoặc trà nếu muốn.',
        memoryHook: 'Can I get you = Tôi có thể lấy thêm gì cho anh/chị không?'
      },
      {
        id: 'u2-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the blank to offer a refreshing beverage:',
        promptVi: 'Điền từ thích hợp để mời khách dùng chai nước mát lạnh:',
        englishSentence: 'Would you like a [ _____ ] bottle of Vikoda water?',
        audioText: 'Would you like a chilled bottle of Vikoda water?',
        options: ['chilled', 'boiled', 'broken'],
        correctIndex: 0,
        blankWord: 'chilled',
        explanation: '"A chilled bottle" = Một chai nước được ướp mát thanh khiết.',
        whyWrong: '"Chilled" dùng cho nước giải khát ướp lạnh mát lành (10-15°C).',
        crucialNote: 'Nhiệt độ này giúp cảm nhận vị ngọt tự nhiên của khoáng Đảnh Thạnh trọn vẹn nhất.',
        memoryHook: 'Chilled bottle = Chai nước ướp lạnh.'
      }
    ]
  },
  {
    id: 'unit-3',
    unitNumber: 3,
    title: 'Chỉ Đường Trong Văn Phòng',
    subtitle: 'Hướng dẫn phòng họp, thang máy, khu pantry và nhà vệ sinh',
    level: 'A1',
    icon: '🧭',
    color: 'blue',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u3-e1',
        type: 'word_order',
        promptEn: 'Arrange the sentence showing the direction to the main meeting room:',
        promptVi: 'Sắp xếp câu chỉ đường đến phòng họp chính:',
        englishSentence: 'The meeting room is just down the hall.',
        audioText: 'The meeting room is just down the hall.',
        phonetics: '/ðə ˈmiːtɪŋ ruːm ɪz dʒʌst daʊn ðə hɔːl/',
        wordPool: ['The', 'meeting', 'room', 'is', 'just', 'down', 'the', 'hall.', 'lost', 'where'],
        explanation: '"Down the hall" nghĩa là đi dọc theo hành lang phía trước.',
        whyWrong: 'Cụm từ chỉ phương hướng thông dụng nhất trong mọi tòa nhà văn phòng.',
        crucialNote: 'Chỉ tay theo hướng hành lang để khách dễ hình dung.',
        memoryHook: 'Down the hall = Dọc theo hành lang.'
      },
      {
        id: 'u3-e2',
        type: 'choice',
        promptEn: 'How to politely direct someone asking for the restroom:',
        promptVi: 'Chỉ đường lịch sự khi khách hỏi nhà vệ sinh ở đâu:',
        englishSentence: 'The restroom is on the right, next to the elevator.',
        audioText: 'The restroom is on the right, next to the elevator.',
        options: [
          'The restroom is on the right, next to the elevator.',
          'Go outside and search for it.',
          'There is no toilet in this building.'
        ],
        correctIndex: 0,
        explanation: 'Chỉ rõ vị trí: "on the right" (bên tay phải) và "next to the elevator" (cạnh thang máy).',
        whyWrong: 'Trong tiếng Anh quốc tế, từ "restroom" lịch sự hơn từ "toilet".',
        crucialNote: 'Chỉ dẫn mốc dễ thấy như thang máy để khách không bị lạc.',
        memoryHook: 'Next to the elevator = Cạnh thang máy.'
      },
      {
        id: 'u3-e3',
        type: 'speak',
        promptEn: 'Lead the guest into the conference room with confidence:',
        promptVi: 'Luyện nói câu mời khách đi theo bạn vào phòng họp:',
        englishSentence: 'Please follow me to the boardroom.',
        audioText: 'Please follow me to the boardroom.',
        phonetics: '/pliːz ˈfɒloʊ miː tuː ðə ˈbɔːrdruːm/',
        explanation: '"Please follow me" = Xin mời đi theo tôi.',
        whyWrong: '"Boardroom" là phòng họp ban giám đốc / phòng họp lớn.',
        crucialNote: 'Đi trước khách nửa bước để dẫn đường nhã nhặn.',
        memoryHook: 'Follow me = Đi theo tôi nhé.'
      },
      {
        id: 'u3-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the audio and identify which floor the guest should go to:',
        promptVi: 'Nghe đoạn âm thanh và xác định khách cần lên tầng mấy:',
        englishSentence: 'Our finance department is located on the third floor.',
        audioText: 'Our finance department is located on the third floor.',
        options: [
          'Tầng 3 (Third floor)',
          'Tầng 1 (Ground floor)',
          'Tầng hầm (Basement)'
        ],
        correctIndex: 0,
        explanation: '"Third floor" = Tầng ba.',
        whyWrong: 'Nghe kỹ số thứ tự: First (1), Second (2), Third (3).',
        crucialNote: 'Ở các tòa nhà lớn, có thể chỉ họ vào thang máy và bấm số 3.',
        memoryHook: 'Third floor = Tầng ba.'
      },
      {
        id: 'u3-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the blank with the correct preposition of direction:',
        promptVi: 'Điền giới từ chỉ phương hướng dẫn khách đến phòng họp:',
        englishSentence: 'Please follow me, the boardroom is just [ _____ ] the hall.',
        audioText: 'Please follow me, the boardroom is just down the hall.',
        options: ['down', 'under', 'inside'],
        correctIndex: 0,
        blankWord: 'down',
        explanation: '"Down the hall" = Đi thẳng dọc theo hành lang.',
        whyWrong: 'Giới từ "down" đi với "the hall" là thành ngữ chỉ đường phổ biến nhất trong văn phòng.',
        crucialNote: 'Có thể đi kèm cử chỉ tay hướng về phía trước.',
        memoryHook: 'Down the hall = Dọc hành lang.'
      }
    ]
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    title: 'Nói Về Nước Khoáng Vikoda Thật Đơn Giản',
    subtitle: 'Nắm chắc 3 ý vàng: Khoáng kiềm thiên nhiên, pH 9.0 và uống rất mát',
    level: 'A1',
    icon: '✨',
    color: 'purple',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u4-e1',
        type: 'speak',
        promptEn: 'Practice saying the core definition of Vikoda in simple English:',
        promptVi: 'Luyện nói câu giới thiệu cốt lõi về nước Vikoda bằng tiếng Anh giản dị:',
        englishSentence: 'Vikoda is 100% natural alkaline mineral water.',
        audioText: 'Vikoda is one hundred percent natural alkaline mineral water.',
        phonetics: '/vɪˈkoʊdə ɪz wʌn ˈhʌndrəd pərˈsɛnt ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈwɔːtər/',
        explanation: 'Chỉ cần nhớ 4 từ vàng: Natural (Thiên nhiên) + Alkaline (Có tính kiềm) + Mineral (Khoáng chất) + Water (Nước).',
        whyWrong: 'Đừng dùng từ phức tạp, người nghe chỉ cần hiểu đây là nước khoáng kiềm tự nhiên.',
        crucialNote: 'Phát âm chữ "Alkaline" (/ˈælkəlaɪn/).',
        memoryHook: '4 từ vàng: Natural Alkaline Mineral Water.'
      },
      {
        id: 'u4-e2',
        type: 'choice',
        promptEn: 'How to describe the pH 9.0 level of Vikoda to a casual listener:',
        promptVi: 'Cách nói về độ pH 9.0 của Vikoda dễ hiểu nhất cho người nghe:',
        englishSentence: 'It has a natural pH of 9.0, which is great for your health.',
        audioText: 'It has a natural pH of nine point oh, which is great for your health.',
        options: [
          'It has a natural pH of 9.0, which is great for your health.',
          'It is very sour like pure vinegar.',
          'The water has no pH value.'
        ],
        correctIndex: 0,
        explanation: '"Natural pH of 9.0, which is great for your health" = Kiềm tự nhiên 9.0, rất tốt cho sức khỏe.',
        whyWrong: '9.0 trong tiếng Anh đọc là "nine point oh" hoặc "nine point zero".',
        crucialNote: 'Dễ nhớ, dễ hiểu, người nước ngoài nghe là ấn tượng ngay.',
        memoryHook: 'pH 9.0 = Nine point oh, good for health.'
      },
      {
        id: 'u4-e3',
        type: 'word_order',
        promptEn: 'Arrange the sentence stating where Vikoda water comes from:',
        promptVi: 'Sắp xếp câu giới thiệu nước được đóng chai ngay tại nguồn mỏ:',
        englishSentence: 'Our water is bottled directly at the natural source.',
        audioText: 'Our water is bottled directly at the natural source.',
        phonetics: '/aʊər ˈwɔːtər ɪz ˈbɒtld dəˈrɛktli æt ðə ˈnætʃrəl sɔːrs/',
        wordPool: ['Our', 'water', 'is', 'bottled', 'directly', 'at', 'the', 'natural', 'source.', 'river', 'city'],
        explanation: '"Bottled directly at the source" = Đóng chai trực tiếp tại nguồn mỏ, không qua vận chuyển đường xa.',
        whyWrong: 'Bảo chứng nguyên bản không bị nhiễm khuẩn hay mất khoáng chất.',
        crucialNote: 'Cụm từ "at the source" là điểm tự hào số 1 của Vikoda.',
        memoryHook: 'Bottled at the source = Đóng chai tại nguồn.'
      },
      {
        id: 'u4-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the audio describing the taste of Vikoda water:',
        promptVi: 'Lắng nghe mô tả vị ngon ngọt mát của nước Vikoda và chọn ý đúng:',
        englishSentence: 'Vikoda has a very refreshing, naturally sweet and smooth taste.',
        audioText: 'Vikoda has a very refreshing, naturally sweet and smooth taste.',
        options: [
          'Vị thanh mát, ngọt dịu tự nhiên và êm dịu dễ uống',
          'Vị đắng chát khó uống',
          'Vị ngọt gắt như nước ngọt có đường'
        ],
        correctIndex: 0,
        explanation: '"Refreshing, naturally sweet and smooth" = Thanh mát sảng khoái, ngọt thanh và êm dịu.',
        whyWrong: 'Vị ngọt thanh hậu vị là nhờ khoáng chất Silic hữu cơ quý giá trong lòng đất.',
        crucialNote: 'Từ "refreshing" là từ được khách quốc tế khen ngợi nhiều nhất khi thử Vikoda.',
        memoryHook: 'Refreshing & Smooth = Thanh mát và êm dịu.'
      },
      {
        id: 'u4-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the core keyword describing Vikoda alkalinity:',
        promptVi: 'Điền từ khóa cốt lõi khẳng định độ kiềm hoàn toàn tự nhiên của Vikoda:',
        englishSentence: 'Vikoda has a [ _____ ] alkaline pH of 9.0 from deep underground.',
        audioText: 'Vikoda has a naturally alkaline pH of 9.0 from deep underground.',
        options: ['naturally', 'artificially', 'dangerously'],
        correctIndex: 0,
        blankWord: 'naturally',
        explanation: '"Naturally alkaline" = Kiềm tự nhiên từ mẹ thiên nhiên, không qua điện phân nhân tạo.',
        whyWrong: 'Từ "Naturally" tạo nên sự khác biệt sống còn của Vikoda so với các sản phẩm nhân tạo.',
        crucialNote: 'Khách hàng quốc tế cực kỳ coi trọng xuất xứ kiềm tự nhiên.',
        memoryHook: 'Naturally alkaline = Kiềm tự nhiên 100%.'
      }
    ]
  },
  {
    id: 'unit-5',
    unitNumber: 5,
    title: 'Trực Điện Thoại & Nhắn Lời Lịch Sự',
    subtitle: 'Nhấc máy hotline, chuyển máy và ghi nhận số điện thoại gọi lại',
    level: 'A1',
    icon: '📞',
    color: 'amber',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u5-e1',
        type: 'choice',
        promptEn: 'What is the standard professional greeting when answering an office phone call?',
        promptVi: 'Câu mở đầu chuẩn mực nhất khi nhấc máy điện thoại bàn công ty:',
        englishSentence: 'Good morning, Vikoda company, how may I help you?',
        audioText: 'Good morning, Vikoda company, how may I help you?',
        options: [
          'Good morning, Vikoda company, how may I help you?',
          'Hello, who is this? Talk quickly.',
          'Yes? What do you want from me?'
        ],
        correctIndex: 0,
        explanation: 'Công thức 3 bước vàng: Chào thời gian (Good morning) + Tên công ty (Vikoda company) + Đề nghị giúp đỡ (How may I help you?).',
        whyWrong: 'Tuyệt đối không nhấc máy bằng câu trống không "Alo?".',
        crucialNote: 'Mỉm cười khi trả lời điện thoại giúp giọng nói ấm áp hơn.',
        memoryHook: 'Good morning + Vikoda + How may I help you?'
      },
      {
        id: 'u5-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence asking the caller to hold on while transferring:',
        promptVi: 'Sắp xếp câu xin khách giữ máy để chuyển cho người phụ trách:',
        englishSentence: 'Please hold on a moment while I transfer you.',
        audioText: 'Please hold on a moment while I transfer you.',
        phonetics: '/pliːz hoʊld ɒn ə ˈmoʊmənt waɪl aɪ trænsˈfɜːr juː/',
        wordPool: ['Please', 'hold', 'on', 'a', 'moment', 'while', 'I', 'transfer', 'you.', 'stop', 'wait'],
        explanation: '"Hold on a moment while I transfer you" = Xin vui lòng chờ máy trong giây lát trong khi tôi chuyển máy.',
        whyWrong: '"Hold on" là từ chuyên dùng khi nghe điện thoại.',
        crucialNote: 'Lịch sự hơn câu ra lệnh cộc lốc "Wait there".',
        memoryHook: 'Hold on a moment = Giữ máy chờ trong chốc lát.'
      },
      {
        id: 'u5-e3',
        type: 'speak',
        promptEn: 'Practice offering to take a message when your manager is in a meeting:',
        promptVi: 'Luyện nói câu đề nghị ghi lại lời nhắn khi sếp đang bận họp:',
        englishSentence: 'He is in a meeting. Would you like to leave a message?',
        audioText: 'He is in a meeting. Would you like to leave a message?',
        phonetics: '/hiː ɪz ɪn ə ˈmiːtɪŋ. wʊd juː laɪk tuː liːv ə ˈmɛsɪdʒ/',
        explanation: '"Would you like to leave a message?" = Anh/chị có muốn để lại lời nhắn không ạ?',
        whyWrong: 'Thể hiện sự chủ động phục vụ khi người nhận chưa thể nghe máy.',
        crucialNote: 'Chuẩn bị sẵn bút và giấy để ghi tên và số điện thoại của người gọi.',
        memoryHook: 'Leave a message = Để lại lời nhắn.'
      },
      {
        id: 'u5-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the caller stating their phone number and choose the correct digits:',
        promptVi: 'Lắng nghe người gọi đọc số điện thoại và chọn dãy số chính xác:',
        englishSentence: 'My mobile number is oh nine zero, three four five, six seven eight.',
        audioText: 'My mobile number is oh nine zero, three four five, six seven eight.',
        options: [
          '090.345.678',
          '098.456.789',
          '091.234.567'
        ],
        correctIndex: 0,
        explanation: 'Số 0 đọc là "Oh", cụm số: 090 - 345 - 678.',
        whyWrong: 'Tập phản xạ nghe số điện thoại từng cụm 3 số.',
        crucialNote: 'Khi ghi số điện thoại xong, luôn đọc lại để người gọi xác nhận: "Let me repeat that back to you".',
        memoryHook: 'Oh = Số 0 khi đọc điện thoại.'
      },
      {
        id: 'u5-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the blank with the polite phone phrase:',
        promptVi: 'Điền từ thích hợp để tạo câu chuyển máy lịch sự:',
        englishSentence: 'Please hold on a moment while I [ _____ ] your call.',
        audioText: 'Please hold on a moment while I transfer your call.',
        options: ['transfer', 'cancel', 'forget'],
        correctIndex: 0,
        blankWord: 'transfer',
        explanation: '"Transfer your call" = Chuyển tiếp cuộc gọi của bạn đến người phụ trách.',
        whyWrong: '"Transfer" là động từ chuyên ngành viễn thông công sở.',
        crucialNote: 'Giúp khách an tâm rằng họ đang được kết nối đúng người.',
        memoryHook: 'Transfer call = Chuyển máy.'
      }
    ]
  },
  {
    id: 'unit-6',
    unitNumber: 6,
    title: 'Hẹn Giờ Ăn Trưa & Tán Gẫu Đồng Nghiệp',
    subtitle: 'Giao tiếp đời thường, hỏi han ngày làm việc và rủ nhau đi ăn trưa',
    level: 'A1',
    icon: '🍜',
    color: 'emerald',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u6-e1',
        type: 'choice',
        promptEn: 'How to casually invite a coworker to have lunch together:',
        promptVi: 'Cách rủ đồng nghiệp cùng đi ăn trưa tự nhiên và thân mật nhất:',
        englishSentence: 'Are you free for lunch today? Would you like to join us?',
        audioText: 'Are you free for lunch today? Would you like to join us?',
        options: [
          'Are you free for lunch today? Would you like to join us?',
          'You must eat food with me right now.',
          'Why are you eating alone like that?'
        ],
        correctIndex: 0,
        explanation: '"Are you free for lunch? Would you like to join us?" là lời rủ đi ăn trưa rất cởi mở và gắn kết tình đồng đội.',
        whyWrong: 'Xây dựng mối quan hệ tốt đẹp nơi làm việc bắt đầu từ những bữa ăn trưa.',
        crucialNote: 'Nếu họ bận, họ có thể trả lời: "Thanks for asking! I brought my lunch today, maybe next time!".',
        memoryHook: 'Join us for lunch = Đi ăn trưa cùng chúng tôi nhé.'
      },
      {
        id: 'u6-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence asking what time the team usually takes a lunch break:',
        promptVi: 'Sắp xếp câu hỏi team mình thường nghỉ trưa lúc mấy giờ:',
        englishSentence: 'What time do we usually take a lunch break?',
        audioText: 'What time do we usually take a lunch break?',
        phonetics: '/wɒt taɪm duː wiː ˈjuːʒuəli teɪk ə lʌntʃ breɪk/',
        wordPool: ['What', 'time', 'do', 'we', 'usually', 'take', 'a', 'lunch', 'break?', 'go', 'eat'],
        explanation: '"Take a lunch break" = Nghỉ trưa ăn cơm.',
        whyWrong: 'Câu hỏi quen thuộc cho nhân viên mới hòa nhập lịch sinh hoạt văn phòng.',
        crucialNote: 'Ở Vikoda, giờ nghỉ trưa thường bắt đầu từ 12:00 trưa đến 13:00.',
        memoryHook: 'Lunch break = Giờ nghỉ trưa.'
      },
      {
        id: 'u6-e3',
        type: 'speak',
        promptEn: 'Practice saying the food was delicious after lunch:',
        promptVi: 'Luyện nói câu khen bữa ăn trưa ngon miệng:',
        englishSentence: 'That was a delicious lunch. Thank you for inviting me!',
        audioText: 'That was a delicious lunch. Thank you for inviting me!',
        phonetics: '/ðæt wɒz ə dɪˈlɪʃəs lʌntʃ. θæŋk juː fɔːr ɪnˈvaɪtɪŋ miː/',
        explanation: '"Delicious lunch" = Bữa trưa ngon tuyệt. "Thank you for inviting me" = Cảm ơn vì đã rủ tôi đi ăn cùng.',
        whyWrong: 'Lời cảm ơn chân thành sau bữa ăn tạo ấn tượng đẹp và sự quý mến.',
        crucialNote: 'Phát âm chữ "Delicious" (/dɪˈlɪʃəs/).',
        memoryHook: 'Delicious lunch = Bữa trưa ngon lành.'
      },
      {
        id: 'u6-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the audio and select what time the team will meet for coffee:',
        promptVi: 'Nghe đoạn hội thoại và chọn thời gian hẹn uống cà phê chiều:',
        englishSentence: 'Let us take a quick coffee break at three thirty PM.',
        audioText: 'Let us take a quick coffee break at three thirty PM.',
        options: [
          '3:30 chiều (Three thirty PM)',
          '1:00 trưa (One PM)',
          '5:00 chiều (Five PM)'
        ],
        correctIndex: 0,
        explanation: '"Three thirty PM" = 3 giờ 30 phút chiều.',
        whyWrong: 'Một cốc nước khoáng hoặc cà phê chiều giúp tỉnh táo tinh thần làm việc.',
        crucialNote: 'Nhớ uống một chai Vikoda 500ml để bù khoáng chất sau giờ làm.',
        memoryHook: 'Coffee break = Nghỉ giải lao uống cà phê.'
      },
      {
        id: 'u6-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the blank with the lunch invitation phrase:',
        promptVi: 'Điền từ thích hợp để hoàn thiện lời rủ đồng nghiệp cùng ăn trưa:',
        englishSentence: 'Are you free for lunch? Would you like to [ _____ ] us?',
        audioText: 'Are you free for lunch? Would you like to join us?',
        options: ['join', 'fight', 'leave'],
        correctIndex: 0,
        blankWord: 'join',
        explanation: '"Join us" = Đi cùng / tham gia cùng chúng tôi.',
        whyWrong: 'Cấu trúc "Would you like to join us?" là lời mời thân mật, ấm cúng nhất tại nơi làm việc.',
        crucialNote: 'Thường dùng khi rủ đồng nghiệp mới ăn trưa hoặc uống cà phê.',
        memoryHook: 'Join us = Tham gia cùng chúng tôi.'
      }
    ]
  },
  {
    id: 'unit-7',
    unitNumber: 7,
    title: 'Các Loại Chai Vikoda Quen Thuộc',
    subtitle: 'Nhận biết chai PET 350ml, 500ml, chai lớn 1.5L và bình 19L',
    level: 'A1',
    icon: '📦',
    color: 'cyan',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u7-e1',
        type: 'choice',
        promptEn: 'Which Vikoda size is most suitable for a quick personal workout or daily commute?',
        promptVi: 'Dung tích chai Vikoda nào tiện lợi nhất để bỏ túi mang đi làm hoặc tập thể dục hằng ngày?',
        englishSentence: 'The 500-milliliter bottle is very convenient to carry everywhere.',
        audioText: 'The five-hundred-milliliter bottle is very convenient to carry everywhere.',
        options: [
          'The 500-milliliter bottle is very convenient to carry everywhere.',
          'A heavy 19-liter gallon carried on your back.',
          'We do not have any portable bottles.'
        ],
        correctIndex: 0,
        explanation: '"500-milliliter bottle" = Chai 500ml nhỏ gọn, tiện lợi mang theo bên mình.',
        whyWrong: '500ml là dòng sản phẩm bán chạy hàng đầu cho người đi làm và thể thao.',
        crucialNote: 'Chai 350ml thường dùng cho phòng họp, còn 500ml dùng cho cá nhân di chuyển.',
        memoryHook: '500ml = Tiện lợi bỏ túi mang đi khắp nơi.'
      },
      {
        id: 'u7-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence introducing the 19-liter container for office use:',
        promptVi: 'Sắp xếp câu giới thiệu bình khoáng kiềm 19L chuyên dùng cho văn phòng:',
        englishSentence: 'Our 19-liter container is ideal for home and office.',
        audioText: 'Our nineteen-liter container is ideal for home and office.',
        phonetics: '/aʊər ˌnaɪnˈtiːn ˈliːtər kənˈteɪnər ɪz aɪˈdiːəl fɔːr hoʊm ænd ˈɒfɪs/',
        wordPool: ['Our', '19-liter', 'container', 'is', 'ideal', 'for', 'home', 'and', 'office.', 'small', 'bad'],
        explanation: '"19-liter container" = Bình 19 lít (gồm bình vòi và bình úp cây nước nóng lạnh).',
        whyWrong: 'Sản phẩm chủ lực chăm sóc sức khỏe cho hàng ngàn văn phòng công sở.',
        crucialNote: 'Dùng từ "container" hoặc "gallon" đều chuẩn xác.',
        memoryHook: '19-liter container = Bình 19 lít tiện dụng.'
      },
      {
        id: 'u7-e3',
        type: 'speak',
        promptEn: 'Practice introducing the luxury glass bottle line for VIP banquets:',
        promptVi: 'Luyện nói câu giới thiệu dòng chai thủy tinh cao cấp cho bàn tiệc VIP:',
        englishSentence: 'We also offer premium glass bottles for special banquets.',
        audioText: 'We also offer premium glass bottles for special banquets.',
        phonetics: '/wiː ˈɔːlsoʊ ˈɒfər ˈpriːmiəm ɡlæs ˈbɒtlz fɔːr ˈspɛʃl ˈbæŋkwɪts/',
        explanation: '"Premium glass bottles" = Chai thủy tinh thượng hạng sang trọng.',
        whyWrong: 'Chai thủy tinh tạo điểm nhấn đẳng cấp trên bàn tiệc hội nghị.',
        crucialNote: 'Phát âm chuẩn từ "Banquets" (/ˈbæŋkwɪts/ - yến tiệc sang trọng).',
        memoryHook: 'Glass bottles = Chai thủy tinh cao cấp.'
      },
      {
        id: 'u7-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the audio and select which package size is being discussed:',
        promptVi: 'Nghe audio và chọn dung tích chai đang được giới thiệu cho gia đình:',
        englishSentence: 'The 1.5-liter bottle is the perfect size for family dining tables.',
        audioText: 'The one point five liter bottle is the perfect size for family dining tables.',
        options: [
          'Chai lớn 1.5 Lít (One point five liter)',
          'Chai nhỏ 350ml',
          'Lon nhôm 330ml'
        ],
        correctIndex: 0,
        explanation: '"1.5-liter bottle" (One point five liter) = Chai lớn 1.5L cho bữa ăn gia đình.',
        whyWrong: '1.5 đọc là "one point five".',
        crucialNote: 'Chai lớn tiết kiệm và đủ nước khoáng mát lành cho cả nhà trong bữa tối.',
        memoryHook: '1.5 liter = Chai lớn 1.5 lít.'
      },
      {
        id: 'u7-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the blank with the appropriate packaging material:',
        promptVi: 'Điền chất liệu bao bì cao cấp được dùng cho các sự kiện trang trọng:',
        englishSentence: 'Our premium [ _____ ] bottles are favored by luxury hotels.',
        audioText: 'Our premium glass bottles are favored by luxury hotels.',
        options: ['glass', 'paper', 'wood'],
        correctIndex: 0,
        blankWord: 'glass',
        explanation: '"Glass bottles" = Chai thủy tinh tái sử dụng cao cấp, thân thiện với môi trường.',
        whyWrong: 'Chất liệu thủy tinh bảo quản trọn vẹn khoáng chất và độ kiềm của Vikoda.',
        crucialNote: 'Được các khách sạn 5 sao và resort cao cấp ưu tiên lựa chọn.',
        memoryHook: 'Glass bottle = Chai thủy tinh đẳng cấp.'
      }
    ]
  },
  {
    id: 'unit-8',
    unitNumber: 8,
    title: 'Tiễn Khách Chu Đáo & Hẹn Gặp Lại',
    subtitle: 'Lời chúc thượng lộ bình an, cảm ơn chuyến thăm và duy trì liên lạc',
    level: 'A1',
    icon: '🤝',
    color: 'emerald',
    xpReward: 40,
    gemReward: 15,
    exercises: [
      {
        id: 'u8-e1',
        type: 'speak',
        promptEn: 'Practice saying warm farewell wishes to an international guest:',
        promptVi: 'Luyện nói câu tiễn khách chúc chuyến đi an toàn và sớm gặp lại:',
        englishSentence: 'Have a safe flight and see you again soon!',
        audioText: 'Have a safe flight and see you again soon!',
        phonetics: '/hæv ə seɪf flaɪt ænd siː juː əˈɡɛn suːn/',
        explanation: '"Have a safe flight" = Chúc chuyến bay an toàn tốt đẹp.',
        whyWrong: 'Lời tiễn biệt ấm áp ghi điểm tối đa trong lòng đối tác trước khi họ ra sân bay.',
        crucialNote: 'Bắt tay ấm áp và mỉm cười chân thành.',
        memoryHook: 'Safe flight = Thượng lộ bình an.'
      },
      {
        id: 'u8-e2',
        type: 'choice',
        promptEn: 'Choose the most polite thank-you sentence after a successful company visit:',
        promptVi: 'Chọn câu cảm ơn lịch sự nhất sau chuyến thăm công ty thành công:',
        englishSentence: 'Thank you very much for taking the time to visit Vikoda today.',
        audioText: 'Thank you very much for taking the time to visit Vikoda today.',
        options: [
          'Thank you very much for taking the time to visit Vikoda today.',
          'You can go now, we are closing.',
          'Do not forget to pay for the water you drank.'
        ],
        correctIndex: 0,
        explanation: '"Thank you for taking the time to visit..." = Cảm ơn anh/chị đã dành thời gian quý báu đến thăm Vikoda hôm nay.',
        whyWrong: 'Thể hiện sự tôn trọng thời gian của khách hàng theo văn hóa FIT & Vikoda.',
        crucialNote: 'Có thể gửi tặng khách một hộp quà chai thủy tinh lưu niệm.',
        memoryHook: 'Thank you for taking the time = Cảm ơn vì đã dành thời gian.'
      },
      {
        id: 'u8-e3',
        type: 'word_order',
        promptEn: 'Arrange the sentence to express hopes for staying in close touch:',
        promptVi: 'Sắp xếp câu bày tỏ mong muốn giữ liên lạc thường xuyên:',
        englishSentence: 'Let us stay in touch via email.',
        audioText: 'Let us stay in touch via email.',
        phonetics: '/lɛt ʌs steɪ ɪn tʌtʃ ˈvaɪə ˈiːmeɪl/',
        wordPool: ['Let', 'us', 'stay', 'in', 'touch', 'via', 'email.', 'forget', 'stop'],
        explanation: '"Stay in touch" = Giữ liên lạc thường xuyên.',
        whyWrong: 'Sau cuộc gặp, gửi email follow-up trong 24 giờ để gắn kết mối quan hệ.',
        crucialNote: '"Via email" = Qua hòm thư điện tử.',
        memoryHook: 'Stay in touch = Giữ liên lạc nhé.'
      },
      {
        id: 'u8-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the guest responding to your farewell and select what they say:',
        promptVi: 'Lắng nghe đối tác hồi đáp lại lời tiễn của bạn và chọn ý đúng:',
        englishSentence: 'Thank you for your warm hospitality. I look forward to working with you.',
        audioText: 'Thank you for your warm hospitality. I look forward to working with you.',
        options: [
          'Cảm ơn sự tiếp đón nồng hậu, tôi rất mong đợi được hợp tác cùng bạn',
          'Tôi sẽ không bao giờ quay lại đây nữa',
          'Chuyến thăm này thật nhàm chán'
        ],
        correctIndex: 0,
        explanation: '"Warm hospitality" = Sự hiếu khách nồng hậu. "Look forward to working with you" = Rất mong được hợp tác cùng bạn.',
        whyWrong: 'Dấu hiệu của một mối quan hệ kinh doanh tốt đẹp bắt đầu từ sự tiếp đón chu đáo của bạn.',
        crucialNote: 'Chúc mừng bạn đã hoàn thành trọn vẹn Cấp độ 1: Giao Tiếp Văn Phòng Cơ Bản!',
        memoryHook: 'Warm hospitality = Sự hiếu khách nồng ấm.'
      },
      {
        id: 'u8-e5',
        type: 'fill_blank',
        promptEn: 'Fill in the blank with the warm farewell phrase:',
        promptVi: 'Điền cụm từ chúc chuyến đi thuận lợi khi chia tay khách:',
        englishSentence: 'Have a [ _____ ] flight and we hope to see you again soon.',
        audioText: 'Have a safe flight and we hope to see you again soon.',
        options: ['safe', 'dangerous', 'cancelled'],
        correctIndex: 0,
        blankWord: 'safe',
        explanation: '"Have a safe flight" = Chúc chuyến bay an toàn, thuận buồm xuôi gió.',
        whyWrong: 'Câu chúc ngoại giao kinh điển trước khi tiễn đối tác ra sân bay.',
        crucialNote: 'Kèm theo nụ cười ấm áp và cái bắt tay tin cậy.',
        memoryHook: 'Safe flight = Chuyến bay an toàn.'
      }
    ]
  }
];
