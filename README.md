# SolveK Design System — AI 규칙

이 문서는 AI가 SolveK Design System 기준으로 페이지를 생성할 때 반드시 따라야 하는 규칙입니다.
각 컴포넌트의 상세 명세는 `components/{name}/spec.json`, 개발자용 마크업 예시는 `components/{name}/README.md`를 참조하세요.

---

## 1. 시스템 개요

- 공공기관/정부 프로젝트용 HTML/CSS 퍼블리싱 디자인 시스템
- 프레임워크 없이 순수 HTML + CSS + JS로 구성
- CSS 변수(Custom Properties) 기반 디자인 토큰 사용
- `css/index.css` 하나로 모든 토큰과 컴포넌트 CSS를 통합 호출
- 기본 폰트: Pretendard
- 기본 단위: rem (html font-size: 62.5%, 1rem = 10px)
- 접근성: KWCAG 2.1 기준 준수

---

## 2. CSS 호출

페이지 생성 시 CSS는 하나만 호출합니다.

```html
<link rel="stylesheet" href="/css/index.css">
```

index.css 구성:
```
tokens/   → color, typography, spacing, radius
default/  → border, color, common, component, icon, layout, responsive, spacing, typography
component/ → button, input, textarea, search, checkbox, radio, datepicker
```

---

## 3. 디자인 토큰

### 3-1. 색상 (tokens/color.css)

**사용 가능한 색상 팔레트 (전부 50~900 단계)**

| 팔레트 | CSS 변수 예시 | 주요 용도 |
|---|---|---|
| gray | `--gray-50` ~ `--gray-900` | 비활성, 보조 텍스트 |
| slate | `--slate-50` ~ `--slate-900` | 기본 텍스트, 테두리, 배경 |
| blue | `--blue-50` ~ `--blue-900` | 주요 CTA, 링크, 포커스 |
| sky-blue | `--sky-blue-50` ~ `--sky-blue-900` | 보조 강조 |
| navy | `--navy-50` ~ `--navy-900` | 진한 강조 |
| red | `--red-50` ~ `--red-900` | 에러, 경고 |
| orange | `--orange-50` ~ `--orange-900` | 주의 |
| yellow | `--yellow-50` ~ `--yellow-900` | 알림 |
| green | `--green-50` ~ `--green-900` | 성공 |
| blue-green | `--blue-green-50` ~ `--blue-green-900` | 보조 |
| teal | `--teal-50` ~ `--teal-900` | 보조 |
| teal-blue | `--teal-blue-50` ~ `--teal-blue-900` | 보조 |
| pink | `--pink-50` ~ `--pink-900` | 보조 |
| blue-purple | `--blue-purple-50` ~ `--blue-purple-900` | 보조 |
| violet | `--violet-50` ~ `--violet-900` | 보조 |
| mulberry | `--mulberry-50` ~ `--mulberry-900` | 보조 |

기본색: `--white: #fff`, `--black: #000`

**색상 유틸 클래스**

| 패턴 | 용도 | 예시 |
|---|---|---|
| `color-{palette}-{step}` | 텍스트 색상 | `color-slate-900`, `color-blue-500`, `color-red-500` |
| `bg-{palette}-{step}` | 배경 색상 | `bg-slate-50`, `bg-blue-500`, `bg-white` |
| `border-{palette}-{step}` | 테두리 색상 | `border-slate-200`, `border-blue-500`, `border-red-500` |

특수: `bg-popup-overlay` (rgba(0,0,0,0.5) 오버레이)

**절대 금지: #fff, rgb(), hsl() 같은 하드코딩. 반드시 CSS 변수 또는 유틸 클래스 사용**

### 3-2. 타이포그래피 (tokens/typography.css)

**토큰 값**

| 토큰 | 값 |
|---|---|
| `--font-family-base` | Pretendard, -apple-system, BlinkMacSystemFont, sans-serif |
| `--font-weight-bold` | 700 |
| `--font-weight-semibold` | 600 |
| `--font-weight-medium` | 500 |
| `--font-weight-regular` | 400 |
| `--line-height-140` | 1.4 |
| `--line-height-160` | 1.6 |
| `--line-height-170` | 1.7 |
| `--letter-spacing-0` | 0 |
| `--letter-spacing-sm` | -0.2px |
| `--letter-spacing-md` | -0.3px |

