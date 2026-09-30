import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  RotateCcw,
  Clock,
  Zap,
  Target
} from 'lucide-react';
import { BUYER_QA_LIST } from '../data/vikodaData';
import { BuyerQAItem } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';

interface BuyerObjectionsBattleProps {
  speechRate: number;
  onAwardXpAndGems: (xp: number, gems: number) => void;
}

interface PolishScenario {
  id: string;
  scenario: string;
  bluntVi: string;
  bluntEn: string;
  whyBlunt: string;
  options: {
    text: string;
    isCorrect: boolean;
    executiveTip: string;
  }[];
}

const POLISH_SCENARIOS: PolishScenario[] = [
  {
    id: 'pol-1',
    scenario: 'Khách đề nghị hạ giá 15% để ký ngay',
    bluntVi: 'Tiếng Anh bồi thô: "We give you very cheap price."',
    bluntEn: '"We give you very cheap price."',
    whyBlunt: 'Dùng từ "cheap" hạ thấp giá trị thương hiệu và làm mất vị thế nước khoáng cao cấp.',
    options: [
      {
        text: 'We provide highly competitive volume-based pricing that safeguards your long-term retail margins.',
        isCorrect: true,
        executiveTip: 'Đỉnh cao đàm phán! Dùng "volume-based pricing" và bảo vệ biên lợi nhuận của khách thay vì hạ giá rẻ tiền.'
      },
      {
        text: 'We give discount because we need your contract urgently.',
        isCorrect: false,
        executiveTip: 'Lộ sự yếu thế khiến đối tác tiếp tục ép giá sâu hơn.'
      },
      {
        text: 'No discount, our water is the best in Vietnam take it or leave it.',
        isCorrect: false,
        executiveTip: 'Quá hung hăng, phá vỡ mối quan hệ hợp tác dài hạn.'
      }
    ]
  },
  {
    id: 'pol-2',
    scenario: 'Thương thảo điều khoản thanh toán',
    bluntVi: 'Tiếng Anh bồi thô: "You must pay all money now before we ship."',
    bluntEn: '"You must pay all money now before we ship."',
    whyBlunt: 'Ra lệnh cộc lốc khiến đối tác cảm thấy bị nghi ngờ uy tín tín dụng.',
    options: [
      {
        text: 'Payment is standardly secured via an Irrevocable Letter of Credit confirmed at sight by an international commercial bank.',
        isCorrect: true,
        executiveTip: 'Chuẩn mực ngoại thương quốc tế! Nêu quy trình thanh toán ngân hàng L/C bảo đảm cho cả hai bên.'
      },
      {
        text: 'Send cash quickly or we cancel shipment.',
        isCorrect: false,
        executiveTip: 'Thiếu tính pháp lý và không phù hợp với quy chuẩn xuất khẩu container.'
      },
      {
        text: 'You pay 50% and we pray you pay the rest.',
        isCorrect: false,
        executiveTip: 'Ngôn ngữ thiếu chuyên nghiệp, rủi ro tài chính cao.'
      }
    ]
  },
  {
    id: 'pol-3',
    scenario: 'Khách hoài nghi độ kiềm tự nhiên',
    bluntVi: 'Tiếng Anh bồi thô: "You do not understand, our water is real not fake."',
    bluntEn: '"You do not understand, our water is real not fake."',
    whyBlunt: 'Chê khách "không hiểu" là xúc phạm đối tác, dùng từ "fake" tạo cảm giác thiếu an toàn.',
    options: [
      {
        text: 'Allow me to clarify the geological distinction between artificial electrolysis and our natural 220-meter artesian aquifer.',
        isCorrect: true,
        executiveTip: 'Lịch thiệp và bác học! Dẫn dắt đối tác vào tri thức địa chất 220m một cách tinh tế.'
      },
      {
        text: 'Our government says it is real so you must believe it.',
        isCorrect: false,
        executiveTip: 'Không mang tính thuyết phục khoa học đối với các tập đoàn bán lẻ.'
      },
      {
        text: 'If you think it is fake, do not drink it.',
        isCorrect: false,
        executiveTip: 'Thái độ phòng thủ tiêu cực làm mất khách hàng ngay lập tức.'
      }
    ]
  },
  {
    id: 'pol-4',
    scenario: 'Đối đầu thương hiệu Châu Âu Evian / San Pellegrino',
    bluntVi: 'Tiếng Anh bồi thô: "European water is just marketing, Vikoda is better."',
    bluntEn: '"European water is just marketing, Vikoda is better."',
    whyBlunt: 'Công kích đối thủ một cách cảm tính làm giảm uy tín của chính mình.',
    options: [
      {
        text: 'While European brands offer rich legacy, Vikoda delivers rare natural pH 9.0 synergy bottled at source with a substantially lower carbon footprint.',
        isCorrect: true,
        executiveTip: 'Tôn trọng di sản đối thủ (legacy) nhưng nêu bật sự vượt trội về pH 9.0 tự nhiên và xu hướng xanh (ESG / lower carbon footprint).'
      },
      {
        text: 'Evian is old water, Vikoda is new water.',
        isCorrect: false,
        executiveTip: 'Cách nói ngô nghê, không có hàm lượng chuyên môn B2B.'
      },
      {
        text: 'French water has too many chemicals.',
        isCorrect: false,
        executiveTip: 'Phát ngôn sai sự thật có thể dẫn đến rủi ro pháp lý thương mại.'
      }
    ]
  },
  {
    id: 'pol-5',
    scenario: 'Đàm phán quyền phân phối độc quyền vùng',
    bluntVi: 'Tiếng Anh bồi thô: "No, we cannot give you exclusivity."',
    bluntEn: '"No, we cannot give you exclusivity."',
    whyBlunt: 'Từ chối thẳng thừng làm dập tắt thiện chí mở rộng thị trường của nhà phân phối.',
    options: [
      {
        text: 'We warmly welcome regional exclusivity discussions once our mutual quarterly volume milestones are validated.',
        isCorrect: true,
        executiveTip: 'Để ngỏ cánh cửa hợp tác (warmly welcome) gắn liền với điều kiện doanh số cụ thể (quarterly milestones).'
      },
      {
        text: 'Exclusivity is only for our best friends.',
        isCorrect: false,
        executiveTip: 'Mang tính cảm tính cá nhân, không chuyên nghiệp trong thương mại.'
      },
      {
        text: 'Never, we sell to anyone who has money.',
        isCorrect: false,
        executiveTip: 'Làm mất giá trị độc bản của thương hiệu Vikoda.'
      }
    ]
  }
];

