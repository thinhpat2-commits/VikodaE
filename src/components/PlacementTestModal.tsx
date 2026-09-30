import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Trophy, 
  RotateCcw, 
  Compass, 
  Check, 
  X,
  Target
} from 'lucide-react';
import { playSpeech, stopSpeech } from '../services/speechService';
import { playSound } from '../services/soundEffects';
import { CourseLevel } from '../data/curriculumData';

export interface PlacementTestResult {
  score: number;
  totalQuestions: number;
  recommendedLevel: CourseLevel;
  skills: {
    pronunciation: number; // 0 - 100
    mineralFluency: number; // 0 - 100
    b2bReflex: number; // 0 - 100
    executivePolish: number; // 0 - 100
  };
  feedback: string;
  nextSteps: string[];
}

interface Question {
  id: number;
  category: 'pronunciation' | 'mineralFluency' | 'b2bReflex' | 'executivePolish';
  categoryLabel: string;
  prompt: string;
  audioText?: string;
  context: string;
  options: {
    text: string;
    isCorrect: boolean;
    nativeNote: string;
  }[];
}

const PLACEMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'pronunciation',
    categoryLabel: 'Phát Âm & Nối Âm Bản Ngữ (Linking Sounds)',
    prompt: 'Khi giới thiệu tính kiềm tự nhiên của Vikoda, cụm từ "naturally alkaline at pH 9.0" được người bản xứ nói nối âm chuẩn xác như thế nào?',
    audioText: 'Our water is naturally alkaline at pH nine point oh, bottled directly at the source.',
    context: 'Tình huống: Giới thiệu độ kiềm tự nhiên độc bản của nguồn khoáng Đảnh Thạnh với đối tác Mỹ.',
    options: [
      {
        text: 'Nối âm mượt mà: /ˈnætʃrəli ˈælkəlaɪn æt piː-eɪtʃ naɪn pɔɪnt oʊ/ (ngắt nhịp dứt khoát ở 9.0)',
        isCorrect: true,
        nativeNote: 'Chuẩn xác! Người bản ngữ đọc 9.0 là "nine point oh" thay vì "nine point zero", và nhấn mạnh trọng âm vào "naturally".'
      },
      {
        text: 'Đọc rời rạc từng từ: Nat-chu-ral Al-ka-line at P-H nine point ze-ro',
        isCorrect: false,
        nativeNote: 'Đọc rời rạc và nói "zero" thay vì "oh" khiến ngữ điệu bị cứng, thiếu tự nhiên trong giao tiếp thương mại quốc tế.'
      },
      {
        text: 'Chỉ cần nói: Water has good pH',
        isCorrect: false,
        nativeNote: 'Quá sơ sài và đánh mất hoàn toàn giá trị cốt lõi "Naturally Alkaline" của Vikoda.'
      }
    ]
  },
  {
    id: 2,
    category: 'mineralFluency',
    categoryLabel: 'Am Hiểu Mỏ Khoáng & Định Vị Cao Cấp (Mineral Fluency)',
    prompt: 'Đối tác Châu Âu hỏi: "What distinguishes Vikoda from standard purified bottled water?" Bạn trả lời thế nào chuẩn chuyên gia?',
    audioText: 'What distinguishes Vikoda from standard purified bottled water?',
    context: 'Tình huống: Khách hàng hỏi phân biệt giữa nước tinh khiết RO và nước khoáng thiên nhiên Đảnh Thạnh.',
    options: [
      {
        text: 'Vikoda is 100% natural mineral water bottled directly at the 220m deep pristine spring source, preserving rare natural alkaline minerals without artificial processing.',
        isCorrect: true,
        nativeNote: 'Xuất sắc! Nêu bật cả 3 bảo chứng: "bottled directly at source", "220m pristine depth", và "zero artificial processing".'
      },
      {
        text: 'It is purified water with minerals added by high-tech machines.',
        isCorrect: false,
        nativeNote: 'Sai lầm nghiêm trọng! Vikoda là khoáng tự nhiên, tuyệt đối không phải nước lọc nhân tạo thêm khoáng (purified + artificial).'
      },
      {
        text: 'Vikoda is cleaner than other tap water in Vietnam.',
        isCorrect: false,
        nativeNote: 'Cách trả lời hạ thấp tiêu chuẩn sản phẩm, không đạt chuẩn định vị cao cấp quốc tế.'
      }
    ]
  },
  {
    id: 3,
    category: 'b2bReflex',
    categoryLabel: 'Phản Xạ Xử Lý Phản Đối B2B (Objection Handling)',
    prompt: 'Đối tác phân phối quốc tế chê: "Your price is slightly higher than regional competitors." Bạn phản xạ ra sao để giữ vững biên lợi nhuận?',
    audioText: 'Your price is slightly higher than regional competitors.',
    context: 'Tình huống: Đàm phán giá xuất khẩu container sang thị trường Nhật Bản / Singapore.',
    options: [
      {
        text: 'While the initial cost is premium, Vikoda offers an irreplaceable value proposition: an authentic natural pH 9.0 mineral spring from 1957 that commands high customer loyalty and premium retail margins.',
        isCorrect: true,
        nativeNote: 'Chuẩn đàm phán đỉnh cao! Không giảm giá ngay mà chuyển trọng tâm từ "giá cả" sang "lợi nhuận bán lẻ cao & sự trung thành của người tiêu dùng".'
      },
      {
        text: 'Okay, we will give you a 20% discount immediately if you sign today.',
        isCorrect: false,
        nativeNote: 'Giảm giá vội vã làm mất uy tín thương hiệu và phá hủy chiến lược giá quốc tế.'
      },
      {
        text: 'Our price is fixed, take it or leave it.',
        isCorrect: false,
        nativeNote: 'Thái độ cứng nhắc làm gãy thương vụ ngoại giao.'
      }
    ]
  },
  {
    id: 4,
    category: 'executivePolish',
    categoryLabel: 'Ngoại Giao & Tác Phong Bản Ngữ (Executive Polish)',
    prompt: 'Khi đón tiếp Tổng Giám Đốc đối tác tại sảnh trụ sở Vikoda, câu mở đầu nào thể hiện trọn vẹn sự tự tin và nồng ấm?',
    audioText: 'Good morning Mr. Smith, it is an honor to welcome you to Vikoda.',
    context: 'Tình huống: Đón đoàn khách VIP quốc tế sang thăm nhà máy mỏ Đảnh Thạnh.',
    options: [
      {
        text: 'Good morning Mr. Henderson! On behalf of Vikoda leadership, it is an absolute pleasure to welcome you to our Dan Thanh pristine spring.',
        isCorrect: true,
        nativeNote: 'Chuẩn phong thái CEO/Đại sứ: Tươi tắn, bắt tay chắc chắn, nói bằng cấu trúc ngoại giao "On behalf of leadership".'
      },
      {
        text: 'Hello, welcome to Vietnam. You tired after flight?',
        isCorrect: false,
        nativeNote: 'Câu văn bồi, thiếu cấu trúc ngoại giao trang trọng trong tiếp đón doanh nghiệp.'
      },
      {
        text: 'Hey friend, let us go drink water together.',
        isCorrect: false,
        nativeNote: 'Quá suồng sã, không phù hợp với chuẩn mực B2B quốc tế.'
      }
    ]
  },
  {
    id: 5,
    category: 'pronunciation',
    categoryLabel: 'Ngữ Điệu Thuyết Trình Chốt Hợp Đồng (Pitch Cadence)',
    prompt: 'Khi đưa ra cam kết chất lượng cuối bài thuyết trình: "Together, let us bring natural vitality to global consumers", ngữ điệu bản ngữ nên biến chuyển như thế nào?',
    audioText: 'Together, let us bring natural vitality to global consumers.',
    context: 'Tình huống: Câu kết thúc phiên đàm phán hợp đồng xuất khẩu trước hội đồng đối tác.',
    options: [
      {
        text: 'Nhấn mạnh từ "Together" (hướng ánh mắt tự tin), ngân vang "natural vitality" và hạ giọng dứt khoát uy lực ở cuối câu "consumers".',
        isCorrect: true,
        nativeNote: 'Kỹ thuật Pitch Cadence của nhà hùng biện: Bắt đầu mạnh mẽ, truyền cảm hứng ở giữa và chốt hạ bằng âm vực dứt khoát thể hiện sự kiên định.'
      },
      {
        text: 'Đọc nhanh thật nhanh từ đầu đến cuối không cần ngắt nghỉ.',
        isCorrect: false,
        nativeNote: 'Nói quá nhanh khiến đối tác cảm thấy người nói thiếu tự tin hoặc đang học vẹt.'
      },
      {
        text: 'Lên giọng ở cuối câu như thể đang hỏi ý kiến xin xỏ.',
        isCorrect: false,
        nativeNote: 'Lên giọng ở cuối câu khẳng định (uptalk) thể hiện sự do dự, thiếu quyết đoán trong kinh doanh.'
      }
    ]
  },
  {
    id: 6,
    category: 'executivePolish',
    categoryLabel: 'Ngoại Giao Đàm Phán & Thành Ngữ Thương Trường (Boardroom Idioms)',
    prompt: 'Khi muốn đề nghị ưu đãi thêm chi phí marketing để thúc đẩy đối tác chốt hợp đồng nhanh hơn, câu nói bản ngữ thượng thừa nào hiệu quả nhất?',
    audioText: 'To sweeten the deal, we will subsidize your premier shelf display costs.',
    context: 'Tình huống: Đàm phán chốt hợp đồng phân phối độc quyền chuỗi siêu thị quốc tế.',
    options: [
      {
        text: 'To sweeten the deal, we are prepared to subsidize your premier shelf display costs for the launch quarter.',
        isCorrect: true,
        nativeNote: 'Tuyệt đỉnh! Dùng thành ngữ "sweeten the deal" và từ vựng "subsidize display costs" thể hiện sự hào phóng có tính toán của nhà ngoại giao chuyên nghiệp.'
      },
      {
        text: 'We give you cheap sugar and big discount now.',
        isCorrect: false,
        nativeNote: 'Dịch nghĩa đen sai lầm, hạ thấp giá trị thương hiệu và biến cuộc đàm phán thành bán tháo.'
      },
      {
        text: 'You must sign right now or we leave.',
        isCorrect: false,
        nativeNote: 'Tối hậu thư thô thiển phá vỡ mối quan hệ hợp tác lâu dài.'
      }
    ]
  }
];

