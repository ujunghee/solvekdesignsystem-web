# Component API Guide

이 문서는 개발자가 빠르게 사용할 수 있는 공통 컴포넌트 API를 정의합니다.
기존 유틸 클래스는 유지하고, 우선 아래 semantic 클래스 사용을 권장합니다.

## Button

### Base
- `btn`

### Variants
- `btn-primary`: 주요 액션
- `btn-outline`: 보조 액션
- `btn-neutral`: 중립 액션

### Example
```html
<button type="button" class="btn btn-primary">저장</button>
<button type="button" class="btn btn-outline">취소</button>
<button type="button" class="btn btn-neutral">목록</button>
```

---

## Input / Select / Textarea

### Base
- Input: `input-field`
- Select: `select-field`
- Textarea: `textarea-field`

### States
- 에러: `.is-error`
- 비활성화: `disabled`

### Helper text
- 안내 문구: `field-hint`
- 에러 문구: `field-error`

### Example
```html
<input class="input-field" type="text" placeholder="이름을 입력하세요" />
<p class="field-hint">한글/영문 20자 이내</p>

<input class="input-field is-error" type="text" placeholder="이메일" />
<p class="field-error">올바른 이메일 형식이 아닙니다.</p>
```

---

## Usage Rules

- 새 화면/기능은 semantic 클래스 우선 사용
- 유틸 클래스는 레이아웃 보조 용도로만 제한
- 컴포넌트 상태는 `default/hover/focus/error/disabled` 5개를 기준으로 구현
