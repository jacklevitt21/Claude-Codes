/* =========================================================================
   SHARED HEADER / FOOTER
   ---------------------------------------------------------------------
   Editing the nav links, footer, resume link, or contact email? Do it
   once here — every page (including project detail pages in /projects/)
   pulls from this file.

   NOTE: uses innerHTML injection (not fetch) so the site still works if
   you just double-click index.html and open it straight in a browser.
   ========================================================================= */

const SITE_NAME = 'Jack Levitt';
const RESUME_FILE = 'resume.pdf';
const PERSONAL_EMAIL = 'levittj11127@gmail.com';
const SCHOOL_EMAIL = 'jl0632@princeton.edu';

// basePath: '' when called from a root-level page (index.html, about.html...),
// '../' when called from a page inside /projects/.
function headerHTML(basePath) {
  return `
    <div class="container nav">
      <a href="${basePath}index.html" class="nav-logo">${SITE_NAME}</a>
      <button class="nav-toggle" aria-label="Toggle menu" id="nav-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <div class="nav-links" id="nav-links">
        <a href="${basePath}index.html" data-page="index">Work</a>
        <a href="${basePath}about.html" data-page="about">About</a>
        <a href="${basePath}skills.html" data-page="skills">Skills</a>
        <a href="${basePath}contact.html" data-page="contact">Contact</a>
        <a href="${basePath}${RESUME_FILE}" target="_blank" rel="noopener" class="text-link">Resume</a>
      </div>
    </div>
  `;
}

function footerHTML(basePath) {
  return `
    <div class="container footer-row">
      <span>&copy; ${new Date().getFullYear()} ${SITE_NAME}</span>
      <div class="footer-links">
        <a href="mailto:${PERSONAL_EMAIL}">Email</a>
        <a href="https://www.linkedin.com/in/jack-levitt/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${basePath}${RESUME_FILE}" target="_blank" rel="noopener">Resume</a>
      </div>
    </div>
  `;
}

function mountSiteChrome(activePage, basePath) {
  basePath = basePath || '';
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = headerHTML(basePath);
  if (footerEl) footerEl.innerHTML = footerHTML(basePath);

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
