import { BusinessVocabItem } from '../types';

export const BUSINESS_VOCAB: BusinessVocabItem[] = [
  {
    id: 'v-1',
    term: 'Touch base',
    type: 'idiom',
    industry: 'general',
    phonetics: '/tʌtʃ beɪs/',
    definitionVi: 'Liên hệ nhanh, cập nhật ngắn gọn tình hình với ai đó',
    exampleEn: 'Let us touch base tomorrow afternoon to review the final deck.',
    exampleVi: 'Chiều mai chúng ta cập nhật nhanh tình hình để xem qua bản thuyết trình cuối nhé.',
    corporateContext: 'Cực kỳ phổ biến trong email và chat công sở thay cho "call you" hoặc "contact you". Thể hiện sự tinh tế, không tạo áp lực họp dài.',
    avoidMistake: 'Tránh dịch thô theo nghĩa đen "chạm vào căn cứ". Đây là tiếng lóng văn phòng bắt nguồn từ bóng chày.'
  },
  {
    id: 'v-2',
    term: 'Circle back',
    type: 'phrasal_verb',
    industry: 'general',
    phonetics: '/ˈsɜːrkl bæk/',
    definitionVi: 'Quay lại trao đổi về một vấn đề sau khi đã có thêm thông tin',
    exampleEn: 'I will talk to the tech team and circle back with you by 4 PM.',
    exampleVi: 'Tôi sẽ trao đổi với đội kỹ thuật và quay lại phản hồi bạn trước 4 giờ chiều.',
    corporateContext: 'Dùng khi hiện tại chưa có câu trả lời chính xác, cần thời gian xác minh trước khi trả lời chính thức.',
    avoidMistake: 'Tránh nói "I will come back to you later" (nghe như bạn đang đi ra ngoài rồi quay lại phòng).'
  },
  {
    id: 'v-3',
    term: 'Bandwidth',
    type: 'buzzword',
    industry: 'general',
    phonetics: '/ˈbændwɪdθ/',
    definitionVi: 'Thời gian, dung lượng hoặc năng lực cá nhân để nhận thêm việc',
    exampleEn: 'I do not have the bandwidth to take on another project this week.',
    exampleVi: 'Tuần này tôi không còn đủ quỹ thời gian/sức lực để nhận thêm dự án nào nữa.',
    corporateContext: 'Cách từ chối nhận việc lịch sự và chuyên nghiệp nhất trong giới doanh nghiệp toàn cầu mà không mang tiếng lười biếng.',
    avoidMistake: 'Trong công nghệ là "băng thông mạng", nhưng trong giao tiếp văn phòng có nghĩa là "quỹ thời gian & sức lực cá nhân".'
  },
  {
    id: 'v-4',
    term: 'Bottleneck',
    type: 'buzzword',
    industry: 'general',
    phonetics: '/ˈbɒtlˌnɛk/',
    definitionVi: 'Nút thắt cổ chai; điểm nghẽn làm chậm toàn bộ tiến độ',
    exampleEn: 'The legal review is currently our biggest bottleneck.',
    exampleVi: 'Khâu xét duyệt pháp lý hiện là nút thắt cổ chai lớn nhất của chúng ta.',
    corporateContext: 'Dùng trong các buổi họp Retro, Post-mortem hoặc Standup khi phân tích lý do dự án bị chậm trễ.',
    avoidMistake: 'Tránh dùng từ thô ráp "blocker" cho con người. "Bottleneck" mang tính trung lập về quy trình hơn.'
  },
  {
    id: 'v-5',
    term: 'Low-hanging fruit',
    type: 'idiom',
    industry: 'marketing',
    phonetics: '/loʊ ˈhæŋɪŋ fruːt/',
    definitionVi: 'Mục tiêu/công việc dễ làm, ít tốn công nhưng mang lại kết quả ngay tức thì',
    exampleEn: 'Let us focus on the low-hanging fruit first to build early momentum.',
    exampleVi: 'Hãy tập trung vào những việc dễ gặt hái kết quả trước để tạo đà hưng phấn ban đầu.',
    corporateContext: 'Thường được các Giám đốc Chiến lược và Quản lý Sản phẩm sử dụng khi lập kế hoạch ưu tiên (Roadmap Prioritization).',
    avoidMistake: 'Không phải là "trái cây treo thấp". Ý chỉ "việc dễ đạt được nhất, có thể hái ngay mà không cần thang".'
  },
  {
    id: 'v-6',
    term: 'Push back',
    type: 'phrasal_verb',
    industry: 'general',
    phonetics: '/pʊʃ bæk/',
    definitionVi: 'Lùi lại lịch trình (thời gian) HOẶC phản biện, từ chối một yêu cầu vô lý',
    exampleEn: 'Can we push back the kickoff meeting to Friday? We also need to push back against their unreasonable deadline.',
    exampleVi: 'Chúng ta có thể lùi buổi họp kickoff sang thứ Sáu được không? Chúng ta cũng cần phản đối thời hạn vô lý của họ.',
    corporateContext: 'Có 2 nghĩa cực thông dụng: 1) dời ngày họp, 2) lên tiếng bảo vệ đội ngũ trước áp lực bên ngoài.',
    avoidMistake: 'Đừng nhầm với "delay" (thường mang hàm ý tiêu cực do chậm trễ). "Push back" mang tính chủ động điều chỉnh.'
  },
  {
    id: 'v-7',
    term: 'Take offline',
    type: 'idiom',
    industry: 'general',
    phonetics: '/teɪk ˌɒfˈlaɪn/',
    definitionVi: 'Tách riêng vấn đề ra để thảo luận riêng sau cuộc họp (tránh làm mất thời gian cả phòng)',
    exampleEn: 'This is a specific technical detail. Let us take it offline so we can keep the general meeting moving.',
    exampleVi: 'Đây là chi tiết kỹ thuật chuyên sâu. Chúng ta hãy thảo luận riêng sau cuộc họp để buổi họp chung tiếp tục tiến hành.',
    corporateContext: 'Kỹ năng làm chủ cuộc họp (Meeting Facilitation) cực quan trọng để cắt đứt các cuộc tranh luận dông dài.',
    avoidMistake: 'Không phải là "tắt mạng internet" hay "gặp mặt ngoài đời thực". Ở đây là "bàn riêng giữa 2-3 người có liên quan sau buổi họp".'
  },
  {
    id: 'v-8',
    term: 'Ballpark figure',
    type: 'idiom',
    industry: 'finance',
    phonetics: '/ˈbɔːlpɑːrk ˈfɪɡjər/',
    definitionVi: 'Con số ước tính sơ bộ / phỏng đoán áng chừng',
    exampleEn: 'Can you give me a ballpark figure for the total cloud infrastructure cost?',
    exampleVi: 'Bạn có thể cho tôi một con số ước chừng về tổng chi phí hạ tầng điện toán đám mây được không?',
    corporateContext: 'Dùng khi đối tác hoặc khách hàng cần con số tham khảo nhanh để duyệt chủ trương trước khi làm báo giá chi tiết.',
    avoidMistake: 'Tránh trả lời cứng nhắc "I do not know" khi sếp hỏi ước tính. Hãy đưa ra "a ballpark figure" kèm biên độ dao động.'
  },
  {
    id: 'v-9',
    term: 'Deliverables',
    type: 'collocation',
    industry: 'general',
    phonetics: '/dɪˈlɪvərəblz/',
    definitionVi: 'Sản phẩm bàn giao / kết quả đầu ra cụ thể đã cam kết trong hợp đồng/dự án',
    exampleEn: 'Our primary deliverables for Sprint 3 include the checkout flow and payment webhook.',
    exampleVi: 'Sản phẩm bàn giao chính của chúng tôi trong Sprint 3 bao gồm luồng thanh toán và webhook.',
    corporateContext: 'Từ chuẩn mực trong quản lý dự án PMP/Agile thay vì dùng từ mơ hồ như "works" hay "things to do".',
    avoidMistake: 'Luôn dùng dạng số nhiều (deliverables) khi nói về các hạng mục đầu ra của dự án.'
  },
  {
    id: 'v-10',
    term: 'Loop in / Keep in the loop',
    type: 'phrasal_verb',
    industry: 'general',
    phonetics: '/luːp ɪn/',
    definitionVi: 'Thêm ai đó vào luồng email/thông tin để họ nắm được diễn biến',
    exampleEn: 'I am looping in Sarah from Legal so she can review the terms.',
    exampleVi: 'Tôi đang cc thêm Sarah từ phòng Pháp chế để cô ấy xét duyệt các điều khoản.',
    corporateContext: 'Cụm từ cửa miệng trong email văn phòng quốc tế khi bấm "CC" hoặc thêm người vào kênh Slack.',
    avoidMistake: 'Thay vì viết "I add Sarah into email", hãy viết "I am looping in Sarah". Chuẩn bản ngữ hơn rất nhiều.'
  },
  {
    id: 'v-11',
    term: 'Stakeholder buy-in',
    type: 'collocation',
    industry: 'general',
    phonetics: '/ˈsteɪkhoʊldər baɪ ɪn/',
    definitionVi: 'Sự đồng thuận, ủng hộ và cam kết từ các bên liên quan chủ chốt',
    exampleEn: 'Before we implement the new policy, we need executive buy-in.',
    exampleVi: 'Trước khi áp dụng chính sách mới, chúng ta cần có sự đồng thuận từ ban lãnh đạo.',
    corporateContext: '"Buy-in" không phải là "mua vào" bằng tiền. Đó là việc thuyết phục người khác gật đầu ủng hộ ý tưởng của bạn.',
    avoidMistake: 'Tránh dịch thô "get agreement". Dùng "secure stakeholder buy-in" thể hiện trình độ tiếng Anh C-Level.'
  },
  {
    id: 'v-12',
    term: 'Hit the ground running',
    type: 'idiom',
    industry: 'hr',
    phonetics: '/hɪt ðə graʊnd ˈrʌnɪŋ/',
    definitionVi: 'Bắt nhịp ngay lập tức với công việc với năng suất cao mà không cần hướng dẫn rườm rà',
    exampleEn: 'We need an experienced senior engineer who can hit the ground running.',
    exampleVi: 'Chúng tôi cần một kỹ sư cấp cao dày dặn kinh nghiệm, người có thể bắt tay vào việc và tạo ra kết quả ngay.',
    corporateContext: 'Rất hay xuất hiện trong bản mô tả công việc (JD) và các buổi phỏng vấn tuyển dụng của các công ty đa quốc gia.',
    avoidMistake: 'Khi đi phỏng vấn, hãy dùng cụm từ này để thể hiện sự tự tin: "I am confident I can hit the ground running from day one."'
  }
];
