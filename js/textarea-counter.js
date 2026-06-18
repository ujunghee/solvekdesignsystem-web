document.querySelectorAll('.textarea-wrapper').forEach((wrapper) => {
  const textarea = wrapper.querySelector('.textarea-field-default');
  const counter = wrapper.querySelector('.counter');
  if (!textarea || !counter) return;

  const maxLength = parseInt(textarea.getAttribute('maxlength') || counter.closest('p')?.textContent.match(/\/\s*(\d+)/)?.[1] || '0', 10);

  textarea.addEventListener('input', () => {
    counter.textContent = textarea.value.length;
    if (maxLength > 0 && textarea.value.length > maxLength) {
      wrapper.classList.add('is-error');
    } else {
      wrapper.classList.remove('is-error');
    }
  });
});
