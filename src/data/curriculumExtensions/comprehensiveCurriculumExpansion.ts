import { LessonExercise } from '../curriculumData';

/**
 * COMPREHENSIVE CURRICULUM EXPANSION:
 * Đảm bảo 100% 40 bài học (Units 1 đến 40) đều có tối thiểu 6 - 8 bài tập tương tác chuyên sâu.
 * Gộp toàn bộ kiến thức Pitching khoáng kiềm, Xử lý từ chối B2B và Soạn thư xuất khẩu vào trục tiến trình chính.
 */
export const COMPREHENSIVE_EXPANSION_EXERCISES: Record<string, LessonExercise[]> = {
  // UNIT 8: Tiễn Khách Chu Đáo & Quà Lưu Niệm
  'unit-8': [
    {
      id: 'exp-u8-1',
      type: 'speak',
      promptEn: 'Say goodbye warmly and escort the foreign guest to their car:',
      promptVi: 'Luyện nói câu tiễn khách chu đáo ra tận xe ô tô:',
      englishSentence: 'Thank you for your visit today! Allow me to escort you downstairs to your taxi.',
      audioText: 'Thank you for your visit today! Allow me to escort you downstairs to your taxi.',
      phonetics: '/θæŋk juː fɔːr jʊər ˈvɪzɪt təˈdeɪ! əˈlaʊ miː tuː ɪˈskɔːrt juː ˌdaʊnˈstɛərz tuː jʊər ˈtæksi/',
      explanation: '"Escort you downstairs" thể hiện sự hiếu khách, lịch thiệp và tôn trọng đối tác.',
      whyWrong: 'Không bao giờ để khách tự đi tìm lối ra sau buổi họp.',
      crucialNote: 'Tặng khách một chai thủy tinh Vikoda làm quà lưu niệm cầm tay.',
      memoryHook: 'Escort to taxi = Tiễn khách ra tận xe.'
    },
    {
      id: 'exp-u8-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence wishing the guest a safe flight back home:',
      promptVi: 'Sắp xếp câu: "Chúc bạn có chuyến bay an toàn và sớm quay trở lại Việt Nam!":',
      englishSentence: 'Have a safe flight back home and we hope to see you again soon!',
      audioText: 'Have a safe flight back home and we hope to see you again soon!',
      phonetics: '/hæv ə seɪf flaɪt bæk hoʊm ænd wiː hoʊp tuː siː juː əˈɡɛn suːn/',
      wordPool: ['Have', 'a', 'safe', 'flight', 'back', 'home', 'and', 'we', 'hope', 'to', 'see', 'you', 'again', 'soon!'],
      explanation: '"Have a safe flight back home" là lời chúc ấm áp trước khi khách ra sân bay.',
      whyWrong: 'Lời chúc chân thành để lại ấn tượng tốt đẹp lâu dài.',
      crucialNote: 'Kèm theo lời cảm ơn đối tác đã dành thời gian quý báu.',
      memoryHook: 'Safe flight back home = Chuyến bay về nhà bình an.'
    }
  ],

  // UNIT 9: Phòng Nhân Sự & Văn Hóa Doanh Nghiệp Vikoda
  'unit-9': [
    {
      id: 'exp-u9-1',
      type: 'speak',
      promptEn: 'Welcome a new international hire with the company core values:',
      promptVi: 'Luyện nói câu chào đón nhân viên mới gia nhập Vikoda cùng giá trị cốt lõi:',
      englishSentence: 'Welcome aboard! Our company culture cherishes integrity, disciplined teamwork, and continuous growth.',
      audioText: 'Welcome aboard! Our company culture cherishes integrity, disciplined teamwork, and continuous growth.',
      phonetics: '/ˈwɛlkəm əˈbɔːrd! ˈaʊər ˈkʌmpəni ˈkʌltʃər ˈtʃɛrɪʃɪz ɪnˈtɛɡrəti, ˈdɪsəplɪnd ˈtiːmwɜːrk, ænd kənˈtɪnjuəs ɡroʊθ/',
      explanation: '"Welcome aboard" là câu chào mừng nhân sự mới kinh điển và trang trọng.',
      whyWrong: 'Nhấn vào ba giá trị: integrity (chính trực), teamwork (đồng đội), continuous growth (phát triển liên tục).',
      crucialNote: 'Thể hiện niềm tự hào văn hóa doanh nghiệp của Vikoda.',
      memoryHook: 'Welcome aboard = Chào mừng gia nhập đội ngũ.'
    },
    {
      id: 'exp-u9-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence regarding employee healthcare and natural mineral hydration:',
      promptVi: 'Sắp xếp câu: "Mọi nhân viên đều được cung cấp nước khoáng kiềm tự nhiên miễn phí mỗi ngày."',
      englishSentence: 'Every employee is provided with complimentary natural alkaline mineral water every single day.',
      audioText: 'Every employee is provided with complimentary natural alkaline mineral water every single day.',
      phonetics: '/ˈɛvri ɪmˈplɔɪiː ɪz prəˈvaɪdɪd wɪð ˌkɒmplɪˈmɛntri ˈnætʃrəl ˈælkəlaɪn ˈmɪnərəl ˈwɔːtər ˈɛvri ˈsɪŋɡl deɪ/',
      wordPool: ['Every', 'employee', 'is', 'provided', 'with', 'complimentary', 'natural', 'alkaline', 'mineral', 'water', 'every', 'single', 'day.', 'buy'],
      explanation: '"Complimentary" = Được cung cấp miễn phí (chế độ đãi ngộ phúc lợi).',
      whyWrong: 'Thể hiện sự quan tâm trực tiếp đến sức khỏe của người lao động.',
      crucialNote: 'Uống đủ 2 lít Vikoda mỗi ngày giúp duy trì năng lượng làm việc bền bỉ.',
      memoryHook: 'Complimentary mineral water = Nước khoáng phúc lợi miễn phí.'
    },
    {
      id: 'exp-u9-3',
      type: 'choice',
      promptEn: 'How should HR communicate the foreign language training allowance to team members?',
      promptVi: 'Phòng Nhân sự thông báo chính sách tài trợ học tiếng Anh doanh nghiệp như thế nào?',
      englishSentence: 'Vikoda fully sponsors enterprise English certifications to foster our global export leadership.',
      audioText: 'Vikoda fully sponsors enterprise English certifications to foster our global export leadership.',
      options: [
        'Vikoda fully sponsors enterprise English certifications to foster our global export leadership.',
        'Nobody needs to study English here.',
        'Employees must pay huge fines if they do not speak English.'
      ],
      correctIndex: 0,
      explanation: '"Fully sponsors" = Tài trợ 100% chi phí đào tạo và thi chứng chỉ quốc tế.',
      whyWrong: 'Khuyến khích nhân viên chủ động nâng cao năng lực hội nhập toàn cầu.',
      crucialNote: 'Chính sách đào tạo là đòn bẩy giữ chân nhân tài xuất sắc.',
      memoryHook: 'Fully sponsors training = Tài trợ toàn bộ chi phí học tập.'
    }
  ],

  // UNIT 10: Phòng Kế Toán & Quản Lý Chi Phí
  'unit-10': [
    {
      id: 'exp-u10-1',
      type: 'speak',
      promptEn: 'Remind sales staff about submitting business expense receipts before deadline:',
      promptVi: 'Luyện nói câu nhắc nhở nộp chứng từ chi phí tiếp khách trước ngày chốt sổ kế toán:',
      englishSentence: 'Please submit all client entertainment receipts with valid tax invoices before the monthly cut-off.',
      audioText: 'Please submit all client entertainment receipts with valid tax invoices before the monthly cut-off.',
      phonetics: '/pliːz səbˈmɪt ɔːl ˈklaɪənt ˌɛntərˈteɪnmənt rɪˈsiːts wɪð ˈvælɪd tæks ˈɪnvɔɪsɪz bɪˈfɔːr ðə ˈmʌnθli ˈkʌt ɒf/',
      explanation: '"Client entertainment receipts" = Hóa đơn chi phí tiếp khách. "Monthly cut-off" = Hạn chốt sổ tháng.',
      whyWrong: 'Hóa đơn bắt buộc phải có mã số thuế hợp lệ để quyết toán thuế doanh nghiệp.',
      crucialNote: 'Kế toán tuân thủ nghiêm ngặt nguyên tắc minh bạch tài chính.',
      memoryHook: 'Monthly cut-off = Hạn chốt sổ kế toán hàng tháng.'
    },
    {
      id: 'exp-u10-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence explaining cashflow optimization through prompt receivables:',
      promptVi: 'Sắp xếp câu: "Thu hồi công nợ đúng hạn giúp tối ưu hóa dòng tiền kinh doanh của công ty."',
      englishSentence: 'Prompt receivables collection optimizes corporate working capital and operational cash flow.',
      audioText: 'Prompt receivables collection optimizes corporate working capital and operational cash flow.',
      phonetics: '/prɒmpt rɪˈsiːvəblz kəˈlɛkʃn ˈɒptɪmaɪzɪz ˈkɔːrpərət ˈwɜːrkɪŋ ˈkæpɪtl ænd ˌɒpəˈreɪʃənl kæʃ floʊ/',
      wordPool: ['Prompt', 'receivables', 'collection', 'optimizes', 'corporate', 'working', 'capital', 'and', 'operational', 'cash', 'flow.', 'debt'],
      explanation: '"Receivables collection" = Thu hồi các khoản phải thu từ khách hàng.',
      whyWrong: 'Dòng tiền khỏe mạnh là huyết mạch cho các hoạt động đầu tư mở rộng nhà máy.',
      crucialNote: 'Kế toán phối hợp chặt chẽ với bộ phận kinh doanh để đốc thúc công nợ.',
      memoryHook: 'Working capital = Vốn lưu động doanh nghiệp.'
    },
    {
      id: 'exp-u10-3',
      type: 'choice',
      promptEn: 'What does the finance director confirm regarding the annual audit report?',
      promptVi: 'Giám đốc tài chính khẳng định điều gì về báo cáo kiểm toán độc lập hàng năm?',
      englishSentence: 'Our financial statements are audited independently by an international accounting firm.',
      audioText: 'Our financial statements are audited independently by an international accounting firm.',
      options: [
        'Our financial statements are audited independently by an international accounting firm.',
        'We hide all numbers under the carpet.',
        'Nobody checks our financial balance sheet.'
      ],
      correctIndex: 0,
      explanation: 'Báo cáo tài chính được kiểm toán độc lập bởi công ty kiểm toán uy tín (Big 4).',
      whyWrong: 'Minh bạch tài chính tạo niềm tin tuyệt đối cho các đối tác quốc tế và ngân hàng.',
      crucialNote: 'Là điều kiện bắt buộc khi nộp hồ sơ xin hạn mức tín dụng xuất khẩu.',
      memoryHook: 'Audited independently = Được kiểm toán độc lập khách quan.'
    }
  ],

  // UNIT 13: Nhà Máy & Tiêu Chuẩn Vô Trùng Krones
  'unit-13': [
    {
      id: 'exp-u13-1',
      type: 'speak',
      promptEn: 'Explain the automated bottling process without human contact:',
      promptVi: 'Luyện nói quy trình đóng chai tự động không chạm tay người tại nguồn mỏ:',
      englishSentence: 'Vikoda is bottled directly at the spring source within three minutes without human physical contact.',
      audioText: 'Vikoda is bottled directly at the spring source within three minutes without human physical contact.',
      phonetics: '/vɪˈkoʊdə ɪz ˈbɒtld dəˈrɛktli æt ðə sprɪŋ sɔːrs wɪðˈɪn θriː ˈmɪnɪts wɪðˈaʊt ˈhjuːmən ˈfɪzɪkl ˈkɒntækt/',
      explanation: '"Bottled directly at the spring source" = Đóng chai trực tiếp ngay tại nguồn mỏ khoáng.',
      whyWrong: 'Đóng chai trong vòng 3 phút giúp bảo tồn 100% vi khoáng và tính kiềm nguyên bản.',
      crucialNote: 'Không qua bất kỳ quá trình xử lý hóa chất hay điện phân nhân tạo nào.',
      memoryHook: 'Directly at spring source = Đóng chai trực tiếp tại nguồn.'
    },
    {
      id: 'exp-u13-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence describing positive air pressure in cleanrooms:',
      promptVi: 'Sắp xếp câu: "Khu vực chiết rót duy trì áp suất dương để ngăn chặn tuyệt đối bụi bẩn và vi khuẩn."',
      englishSentence: 'The bottling chamber maintains positive air pressure to prevent any dust or airborne bacteria.',
      audioText: 'The bottling chamber maintains positive air pressure to prevent any dust or airborne bacteria.',
      phonetics: '/ðə ˈbɒtlɪŋ ˈtʃeɪmbər meɪnˈteɪnz ˈpɒzətɪv ɛər ˈprɛʃər tuː prɪˈvɛnt ˈɛni dʌst ɔːr ˈɛərbɔːrn bækˈtɪəriə/',
      wordPool: ['The', 'bottling', 'chamber', 'maintains', 'positive', 'air', 'pressure', 'to', 'prevent', 'any', 'dust', 'or', 'airborne', 'bacteria.'],
      explanation: '"Positive air pressure" = Áp suất không khí dương (không khí chỉ thổi từ trong phòng sạch ra ngoài).',
      whyWrong: 'Là tiêu chuẩn phòng sạch áp dụng trong sản xuất dược phẩm và đồ uống vô trùng.',
      crucialNote: 'Khách hàng quốc tế đánh giá rất cao hệ thống phòng sạch này của Vikoda.',
      memoryHook: 'Positive air pressure = Áp suất dương ngăn vi khuẩn xâm nhập.'
    },
    {
      id: 'exp-u13-3',
      type: 'choice',
      promptEn: 'Which German manufacturing technology powers the entire Vikoda production plant?',
      promptVi: 'Dây chuyền công nghệ tự động hóa nào của Đức vận hành toàn bộ nhà máy Vikoda?',
      englishSentence: 'A cutting-edge automated bottling system engineered by Krones Germany.',
      audioText: 'A cutting-edge automated bottling system engineered by Krones Germany.',
      options: [
        'A cutting-edge automated bottling system engineered by Krones Germany.',
        'An ancient manual bicycle pump.',
        'A rusty secondhand machine with leaks.'
      ],
      correctIndex: 0,
      explanation: 'Hệ thống Krones Đức là dây chuyền chiết rót tốc độ cao, chính xác và đồng bộ hàng đầu thế giới.',
      whyWrong: 'Đầu tư triệu đô vào công nghệ Đức khẳng định quyết tâm nâng tầm thương hiệu quốc gia.',
      crucialNote: 'Krones Germany là bảo chứng kỹ thuật cho các thị trường khó tính như Nhật Bản và Mỹ.',
      memoryHook: 'Krones Germany = Công nghệ chiết rót đỉnh cao của Đức.'
    }
  ],

  // UNIT 15: Kỹ Năng Viết Email Công Sở
  'unit-15': [
    {
      id: 'exp-u15-1',
      type: 'speak',
      promptEn: 'Open a business email warmly acknowledging recent communications:',
      promptVi: 'Luyện nói câu mở đầu email thương mại lịch thiệp cảm ơn đối tác đã liên hệ:',
      englishSentence: 'Thank you for reaching out to Vikoda. I hope this email finds you having a productive week.',
      audioText: 'Thank you for reaching out to Vikoda. I hope this email finds you having a productive week.',
      phonetics: '/θæŋk juː fɔːr ˈriːtʃɪŋ aʊt tuː vɪˈkoʊdə. aɪ hoʊp ðɪs ˈiːmeɪl faɪndz juː ˈhævɪŋ ə prəˈdʌktɪv wiːk/',
      explanation: '"Thank you for reaching out" = Cảm ơn bạn đã liên hệ / gửi thư.',
      whyWrong: 'Mở đầu thân thiện tạo thiện cảm và mở ra không khí đàm phán cởi mở.',
      crucialNote: 'Lời chúc "productive week" rất phổ biến trong văn hóa thư từ Bắc Mỹ và Châu Âu.',
      memoryHook: 'Reaching out = Chủ động liên hệ hợp tác.'
    },
    {
      id: 'exp-u15-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence directing the client to the attached commercial quotation:',
      promptVi: 'Sắp xếp câu: "Xin vui lòng xem bảng báo giá chi tiết và chính sách chiết khấu đính kèm trong thư."',
      englishSentence: 'Please find attached our detailed commercial quotation and volume discount schedule for your review.',
      audioText: 'Please find attached our detailed commercial quotation and volume discount schedule for your review.',
      phonetics: '/pliːz faɪnd əˈtætʃt ˈaʊər ˈdiːteɪld kəˈmɜːrʃl kwoʊˈteɪʃn ænd ˈvɒljuːm ˈdɪskaʊnt ˈskɛdʒuːl fɔːr jʊər rɪˈvjuː/',
      wordPool: ['Please', 'find', 'attached', 'our', 'detailed', 'commercial', 'quotation', 'and', 'volume', 'discount', 'schedule', 'for', 'your', 'review.', 'see'],
      explanation: '"Please find attached [Document]" là cấu trúc tiêu chuẩn khi đính kèm file trong email.',
      whyWrong: 'Không viết thô: "I put the file here look at it".',
      crucialNote: 'Luôn kiểm tra kỹ file đính kèm trước khi nhấn gửi (Send).',
      memoryHook: 'Please find attached = Xin vui lòng xem tài liệu đính kèm.'
    },
    {
      id: 'exp-u15-3',
      type: 'choice',
      promptEn: 'What is the most professional sign-off formula when concluding a B2B negotiation email?',
      promptVi: 'Lời chào kết thư (Sign-off) chuẩn mực nhất trong email đàm phán hợp đồng kinh doanh quốc tế là gì?',
      englishSentence: 'Best regards, followed by full professional title and contact credentials.',
      audioText: 'Best regards, followed by full professional title and contact credentials.',
      options: [
        'Best regards, followed by full professional title and contact credentials.',
        'Bye bye see you whenever.',
        'Whatever you think is fine.'
      ],
      correctIndex: 0,
      explanation: '"Best regards" hoặc "Sincerely" là lời kết trang trọng, chuyên nghiệp.',
      whyWrong: 'Chữ ký email đầy đủ họ tên, chức danh, số điện thoại hotline và đường link website công ty.',
      crucialNote: 'Chữ ký email chuẩn xác định vị tính chính thống của doanh nghiệp.',
      memoryHook: 'Best regards = Trân trọng kính chào.'
    }
  ],

  // UNIT 16: Họp Nội Bộ & Điều Phối Báo Cáo
  'unit-16': [
    {
      id: 'exp-u16-1',
      type: 'speak',
      promptEn: 'Facilitate a smooth transition to the next strategic agenda item in a meeting:',
      promptVi: 'Luyện nói câu chuyển tiếp nội dung sang mục thảo luận tiếp theo trong cuộc họp:',
      englishSentence: 'If there are no further questions on logistics, let us move on to our quarterly export targets.',
      audioText: 'If there are no further questions on logistics, let us move on to our quarterly export targets.',
      phonetics: '/ɪf ðɛər ɑːr noʊ ˈfɜːrðər ˈkwɛstʃənz ɒn ləˈdʒɪstɪks, lɛt ʌs muːv ɒn tuː ˈaʊər ˈkwɔːrtərli ˈɛkspɔːrt ˈtɑːrɡɪts/',
      explanation: '"Move on to" = Chuyển tiếp sang nội dung tiếp theo.',
      whyWrong: 'Giúp cuộc họp đúng tiến độ (on schedule), không bị sa đà vào chi tiết vụn vặt.',
      crucialNote: 'Người điều phối cuộc họp cần giữ nhịp thảo luận dứt khoát và hiệu quả.',
      memoryHook: 'Move on to = Chuyển sang phần kế tiếp.'
    },
    {
      id: 'exp-u16-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence summarizing actionable next steps before adjourning:',
      promptVi: 'Sắp xếp câu: "Tôi xin tóm tắt các nhiệm vụ hành động chính và thời hạn hoàn thành cho từng phòng ban."',
      englishSentence: 'Let me summarize the key action items and assigned deadlines for each department.',
      audioText: 'Let me summarize the key action items and assigned deadlines for each department.',
      phonetics: '/lɛt miː ˈsʌməraɪz ðə kiː ˈækʃn ˈaɪtəmz ænd əˈsaɪnd ˈdɛdlaɪnz fɔːr iːtʃ dɪˈpɑːrtmənt/',
      wordPool: ['Let', 'me', 'summarize', 'the', 'key', 'action', 'items', 'and', 'assigned', 'deadlines', 'for', 'each', 'department.', 'plan'],
      explanation: '"Action items" = Các đầu mối công việc cụ thể phải thực thi sau cuộc họp.',
      whyWrong: 'Cuộc họp chỉ thành công khi có kết quả hành động và người chịu trách nhiệm rõ ràng.',
      crucialNote: 'Gửi biên bản cuộc họp (Meeting Minutes) trong vòng 24 giờ sau khi kết thúc.',
      memoryHook: 'Key action items = Các đầu việc hành động then chốt.'
    },
    {
      id: 'exp-u16-3',
      type: 'choice',
      promptEn: 'How should you voice a constructive alternative perspective during team brainstorming?',
      promptVi: 'Cách đưa ra góc nhìn phản biện mang tính xây dựng trong buổi thảo luận nhóm:',
      englishSentence: 'I see your point; however, have we considered the logistics cost impact on our export container margin?',
      audioText: 'I see your point; however, have we considered the logistics cost impact on our export container margin?',
      options: [
        'I see your point; however, have we considered the logistics cost impact on our export container margin?',
        'Your idea is completely stupid and wrong.',
        'I do not care what anyone says.'
      ],
      correctIndex: 0,
      explanation: 'Công thức: Ghi nhận ý kiến người khác ("I see your point") + Nêu câu hỏi gợi mở ("have we considered...").',
      whyWrong: 'Phản biện văn minh giúp tìm ra giải pháp tối ưu mà không gây chia rẽ nội bộ.',
      crucialNote: 'Tập trung vào dữ liệu và hiệu quả kinh doanh thay vì công kích cá nhân.',
      memoryHook: 'I see your point = Tôi hiểu góc nhìn của bạn.'
    }
  ],

  // UNIT 17: Bác Sĩ H. Fronte & Phân Tích Khoáng Pháp 1957
  'unit-17': [
    {
      id: 'exp-u17-1',
      type: 'speak',
      promptEn: 'State the historic discovery of Danh Thanh spring by French medical researchers in 1957:',
      promptVi: 'Luyện nói câu lịch sử phát hiện và kiểm định mỏ Đảnh Thạnh bởi các nhà khoa học Pháp năm 1957:',
      englishSentence: 'In 1957, Dr. H. Fronte and French geologists officially confirmed Danh Thanh as a rare therapeutic mineral spring.',
      audioText: 'In 1957, Dr. H. Fronte and French geologists officially confirmed Danh Thanh as a rare therapeutic mineral spring.',
      phonetics: '/ɪn ˈnaɪnˈtiːn ˈfɪfti sɛvn, ˈdɒktər eɪtʃ frɒnt ænd frɛntʃ dʒiˈɒlədʒɪsts əˈfɪʃəli kənˈfɜːrmd dɑːɲ tʰaɲ æz ə rɛər ˌθɛrəˈpjuːtɪk ˈmɪnərəl sprɪŋ/',
      explanation: 'Năm 1957 là mốc son khoa học: Bác sĩ Fronte đã lấy mẫu xét nghiệm và công bố giá trị y học của mỏ khoáng.',
      whyWrong: 'Bác bỏ hoàn toàn định kiến cho rằng Vikoda là thương hiệu mới nổi không có bề dày lịch sử.',
      crucialNote: 'Bề dày 70 năm là lợi thế cạnh tranh cốt lõi trước các nhãn hàng kiềm nhân tạo.',
      memoryHook: 'Therapeutic spring = Mỏ khoáng có giá trị trị liệu sức khỏe.'
    },
    {
      id: 'exp-u17-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence emphasizing that Danh Thanh is among the 12 most precious springs in Vietnam:',
      promptVi: 'Sắp xếp câu: "Mỏ Đảnh Thạnh được xếp hạng là một trong mười hai mỏ khoáng quý giá nhất Việt Nam."',
      englishSentence: 'Danh Thanh is officially recognized among the twelve most precious mineral springs nationwide.',
      audioText: 'Danh Thanh is officially recognized among the twelve most precious mineral springs nationwide.',
      phonetics: '/dɑːɲ tʰaɲ ɪz əˈfɪʃəli ˈrɛkəɡnaɪzd əˈmʌŋ ðə twɛlv moʊst ˈprɛʃəs ˈmɪnərəl sprɪŋz ˌneɪʃnˈwaɪd/',
      wordPool: ['Danh', 'Thanh', 'is', 'officially', 'recognized', 'among', 'the', 'twelve', 'most', 'precious', 'mineral', 'springs', 'nationwide.'],
      explanation: 'Top 12 mỏ khoáng quý hiếm nhất toàn quốc là niềm tự hào địa chất của tỉnh Khánh Hòa.',
      whyWrong: 'Thành phần khoáng ổn định suốt hơn sáu thập kỷ, không hề bị suy giảm chất lượng.',
      crucialNote: 'Từ "precious" (/ˈprɛʃəs/) nhấn mạnh độ quý giá như viên ngọc trong lòng đất.',
      memoryHook: 'Precious mineral spring = Nguồn mỏ khoáng sản quý giá.'
    },
    {
      id: 'exp-u17-3',
      type: 'choice',
      promptEn: 'Which ancient royal imperial document first mentioned this legendary spring at Hon Chuong Mountain?',
      promptVi: 'Bộ cổ thư triều đình phong kiến nào đầu tiên ghi chép về dòng mạch ngọc trời này dưới chân núi Hòn Chuông?',
      englishSentence: 'The Great Vietnam National Unified Records (Dai Nam Nhat Thong Chi) compiled in 1901.',
      audioText: 'The Great Vietnam National Unified Records compiled in 1901.',
      options: [
        'The Great Vietnam National Unified Records (Dai Nam Nhat Thong Chi) compiled in 1901.',
        'A comic book published yesterday.',
        'A foreign gossip magazine.'
      ],
      correctIndex: 0,
      explanation: 'Đại Nam Nhất Thống Chí (1901) đã mô tả dòng suối khoáng nóng ngọc tuyền ngàn năm tuôn trào dưới chân núi.',
      whyWrong: 'Tài liệu lịch sử khẳng định di sản địa văn hóa thiêng liêng của Vikoda.',
      crucialNote: 'Tài liệu này là câu chuyện kể hấp dẫn cho các khách tham quan tour mỏ.',
      memoryHook: 'Dai Nam Nhat Thong Chi = Ghi chép lịch sử 1901 về mạch khoáng.'
    }
  ],

  // UNIT 18: Giếng Khoan 220m & Tháp Giải Nhiệt 72°C
  'unit-18': [
    {
      id: 'exp-u18-1',
      type: 'speak',
      promptEn: 'Explain the extraordinary geological depth of the Danh Thanh artesian well:',
      promptVi: 'Luyện nói câu giới thiệu độ sâu địa chất 220 mét của giếng khoan ngầm tự phun:',
      englishSentence: 'Vikoda is tapped from a natural artesian aquifer at an astonishing depth of 220 meters below ground.',
      audioText: 'Vikoda is tapped from a natural artesian aquifer at an astonishing depth of 220 meters below ground.',
      phonetics: '/vɪˈkoʊdə ɪz tæpt frəm ə ˈnætʃrəl ɑːrˈtiːʒn ˈækwɪfər æt ən əˈstɒnɪʃɪŋ dɛpθ əv tuː ˈhʌndrəd ˈtwɛnti ˈmiːtərz bɪˈloʊ ɡraʊnd/',
      explanation: '"Artesian aquifer" = Tầng ngậm nước ngầm tự phun áp lực cao ở độ sâu 220m.',
      whyWrong: 'Độ sâu 220m qua nhiều tầng địa chất magma cách ly hoàn toàn khỏi nước mặt và ô nhiễm môi trường.',
      crucialNote: 'Độ sâu này là chìa khóa giải thích vì sao nước Vikoda thanh khiết vô trùng tuyệt đối.',
      memoryHook: '220 meters deep aquifer = Tầng ngậm nước ngầm sâu 220 mét.'
    },
    {
      id: 'exp-u18-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence on geothermal spring temperature at the natural wellhead:',
      promptVi: 'Sắp xếp câu: "Nước phun lên khỏi lòng đất ở nhiệt độ tự nhiên bảy mươi hai độ C."',
      englishSentence: 'The mineral water gushes from the wellhead at a pristine natural temperature of 72 degrees Celsius.',
      audioText: 'The mineral water gushes from the wellhead at a pristine natural temperature of 72 degrees Celsius.',
      phonetics: '/ðə ˈmɪnərəl ˈwɔːtər ˈɡʌʃɪz frəm ðə ˈwɛlhɛd æt ə ˈprɪstiːn ˈnætʃrəl ˈtɛmprətʃər əv ˈsɛvnti tuː dɪˈɡriːz ˈsɛlsiəs/',
      wordPool: ['The', 'mineral', 'water', 'gushes', 'from', 'the', 'wellhead', 'at', 'a', 'pristine', 'natural', 'temperature', 'of', '72', 'degrees', 'Celsius.'],
      explanation: 'Nhiệt độ 72°C tại vòi phun chứng minh nguồn nhiệt địa chất tự nhiên ngàn năm từ lòng núi lửa cổ.',
      whyWrong: 'Nhiệt độ cao tự nhiên tiêu diệt mọi vi khuẩn có hại ngay trong lòng đất.',
      crucialNote: 'Qua tháp làm mát khép kín chuyên dụng hạ xuống 25°C trước khi chiết rót vào chai.',
      memoryHook: '72 degrees Celsius = Nhiệt độ 72°C nguyên bản tại vòi phun.'
    },
    {
      id: 'exp-u18-3',
      type: 'choice',
      promptEn: 'How does Vikoda cool down 72-degree mineral water without altering its chemical balance?',
      promptVi: 'Vikoda làm mát dòng nước 72°C như thế nào mà không làm biến đổi cân bằng khoáng chất?',
      englishSentence: 'Through an enclosed stainless steel heat exchange system that preserves original minerals perfectly.',
      audioText: 'Through an enclosed stainless steel heat exchange system that preserves original minerals perfectly.',
      options: [
        'Through an enclosed stainless steel heat exchange system that preserves original minerals perfectly.',
        'By dumping ice cubes directly into the spring.',
        'By blowing dust and fans over open ponds.'
      ],
      correctIndex: 0,
      explanation: 'Hệ thống trao đổi nhiệt bằng thép không gỉ vô trùng khép kín bảo toàn trọn vẹn điện giải.',
      whyWrong: 'Không dùng đá lạnh nhân tạo hay mở nắp tiếp xúc với không khí.',
      crucialNote: 'Công nghệ bảo toàn nhiệt động học giữ nguyên độ kiềm pH 9.0.',
      memoryHook: 'Stainless heat exchange = Hệ thống trao đổi nhiệt thép vô trùng.'
    }
  ],

  // UNIT 19: 5 Yếu Tố "Nước Tốt" Chuẩn Quốc Tế
  'unit-19': [
    {
      id: 'exp-u19-1',
      type: 'speak',
      promptEn: 'Deliver the 5 fundamental criteria of genuine "Good Water" (Nước Tốt):',
      promptVi: 'Luyện nói 5 tiêu chuẩn vàng định nghĩa "Nước Tốt Chuẩn Quốc Tế" của Vikoda:',
      englishSentence: 'True good water must be naturally alkaline, perfectly balanced in minerals, chemical-free, antioxidant, and bottled at source.',
      audioText: 'True good water must be naturally alkaline, perfectly balanced in minerals, chemical-free, antioxidant, and bottled at source.',
      phonetics: '/truː ɡʊd ˈwɔːtər mʌst biː ˈnætʃrəl ˈælkəlaɪn, ˈpɜːrfɪktli ˈbælənst ɪn ˈmɪnərəlz, ˈkɛmɪkl friː, ˌæntiˈɒksɪdənt, ænd ˈbɒtld æt sɔːrs/',
      explanation: '5 Tiêu chuẩn vàng: Kiềm tự nhiên, cân bằng khoáng, không hóa chất, chống oxy hóa và đóng chai tại nguồn.',
      whyWrong: 'Nước lọc RO nhân tạo bị rút cạn khoáng chất, không thể gọi là "Nước Tốt".',
      crucialNote: 'Sử dụng 5 tiêu chuẩn này để thuyết phục đối tác khách sạn cao cấp.',
      memoryHook: '5 Golden criteria = 5 Tiêu chuẩn vàng nước tốt toàn cầu.'
    },
    {
      id: 'exp-u19-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence emphasizing the superior biological absorption of micro-clusters:',
      promptVi: 'Sắp xếp câu: "Cụm phân tử nước siêu nhỏ thẩm thấu nhanh vào từng tế bào cơ thể."',
      englishSentence: 'Micro-clustered water molecules penetrate deeply and hydrate body cells with remarkable speed.',
      audioText: 'Micro-clustered water molecules penetrate deeply and hydrate body cells with remarkable speed.',
      phonetics: '/ˈmaɪkroʊ ˈklʌstərd ˈwɔːtər ˈmɒlɪkjuːlz ˈpɛnɪtreɪt ˈdiːpli ænd ˈhaɪdreɪt ˈbɒdi sɛlz wɪð rɪˈmɑːrkəbl spiːd/',
      wordPool: ['Micro-clustered', 'water', 'molecules', 'penetrate', 'deeply', 'and', 'hydrate', 'body', 'cells', 'with', 'remarkable', 'speed.', 'slow'],
      explanation: 'Cụm phân tử nước nhỏ giúp vận chuyển dưỡng chất và đào thải độc tố tế bào hiệu quả gấp đôi.',
      whyWrong: 'Thích hợp cho vận động viên, người tập thể thao và người cần bù nước khẩn cấp.',
      crucialNote: 'Giúp giải rượu bia và giảm cảm giác mệt mỏi nhanh chóng.',
      memoryHook: 'Micro-clustered molecules = Cụm phân tử nước siêu nhỏ thẩm thấu nhanh.'
    },
    {
      id: 'exp-u19-3',
      type: 'choice',
      promptEn: 'Why is naturally alkaline water vastly superior to artificially electrolyzed water?',
      promptVi: 'Tại sao nước khoáng kiềm tự nhiên vượt trội hơn hẳn nước kiềm điện phân nhân tạo?',
      englishSentence: 'Because its natural mineral alkalinity is resilient and does not degrade into acidic water over time.',
      audioText: 'Because its natural mineral alkalinity is resilient and does not degrade into acidic water over time.',
      options: [
        'Because its natural mineral alkalinity is resilient and does not degrade into acidic water over time.',
        'Because artificial water is cheaper to produce in a garage.',
        'There is no difference between natural and fake water.'
      ],
      correctIndex: 0,
      explanation: 'Nước điện phân bằng máy sẽ mất độ kiềm sau vài giờ tiếp xúc không khí; kiềm tự nhiên Vikoda bền vững vĩnh viễn.',
      whyWrong: 'Nước nhân tạo có thể chứa kim loại giải phóng từ các bản cực điện phân bị ăn mòn.',
      crucialNote: 'Điểm cốt tử để giành hợp đồng độc quyền tại các phòng khám y tế và spa cao cấp.',
      memoryHook: 'Resilient natural alkalinity = Độ kiềm tự nhiên bền bỉ vĩnh cửu.'
    }
  ],

  // UNIT 20: Khoa Học Độ Kiềm pH 9.0 Tự Nhiên
  'unit-20': [
    {
      id: 'exp-u20-1',
      type: 'speak',
      promptEn: 'Explain how natural pH 9.0 neutralizes excess stomach acid effectively:',
      promptVi: 'Luyện nói câu cơ chế nước pH 9.0 trung hòa axit dư thừa dạ dày giúp bảo vệ sức khỏe:',
      englishSentence: 'A natural pH of 9.0 actively neutralizes excess gastric acid, relieving heartburn and promoting gut health.',
      audioText: 'A natural pH of 9.0 actively neutralizes excess gastric acid, relieving heartburn and promoting gut health.',
      phonetics: '/ə ˈnætʃrəl piː-eɪtʃ əv naɪn ˈæktɪvli ˈnjuːtrəlaɪzɪz ˈɛksɛs ˈɡæstrɪk ˈæsɪd, rɪˈliːvɪŋ ˈhɑːrtbɜːrn ænd prəˈmoʊtɪŋ ɡʌt hɛlθ/',
      explanation: 'pH 9.0 tự nhiên trung hòa axit dư do thức ăn cay nóng, đồ uống có cồn và căng thẳng công việc.',
      whyWrong: 'Bảo vệ niêm mạc dạ dày và cải thiện hệ vi sinh đường ruột rõ rệt.',
      crucialNote: 'Uống 1 chai Vikoda mỗi sáng khi bụng đói giúp khởi động hệ tiêu hóa tối ưu.',
      memoryHook: 'Neutralizes gastric acid = Trung hòa axit dư dạ dày.'
    },
    {
      id: 'exp-u20-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence showing that natural pH remains stable after opening:',
      promptVi: 'Sắp xếp câu: "Độ kiềm pH 9.0 của Vikoda vẫn giữ nguyên ổn định ngay cả sau khi mở nắp chai."',
      englishSentence: 'The natural pH 9.0 of Vikoda remains completely stable even after the bottle is unsealed.',
      audioText: 'The natural pH 9.0 of Vikoda remains completely stable even after the bottle is unsealed.',
      phonetics: '/ðə ˈnætʃrəl piː-eɪtʃ naɪn əv vɪˈkoʊdə rɪˈmeɪnz kəmˈpliːtli ˈsteɪbl ˈiːvn ˈæftər ðə ˈbɒtl ɪz ʌnˈsiːld/',
      wordPool: ['The', 'natural', 'pH', '9.0', 'of', 'Vikoda', 'remains', 'completely', 'stable', 'even', 'after', 'the', 'bottle', 'is', 'unsealed.'],
      explanation: '"Unsealed" = Mở nắp chai. Độ kiềm khoáng thiên nhiên không bị bay hơi hay mất hoạt tính.',
      whyWrong: 'Thí nghiệm thực tế đo bút pH sau 3 ngày mở nắp chứng minh pH vẫn đạt chuẩn 8.5 - 9.0.',
      crucialNote: 'Bằng chứng khoa học thuyết phục nhất xóa tan hoài nghi của đối tác quốc tế.',
      memoryHook: 'Stable after unsealed = Ổn định sau khi mở nắp.'
    },
    {
      id: 'exp-u20-3',
      type: 'choice',
      promptEn: 'Which key alkaline mineral ion in Vikoda is primarily responsible for balancing blood pH?',
      promptVi: 'Ion khoáng kiềm nào trong Vikoda chịu trách nhiệm chính trong việc cân bằng kiềm toan máu?',
      englishSentence: 'Natural Bicarbonate (HCO3-) ions that buffer acidity and support optimal metabolic function.',
      audioText: 'Natural Bicarbonate ions that buffer acidity and support optimal metabolic function.',
      options: [
        'Natural Bicarbonate (HCO3-) ions that buffer acidity and support optimal metabolic function.',
        'Sulfuric acid that burns holes in tables.',
        'Sugar syrups and artificial colorants.'
      ],
      correctIndex: 0,
      explanation: 'Bicarbonate (HCO3-) là hệ đệm sinh học tự nhiên tốt nhất của cơ thể con người.',
      whyWrong: 'Hàm lượng Bicarbonate tự nhiên trong Vikoda đạt chuẩn vàng y học từ 300 - 450 mg/L.',
      crucialNote: 'Không gây tích tụ muối hay áp lực lên huyết áp như muối ăn natri clorua.',
      memoryHook: 'Bicarbonate buffer = Hệ đệm Bicarbonate tự nhiên cân bằng độ kiềm.'
    }
  ],

  // UNIT 21: Bác Bỏ Tin Đồn Sỏi Thận Bằng Y Khoa
  'unit-21': [
    {
      id: 'exp-u21-1',
      type: 'speak',
      promptEn: 'Debunk the common misconception that drinking mineral water causes kidney stones:',
      promptVi: 'Luyện nói câu bác bỏ ngộ nhận uống nước khoáng gây sỏi thận bằng chứng cứ y khoa:',
      englishSentence: 'Medical research proves that drinking bicarbonate-rich mineral water actually inhibits calcium oxalate kidney stones.',
      audioText: 'Medical research proves that drinking bicarbonate-rich mineral water actually inhibits calcium oxalate kidney stones.',
      phonetics: '/ˈmɛdɪkl rɪˈsɜːrtʃ pruːvz ðæt ˈdrɪŋkɪŋ baɪˈkɑːrbənət rɪtʃ ˈmɪnərəl ˈwɔːtər ˈæktʃuəli ɪnˈhɪbɪts ˈkælsiəm ˈɒksəleɪt ˈkɪdni stoʊnz/',
      explanation: '"Inhibits kidney stones" = Ngăn ngừa và ức chế hình thành sỏi thận.',
      whyWrong: 'Nước khoáng kiềm làm tăng pH nước tiểu, hòa tan và ngăn tinh thể oxalat kết tủa thành sỏi.',
      crucialNote: 'Bác sĩ chuyên khoa thận quốc tế khuyên bệnh nhân uống nước khoáng kiềm để ngừa sỏi tái phát.',
      memoryHook: 'Inhibits kidney stones = Ngăn ngừa sỏi thận hiệu quả.'
    },
    {
      id: 'exp-u21-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence showing how silica H2SiO3 promotes collagen and healthy bone density:',
      promptVi: 'Sắp xếp câu: "Hợp chất Axit Silicic trong Vikoda giúp kích thích sản sinh collagen và tái tạo xương khớp."',
      englishSentence: 'Metasilicic acid in Vikoda stimulates natural collagen synthesis and strengthens bone density.',
      audioText: 'Metasilicic acid in Vikoda stimulates natural collagen synthesis and strengthens bone density.',
      phonetics: '/ˌmɛtəsaɪˈlɪsɪk ˈæsɪd ɪn vɪˈkoʊdə ˈstɪmjuleɪts ˈnætʃrəl ˈkɒlədʒən ˈsɪnθəsɪs ænd ˈstrɛŋθnz boʊn ˈdɛnsəti/',
      wordPool: ['Metasilicic', 'acid', 'in', 'Vikoda', 'stimulates', 'natural', 'collagen', 'synthesis', 'and', 'strengthens', 'bone', 'density.', 'soft'],
      explanation: 'H2SiO3 (Metasilicic acid) là vi khoáng làm đẹp tự nhiên, giúp da săn chắc, mượt tóc và ngừa loãng xương.',
      whyWrong: 'Rất hiếm mỏ khoáng trên thế giới sở hữu hàm lượng H2SiO3 cao và ổn định như Đảnh Thạnh.',
      crucialNote: 'Điểm nhấn quan trọng trong các chiến dịch marketing hướng tới phái đẹp và gia đình.',
      memoryHook: 'H2SiO3 stimulates collagen = Axit Silicic kích thích collagen tự nhiên.'
    },
    {
      id: 'exp-u21-3',
      type: 'choice',
      promptEn: 'What is the real primary medical cause of kidney stone formation according to nephrologists?',
      promptVi: 'Nguyên nhân y khoa thực sự hàng đầu gây sỏi thận theo các bác sĩ chuyên khoa thận là gì?',
      englishSentence: 'Chronic dehydration and inadequate daily water intake, not natural mineral consumption.',
      audioText: 'Chronic dehydration and inadequate daily water intake, not natural mineral consumption.',
      options: [
        'Chronic dehydration and inadequate daily water intake, not natural mineral consumption.',
        'Drinking too much clean mineral water.',
        'Eating vegetables and fresh fruits.'
      ],
      correctIndex: 0,
      explanation: 'Thiếu nước mãn tính làm nước tiểu cô đặc là nguyên nhân cốt lõi gây sỏi; uống đủ 2L Vikoda là biện pháp phòng ngừa số 1.',
      whyWrong: 'Giải tỏa hoàn toàn nỗi e ngại không có cơ sở khoa học của khách hàng.',
      crucialNote: 'Truyền thông kiến thức khoa học đúng đắn nâng tầm uy tín tư vấn viên Vikoda.',
      memoryHook: 'Dehydration causes stones = Mất nước cô đặc mới là thủ phạm tạo sỏi.'
    }
  ],

  // UNIT 22: Thuyết Minh Dẫn Tour Mỏ Đảnh Thạnh
  'unit-22': [
    {
      id: 'exp-u22-1',
      type: 'speak',
      promptEn: 'Welcome VIP international delegation to the 35-hectare Danh Thanh nature sanctuary:',
      promptVi: 'Luyện nói câu đón tiếp đoàn đối tác cấp cao đến thăm vành đai sinh thái mỏ 35 hecta:',
      englishSentence: 'Welcome to our 35-hectare protected ecological sanctuary, shielding the sacred mineral aquifer from civilization.',
      audioText: 'Welcome to our 35-hectare protected ecological sanctuary, shielding the sacred mineral aquifer from civilization.',
      phonetics: '/ˈwɛlkəm tuː ˈaʊər ˈθɜːrti faɪv ˈhɛktɛər prəˈtɛktɪd ˌiːkəˈlɒdʒɪkl ˈsæŋktʃuəri, ˈʃiːldɪŋ ðə ˈseɪkrɪd ˈmɪnərəl ˈækwɪfər frəm ˌsɪvəlaɪˈzeɪʃn/',
      explanation: '"Ecological sanctuary" = Vành đai bảo tồn sinh thái nguyên sinh 35ha bao bọc mỏ khoáng.',
      whyWrong: 'Không có bất kỳ hoạt động công nghiệp, nông nghiệp hay thuốc bảo vệ thực vật nào được phép tiếp cận.',
      crucialNote: 'Khách Nhật Bản và Châu Âu cực kỳ coi trọng vùng đệm sinh thái bảo vệ nguồn nước.',
      memoryHook: '35-hectare sanctuary = Vành đai sinh thái bảo tồn 35 hecta.'
    },
    {
      id: 'exp-u22-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence showing the historical French exploration pipeline:',
      promptVi: 'Sắp xếp câu: "Mỏ nước khoáng phun trào tự nhiên từ các đứt gãy kiến tạo đá granit cổ xưa."',
      englishSentence: 'The natural mineral spring gushes continuously from ancient granite tectonic geological fault lines.',
      audioText: 'The natural mineral spring gushes continuously from ancient granite tectonic geological fault lines.',
      phonetics: '/ðə ˈnætʃrəl ˈmɪnərəl sprɪŋ ˈɡʌʃɪz kənˈtɪnjuəsli frəm ˈeɪnʃənt ˈɡrænɪt tɛkˈtɒnɪk ˌdʒiːəˈlɒdʒɪkl fɔːlt laɪnz/',
      wordPool: ['The', 'natural', 'mineral', 'spring', 'gushes', 'continuously', 'from', 'ancient', 'granite', 'tectonic', 'geological', 'fault', 'lines.'],
      explanation: 'Đứt gãy kiến tạo đá granit hàng triệu năm lọc sạch và tích tụ vi khoáng ngọc trời.',
      whyWrong: 'Cấu tạo địa chất độc nhất vô nhị làm nên vị ngọt thanh mát, dễ uống của Vikoda.',
      crucialNote: 'Dùng từ "tectonic fault lines" thể hiện kiến thức địa chất sâu sắc.',
      memoryHook: 'Granite fault lines = Đứt gãy kiến tạo đá granit cổ xưa.'
    },
    {
      id: 'exp-u22-3',
      type: 'choice',
      promptEn: 'What safety protocol must all visitors follow before stepping near the sterile wellhead chamber?',
      promptVi: 'Quy định an toàn nào bắt buộc mọi khách VIP phải tuân thủ trước khi vào phòng giếng phun vô trùng?',
      englishSentence: 'Put on sanitized shoe covers, medical hairnets, and disinfected laboratory lab coats.',
      audioText: 'Put on sanitized shoe covers, medical hairnets, and disinfected laboratory lab coats.',
      options: [
        'Put on sanitized shoe covers, medical hairnets, and disinfected laboratory lab coats.',
        'Walk in with muddy outdoor boots and open drinks.',
        'Touch the water pipes with bare dirty hands.'
      ],
      correctIndex: 0,
      explanation: 'Quy trình phòng sạch khắt khe bảo đảm không có bất kỳ mầm bệnh nào xâm nhập vùng mỏ.',
      whyWrong: 'Khách hàng nhìn thấy kỷ luật vệ sinh sẽ hoàn toàn yên tâm ký hợp đồng phân phối.',
      crucialNote: 'Chụp ảnh lưu niệm tại khu vực phòng kính cách ly vô trùng.',
      memoryHook: 'Sanitized gear = Trang phục vô trùng kiểm định an toàn.'
    }
  ],

  // UNIT 23: Dây Chuyền Chiết Rót & Công Nghệ Krones Đức
  'unit-23': [
    {
      id: 'exp-u23-1',
      type: 'speak',
      promptEn: 'Highlight the ultra-fast automated packaging speed of Krones bottling line:',
      promptVi: 'Luyện nói câu tốc độ chiết rót tự động siêu tốc của dây chuyền Krones Đức:',
      englishSentence: 'Our state-of-the-art Krones line bottles up to forty thousand units per hour with pinpoint precision.',
      audioText: 'Our state-of-the-art Krones line bottles up to forty thousand units per hour with pinpoint precision.',
      phonetics: '/ˈaʊər steɪt əv ði ɑːrt ˈkroʊnɛs laɪn ˈbɒtlz ʌp tuː ˈfɔːrti ˈθaʊznd ˈjuːnɪts pɜːr ˈaʊər wɪð ˈpɪnpɔɪnt prɪˈsɪʒn/',
      explanation: 'Công suất 40,000 chai/giờ đáp ứng hoàn hảo các đơn hàng xuất khẩu container lớn.',
      whyWrong: 'Pinpoint precision = Độ chuẩn xác tuyệt đối từng mililit dung tích.',
      crucialNote: 'Khẳng định năng lực cung ứng dồi dào, không bao giờ lo đứt gãy chuỗi cung ứng hàng.',
      memoryHook: 'State-of-the-art Krones = Dây chuyền Krones hiện đại bậc nhất thế giới.'
    },
    {
      id: 'exp-u23-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence showing robotic automated palletizing system:',
      promptVi: 'Sắp xếp câu: "Robot tự động xếp thùng hàng lên pallet và quấn màng co bảo vệ tiêu chuẩn xuất khẩu."',
      englishSentence: 'Robotic arms automatically palletize cartons and shrink-wrap them for secure maritime container loading.',
      audioText: 'Robotic arms automatically palletize cartons and shrink-wrap them for secure maritime container loading.',
      phonetics: '/roʊˈbɒtɪk ɑːrmz ˌɔːtəˈmætɪkli ˈpælətaɪz ˈkɑːrtnz ænd ʃrɪŋk ræp ðɛm fɔːr sɪˈkjʊər ˈmærɪtaɪm kənˈteɪnər ˈloʊdɪŋ/',
      wordPool: ['Robotic', 'arms', 'automatically', 'palletize', 'cartons', 'and', 'shrink-wrap', 'them', 'for', 'secure', 'maritime', 'container', 'loading.'],
      explanation: 'Tự động hóa hoàn toàn từ đóng chai đến bốc dỡ hàng bảo đảm thùng hàng không bị móp méo.',
      whyWrong: 'Thùng carton đạt chuẩn chống ẩm nhiệt đới cho hành trình lênh đênh trên biển.',
      crucialNote: 'Giảm thiểu sai sót do con người và tăng tốc độ giải phóng xe tải logistics.',
      memoryHook: 'Robotic palletizing = Cánh tay robot xếp pallet tự động.'
    },
    {
      id: 'exp-u23-3',
      type: 'choice',
      promptEn: 'How does the laser optical inspection system eliminate defective bottles on the conveyor?',
      promptVi: 'Hệ thống kiểm tra quang học laser loại bỏ chai lỗi trên băng chuyền như thế nào?',
      englishSentence: 'High-speed cameras inspect cap seals and fill levels, automatically rejecting flawed bottles.',
      audioText: 'High-speed cameras inspect cap seals and fill levels, automatically rejecting flawed bottles.',
      options: [
        'High-speed cameras inspect cap seals and fill levels, automatically rejecting flawed bottles.',
        'Workers guess with their eyes while sleeping.',
        'All defective bottles are left for customers to complain.'
      ],
      correctIndex: 0,
      explanation: 'Camera quang học chụp 1,000 khung hình/giây kiểm tra nắp chai và mức nước chuẩn xác 100%.',
      whyWrong: 'Cam kết tỷ lệ lỗi sản phẩm tiệm cận 0 (Six Sigma quality level).',
      crucialNote: 'Chất lượng đồng đều là yếu tố tiên quyết giữ vững uy tín thương hiệu cao cấp.',
      memoryHook: 'Optical inspection = Kiểm nghiệm quang học tự động loại trừ hàng lỗi.'
    }
  ],

  // UNIT 24: Bộ Sưu Tập Bao Bì: Thủy Tinh, Lon & Pet
  'unit-24': [
    {
      id: 'exp-u24-1',
      type: 'speak',
      promptEn: 'Pitch the luxury 430ml glass bottle for 5-star hotel banquet tables:',
      promptVi: 'Luyện nói câu chào hàng chai thủy tinh ngọc 430ml cho bàn tiệc khách sạn 5 sao:',
      englishSentence: 'Our sleek 430ml glass bottle brings timeless sophistication to fine dining tables while eliminating plastic waste.',
      audioText: 'Our sleek 430ml glass bottle brings timeless sophistication to fine dining tables while eliminating plastic waste.',
      phonetics: '/ˈaʊər sliːk fɔːr ˈhʌndrəd ˈθɜːrti ˈmɪlɪliːtər ɡlæs ˈbɒtl brɪŋz ˈtaɪmləs səˌfɪstɪˈkeɪʃn tuː faɪn ˈdaɪnɪŋ ˈteɪblz waɪl ɪˈlɪmɪneɪtɪŋ ˈplæstɪk weɪst/',
      explanation: '"Timeless sophistication" = Sự sang trọng vượt thời gian trên bàn tiệc cao cấp.',
      whyWrong: 'Chai thủy tinh Vikoda nâng tầm đẳng cấp không gian nhà hàng Michelin và resort.',
      crucialNote: 'Thay thế các thương hiệu ngoại đắt đỏ với chi phí tiết kiệm hơn 40%.',
      memoryHook: 'Timeless sophistication = Sang trọng tinh tế vượt thời gian.'
    },
    {
      id: 'exp-u24-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence showing recyclable aluminum can convenience for airlines:',
      promptVi: 'Sắp xếp câu: "Lon nhôm tái chế một trăm phần trăm là giải pháp hoàn hảo cho các hãng hàng không quốc tế."',
      englishSentence: 'Infinitely recyclable aluminum cans are the ultimate lightweight hydration solution for commercial airlines.',
      audioText: 'Infinitely recyclable aluminum cans are the ultimate lightweight hydration solution for commercial airlines.',
      phonetics: '/ˈɪnfɪnətli ˌriːˈsaɪkləbl əˈluːmɪnəm kænz ɑːr ði ˈʌltɪmət ˈlaɪtweɪt haɪˈdreɪʃn səˈluːʃn fɔːr kəˈmɜːrʃl ˈɛərlaɪnz/',
      wordPool: ['Infinitely', 'recyclable', 'aluminum', 'cans', 'are', 'the', 'ultimate', 'lightweight', 'hydration', 'solution', 'for', 'commercial', 'airlines.'],
      explanation: '"Infinitely recyclable" = Nhôm có thể tái chế vô tận mà không suy giảm chất lượng.',
      whyWrong: 'Giảm trọng lượng bay, giúp các hãng hàng không tiết kiệm hàng triệu đô nhiên liệu hàng năm.',
      crucialNote: 'Bắt nhịp xu hướng hàng không xanh (Green Aviation Trend) toàn cầu.',
      memoryHook: 'Infinitely recyclable cans = Lon nhôm tái chế vô tận.'
    },
    {
      id: 'exp-u24-3',
      type: 'choice',
      promptEn: 'What eco-friendly feature makes Vikoda PET bottles stand out in retail supermarkets?',
      promptVi: 'Đặc tính thân thiện môi trường nào giúp chai PET Vikoda nổi bật trên kệ hàng siêu thị?',
      englishSentence: 'BPA-free virgin resin engineered for complete post-consumer bottle recycling.',
      audioText: 'BPA-free virgin resin engineered for complete post-consumer bottle recycling.',
      options: [
        'BPA-free virgin resin engineered for complete post-consumer bottle recycling.',
        'Toxic plastics that leak poison into water.',
        'Non-recyclable heavy lead materials.'
      ],
      correctIndex: 0,
      explanation: 'Không chứa chất gây hại BPA, an toàn tuyệt đối cho trẻ em và phụ nữ mang thai.',
      whyWrong: 'Nhựa PET nguyên sinh cao cấp chịu nhiệt, bảo quản nước trong lành nhất.',
      crucialNote: 'Logo chứng nhận BPA-Free in nổi bật trên nhãn chai tạo niềm tin cho người tiêu dùng.',
      memoryHook: 'BPA-free resin = Nhựa an toàn không chứa độc chất BPA.'
    }
  ],

  // UNIT 28: Quy Trình 8 Bước Bán Hàng & Tiếp Cận HORECA
  'unit-28': [
    {
      id: 'exp-u28-1',
      type: 'speak',
      promptEn: 'Pitch the initial consultative question to a luxury resort Food & Beverage Director:',
      promptVi: 'Luyện nói câu hỏi mở đầu mang tính cố vấn chiến lược cho Giám đốc Ẩm thực F&B:',
      englishSentence: 'How is your resort currently balancing guest satisfaction with your corporate sustainability ESG targets?',
      audioText: 'How is your resort currently balancing guest satisfaction with your corporate sustainability ESG targets?',
      phonetics: '/haʊ ɪz jʊər rɪˈzɔːrt ˈkɜːrəntli ˈbælənsɪŋ ɡɛst ˌsætɪsˈfækʃn wɪð jʊər ˈkɔːrpərət səˌsteɪnəˈbɪləti iː-ɛs-dʒiː ˈtɑːrɡɪts/',
      explanation: 'Câu hỏi cố vấn (Consultative Question) chạm đúng nỗi trăn trở về mục tiêu phát triển bền vững ESG.',
      whyWrong: 'Không nhảy bổ vào mời mua hàng giá rẻ; bắt đầu từ bài toán chiến lược của khách.',
      crucialNote: 'Khi đối tác chia sẻ về áp lực giảm đồ nhựa, hãy mở ra giải pháp chai thủy tinh Vikoda.',
      memoryHook: 'Balancing guest satisfaction with ESG = Cân bằng giữa hài lòng khách hàng và mục tiêu xanh.'
    },
    {
      id: 'exp-u28-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence stating step 4: Tailored product presentation to key stakeholders:',
      promptVi: 'Sắp xếp câu: "Chúng tôi chuẩn bị bài thuyết trình giải pháp nước khoáng riêng biệt cho từng chuỗi khách sạn."',
      englishSentence: 'We prepare a customized hydration proposal tailored to your property brand positioning.',
      audioText: 'We prepare a customized hydration proposal tailored to your property brand positioning.',
      phonetics: '/wiː prɪˈpɛər ə ˈkʌstəmaɪzd haɪˈdreɪʃn prəˈpoʊzl ˈteɪlərd tuː jʊər ˈprɒpərti brænd pəˈzɪʃnɪŋ/',
      wordPool: ['We', 'prepare', 'a', 'customized', 'hydration', 'proposal', 'tailored', 'to', 'your', 'property', 'brand', 'positioning.'],
      explanation: '"Customized proposal" = Bản đề xuất giải pháp may đo riêng cho từng đối tác.',
      whyWrong: 'Khách sạn 5 sao không bao giờ thích các bản chào hàng chung chung copy-paste.',
      crucialNote: 'Thể hiện sự tôn trọng và am hiểu sâu sắc mô hình kinh doanh của đối tác.',
      memoryHook: 'Customized proposal = Bản đề xuất giải pháp may đo chuyên nghiệp.'
    },
    {
      id: 'exp-u28-3',
      type: 'choice',
      promptEn: 'What is the golden rule when following up after an introductory product sample tasting?',
      promptVi: 'Nguyên tắc vàng khi gọi điện theo dõi (Follow-up) sau khi gửi mẫu nước khoáng dùng thử là gì?',
      englishSentence: 'Follow up within 48 hours to gather chef feedback and discuss pilot placement terms.',
      audioText: 'Follow up within 48 hours to gather chef feedback and discuss pilot placement terms.',
      options: [
        'Follow up within 48 hours to gather chef feedback and discuss pilot placement terms.',
        'Wait six months until they completely forget who you are.',
        'Send angry messages demanding payment for free samples.'
      ],
      correctIndex: 0,
      explanation: 'Thời gian vàng 48 giờ sau khi thử nước là lúc cảm nhận vị ngọt tự nhiên của khách còn đọng lại rõ nhất.',
      whyWrong: 'Hỏi han đánh giá của Bếp trưởng (Executive Chef) và Quản lý quầy bar (Head Sommelier).',
      crucialNote: 'Đề xuất thử nghiệm đặt 50 thùng tại sảnh chờ VIP để đo lường phản hồi thực tế.',
      memoryHook: '48-hour follow up = Theo dõi chăm sóc trong 48 giờ vàng.'
    }
  ],

  // UNIT 29: Đàm Phán Chiết Khấu Sản Lượng & Khách Khó Tính
  'unit-29': [
    {
      id: 'exp-u29-1',
      type: 'speak',
      promptEn: 'Diplomatically reject a steep 50% discount demand by focusing on partner profitability:',
      promptVi: 'Luyện nói câu từ chối khéo yêu cầu chiết khấu 50% và hướng đối tác vào bảo vệ biên lợi nhuận:',
      englishSentence: 'Rather than eroding brand value with unsustainable price slashing, we protect your retail margins with volume rebates.',
      audioText: 'Rather than eroding brand value with unsustainable price slashing, we protect your retail margins with volume rebates.',
      phonetics: '/ˈrɑːðər ðæn ɪˈroʊdɪŋ brænd ˈvæljuː wɪð ˌʌnsəˈsteɪnəbl praɪs ˈslæʃɪŋ, wiː prəˈtɛkt jʊər ˈriːteɪl ˈmɑːrdʒɪnz wɪð ˈvɒljuːm ˈriːbeɪts/',
      explanation: 'Đỉnh cao đàm phán thương vụ: Không hạ giá rẻ tiền mà dùng cơ chế thưởng chiết khấu sản lượng tích lũy.',
      whyWrong: 'Giảm giá quá sâu sẽ làm mất vị thế nước khoáng thiên nhiên cao cấp và phá giá thị trường.',
      crucialNote: 'Nhà phân phối thông minh luôn chọn đối tác bảo vệ biên lợi nhuận dài hạn.',
      memoryHook: 'Protect retail margins = Bảo vệ biên lợi nhuận cho đối tác.'
    },
    {
      id: 'exp-u29-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence showing marketing trade funds tied to sales milestones:',
      promptVi: 'Sắp xếp câu: "Công ty cam kết tài trợ ngân sách truyền thông đồng hành khi đối tác đạt sản lượng cam kết."',
      englishSentence: 'We allocate co-marketing support funds when quarterly volume milestones are achieved.',
      audioText: 'We allocate co-marketing support funds when quarterly volume milestones are achieved.',
      phonetics: '/wiː ˈæləkeɪt koʊ ˈmɑːrkɪtɪŋ səˈpɔːrt fʌndz wɛn ˈkwɔːrtərli ˈvɒljuːm ˈmaɪlstoʊnz ɑːr əˈtʃiːvd/',
      wordPool: ['We', 'allocate', 'co-marketing', 'support', 'funds', 'when', 'quarterly', 'volume', 'milestones', 'are', 'achieved.'],
      explanation: '"Co-marketing support" = Ngân sách đồng quảng bá (tài trợ dù che nắng, bảng biển, kệ trưng bày đẹp).',
      whyWrong: 'Tạo động lực để đối tác dốc toàn lực đẩy hàng và mở rộng điểm bán.',
      crucialNote: 'Biến mối quan hệ mua bán đơn thuần thành đối tác chiến lược cùng thắng (Win-Win).',
      memoryHook: 'Co-marketing funds = Ngân sách đồng hành quảng bá thương hiệu.'
    },
    {
      id: 'exp-u29-3',
      type: 'choice',
      promptEn: 'What should you do when a purchasing manager threatens to switch to cheaper purified water?',
      promptVi: 'Bạn làm gì khi Giám đốc Thu mua đe dọa chuyển sang mua nước lọc tinh khiết giá rẻ của đối thủ?',
      englishSentence: 'Remind them of guest complaints regarding plastic waste and the prestige of serving 100% natural mineral water.',
      audioText: 'Remind them of guest complaints regarding plastic waste and the prestige of serving natural mineral water.',
      options: [
        'Remind them of guest complaints regarding plastic waste and the prestige of serving 100% natural mineral water.',
        'Cry and beg them not to leave.',
        'Insult their resort and storm out of the office.'
      ],
      correctIndex: 0,
      explanation: 'Nhắc khéo về phản ứng tiêu cực của du khách quốc tế khi khách sạn 5 sao lại phục vụ nước lọc đóng chai rẻ tiền.',
      whyWrong: 'Khách Tây sang trọng đánh giá đẳng cấp khách sạn qua từng chai nước trên bàn ăn.',
      crucialNote: 'Dùng đòn bẩy uy tín thương hiệu để bảo vệ giá trị sản phẩm.',
      memoryHook: 'Prestige of natural mineral water = Đẳng cấp của nước khoáng thiên nhiên.'
    }
  ],

  // UNIT 30: Điều Khoản Công Nợ (Credit Terms) & Kỷ Luật Tài Chính
  'unit-30': [
    {
      id: 'exp-u30-1',
      type: 'speak',
      promptEn: 'Explain corporate credit terms standard policy to a new distributor:',
      promptVi: 'Luyện nói câu quy định hạn mức công nợ và thời hạn thanh toán chuẩn cho đại lý mới:',
      englishSentence: 'Initial orders are conducted on prepayment; credit terms of thirty days are considered after three months of solid volume.',
      audioText: 'Initial orders are conducted on prepayment; credit terms of thirty days are considered after three months of solid volume.',
      phonetics: '/ɪˈnɪʃl ˈɔːrdərz ɑːr kənˈdʌktɪd ɒn ˌpriːˈpeɪmənt; ˈkrɛdɪt tɜːrmz əv ˈθɜːrti deɪz ɑːr kənˈsɪdərd ˈæftər θriː mʌnθs əv ˈsɒlɪd ˈvɒljuːm/',
      explanation: 'Nguyên tắc an toàn vốn: Đơn hàng đầu thanh toán trước; sau 3 tháng duy trì doanh số tốt mới mở công nợ 30 ngày.',
      whyWrong: 'Không bao giờ cấp công nợ dễ dãi cho đối tác mới chưa được thẩm định tín dụng.',
      crucialNote: 'Kỷ luật tài chính chặt chẽ giúp Vikoda duy trì tỷ lệ nợ xấu bằng không.',
      memoryHook: 'Prepayment then credit = Tiền trước công nợ sau.'
    },
    {
      id: 'exp-u30-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence diplomatically reminding a partner of an overdue balance:',
      promptVi: 'Sắp xếp câu: "Chúng tôi xin lưu ý khoản công nợ của quý công ty đã quá hạn mười lăm ngày."',
      englishSentence: 'We kindly bring to your attention that invoice 2045 has been overdue for fifteen business days.',
      audioText: 'We kindly bring to your attention that invoice 2045 has been overdue for fifteen business days.',
      phonetics: '/wiː ˈkaɪndli brɪŋ tuː jʊər əˈtɛnʃn ðæt ˈɪnvɔɪs tuː ˈzɪəroʊ fɔːr faɪv hæz biːn ˌoʊvərˈdjuː fɔːr ˈfɪfˈtiːn ˈbɪznəs deɪz/',
      wordPool: ['We', 'kindly', 'bring', 'to', 'your', 'attention', 'that', 'invoice', '2045', 'has', 'been', 'overdue', 'for', 'fifteen', 'business', 'days.'],
      explanation: '"Kindly bring to your attention" là cách nhắc nợ lịch sự nhưng đanh thép của các tập đoàn quốc tế.',
      whyWrong: 'Đính kèm bản đối chiếu công nợ và đề nghị xác nhận lịch chuyển khoản cụ thể.',
      crucialNote: 'Nhắc nợ sớm tránh để nợ quá hạn kéo dài thành nợ khó đòi.',
      memoryHook: 'Overdue invoice = Hóa đơn đã quá hạn thanh toán.'
    },
    {
      id: 'exp-u30-3',
      type: 'choice',
      promptEn: 'What standard operational procedure applies if payment is not settled after multiple reminders?',
      promptVi: 'Quy trình vận hành chuẩn nào được kích hoạt nếu hóa đơn quá hạn sau nhiều lần thông báo?',
      englishSentence: 'Temporary suspension of new warehouse shipments until the outstanding balance is fully settled.',
      audioText: 'Temporary suspension of new warehouse shipments until the outstanding balance is fully settled.',
      options: [
        'Temporary suspension of new warehouse shipments until the outstanding balance is fully settled.',
        'Ship double amount of products free of charge.',
        'Close the company and run away.'
      ],
      correctIndex: 0,
      explanation: 'Tạm ngưng xuất kho đơn hàng mới (Hold delivery) cho đến khi thanh toán xong nợ cũ.',
      whyWrong: 'Bảo vệ tài sản công ty và duy trì nguyên tắc công bằng giữa tất cả các khách hàng.',
      crucialNote: 'Thông báo bằng văn bản chính thức có chữ ký của Giám đốc Kinh doanh.',
      memoryHook: 'Suspension of shipments = Tạm ngưng giao hàng để thu hồi nợ.'
    }
  ],

  // UNIT 31: Xử Lý Khiếu Nại & Đổi Trả Hàng (Customer Care)
  'unit-31': [
    {
      id: 'exp-u31-1',
      type: 'speak',
      promptEn: 'Calm an agitated restaurant manager reporting damaged delivery cartons:',
      promptVi: 'Luyện nói câu xoa dịu nhà hàng khi nhận hàng bị va đập và cam kết bồi thường ngay:',
      englishSentence: 'I deeply apologize for this mishap; our dispatch team is already rushing full replacement stock to your kitchen.',
      audioText: 'I deeply apologize for this mishap; our dispatch team is already rushing full replacement stock to your kitchen.',
      phonetics: '/aɪ ˈdiːpli əˈpɒlədʒaɪz fɔːr ðɪs ˈmɪshæp; ˈaʊər dɪˈspætʃ tiːm ɪz ɔːlˈrɛdi ˈrʌʃɪŋ fʊl rɪˈpleɪsmənt stɒk tuː jʊər ˈkɪtʃɪn/',
      explanation: 'Quy tắc vàng chăm sóc khách hàng: Nhận lỗi nhanh chóng và hành động khắc phục tức thì trong 2 giờ.',
      whyWrong: 'Không đổ lỗi cho tài xế hay đơn vị vận tải; Vikoda nhận trách nhiệm tối cao với sản phẩm.',
      crucialNote: 'Tốc độ giải quyết khiếu nại biến khách hàng đang giận dữ thành người ủng hộ trung thành.',
      memoryHook: 'Rushing full replacement = Lập tức chuyển hàng thay thế đền bù.'
    },
    {
      id: 'exp-u31-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence showing quality assurance root cause investigation:',
      promptVi: 'Sắp xếp câu: "Bộ phận kiểm định chất lượng đang rà soát camera bốc xếp để ngăn ngừa sự cố tái diễn."',
      englishSentence: 'Quality assurance is reviewing warehouse loading footage to prevent any recurring handling issues.',
      audioText: 'Quality assurance is reviewing warehouse loading footage to prevent any recurring handling issues.',
      phonetics: '/ˈkwɒləti əˈʃʊərəns ɪz rɪˈvjuːɪŋ ˈwɛərhaʊs ˈloʊdɪŋ ˈfʊtɪdʒ tuː prɪˈvɛnt ˈɛni rɪˈkɜːrɪŋ ˈhændlɪŋ ˈɪʃuːz/',
      wordPool: ['Quality', 'assurance', 'is', 'reviewing', 'warehouse', 'loading', 'footage', 'to', 'prevent', 'any', 'recurring', 'handling', 'issues.'],
      explanation: 'Điều tra nguyên nhân gốc rễ (Root Cause Analysis) để cải tiến quy trình đóng thùng bốc dỡ.',
      whyWrong: 'Báo cáo nguyên nhân cho khách hàng thể hiện tính chuyên nghiệp và minh bạch cao độ.',
      crucialNote: 'Gửi biên bản xử lý sự cố có chữ ký của Trưởng phòng Đảm bảo Chất lượng.',
      memoryHook: 'Root cause investigation = Điều tra nguyên nhân gốc rễ sự cố.'
    },
    {
      id: 'exp-u31-3',
      type: 'choice',
      promptEn: 'What gesture should you offer to an upset client alongside the replacement goods?',
      promptVi: 'Hành động thiện chí nào nên gửi kèm cho đối tác cùng với lô hàng đền bù?',
      englishSentence: 'A handwritten apology note and a complimentary luxury case of Vikoda glass bottles.',
      audioText: 'A handwritten apology note and a complimentary luxury case of Vikoda glass bottles.',
      options: [
        'A handwritten apology note and a complimentary luxury case of Vikoda glass bottles.',
        'A bill demanding extra payment for delivery.',
        'A threatening letter telling them never to complain again.'
      ],
      correctIndex: 0,
      explanation: 'Một bức thư xin lỗi viết tay và một thùng nước thủy tinh cao cấp tặng thêm thể hiện sự trân trọng chân thành.',
      whyWrong: 'Chi phí đền bù nhỏ nhưng giữ lại được hợp đồng doanh thu hàng tỷ đồng mỗi năm.',
      crucialNote: 'Khách hàng luôn nhớ cách doanh nghiệp ứng xử khi xảy ra sự cố.',
      memoryHook: 'Handwritten apology = Thư xin lỗi viết tay chân thành.'
    }
  ],

  // UNIT 32: Nghệ Thuật Chốt Đơn 6 Chữ Vàng: Bảo Vệ Biên Lợi Nhuận
  'unit-32': [
    {
      id: 'exp-u32-1',
      type: 'speak',
      promptEn: 'Deliver the decisive closing pitch to seal a major resort beverage contract:',
      promptVi: 'Luyện nói câu chốt đơn quyết định ký kết hợp đồng cung cấp nước uống độc quyền cho chuỗi resort:',
      englishSentence: 'By partnering with Vikoda today, your resort champions local ecological heritage while securing a guaranteed 45% profit margin.',
      audioText: 'By partnering with Vikoda today, your resort champions local ecological heritage while securing a guaranteed forty-five percent profit margin.',
      phonetics: '/baɪ ˈpɑːrtnərɪŋ wɪð vɪˈkoʊdə təˈdeɪ, jʊər rɪˈzɔːrt ˈtʃæmpiənz ˈloʊkl ˌiːkəˈlɒdʒɪkl ˈhɛrɪtɪdʒ waɪl sɪˈkjʊərɪŋ ə ˌɡærənˈtiːd ˈfɔːrti faɪv pərˈsɛnt ˈprɒfɪt ˈmɑːrdʒɪn/',
      explanation: 'Công thức chốt đơn đỉnh cao: Kết hợp niềm tự hào di sản thiên nhiên Việt Nam + Biên lợi nhuận hấp dẫn 45%.',
      whyWrong: 'Khách sạn vừa đạt tiêu chuẩn xanh vừa tối ưu hóa lợi nhuận kinh doanh dịch vụ ăn uống.',
      crucialNote: 'Đưa sẵn bút và mở trang ký kết hợp đồng cho khách hàng.',
      memoryHook: 'Heritage plus 45% margin = Tôn vinh di sản và bảo đảm lợi nhuận 45%.'
    },
    {
      id: 'exp-u32-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence using the Assumptive Close technique:',
      promptVi: 'Sắp xếp câu: "Chúng tôi có thể chuẩn bị giao lô hàng thử nghiệm năm mươi thùng vào thứ Sáu tuần này không?":',
      englishSentence: 'Shall we arrange delivery of the initial fifty trial cartons to your central warehouse this Friday?',
      audioText: 'Shall we arrange delivery of the initial fifty trial cartons to your central warehouse this Friday?',
      phonetics: '/ʃæl wiː əˈreɪndʒ dɪˈlɪvəri əv ði ɪˈnɪʃl ˈfɪfti ˈtraɪəl ˈkɑːrtnz tuː jʊər ˈsɛntrəl ˈwɛərhaʊs ðɪs ˈfraɪdeɪ/',
      wordPool: ['Shall', 'we', 'arrange', 'delivery', 'of', 'the', 'initial', 'fifty', 'trial', 'cartons', 'to', 'your', 'central', 'warehouse', 'this', 'Friday?'],
      explanation: 'Kỹ thuật chốt giả định (Assumptive Close): Đưa ra mốc thời gian và số lượng cụ thể thay vì hỏi "có mua không".',
      whyWrong: 'Giúp khách hàng dễ dàng đưa ra quyết định bắt đầu hợp tác với quy mô nhỏ an toàn.',
      crucialNote: 'Khi đối tác đồng ý ngày giao hàng nghĩa là hợp đồng đã được chốt thành công.',
      memoryHook: 'Assumptive close = Kỹ thuật chốt đơn giả định đồng thuận.'
    },
    {
      id: 'exp-u32-3',
      type: 'choice',
      promptEn: 'What is the golden closing motto that guides every Vikoda senior business ambassador?',
      promptVi: 'Phương châm 6 chữ vàng dẫn lối mọi đại sứ kinh doanh kỳ cựu của Vikoda là gì?',
      englishSentence: 'Protect Partner Profit Margins, Honor Natural Heritage (Bảo Vệ Biên Lợi Nhuận, Tôn Vinh Di Sản).',
      audioText: 'Protect Partner Profit Margins, Honor Natural Heritage.',
      options: [
        'Protect Partner Profit Margins, Honor Natural Heritage (Bảo Vệ Biên Lợi Nhuận, Tôn Vinh Di Sản).',
        'Sell once and run away quickly.',
        'Lower prices until bankruptcy.'
      ],
      correctIndex: 0,
      explanation: 'Bán hàng là phụng sự và đồng hành: Giúp đối tác làm giàu và cùng nhau lan tỏa giá trị ngọc trong đá Đảnh Thạnh.',
      whyWrong: 'Triết lý kinh doanh nhân văn tạo nên mạng lưới đối tác gắn bó suốt hàng thập kỷ.',
      crucialNote: 'Khắc ghi 6 chữ vàng trong mọi cuộc tiếp xúc ngoại giao thương mại.',
      memoryHook: 'Honor Heritage, Protect Margins = Tôn vinh di sản, Bảo vệ lợi nhuận.'
    }
  ],

  // UNIT 36: Vận Tải Biển: Vessel Delay & Demurrage
  'unit-36': [
    {
      id: 'exp-u36-1',
      type: 'speak',
      promptEn: 'Negotiate extended container demurrage and detention free-time with the shipping line:',
      promptVi: 'Luyện nói câu đàm phán gia hạn thời gian miễn phí lưu kho lưu bãi (Free Time Demurrage & Detention) 14 ngày:',
      englishSentence: 'We request fourteen days of free demurrage and detention at the port of discharge to prevent unexpected storage fees.',
      audioText: 'We request fourteen days of free demurrage and detention at the port of discharge to prevent unexpected storage fees.',
      phonetics: '/wiː rɪˈkwɛst ˈfɔːrˈtiːn deɪz əv friː dɪˈmʌrɪdʒ ænd dɪˈtɛnʃn æt ðə pɔːrt əv dɪsˈtʃɑːrdʒ tuː prɪˈvɛnt ˌʌnɪkˈspɛktɪd ˈstɔːrɪdʒ fiːz/',
      explanation: 'Demurrage (phí lưu container tại bãi cảng) và Detention (phí giữ vỏ container tại kho khách).',
      whyWrong: 'Xin được 14 ngày Free Time giúp khách hàng an tâm làm thủ tục hải quan không lo phát sinh chi phí phạt.',
      crucialNote: 'Kỹ năng then chốt của chuyên viên xuất nhập khẩu khi làm việc với các hãng tàu quốc tế như Maersk, ONE, MSC.',
      memoryHook: '14 days free demurrage = 14 ngày miễn phí lưu bãi container.'
    },
    {
      id: 'exp-u36-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence informing the overseas buyer of sea transshipment schedule change:',
      promptVi: 'Sắp xếp câu: "Hãng tàu thông báo tàu mẹ bị hoãn chuyển tải ba ngày tại cảng Singapore do thời tiết xấu."',
      englishSentence: 'The ocean carrier notified a three-day transshipment delay at Singapore port due to typhoon weather.',
      audioText: 'The ocean carrier notified a three-day transshipment delay at Singapore port due to typhoon weather.',
      phonetics: '/ði ˈoʊʃn ˈkæriər ˈnoʊtɪfaɪd ə θriː deɪ trænˈsʃɪpmənt dɪˈleɪ æt ˈsɪŋəpɔːr pɔːrt djuː tuː taɪˈfuːn ˈwɛðər/',
      wordPool: ['The', 'ocean', 'carrier', 'notified', 'a', 'three-day', 'transshipment', 'delay', 'at', 'Singapore', 'port', 'due', 'to', 'typhoon', 'weather.'],
      explanation: 'Chủ động thông báo lịch tàu cập bến mới giúp đối tác sắp xếp kho bãi và kế hoạch phân phối bán lẻ.',
      whyWrong: 'Minh bạch thông tin vận tải thể hiện sự chu đáo và đồng hành cùng khách hàng.',
      crucialNote: 'Kèm theo đường link tracking định vị vệ tinh GPS của con tàu container.',
      memoryHook: 'Transshipment delay = Chậm chuyển tải hàng hải.'
    },
    {
      id: 'exp-u36-3',
      type: 'choice',
      promptEn: 'What marine insurance clause provides maximum all-risk coverage for Vikoda bottled mineral water?',
      promptVi: 'Điều khoản bảo hiểm hàng hải nào bảo hiểm toàn diện mọi rủi ro vỡ hàng va đập trên biển?',
      englishSentence: 'Institute Cargo Clauses (A) covering all risks of loss or damage including maritime breakage.',
      audioText: 'Institute Cargo Clauses A covering all risks of loss or damage including maritime breakage.',
      options: [
        'Institute Cargo Clauses (A) covering all risks of loss or damage including maritime breakage.',
        'No insurance at all to save twenty dollars.',
        'Insurance that only pays if aliens attack the ship.'
      ],
      correctIndex: 0,
      explanation: 'Bảo hiểm loại A (ICC A) là loại bảo hiểm cao cấp nhất bồi thường cho mọi rủi ro thất thoát vỡ hàng trên biển.',
      whyWrong: 'Đối với hàng chai thủy tinh, bắt buộc phải mua bảo hiểm ICC A có điều khoản bể vỡ (breakage clause).',
      crucialNote: 'Khoản đầu tư bảo hiểm nhỏ bảo vệ trọn vẹn giá trị lô hàng container xuất khẩu.',
      memoryHook: 'ICC A all risks = Bảo hiểm hàng hải toàn diện loại A.'
    }
  ],

  // UNIT 37: Đàm Phán Nhà Phân Phối Độc Quyền Quốc Tế
  'unit-37': [
    {
      id: 'exp-u37-1',
      type: 'speak',
      promptEn: 'State the condition for granting territorial exclusivity in international agreements:',
      promptVi: 'Luyện nói điều kiện ràng buộc trao quyền phân phối độc quyền lãnh thổ trong hợp đồng quốc tế:',
      englishSentence: 'Exclusive distribution rights in Japan are contingent upon meeting guaranteed minimum quarterly purchase volumes.',
      audioText: 'Exclusive distribution rights in Japan are contingent upon meeting guaranteed minimum quarterly purchase volumes.',
      phonetics: '/ɪkˈskluːsɪv ˌdɪstrɪˈbjuːʃn raɪts ɪn dʒəˈpæn ɑːr kənˈtɪndʒənt əˈpɒn ˈmiːtɪŋ ˌɡærənˈtiːd ˈmɪnɪməm ˈkwɔːrtərli ˈpɜːrtʃəs ˈvɒljuːmz/',
      explanation: '"Contingent upon" = Phụ thuộc chặt chẽ vào việc hoàn thành sản lượng cam kết tối thiểu từng quý.',
      whyWrong: 'Không bao giờ trao độc quyền "chay"; nếu đối tác không đạt doanh số, Vikoda có quyền mở thêm kênh phân phối.',
      crucialNote: 'Bảo vệ thị phần và ngăn chặn tình trạng đối tác "ngâm" độc quyền nhưng không chịu bán hàng.',
      memoryHook: 'Contingent upon minimum volume = Ràng buộc theo sản lượng tối thiểu.'
    },
    {
      id: 'exp-u37-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence detailing the distributor obligation to protect brand trademark:',
      promptVi: 'Sắp xếp câu: "Nhà phân phối cam kết bảo vệ nhãn hiệu độc quyền và hình ảnh thương hiệu Vikoda tại thị trường sở tại."',
      englishSentence: 'The distributor commits to actively safeguarding Vikoda registered trademarks and brand reputation in the territory.',
      audioText: 'The distributor commits to actively safeguarding Vikoda registered trademarks and brand reputation in the territory.',
      phonetics: '/ðə dɪˈstrɪbjətər kəˈmɪts tuː ˈæktɪvli ˈseɪfɡɑːrdɪŋ vɪˈkoʊdə ˈrɛdʒɪstərd ˈtreɪdmɑːrks ænd brænd ˌrɛpjuˈteɪʃn ɪn ðə ˈtɛrətɔːri/',
      wordPool: ['The', 'distributor', 'commits', 'to', 'actively', 'safeguarding', 'Vikoda', 'registered', 'trademarks', 'and', 'brand', 'reputation', 'in', 'the', 'territory.'],
      explanation: 'Bảo vệ sở hữu trí tuệ (Intellectual Property) ngăn ngừa các hành vi làm giả nhãn hiệu và cạnh tranh không lành mạnh.',
      whyWrong: 'Nhãn hiệu Vikoda và logo hình giọt nước ngọc được đăng ký bảo hộ độc quyền quốc tế.',
      crucialNote: 'Quy định chế tài bồi thường thiệt hại nghiêm khắc nếu làm tổn hại thanh danh thương hiệu.',
      memoryHook: 'Safeguarding registered trademarks = Bảo vệ nhãn hiệu độc quyền đã đăng ký.'
    },
    {
      id: 'exp-u37-3',
      type: 'choice',
      promptEn: 'Which international arbitration forum is designated to resolve cross-border contract disputes?',
      promptVi: 'Trung tâm trọng tài quốc tế nào được chỉ định để giải quyết tranh chấp hợp đồng thương mại xuyên biên giới?',
      englishSentence: 'The Singapore International Arbitration Centre (SIAC) conducting proceedings under English law.',
      audioText: 'The Singapore International Arbitration Centre conducting proceedings under English law.',
      options: [
        'The Singapore International Arbitration Centre (SIAC) conducting proceedings under English law.',
        'A local village drum circle.',
        'Street fighting with loud arguments.'
      ],
      correctIndex: 0,
      explanation: 'SIAC (Singapore) là tổ chức trọng tài thương mại độc lập, công bằng và uy tín bậc nhất Châu Á.',
      whyWrong: 'Phán quyết của trọng tài SIAC có hiệu lực thi hành án tại hơn 160 quốc gia theo Công ước New York 1958.',
      crucialNote: 'Điều khoản trọng tài trung lập bảo vệ an toàn pháp lý cho cả Vikoda và đối tác nước ngoài.',
      memoryHook: 'SIAC Arbitration = Trọng tài quốc tế Singapore uy tín.'
    }
  ],

  // UNIT 39: Ngoại Giao Sân Golf & Nâng Ly Doanh Nhân
  'unit-39': [
    {
      id: 'exp-u39-1',
      type: 'speak',
      promptEn: 'Deliver the diplomatic golf toast celebrating strategic cross-border synergy:',
      promptVi: 'Luyện nói câu nâng ly ngoại giao trên sân golf chúc mừng sự cộng hưởng chiến lược giữa hai tập đoàn:',
      englishSentence: 'Here is to a magnificent round of golf, genuine fellowship, and a prosperous strategic alliance between our enterprises.',
      audioText: 'Here is to a magnificent round of golf, genuine fellowship, and a prosperous strategic alliance between our enterprises.',
      phonetics: '/hɪər ɪz tuː ə mæɡˈnɪfɪsnt raʊnd əv ɡɒlf, ˈdʒɛnjuɪn ˈfɛloʊʃɪp, ænd ə ˈprɒspərəs strəˈtiːdʒɪk əˈlaɪəns bɪˈtwiːn ˈaʊər ˈɛntərpraɪzɪz/',
      explanation: '"Here is to..." = Lời chúc mừng nâng ly trang nhã trên bàn tiệc sau trận đánh golf giao hữu.',
      whyWrong: 'Ngoại giao sân golf (Golf Diplomacy) là nơi các thương vụ triệu đô được kết nối và tạo dựng niềm tin.',
      crucialNote: 'Uống nước khoáng kiềm Vikoda trên sân giúp bổ sung vi khoáng điện giải và duy trì độ tập trung swing.',
      memoryHook: 'Prosperous strategic alliance = Liên minh chiến lược thịnh vượng bền lâu.'
    },
    {
      id: 'exp-u39-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence connecting sportsmanship with corporate integrity:',
      promptVi: 'Sắp xếp câu: "Tinh thần thể thao chân chính trên sân golf phản ánh tính trung thực và kỷ luật trong kinh doanh."',
      englishSentence: 'True sportsmanship on the golf course reflects utmost integrity and ethical discipline in corporate business.',
      audioText: 'True sportsmanship on the golf course reflects utmost integrity and ethical discipline in corporate business.',
      phonetics: '/truː ˈspɔːrtsmənʃɪp ɒn ðə ɡɒlf kɔːrs rɪˈflɛkts ˈʌtmoʊst ɪnˈtɛɡrəti ænd ˈɛθɪkl ˈdɪsəplɪn ɪn ˈkɔːrpərət ˈbɪznəs/',
      wordPool: ['True', 'sportsmanship', 'on', 'the', 'golf', 'course', 'reflects', 'utmost', 'integrity', 'and', 'ethical', 'discipline', 'in', 'corporate', 'business.'],
      explanation: 'Các lãnh đạo tập đoàn quốc tế thường chọn sân golf để quan sát tính cách, sự kiên nhẫn và tính trung thực của đối tác.',
      whyWrong: 'Thắng không kiêu, bại không nản; luôn tôn trọng luật chơi công bằng.',
      crucialNote: 'Phong thái đĩnh đạc trên sân golf chính là tấm danh thiếp quyền lực nhất của người lãnh đạo.',
      memoryHook: 'Sportsmanship reflects integrity = Tinh thần thể thao phản chiếu tính chính trực.'
    },
    {
      id: 'exp-u39-3',
      type: 'choice',
      promptEn: 'How should you gracefully transition from a casual golf conversation to discussing partnership term sheets?',
      promptVi: 'Cách chuyển từ câu chuyện thể thao thân mật sang bàn thảo bản ghi nhớ hợp tác (Term Sheet) tinh tế nhất:',
      englishSentence: 'Over refreshments, transition smoothly: "Building on our shared values today, let us examine the joint rollout timeline."',
      audioText: 'Building on our shared values today, let us examine the joint rollout timeline.',
      options: [
        'Over refreshments, transition smoothly: "Building on our shared values today, let us examine the joint rollout timeline."',
        'Force them to sign papers on the grass immediately.',
        'Talk only about golf and forget about the business deal.'
      ],
      correctIndex: 0,
      explanation: 'Thời điểm thưởng thức nước mát tại Club House sau trận golf là lúc tinh thần thoải mái nhất để bàn chuyện lớn.',
      whyWrong: 'Chuyển mạch tự nhiên dựa trên các giá trị chung đã đồng thuận trên sân golf.',
      crucialNote: 'Chuẩn bị sẵn bản tóm tắt Term Sheet ngắn gọn 1 trang in trên giấy cao cấp.',
      memoryHook: 'Building on shared values = Dựa trên những giá trị chung vừa kết nối.'
    }
  ],

  // UNIT 40: Đại Hội Cổ Đông & Ký Kết Triệu Đô C-Suite
  'unit-40': [
    {
      id: 'exp-u40-1',
      type: 'speak',
      promptEn: 'Deliver the historic joint venture signing speech at the international press conference:',
      promptVi: 'Luyện nói lời tuyên thệ tại lễ ký kết liên doanh quốc tế trước các cơ quan báo chí truyền thông:',
      englishSentence: 'Today marks a historic milestone as we unite our global strengths to share Vietnam’s liquid jade with the entire world.',
      audioText: 'Today marks a historic milestone as we unite our global strengths to share Vietnam’s liquid jade with the entire world.',
      phonetics: '/təˈdeɪ mɑːrks ə hɪˈstɒrɪk ˈmaɪlstoʊn æz wiː juːˈnaɪt ˈaʊər ˈɡloʊbl strɛŋkθs tuː ʃɛər ˌvjɛtˈnɑːmz ˈlɪkwɪd dʒeɪd wɪð ði ɪnˈtaɪər wɜːrld/',
      explanation: '"Vietnam’s liquid jade" = Giọt ngọc lỏng của non sông đất Việt.',
      whyWrong: 'Lời tuyên bố khẳng định tầm vóc và khát vọng đưa thương hiệu Vikoda rạng danh năm châu.',
      crucialNote: 'Bài phát biểu truyền cảm hứng cao độ, khắc ghi dấu ấn lãnh đạo ngoại giao toàn cầu C1-C2.',
      memoryHook: 'Historic milestone for liquid jade = Mốc son lịch sử đưa giọt ngọc trời ra thế giới.'
    },
    {
      id: 'exp-u40-2',
      type: 'word_order',
      promptEn: 'Arrange the sentence affirming commitment to shareholder value and ecological stewardship:',
      promptVi: 'Sắp xếp câu: "Liên doanh cam kết đem lại lợi nhuận bền vững cho cổ đông và phụng sự sức khỏe cộng đồng toàn cầu."',
      englishSentence: 'The joint venture commits to delivering sustainable shareholder returns while serving global human health and wellness.',
      audioText: 'The joint venture commits to delivering sustainable shareholder returns while serving global human health and wellness.',
      phonetics: '/ðə dʒɔɪnt ˈvɛntʃər kəˈmɪts tuː dɪˈlɪvərɪŋ səˈsteɪnəbl ˈʃɛərhoʊldər rɪˈtɜːrnz waɪl ˈsɜːrvɪŋ ˈɡloʊbl ˈhjuːmən hɛlθ ænd ˈwɛlnəs/',
      wordPool: ['The', 'joint', 'venture', 'commits', 'to', 'delivering', 'sustainable', 'shareholder', 'returns', 'while', 'serving', 'global', 'human', 'health', 'and', 'wellness.'],
      explanation: 'Kinh doanh có trách nhiệm: Lợi nhuận tài chính song hành cùng sứ mệnh phụng sự sức khỏe nhân loại.',
      whyWrong: 'Cổ đông quốc tế luôn đánh giá cao những doanh nghiệp có sứ mệnh cao cả và quản trị minh bạch.',
      crucialNote: 'Khép lại lộ trình 40 bài học bằng đỉnh cao ngoại giao và quản trị chiến lược toàn cầu.',
      memoryHook: 'Serving global health = Phụng sự sức khỏe và hạnh phúc toàn cầu.'
    },
    {
      id: 'exp-u40-3',
      type: 'choice',
      promptEn: 'What is the ultimate lifelong takeaway for every certified Vikoda Global Brand Ambassador?',
      promptVi: 'Bài học đắt giá suốt đời của mỗi Đại Sứ Thương Hiệu Toàn Cầu Vikoda khi tốt nghiệp là gì?',
      englishSentence: 'Original as Jade in Stone: True excellence requires relentless grinding, uncompromising integrity, and unwavering dedication.',
      audioText: 'Original as Jade in Stone: True excellence requires relentless grinding, uncompromising integrity, and unwavering dedication.',
      options: [
        'Original as Jade in Stone: True excellence requires relentless grinding, uncompromising integrity, and unwavering dedication.',
        'Forget everything and stop practicing English forever.',
        'Believe that learning is finished after passing one test.'
      ],
      correctIndex: 0,
      explanation: 'Nguyên bản như Ngọc Trong Đá: Xuất sắc đích thực đòi hỏi rèn luyện không ngừng, chính trực tuyệt đối và cống hiến kiên định.',
      whyWrong: 'Hành trình học tập và hoàn thiện bản thân không bao giờ dừng lại.',
      crucialNote: 'Chúc mừng bạn đã hoàn thành trọn vẹn 40 bài học chuẩn quốc tế của Học Viện Vikoda!',
      memoryHook: 'Original as Jade in Stone = Nguyên bản như Ngọc Trong Đá.'
    }
  ]
};
