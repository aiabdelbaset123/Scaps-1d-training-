export type LangMode = 'both' | 'en' | 'ar';

export type SVGType =
  | 'scapsCore'
  | 'folderTree'
  | 'poissonBand'
  | 'continuityFlow'
  | 'driftDiffusion'
  | 'recombination3'
  | 'absorptionModel'
  | 'workingPoint'
  | 'layerDialog'
  | 'dopingMobility'
  | 'contactsDiagram'
  | 'interfaceDefects'
  | 'qeConcept'
  | 'cfStep'
  | 'ebOutput'
  | 'genRecProfile'
  | 'step1Flow'
  | 'step3Setup'
  | 'step4Run'
  | 'resultsInspect'
  | 'perovskiteBands'
  | 'defectLayers'
  | 'scriptingFlow'
  | 'exportPipe'
  | 'checklistShield';

export type ChartId =
  | 'chartTechnologies'
  | 'chartSpectrum'
  | 'chartJVAnatomy'
  | 'chartQEDiagnosis'
  | 'chartCVMott'
  | 'chartThicknessSweep'
  | 'chartTempChallenge'
  | 'chartValidation';

export type UIWalkthroughType = 'actionPanel' | 'cellDef' | 'batchSetup';
export type SimType = 'bandSim' | 'jvSim' | 'defectSim';

export interface TimelineItem {
  step: string;
  time: string;
  en: string;
  ar: string;
  slides: string;
}

export interface EquationItem {
  label: string;
  formula: string;
}

export interface BaseSlide {
  id: number;
  modCode: string;
  modEn: string;
  modAr: string;
  titleEn: string;
  titleAr: string;
  notes: string;
}

export interface HeroSlide extends BaseSlide {
  type: 'hero';
  subEn: string;
  subAr: string;
  badges: string[];
}

export interface TimelineSlide extends BaseSlide {
  type: 'timeline';
  items: TimelineItem[];
}

export interface ComparisonSlide extends BaseSlide {
  type: 'comparison';
  leftTitleEn: string;
  leftTitleAr: string;
  leftPointsEn: string[];
  leftPointsAr: string[];
  rightTitleEn: string;
  rightTitleAr: string;
  rightPointsEn: string[];
  rightPointsAr: string[];
}

export interface SplitDiagramSlide extends BaseSlide {
  type: 'split-diagram';
  svgType: SVGType;
  enPoints: string[];
  arPoints: string[];
}

export interface EquationsSlide extends BaseSlide {
  type: 'equations';
  equations: EquationItem[];
  enText: string;
  arText: string;
}

export interface ChartSlide extends BaseSlide {
  type: 'chart';
  chartId: ChartId;
  enText: string;
  arText: string;
  caption: string;
}

export interface LabTableSlide extends BaseSlide {
  type: 'lab-table';
  headers: string[];
  rows: string[][];
  tipEn: string;
  tipAr: string;
}

export interface UIWalkthroughSlide extends BaseSlide {
  type: 'ui-walkthrough';
  uiType: UIWalkthroughType;
}

export interface InteractiveSimSlide extends BaseSlide {
  type: 'interactive-sim';
  simType: SimType;
}

export interface QuizSlide extends BaseSlide {
  type: 'quiz';
}

export type SlideData =
  | HeroSlide
  | TimelineSlide
  | ComparisonSlide
  | SplitDiagramSlide
  | EquationsSlide
  | ChartSlide
  | LabTableSlide
  | UIWalkthroughSlide
  | InteractiveSimSlide
  | QuizSlide;

export const MODULES = [
  { code: 'M1', en: 'M1: Introduction', ar: 'و١: المقدمة' },
  { code: 'M2', en: 'M2: Physics Core', ar: 'و٢: الفيزياء الأساسية' },
  { code: 'M3', en: 'M3: Interface', ar: 'و٣: واجهة البرنامج' },
  { code: 'M4', en: 'M4: Outputs', ar: 'و٤: المخرجات والقياسات' },
  { code: 'M5', en: 'M5: Hands-On Lab 1', ar: 'و٥: التطبيق العملي ١' },
  { code: 'M6', en: 'M6: Lab 2 & Automation', ar: 'و٦: البيروفسكايت والأتمتة' },
  { code: 'M7', en: 'M7: Mastery', ar: 'و٧: الإتقان والتحقق' },
];

