"use client";

import InterstellarTerminal from "@/components/interstellar-terminal";
import TesseractDilation from "@/components/tesseract-dilation";

export default function TelemetryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Sector Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
          SECTOR 06 // MISSION CONTROL &amp; TELEMETRY
        </span>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold text-white mt-3">
          Spacecraft Telemetry Console
        </h1>
        <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
          Interactive flight computer and relativistic time dilation simulator modeled after
          Gargantua&apos;s gravitational horizon. Type commands or calculate temporal shifts.
        </p>
      </div>

      {/* Relativistic Time Dilation Console */}
      <TesseractDilation />

      {/* Embedded CLI Terminal */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
          <span>ENDEAVOUR // INTERACTIVE COMMAND CLI</span>
          <span className="text-amber-400">TYPE &apos;HELP&apos; FOR PROTOCOLS</span>
        </div>
        <InterstellarTerminal />
      </div>
    </div>
  );
}
