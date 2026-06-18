document.querySelectorAll('[aria-expanded]').forEach((btn) => {
  if (btn.closest('.view-toggle') || btn.closest('.header-nav') || btn.closest('.region-select') || btn.closest('.map-search-wrapper') || btn.hasAttribute('data-header-nav-toggle') || btn.hasAttribute('data-search-filter-toggle') || btn.hasAttribute('data-filter-trigger') || btn.hasAttribute('data-control-toggle')) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.classList.toggle('active', !expanded);
  });
});
