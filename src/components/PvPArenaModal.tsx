import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Swords, 
  Trophy, 
  Flame, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw,
  Users,
  Award,
  Crown,
  Volume2
} from 'lucide-react';
import { PvPArenaStats, EmployeeProfile } from '../types';
import { playSound } from '../services/soundEffects';
import { playSpeech } from '../services/speechService';

interface PvPArenaModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserProfile: EmployeeProfile;
  arenaStats: PvPArenaStats;
  onUpdateArenaStats: (newStats: PvPArenaStats, xpGain: number, gemsGain: number) => void;
  onRecordMistake: (mistakeData: {
    questionId: string;
    promptEn: string;
    promptVi: string;
    correctSentence: string;
    wrongChoiceGiven: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    category: string;
  }) => void;
  speechRate: number;
}

interface ArenaQuestion {
  id: string;
  category: string;
  promptEn: string;
  promptVi: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface RivalProfile {
  id: string;
  name: string;
  title: string;
  dept: string;
  avatar: string;
  elo: number;
  accuracy: number; // 0.65 to 0.85
  minResponseSec: number;
  maxResponseSec: number;
}

const VIKODA_RIVALS: RivalProfile[] = [
  {
    id: 'rival-1',
    name: 'Nguyễn Thu Trang',
    title: 'Brand Manager',
    dept: 'Phòng Tiếp Thị & Thương Hiệu',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
    elo: 1280,
    accuracy: 0.80,
    minResponseSec: 3,
    maxResponseSec: 6
  },
  {
    id: 'rival-2',
    name: 'Phạm Quốc Duy',
    title: 'Key Account Manager',
    dept: 'Kênh Khách Sạn & Resort HORECA',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150',
    elo: 1340,
    accuracy: 0.85,
    minResponseSec: 2.5,
    maxResponseSec: 5
  },
  {
    id: 'rival-3',
    name: 'Lê Hoàng Yến',
    title: 'Chuyên Viên Xuất Khẩu',
    dept: 'Phòng Kinh Doanh Quốc Tế',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
    elo: 1420,
    accuracy: 0.88,
    minResponseSec: 2,
    maxResponseSec: 5
  },
  {
    id: 'rival-4',
    name: 'Vũ Minh Quân',
    title: 'Giám Sát Vận Hành',
    dept: 'Nhà Máy Mỏ Khoáng Đảnh Thạnh',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
    elo: 1190,
    accuracy: 0.75,
    minResponseSec: 3.5,
    maxResponseSec: 7
  },
  {
    id: 'rival-5',
    name: 'Trần Bích Phương',
    title: 'Chuyên Viên Kiểm Định QC',
    dept: 'Phòng Quản Lý Chất Lượng',
    avatar: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=150',
    elo: 1310,
    accuracy: 0.82,
    minResponseSec: 3,
    maxResponseSec: 6
  }
];

const ARENA_BATTLE_QUESTIONS: ArenaQuestion[] = [
  {
    id: 'arena-q1',
    category: 'Product Heritage',
    promptEn: 'What is the natural extraction depth and spring temperature of Vikoda at source?',
    promptVi: 'Độ sâu khai thác và nhiệt độ vòi phun tại nguồn Đảnh Thạnh là bao nhiêu?',
    options: [
      'Depth of 220 meters and 72°C spring temperature at the tap',
      'Depth of 50 meters and chilled at 10°C',
      'Depth of 500 meters and boiled at 100°C',
      'Surface lake water with added chlorine'
    ],
    correctIndex: 0,
    explanation: 'Vikoda khai thác ở độ sâu 220m dưới các tầng đá magma cổ với nhiệt độ tại vòi đạt 72°C vô trùng tự nhiên.'
  },
  {
    id: 'arena-q2',
    category: 'Sales Strategy',
    promptEn: 'In the 8-step sales process, what is the core meaning of "AVA" in merchandising?',
    promptVi: 'Trong quy trình bán hàng, nguyên tắc trưng bày "AVA" viết tắt của 3 từ nào?',
    options: [
      'Availability - Visibility - Affordability',
      'Action - Vision - Attitude',
      'Attention - Value - Agreement',
      'Account - Volume - Amount'
    ],
    correctIndex: 0,
    explanation: 'AVA là tiêu chuẩn vàng trưng bày điểm bán: Hàng luôn sẵn có (Availability), Dễ thấy bắt mắt (Visibility), và Đúng giá quy định (Affordability).'
  },
  {
    id: 'arena-q3',
    category: 'Alkaline Science',
    promptEn: 'Why does natural alkaline water Vikoda NOT cause kidney stones in consumers?',
    promptVi: 'Tại sao nước khoáng kiềm thiên nhiên Vikoda hoàn toàn KHÔNG gây sỏi thận?',
    options: [
      'Calcium and magnesium salts are 100% dissolved and magnesium aids urinary excretion',
      'Vikoda has zero minerals and is completely distilled',
      'Vikoda contains artificial acid that melts stones immediately',
      'Water never passes through the kidneys'
    ],
    correctIndex: 0,
    explanation: 'Các ion Ca2+ và Mg2+ hòa tan hoàn toàn ở dạng vi lượng tự nhiên, muối magie còn kích thích thận đào thải cặn bã.'
  },
  {
    id: 'arena-q4',
    category: 'Global Export',
    promptEn: 'Under FOB terms (Cat Lai / Quy Nhon Port), where does seller risk officially transfer to buyer?',
    promptVi: 'Theo điều kiện FOB, rủi ro chuyển giao từ người bán sang người mua tại thời điểm nào?',
    options: [
      'When goods have passed over the ship rail / loaded on board the vessel',
      'When goods arrive at the destination warehouse in Tokyo',
      'When goods are packed in the seller factory in Dien Khanh',
      'When the buyer sells the bottles to consumers'
    ],
    correctIndex: 0,
    explanation: 'Incoterms FOB (Free on Board): Người bán chịu chi phí và rủi ro cho đến khi hàng đã xếp an toàn lên boong tàu tại cảng bốc hàng.'
  },
  {
    id: 'arena-q5',
    category: 'HORECA Objection',
    promptEn: 'How should you professionally address an F&B Director comparing Vikoda to Evian?',
    promptVi: 'Phản hồi F&B Director khách sạn 5 sao so sánh giá Vikoda với Evian như thế nào cho đẳng cấp?',
    options: [
      'Evian has neutral pH 7.2, whereas Vikoda delivers rare natural pH 9.0 and 100% localized glass sustainability',
      'Tell them Evian is bad quality and French water is fake',
      'Immediately cut the price by 70% to win the order',
      'Stay silent and walk away without answering'
    ],
    correctIndex: 0,
    explanation: 'Định vị giá trị: Evian là khoáng trung tính pH 7.2, trong khi Vikoda là kiềm tự nhiên pH 9.0 hiếm có kèm cam kết chai thủy tinh ESG xanh bền vững.'
  },
  {
    id: 'arena-q6',
    category: 'Corporate Culture',
    promptEn: 'What does the OGSM strategic management methodology stand for at FIT & Vikoda?',
    promptVi: 'Mô hình quản trị chiến lược OGSM tại tập đoàn FIT & Vikoda là viết tắt của 4 từ nào?',
    options: [
      'Objectives - Goals - Strategies - Measurements',
      'Organization - Growth - Sales - Marketing',
      'Order - Guidance - System - Management',
      'Operation - General - Standard - Method'
    ],
    correctIndex: 0,
    explanation: 'OGSM: Objectives (Mục tiêu tối thượng), Goals (Chỉ tiêu cụ thể), Strategies (Chiến lược đột phá), Measurements (Thước đo hiệu suất).'
  },
  {
    id: 'arena-q7',
    category: 'Closing Technique',
    promptEn: 'In Vikoda’s 6-letter closing technique V-I-K-O-D-A, what does "A" stand for?',
    promptVi: 'Trong nghệ thuật chốt hợp đồng V-I-K-O-D-A, chữ "A" cuối cùng là viết tắt của gì?',
    options: [
      'Action - Closing the official order with exact quantity and commitment',
      'Apology - Saying sorry to the client',
      'Argument - Debating with the customer',
      'Abandon - Giving up on the deal'
    ],
    correctIndex: 0,
    explanation: 'Chữ A trong V-I-K-O-D-A là ACTION: Hành động dứt khoát, chốt đơn hàng cụ thể về số lượng thùng/két và thời gian giao hàng.'
  }
];

export const PvPArenaModal: React.FC<PvPArenaModalProps> = ({
  isOpen,
  onClose,
  currentUserProfile,
  arenaStats,
  onUpdateArenaStats,
  onRecordMistake,
  speechRate
}) => {
  // Game states: 'lobby' | 'matchmaking' | 'battle' | 'round_result' | 'game_over'
  const [gameState, setGameState] = useState<'lobby' | 'matchmaking' | 'battle' | 'game_over'>('lobby');
  const [activeTab, setActiveTab] = useState<'battle' | 'leaderboard'>('battle');
  
  // Selected rival
  const [selectedRival, setSelectedRival] = useState<RivalProfile>(VIKODA_RIVALS[0]);
  
  // Current match questions (5 randomized questions)
  const [matchQuestions, setMatchQuestions] = useState<ArenaQuestion[]>([]);
  const [currentRound, setCurrentRound] = useState<number>(0);
  
  // Scores & Health
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [rivalScore, setRivalScore] = useState<number>(0);
  
  // Round timer
  const [timerSeconds, setTimerSeconds] = useState<number>(10);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // User input states for current round
  const [userSelectedOption, setUserSelectedOption] = useState<number | null>(null);
  const [rivalSelectedOption, setRivalSelectedOption] = useState<number | null>(null);
  const [isRoundAnswered, setIsRoundAnswered] = useState<boolean>(false);
  const [roundWinner, setRoundWinner] = useState<'player' | 'rival' | 'draw' | null>(null);

  // Match result calculations
  const [matchResult, setMatchResult] = useState<{
    isWin: boolean;
    eloChange: number;
    earnedXp: number;
    earnedGems: number;
  } | null>(null);

  // Initialize lobby
  useEffect(() => {
    if (!isOpen) {
      if (timerRef.current) clearInterval(timerRef.current);
      setGameState('lobby');
    }
  }, [isOpen]);

  // Start matchmaking animation
  const handleStartMatchmaking = (rival?: RivalProfile) => {
    playSound('click');
    const targetRival = rival || VIKODA_RIVALS[Math.floor(Math.random() * VIKODA_RIVALS.length)];
    setSelectedRival(targetRival);
    setGameState('matchmaking');

    // Shuffle questions
    const shuffled = [...ARENA_BATTLE_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 5);
    setMatchQuestions(shuffled);

    setTimeout(() => {
      playSound('success');
      startBattle(shuffled);
    }, 2200);
  };

  const startBattle = (questions: ArenaQuestion[]) => {
    setGameState('battle');
    setCurrentRound(0);
    setPlayerScore(0);
    setRivalScore(0);
    setMatchResult(null);
    setupRound(0, questions);
  };

  const setupRound = (roundIdx: number, questions: ArenaQuestion[]) => {
    setUserSelectedOption(null);
    setRivalSelectedOption(null);
    setIsRoundAnswered(false);
    setRoundWinner(null);
    setTimerSeconds(10);

    const question = questions[roundIdx];
    if (question) {
      playSpeech(question.promptEn, speechRate, 'en-US');
    }

    // Start timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeOut(roundIdx, questions);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Simulate Rival response time based on accuracy & seconds
    const rivalResponseTime = Math.random() * (selectedRival.maxResponseSec - selectedRival.minResponseSec) + selectedRival.minResponseSec;
    setTimeout(() => {
      setRivalSelectedOption(() => {
        const isRivalCorrect = Math.random() < selectedRival.accuracy;
        return isRivalCorrect ? question.correctIndex : (question.correctIndex + 1) % question.options.length;
      });
    }, rivalResponseTime * 1000);
  };

  const handleTimeOut = (roundIdx: number, questions: ArenaQuestion[]) => {
    setIsRoundAnswered(true);
    playSound('wrong');
    evaluateRound(null, roundIdx, questions, 0);
  };

  const handleUserAnswer = (optionIdx: number) => {
    if (isRoundAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setUserSelectedOption(optionIdx);
    setIsRoundAnswered(true);

    const q = matchQuestions[currentRound];
    const isUserCorrect = optionIdx === q.correctIndex;
    const speedBonus = timerSeconds >= 7 ? 30 : timerSeconds >= 4 ? 15 : 5;

    if (isUserCorrect) {
      playSound('success');
    } else {
      playSound('wrong');
      // Record mistake to user's Mistakes Vault!
      onRecordMistake({
        questionId: q.id,
        promptEn: q.promptEn,
        promptVi: q.promptVi,
        correctSentence: q.options[q.correctIndex],
        wrongChoiceGiven: q.options[optionIdx],
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        category: q.category
      });
    }

    evaluateRound(optionIdx, currentRound, matchQuestions, speedBonus);
  };

  const evaluateRound = (userChoice: number | null, roundIdx: number, questions: ArenaQuestion[], speedBonus: number) => {
    const q = questions[roundIdx];
    const isUserCorrect = userChoice === q.correctIndex;
    const isRivalCorrect = rivalSelectedOption === q.correctIndex;

    let pEarned = 0;
    let rEarned = 0;

    if (isUserCorrect) {
      pEarned = 100 + speedBonus;
      setPlayerScore((prev) => prev + pEarned);
    }
    if (isRivalCorrect) {
      rEarned = 100 + 15;
      setRivalScore((prev) => prev + rEarned);
    }

    if (isUserCorrect && !isRivalCorrect) setRoundWinner('player');
    else if (!isUserCorrect && isRivalCorrect) setRoundWinner('rival');
    else setRoundWinner('draw');

    // Auto-advance after 2.5s
    setTimeout(() => {
      if (roundIdx < questions.length - 1) {
        setCurrentRound(roundIdx + 1);
        setupRound(roundIdx + 1, questions);
      } else {
        finishMatch(playerScore + pEarned, rivalScore + rEarned);
      }
    }, 2400);
  };

  const finishMatch = (finalPScore: number, finalRScore: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('game_over');

    const isWin = finalPScore > finalRScore;
    const isDraw = finalPScore === finalRScore;

    const eloDelta = isWin ? 25 : isDraw ? 5 : -15;
    const xpGain = isWin ? 100 : 40;
    const gemsGain = isWin ? 20 : 5;

    const newStats: PvPArenaStats = {
      ...arenaStats,
      eloRating: Math.max(1000, arenaStats.eloRating + eloDelta),
      matchesPlayed: arenaStats.matchesPlayed + 1,
      wins: isWin ? arenaStats.wins + 1 : arenaStats.wins,
      losses: !isWin && !isDraw ? arenaStats.losses + 1 : arenaStats.losses,
      draws: isDraw ? arenaStats.draws + 1 : arenaStats.draws,
      currentWinStreak: isWin ? arenaStats.currentWinStreak + 1 : 0,
      highestStreak: Math.max(arenaStats.highestStreak, isWin ? arenaStats.currentWinStreak + 1 : arenaStats.highestStreak)
    };

    setMatchResult({
      isWin,
      eloChange: eloDelta,
      earnedXp: xpGain,
      earnedGems: gemsGain
    });

    onUpdateArenaStats(newStats, xpGain, gemsGain);

    if (isWin) {
      playSound('success');
      try {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    } else {
      playSound('wrong');
    }
  };

  // Keyboard navigation for options (1, 2, 3, 4)
  useEffect(() => {
    if (gameState !== 'battle' || isRoundAnswered) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const q = matchQuestions[currentRound];
      if (!q) return;

      if (e.key >= '1' && e.key <= String(q.options.length)) {
        const idx = parseInt(e.key) - 1;
        handleUserAnswer(idx);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, isRoundAnswered, currentRound, matchQuestions]);

  if (!isOpen) return null;

  const currentQ = matchQuestions[currentRound];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-5xl border border-sky-100 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-indigo-700 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-xs shadow-inner">
              <Swords className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl md:text-2xl font-black tracking-tight">Vikoda PvP Battle Arena</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
                  Live 1v1
                </span>
              </div>
              <p className="text-xs text-rose-100 font-medium">
                Đấu trường thi đấu phản xạ đối kháng trực tiếp giữa các chiến binh Vikoda
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-black/25 rounded-2xl border border-white/20">
              <Trophy className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-black tracking-wide text-amber-200">Elo: {arenaStats.eloRating}</span>
              <span className="text-xs font-bold text-white/70">({arenaStats.rankTitle || 'Đấu Sĩ Vikoda'})</span>
            </div>

            <button
              onClick={() => {
                playSound('click');
                if (timerRef.current) clearInterval(timerRef.current);
                onClose();
              }}
              className="p-2 rounded-full hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* LOBBY VIEW */}
        {gameState === 'lobby' && (
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
            
            {/* Player Status Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-indigo-800/40">
              <div className="flex items-center space-x-4">
                <img 
                  src={currentUserProfile.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'} 
                  alt="Avatar" 
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg md:text-xl font-black">{currentUserProfile.fullName}</h3>
                    <Crown className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-xs text-indigo-200">{currentUserProfile.department} • Mã NV: {currentUserProfile.employeeCode}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-800 text-indigo-200 text-xs font-bold">
                      {arenaStats.wins} Thắng / {arenaStats.losses} Thua
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center space-x-1">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>Chuỗi {arenaStats.currentWinStreak} trận</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Big Matchmaking Button */}
              <button
                onClick={() => handleStartMatchmaking()}
                className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 text-white font-black text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-3 cursor-pointer active:translate-y-0.5"
              >
                <Swords className="w-6 h-6 animate-pulse" />
                <span>GHÉP ĐẤU NGẪU NHIÊN NGAY</span>
              </button>
            </div>

            {/* Choose Colleague to Challenge */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base md:text-lg font-black text-slate-900 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <span>Hoặc Thách Đấu Đồng Nghiệp Công Ty</span>
                </h4>
                <span className="text-xs text-slate-500 font-semibold">Chọn đối thủ theo phòng ban</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {VIKODA_RIVALS.map((rival) => (
                  <div 
                    key={rival.id}
                    className="p-4 rounded-2xl border-2 border-slate-200 hover:border-rose-400 bg-white hover:bg-rose-50/30 transition-all flex items-center justify-between shadow-xs group"
                  >
                    <div className="flex items-center space-x-3">
                      <img 
                        src={rival.avatar} 
                        alt={rival.name} 
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                      />
                      <div>
                        <h5 className="font-black text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                          {rival.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 font-medium">{rival.title}</p>
                        <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          Elo: {rival.elo}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartMatchmaking(rival)}
                      className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      Thách Đấu
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* MATCHMAKING ANIMATION */}
        {gameState === 'matchmaking' && (
          <div className="p-12 md:p-20 text-center space-y-8 flex-1 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-rose-500 border-t-transparent animate-spin flex items-center justify-center">
              </div>
              <Swords className="w-12 h-12 text-rose-600 absolute inset-0 m-auto animate-pulse" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                Đang Ghép Trận Đối Kháng...
              </h3>
              <p className="text-slate-500 font-medium text-sm md:text-base">
                Tìm kiếm đối thủ ngang tài ngang sức trên bảng xếp hạng Vikoda
              </p>
            </div>

            {/* VS Card */}
            <div className="flex items-center justify-center space-x-8 max-w-lg w-full bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <div className="text-center space-y-2">
                <img 
                  src={currentUserProfile.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'} 
                  alt="Player" 
                  className="w-16 h-16 rounded-2xl object-cover mx-auto border-2 border-indigo-500 shadow-md"
                />
                <div className="text-sm font-black text-slate-900">{currentUserProfile.fullName}</div>
                <div className="text-xs font-bold text-indigo-600">Elo {arenaStats.eloRating}</div>
              </div>

              <div className="text-2xl font-black text-rose-600 animate-bounce">
                VS
              </div>

              <div className="text-center space-y-2">
                <img 
                  src={selectedRival.avatar} 
                  alt="Rival" 
                  className="w-16 h-16 rounded-2xl object-cover mx-auto border-2 border-rose-500 shadow-md"
                />
                <div className="text-sm font-black text-slate-900">{selectedRival.name}</div>
                <div className="text-xs font-bold text-rose-600">Elo {selectedRival.elo}</div>
              </div>
            </div>
          </div>
        )}

        {/* LIVE BATTLE VIEW */}
        {gameState === 'battle' && currentQ && (
          <div className="p-6 md:p-8 flex-1 overflow-y-auto space-y-6 flex flex-col justify-between">
            
            {/* Arena HUD Bar (Player vs Rival Health & Score) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900 p-4 md:p-5 rounded-2xl text-white shadow-lg">
              
              {/* Player Side */}
              <div className="flex items-center space-x-3">
                <img 
                  src={currentUserProfile.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'} 
                  alt="Player" 
                  className="w-11 h-11 rounded-xl object-cover border-2 border-indigo-400"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs font-black">
                    <span>{currentUserProfile.fullName} (Bạn)</span>
                    <span className="text-amber-300 font-extrabold">{playerScore} pts</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden mt-1.5 border border-slate-700">
                    <div 
                      className="bg-indigo-500 h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (playerScore / 600) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Rival Side */}
              <div className="flex items-center space-x-3">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-between text-xs font-black">
                    <span className="text-rose-300 font-extrabold">{rivalScore} pts</span>
                    <span>{selectedRival.name}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden mt-1.5 border border-slate-700">
                    <div 
                      className="bg-rose-500 h-full transition-all duration-300 ml-auto"
                      style={{ width: `${Math.min(100, (rivalScore / 600) * 100)}%` }}
                    />
                  </div>
                </div>
                <img 
                  src={selectedRival.avatar} 
                  alt="Rival" 
                  className="w-11 h-11 rounded-xl object-cover border-2 border-rose-400"
                />
              </div>

            </div>

            {/* Round & Countdown Timer */}
            <div className="flex items-center justify-between px-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-black uppercase tracking-wider">
                Round {currentRound + 1} of {matchQuestions.length} • {currentQ.category}
              </span>

              {/* Timer Pill */}
              <div className={`px-4 py-1.5 rounded-full font-black text-sm flex items-center space-x-1.5 shadow-xs ${
                timerSeconds <= 3 ? 'bg-rose-600 text-white animate-pulse' : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{timerSeconds}s</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-gradient-to-br from-indigo-50/70 to-sky-50/40 rounded-2xl p-6 border-2 border-indigo-100 shadow-xs space-y-2">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                {currentQ.promptEn}
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-medium">
                👉 {currentQ.promptVi}
              </p>
            </div>

            {/* Options Grid (Large PC Buttons) */}
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((opt, idx) => {
                const isUserPicked = userSelectedOption === idx;
                const isRivalPicked = rivalSelectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle = "bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 hover:border-indigo-400";
                
                if (isRoundAnswered) {
                  if (isCorrect) {
                    btnStyle = "bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-black";
                  } else if (isUserPicked && !isCorrect) {
                    btnStyle = "bg-rose-50 border-2 border-rose-500 text-rose-950";
                  } else {
                    btnStyle = "bg-slate-50 border-2 border-slate-200 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isRoundAnswered}
                    onClick={() => handleUserAnswer(idx)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl font-bold transition-all flex items-start space-x-4 cursor-pointer text-base md:text-lg ${btnStyle}`}
                  >
                    <span className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-black text-sm shrink-0 border border-slate-300">
                      {idx + 1}
                    </span>
                    <span className="flex-1 pt-0.5 leading-relaxed">{opt}</span>
                    
                    {/* Status badges */}
                    {isRoundAnswered && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    )}
                    {isRoundAnswered && isUserPicked && !isCorrect && (
                      <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                    )}
                    {isRoundAnswered && isRivalPicked && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded-lg text-xs font-black">
                        Đối thủ chọn
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Round Outcome Notification */}
            {isRoundAnswered && (
              <div className={`p-4 rounded-2xl text-center font-black text-base animate-in zoom-in-95 duration-150 ${
                roundWinner === 'player' ? 'bg-emerald-500 text-white' :
                roundWinner === 'rival' ? 'bg-rose-500 text-white' : 'bg-amber-500 text-white'
              }`}>
                {roundWinner === 'player' ? '⚡ BẠN THẮNG HIỆP NÀY! (+Speed Bonus)' :
                 roundWinner === 'rival' ? '❌ ĐỐI THỦ NHANH VÀ CHÍNH XÁC HƠN' : '🤝 HÒA NHAU Ở HIỆP NÀY!'}
              </div>
            )}

          </div>
        )}

        {/* GAME OVER SCREEN */}
        {gameState === 'game_over' && matchResult && (
          <div className="p-8 md:p-14 text-center space-y-6 flex-1 flex flex-col items-center justify-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white shadow-2xl border-4 ${
              matchResult.isWin ? 'bg-emerald-500 border-emerald-300 animate-bounce' : 'bg-rose-500 border-rose-300'
            }`}>
              {matchResult.isWin ? <Trophy className="w-12 h-12" /> : <Shield className="w-12 h-12" />}
            </div>

            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                {matchResult.isWin ? '🏆 CHIẾN THẮNG HUY HOÀNG!' : 'TRẬN ĐẤU KẾT THÚC!'}
              </h3>
              <p className="text-slate-600 text-base md:text-lg">
                Tỉ số chung cuộc: <span className="font-extrabold text-indigo-600">{playerScore}</span> vs <span className="font-extrabold text-rose-600">{rivalScore}</span> ({selectedRival.name})
              </p>
            </div>

            {/* Match Rewards */}
            <div className="grid grid-cols-3 gap-4 max-w-md w-full">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                <div className="text-xs uppercase font-extrabold text-amber-700">Điểm Elo</div>
                <div className="text-xl md:text-2xl font-black text-amber-600">
                  {matchResult.eloChange > 0 ? `+${matchResult.eloChange}` : matchResult.eloChange}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
                <div className="text-xs uppercase font-extrabold text-indigo-700">Kinh Nghiệm</div>
                <div className="text-xl md:text-2xl font-black text-indigo-600">+{matchResult.earnedXp} XP</div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-center">
                <div className="text-xs uppercase font-extrabold text-[#005A9C]">Ngọc Thưởng</div>
                <div className="text-xl md:text-2xl font-black text-[#0072CE]">+{matchResult.earnedGems}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-2">
              <button
                onClick={() => setGameState('lobby')}
                className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-sm cursor-pointer"
              >
                Về Sảnh Đấu Trường
              </button>
              <button
                onClick={() => handleStartMatchmaking(selectedRival)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-base shadow-lg hover:shadow-xl transition-all cursor-pointer active:translate-y-0.5"
              >
                Đấu Lại Trận Này
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
