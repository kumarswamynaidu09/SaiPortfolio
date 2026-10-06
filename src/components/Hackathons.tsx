import { useState } from 'react';
import { HackathonItem } from '../types';

const HACKATHONS_DATA: HackathonItem[] = [
  {
    id: 'zignasa',
    index: '01',
    year: '2025',
    name: 'ZIGNASA 2025',
    edition: 'HACKATHON PARTICIPATION // MLRIT INNOVATION CELL',
    category: 'hardware',
    badge: 'SPRINT_PARTICIPATION // 24H',
    badgeType: 'default',
    description:
      'Hackathon participation at MLRIT focusing on rapid problem analysis, prototype development, and practical engineering under sprint constraints.',
    architecture: 'Hardware Interfacing & Practical System Logic',
    runtime: '24h Hackathon Sprint // MLRIT Innovation Cell',
    tags: ['C', 'ARDUINO', 'HARDWARE', 'SYSTEMS'],
    nodeRef: 'NODE_REF: MLR-ZIG-01',
  },
  {
    id: 'ignitia',
    index: '02',
    year: '2026',
    name: 'IGNITIA 2026',
    edition: 'HACKATHON PARTICIPATION // REGIONAL TECH FEST',
    category: 'data',
    badge: 'PARTICIPATION // TECHNICAL SPRINT',
    badgeType: 'default',
    description:
      'Technical hackathon competition addressing real-world problem statements through algorithmic software pipelines and query-optimized data structures.',
    architecture: 'Algorithmic Problem Solving & Data Pipelines',
    runtime: 'Technical Hackathon Sprint // Regional Tech Fest',
    tags: ['PYTHON', 'SQL', 'DATA', 'ALGORITHMS'],
    nodeRef: 'NODE_REF: REG-IGN-02',
  },
  {
    id: 'sae-india',
    index: '03',
    year: '2026',
    name: 'SAE INDIA 2026',
    edition: 'COMPETITION / HACKATHON // MOBILITY & VEHICULAR SYSTEMS',
    category: 'hardware',
    badge: 'ENGINEERING COMPETITION // SPRINT',
    badgeType: 'default',
    description:
      'Multidisciplinary engineering competition and hackathon combining computer aided mechanical design, sensors, and embedded control logic.',
    architecture: 'Parametric CAD Drafting & Embedded Interfacing',
    runtime: 'Engineering Challenge // SAE India Mobility Sprint',
    tags: ['AUTOCAD', 'C', 'ARDUINO', 'HARDWARE'],
    nodeRef: 'NODE_REF: SAE-MOB-03',
  },
  {
    id: 'sih',
    index: '04',
    year: '2026',
    name: 'SMART INDIA HACKATHON — SIH 2026',
    edition: 'NATIONAL LEVEL // SIH PARTICIPATION',
    category: 'data',
    badge: '★ APEX NATIONAL STAGE',
    badgeType: 'apex',
    description:
      'Participation in India’s premier nationwide innovation hackathon solving large-scale institutional and social challenge statements through data-driven software.',
    architecture: 'Data Science & Scaled Relational Schemas',
    runtime: 'National Hackathon // Ministry of Education & AICTE',
    tags: ['PYTHON', 'DBMS', 'DATA SCIENCE', 'SQL'],
    nodeRef: 'NODE_REF: NAT-SIH-2026-X',
  },
];

