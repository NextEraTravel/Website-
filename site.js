(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
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
