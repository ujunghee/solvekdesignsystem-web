function initPicker(inputId, options = {}) {
  const input = document.getElementById(inputId);
  if (!input) return null;
  const calBtn = document.querySelector('[data-datepicker-for="' + inputId + '"]');

  const picker = flatpickr(input, {
    locale: 'ko',
    dateFormat: 'Y-m-d',
    disableMobile: true,
    ...options
  });

  if (calBtn) {
    calBtn.addEventListener('click', () => picker.toggle());
  }

  return picker;
}
