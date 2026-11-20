"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import StarfieldCanvas from "@/components/starfield-canvas";
import GargantuaVisual from "@/components/gargantua-visual";
import TesseractDilation from "@/components/tesseract-dilation";
import InterstellarTerminal from "@/components/interstellar-terminal";
import ProjectModal from "@/components/project-modal";
import { interstellarAudio } from "@/lib/interstellar-audio";
import {
  interstellarProfile,
  planetaryProjects,
  flightTrajectory,
  tesseractSkills,
  academicAcademy,
  missionAccolades,
  coreCoursework,
  navigationSectors,
  interstellarQuotes,
} from "@/lib/interstellar-data";

export default function InterstellarPortfolio() {
  const [isWarpSpeed, setIsWarpSpeed] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("All");
  const [activeSector, setActiveSector] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Quote rotation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % interstellarQuotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleAudio = () => {
    const active = interstellarAudio.toggleMute();
    setIsAudioActive(active);
  };

  const handleToggleWarp = () => {
    setIsWarpSpeed((prev) => !prev);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    interstellarAudio.playChirp(880, 0.08);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const scrollToSector = (id) => {
    interstellarAudio.playChirp(520, 0.04);
    setActiveSector(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredSkills =
    selectedSkillCategory === "All"
      ? tesseractSkills
      : tesseractSkills.filter((c) => c.category === selectedSkillCategory);

  return (
    <div className="relative min-h-screen bg-[#030712] text-zinc-100 font-sans selection:bg-amber-400 selection:text-black overflow-x-hidden">
      {/* 3D Dynamic Starfield Engine */}
      <StarfieldCanvas isWarpSpeed={isWarpSpeed} onToggleWarp={handleToggleWarp} />

      {/* Persistent Flight HUD Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-40 bg-zinc-950/85 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Callsign */}
          <button
            onClick={() => scrollToSector("hero")}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full border border-amber-400/50 p-0.5 flex items-center justify-center bg-black/60 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-white group-hover:text-amber-400 transition-colors uppercase block">
                {interstellarProfile.name.split(" ")[0]} // ENDEAVOUR
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                {interstellarProfile.coordinates.split("//")[0]}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navigationSectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => scrollToSector(sector.id)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeSector === sector.id
                    ? "bg-amber-500/15 text-amber-300 border border-amber-500/40"
                    : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <span className="text-[10px] text-zinc-500 mr-1.5">{sector.code}</span>
                {sector.label}
              </button>
            ))}
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
              onClick={() => {
                interstellarAudio.playWarpSweep();
                handleToggleWarp();
              }}
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
          <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 py-4 space-y-2">
            {navigationSectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => scrollToSector(sector.id)}
                className="w-full text-left px-3 py-2 rounded-lg font-mono text-xs text-zinc-300 hover:text-amber-400 hover:bg-white/5 flex items-center justify-between"
              >
                <span>{sector.label}</span>
                <span className="text-zinc-600 font-mono text-[10px]">
                  SECTOR {sector.code}
                </span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 pt-20 sm:pt-24 space-y-28 sm:space-y-36 pb-24">
        {/* ========================================================================
            HERO SECTION: Gargantua Singularity & Orbital Bridge
           ======================================================================== */}
        <section
          id="hero"
          className="min-h-[85vh] max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center relative pt-4"
        >
          {/* Quote Banner */}
          <div className="w-full max-w-3xl mx-auto mb-8 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center backdrop-blur-sm animate-fade-in">
            <p className="text-xs sm:text-sm font-mono text-amber-200/90 italic">
              "{interstellarQuotes[quoteIndex].quote}"
            </p>
            <span className="text-[10px] font-mono text-amber-400/70 tracking-widest uppercase block mt-1">
              — {interstellarQuotes[quoteIndex].author}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Telemetry Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>MISSION STATUS: {interstellarProfile.status}</span>
              </div>

              {/* Title & Callsign */}
              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono leading-tight">
                  Venkata Sai{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                    Kartheek
                  </span>
                </h1>
                <p className="text-sm sm:text-lg font-mono text-zinc-400 mt-2">
                  Mulukutla // AI & Systems Engineer
                </p>
              </div>

              {/* Bio Summary */}
              <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-sans">
                {interstellarProfile.bio}
              </p>

              {/* Key Mission Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {interstellarProfile.missionMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-sm text-center"
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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => scrollToSector("projects")}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE MISSIONS</span>
                  <span>↓</span>
                </button>

                <button
                  onClick={() => scrollToSector("terminal")}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>LAUNCH TELEMETRY CLI</span>
                  <span>&gt;_</span>
                </button>

                <a
                  href={interstellarProfile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={interstellarProfile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white transition-colors"
                  title="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hero Right: Gargantua Singularity Visual Component */}
            <div className="lg:col-span-5 flex justify-center">
              <GargantuaVisual />
            </div>
          </div>
        </section>

        {/* ========================================================================
            TIME DILATION SECTION: Miller's Planet Relativistic Calculator
           ======================================================================== */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <TesseractDilation />
        </section>

        {/* ========================================================================
            PLANETARY MISSIONS (PROJECTS)
           ======================================================================== */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              SECTOR 02 // EXPEDITION LOGS
            </span>
            <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white mt-3">
              Planetary Missions & Systems
            </h2>
            <p className="text-sm text-zinc-400 mt-2 font-sans">
              Autonomous agentic architectures, deep ML anomaly engines, and clinical NLP
              pipelines built for resilience in high-stakes environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planetaryProjects.map((project) => (
              <div
                key={project.slug}
                onClick={() => {
                  interstellarAudio.playChirp(650, 0.05);
                  setSelectedProject(project);
                }}
                className="group relative rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] hover:-translate-y-1 cursor-pointer backdrop-blur-md"
              >
                {/* Accent glow corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none"
                />

                <div>
                  {/* Planet & Orbit Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono tracking-wider text-amber-400 uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      {project.planet}
                    </span>
                    {project.awardBadge && (
                      <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30 font-semibold">
                        🏆 Award Winner
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-xl font-mono font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans line-clamp-3 mb-4">
                    {project.summary}
                  </p>

                  {/* Metric Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-black/50 border border-white/5 text-center"
                      >
                        <span className="text-xs font-mono font-bold text-amber-400 block">
                          {m.value}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/10">
                    <span className="text-amber-400 group-hover:underline">
                      Telemetry Dossier
                    </span>
                    <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================
            FLIGHT TRAJECTORY (EXPERIENCE & LEADERSHIP)
           ======================================================================== */}
        <section
          id="experience"
          className="max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full">
              SECTOR 03 // ORBITAL TRAJECTORY
            </span>
            <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white mt-3">
              Flight Trajectory & Engineering Posts
            </h2>
            <p className="text-sm text-zinc-400 mt-2 font-sans">
              Battle-tested in high-throughput backend APIs, database optimization, and
              Web3/blockchain architecture leadership.
            </p>
          </div>

          <div className="space-y-6 relative">
            {/* Trajectory Guide Line */}
            <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-amber-400 via-sky-400 to-purple-400 opacity-30 hidden sm:block" />

            {flightTrajectory.map((post, idx) => (
              <div
                key={idx}
                className="relative sm:pl-16 p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-500/40 transition-all backdrop-blur-md"
              >
                {/* Node beacon on the line */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-black border-2 border-amber-400 hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                    {post.timeframe}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300">
                    {post.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
                  {post.role}{" "}
                  <span className="text-zinc-400 font-normal text-base sm:text-lg">
                    @ {post.organization}
                  </span>
                </h3>

                <p className="text-xs font-mono text-zinc-400 mt-1 mb-4">
                  TELEMETRY: {post.telemetry}
                </p>

                <ul className="space-y-2 mt-4">
                  {post.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2 text-sm text-zinc-300 font-sans"
                    >
                      <span className="text-amber-400 mt-1 select-none font-mono">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================
            TESSERACT SKILL CONSTELLATION
           ======================================================================== */}
        <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-mono tracking-widest uppercase text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
              SECTOR 04 // 5-DIMENSIONAL TESSERACT
            </span>
            <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white mt-3">
              Technical Skill Matrix
            </h2>
            <p className="text-sm text-zinc-400 mt-2 font-sans">
              High-dimensional engineering competencies across AI algorithms, system design,
              distributed backends, and cloud infrastructure.
            </p>
          </div>

          {/* Skill Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {["All", ...tesseractSkills.map((c) => c.category)].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  interstellarAudio.playChirp(540, 0.03);
                  setSelectedSkillCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  selectedSkillCategory === cat
                    ? "bg-amber-500 text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((category) => (
              <div
                key={category.telemetryCode}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-500/30 transition-all backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-mono font-bold text-white">
                    {category.category}
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
                    {category.telemetryCode}
                  </span>
                </div>

                <div className="space-y-3.5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center text-xs font-mono mb-1">
                        <span className="text-zinc-200 font-semibold">{skill.name}</span>
                        <span className="text-zinc-400 text-[11px]">
                          {skill.descriptor}
                        </span>
                      </div>
                      {/* Reactor Power Bar */}
                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================
            ACADEMY, HONORS & CERTIFICATIONS
           ======================================================================== */}
        <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
              SECTOR 05 // ACADEMY & ACCOLADES
            </span>
            <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white mt-3">
              Academic Foundations & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education History */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-2">
                // ACADEMIC INSTITUTIONS
              </h3>
              {academicAcademy.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-amber-500/30 transition-all backdrop-blur-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-mono font-bold text-white">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-zinc-300 mt-1">
                    {edu.degree} {edu.specialization && `• ${edu.specialization}`}
                  </p>
                  <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                    {edu.location} // {edu.period}
                  </p>
                </div>
              ))}

              {/* Core Coursework Badges */}
              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Core Computer Science Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {coreCoursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Honors & Accolades */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 mb-2">
                // HONORS & CERTIFIED CREDENTIALS
              </h3>
              <div className="space-y-3">
                {missionAccolades.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-sky-500/30 transition-all backdrop-blur-md flex items-start gap-3"
                  >
                    <span className="text-amber-400 font-mono text-lg mt-0.5">★</span>
                    <div>
                      <h5 className="text-sm font-mono font-bold text-white">
                        {item.title}
                      </h5>
                      <p className="text-xs text-zinc-400 mt-0.5 font-sans leading-relaxed">
                        {item.detail}
                      </p>
                      <span className="text-[10px] font-mono text-sky-400 uppercase mt-1 inline-block">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================
            SPACECRAFT COMMAND TERMINAL (CLI)
           ======================================================================== */}
        <section id="terminal" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              SECTOR 06 // INTERACTIVE SPACECRAFT CONSOLE
            </span>
            <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white mt-3">
              Mission Telemetry Console
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Direct terminal channel to probe systems, trigger warp engines, or print the
              dossier.
            </p>
          </div>

          <InterstellarTerminal onTriggerWarp={handleToggleWarp} />
        </section>

        {/* ========================================================================
            GRAVITATIONAL UPLINK / CONTACT SECTION
           ======================================================================== */}
        <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-950/90 to-black/90 border border-amber-500/30 backdrop-blur-xl shadow-[0_0_80px_rgba(245,158,11,0.15)] text-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-4">
              SECTOR 07 // TRANSMISSION UPLINK
            </span>

            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-3">
              Establish Orbital Contact
            </h2>

            <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed font-sans mb-8">
              Open for full-time software engineering, AI systems, backend, and platform
              roles. Let’s build the next generation of resilient systems together.
            </p>

            {/* Direct Contact Action Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left font-mono text-xs">
              {/* Email */}
              <div
                onClick={() => copyToClipboard(interstellarProfile.email, "email")}
                className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block">
                    Direct Frequency (Email)
                  </span>
                  <span className="text-zinc-200 group-hover:text-amber-400 font-semibold break-all">
                    {interstellarProfile.email}
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 ml-2">
                  {copiedItem === "email" ? "COPIED!" : "COPY"}
                </span>
              </div>

              {/* Phone */}
              <div
                onClick={() => copyToClipboard(interstellarProfile.phone, "phone")}
                className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block">
                    Telemetry Line (Phone)
                  </span>
                  <span className="text-zinc-200 group-hover:text-amber-400 font-semibold">
                    {interstellarProfile.phone}
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 ml-2">
                  {copiedItem === "phone" ? "COPIED!" : "COPY"}
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={interstellarProfile.links.email}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)]"
              >
                Transmit Email
              </a>

              <a
                href={interstellarProfile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono text-xs uppercase transition-all"
              >
                GitHub Profile ↗
              </a>

              <a
                href={interstellarProfile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono text-xs uppercase transition-all"
              >
                LinkedIn Uplink ↗
              </a>

              <a
                href={interstellarProfile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono text-xs uppercase transition-all"
              >
                LeetCode Profile ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Persistent Flight Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-black/90 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>INTERSTELLAR V5.0 // NEXT.JS STATIC PRODUCTION ENGINE</span>
          </div>

          <div>
            <span>COORDINATES: {interstellarProfile.coordinates}</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} {interstellarProfile.name}</span>
          </div>
        </div>
      </footer>

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
