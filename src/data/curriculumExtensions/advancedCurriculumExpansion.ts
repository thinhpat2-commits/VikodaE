import { LessonExercise } from '../curriculumData';

/**
 * ADVANCED CURRICULUM EXPANSION PACK:
 * Bổ sung bài tập thực chiến cho các Unit còn lại (Toàn bộ 38 bài học).
 * Bao gồm các chủ đề: Vệ sinh sản xuất, Giếng ngầm 220m, Thủy tinh ESG, Incoterms, HORECA, Bán hàng 8 bước.
 */

export const ADVANCED_PACK_EXERCISES: Record<string, LessonExercise[]> = {
  // UNIT 5: Tán Gẫu Đồng Nghiệp & Giờ Ăn Trưa
  'unit-5': [
    {
      id: 'exp-u5-1',
      type: 'speak',
      promptEn: 'Invite a colleague to join you for healthy lunch:',
      promptVi: 'Luyện nói câu rủ đồng nghiệp cùng đi ăn trưa lành mạnh:',
      englishSentence: 'Are you free to grab some healthy lunch together at the cafeteria?',
      audioText: 'Are you free to grab some healthy lunch together at the cafeteria?',
      phonetics: '/ɑːr juː friː tuː ɡræb sʌm ˈhɛlθi lʌntʃ təˈɡɛðər æt ðə ˌkæfəˈtɪəriə/',
      explanation: '"Grab lunch" là cách rủ đi ăn trưa thân mật, tự nhiên hàng đầu trong văn phòng quốc tế.',
      whyWrong: 'Bật rõ âm đuôi /b/ trong "grab" và /tʃ/ trong "lunch".',
      crucialNote: 'Cách nói này giúp xây dựng mối quan hệ gần gũi với đồng nghiệp mới.',
      memoryHook: 'Grab lunch = Cùng đi ăn trưa nhanh.'
    },
    {
      id: 'exp-u5-2',
      type: 'choice',
      promptEn: 'How do you politely decline a lunch invite when you have a pending deadline?',
      promptVi: 'Cách từ chối khéo lời mời ăn trưa khi bạn đang gấp hoàn thành báo cáo:',
      englishSentence: 'I would love to, but I have an urgent report due at 1 PM. Rain check tomorrow?',
      audioText: 'I would love to, but I have an urgent report due at 1 PM. Rain check tomorrow?',
      options: [
        'I would love to, but I have an urgent report due at 1 PM. Rain check tomorrow?',
        'No, I hate eating with you.',
        'Go away, do not talk to me now.'
      ],
      correctIndex: 0,
      explanation: '"Rain check" là thành ngữ văn phòng kinh điển: "Hẹn khi khác nhé/Để dịp sau nhé!".',
      whyWrong: 'Từ chối thô lỗ sẽ làm tổn thương tình cảm đồng nghiệp.',
      crucialNote: 'Luôn kèm lời giải thích ngắn gọn và hẹn dịp sau.',
      memoryHook: 'Rain check = Hẹn dịp khác nhé.'
    },
    {
      id: 'exp-u5-3',
      type: 'fill_blank',
      promptEn: 'Fill in the blank with the appropriate conversational word:',
      promptVi: 'Điền từ: "Hôm nay công việc của bạn tiến triển thế nào?":',
      englishSentence: 'How are things [ _____ ] on your project today?',
      audioText: 'How are things going on your project today?',
      options: ['going', 'doing', 'making', 'taking'],
      correctIndex: 0,
      blankWord: 'going',
      explanation: '"How are things going" = Mọi việc diễn ra thế nào rồi?',
      whyWrong: 'Không dùng "how are things doing".',
      crucialNote: 'Câu mở đầu cuộc trò chuyện cực kỳ tự nhiên khi gặp nhau ở khu pantry.',
      memoryHook: 'How are things going = Mọi chuyện thế nào rồi?'
    }
  ],

  // UNIT 6: Nhà Máy & Quản Lý Chất Lượng (QC/QA)
  'unit-6': [
    {
      id: 'exp-u6-1',
      type: 'speak',
      promptEn: 'Explain the strict cleanroom hygiene standard at Vikoda factory:',
      promptVi: 'Luyện nói quy định phòng sạch vô trùng tại phân xưởng chiết rót Vikoda:',
      englishSentence: 'All personnel must wear sterile suits and pass through the air shower before entering the cleanroom.',
      audioText: 'All personnel must wear sterile suits and pass through the air shower before entering the cleanroom.',
      phonetics: '/ɔːl ˌpɜːrsəˈnɛl mʌst wɛər ˈstɛraɪl suːts ænd pæs θruː ðiː eər ˈʃaʊər bɪˈfɔːr ˈɛntərɪŋ ðə ˈkliːnruːm/',
      explanation: 'Air shower (buồng tắm khí) loại bỏ bụi mịn và vi khuẩn trước khi vào phòng vô trùng.',
      whyWrong: 'Personnel (/ˌpɜːrsəˈnɛl/) là danh từ chỉ toàn thể cán bộ nhân viên.',
      crucialNote: 'Nêu rõ tiêu chuẩn phòng sạch giúp đối tác Nhật/Mỹ tuyệt đối tin tưởng vào chất lượng Vikoda.',
      memoryHook: 'Sterile suits = Bộ quần áo vô trùng phòng sạch.'
    },
    {
      id: 'exp-u6-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence on automated microbiological testing every 30 minutes:',
      promptVi: 'Sắp xếp câu: "Bộ phận QA lấy mẫu nước xét nghiệm vi sinh mỗi 30 phút một lần."',
      englishSentence: 'Our QA lab conducts microbiological testing on water samples every thirty minutes.',
      audioText: 'Our QA lab conducts microbiological testing on water samples every thirty minutes.',
      phonetics: '/ˈaʊər kjuː eɪ læb kənˈdʌkts ˌmaɪkroʊˌbaɪəˈlɒdʒɪkl ˈtɛstɪŋ ɒn ˈwɔːtər ˈsæmplz ˈɛvri ˈθɜːrti ˈmɪnɪts/',
      wordPool: ['Our', 'QA', 'lab', 'conducts', 'microbiological', 'testing', 'on', 'water', 'samples', 'every', 'thirty', 'minutes.', 'with', 'for'],
      explanation: 'Microbiological testing = Kiểm nghiệm vi sinh định kỳ đảm bảo 0 vi khuẩn gây hại.',
      whyWrong: 'Conducts testing = Tiến hành kiểm nghiệm.',
      crucialNote: 'Tần suất kiểm nghiệm dày đặc khẳng định tinh thần trách nhiệm tối đa với sức khỏe người dùng.',
      memoryHook: 'Microbiological testing = Xét nghiệm vi sinh an toàn.'
    },
    {
      id: 'exp-u6-3',
      type: 'choice',
      promptEn: 'What does the international ISO 22000 certification guarantee for Vikoda products?',
      promptVi: 'Chứng nhận quốc tế ISO 22000 bảo chứng cho điều gì ở sản phẩm Vikoda?',
      englishSentence: 'It guarantees a comprehensive food safety management system across the entire supply chain.',
      audioText: 'It guarantees a comprehensive food safety management system across the entire supply chain.',
      options: [
        'It guarantees a comprehensive food safety management system across the entire supply chain.',
        'It means the bottle is painted with blue color.',
        'It has no meaning at all.'
      ],
      correctIndex: 0,
      explanation: 'ISO 22000 là tiêu chuẩn an toàn thực phẩm toàn cầu cao nhất được quốc tế công nhận.',
      whyWrong: 'Chứng nhận này là tấm hộ chiếu bắt buộc để đưa hàng vào các siêu thị Mỹ và Châu Âu.',
      crucialNote: 'Luôn tự hào nhắc đến ISO 22000 và HACCP khi chào hàng.',
      memoryHook: 'ISO 22000 = Tiêu chuẩn quản lý an toàn thực phẩm toàn diện.'
    }
  ],

  // UNIT 7: Các Loại Chai Vikoda Quen Thuộc
  'unit-7': [
    {
      id: 'exp-u7-1',
      type: 'speak',
      promptEn: 'Describe the complete portfolio of Vikoda bottle sizes:',
      promptVi: 'Luyện nói câu giới thiệu các dòng dung tích chai đa dạng của Vikoda:',
      englishSentence: 'We offer three hundred fifty milliliter, five hundred milliliter, and premium glass bottles.',
      audioText: 'We offer three hundred fifty milliliter, five hundred milliliter, and premium glass bottles.',
      phonetics: '/wiː ˈɒfər θriː ˈhʌndrəd ˈfɪfti ˈmɪlɪliːtər, faɪv ˈhʌndrəd ˈmɪlɪliːtər, ænd ˈpriːmiəm ɡlæs ˈbɒtlz/',
      explanation: 'Nắm vững các dung tích chủ lực: 350ml (tiện lợi), 500ml (công sở), thủy tinh (nhà hàng cao cấp).',
      whyWrong: 'Bật rõ âm đuôi /z/ trong "bottles" (/ˈbɒtlz/).',
      crucialNote: 'Dung tích đa dạng đáp ứng mọi nhu cầu từ cá nhân đến sự kiện quốc tế.',
      memoryHook: 'Glass bottle = Chai thủy tinh sang trọng.'
    },
    {
      id: 'exp-u7-2',
      type: 'fill_blank',
      promptEn: 'Fill in the blank with the office water container capacity:',
      promptVi: 'Điền dung tích bình nước lớn chuyên dùng cho văn phòng và gia đình:',
      englishSentence: 'Our [ _____ ] liter container is the top choice for offices and corporate headquarters.',
      audioText: 'Our 19 liter container is the top choice for offices and corporate headquarters.',
      options: ['19', '50', '5', '100'],
      correctIndex: 0,
      blankWord: '19',
      explanation: 'Bình 19L (gần 5 gallons) là chuẩn mực cây nước nóng lạnh văn phòng.',
      whyWrong: '19L là kích thước quy chuẩn công nghiệp.',
      crucialNote: 'Vỏ bình được tiệt trùng tự động qua 22 bước trước khi chiết rót lại.',
      memoryHook: '19L container = Bình khoáng 19 lít văn phòng.'
    },
    {
      id: 'exp-u7-3',
      type: 'listen_choice',
      promptEn: 'Listen to the event organizer ordering water bottles and choose the right reply:',
      promptVi: 'Nghe ban tổ chức hội nghị đặt 200 thùng chai thủy tinh và phản hồi:',
      englishSentence: 'We need two hundred cartons of glass bottles delivered directly to the convention center.',
      audioText: 'We need two hundred cartons of glass bottles delivered directly to the convention center.',
      options: [
        'Confirmed. We will deliver two hundred cartons of glass bottles with pallet wrapping tomorrow.',
        'We do not have that many bottles.',
        'Come to our warehouse and carry them yourself.'
      ],
      correctIndex: 0,
      explanation: 'Xác nhận đơn hàng dứt khoát ("Confirmed") kèm tiêu chuẩn đóng gói pallet an toàn.',
      whyWrong: 'Khách hàng tổ chức hội nghị cần sự chuẩn xác tuyệt đối về thời gian và địa điểm giao hàng.',
      crucialNote: 'Carton = Thùng giấy carton; Pallet wrapping = Quấn màng co bảo vệ trên pallet.',
      memoryHook: 'Pallet wrapping = Quấn màng co cố định pallet.'
    }
  ],

  // UNIT 12: Giếng Khoan 220m & Vòi Nước Nóng 72°C
  'unit-12': [
    {
      id: 'exp-u12-1',
      type: 'speak',
      promptEn: 'Highlight the exceptional depth of Vikoda geological well:',
      promptVi: 'Luyện nói câu giới thiệu độ sâu khai thác 220m trong lòng đất mẹ:',
      englishSentence: 'Vikoda is tapped from a deep protected well two hundred and twenty meters underground.',
      audioText: 'Vikoda is tapped from a deep protected well two hundred and twenty meters underground.',
      phonetics: '/vɪˈkoʊdə ɪz tæpt frɒm ə diːp prəˈtɛktɪd wɛl tuː ˈhʌndrəd ænd ˈtwɛnti ˈmiːtərz ˌʌndərˈɡraʊnd/',
      explanation: 'Độ sâu 220m được bao bọc bởi các tầng đá hoa cương nguyên sinh, cách ly 100% với ô nhiễm bề mặt.',
      whyWrong: 'Phát âm rõ từ "underground" và "protected well".',
      crucialNote: 'Độ sâu 220m là bảo chứng vững vàng nhất cho sự thanh khiết tuyệt đối của nguồn khoáng.',
      memoryHook: '220 meters underground = Độ sâu 220m cách ly mọi ô nhiễm.'
    },
    {
      id: 'exp-u12-2',
      type: 'choice',
      promptEn: 'Why is the natural emerging temperature of 72°C critical for microbiological purity?',
      promptVi: 'Vì sao nhiệt độ xuất lộ tự nhiên 72°C là yếu tố sống còn cho độ tinh khiết vi sinh?',
      englishSentence: 'The natural 72°C geothermal heat naturally destroys harmful bacteria before reaching the surface.',
      audioText: 'The natural 72°C geothermal heat naturally destroys harmful bacteria before reaching the surface.',
      options: [
        'The natural 72°C geothermal heat naturally destroys harmful bacteria before reaching the surface.',
        'It makes the water freeze into ice immediately.',
        'It means someone boiled the water with electricity.'
      ],
      correctIndex: 0,
      explanation: 'Nhiệt độ địa nhiệt 72°C là quá trình thanh trùng tự nhiên của lòng đất mẹ ngàn năm.',
      whyWrong: 'Không hề dùng đun sôi điện hay hóa chất xử lý.',
      crucialNote: 'Đây là hiện tượng hiếm có trên thế giới, chỉ xuất hiện ở những mỏ khoáng quý đặc biệt.',
      memoryHook: 'Natural 72°C geothermal heat = Nhiệt địa nhiệt 72°C vô trùng tự nhiên.'
    },
    {
      id: 'exp-u12-3',
      type: 'word_order',
      promptEn: 'Arrange the sentence on bottling directly at the source to preserve mineral balance:',
      promptVi: 'Sắp xếp câu: "Nước được đóng chai trực tiếp tại nguồn để bảo toàn trọn vẹn khoáng chất."',
      englishSentence: 'The water is bottled directly at the source to preserve its natural mineral balance.',
      audioText: 'The water is bottled directly at the source to preserve its natural mineral balance.',
      phonetics: '/ðə ˈwɔːtər ɪz ˈbɒtld dəˈrɛktli æt ðə sɔːrs tuː prɪˈzɜːrv ɪts ˈnætʃrəl ˈmɪnərəl ˈbæləns/',
      wordPool: ['The', 'water', 'is', 'bottled', 'directly', 'at', 'the', 'source', 'to', 'preserve', 'its', 'natural', 'mineral', 'balance.', 'from'],
      explanation: 'Quy tắc nghiêm ngặt của Hiệp hội Nước khoáng Quốc tế: Không vận chuyển nước thô bằng xe bồn đi nơi khác đóng chai.',
      whyWrong: 'Bottled directly at the source = Đóng chai khép kín ngay tại mỏ.',
      crucialNote: 'Đóng chai tại mỏ giúp giữ nguyên hàm lượng khí hòa tan và độ tươi mới của nước.',
      memoryHook: 'Preserve mineral balance = Bảo toàn cân bằng khoáng tự nhiên.'
    }
  ],

  // UNIT 26: Đòn Bẩy ESG Chai Thủy Tinh (Zero-Plastic)
  'unit-26': [
    {
      id: 'exp-u26-1',
      type: 'speak',
      promptEn: 'Pitch the circular economy benefit of Vikoda reusable glass bottles:',
      promptVi: 'Luyện nói câu cam kết kinh tế tuần hoàn và tái chế chai thủy tinh Vikoda:',
      englishSentence: 'Our closed-loop glass bottle collection program helps partner hotels achieve their ESG green goals.',
      audioText: 'Our closed-loop glass bottle collection program helps partner hotels achieve their ESG green goals.',
      phonetics: '/ˈaʊər kloʊzd luːp ɡlæs ˈbɒtl kəˈlɛkʃn ˈproʊɡræm hɛlps ˈpɑːrtnər hoʊˈtɛlz əˈtʃiːv ðeər iː ɛs dʒiː ɡriːn ɡoʊlz/',
      explanation: 'Closed-loop (vòng lặp khép kín): Thu hồi vỏ chai thủy tinh, làm sạch vô trùng và tái sử dụng.',
      whyWrong: 'ESG (Environmental - Social - Governance) là tiêu chuẩn phát triển bền vững hàng đầu của các tập đoàn đa quốc gia.',
      crucialNote: 'Khách sạn quốc tế sẵn sàng ký hợp đồng dài hạn nếu nhà cung cấp giải quyết được bài toán rác thải nhựa.',
      memoryHook: 'Closed-loop program = Chương trình tuần hoàn thu hồi vỏ chai.'
    },
    {
      id: 'exp-u26-2',
      type: 'choice',
      promptEn: 'How much plastic waste does a 500-room luxury resort eliminate annually by switching to Vikoda glass?',
      promptVi: 'Một khu nghỉ dưỡng 500 phòng cắt giảm được bao nhiêu chai nhựa mỗi năm khi chuyển sang dùng chai thủy tinh Vikoda?',
      englishSentence: 'A resort can eliminate up to three hundred thousand single-use plastic bottles every year.',
      audioText: 'A resort can eliminate up to three hundred thousand single-use plastic bottles every year.',
      options: [
        'A resort can eliminate up to three hundred thousand single-use plastic bottles every year.',
        'Only ten bottles per year.',
        'Zero bottles, nothing changes.'
      ],
      correctIndex: 0,
      explanation: '300,000 chai nhựa dùng 1 lần được cắt giảm là con số biết nói cực kỳ thuyết phục trong hồ sơ năng lực.',
      whyWrong: 'Số liệu thực tế giúp Tổng Giám Đốc (GM) và Giám đốc Mua hàng (Procurement) dễ dàng phê duyệt ngân sách.',
      crucialNote: 'Đưa con số 300,000 chai nhựa vào slide thuyết trình chào thầu.',
      memoryHook: 'Eliminate 300,000 plastic bottles = Cắt giảm 300,000 chai nhựa/năm.'
    },
    {
      id: 'exp-u26-3',
      type: 'fill_blank',
      promptEn: 'Fill in the green supply chain term for zero single-use plastic:',
      promptVi: 'Điền từ cam kết không sử dụng rác thải nhựa một lần:',
      englishSentence: 'Vikoda champions the [ _____ ] plastic movement across Vietnam luxury hospitality.',
      audioText: 'Vikoda champions the zero plastic movement across Vietnam luxury hospitality.',
      options: ['zero', 'more', 'extra', 'double'],
      correctIndex: 0,
      blankWord: 'zero',
      explanation: '"Zero plastic" = Không rác thải nhựa.',
      whyWrong: 'Là thông điệp thương hiệu mạnh mẽ của dòng chai thủy tinh Vikoda.',
      crucialNote: 'Định vị Vikoda là ngọn cờ đầu bảo vệ môi trường biển Khánh Hòa.',
      memoryHook: 'Zero plastic movement = Phong trào không rác thải nhựa.'
    }
  ],

  // UNIT 35: Tiêu Chuẩn FDA Hoa Kỳ, ISO & Kiểm Định SGS
  'unit-35': [
    {
      id: 'exp-u35-1',
      type: 'speak',
      promptEn: 'State Vikoda FDA registration and international compliance with US customs:',
      promptVi: 'Luyện nói câu chứng nhận đăng ký FDA Hoa Kỳ để hàng thông quan thuận lợi vào thị trường Mỹ:',
      englishSentence: 'Vikoda is fully registered with the United States Food and Drug Administration for seamless export.',
      audioText: 'Vikoda is fully registered with the United States Food and Drug Administration for seamless export.',
      phonetics: '/vɪˈkoʊdə ɪz ˈfʊli ˈrɛdʒɪstərd wɪð ðə juːˈnaɪtɪd steɪts fʊd ænd drʌɡ ədˌmɪnɪˈstreɪʃn fɔːr ˈsiːmləs ˈɛkspɔːrt/',
      explanation: 'Mã số FDA (U.S. FDA Registration) là giấy thông hành bắt buộc để cập cảng Los Angeles hoặc New York.',
      whyWrong: 'Phát âm chuẩn từ "seamless export" (/ˈsiːmləs ˈɛkspɔːrt/ - xuất khẩu trôi chảy, không tắc biên).',
      crucialNote: 'Đối tác xuất khẩu Mỹ luôn yêu cầu kiểm tra mã số đăng ký FDA trên hệ thống hải quan trước khi ký hợp đồng.',
      memoryHook: 'FDA registered = Đã đăng ký cục quản lý thực phẩm Hoa Kỳ.'
    },
    {
      id: 'exp-u35-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence on international third-party lab testing by SGS Switzerland:',
      promptVi: 'Sắp xếp câu: "Mẫu nước Vikoda được kiểm nghiệm định kỳ độc lập bởi tập đoàn SGS Thụy Sĩ."',
      englishSentence: 'Water samples are independently tested and certified by SGS Switzerland for global standards.',
      audioText: 'Water samples are independently tested and certified by SGS Switzerland for global standards.',
      phonetics: '/ˈwɔːtər ˈsæmplz ɑːr ˌɪndɪˈpɛndəntli ˈtɛstɪd ænd ˈsɜːrtɪfaɪd baɪ ɛs dʒiː ɛs ˈswɪtsərlənd fɔːr ˈɡloʊbl ˈstændərdz/',
      wordPool: ['Water', 'samples', 'are', 'independently', 'tested', 'and', 'certified', 'by', 'SGS', 'Switzerland', 'for', 'global', 'standards.', 'with'],
      explanation: 'SGS Thụy Sĩ là tổ chức giám định và chứng nhận chất lượng độc lập hàng đầu thế giới.',
      whyWrong: 'Independently tested = Kiểm nghiệm độc lập khách quan.',
      crucialNote: 'Báo cáo kiểm nghiệm SGS là tài liệu đắt giá nhất khi nộp hồ sơ xin quota phân phối tại các siêu thị ngoại.',
      memoryHook: 'Certified by SGS = Được chứng nhận bởi tập đoàn SGS Thụy Sĩ.'
    },
    {
      id: 'exp-u35-3',
      type: 'choice',
      promptEn: 'What crucial document proves that Vikoda mineral water meets strict chemical and physical parameters?',
      promptVi: 'Tài liệu pháp lý nào chứng minh các chỉ số hóa lý của nước khoáng Vikoda đạt chuẩn xuất khẩu?',
      englishSentence: 'A genuine Certificate of Analysis (COA) specifying pH, TDS, and mineral composition per batch.',
      audioText: 'A genuine Certificate of Analysis (COA) specifying pH, TDS, and mineral composition per batch.',
      options: [
        'A genuine Certificate of Analysis (COA) specifying pH, TDS, and mineral composition per batch.',
        'A cartoon drawing of a water drop.',
        'A personal handwritten note without lab stamps.'
      ],
      correctIndex: 0,
      explanation: 'COA (Certificate of Analysis) cung cấp bảng phân tích chi tiết pH 9.0, độ cứng, TDS, không chứa kim loại nặng.',
      whyWrong: 'COA phải được cấp cho từng lô hàng xuất xưởng (per batch).',
      crucialNote: 'Kèm theo phiếu phân tích COA song ngữ Anh - Việt cho mỗi hợp đồng xuất khẩu.',
      memoryHook: 'COA = Phiếu kết quả kiểm nghiệm hóa lý cho từng lô.'
    }
  ],

  // UNIT 38: Thuyết Trình Pitch Deck & Báo Cáo OGSM C-Suite
  'unit-38': [
    {
      id: 'exp-u38-1',
      type: 'speak',
      promptEn: 'Deliver the strategic closing statement to international institutional investors:',
      promptVi: 'Luyện nói câu kết luận chiến lược trước hội đồng quản trị và quỹ đầu tư quốc tế:',
      englishSentence: 'Vikoda is uniquely positioned to lead the Southeast Asian premium natural alkaline mineral beverage category.',
      audioText: 'Vikoda is uniquely positioned to lead the Southeast Asian premium natural alkaline mineral beverage category.',
      phonetics: '/vɪˈkoʊdə ɪz juːˈniːkli pəˈzɪʃnd tuː liːd ðə saʊθˈiːst ˈeɪʒn ˈpriːmiəm ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈbɛvərɪdʒ ˈkætəɡɔːri/',
      explanation: '"Uniquely positioned" thể hiện vị thế độc tôn, không đối thủ cạnh tranh nào sao chép được mỏ khoáng tự nhiên.',
      whyWrong: 'Phát âm chuẩn từ "beverage" (/ˈbɛvərɪdʒ/) và "category" (/ˈkætəɡɔːri/).',
      crucialNote: 'Nói câu này với phong thái đĩnh đạc, tự tin của người đại diện thương hiệu quốc gia.',
      memoryHook: 'Uniquely positioned = Nắm giữ vị thế độc tôn vững chắc.'
    },
    {
      id: 'exp-u38-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence outlining the 5-year OGSM revenue projection:',
      promptVi: 'Sắp xếp câu: "Mục tiêu chiến lược của chúng tôi là tăng trưởng gấp ba doanh số xuất khẩu trong ba năm tới."',
      englishSentence: 'Our strategic target is to triple international export revenue over the next three years.',
      audioText: 'Our strategic target is to triple international export revenue over the next three years.',
      phonetics: '/ˈaʊər strəˈtiːdʒɪk ˈtɑːrɡɪt ɪz tuː ˈtrɪpl ˌɪntərˈnæʃnəl ˈɛkspɔːrt ˈrɛvənuː ˈoʊvər ðə nɛkst θriː jɪərz/',
      wordPool: ['Our', 'strategic', 'target', 'is', 'to', 'triple', 'international', 'export', 'revenue', 'over', 'the', 'next', 'three', 'years.', 'make'],
      explanation: 'OGSM (Objectives - Goals - Strategies - Measurements): Mục tiêu rõ ràng, định lượng đo đếm được.',
      whyWrong: 'Triple international export revenue = Tăng gấp 3 lần doanh thu xuất khẩu.',
      crucialNote: 'Dùng từ hành động dứt khoát "triple" thay vì nói chung chung "grow".',
      memoryHook: 'Triple export revenue = Tăng trưởng gấp ba doanh thu xuất khẩu.'
    },
    {
      id: 'exp-u38-3',
      type: 'choice',
      promptEn: 'What is the most compelling closing slide of a global investor pitch deck?',
      promptVi: 'Slide kết bài quyền lực nhất của bài thuyết trình gọi vốn đầu tư toàn cầu là gì?',
      englishSentence: 'A clear Call to Action inviting strategic partners to join the green health journey with Vikoda.',
      audioText: 'A clear Call to Action inviting strategic partners to join the green health journey with Vikoda.',
      options: [
        'A clear Call to Action inviting strategic partners to join the green health journey with Vikoda.',
        'A blank slide with no contact info.',
        'An apology saying that water is boring.'
      ],
      correctIndex: 0,
      explanation: 'Call to Action (CTA) mời gọi đối tác đồng hành cùng sứ mệnh lan tỏa giá trị nguồn nước ngọc trời Đảnh Thạnh.',
      whyWrong: 'Thiếu CTA rõ ràng sẽ làm nguội lạnh cảm xúc của nhà đầu tư sau bài pitching.',
      crucialNote: 'Kèm theo thông tin liên hệ của Chủ tịch HĐQT và Giám đốc Phát triển Quốc tế.',
      memoryHook: 'Call to Action = Lời kêu gọi hành động quyết định thương vụ.'
    }
  ]
};
