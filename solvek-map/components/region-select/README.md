# Region Select

주소 선택을 위한 3단(광역시・도 → 시・군・구 → 읍・면・동) 드롭다운입니다. 탭을 클릭하면 해당 단계의 선택 목록(panel)이 탭 바 전체 너비로 아래에 나타나고, 항목을 선택하면 탭 레이블이 선택값으로 바뀌면서 panel이 닫힙니다.

---

## 구조

```
div.region-select
├── div.region-select__tabs (flex, border 1px slate-200, radius-md-8)
│   ├── button.region-select__tab[type=button][aria-haspopup=listbox][aria-expanded][aria-controls]
│   │   └── span.body3-r-14.color-slate-900 (광역시・도)
│   ├── i.chevron-right-slate-700.region-select__divider-icon[aria-hidden=true]
│   ├── button.region-select__tab[...] > span (시・군・구)
│   ├── i.chevron-right-slate-700.region-select__divider-icon[aria-hidden=true]
│   └── button.region-select__tab[...] > span (읍・면・동)
└── ul#region-select-panel-0.region-select__panel.z-index-10[role=listbox][aria-label="광역시・도 선택"]
    └── li.region-select__item[role=option][aria-selected] × n
```

- 탭 높이: `4rem` (40px)
- 항목 높이: `3.2rem` (32px)
- panel 너비: 탭 바와 동일한 `100%`
- panel 최대 높이: `28rem` (280px), 넘으면 `overflow-y: auto`
- 구분 아이콘은 flex 아이템으로 탭 사이에 인라인 배치 (absolute 위치 아님)

---

## 사용 예시

```html
<div class="region-select">
  <div class="region-select__tabs">
    <button type="button" class="region-select__tab" aria-haspopup="listbox" aria-expanded="false" aria-controls="region-select-panel-0">
      <span class="body3-r-14 color-slate-900">광역시・도</span>
    </button>
    <i class="chevron-right-slate-700 region-select__divider-icon" aria-hidden="true"></i>
    <button type="button" class="region-select__tab" aria-haspopup="listbox" aria-expanded="false" aria-controls="region-select-panel-1">
      <span class="body3-r-14 color-slate-900">시・군・구</span>
    </button>
    <i class="chevron-right-slate-700 region-select__divider-icon" aria-hidden="true"></i>
    <button type="button" class="region-select__tab" aria-haspopup="listbox" aria-expanded="false" aria-controls="region-select-panel-2">
      <span class="body3-r-14 color-slate-900">읍・면・동</span>
    </button>
  </div>

  <ul id="region-select-panel-0" class="region-select__panel z-index-10" role="listbox" aria-label="광역시・도 선택">
    <li class="region-select__item active" role="option" aria-selected="true">서울특별시</li>
    <li class="region-select__item" role="option" aria-selected="false">부산광역시</li>
    <li class="region-select__item" role="option" aria-selected="false">대구광역시</li>
  </ul>
</div>
```

---

## JS — 탭 클릭 시 panel 토글 + 항목 선택

```javascript
const tabs = document.querySelectorAll('.region-select__tab');
const panels = document.querySelectorAll('.region-select__panel');

function closeAllPanels() {
  tabs.forEach((tab) => tab.setAttribute('aria-expanded', 'false'));
  panels.forEach((panel) => panel.classList.remove('active'));
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    const panel = panels[index];
    const isOpen = panel.classList.contains('active');
    closeAllPanels();
    if (!isOpen) {
      tab.setAttribute('aria-expanded', 'true');
      panel.classList.add('active');
    }
  });
});

panels.forEach((panel, index) => {
  panel.querySelectorAll('.region-select__item').forEach((item) => {
    item.addEventListener('click', () => {
      panel.querySelectorAll('.region-select__item').forEach((el) => {
        el.classList.remove('active');
        el.setAttribute('aria-selected', 'false');
      });
      item.classList.add('active');
      item.setAttribute('aria-selected', 'true');
      tabs[index].querySelector('span').textContent = item.textContent;
      closeAllPanels();
    });
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.region-select')) closeAllPanels();
});
```

---

## 규칙

- 루트는 `div.region-select`, 내부 구조는 `region-select__*` 패턴만 사용
- 탭은 `button[type=button]` + `aria-haspopup="listbox"` + `aria-expanded` + `aria-controls` 필수, `div`/`span` 대체 금지
- 각 panel은 `ul[role=listbox][aria-label][id]` + `li[role=option][aria-selected]` 구조 필수
- 탭 레이블은 `body3-r-14 color-slate-900` 사용
- 구분 아이콘은 `chevron-right-slate-700` + `aria-hidden="true"` 필수, flex 아이템으로 인라인 배치
- panel에 `position: absolute` 적용 금지 — 일반 흐름으로 탭 바 아래에 배치
- 정의되지 않은 임의 클래스 생성 금지 (`region-select__*` 패턴 + `z-index-10` 유틸리티만 사용)
