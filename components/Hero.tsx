"use client";

import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const MotionA = motion.create("a");

const LINKEDIN_URL = "https://www.linkedin.com/in/rishavshukla/";

const buttonHoverTransition = {
  type: "tween" as const,
  duration: 0.12,
  ease: easeOut,
};

export type HeroProps = {
  name?: string;
  role?: string;
  tagline?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export function Hero({
  name = "Rishav Shukla",
  role = "Full-Stack Engineer",
  tagline = "I build and ship real product—handling everything from UI to AI workflows.",
  primaryHref = "#experience",
  secondaryHref = "mailto:hello@example.com",
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-zinc-950 px-4 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.35_0.02_260/0.22),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,oklch(0.28_0.03_280/0.12),transparent_50%)]"
      />

      {/* Same width column as Work (`max-w-5xl`) so LinkedIn lines up with project previews */}
      <div className="relative z-20 mx-auto flex w-full max-w-5xl shrink-0 justify-end pt-8 sm:pt-10">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-[10px] font-extralight leading-none tracking-[0.14em] text-zinc-500 sm:tracking-[0.12em]",
            "underline decoration-transparent underline-offset-[5px]",
            "hover:text-zinc-300 hover:decoration-zinc-400/50",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          )}
          aria-label="Rishav Shukla on LinkedIn"
        >
          LinkedIn
        </a>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center pb-24 pt-6 sm:pb-28 sm:pt-8">
        <motion.div
          className="w-full max-w-3xl text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
        <div className="relative mb-14 sm:mb-[4.25rem] md:mb-24">
          {/* Bloom: vertical wash aligned to headline width — grounds the type block */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-6%] top-[22%] bottom-[-4%]"
          >
            <div className="mx-auto h-full max-w-2xl bg-[radial-gradient(ellipse_78%_88%_at_50%_52%,oklch(0.5_0.03_265/0.11),oklch(0.36_0.025_265/0.045)_54%,transparent_76%)] blur-[52px] sm:blur-[60px]" />
          </div>

          <motion.p
            variants={item}
            className="relative mb-1 text-[10px] font-extralight uppercase leading-none tracking-[0.36em] text-zinc-600 sm:text-[11px] sm:tracking-[0.38em]"
          >
            {role}
          </motion.p>

          <motion.h1
            variants={item}
            className="relative text-balance text-[clamp(3rem,10vw+0.5rem,6.5rem)] font-semibold leading-[0.84] tracking-[-0.052em] sm:leading-[0.82] sm:tracking-[-0.058em] md:tracking-[-0.062em]"
          >
            <span className="relative inline-block bg-linear-to-br from-white via-zinc-100 to-zinc-600 bg-clip-text text-transparent [filter:drop-shadow(0_1px_0_rgba(0,0,0,0.3))]">
              {name}
            </span>
          </motion.h1>
        </div>

        <motion.p
          variants={item}
          className="mx-auto mb-7 max-w-md text-pretty text-center text-[0.9375rem] font-light leading-[1.72] tracking-[0.02em] text-zinc-400 sm:mb-8 sm:text-[1.0625rem] sm:leading-[1.74] sm:tracking-[0.018em]"
        >
          {tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          <MotionA
            href={primaryHref}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-11 min-w-[148px] rounded-full px-8 text-base font-medium shadow-none"
            )}
            whileHover={
              prefersReducedMotion === true ? undefined : { scale: 1.004 }
            }
            whileTap={
              prefersReducedMotion === true ? undefined : { scale: 0.996 }
            }
            transition={buttonHoverTransition}
          >
            View Experience
          </MotionA>
          <MotionA
            href={secondaryHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 min-w-[148px] rounded-full border-zinc-700 bg-transparent px-8 text-base font-medium text-zinc-100 hover:bg-zinc-800/50"
            )}
            whileHover={
              prefersReducedMotion === true ? undefined : { scale: 1.004 }
            }
            whileTap={
              prefersReducedMotion === true ? undefined : { scale: 0.996 }
            }
            transition={buttonHoverTransition}
          >
            Contact
          </MotionA>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