export const SLIDES: SlideData[] = [
  // --- MODULE 1: INTRO & THE WHY (1-7) ---
  {
    id: 1,
    modCode: 'M1',
    modEn: 'M1: Introduction',
    modAr: 'و١: المقدمة',
    type: 'hero',
    titleEn: 'Mastering SCAPS-1D',
    titleAr: 'إتقان محاكاة الخلايا الشمسية عبر SCAPS-1D',
    subEn: 'A 120-Minute Interactive Beginner Workshop: From Semiconductor Physics to Real Solar Cell Simulation',
    subAr: 'ورشة تدريبية تفاعلية للمبتدئين لمدة ١٢٠ دقيقة: من فيزياء أشباه الموصلات إلى محاكاة الخلايا الشمسية عملياً',
    badges: ['54 Interactive Slides', '120 Minutes', '2 Hands-On Labs', 'Bilingual EN / AR'],
    notes: 'Welcome trainees! Set expectations: zero prior SCAPS-1D experience required. Ensure everyone has SCAPS 3.3+ installed or ready for Lab 1 at slide 34. (~2 min)',
  },
  {
    id: 2,
    modCode: 'M1',
    modEn: 'M1: Introduction',
    modAr: 'و١: المقدمة',
    type: 'timeline',
    titleEn: '120-Minute Workshop Roadmap',
    titleAr: 'خارطة طريق الورشة التدريبية (١٢٠ دقيقة)',
    items: [
      { step: 'M1', time: '12 min', en: 'Why Simulate & Setup', ar: 'أهمية المحاكاة والتثبيت', slides: '1–7' },
      { step: 'M2', time: '20 min', en: 'Semiconductor Physics', ar: 'فيزياء أشباه الموصلات', slides: '8–16' },
      { step: 'M3', time: '18 min', en: 'Interface & Inputs', ar: 'الواجهة والمدخلات', slides: '17–24' },
      { step: 'M4', time: '20 min', en: 'J-V, QE, C-V Outputs', ar: 'قراءة منحنيات الأداء', slides: '25–33' },
      { step: 'M5', time: '25 min', en: 'Lab 1: CIGS Cell', ar: 'التطبيق ١: خلية CIGS', slides: '34–42' },
      { step: 'M6', time: '18 min', en: 'Lab 2: Perovskite & Batch', ar: 'التطبيق ٢: البيروفسكايت', slides: '43–50' },
      { step: 'M7', time: '7 min', en: 'Validation & Quiz', ar: 'التحقق والاختبار', slides: '51–54' },
    ],
    notes: 'Walk through the 7 modules so beginners understand the logical progression from theory to hands-on simulation. (~2 min)',
  },
  {
    id: 3,
    modCode: 'M1',
    modEn: 'M1: Introduction',
    modAr: 'و١: المقدمة',
    type: 'comparison',
    titleEn: 'Why Simulate Before Lab Fabrication?',
    titleAr: 'لماذا نحاكي الخلايا الشمسية قبل التصنيع المخبري؟',
    leftTitleEn: 'Trial-and-Error Lab Only',
    leftTitleAr: 'التجربة المخبرية فقط',
    leftPointsEn: [
      'Expensive raw precursors & cleanroom time',
      'Weeks per deposition & testing cycle',
      'Hard to isolate single loss mechanisms (bulk vs interface)',
    ],
    leftPointsAr: [
      'تكلفة عالية للمواد الأولية والغرف النظيفة',
      'أسابيع لكل دورة ترسيب واختبار',
      'صعوبة فصل أسباب الفاقد (العيوب الحجمية مقابل السطحية)',
    ],
    rightTitleEn: 'Numerical Simulation First (SCAPS-1D)',
    rightTitleAr: 'المحاكاة الرقمية أولاً (SCAPS-1D)',
    rightPointsEn: [
      'Test 100+ thicknesses & dopings in minutes',
      'Visualize internal bands, fields & recombination',
      'Identify bottlenecks & guide optimal fabrication',
    ],
    rightPointsAr: [
      'اختبار مئات السماكات والتطعيمات في دقائق',
      'رؤية حزم الطاقة والمجال الكهربائي وإعادة الالتحام داخلياً',
      'تحديد نقاط الضعف وتوجيه التصنيع الأمثل',
    ],
    notes: 'Emphasize that simulation complements—never replaces—experimental validation. (~2 min)',
  },
  {
    id: 4,
    modCode: 'M1',
    modEn: 'M1: Introduction',
    modAr: 'و١: المقدمة',
    type: 'split-diagram',
    titleEn: 'What is SCAPS-1D?',
    titleAr: 'ما هو برنامج SCAPS-1D؟',
    svgType: 'scapsCore',
    enPoints: [
      'Solar Cell Capacitance Simulator in 1 Dimension.',
      'Developed by Prof. Marc Burgelman & team at ELIS, University of Ghent (Belgium).',
      'Free for academic & research use worldwide.',
      'Solves coupled Poisson and electron/hole continuity equations across stacked planar layers.',
    ],
    arPoints: [
      'محاكي سعة الخلايا الشمسية في بُعد واحد (1D).',
      'طوّره البروفيسور مارك بورغلمان وفريقه في جامعة غنت ببلجيكا.',
      'متاح مجاناً للباحثين والجامعات حول العالم.',
      'يحل معادلات بواسون والاستمرارية للإلكترونات والفجوات عبر طبقات مستوية.',
    ],
    notes: 'Mention proper citation of Burgelman et al., Thin Solid Films (2000) in research papers. (~2 min)',
  },
  {
    id: 5,
    modCode: 'M1',
    modEn: 'M1: Introduction',
    modAr: 'و١: المقدمة',
    type: 'comparison',
    titleEn: '1D vs 2D/3D Simulation Scope',
    titleAr: 'نطاق المحاكاة: البُعد الواحد (1D) مقابل 2D/3D',
    leftTitleEn: '1D Modeling (SCAPS-1D, wxAMPS)',
    leftTitleAr: 'النمذجة أحادية البعد (SCAPS-1D)',
    leftPointsEn: [
      'Assumes uniform planar layers along thickness (x-axis)',
      'Ultra-fast convergence (milliseconds to seconds)',
      'Ideal for thin-film & tandem vertical physics',
    ],
    leftPointsAr: [
      'تفترض تجانس الطبقات أفقياً والحل على محور السماكة x',
      'سرعة فائقة في الحساب (أجزاء من الثانية إلى ثوانٍ)',
      'مثالية لفيزياء الأغشية الرقيقة والخلايا الترادفية',
    ],
    rightTitleEn: '2D / 3D TCAD (Silvaco, Sentaurus, COMSOL)',
    rightTitleAr: 'النمذجة ثنائية وثلاثية الأبعاد',
    rightPointsEn: [
      'Captures lateral fingers, grain boundaries & shading',
      'Requires heavy meshing, licensing & hours of CPU',
      'Overkill for initial vertical stack optimization',
    ],
    rightPointsAr: [
      'تحاكي التوصيلات الجانبية وحدود الحبيبات والتظليل',
      'تحتاج شبكات معقدة وتراخيص مكلفة وساعات حوسبة',
      'غير ضرورية لتحسين البنية العمودية الأولية',
    ],
    notes: 'Clarify when 1D is valid (planar thin films) and when 2D/3D is needed (interdigitated back contacts, lateral grids). (~2 min)',
  },
  {
    id: 6,
    modCode: 'M1',
    modEn: 'M1: Introduction',
    modAr: 'و١: المقدمة',
    type: 'chart',
    chartId: 'chartTechnologies',
    titleEn: 'Supported PV Technologies in SCAPS-1D',
    titleAr: 'تقنيات الخلايا الشمسية المدعومة في البرنامج',
    enText:
      'Originally built for polycrystalline CIGS and CdTe, SCAPS-1D now powers thousands of studies on Perovskite, CZTS, Sb₂Se₃, a-Si/c-Si heterojunctions, and organic/tandem cells (multi-layer up to 7+ semiconductor layers).',
    arText:
      'صُمم البرنامج في الأصل لخلايا CIGS و CdTe، ويُستخدم اليوم بكثافة في أبحاث البيروفسكايت و CZTS والسيليكون غير المتجانس، ويدعم نمذجة 7 طبقات شبه موصلة أو أكثر.',
    caption: 'Illustrative distribution of SCAPS-1D simulation capability across major PV architectures.',
    notes: 'Show beginners that the exact same physics engine handles diverse material systems. (~2 min)',
  },
  {
    id: 7,
    modCode: 'M1',
    modEn: 'M1: Introduction',
    modAr: 'و١: المقدمة',
    type: 'split-diagram',
    titleEn: 'Installation & Workspace Overview',
    titleAr: 'التثبيت ونظرة عامة على بيئة العمل',
    svgType: 'folderTree',
    enPoints: [
      'Windows native executable (runs smoothly via Wine on macOS/Linux).',
      'No complex registry setup: unzip folder and run scaps3310.exe.',
      'Key folders: /def (cell structures), /absorption (α files), /spectrum (AM1.5G), /filter, /results.',
      'Tip: Keep project paths short without special characters.',
    ],
    arPoints: [
      'يعمل مباشرة على ويندوز (ويمكن تشغيله عبر Wine على ماك ولينكس).',
      'لا يحتاج تثبيتاً معقداً: فك الضغط وشغّل الملف التنفيذي مباشرة.',
      'أهم المجلدات: /def (تعاريف الخلايا)، /absorption (الامتصاص)، /spectrum (الطيف)، /results.',
      'نصيحة: استخدم مسار مجلد قصيراً بدون رموز أو مسافات معقدة.',
    ],
    notes: 'Have participants verify they can see the /def and /absorption folders on their machines. (~2 min)',
  },

  // --- MODULE 2: SEMICONDUCTOR PHYSICS CORE (8-16) ---
  {
    id: 8,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'equations',
    titleEn: 'The 3 Fundamental Coupled Equations',
    titleAr: 'المعادلات الفيزيائية الأساسية الثلاث في SCAPS-1D',
    equations: [
      { label: "1. Poisson's Equation · معادلة بواسون", formula: 'd/dx (ε(x) dψ/dx) = -q [ p - n + N_D⁺ - N_A⁻ + p_t - n_t ]' },
      { label: '2. Electron Continuity · استمرارية الإلكترونات', formula: '-(1/q) dJ_n/dx = G(x) - R_n(x)' },
      { label: '3. Hole Continuity · استمرارية الفجوات', formula: '(1/q) dJ_p/dx = G(x) - R_p(x)' },
    ],
    enText:
      'At every mesh point x across the cell, SCAPS iteratively solves for three unknowns: electrostatic potential ψ(x), and quasi-Fermi levels E_Fn(x), E_Fp(x).',
    arText:
      'عند كل نقطة شبكة x داخل الخلية، يحل البرنامج المعادلات الثلاث بالتكرار لإيجاد: الجهد الكهربائي ψ(x)، ومستويات شبه فيرمي للإلكترونات والفجوات.',
    notes: "Don't intimidate beginners with math—highlight the 3 unknowns: ψ, n, p. (~3 min)",
  },
  {
    id: 9,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'split-diagram',
    titleEn: "Poisson's Equation Visualized",
    titleAr: 'تبسيط معادلة بواسون: الشحنة تصنع المجال',
    svgType: 'poissonBand',
    enPoints: [
      'Space charge density ρ(x) creates an electric field E(x) = -dψ/dx.',
      'In the depletion region (p-n junction), ionized donors (+N_D) and acceptors (-N_A) build the built-in potential V_bi.',
      'Charged defects (n_t, p_t) alter band bending and can screen the electric field!',
    ],
    arPoints: [
      'توزع الشحنات المكانية ρ(x) يولّد المجال الكهربائي الداخلي E(x).',
      'في منطقة الاستنزاف (الوصلة p-n)، تخلق الذرات المتأينة (+N_D و -N_A) الجهد الداخلي V_bi.',
      'العيوب المشحونة (n_t, p_t) تغير انحناء الحزم وقد تُضعف المجال الكهربائي!',
    ],
    notes: 'Connect space charge directly to why doping and defects matter in SCAPS. (~2 min)',
  },
  {
    id: 10,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'split-diagram',
    titleEn: 'Continuity: Generation vs Recombination',
    titleAr: 'معادلات الاستمرارية: التوليد مقابل إعادة الالتحام',
    svgType: 'continuityFlow',
    enPoints: [
      'Generation G(x): Photons with hν ≥ E_g excite electrons from valence to conduction band.',
      'Recombination R(x): Excited carriers recombine before reaching the contacts (current loss).',
      'Net current J results from the survival balance: ∫(G - R)dx.',
    ],
    arPoints: [
      'التوليد G(x): الفوتونات ذات الطاقة hν ≥ E_g تثير الإلكترونات من حزمة التكافؤ إلى التوصيل.',
      'إعادة الالتحام R(x): التقاء الإلكترون والفجوة وفقدانهما قبل الوصول للأقطاب (خسارة تيار).',
      'التيار الصافي للخلية هو محصلة التوازن بين التوليد وإعادة الالتحام.',
    ],
    notes: 'Use a simple bucket analogy: G is water pouring in, R is leaks, J is useful flow out. (~2 min)',
  },
  {
    id: 11,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'interactive-sim',
    simType: 'bandSim',
    titleEn: 'Interactive Energy Band Parameters (E_g, χ, E_F)',
    titleAr: 'معاملات حزم الطاقة التفاعلية (فجوة الطاقة والألفة)',
    notes: 'Demonstrate live how changing Electron Affinity (χ) shifts E_c while Bandgap (E_g) pushes E_v down. (~3 min)',
  },
  {
    id: 12,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'comparison',
    titleEn: 'Band Alignment at Heterojunctions: Spike vs Cliff',
    titleAr: 'توافق الحزم في الوصلات غير المتجانسة: القمة مقابل الحافة',
    leftTitleEn: 'Conduction Band Offset: Spike (ΔE_c > 0)',
    leftTitleAr: 'حاجز القمة (Spike: ΔE_c > 0)',
    leftPointsEn: [
      'Buffer E_c is higher than Absorber E_c',
      'Moderate spike (0–0.3 eV) reduces interface recombination',
      'Too large spike (>0.4 eV) blocks electron extraction (S-shape J-V)',
    ],
    leftPointsAr: [
      'حزمة توصيل الطبقة العازلة أعلى من الامتصاص',
      'قمة صغيرة (0–0.3 eV) تقلل إعادة الالتحام السطحي',
      'قمة كبيرة (>0.4 eV) تمنع خروج الإلكترونات وتشوه منحنى J-V',
    ],
    rightTitleEn: 'Conduction Band Offset: Cliff (ΔE_c < 0)',
    rightTitleAr: 'انخفاض الحافة (Cliff: ΔE_c < 0)',
    rightPointsEn: [
      'Buffer E_c is lower than Absorber E_c',
      'Zero barrier to electron transport (high J_sc)',
      'Reduces effective interface gap → high recombination → lowers V_oc',
    ],
    rightPointsAr: [
      'حزمة توصيل الطبقة العازلة أدنى من الامتصاص',
      'لا يوجد حاجز أمام مرور الإلكترونات (تيار J_sc جيد)',
      'يضيق الفجوة الفعالة عند السطح ← يزداد الالتحام ← ينخفض V_oc',
    ],
    notes: 'Crucial concept for CIGS (CdS/CIGS) and Perovskite (ETL/Perovskite) beginners! (~3 min)',
  },
  {
    id: 13,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'split-diagram',
    titleEn: 'Carrier Transport: Drift vs Diffusion',
    titleAr: 'آليات انتقال الحاملات: الانجراف مقابل الانتشار',
    svgType: 'driftDiffusion',
    enPoints: [
      'Drift (J_drift = q n μ_n E): Driven by internal electric field inside the depletion zone.',
      'Diffusion (J_diff = q D_n dn/dx): Driven by carrier concentration gradients in quasi-neutral regions.',
      'Einstein Relation connects them: D = (k_B T / q) · μ.',
    ],
    arPoints: [
      'الانجراف (Drift): حركة الحاملات بتأثير المجال الكهربائي في منطقة الاستنزاف.',
      'الانتشار (Diffusion): حركة الحاملات من التركيز العالي إلى المنخفض في المناطق شبه المتعادلة.',
      'علاقة أينشتاين تربط الانتشارية بالحركية: D = (k_B T / q) · μ.',
    ],
    notes: 'Explain why high mobility μ increases diffusion length L = √(Dτ). (~2 min)',
  },
  {
    id: 14,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'split-diagram',
    titleEn: 'Recombination Mechanisms (Radiative, Auger, SRH)',
    titleAr: 'آليات إعادة الالتحام (الإشعاعي، أوجيه، SRH)',
    svgType: 'recombination3',
    enPoints: [
      'Radiative (Band-to-Band): Electron drops directly to valence band, emitting a photon (fundamental limit).',
      'Auger: Energy transferred to a 3rd carrier (dominant at ultra-high doping or concentration).',
      'Shockley-Read-Hall (SRH): Defect-assisted trap inside bandgap (dominant loss in real thin-film cells!).',
    ],
    arPoints: [
      'الإشعاعي: انتقال مباشر من التوصيل للتكافؤ مع إطلاق فوتون (الحد النظري المثالي).',
      'أوجيه (Auger): نقل الطاقة لحامل شحنة ثالث (يظهر عند التطعيم العالي جداً).',
      'شوكلي-ريد-هول (SRH): عبر مستويات عيوب داخل الفجوة (السبب الرئيسي للخسائر عملياً!).',
    ],
    notes: 'Highlight that SCAPS lets you enable/set Radiative coefficient B, Auger constants c_n/c_p, and SRH defect traps. (~2 min)',
  },
  {
    id: 15,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'equations',
    titleEn: 'SRH Defect Parameters in SCAPS-1D',
    titleAr: 'معاملات عيوب SRH داخل برنامج SCAPS-1D',
    equations: [
      { label: 'Carrier Lifetime · عمر الحاملات', formula: 'τ_n = 1 / (σ_n · v_th · N_t)' },
      { label: 'Diffusion Length · طول الانتشار', formula: 'L_n = √(D_n · τ_n)' },
    ],
    enText:
      'Key SCAPS trap inputs: Defect density N_t (cm⁻³), capture cross-sections σ_n, σ_p (cm²), thermal velocity v_th (~10⁷ cm/s), energy level E_t, and charge type (neutral, donor, acceptor).',
    arText:
      'مدخلات العيوب في SCAPS: كثافة العيوب N_t، مقطع الالتقاط σ_n و σ_p، السرعة الحرارية v_th، مستوى الطاقة E_t، ونوع المصيدة (متعادلة، مانحة، متقبلة).',
    notes: 'Teach beginners the golden rule: higher N_t or σ → shorter τ → shorter L → lower J_sc and V_oc. (~2 min)',
  },
  {
    id: 16,
    modCode: 'M2',
    modEn: 'M2: Physics Core',
    modAr: 'و٢: الفيزياء الأساسية',
    type: 'split-diagram',
    titleEn: 'Optical Absorption Models α(λ)',
    titleAr: 'نماذج معامل الامتصاص الضوئي α(λ)',
    svgType: 'absorptionModel',
    enPoints: [
      'Beer-Lambert Law: I(x) = I₀ exp(-α(λ) · x).',
      'Option 1 in SCAPS: Built-in square-root model α = A · √(hν - E_g) for direct bandgap.',
      'Option 2 (Preferred): Load experimental tabulated α(λ) file (.abs) for accurate optical response!',
    ],
    arPoints: [
      'قانون بير-لامبرت يصف تناقص شدة الضوء مع العمق x.',
      'الخيار ١ في SCAPS: نموذج الجذر التربيعي المدمج α = A·√(hν - E_g).',
      'الخيار ٢ (الأفضل): استيراد ملف بيانات تجريبية (.abs) لدقة الامتصاص الفعلي لكل مادة.',
    ],
    notes: 'Show how thin films like Perovskite/CIGS have high α (~10⁵ cm⁻¹), needing only ~0.5–2 µm, unlike c-Si (~200 µm). (~2 min)',
  },

  // --- MODULE 3: INTERFACE & ACTION PANEL (17-24) ---
  {
    id: 17,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'ui-walkthrough',
    uiType: 'actionPanel',
    titleEn: 'The Action Panel (Command Center)',
    titleAr: 'لوحة التحكم الرئيسية (Action Panel)',
    notes: 'Click each interactive hotspot in the UI mockup to explain Problem Definition, Working Point, Action List, and Calculate! (~3 min)',
  },
  {
    id: 18,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'split-diagram',
    titleEn: 'Setting the Working Point (T, V, f, Light)',
    titleAr: 'ضبط نقطة التشغيل (الحرارة، الجهد، التردد، الإضاءة)',
    svgType: 'workingPoint',
    enPoints: [
      'Temperature (T): Standard Test Condition (STC) = 300 K.',
      'Voltage (V) & Frequency (f): Default AC frequency = 10⁶ Hz (1 MHz) for C-V.',
      'Illumination: Toggle Dark vs Light; choose spectrum & incident side (Left or Right contact).',
    ],
    arPoints: [
      'درجة الحرارة (T): الظروف القياسية تساوي 300 كلفن.',
      'الجهد والتردد: التردد الافتراضي للقياسات السعوية هو 1 MHz.',
      'الإضاءة: التبديل بين الظلام والإضاءة، وتحديد جهة سقوط الضوء (من اليسار أو اليمين).',
    ],
    notes: 'Warn beginners: always double-check which side the light enters from (Left = Top layer in stack)! (~2 min)',
  },
  {
    id: 19,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'chart',
    chartId: 'chartSpectrum',
    titleEn: 'Standard Illumination Spectra (AM1.5G vs AM0)',
    titleAr: 'أطياف الإضاءة القياسية (AM1.5G مقابل AM0)',
    enText:
      'AM1.5G (1000 W/m² = 100 mW/cm²) is the terrestrial standard for solar cells. AM0 (1366 W/m²) is used for space applications. Custom optical filters (.flt) can simulate tandem sub-cells.',
    arText:
      'طيف AM1.5G (بشدة 1000 واط/م²) هو المعيار العالمي لاختبار الخلايا الأرضية، بينما AM0 مخصص للفضاء. يمكن إضافة فلاتر ضوئية لمحاكاة الخلايا الترادفية.',
    caption: 'Illustrative spectral irradiance profile comparing AM1.5G terrestrial and AM0 space spectra.',
    notes: 'Remind trainees to verify AM1_5G 1 sun.spe is loaded before running J-V. (~2 min)',
  },
  {
    id: 20,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'ui-walkthrough',
    uiType: 'cellDef',
    titleEn: 'Building the Device Stack (Solar Cell Definition)',
    titleAr: 'بناء هيكل الخلية (نافذة تعريف الخلية الشمسية)',
    notes: 'Show how layers are stacked from Back Contact (left) to Front Contact (right), or vice versa depending on light direction. (~3 min)',
  },
  {
    id: 21,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'split-diagram',
    titleEn: 'Layer Properties: Geometry & Band Parameters',
    titleAr: 'خصائص الطبقة: السماكة ومعاملات الحزم',
    svgType: 'layerDialog',
    enPoints: [
      'Thickness (d): Measured in µm (e.g., 0.5 µm = 500 nm).',
      'Bandgap E_g (eV) & Electron Affinity χ (eV).',
      'Relative Permittivity ε_r & Effective Density of States N_C, N_V (cm⁻³).',
      'Thermal velocities v_th,n and v_th,p (typically 10⁷ cm/s).',
    ],
    arPoints: [
      'السماكة (d): تُدخل بالميكرومتر µm (مثال: 0.5 µm تساوي 500 nm).',
      'فجوة الطاقة E_g والألفة الإلكترونية χ بوحدة الإلكترون-فولت eV.',
      'السماحية النسبية ε_r وكثافة الحالات الفعالة N_C و N_V.',
      'السرعات الحرارية للحاملات (عادة 10⁷ سم/ث).',
    ],
    notes: 'Point out unit conversion mistakes (µm vs nm) are the #1 beginner error in SCAPS. (~2 min)',
  },
  {
    id: 22,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'split-diagram',
    titleEn: 'Doping Profiles (N_A, N_D) & Mobility (μ_n, μ_p)',
    titleAr: 'التطعيم الكهربائي (N_A, N_D) والحركية (μ_n, μ_p)',
    svgType: 'dopingMobility',
    enPoints: [
      'Shallow uniform donor density N_D (n-type) & acceptor density N_A (p-type) in cm⁻³.',
      'Supports graded doping profiles (linear, exponential, erf) for BSF or graded absorbers.',
      'Electron & hole mobilities μ_n, μ_p (cm²/V·s) govern series resistance & collection.',
    ],
    arPoints: [
      'تركيز الشوائب المانحة N_D (النوع n) والمتقبلة N_A (النوع p) بوحدة cm⁻³.',
      'يدعم البرنامج التطعيم المتدرج (خطي، أسي) لمحاكاة طبقات الحقل الخلفي BSF.',
      'حركية الإلكترونات والفجوات μ_n, μ_p تحكم المقاومة المتسلسلة وجمع الشحنات.',
    ],
    notes: 'Explain intrinsic/undoped absorbers (like i-Perovskite) vs heavily doped contacts/windows. (~2 min)',
  },
  {
    id: 23,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'split-diagram',
    titleEn: 'Front & Back Contacts (Φ_m, S_n, S_p, R)',
    titleAr: 'الأقطاب الأمامية والخلفية (دالة الشغل والانعكاسية)',
    svgType: 'contactsDiagram',
    enPoints: [
      'Flat-band option vs explicit Metal Work Function Φ_m (eV) creating Ohmic or Schottky barrier.',
      'Surface Recombination Velocities S_n, S_p (cm/s) for majority & minority carriers.',
      'Optical reflection / transmission percentage at front & back contacts.',
    ],
    arPoints: [
      'خيار الحزمة المسطحة أو تحديد دالة الشغل Φ_m لتحديد هل الوصلة أومية أم شوتكي.',
      'سرعة إعادة الالتحام السطحي S_n و S_p عند الأقطاب.',
      'نسبة الانعكاس أو النفاذية الضوئية عند السطحين الأمامي والخلفي.',
    ],
    notes: 'Explain why a wrong back contact Φ_m creates a rollover/Schottky barrier in J-V! (~2 min)',
  },
  {
    id: 24,
    modCode: 'M3',
    modEn: 'M3: Interface',
    modAr: 'و٣: واجهة البرنامج',
    type: 'split-diagram',
    titleEn: 'Interface Defects Between Layers',
    titleAr: 'نمذجة عيوب السطوح البينية بين الطبقات',
    svgType: 'interfaceDefects',
    enPoints: [
      'Click the vertical line between any two layers in SCAPS to add an Interface Defect.',
      'Units change from volume (cm⁻³) to areal density (cm⁻²).',
      'Critical for simulating grain boundaries, buffer/absorber lattice mismatch, and ETL/Perovskite interfaces.',
    ],
    arPoints: [
      'انقر على الخط الفاصل بين أي طبقتين لإضافة عيوب السطح البيني.',
      'تتغير وحدة الكثافة هنا من الحجمية (cm⁻³) إلى السطحية (cm⁻²).',
      'ضرورية جداً لمحاكاة عدم التطابق الشبكي في الوصلات غير المتجانسة والبيروفسكايت.',
    ],
    notes: 'Show visually how interface defects kill V_oc even if bulk quality is excellent. (~2 min)',
  },

  // --- MODULE 4: ESSENTIAL MEASUREMENTS & OUTPUTS (25-33) ---
  {
    id: 25,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'chart',
    chartId: 'chartJVAnatomy',
    titleEn: 'J-V Characteristics Curve Anatomy',
    titleAr: 'تشريح منحنى التيار والجهد (J-V)',
    enText:
      'Sweeping voltage from 0 to >V_oc under illumination produces the J-V curve. Dark J-V reveals diode ideality factor (n) and saturation current (J₀). Note SCAPS plots J in mA/cm².',
    arText:
      'مسح الجهد من صفر إلى ما بعد V_oc تحت الإضاءة ينتج منحنى J-V. أما منحنى الظلام فيكشف معامل المثالية (n) وتيار التشبع (J₀).',
    caption: 'Illustrative Dark vs Illuminated J-V curves highlighting power-generating quadrant.',
    notes: 'Clarify sign convention in SCAPS (positive J_sc in light quadrant vs negative depending on view). (~2 min)',
  },
  {
    id: 26,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'equations',
    titleEn: 'Extracting Key PV Metrics (V_oc, J_sc, FF, η)',
    titleAr: 'استخراج معاملات الأداء الأساسية للخلية الشمسية',
    equations: [
      { label: 'Fill Factor · عامل الملء', formula: 'FF = (J_mpp · V_mpp) / (J_sc · V_oc)' },
      { label: 'Power Conversion Efficiency · كفاءة التحويل', formula: 'η (%) = (J_sc · V_oc · FF) / P_in × 100' },
    ],
    enText:
      'P_in for AM1.5G is 100 mW/cm². SCAPS automatically displays V_oc (V), J_sc (mA/cm²), FF (%), and Eta (%) right on the J-V panel.',
    arText:
      'قدرة الضوء الساقط في AM1.5G تساوي 100 mW/cm². يحسب البرنامج القيم الأربع تلقائياً ويعرضها مباشرة في لوحة النتائج.',
    notes: 'Verify trainees understand units: mA/cm² × V / (100 mW/cm²) × 100 = %. (~2 min)',
  },
  {
    id: 27,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'interactive-sim',
    simType: 'jvSim',
    titleEn: 'Interactive J-V Explorer: Effect of R_s & R_sh',
    titleAr: 'مستكشف منحنى J-V التفاعلي: أثر المقاومة المتسلسلة والمتوازية',
    notes: 'Let trainees see in real time: Series resistance R_s tilts the curve near V_oc (kills FF); Shunt resistance R_sh tilts near J_sc! (~3 min)',
  },
  {
    id: 28,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'split-diagram',
    titleEn: 'External Quantum Efficiency (QE / IPCE) Explained',
    titleAr: 'مفهوم الكفاءة الكمية الخارجية (QE / IPCE)',
    svgType: 'qeConcept',
    enPoints: [
      'QE(λ) = (Number of collected electrons) / (Number of incident photons of wavelength λ).',
      'Ideal square QE = 100% from short λ up to bandgap cutoff λ_g = 1240 / E_g (nm).',
      'Integrating QE(λ) × AM1.5G photon flux equals J_sc!',
    ],
    arPoints: [
      'الكفاءة الكمية QE(λ) هي نسبة الإلكترونات المجمعة إلى الفوتونات الساقطة عند طول موجي λ.',
      'في الخلية المثالية تصل إلى 100% حتى الطول الموجي الحدي λ_g = 1240 / E_g.',
      'تكامل منحنى QE مع طيف الشمس يعطي تيار الدائرة القصيرة J_sc.',
    ],
    notes: 'Give quick rule of thumb: E_g = 1.55 eV → cutoff ≈ 800 nm; E_g = 1.1 eV → cutoff ≈ 1127 nm. (~2 min)',
  },
  {
    id: 29,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'chart',
    chartId: 'chartQEDiagnosis',
    titleEn: 'Reading QE Curves: Diagnosing Losses by Wavelength',
    titleAr: 'قراءة منحنى QE وتشخيص مصادر الفاقد حسب الطول الموجي',
    enText:
      'Short λ (<450 nm) loss = Front window absorption / front surface recombination. Mid λ drop = Reflection or bulk recombination. Long λ (>750 nm) drop = Thin absorber or back recombination.',
    arText:
      'النقص في الموجات القصيرة = امتصاص طبقة النافذة أو التقاء سطحي أمامي. النقص الوسطي = انعكاس أو عيوب حجمية. النقص الطويل = سماكة امتصاص غير كافية أو التقاء خلفي.',
    caption: 'Illustrative QE curve comparing ideal vs realistic loss regions across wavelength.',
    notes: 'This diagnostic chart is one of the most valuable tools for any PV researcher! (~3 min)',
  },
  {
    id: 30,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'chart',
    chartId: 'chartCVMott',
    titleEn: 'C-V & Mott-Schottky Analysis (1/C² vs V)',
    titleAr: 'قياسات السعة-الجهد (C-V) وتحليل موت-شوتكي',
    enText:
      'SCAPS calculates junction capacitance C(V) via small-signal AC perturbation. Plotting 1/C² vs V yields Built-in Voltage V_bi (x-intercept) and apparent doping density N_A (from slope).',
    arText:
      'يحسب البرنامج السعة بتطبيق إشارة مترددة صغيرة. رسم 1/C² مقابل الجهد يعطي الجهد الداخلي V_bi (من التقاطع) وتركيز التطعيم الفعلي (من الميل).',
    caption: 'Illustrative Mott-Schottky plot (1/C² vs Bias Voltage) for extracting V_bi and doping.',
    notes: 'Remind beginners why the software is literally named Solar Cell *Capacitance* Simulator! (~2 min)',
  },
  {
    id: 31,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'split-diagram',
    titleEn: 'C-f (Admittance Spectroscopy) & Defect Probing',
    titleAr: 'قياسات السعة-التردد (C-f) ومطيافية العيوب',
    svgType: 'cfStep',
    enPoints: [
      'At low frequency f, deep traps can follow the AC voltage and contribute extra capacitance.',
      'At high frequency f, slow traps freeze out → capacitance drops to geometric value C_geo.',
      'The step frequency ω₀ reveals trap activation energy E_t.',
    ],
    arPoints: [
      'عند الترددات المنخفضة تستجيب العيوب العميقة للإشارة المترددة وتزيد السعة المقاسة.',
      'عند الترددات العالية تتجمد المصائد البطيئة فتنخفض السعة للقيمة الهندسية.',
      'تردد الانتقال يكشف طاقة تنشيط العيوب E_t.',
    ],
    notes: 'Briefly introduce C-f so beginners recognize the C-f checkbox in the Action Panel. (~2 min)',
  },
  {
    id: 32,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'split-diagram',
    titleEn: 'Energy Band & Electric Field Output Plots',
    titleAr: 'رسوم حزم الطاقة والمجال الكهربائي الداخلية',
    svgType: 'ebOutput',
    enPoints: [
      'Energy Bands Panel displays E_c(x), E_v(x), E_Fn(x), and E_Fp(x) across cell depth.',
      'Quasi-Fermi level splitting (E_Fn - E_Fp) inside the absorber represents maximum achievable V_oc.',
      'Electric Field E(x) plot reveals where depletion occurs and if barriers block carriers.',
    ],
    arPoints: [
      'تعرض نافذة حزم الطاقة تغير E_c و E_v ومستويات شبه فيرمي عبر عمق الخلية.',
      'الفارق (E_Fn - E_Fp) داخل طبقة الامتصاص يحدد أقصى جهد دائرة مفتوحة V_oc ممكن.',
      'رسم المجال الكهربائي E(x) يكشف عرض منطقة الاستنزاف وأي حواجز تعيق الشحنات.',
    ],
    notes: 'Teach trainees to always inspect the Energy Band plot after every simulation! (~2 min)',
  },
  {
    id: 33,
    modCode: 'M4',
    modEn: 'M4: Outputs',
    modAr: 'و٤: المخرجات والقياسات',
    type: 'split-diagram',
    titleEn: 'Generation & Recombination Spatial Profiles',
    titleAr: 'التوزيع المكاني للتوليد وإعادة الالتحام',
    svgType: 'genRecProfile',
    enPoints: [
      'Visualizes G(x) exponential decay from illuminated front surface.',
      'Overlays R_SRH(x), R_rad(x), and R_Auger(x) across every layer.',
      'Immediately pinpoints whether losses happen in the bulk, front interface, or back contact!',
    ],
    arPoints: [
      'يعرض التناقص الأسي للتوليد G(x) بدءاً من السطح المعرض للضوء.',
      'يقارن بين معدلات إعادة الالتحام المختلفة عبر كل طبقة من طبقات الخلية.',
      'يحدد فوراً أين تحدث الخسارة الكبرى: في الحجم أم السطح الأمامي أم الخلفي.',
    ],
    notes: "Transition note: Now that we know the physics and outputs, let's build our first cell hands-on! (~2 min)",
  },

  // --- MODULE 5: LAB 1 - CLASSIC CIGS CELL (34-42) ---
  {
    id: 34,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'hero',
    titleEn: 'Lab 1: Your First Solar Cell Simulation',
    titleAr: 'التطبيق العملي الأول: بناء ومحاكاة خلية CIGS',
    subEn: 'Step-by-step guided practice: ZnO / CdS / CIGS heterojunction thin-film solar cell',
    subAr: 'تدريب عملي خطوة بخطوة: محاكاة خلية الأغشية الرقيقة ZnO / CdS / CIGS',
    badges: ['Duration: 25 min', '3 Semiconductor Layers', 'AM1.5G @ 300K', 'J-V + QE + Optimization'],
    notes: 'Ask all beginners to open SCAPS-1D on their laptops now. Go slowly and verify each step. (~2 min)',
  },
  {
    id: 35,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'split-diagram',
    titleEn: 'Step 1: Launch & Inspect Default Example',
    titleAr: 'الخطوة ١: تشغيل البرنامج وفتح ملف مثالي جاهز',
    svgType: 'step1Flow',
    enPoints: [
      "Open SCAPS-1D → Click 'Set problem' in Action Panel.",
      "Click 'Load' → Open /def/CIGS-example.def (or build from New).",
      'Inspect the 3-layer stack: Mo (Back) | p-CIGS | n-CdS | i-ZnO / ZnO:Al (Front).',
      'Save a copy as MyFirstCIGS.def so original examples stay intact.',
    ],
    arPoints: [
      'افتح البرنامج واضغط على Set problem في لوحة التحكم.',
      'اضغط Load وافتح ملف المثال CIGS من مجلد /def.',
      'تأمل بنية الطبقات: قطب خلفي Mo | امتصاص p-CIGS | عازل n-CdS | نافذة ZnO.',
      'احفظ نسخة باسم جديد MyFirstCIGS.def للحفاظ على الملف الأصلي.',
    ],
    notes: "Always teach beginners to 'Save As' before editing built-in .def files! (~3 min)",
  },
  {
    id: 36,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'lab-table',
    titleEn: 'Step 2: Define Layer Parameters (CIGS Baseline)',
    titleAr: 'الخطوة ٢: ضبط معاملات الطبقات (خلية CIGS القياسية)',
    headers: ['Parameter', 'p-CIGS (Absorber)', 'n-CdS (Buffer)', 'ZnO:Al (Window)'],
    rows: [
      ['Thickness d (µm)', '2.0', '0.05 (50 nm)', '0.20 (200 nm)'],
      ['Bandgap E_g (eV)', '1.15', '2.40', '3.30'],
      ['Affinity χ (eV)', '4.50', '4.20', '4.40'],
      ['Permittivity ε_r', '13.6', '10.0', '9.0'],
      ['Mobility μ_n / μ_p', '100 / 25', '100 / 25', '100 / 25'],
      ['Doping N_A or N_D (cm⁻³)', 'N_A = 2×10¹⁶', 'N_D = 1×10¹⁷', 'N_D = 1×10¹⁸'],
    ],
    tipEn: 'Double-check units: thickness is in µm, doping is in cm⁻³!',
    tipAr: 'انتبه للوحدات: السماكة بالميكرومتر µm والتطعيم بـ cm⁻³!',
    notes: 'Walk through entering or verifying each column in the Layer Properties dialog. (~4 min)',
  },
  {
    id: 37,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'split-diagram',
    titleEn: 'Step 3: Configure Contacts & AM1.5G Illumination',
    titleAr: 'الخطوة ٣: ضبط الأقطاب وإضاءة AM1.5G',
    svgType: 'step3Setup',
    enPoints: [
      'Back Contact (Left): Flat-band or Mo work function Φ_m ≈ 5.0 eV; S_n = 10⁷, S_p = 10⁷ cm/s.',
      'Front Contact (Right): Flat-band; S_n = 10⁷, S_p = 10⁷ cm/s.',
      "Action Panel: Check 'Light' → Select AM1_5G 1 sun.spe from Right side (ZnO side).",
      'Set T = 300 K, V start = 0 V, V stop = 0.8 V (step 0.02 V).',
    ],
    arPoints: [
      'القطب الخلفي (يسار): دالة شغل Mo نحو 5.0 eV أو Flat-band.',
      'القطب الأمامي (يمين): Flat-band مع سرعة التقاء قياسية.',
      'في لوحة التحكم: فعّل Light واختر طيف AM1_5G 1 sun، جهة السقوط من اليمين (جهة ZnO).',
      'اضبط الحرارة 300 K والجهد من 0 إلى 0.8 فولت بخطوة 0.02 فولت.',
    ],
    notes: 'Common mistake here: shining light from the Back (Mo) side, which gives zero current if Mo blocks light! (~3 min)',
  },
  {
    id: 38,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'split-diagram',
    titleEn: 'Step 4: Run J-V and QE Calculations',
    titleAr: 'الخطوة ٤: تشغيل محاكاة J-V و QE',
    svgType: 'step4Run',
    enPoints: [
      "In Action Panel, tick both 'I-V' (J-V) and 'QE' checkboxes.",
      "Click 'Calculate: single shot' button at the bottom.",
      'Watch the status bar solve voltage points (typically < 1 second).',
      'Navigate output tabs: I-V Panel, QE Panel, Energy Bands.',
    ],
    arPoints: [
      'في لوحة التحكم، فعّل مربعي I-V و QE معاً.',
      'اضغط زر Calculate: single shot في الأسفل.',
      'راقب شريط التقدم لإتمام الحساب (يستغرق عادة أقل من ثانية).',
      'تصفح تبويبات المخرجات: منحنى I-V، منحنى QE، وحزم الطاقة.',
    ],
    notes: 'Pause 1 minute to make sure every beginner gets a converging green calculation! (~3 min)',
  },
  {
    id: 39,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'split-diagram',
    titleEn: 'Step 5: Interpreting Your First Simulation Results',
    titleAr: 'الخطوة ٥: تفسير نتائج المحاكاة الأولى',
    svgType: 'resultsInspect',
    enPoints: [
      'Typical baseline CIGS output: V_oc ≈ 0.65–0.70 V, J_sc ≈ 33–36 mA/cm², FF ≈ 78–82%, η ≈ 18–20%.',
      'Look at QE below 510 nm: notice the drop caused by parasitic absorption in n-CdS (E_g = 2.4 eV)!',
      'Look at Energy Bands: check the small spike at CdS/CIGS interface.',
    ],
    arPoints: [
      'النتائج المتوقعة للخلية القياسية: V_oc ≈ 0.65–0.70 V، تيار 33–36 mA/cm²، كفاءة ~18–20%.',
      'لاحظ هبوط منحنى QE تحت 510 nm بسبب الامتصاص الطفيلي في طبقة CdS (فجوتها 2.4 eV).',
      'افحص مخطط حزم الطاقة لملاحظة التوافق بين CdS و CIGS.',
    ],
    notes: "Ask trainees: 'Why does QE drop sharply around 510 nm and 1080 nm?' (CdS absorption & CIGS bandgap!). (~3 min)",
  },
  {
    id: 40,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'lab-table',
    titleEn: 'Beginner Exercise 1: Absorber Thickness Sweep',
    titleAr: 'تمرين للمبتدئين ١: دراسة أثر سماكة طبقة الامتصاص',
    headers: ['Run #', 'CIGS Thickness (µm)', 'Expected Trend (J_sc)', 'Expected Trend (η)'],
    rows: [
      ['Run 1', '0.2 µm (200 nm)', 'Very low (incomplete light absorption)', 'Low (~10–12%)'],
      ['Run 2', '0.5 µm (500 nm)', 'Moderate increase', 'Rising (~15%)'],
      ['Run 3', '1.0 µm', 'Strong absorption of long λ', 'High (~18%)'],
      ['Run 4', '2.0 µm', 'Near saturation', 'Optimal plateau (~19.5%)'],
      ['Run 5', '4.0 µm', 'Minimal extra gain; higher bulk R if τ low', 'Saturates or slight drop'],
    ],
    tipEn: 'Task: Change CIGS d manually for 5 runs and record V_oc, J_sc, FF, η in a notebook.',
    tipAr: 'المهمة: غيّر سماكة CIGS لـ 5 قيم وسجل تغير المعاملات الأربع لفهم السلوك الفيزيائي.',
    notes: 'Give trainees 4 minutes to run these 5 thicknesses manually before introducing Batch Setup later! (~4 min)',
  },
  {
    id: 41,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'chart',
    chartId: 'chartThicknessSweep',
    titleEn: 'Absorber Thickness Optimization Trend',
    titleAr: 'منحنى تحسين سماكة طبقة الامتصاص مقابل الكفاءة',
    enText:
      'Below 1 µm, red/NIR photons transmit through the absorber without generating carriers (low J_sc). Above 2 µm, extra cost & bulk recombination limit further efficiency gains.',
    arText:
      'تحت 1 µm تنفذ الفوتونات الحمراء دون امتصاص مما يخفض التيار. وفوق 2 µm تتشبع الكفاءة وتزداد احتمالية إعادة الالتحام الحجمي والتكلفة.',
    caption: 'Illustrative parametric trend of J_sc and Efficiency vs CIGS absorber thickness.',
    notes: 'Debrief Exercise 1 with this curve so learners validate their own observed numbers. (~2 min)',
  },
  {
    id: 42,
    modCode: 'M5',
    modEn: 'M5: Hands-On Lab 1',
    modAr: 'و٥: التطبيق العملي ١',
    type: 'comparison',
    titleEn: 'Troubleshooting Common Convergence Errors',
    titleAr: 'حل أخطاء التقارب (Convergence) الشائعة للمبتدئين',
    leftTitleEn: 'Why SCAPS Fails to Converge',
    leftTitleAr: 'أسباب فشل التقارب الرياضي',
    leftPointsEn: [
      'Unrealistic extreme band offsets (>1.5 eV spike)',
      'Zero or negative doping/mobility values',
      'Very coarse mesh across ultra-thin layers (e.g. 5 nm)',
      'Voltage step too large near exponential turn-on',
    ],
    leftPointsAr: [
      'فروقات حزم غير واقعية أو حواجز ضخمة جداً',
      'إدخال قيم صفرية أو سالبة للحركية أو التطعيم',
      'شبكة حسابية خشنة في الطبقات فائقة الرقة',
      'خطوة جهد كبيرة جداً عند منطقة الصعود الأسي',
    ],
    rightTitleEn: 'Quick Fixes That Work',
    rightTitleAr: 'الحلول العملية السريعة',
    rightPointsEn: [
      "Use 'Numerical Settings': increase max iterations (e.g. 100)",
      'Refine mesh points inside thin buffer/interface layers',
      'Reduce V step from 0.05 V to 0.01 V',
      'Start from a working .def file & change 1 parameter at a time',
    ],
    rightPointsAr: [
      'من Numerical Settings زد الحد الأقصى للتكرارات',
      'كثّف نقاط الشبكة داخل الطبقات الرقيقة جداً',
      'صغّر خطوة الجهد إلى 0.01 V',
      'ابدأ بملف يعمل بنجاح وغيّر معاملاً واحداً في كل مرة',
    ],
    notes: "Highlight 'change 1 parameter at a time'—best debugging habit for beginners! (~2 min)",
  },

  // --- MODULE 6: LAB 2 - PEROVSKITE & AUTOMATION (43-50) ---
  {
    id: 43,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'lab-table',
    titleEn: 'Lab 2: Planar Perovskite Solar Cell (n-i-p)',
    titleAr: 'التطبيق العملي ٢: بناء خلية بيروفسكايت قياسية (n-i-p)',
    headers: ['Layer', 'Thickness (µm)', 'E_g (eV)', 'χ (eV)', 'N_D / N_A (cm⁻³)'],
    rows: [
      ['FTO (TCO Window)', '0.30', '3.50', '4.00', 'N_D = 1×10¹⁹'],
      ['TiO₂ (ETL)', '0.05', '3.20', '4.00', 'N_D = 1×10¹⁷'],
      ['MAPbI₃ (Perovskite)', '0.50', '1.55', '3.90', 'N_A = 1×10¹³ (intrinsic-like)'],
      ['Spiro-OMeTAD (HTL)', '0.20', '3.00', '2.20', 'N_A = 1×10¹⁸'],
      ['Au (Back Contact)', 'Contact', 'Φ_m = 5.1 eV', '—', 'Ohmic/Schottky'],
    ],
    tipEn: 'Light enters from FTO side! Observe high E_g of TiO₂ & Spiro acting as carrier-selective layers.',
    tipAr: 'الضوء يدخل من جهة FTO! لاحظ دور TiO₂ كناقل إلكترونات و Spiro كناقل فجوات.',
    notes: 'Walk beginners through setting up this 4-layer + contact Perovskite stack. (~4 min)',
  },
  {
    id: 44,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'split-diagram',
    titleEn: 'Band Alignment in Perovskite (ETL & HTL Roles)',
    titleAr: 'توافق الحزم في البيروفسكايت: دور ETL و HTL',
    svgType: 'perovskiteBands',
    enPoints: [
      'ETL (TiO₂): E_c ≈ 4.0 eV aligns with Perovskite E_c ≈ 3.9 eV (smooth electron extraction), while deep E_v (7.2 eV) blocks holes!',
      'HTL (Spiro): E_v ≈ 5.2 eV aligns with Perovskite E_v ≈ 5.45 eV (hole extraction), while high E_c (2.2 eV) blocks electrons!',
      'Selective transport prevents recombination at contacts.',
    ],
    arPoints: [
      'ناقل الإلكترونات (TiO₂): حزمة توصيله قريبة من البيروفسكايت لمرور الإلكترونات، وتكافؤه العميق يمنع الفجوات.',
      'ناقل الفجوات (Spiro): تكافؤه قريب لمرور الفجوات، وتوصيله المرتفع يمنع تسرب الإلكترونات.',
      'الانتقائية تمنع إعادة الالتحام عند الأقطاب وتحافظ على V_oc مرتفع.',
    ],
    notes: 'Use Energy Bands output in SCAPS to visually verify this electron/hole blocking behavior. (~2 min)',
  },
  {
    id: 45,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'split-diagram',
    titleEn: 'Adding Bulk & Interface Defects in Perovskite',
    titleAr: 'إضافة العيوب الحجمية والسطحية في خلية البيروفسكايت',
    svgType: 'defectLayers',
    enPoints: [
      "Open MAPbI₃ layer → Click 'Add Defect' → Set Gaussian/Single trap near mid-gap with N_t = 10¹⁴–10¹⁶ cm⁻³.",
      'Add Interface Defect layers at TiO₂/MAPbI₃ and MAPbI₃/Spiro boundaries.',
      'Note: SCAPS-1D solves steady-state (so dynamic ion migration/hysteresis requires time-dependent/ion extensions or effective defect modeling).',
    ],
    arPoints: [
      'افتح طبقة البيروفسكايت واضغط Add Defect لإضافة مصيدة في منتصف الفجوة بكثافة 10¹⁴–10¹⁶ cm⁻³.',
      'أضف عيوباً سطحية عند السطحين البينيين مع TiO₂ و Spiro.',
      'ملاحظة علمية: SCAPS يحل الحالة المستقرة (Steady-State)، بينما الهسترة الديناميكية تتطلب نماذج حركة الأيونات.',
    ],
    notes: 'Be scientifically accurate about what SCAPS-1D handles directly vs steady-state approximations. (~2 min)',
  },
  {
    id: 46,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'interactive-sim',
    simType: 'defectSim',
    titleEn: 'Interactive Visualizer: Defect Density N_t vs Performance',
    titleAr: 'محاكي تفاعلي: أثر كثافة العيوب N_t على أداء البيروفسكايت',
    notes: 'Slide N_t from 10¹³ to 10¹⁷ cm⁻³ and discuss why V_oc drops logarithmically with SRH recombination! (~3 min)',
  },
  {
    id: 47,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'ui-walkthrough',
    uiType: 'batchSetup',
    titleEn: 'Batch Setup: Automated Parametric Sweeps',
    titleAr: 'الإعداد الدفعي (Batch Setup): أتمتة مسح المتغيرات',
    notes: 'Instead of running 20 simulations manually, show how Batch Setup sweeps thickness, N_t, E_g, or T automatically! (~2 min)',
  },
  {
    id: 48,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'split-diagram',
    titleEn: 'Recorder & SCAPS Scripting Basics',
    titleAr: 'المسجل (Recorder) وأساسيات البرمجة النصية (Scripting)',
    svgType: 'scriptingFlow',
    enPoints: [
      'Recorder: Define outputs you want to track (e.g., V_oc, J_sc, FF, Eta) across batch runs.',
      'SCAPS Script (.script): Plain-text commands for 2D parameter maps (e.g., Thickness × Defect Density) or multi-variable optimization.',
      'Example commands: load, set layer1.thickness 0.6, calculate, save results.',
    ],
    arPoints: [
      'المسجل (Recorder): يجمع تلقائياً قيم V_oc و J_sc و FF و Eta لجميع جولات الـ Batch في جدول واحد.',
      'البرمجة النصية (.script): أوامر نصية بسيطة لعمل خرائط ثنائية المتغيرات (مثل السماكة × كثافة العيوب).',
      'توفر ساعات طويلة من العمل اليدوي وتمنع أخطاء النسخ.',
    ],
    notes: "Show beginners they don't need to be programmers—SCAPS scripts are human-readable! (~2 min)",
  },
  {
    id: 49,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'split-diagram',
    titleEn: 'Exporting Data to Origin, Excel & Python',
    titleAr: 'تصدير البيانات للرسم الاحترافي (Origin / Excel / Python)',
    svgType: 'exportPipe',
    enPoints: [
      'Never screenshot raw SCAPS plots for publications!',
      "Click 'Save' on any output panel (J-V, QE, Bands) to export clean ASCII (.iv, .qe, .eb) tables.",
      'Import tab/space-delimited text into OriginLab, Python (Matplotlib), or Excel for publication-grade figures.',
    ],
    arPoints: [
      'لا تأخذ لقطات شاشة (Screenshots) من البرنامج لنشرها في الأوراق العلمية!',
      'اضغط Save في أي نافذة مخرجات لتصدير البيانات كملفات نصية نظيفة (.iv, .qe, .eb).',
      'استورد البيانات إلى Origin أو بايثون أو إكسل لإنتاج رسوم بيانية احترافية عالية الدقة.',
    ],
    notes: 'Strong publication tip for students and researchers! (~1 min)',
  },
  {
    id: 50,
    modCode: 'M6',
    modEn: 'M6: Lab 2 & Automation',
    modAr: 'و٦: البيروفسكايت والأتمتة',
    type: 'chart',
    chartId: 'chartTempChallenge',
    titleEn: 'Beginner Exercise 2: Temperature & Defect Challenge',
    titleAr: 'تمرين للمبتدئين ٢: تحدي الحرارة وكثافة العيوب',
    enText:
      'Task: Use Batch Setup on your Perovskite cell to sweep Temperature from 280 K to 360 K (step 20 K). Observe why V_oc drops linearly (~ -1.5 to -2 mV/K) as intrinsic carrier density n_i rises exponentially!',
    arText:
      'المهمة: استخدم Batch Setup لمسح الحرارة من 280 إلى 360 كلفن. راقب انخفاض V_oc خطياً مع ارتفاع الحرارة بسبب زيادة تركيز الحاملات الذاتي n_i.',
    caption: 'Illustrative Temperature dependence (280–360 K) of V_oc and Efficiency in a planar solar cell.',
    notes: 'Give trainees 3 minutes to run this Batch Sweep and view the Recorder graph! (~4 min)',
  },

  // --- MODULE 7: BEST PRACTICES, QUIZ & ROADMAP (51-54) ---
  {
    id: 51,
    modCode: 'M7',
    modEn: 'M7: Mastery',
    modAr: 'و٧: الإتقان والتحقق',
    type: 'split-diagram',
    titleEn: "Verification Checklist: Avoiding 'Garbage In, Garbage Out'",
    titleAr: 'قائمة التحقق العلمية: تجنب الأخطاء المنهجية',
    svgType: 'checklistShield',
    enPoints: [
      'Cite literature or experimental values for every input parameter (E_g, χ, μ, N_t, α).',
      'Check physical consistency: Does simulated J_sc match optical absorption cutoff?',
      'Avoid unrealistic efficiencies (> Shockley-Queisser limit ~33% for single junction) caused by omitting recombination!',
    ],
    arPoints: [
      'وثّق مصدراً علمياً أو قياساً مخبرياً لكل قيمة تدخلها في البرنامج.',
      'تحقق من المنطق الفيزيائي: هل يطابق التيار J_sc حدود الامتصاص الضوئي؟',
      'احذر من نتائج كفاءة غير واقعية (فوق حد شوكلي-كوايسر ~33% لوصلة مفردة) نتيجة إهمال العيوب!',
    ],
    notes: 'Crucial scientific integrity slide for peer-reviewed publishing. (~2 min)',
  },
  {
    id: 52,
    modCode: 'M7',
    modEn: 'M7: Mastery',
    modAr: 'و٧: الإتقان والتحقق',
    type: 'chart',
    chartId: 'chartValidation',
    titleEn: 'Validating Simulation Against Experimental Data',
    titleAr: 'مطابقة نتائج المحاكاة مع البيانات المخبرية',
    enText:
      'Step 1: Match experimental QE(λ) to calibrate thickness, α(λ), and optical losses. Step 2: Calibrate bulk/interface N_t and R_s/R_sh to match experimental J-V. Step 3: Predict improvements!',
    arText:
      '١) طابق منحنى QE أولاً لمعايرة السماكة والامتصاص. ٢) عاير كثافة العيوب والمقاومات لمطابقة منحنى J-V التجريبي. ٣) انطلق للتنبؤ بالتحسينات!',
    caption: 'Illustrative calibration workflow aligning Simulated J-V with Experimental target curve.',
    notes: 'This 3-step validation workflow turns a beginner simulation into a publishable study. (~2 min)',
  },
  {
    id: 53,
    modCode: 'M7',
    modEn: 'M7: Mastery',
    modAr: 'و٧: الإتقان والتحقق',
    type: 'quiz',
    titleEn: 'Interactive Knowledge Check (5 Quick Questions)',
    titleAr: 'اختبار تفاعلي سريع لتثبيت المعلومات',
    notes: 'Run through the 5 interactive questions with the audience to celebrate what they learned! (~3 min)',
  },
  {
    id: 54,
    modCode: 'M7',
    modEn: 'M7: Mastery',
    modAr: 'و٧: الإتقان والتحقق',
    type: 'hero',
    titleEn: 'Congratulations! Next Steps in SCAPS-1D',
    titleAr: 'تهانينا! خطواتك التالية لإتقان SCAPS-1D',
    subEn: 'Official Manual (Ghent Univ.) · Tandem 2-Terminal Splitting · Grading Profiles · Journal Peer-Review Checklist',
    subAr: 'راجع الدليل الرسمي لجامعة غنت · جرّب محاكاة الخلايا الترادفية · طبّق خطة التحقق التجريبي في بحثك القادم',
    badges: ['scaps.elis.ugent.be', 'Burgelman et al. (2000)', 'Practice Daily', 'شكراً لحضوركم!'],
    notes: 'Wrap up on time (120 min), open floor for Q&A, and remind trainees to export their Lab 1 & Lab 2 files! (~2 min)',
  },
];

