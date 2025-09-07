// Participation-Information.js
// Reveal on scroll with optional per-element delay (data-delay)
// Also animate underline width by adding .show to section (CSS handles underline)

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      // if data-delay provided, set transitionDelay so the CSS transition starts later
      const delay = el.dataset.delay || '0s';
      el.style.transitionDelay = delay;
      el.classList.add('show');

      // For .section specifically, also animate its children more smoothly
      if (el.classList.contains('section')) {
        // reveal immediate child elements in a small stagger
        const kids = el.querySelectorAll('h3, p, ul, table, .button');
        kids.forEach((k, i) => {
          k.style.opacity = 0;
          k.style.transform = 'translateY(18px)';
          k.style.transition = `opacity .6s ease ${0.12 * (i+1)}s, transform .6s ease ${0.12 * (i+1)}s`;
          // trigger reflow then reveal
          requestAnimationFrame(() => {
            k.style.opacity = 1;
            k.style.transform = 'translateY(0)';
          });
        });
      }

      // stop observing once revealed
      obs.unobserve(el);
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // Accessibility: reduce motion respect
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    revealEls.forEach(el => {
      el.style.transition = 'none';
      el.classList.add('show');
    });
  }
});
