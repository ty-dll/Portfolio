import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks";
import { Icon } from "./ui";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
const ids = ["home", ...links.map((l) => l.id)];

export default function Navbar() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-line bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-sakura font-bold text-ink transition-transform group-hover:rotate-6">
            AG
          </span>
          <span className="hidden font-semibold text-white sm:block">Aditya Garimella</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  active === l.id ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-accent to-sakura transition-transform duration-300 ${
                    active === l.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent md:block"
        >
          Let's talk
        </a>

        <button
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="size-6" />
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-20 rounded-2xl border border-line bg-panel/95 p-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 ${active === l.id ? "bg-white/5 text-white" : "text-muted"}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
