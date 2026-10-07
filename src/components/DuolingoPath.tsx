import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Check, 
  Lock, 
  Star, 
  Sparkles, 
  Volume2, 
  ArrowRight, 
  X,
  Award,
  ChevronRight
} from 'lucide-react';
import { DUOLINGO_PATH_NODES } from '../data/vikodaData';
import { PathNode } from '../types';
import { playSound } from '../services/soundEffects';
import { playSpeech, stopSpeech } from '../services/speechService';

interface DuolingoPathProps {
  completedNodeIds: string[];
  onCompleteNode: (nodeId: string, xp: number, gems: number) => void;
  speechRate: number;
  onGoToSpeaking: () => void;
  onGoToPitch: () => void;
  onGoToBattle: () => void;
}

export const DuolingoPath: React.FC<DuolingoPathProps> = ({
  completedNodeIds,
  onCompleteNode,
  speechRate,
  onGoToSpeaking,
  onGoToPitch,
  onGoToBattle
}) => {
  const [activeModalNode, setActiveModalNode] = useState<PathNode | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Quick challenge state inside node modal
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const handleNodeClick = (node: PathNode) => {
    playSound('click');
    setQuizAnswer(null);
    setQuizSubmitted(false);
    setActiveModalNode(node);
  };

  const getNodeSampleContent = (nodeId: string) => {
    switch (nodeId) {
      case 'node-1':
        return {
          headline: '30s Pitch với Đối Tác Quốc Tế',
          keySentenceEn: 'Vikoda is Vietnam’s premier natural alkaline mineral water with a rare natural pH of 9.0.',
          keySentenceVi: 'Vikoda là nước khoáng kiềm thiên nhiên hàng đầu Việt Nam sở hữu độ pH 9.0 tự nhiên quý hiếm.',
          quickTip: 'Slogan: "Pure as Jade in Stone" (Nguyên bản như Ngọc Trong Đá).',
          quiz: {
            q: 'Khách hỏi: "Vikoda được phát hiện từ năm nào và có độ pH bao nhiêu?"',
            options: [
              'Since 1957, natural pH 9.0',
              'Since 2015, pH 7.0 (Purified)',
              'Since 1990, artificial pH 10.0'
            ],
            correct: 0
          }
        };
      case 'node-2':
        return {
          headline: 'Bí Mật pH 9.0 Tự Nhiên (Không Điện Phân)',
          keySentenceEn: 'Unlike artificial alkaline water, Vikoda preserves natural minerals without chemical additives.',
          keySentenceVi: 'Khác với nước kiềm nhân tạo, Vikoda giữ trọn khoáng chất tự nhiên không hóa chất phụ gia.',
          quickTip: 'Độ pH 9.0 giữ nguyên tới 3 năm và 7 ngày sau khi mở nắp!',
          quiz: {
            q: 'Điểm khác biệt lớn nhất của Vikoda so với nước kiềm máy điện phân?',
            options: [
              'Vikoda thêm baking soda để kiềm hóa',
              'Độ kiềm hoàn toàn tự nhiên qua tầng địa chất, không điện phân',
              'Độ pH giảm ngay sau 1 giờ'
            ],
            correct: 1
          }
        };
      case 'node-3':
        return {
          headline: 'Đóng Chai Tại Nguồn Đảnh Thạnh (220m, 72°C)',
          keySentenceEn: 'Extracted from a 220-meter depth with a tap temperature of 72°C in a 35-hectare sanctuary.',
          keySentenceVi: 'Khai thác từ độ sâu 220m với nhiệt độ tại vòi 72°C trong vành đai sinh thái 35ha.',
          quickTip: 'Đóng chai ngay tại nguồn giữ trọn tính tươi mới và vi khoáng quý.',
          quiz: {
            q: 'Mỏ khoáng Đảnh Thạnh được bảo vệ bởi vành đai sinh thái rộng bao nhiêu?',
            options: [
              '5 hecta',
              '35 hecta rừng nguyên sinh',
              '100 hecta đô thị'
            ],
            correct: 1
          }
        };
      case 'node-4':
        return {
          headline: 'Hạ Gục Đối Tác: Uống Nước Khoáng Có Bị Sỏi Thận?',
          keySentenceEn: 'Calcium and magnesium in Vikoda are completely soluble and safe for daily family hydration.',
          keySentenceVi: 'Canxi và magie trong Vikoda hòa tan hoàn toàn, tuyệt đối an toàn cho cả gia đình uống hàng ngày.',
          quickTip: 'Magie thậm chí còn hỗ trợ bài tiết thận, giúp đào thải canxi dư thừa.',
          quiz: {
            q: 'Cách trả lời khoa học nhất khi khách lo ngại sỏi thận?',
            options: [
              'Khuyên khách uống ít lại',
              'Muối Ca, Mg hòa tan hoàn toàn ở mọi nhiệt độ, TDS cân bằng 100-400 mg/L',
              'Nói rằng nước khoáng không có canxi'
            ],
            correct: 1
          }
        };
      default:
        return {
          headline: 'Chốt Deal Xuất Khẩu & Khách Sạn 5 Sao',
          keySentenceEn: 'Our luxury glass bottles are proudly served at Sheraton, JW Marriott, and Vinpearl.',
          keySentenceVi: 'Chai thủy tinh cao cấp của chúng tôi tự hào phục vụ tại Sheraton, JW Marriott và Vinpearl.',
          quickTip: 'Khách sạn 5 sao đánh giá cao cam kết loại bỏ đồ nhựa dùng một lần.',
          quiz: {
            q: 'Sản phẩm nào của Vikoda được các nhà hàng Michelin và resort 5 sao tin dùng nhất?',
            options: [
              'Bình nhựa 19L',
              'Chai thủy tinh cao cấp 430ml (Still & Sparkling)',
              'Chai nhựa 350ml'
            ],
            correct: 1
          }
        };
    }
  };

  const handlePlaySample = (text: string) => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      playSpeech(text, speechRate, 'en-US', () => setIsPlayingAudio(false));
    }
  };

  const handleSubmitQuiz = () => {
    if (quizAnswer === null || !activeModalNode) return;
    const sample = getNodeSampleContent(activeModalNode.id);
    setQuizSubmitted(true);

    if (quizAnswer === sample.quiz.correct) {
      playSound('correct');
      setTimeout(() => {
        playSound('gem');
        onCompleteNode(activeModalNode.id, activeModalNode.xpReward, activeModalNode.gemReward);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      }, 300);
    } else {
      playSound('wrong');
    }
  };

  return (
    <div className="space-y-6 pb-20">
      
      {/* Top Hero Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0066CC] via-[#0284C7] to-[#A855F7] p-5 text-white shadow-lg shadow-sky-500/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-1 max-w-xs">
            <span className="text-[10px] uppercase font-extrabold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white">
              Đại Sứ Toàn Cầu
            </span>
            <h2 className="text-xl font-extrabold leading-tight">
              Hành Trình Chinh Phục Tiếng Anh Vikoda
            </h2>
            <p className="text-xs text-sky-100 font-medium">
              Vượt qua từng ải để tự tin làm chủ tiếng Anh doanh nghiệp từ A1 đến C2!
            </p>
          </div>
          <div className="text-4xl filter drop-shadow-md">
            💎
          </div>
        </div>
      </div>

      {/* Duolingo Winding Path */}
      <div className="relative max-w-sm mx-auto py-4">
        {/* Curving SVG Connector Path Line */}
        <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-3 bg-sky-100 rounded-full -z-0" />

        <div className="space-y-10 relative z-10">
          {DUOLINGO_PATH_NODES.map((node, index) => {
            const isCompleted = completedNodeIds.includes(node.id);
            const isUnlocked = index === 0 || completedNodeIds.includes(DUOLINGO_PATH_NODES[index - 1].id);

            // Stagger left / center / right positions
            const offsetStyles = [
              'translate-x-0',
              'translate-x-10',
              '-translate-x-10',
              'translate-x-8',
              'translate-x-0'
            ];
            const offsetClass = offsetStyles[index % offsetStyles.length];

            return (
              <div key={node.id} className={`flex flex-col items-center ${offsetClass}`}>
                
                {/* Node Button */}
                <div className="relative group">
                  <button
                    disabled={!isUnlocked}
                    onClick={() => handleNodeClick(node)}
                    className={`w-18 h-18 rounded-3xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                      isCompleted
                        ? 'bg-gradient-to-tr from-[#0066CC] to-[#00A3E0] text-white btn-duo-primary'
                        : isUnlocked
                        ? 'bg-gradient-to-tr from-[#9333EA] to-[#A855F7] text-white btn-duo-purple animate-pulse'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none border-b-4 border-slate-300'
                    }`}
                  >
                    <span className="text-2xl">{isUnlocked ? node.icon : '🔒'}</span>
                  </button>

                  {/* Complete Check badge */}
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}

                  {/* Level Star Rating */}
                  {isCompleted && (
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center bg-amber-400 px-1.5 py-0.5 rounded-full border border-white text-[10px] text-slate-900 font-extrabold shadow-xs">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>3/3</span>
                    </div>
                  )}
                </div>

                {/* Node Title Label */}
                <div className="mt-2 text-center max-w-[130px]">
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">
                    {node.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1">
                    {node.shortDesc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Launch Cards (ELSA Speak & Pitch) */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          onClick={onGoToSpeaking}
          className="p-3.5 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 shadow-sm flex items-center space-x-3 text-left transition-all active:scale-98"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-xl">
            🎙️
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-800">Luyện Nói ELSA</div>
            <div className="text-[10px] text-purple-600 font-semibold">Chấm % phát âm</div>
          </div>
        </button>

        <button
          onClick={onGoToPitch}
          className="p-3.5 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 shadow-sm flex items-center space-x-3 text-left transition-all active:scale-98"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-xl">
            💎
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-800">Vikoda Pitch</div>
            <div className="text-[10px] text-cyan-600 font-semibold">Thuật ngữ & Số liệu</div>
          </div>
        </button>
      </div>

      {/* NODE CHALLENGE MODAL (DUOLINGO STYLE) */}
      {activeModalNode && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{activeModalNode.icon}</span>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {activeModalNode.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    +{activeModalNode.xpReward} XP • +{activeModalNode.gemReward} 💎
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  stopSpeech();
                  setActiveModalNode(null);
                }}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Micro Content (Ít chữ, súc tích) */}
            {(() => {
              const content = getNodeSampleContent(activeModalNode.id);
              return (
                <div className="space-y-4">
                  {/* Key Sentence Card with Audio */}
                  <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066CC]">
                        Câu Tiếng Anh Chuẩn Quốc Tế:
                      </span>
                      <button
                        onClick={() => handlePlaySample(content.keySentenceEn)}
                        className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                          isPlayingAudio
                            ? 'bg-[#0066CC] text-white shadow-xs'
                            : 'bg-white text-[#0066CC] border border-sky-200'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{isPlayingAudio ? 'Dừng' : 'Nghe đọc'}</span>
                      </button>
                    </div>

                    <p className="text-sm font-extrabold text-slate-900 leading-snug">
                      "{content.keySentenceEn}"
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      {content.keySentenceVi}
                    </p>
                  </div>

                  {/* Pro Culture Tip */}
                  <div className="p-2.5 rounded-xl bg-purple-50/80 border border-purple-100 text-xs text-purple-900 flex items-start space-x-2">
                    <span className="text-base shrink-0">💡</span>
                    <div>
                      <strong className="text-purple-950 font-bold">Mẹo Vikoda: </strong>
                      <span>{content.quickTip}</span>
                    </div>
                  </div>

                  {/* Gamified Mini-Quiz (1 câu trắc nghiệm nhanh để nhận XP) */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold text-slate-800">
                      Thử thách: {content.quiz.q}
                    </h4>

                    <div className="space-y-2">
                      {content.quiz.options.map((opt, i) => {
                        const isSelected = quizAnswer === i;
                        const isCorrect = i === content.quiz.correct;

                        let style = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-300';
                        if (quizSubmitted) {
                          if (isCorrect) {
                            style = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                          } else if (isSelected) {
                            style = 'bg-rose-50 border-rose-400 text-rose-900';
                          } else {
                            style = 'opacity-50 border-slate-200';
                          }
                        } else if (isSelected) {
                          style = 'bg-sky-100 border-[#0066CC] text-[#0066CC] font-bold';
                        }

                        return (
                          <button
                            key={i}
                            disabled={quizSubmitted}
                            onClick={() => setQuizAnswer(i)}
                            className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all ${style}`}
                          >
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Submit Button */}
                  {!quizSubmitted ? (
                    <button
                      disabled={quizAnswer === null}
                      onClick={handleSubmitQuiz}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#00A3E0] hover:opacity-95 text-white font-extrabold text-sm btn-duo-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Kiểm Tra Câu Trả Lời (+{activeModalNode.xpReward} XP)
                    </button>
                  ) : (
                    <div className="space-y-2">
                      {quizAnswer === content.quiz.correct ? (
                        <div className="p-3 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center justify-between">
                          <span>🎉 Chính xác! Bạn nhận được {activeModalNode.xpReward} XP & {activeModalNode.gemReward} 💎</span>
                        </div>
                      ) : (
                        <div className="p-3 rounded-2xl bg-rose-100 border border-rose-300 text-rose-900 text-xs font-bold">
                          Chưa chính xác! Đáp án đúng là: "{content.quiz.options[content.quiz.correct]}"
                        </div>
                      )}

                      <button
                        onClick={() => {
                          stopSpeech();
                          setActiveModalNode(null);
                        }}
                        className="w-full py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm"
                      >
                        Tiếp Tục Hành Trình
                      </button>
                    </div>
                  )}

                </div>
              );
            })()}

          </div>
        </div>
      )}

    </div>
  );
};
