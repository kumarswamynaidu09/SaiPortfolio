import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [viewMode, setViewMode] = useState<'pages' | 'scroll'>('pages');

  // Handle navigation
  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
    if (viewMode === 'scroll') {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleViewMode = () => {
    const nextMode = viewMode === 'pages' ? 'scroll' : 'pages';
    setViewMode(nextMode);
    if (nextMode === 'scroll') {
      setTimeout(() => {
        const el = document.getElementById(activeSection);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  // When in scroll mode, update active section based on scroll position
  useEffect(() => {
    if (viewMode !== 'scroll') return;

    const sections: SectionId[] = ['home', 'about', 'skills', 'hackathons', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  return (
    <div className="min-h-screen bg-[#071426] text-[#F8FAFC] flex flex-col font-mono selection:bg-[#38BDF8] selection:text-[#071426]">
      {/* Top Navbar matching Stitch */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1 flex flex-col">
        {viewMode === 'pages' ? (
          /* Exact Screen by Screen view matching Google Stitch Prototype */
          <div className="flex-1 flex flex-col transition-opacity duration-200">
            {activeSection === 'home' && <Hero onNavigate={handleNavigate} />}
            {activeSection === 'about' && <About onNavigate={handleNavigate} />}
            {activeSection === 'skills' && <Skills />}
            {activeSection === 'hackathons' && <Hackathons />}
            {activeSection === 'contact' && <Contact />}

            {/* Quick Next Section Navigator for Screen Mode */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center text-xs text-[#94A3B8] border-t border-[#3e484f]/40">
              <span className="text-[#38BDF8]">
                STITCH_SCREEN: [{activeSection.toUpperCase()}]
              </span>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">VIEW ALL SECTIONS AT ONCE:</span>
                <button
                  onClick={handleToggleViewMode}
                  className="bg-[#142032] border border-[#2563EB] hover:border-[#38BDF8] px-2.5 py-1 text-[#38BDF8] cursor-pointer font-bold"
                >
                  [ SWITCH TO CONTINUOUS STREAM ]
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Continuous Stream view with all 5 sections rendered sequentially */
          <div className="flex flex-col w-full divide-y divide-[#2563EB]/40">
            <Hero onNavigate={handleNavigate} />
            <About onNavigate={handleNavigate} />
            <Skills />
            <Hackathons />
            <Contact />
          </div>
        )}
      </main>

      {/* Minimal Footer matching Stitch */}
      <Footer />
    </div>
  );
}
