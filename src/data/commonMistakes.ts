import { CommonMistakeItem } from '../types';

export const COMMON_MISTAKES: CommonMistakeItem[] = [
  {
    id: 'cm-1',
    wrongSentence: 'We need to discuss about this issue in tomorrow’s meeting.',
    correctSentence: 'We need to discuss this issue in tomorrow’s meeting.',
    vietnameseMeaning: 'Chúng ta cần thảo luận về vấn đề này trong cuộc họp ngày mai.',
    explanation: 'Động từ "discuss" là ngoại động từ trực tiếp (transitive verb), đã bao hàm nghĩa "nói VỀ cái gì" (talk about). Do đó tuyệt đối không thêm giới từ "about" sau "discuss".',
    whyVietnameseMakeIt: 'Người Việt có thói quen dịch từng từ "thảo luận VỀ" -> "discuss ABOUT".',
    category: 'Preposition',
    options: [
      'We need to discuss about this issue in tomorrow’s meeting.',
      'We need to discuss this issue in tomorrow’s meeting.',
      'We need to discussion this issue in tomorrow’s meeting.',
      'We need to discuss on this issue in tomorrow’s meeting.'
    ],
    correctOptionIndex: 1
  },
  {
    id: 'cm-2',
    wrongSentence: 'I look forward to hear from you soon.',
    correctSentence: 'I look forward to hearing from you soon.',
    vietnameseMeaning: 'Tôi rất mong sớm nhận được phản hồi từ bạn.',
    explanation: 'Trong cấu trúc "look forward to something", chữ "to" là một giới từ (preposition), không phải to-infinitive! Sau giới từ bắt buộc phải là Danh từ hoặc Danh động từ (V-ing): "look forward to hearing/meeting/working".',
    whyVietnameseMakeIt: 'Nhiều người nhìn thấy chữ "to" là tự động điền động từ nguyên mẫu (V1).',
    category: 'Grammar',
    options: [
      'I look forward to hear from you soon.',
      'I look forward for hearing from you soon.',
      'I look forward to hearing from you soon.',
      'I am looking forward to hear from you soon.'
    ],
    correctOptionIndex: 2
  },
  {
    id: 'cm-3',
    wrongSentence: 'Could you please explain me the new company policy?',
    correctSentence: 'Could you please explain the new company policy to me?',
    vietnameseMeaning: 'Bạn có thể giải thích cho tôi chính sách mới của công ty được không?',
    explanation: 'Động từ "explain" không đi với 2 tân ngữ trực tiếp như "tell" (Tell me something). Cấu trúc đúng là: "Explain something TO somebody" hoặc "Explain TO somebody that...".',
    whyVietnameseMakeIt: 'Dịch theo cấu trúc tiếng Việt "giải thích TÔI cái gì" -> "explain me something".',
    category: 'Preposition',
    options: [
      'Could you please explain me the new company policy?',
      'Could you please explain to me about the new policy?',
      'Could you please explain the new company policy to me?',
      'Could you please explain for me the new company policy?'
    ],
    correctOptionIndex: 2
  },
  {
    id: 'cm-4',
    wrongSentence: 'Our company has over 200 staffs in the Hanoi branch.',
    correctSentence: 'Our company has over 200 staff members (or employees) in the Hanoi branch.',
    vietnameseMeaning: 'Công ty chúng tôi có hơn 200 nhân viên tại chi nhánh Hà Nội.',
    explanation: 'Từ "staff" trong tiếng Anh là danh từ tập hợp không đếm được (collective noun), không bao giờ thêm "s" để chỉ nhiều nhân viên. Nếu muốn đếm số lượng người cụ thể, phải dùng "staff members" hoặc "employees".',
    whyVietnameseMakeIt: 'Thấy số lượng nhiều (200) nên người Việt quen tay thêm "s" thành "staffs".',
    category: 'Word Choice',
    options: [
      'Our company has over 200 staffs in the Hanoi branch.',
      'Our company has over 200 staff members in the Hanoi branch.',
      'Our company has over 200 of staffs in the Hanoi branch.',
      'Our company has over 200 staff person in the Hanoi branch.'
    ],
    correctOptionIndex: 1
  },
  {
    id: 'cm-5',
    wrongSentence: 'Please send me back when you finish reading the contract.',
    correctSentence: 'Please get back to me (or reply) when you finish reading the contract.',
    vietnameseMeaning: 'Vui lòng phản hồi lại tôi khi bạn đọc xong bản hợp đồng.',
    explanation: '"Send me back" có nghĩa là "gửi trả lại tôi về chỗ cũ" (như gửi trả một món hàng hay trục xuất người)! Để nói "phản hồi lại cho tôi", người bản xứ dùng "get back to me", "reply to me", hoặc "revert to me".',
    whyVietnameseMakeIt: 'Dịch chữ "gửi lại cho tôi" thành "send me back".',
    category: 'Word Choice',
    options: [
      'Please send me back when you finish reading the contract.',
      'Please give me back when you finish reading the contract.',
      'Please get back to me when you finish reading the contract.',
      'Please return me back when you finish reading the contract.'
    ],
    correctOptionIndex: 2
  },
  {
    id: 'cm-6',
    wrongSentence: 'I work at this multinational corporation for 4 years.',
    correctSentence: 'I have been working at this multinational corporation for 4 years.',
    vietnameseMeaning: 'Tôi đã và đang làm việc tại tập đoàn đa quốc gia này được 4 năm rồi.',
    explanation: 'Hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn ở hiện tại kèm khoảng thời gian ("for 4 years") bắt buộc phải chia thì Hiện tại Hoàn thành (hoặc Tiếp diễn): "have worked / have been working". Dùng thì Hiện tại đơn "I work" là sai ngữ pháp.',
    whyVietnameseMakeIt: 'Tiếng Việt không chia thì động từ phức tạp, chỉ cần nói "tôi làm ở đây 4 năm".',
    category: 'Grammar',
    options: [
      'I work at this multinational corporation for 4 years.',
      'I am working at this multinational corporation for 4 years.',
      'I have been working at this multinational corporation for 4 years.',
      'I worked at this multinational corporation for 4 years now.'
    ],
    correctOptionIndex: 2
  },
  {
    id: 'cm-7',
    wrongSentence: 'I suggest to schedule another meeting next week.',
    correctSentence: 'I suggest scheduling another meeting next week (or I suggest that we schedule...).',
    vietnameseMeaning: 'Tôi đề xuất sắp xếp một cuộc họp khác vào tuần tới.',
    explanation: 'Sau động từ "suggest", không bao giờ dùng "to V". Cấu trúc chuẩn là: "suggest + V-ing" HOẶC "suggest that + S + (should) + V nguyên mẫu".',
    whyVietnameseMakeIt: 'Nghĩ rằng "suggest" giống các động từ như "want to", "decide to", "plan to".',
    category: 'Grammar',
    options: [
      'I suggest to schedule another meeting next week.',
      'I suggest scheduling another meeting next week.',
      'I suggest for scheduling another meeting next week.',
      'I suggest us to schedule another meeting next week.'
    ],
    correctOptionIndex: 1
  },
  {
    id: 'cm-8',
    wrongSentence: 'Sorry for late, the traffic was terrible this morning.',
    correctSentence: 'Apologies for being late, the traffic was terrible this morning.',
    vietnameseMeaning: 'Xin lỗi vì tôi đến trễ, sáng nay giao thông tắc nghẽn quá.',
    explanation: '"Late" là tính từ (Adjective), không phải danh từ. Sau giới từ "for", phải dùng danh từ hoặc V-ing của to be: "Apologies for being late" hoặc "Sorry for the delay / my late arrival".',
    whyVietnameseMakeIt: 'Dịch "xin lỗi vì trễ" -> "sorry for late".',
    category: 'Grammar',
    options: [
      'Sorry for late, the traffic was terrible this morning.',
      'Apologies for being late, the traffic was terrible this morning.',
      'Sorry to be late arrived, the traffic was terrible this morning.',
      'Apologize for late, the traffic was terrible this morning.'
    ],
    correctOptionIndex: 1
  }
];
