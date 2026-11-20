"use client";

import {
  academicAcademy,
  missionAccolades,
  coreCoursework,
} from "@/lib/interstellar-data";

export default function AcademyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Sector Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full">
          SECTOR 05 // ACADEMY &amp; ACCOLADES
        </span>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold text-white mt-3">
          Academic Foundations &amp; Honors
        </h1>
        <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
          Rigorous engineering foundations from SRMIST (CGPA: 9.70 / 10), hackathon podium
          finishes, cloud certifications, and deep computer science core coursework.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Academic History & Coursework */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-2">
            ACADEMIC INSTITUTIONS
          </h2>

          <div className="space-y-4">
            {academicAcademy.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-950/85 border border-white/10 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-mono font-bold text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                    {edu.score}
                  </span>
                </div>

                <p className="text-xs font-mono text-zinc-300 mt-1.5">
                  {edu.degree} {edu.specialization && `• ${edu.specialization}`}
                </p>
                <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                  {edu.location} &bull; {edu.period}
                </p>

                <ul className="mt-3 space-y-1">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5 select-none">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Coursework Badges */}
          <div className="p-6 rounded-2xl bg-zinc-950/85 border border-white/10 backdrop-blur-md">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Core Computer Science Disciplines
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreCoursework.map((course, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Accolades & Certifications */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-2">
            HONORS &amp; CERTIFICATIONS
          </h2>

          <div className="space-y-3.5">
            {missionAccolades.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950/85 border border-white/10 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-md flex items-start gap-3.5"
              >
                <span className="text-amber-400 font-mono text-xl mt-0.5">★</span>
                <div>
                  <h3 className="text-sm sm:text-base font-mono font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-sans leading-relaxed">
                    {item.detail}
                  </p>
                  <span className="text-[10px] font-mono text-sky-400 uppercase mt-2 inline-block px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
