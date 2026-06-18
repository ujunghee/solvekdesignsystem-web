function openModal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.hidden = false;
  container.focus();
  document.body.style.overflow = 'hidden';
}

function closeModal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal-close]').forEach((btn) => {
  btn.addEventListener('click', () => closeModal(btn.dataset.modalClose));
});

document.querySelectorAll('.modal-container').forEach((container) => {
  container.addEventListener('click', (e) => {
    if (e.target === container) closeModal(container.id);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-container').forEach((c) => {
      if (!c.hidden) closeModal(c.id);
    });
  }
});
