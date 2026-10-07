import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Sparkles, 
  Mic, 
  Volume2, 
  CheckCircle2, 
  Trophy, 
  ArrowRight, 
  RotateCcw, 
  MessageSquare,
  Award,
  ShieldCheck,
  Star,
  TrendingUp,
  Percent,
  Check,
  AlertTriangle
} from 'lucide-react';
import { playSpeech, startSpeechRecognition, finishSpeechRecognition, stopSpeech, evaluatePronunciationDetails } from '../services/speechService';
import { playSound } from '../services/soundEffects';
import { CompanyEmblem } from './brand/VikodaLogos';

interface PitchSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
  onAwardXpAndGems: (xp: number, gems: number) => void;
}

interface NegotiationStrategyOption {
  id: string;
  strategyType: 'win-win' | 'weak' | 'rigid';
  strategyLabel: string;
  textEn: string;
  textVi: string;
  score: number;
  trustChange: number;
  marginChange: number;
  executiveFeedback: string;
}

interface BuyerRound {
  roundNumber: number;
  roundTitle: string;
  buyerQuestionEn: string;
  buyerQuestionVi: string;
  buyerAudio: string;
  options: NegotiationStrategyOption[];
}

interface BuyerPersona {
  id: string;
  name: string;
  role: string;
  company: string;
  flag: string;
  avatar: string;
  objective: string;
  rounds: BuyerRound[];
}

