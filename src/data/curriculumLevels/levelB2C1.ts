import { UnitLesson } from '../curriculumData';

export const LEVEL_B2C1_UNITS: UnitLesson[] = [
  {
    id: 'unit-21',
    unitNumber: 21,
    title: 'Xử Lý 4 Bước Phản Đối: B1 - B4',
    subtitle: 'Nắm vững B1-Xác định phản đối thật, B2-Thấu hiểu, B3-Xác minh, B4-Hóa giải',
    level: 'B2-C1',
    icon: '⚡',
    color: 'emerald',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u21-e1',
        type: 'choice',
        promptEn: 'According to Vikoda Training Manual page 50, how should professional sales warriors perceive customer objections?',
        promptVi: 'Theo trang 50 Cẩm nang bán hàng, các chiến binh Vikoda xem "sự phản đối" của khách hàng là gì?',
        englishSentence: 'Objection is a buying signal and an opportunity to reach mutual agreement.',
        audioText: 'Objection is a buying signal and an opportunity to reach mutual agreement.',
        options: [
          'Objection is a buying signal and an opportunity to reach mutual agreement.',
          'Objection is a personal insult and you should start arguing.',
          'Objection means you must immediately give up and leave.'
        ],
        correctIndex: 0,
        explanation: '"Phản đối là tín hiệu mua hàng! Tạo cho bạn một cơ hội đi đến thỏa thuận." Khách hàng phản đối chứng tỏ họ đang rất quan tâm và muốn có thêm thông tin.',
        whyWrong: 'Người bán hàng nghiệp dư sợ phản đối; chuyên gia bán hàng yêu thích phản đối vì đó là chìa khóa mở đơn.',
        crucialNote: 'Giữ yên lặng, lắng nghe thấu cảm, không ngắt lời và tuyệt đối không tranh cãi hơn thua với khách.',
        memoryHook: 'OBJECTION = Buying Signal (Tín hiệu khát khao mua hàng ẩn giấu).'
      },
      {
        id: 'u21-e2',
        type: 'word_order',
        promptEn: 'Sequence the 4 structured steps of handling customer objections (B1 to B4):',
        promptVi: 'Sắp xếp câu mô tả 4 bước xử lý phản đối: Xác định, thấu hiểu, xác minh và xử lý:',
        englishSentence: 'Identify real objection, understand root cause, verify concern, and provide solutions.',
        audioText: 'Identify real objection, understand root cause, verify concern, and provide solutions.',
        phonetics: '/aɪˈdɛntɪfaɪ rɪəl əbˈdʒɛkʃn, ˌʌndərˈstænd ruːt kɔːz, ˈvɛrɪfaɪ kənˈsɜːrn, ænd prəˈvaɪd səˈluːʃnz/',
        wordPool: ['Identify', 'real', 'objection,', 'understand', 'root', 'cause,', 'verify', 'concern,', 'and', 'provide', 'solutions.', 'fight'],
        explanation: 'B1: Xác định phản đối thật; B2: Thấu hiểu nguyên nhân; B3: Xác minh lại; B4: Xử lý tình huống bằng giải pháp và dẫn chứng thuyết phục.',
        whyWrong: 'Nhiều người vội vàng cãi lại ở B1 trong khi khách hàng chỉ đang đưa ra phản đối ngụy tạo (chê đắt để đòi quà).',
        crucialNote: 'Đặt câu hỏi mở: "Ngoài vấn đề về giá, anh/chị còn điều gì băn khoăn về chất lượng nguồn khoáng nữa không ạ?".',
        memoryHook: 'B1-B2-B3-B4: Lắng nghe - Thấu hiểu - Xác nhận - Hóa giải.'
      },
      {
        id: 'u21-e3',
        type: 'speak',
        promptEn: 'Deliver the classic diplomatic Feel - Felt - Found empathy phrase:',
        promptVi: 'Luyện nói công thức đảo ngược thế cờ kinh điển "Feel - Felt - Found":',
        englishSentence: 'I understand how you feel, other partners felt the same, until they discovered our value.',
        audioText: 'I understand how you feel, other partners felt the same, until they discovered our value.',
        phonetics: '/aɪ ˌʌndərˈstænd haʊ juː fiːl, ˈʌðər ˈpɑːrtnərz fɛlt ðə seɪm, ənˈtɪl ðeɪ dɪsˈkʌvərd aʊər ˈvæljuː/',
        explanation: 'Công thức hòa giải bất đồng kinh điển nhất thế giới: Đồng cảm (Feel) -> Bình thường hóa (Felt) -> Dẫn chứng bước ngoặt thành công (Found).',
        whyWrong: 'Xóa tan hoàn toàn thế đối đầu, kéo khách hàng về chung một chiến tuyến.',
        crucialNote: 'Kèm theo dẫn chứng chuỗi khách sạn Marriott hoặc siêu thị Big C đã bứt phá doanh số ra sao.',
        memoryHook: 'Feel - Felt - Found = Nghệ thuật đồng cảm đỉnh cao của bậc thầy đàm phán.'
      }
    ]
  },
  {
    id: 'unit-22',
    unitNumber: 22,
    title: 'Thuyết Phục Khách Sạn & Resort 5 Sao HORECA',
    subtitle: 'Chiến lược đặt chai thủy tinh tại Marriott, Sheraton, Vinpearl & giải pháp ESG xanh',
    level: 'B2-C1',
    icon: '🏨',
    color: 'cyan',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u22-e1',
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
        id: 'u22-e2',
        type: 'word_order',
        promptEn: 'Formulate the pitch highlighting localized luxury vs imported brands like San Pellegrino:',
        promptVi: 'Sắp xếp câu: "Nước khoáng kiềm thiên nhiên đóng chai tại nguồn của Việt Nam mang đẳng cấp thế giới."',
        englishSentence: 'Our locally bottled natural alkaline water matches top world-class quality.',
        audioText: 'Our locally bottled natural alkaline water matches top world-class quality.',
        phonetics: '/aʊər ˈloʊkəli ˈbɒtld ˈnætʃrəl ˈælkəlaɪn ˈwɔːtər ˈmætʃɪz tɒp wɜːrld-klɑːs ˈkwɒləti/',
        wordPool: ['Our', 'locally', 'bottled', 'natural', 'alkaline', 'water', 'matches', 'top', 'world-class', 'quality.', 'cheap'],
        explanation: 'Chất lượng khoáng kiềm Đảnh Thạnh tương đương các mỏ khoáng huyền thoại Kuldur (Liên Xô), Vichy (Pháp) nhưng chi phí logistics tối ưu hơn nhiều.',
        whyWrong: 'Giúp khách sạn tối ưu biên lợi nhuận F&B đồng thời tôn vinh giá trị tài nguyên quốc gia.',
        crucialNote: 'Hạn chế rủi ro đứt gãy nguồn cung đường biển viễn dương.',
        memoryHook: 'Matches world-class quality = Sánh ngang phẩm cấp quốc tế.'
      },
      {
        id: 'u22-e3',
        type: 'speak',
        promptEn: 'Propose a sommelier trial tasting event for the hotel executive chef and F&B team:',
        promptVi: 'Luyện nói câu đề xuất tổ chức buổi thử nếm thử rượu và nước khoáng (Trial Tasting):',
        englishSentence: 'We would love to host a private tasting session for your culinary team.',
        audioText: 'We would love to host a private tasting session for your culinary team.',
        phonetics: '/wiː wʊd lʌv tuː hoʊst ə ˈpraɪvət ˈteɪstɪŋ ˈsɛʃn fɔːr jʊər ˈkʌlɪnəri tiːm/',
        explanation: '"Tasting session" là bước đệm hoàn hảo để các đầu bếp hàng đầu kiểm nghiệm vị ngọt thanh làm sạch vị giác của Vikoda.',
        whyWrong: 'Bán hàng giải pháp (Solution Selling) thông qua trải nghiệm thực tế.',
        crucialNote: 'Mang theo cả dòng khoáng lạt và khoáng bổ sung ga Đảnh Thạnh ướp lạnh chuẩn 12°C.',
        memoryHook: 'Private tasting session = Buổi thử vị ngoại giao sang trọng.'
      }
    ]
  },
  {
    id: 'unit-23',
    unitNumber: 23,
    title: 'Incoterms 2020: FOB Quy Nhơn/Cát Lái vs CIF',
    subtitle: 'Thương thảo điều kiện giao hàng đường biển viễn dương, phân chia rủi ro và cước tàu',
    level: 'B2-C1',
    icon: '🚢',
    color: 'blue',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u23-e1',
        type: 'choice',
        promptEn: 'Under Incoterms 2020 FOB (Free on Board) terms, what are the primary obligations of Vikoda as seller?',
        promptVi: 'Theo điều khoản FOB Incoterms 2020, trách nhiệm cốt lõi của Vikoda (người bán) dừng lại ở đâu?',
        englishSentence: 'Deliver goods safely on board the vessel and complete export customs clearance.',
        audioText: 'Deliver goods safely on board the vessel and complete export customs clearance.',
        options: [
          'Deliver goods safely on board the vessel and complete export customs clearance.',
          'Pay for ocean freight all the way to buyer warehouse in Tokyo.',
          'Pay for supermarket rent in destination country.'
        ],
        correctIndex: 0,
        explanation: 'FOB (Cảng Cát Lái hoặc Quy Nhơn): Vikoda chịu chi phí vận chuyển nội địa, thủ tục hải quan xuất khẩu và bốc hàng lên boong tàu. Cước tàu biển do người mua trả.',
        whyWrong: 'Nếu người mua muốn Vikoda bao cước tàu và bảo hiểm hàng hải, hợp đồng phải chuyển sang điều kiện CIF (Cost, Insurance and Freight).',
        crucialNote: 'Khi đàm phán với đối tác Nhật Bản (IMAI Ltd.), xác định rõ điểm chuyển giao rủi ro trên lan can tàu.',
        memoryHook: 'FOB = Hàng qua lan can tàu là hoàn thành trách nhiệm giao hàng.'
      },
      {
        id: 'u23-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence clarifying CIF price quote for 20ft ocean containers:',
        promptVi: 'Sắp xếp câu: "Giá CIF bao gồm cước vận chuyển đường biển và bảo hiểm hàng hải."',
        englishSentence: 'Our CIF quotation includes ocean freight and marine cargo insurance.',
        audioText: 'Our CIF quotation includes ocean freight and marine cargo insurance.',
        phonetics: '/aʊər siː-aɪ-ɛf ˌkwoʊˈteɪʃn ɪnˈkluːdz ˈoʊʃn freɪt ænd məˈriːn ˈkɑːrɡoʊ ɪnˈʃʊərəns/',
        wordPool: ['Our', 'CIF', 'quotation', 'includes', 'ocean', 'freight', 'and', 'marine', 'cargo', 'insurance.', 'free', 'air'],
        explanation: 'CIF = Giá hàng (Cost) + Bảo hiểm đường biển (Insurance) + Cước tàu (Freight) đến tận cảng đích của người mua.',
        whyWrong: 'Giúp người mua nước ngoài không phải lo lắng về việc thuê tàu biển phức tạp.',
        crucialNote: 'Mức bảo hiểm hàng hải tối thiểu thường là điều kiện C hoặc A (All Risks) của Viện bảo hiểm London (ICC).',
        memoryHook: 'CIF = Hàng + Cước tàu + Bảo hiểm tận cảng bạn.'
      },
      {
        id: 'u23-e3',
        type: 'speak',
        promptEn: 'Specify the export container stuffing specifications to shipping line:',
        promptVi: 'Luyện nói câu mô tả đóng hàng nguyên container FCL 20 feet xuất khẩu:',
        englishSentence: 'Each twenty-foot container accommodates twenty-two pallets of mineral water.',
        audioText: 'Each twenty-foot container accommodates twenty-two pallets of mineral water.',
        phonetics: '/iːtʃ ˈtwɛnti-fʊt kənˈteɪnər əˈkɒmədeɪts ˈtwɛnti-tuː ˈpæləts əv ˈmɪnərəl ˈwɔːtər/',
        explanation: '"Accommodates twenty-two pallets" (chứa vừa 22 kiện pallet theo chuẩn hàng hải).',
        whyWrong: 'Hàng chai thủy tinh phải được quấn màng co và chèn túi khí chống sốc (Dunnage bags) khi vượt biển.',
        crucialNote: 'Từ FCL (Full Container Load) là hàng nguyên công, đối lập với LCL (Less than Container Load - hàng lẻ).',
        memoryHook: 'FCL = Hàng nguyên công; LCL = Hàng lẻ ghép cont.'
      }
    ]
  },
  {
    id: 'unit-24',
    unitNumber: 24,
    title: 'Thanh Toán Quốc Tế: L/C at Sight & T/T',
    subtitle: 'Nắm vững Thư tín dụng chứng từ L/C, Hóa đơn thương mại, Vận đơn B/L và C/O',
    level: 'B2-C1',
    icon: '💳',
    color: 'purple',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u24-e1',
        type: 'choice',
        promptEn: 'Why is an Irrevocable Letter of Credit (L/C at sight) considered the safest payment method for export?',
        promptVi: 'Tại sao Thư tín dụng không thể hủy ngang (L/C at sight) là phương thức thanh toán xuất khẩu an toàn nhất?',
        englishSentence: 'Payment is guaranteed by a reputable issuing bank upon presenting compliant shipping documents.',
        audioText: 'Payment is guaranteed by a reputable issuing bank upon presenting compliant shipping documents.',
        options: [
          'Payment is guaranteed by a reputable issuing bank upon presenting compliant shipping documents.',
          'Because the buyer sends cash in a paper bag through regular postal mail.',
          'Because banks never charge any fees for international trade.'
        ],
        correctIndex: 0,
        explanation: 'L/C at sight: Ngân hàng phát hành cam kết thanh toán ngay khi nhà xuất khẩu xuất trình bộ chứng từ hoàn hảo (Clean B/L, C/O, Commercial Invoice, Packing List).',
        whyWrong: 'Triệt tiêu rủi ro người mua bùng tiền hoặc chậm trễ thanh toán sau khi hàng đã rời cảng.',
        crucialNote: 'Kiểm tra kỹ điều khoản dung sai (Tolerance +/- 5%) trong L/C để tránh bất đồng chứng từ (Discrepancy).',
        memoryHook: 'L/C at sight = Ngân hàng bảo lãnh trả tiền ngay khi trình chứng từ chuẩn.'
      },
      {
        id: 'u24-e2',
        type: 'word_order',
        promptEn: 'List essential export shipping documents required for bank negotiation:',
        promptVi: 'Sắp xếp câu: "Bộ chứng từ bao gồm Vận đơn sạch, Hóa đơn thương mại và Chứng nhận xuất xứ."',
        englishSentence: 'The shipping dossier includes Clean Bill of Lading, Invoice, and Certificate of Origin.',
        audioText: 'The shipping dossier includes Clean Bill of Lading, Invoice, and Certificate of Origin.',
        phonetics: '/ðə ˈʃɪpɪŋ ˈdɒsieɪ ɪnˈkluːdz kliːn bɪl əv ˈleɪdɪŋ, ˈɪnvɔɪs, ænd sərˈtɪfɪkət əv ˈɒrɪdʒɪn/',
        wordPool: ['The', 'shipping', 'dossier', 'includes', 'Clean', 'Bill', 'of', 'Lading,', 'Invoice,', 'and', 'Certificate', 'of', 'Origin.', 'ticket'],
        explanation: 'Bill of Lading (B/L): Vận đơn đường biển; Invoice: Hóa đơn thương mại; Certificate of Origin (C/O Form AK/AJ): Chứng nhận xuất xứ hàng hóa Việt Nam.',
        whyWrong: 'C/O giúp đối tác nhập khẩu được hưởng thuế suất ưu đãi 0% theo các hiệp định FTA thương mại tự do.',
        crucialNote: 'Chỉ một lỗi sai chính tả nhỏ trên B/L cũng có thể khiến ngân hàng từ chối giải ngân.',
        memoryHook: 'Clean B/L + C/O = Bộ đôi chứng từ vàng giải phóng dòng tiền.'
      },
      {
        id: 'u24-e3',
        type: 'speak',
        promptEn: 'Request the importer to open an operative Letter of Credit in your favor:',
        promptVi: 'Luyện nói câu đề nghị nhà nhập khẩu mở L/C tại ngân hàng uy tín:',
        englishSentence: 'Please instruct your bank to issue an irrevocable L/C in our favor.',
        audioText: 'Please instruct your bank to issue an irrevocable L/C in our favor.',
        phonetics: '/pliːz ɪnˈstrʌkt jʊər bæŋk tuː ˈɪʃuː æn ɪˈrɛvəkəbl ɛl-siː ɪn aʊər ˈfeɪvər/',
        explanation: '"In our favor" nghĩa là người thụ hưởng là Công ty Cổ phần Nước khoáng Khánh Hòa.',
        whyWrong: '"Irrevocable" nghĩa là người mua không thể đơn phương hủy bỏ L/C nếu không có sự đồng ý của Vikoda.',
        crucialNote: 'Mẫu câu đàm phán tài chính quốc tế chuẩn Oxford Business English.',
        memoryHook: 'In our favor = Thụ hưởng về phía công ty chúng tôi.'
      }
    ]
  },
  {
    id: 'unit-25',
    unitNumber: 25,
    title: 'Hậu Cần Viễn Dương & Giám Định SGS',
    subtitle: 'Quản trị chuỗi cung ứng Logistics, chuyển tải, Cross-docking và kiểm định SGS',
    level: 'B2-C1',
    icon: '📦',
    color: 'amber',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u25-e1',
        type: 'choice',
        promptEn: 'What is the role of an independent inspection agency like SGS in international beverage shipments?',
        promptVi: 'Vai trò của cơ quan giám định độc lập như SGS trong các lô hàng xuất khẩu nước uống là gì?',
        englishSentence: 'To certify product quality, sealing integrity, and quantity before container loading.',
        audioText: 'To certify product quality, sealing integrity, and quantity before container loading.',
        options: [
          'To certify product quality, sealing integrity, and quantity before container loading.',
          'To drink all mineral water bottles before the ship sails.',
          'To steal trade secrets and give them away.'
        ],
        correctIndex: 0,
        explanation: 'SGS (hoặc Bureau Veritas) là bên thứ 3 độc lập kiểm tra nắp chai, nhãn mác, chỉ số vi sinh và niêm phong chì (Seal) container.',
        whyWrong: 'Chứng thư kiểm định SGS loại bỏ mọi tranh chấp về chất lượng khi hàng cập cảng đích.',
        crucialNote: 'Là điều kiện tiên quyết trong các hợp đồng xuất khẩu sang thị trường khó tính như Nhật Bản và Mỹ.',
        memoryHook: 'SGS Inspection = Giám định độc lập bảo chứng sự hoàn mỹ.'
      },
      {
        id: 'u25-e2',
        type: 'word_order',
        promptEn: 'Explain cross-docking logistics to optimize warehouse costs:',
        promptVi: 'Sắp xếp câu: "Hệ thống phân phối trực tiếp cross-docking giúp giảm tối đa thời gian lưu kho."',
        englishSentence: 'Cross-docking distribution minimizes storage time and accelerates delivery to retailers.',
        audioText: 'Cross-docking distribution minimizes storage time and accelerates delivery to retailers.',
        phonetics: '/krɒs-ˈdɒkɪŋ ˌdɪstrɪˈbjuːʃn ˈmɪnɪmaɪzɪz ˈstɔːrɪdʒ taɪm ænd əkˈsɛləreɪts dɪˈlɪvəri tuː ˈriːteɪlərz/',
        wordPool: ['Cross-docking', 'distribution', 'minimizes', 'storage', 'time', 'and', 'accelerates', 'delivery', 'to', 'retailers.', 'slow'],
        explanation: 'Cross-docking: Hàng chuyển từ xe tải lớn của nhà máy sang các xe tải nhỏ giao đại lý mà không cần đưa vào lưu kho trung gian.',
        whyWrong: 'Giảm 30% chi phí bến bãi và bảo vệ chai thủy tinh không bị va đập nhiều lần.',
        crucialNote: 'Thuật ngữ cốt lõi trích từ tài liệu Logistics & Supply Chain chuẩn Oxford.',
        memoryHook: 'Cross-docking = Chuyển tiếp tức thì, giải phóng kho bãi.'
      },
      {
        id: 'u25-e3',
        type: 'speak',
        promptEn: 'Provide tracking details to foreign freight forwarder:',
        promptVi: 'Luyện nói câu cung cấp mã vận đơn và hành trình truy xuất đơn hàng container:',
        englishSentence: 'Here is the container tracking number and vessel departure schedule.',
        audioText: 'Here is the container tracking number and vessel departure schedule.',
        phonetics: '/hɪər ɪz ðə kənˈteɪnər ˈtrækɪŋ ˈnʌmbər ænd ˈvɛsl dɪˈpɑːrtʃər ˈskɛdʒuːl/',
        explanation: '"Tracking number and vessel departure" (Mã số container và lịch trình tàu rời cảng).',
        whyWrong: 'Giúp khách hàng chủ động chuẩn bị kho bãi và kế hoạch làm thủ tục thông quan nhập khẩu.',
        crucialNote: 'Phát âm chuẩn từ "Schedule" (/ˈskɛdʒuːl/ theo Anh-Mỹ hoặc /ˈʃɛdjuːl/ theo Anh-Anh).',
        memoryHook: 'Tracking & Tracing = Theo dõi hành trình xuyên suốt đại dương.'
      }
    ]
  },
  {
    id: 'unit-26',
    unitNumber: 26,
    title: 'Tiêu Chuẩn Chất Lượng Quốc Tế: ISO & FDA',
    subtitle: 'Thuyết phục khách hàng khó tính bằng ISO 22000, HACCP, US FDA và Halal',
    level: 'B2-C1',
    icon: '🏅',
    color: 'emerald',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u26-e1',
        type: 'choice',
        promptEn: 'Which international certifications demonstrate Vikoda’s compliance with global food safety standards?',
        promptVi: 'Những chứng chỉ quốc tế tiêu biểu nào của Vikoda bảo chứng cho vệ sinh an toàn thực phẩm toàn cầu?',
        englishSentence: 'ISO 22000, HACCP, US FDA registration, and international Halal certification.',
        audioText: 'ISO twenty-two thousand, HACCP, US FDA registration, and international Halal certification.',
        options: [
          'ISO 22000, HACCP, US FDA registration, and international Halal certification.',
          'No certificates at all.',
          'Only local handwritten notes from friends.'
        ],
        correctIndex: 0,
        explanation: 'Hồ sơ năng lực quốc tế: Vikoda đạt đầy đủ ISO 9001:2015, ISO 14001, ISO 22000, HACCP, FDA (Mỹ) và Halal (thị trường Trung Đông).',
        whyWrong: 'Chứng chỉ FDA là giấy thông hành bắt buộc để lưu hành đồ uống tại thị trường Hoa Kỳ.',
        crucialNote: 'Halal mở toang cánh cửa xuất khẩu sang các quốc gia Hồi giáo giàu có như UAE, Dubai, Indonesia, Malaysia.',
        memoryHook: 'BỘ TỨ CHỨNG CHỈ: ISO + HACCP + FDA + HALAL.'
      },
      {
        id: 'u26-e2',
        type: 'word_order',
        promptEn: 'Emphasize rigorous annual testing of over fifty biochemical parameters:',
        promptVi: 'Sắp xếp câu: "Hơn 50 tiêu chí chất lượng được kiểm nghiệm định kỳ hàng năm nghiêm ngặt."',
        englishSentence: 'Over fifty quality criteria are rigorously tested and certified annually.',
        audioText: 'Over fifty quality criteria are rigorously tested and certified annually.',
        phonetics: '/ˈoʊvər ˈfɪfti ˈkwɒləti kraɪˈtɪəriə ɑːr ˈrɪɡərəsli ˈtɛstɪd ænd ˈsɜːrtɪfaɪd ˈænjuəli/',
        wordPool: ['Over', 'fifty', 'quality', 'criteria', 'are', 'rigorously', 'tested', 'and', 'certified', 'annually.', 'ignored'],
        explanation: 'Hơn 50 chỉ tiêu về kim loại nặng, vi sinh vật, khoáng lượng được giám sát chặt chẽ bởi các phòng lab độc lập trong và ngoài nước.',
        whyWrong: 'Cam kết chất lượng đồng nhất trên từng giọt nước đóng chai.',
        crucialNote: 'Từ "Rigorously" thể hiện sự nghiêm ngặt, chuẩn chỉ tuyệt đối.',
        memoryHook: 'Rigorously tested = Được kiểm định nghiêm ngặt khắt khe.'
      },
      {
        id: 'u26-e3',
        type: 'speak',
        promptEn: 'Present the quality assurance pledge to a European buyer:',
        promptVi: 'Luyện nói câu cam kết chất lượng chuẩn mực với đối tác Châu Âu:',
        englishSentence: 'Quality and food safety are the lifeblood of our manufacturing process.',
        audioText: 'Quality and food safety are the lifeblood of our manufacturing process.',
        phonetics: '/ˈkwɒləti ænd fuːd ˈseɪfti ɑːr ðə ˈlaɪfblʌd əv aʊər ˌmænjuˈfæktʃərɪŋ ˈproʊsɛs/',
        explanation: 'Trích từ lời khẳng định của ban lãnh đạo Vikoda: "Chất lượng và an toàn thực phẩm là sự sống còn của quá trình sản xuất".',
        whyWrong: 'Từ "Lifeblood" (huyết mạch, sự sống còn) tạo ấn tượng sâu sắc về trách nhiệm của doanh nghiệp.',
        crucialNote: 'Phong thái đĩnh đạc, tự hào về bề dày 36 năm phát triển bền vững.',
        memoryHook: 'Lifeblood = Huyết mạch sống còn của tổ chức.'
      }
    ]
  },
  {
    id: 'unit-27',
    unitNumber: 27,
    title: 'Câu Chuyện Xuất Khẩu: Big C Hong Kong & IMAI Nhật',
    subtitle: 'Bài học đàm phán thực tế đưa Vikoda Soda và Đảnh Thạnh sang các thị trường khó tính',
    level: 'B2-C1',
    icon: '🌏',
    color: 'cyan',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u27-e1',
        type: 'choice',
        promptEn: 'How did Vikoda establish strategic partnership with IMAI Ltd. in Japan since 1953?',
        promptVi: 'Vikoda đã thiết lập quan hệ xuất khẩu chiến lược với tập đoàn IMAI Nhật Bản như thế nào?',
        englishSentence: 'By supplying premium Dan Thanh sparkling water meeting Japan’s strict import standards.',
        audioText: 'By supplying premium Dan Thanh sparkling water meeting Japan’s strict import standards.',
        options: [
          'By supplying premium Dan Thanh sparkling water meeting Japan’s strict import standards.',
          'By selling poor quality tap water with high discounts.',
          'By refusing to answer Japanese inspection letters.'
        ],
        correctIndex: 0,
        explanation: 'Đối tác xuất khẩu chiến lược: IMAI Ltd. là tập đoàn nhập khẩu uy tín của Nhật Bản từ năm 1953 với hơn 70 năm kinh nghiệm phân phối chuỗi siêu thị lớn.',
        whyWrong: 'Nhật Bản là thị trường kiểm định khắt khe bậc nhất thế giới; việc xuất khẩu thành công sang Nhật là chứng chỉ danh giá nhất của Vikoda.',
        crucialNote: 'Các sản phẩm xuất sang Nhật: Sparkling Khoáng Chanh và Sparkling Khoáng Chanh Muối.',
        memoryHook: 'EXPORT TO JAPAN = Bảo chứng vàng chất lượng mỏ Đảnh Thạnh.'
      },
      {
        id: 'u27-e2',
        type: 'word_order',
        promptEn: 'Highlight the retail presence of Vikoda Soda across Big C Hong Kong:',
        promptVi: 'Sắp xếp câu: "Vikoda Soda đã hiện diện chính thức tại hệ thống bán lẻ Big C Hồng Kông."',
        englishSentence: 'Vikoda Soda is officially distributed throughout Big C Hong Kong supermarkets.',
        audioText: 'Vikoda Soda is officially distributed throughout Big C Hong Kong supermarkets.',
        phonetics: '/vɪˈkoʊdə ˈsoʊdə ɪz əˈfɪʃəli dɪˈstrɪbjuːtɪd θruːˈaʊt bɪɡ siː hɒŋ kɒŋ ˈsuːpərmɑːrkɪts/',
        wordPool: ['Vikoda', 'Soda', 'is', 'officially', 'distributed', 'throughout', 'Big', 'C', 'Hong', 'Kong', 'supermarkets.', 'hidden'],
        explanation: 'Big C Hong Kong là cầu nối chiến lược tiếp cận cộng đồng người tiêu dùng châu Á tại trung tâm tài chính sầm uất.',
        whyWrong: 'Tạo đòn bẩy uy tín mở rộng sang các thị trường Đài Loan, Canada, Dubai và Hoa Kỳ.',
        crucialNote: 'Dùng từ "officially distributed" (được phân phối chính thức).',
        memoryHook: 'Officially distributed = Hiện diện chính thức trên kệ siêu thị quốc tế.'
      },
      {
        id: 'u27-e3',
        type: 'speak',
        promptEn: 'State Vikoda’s global expansion vision to an international delegation:',
        promptVi: 'Luyện nói câu tuyên ngôn khẳng định khát vọng vươn mình ra thế giới:',
        englishSentence: 'We are expanding from Vietnam to major markets across Asia, America, and Europe.',
        audioText: 'We are expanding from Vietnam to major markets across Asia, America, and Europe.',
        phonetics: '/wiː ɑːr ɪkˈspændɪŋ frəm ˌvjɛtˈnɑːm tuː ˈmeɪdʒər ˈmɑːrkɪts əˈkrɒs ˈeɪʒə, əˈmɛrɪkə, ænd ˈjʊərəp/',
        explanation: 'Khát vọng vươn xa của người miền Trung và thương hiệu "Ngọc Trong Đá": chinh phục toàn cầu.',
        whyWrong: 'Hiện diện tại hơn 34 tỉnh thành trong nước và xuất khẩu sang nhiều châu lục.',
        crucialNote: 'Phát âm chuẩn tên 3 châu lục: Asia (/ˈeɪʒə/), America (/əˈmɛrɪkə/), Europe (/ˈjʊərəp/).',
        memoryHook: 'Global expansion = Khát vọng vươn mình ra biển lớn.'
      }
    ]
  },
  {
    id: 'unit-28',
    unitNumber: 28,
    title: '5 Lực Lượng Cạnh Tranh Michael Porter',
    subtitle: 'Phân tích Five Competitive Forces của Michael Porter áp dụng cho ngành nước khoáng kiềm',
    level: 'B2-C1',
    icon: '📊',
    color: 'blue',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u28-e1',
        type: 'choice',
        promptEn: 'According to Michael Porter’s Five Forces, what protects Vikoda from "Threat of New Entrants"?',
        promptVi: 'Theo mô hình 5 Lực lượng của Michael Porter, rào cản nào bảo vệ Vikoda trước "Nguy cơ từ đối thủ mới gia nhập"?',
        englishSentence: 'High barriers to entry due to scarce licensed natural mineral aquifers and high capital investment.',
        audioText: 'High barriers to entry due to scarce licensed natural mineral aquifers and high capital investment.',
        options: [
          'High barriers to entry due to scarce licensed natural mineral aquifers and high capital investment.',
          'There are zero barriers and anyone can bottle municipal water in a garage.',
          'New entrants always win without any licenses.'
        ],
        correctIndex: 0,
        explanation: 'Tài nguyên mỏ khoáng tự nhiên 220m được Bộ TNMT cấp phép là nguồn lực quý hiếm độc bản, đối thủ mới không thể nhân bản hay đào thêm giếng khoáng tương tự.',
        whyWrong: 'Rào cản gia nhập ngành (Barriers to entry) cực cao gồm: giấy phép nhà nước, công nghệ đóng chai tại nguồn và thâm niên 36 năm.',
        crucialNote: 'Áp dụng phân tích chiến lược Harvard Business School vào quản trị doanh nghiệp FMCG.',
        memoryHook: 'Barriers to entry = Rào cản gia nhập ngành bảo vệ thị phần bền vững.'
      },
      {
        id: 'u28-e2',
        type: 'word_order',
        promptEn: 'Analyze the threat of substitute products like RO purified water:',
        promptVi: 'Sắp xếp câu: "Nước lọc tinh khiết RO là sản phẩm thay thế giá rẻ nhưng thiếu khoáng chất."',
        englishSentence: 'Purified RO water is a cheap substitute lacking essential minerals.',
        audioText: 'Purified RO water is a cheap substitute lacking essential minerals.',
        phonetics: '/ˈpjʊərɪfaɪd ɑːr-oʊ ˈwɔːtər ɪz ə tʃiːp ˈsʌbstɪtjuːt ˈlækɪŋ ɪˈsɛnʃl ˈmɪnərəlz/',
        wordPool: ['Purified', 'RO', 'water', 'is', 'a', 'cheap', 'substitute', 'lacking', 'essential', 'minerals.', 'rich'],
        explanation: 'Threat of Substitutes (Nguy cơ từ sản phẩm thay thế): Nước lọc RO là "nước chết" thiếu khoáng, trong khi Vikoda là "nước sống" kiềm tự nhiên pH 9.0 giàu vi khoáng quý.',
        whyWrong: 'Khách hàng có học thức và ý thức sức khỏe sẽ sẵn sàng trả mức giá cao hơn để đổi lấy sự an toàn lâu dài.',
        crucialNote: 'Dùng từ "Substitute" chuẩn thuật ngữ kinh tế vĩ mô của Michael Porter.',
        memoryHook: 'Substitute product = Sản phẩm thay thế trên thị trường.'
      },
      {
        id: 'u28-e3',
        type: 'speak',
        promptEn: 'Formulate an executive strategic statement on bargaining power of buyers:',
        promptVi: 'Luyện nói câu khẳng định giá trị thương hiệu làm giảm áp lực ép giá từ người mua:',
        englishSentence: 'Strong brand equity reduces the bargaining power of price-sensitive buyers.',
        audioText: 'Strong brand equity reduces the bargaining power of price-sensitive buyers.',
        phonetics: '/strɒŋ brænd ˈɛkwəti rɪˈdjuːsɪz ðə ˈbɑːrɡənɪŋ ˈpaʊər əv praɪs-ˈsɛnsətɪv ˈbaɪərz/',
        explanation: 'Bargaining power of buyers: Người mua sẽ không thể ép giá nếu người tiêu dùng cuối cùng (Shopper) chỉ đích danh yêu cầu Vikoda vì sự khác biệt độc bản.',
        whyWrong: 'Thương hiệu mạnh (Brand equity) chính là tấm khiên bảo vệ biên lợi nhuận của doanh nghiệp.',
        crucialNote: 'Phát âm chuẩn từ "Equity" (/ˈɛkwəti/).',
        memoryHook: 'Bargaining power = Năng lực thương lượng của khách hàng.'
      }
    ]
  },
  {
    id: 'unit-29',
    unitNumber: 29,
    title: 'Chiến Lược Khác Biệt Hóa (Differentiation)',
    subtitle: 'Áp dụng Michael Porter Generic Strategy: Khác biệt hóa sản phẩm thay vì chạy đua giá rẻ',
    level: 'B2-C1',
    icon: '💎',
    color: 'purple',
    xpReward: 50,
    gemReward: 20,
    exercises: [
      {
        id: 'u29-e1',
        type: 'choice',
        promptEn: 'Which of Michael Porter’s three generic strategies does Vikoda champion?',
        promptVi: 'Trong 3 chiến lược tổng quát của Michael Porter, Vikoda kiên định theo đuổi chiến lược nào?',
        englishSentence: 'Differentiation Strategy: Offering unique, premium natural alkaline water that competitors cannot replicate.',
        audioText: 'Differentiation Strategy: Offering unique, premium natural alkaline water that competitors cannot replicate.',
        options: [
          'Differentiation Strategy: Offering unique, premium natural alkaline water that competitors cannot replicate.',
          'Price Dumping: Selling below cost to ruin the market.',
          'Cost leadership by making low quality dirty water.'
        ],
        correctIndex: 0,
        explanation: 'Chiến lược Khác biệt hóa (Differentiation): Tạo ra sản phẩm độc nhất, vượt trội mà đối thủ cạnh tranh không thể sao chép được.',
        whyWrong: 'Chạy đua giá rẻ (Price War) sẽ hủy hoại giá trị thương hiệu; Vikoda chọn vị thế ngọc quý kiêu hãnh.',
        crucialNote: 'Độ kiềm hoàn hảo pH 9.0 từ nguồn khoáng 220m là điểm khác biệt cốt lõi không thể làm giả.',
        memoryHook: 'Differentiation = Khác biệt hóa để dẫn đầu.'
      },
      {
        id: 'u29-e2',
        type: 'word_order',
        promptEn: 'Highlight unique emotional and functional value proposition to corporate partners:',
        promptVi: 'Sắp xếp câu: "Khác biệt hóa bảo vệ vị thế thương hiệu cao cấp của chúng tôi trên thị trường."',
        englishSentence: 'Differentiation protects our premium brand positioning in the marketplace.',
        audioText: 'Differentiation protects our premium brand positioning in the marketplace.',
        phonetics: '/ˌdɪfərɛnʃiˈeɪʃn prəˈtɛkts aʊər ˈpriːmiəm brænd pəˈzɪʃənɪŋ ɪn ðə ˈmɑːrkɪtpleɪs/',
        wordPool: ['Differentiation', 'protects', 'our', 'premium', 'brand', 'positioning', 'in', 'the', 'marketplace.', 'cheap', 'lose'],
        explanation: 'Khách sạn 5 sao và thực khách thượng lưu không chọn sản phẩm rẻ nhất; họ chọn sản phẩm mang lại sự tự hào và an tâm tuyệt đối.',
        whyWrong: 'Tạo lập khoảng cách an toàn với các sản phẩm nước đóng chai bình dân.',
        crucialNote: 'Dùng từ "Positioning" (Định vị thương hiệu trong tâm trí người dùng).',
        memoryHook: 'Brand positioning = Định vị thương hiệu đỉnh cao.'
      },
      {
        id: 'u29-e3',
        type: 'speak',
        promptEn: 'Deliver the differentiation keynote to your sales team:',
        promptVi: 'Luyện nói câu truyền cảm hứng về giá trị độc bản của Vikoda cho đội ngũ kinh doanh:',
        englishSentence: 'We do not compete on cheap price; we win on unmatched natural purity.',
        audioText: 'We do not compete on cheap price; we win on unmatched natural purity.',
        phonetics: '/wiː duː nɒt kəmˈpiːt ɒn tʃiːp praɪs; wiː wɪn ɒn ʌnˈmætʃt ˈnætʃrəl ˈpjʊərəti/',
        explanation: '"We win on unmatched natural purity" (Chúng ta chiến thắng bằng sự tinh khiết tự nhiên vô đối).',
        whyWrong: 'Khắc sâu tinh thần tự hào về sản phẩm cho từng chiến binh Vikoda.',
        crucialNote: 'Tư thế thẳng lưng, ánh mắt sáng rực, giọng nói dứt khoát và hào sảng.',
        memoryHook: 'Unmatched purity = Tinh khiết vô song, không đối thủ.'
      }
    ]
  },
  {
    id: 'unit-30',
    unitNumber: 30,
    title: 'Nghệ Thuật Bất Đồng Ý Kiến Ngoại Giao',
    subtitle: 'Làm chủ Diplomatic Disagreement, Softening Criticism & Kỹ năng phản biện chuẩn Cambridge',
    level: 'B2-C1',
    icon: '🤝',
    color: 'amber',
    xpReward: 60,
    gemReward: 25,
    exercises: [
      {
        id: 'u30-e1',
        type: 'choice',
        promptEn: 'When you disagree with a partner’s proposal during negotiations, what is the most diplomatic Cambridge phrase?',
        promptVi: 'Khi bạn không đồng ý với đề xuất của đối tác trong đàm phán, câu nói ngoại giao chuẩn Cambridge nhất là gì?',
        englishSentence: 'I see your point, but I am afraid I have a slightly different perspective on this.',
        audioText: 'I see your point, but I am afraid I have a slightly different perspective on this.',
        options: [
          'I see your point, but I am afraid I have a slightly different perspective on this.',
          'You are completely wrong and that idea is foolish.',
          'Shut up, I will not talk to you anymore.'
        ],
        correctIndex: 0,
        explanation: 'Kỹ năng ngoại giao chuẩn mực: "I see your point, but I am afraid..." ghi nhận quan điểm của họ trước khi nhẹ nhàng đưa ra góc nhìn khác.',
        whyWrong: 'Nói thẳng "You are wrong" là thảm họa giao tiếp phương Tây, đẩy cuộc đàm phán vào bế tắc (Deadlock).',
        crucialNote: 'Kỹ năng làm mềm lời phản bác (Softening Criticism) giữ thể diện cho đối tác.',
        memoryHook: 'I see your point, but... = Tôi hiểu ý anh, nhưng...'
      },
      {
        id: 'u30-e2',
        type: 'word_order',
        promptEn: 'Politely interrupt a meeting discussion to contribute crucial market feedback:',
        promptVi: 'Sắp xếp câu ngắt lời lịch sự trong cuộc họp: "Xin lỗi vì ngắt lời, tôi có thể nêu ý kiến ở đây được không?"',
        englishSentence: 'Sorry to interrupt, but could I make a brief point here?',
        audioText: 'Sorry to interrupt, but could I make a brief point here?',
        phonetics: '/ˈsɒri tuː ˌɪntəˈrʌpt, bʌt kʊd aɪ meɪk ə briːf pɔɪnt hɪər/',
        wordPool: ['Sorry', 'to', 'interrupt,', 'but', 'could', 'I', 'make', 'a', 'brief', 'point', 'here?', 'stop', 'quiet'],
        explanation: 'Kỹ năng họp chuẩn Cambridge: "Could I make a brief point here?" là cách xen ngang chuyên nghiệp được tôn trọng nhất.',
        whyWrong: 'Thể hiện sự tôn trọng không gian thảo luận chung của ban giám đốc.',
        crucialNote: 'Dùng từ "brief point" ngầm hiểu bạn sẽ phát biểu súc tích, không làm mất thời gian.',
        memoryHook: 'Make a brief point = Nêu một ý kiến ngắn gọn đắt giá.'
      },
      {
        id: 'u30-e3',
        type: 'speak',
        promptEn: 'Deliver the diplomatic agreement up to a point with strategic reservation:',
        promptVi: 'Luyện nói câu đồng ý một phần có điều kiện trong đàm phán hợp đồng lớn:',
        englishSentence: 'I can go along with this proposal up to a point, provided volume targets are met.',
        audioText: 'I can go along with this proposal up to a point, provided volume targets are met.',
        phonetics: '/aɪ kæn ɡoʊ əˈlɒŋ wɪð ðɪs prəˈpoʊzl ʌp tuː ə pɔɪnt, prəˈvaɪdɪd ˈvɒljuːm ˈtɑːrɡɪts ɑːr mɛt/',
        explanation: '"I can go along with this up to a point" (Tôi có thể đồng thuận ở một mức độ nhất định, với điều kiện đạt chỉ tiêu sản lượng).',
        whyWrong: 'Không bao giờ nhượng bộ trắng trợn; luôn gắn nhượng bộ chiết khấu với yêu cầu tăng sản lượng (Concession trading).',
        crucialNote: 'Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ Cấp độ B2-C1: Thủ Lĩnh Đàm Phán & Xuất Khẩu Toàn Cầu!',
        memoryHook: 'Up to a point, provided that... = Đồng ý một phần, với điều kiện là...'
      }
    ]
  }
];
