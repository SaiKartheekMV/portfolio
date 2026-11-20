// Synthesizes sci-fi Interstellar sound effects using standard Web Audio API
// 100% zero external audio asset dependencies - ultra-fast, offline-capable, and reliable

class InterstellarAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.ambientOsc = null;
    this.ambientGain = null;
  }

  init() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbient();
    } else {
      this.startAmbient();
      this.playChirp(600, 0.08);
    }
    return !this.isMuted;
  }

  playChirp(freq = 800, duration = 0.05, type = "sine") {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + duration);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Audio playback silently ignored if blocked by browser policy
    }
  }

  playWarpSweep() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      const now = this.ctx.currentTime;

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 1.2);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 1.2);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.5);
    } catch {
      // Ignored
    }
  }

  startAmbient() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || this.ambientOsc) return;

    try {
      const now = this.ctx.currentTime;
      this.ambientOsc = this.ctx.createOscillator();
      this.ambientGain = this.ctx.createGain();

      this.ambientOsc.type = "sine";
      this.ambientOsc.frequency.setValueAtTime(55, now); // Low A hum (55Hz Gargantua drone)

      this.ambientGain.gain.setValueAtTime(0.001, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.015, now + 2);

      this.ambientOsc.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc.start(now);
    } catch {
      // Ignored
    }
  }

  stopAmbient() {
    if (this.ambientGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 0.5);
        setTimeout(() => {
          if (this.ambientOsc) {
            this.ambientOsc.stop();
            this.ambientOsc.disconnect();
            this.ambientOsc = null;
          }
        }, 600);
      } catch {
        this.ambientOsc = null;
      }
    }
  }
}

export const interstellarAudio = new InterstellarAudioEngine();
