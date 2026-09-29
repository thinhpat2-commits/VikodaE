import { EmailTemplate } from '../types';

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: 'deadline-delay',
    title: 'Khéo léo xin lùi Deadline mà không làm mất uy tín',
    category: 'deadline',
    vietnameseContext: 'Dự án gặp sự cố kỹ thuật hoặc khối lượng công việc phát sinh ngoài dự kiến, cần xin dời hạn chót thêm vài ngày nhưng vẫn thể hiện trách nhiệm cao.',
    formality: 'formal',
    subject: 'Update on [ProjectName] Deliverable Timeline & Revised Milestone',
    body: `Hi [ManagerName/ClientName],

I am writing to share a brief update on the progress of [ProjectName].

While our team has completed [CompletedPortion], we encountered an unforeseen complexity regarding [SpecificBlocker/TechnicalRequirement]. To ensure that we do not compromise on security, quality, and thorough testing, I would like to propose adjusting our delivery date to [ProposedNewDate].

Here is our recovery plan to guarantee a smooth completion:
1. Complete [Task1] by [Date1]
2. Conduct final QA validation by [Date2]
3. Deliver the final package on [ProposedNewDate]

Please let me know if this revised timeline aligns with your schedule. I appreciate your understanding and support as we finalize this to the highest standard.

Best regards,
[YourName]
[YourTitle]`,
    variables: ['ManagerName/ClientName', 'ProjectName', 'CompletedPortion', 'SpecificBlocker/TechnicalRequirement', 'ProposedNewDate', 'Task1', 'Date1', 'Task2', 'Date2', 'YourName', 'YourTitle'],
    keyPhrases: [
      { phrase: 'unforeseen complexity', explanation: 'Sự phức tạp phát sinh ngoài dự tính (nghe chuyên nghiệp hơn là "we had a bug")' },
      { phrase: 'do not compromise on quality', explanation: 'Không đánh đổi chất lượng (lý do thuyết phục cấp trên)' },
      { phrase: 'aligns with your schedule', explanation: 'Có phù hợp với lịch trình của bạn không' }
    ],
    proTip: 'Đừng chỉ báo trễ! Luôn đi kèm "Recovery Plan" (Kế hoạch khắc phục) với các mốc thời gian cụ thể để người nhận yên tâm.'
  },
  {
    id: 'status-nudge',
    title: 'Nhắc khéo đồng nghiệp hoặc đối tác phản hồi tài liệu (Gentle Nudge)',
    category: 'followup',
    vietnameseContext: 'Đã gửi tài liệu hoặc yêu cầu xem xét 2 ngày trước nhưng chưa nhận được hồi âm. Cần nhắc lịch sự mà không tỏ ra hối thúc khó chịu.',
    formality: 'semi-formal',
    subject: 'Gentle follow-up: Review of [DocumentName/ProposalName]',
    body: `Hi [RecipientName],

I hope you are having a productive week.

I know how busy your schedule is, so I wanted to gently bump this email to the top of your inbox. Could you please take a quick look at the attached [DocumentName] when you get a chance? 

To keep the project moving forward without delay, having your feedback or sign-off by [TargetDate, e.g., Thursday 3 PM] would be greatly appreciated.

If you have any questions or need a quick 5-minute sync to walk through it, please let me know.

Thank you so much!

Best,
[YourName]`,
    variables: ['RecipientName', 'DocumentName', 'TargetDate', 'YourName'],
    keyPhrases: [
      { phrase: 'gently bump this to the top of your inbox', explanation: 'Cách diễn đạt tự nhiên khi muốn nhắc mail mà không áp đặt' },
      { phrase: 'keep the project moving forward', explanation: 'Giữ tiến độ dự án trôi chảy' },
      { phrase: 'quick 5-minute sync', explanation: 'Cuộc họp ngắn 5 phút để thống nhất' }
    ],
    proTip: 'Thay vì viết "You have not replied to me", hãy dùng "I wanted to gently bump this" để thể hiện sự cảm thông với khối lượng công việc của họ.'
  },
  {
    id: 'meeting-recap-action-items',
    title: 'Gửi biên bản họp & Phân công nhiệm vụ (Minutes of Meeting)',
    category: 'meeting',
    vietnameseContext: 'Vừa họp xong với sếp và team, cần gửi email tóm tắt các quyết định đã chốt và phân công Action Items rõ ràng cho từng người.',
    formality: 'semi-formal',
    subject: 'Summary & Action Items: [MeetingTopic] - [MeetingDate]',
    body: `Hi everyone,

Thank you all for taking the time to join today's discussion on [MeetingTopic]. Below is a recap of the key decisions and agreed next steps:

Key Takeaways:
• Decision 1: [KeyDecision1]
• Decision 2: [KeyDecision2]

Action Items & Ownership:
1. [TaskDescription1] - Assigned to: @[Person1] | Due: [DueDate1]
2. [TaskDescription2] - Assigned to: @[Person2] | Due: [DueDate2]
3. [TaskDescription3] - Assigned to: @[Person3] | Due: [DueDate3]

Next Sync:
Our next check-in will be on [NextMeetingDate] to review progress.

If anything was missed or requires adjustment, please feel free to chime in.

Best regards,
[YourName]`,
    variables: ['MeetingTopic', 'MeetingDate', 'KeyDecision1', 'KeyDecision2', 'Person1', 'DueDate1', 'NextMeetingDate', 'YourName'],
    keyPhrases: [
      { phrase: 'Key Takeaways', explanation: 'Những điểm mấu chốt được rút ra' },
      { phrase: 'Action Items & Ownership', explanation: 'Đầu việc cần làm kèm người chịu trách nhiệm' },
      { phrase: 'chime in', explanation: 'Góp ý thêm / lên tiếng bổ sung' }
    ],
    proTip: 'Gửi biên bản họp trong vòng 2 giờ sau khi kết thúc họp sẽ tạo ấn tượng bạn là người làm việc cực kỳ kỷ luật và đáng tin cậy.'
  },
  {
    id: 'decline-scope-creep',
    title: 'Từ chối yêu cầu ngoài phạm vi (Scope Creep) một cách ngoại giao',
    category: 'decline',
    vietnameseContext: 'Khách hàng hoặc phòng ban khác yêu cầu làm thêm tính năng ngoài hợp đồng/sprint hiện tại. Cần từ chối khéo léo để bảo vệ thời gian của team.',
    formality: 'formal',
    subject: 'Feedback on Additional Feature Request for [ProjectName]',
    body: `Hi [ClientName/ColleagueName],

Thank you for sharing your thoughts on adding [NewFeatureName]. I can certainly see the value this would bring to the end-users.

Currently, our team is fully committed to delivering the core milestones agreed upon for [CurrentSprint/Phase], with the upcoming deadline on [CurrentDeadline]. 

Taking on this new scope right now would likely create a bottleneck and impact our release timeline. To address this constructively, I suggest two options:
1. We document this in our backlog and prioritize it for Phase 2 immediately after the current launch.
2. If this feature is critical for Phase 1, we can swap out [AnotherFeature] to maintain our current delivery date.

Please let me know which direction works best for you.

Warm regards,
[YourName]`,
    variables: ['ClientName/ColleagueName', 'NewFeatureName', 'CurrentSprint/Phase', 'CurrentDeadline', 'AnotherFeature', 'YourName'],
    keyPhrases: [
      { phrase: 'fully committed to delivering', explanation: 'Đang tập trung toàn lực để hoàn thành...' },
      { phrase: 'create a bottleneck', explanation: 'Tạo nút thắt cổ chai / gây ùn tắc' },
      { phrase: 'swap out [Feature]', explanation: 'Đổi tính năng này lấy tính năng khác để giữ nguyên hạn' }
    ],
    proTip: 'Không bao giờ nói từ "NO" cộc lốc. Luôn đưa ra giải pháp thay thế (A hoặc B) để đối tác cảm thấy họ vẫn có quyền quyết định.'
  },
  {
    id: 'escalate-critical-issue',
    title: 'Báo cáo sự cố khẩn cấp lên cấp quản lý (Urgent Escalation)',
    category: 'escalation',
    vietnameseContext: 'Gặp sự cố nghiêm trọng (server sập, bảo mật, đối tác hủy cam kết) cần sếp can thiệp và chỉ đạo ngay lập tức.',
    formality: 'formal',
    subject: '[URGENT ESCALATION] Blocker on [SystemName/ClientAccount] - Decision Needed',
    body: `Dear [DirectorName/ManagerName],

I am escalating an urgent issue regarding [SystemName/ClientAccount] that requires your visibility and immediate direction.

Situation:
At [Time], we identified [BriefIssueDescription, e.g., an unexpected service interruption affecting 40% of active transactions].

Current Impact:
• [ImpactMetric1, e.g., Delay in order fulfillment]
• [ImpactMetric2, e.g., Escalations from enterprise clients]

Actions Taken so far:
1. Our engineering taskforce has isolated the root cause to [RootCause].
2. We rolled out a temporary mitigation at [Time].

Required Decision / Assistance:
We need your approval to [DecisionNeeded, e.g., activate the secondary failover cluster / authorize emergency contractor support].

I will keep you updated every 30 minutes until this is resolved. You can also reach my direct mobile at [PhoneNumber].

Sincerely,
[YourName]`,
    variables: ['DirectorName/ManagerName', 'SystemName/ClientAccount', 'Time', 'BriefIssueDescription', 'ImpactMetric1', 'RootCause', 'DecisionNeeded', 'PhoneNumber', 'YourName'],
    keyPhrases: [
      { phrase: 'requires your visibility and direction', explanation: 'Cần sự nhận biết và chỉ đạo của cấp trên' },
      { phrase: 'isolated the root cause', explanation: 'Đã cô lập được nguyên nhân gốc rễ' },
      { phrase: 'temporary mitigation', explanation: 'Biện pháp giảm thiểu tạm thời' }
    ],
    proTip: 'Sử dụng cấu trúc STAR (Situation - Task - Action - Result) hoặc SBAR (Situation - Background - Assessment - Recommendation) khi viết mail sự cố.'
  },
  {
    id: 'out-of-office-auto',
    title: 'Tin nhắn trả lời tự động khi nghỉ phép (Out of Office / OOO)',
    category: 'greeting',
    vietnameseContext: 'Cài đặt tự động phản hồi email khi bạn đi nghỉ mát hoặc nghỉ phép năm, cung cấp đầu mối liên hệ khẩn cấp.',
    formality: 'semi-formal',
    subject: 'Out of Office: [YourName] is away until [ReturnDate]',
    body: `Hi there,

Thank you for reaching out.

I am currently out of the office on annual leave with limited access to email from [StartDate] through [ReturnDate]. I will respond to your message as soon as possible upon my return on [ReturnDate].

For urgent matters that cannot wait:
• For [ProjectA/OperationalQueries], please contact [Colleague1Name] at [Colleague1Email].
• For [ClientAccounts/SalesSupport], please contact [Colleague2Name] at [Colleague2Email].

Thank you for your patience and understanding.

Warm regards,
[YourName]
[YourTitle]`,
    variables: ['YourName', 'StartDate', 'ReturnDate', 'Colleague1Name', 'Colleague1Email', 'YourTitle'],
    keyPhrases: [
      { phrase: 'limited access to email', explanation: 'Khả năng truy cập email bị hạn chế' },
      { phrase: 'upon my return', explanation: 'Ngay khi tôi trở lại làm việc' },
      { phrase: 'urgent matters that cannot wait', explanation: 'Các việc khẩn cấp không thể trì hoãn' }
    ],
    proTip: 'Luôn xin phép đồng nghiệp trước khi đưa tên và email của họ vào làm đầu mối thay thế (backup contact).'
  },
  {
    id: 'salary-review-request',
    title: 'Đề xuất buổi họp xem xét lương & lộ trình thăng tiến',
    category: 'request',
    vietnameseContext: 'Đã hoàn thành xuất sắc các mục tiêu quý/năm, muốn gửi email cho sếp xin cuộc gặp 1-on-1 để bàn về thù lao và thăng tiến.',
    formality: 'formal',
    subject: 'Request for Performance & Compensation Alignment - [YourName]',
    body: `Hi [ManagerName],

I hope you are having a great week.

With our recent completion of [MajorMilestone, e.g., the Q3 product expansion] and as we approach [EndOfQuarter/AnnualReviewPeriod], I would appreciate the opportunity to schedule a brief meeting to discuss my role, recent contributions, and long-term career growth with [CompanyName].

Over the past [NumberOfMonths/Years], I have taken on additional responsibilities, including [KeyContribution1] and [KeyContribution2], which contributed to [SpecificBusinessResult, e.g., 25% revenue increase].

Given these achievements, I would welcome the chance to discuss adjusting my compensation package to reflect my expanded scope of impact.

Could we find 30 minutes sometime next week? Please let me know what day works best for your schedule.

Thank you for your ongoing mentorship and guidance.

Best regards,
[YourName]`,
    variables: ['ManagerName', 'MajorMilestone', 'CompanyName', 'NumberOfMonths/Years', 'KeyContribution1', 'KeyContribution2', 'SpecificBusinessResult', 'YourName'],
    keyPhrases: [
      { phrase: 'Performance & Compensation Alignment', explanation: 'Đối chiếu hiệu suất và mức thù lao (chuyên nghiệp hơn là "Ask for pay raise")' },
      { phrase: 'expanded scope of impact', explanation: 'Phạm vi ảnh hưởng/đóng góp được mở rộng' },
      { phrase: 'mentorship and guidance', explanation: 'Sự dẫn dắt và định hướng' }
    ],
    proTip: 'Đừng bàn về số tiền cụ thể trong email đầu tiên. Hãy định vị đây là buổi trao đổi về "giá trị đóng góp" và chốt lịch hẹn trực tiếp.'
  }
];
