"use client";

import { useEffect, useRef } from "react";

type Intensity = "low" | "medium";

interface FluidBackgroundProps {
  intensity?: Intensity;
  pause?: boolean;
}

const ORBS = [
  { x: 0.15, y: 0.25, r: 0.25, dx: 0.0004, dy: 0.0003, color: "rgba(255, 107, 107, 0.08)" },   // coral
  { x: 0.75, y: 0.2, r: 0.22, dx: -0.00035, dy: 0.00038, color: "rgba(78, 205, 196, 0.07)" },  // teal
  { x: 0.55, y: 0.7, r: 0.28, dx: 0.00025, dy: -0.0002, color: "rgba(255, 217, 61, 0.06)" },   // gold
  { x: 0.3, y: 0.65, r: 0.2, dx: -0.0003, dy: 0.00035, color: "rgba(195, 172, 208, 0.08)" },   // lavender
];

export function FluidBackground({ intensity = "low", pause = false }: FluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canAnimate = !pause && !prefersReducedMotion;
    const speedFactor = intensity === "medium" ? 1 : 0.6;

    let raf = 0;
    let width = 0;
    let height = 0;
    const blobs = ORBS.map((orb) => ({ ...orb }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * window.devicePixelRatio);
      canvas.height = Math.floor(height * window.devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Warm cream base gradient
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, "#FFF5EB");
      baseGradient.addColorStop(0.5, "#FFF8F0");
      baseGradient.addColorStop(1, "#FFF2E5");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      // Soft color orbs
      for (const blob of blobs) {
        const gradient = ctx.createRadialGradient(
          blob.x * width,
          blob.y * height,
          0,
          blob.x * width,
          blob.y * height,
          blob.r * Math.max(width, height),
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(255, 245, 235, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x * width, blob.y * height, blob.r * Math.max(width, height), 0, Math.PI * 2);
        ctx.fill();
      }

      if (!canAnimate) return;

      for (const blob of blobs) {
        blob.x += blob.dx * speedFactor;
        blob.y += blob.dy * speedFactor;
        if (blob.x < -0.2) blob.x = 1.2;
        if (blob.x > 1.2) blob.x = -0.2;
        if (blob.y < -0.2) blob.y = 1.2;
        if (blob.y > 1.2) blob.y = -0.2;
      }

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(raf);
      } else {
        draw();
      }
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [intensity, pause]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />;
}
