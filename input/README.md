# Input

텍스트 입력 필드 컴포넌트입니다.

---

## 네이밍 패턴

```
input-field-default-{size}
```

---

## 사이즈

| 사이즈 | 클래스 | 높이 |
|---|---|---|
| 대 | `input-field-default-lg` | 4.8rem |
| 중 | `input-field-default-md` | 4.0rem |
| 소 | `input-field-default-s` | 3.6rem |

---

## 상태

| 상태 | 처리 방식 |
|---|---|
| 기본 | `input-wrapper` |
| 에러 | `input-wrapper is-error` |
| disabled | `input` 에 `disabled` 속성 추가 |
| hover / focus | CSS 내부 처리 (클래스 추가 금지) |

> `is-error`는 wrapper에만 추가하면 테두리 색상, error-message 노출이 자동으로 제어됩니다.

---

## 사용 예시

```html
<!-- 기본 -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <input type="text" class="input-field-default-lg" placeholder="내용을 작성해주세요">
  <p class="error-message">에러 메시지</p>
</div>

<!-- 에러 -->
<div class="input-wrapper is-error">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <input type="text" class="input-field-default-lg" placeholder="내용을 작성해주세요">
  <p class="error-message">에러 메시지</p>
</div>

<!-- disabled -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <input type="text" class="input-field-default-lg" placeholder="내용을 작성해주세요" disabled>
</div>

<!-- 비밀번호 -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">비밀번호</label>
  <div class="relative w-fit flex align-center">
    <input type="password" class="input-field-default-lg" placeholder="비밀번호를 입력해주세요">
    <button type="button" class="absolute right-0 top-50 translate-y-50">
      <i class="eye-icon">
        <span class="blind">비밀번호 보기</span>
      </i>
    </button>
  </div>
</div>

<!-- 우측 아이콘 있는 경우 (datepicker 등) -->
<div class="relative w-fit flex align-center">
  <input type="text" class="input-field-default-lg input-with-trailing-icon" placeholder="날짜를 선택해주세요">
  <button type="button" class="absolute right-0 top-50 translate-y-50">
    <i class="calendar-icon" aria-hidden="true"></i>
    <span class="blind">날짜 선택</span>
  </button>
</div>
```

---

## JS — 비밀번호 토글

```javascript
const eyeIcon = document.querySelector('.eye-icon');
const passwordInput = document.querySelector('input[type="password"]');

eyeIcon.addEventListener('click', () => {
  eyeIcon.classList.toggle('active');
  passwordInput.type = eyeIcon.classList.contains('active') ? 'text' : 'password';
});
```

---

## 규칙

- `wrapper` 없이 `input` 단독 사용 금지
- 에러 상태는 `wrapper`에만 `is-error` 토글
- `error-message`는 항상 DOM에 존재, 인라인 스타일로 show/hide 금지
- 우측 아이콘 있을 경우 반드시 `input-with-trailing-icon` 추가
- hover / focus / disabled는 CSS 내부 처리, 클래스 추가 금지