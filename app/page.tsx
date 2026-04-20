import { Hero } from "@/components/Hero";
// import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      {/*
        Placeholder: full <Work /> section (Selected Work + project cards) lives in
        components/Work.tsx — uncomment the import and <Work /> when real projects are ready.

      <Work />
      */}
      <section
        id="work"
        className="scroll-mt-8 border-t border-white/[0.06] bg-zinc-950 px-4 py-24 sm:px-6 sm:py-32"
        aria-label="Work"
      >
        <p className="mx-auto max-w-3xl text-center text-sm font-light text-zinc-500">
          Adding project soon.
        </p>
      </section>
    </>
  );
}
