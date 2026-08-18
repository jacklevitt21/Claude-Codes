/* =========================================================================
   SHARED HEADER / FOOTER
   ---------------------------------------------------------------------
   Editing the nav links or footer? Do it once here — every page pulls
   from these two template strings, so you don't have to update five
   separate HTML files.

   NOTE: this uses innerHTML injection (not fetch), on purpose, so the
   site keeps working if you just double-click index.html and open it
   straight in a browser — no local server required.
   ========================================================================= */

const SITE_NAME = 'Jack Levitt';

// TODO (Jack): point this at your real resume file once you add one to
// the project root (e.g. resume.pdf).
const RESUME_PATH = 'resume.pdf';

const HEADER_HTML = `
  <div class="container nav">
    <a href="index.html" class="nav-logo">${SITE_NAME.split(' ')[0]} <span>${SITE_NAME.split(' ')[1] || ''}</span></a>
    <button class="nav-toggle" aria-label="Toggle menu" id="nav-toggle">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <div class="nav-links" id="nav-links">
      <a href="index.html" data-page="index">Home</a>
      <a href="about.html" data-page="about">About</a>
      <a href="projects.html" data-page="projects">Projects</a>
      <a href="skills.html" data-page="skills">Skills</a>
      <a href="contact.html" data-page="contact">Contact</a>
      <a href="${RESUME_PATH}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Resume</a>
    </div>
  </div>
`;

const FOOTER_HTML = `
  <div class="container footer-row">
    <span>&copy; ${new Date().getFullYear()} ${SITE_NAME}</span>
    <div class="footer-links">
      <a href="mailto:you@example.com">Email</a>
      <a href="https://www.linkedin.com/in/jack-levitt/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${RESUME_PATH}" target="_blank" rel="noopener">Resume</a>
    </div>
  </div>
`;

function mountSiteChrome(activePage) {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  if (activePage) {
    const activeLink = document.querySelector(`.nav-links a[data-page="${activePage}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}
