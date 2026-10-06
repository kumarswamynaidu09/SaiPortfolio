export default function Footer() {
  return (
    <footer className="w-full bg-[#030e20] border-t-[1.5px] border-[#38BDF8]/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Column: Shiva info and minimal copyright */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="font-mono text-xs text-[#94A3B8] tracking-wider uppercase font-semibold">
            © 2026 T SAI SHIVA KUMAR | B.Tech CSE — Data Science, MLRIT | 2025—2029
          </p>
          <p className="font-mono text-[11px] text-[#3e484f]">
            TELEMETRY: HOSTED // KERNEL: 2025.29_ACTIVE // MLRIT CAMPUS // HYDERABAD
          </p>
        </div>

        {/* Right Column: Brutalist System Status Badge */}
        <div className="flex items-center gap-3 border border-[#3e484f] px-3 py-1.5 bg-[#0f1c2e]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#38BDF8] animate-pulse"></span>
            <span className="font-mono text-xs text-[#F8FAFC]">UPTIME: 99.98%</span>
          </div>
          <span className="text-[#3e484f]">|</span>
          <div className="flex items-center gap-1">
            <span className="font-mono text-xs text-[#89ceff]">NODE: IN-HYD-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
