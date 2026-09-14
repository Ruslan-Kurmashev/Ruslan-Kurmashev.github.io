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

// Publication thumbnails used on the home/publications listings.
const publicationThumbStyle = document.createElement('style');
publicationThumbStyle.textContent = `
  .pub-item-with-thumb { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 22px; align-items: start; }
  .pub-thumb { display: block; width: 220px; height: 168px; overflow: hidden; border: 1px solid #e4e6e8; background: #fff; }
  .pub-thumb img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: left top; }
  .pub-copy { min-width: 0; }
  .pub-item-with-cover { grid-template-columns: 120px minmax(0, 1fr); }
  .pub-item-with-cover .pub-thumb { width: 120px; height: 158px; }
  .pub-item-with-cover .pub-thumb img { object-fit: contain; object-position: center top; }
  .pub-item-with-evidence { grid-template-columns: 220px minmax(0, 1fr); }
  .pub-item-with-evidence .pub-thumb { width: 220px; height: 118px; }
  .pub-item-with-evidence .pub-thumb img { object-fit: contain; object-position: center; }
  .pub-item-with-plot { grid-template-columns: 220px minmax(0, 1fr); }
  .pub-item-with-plot .pub-thumb { width: 220px; height: 181px; }
  .pub-item-with-plot .pub-thumb img { object-fit: contain; object-position: center; }
  @media (max-width: 640px) {
    .pub-item-with-thumb, .pub-item-with-cover, .pub-item-with-evidence, .pub-item-with-plot { grid-template-columns: 1fr; gap: 12px; }
    .pub-thumb { width: min(260px, 100%); height: auto; aspect-ratio: 1.31; }
    .pub-item-with-cover .pub-thumb { width: 120px; height: 158px; aspect-ratio: auto; }
    .pub-item-with-evidence .pub-thumb { width: min(260px, 100%); height: auto; aspect-ratio: 1.87; }
    .pub-item-with-plot .pub-thumb { width: min(260px, 100%); height: auto; aspect-ratio: 1.196; }
  }
`;
document.head.appendChild(publicationThumbStyle);

function addPublicationThumbnail(href, src, alt, variant = '') {
  document.querySelectorAll(`.publication-list .pub-title a[href="${href}"]`).forEach(titleLink => {
    const article = titleLink.closest('.pub-item');
    if (!article || article.querySelector('.pub-thumb')) return;

    const copy = document.createElement('div');
    copy.className = 'pub-copy';
    while (article.firstChild) copy.appendChild(article.firstChild);

    const thumb = document.createElement('a');
    thumb.className = 'pub-thumb';
    thumb.href = href;
    thumb.setAttribute('aria-label', 'Open publication details');

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';
    thumb.appendChild(img);

    article.classList.add('pub-item-with-thumb');
    if (variant === 'cover') article.classList.add('pub-item-with-cover');
    if (variant === 'evidence') article.classList.add('pub-item-with-evidence');
    if (variant === 'plot') article.classList.add('pub-item-with-plot');
    article.append(thumb, copy);
  });
}

addPublicationThumbnail(
  '/publications/transcriptomic-convergence-asd/',
  '/assets/img/publications/transcriptomic-convergence-evidence-map-v2.jpg',
  'Evidence profile and study strength summary for the transcriptomic convergence review',
  'evidence'
);

addPublicationThumbnail(
  '/publications/early-autism-identification/',
  '/assets/img/publications/early-autism-identification-pathway.jpg',
  'Early autism identification pathway from developmental concern to needs-based support',
  'evidence'
);

addPublicationThumbnail(
  '/publications/age-moderation-abide/',
  '/assets/img/publications/age-moderation-abide-social-age.jpg',
  'Social by age interaction in bilateral caudate volume with observed age distribution',
  'plot'
);

// Navigation asset version: 2026-09-14-5
