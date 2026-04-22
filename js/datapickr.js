function datePicker() {
  const dateInputs = document.querySelectorAll(".date-box");
  const dateTimeInputs = document.querySelectorAll(".date-box-local");
  if ((!dateInputs.length && !dateTimeInputs.length) || typeof flatpickr !== "function") return;

  const koreanLocale = {
    weekdays: {
      shorthand: ["일", "월", "화", "수", "목", "금", "토"],
      longhand: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
    },
    months: {
      shorthand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      longhand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
    },
    firstDayOfWeek: 0,
    rangeSeparator: " ~ ",
    weekAbbreviation: "주",
    scrollTitle: "스크롤하여 변경",
    toggleTitle: "클릭하여 전환",
    amPM: ["오전", "오후"],
    yearAriaLabel: "연도"
  };

  flatpickr.localize(koreanLocale);

  const createCalendarFooter = (instance) => {
    if (!instance?.calendarContainer || instance.calendarContainer.querySelector(".flatpickr-footer")) return;

    const footer = document.createElement("div");
    footer.className = "flatpickr-footer";

    const todayButton = document.createElement("button");
    todayButton.type = "button";
    todayButton.className = "flatpickr-footer-btn flatpickr-today-btn";
    todayButton.textContent = "오늘";
    todayButton.addEventListener("click", () => {
      instance.setDate(new Date(), true);
    });

    const actionGroup = document.createElement("div");
    actionGroup.className = "flatpickr-footer-actions";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "flatpickr-footer-btn flatpickr-cancel-btn";
    cancelButton.textContent = "취소";
    cancelButton.addEventListener("click", () => {
      instance.clear();
      instance.close();
    });

    actionGroup.append(cancelButton);
    footer.append(todayButton, actionGroup);
    instance.calendarContainer.append(footer);
  };

  const initPicker = (targetInput, options) => {
    if (targetInput._flatpickr) return;

    targetInput.setAttribute("type", "text");

    flatpickr(targetInput, {
      locale: koreanLocale,
      disableMobile: true,
      monthSelectorType: "dropdown",
      static: false,
      onReady: function (selectedDates, dateStr, instance) {
        createCalendarFooter(instance);
      },
      ...options
    });
  };

  dateInputs.forEach((dateInput) => {
    initPicker(dateInput, {
      dateFormat: "Y-m-d"
    });
  });

  dateTimeInputs.forEach((dateInput) => {
    initPicker(dateInput, {
      enableTime: true,
      time_24hr: true,
      dateFormat: "Y-m-d H:i"
    });
  });
}

document.addEventListener("DOMContentLoaded", datePicker);