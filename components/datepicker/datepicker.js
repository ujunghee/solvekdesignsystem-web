document.addEventListener('DOMContentLoaded', function() {
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
        var t = new Date();
        if (instance.config.mode === 'range') {
          instance.setDate([t, t], false);
        } else {
          instance.setDate(t, false);
        }
        instance.jumpToDate(t);
      });
  
      footer.querySelector('.dp-fbtn--line').addEventListener('click', function () {
        var b = instance._dpOpenBackup || [];
        if (!b.length) {
          instance.clear(false);
        } else if (instance.config.mode === 'range') {
          instance.setDate(b.length > 1 ? [b[0], b[1]] : b[0], false);
        } else {
          instance.setDate(b[0], false);
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
      if (!input || !trigger) return;
  
      var opts = Object.assign({
        locale: koLocale,
        dateFormat: 'Y-m-d',
        allowInput: false,
        clickOpens: true,
        disableMobile: true,
        closeOnSelect: false,
        onOpen: function (selectedDates, dateStr, inst) {
          inst._dpOpenBackup = inst.selectedDates.map(function (d) {
            return new Date(d.getTime());
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
  
      var fp = flatpickr(input, opts);
      trigger.addEventListener('click', function () {
        fp.toggle();
      });
    }
  
    initPicker('input-datepicker');
    initPicker('input-datepicker-range', {
      mode: 'range',
      defaultDate: ['2024-12-12', '2024-12-21']
    });
  })();
})