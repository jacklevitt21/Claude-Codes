/* =========================================================================
   RENDER LOGIC — turns data/experience.js and data/skills.js into HTML.
   You shouldn't need to edit this file to add content — edit the data
   files instead. Only touch this if you want to change *how* things look.
   ========================================================================= */

function projectCardHTML(exp, compact) {
  const noImageMsg = 'No image yet —<br>add one in data/experience.js';
  const thumb = exp.image
    ? `<img src="${exp.image}" alt="${exp.title}" onerror="this.parentElement.innerHTML='<span class=&quot;no-image&quot;>${noImageMsg}</span>';">`
    : `<span class="no-image">${noImageMsg}</span>`;

  return `
    <a class="project-card${compact ? ' compact' : ''}" href="projects/${exp.id}.html">
      <div class="project-thumb">${thumb}</div>
      <h3>${exp.title}</h3>
      <div class="project-org">${exp.org}</div>
      <div class="project-dates">${exp.dates}</div>
      <p class="project-caption">${exp.oneLiner}</p>
    </a>
  `;
}

function renderProjectGrid(containerId, section) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = section ? EXPERIENCES.filter(e => e.section === section) : EXPERIENCES;
  el.innerHTML = items.map(e => projectCardHTML(e)).join('');
}

function renderSkills(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = SKILL_GROUPS.map(group => `
    <div class="skill-group">
      <div class="skill-group-title">${group.title}</div>
      <div class="skill-group-items">${group.items.join(' · ')}</div>
    </div>
  `).join('');
}

function renderProjectDetail(id, basePath) {
  basePath = basePath || '';
  const exp = EXPERIENCES.find(e => e.id === id);
  if (!exp) return;

  document.title = `${exp.title} — Jack Levitt`;

  const heroNoImageMsg = "No hero image yet — set the image field in data/experience.js";
  const heroEl = document.getElementById('detail-hero');
  heroEl.innerHTML = exp.image
    ? `<img src="${basePath}${exp.image}" alt="${exp.title}" onerror="this.parentElement.innerHTML='<span class=&quot;no-image&quot;>${heroNoImageMsg}</span>';">`
    : `<span class="no-image">${heroNoImageMsg}</span>`;

  document.getElementById('detail-meta').textContent = `${exp.dates}${exp.location ? ' · ' + exp.location : ''}`;
  document.getElementById('detail-title').textContent = exp.title;
  document.getElementById('detail-org').textContent = exp.org;
  document.getElementById('detail-summary').textContent = exp.summary;

  const subtitleEl = document.getElementById('detail-subtitle');
  if (exp.subtitle) {
    subtitleEl.textContent = exp.subtitle;
    subtitleEl.style.display = 'block';
  }

  document.getElementById('detail-bullets').innerHTML =
    (exp.bullets || []).map(b => `<li>${b}</li>`).join('');

  document.getElementById('detail-tags').innerHTML =
    (exp.tags || []).map(t => `<span>${t}</span>`).join('');

  const galleryEl = document.getElementById('detail-gallery');
  if (exp.gallery && exp.gallery.length) {
    galleryEl.innerHTML = exp.gallery.map(g => `
      <div class="gallery-item"><img src="${basePath}${g.src}" alt="${g.caption || exp.title}" title="${g.caption || ''}" onerror="this.parentElement.classList.add('gallery-empty'); this.parentElement.textContent='Image not found: ${g.src}';"></div>
    `).join('');
  } else {
    galleryEl.innerHTML = `
      <div class="gallery-item gallery-empty">Add photos or design files here — list them in this project's "gallery" array in data/experience.js</div>
      <div class="gallery-item gallery-empty">&nbsp;</div>
      <div class="gallery-item gallery-empty">&nbsp;</div>
    `;
  }
}
