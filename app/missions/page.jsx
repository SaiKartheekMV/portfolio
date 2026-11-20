"use client";

import { useState } from "react";
import ProjectModal from "@/components/project-modal";
import { planetaryProjects } from "@/lib/interstellar-data";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function MissionsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Sector Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
          SECTOR 02 // PLANETARY EXPEDITIONS
        </span>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold text-white mt-3">
          Planetary Missions &amp; AI Systems
        </h1>
        <p className="text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
          Autonomous multi-agent architectures, deep anomaly detection models with sub-200ms
          latency, and clinical oncology NLP pipelines built for high resilience.
        </p>
      </div>

      {/* Planetary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {planetaryProjects.map((project) => (
          <div
            key={project.slug}
            onClick={() => {
              interstellarAudio.playChirp(650, 0.05);
              setSelectedProject(project);
            }}
            className="group relative rounded-2xl bg-zinc-950/85 border border-white/10 hover:border-amber-500/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_50px_rgba(245,158,11,0.2)] hover:-translate-y-1.5 cursor-pointer backdrop-blur-md"
          >
            {/* Ambient Background Accent Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/25 transition-all pointer-events-none" />

            <div>
              {/* Planet Tag & Award Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono tracking-wider text-amber-400 uppercase bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                  {project.planet}
                </span>
                {project.awardBadge && (
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2.5 py-0.5 rounded border border-purple-500/30 font-semibold">
                    🏆 Award Winner
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl font-mono font-bold text-white group-hover:text-amber-300 transition-colors">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-zinc-400 mt-1 mb-5">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                {project.summary}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-center"
                  >
                    <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 block">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Technical Highlights Preview */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Primary Capability:
                </span>
                <div className="text-xs text-zinc-300 flex items-start gap-2">
                  <span className="text-amber-400 select-none">&bull;</span>
                  <span>{project.highlights[0]}</span>
                </div>
              </div>
            </div>

            <div>
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/10">
                <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1.5">
                  <span>OPEN TELEMETRY DOSSIER</span>
                  <span>&rarr;</span>
                </span>
                <span className="text-zinc-500 text-[10px]">ESC TO CLOSE</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Project Telemetry Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
