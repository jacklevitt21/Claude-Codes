# Jack Levitt — Portfolio Site

A plain HTML/CSS/JS portfolio site. No build step, no framework, no `npm install` —
just open `index.html` in a browser, or push to GitHub Pages.

## Structure

```
index.html          Home page (hero + featured projects)
about.html           About page (bio, education)
projects.html        Full project grid + leadership/activities list
skills.html          Skills, grouped by category
contact.html         Contact links

data/experience.js   ← EDIT THIS to add/change projects & experience
data/skills.js       ← EDIT THIS to add/change skills

css/style.css         All styling. Colors/fonts are CSS variables at the top.
js/components.js      Shared header/footer + your email/resume link
js/main.js            Renders the data files into HTML on each page
js/icons.js            Icon set used on cards
assets/images/         Put real photos here
```

## The most common edits

**Add a new project** → open `data/experience.js`, copy the template block at
the bottom of the file, paste it into the `EXPERIENCES` array, fill in the
fields, save, refresh your browser.

**Reorder projects** → just reorder the objects in the `EXPERIENCES` array.
The page layout updates automatically — you never touch HTML/CSS for this.

**Add a skill** → open `data/skills.js`, add a string to the right category's
`items` array.

**Change colors / fonts** → open `css/style.css`, edit the `:root { ... }`
block at the very top.

**Change the nav links, footer, resume link, or contact email** → open
`js/components.js`. Everything there is used on every page.

**Add a real photo** → drop the image file into `assets/images/`, then either:
- set `image: 'assets/images/yourfile.jpg'` on a project in `data/experience.js`, or
- for your headshot: edit the `<div class="hero-portrait">` block in
  `index.html` and the `<div class="about-photo">` block in `about.html`,
  replacing the placeholder `<svg>` with `<img src="assets/images/headshot.jpg">`.

**Add your resume** → save it as `resume.pdf` in the project root (same folder
as `index.html`). The "Resume" button in the nav and contact page already
link to it.

## Things left as placeholders for you to fill in

Search the codebase for `TODO (Jack)` to find every spot that needs your
input — class year/major, real project bullet points for a few roles,
your personal email, an "outside of engineering" blurb on the About page,
and specific tool names on the Skills page (e.g. which CAD software you use).

## Publishing it

Easiest free option: **GitHub Pages**.
1. Push this repo to GitHub (already done if you're reading this from there).
2. Repo Settings → Pages → Deploy from branch → pick this branch, folder `/`.
3. GitHub gives you a URL like `https://jacklevitt21.github.io/claude-codes/` —
   put that on your resume.

You can also rename the repo, or set up a custom domain, from the same
Pages settings screen.
