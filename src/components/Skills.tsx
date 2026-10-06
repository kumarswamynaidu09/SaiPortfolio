import { useState } from 'react';

export default function Skills() {
  const [showBytecodeLog, setShowBytecodeLog] = useState<boolean>(false);

  return (
    <section id="skills" className="w-full relative px-4 sm:px-6 lg:px-10 py-8 lg:py-12 bg-[#071426]">
      {/* Top telemetry strip */}
      <div className="w-full bg-[#030e20] px-4 py-2 border-b border-[#38BDF8]/20 flex flex-wrap items-center justify-between gap-3 text-[#94A3B8] select-none max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#38BDF8] bg-[#142032] px-2 py-0.5 border border-[#38BDF8]/40 font-semibold">
            SYS_REGISTER: OK
          </span>
          <span className="font-mono text-xs text-[#94A3B8]">
            MATRIX: REVISION 2026.03 // NODE: DS-ENG
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-[#8ed5ff]">
            <span className="w-1.5 h-1.5 bg-[#38BDF8] shadow-[0_0_6px_#38bdf8]"></span>
            BUS: 64-BIT ARCH
          </span>
          <span className="hidden md:inline text-[#3e484f]">|</span>
          <span className="text-[#89ceff] font-bold">RUNTIME: B.TECH CSE (DS)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header Hero Module matching Stitch */}
        <header className="relative bg-[#030e20] border-2 border-[#89ceff]/40 p-5 sm:p-8 overflow-hidden shadow-[6px_6px_0px_0px_#004965]">
          {/* Coordinate stamp */}
          <div className="absolute -top-1 -right-1 font-mono text-[10px] bg-[#071426] text-[#38BDF8] border border-[#38BDF8]/40 px-2 py-0.5 z-10">
            [LOC: 0x7FFF5BE249C0]
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none blueprint-grid-dense"></div>

          <div className="flex flex-col gap-2 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#38BDF8] inline-block"></span>
              <span className="font-mono text-xs text-[#8ed5ff] tracking-widest uppercase font-semibold">
                03 — SKILLS // INVENTORY
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pt-1">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#F8FAFC] tracking-tighter uppercase font-extrabold leading-none">
                THE TOOLKIT
              </h2>
              <div className="max-w-xl">
                <p className="font-mono text-xs sm:text-sm text-[#89ceff] leading-relaxed uppercase bg-[#0f1c2e] p-3 border-l-2 border-[#38BDF8]">
                  Core competencies, runtimes, data layers &amp; hardware interfaces. Disciplined focus across practical programming and systems.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Section Summary Telemetry Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col justify-between">
            <span className="font-mono text-xs text-[#94A3B8] uppercase">
              [01 / INVENTORY_DEPTH]
            </span>
            <div className="flex items-baseline justify-between mt-3">
              <span className="font-heading text-3xl font-bold text-[#8ed5ff]">08</span>
              <span className="font-mono text-xs text-[#89ceff] font-semibold">CORE SKILLS</span>
            </div>
            <div className="w-full bg-[#1e2a3d] h-1 mt-3">
              <div className="bg-[#38BDF8] h-full w-full"></div>
            </div>
          </div>

          <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col justify-between">
            <span className="font-mono text-xs text-[#94A3B8] uppercase">
              [02 / DOMAIN_STACK]
            </span>
            <div className="flex items-baseline justify-between mt-3">
              <span className="font-heading text-3xl font-bold text-[#7bd0ff]">03</span>
              <span className="font-mono text-xs text-[#89ceff] font-semibold">SPECIALIZED TRACKS</span>
            </div>
            <div className="w-full bg-[#1e2a3d] h-1 mt-3">
              <div className="bg-[#89ceff] h-full w-full"></div>
            </div>
          </div>

          <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col justify-between">
            <span className="font-mono text-xs text-[#94A3B8] uppercase">
              [03 / CYCLE_STATE]
            </span>
            <div className="flex items-baseline justify-between mt-3">
              <span className="font-heading text-3xl font-bold text-[#38BDF8]">2025–29</span>
              <span className="font-mono text-xs text-[#89ceff] font-semibold">ACADEMIC ROADMAP</span>
            </div>
            <div className="w-full bg-[#1e2a3d] h-1 mt-3">
              <div className="bg-[#38BDF8] h-full w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* 3 Categories Matrix */}
        <div className="flex flex-col gap-8">
          {/* ================= CATEGORY 1: PROGRAMMING ================= */}
          <section className="bg-[#0f1c2e] border-2 border-[#2563EB] p-4 sm:p-6 relative shadow-[6px_6px_0px_0px_#071426]">
            {/* Crosshairs */}
            <span className="absolute -top-2.5 -left-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -top-2.5 -right-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -bottom-2.5 -left-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -bottom-2.5 -right-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>

            {/* Category Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-[#38BDF8]/20 mb-5 gap-2">
              <div className="flex items-center gap-3">
                <span className="bg-[#2563EB] text-[#F8FAFC] font-mono text-xs px-2.5 py-0.5 font-bold">
                  CAT_01
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-[#F8FAFC] uppercase tracking-tight font-bold">
                  PROGRAMMING
                </h3>
              </div>
              <p className="font-mono text-xs text-[#89ceff]">
                Building logic, algorithms and application fundamentals.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1: C */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[01] REG</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">KERN_LVL</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    C
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Systems programming, direct memory management, pointer arithmetic, memory bounds &amp; algorithmic logic.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>CATEGORY</span>
                    <span className="text-[#38BDF8]">SYSTEMS LANGUAGE</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [█████████] ACTIVE_CORE
                  </div>
                </div>
              </div>

              {/* Card 2: Java */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[02] REG</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">JVM_EXEC</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    JAVA
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Object-oriented programming, class design, data abstraction, encapsulation &amp; robust software structure.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>CATEGORY</span>
                    <span className="text-[#38BDF8]">OOP RUNTIME</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [████████] ACTIVE_CORE
                  </div>
                </div>
              </div>

              {/* Card 3: Python */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[03] REG</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">CPYTHON</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    PYTHON
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Data manipulation, automation scripting, algorithmic problem solving &amp; computational data processing.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>CATEGORY</span>
                    <span className="text-[#38BDF8]">DATA &amp; SCRIPTING</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [█████████] ACTIVE_CORE
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= CATEGORY 2: COMPUTER SCIENCE & DATA ================= */}
          <section className="bg-[#0f1c2e] border-2 border-[#2563EB] p-4 sm:p-6 relative shadow-[6px_6px_0px_0px_#071426]">
            <span className="absolute -top-2.5 -left-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -top-2.5 -right-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -bottom-2.5 -left-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -bottom-2.5 -right-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-[#38BDF8]/20 mb-5 gap-2">
              <div className="flex items-center gap-3">
                <span className="bg-[#2563EB] text-[#F8FAFC] font-mono text-xs px-2.5 py-0.5 font-bold">
                  CAT_02
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-[#F8FAFC] uppercase tracking-tight font-bold">
                  COMPUTER SCIENCE &amp; DATA
                </h3>
              </div>
              <p className="font-mono text-xs text-[#89ceff]">
                Working with relational databases, SQL and DBMS concepts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 4: DSA */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[04] STRUCT</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">O(log N)</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    DSA
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Data Structures &amp; Algorithms: trees, graphs, sorting, searching, recursion logic &amp; asymptotic complexity analysis.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>DISCIPLINE</span>
                    <span className="text-[#38BDF8]">CORE ALGORITHMS</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [████████] ACTIVE_CORE
                  </div>
                </div>
              </div>

              {/* Card 5: DBMS */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[05] ENGINE</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">ACID_COMPL</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    DBMS
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Database Management Systems: database normalization, ACID properties, relational integrity &amp; ER schema modeling.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>DISCIPLINE</span>
                    <span className="text-[#38BDF8]">DATABASE SYSTEMS</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [████████] ACTIVE_CORE
                  </div>
                </div>
              </div>

              {/* Card 6: SQL */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[06] QUERY</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">ANSI_SQL</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    SQL
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Structured Query Language: relational joins, filtering, data aggregation, nested subqueries &amp; DDL/DML operations.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>DISCIPLINE</span>
                    <span className="text-[#38BDF8]">QUERY OPTIMIZATION</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [█████████] ACTIVE_CORE
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= CATEGORY 3: HARDWARE / DESIGN ================= */}
          <section className="bg-[#0f1c2e] border-2 border-[#2563EB] p-4 sm:p-6 relative shadow-[6px_6px_0px_0px_#071426]">
            <span className="absolute -top-2.5 -left-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -top-2.5 -right-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -bottom-2.5 -left-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>
            <span className="absolute -bottom-2.5 -right-2.5 text-[#8ed5ff] text-base font-mono select-none font-bold">+</span>

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-[#38BDF8]/20 mb-5 gap-2">
              <div className="flex items-center gap-3">
                <span className="bg-[#2563EB] text-[#F8FAFC] font-mono text-xs px-2.5 py-0.5 font-bold">
                  CAT_03
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-[#F8FAFC] uppercase tracking-tight font-bold">
                  HARDWARE / DESIGN
                </h3>
              </div>
              <p className="font-mono text-xs text-[#89ceff]">
                Exploring microcontrollers, electronics and Arduino-based systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 7: Arduino */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[07] EMBED</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">ATMEGA_GPIO</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    ARDUINO
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Microcontroller programming, GPIO sensor interfacing, analog/digital transducers &amp; hardware prototyping circuits.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>DISCIPLINE</span>
                    <span className="text-[#38BDF8]">EMBEDDED HARDWARE</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [████████] ACTIVE_CORE
                  </div>
                </div>
              </div>

              {/* Card 8: AutoCAD */}
              <div className="group bg-[#030e20] border border-[#3e484f] p-4 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-[#38BDF8] hover:shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3e484f]/40">
                    <span className="font-mono text-xs text-[#38BDF8] font-bold">[08] VECTOR</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">DWG_DRAFT</span>
                  </div>
                  <h4 className="font-heading text-lg text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mt-2 font-bold">
                    AUTOCAD
                  </h4>
                  <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    Geometric modeling, parametric 2D mechanical drafting, structural chassis schematics &amp; engineering drawings.
                  </p>
                </div>
                <div className="mt-5 pt-2 border-t border-[#3e484f]/40 flex flex-col gap-1">
                  <div className="flex justify-between text-[#94A3B8] font-mono text-[10px]">
                    <span>DISCIPLINE</span>
                    <span className="text-[#38BDF8]">ENGINEERING DRAFTING</span>
                  </div>
                  <div className="font-mono text-xs text-[#8ed5ff] tracking-tight">
                    [████████] ACTIVE_CORE
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Console status footer */}
        <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#38BDF8]"></span>
            <span className="font-mono text-xs sm:text-sm text-[#F8FAFC]">
              STATUS: ALL 8 COMPETENCY MODULES RECORDED AND OPERATIONAL
            </span>
          </div>
          <button
            onClick={() => setShowBytecodeLog(!showBytecodeLog)}
            className="bg-[#38BDF8] text-[#030e20] font-mono text-xs px-4 py-2 border border-[#38BDF8] font-bold hover:bg-[#8ed5ff] transition-colors cursor-pointer shadow-[3px_3px_0px_0px_#2563EB]"
          >
            {showBytecodeLog ? '[ CLOSE TECHNICAL MANIFEST ]' : '[ INSPECT TECHNICAL MANIFEST ]'}
          </button>
        </div>

        {/* Collapsible Bytecode Log */}
        {showBytecodeLog && (
          <div className="bg-[#030e20] border border-[#38BDF8]/40 p-4 font-mono text-xs text-[#89ceff] leading-relaxed">
            <div className="text-[#38BDF8] font-bold pb-2 border-b border-[#3e484f] mb-3">
              // TELEMETRY RUNTIME DUMP - SHIVA@MLRIT-DATA-SCIENCE
            </div>
            <div>&gt; [01] C_RUNTIME: DIRECT_MEMORY_MANAGEMENT_VERIFIED</div>
            <div>&gt; [02] JAVA_RUNTIME: OOP_POLYMORPHISM_LOADED</div>
            <div>&gt; [03] PYTHON_RUNTIME: DATA_SCIENCE_STACK_ACCELERATED</div>
            <div>&gt; [04] DSA_MODULE: GRAPH_TREE_RECURSION_ACTIVE</div>
            <div>&gt; [05] DBMS_MODULE: RELATIONAL_NORMALIZATION_STABLE</div>
            <div>&gt; [06] SQL_MODULE: ANSI_SQL_QUERY_PARSER_OK</div>
            <div>&gt; [07] ARDUINO_MODULE: ATMEGA328P_GPIO_INTERFACE_READY</div>
            <div>&gt; [08] AUTOCAD_MODULE: 2D_PARAMETRIC_DRAFTING_INITIALIZED</div>
            <div className="text-[#38BDF8] mt-2">&gt; EOF REACHED. 8 SKILLS INTEGRATED.</div>
          </div>
        )}
      </div>
    </section>
  );
}
