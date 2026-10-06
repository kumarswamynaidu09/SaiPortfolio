import { useState, useRef } from 'react';

interface ProfileImageSlotProps {
  className?: string;
  compact?: boolean;
}

export default function ProfileImageSlot({ className = '', compact = false }: ProfileImageSlotProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [customImageSrc, setCustomImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSrc = customImageSrc || '/profile.jpg';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImageSrc(url);
      setImageError(false);
      setImageLoaded(true);
    }
  };

  return (
    <div
      className={`relative bg-[#0B1F3A] border-2 border-[#2563EB] shadow-brutal-dark ${
        compact ? 'p-3' : 'p-4 sm:p-5'
      } ${className}`}
    >
      {/* Brutalist Corner Crosshairs */}
      <span className="absolute -top-2.5 -left-2.5 font-mono text-base font-bold text-[#38BDF8] select-none leading-none z-20">
        +
      </span>
      <span className="absolute -top-2.5 -right-2.5 font-mono text-base font-bold text-[#38BDF8] select-none leading-none z-20">
        +
      </span>
      <span className="absolute -bottom-2.5 -left-2.5 font-mono text-base font-bold text-[#38BDF8] select-none leading-none z-20">
        +
      </span>
      <span className="absolute -bottom-2.5 -right-2.5 font-mono text-base font-bold text-[#38BDF8] select-none leading-none z-20">
        +
      </span>

      {/* Frame Top Header */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#2563EB]/60 bg-[#071426] px-2.5 py-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-[#38BDF8] inline-block animate-pulse"></span>
          <span className="font-mono text-[11px] font-semibold tracking-wider text-[#38BDF8] uppercase">
            [PHOTO_SLOT :: 01]
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase">
          RAW_RECT_FRAME
        </span>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full aspect-[4/3] bg-[#071426] border border-[#2563EB]/40 flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

        {/* Diagonal corner guides */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#38BDF8]/60 pointer-events-none"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#38BDF8]/60 pointer-events-none"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#38BDF8]/60 pointer-events-none"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#38BDF8]/60 pointer-events-none"></div>

        {/* Real image tag if not errored */}
        {!imageError && (
          <img
            src={activeSrc}
            alt="T Sai Shiva Kumar"
            className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            onLoad={() => {
              setImageLoaded(true);
              setImageError(false);
            }}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
          />
        )}

        {/* Clean Brutalist Fallback Placeholder (shown when profile.jpg is not yet added) */}
        {(imageError || !imageLoaded) && (
          <div className="z-10 flex flex-col items-center justify-center p-4 text-center max-w-xs">
            {/* Monospace frame emblem */}
            <div className="w-14 h-14 bg-[#142032] border border-[#38BDF8] flex items-center justify-center mb-3 shadow-[2px_2px_0px_0px_#2563EB]">
              <svg
                className="w-7 h-7 text-[#38BDF8]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>

            <span className="font-mono text-xs font-bold text-[#F8FAFC] tracking-widest uppercase mb-1">
              [ PROFILE IMAGE ]
            </span>
            <span className="font-mono text-[10px] text-[#38BDF8] tracking-wider mb-2">
              EXPECTED: /public/profile.jpg
            </span>
            <p className="font-mono text-[10px] text-[#94A3B8] leading-tight mb-3">
              Place your image file in <span className="text-[#F8FAFC]">public/profile.jpg</span> to display here.
            </p>

            {/* Quick Preview File Input Trigger for developer ease */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="font-mono text-[10px] uppercase font-semibold text-[#071426] bg-[#38BDF8] hover:bg-[#8ed5ff] px-2.5 py-1 transition-colors border border-[#38BDF8] cursor-pointer shadow-[2px_2px_0px_0px_#003ba1]"
            >
              [ TEST LOCAL IMAGE ]
            </button>
          </div>
        )}
      </div>

      {/* Frame Bottom Details */}
      <div className="mt-2.5 pt-2 border-t border-[#2563EB]/40 flex flex-wrap items-center justify-between text-[10px] font-mono text-[#94A3B8] gap-1">
        <span className="text-[#38BDF8]">ASSET_ID: TSK_PORTRAIT_01</span>
        <span>SPEC: RECTANGULAR // NO_CIRCLE</span>
      </div>
    </div>
  );
}
