"use client";

import { Pixelify_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const easeOut = [0.22, 1, 0.36, 1] as const;

const MotionA = motion.create("a");

const PROFILE_LINKS = [
  {
    href: "https://github.com/Ri-100",
    label: "GitHub",
    ariaLabel: "Rishav Shukla on GitHub",
  },
  {
    href: "https://drive.google.com/file/d/1RkQY95FLmy8ywbDrddcwCO_gQLwkTjx9/view?usp=sharing",
    label: "Resume",
    ariaLabel: "Rishav Shukla resume",
  },
  {
    href: "https://www.linkedin.com/in/rishavshukla/",
    label: "LinkedIn",
    ariaLabel: "Rishav Shukla on LinkedIn",
  },
] as const;

const AVATAR_SRC = "/avatar.png";
const BLINK_HALF_SRC = "/avatar-blink-half.png";
const BLINK_SRC = "/avatar-blink.png";

type Lid = "open" | "half" | "shut";

const GREETING = "hi. i am rishav.";
const REPLIES = ["hey.", "that's me.", "scroll for the work."] as const;

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
  role = "Product Engineer",
  tagline = "I build product features, backend systems, and AI applications.",
  primaryHref = "#experience",
  secondaryHref = "mailto:garghrishav@gmail.com",
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [tilted, setTilted] = useState(false);
  const [docked, setDocked] = useState(false);
  const [lid, setLid] = useState<Lid>("open");
  const tiltTimer = useRef(0);
  const dockedRef = useRef(false);
  const reducedRef = useRef(prefersReducedMotion);
  const replyIndex = useRef(0);
  const speechToken = useRef(0);
  const speechTimer = useRef<number[]>([]);
  const [speech, setSpeech] = useState("");
  const [speechDots, setSpeechDots] = useState(false);
  const [speechLive, setSpeechLive] = useState("");
  const showContact =
    secondaryHref.length > 0 &&
    secondaryHref !== "mailto:hello@example.com";
  const ticker = [
    ...PROFILE_LINKS,
    ...(showContact
      ? [{ href: secondaryHref, label: "Contact", ariaLabel: "Email Rishav Shukla" }]
      : []),
    { href: primaryHref, label: "Experience", ariaLabel: "View experience" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setDocked(window.scrollY > window.innerHeight * 0.62);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => window.clearTimeout(tiltTimer.current), []);

  useEffect(() => {
    dockedRef.current = docked;
  }, [docked]);

  useEffect(() => {
    reducedRef.current = prefersReducedMotion;
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion === null) return;
    let cancelled = false;
    let timer = 0;
    const later = (fn: () => void, ms: number) => {
      timer = window.setTimeout(fn, ms);
    };
    const waitNext = () => {
      if (cancelled) return;
      if (reducedRef.current) {
        setLid("open");
        later(waitNext, 1000);
        return;
      }
      later(playBlink, dockedRef.current ? 11000 : 4200);
    };
    const playBlink = () => {
      if (cancelled || reducedRef.current) {
        setLid("open");
        waitNext();
        return;
      }
      setLid("half");
      later(() => {
        if (cancelled) return;
        setLid("shut");
        later(() => {
          if (cancelled) return;
          setLid("half");
          later(() => {
            if (cancelled) return;
            setLid("open");
            waitNext();
          }, 80);
        }, 90);
      }, 70);
    };
    const ready = Promise.all(
      [BLINK_HALF_SRC, BLINK_SRC].map((src) => {
        const img = new Image();
        img.src = src;
        return img.decode?.() ?? Promise.resolve();
      })
    );
    ready.then(() => {
      if (!cancelled) waitNext();
    });
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      setLid("open");
    };
  }, [prefersReducedMotion]);

  const clearSpeechTimers = () => {
    speechTimer.current.forEach((id) => window.clearTimeout(id));
    speechTimer.current = [];
  };

  const playSpeech = (line: string) => {
    speechToken.current += 1;
    const token = speechToken.current;
    clearSpeechTimers();
    if (prefersReducedMotion) {
      setSpeechDots(false);
      setSpeech(line);
      setSpeechLive(line);
      return;
    }
    setSpeech("");
    setSpeechDots(true);
    const start = window.setTimeout(() => {
      if (speechToken.current !== token) return;
      setSpeechDots(false);
      let count = 0;
      const step = () => {
        if (speechToken.current !== token) return;
        count += 1;
        setSpeech(line.slice(0, count));
        if (count < line.length) {
          speechTimer.current.push(window.setTimeout(step, 46));
        } else {
          setSpeechLive(line);
        }
      };
      step();
    }, 620);
    speechTimer.current.push(start);
  };

  const playSpeechRef = useRef(playSpeech);

  useEffect(() => {
    playSpeechRef.current = playSpeech;
  });

  useEffect(() => {
    if (prefersReducedMotion === null) return;
    const id = window.setTimeout(() => playSpeechRef.current(GREETING), 40);
    return () => {
      window.clearTimeout(id);
      speechTimer.current.forEach((timer) => window.clearTimeout(timer));
      speechTimer.current = [];
    };
  }, [prefersReducedMotion]);

  const reactToClick = () => {
    const line = REPLIES[replyIndex.current % REPLIES.length];
    replyIndex.current += 1;
    playSpeech(line);
    if (prefersReducedMotion) return;
    setTilted(true);
    window.clearTimeout(tiltTimer.current);
    tiltTimer.current = window.setTimeout(() => setTilted(false), 1400);
  };

  return (
    <section className="relative flex min-h-[100dvh] flex-col text-zinc-100">
      <Ticker links={ticker} />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-10 text-center sm:px-6">
        <Portrait
          tilted={tilted}
          onClick={reactToClick}
          docked={docked}
          lid={lid}
          speech={speech}
          speechDots={speechDots}
          speechLive={speechLive}
        />
        <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.34em] text-zinc-400 sm:text-[11px]">
          {role}
        </p>
        <h1
          className={cn(
            pixel.className,
            "mt-4 max-w-4xl text-balance text-[clamp(2.6rem,8vw,5.5rem)] font-medium leading-[0.95] text-zinc-50"
          )}
        >
          {name}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-pretty text-[0.9375rem] font-light leading-relaxed text-zinc-300 sm:text-lg">
          <Tagline text={tagline} />
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
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
          {showContact ? (
            <MotionA
              href={secondaryHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 min-w-[148px] rounded-full border-zinc-600 bg-transparent px-8 text-base font-medium text-zinc-100 hover:bg-white/5"
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
          ) : null}
        </div>
      </div>

      <a
        href={primaryHref}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400/45"
      >
        Scroll
      </a>
    </section>
  );
}

