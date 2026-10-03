import { LessonExercise } from '../curriculumData';

/**
 * GLOBAL CURRICULUM EXPANSION: 120+ ELITE BUSINESS EXERCISES
 * Mở rộng câu hỏi chuẩn quốc tế (CEFR / TOEIC / IELTS) cho toàn bộ 38 bài học.
 * KHÔNG thay đổi hay xóa bài cũ - Bổ sung liên tục để học viên luyện tập không giới hạn.
 */

export const EXPANDED_LESSON_EXERCISES: Record<string, LessonExercise[]> = {
  // UNIT 1: Chào Hỏi & Làm Quen Đồng Nghiệp
  'unit-1': [
    {
      id: 'exp-u1-1',
      type: 'speak',
      promptEn: 'Practice saying where you work and welcoming a foreign guest:',
      promptVi: 'Luyện nói câu chào mừng đối tác nước ngoài đến thăm công ty Vikoda:',
      englishSentence: 'Welcome to Vikoda! It is an absolute pleasure to meet you in person.',
      audioText: 'Welcome to Vikoda! It is an absolute pleasure to meet you in person.',
      phonetics: '/ˈwɛlkəm tuː vɪˈkoʊdə! ɪt ɪz ən ˈæbsəluːt ˈplɛʒər tuː miːt juː ɪn ˈpɜːrsn/',
      explanation: '"In person" nghĩa là gặp mặt trực tiếp ngoài đời (sau thời gian trao đổi qua email/Zoom).',
      whyWrong: 'Bật rõ âm đuôi /t/ trong "absolute" và /z/ trong "is".',
      crucialNote: 'Kèm theo nụ cười tươi và hai tay tiếp đón khi nói câu này.',
      memoryHook: 'Absolute pleasure = Vô cùng vinh hạnh.'
    },
    {
      id: 'exp-u1-2',
      type: 'listen_choice',
      promptEn: 'Listen to the guest asking about your position and choose the best reply:',
      promptVi: 'Nghe đối tác hỏi vị trí làm việc và chọn câu trả lời tự nhiên nhất:',
      englishSentence: 'Could you tell me which department you are in charge of?',
      audioText: 'Could you tell me which department you are in charge of?',
      options: [
        'I am in charge of International Sales and Export at Vikoda.',
        'I am not working here, goodbye.',
        'Why do you want to know my department?'
      ],
      correctIndex: 0,
      explanation: '"In charge of [Department]" là cấu trúc kinh điển nói về trách nhiệm công việc.',
      whyWrong: 'Không trả lời thô lỗ hoặc lảng tránh khi đối tác hỏi lịch sự.',
      crucialNote: 'Nói rõ ràng tên phòng ban giúp đối tác định vị đúng đầu mối làm việc.',
      memoryHook: 'In charge of = Chịu trách nhiệm / Phụ trách.'
    },
    {
      id: 'exp-u1-3',
      type: 'fill_blank',
      promptEn: 'Fill in the blank with the appropriate corporate greeting word:',
      promptVi: 'Điền từ thích hợp: "Thay mặt công ty Vikoda, chào mừng bạn":',
      englishSentence: 'On [ _____ ] of Vikoda, I would like to warmly welcome our distinguished guests.',
      audioText: 'On behalf of Vikoda, I would like to warmly welcome our distinguished guests.',
      options: ['behalf', 'front', 'side', 'hand'],
      correctIndex: 0,
      blankWord: 'behalf',
      explanation: 'Cụm từ "On behalf of [Company]" mang sắc thái trang trọng, lịch thiệp.',
      whyWrong: 'Không dùng "on front of" hay "on side of".',
      crucialNote: 'Dùng khi đón đoàn đối tác quan trọng hoặc phát biểu đầu buổi họp.',
      memoryHook: 'On behalf of = Thay mặt cho toàn thể.'
    }
  ],

  // UNIT 2: Giới Thiệu Bản Thân & Phòng Ban
  'unit-2': [
    {
      id: 'exp-u2-1',
      type: 'word_order',
      promptEn: 'Arrange the sentence to introduce your professional role in the export team:',
      promptVi: 'Sắp xếp câu: "Tôi chịu trách nhiệm mở rộng thị trường nước ngoài của Vikoda."',
      englishSentence: 'I am responsible for expanding Vikoda overseas export markets.',
      audioText: 'I am responsible for expanding Vikoda overseas export markets.',
      phonetics: '/aɪ æm rɪˈspɒnsəbl fɔːr ɪkˈspændɪŋ vɪˈkoʊdə ˌoʊvərˈsiːz ˈɛkspɔːrt ˈmɑːrkɪts/',
      wordPool: ['I', 'am', 'responsible', 'for', 'expanding', 'Vikoda', 'overseas', 'export', 'markets.', 'to', 'at'],
      explanation: '"Responsible for + V-ing" thể hiện năng lực chuyên môn và trách nhiệm được giao.',
      whyWrong: 'Overseas export markets = Các thị trường xuất khẩu nước ngoài.',
      crucialNote: 'Nhấn vào từ "overseas" và "export" để thể hiện tầm nhìn toàn cầu.',
      memoryHook: 'Responsible for = Có trách nhiệm với.'
    },
    {
      id: 'exp-u2-2',
      type: 'speak',
      promptEn: 'Practice stating the core mission of Vikoda Beverage Corporation:',
      promptVi: 'Luyện nói câu sứ mệnh cốt lõi của công ty Vikoda:',
      englishSentence: 'Our mission is to bring pristine natural mineral water to global consumers.',
      audioText: 'Our mission is to bring pristine natural mineral water to global consumers.',
      phonetics: '/ˈaʊər ˈmɪʃn ɪz tuː brɪŋ ˈprɪstiːn ˈnætʃrəl ˈmɪnərəl ˈwɔːtər tuː ˈɡloʊbl kənˈsuːmərz/',
      explanation: '"Pristine" nghĩa là nguyên bản, tinh khôi, chưa từng bị ô nhiễm bởi con người.',
      whyWrong: 'Bật rõ âm đuôi /z/ trong "consumers" và /n/ trong "mission".',
      crucialNote: 'Từ "pristine" tạo ấn tượng cực mạnh với các khách hàng cao cấp.',
      memoryHook: 'Pristine = Tinh khiết nguyên bản.'
    },
    {
      id: 'exp-u2-3',
      type: 'choice',
      promptEn: 'How should you introduce your colleague who specializes in Food Safety & Quality Assurance?',
      promptVi: 'Cách giới thiệu đồng nghiệp phụ trách kiểm định an toàn thực phẩm QA chuẩn nhất:',
      englishSentence: 'This is Ms. Lan, our Quality Assurance Specialist who ensures international ISO standards.',
      audioText: 'This is Ms. Lan, our Quality Assurance Specialist who ensures international ISO standards.',
      options: [
        'This is Ms. Lan, our Quality Assurance Specialist who ensures international ISO standards.',
        'Here is Lan, she just tests water with bottles.',
        'Lan is someone from factory with tests.'
      ],
      correctIndex: 0,
      explanation: 'Nêu rõ chức danh "Quality Assurance Specialist" và tiêu chuẩn quốc tế ISO.',
      whyWrong: 'Không giới thiệu đồng nghiệp bằng từ ngữ xuề xòa, thiếu tôn trọng chuyên môn.',
      crucialNote: 'Khách hàng quốc tế rất quan tâm đến bộ phận Đảm bảo Chất lượng (QA/QC).',
      memoryHook: 'QA Specialist = Chuyên viên bảo đảm chất lượng.'
    }
  ],

  // UNIT 3: Nghe Điện Thoại & Tiếp Nhận Cuộc Gọi
  'unit-3': [
    {
      id: 'exp-u3-1',
      type: 'speak',
      promptEn: 'Answer the corporate telephone hotline with high professionalism:',
      promptVi: 'Luyện nói câu nhấc máy hotline công ty Vikoda chuyên nghiệp:',
      englishSentence: 'Vikoda Mineral Water, Minh speaking. How may I assist you today?',
      audioText: 'Vikoda Mineral Water, Minh speaking. How may I assist you today?',
      phonetics: '/vɪˈkoʊdə ˈmɪnərəl ˈwɔːtər, mɪn ˈspiːkɪŋ. haʊ meɪ aɪ əˈsɪst juː təˈdeɪ/',
      explanation: 'Công thức vàng: [Tên Công Ty] + [Tên Bạn] speaking + How may I assist you?',
      whyWrong: 'Không bao giờ nhấc máy nói cộc lốc: "Hello? Who is that?".',
      crucialNote: 'Âm điệu niềm nở, tươi vui, phát âm tròn vành rõ chữ "assist you".',
      memoryHook: 'How may I assist you = Tôi có thể giúp gì cho quý khách?'
    },
    {
      id: 'exp-u3-2',
      type: 'fill_blank',
      promptEn: 'Complete the sentence when putting a caller on brief hold:',
      promptVi: 'Điền từ thích hợp khi xin phép khách giữ máy chờ nối tuyến:',
      englishSentence: 'Could you please [ _____ ] the line for one moment while I transfer your call?',
      audioText: 'Could you please hold the line for one moment while I transfer your call?',
      options: ['hold', 'take', 'push', 'stop'],
      correctIndex: 0,
      blankWord: 'hold',
      explanation: '"Hold the line" là cụm từ chuẩn mực xin khách giữ máy điện thoại.',
      whyWrong: 'Không dùng "stop the line" hay "push the line".',
      crucialNote: 'Sau khi khách chờ, khi nhấc máy lại luôn cảm ơn: "Thank you for holding!".',
      memoryHook: 'Hold the line = Xin vui lòng giữ máy.'
    },
    {
      id: 'exp-u3-3',
      type: 'listen_choice',
      promptEn: 'Listen to the caller asking for the Export Director and choose the right reply:',
      promptVi: 'Khách gọi gặp Giám đốc Xuất khẩu đang họp, bạn xử lý thế nào:',
      englishSentence: 'I would like to speak directly with your Export Sales Director, please.',
      audioText: 'I would like to speak directly with your Export Sales Director, please.',
      options: [
        'He is currently in a board meeting. May I take your message or contact details?',
        'He is busy, call back next week.',
        'I cannot help you, he is sleeping.'
      ],
      correctIndex: 0,
      explanation: 'Báo bận khéo léo ("in a board meeting") và chủ động đề nghị ghi lại tin nhắn.',
      whyWrong: 'Không bao giờ cúp máy ngang hoặc từ chối khách hàng thô lỗ.',
      crucialNote: 'Ghi chép chính xác số điện thoại và email của người gọi.',
      memoryHook: 'Take a message = Ghi lại lời nhắn.'
    }
  ],

  // UNIT 4: Đón Khách & Trao Đổi Danh Thiếp
  'unit-4': [
    {
      id: 'exp-u4-1',
      type: 'word_order',
      promptEn: 'Arrange the sentence to present your business card with both hands respectfully:',
      promptVi: 'Sắp xếp câu trao danh thiếp: "Tôi xin gửi bạn danh thiếp của tôi kèm thông tin liên hệ trực tiếp."',
      englishSentence: 'Here is my business card with my direct contact details.',
      audioText: 'Here is my business card with my direct contact details.',
      phonetics: '/hɪər ɪz maɪ ˈbɪznəs kɑːrd wɪð maɪ dəˈrɛkt ˈkɒntækt ˈdiːteɪlz/',
      wordPool: ['Here', 'is', 'my', 'business', 'card', 'with', 'my', 'direct', 'contact', 'details.', 'for', 'in'],
      explanation: 'Trao danh thiếp bằng hai tay, hướng chữ về phía đối tác.',
      whyWrong: 'Direct contact details = Số điện thoại và email làm việc trực tiếp.',
      crucialNote: 'Nhìn vào mắt đối tác và đọc tên họ khi trao đổi danh thiếp.',
      memoryHook: 'Business card = Danh thiếp công ty.'
    },
    {
      id: 'exp-u4-2',
      type: 'speak',
      promptEn: 'Practice inviting the guest to the conference room for refreshment:',
      promptVi: 'Luyện nói câu mời khách vào phòng họp dùng nước khoáng mát:',
      englishSentence: 'Please have a seat in our VIP boardroom and enjoy cold Vikoda mineral water.',
      audioText: 'Please have a seat in our VIP boardroom and enjoy cold Vikoda mineral water.',
      phonetics: '/pliːz hæv ə siːt ɪn ˈaʊər viː aɪ piː ˈbɔːrdruːm ænd ɪnˈdʒɔɪ koʊld vɪˈkoʊdə ˈmɪnərəl ˈwɔːtər/',
      explanation: 'Tạo cảm giác hiếu khách cao cấp với "VIP boardroom" và nước khoáng Vikoda mát lạnh.',
      whyWrong: 'Bật rõ âm /t/ trong "seat" (/siːt/) và /dʒ/ trong "enjoy".',
      crucialNote: 'Luôn chuẩn bị sẵn chai nước khoáng thủy tinh sang trọng trên bàn họp.',
      memoryHook: 'Have a seat = Kính mời quý khách ngồi.'
    },
    {
      id: 'exp-u4-3',
      type: 'choice',
      promptEn: 'When receiving a business card from a Japanese partner, what is the diplomatic protocol?',
      promptVi: 'Khi nhận danh thiếp từ đối tác Nhật Bản, quy tắc ngoại giao chuẩn xác là gì?',
      englishSentence: 'Receive with both hands, read it carefully, and place it neatly on the table in front of you.',
      audioText: 'Receive with both hands, read it carefully, and place it neatly on the table in front of you.',
      options: [
        'Receive with both hands, read it carefully, and place it neatly on the table in front of you.',
        'Put it immediately into your back pocket without reading.',
        'Write your phone number directly on their card with a pen.'
      ],
      correctIndex: 0,
      explanation: 'Văn hóa Nhật coi danh thiếp như danh dự của con người, tuyệt đối không viết đè hay cất túi quần.',
      whyWrong: 'Nhét danh thiếp vào túi quần sau là điều tối kỵ trong văn hóa kinh doanh Châu Á.',
      crucialNote: 'Để danh thiếp ngay ngắn trên bàn họp trong suốt thời gian đàm phán.',
      memoryHook: 'Two hands protocol = Nghi thức 2 tay tôn trọng.'
    }
  ],

  // UNIT 11: Lịch Sử Mỏ Đảnh Thạnh 1957
  'unit-11': [
    {
      id: 'exp-u11-1',
      type: 'speak',
      promptEn: 'Pitch the unique geographical heritage of Danh Thanh source in Khanh Hoa:',
      promptVi: 'Luyện nói câu giới thiệu di sản địa chất mỏ khoáng Đảnh Thạnh tại Khánh Hòa:',
      englishSentence: 'Danh Thanh mineral spring was officially discovered and medically certified in 1957.',
      audioText: 'Danh Thanh mineral spring was officially discovered and medically certified in 1957.',
      phonetics: '/dɑːɲ tʰaɲ ˈmɪnərəl sprɪŋ wɒz əˈfɪʃəli dɪˈskʌvərd ænd ˈmɛdɪkli ˈsɜːrtɪfaɪd ɪn ˈnaɪnˈtiːn ˈfɪfti sɛvn/',
      explanation: 'Nêu bật bề dày lịch sử được kiểm chứng y khoa từ năm 1957 bởi các chuyên gia Pháp.',
      whyWrong: 'Phát âm năm "1957" là "nineteen fifty-seven".',
      crucialNote: 'Lịch sử lâu đời là chứng cứ đắt giá đánh bại các sản phẩm nước kiềm nhân tạo mới ra đời.',
      memoryHook: 'Medically certified = Được chứng nhận y khoa.'
    },
    {
      id: 'exp-u11-2',
      type: 'choice',
      promptEn: 'What ancient Vietnamese historical document recorded the Danh Thanh sacred spring?',
      promptVi: 'Tài liệu cổ nào của triều đình nhà Nguyễn ghi chép về nguồn khoáng Đảnh Thạnh?',
      englishSentence: 'The spring was recorded in Dai Nam Nhat Thong Chi under the foot of Hon Chuong mountain.',
      audioText: 'The spring was recorded in Dai Nam Nhat Thong Chi under the foot of Hon Chuong mountain.',
      options: [
        'The spring was recorded in Dai Nam Nhat Thong Chi under the foot of Hon Chuong mountain.',
        'It was never written down anywhere.',
        'It was imported from an American newspaper in 2020.'
      ],
      correctIndex: 0,
      explanation: 'Đại Nam Nhất Thống Chí (1901) ghi chép mạch khoáng quý dưới chân núi Hòn Chuông.',
      whyWrong: 'Dẫn chứng lịch sử phong kiến làm tăng thêm giá trị văn hóa tinh hoa của Vikoda.',
      crucialNote: 'Kể câu chuyện này khiến các đối tác quốc tế cực kỳ thích thú và nhớ lâu.',
      memoryHook: 'Under the foot of Hon Chuong = Dưới chân núi Hòn Chuông.'
    },
    {
      id: 'exp-u11-3',
      type: 'fill_blank',
      promptEn: 'Fill in the scientific word about natural geothermal temperature:',
      promptVi: 'Điền từ khoa học: "Nước phun trào từ lòng đất ở nhiệt độ 72 độ C":',
      englishSentence: 'The water naturally emerges at the spring head with a geothermal temperature of [ _____ ] degrees Celsius.',
      audioText: 'The water naturally emerges at the spring head with a geothermal temperature of 72 degrees Celsius.',
      options: ['72', '100', '25', '0'],
      correctIndex: 0,
      blankWord: '72',
      explanation: 'Mỏ khoáng Đảnh Thạnh có nhiệt độ xuất lộ tự nhiên 72°C vô trùng tuyệt đối.',
      whyWrong: '72°C là nhiệt độ địa nhiệt tự nhiên, không qua đun nấu.',
      crucialNote: 'Nhiệt độ 72°C là bằng chứng sống của hoạt động địa nhiệt sâu trong lòng vỏ trái đất.',
      memoryHook: '72 degrees Celsius = 72 độ C vô trùng tự nhiên.'
    }
  ],

  // UNIT 14: Khoa Học Độ Kiềm Tự Nhiên pH 9.0
  'unit-14': [
    {
      id: 'exp-u14-1',
      type: 'speak',
      promptEn: 'Explain why natural alkaline mineral water is superior to artificially ionized water:',
      promptVi: 'Luyện nói câu phân biệt khoáng kiềm tự nhiên vượt trội hơn nước ion kiềm nhân tạo:',
      englishSentence: 'Unlike artificial alkaline water made by machines, Vikoda achieves pH 9.0 naturally through deep rock filtration.',
      audioText: 'Unlike artificial alkaline water made by machines, Vikoda achieves pH 9.0 naturally through deep rock filtration.',
      phonetics: '/ʌnˈlaɪk ˌɑːrtɪˈfɪʃl ˈælkəlaɪn ˈwɔːtər meɪd baɪ məˈʃiːnz, vɪˈkoʊdə əˈtʃiːvz piː eɪtʃ naɪn ˈnætʃrəli θruː diːp rɒk fɪlˈtreɪʃn/',
      explanation: 'Điểm bán hàng độc nhất (USP): Thấm lọc qua tầng địa chất nguyên sinh thay vì điện phân nhân tạo.',
      whyWrong: 'Nhấn mạnh từ "naturally" và "deep rock filtration".',
      crucialNote: 'Nước ion kiềm nhân tạo qua máy điện giải sẽ mất kiềm sau vài ngày, trong khi Vikoda giữ vững pH 9.0 ổn định.',
      memoryHook: 'Deep rock filtration = Lọc qua tầng đá sâu tự nhiên.'
    },
    {
      id: 'exp-u14-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence on how natural alkaline water neutralizes excess stomach acid:',
      promptVi: 'Sắp xếp câu: "Độ kiềm pH 9.0 tự nhiên giúp trung hòa lượng axit dư thừa trong dạ dày."',
      englishSentence: 'Natural pH 9.0 alkalinity helps neutralize excess stomach acid and promotes healthy digestion.',
      audioText: 'Natural pH 9.0 alkalinity helps neutralize excess stomach acid and promotes healthy digestion.',
      phonetics: '/ˈnætʃrəl piː eɪtʃ naɪn ˈælkəlɪnəti hɛlps ˈnjuːtrəlaɪz ˈɛksɛs ˈstʌmək ˈæsɪd ænd prəˈmoʊts ˈhɛlθi daɪˈdʒɛstʃən/',
      wordPool: ['Natural', 'pH', '9.0', 'alkalinity', 'helps', 'neutralize', 'excess', 'stomach', 'acid', 'and', 'promotes', 'healthy', 'digestion.', 'makes', 'for'],
      explanation: 'Lợi ích sức khỏe được kiểm chứng: Trung hòa axit dịch vị, ngừa trào ngược dạ dày.',
      whyWrong: 'Neutralize excess stomach acid = Trung hòa axit dư thừa dạ dày.',
      crucialNote: 'Đối tác F&B rất quan tâm đến công dụng hỗ trợ tiêu hóa khi kết hợp với đồ ăn.',
      memoryHook: 'Neutralize acid = Trung hòa axit.'
    },
    {
      id: 'exp-u14-3',
      type: 'choice',
      promptEn: 'Which essential soluble trace minerals are naturally present in Vikoda mineral water?',
      promptVi: 'Những khoáng chất vi lượng hòa tan thiết yếu nào có sẵn tự nhiên trong nước Vikoda?',
      englishSentence: 'It contains balanced trace minerals including Calcium, Magnesium, Sodium, Potassium, and Metasilicic acid.',
      audioText: 'It contains balanced trace minerals including Calcium, Magnesium, Sodium, Potassium, and Metasilicic acid.',
      options: [
        'It contains balanced trace minerals including Calcium, Magnesium, Sodium, Potassium, and Metasilicic acid.',
        'It contains only sugar, chemical colors, and artificial gas.',
        'It has zero minerals because it is purified tap water.'
      ],
      correctIndex: 0,
      explanation: 'Metasilicic acid (H2SiO3) là vi chất vàng chống lão hóa và làm đẹp da nổi tiếng tại các suối khoáng Pháp/Nhật.',
      whyWrong: 'Vikoda là nước khoáng thiên nhiên 100%, không chứa đường hay phẩm màu hóa học.',
      crucialNote: 'Đặc biệt nhấn mạnh thành phần Metasilicic acid quý hiếm.',
      memoryHook: 'Metasilicic acid = Khoáng chất vàng làm đẹp da và mạch máu.'
    }
  ],

  // UNIT 25: Tiếp Cận F&B Director & Khách Sạn 5 Sao
  'unit-25': [
    {
      id: 'exp-u25-1',
      type: 'speak',
      promptEn: 'Pitch the luxury Vikoda Glass Bottle line to a 5-star Hotel F&B Director:',
      promptVi: 'Luyện nói câu chào hàng chai thủy tinh Vikoda cao cấp cho Giám đốc Ẩm thực khách sạn 5 sao:',
      englishSentence: 'Our premium glass bottle line is tailor-made for luxury resorts committed to zero-plastic sustainability.',
      audioText: 'Our premium glass bottle line is tailor-made for luxury resorts committed to zero-plastic sustainability.',
      phonetics: '/ˈaʊər ˈpriːmiəm ɡlæs ˈbɒtl laɪn ɪz ˈteɪlər meɪd fɔːr ˈlʌkʃəri rɪˈzɔːrts kəˈmɪtɪd tuː ˈzɪəroʊ ˈplæstɪk səˌsteɪnəˈbɪləti/',
      explanation: '"Tailor-made" nghĩa là được may đo/thiết kế riêng biệt cho phân khúc cao cấp.',
      whyWrong: 'Zero-plastic sustainability = Phát triển bền vững không rác thải nhựa.',
      crucialNote: 'Các tập đoàn khách sạn quốc tế (Marriott, Accor, IHG) đều có cam kết loại bỏ chai nhựa.',
      memoryHook: 'Tailor-made = Thiết kế riêng đẳng cấp.'
    },
    {
      id: 'exp-u25-2',
      type: 'listen_choice',
      promptEn: 'Listen to the F&B Director asking about tasting samples and choose the professional response:',
      promptVi: 'Nghe Giám đốc Ẩm thực đề nghị thử nếm mẫu nước và chọn câu trả lời chuyên nghiệp:',
      englishSentence: 'Can you deliver a tasting kit with chilled glass bottles for our sommelier team tomorrow?',
      audioText: 'Can you deliver a tasting kit with chilled glass bottles for our sommelier team tomorrow?',
      options: [
        'Certainly! I will personally hand-deliver a chilled tasting kit with pairing guides by 9 AM tomorrow.',
        'No, buy it at the supermarket yourself.',
        'We don’t give samples to anyone.'
      ],
      correctIndex: 0,
      explanation: 'Hành động "personally hand-deliver" (đích thân trao tận tay) thể hiện sự tận tụy tối đa.',
      whyWrong: 'Khách sạn 5 sao đánh giá nhà cung cấp qua sự chu đáo và tốc độ phục vụ.',
      crucialNote: 'Kèm theo tài liệu hướng dẫn kết hợp nước với ẩm thực cao cấp (pairing guide).',
      memoryHook: 'Hand-deliver = Tự tay mang tới tận nơi.'
    },
    {
      id: 'exp-u25-3',
      type: 'fill_blank',
      promptEn: 'Fill in the blank with the hospitality term for luxury dining venues:',
      promptVi: 'Điền từ viết tắt ngành khách sạn - nhà hàng - ẩm thực quốc tế:',
      englishSentence: 'Vikoda is expanding rapidly across premium [ _____ ] channels including Michelin restaurants.',
      audioText: 'Vikoda is expanding rapidly across premium HORECA channels including Michelin restaurants.',
      options: ['HORECA', 'RETAIL', 'ONLINE', 'FACTORY'],
      correctIndex: 0,
      blankWord: 'HORECA',
      explanation: 'HORECA là viết tắt của Hotel - Restaurant - Catering/Cafe.',
      whyWrong: 'Đây là thuật ngữ bắt buộc phải biết của mọi nhân viên kinh doanh quốc tế.',
      crucialNote: 'Hiện diện trong kênh HORECA giúp nâng tầm định vị thương hiệu Vikoda.',
      memoryHook: 'HORECA = Khách sạn, Nhà hàng, Ẩm thực.'
    }
  ],

  // UNIT 27: Xử Lý Phản Đối Về Giá
  'unit-27': [
    {
      id: 'exp-u27-1',
      type: 'speak',
      promptEn: 'Respond diplomatically when a buyer argues that purified water is cheaper than Vikoda:',
      promptVi: 'Luyện nói câu hóa giải khi người mua so sánh giá Vikoda đắt hơn nước lọc RO thường:',
      englishSentence: 'While purified water is simply filtered tap water, Vikoda is a natural mineral spring bottled directly at the source.',
      audioText: 'While purified water is simply filtered tap water, Vikoda is a natural mineral spring bottled directly at the source.',
      phonetics: '/waɪl ˈpjʊərɪfaɪd ˈwɔːtər ɪz ˈsɪmpli ˈfɪltərd tæp ˈwɔːtər, vɪˈkoʊdə ɪz ə ˈnætʃrəl ˈmɪnərəl sprɪŋ ˈbɒtld dəˈrɛktli æt ðə sɔːrs/',
      explanation: 'Tách bạch giá trị: Nước lọc RO là nước máy lọc qua màng nhân tạo, còn Vikoda là mỏ khoáng thiên nhiên vô giá.',
      whyWrong: 'Không tranh cãi gay gắt, hãy dùng từ "While..." (Trong khi...) để đối chiếu văn minh.',
      crucialNote: 'Bottled directly at the source = Đóng chai trực tiếp tại nguồn mỏ.',
      memoryHook: 'Bottled at source = Đóng chai tại nguồn, giữ trọn khoáng chất.'
    },
    {
      id: 'exp-u27-2',
      type: 'choice',
      promptEn: 'When a distributor asks for an impossible 50% discount, what is the best concession tactic?',
      promptVi: 'Khi nhà phân phối đòi chiết khấu quá cao 50%, chiến thuật nhượng bộ có điều kiện là gì?',
      englishSentence: 'We can offer preferential volume rebates if your purchase order reaches at least five containers per month.',
      audioText: 'We can offer preferential volume rebates if your purchase order reaches at least five containers per month.',
      options: [
        'We can offer preferential volume rebates if your purchase order reaches at least five containers per month.',
        'Okay, take 50% discount right away without any conditions.',
        'We refuse to talk with you, goodbye.'
      ],
      correctIndex: 0,
      explanation: 'Quy tắc vàng đàm phán: Không bao giờ nhượng bộ mà không đòi hỏi cam kết tương xứng (Volume rebate kèm số lượng container).',
      whyWrong: 'Nhượng bộ dễ dãi làm giảm uy tín và phá vỡ cấu trúc giá toàn cầu.',
      crucialNote: 'Ràng buộc chiết khấu với số lượng đặt hàng tối thiểu (MOQ).',
      memoryHook: 'Volume rebate = Chiết khấu theo sản lượng lớn.'
    },
    {
      id: 'exp-u27-3',
      type: 'word_order',
      promptEn: 'Arrange the sentence to emphasize long-term health return over short-term price:',
      promptVi: 'Sắp xếp câu: "Khách hàng sẵn sàng trả thêm cho sức khỏe và chất lượng nguyên bản."',
      englishSentence: 'Health-conscious consumers are genuinely willing to pay a premium for natural mineral quality.',
      audioText: 'Health-conscious consumers are genuinely willing to pay a premium for natural mineral quality.',
      phonetics: '/hɛlθ ˈkɒnʃəs kənˈsuːmərz ɑːr ˈdʒɛnjuɪnli ˈwɪlɪŋ tuː peɪ ə ˈpriːmiəm fɔːr ˈnætʃrəl ˈmɪnərəl ˈkwɒləti/',
      wordPool: ['Health-conscious', 'consumers', 'are', 'genuinely', 'willing', 'to', 'pay', 'a', 'premium', 'for', 'natural', 'mineral', 'quality.', 'in', 'on'],
      explanation: '"Pay a premium" nghĩa là trả giá cao hơn để đổi lấy chất lượng và uy tín vượt trội.',
      whyWrong: 'Health-conscious consumers = Người tiêu dùng thông thái quan tâm sức khỏe.',
      crucialNote: 'Xu hướng tiêu dùng toàn cầu đang dịch chuyển mạnh mẽ sang các sản phẩm lành mạnh cho cơ thể.',
      memoryHook: 'Pay a premium = Trả giá xứng đáng cho chất lượng cao.'
    }
  ],

  // UNIT 33: Hợp Đồng Xuất Khẩu & Incoterms 2020: FOB vs CIF
  'unit-33': [
    {
      id: 'exp-u33-1',
      type: 'speak',
      promptEn: 'Present the FOB export quotation clearly to an overseas importer:',
      promptVi: 'Luyện nói câu báo giá xuất khẩu theo điều kiện FOB cảng Đà Nẵng:',
      englishSentence: 'Our quotation is two dollars and eighty cents per carton, FOB Da Nang Port, Incoterms 2020.',
      audioText: 'Our quotation is two dollars and eighty cents per carton, FOB Da Nang Port, Incoterms 2020.',
      phonetics: '/ˈaʊər kwoʊˈteɪʃn ɪz tuː ˈdɒlərz ænd ˈeɪti sɛnts pɜːr ˈkɑːrtn, ɛf oʊ biː dɑː næŋ pɔːrt, ˈɪnkoʊtɜːrmz ˈtwɛnti ˈtwɛnti/',
      explanation: 'Điều kiện FOB (Free On Board): Vikoda chịu trách nhiệm và chi phí đến khi hàng qua lan can tàu tại cảng Đà Nẵng.',
      whyWrong: 'Luôn nói rõ năm của quy tắc: "Incoterms 2020" để tránh tranh chấp pháp lý.',
      crucialNote: 'Khách hàng nước ngoài sẽ tự thuê tàu và mua bảo hiểm từ cảng Đà Nẵng về nước họ.',
      memoryHook: 'FOB Da Nang = Giao lên tàu tại cảng Đà Nẵng.'
    },
    {
      id: 'exp-u33-2',
      type: 'choice',
      promptEn: 'Under CIF terms (Cost, Insurance and Freight), who is legally responsible for maritime insurance?',
      promptVi: 'Theo điều kiện CIF Incoterms 2020, bên nào có nghĩa vụ mua bảo hiểm hàng hải cho lô hàng?',
      englishSentence: 'The seller (Vikoda) must obtain marine cargo insurance covering at least the CIF price plus 10 percent.',
      audioText: 'The seller (Vikoda) must obtain marine cargo insurance covering at least the CIF price plus 10 percent.',
      options: [
        'The seller (Vikoda) must obtain marine cargo insurance covering at least the CIF price plus 10 percent.',
        'The buyer must pay for all insurance and transport from the factory.',
        'Nobody needs insurance, shipping is completely safe.'
      ],
      correctIndex: 0,
      explanation: 'Quy tắc CIF quy định người bán (Vikoda) phải mua bảo hiểm tối thiểu 110% giá trị hợp đồng để bảo vệ người mua.',
      whyWrong: 'Không hiểu rõ Incoterms có thể dẫn đến thiệt hại hàng trăm triệu đồng khi container gặp rủi ro trên biển.',
      crucialNote: 'Bảo hiểm hàng hải phải do công ty bảo hiểm uy tín quốc tế phát hành.',
      memoryHook: 'CIF = Giá hàng + Bảo hiểm + Cước tàu biển.'
    },
    {
      id: 'exp-u33-3',
      type: 'fill_blank',
      promptEn: 'Fill in the shipping term for minimum container volume load:',
      promptVi: 'Điền từ viết tắt lô hàng đóng nguyên một container đường biển:',
      englishSentence: 'For optimal sea freight cost, we strongly recommend ordering in [ _____ ] container loads.',
      audioText: 'For optimal sea freight cost, we strongly recommend ordering in FCL container loads.',
      options: ['FCL', 'LCL', 'AIR', 'TRUCK'],
      correctIndex: 0,
      blankWord: 'FCL',
      explanation: 'FCL (Full Container Load) = Hàng nguyên container (tiết kiệm chi phí vận tải và hạn chế móp vỡ).',
      whyWrong: 'LCL (Less than Container Load) là hàng ghép lẻ, chi phí cao hơn và dễ va đập.',
      crucialNote: 'Một container 20ft chứa được khoảng 1,500 đến 1,800 thùng nước Vikoda.',
      memoryHook: 'FCL = Hàng nguyên container tiết kiệm chi phí.'
    }
  ],

  // UNIT 34: Thanh Toán Quốc Tế: Thư Tín Dụng Irrevocable L/C
  'unit-34': [
    {
      id: 'exp-u34-1',
      type: 'speak',
      promptEn: 'State the secure payment terms for a high-value export contract:',
      promptVi: 'Luyện nói điều khoản thanh toán bằng Thư tín dụng không hủy ngang (L/C) trả ngay:',
      englishSentence: 'Payment shall be made by an irrevocable Letter of Credit at sight confirmed by a top-tier international bank.',
      audioText: 'Payment shall be made by an irrevocable Letter of Credit at sight confirmed by a top-tier international bank.',
      phonetics: '/ˈpeɪmənt ʃæl biː meɪd baɪ ən ɪˈrɛvəkəbl ˈlɛtər əv ˈkrɛdɪt æt saɪt kənˈfɜːrmd baɪ ə tɒp tɪər ˌɪntərˈnæʃnəl bæŋk/',
      explanation: '"Irrevocable L/C at sight" là phương thức thanh toán an toàn hàng đầu trong thương mại quốc tế.',
      whyWrong: 'Phát âm chuẩn từ "irrevocable" (/ɪˈrɛvəkəbl/ - trọng âm rơi vào âm tiết thứ hai).',
      crucialNote: 'Ngân hàng quốc tế uy tín xác nhận (confirmed) giúp Vikoda chắc chắn thu được tiền sau khi giao hàng.',
      memoryHook: 'Irrevocable L/C at sight = Thư tín dụng không thể hủy ngang, thanh toán ngay khi xuất trình chứng từ.'
    },
    {
      id: 'exp-u34-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence on required shipping documents for bank negotiation:',
      promptVi: 'Sắp xếp câu: "Bộ chứng từ thanh toán bao gồm Vận đơn sạch, Hóa đơn thương mại và Chứng nhận xuất xứ."',
      englishSentence: 'The bank presentation requires Clean on Board Bill of Lading, Commercial Invoice, and Certificate of Origin.',
      audioText: 'The bank presentation requires Clean on Board Bill of Lading, Commercial Invoice, and Certificate of Origin.',
      phonetics: '/ðə bæŋk ˌprɛznˈteɪʃn rɪˈkwaɪərz kliːn ɒn bɔːrd bɪl əv ˈleɪdɪŋ, kəˈmɜːrʃl ˈɪnvɔɪs, ænd sərˈtɪfɪkət əv ˈɒrɪdʒɪn/',
      wordPool: ['The', 'bank', 'presentation', 'requires', 'Clean', 'on', 'Board', 'Bill', 'of', 'Lading,', 'Commercial', 'Invoice,', 'and', 'Certificate', 'of', 'Origin.', 'ticket'],
      explanation: 'Bộ ba chứng từ xuất khẩu quyền lực: B/L (Vận đơn đường biển), Invoice (Hóa đơn), C/O (Chứng nhận xuất xứ).',
      whyWrong: 'Clean on Board B/L xác nhận hàng hóa đã bốc lên tàu nguyên vẹn, không móp rách.',
      crucialNote: 'Chỉ cần một sai sót chính tả nhỏ trên chứng từ ngân hàng có thể từ chối thanh toán (Discrepancy).',
      memoryHook: 'B/L + Invoice + C/O = Bộ chứng từ xuất khẩu hoàn chỉnh.'
    },
    {
      id: 'exp-u34-3',
      type: 'choice',
      promptEn: 'What happens if there is a discrepancy between the shipping documents and the L/C terms?',
      promptVi: 'Điều gì xảy ra nếu có bất đồng (sai lệch) giữa chứng từ thực tế và điều khoản trong L/C?',
      englishSentence: 'The issuing bank may refuse payment until the applicant approves the discrepancy or documents are corrected.',
      audioText: 'The issuing bank may refuse payment until the applicant approves the discrepancy or documents are corrected.',
      options: [
        'The issuing bank may refuse payment until the applicant approves the discrepancy or documents are corrected.',
        'The bank pays double the money immediately without checking.',
        'Nobody cares about documents in banking.'
      ],
      correctIndex: 0,
      explanation: 'Quy tắc UCP 600 của Phòng Thương mại Quốc tế (ICC) kiểm tra chứng từ cực kỳ nghiêm ngặt trên mặt chữ.',
      whyWrong: 'Tuyệt đối rà soát kỹ từng ký tự trước khi nộp chứng từ cho ngân hàng.',
      crucialNote: 'Báo ngay cho bộ phận Logistics và ngân hàng đại lý nếu phát hiện sai lệch để tu chỉnh (amendment).',
      memoryHook: 'Discrepancy = Bất đồng / Sai lệch chứng từ.'
    }
  ]
};

// Merge all advanced exercises into EXPANDED_LESSON_EXERCISES
import { ADVANCED_PACK_EXERCISES } from './advancedCurriculumExpansion';

for (const [unitKey, bonusList] of Object.entries(ADVANCED_PACK_EXERCISES)) {
  if (!EXPANDED_LESSON_EXERCISES[unitKey]) {
    EXPANDED_LESSON_EXERCISES[unitKey] = [];
  }
  EXPANDED_LESSON_EXERCISES[unitKey].push(...bonusList);
}