**유틸 클래스 네이밍: `{타입}{순번}-{weight약자}-{px값}`**

weight 약자: `b`(bold), `sb`(semi-bold), `m`(medium), `r`(regular)

**Heading 클래스 (전체 목록)**

| 클래스 | 크기 | 굵기 |
|---|---|---|
| `heading1-b-48` | 48px | bold |
| `heading2-b-40` | 40px | bold |
| `heading3-b-36`, `heading3-m-36` | 36px | bold, medium |
| `heading4-b-32`, `heading4-sb-32`, `heading4-m-32`, `heading4-r-32` | 32px | bold, semi-bold, medium, regular |
| `heading5-b-30`, `heading5-sb-30`, `heading5-m-30`, `heading5-r-30` | 30px | bold, semi-bold, medium, regular |
| `heading6-b-28`, `heading6-sb-28`, `heading6-m-28`, `heading6-r-28` | 28px | bold, semi-bold, medium, regular |
| `heading7-sb-26`, `heading7-m-26`, `heading7-r-26` | 26px | semi-bold, medium, regular |
| `heading8-b-24`, `heading8-sb-24`, `heading8-m-24`, `heading8-r-24` | 24px | bold, semi-bold, medium, regular |
| `heading9-b-22`, `heading9-sb-22`, `heading9-m-22`, `heading9-r-22` | 22px | bold, semi-bold, medium, regular |
| `heading10-b-20`, `heading10-sb-20`, `heading10-m-20`, `heading10-r-20` | 20px | bold, semi-bold, medium, regular |

**Body 클래스 (전체 목록)**

| 클래스 | 크기 | 굵기 |
|---|---|---|
| `body1-b-18`, `body1-sb-18`, `body1-m-18`, `body1-r-18` | 18px | bold, semi-bold, medium, regular |
| `body2-b-16`, `body2-sb-16`, `body2-m-16`, `body2-r-16` | 16px | bold, semi-bold, medium, regular |
| `body3-b-14`, `body3-sb-14`, `body3-m-14`, `body3-r-14` | 14px | bold, semi-bold, medium, regular |
| `body4-b-13`, `body4-sb-13`, `body4-m-13`, `body4-r-13` | 13px | bold, semi-bold, medium, regular |
| `body5-b-12`, `body5-sb-12`, `body5-m-12`, `body5-r-12` | 12px | bold, semi-bold, medium, regular |

### 3-3. 간격 (tokens/spacing.css)

**사용 가능한 값: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 32, 40, 48, 50, 60, 80, 92, 100, 120**

CSS 변수: `var(--spacing-16)` 등
유틸 클래스:

| 패턴 | 용도 | 예시 |
|---|---|---|
| `p-{n}` | padding 전체 | `p-16` |
| `px-{n}`, `py-{n}` | padding 좌우/상하 | `px-20`, `py-8` |
| `pt-{n}`, `pb-{n}`, `pl-{n}`, `pr-{n}` | padding 방향별 | `pt-16`, `pb-10` |
| `m-{n}` | margin 전체 | `m-0` |
| `mx-{n}`, `my-{n}` | margin 좌우/상하 | `my-12` |
| `mt-{n}`, `mb-{n}`, `ml-{n}`, `mr-{n}` | margin 방향별 | `mt-20`, `mb-6` |
| `gap-{n}` | gap (flex/grid) | `gap-8`, `gap-16` |
| `gap-x-{n}`, `gap-y-{n}` | column-gap/row-gap | `gap-x-16`, `gap-y-10` |

### 3-4. 라운드 (tokens/radius.css)

| 토큰 | 값 | 용도 |
|---|---|---|
| `--radius-xs-2` | 0.2rem | 미세 라운드 |
| `--radius-sm-4` | 0.4rem | 작은 라운드 |
| `--radius-md-6` | 0.6rem | 중간 라운드 |
| `--radius-md-8` | 0.8rem | 기본 라운드 (input, button 등) |
| `--radius-lg-16` | 1.6rem | 큰 라운드 |
| `--radius-full` | 10rem | 완전 원형 |

---

## 4. 레이아웃 유틸

