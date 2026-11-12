import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Grid,
  Maximize2,
  Minimize2,
  RotateCcw,
  StickyNote,
  Sun,
  X,
} from 'lucide-react';
import { LangMode, SLIDES } from './data/slides';
import { SlideRenderer } from './components/SlideRenderer';
import { OverviewModal } from './components/OverviewModal';

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [langMode, setLangMode] = useState<LangMode>('both');
  const [animKey, setAnimKey] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 120-Minute Workshop Timer
  const [timerRunning, setTimerRunning] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const slide = SLIDES[currentIdx];

  const goToSlide = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, idx));
    setCurrentIdx(clamped);
  }, []);

  const cycleLang = useCallback(() => {
    setLangMode((prev) => (prev === 'both' ? 'en' : prev === 'en' ? 'ar' : 'both'));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    if (!timerRunning) return;
    const id = window.setInterval(() => setElapsedSec((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [timerRunning]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToSlide(currentIdx + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(currentIdx - 1);
      } else if (e.key === 'Home') {
        goToSlide(0);
      } else if (e.key === 'End') {
        goToSlide(SLIDES.length - 1);
      } else if (e.key.toLowerCase() === 'g') {
        setOverviewOpen((v) => !v);
      } else if (e.key.toLowerCase() === 'n') {
        setNotesOpen((v) => !v);
      } else if (e.key.toLowerCase() === 'r') {
        setAnimKey((k) => k + 1);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setOverviewOpen(false);
        setNotesOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentIdx, goToSlide, toggleFullscreen]);

  const formatTime = (totalSec: number) => {
    const m = String(Math.floor(totalSec / 60)).padStart(2, '0');
    const s = String(totalSec % 60).padStart(2, '0');
    return `${m}:${s} / 120:00`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    goToSlide(Math.min(SLIDES.length - 1, Math.floor(ratio * SLIDES.length)));
  };

  const langLabel =
    langMode === 'both' ? 'EN + AR' : langMode === 'en' ? 'EN Only' : 'AR فقط';

  return (
    <div className="w-screen h-screen bg-[#02050c] flex items-center justify-center p-0 sm:p-3 overflow-hidden select-none">
      {/* 16:9 Responsive Stage */}
      <div
        ref={stageRef}
        className="relative w-full h-full max-w-[1600px] max-h-[900px] bg-[#060a14] sm:rounded-xl border border-slate-800/80 shadow-2xl flex flex-col overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 18%, rgba(6, 182, 212, 0.08), transparent 42%), radial-gradient(circle at 88% 82%, rgba(245, 158, 11, 0.07), transparent 42%), linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 44px 44px, 44px 44px',
        }}
      >
        {/* Top Bar */}
        <header className="h-14 px-5 flex items-center justify-between gap-6 border-b border-slate-800/80 bg-[#050914]/90 shrink-0 z-20">
          {/* Brand */}
          <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
            <Sun className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-extrabold tracking-wide text-white">
              SCAPS-1D ACADEMY
            </span>
          </div>

          {/* Active Module Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-cyan-300 whitespace-nowrap truncate">
            <span>{slide.modEn}</span>
            {langMode !== 'en' && (
              <>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <span className="font-ar text-sky-200">{slide.modAr}</span>
              </>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setTimerRunning((r) => !r)}
              title="Toggle 120-Minute Workshop Timer"
              className={`px-2.5 py-1.5 rounded-md border text-xs font-mono-tabular inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                timerRunning
                  ? 'bg-cyan-500/15 border-cyan-400/60 text-white'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{formatTime(elapsedSec)}</span>
            </button>

            <button
              type="button"
              onClick={cycleLang}
              title="Toggle Language Mode (EN+AR / EN / AR)"
              className="px-2.5 py-1.5 rounded-md border border-cyan-500/40 bg-cyan-500/12 text-xs font-semibold text-cyan-200 hover:bg-cyan-500/20 inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{langLabel}</span>
            </button>

            <button
              type="button"
              onClick={() => setAnimKey((k) => k + 1)}
              title="Replay Animation (R)"
              className="px-2.5 py-1.5 rounded-md border border-slate-800 bg-slate-900/80 text-xs font-medium text-slate-300 hover:border-cyan-500/50 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Replay</span>
            </button>

            <button
              type="button"
              onClick={() => setNotesOpen((v) => !v)}
              title="Trainer Notes (N)"
              className={`px-2.5 py-1.5 rounded-md border text-xs font-medium inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                notesOpen
                  ? 'bg-amber-500/15 border-amber-400/60 text-amber-200'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white'
              }`}
            >
              <StickyNote className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Notes</span>
            </button>

            <button
              type="button"
              onClick={() => setOverviewOpen(true)}
              title="All 54 Slides (G)"
              className="px-2.5 py-1.5 rounded-md border border-slate-800 bg-slate-900/80 text-xs font-medium text-slate-300 hover:border-cyan-500/50 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              title="Fullscreen (F)"
              className="px-2 py-1.5 rounded-md border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500/50 hover:text-white inline-flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              {isFullscreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </header>

        {/* Main Slide Stage */}
        <main className="flex-1 min-h-0 px-6 sm:px-9 py-4 overflow-hidden relative z-10">
          <SlideRenderer slide={slide} langMode={langMode} animKey={animKey} />
        </main>

        {/* Trainer Notes Drawer */}
        {notesOpen && (
          <aside className="absolute bottom-14 right-5 w-80 sm:w-96 bg-[#090e1c]/95 border border-amber-500/60 rounded-xl p-4 z-40 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800">
              <strong className="text-xs font-bold text-amber-400">
                Trainer Guidance · ملاحظات المدرب
              </strong>
              <button
                type="button"
                onClick={() => setNotesOpen(false)}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                aria-label="Close trainer notes"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{slide.notes}</p>
          </aside>
        )}

        {/* Bottom Navigation Bar */}
        <footer className="h-12 px-5 flex items-center justify-between gap-4 border-t border-slate-800/80 bg-[#050914]/90 shrink-0 z-20">
          <div className="font-mono-tabular text-xs font-semibold text-slate-300 min-w-[68px]">
            {String(slide.id).padStart(2, '0')} / {SLIDES.length}
          </div>

          <div
            onClick={handleProgressClick}
            role="progressbar"
            aria-valuenow={slide.id}
            aria-valuemin={1}
            aria-valuemax={SLIDES.length}
            title="Click anywhere on track to jump to a slide"
            className="flex-1 h-2 bg-slate-800/90 rounded-full cursor-pointer overflow-hidden"
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${((currentIdx + 1) / SLIDES.length) * 100}%`,
                background: 'linear-gradient(90deg, #06b6d4, #f59e0b)',
              }}
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => goToSlide(currentIdx - 1)}
              disabled={currentIdx === 0}
              className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900/80 text-xs font-semibold text-slate-200 hover:border-cyan-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              type="button"
              onClick={() => goToSlide(currentIdx + 1)}
              disabled={currentIdx === SLIDES.length - 1}
              className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900/80 text-xs font-semibold text-slate-200 hover:border-cyan-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>

        {/* 54-Slide Grid Navigator Modal */}
        <OverviewModal
          isOpen={overviewOpen}
          currentIdx={currentIdx}
          langMode={langMode}
          onSelect={goToSlide}
          onClose={() => setOverviewOpen(false)}
        />
      </div>
    </div>
  );
}
