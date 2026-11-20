"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import StarfieldCanvas from "@/components/starfield-canvas";
import { interstellarAudio } from "@/lib/interstellar-audio";
import {
  interstellarProfile,
  navigationSectors,
  interstellarQuotes,
} from "@/lib/interstellar-data";

export default function InterstellarShell({ children }) {
  const pathname = usePathname();
  const [isWarpSpeed, setIsWarpSpeed] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [missionClock, setMissionClock] = useState("00:00:00");

  // Rotating quote
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % interstellarQuotes.length);
    }, 12000);
    return () => clearInterval(quoteInterval);
  }, []);

  // Live mission clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setMissionClock(
        `${String(now.getUTCHours()).padStart(2, "0")}:${String(
          now.getUTCMinutes()
        ).padStart(2, "0")}:${String(now.getUTCSeconds()).padStart(2, "0")} UTC`
      );
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  // Audio chirp on route navigation
  useEffect(() => {
    interstellarAudio.playChirp(680, 0.04);
  }, [pathname]);

  const handleToggleAudio = () => {
    const active = interstellarAudio.toggleMute();
    setIsAudioActive(active);
  };

  const handleToggleWarp = () => {
    interstellarAudio.playWarpSweep();
    setIsWarpSpeed((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 font-sans selection:bg-amber-400 selection:text-black overflow-x-hidden">
      {/* Persistent 3D Warp Starfield Canvas */}
      <StarfieldCanvas isWarpSpeed={isWarpSpeed} onToggleWarp={handleToggleWarp} />

      {/* Persistent Flight HUD Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-zinc-950/85 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Callsign Link */}
          <Link
            href="/"
            onClick={() => interstellarAudio.playChirp(520, 0.04)}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full border border-amber-400/50 p-0.5 flex items-center justify-center bg-black/60 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-white group-hover:text-amber-400 transition-colors uppercase block">
                {interstellarProfile.name.split(" ")[0]} &bull; ENDEAVOUR
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                {interstellarProfile.coordinates.split("//")[0]}
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Sector Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navigationSectors.map((sector) => {
              const isActive =
                sector.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(sector.path);

              return (
                <Link
                  key={sector.id}
                  href={sector.path}
                  onClick={() => interstellarAudio.playChirp(540, 0.03)}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer relative ${
                    isActive
                      ? "bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className="text-[10px] text-zinc-500 mr-1.5">{sector.code}</span>
                  {sector.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Audio Toggle, Warp Trigger & Resume */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              className={`p-2 rounded-lg border font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                isAudioActive
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                  : "bg-white/5 text-zinc-400 border-white/10 hover:text-white hover:bg-white/10"
              }`}
              title={isAudioActive ? "Mute Cosmic Audio" : "Enable Cosmic Audio Hum"}
            >
              <span>{isAudioActive ? "🔊" : "🔇"}</span>
              <span className="hidden sm:inline text-[11px]">
                {isAudioActive ? "AUDIO ON" : "AUDIO OFF"}
              </span>
            </button>

            {/* Warp Speed Trigger */}
            <button
              onClick={handleToggleWarp}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs border transition-all cursor-pointer ${
                isWarpSpeed
                  ? "bg-amber-500 text-black font-bold border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.6)] animate-pulse"
                  : "bg-white/5 text-amber-400 border-amber-500/30 hover:bg-amber-500/15"
              }`}
            >
              <span>⚡</span>
              <span>{isWarpSpeed ? "DROP WARP" : "WARP SPEED"}</span>
            </button>

            {/* Resume Button */}
            <a
              href={interstellarProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => interstellarAudio.playChirp(700, 0.05)}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-1"
            >
              <span>RESUME</span>
              <span className="text-[10px]">↗</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 py-4 space-y-2 animate-fade-in">
            {navigationSectors.map((sector) => {
              const isActive =
                sector.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(sector.path);

              return (
                <Link
                  key={sector.id}
                  href={sector.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-mono text-xs flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                      : "text-zinc-300 hover:text-amber-400 hover:bg-white/5"
                  }`}
                >
                  <span>{sector.label}</span>
                  <span className="text-zinc-600 font-mono text-[10px]">
                    SECTOR {sector.code}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Cinematic Quote HUD Ticker */}
      <div className="relative z-20 pt-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center backdrop-blur-sm">
          <p className="text-xs sm:text-sm font-mono text-amber-200/90 italic">
            &ldquo;{interstellarQuotes[quoteIndex].quote}&rdquo;
          </p>
          <span className="text-[10px] font-mono text-amber-400/70 tracking-widest uppercase block mt-1">
            — {interstellarQuotes[quoteIndex].author}
          </span>
        </div>
      </div>

      {/* Main Page Body with Parallax Warp Transition */}
      <main
        key={pathname}
        className="relative z-10 pt-6 pb-24 min-h-[75vh] animate-page-warp"
      >
        {children}
      </main>

      {/* Persistent Spacecraft Telemetry Footer */}
      <footer className="relative z-20 border-t border-zinc-900 bg-black/90 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MISSION CLOCK: {missionClock}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-center">
            <span>COORDINATES: {interstellarProfile.coordinates}</span>
            <span className="text-zinc-700">|</span>
            <span>STATUS: {interstellarProfile.status}</span>
          </div>

          <div>
            <span>
              &copy; {new Date().getFullYear()} {interstellarProfile.name}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