export default function Hackathons() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hardware' | 'data'>('all');

  const filteredHackathons = HACKATHONS_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="hackathons" className="w-full relative px-4 sm:px-6 lg:px-10 py-8 lg:py-12 bg-[#071426]">
      {/* Top telemetry bar */}
      <div className="w-full bg-[#030e20] px-4 py-2 flex flex-wrap items-center justify-between gap-2 max-w-7xl mx-auto mb-6 border-b border-[#38BDF8]/20 text-[#94A3B8]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#38BDF8] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#38BDF8]"></span>
            DISPATCH_LOG :: ENG_EVENTS
          </span>
          <span className="font-mono text-xs text-[#3e484f] hidden md:inline">
            INDEX_LOC: 17.5449°N, 78.4314°E [MLRIT]
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-[#89ceff]">
          <span>ENTRIES: 04_ACTIVE</span>
          <span className="text-[#3e484f]">/</span>
          <span className="text-[#38BDF8]">[STATUS: VERIFIED]</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Hero Banner Section matching Stitch */}
        <div className="relative bg-[#071426] border-2 border-[#2563EB] p-5 sm:p-8">
          <span className="absolute top-2 left-2 font-mono text-xs text-[#94A3B8] select-none">+</span>
          <span className="absolute top-2 right-2 font-mono text-xs text-[#94A3B8] select-none">+</span>
          <span className="absolute bottom-2 left-2 font-mono text-xs text-[#94A3B8] select-none">+</span>
          <span className="absolute bottom-2 right-2 font-mono text-xs text-[#94A3B8] select-none">+</span>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#1e2a3d] text-[#38BDF8] font-mono text-xs font-semibold">
                [SEC_04]
              </span>
              <span className="font-mono text-xs text-[#89ceff] tracking-widest uppercase font-semibold">
                HACKATHONS // DEPLOYMENTS &amp; FIELD TRIALS
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#F8FAFC] uppercase tracking-tight font-extrabold leading-none">
                LEARN BY<br />
                <span className="text-[#38BDF8]">BUILDING.</span>
              </h2>
              <div className="flex flex-col gap-1 lg:text-right max-w-md">
                <p className="font-mono text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Real hackathon sprints, engineering challenge logs, and hardware-software problem solving under time-constrained environments.
                </p>
                <div className="font-mono text-xs text-[#38BDF8]">
                  4 VERIFIED PARTICIPATIONS // 2025—2026
                </div>
              </div>
            </div>

            {/* Brutalist Motto Banner */}
            <div className="w-full mt-4 p-4 bg-[#030e20] border border-[#2563EB] shadow-[4px_4px_0px_0px_#38bdf8] flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
              <div className="flex items-center gap-3 z-10">
                <span className="font-mono text-[#38BDF8] text-lg">&gt;</span>
                <span className="font-mono text-sm sm:text-base text-[#F8FAFC] tracking-wider font-bold">
                  /* BUILD. FAIL. LEARN. BUILD AGAIN. */
                </span>
              </div>
              <div className="flex items-center gap-2 z-10">
                <span className="font-mono text-[10px] px-2 py-0.5 bg-[#142032] text-[#89ceff] border border-[#3e484f]">
                  MODE: SPRINT_EXECUTION
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-[#38BDF8] text-[#071426] font-bold">
                  SYS_ACK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-[#94A3B8]">METRIC_01</span>
            <div className="mt-3">
              <span className="font-heading text-2xl sm:text-3xl text-[#F8FAFC] block leading-none font-bold">
                24-48<span className="text-[#38BDF8] text-lg">H</span>
              </span>
              <span className="font-mono text-[11px] text-[#94A3B8] uppercase mt-1 block">
                Sprint Durations
              </span>
            </div>
          </div>

          <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-[#94A3B8]">METRIC_02</span>
            <div className="mt-3">
              <span className="font-heading text-2xl sm:text-3xl text-[#F8FAFC] block leading-none font-bold">
                04<span className="text-[#89ceff] text-lg">_NODES</span>
              </span>
              <span className="font-mono text-[11px] text-[#94A3B8] uppercase mt-1 block">
                Events Logged
              </span>
            </div>
          </div>

          <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-[#94A3B8]">METRIC_03</span>
            <div className="mt-3">
              <span className="font-heading text-2xl sm:text-3xl text-[#F8FAFC] block leading-none font-bold">
                2<span className="text-[#bccbff] text-lg"> YRS</span>
              </span>
              <span className="font-mono text-[11px] text-[#94A3B8] uppercase mt-1 block">
                2025 &amp; 2026 Sprints
              </span>
            </div>
          </div>

          <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col justify-between">
            <span className="font-mono text-[10px] text-[#94A3B8]">METRIC_04</span>
            <div className="mt-3">
              <span className="font-heading text-2xl sm:text-3xl text-[#38BDF8] block leading-none font-bold">
                NATL<span className="text-[#F8FAFC] text-lg">_TIER</span>
              </span>
              <span className="font-mono text-[11px] text-[#94A3B8] uppercase mt-1 block">
                SIH 2026 Participation
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Left Filter & Coordinate Rail */}
          <aside className="lg:w-64 shrink-0 flex flex-col gap-6">
            <div className="bg-[#0f1c2e] p-4 border border-[#2563EB]/60 shadow-[4px_4px_0px_0px_#00344d]">
              <div className="flex items-center justify-between pb-1.5 bg-[#030e20] px-2 py-1 border border-[#3e484f]">
                <span className="font-mono text-xs text-[#8ed5ff] uppercase font-bold">
                  CTRL // LOG_ROUTER
                </span>
                <span className="w-2 h-2 bg-[#38BDF8]"></span>
              </div>
              <p className="font-mono text-xs text-[#94A3B8] mt-3 leading-relaxed">
                Filter entries by category to inspect systems or data deployments.
              </p>

              <div className="flex flex-col gap-1.5 mt-4">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`w-full text-left px-3 py-2 font-mono text-xs uppercase flex justify-between items-center transition-all cursor-pointer font-bold ${
                    activeFilter === 'all'
                      ? 'bg-[#38BDF8] text-[#071426] shadow-[2px_2px_0px_0px_#2563EB]'
                      : 'bg-[#030e20] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#3e484f]'
                  }`}
                >
                  <span>[00] SHOW ALL</span>
                  <span>4</span>
                </button>

                <button
                  onClick={() => setActiveFilter('hardware')}
                  className={`w-full text-left px-3 py-2 font-mono text-xs uppercase flex justify-between items-center transition-all cursor-pointer font-bold ${
                    activeFilter === 'hardware'
                      ? 'bg-[#38BDF8] text-[#071426] shadow-[2px_2px_0px_0px_#2563EB]'
                      : 'bg-[#030e20] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#3e484f]'
                  }`}
                >
                  <span>[01] HARDWARE / IOT</span>
                  <span>2</span>
                </button>

                <button
                  onClick={() => setActiveFilter('data')}
                  className={`w-full text-left px-3 py-2 font-mono text-xs uppercase flex justify-between items-center transition-all cursor-pointer font-bold ${
                    activeFilter === 'data'
                      ? 'bg-[#38BDF8] text-[#071426] shadow-[2px_2px_0px_0px_#2563EB]'
                      : 'bg-[#030e20] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#3e484f]'
                  }`}
                >
                  <span>[02] DATA / ALGO</span>
                  <span>2</span>
                </button>
              </div>

              <div className="mt-6 pt-3 bg-[#030e20] p-2 border border-[#3e484f]">
                <div className="font-mono text-[10px] text-[#94A3B8] leading-tight">
                  // TELEMETRY ACTIVE<br />
                  SYS_STABILITY: VERIFIED<br />
                  STACK: C / PY / EMBEDDED<br />
                  INSTITUTION: MLRIT
                </div>
              </div>
            </div>

            {/* Architecture Pipeline Mini-Box */}
            <div className="bg-[#030e20] border border-[#3e484f] p-4 hidden lg:flex flex-col gap-2">
              <div className="font-mono text-xs text-[#89ceff] uppercase tracking-wider flex items-center gap-1 font-bold">
                <span>&gt;</span> ARCH_PIPELINE
              </div>
              <p className="font-mono text-[11px] text-[#94A3B8] leading-relaxed">
                Problem Statement Analysis<br />
                ↓<br />
                Hardware / Data Schema Design<br />
                ↓<br />
                Core Implementation Sprint<br />
                ↓<br />
                Validation &amp; Demonstration
              </p>
            </div>
          </aside>

          {/* Right Main Timeline Container */}
          <div className="flex-1 relative">
            {/* Persistent Central Spine Line */}
            <div className="absolute left-4 sm:left-7 top-0 bottom-0 w-[3px] bg-[#2563EB] z-0"></div>

            <div className="flex flex-col gap-8 relative z-10">
              {filteredHackathons.map((hackathon) => {
                const isApex = hackathon.badgeType === 'apex';
                return (
                  <article
                    key={hackathon.id}
                    className="relative flex items-start pl-10 sm:pl-16 transition-all duration-300"
                  >
                    {/* Node Pin */}
                    <div
                      className={`absolute left-4 sm:left-7 -translate-x-[9px] top-6 w-5 h-5 bg-[#071426] flex items-center justify-center ${
                        isApex
                          ? 'shadow-[0_0_0_3px_#38bdf8]'
                          : 'shadow-[0_0_0_3px_#2563EB]'
                      }`}
                    >
                      <span className={`w-2 h-2 ${isApex ? 'bg-[#38BDF8]' : 'bg-[#89ceff]'}`}></span>
                    </div>

                    {/* Node Card */}
                    <div
                      className={`w-full bg-[#0f1c2e] p-4 sm:p-6 relative group border-2 ${
                        isApex
                          ? 'border-[#38BDF8] shadow-[4px_4px_0px_0px_#38bdf8]'
                          : 'border-[#2563EB] shadow-[4px_4px_0px_0px_#00a2e6]'
                      }`}
                    >
                      {/* Corner Crosshairs */}
                      <span className="absolute top-1 left-1 font-mono text-xs text-[#94A3B8] select-none">+</span>
                      <span className="absolute top-1 right-1 font-mono text-xs text-[#94A3B8] select-none">+</span>
                      <span className="absolute bottom-1 left-1 font-mono text-xs text-[#94A3B8] select-none">+</span>
                      <span className="absolute bottom-1 right-1 font-mono text-xs text-[#94A3B8] select-none">+</span>

                      {/* Header Plate */}
                      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#030e20] px-3 py-1.5 mb-4 border border-[#3e484f]">
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-lg text-[#38BDF8] font-bold">
                            {hackathon.index}
                          </span>
                          <span className="text-[#3e484f]">/</span>
                          <span className="px-2 py-0.5 bg-[#142032] font-mono text-xs text-[#8ed5ff] font-bold border border-[#38BDF8]/40">
                            {hackathon.year}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-[#38BDF8]"></span>
                          <span
                            className={`font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold ${
                              isApex ? 'text-[#38BDF8]' : 'text-[#94A3B8]'
                            }`}
                          >
                            {hackathon.badge}
                          </span>
                        </div>
                      </div>

                      {/* Main Payload */}
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="font-heading text-2xl sm:text-3xl text-[#F8FAFC] uppercase tracking-tight font-bold">
                            {hackathon.name}
                          </h3>
                        </div>
                        <span className="font-mono text-xs text-[#89ceff] tracking-widest uppercase">
                          {hackathon.edition}
                        </span>

                        <p className="font-mono text-xs sm:text-sm text-[#F8FAFC] mt-2 leading-relaxed">
                          {hackathon.description}
                        </p>

                        {/* Technical Telemetry Sub-grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 bg-[#030e20] p-3 border border-[#3e484f]">
                          <div className="flex flex-col">
                            <span className="font-mono text-[10px] text-[#94A3B8] uppercase">
                              CORE ARCHITECTURE
                            </span>
                            <span className="font-mono text-xs text-[#F8FAFC] font-semibold">
                              {hackathon.architecture}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-mono text-[10px] text-[#94A3B8] uppercase">
                              SPRINT CONTEXT
                            </span>
                            <span className="font-mono text-xs text-[#89ceff]">
                              {hackathon.runtime}
                            </span>
                          </div>
                        </div>

                        {/* Tag Matrix */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 mt-3 border-t border-[#3e484f]">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {hackathon.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[10px] text-[#38BDF8] px-2 py-0.5 bg-[#030e20] border border-[#38BDF8]/40 font-semibold"
                              >
                                [{tag}]
                              </span>
                            ))}
                          </div>
                          <span className="font-mono text-[10px] text-[#94A3B8]">
                            {hackathon.nodeRef}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Terminal Log Output at Section Bottom */}
        <div className="bg-[#030e20] border-2 border-[#2563EB] shadow-[4px_4px_0px_0px_#00344d]">
          <div className="flex items-center justify-between px-4 py-2 bg-[#142032] border-b border-[#3e484f]">
            <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
              <span className="px-1.5 bg-[#071426] text-[#38BDF8] font-bold">[X]</span>
              <span className="px-1.5 bg-[#071426] text-[#94A3B8]">[-]</span>
              <span className="px-1.5 bg-[#071426] text-[#94A3B8]">[+]</span>
              <span className="ml-2 text-[#F8FAFC]">BUILD_ENVIRONMENT_LOG // tsk-mlrit-station-04</span>
            </div>
            <div className="font-mono text-xs text-[#89ceff] hidden sm:inline">
              PROTOCOL: VERIFIED_EVENTS
            </div>
          </div>
          <div className="p-4 font-mono text-xs text-[#94A3B8] flex flex-col gap-1.5 overflow-x-auto">
            <div className="text-[#8ed5ff]">shiva@mlrit-box:~$ ./verify_hackathon_manifest.sh --all</div>
            <div className="text-[#38BDF8]">[OK] 2025 :: ZIGNASA 2025 (Hardware validation sprint verified)</div>
            <div className="text-[#38BDF8]">[OK] 2026 :: IGNITIA 2026 (Algorithmic software sprint verified)</div>
            <div className="text-[#38BDF8]">[OK] 2026 :: SAE INDIA 2026 (Vehicular CAD &amp; embedded payload verified)</div>
            <div className="text-[#38BDF8] font-bold">
              [FLAGSHIP] 2026 :: SMART INDIA HACKATHON — SIH 2026 (National stage participation logged)
            </div>
            <div className="text-[#89ceff] mt-2">
              &gt;&gt; LOG STATUS: ALL 4 PARTICIPATIONS RECORDED // ACTIVE STUDENT CODER &lt;&lt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
