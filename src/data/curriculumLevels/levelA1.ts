import { UnitLesson } from '../curriculumData';

export const LEVEL_A1_UNITS: UnitLesson[] = [
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
        promptEn: 'Arrange the words to form a polite corporate introduction:',
        promptVi: 'Sắp xếp câu chào lịch sự: "Xin chào, tôi là Minh đến từ Công ty Cổ phần Nước khoáng Khánh Hòa Vikoda."',
        englishSentence: 'Hello, I am Minh from Vikoda Mineral Water Company.',
        audioText: 'Hello, I am Minh from Vikoda Mineral Water Company.',
        phonetics: '/həˈloʊ, aɪ æm mɪnh frəm vɪˈkoʊdə ˈmɪnərəl ˈwɔːtər ˈkʌmpəni/',
        wordPool: ['Hello,', 'I', 'am', 'Minh', 'from', 'Vikoda', 'Mineral', 'Water', 'Company.', 'drink', 'fresh'],
        explanation: 'Cấu trúc "I am [Name] from [Company]" là cách tự giới thiệu chuẩn mực quốc tế.',
        whyWrong: 'Không nên nói "My name is... I come from..." nghe thiếu phong thái chuyên nghiệp.',
        crucialNote: 'Khi nói "Vikoda", nhấn âm tiết đầu rõ ràng, giữ ánh mắt giao tiếp tự tin (Eye Contact).',
        memoryHook: 'Formula: Hello + I am [Tên] + from [Vikoda] = Mở màn ấn tượng trong 3 giây đầu.'
      },
      {
        id: 'u1-e2',
        type: 'choice',
        promptEn: 'Choose the most professional phrase when handing your business card to a foreign guest:',
        promptVi: 'Chọn câu nói lịch sự nhất khi trao danh thiếp cho đối tác quốc tế:',
        englishSentence: 'Here is my business card. It is a pleasure to meet you.',
        audioText: 'Here is my business card. It is a pleasure to meet you.',
        options: [
          'Here is my business card. It is a pleasure to meet you.',
          'Take my small paper right now.',
          'Look at my phone number and call me.'
        ],
        correctIndex: 0,
        explanation: '"Here is my business card" kèm 2 tay trao danh thiếp thể hiện sự tôn trọng tuyệt đối.',
        whyWrong: '"Take my paper" là tiếng Anh bồi cấm kỵ trong ngoại giao doanh nghiệp.',
        crucialNote: 'Trao danh thiếp bằng cả hai tay, hướng mặt chữ thuận chiều người nhận theo đúng chuẩn lễ tân.',
        memoryHook: '2 TAY + 1 CÂU: "Here is my business card" = Phong thái đại sứ thương hiệu.'
      },
      {
        id: 'u1-e3',
        type: 'speak',
        promptEn: 'Practice saying your official company role aloud:',
        promptVi: 'Luyện nói câu giới thiệu chức vụ đại diện kinh doanh của bạn:',
        englishSentence: 'I am proud to be a sales executive at Vikoda.',
        audioText: 'I am proud to be a sales executive at Vikoda.',
        phonetics: '/aɪ æm praʊd tuː biː ə seɪlz ɪɡˈzɛkjətɪv æt vɪˈkoʊdə/',
        explanation: '"Sales Executive" là danh xưng chuyên nghiệp quốc tế cho chuyên viên kinh doanh.',
        whyWrong: 'Tránh dùng "salesman" vì từ này mang tính đường phố, không dùng trong thương mại B2B.',
        crucialNote: 'Phát âm chuẩn âm đuôi /z/ của từ "Sales" và trọng âm thứ 2 của "Executive".',
        memoryHook: 'Executive = Cấp chuyên viên điều hành năng động.'
      },
      {
        id: 'u1-e4',
        type: 'choice',
        promptEn: 'Select the classic ice-breaker question to ask foreign buyers about their journey:',
        promptVi: 'Hỏi thăm chuyến bay của đối tác đến Khánh Hòa một cách thân thiện:',
        englishSentence: 'Did you have a pleasant flight to Cam Ranh?',
        audioText: 'Did you have a pleasant flight to Cam Ranh?',
        options: [
          'Did you have a pleasant flight to Cam Ranh?',
          'Why did your airplane arrive late?',
          'Are you very exhausted today?'
        ],
        correctIndex: 0,
        explanation: '"Did you have a pleasant flight?" là câu hỏi phá băng kinh điển xoa dịu mệt mỏi đường dài.',
        whyWrong: 'Không hỏi dồn dập về mệt mỏi hay trễ giờ khiến khách có cảm giác không thoải mái.',
        crucialNote: 'Ngay sau câu này, chủ động mời khách một chai Vikoda ướp mát lạnh 10-15°C.',
        memoryHook: 'Pleasant flight = Chuyến bay dễ chịu êm ái.'
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
        promptEn: 'Formulate an elegant offer of chilled natural mineral water:',
        promptVi: 'Sắp xếp câu: "Xin mời anh/chị dùng một chai nước Vikoda mát lạnh."',
        englishSentence: 'Would you like a chilled bottle of Vikoda?',
        audioText: 'Would you like a chilled bottle of Vikoda?',
        phonetics: '/wʊd juː laɪk ə tʃɪld ˈbɒtl əv vɪˈkoʊdə/',
        wordPool: ['Would', 'you', 'like', 'a', 'chilled', 'bottle', 'of', 'Vikoda?', 'drink', 'cold'],
        explanation: 'Cấu trúc "Would you like...?" lịch thiệp gấp 10 lần câu "Do you want...?"',
        whyWrong: 'Tuyệt đối tránh "Do you want water?" vì nghe như mệnh lệnh gặng hỏi.',
        crucialNote: 'Khi đưa chai nước, xoay logo Vikoda đối diện tầm mắt người nhận.',
        memoryHook: 'Chilled = Ướp lạnh thanh mát.'
      },
      {
        id: 'u2-e2',
        type: 'choice',
        promptEn: 'Select the 4-word golden definition of Vikoda brand:',
        promptVi: 'Chọn định nghĩa 4 chữ vàng chuẩn nhất của Vikoda:',
        englishSentence: 'It is 100% natural alkaline mineral water.',
        audioText: 'It is one hundred percent natural alkaline mineral water.',
        options: [
          'It is 100% natural alkaline mineral water.',
          'It is tap water boiled with chemicals.',
          'It is soft sweet drink with sugar.'
        ],
        correctIndex: 0,
        explanation: '"100% natural alkaline mineral water" là tuyên ngôn định vị thương hiệu cốt tử.',
        whyWrong: 'Tuyệt đối không dùng "purified water" (nước lọc RO khử khoáng) vì làm hạ thấp giá trị mỏ tự nhiên.',
        crucialNote: 'Nhấn mạnh chữ "NATURAL" - kiềm tự nhiên từ đất mẹ, không dùng máy điện phân nhân tạo.',
        memoryHook: '4 chữ vàng: Natural + Alkaline + Mineral + Water.'
      },
      {
        id: 'u2-e3',
        type: 'speak',
        promptEn: 'Invite the guest to take a seat in the VIP meeting room:',
        promptVi: 'Luyện nói câu mời khách ngồi vào phòng họp:',
        englishSentence: 'Please have a seat in our conference room.',
        audioText: 'Please have a seat in our conference room.',
        phonetics: '/pliːz hæv ə siːt ɪn aʊər ˈkɒnfərəns ruːm/',
        explanation: '"Please have a seat" là cách mời trang trọng thay cho "Sit down".',
        whyWrong: '"Sit down" giống lệnh dành cho động vật hoặc học sinh tiểu học.',
        crucialNote: 'Mở rộng lòng bàn tay hướng về phía dãy ghế họp khi nói câu này.',
        memoryHook: 'Have a seat = Mời an tọa lịch thiệp.'
      },
      {
        id: 'u2-e4',
        type: 'choice',
        promptEn: 'How to describe the pristine balance of minerals to a buyer:',
        promptVi: 'Giải thích về sự cân bằng khoáng chất của nước:',
        englishSentence: 'Our water brings perfect natural balance to your body.',
        audioText: 'Our water brings perfect natural balance to your body.',
        options: [
          'Our water brings perfect natural balance to your body.',
          'Our water makes you sick.',
          'Our water has no taste at all.'
        ],
        correctIndex: 0,
        explanation: 'Nhấn mạnh triết lý "Cân bằng cơ thể" - đưa độ axit dư thừa về trạng thái kiềm tự nhiên.',
        whyWrong: 'Nước khoáng Đảnh Thạnh có vị ngọt hậu thanh mát từ silic hữu cơ, không hề nhạt nhẽo.',
        crucialNote: 'Liên hệ tới hình ảnh 5 phiến đá cân bằng trong cẩm nang đào tạo.',
        memoryHook: 'Natural Balance = Trạng thái cân bằng vi diệu.'
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
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u3-e1',
        type: 'choice',
        promptEn: 'Politely ask a foreign counterpart to slow down their speaking rate:',
        promptVi: 'Nhờ đối tác nước ngoài nói chậm lại một cách lịch sự:',
        englishSentence: 'Could you please speak a little slower?',
        audioText: 'Could you please speak a little slower?',
        options: [
          'Could you please speak a little slower?',
          'Speak slow! I cannot hear.',
          'Why are you speaking too fast?'
        ],
        correctIndex: 0,
        explanation: 'Dùng "Could you please..." là mẫu câu vàng khi giao tiếp với người bản ngữ.',
        whyWrong: '"Speak slow" nghe cộc lốc và thiếu tôn trọng đối phương.',
        crucialNote: 'Người bản ngữ rất tôn trọng người biết chủ động nhờ nói chậm lại thay vì giả vờ hiểu.',
        memoryHook: 'COULD YOU PLEASE = Thần chú giao tiếp thanh lịch.'
      },
      {
        id: 'u3-e2',
        type: 'word_order',
        promptEn: 'Arrange the words to express sincere gratitude for assistance:',
        promptVi: 'Sắp xếp câu: "Tôi thực sự đánh giá cao sự hỗ trợ của bạn."',
        englishSentence: 'I really appreciate your assistance today.',
        audioText: 'I really appreciate your assistance today.',
        phonetics: '/aɪ ˈrɪəli əˈpriːʃieɪt jʊər əˈsɪstəns təˈdeɪ/',
        wordPool: ['I', 'really', 'appreciate', 'your', 'assistance', 'today.', 'help', 'give'],
        explanation: '"Appreciate your assistance" thể hiện sự chuyên nghiệp vượt trội so với "Thanks a lot".',
        whyWrong: 'Dùng từ "assistance" mang âm hưởng trang trọng trong môi trường doanh nghiệp.',
        crucialNote: 'Nhấn mạnh trọng âm thứ 2 của từ "ap-PRE-ci-ate".',
        memoryHook: 'Appreciate = Đánh giá cao, biết ơn sâu sắc.'
      },
      {
        id: 'u3-e3',
        type: 'speak',
        promptEn: 'Assure a colleague you are ready to help them:',
        promptVi: 'Nói câu khẳng định bạn luôn sẵn sàng hỗ trợ:',
        englishSentence: 'Please let me know if you need any assistance.',
        audioText: 'Please let me know if you need any assistance.',
        phonetics: '/pliːz lɛt miː noʊ ɪf juː niːd ˈɛni əˈsɪstəns/',
        explanation: 'Câu kết kinh điển trong mọi cuộc đối thoại và email công sở.',
        whyWrong: 'Thể hiện tinh thần đồng đội (Teamwork) theo văn hóa bầy sói của Vikoda.',
        crucialNote: 'Giọng điệu ấm áp, thiện chí, sẵn lòng phục vụ.',
        memoryHook: 'Let me know = Hãy cho tôi biết nhé.'
      }
    ]
  },
  {
    id: 'unit-4',
    unitNumber: 4,
    title: 'Trực Điện Thoại & Tiếp Nhận Đặt Hàng',
    subtitle: 'Nghe máy chuẩn chỉ, nối máy và ghi nhận đơn hàng',
    level: 'A1',
    icon: '📞',
    color: 'purple',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u4-e1',
        type: 'word_order',
        promptEn: 'Arrange the professional telephone greeting formula:',
        promptVi: 'Sắp xếp câu nhấc máy hotline công ty chuẩn mực:',
        englishSentence: 'Good morning, Vikoda Sales Department, how may I help you?',
        audioText: 'Good morning, Vikoda Sales Department, how may I help you?',
        phonetics: '/ɡʊd ˈmɔːrnɪŋ, vɪˈkoʊdə seɪlz dɪˈpɑːrtmənt, haʊ meɪ aɪ hɛlp juː/',
        wordPool: ['Good', 'morning,', 'Vikoda', 'Sales', 'Department,', 'how', 'may', 'I', 'help', 'you?', 'call', 'who'],
        explanation: 'Công thức vàng: Chào hỏi + Tên phòng ban + "How may I help you?"',
        whyWrong: 'Tuyệt đối không nhấc máy bằng "Alo, who are you?"',
        crucialNote: 'Luôn mỉm cười khi trả lời điện thoại vì nụ cười có thể cảm nhận qua giọng nói.',
        memoryHook: 'Formula 3 bước: Lời chào + Vikoda + Lời đề nghị hỗ trợ.'
      },
      {
        id: 'u4-e2',
        type: 'choice',
        promptEn: 'Ask the caller to hold on politely while transferring the call:',
        promptVi: 'Xin phép khách giữ máy trong giây lát để bạn chuyển máy cho giám sát:',
        englishSentence: 'Could you please hold on a moment while I transfer your call?',
        audioText: 'Could you please hold on a moment while I transfer your call?',
        options: [
          'Could you please hold on a moment while I transfer your call?',
          'Wait there, I am busy.',
          'Hang up your phone now.'
        ],
        correctIndex: 0,
        explanation: '"Hold on a moment while I transfer" là câu chuẩn quốc tế khi chuyển máy.',
        whyWrong: '"Wait" là cách nói ra lệnh thiếu chuyên nghiệp trong dịch vụ khách hàng.',
        crucialNote: 'Nếu đường dây bận, quay lại thông báo khách sau tối đa 20 giây.',
        memoryHook: 'Hold on = Giữ máy chờ máy trong chốc lát.'
      },
      {
        id: 'u4-e3',
        type: 'speak',
        promptEn: 'Confirm you have accurately noted down the order details:',
        promptVi: 'Luyện nói câu xác nhận đã ghi nhận yêu cầu đặt hàng:',
        englishSentence: 'I have noted down your order of twenty crates.',
        audioText: 'I have noted down your order of twenty crates.',
        phonetics: '/aɪ hæv ˈnoʊtɪd daʊn jʊər ˈɔːrdər əv ˈtwɛnti kreɪts/',
        explanation: 'Từ "crate" dùng cho két nước ngọt hoặc két chai thủy tinh (két 20 chai 2 chiều).',
        whyWrong: 'Phân biệt "crate" (két nhựa) với "carton/box" (thùng carton giấy).',
        crucialNote: 'Đọc lại số lượng thùng để tránh sai lệch đơn hàng trên phần mềm DMS.',
        memoryHook: 'Crate = Két chai thủy tinh; Carton = Thùng giấy.'
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
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u5-e1',
        type: 'choice',
        promptEn: 'Give clear directions to the second-floor conference room:',
        promptVi: 'Chỉ đường lên phòng họp tầng hai cho khách:',
        englishSentence: 'The executive meeting room is on the second floor, to your right.',
        audioText: 'The executive meeting room is on the second floor, to your right.',
        options: [
          'The executive meeting room is on the second floor, to your right.',
          'Go everywhere you want.',
          'The room is lost somewhere.'
        ],
        correctIndex: 0,
        explanation: 'Chỉ dẫn rõ ràng: số tầng (second floor) và hướng rẽ (to your right).',
        whyWrong: 'Cần kèm theo cử chỉ dẫn đường bằng tay thanh lịch.',
        crucialNote: 'Nên chủ động đi trước khách nửa bước để dẫn đường nếu là đối tác VIP.',
        memoryHook: 'Second floor, to your right = Tầng hai phía tay phải.'
      },
      {
        id: 'u5-e2',
        type: 'word_order',
        promptEn: 'Present a gift box of Vikoda Premium Glass to an international guest:',
        promptVi: 'Sắp xếp câu trao hộp quà tặng chai thủy tinh cao cấp Vikoda:',
        englishSentence: 'Please accept this gift box of Vikoda Premium Glass.',
        audioText: 'Please accept this gift box of Vikoda Premium Glass.',
        phonetics: '/pliːz əkˈsɛpt ðɪs ɡɪft bɒks əv vɪˈkoʊdə ˈpriːmiəm ɡlæs/',
        wordPool: ['Please', 'accept', 'this', 'gift', 'box', 'of', 'Vikoda', 'Premium', 'Glass.', 'take', 'buy'],
        explanation: '"Please accept this gift..." là lời tặng quà tinh tế và khiêm tốn của văn hóa Á Đông.',
        whyWrong: 'Không dùng "Take this gift" vì nghe như ép buộc nhận đồ.',
        crucialNote: 'Giới thiệu đây là phiên bản thủy tinh đạt chuẩn khách sạn 5 sao quốc tế.',
        memoryHook: 'Premium Glass = Dòng chai thủy tinh thượng hạng.'
      },
      {
        id: 'u5-e3',
        type: 'speak',
        promptEn: 'Say goodbye and express warm hopes for long-term collaboration:',
        promptVi: 'Luyện nói câu chúc đối tác thượng lộ bình an và sớm gặp lại:',
        englishSentence: 'Have a safe flight and see you soon in Vietnam.',
        audioText: 'Have a safe flight and see you soon in Vietnam.',
        phonetics: '/hæv ə seɪf flaɪt ænd siː juː suːn ɪn ˌvjɛtˈnɑːm/',
        explanation: '"Have a safe flight" là lời tiễn khách ấm áp nhất sau chuyến thăm công ty.',
        whyWrong: 'Ghi điểm tối đa trong mắt đối tác quốc tế trước khi họ rời Việt Nam.',
        crucialNote: 'Bắt tay ấm áp, mỉm cười chân thành.',
        memoryHook: 'Safe flight = Chuyến bay an toàn thuận lợi.'
      }
    ]
  },
  {
    id: 'unit-6',
    unitNumber: 6,
    title: 'Danh Mục Sản Phẩm & Bao Bì Đa Dạng',
    subtitle: 'Nắm vững quy cách chai Thủy tinh, PET, Lon và Bình 19L',
    level: 'A1',
    icon: '📦',
    color: 'emerald',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u6-e1',
        type: 'choice',
        promptEn: 'Identify the shelf life (HSD) of Vikoda Natural Mineral Water in PET bottles:',
        promptVi: 'Hạn sử dụng (HSD) của nước khoáng kiềm thiên nhiên Vikoda chai PET là bao nhiêu tháng?',
        englishSentence: 'The shelf life of Vikoda in PET bottles is twenty-four months.',
        audioText: 'The shelf life of Vikoda in PET bottles is twenty-four months.',
        options: [
          'The shelf life of Vikoda in PET bottles is twenty-four months.',
          'The shelf life is only three days.',
          'Vikoda expires in ten years.'
        ],
        correctIndex: 0,
        explanation: 'Theo cẩm nang đào tạo, các sản phẩm khoáng kiềm Vikoda chai PET (350ml, 500ml, 1.5L) có HSD 24 tháng.',
        whyWrong: 'Độ kiềm pH 9.0 ổn định tự nhiên giúp nước giữ nguyên chất lượng tới 24 tháng mà không biến đổi.',
        crucialNote: 'Hạn sử dụng tiếng Anh chuyên ngành là "Shelf life" hoặc "Expiry date".',
        memoryHook: '24 MONTHS = 2 năm vẹn nguyên độ tươi khoáng kiềm.'
      },
      {
        id: 'u6-e2',
        type: 'word_order',
        promptEn: 'Describe the packaging of Vikoda Glass Bottle 430ml for distributors:',
        promptVi: 'Sắp xếp câu: "Chai thủy tinh 430ml có quy cách 20 chai một két."',
        englishSentence: 'Glass bottles are packed twenty bottles per returnable crate.',
        audioText: 'Glass bottles are packed twenty bottles per returnable crate.',
        phonetics: '/ɡlæs ˈbɒtlz ɑːr pækt ˈtwɛnti ˈbɒtlz pɜːr rɪˈtɜːrnəbl kreɪt/',
        wordPool: ['Glass', 'bottles', 'are', 'packed', 'twenty', 'bottles', 'per', 'returnable', 'crate.', 'box', 'loose'],
        explanation: '"Returnable crate" nghĩa là két vỏ chai thu hồi 2 chiều, tiết kiệm chi phí và bảo vệ môi trường.',
        whyWrong: 'Nhà máy có 2 quy cách chai thủy tinh: két 20 chai 2 chiều và thùng 12 chai 1 chiều.',
        crucialNote: 'Đây là dòng sản phẩm rất được các quán ăn, nhà hàng tiệc cưới ưa chuộng.',
        memoryHook: 'Returnable crate = Két nhựa đổi vỏ 2 chiều.'
      },
      {
        id: 'u6-e3',
        type: 'speak',
        promptEn: 'Introduce the 19-liter water gallon for office and home consumption:',
        promptVi: 'Giới thiệu bình khoáng kiềm Vikoda 19L cho văn phòng và gia đình:',
        englishSentence: 'Our 19-liter gallon is ideal for modern offices.',
        audioText: 'Our nineteen-liter gallon is ideal for modern offices.',
        phonetics: '/aʊər ˌnaɪnˈtiːn ˈliːtər ˈɡælən ɪz aɪˈdiːəl fɔːr ˈmɒdərn ˈɒfɪsɪz/',
        explanation: 'Bình 19L (cả bình vòi và bình úp) là sản phẩm thiết yếu bảo vệ sức khỏe nhân viên văn phòng.',
        whyWrong: 'Dùng từ "gallon" hoặc "19-liter container" chuẩn xác.',
        crucialNote: 'Nhắc đến tính tiện lợi khi dùng cùng cây nước nóng lạnh.',
        memoryHook: '19-liter gallon = Bình 19L chuẩn công sở.'
      }
    ]
  },
  {
    id: 'unit-7',
    unitNumber: 7,
    title: 'Đặt Lịch Họp & Viết Email Xác Nhận',
    subtitle: 'Kỹ năng hẹn gặp và viết Confirming Email chuẩn Cambridge',
    level: 'A1',
    icon: '✉️',
    color: 'cyan',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u7-e1',
        type: 'choice',
        promptEn: 'Select the most natural Cambridge Business phrase to propose a meeting time:',
        promptVi: 'Đề xuất thời gian họp vào sáng Thứ Hai lúc 9 giờ theo văn phong chuẩn Cambridge:',
        englishSentence: 'How about Monday at nine? Would that suit you?',
        audioText: 'How about Monday at nine? Would that suit you?',
        options: [
          'How about Monday at nine? Would that suit you?',
          'You must come Monday 9am immediately.',
          'Why are you not meeting me on Monday?'
        ],
        correctIndex: 0,
        explanation: '"Would that suit you?" (Thời gian đó có phù hợp với anh không?) là câu hỏi lịch thiệp số một.',
        whyWrong: 'Không bao giờ ấn định giờ theo kiểu mệnh lệnh với đối tác kinh doanh.',
        crucialNote: 'Nếu đối tác bận, dùng mẫu câu: "Could we postpone the meeting until Wednesday?".',
        memoryHook: 'Would that suit you? = Thời gian đó có tiện cho anh không?'
      },
      {
        id: 'u7-e2',
        type: 'word_order',
        promptEn: 'Formulate the opening line of a formal confirmation email:',
        promptVi: 'Sắp xếp câu mở đầu email xác nhận cuộc họp trang trọng:',
        englishSentence: 'It was a pleasure to speak with you today.',
        audioText: 'It was a pleasure to speak with you today.',
        phonetics: '/ɪt wɒz ə ˈplɛʒər tuː spiːk wɪð juː təˈdeɪ/',
        wordPool: ['It', 'was', 'a', 'pleasure', 'to', 'speak', 'with', 'you', 'today.', 'talk', 'nice'],
        explanation: '"It was a pleasure to speak with you" là câu mở đầu email ngoại giao chuẩn mực.',
        whyWrong: 'Trang trọng hơn nhiều so với câu "Hi, I am emailing you".',
        crucialNote: 'Nên gửi email xác nhận trong vòng 2 giờ sau khi kết thúc cuộc gọi điện thoại.',
        memoryHook: 'It was a pleasure = Rất hân hạnh được trao đổi.'
      },
      {
        id: 'u7-e3',
        type: 'speak',
        promptEn: 'Practice saying the formal closing sentence of a business email:',
        promptVi: 'Luyện nói câu kết email mong đợi cuộc gặp gỡ trực tiếp:',
        englishSentence: 'I look forward to meeting you next week.',
        audioText: 'I look forward to meeting you next week.',
        phonetics: '/aɪ lʊk ˈfɔːrwərd tuː ˈmiːtɪŋ juː nɛkst wiːk/',
        explanation: 'Cấu trúc "look forward to + V-ing" (luôn dùng meeting, không dùng meet).',
        whyWrong: 'Lỗi ngữ pháp cực kỳ phổ biến của người Việt là viết "look forward to meet".',
        crucialNote: 'Nhấn mạnh từ "FORWARD" khi phát âm.',
        memoryHook: 'Look forward to + V-ING = Trông đợi một điều tốt đẹp.'
      }
    ]
  },
  {
    id: 'unit-8',
    unitNumber: 8,
    title: 'Giờ Giấc Linh Hoạt & Phúc Lợi Nhân Sự',
    subtitle: 'Làm quen thuật ngữ Flexitime, Salary vs Wage, Perks từ Oxford',
    level: 'A1',
    icon: '⏰',
    color: 'blue',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u8-e1',
        type: 'choice',
        promptEn: 'What is the key difference between "Salary" and "Wage" in human resources?',
        promptVi: 'Phân biệt sự khác nhau giữa "Salary" và "Wage" theo chuẩn tài liệu quản trị nhân sự:',
        englishSentence: 'Salary is fixed monthly pay, while wage is paid by the hour or week.',
        audioText: 'Salary is fixed monthly pay, while wage is paid by the hour or week.',
        options: [
          'Salary is fixed monthly pay, while wage is paid by the hour or week.',
          'Salary is fake money and wage is gold.',
          'Salary is only for doctors and wage is for teachers.'
        ],
        correctIndex: 0,
        explanation: 'Salary: Lương cố định hàng tháng (cho nhân viên văn phòng white-collar). Wage: Lương tính theo giờ/tuần (cho công nhân blue-collar).',
        whyWrong: 'Cả hai đều là tiền thù lao nhưng hình thức tính toán và chu kỳ chi trả khác nhau.',
        crucialNote: 'Trong các tập đoàn quốc tế, thuật ngữ "Remuneration package" bao gồm cả Salary và Perks.',
        memoryHook: 'Salary = Lương tháng ổn định; Wage = Tiền công tính theo giờ.'
      },
      {
        id: 'u8-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence defining the flexible working hour system:',
        promptVi: 'Sắp xếp câu: "Công ty chúng tôi áp dụng thời gian làm việc linh hoạt."',
        englishSentence: 'Our company offers flexible working hours for employees.',
        audioText: 'Our company offers flexible working hours for employees.',
        phonetics: '/aʊər ˈkʌmpəni ˈɒfərz ˈflɛksəbl ˈwɜːrkɪŋ ˈaʊərz fɔːr ɪmˈplɔɪiːz/',
        wordPool: ['Our', 'company', 'offers', 'flexible', 'working', 'hours', 'for', 'employees.', 'fixed', 'late'],
        explanation: '"Flexible working hours" (hoặc Flexitime) là chế độ giờ làm việc linh hoạt tạo động lực.',
        whyWrong: 'Nhân viên có thể chủ động sắp xếp thời gian miễn là hoàn thành đủ KPI cam kết.',
        crucialNote: 'Gắn liền với triết lý "Lấy con người làm trọng tâm" trong cẩm nang văn hóa Vikoda.',
        memoryHook: 'Flexitime = Giờ giấc làm việc linh hoạt.'
      },
      {
        id: 'u8-e3',
        type: 'speak',
        promptEn: 'State the importance of health insurance and wellness perks:',
        promptVi: 'Luyện nói câu giới thiệu chế độ chăm sóc sức khỏe cho cán bộ công nhân viên:',
        englishSentence: 'We provide comprehensive health insurance for all staff members.',
        audioText: 'We provide comprehensive health insurance for all staff members.',
        phonetics: '/wiː prəˈvaɪd ˌkɒmprɪˈhɛnsɪv hɛlθ ɪnˈʃʊərəns fɔːr ɔːl stɑːf ˈmɛmbərz/',
        explanation: '"Comprehensive health insurance" là bảo hiểm sức khỏe toàn diện cao cấp.',
        whyWrong: 'Vikoda coi con người là vốn quý nhất, do đó phúc lợi y tế luôn được đặt lên hàng đầu.',
        crucialNote: 'Phát âm chuẩn từ "Comprehensive" với trọng âm rơi vào âm tiết thứ 3.',
        memoryHook: 'Perks = Các phúc lợi phụ trợ ngoài lương.'
      }
    ]
  },
  {
    id: 'unit-9',
    unitNumber: 9,
    title: 'Lễ Tân Đón Đoàn Khách VIP Tại Diên Khánh',
    subtitle: 'Quy trình đón đoàn từ sân bay Cam Ranh về nhà máy Cây Sung',
    level: 'A1',
    icon: '🚘',
    color: 'purple',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u9-e1',
        type: 'choice',
        promptEn: 'Welcome an international delegation arriving at Cam Ranh International Airport:',
        promptVi: 'Đón đoàn đại biểu quốc tế tại sân bay Cam Ranh với phong thái nồng hậu nhất:',
        englishSentence: 'Welcome to Khanh Hoa. Our private shuttle is waiting outside.',
        audioText: 'Welcome to Khanh Hoa. Our private shuttle is waiting outside.',
        options: [
          'Welcome to Khanh Hoa. Our private shuttle is waiting outside.',
          'Walk by yourself to our factory.',
          'Take a crowded bus and find us.'
        ],
        correctIndex: 0,
        explanation: 'Thể hiện sự chu đáo của tập đoàn: Xe đưa đón riêng (Private shuttle) đón tại sảnh sân bay.',
        whyWrong: 'Khoảng cách từ Sân bay Cam Ranh về mỏ Đảnh Thạnh khoảng 45 phút di chuyển.',
        crucialNote: 'Trên xe đã chuẩn bị sẵn các chai Vikoda thủy tinh mát lạnh để khách giải khát.',
        memoryHook: 'Private shuttle = Xe đưa đón riêng sang trọng.'
      },
      {
        id: 'u9-e2',
        type: 'word_order',
        promptEn: 'Introduce the geographic location of Dan Thanh spring:',
        promptVi: 'Sắp xếp câu: "Mỏ nước khoáng tọa lạc tại thôn Cây Sung, Diên Khánh."',
        englishSentence: 'Our natural spring is located in Dien Khanh district.',
        audioText: 'Our natural spring is located in Dien Khanh district.',
        phonetics: '/aʊər ˈnætʃrəl sprɪŋ ɪz loʊˈkeɪtɪd ɪn dɪən kʰəːɲ ˈdɪstrɪkt/',
        wordPool: ['Our', 'natural', 'spring', 'is', 'located', 'in', 'Dien', 'Khanh', 'district.', 'far', 'city'],
        explanation: 'Địa chỉ nhà máy chính: Thôn Cây Sung, xã Diên Tân, huyện Diên Khánh, tỉnh Khánh Hòa.',
        whyWrong: 'Nguồn khoáng nằm tách biệt tại vùng sinh thái núi Hòn Chuông trong lành.',
        crucialNote: 'Giới thiệu khái quát quang cảnh thiên nhiên hùng vĩ xung quanh nhà máy.',
        memoryHook: 'Is located in = Tọa lạc tại vị trí.'
      },
      {
        id: 'u9-e3',
        type: 'speak',
        promptEn: 'Introduce the factory tour itinerary to guests:',
        promptVi: 'Luyện nói câu giới thiệu lịch trình tham quan mỏ và dây chuyền đóng chai:',
        englishSentence: 'First we visit the mineral spring, then the bottling facility.',
        audioText: 'First we visit the mineral spring, then the bottling facility.',
        phonetics: '/fɜːrst wiː ˈvɪzɪt ðə ˈmɪnərəl sprɪŋ, ðɛn ðə ˈbɒtlɪŋ fəˈsɪləti/',
        explanation: 'Quy trình chuẩn: Tham quan giếng khoan 220m trước, sau đó đến dây chuyền chiết rót vô trùng.',
        whyWrong: 'Dùng từ "facility" hoặc "plant" thay vì "house" để thể hiện quy mô hiện đại.',
        crucialNote: 'Nhắc khách đội nón bảo hộ và khử trùng giày trước khi bước vào phòng vô trùng.',
        memoryHook: 'Bottling facility = Nhà máy chiết rót đóng chai hiện đại.'
      }
    ]
  },
  {
    id: 'unit-10',
    unitNumber: 10,
    title: 'Thử Thách Phản Xạ Cột Mốc A1',
    subtitle: 'Tổng kết 10 bài học cơ bản & Thử thách toàn diện cấp độ A1',
    level: 'A1',
    icon: '🏆',
    color: 'amber',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u10-e1',
        type: 'choice',
        promptEn: 'Combine greeting, brand pitch, and hospitality into one executive reflex sentence:',
        promptVi: 'Chọn câu phản xạ xuất sắc nhất kết hợp chào mừng, giới thiệu và mời nước Vikoda:',
        englishSentence: 'Welcome to Vikoda. Please enjoy our 100% natural alkaline mineral water.',
        audioText: 'Welcome to Vikoda. Please enjoy our one hundred percent natural alkaline mineral water.',
        options: [
          'Welcome to Vikoda. Please enjoy our 100% natural alkaline mineral water.',
          'Give us your money and buy everything.',
          'Here is dirty tap water, drink it.'
        ],
        correctIndex: 0,
        explanation: 'Câu nói hội tụ đầy đủ phẩm chất của một Đại sứ thương hiệu Vikoda cấp độ A1.',
        whyWrong: 'Tự tin, chuyên nghiệp, truyền tải thông điệp kiềm tự nhiên trọn vẹn.',
        crucialNote: 'Chúc mừng bạn đã hoàn thành trọn vẹn toàn bộ 10 Unit nền tảng Cấp độ A1!',
        memoryHook: 'A1 GRADUATION = Tự tin tiếp khách và giao dịch quốc tế.'
      },
      {
        id: 'u10-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence expressing gratitude for a successful business partnership:',
        promptVi: 'Sắp xếp câu: "Chúng tôi rất coi trọng mối quan hệ đối tác bền vững với quý công ty."',
        englishSentence: 'We truly value our long term partnership with you.',
        audioText: 'We truly value our long term partnership with you.',
        phonetics: '/wiː ˈtruːli ˈvæljuː aʊər lɒŋ tɜːrm ˈpɑːrtnərʃɪp wɪð juː/',
        wordPool: ['We', 'truly', 'value', 'our', 'long', 'term', 'partnership', 'with', 'you.', 'money', 'cheap'],
        explanation: '"Long term partnership" (Quan hệ đối tác lâu dài) là kim chỉ nam cho mọi giao dịch B2B.',
        whyWrong: 'Thể hiện thiện chí hợp tác cùng thắng Win-Win theo nguyên tắc chữ V trong VIKODA.',
        crucialNote: 'Nhấn mạnh từ "Value" thể hiện sự trân trọng chân thành.',
        memoryHook: 'Long-term partnership = Hợp tác bền vững trọn đời.'
      },
      {
        id: 'u10-e3',
        type: 'speak',
        promptEn: 'Deliver the A1 Milestone Keynote sentence with pride:',
        promptVi: 'Luyện nói câu tổng kết cấp độ A1 đầy tự hào của chiến binh Vikoda:',
        englishSentence: 'Vikoda delivers original wellness straight from nature to the world.',
        audioText: 'Vikoda delivers original wellness straight from nature to the world.',
        phonetics: '/vɪˈkoʊdə dɪˈlɪvərz əˈrɪdʒənl ˈwɛlnəs streɪt frəm ˈneɪtʃər tuː ðə wɜːrld/',
        explanation: 'Khẳng định sứ mệnh: Mang sức khỏe nguyên bản từ lòng đất mẹ ra toàn cầu.',
        whyWrong: 'Tập trung phát âm tròn vành rõ chữ, truyền cảm hứng cho người đối diện.',
        crucialNote: 'Sẵn sàng bước tiếp lên Cấp độ A2-B1: Bậc Thầy Sản Phẩm & Quy Trình 8 Bước Bán Hàng!',
        memoryHook: 'From nature to the world = Từ thiên nhiên vươn tầm thế giới.'
      }
    ]
  }
];
