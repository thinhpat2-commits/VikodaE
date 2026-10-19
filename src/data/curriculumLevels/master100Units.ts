// CENTENNIAL MASTER 100 UNITS (UNITS 1 TO 100)
// Complete 100-Unit Enterprise Curriculum for Vikoda English Pro
// 100% Balanced Options (Randomized Positions & Comparable Lengths) • Explicit [ _____ ] in Blank Exercises
// Every single unit contains 5 dedicated interactive exercises with explicit vietnameseMeaning!

import { UnitLesson } from '../curriculumData';

export const MASTER_100_UNITS: UnitLesson[] = [
  {
    "id": "unit-1",
    "unitNumber": 1,
    "title": "Chào Hỏi & Tự Giới Thiệu Bản Thân",
    "subtitle": "Mở lời tự tin, giới thiệu tên và vị trí tại Vikoda",
    "level": "A1",
    "icon": "👋",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u1-e1",
        "type": "match_pairs",
        "promptEn": "Match the English business terms with their correct meanings:",
        "promptVi": "Ghép cặp thuật ngữ chào hỏi kinh doanh tiếng Anh với nghĩa tương ứng:",
        "englishSentence": "Match the core greeting terms.",
        "audioText": "Match the core greeting terms.",
        "explanation": "Nắm vững 5 thuật ngữ vàng khi tiếp đón khách quốc tế tại trụ sở Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng chào hỏi giao tiếp văn phòng.",
        "pairs": [
          { "left": "Sales Representative", "right": "Đại diện phòng Kinh doanh" },
          { "left": "Natural Mineral Water", "right": "Nước khoáng thiên nhiên" },
          { "left": "Pleased to meet you", "right": "Rất hân hạnh được gặp bạn" },
          { "left": "Company headquarters", "right": "Trụ sở chính công ty" },
          { "left": "Warm hospitality", "right": "Sự đón tiếp nồng hậu" }
        ]
      },
      {
        "id": "u1-e2",
        "type": "speak",
        "promptEn": "Speak this introduction clearly into the microphone:",
        "promptVi": "Luyện nói câu tự giới thiệu bản thân tự tin tại Vikoda:",
        "englishSentence": "Good morning! I am Minh from Vikoda sales team, pleased to welcome you.",
        "audioText": "Good morning! I am Minh from Vikoda sales team, pleased to welcome you.",
        "phonetics": "/ɡʊd ˈmɔːrnɪŋ! aɪ æm mɪn frɒm vɪˈkoʊdə seɪlz tiːm, pliːzd tuː ˈwɛlkəm juː/",
        "vietnameseMeaning": "Chào buổi sáng! Tôi là Minh từ đội ngũ kinh doanh Vikoda, rất hân hạnh được đón tiếp bạn.",
        "explanation": "Mẫu câu chuẩn mực: \"Good morning! I am [Tên] from [Bộ phận], pleased to welcome you.\"",
        "whyWrong": "Chú ý phát âm rõ âm cuối /s/ trong \"sales\" và /d/ trong \"pleased\".",
        "crucialNote": "Ánh mắt tự tin, nụ cười thân thiện mở đầu cho buổi gặp gỡ chuyên nghiệp.",
        "memoryHook": "Good morning + I am [Name] + from Vikoda + pleased to welcome you."
      },
      {
        "id": "u1-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to form a professional greeting sentence:",
        "promptVi": "Ghép câu: \"Chào mừng bạn đến với Vikoda và chúc bạn một ngày làm việc tuyệt vời!\":",
        "englishSentence": "Welcome to Vikoda and have a wonderful working day!",
        "audioText": "Welcome to Vikoda and have a wonderful working day!",
        "wordPool": [
          "Welcome",
          "to",
          "Vikoda",
          "and",
          "have",
          "a",
          "wonderful",
          "working",
          "day!",
          "cancel",
          "never"
        ],
        "vietnameseMeaning": "Chào mừng bạn đến với Vikoda và chúc bạn một ngày làm việc tuyệt vời!",
        "explanation": "Cấu trúc lời chúc khởi đầu ngày làm việc: \"Welcome to [Company] and have a wonderful working day!\".",
        "whyWrong": "Sắp xếp đúng trật tự liên từ \"and\" kết nối hai mệnh đề.",
        "crucialNote": "Câu chào truyền năng lượng tích cực cho đồng nghiệp và khách hàng.",
        "memoryHook": "Welcome + have a wonderful working day."
      },
      {
        "id": "u1-e4",
        "type": "fill_blank",
        "promptEn": "Select the precise diplomatic term to complete the sentence:",
        "promptVi": "Chọn từ ngoại giao chính xác để hoàn thành câu tiếp đón:",
        "englishSentence": "It is an absolute [ _____ ] to collaborate with your distinguished delegation today.",
        "audioText": "It is an absolute honor to collaborate with your distinguished delegation today.",
        "blankWord": "honor",
        "options": [
          "honor",
          "reputation",
          "formality"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Thật là một vinh dự tuyệt đối khi được hợp tác cùng phái đoàn quý mến của bạn hôm nay.",
        "explanation": "\"It is an absolute honor to...\" là cấu trúc ngoại giao cấp cao thể hiện sự trọng thị tối đa với đối tác.",
        "whyWrong": "Dùng \"reputation\" (danh tiếng) hay \"formality\" (thủ tục) đều sai nghĩa văn cảnh.",
        "crucialNote": "Từ \"honor\" tạo vị thế tôn trọng ngang tầm giữa hai doanh nghiệp.",
        "memoryHook": "Absolute honor = Vinh dự tuyệt đối."
      },
      {
        "id": "u1-e5",
        "type": "chat_branch",
        "promptEn": "Respond professionally to the international partner in corporate chat:",
        "promptVi": "Mô phỏng tin nhắn Teams: Đối tác quốc tế vừa đến sảnh, hãy chọn câu phản hồi ngoại giao nhất:",
        "englishSentence": "Good morning David! Welcome to our headquarters. I am taking the elevator down to the lobby to welcome you right now!",
        "audioText": "Good morning David! Welcome to our headquarters. I am taking the elevator down to the lobby to welcome you right now!",
        "chatMessages": [
          {
            "speaker": "Mr. David (Singapore Procurement Partner)",
            "avatar": "🇸🇬",
            "message": "Hi Minh! I have just arrived at Vikoda lobby for our 9 AM mineral water sampling meeting."
          }
        ],
        "chatOptions": [
          {
            "text": "Good morning David! Welcome to our headquarters. I am taking the elevator down to the lobby to welcome you right now!",
            "trustScore": 25,
            "feedback": "Xuất sắc! Phản hồi tức thì, nồng hậu và chủ động đón khách ngay tại sảnh.",
            "isCorrect": true
          },
          {
            "text": "Okay David, please wait there at the sofa. I am still finishing some paperwork upstairs.",
            "trustScore": 5,
            "feedback": "Thiếu nhiệt tình! Bắt đối tác quốc tế ngồi chờ mà không có người tiếp đón chu đáo.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chào buổi sáng David! Chào mừng bạn đến với trụ sở chúng tôi. Tôi đang đi thang máy xuống sảnh để đón bạn ngay đây!",
        "explanation": "Tác phong tiếp đón chủ động thể hiện lòng hiếu khách chân thành của Vikoda.",
        "crucialNote": "Không bao giờ để đối tác nước ngoài bơ vơ tại sảnh tòa nhà.",
        "memoryHook": "Warm welcome at the lobby sets a winning tone."
      }
    ]
  },
  {
    "id": "unit-2",
    "unitNumber": 2,
    "title": "Mời Nước & Rót Nước Lịch Thiệp",
    "subtitle": "Đưa chai nước Vikoda mát lạnh và mời khách dùng nước",
    "level": "A1",
    "icon": "💧",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u2-e1",
        "type": "match_pairs",
        "promptEn": "Match the hospitality terms with their correct Vietnamese meanings:",
        "promptVi": "Ghép cặp thuật ngữ mời nước chuẩn khách sạn 5 sao với nghĩa tiếng Việt:",
        "englishSentence": "Match hospitality and water presentation terms.",
        "audioText": "Match hospitality and water presentation terms.",
        "explanation": "Học thuộc 5 thuật ngữ vàng khi phục vụ nước khoáng kiềm Vikoda cho khách VIP.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng phục vụ nước khoáng kiềm.",
        "pairs": [
          { "left": "Chilled bottle", "right": "Chai nước ướp lạnh vừa độ" },
          { "left": "Still mineral water", "right": "Nước khoáng không ga nguyên bản" },
          { "left": "Glass bottle", "right": "Dòng chai thủy tinh cao cấp" },
          { "left": "Natural pH 9.0", "right": "Độ kiềm tự nhiên pH 9.0" },
          { "left": "Make yourself comfortable", "right": "Xin cứ tự nhiên thoải mái" }
        ]
      },
      {
        "id": "u2-e2",
        "type": "speak",
        "promptEn": "Speak this polite offering sentence into the microphone:",
        "promptVi": "Luyện nói câu mời khách thưởng thức nước khoáng Đảnh Thạnh:",
        "englishSentence": "Please have a seat and enjoy our chilled natural mineral water from Danh Thanh spring.",
        "audioText": "Please have a seat and enjoy our chilled natural mineral water from Danh Thanh spring.",
        "phonetics": "/pliːz hæv ə siːt ænd ɪnˈdʒɔɪ ˈaʊər tʃɪld ˈnætʃrəl ˈmɪnərəl ˈwɔːtər frɒm daɪn tæŋ sprɪŋ/",
        "vietnameseMeaning": "Xin mời bạn ngồi và thưởng thức chai nước khoáng kiềm thiên nhiên mát lạnh từ mỏ Đảnh Thạnh của chúng tôi.",
        "explanation": "Mẫu câu tiếp đãi lịch thiệp kết hợp giới thiệu xuất xứ mỏ khoáng quý giá Đảnh Thạnh.",
        "whyWrong": "Phát âm rõ cụm \"natural mineral water\" (/ˈnætʃrəl ˈmɪnərəl ˈwɔːtər/).",
        "crucialNote": "Đưa chai nước bằng hai tay với nhãn chai xoay hướng về phía người uống.",
        "memoryHook": "Have a seat + enjoy chilled natural mineral water."
      },
      {
        "id": "u2-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to offer a refreshing glass of water:",
        "promptVi": "Ghép câu: \"Tôi có thể mời bạn dùng một ly nước khoáng kiềm thanh mát được không?\":",
        "englishSentence": "May I offer you a refreshing glass of natural alkaline water?",
        "audioText": "May I offer you a refreshing glass of natural alkaline water?",
        "wordPool": [
          "May",
          "I",
          "offer",
          "you",
          "a",
          "refreshing",
          "glass",
          "of",
          "natural",
          "alkaline",
          "water?",
          "bottle",
          "never"
        ],
        "vietnameseMeaning": "Tôi có thể mời bạn dùng một ly nước khoáng kiềm thanh mát được không?",
        "explanation": "\"May I offer you...\" là cấu trúc mời lịch sự hàng đầu trong văn hóa dịch vụ chuẩn quốc tế.",
        "whyWrong": "Dùng \"May I\" lịch thiệp hơn nhiều so with \"Do you want\".",
        "crucialNote": "Hỏi thăm khách thích uống lạnh (chilled) hay nhiệt độ phòng (room temperature).",
        "memoryHook": "May I offer you = Lời mời trang trọng chuẩn 5 sao."
      },
      {
        "id": "u2-e4",
        "type": "fill_blank",
        "promptEn": "Select the precise professional term to complete the sentence:",
        "promptVi": "Chọn từ chính xác để hoàn thành câu tiếp đón:",
        "englishSentence": "Please make yourself [ _____ ] while I serve our premium mineral water.",
        "audioText": "Please make yourself comfortable while I serve our premium mineral water.",
        "blankWord": "comfortable",
        "options": [
          "comfortable",
          "convenient",
          "manageable"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Xin hãy cứ tự nhiên thoải mái trong khi tôi phục vụ nước khoáng cao cấp nhé.",
        "explanation": "\"Make yourself comfortable\" là thành ngữ kinh điển trong văn hóa hiếu khách.",
        "whyWrong": "\"Convenient\" (tiện lợi) hay \"manageable\" (có thể kiểm soát) không đi với \"make yourself\".",
        "crucialNote": "Tạo không khí thư giãn giúp đối tác cảm thấy được quan tâm chân thành.",
        "memoryHook": "Make yourself comfortable = Cứ tự nhiên như ở nhà."
      },
      {
        "id": "u2-e5",
        "type": "chat_branch",
        "promptEn": "Choose the best diplomatic response to the guest comment:",
        "promptVi": "Mô phỏng tin nhắn Teams: Khách vừa đi chuyến bay dài mệt mỏi, hãy phản hồi chu đáo:",
        "englishSentence": "Please relax, sir! Let me serve you a cold bottle of Vikoda pH 9.0 mineral water to rehydrate immediately.",
        "audioText": "Please relax, sir! Let me serve you a cold bottle of Vikoda pH 9.0 mineral water to rehydrate immediately.",
        "chatMessages": [
          {
            "speaker": "Mr. Kenji (Tokyo Beverage Buyer)",
            "avatar": "🇯🇵",
            "message": "It was quite a long flight from Tokyo. The Cam Ranh weather is rather warm today."
          }
        ],
        "chatOptions": [
          {
            "text": "Please relax, sir! Let me serve you a cold bottle of Vikoda pH 9.0 mineral water to rehydrate immediately.",
            "trustScore": 25,
            "feedback": "Tuyệt hảo! Thấu cảm sự mệt mỏi của khách và giới thiệu ngay nước kiềm pH 9.0 giúp bù khoáng tức thì.",
            "isCorrect": true
          },
          {
            "text": "Yes, Vietnam weather is very hot and humid. You should drink any water nearby.",
            "trustScore": 0,
            "feedback": "Phản hồi chung chung, không làm nổi bật được giá trị giải khát bù khoáng của Vikoda.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Xin ngài hãy thư giãn! Để tôi mời ngài một chai nước khoáng kiềm Vikoda pH 9.0 mát lạnh để bù khoáng tức thì ạ.",
        "explanation": "Đồng cảm với khách và tận dụng cơ hội giới thiệu đặc tính bù nước kiềm tự nhiên của Vikoda.",
        "crucialNote": "Khách Nhật đánh giá rất cao sự chăm sóc tinh tế và chu đáo (Omotenashi).",
        "memoryHook": "Rehydrate with natural pH 9.0 mineral water."
      }
    ]
  },
  {
    "id": "unit-3",
    "unitNumber": 3,
    "title": "Chỉ Đường Cơ Bản Trong Tòa Nhà",
    "subtitle": "Hướng dẫn khách di chuyển lịch sự trong văn phòng",
    "level": "A1",
    "icon": "🧭",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u3-e1",
        "type": "match_pairs",
        "promptEn": "Match the office direction terms with their correct Vietnamese meanings:",
        "promptVi": "Ghép cặp thuật ngữ chỉ đường trong tòa nhà với nghĩa tiếng Việt:",
        "englishSentence": "Match the core building navigation terms.",
        "audioText": "Match the core building navigation terms.",
        "explanation": "5 cụm từ then chốt để hướng dẫn đối tác di chuyển tự tin trong tòa nhà Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng chỉ đường văn phòng.",
        "pairs": [
          {
            "left": "Reception desk",
            "right": "Bàn tiếp tân sảnh chính"
          },
          {
            "left": "Take the elevator",
            "right": "Đi bằng thang máy"
          },
          {
            "left": "Executive boardroom",
            "right": "Phòng họp ban giám đốc"
          },
          {
            "left": "Straight down the hallway",
            "right": "Đi thẳng hết hành lang"
          },
          {
            "left": "Restroom on the left",
            "right": "Nhà vệ sinh phía bên trái"
          }
        ]
      },
      {
        "id": "u3-e2",
        "type": "speak",
        "promptEn": "Speak this polite direction clearly into the microphone:",
        "promptVi": "Luyện nói câu hướng dẫn khách lên phòng họp hội đồng:",
        "englishSentence": "Please take the elevator to the third floor and turn right at the lobby.",
        "audioText": "Please take the elevator to the third floor and turn right at the lobby.",
        "phonetics": "/pliːz teɪk ðiː ˈɛlɪveɪtər tuː ðə θɜːrd flɔːr ænd tɜːrn raɪt æt ðə ˈlɒbi/",
        "vietnameseMeaning": "Xin vui lòng đi thang máy lên tầng 3 và rẽ phải ngay tại sảnh chờ.",
        "explanation": "Cấu trúc chỉ đường chuẩn: \"Please take the elevator to the [Tầng] and turn [Hướng] at the [Địa điểm]\".",
        "whyWrong": "Nhấn đúng trọng âm từ \"elevator\" (/ˈɛlɪveɪtər/) và bật rõ âm cuối /t/ trong \"right\".",
        "crucialNote": "Dùng bàn tay mở rộng hướng về phía thang máy, không dùng một ngón tay trỏ chỉ trỏ.",
        "memoryHook": "Take elevator + turn right = Lên tầng và rẽ phải lịch thiệp."
      },
      {
        "id": "u3-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to escort a guest to the conference room:",
        "promptVi": "Ghép câu: \"Xin hãy đi theo tôi và tôi sẽ dẫn bạn đến phòng họp chính\":",
        "englishSentence": "Please follow me and I will lead you to the conference room.",
        "audioText": "Please follow me and I will lead you to the conference room.",
        "wordPool": [
          "Please",
          "follow",
          "me",
          "and",
          "I",
          "will",
          "lead",
          "you",
          "to",
          "the",
          "conference",
          "room.",
          "corridor",
          "stay"
        ],
        "vietnameseMeaning": "Xin hãy đi theo tôi và tôi sẽ dẫn bạn đến phòng họp chính.",
        "explanation": "Lời đề nghị dẫn đường chu đáo và an tâm cho khách nước ngoài lần đầu đến thăm.",
        "whyWrong": "Dùng \"lead you to\" hoặc \"show you to\" mang tính hỗ trợ hiếu khách.",
        "crucialNote": "Đi phía trước chếch 45 độ, cách khách khoảng 1 đến 2 bước chân.",
        "memoryHook": "Follow me + lead you to the conference room."
      },
      {
        "id": "u3-e4",
        "type": "fill_blank",
        "promptEn": "Select the precise architectural term to complete the sentence:",
        "promptVi": "Chọn từ kiến trúc văn phòng chính xác để hoàn thành câu:",
        "englishSentence": "The executive lounge is located straight down the [ _____ ] on your right hand side.",
        "audioText": "The executive lounge is located straight down the corridor on your right hand side.",
        "blankWord": "corridor",
        "options": [
          "corridor",
          "highway",
          "pavement"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Phòng chờ điều hành nằm ở ngay cuối hành lang phía bên tay phải của bạn.",
        "explanation": "\"Corridor\" hoặc \"hallway\" là từ chuẩn quốc tế chỉ hành lang trong tòa nhà văn phòng.",
        "whyWrong": "\"Highway\" (đường cao tốc) và \"pavement\" (vỉa hè) thuộc không gian giao thông ngoài trời.",
        "crucialNote": "Thêm \"on your right hand side\" giúp người nghe dễ định hướng hơn hẳn.",
        "memoryHook": "Down the corridor = Dọc theo hành lang."
      },
      {
        "id": "u3-e5",
        "type": "chat_branch",
        "promptEn": "Respond politely to the foreign guest asking for directions on Teams:",
        "promptVi": "Mô phỏng tin nhắn Teams: Khách vừa bước ra khỏi thang máy và đang tìm phòng họp:",
        "englishSentence": "Welcome to the 3rd floor! I am standing right outside Meeting Room 3B to welcome you.",
        "audioText": "Welcome to the 3rd floor! I am standing right outside Meeting Room 3B to welcome you.",
        "chatMessages": [
          {
            "speaker": "Mr. Brian (Regional Distribution Partner)",
            "avatar": "🇦🇺",
            "message": "Hi Minh, I just got off the elevator on level 3. Which door is meeting room 3B?"
          }
        ],
        "chatOptions": [
          {
            "text": "Welcome to the 3rd floor! I am standing right outside Meeting Room 3B to welcome you.",
            "trustScore": 25,
            "feedback": "Tuyệt vời! Chủ động đứng chờ đón khách ngay cửa phòng họp tạo cảm giác được quan tâm cao nhất.",
            "isCorrect": true
          },
          {
            "text": "It is somewhere down the hall, just look at the door signs yourself.",
            "trustScore": 0,
            "feedback": "Cực kỳ thiếu chu đáo! Bắt đối tác tự mò mẫm tìm cửa phòng họp.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chào mừng ngài lên tầng 3! Tôi đang đứng ngay bên ngoài phòng họp 3B để đón ngài đây ạ.",
        "explanation": "Chủ động bước ra sảnh đón khách là tiêu chuẩn vàng của văn hóa hiếu khách doanh nghiệp.",
        "crucialNote": "Khách quốc tế luôn đánh giá cao nhân viên chờ đón sẵn tại điểm hẹn.",
        "memoryHook": "Standing right outside to welcome you = Đón khách tận cửa."
      }
    ]
  },
  {
    "id": "unit-4",
    "unitNumber": 4,
    "title": "Trực Điện Thoại & Nối Máy Lịch Sự",
    "subtitle": "Tiếp nhận cuộc gọi và xin giữ máy chờ chuyển tiếp",
    "level": "A1",
    "icon": "📞",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u4-e1",
        "type": "match_pairs",
        "promptEn": "Match the telephone handling terms with their correct meanings:",
        "promptVi": "Ghép cặp thuật ngữ trực điện thoại bàn với nghĩa tiếng Việt tương ứng:",
        "englishSentence": "Match essential telephone handling phrases.",
        "audioText": "Match essential telephone handling phrases.",
        "explanation": "Nắm vững 5 thuật ngữ trực tổng đài điện thoại chuẩn Oxford English.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng trực điện thoại công sở.",
        "pairs": [
          {
            "left": "Hold the line",
            "right": "Giữ máy chờ chuyển tiếp"
          },
          {
            "left": "Extension number",
            "right": "Số máy lẻ nội bộ"
          },
          {
            "left": "Put you through",
            "right": "Nối máy cho người gọi"
          },
          {
            "left": "Leave a message",
            "right": "Để lại lời nhắn"
          },
          {
            "left": "Return your call",
            "right": "Gọi điện thoại lại sau"
          }
        ]
      },
      {
        "id": "u4-e2",
        "type": "speak",
        "promptEn": "Speak this professional switchboard greeting clearly:",
        "promptVi": "Luyện nói câu chào trực tổng đài chuẩn mực của Vikoda:",
        "englishSentence": "Thank you for calling Vikoda Mineral Water, how may I direct your call?",
        "audioText": "Thank you for calling Vikoda Mineral Water, how may I direct your call?",
        "phonetics": "/θæŋk juː fɔːr ˈkɔːlɪŋ vɪˈkoʊdə ˈmɪnərəl ˈwɔːtər, haʊ meɪ aɪ daɪˈrɛkt jʊər kɔːl/",
        "vietnameseMeaning": "Cảm ơn quý khách đã gọi đến Nước khoáng Vikoda, tôi có thể chuyển máy tới bộ phận nào ạ?",
        "explanation": "Lời chào mở đầu kinh điển: Cảm ơn + Tên công ty + Câu hỏi phục vụ \"How may I direct your call?\".",
        "whyWrong": "Dùng \"direct your call\" thanh lịch và chuyên nghiệp hơn hẳn \"Who do you want?\".",
        "crucialNote": "Mỉm cười khi nói qua điện thoại giúp giọng nói trở nên ấm áp và truyền cảm.",
        "memoryHook": "Thank you for calling Vikoda + how may I direct your call."
      },
      {
        "id": "u4-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to politely put a caller on hold:",
        "promptVi": "Ghép câu: \"Bạn có thể vui lòng giữ máy trong khi tôi chuyển máy tới phòng kinh doanh không?\":",
        "englishSentence": "Could you please hold the line while I put you through to sales?",
        "audioText": "Could you please hold the line while I put you through to sales?",
        "wordPool": [
          "Could",
          "you",
          "please",
          "hold",
          "the",
          "line",
          "while",
          "I",
          "put",
          "you",
          "through",
          "to",
          "sales?",
          "hang",
          "drop"
        ],
        "vietnameseMeaning": "Bạn có thể vui lòng giữ máy trong khi tôi chuyển máy tới phòng kinh doanh không?",
        "explanation": "\"Hold the line\" và \"put you through to...\" là cụm động từ trực điện thoại tiêu chuẩn quốc tế.",
        "whyWrong": "Luôn xin phép khách trước khi đưa máy về trạng thái chờ (hold).",
        "crucialNote": "Không bấm chuyển máy đột ngột mà không báo trước cho người gọi.",
        "memoryHook": "Hold the line = Giữ máy chờ nối."
      },
      {
        "id": "u4-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct corporate term to take a telephone message:",
        "promptVi": "Chọn từ chính xác để tiếp nhận lời nhắn khi người nhận vắng mặt:",
        "englishSentence": "Ms. Lan is currently away from her [ _____ ], would you like to leave a message?",
        "audioText": "Ms. Lan is currently away from her desk, would you like to leave a message?",
        "blankWord": "desk",
        "options": [
          "desk",
          "shelf",
          "closet"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chị Lan hiện đang rời bàn làm việc, bạn có muốn để lại lời nhắn không?",
        "explanation": "\"Away from one's desk\" là thành ngữ công sở lịch thiệp khi nhân viên đang bận việc hoặc đi họp.",
        "whyWrong": "Không nói thẳng \"She went out\" hoặc \"She is not here\" gây cảm giác thiếu chuyên nghiệp.",
        "crucialNote": "Luôn chuẩn bị sẵn sổ và bút để ghi lại số điện thoại và nội dung lời nhắn.",
        "memoryHook": "Away from desk = Tạm rời bàn làm việc."
      },
      {
        "id": "u4-e5",
        "type": "chat_branch",
        "promptEn": "Handle an incoming partner inquiry via internal chat:",
        "promptVi": "Mô phỏng tin nhắn nội bộ: Khách VIP gọi tìm Giám đốc xuất khẩu nhưng đường dây đang bận:",
        "englishSentence": "Mr. James is on another line right now. May I take your phone number and have him call you back in 10 minutes?",
        "audioText": "Mr. James is on another line right now. May I take your phone number and have him call you back in 10 minutes?",
        "chatMessages": [
          {
            "speaker": "Switchboard Operator (Vikoda Reception)",
            "avatar": "📞",
            "message": "Minh, we have Mr. Tanaka from Marubeni Tokyo on line 2, asking for Mr. James, but James is in the quarterly audit."
          }
        ],
        "chatOptions": [
          {
            "text": "Mr. James is on another line right now. May I take your phone number and have him call you back in 10 minutes?",
            "trustScore": 25,
            "feedback": "Rất khéo léo! Bảo mật lý do họp nội bộ, hẹn thời gian gọi lại cụ thể giúp khách hoàn toàn yên tâm.",
            "isCorrect": true
          },
          {
            "text": "Just tell him to call back next week because our boss is extremely busy.",
            "trustScore": 0,
            "feedback": "Thô lỗ! Khiến đối tác chiến lược phật ý và có thể hủy bỏ thương vụ xuất khẩu.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Ông James hiện đang bận đường dây khác. Tôi có thể xin số điện thoại để ông ấy gọi lại cho ngài sau 10 phút được không?",
        "explanation": "Cách xử lý khôn ngoan khi cấp trên bận: cam kết thời gian liên hệ lại rõ ràng.",
        "crucialNote": "Ghi chép chính xác mã vùng và số máy của đối tác quốc tế.",
        "memoryHook": "Have him call you back in 10 minutes = Hẹn gọi lại nhanh chóng."
      }
    ]
  },
  {
    "id": "unit-5",
    "unitNumber": 5,
    "title": "Rủ Đi Ăn Trưa & Giao Lưu Đồng Nghiệp",
    "subtitle": "Cách rủ đồng nghiệp đi ăn trưa và trò chuyện thân mật",
    "level": "A1",
    "icon": "🍜",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u5-e1",
        "type": "match_pairs",
        "promptEn": "Match the lunch invitation and dining terms with their meanings:",
        "promptVi": "Ghép cặp từ vựng rủ đi ăn trưa và ẩm thực công sở:",
        "englishSentence": "Match workplace lunch and social dining terms.",
        "audioText": "Match workplace lunch and social dining terms.",
        "explanation": "5 thuật ngữ giao lưu ăn trưa gần gũi nhưng vẫn văn minh, lịch sự.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng giao lưu ăn trưa công sở.",
        "pairs": [
          {
            "left": "Grab a quick bite",
            "right": "Đi ăn nhẹ bữa trưa nhanh"
          },
          {
            "left": "Local specialty",
            "right": "Món ăn đặc sản địa phương"
          },
          {
            "left": "Split the bill",
            "right": "Chia đều tiền thanh toán hóa đơn"
          },
          {
            "left": "Dietary preference",
            "right": "Khẩu vị ăn kiêng đặc biệt"
          },
          {
            "left": "Lunch is on me",
            "right": "Bữa trưa hôm nay tôi mời"
          }
        ]
      },
      {
        "id": "u5-e2",
        "type": "speak",
        "promptEn": "Speak this friendly lunch invitation clearly:",
        "promptVi": "Luyện nói câu rủ đồng nghiệp đi ăn trưa cùng đội ngũ:",
        "englishSentence": "Would you like to join our team for lunch at the restaurant across the street?",
        "audioText": "Would you like to join our team for lunch at the restaurant across the street?",
        "phonetics": "/wʊd juː laɪk tuː dʒɔɪn ˈaʊər tiːm fɔːr lʌntʃ æt ðə ˈrɛstrɒnt əˈkrɒs ðə striːt/",
        "vietnameseMeaning": "Bạn có muốn cùng đội ngũ chúng tôi đi ăn trưa ở nhà hàng đối diện bên kia đường không?",
        "explanation": "\"Would you like to join our team for lunch...?\" là lời mời hòa đồng, cởi mở giúp người mới nhanh chóng hòa nhập.",
        "whyWrong": "Nối âm tự nhiên giữa \"join our\" (/dʒɔɪn ˈaʊər/) và \"across the\" (/əˈkrɒs ðə/).",
        "crucialNote": "Hỏi ý kiến khách trước về việc họ có quen ăn đồ cay hoặc hải sản hay không.",
        "memoryHook": "Would you like to join our team for lunch = Lời rủ ăn trưa thân thiện."
      },
      {
        "id": "u5-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to inquire about food allergies politely:",
        "promptVi": "Ghép câu: \"Bạn có bất kỳ yêu cầu ăn kiêng hay dị ứng thực phẩm nào không?\":",
        "englishSentence": "Do you have any dietary restrictions or food allergies?",
        "audioText": "Do you have any dietary restrictions or food allergies?",
        "wordPool": [
          "Do",
          "you",
          "have",
          "any",
          "dietary",
          "restrictions",
          "or",
          "food",
          "allergies?",
          "recipe",
          "spicy"
        ],
        "vietnameseMeaning": "Bạn có bất kỳ yêu cầu ăn kiêng hay dị ứng thực phẩm nào không?",
        "explanation": "Câu hỏi chu đáo trước khi chọn nhà hàng cho khách quốc tế (chay, kiêng thịt bò, hải sản).",
        "whyWrong": "\"Dietary restrictions\" là cụm danh từ trang trọng chỉ quy chuẩn ăn kiêng theo sức khỏe hoặc tôn giáo.",
        "crucialNote": "Tôn trọng tuyệt đối thói quen ăn uống của đối tác đa văn hóa.",
        "memoryHook": "Dietary restrictions or food allergies = Ăn kiêng hoặc dị ứng."
      },
      {
        "id": "u5-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct word to offer a welcoming meal:",
        "promptVi": "Chọn từ chính xác để thể hiện lòng hiếu khách chiêu đãi bữa trưa:",
        "englishSentence": "Please put your wallet away, today this welcoming lunch is on [ _____ ].",
        "audioText": "Please put your wallet away, today this welcoming lunch is on Vikoda.",
        "blankWord": "Vikoda",
        "options": [
          "Vikoda",
          "pocket",
          "schedule"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Xin hãy cất ví đi, hôm nay bữa trưa đón tiếp này là do Vikoda chiêu đãi.",
        "explanation": "\"Lunch is on [Tên]\" nghĩa là bữa trưa do ai đài thọ thanh toán.",
        "whyWrong": "Dùng \"on Vikoda\" thể hiện chính sách tiếp khách hiếu khách và hào phóng của công ty.",
        "crucialNote": "Cử chỉ ấm áp tạo nên sự gắn kết vượt trên mối quan hệ hợp đồng khô cứng.",
        "memoryHook": "Lunch is on Vikoda = Bữa trưa Vikoda mời."
      },
      {
        "id": "u5-e5",
        "type": "chat_branch",
        "promptEn": "Suggest lunch options to an international business guest on Slack:",
        "promptVi": "Mô phỏng tin nhắn Slack: Khách đối tác hỏi gợi ý món ăn trưa đặc sắc tại Diên Khánh / Nha Trang:",
        "englishSentence": "We can try authentic Khanh Hoa steamed rice rolls or fresh local seafood, paired with chilled Vikoda mineral water!",
        "audioText": "We can try authentic Khanh Hoa steamed rice rolls or fresh local seafood, paired with chilled Vikoda mineral water!",
        "chatMessages": [
          {
            "speaker": "Mr. Michael (Krones Equipment Specialist)",
            "avatar": "🇩🇪",
            "message": "Hey team, morning factory check is done! I am getting quite hungry. What is good around here?"
          }
        ],
        "chatOptions": [
          {
            "text": "We can try authentic Khanh Hoa steamed rice rolls or fresh local seafood, paired with chilled Vikoda mineral water!",
            "trustScore": 25,
            "feedback": "Rất hấp dẫn! Kết hợp niềm tự hào ẩm thực địa phương Khánh Hòa với nước khoáng kiềm thanh lọc mát lành.",
            "isCorrect": true
          },
          {
            "text": "There is a fast food burger shop near the highway if you don't like Vietnamese food.",
            "trustScore": 5,
            "feedback": "Kém đặc sắc! Đối tác quốc tế sang Việt Nam luôn muốn trải nghiệm ẩm thực bản địa chất lượng cao.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng ta có thể thử món bánh cuốn chả giò Khánh Hòa chính gốc hoặc hải sản tươi ngon, kết hợp cùng nước khoáng kiềm mát lạnh Vikoda!",
        "explanation": "Giới thiệu ẩm thực quê hương gắn liền với nước khoáng kiềm Đảnh Thạnh giúp nâng tầm văn hóa thương hiệu.",
        "crucialNote": "Chuyên gia kỹ thuật Đức rất thích khám phá đồ ăn truyền thống tươi sạch.",
        "memoryHook": "Local specialty paired with chilled Vikoda water."
      }
    ]
  },
  {
    "id": "unit-6",
    "unitNumber": 6,
    "title": "Nghệ Thuật Small Talk Nơi Công Sở",
    "subtitle": "Mở lời duyên dáng về thời tiết, thể thao và ngày cuối tuần",
    "level": "A1",
    "icon": "🌤️",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u6-e1",
        "type": "match_pairs",
        "promptEn": "Match the small talk phrases with their correct meanings:",
        "promptVi": "Ghép cặp mẫu câu trò chuyện xã giao (Small Talk) với nghĩa tiếng Việt:",
        "englishSentence": "Match polite workplace small talk phrases.",
        "audioText": "Match polite workplace small talk phrases.",
        "explanation": "Small talk là kỹ năng phá băng tối quan trọng trước khi bước vào bàn đàm phán chính thức.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng trò chuyện xã giao công sở.",
        "pairs": [
          {
            "left": "Break the ice",
            "right": "Phá băng tạo không khí thoải mái"
          },
          {
            "left": "How was your flight",
            "right": "Chuyến bay của bạn có thuận lợi không"
          },
          {
            "left": "Pleasant weather",
            "right": "Thời tiết đẹp trời dễ chịu"
          },
          {
            "left": "Heavy traffic",
            "right": "Tắc đường đông đúc xe cộ"
          },
          {
            "left": "Weekend getaway",
            "right": "Kỳ nghỉ ngắn ngày cuối tuần"
          }
        ]
      },
      {
        "id": "u6-e2",
        "type": "speak",
        "promptEn": "Speak this pleasant weather icebreaker clearly:",
        "promptVi": "Luyện nói câu mở đầu trò chuyện duyên dáng về thời tiết Nha Trang:",
        "englishSentence": "The weather in Nha Trang is wonderfully sunny and warm this week, isn't it?",
        "audioText": "The weather in Nha Trang is wonderfully sunny and warm this week, isn't it?",
        "phonetics": "/ðə ˈwɛðər ɪn ɲɑː ˈtræŋ ɪz ˈwʌndərfəli ˈsʌni ænd wɔːrm ðɪs wiːk, ˈɪzənt ɪt/",
        "vietnameseMeaning": "Thời tiết ở Nha Trang tuần này nắng ấm thật tuyệt vời phải không bạn?",
        "explanation": "Câu hỏi đuôi \"..., isn't it?\" khơi gợi sự đồng tình nhẹ nhàng và mở ra cuộc đối thoại tự nhiên.",
        "whyWrong": "Hạ giọng nhẹ ở đuôi \"isn't it?\" để thể hiện sự thân tình, không lên giọng quá gắt gao.",
        "crucialNote": "Thời tiết luôn là chủ đề an toàn và tích cực nhất trong văn hóa kinh doanh phương Tây.",
        "memoryHook": "Sunny and warm + isn't it? = Phá băng bằng thời tiết dễ chịu."
      },
      {
        "id": "u6-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to ask about a colleague's weekend:",
        "promptVi": "Ghép câu: \"Bạn đã có một kỳ nghỉ cuối tuần thư giãn và vui vẻ chứ?\":",
        "englishSentence": "Did you have a relaxing and productive weekend?",
        "audioText": "Did you have a relaxing and productive weekend?",
        "wordPool": [
          "Did",
          "you",
          "have",
          "a",
          "relaxing",
          "and",
          "productive",
          "weekend?",
          "work",
          "boring"
        ],
        "vietnameseMeaning": "Bạn đã có một kỳ nghỉ cuối tuần thư giãn và vui vẻ chứ?",
        "explanation": "Mẫu câu thăm hỏi đồng nghiệp vào sáng thứ Hai đầu tuần tạo năng lượng làm việc hứng khởi.",
        "whyWrong": "\"Relaxing\" (thư giãn) đi kèm \"productive\" (hiệu quả/bổ ích) là cặp từ rất được ưa chuộng nơi công sở.",
        "crucialNote": "Lắng nghe chân thành câu trả lời của đồng nghiệp thay vì chỉ hỏi lấy lệ.",
        "memoryHook": "Have a relaxing weekend = Cuối tuần thư giãn."
      },
      {
        "id": "u6-e4",
        "type": "fill_blank",
        "promptEn": "Select the appropriate diplomatic word to inquire about travel convenience:",
        "promptVi": "Chọn từ thích hợp để hỏi thăm xem đối tác tìm đường đến công ty có dễ dàng không:",
        "englishSentence": "Did you have any [ _____ ] finding our plant in Dien Khanh district?",
        "audioText": "Did you have any trouble finding our plant in Dien Khanh district?",
        "blankWord": "trouble",
        "options": [
          "trouble",
          "argument",
          "damage"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Ngài tìm đường về nhà máy chúng tôi ở huyện Diên Khánh có gặp khó khăn gì không?",
        "explanation": "\"Have any trouble doing something\" là mẫu câu hỏi thăm chu đáo khi khách tự di chuyển đến trụ sở.",
        "whyWrong": "\"Argument\" (tranh cãi) hay \"damage\" (thiệt hại) hoàn toàn không phù hợp ngữ cảnh chào đón.",
        "crucialNote": "Nếu khách bị lạc đường, hãy gửi lời thông cảm và chỉ ra mốc nhận diện dễ nhớ lần sau.",
        "memoryHook": "Have trouble finding = Gặp khó khăn khi tìm đường."
      },
      {
        "id": "u6-e5",
        "type": "chat_branch",
        "promptEn": "Engage in friendly small talk with a client before the scheduled call:",
        "promptVi": "Mô phỏng tin nhắn Teams: Đối tác vào phòng họp online sớm 5 phút, hãy trò chuyện tạo không khí:",
        "englishSentence": "Good morning Sarah! It is great connecting today. How are things going with your new office launch in Manila?",
        "audioText": "Good morning Sarah! It is great connecting today. How are things going with your new office launch in Manila?",
        "chatMessages": [
          {
            "speaker": "Sarah (Retail Chain Director, Philippines)",
            "avatar": "🇵🇭",
            "message": "Hello Vikoda team! Logged in a bit early. Looking forward to our distribution review."
          }
        ],
        "chatOptions": [
          {
            "text": "Good morning Sarah! It is great connecting today. How are things going with your new office launch in Manila?",
            "trustScore": 25,
            "feedback": "Cực kỳ tinh tế! Nhớ rõ cột mốc công việc của đối tác chứng tỏ bạn quan tâm sâu sắc tới mối quan hệ.",
            "isCorrect": true
          },
          {
            "text": "Hello Sarah, let's wait silently until exactly 10:00 AM for others to arrive.",
            "trustScore": 0,
            "feedback": "Cứng nhắc! Làm bầu không khí trở nên ngượng ngùng và xa cách.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chào buổi sáng Sarah! Rất vui được kết nối hôm nay. Tiến độ khai trương văn phòng mới tại Manila của bạn diễn ra suôn sẻ chứ?",
        "explanation": "Nhắc đến tin vui hoặc dự án mới của đối tác là tuyệt chiêu xây dựng niềm tin (Trust Score) cao nhất.",
        "crucialNote": "Tránh các chủ đề nhạy cảm như chính trị, tôn giáo hay đời tư cá nhân.",
        "memoryHook": "Ask about their success to win their heart."
      }
    ]
  },
  {
    "id": "unit-7",
    "unitNumber": 7,
    "title": "Nghi Thức Trao & Nhận Danh Thiếp",
    "subtitle": "Quy tắc 2 tay, đọc danh thiếp và mở lời liên lạc",
    "level": "A1",
    "icon": "💼",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u7-e1",
        "type": "match_pairs",
        "promptEn": "Match business card etiquette terms with their correct meanings:",
        "promptVi": "Ghép cặp thuật ngữ nghi thức danh thiếp kinh doanh quốc tế:",
        "englishSentence": "Match business card etiquette terms.",
        "audioText": "Match business card etiquette terms.",
        "explanation": "Nghi thức trao danh thiếp thể hiện sự tôn trọng và tính chuyên nghiệp của thương hiệu Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng trao nhận danh thiếp thương mại.",
        "pairs": [
          {
            "left": "Exchange business cards",
            "right": "Trao đổi danh thiếp làm quen"
          },
          {
            "left": "With both hands",
            "right": "Cầm bằng cả hai tay trang trọng"
          },
          {
            "left": "Read carefully",
            "right": "Đọc kỹ thông tin trên thẻ"
          },
          {
            "left": "Contact details",
            "right": "Thông tin liên lạc cá nhân"
          },
          {
            "left": "Keep in touch",
            "right": "Giữ liên lạc thường xuyên"
          }
        ]
      },
      {
        "id": "u7-e2",
        "type": "speak",
        "promptEn": "Speak this polite business card offering sentence:",
        "promptVi": "Luyện nói câu trao danh thiếp và mời kết nối liên lạc:",
        "englishSentence": "Here is my business card, please feel free to reach out to me anytime.",
        "audioText": "Here is my business card, please feel free to reach out to me anytime.",
        "phonetics": "/hɪər ɪz maɪ ˈbɪznɪs kɑːrd, pliːz fiːl friː tuː riːtʃ aʊt tuː miː ˈɛnitaɪm/",
        "vietnameseMeaning": "Đây là danh thiếp của tôi, xin cứ thoải mái liên hệ với tôi bất cứ lúc nào ạ.",
        "explanation": "\"Feel free to reach out to me anytime\" là câu kết thúc trao đổi danh thiếp rất tự nhiên và nhiệt huyết.",
        "whyWrong": "Phát âm chuẩn cụm \"reach out\" (/riːtʃ aʊt/) với âm /tʃ/ rõ ràng.",
        "crucialNote": "Đưa danh thiếp hướng mặt chữ thuận theo chiều mắt nhìn của đối tác.",
        "memoryHook": "Here is my business card + feel free to reach out."
      },
      {
        "id": "u7-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to compliment the partner's title on their card:",
        "promptVi": "Ghép câu: \"Thật là một vinh hạnh lớn khi được trao đổi danh thiếp cùng bạn hôm nay\":",
        "englishSentence": "It is an honor to exchange business cards with you today.",
        "audioText": "It is an honor to exchange business cards with you today.",
        "wordPool": [
          "It",
          "is",
          "an",
          "honor",
          "to",
          "exchange",
          "business",
          "cards",
          "with",
          "you",
          "today.",
          "forget",
          "pocket"
        ],
        "vietnameseMeaning": "Thật là một vinh hạnh lớn khi được trao đổi danh thiếp cùng bạn hôm nay.",
        "explanation": "Cách diễn đạt lịch sự nâng cao vị thế và sự trân trọng giữa hai bên.",
        "whyWrong": "\"An honor\" dùng mạo từ \"an\" vì \"honor\" bắt đầu bằng âm nguyên âm câm (/ˈɒnər/).",
        "crucialNote": "Dành 5-10 giây để đọc tên và chức danh trên danh thiếp trước khi đặt cẩn thận lên bàn họp.",
        "memoryHook": "It is an honor to exchange business cards."
      },
      {
        "id": "u7-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct respectful posture term for presenting a card:",
        "promptVi": "Chọn từ chính xác mô tả quy tắc trao danh thiếp chuẩn quốc tế:",
        "englishSentence": "In Asian business etiquette, you should always present your card using both [ _____ ].",
        "audioText": "In Asian business etiquette, you should always present your card using both hands.",
        "blankWord": "hands",
        "options": [
          "hands",
          "fingers",
          "elbows"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Trong văn hóa kinh doanh châu Á, bạn nên luôn trao danh thiếp bằng cả hai tay.",
        "explanation": "Quy tắc 2 tay thể hiện sự khiêm nhường, kính trọng đối tác đặc biệt tại Nhật Bản, Hàn Quốc và Việt Nam.",
        "whyWrong": "Dùng một tay đưa vội vàng bị coi là thiếu tôn trọng và cẩu thả.",
        "crucialNote": "Tuyệt đối không nhét danh thiếp vừa nhận vào túi quần sau hoặc viết vẽ lên mặt danh thiếp.",
        "memoryHook": "Both hands = Hai tay kính cẩn."
      },
      {
        "id": "u7-e5",
        "type": "chat_branch",
        "promptEn": "Follow up promptly after receiving an international executive's card:",
        "promptVi": "Mô phỏng tin nhắn sau cuộc gặp: Bạn nhận được danh thiếp của Giám đốc mua hàng chuỗi siêu thị:",
        "englishSentence": "Thank you for sharing your card today, Mr. Lee! I have saved your details and attached our Vikoda export catalog for your review.",
        "audioText": "Thank you for sharing your card today, Mr. Lee! I have saved your details and attached our Vikoda export catalog for your review.",
        "chatMessages": [
          {
            "speaker": "Mr. Lee (Procurement Director, Lotte Mart Korea)",
            "avatar": "🇰🇷",
            "message": "Pleasure meeting you at the booth today. Let's stay connected regarding alkaline water supply."
          }
        ],
        "chatOptions": [
          {
            "text": "Thank you for sharing your card today, Mr. Lee! I have saved your details and attached our Vikoda export catalog for your review.",
            "trustScore": 25,
            "feedback": "Phản hồi chuẩn mực! Follow-up ngay trong 24 giờ kèm tài liệu sản phẩm thể hiện sự nhạy bén thương mại.",
            "isCorrect": true
          },
          {
            "text": "Got it. I will contact you when I have free time next month.",
            "trustScore": 0,
            "feedback": "Chậm chạp và thiếu chuyên nghiệp! Sẽ làm nguội đi cơ hội xuất khẩu vào chuỗi siêu thị lớn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Cảm ơn ông Lee đã trao danh thiếp hôm nay! Tôi đã lưu thông tin của ngài và gửi kèm danh mục xuất khẩu Vikoda để ngài tham khảo ạ.",
        "explanation": "Nguyên tắc vàng sau khi nhận danh thiếp: Gửi email / tin nhắn cảm ơn và gửi tài liệu trong vòng 24 giờ.",
        "crucialNote": "Đính kèm bản PDF hồ sơ năng lực sắc nét.",
        "memoryHook": "Follow up within 24 hours to secure the deal."
      }
    ]
  },
  {
    "id": "unit-8",
    "unitNumber": 8,
    "title": "Chào Đón Khách Đến Thăm Văn Phòng",
    "subtitle": "Mẫu câu chào hỏi, mời khách ngồi và hỏi thăm đường đi",
    "level": "A1",
    "icon": "🏢",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u8-e1",
        "type": "match_pairs",
        "promptEn": "Match guest reception terms with their correct meanings:",
        "promptVi": "Ghép cặp từ vựng quy trình tiếp đón khách tại văn phòng công ty:",
        "englishSentence": "Match corporate visitor reception terms.",
        "audioText": "Match corporate visitor reception terms.",
        "explanation": "5 quy trình then chốt để đón tiếp khách trang trọng tại cổng và lễ tân Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng tiếp đón khách tại văn phòng.",
        "pairs": [
          {
            "left": "Visitor badge",
            "right": "Thẻ đeo dành cho khách vào thăm"
          },
          {
            "left": "Sign the guestbook",
            "right": "Ký sổ lưu niệm và đăng ký khách"
          },
          {
            "left": "Waiting lounge",
            "right": "Khu vực sảnh sofa ngồi chờ"
          },
          {
            "left": "Scheduled appointment",
            "right": "Cuộc hẹn đã lên lịch trước"
          },
          {
            "left": "Prompt arrival",
            "right": "Đến đúng giờ hẹn đã thống nhất"
          }
        ]
      },
      {
        "id": "u8-e2",
        "type": "speak",
        "promptEn": "Speak this warm office welcoming sentence:",
        "promptVi": "Luyện nói câu chào đón đối tác đến thăm văn phòng đại diện Vikoda:",
        "englishSentence": "Good morning! On behalf of Vikoda, we are delighted to welcome your delegation today.",
        "audioText": "Good morning! On behalf of Vikoda, we are delighted to welcome your delegation today.",
        "phonetics": "/ɡʊd ˈmɔːrnɪŋ! ɒn bɪˈhɑːf ɒv vɪˈkoʊdə, wiː ɑːr dɪˈlaɪtɪd tuː ˈwɛlkəm jʊər ˌdɛlɪˈɡeɪʃən təˈdeɪ/",
        "vietnameseMeaning": "Chào buổi sáng! Thay mặt Vikoda, chúng tôi rất vui mừng được chào đón phái đoàn của quý vị hôm nay.",
        "explanation": "\"On behalf of [Company], we are delighted to welcome...\" là câu ngoại giao trang trọng hàng đầu khi đón đoàn khách.",
        "whyWrong": "Nhấn đúng trọng âm từ \"delegation\" (/ˌdɛlɪˈɡeɪʃən/) và \"delighted\" (/dɪˈlaɪtɪd/).",
        "crucialNote": "Đứng thẳng người, mỉm cười và cúi chào nhẹ thể hiện sự hiếu khách đậm đà bản sắc Á Đông.",
        "memoryHook": "On behalf of Vikoda = Thay mặt cho toàn thể Vikoda."
      },
      {
        "id": "u8-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to assist the guest with their coat and luggage:",
        "promptVi": "Ghép câu: \"Tôi có thể hỗ trợ cất áo khoác và vali hành lý cho bạn được không?\":",
        "englishSentence": "May I take your jacket and store your luggage in our cloakroom?",
        "audioText": "May I take your jacket and store your luggage in our cloakroom?",
        "wordPool": [
          "May",
          "I",
          "take",
          "your",
          "jacket",
          "and",
          "store",
          "your",
          "luggage",
          "in",
          "our",
          "cloakroom?",
          "throw",
          "away"
        ],
        "vietnameseMeaning": "Tôi có thể hỗ trợ cất áo khoác và lưu giữ hành lý cho bạn trong phòng gửi đồ được không?",
        "explanation": "Sự săn sóc tỉ mỉ giúp khách rảnh tay, cảm thấy thoải mái và được trân trọng như thượng khách.",
        "whyWrong": "Dùng \"May I take...\" lịch sự hơn câu hỏi cộc lốc \"Give me your bag\".",
        "crucialNote": "Trao thẻ giữ đồ cho khách ngay sau khi cất hành lý.",
        "memoryHook": "Store your luggage in cloakroom = Cất hành lý chu đáo."
      },
      {
        "id": "u8-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct security term for office visitors:",
        "promptVi": "Chọn từ quy chuẩn an ninh văn phòng để hoàn thành câu:",
        "englishSentence": "Please sign the visitor register and keep this guest [ _____ ] visible at all times.",
        "audioText": "Please sign the visitor register and keep this guest badge visible at all times.",
        "blankWord": "badge",
        "options": [
          "badge",
          "coin",
          "ticket"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Xin vui lòng ký sổ đăng ký và luôn đeo thẻ khách ở vị trí dễ nhìn trong suốt chuyến thăm.",
        "explanation": "\"Guest badge\" hoặc \"visitor badge\" là thẻ an ninh quy định bắt buộc tại các nhà máy và văn phòng chuẩn quốc tế.",
        "whyWrong": "\"Coin\" (đồng xu) và \"ticket\" (vé xem phim/xe) không mang chức năng nhận diện an ninh công sở.",
        "crucialNote": "Giải thích nhẹ nhàng để khách hiểu đây là quy định an toàn chung của tập đoàn FIT / Vikoda.",
        "memoryHook": "Guest badge visible = Đeo thẻ khách dễ nhìn."
      },
      {
        "id": "u8-e5",
        "type": "chat_branch",
        "promptEn": "Handle a foreign partner arriving early at the reception area:",
        "promptVi": "Mô phỏng tin nhắn nội bộ: Khách đến sớm 20 phút so với giờ hẹn họp chính thức:",
        "englishSentence": "Our General Director is finalizing a call, so please relax in our VIP lounge with chilled Vikoda water while I notify him.",
        "audioText": "Our General Director is finalizing a call, so please relax in our VIP lounge with chilled Vikoda water while I notify him.",
        "chatMessages": [
          {
            "speaker": "Front Desk Receptionist",
            "avatar": "👩‍💼",
            "message": "Minh, Mr. Robert from European Beverage Forum has just arrived. The meeting is scheduled at 10:00 AM, but it is only 9:40 AM now."
          }
        ],
        "chatOptions": [
          {
            "text": "Our General Director is finalizing a call, so please relax in our VIP lounge with chilled Vikoda water while I notify him.",
            "trustScore": 25,
            "feedback": "Ứng xử xuất sắc! Đưa khách vào phòng VIP, mời nước mát lạnh và báo ngay cho lãnh đạo mà không để khách lúng túng.",
            "isCorrect": true
          },
          {
            "text": "Tell him he came too early and should wait outside the building until 10 sharp.",
            "trustScore": 0,
            "feedback": "Tối kỵ trong văn hóa kinh doanh! Khiến khách VIP cảm thấy bị xúc phạm.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Tổng Giám đốc chúng tôi đang kết thúc cuộc gọi, xin mời ngài thư giãn tại phòng VIP cùng nước khoáng mát lạnh Vikoda trong lúc tôi báo cáo ạ.",
        "explanation": "Biến thời gian chờ đợi thành trải nghiệm thư giãn đẳng cấp cùng sản phẩm nước khoáng kiềm Đảnh Thạnh.",
        "crucialNote": "Khách đến sớm là tín hiệu của sự tôn trọng, ta cần đón tiếp chu đáo tương xứng.",
        "memoryHook": "Relax in VIP lounge with chilled Vikoda water."
      }
    ]
  },
  {
    "id": "unit-9",
    "unitNumber": 9,
    "title": "Nhận Diện Dòng Chai Đơn Giản",
    "subtitle": "Tên gọi các loại chai PET 350ml, 500ml và bình 19L",
    "level": "A1",
    "icon": "🍶",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u9-e1",
        "type": "match_pairs",
        "promptEn": "Match Vikoda bottle portfolio sizes with their market uses:",
        "promptVi": "Ghép cặp các dòng dung tích chai Vikoda với mục đích sử dụng thực tế:",
        "englishSentence": "Match bottle sizes with market applications.",
        "audioText": "Match bottle sizes with market applications.",
        "explanation": "Hiểu rõ 5 dòng sản phẩm chủ lực để tư vấn chính xác cho người mua hàng B2B.",
        "vietnameseMeaning": "Ghép đúng 5 cặp quy cách dung tích sản phẩm Vikoda.",
        "pairs": [
          {
            "left": "Compact 350ml bottle",
            "right": "Chai nhỏ tiện lợi hội nghị và sự kiện"
          },
          {
            "left": "Standard 500ml PET",
            "right": "Chai tiêu chuẩn uống bù khoáng hàng ngày"
          },
          {
            "left": "Family size 1.5L",
            "right": "Chai lớn dung tích 1.5 lít dùng gia đình"
          },
          {
            "left": "Bulk 19-liter container",
            "right": "Bình lớn 19 lít đặt cây nước văn phòng"
          },
          {
            "left": "Tamper-evident cap",
            "right": "Nắp niêm phong chống mở trộm bảo vệ nguồn"
          }
        ]
      },
      {
        "id": "u9-e2",
        "type": "speak",
        "promptEn": "Speak this bottle portfolio overview clearly:",
        "promptVi": "Luyện nói câu giới thiệu các quy cách dung tích chai nước khoáng Vikoda:",
        "englishSentence": "Vikoda provides versatile packaging including 350ml, 500ml bottles and large 19-liter dispensers.",
        "audioText": "Vikoda provides versatile packaging including 350ml, 500ml bottles and large 19-liter dispensers.",
        "phonetics": "/vɪˈkoʊdə prəˈvaɪdz ˈvɜːrsətəl ˈpækɪdʒɪŋ ɪnˈkluːdɪŋ 350ml, 500ml ˈbɒtlz ænd lɑːrdʒ 19 ˈliːtər dɪˈspɛnsərz/",
        "vietnameseMeaning": "Vikoda cung cấp bao bì đa dạng gồm chai 350ml, 500ml và bình lớn 19 lít dùng cho cây nước.",
        "explanation": "\"Versatile packaging\" (bao bì đa dạng, linh hoạt) đáp ứng mọi nhu cầu từ cá nhân đến văn phòng doanh nghiệp.",
        "whyWrong": "Phát âm rõ ràng các con số dung tích: 350ml (/θriː ˈhʌndrəd ˈfɪfti ˈmɪlɪliːtərz/), 500ml (/faɪv ˈhʌndrəd/).",
        "crucialNote": "Chỉ tay vào mô hình mẫu chai thực tế khi thuyết minh cho đối tác.",
        "memoryHook": "Versatile packaging = Đa dạng quy cách đóng chai."
      },
      {
        "id": "u9-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to ask a hotel buyer about their preferred volume:",
        "promptVi": "Ghép câu: \"Dung tích chai nào phù hợp nhất với quầy minibar phòng khách sạn của bạn?\":",
        "englishSentence": "Which bottle size fits best for your hotel minibar?",
        "audioText": "Which bottle size fits best for your hotel minibar?",
        "wordPool": [
          "Which",
          "bottle",
          "size",
          "fits",
          "best",
          "for",
          "your",
          "hotel",
          "minibar?",
          "huge",
          "barrel"
        ],
        "vietnameseMeaning": "Dung tích chai nào phù hợp nhất với quầy minibar phòng khách sạn của bạn?",
        "explanation": "Câu hỏi gợi mở nhu cầu (Need Analysis) đặc thù của khách hàng phân khúc khách sạn 4-5 sao.",
        "whyWrong": "Dòng 350ml và chai thủy tinh là lựa chọn hàng đầu cho minibar sang trọng.",
        "crucialNote": "Nắm vững không gian minibar để tư vấn kích thước vừa vặn nhất.",
        "memoryHook": "Which bottle size fits best = Kích cỡ nào vừa vặn nhất."
      },
      {
        "id": "u9-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct industry term for corporate water dispensers:",
        "promptVi": "Chọn từ chính xác chỉ loại bình nước đặt trên cây nước nóng lạnh văn phòng:",
        "englishSentence": "Our 19-liter container is designed specifically for water [ _____ ] in commercial buildings.",
        "audioText": "Our 19-liter container is designed specifically for water dispensers in commercial buildings.",
        "blankWord": "dispensers",
        "options": [
          "dispensers",
          "boilers",
          "ovens"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Bình 19 lít của chúng tôi được thiết kế chuyên biệt cho cây nước uống tại các tòa nhà thương mại.",
        "explanation": "\"Water dispenser\" hoặc \"water cooler\" là thuật ngữ chuẩn quốc tế cho cây nước uống văn phòng.",
        "whyWrong": "\"Boilers\" (nồi hơi) và \"ovens\" (lò nướng) là thiết bị gia nhiệt nấu nướng công nghiệp.",
        "crucialNote": "Bình 19L Vikoda có quai xách chắc chắn và màng co tiệt trùng bảo vệ vòi rót.",
        "memoryHook": "Water dispensers = Cây nước nóng lạnh văn phòng."
      },
      {
        "id": "u9-e5",
        "type": "chat_branch",
        "promptEn": "Recommend the right packaging format to an airline catering manager on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Quản lý suất ăn hàng không muốn chọn chai nước khoáng nhẹ, vừa khay ăn tiếp viên:",
        "englishSentence": "The 350ml PET bottle is ideal for airline meal trays: compact, lightweight, and showcasing pure natural alkaline water.",
        "audioText": "The 350ml PET bottle is ideal for airline meal trays: compact, lightweight, and showcasing pure natural alkaline water.",
        "chatMessages": [
          {
            "speaker": "Captain Alan (Inflight Services, Regional Wings)",
            "avatar": "✈️",
            "message": "We need an elegant mineral water bottle that fits strict aircraft meal trolley weight and height limits."
          }
        ],
        "chatOptions": [
          {
            "text": "The 350ml PET bottle is ideal for airline meal trays: compact, lightweight, and showcasing pure natural alkaline water.",
            "trustScore": 25,
            "feedback": "Tư vấn quá chuẩn! Nắm rõ kích thước xe đẩy suất ăn máy bay và làm nổi bật tính tiện dụng của chai 350ml.",
            "isCorrect": true
          },
          {
            "text": "Why not buy our 1.5-liter family bottle? It gives passengers much more water.",
            "trustScore": 0,
            "feedback": "Thiếu hiểu biết ngành hàng không! Chai 1.5L không thể xếp vừa xe đẩy khay ăn tiếp viên.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chai PET 350ml là giải pháp lý tưởng cho khay ăn máy bay: nhỏ gọn, siêu nhẹ và tôn vinh nước khoáng kiềm thiên nhiên thuần khiết.",
        "explanation": "Tư vấn đúng quy cách kỹ thuật giúp chốt hợp đồng cung ứng suất ăn hàng không nhanh chóng.",
        "crucialNote": "Trọng lượng nhẹ giúp giảm tiêu hao nhiên liệu bay của hãng hàng không.",
        "memoryHook": "350ml compact format is ideal for inflight catering."
      }
    ]
  },
  {
    "id": "unit-10",
    "unitNumber": 10,
    "title": "Đếm Số Lượng Đơn Giản",
    "subtitle": "Đếm số chai trên bàn, đếm số thùng mẫu thực tế",
    "level": "A1",
    "icon": "📦",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u10-e1",
        "type": "match_pairs",
        "promptEn": "Match quantity and packaging measurement terms:",
        "promptVi": "Ghép cặp thuật ngữ đếm số lượng và đơn vị đóng gói hàng hóa:",
        "englishSentence": "Match packaging and inventory quantity terms.",
        "audioText": "Match packaging and inventory quantity terms.",
        "explanation": "5 đơn vị đếm cơ bản trong quản lý kho vận và giao dịch mua bán nước khoáng.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ đo lường số lượng sản phẩm.",
        "pairs": [
          {
            "left": "24 bottles per carton",
            "right": "24 chai trong mỗi thùng carton"
          },
          {
            "left": "Pallet load",
            "right": "Kiện hàng xếp chuẩn trên pallet"
          },
          {
            "left": "Sample case",
            "right": "Thùng hàng mẫu gửi thẩm định"
          },
          {
            "left": "Total quantity",
            "right": "Tổng số lượng đặt hàng"
          },
          {
            "left": "Minimum order quantity",
            "right": "Số lượng đặt hàng tối thiểu (MOQ)"
          }
        ]
      },
      {
        "id": "u10-e2",
        "type": "speak",
        "promptEn": "Speak this carton quantity statement clearly:",
        "promptVi": "Luyện nói câu mô tả số lượng chai đóng trong một thùng tiêu chuẩn:",
        "englishSentence": "Each standard export carton contains twenty-four bottles of five hundred milliliters.",
        "audioText": "Each standard export carton contains twenty-four bottles of five hundred milliliters.",
        "phonetics": "/iːtʃ ˈstændərd ˈɛkspɔːrt ˈkɑːrtən kənˈteɪnz ˈtwɛnti fɔːr ˈbɒtlz ɒv faɪv ˈhʌndrəd ˈmɪlɪliːtərz/",
        "vietnameseMeaning": "Mỗi thùng xuất khẩu tiêu chuẩn chứa hai mươi tư chai dung tích năm trăm mi-li-lít.",
        "explanation": "Mẫu câu quy cách chuẩn: \"Each [Loại thùng] contains [Số lượng] bottles of [Dung tích]\".",
        "whyWrong": "Phát âm rõ số đếm \"twenty-four\" (/ˈtwɛnti fɔːr/) và từ \"carton\" (/ˈkɑːrtən/).",
        "crucialNote": "Thông tin số chai/thùng là dữ liệu đầu vào cho tính toán logistics và cước container.",
        "memoryHook": "Each carton contains 24 bottles = Mỗi thùng 24 chai."
      },
      {
        "id": "u10-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to ask a client about their required volume:",
        "promptVi": "Ghép câu: \"Hôm nay quý công ty cần đặt bao nhiêu thùng nước khoáng thiên nhiên?\":",
        "englishSentence": "How many cartons of natural mineral water do you require today?",
        "audioText": "How many cartons of natural mineral water do you require today?",
        "wordPool": [
          "How",
          "many",
          "cartons",
          "of",
          "natural",
          "mineral",
          "water",
          "do",
          "you",
          "require",
          "today?",
          "liters",
          "much"
        ],
        "vietnameseMeaning": "Hôm nay quý công ty cần đặt bao nhiêu thùng nước khoáng thiên nhiên?",
        "explanation": "Dùng \"How many cartons...\" đối với danh từ đếm được (thùng), khác với \"How much water...\".",
        "whyWrong": "\"Require\" trang trọng và lịch thiệp hơn \"want\" trong thư từ và giao dịch thương mại.",
        "crucialNote": "Luôn kiểm tra tồn kho sẵn có trước khi xác nhận số lượng thùng giao ngay.",
        "memoryHook": "How many cartons do you require = Cần đặt bao nhiêu thùng."
      },
      {
        "id": "u10-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct logistics term for ready warehouse inventory:",
        "promptVi": "Chọn từ kho vận chính xác để xác nhận số lượng hàng có sẵn trong kho:",
        "englishSentence": "We have five hundred sample cases ready in our central [ _____ ] for inspection.",
        "audioText": "We have five hundred sample cases ready in our central warehouse for inspection.",
        "blankWord": "warehouse",
        "options": [
          "warehouse",
          "forest",
          "harbor"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chúng tôi có sẵn năm trăm thùng mẫu trong kho trung tâm để kiểm định.",
        "explanation": "\"Central warehouse\" là kho lưu trữ trung tâm của nhà máy sản xuất.",
        "whyWrong": "\"Forest\" (khu rừng) hay \"harbor\" (cảng biển) không phải là kho bãi lưu trữ hàng hóa hoàn thiện.",
        "crucialNote": "Kho trung tâm Vikoda được chứng nhận tiêu chuẩn vệ sinh an toàn thực phẩm HACCP / ISO 22000.",
        "memoryHook": "Central warehouse = Kho tổng trung tâm."
      },
      {
        "id": "u10-e5",
        "type": "chat_branch",
        "promptEn": "Confirm delivery quantity with a regional sports event organizer on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Ban tổ chức giải chạy marathon quốc tế hỏi đặt 1,000 thùng nước khoáng Vikoda:",
        "englishSentence": "Confirmed! We can deliver 1,000 cartons of 500ml Vikoda directly to the race finish line by Friday morning.",
        "audioText": "Confirmed! We can deliver 1,000 cartons of 500ml Vikoda directly to the race finish line by Friday morning.",
        "chatMessages": [
          {
            "speaker": "Event Director (Nha Trang International Marathon)",
            "avatar": "🏃",
            "message": "We have 8,000 runners this weekend and need 1,000 cartons of Vikoda 500ml at the stadium. Can you commit?"
          }
        ],
        "chatOptions": [
          {
            "text": "Confirmed! We can deliver 1,000 cartons of 500ml Vikoda directly to the race finish line by Friday morning.",
            "trustScore": 25,
            "feedback": "Phản hồi dứt khoát, chuyên nghiệp! Xác nhận số lượng, địa điểm và thời gian giao hàng chính xác giúp ban tổ chức hoàn toàn an tâm.",
            "isCorrect": true
          },
          {
            "text": "1,000 cartons is too heavy. Please send your runners to our factory to pick them up.",
            "trustScore": 0,
            "feedback": "Thiếu trách nhiệm nghiêm trọng! Làm mất khách hàng tài trợ sự kiện thể thao lớn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Xác nhận! Chúng tôi có thể giao 1.000 thùng Vikoda 500ml trực tiếp đến vạch đích trước sáng thứ Sáu ạ.",
        "explanation": "Cam kết năng lực cung ứng kịp thời cho các sự kiện thể thao quy mô hàng chục nghìn người.",
        "crucialNote": "Nước khoáng kiềm tự nhiên bù điện giải là thức uống số 1 cho các vận động viên marathon.",
        "memoryHook": "Confirm quantity and delivery deadline instantly."
      }
    ]
  },
  {
    "id": "unit-11",
    "unitNumber": 11,
    "title": "Đọc Giờ Giấc, Thứ Ngày Tháng",
    "subtitle": "Hỏi ngày giờ thuận tiện và xác nhận giờ hẹn",
    "level": "A1",
    "icon": "📅",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u11-e1",
        "type": "match_pairs",
        "promptEn": "Match time and scheduling terms with their meanings:",
        "promptVi": "Ghép cặp thuật ngữ giờ giấc và lịch hẹn công tác với nghĩa tiếng Việt:",
        "englishSentence": "Match corporate scheduling and time terms.",
        "audioText": "Match corporate scheduling and time terms.",
        "explanation": "5 cách diễn đạt thời gian chính xác trong thương mại quốc tế.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng giờ giấc và lịch làm việc.",
        "pairs": [
          {
            "left": "Quarter past nine",
            "right": "Chín giờ mười lăm phút (9:15)"
          },
          {
            "left": "Half past ten",
            "right": "Mười giờ ba mươi phút (10:30)"
          },
          {
            "left": "Confirm the schedule",
            "right": "Xác nhận lịch trình làm việc"
          },
          {
            "left": "Postpone until tomorrow",
            "right": "Dời lịch hẹn sang ngày mai"
          },
          {
            "left": "Time zone difference",
            "right": "Chênh lệch múi giờ quốc tế"
          }
        ]
      },
      {
        "id": "u11-e2",
        "type": "speak",
        "promptEn": "Speak this meeting schedule confirmation clearly:",
        "promptVi": "Luyện nói câu thông báo lịch kiểm tra dây chuyền sản xuất:",
        "englishSentence": "Our plant tour begins promptly at nine-thirty AM on Tuesday morning.",
        "audioText": "Our plant tour begins promptly at nine-thirty AM on Tuesday morning.",
        "phonetics": "/ˈaʊər plænt tʊər bɪˈɡɪnz ˈprɒmptli æt naɪn ˈθɜːrti eɪ ɛm ɒn ˈtjuːzdeɪ ˈmɔːrnɪŋ/",
        "vietnameseMeaning": "Chuyến tham quan nhà máy của chúng tôi bắt đầu chính xác vào lúc 9 giờ 30 sáng thứ Ba.",
        "explanation": "\"Begins promptly at [Giờ]\" nhấn mạnh tính đúng giờ và kỷ luật tác phong công nghiệp.",
        "whyWrong": "Dùng giới từ \"at\" đi với giờ giấc cụ thể và \"on\" đi với các thứ trong tuần (on Tuesday).",
        "crucialNote": "Tính chính xác đến từng phút tạo sự tin tưởng tuyệt đối với các chuyên gia kỹ thuật.",
        "memoryHook": "Promptly at nine-thirty AM on Tuesday = Đúng 9h30 sáng thứ Ba."
      },
      {
        "id": "u11-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to suggest rescheduling a discussion:",
        "promptVi": "Ghép câu: \"Chúng ta có thể dời cuộc họp kỹ thuật sang 2 giờ chiều nay được không?\":",
        "englishSentence": "Could we reschedule the technical meeting to two o'clock this afternoon?",
        "audioText": "Could we reschedule the technical meeting to two o'clock this afternoon?",
        "wordPool": [
          "Could",
          "we",
          "reschedule",
          "the",
          "technical",
          "meeting",
          "to",
          "two",
          "o'clock",
          "this",
          "afternoon?",
          "cancel",
          "late"
        ],
        "vietnameseMeaning": "Chúng ta có thể dời cuộc họp kỹ thuật sang 2 giờ chiều nay được không?",
        "explanation": "\"Could we reschedule [Sự kiện] to [Giờ]?\" là cách đề xuất đổi giờ linh hoạt và tôn trọng thời gian của đối tác.",
        "whyWrong": "Đổi lịch khéo léo giúp các bên có thêm thời gian chuẩn bị hồ sơ chu đáo.",
        "crucialNote": "Luôn nêu lý do chính đáng và xin lỗi vì sự bất tiện khi phải dời lịch.",
        "memoryHook": "Reschedule to two o'clock = Dời sang 2 giờ chiều."
      },
      {
        "id": "u11-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term to align international meeting hours:",
        "promptVi": "Chọn từ chính xác để đối chiếu múi giờ khi họp trực tuyến cùng đối tác nước ngoài:",
        "englishSentence": "Please confirm whether ten AM Singapore [ _____ ] is convenient for your board.",
        "audioText": "Please confirm whether ten AM Singapore time is convenient for your board.",
        "blankWord": "time",
        "options": [
          "time",
          "distance",
          "temperature"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Xin hãy xác nhận xem 10 giờ sáng theo giờ Singapore có thuận tiện cho ban giám đốc của ngài không.",
        "explanation": "Nêu rõ địa danh đi kèm \"time\" (Singapore time, Tokyo time, GMT+7) tránh nhầm lẫn chênh lệch múi giờ.",
        "whyWrong": "\"Distance\" (khoảng cách) hay \"temperature\" (nhiệt độ) không đo lường thời điểm họp hành.",
        "crucialNote": "Singapore nhanh hơn Việt Nam 1 tiếng (GMT+8 so với GMT+7).",
        "memoryHook": "Singapore time = Theo giờ Singapore."
      },
      {
        "id": "u11-e5",
        "type": "chat_branch",
        "promptEn": "Respond to a client requesting a meeting postponement on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Đối tác bị hoãn chuyến bay và xin lùi cuộc họp lại 1 tiếng:",
        "englishSentence": "No problem at all! We will gladly adjust our agenda and see you at eleven o'clock instead. Have a safe journey!",
        "audioText": "No problem at all! We will gladly adjust our agenda and see you at eleven o'clock instead. Have a safe journey!",
        "chatMessages": [
          {
            "speaker": "David (Export Consultant, Singapore)",
            "avatar": "🇸🇬",
            "message": "Hi Minh, my flight from Changi got delayed by 45 minutes. May we push our contract review from 10:00 to 11:00 AM?"
          }
        ],
        "chatOptions": [
          {
            "text": "No problem at all! We will gladly adjust our agenda and see you at eleven o'clock instead. Have a safe journey!",
            "trustScore": 25,
            "feedback": "Cực kỳ thấu hiểu và lịch thiệp! Linh hoạt điều chỉnh lịch trình giúp đối tác bớt căng thẳng khi bị trễ chuyến bay.",
            "isCorrect": true
          },
          {
            "text": "Our schedule is rigid. If you are late by 5 minutes, we will cancel the deal.",
            "trustScore": 0,
            "feedback": "Thái độ cực đoan và thiếu chuyên nghiệp! Sẽ phá hỏng mối quan hệ hợp tác dài hạn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Không có vấn đề gì cả! Chúng tôi rất sẵn lòng điều chỉnh lịch trình và hẹn gặp bạn lúc 11 giờ. Chúc bạn có chuyến bay an toàn!",
        "explanation": "Sự linh hoạt và tinh thần hỗ trợ đối tác trong hoàn cảnh bất khả kháng là nền tảng của quan hệ đối tác bền vững.",
        "crucialNote": "Chủ động dời phòng họp và thông báo cho các bên liên quan.",
        "memoryHook": "Adjust agenda with a warm smile."
      }
    ]
  },
  {
    "id": "unit-12",
    "unitNumber": 12,
    "title": "Phép Lịch Sự Trong Bữa Ăn Nhẹ",
    "subtitle": "Quy tắc mời đồ uống và cảm ơn khi dùng bữa cùng đồng nghiệp",
    "level": "A1",
    "icon": "☕",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u12-e1",
        "type": "match_pairs",
        "promptEn": "Match refreshment and dining etiquette terms with their meanings:",
        "promptVi": "Ghép cặp thuật ngữ phép lịch sự tiệc trà và đồ ăn nhẹ công sở:",
        "englishSentence": "Match corporate refreshment and tea break phrases.",
        "audioText": "Match corporate refreshment and tea break phrases.",
        "explanation": "5 phép xã giao thanh lịch trong giờ giải lao hội nghị và tiệc trà (Tea Break).",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng tiệc trà nhẹ và phép lịch sự bàn ăn.",
        "pairs": [
          {
            "left": "Help yourself",
            "right": "Xin cứ tự nhiên lấy dùng đồ ăn"
          },
          {
            "left": "After you, please",
            "right": "Xin mời ngài đi trước nhường lối"
          },
          {
            "left": "Light refreshments",
            "right": "Đồ ăn nhẹ và thức uống giải lao"
          },
          {
            "left": "Sparkling water",
            "right": "Nước khoáng có ga sảng khoái"
          },
          {
            "left": "Delicious pastry",
            "right": "Bánh ngọt khai vị ngon miệng"
          }
        ]
      },
      {
        "id": "u12-e2",
        "type": "speak",
        "promptEn": "Speak this generous refreshment offering sentence:",
        "promptVi": "Luyện nói câu mời khách dùng bánh ngọt và nước khoáng giải lao:",
        "englishSentence": "Please help yourself to fresh pastries, seasonal fruits and chilled Vikoda water.",
        "audioText": "Please help yourself to fresh pastries, seasonal fruits and chilled Vikoda water.",
        "phonetics": "/pliːz hɛlp jʊərˈsɛlf tuː frɛʃ ˈpeɪstriz, ˈsiːzənl fruːts ænd tʃɪld vɪˈkoʊdə ˈwɔːtər/",
        "vietnameseMeaning": "Xin cứ tự nhiên thưởng thức bánh ngọt tươi, trái cây theo mùa và nước khoáng mát lạnh Vikoda ạ.",
        "explanation": "\"Please help yourself to...\" là thành ngữ hiếu khách thân thiện và ấm áp nhất trong văn hóa tiệc đứng.",
        "whyWrong": "Nhấn đúng trọng âm của từ \"pastries\" (/ˈpeɪstriz/) và \"seasonal\" (/ˈsiːzənl/).",
        "crucialNote": "Bố trí quầy tiệc trà sạch sẽ, gọn gàng với ly thủy tinh và chai nước được lau khô ráo.",
        "memoryHook": "Help yourself to refreshments = Tự nhiên dùng tiệc nhẹ."
      },
      {
        "id": "u12-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to politely offer a beverage choice:",
        "promptVi": "Ghép câu: \"Bạn thích một ly trà xanh nóng hay một chai nước khoáng mát lạnh?\":",
        "englishSentence": "Would you prefer hot green tea or chilled mineral water?",
        "audioText": "Would you prefer hot green tea or chilled mineral water?",
        "wordPool": [
          "Would",
          "you",
          "prefer",
          "hot",
          "green",
          "tea",
          "or",
          "chilled",
          "mineral",
          "water?",
          "drink",
          "beer"
        ],
        "vietnameseMeaning": "Bạn thích một ly trà xanh nóng hay một chai nước khoáng mát lạnh?",
        "explanation": "\"Would you prefer [Món A] or [Món B]?\" là câu hỏi lựa chọn đồ uống trang nhã chuẩn mực.",
        "whyWrong": "\"Prefer\" thể hiện sự tôn trọng khẩu vị riêng của từng vị khách.",
        "crucialNote": "Chuẩn bị sẵn cả hai phương án đồ uống nóng và lạnh.",
        "memoryHook": "Would you prefer A or B = Bạn thích dùng món nào hơn."
      },
      {
        "id": "u12-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct polite idiom to let a guest go first:",
        "promptVi": "Chọn thành ngữ lịch thiệp để nhường khách bước lên lấy đồ ăn trước:",
        "englishSentence": "\"After [ _____ ], please!\" said the host with a gentle hand gesture.",
        "audioText": "\"After you, please!\" said the host with a gentle hand gesture.",
        "blankWord": "you",
        "options": [
          "you",
          "them",
          "us"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "\"Xin mời ngài đi trước!\" người chủ nhà nói kèm theo cử chỉ tay nhã nhặn.",
        "explanation": "\"After you, please!\" là quy tắc vàng khi đứng trước cửa thang máy hoặc quầy buffet tiếp khách.",
        "whyWrong": "Không chen lấn lấy đồ ăn trước khách trong bất kỳ hoàn cảnh nào.",
        "crucialNote": "Cử chỉ mở lòng bàn tay hướng về phía trước thể hiện phong thái đĩnh đạc, khiêm nhường.",
        "memoryHook": "After you, please = Mời ngài đi trước."
      },
      {
        "id": "u12-e5",
        "type": "chat_branch",
        "promptEn": "Compliment the host on thoughtful catering preparations:",
        "promptVi": "Mô phỏng tin nhắn: Khách nước ngoài bày tỏ sự ấn tượng về quầy tiệc nhẹ chu đáo của Vikoda:",
        "englishSentence": "We are truly glad you enjoyed our hospitality! The Danh Thanh mineral water is known to aid digestion naturally.",
        "audioText": "We are truly glad you enjoyed our hospitality! The Danh Thanh mineral water is known to aid digestion naturally.",
        "chatMessages": [
          {
            "speaker": "Mr. Kenji (Tokyo Food & Beverage Director)",
            "avatar": "🇯🇵",
            "message": "The tea break was wonderful! I especially enjoyed pairing the local sweet cakes with your smooth alkaline mineral water."
          }
        ],
        "chatOptions": [
          {
            "text": "We are truly glad you enjoyed our hospitality! The Danh Thanh mineral water is known to aid digestion naturally.",
            "trustScore": 25,
            "feedback": "Phản hồi vô cùng duyên dáng! Vừa cảm ơn lòng khen ngợi vừa khéo léo giới thiệu công dụng hỗ trợ tiêu hóa tự nhiên của nước khoáng Đảnh Thạnh.",
            "isCorrect": true
          },
          {
            "text": "Yes, we spent a lot of company money on those cakes.",
            "trustScore": 0,
            "feedback": "Kém sang trọng! Kể lể chi phí làm giảm giá trị sự hiếu khách.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi thực sự rất vui vì ngài hài lòng với sự đón tiếp! Nước khoáng Đảnh Thạnh được biết đến với công dụng hỗ trợ tiêu hóa rất tốt ạ.",
        "explanation": "Kết hợp lời cảm ơn và lợi ích sức khỏe của sản phẩm (hỗ trợ tiêu hóa, kiềm hóa dạ dày).",
        "crucialNote": "Khách Nhật đặc biệt yêu thích các sản phẩm tốt cho sức khỏe đường tiêu hóa.",
        "memoryHook": "Aid digestion naturally = Hỗ trợ tiêu hóa tự nhiên."
      }
    ]
  },
  {
    "id": "unit-13",
    "unitNumber": 13,
    "title": "Đặt Bàn Ăn & Khách Sạn Cho Khách",
    "subtitle": "Hỗ trợ đặt chỗ ăn ở chu đáo cho đối tác nước ngoài",
    "level": "A1",
    "icon": "🏨",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u13-e1",
        "type": "match_pairs",
        "promptEn": "Match hotel and table booking terms with their meanings:",
        "promptVi": "Ghép cặp từ vựng đặt phòng khách sạn và bàn ăn nhà hàng cho khách VIP:",
        "englishSentence": "Match hospitality reservation and accommodation terms.",
        "audioText": "Match hospitality reservation and accommodation terms.",
        "explanation": "5 thuật ngữ thiết yếu khi hỗ trợ hậu cần ăn ở chu đáo cho đối tác quốc tế.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng đặt chỗ lưu trú và nhà hàng.",
        "pairs": [
          {
            "left": "Reserve a table",
            "right": "Đặt trước bàn ăn tại nhà hàng"
          },
          {
            "left": "Non-smoking room",
            "right": "Phòng khách sạn không hút thuốc lá"
          },
          {
            "left": "Airport shuttle service",
            "right": "Dịch vụ xe đưa đón sân bay tận nơi"
          },
          {
            "left": "Special dietary requests",
            "right": "Yêu cầu thực đơn món ăn đặc biệt"
          },
          {
            "left": "Booking confirmation",
            "right": "Mã số xác nhận đặt phòng thành công"
          }
        ]
      },
      {
        "id": "u13-e2",
        "type": "speak",
        "promptEn": "Speak this hotel booking request clearly into the microphone:",
        "promptVi": "Luyện nói câu đặt phòng khách sạn cao cấp hướng biển cho đối tác:",
        "englishSentence": "I would like to reserve a deluxe non-smoking room with sea view for our guest.",
        "audioText": "I would like to reserve a deluxe non-smoking room with sea view for our guest.",
        "phonetics": "/aɪ wʊd laɪk tuː rɪˈzɜːrv ə dɪˈlʌks nɒn ˈsmoʊkɪŋ ruːm wɪð siː vjuː fɔːr ˈaʊər ɡɛst/",
        "vietnameseMeaning": "Tôi muốn đặt một phòng hạng sang không hút thuốc có ban công nhìn ra biển cho khách của chúng tôi.",
        "explanation": "\"I would like to reserve a deluxe [Loại phòng]...\" là mẫu câu đặt phòng chuẩn mực của các trợ lý văn phòng cao cấp.",
        "whyWrong": "Phát âm chuẩn từ \"deluxe\" (/dɪˈlʌks/) và nối âm \"sea view\" (/siː vjuː/).",
        "crucialNote": "Luôn yêu cầu xác nhận phòng không mùi thuốc lá và yên tĩnh cho khách sau chặng bay dài.",
        "memoryHook": "Reserve a deluxe room with sea view = Đặt phòng hạng sang view biển."
      },
      {
        "id": "u13-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to reserve a quiet dinner table:",
        "promptVi": "Ghép câu: \"Chúng tôi muốn đặt một bàn ăn yên tĩnh cho bốn người vào lúc 7 giờ tối nay\":",
        "englishSentence": "We would like to book a quiet table for four guests at seven PM tonight.",
        "audioText": "We would like to book a quiet table for four guests at seven PM tonight.",
        "wordPool": [
          "We",
          "would",
          "like",
          "to",
          "book",
          "a",
          "quiet",
          "table",
          "for",
          "four",
          "guests",
          "at",
          "seven",
          "PM",
          "tonight.",
          "loud",
          "noisy"
        ],
        "vietnameseMeaning": "Chúng tôi muốn đặt một bàn ăn yên tĩnh cho bốn người vào lúc 7 giờ tối nay.",
        "explanation": "Đặc tả \"quiet table\" (bàn yên tĩnh) là yếu tố quan trọng để trao đổi công việc kinh doanh trong bữa tối.",
        "whyWrong": "Tránh các vị trí gần lối đi chính hoặc dàn loa âm thanh lớn.",
        "crucialNote": "Đặt trước giúp tránh tình trạng hết bàn vào mùa cao điểm du lịch Nha Trang.",
        "memoryHook": "Book a quiet table for four = Đặt bàn yên tĩnh cho 4 người."
      },
      {
        "id": "u13-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct hospitality term for checking guest room confirmation:",
        "promptVi": "Chọn từ chính xác để gửi mã xác nhận đặt phòng cho đối tác:",
        "englishSentence": "I have sent the hotel booking [ _____ ] and airport pickup schedule to your email.",
        "audioText": "I have sent the hotel booking confirmation and airport pickup schedule to your email.",
        "blankWord": "confirmation",
        "options": [
          "confirmation",
          "complaint",
          "punishment"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Tôi đã gửi phiếu xác nhận đặt phòng khách sạn và lịch đón sân bay vào hòm thư điện tử của bạn.",
        "explanation": "\"Booking confirmation\" là chứng từ điện tử xác nhận phòng đã thanh toán và giữ chỗ thành công.",
        "whyWrong": "\"Complaint\" (khiếu nại) hay \"punishment\" (hình phạt) mang ý nghĩa tiêu cực hoàn toàn sai ngữ cảnh.",
        "crucialNote": "Đính kèm số điện thoại tài xế đón để khách dễ dàng liên lạc khi hạ cánh.",
        "memoryHook": "Booking confirmation = Xác nhận đặt phòng."
      },
      {
        "id": "u13-e5",
        "type": "chat_branch",
        "promptEn": "Confirm arrival arrangements with an incoming European partner on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Đối tác Châu Âu vừa nhận được email hành trình và cảm ơn đội ngũ hậu cần:",
        "englishSentence": "You are very welcome! Your room at the Sheraton is ready, stocked with Vikoda glass bottles, and our driver will meet you at the airport.",
        "audioText": "You are very welcome! Your room at the Sheraton is ready, stocked with Vikoda glass bottles, and our driver will meet you at the airport.",
        "chatMessages": [
          {
            "speaker": "Marc (Export Partner, Paris)",
            "avatar": "🇫🇷",
            "message": "Thanks Minh for the hotel voucher. Really appreciate your team arranging the seaside hotel."
          }
        ],
        "chatOptions": [
          {
            "text": "You are very welcome! Your room at the Sheraton is ready, stocked with Vikoda glass bottles, and our driver will meet you at the airport.",
            "trustScore": 25,
            "feedback": "Hậu cần 5 sao! Bố trí sẵn chai thủy tinh Vikoda trong phòng tạo ấn tượng thương hiệu đẳng cấp ngay từ giây phút đầu tiên.",
            "isCorrect": true
          },
          {
            "text": "Just pay the hotel bill yourself when you checkout, our company doesn't cover minibar.",
            "trustScore": 0,
            "feedback": "Cộc lốc và nhỏ nhen! Khiến đối tác cảm thấy không được chào đón nhiệt thành.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Không có chi ạ! Phòng của bạn tại khách sạn Sheraton đã sẵn sàng, được trang bị sẵn nước khoáng chai thủy tinh Vikoda, và tài xế của chúng tôi sẽ đón bạn tại sân bay.",
        "explanation": "Chăm sóc trải nghiệm của đối tác từ phòng khách sạn đến phương tiện di chuyển thể hiện tầm vóc chuyên nghiệp.",
        "crucialNote": "Sản phẩm chai thủy tinh Vikoda là biểu tượng sang trọng trong các khu nghỉ dưỡng 5 sao.",
        "memoryHook": "Stocked with Vikoda glass bottles = Đặt sẵn chai thủy tinh cao cấp."
      }
    ]
  },
  {
    "id": "unit-14",
    "unitNumber": 14,
    "title": "Chỉ Đường Từ Sân Bay Đến Khách Sạn",
    "subtitle": "Chỉ hướng rẽ, khoảng cách km và phương tiện di chuyển",
    "level": "A1",
    "icon": "🛣️",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u14-e1",
        "type": "match_pairs",
        "promptEn": "Match airport transfer and navigation terms with their meanings:",
        "promptVi": "Ghép cặp từ vựng đưa đón sân bay và chỉ dẫn lộ trình giao thông:",
        "englishSentence": "Match airport navigation and travel distance terms.",
        "audioText": "Match airport navigation and travel distance terms.",
        "explanation": "5 thuật ngữ quan trọng để mô tả lộ trình từ Sân bay Quốc tế Cam Ranh về trung tâm.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng chỉ đường từ sân bay về khách sạn.",
        "pairs": [
          {
            "left": "Arrival gate",
            "right": "Cổng ra sảnh đón tại nhà ga sân bay"
          },
          {
            "left": "Holding a welcome sign",
            "right": "Cầm biển tên đón khách chu đáo"
          },
          {
            "left": "Scenic coastal road",
            "right": "Cung đường ven biển tuyệt đẹp"
          },
          {
            "left": "Approximate travel time",
            "right": "Thời gian di chuyển ước tính"
          },
          {
            "left": "Traffic condition",
            "right": "Mật độ và tình trạng giao thông"
          }
        ]
      },
      {
        "id": "u14-e2",
        "type": "speak",
        "promptEn": "Speak this travel time description clearly:",
        "promptVi": "Luyện nói câu thông báo thời gian di chuyển từ sân bay Cam Ranh về khách sạn:",
        "englishSentence": "The scenic drive from Cam Ranh Airport to downtown Nha Trang takes about forty-five minutes.",
        "audioText": "The scenic drive from Cam Ranh Airport to downtown Nha Trang takes about forty-five minutes.",
        "phonetics": "/ðə ˈsiːnɪk draɪv frɒm kɑːm ræɲ ˈɛərpɔːrt tuː ˈdaʊntaʊn ɲɑː ˈtræŋ teɪks əˈbaʊt ˈfɔːrti faɪv ˈmɪnɪts/",
        "vietnameseMeaning": "Chặng đường ven biển tuyệt đẹp từ Sân bay Cam Ranh về trung tâm Nha Trang mất khoảng 45 phút.",
        "explanation": "\"The scenic drive from [A] to [B] takes about [Thời gian]\" là cách giới thiệu hào hứng và đầy sức hút du lịch.",
        "whyWrong": "Dùng từ \"scenic\" (/ˈsiːnɪk/ - cảnh đẹp như tranh) để biến thời gian di chuyển thành một trải nghiệm ngắm cảnh thư giãn.",
        "crucialNote": "Đoạn đèo Cù Hin nhìn ra vịnh Nha Trang là một trong những cung đường ven biển đẹp nhất Việt Nam.",
        "memoryHook": "Scenic drive takes about 45 minutes = Cung đường cảnh đẹp mất 45 phút."
      },
      {
        "id": "u14-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to locate the company driver at the terminal:",
        "promptVi": "Ghép câu: \"Tài xế của chúng tôi sẽ đứng chờ bạn tại sảnh đến cầm biển đón Vikoda\":",
        "englishSentence": "Our company driver will wait at the arrival hall holding a Vikoda welcome sign.",
        "audioText": "Our company driver will wait at the arrival hall holding a Vikoda welcome sign.",
        "wordPool": [
          "Our",
          "company",
          "driver",
          "will",
          "wait",
          "at",
          "the",
          "arrival",
          "hall",
          "holding",
          "a",
          "Vikoda",
          "welcome",
          "sign.",
          "lost",
          "sleep"
        ],
        "vietnameseMeaning": "Tài xế của chúng tôi sẽ đứng chờ bạn tại sảnh đến cầm biển đón Vikoda.",
        "explanation": "Giúp khách quốc tế nhận diện người đón ngay khi vừa bước qua cửa hải quan sân bay.",
        "whyWrong": "Vị trí tại \"arrival hall\" (sảnh đến) là điểm hẹn chuẩn xác nhất.",
        "crucialNote": "In logo Vikoda to, rõ nét cùng tên đầy đủ của vị khách trên bảng đón.",
        "memoryHook": "Holding a welcome sign = Cầm biển đón khách."
      },
      {
        "id": "u14-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term to describe the airport facility:",
        "promptVi": "Chọn từ chính xác chỉ nhà ga đón khách tại sân bay:",
        "englishSentence": "Please exit through Gate 4 of the international [ _____ ] where our car is parked.",
        "audioText": "Please exit through Gate 4 of the international terminal where our car is parked.",
        "blankWord": "terminal",
        "options": [
          "terminal",
          "runway",
          "hangar"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Xin vui lòng đi ra qua Cổng số 4 của nhà ga quốc tế nơi xe chúng tôi đang đỗ chờ sẵn.",
        "explanation": "\"Terminal\" là nhà ga hành khách sân bay.",
        "whyWrong": "\"Runway\" là đường băng cất hạ cánh và \"hangar\" là nhà chứa máy bay, hành khách không được phép vào.",
        "crucialNote": "Sân bay Cam Ranh có Nhà ga T1 (Quốc nội) và T2 (Quốc tế), cần xác định đúng chuyến bay của khách.",
        "memoryHook": "International terminal = Nhà ga quốc tế."
      },
      {
        "id": "u14-e5",
        "type": "chat_branch",
        "promptEn": "Guide a landed foreign executive via real-time WhatsApp chat:",
        "promptVi": "Mô phỏng tin nhắn: Máy bay vừa hạ cánh, đối tác nhắn tin thông báo đã lấy xong hành lý:",
        "englishSentence": "Welcome to Cam Ranh! Driver Nguyen is standing right outside Column 5 in a white uniform holding your name board.",
        "audioText": "Welcome to Cam Ranh! Driver Nguyen is standing right outside Column 5 in a white uniform holding your name board.",
        "chatMessages": [
          {
            "speaker": "Arthur (Beverage Importer, Australia)",
            "avatar": "🇦🇺",
            "message": "Minh, flight VN1344 has landed! Just picked up my suitcases at carousel 2. Coming out now."
          }
        ],
        "chatOptions": [
          {
            "text": "Welcome to Cam Ranh! Driver Nguyen is standing right outside Column 5 in a white uniform holding your name board.",
            "trustScore": 25,
            "feedback": "Chỉ dẫn chi tiết hoàn hảo! Xác định chính xác vị trí số cột (Column 5) và trang phục tài xế giúp khách tìm thấy xe trong tích tắc.",
            "isCorrect": true
          },
          {
            "text": "Okay, just walk around outside and look for a car with Vikoda written on it.",
            "trustScore": 5,
            "feedback": "Mơ hồ! Sân bay rất đông xe và người, khách sẽ phải kéo vali đi tìm rất mệt mỏi.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chào mừng ngài đến Cam Ranh! Tài xế Nguyên đang đứng ngay bên ngoài Cột số 5 trong đồng phục trắng cầm bảng tên của ngài ạ.",
        "explanation": "Chỉ rõ vị trí cột sảnh đón (Column number) là tuyệt chiêu đón sân bay nhanh nhất thế giới.",
        "crucialNote": "Chuẩn bị sẵn khăn lạnh và nước khoáng Vikoda mát lạnh trên xe đón.",
        "memoryHook": "Outside Column 5 with your name board."
      }
    ]
  },
  {
    "id": "unit-15",
    "unitNumber": 15,
    "title": "Nhận Diện Màu Sắc & Logo Nhãn Chai",
    "subtitle": "Nhận diện màu xanh Cyan và biểu tượng thương hiệu",
    "level": "A1",
    "icon": "🎨",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u15-e1",
        "type": "match_pairs",
        "promptEn": "Match Vikoda brand identity terms with their symbolic meanings:",
        "promptVi": "Ghép cặp các yếu tố nhận diện thương hiệu Vikoda với ý nghĩa biểu tượng:",
        "englishSentence": "Match brand design and identity elements.",
        "audioText": "Match brand design and identity elements.",
        "explanation": "5 biểu tượng cốt lõi tạo nên bản sắc độc bản của thương hiệu Nước khoáng Đảnh Thạnh Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp yếu tố nhận diện hình ảnh thương hiệu Vikoda.",
        "pairs": [
          {
            "left": "Cyan blue signature",
            "right": "Màu xanh lục lam thanh khiết đặc trưng"
          },
          {
            "left": "Pristine drop emblem",
            "right": "Biểu tượng giọt ngọc khoáng tinh khiết"
          },
          {
            "left": "Heritage since 1957",
            "right": "Di sản nguồn khoáng quý từ năm 1957"
          },
          {
            "left": "Mountain contour",
            "right": "Đường nét dãy núi Hòn Thơm kỳ vĩ"
          },
          {
            "left": "Natural alkaline pH 9.0",
            "right": "Chỉ số kiềm tự nhiên hoàn hảo pH 9.0"
          }
        ]
      },
      {
        "id": "u15-e2",
        "type": "speak",
        "promptEn": "Speak this brand design story clearly:",
        "promptVi": "Luyện nói câu diễn đạt ý nghĩa màu sắc thương hiệu Vikoda:",
        "englishSentence": "The cyan blue label symbolizes the pristine purity of our Danh Thanh natural mineral spring.",
        "audioText": "The cyan blue label symbolizes the pristine purity of our Danh Thanh natural mineral spring.",
        "phonetics": "/ðə ˈsaɪæn bluː ˈleɪbl ˈsɪmbəlaɪzɪz ðə ˈprɪstiːn ˈpjʊərəti ɒv ˈaʊər daɪn tæŋ ˈnætʃrəl ˈmɪnərəl sprɪŋ/",
        "vietnameseMeaning": "Nhãn chai màu xanh lục lam tượng trưng cho độ tinh khiết nguyên bản của nguồn khoáng thiên nhiên Đảnh Thạnh.",
        "explanation": "\"The cyan blue label symbolizes...\" là mẫu câu thuyết trình thiết kế thương hiệu chuẩn xác và giàu cảm xúc.",
        "whyWrong": "Phát âm chuẩn từ \"cyan\" (/ˈsaɪæn/) và \"pristine\" (/ˈprɪstiːn/).",
        "crucialNote": "Màu xanh Cyan giúp sản phẩm Vikoda nổi bật rực rỡ trên quầy kệ siêu thị so với các chai nhựa xanh thông thường.",
        "memoryHook": "Cyan blue symbolizes pristine purity = Sắc xanh lục lam tượng trưng sự tinh khiết."
      },
      {
        "id": "u15-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the bottle embossing detail:",
        "promptVi": "Ghép câu: \"Logo dập nổi trên thân chai bảo vệ người tiêu dùng khỏi hàng giả hàng nhái\":",
        "englishSentence": "The embossed logo on the bottle protects consumers against counterfeit products.",
        "audioText": "The embossed logo on the bottle protects consumers against counterfeit products.",
        "wordPool": [
          "The",
          "embossed",
          "logo",
          "on",
          "the",
          "bottle",
          "protects",
          "consumers",
          "against",
          "counterfeit",
          "products.",
          "copy",
          "damage"
        ],
        "vietnameseMeaning": "Logo dập nổi trên thân chai bảo vệ người tiêu dùng khỏi hàng giả hàng nhái.",
        "explanation": "\"Embossed logo\" (logo dập nổi 3D) là công nghệ bao bì cao cấp bảo chứng chất lượng chính hãng.",
        "whyWrong": "\"Counterfeit products\" là thuật ngữ chuẩn quốc tế chỉ hàng nhái, hàng giả mạo.",
        "crucialNote": "Chi tiết dập nổi tinh xảo còn giúp tăng cảm giác cầm nắm chắc chắn cho người uống.",
        "memoryHook": "Embossed logo protects against counterfeit = Logo dập nổi chống hàng giả."
      },
      {
        "id": "u15-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term to highlight Vikoda historical heritage:",
        "promptVi": "Chọn từ chính xác để nêu bật bề dày lịch sử của nguồn khoáng:",
        "englishSentence": "Our brand [ _____ ] dates back to 1957 when French scientists explored the spring.",
        "audioText": "Our brand heritage dates back to 1957 when French scientists explored the spring.",
        "blankWord": "heritage",
        "options": [
          "heritage",
          "debt",
          "danger"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Di sản thương hiệu của chúng tôi bắt nguồn từ năm 1957 khi các nhà khoa học Pháp khám phá nguồn khoáng.",
        "explanation": "\"Brand heritage\" (di sản thương hiệu) là tài sản vô giá khẳng định uy tín vượt thời gian của Vikoda.",
        "whyWrong": "\"Debt\" (món nợ) hay \"danger\" (sự nguy hiểm) hoàn toàn sai lệch tinh thần tự hào lịch sử.",
        "crucialNote": "Mỏ khoáng Đảnh Thạnh được dược sĩ Pháp phát hiện và đánh giá có giá trị tương đương mỏ khoáng Vichy nổi tiếng.",
        "memoryHook": "Brand heritage dates back to 1957 = Di sản từ năm 1957."
      },
      {
        "id": "u15-e5",
        "type": "chat_branch",
        "promptEn": "Answer a branding question from a creative agency partner on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc sáng tạo hỏi lý do Vikoda chọn tone màu Cyan Blue thay vì Dark Navy:",
        "englishSentence": "Cyan Blue evokes the vibrant, alkaline energy of natural minerals rising from 220m depth, setting us apart from ordinary filtered water.",
        "audioText": "Cyan Blue evokes the vibrant, alkaline energy of natural minerals rising from 220m depth, setting us apart from ordinary filtered water.",
        "chatMessages": [
          {
            "speaker": "Liam (Creative Director, Global Brandworks)",
            "avatar": "🎨",
            "message": "Minh, we love the bottle refresh! What was the brand rationale behind choosing vivid Cyan Blue?"
          }
        ],
        "chatOptions": [
          {
            "text": "Cyan Blue evokes the vibrant, alkaline energy of natural minerals rising from 220m depth, setting us apart from ordinary filtered water.",
            "trustScore": 25,
            "feedback": "Câu trả lời đậm chất chuyên gia thương hiệu! Kết nối màu sắc với nguồn gốc địa chất 220m và tính kiềm nguyên bản.",
            "isCorrect": true
          },
          {
            "text": "We chose Cyan because the printing company gave us a 10% discount on that ink.",
            "trustScore": 0,
            "feedback": "Hạ thấp giá trị thương hiệu! Đối tác quốc tế tìm kiếm chiều sâu triết lý chứ không phải chiết khấu mực in.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Màu xanh Cyan gợi lên nguồn năng lượng kiềm tự nhiên sống động từ độ sâu 220m, giúp chúng tôi khác biệt hoàn toàn với nước tinh khiết thông thường.",
        "explanation": "Làm chủ câu chuyện thương hiệu (Brand Storytelling) giúp định vị sản phẩm ở phân khúc cao cấp.",
        "crucialNote": "Mỗi giọt nước Vikoda là tinh hoa tích tụ hàng triệu năm qua các tầng địa chất.",
        "memoryHook": "Vibrant alkaline energy rising from 220m depth."
      }
    ]
  },
  {
    "id": "unit-16",
    "unitNumber": 16,
    "title": "Quy Cách Đóng Thùng Đơn Giản",
    "subtitle": "Mô tả số chai trên lốc, trọng lượng thùng cơ bản",
    "level": "A1",
    "icon": "📦",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u16-e1",
        "type": "match_pairs",
        "promptEn": "Match packaging specifications with their technical definitions:",
        "promptVi": "Ghép cặp thuật ngữ quy cách đóng thùng với định nghĩa kỹ thuật hàng hóa:",
        "englishSentence": "Match carton packaging specifications.",
        "audioText": "Match carton packaging specifications.",
        "explanation": "5 thông số kỹ thuật bao bì cần thuộc lòng khi làm việc với đơn vị vận tải và xuất nhập khẩu.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thông số quy cách đóng thùng sản phẩm.",
        "pairs": [
          {
            "left": "Gross weight",
            "right": "Tổng trọng lượng bao gồm cả bao bì (khoảng 13kg)"
          },
          {
            "left": "5-ply corrugated carton",
            "right": "Thùng carton sóng 5 lớp chịu lực cao"
          },
          {
            "left": "Moisture-resistant coating",
            "right": "Lớp phủ chống ẩm bảo vệ thùng khi đi biển"
          },
          {
            "left": "Stacking limit",
            "right": "Giới hạn số lớp xếp chồng tối đa (6 lớp)"
          },
          {
            "left": "Shrink film wrap",
            "right": "Màng co nhiệt bọc lốc 6 chai chắc chắn"
          }
        ]
      },
      {
        "id": "u16-e2",
        "type": "speak",
        "promptEn": "Speak this technical carton specification clearly:",
        "promptVi": "Luyện nói câu mô tả trọng lượng và tiêu chuẩn thùng carton xuất khẩu:",
        "englishSentence": "Each carton of five-hundred-milliliter water weighs approximately thirteen kilograms and resists high humidity.",
        "audioText": "Each carton of five-hundred-milliliter water weighs approximately thirteen kilograms and resists high humidity.",
        "phonetics": "/iːtʃ ˈkɑːrtən ɒv ˈfaɪv ˈhʌndrəd ˈmɪlɪliːtər ˈwɔːtər weɪz əˈprɒksɪmɪtli ˈθɜːrtiːn ˈkɪləɡræmz ænd rɪˈzɪsts haɪ hjuːˈmɪdəti/",
        "vietnameseMeaning": "Mỗi thùng nước 500ml nặng xấp xỉ 13 kg và có khả năng chống chịu độ ẩm cao.",
        "explanation": "\"Weighs approximately [Trọng lượng] and resists [Điều kiện]\" là cấu trúc chuẩn trong tài liệu kỹ thuật hàng hóa.",
        "whyWrong": "Nhấn đúng trọng âm từ \"approximately\" (/əˈprɒksɪmɪtli/) và \"humidity\" (/hjuːˈmɪdəti/).",
        "crucialNote": "Trọng lượng 13kg phù hợp với quy chuẩn an toàn lao động bốc xếp của công nhân cảng biển.",
        "memoryHook": "Weighs approx 13kg and resists humidity = Nặng khoảng 13kg chống ẩm tốt."
      },
      {
        "id": "u16-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to warn against exceeding stacking limits in warehouse:",
        "promptVi": "Ghép câu: \"Xin hãy đảm bảo thùng hàng không được xếp chồng quá sáu lớp\":",
        "englishSentence": "Please ensure cartons are not stacked more than six layers high.",
        "audioText": "Please ensure cartons are not stacked more than six layers high.",
        "wordPool": [
          "Please",
          "ensure",
          "cartons",
          "are",
          "not",
          "stacked",
          "more",
          "than",
          "six",
          "layers",
          "high.",
          "drop",
          "crush"
        ],
        "vietnameseMeaning": "Xin hãy đảm bảo thùng hàng không được xếp chồng quá sáu lớp.",
        "explanation": "Quy tắc an toàn kho vận chống bẹp góc thùng và bảo vệ cổ chai không bị nứt vỡ.",
        "whyWrong": "\"Stacked more than [Số lớp] high\" là cụm từ chuyên môn trong cẩm nang hướng dẫn kho hàng (SOP).",
        "crucialNote": "Quá 6 lớp có thể làm sập pallet khi xe nâng di chuyển.",
        "memoryHook": "Not stacked more than six layers high = Không xếp chồng quá 6 lớp."
      },
      {
        "id": "u16-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct packaging term for unit grouping:",
        "promptVi": "Chọn từ chính xác chỉ lốc 6 chai được bọc màng co tiện dụng:",
        "englishSentence": "Vikoda bottles are packed in convenient shrink-wrapped [ _____ ] of six before boxing.",
        "audioText": "Vikoda bottles are packed in convenient shrink-wrapped packs of six before boxing.",
        "blankWord": "packs",
        "options": [
          "packs",
          "cages",
          "nets"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chai Vikoda được đóng thành lốc 6 chai bọc màng co tiện dụng trước khi xếp vào thùng.",
        "explanation": "\"Pack of six\" hoặc \"six-pack\" là đơn vị tiêu dùng quen thuộc tại các chuỗi bán lẻ.",
        "whyWrong": "\"Cages\" (lồng sắt) hay \"nets\" (lưới đánh cá) không dùng trong đóng gói đồ uống đóng chai.",
        "crucialNote": "Lốc 6 chai giúp người tiêu dùng gia đình dễ xách và mua theo tuần.",
        "memoryHook": "Packs of six = Lốc 6 chai tiện lợi."
      },
      {
        "id": "u16-e5",
        "type": "chat_branch",
        "promptEn": "Answer a freight forwarder regarding carton durability for sea shipping on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Hãng vận tải biển hỏi thùng hàng Vikoda có chịu được hành trình container biển 20 ngày không:",
        "englishSentence": "Rest assured! Our 5-ply cartons use export-grade kraft with anti-humidity varnish, fully certified for 30-day ocean transit.",
        "audioText": "Rest assured! Our 5-ply cartons use export-grade kraft with anti-humidity varnish, fully certified for 30-day ocean transit.",
        "chatMessages": [
          {
            "speaker": "Logistics Dispatcher (Maersk Line Vietnam)",
            "avatar": "🚢",
            "message": "Minh, we are loading 40ft reefers for the Middle East route. Can your paper cartons endure tropical sea humidity without collapsing?"
          }
        ],
        "chatOptions": [
          {
            "text": "Rest assured! Our 5-ply cartons use export-grade kraft with anti-humidity varnish, fully certified for 30-day ocean transit.",
            "trustScore": 25,
            "feedback": "Cực kỳ chuẩn xác và tự tin! Khẳng định tiêu chuẩn carton 5 lớp tráng phủ chống ẩm đã được chứng nhận vận tải biển.",
            "isCorrect": true
          },
          {
            "text": "I am not sure, if the boxes get wet and collapse, we will blame the ship.",
            "trustScore": 0,
            "feedback": "Thiếu hiểu biết kỹ thuật và đùn đẩy trách nhiệm! Khiến hãng tàu từ chối nhận hàng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Xin ngài hoàn toàn yên tâm! Thùng 5 lớp của chúng tôi dùng giấy kraft xuất khẩu phủ lớp chống ẩm, được chứng nhận đạt chuẩn cho hành trình 30 ngày trên biển.",
        "explanation": "Nắm vững tiêu chuẩn vật liệu bao bì giúp bảo vệ quyền lợi bảo hiểm và uy tín khi xuất khẩu.",
        "crucialNote": "Chứng chỉ thử nghiệm độ bục giấy (Bursting strength) luôn sẵn sàng cung cấp cho đối tác.",
        "memoryHook": "Fully certified for 30-day ocean transit."
      }
    ]
  },
  {
    "id": "unit-17",
    "unitNumber": 17,
    "title": "Mẫu Câu Nhờ Vả & Cảm Ơn Nơi Làm Việc",
    "subtitle": "Mẫu câu nhờ giúp đỡ, xin lỗi và cảm ơn chân thành",
    "level": "A1",
    "icon": "🤝",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u17-e1",
        "type": "match_pairs",
        "promptEn": "Match workplace courtesy phrases with their meanings:",
        "promptVi": "Ghép cặp mẫu câu nhờ vả, xin lỗi và cảm ơn chân thành nơi công sở:",
        "englishSentence": "Match workplace politeness and cooperation phrases.",
        "audioText": "Match workplace politeness and cooperation phrases.",
        "explanation": "5 mẫu câu văn minh kiến tạo môi trường làm việc tích cực, gắn kết tinh thần đồng đội.",
        "vietnameseMeaning": "Ghép đúng 5 cặp mẫu câu ứng xử văn minh nơi làm việc.",
        "pairs": [
          {
            "left": "Could you lend me a hand",
            "right": "Bạn có thể giúp tôi một tay được không"
          },
          {
            "left": "I truly appreciate your support",
            "right": "Tôi thực sự cảm kích sự hỗ trợ của bạn"
          },
          {
            "left": "Don't mention it",
            "right": "Có gì đâu, đừng bận tâm"
          },
          {
            "left": "At your earliest convenience",
            "right": "Vào lúc sớm nhất thuận tiện cho bạn"
          },
          {
            "left": "Sorry for any inconvenience",
            "right": "Thành thật xin lỗi vì sự bất tiện này"
          }
        ]
      },
      {
        "id": "u17-e2",
        "type": "speak",
        "promptEn": "Speak this genuine appreciation sentence clearly:",
        "promptVi": "Luyện nói câu bày tỏ lòng biết ơn sâu sắc trước sự giúp đỡ của đồng nghiệp:",
        "englishSentence": "Thank you very much for your outstanding support during this international audit.",
        "audioText": "Thank you very much for your outstanding support during this international audit.",
        "phonetics": "/θæŋk juː ˈvɛri mʌtʃ fɔːr jʊər aʊtˈstændɪŋ səˈpɔːrt ˈdjʊərɪŋ ðɪs ˌɪntərˈnæʃənl ˈɔːdɪt/",
        "vietnameseMeaning": "Cảm ơn bạn rất nhiều vì sự hỗ trợ xuất sắc trong suốt kỳ kiểm toán quốc tế này.",
        "explanation": "\"Thank you very much for your outstanding support...\" là lời khen ngợi và tri ân giàu động lực bậc nhất.",
        "whyWrong": "Dùng tính từ đắt giá \"outstanding\" (/aʊtˈstændɪŋ/ - nổi bật, xuất sắc) để tôn vinh cống hiến của người khác.",
        "crucialNote": "Ánh mắt chân thành và cái bắt tay ấm áp nhân đôi giá trị lời cảm ơn.",
        "memoryHook": "Outstanding support during the audit = Hỗ trợ xuất sắc trong kiểm toán."
      },
      {
        "id": "u17-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to politely request assistance with urgent export files:",
        "promptVi": "Ghép câu: \"Bạn có thể vui lòng xem qua bộ hồ sơ xuất khẩu này giúp tôi được không?\":",
        "englishSentence": "Could you please look over these export documents for me?",
        "audioText": "Could you please look over these export documents for me?",
        "wordPool": [
          "Could",
          "you",
          "please",
          "look",
          "over",
          "these",
          "export",
          "documents",
          "for",
          "me?",
          "throw",
          "burn"
        ],
        "vietnameseMeaning": "Bạn có thể vui lòng xem qua bộ hồ sơ xuất khẩu này giúp tôi được không?",
        "explanation": "\"Look over\" nghĩa là kiểm tra, rà soát nhanh các chứng từ quan trọng.",
        "whyWrong": "\"Could you please...\" biến một yêu cầu công việc thành lời thỉnh cầu lịch thiệp và tôn trọng.",
        "crucialNote": "Luôn kèm từ \"please\" ở vị trí giữa câu hoặc cuối câu.",
        "memoryHook": "Could you please look over = Bạn có thể xem qua giúp tôi không."
      },
      {
        "id": "u17-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct diplomatic term for heartfelt gratitude:",
        "promptVi": "Chọn từ cảm xúc ngoại giao chính xác để hoàn thành câu tri ân:",
        "englishSentence": "I would be deeply [ _____ ] if you could verify the laboratory water test results.",
        "audioText": "I would be deeply grateful if you could verify the laboratory water test results.",
        "blankWord": "grateful",
        "options": [
          "grateful",
          "hostile",
          "furious"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Tôi sẽ vô cùng biết ơn nếu bạn có thể xác minh kết quả kiểm nghiệm nước tại phòng thí nghiệm.",
        "explanation": "\"I would be deeply grateful if you could...\" là cấu trúc lịch thiệp cấp độ cao trong thư từ B2B.",
        "whyWrong": "\"Hostile\" (thù địch) hay \"furious\" (tức giận) mang cảm xúc tiêu cực phá hoại quan hệ công việc.",
        "crucialNote": "Từ \"grateful\" thể hiện sự trân trọng chuyên môn của phòng kiểm nghiệm chất lượng (QC).",
        "memoryHook": "Deeply grateful = Vô cùng biết ơn."
      },
      {
        "id": "u17-e5",
        "type": "chat_branch",
        "promptEn": "Respond to a senior colleague who stayed late to help you finish an export report:",
        "promptVi": "Mô phỏng tin nhắn: Đồng nghiệp kỳ cựu ở lại muộn hỗ trợ bạn dịch hợp đồng sang tiếng Anh:",
        "englishSentence": "I couldn't have completed this contract without your valuable help, Linh! Let me treat you to lunch tomorrow.",
        "audioText": "I couldn't have completed this contract without your valuable help, Linh! Let me treat you to lunch tomorrow.",
        "chatMessages": [
          {
            "speaker": "Linh (Senior Legal Specialist)",
            "avatar": "👩‍💼",
            "message": "Hey Minh, I just emailed you the verified English clauses for the Singapore distributor agreement. All good to go!"
          }
        ],
        "chatOptions": [
          {
            "text": "I couldn't have completed this contract without your valuable help, Linh! Let me treat you to lunch tomorrow.",
            "trustScore": 25,
            "feedback": "Tuyệt vời! Ghi nhận công sức đồng nghiệp chân thành kèm lời mời ăn trưa tri ân giúp củng cố tinh thần đồng đội.",
            "isCorrect": true
          },
          {
            "text": "Okay, that's just your routine job anyway.",
            "trustScore": 0,
            "feedback": "Vô ơn và lạnh lùng! Lối cư xử này sẽ khiến không ai muốn hỗ trợ bạn lần sau.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Em không thể hoàn thành hợp đồng này nếu thiếu sự giúp đỡ quý báu của chị Linh! Ngày mai cho em mời chị ăn trưa nhé.",
        "explanation": "Văn hóa biết ơn và chủ động đền đáp là giá trị cốt lõi trong cẩm nang nhân sự Vikoda.",
        "crucialNote": "Tinh thần một đội ngũ, một mục tiêu chung (One Team - One Goal).",
        "memoryHook": "Couldn't have completed without your valuable help."
      }
    ]
  },
  {
    "id": "unit-18",
    "unitNumber": 18,
    "title": "Tiễn Khách Ra Xe & Chào Tạm Biệt",
    "subtitle": "Nghi thức tiễn khách ra tận xe và tặng quà lưu niệm",
    "level": "A1",
    "icon": "🚗",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u18-e1",
        "type": "match_pairs",
        "promptEn": "Match farewell and departure etiquette phrases with their meanings:",
        "promptVi": "Ghép cặp nghi thức tiễn khách và tặng quà lưu niệm doanh nghiệp:",
        "englishSentence": "Match farewell and corporate gift presentation terms.",
        "audioText": "Match farewell and corporate gift presentation terms.",
        "explanation": "Ấn tượng phút chia tay quyết định sự thành bại của mối quan hệ hợp tác lâu dài.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng nghi thức tiễn khách và tặng quà lưu niệm.",
        "pairs": [
          {
            "left": "Escort to the car",
            "right": "Tiễn khách chu đáo ra tận cửa xe"
          },
          {
            "left": "Souvenir gift box",
            "right": "Hộp quà lưu niệm tri ân đặc sản"
          },
          {
            "left": "Have a safe flight home",
            "right": "Chúc chuyến bay thượng lộ bình an"
          },
          {
            "left": "Productive partnership",
            "right": "Quan hệ hợp tác hiệu quả tốt đẹp"
          },
          {
            "left": "Keep in close touch",
            "right": "Duy trì liên lạc chặt chẽ thường xuyên"
          }
        ]
      },
      {
        "id": "u18-e2",
        "type": "speak",
        "promptEn": "Speak this gracious gift presentation sentence:",
        "promptVi": "Luyện nói câu trao tặng hộp quà nước khoáng cao cấp khi tiễn đối tác:",
        "englishSentence": "Please accept this gift box of Vikoda premium glass bottles as a token of our appreciation.",
        "audioText": "Please accept this gift box of Vikoda premium glass bottles as a token of our appreciation.",
        "phonetics": "/pliːz əkˈsɛpt ðɪs ɡɪft bɒks ɒv vɪˈkoʊdə ˈpriːmiəm ɡlæs ˈbɒtlz æz ə ˈtoʊkən ɒv ˈaʊər əˌpriːʃiˈeɪʃən/",
        "vietnameseMeaning": "Xin vui lòng nhận hộp quà chai thủy tinh cao cấp Vikoda này như một món quà tri ân từ chúng tôi.",
        "explanation": "\"As a token of our appreciation\" là thành ngữ ngoại giao kinh điển khi tặng quà doanh nghiệp.",
        "whyWrong": "Dùng hai tay khi trao hộp quà, ánh mắt ấm áp và nụ cười chân thành.",
        "crucialNote": "Chai thủy tinh Vikoda là biểu tượng quà tặng thanh lịch, bảo vệ môi trường.",
        "memoryHook": "As a token of our appreciation = Món quà tri ân chân thành."
      },
      {
        "id": "u18-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to wish the guest a safe return flight:",
        "promptVi": "Ghép câu: \"Chúc bạn có một chuyến bay an toàn và chúng tôi mong sớm được gặp lại bạn\":",
        "englishSentence": "Have a safe flight home and we look forward to seeing you soon.",
        "audioText": "Have a safe flight home and we look forward to seeing you soon.",
        "wordPool": [
          "Have",
          "a",
          "safe",
          "flight",
          "home",
          "and",
          "we",
          "look",
          "forward",
          "to",
          "seeing",
          "you",
          "soon.",
          "danger",
          "never"
        ],
        "vietnameseMeaning": "Chúc bạn có một chuyến bay an toàn và chúng tôi mong sớm được gặp lại bạn.",
        "explanation": "\"Look forward to seeing you soon\" gửi gắm thông điệp chào đón trong những lần hợp tác tiếp theo.",
        "whyWrong": "Sau \"look forward to\" luôn dùng động từ đuôi -ing (seeing you).",
        "crucialNote": "Đứng vẫy tay tiễn khi xe của khách từ từ lăn bánh rời khỏi cổng công ty.",
        "memoryHook": "Have a safe flight home = Thượng lộ bình an."
      },
      {
        "id": "u18-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct courteous verb for helping the guest embark:",
        "promptVi": "Chọn động từ lịch thiệp thể hiện hành động hỗ trợ mở cửa xe cho khách:",
        "englishSentence": "Let me [ _____ ] the car door for you and place your luggage in the trunk.",
        "audioText": "Let me open the car door for you and place your luggage in the trunk.",
        "blankWord": "open",
        "options": [
          "open",
          "slam",
          "lock"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Để tôi mở cửa xe giúp bạn và xếp hành lý của bạn vào cốp xe nhé.",
        "explanation": "Chủ động mở cửa xe và cất hành lý là cử chỉ lịch thiệp quý ông (Gentleman's courtesy) chuẩn quốc tế.",
        "whyWrong": "\"Slam\" (đóng sầm cửa) hay \"lock\" (khóa cửa lại) là hành vi bất nhã.",
        "crucialNote": "Đặt tay chắn nhẹ lên mép trên cửa xe để tránh khách bị va đầu khi bước vào xe.",
        "memoryHook": "Open the car door for you = Mở cửa xe cho khách."
      },
      {
        "id": "u18-e5",
        "type": "chat_branch",
        "promptEn": "Send a warm follow-up message while the partner is on the way to the airport:",
        "promptVi": "Mô phỏng tin nhắn: Khách đang trên xe ra sân bay Cam Ranh, hãy gửi lời chào chu đáo:",
        "englishSentence": "It was truly an honor hosting you at Vikoda! Wish you a smooth flight back to Seoul. Our export team is already preparing the contract draft.",
        "audioText": "It was truly an honor hosting you at Vikoda! Wish you a smooth flight back to Seoul. Our export team is already preparing the contract draft.",
        "chatMessages": [
          {
            "speaker": "Mr. Park (Seoul Supermarket Franchise)",
            "avatar": "🇰🇷",
            "message": "Heading to Cam Ranh now. Thank you Minh and the Vikoda leadership for the warmest reception!"
          }
        ],
        "chatOptions": [
          {
            "text": "It was truly an honor hosting you at Vikoda! Wish you a smooth flight back to Seoul. Our export team is already preparing the contract draft.",
            "trustScore": 25,
            "feedback": "Phản hồi đỉnh cao! Gửi trọn vẹn lòng biết ơn và thông báo hành động cụ thể (đang soạn thảo hợp đồng xuất khẩu).",
            "isCorrect": true
          },
          {
            "text": "Goodbye. Don't forget to pay for the samples we gave you.",
            "trustScore": 0,
            "feedback": "Thô thiển và phá hoại toàn bộ hình ảnh tốt đẹp đã xây dựng trong chuyến thăm.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thật là một vinh dự khi được đón tiếp ngài tại Vikoda! Chúc ngài chuyến bay thuận lợi về Seoul. Đội ngũ xuất khẩu của chúng tôi đang hoàn thiện bản thảo hợp đồng rồi ạ.",
        "explanation": "Giữ nhịp kết nối kinh doanh liên tục ngay sau khi tiễn khách tạo đà ký kết hợp đồng thần tốc.",
        "crucialNote": "Khách Hàn Quốc đánh giá rất cao tốc độ và sự tận tâm (Pali Pali).",
        "memoryHook": "Smooth flight back + preparing the contract draft."
      }
    ]
  },
  {
    "id": "unit-19",
    "unitNumber": 19,
    "title": "Khái Niệm Nước Tự Nhiên Dễ Hiểu Nhất",
    "subtitle": "Mô tả nguồn nước mát lành thanh khiết cho người mới",
    "level": "A1",
    "icon": "💧",
    "color": "emerald",
    "xpReward": 30,
    "gemReward": 10,
    "exercises": [
      {
        "id": "u19-e1",
        "type": "match_pairs",
        "promptEn": "Match mineral water science terms with their simple definitions:",
        "promptVi": "Ghép cặp các khái niệm khoa học nước khoáng thiên nhiên dễ hiểu nhất:",
        "englishSentence": "Match natural mineral water fundamental concepts.",
        "audioText": "Match natural mineral water fundamental concepts.",
        "explanation": "5 đặc tính cốt lõi phân biệt nước khoáng thiên nhiên Vikoda với nước tinh khiết nhân tạo.",
        "vietnameseMeaning": "Ghép đúng 5 cặp khái niệm đặc tính nước khoáng Đảnh Thạnh.",
        "pairs": [
          {
            "left": "Bottled at source",
            "right": "Đóng chai trực tiếp tại mỏ khoáng không qua vận chuyển"
          },
          {
            "left": "Untouched by chemicals",
            "right": "Nguyên bản tự nhiên không dùng hóa chất xử lý"
          },
          {
            "left": "Deep underground aquifer",
            "right": "Tầng chứa nước sâu 220 mét trong lòng đất"
          },
          {
            "left": "Natural alkalinity",
            "right": "Tính kiềm tự nhiên thanh mát pH 9.0"
          },
          {
            "left": "Essential trace minerals",
            "right": "Các khoáng chất vi lượng thiết yếu cho sức khỏe"
          }
        ]
      },
      {
        "id": "u19-e2",
        "type": "speak",
        "promptEn": "Speak this foundational product truth clearly:",
        "promptVi": "Luyện nói câu khẳng định giá trị cốt lõi đóng chai tại nguồn của Vikoda:",
        "englishSentence": "Vikoda is bottled directly at the mineral source at a natural temperature of seventy-two degrees Celsius.",
        "audioText": "Vikoda is bottled directly at the mineral source at a natural temperature of seventy-two degrees Celsius.",
        "phonetics": "/vɪˈkoʊdə ɪz ˈbɒtld dəˈrɛktli æt ðə ˈmɪnərəl sɔːrs æt ə ˈnætʃrəl ˈtɛmprətʃər ɒv ˈsɛvənti tuː dɪˈɡriːz ˈsɛlsiəs/",
        "vietnameseMeaning": "Vikoda được đóng chai trực tiếp tại nguồn khoáng ở nhiệt độ tự nhiên 72 độ C.",
        "explanation": "Nhiệt độ phun trào 72°C từ lòng đất bảo chứng cho nguồn nước vô trùng và giàu khoáng hóa tự nhiên.",
        "whyWrong": "Phát âm rõ số nhiệt độ \"seventy-two degrees Celsius\" (/ˈsɛvənti tuː dɪˈɡriːz ˈsɛlsiəs/).",
        "crucialNote": "Đóng chai ngay tại nguồn giúp giữ trọn vẹn hoạt tính sinh học của các vi khoáng quý.",
        "memoryHook": "Bottled directly at the source at 72 degrees Celsius."
      },
      {
        "id": "u19-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the chemical-free filtration process:",
        "promptVi": "Ghép câu: \"Nước khoáng của chúng tôi giữ nguyên khoáng chất tự nhiên mà không cần bất kỳ xử lý hóa chất nào\":",
        "englishSentence": "Our mineral water retains pure minerals without any chemical treatment.",
        "audioText": "Our mineral water retains pure minerals without any chemical treatment.",
        "wordPool": [
          "Our",
          "mineral",
          "water",
          "retains",
          "pure",
          "minerals",
          "without",
          "any",
          "chemical",
          "treatment.",
          "artificial",
          "poison"
        ],
        "vietnameseMeaning": "Nước khoáng của chúng tôi giữ nguyên khoáng chất tự nhiên mà không cần bất kỳ xử lý hóa chất nào.",
        "explanation": "Sự khác biệt cốt tử so với nước lọc RO nhân tạo (vốn bị tách hết khoáng rồi bù khoáng nhân tạo bằng hóa chất).",
        "whyWrong": "\"Without any chemical treatment\" là luận điểm bán hàng độc nhất (USP) bảo vệ sức khỏe.",
        "crucialNote": "Được lọc qua hàng trăm mét đá mẹ tự nhiên suốt hàng trăm năm.",
        "memoryHook": "Retains pure minerals without chemical treatment."
      },
      {
        "id": "u19-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct scientific index for Vikoda natural sweetness:",
        "promptVi": "Chọn chỉ số khoa học đặc trưng tạo nên vị ngọt lành thanh mát của Vikoda:",
        "englishSentence": "Vikoda emerges from 220 meters underground with a perfectly balanced natural [ _____ ] of 9.0.",
        "audioText": "Vikoda emerges from 220 meters underground with a perfectly balanced natural pH of 9.0.",
        "blankWord": "pH",
        "options": [
          "pH",
          "voltage",
          "calorie"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda phun trào từ độ sâu 220 mét dưới lòng đất với độ pH kiềm tự nhiên cân bằng hoàn hảo 9.0.",
        "explanation": "Chỉ số \"pH 9.0 tự nhiên\" là niềm tự hào của Vikoda - kiềm nguyên bản từ nguồn khoáng chứ không phải điện phân nhân tạo.",
        "whyWrong": "\"Voltage\" (điện áp) hay \"calorie\" (calo) không đo lường độ kiềm tính của nước khoáng.",
        "crucialNote": "Độ kiềm pH 9.0 giúp trung hòa axit dư thừa trong dạ dày và hỗ trợ sức khỏe toàn diện.",
        "memoryHook": "Natural pH of 9.0 = Độ kiềm tự nhiên 9.0."
      },
      {
        "id": "u19-e5",
        "type": "chat_branch",
        "promptEn": "Explain the difference between purified water and Vikoda to a foreign fitness buyer on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Huấn luyện viên thể hình quốc tế hỏi tại sao nên uống Vikoda thay vì nước lọc tinh khiết RO thông thường:",
        "englishSentence": "Unlike RO purified water which strips minerals away, Vikoda naturally contains bicarbonate, potassium and calcium with pH 9.0 to rehydrate your muscle cells faster!",
        "audioText": "Unlike RO purified water which strips minerals away, Vikoda naturally contains bicarbonate, potassium and calcium with pH 9.0 to rehydrate your muscle cells faster!",
        "chatMessages": [
          {
            "speaker": "Coach Eric (International Fitness Academy)",
            "avatar": "🏋️",
            "message": "Hey Minh, water is just water, right? Why should our gym members choose Vikoda over cheaper purified tap water?"
          }
        ],
        "chatOptions": [
          {
            "text": "Unlike RO purified water which strips minerals away, Vikoda naturally contains bicarbonate, potassium and calcium with pH 9.0 to rehydrate your muscle cells faster!",
            "trustScore": 25,
            "feedback": "Giải thích quá xuất sắc! Đưa ra luận cứ khoa học về vi khoáng tự nhiên (kali, canxi, bicacbonat) và tốc độ bù nước tế bào vượt trội.",
            "isCorrect": true
          },
          {
            "text": "Vikoda tastes sweeter because our factory adds some secret sugar into the bottle.",
            "trustScore": 0,
            "feedback": "Tai hại nghiêm trọng! Vikoda là nước khoáng kiềm thiên nhiên 100% nguyên bản, tuyệt đối không có đường.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Khác với nước tinh khiết RO bị lọc hết khoáng chất, Vikoda tự nhiên chứa bicacbonat, kali và canxi cùng độ pH 9.0 giúp bù nước cho các tế bào cơ bắp nhanh hơn hẳn!",
        "explanation": "Nước khoáng kiềm tự nhiên là thức uống phục hồi cơ bắp và chống mất nước lý tưởng cho thể thao.",
        "crucialNote": "Vị ngọt thanh dịu của Vikoda là vị khoáng tự nhiên thuần khiết từ mỏ Đảnh Thạnh.",
        "memoryHook": "Rehydrate muscle cells faster with natural alkaline minerals."
      }
    ]
  },
  {
    "id": "unit-20",
    "unitNumber": 20,
    "title": "Mốc Tốt Nghiệp Giao Tiếp Sinh Tồn A1",
    "subtitle": "Tổng duyệt 20 tình huống nhập môn trước khi lên cấp",
    "level": "A1",
    "icon": "🎓",
    "color": "emerald",
    "xpReward": 50,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u20-e1",
        "type": "match_pairs",
        "promptEn": "Grand Review: Match the 5 cornerstone competencies of Level A1:",
        "promptVi": "Đại Thử Thách Tốt Nghiệp: Ghép 5 năng lực giao tiếp nền tảng của Cấp độ A1:",
        "englishSentence": "Match the core competencies of Level A1.",
        "audioText": "Match the core competencies of Level A1.",
        "explanation": "5 trụ cột giao tiếp công sở giúp bạn làm việc tự tin cùng đồng nghiệp và đối tác toàn cầu.",
        "vietnameseMeaning": "Ghép đúng 5 chuẩn năng lực giao tiếp doanh nghiệp A1.",
        "pairs": [
          {
            "left": "Professional Greeting",
            "right": "Chào hỏi và tự giới thiệu bản thân tự tin"
          },
          {
            "left": "Water Hospitality",
            "right": "Tiếp đón và mời nước khoáng kiềm lịch thiệp"
          },
          {
            "left": "Office Navigation",
            "right": "Hướng dẫn đường đi trong tòa nhà và nhà máy"
          },
          {
            "left": "Switchboard Etiquette",
            "right": "Trực tổng đài điện thoại và chuyển máy chuẩn mực"
          },
          {
            "left": "Enterprise Partnership",
            "right": "Xây dựng mối quan hệ đối tác bền vững win-win"
          }
        ]
      },
      {
        "id": "u20-e2",
        "type": "speak",
        "promptEn": "Speak this proud A1 graduation commitment clearly:",
        "promptVi": "Luyện nói lời tuyên thệ tốt nghiệp Cấp độ A1 đại diện cho văn hóa Vikoda:",
        "englishSentence": "I am proud to represent Vikoda, delivering pristine natural mineral water with world-class hospitality.",
        "audioText": "I am proud to represent Vikoda, delivering pristine natural mineral water with world-class hospitality.",
        "phonetics": "/aɪ æm praʊd tuː ˌrɛprɪˈzɛnt vɪˈkoʊdə, dɪˈlɪvərɪŋ ˈprɪstiːn ˈnætʃrəl ˈmɪnərəl ˈwɔːtər wɪð wɜːrld klɑːs ˌhɒspɪˈtæləti/",
        "vietnameseMeaning": "Tôi tự hào đại diện cho Vikoda, mang nguồn nước khoáng kiềm thiên nhiên thuần khiết cùng lòng hiếu khách chuẩn quốc tế đến với mọi người.",
        "explanation": "Tuyên ngôn sứ mệnh kết hợp niềm tự hào thương hiệu và văn hóa dịch vụ 5 sao.",
        "whyWrong": "Nói với chất giọng dõng dạc, đầy nhiệt huyết và tự tin.",
        "crucialNote": "Đây là cột mốc bạn chính thức làm chủ toàn bộ kỹ năng giao tiếp sinh tồn tiếng Anh công sở.",
        "memoryHook": "Proud to represent Vikoda with world-class hospitality."
      },
      {
        "id": "u20-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to celebrate your Level A1 milestone achievement:",
        "promptVi": "Ghép câu: \"Tôi đã hoàn thành xuất sắc tất cả hai mươi bài học giao tiếp Cấp độ A1 tại Vikoda\":",
        "englishSentence": "I have successfully completed all twenty Level A1 business communication units at Vikoda.",
        "audioText": "I have successfully completed all twenty Level A1 business communication units at Vikoda.",
        "wordPool": [
          "I",
          "have",
          "successfully",
          "completed",
          "all",
          "twenty",
          "Level",
          "A1",
          "business",
          "communication",
          "units",
          "at",
          "Vikoda.",
          "failed",
          "quit"
        ],
        "vietnameseMeaning": "Tôi đã hoàn thành xuất sắc tất cả hai mươi bài học giao tiếp Cấp độ A1 tại Vikoda.",
        "explanation": "Khẳng định sự tiến bộ vượt bậc từ người mất gốc đến nhân sự giao tiếp tự tin.",
        "whyWrong": "\"Successfully completed\" ghi nhận nỗ lực rèn luyện bền bỉ mỗi ngày.",
        "crucialNote": "Sẵn sàng đón nhận thử thách chuyên sâu hơn ở Cấp độ A2 (Vận hành & Đàm phán liên phòng ban).",
        "memoryHook": "Successfully completed all twenty Level A1 units."
      },
      {
        "id": "u20-e4",
        "type": "fill_blank",
        "promptEn": "Select the ultimate keyword for business collaboration:",
        "promptVi": "Chọn từ cốt lõi định nghĩa thành công của giao tiếp thương mại B2B:",
        "englishSentence": "Polite hospitality and transparent communication build the solid foundation for commercial [ _____ ].",
        "audioText": "Polite hospitality and transparent communication build the solid foundation for commercial success.",
        "blankWord": "success",
        "options": [
          "success",
          "conflict",
          "bankruptcy"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Lòng hiếu khách lịch thiệp và giao tiếp minh bạch xây dựng nền tảng vững chắc cho thành công thương mại.",
        "explanation": "\"Commercial success\" (thành công thương mại) là đích đến của mọi nỗ lực chuẩn hóa tiếng Anh giao tiếp tại Vikoda.",
        "whyWrong": "\"Conflict\" (xung đột) hay \"bankruptcy\" (phá sản) là thảm họa do giao tiếp kém cỏi gây ra.",
        "crucialNote": "Thành công của đối tác chính là thành công của Vikoda.",
        "memoryHook": "Foundation for commercial success = Nền tảng thành công thương mại."
      },
      {
        "id": "u20-e5",
        "type": "chat_branch",
        "promptEn": "Capstone simulation: Close your first international B2B visit on a high note:",
        "promptVi": "Mô phỏng tốt nghiệp: Đối tác quốc tế gửi lời đánh giá tổng kết sau chuyến thăm trụ sở Vikoda:",
        "englishSentence": "Thank you so much! Our whole team is committed to continuous excellence, and we look forward to finalizing our long-term distribution agreement!",
        "audioText": "Thank you so much! Our whole team is committed to continuous excellence, and we look forward to finalizing our long-term distribution agreement!",
        "chatMessages": [
          {
            "speaker": "Mr. Harrison (Global Beverage Alliance)",
            "avatar": "🌐",
            "message": "Minh, on behalf of our audit committee, congratulations! Your team showed world-class reception, deep product knowledge, and pristine mineral water quality."
          }
        ],
        "chatOptions": [
          {
            "text": "Thank you so much! Our whole team is committed to continuous excellence, and we look forward to finalizing our long-term distribution agreement!",
            "trustScore": 25,
            "feedback": "Tốt nghiệp xuất sắc 100%! Phản hồi vừa khiêm nhường, vừa thể hiện cam kết chất lượng và thúc đẩy ký kết thỏa thuận phân phối dài hạn.",
            "isCorrect": true
          },
          {
            "text": "Yes, we know we are the best company in Vietnam.",
            "trustScore": 0,
            "feedback": "Kiêu ngạo thiếu tinh tế! Làm giảm thiện cảm của ban kiểm định quốc tế.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Cảm ơn ngài rất nhiều! Toàn thể đội ngũ chúng tôi cam kết không ngừng hoàn thiện xuất sắc, và rất trông đợi vào việc hoàn tất thỏa thuận phân phối dài hạn cùng quý vị!",
        "explanation": "Cái kết hoàn hảo cho chặng hành trình Cấp độ A1: Biến lòng hiếu khách thành hợp đồng phân phối toàn cầu.",
        "crucialNote": "Chúc mừng bạn đã chinh phục 100% Cấp độ A1!",
        "memoryHook": "Committed to continuous excellence = Cam kết không ngừng hoàn thiện."
      }
    ]
  },
  {
    "id": "unit-21",
    "unitNumber": 21,
    "title": "Phòng Nhân Sự & Văn Hóa Doanh Nghiệp",
    "subtitle": "Nội quy công ty, phúc lợi và giá trị cốt lõi Vikoda",
    "level": "A2",
    "icon": "👥",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u21-e1",
        "type": "match_pairs",
        "promptEn": "Match HR and corporate culture terms with their correct meanings:",
        "promptVi": "Ghép cặp thuật ngữ nhân sự và văn hóa doanh nghiệp Vikoda:",
        "englishSentence": "Match HR policies and corporate values.",
        "audioText": "Match HR policies and corporate values.",
        "explanation": "5 thuật ngữ nền tảng trong cẩm nang nhân sự và triết lý văn hóa Vikoda / FIT Group.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ nhân sự và văn hóa doanh nghiệp.",
        "pairs": [
          {
            "left": "Core values",
            "right": "Các giá trị văn hóa cốt lõi doanh nghiệp"
          },
          {
            "left": "Code of conduct",
            "right": "Quy tắc ứng xử và đạo đức công sở"
          },
          {
            "left": "Employee benefits",
            "right": "Chế độ phúc lợi và đãi ngộ nhân viên"
          },
          {
            "left": "Probationary period",
            "right": "Thời gian thử việc hai tháng ban đầu"
          },
          {
            "left": "Gem in the rock philosophy",
            "right": "Triết lý Ngọc Trong Đá mài giũa tỏa sáng"
          }
        ]
      },
      {
        "id": "u21-e2",
        "type": "speak",
        "promptEn": "Speak this corporate culture principle clearly:",
        "promptVi": "Luyện nói câu triết lý văn hóa nhân sự đặc sắc của Vikoda:",
        "englishSentence": "Vikoda values integrity, continuous learning, and our signature philosophy: Gem in the rock.",
        "audioText": "Vikoda values integrity, continuous learning, and our signature philosophy: Gem in the rock.",
        "phonetics": "/vɪˈkoʊdə ˈvæljuːz ɪnˈtɛɡrəti, kənˈtɪnjuəs ˈlɜːrnɪŋ, ænd ˈaʊər ˈsɪɡnətʃər fɪˈlɒsəfi: dʒɛm ɪn ðə rɒk/",
        "vietnameseMeaning": "Vikoda đề cao tính chính trực, tinh thần học hỏi không ngừng và triết lý đặc trưng: Ngọc Trong Đá.",
        "explanation": "Triết lý \"Ngọc Trong Đá\" tượng trưng cho mỗi nhân sự như viên ngọc quý được tôi luyện qua thử thách để tỏa sáng.",
        "whyWrong": "Phát âm chuẩn từ \"integrity\" (/ɪnˈtɛɡrəti/) và \"philosophy\" (/fɪˈlɒsəfi/).",
        "crucialNote": "Chính trực là phẩm chất số một được nhấn mạnh trong Cẩm nang đào tạo nhân sự Vikoda 2024.",
        "memoryHook": "Integrity + learning + Gem in the rock = Giá trị cốt lõi Vikoda."
      },
      {
        "id": "u21-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the company onboarding process:",
        "promptVi": "Ghép câu: \"Nhân viên mới sẽ tham gia khóa đào tạo định hướng nhân sự trong tuần đầu tiên\":",
        "englishSentence": "New employees will attend the HR orientation session during their first week.",
        "audioText": "New employees will attend the HR orientation session during their first week.",
        "wordPool": [
          "New",
          "employees",
          "will",
          "attend",
          "the",
          "HR",
          "orientation",
          "session",
          "during",
          "their",
          "first",
          "week.",
          "resign",
          "fire"
        ],
        "vietnameseMeaning": "Nhân viên mới sẽ tham gia khóa đào tạo định hướng nhân sự trong tuần đầu tiên.",
        "explanation": "\"Orientation session\" (buổi đào tạo định hướng hội nhập) giúp tân binh nắm vững văn hóa và quy chế nội bộ.",
        "whyWrong": "\"Orientation\" trang trọng và bài bản hơn việc chỉ gọi là \"introduction\".",
        "crucialNote": "Tất cả nhân sự mới đều được cấp cẩm nang và thẻ nhân viên trong tuần đầu.",
        "memoryHook": "Attend HR orientation session = Tham gia định hướng nhân sự."
      },
      {
        "id": "u21-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct HR term for workplace regulations:",
        "promptVi": "Chọn từ chính xác chỉ bộ quy chuẩn hành vi ứng xử tại công ty:",
        "englishSentence": "All team members must adhere strictly to the corporate code of [ _____ ].",
        "audioText": "All team members must adhere strictly to the corporate code of conduct.",
        "blankWord": "conduct",
        "options": [
          "conduct",
          "traffic",
          "games"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Tất cả thành viên đội ngũ phải tuân thủ nghiêm ngặt bộ quy tắc ứng xử của công ty.",
        "explanation": "\"Code of conduct\" là bộ quy tắc đạo đức và hành vi bắt buộc tại các tập đoàn quốc tế.",
        "whyWrong": "\"Traffic\" (giao thông) hay \"games\" (trò chơi) hoàn toàn sai lệch tính pháp lý nhân sự.",
        "crucialNote": "Tuân thủ bộ quy tắc giúp duy trì môi trường làm việc công bằng, minh bạch và văn minh.",
        "memoryHook": "Code of conduct = Bộ quy tắc ứng xử."
      },
      {
        "id": "u21-e5",
        "type": "chat_branch",
        "promptEn": "Answer an expat specialist inquiring about workplace healthcare benefits on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia kỹ thuật nước ngoài hỏi về chế độ bảo hiểm y tế và chăm sóc sức khỏe tại Vikoda:",
        "englishSentence": "We provide premium international healthcare coverage, annual comprehensive checkups, and free natural mineral water throughout all facilities.",
        "audioText": "We provide premium international healthcare coverage, annual comprehensive checkups, and free natural mineral water throughout all facilities.",
        "chatMessages": [
          {
            "speaker": "Dr. Klaus (German Automation Consultant)",
            "avatar": "🇩🇪",
            "message": "Hi HR team, could you please summarize the medical insurance coverage and wellness benefits for international specialists?"
          }
        ],
        "chatOptions": [
          {
            "text": "We provide premium international healthcare coverage, annual comprehensive checkups, and free natural mineral water throughout all facilities.",
            "trustScore": 25,
            "feedback": "Phản hồi chuẩn mực và đầy sức hút! Liệt kê bảo hiểm quốc tế, khám sức khỏe định kỳ và nguồn nước khoáng chăm sóc sức khỏe.",
            "isCorrect": true
          },
          {
            "text": "You have to go to the local clinic and pay everything out of your own pocket.",
            "trustScore": 0,
            "feedback": "Thiếu chính xác và vi phạm chính sách đãi ngộ chuyên gia cấp cao của tập đoàn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi cung cấp gói bảo hiểm y tế quốc tế cao cấp, khám sức khỏe tổng quát hàng năm và nước khoáng thiên nhiên miễn phí tại tất cả khu vực làm việc.",
        "explanation": "Chế độ phúc lợi toàn diện giữ chân các chuyên gia hàng đầu cống hiến cho dây chuyền sản xuất hiện đại.",
        "crucialNote": "Sức khỏe của người lao động là tài sản vô giá của doanh nghiệp.",
        "memoryHook": "Premium international healthcare + comprehensive checkups."
      }
    ]
  },
  {
    "id": "unit-22",
    "unitNumber": 22,
    "title": "Soạn Thảo Email Công Sở Chuyên Nghiệp",
    "subtitle": "Cấu trúc thư điện tử chuẩn quốc tế, tiêu đề và chữ ký",
    "level": "A2",
    "icon": "✉️",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u22-e1",
        "type": "match_pairs",
        "promptEn": "Match email components with their professional functions:",
        "promptVi": "Ghép cặp các thành phần của email thương mại chuẩn quốc tế với chức năng:",
        "englishSentence": "Match email writing components.",
        "audioText": "Match email writing components.",
        "explanation": "5 khối cấu trúc tạo nên một bức thư điện tử B2B chỉn chu và thuyết phục.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thành phần email thương mại chuyên nghiệp.",
        "pairs": [
          {
            "left": "Concise subject line",
            "right": "Dòng tiêu đề súc tích nêu bật mục đích"
          },
          {
            "left": "Formal salutation",
            "right": "Lời chào mở đầu trang trọng chuẩn mực"
          },
          {
            "left": "Call to action",
            "right": "Lời kêu gọi hành động hoặc hạn phản hồi"
          },
          {
            "left": "Attached document",
            "right": "Tệp tin tài liệu gửi kèm theo thư"
          },
          {
            "left": "Professional sign-off",
            "right": "Lời chúc kết thư và chữ ký đại diện"
          }
        ]
      },
      {
        "id": "u22-e2",
        "type": "speak",
        "promptEn": "Speak this formal email opening sentence clearly:",
        "promptVi": "Luyện nói câu mở đầu email thương mại dẫn chiếu đến cuộc trao đổi trước:",
        "englishSentence": "Further to our meeting yesterday, I am pleased to attach our official commercial proposal.",
        "audioText": "Further to our meeting yesterday, I am pleased to attach our official commercial proposal.",
        "phonetics": "/ˈfɜːrðər tuː ˈaʊər ˈmiːtɪŋ ˈjɛstərdeɪ, aɪ æm pliːzd tuː əˈtætʃ ˈaʊər əˈfɪʃəl kəˈmɜːrʃəl prəˈpoʊzəl/",
        "vietnameseMeaning": "Tiếp nối cuộc họp của chúng ta ngày hôm qua, tôi rất vui lòng được gửi kèm bản đề xuất thương mại chính thức.",
        "explanation": "\"Further to [Sự kiện], I am pleased to [Hành động]\" là câu chuyển ý kinh điển trong thư từ thương mại của Oxford Business English.",
        "whyWrong": "Dùng \"Further to\" lịch thiệp và uyên bác hơn cách nói thô sơ \"Like we said yesterday\".",
        "crucialNote": "Đảm bảo đã đính kèm đúng file trước khi bấm nút gửi thư.",
        "memoryHook": "Further to our meeting + pleased to attach commercial proposal."
      },
      {
        "id": "u22-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to craft a professional sign-off sentence:",
        "promptVi": "Ghép câu: \"Nếu ngài có bất kỳ câu hỏi nào, xin vui lòng liên hệ với tôi\":",
        "englishSentence": "Should you have any questions, please do not hesitate to contact me.",
        "audioText": "Should you have any questions, please do not hesitate to contact me.",
        "wordPool": [
          "Should",
          "you",
          "have",
          "any",
          "questions,",
          "please",
          "do",
          "not",
          "hesitate",
          "to",
          "contact",
          "me.",
          "ignore",
          "forget"
        ],
        "vietnameseMeaning": "Nếu ngài có bất kỳ câu hỏi nào, xin vui lòng liên hệ với tôi.",
        "explanation": "Đảo ngữ câu điều kiện \"Should you have...\" thể hiện đẳng cấp viết thư chuyên nghiệp bậc thầy.",
        "whyWrong": "\"Do not hesitate to contact me\" tạo tâm lý an tâm và sẵn sàng hỗ trợ khách hàng 24/7.",
        "crucialNote": "Mẫu câu kết thư vàng trong mọi văn bản B2B cao cấp.",
        "memoryHook": "Should you have questions + do not hesitate to contact me."
      },
      {
        "id": "u22-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term to reference an attached quotation:",
        "promptVi": "Chọn từ chính xác để dẫn chiếu đến bảng báo giá được gửi đính kèm:",
        "englishSentence": "Please find [ _____ ] our updated price list for the European distribution channel.",
        "audioText": "Please find attached our updated price list for the European distribution channel.",
        "blankWord": "attached",
        "options": [
          "attached",
          "deleted",
          "hidden"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Xin vui lòng xem bảng giá cập nhật cho kênh phân phối châu Âu được đính kèm tại đây.",
        "explanation": "\"Please find attached...\" là cụm từ tiêu chuẩn không thể thiếu khi gửi file báo giá hay hợp đồng.",
        "whyWrong": "\"Deleted\" (đã xóa) hay \"hidden\" (bị giấu đi) là từ ngữ mang nghĩa trái ngược, phá hỏng mục đích email.",
        "crucialNote": "Đặt tên file đính kèm khoa học (VD: Vikoda_PriceList_EUR_2024.pdf).",
        "memoryHook": "Please find attached = Xin xem tệp đính kèm."
      },
      {
        "id": "u22-e5",
        "type": "chat_branch",
        "promptEn": "Review an urgent subject line before sending to an overseas retail buyer on Teams:",
        "promptVi": "Mô phỏng tình huống: Bạn cần gửi email báo giá cho Giám đốc bán lẻ Singapore, hãy chọn dòng tiêu đề hiệu quả nhất:",
        "englishSentence": "[Vikoda B2B] Quotation & Lab Test Certificate for Singapore Market - Attn: Mr. David Tan",
        "audioText": "[Vikoda B2B] Quotation & Lab Test Certificate for Singapore Market - Attn: Mr. David Tan",
        "chatMessages": [
          {
            "speaker": "Internal Quality Control Leader",
            "avatar": "📋",
            "message": "Minh, the Pasteur Institute water lab results are certified. What email subject line should we use for the Singapore buyer?"
          }
        ],
        "chatOptions": [
          {
            "text": "[Vikoda B2B] Quotation & Lab Test Certificate for Singapore Market - Attn: Mr. David Tan",
            "trustScore": 25,
            "feedback": "Tiêu đề tuyệt đỉnh! Rõ ràng danh tính thương hiệu [Vikoda B2B], nội dung chính (Quotation & Lab Certificate) và đích danh người nhận.",
            "isCorrect": true
          },
          {
            "text": "Hey check this price quickly",
            "trustScore": 0,
            "feedback": "Cẩu thả như thư rác (spam)! Rất dễ bị bộ lọc hòm thư doanh nghiệp chặn đứng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "[Vikoda B2B] Báo Giá & Chứng Nhận Kiểm Nghiệm Nước Cho Thị Trường Singapore - Kính gửi: Ông David Tan",
        "explanation": "Dòng tiêu đề chuyên nghiệp quyết định tỷ lệ mở thư lên đến hơn 85% trong thương mại quốc tế.",
        "crucialNote": "Thêm tag thương hiệu dạng ngoặc vuông [Vikoda B2B] giúp đối tác dễ tìm kiếm trong hòm thư.",
        "memoryHook": "Clear tag + content summary + recipient name."
      }
    ]
  },
  {
    "id": "unit-23",
    "unitNumber": 23,
    "title": "Phòng Marketing & Định Vị Thương Hiệu",
    "subtitle": "Chiến dịch truyền thông, mạng xã hội và hình ảnh sản phẩm",
    "level": "A2",
    "icon": "📢",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u23-e1",
        "type": "match_pairs",
        "promptEn": "Match marketing and brand positioning concepts with their definitions:",
        "promptVi": "Ghép cặp các thuật ngữ Marketing và định vị thương hiệu cao cấp:",
        "englishSentence": "Match marketing strategy and brand positioning terms.",
        "audioText": "Match marketing strategy and brand positioning terms.",
        "explanation": "5 khái niệm cốt lõi định hình chiến lược truyền thông nước khoáng kiềm Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ marketing và truyền thông thương hiệu.",
        "pairs": [
          {
            "left": "Unique selling proposition",
            "right": "Lợi thế bán hàng độc nhất vô nhị (USP)"
          },
          {
            "left": "Brand awareness",
            "right": "Độ nhận diện thương hiệu trong tâm trí người dùng"
          },
          {
            "left": "Target audience",
            "right": "Phân khúc khách hàng mục tiêu"
          },
          {
            "left": "Premium positioning",
            "right": "Định vị sản phẩm phân khúc cao cấp"
          },
          {
            "left": "Social media campaign",
            "right": "Chiến dịch truyền thông trên mạng xã hội"
          }
        ]
      },
      {
        "id": "u23-e2",
        "type": "speak",
        "promptEn": "Speak this strategic marketing message clearly:",
        "promptVi": "Luyện nói câu định vị thông điệp truyền thông của Vikoda:",
        "englishSentence": "Our unique selling proposition is natural alkalinity of pH 9.0 bottled directly at the source.",
        "audioText": "Our unique selling proposition is natural alkalinity of pH 9.0 bottled directly at the source.",
        "phonetics": "/ˈaʊər juːˈniːk ˈsɛlɪŋ ˌprɒpəˈzɪʃən ɪz ˈnætʃrəl ˌælkəˈlɪnɪti ɒv piː eɪtʃ naɪn ˈbɒtld dəˈrɛktli æt ðə sɔːrs/",
        "vietnameseMeaning": "Lợi thế bán hàng độc nhất của chúng tôi là tính kiềm tự nhiên pH 9.0 được đóng chai trực tiếp tại nguồn.",
        "explanation": "Thông điệp cốt lõi phân biệt rõ rệt Vikoda với mọi đối thủ cạnh tranh trên thị trường nước đóng chai.",
        "whyWrong": "Phát âm chuẩn cụm từ \"unique selling proposition\" (/juːˈniːk ˈsɛlɪŋ ˌprɒpəˈzɪʃən/).",
        "crucialNote": "Độ kiềm 9.0 từ nguồn tự nhiên là kim chỉ nam cho mọi chiến dịch quảng bá thương hiệu.",
        "memoryHook": "USP = Natural alkalinity pH 9.0 bottled at source."
      },
      {
        "id": "u23-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the health-conscious target consumer:",
        "promptVi": "Ghép câu: \"Chiến dịch quảng cáo mới nhắm đến những người tiêu dùng quan tâm đến sức khỏe\":",
        "englishSentence": "The new marketing campaign targets health-conscious urban consumers.",
        "audioText": "The new marketing campaign targets health-conscious urban consumers.",
        "wordPool": [
          "The",
          "new",
          "marketing",
          "campaign",
          "targets",
          "health-conscious",
          "urban",
          "consumers.",
          "junk",
          "food"
        ],
        "vietnameseMeaning": "Chiến dịch tiếp thị mới nhắm đến những người tiêu dùng thành thị quan tâm đến sức khỏe.",
        "explanation": "\"Health-conscious consumers\" (người tiêu dùng quan tâm đến sức khỏe) là nhóm khách hàng trung thành nhất của Vikoda.",
        "whyWrong": "Người thành thị hiện đại luôn sẵn sàng chi trả cao hơn cho sản phẩm nguồn gốc thiên nhiên thanh lọc cơ thể.",
        "crucialNote": "Từ ghép \"health-conscious\" có dấu gạch nối.",
        "memoryHook": "Targets health-conscious urban consumers."
      },
      {
        "id": "u23-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct branding metric for market recognition:",
        "promptVi": "Chọn chỉ số đo lường hiệu quả quảng bá thương hiệu trong khảo sát thị trường:",
        "englishSentence": "The nationwide sponsorship increased Vikoda brand [ _____ ] by over thirty percent.",
        "audioText": "The nationwide sponsorship increased Vikoda brand awareness by over thirty percent.",
        "blankWord": "awareness",
        "options": [
          "awareness",
          "darkness",
          "blindness"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chương trình tài trợ toàn quốc đã nâng độ nhận diện thương hiệu Vikoda lên hơn 30%.",
        "explanation": "\"Brand awareness\" (độ nhận diện thương hiệu) là chỉ số sống còn đánh giá sức mạnh thương hiệu.",
        "whyWrong": "\"Darkness\" (bóng tối) hay \"blindness\" (sự mù quáng) hoàn toàn vô nghĩa trong marketing.",
        "crucialNote": "Tài trợ các giải chạy marathon và hội nghị thượng đỉnh là chiến lược gia tăng nhận diện hiệu quả cao.",
        "memoryHook": "Brand awareness = Độ nhận diện thương hiệu."
      },
      {
        "id": "u23-e5",
        "type": "chat_branch",
        "promptEn": "Align campaign messaging with an international digital agency on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Agency đề xuất slogan ngắn gọn cho chiến dịch ra mắt dòng chai thủy tinh tại Đông Nam Á:",
        "englishSentence": "\"Pure Alkaline Legacy from Vietnam: Elegance in Every Drop.\" This highlights both our 1957 heritage and luxury dining appeal.",
        "audioText": "\"Pure Alkaline Legacy from Vietnam: Elegance in Every Drop.\" This highlights both our 1957 heritage and luxury dining appeal.",
        "chatMessages": [
          {
            "speaker": "Chloe (Senior Copywriter, Ogilvy Singapore)",
            "avatar": "💡",
            "message": "Team, we need a 7-word tagline for the Southeast Asia glass bottle debut. What core emotions should we evoke?"
          }
        ],
        "chatOptions": [
          {
            "text": "\"Pure Alkaline Legacy from Vietnam: Elegance in Every Drop.\" This highlights both our 1957 heritage and luxury dining appeal.",
            "trustScore": 25,
            "feedback": "Ý tưởng slogan xuất thần! Kết tinh hoàn hảo di sản kiềm tự nhiên từ năm 1957 và vẻ đẹp quý phái trong từng giọt nước.",
            "isCorrect": true
          },
          {
            "text": "\"Just Drink Water Because It Is Cheap and Wet.\"",
            "trustScore": 0,
            "feedback": "Tầm thường và làm tổn hại nghiêm trọng đến định vị phân khúc chai thủy tinh cao cấp.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "\"Di sản Kiềm Tự Nhiên từ Việt Nam: Thanh lịch trong từng giọt nước.\" Câu này làm nổi bật cả bề dày lịch sử 1957 lẫn sự sang trọng trong ẩm thực cao cấp.",
        "explanation": "Định vị dòng chai thủy tinh trong các nhà hàng gắn liền với trải nghiệm ẩm thực tinh hoa (Fine Dining).",
        "crucialNote": "Chai thủy tinh không chỉ đựng nước mà còn là vật trang trí bàn tiệc nghệ thuật.",
        "memoryHook": "Elegance in Every Drop = Thanh lịch trong từng giọt nước."
      }
    ]
  },
  {
    "id": "unit-24",
    "unitNumber": 24,
    "title": "Mục Tiêu Làm Việc & Phân Công Nhiệm Vụ",
    "subtitle": "Phân chia chỉ tiêu công việc và phối hợp đội ngũ",
    "level": "A2",
    "icon": "🎯",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u24-e1",
        "type": "match_pairs",
        "promptEn": "Match delegation and project management terms with their meanings:",
        "promptVi": "Ghép cặp thuật ngữ giao việc và quản trị mục tiêu công việc:",
        "englishSentence": "Match project planning and goal delegation terms.",
        "audioText": "Match project planning and goal delegation terms.",
        "explanation": "5 thuật ngữ đắc lực giúp phân chia công việc minh bạch và theo dõi tiến độ chuẩn xác.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng quản trị mục tiêu và giao việc.",
        "pairs": [
          {
            "left": "Key performance indicator",
            "right": "Chỉ số đánh giá hiệu quả công việc (KPI)"
          },
          {
            "left": "Delegate tasks",
            "right": "Phân công nhiệm vụ rõ ràng cho từng nhân sự"
          },
          {
            "left": "Meet the deadline",
            "right": "Hoàn thành đúng hạn chót cam kết"
          },
          {
            "left": "Action plan",
            "right": "Kế hoạch hành động chi tiết từng bước"
          },
          {
            "left": "Accountability",
            "right": "Tinh thần chịu trách nhiệm giải trình"
          }
        ]
      },
      {
        "id": "u24-e2",
        "type": "speak",
        "promptEn": "Speak this quarterly sales target assignment clearly:",
        "promptVi": "Luyện nói câu giao chỉ tiêu sản lượng tiêu thụ quý cho các vùng thị trường:",
        "englishSentence": "Our primary objective this quarter is to expand distribution into three hundred modern trade supermarkets.",
        "audioText": "Our primary objective this quarter is to expand distribution into three hundred modern trade supermarkets.",
        "phonetics": "/ˈaʊər ˈpraɪmɛri əbˈdʒɛktɪv ðɪs ˈkwɔːrtər ɪz tuː ɪkˈspænd ˌdɪstrɪˈbjuːʃən ˈɪntuː θriː ˈhʌndrəd ˈmɒdərn treɪd ˈsuːpərmɑːrkɪts/",
        "vietnameseMeaning": "Mục tiêu trọng tâm của chúng ta trong quý này là mở rộng mạng lưới phân phối vào 300 siêu thị kênh hiện đại.",
        "explanation": "\"Our primary objective is to [Mục tiêu]\" xác lập hướng đi rõ ràng cho toàn bộ lực lượng kinh doanh.",
        "whyWrong": "Phát âm rõ từ \"primary objective\" (/ˈpraɪmɛri əbˈdʒɛktɪv/) và nối âm \"into three\".",
        "crucialNote": "Kênh siêu thị hiện đại (Modern Trade - MT) đòi hỏi quy chuẩn đàm phán và giao hàng rất chặt chẽ.",
        "memoryHook": "Primary objective this quarter = Mục tiêu trọng tâm quý này."
      },
      {
        "id": "u24-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to delegate documentation tasks to a team member:",
        "promptVi": "Ghép câu: \"Minh, bạn sẽ phụ trách việc chuẩn bị các giấy chứng nhận kiểm nghiệm nguồn nước nhé\":",
        "englishSentence": "Minh will be in charge of preparing the water test certificates.",
        "audioText": "Minh will be in charge of preparing the water test certificates.",
        "wordPool": [
          "Minh",
          "will",
          "be",
          "in",
          "charge",
          "of",
          "preparing",
          "the",
          "water",
          "test",
          "certificates.",
          "sleep",
          "cancel"
        ],
        "vietnameseMeaning": "Minh sẽ phụ trách việc chuẩn bị các giấy chứng nhận kiểm nghiệm nguồn nước nhé.",
        "explanation": "\"Be in charge of [Danh từ / V-ing]\" là cấu trúc giao trọng trách phổ biến nhất trong quản trị doanh nghiệp.",
        "whyWrong": "Xác định rõ đầu mối chịu trách nhiệm (PIC - Person In Charge) giúp tránh tình trạng đùn đẩy công việc.",
        "crucialNote": "Giao quyền đi kèm với hỗ trợ nguồn lực đầy đủ.",
        "memoryHook": "Be in charge of preparing = Phụ trách việc chuẩn bị."
      },
      {
        "id": "u24-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct deadline term in project management:",
        "promptVi": "Chọn từ chính xác để cam kết hoàn thành kế hoạch trước thời hạn:",
        "englishSentence": "We must finalize all shipping paperwork before Friday to meet the strict export [ _____ ].",
        "audioText": "We must finalize all shipping paperwork before Friday to meet the strict export deadline.",
        "blankWord": "deadline",
        "options": [
          "deadline",
          "vacation",
          "holiday"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chúng ta phải hoàn tất toàn bộ chứng từ vận chuyển trước thứ Sáu để kịp hạn chót xuất khẩu nghiêm ngặt.",
        "explanation": "\"Meet the deadline\" là cụm từ vàng chỉ việc hoàn thành đúng hạn cam kết.",
        "whyWrong": "\"Vacation\" (kỳ nghỉ) hay \"holiday\" (ngày lễ) không mang ý nghĩa áp lực tiến độ công việc.",
        "crucialNote": "Trễ hạn chứng từ xuất khẩu có thể khiến container bị kẹt tại cảng gây phát sinh chi phí lưu bãi (demurrage).",
        "memoryHook": "Meet the deadline = Kịp hạn chót."
      },
      {
        "id": "u24-e5",
        "type": "chat_branch",
        "promptEn": "Align daily production quotas with the packaging line supervisor on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Quản đốc xưởng đóng chai báo cáo tiến độ ca sản xuất hôm nay:",
        "englishSentence": "Great progress, Hung! Let's ensure the quality inspection team verifies capping torque before pallet wrapping begins.",
        "audioText": "Great progress, Hung! Let's ensure the quality inspection team verifies capping torque before pallet wrapping begins.",
        "chatMessages": [
          {
            "speaker": "Hung (Bottling Line Shift Manager)",
            "avatar": "⚙️",
            "message": "Minh, shift 1 has just surpassed 15,000 bottles of 500ml PET. We are ahead of schedule by 12%."
          }
        ],
        "chatOptions": [
          {
            "text": "Great progress, Hung! Let's ensure the quality inspection team verifies capping torque before pallet wrapping begins.",
            "trustScore": 25,
            "feedback": "Nhận xét sâu sát và chuyên nghiệp! Vừa biểu dương năng suất vừa nhắc nhở kiểm tra lực siết nắp chai (capping torque) để bảo đảm chất lượng tuyệt đối.",
            "isCorrect": true
          },
          {
            "text": "Whatever, just keep running the machines faster without checking anything.",
            "trustScore": 0,
            "feedback": "Cẩu thả nguy hiểm! Có thể dẫn đến hở nắp rò rỉ nước làm hỏng cả lô hàng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Tiến độ tuyệt vời, anh Hùng! Chúng ta hãy đảm bảo đội kiểm tra chất lượng nghiệm thu lực siết nắp trước khi bắt đầu quấn màng pallet nhé.",
        "explanation": "Kỷ luật phối hợp giữa chỉ tiêu số lượng và tiêu chuẩn chất lượng (QC) là bí quyết làm nên uy tín Vikoda.",
        "crucialNote": "Lực siết nắp chai chuẩn xác bảo lưu nguyên vẹn độ tươi mới của nước khoáng.",
        "memoryHook": "Verify capping torque before pallet wrapping."
      }
    ]
  },
  {
    "id": "unit-25",
    "unitNumber": 25,
    "title": "Kho Vận, Hậu Cần & Đội Xe Giao Hàng",
    "subtitle": "Sắp xếp xe tải, lịch giao hàng và chứng từ xuất kho",
    "level": "A2",
    "icon": "🚛",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u25-e1",
        "type": "match_pairs",
        "promptEn": "Match logistics and fleet dispatch terms with their meanings:",
        "promptVi": "Ghép cặp từ vựng điều phối đội xe vận tải và giao nhận kho vận:",
        "englishSentence": "Match logistics and transportation dispatch phrases.",
        "audioText": "Match logistics and transportation dispatch phrases.",
        "explanation": "5 thuật ngữ kho vận điều phối xe tải giao hàng thông suốt từ nhà máy Diên Khánh.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng kho vận và đội xe giao nhận.",
        "pairs": [
          {
            "left": "Delivery note",
            "right": "Phiếu giao nhận hàng hóa ký nhận thực tế"
          },
          {
            "left": "Fleet dispatch",
            "right": "Điều phối đội xe tải vận chuyển chuyên dụng"
          },
          {
            "left": "Warehouse release order",
            "right": "Lệnh xuất kho hàng hóa chính thức"
          },
          {
            "left": "Estimated time of arrival",
            "right": "Thời gian dự kiến xe hàng đến nơi (ETA)"
          },
          {
            "left": "Proof of delivery",
            "right": "Bằng chứng bàn giao hàng hóa có chữ ký"
          }
        ]
      },
      {
        "id": "u25-e2",
        "type": "speak",
        "promptEn": "Speak this fleet departure notification clearly:",
        "promptVi": "Luyện nói câu thông báo xuất phát của đoàn xe chở nước khoáng:",
        "englishSentence": "Two ten-ton trucks have departed the bottling plant and are scheduled to arrive in Da Nang by five PM.",
        "audioText": "Two ten-ton trucks have departed the bottling plant and are scheduled to arrive in Da Nang by five PM.",
        "phonetics": "/tuː tɛn tʌn trʌks hæv dɪˈpɑːrtɪd ðə ˈbɒtlɪŋ plænt ænd ɑːr ˈskɛdʒuːld tuː əˈraɪv ɪn dɑː næŋ baɪ faɪv piː ɛm/",
        "vietnameseMeaning": "Hai xe tải 10 tấn đã xuất phát từ nhà máy đóng chai và dự kiến đến Đà Nẵng trước 5 giờ chiều.",
        "explanation": "\"Have departed [Nơi đi] and are scheduled to arrive in [Nơi đến] by [Giờ]\" là mẫu câu điều độ vận tải chuẩn xác.",
        "whyWrong": "Phát âm chuẩn từ \"departed\" (/dɪˈpɑːrtɪd/) và \"scheduled\" (/ˈskɛdʒuːld/).",
        "crucialNote": "Đoạn đường Quốc lộ 1A từ Khánh Hòa đi Đà Nẵng mất khoảng 9-10 giờ di chuyển xe tải.",
        "memoryHook": "Departed bottling plant + arrive by five PM."
      },
      {
        "id": "u25-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to instruct the driver to obtain the signed delivery note:",
        "promptVi": "Ghép câu: \"Xin vui lòng lấy phiếu giao hàng có chữ ký từ thủ kho nhận hàng\":",
        "englishSentence": "Please obtain the signed delivery note from the receiving warehouse manager.",
        "audioText": "Please obtain the signed delivery note from the receiving warehouse manager.",
        "wordPool": [
          "Please",
          "obtain",
          "the",
          "signed",
          "delivery",
          "note",
          "from",
          "the",
          "receiving",
          "warehouse",
          "manager.",
          "lose",
          "burn"
        ],
        "vietnameseMeaning": "Xin vui lòng lấy phiếu giao hàng có chữ ký từ thủ kho nhận hàng.",
        "explanation": "Phiếu giao nhận hàng có chữ ký (Signed Delivery Note / POD) là chứng từ pháp lý để phòng kế toán xuất hóa đơn và đối soát công nợ.",
        "whyWrong": "Không bàn giao hàng mà không có chữ ký và con dấu của người nhận có thẩm quyền.",
        "crucialNote": "Chụp ảnh phiếu giao hàng gửi về nhóm điều độ ngay sau khi bốc dỡ xong.",
        "memoryHook": "Obtain signed delivery note = Lấy phiếu giao hàng có chữ ký."
      },
      {
        "id": "u25-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct logistics tracking term for arrival time:",
        "promptVi": "Chọn thuật ngữ viết tắt quốc tế chỉ thời gian dự kiến hàng đến:",
        "englishSentence": "The fleet dispatcher updated the [ _____ ] to three PM due to heavy rain along Highway 1.",
        "audioText": "The fleet dispatcher updated the ETA to three PM due to heavy rain along Highway 1.",
        "blankWord": "ETA",
        "options": [
          "ETA",
          "VIP",
          "ATM"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Bộ phận điều phối xe đã cập nhật thời gian dự kiến đến (ETA) sang 3 giờ chiều do mưa lớn dọc Quốc lộ 1.",
        "explanation": "ETA (Estimated Time of Arrival) là thuật ngữ kho vận được sử dụng phổ biến toàn cầu.",
        "whyWrong": "\"VIP\" (khách quan trọng) hay \"ATM\" (máy rút tiền) không liên quan đến giờ xe đến.",
        "crucialNote": "Cập nhật ETA kịp thời giúp kho nhận chuẩn bị sẵn xe nâng và nhân lực bốc dỡ.",
        "memoryHook": "ETA = Estimated Time of Arrival = Giờ dự kiến đến."
      },
      {
        "id": "u25-e5",
        "type": "chat_branch",
        "promptEn": "Coordinate an urgent stock replenishment for an eco-resort in Cam Ranh on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Khu nghỉ dưỡng 5 sao Cam Ranh hết sạch chai thủy tinh Vikoda vào cuối tuần đông khách:",
        "englishSentence": "Understood! Our emergency shuttle truck has been dispatched with 100 cases of glass bottles. ETA is 45 minutes.",
        "audioText": "Understood! Our emergency shuttle truck has been dispatched with 100 cases of glass bottles. ETA is 45 minutes.",
        "chatMessages": [
          {
            "speaker": "F&B Manager (Anam Resort Cam Ranh)",
            "avatar": "🏖️",
            "message": "Minh, we have 400 wedding banquet guests tonight and need an emergency delivery of 100 cases of Vikoda glass bottles! Can you rush it?"
          }
        ],
        "chatOptions": [
          {
            "text": "Understood! Our emergency shuttle truck has been dispatched with 100 cases of glass bottles. ETA is 45 minutes.",
            "trustScore": 25,
            "feedback": "Phản ứng xuất sắc cấp cứu khách hàng! Điều động xe trung chuyển khẩn cấp cứu nguy cho bàn tiệc cưới resort, ghi điểm tuyệt đối về dịch vụ hậu mãi.",
            "isCorrect": true
          },
          {
            "text": "Sorry, our trucks only deliver on Monday mornings. Please tell your guests to drink tap water.",
            "trustScore": 0,
            "feedback": "Phá hủy uy tín doanh nghiệp! Mất vĩnh viễn khách hàng resort 5 sao lớn nhất khu vực.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Đã rõ! Xe tải trung chuyển khẩn cấp của chúng tôi đã xuất phát chở 100 thùng chai thủy tinh. Thời gian đến dự kiến là 45 phút nữa ạ.",
        "explanation": "Đội xe cơ động phản ứng nhanh khẳng định cam kết đồng hành đáng tin cậy cùng ngành du lịch cao cấp.",
        "crucialNote": "Khoảng cách từ mỏ nước đến các resort Bãi Dài Cam Ranh chỉ khoảng 40km.",
        "memoryHook": "Emergency shuttle dispatched with 45-minute ETA."
      }
    ]
  },
  {
    "id": "unit-26",
    "unitNumber": 26,
    "title": "Tham Gia & Báo Cáo Cuộc Họp Nội Bộ",
    "subtitle": "Trình bày ý kiến, đóng góp phản hồi và thảo luận",
    "level": "A2",
    "icon": "👥",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u26-e1",
        "type": "match_pairs",
        "promptEn": "Match meeting interaction phrases with their professional functions:",
        "promptVi": "Ghép cặp các mẫu câu tham gia thảo luận trong cuộc họp nội bộ:",
        "englishSentence": "Match internal meeting discussion phrases.",
        "audioText": "Match internal meeting discussion phrases.",
        "explanation": "5 mẫu câu giúp bạn đóng góp ý kiến tự tin và xây dựng trong các cuộc họp điều hành.",
        "vietnameseMeaning": "Ghép đúng 5 cặp mẫu câu thảo luận trong cuộc họp công ty.",
        "pairs": [
          {
            "left": "Raise an important point",
            "right": "Nêu lên một điểm thảo luận quan trọng"
          },
          {
            "left": "In my opinion",
            "right": "Theo quan điểm và góc nhìn của tôi"
          },
          {
            "left": "I see your point, but",
            "right": "Tôi hiểu ý bạn, tuy nhiên"
          },
          {
            "left": "Could you clarify that",
            "right": "Bạn có thể giải thích rõ hơn điểm đó được không"
          },
          {
            "left": "Reach a consensus",
            "right": "Đạt được sự đồng thuận chung của cả nhóm"
          }
        ]
      },
      {
        "id": "u26-e2",
        "type": "speak",
        "promptEn": "Speak this diplomatic opinion sharing phrase clearly:",
        "promptVi": "Luyện nói câu đóng góp ý kiến xây dựng trong cuộc họp giao ban:",
        "englishSentence": "From my perspective, upgrading our capping sensors will drastically reduce downtime on line one.",
        "audioText": "From my perspective, upgrading our capping sensors will drastically reduce downtime on line one.",
        "phonetics": "/frɒm maɪ pərˈspɛktɪv, ʌpˈɡreɪdɪŋ ˈaʊər ˈkæpɪŋ ˈsɛnsərz wɪl ˈdræstɪkli rɪˈdjuːs ˈdaʊntaɪm ɒn laɪn wʌn/",
        "vietnameseMeaning": "Theo góc nhìn của tôi, việc nâng cấp các cảm biến đóng nắp sẽ giảm thiểu đáng kể thời gian dừng máy trên dây chuyền một.",
        "explanation": "\"From my perspective, [Giải pháp] will [Kết quả]\" là cách trình bày luận điểm có căn cứ khoa học và thuyết phục cao.",
        "whyWrong": "Dùng từ \"drastically reduce\" (/ˈdræstɪkli rɪˈdjuːs/) thể hiện hiệu quả giảm thiểu mạnh mẽ.",
        "crucialNote": "Trình bày giải pháp kèm theo lợi ích trực tiếp cho năng suất toàn nhà máy.",
        "memoryHook": "From my perspective + reduce downtime."
      },
      {
        "id": "u26-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to politely request elaboration on a report figure:",
        "promptVi": "Ghép câu: \"Bạn có thể giải thích rõ hơn số liệu tiêu thụ tháng này được không?\":",
        "englishSentence": "Could you elaborate more on the consumption figures for this month?",
        "audioText": "Could you elaborate more on the consumption figures for this month?",
        "wordPool": [
          "Could",
          "you",
          "elaborate",
          "more",
          "on",
          "the",
          "consumption",
          "figures",
          "for",
          "this",
          "month?",
          "fight",
          "argue"
        ],
        "vietnameseMeaning": "Bạn có thể giải thích rõ hơn số liệu tiêu thụ tháng này được không?",
        "explanation": "\"Elaborate on [Chủ đề]\" (giải thích chi tiết hơn) là từ ngữ giao tiếp họp hành lịch thiệp chuẩn Oxford English.",
        "whyWrong": "Tránh dùng các từ hạch sách thô lỗ như \"Explain why it is bad\".",
        "crucialNote": "Hỏi để cùng tìm giải pháp tháo gỡ điểm nghẽn tiêu thụ.",
        "memoryHook": "Elaborate more on figures = Giải thích chi tiết hơn các số liệu."
      },
      {
        "id": "u26-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term to indicate agreement in decision making:",
        "promptVi": "Chọn từ chính xác chỉ sự thống nhất ý chí của tập thể trong biên bản họp:",
        "englishSentence": "After constructive debate, all department heads reached a unanimous [ _____ ].",
        "audioText": "After constructive debate, all department heads reached a unanimous consensus.",
        "blankWord": "consensus",
        "options": [
          "consensus",
          "disaster",
          "quarrel"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Sau khi thảo luận mang tính xây dựng, tất cả trưởng bộ phận đã đạt được sự đồng thuận nhất trí.",
        "explanation": "\"Unanimous consensus\" (sự đồng thuận nhất trí 100%) là đỉnh cao của văn hóa làm việc tập thể.",
        "whyWrong": "\"Disaster\" (thảm họa) hay \"quarrel\" (cuộc cãi vã) đi ngược lại tinh thần phối hợp.",
        "crucialNote": "Đồng thuận giúp triển khai kế hoạch sản xuất kinh doanh đồng bộ và nhanh chóng.",
        "memoryHook": "Reach a unanimous consensus = Đạt được sự đồng thuận nhất trí."
      },
      {
        "id": "u26-e5",
        "type": "chat_branch",
        "promptEn": "Support a cross-departmental initiative in management chat on Teams:",
        "promptVi": "Mô phỏng tin nhắn Teams: Giám đốc Kỹ thuật đề xuất đổi lịch bảo trì máy vào tối Chủ Nhật để không ảnh hưởng ca sản xuất thứ Hai:",
        "englishSentence": "Sales and Logistics fully endorse this maintenance window! It ensures zero disruption to our Monday morning export dispatches.",
        "audioText": "Sales and Logistics fully endorse this maintenance window! It ensures zero disruption to our Monday morning export dispatches.",
        "chatMessages": [
          {
            "speaker": "Mr. Thao (Technical Plant Director)",
            "avatar": "🔧",
            "message": "Team, we want to perform preventive maintenance on the Krones blowing machine this Sunday night from 8 PM to 12 AM. Any objections?"
          }
        ],
        "chatOptions": [
          {
            "text": "Sales and Logistics fully endorse this maintenance window! It ensures zero disruption to our Monday morning export dispatches.",
            "trustScore": 25,
            "feedback": "Phối hợp liên phòng ban mẫu mực! Đánh giá cao sáng kiến bảo trì sớm và xác nhận không ảnh hưởng đến đơn hàng xuất khẩu sáng thứ Hai.",
            "isCorrect": true
          },
          {
            "text": "Maintenance is none of my business, don't ask me.",
            "trustScore": 0,
            "feedback": "Tư duy cục bộ ích kỷ! Gây chia rẽ tinh thần đoàn kết giữa các khối nhà máy.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Khối Kinh doanh và Kho vận hoàn toàn ủng hộ khung giờ bảo trì này! Điều này đảm bảo không gián đoạn các chuyến xe xuất khẩu sáng thứ Hai.",
        "explanation": "Hiểu và hỗ trợ lịch trình của phòng ban khác thể hiện tư duy làm chủ công việc ở cấp độ A2.",
        "crucialNote": "Dây chuyền Krones của Đức hoạt động hiệu quả nhất khi được bảo dưỡng định kỳ đúng hạn.",
        "memoryHook": "Fully endorse the maintenance window."
      }
    ]
  },
  {
    "id": "unit-27",
    "unitNumber": 27,
    "title": "Kiểm Kê Tồn Kho & Xếp Dỡ Pallet",
    "subtitle": "Quy tắc xếp hàng chuẩn, kiểm đếm số lượng thực tế",
    "level": "A2",
    "icon": "📦",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u27-e1",
        "type": "match_pairs",
        "promptEn": "Match warehouse inventory and pallet handling terms:",
        "promptVi": "Ghép cặp thuật ngữ kiểm kê kho bãi và bốc xếp hàng pallet:",
        "englishSentence": "Match warehouse inventory and pallet stacking terms.",
        "audioText": "Match warehouse inventory and pallet stacking terms.",
        "explanation": "5 thuật ngữ quản lý kho hàng chuẩn hóa theo tiêu chuẩn 5S và ISO kho vận.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng kiểm kê kho bãi và xếp dỡ hàng hóa.",
        "pairs": [
          {
            "left": "Physical stock count",
            "right": "Kiểm đếm thực tế số lượng hàng tồn kho"
          },
          {
            "left": "Pallet jack",
            "right": "Xe nâng tay chuyên dụng di chuyển hàng"
          },
          {
            "left": "First In First Out (FIFO)",
            "right": "Nguyên tắc nhập trước xuất trước đảm bảo hạn dùng"
          },
          {
            "left": "Stock discrepancy",
            "right": "Chênh lệch giữa số liệu sổ sách và thực tế"
          },
          {
            "left": "Shrink wrap tension",
            "right": "Độ căng của màng bọc màng co pallet"
          }
        ]
      },
      {
        "id": "u27-e2",
        "type": "speak",
        "promptEn": "Speak this inventory stock rule clearly:",
        "promptVi": "Luyện nói câu hướng dẫn tuân thủ nghiêm ngặt nguyên tắc FIFO trong kho hàng:",
        "englishSentence": "All forklift drivers must follow the First-In-First-Out rule to ensure optimal product freshness.",
        "audioText": "All forklift drivers must follow the First-In-First-Out rule to ensure optimal product freshness.",
        "phonetics": "/ɔːl ˈfɔːrklɪft ˈdraɪvərz mʌst ˈfɒloʊ ðə fɜːrst ɪn fɜːrst aʊt ruːl tuː ɪnˈʃʊər ˈɒptɪməl ˈprɒdʌkt ˈfrɛʃnəs/",
        "vietnameseMeaning": "Tất cả tài xế xe nâng phải tuân thủ nguyên tắc Nhập trước - Xuất trước để đảm bảo độ tươi mới tối ưu của sản phẩm.",
        "explanation": "Quy tắc FIFO (First-In, First-Out) bảo đảm các lô hàng sản xuất trước luôn được xuất bán trước, giữ trọn vẹn chất lượng.",
        "whyWrong": "Phát âm chuẩn từ \"forklift\" (/ˈfɔːrklɪft/) và \"optimal freshness\" (/ˈɒptɪməl ˈfrɛʃnəs/).",
        "crucialNote": "Xếp hàng có dán bảng mã lô và ngày sản xuất rõ ràng hướng ra lối đi chính.",
        "memoryHook": "Follow FIFO rule = Tuân thủ nhập trước xuất trước."
      },
      {
        "id": "u27-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to report an exact pallet count after auditing:",
        "promptVi": "Ghép câu: \"Cuộc kiểm kê xác nhận có 120 pallet nước khoáng 500ml đã sẵn sàng\":",
        "englishSentence": "The physical audit confirmed one hundred and twenty pallets are ready for dispatch.",
        "audioText": "The physical audit confirmed one hundred and twenty pallets are ready for dispatch.",
        "wordPool": [
          "The",
          "physical",
          "audit",
          "confirmed",
          "one",
          "hundred",
          "and",
          "twenty",
          "pallets",
          "are",
          "ready",
          "for",
          "dispatch.",
          "lost",
          "broken"
        ],
        "vietnameseMeaning": "Cuộc kiểm kê xác nhận có 120 pallet nước khoáng 500ml đã sẵn sàng để xuất xưởng.",
        "explanation": "\"Physical audit\" (kiểm kê đối chiếu thực tế) xác minh dữ liệu khớp 100% với hệ thống phần mềm quản lý kho.",
        "whyWrong": "\"Ready for dispatch\" là cụm từ chuyên môn chỉ hàng hóa đã đóng gói hoàn thiện và kiểm dịch đạt chuẩn.",
        "crucialNote": "Không xuất hàng khi chưa có biên bản nghiệm thu kiểm đếm.",
        "memoryHook": "Physical audit confirmed pallets ready for dispatch."
      },
      {
        "id": "u27-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for inventory mismatch:",
        "promptVi": "Chọn từ chính xác mô tả sự chênh lệch số lượng giữa sổ sách và thực tế kiểm đếm:",
        "englishSentence": "The monthly audit identified zero stock [ _____ ] thanks to barcode scanning.",
        "audioText": "The monthly audit identified zero stock discrepancy thanks to barcode scanning.",
        "blankWord": "discrepancy",
        "options": [
          "discrepancy",
          "party",
          "celebration"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Đợt kiểm kê hàng tháng ghi nhận không có bất kỳ sai lệch tồn kho nào nhờ vào việc quét mã vạch.",
        "explanation": "\"Stock discrepancy\" là thuật ngữ kế toán kho chỉ sai lệch thiếu hoặc thừa hàng hóa.",
        "whyWrong": "\"Zero discrepancy\" là thành tích xuất sắc của đội ngũ thủ kho Vikoda.",
        "crucialNote": "Ứng dụng máy quét mã vạch không dây giúp triệt tiêu hoàn toàn sai sót thủ công.",
        "memoryHook": "Zero stock discrepancy = Không sai lệch tồn kho."
      },
      {
        "id": "u27-e5",
        "type": "chat_branch",
        "promptEn": "Respond to a warehouse safety audit question regarding pallet stability on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia an toàn lao động hỏi về độ an toàn của các khối pallet xếp chồng cao:",
        "englishSentence": "All export pallets are corner-protected, double-wrapped with stretch film, and limited to 5 tiers for maximum stability.",
        "audioText": "All export pallets are corner-protected, double-wrapped with stretch film, and limited to 5 tiers for maximum stability.",
        "chatMessages": [
          {
            "speaker": "HSE Inspector (Bureau Veritas)",
            "avatar": "🛡️",
            "message": "We are inspecting Bay 4. How do you prevent pallet toppling when stacking heavy glass bottle cases?"
          }
        ],
        "chatOptions": [
          {
            "text": "All export pallets are corner-protected, double-wrapped with stretch film, and limited to 5 tiers for maximum stability.",
            "trustScore": 25,
            "feedback": "Báo cáo an toàn hoàn hảo! Nêu rõ thanh nẹp góc (corner-protected), quấn màng kép và giới hạn 5 tầng xếp để chống đổ ngã.",
            "isCorrect": true
          },
          {
            "text": "We just pile them up as high as the warehouse ceiling to save floor space.",
            "trustScore": 0,
            "feedback": "Vi phạm an toàn lao động nghiêm trọng! Nguy cơ sập đổ gây tai nạn chết người.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Tất cả pallet xuất khẩu đều được nẹp góc bảo vệ, quấn màng co hai lớp và giới hạn tối đa 5 tầng xếp để đảm bảo độ vững chãi cao nhất.",
        "explanation": "Quy chuẩn an toàn kho bãi bảo vệ sinh mạng công nhân và giữ nguyên vẹn chất lượng hàng hóa.",
        "crucialNote": "Nẹp góc bìa cứng chống móp méo các thùng hàng ở mép ngoài.",
        "memoryHook": "Corner-protected, double-wrapped, limited to 5 tiers."
      }
    ]
  },
  {
    "id": "unit-28",
    "unitNumber": 28,
    "title": "An Toàn Lao Động & Thiết Bị Bảo Hộ",
    "subtitle": "Tuân thủ mũ bảo hiểm, giày bảo hộ và găng tay trong xưởng",
    "level": "A2",
    "icon": "⛑️",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u28-e1",
        "type": "match_pairs",
        "promptEn": "Match Personal Protective Equipment (PPE) items with their functions:",
        "promptVi": "Ghép cặp các trang thiết bị bảo hộ lao động (PPE) với công dụng bảo vệ:",
        "englishSentence": "Match PPE safety gear with their protective functions.",
        "audioText": "Match PPE safety gear with their protective functions.",
        "explanation": "5 trang bị bảo hộ bắt buộc khi bước vào khu vực nhà xưởng sản xuất Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thiết bị bảo hộ lao động cá nhân.",
        "pairs": [
          {
            "left": "Steel-toe safety shoes",
            "right": "Giày bảo hộ mũi thép chống dập ngón chân"
          },
          {
            "left": "High-visibility vest",
            "right": "Áo phản quang giúp nhận diện từ xa"
          },
          {
            "left": "Ear protection plugs",
            "right": "Nút tai chống ồn khu vực máy thổi chai"
          },
          {
            "left": "Protective safety goggles",
            "right": "Kính bảo hộ chống bụi và giọt bắn hóa chất"
          },
          {
            "left": "Emergency eyewash station",
            "right": "Bồn rửa mắt khẩn cấp xử lý sự cố hóa chất"
          }
        ]
      },
      {
        "id": "u28-e2",
        "type": "speak",
        "promptEn": "Speak this mandatory safety announcement clearly:",
        "promptVi": "Luyện nói câu nhắc nhở quy định an toàn bắt buộc trước khi vào xưởng sản xuất:",
        "englishSentence": "Wearing full personal protective equipment is strictly mandatory inside the production plant.",
        "audioText": "Wearing full personal protective equipment is strictly mandatory inside the production plant.",
        "phonetics": "/ˈwɛərɪŋ fʊl ˈpɜːrsənl prəˈtɛktɪv ɪˈkwɪpmənt ɪz ˈstrɪktli ˈmændətɔːri ɪnˈsaɪd ðə prəˈdʌkʃən plænt/",
        "vietnameseMeaning": "Trang bị đầy đủ thiết bị bảo hộ lao động là yêu cầu bắt buộc tuyệt đối bên trong nhà xưởng sản xuất.",
        "explanation": "\"Strictly mandatory\" (bắt buộc tuyệt đối) nhấn mạnh chính sách An toàn là trên hết (Safety First) của Vikoda.",
        "whyWrong": "Phát âm rõ từ \"mandatory\" (/ˈmændətɔːri/) và \"equipment\" (/ɪˈkwɪpmənt/).",
        "crucialNote": "Không có ngoại lệ đối với bất kỳ ai, kể cả khách VIP hay ban giám đốc.",
        "memoryHook": "Wearing PPE is strictly mandatory = Đeo bảo hộ là bắt buộc tuyệt đối."
      },
      {
        "id": "u28-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to instruct guests to put on safety shoes before walking:",
        "promptVi": "Ghép câu: \"Xin vui lòng mang giày bảo hộ và đội mũ cứng trước khi vào khu vực chiết rót\":",
        "englishSentence": "Please put on safety shoes and hard hats before entering the bottling area.",
        "audioText": "Please put on safety shoes and hard hats before entering the bottling area.",
        "wordPool": [
          "Please",
          "put",
          "on",
          "safety",
          "shoes",
          "and",
          "hard",
          "hats",
          "before",
          "entering",
          "the",
          "bottling",
          "area.",
          "sandals",
          "run"
        ],
        "vietnameseMeaning": "Xin vui lòng mang giày bảo hộ và đội mũ cứng trước khi vào khu vực chiết rót.",
        "explanation": "Bảo vệ đôi chân và đầu khỏi các nguy cơ rơi rớt đồ đạc hoặc trơn trượt trên sàn ướt.",
        "whyWrong": "Dùng \"put on\" chỉ hành động mang đồ bảo hộ vào người.",
        "crucialNote": "Tủ bảo hộ đón khách luôn chuẩn bị sẵn đủ các kích cỡ giày từ size 36 đến 44.",
        "memoryHook": "Put on safety shoes and hard hats = Mang giày bảo hộ và đội mũ cứng."
      },
      {
        "id": "u28-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for emergency egress in factories:",
        "promptVi": "Chọn từ chính xác chỉ lối thoát hiểm bắt buộc phải luôn thông thoáng:",
        "englishSentence": "Emergency fire [ _____ ] must be kept completely clear of obstacles at all times.",
        "audioText": "Emergency fire exits must be kept completely clear of obstacles at all times.",
        "blankWord": "exits",
        "options": [
          "exits",
          "games",
          "carpets"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Các cửa thoát hiểm khẩn cấp phải luôn được giữ hoàn toàn thông thoáng, không có vật cản vào mọi thời điểm.",
        "explanation": "\"Emergency fire exits\" (cửa thoát hiểm khi hỏa hoạn) là tiêu chuẩn an toàn PCCC tối quan trọng.",
        "whyWrong": "Không được xếp thùng hàng hay pallet chặn lối đi thoát hiểm dù chỉ trong chốc lát.",
        "crucialNote": "Đèn dạ quang chỉ hướng thoát hiểm tự động phát sáng khi mất điện.",
        "memoryHook": "Emergency exits kept clear = Giữ lối thoát hiểm thông thoáng."
      },
      {
        "id": "u28-e5",
        "type": "chat_branch",
        "promptEn": "Enforce factory safety protocols with an external visitor on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Khách nhà báo muốn đi dép lê vào khu vực chiết rót để chụp ảnh phóng sự:",
        "englishSentence": "I apologize, but safety is our non-negotiable priority. Please let me fetch you a pair of sanitized safety boots and a lab coat.",
        "audioText": "I apologize, but safety is our non-negotiable priority. Please let me fetch you a pair of sanitized safety boots and a lab coat.",
        "chatMessages": [
          {
            "speaker": "Reporter Tran (Vietnam Business News)",
            "avatar": "📸",
            "message": "Minh, my leather shoes are a bit tight today, can I just wear my sandals into the clean bottling room for 5 minutes?"
          }
        ],
        "chatOptions": [
          {
            "text": "I apologize, but safety is our non-negotiable priority. Please let me fetch you a pair of sanitized safety boots and a lab coat.",
            "trustScore": 25,
            "feedback": "Cực kỳ chuẩn mực! Kiên quyết bảo vệ quy chuẩn an toàn và vệ sinh phòng sạch, đồng thời chủ động tìm ủng bảo hộ và áo blouse khử khuẩn cho khách.",
            "isCorrect": true
          },
          {
            "text": "Sure, come right in, nobody is watching the cameras right now.",
            "trustScore": 0,
            "feedback": "Vi phạm nghiêm trọng an toàn vệ sinh thực phẩm! Có thể làm nhiễm khuẩn cả lô nước khoáng tiệt trùng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Tôi rất tiếc, nhưng an toàn và vệ sinh là ưu tiên không thể thỏa hiệp của chúng tôi. Xin để tôi lấy cho bạn một đôi ủng bảo hộ đã tiệt trùng và áo choàng phòng sạch nhé.",
        "explanation": "An toàn phòng sạch chiết rót (Cleanroom Bottling) là trái tim chất lượng của nước khoáng Vikoda.",
        "crucialNote": "Quy tắc không thỏa hiệp (Non-negotiable priority) khẳng định phẩm chất chuyên nghiệp.",
        "memoryHook": "Safety is our non-negotiable priority."
      }
    ]
  },
  {
    "id": "unit-29",
    "unitNumber": 29,
    "title": "Báo Cáo Ca Làm Việc Hàng Ngày",
    "subtitle": "Ghi nhận sản lượng ca sản xuất và bàn giao công việc",
    "level": "A2",
    "icon": "📊",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u29-e1",
        "type": "match_pairs",
        "promptEn": "Match production shift handover terms with their definitions:",
        "promptVi": "Ghép cặp thuật ngữ giao ca và báo cáo sản lượng hàng ngày:",
        "englishSentence": "Match shift handover and daily output terms.",
        "audioText": "Match shift handover and daily output terms.",
        "explanation": "5 thuật ngữ không thể thiếu trong sổ nhật ký bàn giao ca sản xuất nhà máy.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng bàn giao ca sản xuất nhà máy.",
        "pairs": [
          {
            "left": "Shift handover log",
            "right": "Sổ nhật ký bàn giao công việc giữa hai ca"
          },
          {
            "left": "Production throughput",
            "right": "Sản lượng đầu ra hoàn thiện của cả ca máy"
          },
          {
            "left": "Unplanned downtime",
            "right": "Thời gian dừng máy đột xuất ngoài kế hoạch"
          },
          {
            "left": "Machine calibration",
            "right": "Hiệu chỉnh thông số kỹ thuật của thiết bị"
          },
          {
            "left": "Defect rate",
            "right": "Tỷ lệ sản phẩm lỗi hỏng trên tổng sản lượng"
          }
        ]
      },
      {
        "id": "u29-e2",
        "type": "speak",
        "promptEn": "Speak this shift handover summary clearly:",
        "promptVi": "Luyện nói câu tóm tắt sản lượng và tình trạng máy móc khi giao ca:",
        "englishSentence": "Morning shift completed forty-five thousand bottles with zero machine failure and a low defect rate.",
        "audioText": "Morning shift completed forty-five thousand bottles with zero machine failure and a low defect rate.",
        "phonetics": "/ˈmɔːrnɪŋ ʃɪft kəmˈpliːtɪd ˈfɔːrti faɪv ˈθaʊzənd ˈbɒtlz wɪð ˈzɪəroʊ məˈʃiːn ˈfeɪljər ænd ə loʊ ˈdiːfɛkt reɪt/",
        "vietnameseMeaning": "Ca sáng đã hoàn thành bốn mươi lăm nghìn chai với không có sự cố máy móc nào và tỷ lệ lỗi cực thấp.",
        "explanation": "Báo cáo ca mẫu mực: Sản lượng + Tình trạng thiết bị + Tỷ lệ sản phẩm lỗi.",
        "whyWrong": "Phát âm rõ cụm từ \"machine failure\" (/məˈʃiːn ˈfeɪljər/) và \"defect rate\" (/ˈdiːfɛkt reɪt/).",
        "crucialNote": "Con số cụ thể giúp ca chiều chủ động kế hoạch đóng thùng tiếp theo.",
        "memoryHook": "Completed 45,000 bottles with zero failure."
      },
      {
        "id": "u29-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to record a brief maintenance pause in the log:",
        "promptVi": "Ghép câu: \"Dây chuyền chiết rót đã tạm dừng 15 phút để thay cuộn nhãn\":",
        "englishSentence": "The bottling line paused for fifteen minutes to replace the label roll.",
        "audioText": "The bottling line paused for fifteen minutes to replace the label roll.",
        "wordPool": [
          "The",
          "bottling",
          "line",
          "paused",
          "for",
          "fifteen",
          "minutes",
          "to",
          "replace",
          "the",
          "label",
          "roll.",
          "break",
          "smash"
        ],
        "vietnameseMeaning": "Dây chuyền chiết rót đã tạm dừng 15 phút để thay cuộn nhãn.",
        "explanation": "Ghi chép chính xác nguyên nhân dừng máy giúp phòng kỹ thuật tối ưu hóa quy trình bảo trì.",
        "whyWrong": "\"Pause to replace the label roll\" là thao tác thay thế vật tư tiêu hao định kỳ bình thường.",
        "crucialNote": "Mỗi cuộn nhãn màng co chứa hàng nghìn nhãn chai thương hiệu Vikoda.",
        "memoryHook": "Paused to replace the label roll = Tạm dừng thay cuộn nhãn."
      },
      {
        "id": "u29-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct manufacturing term for output volume:",
        "promptVi": "Chọn thuật ngữ kỹ thuật chỉ tổng sản lượng thực tế hoàn thành:",
        "englishSentence": "Our total packaging [ _____ ] exceeded the daily target by eight percent.",
        "audioText": "Our total packaging output exceeded the daily target by eight percent.",
        "blankWord": "output",
        "options": [
          "output",
          "debt",
          "crime"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Tổng sản lượng đóng gói của chúng tôi đã vượt chỉ tiêu hàng ngày tám phần trăm.",
        "explanation": "\"Output\" hoặc \"throughput\" là từ chuẩn quốc tế chỉ sản lượng đầu ra trong nhà máy.",
        "whyWrong": "\"Debt\" (nợ) hay \"crime\" (tội phạm) hoàn toàn vô lý trong ngữ cảnh sản xuất.",
        "crucialNote": "Vượt chỉ tiêu nhưng luôn phải đảm bảo kiểm soát chất lượng 100% đạt chuẩn.",
        "memoryHook": "Packaging output exceeded target = Sản lượng vượt chỉ tiêu."
      },
      {
        "id": "u29-e5",
        "type": "chat_branch",
        "promptEn": "Complete shift handover on the company factory management group:",
        "promptVi": "Mô phỏng tin nhắn bàn giao ca chiều cho ca tối: Hãy gửi thông báo chuyên nghiệp và chi tiết nhất:",
        "englishSentence": "Shift 1 successfully bottled 50,000 units. Raw mineral water pressure is stable at 3.2 bar, and preform hopper is fully loaded for Shift 2.",
        "audioText": "Shift 1 successfully bottled 50,000 units. Raw mineral water pressure is stable at 3.2 bar, and preform hopper is fully loaded for Shift 2.",
        "chatMessages": [
          {
            "speaker": "Night Shift Supervisor (An)",
            "avatar": "🌙",
            "message": "Minh, night shift team has arrived. How is the water source pressure and preform stock at line 2?"
          }
        ],
        "chatOptions": [
          {
            "text": "Shift 1 successfully bottled 50,000 units. Raw mineral water pressure is stable at 3.2 bar, and preform hopper is fully loaded for Shift 2.",
            "trustScore": 25,
            "feedback": "Bàn giao ca hoàn hảo! Cung cấp đầy đủ sản lượng ca trước, áp lực nguồn nước ngầm (3.2 bar) và nạp sẵn phôi chai cho ca sau chạy máy ngay.",
            "isCorrect": true
          },
          {
            "text": "We are going home. You guys figure everything out yourselves.",
            "trustScore": 0,
            "feedback": "Vô trách nhiệm! Làm gián đoạn dây chuyền và gây bức xúc cho ca đêm.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Ca 1 đã đóng chai thành công 50.000 sản phẩm. Áp lực nước khoáng thô ổn định ở mức 3.2 bar, và phễu phôi chai đã được nạp đầy cho Ca 2.",
        "explanation": "Bàn giao chi tiết về nguyên vật liệu và thông số kỹ thuật là quy chuẩn ISO 22000 tại nhà máy Đảnh Thạnh.",
        "crucialNote": "Áp lực nguồn nước khoáng tự nhiên 72°C là chỉ số sống còn cần theo dõi liên tục.",
        "memoryHook": "Water pressure stable + preform hopper fully loaded."
      }
    ]
  },
  {
    "id": "unit-30",
    "unitNumber": 30,
    "title": "Giải Quyết Giao Hàng Khẩn Cấp",
    "subtitle": "Phối hợp xử lý đơn hàng gấp cho chuỗi khách hàng",
    "level": "A2",
    "icon": "⚡",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u30-e1",
        "type": "match_pairs",
        "promptEn": "Match emergency dispatch and priority shipping terms:",
        "promptVi": "Ghép cặp thuật ngữ xử lý đơn hàng hỏa tốc và giao hàng khẩn cấp:",
        "englishSentence": "Match urgent logistics and priority dispatch terms.",
        "audioText": "Match urgent logistics and priority dispatch terms.",
        "explanation": "5 thuật ngữ vàng giúp phối hợp nhịp nhàng giữa kinh doanh và kho vận khi có tình huống gấp.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng điều phối giao hàng khẩn cấp.",
        "pairs": [
          {
            "left": "Expedited delivery",
            "right": "Dịch vụ giao hàng hỏa tốc ưu tiên cao nhất"
          },
          {
            "left": "High-priority customer",
            "right": "Khách hàng chiến lược cần ưu tiên đặc biệt"
          },
          {
            "left": "Logistics bottleneck",
            "right": "Điểm nghẽn ách tắc trong chuỗi cung ứng"
          },
          {
            "left": "Emergency buffer stock",
            "right": "Kho hàng dự phòng khẩn cấp tại chỗ"
          },
          {
            "left": "Real-time dispatch tracking",
            "right": "Theo dõi lộ trình xe giao hàng theo thời gian thực"
          }
        ]
      },
      {
        "id": "u30-e2",
        "type": "speak",
        "promptEn": "Speak this reassuring commitment to a worried client:",
        "promptVi": "Luyện nói câu cam kết giao hàng hỏa tốc giải tỏa nỗi lo của đối tác:",
        "englishSentence": "Please do not worry, we have already arranged expedited shipping to deliver your order before five PM.",
        "audioText": "Please do not worry, we have already arranged expedited shipping to deliver your order before five PM.",
        "phonetics": "/pliːz duː nɒt ˈwʌri, wiː hæv ɔːlˈrɛdi əˈreɪndʒd ˈɛkspɪdaɪtɪd ˈʃɪpɪŋ tuː dɪˈlɪvər jʊər ˈɔːrdər bɪˈfɔːr faɪv piː ɛm/",
        "vietnameseMeaning": "Xin quý khách đừng lo lắng, chúng tôi đã bố trí chuyến xe hỏa tốc để giao đơn hàng cho bạn trước 5 giờ chiều.",
        "explanation": "\"Please do not worry, we have already arranged [Hành động]\" là liều thuốc an thần hiệu quả nhất trong xử lý khủng hoảng dịch vụ.",
        "whyWrong": "Dùng tính từ \"expedited\" (/ˈɛkspɪdaɪtɪd/ - hỏa tốc, cấp tốc) thể hiện mức độ ưu tiên tối đa.",
        "crucialNote": "Hành động ngay lập tức thay vì chỉ hứa suông.",
        "memoryHook": "Arranged expedited shipping before 5 PM = Bố trí giao hỏa tốc trước 5h chiều."
      },
      {
        "id": "u30-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to mobilize the reserve fleet for an emergency supermarket order:",
        "promptVi": "Ghép câu: \"Đội xe dự phòng đã được kích hoạt để đáp ứng đơn hàng siêu thị khẩn cấp\":",
        "englishSentence": "Our reserve fleet was mobilized to meet the urgent supermarket demand.",
        "audioText": "Our reserve fleet was mobilized to meet the urgent supermarket demand.",
        "wordPool": [
          "Our",
          "reserve",
          "fleet",
          "was",
          "mobilized",
          "to",
          "meet",
          "the",
          "urgent",
          "supermarket",
          "demand.",
          "cancel",
          "lazy"
        ],
        "vietnameseMeaning": "Đội xe dự phòng đã được kích hoạt để đáp ứng nhu cầu khẩn cấp của hệ thống siêu thị.",
        "explanation": "\"Mobilized to meet demand\" (được huy động để đáp ứng nhu cầu) thể hiện năng lực cung ứng linh hoạt và cơ động của Vikoda.",
        "whyWrong": "Đội xe dự phòng luôn túc trực tại kho Diên Khánh sẵn sàng lên đường 24/7.",
        "crucialNote": "Siêu thị bán lẻ không bao giờ chấp nhận tình trạng đứt hàng trên quầy kệ.",
        "memoryHook": "Reserve fleet mobilized = Huy động đội xe dự phòng."
      },
      {
        "id": "u30-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for supply chain congestion:",
        "promptVi": "Chọn từ chính xác chỉ tình trạng tắc nghẽn giao thông hoặc kho bãi cần tháo gỡ:",
        "englishSentence": "The logistics team resolved the transport [ _____ ] by rerouting trucks via the coastal highway.",
        "audioText": "The logistics team resolved the transport bottleneck by rerouting trucks via the coastal highway.",
        "blankWord": "bottleneck",
        "options": [
          "bottleneck",
          "picnic",
          "festival"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Đội ngũ kho vận đã giải quyết điểm nghẽn vận chuyển bằng cách đổi hướng xe qua đường ven biển.",
        "explanation": "\"Bottleneck\" (nút thắt cổ chai / điểm nghẽn) là thuật ngữ quản trị chuỗi cung ứng phổ biến.",
        "whyWrong": "\"Picnic\" (dã ngoại) hay \"festival\" (lễ hội) không liên quan đến giải pháp vận tải.",
        "crucialNote": "Linh hoạt chuyển hướng đường sá giúp xe né các đoạn ngập lụt hoặc sạt lở mùa mưa bão.",
        "memoryHook": "Resolved the transport bottleneck = Giải quyết điểm nghẽn vận chuyển."
      },
      {
        "id": "u30-e5",
        "type": "chat_branch",
        "promptEn": "Solve a sudden stockout at an international hospital conference on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Bệnh viện quốc tế Vinmec Nha Trang tổ chức hội nghị y khoa 500 bác sĩ bị thiếu nước khoáng:",
        "englishSentence": "We are loading 50 cartons of chilled 350ml glass bottles into our rapid delivery van right now. Arriving in 25 minutes!",
        "audioText": "We are loading 50 cartons of chilled 350ml glass bottles into our rapid delivery van right now. Arriving in 25 minutes!",
        "chatMessages": [
          {
            "speaker": "Hospital Admin Director (Vinmec International)",
            "avatar": "🏥",
            "message": "Minh! The medical summit afternoon session added 200 foreign surgeons and we ran out of mineral water. Can Vikoda save us within 30 minutes?"
          }
        ],
        "chatOptions": [
          {
            "text": "We are loading 50 cartons of chilled 350ml glass bottles into our rapid delivery van right now. Arriving in 25 minutes!",
            "trustScore": 25,
            "feedback": "Cứu nguy hoàn hảo và thần tốc! Giao ngay nước chai thủy tinh cao cấp được ướp lạnh sẵn trong vòng 25 phút, biến khủng hoảng thành cơ hội thắt chặt tình đối tác y tế.",
            "isCorrect": true
          },
          {
            "text": "Our warehouse closes at noon. Please submit an official requisition form next Monday.",
            "trustScore": 0,
            "feedback": "Bộ máy hành chính quan liêu cứng nhắc! Khiến bệnh viện quốc tế mất lòng tin nghiêm trọng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi đang bốc 50 thùng chai thủy tinh 350ml mát lạnh lên xe van phản ứng nhanh ngay lúc này. Xe sẽ đến nơi sau 25 phút nữa ạ!",
        "explanation": "Tốc độ phục vụ thần tốc trong các sự kiện ngoại giao y tế nâng tầm thương hiệu Vikoda lên chuẩn mực quốc tế.",
        "crucialNote": "Các bác sĩ phẫu thuật luôn đánh giá rất cao nước khoáng kiềm giàu vi chất tự nhiên.",
        "memoryHook": "Rapid delivery van arriving in 25 minutes."
      }
    ]
  },
  {
    "id": "unit-31",
    "unitNumber": 31,
    "title": "Chuẩn Bị Tiếp Đón Đoàn Khảo Sát",
    "subtitle": "Kế hoạch tiếp đoàn kiểm tra và khách tham quan nhà máy",
    "level": "A2",
    "icon": "🏭",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u31-e1",
        "type": "match_pairs",
        "promptEn": "Match factory audit preparation terms with their meanings:",
        "promptVi": "Ghép cặp thuật ngữ chuẩn bị đón tiếp đoàn thanh tra và chuyên gia quốc tế:",
        "englishSentence": "Match factory audit and compliance inspection terms.",
        "audioText": "Match factory audit and compliance inspection terms.",
        "explanation": "5 thuật ngữ then chốt trong quy trình thẩm định nhà máy theo tiêu chuẩn HACCP và ISO 22000.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng thẩm định và đón đoàn kiểm tra nhà máy.",
        "pairs": [
          {
            "left": "Compliance audit",
            "right": "Đợt thanh tra kiểm tra mức độ tuân thủ tiêu chuẩn"
          },
          {
            "left": "Sanitation checklist",
            "right": "Bảng kiểm tra vệ sinh an toàn phòng sạch"
          },
          {
            "left": "Laboratory certificate",
            "right": "Chứng thư kiểm nghiệm nguồn nước đạt chuẩn"
          },
          {
            "left": "Factory tour itinerary",
            "right": "Lịch trình chi tiết chuyến tham quan nhà máy"
          },
          {
            "left": "Escort the inspectors",
            "right": "Tháp tùng đón tiếp các chuyên gia thanh tra"
          }
        ]
      },
      {
        "id": "u31-e2",
        "type": "speak",
        "promptEn": "Speak this welcoming statement to international factory inspectors:",
        "promptVi": "Luyện nói câu chào đón đoàn thanh tra an toàn thực phẩm quốc tế:",
        "englishSentence": "Welcome to Vikoda! We are fully prepared to present our automated bottling facilities and quality records.",
        "audioText": "Welcome to Vikoda! We are fully prepared to present our automated bottling facilities and quality records.",
        "phonetics": "/ˈwɛlkəm tuː vɪˈkoʊdə! wiː ɑːr ˈfʊli prɪˈpɛərd tuː prɪˈzɛnt ˈaʊər ˈɔːtəmeɪtɪd ˈbɒtlɪŋ fəˈsɪlɪtiz ænd ˈkwɒləti ˈrɛkɔːrdz/",
        "vietnameseMeaning": "Chào mừng quý vị đến với Vikoda! Chúng tôi đã chuẩn bị đầy đủ để giới thiệu dây chuyền chiết rót tự động và hồ sơ chất lượng.",
        "explanation": "Tác phong tự tin và minh bạch (Fully prepared to present) tạo ấn tượng tuyệt vời ngay từ phút đầu.",
        "whyWrong": "Phát âm chuẩn từ \"automated\" (/ˈɔːtəmeɪtɪd/) và \"facilities\" (/fəˈsɪlɪtiz/).",
        "crucialNote": "Hồ sơ kiểm nghiệm của Viện Pasteur và chứng nhận nguồn khoáng phải được đóng tập sẵn sàng trên bàn làm việc.",
        "memoryHook": "Fully prepared to present facilities and quality records."
      },
      {
        "id": "u31-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to present the itinerary to the audit delegation:",
        "promptVi": "Ghép câu: \"Đây là lịch trình chi tiết cho chuyến khảo sát thực địa sáng nay\":",
        "englishSentence": "Here is the detailed itinerary for this morning's plant inspection.",
        "audioText": "Here is the detailed itinerary for this morning's plant inspection.",
        "wordPool": [
          "Here",
          "is",
          "the",
          "detailed",
          "itinerary",
          "for",
          "this",
          "morning's",
          "plant",
          "inspection.",
          "fake",
          "dirty"
        ],
        "vietnameseMeaning": "Đây là lịch trình chi tiết cho chuyến khảo sát thực địa sáng nay.",
        "explanation": "\"Detailed itinerary\" (lịch trình chi tiết) giúp các chuyên gia quốc tế nắm rõ từng mốc thời gian làm việc.",
        "whyWrong": "Lịch trình bao gồm: Họp mở đầu -> Thăm mỏ khoáng 72°C -> Khu chiết rót phòng sạch -> Phòng thí nghiệm -> Tổng kết.",
        "crucialNote": "Phát âm chuẩn từ \"itinerary\" (/aɪˈtɪnərəri/).",
        "memoryHook": "Detailed itinerary for plant inspection."
      },
      {
        "id": "u31-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for official quality documentation:",
        "promptVi": "Chọn từ chính xác chỉ chứng chỉ chứng nhận chất lượng quốc tế được lưu trữ:",
        "englishSentence": "All ISO 22000 and HACCP [ _____ ] have been laminated and displayed in the main lobby.",
        "audioText": "All ISO 22000 and HACCP certificates have been laminated and displayed in the main lobby.",
        "blankWord": "certificates",
        "options": [
          "certificates",
          "comics",
          "toys"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Tất cả chứng nhận ISO 22000 và HACCP đã được ép màng bảo vệ và trưng bày trang trọng tại sảnh chính.",
        "explanation": "\"Certificates\" (chứng nhận) là bảo chứng pháp lý quan trọng nhất khẳng định uy tín toàn cầu của nhà máy.",
        "whyWrong": "\"Comics\" (truyện tranh) hay \"toys\" (đồ chơi) là những từ ngữ hoàn toàn phi thực tế.",
        "crucialNote": "HACCP và ISO 22000 là hai tấm vé thông hành bắt buộc để xuất khẩu đồ uống sang châu Âu và Mỹ.",
        "memoryHook": "Certificates displayed in the main lobby."
      },
      {
        "id": "u31-e5",
        "type": "chat_branch",
        "promptEn": "Coordinate audit logistics for a Japanese food safety delegation on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Đoàn chuyên gia Nhật Bản đến sớm và yêu cầu kiểm tra khu vực khai thác nguồn nước tại mỏ Đảnh Thạnh trước:",
        "englishSentence": "Certainly! Our Head of Geology will escort the delegation to the 220m wellhead right away. Cleanroom overalls are prepared.",
        "audioText": "Certainly! Our Head of Geology will escort the delegation to the 220m wellhead right away. Cleanroom overalls are prepared.",
        "chatMessages": [
          {
            "speaker": "Mr. Suzuki (Lead Auditor, Japan Food Research)",
            "avatar": "🇯🇵",
            "message": "Minh, we would like to adjust the agenda and inspect the geothermal protection zone at the spring source first before the midday heat."
          }
        ],
        "chatOptions": [
          {
            "text": "Certainly! Our Head of Geology will escort the delegation to the 220m wellhead right away. Cleanroom overalls are prepared.",
            "trustScore": 25,
            "feedback": "Phản hồi linh hoạt và vô cùng hiếu khách! Đáp ứng ngay nguyện vọng của đoàn chuyên gia Nhật và bố trí Trưởng phòng Địa chất tháp tùng tận tình.",
            "isCorrect": true
          },
          {
            "text": "No, our schedule is fixed and you cannot change our plan.",
            "trustScore": 0,
            "feedback": "Thái độ máy móc và bất hợp tác! Khiến đoàn thanh tra đánh giá thấp tính linh hoạt và tinh thần phục vụ của nhà máy.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chắc chắn rồi ạ! Trưởng phòng Địa chất của chúng tôi sẽ tháp tùng đoàn đến đầu giếng khoan 220m ngay bây giờ. Trang phục phòng sạch đã được chuẩn bị sẵn sàng.",
        "explanation": "Đầu giếng khoan khai thác ở độ sâu 220m trong vành đai bảo vệ nghiêm ngặt là điểm thuyết phục mạnh mẽ nhất đối với các chuyên gia Nhật.",
        "crucialNote": "Đoàn Nhật đánh giá cao sự sạch sẽ tuyệt đối và kiến thức địa chất sâu sắc.",
        "memoryHook": "Escort to the 220m wellhead with cleanroom overalls."
      }
    ]
  },
  {
    "id": "unit-32",
    "unitNumber": 32,
    "title": "Soạn Thảo Biên Bản Cuộc Họp",
    "subtitle": "Tóm tắt các quyết định và đầu mối chịu trách nhiệm",
    "level": "A2",
    "icon": "📝",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u32-e1",
        "type": "match_pairs",
        "promptEn": "Match meeting minutes terminology with their definitions:",
        "promptVi": "Ghép cặp thuật ngữ soạn thảo biên bản cuộc họp công ty (Meeting Minutes):",
        "englishSentence": "Match corporate meeting minutes terminology.",
        "audioText": "Match corporate meeting minutes terminology.",
        "explanation": "5 thuật ngữ tiêu chuẩn để lập biên bản cuộc họp minh bạch theo chuẩn Oxford Business English.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ soạn thảo biên bản cuộc họp.",
        "pairs": [
          {
            "left": "Meeting minutes",
            "right": "Biên bản ghi chép cuộc họp chính thức"
          },
          {
            "left": "Action items",
            "right": "Các đầu việc cụ thể cần thực hiện sau cuộc họp"
          },
          {
            "left": "Person in charge (PIC)",
            "right": "Cá nhân hoặc đầu mối chịu trách nhiệm chính"
          },
          {
            "left": "Target deadline",
            "right": "Hạn chót cam kết hoàn thành công việc"
          },
          {
            "left": "Key takeaways",
            "right": "Những điểm cốt lõi và bài học đúc rút"
          }
        ]
      },
      {
        "id": "u32-e2",
        "type": "speak",
        "promptEn": "Speak this meeting summary statement clearly:",
        "promptVi": "Luyện nói câu thông báo gửi biên bản cuộc họp cho các phòng ban:",
        "englishSentence": "I will circulate the official meeting minutes with assigned action items by five PM today.",
        "audioText": "I will circulate the official meeting minutes with assigned action items by five PM today.",
        "phonetics": "/aɪ wɪl ˈsɜːrkjəleɪt ðiː əˈfɪʃəl ˈmiːtɪŋ ˈmɪnɪts wɪð əˈsaɪnd ˈækʃən ˈaɪtəmz baɪ faɪv piː ɛm təˈdeɪ/",
        "vietnameseMeaning": "Tôi sẽ gửi lưu hành biên bản cuộc họp chính thức kèm các đầu việc được phân công trước 5 giờ chiều hôm nay.",
        "explanation": "\"Circulate the meeting minutes\" (lưu hành/gửi biên bản họp đến các thành viên) là thao tác chuyên nghiệp của thư ký cuộc họp.",
        "whyWrong": "Dùng từ \"circulate\" (/ˈsɜːrkjəleɪt/) thể hiện việc phân phối tài liệu đến tất cả những người liên quan.",
        "crucialNote": "Gửi biên bản ngay trong ngày khi các quyết định còn tươi mới trong tâm trí mọi người.",
        "memoryHook": "Circulate meeting minutes with assigned action items."
      },
      {
        "id": "u32-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to define accountability in a project task:",
        "promptVi": "Ghép câu: \"Mỗi đầu việc phải có một đầu mối phụ trách và hạn chót rõ ràng\":",
        "englishSentence": "Every action item must have a designated person in charge and a deadline.",
        "audioText": "Every action item must have a designated person in charge and a deadline.",
        "wordPool": [
          "Every",
          "action",
          "item",
          "must",
          "have",
          "a",
          "designated",
          "person",
          "in",
          "charge",
          "and",
          "a",
          "deadline.",
          "forget",
          "lazy"
        ],
        "vietnameseMeaning": "Mỗi đầu việc phải có một đầu mối phụ trách và hạn chót rõ ràng.",
        "explanation": "Quy tắc vàng trong quản trị doanh nghiệp: Công việc không có PIC (Person In Charge) và Deadline sẽ không bao giờ được hoàn thành.",
        "whyWrong": "\"Designated person in charge\" là cá nhân được chỉ định đích danh chịu trách nhiệm.",
        "crucialNote": "Kiểm tra tiến độ hàng tuần dựa trên danh sách Action Items này.",
        "memoryHook": "Action item = Designated PIC + Deadline."
      },
      {
        "id": "u32-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for unanimous corporate resolution:",
        "promptVi": "Chọn từ chính xác chỉ nghị quyết đã được thông qua trong cuộc họp:",
        "englishSentence": "The board approved the expansion [ _____ ] with one hundred percent agreement.",
        "audioText": "The board approved the expansion resolution with one hundred percent agreement.",
        "blankWord": "resolution",
        "options": [
          "resolution",
          "argument",
          "rumor"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hội đồng quản trị đã thông qua nghị quyết mở rộng với sự đồng thuận một trăm phần trăm.",
        "explanation": "\"Board resolution\" là nghị quyết chính thức của ban lãnh đạo doanh nghiệp.",
        "whyWrong": "\"Argument\" (tranh cãi) hay \"rumor\" (tin đồn) không mang giá trị pháp lý trong văn bản họp.",
        "crucialNote": "Nghị quyết là căn cứ để giải ngân ngân sách đầu tư trang thiết bị mới.",
        "memoryHook": "Approved the resolution = Thông qua nghị quyết."
      },
      {
        "id": "u32-e5",
        "type": "chat_branch",
        "promptEn": "Send draft minutes for rapid review to the Managing Director on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Bạn vừa hoàn thành bản thảo biên bản cuộc họp chiến lược xuất khẩu, hãy xin duyệt nhanh:",
        "englishSentence": "Good afternoon Sir! I have drafted the minutes summarizing key export quotas and assigned PICs. Please review so I can circulate to the team.",
        "audioText": "Good afternoon Sir! I have drafted the minutes summarizing key export quotas and assigned PICs. Please review so I can circulate to the team.",
        "chatMessages": [
          {
            "speaker": "General Director (Vikoda Executive Office)",
            "avatar": "👔",
            "message": "Minh, we just concluded the board strategy session. How quickly can you summarize the export targets and assigned PICs?"
          }
        ],
        "chatOptions": [
          {
            "text": "Good afternoon Sir! I have drafted the minutes summarizing key export quotas and assigned PICs. Please review so I can circulate to the team.",
            "trustScore": 25,
            "feedback": "Tác phong thư ký điều hành xuất sắc! Hoàn thành bản thảo ngay lập tức, tóm tắt chỉ tiêu và đầu mối phân công để lãnh đạo phê duyệt.",
            "isCorrect": true
          },
          {
            "text": "I didn't take any notes during the meeting because I was too sleepy.",
            "trustScore": 0,
            "feedback": "Thiếu năng lực nghiêm trọng! Không thể đảm nhận vị trí công sở.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Kính chào Tổng Giám đốc! Em đã soạn thảo xong biên bản tóm tắt các chỉ tiêu xuất khẩu trọng điểm và phân công đầu mối chịu trách nhiệm. Xin sếp duyệt qua để em gửi đến toàn thể đội ngũ ạ.",
        "explanation": "Tốc độ và sự chuẩn xác trong việc ghi chép biên bản là kỹ năng được ban giám đốc đánh giá cao nhất.",
        "crucialNote": "Đính kèm link file tài liệu Google Docs hoặc Word có chế độ phân quyền rõ ràng.",
        "memoryHook": "Drafted minutes with export quotas and assigned PICs."
      }
    ]
  },
  {
    "id": "unit-33",
    "unitNumber": 33,
    "title": "Hỗ Trợ Tiếp Thị Kệ Trưng Bày Hàng Hóa",
    "subtitle": "Nhận diện và sắp xếp vị trí chai trên kệ điểm bán",
    "level": "A2",
    "icon": "🛒",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u33-e1",
        "type": "match_pairs",
        "promptEn": "Match trade marketing and retail merchandising terms:",
        "promptVi": "Ghép cặp thuật ngữ tiếp thị thương mại và trưng bày điểm bán (Merchandising):",
        "englishSentence": "Match point-of-sale merchandising terms.",
        "audioText": "Match point-of-sale merchandising terms.",
        "explanation": "5 thuật ngữ trade marketing giúp sản phẩm Vikoda luôn nổi bật nhất tại các siêu thị và cửa hàng tiện lợi.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng trưng bày hàng hóa tại điểm bán.",
        "pairs": [
          {
            "left": "Eye-level shelf placement",
            "right": "Trưng bày ngang tầm mắt người mua hàng"
          },
          {
            "left": "Point of sale materials (POSM)",
            "right": "Vật phẩm quảng cáo tiếp thị tại điểm bán"
          },
          {
            "left": "Branded display cooler",
            "right": "Tủ mát trưng bày nước uống mang logo thương hiệu"
          },
          {
            "left": "Endcap display gondola",
            "right": "Kệ đầu dãy thu hút sự chú ý trong siêu thị"
          },
          {
            "left": "Shelf facing",
            "right": "Số lượng mặt chai quay ra ngoài thu hút ánh nhìn"
          }
        ]
      },
      {
        "id": "u33-e2",
        "type": "speak",
        "promptEn": "Speak this trade merchandising standard clearly:",
        "promptVi": "Luyện nói câu chỉ đạo trưng bày sản phẩm ngang tầm mắt tại siêu thị:",
        "englishSentence": "Please ensure Vikoda mineral water is positioned at eye-level with brand labels facing directly forward.",
        "audioText": "Please ensure Vikoda mineral water is positioned at eye-level with brand labels facing directly forward.",
        "phonetics": "/pliːz ɪnˈʃʊər vɪˈkoʊdə ˈmɪnərəl ˈwɔːtər ɪz pəˈzɪʃənd æt aɪ ˈlɛvəl wɪð brænd ˈleɪblz ˈfeɪsɪŋ dəˈrɛktli ˈfɔːrwərd/",
        "vietnameseMeaning": "Xin vui lòng đảm bảo nước khoáng Vikoda được bố trí ngang tầm mắt với nhãn hiệu quay thẳng về phía trước.",
        "explanation": "\"Positioned at eye-level\" (đặt ở vị trí ngang tầm mắt) là vị trí vàng tạo ra hơn 60% doanh số bán lẻ.",
        "whyWrong": "Xoay nhãn chai ra phía trước (facing directly forward) giúp khách hàng nhận diện ngay sắc xanh Cyan đặc trưng.",
        "crucialNote": "Không bao giờ để chai nước bị che khuất sau sản phẩm của đối thủ.",
        "memoryHook": "Positioned at eye-level with labels facing forward."
      },
      {
        "id": "u33-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to instruct sales reps on POSM installation:",
        "promptVi": "Ghép câu: \"Hãy lắp đặt các poster và dải băng quảng cáo tại quầy thanh toán\":",
        "englishSentence": "Install the promotional wobblers and posters near the checkout counter.",
        "audioText": "Install the promotional wobblers and posters near the checkout counter.",
        "wordPool": [
          "Install",
          "the",
          "promotional",
          "wobblers",
          "and",
          "posters",
          "near",
          "the",
          "checkout",
          "counter.",
          "trash",
          "burn"
        ],
        "vietnameseMeaning": "Hãy lắp đặt các poster và dải băng quảng cáo tại quầy thanh toán.",
        "explanation": "Khu vực quầy thanh toán (checkout counter) kích thích hành vi mua sắm bốc đồng (impulse buying) chai nước mát lạnh.",
        "whyWrong": "\"Wobblers\" (con lắc quảng cáo gắn kệ) tạo sự chuyển động vui mắt thu hút người mua.",
        "crucialNote": "Dán vật phẩm quảng cáo ngay ngắn, sạch đẹp và không bong tróc.",
        "memoryHook": "Install POSM near the checkout counter."
      },
      {
        "id": "u33-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct retail display term for refrigerator showcase:",
        "promptVi": "Chọn từ chính xác chỉ tủ mát làm lạnh nước uống tại cửa hàng tiện lợi:",
        "englishSentence": "Keep our branded [ _____ ] fully stocked with cold bottles set at eight degrees Celsius.",
        "audioText": "Keep our branded cooler fully stocked with cold bottles set at eight degrees Celsius.",
        "blankWord": "cooler",
        "options": [
          "cooler",
          "stove",
          "grill"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hãy luôn duy trì tủ mát thương hiệu đầy ắp những chai nước lạnh ở nhiệt độ tám độ C.",
        "explanation": "\"Branded cooler\" (tủ mát thương hiệu) là công cụ bán hàng quyền lực nhất trong mùa hè nóng nực.",
        "whyWrong": "\"Stove\" (bếp ga) hay \"grill\" (vỉ nướng) hoàn toàn trái ngược chức năng làm mát nước giải khát.",
        "crucialNote": "Nhiệt độ 8-10°C mang lại cảm giác uống nước khoáng Đảnh Thạnh sảng khoái tột đỉnh.",
        "memoryHook": "Branded cooler fully stocked = Tủ mát thương hiệu đầy ắp nước lạnh."
      },
      {
        "id": "u33-e5",
        "type": "chat_branch",
        "promptEn": "Guide a field sales supervisor on securing premium endcap space on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Giám sát bán hàng hỏi có nên đàm phán thuê kệ đầu dãy (Endcap) tại siêu thị Lotte Mart dịp lễ:",
        "englishSentence": "Absolutely yes! Secure the beverage endcap immediately. It boosts brand visibility by 40% and we can showcase our 500ml and glass bottle range.",
        "audioText": "Absolutely yes! Secure the beverage endcap immediately. It boosts brand visibility by 40% and we can showcase our 500ml and glass bottle range.",
        "chatMessages": [
          {
            "speaker": "Bao (Key Account Executive - Supermarkets)",
            "avatar": "🏬",
            "message": "Minh, Lotte Mart offered us the main entrance endcap gondola for the upcoming summer campaign. Should we approve the listing fee?"
          }
        ],
        "chatOptions": [
          {
            "text": "Absolutely yes! Secure the beverage endcap immediately. It boosts brand visibility by 40% and we can showcase our 500ml and glass bottle range.",
            "trustScore": 25,
            "feedback": "Quyết định thương mại chuẩn xác! Nắm bắt ngay vị trí kệ đầu dãy đắc địa để bùng nổ doanh số và định vị hình ảnh cao cấp dịp hè.",
            "isCorrect": true
          },
          {
            "text": "No, just hide our bottles on the lowest shelf in the back corner to save money.",
            "trustScore": 0,
            "feedback": "Tư duy bủn xỉn làm tê liệt doanh số! Khách hàng sẽ không thể nhìn thấy sản phẩm.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Tuyệt đối đồng ý! Hãy chốt vị trí kệ đầu dãy ngay lập tức. Vị trí này giúp tăng độ nhận diện thương hiệu thêm 40% và chúng ta có thể phô diễn cả dòng 500ml lẫn chai thủy tinh.",
        "explanation": "Kệ đầu dãy (Endcap Gondola) là vị trí đắc địa nhất siêu thị thu hút mọi ánh nhìn của người đi chợ.",
        "crucialNote": "Kết hợp trưng bày với chương trình khuyến mãi dùng thử nước khoáng mát lạnh.",
        "memoryHook": "Secure the beverage endcap to boost visibility by 40%."
      }
    ]
  },
  {
    "id": "unit-34",
    "unitNumber": 34,
    "title": "Xử Lý Thùng Hàng Móp Méo Vận Chuyển",
    "subtitle": "Báo cáo rách thùng, ẩm ướt và lập biên bản kho",
    "level": "A2",
    "icon": "⚠️",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u34-e1",
        "type": "match_pairs",
        "promptEn": "Match cargo damage and claims terminology with their definitions:",
        "promptVi": "Ghép cặp thuật ngữ xử lý sự cố hàng hóa móp méo và khiếu nại bảo hiểm vận tải:",
        "englishSentence": "Match transit damage inspection and claim terms.",
        "audioText": "Match transit damage inspection and claim terms.",
        "explanation": "5 thuật ngữ pháp lý và kho vận để lập hồ sơ khiếu nại hãng vận tải bồi thường hàng móp méo.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng xử lý sự cố hàng hóa móp méo vận chuyển.",
        "pairs": [
          {
            "left": "Damage inspection report",
            "right": "Biên bản giám định tình trạng hư hỏng hàng hóa"
          },
          {
            "left": "Crushed outer carton",
            "right": "Vỏ thùng carton bên ngoài bị móp méo biến dạng"
          },
          {
            "left": "Photographic evidence",
            "right": "Hình ảnh chụp hiện trường làm bằng chứng pháp lý"
          },
          {
            "left": "Carrier liability claim",
            "right": "Yêu cầu đơn vị vận tải bồi thường thiệt hại"
          },
          {
            "left": "Immediate replacement",
            "right": "Xuất hàng thay thế bù ngay cho khách hàng"
          }
        ]
      },
      {
        "id": "u34-e2",
        "type": "speak",
        "promptEn": "Speak this professional damage notification to a freight partner:",
        "promptVi": "Luyện nói câu thông báo lập biên bản sự cố giao hàng với đại diện hãng xe vận tải:",
        "englishSentence": "Upon unloading, our warehouse recorded four crushed cartons and we have compiled photographic evidence.",
        "audioText": "Upon unloading, our warehouse recorded four crushed cartons and we have compiled photographic evidence.",
        "phonetics": "/əˈpɒn ʌnˈloʊdɪŋ, ˈaʊər ˈwɛərhaʊs rɪˈkɔːrdɪd fɔːr krʌʃt ˈkɑːrtənz ænd wiː hæv kəmˈpaɪld ˌfoʊtəˈɡræfɪk ˈɛvɪdəns/",
        "vietnameseMeaning": "Khi bốc dỡ hàng, kho của chúng tôi ghi nhận có bốn thùng carton bị móp méo và chúng tôi đã tập hợp đầy đủ hình ảnh làm bằng chứng.",
        "explanation": "\"Upon unloading, we recorded [Thiệt hại] and compiled photographic evidence\" là câu thông báo chuẩn mực trong ngành bảo hiểm logistics.",
        "whyWrong": "Phát âm rõ từ \"crushed\" (/krʌʃt/) và \"photographic evidence\" (/ˌfoʊtəˈɡræfɪk ˈɛvɪdəns/).",
        "crucialNote": "Không ký nhận hàng nguyên vẹn nếu phát hiện thùng hàng bị rách hoặc ướt nước.",
        "memoryHook": "Recorded crushed cartons and compiled photographic evidence."
      },
      {
        "id": "u34-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to instruct immediate customer stock replacement:",
        "promptVi": "Ghép câu: \"Chúng tôi sẽ gửi các thùng hàng thay thế mới ngay lập tức cho đại lý\":",
        "englishSentence": "We will send new replacement cases to the distributor immediately.",
        "audioText": "We will send new replacement cases to the distributor immediately.",
        "wordPool": [
          "We",
          "will",
          "send",
          "new",
          "replacement",
          "cases",
          "to",
          "the",
          "distributor",
          "immediately.",
          "delay",
          "refuse"
        ],
        "vietnameseMeaning": "Chúng tôi sẽ gửi các thùng hàng thay thế mới ngay lập tức cho đại lý.",
        "explanation": "Chính sách ưu tiên quyền lợi khách hàng (Customer-First): Đổi mới hàng ngay trước, truy cứu trách nhiệm hãng vận tải sau.",
        "whyWrong": "Dùng \"replacement cases\" (thùng hàng thay thế) thể hiện trách nhiệm bảo vệ người mua hàng.",
        "crucialNote": "Giúp đại lý không bị gián đoạn nguồn hàng bán lẻ.",
        "memoryHook": "Send replacement cases immediately = Gửi hàng thay thế ngay lập tức."
      },
      {
        "id": "u34-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct logistics term for transport reimbursement:",
        "promptVi": "Chọn thuật ngữ pháp lý chỉ hồ sơ đòi hãng vận tải bồi thường bảo hiểm:",
        "englishSentence": "The legal department filed an insurance [ _____ ] for the damaged glass bottles.",
        "audioText": "The legal department filed an insurance claim for the damaged glass bottles.",
        "blankWord": "claim",
        "options": [
          "claim",
          "gift",
          "song"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Phòng pháp chế đã nộp hồ sơ khiếu nại bảo hiểm cho các chai thủy tinh bị hư hại trong quá trình vận chuyển.",
        "explanation": "\"File an insurance claim\" (nộp hồ sơ đòi bảo hiểm bồi thường) là quy trình tài chính bắt buộc để thu hồi vốn thiệt hại.",
        "whyWrong": "\"Gift\" (quà tặng) hay \"song\" (bài hát) hoàn toàn phi lý.",
        "crucialNote": "Thời hạn khiếu nại thường là trong vòng 7 ngày kể từ ngày nhận hàng.",
        "memoryHook": "File an insurance claim = Nộp hồ sơ khiếu nại bảo hiểm."
      },
      {
        "id": "u34-e5",
        "type": "chat_branch",
        "promptEn": "Calm an upset supermarket receiver regarding damp cartons on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Quản lý kho siêu thị phàn nàn xe tải giao hàng trời mưa làm ướt đáy 5 thùng carton:",
        "englishSentence": "We truly apologize! Please reject those 5 damp boxes on the delivery note. Our local warehouse truck will deliver 5 pristine replacement boxes within 1 hour.",
        "audioText": "We truly apologize! Please reject those 5 damp boxes on the delivery note. Our local warehouse truck will deliver 5 pristine replacement boxes within 1 hour.",
        "chatMessages": [
          {
            "speaker": "Ms. Thu (Receiving Manager, Co.opmart Nha Trang)",
            "avatar": "🏬",
            "message": "Minh, the truck arrived during the downpour and 5 cartons at the tailgate got waterlogged. We cannot put soggy boxes on display!"
          }
        ],
        "chatOptions": [
          {
            "text": "We truly apologize! Please reject those 5 damp boxes on the delivery note. Our local warehouse truck will deliver 5 pristine replacement boxes within 1 hour.",
            "trustScore": 25,
            "feedback": "Xử lý khủng hoảng dịch vụ tuyệt vời 100%! Xin lỗi chân thành, hướng dẫn ghi chú loại trừ trên phiếu giao nhận và cam kết giao 5 thùng mới tinh trong 1 giờ.",
            "isCorrect": true
          },
          {
            "text": "The bottles inside are waterproof, just dry the paper boxes with a hairdryer yourself.",
            "trustScore": 0,
            "feedback": "Cực kỳ vô trách nhiệm và bất lịch sự! Siêu thị sẽ từ chối nhập toàn bộ lô hàng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi thành thật xin lỗi! Xin vui lòng từ chối nhận 5 thùng bị ướt đó trên phiếu giao nhận. Xe từ kho địa phương của chúng tôi sẽ giao 5 thùng hàng mới tinh nguyên vẹn đến trong vòng 1 giờ ạ.",
        "explanation": "Bảo vệ tiêu chuẩn hình ảnh thương hiệu Vikoda trên quầy kệ siêu thị là nguyên tắc bất biến.",
        "crucialNote": "Không bao giờ để hàng hóa có bao bì ẩm mốc lọt ra thị trường.",
        "memoryHook": "Reject damp boxes + deliver pristine replacements within 1 hour."
      }
    ]
  },
  {
    "id": "unit-35",
    "unitNumber": 35,
    "title": "Chỉ Đường Đến Nhà Máy Đảnh Thạnh",
    "subtitle": "Hướng dẫn di chuyển từ Nha Trang đến mỏ nước khoáng Diên Khánh",
    "level": "A2",
    "icon": "🗺️",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u35-e1",
        "type": "match_pairs",
        "promptEn": "Match geographical navigation terms from Nha Trang to the spring:",
        "promptVi": "Ghép cặp từ vựng chỉ đường từ trung tâm Nha Trang lên mỏ khoáng Đảnh Thạnh:",
        "englishSentence": "Match geographical navigation terms to Danh Thanh spring.",
        "audioText": "Match geographical navigation terms to Danh Thanh spring.",
        "explanation": "5 mốc địa lý và tuyến đường giao thông huyết mạch dẫn đến cái nôi nguồn khoáng kiềm Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp địa danh và thuật ngữ chỉ đường đến nhà máy Đảnh Thạnh.",
        "pairs": [
          {
            "left": "National Highway 27C",
            "right": "Tuyến Quốc lộ 27C hướng đi Đà Lạt mộng mơ"
          },
          {
            "left": "Dien Tan Commune",
            "right": "Xã Diên Tân, huyện Diên Khánh yên bình"
          },
          {
            "left": "Hon Thom Mountain foothill",
            "right": "Chân dãy núi Hòn Thơm kỳ vĩ bao bọc mỏ"
          },
          {
            "left": "Geothermal protection zone",
            "right": "Vành đai bảo vệ địa nhiệt tự nhiên nghiêm ngặt"
          },
          {
            "left": "Thirty-kilometer drive",
            "right": "Chặng đường ba mươi ki-lô-mét thoáng đãng"
          }
        ]
      },
      {
        "id": "u35-e2",
        "type": "speak",
        "promptEn": "Speak this scenic driving direction clearly:",
        "promptVi": "Luyện nói câu hướng dẫn đối tác tự lái xe từ Nha Trang lên mỏ khoáng Đảnh Thạnh:",
        "englishSentence": "Take National Highway 27C westward for about thirty kilometers until you reach the Dien Tan junction.",
        "audioText": "Take National Highway 27C westward for about thirty kilometers until you reach the Dien Tan junction.",
        "phonetics": "/teɪk ˈnæʃənl ˈhaɪweɪ ˈtwɛnti ˈsɛvən siː ˈwɛstwərd fɔːr əˈbaʊt ˈθɜːrti kɪˈlɒmɪtərz ənˈtɪl juː riːtʃ ðə jʌŋkʃən/",
        "vietnameseMeaning": "Đi theo Quốc lộ 27C về hướng tây khoảng ba mươi ki-lô-mét cho đến khi bạn gặp ngã ba Diên Tân.",
        "explanation": "\"Take [Tên đường] [Hướng đi] for [Khoảng cách] until you reach [Mốc địa lý]\" là cấu trúc chỉ dẫn đường cao tốc chuẩn xác.",
        "whyWrong": "Phát âm rõ cụm \"westward\" (/ˈwɛstwərd/ - hướng về phía tây) và \"junction\" (/ˈdʒʌŋkʃən/ - ngã ba/ngã tư giao cắt).",
        "crucialNote": "Đoạn đường 27C rộng rãi, trải nhựa phẳng và cảnh quan đồi núi hai bên tuyệt đẹp.",
        "memoryHook": "Highway 27C westward + reach Dien Tan junction."
      },
      {
        "id": "u35-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the tranquil mountain setting of the factory:",
        "promptVi": "Ghép câu: \"Nhà máy Đảnh Thạnh nằm yên bình dưới chân dãy núi Hòn Thơm hùng vĩ\":",
        "englishSentence": "The Danh Thanh plant is situated peacefully at the foot of Hon Thom mountain.",
        "audioText": "The Danh Thanh plant is situated peacefully at the foot of Hon Thom mountain.",
        "wordPool": [
          "The",
          "Danh",
          "Thanh",
          "plant",
          "is",
          "situated",
          "peacefully",
          "at",
          "the",
          "foot",
          "of",
          "Hon",
          "Thom",
          "mountain.",
          "dirty",
          "crowded"
        ],
        "vietnameseMeaning": "Nhà máy Đảnh Thạnh nằm yên bình dưới chân dãy núi Hòn Thơm hùng vĩ.",
        "explanation": "Vị trí địa lý đắc địa được mẹ thiên nhiên che chở giúp nguồn nước khoáng giữ trọn độ tinh khiết không bị ô nhiễm công nghiệp.",
        "whyWrong": "\"Situated peacefully at the foot of...\" là cách hành văn miêu tả phong cảnh nên thơ, trang trọng.",
        "crucialNote": "Không khí trong lành mát mẻ quanh năm tại chân núi Hòn Thơm.",
        "memoryHook": "Situated peacefully at the foot of Hon Thom mountain."
      },
      {
        "id": "u35-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct geographical term for road intersection:",
        "promptVi": "Chọn từ chính xác chỉ ngã ba giao cắt có biển chỉ dẫn vào cổng nhà máy:",
        "englishSentence": "Turn left at the Dien Tan [ _____ ] where you will see the large Vikoda welcome gateway.",
        "audioText": "Turn left at the Dien Tan junction where you will see the large Vikoda welcome gateway.",
        "blankWord": "junction",
        "options": [
          "junction",
          "tunnel",
          "bridge"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Rẽ trái tại ngã ba Diên Tân nơi bạn sẽ nhìn thấy cổng chào lớn của Vikoda.",
        "explanation": "\"Junction\" là điểm giao cắt đường giao thông quan trọng để rẽ vào khu vực nhà máy.",
        "whyWrong": "\"Tunnel\" (hầm chui) hay \"bridge\" (cây cầu) không phải là điểm rẽ vào xã Diên Tân.",
        "crucialNote": "Cổng chào Vikoda nổi bật với biểu tượng giọt ngọc khoáng màu xanh Cyan.",
        "memoryHook": "Turn left at junction = Rẽ trái tại ngã ba."
      },
      {
        "id": "u35-e5",
        "type": "chat_branch",
        "promptEn": "Send live location pin and driving tips to a foreign visitor on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia Đức tự lái xe ô tô từ thành phố Nha Trang lên thăm nhà máy Đảnh Thạnh:",
        "englishSentence": "I have shared our Google Maps pin. It is a smooth 40-minute drive on Route 27C. Our reception guard is notified to open the gate for you!",
        "audioText": "I have shared our Google Maps pin. It is a smooth 40-minute drive on Route 27C. Our reception guard is notified to open the gate for you!",
        "chatMessages": [
          {
            "speaker": "Ralf (Senior Automation Engineer)",
            "avatar": "🇩🇪",
            "message": "Minh, I rented an SUV from Tran Phu street. Can you send me the exact GPS coordinates and road advice to the bottling plant?"
          }
        ],
        "chatOptions": [
          {
            "text": "I have shared our Google Maps pin. It is a smooth 40-minute drive on Route 27C. Our reception guard is notified to open the gate for you!",
            "trustScore": 25,
            "feedback": "Chỉ dẫn tận tâm và tiện lợi nhất! Gửi định vị GPS chuẩn xác, ước tính thời gian chạy xe 40 phút và báo trước cho bảo vệ cổng mở barie đón khách.",
            "isCorrect": true
          },
          {
            "text": "Just drive into the countryside until you hear the sound of water bubbling.",
            "trustScore": 0,
            "feedback": "Chỉ đường đùa cợt và thiếu trách nhiệm! Khách sẽ bị lạc giữa vùng núi non.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Em đã gửi ghim vị trí Google Maps qua đây rồi ạ. Đường đi rất êm thuận mất khoảng 40 phút trên Quốc lộ 27C. Bảo vệ cổng đã được báo trước để mở cổng đón anh rồi nhé!",
        "explanation": "Gửi vị trí vệ tinh Google Maps kèm thông báo trước cho cổng bảo vệ là tiêu chuẩn hiếu khách chuyên nghiệp bậc nhất.",
        "crucialNote": "Đoạn đường Quốc lộ 27C kết nối Nha Trang và Đà Lạt có chất lượng đường bộ rất tốt.",
        "memoryHook": "Shared Google Maps pin + smooth 40-minute drive on Route 27C."
      }
    ]
  },
  {
    "id": "unit-36",
    "unitNumber": 36,
    "title": "Kiểm Tra Hạn Sử Dụng & Mã Lô Hàng",
    "subtitle": "Đọc đúng ngày sản xuất (MFG) và hạn sử dụng (EXP) trên nắp",
    "level": "A2",
    "icon": "🔍",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u36-e1",
        "type": "match_pairs",
        "promptEn": "Match product traceability and shelf life markings with their meanings:",
        "promptVi": "Ghép cặp các ký hiệu truy xuất nguồn gốc và hạn sử dụng trên thân chai Vikoda:",
        "englishSentence": "Match batch coding and shelf life terms.",
        "audioText": "Match batch coding and shelf life terms.",
        "explanation": "5 thông số kỹ thuật in bằng tia laser trên cổ chai và nắp chai bảo vệ sức khỏe người tiêu dùng.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thông số hạn dùng và mã truy xuất lô sản phẩm.",
        "pairs": [
          {
            "left": "Manufacturing date (MFG)",
            "right": "Ngày tháng năm sản xuất ra chai nước"
          },
          {
            "left": "Expiry date (EXP)",
            "right": "Hạn sử dụng tối ưu bảo đảm chất lượng (24 tháng)"
          },
          {
            "left": "Batch lot number",
            "right": "Mã số lô sản xuất để truy xuất nguồn gốc"
          },
          {
            "left": "Laser-etched code",
            "right": "Dòng chữ khắc bằng tia laser sắc nét chống tẩy xóa"
          },
          {
            "left": "Twenty-four month shelf life",
            "right": "Thời hạn sử dụng hai mươi tư tháng tiêu chuẩn"
          }
        ]
      },
      {
        "id": "u36-e2",
        "type": "speak",
        "promptEn": "Speak this bottle quality assurance explanation clearly:",
        "promptVi": "Luyện nói câu hướng dẫn khách xem ngày sản xuất và hạn sử dụng khắc laser trên cổ chai:",
        "englishSentence": "The manufacturing and expiry dates are laser-printed clearly on the bottle neck for complete traceability.",
        "audioText": "The manufacturing and expiry dates are laser-printed clearly on the bottle neck for complete traceability.",
        "phonetics": "/ðə ˌmænjʊˈfæktʃərɪŋ ænd ɪkˈspaɪəri deɪts ɑːr ˈleɪzər ˈprɪntɪd ˈklɪərli ɒn ðə ˈbɒtl nɛk fɔːr kəmˈpliːt ˌtreɪsəˈbɪləti/",
        "vietnameseMeaning": "Ngày sản xuất và hạn sử dụng được in bằng laser rõ nét trên cổ chai để truy xuất nguồn gốc hoàn chỉnh.",
        "explanation": "\"Complete traceability\" (khả năng truy xuất nguồn gốc hoàn chỉnh) là yêu cầu khắt khe của các chuỗi bán lẻ quốc tế.",
        "whyWrong": "Phát âm rõ từ \"traceability\" (/ˌtreɪsəˈbɪləti/) và \"laser-printed\" (/ˈleɪzər ˈprɪntɪd/).",
        "crucialNote": "Công nghệ in laser vĩnh viễn ngăn chặn hoàn toàn gian lận in lại hạn sử dụng.",
        "memoryHook": "Laser-printed on bottle neck for complete traceability."
      },
      {
        "id": "u36-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the standard two-year shelf life:",
        "promptVi": "Ghép câu: \"Nước khoáng thiên nhiên Vikoda có hạn sử dụng tiêu chuẩn là hai mươi tư tháng\":",
        "englishSentence": "Vikoda natural mineral water has a standard shelf life of twenty-four months.",
        "audioText": "Vikoda natural mineral water has a standard shelf life of twenty-four months.",
        "wordPool": [
          "Vikoda",
          "natural",
          "mineral",
          "water",
          "has",
          "a",
          "standard",
          "shelf",
          "life",
          "of",
          "twenty-four",
          "months.",
          "expired",
          "bad"
        ],
        "vietnameseMeaning": "Nước khoáng thiên nhiên Vikoda có hạn sử dụng tiêu chuẩn là hai mươi tư tháng.",
        "explanation": "Nhờ nguồn nước vô trùng từ lòng đất và quy trình đóng chai siêu sạch, nước khoáng Vikoda giữ nguyên độ tươi ngon suốt 2 năm.",
        "whyWrong": "\"Shelf life\" là thuật ngữ chuyên ngành chỉ thời hạn lưu kho và bày bán an toàn.",
        "crucialNote": "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.",
        "memoryHook": "Standard shelf life of twenty-four months."
      },
      {
        "id": "u36-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct traceability term for product tracking:",
        "promptVi": "Chọn thuật ngữ chỉ mã số định danh riêng biệt của từng đợt sản xuất:",
        "englishSentence": "Every carton displays a unique [ _____ ] number corresponding to the bottling hour.",
        "audioText": "Every carton displays a unique batch number corresponding to the bottling hour.",
        "blankWord": "batch",
        "options": [
          "batch",
          "song",
          "joke"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Mỗi thùng hàng hiển thị một mã số lô duy nhất tương ứng với giờ đóng chai thực tế.",
        "explanation": "\"Batch number\" hoặc \"Lot number\" là mã số sống còn để truy cứu lại mẫu lưu kho và kết quả kiểm nghiệm phòng lab.",
        "whyWrong": "\"Song\" (bài hát) hay \"joke\" (lời nói đùa) không mang ý nghĩa kiểm soát chất lượng.",
        "crucialNote": "Vikoda lưu mẫu đối chứng của tất cả các lô sản xuất trong vòng 2 năm.",
        "memoryHook": "Unique batch number = Mã số lô duy nhất."
      },
      {
        "id": "u36-e5",
        "type": "chat_branch",
        "promptEn": "Verify batch freshness for a Singapore customs quarantine officer on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Hải quan Singapore yêu cầu kiểm tra ngày sản xuất của lô hàng container vừa cập bến cảng Jurong:",
        "englishSentence": "Batch VK24-0812 was bottled on August 12, 2024, with expiry August 12, 2026. The water is perfectly fresh and matches the sanitary phytosanitary certificate.",
        "audioText": "Batch VK24-0812 was bottled on August 12, 2024, with expiry August 12, 2026. The water is perfectly fresh and matches the sanitary phytosanitary certificate.",
        "chatMessages": [
          {
            "speaker": "Inspector Lim (Singapore Food Agency - Port Authority)",
            "avatar": "🇸🇬",
            "message": "We are inspecting container TGHU918234. Please confirm the exact production date and certificate link for Lot VK24-0812."
          }
        ],
        "chatOptions": [
          {
            "text": "Batch VK24-0812 was bottled on August 12, 2024, with expiry August 12, 2026. The water is perfectly fresh and matches the sanitary phytosanitary certificate.",
            "trustScore": 25,
            "feedback": "Phản hồi chuẩn xác từng chi tiết! Cung cấp đúng ngày đóng chai, ngày hết hạn và dẫn chiếu khớp 100% với chứng thư kiểm dịch vệ sinh, giúp thông quan tức thì.",
            "isCorrect": true
          },
          {
            "text": "I don't know when it was bottled, just look at the boxes yourself.",
            "trustScore": 0,
            "feedback": "Tắc trách nghiêm trọng! Có thể khiến hải quan giữ hàng phạt tiền lưu công hàng chục nghìn đô la.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Lô hàng VK24-0812 được đóng chai vào ngày 12 tháng 8 năm 2024, hạn sử dụng đến ngày 12 tháng 8 năm 2026. Nước hoàn toàn tươi mới và khớp chính xác với chứng nhận kiểm dịch an toàn thực phẩm.",
        "explanation": "Cung cấp dữ liệu truy xuất tức thì khẳng định năng lực điều hành chuỗi cung ứng chuẩn mực quốc tế của Vikoda.",
        "crucialNote": "Thị trường Singapore có hệ thống kiểm tra an toàn thực phẩm nghiêm ngặt nhất châu Á.",
        "memoryHook": "Batch verified with exact production date and sanitary certificate."
      }
    ]
  },
  {
    "id": "unit-37",
    "unitNumber": 37,
    "title": "Nhận Diện Dòng Chai Thủy Tinh Cao Cấp",
    "subtitle": "Mô tả chai thủy tinh sang trọng nắp vương miện",
    "level": "A2",
    "icon": "🍾",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u37-e1",
        "type": "match_pairs",
        "promptEn": "Match premium glass bottle features with their luxury dining benefits:",
        "promptVi": "Ghép cặp đặc điểm của dòng chai thủy tinh Vikoda với giá trị ẩm thực sang trọng:",
        "englishSentence": "Match luxury glass bottle features with dining benefits.",
        "audioText": "Match luxury glass bottle features with dining benefits.",
        "explanation": "5 đặc tính thượng hạng biến chai thủy tinh Vikoda thành biểu tượng quý phái trên bàn tiệc cao cấp.",
        "vietnameseMeaning": "Ghép đúng 5 cặp đặc tính của dòng chai thủy tinh sang trọng Vikoda.",
        "pairs": [
          {
            "left": "Luxury glass bottle",
            "right": "Chai thủy tinh cao cấp trong suốt tinh tế"
          },
          {
            "left": "Crown metal cap",
            "right": "Nắp vương miện kim loại kín khí tuyệt đối"
          },
          {
            "left": "Fine dining aesthetic",
            "right": "Vẻ đẹp thẩm mỹ sang trọng cho bàn tiệc 5 sao"
          },
          {
            "left": "Zero plastic footprint",
            "right": "Cam kết bảo vệ môi trường không rác thải nhựa"
          },
          {
            "left": "Optimal mineral preservation",
            "right": "Bảo toàn hoàn hảo hương vị vi khoáng nguyên bản"
          }
        ]
      },
      {
        "id": "u37-e2",
        "type": "speak",
        "promptEn": "Speak this luxury bottle presentation pitch clearly:",
        "promptVi": "Luyện nói câu giới thiệu dòng chai thủy tinh với giám đốc nhà hàng ẩm thực 5 sao:",
        "englishSentence": "Vikoda glass bottles enhance fine dining elegance while preserving pure natural alkalinity at its peak.",
        "audioText": "Vikoda glass bottles enhance fine dining elegance while preserving pure natural alkalinity at its peak.",
        "phonetics": "/vɪˈkoʊdə ɡlæs ˈbɒtlz ɪnˈhɑːns faɪn ˈdaɪnɪŋ ˈɛlɪɡəns waɪl prɪˈzɜːrvɪŋ pjʊər ˈnætʃrəl ˌælkəˈlɪnɪti æt ɪts piːk/",
        "vietnameseMeaning": "Chai thủy tinh Vikoda nâng tầm sự thanh lịch của ẩm thực cao cấp đồng thời lưu giữ trọn vẹn độ kiềm tự nhiên ở đỉnh cao nhất.",
        "explanation": "Thủy tinh là vật liệu trơ hoàn hảo nhất: không mùi, không thôi nhiễm, tôn vinh độ trong vắt như pha lê của nước khoáng.",
        "whyWrong": "Phát âm chuẩn từ \"elegance\" (/ˈɛlɪɡəns/) và \"preserving\" (/prɪˈzɜːrvɪŋ/).",
        "crucialNote": "Dòng sản phẩm thủy tinh định vị Vikoda sánh ngang các thương hiệu nước khoáng lừng danh thế giới như San Pellegrino hay Evian.",
        "memoryHook": "Enhance fine dining elegance + preserve natural alkalinity."
      },
      {
        "id": "u37-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the eco-friendly aspect of glass bottles:",
        "promptVi": "Ghép câu: \"Bao bì thủy tinh có thể tái chế một trăm phần trăm và giảm thiểu rác thải nhựa\":",
        "englishSentence": "Glass packaging is one hundred percent recyclable and reduces plastic waste.",
        "audioText": "Glass packaging is one hundred percent recyclable and reduces plastic waste.",
        "wordPool": [
          "Glass",
          "packaging",
          "is",
          "one",
          "hundred",
          "percent",
          "recyclable",
          "and",
          "reduces",
          "plastic",
          "waste.",
          "pollute",
          "harm"
        ],
        "vietnameseMeaning": "Bao bì thủy tinh có thể tái chế một trăm phần trăm và giảm thiểu rác thải nhựa.",
        "explanation": "Xu hướng tiêu dùng xanh (Green & Sustainable Luxury): Các khách sạn 5 sao quốc tế đang chuyển dịch 100% sang chai thủy tinh.",
        "whyWrong": "\"One hundred percent recyclable\" là cam kết môi trường mạnh mẽ thu hút khách hàng thế hệ mới.",
        "crucialNote": "Góp phần giảm thiểu phát thải carbon và rác thải nhựa ra đại dương.",
        "memoryHook": "100% recyclable and reduces plastic waste."
      },
      {
        "id": "u37-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for high-end hospitality venues:",
        "promptVi": "Chọn từ chính xác chỉ phân khúc nhà hàng khách sạn ẩm thực cao cấp:",
        "englishSentence": "Our glass bottles are served exclusively in Michelin-starred venues and luxury [ _____ ].",
        "audioText": "Our glass bottles are served exclusively in Michelin-starred venues and luxury resorts.",
        "blankWord": "resorts",
        "options": [
          "resorts",
          "jungles",
          "caves"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chai thủy tinh của chúng tôi được phục vụ độc quyền tại các địa điểm đạt sao Michelin và các khu nghỉ dưỡng sang trọng.",
        "explanation": "\"Luxury resorts\" (khu nghỉ dưỡng sang trọng) là phân khúc khách hàng mục tiêu hàng đầu của dòng chai thủy tinh Vikoda.",
        "whyWrong": "\"Jungles\" (rừng rậm) hay \"caves\" (hang động) không phải là kênh phân phối ẩm thực cao cấp.",
        "crucialNote": "Khách hàng tại resort nghỉ dưỡng luôn đánh giá cao sự tinh tế của chất liệu thủy tinh.",
        "memoryHook": "Michelin-starred venues and luxury resorts."
      },
      {
        "id": "u37-e5",
        "type": "chat_branch",
        "promptEn": "Advise a Michelin-guide chef on beverage pairing with Vikoda glass bottles on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Bếp trưởng nhà hàng gắn sao Michelin tại Hội An hỏi về khả năng kết hợp nước khoáng Vikoda chai thủy tinh với món ăn cao cấp:",
        "englishSentence": "Vikoda glass bottles with pH 9.0 cleanse the palate between courses, allowing diners to appreciate subtle flavors of your seafood creations fully.",
        "audioText": "Vikoda glass bottles with pH 9.0 cleanse the palate between courses, allowing diners to appreciate subtle flavors of your seafood creations fully.",
        "chatMessages": [
          {
            "speaker": "Chef Antoine (Executive Chef, La Maison Hoi An)",
            "avatar": "👨‍🍳",
            "message": "Minh, we are redesigning our 8-course tasting menu. How does the mineral profile of your glass bottle water interact with delicate seafood?"
          }
        ],
        "chatOptions": [
          {
            "text": "Vikoda glass bottles with pH 9.0 cleanse the palate between courses, allowing diners to appreciate subtle flavors of your seafood creations fully.",
            "trustScore": 25,
            "feedback": "Kiến thức ẩm thực hàn lâm đỉnh cao! Khẳng định công dụng làm sạch vòm miệng (cleanse the palate) của nước kiềm pH 9.0 giúp thực khách cảm nhận trọn vẹn vị tươi ngọt của hải sản cao cấp.",
            "isCorrect": true
          },
          {
            "text": "Water is just water, chef. Your guests will drink wine anyway so don't care about water.",
            "trustScore": 0,
            "feedback": "Thiếu hiểu biết sâu sắc về văn hóa ẩm thực fine dining! Bếp trưởng danh tiếng sẽ không bao giờ chọn nhà cung cấp thiếu tinh tế này.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chai thủy tinh Vikoda với độ pH 9.0 làm thanh sạch vòm họng giữa các món ăn, giúp thực khách thưởng thức trọn vẹn những hương vị tinh tế trong các sáng tạo hải sản của ngài.",
        "explanation": "Trong nghệ thuật ẩm thực thế giới, nước khoáng kiềm được dùng như một chất thanh vị (palate cleanser) hoàn hảo.",
        "crucialNote": "Chai thủy tinh Vikoda đứng kiêu hãnh bên cạnh các chai rượu vang danh giá.",
        "memoryHook": "Cleanse the palate between tasting courses."
      }
    ]
  },
  {
    "id": "unit-38",
    "unitNumber": 38,
    "title": "Không Gian Xanh Sinh Thái Mỏ Nước",
    "subtitle": "Mô tả cây xanh và môi trường trong lành quanh mỏ khoáng",
    "level": "A2",
    "icon": "🌿",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u38-e1",
        "type": "match_pairs",
        "promptEn": "Match environmental protection and ecological concepts with their meanings:",
        "promptVi": "Ghép cặp các khái niệm bảo vệ môi trường sinh thái quanh nguồn khoáng Đảnh Thạnh:",
        "englishSentence": "Match ecological conservation and sanctuary terms.",
        "audioText": "Match ecological conservation and sanctuary terms.",
        "explanation": "5 giá trị xanh bảo vệ sự thanh khiết tuyệt đối của mỏ nước khoáng Đảnh Thạnh suốt hơn 60 năm qua.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ bảo vệ môi trường sinh thái mỏ nước.",
        "pairs": [
          {
            "left": "Ecological sanctuary",
            "right": "Khu bảo tồn sinh thái thiên nhiên nguyên sinh"
          },
          {
            "left": "Groundwater protection zone",
            "right": "Vành đai bảo vệ nghiêm ngặt nguồn nước ngầm"
          },
          {
            "left": "Pristine forest canopy",
            "right": "Tán rừng nguyên sinh xanh mát che chở nguồn nước"
          },
          {
            "left": "Zero chemical contamination",
            "right": "Tuyệt đối không có bất kỳ ô nhiễm hóa chất nào"
          },
          {
            "left": "Sustainable stewardship",
            "right": "Trách nhiệm quản trị tài nguyên thiên nhiên bền vững"
          }
        ]
      },
      {
        "id": "u38-e2",
        "type": "speak",
        "promptEn": "Speak this eco-heritage statement clearly:",
        "promptVi": "Luyện nói câu tự hào giới thiệu không gian sinh thái bao bọc mỏ nước khoáng:",
        "englishSentence": "A thirty-five hectare protected green sanctuary surrounds our mineral spring, safeguarding the aquifer from any human pollution.",
        "audioText": "A thirty-five hectare protected green sanctuary surrounds our mineral spring, safeguarding the aquifer from any human pollution.",
        "phonetics": "/ə ˈθɜːrti faɪv ˈhɛktɛər prəˈtɛktɪd ɡriːn ˈsæŋktʃʊəri səˈraʊndz ˈaʊər ˈmɪnərəl sprɪŋ, ˈseɪfɡɑːrdɪŋ ðiː ˈækwɪfər frɒm ˈɛni ˈhjuːmən pəˈluːʃən/",
        "vietnameseMeaning": "Một vành đai bảo vệ sinh thái xanh rộng ba mươi lăm héc-ta bao bọc mỏ khoáng, bảo vệ tầng nước ngầm khỏi bất kỳ sự ô nhiễm nào từ con người.",
        "explanation": "\"Green sanctuary safeguards the aquifer\" là thông điệp bảo tồn thiên nhiên đáng tự hào nhất của Vikoda.",
        "whyWrong": "Phát âm chuẩn từ \"sanctuary\" (/ˈsæŋktʃʊəri/) và \"aquifer\" (/ˈækwɪfər/ - tầng chứa nước ngầm).",
        "crucialNote": "Khu bảo tồn 35ha không có bất kỳ nhà máy công nghiệp hay thuốc trừ sâu nông nghiệp nào xâm lấn.",
        "memoryHook": "35-hectare sanctuary safeguards the aquifer from pollution."
      },
      {
        "id": "u38-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the natural forest recharge process:",
        "promptVi": "Ghép câu: \"Nước mưa được lọc chậm rãi qua nhiều tầng địa chất tự nhiên\":",
        "englishSentence": "Rainwater is naturally filtered through deep volcanic geological strata over decades.",
        "audioText": "Rainwater is naturally filtered through deep volcanic geological strata over decades.",
        "wordPool": [
          "Rainwater",
          "is",
          "naturally",
          "filtered",
          "through",
          "deep",
          "volcanic",
          "geological",
          "strata",
          "over",
          "decades.",
          "factory",
          "waste"
        ],
        "vietnameseMeaning": "Nước mưa được lọc tự nhiên qua các tầng địa chất núi lửa sâu thẳm qua nhiều thập kỷ.",
        "explanation": "Hành trình lọc tự nhiên qua các tầng đá mẹ magma núi lửa hàng chục năm tích tụ khoáng chất quý giá và tính kiềm nguyên bản.",
        "whyWrong": "\"Geological strata\" (/ˌdʒiːəˈlɒdʒɪkəl ˈstrɑːtə/) là thuật ngữ địa chất học chỉ các tầng lớp đất đá tích tụ.",
        "crucialNote": "Không có máy móc lọc nhân tạo nào tái tạo được sự tinh vi của các tầng đá mẹ thiên nhiên.",
        "memoryHook": "Filtered through deep volcanic strata over decades."
      },
      {
        "id": "u38-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct conservation term for nature protection:",
        "promptVi": "Chọn từ chính xác chỉ sự cam kết bảo tồn thiên nhiên cho các thế hệ tương lai:",
        "englishSentence": "Vikoda is committed to environmental [ _____ ] and preserving our green sanctuary forever.",
        "audioText": "Vikoda is committed to environmental sustainability and preserving our green sanctuary forever.",
        "blankWord": "sustainability",
        "options": [
          "sustainability",
          "destruction",
          "pollution"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda cam kết phát triển môi trường bền vững và bảo tồn vành đai sinh thái xanh của chúng tôi mãi mãi.",
        "explanation": "\"Environmental sustainability\" (tính bền vững về môi trường) là trụ cột phát triển ESG cốt lõi của tập đoàn FIT / Vikoda.",
        "whyWrong": "\"Destruction\" (sự phá hủy) hay \"pollution\" (sự ô nhiễm) là những hành vi vi phạm đạo đức kinh doanh.",
        "crucialNote": "Trồng thêm hàng nghìn cây xanh bản địa hàng năm để làm giàu thảm thực vật mỏ khoáng.",
        "memoryHook": "Committed to environmental sustainability."
      },
      {
        "id": "u38-e5",
        "type": "chat_branch",
        "promptEn": "Answer an ESG investment fund director inquiring about spring conservation on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Quỹ đầu tư phát triển bền vững quốc tế (ESG) hỏi về chính sách bảo tồn nguồn tài nguyên nước ngầm của Vikoda:",
        "englishSentence": "We strictly harvest only a fraction of natural recharge capacity and monitor water table pressure 24/7 to guarantee infinite natural replenishment.",
        "audioText": "We strictly harvest only a fraction of natural recharge capacity and monitor water table pressure 24/7 to guarantee infinite natural replenishment.",
        "chatMessages": [
          {
            "speaker": "Elena (ESG Portfolio Director, Green Nordic Fund)",
            "avatar": "🌱",
            "message": "Minh, before investing in green bonds, we must verify: Does Vikoda over-extract groundwater beyond its natural replenishment rate?"
          }
        ],
        "chatOptions": [
          {
            "text": "We strictly harvest only a fraction of natural recharge capacity and monitor water table pressure 24/7 to guarantee infinite natural replenishment.",
            "trustScore": 25,
            "feedback": "Câu trả lời đáp ứng chuẩn mực ESG cao nhất thế giới! Khẳng định chỉ khai thác một phần nhỏ công suất bổ hồi tự nhiên và đo áp lực tầng ngậm nước 24/7 để bảo vệ mỏ vĩnh cửu.",
            "isCorrect": true
          },
          {
            "text": "We pump as much as we can day and night until the underground well is completely empty.",
            "trustScore": 0,
            "feedback": "Hủy diệt môi trường! Quỹ ESG sẽ lập tức đưa công ty vào danh sách đen.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi chỉ khai thác một phần nhỏ công suất bổ hồi tự nhiên và giám sát áp lực tầng ngậm nước 24/7 để bảo đảm sự tái tạo tự nhiên vĩnh cửu.",
        "explanation": "Khai thác có trách nhiệm (Sustainable Stewardship) là tấm bằng bảo chứng vững bền nhất để thu hút vốn đầu tư quốc tế.",
        "crucialNote": "Mỏ Đảnh Thạnh được thiên nhiên tự động phun trào liên tục từ năm 1957 đến nay.",
        "memoryHook": "Harvest only a fraction of natural recharge capacity."
      }
    ]
  },
  {
    "id": "unit-39",
    "unitNumber": 39,
    "title": "Giới Thiệu Đảnh Thạnh Có Ga Truyền Thống",
    "subtitle": "Nước khoáng có ga lâu đời sảng khoái từ năm 1957",
    "level": "A2",
    "icon": "✨",
    "color": "cyan",
    "xpReward": 45,
    "gemReward": 15,
    "exercises": [
      {
        "id": "u39-e1",
        "type": "match_pairs",
        "promptEn": "Match sparkling mineral water heritage terms with their meanings:",
        "promptVi": "Ghép cặp các thuật ngữ đặc trưng của nước khoáng có ga truyền thống Đảnh Thạnh:",
        "englishSentence": "Match sparkling water heritage and refreshment terms.",
        "audioText": "Match sparkling water heritage and refreshment terms.",
        "explanation": "5 biểu tượng gắn liền với dòng nước khoáng có ga huyền thoại được người tiêu dùng Việt yêu mến từ năm 1957.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng nước khoáng có ga Đảnh Thạnh truyền thống.",
        "pairs": [
          {
            "left": "Sparkling mineral water",
            "right": "Nước khoáng có ga sảng khoái kích thích vị giác"
          },
          {
            "left": "Natural effervescence",
            "right": "Bọt khí sủi tăm tự nhiên lăn tăn tinh tế"
          },
          {
            "left": "Nostalgic Vietnamese beverage",
            "right": "Thức uống quen thuộc gắn liền ký ức nhiều thế hệ"
          },
          {
            "left": "Digestive aid",
            "right": "Hỗ trợ tiêu hóa giảm đầy hơi sau bữa ăn nhiều dầu mỡ"
          },
          {
            "left": "Serve chilled with lime",
            "right": "Thưởng thức mát lạnh cùng lát chanh tươi thanh mát"
          }
        ]
      },
      {
        "id": "u39-e2",
        "type": "speak",
        "promptEn": "Speak this heritage sparkling water presentation clearly:",
        "promptVi": "Luyện nói câu giới thiệu lịch sử huyền thoại của dòng khoáng có ga Đảnh Thạnh:",
        "englishSentence": "Danh Thanh sparkling mineral water has refreshed Vietnamese families since 1957 with invigorating natural bubbles.",
        "audioText": "Danh Thanh sparkling mineral water has refreshed Vietnamese families since 1957 with invigorating natural bubbles.",
        "phonetics": "/daɪn tæŋ ˈspɑːrklɪŋ ˈmɪnərəl ˈwɔːtər hæz rɪˈfrɛʃt ˌvjɛtnəˈmiːz ˈfæmɪliz sɪns 1957 wɪð ɪnˈvɪɡəreɪtɪŋ ˈnætʃrəl ˈbʌblz/",
        "vietnameseMeaning": "Nước khoáng có ga Đảnh Thạnh đã làm sảng khoái các gia đình Việt Nam từ năm 1957 với những bọt khí sủi tăm đầy sức sống.",
        "explanation": "\"Refreshed families since 1957 with invigorating natural bubbles\" là lời thuyết minh giàu cảm xúc kết hợp di sản lịch sử và trải nghiệm thưởng thức.",
        "whyWrong": "Phát âm rõ từ \"invigorating\" (/ɪnˈvɪɡəreɪtɪŋ/ - tiếp thêm sinh lực, sảng khoái) và \"bubbles\" (/ˈbʌblz/).",
        "crucialNote": "Đảnh Thạnh có ga là thương hiệu quen thuộc có mặt trong mọi mâm cơm gia đình miền Trung.",
        "memoryHook": "Refreshed families since 1957 with invigorating natural bubbles."
      },
      {
        "id": "u39-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the digestive benefits of sparkling water:",
        "promptVi": "Ghép câu: \"Nước khoáng có ga giúp cải thiện tiêu hóa sau các bữa ăn hải sản phong phú\":",
        "englishSentence": "Sparkling mineral water aids digestion after rich and hearty seafood meals.",
        "audioText": "Sparkling mineral water aids digestion after rich and hearty seafood meals.",
        "wordPool": [
          "Sparkling",
          "mineral",
          "water",
          "aids",
          "digestion",
          "after",
          "rich",
          "and",
          "hearty",
          "seafood",
          "meals.",
          "pain",
          "stomachache"
        ],
        "vietnameseMeaning": "Nước khoáng có ga giúp cải thiện tiêu hóa sau các bữa ăn hải sản phong phú.",
        "explanation": "Khoáng chất Bicacbonat tự nhiên kết hợp với ga nhẹ trung hòa axit và kích thích nhu động ruột, xua tan cảm giác đầy bụng.",
        "whyWrong": "\"Aids digestion\" là cụm từ y khoa chuẩn quốc tế chỉ chức năng hỗ trợ tiêu hóa thức ăn.",
        "crucialNote": "Món đồ uống kèm bắt buộc tại các nhà hàng hải sản Nha Trang nổi tiếng.",
        "memoryHook": "Aids digestion after rich seafood meals."
      },
      {
        "id": "u39-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct mixology term for carbonated drinks:",
        "promptVi": "Chọn từ chính xác miêu tả bọt sủi tăm sảng khoái kích thích vị giác:",
        "englishSentence": "Enjoy the refreshing [ _____ ] of cold sparkling water served with a slice of fresh lime.",
        "audioText": "Enjoy the refreshing fizz of cold sparkling water served with a slice of fresh lime.",
        "blankWord": "fizz",
        "options": [
          "fizz",
          "dust",
          "smoke"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hãy tận hưởng tiếng sủi tăm sảng khoái của nước khoáng có ga lạnh dùng kèm một lát chanh tươi.",
        "explanation": "\"Fizz\" hoặc \"effervescence\" là từ tượng thanh mô tả tiếng sủi bọt khí mát lạnh hấp dẫn của đồ uống có ga.",
        "whyWrong": "\"Dust\" (bụi bẩn) hay \"smoke\" (khói) hoàn toàn sai lệch tính chất giải khát mát lạnh.",
        "crucialNote": "Uống kèm một lát chanh và chút muối biển là phong cách thưởng thức Đảnh Thạnh trứ danh miền biển Khánh Hòa.",
        "memoryHook": "Refreshing fizz served with fresh lime."
      },
      {
        "id": "u39-e5",
        "type": "chat_branch",
        "promptEn": "Introduce Danh Thanh Sparkling to a foreign mixologist at a rooftop bar on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia pha chế cocktail quốc tế tại Nha Trang tìm kiếm một loại nước có ga nội địa để pha chế thức uống signature:",
        "englishSentence": "Danh Thanh Sparkling offers crisp, tight bubbles with rich micro-minerals from 1957, making it the perfect effervescent base for tropical mocktails!",
        "audioText": "Danh Thanh Sparkling offers crisp, tight bubbles with rich micro-minerals from 1957, making it the perfect effervescent base for tropical mocktails!",
        "chatMessages": [
          {
            "speaker": "Lucas (Head Mixologist, Skylight Nha Trang)",
            "avatar": "🍸",
            "message": "Minh, we want to create a patriotic Vietnamese cocktail for international tourists. How does Danh Thanh Sparkling compare to imported club soda?"
          }
        ],
        "chatOptions": [
          {
            "text": "Danh Thanh Sparkling offers crisp, tight bubbles with rich micro-minerals from 1957, making it the perfect effervescent base for tropical mocktails!",
            "trustScore": 25,
            "feedback": "Tư vấn quá sành điệu và đẳng cấp! Nêu bật đặc tính bọt khí mịn màng, giàu vi khoáng tự nhiên từ năm 1957, là nền tảng hoàn hảo cho các ly mocktail nhiệt đới.",
            "isCorrect": true
          },
          {
            "text": "It is just cheap gas water, buy imported French soda instead.",
            "trustScore": 0,
            "feedback": "Tự ti thương hiệu và thiếu hiểu biết! Làm mất đi cơ hội đưa Đảnh Thạnh vào menu quán bar cao cấp nhất Nha Trang.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Đảnh Thạnh Có Ga mang đến những bọt khí sủi tăm thanh giòn, mịn màng cùng hàm lượng vi khoáng phong phú từ năm 1957, là nguyên liệu nền hoàn hảo cho các món mocktail nhiệt đới!",
        "explanation": "Đảnh Thạnh có ga tự nhiên vượt trội hơn hẳn các loại nước soda nhân tạo nhờ hậu vị khoáng ngọt thanh sâu lắng.",
        "crucialNote": "Pha chế cùng chanh muối, nước cốt chanh dây hoặc rượu Gin tạo nên hương vị bùng nổ.",
        "memoryHook": "Crisp tight bubbles with rich micro-minerals from 1957."
      }
    ]
  },
  {
    "id": "unit-40",
    "unitNumber": 40,
    "title": "Mốc Tốt Nghiệp Vận Hành Đa Phòng Ban A2",
    "subtitle": "Bài kiểm tra năng lực phối hợp doanh nghiệp toàn diện",
    "level": "A2",
    "icon": "🎓",
    "color": "cyan",
    "xpReward": 60,
    "gemReward": 30,
    "exercises": [
      {
        "id": "u40-e1",
        "type": "match_pairs",
        "promptEn": "Capstone Grand Match: Pair the 5 cross-functional operational pillars of Level A2:",
        "promptVi": "Đại Thử Thách Tốt Nghiệp A2: Ghép 5 trụ cột vận hành doanh nghiệp liên phòng ban:",
        "englishSentence": "Match the core cross-functional operational competencies.",
        "audioText": "Match the core cross-functional operational competencies.",
        "explanation": "5 chuẩn năng lực then chốt của một nhân sự chuyên nghiệp làm chủ quy trình doanh nghiệp Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 chuẩn năng lực vận hành doanh nghiệp Cấp độ A2.",
        "pairs": [
          {
            "left": "HR Culture & Ethics",
            "right": "Thấu hiểu văn hóa doanh nghiệp và quy tắc ứng xử"
          },
          {
            "left": "Fleet & Warehouse Logistics",
            "right": "Điều độ kho vận, xếp dỡ pallet và đội xe tải"
          },
          {
            "left": "Workplace Health & Safety",
            "right": "Tuân thủ nghiêm ngặt bảo hộ lao động và PCCC"
          },
          {
            "left": "Trade Marketing & Merchandising",
            "right": "Quản trị kệ trưng bày hàng hóa và tủ mát điểm bán"
          },
          {
            "left": "Cross-Departmental Synergy",
            "right": "Phối hợp liên phòng ban nhịp nhàng vì mục tiêu chung"
          }
        ]
      },
      {
        "id": "u40-e2",
        "type": "speak",
        "promptEn": "Speak this Level A2 graduation leadership pledge clearly:",
        "promptVi": "Luyện nói lời tuyên thệ tốt nghiệp Cấp độ A2 thể hiện bản lĩnh hợp tác liên phòng ban:",
        "englishSentence": "I am fully prepared to lead cross-functional operations, ensuring workplace safety, operational excellence, and brand integrity.",
        "audioText": "I am fully prepared to lead cross-functional operations, ensuring workplace safety, operational excellence, and brand integrity.",
        "phonetics": "/aɪ æm ˈfʊli prɪˈpɛərd tuː liːd krɒs ˈfʌŋkʃənl ˌɒpəˈreɪʃənz, ɪnˈʃʊərɪŋ ˈwɜːrkpleɪs ˈseɪfti, ˌɒpəˈreɪʃənl ˈɛksələns, ænd brænd ɪnˈtɛɡrəti/",
        "vietnameseMeaning": "Tôi hoàn toàn sẵn sàng dẫn dắt các hoạt động liên phòng ban, đảm bảo an toàn lao động, vận hành xuất sắc và giữ vững sự chính trực của thương hiệu.",
        "explanation": "Lời cam kết trưởng thành từ người làm việc độc lập thành nhân sự có tầm nhìn bao quát toàn bộ chuỗi giá trị doanh nghiệp.",
        "whyWrong": "Nói với phong thái đĩnh đạc, phát âm chuẩn cụm \"cross-functional operations\" (/krɒs ˈfʌŋkʃənl ˌɒpəˈreɪʃənz/).",
        "crucialNote": "Bạn đã sẵn sàng bước vào Cấp độ B1 (Đại sứ thương hiệu & Thuyết trình chuyên sâu).",
        "memoryHook": "Lead cross-functional operations with excellence and integrity."
      },
      {
        "id": "u40-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to celebrate your Level A2 enterprise milestone:",
        "promptVi": "Ghép câu: \"Chúng tôi đã hoàn thành xuất sắc tất cả bốn mươi bài học vận hành doanh nghiệp tại Vikoda\":",
        "englishSentence": "We have mastered all forty operational units across Level A1 and Level A2 at Vikoda.",
        "audioText": "We have mastered all forty operational units across Level A1 and Level A2 at Vikoda.",
        "wordPool": [
          "We",
          "have",
          "mastered",
          "all",
          "forty",
          "operational",
          "units",
          "across",
          "Level",
          "A1",
          "and",
          "Level",
          "A2",
          "at",
          "Vikoda.",
          "lost",
          "quit"
        ],
        "vietnameseMeaning": "Chúng tôi đã làm chủ tất cả bốn mươi bài học vận hành qua Cấp độ A1 và Cấp độ A2 tại Vikoda.",
        "explanation": "Cột mốc đáng tự hào: 40 bài học thực chiến, 200 bài tập Duolingo Gamification, nắm trọn vẹn nghiệp vụ từ tiếp đón đến vận hành nhà máy.",
        "whyWrong": "\"Mastered\" (làm chủ hoàn toàn) thể hiện năng lực vận dụng thành thạo vào công việc thực tế hàng ngày.",
        "crucialNote": "Không chỉ học tiếng Anh mà học cả văn hóa và quy trình doanh nghiệp tiêu chuẩn quốc tế.",
        "memoryHook": "Mastered all forty operational units."
      },
      {
        "id": "u40-e4",
        "type": "fill_blank",
        "promptEn": "Select the ultimate keyword for inter-departmental synergy:",
        "promptVi": "Chọn từ then chốt định nghĩa sức mạnh đoàn kết liên phòng ban tạo nên kỳ tích:",
        "englishSentence": "Seamless cross-functional [ _____ ] between sales, logistics and production creates unbeatable competitive strength.",
        "audioText": "Seamless cross-functional collaboration between sales, logistics and production creates unbeatable competitive strength.",
        "blankWord": "collaboration",
        "options": [
          "collaboration",
          "conflict",
          "jealousy"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Sự phối hợp liên phòng ban nhịp nhàng giữa kinh doanh, kho vận và sản xuất tạo nên sức mạnh cạnh tranh vô đối.",
        "explanation": "\"Cross-functional collaboration\" (sự phối hợp liên phòng ban) là vũ khí bí mật giúp các tập đoàn hàng đầu thế giới bứt phá.",
        "whyWrong": "\"Conflict\" (xung đột) hay \"jealousy\" (sự đố kỵ) là rào cản phá hoại tổ chức.",
        "crucialNote": "Triết lý Một Vikoda - Một Chí Hướng.",
        "memoryHook": "Cross-functional collaboration creates unbeatable strength."
      },
      {
        "id": "u40-e5",
        "type": "chat_branch",
        "promptEn": "Level A2 Capstone: Lead an enterprise emergency response simulation on Slack:",
        "promptVi": "Mô phỏng tốt nghiệp A2: Một siêu thị lớn tại TP.HCM yêu cầu tăng gấp đôi sản lượng trong 48 giờ vì chiến dịch kích cầu, hãy điều phối 3 phòng ban:",
        "englishSentence": "Production will initiate a 3rd shift, Logistics has secured 4 backup trucks, and Quality Control will fast-track batch release. We are 100% ready!",
        "audioText": "Production will initiate a 3rd shift, Logistics has secured 4 backup trucks, and Quality Control will fast-track batch release. We are 100% ready!",
        "chatMessages": [
          {
            "speaker": "Executive Vice President (Vikoda Commercial Board)",
            "avatar": "🏆",
            "message": "Minh, AEON Mall just doubled their order to 2,000 cartons for the weekend festival. Can you coordinate Production, QC, and Fleet Dispatch right now?"
          }
        ],
        "chatOptions": [
          {
            "text": "Production will initiate a 3rd shift, Logistics has secured 4 backup trucks, and Quality Control will fast-track batch release. We are 100% ready!",
            "trustScore": 25,
            "feedback": "Tốt nghiệp Xuất Sắc Cấp Độ A2! Năng lực điều phối liên phòng ban đỉnh cao: Tăng ca sản xuất, điều động xe dự phòng và nghiệm thu chất lượng nhanh, giải quyết hoàn hảo bài toán tăng trưởng.",
            "isCorrect": true
          },
          {
            "text": "That is impossible. Tell AEON Mall to cancel the festival.",
            "trustScore": 0,
            "feedback": "Thất bại thảm hại! Tư duy tiêu cực làm mất cơ hội kinh doanh nghìn tỷ.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Khối Sản xuất sẽ kích hoạt ca làm việc thứ 3, Khối Kho vận đã chuẩn bị sẵn 4 xe tải dự phòng, và Phòng Kiểm soát Chất lượng sẽ ưu tiên nghiệm thu nhanh lô hàng. Chúng tôi đã sẵn sàng 100%!",
        "explanation": "Phối hợp đồng bộ cả 3 mắt xích (Sản xuất - Kho vận - Kiểm định chất lượng) khẳng định bạn là nhân sự tinh hoa của Vikoda.",
        "crucialNote": "Chúc mừng bạn đã xuất sắc tốt nghiệp toàn bộ Cấp độ A2!",
        "memoryHook": "Coordinate Production, Logistics and QC flawlessly."
      }
    ]
  },
  {
    "id": "unit-41",
    "unitNumber": 41,
    "title": "Thuyết Minh Tour Mỏ Đảnh Thạnh",
    "subtitle": "Dẫn khách thăm giếng khoan sâu 220m và quy trình khai thác khép kín",
    "level": "B1",
    "icon": "🏭",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u41-e1",
        "type": "match_pairs",
        "promptEn": "Match mineral spring tour and extraction terms with their meanings:",
        "promptVi": "Ghép cặp thuật ngữ thuyết minh tour mỏ khoáng và quy trình khai thác khép kín:",
        "englishSentence": "Match geothermal spring tour and extraction terms.",
        "audioText": "Match geothermal spring tour and extraction terms.",
        "explanation": "5 thuật ngữ đắt giá khi tháp tùng đoàn đối tác tham quan đầu giếng mỏ Đảnh Thạnh.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng thuyết minh tour mỏ nước khoáng.",
        "pairs": [
          {
            "left": "Geothermal wellhead",
            "right": "Đầu giếng khoan địa nhiệt khai thác nước khoáng"
          },
          {
            "left": "Closed-loop extraction",
            "right": "Quy trình khai thác khép kín chống nhiễm khuẩn"
          },
          {
            "left": "Virgin thermal spring",
            "right": "Nguồn khoáng nóng nguyên bản từ lòng đất mẹ"
          },
          {
            "left": "Stainless steel piping",
            "right": "Hệ thống đường ống dẫn bằng inox vi sinh 316L"
          },
          {
            "left": "Cleanroom bottling hall",
            "right": "Khu vực chiết rót phòng sạch tiêu chuẩn quốc tế"
          }
        ]
      },
      {
        "id": "u41-e2",
        "type": "speak",
        "promptEn": "Speak this wellhead tour introductory statement clearly:",
        "promptVi": "Luyện nói câu mở đầu thuyết minh tour tham quan đầu giếng mỏ Đảnh Thạnh:",
        "englishSentence": "Welcome to the heart of Vikoda: our geothermal wellhead extracting natural mineral water from 220 meters below.",
        "audioText": "Welcome to the heart of Vikoda: our geothermal wellhead extracting natural mineral water from 220 meters below.",
        "phonetics": "/ˈwɛlkəm tuː ðə hɑːrt ɒv vɪˈkoʊdə: ˈaʊər ˌdʒiːoʊˈθɜːrməl ˈwɛlhɛd ɪkˈstræktɪŋ ˈnætʃrəl ˈmɪnərəl ˈwɔːtər frɒm 220 ˈmiːtərz bɪˈloʊ/",
        "vietnameseMeaning": "Chào mừng quý vị đến với trái tim của Vikoda: đầu giếng địa nhiệt khai thác nước khoáng thiên nhiên từ độ sâu 220 mét.",
        "explanation": "\"Welcome to the heart of Vikoda: our geothermal wellhead...\" là câu chào mở đầu tour tràn đầy tự hào thương hiệu.",
        "whyWrong": "Phát âm chuẩn từ \"geothermal\" (/ˌdʒiːoʊˈθɜːrməl/) và \"wellhead\" (/ˈwɛlhɛd/).",
        "crucialNote": "Đưa tay hướng về phía miệng giếng khoan inox sáng bóng được bảo vệ trong lồng kính cách ly.",
        "memoryHook": "Heart of Vikoda = Geothermal wellhead at 220m depth."
      },
      {
        "id": "u41-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the sanitary enclosed transport process:",
        "promptVi": "Ghép câu: \"Nước khoáng chảy qua đường ống inox trực tiếp vào dây chuyền chiết rót\":",
        "englishSentence": "The water flows through stainless steel sanitary pipes directly into the cleanroom bottling line.",
        "audioText": "The water flows through stainless steel sanitary pipes directly into the cleanroom bottling line.",
        "wordPool": [
          "The",
          "water",
          "flows",
          "through",
          "stainless",
          "steel",
          "sanitary",
          "pipes",
          "directly",
          "into",
          "the",
          "cleanroom",
          "bottling",
          "line.",
          "dirty",
          "air"
        ],
        "vietnameseMeaning": "Nước khoáng chảy qua đường ống inox vi sinh trực tiếp vào dây chuyền chiết rót phòng sạch.",
        "explanation": "Quy trình khép kín tuyệt đối bảo đảm nước khoáng không bao giờ tiếp xúc với không khí bên ngoài trước khi đóng nắp.",
        "whyWrong": "Dùng \"stainless steel sanitary pipes\" (ống inox vi sinh) khẳng định tiêu chuẩn an toàn dược phẩm.",
        "crucialNote": "Inox 316L chống ăn mòn và không gây biến đổi hàm lượng khoáng hóa.",
        "memoryHook": "Flows through sanitary pipes directly into bottling line."
      },
      {
        "id": "u41-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct technical term for airtight industrial harvesting:",
        "promptVi": "Chọn từ kỹ thuật chỉ quy trình khai thác khép kín ngăn chặn giọt bắn và vi khuẩn:",
        "englishSentence": "This automated closed-loop [ _____ ] prevents any external airborne contamination.",
        "audioText": "This automated closed-loop extraction prevents any external airborne contamination.",
        "blankWord": "extraction",
        "options": [
          "extraction",
          "explosion",
          "erosion"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Quy trình khai thác khép kín tự động này ngăn chặn mọi sự nhiễm khuẩn từ không khí bên ngoài.",
        "explanation": "\"Closed-loop extraction\" (khai thác vòng kín khép kín) là tiêu chuẩn vàng của ngành nước khoáng thiên nhiên.",
        "whyWrong": "\"Explosion\" (vụ nổ) hay \"erosion\" (xói mòn) là các tai họa địa chất hoàn toàn sai ngữ cảnh.",
        "crucialNote": "Không khí phòng chiết rót được lọc qua màng siêu lọc HEPA đẳng cấp bệnh viện.",
        "memoryHook": "Closed-loop extraction prevents contamination."
      },
      {
        "id": "u41-e5",
        "type": "chat_branch",
        "promptEn": "Answer a technical question from a European bottling auditor at the wellhead on Teams:",
        "promptVi": "Mô phỏng tin nhắn Teams: Kỹ sư trưởng đoàn thanh tra châu Âu hỏi liệu nước mặt (nước mưa sông suối) có thể ngấm vào giếng khoan hay không:",
        "englishSentence": "Zero surface water can enter! The wellhead is encased in 3 layers of high-grade steel casing and sealed with impermeable bentonite grout down to bedrock.",
        "audioText": "Zero surface water can enter! The wellhead is encased in 3 layers of high-grade steel casing and sealed with impermeable bentonite grout down to bedrock.",
        "chatMessages": [
          {
            "speaker": "Jens (Lead Auditor, SGS Switzerland)",
            "avatar": "🇨🇭",
            "message": "Minh, we are examining the geological wellhead chamber. What engineering measures prevent shallow rainwater runoff from entering the 220m borehole?"
          }
        ],
        "chatOptions": [
          {
            "text": "Zero surface water can enter! The wellhead is encased in 3 layers of high-grade steel casing and sealed with impermeable bentonite grout down to bedrock.",
            "trustScore": 25,
            "feedback": "Câu trả lời của chuyên gia địa kỹ thuật bậc thầy! Nêu rõ 3 lớp ống thép bảo vệ và lớp vữa sét bentonite chống thấm tuyệt đối xuống tầng đá gốc.",
            "isCorrect": true
          },
          {
            "text": "Rainwater goes right into the hole, but we just boil it later so it is totally fine.",
            "trustScore": 0,
            "feedback": "Tai họa kiến thức! Nước khoáng tự nhiên tuyệt đối không bao giờ được đun nấu hay để nước mặt xâm lấn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Không một giọt nước mặt nào có thể xâm nhập! Đầu giếng được bọc trong 3 lớp ống thép chuyên dụng và trám bít bằng vữa sét bentonite chống thấm xuống tận tầng đá gốc.",
        "explanation": "Kỹ thuật trám xi măng sét bentonite là tiêu chuẩn bảo vệ địa chất ngầm hàng đầu thế giới.",
        "crucialNote": "Đoàn thanh tra quốc tế sẽ chấm điểm xuất sắc cho câu trả lời am tường kỹ thuật này.",
        "memoryHook": "Encased in 3 layers of steel and sealed with bentonite."
      }
    ]
  },
  {
    "id": "unit-42",
    "unitNumber": 42,
    "title": "4 Con Số Vàng Nguồn Khoáng 1957",
    "subtitle": "Thuộc lòng pH 9.0, độ sâu 220m, 72°C và vành đai 35ha",
    "level": "B1",
    "icon": "🔢",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u42-e1",
        "type": "match_pairs",
        "promptEn": "Match the 4 golden numbers of Vikoda with their scientific significance:",
        "promptVi": "Ghép cặp 4 con số vàng của nguồn khoáng Đảnh Thạnh với ý nghĩa khoa học:",
        "englishSentence": "Match the 4 golden figures with their scientific value.",
        "audioText": "Match the 4 golden figures with their scientific value.",
        "explanation": "4 con số thần thánh tạo nên đẳng cấp độc bản của thương hiệu nước khoáng kiềm Vikoda.",
        "vietnameseMeaning": "Ghép đúng 4 con số vàng và năm phát hiện mỏ khoáng Đảnh Thạnh.",
        "pairs": [
          {
            "left": "Natural pH 9.0",
            "right": "Độ kiềm tự nhiên thanh mát hoàn hảo cho sức khỏe"
          },
          {
            "left": "220-meter depth",
            "right": "Độ sâu khai thác dưới lòng đất qua nhiều tầng đá magma"
          },
          {
            "left": "72 degrees Celsius",
            "right": "Nhiệt độ phun trào tự nhiên vô trùng nhiệt tại vòi"
          },
          {
            "left": "35-hectare buffer",
            "right": "Vành đai xanh sinh thái bảo tồn không hóa chất"
          },
          {
            "left": "Heritage since 1957",
            "right": "Năm phát hiện mỏ khoáng quý giá bởi bác sĩ Pháp"
          }
        ]
      },
      {
        "id": "u42-e2",
        "type": "speak",
        "promptEn": "Speak this flagship elevator pitch clearly:",
        "promptVi": "Luyện nói câu giới thiệu cô đọng 4 con số vàng thuyết phục nhà đầu tư quốc tế:",
        "englishSentence": "Vikoda is defined by four golden figures: natural pH 9.0, 220-meter depth, 72 degrees Celsius, and a 35-hectare ecological reserve.",
        "audioText": "Vikoda is defined by four golden figures: natural pH 9.0, 220-meter depth, 72 degrees Celsius, and a 35-hectare ecological reserve.",
        "phonetics": "/vɪˈkoʊdə ɪz dɪˈfaɪnd baɪ fɔːr ˈɡoʊldən ˈfɪɡjərz: ˈnætʃrəl piː eɪtʃ naɪn, 220 ˈmiːtər dɛpθ, ˈsɛvənti tuː dɪˈɡriːz ˈsɛlsiəs, ænd ə 35 ˈhɛktɛər ˌiːkəˈlɒdʒɪkəl rɪˈzɜːrv/",
        "vietnameseMeaning": "Vikoda được định nghĩa bởi bốn con số vàng: độ pH kiềm tự nhiên 9.0, độ sâu 220 mét, nhiệt độ 72 độ C và khu bảo tồn sinh thái 35 héc-ta.",
        "explanation": "Elevator Pitch (bài giới thiệu ngắn 30 giây) giúp người nghe ghi nhớ ngay lập tức 4 giá trị cốt lõi của thương hiệu.",
        "whyWrong": "Nói liền mạch, dõng dạc, nhấn mạnh vào từng con số vàng.",
        "crucialNote": "Đây là bài kiểm tra thuộc lòng đầu tiên của bất kỳ Đại sứ Thương hiệu Vikoda nào.",
        "memoryHook": "4 golden figures: pH 9.0, 220m, 72°C, 35ha."
      },
      {
        "id": "u42-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the temperature indicator of pure geothermal energy:",
        "promptVi": "Ghép câu: \"Nhiệt độ tự nhiên 72 độ C khẳng định nguồn nước phun trào từ lòng đất mẹ sâu thẳm\":",
        "englishSentence": "The natural temperature of seventy-two degrees confirms the water erupts from deep geothermal layers.",
        "audioText": "The natural temperature of seventy-two degrees confirms the water erupts from deep geothermal layers.",
        "wordPool": [
          "The",
          "natural",
          "temperature",
          "of",
          "seventy-two",
          "degrees",
          "confirms",
          "the",
          "water",
          "erupts",
          "from",
          "deep",
          "geothermal",
          "layers.",
          "freezes",
          "ice"
        ],
        "vietnameseMeaning": "Nhiệt độ tự nhiên 72 độ C khẳng định nguồn nước phun trào từ các tầng địa nhiệt sâu thẳm.",
        "explanation": "Nhiệt độ 72°C là bằng chứng nhiệt học chứng minh nguồn gốc nguyên sinh từ sâu trong lòng đất, cách ly hoàn toàn với các túi nước ngầm nông.",
        "whyWrong": "\"Erupts from deep geothermal layers\" miêu tả sức sống mãnh liệt của nguồn khoáng nóng.",
        "crucialNote": "Nhiệt độ cao tự nhiên tiêu diệt mọi vi khuẩn gây hại trước khi vào nhà máy.",
        "memoryHook": "72 degrees confirms water erupts from geothermal layers."
      },
      {
        "id": "u42-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for the natural alkaline measurement:",
        "promptVi": "Chọn chỉ số đo lường độ kiềm tự nhiên hoàn hảo của Vikoda:",
        "englishSentence": "Vikoda possesses a perfectly stable and sweet natural [ _____ ] of 9.0.",
        "audioText": "Vikoda possesses a perfectly stable and sweet natural pH of 9.0.",
        "blankWord": "pH",
        "options": [
          "pH",
          "Brix",
          "Proof"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda sở hữu độ pH tự nhiên ngọt lành và ổn định hoàn hảo ở mức 9.0.",
        "explanation": "\"Natural pH of 9.0\" là chỉ số kiềm lý tưởng giúp cân bằng axit trong cơ thể và hỗ trợ hệ tiêu hóa.",
        "whyWrong": "\"Brix\" đo độ ngọt của trái cây, còn \"Proof\" đo độ cồn của rượu mạnh.",
        "crucialNote": "Độ kiềm 9.0 của Vikoda là hoàn toàn tự nhiên từ khoáng chất bicacbonat.",
        "memoryHook": "Natural pH of 9.0 = Kiềm tự nhiên 9.0."
      },
      {
        "id": "u42-e5",
        "type": "chat_branch",
        "promptEn": "Present the 4 golden numbers during a commercial negotiation pitch on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Đại diện chuỗi khách sạn quốc tế hỏi lý do tại sao nên chọn Vikoda thay vì các thương hiệu nước khoáng đóng chai khác:",
        "englishSentence": "Vikoda is Vietnam's only mineral water backed by 4 golden truths: pH 9.0 natural alkaline, 220m depth, 72°C sterile source, and a 35ha sanctuary since 1957!",
        "audioText": "Vikoda is Vietnam's only mineral water backed by 4 golden truths: pH 9.0 natural alkaline, 220m depth, 72°C sterile source, and a 35ha sanctuary since 1957!",
        "chatMessages": [
          {
            "speaker": "Mr. Jonathan (VP Procurement, Marriott International)",
            "avatar": "🏨",
            "message": "Minh, we are evaluating 3 mineral water suppliers for our luxury resorts. Give me your strongest 15-second pitch."
          }
        ],
        "chatOptions": [
          {
            "text": "Vikoda is Vietnam's only mineral water backed by 4 golden truths: pH 9.0 natural alkaline, 220m depth, 72°C sterile source, and a 35ha sanctuary since 1957!",
            "trustScore": 25,
            "feedback": "Phản hồi bùng nổ năng lượng! Nắm trọn 4 con số vàng và di sản 1957 đánh gục mọi đối thủ cạnh tranh trong vòng 15 giây.",
            "isCorrect": true
          },
          {
            "text": "We sell water in plastic bottles and we can give you a very cheap price if you buy a lot.",
            "trustScore": 0,
            "feedback": "Hạ thấp phẩm cấp thương hiệu! Tập đoàn khách sạn 5 sao tìm kiếm sự đẳng cấp và câu chuyện độc bản chứ không mua hàng giá rẻ tầm thường.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Vikoda là nguồn nước khoáng duy nhất tại Việt Nam được bảo chứng bởi 4 chân lý vàng: kiềm tự nhiên pH 9.0, độ sâu 220m, nguồn nhiệt vô trùng 72°C và vành đai sinh thái 35ha từ năm 1957!",
        "explanation": "Đưa 4 con số vàng vào bài đàm phán biến sản phẩm thành biểu tượng độc bản không thể thay thế.",
        "crucialNote": "Marriott và các tập đoàn khách sạn hàng đầu luôn tìm kiếm đối tác có câu chuyện nguồn gốc ấn tượng.",
        "memoryHook": "4 golden truths win luxury enterprise accounts."
      }
    ]
  },
  {
    "id": "unit-43",
    "unitNumber": 43,
    "title": "Phân Biệt Nước Khoáng vs Nước Lọc",
    "subtitle": "Phân tích ranh giới nước khoáng thiên nhiên và nước lọc tinh khiết RO",
    "level": "B1",
    "icon": "⚖️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u43-e1",
        "type": "match_pairs",
        "promptEn": "Match mineral water and purified water contrasting terms:",
        "promptVi": "Ghép cặp thuật ngữ phân biệt sự khác biệt giữa nước khoáng thiên nhiên và nước lọc tinh khiết RO:",
        "englishSentence": "Match natural mineral vs purified RO water terms.",
        "audioText": "Match natural mineral vs purified RO water terms.",
        "explanation": "5 sự đối lập khoa học chứng minh nước khoáng thiên nhiên vượt trội hơn hẳn nước lọc nhân tạo.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ so sánh nước khoáng và nước lọc tinh khiết.",
        "pairs": [
          {
            "left": "Natural mineral water",
            "right": "Nước khoáng thiên nhiên nguyên bản đóng chai tại nguồn"
          },
          {
            "left": "Purified tap water",
            "right": "Nước máy thành phố lọc nhân tạo bằng màng RO"
          },
          {
            "left": "Demineralized liquid",
            "right": "Nước trơ bị lọc mất hết khoáng chất có lợi"
          },
          {
            "left": "Biologically active minerals",
            "right": "Khoáng chất tự nhiên có hoạt tính sinh học dễ hấp thu"
          },
          {
            "left": "Artificial remineralization",
            "right": "Bù khoáng nhân tạo bằng hóa chất tổng hợp"
          }
        ]
      },
      {
        "id": "u43-e2",
        "type": "speak",
        "promptEn": "Speak this clear scientific distinction clearly:",
        "promptVi": "Luyện nói câu phân tích sự khác biệt đẳng cấp giữa Vikoda và nước lọc RO thông thường:",
        "englishSentence": "Unlike RO purified water which is stripped of electrolytes, Vikoda provides natural minerals essential for cellular hydration.",
        "audioText": "Unlike RO purified water which is stripped of electrolytes, Vikoda provides natural minerals essential for cellular hydration.",
        "phonetics": "/ʌnˈlaɪk ɑːr oʊ ˈpjʊərɪfaɪd ˈwɔːtər wɪtʃ ɪz strɪpt ɒv ɪˈlɛktrəlaɪts, vɪˈkoʊdə prəˈvaɪdz ˈnætʃrəl ˈmɪnərəlz ɪˈsɛnʃəl fɔːr ˈsɛljʊlər haɪˈdreɪʃən/",
        "vietnameseMeaning": "Không giống như nước tinh khiết RO bị lọc sạch hết chất điện giải, Vikoda cung cấp các khoáng chất tự nhiên thiết yếu cho quá trình bù nước tế bào.",
        "explanation": "\"Stripped of electrolytes\" (bị lọc mất hết điện giải) chỉ ra nhược điểm chí mạng của nước lọc thẩm thấu ngược RO.",
        "whyWrong": "Phát âm chuẩn từ \"electrolytes\" (/ɪˈlɛktrəlaɪts/) và \"cellular hydration\" (/ˈsɛljʊlər haɪˈdreɪʃən/).",
        "crucialNote": "Uống nước RO lâu ngày có thể gây hiện tượng loãng khoáng trong cơ thể.",
        "memoryHook": "RO is stripped of electrolytes; Vikoda provides natural minerals."
      },
      {
        "id": "u43-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the superior absorption of natural electrolytes:",
        "promptVi": "Ghép câu: \"Khoáng chất tự nhiên hòa tan được cơ thể con người hấp thụ dễ dàng hơn nhiều\":",
        "englishSentence": "Dissolved natural minerals are absorbed much more easily by the human body.",
        "audioText": "Dissolved natural minerals are absorbed much more easily by the human body.",
        "wordPool": [
          "Dissolved",
          "natural",
          "minerals",
          "are",
          "absorbed",
          "much",
          "more",
          "easily",
          "by",
          "the",
          "human",
          "body.",
          "plastic",
          "waste"
        ],
        "vietnameseMeaning": "Khoáng chất tự nhiên hòa tan được cơ thể con người hấp thụ dễ dàng hơn nhiều.",
        "explanation": "Khoáng chất trong Vikoda tồn tại dưới dạng ion hòa tan vi lượng, thẩm thấu trực tiếp qua màng tế bào.",
        "whyWrong": "Khoáng nhân tạo bù vào nước RO thường là muối hóa học khó hòa tan và dễ lắng đọng.",
        "crucialNote": "Canxi và Magie dạng ion tự nhiên hỗ trợ xương khớp và hệ tim mạch khỏe mạnh.",
        "memoryHook": "Dissolved minerals absorbed easily by the body."
      },
      {
        "id": "u43-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for artificial mineral addition:",
        "promptVi": "Chọn thuật ngữ chỉ quy trình nhân tạo thêm khoáng hóa chất vào nước tinh khiết:",
        "englishSentence": "Vikoda has zero artificial [ _____ ], retaining its pristine mineral balance directly from nature.",
        "audioText": "Vikoda has zero artificial additives, retaining its pristine mineral balance directly from nature.",
        "blankWord": "additives",
        "options": [
          "additives",
          "calories",
          "colors"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda hoàn toàn không có chất phụ gia nhân tạo, giữ trọn vẹn sự cân bằng khoáng chất tinh khiết trực tiếp từ thiên nhiên.",
        "explanation": "\"Zero artificial additives\" (không phụ gia nhân tạo) là cam kết vì sức khỏe người tiêu dùng.",
        "whyWrong": "\"Calories\" (calo) hay \"colors\" (phẩm màu) không liên quan đến thành phần muối khoáng tự nhiên.",
        "crucialNote": "Được Bộ Y tế và Viện Pasteur chứng nhận nước khoáng thiên nhiên 100% nguyên bản.",
        "memoryHook": "Zero artificial additives = Không phụ gia nhân tạo."
      },
      {
        "id": "u43-e5",
        "type": "chat_branch",
        "promptEn": "Convince a hospital procurement board to switch from cheap RO to Vikoda on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Trưởng ban dược bệnh viện quốc tế hỏi tại sao nên đầu tư nước khoáng kiềm Vikoda cho bệnh nhân thay vì nước tinh khiết RO giá rẻ:",
        "englishSentence": "Demineralized RO water can leach essential electrolytes from recovering patients, whereas Vikoda's natural pH 9.0 with bicarbonate accelerates metabolic recovery!",
        "audioText": "Demineralized RO water can leach essential electrolytes from recovering patients, whereas Vikoda's natural pH 9.0 with bicarbonate accelerates metabolic recovery!",
        "chatMessages": [
          {
            "speaker": "Dr. Sarah (Chief Medical Officer, Columbia Asia Hospital)",
            "avatar": "👩‍⚕️",
            "message": "Minh, our procurement team argues that purified RO water costs 30% less. From a clinical perspective, why is Vikoda better for our in-patient recovery wards?"
          }
        ],
        "chatOptions": [
          {
            "text": "Demineralized RO water can leach essential electrolytes from recovering patients, whereas Vikoda's natural pH 9.0 with bicarbonate accelerates metabolic recovery!",
            "trustScore": 25,
            "feedback": "Luận điểm y khoa đắt giá bậc nhất! Bác sĩ trưởng hoàn toàn bị thuyết phục bởi cơ chế chống mất điện giải và tính kiềm bicacbonat hỗ trợ chuyển hóa phục hồi cho bệnh nhân.",
            "isCorrect": true
          },
          {
            "text": "RO water and Vikoda are the exact same thing, but our bottle label has a nicer picture.",
            "trustScore": 0,
            "feedback": "Phá hỏng thương vụ! Đánh đồng nước khoáng quý giá với nước lọc nhân tạo rẻ tiền.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Nước tinh khiết RO bị rút hết khoáng có thể làm rửa trôi các chất điện giải thiết yếu của bệnh nhân đang hồi sức, trong khi tính kiềm tự nhiên pH 9.0 cùng bicacbonat của Vikoda thúc đẩy quá trình hồi phục chuyển hóa!",
        "explanation": "Kiến thức y khoa chuẩn xác biến bạn từ một người bán hàng bình thường thành một chuyên gia tư vấn sức khỏe đáng tin cậy.",
        "crucialNote": "Các bác sĩ tiêu hóa và tim mạch quốc tế luôn khuyến nghị bệnh nhân dùng nước khoáng kiềm tự nhiên.",
        "memoryHook": "Accelerates metabolic recovery with natural pH 9.0."
      }
    ]
  },
  {
    "id": "unit-44",
    "unitNumber": 44,
    "title": "Di Sản Lịch Sử Mỏ Khoáng Từ Năm 1957",
    "subtitle": "Kể lại hành trình khai phá nguồn nước quý giá ngàn năm",
    "level": "B1",
    "icon": "🏛️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u44-e1",
        "type": "match_pairs",
        "promptEn": "Match historical brand heritage terms with their meanings:",
        "promptVi": "Ghép cặp các thuật ngữ di sản lịch sử mỏ khoáng Đảnh Thạnh từ năm 1957:",
        "englishSentence": "Match historical brand heritage and exploration terms.",
        "audioText": "Match historical brand heritage and exploration terms.",
        "explanation": "5 dấu mốc lịch sử hào hùng khẳng định vị thế di sản trường tồn của Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ di sản lịch sử mỏ khoáng.",
        "pairs": [
          {
            "left": "Brand heritage since 1957",
            "right": "Di sản thương hiệu bền vững suốt từ năm 1957"
          },
          {
            "left": "French geological expedition",
            "right": "Đoàn thám hiểm địa chất của các nhà khoa học Pháp"
          },
          {
            "left": "Revered natural treasure",
            "right": "Kho báu thiên nhiên vô giá được các thế hệ tôn kính"
          },
          {
            "left": "Generational trust",
            "right": "Niềm tin yêu trao truyền qua nhiều thế hệ người tiêu dùng"
          },
          {
            "left": "Enduring symbol of purity",
            "right": "Biểu tượng trường tồn của sự thuần khiết và sức khỏe"
          }
        ]
      },
      {
        "id": "u44-e2",
        "type": "speak",
        "promptEn": "Speak this heritage pride statement clearly:",
        "promptVi": "Luyện nói câu tự hào khẳng định bề dày lịch sử hơn sáu thập kỷ của thương hiệu Vikoda:",
        "englishSentence": "For sixty-eight years, Vikoda has protected this virgin mineral spring, honoring our rich Vietnamese heritage.",
        "audioText": "For sixty-eight years, Vikoda has protected this virgin mineral spring, honoring our rich Vietnamese heritage.",
        "phonetics": "/fɔːr ˈsɪksti eɪt jɪərz, vɪˈkoʊdə hæz prəˈtɛktɪd ðɪs ˈvɜːrdʒɪn ˈmɪnərəl sprɪŋ, ˈɒnərɪŋ ˈaʊər rɪtʃ ˌvjɛtnəˈmiːz ˈhɛrɪtɪdʒ/",
        "vietnameseMeaning": "Suốt sáu mươi tám năm qua, Vikoda đã gìn giữ mỏ khoáng nguyên sinh này, tôn vinh di sản giàu bản sắc của dân tộc Việt Nam.",
        "explanation": "\"For sixty-eight years, Vikoda has protected...\" là câu nói truyền cảm hứng khơi dậy niềm tin cậy tuyệt đối nơi đối tác.",
        "whyWrong": "Phát âm rõ từ \"virgin mineral spring\" (/ˈvɜːrdʒɪn ˈmɪnərəl sprɪŋ/) và \"heritage\" (/ˈhɛrɪtɪdʒ/).",
        "crucialNote": "Thương hiệu lâu đời nhất ngành nước khoáng Việt Nam còn tồn tại và phát triển rực rỡ đến ngày nay.",
        "memoryHook": "68 years protecting the virgin spring, honoring heritage."
      },
      {
        "id": "u44-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the French scientists' geological exploration in 1957:",
        "promptVi": "Ghép câu: \"Năm 1957, các nhà khoa học Pháp đã khám phá ra mỏ khoáng Đảnh Thạnh quý giá\":",
        "englishSentence": "In nineteen fifty-seven, French scientists explored the extraordinary Danh Thanh mineral source.",
        "audioText": "In nineteen fifty-seven, French scientists explored the extraordinary Danh Thanh mineral source.",
        "wordPool": [
          "In",
          "nineteen",
          "fifty-seven,",
          "French",
          "scientists",
          "explored",
          "the",
          "extraordinary",
          "Danh",
          "Thanh",
          "mineral",
          "source.",
          "destroyed",
          "lost"
        ],
        "vietnameseMeaning": "Năm 1957, các nhà khoa học Pháp đã khám phá ra mỏ khoáng Đảnh Thạnh phi thường.",
        "explanation": "Cuộc thám hiểm năm 1957 đánh dấu mốc lịch sử đầu tiên nguồn khoáng được ghi nhận vào bản đồ địa chất thế giới.",
        "whyWrong": "Dùng tính từ \"extraordinary\" (/ɪkˈstrɔːrdɪnɛri/ - phi thường, kỳ diệu) mô tả tính chất độc nhất của mỏ.",
        "crucialNote": "Đọc năm 1957 bằng tiếng Anh: \"nineteen fifty-seven\".",
        "memoryHook": "1957 French scientists explored the extraordinary source."
      },
      {
        "id": "u44-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for unbroken historical continuity:",
        "promptVi": "Chọn từ chính xác thể hiện sự gắn kết và niềm tin qua nhiều thế hệ người tiêu dùng:",
        "englishSentence": "Vikoda has earned deep [ _____ ] trust across three generations of Vietnamese families.",
        "audioText": "Vikoda has earned deep generational trust across three generations of Vietnamese families.",
        "blankWord": "generational",
        "options": [
          "generational",
          "accidental",
          "temporary"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda đã chiếm trọn niềm tin yêu qua nhiều thế hệ suốt ba thế hệ gia đình người Việt.",
        "explanation": "\"Generational trust\" (niềm tin yêu qua nhiều thế hệ) là tài sản vô giá không thể mua được bằng tiền.",
        "whyWrong": "\"Accidental\" (tình cờ) hay \"temporary\" (tạm thời) hoàn toàn trái ngược với bề dày 68 năm phát triển.",
        "crucialNote": "Ông bà, cha mẹ và con cháu đều lớn lên cùng dòng nước khoáng Đảnh Thạnh mát lành.",
        "memoryHook": "Generational trust across three generations."
      },
      {
        "id": "u44-e5",
        "type": "chat_branch",
        "promptEn": "Share historical archival photos with a documentary film crew on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Đạo diễn kênh truyền hình Discovery Asia muốn làm phim tài liệu về nguồn gốc mỏ khoáng Đảnh Thạnh:",
        "englishSentence": "We are honored to welcome Discovery! I have digitized original 1957 French expedition journals and geological maps for your production crew.",
        "audioText": "We are honored to welcome Discovery! I have digitized original 1957 French expedition journals and geological maps for your production crew.",
        "chatMessages": [
          {
            "speaker": "David (Producer, Discovery Channel Asia)",
            "avatar": "🎥",
            "message": "Minh, we are shooting a series on Asia's legendary natural springs. Does Vikoda still preserve original 1957 exploration records and photography?"
          }
        ],
        "chatOptions": [
          {
            "text": "We are honored to welcome Discovery! I have digitized original 1957 French expedition journals and geological maps for your production crew.",
            "trustScore": 25,
            "feedback": "Phản hồi chuẩn tầm vóc quốc tế! Chủ động cung cấp tài liệu gốc năm 1957 đã số hóa, mở ra cơ hội quảng bá di sản thương hiệu Vikoda trên toàn cầu.",
            "isCorrect": true
          },
          {
            "text": "We threw away all old papers long ago because they were taking up office space.",
            "trustScore": 0,
            "feedback": "Phá hủy giá trị lịch sử! Khiến đoàn làm phim quốc tế thất vọng tràn trề.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi rất vinh hạnh được đón tiếp Discovery! Tôi đã số hóa các nhật ký thám hiểm gốc của Pháp năm 1957 và bản đồ địa chất để phục vụ đoàn làm phim của bạn.",
        "explanation": "Di sản lịch sử được lưu trữ bài bản là bệ phóng truyền thông vô giá đưa thương hiệu vươn tầm thế giới.",
        "crucialNote": "Bảo tàng truyền thống tại trụ sở Vikoda lưu giữ đầy đủ các hiện vật từ năm 1957.",
        "memoryHook": "Preserve 1957 expedition journals and maps."
      }
    ]
  },
  {
    "id": "unit-45",
    "unitNumber": 45,
    "title": "Bác Sĩ Pháp H. Fontaine & Nghiên Cứu Vi Sinh",
    "subtitle": "Dẫn chứng tài liệu nghiên cứu y khoa giá trị lịch sử",
    "level": "B1",
    "icon": "🔬",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u45-e1",
        "type": "match_pairs",
        "promptEn": "Match medical research and hydrogeological analysis terms:",
        "promptVi": "Ghép cặp thuật ngữ nghiên cứu vi sinh và y khoa của Bác sĩ Pháp Henri Fontaine:",
        "englishSentence": "Match medical hydrogeology and scientific analysis terms.",
        "audioText": "Match medical hydrogeology and scientific analysis terms.",
        "explanation": "5 dẫn chứng khoa học y học khẳng định giá trị trị liệu sức khỏe của nguồn khoáng Đảnh Thạnh.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ nghiên cứu y khoa về mỏ nước khoáng Đảnh Thạnh.",
        "pairs": [
          {
            "left": "Dr. Henri Fontaine",
            "right": "Bác sĩ địa chất học người Pháp phát hiện mỏ khoáng năm 1957"
          },
          {
            "left": "Hydro-mineral classification",
            "right": "Phân loại nguồn nước khoáng theo bảng chỉ số y học quốc tế"
          },
          {
            "left": "Vichy mineral equivalent",
            "right": "Đặc tính khoáng tương đương mỏ khoáng Vichy trứ danh nước Pháp"
          },
          {
            "left": "Therapeutic wellness virtues",
            "right": "Công dụng trị liệu và phục hồi sức khỏe tự nhiên"
          },
          {
            "left": "Pasteur Institute validation",
            "right": "Chứng thực kiểm nghiệm vi sinh của Viện Pasteur danh tiếng"
          }
        ]
      },
      {
        "id": "u45-e2",
        "type": "speak",
        "promptEn": "Speak this historical medical endorsement clearly:",
        "promptVi": "Luyện nói câu dẫn chứng nghiên cứu y học của Bác sĩ Pháp Henri Fontaine:",
        "englishSentence": "In 1957, French physician Doctor Henri Fontaine confirmed Danh Thanh matches the esteemed quality of famous European mineral spas.",
        "audioText": "In 1957, French physician Doctor Henri Fontaine confirmed Danh Thanh matches the esteemed quality of famous European mineral spas.",
        "phonetics": "/ɪn 1957, frɛntʃ fɪˈzɪʃən ˈdɒktər ˈɒnri fɒnˈtɛn kənˈfɜːrmd daɪn tæŋ ˈmætʃɪz ðiː ɪˈstiːmd ˈkwɒləti ɒv ˈfeɪməs ˌjʊərəˈpiːən ˈmɪnərəl spɑːz/",
        "vietnameseMeaning": "Năm 1957, bác sĩ người Pháp Henri Fontaine đã khẳng định Đảnh Thạnh sánh ngang chất lượng quý giá của các mỏ khoáng trị liệu danh tiếng châu Âu.",
        "explanation": "\"Confirmed Danh Thanh matches the esteemed quality of famous European mineral spas\" là bằng chứng y khoa đanh thép bảo chứng đẳng cấp quốc tế.",
        "whyWrong": "Phát âm chuẩn tên riêng tiếng Pháp \"Doctor Henri Fontaine\" (/ˈdɒktər ˈɒnri fɒnˈtɛn/) và \"esteemed\" (/ɪˈstiːmd/ - đáng kính, quý giá).",
        "crucialNote": "Tài liệu này được lưu trữ trong văn khố địa chất Đông Dương.",
        "memoryHook": "Dr. Henri Fontaine confirmed quality matches European spas."
      },
      {
        "id": "u45-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the comparison with the Vichy spring in France:",
        "promptVi": "Ghép câu: \"Các nghiên cứu y học ban đầu đã so sánh độ kiềm của Đảnh Thạnh với nguồn nước khoáng Vichy\":",
        "englishSentence": "Early medical studies compared Danh Thanh's alkalinity to the famous Vichy spring in France.",
        "audioText": "Early medical studies compared Danh Thanh's alkalinity to the famous Vichy spring in France.",
        "wordPool": [
          "Early",
          "medical",
          "studies",
          "compared",
          "Danh",
          "Thanh's",
          "alkalinity",
          "to",
          "the",
          "famous",
          "Vichy",
          "spring",
          "in",
          "France.",
          "poison",
          "dirty"
        ],
        "vietnameseMeaning": "Các nghiên cứu y học ban đầu đã so sánh độ kiềm của Đảnh Thạnh với nguồn nước khoáng Vichy nổi tiếng tại Pháp.",
        "explanation": "Nguồn khoáng Vichy của Pháp là biểu tượng nước khoáng kiềm thanh lọc cơ thể hàng đầu thế giới.",
        "whyWrong": "So sánh tương đương giúp đối tác phương Tây hiểu ngay giá trị địa chất phi thường của Vikoda.",
        "crucialNote": "Đảnh Thạnh thậm chí còn có độ kiềm tự nhiên pH 9.0 cao và ổn định hơn.",
        "memoryHook": "Compared alkalinity to famous Vichy spring in France."
      },
      {
        "id": "u45-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for historical scientific testing verification:",
        "promptVi": "Chọn từ chính xác chỉ chứng nhận kiểm nghiệm vi sinh độc lập bảo chứng chất lượng:",
        "englishSentence": "Doctor Fontaine's microbiological discoveries were formally [ _____ ] by the Pasteur Institute.",
        "audioText": "Doctor Fontaine's microbiological discoveries were formally verified by the Pasteur Institute.",
        "blankWord": "verified",
        "options": [
          "verified",
          "rejected",
          "banned"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Những phát hiện vi sinh của Bác sĩ Fontaine đã được Viện Pasteur chính thức chứng thực.",
        "explanation": "\"Formally verified\" (được chứng thực chính thức) khẳng định tính xác thực khoa học không thể chối cãi.",
        "whyWrong": "\"Rejected\" (bác bỏ) hay \"banned\" (cấm đoán) hoàn toàn sai lệch sự thật lịch sử.",
        "crucialNote": "Viện Pasteur Nha Trang là cái nôi nghiên cứu vi sinh hàng đầu Đông Nam Á do bác sĩ Alexandre Yersin sáng lập.",
        "memoryHook": "Formally verified by the Pasteur Institute."
      },
      {
        "id": "u45-e5",
        "type": "chat_branch",
        "promptEn": "Answer a French pharmaceutical buyer inquiring about hydro-mineral data on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Đại diện tập đoàn dược phẩm Pháp hỏi về dữ liệu phân tích mỏ Đảnh Thạnh theo hệ tiêu chuẩn Pháp:",
        "englishSentence": "Indeed! Dr. Fontaine's 1957 hydrogeological monograph classified Danh Thanh as bicarbonate-alkaline water, identical to French thermal spring standards.",
        "audioText": "Indeed! Dr. Fontaine's 1957 hydrogeological monograph classified Danh Thanh as bicarbonate-alkaline water, identical to French thermal spring standards.",
        "chatMessages": [
          {
            "speaker": "Dr. Laurent (Head of Sourcing, Sanofi Health Paris)",
            "avatar": "🇫🇷",
            "message": "Minh, we noticed historical references to Dr. Henri Fontaine in your technical dossier. Did he analyze the specific bicarbonate concentration?"
          }
        ],
        "chatOptions": [
          {
            "text": "Indeed! Dr. Fontaine's 1957 hydrogeological monograph classified Danh Thanh as bicarbonate-alkaline water, identical to French thermal spring standards.",
            "trustScore": 25,
            "feedback": "Phản hồi thông thái xuất chúng! Dẫn giải chuyên khảo địa chất của Bác sĩ Fontaine và phân loại kiềm bicacbonat chuẩn dược điển Pháp, khiến đối tác vô cùng thán phục.",
            "isCorrect": true
          },
          {
            "text": "I don't know who Fontaine is, probably some tourist who visited Khanh Hoa.",
            "trustScore": 0,
            "feedback": "Vô tri về lịch sử doanh nghiệp! Làm mất đi uy tín nghiên cứu y khoa quý giá hơn 60 năm của công ty.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chính xác ạ! Chuyên khảo địa chất thủy văn năm 1957 của Bác sĩ Fontaine đã phân loại Đảnh Thạnh là nước khoáng kiềm bicacbonat, hoàn toàn tương đồng với các tiêu chuẩn mỏ khoáng nhiệt trị liệu của Pháp.",
        "explanation": "Hiểu sâu sắc lịch sử nghiên cứu y học Pháp giúp Vikoda đàm phán tự tin và bình đẳng với các tập đoàn dược phẩm lớn trên thế giới.",
        "crucialNote": "Bác sĩ Henri Fontaine là nhà địa chất và cổ sinh vật học lừng danh của Viện Địa chất Pháp.",
        "memoryHook": "Bicarbonate-alkaline water identical to French standards."
      }
    ]
  },
  {
    "id": "unit-46",
    "unitNumber": 46,
    "title": "Khoa Học Muối Bicarbonate & Bền Kiềm",
    "subtitle": "Chứng minh độ pH 9.0 duy trì bền bỉ suốt 2 năm trong chai",
    "level": "B1",
    "icon": "🧪",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u46-e1",
        "type": "match_pairs",
        "promptEn": "Match mineral chemistry and alkaline stability concepts:",
        "promptVi": "Ghép cặp các khái niệm hóa học về muối khoáng Bicacbonat và tính bền kiềm tự nhiên:",
        "englishSentence": "Match bicarbonate chemistry and alkaline buffer terms.",
        "audioText": "Match bicarbonate chemistry and alkaline buffer terms.",
        "explanation": "5 thuật ngữ hóa học giải mã bí mật độ kiềm pH 9.0 bền bỉ suốt 2 năm của Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ hóa học về tính bền kiềm tự nhiên.",
        "pairs": [
          {
            "left": "Bicarbonate ion (HCO3-)",
            "right": "Ion bicacbonat tự nhiên trung hòa axit dạ dày"
          },
          {
            "left": "Chemical buffer capacity",
            "right": "Hệ đệm hóa học tự nhiên duy trì cân bằng kiềm"
          },
          {
            "left": "Long-term alkaline stability",
            "right": "Độ bền kiềm kéo dài suốt 24 tháng trong chai"
          },
          {
            "left": "Gastric acid neutralization",
            "right": "Trung hòa axit dư thừa trong dịch vị bao tử"
          },
          {
            "left": "Metasilicic acid (H2SiO3)",
            "right": "Axit metasilicic vi lượng làm đẹp da và mạch máu"
          }
        ]
      },
      {
        "id": "u46-e2",
        "type": "speak",
        "promptEn": "Speak this chemical stability explanation clearly:",
        "promptVi": "Luyện nói câu giải thích cơ chế bền kiềm tự nhiên nhờ muối bicacbonat:",
        "englishSentence": "Vikoda's natural pH 9.0 remains stable for two full years thanks to rich bicarbonate mineral buffers.",
        "audioText": "Vikoda's natural pH 9.0 remains stable for two full years thanks to rich bicarbonate mineral buffers.",
        "phonetics": "/vɪˈkoʊdəz ˈnætʃrəl piː eɪtʃ naɪn rɪˈmeɪnz ˈsteɪbl fɔːr tuː fʊl jɪərz θæŋks tuː rɪtʃ baɪˈkɑːrbənət ˈmɪnərəl ˈbʌfərz/",
        "vietnameseMeaning": "Độ kiềm tự nhiên pH 9.0 của Vikoda duy trì ổn định suốt hai năm trọn vẹn nhờ vào hệ đệm khoáng chất bicacbonat dồi dào.",
        "explanation": "\"Remains stable for two full years thanks to bicarbonate mineral buffers\" là luận điểm hóa học đắt giá giải thích độ bền vượt trội.",
        "whyWrong": "Phát âm chuẩn từ \"bicarbonate\" (/baɪˈkɑːrbənət/) và \"buffers\" (/ˈbʌfərz/ - hệ đệm).",
        "crucialNote": "Hệ đệm tự nhiên ngăn chặn không khí làm tụt độ pH khi nước được lưu giữ trong chai đóng kín.",
        "memoryHook": "pH 9.0 stable for 2 years thanks to bicarbonate buffers."
      },
      {
        "id": "u46-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain how bicarbonate neutralizes stomach acid:",
        "promptVi": "Ghép câu: \"Các ion bicacbonat tự nhiên hỗ trợ đắc lực việc trung hòa axit dư thừa trong dạ dày\":",
        "englishSentence": "Natural bicarbonate ions actively support the neutralization of excess stomach acid.",
        "audioText": "Natural bicarbonate ions actively support the neutralization of excess stomach acid.",
        "wordPool": [
          "Natural",
          "bicarbonate",
          "ions",
          "actively",
          "support",
          "the",
          "neutralization",
          "of",
          "excess",
          "stomach",
          "acid.",
          "burn",
          "ulcer"
        ],
        "vietnameseMeaning": "Các ion bicacbonat tự nhiên hỗ trợ đắc lực việc trung hòa axit dư thừa trong dạ dày.",
        "explanation": "Cơ chế kiềm hóa tự nhiên giúp giảm triệu chứng ợ chua, trào ngược dạ dày thực quản (GERD) mà không cần dùng thuốc kháng axit.",
        "whyWrong": "\"Neutralization of excess stomach acid\" là cụm từ y học chuẩn chỉ việc trung hòa axit bao tử.",
        "crucialNote": "Uống 1 chai Vikoda mỗi sáng khi bụng đói giúp cân bằng độ pH đường tiêu hóa lý tưởng.",
        "memoryHook": "Bicarbonate ions neutralize excess stomach acid."
      },
      {
        "id": "u46-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct chemical compound responsible for alkaline buffering:",
        "promptVi": "Chọn hợp chất khoáng tự nhiên đóng vai trò hệ đệm giữ vững độ kiềm:",
        "englishSentence": "The high concentration of natural [ _____ ] preserves the water's alkaline integrity without artificial chemicals.",
        "audioText": "The high concentration of natural bicarbonate preserves the water's alkaline integrity without artificial chemicals.",
        "blankWord": "bicarbonate",
        "options": [
          "bicarbonate",
          "cyanide",
          "chlorine"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hàm lượng bicacbonat tự nhiên cao bảo toàn tính kiềm nguyên bản của nước mà không cần hóa chất nhân tạo.",
        "explanation": "\"Bicarbonate\" (HCO3-) là khoáng chất lành tính quý giá nhất trong nước khoáng kiềm thiên nhiên.",
        "whyWrong": "\"Cyanide\" hay \"chlorine\" là hóa chất độc hại nguy hiểm.",
        "crucialNote": "Chỉ số bicacbonat trong Vikoda đạt ngưỡng vàng từ 300 đến 450 mg/lít.",
        "memoryHook": "Natural bicarbonate preserves alkaline integrity."
      },
      {
        "id": "u46-e5",
        "type": "chat_branch",
        "promptEn": "Answer an organic chemist regarding pH stability on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Tiến sĩ hóa học hữu cơ Úc hỏi tại sao nước ion kiềm nhân tạo tụt pH sau vài ngày, trong khi Vikoda lại giữ được 2 năm:",
        "englishSentence": "Artificial ionized water lacks mineral buffers, so CO2 from air drops its pH quickly. Vikoda contains rich natural HCO3- ions which maintain stable pH 9.0 indefinitely!",
        "audioText": "Artificial ionized water lacks mineral buffers, so CO2 from air drops its pH quickly. Vikoda contains rich natural HCO3- ions which maintain stable pH 9.0 indefinitely!",
        "chatMessages": [
          {
            "speaker": "Dr. Oliver (Senior Biochemist, Sydney Organic Labs)",
            "avatar": "🔬",
            "message": "Minh, we tested multiple alkaline brands. Most ionized waters degrade to pH 7.2 after 48 hours. What chemical mechanism keeps Vikoda at pH 9.0 for 2 years?"
          }
        ],
        "chatOptions": [
          {
            "text": "Artificial ionized water lacks mineral buffers, so CO2 from air drops its pH quickly. Vikoda contains rich natural HCO3- ions which maintain stable pH 9.0 indefinitely!",
            "trustScore": 25,
            "feedback": "Phản hồi của nhà khoa học đại tài! Phân tích rõ sự khác biệt giữa nước thiếu đệm khoáng và nước giàu ion HCO3- tự nhiên, hoàn toàn thuyết phục hội đồng khoa học Úc.",
            "isCorrect": true
          },
          {
            "text": "We put special preservatives in the bottle cap to stop the pH from leaking out.",
            "trustScore": 0,
            "feedback": "Sai lệch hoàn toàn về mặt khoa học! Vikoda cam kết 100% không chất bảo quản.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Nước ion kiềm nhân tạo thiếu hệ đệm khoáng nên khí CO2 từ không khí làm tụt pH rất nhanh. Vikoda chứa các ion HCO3- tự nhiên dồi dào giúp duy trì độ pH 9.0 ổn định bền bỉ!",
        "explanation": "Khí CO2 trong khí quyển tác dụng với nước tạo axit cacbonic yếu làm trung hòa kiềm nếu không có hệ đệm bicacbonat bảo vệ.",
        "crucialNote": "Đây là luận điểm khoa học đánh bại hoàn toàn các máy lọc nước điện phân ion kiềm nhân tạo.",
        "memoryHook": "Natural HCO3- buffers maintain pH 9.0 against CO2 degradation."
      }
    ]
  },
  {
    "id": "unit-47",
    "unitNumber": 47,
    "title": "So Sánh Kiềm Tự Nhiên vs Điện Phân",
    "subtitle": "Chỉ rõ kiềm nhân tạo mất tính kiềm sau 48 giờ mở nắp",
    "level": "B1",
    "icon": "⚡",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u47-e1",
        "type": "match_pairs",
        "promptEn": "Match natural vs artificial alkaline contrasting characteristics:",
        "promptVi": "Ghép cặp các đặc tính tương phản giữa nước kiềm thiên nhiên và nước ion kiềm điện phân nhân tạo:",
        "englishSentence": "Match natural vs artificial alkaline characteristics.",
        "audioText": "Match natural vs artificial alkaline characteristics.",
        "explanation": "5 sự đối chiếu khoa học vạch rõ ranh giới giữa kiềm tự nhiên đất mẹ và kiềm máy móc nhân tạo.",
        "vietnameseMeaning": "Ghép đúng 5 cặp đặc tính phân biệt kiềm tự nhiên và kiềm điện phân.",
        "pairs": [
          {
            "left": "Natural alkaline mineral water",
            "right": "Kiềm tự nhiên hấp thu từ lòng đất qua hàng trăm năm"
          },
          {
            "left": "Artificial electrolyzed water",
            "right": "Nước lọc dùng dòng điện tách ion qua các bản cực kim loại"
          },
          {
            "left": "Rapid pH degradation",
            "right": "Mất tính kiềm nhanh chóng chỉ sau 24 đến 48 giờ mở nắp"
          },
          {
            "left": "Platinum electrode plates",
            "right": "Bản cực kim loại bạch kim nhân tạo dùng trong máy điện phân"
          },
          {
            "left": "Geological mineral synergy",
            "right": "Sự cộng hưởng hài hòa của các khoáng chất địa chất tự nhiên"
          }
        ]
      },
      {
        "id": "u47-e2",
        "type": "speak",
        "promptEn": "Speak this decisive product comparison statement clearly:",
        "promptVi": "Luyện nói câu phân biệt dứt khoát giá trị bền vững của kiềm tự nhiên Vikoda:",
        "englishSentence": "Unlike artificial electrolyzed water which degrades within forty-eight hours, Vikoda delivers natural, enduring alkalinity straight from the earth.",
        "audioText": "Unlike artificial electrolyzed water which degrades within forty-eight hours, Vikoda delivers natural, enduring alkalinity straight from the earth.",
        "phonetics": "/ʌnˈlaɪk ˌɑːrtɪˈfɪʃəl ɪˈlɛktrəlaɪzd ˈwɔːtər wɪtʃ dɪˈɡreɪdz wɪðˈɪn ˈfɔːrti eɪt ˈaʊərz, vɪˈkoʊdə dɪˈlɪvərz ˈnætʃrəl, ɪnˈdjʊərɪŋ ˌælkəˈlɪnɪti streɪt frɒm ðiː ɜːrθ/",
        "vietnameseMeaning": "Không giống như nước điện giải nhân tạo bị mất tính kiềm trong vòng 48 giờ, Vikoda mang đến độ kiềm tự nhiên bền bỉ trực tiếp từ lòng đất mẹ.",
        "explanation": "\"Enduring alkalinity straight from the earth\" là định vị độc tôn nâng tầm Vikoda thành nguồn nước sống tự nhiên.",
        "whyWrong": "Phát âm rõ từ \"electrolyzed\" (/ɪˈlɛktrəlaɪzd/) và \"enduring alkalinity\" (/ɪnˈdjʊərɪŋ ˌælkəˈlɪnɪti/).",
        "crucialNote": "Nước điện phân chỉ là nước tinh khiết bị kích hoạt ion giả tạo tạm thời bằng dòng điện.",
        "memoryHook": "Electrolyzed degrades in 48 hours; Vikoda is enduring from the earth."
      },
      {
        "id": "u47-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the rapid loss of artificial alkaline charge:",
        "promptVi": "Ghép câu: \"Nước điện phân nhân tạo nhanh chóng mất tính kiềm khi tiếp xúc với không khí\":",
        "englishSentence": "Artificial ionized water quickly loses its alkaline charge upon contact with air.",
        "audioText": "Artificial ionized water quickly loses its alkaline charge upon contact with air.",
        "wordPool": [
          "Artificial",
          "ionized",
          "water",
          "quickly",
          "loses",
          "its",
          "alkaline",
          "charge",
          "upon",
          "contact",
          "with",
          "air.",
          "gain",
          "forever"
        ],
        "vietnameseMeaning": "Nước ion hóa nhân tạo nhanh chóng mất tính kiềm khi tiếp xúc với không khí.",
        "explanation": "Các ion H+ và OH- tự do tạo ra bởi dòng điện không bền, nhanh chóng tái kết hợp thành phân tử nước trung tính H2O thông thường.",
        "whyWrong": "\"Loses its alkaline charge\" là thuật ngữ vật lý mô tả sự tan biến của điện tích ion nhân tạo.",
        "crucialNote": "Người tiêu dùng mua máy điện giải đắt tiền nhưng thường uống phải nước đã mất kiềm sau vài giờ đựng trong bình.",
        "memoryHook": "Loses its alkaline charge upon contact with air."
      },
      {
        "id": "u47-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for artificial electrolysis equipment:",
        "promptVi": "Chọn thuật ngữ chỉ cơ chế dùng dòng điện nhân tạo để tách nước:",
        "englishSentence": "Vikoda requires zero artificial [ _____ ] because our alkalinity is created purely by geological mineral contact.",
        "audioText": "Vikoda requires zero artificial electrolysis because our alkalinity is created purely by geological mineral contact.",
        "blankWord": "electrolysis",
        "options": [
          "electrolysis",
          "hypnosis",
          "paralysis"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda hoàn toàn không cần điện phân nhân tạo vì độ kiềm của chúng tôi được tạo ra thuần khiết qua sự tiếp xúc khoáng chất địa chất.",
        "explanation": "\"Electrolysis\" (quá trình điện phân) là phương pháp nhân tạo can thiệp bằng máy móc.",
        "whyWrong": "\"Hypnosis\" (thôi miên) hay \"paralysis\" (tê liệt) hoàn toàn sai lệch ngữ cảnh.",
        "crucialNote": "Thiên nhiên mất hàng trăm năm để kiến tạo giọt nước kiềm Vikoda, không máy móc nào làm giả được.",
        "memoryHook": "Zero artificial electrolysis = Không điện phân nhân tạo."
      },
      {
        "id": "u47-e5",
        "type": "chat_branch",
        "promptEn": "Debate an ionized alkaline machine salesperson on Teams professionally:",
        "promptVi": "Mô phỏng tin nhắn: Đại lý máy lọc nước ion kiềm tuyên bố máy của họ tạo được nước kiềm pH 9.5 tốt hơn nước khoáng đóng chai:",
        "englishSentence": "Your machine uses artificial electrolysis on municipal tap water which reverts to neutral in 24 hours. Vikoda is 100% natural mineral water with stable pH 9.0 certified since 1957!",
        "audioText": "Your machine uses artificial electrolysis on municipal tap water which reverts to neutral in 24 hours. Vikoda is 100% natural mineral water with stable pH 9.0 certified since 1957!",
        "chatMessages": [
          {
            "speaker": "Ken (Sales Director, Kangen Ionizer Vietnam)",
            "avatar": "🔌",
            "message": "Why should consumers buy bottled Vikoda when our $4,000 electrolysis machine can create pH 9.5 water on demand at the kitchen sink?"
          }
        ],
        "chatOptions": [
          {
            "text": "Your machine uses artificial electrolysis on municipal tap water which reverts to neutral in 24 hours. Vikoda is 100% natural mineral water with stable pH 9.0 certified since 1957!",
            "trustScore": 25,
            "feedback": "Bản lĩnh phản biện đỉnh cao! Chỉ rõ bản chất máy điện phân dùng nước máy đô thị và mất kiềm sau 24 giờ, khẳng định giá trị nước khoáng kiềm thiên nhiên đóng chai tại nguồn được chứng thực suốt 68 năm.",
            "isCorrect": true
          },
          {
            "text": "Oh, your machine is so high-tech! Maybe our factory should buy your machines instead.",
            "trustScore": 0,
            "feedback": "Tự ti và đánh mất bản sắc! Nước khoáng Đảnh Thạnh quý gấp vạn lần nước máy điện phân nhân tạo.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Máy của bạn dùng điện phân nhân tạo trên nguồn nước máy đô thị và nước sẽ trở về trạng thái trung tính sau 24 giờ. Vikoda là nước khoáng thiên nhiên 100% với độ pH 9.0 ổn định được chứng thực từ năm 1957!",
        "explanation": "Hiểu rõ nguồn gốc nước máy (tap water) so với mỏ khoáng sâu 220m giúp bảo vệ thị phần và định vị cao cấp của Vikoda.",
        "crucialNote": "Nước máy qua điện phân vẫn có thể chứa dư lượng hóa chất xử lý nước của thành phố.",
        "memoryHook": "Tap water electrolysis reverts to neutral; Vikoda is 100% natural mineral water."
      }
    ]
  },
  {
    "id": "unit-48",
    "unitNumber": 48,
    "title": "Khai Thác Độ Sâu 220m Qua Vỉa Khoáng",
    "subtitle": "Mô tả lớp địa chất bazan ngàn năm lọc sạch giọt nước",
    "level": "B1",
    "icon": "⛰️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u48-e1",
        "type": "match_pairs",
        "promptEn": "Match deep geological extraction terms with their definitions:",
        "promptVi": "Ghép cặp các thuật ngữ địa chất khai thác nước ngầm ở độ sâu 220 mét:",
        "englishSentence": "Match deep geological drilling and strata terms.",
        "audioText": "Match deep geological drilling and strata terms.",
        "explanation": "5 khái niệm địa chất học mô tả hành trình thẩm thấu kỳ diệu qua tầng đá magma núi lửa.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ địa chất khai thác mỏ khoáng sâu 220 mét.",
        "pairs": [
          {
            "left": "220-meter extraction depth",
            "right": "Độ sâu khai thác hai trăm hai mươi mét trong lòng đất"
          },
          {
            "left": "Magma basalt rock formation",
            "right": "Tầng đá bazan magma núi lửa cổ xưa lọc nước"
          },
          {
            "left": "Centuries of natural percolation",
            "right": "Hàng trăm năm thẩm thấu chắt lọc qua các khe nứt địa chất"
          },
          {
            "left": "Confined deep aquifer",
            "right": "Tầng chứa nước ngầm sâu được che chắn kín tuyệt đối"
          },
          {
            "left": "Natural artesian pressure",
            "right": "Áp lực thủy tĩnh tự nhiên đẩy nước phun trào lên mặt đất"
          }
        ]
      },
      {
        "id": "u48-e2",
        "type": "speak",
        "promptEn": "Speak this geological journey narrative clearly:",
        "promptVi": "Luyện nói câu kể câu chuyện địa chất kỳ vĩ của giọt nước khoáng Đảnh Thạnh:",
        "englishSentence": "Filtered through ancient magma rock layers for hundreds of years, every drop arrives at our 220-meter well with pristine mineral purity.",
        "audioText": "Filtered through ancient magma rock layers for hundreds of years, every drop arrives at our 220-meter well with pristine mineral purity.",
        "phonetics": "/ˈfɪltərd θruː ˈeɪnʃənt ˈmæɡmə rɒk ˈleɪərz fɔːr ˈhʌndrədz ɒv jɪərz, ˈɛvri drɒp əˈraɪvz æt ˈaʊər 220 ˈmiːtər wɛl wɪð ˈprɪstiːn ˈmɪnərəl ˈpjʊərəti/",
        "vietnameseMeaning": "Được lọc qua các tầng đá magma cổ xưa suốt hàng trăm năm, mỗi giọt nước đến giếng khoan 220 mét của chúng tôi với độ tinh khiết khoáng chất nguyên bản.",
        "explanation": "\"Filtered through ancient magma rock layers for hundreds of years\" là ngôn ngữ storytelling giàu hình ảnh thơ mộng và giá trị thời gian.",
        "whyWrong": "Phát âm chuẩn từ \"ancient magma\" (/ˈeɪnʃənt ˈmæɡmə/) và \"percolation\" (/ˌpɜːrkəˈleɪʃən/).",
        "crucialNote": "Độ sâu 220m cách ly nguồn nước hoàn toàn khỏi mọi biến động môi trường và biến đổi khí hậu trên bề mặt.",
        "memoryHook": "Filtered through magma rock for centuries to 220m well."
      },
      {
        "id": "u48-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the natural filtration through dense volcanic strata:",
        "promptVi": "Ghép câu: \"Các tầng địa chất núi lửa dày đặc hoạt động như một hệ thống lọc tự nhiên phi thường\":",
        "englishSentence": "Dense volcanic geological strata act as an extraordinary natural filtration system.",
        "audioText": "Dense volcanic geological strata act as an extraordinary natural filtration system.",
        "wordPool": [
          "Dense",
          "volcanic",
          "geological",
          "strata",
          "act",
          "as",
          "an",
          "extraordinary",
          "natural",
          "filtration",
          "system.",
          "broken",
          "dirty"
        ],
        "vietnameseMeaning": "Các tầng địa chất núi lửa dày đặc hoạt động như một hệ thống lọc tự nhiên phi thường.",
        "explanation": "Đá magma bazan có cấu trúc rỗng xốp vi mô giữ lại mọi tạp chất và giải phóng các nguyên tố vi lượng quý giá vào nước.",
        "whyWrong": "\"Extraordinary natural filtration system\" khẳng định thiên nhiên là bộ lọc siêu đẳng nhất.",
        "crucialNote": "Không có màng lọc nhân tạo nào mô phỏng được độ cân bằng khoáng học này.",
        "memoryHook": "Volcanic strata act as natural filtration system."
      },
      {
        "id": "u48-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct geological term for deep groundwater pockets:",
        "promptVi": "Chọn thuật ngữ địa chất chỉ tầng chứa nước ngầm tinh khiết sâu trong lòng đất:",
        "englishSentence": "The borehole penetrates deep into a protected artesian [ _____ ] sealed by crystalline bedrock.",
        "audioText": "The borehole penetrates deep into a protected artesian aquifer sealed by crystalline bedrock.",
        "blankWord": "aquifer",
        "options": [
          "aquifer",
          "volcano",
          "swamp"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Mũi khoan đâm sâu vào một tầng chứa nước ngầm phun trào tự nhiên được bảo vệ bởi tầng đá gốc kết tinh.",
        "explanation": "\"Artesian aquifer\" (tầng ngậm nước ngầm tự phun) là nguồn khoáng có áp lực thủy tĩnh tự nhiên phun trào.",
        "whyWrong": "\"Volcano\" (núi lửa phun nham thạch) hay \"swamp\" (đầm lầy ô nhiễm) hoàn toàn sai lệch tính chất nước khoáng sạch.",
        "crucialNote": "Tầng ngậm nước Đảnh Thạnh được hình thành từ kỷ đệ tứ cách đây hàng triệu năm.",
        "memoryHook": "Protected artesian aquifer = Tầng ngậm nước tự phun được bảo vệ."
      },
      {
        "id": "u48-e5",
        "type": "chat_branch",
        "promptEn": "Explain the geological depth advantage to an international mining investor on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia địa chất tập đoàn Mitsui Nhật Bản hỏi về độ bền vững của giếng khoan 220 mét:",
        "englishSentence": "At 220m depth, our water is fully confined beneath impermeable granite and basalt, guaranteeing eternal protection from surface drought or pollution.",
        "audioText": "At 220m depth, our water is fully confined beneath impermeable granite and basalt, guaranteeing eternal protection from surface drought or pollution.",
        "chatMessages": [
          {
            "speaker": "Mr. Kenzo (Geological Sourcing Director, Mitsui Tokyo)",
            "avatar": "🇯🇵",
            "message": "Minh, we are evaluating long-term supply resilience. How does your 220-meter extraction depth insulate the spring against severe regional droughts?"
          }
        ],
        "chatOptions": [
          {
            "text": "At 220m depth, our water is fully confined beneath impermeable granite and basalt, guaranteeing eternal protection from surface drought or pollution.",
            "trustScore": 25,
            "feedback": "Phản hồi chuẩn mực chuyên gia địa chất! Nêu bật tầng đá hoa cương (granite) và bazan không thấm nước, bảo vệ nguồn nước vĩnh cửu trước hạn hán hay ô nhiễm mặt đất.",
            "isCorrect": true
          },
          {
            "text": "When drought comes, we just pour tap water into the well so the water level stays high.",
            "trustScore": 0,
            "feedback": "Gian lận và xúc phạm khoa học! Tập đoàn Mitsui sẽ hủy bỏ toàn bộ đàm phán hợp tác.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Ở độ sâu 220m, nguồn nước của chúng tôi hoàn toàn được giam giữ kín dưới tầng đá hoa cương và bazan không thấm nước, bảo đảm sự bảo vệ vĩnh cửu trước hạn hán hay ô nhiễm bề mặt.",
        "explanation": "Độ sâu 220 mét là lá chắn vững chắc bảo vệ nguồn cung ứng ổn định 365 ngày mỗi năm cho các đối tác toàn cầu.",
        "crucialNote": "Dù mùa khô hạn kéo dài ở miền Trung, lưu lượng mỏ Đảnh Thạnh vẫn phun trào dồi dào và nguyên vẹn.",
        "memoryHook": "220m depth confined beneath granite guarantees eternal protection."
      }
    ]
  },
  {
    "id": "unit-49",
    "unitNumber": 49,
    "title": "Nhiệt Độ Vòi Phun 72°C Tại Nguồn",
    "subtitle": "Khẳng định độ tinh khiết vô trùng nhiệt từ lòng đất mẹ",
    "level": "B1",
    "icon": "♨️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u49-e1",
        "type": "match_pairs",
        "promptEn": "Match geothermal thermal spring properties with their scientific meanings:",
        "promptVi": "Ghép cặp các đặc tính địa nhiệt 72 độ C tại nguồn khoáng Đảnh Thạnh với ý nghĩa khoa học:",
        "englishSentence": "Match thermal spring and geothermal sterility terms.",
        "audioText": "Match thermal spring and geothermal sterility terms.",
        "explanation": "5 thông số nhiệt học chứng minh độ vô trùng tự nhiên không cần hóa chất của nước khoáng Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thông số nhiệt độ nguồn khoáng 72 độ C.",
        "pairs": [
          {
            "left": "72 degrees Celsius at wellhead",
            "right": "Nhiệt độ phun trào tự nhiên bảy mươi hai độ C tại miệng giếng"
          },
          {
            "left": "Thermal virgin sterility",
            "right": "Độ vô trùng nhiệt tự nhiên không có vi sinh vật gây hại"
          },
          {
            "left": "Geothermal energy gradient",
            "right": "Gradien địa nhiệt sâu tích tụ năng lượng lòng đất"
          },
          {
            "left": "Closed-circuit cooling heat exchanger",
            "right": "Hệ thống trao đổi nhiệt làm nguội khép kín không tiếp xúc không khí"
          },
          {
            "left": "Pasteur-equivalent natural heat",
            "right": "Nhiệt độ tương đương quá trình thanh trùng Pasteur tự nhiên"
          }
        ]
      },
      {
        "id": "u49-e2",
        "type": "speak",
        "promptEn": "Speak this thermal sterility scientific pitch clearly:",
        "promptVi": "Luyện nói câu khẳng định độ vô trùng nhiệt tự nhiên 72 độ C của Vikoda:",
        "englishSentence": "Erupting at seventy-two degrees Celsius, Vikoda is naturally sterilized by geothermal heat before bottling.",
        "audioText": "Erupting at seventy-two degrees Celsius, Vikoda is naturally sterilized by geothermal heat before bottling.",
        "phonetics": "/ɪˈrʌptɪŋ æt ˈsɛvənti tuː dɪˈɡriːz ˈsɛlsiəs, vɪˈkoʊdə ɪz ˈnætʃrəli ˈstɛrɪlaɪzd baɪ ˌdʒiːoʊˈθɜːrməl hiːt bɪˈfɔːr ˈbɒtlɪŋ/",
        "vietnameseMeaning": "Phun trào ở nhiệt độ bảy mươi hai độ C, Vikoda được khử trùng tự nhiên bằng nhiệt lượng địa nhiệt trước khi đóng chai.",
        "explanation": "\"Naturally sterilized by geothermal heat\" (được khử trùng tự nhiên bằng nhiệt địa nhiệt) là món quà vô giá của tạo hóa.",
        "whyWrong": "Phát âm rõ từ \"sterilized\" (/ˈstɛrɪlaɪzd/ - tiệt trùng) và \"geothermal heat\" (/ˌdʒiːoʊˈθɜːrməl hiːt/).",
        "crucialNote": "72°C tương đương nhiệt độ thanh trùng Pasteur tiêu diệt vi khuẩn mà không phá hủy cấu trúc khoáng chất.",
        "memoryHook": "72 degrees Celsius = Naturally sterilized by geothermal heat."
      },
      {
        "id": "u49-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the hygienic cooling process without air exposure:",
        "promptVi": "Ghép câu: \"Nước khoáng nóng được làm nguội nhẹ nhàng qua thiết bị trao đổi nhiệt khép kín\":",
        "englishSentence": "The hot mineral water is gently cooled through a closed-loop heat exchanger.",
        "audioText": "The hot mineral water is gently cooled through a closed-loop heat exchanger.",
        "wordPool": [
          "The",
          "hot",
          "mineral",
          "water",
          "is",
          "gently",
          "cooled",
          "through",
          "a",
          "closed-loop",
          "heat",
          "exchanger.",
          "boiled",
          "frozen"
        ],
        "vietnameseMeaning": "Nước khoáng nóng được làm nguội nhẹ nhàng qua thiết bị trao đổi nhiệt khép kín.",
        "explanation": "Nước khoáng từ 72°C được hạ nhiệt xuống nhiệt độ phòng (25-28°C) bên trong các tấm trao đổi nhiệt inox vi sinh mà không tiếp xúc với môi trường bên ngoài.",
        "whyWrong": "Dùng \"closed-loop heat exchanger\" khẳng định công nghệ chế biến thực phẩm tối tân.",
        "crucialNote": "Nhiệt lượng tỏa ra được tái thu hồi để sấy bao bì và tiết kiệm điện năng cho nhà máy xanh.",
        "memoryHook": "Gently cooled through closed-loop heat exchanger."
      },
      {
        "id": "u49-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct temperature unit for scientific reporting:",
        "promptVi": "Chọn đơn vị đo nhiệt độ tiêu chuẩn quốc tế cho nguồn khoáng 72 độ:",
        "englishSentence": "The spring erupts constantly at seventy-two degrees [ _____ ] throughout all seasons of the year.",
        "audioText": "The spring erupts constantly at seventy-two degrees Celsius throughout all seasons of the year.",
        "blankWord": "Celsius",
        "options": [
          "Celsius",
          "Fahrenheit",
          "Calories"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Mỏ khoáng phun trào liên tục ở nhiệt độ 72 độ C trong suốt tất cả các mùa trong năm.",
        "explanation": "\"72 degrees Celsius\" (72°C tương đương khoảng 161.6°F) là con số biểu tượng của mỏ Đảnh Thạnh.",
        "whyWrong": "\"Calories\" đo năng lượng thức ăn, không đo nhiệt độ dòng nước.",
        "crucialNote": "Nhiệt độ ổn định quanh năm bất kể mùa hè hay mùa đông chứng tỏ độ sâu địa chất vĩ đại.",
        "memoryHook": "Seventy-two degrees Celsius all year round."
      },
      {
        "id": "u49-e5",
        "type": "chat_branch",
        "promptEn": "Explain the 72°C virgin heat advantage to a food safety auditor on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia kiểm toán vệ sinh an toàn thực phẩm hỏi nhà máy dùng hóa chất clo khử trùng nước không:",
        "englishSentence": "Zero chlorine or chemicals! Mother Nature performs natural Pasteur sterilization at 72°C underground, so Vikoda is 100% pure and chemical-free.",
        "audioText": "Zero chlorine or chemicals! Mother Nature performs natural Pasteur sterilization at 72°C underground, so Vikoda is 100% pure and chemical-free.",
        "chatMessages": [
          {
            "speaker": "Inspector Walter (HACCP Lead Auditor)",
            "avatar": "🛡️",
            "message": "Minh, what chemical biocides or chlorine treatments do you apply to kill harmful bacteria before bottling?"
          }
        ],
        "chatOptions": [
          {
            "text": "Zero chlorine or chemicals! Mother Nature performs natural Pasteur sterilization at 72°C underground, so Vikoda is 100% pure and chemical-free.",
            "trustScore": 25,
            "feedback": "Câu trả lời xuất sắc đạt điểm tuyệt đối! Tuyên bố dõng dạc 0% clo hay hóa chất, vì Mẹ Thiên Nhiên đã thanh trùng tự nhiên bằng nhiệt độ 72°C dưới lòng đất.",
            "isCorrect": true
          },
          {
            "text": "We add large amounts of chlorine bleach every morning to make sure no bacteria survives.",
            "trustScore": 0,
            "feedback": "Phá hủy toàn bộ giá trị nước khoáng tự nhiên! Sẽ bị tước giấy phép đóng chai ngay lập tức.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Hoàn toàn không có clo hay hóa chất! Mẹ Thiên Nhiên đã thực hiện thanh trùng tự nhiên ở nhiệt độ 72 độ C dưới lòng đất, vì vậy Vikoda hoàn toàn tinh khiết 100% và không có hóa chất.",
        "explanation": "Nước khoáng thiên nhiên nguyên bản theo luật quốc tế tuyệt đối bị cấm khử trùng bằng clo hay hóa chất diệt khuẩn.",
        "crucialNote": "Nhiệt độ 72°C tự nhiên là giải pháp sinh học an toàn nhất thế giới.",
        "memoryHook": "Zero chlorine! Nature performs Pasteur sterilization at 72°C."
      }
    ]
  },
  {
    "id": "unit-50",
    "unitNumber": 50,
    "title": "Vành Đai Xanh Sinh Thái Nghiêm Ngặt 35ha",
    "subtitle": "Cam kết bảo vệ môi trường mỏ không hóa chất nông nghiệp",
    "level": "B1",
    "icon": "🌲",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u50-e1",
        "type": "match_pairs",
        "promptEn": "Match ecological reserve and watershed protection terms with their meanings:",
        "promptVi": "Ghép cặp các thuật ngữ vành đai bảo vệ sinh thái 35 héc-ta quanh mỏ khoáng Đảnh Thạnh:",
        "englishSentence": "Match watershed sanctuary and ecological buffer terms.",
        "audioText": "Match watershed sanctuary and ecological buffer terms.",
        "explanation": "5 tiêu chuẩn bảo tồn lưu vực sinh thái bảo vệ giọt nước ngầm nguyên sinh.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ vành đai xanh sinh thái bảo tồn mỏ nước.",
        "pairs": [
          {
            "left": "35-hectare green sanctuary",
            "right": "Vành đai xanh sinh thái ba mươi lăm héc-ta được bảo vệ nghiêm ngặt"
          },
          {
            "left": "Zero chemical pesticide policy",
            "right": "Chính sách cấm tuyệt đối phân bón hóa học và thuốc trừ sâu"
          },
          {
            "left": "Protected catchment area",
            "right": "Lưu vực hứng nước ngầm được bảo tồn toàn vẹn"
          },
          {
            "left": "Native botanical reforestation",
            "right": "Trồng tái tạo thảm thực vật cây xanh bản địa hàng năm"
          },
          {
            "left": "Sanitary protection perimeter",
            "right": "Hàng rào ranh giới bảo vệ vệ sinh nghiêm ngặt cấp 1"
          }
        ]
      },
      {
        "id": "u50-e2",
        "type": "speak",
        "promptEn": "Speak this environmental commitment statement clearly:",
        "promptVi": "Luyện nói câu cam kết bảo vệ môi trường vành đai xanh sinh thái 35ha của Vikoda:",
        "englishSentence": "Our thirty-five hectare ecological sanctuary strictly prohibits pesticides and chemical fertilizers to protect the pristine aquifer.",
        "audioText": "Our thirty-five hectare ecological sanctuary strictly prohibits pesticides and chemical fertilizers to protect the pristine aquifer.",
        "phonetics": "/ˈaʊər ˈθɜːrti faɪv ˈhɛktɛər ˌiːkəˈlɒdʒɪkəl ˈsæŋktʃʊəri ˈstrɪktli prəˈhɪbɪts ˈpɛstɪsaɪdz ænd ˈkɛmɪkəl ˈfɜːrtəlaɪzərz tuː prəˈtɛkt ðə ˈprɪstiːn ˈækwɪfər/",
        "vietnameseMeaning": "Vành đai xanh sinh thái ba mươi lăm héc-ta của chúng tôi nghiêm cấm thuốc trừ sâu và phân bón hóa học để bảo vệ tầng nước ngầm thuần khiết.",
        "explanation": "\"Strictly prohibits pesticides and chemical fertilizers to protect the aquifer\" khẳng định trách nhiệm môi trường cao nhất.",
        "whyWrong": "Phát âm chuẩn từ \"prohibits\" (/prəˈhɪbɪts/) và \"pesticides\" (/ˈpɛstɪsaɪdz/).",
        "crucialNote": "Không có vùng đất canh tác nông nghiệp hay khu dân cư nào được phép tồn tại trong vành đai 35ha.",
        "memoryHook": "35ha sanctuary strictly prohibits pesticides and fertilizers."
      },
      {
        "id": "u50-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the role of native trees in watershed conservation:",
        "promptVi": "Ghép câu: \"Hàng nghìn cây xanh bản địa che phủ sườn đồi để nuôi dưỡng mạch nước ngầm\":",
        "englishSentence": "Thousands of native trees blanket the foothills to nourish the underground spring.",
        "audioText": "Thousands of native trees blanket the foothills to nourish the underground spring.",
        "wordPool": [
          "Thousands",
          "of",
          "native",
          "trees",
          "blanket",
          "the",
          "foothills",
          "to",
          "nourish",
          "the",
          "underground",
          "spring.",
          "cut",
          "burn"
        ],
        "vietnameseMeaning": "Hàng nghìn cây xanh bản địa che phủ sườn đồi để nuôi dưỡng mạch nước ngầm.",
        "explanation": "Rễ cây rừng giữ nước mưa, làm chậm dòng chảy mặt và đưa nước ngấm sâu vào các tầng địa chất tự nhiên.",
        "whyWrong": "Dùng từ tượng hình \"blanket the foothills\" (bao phủ sườn đồi như một tấm chăn xanh) rất giàu chất thơ.",
        "crucialNote": "Mỗi nhân viên Vikoda đều tham gia trồng cây gây rừng hàng năm.",
        "memoryHook": "Native trees blanket foothills to nourish the spring."
      },
      {
        "id": "u50-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for pure biological habitat preservation:",
        "promptVi": "Chọn thuật ngữ sinh thái chỉ khu bảo tồn thiên nhiên hoang dã:",
        "englishSentence": "The thirty-five hectare [ _____ ] ensures that wildlife and virgin forests flourish around our mineral source.",
        "audioText": "The thirty-five hectare sanctuary ensures that wildlife and virgin forests flourish around our mineral source.",
        "blankWord": "sanctuary",
        "options": [
          "sanctuary",
          "parking",
          "highway"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Khu bảo tồn sinh thái ba mươi lăm héc-ta bảo đảm cho muông thú và rừng nguyên sinh phát triển mạnh mẽ quanh mỏ khoáng của chúng tôi.",
        "explanation": "\"Sanctuary\" là khu bảo tồn thiên nhiên thiêng liêng và bất khả xâm phạm.",
        "whyWrong": "\"Parking\" (bãi đỗ xe) hay \"highway\" (đường cao tốc) là công trình bê tông hóa phá hoại lưu vực nước ngầm.",
        "crucialNote": "Nhiều loài chim quý và thảm thực vật dược liệu sinh trưởng tươi tốt trong khu bảo tồn Vikoda.",
        "memoryHook": "35-hectare sanctuary protects nature and wildlife."
      },
      {
        "id": "u50-e5",
        "type": "chat_branch",
        "promptEn": "Host an international environmental NGO delegation on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Tổ chức bảo tồn thiên nhiên quốc tế WWF hỏi về cam kết bảo vệ đa dạng sinh học tại mỏ Đảnh Thạnh:",
        "englishSentence": "We maintain a 35ha chemical-free sanctuary with zero industrial effluent, continuously planting indigenous trees to preserve biodiversity and recharge our aquifer.",
        "audioText": "We maintain a 35ha chemical-free sanctuary with zero industrial effluent, continuously planting indigenous trees to preserve biodiversity and recharge our aquifer.",
        "chatMessages": [
          {
            "speaker": "Dr. Beatrice (Senior Conservation Officer, WWF Greater Mekong)",
            "avatar": "🐼",
            "message": "Minh, we applaud Vikoda's 35-hectare sanctuary. How do you measure your biodiversity impact and watershed health?"
          }
        ],
        "chatOptions": [
          {
            "text": "We maintain a 35ha chemical-free sanctuary with zero industrial effluent, continuously planting indigenous trees to preserve biodiversity and recharge our aquifer.",
            "trustScore": 25,
            "feedback": "Phản hồi mẫu mực vì màu xanh Trái Đất! Nêu bật cam kết không hóa chất, không xả thải công nghiệp, trồng cây bản địa bảo tồn đa dạng sinh học và nuôi dưỡng mạch nước ngầm.",
            "isCorrect": true
          },
          {
            "text": "We cut down most trees to build a commercial shopping mall inside the spring zone.",
            "trustScore": 0,
            "feedback": "Hủy hoại môi trường sinh thái! Tổ chức quốc tế sẽ lên án hành vi này.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi duy trì một khu bảo tồn 35ha hoàn toàn không hóa chất và không có nước thải công nghiệp, liên tục trồng các loài cây bản địa để bảo tồn đa dạng sinh học và bổ hồi cho tầng nước ngầm.",
        "explanation": "Cam kết bảo tồn thiên nhiên đưa Vikoda trở thành doanh nghiệp kiểu mẫu về phát triển bền vững tại Việt Nam.",
        "crucialNote": "Đạt chứng nhận Doanh nghiệp Xanh và phát triển bền vững ESG.",
        "memoryHook": "Maintain 35ha chemical-free sanctuary with zero industrial effluent."
      }
    ]
  },
  {
    "id": "unit-51",
    "unitNumber": 51,
    "title": "Bác Bỏ Tin Đồn Nước Khoáng Gây Sỏi Thận",
    "subtitle": "Dẫn giải khoa học muối khoáng hòa tan vi lượng an toàn",
    "level": "B1",
    "icon": "🛡️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u51-e1",
        "type": "match_pairs",
        "promptEn": "Match medical nephrology and mineral water safety terms:",
        "promptVi": "Ghép cặp các thuật ngữ y khoa thận học và chứng minh sự an toàn của nước khoáng kiềm:",
        "englishSentence": "Match medical nephrology and mineral water safety terms.",
        "audioText": "Match medical nephrology and mineral water safety terms.",
        "explanation": "5 luận cứ khoa học đanh thép đập tan tin đồn thất thiệt nước khoáng gây sỏi thận.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ y học về an toàn nước khoáng và chức năng thận.",
        "pairs": [
          {
            "left": "Kidney stone myth",
            "right": "Tin đồn thất thiệt vô căn cứ về sỏi thận"
          },
          {
            "left": "Soluble trace minerals",
            "right": "Muối khoáng hòa tan vi lượng dễ đào thải qua thận"
          },
          {
            "left": "Lightly mineralized water",
            "right": "Nước khoáng hóa nhẹ với hàm lượng TDS cân bằng lý tưởng"
          },
          {
            "left": "Alkaline urine pH",
            "right": "Độ pH kiềm hóa nước tiểu giúp hòa tan tinh thể axit uric"
          },
          {
            "left": "Clinical consensus",
            "right": "Sự đồng thuận của các nghiên cứu y khoa lâm sàng thế giới"
          }
        ]
      },
      {
        "id": "u51-e2",
        "type": "speak",
        "promptEn": "Speak this scientific medical rebuttal clearly:",
        "promptVi": "Luyện nói câu bác bỏ tin đồn sỏi thận bằng chứng cứ y khoa thuyết phục:",
        "englishSentence": "Medical science confirms that drinking natural alkaline mineral water actually helps prevent kidney stones by neutralizing acidic urine.",
        "audioText": "Medical science confirms that drinking natural alkaline mineral water actually helps prevent kidney stones by neutralizing acidic urine.",
        "phonetics": "/ˈmɛdɪkəl ˈsaɪəns kənˈfɜːrmz ðæt ˈdrɪŋkɪŋ ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈwɔːtər ˈæktʃuəli hɛlps prɪˈvɛnt ˈkɪdni stoʊnz baɪ ˈnjuːtrəlaɪzɪŋ əˈsɪdɪk ˈjʊərɪn/",
        "vietnameseMeaning": "Y học khẳng định rằng uống nước khoáng kiềm tự nhiên thực tế còn giúp ngăn ngừa sỏi thận bằng cách trung hòa độ axit trong nước tiểu.",
        "explanation": "Nước tiểu có tính axit cao (pH < 5.5) là môi trường tạo sỏi axit uric và canxi oxalat. Kiềm tự nhiên của Vikoda giúp nâng pH nước tiểu lên mức an toàn (6.5 - 7.0), ngăn ngừa kết tinh sỏi.",
        "whyWrong": "Phát âm chuẩn từ \"nephrology\" (/nɛˈfrɒlədʒi/) và \"kidney stones\" (/ˈkɪdni stoʊnz/).",
        "crucialNote": "Người bị sỏi thận thường do uống quá ít nước chứ không phải do uống nước khoáng thiên nhiên.",
        "memoryHook": "Alkaline water prevents kidney stones by neutralizing acidic urine."
      },
      {
        "id": "u51-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the role of soluble calcium in mineral water:",
        "promptVi": "Ghép câu: \"Canxi tự nhiên hòa tan trong nước liên kết với oxalat trong ruột để bảo vệ thận\":",
        "englishSentence": "Dissolved natural calcium binds with oxalate in the gut to protect your kidneys.",
        "audioText": "Dissolved natural calcium binds with oxalate in the gut to protect your kidneys.",
        "wordPool": [
          "Dissolved",
          "natural",
          "calcium",
          "binds",
          "with",
          "oxalate",
          "in",
          "the",
          "gut",
          "to",
          "protect",
          "your",
          "kidneys.",
          "damage",
          "hurt"
        ],
        "vietnameseMeaning": "Canxi tự nhiên hòa tan trong nước liên kết với oxalat trong ruột để bảo vệ thận của bạn.",
        "explanation": "Nghiên cứu của Đại học Y Harvard chỉ ra rằng: Canxi trong nước uống liên kết với oxalat ngay tại ruột non và đào thải qua phân, không cho oxalat ngấm vào máu gây sỏi thận.",
        "whyWrong": "Dùng cụm \"binds with oxalate in the gut\" thể hiện cơ chế sinh hóa chính xác.",
        "crucialNote": "Thiếu canxi trong chế độ ăn uống mới là nguyên nhân chính gây hấp thu nhiều oxalat tạo sỏi.",
        "memoryHook": "Calcium binds with oxalate in gut to protect kidneys."
      },
      {
        "id": "u51-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct medical term for disproving a myth:",
        "promptVi": "Chọn từ chính xác chỉ hành động dùng khoa học để bác bỏ hoàn toàn tin đồn sai sự thật:",
        "englishSentence": "Peer-reviewed medical trials conclusively [ _____ ] the belief that mineral water causes renal calculi.",
        "audioText": "Peer-reviewed medical trials conclusively debunk the belief that mineral water causes renal calculi.",
        "blankWord": "debunk",
        "options": [
          "debunk",
          "create",
          "support"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Các thử nghiệm y học phản biện độc lập đã bác bỏ dứt khoát quan niệm rằng nước khoáng gây ra sỏi thận.",
        "explanation": "\"Conclusively debunk\" (bác bỏ dứt khoát bằng bằng chứng xác thực) là cụm từ đắt giá trong tranh luận khoa học.",
        "whyWrong": "\"Create\" (tạo ra) hay \"support\" (ủng hộ) hoàn toàn sai lệch sự thật y khoa.",
        "crucialNote": "\"Renal calculi\" là thuật ngữ y khoa chính thức của sỏi thận.",
        "memoryHook": "Conclusively debunk the kidney stone belief."
      },
      {
        "id": "u51-e5",
        "type": "chat_branch",
        "promptEn": "Answer a health journalist writing about hydration myths on LinkedIn:",
        "promptVi": "Mô phỏng tin nhắn: Nhà báo chuyên mục sức khỏe hỏi Vikoda phản hồi thế nào về tin đồn uống nước khoáng hàng ngày bị lắng đọng canxi tạo sỏi:",
        "englishSentence": "Nephrology studies prove the opposite! Vikoda's balanced TDS and bicarbonate actually dissolve uric acid crystals, making it a daily protective choice for kidney wellness.",
        "audioText": "Nephrology studies prove the opposite! Vikoda's balanced TDS and bicarbonate actually dissolve uric acid crystals, making it a daily protective choice for kidney wellness.",
        "chatMessages": [
          {
            "speaker": "Hanna (Health Editor, Wellness Asia Magazine)",
            "avatar": "📰",
            "message": "Minh, some readers worry that drinking mineral water daily causes calcium buildup and kidney stones. What clinical proof does Vikoda offer?"
          }
        ],
        "chatOptions": [
          {
            "text": "Nephrology studies prove the opposite! Vikoda's balanced TDS and bicarbonate actually dissolve uric acid crystals, making it a daily protective choice for kidney wellness.",
            "trustScore": 25,
            "feedback": "Phản hồi mẫu mực của chuyên gia y khoa! Trích dẫn nghiên cứu thận học khẳng định TDS cân bằng và bicacbonat giúp hòa tan tinh thể axit uric, bảo vệ chức năng thận mỗi ngày.",
            "isCorrect": true
          },
          {
            "text": "Yes, our water might cause stones, so you should only drink 1 sip per month.",
            "trustScore": 0,
            "feedback": "Hủy hoại doanh nghiệp! Thừa nhận tin đồn thất thiệt làm người tiêu dùng hoang mang tẩy chay sản phẩm.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Các nghiên cứu thận học chứng minh điều hoàn toàn ngược lại! Hàm lượng TDS cân bằng và bicacbonat của Vikoda thực tế hòa tan các tinh thể axit uric, khiến đây là sự lựa chọn bảo vệ hàng ngày cho sức khỏe thận.",
        "explanation": "Tự tin dẫn giải y học lâm sàng giúp dập tắt tin đồn thất thiệt và củng cố niềm tin của hàng triệu người tiêu dùng.",
        "crucialNote": "Được các chuyên gia tiết niệu khuyên dùng để bù nước lành mạnh.",
        "memoryHook": "Bicarbonate dissolves uric acid crystals for kidney wellness."
      }
    ]
  },
  {
    "id": "unit-52",
    "unitNumber": 52,
    "title": "Trình Bày Phiếu Kiểm Nghiệm Viện Pasteur",
    "subtitle": "Giải thích các chỉ số an toàn vi sinh đạt chuẩn quốc tế",
    "level": "B1",
    "icon": "📑",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u52-e1",
        "type": "match_pairs",
        "promptEn": "Match laboratory testing parameters with their health standards:",
        "promptVi": "Ghép cặp các chỉ số kiểm nghiệm tại Viện Pasteur với tiêu chuẩn an toàn sức khỏe:",
        "englishSentence": "Match laboratory testing parameters with health standards.",
        "audioText": "Match laboratory testing parameters with health standards.",
        "explanation": "5 chỉ tiêu kiểm nghiệm vi sinh và hóa lý khắt khe khẳng định sự vô trùng tuyệt đối của Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp chỉ số kiểm nghiệm Viện Pasteur.",
        "pairs": [
          {
            "left": "Pasteur Institute certificate",
            "right": "Chứng thư kiểm nghiệm vi sinh độc lập từ Viện Pasteur"
          },
          {
            "left": "Total Dissolved Solids (TDS)",
            "right": "Tổng chất rắn hòa tan tự nhiên ở ngưỡng vàng lý tưởng"
          },
          {
            "left": "Zero coliform bacteria",
            "right": "Tuyệt đối không có vi khuẩn Coliform và E. Coli"
          },
          {
            "left": "Heavy metal screening",
            "right": "Kiểm nghiệm sàng lọc không có chì, thạch tín hay thủy ngân"
          },
          {
            "left": "ISO 17025 accredited lab",
            "right": "Phòng kiểm nghiệm đạt chuẩn quốc tế ISO 17025"
          }
        ]
      },
      {
        "id": "u52-e2",
        "type": "speak",
        "promptEn": "Speak this certified quality presentation sentence clearly:",
        "promptVi": "Luyện nói câu trình bày kết quả kiểm nghiệm Viện Pasteur với đoàn kiểm toán quốc tế:",
        "englishSentence": "The Pasteur Institute tests certify that Vikoda strictly meets all international microbiological and physicochemical safety benchmarks.",
        "audioText": "The Pasteur Institute tests certify that Vikoda strictly meets all international microbiological and physicochemical safety benchmarks.",
        "phonetics": "/ðə pæsˈtɜːr ˈɪnstɪtjuːt tɛsts ˈsɜːrtɪfaɪ ðæt vɪˈkoʊdə ˈstrɪktli miːts ɔːl ˌɪntərˈnæʃənl ˌmaɪkroʊˌbaɪəˈlɒdʒɪkəl ænd ˈfɪzɪkoʊˈkɛmɪkəl ˈseɪfti ˈbɛntʃmɑːrks/",
        "vietnameseMeaning": "Các kết quả xét nghiệm của Viện Pasteur chứng nhận Vikoda đáp ứng nghiêm ngặt mọi tiêu chuẩn an toàn vi sinh và hóa lý quốc tế.",
        "explanation": "\"Certify that Vikoda strictly meets all microbiological and physicochemical safety benchmarks\" là câu khẳng định chất lượng có giá trị pháp lý quốc tế cao nhất.",
        "whyWrong": "Phát âm chuẩn từ \"microbiological\" (/ˌmaɪkroʊˌbaɪəˈlɒdʒɪkəl/) và \"physicochemical\" (/ˈfɪzɪkoʊˈkɛmɪkəl/).",
        "crucialNote": "Viện Pasteur là tổ chức giám định uy tín hàng đầu khu vực với hơn 100 năm lịch sử.",
        "memoryHook": "Pasteur certifies microbiological and physicochemical benchmarks."
      },
      {
        "id": "u52-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the periodic testing rigor of Vikoda water:",
        "promptVi": "Ghép câu: \"Mỗi cuộc xét nghiệm định kỳ xác nhận không có bất kỳ kim loại nặng hay chất gây ô nhiễm nào\":",
        "englishSentence": "Every periodic laboratory test confirms zero heavy metals and zero chemical contamination.",
        "audioText": "Every periodic laboratory test confirms zero heavy metals and zero chemical contamination.",
        "wordPool": [
          "Every",
          "periodic",
          "laboratory",
          "test",
          "confirms",
          "zero",
          "heavy",
          "metals",
          "and",
          "zero",
          "chemical",
          "contamination.",
          "dirty",
          "arsenic"
        ],
        "vietnameseMeaning": "Mỗi cuộc xét nghiệm định kỳ tại phòng thí nghiệm xác nhận không có bất kỳ kim loại nặng hay chất gây ô nhiễm hóa học nào.",
        "explanation": "Quy trình kiểm tra 3 cấp: Kiểm tra tại chỗ hàng giờ bởi QC -> Kiểm tra hàng tuần tại Viện Pasteur -> Kiểm tra định kỳ gửi mẫu sang các phòng lab châu Âu.",
        "whyWrong": "\"Zero heavy metals and zero chemical contamination\" là lời cam kết bằng văn bản có giá trị bảo hiểm toàn cầu.",
        "crucialNote": "Độ tinh khiết không tì vết là niềm tự hào của vùng đất Đảnh Thạnh.",
        "memoryHook": "Confirms zero heavy metals and zero contamination."
      },
      {
        "id": "u52-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct scientific abbreviation for total mineral content:",
        "promptVi": "Chọn thuật ngữ viết tắt chỉ tổng hàm lượng khoáng hòa tan trong nước:",
        "englishSentence": "Vikoda maintains an ideal [ _____ ] level of 350 to 450 milligrams per liter, offering refreshing taste without mineral heaviness.",
        "audioText": "Vikoda maintains an ideal TDS level of 350 to 450 milligrams per liter, offering refreshing taste without mineral heaviness.",
        "blankWord": "TDS",
        "options": [
          "TDS",
          "GPS",
          "CPU"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda duy trì hàm lượng TDS lý tưởng từ 350 đến 450 miligam mỗi lít, mang đến hương vị thanh mát mà không bị nồng khoáng.",
        "explanation": "TDS (Total Dissolved Solids) ở mức 300-500 mg/L được Tổ chức Y tế Thế giới (WHO) đánh giá là ngưỡng khoáng hóa tuyệt hảo nhất cho vị giác con người.",
        "whyWrong": "\"GPS\" là định vị toàn cầu, \"CPU\" là bộ vi xử lý máy tính.",
        "crucialNote": "TDS quá cao (>1000 mg/L) sẽ có vị lợ khó uống, TDS quá thấp (<50 mg/L) là nước trơ thiếu chất.",
        "memoryHook": "TDS 350 to 450 mg/L = Ngưỡng vàng thanh mát."
      },
      {
        "id": "u52-e5",
        "type": "chat_branch",
        "promptEn": "Submit accredited lab reports to a US FDA export auditor on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Kiểm toán viên Cục Quản lý Thực phẩm & Dược phẩm Hoa Kỳ (FDA) yêu cầu xuất trình hồ sơ kiểm nghiệm kim loại nặng mới nhất:",
        "englishSentence": "Here is the official Pasteur Institute report dated this month: Arsenic, Lead, Cadmium, and Mercury are all 100% Non-Detectable, fully complying with US FDA Title 21 standards.",
        "audioText": "Here is the official Pasteur Institute report dated this month: Arsenic, Lead, Cadmium, and Mercury are all 100% Non-Detectable, fully complying with US FDA Title 21 standards.",
        "chatMessages": [
          {
            "speaker": "Inspector Miller (FDA Foreign Facility Inspection)",
            "avatar": "🇺🇸",
            "message": "Minh, before clearing your export container for California retail, we need official lab certification verifying heavy metal limits under FDA Title 21 CFR 165."
          }
        ],
        "chatOptions": [
          {
            "text": "Here is the official Pasteur Institute report dated this month: Arsenic, Lead, Cadmium, and Mercury are all 100% Non-Detectable, fully complying with US FDA Title 21 standards.",
            "trustScore": 25,
            "feedback": "Phản hồi chuẩn xác đến từng điều luật FDA! Cung cấp đúng mã hiệu Title 21 CFR 165 và khẳng định 4 kim loại nặng độc hại đều ở mức Non-Detectable (không phát hiện), giúp lô hàng được cấp phép nhập cảnh Mỹ ngay lập tức.",
            "isCorrect": true
          },
          {
            "text": "We don't check for heavy metals in Vietnam, water is water why are you so picky?",
            "trustScore": 0,
            "feedback": "Thảm họa xuất khẩu! Container hàng sẽ bị FDA tịch thu và tiêu hủy ngay tại cảng Los Angeles.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Đây là báo cáo chính thức của Viện Pasteur trong tháng này: Asen, Chì, Cadimi và Thủy ngân đều 100% ở mức Không phát hiện (ND), hoàn toàn tuân thủ theo tiêu chuẩn FDA Tiêu đề 21 của Hoa Kỳ.",
        "explanation": "Sở hữu hồ sơ kiểm nghiệm vi sinh và kim loại nặng đạt chuẩn FDA là tấm hộ chiếu quyền lực nhất của Vikoda trên thị trường xuất khẩu quốc tế.",
        "crucialNote": "Độ tinh khiết được chứng nhận độc lập là vũ khí cạnh tranh số một.",
        "memoryHook": "Heavy metals 100% Non-Detectable, complying with US FDA Title 21."
      }
    ]
  },
  {
    "id": "unit-53",
    "unitNumber": 53,
    "title": "Kỹ Năng Thuyết Trình Dự Án PowerPoint",
    "subtitle": "Mở đầu ấn tượng, chuyển ý mượt mà và nhấn mạnh số liệu",
    "level": "B1",
    "icon": "📊",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u53-e1",
        "type": "match_pairs",
        "promptEn": "Match presentation staging and delivery techniques with their functions:",
        "promptVi": "Ghép cặp các kỹ thuật thuyết trình PowerPoint chuyên nghiệp theo chuẩn Oxford English:",
        "englishSentence": "Match executive presentation techniques.",
        "audioText": "Match executive presentation techniques.",
        "explanation": "5 kỹ thuật sân khấu then chốt giúp bạn chinh phục mọi hội đồng giám khảo và đối tác đầu tư.",
        "vietnameseMeaning": "Ghép đúng 5 cặp kỹ thuật thuyết trình dự án PowerPoint.",
        "pairs": [
          {
            "left": "Hook the audience",
            "right": "Mở đầu bằng câu hỏi hoặc số liệu gây ấn tượng mạnh"
          },
          {
            "left": "Smooth transition phrase",
            "right": "Câu chuyển ý nhịp nhàng và kết nối các phần nội dung"
          },
          {
            "left": "Highlight key metrics",
            "right": "Nhấn mạnh các con số tăng trưởng doanh thu và sản lượng"
          },
          {
            "left": "Visual slide simplicity",
            "right": "Thiết kế slide tối giản, trực quan và hạn chế chữ dày đặc"
          },
          {
            "left": "Memorable call to action",
            "right": "Lời kêu gọi hành động sâu sắc đọng lại trong tâm trí"
          }
        ]
      },
      {
        "id": "u53-e2",
        "type": "speak",
        "promptEn": "Speak this charismatic presentation opening clearly:",
        "promptVi": "Luyện nói câu mở đầu bài thuyết trình dự án mở rộng kênh phân phối quốc tế:",
        "englishSentence": "Good morning distinguished guests! Today, I am proud to share how Vikoda delivers pristine wellness to over thirty million consumers.",
        "audioText": "Good morning distinguished guests! Today, I am proud to share how Vikoda delivers pristine wellness to over thirty million consumers.",
        "phonetics": "/ɡʊd ˈmɔːrnɪŋ dɪˈstɪŋɡwɪʃt ɡɛsts! təˈdeɪ, aɪ æm praʊd tuː ʃɛər haʊ vɪˈkoʊdə dɪˈlɪvərz ˈprɪstiːn ˈwɛlnəs tuː ˈoʊvər ˈθɜːrti ˈmɪljən kənˈsuːmərz/",
        "vietnameseMeaning": "Chào buổi sáng quý vị khách quý! Hôm nay, tôi rất tự hào được chia sẻ cách Vikoda mang nguồn sức khỏe thuần khiết đến với hơn ba mươi triệu người tiêu dùng.",
        "explanation": "\"Good morning distinguished guests! Today, I am proud to share...\" là câu mở đầu đĩnh đạc, sang trọng và truyền cảm hứng dồi dào.",
        "whyWrong": "Phát âm chuẩn từ \"distinguished guests\" (/dɪˈstɪŋɡwɪʃt ɡɛsts/) và \"pristine wellness\" (/ˈprɪstiːn ˈwɛlnəs/).",
        "crucialNote": "Đứng thẳng người, ánh mắt bao quát toàn bộ khán phòng và mỉm cười tự tin.",
        "memoryHook": "Good morning distinguished guests + proud to share how Vikoda delivers wellness."
      },
      {
        "id": "u53-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to guide audience attention to a market growth chart:",
        "promptVi": "Ghép câu: \"Xin hãy hướng sự chú ý của quý vị vào biểu đồ tăng trưởng doanh số trên slide này\":",
        "englishSentence": "Please direct your attention to the impressive sales growth chart on this slide.",
        "audioText": "Please direct your attention to the impressive sales growth chart on this slide.",
        "wordPool": [
          "Please",
          "direct",
          "your",
          "attention",
          "to",
          "the",
          "impressive",
          "sales",
          "growth",
          "chart",
          "on",
          "this",
          "slide.",
          "ignore",
          "sleep"
        ],
        "vietnameseMeaning": "Xin hãy hướng sự chú ý của quý vị vào biểu đồ tăng trưởng doanh số ấn tượng trên slide này.",
        "explanation": "\"Please direct your attention to [Chi tiết]\" là mẫu câu điều hướng sự chú ý đỉnh cao trong thuyết trình thương mại.",
        "whyWrong": "Dùng từ chỉ thị lịch thiệp thay vì chỉ tay thô lỗ vào màn hình chiếu.",
        "crucialNote": "Dừng lại 2-3 giây sau khi nói câu này để khán giả kịp nhìn vào số liệu biểu đồ.",
        "memoryHook": "Direct your attention to the sales growth chart."
      },
      {
        "id": "u53-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct transitional presentation phrase:",
        "promptVi": "Chọn cụm từ chuyển tiếp mượt mà để bước sang phần chiến lược xuất khẩu:",
        "englishSentence": "Now that we have reviewed production capacity, let us [ _____ ] on to our international export roadmap.",
        "audioText": "Now that we have reviewed production capacity, let us move on to our international export roadmap.",
        "blankWord": "move",
        "options": [
          "move",
          "sleep",
          "quit"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Sau khi đã điểm qua năng lực sản xuất, bây giờ chúng ta hãy chuyển tiếp sang lộ trình xuất khẩu quốc tế.",
        "explanation": "\"Let us move on to [Chủ đề tiếp theo]\" là cụm từ chuyển ý kinh điển trong cẩm nang thuyết trình của Oxford.",
        "whyWrong": "\"Sleep\" hay \"quit\" hoàn toàn phá hỏng nhịp điệu của bài thuyết trình.",
        "crucialNote": "Tóm tắt ngắn gọn phần trước trước khi mở ra phần nội dung mới.",
        "memoryHook": "Let us move on to our export roadmap."
      },
      {
        "id": "u53-e5",
        "type": "chat_branch",
        "promptEn": "Align presentation slide delivery with your co-presenter before taking the stage on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Bạn cùng thuyết trình với Giám đốc Marketing trước hội đồng đầu tư tại Bangkok, hãy thống nhất phân chia vai trò:",
        "englishSentence": "I will deliver the 1957 heritage story and lab purity data, then pass the floor to you for the financial projections and regional rollout plan!",
        "audioText": "I will deliver the 1957 heritage story and lab purity data, then pass the floor to you for the financial projections and regional rollout plan!",
        "chatMessages": [
          {
            "speaker": "Linh (Marketing Director, Vikoda International)",
            "avatar": "📈",
            "message": "Minh, we have 15 minutes total in front of the Bangkok venture capital panel. How shall we split the slides?"
          }
        ],
        "chatOptions": [
          {
            "text": "I will deliver the 1957 heritage story and lab purity data, then pass the floor to you for the financial projections and regional rollout plan!",
            "trustScore": 25,
            "feedback": "Phối hợp thuyết trình đồng đội hoàn hảo! Chia rõ phần câu chuyện di sản và dữ liệu kiểm nghiệm, sau đó nhường lời mượt mà (pass the floor) cho phần tài chính và kế hoạch triển khai.",
            "isCorrect": true
          },
          {
            "text": "I will talk for 14 minutes and leave you 30 seconds to say whatever you want.",
            "trustScore": 0,
            "feedback": "Thiếu tinh thần đồng đội trầm trọng! Hội đồng đầu tư sẽ đánh giá nội bộ thiếu gắn kết.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Em sẽ trình bày câu chuyện di sản 1957 và số liệu kiểm nghiệm độ tinh khiết, sau đó sẽ chuyển lời cho chị phụ trách phần dự báo tài chính và kế hoạch triển khai khu vực nhé!",
        "explanation": "Nghệ thuật chuyển giao quyền phát biểu (Pass the floor) nhịp nhàng chứng tỏ sự ăn ý tuyệt đối của ban lãnh đạo doanh nghiệp.",
        "crucialNote": "Sự đồng lòng của đội ngũ thuyết trình mang lại 80% niềm tin cho các nhà đầu tư.",
        "memoryHook": "Pass the floor smoothly for financial projections."
      }
    ]
  },
  {
    "id": "unit-54",
    "unitNumber": 54,
    "title": "Làm Chủ Phần Hỏi Đáp Q&A Cân Não",
    "subtitle": "Bình tĩnh phản hồi các câu hỏi hóc búa của chuyên gia",
    "level": "B1",
    "icon": "🎯",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u54-e1",
        "type": "match_pairs",
        "promptEn": "Match executive Q&A handling strategies with their goals:",
        "promptVi": "Ghép cặp các chiến lược làm chủ phần hỏi đáp (Q&A) cân não trước hội đồng thẩm định:",
        "englishSentence": "Match executive Q&A defense strategies.",
        "audioText": "Match executive Q&A defense strategies.",
        "explanation": "5 chiến thuật ngoại giao bản lĩnh giúp hóa giải mọi câu hỏi hóc búa từ chuyên gia và đối thủ.",
        "vietnameseMeaning": "Ghép đúng 5 cặp chiến thuật làm chủ phần hỏi đáp Q&A.",
        "pairs": [
          {
            "left": "Thank the questioner",
            "right": "Cảm ơn người đặt câu hỏi để có thêm thời gian suy ngẫm"
          },
          {
            "left": "Clarify ambiguous points",
            "right": "Hỏi lại để làm rõ câu hỏi trước khi trả lời trực tiếp"
          },
          {
            "left": "Bridge to core strengths",
            "right": "Kỹ thuật bắc cầu chuyển hướng câu hỏi về thế mạnh sản phẩm"
          },
          {
            "left": "Diplomatic composure",
            "right": "Giữ vững phong thái điềm tĩnh, không nổi nóng hay tự ái"
          },
          {
            "left": "Follow up with documentation",
            "right": "Cam kết gửi thêm tài liệu chuyên sâu sau buổi họp"
          }
        ]
      },
      {
        "id": "u54-e2",
        "type": "speak",
        "promptEn": "Speak this diplomatic Q&A acknowledgment clearly:",
        "promptVi": "Luyện nói câu tiếp nhận câu hỏi hóc búa một cách hòa nhã và bản lĩnh:",
        "englishSentence": "Thank you for that thought-provoking question regarding our seasonal bottling capacity during the dry season.",
        "audioText": "Thank you for that thought-provoking question regarding our seasonal bottling capacity during the dry season.",
        "phonetics": "/θæŋk juː fɔːr ðæt θɔːt prəˈvoʊkɪŋ ˈkwɛstʃən rɪˈɡɑːrdɪŋ ˈaʊər ˈsiːzənl ˈbɒtlɪŋ kəˈpæsɪti ˈdjʊərɪŋ ðə draɪ ˈsiːzən/",
        "vietnameseMeaning": "Cảm ơn ngài vì câu hỏi rất sâu sắc liên quan đến công suất đóng chai theo mùa trong mùa khô hạn.",
        "explanation": "\"Thank you for that thought-provoking question...\" là câu khen ngợi người hỏi rất tinh tế, giúp xoa dịu bầu không khí căng thẳng.",
        "whyWrong": "Dùng tính từ sang trọng \"thought-provoking\" (/θɔːt prəˈvoʊkɪŋ/ - gợi mở nhiều suy ngẫm).",
        "crucialNote": "Không tỏ thái độ khó chịu hay ngắt lời người đang đặt câu hỏi.",
        "memoryHook": "Thank you for that thought-provoking question."
      },
      {
        "id": "u54-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to deploy the bridging technique in business defense:",
        "promptVi": "Ghép câu: \"Cho phép tôi làm rõ giao thức dự phòng nguồn nước của chúng tôi một cách chi tiết hơn\":",
        "englishSentence": "Allow me to clarify our contingency buffer protocol in greater detail.",
        "audioText": "Allow me to clarify our contingency buffer protocol in greater detail.",
        "wordPool": [
          "Allow",
          "me",
          "to",
          "clarify",
          "our",
          "contingency",
          "buffer",
          "protocol",
          "in",
          "greater",
          "detail.",
          "argue",
          "yell"
        ],
        "vietnameseMeaning": "Cho phép tôi làm rõ quy trình đệm dự phòng sự cố của chúng tôi một cách chi tiết hơn.",
        "explanation": "\"Allow me to clarify [Chủ đề] in greater detail\" là bước chuyển nhẹ nhàng biến câu hỏi chất vấn thành cơ hội khoe năng lực dự phòng vững mạnh của công ty.",
        "whyWrong": "\"Contingency buffer protocol\" thể hiện tính chuẩn bị bài bản cấp tập đoàn.",
        "crucialNote": "Tự tin nhìn thẳng vào mắt người hỏi khi giải thích.",
        "memoryHook": "Allow me to clarify our protocol in greater detail."
      },
      {
        "id": "u54-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct diplomatic term for addressing partner worries:",
        "promptVi": "Chọn từ chính xác thể hiện sự thấu hiểu và giải tỏa nỗi băn khoăn của đối tác:",
        "englishSentence": "I completely understand your perspective, and I am glad to address that [ _____ ] directly.",
        "audioText": "I completely understand your perspective, and I am glad to address that concern directly.",
        "blankWord": "concern",
        "options": [
          "concern",
          "insult",
          "gossip"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Tôi hoàn toàn thấu hiểu góc nhìn của ngài, và tôi rất vui mừng được giải tỏa nỗi băn khoăn đó một cách trực tiếp.",
        "explanation": "\"Address that concern directly\" (giải quyết trực tiếp mối băn khoăn) thể hiện sự minh bạch và tự tin tuyệt đối.",
        "whyWrong": "\"Insult\" (sự sỉ nhục) hay \"gossip\" (chuyện ngồi lê đôi mách) phá hỏng tính chuyên nghiệp của phiên Q&A.",
        "crucialNote": "Biến nỗi lo của đối tác thành sự an tâm tuyệt đối.",
        "memoryHook": "Address that concern directly = Giải tỏa băn khoăn trực diện."
      },
      {
        "id": "u54-e5",
        "type": "chat_branch",
        "promptEn": "Handle a skeptical competitor consultant challenging water freshness on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia thẩm định từ quỹ đầu tư đối thủ hỏi khó liệu nước đóng chai lưu kho 6 tháng có bị mất vị ngọt tự nhiên không:",
        "englishSentence": "Because Vikoda is naturally bottled at 72°C with impermeable crown glass seals, blind sensory tests prove zero flavor degradation even after 18 months!",
        "audioText": "Because Vikoda is naturally bottled at 72°C with impermeable crown glass seals, blind sensory tests prove zero flavor degradation even after 18 months!",
        "chatMessages": [
          {
            "speaker": "Frank (Senior Sourcing Consultant, Horizon Capital)",
            "avatar": "🧐",
            "message": "Minh, mineral water often develops a stale flat taste after sitting in warehouse pallets for 6 months. How do you guarantee shelf taste consistency?"
          }
        ],
        "chatOptions": [
          {
            "text": "Because Vikoda is naturally bottled at 72°C with impermeable crown glass seals, blind sensory tests prove zero flavor degradation even after 18 months!",
            "trustScore": 25,
            "feedback": "Phản pháo sắc bén và khoa học! Dẫn chứng kiểm nghiệm cảm quan nếm mù (blind sensory test), nắp kim loại kín khí và nguồn nhiệt 72°C bảo toàn trọn vẹn hương vị sau 18 tháng lưu kho.",
            "isCorrect": true
          },
          {
            "text": "If it tastes stale, just shake the bottle hard and put some ice cubes into it.",
            "trustScore": 0,
            "feedback": "Câu trả lời cợt nhả thiếu hiểu biết! Làm mất đi toàn bộ uy tín trước các nhà đầu tư lớn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Bởi vì Vikoda được đóng chai tự nhiên ở 72 độ C với nắp kim loại kín khí tuyệt đối, các thử nghiệm cảm quan nếm mù chứng minh không hề có sự suy giảm hương vị nào kể cả sau 18 tháng!",
        "explanation": "Đưa ra bằng chứng thử nghiệm cảm quan (Sensory Testing) là đòn kết liễu dập tắt mọi nghi ngờ của những chuyên gia khó tính nhất.",
        "crucialNote": "Hương vị thanh ngọt nguyên bản của mỏ Đảnh Thạnh là tài sản vô giá trường tồn.",
        "memoryHook": "Blind sensory tests prove zero flavor degradation."
      }
    ]
  },
  {
    "id": "unit-55",
    "unitNumber": 55,
    "title": "Xử Lý Phàn Nàn Của Khách Hàng",
    "subtitle": "Lắng nghe thấu cảm và đưa ra giải pháp khắc phục ngay",
    "level": "B1",
    "icon": "🤝",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u55-e1",
        "type": "match_pairs",
        "promptEn": "Match customer complaint resolution and empathy steps with their actions:",
        "promptVi": "Ghép cặp các bước trong quy trình xử lý khiếu nại khách hàng chuẩn mực quốc tế:",
        "englishSentence": "Match customer complaint recovery steps.",
        "audioText": "Match customer complaint recovery steps.",
        "explanation": "5 bước vàng biến một khách hàng đang tức giận thành người ủng hộ trung thành suốt đời của thương hiệu.",
        "vietnameseMeaning": "Ghép đúng 5 cặp quy trình xử lý khiếu nại khách hàng B2B.",
        "pairs": [
          {
            "left": "Acknowledge with empathy",
            "right": "Lắng nghe chân thành và thấu cảm sâu sắc nỗi bức xúc"
          },
          {
            "left": "Investigate root cause",
            "right": "Tìm hiểu điều tra nguyên nhân gốc rễ của sự cố"
          },
          {
            "left": "Propose immediate solution",
            "right": "Đưa ra phương án giải quyết khắc phục ngay lập tức"
          },
          {
            "left": "Offer goodwill compensation",
            "right": "Tặng quà lưu niệm hoặc chiết khấu thiện chí tri ân"
          },
          {
            "left": "Prevent future recurrence",
            "right": "Cải tiến quy trình để không bao giờ tái diễn lỗi lần sau"
          }
        ]
      },
      {
        "id": "u55-e2",
        "type": "speak",
        "promptEn": "Speak this heartfelt de-escalation apology clearly:",
        "promptVi": "Luyện nói câu xin lỗi chân thành và cam kết hành động khẩn cấp giải tỏa cơn giận của đối tác:",
        "englishSentence": "We sincerely apologize for this delivery delay and have already dispatched a priority replacement van to your hotel.",
        "audioText": "We sincerely apologize for this delivery delay and have already dispatched a priority replacement van to your hotel.",
        "phonetics": "/wiː sɪnˈsɪərli əˈpɒlədʒaɪz fɔːr ðɪs dɪˈlɪvəri dɪˈleɪ ænd hæv ɔːlˈrɛdi dɪˈspætʃt ə praɪˈɒrəti rɪˈpleɪsmənt væn tuː jʊər hoʊˈtɛl/",
        "vietnameseMeaning": "Chúng tôi thành thật xin lỗi vì sự chậm trễ trong chuyến giao hàng này và đã cho xuất phát ngay một xe van thay thế ưu tiên đến khách sạn của bạn.",
        "explanation": "\"We sincerely apologize for [Sự cố] and have already dispatched [Giải pháp]\" thể hiện trách nhiệm giải quyết vấn đề bằng hành động cụ thể chứ không bao biện vòng vo.",
        "whyWrong": "Phát âm chuẩn từ \"sincerely apologize\" (/sɪnˈsɪərli əˈpɒlədʒaɪz/).",
        "crucialNote": "Không bao giờ đổ lỗi cho thời tiết hay tài xế trước mặt khách hàng.",
        "memoryHook": "Sincerely apologize + already dispatched priority replacement."
      },
      {
        "id": "u55-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to present a gesture of goodwill to retain customer loyalty:",
        "promptVi": "Ghép câu: \"Xin hãy nhận món quà tri ân này như lời xin lỗi chân thành nhất từ ban giám đốc\":",
        "englishSentence": "Please accept this gesture of goodwill as a sincere apology from our management.",
        "audioText": "Please accept this gesture of goodwill as a sincere apology from our management.",
        "wordPool": [
          "Please",
          "accept",
          "this",
          "gesture",
          "of",
          "goodwill",
          "as",
          "a",
          "sincere",
          "apology",
          "from",
          "our",
          "management.",
          "hate",
          "fight"
        ],
        "vietnameseMeaning": "Xin hãy nhận cử chỉ thiện chí này như lời xin lỗi chân thành nhất từ ban giám đốc của chúng tôi.",
        "explanation": "\"Gesture of goodwill\" (cử chỉ thiện chí) như tặng kèm 5 thùng nước chai thủy tinh hoặc miễn phí vận chuyển giúp hàn gắn mối quan hệ lập tức.",
        "whyWrong": "Dùng từ trang nhã biến sự cố thành cơ hội thắt chặt tình nghĩa đối tác.",
        "crucialNote": "Đích thân quản lý cấp cao ký thư xin lỗi gửi đến khách.",
        "memoryHook": "Gesture of goodwill as a sincere apology."
      },
      {
        "id": "u55-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for root-cause quality analysis:",
        "promptVi": "Chọn thuật ngữ chỉ quá trình truy tìm nguyên nhân cốt lõi để triệt tiêu lỗi:",
        "englishSentence": "Our plant manager initiated a thorough root-cause [ _____ ] to eliminate warehouse dispatch errors.",
        "audioText": "Our plant manager initiated a thorough root-cause investigation to eliminate warehouse dispatch errors.",
        "blankWord": "investigation",
        "options": [
          "investigation",
          "party",
          "celebration"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Giám đốc nhà máy của chúng tôi đã khởi động một cuộc điều tra nguyên nhân gốc rễ toàn diện để triệt tiêu các lỗi xuất kho.",
        "explanation": "\"Root-cause investigation\" (điều tra nguyên nhân gốc rễ) là phương pháp quản trị chất lượng 5 Whys loại bỏ dứt điểm sai sót.",
        "whyWrong": "\"Party\" (bữa tiệc) hay \"celebration\" (lễ ăn mừng) hoàn toàn không phù hợp trong xử lý sự cố.",
        "crucialNote": "Báo cáo nguyên nhân gốc rễ được gửi minh bạch cho khách hàng thẩm duyệt.",
        "memoryHook": "Root-cause investigation to eliminate errors."
      },
      {
        "id": "u55-e5",
        "type": "chat_branch",
        "promptEn": "De-escalate an enraged 5-star resort general manager on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Tổng Giám đốc khu nghỉ dưỡng Fusion Resort Nha Trang nhắn tin nổi giận vì đơn hàng 200 thùng nước bị giao thiếu 10 thùng chai thủy tinh:",
        "englishSentence": "I completely understand your frustration, Mr. Daniel! I am personally driving our emergency vehicle with 15 complimentary cases to arrive within 20 minutes.",
        "audioText": "I completely understand your frustration, Mr. Daniel! I am personally driving our emergency vehicle with 15 complimentary cases to arrive within 20 minutes.",
        "chatMessages": [
          {
            "speaker": "Mr. Daniel (General Manager, Fusion Resort)",
            "avatar": "😤",
            "message": "Minh! Your truck just short-delivered 10 cases of glass bottles right before our VIP ambassadors dinner! This is totally unacceptable!"
          }
        ],
        "chatOptions": [
          {
            "text": "I completely understand your frustration, Mr. Daniel! I am personally driving our emergency vehicle with 15 complimentary cases to arrive within 20 minutes.",
            "trustScore": 25,
            "feedback": "Cứu nguy và xoa dịu khách hàng đỉnh cao 100%! Đồng cảm với cơn giận, đích thân điều xe khẩn cấp chở bù 15 thùng miễn phí đến trong 20 phút. Tổng Giám đốc resort sẽ vô cùng kính nể tinh thần trách nhiệm này.",
            "isCorrect": true
          },
          {
            "text": "Check your receipt, maybe your lazy staff stole the 10 boxes.",
            "trustScore": 0,
            "feedback": "Xúc phạm khách hàng thô bạo! Hợp đồng triệu đô sẽ bị hủy ngay lập tức.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Tôi hoàn toàn thấu hiểu sự thất vọng và bực bội của ngài, thưa ông Daniel! Tôi đang đích thân lái xe chở khẩn cấp 15 thùng nước miễn phí đến nơi trong vòng 20 phút nữa ạ.",
        "explanation": "Tác phong nhận trách nhiệm và tự tay giải quyết sự cố thần tốc là phẩm chất của nhà lãnh đạo dịch vụ xuất sắc.",
        "crucialNote": "Tặng thêm 5 thùng bù đắp sự bất tiện thể hiện sự hào sảng của thương hiệu Vikoda.",
        "memoryHook": "Personally driving emergency vehicle with complimentary cases."
      }
    ]
  },
  {
    "id": "unit-56",
    "unitNumber": 56,
    "title": "Kỹ Thuật Kể Câu Chuyện Thương Hiệu",
    "subtitle": "Truyền cảm hứng về giọt Ngọc Trong Đá - Tinh hoa Đảnh Thạnh",
    "level": "B1",
    "icon": "💎",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u56-e1",
        "type": "match_pairs",
        "promptEn": "Match brand storytelling and emotional resonance terms with their meanings:",
        "promptVi": "Ghép cặp các khái niệm nghệ thuật kể chuyện thương hiệu (Storytelling) \"Ngọc Trong Đá\":",
        "englishSentence": "Match brand storytelling and emotional resonance terms.",
        "audioText": "Match brand storytelling and emotional resonance terms.",
        "explanation": "5 kỹ thuật chạm tới trái tim người nghe, biến giọt nước khoáng thành kiệt tác thiên nhiên.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ nghệ thuật kể chuyện thương hiệu.",
        "pairs": [
          {
            "left": "Gem in the rock narrative",
            "right": "Câu chuyện biểu tượng triết lý Ngọc Trong Đá mài giũa tỏa sáng"
          },
          {
            "left": "Centuries of patience",
            "right": "Hàng trăm năm kiên nhẫn chắt lọc qua các tầng địa chất"
          },
          {
            "left": "Emotional brand resonance",
            "right": "Sự đồng điệu cảm xúc sâu sắc giữa người dùng và thương hiệu"
          },
          {
            "left": "Gift of Mother Nature",
            "right": "Món quà vô giá của Mẹ Thiên Nhiên ban tặng cho sức khỏe"
          },
          {
            "left": "Authentic heritage storytelling",
            "right": "Nghệ thuật truyền cảm hứng bằng câu chuyện di sản có thật"
          }
        ]
      },
      {
        "id": "u56-e2",
        "type": "speak",
        "promptEn": "Speak this poetic brand storytelling passage clearly:",
        "promptVi": "Luyện nói câu chuyện thương hiệu đầy cảm xúc về viên Ngọc Trong Đá của Vikoda:",
        "englishSentence": "Like a precious gem hidden within ancient rock, every drop of Vikoda is patiently purified by Mother Nature to deliver pure vitality.",
        "audioText": "Like a precious gem hidden within ancient rock, every drop of Vikoda is patiently purified by Mother Nature to deliver pure vitality.",
        "phonetics": "/laɪk ə ˈprɛʃəs dʒɛm ˈhɪdən wɪðˈɪn ˈeɪnʃənt rɒk, ˈɛvri drɒp ɒv vɪˈkoʊdə ɪz ˈpeɪʃəntli ˈpjʊərɪfaɪd baɪ ˈmʌðər ˈneɪtʃər tuː dɪˈlɪvər pjʊər vaɪˈtæləti/",
        "vietnameseMeaning": "Như một viên ngọc quý ẩn mình trong tầng đá cổ, mỗi giọt nước Vikoda được Mẹ Thiên Nhiên kiên nhẫn thanh lọc để mang đến sức sống thuần khiết.",
        "explanation": "Triết lý \"Ngọc Trong Đá\" là linh hồn văn hóa của tập đoàn FIT và Vikoda: Giá trị đích thực cần sự kiên định mài giũa qua thử thách của thời gian.",
        "whyWrong": "Nói với ngữ điệu truyền cảm, nhấn vào \"precious gem\", \"patiently purified\" và \"pure vitality\".",
        "crucialNote": "Câu chuyện giúp sản phẩm thoát khỏi cuộc chiến cạnh tranh giá rẻ để đứng ở vị thế kiệt tác vô giá.",
        "memoryHook": "Like a precious gem within ancient rock, purified by nature."
      },
      {
        "id": "u56-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the emotional bond created by authentic storytelling:",
        "promptVi": "Ghép câu: \"Câu chuyện thương hiệu chân thật tạo nên mối liên kết cảm xúc bền chặt cùng khách hàng\":",
        "englishSentence": "Authentic brand storytelling creates an enduring emotional bond with our customers.",
        "audioText": "Authentic brand storytelling creates an enduring emotional bond with our customers.",
        "wordPool": [
          "Authentic",
          "brand",
          "storytelling",
          "creates",
          "an",
          "enduring",
          "emotional",
          "bond",
          "with",
          "our",
          "customers.",
          "fake",
          "boring"
        ],
        "vietnameseMeaning": "Câu chuyện thương hiệu chân thật tạo nên mối liên kết cảm xúc bền chặt cùng khách hàng của chúng tôi.",
        "explanation": "Khách hàng không chỉ mua chai nước, họ mua niềm tự hào, nguồn năng lượng thanh khiết và di sản văn hóa Việt Nam.",
        "whyWrong": "\"Enduring emotional bond\" (mối gắn kết cảm xúc trường tồn) là đỉnh cao của lòng trung thành thương hiệu.",
        "crucialNote": "Chân thực (Authentic) là yếu tố quyết định sức sống của câu chuyện.",
        "memoryHook": "Storytelling creates an enduring emotional bond."
      },
      {
        "id": "u56-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct symbolic term for the brand philosophy:",
        "promptVi": "Chọn biểu tượng triết lý cốt lõi của thương hiệu Vikoda:",
        "englishSentence": "Our brand philosophy compares human potential to a [ _____ ] hidden inside the raw rock waiting to shine.",
        "audioText": "Our brand philosophy compares human potential to a gem hidden inside the raw rock waiting to shine.",
        "blankWord": "gem",
        "options": [
          "gem",
          "brick",
          "stone"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Triết lý thương hiệu của chúng tôi ví tiềm năng con người như một viên ngọc quý ẩn giấu trong khối đá thô đang chờ ngày tỏa sáng.",
        "explanation": "\"Gem\" (viên ngọc quý) là hình tượng bất hủ trong Cẩm nang nhân sự và triết lý doanh nghiệp Vikoda.",
        "whyWrong": "\"Brick\" (viên gạch) hay \"stone\" (hòn đá thông thường) không mang ý nghĩa của sự quý giá và tỏa sáng.",
        "crucialNote": "Mỗi nhân viên Vikoda là một viên ngọc quý đang được tôi luyện để vươn tầm quốc tế.",
        "memoryHook": "A gem hidden inside the raw rock waiting to shine."
      },
      {
        "id": "u56-e5",
        "type": "chat_branch",
        "promptEn": "Pitch the brand storytelling concept to an international advertising agency on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc sáng tạo agency quảng cáo Singapore muốn tìm ý tưởng đột phá cho phim quảng cáo toàn cầu:",
        "englishSentence": "Let's build the commercial around 'The Gem in the Rock': tracing a droplet's 100-year underground journey through basalt strata into a glass bottle!",
        "audioText": "Let's build the commercial around 'The Gem in the Rock': tracing a droplet's 100-year underground journey through basalt strata into a glass bottle!",
        "chatMessages": [
          {
            "speaker": "Marcus (Executive Creative Director, BBDO Singapore)",
            "avatar": "🎬",
            "message": "Minh, we want a cinematic commercial concept that moves beyond ordinary product features. What is the poetic heart of Vikoda?"
          }
        ],
        "chatOptions": [
          {
            "text": "Let's build the commercial around 'The Gem in the Rock': tracing a droplet's 100-year underground journey through basalt strata into a glass bottle!",
            "trustScore": 25,
            "feedback": "Ý tưởng kịch bản điện ảnh xuất sắc! Khắc họa hành trình 100 năm xuyên qua các tầng đá bazan thành giọt ngọc trong chai thủy tinh, chạm đến mọi giác quan của người xem.",
            "isCorrect": true
          },
          {
            "text": "Just show a video of a plastic bottle rotating on a white background with loud pop music.",
            "trustScore": 0,
            "feedback": "Tầm thường và nhàm chán! Biến kiệt tác thiên nhiên thành clip quảng cáo rẻ tiền.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Hãy xây dựng đoạn phim quảng cáo xoay quanh 'Ngọc Trong Đá': dõi theo hành trình 100 năm của một giọt nước dưới lòng đất qua các tầng đá bazan vào chai thủy tinh!",
        "explanation": "Biến khoa học địa chất thành nghệ thuật điện ảnh lay động trái tim hàng triệu người tiêu dùng thế giới.",
        "crucialNote": "Hình ảnh giọt ngọc lấp lánh phản chiếu nguồn năng lượng kiềm tự nhiên sống động.",
        "memoryHook": "Trace a droplet's 100-year underground journey into a glass bottle."
      }
    ]
  },
  {
    "id": "unit-57",
    "unitNumber": 57,
    "title": "Đảnh Thạnh Có Ga & Nghệ Thuật Pha Chế",
    "subtitle": "Công thức Mocktail và Cocktail khoáng sảng khoái",
    "level": "B1",
    "icon": "🍸",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u57-e1",
        "type": "match_pairs",
        "promptEn": "Match sparkling mixology and beverage sensory terms with their definitions:",
        "promptVi": "Ghép cặp các thuật ngữ pha chế Mixology với nước khoáng có ga Đảnh Thạnh:",
        "englishSentence": "Match sparkling water mixology and sensory terms.",
        "audioText": "Match sparkling water mixology and sensory terms.",
        "explanation": "5 thuật ngữ thời thượng biến Đảnh Thạnh có ga thành nguyên liệu vàng tại các quán bar cao cấp.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ pha chế thức uống sủi bọt cao cấp.",
        "pairs": [
          {
            "left": "Artisan mixology base",
            "right": "Nguyên liệu nền pha chế thủ công đỉnh cao cho quầy bar"
          },
          {
            "left": "Fine effervescent mouthfeel",
            "right": "Cảm giác sủi bọt mịn màng êm ái trên vòm miệng"
          },
          {
            "left": "Tropical fruit mocktail",
            "right": "Thức uống giải khát không cồn kết hợp trái cây nhiệt đới"
          },
          {
            "left": "Citrus garnish aroma",
            "right": "Hương thơm tinh dầu từ vỏ chanh và cam trang trí"
          },
          {
            "left": "Mineral palate elevation",
            "right": "Nâng tầm vị giác nhờ hậu vị khoáng ngọt thanh sâu lắng"
          }
        ]
      },
      {
        "id": "u57-e2",
        "type": "speak",
        "promptEn": "Speak this craft mixology pitch clearly:",
        "promptVi": "Luyện nói câu giới thiệu nước khoáng có ga Đảnh Thạnh cho các chuyên gia pha chế hàng đầu:",
        "englishSentence": "Danh Thanh Sparkling mineral water creates the ultimate effervescent foundation for craft cocktails and tropical mocktails.",
        "audioText": "Danh Thanh Sparkling mineral water creates the ultimate effervescent foundation for craft cocktails and tropical mocktails.",
        "phonetics": "/daɪn tæŋ ˈspɑːrklɪŋ ˈmɪnərəl ˈwɔːtər kriˈeɪts ðiː ˈʌltɪmət ˌɛfərˈvɛsənt faʊnˈdeɪʃən fɔːr kræft ˈkɒkteɪlz ænd ˈtrɒpɪkəl ˈmɒkteɪlz/",
        "vietnameseMeaning": "Nước khoáng có ga Đảnh Thạnh tạo nên nền tảng sủi bọt tuyệt đỉnh cho các ly cocktail thủ công và mocktail nhiệt đới.",
        "explanation": "\"Ultimate effervescent foundation for craft cocktails\" là định vị đắt giá giúp Đảnh Thạnh chiếm lĩnh quầy bar các khách sạn 5 sao.",
        "whyWrong": "Phát âm chuẩn từ \"effervescent\" (/ˌɛfərˈvɛsənt/ - sủi bọt lăn tăn) và \"mocktails\" (/ˈmɒkteɪlz/).",
        "crucialNote": "Bọt khí của Đảnh Thạnh mịn màng không bị gắt cổ như các loại nước soda công nghiệp.",
        "memoryHook": "Ultimate effervescent foundation for craft cocktails."
      },
      {
        "id": "u57-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe a signature summer mocktail recipe:",
        "promptVi": "Ghép câu: \"Kết hợp nước khoáng có ga cùng chanh dây tươi và lá bạc hà mang lại sự sảng khoái phi thường\":",
        "englishSentence": "Pairing sparkling mineral water with fresh passion fruit and mint delivers extraordinary refreshment.",
        "audioText": "Pairing sparkling mineral water with fresh passion fruit and mint delivers extraordinary refreshment.",
        "wordPool": [
          "Pairing",
          "sparkling",
          "mineral",
          "water",
          "with",
          "fresh",
          "passion",
          "fruit",
          "and",
          "mint",
          "delivers",
          "extraordinary",
          "refreshment.",
          "bitter",
          "stale"
        ],
        "vietnameseMeaning": "Kết hợp nước khoáng có ga cùng chanh dây tươi và lá bạc hà mang lại sự sảng khoái phi thường.",
        "explanation": "Công thức Mocktail Chanh Dây Bạc Hà Đảnh Thạnh là thức uống giải nhiệt mùa hè số một tại các bãi biển Nha Trang.",
        "whyWrong": "Dùng từ \"extraordinary refreshment\" (sự sảng khoái phi thường) kích thích vị giác người nghe.",
        "crucialNote": "Khoáng chất tự nhiên làm nổi bật vị chua thanh của chanh dây và hương the mát của bạc hà.",
        "memoryHook": "Sparkling water with passion fruit delivers extraordinary refreshment."
      },
      {
        "id": "u57-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct beverage sensory term for tactile sensation on tongue:",
        "promptVi": "Chọn thuật ngữ cảm quan chỉ cảm giác của thức uống trong vòm miệng:",
        "englishSentence": "The tight natural bubbles provide a crisp and delightful [ _____ ] that enhances every sip.",
        "audioText": "The tight natural bubbles provide a crisp and delightful mouthfeel that enhances every sip.",
        "blankWord": "mouthfeel",
        "options": [
          "mouthfeel",
          "headache",
          "toothache"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Những bọt khí tự nhiên lăn tăn mang lại cảm giác vòm miệng thanh giòn và thú vị, nâng tầm từng ngụm nước.",
        "explanation": "\"Mouthfeel\" (cảm giác vòm miệng) là thuật ngữ chuyên môn của các chuyên gia nếm thử đồ uống quốc tế (Sommeliers).",
        "whyWrong": "\"Headache\" (đau đầu) hay \"toothache\" (đau răng) là những từ tiêu cực hoàn toàn sai lệch.",
        "crucialNote": "Bọt khí nhỏ mịn (tight bubbles) giúp giữ ga lâu hơn trong ly thủy tinh.",
        "memoryHook": "Delightful mouthfeel enhances every sip."
      },
      {
        "id": "u57-e5",
        "type": "chat_branch",
        "promptEn": "Collaborate with a celebrity mixologist at an upscale beach club on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia pha chế quốc tế tại Sailing Club Nha Trang muốn thử nghiệm Đảnh Thạnh có ga cho menu cocktail độc quyền:",
        "englishSentence": "We would love to collaborate! We will deliver chilled cases of Danh Thanh Sparkling along with fresh local lime and pink sea salt for your masterclass.",
        "audioText": "We would love to collaborate! We will deliver chilled cases of Danh Thanh Sparkling along with fresh local lime and pink sea salt for your masterclass.",
        "chatMessages": [
          {
            "speaker": "Matteo (Beverage Consultant, Sailing Club Nha Trang)",
            "avatar": "🍹",
            "message": "Minh, we want to launch a 'Nha Trang Sunset Fizz' cocktail using a local heritage sparkling mineral water. Can we test Danh Thanh with aged rum?"
          }
        ],
        "chatOptions": [
          {
            "text": "We would love to collaborate! We will deliver chilled cases of Danh Thanh Sparkling along with fresh local lime and pink sea salt for your masterclass.",
            "trustScore": 25,
            "feedback": "Hợp tác thương hiệu đỉnh cao! Nắm bắt ngay cơ hội đưa sản phẩm vào menu cocktail của câu lạc bộ bãi biển nổi tiếng nhất Nha Trang kèm nguyên liệu địa phương độc đáo.",
            "isCorrect": true
          },
          {
            "text": "Our water is not for drinking with alcohol, please drink tap water with your rum.",
            "trustScore": 0,
            "feedback": "Bỏ lỡ cơ hội vàng! Thái độ bảo thủ làm mất đi kênh tiêu thụ cao cấp tại các quán bar bãi biển.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi rất hào hứng được hợp tác! Chúng tôi sẽ giao ngay những thùng Đảnh Thạnh Có Ga mát lạnh kèm theo chanh tươi địa phương và muối hồng cho buổi pha chế thử nghiệm của bạn.",
        "explanation": "Đưa sản phẩm vào thực đơn cocktail của các điểm đến du lịch nổi tiếng giúp thương hiệu tiếp cận hàng triệu du khách quốc tế mỗi năm.",
        "crucialNote": "Sự kết hợp giữa rượu Rum và nước khoáng có ga Đảnh Thạnh tạo nên hương vị bùng nổ.",
        "memoryHook": "Deliver chilled Danh Thanh Sparkling for craft masterclass."
      }
    ]
  },
  {
    "id": "unit-58",
    "unitNumber": 58,
    "title": "Gian Hàng Hội Chợ Triển Lãm F&B",
    "subtitle": "Mời khách thử nước và phát tài liệu giới thiệu sản phẩm",
    "level": "B1",
    "icon": "🎪",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u58-e1",
        "type": "match_pairs",
        "promptEn": "Match trade expo booth hosting terms with their functions:",
        "promptVi": "Ghép cặp các thuật ngữ trực gian hàng hội chợ triển lãm F&B quốc tế:",
        "englishSentence": "Match international trade expo booth terms.",
        "audioText": "Match international trade expo booth terms.",
        "explanation": "5 kỹ năng biến gian hàng triển lãm thành cỗ máy thu hút đối tác và chốt đơn hàng xuất khẩu.",
        "vietnameseMeaning": "Ghép đúng 5 cặp từ vựng trực gian hàng hội chợ quốc tế.",
        "pairs": [
          {
            "left": "Trade exhibition booth",
            "right": "Gian hàng trưng bày triển lãm thương mại quốc tế"
          },
          {
            "left": "Water tasting bar",
            "right": "Quầy bar nếm thử nước khoáng kiềm mát lạnh"
          },
          {
            "left": "Product catalog brochure",
            "right": "Tập tài liệu giới thiệu danh mục sản phẩm sắc nét"
          },
          {
            "left": "Foreign buyer lead generation",
            "right": "Thu thập thông tin khách hàng mua hàng tiềm năng"
          },
          {
            "left": "Live pH demonstration",
            "right": "Thí nghiệm trực quan chứng minh độ kiềm pH 9.0"
          }
        ]
      },
      {
        "id": "u58-e2",
        "type": "speak",
        "promptEn": "Speak this magnetic trade booth greeting clearly:",
        "promptVi": "Luyện nói câu mời khách quốc tế ghé thăm gian hàng triển lãm Vikoda:",
        "englishSentence": "Good afternoon! Welcome to the Vikoda pavilion. Would you like to taste Vietnam's natural alkaline mineral water?",
        "audioText": "Good afternoon! Welcome to the Vikoda pavilion. Would you like to taste Vietnam's natural alkaline mineral water?",
        "phonetics": "/ɡʊd ˌɑːftərˈnuːn! ˈwɛlkəm tuː ðə vɪˈkoʊdə pəˈvɪljən. wʊd juː laɪk tuː teɪst ˌvjɛtnɑːmz ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈwɔːtər/",
        "vietnameseMeaning": "Xin chào buổi chiều! Chào mừng quý khách đến với gian hàng triển lãm Vikoda. Quý vị có muốn nếm thử nước khoáng kiềm tự nhiên của Việt Nam không ạ?",
        "explanation": "\"Welcome to the Vikoda pavilion. Would you like to taste...\" là lời mời nồng hậu mở ra cuộc trò chuyện kinh doanh thuận lợi.",
        "whyWrong": "Dùng từ \"pavilion\" (/pəˈvɪljən/ - gian hàng lớn quy mô trang trọng) thể hiện vị thế doanh nghiệp.",
        "crucialNote": "Rót nước vào ly thủy tinh trong suốt đưa bằng hai tay mời khách.",
        "memoryHook": "Welcome to Vikoda pavilion, would you like to taste natural alkaline water."
      },
      {
        "id": "u58-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to present brochures and product samples to an overseas buyer:",
        "promptVi": "Ghép câu: \"Xin vui lòng nhận danh mục xuất khẩu của chúng tôi và thưởng thức cả dòng chai nhựa lẫn chai thủy tinh\":",
        "englishSentence": "Please take our export catalog and feel free to sample both PET and glass bottles.",
        "audioText": "Please take our export catalog and feel free to sample both PET and glass bottles.",
        "wordPool": [
          "Please",
          "take",
          "our",
          "export",
          "catalog",
          "and",
          "feel",
          "free",
          "to",
          "sample",
          "both",
          "PET",
          "and",
          "glass",
          "bottles.",
          "steal",
          "run"
        ],
        "vietnameseMeaning": "Xin vui lòng nhận danh mục xuất khẩu của chúng tôi và cứ tự nhiên nếm thử cả dòng chai nhựa lẫn chai thủy tinh.",
        "explanation": "Tạo cơ hội cho đối tác trải nghiệm trực tiếp sự khác biệt giữa hai dòng bao bì.",
        "whyWrong": "\"Feel free to sample\" khuyến khích trải nghiệm sản phẩm không áp lực.",
        "crucialNote": "Chuẩn bị sẵn danh thiếp ghim kèm góc tài liệu xuất khẩu.",
        "memoryHook": "Take export catalog and sample PET and glass bottles."
      },
      {
        "id": "u58-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for high-volume commercial visitors:",
        "promptVi": "Chọn từ chỉ các đối tác mua hàng đại diện cho chuỗi siêu thị tại hội chợ:",
        "englishSentence": "Our live pH testing attracted hundreds of foreign retail [ _____ ] at the Bangkok expo.",
        "audioText": "Our live pH testing attracted hundreds of foreign retail buyers at the Bangkok expo.",
        "blankWord": "buyers",
        "options": [
          "buyers",
          "criminals",
          "tourists"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Thí nghiệm đo pH trực tiếp của chúng tôi đã thu hút hàng trăm đại diện người mua hàng bán lẻ nước ngoài tại hội chợ triển lãm Bangkok.",
        "explanation": "\"Retail buyers\" (người mua hàng bán lẻ) là các nhân vật quyền lực quyết định đưa sản phẩm vào chuỗi siêu thị quốc tế.",
        "whyWrong": "\"Criminals\" (tội phạm) hay \"tourists\" (khách du lịch vãng lai) không phải là đối tượng B2B mục tiêu.",
        "crucialNote": "Thí nghiệm nhỏ dung dịch thử pH chuyển màu tím kiềm lập tức gây ấn tượng thị giác mạnh mẽ.",
        "memoryHook": "Attracted hundreds of foreign retail buyers."
      },
      {
        "id": "u58-e5",
        "type": "chat_branch",
        "promptEn": "Capture trade lead data from an interested Middle East distributor on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc phân phối đồ uống Dubai vừa ghé gian hàng Vikoda tại hội chợ Gulfood và xin báo giá FOB cảng Quy Nhơn:",
        "englishSentence": "Pleasure meeting you at Gulfood Dubai! I have emailed our official FOB Quy Nhon quotation and container loading specs for 20ft and 40ft shipments.",
        "audioText": "Pleasure meeting you at Gulfood Dubai! I have emailed our official FOB Quy Nhon quotation and container loading specs for 20ft and 40ft shipments.",
        "chatMessages": [
          {
            "speaker": "Tariq (Import Director, Al Maya Group Dubai)",
            "avatar": "🇦🇪",
            "message": "Hello Minh, your pH 9.0 mineral water tasted exceptional at the booth. Please send FOB quotation for 5 containers monthly."
          }
        ],
        "chatOptions": [
          {
            "text": "Pleasure meeting you at Gulfood Dubai! I have emailed our official FOB Quy Nhon quotation and container loading specs for 20ft and 40ft shipments.",
            "trustScore": 25,
            "feedback": "Phản ứng xuất khẩu chuyên nghiệp thần tốc! Gửi ngay báo giá điều kiện FOB cảng Quy Nhơn và thông số đóng container 20ft/40ft, đón đầu cơ hội chốt hợp đồng lớn sang Trung Đông.",
            "isCorrect": true
          },
          {
            "text": "We are still partying in Dubai, will reply to your email in two weeks.",
            "trustScore": 0,
            "feedback": "Đánh mất khách hàng vàng! Các nhà nhập khẩu Dubai sẽ chuyển sang đối tác khác chỉ sau 24 giờ.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Rất hân hạnh được gặp ngài tại hội chợ Gulfood Dubai! Tôi đã gửi email bảng báo giá chính thức điều kiện FOB Quy Nhơn và thông số bốc xếp container cho các chuyến hàng 20ft và 40ft.",
        "explanation": "Quy tắc vàng tại hội chợ triển lãm quốc tế: Gửi phản hồi báo giá trong vòng 12 giờ sau khi gặp đối tác.",
        "crucialNote": "Cảng Quy Nhơn hoặc Nha Trang là cảng biển xuất phát gần nhà máy Đảnh Thạnh nhất.",
        "memoryHook": "Send official FOB quotation and container loading specs promptly."
      }
    ]
  },
  {
    "id": "unit-59",
    "unitNumber": 59,
    "title": "Nghi Thức Dùng Tiệc Với Đối Tác Cấp Cao",
    "subtitle": "Quy tắc mời rượu, nâng ly và kết nối ngoại giao thân tình",
    "level": "B1",
    "icon": "🥂",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u59-e1",
        "type": "match_pairs",
        "promptEn": "Match executive dining and diplomatic toasting etiquette terms:",
        "promptVi": "Ghép cặp các thuật ngữ nghi thức tiệc chiêu đãi cấp cao và nâng ly ngoại giao:",
        "englishSentence": "Match executive formal dining and toasting terms.",
        "audioText": "Match executive formal dining and toasting terms.",
        "explanation": "5 quy tắc bàn tiệc ngoại giao giúp bạn tỏa sáng và gắn kết mối quan hệ thâm giao với các CEO quốc tế.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ nghi thức tiệc chiêu đãi doanh nhân cấp cao.",
        "pairs": [
          {
            "left": "Executive formal banquet",
            "right": "Tiệc chiêu đãi trọng thể dành cho lãnh đạo cấp cao"
          },
          {
            "left": "Propose a cordial toast",
            "right": "Đề xuất lời chúc nâng ly ngoại giao ấm áp chân tình"
          },
          {
            "left": "Seating protocol etiquette",
            "right": "Nghi thức sắp xếp vị trí ngồi theo cấp bậc ngoại giao"
          },
          {
            "left": "Mutually prosperous partnership",
            "right": "Quan hệ đối tác cùng thịnh vượng và phát triển đôi bên"
          },
          {
            "left": "Clink glasses gently",
            "right": "Cụng ly nhẹ nhàng với ánh mắt chân thành"
          }
        ]
      },
      {
        "id": "u59-e2",
        "type": "speak",
        "promptEn": "Speak this executive toast clearly and passionately:",
        "promptVi": "Luyện nói câu chúc rượu ngoại giao trang trọng trong tiệc chiêu đãi đối tác chiến lược:",
        "englishSentence": "May I propose a toast to our mutually prosperous partnership and to many years of fruitful cooperation ahead!",
        "audioText": "May I propose a toast to our mutually prosperous partnership and to many years of fruitful cooperation ahead!",
        "phonetics": "/meɪ aɪ prəˈpoʊz ə toʊst tuː ˈaʊər ˈmjuːtʃuəli ˈprɒspərəs ˈpɑːrtnərʃɪp ænd tuː ˈmɛni jɪərz ɒv ˈfruːtfʊl koʊˌɒpəˈreɪʃən əˈhɛd/",
        "vietnameseMeaning": "Tôi xin phép được nâng ly chúc cho mối quan hệ đối tác cùng thịnh vượng của chúng ta và chúc cho nhiều năm hợp tác gặt hái thành công rực rỡ phía trước!",
        "explanation": "\"May I propose a toast to our mutually prosperous partnership...\" là câu chúc nâng ly kinh điển bậc nhất trong tiệc ngoại giao thượng đỉnh.",
        "whyWrong": "Đứng dậy đĩnh đạc, cầm ly bằng tay phải, giơ cao ngang tầm mắt và nói dõng dạc.",
        "crucialNote": "Nhìn vào mắt các vị khách VIP khi cụng ly thể hiện sự chân thành tuyệt đối.",
        "memoryHook": "Propose a toast to mutually prosperous partnership."
      },
      {
        "id": "u59-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to express gratitude to the international delegation for joining the banquet:",
        "promptVi": "Ghép câu: \"Thật là một vinh hạnh lớn khi được chia sẻ bữa tối tuyệt vời này cùng phái đoàn quý mến\":",
        "englishSentence": "It is a true honor to share this wonderful dinner with your distinguished delegation.",
        "audioText": "It is a true honor to share this wonderful dinner with your distinguished delegation.",
        "wordPool": [
          "It",
          "is",
          "a",
          "true",
          "honor",
          "to",
          "share",
          "this",
          "wonderful",
          "dinner",
          "with",
          "your",
          "distinguished",
          "delegation.",
          "fight",
          "boring"
        ],
        "vietnameseMeaning": "Thật là một vinh hạnh lớn khi được chia sẻ bữa tối tuyệt vời này cùng phái đoàn quý mến của các bạn.",
        "explanation": "Lời phát biểu mở đầu bữa tiệc tạo cảm giác ấm cúng, xóa nhòa khoảng cách ngôn ngữ và văn hóa.",
        "whyWrong": "\"Distinguished delegation\" tôn vinh tầm vóc của đoàn khách.",
        "crucialNote": "Bố trí thực đơn kết hợp ẩm thực tinh hoa Việt Nam cùng nước khoáng chai thủy tinh Vikoda.",
        "memoryHook": "True honor to share dinner with distinguished delegation."
      },
      {
        "id": "u59-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for raising glasses in formal banquets:",
        "promptVi": "Chọn động từ chính xác chỉ hành động nâng ly chúc mừng trong tiệc ngoại giao:",
        "englishSentence": "Let us [ _____ ] our glasses to celebrate our long-term distribution agreement.",
        "audioText": "Let us raise our glasses to celebrate our long-term distribution agreement.",
        "blankWord": "raise",
        "options": [
          "raise",
          "smash",
          "drop"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chúng ta hãy cùng nâng ly để chúc mừng thỏa thuận phân phối dài hạn của chúng ta.",
        "explanation": "\"Raise our glasses\" (nâng ly chúc mừng) là cử chỉ ngoại giao cao đẹp.",
        "whyWrong": "\"Smash\" (đập vỡ) hay \"drop\" (làm rơi) là tai nạn bàn tiệc tối kỵ.",
        "crucialNote": "Không uống cạn một hơi thô lỗ trong tiệc trang trọng, nhấp một ngụm nhẹ nhàng sau lời chúc.",
        "memoryHook": "Raise our glasses to celebrate the agreement."
      },
      {
        "id": "u59-e5",
        "type": "chat_branch",
        "promptEn": "Follow up the morning after hosting an executive dinner on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn sáng hôm sau: Gửi lời cảm ơn chân thành đến Tổng Giám đốc tập đoàn đối tác sau bữa tiệc chiêu đãi tối qua:",
        "englishSentence": "Good morning Mr. Watanabe! Thank you for the delightful dinner conversation last night. Our team is inspired and ready to finalize contract terms today.",
        "audioText": "Good morning Mr. Watanabe! Thank you for the delightful dinner conversation last night. Our team is inspired and ready to finalize contract terms today.",
        "chatMessages": [
          {
            "speaker": "Mr. Watanabe (CEO, Japan Beverage Import Corp)",
            "avatar": "🇯🇵",
            "message": "Minh, thank you for the wonderful seafood dinner and the exceptional Vikoda hospitality. Truly enjoyed our conversation."
          }
        ],
        "chatOptions": [
          {
            "text": "Good morning Mr. Watanabe! Thank you for the delightful dinner conversation last night. Our team is inspired and ready to finalize contract terms today.",
            "trustScore": 25,
            "feedback": "Follow-up ngoại giao điểm 10! Gửi lời cảm ơn ngay sáng hôm sau và giữ nhịp tiến độ công việc để tiến hành ký kết hợp đồng trong ngày.",
            "isCorrect": true
          },
          {
            "text": "You drank too much wine last night. Don't forget you promised to give us a million dollars.",
            "trustScore": 0,
            "feedback": "Bất lịch sự thô lỗ! Phá hỏng toàn bộ công sức của bữa tiệc chiêu đãi tối qua.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chào buổi sáng ông Watanabe! Cảm ơn ngài vì cuộc trò chuyện tuyệt vời trong bữa tối hôm qua. Đội ngũ chúng tôi tràn đầy cảm hứng và đã sẵn sàng hoàn tất các điều khoản hợp đồng hôm nay ạ.",
        "explanation": "Một tin nhắn cảm ơn lịch thiệp vào 8:30 sáng hôm sau là chìa khóa vàng khép lại thương vụ thành công.",
        "crucialNote": "Khách Nhật đánh giá rất cao sự chu đáo trước sau như một.",
        "memoryHook": "Delightful dinner conversation + ready to finalize contract terms."
      }
    ]
  },
  {
    "id": "unit-60",
    "unitNumber": 60,
    "title": "Mốc Tốt Nghiệp Đại Sứ Thương Hiệu B1",
    "subtitle": "Sát hạch toàn diện kỹ năng thuyết trình và bảo vệ giá trị",
    "level": "B1",
    "icon": "🎓",
    "color": "amber",
    "xpReward": 75,
    "gemReward": 35,
    "exercises": [
      {
        "id": "u60-e1",
        "type": "match_pairs",
        "promptEn": "Capstone Grand Match: Pair the 5 Brand Ambassador core competencies of Level B1:",
        "promptVi": "Đại Thử Thách Tốt Nghiệp B1: Ghép 5 năng lực cốt lõi của Đại sứ Thương hiệu Vikoda toàn cầu:",
        "englishSentence": "Match the 5 cornerstone competencies of Level B1.",
        "audioText": "Match the 5 cornerstone competencies of Level B1.",
        "explanation": "5 chuẩn mực bản lĩnh biến bạn thành gương mặt đại diện xứng tầm cho thương hiệu Vikoda trên trường quốc tế.",
        "vietnameseMeaning": "Ghép đúng 5 chuẩn năng lực Đại sứ Thương hiệu Cấp độ B1.",
        "pairs": [
          {
            "left": "Scientific Validation Mastery",
            "right": "Bảo vệ giá trị khoa học 4 con số vàng và chứng chỉ Pasteur"
          },
          {
            "left": "Executive Pitching & Delivery",
            "right": "Thuyết trình dự án PowerPoint tự tin trước hội đồng đầu tư"
          },
          {
            "left": "Hostile Q&A Defense",
            "right": "Hóa giải các câu hỏi chất vấn cân não và bác bỏ tin đồn"
          },
          {
            "left": "Customer Empathy Recovery",
            "right": "Xử lý phàn nàn và biến khách hàng bức xúc thành đối tác trung thành"
          },
          {
            "left": "Global Heritage Storytelling",
            "right": "Truyền cảm hứng câu chuyện Ngọc Trong Đá từ năm 1957"
          }
        ]
      },
      {
        "id": "u60-e2",
        "type": "speak",
        "promptEn": "Speak this proud Level B1 Brand Ambassador graduation pledge clearly:",
        "promptVi": "Luyện nói lời tuyên thệ tốt nghiệp Cấp độ B1 Đại sứ Thương hiệu Vikoda toàn cầu:",
        "englishSentence": "As a certified Vikoda Brand Ambassador, I champion our 1957 heritage, scientific excellence, and natural alkaline wellness across global markets.",
        "audioText": "As a certified Vikoda Brand Ambassador, I champion our 1957 heritage, scientific excellence, and natural alkaline wellness across global markets.",
        "phonetics": "/æz ə ˈsɜːrtɪfaɪd vɪˈkoʊdə brænd æmˈbæsədər, aɪ ˈtʃæmpiən ˈaʊər 1957 ˈhɛrɪtɪdʒ, ˌsaɪənˈtɪfɪk ˈɛksələns, ænd ˈnætʃrəl ˈælkəlaɪn ˈwɛlnəs əˈkrɒs ˈɡloʊbəl ˈmɑːrkɪts/",
        "vietnameseMeaning": "Là một Đại sứ Thương hiệu được chứng nhận của Vikoda, tôi tự hào tiên phong bảo vệ di sản 1957, sự xuất sắc về khoa học và nguồn sức khỏe kiềm tự nhiên trên khắp các thị trường toàn cầu.",
        "explanation": "Lời tuyên thệ đánh dấu bước chuyển mình vượt bậc thành nhân sự tinh hoa, có khả năng đàm phán và thuyết trình độc lập bằng tiếng Anh thương mại.",
        "whyWrong": "Nói với chất giọng dõng dạc, ánh mắt ngời sáng tự hào.",
        "crucialNote": "Chúc mừng bạn đã hoàn thành 60 bài học nền tảng vững chắc nhất!",
        "memoryHook": "Champion 1957 heritage, scientific excellence, and alkaline wellness."
      },
      {
        "id": "u60-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to celebrate your Level B1 milestone achievement:",
        "promptVi": "Ghép câu: \"Chúng tôi đã làm chủ thành công tất cả sáu mươi bài học từ Cấp độ A1 đến Cấp độ B1 tại Vikoda\":",
        "englishSentence": "We have successfully mastered all sixty core units from Level A1 to Level B1 at Vikoda.",
        "audioText": "We have successfully mastered all sixty core units from Level A1 to Level B1 at Vikoda.",
        "wordPool": [
          "We",
          "have",
          "successfully",
          "mastered",
          "all",
          "sixty",
          "core",
          "units",
          "from",
          "Level",
          "A1",
          "to",
          "Level",
          "B1",
          "at",
          "Vikoda.",
          "failed",
          "quit"
        ],
        "vietnameseMeaning": "Chúng tôi đã làm chủ thành công tất cả sáu mươi bài học cốt lõi từ Cấp độ A1 đến Cấp độ B1 tại Vikoda.",
        "explanation": "60 Unit đã qua là hành trình biến người học thành chuyên gia giao tiếp và đàm phán doanh nghiệp xuất sắc.",
        "whyWrong": "\"Mastered all sixty core units\" ghi nhận năng lực thực chiến đã được tôi luyện vững vàng.",
        "crucialNote": "Sẵn sàng chinh phục Cấp độ B2 (Thương thảo hợp đồng & Xuất nhập khẩu chuyên sâu).",
        "memoryHook": "Mastered all sixty core units from A1 to B1."
      },
      {
        "id": "u60-e4",
        "type": "fill_blank",
        "promptEn": "Select the ultimate keyword for brand advocacy:",
        "promptVi": "Chọn từ cốt lõi định nghĩa tư cách của một đại sứ thương hiệu doanh nghiệp:",
        "englishSentence": "An authentic brand [ _____ ] inspires international partners through scientific truth and passionate dedication.",
        "audioText": "An authentic brand ambassador inspires international partners through scientific truth and passionate dedication.",
        "blankWord": "ambassador",
        "options": [
          "ambassador",
          "bystander",
          "stranger"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Một đại sứ thương hiệu chân chính truyền cảm hứng cho các đối tác quốc tế thông qua chân lý khoa học và sự cống hiến đầy nhiệt huyết.",
        "explanation": "\"Brand ambassador\" (đại sứ thương hiệu) là người mang trong mình tình yêu thương hiệu và kiến thức uyên thâm.",
        "whyWrong": "\"Bystander\" (người đứng ngoài bàng quan) hay \"stranger\" (người xa lạ) không có tinh thần trách nhiệm với tổ chức.",
        "crucialNote": "Mỗi thành viên Vikoda chính là một đại sứ thương hiệu sống động.",
        "memoryHook": "Brand ambassador inspires through scientific truth."
      },
      {
        "id": "u60-e5",
        "type": "chat_branch",
        "promptEn": "Capstone B1 Simulation: Close an exclusive regional distribution agreement on Slack:",
        "promptVi": "Mô phỏng tốt nghiệp B1: Chủ tịch tập đoàn siêu thị bán lẻ Thái Lan quyết định chọn Vikoda làm đối tác nước khoáng kiềm độc quyền:",
        "englishSentence": "We are honored, President Somchai! Our executive board will sign the exclusive distribution agreement today, bringing Vietnam's finest mineral water to Thailand!",
        "audioText": "We are honored, President Somchai! Our executive board will sign the exclusive distribution agreement today, bringing Vietnam's finest mineral water to Thailand!",
        "chatMessages": [
          {
            "speaker": "President Somchai (Central Retail Group Thailand)",
            "avatar": "🇹🇭",
            "message": "Minh, after reviewing your Pasteur certificates, factory tour, and passionate brand vision, our board has voted unanimously to award Vikoda the exclusive alkaline water contract for 150 hypermarkets!"
          }
        ],
        "chatOptions": [
          {
            "text": "We are honored, President Somchai! Our executive board will sign the exclusive distribution agreement today, bringing Vietnam's finest mineral water to Thailand!",
            "trustScore": 25,
            "feedback": "Tốt nghiệp Xuất Sắc 100% Cấp Độ B1! Đại Sứ Thương Hiệu Đỉnh Cao: Giành thắng lợi ngoạn mục trong thương vụ phân phối độc quyền 150 đại siêu thị tại Thái Lan, mở toang cánh cửa xuất khẩu khu vực ASEAN.",
            "isCorrect": true
          },
          {
            "text": "Okay, send us the money first then we will think about it.",
            "trustScore": 0,
            "feedback": "Phản hồi vô văn hóa! Làm mất đi hợp đồng xuất khẩu trị giá hàng triệu đô la vào tay đối thủ.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi vô cùng vinh dự, thưa Chủ tịch Somchai! Ban điều hành của chúng tôi sẽ ký thỏa thuận phân phối độc quyền ngay hôm nay, đưa nguồn nước khoáng tinh hoa nhất Việt Nam đến với đất nước Thái Lan!",
        "explanation": "Cái kết huy hoàng cho Cấp độ B1: Biến kiến thức khoa học và nghệ thuật thuyết trình thành hợp đồng xuất khẩu hàng triệu chai nước mỗi năm.",
        "crucialNote": "Chúc mừng bạn đã xuất sắc tốt nghiệp toàn bộ Cấp độ B1 Đại sứ Thương hiệu!",
        "memoryHook": "Sign exclusive distribution agreement for 150 hypermarkets."
      }
    ]
  },
  {
    "id": "unit-61",
    "unitNumber": 61,
    "title": "Chào Hàng B2B Cho Đại Lý & Nhà Phân Phối",
    "subtitle": "Trình bày chính sách hoa hồng và điều kiện hợp tác dài hạn",
    "level": "B2",
    "icon": "🤝",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u61-e1",
        "type": "match_pairs",
        "promptEn": "Match B2B distributor pitching and commercial policy terms:",
        "promptVi": "Ghép cặp thuật ngữ chào hàng phân phối B2B và chính sách thương mại:",
        "englishSentence": "Match B2B distributor pitching terms.",
        "audioText": "Match B2B distributor pitching terms.",
        "explanation": "5 thuật ngữ đàm phán mấu chốt để thiết lập mạng lưới phân phối vững mạnh.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ chính sách đại lý phân phối B2B.",
        "pairs": [
          {
            "left": "Tiered commission structure",
            "right": "Cơ cấu hoa hồng theo bậc thang lũy tiến hấp dẫn"
          },
          {
            "left": "Territory protection clause",
            "right": "Điều khoản bảo vệ độc quyền địa bàn phân phối"
          },
          {
            "left": "Quarterly sales rebate",
            "right": "Chiết khấu thưởng doanh số định kỳ hàng quý"
          },
          {
            "left": "Trade marketing co-op fund",
            "right": "Quỹ hỗ trợ tiếp thị và khuyến mại chung tại điểm bán"
          },
          {
            "left": "Minimum stocking inventory",
            "right": "Mức tồn kho tối thiểu đại lý phải luôn duy trì"
          }
        ]
      },
      {
        "id": "u61-e2",
        "type": "speak",
        "promptEn": "Speak this distributor partnership proposition clearly:",
        "promptVi": "Luyện nói câu đề xuất chính sách phân phối hấp dẫn cho đại lý cấp một:",
        "englishSentence": "We offer our tier-one distributors a guaranteed twelve percent margin backed by comprehensive nationwide marketing campaigns.",
        "audioText": "We offer our tier-one distributors a guaranteed twelve percent margin backed by comprehensive nationwide marketing campaigns.",
        "phonetics": "/wiː ˈɒfər ˈaʊər tɪər wʌn dɪˈstrɪbjʊtərz ə ˌɡærənˈtiːd twɛlv pərˈsɛnt ˈmɑːrdʒɪn bækt baɪ ˌkɒmprɪˈhɛnsɪv ˈneɪʃənwaɪd ˈmɑːrkɪtɪŋ kæmˈpeɪnz/",
        "vietnameseMeaning": "Chúng tôi cung cấp cho các nhà phân phối cấp một biên lợi nhuận bảo đảm 12% được hậu thuẫn bởi các chiến dịch marketing toàn quốc toàn diện.",
        "explanation": "\"Guaranteed twelve percent margin backed by comprehensive marketing\" là cam kết mang lại dòng tiền và lợi nhuận hấp dẫn nhất cho nhà phân phối.",
        "whyWrong": "Phát âm chuẩn từ \"tier-one\" (/tɪər wʌn/), \"margin\" (/ˈmɑːrdʒɪn/) và \"nationwide\" (/ˈneɪʃənwaɪd/).",
        "crucialNote": "Đại lý phân phối luôn quan tâm đến hai yếu tố: Tỷ suất lợi nhuận và Tốc độ quay vòng vốn hàng hóa.",
        "memoryHook": "Guaranteed 12% margin backed by nationwide marketing."
      },
      {
        "id": "u61-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the quarterly volume rebate mechanism:",
        "promptVi": "Ghép câu: \"Các nhà phân phối đạt chỉ tiêu quý sẽ nhận thêm ba phần trăm chiết khấu thưởng\":",
        "englishSentence": "Distributors exceeding quarterly quotas will receive an additional three percent volume rebate.",
        "audioText": "Distributors exceeding quarterly quotas will receive an additional three percent volume rebate.",
        "wordPool": [
          "Distributors",
          "exceeding",
          "quarterly",
          "quotas",
          "will",
          "receive",
          "an",
          "additional",
          "three",
          "percent",
          "volume",
          "rebate.",
          "penalty",
          "loss"
        ],
        "vietnameseMeaning": "Các nhà phân phối vượt chỉ tiêu doanh số hàng quý sẽ nhận thêm ba phần trăm chiết khấu thưởng sản lượng.",
        "explanation": "\"Volume rebate\" (thưởng chiết khấu sản lượng) là đòn bẩy kích thích đại lý nhập hàng số lượng lớn mỗi quý.",
        "whyWrong": "Dùng cụm \"exceeding quarterly quotas\" thể hiện phần thưởng xứng đáng cho nỗ lực vượt chỉ tiêu.",
        "crucialNote": "Chiết khấu thưởng thường được cấn trừ trực tiếp vào đơn hàng nhập của quý kế tiếp.",
        "memoryHook": "Exceeding quotas receive 3% volume rebate."
      },
      {
        "id": "u61-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct legal contract term for sales area defense:",
        "promptVi": "Chọn điều khoản hợp đồng bảo vệ đại lý khỏi sự cạnh tranh lấn sân địa bàn:",
        "englishSentence": "Vikoda guarantees strict [ _____ ] protection so no neighboring dealer can undercut your designated accounts.",
        "audioText": "Vikoda guarantees strict territory protection so no neighboring dealer can undercut your designated accounts.",
        "blankWord": "territory",
        "options": [
          "territory",
          "weather",
          "fashion"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda cam kết bảo vệ địa bàn nghiêm ngặt để không đại lý lân cận nào có thể bán phá giá vào các khách hàng đã chỉ định của bạn.",
        "explanation": "\"Territory protection\" (bảo hộ địa bàn) là lời hứa danh dự của hãng để đại lý yên tâm đầu tư nhân sự phát triển thị trường.",
        "whyWrong": "\"Weather\" (thời tiết) hay \"fashion\" (thời trang) không liên quan đến hợp đồng phân phối.",
        "crucialNote": "Xử phạt nghiêm khắc các hành vi bán lấn vùng (cross-territory dumping).",
        "memoryHook": "Strict territory protection = Bảo hộ địa bàn nghiêm ngặt."
      },
      {
        "id": "u61-e5",
        "type": "chat_branch",
        "promptEn": "Negotiate distribution terms with an established beverage wholesaler on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Tổng đại lý đồ uống lớn nhất miền Trung muốn phân phối độc quyền Vikoda nhưng đòi chiết khấu 18% ngay từ tháng đầu:",
        "englishSentence": "We can structure this progressively: start at 12% baseline margin, plus a 6% retrospective rebate once you hit 50,000 cases in Q1!",
        "audioText": "We can structure this progressively: start at 12% baseline margin, plus a 6% retrospective rebate once you hit 50,000 cases in Q1!",
        "chatMessages": [
          {
            "speaker": "Mr. Vinh (General Director, Central Beverage Logistics)",
            "avatar": "🚚",
            "message": "Minh, we distribute to 2,000 retail outlets in Da Nang and Quang Nam. But we need an 18% flat discount upfront or we won't sign."
          }
        ],
        "chatOptions": [
          {
            "text": "We can structure this progressively: start at 12% baseline margin, plus a 6% retrospective rebate once you hit 50,000 cases in Q1!",
            "trustScore": 25,
            "feedback": "Nghệ thuật đàm phán thương mại bậc thầy! Không giảm giá sốc làm gãy giá thị trường, mà chia bậc thang: 12% cơ sở + thưởng 6% hồi tố khi đạt 50.000 thùng, bảo vệ trọn vẹn biên lợi nhuận của công ty.",
            "isCorrect": true
          },
          {
            "text": "Sure, we can give you 25% discount and free trucks too if you sign today.",
            "trustScore": 0,
            "feedback": "Nhượng bộ tự sát! Bán dưới giá thành sẽ khiến nhà máy phá sản và làm loạn hệ thống giá cả.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng ta có thể thiết kế chính sách theo lộ trình: khởi đầu với biên lợi nhuận cơ sở 12%, cộng thêm 6% thưởng hồi tố khi bạn đạt mốc 50.000 thùng trong Quý 1!",
        "explanation": "Chiết khấu hồi tố (Retrospective Rebate) gắn liền với doanh số thực tế là công cụ bảo vệ giá bán lẻ chuẩn mực nhất của các tập đoàn đa quốc gia.",
        "crucialNote": "Bảo vệ giá là bảo vệ sinh mệnh của thương hiệu cao cấp.",
        "memoryHook": "Progressive structure: baseline margin + retrospective volume rebate."
      }
    ]
  },
  {
    "id": "unit-62",
    "unitNumber": 62,
    "title": "Đột Phá Kênh HORECA Khách Sạn 5 Sao",
    "subtitle": "Thuyết phục GM và F&B Director đưa chai thủy tinh lên bàn tiệc",
    "level": "B2",
    "icon": "🏨",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u62-e1",
        "type": "match_pairs",
        "promptEn": "Match 5-star HORECA channel acquisition terms with their definitions:",
        "promptVi": "Ghép cặp các thuật ngữ thâm nhập kênh HORECA (Hotel - Restaurant - Cafe) khách sạn 5 sao:",
        "englishSentence": "Match HORECA hospitality channel terms.",
        "audioText": "Match HORECA hospitality channel terms.",
        "explanation": "5 thuật ngữ mở toang cánh cửa vào các khu nghỉ dưỡng và khách sạn siêu sang.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ phát triển kênh HORECA cao cấp.",
        "pairs": [
          {
            "left": "HORECA channel penetration",
            "right": "Thâm nhập mạng lưới Khách sạn - Nhà hàng - Quán Cafe cao cấp"
          },
          {
            "left": "Food & Beverage Director",
            "right": "Giám đốc Ẩm thực khách sạn chịu trách nhiệm thực đơn đồ uống"
          },
          {
            "left": "Tabletop bottle presentation",
            "right": "Nghi thức bày chai nước thủy tinh trang nhã trên bàn tiệc"
          },
          {
            "left": "Eco-friendly zero plastic pledge",
            "right": "Cam kết phát triển xanh loại bỏ rác thải nhựa của khu nghỉ dưỡng"
          },
          {
            "left": "House water pouring rights",
            "right": "Quyền cung ứng độc quyền nước uống chính thức cho toàn bộ phòng khách"
          }
        ]
      },
      {
        "id": "u62-e2",
        "type": "speak",
        "promptEn": "Speak this pitch to a 5-star hotel General Manager clearly:",
        "promptVi": "Luyện nói câu thuyết phục Tổng Giám đốc khách sạn 5 sao đưa chai thủy tinh Vikoda vào phòng nghỉ:",
        "englishSentence": "Serving Vikoda glass bottles in guest rooms aligns perfectly with your resort's luxury sustainability pledge while reducing plastic waste.",
        "audioText": "Serving Vikoda glass bottles in guest rooms aligns perfectly with your resort's luxury sustainability pledge while reducing plastic waste.",
        "phonetics": "/ˈsɜːrvɪŋ vɪˈkoʊdə ɡlæs ˈbɒtlz ɪn ɡɛst ruːmz əˈlaɪnz ˈpɜːrfɪktli wɪð jʊər rɪˈzɔːrts ˈlʌkʃəri səˌsteɪnəˈbɪləti plɛdʒ waɪl rɪˈdjuːsɪŋ ˈplæstɪk weɪst/",
        "vietnameseMeaning": "Phục vụ chai thủy tinh Vikoda trong phòng khách hoàn toàn đồng điệu với cam kết bền vững sang trọng của khu nghỉ dưỡng, đồng thời giảm thiểu rác thải nhựa.",
        "explanation": "\"Aligns with your luxury sustainability pledge while reducing plastic waste\" đánh trúng mục tiêu phát triển bền vững hàng đầu của các tập đoàn quản lý khách sạn quốc tế.",
        "whyWrong": "Phát âm chuẩn từ \"sustainability pledge\" (/səˌsteɪnəˈbɪləti plɛdʒ/) và \"aligns perfectly\" (/əˈlaɪnz ˈpɜːrfɪktli/).",
        "crucialNote": "Các resort như Six Senses hay Aman luôn ưu tiên các sản phẩm không rác thải nhựa.",
        "memoryHook": "Aligns with sustainability pledge while reducing plastic waste."
      },
      {
        "id": "u62-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to present pouring rights for banquet events:",
        "promptVi": "Ghép câu: \"Vikoda có thể cung cấp độc quyền nước khoáng chai thủy tinh cho tất cả các hội nghị và tiệc cưới\":",
        "englishSentence": "Vikoda can provide exclusive glass bottle pouring rights for all conferences and wedding banquets.",
        "audioText": "Vikoda can provide exclusive glass bottle pouring rights for all conferences and wedding banquets.",
        "wordPool": [
          "Vikoda",
          "can",
          "provide",
          "exclusive",
          "glass",
          "bottle",
          "pouring",
          "rights",
          "for",
          "all",
          "conferences",
          "and",
          "wedding",
          "banquets.",
          "trash",
          "plastic"
        ],
        "vietnameseMeaning": "Vikoda có thể cung cấp độc quyền nước khoáng chai thủy tinh cho tất cả các hội nghị và tiệc cưới.",
        "explanation": "\"Pouring rights\" (quyền phục vụ đồ uống độc quyền) mang lại sản lượng tiêu thụ khổng lồ và ổn định hàng tháng.",
        "whyWrong": "Chai thủy tinh nắp vương miện tôn vinh không gian sang trọng của các sảnh tiệc cưới 5 sao.",
        "crucialNote": "Đảm bảo cung cấp sẵn khui nắp chai inox khắc logo khách sạn sang trọng.",
        "memoryHook": "Exclusive glass bottle pouring rights for banquets."
      },
      {
        "id": "u62-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct luxury dining metric term:",
        "promptVi": "Chọn thuật ngữ ẩm thực chỉ thực đơn kết hợp món ăn và nước uống cao cấp:",
        "englishSentence": "The master sommelier designed an exclusive water [ _____ ] menu pairing Vikoda with fresh seafood courses.",
        "audioText": "The master sommelier designed an exclusive water pairing menu pairing Vikoda with fresh seafood courses.",
        "blankWord": "pairing",
        "options": [
          "pairing",
          "fighting",
          "gambling"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chuyên gia thử nếm ẩm thực trưởng đã thiết kế một thực đơn kết hợp nước uống độc quyền phối cùng các món hải sản tươi sống.",
        "explanation": "\"Water pairing\" (nghệ thuật phối hợp nước khoáng với món ăn) là xu hướng ẩm thực thời thượng tại các nhà hàng Michelin.",
        "whyWrong": "\"Fighting\" (đánh nhau) hay \"gambling\" (đánh bạc) là từ ngữ tiêu cực.",
        "crucialNote": "Nước khoáng kiềm tôn vinh vị ngọt tự nhiên của tôm hùm và cá biển Nha Trang.",
        "memoryHook": "Water pairing menu with fresh seafood."
      },
      {
        "id": "u62-e5",
        "type": "chat_branch",
        "promptEn": "Close a contract with an international resort chain GM on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Tổng Giám đốc khu nghỉ dưỡng InterContinental hỏi về giải pháp thu hồi vỏ chai thủy tinh để bảo vệ cảnh quan biển:",
        "englishSentence": "We operate a circular reverse-logistics system: our delivery trucks collect empty sanitized crates weekly, guaranteeing zero environmental footprint for your resort!",
        "audioText": "We operate a circular reverse-logistics system: our delivery trucks collect empty sanitized crates weekly, guaranteeing zero environmental footprint for your resort!",
        "chatMessages": [
          {
            "speaker": "Christophe (General Manager, InterContinental Danang)",
            "avatar": "🏖️",
            "message": "Minh, we love the elegant bottle aesthetics. But our island sustainability charter requires a complete circular bottle return process. Can you support that?"
          }
        ],
        "chatOptions": [
          {
            "text": "We operate a circular reverse-logistics system: our delivery trucks collect empty sanitized crates weekly, guaranteeing zero environmental footprint for your resort!",
            "trustScore": 25,
            "feedback": "Giải pháp chuỗi cung ứng tuần hoàn (circular reverse-logistics) đốn tim Tổng Giám đốc! Xe giao hàng tự động thu hồi két vỏ chai hàng tuần, bảo đảm 0% rác thải cho khu nghỉ dưỡng xanh.",
            "isCorrect": true
          },
          {
            "text": "Just smash the empty glass bottles on the beach rocks, glass is made of sand anyway.",
            "trustScore": 0,
            "feedback": "Hủy diệt du lịch và đe dọa tính mạng du khách! Khách sạn sẽ cấm cửa nhân viên bán hàng vĩnh viễn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi vận hành hệ thống logistics tuần hoàn thu hồi: xe tải giao hàng của chúng tôi sẽ thu gom các két vỏ chai rỗng đã làm sạch hàng tuần, bảo đảm khu nghỉ dưỡng của ngài hoàn toàn không có dấu chân rác thải môi trường!",
        "explanation": "Logistics thu hồi vỏ chai (Reverse Logistics) là tiêu chí quyết định để thắng thầu các khu nghỉ dưỡng sinh thái cao cấp.",
        "crucialNote": "Mô hình kinh tế tuần hoàn (Circular Economy) khẳng định đẳng cấp phát triển bền vững của Vikoda.",
        "memoryHook": "Circular reverse-logistics collects empty crates weekly."
      }
    ]
  },
  {
    "id": "unit-63",
    "unitNumber": 63,
    "title": "Xử Lý Phản Bác Giá Đắt Của Đối Tác",
    "subtitle": "Bẻ gãy so sánh với nước lọc rẻ tiền bằng phân tích giá trị",
    "level": "B2",
    "icon": "🛡️",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u63-e1",
        "type": "match_pairs",
        "promptEn": "Match price objection handling techniques with their negotiation tactics:",
        "promptVi": "Ghép cặp các kỹ thuật bẻ gãy phản bác về giá đắt trong đàm phán B2B:",
        "englishSentence": "Match price objection reframing techniques.",
        "audioText": "Match price objection reframing techniques.",
        "explanation": "5 chiến thuật tâm lý biến lời chê đắt thành nhận thức sâu sắc về giá trị đầu tư xứng đáng.",
        "vietnameseMeaning": "Ghép đúng 5 cặp kỹ thuật xử lý phản bác về giá đắt.",
        "pairs": [
          {
            "left": "Value-based reframing",
            "right": "Định hình lại góc nhìn chuyển từ chi phí sang giá trị nhận được"
          },
          {
            "left": "Cost per serving breakdown",
            "right": "Chia nhỏ chi phí theo từng ngụm uống bảo vệ sức khỏe mỗi ngày"
          },
          {
            "left": "False equivalence challenge",
            "right": "Bẻ gãy so sánh khập khiễng giữa nước khoáng và nước lọc tinh khiết"
          },
          {
            "left": "Premium guest satisfaction",
            "right": "Sự hài lòng của khách hàng thượng lưu giúp tăng giá phòng"
          },
          {
            "left": "Health investment ROI",
            "right": "Tỷ suất sinh lời từ việc đầu tư vào sức khỏe người tiêu dùng"
          }
        ]
      },
      {
        "id": "u63-e2",
        "type": "speak",
        "promptEn": "Speak this master reframing statement to a skeptical procurement director:",
        "promptVi": "Luyện nói câu bẻ gãy so sánh khập khiễng giữa Vikoda và nước lọc giá rẻ:",
        "englishSentence": "Comparing Vikoda to filtered tap water is like comparing aged champagne to carbonated water; our value lies in sixty-eight years of geological purity.",
        "audioText": "Comparing Vikoda to filtered tap water is like comparing aged champagne to carbonated water; our value lies in sixty-eight years of geological purity.",
        "phonetics": "/kəmˈpɛərɪŋ vɪˈkoʊdə tuː ˈfɪltərd tæp ˈwɔːtər ɪz laɪk kəmˈpɛərɪŋ eɪdʒd ʃæmˈpeɪn tuː ˈkɑːrbəneɪtɪd ˈwɔːtər; ˈaʊər ˈvæljuː laɪz ɪn ˈsɪksti eɪt jɪərz ɒv ˌdʒiːəˈlɒdʒɪkəl ˈpjʊərəti/",
        "vietnameseMeaning": "So sánh Vikoda với nước máy lọc cũng giống như so sánh rượu sâm-panh thượng hạng với nước ngọt có ga; giá trị của chúng tôi nằm ở 68 năm tinh khiết địa chất.",
        "explanation": "\"Comparing Vikoda to filtered tap water is like comparing aged champagne to carbonated water\" là đòn bẩy ẩn dụ kinh điển khiến đối tác tự nhận thấy sự so sánh của họ là vô lý.",
        "whyWrong": "Phát âm chuẩn từ \"aged champagne\" (/eɪdʒd ʃæmˈpeɪn/) và \"geological purity\" (/ˌdʒiːəˈlɒdʒɪkəl ˈpjʊərəti/).",
        "crucialNote": "Không tự ti thanh minh giá, hãy tự hào nâng cao vị thế sản phẩm.",
        "memoryHook": "Like comparing champagne to carbonated water; value lies in geological purity."
      },
      {
        "id": "u63-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to break down the cost per guest per day:",
        "promptVi": "Ghép câu: \"Chênh lệch chi phí chỉ là hai nghìn đồng mỗi khách nhưng nâng tầm toàn bộ trải nghiệm nghỉ dưỡng\":",
        "englishSentence": "The cost difference is only two thousand dong per guest but elevates their entire resort stay.",
        "audioText": "The cost difference is only two thousand dong per guest but elevates their entire resort stay.",
        "wordPool": [
          "The",
          "cost",
          "difference",
          "is",
          "only",
          "two",
          "thousand",
          "dong",
          "per",
          "guest",
          "but",
          "elevates",
          "their",
          "entire",
          "resort",
          "stay.",
          "ruin",
          "cheap"
        ],
        "vietnameseMeaning": "Chênh lệch chi phí chỉ là hai nghìn đồng mỗi khách nhưng nâng tầm toàn bộ trải nghiệm nghỉ dưỡng của họ.",
        "explanation": "Kỹ thuật chia nhỏ chi phí (Cost breakdown): So với giá phòng 5 triệu đồng/đêm, thêm 2.000 đồng để phục vụ nước khoáng kiềm chai thủy tinh là một quyết định đầu tư quá hời.",
        "whyWrong": "\"Elevates their entire resort stay\" chứng minh lợi ích trải nghiệm vượt xa số tiền chênh lệch.",
        "crucialNote": "Khách hàng sẵn sàng đánh giá 5 sao trên TripAdvisor nhờ những chi tiết phục vụ tinh tế.",
        "memoryHook": "Difference is 2,000 dong but elevates entire resort stay."
      },
      {
        "id": "u63-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct commercial negotiation metric:",
        "promptVi": "Chọn từ định nghĩa trọng tâm của đàm phán giá trị thay vì chỉ chăm chăm nhìn vào chi phí:",
        "englishSentence": "Sophisticated buyers focus on long-term brand [ _____ ] rather than short-term price cutting.",
        "audioText": "Sophisticated buyers focus on long-term brand value rather than short-term price cutting.",
        "blankWord": "value",
        "options": [
          "value",
          "rumor",
          "debt"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Những người mua hàng thông thái tập trung vào giá trị thương hiệu dài hạn hơn là việc cắt giảm giá ngắn hạn.",
        "explanation": "\"Brand value\" (giá trị thương hiệu) là nền tảng giữ chân khách hàng cao cấp trung thành.",
        "whyWrong": "\"Rumor\" (tin đồn) hay \"debt\" (nợ nần) hoàn toàn sai lệch tinh thần kinh doanh chiến lược.",
        "crucialNote": "Đua nhau giảm giá là con đường tự sát của các nhà sản xuất.",
        "memoryHook": "Focus on long-term brand value rather than price cutting."
      },
      {
        "id": "u63-e5",
        "type": "chat_branch",
        "promptEn": "Overcome price pushback from a supermarket procurement buyer on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc mua hàng siêu thị ép hạ giá 15% vì cho rằng nước tinh khiết Aquafina/Dasani có giá rẻ hơn nhiều:",
        "englishSentence": "Aquafina is treated municipal tap water, while Vikoda is 100% natural alkaline mineral water. Health-conscious shoppers happily pay a 20% premium for real natural pH 9.0!",
        "audioText": "Aquafina is treated municipal tap water, while Vikoda is 100% natural alkaline mineral water. Health-conscious shoppers happily pay a 20% premium for real natural pH 9.0!",
        "chatMessages": [
          {
            "speaker": "Mr. Tuan (Category Sourcing Manager, Mega Market)",
            "avatar": "🛒",
            "message": "Minh, your 500ml wholesale price is 15% higher than RO purified bottled water. Slash your price by 15% or we will delist your SKUs."
          }
        ],
        "chatOptions": [
          {
            "text": "Aquafina is treated municipal tap water, while Vikoda is 100% natural alkaline mineral water. Health-conscious shoppers happily pay a 20% premium for real natural pH 9.0!",
            "trustScore": 25,
            "feedback": "Phản pháo bản lĩnh giữ vững giá! Chỉ rõ sự khác biệt giữa nước máy thành phố và nước khoáng kiềm thiên nhiên, khẳng định người tiêu dùng thông thái luôn sẵn sàng trả cao hơn 20% cho sức khỏe, bảo vệ doanh thu cho cả siêu thị.",
            "isCorrect": true
          },
          {
            "text": "Please don't delist us, we will drop our price to zero profit just to stay on your shelf.",
            "trustScore": 0,
            "feedback": "Đầu hàng nhục nhã! Bị ép giá triệt để và phá nát định vị thương hiệu cao cấp.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Aquafina là nước máy đô thị qua xử lý lọc, trong khi Vikoda là nước khoáng kiềm thiên nhiên 100%. Người tiêu dùng quan tâm sức khỏe vui vẻ trả cao hơn 20% cho giá trị pH 9.0 tự nhiên đích thực!",
        "explanation": "Đứng vững trước áp lực của người mua hàng siêu thị là bản lĩnh của nhân sự bán hàng B2B chuyên nghiệp.",
        "crucialNote": "Siêu thị kiếm được nhiều lợi nhuận tuyệt đối hơn khi bán một sản phẩm phân khúc cao cấp (Premium Basket Size).",
        "memoryHook": "Shoppers pay 20% premium for real natural pH 9.0."
      }
    ]
  },
  {
    "id": "unit-64",
    "unitNumber": 64,
    "title": "Bảo Vệ Biên Lợi Nhuận & Không Hạ Giá Vội",
    "subtitle": "Giữ vững định vị cao cấp, thay thế bằng hỗ trợ marketing",
    "level": "B2",
    "icon": "💎",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u64-e1",
        "type": "match_pairs",
        "promptEn": "Match profit margin defense and non-price concession strategies:",
        "promptVi": "Ghép cặp các chiến lược bảo vệ biên lợi nhuận và nhượng bộ phi tiền mặt:",
        "englishSentence": "Match margin defense and value-add concession terms.",
        "audioText": "Match margin defense and value-add concession terms.",
        "explanation": "5 vũ khí đàm phán thay thế giảm giá bằng các gói tài trợ tiếp thị và hỗ trợ trưng bày điểm bán.",
        "vietnameseMeaning": "Ghép đúng 5 cặp chiến lược bảo vệ biên lợi nhuận kinh doanh.",
        "pairs": [
          {
            "left": "Margin defense discipline",
            "right": "Kỷ luật thép kiên quyết bảo vệ biên lợi nhuận gộp"
          },
          {
            "left": "Non-price concessions",
            "right": "Các nhượng bộ gia tăng giá trị phi tiền mặt"
          },
          {
            "left": "Co-branded POSM support",
            "right": "Tài trợ biển hiệu và tủ mát đồng thương hiệu"
          },
          {
            "left": "Free staff hydration trial",
            "right": "Tặng nước khoáng dùng thử chăm sóc nhân viên đối tác"
          },
          {
            "left": "Avoid destructive price war",
            "right": "Né tránh cuộc chiến giảm giá tự sát tàn phá thị trường"
          }
        ]
      },
      {
        "id": "u64-e2",
        "type": "speak",
        "promptEn": "Speak this diplomatic value-add counter-offer clearly:",
        "promptVi": "Luyện nói câu từ chối giảm giá khéo léo và đề xuất gói tài trợ tiếp thị thay thế:",
        "englishSentence": "Instead of discounting unit price, we can provide fifty branded display coolers and comprehensive POSM marketing support.",
        "audioText": "Instead of discounting unit price, we can provide fifty branded display coolers and comprehensive POSM marketing support.",
        "phonetics": "/ɪnˈstɛd ɒv dɪsˈkaʊntɪŋ ˈjuːnɪt praɪs, wiː kæn prəˈvaɪd ˈfɪfti brændɪd dɪˈspleɪ ˈkuːlərz ænd ˌkɒmprɪˈhɛnsɪv piː oʊ ɛs ɛm ˈmɑːrkɪtɪŋ səˈpɔːrt/",
        "vietnameseMeaning": "Thay vì giảm đơn giá sản phẩm, chúng tôi có thể tài trợ năm mươi tủ mát thương hiệu và hỗ trợ marketing vật phẩm điểm bán toàn diện.",
        "explanation": "\"Instead of discounting unit price, we can provide [Giá trị thay thế]\" là câu thần chú chuyển hướng đàm phán bảo toàn biên lợi nhuận 100%.",
        "whyWrong": "Phát âm rõ từ \"branded display coolers\" (/brændɪd dɪˈspleɪ ˈkuːlərz/) và \"comprehensive\" (/ˌkɒmprɪˈhɛnsɪv/).",
        "crucialNote": "Tủ mát là tài sản của công ty, vừa giúp đối tác bán hàng vừa quảng bá thương hiệu ngoài thị trường.",
        "memoryHook": "Instead of discounting, provide branded coolers and POSM support."
      },
      {
        "id": "u64-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the danger of destructive price wars:",
        "promptVi": "Ghép câu: \"Cuộc chiến giá cả hủy diệt làm suy yếu giá trị thương hiệu và phá hủy lợi nhuận ngành\":",
        "englishSentence": "Destructive price wars erode brand equity and destroy industry profitability.",
        "audioText": "Destructive price wars erode brand equity and destroy industry profitability.",
        "wordPool": [
          "Destructive",
          "price",
          "wars",
          "erode",
          "brand",
          "equity",
          "and",
          "destroy",
          "industry",
          "profitability.",
          "build",
          "protect"
        ],
        "vietnameseMeaning": "Cuộc chiến giá cả hủy diệt làm suy yếu giá trị thương hiệu và phá hủy lợi nhuận của toàn ngành.",
        "explanation": "Doanh nghiệp một khi đã hạ giá thì không bao giờ có thể tăng giá trở lại trong mắt người tiêu dùng.",
        "whyWrong": "\"Erode brand equity\" (bào mòn giá trị thương hiệu) là cảnh báo kinh điển của các giáo sư kinh tế Harvard.",
        "crucialNote": "Vikoda định vị phân khúc chất lượng cao không tham gia vào cuộc đua xuống đáy (race to the bottom).",
        "memoryHook": "Price wars erode brand equity and destroy profitability."
      },
      {
        "id": "u64-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for trading concessions in negotiation:",
        "promptVi": "Chọn thuật ngữ chỉ các giá trị gia tăng được trao đổi để giữ nguyên giá bán:",
        "englishSentence": "We protected our twenty percent profit margin by offering valuable non-price [ _____ ] like free staff training.",
        "audioText": "We protected our twenty percent profit margin by offering valuable non-price concessions like free staff training.",
        "blankWord": "concessions",
        "options": [
          "concessions",
          "confessions",
          "explosions"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chúng tôi đã bảo vệ được biên lợi nhuận hai mươi phần trăm bằng cách đề xuất các nhượng bộ phi giá trị quý báu như đào tạo nhân viên miễn phí.",
        "explanation": "\"Non-price concessions\" (nhượng bộ phi tiền mặt) như đào tạo dịch vụ, kệ trưng bày, tài trợ sự kiện giúp đối tác cảm thấy được hưởng lợi lớn.",
        "whyWrong": "\"Confessions\" (sự thú tội) hay \"explosions\" (vụ nổ) không liên quan đến kỹ thuật thương thảo hợp đồng.",
        "crucialNote": "Đưa ra nhượng bộ có chi phí thấp đối với mình nhưng có giá trị cao đối với đối tác.",
        "memoryHook": "Non-price concessions protect profit margins."
      },
      {
        "id": "u64-e5",
        "type": "chat_branch",
        "promptEn": "Counter an aggressive discount demand from an airline caterer on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Công ty suất ăn hàng không đe dọa hủy đơn hàng nếu không giảm giá chai 350ml xuống 10%:",
        "englishSentence": "Our unit price is firm to protect premium mineral purity, but we will provide free customized co-branded tamper seals and priority ramp-side delivery!",
        "audioText": "Our unit price is firm to protect premium mineral purity, but we will provide free customized co-branded tamper seals and priority ramp-side delivery!",
        "chatMessages": [
          {
            "speaker": "Captain David (Procurement Head, Pacific Airline Catering)",
            "avatar": "✈️",
            "message": "Minh, budget cuts require a 10% price reduction across all beverage suppliers. If you cannot match this, we will switch to tap water bottles."
          }
        ],
        "chatOptions": [
          {
            "text": "Our unit price is firm to protect premium mineral purity, but we will provide free customized co-branded tamper seals and priority ramp-side delivery!",
            "trustScore": 25,
            "feedback": "Ứng phó ngoại giao xuất sắc! Giữ vững giá thành (unit price is firm) để bảo vệ chất lượng khoáng, nhưng bù đắp bằng in logo đồng thương hiệu trên seal nắp chai và dịch vụ giao hàng ưu tiên tận cửa máy bay.",
            "isCorrect": true
          },
          {
            "text": "Okay, we cut 10% price today and we can cut another 10% next month if you want.",
            "trustScore": 0,
            "feedback": "Hạ giá vô nguyên tắc! Hãng hàng không sẽ coi thường và liên tục ép giá trong tương lai.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Đơn giá của chúng tôi được giữ vững để bảo vệ độ tinh khiết khoáng chất cao cấp, nhưng chúng tôi sẽ tài trợ miễn phí màng niêm phong in logo hai thương hiệu và dịch vụ giao hàng ưu tiên tận chân cầu thang máy bay!",
        "explanation": "Cung cấp giá trị dịch vụ gia tăng độc quyền (Priority ramp-side delivery) giải quyết nỗi đau vận hành của khách hàng hàng không.",
        "crucialNote": "Hàng không rất cần độ an toàn niêm phong nắp chai tuyệt đối.",
        "memoryHook": "Unit price is firm, offer co-branded seals and priority delivery."
      }
    ]
  },
  {
    "id": "unit-65",
    "unitNumber": 65,
    "title": "Phòng Kế Toán & Hóa Đơn Chứng Từ VAT",
    "subtitle": "Xử lý hóa đơn VAT, thanh toán chi phí và công nợ Net 30",
    "level": "B2",
    "icon": "💳",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u65-e1",
        "type": "match_pairs",
        "promptEn": "Match financial accounting and payment settlement terms with their meanings:",
        "promptVi": "Ghép cặp các thuật ngữ tài chính kế toán và thanh toán công nợ B2B:",
        "englishSentence": "Match corporate accounting and invoice terms.",
        "audioText": "Match corporate accounting and invoice terms.",
        "explanation": "5 thuật ngữ thanh toán chuẩn mực bảo đảm dòng tiền minh bạch và đúng quy định pháp luật thuế.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ kế toán hóa đơn VAT và công nợ.",
        "pairs": [
          {
            "left": "Electronic VAT invoice",
            "right": "Hóa đơn điện tử giá trị gia tăng hợp pháp"
          },
          {
            "left": "Net 30 payment terms",
            "right": "Thời hạn thanh toán trong vòng ba mươi ngày kể từ ngày nhận hàng"
          },
          {
            "left": "Accounts receivable",
            "right": "Các khoản công nợ phải thu từ khách hàng đại lý"
          },
          {
            "left": "Bank reconciliation",
            "right": "Đối soát số dư tài khoản ngân hàng với sổ sách kế toán"
          },
          {
            "left": "Corporate tax code",
            "right": "Mã số thuế doanh nghiệp đăng ký chính thức"
          }
        ]
      },
      {
        "id": "u65-e2",
        "type": "speak",
        "promptEn": "Speak this commercial payment terms clarification clearly:",
        "promptVi": "Luyện nói câu làm rõ điều khoản công nợ thanh toán 30 ngày trong hợp đồng phân phối:",
        "englishSentence": "Our standard commercial terms specify Net thirty payment upon issuance of the electronic VAT invoice and signed delivery note.",
        "audioText": "Our standard commercial terms specify Net thirty payment upon issuance of the electronic VAT invoice and signed delivery note.",
        "phonetics": "/ˈaʊər ˈstændərd kəˈmɜːrʃəl tɜːrmz ˈspɛsɪfaɪ nɛt ˈθɜːrti ˈpeɪmənt əˈpɒn ˈɪʃuːəns ɒv ðiː ˌiːlɛkˈtrɒnɪk viː eɪ tiː ˈɪnvɔɪs ænd saɪnd dɪˈlɪvəri noʊt/",
        "vietnameseMeaning": "Điều khoản thương mại chuẩn của chúng tôi quy định thanh toán trong vòng ba mươi ngày (Net 30) kể từ khi phát hành hóa đơn điện tử VAT và phiếu giao hàng có chữ ký.",
        "explanation": "\"Net thirty payment upon issuance of electronic VAT invoice and signed delivery note\" là điều khoản tài chính kinh điển trong mọi hợp đồng mua bán B2B.",
        "whyWrong": "Phát âm rõ từ \"issuance\" (/ˈɪʃuːəns/) và cụm \"electronic VAT invoice\" (/ˌiːlɛkˈtrɒnɪk viː eɪ tiː ˈɪnvɔɪs/).",
        "crucialNote": "Luôn đối chiếu đủ 2 chứng từ: Hóa đơn điện tử + Phiếu giao nhận (POD) trước khi giải ngân.",
        "memoryHook": "Net 30 payment upon electronic VAT invoice and signed delivery note."
      },
      {
        "id": "u65-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to instruct accounting on sending tax clearance documents:",
        "promptVi": "Ghép câu: \"Phòng kế toán đã gửi hóa đơn điện tử chính thức đến email tài chính của bạn\":",
        "englishSentence": "The accounting department has sent the official e-invoice to your financial email.",
        "audioText": "The accounting department has sent the official e-invoice to your financial email.",
        "wordPool": [
          "The",
          "accounting",
          "department",
          "has",
          "sent",
          "the",
          "official",
          "e-invoice",
          "to",
          "your",
          "financial",
          "email.",
          "stolen",
          "lost"
        ],
        "vietnameseMeaning": "Phòng kế toán đã gửi hóa đơn điện tử chính thức đến email tài chính của bạn.",
        "explanation": "Hóa đơn điện tử được tích hợp chữ ký số bảo mật của Tổng cục Thuế Việt Nam.",
        "whyWrong": "\"Official e-invoice\" (hóa đơn điện tử chính thức) là căn cứ khấu trừ thuế đầu vào cho khách hàng.",
        "crucialNote": "Đính kèm file XML và PDF để đối tác thuận tiện nhập liệu vào phần mềm ERP.",
        "memoryHook": "Sent official e-invoice to your financial email."
      },
      {
        "id": "u65-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for bank transaction confirmation:",
        "promptVi": "Chọn thuật ngữ chỉ lệnh ủy nhiệm chi hoặc chứng từ chuyển khoản ngân hàng:",
        "englishSentence": "Please provide the bank wire transfer [ _____ ] so our warehouse can release the export container immediately.",
        "audioText": "Please provide the bank wire transfer receipt so our warehouse can release the export container immediately.",
        "blankWord": "receipt",
        "options": [
          "receipt",
          "lottery",
          "poem"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Xin vui lòng cung cấp ủy nhiệm chi chuyển khoản ngân hàng để kho chúng tôi có thể xuất container hàng ngay lập tức.",
        "explanation": "\"Bank wire transfer receipt\" hoặc \"swift advice\" là bằng chứng tiền đã chuyển vào tài khoản.",
        "whyWrong": "\"Lottery\" (vé số) hay \"poem\" (bài thơ) không phải là chứng từ tài chính.",
        "crucialNote": "Kiểm tra kỹ thông tin số tài khoản và nội dung thanh toán trùng khớp mã đơn hàng.",
        "memoryHook": "Bank wire transfer receipt = Giấy báo có / Ủy nhiệm chi ngân hàng."
      },
      {
        "id": "u65-e5",
        "type": "chat_branch",
        "promptEn": "Resolve an overdue debt balance with an enterprise supermarket finance team on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Kế toán trưởng chuỗi siêu thị nợ quá hạn 10 ngày hẹn tiếp sang tháng sau mới trả tiền hàng vì trục trặc phần mềm:",
        "englishSentence": "We understand system transitions, but our credit policy suspends new dispatches beyond 40 days. Let's process a 50% interim wire transfer today to keep stock flowing!",
        "audioText": "We understand system transitions, but our credit policy suspends new dispatches beyond 40 days. Let's process a 50% interim wire transfer today to keep stock flowing!",
        "chatMessages": [
          {
            "speaker": "Chief Accountant (Lotte Mart Finance)",
            "avatar": "📑",
            "message": "Minh, our ERP migration delayed your invoice payment by 10 days. We plan to settle your $50,000 balance at the end of next month instead."
          }
        ],
        "chatOptions": [
          {
            "text": "We understand system transitions, but our credit policy suspends new dispatches beyond 40 days. Let's process a 50% interim wire transfer today to keep stock flowing!",
            "trustScore": 25,
            "feedback": "Thu hồi công nợ khôn khéo và dứt khoát! Đồng cảm với sự cố ERP nhưng viện dẫn chính sách khóa đơn hàng quá 40 ngày, đưa ra giải pháp thanh toán tạm ứng 50% ngay hôm nay để duy trì luân chuyển hàng hóa.",
            "isCorrect": true
          },
          {
            "text": "Take your time, pay us in 2 years whenever you have extra money.",
            "trustScore": 0,
            "feedback": "Thất thoát tài chính nghiêm trọng! Dẫn đến nợ xấu đọng vốn hàng tỷ đồng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi rất thông cảm với quá trình chuyển đổi hệ thống, nhưng chính sách tín dụng của chúng tôi sẽ tạm dừng các chuyến giao hàng mới khi nợ quá 40 ngày. Chúng ta hãy thực hiện chuyển khoản tạm ứng 50% hôm nay để hàng hóa tiếp tục được vận chuyển nhé!",
        "explanation": "Đàm phán giải pháp thanh toán linh hoạt 50% vừa giữ vững kỷ luật thu hồi nợ vừa không làm đứt gãy mối quan hệ kinh doanh.",
        "crucialNote": "Dòng tiền là mạch máu nuôi sống toàn bộ bộ máy sản xuất kinh doanh.",
        "memoryHook": "Process 50% interim wire transfer to keep stock flowing."
      }
    ]
  },
  {
    "id": "unit-66",
    "unitNumber": 66,
    "title": "Dây Chuyền Vô Trùng Krones Đức",
    "subtitle": "Giới thiệu công nghệ chiết rót tốc độ cao hiện đại nhất",
    "level": "B2",
    "icon": "⚙️",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u66-e1",
        "type": "match_pairs",
        "promptEn": "Match German Krones bottling technology terms with their functions:",
        "promptVi": "Ghép cặp các thuật ngữ công nghệ chiết rót tự động Krones của CHLB Đức:",
        "englishSentence": "Match Krones German automation terms.",
        "audioText": "Match Krones German automation terms.",
        "explanation": "5 công nghệ tự động hóa đỉnh cao hàng đầu thế giới được lắp đặt tại nhà máy Đảnh Thạnh.",
        "vietnameseMeaning": "Ghép đúng 5 cặp công nghệ chiết rót Krones Đức.",
        "pairs": [
          {
            "left": "Krones aseptic block",
            "right": "Khối liên hợp vô trùng thổi chai - chiết rót - đóng nắp khép kín"
          },
          {
            "left": "High-speed bottling capacity",
            "right": "Công suất chiết rót tốc độ cao 24.000 chai mỗi giờ"
          },
          {
            "left": "HEPA air overpressure chamber",
            "right": "Buồng áp suất dương màng siêu lọc HEPA chống vi khuẩn"
          },
          {
            "left": "Precision flowmeter filling",
            "right": "Công nghệ chiết rót định lượng cảm biến từ trường chính xác"
          },
          {
            "left": "Robotic palletizer",
            "right": "Cánh tay robot tự động xếp dỡ thùng hàng lên pallet"
          }
        ]
      },
      {
        "id": "u66-e2",
        "type": "speak",
        "promptEn": "Speak this flagship technology showcase sentence clearly:",
        "promptVi": "Luyện nói câu giới thiệu dây chuyền chiết rót tự động Krones của Đức với phái đoàn quốc tế:",
        "englishSentence": "Our state-of-the-art German Krones line seamlessly integrates bottle blowing, precision filling, and capping inside an aseptic cleanroom.",
        "audioText": "Our state-of-the-art German Krones line seamlessly integrates bottle blowing, precision filling, and capping inside an aseptic cleanroom.",
        "phonetics": "/ˈaʊər steɪt ɒv ðiː ɑːrt ˈdʒɜːrmən kroʊnz laɪn ˈsiːmləsli ˈɪntɪɡreɪts ˈbɒtl ˈbloʊɪŋ, prɪˈsɪʒən ˈfɪlɪŋ, ænd ˈkæpɪŋ ɪnˈsaɪd ən əˈsɛptɪk ˈkliːnruːm/",
        "vietnameseMeaning": "Dây chuyền Krones hiện đại của Đức tích hợp liền mạch quy trình thổi chai, chiết rót chính xác và đóng nắp bên trong phòng sạch vô trùng.",
        "explanation": "\"State-of-the-art German Krones line seamlessly integrates...\" là lời giới thiệu đẳng cấp khẳng định tầm vóc công nghệ hàng đầu thế giới của Vikoda.",
        "whyWrong": "Phát âm chuẩn từ \"state-of-the-art\" (/steɪt ɒv ðiː ɑːrt/ - tối tân), \"aseptic\" (/əˈsɛptɪk/ - vô trùng) và \"seamlessly\" (/ˈsiːmləsli/).",
        "crucialNote": "Krones là thương hiệu số 1 thế giới về thiết bị đóng chai có trụ sở tại Neutraubling, Đức.",
        "memoryHook": "German Krones integrates blowing, filling, and capping in aseptic cleanroom."
      },
      {
        "id": "u66-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the lightning-fast bottling speed:",
        "promptVi": "Ghép câu: \"Dây chuyền chiết rót công nghệ Đức vận hành với công suất kinh ngạc 24.000 chai mỗi giờ\":",
        "englishSentence": "The German bottling line operates at an astonishing twenty-four thousand bottles per hour.",
        "audioText": "The German bottling line operates at an astonishing twenty-four thousand bottles per hour.",
        "wordPool": [
          "The",
          "German",
          "bottling",
          "line",
          "operates",
          "at",
          "an",
          "astonishing",
          "twenty-four",
          "thousand",
          "bottles",
          "per",
          "hour.",
          "slow",
          "broken"
        ],
        "vietnameseMeaning": "Dây chuyền chiết rót công nghệ Đức vận hành với công suất kinh ngạc 24.000 chai mỗi giờ.",
        "explanation": "Công suất 24.000 chai/giờ đáp ứng nhu cầu tăng trưởng đột biến trong các mùa cao điểm du lịch và các hợp đồng xuất khẩu lớn.",
        "whyWrong": "\"At an astonishing twenty-four thousand bottles per hour\" gây ấn tượng mạnh mẽ về quy mô sản xuất công nghiệp hiện đại.",
        "crucialNote": "Toàn bộ quy trình diễn ra tự động 100% không có bàn tay con người chạm vào sản phẩm.",
        "memoryHook": "Operates at astonishing 24,000 bottles per hour."
      },
      {
        "id": "u66-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for positive pressure air isolation:",
        "promptVi": "Chọn thuật ngữ chỉ buồng áp suất dương ngăn chặn tuyệt đối bụi bẩn và vi khuẩn xâm nhập:",
        "englishSentence": "The filling block is maintained under HEPA-filtered positive [ _____ ] to guarantee total sterility.",
        "audioText": "The filling block is maintained under HEPA-filtered positive pressure to guarantee total sterility.",
        "blankWord": "pressure",
        "options": [
          "pressure",
          "weather",
          "traffic"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Khối chiết rót được duy trì dưới áp suất dương lọc màng HEPA để bảo đảm sự vô trùng tuyệt đối.",
        "explanation": "\"Positive pressure\" (áp suất dương) đẩy không khí từ trong phòng sạch ra ngoài, không cho bất kỳ hạt bụi hay bào tử nấm nào bay vào buồng máy.",
        "whyWrong": "\"Weather\" (thời tiết) hay \"traffic\" (giao thông) hoàn toàn sai lệch ngữ cảnh kỹ thuật.",
        "crucialNote": "Tiêu chuẩn phòng sạch tương đương với các nhà máy sản xuất thuốc tiêm y tế.",
        "memoryHook": "HEPA positive pressure guarantees total sterility."
      },
      {
        "id": "u66-e5",
        "type": "chat_branch",
        "promptEn": "Discuss predictive IoT sensor monitoring with the Krones German resident engineer on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Chuyên gia kỹ thuật trưởng của hãng Krones gửi báo cáo kiểm tra cảm biến rung và nhiệt độ máy chiết rót:",
        "englishSentence": "Sensor analytics confirmed 99.8% Overall Equipment Effectiveness! All filling valves are operating with microsecond precision. Ready for continuous export production.",
        "audioText": "Sensor analytics confirmed 99.8% Overall Equipment Effectiveness! All filling valves are operating with microsecond precision. Ready for continuous export production.",
        "chatMessages": [
          {
            "speaker": "Markus (Resident Commissioning Engineer, Krones AG Germany)",
            "avatar": "🇩🇪",
            "message": "Minh, we just analyzed the telemetry data from line 1 filling carousels. What is your team's feedback on the fill-level precision?"
          }
        ],
        "chatOptions": [
          {
            "text": "Sensor analytics confirmed 99.8% Overall Equipment Effectiveness! All filling valves are operating with microsecond precision. Ready for continuous export production.",
            "trustScore": 25,
            "feedback": "Phản hồi chuẩn ngôn ngữ kỹ thuật công nghiệp 4.0! Trích dẫn chỉ số hiệu suất thiết bị tổng thể OEE 99.8% và độ chính xác van chiết rót đến từng micro-giây, khiến chuyên gia Đức vô cùng hài lòng.",
            "isCorrect": true
          },
          {
            "text": "The machine is too fast and noisy, can you make it run at 100 bottles per day?",
            "trustScore": 0,
            "feedback": "Kéo lùi công nghệ! Không hiểu biết về giá trị của dây chuyền tốc độ cao hàng triệu đô la.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Phân tích dữ liệu cảm biến xác nhận Hiệu suất Thiết bị Tổng thể đạt 99.8%! Tất cả các van chiết rót đang vận hành với độ chính xác đến từng micro-giây. Sẵn sàng cho sản xuất xuất khẩu liên tục.",
        "explanation": "Chỉ số OEE (Overall Equipment Effectiveness) là thước đo vàng của nền sản xuất thông minh toàn cầu.",
        "crucialNote": "Đội ngũ kỹ sư người Việt của Vikoda làm chủ hoàn toàn công nghệ Krones hiện đại.",
        "memoryHook": "99.8% OEE with microsecond precision."
      }
    ]
  },
  {
    "id": "unit-67",
    "unitNumber": 67,
    "title": "Tiêu Chuẩn Quốc Tế ISO 22000 & HACCP",
    "subtitle": "Chứng chỉ an toàn thực phẩm bảo chứng cho chất lượng",
    "level": "B2",
    "icon": "🏅",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u67-e1",
        "type": "match_pairs",
        "promptEn": "Match international quality and food safety standards with their definitions:",
        "promptVi": "Ghép cặp các tiêu chuẩn an toàn thực phẩm quốc tế ISO 22000 và HACCP:",
        "englishSentence": "Match international food safety management terms.",
        "audioText": "Match international food safety management terms.",
        "explanation": "5 trụ cột quản lý rủi ro vệ sinh an toàn thực phẩm bảo chứng cho mọi lô hàng xuất khẩu.",
        "vietnameseMeaning": "Ghép đúng 5 cặp tiêu chuẩn an toàn thực phẩm quốc tế.",
        "pairs": [
          {
            "left": "ISO 22000:2018 Certification",
            "right": "Hệ thống quản lý an toàn thực phẩm tiêu chuẩn toàn cầu mới nhất"
          },
          {
            "left": "Hazard Analysis Critical Control Point",
            "right": "HACCP - Phân tích mối nguy và điểm kiểm soát tới hạn"
          },
          {
            "left": "Critical Control Point (CCP)",
            "right": "Điểm kiểm soát sống còn để phòng ngừa hoặc triệt tiêu mối nguy"
          },
          {
            "left": "Annual third-party audit",
            "right": "Đánh giá tái chứng nhận độc lập hàng năm từ tổ chức uy tín"
          },
          {
            "left": "Strict allergen & cross-contact protocol",
            "right": "Quy trình kiểm soát nghiêm ngặt chống nhiễm chéo"
          }
        ]
      },
      {
        "id": "u67-e2",
        "type": "speak",
        "promptEn": "Speak this certified food safety compliance statement clearly:",
        "promptVi": "Luyện nói câu khẳng định hệ thống quản lý an toàn thực phẩm đạt chuẩn quốc tế của Vikoda:",
        "englishSentence": "Vikoda operates under rigorous ISO 22000 and HACCP certified management systems, ensuring total food safety from wellhead to bottle.",
        "audioText": "Vikoda operates under rigorous ISO 22000 and HACCP certified management systems, ensuring total food safety from wellhead to bottle.",
        "phonetics": "/vɪˈkoʊdə ˈɒpəreɪts ˈʌndər ˈrɪɡərəs ˌaɪ ɛs ˈoʊ 22000 ænd ˈhæsʌp ˈsɜːrtɪfaɪd ˈmænɪdʒmənt ˈsɪstəmz, ɪnˈʃʊərɪŋ ˈtoʊtl fuːd ˈseɪfti frɒm ˈwɛlhɛd tuː ˈbɒtl/",
        "vietnameseMeaning": "Vikoda vận hành dưới hệ thống quản lý được chứng nhận ISO 22000 và HACCP nghiêm ngặt, bảo đảm an toàn thực phẩm toàn diện từ đầu giếng đến thành phẩm chai nước.",
        "explanation": "\"Operating under ISO 22000 and HACCP certified systems from wellhead to bottle\" là lời tuyên bố chất lượng có sức nặng pháp lý cao nhất trong giao thương xuất khẩu.",
        "whyWrong": "Phát âm chuẩn từ \"rigorous\" (/ˈrɪɡərəs/ - nghiêm ngặt) và \"wellhead to bottle\" (/ˈwɛlhɛd tuː ˈbɒtl/).",
        "crucialNote": "Đạt chứng nhận từ tổ chức giám định quốc tế SGS Thụy Sĩ.",
        "memoryHook": "Rigorous ISO 22000 and HACCP from wellhead to bottle."
      },
      {
        "id": "u67-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the role of Critical Control Points in water safety:",
        "promptVi": "Ghép câu: \"Việc giám sát liên tục các điểm kiểm soát tới hạn bảo đảm không có bất kỳ sai lệch nào\":",
        "englishSentence": "Continuous monitoring of critical control points guarantees zero quality deviation.",
        "audioText": "Continuous monitoring of critical control points guarantees zero quality deviation.",
        "wordPool": [
          "Continuous",
          "monitoring",
          "of",
          "critical",
          "control",
          "points",
          "guarantees",
          "zero",
          "quality",
          "deviation.",
          "error",
          "defect"
        ],
        "vietnameseMeaning": "Việc giám sát liên tục các điểm kiểm soát tới hạn bảo đảm không có bất kỳ sai lệch chất lượng nào.",
        "explanation": "Các điểm CCP tại Vikoda gồm: Lọc vi sinh đầu nguồn -> Giám sát áp suất buồng chiết rót -> Kiểm tra lực đóng nắp chai -> Quét mã vạch lô hàng.",
        "whyWrong": "\"Zero quality deviation\" khẳng định tỷ lệ lỗi bằng không trong suốt quá trình sản xuất.",
        "crucialNote": "Mọi dữ liệu CCP được ghi nhận tự động vào phần mềm máy tính không thể chỉnh sửa thủ công.",
        "memoryHook": "Monitoring critical control points guarantees zero deviation."
      },
      {
        "id": "u67-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for periodic external verification:",
        "promptVi": "Chọn thuật ngữ chỉ kỳ tái đánh giá định kỳ của tổ chức kiểm định quốc tế:",
        "englishSentence": "Our plant passed the annual third-party [ _____ ] with zero major non-conformities.",
        "audioText": "Our plant passed the annual third-party audit with zero major non-conformities.",
        "blankWord": "audit",
        "options": [
          "audit",
          "carnival",
          "festival"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Nhà máy của chúng tôi đã vượt qua kỳ đánh giá độc lập hàng năm với không có bất kỳ điểm không phù hợp nghiêm trọng nào.",
        "explanation": "\"Third-party audit\" (đánh giá bên thứ ba) là kỳ thi sát hạch nghiêm ngặt của các chuyên gia kiểm định độc lập.",
        "whyWrong": "\"Carnival\" (lễ hội hóa trang) hay \"festival\" (ngày hội) không mang tính pháp lý kiểm toán.",
        "crucialNote": "\"Zero major non-conformities\" là điểm số cao nhất một nhà máy có thể đạt được.",
        "memoryHook": "Passed third-party audit with zero non-conformities."
      },
      {
        "id": "u67-e5",
        "type": "chat_branch",
        "promptEn": "Provide ISO compliance proof to an EU retail supermarket auditor on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Đại diện chuỗi siêu thị Carrefour Pháp yêu cầu hồ sơ HACCP và chứng chỉ ISO 22000 còn hiệu lực trước khi ký hợp đồng nhập khẩu:",
        "englishSentence": "Attached are our valid ISO 22000:2018 and HACCP certificates issued by SGS, along with our complete CCP verification log for immediate approval.",
        "audioText": "Attached are our valid ISO 22000:2018 and HACCP certificates issued by SGS, along with our complete CCP verification log for immediate approval.",
        "chatMessages": [
          {
            "speaker": "Philippe (Quality Compliance Director, Carrefour Global)",
            "avatar": "🇫🇷",
            "message": "Minh, Carrefour vendor onboarding requires accredited ISO 22000:2018 and HACCP certificates. Can you email certified copies today?"
          }
        ],
        "chatOptions": [
          {
            "text": "Attached are our valid ISO 22000:2018 and HACCP certificates issued by SGS, along with our complete CCP verification log for immediate approval.",
            "trustScore": 25,
            "feedback": "Cung cấp hồ sơ pháp lý chuẩn mực và đầy đủ! Gửi ngay bản scan chứng chỉ ISO 22000:2018 và HACCP do tổ chức SGS Thụy Sĩ cấp, mở toang cánh cửa vào chuỗi siêu thị hàng đầu châu Âu.",
            "isCorrect": true
          },
          {
            "text": "We don't have ISO certificates, but our manager promises the water is very clean.",
            "trustScore": 0,
            "feedback": "Loại hồ sơ ngay lập tức! Thị trường châu Âu tuyệt đối không chấp nhận lời hứa suông không có chứng chỉ quốc tế.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Đính kèm tại đây là các chứng chỉ ISO 22000:2018 và HACCP còn hiệu lực của chúng tôi do SGS cấp, cùng nhật ký xác minh điểm kiểm soát tới hạn CCP để quý vị phê duyệt ngay lập tức.",
        "explanation": "Có sẵn chứng chỉ ISO 22000 và HACCP của các tổ chức hàng đầu thế giới (SGS, TUV, Bureau Veritas) là tấm vé thông hành bắt buộc để xuất khẩu vào EU.",
        "crucialNote": "Hồ sơ được cập nhật và đóng dấu điện tử minh bạch.",
        "memoryHook": "Valid ISO 22000 and HACCP issued by SGS."
      }
    ]
  },
  {
    "id": "unit-68",
    "unitNumber": 68,
    "title": "Đo Chỉ Số TDS & Độ Cứng Nước Khoáng",
    "subtitle": "Giải thích tổng lượng chất rắn hòa tan và khoáng nhẹ",
    "level": "B2",
    "icon": "💧",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u68-e1",
        "type": "match_pairs",
        "promptEn": "Match water mineral balance and hardness parameters with their scientific meanings:",
        "promptVi": "Ghép cặp các chỉ số đo độ cứng và hàm lượng khoáng hòa tan TDS trong nước:",
        "englishSentence": "Match water hardness and TDS scientific terms.",
        "audioText": "Match water hardness and TDS scientific terms.",
        "explanation": "5 thông số thủy hóa học quyết định độ thanh mát, êm dịu và không bị gắt của nước khoáng Vikoda.",
        "vietnameseMeaning": "Ghép đúng 5 cặp chỉ số độ cứng và hàm lượng khoáng chất TDS.",
        "pairs": [
          {
            "left": "Total Dissolved Solids (TDS)",
            "right": "Tổng hàm lượng khoáng chất tự nhiên hòa tan trong một lít nước"
          },
          {
            "left": "Light mineralization index",
            "right": "Chỉ số khoáng hóa nhẹ cân bằng lý tưởng cho cơ thể"
          },
          {
            "left": "Calcium & Magnesium balance",
            "right": "Tỷ lệ vàng giữa Canxi và Magie tự nhiên hỗ trợ tế bào"
          },
          {
            "left": "Soft to moderate water hardness",
            "right": "Độ cứng từ mềm đến vừa phải mang lại vị ngọt thanh êm dịu"
          },
          {
            "left": "Silky smooth palate finish",
            "right": "Hậu vị êm mượt không để lại cảm giác lợ miệng"
          }
        ]
      },
      {
        "id": "u68-e2",
        "type": "speak",
        "promptEn": "Speak this water sommelier tasting description clearly:",
        "promptVi": "Luyện nói câu phân tích hương vị khoáng nhẹ thanh khiết của Vikoda như một chuyên gia nếm nước quốc tế:",
        "englishSentence": "With a balanced TDS of four hundred milligrams per liter, Vikoda delivers refreshing hydration without any mineral heaviness.",
        "audioText": "With a balanced TDS of four hundred milligrams per liter, Vikoda delivers refreshing hydration without any mineral heaviness.",
        "phonetics": "/wɪð ə ˈbælənst tiː diː ɛs ɒv fɔːr ˈhʌndrəd ˈmɪlɪɡræmz pər ˈliːtər, vɪˈkoʊdə dɪˈlɪvərz rɪˈfrɛʃɪŋ haɪˈdreɪʃən wɪðˈaʊt ˈɛni ˈmɪnərəl ˈhɛvinəs/",
        "vietnameseMeaning": "Với hàm lượng TDS cân bằng bốn trăm miligam mỗi lít, Vikoda mang đến sự bù nước sảng khoái mà không có bất kỳ cảm giác nồng khoáng nặng nề nào.",
        "explanation": "\"Refreshing hydration without mineral heaviness\" miêu tả chính xác vị ngon thanh dịu độc nhất của mỏ khoáng Đảnh Thạnh.",
        "whyWrong": "Phát âm rõ từ \"mineral heaviness\" (/ˈmɪnərəl ˈhɛvinəs/) và \"balanced TDS\" (/ˈbælənst tiː diː ɛs/).",
        "crucialNote": "Nhiều loại nước khoáng châu Âu có TDS trên 1.500 mg/L thường có vị mặn hoặc lợ rất khó uống hàng ngày.",
        "memoryHook": "Balanced TDS of 400 mg/L delivers hydration without heaviness."
      },
      {
        "id": "u68-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the role of mineral hardness in smooth mouthfeel:",
        "promptVi": "Ghép câu: \"Độ cứng khoáng vừa phải tạo nên hậu vị êm mượt và ngọt dịu tự nhiên trên vòm họng\":",
        "englishSentence": "Moderate mineral hardness creates a wonderfully smooth and sweet aftertaste on the palate.",
        "audioText": "Moderate mineral hardness creates a wonderfully smooth and sweet aftertaste on the palate.",
        "wordPool": [
          "Moderate",
          "mineral",
          "hardness",
          "creates",
          "a",
          "wonderfully",
          "smooth",
          "and",
          "sweet",
          "aftertaste",
          "on",
          "the",
          "palate.",
          "sour",
          "bitter"
        ],
        "vietnameseMeaning": "Độ cứng khoáng vừa phải tạo nên hậu vị êm mượt và ngọt dịu tự nhiên trên vòm họng.",
        "explanation": "Độ cứng từ ion canxi và magie ở mức vừa phải (không quá cứng gây cặn, không quá mềm gây nhạt nhẽo) tạo nên cảm giác tròn vị (well-rounded taste).",
        "whyWrong": "\"Smooth and sweet aftertaste on the palate\" là ngôn ngữ cảm quan tinh tế.",
        "crucialNote": "Thực khách thử nếm mù luôn chọn Vikoda vì hậu vị thanh ngọt dễ chịu.",
        "memoryHook": "Moderate hardness creates smooth, sweet aftertaste on the palate."
      },
      {
        "id": "u68-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct chemical balance term for water taste:",
        "promptVi": "Chọn từ chỉ tỷ lệ khoáng cân bằng tự nhiên giúp nước dễ uống hàng ngày:",
        "englishSentence": "Vikoda is categorized as [ _____ ] mineralized water, making it completely safe for daily drinking across all age groups.",
        "audioText": "Vikoda is categorized as lightly mineralized water, making it completely safe for daily drinking across all age groups.",
        "blankWord": "lightly",
        "options": [
          "lightly",
          "dangerously",
          "heavily"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda được xếp vào nhóm nước khoáng hóa nhẹ, giúp nước hoàn toàn an toàn để uống hàng ngày cho mọi lứa tuổi.",
        "explanation": "\"Lightly mineralized water\" (nước khoáng hóa nhẹ có TDS < 500 mg/L) là khuyến nghị hàng đầu của các tổ chức y tế cho việc bù nước thường xuyên.",
        "whyWrong": "\"Dangerously\" (nguy hiểm) hay \"heavily\" (khoáng nặng chỉ uống theo chỉ định y khoa) không đúng với bản chất Vikoda.",
        "crucialNote": "Thích hợp cho cả trẻ nhỏ, người cao tuổi và phụ nữ mang thai uống liên tục.",
        "memoryHook": "Lightly mineralized = Khoáng hóa nhẹ an toàn uống mỗi ngày."
      },
      {
        "id": "u68-e5",
        "type": "chat_branch",
        "promptEn": "Consult a World Barista Champion looking for ideal brewing water on WhatsApp:",
        "promptVi": "Mô phỏng tin nhắn: Quán quân pha chế cà phê Barista thế giới hỏi về chỉ số TDS và độ cứng của Vikoda để chiết xuất Espresso đỉnh cao:",
        "englishSentence": "Vikoda features ideal specialty coffee water chemistry: 400 TDS with balanced Ca/Mg ratios and natural pH 9.0 that buffers chlorogenic coffee acidity for sweeter crema!",
        "audioText": "Vikoda features ideal specialty coffee water chemistry: 400 TDS with balanced Ca/Mg ratios and natural pH 9.0 that buffers chlorogenic coffee acidity for sweeter crema!",
        "chatMessages": [
          {
            "speaker": "James (World Barista Champion & Coffee Roaster)",
            "avatar": "☕",
            "message": "Minh, we are competing at the World Barista Championship. Coffee extraction requires precise mineral hardness. How does Vikoda handle light-roast Geisha coffee?"
          }
        ],
        "chatOptions": [
          {
            "text": "Vikoda features ideal specialty coffee water chemistry: 400 TDS with balanced Ca/Mg ratios and natural pH 9.0 that buffers chlorogenic coffee acidity for sweeter crema!",
            "trustScore": 25,
            "feedback": "Kiến thức khoa học pha chế cà phê đỉnh cao! Phân tích rõ tỷ lệ Ca/Mg giúp chiết xuất hương vị trái cây và độ kiềm pH 9.0 trung hòa vị chua gắt của axit chlorogenic, tạo nên lớp crema ngọt ngào tuyệt hảo cho cà phê đặc sản.",
            "isCorrect": true
          },
          {
            "text": "Water is just water, coffee will taste like black mud no matter what water you boil.",
            "trustScore": 0,
            "feedback": "Xúc phạm nghệ thuật cà phê! Barista vô địch thế giới sẽ không bao giờ hợp tác.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Vikoda sở hữu thành phần hóa học nước lý tưởng cho cà phê đặc sản: TDS 400 với tỷ lệ Canxi/Magie cân bằng và độ pH 9.0 tự nhiên giúp trung hòa vị chua của axit chlorogenic, mang lại lớp crema ngọt ngào hơn hẳn!",
        "explanation": "Nước chiếm 98% tách cà phê. Nước khoáng kiềm tự nhiên với độ cứng cân bằng là bí quyết đoạt giải của các Barista hàng đầu thế giới.",
        "crucialNote": "Mở ra thị trường tiêu thụ đầy tiềm năng tại hàng nghìn quán cà phê Specialty cao cấp.",
        "memoryHook": "Balanced Ca/Mg and pH 9.0 buffers coffee acidity for sweet crema."
      }
    ]
  },
  {
    "id": "unit-69",
    "unitNumber": 69,
    "title": "Phòng Quản Lý Chất Lượng QA/QC",
    "subtitle": "Tiêu chuẩn kiểm nghiệm vi sinh và giám sát an toàn",
    "level": "B2",
    "icon": "🔬",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u69-e1",
        "type": "match_pairs",
        "promptEn": "Match quality assurance and control (QA/QC) laboratory procedures with their goals:",
        "promptVi": "Ghép cặp các quy trình kiểm soát chất lượng QA/QC nhà máy với mục tiêu:",
        "englishSentence": "Match QA/QC laboratory procedures.",
        "audioText": "Match QA/QC laboratory procedures.",
        "explanation": "5 công đoạn giám định chất lượng khắt khe bảo đảm mỗi chai nước xuất xưởng đều đạt chuẩn 100%.",
        "vietnameseMeaning": "Ghép đúng 5 cặp quy trình kiểm soát chất lượng QA/QC nhà máy.",
        "pairs": [
          {
            "left": "Hourly microbiological sampling",
            "right": "Lấy mẫu xét nghiệm vi sinh định kỳ mỗi giờ một lần"
          },
          {
            "left": "In-line spectrophotometry",
            "right": "Đo quang phổ liên tục trên dây chuyền để phát hiện tạp chất"
          },
          {
            "left": "Capping torque integrity test",
            "right": "Kiểm tra lực siết nắp chai chống xì ga và rò rỉ nước"
          },
          {
            "left": "Retained sample archive",
            "right": "Lưu giữ mẫu đối chứng trong kho lạnh suốt hai mươi tư tháng"
          },
          {
            "left": "Certificate of Analysis (COA)",
            "right": "Phiếu phân tích kết quả kiểm nghiệm xuất xưởng cho từng lô hàng"
          }
        ]
      },
      {
        "id": "u69-e2",
        "type": "speak",
        "promptEn": "Speak this rigorous QA/QC inspection protocol clearly:",
        "promptVi": "Luyện nói câu khẳng định quy trình kiểm nghiệm chất lượng nghiêm ngặt của phòng QA/QC:",
        "englishSentence": "Our QA/QC team performs microbiological and capping torque inspections every single hour to ensure zero defect release.",
        "audioText": "Our QA/QC team performs microbiological and capping torque inspections every single hour to ensure zero defect release.",
        "phonetics": "/ˈaʊər kjuː eɪ kjuː siː tiːm pərˈfɔːrmz ˌmaɪkroʊˌbaɪəˈlɒdʒɪkəl ænd ˈkæpɪŋ tɔːrk ɪnˈspɛkʃənz ˈɛvri ˈsɪŋɡl ˈaʊər tuː ɪnˈʃʊər ˈzɪəroʊ ˈdiːfɛkt rɪˈliːs/",
        "vietnameseMeaning": "Đội ngũ QA/QC của chúng tôi thực hiện kiểm tra vi sinh và lực siết nắp chai mỗi giờ một lần để bảo đảm không có sản phẩm lỗi nào được xuất kho.",
        "explanation": "\"Every single hour to ensure zero defect release\" khẳng định kỷ luật giám sát không ngừng nghỉ.",
        "whyWrong": "Phát âm chuẩn từ \"capping torque\" (/ˈkæpɪŋ tɔːrk/ - lực siết nắp) và \"inspections\" (/ɪnˈspɛkʃənz/).",
        "crucialNote": "Không một pallet hàng nào được phép rời kho nếu chưa có chữ ký nghiệm thu của Trưởng phòng QC.",
        "memoryHook": "Hourly inspections ensure zero defect release."
      },
      {
        "id": "u69-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the quarantine protocol before shipment release:",
        "promptVi": "Ghép câu: \"Mỗi lô sản xuất đều được cách ly kiểm dịch cho đến khi có phê duyệt phân tích của phòng thí nghiệm\":",
        "englishSentence": "Every production lot is quarantined until laboratory analysis approval is granted.",
        "audioText": "Every production lot is quarantined until laboratory analysis approval is granted.",
        "wordPool": [
          "Every",
          "production",
          "lot",
          "is",
          "quarantined",
          "until",
          "laboratory",
          "analysis",
          "approval",
          "is",
          "granted.",
          "sold",
          "lost"
        ],
        "vietnameseMeaning": "Mỗi lô sản xuất đều được cách ly kiểm dịch cho đến khi có phê duyệt phân tích của phòng thí nghiệm.",
        "explanation": "Quy trình cách ly kiểm dịch (Quarantine Protocol) 48 giờ để nuôi cấy vi sinh vật đảm bảo nước hoàn toàn vô trùng trước khi phân phối ra thị trường.",
        "whyWrong": "\"Quarantined until approval is granted\" là quy định bắt buộc trong quản trị dược phẩm và đồ uống cao cấp.",
        "crucialNote": "Khu vực kho lưu giữ hàng chờ kết quả được dán nhãn cảnh báo màu vàng.",
        "memoryHook": "Quarantined until lab approval is granted."
      },
      {
        "id": "u69-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct official export document issued by QC:",
        "promptVi": "Chọn thuật ngữ viết tắt của phiếu phân tích kiểm nghiệm chất lượng đi kèm mỗi lô hàng xuất xưởng:",
        "englishSentence": "The export shipment cannot clear customs without an official [ _____ ] signed by our QA Director.",
        "audioText": "The export shipment cannot clear customs without an official COA signed by our QA Director.",
        "blankWord": "COA",
        "options": [
          "COA",
          "VIP",
          "SOS"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Lô hàng xuất khẩu không thể thông quan nếu thiếu phiếu phân tích chất lượng (COA) chính thức có chữ ký của Giám đốc QA.",
        "explanation": "COA (Certificate of Analysis) là tài liệu pháp lý bắt buộc trong thương mại quốc tế chứng minh các chỉ số hóa lý và vi sinh của lô hàng.",
        "whyWrong": "\"VIP\" (khách quan trọng) hay \"SOS\" (tín hiệu cấp cứu) không phải là chứng từ phân tích chất lượng.",
        "crucialNote": "COA ghi rõ ngày sản xuất, số lô, hàm lượng ion khoáng và kết quả vi sinh âm tính.",
        "memoryHook": "Official COA = Certificate of Analysis = Phiếu phân tích chất lượng."
      },
      {
        "id": "u69-e5",
        "type": "chat_branch",
        "promptEn": "Review automated optical camera inspection data with the plant QA lead on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Trưởng phòng QA gửi báo cáo hệ thống camera quang học AI kiểm tra nắp chai và mức nước chiết rót tự động:",
        "englishSentence": "Superb data! The optical inspection cameras rejected zero bottles today, confirming 100% cap seal alignment and accurate liquid fill levels across all shifts.",
        "audioText": "Superb data! The optical inspection cameras rejected zero bottles today, confirming 100% cap seal alignment and accurate liquid fill levels across all shifts.",
        "chatMessages": [
          {
            "speaker": "Loan (Head of QA/QC, Vikoda Plant)",
            "avatar": "🔍",
            "message": "Minh, we just pulled the 24-hour optical AI camera inspection log for the Tokyo export batch. Fill-level tolerance was ±1mm across 100,000 bottles."
          }
        ],
        "chatOptions": [
          {
            "text": "Superb data! The optical inspection cameras rejected zero bottles today, confirming 100% cap seal alignment and accurate liquid fill levels across all shifts.",
            "trustScore": 25,
            "feedback": "Đánh giá quản lý chất lượng xuất sắc! Biểu dương độ chính xác dung sai ±1mm của hệ thống camera quang học AI, bảo đảm 100.000 chai xuất khẩu sang Tokyo đều chuẩn chỉnh như một.",
            "isCorrect": true
          },
          {
            "text": "Cameras are useless, just let workers look at the bottles while chatting on their phones.",
            "trustScore": 0,
            "feedback": "Coi thường công nghệ tự động hóa! Sẽ để lọt sản phẩm lỗi sang thị trường Nhật Bản khắt khe.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Số liệu tuyệt hảo! Các camera quang học kiểm tra không phải loại bỏ chai nào hôm nay, khẳng định 100% nắp chai thẳng hàng kín khí và mức nước chiết rót chuẩn xác trong tất cả các ca.",
        "explanation": "Hệ thống kiểm tra quang học tự động (Automated Optical Inspection) loại bỏ hoàn toàn yếu tố sai sót chủ quan của mắt người.",
        "crucialNote": "Thị trường Nhật Bản soi xét từng milimét chiều cao mức nước trong chai.",
        "memoryHook": "100% cap seal alignment and accurate fill levels."
      }
    ]
  },
  {
    "id": "unit-70",
    "unitNumber": 70,
    "title": "Bảo Trì Thiết Bị & Khắc Phục Sự Cố",
    "subtitle": "Báo cáo hỏng hóc máy móc và quy trình sửa chữa",
    "level": "B2",
    "icon": "🔧",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u70-e1",
        "type": "match_pairs",
        "promptEn": "Match equipment maintenance and engineering troubleshooting terms:",
        "promptVi": "Ghép cặp thuật ngữ bảo trì phòng ngừa và khắc phục sự cố máy móc nhà xưởng:",
        "englishSentence": "Match machinery maintenance and troubleshooting terms.",
        "audioText": "Match machinery maintenance and troubleshooting terms.",
        "explanation": "5 thuật ngữ kỹ thuật bảo dưỡng giúp duy trì độ bền máy móc và triệt tiêu nguy cơ dừng dây chuyền đột xuất.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ bảo trì thiết bị và sửa chữa sự cố.",
        "pairs": [
          {
            "left": "Preventive maintenance schedule",
            "right": "Lịch bảo trì phòng ngừa định kỳ ngăn ngừa sự cố"
          },
          {
            "left": "Standard operating procedure (SOP)",
            "right": "Quy trình thao tác chuẩn bảo dưỡng kỹ thuật nghiêm ngặt"
          },
          {
            "left": "Original German spare parts",
            "right": "Phụ tùng thay thế chính hãng nhập khẩu từ Đức"
          },
          {
            "left": "Sensor calibration routine",
            "right": "Quy trình hiệu chuẩn cảm biến đo lường định kỳ"
          },
          {
            "left": "Emergency maintenance intervention",
            "right": "Can thiệp xử lý sự cố kỹ thuật khẩn cấp 24/7"
          }
        ]
      },
      {
        "id": "u70-e2",
        "type": "speak",
        "promptEn": "Speak this engineering maintenance commitment clearly:",
        "promptVi": "Luyện nói câu cam kết duy trì lịch bảo trì định kỳ bảo đảm vận hành dây chuyền trơn tru:",
        "englishSentence": "Strict adherence to our preventive maintenance schedule guarantees optimal line efficiency and zero unplanned downtime.",
        "audioText": "Strict adherence to our preventive maintenance schedule guarantees optimal line efficiency and zero unplanned downtime.",
        "phonetics": "/strɪkt ədˈhɪərəns tuː ˈaʊər prɪˈvɛntɪv ˈmeɪntənəns ˈskɛdʒuːl ˌɡærənˈtiːz ˈɒptɪməl laɪn ɪˈfɪʃənsi ænd ˈzɪəroʊ ʌnˈplænd ˈdaʊntaɪm/",
        "vietnameseMeaning": "Việc tuân thủ nghiêm ngặt lịch bảo trì phòng ngừa bảo đảm hiệu suất dây chuyền tối ưu và hoàn toàn không có thời gian dừng máy ngoài kế hoạch.",
        "explanation": "\"Strict adherence to preventive maintenance guarantees zero unplanned downtime\" là tôn chỉ vàng của các kỹ sư bảo trì chuyên nghiệp.",
        "whyWrong": "Phát âm rõ từ \"preventive maintenance\" (/prɪˈvɛntɪv ˈmeɪntənəns/) và \"unplanned downtime\" (/ʌnˈplænd ˈdaʊntaɪm/).",
        "crucialNote": "Bảo trì phòng ngừa trước khi máy hỏng giúp tiết kiệm hàng tỷ đồng chi phí sửa chữa khẩn cấp.",
        "memoryHook": "Adherence to preventive maintenance guarantees zero unplanned downtime."
      },
      {
        "id": "u70-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the standard procedure for sensor lubrication:",
        "promptVi": "Ghép câu: \"Tất cả kỹ thuật viên phải tuân thủ quy trình thao tác chuẩn khi tra dầu bôi trơn máy móc\":",
        "englishSentence": "All technicians must follow standard operating procedures for lubrication and calibration.",
        "audioText": "All technicians must follow standard operating procedures for lubrication and calibration.",
        "wordPool": [
          "All",
          "technicians",
          "must",
          "follow",
          "standard",
          "operating",
          "procedures",
          "for",
          "lubrication",
          "and",
          "calibration.",
          "ignore",
          "break"
        ],
        "vietnameseMeaning": "Tất cả kỹ thuật viên phải tuân thủ các quy trình thao tác chuẩn về bôi trơn và hiệu chuẩn.",
        "explanation": "Dầu mỡ bôi trơn trong nhà máy thực phẩm và đồ uống phải là dầu mỡ an toàn thực phẩm (Food-grade lubricant H1) đạt chuẩn NSF.",
        "whyWrong": "Tuyệt đối không dùng dầu nhớt công nghiệp thông thường gần khu vực chiết rót nước uống.",
        "crucialNote": "Tuân thủ SOP tránh nhiễm bẩn dầu vào sản phẩm.",
        "memoryHook": "Follow standard operating procedures for lubrication."
      },
      {
        "id": "u70-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for critical replacement machine components:",
        "promptVi": "Chọn từ chính xác chỉ kho linh kiện phụ tùng thay thế sẵn có:",
        "englishSentence": "We keep an extensive inventory of genuine spare [ _____ ] to resolve any mechanical wear immediately.",
        "audioText": "We keep an extensive inventory of genuine spare parts to resolve any mechanical wear immediately.",
        "blankWord": "parts",
        "options": [
          "parts",
          "books",
          "tickets"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Chúng tôi duy trì một kho lưu trữ phong phú các phụ tùng thay thế chính hãng để xử lý bất kỳ hao mòn cơ khí nào ngay lập tức.",
        "explanation": "\"Genuine spare parts\" (phụ tùng thay thế chính hãng) nhập khẩu trực tiếp từ nhà sản xuất Krones bảo đảm máy móc luôn vận hành chuẩn xác.",
        "whyWrong": "\"Books\" (sách) hay \"tickets\" (vé xe) không phải là linh kiện cơ khí nhà máy.",
        "crucialNote": "Gioăng cao su, van chiết rót, vòng bi chịu nhiệt luôn có sẵn trong kho kỹ thuật.",
        "memoryHook": "Genuine spare parts resolve mechanical wear immediately."
      },
      {
        "id": "u70-e5",
        "type": "chat_branch",
        "promptEn": "Coordinate swift maintenance resolution during scheduled line pause on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Trưởng ca kỹ thuật báo cáo đã hoàn thành thay thế vòng đệm làm kín van chiết rót trong vòng 20 phút trước khi bắt đầu ca chiều:",
        "englishSentence": "Outstanding work, Technical Team! Pressure tests confirm zero leakage. Line 1 is fully sterilized and cleared for full-speed production.",
        "audioText": "Outstanding work, Technical Team! Pressure tests confirm zero leakage. Line 1 is fully sterilized and cleared for full-speed production.",
        "chatMessages": [
          {
            "speaker": "Huy (Chief Maintenance Engineer)",
            "avatar": "🔧",
            "message": "Minh, we just completed the scheduled gasket replacement on filling valve #14 in 20 minutes flat. Pressure test at 4.0 bar is holding perfectly."
          }
        ],
        "chatOptions": [
          {
            "text": "Outstanding work, Technical Team! Pressure tests confirm zero leakage. Line 1 is fully sterilized and cleared for full-speed production.",
            "trustScore": 25,
            "feedback": "Phối hợp điều hành nhà máy mẫu mực! Biểu dương tốc độ bảo trì 20 phút của đội kỹ thuật, xác nhận kiểm tra áp suất không rò rỉ và tiệt trùng dây chuyền sẵn sàng chạy hết tốc lực.",
            "isCorrect": true
          },
          {
            "text": "Why did you waste 20 minutes? You should let the valve leak water on the floor forever.",
            "trustScore": 0,
            "feedback": "Thiếu hiểu biết kỹ thuật! Van rò rỉ sẽ làm nhiễm khuẩn và gây thất thoát hàng nghìn lít nước khoáng quý giá.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Công việc xuất sắc lắm, Đội Kỹ thuật! Kiểm tra áp suất xác nhận không hề rò rỉ. Dây chuyền 1 đã được tiệt trùng hoàn toàn và sẵn sàng cho sản xuất hết công suất.",
        "explanation": "Bảo trì nhanh chóng và chuẩn xác trong khung giờ nghỉ giúp nhà máy duy trì tỷ lệ vận hành liên tục (Continuous Uptime) trên 99%.",
        "crucialNote": "Tinh thần phối hợp ăn ý giữa Sản xuất và Kỹ thuật bảo trì là động lực tăng trưởng.",
        "memoryHook": "Pressure tests confirm zero leakage; cleared for full-speed production."
      }
    ]
  },
  {
    "id": "unit-71",
    "unitNumber": 71,
    "title": "Đàm Phán Chiết Khấu Theo Sản Lượng Volume",
    "subtitle": "Cơ chế bậc thang chiết khấu thúc đẩy đơn hàng lớn",
    "level": "B2",
    "icon": "📈",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u71-e1",
        "type": "match_pairs",
        "promptEn": "Match volume discount negotiation and incentive rebate terms:",
        "promptVi": "Ghép cặp các thuật ngữ đàm phán chiết khấu bậc thang theo sản lượng tiêu thụ:",
        "englishSentence": "Match volume discount and tiered rebate terms.",
        "audioText": "Match volume discount and tiered rebate terms.",
        "explanation": "5 thuật ngữ tài chính đàm phán kích thích đối tác gom đơn hàng lớn để nhận chiết khấu cao.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ chiết khấu thương mại theo sản lượng.",
        "pairs": [
          {
            "left": "Volume discount tier",
            "right": "Bậc thang chiết khấu giảm giá theo số lượng thùng hàng"
          },
          {
            "left": "Sliding scale pricing",
            "right": "Biểu giá lũy tiến linh hoạt giảm dần theo quy mô đơn hàng"
          },
          {
            "left": "Annual volume commitment",
            "right": "Cam kết tổng sản lượng tiêu thụ tối thiểu cả năm"
          },
          {
            "left": "Quarterly sales incentive",
            "right": "Thưởng khuyến khích doanh số vượt chỉ tiêu hàng quý"
          },
          {
            "left": "Full container load (FCL) bonus",
            "right": "Thưởng ưu đãi chi phí khi bốc đủ nguyên một container"
          }
        ]
      },
      {
        "id": "u71-e2",
        "type": "speak",
        "promptEn": "Speak this volume discount proposal clearly to a major beverage buyer:",
        "promptVi": "Luyện nói câu đề xuất chính sách chiết khấu bậc thang theo sản lượng đơn hàng:",
        "englishSentence": "By increasing your monthly order to twenty thousand cases, your company unlocks our tier-three volume discount of fifteen percent.",
        "audioText": "By increasing your monthly order to twenty thousand cases, your company unlocks our tier-three volume discount of fifteen percent.",
        "phonetics": "/baɪ ɪnˈkriːsɪŋ jʊər ˈmʌnθli ˈɔːrdər tuː ˈtwɛnti ˈθaʊzənd ˈkeɪsɪz, jʊər ˈkʌmpəni ʌnˈlɒks ˈaʊər tɪər θriː ˈvɒljuːm ˈdɪskaʊnt ɒv ˈfɪfˈtiːn pərˈsɛnt/",
        "vietnameseMeaning": "Bằng việc nâng đơn hàng hàng tháng lên hai mươi nghìn thùng, công ty của bạn sẽ mở khóa mức chiết khấu sản lượng bậc ba mười lăm phần trăm.",
        "explanation": "\"By increasing your order to [Số lượng], your company unlocks [Mức chiết khấu]\" là kỹ thuật đàm phán kinh điển thúc đẩy khách nâng quy mô mua sắm.",
        "whyWrong": "Dùng từ ngữ tích cực \"unlocks our discount\" (mở khóa ưu đãi) tạo cảm giác đối tác đạt được một thành tựu lớn.",
        "crucialNote": "Đơn hàng càng lớn giúp nhà máy tối ưu hóa chi phí vận hành dây chuyền và cước xe tải.",
        "memoryHook": "Increase order to unlock tier-three volume discount."
      },
      {
        "id": "u71-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the logistics efficiency of full container load orders:",
        "promptVi": "Ghép câu: \"Đặt hàng nguyên container giúp tối ưu hóa chi phí vận chuyển và đẩy nhanh tiến độ giao hàng\":",
        "englishSentence": "Ordering full container loads optimizes freight costs and expedites shipping turnaround.",
        "audioText": "Ordering full container loads optimizes freight costs and expedites shipping turnaround.",
        "wordPool": [
          "Ordering",
          "full",
          "container",
          "loads",
          "optimizes",
          "freight",
          "costs",
          "and",
          "expedites",
          "shipping",
          "turnaround.",
          "delay",
          "waste"
        ],
        "vietnameseMeaning": "Đặt hàng nguyên container giúp tối ưu hóa chi phí vận chuyển và đẩy nhanh tiến độ giao hàng.",
        "explanation": "Đơn hàng FCL (Full Container Load) luôn được các hãng tàu biển ưu tiên bốc xếp nhanh hơn hàng lẻ LCL.",
        "whyWrong": "\"Optimizes freight costs\" (tối ưu hóa cước vận tải) giúp chia nhỏ chi phí trên từng chai nước xuống mức thấp nhất.",
        "crucialNote": "Một container 40ft chở được khoảng 2.000 thùng carton nước khoáng 500ml.",
        "memoryHook": "Full container loads optimize freight costs and turnaround."
      },
      {
        "id": "u71-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct commercial term for tiered incentive structures:",
        "promptVi": "Chọn thuật ngữ biểu giá linh hoạt theo nấc thang số lượng đặt hàng:",
        "englishSentence": "Our sales contract incorporates a sliding [ _____ ] mechanism to reward higher procurement volume.",
        "audioText": "Our sales contract incorporates a sliding scale mechanism to reward higher procurement volume.",
        "blankWord": "scale",
        "options": [
          "scale",
          "door",
          "bridge"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hợp đồng mua bán của chúng tôi tích hợp cơ chế biểu giá lũy tiến để tưởng thưởng cho sản lượng mua hàng cao hơn.",
        "explanation": "\"Sliding scale\" (biểu giá lũy tiến trượt) là mô hình định giá tiêu chuẩn trong thương mại quốc tế: Mua càng nhiều, đơn giá càng rẻ.",
        "whyWrong": "\"Door\" (cửa sổ) hay \"bridge\" (cây cầu) không mang ý nghĩa biểu giá kinh tế.",
        "crucialNote": "Minh bạch các nấc thang sản lượng giúp đại lý chủ động gom đơn tích lũy.",
        "memoryHook": "Sliding scale mechanism = Cơ chế biểu giá lũy tiến."
      },
      {
        "id": "u71-e5",
        "type": "chat_branch",
        "promptEn": "Structure a win-win volume rebate tier with a supermarket procurement head on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc mua hàng chuỗi siêu thị VinMart muốn đàm phán thêm 2% chiết khấu nếu cam kết bao tiêu 50.000 thùng trong mùa hè:",
        "englishSentence": "Agreed! If your chain exceeds 50,000 cases between May and August, we will grant an additional 2% retrospective bonus rebate at the end of Q3.",
        "audioText": "Agreed! If your chain exceeds 50,000 cases between May and August, we will grant an additional 2% retrospective bonus rebate at the end of Q3.",
        "chatMessages": [
          {
            "speaker": "Huy (Category Director, WinCommerce)",
            "avatar": "🛒",
            "message": "Minh, we are planning a massive summer hydration festival across 3,000 stores. Can you offer an extra 2% margin if we commit to 50,000 cases?"
          }
        ],
        "chatOptions": [
          {
            "text": "Agreed! If your chain exceeds 50,000 cases between May and August, we will grant an additional 2% retrospective bonus rebate at the end of Q3.",
            "trustScore": 25,
            "feedback": "Chốt deal xuất sắc win-win đôi bên cùng thắng! Đồng ý mức thưởng thêm 2% nhưng gắn chặt vào điều kiện đạt chỉ tiêu 50.000 thùng và chi trả dưới dạng thưởng hồi tố cuối quý, vừa thúc đẩy doanh số bùng nổ vừa an toàn dòng tiền.",
            "isCorrect": true
          },
          {
            "text": "No, 50,000 cases is nothing to us, we don't care about your stores.",
            "trustScore": 0,
            "feedback": "Hủy hoại doanh thu! Đánh mất cơ hội bán 50.000 thùng hàng vào hệ thống siêu thị lớn nhất Việt Nam.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Đồng ý! Nếu hệ thống của quý vị vượt 50.000 thùng từ tháng 5 đến tháng 8, chúng tôi sẽ trao thêm 2% tiền thưởng chiết khấu hồi tố vào cuối Quý 3.",
        "explanation": "Chiết khấu hồi tố thưởng doanh số (Bonus Rebate) tạo động lực mãnh liệt cho đội ngũ nhân viên siêu thị đẩy mạnh bán hàng Vikoda.",
        "crucialNote": "Mùa hè là mùa vàng tiêu thụ nước khoáng thiên nhiên.",
        "memoryHook": "Exceed 50,000 cases to grant additional 2% retrospective rebate."
      }
    ]
  },
  {
    "id": "unit-72",
    "unitNumber": 72,
    "title": "Thương Thảo Hạn Mức Tín Dụng & Thanh Toán",
    "subtitle": "Đàm phán tỷ lệ đặt cọc 30% và thanh toán trước giao hàng",
    "level": "B2",
    "icon": "💰",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u72-e1",
        "type": "match_pairs",
        "promptEn": "Match international trade finance and credit risk terms with their meanings:",
        "promptVi": "Ghép cặp các thuật ngữ tài trợ thương mại quốc tế và quản trị rủi ro tín dụng thanh toán:",
        "englishSentence": "Match international credit and payment terms.",
        "audioText": "Match international credit and payment terms.",
        "explanation": "5 công cụ bảo lãnh tài chính quốc tế bảo đảm an toàn dòng vốn thu hồi 100%.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ hạn mức tín dụng và phương thức thanh toán quốc tế.",
        "pairs": [
          {
            "left": "Irrevocable Letter of Credit (L/C)",
            "right": "Thư tín dụng không thể hủy ngang do ngân hàng bảo lãnh"
          },
          {
            "left": "30% advance deposit",
            "right": "Tiền đặt cọc ứng trước ba mươi phần trăm khi ký hợp đồng"
          },
          {
            "left": "Balance against Bill of Lading",
            "right": "Thanh toán phần còn lại ngay khi xuất trình vận đơn đường biển"
          },
          {
            "left": "Credit ceiling limit",
            "right": "Hạn mức nợ tối đa cho phép đối với đại lý chiến lược"
          },
          {
            "left": "Telegraphic Transfer (T/T)",
            "right": "Phương thức chuyển tiền điện tử trực tiếp qua ngân hàng"
          }
        ]
      },
      {
        "id": "u72-e2",
        "type": "speak",
        "promptEn": "Speak this firm export payment terms clause clearly:",
        "promptVi": "Luyện nói câu khẳng định điều kiện thanh toán xuất khẩu tiêu chuẩn của Vikoda:",
        "englishSentence": "Our export credit policy requires thirty percent advance deposit via T/T, with the seventy percent balance payable against the original Bill of Lading.",
        "audioText": "Our export credit policy requires thirty percent advance deposit via T/T, with the seventy percent balance payable against the original Bill of Lading.",
        "phonetics": "/ˈaʊər ˈɛkspɔːrt ˈkrɛdɪt ˈpɒləsi rɪˈkwaɪərz ˈθɜːrti pərˈsɛnt ədˈvɑːns dɪˈpɒzɪt ˈvaɪə tiː tiː, wɪð ðə ˈsɛvənti pərˈsɛnt ˈbæləns ˈpeɪəbl əˈɡɛnst ðiː əˈrɪdʒɪnl bɪl ɒv ˈleɪdɪŋ/",
        "vietnameseMeaning": "Chính sách tín dụng xuất khẩu của chúng tôi yêu cầu đặt cọc trước 30% qua chuyển khoản T/T, với 70% số tiền còn lại được thanh toán khi xuất trình vận đơn đường biển gốc.",
        "explanation": "\"30% advance deposit via T/T, balance payable against original Bill of Lading\" là công thức thanh toán thương mại quốc tế vàng (T/T 30/70) an toàn tuyệt đối cho bên bán.",
        "whyWrong": "Phát âm rõ từ \"advance deposit\" (/ədˈvɑːns dɪˈpɒzɪt/) và \"Bill of Lading\" (/bɪl ɒv ˈleɪdɪŋ/).",
        "crucialNote": "Không bao giờ thả hàng lên tàu mà không thu đủ 30% tiền cọc sản xuất.",
        "memoryHook": "30% advance deposit, 70% balance against Bill of Lading."
      },
      {
        "id": "u72-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the security of an irrevocable Letter of Credit:",
        "promptVi": "Ghép câu: \"Thư tín dụng không thể hủy ngang từ một ngân hàng hạng nhất bảo đảm an toàn thanh toán tuyệt đối\":",
        "englishSentence": "An irrevocable Letter of Credit from a top-tier bank guarantees total payment security.",
        "audioText": "An irrevocable Letter of Credit from a top-tier bank guarantees total payment security.",
        "wordPool": [
          "An",
          "irrevocable",
          "Letter",
          "of",
          "Credit",
          "from",
          "a",
          "top-tier",
          "bank",
          "guarantees",
          "total",
          "payment",
          "security.",
          "loss",
          "danger"
        ],
        "vietnameseMeaning": "Thư tín dụng không thể hủy ngang từ một ngân hàng hạng nhất bảo đảm an toàn thanh toán tuyệt đối.",
        "explanation": "Phương thức L/C trả ngay tại ngân hàng quốc tế uy tín (Standard Chartered, HSBC, Citibank) triệt tiêu hoàn toàn rủi ro người mua quỵt tiền.",
        "whyWrong": "\"Guarantees total payment security\" khẳng định ngân hàng phát hành chịu trách nhiệm thanh toán vô điều kiện.",
        "crucialNote": "Bộ chứng từ xuất trình L/C phải sạch lỗi không có bất kỳ sai sót chính tả nào.",
        "memoryHook": "Irrevocable L/C from top-tier bank guarantees payment security."
      },
      {
        "id": "u72-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct financial term for the maximum credit exposure:",
        "promptVi": "Chọn thuật ngữ chỉ hạn mức dư nợ tối đa cho phép đối với một khách hàng doanh nghiệp:",
        "englishSentence": "Our financial committee approved an increased credit [ _____ ] of one hundred thousand dollars for your account.",
        "audioText": "Our financial committee approved an increased credit ceiling of one hundred thousand dollars for your account.",
        "blankWord": "ceiling",
        "options": [
          "ceiling",
          "blanket",
          "pillow"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hội đồng tài chính của chúng tôi đã phê duyệt nâng hạn mức tín dụng trần lên một trăm nghìn đô la cho tài khoản của bạn.",
        "explanation": "\"Credit ceiling\" hoặc \"credit limit\" là mức trần nợ cho phép dựa trên lịch sử thanh toán uy tín và năng lực tài chính của đại lý.",
        "whyWrong": "\"Blanket\" (chiếc chăn) hay \"pillow\" (chiếc gối) là đồ dùng phòng ngủ hoàn toàn vô nghĩa trong tài chính.",
        "crucialNote": "Đại lý thanh toán sòng phẳng đúng hạn Net 30 sẽ được tự động nâng hạn mức trần.",
        "memoryHook": "Approved credit ceiling = Phê duyệt hạn mức tín dụng trần."
      },
      {
        "id": "u72-e5",
        "type": "chat_branch",
        "promptEn": "Negotiate payment terms with an international distributor requesting 100% credit on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Nhà nhập khẩu đồ uống Philippines mới ký hợp đồng lần đầu đòi thanh toán 100% trả chậm sau 60 ngày:",
        "englishSentence": "For our initial partnership, we can offer 30% deposit with 70% against B/L. Once we establish a 6-month proven track record, we can transition to Net 30 terms!",
        "audioText": "For our initial partnership, we can offer 30% deposit with 70% against B/L. Once we establish a 6-month proven track record, we can transition to Net 30 terms!",
        "chatMessages": [
          {
            "speaker": "Ramon (Managing Director, Manila Beverage Imports)",
            "avatar": "🇵🇭",
            "message": "Minh, we want to import 3 containers. But our company policy prohibits any advance deposit. We only buy on 60-day open credit."
          }
        ],
        "chatOptions": [
          {
            "text": "For our initial partnership, we can offer 30% deposit with 70% against B/L. Once we establish a 6-month proven track record, we can transition to Net 30 terms!",
            "trustScore": 25,
            "feedback": "Quản trị rủi ro tín dụng xuất khẩu xuất sắc! Kiên quyết giữ nguyên tắc cọc 30% cho đơn hàng đầu tiên để bảo vệ vốn doanh nghiệp, đồng thời mở ra lộ trình trả chậm Net 30 sau 6 tháng hợp tác uy tín.",
            "isCorrect": true
          },
          {
            "text": "Okay, take all 3 containers for free and pay us next year if you remember.",
            "trustScore": 0,
            "feedback": "Mất trắng tài sản! Rủi ro bị lừa đảo quốc tế dẫn đến mất hàng chục container không thể đòi lại.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Đối với quan hệ hợp tác ban đầu, chúng tôi có thể đưa ra điều kiện cọc 30% và 70% thanh toán khi xuất trình vận đơn. Sau khi hai bên đã thiết lập lịch sử giao dịch uy tín trong 6 tháng, chúng tôi có thể chuyển sang điều khoản trả chậm Net 30!",
        "explanation": "Nguyên tắc quản trị rủi ro xuất khẩu: Khách hàng mới bắt buộc phải có tiền cọc hoặc L/C không hủy ngang.",
        "crucialNote": "Đưa ra lộ trình nới lỏng tín dụng (Credit Road Map) giữ chân khách hàng thiện chí.",
        "memoryHook": "Initial 30% deposit, transition to Net 30 after 6-month track record."
      }
    ]
  },
  {
    "id": "unit-73",
    "unitNumber": 73,
    "title": "Đưa Hàng Vào Chuỗi Siêu Thị Hiện Đại MT",
    "subtitle": "Thương thảo phí mở mã hàng và chương trình khuyến mãi kệ",
    "level": "B2",
    "icon": "🏬",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u73-e1",
        "type": "match_pairs",
        "promptEn": "Match Modern Trade (MT) supermarket listing terms with their commercial functions:",
        "promptVi": "Ghép cặp các thuật ngữ thương thảo đưa hàng vào chuỗi siêu thị kênh hiện đại (Modern Trade):",
        "englishSentence": "Match Modern Trade supermarket listing terms.",
        "audioText": "Match Modern Trade supermarket listing terms.",
        "explanation": "5 thuật ngữ mấu chốt để đàm phán hợp đồng cung ứng với các tập đoàn bán lẻ AEON, Central, WinCommerce.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ đàm phán đưa hàng vào siêu thị hiện đại.",
        "pairs": [
          {
            "left": "SKU slotting allowance fee",
            "right": "Phí mở mã hàng niêm yết sản phẩm mới trên quầy kệ"
          },
          {
            "left": "Central distribution center (CDC)",
            "right": "Tổng kho trung chuyển giao hàng tập trung của chuỗi siêu thị"
          },
          {
            "left": "Planogram compliance audit",
            "right": "Kiểm tra sự tuân thủ sơ đồ bố trí gian hàng chuẩn"
          },
          {
            "left": "Promotional trade spend",
            "right": "Ngân sách chiết khấu và quảng bá khuyến mại tại siêu thị"
          },
          {
            "left": "On-shelf availability rate",
            "right": "Tỷ lệ hàng luôn có sẵn trên kệ không bị đứt hàng"
          }
        ]
      },
      {
        "id": "u73-e2",
        "type": "speak",
        "promptEn": "Speak this supermarket category review proposal clearly:",
        "promptVi": "Luyện nói câu đề xuất hợp tác mở mã sản phẩm nước khoáng kiềm với giám đốc ngành hàng siêu thị:",
        "englishSentence": "Listing Vikoda's natural alkaline range will drive category growth and attract health-conscious premium shoppers to your beverage aisle.",
        "audioText": "Listing Vikoda's natural alkaline range will drive category growth and attract health-conscious premium shoppers to your beverage aisle.",
        "phonetics": "/ˈlɪstɪŋ vɪˈkoʊdəz ˈnætʃrəl ˈælkəlaɪn reɪndʒ wɪl draɪv ˈkætɪɡəri ɡroʊθ ænd əˈtrækt hɛlθ ˈkɒnʃəs ˈpriːmiəm ˈʃɒpərz tuː jʊər ˈbɛvərɪdʒ aɪl/",
        "vietnameseMeaning": "Việc mở mã niêm yết dòng sản phẩm kiềm tự nhiên Vikoda sẽ thúc đẩy tăng trưởng toàn ngành hàng và thu hút những người mua sắm cao cấp quan tâm sức khỏe đến quầy đồ uống của quý vị.",
        "explanation": "\"Drive category growth and attract premium shoppers to your aisle\" thuyết phục siêu thị bằng góc nhìn của nhà bán lẻ: sản phẩm giúp họ kiếm thêm khách hàng mới và tăng doanh số giỏ hàng.",
        "whyWrong": "Phát âm chuẩn từ \"category growth\" (/ˈkætɪɡəri ɡroʊθ/) và \"beverage aisle\" (/ˈbɛvərɪdʒ aɪl/).",
        "crucialNote": "Siêu thị chỉ mở mã mới nếu sản phẩm tạo ra tăng trưởng mới thay vì chỉ ăn lấn doanh số của các thương hiệu cũ.",
        "memoryHook": "Listing Vikoda drives category growth and attracts premium shoppers."
      },
      {
        "id": "u73-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the central warehouse logistics delivery process:",
        "promptVi": "Ghép câu: \"Đội xe của chúng tôi giao hàng trực tiếp đến tổng kho trung chuyển của siêu thị mỗi ngày\":",
        "englishSentence": "Our fleet delivers directly to the supermarket central distribution center every day.",
        "audioText": "Our fleet delivers directly to the supermarket central distribution center every day.",
        "wordPool": [
          "Our",
          "fleet",
          "delivers",
          "directly",
          "to",
          "the",
          "supermarket",
          "central",
          "distribution",
          "center",
          "every",
          "day.",
          "lose",
          "broken"
        ],
        "vietnameseMeaning": "Đội xe của chúng tôi giao hàng trực tiếp đến tổng kho trung chuyển của siêu thị mỗi ngày.",
        "explanation": "Giao hàng qua tổng kho CDC (Central Distribution Center) giúp giảm thiểu tắc nghẽn giao thông và chi phí giao từng siêu thị nhỏ lẻ.",
        "whyWrong": "Dùng cụm \"central distribution center\" thể hiện năng lực cung ứng quy mô lớn đồng bộ.",
        "crucialNote": "Tuân thủ nghiêm ngặt khung giờ hẹn giao hàng (Delivery Slot Time) của tổng kho siêu thị.",
        "memoryHook": "Delivers directly to central distribution center every day."
      },
      {
        "id": "u73-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct retail shelf management diagram term:",
        "promptVi": "Chọn thuật ngữ sơ đồ chuẩn chỉ dẫn vị trí và số mặt chai trưng bày trên quầy kệ:",
        "englishSentence": "Our field merchandisers audit the supermarket [ _____ ] weekly to ensure four facings for our 500ml bottles.",
        "audioText": "Our field merchandisers audit the supermarket planogram weekly to ensure four facings for our 500ml bottles.",
        "blankWord": "planogram",
        "options": [
          "planogram",
          "monogram",
          "telegram"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Nhân viên trưng bày của chúng tôi kiểm tra sơ đồ quầy kệ siêu thị hàng tuần để bảo đảm bốn mặt chai quay ra ngoài cho dòng chai 500ml.",
        "explanation": "\"Planogram\" (sơ đồ quy hoạch quầy kệ) là bản thiết kế vị trí trưng bày từng sản phẩm được siêu thị phê duyệt.",
        "whyWrong": "\"Monogram\" (chữ lồng tên) hay \"telegram\" (bức điện tín) không liên quan đến quản trị quầy kệ bán lẻ.",
        "crucialNote": "Giữ đúng số lượng mặt chai (facings) giúp tối ưu hóa tầm nhìn của người mua sắm.",
        "memoryHook": "Audit planogram to ensure four facings on shelf."
      },
      {
        "id": "u73-e5",
        "type": "chat_branch",
        "promptEn": "Negotiate listing slotting fees with a multinational hypermarket commercial director on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc thương mại chuỗi đại siêu thị AEON đòi phí mở mã hàng (Listing fee) 200 triệu đồng cho 3 dòng sản phẩm mới:",
        "englishSentence": "We can agree to the 200 million fee if AEON converts 50% of it into two premium endcap gondola displays during your grand summer festival!",
        "audioText": "We can agree to the 200 million fee if AEON converts 50% of it into two premium endcap gondola displays during your grand summer festival!",
        "chatMessages": [
          {
            "speaker": "Mr. Nakata (Commercial VP, AEON Retail)",
            "avatar": "🏬",
            "message": "Minh, onboarding 3 new Vikoda SKUs into 15 AEON malls requires a 200 million VND upfront slotting fee. Non-negotiable."
          }
        ],
        "chatOptions": [
          {
            "text": "We can agree to the 200 million fee if AEON converts 50% of it into two premium endcap gondola displays during your grand summer festival!",
            "trustScore": 25,
            "feedback": "Chiêu thức đàm phán thương mại siêu đẳng! Chấp nhận con số 200 triệu nhưng chuyển đổi 50% thành quyền lợi thuê 2 kệ đầu dãy (Endcap Gondola) trong đợt lễ hội hè, biến chi phí chết thành công cụ thúc đẩy doanh số bán hàng bùng nổ.",
            "isCorrect": true
          },
          {
            "text": "200 million is extortion! We cancel the deal and will tell police you are taking bribes.",
            "trustScore": 0,
            "feedback": "Cực kỳ thiếu chuyên nghiệp và ngớ ngẩn! Bị tập đoàn đại siêu thị lớn nhất châu Á cấm cửa vĩnh viễn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi có thể đồng ý với mức phí 200 triệu nếu AEON chuyển đổi 50% số tiền đó thành quyền trưng bày hai kệ đầu dãy cao cấp trong đợt lễ hội mùa hè lớn của quý vị!",
        "explanation": "Kỹ thuật biến chi phí mở mã (Sunk Cost) thành quyền lợi trưng bày đắc địa (Sales-generating Asset) là bí quyết của các giám đốc bán hàng hiện đại lão luyện.",
        "crucialNote": "Kệ đầu dãy mang lại doanh số gấp 5 lần so với kệ thông thường.",
        "memoryHook": "Convert slotting fee into premium endcap gondola displays."
      }
    ]
  },
  {
    "id": "unit-74",
    "unitNumber": 74,
    "title": "Đàm Phán Quyền Phân Phối Độc Quyền",
    "subtitle": "Gắn độc quyền vùng với chỉ tiêu doanh số cam kết hàng quý",
    "level": "B2",
    "icon": "⚖️",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u74-e1",
        "type": "match_pairs",
        "promptEn": "Match territory exclusivity contract clauses with their legal purposes:",
        "promptVi": "Ghép cặp các điều khoản hợp đồng phân phối độc quyền với mục đích pháp lý thương mại:",
        "englishSentence": "Match exclusive territory contract clauses.",
        "audioText": "Match exclusive territory contract clauses.",
        "explanation": "5 điều khoản bảo vệ quyền lợi nhà sản xuất khi trao quyền phân phối độc quyền một vùng lãnh thổ.",
        "vietnameseMeaning": "Ghép đúng 5 cặp điều khoản hợp đồng phân phối độc quyền.",
        "pairs": [
          {
            "left": "Territory exclusivity grant",
            "right": "Quyền phân phối độc quyền tại một khu vực địa lý xác định"
          },
          {
            "left": "Minimum quarterly sales quota",
            "right": "Chỉ tiêu sản lượng bán ra tối thiểu cam kết mỗi quý"
          },
          {
            "left": "Automatic termination clause",
            "right": "Điều khoản tự động tước quyền độc quyền nếu không đạt chỉ tiêu"
          },
          {
            "left": "Non-compete covenant",
            "right": "Cam kết không kinh doanh sản phẩm đối thủ cạnh tranh trực tiếp"
          },
          {
            "left": "Annual exclusivity audit",
            "right": "Đánh giá lại hiệu quả phân phối hàng năm trước khi gia hạn"
          }
        ]
      },
      {
        "id": "u74-e2",
        "type": "speak",
        "promptEn": "Speak this firm exclusivity condition clearly to an ambitious distributor:",
        "promptVi": "Luyện nói câu xác lập nguyên tắc gắn liền độc quyền với chỉ tiêu doanh số cam kết:",
        "englishSentence": "Exclusive territory rights are granted exclusively under the condition that your company achieves our agreed quarterly volume targets.",
        "audioText": "Exclusive territory rights are granted exclusively under the condition that your company achieves our agreed quarterly volume targets.",
        "phonetics": "/ɪkˈskluːsɪv ˈtɛrɪtəri raɪts ɑːr ˈɡrɑːntɪd ɪkˈskluːsɪvli ˈʌndər ðə kənˈdɪʃən ðæt jʊər ˈkʌmpəni əˈtʃiːvz ˈaʊər əˈɡriːd ˈkwɔːrtərli ˈvɒljuːm ˈtɑːrɡɪts/",
        "vietnameseMeaning": "Quyền độc quyền địa bàn chỉ được cấp duy nhất với điều kiện công ty của bạn đạt được các chỉ tiêu sản lượng hàng quý đã thỏa thuận của chúng tôi.",
        "explanation": "\"Exclusivity rights are granted under the condition that you achieve quarterly volume targets\" là nguyên tắc bất di bất dịch: Quyền lợi độc quyền luôn đi đôi với nghĩa vụ doanh số.",
        "whyWrong": "Phát âm rõ từ \"exclusively\" (/ɪkˈskluːsɪvli/) và \"quarterly volume targets\" (/ˈkwɔːrtərli ˈvɒljuːm ˈtɑːrɡɪts/).",
        "crucialNote": "Tuyệt đối không cấp độc quyền vô điều kiện tránh tình trạng đại lý ôm địa bàn nhưng không bán hàng.",
        "memoryHook": "Exclusivity is granted under condition of achieving quarterly targets."
      },
      {
        "id": "u74-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the consequence of failing minimum quotas:",
        "promptVi": "Ghép câu: \"Nếu không đạt chỉ tiêu tối thiểu sẽ tự động chuyển đổi sang cơ chế phân phối không độc quyền\":",
        "englishSentence": "Failure to achieve minimum quotas will automatically convert the agreement to a non-exclusive partnership.",
        "audioText": "Failure to achieve minimum quotas will automatically convert the agreement to a non-exclusive partnership.",
        "wordPool": [
          "Failure",
          "to",
          "achieve",
          "minimum",
          "quotas",
          "will",
          "automatically",
          "convert",
          "the",
          "agreement",
          "to",
          "a",
          "non-exclusive",
          "partnership.",
          "reward",
          "win"
        ],
        "vietnameseMeaning": "Việc không đạt chỉ tiêu tối thiểu sẽ tự động chuyển đổi hợp đồng sang quan hệ đối tác không độc quyền.",
        "explanation": "Điều khoản chuyển đổi tự động (Automatic Conversion) bảo vệ nhà sản xuất không bị giam chân tại các thị trường trọng điểm.",
        "whyWrong": "\"Convert to a non-exclusive partnership\" cho phép công ty ký thêm đại lý mới nếu đại lý cũ làm ăn kém hiệu quả.",
        "crucialNote": "Quy định rõ thời gian gia ân (grace period) là 30 ngày trước khi áp dụng điều khoản này.",
        "memoryHook": "Failure to achieve quotas converts agreement to non-exclusive."
      },
      {
        "id": "u74-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct legal restriction term for distributing rival brands:",
        "promptVi": "Chọn thuật ngữ cam kết không phân phối sản phẩm đối thủ cạnh tranh cùng phân khúc:",
        "englishSentence": "The distributor agreed to a strict [ _____ ] covenant prohibiting the sale of rival mineral water brands.",
        "audioText": "The distributor agreed to a strict non-compete covenant prohibiting the sale of rival mineral water brands.",
        "blankWord": "non-compete",
        "options": [
          "non-compete",
          "non-stop",
          "non-smoking"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Nhà phân phối đã đồng ý với cam kết không cạnh tranh nghiêm ngặt nghiêm cấm việc bán các thương hiệu nước khoáng đối thủ.",
        "explanation": "\"Non-compete covenant\" (cam kết không cạnh tranh) bảo đảm đại lý tập trung 100% nguồn lực tiếp thị cho Vikoda.",
        "whyWrong": "\"Non-stop\" (không ngừng) hay \"non-smoking\" (không hút thuốc) hoàn toàn sai lệch ngữ cảnh pháp lý.",
        "crucialNote": "Vi phạm điều khoản này sẽ bị phạt bồi thường hợp đồng và chấm dứt quyền đại lý ngay lập tức.",
        "memoryHook": "Strict non-compete covenant = Cam kết không cạnh tranh nghiêm ngặt."
      },
      {
        "id": "u74-e5",
        "type": "chat_branch",
        "promptEn": "Negotiate territory exclusivity for the Australian market on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Công ty phân phối đồ uống tại Sydney muốn độc quyền nhập khẩu Vikoda trên toàn lãnh thổ nước Úc nhưng chỉ cam kết nhập 1 container thử nghiệm:",
        "englishSentence": "We can grant exclusivity for New South Wales first with a 3-container quarterly commitment. Once nationwide volume hits 10 containers, we will expand to full Australian exclusivity!",
        "audioText": "We can grant exclusivity for New South Wales first with a 3-container quarterly commitment. Once nationwide volume hits 10 containers, we will expand to full Australian exclusivity!",
        "chatMessages": [
          {
            "speaker": "Liam (CEO, Aussie Beverage Gateway Sydney)",
            "avatar": "🇦🇺",
            "message": "Minh, we want exclusive distribution rights for the entire country of Australia, but we will start with just one trial 20ft container to test the waters."
          }
        ],
        "chatOptions": [
          {
            "text": "We can grant exclusivity for New South Wales first with a 3-container quarterly commitment. Once nationwide volume hits 10 containers, we will expand to full Australian exclusivity!",
            "trustScore": 25,
            "feedback": "Chiến lược phân phối quốc tế thông minh tuyệt đỉnh! Không khóa cả một quốc gia rộng lớn chỉ vì 1 container thử nghiệm; thay vào đó cấp độc quyền 1 bang (New South Wales) với cam kết 3 container, rồi mở rộng toàn quốc khi đạt 10 container.",
            "isCorrect": true
          },
          {
            "text": "Sure, take exclusive rights for the whole planet Earth forever, you don't even need to buy anything.",
            "trustScore": 0,
            "feedback": "Hành vi ngây thơ nguy hiểm! Khóa chết thị trường xuất khẩu và không thể bán hàng cho ai khác.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi có thể cấp độc quyền cho bang New South Wales trước với cam kết 3 container mỗi quý. Một khi sản lượng toàn quốc đạt 10 container, chúng tôi sẽ mở rộng quyền độc quyền cho toàn bộ nước Úc!",
        "explanation": "Chiến lược cấp độc quyền theo từng bang/khu vực (Territory Staging) là cách làm bài bản của các tập đoàn xuất khẩu toàn cầu.",
        "crucialNote": "Đảm bảo thị trường Úc phát triển bền vững và không bị đối tác ôm quyền bỏ hoang.",
        "memoryHook": "Grant state exclusivity first, expand to full country as volume grows."
      }
    ]
  },
  {
    "id": "unit-75",
    "unitNumber": 75,
    "title": "Đối Đầu Trực Diện Evian & San Pellegrino",
    "subtitle": "So sánh lợi thế khoáng kiềm tự nhiên pH 9.0 và carbon thấp",
    "level": "B2",
    "icon": "⚔️",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u75-e1",
        "type": "match_pairs",
        "promptEn": "Match competitive benchmarking terms against global imported mineral waters:",
        "promptVi": "Ghép cặp các tiêu chí so sánh đối đầu trực diện giữa Vikoda với các thương hiệu quốc tế Evian và San Pellegrino:",
        "englishSentence": "Match competitive benchmarking terms against global mineral water brands.",
        "audioText": "Match competitive benchmarking terms against global mineral water brands.",
        "explanation": "5 ưu thế vượt trội giúp Vikoda tự tin đánh bại các thương hiệu nhập khẩu đắt đỏ ngay trên sân nhà.",
        "vietnameseMeaning": "Ghép đúng 5 cặp tiêu chí so sánh đối đầu nước khoáng cao cấp.",
        "pairs": [
          {
            "left": "Natural alkaline pH 9.0 edge",
            "right": "Độ kiềm pH 9.0 tự nhiên vượt trội so với nước trung tính pH 7.2 của đối thủ"
          },
          {
            "left": "Low food-mile carbon footprint",
            "right": "Dấu chân carbon thấp nhờ nguồn cung nội địa không phải đi tàu biển vạn dặm"
          },
          {
            "left": "Accessible luxury price point",
            "right": "Định vị giá sang trọng hợp lý hơn từ ba mươi đến bốn mươi phần trăm"
          },
          {
            "left": "Direct blind sensory test",
            "right": "Thử nghiệm nếm mù trực tiếp khẳng định vị ngọt thanh êm dịu"
          },
          {
            "left": "Preserved geological freshness",
            "right": "Độ tươi mới nguyên bản không bị ảnh hưởng bởi vận chuyển container biển dài ngày"
          }
        ]
      },
      {
        "id": "u75-e2",
        "type": "speak",
        "promptEn": "Speak this powerful competitive comparison statement clearly:",
        "promptVi": "Luyện nói câu so sánh ưu thế kiềm tự nhiên và phát thải carbon thấp so với Evian và San Pellegrino:",
        "englishSentence": "While European imports travel over ten thousand miles generating massive maritime carbon emissions, Vikoda delivers natural pH 9.0 freshness sustainably.",
        "audioText": "While European imports travel over ten thousand miles generating massive maritime carbon emissions, Vikoda delivers natural pH 9.0 freshness sustainably.",
        "phonetics": "/waɪl ˌjʊərəˈpiːən ˈɪmpɔːrts ˈtrævl ˈoʊvər tɛn ˈθaʊzənd maɪlz ˈdʒɛnəˌreɪtɪŋ ˈmæsɪv ˈmærɪtaɪm ˈkɑːrbən ɪˈmɪʃənz, vɪˈkoʊdə dɪˈlɪvərz ˈnætʃrəl piː eɪtʃ naɪn ˈfrɛʃnəs səˈsteɪnəbli/",
        "vietnameseMeaning": "Trong khi hàng nhập khẩu châu Âu di chuyển hơn mười nghìn dặm tạo ra lượng khí thải carbon hàng hải khổng lồ, Vikoda mang đến sự tươi mới của độ pH 9.0 tự nhiên một cách bền vững.",
        "explanation": "\"European imports travel over 10,000 miles generating massive maritime carbon emissions\" đánh trúng lương tri bảo vệ môi trường của các nhà quản lý quốc tế.",
        "whyWrong": "Phát âm chuẩn từ \"maritime carbon emissions\" (/ˈmærɪtaɪm ˈkɑːrbən ɪˈmɪʃənz/) và \"sustainably\" (/səˈsteɪnəbli/).",
        "crucialNote": "Evian có độ pH chỉ khoảng 7.2 (trung tính), trong khi Vikoda có độ kiềm vượt trội pH 9.0.",
        "memoryHook": "Avoid massive shipping emissions, choose local pH 9.0 freshness sustainably."
      },
      {
        "id": "u75-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the blind taste testing preference:",
        "promptVi": "Ghép câu: \"Các cuộc thử nếm mù chứng minh khách hàng ưa chuộng hậu vị ngọt dịu tự nhiên của Vikoda hơn\":",
        "englishSentence": "Blind taste tests prove consumers prefer Vikoda's naturally sweet finish over heavily mineralized imports.",
        "audioText": "Blind taste tests prove consumers prefer Vikoda's naturally sweet finish over heavily mineralized imports.",
        "wordPool": [
          "Blind",
          "taste",
          "tests",
          "prove",
          "consumers",
          "prefer",
          "Vikoda's",
          "naturally",
          "sweet",
          "finish",
          "over",
          "heavily",
          "mineralized",
          "imports.",
          "salty",
          "dirty"
        ],
        "vietnameseMeaning": "Các cuộc thử nếm mù chứng minh người tiêu dùng ưa chuộng hậu vị ngọt dịu tự nhiên của Vikoda hơn các loại nước nhập khẩu khoáng nặng.",
        "explanation": "Nhiều loại nước châu Âu có vị lợ hoặc hơi chát do hàm lượng canxi quá đặc. Vikoda có vị khoáng thanh nhẹ ngọt ngào tự nhiên rất hợp khẩu vị châu Á.",
        "whyWrong": "\"Naturally sweet finish\" là cảm nhận vị giác đắt giá nhất.",
        "crucialNote": "Tổ chức thử nếm mù tại chỗ cho ban giám đốc khách sạn nếm thử ngay trên bàn đàm phán.",
        "memoryHook": "Blind tests prove preference for Vikoda's sweet finish."
      },
      {
        "id": "u75-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct environmental footprint measurement term:",
        "promptVi": "Chọn thuật ngữ đo lường quãng đường vận chuyển thực phẩm và khí thải môi trường:",
        "englishSentence": "Vikoda dramatically cuts hotel Scope 3 emissions by eliminating long-haul maritime [ _____ ].",
        "audioText": "Vikoda dramatically cuts hotel Scope 3 emissions by eliminating long-haul maritime shipping.",
        "blankWord": "shipping",
        "options": [
          "shipping",
          "dancing",
          "sleeping"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Vikoda cắt giảm đáng kể lượng phát thải Phạm vi 3 của khách sạn bằng việc loại bỏ vận tải hàng hải đường dài.",
        "explanation": "\"Maritime shipping\" (vận tải đường biển liên lục địa) phát thải hàng nghìn tấn khí nhà kính CO2.",
        "whyWrong": "\"Dancing\" (khiêu vũ) hay \"sleeping\" (ngủ) hoàn toàn vô lý trong báo cáo môi trường ESG.",
        "crucialNote": "Khách sạn sử dụng sản phẩm địa phương cao cấp (Locally sourced luxury) được cộng điểm rất cao trong chứng chỉ xanh Green Globe.",
        "memoryHook": "Cuts Scope 3 emissions by eliminating maritime shipping."
      },
      {
        "id": "u75-e5",
        "type": "chat_branch",
        "promptEn": "Persuade a French GM of a luxury Da Nang resort to replace Evian with Vikoda glass bottles on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Tổng Giám đốc người Pháp của khu nghỉ dưỡng 5 sao Pullman Đà Nẵng băn khoăn liệu khách phương Tây có chấp nhận thay thế Evian bằng chai thủy tinh Vikoda:",
        "englishSentence": "International luxury travelers seek authentic local terroir! Vikoda offers superior pH 9.0 alkaline wellness, 40% cost savings, and saves 12 tons of shipping CO2 annually for your resort.",
        "audioText": "International luxury travelers seek authentic local terroir! Vikoda offers superior pH 9.0 alkaline wellness, 40% cost savings, and saves 12 tons of shipping CO2 annually for your resort.",
        "chatMessages": [
          {
            "speaker": "Laurent (General Manager, Pullman Danang Beach Resort)",
            "avatar": "🇫🇷",
            "message": "Minh, our hotel brand standard has used Evian and San Pellegrino for 20 years. How can I justify to our regional VP replacing iconic European water with Vikoda?"
          }
        ],
        "chatOptions": [
          {
            "text": "International luxury travelers seek authentic local terroir! Vikoda offers superior pH 9.0 alkaline wellness, 40% cost savings, and saves 12 tons of shipping CO2 annually for your resort.",
            "trustScore": 25,
            "feedback": "Cú hích đàm phán hoàn hảo đánh gục Tổng Giám đốc Pháp! Dẫn chứng triết lý bản sắc địa phương 'authentic local terroir' mà giới tinh hoa ưa chuộng, vượt trội về độ kiềm pH 9.0, tiết kiệm 40% chi phí và giảm 12 tấn CO2 vận tải hàng năm.",
            "isCorrect": true
          },
          {
            "text": "Evian is fake water from a sewer in France, you are stupid if you buy Evian.",
            "trustScore": 0,
            "feedback": "Xúc phạm nước Pháp và Tổng Giám đốc! Sẽ bị đuổi khỏi phòng họp ngay lập tức.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Khách du lịch thượng lưu quốc tế tìm kiếm bản sắc tinh hoa địa phương đích thực (terroir)! Vikoda mang lại độ kiềm pH 9.0 vượt trội cho sức khỏe, tiết kiệm 40% chi phí và cắt giảm 12 tấn CO2 vận tải mỗi năm cho khu nghỉ dưỡng của ngài.",
        "explanation": "Từ tiếng Pháp 'Terroir' (tinh hoa thổ nhưỡng địa phương) là ngôn ngữ chạm thẳng vào trái tim của các nhà quản lý người Pháp.",
        "crucialNote": "Biến sản phẩm Việt Nam thành niềm tự hào sánh ngang các thương hiệu huyền thoại thế giới.",
        "memoryHook": "Authentic local terroir, pH 9.0 wellness, 40% savings, cuts 12 tons CO2."
      }
    ]
  },
  {
    "id": "unit-76",
    "unitNumber": 76,
    "title": "Soạn Thảo Hợp Đồng Nguyên Tắc Mua Bán",
    "subtitle": "Điều khoản giao hàng, đổi trả và trách nhiệm các bên",
    "level": "B2",
    "icon": "📜",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u76-e1",
        "type": "match_pairs",
        "promptEn": "Match commercial contract clauses with their legal purposes:",
        "promptVi": "Ghép cặp các điều khoản hợp đồng nguyên tắc mua bán B2B với mục đích pháp lý:",
        "englishSentence": "Match master sales contract clauses.",
        "audioText": "Match master sales contract clauses.",
        "explanation": "5 điều khoản pháp lý cốt tử bảo vệ quyền và nghĩa vụ của các bên trong hợp đồng thương mại.",
        "vietnameseMeaning": "Ghép đúng 5 cặp điều khoản hợp đồng nguyên tắc mua bán hàng hóa.",
        "pairs": [
          {
            "left": "Master sales agreement",
            "right": "Hợp đồng nguyên tắc khung quy định các giao dịch mua bán"
          },
          {
            "left": "Force majeure clause",
            "right": "Điều khoản bất khả kháng miễn trách nhiệm khi có thiên tai bão lũ"
          },
          {
            "left": "Product liability indemnification",
            "right": "Cam kết bồi thường bảo hiểm trách nhiệm sản phẩm"
          },
          {
            "left": "Governing law & jurisdiction",
            "right": "Luật điều chỉnh và cơ quan tài phán giải quyết tranh chấp"
          },
          {
            "left": "Breach of contract penalties",
            "right": "Chế tài xử phạt khi một trong hai bên vi phạm hợp đồng"
          }
        ]
      },
      {
        "id": "u76-e2",
        "type": "speak",
        "promptEn": "Speak this formal contract preamble and commitment clause clearly:",
        "promptVi": "Luyện nói câu cam kết quyền và nghĩa vụ trong hợp đồng nguyên tắc mua bán:",
        "englishSentence": "The master sales agreement establishes binding commitments regarding delivery timelines, quality warranties, and dispute resolution mechanisms.",
        "audioText": "The master sales agreement establishes binding commitments regarding delivery timelines, quality warranties, and dispute resolution mechanisms.",
        "phonetics": "/ðə ˈmæstər seɪlz əˈɡriːmənt ɪˈstæblɪʃɪz ˈbaɪndɪŋ kəˈmɪtmənts rɪˈɡɑːrdɪŋ dɪˈlɪvəri ˈtaɪmlaɪnz, ˈkwɒləti ˈwɒrəntiz, ænd dɪˈspjuːt ˌrɛzəˈluːʃən ˈmɛkənɪzəmz/",
        "vietnameseMeaning": "Hợp đồng nguyên tắc mua bán thiết lập các cam kết có tính ràng buộc pháp lý liên quan đến tiến độ giao hàng, bảo hành chất lượng và cơ chế giải quyết tranh chấp.",
        "explanation": "\"Establishes binding commitments regarding delivery timelines, quality warranties, and dispute resolution\" là ngôn ngữ pháp lý thương mại chuẩn mực quốc tế.",
        "whyWrong": "Phát âm rõ từ \"binding commitments\" (/ˈbaɪndɪŋ kəˈmɪtmənts/) và \"dispute resolution\" (/dɪˈspjuːt ˌrɛzəˈluːʃən/).",
        "crucialNote": "Hợp đồng nguyên tắc khung là nền tảng để ký các phụ lục đơn hàng PO (Purchase Order) hàng tháng.",
        "memoryHook": "Binding commitments regarding delivery, quality warranties, and dispute resolution."
      },
      {
        "id": "u76-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the force majeure exemption clause:",
        "promptVi": "Ghép câu: \"Không bên nào phải chịu trách nhiệm về việc chậm giao hàng do các sự kiện bất khả kháng có thể kiểm chứng\":",
        "englishSentence": "Neither party shall be liable for delivery failures caused by verifiable force majeure events.",
        "audioText": "Neither party shall be liable for delivery failures caused by verifiable force majeure events.",
        "wordPool": [
          "Neither",
          "party",
          "shall",
          "be",
          "liable",
          "for",
          "delivery",
          "failures",
          "caused",
          "by",
          "verifiable",
          "force",
          "majeure",
          "events.",
          "fault",
          "guilt"
        ],
        "vietnameseMeaning": "Không bên nào phải chịu trách nhiệm về các sự cố giao hàng do các sự kiện bất khả kháng có thể kiểm chứng gây ra.",
        "explanation": "Bất khả kháng (Force Majeure) bao gồm động đất, sóng thần, chiến tranh, dịch bệnh hoặc lệnh phong tỏa của chính phủ.",
        "whyWrong": "\"Neither party shall be liable\" là cấu trúc pháp lý mẫu mực miễn trừ trách nhiệm dân sự.",
        "crucialNote": "Bên gặp sự cố phải thông báo bằng văn bản trong vòng 48 giờ kèm xác nhận của cơ quan chức năng.",
        "memoryHook": "Neither party liable for failures caused by force majeure."
      },
      {
        "id": "u76-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct legal dispute settlement mechanism term:",
        "promptVi": "Chọn cơ quan tài phán quốc tế giải quyết tranh chấp hợp đồng thương mại:",
        "englishSentence": "Any unresolved dispute shall be referred to binding [ _____ ] at the Singapore International Arbitration Centre.",
        "audioText": "Any unresolved dispute shall be referred to binding arbitration at the Singapore International Arbitration Centre.",
        "blankWord": "arbitration",
        "options": [
          "arbitration",
          "wrestling",
          "boxing"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Bất kỳ tranh chấp nào không thể hòa giải sẽ được đưa ra trọng tài phân xử có tính ràng buộc tại Trung tâm Trọng tài Quốc tế Singapore (SIAC).",
        "explanation": "\"Binding arbitration\" (trọng tài có tính ràng buộc pháp lý) là phương thức giải quyết tranh chấp thương mại công bằng và nhanh chóng nhất được các tập đoàn tin cậy.",
        "whyWrong": "\"Wrestling\" (đấu vật) hay \"boxing\" (đấm bốc) hoàn toàn phi lý.",
        "crucialNote": "Phán quyết của trọng tài quốc tế được công nhận và thi hành tại hơn 160 quốc gia theo Công ước New York 1958.",
        "memoryHook": "Binding arbitration at Singapore International Arbitration Centre."
      },
      {
        "id": "u76-e5",
        "type": "chat_branch",
        "promptEn": "Finalize master sales contract clauses with the distributor's legal counsel on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Luật sư nội bộ của nhà phân phối Singapore đề xuất sửa đổi điều khoản đổi trả hàng lỗi trong vòng 14 ngày kể từ khi dỡ hàng:",
        "englishSentence": "We accept the 14-day defect notification window. We have updated Clause 8.2 and our General Director has digitally countersigned the final draft!",
        "audioText": "We accept the 14-day defect notification window. We have updated Clause 8.2 and our General Director has digitally countersigned the final draft!",
        "chatMessages": [
          {
            "speaker": "Alicia (General Legal Counsel, RedMart Singapore)",
            "avatar": "⚖️",
            "message": "Minh, our audit team requests extending the latent transit defect notification window from 7 days to 14 days in Clause 8.2. Can you accept this revision?"
          }
        ],
        "chatOptions": [
          {
            "text": "We accept the 14-day defect notification window. We have updated Clause 8.2 and our General Director has digitally countersigned the final draft!",
            "trustScore": 25,
            "feedback": "Kỹ năng đàm phán hợp đồng pháp lý xuất sắc! Nhượng bộ hợp lý về thời hạn báo cáo lỗi 14 ngày (thể hiện sự tự tin tuyệt đối vào chất lượng nước khoáng), cập nhật điều khoản và ký điện tử ngay để chốt hợp đồng lớn.",
            "isCorrect": true
          },
          {
            "text": "No, if you don't sign our original contract today we will sue your company in court.",
            "trustScore": 0,
            "feedback": "Hành vi thù địch ngớ ngẩn! Luật sư đối tác sẽ dừng ngay lập tức mọi giao dịch.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chúng tôi chấp thuận thời hạn thông báo sản phẩm lỗi 14 ngày. Chúng tôi đã cập nhật Điều khoản 8.2 và Tổng Giám đốc chúng tôi đã ký số vào bản thảo cuối cùng!",
        "explanation": "Linh hoạt trong các điều khoản kỹ thuật hợp lý giúp đẩy nhanh tiến độ ký kết hợp đồng thương mại trị giá hàng triệu đô la.",
        "crucialNote": "Chữ ký số DocuSign hoặc Adobe Sign được pháp luật quốc tế công nhận toàn diện.",
        "memoryHook": "Accept 14-day defect window, updated Clause 8.2 and countersigned."
      }
    ]
  },
  {
    "id": "unit-77",
    "unitNumber": 77,
    "title": "Chiến Lược Tái Ký & Giữ Chân Khách B2B",
    "subtitle": "Chương trình tri ân nhà phân phối đạt doanh số vàng",
    "level": "B2",
    "icon": "🔄",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u77-e1",
        "type": "match_pairs",
        "promptEn": "Match B2B customer retention and renewal terms with their commercial strategies:",
        "promptVi": "Ghép cặp các thuật ngữ chiến lược tái ký hợp đồng và giữ chân khách hàng doanh nghiệp B2B:",
        "englishSentence": "Match B2B client retention and contract renewal terms.",
        "audioText": "Match B2B client retention and contract renewal terms.",
        "explanation": "5 chiến thuật thắt chặt mối quan hệ gắn bó, biến đại lý thành bạn đồng hành trọn đời.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ giữ chân khách hàng và tái ký hợp đồng.",
        "pairs": [
          {
            "left": "Customer lifetime value (CLV)",
            "right": "Tổng giá trị doanh thu trọn đời mà một khách hàng mang lại"
          },
          {
            "left": "Contract renewal incentive",
            "right": "Gói ưu đãi khuyến khích tái ký hợp đồng sớm trước hạn"
          },
          {
            "left": "Golden partner loyalty rebate",
            "right": "Chiết khấu tri ân dành riêng cho các đối tác đạt danh hiệu vàng"
          },
          {
            "left": "Quarterly business review (QBR)",
            "right": "Họp đánh giá hiệu quả kinh doanh định kỳ hàng quý cùng đối tác"
          },
          {
            "left": "Zero client churn rate",
            "right": "Duy trì tỷ lệ khách hàng rời bỏ bằng không"
          }
        ]
      },
      {
        "id": "u77-e2",
        "type": "speak",
        "promptEn": "Speak this gracious partnership renewal speech clearly:",
        "promptVi": "Luyện nói câu tri ân đối tác nhân dịp tái ký hợp đồng phân phối năm thứ năm liên tiếp:",
        "englishSentence": "To celebrate our five years of shared success, we are delighted to upgrade your distributor status with our highest tier loyalty rebate.",
        "audioText": "To celebrate our five years of shared success, we are delighted to upgrade your distributor status with our highest tier loyalty rebate.",
        "phonetics": "/tuː ˈsɛlɪbreɪt ˈaʊər faɪv jɪərz ɒv ʃɛərd səkˈsɛs, wiː ɑːr dɪˈlaɪtɪd tuː ʌpˈɡreɪd jʊər dɪˈstrɪbjʊtər ˈsteɪtəs wɪð ˈaʊər ˈhaɪɪst tɪər ˈlɔɪəlti ˈriːbeɪt/",
        "vietnameseMeaning": "Để chào mừng năm năm cùng chia sẻ thành công, chúng tôi rất vui mừng được nâng hạng vị thế nhà phân phối của bạn với mức chiết khấu tri ân cao nhất của chúng tôi.",
        "explanation": "\"To celebrate five years of shared success, we upgrade your status with our highest loyalty rebate\" tôn vinh lòng trung thành và sự cống hiến của đối tác.",
        "whyWrong": "Phát âm rõ từ \"upgrade your distributor status\" (/ʌpˈɡreɪd jʊər dɪˈstrɪbjʊtər ˈsteɪtəs/) và \"loyalty rebate\" (/ˈlɔɪəlti ˈriːbeɪt/).",
        "crucialNote": "Giữ chân 1 khách hàng cũ tiết kiệm chi phí gấp 5 lần so với việc tìm kiếm 1 khách hàng mới.",
        "memoryHook": "Celebrate shared success, upgrade status with highest loyalty rebate."
      },
      {
        "id": "u77-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the strategic timing of contract renewal talks:",
        "promptVi": "Ghép câu: \"Chúng tôi chủ động bắt đầu các cuộc thảo luận tái ký hợp đồng ba tháng trước khi hết hạn\":",
        "englishSentence": "We initiate proactive contract renewal discussions three months prior to expiration.",
        "audioText": "We initiate proactive contract renewal discussions three months prior to expiration.",
        "wordPool": [
          "We",
          "initiate",
          "proactive",
          "contract",
          "renewal",
          "discussions",
          "three",
          "months",
          "prior",
          "to",
          "expiration.",
          "delay",
          "cancel"
        ],
        "vietnameseMeaning": "Chúng tôi chủ động bắt đầu các cuộc thảo luận tái ký hợp đồng ba tháng trước khi hết hạn.",
        "explanation": "Chủ động đàm phán sớm 90 ngày (3 months prior) ngăn chặn đối thủ chen chân và bảo đảm không có ngày nào bị đứt gãy hợp đồng.",
        "whyWrong": "\"Three months prior to expiration\" là thông lệ quản trị khách hàng B2B chuyên nghiệp.",
        "crucialNote": "Chuẩn bị sẵn báo cáo tổng kết doanh số và các số liệu tăng trưởng ấn tượng trong năm qua.",
        "memoryHook": "Initiate proactive renewal discussions 3 months prior."
      },
      {
        "id": "u77-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct business metric for customer loyalty:",
        "promptVi": "Chọn chỉ số đo lường tỷ lệ khách hàng ngưng hợp tác cần phải triệt tiêu:",
        "englishSentence": "Our dedicated account management team achieved a near-zero customer [ _____ ] rate this fiscal year.",
        "audioText": "Our dedicated account management team achieved a near-zero customer churn rate this fiscal year.",
        "blankWord": "churn",
        "options": [
          "churn",
          "party",
          "holiday"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Đội ngũ quản lý tài khoản tận tâm của chúng tôi đã đạt được tỷ lệ rời bỏ khách hàng gần như bằng không trong năm tài chính này.",
        "explanation": "\"Customer churn rate\" (tỷ lệ khách hàng rời bỏ) là chỉ số sống còn của mọi doanh nghiệp phát triển bền vững.",
        "whyWrong": "\"Party\" hay \"holiday\" không phải là chỉ số đo lường sự gắn kết khách hàng.",
        "crucialNote": "Tỷ lệ giữ chân khách hàng (Retention Rate) của Vikoda đạt trên 98% qua từng năm.",
        "memoryHook": "Near-zero customer churn rate = Tỷ lệ rời bỏ gần như bằng không."
      },
      {
        "id": "u77-e5",
        "type": "chat_branch",
        "promptEn": "Celebrate a 3-year partnership milestone with a Korean supermarket franchise CEO on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Chủ tịch chuỗi siêu thị Hàn Quốc tại Việt Nam K-Market gửi lời chúc mừng tròn 3 năm đồng hành cùng Vikoda:",
        "englishSentence": "Thank you Chairman Kim! To honor our 3-year journey, our Board has reserved 10 exclusive factory VIP tour packages for your top store managers!",
        "audioText": "Thank you Chairman Kim! To honor our 3-year journey, our Board has reserved 10 exclusive factory VIP tour packages for your top store managers!",
        "chatMessages": [
          {
            "speaker": "Chairman Kim (K-Market Retail Group Korea)",
            "avatar": "🇰🇷",
            "message": "Minh, today marks exactly 3 years since our first Vikoda shipment. Our 80 stores have sold over 2 million bottles. Looking forward to renewing for another 3 years!"
          }
        ],
        "chatOptions": [
          {
            "text": "Thank you Chairman Kim! To honor our 3-year journey, our Board has reserved 10 exclusive factory VIP tour packages for your top store managers!",
            "trustScore": 25,
            "feedback": "Nghệ thuật chăm sóc đối tác vàng đỉnh cao! Tri ân cột mốc 2 triệu chai bằng gói nghỉ dưỡng và tham quan mỏ khoáng Đảnh Thạnh 5 sao cho các quản lý siêu thị xuất sắc của đối tác, thắt chặt tình thâm giao bền chặt.",
            "isCorrect": true
          },
          {
            "text": "3 years is nothing special, just send the contract and wire money quickly.",
            "trustScore": 0,
            "feedback": "Lạnh lùng và vô ơn! Làm tổn thương đối tác chiến lược đã đồng hành suốt 3 năm.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Cảm ơn Chủ tịch Kim! Để tôn vinh chặng đường 3 năm của chúng ta, Ban Giám đốc chúng tôi đã dành tặng 10 gói trải nghiệm tour VIP nhà máy độc quyền cho các giám đốc cửa hàng xuất sắc nhất của ngài!",
        "explanation": "Tri ân nhân sự tuyến đầu của đối tác (cửa hàng trưởng siêu thị) giúp họ càng thêm yêu mến và ưu tiên bán hàng Vikoda tại các điểm bán.",
        "crucialNote": "Quan hệ B2B bền vững được xây dựng trên sự tôn trọng và tình cảm chân thành giữa con người với con người.",
        "memoryHook": "Honor 3-year journey with exclusive factory VIP packages."
      }
    ]
  },
  {
    "id": "unit-78",
    "unitNumber": 78,
    "title": "Kỹ Thuật Đóng Deal Trong 48 Giờ",
    "subtitle": "Tạo cảm giác cấp bách bằng giới hạn thời gian ưu đãi",
    "level": "B2",
    "icon": "⏳",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u78-e1",
        "type": "match_pairs",
        "promptEn": "Match deal closing urgency techniques with their negotiation psychology:",
        "promptVi": "Ghép cặp các kỹ thuật tạo tính cấp bách (Strategic Urgency) để chốt hợp đồng trong 48 giờ:",
        "englishSentence": "Match rapid deal closing urgency techniques.",
        "audioText": "Match rapid deal closing urgency techniques.",
        "explanation": "5 đòn bẩy tâm lý thúc đẩy đối tác đặt bút ký hợp đồng ngay lập tức mà không chần chừ do dự.",
        "vietnameseMeaning": "Ghép đúng 5 cặp kỹ thuật đóng hợp đồng thần tốc trong 48 giờ.",
        "pairs": [
          {
            "left": "Strategic closing urgency",
            "right": "Tạo động lực cấp bách chiến lược thúc đẩy ra quyết định nhanh"
          },
          {
            "left": "Time-sensitive promotional incentive",
            "right": "Gói ưu đãi khuyến mại có giới hạn thời gian nghiêm ngặt"
          },
          {
            "left": "Priority production slot allocation",
            "right": "Khóa chỗ ưu tiên chạy máy chiết rót cho đơn hàng chốt sớm"
          },
          {
            "left": "Impending wholesale price revision",
            "right": "Cảnh báo trước đợt điều chỉnh tăng giá xuất xưởng sắp tới"
          },
          {
            "left": "Fast-track onboarding protocol",
            "right": "Quy trình kích hoạt giao hàng siêu tốc trong vòng hai mươi tư giờ"
          }
        ]
      },
      {
        "id": "u78-e2",
        "type": "speak",
        "promptEn": "Speak this compelling 48-hour closing proposal clearly:",
        "promptVi": "Luyện nói câu tạo tính cấp bách chốt hợp đồng trong 48 giờ với đối tác còn do dự:",
        "englishSentence": "By signing the distribution agreement within forty-eight hours, your company secures our promotional launch pricing and priority export production slots.",
        "audioText": "By signing the distribution agreement within forty-eight hours, your company secures our promotional launch pricing and priority export production slots.",
        "phonetics": "/baɪ ˈsaɪnɪŋ ðə ˌdɪstrɪˈbjuːʃən əˈɡriːmənt wɪðˈɪn ˈfɔːrti eɪt ˈaʊərz, jʊər ˈkʌmpəni sɪˈkjʊərz ˈaʊər prəˈmoʊʃənl lɔːntʃ ˈpraɪsɪŋ ænd praɪˈɒrəti ˈɛkspɔːrt prəˈdʌkʃən slɒts/",
        "vietnameseMeaning": "Bằng việc ký hợp đồng phân phối trong vòng bốn mươi tám giờ, công ty của bạn sẽ giữ được mức giá ra mắt ưu đãi và các suất chạy máy sản xuất xuất khẩu ưu tiên.",
        "explanation": "\"By signing within 48 hours, you secure launch pricing and priority production slots\" đánh trúng tâm lý sợ bỏ lỡ cơ hội (FOMO) của người làm kinh doanh.",
        "whyWrong": "Phát âm rõ từ \"priority export production slots\" (/praɪˈɒrəti ˈɛkspɔːrt prəˈdʌkʃən slɒts/).",
        "crucialNote": "Lý do cấp bách phải hợp lý và chân thật: Dây chuyền Krones đang kín lịch sản xuất cho các đơn hàng xuất khẩu châu Âu.",
        "memoryHook": "Signing in 48 hours secures launch pricing and priority slots."
      },
      {
        "id": "u78-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to explain the consequence of missing the deadline:",
        "promptVi": "Ghép câu: \"Việc hoàn tất hợp đồng trước thứ Sáu bảo đảm quyền tiếp cận ngân sách tiếp thị ra mắt thị trường\":",
        "englishSentence": "Finalizing the agreement before Friday secures access to our dedicated launch marketing fund.",
        "audioText": "Finalizing the agreement before Friday secures access to our dedicated launch marketing fund.",
        "wordPool": [
          "Finalizing",
          "the",
          "agreement",
          "before",
          "Friday",
          "secures",
          "access",
          "to",
          "our",
          "dedicated",
          "launch",
          "marketing",
          "fund.",
          "delay",
          "loss"
        ],
        "vietnameseMeaning": "Việc hoàn tất hợp đồng trước thứ Sáu bảo đảm quyền tiếp cận ngân sách tiếp thị ra mắt thị trường của chúng tôi.",
        "explanation": "Tặng kèm gói ngân sách marketing chỉ dành cho những đối tác quyết đoán ký hợp đồng đúng thời hạn.",
        "whyWrong": "Dùng từ chỉ thời điểm cụ thể \"before Friday\" tạo mốc giới hạn rõ ràng.",
        "crucialNote": "Không gia hạn tùy tiện làm mất uy tín của lời cam kết thời gian.",
        "memoryHook": "Finalizing before Friday secures launch marketing fund."
      },
      {
        "id": "u78-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct term for time-bound negotiation offers:",
        "promptVi": "Chọn thuật ngữ chỉ ưu đãi thương mại có thời hạn hiệu lực nghiêm ngặt:",
        "englishSentence": "This introductory volume rebate is strictly [ _____ ] to contracts countersigned within forty-eight hours.",
        "audioText": "This introductory volume rebate is strictly subject to contracts countersigned within forty-eight hours.",
        "blankWord": "subject",
        "options": [
          "subject",
          "object",
          "grammar"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Mức chiết khấu sản lượng mở màn này chỉ áp dụng nghiêm ngặt cho các hợp đồng được ký xác nhận trong vòng bốn mươi tám giờ.",
        "explanation": "\"Strictly subject to\" (chỉ áp dụng nghiêm ngặt theo điều kiện) là thuật ngữ pháp lý xác lập giới hạn thời gian không thể thỏa hiệp.",
        "whyWrong": "\"Object\" hay \"grammar\" không mang ý nghĩa điều kiện tiên quyết trong hợp đồng.",
        "crucialNote": "Tạo tính nghiêm túc và giá trị cao cho gói ưu đãi.",
        "memoryHook": "Strictly subject to contracts signed in 48 hours."
      },
      {
        "id": "u78-e5",
        "type": "chat_branch",
        "promptEn": "Close a hesitant beverage distribution director before the monthly deadline on Teams:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc phân phối đang do dự giữa Vikoda và một thương hiệu nước khác vào ngày 28 của tháng:",
        "englishSentence": "Our Krones export batch for Singapore runs this Sunday. Sign today to include your 2 containers on this sailing and save $3,000 in ocean freight surcharges!",
        "audioText": "Our Krones export batch for Singapore runs this Sunday. Sign today to include your 2 containers on this sailing and save $3,000 in ocean freight surcharges!",
        "chatMessages": [
          {
            "speaker": "Anthony (Sourcing VP, Singapore Drinks Network)",
            "avatar": "🇸🇬",
            "message": "Minh, we love the product, but our board meets in two weeks. Can we postpone the contract signing until mid-next month?"
          }
        ],
        "chatOptions": [
          {
            "text": "Our Krones export batch for Singapore runs this Sunday. Sign today to include your 2 containers on this sailing and save $3,000 in ocean freight surcharges!",
            "trustScore": 25,
            "feedback": "Nghệ thuật đóng hợp đồng thần tốc đạt điểm 10 tuyệt đối! Đưa ra lý do chính đáng: Dây chuyền chạy lô xuất khẩu Chủ Nhật này, ký ngay để ghép tàu kịp chuyến và tiết kiệm ngay 3.000 USD phụ phí cước biển. Đối tác sẽ ký ngay trong ngày!",
            "isCorrect": true
          },
          {
            "text": "Sure, wait 2 months or 2 years, we have nothing to do all day anyway.",
            "trustScore": 0,
            "feedback": "Bỏ cuộc thảm hại! Thể hiện sự tuyệt vọng và để tuột mất thương vụ vào tay đối thủ.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Dây chuyền Krones của chúng tôi sẽ chạy lô hàng xuất khẩu sang Singapore vào Chủ Nhật này. Hãy ký hợp đồng hôm nay để ghép 2 container của bạn vào chuyến tàu này và tiết kiệm ngay 3.000 USD phụ phí cước vận tải biển!",
        "explanation": "Gắn liền quyết định ký hợp đồng với lợi ích tài chính cụ thể (tiết kiệm 3.000 USD cước biển) là đòn bẩy đóng deal mạnh mẽ nhất trong xuất nhập khẩu.",
        "crucialNote": "Lịch tàu biển chạy cố định là yếu tố khách quan không thể trì hoãn.",
        "memoryHook": "Sign today to join this sailing and save $3,000 freight."
      }
    ]
  },
  {
    "id": "unit-79",
    "unitNumber": 79,
    "title": "Lễ Ký Kết Hợp Tác Phân Phối Chiến Lược",
    "subtitle": "Nghi thức bắt tay, phát biểu và công bố với báo giới",
    "level": "B2",
    "icon": "🤝",
    "color": "blue",
    "xpReward": 75,
    "gemReward": 25,
    "exercises": [
      {
        "id": "u79-e1",
        "type": "match_pairs",
        "promptEn": "Match strategic signing ceremony protocol and media terms with their definitions:",
        "promptVi": "Ghép cặp các thuật ngữ nghi thức lễ ký kết hợp tác chiến lược và họp báo truyền thông:",
        "englishSentence": "Match strategic partnership signing ceremony terms.",
        "audioText": "Match strategic partnership signing ceremony terms.",
        "explanation": "5 nghi thức ngoại giao trang trọng đánh dấu cột mốc liên minh kinh tế giữa hai tập đoàn.",
        "vietnameseMeaning": "Ghép đúng 5 cặp thuật ngữ lễ ký kết hợp tác chiến lược.",
        "pairs": [
          {
            "left": "Strategic signing ceremony",
            "right": "Lễ ký kết hợp tác phân phối chiến lược trọng thể"
          },
          {
            "left": "Memorandum of Understanding (MOU)",
            "right": "Biên bản ghi nhớ hợp tác chiến lược khung toàn diện"
          },
          {
            "left": "Joint media press release",
            "right": "Thông cáo báo chí chung gửi các cơ quan truyền thông"
          },
          {
            "left": "Exchange of signed portfolios",
            "right": "Nghi thức trao đổi cặp bìa hồ sơ hợp đồng đã ký kết"
          },
          {
            "left": "Firm bilateral executive handshake",
            "right": "Cái bắt tay nồng ấm và kiên định giữa hai vị lãnh đạo"
          }
        ]
      },
      {
        "id": "u79-e2",
        "type": "speak",
        "promptEn": "Speak this triumphant signing ceremony keynote statement clearly:",
        "promptVi": "Luyện nói lời phát biểu trang trọng tại lễ ký kết hợp tác phân phối chiến lược:",
        "englishSentence": "Today's signing ceremony marks an exciting milestone as we unite our strengths to deliver pristine natural alkaline water to global markets.",
        "audioText": "Today's signing ceremony marks an exciting milestone as we unite our strengths to deliver pristine natural alkaline water to global markets.",
        "phonetics": "/təˈdeɪz ˈsaɪnɪŋ ˈsɛrɪmoʊni mɑːrks ən ɪkˈsaɪtɪŋ ˈmaɪlstoʊn æz wiː juːˈnaɪt ˈaʊər strɛŋkθs tuː dɪˈlɪvər ˈprɪstiːn ˈnætʃrəl ˈælkəlaɪn ˈwɔːtər tuː ˈɡloʊbəl ˈmɑːrkɪts/",
        "vietnameseMeaning": "Lễ ký kết ngày hôm nay đánh dấu một cột mốc đầy phấn khởi khi chúng ta hợp nhất sức mạnh để đưa nguồn nước khoáng kiềm thiên nhiên thuần khiết đến với các thị trường toàn cầu.",
        "explanation": "\"Today's signing marks an exciting milestone as we unite our strengths...\" là câu phát biểu truyền cảm hứng dồi dào, tôn vinh mối liên minh chiến lược giữa hai doanh nghiệp.",
        "whyWrong": "Nói với chất giọng dõng dạc, ánh mắt rạng ngời và nụ cười tự hào trước ống kính phóng viên.",
        "crucialNote": "Đứng ngay ngắn bên cạnh đối tác, cầm bìa hồ sơ màu xanh Cyan thương hiệu Vikoda.",
        "memoryHook": "Signing marks an exciting milestone as we unite our strengths."
      },
      {
        "id": "u79-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to describe the exchange of signed contract binders:",
        "promptVi": "Ghép câu: \"Cả hai vị lãnh đạo điều hành đã trao đổi các cặp bìa hợp đồng đã ký trong tiếng vỗ tay nồng nhiệt\":",
        "englishSentence": "Both executive leaders exchanged signed contract binders amidst warm applause from the audience.",
        "audioText": "Both executive leaders exchanged signed contract binders amidst warm applause from the audience.",
        "wordPool": [
          "Both",
          "executive",
          "leaders",
          "exchanged",
          "signed",
          "contract",
          "binders",
          "amidst",
          "warm",
          "applause",
          "from",
          "the",
          "audience.",
          "fight",
          "shout"
        ],
        "vietnameseMeaning": "Cả hai vị lãnh đạo điều hành đã trao đổi các cặp bìa hợp đồng đã ký trong tiếng vỗ tay nồng nhiệt từ cử tọa.",
        "explanation": "Nghi thức trao đổi cặp bìa hợp đồng (Exchange of Binders) là khoảnh khắc lịch sử được ghi lại trên các trang báo kinh tế hàng đầu.",
        "whyWrong": "\"Amidst warm applause\" miêu tả bầu không khí trang trọng và hân hoan của buổi lễ.",
        "crucialNote": "Cúi đầu nhẹ và bắt tay chúc mừng sau khi trao bìa hợp đồng.",
        "memoryHook": "Exchanged signed contract binders amidst warm applause."
      },
      {
        "id": "u79-e4",
        "type": "fill_blank",
        "promptEn": "Select the correct official corporate media announcement term:",
        "promptVi": "Chọn thuật ngữ chỉ bản thông cáo chính thức gửi đến các cơ quan báo chí truyền thông:",
        "englishSentence": "The corporate communications department distributed the joint [ _____ ] release to national news agencies.",
        "audioText": "The corporate communications department distributed the joint press release to national news agencies.",
        "blankWord": "press",
        "options": [
          "press",
          "iron",
          "laundry"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Phòng truyền thông đối ngoại đã phát hành bản thông cáo báo chí chung đến các hãng thông tấn quốc gia.",
        "explanation": "\"Press release\" (thông cáo báo chí) là tài liệu truyền thông chính thống công bố thỏa thuận hợp tác thương mại lớn.",
        "whyWrong": "\"Iron\" (bàn ủi) hay \"laundry\" (tiệm giặt là) hoàn toàn sai lệch ngữ cảnh truyền thông.",
        "crucialNote": "Thông cáo báo chí nêu bật quy mô phân phối và mục tiêu bảo vệ sức khỏe cộng đồng của hai bên.",
        "memoryHook": "Distributed the joint press release = Phát hành thông cáo báo chí chung."
      },
      {
        "id": "u79-e5",
        "type": "chat_branch",
        "promptEn": "Coordinate immediate post-signing media rollout with the partner PR head on Slack:",
        "promptVi": "Mô phỏng tin nhắn: Giám đốc truyền thông đối tác thông báo báo chí đang chờ phỏng vấn ngắn sau lễ ký kết:",
        "englishSentence": "Perfect! Our General Director is ready. We have prepared the media briefing kits and product gift boxes featuring our glass bottle collection.",
        "audioText": "Perfect! Our General Director is ready. We have prepared the media briefing kits and product gift boxes featuring our glass bottle collection.",
        "chatMessages": [
          {
            "speaker": "Mai (PR VP, Central Group Communications)",
            "avatar": "📸",
            "message": "Minh, reporters from Forbes and Vietnam News are in the press room for the 10-minute executive Q&A. Are your leaders ready?"
          }
        ],
        "chatOptions": [
          {
            "text": "Perfect! Our General Director is ready. We have prepared the media briefing kits and product gift boxes featuring our glass bottle collection.",
            "trustScore": 25,
            "feedback": "Phối hợp truyền thông sự kiện xuất sắc! Sẵn sàng cho phiên họp báo với Forbes và Vietnam News kèm bộ thông tin báo chí và hộp quà chai thủy tinh cao cấp, tối đa hóa hiệu ứng truyền thông cho thương hiệu.",
            "isCorrect": true
          },
          {
            "text": "Tell the reporters to go home, we don't talk to journalists.",
            "trustScore": 0,
            "feedback": "Thái độ thô lỗ và tự cô lập truyền thông! Bỏ lỡ cơ hội vàng xuất hiện trên các trang bìa tạp chí tài chính uy tín.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Hoàn hảo! Tổng Giám đốc của chúng tôi đã sẵn sàng. Chúng tôi đã chuẩn bị sẵn bộ tài liệu báo chí và các hộp quà sản phẩm giới thiệu bộ sưu tập chai thủy tinh cao cấp.",
        "explanation": "Tận dụng triệt để sức mạnh truyền thông ngay tại lễ ký kết giúp nâng cao định giá thương hiệu và khẳng định uy tín trên thị trường chứng khoán.",
        "crucialNote": "Hộp quà chai thủy tinh Vikoda luôn là món quà gây ấn tượng sâu sắc nhất với giới báo chí.",
        "memoryHook": "Prepared media briefing kits and glass bottle gift boxes."
      }
    ]
  },
  {
    "id": "unit-80",
    "unitNumber": 80,
    "title": "Mốc Tốt Nghiệp Bậc Thầy Bán Hàng B2B",
    "subtitle": "Kỳ thi sát hạch toàn bộ kỹ năng đàm phán hợp đồng thương mại",
    "level": "B2",
    "icon": "🎓",
    "color": "blue",
    "xpReward": 100,
    "gemReward": 50,
    "exercises": [
      {
        "id": "u80-e1",
        "type": "match_pairs",
        "promptEn": "Capstone Grand Match: Pair the 5 B2B Commercial Master competencies of Level B2:",
        "promptVi": "Đại Thử Thách Tốt Nghiệp B2: Ghép 5 trụ cột năng lực Bậc Thầy Đàm Phán Thương Mại B2B:",
        "englishSentence": "Match the 5 cornerstone competencies of Level B2.",
        "audioText": "Match the 5 cornerstone competencies of Level B2.",
        "explanation": "5 đỉnh cao năng lực thương mại biến bạn thành chuyên gia đàm phán hợp đồng triệu đô cho tập đoàn.",
        "vietnameseMeaning": "Ghép đúng 5 chuẩn năng lực Bậc Thầy Bán Hàng B2B Cấp độ B2.",
        "pairs": [
          {
            "left": "Value-Based Margin Defense",
            "right": "Bảo vệ kiên cường biên lợi nhuận bằng đòn bẩy giá trị dịch vụ"
          },
          {
            "left": "International Credit & L/C Risk",
            "right": "Quản trị rủi ro thanh toán quốc tế bằng thư tín dụng không hủy ngang"
          },
          {
            "left": "Modern Trade Channel Mastery",
            "right": "Làm chủ quy trình thương thảo quầy kệ chuỗi siêu thị đại chúng"
          },
          {
            "left": "Strategic 48-Hour Deal Closing",
            "right": "Nghệ thuật chốt hợp đồng thần tốc tạo tính cấp bách khôn khéo"
          },
          {
            "left": "Long-Term Alliance Retention",
            "right": "Chiến lược nuôi dưỡng và giữ chân đối tác chiến lược trọn đời"
          }
        ]
      },
      {
        "id": "u80-e2",
        "type": "speak",
        "promptEn": "Speak this triumphant Level B2 Commercial Master graduation pledge clearly:",
        "promptVi": "Luyện nói lời tuyên thệ tốt nghiệp Cấp độ B2 Bậc Thầy Bán Hàng Thương Mại B2B:",
        "englishSentence": "I am fully empowered as a B2B Commercial Master, defending enterprise margins, negotiating multi-million dollar agreements, and expanding Vikoda's global footprint.",
        "audioText": "I am fully empowered as a B2B Commercial Master, defending enterprise margins, negotiating multi-million dollar agreements, and expanding Vikoda's global footprint.",
        "phonetics": "/aɪ æm ˈfʊli ɪmˈpaʊərd æz ə biː tuː biː kəˈmɜːrʃəl ˈmæstər, dɪˈfɛndɪŋ ˈɛntərpraɪz ˈmɑːrdʒɪnz, nɪˈɡoʊʃieɪtɪŋ ˈmʌlti ˈmɪljən ˈdɒlər əˈɡriːmənts, ænd ɪkˈspændɪŋ vɪˈkoʊdəz ˈɡloʊbəl ˈfʊtprɪnt/",
        "vietnameseMeaning": "Tôi hoàn toàn tự tin đảm nhiệm vị thế Bậc Thầy Thương Mại B2B, bảo vệ biên lợi nhuận doanh nghiệp, đàm phán các hợp đồng triệu đô và mở rộng dấu chân toàn cầu của Vikoda.",
        "explanation": "Lời tuyên thệ tự hào của nhân sự cấp cao nắm vững mọi nghệ thuật đàm phán kinh doanh quốc tế.",
        "whyWrong": "Nói với chất giọng đĩnh đạc, bản lĩnh và đầy uy quyền của một nhà đàm phán xuất chúng.",
        "crucialNote": "Chúc mừng bạn đã hoàn thành 80 bài học danh giá nhất của học viện đào tạo Vikoda!",
        "memoryHook": "Defending margins, negotiating multi-million agreements, expanding global footprint."
      },
      {
        "id": "u80-e3",
        "type": "word_order",
        "promptEn": "Arrange the words to celebrate your Level B2 enterprise milestone:",
        "promptVi": "Ghép câu: \"Chúng tôi đã làm chủ xuất sắc tất cả tám mươi bài học từ Cấp độ A1 đến Cấp độ B2 tại Vikoda\":",
        "englishSentence": "We have successfully mastered all eighty comprehensive units from Level A1 to Level B2 at Vikoda.",
        "audioText": "We have successfully mastered all eighty comprehensive units from Level A1 to Level B2 at Vikoda.",
        "wordPool": [
          "We",
          "have",
          "successfully",
          "mastered",
          "all",
          "eighty",
          "comprehensive",
          "units",
          "from",
          "Level",
          "A1",
          "to",
          "Level",
          "B2",
          "at",
          "Vikoda.",
          "lost",
          "quit"
        ],
        "vietnameseMeaning": "Chúng tôi đã làm chủ xuất sắc tất cả tám mươi bài học toàn diện từ Cấp độ A1 đến Cấp độ B2 tại Vikoda.",
        "explanation": "80 bài học là kho tàng tri thức đồ sộ trang bị toàn diện kỹ năng giao tiếp, vận hành và thương thảo hợp đồng quốc tế.",
        "whyWrong": "\"Mastered all eighty comprehensive units\" là chứng chỉ bản lĩnh cho mọi cuộc đàm phán xuyên quốc gia.",
        "crucialNote": "Sẵn sàng bước vào 20 bài học đỉnh cao cuối cùng: Cấp độ C1-C2 (Chiến lược Xuất khẩu Toàn cầu & Tầm nhìn Ban Điều Hành C-Suite).",
        "memoryHook": "Mastered all eighty comprehensive units from A1 to B2."
      },
      {
        "id": "u80-e4",
        "type": "fill_blank",
        "promptEn": "Select the ultimate keyword for business collaboration:",
        "promptVi": "Chọn từ định nghĩa mục tiêu cao quý nhất của đàm phán thương mại quốc tế bền vững:",
        "englishSentence": "Principled commercial negotiation builds enduring alliances founded upon shared [ _____ ] and mutual trust.",
        "audioText": "Principled commercial negotiation builds enduring alliances founded upon shared prosperity and mutual trust.",
        "blankWord": "prosperity",
        "options": [
          "prosperity",
          "poverty",
          "bankruptcy"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Đàm phán thương mại dựa trên nguyên tắc xây dựng các liên minh bền vững được tạo lập dựa trên sự cùng thịnh vượng và tin cậy lẫn nhau.",
        "explanation": "\"Shared prosperity\" (cùng thịnh vượng - Win-Win) là triết lý kinh doanh bất biến giúp Vikoda trường tồn suốt 68 năm qua.",
        "whyWrong": "\"Poverty\" (nghèo đói) hay \"bankruptcy\" (phá sản) là hậu quả của tư duy kinh doanh chộp giật.",
        "crucialNote": "Thành công của đối tác và khách hàng chính là thành công rực rỡ nhất của Vikoda.",
        "memoryHook": "Enduring alliances founded upon shared prosperity and mutual trust."
      },
      {
        "id": "u80-e5",
        "type": "chat_branch",
        "promptEn": "Capstone B2 Simulation: Close a $10 Million nationwide retail consortium deal on Slack:",
        "promptVi": "Mô phỏng tốt nghiệp B2: Chủ tịch Hiệp hội Bán lẻ Quốc gia đưa ra đề nghị chốt hợp đồng cung ứng độc quyền trị giá 10 triệu USD trên toàn bộ hệ thống đại siêu thị:",
        "englishSentence": "It is an absolute honor, Chairman Le! Our executive board accepts the terms: we guarantee dedicated production line allocation, zero stockouts, and joint nationwide marketing excellence!",
        "audioText": "It is an absolute honor, Chairman Le! Our executive board accepts the terms: we guarantee dedicated production line allocation, zero stockouts, and joint nationwide marketing excellence!",
        "chatMessages": [
          {
            "speaker": "Chairman Le (President, National Hypermarket Consortium)",
            "avatar": "🏆",
            "message": "Minh, after our 3-month rigorous evaluation of your Krones facility, Pasteur lab purity, and commercial flexibility, our board votes unanimously to award Vikoda the $10 Million exclusive mineral water contract for 1,200 stores! Are you ready to execute?"
          }
        ],
        "chatOptions": [
          {
            "text": "It is an absolute honor, Chairman Le! Our executive board accepts the terms: we guarantee dedicated production line allocation, zero stockouts, and joint nationwide marketing excellence!",
            "trustScore": 25,
            "feedback": "Tốt nghiệp Xuất Sắc 100% Cấp Độ B2 Bậc Thầy Đàm Phán B2B! Đóng thành công thương vụ lịch sử trị giá 10 triệu USD cho 1.200 đại siêu thị toàn quốc, mở ra kỷ nguyên phát triển vượt bậc cho tập đoàn Vikoda!",
            "isCorrect": true
          },
          {
            "text": "10 million dollars is too much work for us, we just want to sit in the office and sleep.",
            "trustScore": 0,
            "feedback": "Thất bại thảm hại! Vứt bỏ hợp đồng 10 triệu USD vào tay đối thủ.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thật là một vinh dự tuyệt đối, thưa Chủ tịch Lê! Ban điều hành của chúng tôi đồng thuận chấp thuận các điều khoản: chúng tôi cam kết dành riêng dây chuyền sản xuất ưu tiên, bảo đảm không bao giờ đứt hàng và phối hợp tiếp thị xuất sắc trên toàn quốc!",
        "explanation": "Đỉnh cao của nghệ thuật đàm phán B2B: Biến sự chuyên nghiệp, chuẩn mực kỹ thuật và năng lực cung ứng thành bản hợp đồng chiến lược trị giá hàng triệu đô la.",
        "crucialNote": "Chúc mừng bạn đã xuất sắc tốt nghiệp toàn bộ Cấp độ B2 Bậc Thầy Đàm Phán Thương Mại B2B!",
        "memoryHook": "Closed $10 Million exclusive contract for 1,200 stores."
      }
    ]
  },
    {
    "id": "unit-81",
    "unitNumber": 81,
    "title": "Incoterms 2020: FOB Cảng Quy Nhơn vs CIF",
    "subtitle": "Phân định rõ ranh giới rủi ro và chi phí vận chuyển đường biển",
    "level": "C1-C2",
    "icon": "🚢",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u81-e1",
        "type": "match_pairs",
        "promptEn": "Pair each maritime Incoterm and export concept with its precise definition:",
        "promptVi": "Nối các điều khoản Incoterms và thuật ngữ xuất khẩu hàng hải với định nghĩa tương ứng:",
        "englishSentence": "Match the 5 Incoterms 2020 maritime trade definitions.",
        "audioText": "Match the 5 Incoterms 2020 maritime trade definitions.",
        "explanation": "Hiểu chuẩn xác điểm chuyển giao rủi ro giữa FOB và CIF giúp bảo vệ quyền lợi tài chính và trách nhiệm bảo hiểm của doanh nghiệp xuất khẩu.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ Incoterms 2020 và vận tải đường biển quốc tế.",
        "pairs": [
          {
            "left": "FOB Quy Nhon Port",
            "right": "Giao hàng qua lan can tàu tại cảng Quy Nhơn (người bán hết rủi ro)"
          },
          {
            "left": "CIF Tokyo Port",
            "right": "Tiền hàng, phí bảo hiểm và cước tàu đến cảng đến Tokyo"
          },
          {
            "left": "Transfer of Risk",
            "right": "Điểm chuyển giao rủi ro hư hỏng hàng giữa người bán và người mua"
          },
          {
            "left": "Ocean Bill of Lading",
            "right": "Vận đơn đường biển do hãng tàu phát hành xác nhận đã nhận hàng"
          },
          {
            "left": "Terminal Handling Charges",
            "right": "Phụ phí xếp dỡ container tại cầu cảng do người bán chi trả"
          }
        ]
      },
      {
        "id": "u81-e2",
        "type": "speak",
        "promptEn": "Speak this executive trade statement clearly into the microphone:",
        "promptVi": "Luyện nói câu phân định điều kiện xuất khẩu FOB chuẩn phong thái đàm phán quốc tế:",
        "englishSentence": "Under FOB Quy Nhon terms, Vikoda bears all costs and risks until the pallets safely pass the ship's rail onto the ocean vessel.",
        "audioText": "Under FOB Quy Nhon terms, Vikoda bears all costs and risks until the pallets safely pass the ship's rail onto the ocean vessel.",
        "phonetics": "/ˈʌndər ɛf-oʊ-biː kwiː njən tɜːrmz, vɪˈkoʊdə bɛərz ɔːl kɒsts ænd rɪsks ənˈtɪl ðə ˈpælɪts ˈseɪfli pɑːs ðə ʃɪps reɪl ˈɒntuː ði ˈoʊʃən ˈvɛsl/",
        "vietnameseMeaning": "Theo điều kiện FOB Quy Nhơn, Vikoda chịu mọi chi phí và rủi ro cho đến khi các kiện hàng qua lan can tàu an toàn lên tàu viễn dương.",
        "explanation": "Phát âm rõ ràng các danh từ chuyên môn như 'ship's rail', 'ocean vessel' và ngắt nhịp sau trạng ngữ chỉ điều kiện.",
        "whyWrong": "Cần nhấn trọng âm chính vào 'bears all costs and risks' để nhấn mạnh cam kết giới hạn trách nhiệm pháp lý.",
        "crucialNote": "Trong Incoterms 2020, điểm chuyển giao rủi ro FOB là khi hàng được xếp an toàn trên tàu (on board).",
        "memoryHook": "Under FOB terms, risk transfers once goods are on board the vessel."
      },
      {
        "id": "u81-e3",
        "type": "word_order",
        "promptEn": "Arrange the words into a professional maritime trade proposal:",
        "promptVi": "Sắp xếp các thẻ từ thành câu đề xuất điều kiện CIF chuyên nghiệp:",
        "englishSentence": "We recommend CIF Yokohama so our dedicated logistics team manages the maritime insurance and ocean freight.",
        "audioText": "We recommend CIF Yokohama so our dedicated logistics team manages the maritime insurance and ocean freight.",
        "wordPool": [
          "We",
          "recommend",
          "CIF",
          "Yokohama",
          "so",
          "our",
          "dedicated",
          "logistics",
          "team",
          "manages",
          "the",
          "maritime",
          "insurance",
          "and",
          "ocean",
          "freight.",
          "cancel",
          "abandon"
        ],
        "vietnameseMeaning": "Chúng tôi đề xuất điều kiện CIF Yokohama để đội ngũ logistics chuyên trách của chúng tôi quản lý bảo hiểm hàng hải và cước biển.",
        "explanation": "Cấu trúc đề xuất giá trị gia tăng 'We recommend CIF [Port] so that...' thể hiện năng lực điều phối logistics toàn diện của Vikoda.",
        "whyWrong": "Tránh sắp xếp lộn xộn giữa cụm tân ngữ 'maritime insurance and ocean freight'.",
        "crucialNote": "CIF giảm bớt gánh nặng đặt tàu cho đối tác mua nước ngoài, giúp chốt đơn xuất khẩu nhanh hơn.",
        "memoryHook": "We recommend CIF so our logistics team manages insurance and freight."
      },
      {
        "id": "u81-e4",
        "type": "fill_blank",
        "promptEn": "Select the precise trade term to complete the contract clause:",
        "promptVi": "Chọn thuật ngữ thương mại chính xác để hoàn thiện điều khoản hợp đồng:",
        "englishSentence": "Under Incoterms 2020 rules, the seller under CIF contracts must provide ocean cargo insurance with comprehensive [ _____ ] coverage.",
        "audioText": "Under Incoterms 2020 rules, the seller under CIF contracts must provide ocean cargo insurance with comprehensive all-risks coverage.",
        "blankWord": "all-risks",
        "options": [
          "all-risks",
          "unilateral",
          "retroactive"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Theo quy tắc Incoterms 2020, người bán trong hợp đồng CIF phải cung cấp bảo hiểm hàng hóa đường biển với phạm vi bảo hiểm mọi rủi ro.",
        "explanation": "Theo Incoterms 2020, điều kiện CIF mặc định yêu cầu người bán mua bảo hiểm hàng hóa Mức A (Institute Cargo Clauses A - all-risks), trừ khi hai bên có thỏa thuận khác.",
        "whyWrong": "'Unilateral' (đơn phương) và 'retroactive' (hồi tố) hoàn toàn sai lệch ngữ cảnh bảo hiểm hàng hải quốc tế.",
        "crucialNote": "Bảo hiểm 'all-risks' bảo vệ lô hàng Vikoda trước các tổn thất do thời tiết, ngấm nước biển và bốc dỡ.",
        "memoryHook": "CIF mandates comprehensive all-risks cargo insurance coverage."
      },
      {
        "id": "u81-e5",
        "type": "chat_branch",
        "promptEn": "Executive Trade Dialogue: Respond to the Japanese importer's freight request:",
        "promptVi": "Hội đàm thương mại cấp cao: Phản hồi đề xuất chuyển từ FOB sang CIF của đối tác Nhật Bản trên Slack:",
        "englishSentence": "Certainly, Takahashi-san! We have long-term volume service contracts with ONE and Maersk, allowing us to offer competitive CIF Yokohama rates with full Institute Cargo Clauses (A) insurance coverage.",
        "audioText": "Certainly, Takahashi-san! We have long-term volume service contracts with ONE and Maersk, allowing us to offer competitive CIF Yokohama rates with full Institute Cargo Clauses (A) insurance coverage.",
        "chatMessages": [
          {
            "speaker": "Kenji Takahashi (Logistics Director, Tokyo Imports)",
            "avatar": "🇯🇵",
            "message": "Minh-san, spot container rates from Quy Nhon to Yokohama are surging. Can Vikoda quote CIF Yokohama directly, and which carrier alliance do you partner with?"
          }
        ],
        "chatOptions": [
          {
            "text": "Certainly, Takahashi-san! We have long-term volume service contracts with ONE and Maersk, allowing us to offer competitive CIF Yokohama rates with full Institute Cargo Clauses (A) insurance coverage.",
            "trustScore": 25,
            "feedback": "Phản hồi xuất sắc (+25 Điểm Tin Cậy)! Tận dụng hợp đồng cước số lượng lớn để cung cấp giải pháp CIF trọn gói, bảo đảm an toàn và củng cố vị thế chuyên nghiệp của Vikoda.",
            "isCorrect": true
          },
          {
            "text": "We only do FOB, booking ocean carriers is entirely your company's headache so please find a ship yourself.",
            "trustScore": 0,
            "feedback": "Thái độ đẩy rủi ro thô lỗ làm sụp đổ hình ảnh thương hiệu quốc tế và khiến đối tác lập tức hủy đơn hàng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Chắc chắn rồi, thưa ông Takahashi! Chúng tôi có hợp đồng dịch vụ khối lượng lớn dài hạn với ONE và Maersk, cho phép chúng tôi báo giá CIF Yokohama cạnh tranh kèm bảo hiểm mọi rủi ro theo Điều khoản Hàng hóa Mức A.",
        "explanation": "Chủ động đề xuất giải pháp CIF dựa trên quan hệ đối tác hãng tàu lớn chứng minh năng lực chuỗi cung ứng toàn cầu vững mạnh.",
        "crucialNote": "Hợp đồng dịch vụ cước dài hạn (service contract) là lợi thế cạnh tranh cốt lõi của nhà xuất khẩu quy mô lớn.",
        "memoryHook": "Provide turnkey CIF solutions to win international buyers."
      }
    ]
  },
  {
    "id": "unit-82",
    "unitNumber": 82,
    "title": "Thư Tín Dụng L/C Không Hủy Ngang Trả Ngay",
    "subtitle": "Soạn thảo điều khoản thanh toán ngân hàng quốc tế bảo mật",
    "level": "C1-C2",
    "icon": "🏦",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u82-e1",
        "type": "match_pairs",
        "promptEn": "Match each trade finance and Letter of Credit term with its correct definition:",
        "promptVi": "Nối các thuật ngữ thanh toán quốc tế và Thư tín dụng L/C với định nghĩa chuẩn xác:",
        "englishSentence": "Match the 5 trade finance and documentary credit terms.",
        "audioText": "Match the 5 trade finance and documentary credit terms.",
        "explanation": "Thư tín dụng (L/C) là công cụ thanh toán an toàn nhất trong thương mại quốc tế, bảo đảm nhà xuất khẩu được ngân hàng thanh toán khi nộp đủ chứng từ hợp lệ.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ tài trợ thương mại và thư tín dụng chứng từ quốc tế.",
        "pairs": [
          {
            "left": "Irrevocable Letter of Credit",
            "right": "Thư tín dụng không thể đơn phương sửa đổi hoặc hủy ngang"
          },
          {
            "left": "At-Sight Documentary Credit",
            "right": "Thanh toán ngay khi xuất trình bộ chứng từ giao hàng hợp lệ"
          },
          {
            "left": "Issuing Bank & Advising Bank",
            "right": "Ngân hàng mở L/C (bên mua) và Ngân hàng thông báo (bên bán)"
          },
          {
            "left": "UCP 600 Compliance",
            "right": "Tuân thủ quy tắc thực hành thống nhất về tín dụng chứng từ số 600"
          },
          {
            "left": "Discrepancy Fee",
            "right": "Phí phạt do bộ chứng từ xuất khẩu có sai sót hoặc bất đồng"
          }
        ]
      },
      {
        "id": "u82-e2",
        "type": "speak",
        "promptEn": "Shadow this strict corporate credit policy statement:",
        "promptVi": "Luyện nói câu khẳng định chính sách tín dụng thương mại quốc tế bằng tiếng Anh chuẩn xác:",
        "englishSentence": "All export shipments must be secured by an irrevocable letter of credit at sight confirmed by a top-tier international bank.",
        "audioText": "All export shipments must be secured by an irrevocable letter of credit at sight confirmed by a top-tier international bank.",
        "phonetics": "/ɔːl ˈɛkspɔːrt ˈʃɪpmənts mʌst biː sɪˈkjʊərd baɪ ən ɪˈrɛvəkəbl ˈlɛtər əv ˈkrɛdɪt æt saɪt kənˈfɜːrmd baɪ ə tɒp-tɪər ˌɪntərˈnæʃnəl bæŋk/",
        "vietnameseMeaning": "Mọi lô hàng xuất khẩu phải được bảo đảm bằng thư tín dụng không hủy ngang trả ngay được xác nhận bởi một ngân hàng quốc tế hàng đầu.",
        "explanation": "Cụm 'confirmed by a top-tier international bank' loại trừ rủi ro quốc gia và rủi ro ngân hàng mở không đủ thanh khoản.",
        "whyWrong": "Chú ý phát âm chuẩn từ 'irrevocable' với trọng âm rơi vào âm tiết thứ hai /ɪˈrɛvəkəbl/.",
        "crucialNote": "L/C có xác nhận (confirmed L/C) chuyển trách nhiệm thanh toán cuối cùng sang ngân hàng xác nhận uy tín.",
        "memoryHook": "Irrevocable confirmed L/C at sight guarantees 100% export payment security."
      },
      {
        "id": "u82-e3",
        "type": "word_order",
        "promptEn": "Build a legally binding documentary credit undertaking sentence:",
        "promptVi": "Sắp xếp các từ thành câu cam kết thanh toán vô điều kiện của ngân hàng phát hành:",
        "englishSentence": "The issuing bank irrevocably undertakes to honor payment upon receipt of compliant shipping documents.",
        "audioText": "The issuing bank irrevocably undertakes to honor payment upon receipt of compliant shipping documents.",
        "wordPool": [
          "The",
          "issuing",
          "bank",
          "irrevocably",
          "undertakes",
          "to",
          "honor",
          "payment",
          "upon",
          "receipt",
          "of",
          "compliant",
          "shipping",
          "documents.",
          "default",
          "refuse"
        ],
        "vietnameseMeaning": "Ngân hàng phát hành cam kết không hủy ngang sẽ thanh toán ngay khi nhận được bộ chứng từ vận chuyển hoàn toàn hợp lệ.",
        "explanation": "Thuật ngữ 'irrevocably undertakes to honor payment' là cam kết pháp lý cốt lõi được quy định trong UCP 600 Điều 7.",
        "whyWrong": "Tránh đảo lộn vị trí giữa động từ 'honor payment' và cụm giới từ 'upon receipt of'.",
        "crucialNote": "'Compliant shipping documents' có nghĩa là bộ chứng từ không có bất kỳ sai lệch nào so với điều khoản L/C.",
        "memoryHook": "Issuing bank irrevocably undertakes to honor compliant documents."
      },
      {
        "id": "u82-e4",
        "type": "fill_blank",
        "promptEn": "Fill in the blank with the appropriate trade finance status:",
        "promptVi": "Chọn trạng thái tài chính thương mại chuẩn xác để hoàn thiện quy định:",
        "englishSentence": "To eliminate payment default risks, our trade finance policy mandates that international buyers open a [ _____ ] irrevocable L/C within ten business days of signing.",
        "audioText": "To eliminate payment default risks, our trade finance policy mandates that international buyers open a confirmed irrevocable L/C within ten business days of signing.",
        "blankWord": "confirmed",
        "options": [
          "confirmed",
          "revocable",
          "provisional"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Để loại trừ rủi ro không thanh toán, chính sách tài chính thương mại của chúng tôi quy định bên mua quốc tế phải mở thư tín dụng không hủy ngang có xác nhận trong vòng mười ngày làm việc kể từ ngày ký.",
        "explanation": "Một L/C 'confirmed' (có xác nhận) bảo vệ người xuất khẩu tối đa vì ngân hàng xác nhận tại nước người bán chịu trách nhiệm thanh toán độc lập.",
        "whyWrong": "'Revocable' (có thể hủy) là hình thức lỗi thời và rủi ro cực cao; 'provisional' (tạm thời) không có giá trị bảo đảm thanh toán.",
        "crucialNote": "Luôn kiểm tra kỹ thời hạn hiệu lực (expiry date) và ngày giao hàng muộn nhất (latest shipment date) trên L/C.",
        "memoryHook": "A confirmed L/C removes cross-border insolvency risks."
      },
      {
        "id": "u82-e5",
        "type": "chat_branch",
        "promptEn": "C-Suite Financial Negotiation: Rebuff an unsecured credit request tactfully:",
        "promptVi": "Đàm phán tài chính cấp cao: Xử lý đề xuất thanh toán nợ mở T/T 60 ngày của đối tác Hàn Quốc:",
        "englishSentence": "Mr. Park, to balance cash flow while safeguarding corporate credit policy, we can structure this initial shipment under a 30% advance T/T deposit with the remaining 70% paid against copy of the clean ocean B/L, or a 90-day Usance L/C backed by Shinhan Bank.",
        "audioText": "Mr. Park, to balance cash flow while safeguarding corporate credit policy, we can structure this initial shipment under a 30% advance T/T deposit with the remaining 70% paid against copy of the clean ocean B/L, or a 90-day Usance L/C backed by Shinhan Bank.",
        "chatMessages": [
          {
            "speaker": "Park Sun-woo (CFO, Seoul Distribution Hub)",
            "avatar": "🇰🇷",
            "message": "Minh, issuing a confirmed L/C at sight freezes our banking credit facilities. Would Vikoda accept open account T/T 60 days after Bill of Lading date for this initial 20-container order?"
          }
        ],
        "chatOptions": [
          {
            "text": "Mr. Park, to balance cash flow while safeguarding corporate credit policy, we can structure this initial shipment under a 30% advance T/T deposit with the remaining 70% paid against copy of the clean ocean B/L, or a 90-day Usance L/C backed by Shinhan Bank.",
            "trustScore": 25,
            "feedback": "Đàm phán bậc thầy (+25 Điểm Tin Cậy)! Vừa kiên quyết từ chối nợ mở không bảo đảm, vừa linh hoạt đưa ra 2 giải pháp tài trợ thương mại khả thi (đặt cọc 30% hoặc L/C trả chậm do ngân hàng lớn bảo lãnh).",
            "isCorrect": true
          },
          {
            "text": "No way! We do not trust your financial liquidity at all, so pay 100% cash in advance right now or we cancel the whole export order.",
            "trustScore": 0,
            "feedback": "Thái độ nghi kỵ xúc phạm đối tác, phá vỡ đàm phán chiến lược mở rộng thị trường Hàn Quốc.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông Park, để cân đối dòng tiền trong khi vẫn tuân thủ chính sách tín dụng của tập đoàn, chúng tôi có thể cơ cấu lô hàng đầu tiên này theo hình thức đặt cọc 30% chuyển khoản trước và 70% còn lại thanh toán khi nhận bản sao Vận đơn sạch, hoặc mở L/C trả chậm 90 ngày do Ngân hàng Shinhan bảo lãnh.",
        "explanation": "Kết hợp giữa nguyên tắc quản trị rủi ro tín dụng và công cụ Usance L/C giúp khách hàng có thời gian bán hàng mà nhà xuất khẩu vẫn được ngân hàng bảo lãnh thanh toán.",
        "crucialNote": "Usance L/C (thư tín dụng trả chậm) cho phép nhà xuất khẩu chiết khấu chứng từ tại ngân hàng để nhận tiền ngay.",
        "memoryHook": "Never surrender credit security; offer Usance L/C or DP against B/L."
      }
    ]
  },
  {
    "id": "unit-83",
    "unitNumber": 83,
    "title": "Bộ Chứng Từ Xuất Khẩu & Vận Đơn B/L",
    "subtitle": "Kiểm tra Bill of Lading, Hóa đơn thương mại và C/O form",
    "level": "C1-C2",
    "icon": "📜",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u83-e1",
        "type": "match_pairs",
        "promptEn": "Pair each shipping and customs document with its exact function:",
        "promptVi": "Nối từng chứng từ xuất nhập khẩu và hải quan với chức năng nghiệp vụ tương ứng:",
        "englishSentence": "Match the 5 export shipping and customs documents.",
        "audioText": "Match the 5 export shipping and customs documents.",
        "explanation": "Bộ chứng từ xuất khẩu hoàn chỉnh là điều kiện tiên quyết để nhà nhập khẩu thông quan suôn sẻ và ngân hàng giải ngân theo L/C.",
        "vietnameseMeaning": "Nối đúng 5 loại chứng từ xuất khẩu cốt lõi trong bộ chứng từ thương mại quốc tế.",
        "pairs": [
          {
            "left": "Clean On-Board Bill of Lading",
            "right": "Vận đơn đường biển sạch xác nhận hàng đã xếp lên tàu nguyên vẹn"
          },
          {
            "left": "Commercial Invoice & Packing List",
            "right": "Hóa đơn giá trị hàng và phiếu đóng gói chi tiết trọng lượng"
          },
          {
            "left": "Certificate of Origin (C/O Form)",
            "right": "Giấy chứng nhận xuất xứ để bên mua được hưởng ưu đãi thuế quan"
          },
          {
            "left": "Certificate of Analysis (COA)",
            "right": "Phiếu kiểm nghiệm chỉ tiêu lý hóa vi sinh của Viện Pasteur"
          },
          {
            "left": "Shipper vs Consignee",
            "right": "Người gửi hàng xuất khẩu và Người nhận hàng nhập khẩu chỉ định"
          }
        ]
      },
      {
        "id": "u83-e2",
        "type": "speak",
        "promptEn": "Shadow this export documentation audit statement with clear rhythm:",
        "promptVi": "Luyện nói câu kiểm soát chất lượng chứng từ xuất khẩu bằng tiếng Anh chuyên nghiệp:",
        "englishSentence": "Our export documentation team cross-checks the Clean On-Board B/L against the letter of credit to prevent any documentation discrepancy.",
        "audioText": "Our export documentation team cross-checks the Clean On-Board B/L against the letter of credit to prevent any documentation discrepancy.",
        "phonetics": "/ˈaʊər ˈɛkspɔːrt ˌdɒkjʊmɛnˈteɪʃn tiːm krɒs-tʃɛks ðə kliːn ɒn-bɔːrd biː-ɛl əˈɡɛnst ðə ˈlɛtər əv ˈkrɛdɪt tuː prɪˈvɛnt ˈɛni ˌdɒkjʊmɛnˈteɪʃn dɪsˈkrɛpənsi/",
        "vietnameseMeaning": "Đội ngũ chứng từ xuất khẩu của chúng tôi đối chiếu kỹ lưỡng Vận đơn sạch lên tàu với thư tín dụng nhằm ngăn chặn tuyệt đối bất kỳ sai sót chứng từ nào.",
        "explanation": "Thuật ngữ 'documentation discrepancy' (bất đồng chứng từ) là nguyên nhân hàng đầu khiến ngân hàng từ chối thanh toán L/C.",
        "whyWrong": "Chú ý nối âm giữa 'cross-checks' và 'the', phát âm rõ âm đuôi /s/ của 'discrepancy'.",
        "crucialNote": "Ngân hàng chỉ kiểm tra tính hợp lệ của chứng từ trên bề mặt (on its face) chứ không kiểm tra hàng hóa thực tế.",
        "memoryHook": "Flawless documentation ensures instant letter of credit liquidation."
      },
      {
        "id": "u83-e3",
        "type": "word_order",
        "promptEn": "Construct the sentence highlighting tariff benefits under bilateral trade pacts:",
        "promptVi": "Sắp xếp các từ thành câu cam kết cung cấp C/O hưởng ưu đãi thuế quan 0%:",
        "englishSentence": "We provide an original Certificate of Origin Form AK to ensure zero tariff treatment under the bilateral free trade agreement.",
        "audioText": "We provide an original Certificate of Origin Form AK to ensure zero tariff treatment under the bilateral free trade agreement.",
        "wordPool": [
          "We",
          "provide",
          "an",
          "original",
          "Certificate",
          "of",
          "Origin",
          "Form",
          "AK",
          "to",
          "ensure",
          "zero",
          "tariff",
          "treatment",
          "under",
          "the",
          "bilateral",
          "free",
          "trade",
          "agreement.",
          "penalty",
          "embargo"
        ],
        "vietnameseMeaning": "Chúng tôi cung cấp bản gốc Giấy chứng nhận xuất xứ Form AK để bảo đảm mức thuế quan 0% theo hiệp định thương mại tự do song phương.",
        "explanation": "Form AK (ASEAN - Korea) cho phép nước khoáng Vikoda nhập khẩu vào Hàn Quốc với thuế nhập khẩu ưu đãi 0%.",
        "whyWrong": "Cần đặt cụm mục đích 'to ensure zero tariff treatment' ngay sau tân ngữ chính 'Form AK'.",
        "crucialNote": "Kiểm tra kỹ tiêu chí xuất xứ (Origin Criterion) như WO (Wholly Obtained) đối với nước khoáng khai thác tự nhiên.",
        "memoryHook": "Provide certified C/O to unlock zero import tariffs."
      },
      {
        "id": "u83-e4",
        "type": "fill_blank",
        "promptEn": "Select the legal banking compliance verb to complete the clause:",
        "promptVi": "Chọn động từ tuân thủ chứng từ ngân hàng chuẩn xác:",
        "englishSentence": "The issuing bank rejected the presentation because the commercial invoice description did not strictly [ _____ ] with the exact credit terms.",
        "audioText": "The issuing bank rejected the presentation because the commercial invoice description did not strictly comply with the exact credit terms.",
        "blankWord": "comply",
        "options": [
          "comply",
          "forfeit",
          "disclaim"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Ngân hàng phát hành từ chối thanh toán do mô tả hàng hóa trên hóa đơn thương mại không tuân thủ tuyệt đối các điều khoản chính xác của thư tín dụng.",
        "explanation": "Theo nguyên tắc 'Strict Compliance' (tuân thủ nghiêm ngặt) của UCP 600 Điều 18, mô tả hàng hóa trên hóa đơn thương mại phải tương ứng chính xác từng từ với L/C.",
        "whyWrong": "'Forfeit' (bị tước đoạt) và 'disclaim' (từ chối trách nhiệm) hoàn toàn sai ngữ pháp và ngữ nghĩa.",
        "crucialNote": "Chỉ một chữ cái sai chính tả trên hóa đơn cũng có thể dẫn đến thông báo bất đồng chứng từ (discrepancy notice).",
        "memoryHook": "Commercial invoice descriptions must strictly comply with L/C wording."
      },
      {
        "id": "u83-e5",
        "type": "chat_branch",
        "promptEn": "Urgent Customs Resolution: Rectify an HS code discrepancy at Busan Port:",
        "promptVi": "Xử lý khủng hoảng hải quan: Đại lý thông quan cảng Busan thông báo lệch mã HS trên C/O:",
        "englishSentence": "Tae-young, our trade compliance officer is already liaising with the Ministry of Industry and Trade. We will issue an official electronic replacement C/O with corrected HS code 2201.10.20 and transmit the digital certificate within two hours!",
        "audioText": "Tae-young, our trade compliance officer is already liaising with the Ministry of Industry and Trade. We will issue an official electronic replacement C/O with corrected HS code 2201.10.20 and transmit the digital certificate within two hours!",
        "chatMessages": [
          {
            "speaker": "Kim Tae-young (Customs Broker, Busan Port)",
            "avatar": "🇰🇷",
            "message": "Minh, Korea Customs is holding the 5 containers! The C/O lists HS 2201.10.10 while the import manifest shows HS 2201.10.20 for sparkling natural mineral water. Can you reissue an amended C/O immediately?"
          }
        ],
        "chatOptions": [
          {
            "text": "Tae-young, our trade compliance officer is already liaising with the Ministry of Industry and Trade. We will issue an official electronic replacement C/O with corrected HS code 2201.10.20 and transmit the digital certificate within two hours!",
            "trustScore": 25,
            "feedback": "Xử lý thần tốc (+25 Điểm Tin Cậy)! Kích hoạt quy trình cấp đổi C/O điện tử ngay lập tức với Bộ Công Thương, giải phóng container khỏi ách tắc lưu kho bãi tại cảng Busan.",
            "isCorrect": true
          },
          {
            "text": "Customs officers are too pedantic. It is all drinking water anyway, just convince them to release the containers as is.",
            "trustScore": 0,
            "feedback": "Coi thường quy định hải quan quốc tế dẫn đến việc bị giữ hàng, phạt tiền lưu bãi (demurrage) và đưa doanh nghiệp vào danh sách đen kiểm tra luồng đỏ.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Anh Tae-young, cán bộ tuân thủ thương mại của chúng tôi đang làm việc trực tiếp với Bộ Công Thương. Chúng tôi sẽ cấp đổi bản C/O điện tử chính thức với mã HS chuẩn xác 2201.10.20 và truyền dữ liệu chứng thực số trong vòng hai giờ tới!",
        "explanation": "Phản ứng quyết đoán, hiểu rõ hệ thống cấp C/O điện tử (e-C/O) giúp hóa giải rủi ro giữ hàng tại cảng đến trong thời gian kỷ lục.",
        "crucialNote": "Nước khoáng có ga (sparkling) và không ga (still) có phân nhóm mã HS 8 số khác nhau tùy biểu thuế từng quốc gia.",
        "memoryHook": "Swift electronic C/O amendment prevents costly port demurrage."
      }
    ]
  },
  {
    "id": "unit-84",
    "unitNumber": 84,
    "title": "Bảo Hiểm Hàng Hóa Đường Biển Mức A (ICC A)",
    "subtitle": "Bảo hiểm rủi ro toàn diện container chìm đắm hoặc thất lạc",
    "level": "C1-C2",
    "icon": "⚓",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u84-e1",
        "type": "match_pairs",
        "promptEn": "Match each marine cargo insurance concept with its technical definition:",
        "promptVi": "Nối các khái niệm bảo hiểm hàng hải quốc tế với định nghĩa kỹ thuật tương ứng:",
        "englishSentence": "Match the 5 marine cargo insurance concepts.",
        "audioText": "Match the 5 marine cargo insurance concepts.",
        "explanation": "Bảo hiểm Hàng hóa Mức A (ICC A) mang lại phạm vi bảo vệ rộng nhất (All Risks) cho các container nước khoáng Vikoda xuất khẩu qua đại dương.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ bảo hiểm hàng hóa đường biển theo quy tắc của Hiệp hội Bảo hiểm London.",
        "pairs": [
          {
            "left": "Institute Cargo Clauses (A)",
            "right": "Điều khoản bảo hiểm hàng hóa mức A bảo hiểm mọi rủi ro rộng nhất"
          },
          {
            "left": "General Average Contribution",
            "right": "Khoản đóng góp tổn thất chung khi tàu phải hy sinh hàng vì an toàn chung"
          },
          {
            "left": "Particular Average Loss",
            "right": "Tổn thất riêng chỉ xảy ra đối với hàng của chủ hàng cụ thể"
          },
          {
            "left": "Subrogation Rights",
            "right": "Quyền thế quyền đòi người thứ ba có lỗi bồi thường sau khi đã chi trả"
          },
          {
            "left": "Endorsed in Blank",
            "right": "Ký hậu để trống đơn bảo hiểm để chuyển quyền thụ hưởng bồi thường"
          }
        ]
      },
      {
        "id": "u84-e2",
        "type": "speak",
        "promptEn": "Shadow this authoritative marine insurance declaration:",
        "promptVi": "Luyện phát âm câu tuyên bố phạm vi bảo hiểm hàng hải quốc tế toàn diện:",
        "englishSentence": "Under Institute Cargo Clauses A, our premium export shipments are fully indemnified against maritime perils, rough handling, and general average contribution.",
        "audioText": "Under Institute Cargo Clauses A, our premium export shipments are fully indemnified against maritime perils, rough handling, and general average contribution.",
        "phonetics": "/ˈʌndər ˈɪnstɪtjuːt ˈkɑːrɡoʊ ˈklɔːzɪz eɪ, ˈaʊər ˈpriːmiəm ˈɛkspɔːrt ˈʃɪpmənts ɑːr ˈfʊli ɪnˈdɛmnɪfaɪd əˈɡɛnst ˈmærɪtaɪm ˈpɛrəlz, rʌf ˈhændlɪŋ, ænd ˈdʒɛnərəl ˈævərɪdʒ ˌkɒntrɪˈbjuːʃn/",
        "vietnameseMeaning": "Theo Điều khoản Bảo hiểm Hàng hóa Mức A, các lô hàng xuất khẩu cao cấp của chúng tôi được bồi thường toàn diện trước hiểm họa hàng hải, bốc dỡ thô bạo và đóng góp tổn thất chung.",
        "explanation": "Từ 'indemnified' nghĩa là được bồi thường đầy đủ để khôi phục tình trạng tài chính như trước khi xảy ra sự kiện tổn thất.",
        "whyWrong": "Lưu ý trọng âm của 'indemnified' rơi vào âm tiết thứ hai /ɪnˈdɛmnɪfaɪd/.",
        "crucialNote": "ICC A bảo vệ cả rủi ro nước biển tràn vào hầm hàng làm rách thùng carton hoặc biến dạng bao bì.",
        "memoryHook": "ICC Clause A indemnifies cargo against all risks and general average."
      },
      {
        "id": "u84-e3",
        "type": "word_order",
        "promptEn": "Arrange the sentence defining mandatory insurance value under CIF contracts:",
        "promptVi": "Sắp xếp các từ thành câu quy định giá trị bảo hiểm bắt buộc theo chuẩn quốc tế:",
        "englishSentence": "The cargo insurance policy must be endorsed in blank and cover one hundred and ten percent of the CIF value.",
        "audioText": "The cargo insurance policy must be endorsed in blank and cover one hundred and ten percent of the CIF value.",
        "wordPool": [
          "The",
          "cargo",
          "insurance",
          "policy",
          "must",
          "be",
          "endorsed",
          "in",
          "blank",
          "and",
          "cover",
          "one",
          "hundred",
          "and",
          "ten",
          "percent",
          "of",
          "the",
          "CIF",
          "value.",
          "void",
          "forfeit"
        ],
        "vietnameseMeaning": "Đơn bảo hiểm hàng hóa phải được ký hậu để trống và có giá trị bảo hiểm bằng một trăm mười phần trăm trị giá CIF.",
        "explanation": "110% CIF (gồm 100% giá trị hàng cộng thêm 10% lợi nhuận kỳ vọng của người mua) là tỷ lệ bảo hiểm tiêu chuẩn theo Incoterms 2020 và UCP 600.",
        "whyWrong": "Đảm bảo đúng trật tự liên từ 'and' kết nối hai vị ngữ 'must be endorsed in blank' và 'cover 110%'.",
        "crucialNote": "'Endorsed in blank' (ký hậu để trống) cho phép người cầm giữ đơn bảo hiểm có quyền nộp hồ sơ yêu cầu bồi thường trực tiếp.",
        "memoryHook": "Marine policies must cover 110% of CIF value and be endorsed in blank."
      },
      {
        "id": "u84-e4",
        "type": "fill_blank",
        "promptEn": "Complete the maritime law scenario with the correct technical noun:",
        "promptVi": "Hoàn thiện tình huống pháp luật hàng hải với thuật ngữ tổn thất chính xác:",
        "englishSentence": "When a container ship faces severe storms, the captain may declare a [ _____ ] average to sacrifice cargo for the common safety of the vessel.",
        "audioText": "When a container ship faces severe storms, the captain may declare a general average to sacrifice cargo for the common safety of the vessel.",
        "blankWord": "general",
        "options": [
          "general",
          "arbitrary",
          "retroactive"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Khi tàu container gặp bão biển dữ dội, thuyền trưởng có thể tuyên bố tổn thất chung để hy sinh một phần hàng hóa vì sự an toàn chung của con tàu.",
        "explanation": "'General average' (tổn thất chung) là nguyên tắc hàng hải cổ xưa: khi thuyền trưởng ra quyết định hợp lý để cứu tàu, mọi chủ hàng có hàng trên tàu phải cùng đóng góp bù đắp chi phí thiệt hại.",
        "whyWrong": "'Arbitrary' (tùy tiện) và 'retroactive' (hồi tố) không có giá trị trong luật hàng hải.",
        "crucialNote": "Nếu không có bảo hiểm hàng hải, chủ hàng sẽ phải nộp tiền bảo lãnh hàng trăm ngàn USD bằng tiền mặt trước khi được nhận hàng.",
        "memoryHook": "General average requires shared sacrifice for common marine survival."
      },
      {
        "id": "u84-e5",
        "type": "chat_branch",
        "promptEn": "Marine Emergency Response: Coordinate with the Lloyd's surveyor after a typhoon:",
        "promptVi": "Xử lý khẩn cấp hàng hải: Phối hợp với giám định viên quốc tế sau khi tàu gặp bão lớn trên biển:",
        "englishSentence": "Captain Sterling, thank you for the prompt notification. We are transmitting our Bao Viet ICC (A) policy covering 110% CIF value along with the master B/L and packing list. Our operations team is already staging an expedited replacement container from Danh Thanh to avoid buyer supply disruption.",
        "audioText": "Captain Sterling, thank you for the prompt notification. We are transmitting our Bao Viet ICC (A) policy covering 110% CIF value along with the master B/L and packing list. Our operations team is already staging an expedited replacement container from Danh Thanh to avoid buyer supply disruption.",
        "chatMessages": [
          {
            "speaker": "Captain Robert Sterling (Marine Surveyor, Lloyd's Agency)",
            "avatar": "⚓",
            "message": "Minh, container vessel MV Pacific Star encountered Typhoon Malakas. Two 40ft containers of Vikoda glass bottles experienced lash failure and overboard loss. We need your insurance certificate and bill of lading to initiate the survey report."
          }
        ],
        "chatOptions": [
          {
            "text": "Captain Sterling, thank you for the prompt notification. We are transmitting our Bao Viet ICC (A) policy covering 110% CIF value along with the master B/L and packing list. Our operations team is already staging an expedited replacement container from Danh Thanh to avoid buyer supply disruption.",
            "trustScore": 25,
            "feedback": "Xử lý khủng hoảng hàng hải xuất sắc (+25 Điểm Tin Cậy)! Vừa cung cấp đầy đủ chứng từ giám định bồi thường bảo hiểm, vừa chủ động chuẩn bị container thay thế để giữ vững chuỗi cung ứng cho đối tác.",
            "isCorrect": true
          },
          {
            "text": "Why did your crew drop our water into the ocean? Go dive into the sea and retrieve our bottles right now or we will sue your shipping line!",
            "trustScore": 0,
            "feedback": "Phản ứng thiếu hiểu biết về luật hàng hải quốc tế, từ chối hợp tác với giám định viên khiến hồ sơ bồi thường bị đình chỉ.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa Thuyền trưởng Sterling, cảm ơn ông đã thông báo kịp thời. Chúng tôi đang gửi đơn bảo hiểm Bảo Việt ICC (A) bao bọc 110% trị giá CIF cùng với Vận đơn gốc và phiếu đóng gói. Đội ngũ vận hành của chúng tôi cũng đang gấp rút chuẩn bị một container thay thế xuất phát từ Đảnh Thạnh để bảo đảm chuỗi cung ứng của đối tác không bị gián đoạn.",
        "explanation": "Hành động song song: giải quyết bồi thường bảo hiểm chuyên nghiệp đồng thời kích hoạt lô hàng dự phòng chứng minh năng lực quản trị rủi ro thượng thặng.",
        "crucialNote": "Bảo hiểm ICC (A) sẽ chi trả đầy đủ 110% giá trị lô hàng bị trôi dạt trên biển theo xác nhận của giám định viên.",
        "memoryHook": "Transmit claim files swiftly and dispatch replacement inventory immediately."
      }
    ]
  },
  {
    "id": "unit-85",
    "unitNumber": 85,
    "title": "Điều Khoản Bất Khả Kháng Force Majeure",
    "subtitle": "Bảo vệ quyền lợi pháp lý khi bão lũ, chiến tranh cản trở giao hàng",
    "level": "C1-C2",
    "icon": "🌪️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u85-e1",
        "type": "match_pairs",
        "promptEn": "Match each contractual risk mitigation term with its legal meaning:",
        "promptVi": "Nối các thuật ngữ pháp lý phòng ngừa rủi ro hợp đồng với định nghĩa chuẩn xác:",
        "englishSentence": "Match the 5 contract risk mitigation and force majeure concepts.",
        "audioText": "Match the 5 contract risk mitigation and force majeure concepts.",
        "explanation": "Điều khoản Bất khả kháng (Force Majeure) và Hoàn cảnh khó khăn (Hardship) là lá chắn pháp lý tối thượng bảo vệ doanh nghiệp trước những biến động địa chính trị toàn cầu.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ pháp lý về điều khoản miễn trách và điều chỉnh hợp đồng theo mẫu ICC.",
        "pairs": [
          {
            "left": "Force Majeure Event",
            "right": "Sự kiện bất khả kháng ngoài tầm kiểm soát hợp lý của các bên"
          },
          {
            "left": "Hardship Clause",
            "right": "Điều khoản đàm phán lại khi hoàn cảnh thay đổi làm chi phí tăng đột biến"
          },
          {
            "left": "Duty to Mitigate Loss",
            "right": "Nghĩa vụ áp dụng mọi biện pháp hợp lý để giảm thiểu thiệt hại cho đối tác"
          },
          {
            "left": "Notice of Occurrence",
            "right": "Văn bản thông báo kịp thời khi sự kiện bất khả kháng phát sinh"
          },
          {
            "left": "Right of Contractual Rescission",
            "right": "Quyền chấm dứt hợp đồng nếu sự kiện cản trở kéo dài quá hạn định"
          }
        ]
      },
      {
        "id": "u85-e2",
        "type": "speak",
        "promptEn": "Shadow this standard ICC model force majeure clause:",
        "promptVi": "Luyện phát âm câu điều khoản bất khả kháng chuẩn mực theo mẫu Phòng Thương Mại Quốc Tế (ICC):",
        "englishSentence": "Neither party shall be held liable for failure or delay in performance resulting from an unforeseeable event of force majeure beyond reasonable control.",
        "audioText": "Neither party shall be held liable for failure or delay in performance resulting from an unforeseeable event of force majeure beyond reasonable control.",
        "phonetics": "/ˈnaɪðər ˈpɑːrti ʃæl biː hɛld ˈlaɪəbl fɔːr ˈfeɪljər ɔːr dɪˈleɪ ɪn pərˈfɔːrməns rɪˈzʌltɪŋ frɒm ən ˌʌnfɔːrˈsiːəbl ɪˈvɛnt əv fɔːrs mæˈʒɜːr bɪˈjɒnd ˈriːznəbl kənˈtroʊl/",
        "vietnameseMeaning": "Không bên nào phải chịu trách nhiệm về việc không thực hiện hoặc chậm trễ do sự kiện bất khả kháng không thể lường trước nằm ngoài tầm kiểm soát hợp lý.",
        "explanation": "Cấu trúc pháp lý 'Neither party shall be held liable for...' miễn trừ trách nhiệm bồi thường vi phạm hợp đồng khi sự kiện bất khả kháng xảy ra.",
        "whyWrong": "Phát âm chuẩn cụm từ tiếng Pháp mượn trong luật thương mại 'force majeure' là /fɔːrs mæˈʒɜːr/.",
        "crucialNote": "Sự kiện bất khả kháng phải thỏa mãn 3 yếu tố: không thể lường trước, không thể tránh khỏi và nằm ngoài tầm kiểm soát.",
        "memoryHook": "Force majeure releases parties from contractual liability during unavoidable crises."
      },
      {
        "id": "u85-e3",
        "type": "word_order",
        "promptEn": "Build the notification protocol sentence for force majeure invocations:",
        "promptVi": "Sắp xếp các từ thành câu quy định nghĩa vụ gửi văn bản thông báo bất khả kháng:",
        "englishSentence": "The affected party must provide prompt written notification accompanied by an official certificate from the chamber of commerce.",
        "audioText": "The affected party must provide prompt written notification accompanied by an official certificate from the chamber of commerce.",
        "wordPool": [
          "The",
          "affected",
          "party",
          "must",
          "provide",
          "prompt",
          "written",
          "notification",
          "accompanied",
          "by",
          "an",
          "official",
          "certificate",
          "from",
          "the",
          "chamber",
          "of",
          "commerce.",
          "rumor",
          "speculate"
        ],
        "vietnameseMeaning": "Bên bị ảnh hưởng phải gửi thông báo bằng văn bản kịp thời kèm theo chứng nhận chính thức từ phòng thương mại.",
        "explanation": "Chứng nhận của Phòng Thương mại và Công nghiệp (VCCI hoặc tương đương) là bằng chứng pháp lý độc lập xác thực sự kiện bất khả kháng.",
        "whyWrong": "Sắp xếp đúng cụm phân từ bị động 'accompanied by an official certificate'.",
        "crucialNote": "Hầu hết hợp đồng quy định phải gửi thông báo trong vòng 7 đến 14 ngày kể từ ngày phát sinh sự kiện.",
        "memoryHook": "Prompt written notice with chamber of commerce certificate validates force majeure."
      },
      {
        "id": "u85-e4",
        "type": "fill_blank",
        "promptEn": "Choose the correct legal remedy terminology for long-term contract disruption:",
        "promptVi": "Chọn thuật ngữ bồi thường thiệt hại để hoàn thiện điều khoản mẫu ICC:",
        "englishSentence": "Under ICC model rules, if a force majeure event persists beyond ninety consecutive days, either party may terminate the contract without paying [ _____ ] damages.",
        "audioText": "Under ICC model rules, if a force majeure event persists beyond ninety consecutive days, either party may terminate the contract without paying liquidated damages.",
        "blankWord": "liquidated",
        "options": [
          "liquidated",
          "unilateral",
          "gratuitous"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Theo các quy tắc mẫu của ICC, nếu sự kiện bất khả kháng kéo dài quá chín mươi ngày liên tục, bất kỳ bên nào cũng có thể chấm dứt hợp đồng mà không phải trả tiền bồi thường thiệt hại ước tính.",
        "explanation": "'Liquidated damages' (tiền bồi thường thiệt hại được ước tính trước theo thỏa thuận hợp đồng) được miễn trừ hoàn toàn khi chấm dứt hợp đồng hợp lệ vì bất khả kháng.",
        "whyWrong": "'Unilateral' (đơn phương) và 'gratuitous' (tùy tiện/cho không) không phải là thuật ngữ chỉ khoản tiền bồi thường.",
        "crucialNote": "Quy định mốc thời gian 90 ngày giúp các bên tránh bị mắc kẹt vĩnh viễn trong một hợp đồng không thể thực hiện.",
        "memoryHook": "Persistent force majeure allows contract termination free from liquidated damages."
      },
      {
        "id": "u85-e5",
        "type": "chat_branch",
        "promptEn": "Geopolitical Crisis Management: Handle sudden Red Sea canal surcharges with a German importer:",
        "promptVi": "Đàm phán khủng hoảng địa chính trị: Phản hồi đối tác Đức đòi Vikoda chịu toàn bộ phụ phí đổi hải trình qua mũi Hảo Vọng:",
        "englishSentence": "Herr Richter, under Section 14 (Hardship & Geopolitical Rerouting) of our Master Agreement, carrier war risk surcharges constitute unforeseeable operational hardship. We propose sharing the carrier bunker surcharge 50/50 while we expedite direct shipments to ensure your German retail distribution is uninterrupted.",
        "audioText": "Herr Richter, under Section 14 (Hardship & Geopolitical Rerouting) of our Master Agreement, carrier war risk surcharges constitute unforeseeable operational hardship. We propose sharing the carrier bunker surcharge 50/50 while we expedite direct shipments to ensure your German retail distribution is uninterrupted.",
        "chatMessages": [
          {
            "speaker": "Hans Richter (Managing Director, Hamburg Beverages)",
            "avatar": "🇩🇪",
            "message": "Minh, ocean carriers are rerouting around the Cape of Good Hope, adding 14 days and $2,000 per container. Under our CIF contract, you must absorb this surcharge entirely or we will claim breach of contract!"
          }
        ],
        "chatOptions": [
          {
            "text": "Herr Richter, under Section 14 (Hardship & Geopolitical Rerouting) of our Master Agreement, carrier war risk surcharges constitute unforeseeable operational hardship. We propose sharing the carrier bunker surcharge 50/50 while we expedite direct shipments to ensure your German retail distribution is uninterrupted.",
            "trustScore": 25,
            "feedback": "Nghệ thuật đàm phán khủng hoảng đỉnh cao (+25 Điểm Tin Cậy)! Vận dụng khéo léo Điều khoản Hoàn cảnh khó khăn (Hardship) để chia sẻ chi phí phát sinh công bằng, bảo toàn biên lợi nhuận và duy trì mối quan hệ liên minh bền vững.",
            "isCorrect": true
          },
          {
            "text": "Not our problem at all! Pay the carriers yourself or we will terminate your distribution contract right now!",
            "trustScore": 0,
            "feedback": "Phản ứng kích động dẫn đến tranh chấp pháp lý quốc tế và hủy hoại toàn bộ mạng lưới phân phối tại thị trường Đức.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông Richter, theo Điều 14 (Hoàn cảnh Khó khăn & Thay đổi Hải trình Địa chính trị) trong Thỏa thuận Khung, phụ phí rủi ro chiến tranh của hãng tàu cấu thành trở ngại vận hành không thể lường trước. Chúng tôi đề xuất cùng chia sẻ phụ phí nhiên liệu của hãng tàu theo tỷ lệ 50/50 đồng thời đẩy nhanh các lô hàng trực tiếp để bảo đảm mạng lưới bán lẻ tại Đức của quý công ty không bị gián đoạn.",
        "explanation": "Kích hoạt điều khoản Hardship một cách xây dựng giúp tái cân bằng gánh nặng tài chính khi chi phí cước biển biến động do chiến tranh.",
        "crucialNote": "Hợp đồng thương mại quốc tế chuyên nghiệp luôn kết hợp cả điều khoản Bất khả kháng lẫn điều khoản Hoàn cảnh khó khăn (Hardship).",
        "memoryHook": "Leverage hardship clauses to share extraordinary geopolitical surcharges fairly."
      }
    ]
  },
  {
    "id": "unit-86",
    "unitNumber": 86,
    "title": "Thiết Lập Mạng Lưới Phân Phối Toàn Cầu",
    "subtitle": "Chiến lược tìm đối tác Master Distributor tại Nhật và Châu Âu",
    "level": "C1-C2",
    "icon": "🌐",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u86-e1",
        "type": "match_pairs",
        "promptEn": "Match each global master distribution strategy term with its core concept:",
        "promptVi": "Nối các thuật ngữ thiết lập kênh phân phối tổng toàn cầu với khái niệm cốt lõi:",
        "englishSentence": "Match the 5 global master distribution strategy terms.",
        "audioText": "Match the 5 global master distribution strategy terms.",
        "explanation": "Lựa chọn và quản lý Nhà phân phối Tổng (Master Distributor) là yếu tố quyết định tốc độ thâm nhập và độ phủ thương hiệu Vikoda tại các thị trường phát triển.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ then chốt trong xây dựng mạng lưới phân phối xuất khẩu độc quyền.",
        "pairs": [
          {
            "left": "Master Distributor Agreement",
            "right": "Hợp đồng nhà phân phối tổng độc quyền cấp vùng hoặc quốc gia"
          },
          {
            "left": "Minimum Annual Purchase Quota",
            "right": "Chỉ tiêu sản lượng mua hàng bắt buộc tối thiểu hàng năm"
          },
          {
            "left": "Territory & Exclusivity Grant",
            "right": "Trao quyền phân phối độc quyền theo phạm vi địa lý xác định"
          },
          {
            "left": "Direct Store Delivery (DSD)",
            "right": "Mạng lưới xe vận tải giao hàng trực tiếp đến từng điểm bán lẻ"
          },
          {
            "left": "Non-Compete Undertaking",
            "right": "Cam kết không kinh doanh bất kỳ sản phẩm nước khoáng kiềm đối thủ"
          }
        ]
      },
      {
        "id": "u86-e2",
        "type": "speak",
        "promptEn": "Shadow this strategic partner evaluation statement:",
        "promptVi": "Luyện nói câu tiêu chuẩn thẩm định nhà phân phối quốc tế chuẩn phong thái C-Suite:",
        "englishSentence": "We evaluate potential master distributors based on their cold-chain logistics footprint, premium HORECA relationships, and financial solvency.",
        "audioText": "We evaluate potential master distributors based on their cold-chain logistics footprint, premium HORECA relationships, and financial solvency.",
        "phonetics": "/wiː ɪˈvæljʊeɪt pəˈtɛnʃl ˈmæstər dɪsˈtrɪbjʊtərz beɪst ɒn ðeər koʊld-tʃeɪn ləˈdʒɪstɪks ˈfʊtprɪnt, ˈpriːmiəm ˈhoʊrɛkə rɪˈleɪʃnʃɪps, ænd faɪˈnænʃl ˈsɒlvənsi/",
        "vietnameseMeaning": "Chúng tôi đánh giá các nhà phân phối tổng tiềm năng dựa trên mạng lưới logistics chuỗi cung ứng, mối quan hệ trong kênh HORECA cao cấp và năng lực tài chính lành mạnh.",
        "explanation": "Các tiêu chí 'logistics footprint', 'HORECA relationships' và 'financial solvency' là bộ 3 tiêu chuẩn vàng để chọn mặt gửi vàng khi mở rộng xuất khẩu.",
        "whyWrong": "Chú ý phát âm rõ trọng âm của 'solvency' (/ˈsɒlvənsi/ - khả năng thanh toán).",
        "crucialNote": "Một đối tác có kênh HORECA mạnh sẽ giúp Vikoda định vị ngay tại các nhà hàng, khách sạn 5 sao quốc tế.",
        "memoryHook": "Logistics footprint, HORECA network, and solvency define premier master distributors."
      },
      {
        "id": "u86-e3",
        "type": "word_order",
        "promptEn": "Construct the contractual clause protecting Vikoda against sales underperformance:",
        "promptVi": "Sắp xếp các từ thành điều khoản thu hồi quyền độc quyền khi nhà phân phối không đạt chỉ tiêu:",
        "englishSentence": "Failure to fulfill seventy percent of the quarterly purchase quota entitles Vikoda to revoke territorial exclusivity.",
        "audioText": "Failure to fulfill seventy percent of the quarterly purchase quota entitles Vikoda to revoke territorial exclusivity.",
        "wordPool": [
          "Failure",
          "to",
          "fulfill",
          "seventy",
          "percent",
          "of",
          "the",
          "quarterly",
          "purchase",
          "quota",
          "entitles",
          "Vikoda",
          "to",
          "revoke",
          "territorial",
          "exclusivity.",
          "reward",
          "concede"
        ],
        "vietnameseMeaning": "Việc không hoàn thành bảy mươi phần trăm chỉ tiêu mua hàng theo quý cho phép Vikoda thu hồi quyền độc quyền lãnh thổ.",
        "explanation": "Điều khoản ràng buộc 'Failure to fulfill... entitles Vikoda to revoke territorial exclusivity' bảo vệ tập đoàn không bị khóa thị trường bởi một đối tác trì trệ.",
        "whyWrong": "Cần đặt cụm chủ ngữ dài 'Failure to fulfill seventy percent of the quarterly purchase quota' đứng trước động từ chính 'entitles'.",
        "crucialNote": "Luôn quy định quyền chuyển đổi từ nhà phân phối độc quyền sang không độc quyền (non-exclusive) trước khi chấm dứt hẳn.",
        "memoryHook": "Failing quarterly quotas entitles the exporter to revoke territorial exclusivity."
      },
      {
        "id": "u86-e4",
        "type": "fill_blank",
        "promptEn": "Complete the marketing co-investment obligation with the right retail term:",
        "promptVi": "Chọn thuật ngữ trưng bày bán lẻ chuẩn xác để hoàn thiện điều khoản cam kết đầu tư tiếp thị:",
        "englishSentence": "To safeguard our brand equity in Western Europe, the master distributor agrees to assign a dedicated brand manager and allocate five percent of wholesale revenue to local [ _____ ] campaigns.",
        "audioText": "To safeguard our brand equity in Western Europe, the master distributor agrees to assign a dedicated brand manager and allocate five percent of wholesale revenue to local merchandising campaigns.",
        "blankWord": "merchandising",
        "options": [
          "merchandising",
          "insolvency",
          "subrogation"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Để bảo vệ giá trị thương hiệu tại Tây Âu, nhà phân phối tổng đồng ý chỉ định một giám đốc thương hiệu riêng và trích năm phần trăm doanh thu bán buôn cho các chiến dịch trưng bày quảng bá tại địa phương.",
        "explanation": "'Merchandising' (hoạt động trưng bày, quảng bá điểm bán và định vị quầy kệ) bảo đảm sản phẩm Vikoda luôn xuất hiện ở những vị trí đắc địa nhất trong siêu thị.",
        "whyWrong": "'Insolvency' (mất khả năng thanh toán) và 'subrogation' (thế quyền đòi nợ) hoàn toàn vô nghĩa trong điều khoản tiếp thị.",
        "crucialNote": "Quy định tỷ lệ phần trăm doanh thu tái đầu tư tiếp thị (co-op marketing budget) bảo đảm ngân sách xây dựng thương hiệu đường dài.",
        "memoryHook": "Mandate local merchandising investment to amplify international retail visibility."
      },
      {
        "id": "u86-e5",
        "type": "chat_branch",
        "promptEn": "Global Territory Negotiation: Respond to a premature regional exclusivity demand:",
        "promptVi": "Đàm phán nhượng quyền khu vực: Xử lý yêu cầu độc quyền toàn Đông Nam Á trong 5 năm từ đối tác Singapore:",
        "englishSentence": "Mr. Tan, SingaFoods is our premier candidate for Southeast Asia. To align our long-term mutual growth, we propose granting Singapore exclusivity for Year 1 with a 150-container quota, and tying regional expansion into Malaysia and Indonesia to achieving agreed distribution milestones.",
        "audioText": "Mr. Tan, SingaFoods is our premier candidate for Southeast Asia. To align our long-term mutual growth, we propose granting Singapore exclusivity for Year 1 with a 150-container quota, and tying regional expansion into Malaysia and Indonesia to achieving agreed distribution milestones.",
        "chatMessages": [
          {
            "speaker": "Aaron Tan (CEO, SingaFoods Distribution Group)",
            "avatar": "🇸🇬",
            "message": "Minh, we represent over 800 premium supermarkets across Singapore, Malaysia, and Indonesia. We want 5-year exclusive regional rights for Vikoda natural alkaline mineral water starting next month."
          }
        ],
        "chatOptions": [
          {
            "text": "Mr. Tan, SingaFoods is our premier candidate for Southeast Asia. To align our long-term mutual growth, we propose granting Singapore exclusivity for Year 1 with a 150-container quota, and tying regional expansion into Malaysia and Indonesia to achieving agreed distribution milestones.",
            "trustScore": 25,
            "feedback": "Chiến lược phân phối bậc thầy (+25 Điểm Tin Cậy)! Vừa tôn vinh vị thế đối tác, vừa khôn khéo chia nhỏ lộ trình: trao độc quyền từng thị trường kèm định ngạch rõ ràng thay vì trao toàn quyền cả khu vực ngay lập tức.",
            "isCorrect": true
          },
          {
            "text": "Take all countries right now for free! We don't care about sales quotas or targets as long as you put our name on your catalog.",
            "trustScore": 0,
            "feedback": "Tự tay trói buộc doanh nghiệp vào một bản hợp đồng độc quyền nguy hiểm, mất trắng thị trường Đông Nam Á nếu đối tác không bán được hàng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông Tan, SingaFoods là ứng viên hàng đầu của chúng tôi tại Đông Nam Á. Để đồng hành phát triển bền vững cùng nhau, chúng tôi đề xuất trao quyền độc quyền tại Singapore trong Năm 1 với chỉ tiêu 150 container, và gắn lộ trình mở rộng sang Malaysia cùng Indonesia với việc hoàn thành các mốc phân phối đã cam kết.",
        "explanation": "Phương pháp 'Milestone-based Exclusivity' (trao quyền độc quyền theo từng mốc thành tựu) là quy tắc vàng của các tập đoàn đa quốc gia.",
        "crucialNote": "Không bao giờ trao quyền độc quyền nhiều quốc gia mà không có chỉ tiêu sản lượng cam kết độc lập cho từng thị trường.",
        "memoryHook": "Tie territorial expansion to proven sales milestones."
      }
    ]
  },
  {
    "id": "unit-87",
    "unitNumber": 87,
    "title": "Xử Lý Khiếu Nại Container Độ Ẩm Trên Biển",
    "subtitle": "Giải quyết kỹ thuật chống đọng sương và bảo vệ nhãn chai",
    "level": "C1-C2",
    "icon": "💧",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u87-e1",
        "type": "match_pairs",
        "promptEn": "Match each container moisture management term with its engineering solution:",
        "promptVi": "Nối các thuật ngữ kỹ thuật kiểm soát độ ẩm container biển với giải pháp tương ứng:",
        "englishSentence": "Match the 5 container moisture and condensation control concepts.",
        "audioText": "Match the 5 container moisture and condensation control concepts.",
        "explanation": "Kiểm soát độ ẩm và chống đọng sương (container rain) trong vận tải viễn dương bảo đảm nhãn mác chai thủy tinh và thùng carton Vikoda luôn nguyên vẹn khi đến tay người tiêu dùng quốc tế.",
        "vietnameseMeaning": "Nối đúng 5 giải pháp kỹ thuật chống ẩm và đọng sương trong vận chuyển đường biển nhiệt đới.",
        "pairs": [
          {
            "left": "Container Rain & Cargo Sweat",
            "right": "Hiện tượng ngưng tụ đọng sương trên trần và vách container do chênh lệch nhiệt độ"
          },
          {
            "left": "Calcium Chloride Desiccant Poles",
            "right": "Thanh hút ẩm canxi clorua chuyên dụng treo vách container hấp thụ 200% độ ẩm"
          },
          {
            "left": "Heavy-Duty 5-Ply Cartons",
            "right": "Thùng carton 5 lớp tráng màng kháng nước bảo vệ chai không bị móp méo"
          },
          {
            "left": "Relative Humidity (RH) Data Logger",
            "right": "Thiết bị ghi nhận dữ liệu nhiệt độ và độ ẩm tương đối trong suốt hành trình"
          },
          {
            "left": "Moisture-Resistant Labels",
            "right": "Nhãn chai công nghệ cao chống thấm nước và chống bong tróc keo dán"
          }
        ]
      },
      {
        "id": "u87-e2",
        "type": "speak",
        "promptEn": "Shadow this technical packaging engineering statement:",
        "promptVi": "Luyện phát âm câu giải trình tiêu chuẩn kỹ thuật đóng gói chống ẩm viễn dương:",
        "englishSentence": "To eliminate moisture damage across tropical shipping lanes, our export containers are fitted with high-absorption desiccant poles and humidity data loggers.",
        "audioText": "To eliminate moisture damage across tropical shipping lanes, our export containers are fitted with high-absorption desiccant poles and humidity data loggers.",
        "phonetics": "/tuː ɪˈlɪmɪneɪt ˈmɔɪstʃər ˈdæmɪdʒ əˈkrɒs ˈtrɒpɪkl ˈʃɪpɪŋ leɪnz, ˈaʊər ˈɛkspɔːrt kənˈteɪnərz ɑːr ˈfɪtɪd wɪð haɪ-əbˈzɔːrpʃn ˈdɛsɪkənt poʊlz ænd hjuːˈmɪdɪti ˈdeɪtə ˈlɒɡərz/",
        "vietnameseMeaning": "Để loại bỏ hoàn toàn hư hại do độ ẩm trên các tuyến vận tải nhiệt đới, các container xuất khẩu của chúng tôi được trang bị thanh hút ẩm khả năng hấp thụ cao và thiết bị ghi nhận dữ liệu độ ẩm.",
        "explanation": "Các thuật ngữ 'high-absorption desiccant poles' và 'humidity data loggers' chứng minh quy trình kiểm soát logistics tiêu chuẩn cao.",
        "whyWrong": "Chú ý phát âm rõ âm /s/ trong 'desiccant' (/ˈdɛsɪkənt/) và /dʒ/ trong 'damage'.",
        "crucialNote": "Data logger độ ẩm cung cấp bằng chứng khách quan nếu phát sinh tranh chấp bồi thường với hãng tàu hoặc công ty bảo hiểm.",
        "memoryHook": "High-absorption desiccants and data loggers safeguard tropical maritime shipments."
      },
      {
        "id": "u87-e3",
        "type": "word_order",
        "promptEn": "Assemble the root cause analysis sentence explaining maritime condensation:",
        "promptVi": "Sắp xếp các từ thành câu phân tích nguyên nhân hiện tượng đọng sương trong vận tải biển:",
        "englishSentence": "Temperature fluctuations during transshipment can cause condensation if carton ventilation holes are improperly aligned.",
        "audioText": "Temperature fluctuations during transshipment can cause condensation if carton ventilation holes are improperly aligned.",
        "wordPool": [
          "Temperature",
          "fluctuations",
          "during",
          "transshipment",
          "can",
          "cause",
          "condensation",
          "if",
          "carton",
          "ventilation",
          "holes",
          "are",
          "improperly",
          "aligned.",
          "dryness",
          "freeze"
        ],
        "vietnameseMeaning": "Sự dao động nhiệt độ trong quá trình chuyển tải có thể gây ngưng tụ nếu các lỗ thông khí trên thùng carton không được căn chỉnh đúng cách.",
        "explanation": "Cấu trúc điều kiện loại 1 diễn đạt mối quan hệ nhân quả vật lý giữa 'temperature fluctuations' và 'condensation'.",
        "whyWrong": "Tránh nhầm lẫn vị trí của trạng từ 'improperly' trước quá khứ phân từ 'aligned'.",
        "crucialNote": "Khi tàu đi từ vùng nhiệt đới sang vùng ôn đới, nhiệt độ vách vỏ thép container giảm nhanh hơn nhiệt độ không khí bên trong, gây đọng sương.",
        "memoryHook": "Temperature fluctuations trigger condensation during container transshipment."
      },
      {
        "id": "u87-e4",
        "type": "fill_blank",
        "promptEn": "Fill in the exact scientific measurement parameter:",
        "promptVi": "Điền chỉ số đo lường độ ẩm môi trường chính xác vào báo cáo:",
        "englishSentence": "Laboratory inspection confirmed that the carton softening was caused by elevated maritime [ _____ ] exceeding eighty-five percent during the equatorial crossing.",
        "audioText": "Laboratory inspection confirmed that the carton softening was caused by elevated maritime humidity exceeding eighty-five percent during the equatorial crossing.",
        "blankWord": "humidity",
        "options": [
          "humidity",
          "viscosity",
          "solvency"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Kết quả kiểm nghiệm phòng thí nghiệm xác nhận hiện tượng thùng carton bị mềm là do độ ẩm hàng hải tăng cao vượt quá tám mươi lăm phần trăm trong quá trình tàu vượt xích đạo.",
        "explanation": "'Maritime humidity' (độ ẩm không khí trên biển) vượt quá 85% là tác nhân chính làm giảm độ cứng nén của giấy carton nếu không có phụ gia chống thấm.",
        "whyWrong": "'Viscosity' (độ nhớt của chất lỏng) và 'solvency' (khả năng thanh toán tài chính) hoàn toàn không liên quan đến thời tiết biển.",
        "crucialNote": "Sử dụng giấy kraft nguyên sinh định lượng cao giúp duy trì độ cứng thùng carton ngay cả ở độ ẩm 90%.",
        "memoryHook": "Elevated maritime humidity weakens unprotected carton packaging."
      },
      {
        "id": "u87-e5",
        "type": "chat_branch",
        "promptEn": "Technical Packaging Claim: Reassure the Japanese QA Director with engineered solutions:",
        "promptVi": "Xử lý khiếu nại kỹ thuật bao bì: Giải trình giải pháp khắc phục hiện tượng ẩm mép thùng với đối tác Tokyo:",
        "englishSentence": "Takahashi-san, our packaging engineers have thoroughly investigated. For all subsequent shipments, we have upgraded to 5-ply waterproof virgin kraft board with double-strength wax coating, increased desiccant capacity to eight 2kg hanging poles per container, and added shrink-wrapped top covers on each wooden pallet.",
        "audioText": "Takahashi-san, our packaging engineers have thoroughly investigated. For all subsequent shipments, we have upgraded to 5-ply waterproof virgin kraft board with double-strength wax coating, increased desiccant capacity to eight 2kg hanging poles per container, and added shrink-wrapped top covers on each wooden pallet.",
        "chatMessages": [
          {
            "speaker": "Kenji Takahashi (Logistics Director, Tokyo Imports)",
            "avatar": "🇯🇵",
            "message": "Minh-san, we noticed minor dampness on the top tier of cartons in container TCLU4098. The glass bottles are intact, but Japanese retail standards strictly reject warped cartons. What preventive engineering upgrades are in place?"
          }
        ],
        "chatOptions": [
          {
            "text": "Takahashi-san, our packaging engineers have thoroughly investigated. For all subsequent shipments, we have upgraded to 5-ply waterproof virgin kraft board with double-strength wax coating, increased desiccant capacity to eight 2kg hanging poles per container, and added shrink-wrapped top covers on each wooden pallet.",
            "trustScore": 25,
            "feedback": "Giải trình kỹ thuật hoàn hảo (+25 Điểm Tin Cậy)! Đưa ra giải pháp nâng cấp 3 lớp toàn diện (thùng 5 lớp phủ sáp, tăng gấp đôi thanh hút ẩm, bọc màng co nóc pallet), đáp ứng trọn vẹn tiêu chuẩn khắt khe bậc nhất của thị trường Nhật Bản.",
            "isCorrect": true
          },
          {
            "text": "A little moisture is natural on the sea, just wipe the boxes with dry towels and deliver them to your supermarkets immediately.",
            "trustScore": 0,
            "feedback": "Thái độ qua loa coi thường tiêu chuẩn chất lượng khiến đối tác Nhật lập tức ngừng nhập khẩu.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông Takahashi, các kỹ sư bao bì của chúng tôi đã điều tra kỹ lưỡng. Đối với tất cả các lô hàng tiếp theo, chúng tôi đã nâng cấp lên thùng carton 5 lớp bằng giấy kraft nguyên sinh chống thấm phủ sáp tăng cường, nâng công suất hút ẩm lên tám thanh treo 2kg mỗi container và bọc thêm màng co chống thấm trên nóc mỗi kiện pallet gỗ.",
        "explanation": "Phản hồi bằng giải pháp kỹ thuật cụ thể và định lượng chi tiết là cách duy nhất chinh phục bộ phận đảm bảo chất lượng (QA) Nhật Bản.",
        "crucialNote": "Thị trường Nhật Bản xem bao bì ngoài cũng quan trọng ngang với chất lượng sản phẩm bên trong.",
        "memoryHook": "Overcome maritime moisture with 5-ply wax-coated cartons and pallet shrink covers."
      }
    ]
  },
  {
    "id": "unit-88",
    "unitNumber": 88,
    "title": "Thông Quan & Tiêu Chuẩn FDA / Nhật Bản",
    "subtitle": "Hồ sơ kiểm dịch thực phẩm nghiêm ngặt của Bộ Y Tế Nhật",
    "level": "C1-C2",
    "icon": "📑",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u88-e1",
        "type": "match_pairs",
        "promptEn": "Match each food safety and international customs regulatory term:",
        "promptVi": "Nối các thuật ngữ an toàn thực phẩm và thông quan quốc tế với định nghĩa tương ứng:",
        "englishSentence": "Match the 5 food safety and international customs regulatory terms.",
        "audioText": "Match the 5 food safety and international customs regulatory terms.",
        "explanation": "Vượt qua kiểm dịch gắt gao của Bộ Y tế Nhật Bản (MHLW) và Cục FDA Hoa Kỳ là bảo chứng vàng cho đẳng cấp quốc tế của nước khoáng kiềm Vikoda.",
        "vietnameseMeaning": "Nối đúng 5 tiêu chuẩn pháp lý thông quan và kiểm dịch thực phẩm xuất khẩu.",
        "pairs": [
          {
            "left": "Japan Food Sanitation Act",
            "right": "Đạo luật Vệ sinh Thực phẩm nghiêm ngặt của Bộ Y tế Lao động Phúc lợi Nhật"
          },
          {
            "left": "US FDA Prior Notice",
            "right": "Khai báo thông báo trước điện tử bắt buộc cho mọi lô hàng vào cảng Mỹ"
          },
          {
            "left": "Microbiological Testing Protocol",
            "right": "Quy trình xét nghiệm vi sinh nghiêm ngặt bảo đảm 0% khuẩn E. coli"
          },
          {
            "left": "Heavy Metal & Radiation Screening",
            "right": "Kiểm nghiệm sàng lọc kim loại nặng độc hại và chỉ tiêu phóng xạ"
          },
          {
            "left": "Quarantine Clearance Certificate",
            "right": "Giấy chứng nhận hoàn thành thủ tục kiểm dịch thông quan hải quan"
          }
        ]
      },
      {
        "id": "u88-e2",
        "type": "speak",
        "promptEn": "Shadow this international food compliance statement with authoritative conviction:",
        "promptVi": "Luyện phát âm câu tuyên bố tuân thủ tiêu chuẩn an toàn thực phẩm khắt khe thế giới:",
        "englishSentence": "Our natural alkaline mineral water undergoes comprehensive third-party testing to comply with both US FDA regulations and Japan MHLW food sanitation standards.",
        "audioText": "Our natural alkaline mineral water undergoes comprehensive third-party testing to comply with both US FDA regulations and Japan MHLW food sanitation standards.",
        "phonetics": "/ˈaʊər ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈwɔːtər ˌʌndərˈɡoʊz ˌkɒmprɪˈhɛnsɪv ˈθɜːrd-ˈpɑːrti ˈtɛstɪŋ tuː kəmˈplaɪ wɪð boʊθ juː-ɛs ɛf-diː-eɪ ˌrɛɡjʊˈleɪʃnz ænd dʒəˈpæn ɛm-eɪtʃ-ɛl-dʌbljuː fuːd ˌsænɪˈteɪʃn ˈstændərdz/",
        "vietnameseMeaning": "Nước khoáng kiềm thiên nhiên của chúng tôi trải qua kiểm nghiệm độc lập toàn diện để tuân thủ cả quy định của FDA Hoa Kỳ và tiêu chuẩn vệ sinh thực phẩm của Bộ Y tế Nhật Bản.",
        "explanation": "Cụm từ 'comply with both US FDA regulations and Japan MHLW standards' thể hiện sự tự tin về đẳng cấp tinh khiết toàn cầu.",
        "whyWrong": "Đọc rõ các từ viết tắt: FDA (/ɛf-diː-eɪ/) và MHLW (/ɛm-eɪtʃ-ɛl-dʌbljuː/).",
        "crucialNote": "Nhật Bản có một trong những bộ tiêu chuẩn nhập khẩu nước khoáng đóng chai khắt khe nhất thế giới.",
        "memoryHook": "Complying with FDA and MHLW confirms world-class water purity."
      },
      {
        "id": "u88-e3",
        "type": "word_order",
        "promptEn": "Build the legal submission sentence for customs quarantine clearance:",
        "promptVi": "Sắp xếp các từ thành câu nộp hồ sơ địa chất và vi sinh để thông quan kiểm dịch:",
        "englishSentence": "We submitted the complete hydrogeological survey and certified microbiological analysis to expedite customs quarantine clearance.",
        "audioText": "We submitted the complete hydrogeological survey and certified microbiological analysis to expedite customs quarantine clearance.",
        "wordPool": [
          "We",
          "submitted",
          "the",
          "complete",
          "hydrogeological",
          "survey",
          "and",
          "certified",
          "microbiological",
          "analysis",
          "to",
          "expedite",
          "customs",
          "quarantine",
          "clearance.",
          "delay",
          "falsify"
        ],
        "vietnameseMeaning": "Chúng tôi đã nộp đầy đủ khảo sát địa chất thủy văn và phân tích vi sinh có chứng thực để đẩy nhanh quá trình thông quan kiểm dịch hải quan.",
        "explanation": "Khảo sát địa chất thủy văn (hydrogeological survey) chứng minh nguồn nước có nguồn gốc tự nhiên được bảo vệ dưới lòng đất.",
        "whyWrong": "Chú ý đặt cụm mục đích 'to expedite customs quarantine clearance' ở cuối câu để bảo đảm mạch lạc ngữ pháp.",
        "crucialNote": "Nộp trước hồ sơ phân tích vi sinh giúp giảm thời gian lấy mẫu kiểm tra tại cảng từ 14 ngày xuống còn 2 ngày.",
        "memoryHook": "Hydrogeological surveys and certified lab assays expedite quarantine clearance."
      },
      {
        "id": "u88-e4",
        "type": "fill_blank",
        "promptEn": "Select the mandatory US customs regulatory filing term:",
        "promptVi": "Chọn thuật ngữ thủ tục bắt buộc trước khi cập cảng Hoa Kỳ:",
        "englishSentence": "Before entering US ports, every foreign food facility must register with the FDA and submit an electronic [ _____ ] Notice of shipment.",
        "audioText": "Before entering US ports, every foreign food facility must register with the FDA and submit an electronic Prior Notice of shipment.",
        "blankWord": "Prior",
        "options": [
          "Prior",
          "Provisional",
          "Postponed"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Trước khi cập cảng Hoa Kỳ, mọi cơ sở chế biến thực phẩm nước ngoài phải đăng ký với FDA và nộp Thông báo Trước điện tử về lô hàng.",
        "explanation": "'Prior Notice' (Thông báo trước lô hàng thực phẩm nhập khẩu theo Đạo luật Chống khủng bố Sinh học Hoa Kỳ) là thủ tục bắt buộc phải hoàn tất trước khi tàu cập cảng.",
        "whyWrong": "'Provisional' (tạm thời) và 'postponed' (trì hoãn) không phải là tên thủ tục pháp lý của FDA.",
        "crucialNote": "Không nộp Prior Notice sẽ khiến hàng hóa bị từ chối nhập cảnh ngay tại cầu cảng và bị giữ lại tại khu vực lưu kho ngoại quan.",
        "memoryHook": "Electronic Prior Notice is mandatory for all food shipments entering the US."
      },
      {
        "id": "u88-e5",
        "type": "chat_branch",
        "promptEn": "Quarantine Inquest Defense: Clarify natural mineral genesis to Tokyo quarantine officials:",
        "promptVi": "Bảo vệ hồ sơ kiểm dịch: Giải trình nguồn gốc khoáng hóa tự nhiên với thanh tra viên Bộ Y Tế Nhật Bản:",
        "englishSentence": "Inspector Sato, we are providing the certified hydrogeological extraction dossier from the 220-meter deep Danh Thanh aquifer, co-signed by the Pasteur Institute, confirming our mineral composition is 100% naturally dissolved through subterranean magma bedrock and bottled pristine directly at the 72°C wellhead without artificial additives.",
        "audioText": "Inspector Sato, we are providing the certified hydrogeological extraction dossier from the 220-meter deep Danh Thanh aquifer, co-signed by the Pasteur Institute, confirming our mineral composition is 100% naturally dissolved through subterranean magma bedrock and bottled pristine directly at the 72°C wellhead without artificial additives.",
        "chatMessages": [
          {
            "speaker": "Inspector Sato (MHLW Quarantine Officer, Tokyo Port)",
            "avatar": "🇯🇵",
            "message": "Vikoda's sample demonstrates a remarkably stable natural pH of 9.0 and rich metasilicic acid content. Japanese regulations require definitive empirical proof that these minerals originate naturally from the geothermal spring without chemical electrolyte addition."
          }
        ],
        "chatOptions": [
          {
            "text": "Inspector Sato, we are providing the certified hydrogeological extraction dossier from the 220-meter deep Danh Thanh aquifer, co-signed by the Pasteur Institute, confirming our mineral composition is 100% naturally dissolved through subterranean magma bedrock and bottled pristine directly at the 72°C wellhead without artificial additives.",
            "trustScore": 25,
            "feedback": "Giải trình khoa học hoàn hảo (+25 Điểm Tin Cậy)! Cung cấp đầy đủ bằng chứng địa chất thủy văn 220m mỏ Đảnh Thạnh cùng chứng thực của Viện Pasteur, đập tan mọi nghi ngờ và nhận ngay chứng nhận kiểm dịch thông quan tuyệt đối.",
            "isCorrect": true
          },
          {
            "text": "We add high-grade industrial chemicals in our blending tanks to get pH 9.0, is that not allowed in Japan?",
            "trustScore": 0,
            "feedback": "Khai báo sai sự thật dẫn đến việc bị xếp vào diện thực phẩm gian dối, tiêu hủy toàn bộ lô hàng và cấm xuất khẩu vĩnh viễn sang Nhật.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa Thanh tra Sato, chúng tôi xin cung cấp hồ sơ khai thác địa chất thủy văn có chứng thực từ tầng ngậm nước Đảnh Thạnh sâu 220 mét do Viện Pasteur đồng ký tên, xác nhận rằng thành phần khoáng chất của chúng tôi được hòa tan tự nhiên 100% qua các tầng đá mắc-ma ngầm và được đóng chai nguyên sơ trực tiếp tại đầu nguồn 72°C mà không qua bất kỳ chất phụ gia nhân tạo nào.",
        "explanation": "Dữ liệu khoa học chính xác và chứng nhận quốc tế độc lập là chìa khóa mở toang cánh cửa thị trường kiểm dịch khó tính nhất hành tinh.",
        "crucialNote": "Nhật Bản phân biệt rất rạch ròi giữa nước khoáng kiềm thiên nhiên (Natural Mineral Water) và nước kiềm nhân tạo qua máy điện phân.",
        "memoryHook": "Scientific Pasteur data proves 100% natural subterranean mineral origin."
      }
    ]
  },
  {
    "id": "unit-89",
    "unitNumber": 89,
    "title": "Trọng Tài Thương Mại Quốc Tế SIAC / VIAC",
    "subtitle": "Điều khoản tài phán giải quyết tranh chấp hợp đồng công bằng",
    "level": "C1-C2",
    "icon": "⚖️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u89-e1",
        "type": "match_pairs",
        "promptEn": "Pair each international commercial arbitration concept with its legal meaning:",
        "promptVi": "Nối các thuật ngữ trọng tài thương mại quốc tế với định nghĩa pháp lý tương ứng:",
        "englishSentence": "Match the 5 international commercial arbitration concepts.",
        "audioText": "Match the 5 international commercial arbitration concepts.",
        "explanation": "Chỉ định trung tâm trọng tài uy tín như SIAC (Singapore) hoặc VIAC (Việt Nam) bảo đảm mọi tranh chấp hợp đồng xuyên biên giới được giải quyết công bằng, bảo mật và chung thẩm.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ tài phán trọng tài thương mại quốc tế.",
        "pairs": [
          {
            "left": "SIAC Arbitration (Singapore)",
            "right": "Trọng tài Quốc tế Singapore - trung tâm trọng tài thương mại hàng đầu châu Á"
          },
          {
            "left": "VIAC Arbitration (Vietnam)",
            "right": "Trung tâm Trọng tài Quốc tế Việt Nam giải quyết tranh chấp thương mại"
          },
          {
            "left": "Governing Law & Seat of Arbitration",
            "right": "Luật áp dụng điều chỉnh hợp đồng và địa điểm pháp lý tiến hành trọng tài"
          },
          {
            "left": "Final & Binding Arbitral Award",
            "right": "Phán quyết trọng tài có giá trị chung thẩm và bắt buộc các bên thi hành"
          },
          {
            "left": "1958 New York Convention",
            "right": "Công ước công nhận và cho thi hành phán quyết trọng tài tại hơn 160 quốc gia"
          }
        ]
      },
      {
        "id": "u89-e2",
        "type": "speak",
        "promptEn": "Shadow this standard cross-border arbitration clause:",
        "promptVi": "Luyện phát âm điều khoản trọng tài quốc tế SIAC chuẩn mực pháp lý cao cấp:",
        "englishSentence": "Any dispute arising out of this cross-border contract shall be settled definitively by arbitration under the rules of the Singapore International Arbitration Centre.",
        "audioText": "Any dispute arising out of this cross-border contract shall be settled definitively by arbitration under the rules of the Singapore International Arbitration Centre.",
        "phonetics": "/ˈɛni dɪˈspjuːt əˈraɪzɪŋ aʊt əv ðɪs krɒs-ˈbɔːrdər ˈkɒntrækt ʃæl biː ˈsɛtld dɪˈfɪnətɪvli baɪ ˌɑːrbɪˈtreɪʃn ˈʌndər ðə ruːlz əv ðə ˈsɪŋəpɔːr ˌɪntərˈnæʃnəl ˌɑːrbɪˈtreɪʃn ˈsɛntər/",
        "vietnameseMeaning": "Mọi tranh chấp phát sinh từ hợp đồng xuyên biên giới này sẽ được giải quyết chung thẩm bằng trọng tài theo quy tắc của Trung tâm Trọng tài Quốc tế Singapore.",
        "explanation": "Mẫu điều khoản trọng tài chuẩn SIAC bảo đảm tính hợp lệ không thể tranh cãi khi đưa tranh chấp ra hội đồng trọng tài.",
        "whyWrong": "Nhấn mạnh trọng âm của 'definitively' (/dɪˈfɪnətɪvli/ - một cách chung thẩm) và 'arbitration' (/ˌɑːrbɪˈtreɪʃn/).",
        "crucialNote": "Giải quyết bằng trọng tài mang tính bảo mật tuyệt đối, không công khai ra tòa án công cộng, bảo vệ danh tiếng tập đoàn.",
        "memoryHook": "SIAC arbitration delivers final, binding, and confidential dispute resolution."
      },
      {
        "id": "u89-e3",
        "type": "word_order",
        "promptEn": "Arrange the words defining the arbitration tribunal composition and language:",
        "promptVi": "Sắp xếp các từ thành câu quy định số lượng trọng tài viên và ngôn ngữ tố tụng:",
        "englishSentence": "The tribunal shall consist of three arbitrators and the official language of arbitration shall be English.",
        "audioText": "The tribunal shall consist of three arbitrators and the official language of arbitration shall be English.",
        "wordPool": [
          "The",
          "tribunal",
          "shall",
          "consist",
          "of",
          "three",
          "arbitrators",
          "and",
          "the",
          "official",
          "language",
          "of",
          "arbitration",
          "shall",
          "be",
          "English.",
          "bias",
          "prolong"
        ],
        "vietnameseMeaning": "Hội đồng trọng tài sẽ gồm ba trọng tài viên và ngôn ngữ chính thức của tố tụng trọng tài sẽ là tiếng Anh.",
        "explanation": "Hội đồng ba trọng tài viên (mỗi bên chỉ định một người, hai người cùng chọn chủ tịch hội đồng) bảo đảm tính khách quan tối đa.",
        "whyWrong": "Sử dụng trợ động từ pháp lý mang tính mệnh lệnh 'shall' trong 'shall consist of' và 'shall be English'.",
        "crucialNote": "Quy định rõ ngôn ngữ tiếng Anh ngăn ngừa các tranh cãi về chi phí và chất lượng dịch thuật tài liệu pháp lý.",
        "memoryHook": "Tribunals consist of three arbitrators operating under official English proceedings."
      },
      {
        "id": "u89-e4",
        "type": "fill_blank",
        "promptEn": "Complete the international treaty enforcement clause with the appropriate adjective:",
        "promptVi": "Chọn tính từ chính xác chỉ tư cách thành viên công ước quốc tế:",
        "englishSentence": "Pursuant to the 1958 New York Convention, arbitral awards rendered by SIAC are enforceable across more than one hundred and sixty [ _____ ] member states.",
        "audioText": "Pursuant to the 1958 New York Convention, arbitral awards rendered by SIAC are enforceable across more than one hundred and sixty sovereign member states.",
        "blankWord": "sovereign",
        "options": [
          "sovereign",
          "unilateral",
          "rescinded"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Theo Công ước New York năm 1958, các phán quyết trọng tài do SIAC ban hành có hiệu lực thi hành trên hơn một trăm sáu mươi quốc gia thành viên có chủ quyền.",
        "explanation": "Công ước New York 1958 cho phép tịch biên tài sản của bên thua kiện tại bất kỳ 'sovereign member state' (quốc gia thành viên có chủ quyền) nào tham gia công ước.",
        "whyWrong": "'Unilateral' (đơn phương) và 'rescinded' (bị hủy bỏ) hoàn toàn sai lệch thuật ngữ công pháp quốc tế.",
        "crucialNote": "Phán quyết trọng tài quốc tế thậm chí còn dễ thi hành ở nước ngoài hơn bản án của tòa án quốc gia.",
        "memoryHook": "New York Convention enforces arbitral awards across sovereign member nations."
      },
      {
        "id": "u89-e5",
        "type": "chat_branch",
        "promptEn": "Dispute Forum Negotiation: Defend a neutral Singapore arbitration seat against foreign litigation:",
        "promptVi": "Đàm phán cơ quan tài phán: Thuyết phục luật sư trưởng đối tác Australia chấp thuận trọng tài trung lập SIAC:",
        "englishSentence": "Mr. O'Connor, as a global enterprise exporting across five continents, our corporate governance requires a neutral, internationally accredited forum. SIAC offers expedited commercial procedures under UNCITRAL model rules and global enforceability under the New York Convention, ensuring absolute fairness and legal certainty for both our corporations.",
        "audioText": "Mr. O'Connor, as a global enterprise exporting across five continents, our corporate governance requires a neutral, internationally accredited forum. SIAC offers expedited commercial procedures under UNCITRAL model rules and global enforceability under the New York Convention, ensuring absolute fairness and legal certainty for both our corporations.",
        "chatMessages": [
          {
            "speaker": "James O'Connor (General Counsel, Australian Beverage Alliance)",
            "avatar": "🇦🇺",
            "message": "Minh, our board is reluctant to arbitrate in Singapore due to foreign legal fees. Can we designate the Supreme Court of New South Wales in Sydney as our exclusive dispute jurisdiction?"
          }
        ],
        "chatOptions": [
          {
            "text": "Mr. O'Connor, as a global enterprise exporting across five continents, our corporate governance requires a neutral, internationally accredited forum. SIAC offers expedited commercial procedures under UNCITRAL model rules and global enforceability under the New York Convention, ensuring absolute fairness and legal certainty for both our corporations.",
            "trustScore": 25,
            "feedback": "Biện luận pháp lý xuất chúng (+25 Điểm Tin Cậy)! Khéo léo viện dẫn quy tắc quản trị tập đoàn và ưu thế thi hành toàn cầu của Công ước New York để giữ vững trọng tài trung lập SIAC, bảo vệ Vikoda không bị kéo vào tòa án địa phương xa lạ của đối tác.",
            "isCorrect": true
          },
          {
            "text": "No, Australian courts are corrupt so we will only accept Vietnamese courts in Nha Trang or no deal.",
            "trustScore": 0,
            "feedback": "Phát ngôn xúc phạm hệ thống tư pháp đối tác, làm đổ vỡ thương vụ xuất khẩu chiến lược vào thị trường Australia.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông O'Connor, là một doanh nghiệp toàn cầu xuất khẩu trên năm châu lục, quản trị tập đoàn của chúng tôi bắt buộc phải chọn một cơ quan tài phán trung lập, được quốc tế công nhận. SIAC cung cấp quy trình thương mại rút gọn theo luật mẫu UNCITRAL và khả năng thi hành trên toàn thế giới theo Công ước New York, bảo đảm tính công bằng tuyệt đối và sự an toàn pháp lý cho cả hai tập đoàn chúng ta.",
        "explanation": "Kiên định giữ lập trường trung lập (neutral forum) là nguyên tắc sống còn khi ký kết hợp đồng thương mại quốc tế trị giá lớn.",
        "crucialNote": "Không bao giờ chấp nhận cơ quan tài phán là tòa án địa phương tại quê nhà của đối tác mua nước ngoài.",
        "memoryHook": "Anchor cross-border contracts in neutral SIAC arbitration."
      }
    ]
  },
  {
    "id": "unit-90",
    "unitNumber": 90,
    "title": "Thương Thảo Hợp Đồng Liên Doanh Quốc Tế",
    "subtitle": "Góp vốn, chia sẻ lợi nhuận và chuyển giao công nghệ",
    "level": "C1-C2",
    "icon": "🏢",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u90-e1",
        "type": "match_pairs",
        "promptEn": "Match each international joint venture term with its strategic corporate governance meaning:",
        "promptVi": "Nối các thuật ngữ hợp đồng liên doanh quốc tế với ý nghĩa quản trị doanh nghiệp chiến lược:",
        "englishSentence": "Match the 5 international joint venture and governance terms.",
        "audioText": "Match the 5 international joint venture and governance terms.",
        "explanation": "Thành lập liên doanh quốc tế (IJV) kết hợp nguồn mỏ khoáng quý giá của Vikoda với mạng lưới phân phối và công nghệ tiên tiến của đối tác toàn cầu.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ cốt lõi trong đàm phán hợp đồng liên doanh quốc tế.",
        "pairs": [
          {
            "left": "International Joint Venture (IJV)",
            "right": "Doanh nghiệp liên doanh quốc tế đồng sáng lập bởi hai tập đoàn"
          },
          {
            "left": "Equity Contribution Ratio",
            "right": "Tỷ lệ góp vốn điều lệ quyết định tỷ lệ phân chia lợi nhuận"
          },
          {
            "left": "Supermajority Voting Threshold",
            "right": "Ngưỡng biểu quyết đa số tuyệt đối (75%-80%) cho các quyết định chiến lược"
          },
          {
            "left": "Technology Transfer Agreement",
            "right": "Hợp đồng chuyển giao công nghệ và quy trình tự động hóa độc quyền"
          },
          {
            "left": "Dividend Repatriation Policy",
            "right": "Chính sách chuyển lợi nhuận và cổ tức hợp pháp về nước sở tại"
          }
        ]
      },
      {
        "id": "u90-e2",
        "type": "speak",
        "promptEn": "Shadow this executive joint venture governance commitment:",
        "promptVi": "Luyện phát âm câu cam kết quản trị liên doanh cân bằng và minh bạch:",
        "englishSentence": "Our joint venture governance structure ensures balanced board representation, transparent profit distribution, and strict intellectual property protection.",
        "audioText": "Our joint venture governance structure ensures balanced board representation, transparent profit distribution, and strict intellectual property protection.",
        "phonetics": "/ˈaʊər dʒɔɪnt ˈvɛntʃər ˈɡʌvərnəns ˈstrʌktʃər ɪnˈʃʊərz ˈbælənst bɔːrd ˌrɛprɪzɛnˈteɪʃn, trænsˈpærənt ˈprɒfɪt ˌdɪstrɪˈbjuːʃn, ænd strɪkt ˌɪntəˈlɛktʃuəl ˈprɒpərti prəˈtɛkʃn/",
        "vietnameseMeaning": "Cơ cấu quản trị liên doanh của chúng tôi bảo đảm sự đại diện cân bằng trong hội đồng quản trị, phân phối lợi nhuận minh bạch và bảo hộ quyền sở hữu trí tuệ nghiêm ngặt.",
        "explanation": "Phát âm dõng dạc cụm 'balanced board representation' và 'intellectual property protection'.",
        "whyWrong": "Chú ý nhấn trọng âm chính vào 'governance' (/ˈɡʌvərnəns/) và 'transparent' (/trænsˈpærənt/).",
        "crucialNote": "Quản trị liên doanh cân bằng ngăn chặn nguy cơ một bên thôn tính hoặc lạm quyền chi phối doanh nghiệp.",
        "memoryHook": "Balanced boards and IP safeguards build enduring joint ventures."
      },
      {
        "id": "u90-e3",
        "type": "word_order",
        "promptEn": "Construct the boardroom voting rule protecting strategic minority interests:",
        "promptVi": "Sắp xếp các từ thành quy định biểu quyết đa số tuyệt đối để bảo vệ lợi ích chiến lược:",
        "englishSentence": "Supermajority voting of eighty percent is required for strategic decisions regarding capital expenditure and brand licensing.",
        "audioText": "Supermajority voting of eighty percent is required for strategic decisions regarding capital expenditure and brand licensing.",
        "wordPool": [
          "Supermajority",
          "voting",
          "of",
          "eighty",
          "percent",
          "is",
          "required",
          "for",
          "strategic",
          "decisions",
          "regarding",
          "capital",
          "expenditure",
          "and",
          "brand",
          "licensing.",
          "veto",
          "annul"
        ],
        "vietnameseMeaning": "Tỷ lệ biểu quyết đa số tuyệt đối tám mươi phần trăm là bắt buộc đối với các quyết định chiến lược liên quan đến chi phí vốn và cấp phép thương hiệu.",
        "explanation": "Ngưỡng 'Supermajority voting of eighty percent' trao cho bên góp vốn quyền phủ quyết thực tế đối với các quyết định mang tính sống còn.",
        "whyWrong": "Cần đặt cụm giới từ 'regarding capital expenditure and brand licensing' bổ nghĩa chính xác cho 'strategic decisions'.",
        "crucialNote": "Các vấn đề như tăng vốn, vay nợ lớn và chuyển nhượng cổ phần luôn phải nằm trong danh mục biểu quyết đặc biệt.",
        "memoryHook": "Supermajority voting protects core brand assets and capital expenditures."
      },
      {
        "id": "u90-e4",
        "type": "fill_blank",
        "promptEn": "Fill in the legal covenant term securing proprietary know-how:",
        "promptVi": "Chọn thuật ngữ cam kết pháp lý bảo vệ bí quyết sản xuất mỏ khoáng:",
        "englishSentence": "To safeguard proprietary production methods, the agreement includes a ten-year non-disclosure and intellectual property [ _____ ] covenant.",
        "audioText": "To safeguard proprietary production methods, the agreement includes a ten-year non-disclosure and intellectual property indemnification covenant.",
        "blankWord": "indemnification",
        "options": [
          "indemnification",
          "liquidation",
          "forfeiture"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Để bảo vệ các phương pháp sản xuất độc quyền, thỏa thuận bao gồm cam kết bảo mật mười năm và bồi thường thiệt hại xâm phạm sở hữu trí tuệ.",
        "explanation": "'Intellectual property indemnification' (cam kết bồi hoàn thiệt hại nếu vi phạm quyền sở hữu trí tuệ) là điều khoản bắt buộc để răn đe hành vi đánh cắp công nghệ.",
        "whyWrong": "'Liquidation' (thanh lý giải thể) và 'forfeiture' (bị tịch thu) hoàn toàn không phù hợp trong điều khoản bảo hộ tài sản trí tuệ.",
        "crucialNote": "Bí quyết công nghệ chiết rót ở nhiệt độ mỏ 72°C là tài sản trí tuệ vô giá của Vikoda.",
        "memoryHook": "IP indemnification covenants protect proprietary bottling know-how."
      },
      {
        "id": "u90-e5",
        "type": "chat_branch",
        "promptEn": "C-Suite Equity Negotiation: Counter a foreign majority control bid skillfully:",
        "promptVi": "Thương thảo cơ cấu vốn C-Suite: Phản hồi đề xuất thâu tóm quyền kiểm soát 51/49 của tập đoàn đầu tư Tokyo:",
        "englishSentence": "Tanaka-san, we deeply appreciate your operational strength. In line with FIT Group's strategic governance, we propose a 50/50 joint venture with an alternating chairmanship, where unanimous board approval is mandated for core brand equity decisions, geothermal source exploitation, and major capital investments.",
        "audioText": "Tanaka-san, we deeply appreciate your operational strength. In line with FIT Group's strategic governance, we propose a 50/50 joint venture with an alternating chairmanship, where unanimous board approval is mandated for core brand equity decisions, geothermal source exploitation, and major capital investments.",
        "chatMessages": [
          {
            "speaker": "Hiroshi Tanaka (VP Corporate Development, Tokyo)",
            "avatar": "🇯🇵",
            "message": "Minh-san, we propose a 51/49 equity structure with our firm holding majority voting rights to streamline East Asian market distribution. How does Vikoda view this leadership model?"
          }
        ],
        "chatOptions": [
          {
            "text": "Tanaka-san, we deeply appreciate your operational strength. In line with FIT Group's strategic governance, we propose a 50/50 joint venture with an alternating chairmanship, where unanimous board approval is mandated for core brand equity decisions, geothermal source exploitation, and major capital investments.",
            "trustScore": 25,
            "feedback": "Bản lĩnh lãnh đạo C-Suite kiệt xuất (+25 Điểm Tin Cậy)! Kiên quyết bảo vệ chủ quyền nguồn mỏ Đảnh Thạnh và quyền bình đẳng trong liên doanh (50/50 kèm cơ chế chủ tịch luân phiên), giữ vững quyền đồng thuận 100% đối với các tài sản cốt lõi.",
            "isCorrect": true
          },
          {
            "text": "Take 51% or even 80%, we do not care about board votes as long as you pay us an upfront dividend right now.",
            "trustScore": 0,
            "feedback": "Bán rẻ quyền kiểm soát doanh nghiệp và tài nguyên thiên nhiên quốc gia vì cái lợi nhỏ trước mắt.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông Tanaka, chúng tôi đánh giá rất cao năng lực vận hành của quý công ty. Phù hợp với định hướng quản trị chiến lược của Tập đoàn FIT, chúng tôi đề xuất mô hình liên doanh 50/50 với vị trí chủ tịch hội đồng quản trị luân phiên, trong đó sự đồng thuận tuyệt đối là bắt buộc đối với các quyết định về giá trị thương hiệu cốt lõi, khai thác mỏ địa nhiệt và các khoản đầu tư vốn trọng yếu.",
        "explanation": "Cơ cấu 50/50 với các vấn đề then chốt bắt buộc phải có sự nhất trí (unanimous consent) là cách tốt nhất để bảo vệ doanh nghiệp bản địa khi bắt tay với người khổng lồ nước ngoài.",
        "crucialNote": "Nguồn mỏ Đảnh Thạnh là tài nguyên địa chất quý hiếm của Việt Nam, quyền khai thác luôn phải được kiểm soát chặt chẽ.",
        "memoryHook": "50/50 joint ventures with alternating chairs protect national resource sovereignty."
      }
    ]
  },
  {
    "id": "unit-91",
    "unitNumber": 91,
    "title": "Phát Biểu Khai Mạc Tại Hội Chợ Quốc Tế",
    "subtitle": "Bài diễn văn truyền cảm hứng trước cộng đồng doanh nhân toàn cầu",
    "level": "C1-C2",
    "icon": "🎤",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u91-e1",
        "type": "match_pairs",
        "promptEn": "Match each global keynote speech and trade showcase concept:",
        "promptVi": "Nối các thuật ngữ diễn văn khai mạc hội nghị thượng đỉnh và triển lãm quốc tế:",
        "englishSentence": "Match the 5 global keynote speech and trade exposition concepts.",
        "audioText": "Match the 5 global keynote speech and trade exposition concepts.",
        "explanation": "Bài phát biểu khai mạc (Keynote Address) tại các diễn đàn thương mại toàn cầu truyền tải tầm nhìn, sứ mệnh chăm sóc sức khỏe và niềm tự hào dân tộc của thương hiệu Vikoda.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ nghệ thuật diễn thuyết và quảng bá thương hiệu tại hội chợ quốc tế.",
        "pairs": [
          {
            "left": "Keynote Address",
            "right": "Bài diễn văn khai mạc mang tính định hướng tại hội nghị thượng đỉnh"
          },
          {
            "left": "Global Beverage Exposition",
            "right": "Triển lãm ngành đồ uống toàn cầu quy tụ các tập đoàn đa quốc gia"
          },
          {
            "left": "Sustainable Wellspring Stewardship",
            "right": "Trách nhiệm gìn giữ và bảo tồn bền vững nguồn khoáng ngầm cho muôn đời"
          },
          {
            "left": "Geothermal Purity Heritage",
            "right": "Di sản độ tinh khiết địa nhiệt 72 độ C từ tầng sâu lòng đất mẹ"
          },
          {
            "left": "Standing Ovation",
            "right": "Tràng pháo tay nhiệt liệt toàn thể cử tọa đứng dậy tán thưởng"
          }
        ]
      },
      {
        "id": "u91-e2",
        "type": "speak",
        "promptEn": "Shadow this inspiring international keynote speech opening:",
        "promptVi": "Luyện phát âm đoạn mở đầu bài phát biểu khai mạc quốc tế đầy truyền cảm:",
        "englishSentence": "Distinguished guests and global industry leaders, Vikoda proudly brings the untouched 72-degree geothermal treasure of Vietnam to elevate wellness worldwide.",
        "audioText": "Distinguished guests and global industry leaders, Vikoda proudly brings the untouched 72-degree geothermal treasure of Vietnam to elevate wellness worldwide.",
        "phonetics": "/dɪˈstɪŋɡwɪʃt ɡɛsts ænd ˈɡloʊbəl ˈɪndəstri ˈliːdərz, vɪˈkoʊdə ˈpraʊdli brɪŋz ði ʌnˈtʌtʃt ˈsɛvnti-tuː-dɪˈɡriː ˌdʒiːoʊˈθɜːrməl ˈtrɛʒər əv ˌvjɛtˈnɑːm tuː ˈɛlɪveɪt ˈwɛlnəs ˌwɜːrldˈwaɪd/",
        "vietnameseMeaning": "Kính thưa các quý vị đại biểu và các nhà lãnh đạo ngành toàn cầu, Vikoda tự hào mang báu vật địa nhiệt 72 độ C nguyên bản của Việt Nam để nâng tầm sức khỏe trên toàn thế giới.",
        "explanation": "Nhịp điệu dõng dạc, nhấn trọng âm vào 'distinguished guests', 'geothermal treasure' và 'elevate wellness worldwide'.",
        "whyWrong": "Chú ý phát âm chuẩn từ 'geothermal' (/ˌdʒiːoʊˈθɜːrməl/) với âm /θ/ vô thanh.",
        "crucialNote": "Mở đầu bài diễn văn bằng sự tự hào dân tộc và giá trị sức khỏe phổ quát tạo thiện cảm sâu sắc với khán giả quốc tế.",
        "memoryHook": "Bring Vietnam's 72-degree geothermal treasure to elevate wellness worldwide."
      },
      {
        "id": "u91-e3",
        "type": "word_order",
        "promptEn": "Construct the eloquent statement describing Vikoda's scientific heritage:",
        "promptVi": "Sắp xếp các từ thành câu ca ngợi nguồn nước khoáng đóng chai trực tiếp tại mỏ nguồn:",
        "englishSentence": "Bottled directly at the virgin wellhead, our alkaline mineral water embodies sixty-eight years of scientific reverence and geological perfection.",
        "audioText": "Bottled directly at the virgin wellhead, our alkaline mineral water embodies sixty-eight years of scientific reverence and geological perfection.",
        "wordPool": [
          "Bottled",
          "directly",
          "at",
          "the",
          "virgin",
          "wellhead,",
          "our",
          "alkaline",
          "mineral",
          "water",
          "embodies",
          "sixty-eight",
          "years",
          "of",
          "scientific",
          "reverence",
          "and",
          "geological",
          "perfection.",
          "polluted",
          "synthetic"
        ],
        "vietnameseMeaning": "Được đóng chai trực tiếp tại mỏ nguồn nguyên sinh, nước khoáng kiềm của chúng tôi kết tinh sáu mươi tám năm tôn trọng khoa học và sự hoàn hảo của địa chất.",
        "explanation": "Cấu trúc mệnh đề phân từ quá khứ 'Bottled directly at the virgin wellhead' tạo nên phong cách diễn thuyết sang trọng, học thuật.",
        "whyWrong": "Tránh đặt sai vị trí của cụm tính từ 'scientific reverence and geological perfection'.",
        "crucialNote": "Đóng chai trực tiếp tại mỏ nguồn (bottled at source) là chứng nhận bảo chứng chất lượng cao nhất cho nước khoáng thiên nhiên.",
        "memoryHook": "Bottled at the virgin wellhead, embodying scientific reverence and geological perfection."
      },
      {
        "id": "u91-e4",
        "type": "fill_blank",
        "promptEn": "Complete the visionary CEO pledge with the appropriate environmental term:",
        "promptVi": "Chọn thuật ngữ quản trị sinh thái bền vững để hoàn thiện cam kết:",
        "englishSentence": "Standing on the international stage, our CEO articulated a visionary commitment to eco-friendly packaging and zero-carbon water [ _____ ].",
        "audioText": "Standing on the international stage, our CEO articulated a visionary commitment to eco-friendly packaging and zero-carbon water stewardship.",
        "blankWord": "stewardship",
        "options": [
          "stewardship",
          "depletion",
          "stagnation"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Đứng trên vũ đài quốc tế, Tổng giám đốc của chúng tôi đã nêu bật cam kết có tầm nhìn xa về bao bì thân thiện với môi trường và quản trị nguồn nước không phát thải carbon.",
        "explanation": "'Water stewardship' (tinh thần trách nhiệm gìn giữ và bảo vệ nguồn nước cho thế hệ mai sau) là thuật ngữ chuẩn mực của các tổ chức môi trường quốc tế.",
        "whyWrong": "'Depletion' (sự cạn kiệt) và 'stagnation' (sự đình trệ) mang nghĩa tiêu cực, trái ngược hoàn toàn với cam kết bảo vệ môi trường.",
        "crucialNote": "Các nhà phân phối toàn cầu ngày nay đánh giá rất cao trách nhiệm quản trị nguồn nước bền vững của nhà sản xuất.",
        "memoryHook": "Visionary leadership commits to eco-friendly packaging and water stewardship."
      },
      {
        "id": "u91-e5",
        "type": "chat_branch",
        "promptEn": "Bloomberg Anchor Interview: Defend Vikoda's natural pH 9.0 geological authenticity:",
        "promptVi": "Phỏng vấn trực tiếp đài truyền hình quốc tế: Thuyết phục phóng viên Bloomberg về nguồn gốc tự nhiên của độ kiềm pH 9.0:",
        "englishSentence": "Sarah, our secret is time and geology. Rainwater filters through 220 meters of subterranean granite bedrock over hundreds of years, naturally dissolving life-giving minerals without artificial electrolysis. Discovered in 1957, our spring has been verified by the Pasteur Institute across thousands of assays to maintain an untouched, pristine pH 9.0 directly at the 72°C wellhead.",
        "audioText": "Sarah, our secret is time and geology. Rainwater filters through 220 meters of subterranean granite bedrock over hundreds of years, naturally dissolving life-giving minerals without artificial electrolysis. Discovered in 1957, our spring has been verified by the Pasteur Institute across thousands of assays to maintain an untouched, pristine pH 9.0 directly at the 72°C wellhead.",
        "chatMessages": [
          {
            "speaker": "Sarah Jenkins (Senior Anchor, Bloomberg Commodities & Wellness)",
            "avatar": "🎙️",
            "message": "CEO Minh, you highlighted Vikoda's natural pH 9.0 at the source. In an era of industrial electrolyzed water, why should discerning global consumers trust this geological claim?"
          }
        ],
        "chatOptions": [
          {
            "text": "Sarah, our secret is time and geology. Rainwater filters through 220 meters of subterranean granite bedrock over hundreds of years, naturally dissolving life-giving minerals without artificial electrolysis. Discovered in 1957, our spring has been verified by the Pasteur Institute across thousands of assays to maintain an untouched, pristine pH 9.0 directly at the 72°C wellhead.",
            "trustScore": 25,
            "feedback": "Diễn ngôn truyền thông quốc tế xuất sắc (+25 Điểm Tin Cậy)! Khéo léo đối chiếu giữa 'máy điện phân công nghiệp' và 'hàng trăm năm thẩm thấu qua đá granite sâu 220m', khẳng định giá trị khoa học lịch sử 1957 và chứng thực của Viện Pasteur, lan tỏa danh tiếng Vikoda trên toàn cầu.",
            "isCorrect": true
          },
          {
            "text": "No comment, this is our proprietary trade secret, so go read our promotional flyers or don't drink it.",
            "trustScore": 0,
            "feedback": "Thái độ trốn tránh truyền thông quốc tế khiến dư luận nghi ngờ và làm bốc hơi uy tín thương hiệu.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Sarah, bí quyết của chúng tôi chính là thời gian và địa chất. Nước mưa thẩm thấu qua 220 mét đá hoa cương ngầm suốt hàng trăm năm, hòa tan tự nhiên các khoáng chất quý giá mà không cần máy điện phân nhân tạo. Được phát hiện từ năm 1957, nguồn mỏ của chúng tôi đã được Viện Pasteur chứng thực qua hàng ngàn xét nghiệm là duy trì độ kiềm pH 9.0 nguyên sơ trực tiếp ngay tại đầu nguồn 72°C.",
        "explanation": "Khai thác sâu 4 con số vàng (1957, 220m, 72°C, pH 9.0) và kiểm chứng Pasteur là vũ khí truyền thông mạnh nhất biến Vikoda thành hiện tượng trong mắt báo chí quốc tế.",
        "crucialNote": "Luôn nhấn mạnh sự khác biệt giữa kiềm tự nhiên (bền vững theo thời gian) và kiềm nhân tạo điện phân (mất kiềm nhanh chóng).",
        "memoryHook": "Natural granite filtration over centuries creates enduring pH 9.0 purity."
      }
    ]
  },
  {
    "id": "unit-92",
    "unitNumber": 92,
    "title": "Chiến Lược Định Vị Nước Khoáng Quốc Gia",
    "subtitle": "Đưa thương hiệu mỏ Đảnh Thạnh sánh vai cường quốc nước khoáng",
    "level": "C1-C2",
    "icon": "🇻🇳",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u92-e1",
        "type": "match_pairs",
        "promptEn": "Match each strategic brand positioning term with its premium market concept:",
        "promptVi": "Nối các thuật ngữ chiến lược định vị thương hiệu cao cấp với khái niệm thị trường:",
        "englishSentence": "Match the 5 strategic brand positioning and national heritage concepts.",
        "audioText": "Match the 5 strategic brand positioning and national heritage concepts.",
        "explanation": "Chiến lược định vị quốc gia đưa nước khoáng Đảnh Thạnh từ thương hiệu địa phương trở thành biểu tượng tinh hoa ẩm thực và sức khỏe sánh vai cùng Evian và San Pellegrino.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ chiến lược định vị thương hiệu di sản quốc gia.",
        "pairs": [
          {
            "left": "National Heritage Brand",
            "right": "Thương hiệu di sản quốc gia biểu tượng cho niềm tự hào đất nước"
          },
          {
            "left": "Geographic Indication Protection",
            "right": "Chỉ dẫn địa lý bảo hộ độc quyền xuất xứ mỏ khoáng Đảnh Thạnh"
          },
          {
            "left": "Global Benchmark Standard",
            "right": "Chuẩn đối sánh đẳng cấp quốc tế (sánh ngang các suối khoáng dãy Alps)"
          },
          {
            "left": "Brand Equity Appreciation",
            "right": "Sự gia tăng liên tục giá trị tài sản thương hiệu trên thị trường"
          },
          {
            "left": "Sovereign Natural Resource",
            "right": "Nguồn tài nguyên thiên nhiên quý báu thuộc chủ quyền quốc gia"
          }
        ]
      },
      {
        "id": "u92-e2",
        "type": "speak",
        "promptEn": "Shadow this triumphant brand positioning statement:",
        "promptVi": "Luyện phát âm câu tuyên ngôn định vị thương hiệu quốc gia với sự tự hào sâu sắc:",
        "englishSentence": "Our national positioning strategy establishes Vikoda as Vietnam's crown jewel mineral water, rivaling the world's most prestigious Alpine springs.",
        "audioText": "Our national positioning strategy establishes Vikoda as Vietnam's crown jewel mineral water, rivaling the world's most prestigious Alpine springs.",
        "phonetics": "/ˈaʊər ˈnæʃnəl pəˈzɪʃnɪŋ ˈstrætədʒi ɪsˈtæblɪʃɪz vɪˈkoʊdə æz ˌvjɛtˈnɑːmz kraʊn ˈdʒuːəl ˈmɪnərəl ˈwɔːtər, ˈraɪvlɪŋ ðə wɜːrldz moʊst prɛˈstɪdʒəs ˈælpaɪn sprɪŋz/",
        "vietnameseMeaning": "Chiến lược định vị quốc gia của chúng tôi xác lập Vikoda là viên ngọc quý nước khoáng của Việt Nam, sánh vai cùng những nguồn suối dãy Alps danh giá nhất thế giới.",
        "explanation": "Cụm ẩn dụ 'Vietnam's crown jewel mineral water' và 'rivaling prestigious Alpine springs' nâng tầm giá trị cảm nhận của người tiêu dùng.",
        "whyWrong": "Phát âm chuẩn từ 'prestigious' (/prɛˈstɪdʒəs/) và 'Alpine' (/ˈælpaɪn/).",
        "crucialNote": "Định vị sánh vai các thương hiệu toàn cầu giúp Vikoda thiết lập mức giá bán cao cấp tương xứng tại các khách sạn 5 sao.",
        "memoryHook": "Vikoda is Vietnam's crown jewel, rivaling prestigious Alpine springs."
      },
      {
        "id": "u92-e3",
        "type": "word_order",
        "promptEn": "Build the sentence defining Vikoda as a preventive health lifestyle:",
        "promptVi": "Sắp xếp các từ thành câu định vị nước khoáng kiềm như một lối sống chăm sóc sức khỏe chủ động:",
        "englishSentence": "We position our natural alkaline spring water not merely as a hydration commodity, but as a premium preventive health lifestyle.",
        "audioText": "We position our natural alkaline spring water not merely as a hydration commodity, but as a premium preventive health lifestyle.",
        "wordPool": [
          "We",
          "position",
          "our",
          "natural",
          "alkaline",
          "spring",
          "water",
          "not",
          "merely",
          "as",
          "a",
          "hydration",
          "commodity,",
          "but",
          "as",
          "a",
          "premium",
          "preventive",
          "health",
          "lifestyle.",
          "harmful",
          "cheap"
        ],
        "vietnameseMeaning": "Chúng tôi định vị nước khoáng kiềm thiên nhiên của mình không đơn thuần là hàng hóa giải khát, mà là một phong cách sống chăm sóc sức khỏe chủ động cao cấp.",
        "explanation": "Cấu trúc tương phản đắt giá 'not merely as A, but as B' thoát ly hoàn toàn khỏi cuộc chiến cạnh tranh giá của các loại nước đóng chai phổ thông.",
        "whyWrong": "Nhớ giữ đúng vị trí của liên từ tương phản 'not merely... but as...'.",
        "crucialNote": "Chăm sóc sức khỏe chủ động (preventive health) là xu hướng tiêu dùng bùng nổ của tầng lớp thượng lưu toàn cầu.",
        "memoryHook": "Not merely a hydration commodity, but a premium preventive health lifestyle."
      },
      {
        "id": "u92-e4",
        "type": "fill_blank",
        "promptEn": "Select the brand asset status term to complete the sentence:",
        "promptVi": "Chọn thuật ngữ tài sản thương hiệu chính xác để hoàn thiện câu:",
        "englishSentence": "Securing national brand status elevated Vikoda's market capitalization and reinforced consumer [ _____ ] across both domestic and export territories.",
        "audioText": "Securing national brand status elevated Vikoda's market capitalization and reinforced consumer prestige across both domestic and export territories.",
        "blankWord": "prestige",
        "options": [
          "prestige",
          "subrogation",
          "obsolescence"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Việc đạt được danh hiệu Thương hiệu Quốc gia đã nâng cao giá trị vốn hóa của Vikoda và củng cố uy tín với người tiêu dùng trên cả thị trường nội địa và xuất khẩu.",
        "explanation": "'Consumer prestige' (uy tín và sự trân trọng trong tâm trí người tiêu dùng) là tài sản vô hình lớn nhất mà danh hiệu Thương hiệu Quốc gia mang lại.",
        "whyWrong": "'Subrogation' (thế quyền bảo hiểm) và 'obsolescence' (sự lỗi thời) hoàn toàn không phù hợp trong bối cảnh giá trị thương hiệu.",
        "crucialNote": "Thương hiệu Quốc gia là bảo chứng cao nhất của Chính phủ về chất lượng, sự đổi mới sáng tạo và năng lực tiên phong.",
        "memoryHook": "National brand recognition anchors enduring consumer prestige."
      },
      {
        "id": "u92-e5",
        "type": "chat_branch",
        "promptEn": "International Brand Strategy: Reject brand-diluting price discounts in East Asia:",
        "promptVi": "Hội đồng chiến lược thương hiệu: Kiên định bảo vệ định vị cao cấp trước đề xuất giảm giá sốc tại Đài Loan:",
        "englishSentence": "David, Vikoda's core identity is our pristine 1957 heritage and natural pH 9.0 mineral source. Competing on price with purified tap water erodes brand equity. We must anchor our narrative on health benefits, luxury eco-friendly glass packaging, and Michelin-star dining pairings to command our rightful premium tier.",
        "audioText": "David, Vikoda's core identity is our pristine 1957 heritage and natural pH 9.0 mineral source. Competing on price with purified tap water erodes brand equity. We must anchor our narrative on health benefits, luxury eco-friendly glass packaging, and Michelin-star dining pairings to command our rightful premium tier.",
        "chatMessages": [
          {
            "speaker": "David Miller (Global Brand Strategist, Geneva Advisory)",
            "avatar": "🇨🇭",
            "message": "Minh, some discount retail chains in Taiwan are requesting a 30% price reduction to undercut municipal RO water packers. Should we launch an economy budget label?"
          }
        ],
        "chatOptions": [
          {
            "text": "David, Vikoda's core identity is our pristine 1957 heritage and natural pH 9.0 mineral source. Competing on price with purified tap water erodes brand equity. We must anchor our narrative on health benefits, luxury eco-friendly glass packaging, and Michelin-star dining pairings to command our rightful premium tier.",
            "trustScore": 25,
            "feedback": "Chiến lược thương hiệu kiệt xuất (+25 Điểm Tin Cậy)! Kiên quyết không hạ mình cạnh tranh giá với nước lọc công nghiệp, bảo vệ di sản 1957 và thúc đẩy dòng chai thủy tinh sang trọng trong hệ thống ẩm thực Michelin, bảo vệ biên lợi nhuận cao cho tập đoàn.",
            "isCorrect": true
          },
          {
            "text": "Let's slash prices by 70% and bottle in cheap plastic bags so we become the cheapest water brand in East Asia.",
            "trustScore": 0,
            "feedback": "Chiến lược tự sát thương hiệu, biến viên ngọc khoáng thiên nhiên thành mặt hàng thứ cấp rẻ rúng và phá hủy vị thế quốc tế.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "David, bản sắc cốt lõi của Vikoda là di sản nguyên sơ từ năm 1957 và nguồn khoáng kiềm pH 9.0 tự nhiên. Cạnh tranh về giá với nước máy lọc tinh khiết sẽ bào mòn tài sản thương hiệu. Chúng ta phải đặt nền móng câu chuyện thương hiệu trên các lợi ích sức khỏe, bao bì chai thủy tinh thân thiện môi trường sang trọng và kết hợp cùng ẩm thực gắn sao Michelin để giữ vững phân khúc cao cấp xứng đáng.",
        "explanation": "Từ chối cuộc đua xuống đáy về giá (race to the bottom) là phẩm chất tối quan trọng của nhà lãnh đạo thương hiệu tầm vóc toàn cầu.",
        "crucialNote": "Nước khoáng thiên nhiên quý hiếm không bao giờ được phép bán theo tư duy của nước tinh khiết đóng chai thông thường.",
        "memoryHook": "Never discount heritage; elevate luxury glass packaging and gastronomy pairings."
      }
    ]
  },
  {
    "id": "unit-93",
    "unitNumber": 93,
    "title": "Quản Trị Khủng Hoảng Truyền Thông Quốc Tế",
    "subtitle": "Họp báo bình tĩnh, thông cáo sự thật và bảo vệ giá trị cốt lõi",
    "level": "C1-C2",
    "icon": "🚨",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u93-e1",
        "type": "match_pairs",
        "promptEn": "Match each corporate crisis management term with its operational response:",
        "promptVi": "Nối các thuật ngữ quản trị khủng hoảng truyền thông quốc tế với quy trình phản ứng:",
        "englishSentence": "Match the 5 corporate crisis communications and reputation defense concepts.",
        "audioText": "Match the 5 corporate crisis communications and reputation defense concepts.",
        "explanation": "Quản trị khủng hoảng truyền thông chuyên nghiệp đòi hỏi tốc độ phản ứng thần tốc, chứng cứ khoa học không thể bác bỏ và tính minh bạch tuyệt đối.",
        "vietnameseMeaning": "Nối đúng 5 nghiệp vụ cốt lõi trong quy trình xử lý khủng hoảng truyền thông của tập đoàn.",
        "pairs": [
          {
            "left": "Crisis Communications Protocol",
            "right": "Quy trình ứng phó và xử lý khủng hoảng truyền thông được phê duyệt trước"
          },
          {
            "left": "Official Press Communiqué",
            "right": "Thông cáo báo chí chính thức nêu rõ lập trường và sự thật khoa học"
          },
          {
            "left": "Third-Party Laboratory Validation",
            "right": "Chứng thực kiểm nghiệm độc lập từ các viện nghiên cứu uy tín quốc tế"
          },
          {
            "left": "Rumor Containment & Fact-Checking",
            "right": "Khoanh vùng dập tắt tin giả và đối chiếu dữ liệu thực tế"
          },
          {
            "left": "Transparent Stakeholder Accountability",
            "right": "Trách nhiệm giải trình minh bạch trước cổ đông, khách hàng và cơ quan quản lý"
          }
        ]
      },
      {
        "id": "u93-e2",
        "type": "speak",
        "promptEn": "Shadow this calm and authoritative crisis spokesperson statement:",
        "promptVi": "Luyện phát âm câu tuyên bố của người phát ngôn ban điều hành trong thời khắc khủng hoảng:",
        "englishSentence": "In moments of crisis, we communicate with absolute transparency, grounding every public statement on empirical scientific data and certified testing.",
        "audioText": "In moments of crisis, we communicate with absolute transparency, grounding every public statement on empirical scientific data and certified testing.",
        "phonetics": "/ɪn ˈmoʊmənts əv ˈkraɪsɪs, wiː kəˈmjuːnɪkeɪt wɪð ˈæbsəluːt trænsˈpærənsi, ˈɡraʊndɪŋ ˈɛvri ˈpʌblɪk ˈsteɪtmənt ɒn ɛmˈpɪrɪkl ˌsaɪənˈtɪfɪk ˈdeɪtə ænd ˈsɜːrtɪfaɪd ˈtɛstɪŋ/",
        "vietnameseMeaning": "Trong những thời khắc khủng hoảng, chúng tôi giao tiếp với sự minh bạch tuyệt đối, đặt nền tảng mỗi phát ngôn trước công chúng trên dữ liệu khoa học thực nghiệm và kiểm nghiệm có chứng thực.",
        "explanation": "Giọng điệu điềm tĩnh, đĩnh đạc, nhấn mạnh vào 'absolute transparency' và 'empirical scientific data'.",
        "whyWrong": "Tránh nói vội vã; duy trì tốc độ chậm rãi để truyền tải sự tự tin và kiểm soát tình hình.",
        "crucialNote": "Sự thật và số liệu khoa học là khắc tinh duy nhất có thể dập tắt mọi tin đồn ác ý.",
        "memoryHook": "Ground crisis communications on absolute transparency and empirical scientific data."
      },
      {
        "id": "u93-e3",
        "type": "word_order",
        "promptEn": "Arrange the rapid crisis committee mobilization sentence:",
        "promptVi": "Sắp xếp các từ thành câu kích hoạt ủy ban khủng hoảng và công bố kết quả kiểm nghiệm:",
        "englishSentence": "Our crisis committee mobilized within one hour to publish certified water quality assays debunking unfounded social media rumors.",
        "audioText": "Our crisis committee mobilized within one hour to publish certified water quality assays debunking unfounded social media rumors.",
        "wordPool": [
          "Our",
          "crisis",
          "committee",
          "mobilized",
          "within",
          "one",
          "hour",
          "to",
          "publish",
          "certified",
          "water",
          "quality",
          "assays",
          "debunking",
          "unfounded",
          "social",
          "media",
          "rumors.",
          "panic",
          "conceal"
        ],
        "vietnameseMeaning": "Ủy ban khủng hoảng của chúng tôi đã kích hoạt trong vòng một giờ để công bố kết quả kiểm nghiệm chất lượng nước có chứng thực, bác bỏ những tin đồn vô căn cứ trên mạng xã hội.",
        "explanation": "Quy tắc 'Golden Hour' (Giờ Vàng) trong xử lý khủng hoảng: phản hồi chính thức trong vòng 60 phút để giành quyền làm chủ luồng thông tin.",
        "whyWrong": "Sắp xếp đúng cụm phân từ hiện tại 'debunking unfounded social media rumors' bổ nghĩa cho 'assays'.",
        "crucialNote": "Im lặng trong khủng hoảng sẽ bị công chúng mặc định hiểu là thừa nhận lỗi sai.",
        "memoryHook": "Mobilize within one hour to publish certified assays debunking rumors."
      },
      {
        "id": "u93-e4",
        "type": "fill_blank",
        "promptEn": "Fill in the core corporate virtue restoring public trust:",
        "promptVi": "Chọn phẩm chất quản trị cốt lõi khôi phục niềm tin của người tiêu dùng:",
        "englishSentence": "The executive spokesperson conducted a live press conference, restoring public confidence through unwavering [ _____ ] and factual evidence.",
        "audioText": "The executive spokesperson conducted a live press conference, restoring public confidence through unwavering integrity and factual evidence.",
        "blankWord": "integrity",
        "options": [
          "integrity",
          "duplicity",
          "negligence"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Người phát ngôn ban điều hành đã chủ trì cuộc họp báo trực tiếp, khôi phục niềm tin của công chúng thông qua sự liêm chính kiên định và bằng chứng xác thực.",
        "explanation": "'Integrity' (sự liêm chính, chính trực không bao giờ bao che khuyết điểm) là giá trị đạo đức cao nhất giúp doanh nghiệp vượt qua mọi giông bão truyền thông.",
        "whyWrong": "'Duplicity' (sự giả dối hai mặt) và 'negligence' (sự cẩu thả tắc trách) là những nguyên nhân trực tiếp phá hủy doanh nghiệp.",
        "crucialNote": "Khách hàng sẵn sàng tha thứ cho một sự cố kỹ thuật nhưng không bao giờ tha thứ cho sự dối trá.",
        "memoryHook": "Unwavering integrity and factual evidence restore public confidence."
      },
      {
        "id": "u93-e5",
        "type": "chat_branch",
        "promptEn": "Microplastic Allegation Crisis: Neutralize a malicious viral rumor in Singapore:",
        "promptVi": "Xử lý tin đồn ác ý: Chỉ đạo phản ứng khẩn cấp khi mạng xã hội lan truyền tin đồn nước đóng chai nhiễm vi nhựa:",
        "englishSentence": "Victoria, let's execute Crisis Protocol Alpha immediately: 1. Release our latest SGS and Pasteur Institute microplastic-free certified laboratory reports; 2. Issue a joint press statement from our Quality Director highlighting our Krones sterile line; 3. Host a live video walk-through of our 220m enclosed wellhead for international retail buyers.",
        "audioText": "Victoria, let's execute Crisis Protocol Alpha immediately: 1. Release our latest SGS and Pasteur Institute microplastic-free certified laboratory reports; 2. Issue a joint press statement from our Quality Director highlighting our Krones sterile line; 3. Host a live video walk-through of our 220m enclosed wellhead for international retail buyers.",
        "chatMessages": [
          {
            "speaker": "Victoria Vance (Head of Global Communications, FIT Group)",
            "avatar": "📡",
            "message": "Minh, an unverified social media blog in Singapore claimed bottled mineral waters in Southeast Asia contain high microplastic levels. Two supermarket chains have put a temporary hold on shipments. Media is demanding a statement within the hour!"
          }
        ],
        "chatOptions": [
          {
            "text": "Victoria, let's execute Crisis Protocol Alpha immediately: 1. Release our latest SGS and Pasteur Institute microplastic-free certified laboratory reports; 2. Issue a joint press statement from our Quality Director highlighting our Krones sterile line; 3. Host a live video walk-through of our 220m enclosed wellhead for international retail buyers.",
            "trustScore": 25,
            "feedback": "Quản trị khủng hoảng cấp độ C-Suite xuất sắc (+25 Điểm Tin Cậy)! Kích hoạt chiến lược 3 mũi nhọn (kiểm nghiệm SGS/Pasteur khẳng định 0% vi nhựa, tuyên bố chuyên môn về dây chuyền Krones vô trùng, và phát trực tiếp mỏ nguồn 220m khép kín), giải tỏa ngay lệnh tạm giữ hàng và củng cố niềm tin tuyệt đối từ các chuỗi siêu thị.",
            "isCorrect": true
          },
          {
            "text": "Switch off all company phones, delete our social media pages, and refuse to answer any questions from supermarkets or journalists.",
            "trustScore": 0,
            "feedback": "Hành động bỏ trốn biến tin đồn giả thành cuộc khủng hoảng thật, khiến toàn bộ chuỗi siêu thị đồng loạt hủy hợp đồng và tịch thu hàng hóa.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Victoria, hãy kích hoạt ngay Quy trình Khủng hoảng Alpha: 1. Công bố các báo cáo xét nghiệm mới nhất của SGS và Viện Pasteur chứng nhận sản phẩm hoàn toàn không chứa vi nhựa; 2. Phát đi tuyên bố báo chí chung từ Giám đốc Chất lượng nêu bật dây chuyền đóng chai vô trùng khép kín Krones; 3. Tổ chức buổi truyền hình trực tiếp tham quan mỏ nguồn sâu 220m khép kín dành riêng cho các giám đốc thu mua siêu thị quốc tế.",
        "explanation": "Minh bạch hóa quy trình bằng hình ảnh thực tế và chứng thực khoa học bên thứ 3 là phương thuốc đặc trị dập tắt mọi tin đồn thất thiệt.",
        "crucialNote": "Khủng hoảng được xử lý xuất sắc thường biến thành cơ hội tiếp thị vàng chứng minh sự vượt trội về công nghệ của doanh nghiệp.",
        "memoryHook": "Execute Protocol Alpha: release third-party lab assays and host live facility tours."
      }
    ]
  },
  {
    "id": "unit-94",
    "unitNumber": 94,
    "title": "Đàm Phán Hợp Đồng Độc Quyền Châu Lục",
    "subtitle": "Hợp đồng xuất khẩu triệu thùng sang hệ thống siêu thị châu Á",
    "level": "C1-C2",
    "icon": "🤝",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u94-e1",
        "type": "match_pairs",
        "promptEn": "Match each continental distribution agreement term with its commercial provision:",
        "promptVi": "Nối các điều khoản hợp đồng phân phối quy mô châu lục với quy định thương mại tương ứng:",
        "englishSentence": "Match the 5 continental distribution contract terms.",
        "audioText": "Match the 5 continental distribution contract terms.",
        "explanation": "Hợp đồng phân phối cấp châu lục là bước ngoặt đưa hàng triệu thùng nước khoáng Vikoda hiện diện trên kệ của hàng ngàn đại siêu thị trên khắp Châu Á.",
        "vietnameseMeaning": "Nối đúng 5 điều khoản trọng yếu trong hợp đồng cung ứng phân phối cấp châu lục.",
        "pairs": [
          {
            "left": "Continental Distribution Pact",
            "right": "Hiệp ước phân phối độc quyền quy mô toàn châu lục"
          },
          {
            "left": "Multi-Million Case Commitment",
            "right": "Cam kết sản lượng tiêu thụ hàng triệu thùng theo lộ trình nhiều năm"
          },
          {
            "left": "Key Performance Indicators (KPIs)",
            "right": "Các chỉ số đo lường hiệu quả độ phủ điểm bán và doanh số bắt buộc"
          },
          {
            "left": "Right of First Refusal",
            "right": "Quyền ưu tiên xem xét trước khi chào bán cho bất kỳ đối tác mới nào"
          },
          {
            "left": "Joint Executive Steering Committee",
            "right": "Ủy ban điều hành chung cấp cao định kỳ giám sát tiến độ thực thi"
          }
        ]
      },
      {
        "id": "u94-e2",
        "type": "speak",
        "promptEn": "Shadow this landmark multi-million case export commitment:",
        "promptVi": "Luyện phát âm câu xác lập cam kết cung ứng hàng triệu thùng sang thị trường quốc tế:",
        "englishSentence": "We finalize this continental agreement with a binding commitment to supply ten million cases over the next three fiscal years.",
        "audioText": "We finalize this continental agreement with a binding commitment to supply ten million cases over the next three fiscal years.",
        "phonetics": "/wiː ˈfaɪnəlaɪz ðɪs ˌkɒntɪˈnɛntl əˈɡriːmənt wɪð ə ˈbaɪndɪŋ kəˈmɪtmənt tuː səˈplaɪ tɛn ˈmɪljən ˈkeɪsɪz ˈoʊvər ðə nɛkst θriː ˈfɪskl jɪərz/",
        "vietnameseMeaning": "Chúng tôi hoàn tất hiệp ước cấp châu lục này với cam kết ràng buộc cung ứng mười triệu thùng trong vòng ba năm tài chính tiếp theo.",
        "explanation": "Cụm 'binding commitment to supply ten million cases' thể hiện quy mô sản xuất và năng lực cung ứng tầm vóc quốc tế của nhà máy Vikoda.",
        "whyWrong": "Phát âm rõ ràng âm đuôi /z/ của 'cases' và nhấn trọng âm của 'continental' (/ˌkɒntɪˈnɛntl/).",
        "crucialNote": "Hợp đồng 10 triệu thùng đòi hỏi lập kế hoạch dự trữ nguyên vật liệu bao bì thủy tinh và nắp chai từ trước 6 tháng.",
        "memoryHook": "Binding commitment to supply ten million cases over three fiscal years."
      },
      {
        "id": "u94-e3",
        "type": "word_order",
        "promptEn": "Assemble the governance review clause monitoring international market penetration:",
        "promptVi": "Sắp xếp các từ thành câu quy định cơ chế đánh giá hiệu quả và độ bền bỉ của chuỗi cung ứng:",
        "englishSentence": "Both parties agreed to establish quarterly performance reviews to assess market penetration and supply chain resilience.",
        "audioText": "Both parties agreed to establish quarterly performance reviews to assess market penetration and supply chain resilience.",
        "wordPool": [
          "Both",
          "parties",
          "agreed",
          "to",
          "establish",
          "quarterly",
          "performance",
          "reviews",
          "to",
          "assess",
          "market",
          "penetration",
          "and",
          "supply",
          "chain",
          "resilience.",
          "breach",
          "dissolve"
        ],
        "vietnameseMeaning": "Cả hai bên đã đồng thuận thiết lập các kỳ đánh giá hiệu quả hàng quý để thẩm định mức độ thâm nhập thị trường và khả năng chống chịu của chuỗi cung ứng.",
        "explanation": "Cơ chế 'quarterly performance reviews' giúp hai tập đoàn kịp thời tháo gỡ các nút thắt logistics và điều chỉnh dự báo nhu cầu (demand forecasting).",
        "whyWrong": "Chú ý đặt cụm mục đích kép 'to assess market penetration and supply chain resilience' ở cuối mệnh đề.",
        "crucialNote": "'Supply chain resilience' (khả năng chống chịu của chuỗi cung ứng) bảo đảm hàng hóa không bao giờ bị đứt gãy giữa các mùa cao điểm vụ hè.",
        "memoryHook": "Quarterly performance reviews assess penetration and supply chain resilience."
      },
      {
        "id": "u94-e4",
        "type": "fill_blank",
        "promptEn": "Select the legal assignment consent term to complete the contract clause:",
        "promptVi": "Chọn thuật ngữ chấp thuận chuyển giao nghĩa vụ hợp đồng:",
        "englishSentence": "The continental agreement stipulates that neither party may assign its contractual obligations to a third party without prior written [ _____ ].",
        "audioText": "The continental agreement stipulates that neither party may assign its contractual obligations to a third party without prior written consent.",
        "blankWord": "consent",
        "options": [
          "consent",
          "forfeiture",
          "coercion"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hiệp ước cấp châu lục quy định rằng không bên nào được chuyển nhượng nghĩa vụ hợp đồng của mình cho bên thứ ba khi chưa có sự chấp thuận bằng văn bản trước.",
        "explanation": "'Prior written consent' (sự chấp thuận trước bằng văn bản) là điều khoản tiêu chuẩn ngăn ngừa đối tác âm thầm bán lại hợp đồng độc quyền cho bên thứ ba thiếu năng lực.",
        "whyWrong": "'Forfeiture' (sự tịch thu) và 'coercion' (sự cưỡng ép) hoàn toàn trái ngược với bản chất tự nguyện của hợp đồng thương mại.",
        "crucialNote": "Điều khoản không chuyển nhượng (non-assignment) bảo đảm Vikoda luôn làm việc trực tiếp với pháp nhân mẹ có thực lực.",
        "memoryHook": "No assignment of obligations without prior written consent."
      },
      {
        "id": "u94-e5",
        "type": "chat_branch",
        "promptEn": "Continental Deal Finalization: Negotiate shared marketing funds for a 15-million case rollout:",
        "promptVi": "Chốt thương vụ thế kỷ: Đàm phán ngân sách tiếp thị đồng hành cho hợp đồng 15 triệu thùng sang toàn châu Á:",
        "englishSentence": "Chairman Wong, a 15-million case alliance is truly transformative for both our enterprises. In the spirit of genuine risk-sharing partnership, Vikoda will commit a matching co-marketing fund of $1 Million tied directly to agreed quarterly shipment volume milestones, while providing our complete global creative brand assets free of charge.",
        "audioText": "Chairman Wong, a 15-million case alliance is truly transformative for both our enterprises. In the spirit of genuine risk-sharing partnership, Vikoda will commit a matching co-marketing fund of $1 Million tied directly to agreed quarterly shipment volume milestones, while providing our complete global creative brand assets free of charge.",
        "chatMessages": [
          {
            "speaker": "Raymond Wong (Executive Chairman, Pan-Asia Retail Consortium)",
            "avatar": "🏬",
            "message": "Minh, we are prepared to sign the 15-million case continental pact, but Vikoda must fund 100% of the $2 Million marketing launch across all Asian satellite television networks."
          }
        ],
        "chatOptions": [
          {
            "text": "Chairman Wong, a 15-million case alliance is truly transformative for both our enterprises. In the spirit of genuine risk-sharing partnership, Vikoda will commit a matching co-marketing fund of $1 Million tied directly to agreed quarterly shipment volume milestones, while providing our complete global creative brand assets free of charge.",
            "trustScore": 25,
            "feedback": "Đàm phán thương vụ thế kỷ siêu đẳng (+25 Điểm Tin Cậy)! Vừa khẳng định tầm vóc to lớn của hợp đồng 15 triệu thùng, vừa từ chối gánh vác 100% chi phí một mình bằng cách khôn khéo đề xuất đối ứng 50/50 (1 triệu USD) gắn liền với từng mốc giao hàng thực tế và hỗ trợ miễn phí toàn bộ tài sản thiết kế thương hiệu.",
            "isCorrect": true
          },
          {
            "text": "We will pay all $2 Million immediately in cash, please take everything from our treasury even if we suffer huge losses.",
            "trustScore": 0,
            "feedback": "Nhượng bộ tài chính vô nguyên tắc làm cạn kiệt ngân sách vận hành và đặt doanh nghiệp vào nguy cơ thua lỗ nặng.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa Chủ tịch Wong, liên minh 15 triệu thùng là một bước ngoặt thực sự đối với cả hai tập đoàn chúng ta. Trên tinh thần đối tác cùng chia sẻ rủi ro đích thực, Vikoda sẽ cam kết một quỹ tiếp thị đồng hành tương ứng trị giá 1 triệu USD gắn trực tiếp với các mốc sản lượng giao hàng thực tế hàng quý, đồng thời cung cấp toàn bộ tài nguyên sáng tạo thương hiệu toàn cầu của chúng tôi hoàn toàn miễn phí.",
        "explanation": "Phương pháp 'Matching Fund tied to Performance' (quỹ đối ứng gắn với sản lượng thực tế) bảo đảm ngân sách tiếp thị chỉ được giải ngân khi hàng hóa đã được bán thành công.",
        "crucialNote": "Cung cấp miễn phí tài sản sáng tạo (creative brand assets) vừa gia tăng giá trị phi tiền mặt vừa kiểm soát chặt chẽ nhận diện thương hiệu chuẩn mực.",
        "memoryHook": "Match co-marketing funds tied to verified quarterly shipment milestones."
      }
    ]
  },
  {
    "id": "unit-95",
    "unitNumber": 95,
    "title": "Triết Lý Lãnh Đạo \"Ngọc Trong Đá\" C-Suite",
    "subtitle": "Mài giũa kỷ luật thép và xây dựng đội ngũ kiệt xuất",
    "level": "C1-C2",
    "icon": "🔮",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u95-e1",
        "type": "match_pairs",
        "promptEn": "Match each core executive leadership philosophy term with its organizational virtue:",
        "promptVi": "Nối các phẩm chất lãnh đạo C-Suite cốt lõi trong triết lý \"Ngọc Trong Đá\" với ý nghĩa tương ứng:",
        "englishSentence": "Match the 5 executive leadership and organizational resilience concepts.",
        "audioText": "Match the 5 executive leadership and organizational resilience concepts.",
        "explanation": "Triết lý 'Ngọc Trong Đá' của Tập đoàn FIT và Vikoda khẳng định: giá trị đích thực và năng lực lãnh đạo kiệt xuất chỉ có thể được tạo ra qua quá trình rèn giũa kỷ luật nghiêm cẩn dưới áp lực thử thách cam go.",
        "vietnameseMeaning": "Nối đúng 5 trụ cột tinh thần lãnh đạo bản lĩnh trong triết lý Ngọc Trong Đá.",
        "pairs": [
          {
            "left": "Jewel in the Rock Philosophy",
            "right": "Triết lý Ngọc Trong Đá: ngọc quý chỉ tỏa sáng rực rỡ sau quá trình mài giũa kiên trì"
          },
          {
            "left": "Uncompromising Discipline",
            "right": "Kỷ luật điều hành thép không bao giờ thỏa hiệp với sự cẩu thả"
          },
          {
            "left": "Servant Leadership Mindset",
            "right": "Tư duy lãnh đạo phụng sự vì sự trưởng thành và phát triển của đội ngũ"
          },
          {
            "left": "Organizational Resilience",
            "right": "Khả năng phục hồi và đứng dậy mạnh mẽ từ nội lực tổ chức"
          },
          {
            "left": "Executive Talent Succession",
            "right": "Chiến lược đào tạo và chuyển giao thế hệ lãnh đạo kế thừa vững chắc"
          }
        ]
      },
      {
        "id": "u95-e2",
        "type": "speak",
        "promptEn": "Shadow this inspiring executive philosophy creed:",
        "promptVi": "Luyện phát âm câu tuyên ngôn triết lý lãnh đạo tinh hoa của tập đoàn:",
        "englishSentence": "Like a jewel carved from deep subterranean granite, true corporate leadership is forged through rigorous discipline, resilience, and ethical purpose.",
        "audioText": "Like a jewel carved from deep subterranean granite, true corporate leadership is forged through rigorous discipline, resilience, and ethical purpose.",
        "phonetics": "/laɪk ə ˈdʒuːəl kɑːrvd frɒm diːp ˌsʌbtəˈreɪniən ˈɡrænɪt, truː ˈkɔːrpərət ˈliːdərʃɪp ɪz fɔːrdʒd θruː ˈrɪɡərəs ˈdɪsəplɪn, rɪˈzɪljəns, ænd ˈɛθɪkl ˈpɜːrpəs/",
        "vietnameseMeaning": "Như viên ngọc được mài giũa từ đá hoa cương sâu dưới lòng đất, năng lực lãnh đạo doanh nghiệp đích thực được tôi luyện qua kỷ luật nghiêm cẩn, sự kiên cường và mục đích đạo đức.",
        "explanation": "Hình tượng văn học tuyệt đẹp so sánh nguồn khoáng Đảnh Thạnh ẩn mình sâu dưới đá granite với quá trình rèn giũa nhân cách nhà lãnh đạo.",
        "whyWrong": "Phát âm chuẩn từ 'subterranean' (/ˌsʌbtəˈreɪniən/) và 'resilience' (/rɪˈzɪljəns/).",
        "crucialNote": "Kỷ luật tự thân là nền móng để xây dựng một tổ chức trường tồn hàng thế kỷ.",
        "memoryHook": "True corporate leadership is forged through discipline, resilience, and ethical purpose."
      },
      {
        "id": "u95-e3",
        "type": "word_order",
        "promptEn": "Construct the maxim on continuous organizational self-refinement:",
        "promptVi": "Sắp xếp các từ thành câu phương châm không ngừng tự hoàn thiện để nâng tầm tổ chức:",
        "englishSentence": "True excellence requires continuous self-refinement and an unwavering commitment to elevate the entire organization.",
        "audioText": "True excellence requires continuous self-refinement and an unwavering commitment to elevate the entire organization.",
        "wordPool": [
          "True",
          "excellence",
          "requires",
          "continuous",
          "self-refinement",
          "and",
          "an",
          "unwavering",
          "commitment",
          "to",
          "elevate",
          "the",
          "entire",
          "organization.",
          "complacency",
          "sloth"
        ],
        "vietnameseMeaning": "Sự xuất sắc đích thực đòi hỏi sự không ngừng tự rèn giũa và cam kết kiên định nâng tầm toàn bộ tổ chức.",
        "explanation": "Khái niệm 'continuous self-refinement' (không ngừng tự mài giũa chính mình) là tinh thần Kaizen kết hợp với bản lĩnh 'Ngọc Trong Đá'.",
        "whyWrong": "Cần sắp xếp liên từ 'and' kết nối hai tân ngữ 'continuous self-refinement' và 'an unwavering commitment'.",
        "crucialNote": "Một người lãnh đạo giỏi không chỉ tự tỏa sáng mà còn biết khơi dậy viên ngọc bên trong mỗi nhân viên.",
        "memoryHook": "Continuous self-refinement and commitment elevate the entire organization."
      },
      {
        "id": "u95-e4",
        "type": "fill_blank",
        "promptEn": "Select the ultimate executive competency term to complete the leadership principle:",
        "promptVi": "Chọn thuật ngữ thể hiện đỉnh cao năng lực lãnh đạo:",
        "englishSentence": "In FIT Group's management culture, leaders cultivate talent by providing challenging trials that transform potential into proven [ _____ ].",
        "audioText": "In FIT Group's management culture, leaders cultivate talent by providing challenging trials that transform potential into proven mastery.",
        "blankWord": "mastery",
        "options": [
          "mastery",
          "mediocrity",
          "subjugation"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Trong văn hóa quản trị của Tập đoàn FIT, những người lãnh đạo ươm mầm tài năng bằng cách tạo ra các thử thách cam go nhằm chuyển hóa tiềm năng thành năng lực tinh hoa đã được kiểm chứng.",
        "explanation": "'Proven mastery' (năng lực tinh hoa đã qua thử lửa) chỉ có thể đạt được khi đối mặt và vượt qua những nghịch cảnh khắc nghiệt nhất.",
        "whyWrong": "'Mediocrity' (sự tầm thường) và 'subjugation' (sự áp bức nô dịch) là kẻ thù triệt tiêu tinh thần đổi mới sáng tạo.",
        "crucialNote": "Thử thách không phải để trừng phạt, mà là chiếc đe và búa rèn nên người lãnh đạo tương lai.",
        "memoryHook": "Challenging trials transform raw potential into proven mastery."
      },
      {
        "id": "u95-e5",
        "type": "chat_branch",
        "promptEn": "Executive Coaching & Mentorship: Guide a discouraged regional director after a setback:",
        "promptVi": "Cố vấn lãnh đạo C-Suite: Động viên và khai phóng tư duy cho một giám đốc vùng trẻ tuổi sau một thương vụ chưa thành công:",
        "englishSentence": "Tuan, remember our core philosophy of 'Ngọc Trong Đá' — raw gems cannot shine without intense friction and pressure. A lost deal is not a failure; it is the masterclass that forges your executive resilience. Let's debrief the buyer's feedback together tomorrow morning, refine our proposal, and turn this setback into our greatest victory.",
        "audioText": "Tuan, remember our core philosophy of 'Ngọc Trong Đá' — raw gems cannot shine without intense friction and pressure. A lost deal is not a failure; it is the masterclass that forges your executive resilience. Let's debrief the buyer's feedback together tomorrow morning, refine our proposal, and turn this setback into our greatest victory.",
        "chatMessages": [
          {
            "speaker": "Tuan Nguyen (Regional Sales Director, North Asia)",
            "avatar": "💼",
            "message": "Minh, I feel I let down the whole executive committee after failing to close the Osaka retail account. Maybe I am not cut out for C-Suite leadership at Vikoda, and I should step down."
          }
        ],
        "chatOptions": [
          {
            "text": "Tuan, remember our core philosophy of 'Ngọc Trong Đá' — raw gems cannot shine without intense friction and pressure. A lost deal is not a failure; it is the masterclass that forges your executive resilience. Let's debrief the buyer's feedback together tomorrow morning, refine our proposal, and turn this setback into our greatest victory.",
            "trustScore": 25,
            "feedback": "Nghệ thuật lãnh đạo truyền cảm hứng đỉnh cao (+25 Điểm Tin Cậy)! Vận dụng trọn vẹn triết lý 'Ngọc Trong Đá' để biến thất bại tạm thời thành bài học rèn luyện bản lĩnh kiên cường, giữ chân và thắp sáng ngọn lửa cống hiến của nhân tài cấp cao.",
            "isCorrect": true
          },
          {
            "text": "You are absolutely right, you failed Vikoda so submit your immediate resignation letter today and leave the office.",
            "trustScore": 0,
            "feedback": "Lãnh đạo độc đoán và tàn nhẫn, phá hủy tinh thần cống hiến của cấp dưới và làm chảy máu chất xám của tập đoàn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Tuấn, hãy nhớ lại triết lý cốt lõi 'Ngọc Trong Đá' của chúng ta — ngọc thô không thể tỏa sáng nếu không trải qua sự ma sát và áp lực dữ dội. Một thương vụ chưa chốt được không phải là thất bại; đó là lớp học bậc thầy tôi luyện bản lĩnh kiên cường của một nhà lãnh đạo. Sáng mai chúng ta sẽ cùng ngồi lại phân tích kỹ phản hồi của khách hàng, hoàn thiện lại đề xuất và biến trở ngại này thành chiến thắng vẻ vang nhất của chúng ta.",
        "explanation": "Lãnh đạo phụng sự (Servant Leader) không bao giờ bỏ rơi đồng đội khi gặp sóng gió, mà biến nghịch cảnh thành bệ phóng tôi luyện tài năng kiệt xuất.",
        "crucialNote": "Sức mạnh vĩ đại nhất của văn hóa 'Ngọc Trong Đá' là tinh thần không bỏ cuộc trước mọi thử thách khắc nghiệt.",
        "memoryHook": "Raw gems cannot shine without intense friction and executive resilience."
      }
    ]
  },
  {
    "id": "unit-96",
    "unitNumber": 96,
    "title": "Quản Trị Phát Triển Bền Vững ESG Toàn Diện",
    "subtitle": "Báo cáo tác động môi trường và trách nhiệm xã hội tập đoàn",
    "level": "C1-C2",
    "icon": "🌳",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u96-e1",
        "type": "match_pairs",
        "promptEn": "Match each ESG sustainability governance term with its environmental impact action:",
        "promptVi": "Nối các thuật ngữ quản trị phát triển bền vững ESG với hành động bảo vệ môi trường tương ứng:",
        "englishSentence": "Match the 5 comprehensive ESG sustainability governance concepts.",
        "audioText": "Match the 5 comprehensive ESG sustainability governance concepts.",
        "explanation": "Quản trị ESG (Môi trường - Xã hội - Quản trị) toàn diện là tấm hộ chiếu xanh đưa sản phẩm Vikoda bước vào các thị trường khắt khe nhất thế giới như Liên minh Châu Âu và Bắc Mỹ.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ then chốt trong báo cáo phát triển bền vững ESG của tập đoàn.",
        "pairs": [
          {
            "left": "Environmental, Social & Governance (ESG)",
            "right": "Bộ ba tiêu chuẩn đo lường tính bền vững và trách nhiệm xã hội doanh nghiệp"
          },
          {
            "left": "Scope 1, 2 and 3 Emissions",
            "right": "Kiểm toán phát thải khí nhà kính trực tiếp, gián tiếp và toàn bộ chuỗi giá trị"
          },
          {
            "left": "Circular Packaging Economy",
            "right": "Kinh tế tuần hoàn sử dụng 100% chai thủy tinh và nhựa rPET tái sinh"
          },
          {
            "left": "Aquifer Recharge Preservation",
            "right": "Bảo tồn vùng bổ cập tự nhiên của tầng nước ngầm địa nhiệt Đảnh Thạnh"
          },
          {
            "left": "Stakeholder Materiality Assessment",
            "right": "Đánh giá các vấn đề trọng yếu đối với cộng đồng và nhà đầu tư"
          }
        ]
      },
      {
        "id": "u96-e2",
        "type": "speak",
        "promptEn": "Shadow this forward-looking carbon neutrality pledge:",
        "promptVi": "Luyện phát âm câu cam kết trung hòa carbon và bảo tồn nguồn nước bền vững:",
        "englishSentence": "Our ESG roadmap anchors sustainable groundwater conservation, a hundred percent recyclable packaging, and carbon-neutral bottling operations by 2030.",
        "audioText": "Our ESG roadmap anchors sustainable groundwater conservation, a hundred percent recyclable packaging, and carbon-neutral bottling operations by 2030.",
        "phonetics": "/ˈaʊər iː-ɛs-dʒiː ˈroʊdmæp ˈæŋkərz səˈsteɪnəbl ˈɡraʊndwɔːtər ˌkɒnsərˈveɪʃn, ə ˈhʌndrəd pərˈsɛnt ˌriːˈsaɪkləbl ˈpækɪdʒɪŋ, ænd ˈkɑːrbən-ˈnjuːtrəl ˈbɒtlɪŋ ˌɒpəˈreɪʃnz baɪ ˈtwɛnti ˈθɜːrti/",
        "vietnameseMeaning": "Lộ trình ESG của chúng tôi đặt trọng tâm vào việc bảo tồn bền vững nguồn nước ngầm, một trăm phần trăm bao bì tái chế được và hoạt động đóng chai trung hòa carbon vào năm 2030.",
        "explanation": "Các thuật ngữ 'sustainable groundwater conservation', 'hundred percent recyclable packaging' và 'carbon-neutral bottling' thể hiện cam kết ESG mạnh mẽ.",
        "whyWrong": "Chú ý nối âm giữa 'carbon-neutral' và 'bottling operations'.",
        "crucialNote": "Mục tiêu Net Zero 2030 khẳng định vai trò tiên phong của Vikoda trong cuộc cách mạng xanh của ngành đồ uống Việt Nam.",
        "memoryHook": "Sustainable conservation, recyclable packaging, and carbon-neutral operations by 2030."
      },
      {
        "id": "u96-e3",
        "type": "word_order",
        "promptEn": "Construct the ecological sanctuary description protecting the Danh Thanh source:",
        "promptVi": "Sắp xếp các từ thành câu mô tả vành đai sinh thái 35 héc-ta bảo vệ mỏ khoáng ngầm:",
        "englishSentence": "We maintain a pristine thirty-five hectare ecological buffer zone to safeguard the geothermal aquifer against any environmental contamination.",
        "audioText": "We maintain a pristine thirty-five hectare ecological buffer zone to safeguard the geothermal aquifer against any environmental contamination.",
        "wordPool": [
          "We",
          "maintain",
          "a",
          "pristine",
          "thirty-five",
          "hectare",
          "ecological",
          "buffer",
          "zone",
          "to",
          "safeguard",
          "the",
          "geothermal",
          "aquifer",
          "against",
          "any",
          "environmental",
          "contamination.",
          "pollute",
          "degrade"
        ],
        "vietnameseMeaning": "Chúng tôi duy trì một vành đai sinh thái nguyên sơ ba mươi lăm héc-ta để bảo vệ nguồn ngậm nước địa nhiệt khỏi bất kỳ sự ô nhiễm môi trường nào.",
        "explanation": "Vành đai đệm sinh thái 35ha (ecological buffer zone) là lá chắn tự nhiên ngăn ngừa mọi hóa chất nông nghiệp hoặc công nghiệp xâm nhập vào tầng khoáng ngầm.",
        "whyWrong": "Đảm bảo đúng trật tự tính từ 'pristine thirty-five hectare ecological buffer zone'.",
        "crucialNote": "Rất ít mỏ khoáng trên thế giới sở hữu vùng bảo tồn sinh thái biệt lập và nghiêm ngặt như Đảnh Thạnh.",
        "memoryHook": "Maintain a thirty-five hectare buffer zone safeguarding the geothermal aquifer."
      },
      {
        "id": "u96-e4",
        "type": "fill_blank",
        "promptEn": "Fill in the correct biodiversity action term from international ESG audits:",
        "promptVi": "Chọn thuật ngữ bảo tồn đa dạng sinh học trong đánh giá kiểm toán ESG quốc tế:",
        "englishSentence": "Independent sustainability auditors awarded Vikoda the highest rating for sustainable water extraction and local biodiversity [ _____ ].",
        "audioText": "Independent sustainability auditors awarded Vikoda the highest rating for sustainable water extraction and local biodiversity conservation.",
        "blankWord": "conservation",
        "options": [
          "conservation",
          "depletion",
          "litigation"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Các kiểm toán viên độc lập về phát triển bền vững đã trao cho Vikoda xếp hạng cao nhất về khai thác nước bền vững và bảo tồn đa dạng sinh học địa phương.",
        "explanation": "'Biodiversity conservation' (bảo tồn đa dạng sinh học) chứng minh nhà máy Vikoda vận hành hài hòa tuyệt đối với hệ sinh thái rừng nhiệt đới Khánh Hòa.",
        "whyWrong": "'Depletion' (sự làm cạn kiệt) và 'litigation' (sự kiện tụng tranh chấp) là những chỉ số tiêu cực mà các kiểm toán viên ESG luôn cảnh báo.",
        "crucialNote": "Bảo tồn thảm thực vật bản địa giúp duy trì chu trình bổ cập nước ngầm tự nhiên qua các tầng địa chất.",
        "memoryHook": "Highest audit ratings for sustainable extraction and biodiversity conservation."
      },
      {
        "id": "u96-e5",
        "type": "chat_branch",
        "promptEn": "Nordic Green Fund Due Diligence: Prove natural water recharge sustainability:",
        "promptVi": "Thẩm định vốn đầu tư xanh châu Âu: Chứng minh với quỹ đầu tư Bắc Âu rằng sản lượng khai thác không vượt quá khả năng hoàn trả tự nhiên:",
        "englishSentence": "Ms. Lindgren, we welcome your rigorous due diligence. Our hydrogeological telemetry network monitors aquifer replenishment in real time: we extract less than 15% of the natural subterranean spring recharge capacity, leaving the remaining 85% untouched to preserve geothermal equilibrium and surrounding eco-reserves.",
        "audioText": "Ms. Lindgren, we welcome your rigorous due diligence. Our hydrogeological telemetry network monitors aquifer replenishment in real time: we extract less than 15% of the natural subterranean spring recharge capacity, leaving the remaining 85% untouched to preserve geothermal equilibrium and surrounding eco-reserves.",
        "chatMessages": [
          {
            "speaker": "Astrid Lindgren (Head of Sustainable Investments, Nordic Green Capital)",
            "avatar": "🇸🇪",
            "message": "Minh, before our investment board authorizes a $50 Million green capital injection, we require empirical proof that Vikoda's extraction volume never exceeds the natural subterranean replenishment rate of the Danh Thanh aquifer."
          }
        ],
        "chatOptions": [
          {
            "text": "Ms. Lindgren, we welcome your rigorous due diligence. Our hydrogeological telemetry network monitors aquifer replenishment in real time: we extract less than 15% of the natural subterranean spring recharge capacity, leaving the remaining 85% untouched to preserve geothermal equilibrium and surrounding eco-reserves.",
            "trustScore": 25,
            "feedback": "Thẩm định ESG chuẩn mực quốc tế (+25 Điểm Tin Cậy)! Cung cấp số liệu khoa học định lượng (chỉ khai thác <15% trữ lượng bổ cập tự nhiên, dành 85% bảo tồn cân bằng sinh thái), thuyết phục trọn vẹn quỹ đầu tư xanh Bắc Âu giải ngân nguồn vốn 50 triệu USD.",
            "isCorrect": true
          },
          {
            "text": "We pump out every drop of water as quickly as possible 24/7 to maximize our quarterly financial profits.",
            "trustScore": 0,
            "feedback": "Tư duy khai thác tận diệt vi phạm nghiêm trọng nguyên tắc ESG, khiến quỹ đầu tư lập tức rút lui và công khai chỉ trích doanh nghiệp.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa bà Lindgren, chúng tôi hoan nghênh quá trình thẩm định kỹ lưỡng của quý quỹ. Mạng lưới viễn trắc địa chất thủy văn của chúng tôi giám sát sự bổ sung của tầng ngậm nước theo thời gian thực: chúng tôi chỉ khai thác dưới 15% công suất bổ cập tự nhiên của mạch suối ngầm, để lại 85% nguyên vẹn nhằm bảo tồn trạng thái cân bằng địa nhiệt và khu bảo tồn sinh thái xung quanh.",
        "explanation": "Chỉ số khai thác dưới 15% công suất tái tạo tự nhiên (natural recharge rate) là tiêu chuẩn vàng khẳng định sự trường tồn hàng trăm năm của mỏ nước khoáng Đảnh Thạnh.",
        "crucialNote": "Quản trị nguồn nước có trách nhiệm bảo đảm rằng sự phát triển của doanh nghiệp hôm nay không làm tổn hại đến tài nguyên của thế hệ tương lai.",
        "memoryHook": "Extract under 15% of recharge capacity to protect natural geothermal equilibrium."
      }
    ]
  },
  {
    "id": "unit-97",
    "unitNumber": 97,
    "title": "Đại Hội Cổ Đông & Đối Tác Chiến Lược Toàn Cầu",
    "subtitle": "Công bố kết quả tăng trưởng doanh thu xuất khẩu vượt bậc",
    "level": "C1-C2",
    "icon": "🌏",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u97-e1",
        "type": "match_pairs",
        "promptEn": "Match each Annual General Meeting (AGM) financial governance term:",
        "promptVi": "Nối các thuật ngữ tài chính và quan hệ cổ đông (IR) tại Đại hội Cổ đông thường niên:",
        "englishSentence": "Match the 5 Annual General Meeting and shareholder relations concepts.",
        "audioText": "Match the 5 Annual General Meeting and shareholder relations concepts.",
        "explanation": "Đại hội Cổ đông thường niên (AGM) là diễn đàn tối cao nơi ban điều hành báo cáo kết quả tài chính vượt bậc, chiến lược mở rộng xuất khẩu và chính sách chi trả cổ tức.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ tài chính doanh nghiệp niêm yết và quan hệ cổ đông quốc tế.",
        "pairs": [
          {
            "left": "Annual General Meeting (AGM)",
            "right": "Đại hội đồng cổ đông thường niên thông qua nghị quyết định hướng tập đoàn"
          },
          {
            "left": "Earnings Per Share (EPS)",
            "right": "Chỉ số lợi nhuận ròng trên mỗi cổ phần phổ thông của công ty niêm yết"
          },
          {
            "left": "Consolidated Operating Margin",
            "right": "Biên lợi nhuận từ hoạt động kinh doanh hợp nhất sau kiểm toán"
          },
          {
            "left": "Strategic Cash Dividend Payout",
            "right": "Tỷ lệ chi trả cổ tức bằng tiền mặt thưởng cho các cổ đông gắn kết"
          },
          {
            "left": "Forward-Looking Strategic Guidance",
            "right": "Định hướng và dự báo tăng trưởng doanh thu cho niên độ tài chính mới"
          }
        ]
      },
      {
        "id": "u97-e2",
        "type": "speak",
        "promptEn": "Shadow this triumphant CEO address to the global shareholder assembly:",
        "promptVi": "Luyện phát âm thông điệp báo cáo tăng trưởng doanh thu xuất khẩu trước đại hội cổ đông:",
        "englishSentence": "I am delighted to report to our esteemed shareholders that our international export revenue surged forty-two percent, exceeding all strategic benchmarks.",
        "audioText": "I am delighted to report to our esteemed shareholders that our international export revenue surged forty-two percent, exceeding all strategic benchmarks.",
        "phonetics": "/aɪ æm dɪˈlaɪtɪd tuː rɪˈpɔːrt tuː ˈaʊər ɪˈstiːmd ˈʃɛərhoʊldərz ðæt ˈaʊər ˌɪntərˈnæʃnəl ˈɛkspɔːrt ˈrɛvənjuː sɜːrdʒd ˈfɔːrti-tuː pərˈsɛnt, ɪkˈsiːdɪŋ ɔːl strəˈtiːdʒɪk ˈbɛntʃmɑːrks/",
        "vietnameseMeaning": "Tôi rất vui mừng được báo cáo trước quý vị cổ đông đáng kính rằng doanh thu xuất khẩu quốc tế của chúng ta đã tăng vọt bốn mươi hai phần trăm, vượt mọi chỉ tiêu chiến lược.",
        "explanation": "Giọng điệu hào sảng, tự tin của vị thuyền trưởng dẫn dắt con thuyền Vikoda vươn ra biển lớn.",
        "whyWrong": "Chú ý phát âm rõ âm /dʒ/ trong 'surged' (/sɜːrdʒd/) và trọng âm của 'benchmarks' (/ˈbɛntʃmɑːrks/).",
        "crucialNote": "Tăng trưởng xuất khẩu 42% chứng minh chiến lược định vị cao cấp và thâm nhập chuỗi siêu thị quốc tế đã mang lại trái ngọt.",
        "memoryHook": "Delighted to report international export revenue surged forty-two percent."
      },
      {
        "id": "u97-e3",
        "type": "word_order",
        "promptEn": "Construct the financial statement highlighting premium glass portfolio margins:",
        "promptVi": "Sắp xếp các từ thành câu phân tích động lực gia tăng biên lợi nhuận từ dòng chai thủy tinh:",
        "englishSentence": "Strong international demand for our glass bottle portfolio contributed significantly to widening our consolidated operating margins.",
        "audioText": "Strong international demand for our glass bottle portfolio contributed significantly to widening our consolidated operating margins.",
        "wordPool": [
          "Strong",
          "international",
          "demand",
          "for",
          "our",
          "glass",
          "bottle",
          "portfolio",
          "contributed",
          "significantly",
          "to",
          "widening",
          "our",
          "consolidated",
          "operating",
          "margins.",
          "eroded",
          "loss"
        ],
        "vietnameseMeaning": "Nhu cầu quốc tế mạnh mẽ đối với dòng sản phẩm chai thủy tinh đã đóng góp đáng kể vào việc nới rộng biên lợi nhuận hoạt động hợp nhất của chúng ta.",
        "explanation": "Dòng chai thủy tinh cao cấp (glass bottle portfolio) có biên lợi nhuận gộp vượt trội, giúp tối ưu hóa hiệu quả tài chính trên mỗi đơn vị thể tích xuất khẩu.",
        "whyWrong": "Cần đặt cụm trạng từ 'contributed significantly to widening' đúng vị trí vị ngữ.",
        "crucialNote": "Thủy tinh là bao bì thân thiện môi trường được các thị trường châu Âu và Nhật Bản ưu tiên chọn lựa hàng đầu.",
        "memoryHook": "Glass bottle portfolio demand contributed significantly to widening operating margins."
      },
      {
        "id": "u97-e4",
        "type": "fill_blank",
        "promptEn": "Select the corporate financial reward term to complete the AGM resolution:",
        "promptVi": "Chọn thuật ngữ phân phối lợi nhuận tiền mặt cho cổ đông:",
        "englishSentence": "The Board of Directors proposed a record cash [ _____ ] distribution following unprecedented international market expansion.",
        "audioText": "The Board of Directors proposed a record cash dividend distribution following unprecedented international market expansion.",
        "blankWord": "dividend",
        "options": [
          "dividend",
          "insolvency",
          "garnishment"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Hội đồng Quản trị đã đề xuất một mức phân phối cổ tức bằng tiền mặt kỷ lục sau bước mở rộng thị trường quốc tế chưa từng có tiền lệ.",
        "explanation": "'Cash dividend' (cổ tức bằng tiền mặt) là minh chứng hùng hồn nhất cho thấy lợi nhuận kế toán đã được hiện thực hóa thành dòng tiền thật vững mạnh.",
        "whyWrong": "'Insolvency' (sự vỡ nợ) và 'garnishment' (tịch biên tài sản) là những thuật ngữ tiêu cực về phá sản.",
        "crucialNote": "Chính sách cổ tức bằng tiền mặt đều đặn thu hút các quỹ đầu tư dài hạn nắm giữ cổ phiếu doanh nghiệp.",
        "memoryHook": "Record cash dividend distributions reward loyal shareholders."
      },
      {
        "id": "u97-e5",
        "type": "chat_branch",
        "promptEn": "AGM Floor Q&A: Balance shareholder cash dividends with automated factory capital expenditure:",
        "promptVi": "Chất vấn tại Đại hội Cổ đông: Cân đối giữa việc chia cổ tức tiền mặt và tái đầu tư mở rộng dây chuyền Krones:",
        "englishSentence": "Mr. Phong, our capital allocation strategy is disciplined and balanced: we propose allocating 40% of net profits to rewarding shareholders with attractive cash dividends, while reinvesting 60% into Phase 2 of our automated German Krones canning and bottling line, doubling our export capacity by Q3 next year.",
        "audioText": "Mr. Phong, our capital allocation strategy is disciplined and balanced: we propose allocating 40% of net profits to rewarding shareholders with attractive cash dividends, while reinvesting 60% into Phase 2 of our automated German Krones canning and bottling line, doubling our export capacity by Q3 next year.",
        "chatMessages": [
          {
            "speaker": "Tran Duc Phong (Institutional Fund Representative)",
            "avatar": "📈",
            "message": "Mr. CEO, with record export earnings this fiscal year, will the board prioritize higher cash dividend payouts or invest in additional high-speed bottling capacity to satisfy expanding European retail demand?"
          }
        ],
        "chatOptions": [
          {
            "text": "Mr. Phong, our capital allocation strategy is disciplined and balanced: we propose allocating 40% of net profits to rewarding shareholders with attractive cash dividends, while reinvesting 60% into Phase 2 of our automated German Krones canning and bottling line, doubling our export capacity by Q3 next year.",
            "trustScore": 25,
            "feedback": "Giải trình tài chính bậc thầy (+25 Điểm Tin Cậy)! Chiến lược phân bổ vốn hài hòa 40/60 (vừa làm hài lòng cổ đông bằng cổ tức tiền mặt hấp dẫn, vừa đầu tư mở rộng gấp đôi công suất xuất khẩu với dây chuyền Krones của Đức), nhận được 100% phiếu tán thành tại đại hội.",
            "isCorrect": true
          },
          {
            "text": "We will burn 100% of our treasury cash on luxury corporate bonuses and give zero dividend to shareholders this year.",
            "trustScore": 0,
            "feedback": "Bất kính với cổ đông khiến giá cổ phiếu lao dốc và các quỹ đầu tư tổ chức đồng loạt rút vốn khỏi doanh nghiệp.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông Phong, chiến lược phân bổ vốn của chúng tôi rất kỷ luật và cân bằng: chúng tôi đề xuất trích 40% lợi nhuận ròng để tri ân cổ đông bằng mức cổ tức tiền mặt hấp dẫn, đồng thời tái đầu tư 60% vào Giai đoạn 2 của dây chuyền đóng chai và đóng lon tự động Krones từ Đức, nâng gấp đôi công suất xuất khẩu vào Quý 3 năm sau.",
        "explanation": "Cân bằng giữa chi trả cổ tức (dividend yield) và tái đầu tư sinh lời (reinvestment for growth) là phẩm chất lãnh đạo tài chính của các CEO hàng đầu thế giới.",
        "crucialNote": "Dây chuyền tự động Krones thế hệ mới giúp giảm 25% chi phí năng lượng và tối ưu hóa năng suất vận hành.",
        "memoryHook": "Balance capital allocation: 40% cash dividends and 60% automated capacity expansion."
      }
    ]
  },
  {
    "id": "unit-98",
    "unitNumber": 98,
    "title": "Định Giá Thương Hiệu & Chiến Lược M&A",
    "subtitle": "Nâng tầm giá trị tài sản vô hình của nguồn mỏ Đảnh Thạnh",
    "level": "C1-C2",
    "icon": "📈",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u98-e1",
        "type": "match_pairs",
        "promptEn": "Match each brand valuation and M&A investment banking term:",
        "promptVi": "Nối các thuật ngữ định giá thương hiệu và M&A mua bán sáp nhập với định nghĩa tài chính:",
        "englishSentence": "Match the 5 brand valuation and strategic M&A concepts.",
        "audioText": "Match the 5 brand valuation and strategic M&A concepts.",
        "explanation": "Định giá thương hiệu và tài sản vô hình chứng minh rằng nguồn mỏ địa nhiệt Đảnh Thạnh với di sản 68 năm sở hữu giá trị kinh tế khổng lồ vượt xa tài sản hữu hình thông thường.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ chuyên sâu về định giá tài sản vô hình và mua bán sáp nhập doanh nghiệp.",
        "pairs": [
          {
            "left": "Brand Valuation & Goodwill",
            "right": "Định giá thương hiệu và lợi thế thương mại vô hình của doanh nghiệp"
          },
          {
            "left": "Mergers & Acquisitions (M&A)",
            "right": "Chiến lược mua bán sáp nhập nhằm mở rộng quy mô và thị phần"
          },
          {
            "left": "Discounted Cash Flow (DCF)",
            "right": "Phương pháp định giá dòng tiền chiết khấu dựa trên dự phóng doanh thu"
          },
          {
            "left": "Intangible Asset Capitalization",
            "right": "Vốn hóa tài sản vô hình (bằng sáng chế, giấy phép mỏ độc quyền)"
          },
          {
            "left": "Post-Merger Synergy Realization",
            "right": "Hiện thực hóa các giá trị cộng hưởng về chi phí và phân phối sau sáp nhập"
          }
        ]
      },
      {
        "id": "u98-e2",
        "type": "speak",
        "promptEn": "Shadow this authoritative intangible asset valuation statement:",
        "promptVi": "Luyện phát âm câu tuyên bố giá trị tài sản vô hình độc nhất vô nhị của mỏ khoáng Đảnh Thạnh:",
        "englishSentence": "Vikoda's sovereign geothermal aquifer and sixty-eight-year scientific heritage represent irreplaceable intangible assets that drive premium enterprise valuation.",
        "audioText": "Vikoda's sovereign geothermal aquifer and sixty-eight-year scientific heritage represent irreplaceable intangible assets that drive premium enterprise valuation.",
        "phonetics": "/vɪˈkoʊdəz ˈsɒvrɪn ˌdʒiːoʊˈθɜːrməl ˈækwɪfər ænd ˈsɪksti-eɪt-jɪər ˌsaɪənˈtɪfɪk ˈhɛrɪtɪdʒ ˌrɛprɪˈzɛnt ˌɪrɪˈpleɪsəbl ɪnˈtændʒəbl ˈæsɛts ðæt draɪv ˈpriːmiəm ˈɛntərpraɪz ˌvæljuˈeɪʃn/",
        "vietnameseMeaning": "Nguồn ngậm nước địa nhiệt quý giá và di sản khoa học sáu mươi tám năm của Vikoda đại diện cho những tài sản vô hình không thể thay thế giúp nâng tầm định giá doanh nghiệp.",
        "explanation": "Các cụm từ 'sovereign geothermal aquifer', 'irreplaceable intangible assets' và 'enterprise valuation' khẳng định vị thế tài sản độc quyền.",
        "whyWrong": "Phát âm chuẩn từ 'irreplaceable' (/ˌɪrɪˈpleɪsəbl/) và 'intangible' (/ɪnˈtændʒəbl/).",
        "crucialNote": "Một nhà máy đóng nước thông thường có thể xây dựng trong 12 tháng, nhưng một mỏ khoáng 68 năm với chứng thực Pasteur là độc nhất vô nhị.",
        "memoryHook": "Irreplaceable geothermal aquifers drive premium enterprise valuation."
      },
      {
        "id": "u98-e3",
        "type": "word_order",
        "promptEn": "Construct the independent brand equity valuation appraisal sentence:",
        "promptVi": "Sắp xếp các từ thành câu công bố kết quả thẩm định giá trị thương hiệu độc lập hơn 200 triệu USD:",
        "englishSentence": "Independent appraisers valued our brand intangible equity at over two hundred million dollars based on robust international cash flows.",
        "audioText": "Independent appraisers valued our brand intangible equity at over two hundred million dollars based on robust international cash flows.",
        "wordPool": [
          "Independent",
          "appraisers",
          "valued",
          "our",
          "brand",
          "intangible",
          "equity",
          "at",
          "over",
          "two",
          "hundred",
          "million",
          "dollars",
          "based",
          "on",
          "robust",
          "international",
          "cash",
          "flows.",
          "bankrupt",
          "worthless"
        ],
        "vietnameseMeaning": "Các chuyên gia thẩm định độc lập đã định giá tài sản vô hình thương hiệu của chúng tôi ở mức hơn hai trăm triệu đô la dựa trên dòng tiền quốc tế vững chắc.",
        "explanation": "Định giá thương hiệu dựa trên dòng tiền tự do (DCF) là phương pháp chuẩn mực được các ngân hàng đầu tư phố Wall công nhận.",
        "whyWrong": "Cần đặt cụm bổ nghĩa 'based on robust international cash flows' ở cuối câu.",
        "crucialNote": "Giá trị vô hình chiếm hơn 70% tổng giá trị thị trường của các thương hiệu hàng tiêu dùng cao cấp toàn cầu.",
        "memoryHook": "Independent appraisers valued brand equity at over two hundred million dollars."
      },
      {
        "id": "u98-e4",
        "type": "fill_blank",
        "promptEn": "Select the investment banking metric term to complete the M&A analysis:",
        "promptVi": "Chọn thuật ngữ định giá tài chính trong thẩm định M&A:",
        "englishSentence": "In strategic M&A evaluations, a natural mineral spring with sovereign bottling concessions commands a significant [ _____ ] multiple compared to generic beverage plants.",
        "audioText": "In strategic M&A evaluations, a natural mineral spring with sovereign bottling concessions commands a significant valuation multiple compared to generic beverage plants.",
        "blankWord": "valuation",
        "options": [
          "valuation",
          "depreciation",
          "forfeiture"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Trong các thẩm định M&A chiến lược, một mỏ khoáng thiên nhiên với giấy phép đóng chai độc quyền được áp dụng hệ số định giá cao vượt trội so với các nhà máy đồ uống thông thường.",
        "explanation": "'Valuation multiple' (hệ số định giá P/E hoặc EV/EBITDA) của mỏ khoáng thiên nhiên luôn cao hơn từ 2 đến 3 lần so với công ty sản xuất nước ngọt nhân tạo.",
        "whyWrong": "'Depreciation' (khấu hao tài sản) và 'forfeiture' (bị tịch thu) không dùng để chỉ hệ số nhân trong định giá M&A.",
        "crucialNote": "Sự khan hiếm địa chất tạo ra con hào kinh tế (economic moat) vững chắc bảo vệ lợi nhuận biên của Vikoda.",
        "memoryHook": "Sovereign natural springs command premium valuation multiples in M&A."
      },
      {
        "id": "u98-e5",
        "type": "chat_branch",
        "promptEn": "Private Equity Valuation Defense: Defend Vikoda's 16x EBITDA multiple against generic comparisons:",
        "promptVi": "Thương thảo định giá M&A: Phản bác đề xuất mua cổ phần định giá thấp của quỹ đầu tư tư nhân Geneva:",
        "englishSentence": "Monsieur Laurent, comparing a certified 1957 natural geothermal alkaline aquifer with a generic RO water bottler is fundamentally flawed. RO plants can be cloned anywhere with municipal tap water; a pristine 72°C virgin geothermal spring with proven health benefits and a 35-hectare reserve is a rare geological miracle that commands a premium multiple of at least 16x EBITDA.",
        "audioText": "Monsieur Laurent, comparing a certified 1957 natural geothermal alkaline aquifer with a generic RO water bottler is fundamentally flawed. RO plants can be cloned anywhere with municipal tap water; a pristine 72°C virgin geothermal spring with proven health benefits and a 35-hectare reserve is a rare geological miracle that commands a premium multiple of at least 16x EBITDA.",
        "chatMessages": [
          {
            "speaker": "Philippe Laurent (Senior Partner, Geneva Beverage Capital)",
            "avatar": "💼",
            "message": "Minh, we offer an 8x EBITDA multiple to acquire a 40% strategic stake in Vikoda, identical to our recent acquisition of a regional purified bottled water packer."
          }
        ],
        "chatOptions": [
          {
            "text": "Monsieur Laurent, comparing a certified 1957 natural geothermal alkaline aquifer with a generic RO water bottler is fundamentally flawed. RO plants can be cloned anywhere with municipal tap water; a pristine 72°C virgin geothermal spring with proven health benefits and a 35-hectare reserve is a rare geological miracle that commands a premium multiple of at least 16x EBITDA.",
            "trustScore": 25,
            "feedback": "Biện luận tài chính M&A đẳng cấp thế giới (+25 Điểm Tin Cậy)! Vạch rõ ranh giới bản chất giữa 'nhà máy lọc nước máy RO nhân tạo có thể nhân bản ở bất kỳ đâu' và 'mỏ khoáng địa nhiệt 72°C nguyên sinh sâu 220m là kỳ quan địa chất hiếm có', giữ vững hệ số định giá 16x EBITDA xứng tầm quốc tế.",
            "isCorrect": true
          },
          {
            "text": "Whatever valuation multiple you offer is completely fine with us, please wire the money quickly so we can cash out.",
            "trustScore": 0,
            "feedback": "Tư duy bán tháo rẻ mạt làm bốc hơi hàng trăm triệu USD giá trị tài sản của cổ đông và tập đoàn.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa ông Laurent, việc so sánh một mỏ ngậm nước khoáng kiềm địa nhiệt tự nhiên có chứng nhận từ năm 1957 với một cơ sở đóng chai nước RO thông thường là hoàn toàn sai lầm về mặt bản chất. Nhà máy RO có thể nhân bản ở bất kỳ đâu chỉ với nguồn nước máy thành phố; còn một mỏ suối khoáng địa nhiệt 72°C nguyên sơ với lợi ích sức khỏe đã được kiểm chứng cùng khu bảo tồn 35 héc-ta là một kỳ quan địa chất hiếm có đòi hỏi hệ số định giá cao cấp ít nhất 16 lần EBITDA.",
        "explanation": "Phân biệt rạch ròi giữa 'commodity asset' (tài sản hàng hóa đại trà) và 'monopoly resource asset' (tài sản tài nguyên độc quyền khan hiếm) là vũ khí đàm phán tối thượng trong định giá M&A.",
        "crucialNote": "Các nguồn suối khoáng danh tiếng thế giới như Evian hay Perrier đều được định giá ở mức trên 18x EBITDA.",
        "memoryHook": "RO plants can be cloned; virgin geothermal springs command 16x EBITDA multiples."
      }
    ]
  },
  {
    "id": "unit-99",
    "unitNumber": 99,
    "title": "Lễ Ký Kết Ngoại Giao Thương Mại Cấp Quốc Gia",
    "subtitle": "Nghi thức vinh danh sản phẩm đạt Thương Hiệu Quốc Gia Việt Nam",
    "level": "C1-C2",
    "icon": "🖋️",
    "color": "amber",
    "xpReward": 60,
    "gemReward": 20,
    "exercises": [
      {
        "id": "u99-e1",
        "type": "match_pairs",
        "promptEn": "Match each state commercial diplomacy and National Brand protocol term:",
        "promptVi": "Nối các thuật ngữ ngoại giao thương mại cấp quốc gia và nghi lễ Thương hiệu Quốc gia:",
        "englishSentence": "Match the 5 state commercial diplomacy and National Brand protocol terms.",
        "audioText": "Match the 5 state commercial diplomacy and National Brand protocol terms.",
        "explanation": "Vinh danh Thương hiệu Quốc gia Việt Nam (Vietnam Value) là sự công nhận cao quý nhất của Đảng và Nhà nước dành cho năng lực chất lượng, đổi mới sáng tạo và sứ mệnh ngoại giao của Vikoda.",
        "vietnameseMeaning": "Nối đúng 5 thuật ngữ nghi lễ ngoại giao thương mại và biểu trưng Thương hiệu Quốc gia.",
        "pairs": [
          {
            "left": "Vietnam National Brand Award",
            "right": "Giải thưởng Thương hiệu Quốc gia Việt Nam vinh danh tinh hoa doanh nghiệp"
          },
          {
            "left": "Bilateral Commercial Protocol",
            "right": "Nghị định thư thương mại song phương cấp chính phủ mở rộng xuất khẩu"
          },
          {
            "left": "Official Signing Ceremony",
            "right": "Lễ ký kết văn kiện chính thức trong không khí nghi lễ quốc gia trang trọng"
          },
          {
            "left": "Diplomatic Corps & State Ministers",
            "right": "Đoàn ngoại giao các nước và các vị bộ trưởng ban ngành chứng kiến"
          },
          {
            "left": "Joint Strategic Declaration",
            "right": "Tuyên bố chung về quan hệ đối tác kinh tế chiến lược toàn diện"
          }
        ]
      },
      {
        "id": "u99-e2",
        "type": "speak",
        "promptEn": "Shadow this noble National Brand acceptance speech statement:",
        "promptVi": "Luyện phát âm lời phát biểu đón nhận biểu trưng Thương hiệu Quốc gia đầy trang trọng:",
        "englishSentence": "It is our profound national privilege to be recognized as a Vietnam National Brand, carrying the pristine essence of our homeland onto the global diplomatic stage.",
        "audioText": "It is our profound national privilege to be recognized as a Vietnam National Brand, carrying the pristine essence of our homeland onto the global diplomatic stage.",
        "phonetics": "/ɪt ɪz ˈaʊər prəˈfaʊnd ˈnæʃnəl ˈprɪvəlɪdʒ tuː biː ˈrɛkəɡnaɪzd æz ə ˌvjɛtˈnɑːm ˈnæʃnəl brænd, ˈkæri-ɪŋ ðə ˈprɪstiːn ˈɛsns əv ˈaʊər ˈhoʊmlænd ˈɒntuː ðə ˈɡloʊbəl ˌdɪpləˈmætɪk steɪdʒ/",
        "vietnameseMeaning": "Thật là một đặc ân quốc gia sâu sắc của chúng tôi khi được vinh danh là Thương hiệu Quốc gia Việt Nam, mang tinh hoa nguyên bản của quê hương lên vũ đài ngoại giao toàn cầu.",
        "explanation": "Ngữ điệu trang trọng, đĩnh đạc, nhấn mạnh vào 'profound national privilege' và 'pristine essence of our homeland'.",
        "whyWrong": "Chú ý phát âm rõ âm /dʒ/ trong 'privilege' (/ˈprɪvəlɪdʒ/) và trọng âm của 'diplomatic' (/ˌdɪpləˈmætɪk/).",
        "crucialNote": "Thương hiệu Quốc gia không chỉ là danh hiệu thương mại, mà là sứ mệnh đại diện cho hình ảnh đất nước trên trường quốc tế.",
        "memoryHook": "Carrying the pristine essence of our homeland onto the global diplomatic stage."
      },
      {
        "id": "u99-e3",
        "type": "word_order",
        "promptEn": "Construct the formal treaty ratification sentence witnessed by state dignitaries:",
        "promptVi": "Sắp xếp các từ thành câu mô tả nghi thức phê chuẩn hiệp định song phương trang trọng:",
        "englishSentence": "Witnessed by government dignitaries, the comprehensive bilateral accord was formally ratified and sealed.",
        "audioText": "Witnessed by government dignitaries, the comprehensive bilateral accord was formally ratified and sealed.",
        "wordPool": [
          "Witnessed",
          "by",
          "government",
          "dignitaries,",
          "the",
          "comprehensive",
          "bilateral",
          "accord",
          "was",
          "formally",
          "ratified",
          "and",
          "sealed.",
          "breached",
          "revoked"
        ],
        "vietnameseMeaning": "Dưới sự chứng kiến của các quan chức chính phủ cấp cao, hiệp ước song phương toàn diện đã được chính thức phê chuẩn và đóng dấu pháp lý.",
        "explanation": "Cấu trúc phân từ quá khứ mở đầu 'Witnessed by government dignitaries' tái hiện không khí ngoại giao trang nghiêm của lễ ký kết.",
        "whyWrong": "Tránh nhầm lẫn vị trí của hai động từ bị động 'ratified and sealed' (phê chuẩn và đóng dấu niêm phong).",
        "crucialNote": "Sự hiện diện của các vị bộ trưởng và đại sứ là sự bảo chứng chính trị và ngoại giao cao nhất cho hiệp định thương mại.",
        "memoryHook": "Witnessed by government dignitaries, bilateral accords are formally ratified and sealed."
      },
      {
        "id": "u99-e4",
        "type": "fill_blank",
        "promptEn": "Select the diplomatic leadership term honoring decades of enterprise service:",
        "promptVi": "Chọn thuật ngữ ngoại giao kinh tế hoàn thiện quyết định vinh danh của Thủ tướng:",
        "englishSentence": "The Prime Minister conferred the National Brand insignia upon Vikoda, honoring decades of manufacturing excellence and international [ _____ ].",
        "audioText": "The Prime Minister conferred the National Brand insignia upon Vikoda, honoring decades of manufacturing excellence and international diplomacy.",
        "blankWord": "diplomacy",
        "options": [
          "diplomacy",
          "insolvency",
          "subrogation"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Thủ tướng Chính phủ đã trao biểu trưng Thương hiệu Quốc gia cho Vikoda, vinh danh nhiều thập kỷ sản xuất xuất sắc và ngoại giao thương mại quốc tế.",
        "explanation": "'International diplomacy' (ngoại giao kinh tế quốc tế) ghi nhận đóng góp của Vikoda trong việc quảng bá hình ảnh Việt Nam tươi đẹp, văn minh và thịnh vượng.",
        "whyWrong": "'Insolvency' (sự vỡ nợ) và 'subrogation' (thế quyền đòi nợ) hoàn toàn không phù hợp trong quyết định khen thưởng của Nhà nước.",
        "crucialNote": "Mỗi chai nước khoáng Vikoda xuất khẩu là một đại sứ văn hóa mang thông điệp về đất nước Việt Nam kiên cường và giàu tài nguyên.",
        "memoryHook": "Honoring decades of manufacturing excellence and international diplomacy."
      },
      {
        "id": "u99-e5",
        "type": "chat_branch",
        "promptEn": "Diplomatic Gala Toast: Secure Vikoda as the official water for a G7 Embassy National Day Gala:",
        "promptVi": "Tiệc ngoại giao quốc tế: Đáp lại lời khen ngợi của Đại sứ Pháp và đưa Vikoda vào thực đơn dạ tiệc ngoại giao chính thức:",
        "englishSentence": "Your Excellency, it is an extraordinary honor for Vikoda and for Vietnam. We would be thrilled to supply our flagship glass bottle reserve directly from the 72°C Danh Thanh source for the National Day Diplomatic Gala, celebrating the profound friendship and cultural appreciation between our two nations.",
        "audioText": "Your Excellency, it is an extraordinary honor for Vikoda and for Vietnam. We would be thrilled to supply our flagship glass bottle reserve directly from the 72°C Danh Thanh source for the National Day Diplomatic Gala, celebrating the profound friendship and cultural appreciation between our two nations.",
        "chatMessages": [
          {
            "speaker": "Ambassador Jean-Luc Moreau (Embassy of France)",
            "avatar": "🇫🇷",
            "message": "President Minh, tasting this sparkling Vikoda from Danh Thanh is a revelation — the delicate natural effervescence and mineral balance rival our finest European terroirs. We wish to serve Vikoda at our National Day Diplomatic Gala next month."
          }
        ],
        "chatOptions": [
          {
            "text": "Your Excellency, it is an extraordinary honor for Vikoda and for Vietnam. We would be thrilled to supply our flagship glass bottle reserve directly from the 72°C Danh Thanh source for the National Day Diplomatic Gala, celebrating the profound friendship and cultural appreciation between our two nations.",
            "trustScore": 25,
            "feedback": "Ngoại giao văn hóa đỉnh cao (+25 Điểm Tin Cậy)! Ứng đối tinh tế, nhã nhặn và đầy tự hào dân tộc, đưa dòng chai thủy tinh di sản Đảnh Thạnh hiện diện trang trọng trong dạ tiệc Quốc khánh của Đại sứ quán Pháp trước sự chứng kiến của toàn thể đoàn ngoại giao thế giới.",
            "isCorrect": true
          },
          {
            "text": "We don't give free water to foreign embassies. Tell your assistants to go buy it at the local convenience store.",
            "trustScore": 0,
            "feedback": "Thái độ thô lỗ và bần tiện hủy hoại cơ hội ngoại giao thương mại vô giá của tập đoàn và quốc gia.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Thưa Đại sứ, đây là một vinh dự phi thường đối với Vikoda và đối với đất nước Việt Nam. Chúng tôi rất vinh hạnh được cung cấp dòng sản phẩm chai thủy tinh di sản trực tiếp từ nguồn mỏ Đảnh Thạnh 72°C cho Dạ tiệc Ngoại giao Quốc khánh, tôn vinh tình hữu nghị sâu sắc và sự giao thoa văn hóa giữa hai quốc gia chúng ta.",
        "explanation": "Phục vụ tại các dạ tiệc ngoại giao của các đại sứ quán G7 là bảo chứng tối thượng cho đẳng cấp quý tộc của dòng chai thủy tinh Vikoda.",
        "crucialNote": "Nghệ thuật ẩm thực Pháp đặc biệt khắt khe về sự hài hòa khoáng chất trong nước uống kết hợp với rượu vang và món ăn cao cấp.",
        "memoryHook": "Serve flagship glass reserves at diplomatic galas to elevate national pride."
      }
    ]
  },
  {
    "id": "unit-100",
    "unitNumber": 100,
    "title": "Đại Lễ Tốt Nghiệp Lãnh Đạo C-Suite Toàn Năng",
    "subtitle": "Cấp Chứng Chỉ Tinh Hoa Ngoại Giao Thương Hiệu Vikoda Toàn Cầu",
    "level": "C1-C2",
    "icon": "🎓",
    "color": "amber",
    "xpReward": 100,
    "gemReward": 50,
    "exercises": [
      {
        "id": "u100-e1",
        "type": "match_pairs",
        "promptEn": "Grand Finale Milestone: Pair the 5 supreme leadership competencies across all 100 Units:",
        "promptVi": "Đại Lễ Tốt Nghiệp 100 Bài Học: Ghép 5 đỉnh cao năng lực Lãnh đạo C-Suite Toàn cầu:",
        "englishSentence": "Match the 5 supreme C-Suite global leadership competencies.",
        "audioText": "Match the 5 supreme C-Suite global leadership competencies.",
        "explanation": "Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ 100 bài học toàn diện từ A1 đến C2 của Học viện Tiếng Anh Doanh nghiệp Vikoda Pro!",
        "vietnameseMeaning": "Nối đúng 5 trụ cột năng lực lãnh đạo tối thượng được đúc kết từ 100 bài học.",
        "pairs": [
          {
            "left": "Grand C-Suite Global Mastery",
            "right": "Năng lực lãnh đạo điều hành chiến lược và ngoại giao thương mại đỉnh cao"
          },
          {
            "left": "100-Unit Curriculum Achievement",
            "right": "Hoàn thành toàn diện 100 bài học tinh hoa từ nền tảng đến C-Suite"
          },
          {
            "left": "Sovereign Brand Ambassadorship",
            "right": "Sứ mệnh đại sứ thương hiệu quốc gia bảo vệ và tỏa sáng di sản 1957"
          },
          {
            "left": "Enterprise Cross-Border Governance",
            "right": "Năng lực làm chủ pháp lý thương mại, L/C, Incoterms và trọng tài SIAC"
          },
          {
            "left": "Enduring Value & Legacy Creation",
            "right": "Kiến tạo giá trị trường tồn và di sản tự hào cho thế hệ tương lai"
          }
        ]
      },
      {
        "id": "u100-e2",
        "type": "speak",
        "promptEn": "Speak this triumphant 100-Unit Grand Graduation Oath with absolute conviction:",
        "promptVi": "Luyện phát biểu lời tuyên thệ tốt nghiệp toàn khóa 100 Bài Học Lãnh Đạo C-Suite Toàn Năng:",
        "englishSentence": "Having conquered all one hundred units, I stand fully equipped as a global C-Suite leader, championing Vikoda's heritage and driving international enterprise excellence.",
        "audioText": "Having conquered all one hundred units, I stand fully equipped as a global C-Suite leader, championing Vikoda's heritage and driving international enterprise excellence.",
        "phonetics": "/ˈhævɪŋ ˈkɒŋkərd ɔːl wʌn ˈhʌndrəd ˈjuːnɪts, aɪ stænd ˈfʊli ɪˈkwɪpt æz ə ˈɡloʊbəl siː-swiːt ˈliːdər, ˈtʃæmpiənɪŋ vɪˈkoʊdəz ˈhɛrɪtɪdʒ ænd ˈdraɪvɪŋ ˌɪntərˈnæʃnəl ˈɛntərpraɪz ˈɛksələns/",
        "vietnameseMeaning": "Sau khi chinh phục toàn bộ một trăm bài học, tôi hoàn toàn tự tin đứng ở vị thế nhà lãnh đạo C-Suite toàn cầu, giương cao di sản Vikoda và dẫn dắt sự xuất sắc của doanh nghiệp quốc tế.",
        "explanation": "Lời tuyên thệ đầy tự hào của học viên đã kiên trì vượt qua 500 bài tập đa dạng, làm chủ hoàn toàn tiếng Anh kinh doanh và quản trị quốc tế.",
        "whyWrong": "Phát biểu với ánh mắt rực sáng, chất giọng hào sảng, vang dội và phong thái đĩnh đạc của một nhà lãnh đạo xuất chúng.",
        "crucialNote": "Bạn đã chính thức gia nhập tầng lớp tinh hoa lãnh đạo thương mại quốc tế của Tập đoàn Vikoda!",
        "memoryHook": "Equipped as a global C-Suite leader, championing Vikoda's heritage worldwide."
      },
      {
        "id": "u100-e3",
        "type": "word_order",
        "promptEn": "Arrange the words commemorating your historic 100-unit enterprise journey:",
        "promptVi": "Sắp xếp các từ thành câu tổng kết hành trình biến nước khoáng thiên nhiên thành biểu tượng tự hào quốc gia:",
        "englishSentence": "Through relentless discipline and scientific mastery, we have transformed natural alkaline water into an enduring national icon.",
        "audioText": "Through relentless discipline and scientific mastery, we have transformed natural alkaline water into an enduring national icon.",
        "wordPool": [
          "Through",
          "relentless",
          "discipline",
          "and",
          "scientific",
          "mastery,",
          "we",
          "have",
          "transformed",
          "natural",
          "alkaline",
          "water",
          "into",
          "an",
          "enduring",
          "national",
          "icon.",
          "stagnant",
          "ordinary"
        ],
        "vietnameseMeaning": "Qua kỷ luật bền bỉ và sự làm chủ khoa học, chúng ta đã chuyển hóa nước khoáng kiềm thiên nhiên thành một biểu tượng trường tồn của quốc gia.",
        "explanation": "Cấu trúc hoàn hảo 'Through relentless discipline and scientific mastery, we have transformed A into B' đúc kết trọn vẹn tinh thần của toàn bộ chương trình.",
        "whyWrong": "Xếp đúng trạng ngữ chỉ phương tiện 'Through relentless discipline and scientific mastery' ở đầu câu.",
        "crucialNote": "Thành công vĩ đại luôn là kết quả của kỷ luật sắt đá và sự kiên trì mài giũa không ngừng nghỉ.",
        "memoryHook": "Through relentless discipline and scientific mastery, we create enduring icons."
      },
      {
        "id": "u100-e4",
        "type": "fill_blank",
        "promptEn": "Select the ultimate executive authority keyword completing your master diploma:",
        "promptVi": "Chọn thuật ngữ quyền uy cao nhất để hoàn thiện bằng chứng nhận tốt nghiệp bậc thầy:",
        "englishSentence": "Graduating from this master curriculum certifies your authority in international contract negotiation, global logistics, and boardroom executive [ _____ ].",
        "audioText": "Graduating from this master curriculum certifies your authority in international contract negotiation, global logistics, and boardroom executive governance.",
        "blankWord": "governance",
        "options": [
          "governance",
          "paralysis",
          "obsolescence"
        ],
        "correctIndex": 0,
        "vietnameseMeaning": "Tốt nghiệp khóa học bậc thầy này chứng nhận năng lực của bạn trong đàm phán hợp đồng quốc tế, logistics toàn cầu và quản trị điều hành cấp cao.",
        "explanation": "'Executive governance' (năng lực quản trị điều hành cấp cao) là viên kim cương sáng nhất trên vương miện tri thức của người làm chủ khóa học 100 Unit.",
        "whyWrong": "'Paralysis' (sự tê liệt) và 'obsolescence' (sự lạc hậu lỗi thời) hoàn toàn trái ngược với tinh thần vươn tầm đỉnh cao.",
        "crucialNote": "Chứng chỉ C-Suite Vikoda là bảo chứng vàng cho tương lai sự nghiệp của bạn ở bất kỳ tập đoàn đa quốc gia nào.",
        "memoryHook": "Mastery in international negotiation, global logistics, and executive governance."
      },
      {
        "id": "u100-e5",
        "type": "chat_branch",
        "promptEn": "Grand Milestone Final Simulation: Accept the Chief Global Commercial Officer appointment on Slack:",
        "promptVi": "Đại lễ tốt nghiệp: Chủ tịch Tập đoàn FIT và Hội đồng Quản trị bổ nhiệm bạn làm Giám Đốc Thương Mại Toàn Cầu & Đại Sứ Thương Hiệu:",
        "englishSentence": "Mr. Chairman and esteemed Board Members, I accept this appointment with the deepest pride and dedication! Armed with the mastery of all 100 units, the spirit of 'Ngọc Trong Đá', and the pristine 68-year heritage of Danh Thanh, I pledge to lead our international expansion with uncompromising excellence, delivering Vietnam's finest natural mineral water to every corner of the globe!",
        "audioText": "Mr. Chairman and esteemed Board Members, I accept this appointment with the deepest pride and dedication! Armed with the mastery of all 100 units, the spirit of 'Ngọc Trong Đá', and the pristine 68-year heritage of Danh Thanh, I pledge to lead our international expansion with uncompromising excellence, delivering Vietnam's finest natural mineral water to every corner of the globe!",
        "chatMessages": [
          {
            "speaker": "Chairman of the Board (FIT Group & Vikoda Corporation)",
            "avatar": "👑",
            "message": "Minh, you have demonstrated exceptional grit, intellectual mastery, and diplomatic finesse throughout all 100 units. Today, the Board unanimously appoints you as Chief Global Commercial Officer & Sovereign Brand Ambassador! Are you ready to lead Vikoda to conquer the world?"
          }
        ],
        "chatOptions": [
          {
            "text": "Mr. Chairman and esteemed Board Members, I accept this appointment with the deepest pride and dedication! Armed with the mastery of all 100 units, the spirit of 'Ngọc Trong Đá', and the pristine 68-year heritage of Danh Thanh, I pledge to lead our international expansion with uncompromising excellence, delivering Vietnam's finest natural mineral water to every corner of the globe!",
            "trustScore": 25,
            "feedback": "VINH DANH TỐT NGHIỆP THỦ KHOA XUẤT SẮC 100 BÀI HỌC! Bạn đã chính thức bước lên đỉnh cao danh vọng: Giám Đốc Thương Mại Toàn Cầu kiêm Đại Sứ Thương Hiệu Toàn Quyền của Vikoda! Chúc mừng bạn đã hoàn thành trọn vẹn kiệt tác đào tạo tiếng Anh doanh nghiệp lớn nhất Việt Nam!",
            "isCorrect": true
          },
          {
            "text": "No thanks, studying 100 units was way too exhausting so I am submitting my resignation and going home to sleep.",
            "trustScore": 0,
            "feedback": "Bỏ cuộc ngay trước ngưỡng cửa vinh quang và đánh mất sự nghiệp rực rỡ suốt đời.",
            "isCorrect": false
          }
        ],
        "vietnameseMeaning": "Kính thưa Chủ tịch và các thành viên Hội đồng Quản trị đáng kính, tôi xin đón nhận sự bổ nhiệm này với niềm tự hào và sự cống hiến sâu sắc nhất! Được trang bị kiến thức tinh hoa của toàn bộ 100 bài học, tinh thần 'Ngọc Trong Đá' và di sản 68 năm nguyên sơ của nguồn mỏ Đảnh Thạnh, tôi xin tuyên thệ sẽ dẫn dắt công cuộc mở rộng quốc tế với sự xuất sắc không bao giờ thỏa hiệp, đưa nguồn nước khoáng thiên nhiên tuyệt hảo nhất của Việt Nam đến mọi góc bể chân trời!",
        "explanation": "Khoảnh khắc đăng quang vĩ đại: Hội tụ đủ Tâm - Tầm - Tài, kết tinh tinh hoa ngôn ngữ và tư duy quản trị toàn cầu để giương cao lá cờ thương hiệu Việt Nam trên bản đồ thế giới.",
        "crucialNote": "Chúc mừng bạn đã xuất sắc tốt nghiệp toàn bộ 100 Unit của Vikoda English Pro!",
        "memoryHook": "Lead international expansion delivering Vietnam's finest mineral water to the globe."
      }
    ]
  }
];
