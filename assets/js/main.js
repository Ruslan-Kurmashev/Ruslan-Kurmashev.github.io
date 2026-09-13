const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');

// Defensive cleanup for any stale cached markup that still contains the removed Research page.
if (nav) {
  nav.querySelectorAll('a[href="/research/"], a[href="/research"]').forEach(link => link.remove());
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const researchGateUrl = 'https://www.researchgate.net/profile/Ruslan-Kurmashev';

function appendResearchGate(container, label = 'ResearchGate') {
  if (!container || container.querySelector('a[href*="researchgate.net"]')) return;
  const link = document.createElement('a');
  link.href = researchGateUrl;
  link.textContent = label;
  container.appendChild(link);
}

appendResearchGate(document.querySelector('.footer-links'));
document.querySelectorAll('.social-links').forEach(group => appendResearchGate(group));

// Navigation asset version: 2026-09-13-4
