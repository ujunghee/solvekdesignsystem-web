# Textarea

텍스트 입력 영역 컴포넌트입니다.

---

## 구조

```
textarea-wrapper
├── label
├── div.relative
│   ├── textarea.textarea-field-default
│   └── p (글자수 카운터)
└── p.error-message
```

---

## 상태

| 상태 | 처리 방식 |
|---|---|
| 기본 | `textarea-wrapper` |
| 에러 | `textarea-wrapper is-error` |
| disabled | `textarea-field-default`에 `disabled` 속성 추가 |
| hover / focus | CSS 내부 처리 (클래스 추가 금지) |

> `is-error`는 wrapper에만 추가하면 textarea 테두리, counter 색상, error-message 노출이 전부 자동으로 제어됩니다.

---

## 사용 예시

```html
<!-- 기본 -->
<div class="textarea-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <div class="relative">
    <textarea class="textarea-field-default" placeholder="내용을 작성해주세요"></textarea>
    <p class="absolute right-16 bottom-16 body2-r-16 color-slate-400">
      <span class="counter">0</span>&nbsp;/&nbsp;100
    </p>
  </div>
  <p class="error-message">에러 메시지</p>
</div>

<!-- 에러 -->
<div class="textarea-wrapper is-error">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <div class="relative">
    <textarea class="textarea-field-default" placeholder="내용을 작성해주세요"></textarea>
    <p class="absolute right-16 bottom-16 body2-r-16 color-slate-400">
      <span class="counter">0</span>&nbsp;/&nbsp;100
    </p>
  </div>
  <p class="error-message">에러 메시지</p>
</div>

<!-- disabled -->
<div class="textarea-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <div class="relative">
    <textarea class="textarea-field-default" placeholder="내용을 작성해주세요" disabled></textarea>
  </div>
</div>
```

---

## JS 글자수 카운터

```javascript
const textarea = document.querySelectorAll('.textarea-field-default');
const counter = document.querySelectorAll('.counter');
const textareaWrapper = document.querySelectorAll('.textarea-wrapper');

const maxLength = 100;

textarea.forEach((el, index) => {
  el.addEventListener('input', () => {
    counter[index].textContent = el.value.length;
    if (el.value.length > maxLength) {
      textareaWrapper[index].classList.add('is-error');
    } else {
      textareaWrapper[index].classList.remove('is-error');
    }
  });
});
```

---

## 규칙

- `wrapper` 없이 `textarea` 단독 사용 금지
- 에러 상태는 `wrapper`에만 `is-error` 토글
- `error-message`는 항상 DOM에 존재, 인라인 스타일로 show/hide 금지
- hover / focus / disabled는 CSS 내부 처리, 클래스 추가 금지