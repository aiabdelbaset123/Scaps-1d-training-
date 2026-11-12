import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { LangMode, QUIZ_QUESTIONS } from '../data/slides';

interface QuizSlideProps {
  langMode: LangMode;
}

export const QuizSlide: React.FC<QuizSlideProps> = ({ langMode }) => {
  const [quizIdx, setQuizIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const q = QUIZ_QUESTIONS[quizIdx];
  const answered = selectedIdx !== null;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelectedIdx(idx);
    if (q.options[idx].ok) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (quizIdx < QUIZ_QUESTIONS.length - 1) {
      setQuizIdx((prev) => prev + 1);
      setSelectedIdx(null);
    } else {
      setQuizIdx(0);
      setScore(0);
      setSelectedIdx(null);
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full min-h-0">
      <div className="flex items-center justify-between text-sm font-mono-tabular">
        <span className="text-cyan-400">
          Question {quizIdx + 1} / {QUIZ_QUESTIONS.length}
        </span>
        <span className="text-emerald-400 font-semibold">
          Score: {score} / {QUIZ_QUESTIONS.length}
        </span>
      </div>

      <div className="flex-1 bg-[#0e1628] border border-cyan-500/30 rounded-xl p-6 flex flex-col justify-between gap-4 min-h-0">
        <div className="space-y-2">
          {langMode !== 'ar' && <h3 className="text-lg font-bold text-white">{q.qEn}</h3>}
          {langMode !== 'en' && (
            <h3 className="font-ar text-xl font-bold text-amber-300 text-right">{q.qAr}</h3>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          {q.options.map((op, i) => {
            const isSelected = selectedIdx === i;
            let stateClasses =
              'bg-slate-900/80 border-slate-800 hover:border-cyan-500/60 hover:bg-cyan-500/10 text-slate-100';
            if (answered) {
              if (op.ok) {
                stateClasses = 'bg-emerald-500/15 border-emerald-500/70 text-emerald-100';
              } else if (isSelected && !op.ok) {
                stateClasses = 'bg-rose-500/15 border-rose-500/70 text-rose-100';
              } else {
                stateClasses = 'bg-slate-900/50 border-slate-800/70 text-slate-400';
              }
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={`w-full text-left px-4 py-3.5 rounded-lg border transition-colors flex items-center justify-between gap-4 cursor-pointer disabled:cursor-default ${stateClasses}`}
              >
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  {langMode !== 'ar' && <span className="text-sm font-medium">{op.en}</span>}
                  {langMode !== 'en' && (
                    <span className="font-ar text-base text-amber-100 text-right">{op.ar}</span>
                  )}
                </div>
                {answered && op.ok && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                {answered && isSelected && !op.ok && (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
          <div className="text-sm font-semibold">
            {answered ? (
              q.options[selectedIdx].ok ? (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Correct · إجابة صحيحة
                </span>
              ) : (
                <span className="text-rose-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  Incorrect — Correct answer highlighted
                </span>
              )
            ) : (
              <span className="text-slate-400 text-xs">Select an option above to check your answer</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-cyan-600/30 border border-slate-700 hover:border-cyan-400/60 text-sm font-semibold text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            {quizIdx < QUIZ_QUESTIONS.length - 1 ? (
              'Next Question'
            ) : (
              <>
                <RotateCcw className="w-4 h-4" />
                Restart Quiz
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
