import { SectionId } from '../types';

interface AboutProps {
  onNavigate?: (section: SectionId) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section id="about" className="w-full relative px-4 sm:px-6 lg:px-10 py-8 lg:py-12 bg-[#071426]">
      {/* Telemetry Sub-ribbon */}
      <div className="w-full bg-[#030e20] px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-[#94A3B8] border-b border-[#38BDF8]/20 max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#38BDF8] flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-[#38BDF8] animate-pulse"></span>
            RECORD_REF: DOSSIER-2025-MLRIT
          </span>
          <span className="font-mono text-xs text-[#3e484f]">|</span>
          <span className="font-mono text-xs text-[#89ceff]">CLEARANCE: LEVEL-01 PUBLIC_EXEC</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-[#94A3B8]">HOST: HYD-CLUSTER-07</span>
          <span className="text-[#3e484f]">//</span>
          <span className="text-[#8ed5ff]">ARCH: DATA_SCIENCE / SYSTEMS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Dossier Header Bar */}
        <div className="w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#38BDF8] pb-6 relative">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-[#38BDF8] text-[#030e20] font-mono text-xs font-bold">
                02
              </span>
              <span className="font-mono text-xs text-[#8ed5ff] tracking-widest uppercase font-semibold">
                ABOUT // DOSSIER SPECIFICATION
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#F8FAFC] tracking-tighter uppercase mt-2 font-extrabold leading-none">
              BUILDING. LEARNING.<br />
              <span className="text-[#38BDF8]">EXPERIMENTING.</span>
            </h2>
          </div>

          {/* Metadata Stamp */}
          <div className="bg-[#142032] p-3 border border-[#3e484f]/60 flex flex-col gap-1 min-w-[220px]">
            <div className="flex justify-between font-mono text-xs text-[#94A3B8]">
              <span>PROGRAM:</span>
              <span className="text-[#89ceff] font-bold">B.Tech CSDS</span>
            </div>
            <div className="flex justify-between font-mono text-xs text-[#94A3B8]">
              <span>STATUS:</span>
              <span className="text-[#38BDF8] font-bold">VERIFIED_ENROLLED</span>
            </div>
            <div className="flex justify-between font-mono text-xs text-[#94A3B8]">
              <span>ACADEMIC CYCLE:</span>
              <span className="text-[#F8FAFC] font-bold">2025 // 2029</span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid matching Stitch Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Profile narrative, philosophy, academic matrix */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Profile Record Capsule */}
            <div className="relative bg-[#142032] border-2 border-[#38BDF8] p-5 sm:p-6 shadow-[4px_4px_0px_0px_#2563EB]">
              {/* Corner crosshairs */}
              <span className="absolute -top-2.5 -left-2.5 text-[#38BDF8] font-mono text-base font-bold leading-none select-none">
                +
              </span>
              <span className="absolute -top-2.5 -right-2.5 text-[#38BDF8] font-mono text-base font-bold leading-none select-none">
                +
              </span>
              <span className="absolute -bottom-2.5 -left-2.5 text-[#38BDF8] font-mono text-base font-bold leading-none select-none">
                +
              </span>
              <span className="absolute -bottom-2.5 -right-2.5 text-[#38BDF8] font-mono text-base font-bold leading-none select-none">
                +
              </span>

              {/* Sub-bar */}
              <div className="flex items-center justify-between border-b border-[#3e484f] pb-2 mb-4">
                <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase font-semibold">
                  [PROFILE_RECORD // 25-29]
                </span>
                <span className="font-mono text-[10px] text-[#94A3B8]">
                  CLASS: UNDERGRAD_ENGINEER
                </span>
              </div>

              {/* Verified concise bio */}
              <p className="font-mono text-sm sm:text-base text-[#F8FAFC] leading-relaxed mb-4">
                T Sai Shiva Kumar is a B.Tech Computer Science &amp; Data Science student at MLR Institute of Technology, studying from 2025 to 2029.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 font-mono text-xs text-[#89ceff]">
                <span className="bg-[#030e20] border border-[#3e484f] px-2 py-0.5">
                  #COMPUTER_SCIENCE
                </span>
                <span className="bg-[#030e20] border border-[#3e484f] px-2 py-0.5">
                  #DATA_SCIENCE
                </span>
                <span className="bg-[#030e20] border border-[#3e484f] px-2 py-0.5">
                  #EMBEDDED_SYSTEMS
                </span>
                <span className="bg-[#030e20] border border-[#3e484f] px-2 py-0.5">
                  #MLRIT_HYDERABAD
                </span>
              </div>
            </div>

            {/* Philosophy Code Block from Stitch */}
            <div className="bg-[#030e20] border-2 border-[#3e484f] p-4 relative overflow-hidden">
              <div className="flex items-center justify-between text-[#94A3B8] pb-1.5 border-b border-[#3e484f]/40 mb-3 font-mono text-[11px]">
                <span>ENGINEERING_MANIFESTO.TXT</span>
                <span>UTF-8 // READ_ONLY</span>
              </div>
              <pre className="font-mono text-xs sm:text-sm text-[#38BDF8] whitespace-pre-wrap leading-relaxed">
{`/* Engineering isn't about knowing every syntax;
   it's about breaking down unknown problems
   until they become solvable systems. */`}
              </pre>
              <div className="mt-3 pt-2 border-t border-[#3e484f]/30 flex justify-between font-mono text-[10px] text-[#94A3B8]">
                <span>// ARCHITECTURE: FIRST_PRINCIPLES</span>
                <span className="text-[#8ed5ff]">EXEC_OK</span>
              </div>
            </div>

            {/* Academic Matrix Card */}
            <div className="bg-[#142032] p-5 border border-[#38BDF8]/40 relative shadow-[4px_4px_0px_0px_#00a2e6]">
              <div className="flex items-center justify-between border-b border-[#3e484f] pb-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#38BDF8] font-bold">[ACADEMIC MATRIX]</span>
                  <span className="font-heading text-sm text-[#F8FAFC] uppercase font-semibold">
                    STRUCTURED DETAILS
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-[#8ed5ff] text-[#071426] font-bold px-2 py-0.5">
                  ENROLLED
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0f1c2e] p-3 border border-[#3e484f]/40">
                  <span className="block font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider mb-1">
                    PROGRAM
                  </span>
                  <span className="font-heading text-base text-[#38BDF8] font-bold leading-tight block">
                    B.Tech CSE
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">Computer Science &amp; Data Science</span>
                </div>

                <div className="bg-[#0f1c2e] p-3 border border-[#3e484f]/40">
                  <span className="block font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider mb-1">
                    PERIOD
                  </span>
                  <span className="font-heading text-base text-[#89ceff] font-bold leading-tight block">
                    2025 — 2029
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">4-Year Undergraduate Program</span>
                </div>

                <div className="bg-[#0f1c2e] p-3 border border-[#3e484f]/40 sm:col-span-2">
                  <span className="block font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider mb-1">
                    COLLEGE / INSTITUTION
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-[#F8FAFC] font-semibold">
                      MLR Institute of Technology
                    </span>
                    <span className="font-mono text-xs text-[#38BDF8]">[MLRIT]</span>
                  </div>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Boxed Technical Data Table + Current Focus Modules */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Boxed Technical Data Table (SYSTEM REGISTRY TABLE // TSK) */}
            <div className="bg-[#0B1F3A] border-2 border-[#2563EB] shadow-[6px_6px_0px_0px_#2563EB] relative">
              {/* Corner crosshairs */}
              <span className="absolute -top-3 -left-3 text-[#89ceff] font-mono text-lg select-none leading-none font-bold">
                +
              </span>
              <span className="absolute -top-3 -right-3 text-[#89ceff] font-mono text-lg select-none leading-none font-bold">
                +
              </span>
              <span className="absolute -bottom-3 -left-3 text-[#89ceff] font-mono text-lg select-none leading-none font-bold">
                +
              </span>
              <span className="absolute -bottom-3 -right-3 text-[#89ceff] font-mono text-lg select-none leading-none font-bold">
                +
              </span>

              {/* Table Header Plate */}
              <div className="bg-[#071426] border-b-2 border-[#2563EB] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#38BDF8] inline-block"></span>
                  <span className="font-mono text-xs text-[#F8FAFC] uppercase tracking-wider font-semibold">
                    SYSTEM REGISTRY TABLE // TSK
                  </span>
                </div>
                <span className="font-mono text-xs text-[#89ceff]">SYS_MEM: OK</span>
              </div>

              {/* Table Rows with high-contrast brutalist borders */}
              <div className="flex flex-col divide-y divide-[#2563EB]">
                {/* ROW 1: NAME */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-3 items-center gap-1 hover:bg-[#142032] transition-colors">
                  <div className="md:col-span-4 font-mono text-xs text-[#38BDF8]">
                    [FIELD: NAME]
                  </div>
                  <div className="md:col-span-8 font-heading text-lg font-bold text-[#F8FAFC]">
                    T Sai Shiva Kumar
                  </div>
                </div>

                {/* ROW 2: PROGRAM */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-3 items-center gap-1 hover:bg-[#142032] transition-colors">
                  <div className="md:col-span-4 font-mono text-xs text-[#38BDF8]">
                    [FIELD: PROGRAM]
                  </div>
                  <div className="md:col-span-8 font-mono text-sm text-[#F8FAFC] font-semibold">
                    B.Tech — Computer Science &amp; Data Science
                  </div>
                </div>

                {/* ROW 3: INSTITUTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-3 items-center gap-1 hover:bg-[#142032] transition-colors">
                  <div className="md:col-span-4 font-mono text-xs text-[#38BDF8]">
                    [FIELD: INSTITUTION]
                  </div>
                  <div className="md:col-span-8 font-mono text-sm text-[#c9e6ff]">
                    MLR Institute of Technology (MLRIT)
                  </div>
                </div>

                {/* ROW 4: PERIOD */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-3 items-center gap-1 hover:bg-[#142032] transition-colors">
                  <div className="md:col-span-4 font-mono text-xs text-[#38BDF8]">
                    [FIELD: PERIOD]
                  </div>
                  <div className="md:col-span-8 font-mono text-xs text-[#F8FAFC] flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#142032] border border-[#3e484f] font-bold text-[#8ed5ff]">
                      2025
                    </span>
                    <span className="text-[#94A3B8]">—————&gt;</span>
                    <span className="px-2 py-0.5 bg-[#142032] border border-[#3e484f] font-bold text-[#38BDF8]">
                      2029
                    </span>
                  </div>
                </div>

                {/* ROW 5: LOCATION */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-3 items-center gap-1 hover:bg-[#142032] transition-colors">
                  <div className="md:col-span-4 font-mono text-xs text-[#38BDF8]">
                    [FIELD: LOCATION]
                  </div>
                  <div className="md:col-span-8 font-mono text-xs text-[#F8FAFC]">
                    Hyderabad, India{' '}
                    <span className="text-[#89ceff] block md:inline">[17.5449° N, 78.4312° E]</span>
                  </div>
                </div>

                {/* ROW 6: STATUS */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-3 items-center gap-1 bg-[#0F223D]">
                  <div className="md:col-span-4 font-mono text-xs text-[#38BDF8]">
                    [FIELD: STATUS]
                  </div>
                  <div className="md:col-span-8 font-mono text-xs text-[#8ed5ff] tracking-widest uppercase flex items-center gap-2 font-bold">
                    <span className="w-2 h-2 bg-[#38BDF8] inline-block animate-pulse"></span>
                    UNDERGRADUATE STUDENT &amp; CODER
                  </div>
                </div>
              </div>
            </div>

            {/* CURRENT FOCUS High-Contrast Technical Block (Zero AI slop / no fake percentages) */}
            <div className="bg-[#142032] border-2 border-[#8ed5ff] p-5 relative shadow-[4px_4px_0px_0px_#38bdf8]">
              {/* Corner crosshairs */}
              <span className="absolute -top-2 -left-2 text-[#8ed5ff] font-mono text-base select-none leading-none font-bold">
                +
              </span>
              <span className="absolute -top-2 -right-2 text-[#8ed5ff] font-mono text-base select-none leading-none font-bold">
                +
              </span>
              <span className="absolute -bottom-2 -left-2 text-[#8ed5ff] font-mono text-base select-none leading-none font-bold">
                +
              </span>
              <span className="absolute -bottom-2 -right-2 text-[#8ed5ff] font-mono text-base select-none leading-none font-bold">
                +
              </span>

              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-[#3e484f] pb-2 mb-4">
                <div>
                  <span className="font-mono text-[10px] text-[#89ceff] uppercase tracking-widest block">
                    // ACTIVE_MODULES
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl text-[#F8FAFC] uppercase tracking-tight font-bold">
                    CURRENT FOCUS
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 bg-[#030e20] px-2 py-1 border border-[#38BDF8]">
                  <span className="w-1.5 h-1.5 bg-[#38BDF8]"></span>
                  <span className="font-mono text-[10px] text-[#38BDF8] font-bold">
                    STATUS: ACTIVE_LEARNING
                  </span>
                </div>
              </div>

              {/* 5 Technical modules based ONLY on actual skills */}
              <div className="flex flex-col gap-2.5">
                {/* Module 1 */}
                <div className="bg-[#030e20] border border-[#3e484f] p-2.5 flex flex-col gap-1 hover:border-[#38BDF8] transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-[#004965] text-[#38BDF8] px-1.5 py-0.5 font-bold">
                        [01]
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#F8FAFC]">
                        Programming [C / Python / Java]
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#38BDF8] font-semibold">
                      [FOUNDATIONAL CORE]
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-[#94A3B8]">
                    <span>STACK: GCC, CLANG, C99, PYTHON 3, JDK</span>
                    <span className="text-[#8ed5ff]">ACTIVE_PRACTICE</span>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="bg-[#030e20] border border-[#3e484f] p-2.5 flex flex-col gap-1 hover:border-[#38BDF8] transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-[#004965] text-[#38BDF8] px-1.5 py-0.5 font-bold">
                        [02]
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#F8FAFC]">
                        Data Structures &amp; Algorithms
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#38BDF8] font-semibold">
                      [ALGORITHMIC RIGOR]
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-[#94A3B8]">
                    <span>TOPICS: TREES, GRAPHS, SORTING, ASYMPTOTICS</span>
                    <span className="text-[#8ed5ff]">PROBLEM_SOLVING</span>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="bg-[#030e20] border border-[#3e484f] p-2.5 flex flex-col gap-1 hover:border-[#38BDF8] transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-[#004965] text-[#38BDF8] px-1.5 py-0.5 font-bold">
                        [03]
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#F8FAFC]">
                        Relational Databases &amp; SQL
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#38BDF8] font-semibold">
                      [DATA INTEGRITY]
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-[#94A3B8]">
                    <span>CONCEPTS: DBMS NORMALIZATION, ACID, QUERIES</span>
                    <span className="text-[#8ed5ff]">DATA_ARCHITECTURE</span>
                  </div>
                </div>

                {/* Module 4 */}
                <div className="bg-[#030e20] border border-[#3e484f] p-2.5 flex flex-col gap-1 hover:border-[#38BDF8] transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-[#004965] text-[#38BDF8] px-1.5 py-0.5 font-bold">
                        [04]
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#F8FAFC]">
                        Embedded Systems &amp; Arduino
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#38BDF8] font-semibold">
                      [PHYSICAL COMPUTING]
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-[#94A3B8]">
                    <span>TARGETS: ARDUINO BOARDS, SENSORS, GPIO</span>
                    <span className="text-[#8ed5ff]">HARDWARE_LINK</span>
                  </div>
                </div>

                {/* Module 5 */}
                <div className="bg-[#030e20] border border-[#3e484f] p-2.5 flex flex-col gap-1 hover:border-[#38BDF8] transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-[#004965] text-[#38BDF8] px-1.5 py-0.5 font-bold">
                        [05]
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#F8FAFC]">
                        Computer Aided Design [AutoCAD]
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#38BDF8] font-semibold">
                      [TECHNICAL DRAFTING]
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-[#94A3B8]">
                    <span>DOMAIN: 2D DRAFTING &amp; SCHEMATIC MODELING</span>
                    <span className="text-[#8ed5ff]">GEOMETRIC_CAD</span>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-4 pt-3 border-t border-[#3e484f] flex flex-wrap items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate?.('skills')}
                  className="bg-[#38BDF8] text-[#071426] font-mono text-xs font-bold px-4 py-1.5 uppercase border-2 border-[#38BDF8] shadow-[3px_3px_0px_0px_#2563EB] hover:shadow-[1px_1px_0px_0px_#2563EB] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                >
                  [ VIEW COMPLETE TOOLKIT → ]
                </button>
                <div className="font-mono text-xs text-[#94A3B8]">
                  [DISCIPLINE: CSDS]
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supplementary Metrics Bar (Built strictly with real student facts) */}
        <div className="mt-8 bg-[#030e20] border-2 border-[#3e484f] p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center justify-center p-2 border-r border-[#3e484f] last:border-r-0">
            <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest">
              DEGREE PROGRAM
            </span>
            <span className="font-heading text-2xl sm:text-3xl text-[#8ed5ff] tracking-tight font-bold">
              B.TECH
            </span>
            <span className="font-mono text-xs text-[#89ceff]">CSE — DATA SCIENCE</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-r border-[#3e484f] last:border-r-0">
            <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest">
              COLLEGE
            </span>
            <span className="font-heading text-2xl sm:text-3xl text-[#38BDF8] tracking-tight font-bold">
              MLRIT
            </span>
            <span className="font-mono text-xs text-[#89ceff]">HYDERABAD</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 border-r border-[#3e484f] last:border-r-0">
            <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest">
              HACKATHONS
            </span>
            <span className="font-heading text-2xl sm:text-3xl text-[#bccbff] tracking-tight font-bold">
              04
            </span>
            <span className="font-mono text-xs text-[#89ceff]">SPRINTS PARTICIPATED</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-widest">
              ACADEMIC TIMELINE
            </span>
            <span className="font-heading text-2xl sm:text-3xl text-[#F8FAFC] tracking-tight font-bold">
              4 YRS
            </span>
            <span className="font-mono text-xs text-[#89ceff]">2025 — 2029</span>
          </div>
        </div>
      </div>
    </section>
  );
}
