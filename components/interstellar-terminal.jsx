"use client";

import { useEffect, useRef, useState } from "react";
import { interstellarAudio } from "@/lib/interstellar-audio";
import {
  interstellarProfile,
  planetaryProjects,
  interstellarQuotes,
  tesseractSkills,
  flightTrajectory,
} from "@/lib/interstellar-data";

export default function InterstellarTerminal({ onTriggerWarp }) {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "INTERSTELLAR FLIGHT COMPUTER [ENDEAVOUR OS v5.4.1]\nType 'help' to transmit commands or query mission telemetry.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    interstellarAudio.playChirp(720, 0.04);
    const newHistory = [...history, { type: "user", text: `$ ${inputVal}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE TRANSMISSIONS:
  whoami     - Commander identity & mission credentials
  projects   - Planetary expedition logs (SwiftPath AI, SecurePay, Pulmo-Track)
  skills     - Tesseract skill matrix & frameworks
  trajectory - Flight path, internships & technical leadership
  quotes     - Relativistic quotes from Gargantua's horizon
  resume     - Download primary mission dossier (PDF)
  contact    - Establish communication uplink
  warp       - Engage hyperspace warp engine
  clear      - Purge terminal telemetry buffer`,
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: `COMMANDER: ${interstellarProfile.name} (${interstellarProfile.callsign})
STATUS: ${interstellarProfile.status}
LOCATION: ${interstellarProfile.location}
SPECIALIZATION: SRMIST B.Tech CSE (Blockchain) | CGPA: 9.70 / 10
MISSION FOCUS: Multi-Agent AI Systems, Sub-200ms ML Anomaly Detection, Distributed Backend Architecture`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: planetaryProjects
            .map(
              (p, i) =>
                `[${i + 1}] ${p.title} (${p.planet})
     ${p.subtitle}
     STACK: ${p.techStack.join(", ")}
     STATUS: ${p.status}`
            )
            .join("\n\n"),
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: tesseractSkills
            .map(
              (cat) =>
                `• ${cat.category} [${cat.telemetryCode}]:\n  ${cat.skills
                  .map((s) => `${s.name} (${s.level}%)`)
                  .join(" | ")}`
            )
            .join("\n\n"),
        });
        break;

      case "trajectory":
      case "exp":
      case "experience":
        newHistory.push({
          type: "output",
          text: flightTrajectory
            .map(
              (t) =>
                `[${t.timeframe}] ${t.role} @ ${t.organization}
     ${t.telemetry}
     • ${t.points[0]}`
            )
            .join("\n\n"),
        });
        break;

      case "quotes":
      case "quote": {
        const randomQuote =
          interstellarQuotes[Math.floor(Math.random() * interstellarQuotes.length)];
        newHistory.push({
          type: "quote",
          text: `"${randomQuote.quote}"\n— ${randomQuote.author}`,
        });
        break;
      }

      case "resume":
        newHistory.push({
          type: "output",
          text: `TRANSMITTING RESUME DOSSIER...\nOpening ${interstellarProfile.resumeUrl}`,
        });
        window.open(interstellarProfile.resumeUrl, "_blank");
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `DIRECT COMMUNICATION CHANNELS:
  Email:    ${interstellarProfile.email}
  Phone:    ${interstellarProfile.phone}
  GitHub:   ${interstellarProfile.links.github}
  LinkedIn: ${interstellarProfile.links.linkedin}
  LeetCode: ${interstellarProfile.links.leetcode}`,
        });
        break;

      case "warp":
        newHistory.push({
          type: "system",
          text: "WARP ENGINE ENGAGED: ACCELERATING PAST SPEED OF LIGHT...",
        });
        interstellarAudio.playWarpSweep();
        onTriggerWarp?.();
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `COMMAND NOT RECOGNIZED: '${cmd}'. Type 'help' for transmission protocol list.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <div className="rounded-2xl bg-black/90 border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400" />
          <span className="text-zinc-400 font-semibold ml-2 text-xs tracking-wider">
            ENDEAVOUR // MISSION COMMAND CONSOLE
          </span>
        </div>
        <span className="text-[10px] text-zinc-500 hidden sm:inline">
          SESSION ID: GARGANTUA-7A
        </span>
      </div>

      {/* Terminal Content Buffer */}
      <div className="p-4 sm:p-6 max-h-[360px] overflow-y-auto space-y-3 font-mono leading-relaxed scrollbar-thin">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap ${
              item.type === "user"
                ? "text-amber-400 font-bold"
                : item.type === "system"
                ? "text-sky-400"
                : item.type === "quote"
                ? "text-amber-200 italic border-l-2 border-amber-500/50 pl-3 py-1"
                : item.type === "error"
                ? "text-red-400"
                : "text-zinc-300"
            }`}
          >
            {item.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Prompt Input */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950/80 border-t border-zinc-800">
        <span className="text-amber-400 font-bold select-none">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="Type 'help', 'projects', 'warp', 'resume'..."
          className="w-full bg-transparent text-white font-mono text-xs sm:text-sm outline-none placeholder:text-zinc-600"
        />
        <button
          onClick={() => {
            const fakeEvent = { key: "Enter" };
            handleCommand(fakeEvent);
          }}
          className="text-[11px] font-mono text-zinc-400 hover:text-amber-400 px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
        >
          EXEC
        </button>
      </div>
    </div>
  );
}
