"use client";

import { useState } from "react";
import { interstellarProfile } from "@/lib/interstellar-data";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function UplinkPage() {
  const [copiedItem, setCopiedItem] = useState(null);
  const [morseInput, setMorseInput] = useState("");
  const [transmitted, setTransmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    interstellarAudio.playChirp(880, 0.08);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleTransmitMorse = (e) => {
    e.preventDefault();
    if (!morseInput.trim()) return;

    interstellarAudio.playWarpSweep();
    setTransmitted(true);
    setTimeout(() => {
      setTransmitted(false);
      setMorseInput("");
    }, 3500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Sector Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
          SECTOR 07 // GRAVITATIONAL UPLINK
        </span>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold text-white mt-3">
          Establish Orbital Contact
        </h1>
        <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
          Open for full-time engineering roles in AI Systems, Backend Infrastructure, Machine
          Learning, and Blockchain platforms. Let&apos;s build resilient systems together.
        </p>
      </div>

      {/* Main Transmission Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-950/90 to-black/90 border border-amber-500/30 backdrop-blur-xl shadow-[0_0_80px_rgba(245,158,11,0.15)] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Quick Copy Frequency Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {/* Email Frequency */}
            <div
              onClick={() => copyToClipboard(interstellarProfile.email, "email")}
              className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block mb-1">
                  Primary Frequency (Email)
                </span>
                <span className="text-zinc-200 group-hover:text-amber-400 font-semibold break-all text-sm">
                  {interstellarProfile.email}
                </span>
              </div>
              <span className="text-xs text-amber-400 font-bold ml-2">
                {copiedItem === "email" ? "COPIED!" : "COPY"}
              </span>
            </div>

            {/* Phone Frequency */}
            <div
              onClick={() => copyToClipboard(interstellarProfile.phone, "phone")}
              className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] text-zinc-500 uppercase block mb-1">
                  Telemetry Line (Phone)
                </span>
                <span className="text-zinc-200 group-hover:text-amber-400 font-semibold text-sm">
                  {interstellarProfile.phone}
                </span>
              </div>
              <span className="text-xs text-amber-400 font-bold ml-2">
                {copiedItem === "phone" ? "COPIED!" : "COPY"}
              </span>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={interstellarProfile.links.email}
              onClick={() => interstellarAudio.playChirp(700, 0.05)}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)]"
            >
              Transmit Email &rarr;
            </a>

            <a
              href={interstellarProfile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => interstellarAudio.playChirp(600, 0.04)}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono text-xs uppercase transition-all"
            >
              GitHub Profile ↗
            </a>

            <a
              href={interstellarProfile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => interstellarAudio.playChirp(600, 0.04)}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono text-xs uppercase transition-all"
            >
              LinkedIn Uplink ↗
            </a>

            <a
              href={interstellarProfile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => interstellarAudio.playChirp(600, 0.04)}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono text-xs uppercase transition-all"
            >
              LeetCode Archive ↗
            </a>
          </div>

          {/* Gravitational Morse Encoder Simulation */}
          <div className="p-6 rounded-2xl bg-black/50 border border-white/10 mt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                Gravitational Morse Transmitter // Tesseract Beacon
              </h2>
            </div>
            <p className="text-xs text-zinc-400 mb-4 font-sans">
              Transmit a pulse into the gravitational horizon (like Cooper transmitting coordinates through the watch):
            </p>

            <form onSubmit={handleTransmitMorse} className="flex gap-2">
              <input
                type="text"
                value={morseInput}
                onChange={(e) => setMorseInput(e.target.value)}
                placeholder="Enter signal e.g. 'STAY', 'LET'S BUILD', 'RECRUITER PING'..."
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder:text-zinc-600 outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase transition-all cursor-pointer"
              >
                PULSE
              </button>
            </form>

            {transmitted && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs animate-fade-in flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>
                  GRAVITATIONAL WAVE TRANSMITTED THROUGH GARGANTUA HORIZON &bull; SIGNAL RECEIVED.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
