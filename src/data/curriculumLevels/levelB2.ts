import { UnitLesson } from '../curriculumData';

export const LEVEL_B2_UNITS: UnitLesson[] = [
  {
    id: 'unit-25',
    unitNumber: 25,
    title: 'Tiếp Cận F&B Director & Khách Sạn 5 Sao',
    subtitle: 'Nghệ thuật đối thoại với Giám đốc Ẩm thực tại chuỗi resort cao cấp',
    level: 'B2',
    icon: '🏨',
    color: 'emerald',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u25-e1',
        type: 'choice',
        promptEn: 'When pitching to a 5-star Hotel General Manager, why is Vikoda Glass Bottle 430ml the winning choice over plastic?',
        promptVi: 'Khi thuyết phục Tổng Giám Đốc Resort 5 sao, vì sao chai thủy tinh Vikoda 430ml là vũ khí chiến thắng chai nhựa?',
        englishSentence: 'Premium glass elevates banquet aesthetics and fulfills strict ESG zero-plastic sustainability mandates.',
        audioText: 'Premium glass elevates banquet aesthetics and fulfills strict ESG zero-plastic sustainability mandates.',
        options: [
          'Premium glass elevates banquet aesthetics and fulfills strict ESG zero-plastic sustainability mandates.',
          'Because plastic is much more expensive than gold.',
          'Because hotel guests prefer drinking muddy water.'
        ],
        correctIndex: 0,
        explanation: 'Chai thủy tinh Vikoda đáp ứng 2 tiêu chuẩn sống còn của khách sạn 5 sao: Đẳng cấp thẩm mỹ bàn tiệc và Cam kết môi trường ESG loại bỏ đồ nhựa dùng một lần.',
        whyWrong: 'Các tập đoàn như Marriott, Accor, IHG đều có quy định bắt buộc phải chuyển đổi sang chai thủy tinh.',
        crucialNote: 'Vikoda sở hữu mạng lưới phân phối hơn 40 khách sạn và resort 5 sao khắp Việt Nam (Sheraton, Vinpearl, Sofitel, New World...).',
        memoryHook: 'Glass + ESG = Chìa khóa vàng mở toang cánh cửa HORECA 5 sao.'
      },
      {
        id: 'u25-e2',
        type: 'word_order',
        promptEn: 'Formulate the pitch highlighting localized luxury vs imported brands like San Pellegrino:',
        promptVi: 'Sắp xếp câu: "Nước khoáng kiềm thiên nhiên đóng chai tại nguồn của Việt Nam mang đẳng cấp thế giới."',
        englishSentence: 'Our locally bottled natural alkaline water matches top world-class quality.',
        audioText: 'Our locally bottled natural alkaline water matches top world-class quality.',
        phonetics: '/aʊər ˈloʊkəli ˈbɒtld ˈnætʃrəl ˈælkəlaɪn ˈwɔːtər ˈmætʃɪz tɒp wɜːrld-klɑːs ˈkwɒləti/',
        wordPool: ['Our', 'locally', 'bottled', 'natural', 'alkaline', 'water', 'matches', 'top', 'world-class', 'quality.', 'cheap'],
        explanation: 'Chất lượng khoáng kiềm Đảnh Thạnh tương đương các mỏ khoáng huyền thoại Kuldur (Liên Xô), Vichy (Pháp) nhưng chi phí logistics tối ưu hơn nhiều.',
        whyWrong: 'Giúp khách sạn tiết kiệm 40% chi phí nhập khẩu mà vẫn phục vụ nước uống đạt chuẩn 5 sao.',
        crucialNote: 'Xu hướng "Local Eco-Luxury" đang rất được các tập đoàn khách sạn quốc tế hoan nghênh.',
        memoryHook: 'Matches world-class quality = Đẳng cấp chất lượng tương đương thế giới.'
      },
      {
        id: 'u25-e3',
        type: 'speak',
        promptEn: 'Deliver the sommelier water pairing pitch for high-end dining experiences:',
        promptVi: 'Luyện nói câu giới thiệu nghệ thuật kết hợp nước khoáng với món ăn cao cấp (Water Sommelier):',
        englishSentence: 'Our sparkling mineral water cleanses the palate and pairs flawlessly with fine wine.',
        audioText: 'Our sparkling mineral water cleanses the palate and pairs flawlessly with fine wine.',
        phonetics: '/aʊər ˈspɑːrklɪŋ ˈmɪnərəl ˈwɔːtər ˈklɛnzɪz ðə ˈpælət ænd pɛərz ˈflɔːləsli wɪð faɪn waɪn/',
        explanation: '"Cleanses the palate" = Làm sạch vị giác giữa các món ăn. Giúp thực khách cảm nhận trọn vẹn hương vị tinh tế của rượu vang và ẩm thực đỉnh cao.',
        whyWrong: 'Nước khoáng có ga Vikoda được các chuyên gia ẩm thực hàng đầu lựa chọn cho thực đơn fine-dining.',
        crucialNote: 'Từ "Palate" (/ˈpælət/) chỉ vòm họng, vị giác cảm nhận món ăn.',
        memoryHook: 'Cleanses the palate = Thanh tẩy và đánh thức vị giác.'
      },
      {
        id: 'u25-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the F&B Director expressing their main requirement for banquet water supply:',
        promptVi: 'Nghe Giám đốc Ẩm thực nêu yêu cầu tiên quyết khi chọn nhà cung cấp nước uống cho phòng tiệc:',
        englishSentence: 'We require a punctual delivery schedule and consistent premium glass bottle design.',
        audioText: 'We require a punctual delivery schedule and consistent premium glass bottle design.',
        options: [
          'Yêu cầu lịch giao hàng đúng giờ chuẩn xác và thiết kế chai thủy tinh cao cấp đồng bộ',
          'Chỉ cần nước giá rẻ nhất không cần chai đẹp',
          'Không cần giao hàng đúng hẹn'
        ],
        correctIndex: 0,
        explanation: 'Hai yêu cầu khắt khe của khách sạn 5 sao: Giao hàng đúng giờ cho các sự kiện tiệc lớn và mẫu mã chai thủy tinh sang trọng, không trầy xước.',
        whyWrong: 'Vikoda cam kết quy trình kiểm định vỏ chai thủy tinh nghiêm ngặt trước khi xuất xưởng.',
        crucialNote: '"Punctual delivery" = Giao hàng đúng giờ chuẩn xác.',
        memoryHook: 'Punctual & Consistent = Đúng giờ và chất lượng đồng bộ.'
      }
    ]
  },
  {
    id: 'unit-26',
    unitNumber: 26,
    title: 'Đòn Bẩy ESG Chai Thủy Tinh (Zero-Plastic)',
    subtitle: 'Nghệ thuật chốt hợp đồng nhờ chiến lược phát triển xanh bền vững',
    level: 'B2',
    icon: '🌱',
    color: 'cyan',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u26-e1',
        type: 'choice',
        promptEn: 'When presenting to a resort board, what is the most powerful ESG argument for Vikoda glass bottles?',
        promptVi: 'Khi trình bày với Hội đồng Quản trị khu nghỉ dưỡng, luận điểm ESG nào mang tính quyết định nhất?',
        englishSentence: 'Switching to Vikoda glass bottles eliminates hundreds of thousands of single-use plastic bottles annually.',
        audioText: 'Switching to Vikoda glass bottles eliminates hundreds of thousands of single-use plastic bottles annually.',
        options: [
          'Switching to Vikoda glass bottles eliminates hundreds of thousands of single-use plastic bottles annually.',
          'Vikoda is just a local water brand from Vietnam.',
          'We give you free keychains if you sign today.'
        ],
        correctIndex: 0,
        explanation: 'Con số cụ thể: Cắt giảm hàng trăm ngàn chai nhựa dùng một lần mỗi năm là bằng chứng ESG không thể chối từ cho Báo cáo Phát triển Bền vững (Annual ESG Report) của tập đoàn.',
        whyWrong: 'Đánh trúng cam kết Net-Zero và loại bỏ rác thải nhựa của các thương hiệu nghỉ dưỡng toàn cầu.',
        crucialNote: 'Vikoda hỗ trợ thu gom vỏ chai đổi mới theo vòng tròn tuần hoàn (Circular Economy).',
        memoryHook: 'Eliminates plastic = Cắt giảm rác thải nhựa thực chất.'
      },
      {
        id: 'u26-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence emphasizing the carbon footprint reduction of local sourcing:',
        promptVi: 'Sắp xếp câu: "Nguồn cung nội địa giúp giảm thiểu đáng kể dấu chân carbon từ vận tải đường biển quốc tế."',
        englishSentence: 'Local sourcing drastically reduces shipping carbon footprint compared to European imports.',
        audioText: 'Local sourcing drastically reduces shipping carbon footprint compared to European imports.',
        phonetics: '/ˈloʊkl ˈsɔːrsɪŋ ˈdræstɪkli rɪˈdjuːsɪz ˈʃɪpɪŋ ˈkɑːrbən ˈfʊtprɪnt kəmˈpɛərd tuː ˌjʊərəˈpiːən ˈɪmpɔːrts/',
        wordPool: ['Local', 'sourcing', 'drastically', 'reduces', 'shipping', 'carbon', 'footprint', 'compared', 'to', 'European', 'imports.'],
        explanation: 'Nước khoáng nhập khẩu từ Pháp hay Ý phải vận chuyển bằng tàu biển hàng chục ngàn cây số, tạo ra lượng khí thải CO2 khổng lồ; Vikoda tại Khánh Hòa giải quyết triệt để bài toán này.',
        whyWrong: '"Local sourcing" = Ưu tiên nguồn cung ứng nội địa xanh.',
        crucialNote: '"Carbon footprint" = Dấu chân carbon / lượng khí thải carbon.',
        memoryHook: 'Reduces carbon footprint = Giảm thiểu phát thải carbon.'
      },
      {
        id: 'u26-e3',
        type: 'speak',
        promptEn: 'Deliver the corporate partnership closing pledge on eco-luxury values:',
        promptVi: 'Luyện nói câu cam kết đồng hành cùng đối tác trên hành trình du lịch sinh thái sang trọng:',
        englishSentence: 'Together, we champion sustainable eco-luxury while safeguarding the pristine environment.',
        audioText: 'Together, we champion sustainable eco-luxury while safeguarding the pristine environment.',
        phonetics: '/təˈɡɛðər, wiː ˈtʃæmpiən səˈsteɪnəbl ˈiːkoʊ-ˈlʌkʃəri waɪl ˈseɪfɡɑːrdɪŋ ðə ˈprɪstiːn ɪnˈvaɪrənmənt/',
        explanation: '"Eco-luxury" = Đẳng cấp sang trọng gắn liền với trách nhiệm sinh thái bảo vệ môi trường.',
        whyWrong: 'Khách du lịch quốc tế sẵn sàng chi trả cao hơn cho những khách sạn có cam kết bảo vệ môi trường thực chất.',
        crucialNote: 'Từ "Champion" ở đây là động cơ tiên phong, dẫn đầu xu thế.',
        memoryHook: 'Sustainable eco-luxury = Sang trọng gắn liền sinh thái.'
      },
      {
        id: 'u26-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the sustainability director acknowledging Vikoda’s returnable crate cycle:',
        promptVi: 'Nghe Giám đốc Phát triển Bền vững đánh giá về mô hình két nhựa thu hồi vỏ chai:',
        englishSentence: 'Your returnable crate system represents a textbook model of the circular economy.',
        audioText: 'Your returnable crate system represents a textbook model of the circular economy.',
        options: [
          'Hệ thống két thu hồi vỏ chai là mô hình kiểu mẫu của nền kinh tế tuần hoàn (Circular economy)',
          'Hệ thống thu hồi chai gây lãng phí tiền bạc',
          'Khách sạn từ chối trả lại vỏ chai'
        ],
        correctIndex: 0,
        explanation: '"Circular economy" = Nền kinh tế tuần hoàn: Tái sử dụng vỏ chai thủy tinh, không xả rác ra bãi chôn lấp.',
        whyWrong: 'Lời khen ngợi cao nhất từ chuyên gia môi trường đối với quy trình logistics xanh của Vikoda.',
        crucialNote: '"Returnable crate system" = Hệ thống két vỏ chai thu hồi 2 chiều.',
        memoryHook: 'Circular economy = Kinh tế tuần hoàn không rác thải.'
      }
    ]
  },
  {
    id: 'unit-27',
    unitNumber: 27,
    title: 'Xử Lý Phản Đối Về Giá & Đối Thủ Cạnh Tranh',
    subtitle: 'Nghệ thuật đối thoại khi khách so sánh với Lavie, Aquafina, Evian',
    level: 'B2',
    icon: '⚡',
    color: 'blue',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u27-e1',
        type: 'choice',
        promptEn: 'How should you professionally address an F&B Director comparing Vikoda to Evian?',
        promptVi: 'Phản hồi F&B Director khách sạn 5 sao so sánh giá Vikoda với Evian như thế nào cho đẳng cấp?',
        englishSentence: 'Evian has neutral pH 7.2, whereas Vikoda delivers rare natural pH 9.0 and 100% localized glass sustainability.',
        audioText: 'Evian has neutral pH seven point two, whereas Vikoda delivers rare natural pH nine point oh and one hundred percent localized glass sustainability.',
        options: [
          'Evian has neutral pH 7.2, whereas Vikoda delivers rare natural pH 9.0 and 100% localized glass sustainability.',
          'Tell them Evian is bad quality and French water is fake.',
          'Immediately cut the price by 70% to win the order.'
        ],
        correctIndex: 0,
        explanation: 'Định vị giá trị: Evian là khoáng trung tính pH 7.2, trong khi Vikoda là kiềm tự nhiên pH 9.0 hiếm có kèm cam kết chai thủy tinh ESG xanh bền vững với mức giá tối ưu hơn.',
        whyWrong: 'Không bao giờ chê bai đối thủ; chỉ tập trung nêu bật lợi thế vượt trội độc bản của Vikoda.',
        crucialNote: 'Khách hàng mua giá trị và câu chuyện thương hiệu chứ không chỉ mua một chai nước đơn thuần.',
        memoryHook: 'Evian pH 7.2 vs Vikoda pH 9.0 = Lợi thế kiềm tự nhiên độc bản.'
      },
      {
        id: 'u27-e2',
        type: 'word_order',
        promptEn: 'Apply the classic Feel - Felt - Found empathy formula when a client hesitates on price:',
        promptVi: 'Sắp xếp câu công thức đảo ngược thế cờ kinh điển "Feel - Felt - Found":',
        englishSentence: 'I understand how you feel, other partners felt the same, until they discovered our value.',
        audioText: 'I understand how you feel, other partners felt the same, until they discovered our value.',
        phonetics: '/aɪ ˌʌndərˈstænd haʊ juː fiːl, ˈʌðər ˈpɑːrtnərz fɛlt ðə seɪm, ənˈtɪl ðeɪ dɪsˈkʌvərd aʊər ˈvæljuː/',
        wordPool: ['I', 'understand', 'how', 'you', 'feel,', 'other', 'partners', 'felt', 'the', 'same,', 'until', 'they', 'discovered', 'our', 'value.'],
        explanation: 'Công thức hòa giải bất đồng kinh điển nhất thế giới: Đồng cảm (Feel) -> Bình thường hóa (Felt) -> Dẫn chứng bước ngoặt thành công (Found).',
        whyWrong: 'Xóa tan hoàn toàn thế đối đầu, kéo khách hàng về chung một chiến tuyến.',
        crucialNote: 'Kèm theo dẫn chứng chuỗi khách sạn Marriott hoặc siêu thị Big C đã bứt phá doanh số ra sao.',
        memoryHook: 'Feel - Felt - Found = Nghệ thuật đồng cảm đỉnh cao của bậc thầy đàm phán.'
      },
      {
        id: 'u27-e3',
        type: 'speak',
        promptEn: 'Deliver the argument distinguishing natural mineral water from cheap purified water:',
        promptVi: 'Luyện nói câu phân biệt rạch ròi giữa nước khoáng tự nhiên và nước lọc tinh khiết giá rẻ:',
        englishSentence: 'Purified water is filtered tap water, while Vikoda is nutrient-rich natural mineral water from 220 meters depth.',
        audioText: 'Purified water is filtered tap water, while Vikoda is nutrient-rich natural mineral water from two hundred twenty meters depth.',
        phonetics: '/ˈpjʊərɪfaɪd ˈwɔːtər ɪz ˈfɪltərd tæp ˈwɔːtər, waɪl vɪˈkoʊdə ɪz ˈnjuːtriənt-rɪtʃ ˈnætʃrəl ˈmɪnərəl ˈwɔːtər frəm tuː ˈhʌndrəd ˈtwɛnti ˈmiːtərz dɛpθ/',
        explanation: 'Đánh trúng sự thật: Nước lọc tinh khiết chỉ là nước máy lọc qua màng nhân tạo, còn Vikoda là mỏ khoáng quý kết tinh triệu năm.',
        whyWrong: 'Giúp khách hàng hiểu vì sao nước khoáng thiên nhiên luôn có giá trị vượt trội.',
        crucialNote: '"Nutrient-rich" = Giàu vi khoáng chất bổ dưỡng.',
        memoryHook: 'Nutrient-rich = Giàu vi khoáng tự nhiên.'
      },
      {
        id: 'u27-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the buyer acknowledging the health value proposition over price concerns:',
        promptVi: 'Nghe khách hàng đối tác xác nhận giá trị sức khỏe quan trọng hơn băn khoăn về giá:',
        englishSentence: 'The health benefits of natural pH 9.0 clearly justify the premium investment.',
        audioText: 'The health benefits of natural pH nine point oh clearly justify the premium investment.',
        options: [
          'Lợi ích sức khỏe của độ kiềm pH 9.0 hoàn toàn xứng đáng với mức giá cao cấp (Justify the investment)',
          'Nước quá đắt và không có giá trị gì',
          'Khách hàng quyết định không mua'
        ],
        correctIndex: 0,
        explanation: '"Justify the investment" = Hoàn toàn xứng đáng với chi phí đầu tư.',
        whyWrong: 'Tín hiệu mua hàng tích cực sau khi bạn đã phân tích trọn vẹn giá trị khoa học.',
        crucialNote: 'Sẵn sàng chuyển sang bước chốt đơn hàng chính thức.',
        memoryHook: 'Justify the investment = Xứng đáng từng đồng đầu tư.'
      }
    ]
  },
  {
    id: 'unit-28',
    unitNumber: 28,
    title: 'Quy Trình 8 Bước Bán Hàng & Tiêu Chuẩn AVA',
    subtitle: 'Nắm vững Availability - Visibility - Affordability tại từng điểm bán',
    level: 'B2',
    icon: '📊',
    color: 'purple',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u28-e1',
        type: 'choice',
        promptEn: 'In the 8-step sales process, what is the core meaning of "AVA" in merchandising?',
        promptVi: 'Trong quy trình bán hàng, nguyên tắc trưng bày "AVA" viết tắt của 3 từ nào?',
        englishSentence: 'Availability - Visibility - Affordability.',
        audioText: 'Availability - Visibility - Affordability.',
        options: [
          'Availability - Visibility - Affordability.',
          'Action - Vision - Attitude.',
          'Attention - Value - Agreement.'
        ],
        correctIndex: 0,
        explanation: 'AVA là tiêu chuẩn vàng trưng bày điểm bán: Hàng luôn sẵn có (Availability), Dễ thấy bắt mắt ngang tầm mắt người mua (Visibility), và Đúng giá quy định niêm yết (Affordability).',
        whyWrong: 'Thiếu bất kỳ chữ nào trong AVA thì điểm bán đều không thể bùng nổ doanh số.',
        crucialNote: 'Chiến binh sales Vikoda luôn kiểm tra chuẩn AVA đầu tiên khi bước vào cửa hàng.',
        memoryHook: 'AVA = Hàng sẵn có - Bắt mắt - Đúng giá.'
      },
      {
        id: 'u28-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence emphasizing eye-level shelf placement for maximum sales:',
        promptVi: 'Sắp xếp câu: "Trưng bày sản phẩm ngang tầm mắt giúp tăng doanh số bán hàng lên đến 40%."',
        englishSentence: 'Eye-level shelf placement increases customer purchase rates by forty percent.',
        audioText: 'Eye-level shelf placement increases customer purchase rates by forty percent.',
        phonetics: '/aɪ-ˈlɛvl ʃɛlf ˈpleɪsmənt ɪnˈkriːsɪz ˈkʌstəmər ˈpɜːrtʃəs reɪts baɪ ˈfɔːrti pərˈsɛnt/',
        wordPool: ['Eye-level', 'shelf', 'placement', 'increases', 'customer', 'purchase', 'rates', 'by', 'forty', 'percent.'],
        explanation: 'Vị trí kệ hàng ngang tầm mắt (Eye-level) được gọi là "Golden Shelf" (Kệ vàng) trong ngành bán lẻ FMCG.',
        whyWrong: 'Để hàng ở góc khuất hoặc sát sàn nhà làm giảm 70% cơ hội tiếp cận người mua.',
        crucialNote: '"Eye-level" = Ngang tầm mắt.',
        memoryHook: 'Golden shelf = Kệ vàng ngang tầm mắt.'
      },
      {
        id: 'u28-e3',
        type: 'speak',
        promptEn: 'State the importance of POSM display (Point of Sale Materials) at retail outlets:',
        promptVi: 'Luyện nói câu nhấn mạnh việc lắp đặt vật phẩm tiếp thị POSM bắt mắt tại điểm bán:',
        englishSentence: 'We must install eye-catching POSM banners and shelf wobblers at every outlet.',
        audioText: 'We must install eye-catching POSM banners and shelf wobblers at every outlet.',
        phonetics: '/wiː mʌst ɪnˈstɔːl aɪ-ˈkætʃɪŋ piː-oʊ-ɛs-ɛm ˈbænərz ænd ʃɛlf ˈwɒblərz æt ˈɛvri ˈaʊtlɛt/',
        explanation: 'POSM (Băng rôn, Wobbler rung rinh, Sticker tủ mát) giúp sản phẩm Vikoda nổi bật giữa hàng trăm đối thủ.',
        whyWrong: 'Điểm bán không có POSM như người chiến sĩ ra trận không mang cờ.',
        crucialNote: '"Eye-catching" = Thu hút ánh nhìn.',
        memoryHook: 'POSM = Vật phẩm quảng cáo tại điểm bán.'
      },
      {
        id: 'u28-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the sales trainer defining the objective of Step 8 in the sales cycle:',
        promptVi: 'Nghe chuyên gia đào tạo giải thích về mục tiêu của Bước 8 (Chăm sóc sau bán hàng):',
        englishSentence: 'Step eight focuses on post-sales customer care and building long-term loyalty.',
        audioText: 'Step eight focuses on post-sales customer care and building long-term loyalty.',
        options: [
          'Tập trung vào chăm sóc khách hàng sau bán và xây dựng lòng trung thành dài hạn',
          'Bỏ rơi khách hàng ngay sau khi thu tiền',
          'Không bao giờ quay lại điểm bán cũ'
        ],
        correctIndex: 0,
        explanation: 'Bán được hàng mới chỉ là 50% chặng đường; chăm sóc tận tâm sau bán để khách tái đặt hàng liên tục mới là bí quyết của người bán hàng vĩ đại.',
        whyWrong: '"Post-sales care" = Chăm sóc hậu mãi.',
        crucialNote: '"Long-term loyalty" = Lòng trung thành bền vững.',
        memoryHook: 'Post-sales care = Chăm sóc sau bán chu đáo.'
      }
    ]
  },
  {
    id: 'unit-29',
    unitNumber: 29,
    title: 'Đàm Phán Chiết Khấu Sản Lượng (Volume Rebate)',
    subtitle: 'Nghệ thuật trao đổi nhượng bộ: Muốn giá tốt phải cam kết sản lượng lớn',
    level: 'B2',
    icon: '🤝',
    color: 'amber',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u29-e1',
        type: 'choice',
        promptEn: 'What is the golden rule of concession trading in corporate price negotiations?',
        promptVi: 'Quy tắc vàng khi trao đổi nhượng bộ trong đàm phán giá thương mại là gì?',
        englishSentence: 'Never give a price discount without demanding a larger volume commitment in return.',
        audioText: 'Never give a price discount without demanding a larger volume commitment in return.',
        options: [
          'Never give a price discount without demanding a larger volume commitment in return.',
          'Immediately cut your price whenever the buyer asks.',
          'Give everything away for free without conditions.'
        ],
        correctIndex: 0,
        explanation: '"Concession trading" = Trao đổi nhượng bộ có điều kiện. Nếu giảm 5% giá, khách hàng bắt buộc phải tăng số lượng đơn hàng lên 30%.',
        whyWrong: 'Giảm giá vô điều kiện sẽ biến sản phẩm thành hàng rẻ tiền và triệt tiêu biên lợi nhuận của công ty.',
        crucialNote: 'Mẫu câu thần chú: "If you can increase your order to 500 cartons, I can gladly offer a 5% volume rebate".',
        memoryHook: 'Trade concessions = Muốn giảm giá phải tăng sản lượng.'
      },
      {
        id: 'u29-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence proposing a tiered annual rebate structure for hotel chains:',
        promptVi: 'Sắp xếp câu: "Chúng tôi đề xuất chính sách chiết khấu sản lượng lũy tiến theo doanh số năm."',
        englishSentence: 'We propose a tiered volume rebate based on your annual targets.',
        audioText: 'We propose a tiered volume rebate based on your annual targets.',
        phonetics: '/wiː prəˈpoʊz ə tɪərd ˈvɒljuːm ˈriːbeɪt beɪst ɒn jʊər ˈænjuəl ˈtɑːrɡɪts/',
        wordPool: ['We', 'propose', 'a', 'tiered', 'volume', 'rebate', 'based', 'on', 'your', 'annual', 'targets.'],
        explanation: '"Tiered volume rebate" = Chiết khấu theo bậc thang doanh số. Càng bán được nhiều, đại lý càng được hoàn lại tỷ lệ hoa hồng cao hơn.',
        whyWrong: 'Tạo động lực mạnh mẽ để đại lý ưu tiên đẩy mạnh bán hàng cho Vikoda thay vì các đối thủ.',
        crucialNote: '"Tiered" nghĩa là theo bậc thang lũy tiến.',
        memoryHook: 'Tiered rebate = Chiết khấu bậc thang theo sản lượng.'
      },
      {
        id: 'u29-e3',
        type: 'speak',
        promptEn: 'Practice setting the boundary for contract exclusivity terms:',
        promptVi: 'Luyện nói câu quy định điều kiện để được cấp quyền phân phối độc quyền:',
        englishSentence: 'Exclusivity is granted only subject to achieving quarterly sales quotas.',
        audioText: 'Exclusivity is granted only subject to achieving quarterly sales quotas.',
        phonetics: '/ˌɛkskluːˈsɪvəti ɪz ˈɡrɑːntɪd ˈoʊnli ˈsʌbdʒɪkt tuː əˈtʃiːvɪŋ ˈkwɔːrtərli seɪlz ˈkwoʊtəz/',
        explanation: 'Quyền độc quyền khu vực chỉ có giá trị khi đại lý duy trì đạt hạn mức doanh số cam kết mỗi quý.',
        whyWrong: 'Bảo vệ công ty khỏi trường hợp đại lý "ôm quyền độc quyền" nhưng không chịu đẩy hàng.',
        crucialNote: '"Sales quotas" = Chỉ tiêu bán hàng bắt buộc.',
        memoryHook: 'Subject to quotas = Ràng buộc với chỉ tiêu doanh số.'
      },
      {
        id: 'u29-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the procurement manager agreeing to the volume threshold for discount:',
        promptVi: 'Nghe trưởng phòng mua hàng đồng ý nâng sản lượng để nhận mức chiết khấu tốt hơn:',
        englishSentence: 'We agree to increase our monthly order to five hundred crates for the eight percent rebate.',
        audioText: 'We agree to increase our monthly order to five hundred crates for the eight percent rebate.',
        options: [
          'Đồng ý tăng đơn hàng lên 500 két mỗi tháng để hưởng mức chiết khấu 8% (Five hundred crates)',
          'Từ chối đặt hàng',
          'Chỉ mua 5 chai nước'
        ],
        correctIndex: 0,
        explanation: 'Một thỏa thuận Win-Win mẫu mực: Đối tác có giá tốt hơn, công ty tối ưu hóa sản lượng tiêu thụ lớn.',
        whyWrong: 'Minh chứng cho nghệ thuật đàm phán nhượng bộ thành công của chiến binh B2B Vikoda.',
        crucialNote: '"Volume threshold" = Ngưỡng sản lượng tối thiểu.',
        memoryHook: '500 crates for 8% = Đạt 500 két để nhận chiết khấu 8%.'
      }
    ]
  },
  {
    id: 'unit-30',
    unitNumber: 30,
    title: 'Điều Khoản Công Nợ (Credit Terms) & Đặt Cọc',
    subtitle: 'Quản trị dòng tiền, thỏa thuận tạm ứng 30% và thời hạn thanh toán 30 ngày',
    level: 'B2',
    icon: '💳',
    color: 'emerald',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u30-e1',
        type: 'word_order',
        promptEn: 'Arrange the sentence stipulating a 30% deposit upon contract signing:',
        promptVi: 'Sắp xếp câu: "Khoản tạm ứng 30% phải được thanh toán ngay sau khi ký hợp đồng."',
        englishSentence: 'A thirty percent deposit is required upon signing the contract.',
        audioText: 'A thirty percent deposit is required upon signing the contract.',
        phonetics: '/ə ˈθɜːrti pərˈsɛnt dɪˈpɒzɪt ɪz rɪˈkwaɪərd əˈpɒn ˈsaɪnɪŋ ðə ˈkɒntrækt/',
        wordPool: ['A', 'thirty', 'percent', 'deposit', 'is', 'required', 'upon', 'signing', 'the', 'contract.', 'free'],
        explanation: '"Deposit" = Tiền đặt cọc / tạm ứng hợp đồng. Bảo vệ dòng tiền và cam kết sản xuất của nhà máy.',
        whyWrong: 'Hạn chế tối đa rủi ro hủy đơn đột ngột đối với các lô hàng đóng chai số lượng lớn.',
        crucialNote: '"Upon signing" = Ngay sau thời điểm ký kết.',
        memoryHook: '30% deposit = Tạm ứng 30% đặt cọc.'
      },
      {
        id: 'u30-e2',
        type: 'choice',
        promptEn: 'What is the standard commercial credit term phrase for 30-day payment after invoice date?',
        promptVi: 'Cụm từ tiếng Anh thương mại chuẩn mực cho điều khoản thanh toán trong vòng 30 ngày kể từ ngày xuất hóa đơn:',
        englishSentence: 'Payment terms are Net 30 days from the invoice date.',
        audioText: 'Payment terms are Net thirty days from the invoice date.',
        options: [
          'Payment terms are Net 30 days from the invoice date.',
          'Pay whenever you feel like sending money.',
          'No payment is required for one hundred years.'
        ],
        correctIndex: 0,
        explanation: '"Net 30 days" = Thuật ngữ tài chính toàn cầu chỉ thời hạn thanh toán toàn bộ công nợ trong vòng 30 ngày.',
        whyWrong: 'Nếu quá 30 ngày, công nợ sẽ bị tính lãi suất phát sinh theo điều khoản hợp đồng.',
        crucialNote: 'Áp dụng cho các khách sạn và đại lý có lịch sử tín dụng tốt và doanh số ổn định.',
        memoryHook: 'Net 30 days = Hạn mức công nợ 30 ngày.'
      },
      {
        id: 'u30-e3',
        type: 'speak',
        promptEn: 'Practice addressing overdue invoices diplomatically yet firmly:',
        promptVi: 'Luyện nói câu nhắc nhở thanh toán hóa đơn quá hạn một cách nhã nhặn nhưng kiên quyết:',
        englishSentence: 'We kindly remind you that invoice number 1024 is currently overdue.',
        audioText: 'We kindly remind you that invoice number one zero two four is currently overdue.',
        phonetics: '/wiː ˈkaɪndli rɪˈmaɪnd juː ðæt ˈɪnvɔɪs ˈnʌmbər wʌn ˈzɪəroʊ tuː fɔːr ɪz ˈkɜːrəntli ˌoʊvərˈdjuː/',
        explanation: '"Overdue" = Đã quá hạn thanh toán. "Kindly remind" = Nhắc nhở thiện chí trước khi áp dụng chế tài ngưng giao hàng.',
        whyWrong: 'Duy trì sự chuyên nghiệp, không to tiếng nhưng không nhân nhượng về kỷ luật tài chính.',
        crucialNote: 'Kèm theo bản scan hóa đơn để đối tác kiểm tra lại với phòng kế toán của họ.',
        memoryHook: 'Invoice overdue = Hóa đơn đã quá hạn.'
      },
      {
        id: 'u30-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the financial controller clarifying the bank transfer fee responsibility:',
        promptVi: 'Nghe giám đốc tài chính làm rõ bên chịu phí chuyển tiền ngân hàng:',
        englishSentence: 'All banking transfer fees must be borne by the purchasing party.',
        audioText: 'All banking transfer fees must be borne by the purchasing party.',
        options: [
          'Mọi chi phí chuyển tiền ngân hàng do bên mua chi trả (Borne by purchasing party)',
          'Bên bán chịu toàn bộ phí chuyển tiền',
          'Ngân hàng miễn phí chuyển tiền'
        ],
        correctIndex: 0,
        explanation: '"Borne by the purchasing party" = Do bên mua gánh vác chi trả.',
        whyWrong: 'Quy định rõ ràng để số tiền thực nhận vào tài khoản công ty không bị hụt do phí chuyển tiền.',
        crucialNote: '"Borne" là dạng quá khứ phân từ của động từ "bear" (chịu trách nhiệm chi trả).',
        memoryHook: 'Borne by buyer = Bên mua chịu phí giao dịch.'
      }
    ]
  },
  {
    id: 'unit-31',
    unitNumber: 31,
    title: 'Xử Lý Khiếu Nại & Đổi Trả Hàng (Customer Care)',
    subtitle: 'Nghệ thuật xoa dịu khách hàng khó tính, đổi trả hàng vỡ và khôi phục niềm tin',
    level: 'B2',
    icon: '🛡️',
    color: 'cyan',
    xpReward: 50,
    gemReward: 15,
    exercises: [
      {
        id: 'u31-e1',
        type: 'choice',
        promptEn: 'When an F&B manager angrily reports that three glass bottles arrived cracked, what is your first immediate response?',
        promptVi: 'Khi đối tác giận dữ báo có 3 chai thủy tinh bị rạn nứt khi giao hàng, phản hồi đầu tiên chuẩn mực của bạn là gì?',
        englishSentence: 'We sincerely apologize for the inconvenience and will replace them immediately today.',
        audioText: 'We sincerely apologize for the inconvenience and will replace them immediately today.',
        options: [
          'We sincerely apologize for the inconvenience and will replace them immediately today.',
          'Not our fault, you broke them yourself.',
          'Hang up the phone and ignore their call.'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc phục hồi dịch vụ (Service Recovery): Xin lỗi chân thành về sự bất tiện $\to$ Đổi trả bổ sung ngay lập tức trong ngày mà không tranh cãi.',
        whyWrong: '3 chai nước vỡ chỉ đáng vài chục ngàn, nhưng giữ được mối quan hệ hợp đồng trăm triệu với khách sạn.',
        crucialNote: 'Cử nhân viên giao hàng mang thùng mới tới đổi và thu hồi vỏ vỡ kiểm tra nguyên nhân va đập.',
        memoryHook: 'Apologize & Replace = Xin lỗi và đổi hàng ngay.'
      },
      {
        id: 'u31-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence promising a full root-cause investigation with warehouse logistics:',
        promptVi: 'Sắp xếp câu: "Chúng tôi sẽ điều tra kỹ lưỡng quy trình vận chuyển để ngăn ngừa sự cố tái diễn."',
        englishSentence: 'We will investigate the transport process to prevent any recurrence.',
        audioText: 'We will investigate the transport process to prevent any recurrence.',
        phonetics: '/wiː wɪl ɪnˈvɛstɪɡeɪt ðə ˈtrænspɔːrt ˈprɒsɛs tuː prɪˈvɛnt ˈɛni rɪˈkɜːrəns/',
        wordPool: ['We', 'will', 'investigate', 'the', 'transport', 'process', 'to', 'prevent', 'any', 'recurrence.'],
        explanation: '"Investigate to prevent recurrence" = Điều tra nguyên nhân gốc rễ để triệt để ngăn chặn tái phạm.',
        whyWrong: 'Thể hiện tinh thần cầu thị, chuyên nghiệp và trách nhiệm cao của tập đoàn Vikoda.',
        crucialNote: '"Recurrence" (/rɪˈkɜːrəns/) = Sự tái diễn.',
        memoryHook: 'Prevent recurrence = Ngăn ngừa sự cố lặp lại.'
      },
      {
        id: 'u31-e3',
        type: 'speak',
        promptEn: 'Deliver the reassessment closing to restore total customer confidence:',
        promptVi: 'Luyện nói câu cam kết chất lượng dịch vụ để lấy lại 100% niềm tin của khách hàng:',
        englishSentence: 'Your complete satisfaction is our highest priority, and we value your partnership.',
        audioText: 'Your complete satisfaction is our highest priority, and we value your partnership.',
        phonetics: '/jʊər kəmˈpliːt ˌsætɪsˈfækʃn ɪz aʊər ˈhaɪɪst praɪˈɒrəti, ænd wiː ˈvæljuː jʊər ˈpɑːrtnərʃɪp/',
        explanation: '"Your satisfaction is our highest priority" = Sự hài lòng của quý khách là ưu tiên số một của chúng tôi.',
        whyWrong: 'Khách hàng gặp sự cố nhưng được xử lý tận tâm sẽ trở thành khách hàng trung thành nhất.',
        crucialNote: 'Giọng điệu ấm áp, chân thành và tôn trọng.',
        memoryHook: 'Highest priority = Ưu tiên số một.'
      },
      {
        id: 'u31-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the client’s relieved response after receiving replacement bottles:',
        promptVi: 'Nghe phản hồi hài lòng của khách hàng sau khi nhận hàng đổi mới nhanh chóng:',
        englishSentence: 'Thank you for handling this so promptly. Your professional service is truly exceptional.',
        audioText: 'Thank you for handling this so promptly. Your professional service is truly exceptional.',
        options: [
          'Cảm ơn bạn đã xử lý sự cố nhanh chóng, dịch vụ chuyên nghiệp của các bạn thật xuất sắc',
          'Tôi sẽ hủy hợp đồng ngay lập tức',
          'Tôi không bao giờ nhận hàng đổi mới'
        ],
        correctIndex: 0,
        explanation: '"Handling promptly" = Xử lý nhanh nhẹn, kịp thời. "Exceptional service" = Dịch vụ vượt trội ngoài mong đợi.',
        whyWrong: 'Một cuộc khủng hoảng nhỏ đã được chuyển hóa thành cơ hội chứng minh dịch vụ khách hàng 5 sao.',
        crucialNote: '"Promptly" nghĩa là ngay lập tức, không chậm trễ.',
        memoryHook: 'Exceptional service = Dịch vụ xuất sắc vượt bậc.'
      }
    ]
  },
  {
    id: 'unit-32',
    unitNumber: 32,
    title: 'Nghệ Thuật Chốt Đơn 6 Chữ Vàng V-I-K-O-D-A',
    subtitle: 'Nắm vững công thức Value - Inspire - Knock out - Offer - Deal - Action',
    level: 'B2',
    icon: '🏆',
    color: 'emerald',
    xpReward: 60,
    gemReward: 20,
    exercises: [
      {
        id: 'u32-e1',
        type: 'choice',
        promptEn: 'In Vikoda’s 6-letter closing technique V-I-K-O-D-A, what does "A" stand for?',
        promptVi: 'Trong nghệ thuật chốt hợp đồng V-I-K-O-D-A, chữ "A" cuối cùng là viết tắt của gì?',
        englishSentence: 'Action - Closing the official order with exact quantity and commitment.',
        audioText: 'Action - Closing the official order with exact quantity and commitment.',
        options: [
          'Action - Closing the official order with exact quantity and commitment.',
          'Apology - Saying sorry to the client.',
          'Argument - Debating with the customer.'
        ],
        correctIndex: 0,
        explanation: 'Chữ A trong V-I-K-O-D-A là ACTION: Hành động dứt khoát, chốt đơn hàng cụ thể về số lượng thùng/két và thời gian giao hàng.',
        whyWrong: 'Bán hàng mà không có Action thì thương vụ mãi mãi chỉ dừng lại ở mức thảo luận suông.',
        crucialNote: 'Rút bút ký hợp đồng hoặc xác nhận đơn hàng trên ứng dụng DMS ngay tại điểm bán.',
        memoryHook: 'A = Action (Hành động chốt đơn quyết đoán).'
      },
      {
        id: 'u32-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence delivering the closing call-to-action proposal:',
        promptVi: 'Sắp xếp câu: "Tôi có thể chuẩn bị hợp đồng 500 thùng để giao vào thứ Hai tới không?"',
        englishSentence: 'Shall I prepare the contract for five hundred cartons to deliver next Monday?',
        audioText: 'Shall I prepare the contract for five hundred cartons to deliver next Monday?',
        phonetics: '/ʃæl aɪ prɪˈpɛər ðə ˈkɒntrækt fɔːr faɪv ˈhʌndrəd ˈkɑːrtənz tuː dɪˈlɪvər nɛkst ˈmʌndeɪ/',
        wordPool: ['Shall', 'I', 'prepare', 'the', 'contract', 'for', 'five', 'hundred', 'cartons', 'to', 'deliver', 'next', 'Monday?'],
        explanation: 'Kỹ thuật chốt giả định (Assumptive Close): Không hỏi "Anh có mua không?", mà hỏi thẳng số lượng và ngày giao hàng.',
        whyWrong: 'Giúp khách hàng dễ dàng đưa ra quyết định mua hàng thuận lợi.',
        crucialNote: 'Chúc mừng bạn! Bạn đã hoàn thành trọn vẹn Cấp độ 4: Bán Hàng B2B, HORECA & Đàm Phán Thương Mại!',
        memoryHook: 'Assumptive close = Chốt đơn giả định dứt khoát.'
      },
      {
        id: 'u32-e3',
        type: 'speak',
        promptEn: 'Deliver the inspiring V-I-K-O-D-A master closer statement with confidence:',
        promptVi: 'Luyện nói câu tuyên bố đẳng cấp của Bậc thầy Bán hàng Vikoda:',
        englishSentence: 'Vikoda delivers wellness, value, and sustainable prosperity to every partner.',
        audioText: 'Vikoda delivers wellness, value, and sustainable prosperity to every partner.',
        phonetics: '/vɪˈkoʊdə dɪˈlɪvərz ˈwɛlnəs, ˈvæljuː, ænd səˈsteɪnəbl prɒˈspɛrəti tuː ˈɛvri ˈpɑːrtnər/',
        explanation: '"Wellness, value, and sustainable prosperity" = Sức khỏe, giá trị và sự thịnh vượng bền vững cho mọi đối tác.',
        whyWrong: 'Định vị người bán hàng Vikoda không phải là người đi xin đơn, mà là chuyên gia mang giải pháp thịnh vượng đến cho khách hàng.',
        crucialNote: 'Sẵn sàng bước tiếp lên Cấp độ Đỉnh cao Cấp 5: Xuất Khẩu Toàn Cầu & Quản Trị C-Suite!',
        memoryHook: 'Prosperity to every partner = Mang thịnh vượng đến mọi đối tác.'
      },
      {
        id: 'u32-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the partner signing the contract and confirming the inaugural delivery date:',
        promptVi: 'Nghe đối tác đặt bút ký hợp đồng và ấn định ngày giao chuyến hàng đầu tiên:',
        englishSentence: 'The contract is signed. Please dispatch the first shipment this coming Friday.',
        audioText: 'The contract is signed. Please dispatch the first shipment this coming Friday.',
        options: [
          'Hợp đồng đã được ký kết, vui lòng giao lô hàng đầu tiên vào thứ Sáu tuần này (This coming Friday)',
          'Hợp đồng bị xé bỏ',
          'Hoãn ký hợp đồng vô thời hạn'
        ],
        correctIndex: 0,
        explanation: 'Thành quả ngọt ngào sau 8 bài học rèn luyện kỹ năng bán hàng thực chiến B2B đỉnh cao.',
        whyWrong: 'Ghi nhận doanh số trên hệ thống và chúc mừng cùng toàn đội ngũ.',
        crucialNote: '"Contract is signed" = Hợp đồng đã ký kết thành công.',
        memoryHook: 'Contract signed = Ký kết hợp đồng thành công rực rỡ.'
      }
    ]
  }
];
