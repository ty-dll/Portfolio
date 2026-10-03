import { certifications, education } from "../data";
import { spotlight } from "../hooks";
import { Icon, Reveal, SectionHeading } from "./ui";

export default function Credentials() {
  return (
    <section id="credentials" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="04" title="Credentials" jp="資格・学歴" />

        <div className="grid gap-4 lg:grid-cols-5">
          {/* Education */}
          <Reveal className="lg:col-span-2">
            <div
              onMouseMove={spotlight}
              className="spotlight relative h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-ink p-8"
            >
              <span className="pointer-events-none absolute -right-4 -bottom-10 font-jp text-[10rem] leading-none font-bold text-white/[0.03]">
                学
              </span>
              <p className="font-mono text-xs tracking-wider text-accent uppercase">Education</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{education.degree}</h3>
              <p className="mt-2 text-soft">{education.school}</p>
              <p className="mt-1 text-sm text-muted">
                {education.location} · {education.period}
              </p>
              <div className="mt-10">
                <p className="text-sm text-muted">GPA</p>
                <p className="text-5xl font-bold text-gradient">{education.gpa.split(" ")[0]}</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div className="h-full w-[92.8%] rounded-full bg-gradient-to-r from-accent to-sakura" />
                </div>
                <p className="mt-2 text-right font-mono text-xs text-muted">out of 10.0</p>
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <div className="grid gap-4 lg:col-span-3">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 100}>
                <div
                  onMouseMove={spotlight}
                  className="spotlight group flex items-center gap-5 rounded-2xl border border-line bg-panel/70 p-5 transition-colors hover:border-white/15 md:p-6"
                >
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-line bg-ink text-accent transition group-hover:scale-105 group-hover:border-accent/40">
                    {c.icon === "jp" ? (
                      <span className="font-jp text-2xl font-bold">日</span>
                    ) : (
                      <Icon name={c.icon} className="size-7" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white md:text-lg">{c.name}</h3>
                    <p className="text-sm text-muted">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-sm text-muted">{c.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