export interface QuizQuestion {
  qEn: string;
  qAr: string;
  options: { en: string; ar: string; ok: boolean }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    qEn: '1. Which three fundamental equations does SCAPS-1D solve?',
    qAr: '١. ما هي المعادلات الثلاث الأساسية التي يحلها برنامج SCAPS-1D؟',
    options: [
      { en: 'Poisson + Electron & Hole Continuity', ar: 'بواسون + استمرارية الإلكترونات والفجوات', ok: true },
      { en: 'Navier-Stokes + Maxwell + Heat', ar: 'نافيير-ستوكس + ماكسويل + الحرارة', ok: false },
      { en: "Schrödinger + Ohm's Law only", ar: 'شرودنغر + قانون أوم فقط', ok: false },
    ],
  },
  {
    qEn: '2. What unit is layer thickness entered in inside SCAPS-1D?',
    qAr: '٢. ما هي وحدة إدخال سماكة الطبقات داخل SCAPS-1D؟',
    options: [
      { en: 'Nanometers (nm)', ar: 'نانومتر (nm)', ok: false },
      { en: 'Micrometers (µm)', ar: 'ميكرومتر (µm)', ok: true },
      { en: 'Millimeters (mm)', ar: 'مليمتر (mm)', ok: false },
    ],
  },
  {
    qEn: '3. Which recombination mechanism dominates when bulk defect density N_t increases?',
    qAr: '٣. أي آلية إعادة التحام تزداد عند ارتفاع كثافة العيوب N_t؟',
    options: [
      { en: 'Radiative Recombination', ar: 'إعادة الالتحام الإشعاعي', ok: false },
      { en: 'Shockley-Read-Hall (SRH)', ar: 'شوكلي-ريد-هول (SRH)', ok: true },
      { en: 'Thermionic Emission', ar: 'الانبعاث الحراري', ok: false },
    ],
  },
  {
    qEn: '4. A drop in QE(λ) only at short wavelengths (< 450 nm) usually indicates:',
    qAr: '٤. انخفاض الكفاءة الكمية QE عند الأطوال الموجية القصيرة (<450 nm) يشير غالباً إلى:',
    options: [
      { en: 'Front window absorption / front surface recombination', ar: 'امتصاص في طبقة النافذة أو التقاء سطحي أمامي', ok: true },
      { en: 'Back contact Schottky barrier', ar: 'حاجز شوتكي في القطب الخلفي', ok: false },
      { en: 'Absorber is too thick', ar: 'طبقة الامتصاص سميكة جداً', ok: false },
    ],
  },
  {
    qEn: '5. Which SCAPS tool automates sweeping a parameter across multiple values?',
    qAr: '٥. ما هي الأداة التي تُؤتمت مسح متغير عبر عدة قيم في SCAPS-1D؟',
    options: [
      { en: 'Batch Setup + Recorder', ar: 'الإعداد الدفعي (Batch Setup) والمسجل', ok: true },
      { en: 'Mott-Schottky Plotter', ar: 'راسم موت-شوتكي', ok: false },
      { en: 'Filter Editor', ar: 'محرر الفلاتر', ok: false },
    ],
  },
];

