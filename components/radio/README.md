# Radio

라디오 컴포넌트입니다. 기본형 / 세그먼트형 / 토글형 3가지 variant를 제공합니다. **단일 선택 전용**입니다.

---

## variant

### 기본형 (Basic)

원형 인디케이터와 텍스트 레이블로 구성된 클래식 라디오입니다. 폼 입력, 설정, 옵션 선택 등 일반적인 단일 선택 인터페이스에 사용합니다.

| 사이즈 | input 클래스 | label 폰트 |
|---|---|---|
| sm | `radio-basic radio-basic-sm` | `body3-r-14 color-slate-700` |
| md | `radio-basic radio-basic-md` | `body2-r-16 color-slate-700` |
| lg | `radio-basic radio-basic-lg` | `body1-r-18 color-slate-700` |

**대표 상황:** 폼 입력, 설정 화면, 옵션 선택, 팝업 타입 선택

```html
<!-- 기본 -->
<div class="flex align-center gap-8">
  <input type="radio" name="radio-demo" class="radio-basic radio-basic-md" id="radio-1">
  <label for="radio-1" class="body2-r-16 color-slate-700">옵션 1</label>
</div>
<div class="flex align-center gap-8">
  <input type="radio" name="radio-demo" class="radio-basic radio-basic-md" id="radio-2">
  <label for="radio-2" class="body2-r-16 color-slate-700">옵션 2</label>
</div>

<!-- disabled -->
<div class="flex align-center gap-8">
  <input type="radio" name="radio-demo" class="radio-basic radio-basic-md" id="radio-3" disabled>
  <label for="radio-3" class="body2-r-16 color-slate-700">옵션 3</label>
</div>

<!-- disabled + checked -->
<div class="flex align-center gap-8">
  <input type="radio" name="radio-demo" class="radio-basic radio-basic-md" id="radio-4" disabled checked>
  <label for="radio-4" class="body2-r-16 color-slate-700">옵션 4</label>
</div>
```

---

### 세그먼트형 (Segment)

세그먼트(Segment) 형태로 구성된 단일 선택 컨트롤입니다. 2~5개의 짧은 옵션을 나란히 배치하여 빠르게 전환하는 UI에 적합합니다. 탭 대체, 뷰 모드 전환 등에 사용합니다.

**대표 상황:** 탭 대체, 뷰 모드 전환, 정렬/필터 옵션, 짧은 옵션 나열

```html
<div class="flex align-center gap-8 flex-wrap">
  <label class="radio-segment-label body2-r-16">
    <input type="radio" name="radio-segment" class="radio-segment">
    <span>옵션 1</span>
  </label>
  <label class="radio-segment-label body2-r-16">
    <input type="radio" name="radio-segment" class="radio-segment">
    <span>옵션 2</span>
  </label>
  <label class="radio-segment-label body2-r-16">
    <input type="radio" name="radio-segment" class="radio-segment" disabled>
    <span>옵션 3</span>
  </label>
</div>
```

---

### 토글형 (Toggle)

토글 그룹 형태로 구성된 단일 선택 컨트롤입니다. 2개 옵션 간 빠른 전환에 최적화되어 있습니다. ON/OFF, 보기 전환, A/B 선택 등 이진 선택에 적합합니다.

**대표 상황:** ON/OFF 전환, 보기 모드 전환, 2개 옵션 간 선택

```html
<div class="radio-toggle-group">
  <label class="radio-toggle-label body2-r-16">
    <input type="radio" name="radio-toggle" class="radio-toggle" checked>
    <span>옵션 1</span>
  </label>
  <label class="radio-toggle-label body2-r-16">
    <input type="radio" name="radio-toggle" class="radio-toggle">
    <span>옵션 2</span>
  </label>
</div>
```

---

## 규칙

- 같은 그룹의 radio는 반드시 동일한 `name` 속성 사용
- basic형은 `input`과 `label` 반드시 `id`/`for`로 연결
- segment/toggle형은 `label`이 `input`을 감싸는 구조 사용 (id/for 분리 구조 사용 금지)
- toggle형은 반드시 `radio-toggle-group`으로 감싸야 함
- 같은 `name` 그룹에 `name` 없이 사용 금지