"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const STARS = [
  { left: "8%", top: "6%" },
  { left: "18%", top: "16%" },
  { left: "27%", top: "4%" },
  { left: "74%", top: "10%" },
  { left: "84%", top: "20%" },
  { left: "91%", top: "3%" },
  { left: "12%", top: "34%" },
  { left: "88%", top: "38%" },
  { left: "42%", top: "28%" },
  { left: "63%", top: "48%" },
  { left: "22%", top: "58%" },
  { left: "78%", top: "66%" },
  { left: "8%", top: "76%" },
  { left: "51%", top: "82%" },
  { left: "92%", top: "88%" },
  { left: "34%", top: "94%" },
] as const;

export function NightSky() {
  const prefersReducedMotion = useReducedMotion();
  const [shift, setShift] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onScroll = () => {
      setShift(Math.min(window.scrollY * 0.16, 420));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#070b14]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_18%,#1a3358_0%,transparent_68%)]" />
      <div
        className="absolute inset-x-0 top-[-30%] h-[160%]"
        style={
          prefersReducedMotion
            ? undefined
            : { transform: `translate3d(0, ${-shift}px, 0)` }
        }
      >
        {STARS.map((star) => (
          <span
            key={`${star.left}-${star.top}`}
            className="absolute size-1 bg-zinc-200"
            style={{ left: star.left, top: star.top }}
          />
        ))}
        <PixelCloud className="left-[6%] top-[18%] hidden sm:block" />
        <PixelCloud className="right-[8%] top-[22%] hidden sm:block" />
        <PixelCloud className="left-[12%] top-[46%] scale-75" />
        <PixelCloud className="right-[10%] top-[52%] scale-75" />
        <PixelCloud className="left-[18%] top-[74%] hidden sm:block" />
        <PixelCloud className="right-[14%] top-[82%] scale-75" />
      </div>
    </div>
  );
}

function PixelCloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 6"
      aria-hidden
      shapeRendering="crispEdges"
      className={cn("absolute h-8 w-auto text-[#24344f]", className)}
    >
      <rect x="2" y="2" width="10" height="3" fill="currentColor" />
      <rect x="4" y="1" width="6" height="1" fill="currentColor" />
      <rect x="1" y="3" width="1" height="2" fill="currentColor" />
      <rect x="12" y="3" width="1" height="2" fill="currentColor" />
    </svg>
  );
}
