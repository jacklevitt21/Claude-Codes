/* =========================================================================
   RENDER LOGIC — turns the data in data/experience.js and data/skills.js
   into HTML on the page. You shouldn't need to edit this file to add
   content — edit the data files instead. Only touch this if you want to
   change *how* cards look/behave.
   ========================================================================= */

function cardHTML(exp) {
  const bulletsHTML = (exp.bullets && exp.bullets.length)
    ? `<ul class="bullets">${exp.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
    : '';
  const media = exp.image
    ? `<div class="card-icon"><img src="${exp.image}" alt="${exp.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"></div>`
    : `<div class="card-icon">${ICONS[exp.icon] || ICONS.gear}</div>`;
  const subtitle = exp.subtitle ? `<p style="font-style:italic;">${exp.subtitle}</p>` : '';
  const loc = exp.location ? ` · ${exp.location}` : '';

  return `
    <article class="card">
      ${media}
      <span class="card-category ${exp.category}">${exp.category}</span>
      <h3>${exp.title}</h3>
      <div class="card-org">${exp.org}</div>
      <div class="card-dates">${exp.dates}${loc}</div>
      <p>${exp.summary}</p>
      ${subtitle}
      ${bulletsHTML}
      <div class="card-tags">${(exp.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </article>
  `;
}

function placeholderCardHTML() {
  return `
    <article class="card placeholder-card">
      <div class="plus">${ICONS.plus}</div>
      <strong>Add your next project</strong>
      <span style="font-size:0.82rem;margin-top:4px;">Copy the template at the bottom of data/experience.js</span>
    </article>
  `;
}

function renderFeatured(containerId, count = 3) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = EXPERIENCES.filter(e => e.featured).slice(0, count);
  el.innerHTML = items.map(cardHTML).join('');
}

function renderProjectGrid(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = category === 'all'
    ? EXPERIENCES.filter(e => e.category !== 'leadership')
    : EXPERIENCES.filter(e => e.category === category);
  el.innerHTML = items.map(cardHTML).join('') + placeholderCardHTML();
}

function renderLeadershipRows(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = EXPERIENCES.filter(e => e.category === 'leadership');
  el.innerHTML = items.map(exp => `
    <div class="exp-row">
      <div class="exp-row-dates">${exp.dates}</div>
      <div>
        <h4>${exp.title}</h4>
        <div class="exp-row-org">${exp.org}</div>
        <p>${exp.summary}</p>
      </div>
    </div>
  `).join('');
}

function setupProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjectGrid('project-grid', btn.dataset.filter);
    });
  });
}

function renderSkills(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = SKILL_GROUPS.map(group => `
    <div class="skill-card">
      <h3><span class="card-icon">${ICONS[group.icon] || ICONS.gear}</span>${group.title}</h3>
      <div class="skill-pills">
        ${group.items.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderStats(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const engineering = EXPERIENCES.filter(e => e.category === 'engineering').length;
  const research = EXPERIENCES.filter(e => e.category === 'research').length;
  const leadership = EXPERIENCES.filter(e => e.category === 'leadership').length;
  const stats = [
    { num: String(engineering), label: 'Engineering Roles' },
    { num: String(research), label: 'Research Projects' },
    { num: String(leadership), label: 'Leadership Roles' },
    { num: '4+', label: 'Years Active' } // TODO (Jack): adjust if this isn't right
  ];
  el.innerHTML = stats.map(s => `
    <div>
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}