interface PlacementTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveResult: (result: PlacementTestResult) => void;
}

export const PlacementTestModal: React.FC<PlacementTestModalProps> = ({
  isOpen,
  onClose,
  onSaveResult,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<PlacementTestResult | null>(null);

  if (!isOpen || typeof document === 'undefined') return null;

  const currentQ = PLACEMENT_QUESTIONS[currentIndex];

  const handlePlayAudio = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else if (currentQ.audioText) {
      setIsPlayingAudio(true);
      playSpeech(currentQ.audioText, 0.95, 'en-US', () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    playSound('click');
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = currentQ.options[idx].isCorrect;
    if (isCorrect) {
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    playSound('click');
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentIndex + 1 < PLACEMENT_QUESTIONS.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsPlayingAudio(false);
      stopSpeech();
    } else {
      // Calculate results
      stopSpeech();
      let correctCount = 0;
      let pronCount = 0;
      let pronCorrect = 0;
      let minCount = 0;
      let minCorrect = 0;
      let b2bCount = 0;
      let b2bCorrect = 0;
      let polishCount = 0;
      let polishCorrect = 0;

      PLACEMENT_QUESTIONS.forEach((q, qIdx) => {
        const chosen = newAnswers[qIdx];
        const isRight = q.options[chosen]?.isCorrect;
        if (isRight) correctCount++;

        if (q.category === 'pronunciation') {
          pronCount++;
          if (isRight) pronCorrect++;
        } else if (q.category === 'mineralFluency') {
          minCount++;
          if (isRight) minCorrect++;
        } else if (q.category === 'b2bReflex') {
          b2bCount++;
          if (isRight) b2bCorrect++;
        } else if (q.category === 'executivePolish') {
          polishCount++;
          if (isRight) polishCorrect++;
        }
      });

      let recLevel: CourseLevel = 'A1';
      let feedback = '';
      let nextSteps: string[] = [];

      if (correctCount >= 5) {
        recLevel = 'C2';
        feedback = 'Đẳng cấp Bậc Thầy Bản Ngữ! Bạn làm chủ các executive idioms, ngữ điệu pitching dứt khoát và phong thái ngoại giao thượng thừa.';
        nextSteps = [
          'Chinh phục Cửa C2: Thành ngữ thương trường & Lối nói boardroom bản ngữ',
          'Làm chủ công thức Harvard Feel-Felt-Found để đảo ngược mọi phản bác của đối tác',
          'Rèn luyện Incoterms CIF/FOB, LC at Sight và đàm phán hợp đồng độc quyền triệu đô',
          'Thiết lập kỷ lục ARENA Đấu Trường Phản Xạ >700 điểm'
        ];
      } else if (correctCount >= 3) {
        recLevel = 'B2-C1';
        feedback = 'Chuyên gia đàm phán sắc bén! Bạn nắm rất vững định vị khoáng kiềm Đảnh Thạnh và kỹ năng bẻ gãy phản đối giá.';
        nextSteps = [
          'Chinh phục Cửa C1: Báo giá CIF/FOB & Đàm phán thanh toán quốc tế',
          'Luyện kỹ năng đối kháng với đối tác khó tính trong Buyer Objections Battle',
          'Nâng điểm số ARENA Phản Xạ lên mốc kỷ lục >600 điểm'
        ];
      } else if (correctCount >= 1) {
        recLevel = 'A2-B1';
        feedback = 'Nền tảng vững chắc! Bạn nắm tốt khái niệm mỏ khoáng, cần rèn thêm ngữ điệu dứt khoát và kỹ năng xử lý phản đối giá.';
        nextSteps = [
          'Học Cửa B1: Giới thiệu chuyên sâu mỏ Đảnh Thạnh & Tour mỏ khoáng',
          'Luyện nói VikoVoice hàng ngày để nâng độ tương thích ngữ điệu bản ngữ lên >90%',
          'Hoàn thành các Side Quest về văn hóa danh thiếp và muối khoáng Bicarbonate'
        ];
      } else {
        recLevel = 'A1';
        feedback = 'Khởi đầu lý tưởng! Bạn sẽ nhanh chóng làm chủ 5 từ khóa cốt lõi và phong thái đón tiếp đối tác quốc tế đầy tự tin.';
        nextSteps = [
          'Bắt đầu ngay tại Cửa A1: Chào hỏi, đón đoàn khách & giới thiệu bản thân',
          'Nghe mẫu phát âm chuẩn giọng US Michael trước mỗi buổi làm việc',
          'Luyện tập phản xạ cơ bản với bài tập chọn từ và dịch câu thực chiến'
        ];
      }

      const finalResult: PlacementTestResult = {
        score: correctCount,
        totalQuestions: PLACEMENT_QUESTIONS.length,
        recommendedLevel: recLevel,
        skills: {
          pronunciation: pronCount > 0 ? Math.round((pronCorrect / pronCount) * 100) : 80,
          mineralFluency: minCount > 0 ? Math.round((minCorrect / minCount) * 100) : 80,
          b2bReflex: b2bCount > 0 ? Math.round((b2bCorrect / b2bCount) * 100) : 80,
          executivePolish: polishCount > 0 ? Math.round((polishCorrect / polishCount) * 100) : 80,
        },
        feedback,
        nextSteps
      };

      setTestResult(finalResult);
      playSound('celebrate');
    }
  };

  const handleApplyResult = () => {
    if (!testResult) return;
    playSound('click');
    onSaveResult(testResult);
    onClose();
  };

  const handleRetake = () => {
    playSound('click');
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setIsAnswered(false);
    setTestResult(null);
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 select-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          stopSpeech();
          onClose();
        }
      }}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-3xl p-5 sm:p-6 border-2 border-slate-200 shadow-2xl relative m-auto animate-in zoom-in-95 duration-150 flex flex-col"
        style={{
          maxHeight: 'calc(100dvh - 32px)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 leading-tight">
                Kiểm Tra Trình Độ & Định Tuyến Cá Nhân
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Khảo sát năng lực thực chiến Vikoda Global Ambassador
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content: Either Questions or Results */}
        {!testResult ? (
          <div className="py-3 space-y-4 flex-1">
            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                <span className="text-[#0070D1] uppercase tracking-wide">
                  {currentQ.categoryLabel}
                </span>
                <span>Câu {currentIndex + 1}/{PLACEMENT_QUESTIONS.length}</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#009FE3] h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / PLACEMENT_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Scenario Card */}
            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900 font-medium flex items-center justify-between gap-2">
              <span>{currentQ.context}</span>
              {currentQ.audioText && (
                <button
                  onClick={handlePlayAudio}
                  className={`p-2 rounded-xl border flex items-center gap-1 shrink-0 font-bold cursor-pointer transition-all ${
                    isPlayingAudio
                      ? 'bg-amber-400 text-slate-900 border-amber-500 animate-pulse'
                      : 'bg-white hover:bg-sky-100 text-[#0070D1] border-sky-300'
                  }`}
                  title="Nghe mẫu phát âm chuẩn bản ngữ"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="text-[11px]">{isPlayingAudio ? 'Dừng' : 'Nghe câu'}</span>
                </button>
              )}
            </div>

            {/* Prompt */}
            <div className="text-sm font-black text-slate-900 leading-snug">
              {currentQ.prompt}
            </div>

            {/* Options */}
            <div className="space-y-2 pt-1">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                let cardStyle = 'bg-white border-slate-200 hover:border-sky-300 hover:bg-slate-50 text-slate-800';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    cardStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isSelected) {
                    cardStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    cardStyle = 'opacity-50 border-slate-200';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full p-3 rounded-2xl border-2 text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer ${cardStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt.text}</span>
                    {isAnswered && (
                      opt.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      ) : null
                    )}
                  </button>
                );
              })}
            </div>

            {/* Native Coach Feedback Note */}
            {isAnswered && selectedOption !== null && (
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1 animate-in fade-in">
                <div className="font-black flex items-center gap-1.5 text-amber-800">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Chuyên gia giải thích ngữ điệu & phản xạ:</span>
                </div>
                <p className="font-medium leading-relaxed">
                  {currentQ.options[selectedOption].nativeNote}
                </p>
              </div>
            )}

            {/* Next Question CTA */}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-2xl btn-duo-green text-white font-black text-xs uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{currentIndex + 1 === PLACEMENT_QUESTIONS.length ? 'Xem Kết Quả & Lộ Trình' : 'Câu Tiếp Theo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          /* Result Summary Screen */
          <div className="py-4 space-y-4 flex-1">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-amber-100 border-4 border-amber-300 text-amber-600 flex items-center justify-center text-3xl mx-auto shadow-sm">
                🏆
              </div>
              <h4 className="text-lg font-black text-slate-900">
                Đã Phân Tích Xong Trình Độ Của Bạn!
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Kết quả khảo sát: <span className="font-bold text-[#0070D1]">{testResult.score}/{testResult.totalQuestions} câu chuẩn xác</span>
              </p>
            </div>

            {/* Recommended Level Card */}
            <div className="p-4 rounded-3xl bg-gradient-to-br from-sky-500 to-[#0070D1] text-white space-y-2 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-black bg-white/20 px-2.5 py-0.5 rounded-full">
                  Cấp Độ Đề Xuất Phù Hợp Nhất
                </span>
                <span className="text-sm font-black bg-amber-400 text-amber-950 px-2 py-0.5 rounded-xl shadow-xs">
                  {testResult.recommendedLevel}
                </span>
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                {testResult.feedback}
              </p>
            </div>

            {/* 4 Skill Radar Breakdown */}
            <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wide block">
                Đánh Giá Chi Tiết Theo 4 Nhóm Kỹ Năng:
              </span>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                    <span>🎙️ Phát âm & Ngữ điệu (Voice Pitch)</span>
                    <span className="text-[#0070D1] font-black">{testResult.skills.pronunciation}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#009FE3] h-full rounded-full" style={{ width: `${testResult.skills.pronunciation}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                    <span>💧 Am hiểu mỏ khoáng Đảnh Thạnh</span>
                    <span className="text-emerald-600 font-black">{testResult.skills.mineralFluency}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${testResult.skills.mineralFluency}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                    <span>💼 Phản xạ đàm phán B2B</span>
                    <span className="text-amber-600 font-black">{testResult.skills.b2bReflex}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: `${testResult.skills.b2bReflex}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                    <span>🤝 Tác phong & Nghi thức ngoại giao</span>
                    <span className="text-indigo-600 font-black">{testResult.skills.executivePolish}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${testResult.skills.executivePolish}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Recommendations */}
            <div className="space-y-2">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wide block">
                🎯 Kế Hoạch Hành Động Ngay Hôm Nay:
              </span>
              <div className="space-y-1.5">
                {testResult.nextSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 p-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-[#0070D1] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleApplyResult}
                className="w-full py-3 rounded-2xl btn-duo-green text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Check className="w-4 h-4" />
                <span>Áp Dụng Lộ Trình Cấp Độ {testResult.recommendedLevel} & Bắt Đầu Học</span>
              </button>

              <button
                onClick={handleRetake}
                className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-black text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm Lại Bài Test</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
