# Checkbox

체크박스 컴포넌트입니다. 기본형 / 칩형 / 리스트형 3가지 variant를 제공합니다.

---

## variant

### 기본형 (Basic)

정사각형 인디케이터와 텍스트 레이블로 구성된 클래식 체크박스입니다. 폼 입력, 설정, 테이블 등 일반적인 다중 선택 인터페이스에 사용합니다.

| 사이즈 | input 클래스 | label 폰트 |
|---|---|---|
| sm | `checkbox-basic checkbox-basic-sm` | `body3-r-14 color-slate-700` |
| md | `checkbox-basic checkbox-basic-md` | `body2-r-16 color-slate-700` |
| lg | `checkbox-basic checkbox-basic-lg` | `body1-r-18 color-slate-700` |

**대표 상황:** 폼 입력, 설정 화면, 테이블 행 선택, 필터

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

칩(Chip) 형태로 구성된 다중 선택 컨트롤입니다. 필터, 카테고리, 태그 선택 등 가로 스크롤 환경이나 모바일에서 빠른 다중 선택에 적합합니다.

**대표 상황:** 태그 선택, 카테고리 필터, 가로 스크롤 다중 선택, 모바일 빠른 선택

```html
<label class="checkbox-chip-label body2-r-16">
  <input type="checkbox" class="checkbox-chip">
  <span class="body2-m-16">옵션 1</span>
</label>
```

---

### 리스트형 (List)

전체 행이 선택 영역인 리스트형 컨트롤입니다. 모바일 및 반응형 환경에서 넓은 터치 영역을 제공하며, 옵션 목록 다중 선택 UI에 적합합니다.

**대표 상황:** 모바일 옵션 목록, 반응형 다중 선택, 넓은 터치 영역이 필요한 경우

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

> 파일: `js/checkbox.js`

```javascript
// indeterminate는 반드시 JS로만 설정 가능
const master = document.getElementById('checkall-master');
master.indeterminate = true;
```

---

## 규칙

- basic형은 `input`과 `label` 반드시 `id`/`for`로 연결
- chip/list형은 `label`이 `input`을 감싸는 구조 사용 (id/for 분리 구조 사용 금지)
- 전체선택 패턴 사용 시 master와 item `id` 모두 고유하게 부여
- `indeterminate` 상태는 반드시 JS로 설정 (HTML 속성으로 불가)
- 구분선에 `role="presentation"`, `aria-hidden="true"` 반드시 포함
