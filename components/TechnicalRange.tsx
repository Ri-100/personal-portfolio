import { technicalRange } from "@/lib/technical-range";

export function TechnicalRange() {
  return (
    <section
      id="technical-range"
      aria-labelledby="technical-range-heading"
      className="flex min-h-[100svh] scroll-mt-8 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-24"
    >
      <div className="story-in mx-auto w-full max-w-xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-amber-300/90">
          03
          <span className="mx-3 text-zinc-600">/</span>
          <span className="text-zinc-400">Range</span>
        </p>
        <h2
          id="technical-range-heading"
          className="mt-6 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-zinc-50"
        >
          Technical range
        </h2>
        <dl className="mx-auto mt-10 w-full divide-y divide-white/10">
          {technicalRange.map((group) => (
            <div key={group.id} className="py-6">
              <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">
                {group.label}
              </dt>
              <dd className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-zinc-100 sm:text-base sm:leading-7">
                {group.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
