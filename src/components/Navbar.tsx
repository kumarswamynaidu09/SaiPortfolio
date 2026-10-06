import { useState } from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  viewMode: 'pages' | 'scroll';
  onToggleViewMode: () => void;
}

const NAV_ITEMS: { id: SectionId; num: string; label: string }[] = [
  { id: 'home', num: '[01]', label: 'HOME' },
  { id: 'about', num: '[02]', label: 'ABOUT' },
  { id: 'skills', num: '[03]', label: 'SKILLS' },
  { id: 'hackathons', num: '[04]', label: 'HACKATHONS' },
  { id: 'contact', num: '[05]', label: 'CONTACT' },
];

export default function Navbar({
  activeSection,
  onNavigate,
  viewMode,
  onToggleViewMode,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071426]/95 backdrop-blur-md border-b-[1.5px] border-[#38BDF8]/40">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between relative">
        {/* Top edge telemetry coordinates */}
        <div className="absolute -bottom-[1px] left-0 font-mono text-[10px] text-[#94A3B8] px-2 bg-[#071426] border-r border-t border-[#3e484f] hidden md:block">
          + 00.00 // LATENCY_OPTIMAL
        </div>
        <div className="absolute -bottom-[1px] right-0 font-mono text-[10px] text-[#94A3B8] px-2 bg-[#071426] border-l border-t border-[#3e484f] hidden md:block">
          [GRID_ACTIVE] +
        </div>

        {/* Brand / Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Monogram Box */}
          <div className="h-9 w-9 bg-[#0B1F3A] border-2 border-[#2563EB] flex items-center justify-center font-mono font-bold text-xs text-[#38BDF8] shadow-[2px_2px_0px_0px_#2563EB] group-hover:border-[#38BDF8] transition-colors">
            TSK
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sm sm:text-base text-[#8ed5ff] tracking-tight uppercase leading-none group-hover:text-[#F8FAFC] transition-colors">
              T SAI SHIVA KUMAR
            </span>
            <span className="font-mono text-[10px] text-[#89ceff] tracking-widest mt-1">
              [SYS_ID: TSK-2025-29]
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 border border-[#3e484f]/60 bg-[#030e20] p-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 font-mono text-xs font-semibold uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#38BDF8] bg-[#142032] border border-[#38BDF8]/60 shadow-[2px_2px_0px_0px_#38bdf8]'
                    : 'text-[#94A3B8] hover:text-[#8ed5ff] hover:bg-[#071426]'
                }`}
              >
                {item.num} {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side status & View Mode Toggle */}
        <div className="flex items-center gap-3">
          {/* View mode toggle switch */}
          <button
            onClick={onToggleViewMode}
            title="Toggle between Stitch Screen views or Continuous Document scrolling"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#030e20] border border-[#2563EB] hover:border-[#38BDF8] font-mono text-[10px] text-[#38BDF8] transition-colors cursor-pointer"
          >
            <span className="text-[#94A3B8]">VIEW:</span>
            <span className="font-bold">{viewMode === 'pages' ? '[TABS]' : '[STREAM]'}</span>
          </button>

          {/* Availability pill */}
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 bg-[#030e20] border border-[#3e484f]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38bdf8]"></span>
            <span className="font-mono text-[10px] text-[#8ed5ff] tracking-wider uppercase">
              AVAILABLE FOR COLLABORATION
            </span>
          </div>

          {/* Quick Contact Action Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-8 h-8 bg-[#8ed5ff] hover:bg-[#38BDF8] text-[#00354a] flex items-center justify-center transition-colors cursor-pointer"
            title="Jump to Contact"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206"
              />
            </svg>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#8ed5ff] hover:text-[#F8FAFC] border border-[#3e484f] bg-[#030e20]"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071426] border-b border-[#2563EB] px-4 py-3 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 font-mono text-xs font-semibold uppercase flex items-center justify-between ${
                  isActive
                    ? 'text-[#38BDF8] bg-[#142032] border-l-2 border-[#38BDF8]'
                    : 'text-[#94A3B8] hover:text-[#8ed5ff]'
                }`}
              >
                <span>
                  {item.num} {item.label}
                </span>
                {isActive && <span className="text-[10px] text-[#38BDF8]">● ACTIVE</span>}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#3e484f] flex justify-between items-center text-[10px] font-mono text-[#94A3B8]">
            <button
              onClick={onToggleViewMode}
              className="text-[#38BDF8] font-bold"
            >
              TOGGLE VIEW MODE: {viewMode === 'pages' ? 'TABS' : 'STREAM'}
            </button>
            <span className="text-[#38BDF8]">● READY</span>
          </div>
        </div>
      )}
    </header>
  );
}
