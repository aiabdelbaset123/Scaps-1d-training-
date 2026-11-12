import React from 'react';
import { motion } from 'motion/react';
import { LangMode, SlideData } from '../data/slides';
import { SlideSVG } from './SlideSVG';
import { SlideChart } from './SlideChart';
import { UIWalkthrough } from './UIWalkthrough';
import { InteractiveSim } from './InteractiveSim';
import { QuizSlide } from './QuizSlide';

interface SlideRendererProps {
  slide: SlideData;
  langMode: LangMode;
  animKey: number;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, langMode, animKey }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  };

  if (slide.type === 'hero') {
    return (
      <motion.section
        key={`${slide.id}-${animKey}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col items-center justify-center text-center px-6 py-4 gap-5"
      >
        {langMode !== 'ar' && (
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-balance"
            style={{
              background: 'linear-gradient(135deg, #ffffff 10%, #38bdf8 55%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {slide.titleEn}
          </h1>
        )}

        {langMode !== 'en' && (
          <h2 className="font-ar text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-200 leading-snug text-balance">
            {slide.titleAr}
          </h2>
        )}

        <div className="max-w-3xl space-y-2.5">
          {langMode !== 'ar' && (
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{slide.subEn}</p>
          )}
          {langMode !== 'en' && (
            <p className="font-ar text-lg sm:text-xl text-slate-200 leading-relaxed text-center">
              {slide.subAr}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 text-sm font-medium text-cyan-300/90 border-t border-slate-800/80">
          {slide.badges.map((b, i) => (
            <React.Fragment key={b}>
              {i > 0 && (
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
              )}
              <span className="font-mono-tabular">{b}</span>
            </React.Fragment>
          ))}
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      key={`${slide.id}-${animKey}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col min-h-0"
    >
      {/* Slide Header */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 mb-4 border-b border-slate-800/90 shrink-0">
        {langMode !== 'ar' && (
          <h1
            className={`text-xl sm:text-2xl lg:text-[26px] font-extrabold leading-tight text-balance ${
              langMode === 'both' ? 'sm:max-w-[54%]' : 'w-full'
            }`}
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #bae6fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <span className="font-mono-tabular text-cyan-400 mr-1.5">
              {String(slide.id).padStart(2, '0')}.
            </span>
            {slide.titleEn}
          </h1>
        )}

        {langMode !== 'en' && (
          <h2
            className={`font-ar text-xl sm:text-2xl font-extrabold text-amber-400 leading-snug text-right text-balance ${
              langMode === 'both' ? 'sm:max-w-[44%]' : 'w-full'
            }`}
          >
            {slide.titleAr}
          </h2>
        )}
      </header>

      {/* Slide Body */}
      <div className="flex-1 min-h-0 flex flex-col">
        {slide.type === 'timeline' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 h-full min-h-0 items-stretch">
            {slide.items.map((it) => (
              <div
                key={it.step}
                className="bg-[#0e1628] border border-slate-800 rounded-xl p-4 flex flex-col justify-between gap-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-tabular text-lg font-extrabold text-cyan-400">
                    {it.step}
                  </span>
                  <span className="font-mono-tabular text-xs font-semibold text-amber-400">
                    {it.time}
                  </span>
                </div>
                <div className="space-y-2">
                  {langMode !== 'ar' && (
                    <div className="text-sm font-bold text-white leading-snug">{it.en}</div>
                  )}
                  {langMode !== 'en' && (
                    <div className="font-ar text-sm font-semibold text-amber-100 leading-snug text-right">
                      {it.ar}
                    </div>
                  )}
                </div>
                <div className="font-mono-tabular text-xs text-slate-400 pt-2 border-t border-slate-800/70">
                  Slides {it.slides}
                </div>
              </div>
            ))}
          </div>
        )}

        {slide.type === 'comparison' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full min-h-0 items-stretch">
            <div className="bg-[#0e1628] border border-cyan-500/35 rounded-xl p-5 flex flex-col justify-between gap-4 overflow-y-auto">
              <div className="space-y-3">
                <div className="text-xs font-semibold tracking-wider text-cyan-400">Comparison A</div>
                {langMode !== 'ar' && (
                  <h3 className="text-lg font-bold text-white">{slide.leftTitleEn}</h3>
                )}
                {langMode !== 'en' && (
                  <h3 className="font-ar text-lg font-bold text-cyan-300 text-right">
                    {slide.leftTitleAr}
                  </h3>
                )}
              </div>

              {langMode !== 'ar' && (
                <ul className="space-y-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {slide.leftPointsEn.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 shrink-0 mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}

              {langMode === 'both' && <hr className="border-slate-800" />}

              {langMode !== 'en' && (
                <ul className="font-ar space-y-2 text-base sm:text-lg text-amber-100 leading-relaxed text-right">
                  {slide.leftPointsAr.map((p, idx) => (
                    <li key={idx} className="flex items-start justify-end gap-2.5">
                      <span>{p}</span>
                      <span className="text-amber-400 shrink-0 mt-0.5">◂</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-[#0e1628] border border-amber-500/35 rounded-xl p-5 flex flex-col justify-between gap-4 overflow-y-auto">
              <div className="space-y-3">
                <div className="text-xs font-semibold tracking-wider text-amber-400">Comparison B</div>
                {langMode !== 'ar' && (
                  <h3 className="text-lg font-bold text-white">{slide.rightTitleEn}</h3>
                )}
                {langMode !== 'en' && (
                  <h3 className="font-ar text-lg font-bold text-amber-300 text-right">
                    {slide.rightTitleAr}
                  </h3>
                )}
              </div>

              {langMode !== 'ar' && (
                <ul className="space-y-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {slide.rightPointsEn.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 shrink-0 mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}

              {langMode === 'both' && <hr className="border-slate-800" />}

              {langMode !== 'en' && (
                <ul className="font-ar space-y-2 text-base sm:text-lg text-amber-100 leading-relaxed text-right">
                  {slide.rightPointsAr.map((p, idx) => (
                    <li key={idx} className="flex items-start justify-end gap-2.5">
                      <span>{p}</span>
                      <span className="text-amber-400 shrink-0 mt-0.5">◂</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {slide.type === 'split-diagram' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full min-h-0 items-stretch">
            <div className="lg:col-span-5 bg-[#0e1628] border border-cyan-500/30 rounded-xl p-5 flex flex-col justify-between gap-4 overflow-y-auto">
              {langMode !== 'ar' && (
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                  {slide.enPoints.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 shrink-0 mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}

              {langMode === 'both' && <hr className="border-slate-800" />}

              {langMode !== 'en' && (
                <ul className="font-ar space-y-2.5 text-base sm:text-[17px] text-amber-100 leading-relaxed text-right">
                  {slide.arPoints.map((p, idx) => (
                    <li key={idx} className="flex items-start justify-end gap-2.5">
                      <span>{p}</span>
                      <span className="text-amber-400 shrink-0 mt-0.5">◂</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="lg:col-span-7 bg-[#070c1a] border border-slate-800 rounded-xl p-4 flex items-center justify-center min-h-0">
              <SlideSVG type={slide.svgType} />
            </div>
          </div>
        )}

        {slide.type === 'equations' && (
          <div className="flex flex-col justify-center gap-4 h-full min-h-0 overflow-y-auto">
            <div className="space-y-3">
              {slide.equations.map((eq, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="text-xs font-semibold text-cyan-400">{eq.label}</div>
                  <div className="font-mono-tabular text-base sm:text-xl text-white bg-cyan-500/8 border border-cyan-500/30 rounded-xl py-3.5 px-5 text-center tracking-wide">
                    {eq.formula}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`grid gap-4 ${
                langMode === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {langMode !== 'ar' && (
                <div className="bg-[#0e1628] border border-slate-800 rounded-xl p-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {slide.enText}
                </div>
              )}
              {langMode !== 'en' && (
                <div className="bg-[#0e1628] border border-amber-500/30 rounded-xl p-4 font-ar text-base sm:text-lg text-amber-100 leading-relaxed text-right">
                  {slide.arText}
                </div>
              )}
            </div>
          </div>
        )}

        {slide.type === 'chart' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full min-h-0 items-stretch">
            <div className="lg:col-span-5 bg-[#0e1628] border border-emerald-500/30 rounded-xl p-5 flex flex-col justify-center gap-4 overflow-y-auto">
              <div className="text-xs font-semibold tracking-wider text-emerald-400">
                Data Insight · قراءة الرسم
              </div>
              {langMode !== 'ar' && (
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">{slide.enText}</p>
              )}
              {langMode === 'both' && <hr className="border-slate-800" />}
              {langMode !== 'en' && (
                <p className="font-ar text-base sm:text-lg text-amber-100 leading-relaxed text-right">
                  {slide.arText}
                </p>
              )}
            </div>

            <div className="lg:col-span-7 bg-[#070c1a] border border-slate-800 rounded-xl p-4 flex flex-col min-h-0">
              <div className="flex-1 min-h-0">
                <SlideChart chartId={slide.chartId} />
              </div>
              <div className="text-xs text-slate-500 text-center mt-2">{slide.caption}</div>
            </div>
          </div>
        )}

        {slide.type === 'lab-table' && (
          <div className="flex flex-col justify-between gap-4 h-full min-h-0">
            <div className="bg-[#0e1628] border border-cyan-500/30 rounded-xl overflow-auto flex-1 min-h-0">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-cyan-500/12 border-b border-slate-700/80">
                    {slide.headers.map((h) => (
                      <th key={h} className="py-3 px-4 text-xs sm:text-sm font-bold text-cyan-300">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slide.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-b border-slate-800/80 hover:bg-slate-800/40 transition-colors"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`py-2.5 px-4 text-xs sm:text-sm ${
                            cIdx === 0
                              ? 'font-semibold text-white'
                              : 'font-mono-tabular text-slate-200'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={`grid gap-4 shrink-0 ${
                langMode === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {langMode !== 'ar' && (
                <div className="bg-[#0e1628] border border-emerald-500/30 rounded-xl p-3.5 text-sm text-slate-200">
                  <strong className="text-emerald-400 mr-1.5">Trainer Tip:</strong>
                  {slide.tipEn}
                </div>
              )}
              {langMode !== 'en' && (
                <div className="bg-[#0e1628] border border-amber-500/30 rounded-xl p-3.5 font-ar text-base text-amber-100 text-right">
                  <strong className="text-amber-400 ml-1.5">نصيحة المدرب:</strong>
                  {slide.tipAr}
                </div>
              )}
            </div>
          </div>
        )}

        {slide.type === 'ui-walkthrough' && (
          <UIWalkthrough uiType={slide.uiType} langMode={langMode} />
        )}

        {slide.type === 'interactive-sim' && (
          <InteractiveSim simType={slide.simType} langMode={langMode} />
        )}

        {slide.type === 'quiz' && <QuizSlide langMode={langMode} />}
      </div>
    </motion.section>
  );
};
