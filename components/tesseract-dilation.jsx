"use client";

import { useEffect, useState } from "react";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function TesseractDilation() {
  const [earthSeconds, setEarthSeconds] = useState(0);
  const [sliderHours, setSliderHours] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setEarthSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 1 hour on Miller's planet = 7 Earth years (7 * 365.25 * 24 = 61,362 hours)
  const ratio = 61362;
  const equivalentEarthYears = (sliderHours * 7).toFixed(1);
  const equivalentEarthDays = Math.round(sliderHours * 7 * 365.25);
  const equivalentEarthHours = Math.round(sliderHours * ratio);

  // Real-time time elapsed on Miller's planet while on page
  const millersPlanetMicroseconds = (earthSeconds / ratio) * 3600;

  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-amber-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.08)] overflow-hidden">
      {/* Background Tesseract Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <h3 className="text-lg font-mono font-bold tracking-wider text-amber-300 uppercase">
              Relativistic Time Dilation Console
            </h3>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
            GRAVITATIONAL FIELD: GARGANTUA
          </span>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
          Near Gargantua’s massive event horizon, gravitational time dilation bends reality.{" "}
          <span className="text-amber-300 font-semibold">
            One hour on Miller’s Planet equals seven Earth years.
          </span>{" "}
          Explore the temporal dilation below:
        </p>

        {/* Real-time Session Clock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-black/60 border border-white/10">
            <span className="text-[11px] font-mono uppercase text-zinc-400">
              Earth Time on this Transmission
            </span>
            <div className="text-2xl font-mono font-bold text-white mt-1">
              {earthSeconds}s
              <span className="text-xs text-zinc-400 font-normal ml-2">
                ({Math.floor(earthSeconds / 60)}m {earthSeconds % 60}s)
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/60 border border-amber-500/20">
            <span className="text-[11px] font-mono uppercase text-amber-400">
              Miller&apos;s Planet Equivalent
            </span>
            <div className="text-2xl font-mono font-bold text-amber-400 mt-1">
              {millersPlanetMicroseconds < 1
                ? `${(millersPlanetMicroseconds * 1000).toFixed(2)} ms`
                : `${millersPlanetMicroseconds.toFixed(3)} s`}
              <span className="text-xs text-zinc-400 font-normal ml-2">
                (Time almost standing still)
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="p-5 rounded-xl bg-black/40 border border-white/10">
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Time spent on Miller’s Planet:
            </label>
            <span className="text-sm font-mono font-bold text-amber-400">
              {sliderHours} Hour{sliderHours > 1 ? "s" : ""}
            </span>
          </div>

          <input
            type="range"
            min="0.5"
            max="10"
            step="0.5"
            value={sliderHours}
            onChange={(e) => {
              setSliderHours(parseFloat(e.target.value));
              interstellarAudio.playChirp(350 + parseFloat(e.target.value) * 60, 0.03);
            }}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="text-zinc-400">Equivalent on Earth:</span>{" "}
              <span className="text-sky-400 font-bold text-base">
                {equivalentEarthYears} Years
              </span>
            </div>
            <div>
              <span className="text-zinc-400">Earth Days:</span>{" "}
              <span className="text-emerald-400 font-bold">
                {equivalentEarthDays.toLocaleString()} Days
              </span>
            </div>
            <div>
              <span className="text-zinc-400">Earth Hours:</span>{" "}
              <span className="text-amber-400 font-bold">
                {equivalentEarthHours.toLocaleString()} Hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