const BUYER_PERSONAS: BuyerPersona[] = [
  {
    id: 'kenji',
    name: 'Mr. Kenji Takahashi',
    role: 'Procurement Director',
    company: 'Tokyo Organic Wellness Corp (Japan)',
    flag: '🇯🇵',
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&auto=format&fit=crop&q=80',
    objective: 'Tìm nguồn nước kiềm thiên nhiên đóng chai cao cấp cho chuỗi 200 siêu thị hữu cơ tại Tokyo.',
    rounds: [
      {
        roundNumber: 1,
        roundTitle: 'Màn Chào Hỏi & Định Vị Cốt Lõi (The 30s Strategic Hook)',
        buyerQuestionEn: 'Good morning. We see many mineral waters in Southeast Asia. What makes Vikoda fundamentally different?',
        buyerQuestionVi: 'Chào bạn. Thị trường Đông Nam Á có rất nhiều loại nước khoáng. Điều gì tạo nên sự khác biệt cốt lõi của Vikoda?',
        buyerAudio: 'Good morning. We see many mineral waters in Southeast Asia. What makes Vikoda fundamentally different?',
        options: [
          {
            id: 'k1-winwin',
            strategyType: 'win-win',
            strategyLabel: 'Đỉnh Cao Ngoại Giao (Win-Win Value)',
            textEn: 'Vikoda is Vietnam’s rare natural alkaline mineral water with an innate pH of 9.0, bottled directly at our 1957 volcanic source at 72°C with zero chemical electrolysis.',
            textVi: 'Vikoda là nước khoáng kiềm thiên nhiên quý hiếm với pH 9.0 tự nhiên, đóng chai trực tiếp tại nguồn mỏ 1957 ở 72°C mà không cần điện phân.',
            score: 100,
            trustChange: 25,
            marginChange: 5,
            executiveFeedback: 'Xuất sắc! Đánh trúng tâm lý người Nhật coi trọng tính "nguyên bản thiên tạo" (Innate & No Artificial Electrolysis).'
          },
          {
            id: 'k1-weak',
            strategyType: 'weak',
            strategyLabel: 'Nhượng Bộ Giá Sớm (Weak Concession)',
            textEn: 'We offer very competitive wholesale prices that are substantially cheaper than Japanese domestic mineral water.',
            textVi: 'Chúng tôi cung cấp mức giá bán sỉ rất cạnh tranh, rẻ hơn đáng kể so với nước khoáng nội địa Nhật Bản.',
            score: 50,
            trustChange: 5,
            marginChange: -15,
            executiveFeedback: 'Hạ thấp vị thế thương hiệu! Đưa giá rẻ ra đầu tiên khiến khách Nhật nghi ngờ chất lượng an toàn thực phẩm.'
          },
          {
            id: 'k1-rigid',
            strategyType: 'rigid',
            strategyLabel: 'Phòng Thủ Cứng Nhắc (Rigid Posture)',
            textEn: 'Our quality is certified by the Vietnamese government, so you do not need to compare us with other brands.',
            textVi: 'Chất lượng của chúng tôi đã được chính phủ Việt Nam chứng nhận, ngài không cần phải so sánh với các nhãn hiệu khác.',
            score: 30,
            trustChange: -20,
            marginChange: 0,
            executiveFeedback: 'Thái độ cứng nhắc! Khách hàng quốc tế đòi hỏi dẫn chứng kiểm định khoa học chứ không chấp nhận mệnh lệnh.'
          }
        ]
      },
      {
        roundNumber: 2,
        roundTitle: 'Xử Lý Nghi Ngờ: Độ Bền Của Kiềm (Handling The Ionization Trap)',
        buyerQuestionEn: 'In Japan, ionized water loses its alkaline pH after 48 hours. How does Vikoda maintain pH 9.0 during ocean freight?',
        buyerQuestionVi: 'Ở Nhật, nước kiềm điện phân nhân tạo bị mất kiềm chỉ sau 48 giờ. Làm sao Vikoda giữ được pH 9.0 trong suốt quá trình vận chuyển đường biển?',
        buyerAudio: 'In Japan, ionized water loses its alkaline pH after 48 hours. How does Vikoda maintain pH 9.0 during ocean freight?',
        options: [
          {
            id: 'k2-winwin',
            strategyType: 'win-win',
            strategyLabel: 'Bác Học & Dẫn Chứng Khoa Học (Win-Win)',
            textEn: 'Because Vikoda’s alkalinity is naturally mineral-bonded from Mother Earth, our laboratory tests confirm a stable pH 9.0 for up to three full years across shipping temperatures.',
            textVi: 'Vì độ kiềm của Vikoda được khoáng hóa tự nhiên trong lòng đất mẹ, kiểm nghiệm thực tế khẳng định độ pH 9.0 duy trì bền bỉ suốt 3 năm bất chấp nhiệt độ vận chuyển.',
            score: 100,
            trustChange: 25,
            marginChange: 5,
            executiveFeedback: 'Hoàn hảo! Dập tắt ngay lo ngại về độ bền kiềm, giải thích rõ nguyên nhân "mineral-bonded" (liên kết muối khoáng tự nhiên).'
          },
          {
            id: 'k2-weak',
            strategyType: 'weak',
            strategyLabel: 'Chấp Nhận Rủi Ro Thay Khách (Weak Guarantee)',
            textEn: 'If the pH drops below 9.0 during shipping, we will refund 100% of your order unconditionally without testing.',
            textVi: 'Nếu độ pH giảm dưới 9.0 trong lúc vận chuyển, chúng tôi sẽ hoàn tiền 100% vô điều kiện mà không cần kiểm tra.',
            score: 55,
            trustChange: 10,
            marginChange: -20,
            executiveFeedback: 'Nhượng bộ tài chính nguy hiểm! Phải bảo vệ giá trị bằng kiểm định mẫu độc lập thay vì cam kết hoàn tiền tùy tiện.'
          },
          {
            id: 'k2-rigid',
            strategyType: 'rigid',
            strategyLabel: 'Gạt Bỏ Nghi Vấn (Dismissive Tone)',
            textEn: 'We have sold millions of bottles in Vietnam and nobody has ever questioned our pH stability before.',
            textVi: 'Chúng tôi đã bán hàng triệu chai ở Việt Nam và chưa từng có ai thắc mắc về độ bền pH trước đây.',
            score: 35,
            trustChange: -15,
            marginChange: 0,
            executiveFeedback: 'Thiếu tính chuyên nghiệp B2B! Thị trường Nhật khắt khe về kỹ thuật, không thể trả lời kiểu cảm tính.'
          }
        ]
      },
      {
        roundNumber: 3,
        roundTitle: 'Chốt Điều Kiện Hàng Mẫu & Đơn Thử Nghiệm (The Closing Protocol)',
        buyerQuestionEn: 'We are interested in testing this with our QA lab. What are your terms for sending samples and initial trial orders?',
        buyerQuestionVi: 'Chúng tôi rất hứng thú kiểm định mẫu tại phòng lab Tokyo. Điều kiện gửi hàng mẫu và đơn thử nghiệm ban đầu ra sao?',
        buyerAudio: 'We are interested in testing this with our QA lab. What are your terms for sending samples and initial trial orders?',
        options: [
          {
            id: 'k3-winwin',
            strategyType: 'win-win',
            strategyLabel: 'Ngoại Giao Cấp Cao & Thăm Mỏ (Win-Win)',
            textEn: 'We will dispatch complimentary sample cases via air freight today alongside our ISO and HACCP dossiers. We also warmly invite you to visit our Danh Thanh sanctuary.',
            textVi: 'Chúng tôi sẽ gửi ngay mẫu thử bằng đường hàng không hôm nay cùng bộ hồ sơ ISO và HACCP. Chúng tôi cũng nồng nhiệt mời ngài đến thăm mỏ Đảnh Thạnh.',
            score: 100,
            trustChange: 30,
            marginChange: 10,
            executiveFeedback: 'Đỉnh cao đàm phán! Mời đối tác sang tận mỏ Đảnh Thạnh 220m là đòn tâm lý mạnh nhất tạo niềm tin sắt đá.'
          },
          {
            id: 'k3-weak',
            strategyType: 'weak',
            strategyLabel: 'Miễn Phí Quá Mức (Over-Concession)',
            textEn: 'We will give you the entire first container for free just to prove that we want your partnership.',
            textVi: 'Chúng tôi sẽ tặng ngài nguyên container đầu tiên miễn phí chỉ để chứng minh thiện chí hợp tác.',
            score: 40,
            trustChange: -10,
            marginChange: -30,
            executiveFeedback: 'Làm mất giá trị hàng hóa! Khách lớn nghi ngờ tại sao sản phẩm cao cấp lại tặng không cả container.'
          },
          {
            id: 'k3-rigid',
            strategyType: 'rigid',
            strategyLabel: 'Yêu Cầu Tiền Trước Cộc Lốc (Rigid Demand)',
            textEn: 'Samples are not free. You must pay 500 dollars shipping cost upfront before we pack anything.',
            textVi: 'Hàng mẫu không miễn phí. Ngài phải thanh toán trước 500 đô la phí vận chuyển thì chúng tôi mới đóng hàng.',
            score: 30,
            trustChange: -25,
            marginChange: 0,
            executiveFeedback: 'Đánh mất thương vụ! Trong ngoại thương B2B, mẫu thử ban đầu luôn là khoản đầu tư tiếp thị chính đáng.'
          }
        ]
      }
    ]
  },
  {
    id: 'sarah',
    name: 'Ms. Sarah Jenkins',
    role: 'Global Procurement VP',
    company: 'Regal 5-Star International Hotels',
    flag: '🏨',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    objective: 'Tìm kiếm dòng nước khoáng chai thủy tinh sang trọng thay thế hàng nhập khẩu Châu Âu đắt đỏ và giảm 80% rác thải nhựa.',
    rounds: [
      {
        roundNumber: 1,
        roundTitle: 'Mở Màn: Định Vị Chai Thủy Tinh Cao Cấp (Luxury Glass Aesthetic)',
        buyerQuestionEn: 'Our 5-star properties currently serve San Pellegrino and Evian. How can Vikoda match that dining table prestige?',
        buyerQuestionVi: 'Các khách sạn 5 sao của chúng tôi hiện dùng San Pellegrino và Evian. Làm sao Vikoda sánh được sự sang trọng trên bàn tiệc?',
        buyerAudio: 'Our 5-star properties currently serve San Pellegrino and Evian. How can Vikoda match that dining table prestige?',
        options: [
          {
            id: 's1-winwin',
            strategyType: 'win-win',
            strategyLabel: 'Tôn Trọng Di Sản & Nêu Bật ESG (Win-Win)',
            textEn: 'Our bespoke luxury glass bottles are designed for Michelin-level fine dining, offering European-grade natural pH 9.0 while slashing your freight carbon footprint by 85%.',
            textVi: 'Dòng chai thủy tinh cao cấp của chúng tôi được thiết kế riêng cho chuẩn bàn tiệc Michelin, chất lượng khoáng kiềm pH 9.0 ngang tầm Châu Âu nhưng giảm 85% phát thải CO2.',
            score: 100,
            trustChange: 25,
            marginChange: 10,
            executiveFeedback: 'Tuyệt đỉnh! Đánh trúng cả 3 điểm then chốt: thẩm mỹ sang trọng, chất lượng tương đương và tiêu chí xanh ESG.'
          },
          {
            id: 's1-weak',
            strategyType: 'weak',
            strategyLabel: 'Giảm Giá Trị Thành Hàng Bình Dân (Weak Positioning)',
            textEn: 'European water is too expensive for your guests, so our cheap price will help your hotel save substantial budget.',
            textVi: 'Nước Châu Âu quá đắt đỏ với khách của bà, giá rẻ của chúng tôi sẽ giúp khách sạn tiết kiệm nhiều chi phí.',
            score: 45,
            trustChange: -10,
            marginChange: -15,
            executiveFeedback: 'Sai lệch định vị! Khách sạn 5 sao không bao giờ muốn khách nghĩ mình phục vụ "nước giá rẻ" (cheap price).'
          },
          {
            id: 's1-rigid',
            strategyType: 'rigid',
            strategyLabel: 'Công Kích Đối Thủ Châu Âu (Aggressive Attack)',
            textEn: 'European brands are just marketing hype and their water quality is actually inferior to Vikoda.',
            textVi: 'Các thương hiệu Châu Âu chỉ là quảng cáo thổi phồng và chất lượng nước của họ thực ra thua kém Vikoda.',
            score: 30,
            trustChange: -25,
            marginChange: 0,
            executiveFeedback: 'Vi phạm quy tắc ứng xử thương mại! Công kích trực tiếp đối thủ uy tín làm giảm đẳng cấp của chính mình.'
          }
        ]
      },
      {
        roundNumber: 2,
        roundTitle: 'Đàm Phán Đổi Chai Rỗng & Hậu Cần Xanh (Circular Glass Logistics)',
        buyerQuestionEn: 'Glass bottles are heavy and require break-safe handling. How do you support our reverse logistics for recycling?',
        buyerQuestionVi: 'Chai thủy tinh rất nặng và dễ vỡ. Vikoda hỗ trợ quy trình thu hồi vỏ chai và vận hành xanh như thế nào?',
        buyerAudio: 'Glass bottles are heavy and require break-safe handling. How do you support our reverse logistics for recycling?',
        options: [
          {
            id: 's2-winwin',
            strategyType: 'win-win',
            strategyLabel: 'Giải Pháp Thu Hồi Khép Kín (Circular Loop)',
            textEn: 'We implement a scheduled reverse-logistics collection with custom protective crates, returning a quarterly sustainability credit to your procurement ledger.',
            textVi: 'Chúng tôi triển khai lịch trình thu hồi vỏ chai định kỳ bằng thùng chuyên dụng chống vỡ, hoàn lại khoản tín dụng xanh định kỳ vào tài khoản thu mua của quý vị.',
            score: 100,
            trustChange: 30,
            marginChange: 5,
            executiveFeedback: 'Giải pháp hoàn hảo! Biến khó khăn thu hồi vỏ chai thành lợi ích tài chính và điểm số phát triển bền vững ESG.'
          },
          {
            id: 's2-weak',
            strategyType: 'weak',
            strategyLabel: 'Gánh Toàn Bộ Chi Phí Vỡ Hỏng (Weak Terms)',
            textEn: 'We will compensate any broken bottles with double the quantity without asking for any verification.',
            textVi: 'Chúng tôi sẽ đền bù gấp đôi số lượng bất kỳ chai nào bị vỡ mà không cần kiểm tra xác minh.',
            score: 50,
            trustChange: 5,
            marginChange: -20,
            executiveFeedback: 'Rủi ro tài chính cao! Điều khoản đền bù vô căn cứ dễ bị lợi dụng và làm xói mòn lợi nhuận giao nhận.'
          },
          {
            id: 's2-rigid',
            strategyType: 'rigid',
            strategyLabel: 'Đổ Trách Nhiệm Cho Khách Sạn (Rigid Terms)',
            textEn: 'Once delivered to your dock, bottle handling and broken glass are entirely your hotel’s problem.',
            textVi: 'Một khi hàng đã giao tới cầu cảng, việc quản lý và chai vỡ là hoàn toàn trách nhiệm của khách sạn bà.',
            score: 25,
            trustChange: -30,
            marginChange: 0,
            executiveFeedback: 'Phá vỡ quan hệ đối tác! Khách sạn 5 sao cần giải pháp chuỗi cung ứng đồng hành chứ không phải thái độ phủi tay.'
          }
        ]
      }
    ]
  }
];

