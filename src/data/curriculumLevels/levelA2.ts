import { UnitLesson } from '../curriculumData';

export const LEVEL_A2_UNITS: UnitLesson[] = [
  {
    id: 'unit-9',
    unitNumber: 9,
    title: 'Phòng Nhân Sự & Hành Chính (HR & Admin)',
    subtitle: 'Nội quy công ty, ngày phép, chấm công và chế độ phúc lợi nhân viên',
    level: 'A2',
    icon: '👥',
    color: 'emerald',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u9-e1',
        type: 'choice',
        promptEn: 'How to ask HR about submitting an annual leave request in English:',
        promptVi: 'Hỏi phòng nhân sự cách nộp đơn xin nghỉ phép năm bằng tiếng Anh:',
        englishSentence: 'Could you please show me how to submit an annual leave request?',
        audioText: 'Could you please show me how to submit an annual leave request?',
        options: [
          'Could you please show me how to submit an annual leave request?',
          'I am going home now and not working.',
          'Give me holiday money immediately.'
        ],
        correctIndex: 0,
        explanation: '"Annual leave request" = Đơn xin nghỉ phép năm. "Submit" = Nộp đơn.',
        whyWrong: 'Câu hỏi nhã nhặn, đúng quy trình hành chính công ty.',
        crucialNote: 'Thường nộp qua phần mềm quản lý nhân sự trước ít nhất 2 ngày.',
        memoryHook: 'Annual leave = Nghỉ phép thường niên hưởng lương.'
      },
      {
        id: 'u9-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence defining the flexible working hours at Vikoda:',
        promptVi: 'Sắp xếp câu: "Công ty chúng tôi áp dụng giờ làm việc linh hoạt cho nhân viên."',
        englishSentence: 'Our company offers flexible working hours for employees.',
        audioText: 'Our company offers flexible working hours for employees.',
        phonetics: '/aʊər ˈkʌmpəni ˈɒfərz ˈflɛksəbl ˈwɜːrkɪŋ ˈaʊərz fɔːr ɪmˈplɔɪiːz/',
        wordPool: ['Our', 'company', 'offers', 'flexible', 'working', 'hours', 'for', 'employees.', 'fixed', 'late'],
        explanation: '"Flexible working hours" (Flexitime) = Chế độ làm việc linh hoạt tạo sự chủ động cho nhân viên.',
        whyWrong: 'Một trong những điểm sáng trong văn hóa làm việc lấy con người làm trọng tâm.',
        crucialNote: 'Miễn là hoàn thành đúng chỉ tiêu KPI và nhiệm vụ được giao.',
        memoryHook: 'Flexible hours = Giờ giấc làm việc linh hoạt.'
      },
      {
        id: 'u9-e3',
        type: 'listen_choice',
        promptEn: 'Listen to the HR announcement regarding health insurance benefits:',
        promptVi: 'Nghe thông báo từ phòng nhân sự về chế độ bảo hiểm sức khỏe:',
        englishSentence: 'We provide comprehensive health insurance for all full-time staff.',
        audioText: 'We provide comprehensive health insurance for all full-time staff.',
        options: [
          'Cung cấp bảo hiểm sức khỏe toàn diện cho tất cả nhân viên chính thức',
          'Yêu cầu nhân viên tự chi trả 100% viện phí',
          'Không có chế độ bảo hiểm y tế'
        ],
        correctIndex: 0,
        explanation: '"Comprehensive health insurance" = Bảo hiểm sức khỏe toàn diện chăm sóc y tế cao cấp.',
        whyWrong: 'Phúc lợi y tế thiết thực bảo vệ sức khỏe cán bộ công nhân viên.',
        crucialNote: 'Phát âm từ "Comprehensive" (/ˌkɒmprɪˈhɛnsɪv/).',
        memoryHook: 'Health insurance = Bảo hiểm sức khỏe.'
      },
      {
        id: 'u9-e4',
        type: 'speak',
        promptEn: 'Practice saying you have clocked in on time this morning:',
        promptVi: 'Luyện nói câu xác nhận bạn đã chấm công đúng giờ sáng nay:',
        englishSentence: 'I clocked in on time at eight o’clock this morning.',
        audioText: 'I clocked in on time at eight o’clock this morning.',
        phonetics: '/aɪ klɒkt ɪn ɒn taɪm æt eɪt əˈklɒk ðɪs ˈmɔːrnɪŋ/',
        explanation: '"Clocked in" = Đã quẹt vân tay / chấm công vào ca làm việc.',
        whyWrong: '"On time" = Đúng giờ quy định (khác với "in time" = kịp lúc trước hạn chót).',
        crucialNote: 'Quy định giờ vào ca hành chính là 8:00 sáng.',
        memoryHook: 'Clock in = Chấm công vào; Clock out = Chấm công về.'
      }
    ]
  },
  {
    id: 'unit-10',
    unitNumber: 10,
    title: 'Phòng Kế Toán & Tài Chính (Accounting)',
    subtitle: 'Hóa đơn đỏ (VAT Invoice), thanh toán chuyển khoản và hoàn ứng chi phí',
    level: 'A2',
    icon: '💵',
    color: 'cyan',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u10-e1',
        type: 'speak',
        promptEn: 'Ask the accounting team about the reimbursement status for travel expenses:',
        promptVi: 'Luyện nói câu hỏi phòng kế toán về tiến độ hoàn ứng chi phí công tác:',
        englishSentence: 'Could you please check my expense reimbursement status?',
        audioText: 'Could you please check my expense reimbursement status?',
        phonetics: '/kʊd juː pliːz tʃɛk maɪ ɪkˈspɛns ˌriːɪmˈbɜːrsmənt ˈsteɪtəs/',
        explanation: '"Expense reimbursement" = Hoàn ứng thanh toán chi phí công tác đã chi trả trước.',
        whyWrong: 'Phát âm rõ từ "Reimbursement" (/ˌriːɪmˈbɜːrsmənt/).',
        crucialNote: 'Kèm theo hóa đơn đỏ VAT và phiếu duyệt chi của trưởng bộ phận.',
        memoryHook: 'Reimbursement = Hoàn ứng chi phí.'
      },
      {
        id: 'u10-e2',
        type: 'choice',
        promptEn: 'What is the correct English term for an official tax invoice in business transactions?',
        promptVi: 'Thuật ngữ tiếng Anh chuẩn xác cho hóa đơn giá trị gia tăng (Hóa đơn VAT / Hóa đơn đỏ):',
        englishSentence: 'Please send us the official VAT invoice with our company tax code.',
        audioText: 'Please send us the official VAT invoice with our company tax code.',
        options: [
          'Please send us the official VAT invoice with our company tax code.',
          'Give us a piece of paper with handwriting.',
          'Tax is free, we do not need invoices.'
        ],
        correctIndex: 0,
        explanation: '"Official VAT invoice" = Hóa đơn giá trị gia tăng chính thức; "Company tax code" = Mã số thuế doanh nghiệp.',
        whyWrong: 'Rất quan trọng trong mọi giao dịch mua bán B2B để quyết toán thuế hợp lệ.',
        crucialNote: 'Luôn kiểm tra đúng tên công ty: CÔNG TY CỔ PHẦN NƯỚC KHOÁNG KHÁNH HÒA.',
        memoryHook: 'VAT invoice = Hóa đơn tài chính hợp lệ.'
      },
      {
        id: 'u10-e3',
        type: 'word_order',
        promptEn: 'Arrange the sentence confirming that the supplier payment has been wired:',
        promptVi: 'Sắp xếp câu kế toán xác nhận đã chuyển khoản thanh toán cho nhà cung cấp:',
        englishSentence: 'The payment has been transferred to your bank account.',
        audioText: 'The payment has been transferred to your bank account.',
        phonetics: '/ðə ˈpeɪmənt hæz biːn trænsˈfɜːrd tuː jʊər bæŋk əˈkaʊnt/',
        wordPool: ['The', 'payment', 'has', 'been', 'transferred', 'to', 'your', 'bank', 'account.', 'lost', 'cash'],
        explanation: '"Payment has been transferred" = Tiền thanh toán đã được chuyển khoản thành công.',
        whyWrong: 'Gửi kèm điện chuyển tiền (Bank slip / Payment advice) qua email cho đối tác.',
        crucialNote: 'Cấu trúc bị động thì hiện tại hoàn thành chuẩn xác trong nghiệp vụ tài chính.',
        memoryHook: 'Payment transferred = Đã chuyển khoản thanh toán.'
      },
      {
        id: 'u10-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the accountant stating the payment due date and select the correct day:',
        promptVi: 'Nghe kế toán viên thông báo hạn chót thanh toán và chọn ngày đúng:',
        englishSentence: 'All invoices must be settled before the twenty-fifth of this month.',
        audioText: 'All invoices must be settled before the twenty-fifth of this month.',
        options: [
          'Trước ngày 25 của tháng này (Twenty-fifth)',
          'Trước ngày 15 của tháng này',
          'Vào ngày cuối cùng của năm'
        ],
        correctIndex: 0,
        explanation: '"Twenty-fifth of this month" = Ngày 25 của tháng này. "Settled" = Quyết toán / Thanh toán dứt điểm.',
        whyWrong: 'Nộp hóa đơn trước ngày 25 để kế toán kịp khóa sổ chu kỳ tháng.',
        crucialNote: 'Từ "settled" đồng nghĩa với "paid in full".',
        memoryHook: 'Settle invoices = Quyết toán hóa đơn.'
      }
    ]
  },
  {
    id: 'unit-11',
    unitNumber: 11,
    title: 'Phòng Marketing & Thương Hiệu (Branding)',
    subtitle: 'Chiến dịch truyền thông, sự kiện quảng bá và bộ nhận diện thương hiệu',
    level: 'A2',
    icon: '📢',
    color: 'blue',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u11-e1',
        type: 'word_order',
        promptEn: 'Arrange the sentence describing the launch of a new product campaign:',
        promptVi: 'Sắp xếp câu: "Chúng tôi đang khởi động một chiến dịch quảng bá thương hiệu mới."',
        englishSentence: 'We are launching a new brand awareness campaign.',
        audioText: 'We are launching a new brand awareness campaign.',
        phonetics: '/wiː ɑːr ˈlɔːntʃɪŋ ə njuː brænd əˈwɛərnəs kæmˈpeɪn/',
        wordPool: ['We', 'are', 'launching', 'a', 'new', 'brand', 'awareness', 'campaign.', 'stop', 'old'],
        explanation: '"Brand awareness campaign" = Chiến dịch nâng cao độ nhận diện thương hiệu trong tâm trí người tiêu dùng.',
        whyWrong: '"Launching" nghĩa là tung ra / khởi động một chiến dịch lớn.',
        crucialNote: 'Mục tiêu truyền thông đưa thông điệp "Nước khoáng kiềm thiên nhiên" lan tỏa toàn quốc.',
        memoryHook: 'Brand awareness = Độ nhận biết thương hiệu.'
      },
      {
        id: 'u11-e2',
        type: 'speak',
        promptEn: 'State the importance of brand consistency across social media channels:',
        promptVi: 'Luyện nói câu nhấn mạnh sự đồng bộ hình ảnh trên các kênh truyền thông:',
        englishSentence: 'We must maintain consistent brand guidelines across all channels.',
        audioText: 'We must maintain consistent brand guidelines across all channels.',
        phonetics: '/wiː mʌst meɪnˈteɪn kənˈsɪstənt brænd ˈɡaɪdlaɪnz əˈkrɒs ɔːl ˈtʃænlz/',
        explanation: '"Brand guidelines" = Bộ quy chuẩn nhận diện thương hiệu (logo, màu sắc xanh ngọc, font chữ).',
        whyWrong: 'Đồng bộ giúp khách hàng nhìn thấy logo là nhớ ngay đến thương hiệu Vikoda.',
        crucialNote: 'Phát âm rõ từ "Consistent" (/kənˈsɪstənt/ - nhất quán, đồng bộ).',
        memoryHook: 'Brand guidelines = Cẩm nang nhận diện thương hiệu.'
      },
      {
        id: 'u11-e3',
        type: 'choice',
        promptEn: 'Which phrase describes sponsoring a sports marathon event with Vikoda water?',
        promptVi: 'Cụm từ nào mô tả việc Vikoda tài trợ nước khoáng cho giải chạy marathon thể thao:',
        englishSentence: 'Vikoda is the official hydration sponsor for the national marathon.',
        audioText: 'Vikoda is the official hydration sponsor for the national marathon.',
        options: [
          'Vikoda is the official hydration sponsor for the national marathon.',
          'Vikoda sells dirty drinks to runners.',
          'Marathon runners cannot drink any mineral water.'
        ],
        correctIndex: 0,
        explanation: '"Official hydration sponsor" = Nhà tài trợ nước uống chính thức bù khoáng cho vận động viên.',
        whyWrong: 'Nước khoáng kiềm Vikoda bù khoáng cực nhanh, chống chuột rút và kiệt sức cho người chạy.',
        crucialNote: 'Cụm từ "Hydration sponsor" rất hay xuất hiện trong các bản tin thể thao quốc tế.',
        memoryHook: 'Hydration sponsor = Nhà tài trợ nước uống bù khoáng.'
      },
      {
        id: 'u11-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the marketing specialist discussing social media engagement:',
        promptVi: 'Nghe chuyên viên marketing báo cáo về tương tác trên trang fanpage mạng xã hội:',
        englishSentence: 'Our customer engagement increased by thirty percent this quarter.',
        audioText: 'Our customer engagement increased by thirty percent this quarter.',
        options: [
          'Tương tác khách hàng tăng 30% trong quý này (Thirty percent)',
          'Tương tác giảm 50%',
          'Không có khách hàng nào quan tâm'
        ],
        correctIndex: 0,
        explanation: '"Customer engagement increased by 30%" = Tương tác khách hàng tăng trưởng 30%.',
        whyWrong: 'Số liệu chứng minh chiến dịch truyền thông video đang thu hút sự chú ý rất lớn.',
        crucialNote: '"Quarter" = Quý kinh doanh (3 tháng).',
        memoryHook: 'Customer engagement = Mức độ tương tác của khách hàng.'
      }
    ]
  },
  {
    id: 'unit-12',
    unitNumber: 12,
    title: 'Phòng Kinh Doanh Bán Hàng (Sales Team)',
    subtitle: 'Tiếp nhận đơn hàng, gửi bảng báo giá và chăm sóc đại lý phân phối',
    level: 'A2',
    icon: '💼',
    color: 'purple',
    xpReward: 35,
    gemReward: 10,
    exercises: [
      {
        id: 'u12-e1',
        type: 'choice',
        promptEn: 'What is the most professional way to tell a distributor you are sending the price quotation?',
        promptVi: 'Cách chuyên nghiệp nhất để báo với đại lý rằng bạn đang gửi bảng báo giá:',
        englishSentence: 'Please find our updated wholesale price quotation attached below.',
        audioText: 'Please find our updated wholesale price quotation attached below.',
        options: [
          'Please find our updated wholesale price quotation attached below.',
          'Look at this price and give me money.',
          'Our water has no price list.'
        ],
        correctIndex: 0,
        explanation: '"Please find... attached below" là mẫu câu gửi file đính kèm kinh điển trong thư thương mại.',
        whyWrong: '"Wholesale price quotation" = Bảng báo giá bán buôn cho đại lý.',
        crucialNote: 'Luôn gửi bảng giá dưới dạng file PDF có chữ ký và con dấu công ty.',
        memoryHook: 'Wholesale price = Giá bán buôn/giá sỉ.'
      },
      {
        id: 'u12-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence confirming the Minimum Order Quantity for free delivery:',
        promptVi: 'Sắp xếp câu: "Số lượng đặt hàng tối thiểu để được giao hàng miễn phí là 20 thùng."',
        englishSentence: 'The minimum order quantity for free delivery is twenty cartons.',
        audioText: 'The minimum order quantity for free delivery is twenty cartons.',
        phonetics: '/ðə ˈmɪnɪməm ˈɔːrdər ˈkwɒntəti fɔːr friː dɪˈlɪvəri ɪz ˈtwɛnti ˈkɑːrtənz/',
        wordPool: ['The', 'minimum', 'order', 'quantity', 'for', 'free', 'delivery', 'is', 'twenty', 'cartons.', 'one'],
        explanation: 'Thuật ngữ "Minimum Order Quantity" (viết tắt là MOQ) là số lượng đặt hàng tối thiểu.',
        whyWrong: 'Carton = Thùng giấy carton (khác với crate = két nhựa chai thủy tinh).',
        crucialNote: 'Chính sách này giúp tối ưu hóa chi phí vận chuyển của đội xe giao hàng.',
        memoryHook: 'MOQ = Số lượng đặt hàng tối thiểu.'
      },
      {
        id: 'u12-e3',
        type: 'speak',
        promptEn: 'Assure the customer that product availability is guaranteed at all times:',
        promptVi: 'Luyện nói câu cam kết hàng luôn có sẵn dồi dào, không lo đứt hàng:',
        englishSentence: 'We always maintain sufficient inventory to meet your demands.',
        audioText: 'We always maintain sufficient inventory to meet your demands.',
        phonetics: '/wiː ˈɔːlweɪz meɪnˈteɪn səˈfɪʃnt ˈɪnvəntɔːri tuː miːt jʊər dɪˈmændz/',
        explanation: '"Sufficient inventory" = Lượng hàng tồn kho dồi dào, đáp ứng tốt nhu cầu bán hàng cao điểm.',
        whyWrong: 'Cam kết nguồn cung ổn định là tiêu chí then chốt để đại lý yên tâm nhập hàng.',
        crucialNote: 'Phát âm từ "Sufficient" (/səˈfɪʃnt/ - đầy đủ).',
        memoryHook: 'Meet your demands = Đáp ứng trọn vẹn nhu cầu của bạn.'
      },
      {
        id: 'u12-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the sales supervisor confirming the delivery lead time:',
        promptVi: 'Nghe giám sát bán hàng xác nhận thời gian giao hàng sau khi chốt đơn:',
        englishSentence: 'We will dispatch your order within twenty-four hours of confirmation.',
        audioText: 'We will dispatch your order within twenty-four hours of confirmation.',
        options: [
          'Giao hàng trong vòng 24 giờ sau khi xác nhận đơn (Within twenty-four hours)',
          'Giao hàng sau 1 tháng',
          'Khách hàng phải tự đến nhà máy bốc hàng'
        ],
        correctIndex: 0,
        explanation: '"Dispatch within 24 hours" = Xuất kho giao hàng trong vòng 24 giờ.',
        whyWrong: 'Tốc độ giao hàng nhanh là lợi thế cạnh tranh hàng đầu của hệ thống phân phối Vikoda.',
        crucialNote: '"Dispatch" nghĩa là điều xe xuất hàng đi giao.',
        memoryHook: 'Dispatch within 24 hours = Giao hàng hỏa tốc trong 24h.'
      }
    ]
  },
  {
    id: 'unit-13',
    unitNumber: 13,
    title: 'Nhà Máy & Quản Lý Chất Lượng (QC/QA)',
    subtitle: 'Dây chuyền chiết rót, kiểm định vi sinh và vệ sinh an toàn thực phẩm',
    level: 'A2',
    icon: '🔬',
    color: 'amber',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u13-e1',
        type: 'word_order',
        promptEn: 'Arrange the sentence stating that every batch is strictly tested before release:',
        promptVi: 'Sắp xếp câu: "Mỗi lô hàng đều được kiểm nghiệm nghiêm ngặt trước khi xuất xưởng."',
        englishSentence: 'Every batch is strictly tested before leaving the factory.',
        audioText: 'Every batch is strictly tested before leaving the factory.',
        phonetics: '/ˈɛvri bætʃ ɪz ˈstrɪktli ˈtɛstɪd bɪˈfɔːr ˈliːvɪŋ ðə ˈfæktəri/',
        wordPool: ['Every', 'batch', 'is', 'strictly', 'tested', 'before', 'leaving', 'the', 'factory.', 'dirty', 'bad'],
        explanation: '"Batch" = Lô sản xuất. "Strictly tested" = Được kiểm định nghiêm ngặt.',
        whyWrong: 'Quy trình QA/QC kiểm tra độ pH, vi sinh và chỉ số khoáng trên từng ca máy.',
        crucialNote: 'Đảm bảo 100% sản phẩm đến tay người tiêu dùng đều đạt chuẩn an toàn vệ sinh.',
        memoryHook: 'Strictly tested = Kiểm tra nghiêm ngặt.'
      },
      {
        id: 'u13-e2',
        type: 'choice',
        promptEn: 'Which sentence best describes modern automated bottling technology at the plant?',
        promptVi: 'Câu nào mô tả chuẩn xác công nghệ đóng chai tự động hóa khép kín tại nhà máy:',
        englishSentence: 'Our automated bottling lines ensure zero contamination from human hands.',
        audioText: 'Our automated bottling lines ensure zero contamination from human hands.',
        options: [
          'Our automated bottling lines ensure zero contamination from human hands.',
          'Workers pour water by plastic cups into bottles.',
          'The factory has no inspection equipment.'
        ],
        correctIndex: 0,
        explanation: '"Zero contamination from human hands" = Không bị nhiễm khuẩn từ tay người nhờ dây chuyền tự động hóa 100%.',
        whyWrong: 'Nhà máy Vikoda sở hữu các dây chuyền nhập khẩu hiện đại từ Đức và Ý.',
        crucialNote: 'Phòng chiết rót đạt tiêu chuẩn phòng sạch vô trùng cao nhất.',
        memoryHook: 'Zero contamination = Hoàn toàn không nhiễm khuẩn.'
      },
      {
        id: 'u13-e3',
        type: 'speak',
        promptEn: 'Practice stating compliance with international food safety certifications:',
        promptVi: 'Luyện nói câu khẳng định nhà máy tuân thủ tiêu chuẩn an toàn thực phẩm ISO và HACCP:',
        englishSentence: 'Our manufacturing plant strictly complies with ISO and HACCP standards.',
        audioText: 'Our manufacturing plant strictly complies with ISO and HACCP standards.',
        phonetics: '/aʊər ˌmænjuˈfæktʃərɪŋ plɑːnt ˈstrɪktli kəmˈplaɪz wɪð ˈaɪsoʊ ænd ˈhæsæp ˈstændərdz/',
        explanation: '"Complies with ISO and HACCP" = Tuân thủ tiêu chuẩn quản lý chất lượng và phân tích mối nguy an toàn thực phẩm quốc tế.',
        whyWrong: 'Đây là hai bảo chứng quốc tế vững chắc nhất về chất lượng xuất khẩu.',
        crucialNote: 'Phát âm chuẩn từ "Manufacturing" (/ˌmænjuˈfæktʃərɪŋ/).',
        memoryHook: 'Complies with standards = Tuân thủ tiêu chuẩn quốc tế.'
      },
      {
        id: 'u13-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the QA manager explaining the frequency of water sample testing:',
        promptVi: 'Nghe trưởng phòng QA giải thích về tần suất kiểm tra mẫu nước tại phòng thí nghiệm:',
        englishSentence: 'We conduct physical and chemical laboratory tests every two hours.',
        audioText: 'We conduct physical and chemical laboratory tests every two hours.',
        options: [
          'Kiểm tra mẫu nước tại phòng thí nghiệm mỗi 2 giờ một lần (Every two hours)',
          'Kiểm tra mỗi năm một lần',
          'Không bao giờ kiểm tra mẫu nước'
        ],
        correctIndex: 0,
        explanation: '"Every two hours" = 2 tiếng một lần. Tần suất lấy mẫu liên tục đảm bảo độ ổn định tuyệt đối của độ pH 9.0.',
        whyWrong: 'Mẫu lưu được bảo quản trong phòng mẫu suốt 24 tháng theo hạn sử dụng.',
        crucialNote: '"Laboratory tests" = Các xét nghiệm tại phòng thí nghiệm chuyên sâu.',
        memoryHook: 'Every two hours = Định kỳ mỗi 2 giờ.'
      }
    ]
  },
  {
    id: 'unit-14',
    unitNumber: 14,
    title: 'Kho Vận & Hậu Cần (Logistics & Warehouse)',
    subtitle: 'Quản lý tồn kho, đóng gói pallet, xếp dỡ thùng hàng và xe tải vận chuyển',
    level: 'A2',
    icon: '🚛',
    color: 'emerald',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u14-e1',
        type: 'choice',
        promptEn: 'How to notify the warehouse team about a ready shipment for delivery:',
        promptVi: 'Cách thông báo với đội kho rằng lô hàng đã được đóng gói sẵn sàng để bốc lên xe:',
        englishSentence: 'The pallets are wrapped and ready for truck loading.',
        audioText: 'The pallets are wrapped and ready for truck loading.',
        options: [
          'The pallets are wrapped and ready for truck loading.',
          'Throw the loose bottles on the ground.',
          'The truck driver ran away.'
        ],
        correctIndex: 0,
        explanation: '"Pallets are wrapped" = Các kiện hàng đã được quấn màng co bảo vệ và sẵn sàng bốc lên xe tải.',
        whyWrong: 'Quấn màng co giúp thùng hàng không bị xê dịch, đổ vỡ khi xe tải di chuyển trên đường dài.',
        crucialNote: 'Pallet là quy cách xếp hàng tiêu chuẩn trong kho logistics hiện đại.',
        memoryHook: 'Ready for loading = Sẵn sàng bốc hàng lên xe.'
      },
      {
        id: 'u14-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence asking about the current stock level of 500ml bottles:',
        promptVi: 'Sắp xếp câu hỏi lượng tồn kho của chai Vikoda 500ml còn bao nhiêu thùng:',
        englishSentence: 'How many cartons of 500ml are left in stock?',
        audioText: 'How many cartons of five hundred ml are left in stock?',
        phonetics: '/haʊ ˈmɛni ˈkɑːrtənz əv faɪv ˈhʌndrəd ɛm-ɛl ɑːr lɛft ɪn stɒk/',
        wordPool: ['How', 'many', 'cartons', 'of', '500ml', 'are', 'left', 'in', 'stock?', 'buy', 'lost'],
        explanation: '"Left in stock" = Còn tồn trong kho hàng.',
        whyWrong: 'Câu hỏi hằng ngày giữa nhân viên kinh doanh và thủ kho để biết lượng hàng có sẵn giao khách.',
        crucialNote: 'Tra cứu nhanh trên hệ thống phần mềm DMS trước khi nhận đơn hàng số lượng lớn.',
        memoryHook: 'In stock = Có sẵn trong kho.'
      },
      {
        id: 'u14-e3',
        type: 'speak',
        promptEn: 'Practice instructing warehouse staff to handle glass bottles with extra care:',
        promptVi: 'Luyện nói câu nhắc nhở bốc dỡ chai thủy tinh nhẹ tay, cẩn thận:',
        englishSentence: 'Please handle with care because these are fragile glass bottles.',
        audioText: 'Please handle with care because these are fragile glass bottles.',
        phonetics: '/pliːz ˈhændl wɪð kɛər bɪˈkɒz ðiːz ɑːr ˈfrædʒaɪl ɡlæs ˈbɒtlz/',
        explanation: '"Handle with care" = Nhẹ tay cẩn thận. "Fragile" = Hàng dễ vỡ.',
        whyWrong: 'Két chai thủy tinh cần chèn lót kỹ càng trên thùng xe tải để tránh va đập.',
        crucialNote: 'Biểu tượng chiếc ly vỡ là ký hiệu quốc tế in trên mọi thùng hàng chai thủy tinh.',
        memoryHook: 'Handle with care = Nhẹ tay, hàng dễ vỡ.'
      },
      {
        id: 'u14-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the warehouse supervisor confirming inventory count status:',
        promptVi: 'Nghe thủ kho xác nhận tình trạng kiểm kê định kỳ cuối tháng:',
        englishSentence: 'We have completed the monthly stock audit with zero discrepancies.',
        audioText: 'We have completed the monthly stock audit with zero discrepancies.',
        options: [
          'Đã hoàn thành kiểm kê kho tháng, số liệu khớp hoàn toàn không chênh lệch (Zero discrepancies)',
          'Mất tích một nửa số hàng trong kho',
          'Chưa bắt đầu kiểm kho'
        ],
        correctIndex: 0,
        explanation: '"Zero discrepancies" = Số liệu thực tế trong kho khớp 100% với số liệu trên sổ sách kế toán.',
        whyWrong: 'Thể hiện tính kỷ luật và chính xác tuyệt đối trong quản lý tài sản kho bãi Vikoda.',
        crucialNote: '"Stock audit" = Kỳ kiểm kê hàng tồn kho.',
        memoryHook: 'Zero discrepancies = Số liệu khớp 100% không sai lệch.'
      }
    ]
  },
  {
    id: 'unit-15',
    unitNumber: 15,
    title: 'Kỹ Năng Viết Email Công Sở (Workplace Email)',
    subtitle: 'Cập nhật tiến độ dự án, gửi file đính kèm và xin ý kiến phê duyệt',
    level: 'A2',
    icon: '✉️',
    color: 'cyan',
    xpReward: 40,
    gemReward: 12,
    exercises: [
      {
        id: 'u15-e1',
        type: 'choice',
        promptEn: 'What is the most polite opening line for a business update email to your team?',
        promptVi: 'Câu mở đầu email cập nhật tiến độ công việc cho đồng nghiệp tự nhiên và trang trọng nhất:',
        englishSentence: 'I hope this email finds you well. Here is a brief update on our progress.',
        audioText: 'I hope this email finds you well. Here is a brief update on our progress.',
        options: [
          'I hope this email finds you well. Here is a brief update on our progress.',
          'Hey you, read this now because I am tired.',
          'Why are you not looking at my work?'
        ],
        correctIndex: 0,
        explanation: '"I hope this email finds you well" là lời chào mở đầu chuẩn mực và ấm áp hàng đầu trong thư điện tử công sở.',
        whyWrong: '"Brief update on our progress" = Báo cáo tóm tắt tiến độ công việc.',
        crucialNote: 'Giúp người nhận nắm bắt ngay nội dung chính của email trong 5 giây đầu.',
        memoryHook: 'I hope this finds you well = Chúc bạn một ngày làm việc tốt lành.'
      },
      {
        id: 'u15-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence asking your manager for feedback and approval:',
        promptVi: 'Sắp xếp câu xin ý kiến đóng góp và phê duyệt từ cấp trên:',
        englishSentence: 'Please review the attached proposal and let me know your thoughts.',
        audioText: 'Please review the attached proposal and let me know your thoughts.',
        phonetics: '/pliːz rɪˈvjuː ði əˈtætʃt prəˈpoʊzl ænd lɛt miː noʊ jʊər θɔːts/',
        wordPool: ['Please', 'review', 'the', 'attached', 'proposal', 'and', 'let', 'me', 'know', 'your', 'thoughts.', 'bad'],
        explanation: '"Let me know your thoughts" = Cho tôi xin ý kiến chỉ đạo của anh/chị.',
        whyWrong: 'Câu xin ý kiến cầu thị, tôn trọng cấp trên nhưng vẫn thể hiện sự chủ động.',
        crucialNote: 'Kèm theo thời hạn mong muốn nhận phản hồi nếu là việc gấp: "by Friday 3 PM".',
        memoryHook: 'Let me know your thoughts = Xin cho tôi biết ý kiến của bạn.'
      },
      {
        id: 'u15-e3',
        type: 'speak',
        promptEn: 'Practice saying the classic professional email closing formula:',
        promptVi: 'Luyện nói câu kết email mong đợi nhận được phản hồi sớm từ đối tác:',
        englishSentence: 'I look forward to hearing from you soon.',
        audioText: 'I look forward to hearing from you soon.',
        phonetics: '/aɪ lʊk ˈfɔːrwərd tuː ˈhɪərɪŋ frəm juː suːn/',
        explanation: 'Quy tắc vàng ngữ pháp: "Look forward to + V-ING" (phải dùng hearing, không dùng hear).',
        whyWrong: 'Lỗi sai số 1 mà người Việt hay mắc khi viết email công sở.',
        crucialNote: 'Sau câu này, ký tên trang trọng: "Best regards, [Tên của bạn]".',
        memoryHook: 'Look forward to hearing = Rất mong sớm nhận được phản hồi.'
      },
      {
        id: 'u15-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the audio and select which attachment is mentioned in the email:',
        promptVi: 'Nghe đoạn trích email và chọn loại tệp đính kèm được nhắc tới:',
        englishSentence: 'Please find the monthly sales report attached in PDF format.',
        audioText: 'Please find the monthly sales report attached in PDF format.',
        options: [
          'Báo cáo doanh số bán hàng tháng định dạng PDF (Monthly sales report)',
          'Một file ảnh chụp màn hình bị mờ',
          'Một file nhạc chuông điện thoại'
        ],
        correctIndex: 0,
        explanation: '"Monthly sales report attached in PDF format" = Báo cáo doanh số tháng đính kèm định dạng PDF.',
        whyWrong: 'Nhớ đính kèm tệp trước khi bấm nút Gửi (Send) để tránh phải gửi lại email xin lỗi.',
        crucialNote: '"Please find attached" là cụm từ chỉ file đính kèm phổ biến nhất.',
        memoryHook: 'Attached report = Báo cáo đính kèm.'
      }
    ]
  },
  {
    id: 'unit-16',
    unitNumber: 16,
    title: 'Tham Gia Cuộc Họp Nội Bộ (Team Meeting)',
    subtitle: 'Báo cáo công việc đã xong, việc đang làm và đề xuất tháo gỡ vướng mắc',
    level: 'A2',
    icon: '🎯',
    color: 'emerald',
    xpReward: 45,
    gemReward: 15,
    exercises: [
      {
        id: 'u16-e1',
        type: 'choice',
        promptEn: 'In a 60-second Daily Standup meeting, what are the 3 golden updates you should share?',
        promptVi: 'Trong cuộc họp nhanh đầu ngày (Standup meeting), 3 ý vàng bạn cần báo cáo ngắn gọn là gì?',
        englishSentence: 'What I completed yesterday, what I plan to do today, and any blockers.',
        audioText: 'What I completed yesterday, what I plan to do today, and any blockers.',
        options: [
          'What I completed yesterday, what I plan to do today, and any blockers.',
          'Complaining about traffic and weather for ten minutes.',
          'Staying silent and saying nothing at all.'
        ],
        correctIndex: 0,
        explanation: 'Công thức 3 câu kinh điển quốc tế: Yesterday (Đã xong) + Today (Hôm nay làm gì) + Blockers (Có vướng mắc gì không).',
        whyWrong: 'Báo cáo súc tích dưới 60 giây giúp cả đội ngũ nắm bắt tiến độ mà không mất thời gian lan man.',
        crucialNote: 'Nếu không có vướng mắc, nói: "No blockers on my end, tracking on schedule!".',
        memoryHook: 'Yesterday - Today - Blockers = 3 câu thần chú báo cáo nhanh.'
      },
      {
        id: 'u16-e2',
        type: 'word_order',
        promptEn: 'Arrange the sentence asking to contribute a quick idea in the meeting:',
        promptVi: 'Sắp xếp câu xin phép bổ sung nhanh một ý kiến trong cuộc họp:',
        englishSentence: 'Could I quickly add one point regarding this issue?',
        audioText: 'Could I quickly add one point regarding this issue?',
        phonetics: '/kʊd aɪ ˈkwɪkli æd wʌn pɔɪnt rɪˈɡɑːrdɪŋ ðɪs ˈɪʃuː/',
        wordPool: ['Could', 'I', 'quickly', 'add', 'one', 'point', 'regarding', 'this', 'issue?', 'shout', 'no'],
        explanation: '"Could I quickly add one point...?" = Tôi có thể bổ sung nhanh một ý về vấn đề này không ạ?',
        whyWrong: 'Cách xin phát biểu văn minh, lịch sự, không cướp lời người khác.',
        crucialNote: 'Giúp cuộc họp diễn ra sôi nổi và mang tính xây dựng cao.',
        memoryHook: 'Add one point = Bổ sung một ý kiến.'
      },
      {
        id: 'u16-e3',
        type: 'speak',
        promptEn: 'Practice summarizing the action items before concluding the team meeting:',
        promptVi: 'Luyện nói câu tóm tắt đầu việc cần làm trước khi kết thúc cuộc họp:',
        englishSentence: 'To wrap up, I will send out the meeting summary and action items by noon.',
        audioText: 'To wrap up, I will send out the meeting summary and action items by noon.',
        phonetics: '/tuː ræp ʌp, aɪ wɪl sɛnd aʊt ðə ˈmiːtɪŋ ˈsʌməri ænd ˈækʃn ˈaɪtəmz baɪ nuːn/',
        explanation: '"To wrap up" = Để tóm tắt lại trước khi bế mạc. "Action items" = Các đầu việc cụ thể phân công cho từng người.',
        whyWrong: 'Mọi cuộc họp thành công đều phải kết thúc bằng danh sách Action Items rõ ràng.',
        crucialNote: 'Chúc mừng bạn đã hoàn thành trọn vẹn Cấp độ 2: Tiếng Anh Đa Phòng Ban!',
        memoryHook: 'Action items = Đầu việc cần thực hiện.'
      },
      {
        id: 'u16-e4',
        type: 'listen_choice',
        promptEn: 'Listen to the meeting leader concluding the session and select their closing wish:',
        promptVi: 'Lắng nghe chủ tọa tuyên bố kết thúc buổi họp và chọn lời chúc cuối:',
        englishSentence: 'Thank you everyone for your active participation. Let us have a productive week!',
        audioText: 'Thank you everyone for your active participation. Let us have a productive week!',
        options: [
          'Cảm ơn mọi người đã tham gia tích cực, chúc cả team có một tuần làm việc hiệu quả!',
          'Buổi họp thất bại hoàn toàn, không ai được về',
          'Mời mọi người ở lại họp tiếp thêm 3 tiếng nữa'
        ],
        correctIndex: 0,
        explanation: '"Productive week" = Một tuần làm việc năng suất và hiệu quả cao.',
        whyWrong: 'Lời chúc truyền cảm hứng và tinh thần trách nhiệm cho toàn thể đồng đội.',
        crucialNote: 'Văn hóa họp kỷ luật, đúng giờ và tràn đầy năng lượng tích cực.',
        memoryHook: 'Productive week = Tuần làm việc năng suất cao.'
      }
    ]
  }
];
