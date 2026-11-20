"use client";

import { useEffect } from "react";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-amber-500/40 shadow-[0_0_80px_rgba(245,158,11,0.2)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            interstellarAudio.playChirp(400, 0.05);
            onClose();
          }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Orbit Sector Eyebrow */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
            {project.orbitSector} • {project.planet}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">
          {project.title}
        </h2>
        <p className="text-sm font-mono text-zinc-400 mb-6">{project.subtitle}</p>

        {/* Status / Awards */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
            STATUS: {project.status}
          </span>
          {project.awardBadge && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold">
              🏆 {project.awardBadge}
            </span>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center"
            >
              <div className="text-lg font-mono font-bold text-amber-400">{m.value}</div>
              <div className="text-[11px] font-mono text-zinc-400 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Mission Overview
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            {project.summary}
          </p>
        </div>

        {/* Key Technical Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Key Architecture & Achievements
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-amber-400 mt-1 select-none">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Systems & Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => interstellarAudio.playChirp(600, 0.05)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)]"
          >
            <span>GitHub Repository</span>
            <span>↗</span>
          </a>

          <button
            onClick={() => {
              interstellarAudio.playChirp(400, 0.05);
              onClose();
            }}
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            Close Telemetry Window
          </button>
        </div>
      </div>
    </div>
  );
}
