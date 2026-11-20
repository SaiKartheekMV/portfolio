"use client";

import { flightTrajectory } from "@/lib/interstellar-data";

export default function TrajectoryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Sector Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3.5 py-1 rounded-full">
          SECTOR 03 // FLIGHT PATH &amp; EXPERIENCE
        </span>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold text-white mt-3">
          Orbital Flight Trajectory
        </h1>
        <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
          Production backend engineering, database query optimization, automated CI/CD
          pipelines, and architectural leadership across Web3 and developer communities.
        </p>
      </div>

      {/* Trajectory Timeline */}
      <div className="space-y-8 relative">
        {/* Orbital Trajectory Guide Line */}
        <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-sky-400 via-amber-400 to-purple-400 opacity-30 hidden sm:block" />

        {flightTrajectory.map((post, idx) => (
          <div
            key={idx}
            className="relative sm:pl-16 p-6 sm:p-8 rounded-2xl bg-zinc-950/85 border border-white/10 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
          >
            {/* Orbital Beacon Marker */}
            <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-black border-2 border-sky-400 hidden sm:flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                {post.timeframe}
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300">
                {post.badge}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-mono font-bold text-white">
              {post.role}{" "}
              <span className="text-zinc-400 font-normal text-base sm:text-lg">
                @ {post.organization}
              </span>
            </h2>

            <div className="inline-block px-3 py-1 rounded bg-black/60 border border-white/10 text-xs font-mono text-zinc-300 mt-2 mb-4">
              TELEMETRY: {post.telemetry}
            </div>

            <ul className="space-y-3 mt-2">
              {post.points.map((point, pIdx) => (
                <li
                  key={pIdx}
                  className="flex items-start gap-2.5 text-sm text-zinc-300 font-sans leading-relaxed"
                >
                  <span className="text-sky-400 mt-1 select-none font-mono">&bull;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
