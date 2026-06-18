document.querySelectorAll('.search-wrapper').forEach((wrapper) => {
  const input = wrapper.querySelector('.search-input');
  const popup = wrapper.querySelector('.search-popup');

  input?.addEventListener('click', (e) => {
    e.stopPropagation();
    popup?.classList.add('active');
  });

  input?.addEventListener('focus', () => {
    popup?.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      popup?.classList.remove('active');
    }
  });
});
