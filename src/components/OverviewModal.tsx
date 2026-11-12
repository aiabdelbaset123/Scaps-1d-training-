import React, { useState } from 'react';
import { X } from 'lucide-react';
import { LangMode, MODULES, SLIDES } from '../data/slides';

interface OverviewModalProps {
  isOpen: boolean;
  currentIdx: number;
  langMode: LangMode;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export const OverviewModal: React.FC<OverviewModalProps> = ({
  isOpen,
  currentIdx,
  langMode,
  onSelect,
  onClose,
}) => {
  const [filterMod, setFilterMod] = useState<string>('ALL');

  if (!isOpen) return null;

  const filteredSlides = SLIDES.map((slide, idx) => ({ slide, idx })).filter(
    ({ slide }) => filterMod === 'ALL' || slide.modCode === filterMod
  );

  return (
    <div className="absolute inset-0 z-50 bg-[#030610]/95 backdrop-blur-md flex flex-col p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white">
            Workshop Slide Navigator (54 Slides · 120 Min)
          </h2>
          {langMode !== 'en' && (
            <p className="font-ar text-sm text-amber-400 text-right sm:text-left mt-0.5">
              فهرس الشرائح التدريبية (٥٤ شريحة · ١٢٠ دقيقة)
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <X className="w-4 h-4" />
          Close (G)
        </button>
      </div>

      {/* Module Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 shrink-0">
        <button
          type="button"
          onClick={() => setFilterMod('ALL')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
            filterMod === 'ALL'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          All (54)
        </button>
        {MODULES.map((m) => (
          <button
            key={m.code}
            type="button"
            onClick={() => setFilterMod(m.code)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              filterMod === m.code
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            {m.en}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 overflow-y-auto pr-1 flex-1 content-start">
        {filteredSlides.map(({ slide, idx }) => {
          const isCurrent = idx === currentIdx;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => {
                onSelect(idx);
                onClose();
              }}
              className={`text-left p-3 rounded-lg border transition-colors flex flex-col gap-1.5 cursor-pointer ${
                isCurrent
                  ? 'bg-cyan-500/15 border-cyan-400 text-white'
                  : 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/70'
              }`}
            >
              <div className="font-mono-tabular text-[11px] font-semibold text-amber-400">
                {String(slide.id).padStart(2, '0')} · {slide.modCode}
              </div>
              {langMode !== 'ar' && (
                <div className="text-xs font-semibold text-slate-100 leading-snug line-clamp-2">
                  {slide.titleEn}
                </div>
              )}
              {langMode !== 'en' && (
                <div className="font-ar text-xs text-cyan-200 leading-snug line-clamp-2 text-right">
                  {slide.titleAr}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