### 4-1. 그리드

12컬럼 그리드 시스템:

```html
<div class="grid-column-default">
  <div class="grid-column-4">4칸 (1/3)</div>
  <div class="grid-column-8">8칸 (2/3)</div>
</div>
```

| 클래스 | 설명 |
|---|---|
| `grid-column-default` | 12컬럼 기본 그리드 |
| `grid-column-sub-4` | 4컬럼 서브 그리드 |
| `grid-column-sub-8` | 8컬럼 서브 그리드 |
| `grid-column-sub-9` | 9컬럼 서브 그리드 |
| `grid-column-{1~12}` | 컬럼 span |
| `grid-row-{1~12}` | 로우 span |

### 4-2. 반응형 (inner-default)

```html
<div class="inner-default">
  <!-- 자동 반응형 컨테이너 -->
</div>
```

| 브레이크포인트 | max-width | padding 좌우 |
|---|---|---|
| > 1441px | 168rem | 12rem |
| ≤ 1440px | 144rem | 8rem |
| ≤ 1280px | auto | 5rem |
| ≤ 1024px | auto | 4.2rem |

`display-none-tablet`: 1280px 이하에서 숨김

### 4-3. Flex

| 클래스 | CSS |
|---|---|
| `flex` | display: flex |
| `flex-col` | flex-direction: column |
| `flex-row` | flex-direction: row |
| `flex-col-reverse` | flex-direction: column-reverse |
| `flex-wrap` | flex-wrap: wrap |
| `flex-nowrap` | flex-wrap: nowrap |
| `align-center` | align-items: center |
| `align-start` | align-items: flex-start |
| `align-end` | align-items: flex-end |
| `align-baseline` | align-items: baseline |
| `align-stretch` | align-items: stretch |
| `justify-start` | justify-content: flex-start |
| `justify-center` | justify-content: center |
| `justify-end` | justify-content: flex-end |
| `justify-between` | justify-content: space-between |
| `justify-around` | justify-content: space-around |
| `flex-center` | justify-content + align-items: center |
| `flex-between` | justify-content: space-between + align-items: center |
| `flex-1` | flex: 1 |
| `flex-auto` | flex: 1 1 auto |
| `flex-none` | flex: 0 0 auto |

### 4-4. Position

| 클래스 | CSS |
|---|---|
| `relative` | position: relative |
| `absolute` | position: absolute |
| `fixed` | position: fixed |
| `sticky` | position: sticky |
| `top-0`, `top-50`, `top-100` | top 위치 |
| `left-0`, `left-50` | left 위치 |
| `right-0`, `right-16`, `right-50` | right 위치 |
| `bottom-0`, `bottom-16`, `bottom-50` | bottom 위치 |
| `translate-x-50` | translateX(-50%) |
| `translate-y-50` | translate(-50%, -50%) |
| `translate-center` | translateY(-50%) |
| `z-index-{1~10,18,20,30,100}` | z-index |

### 4-5. Width / Height

| 클래스 | 값 |
|---|---|
| `w-full` | width: 100% |
| `w-auto` | width: auto |
| `w-fit` | width: fit-content |
| `w-screen` | width: 100vw |
| `w-100` | width: 10rem |
| `h-xs` | height: 2.8rem |
| `h-sm` | height: 3.2rem |
| `h-md` | height: 4rem |
| `h-lg` | height: 4.8rem |
| `h-xl` | height: 5.6rem |
| `h-2xl` | height: 6.4rem |
| `h-3xl` | height: 7.6rem |
| `h-full` | height: 100% |
| `h-screen` | height: 100vh |

### 4-6. 기타 유틸

| 클래스 | 설명 |
|---|---|
| `hidden` | display: none |
| `block` | display: block |
| `inline-block` | display: inline-block |
| `overflow-hidden` | overflow: hidden |
| `overflow-auto` | overflow: auto |
| `cursor-pointer` | cursor: pointer |
| `text-left`, `text-center`, `text-right` | text-align |
| `text-nowrap` | white-space: nowrap |
| `object-fit-cover`, `object-fit-contain` | object-fit |
| `transition-ease` | transition: all 0.6s ease |
| `hover-slate-50` | hover 시 bg-color: slate-50 |

