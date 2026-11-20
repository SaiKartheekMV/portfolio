"use client";

import Link from "next/link";
import GargantuaVisual from "@/components/gargantua-visual";
import { interstellarProfile } from "@/lib/interstellar-data";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function OrbitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28">
      {/* Hero Singularity & Bridge */}
      <section className="min-h-[75vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Telemetry Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>SECTOR 01 // ORBITAL BRIDGE: {interstellarProfile.status}</span>
            </div>

            {/* Title & Callsign */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono leading-tight">
                Venkata Sai{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                  Kartheek
                </span>
              </h1>
              <p className="text-base sm:text-xl font-mono text-zinc-400 mt-2">
                Mulukutla &bull; AI Systems &amp; Distributed Backend Engineer
              </p>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-sans">
              {interstellarProfile.bio}
            </p>

            {/* Key Mission Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {interstellarProfile.missionMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-sm text-center transition-all hover:border-amber-500/40 hover:-translate-y-0.5"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-amber-400">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/missions"
                onClick={() => interstellarAudio.playChirp(600, 0.05)}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE MISSIONS</span>
                <span>&rarr;</span>
              </Link>

              <Link
                href="/telemetry"
                onClick={() => interstellarAudio.playChirp(520, 0.04)}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>FLIGHT COMPUTER &gt;_</span>
              </Link>

              <Link
                href="/uplink"
                onClick={() => interstellarAudio.playChirp(480, 0.04)}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>CONTACT UPLINK</span>
              </Link>
            </div>
          </div>

          {/* Hero Right: Gargantua Singularity Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <GargantuaVisual />
          </div>
        </div>
      </section>

      {/* Sector Quick Jump Dock (Interstellar Portal Cards) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            WARP PORTALS // FLIGHT SECTORS
          </span>
          <h2 className="text-xl sm:text-3xl font-mono font-bold text-white mt-2">
            Interstellar Mission Navigation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/missions"
            onClick={() => interstellarAudio.playChirp(560, 0.04)}
            className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-500/50 transition-all hover:-translate-y-1 group backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
              <span>SECTOR 02</span>
              <span>PLANETARY MISSIONS &rarr;</span>
            </div>
            <h3 className="text-lg font-mono font-bold text-white group-hover:text-amber-300 transition-colors">
              Autonomous Systems &amp; AI
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              SwiftPath AI (Multi-Agent), SecurePay (Fraud ML), and Pulmo-Track (Clinical NLP).
            </p>
          </Link>

          <Link
            href="/trajectory"
            onClick={() => interstellarAudio.playChirp(560, 0.04)}
            className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-sky-500/50 transition-all hover:-translate-y-1 group backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-2">
              <span>SECTOR 03</span>
              <span>FLIGHT TRAJECTORY &rarr;</span>
            </div>
            <h3 className="text-lg font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
              Experience &amp; Leadership
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              Backend Developer Intern, Blockchain Club Tech Lead, and ACM-W mentorship.
            </p>
          </Link>

          <Link
            href="/tesseract"
            onClick={() => interstellarAudio.playChirp(560, 0.04)}
            className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-1 group backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-2">
              <span>SECTOR 04</span>
              <span>5D TESSERACT &rarr;</span>
            </div>
            <h3 className="text-lg font-mono font-bold text-white group-hover:text-purple-300 transition-colors">
              Technical Skill Matrix
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              C++, Python, PyTorch, Transformers, FastAPI, Docker, and distributed architectures.
            </p>
          </Link>

          <Link
            href="/academy"
            onClick={() => interstellarAudio.playChirp(560, 0.04)}
            className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-1 group backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
              <span>SECTOR 05</span>
              <span>ACADEMY &amp; HONORS &rarr;</span>
            </div>
            <h3 className="text-lg font-mono font-bold text-white group-hover:text-emerald-300 transition-colors">
              Academic Foundations
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              SRMIST CGPA 9.70/10, TechKnow 1st Prize, Digithon 3rd Prize, and Cloud certs.
            </p>
          </Link>

          <Link
            href="/telemetry"
            onClick={() => interstellarAudio.playChirp(560, 0.04)}
            className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-400/50 transition-all hover:-translate-y-1 group backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-2">
              <span>SECTOR 06</span>
              <span>TELEMETRY &amp; CLI &rarr;</span>
            </div>
            <h3 className="text-lg font-mono font-bold text-white group-hover:text-amber-200 transition-colors">
              Time Dilation &amp; Console
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              Interactive Miller&apos;s Planet dilation calculator and Endeavour spacecraft CLI.
            </p>
          </Link>

          <Link
            href="/uplink"
            onClick={() => interstellarAudio.playChirp(560, 0.04)}
            className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-rose-500/50 transition-all hover:-translate-y-1 group backdrop-blur-md"
          >
            <div className="flex items-center justify-between text-xs font-mono text-rose-400 mb-2">
              <span>SECTOR 07</span>
              <span>GRAVITATIONAL UPLINK &rarr;</span>
            </div>
            <h3 className="text-lg font-mono font-bold text-white group-hover:text-rose-300 transition-colors">
              Establish Contact
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              Direct email, telephone frequency, GitHub, LinkedIn, and LeetCode transmissions.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
