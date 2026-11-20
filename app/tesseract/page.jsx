"use client";

import { useState } from "react";
import { tesseractSkills } from "@/lib/interstellar-data";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function TesseractPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...tesseractSkills.map((c) => c.category)];
  const filteredSkills =
    selectedCategory === "All"
      ? tesseractSkills
      : tesseractSkills.filter((c) => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Sector Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono tracking-widest uppercase text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1 rounded-full">
          SECTOR 04 // 5-DIMENSIONAL TESSERACT
        </span>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold text-white mt-3">
          Quantum Skill Constellation
        </h1>
        <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
          Multi-dimensional software engineering competencies spanning distributed backends,
          high-performance algorithms, autonomous agentic frameworks, and ML pipelines.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              interstellarAudio.playChirp(540, 0.03);
              setSelectedCategory(cat);
            }}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-amber-500 text-black font-bold shadow-[0_0_25px_rgba(245,158,11,0.4)]"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((category) => (
          <div
            key={category.telemetryCode}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/85 border border-white/10 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-mono font-bold text-white">
                  {category.category}
                </h2>
                <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded">
                  {category.telemetryCode}
                </span>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                      <span className="text-zinc-100 font-semibold">{skill.name}</span>
                      <span className="text-zinc-400 text-[11px]">
                        {skill.descriptor}
                      </span>
                    </div>

                    {/* Reactor Power Meter */}
                    <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 via-amber-400 to-amber-300 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>REACTOR LEVEL: OPTIMAL</span>
              <span>100% OPERATIONAL</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
