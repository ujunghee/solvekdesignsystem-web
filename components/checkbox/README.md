# Checkbox

체크박스 컴포넌트입니다. 기본형 / 칩형 / 리스트형 3가지 variant를 제공합니다.

---

## variant

### 기본형 (Basic)

input과 label을 분리한 구조입니다.

**언제 쓰나요?** 목록, 폼, 필터 등 일반적인 다중 선택

| 사이즈 | input 클래스 | label 폰트 |
|---|---|---|
| sm | `checkbox-basic checkbox-basic-sm` | `body3-r-14 color-slate-700` |
| md | `checkbox-basic checkbox-basic-md` | `body2-r-16 color-slate-700` |
| lg | `checkbox-basic checkbox-basic-lg` | `body1-r-18 color-slate-700` |

```html
<!-- 기본 -->
<div class="flex align-center gap-8">
  <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="checkbox-1">
  <label for="checkbox-1" class="body2-r-16 color-slate-700">옵션 1</label>
</div>

<!-- disabled -->
<div class="flex align-center gap-8">
  <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="checkbox-2" disabled>
  <label for="checkbox-2" class="body2-r-16 color-slate-700">옵션 2</label>
</div>

<!-- disabled + checked -->
<div class="flex align-center gap-8">
  <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="checkbox-3" disabled checked>
  <label for="checkbox-3" class="body2-r-16 color-slate-700">옵션 3</label>
</div>
```

---

### 칩형 (Chip)

label이 input을 감싸는 구조입니다.

**언제 쓰나요?** 태그 선택, 카테고리 필터 등 시각적으로 강조된 다중 선택

```html
<label class="checkbox-chip-label body2-r-16">
  <input type="checkbox" class="checkbox-chip">
  <span class="body2-m-16">옵션 1</span>
</label>
```

---

### 리스트형 (List)

label이 input을 감싸는 구조입니다.

**언제 쓰나요?** 목록 항목 전체를 클릭 영역으로 쓸 때

```html
<!-- 기본 -->
<label class="checkbox-list-label body2-r-16">
  <input type="checkbox" class="checkbox-list">
  <span class="body2-m-16">옵션 1</span>
</label>

<!-- disabled -->
<label class="checkbox-list-label body2-r-16">
  <input type="checkbox" class="checkbox-list" disabled>
  <span class="body2-m-16">옵션 2</span>
</label>

<!-- checked -->
<label class="checkbox-list-label body2-r-16">
  <input type="checkbox" class="checkbox-list" checked>
  <span class="body2-m-16">옵션 3</span>
</label>
```

---

## 전체선택 패턴 (Check All)

master 체크박스와 item 체크박스를 조합한 패턴입니다.

| 상태 | master | items |
|---|---|---|
| 전체 미선택 | unchecked | 모두 unchecked |
| 전체 선택 | checked | 모두 checked |
| 일부 선택 | indeterminate | 일부 checked |

```html
<div class="flex align-center gap-8">
  <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="checkall-master">
  <label for="checkall-master" class="body2-r-16 color-slate-700">전체 선택</label>
</div>

<!-- 구분선 -->
<div class="w-full border-b border-slate-200 my-12" role="presentation" aria-hidden="true"></div>

<!-- item 목록 -->
<div class="grid-column-default gap-x-16 gap-y-10">
  <div class="grid-column-4 flex align-center gap-8">
    <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="checkall-item-1">
    <label for="checkall-item-1" class="body2-r-16 color-slate-700">항목 1</label>
  </div>
  <div class="grid-column-4 flex align-center gap-8">
    <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="checkall-item-2">
    <label for="checkall-item-2" class="body2-r-16 color-slate-700">항목 2</label>
  </div>
</div>
```

### JS — indeterminate 설정

```javascript
// indeterminate는 반드시 JS로만 설정 가능
const master = document.getElementById('checkall-master');
master.indeterminate = true;
```

---

## 규칙

- basic형은 `input`과 `label` 반드시 `id`/`for`로 연결
- chip/list형은 `label`이 `input`을 감싸는 구조 사용
- 전체선택 패턴 사용 시 master와 item `id` 모두 고유하게 부여
- `indeterminate` 상태는 반드시 JS로 설정 (HTML 속성으로 불가)
- 구분선에 `role="presentation"`, `aria-hidden="true"` 반드시 포함