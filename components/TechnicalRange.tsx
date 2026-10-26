import { technicalRange } from "@/lib/technical-range";

export function TechnicalRange() {
  return (
    <section
      id="technical-range"
      aria-labelledby="technical-range-heading"
      className="scroll-mt-8 border-t border-white/[0.06] bg-zinc-950 px-4 py-24 sm:px-6 sm:py-28 md:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="technical-range-heading"
          className="mb-14 text-center text-xs font-medium uppercase tracking-[0.28em] text-zinc-400 sm:mb-16 md:mb-20 md:text-left"
        >
          Technical range
        </h2>

        <dl className="max-w-3xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:ease-out">
          {technicalRange.map((group) => (
            <div
              key={group.id}
              className="grid gap-2 border-t border-white/[0.06] py-6 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-10 sm:py-7"
            >
              <dt className="text-sm font-medium tracking-wide text-zinc-200">
                {group.label}
              </dt>
              <dd className="text-[0.9375rem] leading-relaxed text-zinc-300 sm:text-base sm:leading-7">
                {group.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
