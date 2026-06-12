# Button

사용자가 액션을 트리거하는 버튼 컴포넌트입니다.

---

## 네이밍 패턴

```
{color}-button-{size}
border-{color}-button-{size}
```

---

## 색상 (color)

| 클래스 접두사 | 용도 | 사용 상황 | 대표 예시 |
|---|---|---|---|
| `blue` | 주요 CTA | 화면 내 가장 중요한 주요 액션 | 저장, 검색, 제출 |
| `border-blue` | 보조 액션 | 주요 액션을 보조하는 행동 | 수정, 추가, 상세 |
| `blue-50` | 주요 보완 (밝은 배경) | 주요 액션을 보완하는 부가 기능 | 문의, 옵션 설정, 목록보기 |
| `slate` | 중립 액션 | 주요 액션 (색상 톤만 다름) | 저장, 검색, 제출 |
| `border-slate` | 중립 보조 | 낮은 우선순위의 보조/취소/닫기 | 취소, 닫기 |
| `slate-50` | 약한 강조 | 부가 기능 | 문의, 옵션 설정, 테이블 액션 |
| `transparent` | 텍스트형 | 링크성 또는 최소 강조 액션 | 더보기, 상세보기, 관심 |

---

## 사이즈 (size)

| 사이즈 | 높이 |
|---|---|
| `54` | 5.4rem (border-slate 색상에만 정의됨) |
| `48` | 4.8rem |
| `40` | 4.0rem |
| `36` | 3.6rem |
| `32` | 3.2rem |
| `28` | 2.8rem |

---

## 사용 예시

### 기본

```html
<!-- 주요 CTA -->
<button type="button" class="blue-button-40">저장</button>

<!-- 보조 액션 -->
<button type="button" class="border-blue-button-36">수정</button>

<!-- 주요 보완 -->
<button type="button" class="blue-50-button-36">문의</button>

<!-- 중립 액션 -->
<button type="button" class="slate-button-40">확인</button>

<!-- 중립 보조 -->
<button type="button" class="border-slate-button-36">취소</button>

<!-- 약한 강조 -->
<button type="button" class="slate-50-button-32">목록보기</button>

<!-- 텍스트형 -->
<button type="button" class="transparent-button-32">더보기</button>
```

### disabled

```html
<!-- disabled 버튼은 색상 접두사 없이 button-{size} + disabled 속성 -->
<button type="button" class="button-48" disabled>비활성</button>
```

### 아이콘 버튼

```html
<!-- 아이콘 오른쪽 (blue/slate 계열: chevron-right-white) -->
<button type="button" class="blue-button-48 icon-button-right flex align-center">
  저장
  <span class="chevron-right-white" aria-hidden="true"></span>
</button>

<!-- 아이콘 왼쪽 -->
<button type="button" class="blue-button-48 icon-button-left flex align-center">
  <span class="chevron-right-white" aria-hidden="true"></span>
  저장
</button>

<!-- slate-50 계열: chevron-right-slate-700 -->
<button type="button" class="slate-50-button-48 icon-button-right flex align-center">
  목록보기
  <span class="chevron-right-slate-700" aria-hidden="true"></span>
</button>

<button type="button" class="slate-50-button-48 icon-button-left flex align-center">
  <span class="chevron-right-slate-700" aria-hidden="true"></span>
  목록보기
</button>

<!-- slate 계열: chevron-right-white -->
<button type="button" class="slate-button-48 icon-button-right flex align-center">
  확인
  <span class="chevron-right-white" aria-hidden="true"></span>
</button>
```

### 아이콘 색상 매핑

| 버튼 색상 | 아이콘 클래스 |
|---|---|
| blue, slate | `chevron-right-white` |
| slate-50, transparent | `chevron-right-slate-700` |

### 필터/업로드 버튼 (54)

`border-slate-button-54`에만 정의된 54 사이즈 + `filter-icon` 조합입니다.

```html
<button type="button" class="border-slate-button-54 button-54 gap-8 flex align-center">
  필터
  <span class="filter-icon" aria-hidden="true"></span>
</button>
```

### View Toggle (보기 방식 전환)

콘텐츠를 카드형/리스트형 등으로 전환해서 보는 보기 방식 토글 버튼 그룹입니다.

구조:

```
div.view-toggle[role=group][aria-label="보기 방식"]
└── button.view-toggle__btn[type=button][aria-pressed]
    ├── i.{icon}-blue-icon.view-toggle__icon--active
    ├── i.{icon}-gray-icon.view-toggle__icon--inactive
    └── span.body2-r-16.color-slate-700 (라벨 텍스트)
```

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

선택된 버튼에 `.active` 클래스를 토글하고 `aria-pressed`를 동기화합니다. 한 그룹 내에서 하나의 버튼만 선택 상태를 가집니다. (JS 패턴 7-7 참조)

아이콘:

| 클래스 | 크기 | 색상 | 설명 |
|---|---|---|---|
| `dashboards-blue-icon` | 20×20 | `#1A76FF` | 카드형 보기 (선택됨) |
| `dashboards-gray-icon` | 20×20 | `#64748B` | 카드형 보기 (선택 안 됨) |
| `list-blue-icon` | 20×20 | `#1A76FF` | 리스트형 보기 (선택됨) |
| `list-gray-icon` | 20×20 | `#64748B` | 리스트형 보기 (선택 안 됨) |

각 버튼은 active/inactive 색상 아이콘 2개를 겹쳐두고 `.active` 상태에 따라 CSS로 표시 여부를 전환합니다.

View Toggle 규칙:

- `div.view-toggle` 안에 `button.view-toggle__btn`만 위치
- 그룹 wrapper에 `role="group"` + `aria-label` 필수
- 각 버튼은 `button[type=button]` + `aria-pressed="true|false"` 필수, 한 그룹에 하나만 active
- 버튼마다 active/inactive 아이콘 2개 + 라벨 `span.body2-r-16.color-slate-700`
- 아이콘은 `dashboards-blue/gray-icon`, `list-blue/gray-icon` 등 정의된 클래스만 사용
- `.active` 클래스와 `aria-pressed`는 항상 JS로 동기화

---

## 규칙

- `type` 속성 반드시 명시 (`button` / `submit` / `reset`)
- 정의된 클래스만 사용, 임의 클래스 생성 금지
- 사이즈 없이 색상만 단독 사용 금지
- 아이콘 버튼은 반드시 `flex align-center` 추가
- disabled 버튼은 색상 접두사 없이 `button-{size}` + `disabled` 속성
- `div` / `span` 으로 버튼 대체 금지
- `54` 사이즈는 `border-slate` 색상에서만 사용 (다른 색상은 미정의)