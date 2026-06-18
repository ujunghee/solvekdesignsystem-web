document.querySelectorAll('.map-navigation__item[aria-pressed]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.map-navigation__item[aria-pressed]').forEach((el) => {
      el.classList.remove('active');
      el.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
  });
});
