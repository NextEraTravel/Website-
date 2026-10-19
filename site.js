(function () {
  // Always open pages at the top unless a same-page anchor was requested
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  if (!location.hash) { window.scrollTo(0, 0); window.addEventListener('pageshow', function () { if (!location.hash) window.scrollTo(0, 0); }); }

  // Menu panel
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    if (!btn || !nav) return;
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  }
  if (btn && nav) {
    btn.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // Services carousel
  var track = document.querySelector('.carousel .track');
  var next = document.querySelector('.carousel-next');
  if (track && next) {
    next.addEventListener('click', function () {
      var slide = track.querySelector('.slide');
      var step = slide ? slide.offsetWidth + 24 : 300;
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step, behavior: 'smooth' });
    });
  }
})();
