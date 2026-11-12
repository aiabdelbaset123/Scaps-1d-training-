import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { LangMode, UIWalkthroughType, UI_WALKTHROUGHS } from '../data/slides';

interface UIWalkthroughProps {
  uiType: UIWalkthroughType;
  langMode: LangMode;
}

export const UIWalkthrough: React.FC<UIWalkthroughProps> = ({ uiType, langMode }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const cfg = UI_WALKTHROUGHS[uiType];
  const current = cfg.items[selectedIdx] ?? cfg.items[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full min-h-0 items-stretch">
      <div className="bg-[#0e1628] border border-slate-700/70 rounded-xl flex flex-col overflow-hidden">
        <div className="bg-[#080d1a] px-4 py-2.5 text-xs font-mono-tabular text-slate-400 flex items-center justify-between border-b border-slate-800">
          <span>{cfg.title}</span>
          <span className="text-cyan-400">Select an item</span>
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center gap-2.5">
          {cfg.items.map((item, idx) => {
            const active = idx === selectedIdx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                  active
                    ? 'bg-amber-500/12 border-amber-400/70 text-white'
                    : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white'
                }`}
              >
                <span className="text-sm font-semibold">{item.label}</span>
                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    active ? 'text-amber-400 translate-x-0.5' : 'text-slate-500'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-[#0e1628] border border-cyan-500/30 rounded-xl p-6 flex flex-col justify-center gap-4">
        <div className="text-xs font-semibold tracking-wider text-amber-400">
          Inspector · شرح الأداة
        </div>
        <h3 className="text-xl font-bold text-white leading-snug">{current.label}</h3>
        {langMode !== 'ar' && (
          <p className="text-base text-slate-200 leading-relaxed">{current.en}</p>
        )}
        {langMode === 'both' && <hr className="border-slate-800" />}
        {langMode !== 'en' && (
          <p className="font-ar text-lg text-amber-100 leading-relaxed text-right">
            {current.ar}
          </p>
        )}
      </div>
    </div>
  );
};
