# Datepicker

날짜 선택 입력 컴포넌트입니다. flatpickr 라이브러리 기반으로 동작합니다.

---

## 의존성

```html
<!-- CSS -->
<link rel="stylesheet" href="/css/component/input.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/ko.js"></script>

<script src="/js/datepicker.js"></script>
```

---

## variant

| 종류 | 설명 |
|---|---|
| single | 단일 날짜 선택 |
| range | 기간 선택 (시작일 ~ 종료일) |

---

## 구조

```
input-wrapper
└── div.relative.w-fit.flex.align-center
    ├── input.input-field-default-48.input-with-trailing-icon
    └── button[data-datepicker-for] (캘린더 트리거)
        └── i.calendar-icon
```

> `input id`, `label for`, `data-datepicker-for` 반드시 같은 값으로 일치시켜야 합니다.

---

## 사용 예시

```html
<!-- 단일 날짜 -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block" for="input-datepicker">날짜</label>
  <div class="relative w-fit flex align-center">
    <input type="text" id="input-datepicker"
      class="input-field-default-48 input-with-trailing-icon"
      placeholder="날짜를 선택해주세요"
      autocomplete="off">
    <button type="button" class="absolute right-0 top-50 translate-y-50"
      data-datepicker-for="input-datepicker">
      <i class="calendar-icon" aria-hidden="true"></i>
      <span class="blind">날짜 선택</span>
    </button>
  </div>
</div>

<!-- 기간 선택 -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block" for="input-datepicker-range">기간</label>
  <div class="relative w-fit flex align-center">
    <input type="text" id="input-datepicker-range"
      class="input-field-default-48 input-with-trailing-icon"
      placeholder="시작일 ~ 종료일"
      autocomplete="off">
    <button type="button" class="absolute right-0 top-50 translate-y-50"
      data-datepicker-for="input-datepicker-range">
      <i class="calendar-icon" aria-hidden="true"></i>
      <span class="blind">기간 선택</span>
    </button>
  </div>
</div>
```

---

## JS 초기화

> 파일: `/js/datepicker.js`

```javascript
// 단일 날짜
initPicker('input-datepicker');

// 기간 선택
initPicker('input-datepicker-range', { mode: 'range' });
```

> `initPicker` 함수는 `datepicker.js`를 로드하면 사용할 수 있습니다.  
> flatpickr를 직접 호출하지 말고 반드시 `initPicker`를 사용하세요.

---

## 규칙

- `input id`, `label for`, `data-datepicker-for` 반드시 일치
- `autocomplete="off"` 필수
- `input-with-trailing-icon` 반드시 추가 (우측 padding 확보)
- `input type="date"` 사용 금지 (네이티브 캘린더 비활성화 불가)
- flatpickr 직접 호출 금지, 반드시 `initPicker` 함수 사용
- `closeOnSelect: true` 변경 금지 (확인 버튼 무력화됨)
