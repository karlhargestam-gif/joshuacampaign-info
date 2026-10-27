(function () {
  var button = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav-links');
  if (!button || !nav) return;
  function closeMenu() {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('nav-open');
  }
  button.addEventListener('click', function () {
    var open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('nav-open', open);
  });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
})();
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
  var toggle = document.querySelector('.carousel-toggle');
  if (!slides.length || !dots.length || !toggle) return;
  var index = 0;
  var timer = null;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var paused = reduced;
  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      var active = i === index;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach(function (dot, i) {
      dot.setAttribute('aria-current', String(i === index));
    });
  }
  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }
  function start() {
    stop();
    if (!paused && !document.hidden) {
      timer = window.setInterval(function () { show(index + 1); }, 5500);
    }
  }
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      show(i);
      start();
    });
  });
  toggle.addEventListener('click', function () {
    paused = !paused;
    toggle.textContent = paused ? 'Play' : 'Pause';
    toggle.setAttribute('aria-label', paused ? 'Play campaign photos' : 'Pause campaign photos');
    start();
  });
  document.addEventListener('visibilitychange', start);
  if (reduced) {
    toggle.textContent = 'Play';
    toggle.setAttribute('aria-label', 'Play campaign photos');
  }
  show(0);
  start();
})();
