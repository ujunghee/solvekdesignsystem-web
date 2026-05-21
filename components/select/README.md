# Select

드롭다운 선택 컴포넌트입니다. 네이티브 `<select>` 요소 기반으로 단일 옵션 선택에 사용합니다.

---

## 네이밍 패턴

```
select-{size}
```

---

## 사이즈

| 사이즈 | 클래스 | 높이 |
|---|---|---|
| 48 | `select-48` | 4.8rem |
| 40 | `select-40` | 4.0rem |
| 36 | `select-36` | 3.6rem |

---

## 구조

```
select-wrapper
├── label (for → select id)
├── select.select-{size}.flex.align-center
│   ├── option (placeholder: disabled selected hidden)
│   ├── option
│   └── ...
└── p.error-message
```

---

## 상태

| 상태 | 처리 방식 |
|---|---|
| 기본 | `select-wrapper` |
| 에러 | `select-wrapper is-error` |
| disabled | `select`에 `disabled` 속성 추가 |
| hover / focus | CSS 내부 처리 (클래스 추가 금지) |

> `is-error`는 wrapper에만 추가하면 select 테두리, error-message 노출이 자동으로 제어됩니다.

---

## 사용 예시

```html
<!-- 기본 (48) -->
<div class="select-wrapper">
  <label class="body2-m-16 color-slate-900 mb-6 block" for="select-48">라벨</label>
  <select id="select-48" class="select-48 flex align-center" name="select-48" aria-label="선택">
    <option value="" disabled selected hidden>선택하세요</option>
    <option value="1">옵션 1</option>
    <option value="2">옵션 2</option>
    <option value="3">옵션 3</option>
  </select>
</div>

<!-- 기본 (40) -->
<div class="select-wrapper">
  <label class="body2-m-16 color-slate-900 mb-6 block" for="select-40">라벨</label>
  <select id="select-40" class="select-40 flex align-center" name="select-40" aria-label="선택">
    <option value="" disabled selected hidden>선택하세요</option>
    <option value="1">옵션 1</option>
    <option value="2">옵션 2</option>
  </select>
</div>

<!-- 기본 (36) -->
<div class="select-wrapper">
  <label class="body2-m-16 color-slate-900 mb-6 block" for="select-36">라벨</label>
  <select id="select-36" class="select-36 flex align-center" name="select-36" aria-label="선택">
    <option value="" disabled selected hidden>선택하세요</option>
    <option value="1">옵션 1</option>
    <option value="2">옵션 2</option>
  </select>
</div>

<!-- 에러 -->
<div class="select-wrapper is-error">
  <label class="body2-m-16 color-slate-900 mb-6 block" for="select-error">라벨</label>
  <select id="select-error" class="select-40 flex align-center" name="select-error" aria-invalid="true" aria-label="선택">
    <option value="" disabled selected hidden>선택하세요</option>
    <option value="1">옵션 1</option>
    <option value="2">옵션 2</option>
  </select>
  <p class="error-message">에러 메시지</p>
</div>

<!-- disabled -->
<div class="select-wrapper">
  <label class="body2-m-16 color-slate-900 mb-6 block" for="select-disabled">라벨</label>
  <select id="select-disabled" class="select-40 flex align-center" name="select-disabled" aria-label="선택" disabled>
    <option value="" disabled selected hidden>선택하세요</option>
    <option value="1">옵션 1</option>
  </select>
</div>
```

---

## 접근성

- `label`의 `for`와 `select`의 `id` 반드시 일치
- `aria-label` 반드시 포함
- 에러 상태 시 `select`에 `aria-invalid="true"` 추가

---

## 규칙

- `wrapper` 없이 `select` 단독 사용 금지
- 에러 상태는 `wrapper`에만 `is-error` 토글
- `error-message`는 항상 DOM에 존재, 인라인 스타일로 show/hide 금지
- placeholder는 `<option value="" disabled selected hidden>` 조합으로 구현
- hover / focus / disabled는 CSS 내부 처리, 클래스 추가 금지