export const BuyerObjectionsBattle: React.FC<BuyerObjectionsBattleProps> = ({
  speechRate,
  onAwardXpAndGems,
}) => {
  const [mode, setMode] = useState<'objections' | 'polish'>('objections');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [battleScore, setBattleScore] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  // Pressure Timer (30s)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(30);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (isTimerActive && !isAnswered && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsAnswered(true);
            playSound('wrong');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, isAnswered, timeLeft]);

  const currentQA: BuyerQAItem = BUYER_QA_LIST[currentIndex % BUYER_QA_LIST.length];
  const currentPolish: PolishScenario = POLISH_SCENARIOS[currentIndex % POLISH_SCENARIOS.length];

  const getOptions = (qa: BuyerQAItem) => {
    switch (qa.id) {
      case 'qa-1':
        return [
          {
            text: 'Artificial alkaline water is forced by electrolysis and loses pH quickly. Vikoda absorbs natural alkaline minerals through deep rock layers, keeping a stable pH 9.0 for up to 3 years.',
            isCorrect: true,
            feedback: 'Xuất sắc! Nêu bật được 2 yếu tố then chốt: kiềm tự nhiên qua tầng địa chất và độ bền pH 3 năm.'
          },
          {
            text: 'Vikoda adds baking soda to make it alkaline just like foreign brands.',
            isCorrect: false,
            feedback: 'Sai hoàn toàn! Vikoda KHÔNG BAO GIỜ thêm baking soda hay hóa chất nhân tạo.'
          },
          {
            text: 'They are completely the same, only the brand name is different.',
            isCorrect: false,
            feedback: 'Đánh mất hoàn toàn lợi thế cạnh tranh cốt lõi của Vikoda!'
          }
        ];
      case 'qa-2':
        return [
          {
            text: 'Drinking water with minerals always causes kidney stones so please drink less.',
            isCorrect: false,
            feedback: 'Sai lầm nghiêm trọng! Khiến khách hàng sợ hãi và từ chối mua hàng.'
          },
          {
            text: 'No, in Vikoda, calcium and magnesium salts are completely soluble at all temperatures. Magnesium even aids kidney excretion, and our balanced TDS of 100-400 mg/L is certified safe for daily drinking.',
            isCorrect: true,
            feedback: 'Câu trả lời chuẩn mực y khoa! Dẫn chứng muối hòa tan hoàn toàn và chỉ số TDS chuẩn mực.'
          },
          {
            text: 'I am not sure, you should consult a doctor first.',
            isCorrect: false,
            feedback: 'Thiếu tính chuyên nghiệp và kiến thức chuyên môn về sản phẩm.'
          }
        ];
      default:
        return [
          {
            text: 'Because imported water is too cheap and Vikoda is much more expensive.',
            isCorrect: false,
            feedback: 'Không đúng thực tế kinh doanh.'
          },
          {
            text: 'Vikoda delivers world-class pH 9.0 natural water with 85% lower carbon footprint, packaged in gorgeous luxury glass bottles that delight guests at half the logistics cost.',
            isCorrect: true,
            feedback: 'Thuyết phục tuyệt đối! Kết hợp giữa đẳng cấp (chai thủy tinh), giảm khí thải carbon và tối ưu chi phí vận hành.'
          },
          {
            text: 'You should buy it just because it is made in Vietnam.',
            isCorrect: false,
            feedback: 'Chưa đủ lý do kinh doanh thuyết phục các GM khách sạn 5 sao quốc tế.'
          }
        ];
    }
  };

  const currentOptions = mode === 'objections' 
    ? getOptions(currentQA) 
    : currentPolish.options.map(o => ({ text: o.text, isCorrect: o.isCorrect, feedback: o.executiveTip }));

  const handlePlayAudio = (text: string) => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      playSpeech(text, speechRate, 'en-US', () => setIsPlayingAudio(false));
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswerIndex(idx);
    setIsAnswered(true);

    const isCorrect = currentOptions[idx].isCorrect;
    if (isCorrect) {
      playSound('correct');
      setBattleScore((prev) => prev + 100);
      onAwardXpAndGems(40, 15);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      playSound('wrong');
    }
  };

  const handleNext = () => {
    playSound('click');
    const maxLen = mode === 'objections' ? BUYER_QA_LIST.length : POLISH_SCENARIOS.length;
    if (currentIndex < maxLen - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
      setTimeLeft(30);
      stopSpeech();
    }
  };

  const restartBattle = () => {
    playSound('click');
    setCurrentIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setBattleScore(0);
    setTimeLeft(30);
    stopSpeech();
  };

  return (
    <div className="space-y-4 pb-24 max-w-lg mx-auto">
      
      {/* Top Mode Switcher: Objections vs Executive Polish */}
      <div className="bg-white p-2 rounded-2xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs flex items-center justify-between gap-1.5">
        <button
          onClick={() => {
            playSound('click');
            setMode('objections');
            restartBattle();
          }}
          className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mode === 'objections'
              ? 'bg-[#0070D1] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <span>⚔️</span>
          <span>Bẻ Gãy Phản Bác</span>
        </button>

        <button
          onClick={() => {
            playSound('click');
            setMode('polish');
            restartBattle();
          }}
          className={`flex-1 py-2 px-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            mode === 'polish'
              ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <span>✨</span>
          <span>Sửa Lỗi Nói Hớ (Polish)</span>
        </button>
      </div>

      {/* Header Info */}
      <div className="bg-white p-4 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl">{mode === 'objections' ? '⚔️' : '✨'}</span>
            <div>
              <h2 className="text-sm font-black text-slate-900 leading-tight">
                {mode === 'objections' ? 'Đấu Trí Bẻ Gãy Phản Bác Buyer' : 'Nâng Tầm Ngoại Giao: Sửa Lỗi Nói Hớ'}
              </h2>
              <p className="text-[10px] text-slate-500 font-medium">
                {mode === 'objections' ? 'Tình huống chất vấn thực tế từ khách quốc tế' : 'Biến câu nói bồi cộc lốc thành phong thái đàm phán cấp CEO'}
              </p>
            </div>
          </div>

          {/* 30s Pressure Countdown Badge */}
          <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-full font-mono text-xs font-black border ${
            timeLeft <= 10
              ? 'bg-rose-100 text-rose-700 border-rose-300 animate-pulse'
              : 'bg-amber-50 text-amber-800 border-amber-300'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#009FE3] h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / (mode === 'objections' ? BUYER_QA_LIST.length : POLISH_SCENARIOS.length)) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 border-b-4 border-b-slate-300 shadow-xs space-y-4">
        
        {mode === 'objections' ? (
          /* OBJECTIONS VIEW */
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase">
                {currentQA.clientType}
              </span>
              <button
                onClick={() => handlePlayAudio(currentQA.foreignQuestionEn)}
                className="p-1.5 rounded-xl bg-sky-50 text-[#0070D1] hover:bg-sky-100 border border-sky-200 cursor-pointer"
                title="Nghe câu hỏi của khách"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-900 leading-snug">
                "{currentQA.foreignQuestionEn}"
              </h3>
              <p className="text-xs text-slate-500 font-medium italic">
                {currentQA.foreignQuestionVi}
              </p>
            </div>
          </div>
        ) : (
          /* EXECUTIVE POLISH VIEW */
          <div className="space-y-3">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase inline-block">
              Tình huống: {currentPolish.scenario}
            </span>

            {/* Blunt / Rude statement box */}
            <div className="p-3 rounded-2xl bg-rose-50 border-2 border-rose-200 space-y-1">
              <div className="flex items-center space-x-1.5 text-rose-700 font-black text-xs">
                <span>❌</span>
                <span>Câu nói thô người Việt hay lỡ lời:</span>
              </div>
              <p className="text-sm font-black text-slate-900 font-mono">
                {currentPolish.bluntEn}
              </p>
              <p className="text-[11px] text-rose-800 font-medium">
                {currentPolish.whyBlunt}
              </p>
            </div>

            <div className="text-xs font-black text-slate-700 pt-1">
              💡 Hãy chọn phương án nâng tầm ngoại giao (Executive Polish):
            </div>
          </div>
        )}

        {/* Options List */}
        <div className="space-y-2.5 pt-1">
          {currentOptions.map((opt, idx) => {
            const isSelected = selectedAnswerIndex === idx;
            let style = 'bg-white border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-800 hover:border-sky-300 hover:bg-sky-50/30';

            if (isAnswered) {
              if (opt.isCorrect) {
                style = 'bg-emerald-50 border-2 border-emerald-500 border-b-4 border-b-emerald-600 text-emerald-950 font-black';
              } else if (isSelected) {
                style = 'bg-rose-50 border-2 border-rose-500 border-b-4 border-b-rose-600 text-rose-950 font-bold';
              } else {
                style = 'opacity-50 border-slate-200';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-3.5 rounded-2xl text-left text-xs font-bold transition-all cursor-pointer flex items-start justify-between gap-3 ${style}`}
              >
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 font-mono mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{opt.text}</span>
                </div>

                {isAnswered && (
                  <div className="shrink-0 mt-0.5">
                    {opt.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : isSelected ? (
                      <XCircle className="w-4 h-4 text-rose-600" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Area */}
        {isAnswered && (
          <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 space-y-2 text-xs animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="font-black text-[#0070D1] uppercase tracking-wide text-[10px]">
                💡 Phân tích chiến lược:
              </span>
              <button
                onClick={() => handlePlayAudio(currentOptions.find(o => o.isCorrect)?.text || '')}
                className="flex items-center space-x-1 text-xs font-bold text-[#0070D1] hover:underline cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe câu ngoại giao chuẩn US</span>
              </button>
            </div>

            <p className="text-slate-700 leading-relaxed font-medium">
              {currentOptions[selectedAnswerIndex || 0]?.feedback || currentOptions.find(o => o.isCorrect)?.feedback}
            </p>
          </div>
        )}

        {/* Next Question Button */}
        {isAnswered && currentIndex < (mode === 'objections' ? BUYER_QA_LIST.length : POLISH_SCENARIOS.length) - 1 && (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-2xl btn-duo-primary text-white font-black text-xs shadow-md flex items-center justify-center space-x-1.5 transition-all active:scale-98 cursor-pointer"
          >
            <span>Tình huống tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Complete Celebration */}
        {isAnswered && currentIndex === (mode === 'objections' ? BUYER_QA_LIST.length : POLISH_SCENARIOS.length) - 1 && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <span className="text-3xl">🏆</span>
            <h4 className="text-sm font-black text-emerald-900">
              Hoàn thành xuất sắc phiên thử thách!
            </h4>
            <p className="text-xs text-emerald-700 font-medium">
              Bạn đã chứng minh bản lĩnh và phong thái của một Đại sứ Vikoda chuyên nghiệp trên đấu trường quốc tế.
            </p>
            <button
              onClick={restartBattle}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-sm cursor-pointer"
            >
              Luyện lại từ đầu
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
