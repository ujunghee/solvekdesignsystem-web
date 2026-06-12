# View Toggle (보기 방식 전환)

콘텐츠를 카드형/리스트형 등으로 전환해서 보는 보기 방식 토글 버튼 그룹입니다.

---

## 구조

```
div.view-toggle[role=group][aria-label="보기 방식"]
└── button.view-toggle__btn[type=button][aria-pressed]
    ├── i.{icon}-blue-icon.view-toggle__icon--active
    ├── i.{icon}-gray-icon.view-toggle__icon--inactive
    └── span.body2-r-16.color-slate-700 (라벨 텍스트)
```

---

## 사용 예시

```html
<div class="view-toggle" role="group" aria-label="보기 방식">
  <button type="button" class="view-toggle__btn active" aria-pressed="true">
    <i class="dashboards-blue-icon view-toggle__icon view-toggle__icon--active" aria-hidden="true"></i>
    <i class="dashboards-gray-icon view-toggle__icon view-toggle__icon--inactive" aria-hidden="true"></i>
    <span class="body2-r-16 color-slate-700">카드형</span>
  </button>
  <button type="button" class="view-toggle__btn" aria-pressed="false">
    <i class="list-blue-icon view-toggle__icon view-toggle__icon--active" aria-hidden="true"></i>
    <i class="list-gray-icon view-toggle__icon view-toggle__icon--inactive" aria-hidden="true"></i>
    <span class="body2-r-16 color-slate-700">리스트형</span>
  </button>
</div>
```

---

## 동작 (JS)

선택된 버튼에 `.active` 클래스를 토글하고 `aria-pressed`를 동기화합니다. 한 그룹 내에서 하나의 버튼만 선택 상태를 가집니다.

```js
document.querySelectorAll('.view-toggle').forEach((group) => {
  group.querySelectorAll('.view-toggle__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.view-toggle__btn').forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    });
  });
});
```

---

## 아이콘

| 클래스 | 크기 | 색상 | 설명 |
|---|---|---|---|
| `dashboards-blue-icon` | 20×20 | `#1A76FF` | 카드형 보기 (선택됨) |
| `dashboards-gray-icon` | 20×20 | `#64748B` | 카드형 보기 (선택 안 됨) |
| `list-blue-icon` | 20×20 | `#1A76FF` | 리스트형 보기 (선택됨) |
| `list-gray-icon` | 20×20 | `#64748B` | 리스트형 보기 (선택 안 됨) |

각 버튼은 active/inactive 색상 아이콘 2개를 겹쳐두고 `.active` 상태에 따라 CSS로 표시 여부를 전환합니다.

---

## 접근성

- 그룹 wrapper: `role="group"` + `aria-label="보기 방식"`
- 각 버튼: `button[type="button"]` + `aria-pressed="true|false"`
- 아이콘은 장식용이므로 `aria-hidden="true"`, 의미는 `span` 텍스트(카드형/리스트형)로 전달

---

## 규칙

- `div.view-toggle` 안에 `button.view-toggle__btn`만 위치
- 버튼마다 active/inactive 아이콘 2개 + 라벨 `span.body2-r-16.color-slate-700`
- `.active` 클래스와 `aria-pressed`는 항상 JS로 동기화
- 정의된 아이콘 클래스(`dashboards-blue/gray-icon`, `list-blue/gray-icon`)만 사용
