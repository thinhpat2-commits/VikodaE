import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { LiveCircularMicButton } from './LiveCircularMicButton';
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
  Target,
  Clock,
  Mic,
  MicOff,
  BookOpen,
  Headphones,
  PenTool,
  MessageSquare,
  AlertCircle,
  Award,
  Send
} from 'lucide-react';
import { 
  playSpeech, 
  stopSpeech, 
  startSpeechRecognition, 
  finishSpeechRecognition,
  isSpeechRecognitionSupported, 
  calculateSimilarity 
} from '../services/speechService';
import { playSound } from '../services/soundEffects';
import { CourseLevel } from '../data/curriculumData';

export interface PlacementTestResult {
  score: number;
  totalQuestions: number;
  recommendedLevel: CourseLevel;
  skills: {
    reading: number; // 0 - 100
    listening: number; // 0 - 100
    writing: number; // 0 - 100
    speaking: number; // 0 - 100
  };
  feedback: string;
  nextSteps: string[];
}

export type QuestionSection = 'reading_listening' | 'writing' | 'speaking';

export interface IntegratedQuestion {
  id: number;
  section: QuestionSection;
  sectionTitle: string;
  skillType: 'reading' | 'listening' | 'writing' | 'speaking';
  type: 'choice' | 'fill' | 'dictation' | 'reorder' | 'email_compose' | 'read_aloud' | 'situational_reflex';
  promptVi: string;
  englishContext?: string;
  audioPrompt?: string;
  targetAnswer?: string;
  options?: { text: string; isCorrect: boolean; explanation: string }[];
  scrambledWords?: string[];
  speakingTargetText?: string;
  minWords?: number;
  maxWords?: number;
  hint?: string;
}

