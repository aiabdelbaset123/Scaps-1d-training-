import React from 'react';
import { SVGType } from '../data/slides';

interface SlideSVGProps {
  type: SVGType;
}

export const SlideSVG: React.FC<SlideSVGProps> = ({ type }) => {
  const vb = '0 0 520 340';

  switch (type) {
    case 'scapsCore':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <defs>
            <linearGradient id="gSun" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <rect x="26" y="42" width="136" height="256" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="94" y="72" fill="#38bdf8" fontSize="13" fontWeight="700" textAnchor="middle">INPUTS</text>
          <text x="94" y="108" fill="#cbd5e1" fontSize="11.5" textAnchor="middle">• Layers (d, Eg, χ)</text>
          <text x="94" y="140" fill="#cbd5e1" fontSize="11.5" textAnchor="middle">• Doping (NA, ND)</text>
          <text x="94" y="172" fill="#cbd5e1" fontSize="11.5" textAnchor="middle">• Defects (Nt, σ)</text>
          <text x="94" y="204" fill="#cbd5e1" fontSize="11.5" textAnchor="middle">• Optical α(λ)</text>
          <text x="94" y="236" fill="#cbd5e1" fontSize="11.5" textAnchor="middle">• AM1.5G / T, V</text>

          <path d="M166 170 L205 170" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 4" />
          <polygon points="205,164 217,170 205,176" fill="#f59e0b" />

          <circle cx="275" cy="170" r="56" fill="rgba(6,182,212,0.10)" stroke="url(#gSun)" strokeWidth="2.5" />
          <text x="275" y="162" fill="#f8fafc" fontSize="15" fontWeight="800" textAnchor="middle">SCAPS-1D</text>
          <text x="275" y="182" fill="#fde68a" fontSize="11" textAnchor="middle">1D PDE Solver</text>
          <text x="275" y="200" fill="#94a3b8" fontSize="10" textAnchor="middle">Ghent Univ.</text>

          <path d="M335 170 L374 170" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 4" />
          <polygon points="374,164 386,170 374,176" fill="#10b981" />

          <rect x="388" y="42" width="110" height="256" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="443" y="72" fill="#10b981" fontSize="13" fontWeight="700" textAnchor="middle">OUTPUTS</text>
          <text x="443" y="110" fill="#e2e8f0" fontSize="11.5" textAnchor="middle">J-V Curve</text>
          <text x="443" y="142" fill="#e2e8f0" fontSize="11.5" textAnchor="middle">QE(λ) / IPCE</text>
          <text x="443" y="174" fill="#e2e8f0" fontSize="11.5" textAnchor="middle">C-V &amp; C-f</text>
          <text x="443" y="206" fill="#e2e8f0" fontSize="11.5" textAnchor="middle">Energy Bands</text>
          <text x="443" y="238" fill="#e2e8f0" fontSize="11.5" textAnchor="middle">Voc, Jsc, FF, η</text>
        </svg>
      );

    case 'folderTree':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="40" y="24" width="440" height="292" rx="10" fill="#0b1222" stroke="#334155" strokeWidth="1.5" />
          <text x="68" y="58" fill="#f59e0b" fontSize="15" fontWeight="700">SCAPS3310/ (Root Directory)</text>
          <line x1="82" y1="68" x2="82" y2="288" stroke="#475569" strokeWidth="2" />
          <g fontSize="12.5" fontFamily="JetBrains Mono, monospace">
            <line x1="82" y1="95" x2="110" y2="95" stroke="#475569" strokeWidth="2" />
            <text x="118" y="100" fill="#38bdf8">scaps3310.exe</text>
            <text x="275" y="100" fill="#94a3b8">(Main Program)</text>

            <line x1="82" y1="132" x2="110" y2="132" stroke="#475569" strokeWidth="2" />
            <text x="118" y="137" fill="#fde68a">/def</text>
            <text x="275" y="137" fill="#94a3b8">(Solar cell .def files)</text>

            <line x1="82" y1="169" x2="110" y2="169" stroke="#475569" strokeWidth="2" />
            <text x="118" y="174" fill="#fde68a">/absorption</text>
            <text x="275" y="174" fill="#94a3b8">(Optical α(λ) .abs)</text>

            <line x1="82" y1="206" x2="110" y2="206" stroke="#475569" strokeWidth="2" />
            <text x="118" y="211" fill="#fde68a">/spectrum</text>
            <text x="275" y="211" fill="#94a3b8">(AM1.5G, AM0 .spe)</text>

            <line x1="82" y1="243" x2="110" y2="243" stroke="#475569" strokeWidth="2" />
            <text x="118" y="248" fill="#fde68a">/filter</text>
            <text x="275" y="248" fill="#94a3b8">(Optical filters .flt)</text>

            <line x1="82" y1="280" x2="110" y2="280" stroke="#475569" strokeWidth="2" />
            <text x="118" y="285" fill="#10b981">/results</text>
            <text x="275" y="285" fill="#94a3b8">(Saved outputs &amp; logs)</text>
          </g>
        </svg>
      );

    case 'poissonBand':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <text x="260" y="28" fill="#94a3b8" fontSize="12.5" textAnchor="middle">
            Space Charge ρ(x) → Electric Field E(x) → Band Bending ψ(x)
          </text>
          <rect x="60" y="48" width="170" height="80" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" />
          <text x="145" y="75" fill="#fda4af" fontSize="13.5" fontWeight="700" textAnchor="middle">p-type (-N_A⁻)</text>
          <text x="145" y="104" fill="#fda4af" fontSize="17" textAnchor="middle">⊖ ⊖ ⊖ ⊖</text>

          <rect x="290" y="48" width="170" height="80" fill="rgba(6,182,212,0.12)" stroke="#06b6d4" />
          <text x="375" y="75" fill="#67e8f9" fontSize="13.5" fontWeight="700" textAnchor="middle">n-type (+N_D⁺)</text>
          <text x="375" y="104" fill="#67e8f9" fontSize="17" textAnchor="middle">⊕ ⊕ ⊕ ⊕</text>

          <rect x="230" y="48" width="60" height="80" fill="rgba(245,158,11,0.14)" stroke="#f59e0b" strokeDasharray="4 3" />
          <text x="260" y="92" fill="#fde68a" fontSize="10.5" textAnchor="middle">Depletion</text>

          <path d="M50 185 L210 185 C250 185, 270 245, 310 245 L470 245" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <path d="M50 250 L210 250 C250 250, 270 310, 310 310 L470 310" fill="none" stroke="#f59e0b" strokeWidth="3" />
          <line x1="50" y1="220" x2="470" y2="220" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" />
          <text x="65" y="175" fill="#38bdf8" fontSize="12" fontWeight="600">Ec</text>
          <text x="65" y="270" fill="#f59e0b" fontSize="12" fontWeight="600">Ev</text>
          <text x="425" y="213" fill="#10b981" fontSize="12" fontWeight="600">EF</text>
          <text x="260" y="328" fill="#cbd5e1" fontSize="12" textAnchor="middle">
            Built-in Electric Field sweeps e⁻ right &amp; h⁺ left
          </text>
        </svg>
      );

    case 'continuityFlow':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <path d="M40 70 L480 70" stroke="#38bdf8" strokeWidth="3" />
          <path d="M40 250 L480 250" stroke="#f59e0b" strokeWidth="3" />
          <text x="25" y="75" fill="#38bdf8" fontSize="13" fontWeight="700">Ec</text>
          <text x="25" y="255" fill="#f59e0b" fontSize="13" fontWeight="700">Ev</text>

          <path d="M120 22 Q135 37 120 52 T120 82" fill="none" stroke="#fde047" strokeWidth="2.5" />
          <text x="120" y="16" fill="#fde047" fontSize="12" textAnchor="middle">hν ≥ Eg</text>

          <line x1="150" y1="240" x2="150" y2="85" stroke="#10b981" strokeWidth="3" />
          <polygon points="144,92 150,76 156,92" fill="#10b981" />
          <text x="172" y="160" fill="#10b981" fontSize="13" fontWeight="700">Generation G(x)</text>

          <line x1="350" y1="80" x2="350" y2="235" stroke="#f43f5e" strokeWidth="3" strokeDasharray="5 3" />
          <polygon points="344,230 350,245 356,230" fill="#f43f5e" />
          <text x="368" y="160" fill="#f43f5e" fontSize="13" fontWeight="700">Recombination R(x)</text>

          <circle cx="150" cy="70" r="7" fill="#38bdf8" />
          <circle cx="150" cy="250" r="7" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          <path d="M165 55 L260 55" stroke="#38bdf8" strokeWidth="2" />
          <polygon points="256,50 268,55 256,60" fill="#38bdf8" />
          <text x="215" y="44" fill="#bae6fd" fontSize="11" textAnchor="middle">Collected e⁻</text>

          <rect x="105" y="275" width="310" height="40" rx="8" fill="rgba(16,185,129,0.10)" stroke="#10b981" />
          <text x="260" y="300" fill="#e2e8f0" fontSize="13" fontFamily="JetBrains Mono, monospace" textAnchor="middle">
            Net Current = ∫ [ G(x) - R(x) ] dx
          </text>
        </svg>
      );

    case 'driftDiffusion':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="32" y="35" width="214" height="270" rx="10" fill="rgba(6,182,212,0.07)" stroke="#06b6d4" />
          <text x="139" y="65" fill="#38bdf8" fontSize="14.5" fontWeight="700" textAnchor="middle">DRIFT (الانجراف)</text>
          <text x="139" y="92" fill="#cbd5e1" fontSize="12" textAnchor="middle">Electric Field E(x) ≠ 0</text>
          <line x1="65" y1="150" x2="212" y2="150" stroke="#f59e0b" strokeWidth="3" />
          <polygon points="207,143 221,150 207,157" fill="#f59e0b" />
          <text x="139" y="135" fill="#fde68a" fontSize="12" textAnchor="middle">E-Field Vector</text>
          <circle cx="180" cy="205" r="10" fill="#38bdf8" />
          <text x="180" y="209" fill="#050914" fontSize="11" fontWeight="800" textAnchor="middle">e⁻</text>
          <path d="M165 205 L100 205" stroke="#38bdf8" strokeWidth="2.5" />
          <polygon points="104,200 92,205 104,210" fill="#38bdf8" />
          <text x="139" y="265" fill="#94a3b8" fontSize="11.5" textAnchor="middle">Fast sweep in depletion zone</text>

          <rect x="274" y="35" width="214" height="270" rx="10" fill="rgba(16,185,129,0.07)" stroke="#10b981" />
          <text x="381" y="65" fill="#10b981" fontSize="14.5" fontWeight="700" textAnchor="middle">DIFFUSION (الانتشار)</text>
          <text x="381" y="92" fill="#cbd5e1" fontSize="12" textAnchor="middle">Concentration Gradient dn/dx</text>
          <circle cx="310" cy="145" r="7" fill="#10b981" />
          <circle cx="328" cy="158" r="7" fill="#10b981" />
          <circle cx="312" cy="172" r="7" fill="#10b981" />
          <circle cx="332" cy="138" r="7" fill="#10b981" />
          <circle cx="385" cy="155" r="7" fill="#10b981" />
          <circle cx="445" cy="160" r="7" fill="#10b981" />
          <path d="M345 205 L435 205" stroke="#10b981" strokeWidth="2.5" />
          <polygon points="430,200 442,205 430,210" fill="#10b981" />
          <text x="381" y="265" fill="#94a3b8" fontSize="11.5" textAnchor="middle">Driven by thermal motion &amp; μ</text>
        </svg>
      );

    case 'recombination3':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <line x1="30" y1="65" x2="490" y2="65" stroke="#38bdf8" strokeWidth="3" />
          <line x1="30" y1="260" x2="490" y2="260" stroke="#f59e0b" strokeWidth="3" />
          <text x="18" y="69" fill="#38bdf8" fontSize="12" fontWeight="700">Ec</text>
          <text x="18" y="264" fill="#f59e0b" fontSize="12" fontWeight="700">Ev</text>

          <text x="105" y="42" fill="#e2e8f0" fontSize="13" fontWeight="700" textAnchor="middle">1. Radiative</text>
          <line x1="105" y1="75" x2="105" y2="245" stroke="#38bdf8" strokeWidth="2.5" />
          <polygon points="100,240 105,252 110,240" fill="#38bdf8" />
          <path d="M115 155 Q130 145 145 155 T170 155" fill="none" stroke="#fde047" strokeWidth="2" />
          <text x="148" y="140" fill="#fde047" fontSize="11.5">hν</text>

          <text x="260" y="42" fill="#e2e8f0" fontSize="13" fontWeight="700" textAnchor="middle">2. Auger</text>
          <line x1="245" y1="75" x2="245" y2="245" stroke="#a855f7" strokeWidth="2.5" />
          <polygon points="240,240 245,252 250,240" fill="#a855f7" />
          <line x1="275" y1="75" x2="275" y2="30" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 2" />
          <polygon points="270,35 275,23 280,35" fill="#a855f7" />
          <text x="260" y="295" fill="#c4b5fd" fontSize="11.5" textAnchor="middle">3-carrier collision</text>

          <text x="415" y="42" fill="#f43f5e" fontSize="13" fontWeight="700" textAnchor="middle">3. SRH (Traps)</text>
          <line x1="380" y1="162" x2="450" y2="162" stroke="#f43f5e" strokeWidth="3" strokeDasharray="6 3" />
          <text x="462" y="166" fill="#fda4af" fontSize="11.5">Et</text>
          <line x1="415" y1="75" x2="415" y2="152" stroke="#f43f5e" strokeWidth="2.5" />
          <line x1="415" y1="170" x2="415" y2="245" stroke="#f43f5e" strokeWidth="2.5" />
          <polygon points="410,240 415,252 420,240" fill="#f43f5e" />
          <text x="415" y="295" fill="#fda4af" fontSize="11.5" textAnchor="middle">Dominant in thin-films</text>
        </svg>
      );

    case 'absorptionModel':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="90" y="40" width="340" height="240" rx="8" fill="#0f172a" stroke="#334155" />
          <text x="54" y="160" fill="#fde047" fontSize="14" fontWeight="700" textAnchor="middle">I₀</text>
          <path d="M68 155 L90 155" stroke="#fde047" strokeWidth="3" />
          <polygon points="84,150 94,155 84,160" fill="#fde047" />
          <path d="M90 60 Q160 190 420 265" fill="none" stroke="#f59e0b" strokeWidth="3.5" />
          <path d="M90 60 Q240 120 420 185" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="6 4" />
          <text x="250" y="95" fill="#06b6d4" fontSize="12">Low α (Long λ / Silicon)</text>
          <text x="210" y="235" fill="#f59e0b" fontSize="12">High α (Short λ / Perovskite ~10⁵ cm⁻¹)</text>
          <text x="260" y="310" fill="#94a3b8" fontSize="12" textAnchor="middle">
            Depth x inside Absorber → I(x) = I₀ exp(-αx)
          </text>
        </svg>
      );

    case 'workingPoint':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="40" y="30" width="440" height="280" rx="12" fill="#131c31" stroke="#334155" strokeWidth="1.5" />
          <text x="260" y="62" fill="#f8fafc" fontSize="15" fontWeight="700" textAnchor="middle">SCAPS Working Point Box</text>
          <rect x="65" y="85" width="180" height="60" rx="8" fill="#0f172a" stroke="#38bdf8" />
          <text x="155" y="110" fill="#38bdf8" fontSize="12" textAnchor="middle">Temperature T</text>
          <text x="155" y="132" fill="#fff" fontSize="15" fontWeight="700" fontFamily="JetBrains Mono, monospace" textAnchor="middle">300.0 K</text>

          <rect x="275" y="85" width="180" height="60" rx="8" fill="#0f172a" stroke="#f59e0b" />
          <text x="365" y="110" fill="#f59e0b" fontSize="12" textAnchor="middle">AC Frequency f</text>
          <text x="365" y="132" fill="#fff" fontSize="15" fontWeight="700" fontFamily="JetBrains Mono, monospace" textAnchor="middle">1.0 × 10⁶ Hz</text>

          <rect x="65" y="165" width="390" height="115" rx="8" fill="#0f172a" stroke="#10b981" />
          <text x="260" y="193" fill="#10b981" fontSize="13" fontWeight="700" textAnchor="middle">Illumination Settings</text>
          <text x="260" y="220" fill="#e2e8f0" fontSize="12" textAnchor="middle">[✓] Light ON  |  Spectrum: AM1_5G 1 sun.spe</text>
          <text x="260" y="248" fill="#fde68a" fontSize="12" textAnchor="middle">Incident Side: Right (Top Window) →</text>
        </svg>
      );

    case 'layerDialog':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="45" y="25" width="430" height="290" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="260" y="55" fill="#38bdf8" fontSize="15" fontWeight="700" textAnchor="middle">Layer Properties Panel</text>
          <g fontSize="12" fontFamily="JetBrains Mono, monospace">
            <rect x="70" y="75" width="175" height="36" rx="5" fill="#1e293b" />
            <text x="82" y="97" fill="#e2e8f0">Thickness: 0.50 µm</text>
            <rect x="275" y="75" width="175" height="36" rx="5" fill="#1e293b" />
            <text x="287" y="97" fill="#e2e8f0">Bandgap Eg: 1.55 eV</text>

            <rect x="70" y="125" width="175" height="36" rx="5" fill="#1e293b" />
            <text x="82" y="147" fill="#e2e8f0">Affinity χ: 3.90 eV</text>
            <rect x="275" y="125" width="175" height="36" rx="5" fill="#1e293b" />
            <text x="287" y="147" fill="#e2e8f0">Dielectric εr: 6.5</text>

            <rect x="70" y="175" width="175" height="36" rx="5" fill="#1e293b" />
            <text x="82" y="197" fill="#fde68a">NC: 2.2e18 cm⁻³</text>
            <rect x="275" y="175" width="175" height="36" rx="5" fill="#1e293b" />
            <text x="287" y="197" fill="#fde68a">NV: 1.8e19 cm⁻³</text>

            <rect x="70" y="225" width="380" height="42" rx="5" fill="rgba(16,185,129,0.12)" stroke="#10b981" />
            <text x="260" y="250" fill="#6ee7b7" textAnchor="middle">v_th,n = 1e7 cm/s  |  v_th,p = 1e7 cm/s</text>
          </g>
          <text x="260" y="295" fill="#f59e0b" fontSize="12" textAnchor="middle">Note: Always verify units: µm (not nm)</text>
        </svg>
      );

    case 'dopingMobility':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="40" y="45" width="210" height="240" rx="10" fill="#0f172a" stroke="#f43f5e" />
          <text x="145" y="75" fill="#fda4af" fontSize="14" fontWeight="700" textAnchor="middle">p-Type Layer (NA)</text>
          <text x="145" y="105" fill="#cbd5e1" fontSize="12" textAnchor="middle">Holes h⁺ = Majority</text>
          <text x="145" y="135" fill="#94a3b8" fontSize="11" textAnchor="middle">e.g. CIGS: 2×10¹⁶ cm⁻³</text>
          <path d="M65 240 L150 240 L225 180" fill="none" stroke="#10b981" strokeWidth="3" />
          <text x="145" y="265" fill="#6ee7b7" fontSize="11" textAnchor="middle">Supports Graded Doping (BSF)</text>

          <rect x="270" y="45" width="210" height="240" rx="10" fill="#0f172a" stroke="#06b6d4" />
          <text x="375" y="75" fill="#67e8f9" fontSize="14" fontWeight="700" textAnchor="middle">n-Type Layer (ND)</text>
          <text x="375" y="105" fill="#cbd5e1" fontSize="12" textAnchor="middle">Electrons e⁻ = Majority</text>
          <text x="375" y="135" fill="#94a3b8" fontSize="11" textAnchor="middle">e.g. CdS / TiO₂: 10¹⁷–10¹⁸</text>
          <text x="375" y="195" fill="#fde68a" fontSize="12" textAnchor="middle">Mobility μn, μp (cm²/V·s)</text>
          <text x="375" y="225" fill="#94a3b8" fontSize="11" textAnchor="middle">Higher μ → Better FF &amp; Jsc</text>
        </svg>
      );

    case 'contactsDiagram':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="45" y="50" width="75" height="230" fill="#334155" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="82" y="165" fill="#fff" fontSize="12.5" fontWeight="700" textAnchor="middle" transform="rotate(-90 82 165)">
            BACK CONTACT (Mo / Au)
          </text>
          <rect x="120" y="50" width="280" height="230" fill="rgba(6,182,212,0.10)" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="260" y="155" fill="#bae6fd" fontSize="15" fontWeight="700" textAnchor="middle">Semiconductor Stack</text>
          <text x="260" y="180" fill="#94a3b8" fontSize="12" textAnchor="middle">(Absorber + Buffer + Window)</text>
          <rect x="400" y="50" width="75" height="230" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="437" y="165" fill="#fde68a" fontSize="12.5" fontWeight="700" textAnchor="middle" transform="rotate(-90 437 165)">
            FRONT CONTACT (TCO)
          </text>
          <text x="260" y="306" fill="#e2e8f0" fontSize="12" textAnchor="middle">
            Set Φm (Flat-band or eV) • Surface Recombination Sn, Sp • Reflection %
          </text>
        </svg>
      );

    case 'interfaceDefects':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="55" y="60" width="190" height="210" fill="rgba(244,63,94,0.14)" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="150" y="165" fill="#fda4af" fontSize="15" fontWeight="700" textAnchor="middle">Absorber</text>
          <rect x="275" y="60" width="190" height="210" fill="rgba(6,182,212,0.14)" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="370" y="165" fill="#67e8f9" fontSize="15" fontWeight="700" textAnchor="middle">ETL / Buffer</text>
          <line x1="260" y1="40" x2="260" y2="288" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 4" />
          <circle cx="260" cy="110" r="6" fill="#f59e0b" />
          <circle cx="260" cy="165" r="6" fill="#f59e0b" />
          <circle cx="260" cy="220" r="6" fill="#f59e0b" />
          <rect x="150" y="295" width="220" height="30" rx="6" fill="rgba(245,158,11,0.16)" stroke="#f59e0b" />
          <text x="260" y="314" fill="#fde68a" fontSize="12" fontWeight="700" textAnchor="middle">
            Interface Layer: N_it (cm⁻²)
          </text>
        </svg>
      );

    case 'qeConcept':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <circle cx="95" cy="95" r="28" fill="#fde047" opacity="0.92" />
          <text x="95" y="100" fill="#050914" fontSize="13" fontWeight="800" textAnchor="middle">100 hν</text>
          <path d="M128 95 L220 95" stroke="#fde047" strokeWidth="3" />
          <polygon points="215,89 228,95 215,101" fill="#fde047" />
          <rect x="230" y="45" width="90" height="185" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="275" y="142" fill="#bae6fd" fontSize="13" fontWeight="700" textAnchor="middle">Solar Cell</text>
          <path d="M320 95 L405 95" stroke="#10b981" strokeWidth="3" />
          <polygon points="400,89 413,95 400,101" fill="#10b981" />
          <text x="445" y="100" fill="#10b981" fontSize="14" fontWeight="700" textAnchor="middle">90 e⁻</text>
          <text x="260" y="272" fill="#fff" fontSize="15" fontWeight="700" textAnchor="middle">QE(λ) = 90 / 100 = 90%</text>
          <text x="260" y="300" fill="#94a3b8" fontSize="12" textAnchor="middle">
            Cutoff Wavelength λ_g (nm) = 1240 / E_g (eV)
          </text>
        </svg>
      );

    case 'cfStep':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <line x1="65" y1="260" x2="465" y2="260" stroke="#64748b" strokeWidth="2" />
          <line x1="65" y1="45" x2="65" y2="260" stroke="#64748b" strokeWidth="2" />
          <path d="M75 95 L200 95 C245 95, 255 205, 300 205 L455 205" fill="none" stroke="#06b6d4" strokeWidth="4" />
          <text x="135" y="80" fill="#67e8f9" fontSize="12">Low f: Traps respond</text>
          <text x="375" y="190" fill="#fde68a" fontSize="12">High f: C_geometric</text>
          <line x1="250" y1="80" x2="250" y2="260" stroke="#f59e0b" strokeDasharray="4 4" />
          <text x="250" y="285" fill="#f59e0b" fontSize="12" textAnchor="middle">Log Frequency f (Hz) → ω₀ reveals Et</text>
          <text x="35" y="155" fill="#94a3b8" fontSize="12" transform="rotate(-90 35 155)" textAnchor="middle">Capacitance C</text>
        </svg>
      );

    case 'ebOutput':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <path d="M40 70 L180 70 C220 70 250 130 290 130 L470 130" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <path d="M40 230 L180 230 C220 230 250 290 290 290 L470 290" fill="none" stroke="#f59e0b" strokeWidth="3" />
          <path d="M40 160 L320 160" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 3" />
          <path d="M160 205 L470 205" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="5 3" />
          <text x="55" y="60" fill="#38bdf8" fontSize="12">Ec(x)</text>
          <text x="55" y="248" fill="#f59e0b" fontSize="12">Ev(x)</text>
          <text x="90" y="150" fill="#10b981" fontSize="12">E_Fn (Quasi-Fermi e⁻)</text>
          <text x="370" y="222" fill="#fda4af" fontSize="12">E_Fp (Quasi-Fermi h⁺)</text>
          <line x1="250" y1="162" x2="250" y2="203" stroke="#fde047" strokeWidth="2" />
          <text x="262" y="186" fill="#fde047" fontSize="12" fontWeight="700">q·Voc</text>
        </svg>
      );

    case 'genRecProfile':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <line x1="55" y1="265" x2="475" y2="265" stroke="#64748b" strokeWidth="2" />
          <line x1="55" y1="40" x2="55" y2="265" stroke="#64748b" strokeWidth="2" />
          <path d="M60 65 Q170 120 465 245" fill="none" stroke="#10b981" strokeWidth="3.5" />
          <path d="M60 155 Q190 190 465 215" fill="none" stroke="#f43f5e" strokeWidth="3" />
          <line x1="160" y1="45" x2="160" y2="265" stroke="#f59e0b" strokeDasharray="4 4" />
          <circle cx="160" cy="125" r="7" fill="#f59e0b" />
          <text x="200" y="95" fill="#10b981" fontSize="13" fontWeight="700">Generation G(x)</text>
          <text x="250" y="185" fill="#fda4af" fontSize="13" fontWeight="700">Recombination R_SRH(x)</text>
          <text x="165" y="60" fill="#fde68a" fontSize="11">Interface Spike Loss</text>
          <text x="265" y="295" fill="#94a3b8" fontSize="12" textAnchor="middle">Position x inside Cell (Front → Back)</text>
        </svg>
      );

    case 'step1Flow':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="40" y="55" width="440" height="230" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="260" y="88" fill="#fff" fontSize="15" fontWeight="700" textAnchor="middle">Default CIGS Stack in /def</text>
          <rect x="65" y="115" width="55" height="125" fill="#475569" stroke="#cbd5e1" />
          <text x="92" y="180" fill="#fff" fontSize="12" textAnchor="middle">Mo</text>
          <rect x="120" y="115" width="160" height="125" fill="#be123c" opacity="0.65" stroke="#fda4af" />
          <text x="200" y="180" fill="#fff" fontSize="13" fontWeight="700" textAnchor="middle">p-CIGS (2.0 µm)</text>
          <rect x="280" y="115" width="55" height="125" fill="#d97706" opacity="0.75" stroke="#fde68a" />
          <text x="307" y="180" fill="#fff" fontSize="11" textAnchor="middle">CdS</text>
          <rect x="335" y="115" width="120" height="125" fill="#0284c7" opacity="0.6" stroke="#7dd3fc" />
          <text x="395" y="180" fill="#fff" fontSize="12" textAnchor="middle">ZnO:Al Window</text>
          <text x="260" y="268" fill="#10b981" fontSize="13" textAnchor="middle">Light enters from Right (ZnO side)</text>
        </svg>
      );

    case 'step3Setup':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="40" y="35" width="440" height="270" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="260" y="68" fill="#f59e0b" fontSize="15" fontWeight="700" textAnchor="middle">Lab 1 Action Panel Checklist</text>
          <text x="80" y="110" fill="#10b981" fontSize="13.5">[✓] Illumination: Light ON</text>
          <text x="80" y="145" fill="#e2e8f0" fontSize="13.5">[✓] Spectrum: AM1_5G 1 sun.spe (1000 W/m²)</text>
          <text x="80" y="180" fill="#e2e8f0" fontSize="13.5">[✓] Temperature: 300 K</text>
          <text x="80" y="215" fill="#e2e8f0" fontSize="13.5">[✓] V_start = 0.0 V → V_stop = 0.8 V</text>
          <text x="80" y="250" fill="#38bdf8" fontSize="13.5">[✓] Light Incident Side: Right (ZnO)</text>
        </svg>
      );

    case 'step4Run':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="70" y="45" width="380" height="250" rx="12" fill="#131c31" stroke="#10b981" strokeWidth="1.5" />
          <text x="260" y="85" fill="#fff" fontSize="16" fontWeight="700" textAnchor="middle">Select Simulations &amp; Run</text>
          <rect x="110" y="110" width="130" height="45" rx="8" fill="#0f172a" stroke="#38bdf8" />
          <text x="175" y="138" fill="#38bdf8" fontSize="14" fontWeight="700" textAnchor="middle">[✓] I-V (J-V)</text>
          <rect x="280" y="110" width="130" height="45" rx="8" fill="#0f172a" stroke="#f59e0b" />
          <text x="345" y="138" fill="#f59e0b" fontSize="14" fontWeight="700" textAnchor="middle">[✓] QE (IPCE)</text>
          <rect x="135" y="195" width="250" height="55" rx="10" fill="rgba(16,185,129,0.22)" stroke="#6ee7b7" strokeWidth="1.5" />
          <text x="260" y="228" fill="#fff" fontSize="15" fontWeight="800" textAnchor="middle">▶ Calculate: single shot</text>
        </svg>
      );

    case 'resultsInspect':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="35" y="35" width="215" height="270" rx="10" fill="#0f172a" stroke="#10b981" />
          <text x="142" y="65" fill="#10b981" fontSize="14" fontWeight="700" textAnchor="middle">I-V Summary Box</text>
          <text x="142" y="110" fill="#fff" fontSize="14" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Voc = 0.67 V</text>
          <text x="142" y="145" fill="#fff" fontSize="14" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Jsc = 34.8 mA/cm²</text>
          <text x="142" y="180" fill="#fff" fontSize="14" fontFamily="JetBrains Mono, monospace" textAnchor="middle">FF  = 80.2 %</text>
          <text x="142" y="220" fill="#fde047" fontSize="16" fontWeight="800" fontFamily="JetBrains Mono, monospace" textAnchor="middle">Eta = 18.7 %</text>
          <text x="142" y="265" fill="#94a3b8" fontSize="11" textAnchor="middle">(Illustrative Lab 1 Baseline)</text>

          <rect x="270" y="35" width="215" height="270" rx="10" fill="#0f172a" stroke="#38bdf8" />
          <text x="377" y="65" fill="#38bdf8" fontSize="14" fontWeight="700" textAnchor="middle">QE Diagnosis</text>
          <path d="M295 245 L305 155 L340 155 L350 95 L435 95 L455 245" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <text x="320" y="140" fill="#f59e0b" fontSize="11">CdS drop</text>
          <text x="415" y="265" fill="#94a3b8" fontSize="11" textAnchor="middle">CIGS Eg cutoff ~1080nm</text>
        </svg>
      );

    case 'perovskiteBands':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="45" y="110" width="90" height="100" fill="rgba(6,182,212,0.18)" stroke="#38bdf8" />
          <text x="90" y="165" fill="#38bdf8" fontSize="13" fontWeight="700" textAnchor="middle">TiO₂ (ETL)</text>
          <text x="90" y="102" fill="#bae6fd" fontSize="11" textAnchor="middle">Ec -4.0</text>
          <text x="90" y="225" fill="#bae6fd" fontSize="11" textAnchor="middle">Ev -7.2</text>

          <rect x="165" y="100" width="175" height="90" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" />
          <text x="252" y="150" fill="#fde68a" fontSize="14" fontWeight="700" textAnchor="middle">MAPbI₃ (1.55 eV)</text>
          <text x="252" y="92" fill="#fde68a" fontSize="11" textAnchor="middle">Ec -3.9</text>
          <text x="252" y="205" fill="#fde68a" fontSize="11" textAnchor="middle">Ev -5.45</text>

          <rect x="370" y="50" width="100" height="125" fill="rgba(139,92,246,0.22)" stroke="#a78bfa" />
          <text x="420" y="115" fill="#ddd6fe" fontSize="13" fontWeight="700" textAnchor="middle">Spiro (HTL)</text>
          <text x="420" y="42" fill="#ddd6fe" fontSize="11" textAnchor="middle">Ec -2.2</text>
          <text x="420" y="190" fill="#ddd6fe" fontSize="11" textAnchor="middle">Ev -5.2</text>

          <path d="M210 118 L110 122" stroke="#10b981" strokeWidth="2.5" />
          <polygon points="115,117 103,122 115,127" fill="#10b981" />
          <text x="155" y="265" fill="#10b981" fontSize="12" textAnchor="middle">← e⁻ extracted to ETL</text>
          <path d="M295 170 L395 162" stroke="#f43f5e" strokeWidth="2.5" />
          <polygon points="390,157 402,162 390,167" fill="#f43f5e" />
          <text x="365" y="265" fill="#fda4af" fontSize="12" textAnchor="middle">h⁺ extracted to HTL →</text>
        </svg>
      );

    case 'defectLayers':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="55" y="55" width="90" height="210" fill="rgba(6,182,212,0.16)" stroke="#38bdf8" />
          <text x="100" y="165" fill="#fff" fontSize="13" textAnchor="middle">TiO₂</text>
          <line x1="150" y1="45" x2="150" y2="275" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6 4" />
          <rect x="155" y="55" width="210" height="210" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" />
          <text x="260" y="125" fill="#fde68a" fontSize="14" fontWeight="700" textAnchor="middle">MAPbI₃ Bulk</text>
          <text x="260" y="155" fill="#fda4af" fontSize="12" textAnchor="middle">Bulk Traps: Nt (cm⁻³)</text>
          <circle cx="215" cy="195" r="5" fill="#f43f5e" />
          <circle cx="260" cy="215" r="5" fill="#f43f5e" />
          <circle cx="305" cy="190" r="5" fill="#f43f5e" />
          <line x1="370" y1="45" x2="370" y2="275" stroke="#f59e0b" strokeWidth="4" strokeDasharray="6 4" />
          <rect x="375" y="55" width="90" height="210" fill="rgba(139,92,246,0.18)" stroke="#a78bfa" />
          <text x="420" y="165" fill="#fff" fontSize="13" textAnchor="middle">Spiro</text>
          <text x="260" y="305" fill="#f59e0b" fontSize="12" textAnchor="middle">
            Interface Defects: N_it (cm⁻²) at both interfaces
          </text>
        </svg>
      );

    case 'scriptingFlow':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="40" y="35" width="440" height="270" rx="10" fill="#0b1120" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="65" y="65" fill="#38bdf8" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            sample_sweep.script
          </text>
          <g fontSize="13" fontFamily="JetBrains Mono, monospace" fill="#e2e8f0">
            <text x="65" y="102">load my_perovskite.def</text>
            <text x="65" y="134" fill="#fde68a">loop layer2.thickness 0.2 1.0 5</text>
            <text x="90" y="166" fill="#10b981">calculate</text>
            <text x="90" y="198" fill="#10b981">get iv.eta</text>
            <text x="65" y="230" fill="#fde68a">endloop</text>
            <text x="65" y="264" fill="#c4b5fd">save results/thickness_map.txt</text>
          </g>
        </svg>
      );

    case 'exportPipe':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="35" y="100" width="120" height="130" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="95" y="155" fill="#fff" fontSize="13" fontWeight="700" textAnchor="middle">SCAPS-1D</text>
          <text x="95" y="180" fill="#38bdf8" fontSize="11" textAnchor="middle">Save ASCII</text>
          <path d="M160 165 L215 165" stroke="#f59e0b" strokeWidth="3" />
          <polygon points="210,159 222,165 210,171" fill="#f59e0b" />
          <rect x="225" y="110" width="105" height="110" rx="10" fill="#1e293b" stroke="#f59e0b" />
          <text x="277" y="155" fill="#fde68a" fontSize="13" fontFamily="JetBrains Mono, monospace" textAnchor="middle">.iv / .qe</text>
          <text x="277" y="180" fill="#94a3b8" fontSize="11" textAnchor="middle">Clean Columns</text>
          <path d="M335 165 L385 165" stroke="#10b981" strokeWidth="3" />
          <polygon points="380,159 392,165 380,171" fill="#10b981" />
          <rect x="395" y="70" width="100" height="190" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="445" y="115" fill="#10b981" fontSize="13" fontWeight="700" textAnchor="middle">OriginLab</text>
          <text x="445" y="165" fill="#38bdf8" fontSize="13" fontWeight="700" textAnchor="middle">Python</text>
          <text x="445" y="215" fill="#fde68a" fontSize="13" fontWeight="700" textAnchor="middle">Excel</text>
        </svg>
      );

    case 'checklistShield':
      return (
        <svg viewBox={vb} className="w-full h-full max-h-full">
          <rect x="55" y="35" width="410" height="270" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="260" y="72" fill="#10b981" fontSize="16" fontWeight="800" textAnchor="middle">
            Scientific Integrity Audit
          </text>
          <text x="90" y="120" fill="#e2e8f0" fontSize="13.5">[✓] Literature-backed Eg, χ, μ, Nt values</text>
          <text x="90" y="160" fill="#e2e8f0" fontSize="13.5">[✓] Experimental / realistic α(λ) file used</text>
          <text x="90" y="200" fill="#e2e8f0" fontSize="13.5">[✓] Below Shockley-Queisser limit (~33% 1J)</text>
          <text x="90" y="240" fill="#e2e8f0" fontSize="13.5">[✓] Mesh independence &amp; convergence verified</text>
          <text x="260" y="282" fill="#fde68a" fontSize="12" textAnchor="middle">Avoid &ldquo;Garbage In, Garbage Out&rdquo;</text>
        </svg>
      );

    default:
      return null;
  }
};
