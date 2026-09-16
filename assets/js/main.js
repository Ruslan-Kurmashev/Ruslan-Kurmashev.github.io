const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');

if (nav && toggle) {
  if (!nav.id) nav.id = 'primary-navigation';
  if (!nav.hasAttribute('aria-label')) nav.setAttribute('aria-label', 'Primary');
  toggle.setAttribute('aria-controls', nav.id);

  const closeNav = ({ restoreFocus = false } = {}) => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => closeNav());
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeNav({ restoreFocus: true });
    }
  });

  document.addEventListener('click', event => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760 && nav.classList.contains('open')) closeNav();
  });
}