// 8 Standardized Questions: Streamlined, diverse across 4 CEFR levels and 4 skills
const STANDARDIZED_8_QUESTIONS: IntegratedQuestion[] = [
  // ================= KỸ NĂNG 1: ĐỌC (READING) =================
  {
    id: 1,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc Hiểu Sản Phẩm (Reading - Cấp độ A1)',
    skillType: 'reading',
    type: 'choice',
    promptVi: 'Đọc thông báo sản phẩm và chọn đặc tính cốt lõi phân biệt nước khoáng Vikoda với nước lọc thông thường:',
    englishContext: 'Product Factsheet: "Vikoda is tapped from a deep natural underground aquifer at 220 meters depth in Đảnh Thạnh, bottled immediately at the source to preserve naturally occurring minerals and a pristine alkaline pH of 9.0 without chemical additives."',
    options: [
      {
        text: 'Nước khoáng kiềm tự nhiên pH 9.0 được đóng chai trực tiếp tại nguồn 220m không qua xử lý hóa chất',
        isCorrect: true,
        explanation: 'Chính xác! Nêu bật cả 3 yếu tố: độ kiềm tự nhiên pH 9.0, độ sâu 220m, và đóng chai tại nguồn.'
      },
      {
        text: 'Nước tinh khiết được bổ sung bột khoáng nhân tạo bằng máy lọc công nghiệp',
        isCorrect: false,
        explanation: 'Sai! Vikoda là khoáng tự nhiên nguyên bản, không dùng phụ gia nhân tạo.'
      },
      {
        text: 'Nước đun sôi để nguội có ga nhẹ',
        isCorrect: false,
        explanation: 'Không đúng với định vị nước khoáng kiềm thiên nhiên đóng chai tại nguồn.'
      }
    ]
  },
  {
    id: 2,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc & Thuật Ngữ (Reading - Cấp độ A2)',
    skillType: 'reading',
    type: 'fill',
    promptVi: 'Điền thuật ngữ khoa học vào chỗ trống trong báo cáo kiểm nghiệm chất lượng nước khoáng Đảnh Thạnh:',
    englishContext: 'The natural __________ in Vikoda helps neutralize excess stomach acidity, promoting optimal digestive health.',
    options: [
      {
        text: 'bicarbonate',
        isCorrect: true,
        explanation: 'Chính xác! Bicarbonate (HCO3-) tự nhiên trong mỏ Đảnh Thạnh trung hòa axit dư thừa dạ dày.'
      },
      {
        text: 'carbohydrate',
        isCorrect: false,
        explanation: 'Sai! Carbohydrate là chất bột đường.'
      },
      {
        text: 'chlorine',
        isCorrect: false,
        explanation: 'Sai! Chlorine là hóa chất tẩy khuẩn, không phải khoáng chất có lợi.'
      }
    ]
  },

  // ================= KỸ NĂNG 2: NGHE (LISTENING) =================
  {
    id: 3,
    section: 'reading_listening',
    sectionTitle: 'Phần 2: Nghe Hiểu (Listening - Cấp độ A2)',
    skillType: 'listening',
    type: 'choice',
    promptVi: 'Bấm nghe thông điệp âm thanh từ Giám đốc nhà máy Đảnh Thạnh và chọn nhiệt độ vòi phun tại nguồn:',
    audioPrompt: 'Welcome to the natural hot spring of Danh Thanh. Our mineral water emerges naturally at seventy-two degrees Celsius, completely sterile and ready for bottling.',
    options: [
      {
        text: '72°C (Seventy-two degrees Celsius) vô trùng tự nhiên tại nguồn',
        isCorrect: true,
        explanation: 'Chính xác! Giám đốc phát biểu: "emerges naturally at seventy-two degrees Celsius".'
      },
      {
        text: '20°C (Twenty degrees Celsius) mát lạnh mùa đông',
        isCorrect: false,
        explanation: 'Sai! Nhiệt độ nguồn nước ngầm Đảnh Thạnh tự nhiên đạt 72°C.'
      },
      {
        text: '100°C nước sôi sùng sục',
        isCorrect: false,
        explanation: 'Sai! Nguồn không phải 100°C.'
      }
    ]
  },
  {
    id: 4,
    section: 'reading_listening',
    sectionTitle: 'Phần 2: Chép Chính Tả (Listening & Dictation - Cấp độ B1)',
    skillType: 'listening',
    type: 'dictation',
    promptVi: 'Nghe câu khẳng định tiêu chuẩn xuất khẩu quốc tế và gõ lại 2 từ còn thiếu vào ô trống:',
    audioPrompt: 'We maintain strict quality control standards for all international shipments.',
    englishContext: 'We maintain strict quality __________ standards for all international __________.',
    targetAnswer: 'control shipments',
    hint: 'Gõ 2 từ còn thiếu cách nhau dấu cách: control shipments'
  },

  // ================= KỸ NĂNG 3: VIẾT (WRITING) =================
  {
    id: 5,
    section: 'writing',
    sectionTitle: 'Phần 3: Ghép Câu Viết (Writing - Cấp độ B1)',
    skillType: 'writing',
    type: 'reorder',
    promptVi: 'Sắp xếp các cụm từ xáo trộn thành câu đàm phán lịch giao hàng chuẩn thương mại quốc tế:',
    englishContext: 'Câu hoàn chỉnh có nghĩa: "Chúng tôi có thể đẩy nhanh tiến độ giao hàng nếu quý khách xác nhận đơn hàng vào tuần này."',
    targetAnswer: 'We can expedite the delivery schedule if you confirm the order this week.',
    scrambledWords: [
      'We can expedite',
      'the delivery schedule',
      'if you confirm',
      'the order',
      'this week.'
    ]
  },
  {
    id: 6,
    section: 'writing',
    sectionTitle: 'Phần 3: Viết Email Thương Mại (Writing - Cấp độ B1/B2)',
    skillType: 'writing',
    type: 'email_compose',
    promptVi: 'Viết email phản hồi ngắn (20 - 45 từ) cho tình huống thực tế sau:',
    englishContext: 'Tình huống: Đối tác VIP thông báo sẽ đến thăm nhà máy mỏ Đảnh Thạnh vào thứ Hai tuần tới. Viết email ngắn (20-45 từ) gồm 3 ý: (1) Chào đón nồng nhiệt, (2) Xe công ty sẽ đón tại sân bay Cam Ranh, (3) Hẹn gặp tại nhà máy.',
    minWords: 20,
    maxWords: 45,
    hint: 'Mẫu: Dear Mr. Smith, We look forward to welcoming you to Vikoda next Monday. Our company car will pick you up at Cam Ranh Airport. See you soon!'
  },

  // ================= KỸ NĂNG 4: NÓI (SPEAKING) =================
  {
    id: 7,
    section: 'speaking',
    sectionTitle: 'Phần 4: Luyện Nói Phát Âm Chuẩn (Speaking - Cấp độ B2)',
    skillType: 'speaking',
    type: 'read_aloud',
    promptVi: 'Bấm Micro và đọc to đoạn giới thiệu đặc tính sản phẩm (AI chấm độ trôi chảy & trọng âm):',
    speakingTargetText: 'Welcome to Vikoda. Our water is naturally alkaline at pH nine point oh, bottled directly at the source.',
    hint: 'Lưu ý đọc: "naturally alkaline", pH 9.0 đọc là "nine point oh".'
  },
  {
    id: 8,
    section: 'speaking',
    sectionTitle: 'Phần 4: Phản Xạ Đàm Phán Tình Huống (Speaking - Cấp độ C1)',
    skillType: 'speaking',
    type: 'situational_reflex',
    promptVi: 'Tình huống đối tác hỏi: "Can your factory supply five containers per month?". Hãy bấm Mic khẳng định năng lực nhà máy đáp ứng xuất sắc:',
    speakingTargetText: 'Yes, our modern automated bottling line can easily accommodate five containers per month with consistent high quality.',
    hint: 'Bạn có thể nói: "Yes, our factory has ample capacity to supply five containers per month without any delay."'
  }
];

