import { MeetingPhrase } from '../types';

export const MEETING_PHRASES: MeetingPhrase[] = [
  // 1. Mở đầu cuộc họp & Kiểm tra kỹ thuật (Open & Tech)
  {
    id: 'mp-1',
    category: 'open',
    english: 'Can everyone see my screen and hear me clearly?',
    phonetics: '/kæn ˈɛvrɪˌwʌn siː maɪ skriːn ænd hɪr miː ˈklɪərli/',
    vietnamese: 'Mọi người có nhìn thấy màn hình và nghe rõ tôi nói không?',
    situation: 'Dùng ngay đầu cuộc họp trực tuyến (Zoom/Teams/Meet) trước khi bắt đầu bài thuyết trình.',
    tone: 'polite',
    alternative: 'Is my screen coming through on your end?'
  },
  {
    id: 'mp-2',
    category: 'open',
    english: 'Let’s kick off today’s meeting. The main agenda is to align on the Q4 roadmap.',
    phonetics: '/lɛts kɪk ɔːf təˈdeɪz ˈmiːtɪŋ. ðə meɪn əˈdʒɛndə ɪz tuː əˈlaɪn/',
    vietnamese: 'Chúng ta hãy bắt đầu buổi họp hôm nay. Mục tiêu chính là thống nhất lộ trình Q4.',
    situation: 'Dành cho người chủ trì cuộc họp (Facilitator / PM / Manager).',
    tone: 'assertive',
    alternative: 'Since everyone is here, why don’t we dive straight into our agenda?'
  },
  {
    id: 'mp-3',
    category: 'techissue',
    english: 'Apologies, you broke up for a second. Could you please repeat that last point?',
    phonetics: '/əˈpɒlədʒiz, juː broʊk ʌp fɔːr ə ˈsɛkənd/',
    vietnamese: 'Xin lỗi, vừa rồi đường truyền bạn bị chập chờn một chút. Bạn có thể nhắc lại ý vừa rồi không?',
    situation: 'Khi mạng lag hoặc tiếng của đối phương bị ngắt quãng thay vì nói thô "What?".',
    tone: 'polite',
    alternative: 'Sorry, your audio lagged a bit. Would you mind repeating the last sentence?'
  },
  {
    id: 'mp-4',
    category: 'techissue',
    english: 'I think you might be on mute. We can see your lips moving.',
    phonetics: '/aɪ θɪŋk juː maɪt biː ɒn mjuːt/',
    vietnamese: 'Hình như bạn đang tắt mic rồi. Chúng tôi thấy bạn đang nói nhưng chưa có tiếng.',
    situation: 'Nhắc nhở nhẹ nhàng khi đồng nghiệp quên bật mic trong cuộc họp online.',
    tone: 'polite',
    alternative: 'Hey, you are muted right now!'
  },

  // 2. Ngắt lời lịch sự (Polite Interruption)
  {
    id: 'mp-5',
    category: 'interrupt',
    english: 'Sorry to jump in, but could I quickly add a data point here before we move on?',
    phonetics: '/ˈsɒri tuː dʒʌmp ɪn, bʌt kʊd aɪ ˈkwɪkli æd ə ˈdeɪtə pɔɪnt/',
    vietnamese: 'Xin lỗi vì ngắt lời một chút, nhưng tôi có thể bổ sung nhanh một số liệu vào chỗ này trước khi chuyển chủ đề không?',
    situation: 'Khi muốn đóng góp ý kiến gấp trong khi người khác đang nói mà vẫn giữ lịch sự tối đa.',
    tone: 'diplomatic',
    alternative: 'If I may chime in for a second, there is one key factor we should consider.'
  },
  {
    id: 'mp-6',
    category: 'interrupt',
    english: 'Hold on a second, to make sure I am on the same page, are you saying that the launch will be pushed back?',
    phonetics: '/hoʊld ɒn ə ˈsɛkənd, tuː meɪk ʃʊr aɪ æm ɒn ðə seɪm peɪdʒ/',
    vietnamese: 'Chờ một chút, để chắc chắn là tôi hiểu đúng ý bạn, có phải bạn đang nói việc ra mắt sẽ bị lùi lại không?',
    situation: 'Kiểm tra lại sự hiểu biết để tránh hiểu nhầm yêu cầu quan trọng.',
    tone: 'assertive',
    alternative: 'Just to clarify, are we saying the launch is postponed?'
  },

  // 3. Câu giờ khi chưa chuẩn bị câu trả lời (Buying Time)
  {
    id: 'mp-7',
    category: 'clarify',
    english: 'That is a great question. Let me pull up the latest numbers so I can give you an accurate answer.',
    phonetics: '/ðæt ɪz ə greɪt ˈkwɛstʃən. lɛt miː pʊl ʌp ðə ˈleɪtɪst ˈnʌmbərz/',
    vietnamese: 'Đó là một câu hỏi rất hay. Để tôi mở tài liệu số liệu mới nhất để trả lời bạn chính xác nhất nhé.',
    situation: 'Khi bất ngờ bị sếp/khách hỏi số liệu mà bạn chưa nhớ ngay trong đầu (câu giờ 10-15 giây siêu chuyên nghiệp).',
    tone: 'polite',
    alternative: 'Good question. Off the top of my head it’s around 20%, but let me verify the exact figure for you.'
  },
  {
    id: 'mp-8',
    category: 'clarify',
    english: 'I want to be thoughtful with my response. Can I review this with my team and circle back to you by EOD?',
    phonetics: '/aɪ wɒnt tuː biː ˈθɔːtfʊl wɪð maɪ rɪsˈpɒns. kæn aɪ ˈsɜːrkl bæk tuː juː baɪ iː-oʊ-diː/',
    vietnamese: 'Tôi muốn đưa ra câu trả lời thấu đáo nhất. Tôi xin phép trao đổi lại với đội ngũ và phản hồi lại bạn trước cuối ngày hôm nay được không?',
    situation: 'Khi câu hỏi phức tạp hoặc vượt quá thẩm quyền quyết định tức thì của bạn.',
    tone: 'diplomatic',
    alternative: 'Let me look into the details and follow up with you right after this call.'
  },

  // 4. Bất đồng quan điểm & Phản biện khéo léo (Diplomatic Disagreement)
  {
    id: 'mp-9',
    category: 'disagree',
    english: 'I see where you are coming from, but my main concern is that our bandwidth is currently stretched too thin.',
    phonetics: '/aɪ siː wɛər juː ɑːr ˈkʌmɪŋ frɒm, bʌt maɪ meɪn kənˈsɜːrn ɪz/',
    vietnamese: 'Tôi hiểu góc nhìn của bạn, nhưng điều tôi băn khoăn nhất là nguồn lực của team hiện đang bị quá tải.',
    situation: 'Khi sếp hoặc đối tác đề xuất thêm việc trong khi team đang cạn kiệt nhân lực.',
    tone: 'diplomatic',
    alternative: 'That makes sense in theory, but practically speaking, we don’t have the resources right now.'
  },
  {
    id: 'mp-10',
    category: 'disagree',
    english: 'I have a slightly different take on this. Looking at the user feedback, they seem to prioritize speed over extra features.',
    phonetics: '/aɪ hæv ə ˈslaɪtli ˈdɪfərənt teɪk ɒn ðɪs/',
    vietnamese: 'Tôi có một góc nhìn hơi khác một chút. Nhìn vào phản hồi từ người dùng, họ có vẻ ưu tiên tốc độ hơn là các tính năng phụ.',
    situation: 'Phản biện quan điểm sản phẩm một cách xây dựng bằng cách dựa trên dữ liệu (data-driven).',
    tone: 'assertive',
    alternative: 'From my perspective, our data indicates a different user preference.'
  },

  // 5. Kết luận & Chốt việc (Conclude & Action Items)
  {
    id: 'mp-11',
    category: 'conclude',
    english: 'So to wrap things up, the key action item for my team is to deliver the mockups by Friday.',
    phonetics: '/soʊ tuː ræp θɪŋz ʌp, ðə kiː ˈækʃən ˈaɪtəm fɔːr maɪ tiːm/',
    vietnamese: 'Để tóm tắt lại, nhiệm vụ chính của team tôi là bàn giao bản mockup thiết kế trước thứ Sáu.',
    situation: 'Khi chuẩn bị kết thúc cuộc họp, chốt lại cam kết để không bị bỏ sót.',
    tone: 'assertive',
    alternative: 'To summarize our next steps, I will own the design delivery by Friday.'
  },
  {
    id: 'mp-12',
    category: 'conclude',
    english: 'We have covered everything on the agenda. Thanks everyone for your active input!',
    phonetics: '/wiː hæv ˈkʌvərd ˈɛvrɪθɪŋ ɒn ðɪ ˈədʒɛndə/',
    vietnamese: 'Chúng ta đã đi qua tất cả các mục trong lịch trình. Cảm ơn mọi người vì những đóng góp tích cực!',
    situation: 'Lời kết thúc cuộc họp tràn đầy năng lượng tích cực.',
    tone: 'polite',
    alternative: 'That wraps up our meeting for today. Thank you all for your time!'
  },

  // 6. Phá băng & Small Talk đầu giờ (Small Talk)
  {
    id: 'mp-13',
    category: 'smalltalk',
    english: 'How is your week shaping up so far? Keeping busy with the new launch?',
    phonetics: '/haʊ ɪz jʊər wiːk ˈʃeɪpɪŋ ʌp soʊ fɑːr/',
    vietnamese: 'Tuần này của bạn thế nào rồi? Chắc đang bận rộn với đợt ra mắt mới hả?',
    situation: 'Nói chuyện xã giao 2-3 phút trong khi chờ mọi người vào đông đủ.',
    tone: 'polite',
    alternative: 'How have things been on your end this week?'
  },
  {
    id: 'mp-14',
    category: 'smalltalk',
    english: 'Any exciting plans for the upcoming weekend, or just catching up on some rest?',
    phonetics: '/ˈɛni ɪkˈsaɪtɪŋ plænz fɔːr ðɪ ˈʌpˌkʌmɪŋ ˈwiːkˌɛnd/',
    vietnamese: 'Cuối tuần này bạn có kế hoạch gì thú vị không, hay chỉ ở nhà nghỉ ngơi xả hơi thôi?',
    situation: 'Hỏi han thân thiện vào các cuộc họp chiều thứ Năm hoặc thứ Sáu.',
    tone: 'polite',
    alternative: 'Do you have any fun plans lined up for the weekend?'
  }
];
