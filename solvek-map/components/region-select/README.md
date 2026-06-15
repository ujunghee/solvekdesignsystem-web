# Region Select

주소 선택을 위한 3단(광역시・도 → 시・군・구 → 읍・면・동) 캐스케이딩 리스트박스입니다. 각 컬럼은 독립된 목록이며, 항목을 클릭하면 해당 컬럼 안에서만 선택 상태가 바뀝니다.

---

## 구조

```
div.region-select
├── div.region-select__tabs
│   ├── div.region-select__tab > span.heading10-sb-20.color-slate-900 (광역시・도)
│   ├── i.chevron-right-slate-700.region-select__divider-icon[aria-hidden=true]
│   ├── div.region-select__tab > span.heading10-sb-20.color-slate-900 (시・군・구)
│   ├── i.chevron-right-slate-700.region-select__divider-icon[aria-hidden=true]
│   └── div.region-select__tab > span.heading10-sb-20.color-slate-900 (읍・면・동)
└── div.region-select__body
    ├── ul.region-select__column[role=listbox][aria-label="광역시・도 선택"]
    │   └── li.region-select__item[role=option][aria-selected] × n
    ├── ul.region-select__column[role=listbox][aria-label="시・군・구 선택"]
    │   └── li.region-select__item[role=option][aria-selected] × n
    └── ul.region-select__column[role=listbox][aria-label="읍・면・동 선택"]
        └── li.region-select__item[role=option][aria-selected] × n
```

- 항목 높이: `4rem` (40px)
- 컬럼 최대 높이: `28rem` (280px), 넘으면 `overflow-y: auto`
- 탭 높이: `6.4rem` (64px)
- 탭 영역과 본문은 동일한 3컬럼 그리드(`repeat(3, 1fr)`)로 정렬

---

## 사용 예시

```html
<div class="region-select">
  <div class="region-select__tabs">
    <div class="region-select__tab">
      <span class="heading10-sb-20 color-slate-900">광역시・도</span>
    </div>
    <i class="chevron-right-slate-700 region-select__divider-icon" aria-hidden="true"></i>
    <div class="region-select__tab">
      <span class="heading10-sb-20 color-slate-900">시・군・구</span>
    </div>
    <i class="chevron-right-slate-700 region-select__divider-icon" aria-hidden="true"></i>
    <div class="region-select__tab">
      <span class="heading10-sb-20 color-slate-900">읍・면・동</span>
    </div>
  </div>

  <div class="region-select__body">
    <ul class="region-select__column" role="listbox" aria-label="광역시・도 선택">
      <li class="region-select__item active" role="option" aria-selected="true">서울특별시</li>
      <li class="region-select__item" role="option" aria-selected="false">부산광역시</li>
      <li class="region-select__item" role="option" aria-selected="false">대구광역시</li>
    </ul>
    <ul class="region-select__column" role="listbox" aria-label="시・군・구 선택">
      <li class="region-select__item active" role="option" aria-selected="true">종로구</li>
      <li class="region-select__item" role="option" aria-selected="false">중구</li>
    </ul>
    <ul class="region-select__column" role="listbox" aria-label="읍・면・동 선택">
      <li class="region-select__item active" role="option" aria-selected="true">청운효자동</li>
      <li class="region-select__item" role="option" aria-selected="false">사직동</li>
    </ul>
  </div>
</div>
```

---

## JS — 컬럼별 단일 선택

```javascript
document.querySelectorAll('.region-select__column').forEach((column) => {
  column.querySelectorAll('.region-select__item').forEach((item) => {
    item.addEventListener('click', () => {
      column.querySelectorAll('.region-select__item').forEach((el) => {
        el.classList.remove('active');
        el.setAttribute('aria-selected', 'false');
      });
      item.classList.add('active');
      item.setAttribute('aria-selected', 'true');
    });
  });
});
```

---

## 규칙

- 루트는 `div.region-select`, 내부 구조는 `region-select__*` 패턴만 사용
- 각 컬럼은 `ul[role=listbox][aria-label]` + `li[role=option][aria-selected]` 구조 필수
- 탭 레이블은 `heading10-sb-20 color-slate-900` 사용
- 구분 아이콘은 `chevron-right-slate-700` + `aria-hidden="true"` 필수
- 항목 높이는 `4rem`(40px) 고정, 한 컬럼 내 항목은 1개만 `active`/`aria-selected="true"` 상태
- 컬럼 간 구분은 1px `slate-100` 좌측 border
- 정의되지 않은 임의 클래스 생성 금지 (`region-select__*` 패턴만 사용)
