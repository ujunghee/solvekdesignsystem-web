document.querySelectorAll('[data-filter-trigger]').forEach((btn) => {
  const icon = btn.querySelector('.filter-icon');
  btn.addEventListener('click', () => {
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    btn.classList.toggle('active', !pressed);
    icon?.classList.toggle('active', !pressed);
  });
});
