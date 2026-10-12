# Aditya J. Portfolio

Next.js 15 · TypeScript · Tailwind CSS v4 · Motion · @shadergradient/react

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

React is pinned to `~19.1` because `@react-three/fiber` 9 (used by ShaderGradient) supports React `<19.3`.

## Before you deploy

```bash
npm run check:todo
```

Lists every placeholder left in `src/data`. Nothing there is invented; each TODO needs real info.

| File | What to fill in |
|---|---|
| `/public/resume.pdf` | Add the file. Resume buttons (nav, hero, mobile menu) switch on automatically at build. Until then they show as "Resume soon". An external URL in `site.links.resume` also works. |
| `/public/aditya.jpg` | Add your photo, then set `site.portrait.src = '/aditya.jpg'` in `src/data/site.ts` |
| `src/data/site.ts` | `email` |
| `src/data/projects.ts` | repo / demo URLs, years, images, full errbase details |
| `src/data/achievements.ts` | hackathon win name, store / PyPI links |
| `src/data/openSource.ts` | commit and contribution counts, repo names and URLs |
| `src/data/building.ts` | confirm DevStreak, add repo link |

Links set to `null` are hidden automatically (Resume buttons, Email button, project links).

Project images: `/public/projects/<slug>.webp`, around 1600x1000, under 300 KB. Until then a typographic placeholder is shown.

## Structure

```
src/
├── app/                layout, page, globals.css, providers (MotionConfig)
├── components/
│   ├── Background/     ShaderGradient layer, CSS fallback, error boundary
│   ├── Navbar/  Hero/ (with Portrait)  About/  Projects/  Toolkit/
│   ├── Achievements/  OpenSource/  CurrentlyBuilding/  WhyMe/
│   ├── Contact/  Footer/
│   └── ui/             ScrambleText, GlitchText, RevealText, SectionLabel,
│                       Section, Cursor, ActionLink, ResumeLink, ThemeToggle
├── data/               all content
├── hooks/              reduced motion, media query, page visibility, active section
└── lib/
```

## Background behaviour

- ShaderGradient is the only WebGL on the page. Loaded client side after idle.
- `pixelDensity` 1 on desktop, 0.6 on mobile / touch.
- Speed: `SHADER_SPEED` in `Background.tsx` (0.04 dark, 0.03 light; the original was 0.3). Set 0 for a still frame.
- Light mode uses the same shader with a muted red palette (`LIGHT_PALETTE` in `ShaderLayer.tsx`) under a heavier overlay.
- Animation stops when the tab is hidden or when the OS asks for reduced motion.
- A static CSS gradient in the same palette sits underneath. If WebGL is missing or the shader throws (for example the environment HDR from the ShaderGradient CDN is blocked), an error boundary removes the shader and the page keeps working.

## Theme

Dark is the default. The toggle saves the choice in localStorage and an inline head script applies it before paint, so there is no flash. All colors are CSS variables in `globals.css` (`:root` for dark, `[data-theme='light']` for light).

## Tweaks

- Section label separator: `LABEL_SEPARATOR` in `src/components/ui/SectionLabel/SectionLabel.tsx`.
- Overlay strength: `bg-black/45` in `src/components/Background/Background.tsx`.
- Colors and fonts: `@theme` in `src/app/globals.css`.
