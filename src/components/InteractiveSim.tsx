import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { LangMode, SimType } from '../data/slides';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

interface InteractiveSimProps {
  simType: SimType;
  langMode: LangMode;
}

export const InteractiveSim: React.FC<InteractiveSimProps> = ({ simType, langMode }) => {
  // Sim 1: Band Builder
  const [chi, setChi] = useState(4.0);
  const [eg, setEg] = useState(1.55);

  // Sim 2: J-V Explorer
  const [rs, setRs] = useState(1.5);
  const [rsh, setRsh] = useState(1000);
  const jvCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const jvChartRef = useRef<Chart | null>(null);

  // Sim 3: SRH Defect Density
  const [logNt, setLogNt] = useState(14.5);
  const defCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const defChartRef = useRef<Chart | null>(null);

  // Single-diode Newton solver for J-V
  const jvResult = useMemo(() => {
    const JL = 23.6;
    const J0 = 1e-9;
    const nVt = 0.042;
    const ptsV: string[] = [];
    const ptsJ: number[] = [];
    let maxP = 0;
    let voc = 0;
    let jsc = 0;

    for (let v = 0; v <= 1.051; v += 0.025) {
      let j = JL;
      for (let k = 0; k < 12; k++) {
        const vd = v + j * 1e-3 * rs;
        const expTerm = J0 * (Math.exp(Math.min(vd / nVt, 35)) - 1);
        const f = j - (JL - expTerm - (vd * 1000) / rsh);
        const df = 1 + (J0 / nVt) * Math.exp(Math.min(vd / nVt, 35)) * 1e-3 * rs + rs / rsh;
        j -= f / df;
      }
      ptsV.push(`${v.toFixed(2)}V`);
      ptsJ.push(Number(j.toFixed(2)));
      if (v === 0) jsc = j;
      if (j > 0 && v * j > maxP) maxP = v * j;
      if (j >= 0) voc = v;
    }
    const ff = voc > 0 && jsc > 0 ? (maxP / (voc * jsc)) * 100 : 0;
    return { ptsV, ptsJ, voc, jsc, ff, eta: maxP };
  }, [rs, rsh]);

  useEffect(() => {
    if (simType !== 'jvSim') return;
    const canvas = jvCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (jvChartRef.current) jvChartRef.current.destroy();
    jvChartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: jvResult.ptsV,
        datasets: [
          {
            label: 'Simulated J-V',
            data: jvResult.ptsJ,
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245,158,11,0.16)',
            fill: true,
            tension: 0.25,
            borderWidth: 3,
          },
        ],
      },
      options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 0, max: 26, title: { display: true, text: 'J (mA/cm²)' } } },
      },
    });

    return () => {
      if (jvChartRef.current) {
        jvChartRef.current.destroy();
        jvChartRef.current = null;
      }
    };
  }, [simType, jvResult]);

  // SRH Defect Physics calculations
  const defectResult = useMemo(() => {
    const nt = Math.pow(10, logNt);
    const tauNs = (1 / (1e-14 * 1e7 * nt)) * 1e9;
    const D = 0.0259 * 10;
    const L = Math.sqrt(D * tauNs * 1e-9) * 1e4;
    const voc = Math.max(0.65, 1.24 - 0.062 * (logNt - 12.5));
    const jsc = Math.min(23.2, 23.2 * (1 - Math.exp(-L / 0.35)));
    const eta = voc * jsc * 0.79;
    const V = [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0, 1.1, 1.2];
    const J = V.map((v) => Math.max(0, Number((jsc * (1 - Math.exp((v - voc) / 0.055))).toFixed(2))));
    return { tauNs, L, voc, eta, labels: V.map((v) => `${v.toFixed(1)}V`), J };
  }, [logNt]);

  useEffect(() => {
    if (simType !== 'defectSim') return;
    const canvas = defCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (defChartRef.current) defChartRef.current.destroy();
    defChartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: defectResult.labels,
        datasets: [
          {
            label: `J-V @ Nt = 10^${logNt.toFixed(1)} cm⁻³`,
            data: defectResult.J,
            borderColor: '#a78bfa',
            backgroundColor: 'rgba(139,92,246,0.18)',
            fill: true,
            tension: 0.25,
            borderWidth: 3,
          },
        ],
      },
      options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 0, max: 25, title: { display: true, text: 'J (mA/cm²)' } } },
      },
    });

    return () => {
      if (defChartRef.current) {
        defChartRef.current.destroy();
        defChartRef.current = null;
      }
    };
  }, [simType, defectResult, logNt]);

  if (simType === 'bandSim') {
    const yVac = 30;
    const scale = 30;
    const yEc = yVac + chi * scale;
    const hEg = eg * scale;
    const yEv = yEc + hEg;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full min-h-0 items-stretch">
        <div className="lg:col-span-5 bg-[#0e1628] border border-cyan-500/30 rounded-xl p-5 flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-cyan-400">Live Band Builder</div>
            {langMode !== 'ar' && (
              <p className="text-sm text-slate-200 leading-relaxed">
                Adjust Bandgap (E_g) and Electron Affinity (χ) relative to Vacuum Level (0 eV).
              </p>
            )}
            {langMode !== 'en' && (
              <p className="font-ar text-base text-amber-100 leading-relaxed text-right">
                حرّك منزلقات فجوة الطاقة والألفة الإلكترونية لترى تغير مستويات التوصيل والتكافؤ فوراً.
              </p>
            )}
          </div>

          <div className="space-y-4">
            <label className="block space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Electron Affinity χ (eV)</span>
                <span className="font-mono-tabular font-semibold text-amber-400">{chi.toFixed(2)} eV</span>
              </div>
              <input
                type="range"
                min={3.0}
                max={4.8}
                step={0.05}
                value={chi}
                onChange={(e) => setChi(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </label>

            <label className="block space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Bandgap E_g (eV)</span>
                <span className="font-mono-tabular font-semibold text-amber-400">{eg.toFixed(2)} eV</span>
              </div>
              <input
                type="range"
                min={0.9}
                max={3.4}
                step={0.05}
                value={eg}
                onChange={(e) => setEg(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-3 text-center">
              <div className="text-xs text-slate-400">Ec (vs Vacuum)</div>
              <div className="font-mono-tabular text-lg font-bold text-emerald-400">{(-chi).toFixed(2)} eV</div>
            </div>
            <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-3 text-center">
              <div className="text-xs text-slate-400">Ev = Ec - Eg</div>
              <div className="font-mono-tabular text-lg font-bold text-amber-400">
                {(-(chi + eg)).toFixed(2)} eV
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#070c1a] border border-slate-800 rounded-xl p-4 flex items-center justify-center min-h-0">
          <svg viewBox="0 0 500 320" className="w-full h-full max-h-full">
            <line x1="40" y1="30" x2="460" y2="30" stroke="#94a3b8" strokeDasharray="6 4" strokeWidth="2" />
            <text x="50" y="22" fill="#94a3b8" fontSize="12">Vacuum Level (E_vac = 0.00 eV)</text>
            <rect
              x="120"
              y={yEc}
              width="260"
              height={hEg}
              fill="rgba(6,182,212,0.14)"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <line x1="100" y1={yEc} x2="400" y2={yEc} stroke="#38bdf8" strokeWidth="4" />
            <line x1="100" y1={yEv} x2="400" y2={yEv} stroke="#f59e0b" strokeWidth="4" />
            <line x1="150" y1="30" x2="150" y2={yEc} stroke="#10b981" strokeWidth="2.5" />
            <text x="160" y={(yVac + yEc) / 2 + 4} fill="#10b981" fontSize="13" fontWeight="700">
              χ = {chi.toFixed(2)} eV
            </text>
            <text x="250" y={yEc + hEg / 2 + 5} fill="#fff" fontSize="15" fontWeight="800" textAnchor="middle">
              Eg = {eg.toFixed(2)} eV
            </text>
          </svg>
        </div>
      </div>
    );
  }

  if (simType === 'jvSim') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full min-h-0 items-stretch">
        <div className="lg:col-span-5 bg-[#0e1628] border border-amber-500/30 rounded-xl p-5 flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-amber-400">Live Diode Model</div>
            {langMode !== 'ar' && (
              <p className="text-sm text-slate-200 leading-relaxed">
                Test how Series Resistance (Rs) and Shunt Resistance (Rsh) distort the J-V curve.
              </p>
            )}
            {langMode !== 'en' && (
              <p className="font-ar text-base text-amber-100 leading-relaxed text-right">
                اختبر كيف تؤثر المقاومة المتسلسلة (Rs) والمتوازية (Rsh) على شكل المنحنى وعامل الملء.
              </p>
            )}
          </div>

          <div className="space-y-4">
            <label className="block space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Series Resistance Rs (Ω·cm²)</span>
                <span className="font-mono-tabular font-semibold text-amber-400">{rs.toFixed(1)} Ω·cm²</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={15}
                step={0.5}
                value={rs}
                onChange={(e) => setRs(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </label>

            <label className="block space-y-1.5">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Shunt Resistance Rsh (Ω·cm²)</span>
                <span className="font-mono-tabular font-semibold text-amber-400">{rsh.toFixed(0)} Ω·cm²</span>
              </div>
              <input
                type="range"
                min={40}
                max={2000}
                step={20}
                value={rsh}
                onChange={(e) => setRsh(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </label>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
              <div className="text-[11px] text-slate-400">Voc</div>
              <div className="font-mono-tabular text-base font-bold text-emerald-400">
                {jvResult.voc.toFixed(2)}V
              </div>
            </div>
            <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
              <div className="text-[11px] text-slate-400">Jsc</div>
              <div className="font-mono-tabular text-base font-bold text-emerald-400">
                {jvResult.jsc.toFixed(1)}
              </div>
            </div>
            <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
              <div className="text-[11px] text-slate-400">FF</div>
              <div className="font-mono-tabular text-base font-bold text-emerald-400">
                {jvResult.ff.toFixed(0)}%
              </div>
            </div>
            <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
              <div className="text-[11px] text-slate-400">η (%)</div>
              <div className="font-mono-tabular text-base font-bold text-amber-400">
                {jvResult.eta.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#070c1a] border border-slate-800 rounded-xl p-4 flex flex-col min-h-0">
          <div className="flex-1 min-h-0 relative">
            <canvas ref={jvCanvasRef} />
          </div>
          <div className="text-xs text-slate-500 text-center mt-2">
            Interactive educational single-diode J-V simulator (Illustrative)
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full min-h-0 items-stretch">
      <div className="lg:col-span-5 bg-[#0e1628] border border-violet-500/30 rounded-xl p-5 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-wider text-violet-300">SRH Trap Simulator</div>
          {langMode !== 'ar' && (
            <p className="text-sm text-slate-200 leading-relaxed">
              Sweep bulk defect density Nt in a Perovskite absorber from 10¹³ to 10¹⁷ cm⁻³.
            </p>
          )}
          {langMode !== 'en' && (
            <p className="font-ar text-base text-amber-100 leading-relaxed text-right">
              حرّك كثافة العيوب الحجمية Nt لمراقبة انهيار عمر الحاملات τ وجهد الدائرة المفتوحة Voc.
            </p>
          )}
        </div>

        <label className="block space-y-1.5">
          <div className="flex justify-between text-xs text-slate-300">
            <span>log₁₀(Nt [cm⁻³])</span>
            <span className="font-mono-tabular font-semibold text-amber-400">
              10^{logNt.toFixed(2)} cm⁻³
            </span>
          </div>
          <input
            type="range"
            min={13.0}
            max={17.0}
            step={0.25}
            value={logNt}
            onChange={(e) => setLogNt(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </label>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
            <div className="text-xs text-slate-400">SRH Lifetime τ</div>
            <div className="font-mono-tabular text-base font-bold text-emerald-400">
              {defectResult.tauNs >= 1000
                ? `${(defectResult.tauNs / 1000).toFixed(1)} µs`
                : `${defectResult.tauNs.toFixed(1)} ns`}
            </div>
          </div>
          <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
            <div className="text-xs text-slate-400">Diffusion Length L</div>
            <div className="font-mono-tabular text-base font-bold text-emerald-400">
              {defectResult.L.toFixed(2)} µm
            </div>
          </div>
          <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
            <div className="text-xs text-slate-400">Est. Voc</div>
            <div className="font-mono-tabular text-base font-bold text-cyan-400">
              {defectResult.voc.toFixed(2)} V
            </div>
          </div>
          <div className="bg-slate-950/75 border border-slate-800 rounded-lg p-2.5 text-center">
            <div className="text-xs text-slate-400">Est. Efficiency η</div>
            <div className="font-mono-tabular text-base font-bold text-amber-400">
              {defectResult.eta.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 bg-[#070c1a] border border-slate-800 rounded-xl p-4 flex flex-col min-h-0">
        <div className="flex-1 min-h-0 relative">
          <canvas ref={defCanvasRef} />
        </div>
        <div className="text-xs text-slate-500 text-center mt-2">
          Illustrative SRH Defect impact on J-V performance
        </div>
      </div>
    </div>
  );
};