interface PlacementTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveResult: (result: PlacementTestResult) => void;
  speechRate?: number;
}

export const PlacementTestModal: React.FC<PlacementTestModalProps> = ({
  isOpen,
  onClose,
  onSaveResult,
  speechRate = 1.0,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes countdown (600s)
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<PlacementTestResult | null>(null);

  // User input states per question type
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [dictationInput, setDictationInput] = useState<string>('');
  const [reorderedList, setReorderedList] = useState<string[]>([]);
  const [emailText, setEmailText] = useState<string>('');
  const [spokenText, setSpokenText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [speechScore, setSpeechScore] = useState<number | null>(null);

  // Store scores per question (0 - 100)
  const [questionScores, setQuestionScores] = useState<Record<number, number>>({});
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState<boolean>(false);

  // 10-minute timer
  useEffect(() => {
    if (!isOpen || testResult) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, testResult]);

  // Sync state when moving to a new question
  useEffect(() => {
    const q = STANDARDIZED_8_QUESTIONS[currentIndex];
    setSelectedOption(null);
    setDictationInput('');
    setEmailText('');
    setSpokenText('');
    setIsRecording(false);
    setSpeechScore(null);
    setIsAnswerConfirmed(false);

    if (q && q.type === 'reorder' && q.scrambledWords) {
      setReorderedList([...q.scrambledWords].sort(() => 0.5 - Math.random()));
    } else {
      setReorderedList([]);
    }
  }, [currentIndex]);

  const currentQ = STANDARDIZED_8_QUESTIONS[currentIndex] || STANDARDIZED_8_QUESTIONS[0];

  // Audio playback handler
  const handlePlayAudioPrompt = () => {
    if (!currentQ.audioPrompt) return;
    setIsPlayingAudio(true);
    playSpeech(currentQ.audioPrompt, speechRate, 'en-US');
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 4500);
  };

  // Real Speech Recognition handler
  const handleToggleSpeech = () => {
    if (isRecording) {
      finishSpeechRecognition();
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      alert('Trình duyệt chưa hỗ trợ Web Speech API. Vui lòng sử dụng Google Chrome hoặc Edge để luyện nói!');
      return;
    }

    playSound('click');
    setIsRecording(true);
    setSpokenText('Đang mở micro... Hãy nói to rõ ràng!');

    startSpeechRecognition(
      (transcript) => {
        setSpokenText(transcript);
        setIsRecording(false);

        const target = currentQ.speakingTargetText || '';
        const similarity = calculateSimilarity(target, transcript);
        setSpeechScore(similarity);
        playSound(similarity >= 60 ? 'correct' : 'click');
      },
      () => {
        setIsRecording(false);
      },
      (errorMsg) => {
        setSpokenText(`⚠️ ${errorMsg}`);
        setIsRecording(false);
      },
      (interim) => {
        setSpokenText(`🎙️ Đang nghe: "${interim}"`);
      },
      'en-US'
    );
  };

  const wordCount = emailText.trim().split(/\s+/).filter((w) => w.length > 0).length;

  // Confirm current answer and compute question score
  const handleConfirmAnswer = () => {
    playSound('click');
    let score = 0;

    if (currentQ.type === 'choice' || currentQ.type === 'fill') {
      if (selectedOption !== null && currentQ.options) {
        score = currentQ.options[selectedOption].isCorrect ? 100 : 0;
      }
    } else if (currentQ.type === 'dictation') {
      const cleanTarget = (currentQ.targetAnswer || '').toLowerCase().replace(/[^\w\s]/g, '').trim();
      const cleanInput = dictationInput.toLowerCase().replace(/[^\w\s]/g, '').trim();
      score = calculateSimilarity(cleanTarget, cleanInput);
    } else if (currentQ.type === 'reorder') {
      const joined = reorderedList.join(' ').toLowerCase().replace(/[^\w\s]/g, '').trim();
      const target = (currentQ.targetAnswer || '').toLowerCase().replace(/[^\w\s]/g, '').trim();
      score = joined === target ? 100 : calculateSimilarity(target, joined);
    } else if (currentQ.type === 'email_compose') {
      const hasGreeting = /dear|hi|hello/i.test(emailText);
      const hasClosing = /regards|sincerely|thanks|best/i.test(emailText);
      let emailScore = 50;
      if (wordCount >= (currentQ.minWords || 20) && wordCount <= (currentQ.maxWords || 45)) emailScore += 30;
      if (hasGreeting && hasClosing) emailScore += 20;
      score = Math.min(100, emailScore);
    } else if (currentQ.type === 'read_aloud' || currentQ.type === 'situational_reflex') {
      score = speechScore !== null ? speechScore : 65;
    }

    setQuestionScores((prev) => ({
      ...prev,
      [currentQ.id]: score,
    }));
    setIsAnswerConfirmed(true);
  };

  // Next Question Handler
  const handleNextQuestion = () => {
    playSound('click');
    stopSpeech();
    if (currentIndex < STANDARDIZED_8_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmitTest();
    }
  };

  // Compute final 4-skill evaluation and recommended level
  const handleSubmitTest = () => {
    playSound('celebrate');

    // Aggregate by 4 skills (2 questions per skill)
    const readingScores = [questionScores[1] || 0, questionScores[2] || 0];
    const listeningScores = [questionScores[3] || 0, questionScores[4] || 0];
    const writingScores = [questionScores[5] || 0, questionScores[6] || 0];
    const speakingScores = [questionScores[7] || 0, questionScores[8] || 0];

    const avg = (arr: number[]) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

    const reading = avg(readingScores);
    const listening = avg(listeningScores);
    const writing = avg(writingScores);
    const speaking = avg(speakingScores);

    const overallScore = Math.round((reading * 0.25) + (listening * 0.25) + (writing * 0.25) + (speaking * 0.25));

    let recommendedLevel: CourseLevel = 'A1';
    let feedback = '';
    let nextSteps: string[] = [];

    if (overallScore >= 85) {
      recommendedLevel = 'C2';
      feedback = 'Xuất sắc! Bạn sở hữu phản xạ thương mại quốc tế sắc bén, phát âm chuẩn xác và nắm vững nghệ thuật đàm phán cao cấp.';
      nextSteps = [
        'Mở khóa Cấp độ C2: Bản Ngữ & Đàm Phán Cấp CEO',
        'Luyện thành ngữ thương trường và ứng biến phản biện với buyer quốc tế',
        'Nhận Chứng Nhận Đại Sứ Toàn Cầu Vikoda'
      ];
    } else if (overallScore >= 70) {
      recommendedLevel = 'B2-C1';
      feedback = 'Rất tốt! Khả năng đọc hiểu hợp đồng xuất khẩu và đàm phán CIF/FOB của bạn rất vững vàng.';
      nextSteps = [
        'Mở khóa Cấp độ C1: Xuất Khẩu & Đàm Phán B2B Quốc Tế',
        'Thực chiến giả lập 12 Tình Huống Buyer Ép Giá trong Hộp Đấu Trí',
        'Luyện kỹ năng chốt L/C và bảo hiểm hàng hải quốc tế'
      ];
    } else if (overallScore >= 50) {
      recommendedLevel = 'A2-B1';
      feedback = 'Khá tốt! Bạn có nền tảng từ vựng cơ bản. Cần củng cố 5 đặc tính nước khoáng kiềm pH 9.0 và luyện phản xạ giới thiệu sản phẩm tại nhà máy Đảnh Thạnh.';
      nextSteps = [
        'Mở khóa Cấp độ B1: Mỏ Khoáng & Thuyết Trình Nguồn Đảnh Thạnh',
        'Học thuộc bài thuyết trình tour mỏ 220m bằng tiếng Anh',
        'Thực hành Shadowing chế độ Rảnh Tay khi di chuyển'
      ];
    } else {
      recommendedLevel = 'A1';
      feedback = 'Bạn đã hoàn thành tốt bài kiểm tra định vị ban đầu! Hãy bắt đầu từ Cấp độ A1 để chuẩn hóa phát âm từng từ khóa thương hiệu Vikoda và làm quen các mẫu câu văn phòng.';
      nextSteps = [
        'Mở khóa Cấp độ A1: Nhập Môn & Giao Tiếp Văn Phòng Cơ Bản',
        'Luyện phát âm chuẩn "Naturally Alkaline" và "pH nine point oh"',
        'Tham gia đấu trường Endless Drill mỗi ngày'
      ];
    }

    const result: PlacementTestResult = {
      score: overallScore,
      totalQuestions: 8,
      recommendedLevel,
      skills: {
        reading,
        listening,
        writing,
        speaking,
      },
      feedback,
      nextSteps,
    };

    setTestResult(result);
    onSaveResult(result);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 select-none animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-2xl rounded-3xl border border-sky-100 shadow-2xl overflow-hidden flex flex-col max-h-[94vh] my-auto">
        
        {testResult ? (
          /* ================= RESULT SCREEN ================= */
          <div className="p-6 md:p-8 space-y-6 overflow-y-auto text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-400 text-slate-950 px-3 py-0.5 rounded-full inline-block">
                KẾT QUẢ ĐÁNH GIÁ 4 KỸ NĂNG CHUẨN QUỐC TẾ
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Cấp Độ Khuyến Nghị: {testResult.recommendedLevel}
              </h2>
              <p className="text-xs md:text-sm text-slate-500 font-medium max-w-md mx-auto">
                {testResult.feedback}
              </p>
            </div>

            {/* TOEIC & Cambridge Equivalent Banner */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                <span className="text-[10px] uppercase font-black text-amber-700">Quy Đổi Chuẩn TOEIC</span>
                <div className="text-base md:text-lg font-black text-amber-900 mt-0.5">
                  {testResult.recommendedLevel === 'A1' ? '250 - 400 TOEIC' :
                   testResult.recommendedLevel === 'A2-B1' ? '450 - 650 TOEIC' :
                   testResult.recommendedLevel === 'B2-C1' ? '700 - 850 TOEIC' : '900+ TOEIC'}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-center">
                <span className="text-[10px] uppercase font-black text-[#005A9C]">Cambridge Business (BEC)</span>
                <div className="text-base md:text-lg font-black text-[#0072CE] mt-0.5">
                  {testResult.recommendedLevel === 'A1' ? 'A2 Key (KET)' :
                   testResult.recommendedLevel === 'A2-B1' ? 'B1 Business Preliminary' :
                   testResult.recommendedLevel === 'B2-C1' ? 'B2 Business Vantage' : 'C1 Business Higher'}
                </div>
              </div>
            </div>

            {/* 4 Skills Radar Bars */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-left">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider text-center mb-2">
                Bảng Điểm Năng Lực 4 Kỹ Năng
              </h4>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-sky-600" /> Đọc hiểu (Reading)</span>
                  <span className="text-sky-700 font-black">{testResult.skills.reading}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full transition-all duration-500" style={{ width: `${testResult.skills.reading}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span className="flex items-center gap-1.5"><Headphones className="w-3.5 h-3.5 text-indigo-600" /> Nghe hiểu (Listening)</span>
                  <span className="text-indigo-700 font-black">{testResult.skills.listening}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${testResult.skills.listening}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span className="flex items-center gap-1.5"><PenTool className="w-3.5 h-3.5 text-amber-600" /> Viết thương mại (Writing)</span>
                  <span className="text-amber-700 font-black">{testResult.skills.writing}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${testResult.skills.writing}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span className="flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> Nói & Phản xạ (Speaking)</span>
                  <span className="text-emerald-700 font-black">{testResult.skills.speaking}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${testResult.skills.speaking}%` }} />
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0070D1] to-[#009FE3] hover:from-[#005bb5] hover:to-[#0070D1] text-white font-black text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Áp Dụng Lộ Trình Này & Bắt Đầu Học Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* ================= ACTIVE TEST SCREEN ================= */
          <>
            {/* Header: Progress, 10:00 Countdown Timer & Close */}
            <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-md bg-sky-500 text-white font-black text-xs">
                  Câu {currentQ.id} / 8
                </span>
                <span className="text-xs text-sky-200 font-bold hidden sm:inline">
                  {currentQ.sectionTitle}
                </span>
              </div>

              {/* 10-Minute Countdown Clock */}
              <div className="flex items-center space-x-3">
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl font-mono text-xs font-black border ${
                  timeLeft <= 180 
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse'
                    : 'bg-slate-800 text-amber-300 border-slate-700'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTime(timeLeft)}</span>
                </div>

                <button
                  onClick={() => {
                    playSound('click');
                    stopSpeech();
                    onClose();
                  }}
                  className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Question Body */}
            <div className="p-4 md:p-6 overflow-y-auto space-y-4 flex-1">
              <div className="space-y-2">
                <h3 className="text-sm md:text-base font-black text-slate-900 leading-snug">
                  {currentQ.promptVi}
                </h3>

                {currentQ.englishContext && (
                  <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs sm:text-sm font-medium text-slate-800 italic leading-relaxed">
                    {currentQ.englishContext}
                  </div>
                )}
              </div>

              {/* Audio Prompt button for Listening questions */}
              {currentQ.audioPrompt && (
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900">
                    🎧 Bấm để nghe phát âm mẫu từ chuyên gia:
                  </span>
                  <button
                    type="button"
                    onClick={handlePlayAudioPrompt}
                    className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all ${
                      isPlayingAudio ? 'bg-amber-600 text-white animate-pulse' : 'bg-white text-amber-700 border border-amber-300'
                    }`}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isPlayingAudio ? 'Đang phát...' : 'Phát âm thanh'}</span>
                  </button>
                </div>
              )}

              {/* 1. Multiple Choice & Fill-in-blank */}
              {(currentQ.type === 'choice' || currentQ.type === 'fill') && currentQ.options && (
                <div className="space-y-2">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    let style = 'bg-white border-2 border-slate-200 hover:border-sky-300 text-slate-800';

                    if (isAnswerConfirmed) {
                      if (opt.isCorrect) {
                        style = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold';
                      } else if (isSelected) {
                        style = 'bg-rose-50 border-2 border-rose-500 text-rose-950 font-medium';
                      } else {
                        style = 'opacity-40 border-slate-200';
                      }
                    } else if (isSelected) {
                      style = 'bg-sky-50 border-2 border-[#009FE3] text-[#0070D1] font-bold shadow-xs';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswerConfirmed}
                        onClick={() => {
                          playSound('click');
                          setSelectedOption(idx);
                        }}
                        className={`w-full text-left p-3.5 rounded-2xl text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${style}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 2. Dictation Input */}
              {currentQ.type === 'dictation' && (
                <div className="space-y-2">
                  <input
                    type="text"
                    disabled={isAnswerConfirmed}
                    value={dictationInput}
                    onChange={(e) => setDictationInput(e.target.value)}
                    placeholder="Gõ từ còn thiếu vào đây (ví dụ: control shipments)..."
                    className="w-full p-3.5 rounded-2xl border-2 border-slate-300 focus:border-[#009FE3] text-sm font-bold text-slate-900 outline-hidden bg-white"
                  />
                  {currentQ.hint && (
                    <p className="text-[11px] text-slate-500 italic">
                      💡 {currentQ.hint}
                    </p>
                  )}
                </div>
              )}

              {/* 3. Reorder scrambled words */}
              {currentQ.type === 'reorder' && (
                <div className="space-y-3">
                  <div className="p-3.5 min-h-[50px] rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50/40 flex flex-wrap gap-2 items-center">
                    {reorderedList.map((chunk, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-xl bg-sky-500 text-white text-xs font-bold shadow-2xs">
                        {chunk}
                      </span>
                    ))}
                  </div>

                  {!isAnswerConfirmed && (
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {reorderedList.map((chunk, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            playSound('click');
                            // Move chunk left on click
                            const next = [...reorderedList];
                            if (idx > 0) {
                              [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
                              setReorderedList(next);
                            }
                          }}
                          className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-300 hover:border-sky-400 text-slate-700 text-xs font-bold cursor-pointer active:scale-95"
                          title="Bấm để di chuyển lên trước"
                        >
                          ← {chunk}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 4. Email Compose */}
              {currentQ.type === 'email_compose' && (
                <div className="space-y-2">
                  <textarea
                    rows={4}
                    disabled={isAnswerConfirmed}
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                    placeholder="Dear Mr. Smith, We look forward to welcoming you to Vikoda..."
                    className="w-full p-3.5 rounded-2xl border-2 border-slate-300 focus:border-[#009FE3] text-xs sm:text-sm font-medium text-slate-900 outline-hidden bg-white resize-none"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                    <span>Số từ đã viết: {wordCount} từ</span>
                    <span>Yêu cầu: {currentQ.minWords} - {currentQ.maxWords} từ</span>
                  </div>
                  {currentQ.hint && (
                    <p className="text-[11px] text-slate-500 italic">
                      💡 {currentQ.hint}
                    </p>
                  )}
                </div>
              )}

              {/* 5. Speaking Read Aloud & Situational Reflex */}
              {(currentQ.type === 'read_aloud' || currentQ.type === 'situational_reflex') && (
                <div className="space-y-3 text-center">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800">
                    "{currentQ.speakingTargetText}"
                  </div>

                  <div className="flex flex-col items-center justify-center py-2">
                    <LiveCircularMicButton
                      isRecording={isRecording}
                      onClick={handleToggleSpeech}
                      size="md"
                    />
                    <span className="text-[11px] text-slate-500 font-bold mt-1">
                      {isRecording ? 'Đang lắng nghe... Hãy nói ngay (Nói xong tự chấm)!' : 'Bấm micro và đọc câu tiếng Anh trên'}
                    </span>

                    {speechScore !== null && (
                      <div className="mt-2 text-xs font-black text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        <Check className="w-3.5 h-3.5" />
                        <span>AI Chấm: {speechScore}/100 Điểm</span>
                      </div>
                    )}

                    {/* Quiet pass option */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSpeechScore(null);
                          setSpokenText('🤫 Đã bỏ qua do ở nơi cần giữ im lặng (Chưa chấm câu này).');
                          setIsAnswerConfirmed(true);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 text-[11px] font-bold border border-slate-300 transition-all cursor-pointer shadow-2xs active:scale-95"
                        title="Dành cho nhân viên đang ở văn phòng cần giữ im lặng"
                      >
                        <span>🤫 Tôi không tiện nói lúc này (Bỏ qua câu nói)</span>
                      </button>
                    </div>

                    {/* Override low score pass */}
                    {speechScore !== null && speechScore < 50 && (
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAnswerConfirmed(true);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs cursor-pointer shadow-xs"
                        >
                          Bỏ qua câu này & Sang câu tiếp
                        </button>
                      </div>
                    )}
                  </div>

                  {spokenText && (
                    <div className="p-2.5 rounded-xl bg-slate-100 text-xs text-slate-700 font-medium">
                      Lời bạn vừa nói: <span className="italic font-bold">"{spokenText}"</span>
                    </div>
                  )}

                  {currentQ.hint && (
                    <p className="text-[11px] text-slate-500 italic">
                      💡 {currentQ.hint}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Footer Navigation */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <span className="text-[11px] font-bold text-slate-500">
                Kỹ năng: {currentQ.skillType.toUpperCase()}
              </span>

              {!isAnswerConfirmed ? (
                <button
                  type="button"
                  onClick={handleConfirmAnswer}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs cursor-pointer shadow-sm flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Xác Nhận Câu Này</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 rounded-xl bg-[#0070D1] hover:bg-[#005bb5] text-white font-black text-xs cursor-pointer shadow-md flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <span>{currentIndex === STANDARDIZED_8_QUESTIONS.length - 1 ? 'Nộp Bài & Xem Đánh Giá' : 'Sang Câu Tiếp Theo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
