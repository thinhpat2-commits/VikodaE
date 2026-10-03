import React from 'react';
import { DetailedSpeechEvaluation } from '../services/speechService';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export interface PronunciationFeedbackCardProps {
  spokenText: string;
  evaluation: DetailedSpeechEvaluation;
  extraTip?: string;
  className?: string;
}

/**
 * Unified Pronunciation Diagnostic Feedback Card (SSOT)
 * Provides clean, consistent word-by-word phonetic analysis across the entire application.
 */
export const PronunciationFeedbackCard: React.FC<PronunciationFeedbackCardProps> = ({
  spokenText,
  evaluation,
  extraTip,
  className = '',
}) => {
  const { score, passed, feedback, words } = evaluation;

  const scoreBadgeStyle =
    score >= 75
      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
      : score >= 50
      ? 'bg-amber-100 text-amber-800 border-amber-300'
      : 'bg-rose-100 text-rose-800 border-rose-300';

  return (
    <div
      className={`p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs space-y-3.5 text-left animate-in fade-in ${className}`}
    >
      {/* Header: Score Badge & Pedagogical Summary */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className={`text-base font-black px-3 py-1 rounded-xl border ${scoreBadgeStyle}`}>
            {score}%
          </span>
          <span className="text-xs font-bold text-slate-800">
            {passed ? 'Đạt chuẩn phát âm!' : 'Cần cải thiện'}
          </span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium italic">
          {feedback}
        </span>
      </div>

      {/* Target Word-by-Word Breakdown */}
      {words.length > 0 && (
        <div className="space-y-1.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
            Khẩu hình chi tiết từng từ:
          </span>
          <div className="flex flex-wrap gap-1.5 text-xs font-black">
            {words.map((item, idx) => {
              if (item.status === 'correct') {
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs"
                    title="Phát âm chuẩn xác"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{item.word}</span>
                  </span>
                );
              }

              if (item.status === 'close') {
                return (
                  <span
                    key={idx}
                    className="inline-flex flex-col px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-300 shadow-2xs"
                    title={`Nghe tương tự: ${item.spokenMatch || item.word}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>{item.word}</span>
                    </span>
                    {item.spokenMatch && item.spokenMatch !== item.word && (
                      <span className="text-[9px] text-amber-600 font-normal">
                        ({item.spokenMatch})
                      </span>
                    )}
                  </span>
                );
              }

              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-dashed border-rose-300"
                  title="Chưa bắt được âm từ này, hãy đọc rõ hơn"
                >
                  <XCircle className="w-3 h-3 text-rose-500 shrink-0" />
                  <span className="line-through decoration-rose-400">{item.word}</span>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Raw Transcript Bubble */}
      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
        <span className="text-[10px] text-slate-400 uppercase font-black block mb-0.5">
          Bạn vừa đọc:
        </span>
        <span className="italic font-medium text-slate-800">"{spokenText}"</span>
      </div>

      {/* Optional Pro-Tip */}
      {extraTip && (
        <p className="text-[11px] text-sky-800 bg-sky-50/80 p-2 rounded-xl border border-sky-100 font-medium">
          💡 <strong>Mẹo chuyên gia:</strong> {extraTip}
        </p>
      )}
    </div>
  );
};
