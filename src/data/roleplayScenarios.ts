import { RoleplayScenario } from '../types';

export const ROLEPLAY_SCENARIOS: RoleplayScenario[] = [
  {
    id: 'daily-standup',
    title: 'Báo Cáo Tiến Độ Trong Daily Standup (Scrum Meeting)',
    subtitle: 'Nêu tiến độ 3 câu vàng: Hôm qua làm gì, hôm nay làm gì, và có vướng mắc (blocker) gì không.',
    industry: 'tech',
    difficulty: 'Beginner',
    durationMinutes: 4,
    objective: 'Báo cáo súc tích, chuyên nghiệp trong vòng 60 giây và khéo léo nhờ hỗ trợ khi bị kẹt việc.',
    dialogue: [
      {
        speaker: 'partner',
        speakerName: 'Alex Turner',
        speakerRole: 'Scrum Master / Lead',
        avatar: '👨‍💼',
        message: 'Alright everyone, let us keep the standup under 15 minutes. Minh, you are up! How are things tracking with the payment integration module?',
        vietnameseTranslation: 'Được rồi mọi người, hãy giữ buổi standup này dưới 15 phút nhé. Minh, đến lượt bạn! Tiến độ module tích hợp thanh toán thế nào rồi?',
        culturalNote: 'Trong Daily Standup kiểu Mỹ/Châu Âu, người ta cực kỳ quý trọng sự ngắn gọn. Đừng kể lể dài dòng chi tiết kỹ thuật trừ khi liên quan trực tiếp đến blocker.',
        options: [
          {
            text: 'Yesterday I finished the Stripe webhook. Today I am running integration tests. No blockers on my end, ready for QA by 3 PM.',
            tone: 'perfect',
            score: 100,
            feedback: 'Xuất sắc! Đúng chuẩn 3 ý vàng: Yesterday - Today - Blockers. Ngắn gọn, có mốc thời gian rõ ràng (3 PM).'
          },
          {
            text: 'I worked on it yesterday and today I will continue working on it. It is very hard and complex.',
            tone: 'too-passive',
            score: 55,
            feedback: 'Quá mơ hồ! "continue working on it" không cho người nghe biết bạn đã xong phần nào và khi nào sẽ bàn giao.'
          },
          {
            text: 'I wrote 500 lines of code, refactored database tables, argued with QA about a small bug, and attended 3 meetings.',
            tone: 'too-blunt',
            score: 65,
            feedback: 'Kể lể quá nhiều chi tiết vụn vặt làm loãng standup. Chỉ cần tập trung vào output chính (deliverables).'
          }
        ]
      },
      {
        speaker: 'partner',
        speakerName: 'Alex Turner',
        speakerRole: 'Scrum Master / Lead',
        avatar: '👨‍💼',
        message: 'Great progress on Stripe! But what about the third-party invoice API? Are we still waiting for the API key from the client’s IT security team?',
        vietnameseTranslation: 'Tiến độ Stripe rất tốt! Nhưng còn API xuất hóa đơn bên thứ 3 thì sao? Chúng ta vẫn đang đợi cấp API key từ đội IT Security của khách hàng à?',
        culturalNote: 'Khi gặp sự cố từ bên ngoài (external dependency), hãy báo rõ tác động và chủ động đề xuất giải pháp.',
        options: [
          {
            text: 'Yes, that is currently a blocker. I pinged their lead this morning. If they do not respond by noon, could you help escalate this on your management sync?',
            tone: 'perfect',
            score: 100,
            feedback: 'Rất khéo léo! Vừa cho thấy bạn đã chủ động hành động (pinged this morning), vừa nhờ sếp can thiệp đúng lúc (escalate by noon).'
          },
          {
            text: 'They did not give it to me so I cannot do anything. It is their fault.',
            tone: 'too-blunt',
            score: 50,
            feedback: 'Cách nói mang tính đổ lỗi ("It is their fault") sẽ bị đánh giá là thiếu tính chuyên nghiệp và thiếu tinh thần làm chủ công việc.'
          },
          {
            text: 'I am not sure, maybe they forgot. I will just wait until they remember.',
            tone: 'too-passive',
            score: 45,
            feedback: 'Thụ động! Trong môi trường quốc tế, bạn cần thể hiện tính "proactive" (chủ động tháo gỡ khó khăn).'
          }
        ]
      },
      {
        speaker: 'partner',
        speakerName: 'Alex Turner',
        speakerRole: 'Scrum Master / Lead',
        avatar: '👨‍💼',
        message: 'Understood. I will raise it directly with their Director during my 11 AM sync. Thanks for flagging it early, Minh!',
        vietnameseTranslation: 'Tôi hiểu rồi. Tôi sẽ trực tiếp nêu vấn đề này với Giám đốc của họ trong buổi họp lúc 11h. Cảm ơn Minh vì đã báo sớm!',
        culturalNote: 'Chúc mừng bạn! Bạn đã hoàn thành xuất sắc lượt giao tiếp và bảo vệ tiến độ của cả đội ngũ.',
        options: [
          {
            text: 'Thanks Alex! Appreciate the support. I will keep pushing on the test coverage in the meantime.',
            tone: 'perfect',
            score: 100,
            feedback: 'Kết thúc hoàn hảo! Thể hiện sự trân trọng và khẳng định bạn vẫn đang tận dụng thời gian hiệu quả.'
          }
        ]
      }
    ]
  },
  {
    id: 'salary-negotiation',
    title: 'Thương Thảo Lương & Thăng Chức Với Sếp (1-on-1 Review)',
    subtitle: 'Nghệ thuật đề xuất tăng lương dựa trên giá trị thực tế thay vì kể khổ.',
    industry: 'general',
    difficulty: 'Advanced',
    durationMinutes: 5,
    objective: 'Thuyết phục sếp tăng mức thù lao dựa trên số liệu đóng góp (data-backed) và phản hồi lịch thiệp trước sự từ chối ban đầu.',
    dialogue: [
      {
        speaker: 'partner',
        speakerName: 'Sarah Jenkins',
        speakerRole: 'VP of Operations',
        avatar: '👩‍💼',
        message: 'Thanks for scheduling this 1-on-1, Minh. I saw on your agenda that you wanted to discuss compensation and your career progression. Let us hear your thoughts.',
        vietnameseTranslation: 'Cảm ơn Minh vì đã chủ động đặt lịch họp này. Tôi thấy trong lịch trình bạn muốn trao đổi về thù lao và lộ trình sự nghiệp. Hãy chia sẻ suy nghĩ của bạn nhé.',
        culturalNote: 'Khi mở đầu đàm phán lương, đừng nói "vật giá leo thang" hay "tôi cần tiền". Hãy mở đầu bằng giá trị bạn đã mang lại cho công ty.',
        options: [
          {
            text: 'Over the past year, I took ownership of our top 3 accounts, increasing retention by 28% and mentoring 2 juniors. Based on this expanded impact, I would like to propose a 15% salary adjustment.',
            tone: 'perfect',
            score: 100,
            feedback: 'Cực kỳ thuyết phục! Dùng số liệu rõ ràng (28% retention, 2 juniors), gắn liền với mức đề xuất cụ thể.'
          },
          {
            text: 'I have been here for 2 years and my rent has gone up a lot, so I really need more salary right now.',
            tone: 'too-passive',
            score: 40,
            feedback: 'Lý do cá nhân (tiền thuê nhà tăng) không có giá trị với doanh nghiệp. Doanh nghiệp trả tiền dựa trên giá trị tạo ra, không phải chi phí sinh hoạt cá nhân.'
          },
          {
            text: 'Other companies are paying 20% more for my position, so you should match it or I might have to look elsewhere.',
            tone: 'too-blunt',
            score: 60,
            feedback: 'Đe dọa ra đi (ultimatum) ngay câu đầu tiên sẽ kích hoạt cơ chế phòng thủ của sếp và tạo bầu không khí đối đầu căng thẳng.'
          }
        ]
      },
      {
        speaker: 'partner',
        speakerName: 'Sarah Jenkins',
        speakerRole: 'VP of Operations',
        avatar: '👩‍💼',
        message: 'Your contributions on those accounts have been fantastic, Minh. However, company budgets are extremely tight this quarter. I am not sure HR can approve a 15% bump right now.',
        vietnameseTranslation: 'Những đóng góp của bạn cho các tài khoản đó thực sự rất tuyệt vời. Tuy nhiên, ngân sách công ty quý này đang rất hạn hẹp. Tôi không chắc HR có thể duyệt tăng 15% ngay bây giờ.',
        culturalNote: 'Đây là tình huống 90% người đi làm gặp phải ("ngân sách hạn hẹp"). Đừng bỏ cuộc và cũng đừng tỏ ra thất vọng. Hãy đàm phán các phúc lợi khác hoặc chốt thời điểm đánh giá lại.',
        options: [
          {
            text: 'I completely understand the budget constraints. If a 15% base bump is difficult today, could we explore an 8% adjustment now, with a performance-based bonus and a committed review in 6 months?',
            tone: 'perfect',
            score: 100,
            feedback: 'Kỹ năng đàm phán bậc thầy! Thể hiện sự thấu hiểu (empathy), đưa ra giải pháp trung gian (8% + bonus + review sau 6 tháng).'
          },
          {
            text: 'Okay, never mind then. I guess I will just work less since you cannot pay me properly.',
            tone: 'too-blunt',
            score: 30,
            feedback: 'Thái độ giận dỗi (passive-aggressive) sẽ phá hủy hoàn toàn hình ảnh chuyên nghiệp và cơ hội thăng tiến tương lai.'
          },
          {
            text: 'Oh... that is fine. I understand. Sorry for asking.',
            tone: 'too-passive',
            score: 45,
            feedback: 'Bỏ cuộc quá sớm và xin lỗi ("Sorry for asking"). Nhớ rằng bạn có quyền đề xuất quyền lợi chính đáng cho mình!'
          }
        ]
      },
      {
        speaker: 'partner',
        speakerName: 'Sarah Jenkins',
        speakerRole: 'VP of Operations',
        avatar: '👩‍💼',
        message: 'That sounds like a very pragmatic compromise. Let me bring that specific proposal to HR and finance. I will have an official answer for you by next Wednesday.',
        vietnameseTranslation: 'Đó là một sự thỏa hiệp rất thực tế. Để tôi mang đề xuất cụ thể này trao đổi với bộ phận HR và Tài chính. Tôi sẽ có câu trả lời chính thức cho bạn trước thứ Tư tuần tới.',
        culturalNote: 'Bạn đã đạt được cam kết hành động từ sếp kèm mốc thời gian chốt (next Wednesday).',
        options: [
          {
            text: 'Thank you Sarah! I really appreciate your advocacy. I will follow up with you on Wednesday.',
            tone: 'perfect',
            score: 100,
            feedback: 'Xuất sắc! Lời cảm ơn lịch sự, dùng từ "advocacy" (sự ủng hộ/tiếng nói bênh vực) tạo thiện cảm lớn với lãnh đạo.'
          }
        ]
      }
    ]
  },
  {
    id: 'angry-client-deescalation',
    title: 'Xử Lý Khi Khách Hàng Nước Ngoài Giận Dữ Về Sự Cố',
    subtitle: 'Hạ nhiệt cơn giận, bảo vệ uy tín công ty và cam kết giải pháp tức thì.',
    industry: 'marketing',
    difficulty: 'Intermediate',
    durationMinutes: 4,
    objective: 'Xoa dịu khách hàng bằng kỹ thuật L.A.S.T (Listen, Apologize, Solve, Thank) mà không tự ý nhận tội gây rủi ro pháp lý.',
    dialogue: [
      {
        speaker: 'partner',
        speakerName: 'David Miller',
        speakerRole: 'Enterprise Client Director',
        avatar: '😡',
        message: 'Minh, this is unacceptable! Your system went down right in the middle of our biggest marketing campaign of the quarter. We lost thousands of dollars in ad spend! What is going on?',
        vietnameseTranslation: 'Minh, việc này không thể chấp nhận được! Hệ thống của bạn bị sập ngay giữa chiến dịch marketing lớn nhất quý của chúng tôi. Chúng tôi mất hàng ngàn đô la tiền quảng cáo! Rốt cuộc chuyện gì đang xảy ra vậy?',
        culturalNote: 'Khách hàng đang trong trạng thái kích động cao độ. Tuyệt đối không cãi lý, không ngắt lời và không đổ lỗi cho bên thứ ba ngay lúc này.',
        options: [
          {
            text: 'David, I hear your frustration and completely understand how critical this campaign launch is for your team. Our technical leads are actively investigating the issue right now.',
            tone: 'perfect',
            score: 100,
            feedback: 'Tuyệt vời! Công nhận cảm xúc của khách (validate feelings) trước khi giải thích sự việc.'
          },
          {
            text: 'Calm down, it is not our fault. AWS cloud server had a problem worldwide.',
            tone: 'too-blunt',
            score: 35,
            feedback: 'Bảo khách hàng "Calm down" giống như châm thêm dầu vào lửa! Và vội vàng đổ lỗi cho AWS khiến bạn trông thiếu trách nhiệm.'
          },
          {
            text: 'Oh my god, I am so sorry! We made a terrible mistake! Our developer broke the code!',
            tone: 'too-passive',
            score: 50,
            feedback: 'Nhận lỗi hoảng loạn và tố cáo lập trình viên của mình có thể gây rủi ro bồi thường pháp lý nghiêm trọng.'
          }
        ]
      },
      {
        speaker: 'partner',
        speakerName: 'David Miller',
        speakerRole: 'Enterprise Client Director',
        avatar: '😤',
        message: 'Fine, but what is the exact timeline for getting it back up? My executive team is breathing down my neck!',
        vietnameseTranslation: 'Được rồi, nhưng thời gian cụ thể khi nào hệ thống hoạt động trở lại? Ban giám đốc của tôi đang hối thúc từng phút một!',
        culturalNote: 'Khách hàng cần một cam kết cập nhật tiến độ (SLA - Service Level Agreement) để họ đi báo cáo với sếp của họ.',
        options: [
          {
            text: 'We have restored 80% of core traffic on our backup cluster. I will provide you with a written status update every 20 minutes until we reach 100% stability.',
            tone: 'perfect',
            score: 100,
            feedback: 'Câu trả lời chuẩn mực! Báo cáo tiến độ hiện tại (80%) và đưa ra cam kết rõ ràng (cập nhật mỗi 20 phút) giúp khách an tâm báo cáo lên cấp trên.'
          },
          {
            text: 'I cannot say. It will take as long as it takes. Software is unpredictable.',
            tone: 'too-blunt',
            score: 40,
            feedback: 'Câu trả lời vô trách nhiệm khiến khách hàng mất hết niềm tin vào đối tác.'
          },
          {
            text: 'I promise it will be fixed in exactly 2 minutes! (Even though you are not sure)',
            tone: 'too-passive',
            score: 45,
            feedback: 'Hứa lèo để đối phó ("Over-promising and under-delivering") sẽ biến sự cố thành thảm họa nếu 2 phút sau chưa xong.'
          }
        ]
      }
    ]
  }
];
