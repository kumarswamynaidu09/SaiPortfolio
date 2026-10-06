import { useState, useEffect } from 'react';
import ProfileImageSlot from './ProfileImageSlot';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [bufferVal, setBufferVal] = useState<string>('76.8');
  const [activeRightTab, setActiveRightTab] = useState<'photo' | 'telemetry'>('photo');

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = (72 + Math.random() * 6).toFixed(1);
      setBufferVal(rand);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full relative px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
      {/* Background radial dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 blueprint-grid"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10 items-stretch max-w-7xl mx-auto">
        {/* Left Column: Headline and Bio Information */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#142032] border border-[#2563EB]/40 px-2.5 py-1 font-mono text-[11px] text-[#8ed5ff] tracking-widest uppercase">
                COMPUTER SCIENCE & DATA SCIENCE / 2025—29
              </span>
              <span className="bg-[#030e20] border border-[#3e484f] px-2.5 py-1 font-mono text-[11px] text-[#94A3B8] tracking-widest uppercase">
                [COORD: 17.5449°N, 78.4312°E // MLRIT]
              </span>
            </div>

            {/* Massive Brutalist Name Display */}
            <div className="space-y-0 select-none">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] uppercase tracking-tighter leading-none block">
                T SAI
              </h1>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#38BDF8] uppercase tracking-tighter leading-none block">
                SHIVA
              </h1>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] uppercase tracking-tighter leading-none block">
                KUMAR
              </h1>
            </div>

            {/* Sub-label and Verified Short Introduction */}
            <div className="space-y-2 pt-2">
              <p className="font-heading text-lg sm:text-xl text-[#89ceff] font-semibold">
                B.Tech CSE — Data Science <span className="text-[#3e484f]">|</span> MLR Institute of Technology
              </p>
              <p className="font-mono text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
                Computer Science &amp; Data Science student interested in programming, problem solving, databases and embedded systems.
              </p>
            </div>
          </div>

          {/* Action Buttons and Status Strip */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('skills')}
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm bg-[#38BDF8] text-[#030e20] font-bold px-6 py-3 uppercase shadow-[4px_4px_0px_0px_#003ba1] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#003ba1] transition-all cursor-pointer"
              >
                [ VIEW SKILLS ↓ ]
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm bg-[#1e2a3d] text-[#F8FAFC] font-bold px-6 py-3 uppercase border border-[#3e484f] shadow-[4px_4px_0px_0px_#030e20] hover:bg-[#293549] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#030e20] transition-all cursor-pointer"
              >
                [ CONTACT ME → ]
              </button>
            </div>

            {/* Real System Readiness Banner */}
            <div className="bg-[#030e20] border border-[#2563EB]/40 p-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#38BDF8] animate-pulse"></span>
                <span className="font-mono text-[11px] text-[#8ed5ff] tracking-wider uppercase font-semibold">
                  SYSTEM READY // KERNEL 2025.29_ACTIVE
                </span>
              </div>
              <div className="font-mono text-[11px] text-[#94A3B8] bg-[#1e2a3d] px-2 py-0.5 uppercase border border-[#3e484f]">
                4 HACKATHONS LOGGED
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Profile Frame & Brutalist Telemetry Console */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Quick Tab Selector for Right Column */}
          <div className="flex items-center justify-between bg-[#030e20] border border-[#2563EB] p-1 font-mono text-xs">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveRightTab('photo')}
                className={`px-3 py-1 font-semibold uppercase transition-colors cursor-pointer ${
                  activeRightTab === 'photo'
                    ? 'bg-[#38BDF8] text-[#030e20]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                [ PROFILE PHOTO ]
              </button>
              <button
                onClick={() => setActiveRightTab('telemetry')}
                className={`px-3 py-1 font-semibold uppercase transition-colors cursor-pointer ${
                  activeRightTab === 'telemetry'
                    ? 'bg-[#38BDF8] text-[#030e20]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                [ TELEMETRY &amp; SCHEMATIC ]
              </button>
            </div>
            <span className="text-[10px] text-[#38BDF8] hidden sm:inline px-2">● SYS_SYNC</span>
          </div>

          {/* Conditional View: Profile Photo Slot or Telemetry Terminal */}
          {activeRightTab === 'photo' ? (
            <div className="flex flex-col gap-3">
              <ProfileImageSlot />
              {/* Telemetry snippet beneath photo */}
              <div className="bg-[#0f1c2e] border border-[#2563EB]/50 p-3 font-mono text-xs text-[#94A3B8] flex items-center justify-between">
                <span className="text-[#38BDF8] font-bold">&gt; MLRIT_NODE_2025</span>
                <span>STATUS: VERIFIED_ENROLLED</span>
              </div>
            </div>
          ) : (
            <div className="h-full bg-[#0f1c2e] border-2 border-[#2563EB] flex flex-col justify-between p-4 relative overflow-hidden shadow-[8px_8px_0px_0px_#030e20]">
              {/* Corner crosshairs */}
              <div className="absolute -top-1 -left-1 font-mono text-xs text-[#38BDF8] select-none">+</div>
              <div className="absolute -top-1 -right-1 font-mono text-xs text-[#38BDF8] select-none">+</div>
              <div className="absolute -bottom-1 -left-1 font-mono text-xs text-[#38BDF8] select-none">+</div>
              <div className="absolute -bottom-1 -right-1 font-mono text-xs text-[#38BDF8] select-none">+</div>

              <div className="space-y-3">
                {/* Header sub-bar */}
                <div className="flex items-center justify-between pb-1 bg-[#030e20] p-1.5 border border-[#3e484f]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#ffb4ab]"></span>
                    <span className="w-2 h-2 bg-[#00a2e6]"></span>
                    <span className="w-2 h-2 bg-[#38BDF8]"></span>
                    <span className="font-mono text-xs text-[#94A3B8] ml-1">DEV_TELEMETRY.LOG</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#8ed5ff]">SYS_OK</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#030e20] text-[#89ceff] font-mono text-[10px] px-1.5 py-0.5 border border-[#3e484f]">
                    [DATA_SPECIALIZATION: CSDS]
                  </span>
                  <span className="bg-[#030e20] text-[#38BDF8] font-mono text-[10px] px-1.5 py-0.5 border border-[#3e484f]">
                    [MLRIT_CAMPUS: ACTIVE]
                  </span>
                  <span className="bg-[#030e20] text-[#94A3B8] font-mono text-[10px] px-1.5 py-0.5 border border-[#3e484f]">
                    [STACK: C / PY / DSA / EMBEDDED]
                  </span>
                </div>

                {/* Shell session */}
                <div className="bg-[#030e20] p-3 space-y-1 font-mono text-xs text-[#F8FAFC] border border-[#2563EB]/40">
                  <p className="text-[#8ed5ff] font-bold">$ tsk-sys --status</p>
                  <p className="text-[#94A3B8]">
                    &gt; STUDENT_ID: <span className="text-[#F8FAFC]">25MLRIT-CSDS</span>
                  </p>
                  <p className="text-[#94A3B8]">
                    &gt; SPECIALIZATION: <span className="text-[#F8FAFC]">DATA SCIENCE &amp; ALGORITHMIC SYSTEMS</span>
                  </p>
                  <p className="text-[#94A3B8]">
                    &gt; HARDWARE_LINK: <span className="text-[#38BDF8]">ARDUINO_MEGA_REV3 [CONNECTED]</span>
                  </p>
                  <p className="text-[#94A3B8]">
                    &gt; HACKATHON_MODE: <span className="text-[#89ceff] font-bold">ENGAGED</span>
                  </p>
                </div>

                {/* Architectural Schematic SVG Topology */}
                <div className="w-full bg-[#030e20] p-2.5 space-y-1.5 border border-[#2563EB]/40">
                  <div className="flex justify-between items-center font-mono text-[10px]">
                    <span className="text-[#94A3B8] uppercase">ARCHITECTURAL SCHEMATIC</span>
                    <span className="text-[#89ceff]">NODE_HYD_402</span>
                  </div>
                  <div className="w-full h-28 bg-[#1e2a3d] relative overflow-hidden flex items-center justify-center border border-[#3e484f]">
                    <svg className="w-full h-full text-[#38BDF8]/20" fill="none" stroke="currentColor" viewBox="0 0 400 150">
                      <path d="M0 25 H400 M0 75 H400 M0 125 H400" strokeDasharray="2,4" />
                      <path d="M50 0 V150 M150 0 V150 M250 0 V150 M350 0 V150" strokeDasharray="2,4" />
                      <polygon fill="#071426" fillOpacity="0.8" points="200,20 280,75 200,130 120,75" stroke="#38bdf8" strokeWidth="1.5" />
                      <circle cx="200" cy="75" r="28" stroke="#89ceff" strokeWidth="1.5" />
                      <circle cx="200" cy="75" fill="#38bdf8" r="4" />
                      <line stroke="#89ceff" strokeDasharray="4,4" x1="120" x2="280" y1="75" y2="75" />
                      <line stroke="#89ceff" strokeDasharray="4,4" x1="200" x2="200" y1="20" y2="130" />
                      <text className="font-mono text-[10px]" fill="#38bdf8" x="210" y="70">CORE:DS_01</text>
                    </svg>
                    <div className="absolute bottom-1 right-2 font-mono text-[9px] text-[#94A3B8]">
                      FIG 01.0 // TOPOLOGY
                    </div>
                  </div>
                </div>
              </div>

              {/* Buffer progress meter */}
              <div className="space-y-1 pt-3">
                <div className="flex justify-between items-center font-mono text-[10px]">
                  <span className="text-[#94A3B8]">BUFFER_UTILIZATION</span>
                  <span className="text-[#8ed5ff] font-mono">{bufferVal}%</span>
                </div>
                <div className="w-full h-2 bg-[#030e20] overflow-hidden flex border border-[#3e484f]">
                  <div
                    className="h-full bg-[#38BDF8] transition-all duration-500"
                    style={{ width: `${bufferVal}%` }}
                  ></div>
                  <div className="h-full bg-[#00a2e6] w-[10%]"></div>
                </div>
                <div className="flex justify-between font-mono text-[9px] text-[#94A3B8]">
                  <span>HEAP: 4.2 MB</span>
                  <span>STACK: 512 KB</span>
                  <span>LEAK: 0.00%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Protocol Sub-Ribbon at the bottom of hero matching Stitch */}
      <div className="w-full max-w-7xl mx-auto mt-8 pt-4 bg-[#030e20] border-2 border-[#2563EB]/40 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-heading text-xl sm:text-2xl text-[#8ed5ff] font-bold">01 / 05</span>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-[#F8FAFC] tracking-wider uppercase font-semibold">
              INITIAL PROTOCOL
            </span>
            <span className="font-mono text-xs text-[#94A3B8]">INDEX // HOME_INTERFACE</span>
          </div>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-2 text-[#94A3B8] hover:text-[#38BDF8] transition-colors cursor-pointer group"
        >
          <span className="font-mono text-xs text-[#8ed5ff] group-hover:text-[#38BDF8] tracking-widest uppercase font-bold">
            SCROLL TO EXPLORE
          </span>
          <span className="font-mono text-[#38BDF8] text-base group-hover:translate-y-1 transition-transform animate-bounce">
            ↓
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-3 text-[#94A3B8] font-mono text-xs">
          <span>LATENCY: 14MS</span>
          <span>|</span>
          <span className="text-[#38BDF8]">STATUS: BUFFER_LOCKED</span>
        </div>
      </div>
    </section>
  );
}
