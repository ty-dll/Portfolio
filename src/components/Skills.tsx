import { skillGroups } from "../data";
import { spotlight } from "../hooks";
import { Reveal, SectionHeading } from "./ui";

const accents = ["from-accent", "from-accent-2", "from-sakura", "from-sky-400", "from-violet-400", "from-emerald-400"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="03" title="Skills" jp="技術スタック" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 100}>
              <div
                onMouseMove={spotlight}
                className="spotlight group h-full overflow-hidden rounded-2xl border border-line bg-panel/70 p-6 transition-colors hover:border-white/15"
              >
                <div className={`mb-5 h-1 w-10 rounded-full bg-gradient-to-r ${accents[i]} to-transparent transition-all duration-500 group-hover:w-20`} />
                <h3 className="mb-4 font-semibold text-white">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-sm text-soft transition hover:border-accent/50 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
