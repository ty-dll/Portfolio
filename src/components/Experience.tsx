import { experience } from "../data";
import { spotlight } from "../hooks";
import { Icon, Reveal, SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="02" title="Experience" jp="職歴" />

        <ol className="relative space-y-10 border-l border-line pl-8 md:pl-12">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span className="absolute top-2 -left-[calc(2rem+5px)] size-2.5 rounded-full bg-accent ring-4 ring-accent/20 md:-left-[calc(3rem+5px)]" />

              <Reveal delay={i * 100}>
                <article
                  onMouseMove={spotlight}
                  className="spotlight rounded-3xl border border-line bg-panel/70 p-6 transition-colors hover:border-white/15 md:p-10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs tracking-wider text-accent uppercase">{job.period}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{job.role}</h3>
                      <p className="mt-1 text-lg text-soft">
                        {job.company}
                        {job.via && <span className="text-sm text-muted"> · {job.via}</span>}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-sm text-muted">
                      <Icon name="pin" className="size-3.5" />
                      {job.location}
                    </span>
                  </div>

                  <p className="mt-5 leading-relaxed text-muted">
                    {job.blurb} {job.context}
                  </p>

                  {job.highlights.length > 0 && (
                    <ul className="mt-8 grid gap-3">
                      {job.highlights.map((h) => (
                        <li
                          key={h.text}
                          className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition hover:border-line hover:bg-white/[0.02]"
                        >
                          <span className="mt-0.5 min-w-20 shrink-0 font-mono text-sm font-medium text-accent-2">
                            {h.metric ?? "—"}
                          </span>
                          <span className="leading-relaxed text-soft">{h.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="rounded-lg bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
