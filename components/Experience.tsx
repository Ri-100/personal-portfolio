import { experience } from "@/lib/experience";
import { ScrollLine } from "@/components/ScrollLine";

export function Experience() {
  return (
    <div id="experience">
      <ScrollLine />
      {experience.map((role, index) => (
        <div key={role.id}>
          {index > 0 ? <ScrollLine /> : null}
        <section
          id={role.id}
          aria-labelledby={`${role.id}-heading`}
          className="flex scroll-mt-8 flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32"
        >
          <article className="story-in mx-auto w-full max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-amber-300/90">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-3 text-zinc-600">—</span>
              <span className="text-zinc-400">Experience</span>
            </p>
            <h2
              id={`${role.id}-heading`}
              className="mt-6 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-zinc-50"
            >
              {role.href ? (
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-transparent underline-offset-4 hover:decoration-amber-300/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070b14]"
                >
                  {role.company}
                </a>
              ) : (
                role.company
              )}
            </h2>
            <p className="mt-4 text-base text-zinc-300">{role.title}</p>
            <p className="mt-2 text-sm tracking-wide text-zinc-400">
              <time dateTime={role.startDate}>{role.startLabel}</time>
              <span> — </span>
              {role.endDate ? (
                <time dateTime={role.endDate}>{role.endLabel}</time>
              ) : (
                role.endLabel
              )}
            </p>
            {role.summary ? (
              <p className="mx-auto mt-10 max-w-lg text-pretty text-[0.9375rem] leading-relaxed text-zinc-300 sm:text-lg sm:leading-8">
                {role.summary}
              </p>
            ) : null}
            <ul className="mt-14 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
              {role.points.map((point, pointIndex) => (
                <li
                  key={point.title}
                  className={
                    pointIndex === role.points.length - 1 &&
                    role.points.length % 2 === 1
                      ? "rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.625rem)]"
                      : "rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5"
                  }
                >
                  <p className="text-base font-medium text-zinc-50">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-zinc-400">
                    {point.detail}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
        </div>
      ))}
      <ScrollLine />
    </div>
  );
}
