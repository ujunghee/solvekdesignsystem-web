document.querySelectorAll('.map-search-wrapper').forEach((wrapper) => {
  const input = wrapper.querySelector('input[type="search"]');
  const result = wrapper.querySelector('.map-search-result');
  const preview = wrapper.querySelector('.map-search-result__preview');
  if (!input || !result) return;

  const escapeHtml = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const escapeReg = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const renderHighlight = (keyword) => {
    result.querySelectorAll('.map-search-result__body p').forEach((p) => {
      const base = p.dataset.text || (p.dataset.text = p.textContent);
      if (!keyword) { p.textContent = base; return; }
      const re = new RegExp('(' + escapeReg(escapeHtml(keyword)) + ')', 'gi');
      p.innerHTML = escapeHtml(base).replace(re, '<span class="color-blue-500">$1</span>');
    });
  };
  renderHighlight('');

  const box = wrapper.querySelector('.map-header-search-44');
  const hidePreview = () => preview && preview.classList.remove('active');
  const open = () => {
    result.classList.add('active');
    if (box) box.classList.add('active');
    input.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    result.classList.remove('active');
    if (box) box.classList.remove('active');
    input.setAttribute('aria-expanded', 'false');
    hidePreview();
  };

  input.addEventListener('focus', open);
  input.addEventListener('input', () => {
    const keyword = input.value.trim();
    renderHighlight(keyword);
    keyword ? open() : close();
  });

  result.querySelectorAll('.map-search-result__item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      if (preview) preview.classList.add('active');
    });
    item.addEventListener('click', (e) => {
      e.preventDefault();
      result.querySelectorAll('.map-search-result__item').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
      const name = item.querySelector('.map-search-result__body p');
      if (name) input.value = name.textContent.trim();
      close();
    });
  });

  result.addEventListener('mouseleave', hidePreview);

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) close();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.map-search-result.active').forEach((result) => {
      result.classList.remove('active');
      const wrapper = result.closest('.map-search-wrapper');
      if (!wrapper) return;
      const input = wrapper.querySelector('input[type="search"]');
      const preview = wrapper.querySelector('.map-search-result__preview');
      if (input) input.setAttribute('aria-expanded', 'false');
      if (preview) preview.classList.remove('active');
    });
  }
});
