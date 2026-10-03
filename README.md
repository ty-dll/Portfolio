# Aditya Garimella — Portfolio

My personal portfolio site. It's a single page built with React, TypeScript and Tailwind CSS that covers my experience, skills and credentials.

**Live site:** _add your deployed URL here_

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

## Features

- **No UI or animation libraries.** The only runtime dependencies are React and React DOM. Every effect is hand-written with CSS and small React hooks.
- **Scroll animations:** sections fade in as they enter the viewport, using `IntersectionObserver`.
- **Typewriter text and counters:** the top section cycles through phrases, and the stats count up when you scroll to them.
- **Cursor spotlight:** cards glow where the cursor is, using CSS custom properties.
- **Active-section nav:** the navbar highlights the section you're reading and turns frosted once you scroll.
- **Works on phones,** with a separate mobile menu.
- **Accessible:** respects `prefers-reduced-motion`, uses semantic markup and labels icon-only buttons.
- **Content kept apart from layout:** all text is in one typed data file.

## Tech stack

| Area      | Tools                                         |
| --------- | --------------------------------------------- |
| UI        | React 19, TypeScript                          |
| Styling   | Tailwind CSS v4 (`@theme` design tokens)      |
| Build     | Vite 7                                        |
| Fonts     | Inter, JetBrains Mono, Noto Serif JP          |

## Getting started

You need Node.js 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check, then build the site into dist/
npm run preview   # serve the built site locally
```

## Project structure

```
src/
├── data.ts              # All site content (profile, experience, skills, certifications)
├── hooks.ts             # useReveal, useCountUp, useTypewriter, useActiveSection, spotlight
├── index.css            # Tailwind import, theme tokens, keyframes, custom effects
├── App.tsx              # Puts the sections together on the page
└── components/
    ├── ui.tsx           # Reveal wrapper, SectionHeading, inline SVG icons
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx
    ├── Skills.tsx
    ├── Credentials.tsx
    └── Contact.tsx
public/
└── resume.pdf           # Served at /resume.pdf for the résumé download button
```

## Customising

- **Content:** edit [`src/data.ts`](src/data.ts). The components read everything from there, so you don't need to change any JSX.
- **Colours and fonts:** change the tokens in the `@theme` block of [`src/index.css`](src/index.css). For example, `--color-accent` sets the main highlight colour.
- **Résumé:** put the PDF at `public/resume.pdf`.

## Deployment

The build output in `dist/` is a plain static site, so any static host will work:

- **Vercel / Netlify:** import the repo. Both detect Vite automatically (build command `npm run build`, output folder `dist`).
- **GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.ts`, then publish `dist/`.

## Contact

**Aditya Garimella**, Software Engineer · Hamamatsu, Japan (open to relocating to Tokyo)
📧 [g.aditya2307@gmail.com](mailto:g.aditya2307@gmail.com)