### 4-7. Border

| 클래스 | 설명 |
|---|---|
| `border` | 1px solid |
| `border-none` | 없음 |
| `border-t`, `border-b`, `border-l`, `border-r` | 방향별 |
| `border-{palette}-{step}` | 색상 (gray-200~900, slate-50~900, blue-500, navy-500, green-500, teal-500, yellow-500, yellow-700, orange-500, red-500) |

### 4-8. 접근성

```html
<span class="blind">스크린 리더 전용 텍스트</span>
```

---

## 5. 아이콘

| 클래스 | 설명 | 크기 |
|---|---|---|
| `arrow-icon` | 화살표 (gray-900) | 24×24 |
| `arrow-right-white` | 우측 화살표 (white) | 24×24 |
| `search-icon-54` | 검색 (대) | 24×24 |
| `search-icon-40` | 검색 (소) | 20×20 |
| `eye-icon` | 비밀번호 숨김 | 24×24 |
| `eye-icon.active` | 비밀번호 보임 | 24×24 |
| `calendar-icon` | 달력 | 24×24 |
| `clock-icon` | 시계 | 24×24 |
| `close-icon` | 닫기 (CSS ::before/after 생성) | 24×24 |

---

## 6. 컴포넌트

### 상태 관리 공통 규칙

- **에러 상태**: `is-error`는 반드시 wrapper에만 추가. field에 직접 추가 금지.
- **hover/focus/disabled**: CSS 내부 처리. 클래스 추가 금지.
- **error-message**: 항상 DOM에 존재, CSS로 숨김/노출 처리. 인라인 스타일 금지.
- **팝업/드롭다운**: `active` 클래스 토글로만 제어.

### 6-1. Button

**네이밍: `{color}-button-{size}` 또는 `border-{color}-button-{size}`**

색상 6종:

| 접두사 | 용도 |
|---|---|
| `blue` | 주요 CTA |
| `border-blue` | 보조 액션 (blue 테두리) |
| `slate` | 중립 액션 |
| `border-slate` | 중립 보조 액션 (slate 테두리) |
| `slate-50` | 약한 강조, 배경이 있는 중립 액션 |
| `transparent` | 배경 없는 텍스트형 액션 |

사이즈 5종: `48`, `40`, `36`, `32`, `28`

disabled 전용: `button-48`, `button-40`, `button-36`, `button-32`, `button-28`

```html
<!-- 주요 CTA -->
<button type="button" class="blue-button-40">저장</button>

<!-- 보조 액션 -->
<button type="button" class="border-blue-button-36">취소</button>

<!-- 중립 액션 -->
<button type="button" class="slate-button-40">확인</button>

<!-- 아이콘 포함 -->
<button type="button" class="blue-button-48 flex align-center">
  저장 <span class="arrow-right-white"></span>
</button>

<!-- disabled -->
<button type="button" class="button-48" disabled>비활성</button>
```

규칙:
- `type` 속성 반드시 명시 (button/submit/reset)
- 사이즈 없이 색상만 단독 사용 금지
- div/span으로 버튼 대체 금지

### 6-2. Input

**네이밍: `input-field-default-{size}` (size: 48, 40, 36)**

```html
<!-- 기본 -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <input type="text" class="input-field-default-48" placeholder="내용을 작성해주세요">
  <p class="error-message">에러 메시지</p>
</div>

<!-- 에러 → wrapper에만 is-error -->
<div class="input-wrapper is-error">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <input type="text" class="input-field-default-48" placeholder="내용을 작성해주세요">
  <p class="error-message">에러 메시지</p>
</div>

<!-- disabled -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">라벨</label>
  <input type="text" class="input-field-default-48" placeholder="내용을 작성해주세요" disabled>
</div>

<!-- 비밀번호 -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block">비밀번호</label>
  <div class="relative w-fit flex align-center">
    <input type="password" class="input-field-default-48" placeholder="비밀번호를 입력해주세요">
    <button type="button" class="absolute right-0 top-50 translate-y-50">
      <i class="eye-icon"><span class="blind">비밀번호 보기</span></i>
    </button>
  </div>
</div>
```

### 6-3. Textarea

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

