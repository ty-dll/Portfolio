import { profile } from "../data";
import { useTypewriter } from "../hooks";
import { Icon } from "./ui";

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20">
      {/* Background */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="animate-float absolute -top-32 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute right-[-10%] bottom-[-20%] size-[480px] rounded-full bg-sakura/10 blur-[120px]" />

      {/* Vertical Japanese accent */}
      <div className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 font-jp text-sm tracking-[0.6em] text-muted/40 [writing-mode:vertical-rl] lg:block">
        ソフトウェアエンジニア ・ 浜松
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <div
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 py-1.5 pr-4 pl-2 text-sm backdrop-blur"
          style={{ animation: "fade-up .8s both" }}
        >
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-soft">Open to new opportunities</span>
        </div>

        <h1
          className="text-5xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl"
          style={{ animation: "fade-up .8s .1s both" }}
        >
          Aditya
          <br />
          <span className="text-gradient">Garimella</span>
          <span className="text-accent">.</span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          style={{ animation: "fade-up .8s .2s both" }}
        >
          Software engineer in Japan building{" "}
          <span className="font-mono text-white">
            {typed}
            <span className="animate-blink text-accent">▍</span>
          </span>
          <br className="hidden sm:block" />
          I care about clean UIs, fast builds and reliable code.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-4"
          style={{ animation: "fade-up .8s .3s both" }}
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 font-semibold text-ink shadow-lg shadow-accent/25 transition hover:shadow-accent/50"
          >
            View my work
            <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.resume}
            download="Aditya_Garimella_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/60 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:border-muted"
          >
            <Icon name="download" className="size-4" />
            Résumé
          </a>
          <div className="ml-1 flex items-center gap-1">
            {(["github", "linkedin"] as const).map((k) => (
              <a
                key={k}
                href={profile[k]}
                target="_blank"
                rel="noreferrer"
                aria-label={k}
                className="rounded-xl p-3 text-muted transition hover:bg-white/5 hover:text-white"
              >
                <Icon name={k} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-muted"
          style={{ animation: "fade-up .8s .4s both" }}
        >
          <span className="flex items-center gap-2">
            <Icon name="pin" className="size-4 text-accent" />
            {profile.location}
          </span>
          <span>{profile.relocation}</span>
          <span>EN · 日本語 N2</span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted md:flex"
      >
        <span className="h-10 w-6 rounded-full border border-line p-1">
          <span className="block h-2 w-full animate-bounce rounded-full bg-accent" />
        </span>
      </a>

      <style>{`@keyframes fade-up{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
