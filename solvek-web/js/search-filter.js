const searchFilter = document.querySelector('.search-filter');
let periodStartPicker = null;
let periodEndPicker = null;
let periodRangePicker = null;

function setPeriodDatesEnabled(enabled) {
  const startInput = document.getElementById('filter-period-start');
  const endInput = document.getElementById('filter-period-end');
  const startBtn = document.querySelector('[data-datepicker-for="filter-period-start"]');
  const endBtn = document.querySelector('[data-datepicker-for="filter-period-end"]');

  if (!startInput || !endInput) return;

  startInput.disabled = !enabled;
  endInput.disabled = !enabled;
  if (startBtn) startBtn.disabled = !enabled;
  if (endBtn) endBtn.disabled = !enabled;

  if (periodStartPicker) {
    if (!enabled) {
      periodStartPicker.close();
      periodStartPicker.clear();
    }
    periodStartPicker.set('clickOpens', enabled);
  }
  if (periodEndPicker) {
    if (!enabled) {
      periodEndPicker.close();
      periodEndPicker.clear();
    }
    periodEndPicker.set('clickOpens', enabled);
  }
}

function setPeriodRangeEnabled(enabled) {
  const rangeInput = document.getElementById('filter-period-range');
  const rangeBtn = document.querySelector('[data-datepicker-for="filter-period-range"]');

  if (!rangeInput) return;

  rangeInput.disabled = !enabled;
  if (rangeBtn) rangeBtn.disabled = !enabled;

  if (periodRangePicker) {
    if (!enabled) {
      periodRangePicker.close();
      periodRangePicker.clear();
    }
    periodRangePicker.set('clickOpens', enabled);
  }
}

function openFilterPanel(section) {
  const panel = section.querySelector('.search-filter__panel');
  const toggle = section.querySelector('[data-search-filter-toggle]');

  section.classList.add('active');
  toggle.setAttribute('aria-expanded', 'true');
  panel.classList.remove('is-open');
  panel.style.overflow = 'hidden';
  panel.style.height = 'auto';
  const targetHeight = panel.scrollHeight;
  panel.style.height = '0';
  panel.offsetHeight;

  requestAnimationFrame(() => {
    panel.style.height = `${targetHeight}px`;
  });

  panel.addEventListener('transitionend', function onOpenEnd(e) {
    if (e.propertyName !== 'height' || !section.classList.contains('active')) return;
    panel.style.height = 'auto';
    panel.style.overflow = 'visible';
    panel.classList.add('is-open');
    panel.removeEventListener('transitionend', onOpenEnd);
  });
}

function closeFilterPanel(section) {
  const panel = section.querySelector('.search-filter__panel');
  const toggle = section.querySelector('[data-search-filter-toggle]');

  panel.classList.remove('is-open');
  panel.style.overflow = 'hidden';
  panel.style.height = 'auto';
  const currentHeight = panel.scrollHeight;
  panel.style.height = `${currentHeight}px`;
  panel.offsetHeight;

  requestAnimationFrame(() => {
    panel.style.height = '0';
  });

  section.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
}

function initFilterPanels() {
  if (!searchFilter) return;
  searchFilter.querySelectorAll('.search-filter__section').forEach((section) => {
    const panel = section.querySelector('.search-filter__panel');

    if (section.classList.contains('active')) {
      panel.style.height = 'auto';
      panel.style.overflow = 'visible';
      panel.classList.add('is-open');
    } else {
      panel.style.height = '0';
      panel.style.overflow = 'hidden';
      panel.classList.remove('is-open');
    }
  });
}

document.querySelectorAll('[data-search-filter-toggle]').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const section = toggle.closest('.search-filter__section');
    if (section.classList.contains('active')) {
      closeFilterPanel(section);
    } else {
      openFilterPanel(section);
    }
  });
});

document.querySelector('[data-search-filter-reset]')?.addEventListener('click', () => {
  if (!searchFilter) return;
  searchFilter.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  searchFilter.querySelectorAll('select').forEach((select) => {
    select.selectedIndex = 0;
  });
  const periodAll = document.getElementById('filter-period-all');
  if (periodAll) {
    periodAll.checked = true;
    setPeriodDatesEnabled(false);
  }
  const period2All = document.getElementById('filter-period-2-all');
  if (period2All) {
    period2All.checked = true;
    setPeriodRangeEnabled(false);
  }
});

if (searchFilter) {
  searchFilter.querySelectorAll('[name="filter-period"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      setPeriodDatesEnabled(radio.value === 'custom');
    });
  });

  searchFilter.querySelectorAll('[name="filter-period-2"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      setPeriodRangeEnabled(radio.value === 'custom');
    });
  });
}

if (typeof initPicker === 'function') {
  periodStartPicker = initPicker('filter-period-start');
  periodEndPicker = initPicker('filter-period-end');
  periodRangePicker = initPicker('filter-period-range', { mode: 'range' });
  setPeriodDatesEnabled(false);
  setPeriodRangeEnabled(false);
}

initFilterPanels();
