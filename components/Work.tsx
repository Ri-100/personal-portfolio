"use client";

import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Project = {
  id: string;
  name: string;
  description: string;
  stack: string;
  href: string;
  githubHref: string;
  preview: "a" | "b" | "c";
};

const projects: Project[] = [
  {
    id: "1",
    name: "AI Daily Brief",
    description:
      "Pulls AI, India, and global headlines via RSS into a clean daily feed — built to add LLM summarization + caching next.",
    stack: "Next.js · TypeScript · RSS",
    href: "https://github.com/Ri-100/ai-daily-brief",
    githubHref: "https://github.com/Ri-100/ai-daily-brief",
    preview: "b",
  },
  {
    id: "2",
    name: "Ledger Atlas",
    description:
      "Auto-matched bank sweeps to internal GL tags and surfaced only the six exceptions finance had to touch at close.",
    stack: "React · Node · Redis",
    href: "#",
    githubHref: "https://github.com",
    preview: "b",
  },
  {
    id: "3",
    name: "Signal Field",
    description:
      "Grouped tickets by product surface and volume so leads reassigned two hotspots before either queue breached SLA.",
    stack: "Next.js · Python · Kafka",
    href: "#",
    githubHref: "https://github.com",
    preview: "c",
  },
];

export function Work() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="scroll-mt-8 border-t border-white/[0.06] bg-zinc-950 px-4 py-32 sm:px-6 sm:py-36 md:py-44"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="work-heading"
          className="mb-20 text-center text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 sm:mb-24 md:mb-28 md:text-left"
        >
          Selected Work
        </h2>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={cn(
                "group relative flex flex-col border-b border-white/[0.04] text-center last:border-b-0 md:items-start md:text-left",
                index === 0 && "pb-28 md:pb-36",
                index === 1 && "py-24 md:py-32",
                index === 2 && "border-b-0 pb-0 pt-20 md:pt-28"
              )}
              initial={
                prefersReducedMotion === true
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -6% 0px" }}
              transition={{
                duration: 0.55,
                ease: easeOut,
                delay: prefersReducedMotion === true ? 0 : index * 0.05,
              }}
            >
              <div
                className={cn(
                  "relative mx-auto aspect-video w-full max-w-[min(52rem,100%)] overflow-hidden rounded-xl bg-zinc-950 md:mx-0 md:max-w-none",
                  "ring-1 ring-inset ring-white/[0.03]"
                )}
              >
                <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-5">
                  <div className="mb-3 flex items-center gap-2 sm:mb-4">
                    <span className="size-2 rounded-full bg-zinc-700" />
                    <span className="size-2 rounded-full bg-zinc-700/80" />
                    <span className="size-2 rounded-full bg-zinc-700/60" />
                    <div className="ml-2 h-2 flex-1 max-w-[55%] rounded-sm bg-zinc-800/90" />
                  </div>

                  {project.preview === "a" ? (
                    <div className="flex min-h-0 flex-1 gap-2 sm:gap-3">
                      <div className="flex w-10 shrink-0 flex-col gap-1.5 pt-0.5 sm:w-12">
                        <div className="h-6 rounded bg-zinc-800/70" />
                        <div className="h-6 rounded bg-zinc-800/40" />
                        <div className="h-6 rounded bg-zinc-800/40" />
                        <div className="h-6 rounded bg-zinc-800/25" />
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col gap-2">
                        <div className="h-2.5 w-2/5 max-w-[12rem] rounded-sm bg-zinc-800/80" />
                        <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
                          <div className="rounded-md bg-zinc-900/90 ring-1 ring-inset ring-white/[0.04]" />
                          <div className="flex flex-col gap-1.5 rounded-md bg-zinc-900/90 p-2 ring-1 ring-inset ring-white/[0.04]">
                            <div className="h-1.5 w-full rounded-sm bg-zinc-800/60" />
                            <div className="h-1.5 w-11/12 rounded-sm bg-zinc-800/40" />
                            <div className="h-1.5 w-4/5 rounded-sm bg-zinc-800/30" />
                            <div className="mt-auto h-8 rounded-sm bg-zinc-800/35" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : project.preview === "b" ? (
                    <div className="flex min-h-0 flex-1 flex-col gap-1.5">
                      <div className="grid grid-cols-5 gap-1.5 border-b border-white/[0.04] pb-2">
                        <div className="h-2 rounded-sm bg-zinc-800/70" />
                        <div className="h-2 rounded-sm bg-zinc-800/50" />
                        <div className="h-2 rounded-sm bg-zinc-800/50" />
                        <div className="h-2 rounded-sm bg-zinc-800/50" />
                        <div className="h-2 rounded-sm bg-zinc-800/50" />
                      </div>
                      {(
                        [
                          ["w-3/5", "w-full", "w-4/5", "w-2/5", "w-3/4"],
                          ["w-full", "w-5/6", "w-full", "w-1/2", "w-5/6"],
                          ["w-4/5", "w-full", "w-5/6", "w-3/5", "w-full"],
                          ["w-full", "w-3/4", "w-full", "w-2/3", "w-4/5"],
                          ["w-5/6", "w-full", "w-3/5", "w-full", "w-1/2"],
                        ] as const
                      ).map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-5 items-center gap-1.5 py-1.5"
                        >
                          {row.map((w, j) => (
                            <div
                              key={j}
                              className={cn(
                                "h-1.5 rounded-sm bg-zinc-800/45",
                                w
                              )}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex min-h-0 flex-1 gap-2 sm:gap-3">
                      <div className="flex w-[32%] shrink-0 flex-col gap-1.5 border-r border-white/[0.04] pr-2 sm:pr-3">
                        <div className="h-2 w-2/3 rounded-sm bg-zinc-800/70" />
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="flex gap-2 rounded-md bg-zinc-900/80 p-1.5 ring-1 ring-inset ring-white/[0.03]"
                          >
                            <div className="size-5 shrink-0 rounded-sm bg-zinc-800/50" />
                            <div className="flex flex-1 flex-col justify-center gap-1">
                              <div className="h-1 w-3/4 rounded-sm bg-zinc-800/55" />
                              <div className="h-1 w-1/2 rounded-sm bg-zinc-800/35" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col gap-2 rounded-md bg-zinc-900/85 p-2 ring-1 ring-inset ring-white/[0.04] sm:p-3">
                        <div className="h-2 w-1/3 rounded-sm bg-zinc-800/70" />
                        <div className="mt-1 space-y-1.5">
                          <div className="ml-auto h-2 w-4/5 rounded-sm bg-zinc-800/40" />
                          <div className="h-2 w-3/4 rounded-sm bg-zinc-800/30" />
                          <div className="ml-auto h-2 w-2/3 rounded-sm bg-zinc-800/35" />
                        </div>
                        <div className="mt-auto h-7 rounded-sm bg-zinc-800/25" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mx-auto mt-11 w-full max-w-xl sm:mt-14 md:mx-0 md:mt-16 md:max-w-lg">
                <h3 className="text-[clamp(1.875rem,4vw,2.625rem)] font-semibold leading-[1.08] tracking-tight text-zinc-50">
                  {project.name}
                </h3>
                <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-zinc-400 md:mx-0 sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.62]">
                  {project.description}
                </p>
                <p className="mt-9 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-600 sm:mt-10">
                  {project.stack}
                </p>

                <div className="mt-11 flex flex-wrap items-center justify-center gap-5 sm:mt-12 md:justify-start md:gap-6">
                  <a
                    href={project.href}
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "h-10 rounded-full px-6 text-sm font-medium"
                    )}
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-10 rounded-full border-zinc-700/80 bg-transparent px-6 text-sm font-medium text-zinc-200 hover:bg-zinc-800/30"
                    )}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
