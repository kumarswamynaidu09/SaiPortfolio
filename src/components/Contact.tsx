import { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Editable contact placeholders as requested by prompt
  const [endpoints, setEndpoints] = useState({
    github: 'https://github.com/[placeholder]',
    linkedin: 'https://linkedin.com/in/[placeholder]',
    email: 'contact@[placeholder].edu',
  });
  const [isEditingEndpoints, setIsEditingEndpoints] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="w-full relative px-4 sm:px-6 lg:px-10 py-8 lg:py-12 bg-[#071426]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header matching Stitch Screen 5 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#8ed5ff] tracking-widest uppercase font-semibold">
            <span className="inline-block w-2.5 h-2.5 bg-[#38BDF8]"></span>
            <span>05 — CONTACT // TRANSMISSION PROTOCOL</span>
            <span className="text-[#3e484f] font-mono hidden sm:inline">:: PORT_ADDR_443</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#F8FAFC] uppercase tracking-tighter leading-none mt-2 font-extrabold">
            LET'S CONNECT.<br />
            <span className="text-[#38BDF8]">BUILD SOMETHING.</span>
          </h2>

          <div className="w-full h-1 bg-[#1e2a3d] relative mt-2">
            <div className="absolute top-0 left-0 h-full w-48 bg-[#38BDF8]"></div>
            <div className="absolute -top-1 left-48 text-[#94A3B8] text-[10px] font-mono tracking-widest pl-2">
              SYS_STREAM::STABLE
            </div>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: ID Card, Statement, Network Endpoints */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Context Note */}
            <div className="flex flex-col gap-2 bg-[#030e20] p-5 border-2 border-[#2563EB] relative shadow-[4px_4px_0px_0px_#00344d]">
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#38BDF8]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#38BDF8]"></div>
              <h3 className="font-heading text-base sm:text-lg text-[#F8FAFC] uppercase font-bold">
                Have a project, hackathon idea, or collaboration in mind?
              </h3>
              <p className="font-mono text-xs text-[#94A3B8] leading-relaxed">
                Open to hackathon teams, research discussions, embedded systems prototyping, or software engineering conversations. Zero latency.
              </p>
            </div>

            {/* Verified Student ID Card matching Stitch */}
            <div className="bg-[#0f1c2e] p-5 flex flex-col gap-4 border-2 border-[#38BDF8] relative shadow-[4px_4px_0px_0px_#2563EB]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#38BDF8] tracking-widest uppercase font-bold">
                  [ID_CARD :: SYS_VERIFIED]
                </span>
                <span className="font-mono text-[10px] text-[#94A3B8]">TSK.NODE.2025</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#142032] border border-[#38BDF8] flex items-center justify-center shrink-0">
                  <span className="font-mono text-base font-bold text-[#38BDF8]">TSK</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading text-base sm:text-lg text-[#F8FAFC] uppercase font-bold tracking-tight truncate">
                    T SAI SHIVA KUMAR
                  </span>
                  <span className="font-mono text-xs text-[#89ceff] tracking-wider">
                    B.TECH CSE — DATA SCIENCE
                  </span>
                </div>
              </div>

              <div className="bg-[#030e20] p-3 flex flex-col gap-1.5 border border-[#3e484f]">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#94A3B8] uppercase">ACADEMIC BASE:</span>
                  <span className="text-[#F8FAFC]">MLRIT | 2025—2029</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#94A3B8] uppercase">STATION COORD:</span>
                  <span className="text-[#F8FAFC]">HYDERABAD, TELANGANA</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#94A3B8] uppercase">STATUS:</span>
                  <span className="text-[#38BDF8] font-bold">● ACTIVE STUDENT</span>
                </div>
              </div>

              <div className="bg-[#071426] p-2 flex items-center justify-between border border-[#3e484f]/40">
                <span className="font-mono text-[10px] text-[#94A3B8]">
                  AUTH: 4A91 88B2 CC10 77E4 TSK
                </span>
                <span className="font-mono text-[10px] text-[#38BDF8]">VERIFIED</span>
              </div>
            </div>

            {/* Network Endpoints (Clean Placeholders without fabricated data) */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
                  [NETWORK_ENDPOINTS // PLACEHOLDERS]
                </span>
                <button
                  onClick={() => setIsEditingEndpoints(!isEditingEndpoints)}
                  className="font-mono text-[10px] text-[#38BDF8] hover:underline cursor-pointer"
                >
                  {isEditingEndpoints ? '[DONE EDITING]' : '[EDIT LINKS]'}
                </button>
              </div>

              {isEditingEndpoints ? (
                <div className="bg-[#030e20] p-3 border border-[#38BDF8] flex flex-col gap-2 font-mono text-xs">
                  <div className="flex flex-col gap-1">
                    <label className="text-[#8ed5ff]">GitHub URL / Username:</label>
                    <input
                      type="text"
                      value={endpoints.github}
                      onChange={(e) => setEndpoints({ ...endpoints, github: e.target.value })}
                      className="bg-[#071426] border border-[#3e484f] p-1.5 text-[#F8FAFC]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[#8ed5ff]">LinkedIn URL:</label>
                    <input
                      type="text"
                      value={endpoints.linkedin}
                      onChange={(e) => setEndpoints({ ...endpoints, linkedin: e.target.value })}
                      className="bg-[#071426] border border-[#3e484f] p-1.5 text-[#F8FAFC]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[#8ed5ff]">Contact Email:</label>
                    <input
                      type="text"
                      value={endpoints.email}
                      onChange={(e) => setEndpoints({ ...endpoints, email: e.target.value })}
                      className="bg-[#071426] border border-[#3e484f] p-1.5 text-[#F8FAFC]"
                    />
                  </div>
                </div>
              ) : null}

              {/* Endpoint Link 1: GitHub */}
              <a
                href={endpoints.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f1c2e] hover:bg-[#1e2a3d] border border-[#2563EB] transition-colors p-3.5 flex items-center justify-between shadow-[3px_3px_0px_0px_#030e20]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#38BDF8] group-hover:text-[#8ed5ff] font-bold">
                    [01]
                  </span>
                  <span className="font-mono text-xs text-[#F8FAFC] tracking-wider uppercase font-semibold">
                    GITHUB
                  </span>
                </div>
                <span className="font-mono text-xs text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors truncate max-w-[200px]">
                  {endpoints.github.replace('https://', '')} →
                </span>
              </a>

              {/* Endpoint Link 2: LinkedIn */}
              <a
                href={endpoints.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0f1c2e] hover:bg-[#1e2a3d] border border-[#2563EB] transition-colors p-3.5 flex items-center justify-between shadow-[3px_3px_0px_0px_#030e20]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#38BDF8] group-hover:text-[#8ed5ff] font-bold">
                    [02]
                  </span>
                  <span className="font-mono text-xs text-[#F8FAFC] tracking-wider uppercase font-semibold">
                    LINKEDIN
                  </span>
                </div>
                <span className="font-mono text-xs text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors truncate max-w-[200px]">
                  {endpoints.linkedin.replace('https://', '')} →
                </span>
              </a>

              {/* Endpoint Link 3: Email */}
              <a
                href={`mailto:${endpoints.email}`}
                className="group bg-[#0f1c2e] hover:bg-[#1e2a3d] border border-[#2563EB] transition-colors p-3.5 flex items-center justify-between shadow-[3px_3px_0px_0px_#030e20]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#38BDF8] group-hover:text-[#8ed5ff] font-bold">
                    [03]
                  </span>
                  <span className="font-mono text-xs text-[#F8FAFC] tracking-wider uppercase font-semibold">
                    DIRECT EMAIL
                  </span>
                </div>
                <span className="font-mono text-xs text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors truncate max-w-[200px]">
                  {endpoints.email} →
                </span>
              </a>

              {/* Endpoint Link 4: Dossier / CV */}
              <button
                onClick={() => {
                  window.print();
                }}
                className="group bg-[#030e20] hover:bg-[#0f1c2e] border-2 border-[#38BDF8] transition-colors p-3.5 flex items-center justify-between shadow-[3px_3px_0px_0px_#38bdf8] cursor-pointer text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#38BDF8] font-bold">[04]</span>
                  <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase font-bold">
                    PORTFOLIO DOSSIER
                  </span>
                </div>
                <span className="font-mono text-xs text-[#38BDF8] font-bold flex items-center gap-1">
                  [ EXPORT_OR_PRINT ]
                </span>
              </button>
            </div>

            {/* Radar Telemetry Box matching Stitch */}
            <div className="bg-[#030e20] border border-[#3e484f] p-4 flex flex-col gap-2">
              <span className="font-mono text-[10px] text-[#94A3B8] tracking-wider uppercase">
                [RADAR_TELEMETRY]
              </span>
              <div className="w-full h-20 bg-[#071426] flex items-center justify-center relative overflow-hidden border border-[#3e484f]/60">
                <svg
                  className="w-full h-full text-[#38BDF8]/25"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 60"
                >
                  <path
                    d="M0 30 Q 25 10, 50 30 T 100 30 T 150 15 T 200 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0 30 Q 30 50, 70 30 T 130 45 T 200 30"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="2 2"
                    strokeWidth="1"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
                  <span className="font-mono text-xs text-[#8ed5ff]">LATENCY: 14MS</span>
                  <span className="font-mono text-xs text-[#89ceff]">IN-HYD-AZ-01</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stitch Dispatch Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#0f1c2e] border-2 border-[#2563EB] shadow-[6px_6px_0px_0px_#030e20] relative p-5 sm:p-6 flex flex-col gap-5">
              {/* Corner crosshairs */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#38BDF8]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#38BDF8]"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#38BDF8]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#38BDF8]"></div>

              {/* Form Plate Header */}
              <div className="flex items-center justify-between bg-[#030e20] p-2.5 -mt-5 -mx-5 sm:-mt-6 sm:-mx-6 border-b border-[#2563EB]">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 bg-[#38BDF8]"></span>
                  <span className="font-mono text-xs text-[#8ed5ff] font-semibold">
                    [SESSION_INIT :: CONTACT_DISPATCH_v1.0]
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
                  <span>RX: OK</span>
                  <span>|</span>
                  <span className="text-[#38BDF8]">TX: RDY</span>
                </div>
              </div>

              {/* Shell directive */}
              <div className="bg-[#030e20] p-3 flex flex-col gap-1 border border-[#3e484f]">
                <span className="font-mono text-[10px] text-[#89ceff] tracking-widest uppercase font-bold">
                  TERMINAL DIRECTIVE:
                </span>
                <p className="font-mono text-xs text-[#94A3B8]">
                  shiva@mlrit-node:~$ execute transmission --auth=guest --priority=normal
                </p>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Field 1: Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="caller-name"
                    className="font-mono text-xs text-[#8ed5ff] uppercase flex justify-between font-bold"
                  >
                    <span>01 // SENDER IDENTIFIER [NAME]</span>
                    <span className="text-[#94A3B8] font-mono text-[10px]">*REQUIRED</span>
                  </label>
                  <div className="relative bg-[#030e20] border border-[#3e484f] focus-within:border-[#38BDF8] flex items-center">
                    <span className="px-3 font-mono text-xs text-[#94A3B8] select-none">&gt;</span>
                    <input
                      id="caller-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Collaborator / Recruiter / Team Lead"
                      className="w-full bg-transparent py-2.5 pr-3 font-mono text-xs sm:text-sm text-[#F8FAFC] placeholder:text-[#3e484f] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Field 2: Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="caller-email"
                    className="font-mono text-xs text-[#8ed5ff] uppercase flex justify-between font-bold"
                  >
                    <span>02 // ELECTRONIC MAIL [RETURN_PATH]</span>
                    <span className="text-[#94A3B8] font-mono text-[10px]">*RFC_5322</span>
                  </label>
                  <div className="relative bg-[#030e20] border border-[#3e484f] focus-within:border-[#38BDF8] flex items-center">
                    <span className="px-3 font-mono text-xs text-[#94A3B8] select-none">&gt;</span>
                    <input
                      id="caller-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full bg-transparent py-2.5 pr-3 font-mono text-xs sm:text-sm text-[#F8FAFC] placeholder:text-[#3e484f] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Field 3: Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="caller-subject"
                    className="font-mono text-xs text-[#8ed5ff] uppercase flex justify-between font-bold"
                  >
                    <span>03 // TOPIC / VECTOR [SUBJECT]</span>
                    <span className="text-[#94A3B8] font-mono text-[10px]">*CATEGORY</span>
                  </label>
                  <div className="relative bg-[#030e20] border border-[#3e484f] focus-within:border-[#38BDF8] flex items-center">
                    <span className="px-3 font-mono text-xs text-[#94A3B8] select-none">&gt;</span>
                    <input
                      id="caller-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Hackathon Team / Collaboration / Project Inquiry"
                      className="w-full bg-transparent py-2.5 pr-3 font-mono text-xs sm:text-sm text-[#F8FAFC] placeholder:text-[#3e484f] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Field 4: Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="caller-msg"
                    className="font-mono text-xs text-[#8ed5ff] uppercase flex justify-between font-bold"
                  >
                    <span>04 // PAYLOAD CONTENT [MESSAGE]</span>
                    <span className="text-[#94A3B8] font-mono text-[10px]">*RAW_STREAM</span>
                  </label>
                  <div className="relative bg-[#030e20] border border-[#3e484f] focus-within:border-[#38BDF8] flex items-start">
                    <span className="px-3 pt-2.5 font-mono text-xs text-[#94A3B8] select-none">&gt;</span>
                    <textarea
                      id="caller-msg"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter message details or problem statement discussion..."
                      className="w-full bg-transparent py-2.5 pr-3 font-mono text-xs sm:text-sm text-[#F8FAFC] placeholder:text-[#3e484f] focus:outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#94A3B8] uppercase self-start sm:self-center">
                    <span className="inline-block w-2 h-2 bg-[#38BDF8]"></span>
                    <span>SECURE DISPATCH // BUFFER READY</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#38BDF8] text-[#071426] font-mono text-xs uppercase px-6 py-3 font-bold tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#2563EB] hover:bg-[#8ed5ff] transition-all cursor-pointer"
                  >
                    <span>[ SEND MESSAGE → ]</span>
                  </button>
                </div>
              </form>

              {/* Success Notification Banner */}
              {formSubmitted && (
                <div className="bg-[#142032] border border-[#38BDF8] p-4 flex flex-col gap-1 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#38BDF8] uppercase font-bold">
                      TRANSMISSION CONFIRMED
                    </span>
                    <span className="font-mono text-xs text-[#8ed5ff]">STATUS: 200 OK</span>
                  </div>
                  <p className="font-mono text-xs text-[#F8FAFC] leading-relaxed">
                    Message simulation received for T Sai Shiva Kumar (MLRIT).
                  </p>
                </div>
              )}

              {/* Form Bottom Log */}
              <div className="flex items-center justify-between bg-[#071426] p-2 text-mono text-[10px] text-[#94A3B8] border border-[#3e484f]/40">
                <span>DISPATCH LOG: ZERO_DROPPED_FRAMES</span>
                <span className="text-[#38BDF8]">CHECKSUM: 0x9AF4E1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transmission Sub-Ribbon at bottom */}
        <div className="w-full bg-[#030e20] p-3 border border-[#3e484f] flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
            <span className="text-[#8ed5ff]">LOC: 17.5449° N, 78.4312° E</span>
            <span>|</span>
            <span>NET: DUAL_STACK_IPV6</span>
            <span>|</span>
            <span className="text-[#89ceff]">CAMPUS: MLRIT</span>
          </div>
          <div className="font-mono text-xs text-[#38BDF8] tracking-widest uppercase font-semibold">
            TRANSMISSION READY // ZERO LATENCY DISPATCH
          </div>
        </div>
      </div>
    </section>
  );
}
