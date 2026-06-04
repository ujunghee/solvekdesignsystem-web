# Modal

오버레이 위에 표시되는 다이얼로그 컴포넌트입니다. 일반 확인/완료 모달과 이벤트성 모달(바텀시트)을 지원합니다.

---

## 구조

```
modal-container          ← 오버레이 + 중앙(또는 하단) 정렬
└── modal shadow-lg      ← 다이얼로그 패널
    ├── modal__header    ← 제목 + 닫기 (일반 모달)
    ├── modal__content   ← 스크롤 영역
    └── modal__footer    ← 하단 액션
```

| 요소 | 클래스 | 설명 |
|---|---|---|
| 오버레이 | `modal-container` | `fixed` 전체 화면, `role="dialog"` |
| 패널 | `modal` | `shadow-lg` 필수 |
| 헤더 | `modal__header` | 제목 `h2` + 닫기 버튼 |
| 닫기 아이콘 | `modal__close` | `button` 내부 `i` |
| 본문 | `modal__content` | 내용이 길면 이 영역만 스크롤 |
| 푸터 | `modal__footer` | 버튼 영역 |

---

## 반응형 최대 너비 (모바일 퍼스트)

| 뷰포트 | `modal` max-width |
|---|---|
| ~767px | `100%` |
| 768px+ | `46rem` (460px) |
| 1024px+ | `61rem` (610px) |
| 1280px+ | `76rem` (760px) |
| 1440px+ | `86rem` (860px) |

---

## `modal__content` 스크롤 시작점 (뷰포트 높이)

| 해상도 (참고) | 조건 | content max-height |
|---|---|---|
| 1366 × 768 | `min-height: 768px` | `54rem` (540px) |
| 1440 × 900 | `min-height: 900px` | `64rem` (640px) |
| 1920 × 1080 | `min-height: 1080px` | `84rem` (840px) |
| 페이지 모달 | `.modal--page` | `110rem` (1100px) |

768px 미만 높이는 `calc(100dvh - 48px - 14rem)`으로 헤더·푸터 여유를 뺀 값이 적용됩니다.

---

## Variant

### 1. 일반 모달 (헤더 + 본문 + 푸터)

푸터는 **한 모달에 하나만** 사용합니다. 아래는 패턴별 예시입니다.

| 푸터 타입 | 레이아웃 | 용도 |
|---|---|---|
| type 1 | `flex justify-center` | 단일 CTA (`w-300`) |
| type 2 | `flex justify-end gap-10` | 닫기 + 완료 |
| type 3 | `flex justify-between` | 이전 + (닫기, 완료) |

### 2. 페이지 모달

본문이 매우 긴 경우 `modal--page`를 패널에 추가합니다.

```html
<div class="modal shadow-lg modal--page">
```

### 3. 이벤트성 모달

- 웹: 중앙 모달
- 모바일(767px 이하): 하단 바텀시트 (`modal-container--event`, `modal--event`)
- 헤더·X 버튼 없음 → `blind` 제목
- **참여하기**는 `modal__content-action` 안, **오늘 하루 보지 않기 / 닫기**는 `modal__footer--event`

---

## 사용 예시

### 일반 모달 — 푸터 type 1 (단일 완료)

```html
<div class="modal-container" tabindex="0" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal shadow-lg">
    <div class="modal__header">
      <h2 class="heading8-sb-24 color-slate-900" id="modal-title">모달 제목</h2>
      <button type="button" aria-label="닫기">
        <i class="modal__close"><span class="blind">닫기</span></i>
      </button>
    </div>
    <div class="modal__content px-24 pb-24">
      <p class="body2-r-16 color-slate-700">모달 내용</p>
    </div>
    <div class="modal__footer flex justify-center">
      <button type="button" class="blue-button-48 w-300">완료</button>
    </div>
  </div>
</div>
```

### 일반 모달 — 푸터 type 2 (닫기 + 완료)

```html
<div class="modal__footer flex justify-end gap-10">
  <button type="button" class="border-slate-button-48 w-100">닫기</button>
  <button type="button" class="blue-button-48 w-200">완료</button>
</div>
```

### 일반 모달 — 푸터 type 3 (이전 + 닫기·완료)

```html
<div class="modal__footer flex justify-between">
  <button type="button" class="border-slate-button-48 w-100">이전</button>
  <div class="flex gap-10">
    <button type="button" class="border-slate-button-48 w-100">닫기</button>
    <button type="button" class="blue-button-48 w-200">완료</button>
  </div>
</div>
```

### 이벤트성 모달

```html
<div class="modal-container modal-container--event" tabindex="0" role="dialog" aria-modal="true" aria-labelledby="modal-event-title">
  <div class="modal shadow-lg modal--event">
    <h2 class="blind" id="modal-event-title">이벤트 안내</h2>
    <div class="modal__content modal__content--event px-24 pb-24">
      <p class="body2-r-16 color-slate-400 text-center">내용과 이미지</p>
      <div class="modal__content-action flex justify-center">
        <button type="button" class="blue-button-48 w-300">참여하기</button>
      </div>
    </div>
    <div class="modal__footer modal__footer--event flex justify-between align-center">
      <button type="button" class="transparent-button-48">오늘 하루 보지 않기</button>
      <button type="button" class="transparent-button-48">닫기</button>
    </div>
  </div>
</div>
```

---

## 접근성

- `modal-container`에 `role="dialog"`, `aria-modal="true"`, `aria-labelledby` 연결
- 제목 `h2`의 `id`와 `aria-labelledby` 값 일치
- 닫기 `button`에 `type="button"`, `aria-label="닫기"` (또는 `blind` 보조 텍스트)
- 이벤트 모달은 시각 헤더가 없으므로 `blind` 제목 필수
- 포커스 트랩·ESC 닫기·배경 스크롤 잠금은 **JS로 구현** (마크업만으로는 미제공)

---

## 연관 컴포넌트

| 용도 | 클래스 |
|---|---|
| 그림자 | `shadow-lg` (`css/component/shadow.css`) |
| 푸터 버튼 | `blue-button-48`, `border-slate-button-48`, `transparent-button-48` |
| 버튼 너비 | `w-100`, `w-200`, `w-300` (`css/default/layout.css`) |

---

## 규칙

- `modal`에는 반드시 `shadow-lg` 조합
- 한 `modal` 안에 `modal__footer`는 **하나만** (데모 HTML의 여러 푸터는 variant 참고용)
- 스크롤은 `modal__content`에만 발생 (`overflow`는 CSS 처리)
- `modal__content` 패딩은 `px-24 pb-24` 등 spacing 유틸 사용
- 인라인 `style`로 표시/숨김 제어 금지 (데모 `display: none` 제외, 실서비스는 클래스/JS)
- 이벤트 모달 주 액션(참여하기)은 푸터가 아닌 `modal__content-action`에 배치
- hover/focus는 CSS·버튼 컴포넌트 내부 처리, 별도 상태 클래스 추가 금지
