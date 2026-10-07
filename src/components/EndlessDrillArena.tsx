import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Zap, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Trophy, 
  Flame, 
  RotateCcw,
  ArrowRight,
  Shield,
  Clock,
  BookOpen,
  Settings2,
  Check,
  XCircle
} from 'lucide-react';
import { VikoMascot } from './brand/VikodaLogos';
import { VoiceSelectorModal } from './VoiceSelectorModal';
import { 
  playSpeech, 
  VOICE_OPTIONS, 
  getSelectedVoiceId, 
  subscribeVoiceChange,
  VoiceOptionId
} from '../services/speechService';
import { playSound } from '../services/soundEffects';
import { getRandomEndlessDrillQuestions } from '../data/arenaQuestionPool';
import { STORAGE_KEY_ADMIN_SETTINGS, TrainingSystemSettings } from './AdminPortalModal';

export type ArenaTier = 'basic' | 'intermediate' | 'advanced';

interface ArenaTierConfig {
  id: ArenaTier;
  title: string;
  badge: string;
  level: string;
  questionCount: number;
  timePerQuestion: number;
  description: string;
  xpMultiplier: number;
  bgBorder: string;
  accentColor: string;
}

const ARENA_3_TIERS: ArenaTierConfig[] = [
  {
    id: 'basic',
    title: 'Cơ Bản (Tân Binh)',
    badge: '🥉 CƠ BẢN A1',
    level: 'A1',
    questionCount: 5,
    timePerQuestion: 15,
    description: '5 câu giao tiếp chào hỏi, mời nước khoáng Đảnh Thạnh pH 9.0 & hướng dẫn phòng họp • 15s/câu',
    xpMultiplier: 1.0,
    bgBorder: 'border-amber-300 hover:border-amber-500',
    accentColor: '#D97706',
  },
  {
    id: 'intermediate',
    title: 'Trung Cấp (Văn Phòng & HORECA)',
    badge: '🥈 TRUNG CẤP B1',
    level: 'B1',
    questionCount: 8,
    timePerQuestion: 12,
    description: '8 câu xử lý đơn hàng B2B, khách sạn 5 sao & đặc tính khoáng kiềm tự nhiên • 12s/câu',
    xpMultiplier: 1.5,
    bgBorder: 'border-sky-300 hover:border-sky-500',
    accentColor: '#0070D1',
  },
  {
    id: 'advanced',
    title: 'Nâng Cao (Đàm Phán Quốc Tế)',
    badge: '🥇 NÂNG CAO C1',
    level: 'C1',
    questionCount: 10,
    timePerQuestion: 10,
    description: '10 câu đỉnh cao Incoterms (FOB/CIF), thanh toán L/C & phản bác Evian/Fiji • 10s/câu',
    xpMultiplier: 2.0,
    bgBorder: 'border-emerald-300 hover:border-emerald-500',
    accentColor: '#059669',
  },
];

