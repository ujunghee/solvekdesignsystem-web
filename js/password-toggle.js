document.querySelectorAll('.eye-icon').forEach((icon) => {
  icon.closest('button')?.addEventListener('click', () => {
    const wrapper = icon.closest('.input-wrapper, .relative');
    const input = wrapper?.querySelector('input[type="password"], input[type="text"]');
    if (!input) return;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    icon.classList.toggle('active', isHidden);
  });
});
