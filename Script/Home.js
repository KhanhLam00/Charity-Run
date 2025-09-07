// Hiệu ứng trang Home: reveal on scroll + đếm số + carousel
document.addEventListener('DOMContentLoaded', function () {
  // 1) Bootstrap carousel (phòng khi bỏ data-ride)
  if (window.jQuery && typeof jQuery.fn.carousel === 'function') {
    const $carousel = jQuery('#carouselExampleIndicators');
    if ($carousel.length) $carousel.carousel({ interval: 3000 });
  }

  // 2) Reveal on scroll (thêm class .show)
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // 3) Count-up numbers (chạy 1 lần khi khối số vào viewport)
  const counters = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.dataset.target || el.textContent.replace(/[^0-9]/g, '')) || 0;
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1500; // ms

      let start = 0;
      const startTime = performance.now();

      function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(start + progress * (target - start));
        el.textContent = prefix + value.toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + target.toLocaleString() + suffix;
      }

      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(el => counterObserver.observe(el));
});