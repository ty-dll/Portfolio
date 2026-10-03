import About from "./components/About";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { profile } from "./data";

export default function App() {
  return (
    <div className="noise relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">Built with React · TypeScript · Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
