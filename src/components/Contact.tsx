import { useState } from "react";
import { profile } from "../data";
import { Icon, Reveal } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute bottom-0 left-1/2 size-[700px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent">05 — Contact</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-white md:text-7xl">
            Let's build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            I'm open to full-stack SDE roles in Tokyo or on remote, globally distributed teams.
            Write to me in English or Japanese.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-lg font-semibold text-ink transition hover:bg-accent"
          >
            <Icon name="mail" />
            Say hello
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center gap-3 rounded-2xl border border-line bg-panel/70 px-6 py-4 font-mono text-sm text-soft backdrop-blur transition hover:border-muted hover:text-white"
          >
            <span className="max-w-[60vw] truncate">{profile.email}</span>
            <Icon name={copied ? "check" : "copy"} className={`size-4 ${copied ? "text-emerald-400" : ""}`} />
          </button>
        </Reveal>

        <Reveal delay={250} className="mt-10 flex justify-center gap-2">
          {(["github", "linkedin"] as const).map((k) => (
            <a
              key={k}
              href={profile[k]}
              target="_blank"
              rel="noreferrer"
              aria-label={k}
              className="rounded-xl border border-line p-3 text-muted transition hover:border-muted hover:text-white"
            >
              <Icon name={k} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
