(function () {
  if (typeof flatpickr === 'undefined') return;

  var koLocale = flatpickr.l10ns && flatpickr.l10ns.ko ? flatpickr.l10ns.ko : undefined;

  function applyDpCalendar(instance) {
    var root = instance.calendarContainer;
    if (!root) return;
    root.classList.add('dp');
    root.classList.toggle('dp-range', instance.config.mode === 'range');

    var months = root.querySelector('.flatpickr-months');
    if (months) months.classList.add('dp-head');

    var inner = root.querySelector('.flatpickr-innerContainer');
    if (inner) inner.classList.add('dp-body');

    var rCont = root.querySelector('.flatpickr-rContainer');
    if (rCont) rCont.classList.add('dp-grid');

    var days = root.querySelector('.flatpickr-days');
    if (days) days.classList.add('dp-days');

    var weekdays = root.querySelector('.flatpickr-weekdays');
    if (weekdays) weekdays.classList.add('dp-dow');
  }

  function injectDpFooter(instance) {
    var root = instance.calendarContainer;
    if (!root || root.querySelector('.dp-foot')) return;

    var footer = document.createElement('div');
    footer.className = 'dp-foot';
    footer.innerHTML =
      '<button type="button" class="dp-fbtn dp-fbtn--today">오늘</button>' +
      '<button type="button" class="dp-fbtn dp-fbtn--line">취소</button>' +
      '<button type="button" class="dp-fbtn dp-fbtn--fill">확인</button>';
    root.appendChild(footer);

    footer.querySelector('.dp-fbtn--today').addEventListener('click', function () {
      var today = new Date();
      if (instance.config.mode === 'range') {
        instance.setDate([today, today], false);
      } else {
        instance.setDate(today, false);
      }
      instance.jumpToDate(today);
    });

    footer.querySelector('.dp-fbtn--line').addEventListener('click', function () {
      var backup = instance._dpOpenBackup || [];
      if (!backup.length) {
        instance.clear(false);
      } else if (instance.config.mode === 'range') {
        instance.setDate(backup.length > 1 ? [backup[0], backup[1]] : backup[0], false);
      } else {
        instance.setDate(backup[0], false);
      }
      instance.close();
    });

    footer.querySelector('.dp-fbtn--fill').addEventListener('click', function () {
      instance.close();
    });
  }

  function initPicker(inputId, extra) {
    var input = document.getElementById(inputId);
    var trigger = document.querySelector('[data-datepicker-for="' + inputId + '"]');
    if (!input || !trigger) return null;

    var opts = Object.assign({
      locale: koLocale,
      dateFormat: 'Y-m-d',
      allowInput: false,
      clickOpens: true,
      disableMobile: true,
      closeOnSelect: false,
      onOpen: function (selectedDates, dateStr, inst) {
        inst._dpOpenBackup = inst.selectedDates.map(function (date) {
          return new Date(date.getTime());
        });
        applyDpCalendar(inst);
      },
      onMonthChange: function (selectedDates, dateStr, inst) {
        applyDpCalendar(inst);
      },
      onYearChange: function (selectedDates, dateStr, inst) {
        applyDpCalendar(inst);
      },
      onReady: function (selectedDates, dateStr, inst) {
        applyDpCalendar(inst);
        injectDpFooter(inst);
      }
    }, extra || {});

    var picker = flatpickr(input, opts);
    trigger.addEventListener('click', function () {
      if (input.disabled) return;
      picker.toggle();
    });
    return picker;
  }

  window.initPicker = initPicker;

  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('input-datepicker')) {
      initPicker('input-datepicker');
    }
    if (document.getElementById('input-datepicker-range')) {
      initPicker('input-datepicker-range', {
        mode: 'range',
        defaultDate: ['2024-12-12', '2024-12-21']
      });
    }
  });
})();
