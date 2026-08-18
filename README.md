# Jack Levitt — Portfolio Site

A plain HTML/CSS/JS portfolio site focused on engineering projects. No build
step, no framework — open `index.html` in a browser, or push to GitHub Pages.

## Structure

```
index.html            Home — hero + the full project grid
about.html             About page (bio, education)
skills.html            Skills, grouped by category
contact.html           Contact links
resume.pdf              Your resume (linked from the nav/footer/contact page)

data/experience.js     ← EDIT THIS to add/change projects
data/skills.js          ← EDIT THIS to add/change skills

projects/               One detail page per project (photos/design files live here)
  _template.html         Copy this to add a new project's detail page
  recovery-systems-lead.html
  reworld-mechanical-intern.html
  orbis-metallicum.html
  rabitz-lab.html
  empowered-innovations.html

css/style.css            All styling. Colors/fonts are CSS variables at the top.
js/components.js         Shared header/footer + your email/resume link
js/main.js               Renders data files into HTML on each page
assets/images/           Real photos and per-project design files go here
```

## The most common edits

**Add a photo or design file to an existing project** → drop the image in
`assets/images/<project-id>/` (a folder already exists for each project),
then add it to that project's `gallery` array in `data/experience.js`:

```js
gallery: [
  { src: 'assets/images/recovery-systems-lead/bulkhead-cad.jpg', caption: 'Bulkhead CAD model' }
]
```

It'll show up in the "Photos & Design Files" section on that project's page.
Leave `gallery: []` and the page just shows placeholder tiles as a reminder.

**Add a brand new project**
1. Copy an entry in `data/experience.js`'s `EXPERIENCES` array, give it a
   unique `id`.
2. Copy `projects/_template.html` to `projects/<your-id>.html` and replace
   `REPLACE_WITH_ID` with your new id.
3. Save, refresh — it appears on the homepage grid automatically and links
   to its new detail page.

**Reorder projects on the homepage** → reorder the objects in the
`EXPERIENCES` array in `data/experience.js`.

**Add a skill** → open `data/skills.js`, add a string to the right
category's `items` array.

**Change colors / fonts** → open `css/style.css`, edit the `:root { ... }`
block at the top.

**Change the nav links, footer, resume link, or contact email** → open
`js/components.js`.

**Replace your headshot** → it's `assets/images/headshot.jpeg`, used on
the homepage and About page. Just overwrite that file with a new one
(same filename), or update the `src` in `index.html` / `about.html` if you
rename it.

## Why some things aren't on this site

This site is meant to showcase engineering projects with visuals — not
duplicate your resume. Leadership roles, non-engineering activities, and
older research aren't listed here; they're on `resume.pdf`, which is linked
from every page.

## Publishing it

**GitHub Pages** (free):
1. Push this repo to GitHub (already done if you're reading this from there).
2. Repo Settings → Pages → Deploy from branch → pick this branch, folder `/`.
3. GitHub gives you a URL like `https://jacklevitt21.github.io/Claude-Codes/` —
   put that on your resume.

That URL updates automatically on every push to the branch it's configured to.