function Portrait({
  tilted,
  onClick,
  docked,
  lid,
  speech,
  speechDots,
  speechLive,
}: {
  tilted: boolean;
  onClick: () => void;
  docked: boolean;
  lid: Lid;
  speech: string;
  speechDots: boolean;
  speechLive: string;
}) {
  const faceSrc =
    lid === "half" ? BLINK_HALF_SRC : lid === "shut" ? BLINK_SRC : AVATAR_SRC;
  const faceClass =
    "h-full w-full object-contain transition duration-200 group-hover:scale-[1.03] group-active:scale-[0.98] motion-reduce:transform-none";

  return (
    <>
      <div
        className={cn(
          "relative",
          docked && "pointer-events-none opacity-0"
        )}
      >
        <button
          type="button"
          onClick={onClick}
          aria-hidden={docked}
          tabIndex={docked ? -1 : 0}
          aria-label="Rishav Shukla. Click to say hi."
          data-tilt={tilted ? "true" : "false"}
          className="portrait-still group relative h-36 w-36 cursor-pointer sm:h-44 sm:w-44"
        >
          <img
            src={faceSrc}
            alt=""
            className={faceClass}
          />
        </button>
        <SpeechBubble
          text={speech}
          live={speechLive}
          dots={speechDots}
          hidden={docked}
          className="absolute top-1 left-[58%] sm:top-5 sm:left-[calc(100%+0.75rem)]"
        />
      </div>
      <button
        type="button"
        onClick={onClick}
        aria-hidden={!docked}
        aria-label="Rishav Shukla. Click to say hi."
        tabIndex={docked ? 0 : -1}
        data-tilt={tilted ? "true" : "false"}
        className={cn(
          "portrait-still group fixed right-4 bottom-4 z-40 h-16 w-16 cursor-pointer rounded-full bg-[#070b14]/85 p-1 ring-1 ring-white/15 transition-opacity sm:right-6 sm:bottom-6 sm:h-20 sm:w-20",
          docked ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <img
          src={faceSrc}
          alt=""
          className={faceClass}
        />
      </button>
      <SpeechBubble
        text={speech}
        live={speechLive}
        dots={speechDots}
        hidden={!docked}
        className="fixed bottom-[4.6rem] right-[5.4rem] z-40 sm:bottom-[5.6rem] sm:right-[6.8rem]"
      />
    </>
  );
}

function SpeechBubble({
  text,
  live,
  dots,
  hidden,
  className,
}: {
  text: string;
  live: string;
  dots: boolean;
  hidden: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none w-max max-w-[11rem] rounded-[14px] bg-[#242424] px-3.5 py-2 text-left text-[13px] leading-none text-zinc-100 shadow-[0_10px_28px_rgba(0,0,0,0.35)] ring-1 ring-white/10 [font-family:var(--font-geist-sans),ui-sans-serif,system-ui,sans-serif]",
        hidden && "invisible",
        className
      )}
    >
      <span className="sr-only" aria-live={hidden ? "off" : "polite"}>
        {hidden ? "" : live}
      </span>
      <span aria-hidden className="inline-flex min-h-4 min-w-8 items-center">
        {dots ? (
          <span className="inline-flex items-center gap-1 px-0.5">
            <span className="speech-dot size-1 rounded-full bg-zinc-100" />
            <span className="speech-dot size-1 rounded-full bg-zinc-100 [animation-delay:160ms]" />
            <span className="speech-dot size-1 rounded-full bg-zinc-100 [animation-delay:320ms]" />
          </span>
        ) : (
          text
        )}
      </span>
    </div>
  );
}

function Tagline({ text }: { text: string }) {
  const [before, after] = text.split("AI");
  if (after === undefined) return text;
  return (
    <>
      {before}
      <span className="text-amber-300">AI</span>
      {after}
    </>
  );
}

function Ticker({
  links,
}: {
  links: readonly { href: string; label: string; ariaLabel: string }[];
}) {
  return (
    <div className="relative z-20 overflow-hidden border-b border-white/10 bg-[#070b14]/80">
      <div className="flex w-max motion-safe:animate-[ticker_36s_linear_infinite] hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {links.map((link) => (
              <li key={`${copy}-${link.label}`} className="flex items-center">
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  tabIndex={copy === 1 ? -1 : undefined}
                  aria-label={copy === 0 ? link.ariaLabel : undefined}
                  className="px-3 py-3 text-[11px] tracking-[0.18em] text-zinc-400 uppercase hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400/45 sm:px-4"
                >
                  {link.label}
                </a>
                <span aria-hidden className="text-amber-300/80">
                  +
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

