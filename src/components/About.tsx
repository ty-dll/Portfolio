import { useEffect, useRef, useState } from "react";
import { facts, marquee, profile, stats } from "../data";
import { spotlight, useCountUp } from "../hooks";
import { Reveal, SectionHeading } from "./ui";

function Stat({ value, suffix, label, decimals = 0, start }: (typeof stats)[number] & { decimals?: number; start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div className="spotlight rounded-2xl border border-line bg-panel p-6" onMouseMove={spotlight}>
      <div className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        <span className="text-gradient">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.4 });
    if (statsRef.current) io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="01" title="About me" jp="自己紹介" />

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-xl leading-relaxed text-soft md:text-2xl md:leading-relaxed">
              {profile.summary}
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              I'm looking for a <span className="text-white">full-stack SDE role</span> on a
              high-impact, globally distributed team, where I can work across the stack and
              use both English and Japanese every day.
            </p>
          </Reveal>

          <Reveal delay={150} className="md:col-span-2">
            <dl className="divide-y divide-line rounded-2xl border border-line bg-panel/60">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1 px-5 py-4">
                  <dt className="font-mono text-xs tracking-wider text-muted uppercase">{f.label}</dt>
                  <dd className="text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <Stat {...s} start={inView} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-24 overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-2xl font-semibold text-muted/50 md:text-3xl">
              {t}
              <span className="text-accent/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
