// Soft fade-out on in-site navigation. The fade-IN is handled by CSS on load.
(function () {
  var FADE_MS = 300;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If the page was restored from the back/forward cache, clear the leaving state
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) document.body.classList.remove('is-leaving');
  });

  if (reduce) return;

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var a = e.target.closest && e.target.closest('a');
    if (!a) return;

    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || a.target || a.hasAttribute('download')) return;

    var url;
    try { url = new URL(a.href, location.href); } catch (err) { return; }

    // Only animate same-origin, different-page navigations (skip Instagram etc.)
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.search === location.search) return;

    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(function () { location.href = a.href; }, FADE_MS);
  });
})();
