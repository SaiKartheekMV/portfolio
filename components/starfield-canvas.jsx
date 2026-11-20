"use client";

import { useEffect, useRef, useState } from "react";
import { interstellarAudio } from "@/lib/interstellar-audio";

export default function StarfieldCanvas({ isWarpSpeed, onToggleWarp }) {
  const canvasRef = useRef(null);
  const [fps, setFps] = useState(60);
  const [activeStarCount, setActiveStarCount] = useState(420);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive star count: fewer on mobile for silky smooth battery/framerate
    const count = width < 768 ? 220 : 420;
    setActiveStarCount(count);

    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        size: Math.random() * 1.5 + 0.5,
        color:
          Math.random() > 0.8
            ? "#f59e0b" // Gargantua gold
            : Math.random() > 0.6
            ? "#38bdf8" // Ice sky
            : Math.random() > 0.4
            ? "#c084fc" // Tesseract violet
            : "#ffffff",
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetSpeed = 1.2;
    let currentSpeed = 1.2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.05;
      mouseY = (e.clientY - rect.top - height / 2) * 0.05;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let lastFrameTime = performance.now();
    let frameCount = 0;
    let fpsTimer = 0;

    const render = (now) => {
      const delta = now - lastFrameTime;
      lastFrameTime = now;

      frameCount++;
      fpsTimer += delta;
      if (fpsTimer >= 1000) {
        setFps(Math.round((frameCount * 1000) / fpsTimer));
        frameCount = 0;
        fpsTimer = 0;
      }

      // Smooth acceleration to warp or cruise speed
      targetSpeed = isWarpSpeed ? 28 : 1.4;
      currentSpeed += (targetSpeed - currentSpeed) * 0.06;

      // Dark space background clearing with warp motion blur streak effect
      ctx.fillStyle = isWarpSpeed ? "rgba(3, 7, 18, 0.28)" : "rgba(3, 7, 18, 0.7)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.z -= currentSpeed;
        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        // Apply slight orbital drift from mouse
        star.x -= mouseX * 0.08;
        star.y -= mouseY * 0.08;

        const k = 250 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = Math.max(0.6, (1 - star.z / width) * star.size * (isWarpSpeed ? 1.8 : 1.2));
          const alpha = Math.min(1, (1 - star.z / width) * 1.4);

          ctx.beginPath();
          if (isWarpSpeed) {
            // Draw warp streaks
            const prevK = 250 / (star.z + currentSpeed * 2.5);
            const prevPx = star.x * prevK + cx;
            const prevPy = star.y * prevK + cy;

            ctx.moveTo(prevPx, prevPy);
            ctx.lineTo(px, py);
            ctx.strokeStyle = star.color;
            ctx.lineWidth = size * 1.2;
            ctx.stroke();
          } else {
            // Draw twinkling star points
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = alpha;
            ctx.fill();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isWarpSpeed]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle cosmic vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Floating Starfield Telemetry */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 text-[11px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-auto">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          WARP ENGINE: {isWarpSpeed ? "ENGAGED (HYPERSPACE)" : "CRUISE"}
        </span>
        <span className="text-zinc-600">|</span>
        <span>STARS: {activeStarCount}</span>
        <span className="text-zinc-600">|</span>
        <span>FPS: {fps}</span>
        <button
          onClick={() => {
            interstellarAudio.playWarpSweep();
            onToggleWarp();
          }}
          className="ml-2 text-[10px] font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 transition-all cursor-pointer"
        >
          {isWarpSpeed ? "DROP TO CRUISE" : "WARP SPEED"}
        </button>
      </div>
    </div>
  );
}
