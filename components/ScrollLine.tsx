"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const ITEMS = [
  "Stripe",
  "PostgreSQL",
  "Redis",
  "BullMQ",
  "AWS ECS",
  "ECR",
  "Tool calling",
  "RAG",
  "Vector databases",
  "SSIM",
] as const;

export function ScrollLine() {
  const track = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = track.current;
    if (!el) return;

    let x = 0;
    let boost = 0;
    let last = performance.now();
    let lastY = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      const y = window.scrollY;
      boost = Math.min(Math.abs(y - lastY) * 12, 420);
      lastY = y;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      boost *= Math.exp(-dt / 0.4);
      const width = el.scrollWidth / 2;
      x -= (42 + boost) * dt;
      if (width > 0) {
        while (x <= -width) x += width;
      }
      el.style.transform = `translate3d(${x}px, 0, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [prefersReducedMotion]);

  const row = (copy: number) => (
    <ul
      aria-hidden={copy === 1 || prefersReducedMotion === true}
      className="flex shrink-0 items-center"
    >
      {ITEMS.map((item) => (
        <li key={`${copy}-${item}`} className="flex items-center">
          <span className="px-4 text-[15px] tracking-[0.14em] text-zinc-300 uppercase sm:px-6 sm:text-base">
            {item}
          </span>
          <span aria-hidden className="text-amber-300/80">
            +
          </span>
        </li>
      ))}
    </ul>
  );

  if (prefersReducedMotion) {
    return (
      <div className="overflow-hidden border-y border-white/10 py-4">
        <p className="px-4 text-center text-[13px] tracking-[0.14em] text-zinc-300 uppercase">
          {ITEMS.join("  +  ")}
        </p>
      </div>
    );
  }

  return (
    <div aria-hidden className="overflow-hidden border-y border-white/10 py-4">
      <div ref={track} data-scroll-line className="flex w-max">
        {row(0)}
        {row(1)}
      </div>
    </div>
  );
}