<!-- 에러 → wrapper에만 is-error -->
<div class="textarea-wrapper is-error">
  <!-- is-error 하나로 textarea 테두리, counter 색상, error-message 노출 전부 자동 제어 -->
</div>
```

### 6-4. Search

4가지 variant:

| variant | 설명 | 사용 상황 |
|---|---|---|
| 선행형 (leading) | 아이콘 왼쪽 → input 오른쪽 | 모바일 검색창, GIS, 콘텐츠 내 검색 |
| 후행형 (trailing) | input 왼쪽 → 아이콘 오른쪽 | 웹 배치, 빠른 조회 |
| CTA 버튼형 | input + 버튼 조합 | 관리자 페이지, 필터/조건 검색 |
| 팝업형 | 최근 검색어 팝업 포함 | 메인 검색창, 통합 검색 |

사이즈 4종: `search-54`, `search-48`, `search-40`, `search-36`

| 사이즈 | 아이콘 | 폰트 |
|---|---|---|
| 54, 48 | `search-icon-54` | `body1-r-18` |
| 40, 36 | `search-icon-40` | `body2-r-16` / `body3-r-14` |

```html
<!-- 선행형 -->
<div class="search-54 flex px-16 gap-12">
  <button type="button" class="search-button">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
  <input type="text" class="body1-r-18" placeholder="검색어를 입력해주세요">
</div>

<!-- 후행형 -->
<div class="search-54 flex pl-20 pr-16 space-between">
  <input type="text" class="body1-r-18 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="search-button">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
</div>

<!-- CTA 버튼형 -->
<div class="search-bar flex gap-8">
  <input type="text" class="search-48 px-12" placeholder="검색어를 입력해주세요">
  <button type="button" class="slate-button-48 w-100">검색</button>
</div>

<!-- 팝업형 -->
<div class="search-wrapper">
  <div class="search-54 flex pl-20 pr-16 space-between">
    <input type="text" class="body1-r-18 w-full search-input" placeholder="검색어를 입력해주세요" id="search-id">
    <button type="button" class="search-button">
      <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
    </button>
  </div>
  <div class="search-popup py-8" role="dialog" aria-modal="true" aria-labelledby="search-id">
    <!-- 최근 검색어 목록 -->
  </div>
</div>
```

팝업: `search-popup`에 `active` 클래스 토글, 접근성 속성 필수

### 6-5. Checkbox

3가지 variant:

| variant | 설명 | 사용 상황 |
|---|---|---|
| basic | 정사각형 인디케이터 + 레이블. 폼, 설정, 테이블 다중 선택 | 폼, 설정, 테이블 |
| chip | 칩 형태 다중 선택. 필터, 카테고리, 모바일 빠른 선택 | 태그, 카테고리 필터 |
| list | 전체 행이 선택 영역. 모바일 넓은 터치 영역 | 모바일 옵션 목록 |

basic 사이즈 3종: `sm`(body3-r-14), `md`(body2-r-16), `lg`(body1-r-18)

```html
<!-- basic (id/for 분리 구조) -->
<div class="flex align-center gap-8">
  <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="check-1">
  <label for="check-1" class="body2-r-16 color-slate-700">옵션 1</label>
</div>

<!-- chip (label 감싸기 구조) -->
<label class="checkbox-chip-label body2-r-16">
  <input type="checkbox" class="checkbox-chip">
  <span class="body2-m-16">옵션 1</span>
</label>

<!-- list (label 감싸기 구조) -->
<label class="checkbox-list-label body2-r-16">
  <input type="checkbox" class="checkbox-list">
  <span class="body2-m-16">옵션 1</span>
</label>

<!-- 전체선택 패턴 -->
<div class="flex align-center gap-8">
  <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="checkall-master">
  <label for="checkall-master" class="body2-r-16 color-slate-700">전체 선택</label>
</div>
<div class="w-full border-b border-slate-200 my-12" role="presentation" aria-hidden="true"></div>
<div class="grid-column-default gap-x-16 gap-y-10">
  <div class="grid-column-4 flex align-center gap-8">
    <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="item-1">
    <label for="item-1" class="body2-r-16 color-slate-700">항목 1</label>
  </div>
