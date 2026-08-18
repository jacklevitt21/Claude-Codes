/* =========================================================================
   RENDER LOGIC — turns data/experience.js and data/skills.js into HTML.
   You shouldn't need to edit this file to add content — edit the data
   files instead. Only touch this if you want to change *how* things look.
   ========================================================================= */

/* ---- Lightbox: click any project photo to view it full-size ---- */
function ensureLightbox() {
  if (document.getElementById('lightbox-overlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <img class="lightbox-img" id="lightbox-img" alt="">
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(src, alt) {
  ensureLightbox();
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-img').alt = alt || '';
  document.getElementById('lightbox-overlay').classList.add('open');
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) overlay.classList.remove('open');
}

function makeZoomable(container) {
  ensureLightbox();
  container.querySelectorAll('img').forEach(img => {
    img.classList.add('zoomable');
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
}

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
  makeZoomable(heroEl);

  const metaEl = document.getElementById('detail-meta');
  const metaText = `${exp.dates || ''}${exp.location ? ' · ' + exp.location : ''}`;
  metaEl.textContent = metaText;
  metaEl.style.display = metaText ? 'block' : 'none';
  document.getElementById('detail-title').textContent = exp.title;
  document.getElementById('detail-org').textContent = exp.org;
  document.getElementById('detail-org').style.display = exp.org ? 'block' : 'none';
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

  const videoExtensions = ['.mp4', '.mov', '.webm', '.m4v'];
  const isVideo = src => videoExtensions.some(ext => src.toLowerCase().endsWith(ext));

  const galleryEl = document.getElementById('detail-gallery');
  if (exp.gallery && exp.gallery.length) {
    galleryEl.innerHTML = exp.gallery.map(g => {
      const media = isVideo(g.src)
        ? `<video src="${basePath}${g.src}" title="${g.caption || ''}" controls preload="metadata" onerror="this.parentElement.classList.add('gallery-empty'); this.parentElement.textContent='Video not found: ${g.src}';"></video>`
        : `<img src="${basePath}${g.src}" alt="${g.caption || exp.title}" title="${g.caption || ''}" onerror="this.parentElement.classList.add('gallery-empty'); this.parentElement.textContent='Image not found: ${g.src}';">`;
      return `<div class="gallery-item">${media}</div>`;
    }).join('');
    makeZoomable(galleryEl);
  } else {
    galleryEl.innerHTML = `
      <div class="gallery-item gallery-empty">Add photos or design files here — list them in this project's "gallery" array in data/experience.js</div>
      <div class="gallery-item gallery-empty">&nbsp;</div>
      <div class="gallery-item gallery-empty">&nbsp;</div>
    `;
  }
}
