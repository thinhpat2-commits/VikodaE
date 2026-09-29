import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  MessageSquare, 
  Volume2, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  Award, 
  ChevronRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { ROLEPLAY_SCENARIOS } from '../data/roleplayScenarios';
import { RoleplayScenario, RoleplayOption } from '../types';
import { playSpeech, stopSpeech } from '../services/speechService';

interface RoleplaySimulationProps {
  speechRate: number;
  onCompleteScenario: (scenarioId: string, score: number) => void;
}

export const RoleplaySimulation: React.FC<RoleplaySimulationProps> = ({
  speechRate,
  onCompleteScenario
}) => {
  const [selectedScenario, setSelectedScenario] = useState<RoleplayScenario>(ROLEPLAY_SCENARIOS[0]);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<RoleplayOption | null>(null);
  const [accumulatedScore, setAccumulatedScore] = useState<number>(0);
  const [answeredTurns, setAnsweredTurns] = useState<{ option: RoleplayOption; turnIndex: number }[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isPlayingPartnerAudio, setIsPlayingPartnerAudio] = useState<boolean>(false);

  const currentTurn = selectedScenario.dialogue[currentTurnIndex];

  const handleSelectScenario = (sc: RoleplayScenario) => {
    setSelectedScenario(sc);
    resetSimulation();
  };

  const resetSimulation = () => {
    setCurrentTurnIndex(0);
    setSelectedOption(null);
    setAccumulatedScore(0);
    setAnsweredTurns([]);
    setIsCompleted(false);
    stopSpeech();
    setIsPlayingPartnerAudio(false);
  };

  const handlePlayAudio = (text: string) => {
    if (isPlayingPartnerAudio) {
      stopSpeech();
      setIsPlayingPartnerAudio(false);
    } else {
      setIsPlayingPartnerAudio(true);
      playSpeech(text, speechRate, 'en-US', () => setIsPlayingPartnerAudio(false));
    }
  };

  const handleChooseOption = (option: RoleplayOption) => {
    if (selectedOption) return; // already picked this turn
    setSelectedOption(option);
    const newTotal = accumulatedScore + (option.score || 0);
    setAccumulatedScore(newTotal);
    setAnsweredTurns([...answeredTurns, { option, turnIndex: currentTurnIndex }]);
  };

  const handleNextTurn = () => {
    if (currentTurnIndex < selectedScenario.dialogue.length - 1) {
      setCurrentTurnIndex(currentTurnIndex + 1);
      setSelectedOption(null);
    } else {
      // Completed scenario!
      setIsCompleted(true);
      const averageScore = Math.round(accumulatedScore / selectedScenario.dialogue.length);
      onCompleteScenario(selectedScenario.id, averageScore);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center space-x-2">
            <span>Mô Phỏng Tình Huống Đối Thoại Thực Tế (Roleplay)</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Luyện phản xạ đối thoại với sếp nước ngoài, deal lương, và xử lý khủng hoảng khách hàng.
          </p>
        </div>

        <button
          onClick={resetSimulation}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Bắt đầu lại</span>
        </button>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {ROLEPLAY_SCENARIOS.map((sc) => {
          const isSelected = selectedScenario.id === sc.id;
          return (
            <div
              key={sc.id}
              onClick={() => handleSelectScenario(sc)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-slate-800/90 border-amber-500/70 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1.5">
                <span className={`px-2 py-0.5 rounded ${
                  sc.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400' : sc.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-400' : 'bg-purple-500/10 text-purple-400'
                }`}>
                  {sc.difficulty}
                </span>
                <span className="text-slate-400">{sc.durationMinutes} phút</span>
              </div>
              <h4 className={`text-sm font-bold leading-tight ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                {sc.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {sc.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Simulation View */}
      {!isCompleted ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
            <span>
              Lượt thoại: <strong className="text-white">{currentTurnIndex + 1}</strong> / {selectedScenario.dialogue.length}
            </span>
            <div className="flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Điểm tích lũy: <strong className="text-amber-400">{accumulatedScore}</strong></span>
            </div>
          </div>

          {/* Partner Dialogue Box */}
          <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="text-3xl shrink-0 p-2 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              {currentTurn.avatar}
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-white text-sm">{currentTurn.speakerName}</span>
                  <span className="text-xs text-slate-400 ml-2">({currentTurn.speakerRole})</span>
                </div>

                <button
                  onClick={() => handlePlayAudio(currentTurn.message || currentTurn.text || '')}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs border transition-colors ${
                    isPlayingPartnerAudio
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlayingPartnerAudio ? 'Dừng' : 'Nghe sếp nói'}</span>
                </button>
              </div>

              <p className="text-base text-slate-100 font-medium leading-relaxed">
                "{currentTurn.message}"
              </p>

              <p className="text-xs text-slate-400 italic">
                Dịch: {currentTurn.vietnameseTranslation}
              </p>

              {currentTurn.culturalNote && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 mt-2">
                  <span className="font-bold text-amber-400 mr-1">Văn hóa giao tiếp:</span>
                  {currentTurn.culturalNote}
                </div>
              )}
            </div>
          </div>

          {/* User's Decision Options */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Chọn Câu Trả Lời Của Bạn:
            </h4>

            <div className="space-y-3">
              {currentTurn.options?.map((option: RoleplayOption, idx: number) => {
                const isChosen = selectedOption === option;
                const isSelectedAny = selectedOption !== null;

                let borderStyle = 'border-slate-800 hover:border-slate-700 bg-slate-950/60';
                if (isSelectedAny) {
                  if (option.tone === 'perfect') {
                    borderStyle = 'border-emerald-500/80 bg-emerald-950/20';
                  } else if (isChosen) {
                    borderStyle = 'border-rose-500/80 bg-rose-950/20';
                  } else {
                    borderStyle = 'border-slate-800/40 bg-slate-950/30 opacity-60';
                  }
                }

                return (
                  <div
                    key={idx}
                    onClick={() => handleChooseOption(option)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${borderStyle}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 flex-1">
                        <p className="text-sm font-semibold text-slate-100">
                          {option.text}
                        </p>
                      </div>

                      {isSelectedAny && (
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded shrink-0 ${
                          option.tone === 'perfect'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-rose-500/20 text-rose-400'
                        }`}>
                          {option.score} điểm
                        </span>
                      )}
                    </div>

                    {/* Feedback when option is chosen */}
                    {isSelectedAny && (isChosen || option.tone === 'perfect') && (
                      <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                        <span className="font-bold text-amber-400 mr-1">Phân tích:</span>
                        {option.feedback}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          {selectedOption && (
            <div className="flex justify-end pt-3">
              <button
                onClick={handleNextTurn}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>
                  {currentTurnIndex < selectedScenario.dialogue.length - 1 ? 'Lượt thoại tiếp theo' : 'Xem kết quả tổng kết'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Scenario Completed Result Screen */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center space-y-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white">Xuất Sắc! Hoàn Thành Tình Huống</h2>
            <p className="text-sm text-slate-400 mt-1">
              Bạn đã xử lý thành công kịch bản: <span className="text-amber-400 font-semibold">{selectedScenario.title}</span>
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto">
            <div className="text-3xl font-extrabold text-amber-400">
              {Math.round(accumulatedScore / selectedScenario.dialogue.length)} / 100
            </div>
            <div className="text-xs text-slate-400 mt-1">Điểm Phản Xạ Doanh Nghiệp (Corporate Readiness)</div>
          </div>

          <div className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed text-left p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <span className="font-bold text-amber-400 block mb-1">Đánh giá chung:</span>
            Bạn đã thể hiện tư duy làm chủ công việc (ownership), biết công nhận cảm xúc của đối phương và chủ động đưa ra giải pháp rõ ràng thay vì biện minh.
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={resetSimulation}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              Luyện lại tình huống này
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