</div>
```

indeterminate(일부 선택): 반드시 JS로 설정 (`master.indeterminate = true`)

### 6-6. Radio

3가지 variant:

| variant | 설명 | 사용 상황 |
|---|---|---|
| basic | 원형 인디케이터 + 레이블. 폼, 설정, 단일 선택 | 폼, 설정, 옵션 선택 |
| segment | 세그먼트 형태. 2~5개 옵션 나란히 전환 | 탭 대체, 뷰 모드 전환 |
| toggle | 토글 그룹. 2개 옵션 간 빠른 전환 | ON/OFF, A/B 선택 |

basic 사이즈 3종: `sm`(body3-r-14), `md`(body2-r-16), `lg`(body1-r-18)

```html
<!-- basic (id/for 분리, 같은 name 필수) -->
<div class="flex align-center gap-8">
  <input type="radio" name="radio-group" class="radio-basic radio-basic-md" id="radio-1">
  <label for="radio-1" class="body2-r-16 color-slate-700">옵션 1</label>
</div>

<!-- segment (label 감싸기) -->
<div class="flex align-center gap-8 flex-wrap">
  <label class="radio-segment-label body2-r-16">
    <input type="radio" name="segment-group" class="radio-segment">
    <span>옵션 1</span>
  </label>
</div>

<!-- toggle (radio-toggle-group 필수) -->
<div class="radio-toggle-group">
  <label class="radio-toggle-label body2-r-16">
    <input type="radio" name="toggle-group" class="radio-toggle" checked>
    <span>옵션 1</span>
  </label>
  <label class="radio-toggle-label body2-r-16">
    <input type="radio" name="toggle-group" class="radio-toggle">
    <span>옵션 2</span>
  </label>
</div>
```

### 6-7. Datepicker

flatpickr@4.6.13 기반. 단일 날짜 / 기간 선택 2가지 variant.

추가 의존성:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/ko.js"></script>
```

```html
<!-- 단일 날짜 -->
<div class="input-wrapper">
  <label class="body2-r-16 color-slate-900 mb-6 block" for="datepicker-id">날짜</label>
  <div class="relative w-fit flex align-center">
    <input type="text" id="datepicker-id"
      class="input-field-default-48 input-with-trailing-icon"
      placeholder="날짜를 선택해주세요" autocomplete="off">
    <button type="button" class="absolute right-0 top-50 translate-y-50"
      data-datepicker-for="datepicker-id">
      <i class="calendar-icon" aria-hidden="true"></i>
      <span class="blind">날짜 선택</span>
    </button>
  </div>
</div>
```

JS: `initPicker('datepicker-id')` / `initPicker('id', { mode: 'range' })`

규칙: input id, label for, data-datepicker-for 반드시 일치. autocomplete=off 필수. input type="date" 사용 금지.

---

## 7. 절대 금지 사항

1. **색상 하드코딩** — #fff, rgb(), hsl() 등 사용 금지. 반드시 CSS 변수 또는 유틸 클래스
2. **정의되지 않은 임의 클래스 생성** — 이 문서와 spec.json에 정의된 클래스만 사용
3. **인라인 스타일로 상태 제어** — display, color, border 등 인라인 금지
4. **wrapper 없이 폼 컴포넌트 단독 사용** — input, textarea는 반드시 wrapper로 감싸야 함
5. **is-error를 field에 직접 추가** — 반드시 wrapper에만 추가
6. **hover/focus 상태를 클래스로 추가** — CSS 내부 처리됨
7. **div/span으로 button, input 대체** — 시맨틱 태그 사용
8. **input type="date" 사용** — 반드시 flatpickr datepicker 사용
9. **토큰에 없는 값 사용** — spacing, font-size, radius 등 정의된 토큰만 사용
10. **basic형 checkbox/radio에서 label 감싸기 구조 사용** — 반드시 id/for 분리
11. **chip/list/segment/toggle형에서 id/for 분리 구조 사용** — 반드시 label 감싸기
12. **radio에서 name 속성 누락** — 같은 그룹은 반드시 동일 name

---

## 8. 페이지 생성 시 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>페이지 제목</title>
  <link rel="stylesheet" href="/css/index.css">
</head>
<body>
  <div class="inner-default">
    <!-- 컨텐츠 -->
  </div>
</body>
</html>
```