# Applied Filter (적용된 필터)

검색 결과 영역 상단에 표시되는 "적용된 필터" 요약 바입니다. 현재 적용된 필터 조건을 칩(chip)으로 나열하고, 전체 초기화 버튼을 제공합니다. `components/search-filter`(좌측 사이드바 필터)와 함께 결과 목록 위쪽에 배치합니다.

---

## 구조

```
div.applied-filter.bg-slate-50.radius-md-8.px-16.py-12.flex.justify-between.align-center.flex-wrap.gap-8
├── div.applied-filter__list.flex.align-center.flex-wrap.gap-8
│   ├── span.applied-filter__label.body2-sb-16.color-slate-900
│   │   └── span.applied-filter__count.color-blue-500 (적용 개수)
│   └── ul.flex.flex-wrap.gap-8
│       └── li > div.chip(components/chip with_close)
└── button.applied-filter__reset.transparent-button-32.flex.align-center.gap-10[data-applied-filter-reset]
    └── components/button icon_button.types.reset 패턴 (applied-reset-icon)
```

---

## 사이즈

| 속성 | 값 |
|---|---|
| padding | `px-16 py-12` |
| radius | `radius-md-8` |
| 배경 | `bg-slate-50` |
| 라벨 | `body2-sb-16 color-slate-900` |
| 개수 강조 | `color-blue-500` |
| 칩 | `components/chip` 스펙 그대로 (`h-36 px-12 radius-md-6 border border-slate-500 gap-6` + `chips-close-icon`) |
| 초기화 버튼 | `transparent-button-32` + `applied-reset-icon` |

---

## 사용 예시

```html
<div class="applied-filter bg-slate-50 radius-md-8 px-16 py-12 flex justify-between align-center flex-wrap gap-8">
  <div class="applied-filter__list flex align-center flex-wrap gap-8">
    <span class="applied-filter__label body2-sb-16 color-slate-900">적용된 필터 <span class="applied-filter__count color-blue-500">1</span></span>
    <ul class="flex flex-wrap gap-8">
      <li>
        <div class="chip border-slate-500 border h-36 w-fit px-12 radius-md-6 gap-6 flex align-center justify-center">
          <span class="body2-r-16 color-slate-700">지정유산</span>
          <button type="button" class="chips-close-icon" data-applied-filter-remove>
            <span class="blind">지정유산 필터 삭제</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
  <button type="button" class="applied-filter__reset transparent-button-32 flex align-center gap-10" data-applied-filter-reset>
    <span class="body2-m-16 color-slate-500">초기화</span>
    <i class="applied-reset-icon" aria-hidden="true"></i>
    <span class="blind">적용된 필터 초기화</span>
  </button>
</div>
```

여러 칩이 적용된 경우 `ul > li`를 반복하고 `applied-filter__count`를 적용 개수에 맞게 갱신합니다.

---

## 상태

| 상태 | 처리 방식 |
|---|---|
| 칩 개별 삭제 | 칩의 `chips-close-icon` 버튼(`data-applied-filter-remove`) 클릭 시 해당 `li` 제거 + `applied-filter__count` 갱신 |
| 전체 초기화 | `applied-filter__reset`(`data-applied-filter-reset`) 클릭 시 모든 칩 제거 + `count` 0 |
| 빈 상태 | 칩이 0개가 되면 `.applied-filter` 전체를 `hidden` 처리 |

```js
const appliedFilter = document.querySelector('.applied-filter');
if (appliedFilter) {
  const countEl = appliedFilter.querySelector('.applied-filter__count');
  const list = appliedFilter.querySelector('.applied-filter__list ul');

  function updateAppliedFilterCount() {
    const count = list.querySelectorAll('li').length;
    countEl.textContent = count;
    appliedFilter.hidden = count === 0;
  }

  appliedFilter.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-applied-filter-remove]');
    if (removeBtn) {
      removeBtn.closest('li').remove();
      updateAppliedFilterCount();
    }
  });

  document.querySelector('[data-applied-filter-reset]')?.addEventListener('click', () => {
    list.querySelectorAll('li').forEach((li) => li.remove());
    updateAppliedFilterCount();
  });
}
```

---

## 접근성

- 개별 삭제 버튼은 `button.chips-close-icon` + `span.blind`로 "{필터명} 필터 삭제" 텍스트 제공
- 전체 초기화 버튼은 `span.blind`로 "적용된 필터 초기화" 텍스트 제공
- 장식용 아이콘(`applied-reset-icon`)은 `aria-hidden="true"`

---

## 규칙

- `search-filter`와 함께 사용 시 결과 목록 상단에 배치
- 칩은 `components/chip`의 with_close 구조 그대로 사용 (`span` + `button.chips-close-icon` + `span.blind`)
- 초기화 버튼은 `components/button`의 reset 아이콘 버튼 패턴(`transparent-button-32` + `applied-reset-icon` + `span.blind`) 그대로 사용
- `applied-filter__count`는 `color-blue-500`만 사용
- 칩이 0개이면 `.applied-filter` 전체를 `hidden` 처리
- `applied-filter__*` 외 임의 BEM 클래스 추가 금지
