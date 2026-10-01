import React, { useState, useEffect, useRef } from 'react';
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
import { playSpeech, stopSpeech, startSpeechRecognition, isSpeechRecognitionSupported, calculateSimilarity } from '../services/speechService';
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
  audioPrompt?: string; // audio to play
  targetAnswer?: string; // for dictation, fill, reorder
  options?: { text: string; isCorrect: boolean; explanation: string }[];
  scrambledWords?: string[]; // for reorder
  speakingTargetText?: string; // for read_aloud
  minWords?: number; // for email_compose
  maxWords?: number;
  hint?: string;
}

const INTEGRATED_15_QUESTIONS: IntegratedQuestion[] = [
  // ================= PHẦN 1: ĐỌC - NGHE (8 CÂU) =================
  {
    id: 1,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
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
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
    skillType: 'reading',
    type: 'choice',
    promptVi: 'Đọc thông báo xuất khẩu và chọn thời hạn chót nộp chứng từ thông quan (Customs Clearance):',
    englishContext: 'Internal Logistics Memo: "For all FOB Cat Lai port shipments departing on Friday, all shipping documents including Bill of Lading and Certificate of Origin must be finalized no later than 5:00 PM this Wednesday."',
    options: [
      {
        text: 'Trước 17:00 chiều Thứ Tư tuần này',
        isCorrect: true,
        explanation: 'Chính xác! "no later than 5:00 PM this Wednesday".'
      },
      {
        text: 'Sáng Thứ Sáu ngay trước giờ tàu rời cảng',
        isCorrect: false,
        explanation: 'Sai! Thứ Sáu là ngày tàu chạy (departing on Friday).'
      },
      {
        text: 'Bất kỳ lúc nào trước khi hàng đến cảng đích',
        isCorrect: false,
        explanation: 'Sai! Không nộp kịp thứ tư sẽ bị trễ chuyến tàu.'
      }
    ]
  },
  {
    id: 3,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
    skillType: 'reading',
    type: 'fill',
    promptVi: 'Điền từ thích hợp vào chỗ trống trong câu đàm phán hợp đồng phân phối độc quyền:',
    englishContext: 'We are pleased to grant your company the __________ distribution rights for Vikoda products in Singapore, subject to meeting the quarterly sales volume.',
    options: [
      {
        text: 'exclusive',
        isCorrect: true,
        explanation: 'Chính xác! "exclusive distribution rights" là quyền phân phối độc quyền.'
      },
      {
        text: 'expensive',
        isCorrect: false,
        explanation: 'Sai nghĩa! "expensive" là đắt đỏ.'
      },
      {
        text: 'excessive',
        isCorrect: false,
        explanation: 'Sai nghĩa! "excessive" là quá mức/thái quá.'
      }
    ]
  },
  {
    id: 4,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
    skillType: 'listening',
    type: 'choice',
    promptVi: 'Bấm nghe đoạn đối thoại công sở và cho biết đối tác đề xuất gì về điều kiện thanh toán:',
    audioPrompt: 'Could we proceed with thirty percent advance deposit and the remaining seventy percent against the bill of lading copy?',
    englishContext: '🎧 Bấm nút Loa để nghe câu đề xuất từ đại diện đối tác.',
    options: [
      {
        text: 'Đặt cọc 30% trước, 70% còn lại thanh toán khi xuất trình bản sao Vận đơn (B/L)',
        isCorrect: true,
        explanation: 'Chính xác! "30% advance deposit and the remaining 70% against the bill of lading copy".'
      },
      {
        text: 'Thanh toán toàn bộ 100% sau khi nhận hàng tại kho',
        isCorrect: false,
        explanation: 'Sai! Đối tác đồng ý đặt cọc trước 30%.'
      },
      {
        text: 'Yêu cầu mở thư tín dụng L/C trả chậm 180 ngày',
        isCorrect: false,
        explanation: 'Không được nhắc đến trong đoạn ghi âm.'
      }
    ]
  },
  {
    id: 5,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
    skillType: 'listening',
    type: 'dictation',
    promptVi: 'Chép chính tả (Dictation): Nghe câu thông điệp xuất khẩu và gõ lại chính xác các từ còn thiếu:',
    audioPrompt: 'Vikoda natural alkaline mineral water is bottled directly at the source.',
    englishContext: 'Vikoda natural alkaline mineral water is __________ __________ at the __________.',
    targetAnswer: 'bottled directly source',
    hint: 'Gõ 3 từ còn thiếu cách nhau bằng dấu cách (VD: bottled directly source)'
  },
  {
    id: 6,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
    skillType: 'reading',
    type: 'choice',
    promptVi: 'Đọc email yêu cầu chào giá CIF của đối tác Nhật Bản và xác định cảng đích (Destination Port):',
    englishContext: 'Email from Tokyo Buyer: "Dear Vikoda Export Team, Please provide your best CIF quotation for two 40-foot containers of 500ml glass bottles delivered to Yokohama Port by next month."',
    options: [
      {
        text: 'Cảng Yokohama (Yokohama Port, Nhật Bản)',
        isCorrect: true,
        explanation: 'Chính xác! Email nêu rõ: "delivered to Yokohama Port".'
      },
      {
        text: 'Cảng Tokyo',
        isCorrect: false,
        explanation: 'Sai! Người gửi ở Tokyo nhưng chỉ định giao tới cảng Yokohama.'
      },
      {
        text: 'Cảng Cát Lái (TP.HCM)',
        isCorrect: false,
        explanation: 'Sai! Cát Lái là cảng đi (Origin Port), không phải cảng đích.'
      }
    ]
  },
  {
    id: 7,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
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
  {
    id: 8,
    section: 'reading_listening',
    sectionTitle: 'Phần 1: Đọc - Nghe (Reading & Listening)',
    skillType: 'listening',
    type: 'dictation',
    promptVi: 'Chép chính tả (Dictation): Nghe câu khẳng định chất lượng từ Giám đốc nhà máy và gõ lại các từ còn thiếu:',
    audioPrompt: 'We maintain strict quality control standards for all international shipments.',
    englishContext: 'We maintain strict quality __________ standards for all international __________.',
    targetAnswer: 'control shipments',
    hint: 'Gõ 2 từ còn thiếu cách nhau dấu cách (VD: control shipments)'
  },

  // ================= PHẦN 2: VIẾT (3 CÂU) =================
  {
    id: 9,
    section: 'writing',
    sectionTitle: 'Phần 2: Viết (Writing)',
    skillType: 'writing',
    type: 'reorder',
    promptVi: 'Sắp xếp các cụm từ xáo trộn thành câu đàm phán lịch giao hàng chuẩn ngữ pháp thương mại:',
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
    id: 10,
    section: 'writing',
    sectionTitle: 'Phần 2: Viết (Writing)',
    skillType: 'writing',
    type: 'reorder',
    promptVi: 'Sắp xếp các cụm từ thành câu giải thích bảo chứng chất lượng nước khoáng kiềm Vikoda:',
    englishContext: 'Câu hoàn chỉnh có nghĩa: "Nước của chúng tôi có tính kiềm tự nhiên và không qua bất kỳ xử lý hóa chất nhân tạo nào."',
    targetAnswer: 'Our water is naturally alkaline without any artificial chemical treatment.',
    scrambledWords: [
      'Our water is',
      'naturally alkaline',
      'without any',
      'artificial chemical',
      'treatment.'
    ]
  },
  {
    id: 11,
    section: 'writing',
    sectionTitle: 'Phần 2: Viết (Writing)',
    skillType: 'writing',
    type: 'email_compose',
    promptVi: 'Viết email phản hồi ngắn (30 - 40 từ) xử lý tình huống thực tế sau:',
    englishContext: 'Tình huống: Đối tác gửi email thông báo sẽ đến thăm mỏ khoáng Đảnh Thạnh vào thứ Hai tuần tới. Hãy viết email ngắn (30-40 từ) gồm 3 ý: (1) Chào đón nồng nhiệt, (2) Xác nhận xe công ty sẽ đón họ tại sân bay Cam Ranh, (3) Hẹn gặp tại nhà máy.',
    minWords: 25,
    maxWords: 45,
    hint: 'Gợi ý mẫu câu: Dear Mr. Smith, We look forward to welcoming you to Vikoda next Monday. Our company car will pick you up at Cam Ranh Airport. See you soon!'
  },

  // ================= PHẦN 3: NÓI (4 CÂU) =================
  {
    id: 12,
    section: 'speaking',
    sectionTitle: 'Phần 3: Nói (Speaking - AI Chấm Phát Âm)',
    skillType: 'speaking',
    type: 'read_aloud',
    promptVi: 'Đọc to đoạn giới thiệu mở đầu (Bấm Mic để thu âm - AI chấm phát âm chuẩn Mỹ & độ nối âm):',
    speakingTargetText: 'Welcome to Vikoda. Our water is naturally alkaline at pH nine point oh, bottled directly at the source.',
    hint: 'Lưu ý đọc: "naturally alkaline", pH 9.0 đọc là "nine point oh", ngắt nhịp tự tin.'
  },
  {
    id: 13,
    section: 'speaking',
    sectionTitle: 'Phần 3: Nói (Speaking - AI Chấm Phát Âm)',
    skillType: 'speaking',
    type: 'read_aloud',
    promptVi: 'Đọc to cam kết tiêu chuẩn xuất khẩu quốc tế (AI chấm độ trôi chảy & trọng âm):',
    speakingTargetText: 'We strictly adhere to international export standards with zero artificial chemical treatment.',
    hint: 'Nhấn trọng âm vào: strictly, international, standards, artificial.'
  },
  {
    id: 14,
    section: 'speaking',
    sectionTitle: 'Phần 3: Nói (Speaking - AI Phản Xạ Nhanh)',
    skillType: 'speaking',
    type: 'situational_reflex',
    promptVi: 'Phản xạ tình huống 1: Khách VIP đối tác bước vào sảnh lễ tân. Hãy bấm Mic nói câu chào đón tiếng Anh và mời họ một chai nước Vikoda ướp lạnh:',
    speakingTargetText: 'Good morning, welcome to Vikoda. Please have a seat and enjoy our chilled natural alkaline water.',
    hint: 'Bạn có thể nói: "Good morning, welcome to Vikoda! Please enjoy a chilled bottle of natural mineral water."'
  },
  {
    id: 15,
    section: 'speaking',
    sectionTitle: 'Phần 3: Nói (Speaking - AI Phản Xạ Nhanh)',
    skillType: 'speaking',
    type: 'situational_reflex',
    promptVi: 'Phản xạ tình huống 2: Trong cuộc họp, đối tác hỏi: "Can your factory supply five containers per month?". Hãy bấm Mic trả lời khẳng định năng lực nhà máy đáp ứng tốt:',
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
  const [timeLeft, setTimeLeft] = useState<number>(1200); // 20 minutes countdown (1200s)
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

  // 20-minute timer
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
    const q = INTEGRATED_15_QUESTIONS[currentIndex];
    setSelectedOption(null);
    setDictationInput('');
    setEmailText('');
    setSpokenText('');
    setIsRecording(false);
    setSpeechScore(null);
    setIsAnswerConfirmed(false);

    if (q.type === 'reorder' && q.scrambledWords) {
      setReorderedList([...q.scrambledWords].sort(() => Math.random() - 0.5));
    }
  }, [currentIndex]);

  if (!isOpen || typeof document === 'undefined') return null;

  const currentQ = INTEGRATED_15_QUESTIONS[currentIndex];

  // Format countdown mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handlePlayAudio = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else if (currentQ.audioPrompt) {
      setIsPlayingAudio(true);
      playSpeech(currentQ.audioPrompt, 0.95, 'en-US', () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleStartSpeechRecording = () => {
    if (!isSpeechRecognitionSupported()) {
      alert('Trình duyệt chưa bật nhận diện giọng nói. Hãy cấp quyền Microphone.');
      return;
    }

    playSound('click');
    setIsRecording(true);
    setSpokenText('Đang lắng nghe giọng phát âm của bạn...');

    startSpeechRecognition(
      (transcript) => {
        setSpokenText(transcript);
        setIsRecording(false);

        // Calculate score based on similarity to target text
        const target = currentQ.speakingTargetText || '';
        const similarity = calculateSimilarity(target, transcript);
        const adjustedScore = Math.max(50, Math.min(100, Math.round(similarity * 1.15)));
        setSpeechScore(adjustedScore);
        playSound(adjustedScore >= 70 ? 'correct' : 'click');
      },
      () => {
        setIsRecording(false);
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
      // Evaluation based on word count and business keywords
      const hasGreeting = /dear|hi|hello/i.test(emailText);
      const hasClosing = /regards|sincerely|thanks|best/i.test(emailText);
      const hasKeyTerms = /vikoda|cam ranh|airport|welcome|factory|visit/i.test(emailText);
      let emailScore = 50;
      if (wordCount >= (currentQ.minWords || 25) && wordCount <= (currentQ.maxWords || 45)) emailScore += 25;
      if (hasGreeting && hasClosing) emailScore += 15;
      if (hasKeyTerms) emailScore += 10;
      score = Math.min(100, emailScore);
    } else if (currentQ.type === 'read_aloud' || currentQ.type === 'situational_reflex') {
      score = speechScore !== null ? speechScore : (spokenText.length > 10 ? 75 : 50);
    }

    setQuestionScores((prev) => ({ ...prev, [currentQ.id]: score }));
    setIsAnswerConfirmed(true);
    playSound(score >= 70 ? 'correct' : 'wrong');
  };

  const handleNextQuestion = () => {
    playSound('click');
    if (currentIndex < INTEGRATED_15_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmitTest();
    }
  };

  // Compute final 4-skill evaluation and recommended level
  const handleSubmitTest = () => {
    playSound('celebrate');

    // Aggregate by 4 skills
    const readingScores = [questionScores[1] || 0, questionScores[2] || 0, questionScores[3] || 0, questionScores[6] || 0, questionScores[7] || 0];
    const listeningScores = [questionScores[4] || 0, questionScores[5] || 0, questionScores[8] || 0];
    const writingScores = [questionScores[9] || 0, questionScores[10] || 0, questionScores[11] || 0];
    const speakingScores = [questionScores[12] || 0, questionScores[13] || 0, questionScores[14] || 0, questionScores[15] || 0];

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
        'Luyện thành ngữ thương trường và ứng biến phản biện với buyer khó tính',
        'Nhận Chứng Nhận Đại Sứ Toàn Cầu Vikoda'
      ];
    } else if (overallScore >= 70) {
      recommendedLevel = 'B2-C1';
      feedback = 'Rất tốt! Khả năng đọc hiểu hợp đồng xuất khẩu và đàm phán CIF/FOB của bạn rất vững vàng. Cần rèn luyện thêm độ nhấn nhá khi phát biểu trước hội đồng đối tác.';
      nextSteps = [
        'Mở khóa Cấp độ C1: Xuất Khẩu & Đàm Phán B2B Quốc Tế',
        'Thực chiến giả lập 12 Tình Huống Buyer Ép Giá trong Hộp Đấu Trí',
        'Luyện kỹ năng chốt L/C và bảo hiểm hàng hải quốc tế'
      ];
    } else if (overallScore >= 50) {
      recommendedLevel = 'A2-B1';
      feedback = 'Khá tốt! Bạn có nền tảng từ vựng cơ bản. Cần đào sâu 5 yếu tố nước khoáng kiềm pH 9.0 và luyện phản xạ đón tiếp khách tại nhà máy Đảnh Thạnh.';
      nextSteps = [
        'Mở khóa Cấp độ B1: Mỏ Khoáng & Thuyết Trình Nguồn Đảnh Thạnh',
        'Học thuộc bài thuyết trình tour mỏ 220m bằng tiếng Anh',
        'Thực hành Shadowing chế độ Rảnh Tay khi di chuyển'
      ];
    } else {
      recommendedLevel = 'A1';
      feedback = 'Bạn đã hoàn thành tốt bài kiểm tra định vị ban đầu! Hãy bắt đầu từ Cấp độ A1 để chuẩn hóa phát âm từng từ khóa thương hiệu Vikoda.';
      nextSteps = [
        'Mở khóa Cấp độ A1: Đón Tiếp & Giao Tiếp Văn Phòng Cơ Bản',
        'Luyện phát âm chuẩn "Naturally Alkaline" và "pH nine point oh"',
        'Tham gia đấu trường Endless Drill 60s mỗi ngày'
      ];
    }

    const result: PlacementTestResult = {
      score: overallScore,
      totalQuestions: 15,
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

  const modalContent = (
    <div 
      className="fixed inset-0 z-[999999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none animate-in fade-in duration-200"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
    >
      <div 
        className="bg-white w-full max-w-2xl md:max-w-3xl rounded-3xl border-2 border-slate-200 border-b-6 border-b-sky-600 shadow-2xl overflow-hidden flex flex-col max-h-[95dvh] animate-in zoom-in-95 duration-150"
      >
        {/* ================= IF TEST COMPLETED: SHOW 4-SKILL SCORECARD ================= */}
        {testResult ? (
          <div className="p-6 md:p-8 overflow-y-auto space-y-5 text-center my-auto">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 border-2 border-emerald-300 flex items-center justify-center mx-auto text-2xl shadow-md">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-400 text-slate-950 px-3 py-0.5 rounded-full inline-block">
                KẾT QUẢ ĐÁNH GIÁ 4 KỸ NĂNG THỰC CHIẾN CHUẨN QUỐC TẾ
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
                  <span className="flex items-center gap-1.5"><PenTool className="w-3.5 h-3.5 text-amber-600" /> Viết công sở (Writing)</span>
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

            {/* Next Steps */}
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-left space-y-1.5">
              <span className="text-[10px] font-black uppercase text-[#0070D1] tracking-wider block">
                Lộ Trình Được Cá Nhân Hóa Dành Riêng Cho Bạn:
              </span>
              <ul className="text-xs text-slate-700 space-y-1">
                {testResult.nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
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
            {/* Header: Progress, 20:00 Countdown Timer & Close */}
            <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-md bg-sky-500 text-white font-black text-xs">
                  Câu {currentQ.id} / 15
                </span>
                <span className="text-xs text-sky-200 font-bold hidden sm:inline">
                  {currentQ.sectionTitle}
                </span>
              </div>

              {/* 20-Minute Countdown Clock */}
              <div className="flex items-center space-x-3">
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl font-mono text-xs font-black border ${
                  timeLeft <= 300 
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse'
                    : 'bg-slate-800 text-amber-300 border-slate-700'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTime(timeLeft)}</span>
                </div>

                <button
                  onClick={() => {
                    stopSpeech();
                    onClose();
                  }}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Visual Progress Bar (15 segments) */}
            <div className="w-full bg-slate-200 h-1.5 shrink-0">
              <div 
                className="bg-[#0070D1] h-full transition-all duration-300"
                style={{ width: `${(currentQ.id / 15) * 100}%` }}
              />
            </div>

            {/* Question Body */}
            <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4">
              {/* Prompt Vi */}
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase text-[#0070D1] tracking-wider block">
                  {currentQ.skillType === 'reading' && '📖 KỸ NĂNG ĐỌC HIỂU'}
                  {currentQ.skillType === 'listening' && '🎧 KỸ NĂNG NGHE BẮT Ý'}
                  {currentQ.skillType === 'writing' && '✍️ KỸ NĂNG VIẾT DOANH NGHIỆP'}
                  {currentQ.skillType === 'speaking' && '🗣️ KỸ NĂNG NÓI & PHẢN XẠ AI'}
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                  {currentQ.promptVi}
                </h3>
              </div>

              {/* English Context Box or Dialogue */}
              {currentQ.englishContext && (
                <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs text-slate-800 leading-relaxed font-medium">
                  {currentQ.englishContext}
                </div>
              )}

              {/* Audio Player Button (For Listening & Dictation) */}
              {currentQ.audioPrompt && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePlayAudio}
                    className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs cursor-pointer shadow-xs transition-transform active:scale-95 flex items-center gap-2"
                  >
                    <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                    <span>{isPlayingAudio ? 'Đang phát âm...' : 'Bấm Nghe Hội Thoại'}</span>
                  </button>
                  <span className="text-[11px] text-slate-500">Giọng chuẩn đàm phán quốc tế (Michael AI)</span>
                </div>
              )}

              {/* ================= RENDER INTERACTIVE QUESTION TYPES ================= */}

              {/* 1. Multiple Choice / Fill */}
              {(currentQ.type === 'choice' || currentQ.type === 'fill') && currentQ.options && (
                <div className="space-y-2 pt-1">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (!isAnswerConfirmed) {
                            playSound('click');
                            setSelectedOption(idx);
                          }
                        }}
                        className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-2.5 active:scale-98 ${
                          isSelected
                            ? isAnswerConfirmed
                              ? opt.isCorrect
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-xs'
                                : 'bg-rose-50 border-rose-500 text-rose-950 shadow-xs'
                              : 'bg-sky-50 border-[#0070D1] text-slate-900 shadow-xs'
                            : isAnswerConfirmed && opt.isCorrect
                              ? 'bg-emerald-50/60 border-emerald-400 text-emerald-900'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-[#0070D1] text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <div className="text-xs font-semibold leading-relaxed">
                          {opt.text}
                          {isAnswerConfirmed && isSelected && (
                            <p className="text-[11px] font-normal text-slate-600 mt-1">
                              💡 {opt.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 2. Dictation Typing */}
              {currentQ.type === 'dictation' && (
                <div className="space-y-2 pt-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Gõ lại từ còn thiếu bạn vừa nghe được:
                  </label>
                  <input
                    type="text"
                    disabled={isAnswerConfirmed}
                    value={dictationInput}
                    onChange={(e) => setDictationInput(e.target.value)}
                    placeholder={currentQ.hint || 'Nhập từ nghe được...'}
                    className="w-full p-3 rounded-2xl border-2 border-slate-300 font-bold text-sm text-slate-900 focus:outline-none focus:border-[#0070D1] bg-slate-50"
                  />
                  {isAnswerConfirmed && (
                    <div className="p-2.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-800">
                      Đáp án chính xác: <span className="font-mono text-emerald-700 font-bold">{currentQ.targetAnswer}</span>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Word Reordering */}
              {currentQ.type === 'reorder' && (
                <div className="space-y-3 pt-1">
                  <p className="text-xs text-slate-600 font-medium">
                    Nhấp vào các cụm từ để di chuyển đổi chỗ thứ tự sao cho đúng ngữ pháp:
                  </p>
                  <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-slate-100 border border-slate-200 min-h-[50px]">
                    {reorderedList.map((chunk, idx) => (
                      <span
                        key={idx}
                        onClick={() => {
                          if (isAnswerConfirmed) return;
                          playSound('click');
                          // Swap with next element
                          const nextIdx = (idx + 1) % reorderedList.length;
                          const copy = [...reorderedList];
                          const temp = copy[idx];
                          copy[idx] = copy[nextIdx];
                          copy[nextIdx] = temp;
                          setReorderedList(copy);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 hover:border-[#0070D1] font-bold text-xs text-slate-800 shadow-2xs cursor-pointer active:scale-95 transition-all"
                        title="Bấm để đổi vị trí"
                      >
                        {chunk}
                      </span>
                    ))}
                  </div>
                  {isAnswerConfirmed && (
                    <div className="p-2.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-800">
                      Câu hoàn chỉnh chuẩn: <br />
                      <span className="font-bold text-emerald-700">{currentQ.targetAnswer}</span>
                    </div>
                  )}
                </div>
              )}

              {/* 4. Short Business Email Compose */}
              {currentQ.type === 'email_compose' && (
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>Gõ email phản hồi trực tiếp:</span>
                    <span className={`px-2 py-0.5 rounded-full font-mono text-[11px] font-black ${
                      wordCount >= (currentQ.minWords || 25) && wordCount <= (currentQ.maxWords || 45)
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      Số từ: {wordCount} / {currentQ.minWords}-{currentQ.maxWords} từ
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    disabled={isAnswerConfirmed}
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                    placeholder="Dear Mr. ..., We look forward to welcoming you..."
                    className="w-full p-3 rounded-2xl border-2 border-slate-300 font-medium text-xs text-slate-900 focus:outline-none focus:border-[#0070D1] bg-slate-50 resize-none leading-relaxed"
                  />
                  {currentQ.hint && (
                    <p className="text-[11px] text-slate-500 italic">
                      💡 {currentQ.hint}
                    </p>
                  )}
                </div>
              )}

              {/* 5. Speaking: Read Aloud or Situational Reflex */}
              {(currentQ.type === 'read_aloud' || currentQ.type === 'situational_reflex') && (
                <div className="space-y-3 pt-1">
                  {currentQ.speakingTargetText && (
                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 text-xs font-bold text-amber-950 leading-relaxed">
                      "{currentQ.speakingTargetText}"
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      disabled={isAnswerConfirmed}
                      onClick={handleStartSpeechRecording}
                      className={`w-full sm:w-auto px-5 py-3 rounded-2xl font-black text-xs cursor-pointer shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 ${
                        isRecording
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'
                      }`}
                    >
                      {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      <span>{isRecording ? 'Đang Thu Âm (Nói ngay)...' : 'Bấm Mic Thu Âm (AI Chấm)'}</span>
                    </button>

                    {speechScore !== null && (
                      <div className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-black flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <span>AI Chấm: {speechScore}/100 Điểm</span>
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
                  <span>{currentIndex === 14 ? 'Nộp Bài & Xem Đánh Giá' : 'Sang Câu Tiếp Theo'}</span>
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
