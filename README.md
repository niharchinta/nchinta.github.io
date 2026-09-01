# nchinta.com

Personal portfolio site — dark, terminal-themed, built with [Astro](https://astro.build).

## Development

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
public/               # static files copied as-is (CNAME, favicon)
src/
  layouts/            # BaseLayout.astro (head, nav, footer)
  components/         # Hero, TerminalWindow, ExperienceItem, ProjectCard, HikeGallery, ...
  data/               # experience.ts, education.ts, skills.ts, projects.ts, hobbies.ts
  lib/hikes.ts        # auto-discovers hike folders/photos at build time
  hikes/              # one folder per hike (see below)
  pages/              # index.astro, cv.astro, hikes.astro
```

## Editing content

- **Experience / education / skills**: edit the arrays in `src/data/experience.ts`,
  `src/data/education.ts`, `src/data/skills.ts`.
- **Projects**: edit `src/data/projects.ts`. Each project has a `feedbackFormUrl` —
  replace `PLACEHOLDER_FEEDBACK_FORM_URL` at the top of the file with your real
  Google Form link once you have one (or give an individual project its own URL).
- **Hobbies**: edit `src/data/hobbies.ts`. Give a hobby a real `description` (and
  optional `href` to a dedicated page) to flesh it out beyond "Coming soon".

## Adding a hike

1. Create a folder: `src/hikes/<hike-id>/`
2. Add a `description.txt` with `key: value` lines:
   ```
   title: Mountain Peak Adventure
   location: Rocky Mountain National Park
   date: 2024-08-15
   elevation: 2,800 ft
   distance: 8.5 miles
   difficulty: Moderate
   description: Sunrise hike with great views of the valley.
   ```
3. Drop photos (`.jpg`, `.jpeg`, `.png`, `.webp`) directly into the same folder.

That's it — `src/lib/hikes.ts` scans `src/hikes/` at build time, so the hike and
its photos show up on `/hikes` automatically on the next `npm run dev` or
`npm run build`. No script to run, no data file to edit.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and deploys it to GitHub Pages. The custom domain is set via `public/CNAME`
(copied into `dist/` on every build).

**One-time setup**: in the repo's Settings → Pages, set the Source to
"GitHub Actions" (instead of "Deploy from a branch") for the workflow to take
effect.

## License

Feel free to borrow this template for your own use.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
