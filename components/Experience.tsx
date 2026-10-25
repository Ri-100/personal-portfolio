import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-8 border-t border-white/[0.06] bg-zinc-950 px-4 py-24 sm:px-6 sm:py-28 md:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="experience-heading"
          className="mb-14 text-center text-xs font-medium uppercase tracking-[0.28em] text-zinc-400 sm:mb-16 md:mb-20 md:text-left"
        >
          Experience
        </h2>

        <div className="flex flex-col">
          {experience.map((role, index) => (
            <article
              key={role.id}
              className="border-t border-white/[0.06] py-12 first:border-t-0 first:pt-0 last:pb-0 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:ease-out sm:py-14 md:py-16"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight tracking-tight text-zinc-50">
                  {role.company}
                </h3>
                <p className="text-sm tracking-wide text-zinc-400 sm:shrink-0 sm:text-right">
                  <time dateTime={role.startDate}>{role.startLabel}</time>
                  <span aria-hidden="true"> – </span>
                  <span className="sr-only"> to </span>
                  {role.endDate ? (
                    <time dateTime={role.endDate}>{role.endLabel}</time>
                  ) : (
                    role.endLabel
                  )}
                </p>
              </div>

              <p className="mt-2 text-base text-zinc-300">{role.title}</p>

              <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-[0.9375rem] leading-relaxed text-zinc-300 marker:text-zinc-500 sm:text-base sm:leading-7">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