export interface UIHotspotItem {
  id: string;
  label: string;
  en: string;
  ar: string;
}

export const UI_WALKTHROUGHS: Record<UIWalkthroughType, { title: string; items: UIHotspotItem[] }> = {
  actionPanel: {
    title: 'SCAPS 3.3.10 — Action Panel',
    items: [
      {
        id: 'setprob',
        label: '1. Set Problem (Define Stack)',
        en: 'Opens the Solar Cell Definition editor to add/edit layers, contacts & interfaces.',
        ar: 'يفتح محرر تعريف الخلية لإضافة وتعديل الطبقات والأقطاب والعيوب.',
      },
      {
        id: 'wp',
        label: '2. Working Point (T, V, f, Light)',
        en: 'Sets Temperature (300 K), AC frequency (1 MHz), and AM1.5G Light ON/OFF.',
        ar: 'يضبط الحرارة (300K) والتردد (1MHz) والإضاءة القياسية AM1.5G.',
      },
      {
        id: 'actions',
        label: '3. Action List (I-V, QE, C-V, C-f)',
        en: 'Tick which measurements to compute and set voltage/wavelength start-stop ranges.',
        ar: 'تحديد القياسات المطلوبة (منحنى التيار والجهد، الكفاءة الكمية، السعة).',
      },
      {
        id: 'calc',
        label: '4. Calculate: Single Shot / Batch',
        en: 'Executes the 1D Poisson-Continuity solver and opens results panels.',
        ar: 'يشغّل المحرك الرياضي للحساب ويعرض لوحات النتائج والرسوم.',
      },
    ],
  },
  cellDef: {
    title: 'Solar Cell Definition Panel',
    items: [
      {
        id: 'back',
        label: 'Back Contact (Left Side)',
        en: 'Set Metal Work Function Φm or Flat-band, plus surface recombination Sn, Sp.',
        ar: 'ضبط دالة شغل القطب الخلفي Φm وسرعة إعادة الالتحام السطحي.',
      },
      {
        id: 'layers',
        label: 'Add / Edit Layer (1 to 7+)',
        en: 'Click a layer box to edit d (µm), Eg, χ, εr, μ, doping, optical α(λ), and bulk defects.',
        ar: 'انقر على الطبقة لتعديل السماكة، فجوة الطاقة، التطعيم، الامتصاص، والعيوب.',
      },
      {
        id: 'iface',
        label: 'Interface Line (Between Layers)',
        en: 'Click the vertical border between two layers to insert interface trap density Nit (cm⁻²).',
        ar: 'انقر الخط الفاصل بين طبقتين لإضافة عيوب السطح البيني بوحدة cm⁻².',
      },
      {
        id: 'illum',
        label: 'Illumination Arrow (Left vs Right)',
        en: 'Always verify the light arrow hits your transparent Front Contact (TCO/Window), not opaque metal!',
        ar: 'تأكد دائماً أن سهم الضوء يسقط على الجهة الأمامية الشفافة وليس المعدن الخلفي!',
      },
    ],
  },
  batchSetup: {
    title: 'Batch Setup & Recorder Panel',
    items: [
      {
        id: 'addp',
        label: 'Add Parameter to Vary',
        en: 'Choose any layer property (e.g. Absorber Thickness, Nt, Eg, or Temperature T).',
        ar: 'اختر أي متغير للبحث (مثل السماكة، كثافة العيوب، فجوة الطاقة، أو الحرارة).',
      },
      {
        id: 'range',
        label: 'Set Range (Linear or Log)',
        en: 'Example: Sweep Nt from 1e13 to 1e17 cm⁻³ in 9 logarithmic steps.',
        ar: 'مثال: مسح كثافة العيوب من 10¹³ إلى 10¹⁷ في 9 خطوات لوغاريتمية.',
      },
      {
        id: 'rec',
        label: 'Recorder Setup',
        en: 'Auto-records Voc, Jsc, FF, Eta for every run into a single comparative table & graph.',
        ar: 'يسجل القيم الأربع تلقائياً لكل جولة في جدول ورسم بياني مقارن.',
      },
      {
        id: 'runb',
        label: 'Calculate: Batch',
        en: 'Runs all steps sequentially while you grab a coffee!',
        ar: 'ينفذ جميع المحاكيات تلقائياً بضغطة زر واحدة!',
      },
    ],
  },
};