export const PitchSimulatorModal: React.FC<PitchSimulatorModalProps> = ({
  isOpen,
  onClose,
  speechRate,
  onAwardXpAndGems
}) => {
  const [selectedPersona, setSelectedPersona] = useState<BuyerPersona>(BUYER_PERSONAS[0]);
  const [currentRoundIdx, setCurrentRoundIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [buyerTrust, setBuyerTrust] = useState<number>(50); // Starts at 50%
  const [profitMargin, setProfitMargin] = useState<number>(30); // Starts at 30%
  const [totalNegotiationScore, setTotalNegotiationScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Speech practice state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [speechScore, setSpeechScore] = useState<number | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>('');

  if (!isOpen) return null;

  const currentRound = selectedPersona.rounds[currentRoundIdx];
  const selectedOption = currentRound?.options.find(o => o.id === selectedOptionId);

  const handleSelectOption = (option: NegotiationStrategyOption) => {
    if (isAnswered) return;
    playSound('click');
    setSelectedOptionId(option.id);
  };

  const handleConfirmDecision = () => {
    if (!selectedOption || isAnswered) return;
    setIsAnswered(true);

    const newTrust = Math.max(0, Math.min(100, buyerTrust + selectedOption.trustChange));
    const newMargin = Math.max(5, Math.min(50, profitMargin + selectedOption.marginChange));
    setBuyerTrust(newTrust);
    setProfitMargin(newMargin);
    setTotalNegotiationScore(prev => prev + selectedOption.score);

    if (selectedOption.strategyType === 'win-win') {
      playSound('correct');
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    } else if (selectedOption.strategyType === 'weak') {
      playSound('wrong');
    } else {
      playSound('wrong');
    }
  };

  const handleNextRound = () => {
    if (currentRoundIdx + 1 < selectedPersona.rounds.length) {
      setCurrentRoundIdx(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setSpeechScore(null);
      setRecognizedText('');
      playSound('click');
    } else {
      // Completed negotiation
      setIsCompleted(true);
      const earnedXp = Math.round((totalNegotiationScore / (selectedPersona.rounds.length * 100)) * 60) + 20;
      const earnedGems = buyerTrust >= 70 ? 25 : 10;
      onAwardXpAndGems(earnedXp, earnedGems);
      playSound('celebrate');
    }
  };

  const handleRestart = () => {
    setCurrentRoundIdx(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setBuyerTrust(50);
    setProfitMargin(30);
    setTotalNegotiationScore(0);
    setIsCompleted(false);
    setSpeechScore(null);
    setRecognizedText('');
    playSound('click');
  };

  const handleMicPractice = (targetText: string) => {
    if (isRecording) {
      finishSpeechRecognition();
      return;
    }

    setIsRecording(true);
    setSpeechScore(null);
    setRecognizedText('Đang lắng nghe... Hãy đọc to câu tiếng Anh bạn đã chọn!');
    playSound('click');

    startSpeechRecognition(
      (finalText) => {
        setRecognizedText(finalText);
        const evalResult = evaluatePronunciationDetails(targetText, finalText);
        setSpeechScore(evalResult.score);
        setIsRecording(false);
        if (evalResult.score >= 60) {
          playSound('correct');
        } else {
          playSound('wrong');
        }
      },
      () => setIsRecording(false),
      () => setIsRecording(false),
      undefined,
      'en-US',
      targetText
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 animate-in fade-in duration-150 select-none">
      <div className="bg-white w-full max-w-2xl rounded-3xl border-2 border-slate-200 border-b-6 border-b-slate-400 shadow-2xl flex flex-col overflow-hidden max-h-[94vh]">
        
        {/* 1. Modal Top Bar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm">
              💼
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-400">
                Sàn Đàm Phán B2B Quốc Tế
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Đối đầu trực tiếp • Đo lường Buyer Trust & Biên lợi nhuận
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Live Negotiation Scorecard (Buyer Trust & Profit Margin) */}
        <div className="bg-slate-100/90 px-5 py-2.5 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0 text-xs">
          {/* Buyer Trust Meter */}
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Buyer Trust:</span>
              </span>
              <span className={`font-black ${buyerTrust >= 70 ? 'text-emerald-600' : buyerTrust >= 40 ? 'text-amber-600' : 'text-rose-600'}`}>
                {buyerTrust}% {buyerTrust >= 70 ? '• Rất Tin Cậy' : buyerTrust >= 40 ? '• Đang Dè Chừng' : '• Nguy Cơ Đổ Vỡ'}
              </span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  buyerTrust >= 70 ? 'bg-emerald-500' : buyerTrust >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                }`}
                style={{ width: `${buyerTrust}%` }}
              />
            </div>
          </div>

          {/* Profit Margin Meter */}
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Biên Lợi Nhuận:</span>
              </span>
              <span className={`font-black ${profitMargin >= 25 ? 'text-emerald-600' : 'text-amber-600'}`}>
                {profitMargin}%
              </span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${(profitMargin / 50) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* 3. Main Stage Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {!isCompleted ? (
            <>
              {/* Buyer Persona Card */}
              <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-100 flex items-start gap-3">
                <img 
                  src={selectedPersona.avatar} 
                  alt={selectedPersona.name} 
                  className="w-13 h-13 rounded-2xl object-cover border-2 border-white shadow-xs shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900 truncate">{selectedPersona.name}</span>
                    <span className="text-sm">{selectedPersona.flag}</span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-sky-200 text-sky-700 text-[10px] font-black uppercase">
                      Hiệp {currentRoundIdx + 1}/{selectedPersona.rounds.length}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 font-bold">
                    {selectedPersona.role} • {selectedPersona.company}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 line-clamp-1 italic">
                    Mục tiêu: {selectedPersona.objective}
                  </div>
                </div>
              </div>

              {/* Buyer Question / Inquiry */}
              <div className="bg-slate-900 rounded-2xl p-4 text-white space-y-2 shadow-sm relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{currentRound.roundTitle}</span>
                  </span>
                  <button
                    onClick={() => playSpeech(currentRound.buyerAudio, speechRate, 'en-US')}
                    className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 cursor-pointer flex items-center gap-1 text-xs font-bold"
                    title="Nghe giọng đối tác ngoại quốc"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Nghe</span>
                  </button>
                </div>

                <div className="text-sm sm:text-base font-bold text-sky-100 leading-snug break-words">
                  "{currentRound.buyerQuestionEn}"
                </div>
                <div className="text-xs text-slate-400 font-medium pt-1 border-t border-slate-800 break-words">
                  {currentRound.buyerQuestionVi}
                </div>
              </div>

              {/* 3 Strategy Decision Options (Non-Caricature) */}
              <div className="space-y-2.5">
                <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Chọn Đối Sách Thương Lượng Của Bạn:
                </div>

                {currentRound.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(opt)}
                      className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-[#0070D1] bg-sky-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      } ${isAnswered && opt.strategyType === 'win-win' ? 'ring-2 ring-emerald-400 border-emerald-400' : ''}`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                          opt.strategyType === 'win-win' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : opt.strategyType === 'weak'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {opt.strategyLabel}
                        </span>

                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#0070D1] bg-[#0070D1] text-white' : 'border-slate-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>

                      <div className="text-xs font-bold text-slate-900 leading-relaxed mb-1 break-words">
                        "{opt.textEn}"
                      </div>
                      <div className="text-[11px] text-slate-500 leading-normal break-words">
                        {opt.textVi}
                      </div>

                      {/* Feedback after confirmation */}
                      {isAnswered && isSelected && (
                        <div className={`mt-3 pt-2.5 border-t text-xs font-medium space-y-1 animate-in fade-in duration-200 ${
                          opt.strategyType === 'win-win' ? 'text-emerald-800 border-emerald-200' : 'text-slate-700 border-slate-200'
                        }`}>
                          <div className="font-bold flex items-center gap-1.5">
                            {opt.strategyType === 'win-win' ? '🎯 Đánh Giá Chuyên Gia:' : '⚠️ Cảnh Báo Chiến Thuật:'}
                          </div>
                          <p>{opt.executiveFeedback}</p>
                          <div className="text-[11px] font-bold text-slate-500 flex items-center gap-3 pt-1">
                            <span>Buyer Trust: <strong className={opt.trustChange >= 0 ? 'text-emerald-600' : 'text-rose-600'}>{opt.trustChange >= 0 ? `+${opt.trustChange}%` : `${opt.trustChange}%`}</strong></span>
                            <span>Biên Lợi Nhuận: <strong className={opt.marginChange >= 0 ? 'text-emerald-600' : 'text-rose-600'}>{opt.marginChange >= 0 ? `+${opt.marginChange}%` : `${opt.marginChange}%`}</strong></span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Speech-to-Confirm Practice Box */}
              {selectedOption && (
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase text-slate-400 block">Luyện Nói Trước Khi Chốt:</span>
                    <p className="text-xs font-bold text-slate-700 truncate">
                      {recognizedText || 'Bấm mic và đọc to câu tiếng Anh trên để AI chấm điểm'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleMicPractice(selectedOption.textEn)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer shrink-0 transition-all ${
                      isRecording ? 'bg-rose-500 text-white animate-pulse' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Mic className="w-3.5 h-3.5" />
                    <span>{isRecording ? 'Đang nghe...' : speechScore ? `${speechScore}% Điểm` : 'Luyện Mic'}</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Completed Stage Summary */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-white flex items-center justify-center text-3xl mx-auto shadow-md">
                🏆
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {buyerTrust >= 70 ? 'Chốt Deal Thành Công Rực Rỡ!' : 'Đàm Phán Hoàn Tất • Cần Tinh Chỉnh Chiến Thuật'}
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                  Bạn đã hoàn thành phiên thương thảo cùng {selectedPersona.name} ({selectedPersona.company}).
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-center">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Tổng Điểm</span>
                  <span className="text-base font-black text-[#0070D1]">{totalNegotiationScore}đ</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Buyer Trust</span>
                  <span className={`text-base font-black ${buyerTrust >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>{buyerTrust}%</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Biên Lợi Nhuận</span>
                  <span className="text-base font-black text-emerald-600">{profitMargin}%</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 4. Footer Action Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          {!isCompleted ? (
            <>
              <button
                onClick={() => {
                  stopSpeech();
                  onClose();
                }}
                className="px-4 py-2 rounded-2xl border border-slate-300 hover:bg-slate-100 text-slate-600 font-black text-xs cursor-pointer"
              >
                Rời Bàn Đàm Phán
              </button>

              {!isAnswered ? (
                <button
                  disabled={!selectedOptionId}
                  onClick={handleConfirmDecision}
                  className={`px-5 py-2.5 rounded-2xl font-black text-xs text-white uppercase tracking-wider cursor-pointer shadow-sm transition-all ${
                    selectedOptionId ? 'bg-[#0070D1] hover:bg-[#005bb5]' : 'bg-slate-300 cursor-not-allowed'
                  }`}
                >
                  Xác Nhận Đối Sách ➜
                </button>
              ) : (
                <button
                  onClick={handleNextRound}
                  className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 font-black text-xs text-white uppercase tracking-wider cursor-pointer shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <span>{currentRoundIdx + 1 < selectedPersona.rounds.length ? 'Hiệp Tiếp Theo' : 'Xem Kết Quả Deal'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </>
          ) : (
            <div className="flex items-center gap-2 w-full">
              <button
                onClick={handleRestart}
                className="flex-1 py-2.5 rounded-2xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Đàm Phán Lại</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-2xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs cursor-pointer shadow-sm"
              >
                Hoàn Tất & Trở Về
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
