const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');

if (nav) {
  const items = [
    ['about', '/'],
    ['research', '/research/'],
    ['publications', '/publications/'],
    ['projects', '/projects/'],
    ['experience', '/experience/'],
    ['service', '/academic-service/'],
    ['talks', '/talks/'],
    ['cv', '/cv/'],
    ['contact', '/contact/']
  ];

  const path = window.location.pathname;
  nav.innerHTML = items.map(([label, href]) => {
    const active = href === '/' ? path === '/' : path.startsWith(href);
    return `<a ${active ? 'aria-current="page"' : ''} href="${href}">${label}</a>`;
  }).join('');
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
