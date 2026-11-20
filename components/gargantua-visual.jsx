"use client";

import { useState } from "react";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function GargantuaVisual() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center w-full max-w-[540px] aspect-square mx-auto cursor-pointer group select-none"
      onMouseEnter={() => {
        setIsHovered(true);
        interstellarAudio.playChirp(440, 0.08);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Gravitational Distort Nebula */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-1000 ${
          isHovered ? "scale-110 opacity-70" : "scale-100 opacity-40"
        } bg-gradient-to-tr from-amber-600/30 via-orange-500/10 to-indigo-600/20 blur-3xl`}
      />

      {/* Primary Vertical Gravitational Lensing Halo */}
      <div className="absolute w-[86%] h-[86%] rounded-full border border-amber-400/20 shadow-[0_0_80px_rgba(245,158,11,0.22)] animate-spin-extremely-slow pointer-events-none" />

      {/* Relativistic Accretion Halo */}
      <div className="absolute w-[78%] h-[78%] rounded-full bg-gradient-to-r from-amber-500/20 via-orange-400/30 to-amber-600/10 blur-md animate-pulse pointer-events-none" />

      {/* Tilted Accretion Disk (Upper Arch) */}
      <div
        className="absolute w-[94%] h-[28%] rounded-full border-t-4 border-b-2 border-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.6)] transform -rotate-[18deg] pointer-events-none transition-transform duration-700 group-hover:scale-105"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,191,36,0.35) 0%, rgba(245,158,11,0.15) 50%, transparent 80%)",
        }}
      />

      {/* Tilted Accretion Disk (Lower Reflection Horizon) */}
      <div
        className="absolute w-[88%] h-[24%] rounded-full border-b-2 border-amber-400/60 shadow-[0_0_30px_rgba(217,119,6,0.5)] transform rotate-[18deg] pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217,119,6,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Photon Sphere Outer Ring */}
      <div className="absolute w-[56%] h-[56%] rounded-full border-2 border-amber-200/80 shadow-[0_0_50px_rgba(254,240,138,0.8)] pointer-events-none" />

      {/* The Event Horizon (Pure Black Void) */}
      <div className="relative w-[48%] h-[48%] rounded-full bg-black shadow-[inset_0_0_35px_rgba(0,0,0,1)] border border-amber-500/40 flex items-center justify-center overflow-hidden z-10 transition-transform duration-500 group-hover:scale-[1.02]">
        {/* Subtle internal singularity reflection */}
        <div className="absolute inset-0 bg-radial-vignette opacity-90" />

        <div className="text-center z-20 px-3">
          <p className="text-[10px] tracking-[0.3em] font-mono text-amber-400 uppercase font-bold">
            Gargantua
          </p>
          <p className="text-[9px] tracking-[0.15em] font-mono text-zinc-400 mt-0.5">
            M = 100M M☉
          </p>
          <div className="w-8 h-[1px] bg-amber-400/50 mx-auto my-1" />
          <span className="text-[8px] font-mono text-zinc-500 block">
            SINGULARITY
          </span>
        </div>
      </div>

      {/* Orbiting Telemetry Coordinate Markers */}
      <div className="absolute top-2 right-4 font-mono text-[9px] text-amber-300/70 border border-amber-500/20 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none">
        θ = 85.3° // RELATIVISTIC BEAM
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-sky-300/70 border border-sky-500/20 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none">
        t_dilation = 61,320x
      </div>
    </div>
  );
}
