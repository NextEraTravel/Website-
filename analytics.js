/* Google Analytics 4 for Next Era Travel.
   1) In Google Analytics, create a GA4 property and a Web data stream.
   2) Copy the Measurement ID (it looks like G-ABC123XYZ9) and paste it below.
   Until then this file does nothing, so no data is collected. */
(function () {
  var GA_ID = 'G-SX38LNK17D';
  var live = /^G-[A-Z0-9]{6,}$/.test(GA_ID) && GA_ID !== 'G-XXXXXXXXXX';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  function send(name, params) {
    try { window.gtag('event', name, params || {}); } catch (e) {}
  }

  if (live) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  // Click tracking: consultation, guides, contact form, phone, social, blog links
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var label = a.getAttribute('data-ga-label') || (a.textContent || '').trim().slice(0, 60);
    var name = a.getAttribute('data-ga');
    if (!name) {
      if (href.indexOf('app.tern.travel') > -1) name = 'consultation_click';
      else if (href.indexOf('myflodesk.com') > -1) name = 'guide_download';
      else if (href.indexOf('jotform.com') > -1) name = 'contact_form_click';
      else if (href.indexOf('tel:') === 0) name = 'phone_click';
      else if (/facebook|instagram|linkedin|pinterest/.test(href)) name = 'social_click';
    }
    if (name) send(name, { link_label: label, link_url: href, page_path: location.pathname });
  }, true);

  // Blog reading depth
  var post = document.body && document.body.getAttribute('data-post');
  if (post) {
    var marks = [25, 50, 75, 90], fired = {};
    var onScroll = function () {
      var h = document.documentElement;
      var pct = Math.round((h.scrollTop + window.innerHeight) / h.scrollHeight * 100);
      marks.forEach(function (m) {
        if (pct >= m && !fired[m]) { fired[m] = true; send('blog_scroll', { percent_scrolled: m, post: post }); }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(function () { send('blog_engaged_30s', { post: post }); }, 30000);
  }
})();