export interface DrillQuestion {
  id: string;
  promptVi: string;
  promptEn: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

// Curated question bank categorized by exactly 3 levels
const DRILL_QUESTIONS_BANK: Record<ArenaTier, DrillQuestion[]> = {
  basic: [
    {
      id: 'b-1',
      promptVi: 'Chào đối tác vào văn phòng và mời họ dùng nước khoáng kiềm mát lạnh:',
      promptEn: 'Welcome the guest and offer chilled natural mineral water:',
      options: [
        'Welcome to Vikoda! Please have a seat and enjoy our chilled natural alkaline water.',
        'You must sit down and drink water right now.',
        'Sit here and wait until our boss comes.',
        'Drink this water if you are thirsty.'
      ],
      correctIndex: 0,
      explanation: 'Cách diễn đạt ngoại giao: "Please have a seat and enjoy..." thể hiện sự hiếu khách chuẩn mực Vikoda.',
      category: 'Chào Hỏi & Tiếp Khách'
    },
    {
      id: 'b-2',
      promptVi: 'Giới thiệu độ sâu khai thác đặc biệt của mỏ khoáng Đảnh Thạnh:',
      promptEn: 'State the natural extraction depth of Vikoda:',
      options: [
        'Vikoda is extracted from a pristine deep aquifer at 220 meters below ground.',
        'Vikoda is taken from a surface river near Nha Trang city.',
        'Vikoda is filtered municipal tap water with artificial salt.',
        'Vikoda is pumped from a shallow 5-meter well.'
      ],
      correctIndex: 0,
      explanation: 'Nguồn khoáng Đảnh Thạnh được khai thác ở độ sâu 220m trong lòng địa chất vô trùng.',
      category: 'Nguồn Gốc Sản Phẩm'
    },
    {
      id: 'b-3',
      promptVi: 'Chỉ đường cho đối tác quốc tế đến phòng họp chính:',
      promptEn: 'Guide the client to the executive meeting room:',
      options: [
        'Please follow me to the boardroom on the second floor.',
        'Go upstairs yourself and find room two.',
        'You can walk around until you see a room.',
        'Meeting is somewhere on top floor.'
      ],
      correctIndex: 0,
      explanation: '"Please follow me to..." là mẫu câu lịch sự và chuyên nghiệp nhất khi dẫn khách.',
      category: 'Chỉ Đường Công Sở'
    },
    {
      id: 'b-4',
      promptVi: 'Hỏi đối tác xem họ muốn dùng nước có ga hay không ga:',
      promptEn: 'Ask if they prefer sparkling or still mineral water:',
      options: [
        'Would you prefer still or sparkling mineral water today?',
        'Do you want fizzy drink or normal water?',
        'Drink still or drink gas water?',
        'Which water do you take now?'
      ],
      correctIndex: 0,
      explanation: 'Thuật ngữ chuẩn ngành F&B: Still water (nước khoáng không ga) và Sparkling water (nước khoáng có ga).',
      category: 'Thuật Ngữ F&B'
    },
    {
      id: 'b-5',
      promptVi: 'Khẳng định độ pH kiềm tự nhiên hoàn hảo của nước khoáng Vikoda:',
      promptEn: 'Highlight the natural pH level of Vikoda:',
      options: [
        'Our water naturally possesses an ideal alkaline pH of 9.0 directly at the source.',
        'Our water has pH 2.0 and is very acidic.',
        'Our water has neutral pH 5.0 with added sugar.',
        'Our water has no pH value at all.'
      ],
      correctIndex: 0,
      explanation: 'Vikoda sở hữu độ kiềm tự nhiên hiếm có pH 9.0 nguyên bản từ lòng đất.',
      category: 'Đặc Tính Sản Phẩm'
    },
    {
      id: 'b-6',
      promptVi: 'Cảm ơn khách hàng sau buổi gặp gỡ đầu tiên:',
      promptEn: 'Thank the customer after an initial meeting:',
      options: [
        'Thank you very much for your valuable time with Vikoda today.',
        'Meeting is over, you can leave now.',
        'Thanks for coming to talk.',
        'We finished, good bye.'
      ],
      correctIndex: 0,
      explanation: '"Thank you very much for your valuable time..." là chuẩn mực văn hóa doanh nghiệp FIT & Vikoda.',
      category: 'Ngoại Giao'
    }
  ],
  intermediate: [
    {
      id: 'i-1',
      promptVi: 'Giải thích tại sao nước kiềm thiên nhiên Vikoda không gây sỏi thận:',
      promptEn: 'Explain why Vikoda does not cause kidney stones:',
      options: [
        'All mineral ions are completely dissolved in trace amounts, and magnesium actively assists excretion.',
        'Because Vikoda has zero calcium or minerals of any kind.',
        'Because customers only drink one bottle per month.',
        'Because we add vinegar to dissolve all stones.'
      ],
      correctIndex: 0,
      explanation: 'Các ion khoáng chất ở dạng vi lượng hòa tan hoàn toàn, magiê tự nhiên còn hỗ trợ thận bài tiết cặn bã.',
      category: 'Khoa Học Khoáng Kiềm'
    },
    {
      id: 'i-2',
      promptVi: 'Thuyết phục khách sạn 5 sao sử dụng chai thủy tinh bảo vệ môi trường:',
      promptEn: 'Pitch the luxury eco-friendly glass bottle line to a 5-star resort:',
      options: [
        'Our premium glass bottles elevate guest experience while supporting your resort’s zero-plastic ESG goals.',
        'Glass bottles are heavy and dangerous for guests.',
        'You should buy plastic because it is cheaper.',
        'We only have tap water in big buckets.'
      ],
      correctIndex: 0,
      explanation: 'Đánh trúng xu hướng phát triển bền vững (ESG) và đẳng cấp trải nghiệm khách hàng cao cấp.',
      category: 'Bán Hàng HORECA'
    },
    {
      id: 'i-3',
      promptVi: 'Xác nhận số lượng đặt hàng tối thiểu (MOQ) cho đơn hàng nội địa:',
      promptEn: 'Confirm the Minimum Order Quantity (MOQ) for corporate delivery:',
      options: [
        'Our minimum order quantity for complimentary delivery is twenty cartons.',
        'You can buy half a bottle and we ship for free.',
        'We never accept orders below one thousand pallets.',
        'MOQ depends on your mood today.'
      ],
      correctIndex: 0,
      explanation: 'MOQ (Minimum Order Quantity): Số lượng đặt hàng tối thiểu để được hưởng chính sách giao hàng miễn phí.',
      category: 'Quy Trình Bán Hàng'
    },
    {
      id: 'i-4',
      promptVi: 'Đề xuất thời gian giao hàng sau khi nhận tạm ứng hợp đồng:',
      promptEn: 'Propose delivery lead time after deposit confirmation:',
      options: [
        'We can dispatch the shipment within three business days upon receipt of the deposit.',
        'We will ship whenever we have time next month.',
        'Delivery takes one year after full payment.',
        'Shipment cannot be delivered to your area.'
      ],
      correctIndex: 0,
      explanation: 'Mẫu câu chuẩn: "within [number] business days upon receipt of [condition]".',
      category: 'Hợp Đồng Thương Mại'
    },
    {
      id: 'i-5',
      promptVi: 'Khẳng định cam kết đóng chai trực tiếp tại nguồn 72°C:',
      promptEn: 'Highlight bottling directly at source with zero chemical treatment:',
      options: [
        'Vikoda is bottled directly at the 72°C spring source to preserve 100% natural mineral vitality.',
        'We transport water in open trucks to Hanoi before bottling.',
        'We boil the water with chemicals to create artificial steam.',
        'Bottling is done at dirty room without inspection.'
      ],
      correctIndex: 0,
      explanation: 'Đóng chai ngay tại nguồn nước ngầm nhiệt độ 72°C giúp giữ nguyên sinh khí khoáng.',
      category: 'Công Nghệ Đóng Chai'
    },
    {
      id: 'i-6',
      promptVi: 'Báo giá chiết khấu cho chuỗi nhà hàng ký hợp đồng năm:',
      promptEn: 'Quote volume rebate for an annual HORECA contract:',
      options: [
        'We are pleased to offer a tiered volume rebate of up to 15% for annual exclusivity.',
        'We never discount even if you buy one million bottles.',
        'We cut the price to zero for your company.',
        'Price is secret and cannot be told.'
      ],
      correctIndex: 0,
      explanation: 'Volume rebate: Chiết khấu sản lượng lũy tiến theo cam kết hợp đồng dài hạn.',
      category: 'Chính Sách Giá'
    },
    {
      id: 'i-7',
      promptVi: 'Nhắc khách hàng về thời hạn bảo quản của chai nước khoáng:',
      promptEn: 'Inform the client about product shelf life:',
      options: [
        'Our natural mineral water retains optimal quality for 24 months from the bottling date.',
        'The water expires in two hours after opening.',
        'Water never expires and can last 100 years.',
        'Shelf life is only three days in hot weather.'
      ],
      correctIndex: 0,
      explanation: 'Hạn sử dụng tiêu chuẩn của sản phẩm nước khoáng đóng chai Vikoda là 24 tháng.',
      category: 'Tiêu Chuẩn Sản Phẩm'
    },
    {
      id: 'i-8',
      promptVi: 'Phản hồi khi khách hàng hỏi về chứng nhận an toàn thực phẩm:',
      promptEn: 'Respond to inquiry regarding food safety certifications:',
      options: [
        'Our factory strictly complies with ISO 22000 and HACCP international food safety standards.',
        'We do not have any papers or certifications.',
        'Food safety is not important for drinking water.',
        'We only test water by tasting it ourselves.'
      ],
      correctIndex: 0,
      explanation: 'ISO 22000 & HACCP là hai bảo chứng quốc tế cao nhất về an toàn vệ sinh thực phẩm.',
      category: 'Chứng Nhận Chất Lượng'
    }
  ],
  advanced: [
    {
      id: 'a-1',
      promptVi: 'Phân tích điểm chuyển giao rủi ro theo điều kiện Incoterms FOB Cảng Cát Lái:',
      promptEn: 'Define seller risk transfer point under FOB terms:',
      options: [
        'The risk transfers to the buyer once the goods are safely loaded on board the vessel at the port of origin.',
        'The seller remains responsible until the bottles are consumed in Tokyo.',
        'Risk transfers when the invoice is signed at the factory gate.',
        'Buyer takes risk only when goods reach their warehouse.'
      ],
      correctIndex: 0,
      explanation: 'FOB (Free on Board): Rủi ro chuyển từ người bán sang người mua ngay khi hàng được xếp an toàn lên boong tàu.',
      category: 'Incoterms Xuất Khẩu'
    },
    {
      id: 'a-2',
      promptVi: 'Phản bác đẳng cấp khi đối tác so sánh giá Vikoda với Evian:',
      promptEn: 'Professionally position Vikoda against French imported brand Evian:',
      options: [
        'While Evian offers neutral pH 7.2, Vikoda delivers rare natural pH 9.0 alongside zero carbon glass logistics.',
        'Evian is a terrible product and nobody drinks it anymore.',
        'We will match whatever cheap price you want.',
        'We cannot compete with European brands.'
      ],
      correctIndex: 0,
      explanation: 'Định vị giá trị vượt trội: Evian là khoáng trung tính pH 7.2, Vikoda là kiềm tự nhiên pH 9.0 hiếm có kèm lợi thế logistics xanh.',
      category: 'Chiến Thuật Cạnh Tranh'
    },
    {
      id: 'a-3',
      promptVi: 'Quy định phương thức thanh toán thư tín dụng không hủy ngang (Irrevocable L/C):',
      promptEn: 'Specify international payment terms via Irrevocable L/C at sight:',
      options: [
        'Payment shall be secured by an Irrevocable Letter of Credit at sight issued by a first-class international bank.',
        'You can pay us cash whenever your ship arrives.',
        'Send money via personal digital wallet after six months.',
        'We ship goods first and hope you will pay later.'
      ],
      correctIndex: 0,
      explanation: 'Irrevocable L/C at sight: Thư tín dụng không thể hủy ngang trả ngay là phương thức thanh toán chuẩn hóa an toàn nhất trong xuất khẩu.',
      category: 'Thanh Toán Quốc Tế'
    },
    {
      id: 'a-4',
      promptVi: 'Cam kết chất lượng đạt chuẩn Cục Quản Lý Thực Phẩm & Dược Phẩm Hoa Kỳ (FDA):',
      promptEn: 'Confirm compliance with US FDA regulations for US shipments:',
      options: [
        'Our export products have completed official US FDA registration and full third-party laboratory panel testing.',
        'FDA registration is optional and not needed for America.',
        'We do not know what FDA stands for.',
        'We only test water according to local village rules.'
      ],
      correctIndex: 0,
      explanation: 'Sản phẩm xuất khẩu của Vikoda hoàn tất đăng ký FDA và kiểm nghiệm độc lập SGS/Eurofins.',
      category: 'Tiêu Chuẩn FDA'
    },
    {
      id: 'a-5',
      promptVi: 'Giải thích tính kiềm tự nhiên vượt trội so với nước kiềm nhân tạo nhân tạo:',
      promptEn: 'Articulate the clinical difference between natural vs artificially ionized alkaline water:',
      options: [
        'Vikoda’s pH 9.0 is 100% geology-derived and stable, unlike artificial alkaline water which rapidly drops pH after bottling.',
        'All alkaline water is made by dissolving soap powders.',
        'Artificial water is always better than nature.',
        'There is no scientific difference between natural and machine water.'
      ],
      correctIndex: 0,
      explanation: 'Nước kiềm nhân tạo dùng máy điện phân nhân tạo thường mất độ kiềm sau vài ngày; Vikoda kiềm tự nhiên ổn định vĩnh cửu theo thời gian.',
      category: 'Lợi Thế Cạnh Tranh'
    },
    {
      id: 'a-6',
      promptVi: 'Xử lý tình huống đối tác yêu cầu độc quyền thị trường nhưng không cam kết sản lượng:',
      promptEn: 'Handle a distributor requesting exclusivity without volume commitment:',
      options: [
        'We can grant exclusivity subject to quarterly performance milestones and a confirmed annual volume quota.',
        'We sign exclusivity immediately without any conditions.',
        'We reject your company and cancel all future communications.',
        'Exclusivity is free for all customers.'
      ],
      correctIndex: 0,
      explanation: 'Quyền độc quyền thương mại luôn phải gắn liền với chỉ tiêu sản lượng cam kết (Quarterly volume quota).',
      category: 'Đàm Phán Độc Quyền'
    },
    {
      id: 'a-7',
      promptVi: 'Xác định trách nhiệm mua bảo hiểm hàng hải theo điều kiện CIF cảng Tokyo:',
      promptEn: 'Clarify marine cargo insurance obligation under CIF Incoterms:',
      options: [
        'Under CIF terms, the seller must procure marine insurance covering minimum Institute Cargo Clauses (C).',
        'Buyer must buy all insurance before vessel leaves Vietnam.',
        'No insurance is required if the sea is calm.',
        'The shipping line pays for all damages automatically.'
      ],
      correctIndex: 0,
      explanation: 'CIF (Cost, Insurance and Freight): Người bán chịu chi phí vận tải biển và bắt buộc mua bảo hiểm hàng hải cho lô hàng.',
      category: 'Incoterms Xuất Khẩu'
    },
    {
      id: 'a-8',
      promptVi: 'Giải thích tác dụng trung hòa axit dạ dày từ khoáng kiềm Đảnh Thạnh:',
      promptEn: 'Explain stomach acid neutralization mechanism of Vikoda pH 9.0:',
      options: [
        'Natural bicarbonate ions in Vikoda gently buffer excess gastric acid without causing acid rebound.',
        'Vikoda stops all digestive processes completely.',
        'Vikoda makes stomach 100% acidic.',
        'Stomach acid cannot react with alkaline water.'
      ],
      correctIndex: 0,
      explanation: 'Bicarbonate (HCO3-) tự nhiên trung hòa axit dạ dày dư thừa một cách dịu nhẹ, phòng ngừa trào ngược hiệu quả.',
      category: 'Y Học & Sức Khỏe'
    },
    {
      id: 'a-9',
      promptVi: 'Thương lượng thời gian lưu container tại bãi cảng (Demurrage & Detention):',
      promptEn: 'Negotiate free container demurrage days with the shipping line:',
      options: [
        'We request fourteen days of combined demurrage and detention at the destination port to facilitate smooth customs clearance.',
        'We will leave containers at the port for five years.',
        'Demurrage is zero dollars forever.',
        'We do not need any free time at destination port.'
      ],
      correctIndex: 0,
      explanation: '14 days combined demurrage & detention là quyền lợi quan trọng hỗ trợ đối tác làm thủ tục hải quan nước nhập khẩu.',
      category: 'Logistics Xuất Khẩu'
    },
    {
      id: 'a-10',
      promptVi: 'Chốt hợp đồng bằng cam kết đồng hành dài hạn cùng tập đoàn FIT & Vikoda:',
      promptEn: 'Deliver executive closing statement pledging sustainable partnership:',
      options: [
        'Vikoda pledges stable product availability, world-class quality assurance, and dedicated marketing support for your market.',
        'Sign now or we will sell to your rival tomorrow.',
        'This is our only deal, take it or leave it.',
        'We make no guarantees regarding future supply.'
      ],
      correctIndex: 0,
      explanation: 'Nghệ thuật chốt hợp đồng cao cấp: Cam kết 3 chân kiềng (Nguồn hàng ổn định - Chất lượng quốc tế - Đồng hành tiếp thị).',
      category: 'Nghệ Thuật Đàm Phán'
    }
  ]
};

interface EndlessDrillArenaProps {
  onClose: () => void;
  onFinishDrill: (score: number, xpGain: number, gemGain: number) => void;
  bestScore: number;
  speechRate: number;
}

export const EndlessDrillArena: React.FC<EndlessDrillArenaProps> = ({
  onClose,
  onFinishDrill,
  bestScore,
  speechRate
}) => {
  const [selectedTier, setSelectedTier] = useState<ArenaTier | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [drillQuestions, setDrillQuestions] = useState<DrillQuestion[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [missedQuestions, setMissedQuestions] = useState<DrillQuestion[]>([]);
  const [currentVoiceId, setCurrentVoiceId] = useState<VoiceOptionId>(getSelectedVoiceId());
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);

  useEffect(() => {
    const unsub = subscribeVoiceChange((vId) => setCurrentVoiceId(vId));
    return unsub;
  }, []);

  const tierConfig = ARENA_3_TIERS.find((t) => t.id === selectedTier) || ARENA_3_TIERS[0];

  // Start selected Tier - draws dynamically from full 700-curriculum question pool
  const startTier = (tier: ArenaTier) => {
    setSelectedTier(tier);
    const cfg = ARENA_3_TIERS.find((t) => t.id === tier) || ARENA_3_TIERS[0];
    
    // Read training settings from Admin Portal if available
    let countdownPerQuestion = cfg.timePerQuestion;
    if (typeof window !== 'undefined') {
      try {
        const adminSettingsRaw = localStorage.getItem(STORAGE_KEY_ADMIN_SETTINGS);
        if (adminSettingsRaw) {
          const parsed: TrainingSystemSettings = JSON.parse(adminSettingsRaw);
          if (parsed && parsed.drillCountdownSeconds) {
            // Allocate proportionally: e.g. 45s total -> ~9s/câu, 60s total -> ~12s/câu, 90s total -> ~15s/câu
            countdownPerQuestion = Math.max(8, Math.round(parsed.drillCountdownSeconds / cfg.questionCount * 1.5));
          }
        }
      } catch (e) {}
    }

    // Dynamically pull randomized questions from corresponding CEFR levels in 700 pool
    const prepared = getRandomEndlessDrillQuestions(tier, cfg.questionCount);

    setDrillQuestions(prepared as any);
    setQuestionIndex(0);
    setCurrentScore(0);
    setCombo(0);
    setMaxCombo(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setIsFinished(false);
    setMissedQuestions([]);
    setTimeLeft(countdownPerQuestion);
    playSound('click');
  };

  const currentExercise = drillQuestions[questionIndex];

  // Timer countdown per question
  useEffect(() => {
    if (!selectedTier || isFinished || hasAnswered) return;

    if (timeLeft <= 0) {
      handleSelectOption(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedTier, isFinished, hasAnswered, timeLeft]);

  // Deterministic option selection
  const handleSelectOption = (idx: number) => {
    if (hasAnswered || !currentExercise) return;

    setSelectedOption(idx);
    setHasAnswered(true);

    const isAnswerRight = idx === currentExercise.correctIndex;
    setIsCorrect(isAnswerRight);

    if (isAnswerRight) {
      playSound('success');
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
      const points = 100 * (1 + newCombo * 0.25) * tierConfig.xpMultiplier;
      setCurrentScore((prev) => Math.round(prev + points));
    } else {
      playSound('wrong');
      setCombo(0);
      setMissedQuestions((prev) => [...prev, currentExercise]);
    }
  };

  const handleNext = () => {
    playSound('click');
    if (questionIndex + 1 < drillQuestions.length) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setIsCorrect(false);
      setTimeLeft(tierConfig.timePerQuestion);
    } else {
      setIsFinished(true);
      playSound('celebrate');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleSaveAndExit = () => {
    playSound('click');
    const xpGain = Math.round(currentScore * 0.5);
    const gemGain = Math.max(5, Math.floor(currentScore / 100));
    onFinishDrill(currentScore, xpGain, gemGain);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-xl rounded-3xl border border-sky-100 shadow-2xl overflow-hidden flex flex-col max-h-[95vh] my-auto">
        
        {/* ================= STAGE 1: 3-TIER LEVEL SELECTION ================= */}
        {!selectedTier ? (
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-xs">
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    Đấu Trường Phản Xạ Nhanh
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Chọn 1 trong 3 cấp độ thi đấu phù hợp với bạn
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  playSound('click');
                  onClose();
                }}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 3 Tier Cards */}
            <div className="space-y-3">
              {ARENA_3_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => startTier(tier.id)}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all cursor-pointer bg-white hover:bg-slate-50/80 active:scale-98 shadow-xs flex items-center justify-between gap-3 ${tier.bgBorder}`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white shadow-2xs" style={{ backgroundColor: tier.accentColor }}>
                        {tier.badge}
                      </span>
                      <h3 className="font-black text-xs sm:text-sm text-slate-900 truncate">
                        {tier.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            {/* Best score badge */}
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between text-xs text-amber-900 font-black">
              <span className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span>Kỷ lục cao nhất của bạn:</span>
              </span>
              <span className="text-sm font-black text-amber-700">{bestScore} điểm</span>
            </div>
          </div>
        ) : !isFinished && currentExercise ? (
          /* ================= STAGE 2: LIVE QUESTION CANVAS ================= */
          <div className="flex flex-col h-full overflow-hidden">
            
            {/* Header: Progress, Timer & Score */}
            <div className="p-3.5 sm:p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center space-x-2 min-w-0">
                <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-black">
                  Câu {questionIndex + 1}/{drillQuestions.length}
                </span>
                <span className="text-xs font-black text-slate-900 truncate">
                  {tierConfig.title}
                </span>
              </div>

              {/* Center Timer */}
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full font-black text-xs border ${
                timeLeft <= 3
                  ? 'bg-rose-100 text-rose-700 border-rose-300 animate-pulse'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>

              {/* Score */}
              <div className="text-right">
                <div className="text-xs font-black text-amber-600">{currentScore} pts</div>
                {combo >= 2 && (
                  <div className="text-[10px] text-amber-700 font-black flex items-center justify-end gap-0.5">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>x{combo} Combo</span>
                  </div>
                )}
              </div>
            </div>

            {/* Question Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
              <div className="bg-sky-50/80 border-2 border-sky-200 rounded-2xl p-4 space-y-1">
                <span className="text-[10px] font-black uppercase text-[#0070D1] tracking-wider">
                  {currentExercise.category || 'Tình Huống Thương Mại'}
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                  {currentExercise.promptVi}
                </h3>
                {currentExercise.promptEn && (
                  <p className="text-xs text-slate-600 font-medium">
                    👉 {currentExercise.promptEn}
                  </p>
                )}
              </div>

              {/* Options List with Deterministic Highlighting */}
              <div className="space-y-2.5">
                {currentExercise.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrectAnswer = idx === currentExercise.correctIndex;

                  let style = "bg-white hover:bg-slate-50 border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-800";

                  if (hasAnswered) {
                    if (isCorrectAnswer) {
                      style = "bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-200";
                    } else if (isSelected && !isCorrectAnswer) {
                      style = "bg-rose-50 border-2 border-rose-500 border-b-4 border-b-rose-600 text-rose-950 font-bold";
                    } else {
                      style = "bg-slate-50 border-2 border-slate-200 border-b-2 text-slate-400 opacity-40";
                    }
                  } else if (isSelected) {
                    style = "bg-sky-50 border-2 border-[#009FE3] border-b-4 border-b-[#0072CE] text-[#0070D1] font-black";
                  }

                  return (
                    <button
                      key={idx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 rounded-2xl text-xs sm:text-sm transition-all flex items-start space-x-3 cursor-pointer active:translate-y-0.5 ${style}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-black text-xs shrink-0 border border-slate-300 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 leading-snug break-words">{option}</span>
                      {hasAnswered && isCorrectAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {hasAnswered && isSelected && !isCorrectAnswer && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card upon Answer */}
              {hasAnswered && (
                <div className={`p-3.5 rounded-2xl border text-xs animate-in slide-in-from-bottom-2 duration-150 space-y-1.5 ${
                  isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xs sm:text-sm">
                      {isCorrect ? '🎉 Chính xác!' : '❌ Chưa chính xác!'}
                    </span>
                    <button
                      onClick={() => playSpeech(currentExercise.options[currentExercise.correctIndex], speechRate, 'en-US')}
                      className="px-2 py-0.5 bg-white rounded-lg border border-slate-200 text-slate-700 flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Nghe</span>
                    </button>
                  </div>
                  <p className="font-medium text-slate-800 leading-relaxed">
                    💡 {currentExercise.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Action Button */}
            {hasAnswered && (
              <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 shrink-0">
                <button
                  onClick={handleNext}
                  className="w-full py-3.5 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] border-b-4 border-[#004b96] text-white font-black text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-md flex items-center justify-center gap-2 active:translate-y-0.5"
                >
                  <span>{questionIndex < drillQuestions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả Vòng Đấu'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        ) : (
          /* ================= STAGE 3: FINISHED SUMMARY ================= */
          <div className="p-6 sm:p-8 text-center space-y-5 overflow-y-auto">
            <VikoMascot size="lg" mood="celebrate" />

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Hoàn Thành Vòng Đấu!
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Cấp độ: <strong>{tierConfig.title}</strong>
              </p>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              <div className="p-3 rounded-2xl bg-amber-50 border-2 border-amber-200">
                <div className="text-[10px] font-black uppercase text-amber-800">Điểm Đấu</div>
                <div className="text-2xl font-black text-amber-600">{currentScore}</div>
              </div>
              <div className="p-3 rounded-2xl bg-sky-50 border-2 border-sky-200">
                <div className="text-[10px] font-black uppercase text-sky-800">Max Combo</div>
                <div className="text-2xl font-black text-[#0070D1]">x{maxCombo}</div>
              </div>
            </div>

            <button
              onClick={handleSaveAndExit}
              className="w-full max-w-xs py-3.5 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] border-b-4 border-[#15803d] text-white font-black text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-md active:translate-y-0.5 mx-auto block"
            >
              Lưu Điểm & Hoàn Tất
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
