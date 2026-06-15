# Chip

선택/태그를 표시하는 작은 칩 컴포넌트입니다. `.chip` 클래스와 레이아웃 유틸리티 클래스 조합으로 구성하며, 텍스트만 있는 기본형과 삭제 아이콘이 있는 형태를 지원합니다.

---

## 구조

```
div.chip.border-slate-500.border.h-36.w-fit.px-12.radius-md-6.flex.align-center.justify-center.bg-white
└── span.body2-r-16.color-slate-700 (칩 텍스트)

div.chip(...).gap-6
├── span.body2-r-16.color-slate-700
└── button.chips-close-icon > span.blind (삭제)

ul.flex.gap-8
└── li > div.chip(...)
```

---

## 사용 예시

### 기본 칩

```html
<div class="chip border-slate-500 border h-36 w-fit px-12 radius-md-6 flex align-center justify-center bg-white">
  <span class="body2-r-16 color-slate-700">Chip Text</span>
</div>
```

### 삭제 아이콘 칩

```html
<div class="chip border-slate-500 border h-36 w-fit px-12 radius-md-6 gap-6 flex align-center justify-center bg-white">
  <span class="body2-r-16 color-slate-700">Chip Text</span>
  <button type="button" class="chips-close-icon">
    <span class="blind">삭제</span>
  </button>
</div>
```

### 칩 목록

```html
<ul class="flex gap-8">
  <li>
    <div class="chip border-slate-500 border h-36 w-fit px-12 radius-md-6 flex align-center justify-center bg-white">
      <span class="body2-r-16 color-slate-700">Chip Text</span>
    </div>
  </li>
  <li>
    <div class="chip border-slate-500 border h-36 w-fit px-12 radius-md-6 flex align-center justify-center bg-white">
      <span class="body2-r-16 color-slate-700">Chip Text</span>
    </div>
  </li>
</ul>
```

---

## 접근성

- 삭제 버튼은 `button[type="button"]` + `span.blind`로 "삭제" 텍스트 제공
- 칩 텍스트는 `span.body2-r-16.color-slate-700` 사용

---

## 규칙

- `.chip` + `border-slate-500 border h-36 w-fit px-12 radius-md-6 flex align-center justify-center bg-white` 조합 유지
- 삭제 아이콘이 있는 칩은 `gap-6` 추가, `chips-close-icon` 버튼 사용
- 여러 개 나열 시 `ul.flex.gap-8 > li` 구조 사용
- 선택 입력(체크박스)이 필요한 태그 필터는 `components/checkbox`의 chip variant(`checkbox-chip-label`/`checkbox-chip`)를 사용하고, 단순 표시용 칩은 이 컴포넌트 사용
