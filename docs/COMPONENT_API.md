# Component API Guide

이 문서는 `html/` 폴더의 예제 마크업을 기준으로 작성했습니다.  
클래스·구조는 해당 HTML과 동일하게 맞추면 됩니다.

| 파일 | 용도 |
|------|------|
| `html/playground.html` | 시맨틱 클래스 (`btn`, `input-field` 등) |
| `html/button.html` | 유틸 클래스 조합 버튼 |
| `html/form.html` | 폼 필드·토스트·검증 연동 |
| `html/search.html` | 검색 UI 변형 |
| `html/header.html` | 헤더·Gnb |
| `html/footer.html` | 풋터 |

스타일 정의는 `css/component.css` 등을 참고합니다.

---

## 1. `html/playground.html` — 시맨틱 컴포넌트

`component.css`의 개발자용 레이어와 동일한 마크업입니다.

### Head

```html
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/root.css">
<link rel="stylesheet" href="../css/class.css">
<link rel="stylesheet" href="../css/component.css">
<link rel="stylesheet" href="../css/icon.css">
```

### Body

```html
<body class="inner-default padding-32-all">
  <h1 class="Heading9-B-22 color-gray-900">Component Playground</h1>

  <section class="margin-20-w">
    <h2 class="Body1-SB-18 color-gray-800">Buttons</h2>
    <div class="flex gap-10 margin-8-t">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-outline">Outline</button>
      <button type="button" class="btn btn-neutral">Neutral</button>
      <button type="button" class="btn btn-primary" disabled>Disabled</button>
    </div>
  </section>

  <section class="margin-20-w">
    <h2 class="Body1-SB-18 color-gray-800">Input</h2>
    <div class="flex flex-column gap-6 margin-8-t">
      <input class="input-field" type="text" placeholder="이름을 입력하세요">
      <p class="field-hint">한글/영문 20자 이내</p>
    </div>

    <div class="flex flex-column gap-6 margin-12-b margin-8-t">
      <input class="input-field is-error" type="email" placeholder="이메일을 입력하세요">
      <p class="field-error">올바른 이메일 형식이 아닙니다.</p>
    </div>
  </section>

  <section class="margin-20-w">
    <h2 class="Body1-SB-18 color-gray-800">Select / Textarea</h2>
    <div class="flex flex-column gap-10 margin-8-t">
      <select class="select-field">
        <option value="">선택하세요</option>
        <option value="1">옵션 1</option>
        <option value="2">옵션 2</option>
      </select>

      <textarea class="textarea-field" placeholder="내용을 입력하세요"></textarea>
    </div>
  </section>
</body>
```

### 시맨틱 클래스 요약

| 역할 | 클래스 |
|------|--------|
| 버튼 베이스 | `btn` |
| 버튼 변형 | `btn-primary`, `btn-outline`, `btn-neutral` |
| 입력 | `input-field` |
| 셀렉트 | `select-field` |
| 텍스트영역 | `textarea-field` |
| 필드 에러 | 요소에 `is-error` |
| 안내 문구 | `field-hint` |
| 에러 문구 | `field-error` |

---

## 2. `html/button.html` — 유틸 조합 버튼

### Head

```html
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/root.css">
<link rel="stylesheet" href="../css/class.css">
<link rel="stylesheet" href="../css/responsive.css">
<link rel="stylesheet" href="../css/component.css">
<link rel="stylesheet" href="../css/crossbrowser.css">
<link rel="stylesheet" href="../css/icon.css">
```

### 예제 (본문 일부)

```html
<p class="Body3-R-14 color-gray-700">default button</p>
<button disabled type="button" class="focus:bg-blue-500 hover:bg-blue-600 active:bg-blue-700 height-48 radius-md-8 padding-16-w Body2-M-16 color-white bg-blue-500">
  blue button
  <span class="icon-arrow-right-90deg-white"></span>
</button>

<button type="button" class="focus:bg-blue-500 hover:bg-blue-600 active:bg-blue-700 height-48 radius-md-8 padding-16-w Body2-M-16 color-white bg-blue-500">
  blue button
</button>

<button type="button" class="focus:bg-blue-500 hover:bg-blue-50 active:bg-blue-100 height-48 radius-md-8 padding-16-w Body2-M-16 color-blue-500 bg-white border-blue-500">
  border button
</button>

<button type="button" class="focus:bg-slate-800 hover:bg-slate-800 active:bg-slate-900 height-48 radius-md-8 padding-16-w Body2-M-16 color-white bg-slate-700">
  slate button
</button>

<button type="button" class="focus:bg-blue-500 hover:bg-blue-100 active:bg-blue-200 height-48 radius-md-8 padding-16-w Body2-M-16 color-blue-500 bg-blue-50">
  blue 50 button
</button>

<button type="button" class="focus:bg-slate-800 hover:bg-gray-100 active:bg-gray-200 height-48 radius-md-8 padding-16-w Body2-M-16 color-slate-900 bg-slate-50">
  gray 50 button
</button>

<button type="button" class="focus:bg-slate-800 hover:bg-gray-50 active:bg-gray-100 height-48 radius-md-8 padding-16-w Body2-M-16 color-slate-900 bg-white border-slate-500">
  gray border button
</button>

<button type="button" class="focus:bg-blue-500 hover:bg-blue-600 active:bg-blue-700 height-48 radius-md-8 padding-16-l padding-8-r Body2-M-16 color-white flex align-center bg-blue-500">
  blue button
  <span class="arrow-right-white"></span>
</button>
```

---

## 3. `html/form.html` — 폼·토스트

### Head (스크립트·Flatpickr 포함)

```html
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/root.css">
<link rel="stylesheet" href="../css/class.css">
<link rel="stylesheet" href="../css/responsive.css">
<link rel="stylesheet" href="../css/component.css">
<link rel="stylesheet" href="../css/crossbrowser.css">
<link rel="stylesheet" href="../css/icon.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="../js/form.js"></script>
<script src="../js/datepicker.js"></script>
```

### Toast

- 완료: `.toast.complete` — `form.js`에서 검증 통과 시 `.active` 토글 (약 3초).
- 오류: `.toast.error` — 실패 시 `.active` (약 1초).

```html
<div class="toast complete flex flex-center fixed left-50-per transform-translate-x-50-per bg-blue-50 height-48 padding-16-w radius-md-8 bg-white width-100-per z-index-10">
  <p class="Body3-R-14 color-blue-500">
    완료 되었습니다 (3초 후 자동 사라짐)
  </p>
</div>

<div class="toast error flex flex-center fixed left-50-per transform-translate-x-50-per bg-red-50 height-48 padding-16-w radius-md-8 bg-white width-100-per z-index-10">
  <p class="Body3-R-14 color-red-500">
    필수사항 채워주시길 바랍니다.
  </p>
</div>
```

### 폼 레이아웃·검증 연동 (`form.js`)

- 한 줄 필드: `.form-item` > 라벨 + `.flex.flex-column.gap-6` > 컨트롤 + `p.error-message`
- 제출 버튼: `.submit-btn`
- 에러 시: 컨트롤 또는 `.input-wrapper`에 `.is-error`, 같은 `.form-item` 안의 `p.error-message`에 `.is-error`

### 폼 본문 (예제 HTML과 동일 구조)

```html
<body class="inner-default padding-32-all">

<form class="flex flex-column gap-10" action="javascript:void(0)" novalidate>

  <div class="flex flex-column gap-10 form-item">
    <label class="Body2-M-16 color-gray-900" for="content">input text</label>
    <div class="flex flex-column gap-6">
      <input type="text" id="content" class="focus:outline-blue-500 active:outline-blue-500 hover:outline-blue-500 Body2-R-16 color-gray-900 height-48 border-slate-400 radius-md-8 padding-16-w" placeholder="내용을 입력하세요">
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-10 form-item">
    <label class="Body2-M-16 color-gray-900" for="username">username</label>
    <div class="flex flex-column gap-6">
      <input type="text" id="username" class="focus:outline-blue-500 active:outline-blue-500 hover:outline-blue-500 Body2-R-16 color-gray-900 height-48 border-slate-400 radius-md-8 padding-16-w" placeholder="아이디를 입력하세요" aria-required="true" required>
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-8 form-item">
    <label for="institution-password" class="Body2-M-16 color-gray-900">비밀번호</label>
    <div class="flex flex-column gap-6">
      <div class="input-wrapper flex align-center radius-md-8 border-slate-400 overflow-hidden relative">
        <input type="password" id="institution-password" class="password-box width-100-per border-none padding-16-w height-48 Body2-R-16 color-gray-700" placeholder="비밀번호를 입력해주세요" autocomplete="current-password" required>
        <button type="button" class="eye-icon password-toggle-btn absolute right-16 cursor-pointer" aria-label="비밀번호 표시" tabindex="-1">
          <span class="blind">클릭시 비밀번호 표시</span>
        </button>
      </div>
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-10 form-item">
    <label class="Body2-M-16 color-gray-900" for="select">select</label>
    <div class="flex flex-column gap-6">
      <select name="select" id="select" class="focus:outline-blue-500 align-center custom-select Body2-R-16 color-gray-900 height-48 border-slate-400 radius-md-8 padding-16-w">
        <option value="1" class="hover:bg-blue-50 Body2-R-16 color-gray-900">option 1</option>
        <option value="2" class="hover:bg-blue-50 Body2-R-16 color-gray-900">option 2</option>
        <option value="3" class="hover:bg-blue-50 Body2-R-16 color-gray-900">option 3</option>
      </select>
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-10 form-item">
    <label class="Body2-M-16 color-gray-900" for="date">date</label>
    <div class="flex flex-column gap-6">
      <div class="data-wrapper relative width-100-per">
        <input type="date" id="date" class="date-box width-100-per focus:outline-blue-500 active:outline-blue-500 hover:outline-blue-500 Body2-R-16 color-gray-900 height-48 border-slate-400 radius-md-8 padding-16-w" placeholder="날짜를 선택하세요">
        <div class="calendar-icon absolute right-16 top-50-per transform-translate-y-50-per">
          <span class="blind">날짜 아이콘</span>
        </div>
      </div>
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-10 form-item">
    <label class="Body2-M-16 color-gray-900" for="datetime-local">datetime-local</label>
    <div class="flex flex-column gap-6">
      <div class="data-wrapper relative width-100-per">
        <input type="datetime-local" id="datetime-local" class="date-box-local width-100-per focus:outline-blue-500 active:outline-blue-500 hover:outline-blue-500 Body2-R-16 color-gray-900 height-48 border-slate-400 radius-md-8 padding-16-w" placeholder="날짜와 시간을 선택하세요">
        <div class="calendar-icon absolute right-16 top-50-per transform-translate-y-50-per">
          <span class="blind">날짜 아이콘</span>
        </div>
      </div>
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-10 form-item">
    <label class="Body2-M-16 color-gray-900" for="search">search</label>
    <div class="flex flex-column gap-6">
      <div class="input-wrapper flex align-center focus:outline-blue-500 padding-16-l padding-10-r active:outline-blue-500 hover:outline-blue-500 height-48 border-slate-400 radius-md-8 overflow-hidden">
        <input type="search" name="search" id="search" class="Body2-R-16 color-gray-900 border-none width-100-per" placeholder="검색어를 입력하세요">
        <button type="submit" class="search-icon Body2-R-16 color-gray-900 hover:bg-gray-50 active:bg-gray-100 radius-md-8 flex flex-center">
          <span class="blind">검색 버튼</span>
        </button>
      </div>
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-10 form-item">
    <label class="Body2-M-16 color-gray-900" for="range">range</label>
    <input type="range" id="range" class="focus:outline-blue-500 active:outline-blue-500 hover:outline-blue-500 Body2-R-16 color-gray-900 height-48 border-slate-400 radius-md-8 padding-16-w" placeholder="범위를 선택하세요">
    <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
  </div>

  <p class="Body2-M-16 color-gray-900 form-item">checkbox</p>
  <div class="flex align-center gap-10">
    <input type="checkbox" name="checkbox" id="checkbox" class="checkbox-input">
    <label class="Body2-M-16 color-gray-900 cursor-pointer" for="checkbox">checkbox</label>
  </div>

  <p class="Body2-M-16 color-gray-900 form-item">radio</p>
  <div class="flex align-center gap-10">
    <input type="radio" name="radio" id="radio1" class="radio-input">
    <label class="Body2-M-16 color-gray-900 cursor-pointer" for="radio1">radio1</label>
  </div>

  <div class="flex flex-column gap-8 relative form-item">
    <label for="textarea" class="Body2-M-16 color-gray-900 flex gap-4">textarea</label>
    <div class="flex flex-column gap-6">
      <textarea name="textarea" id="textarea" class="border-slate-400 radius-md-8 min-height-160 padding-12-w padding-12-t Body2-R-16" placeholder="내용을 입력하세요" rows="8" maxlength="1000" aria-required="true" required="" style="resize: vertical;"></textarea>
      <div class="flex flex-end width-100-per absolute top-220 right-16">
        <span class="Body3-R-14 color-gray-700 textarea-count">0 / 1000</span>
      </div>
      <p class="Body3-R-14 color-red-500 error-message">에러 메세지</p>
    </div>
  </div>

  <div class="flex flex-column gap-10 form-item">
    <button type="submit" class="submit-btn Body2-M-16 color-white height-48 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 radius-md-8 flex flex-center">
      완료 버튼
    </button>
  </div>

</form>
</body>
```

### `form.js`가 기대하는 선택자

| 동작 | 선택자 |
|------|--------|
| 폼 | `form` |
| 제출 | `.submit-btn` |
| 토스트 | `.toast.complete`, `.toast.error` |
| 비밀번호 표시 | `.password-box`, `.eye-icon` |
| 글자 수 | `textarea`, `.textarea-count` |
| 에러 표시 | `.form-item`, `.input-wrapper` 또는 입력 자체, `p.error-message` + `.is-error` |

---

## 4. `html/search.html` — 검색 변형

### Head

```html
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/root.css">
<link rel="stylesheet" href="../css/class.css">
<link rel="stylesheet" href="../css/responsive.css">
<link rel="stylesheet" href="../css/component.css">
<link rel="stylesheet" href="../css/crossbrowser.css">
<link rel="stylesheet" href="../css/icon.css">
```

### 본문 (아이콘+입력 / 입력+버튼 / 입력+별도 버튼)

```html
<div class="input-wrapper flex align-center focus:outline-blue-500 gap-12 padding-16-l padding-10-r active:outline-blue-500 hover:outline-blue-500 height-48 border-slate-400 radius-md-8 overflow-hidden">
  <div class="search-icon"></div>
  <input type="search" name="search" id="search-1" class="Body1-R-18 color-gray-900 border-none width-100-per" placeholder="검색어를 입력하세요">
</div>

<div class="input-wrapper flex align-center focus:outline-blue-500 padding-16-l padding-10-r active:outline-blue-500 hover:outline-blue-500 height-48 border-slate-400 radius-md-8 overflow-hidden">
  <input type="search" name="search" id="search-2" class="Body1-R-18 color-gray-900 border-none width-100-per" placeholder="검색어를 입력하세요">
  <button type="submit" class="search-icon color-gray-900 hover:bg-gray-50 active:bg-gray-100 radius-md-8 flex flex-center">
    <span class="blind">검색 버튼</span>
  </button>
</div>

<div class="flex align-center gap-8">
  <input type="search" name="search" id="search-3" class="height-48 border-slate-400 radius-md-8 padding-12-w Body1-R-18 color-gray-900 border-none width-100-per" placeholder="검색어를 입력하세요">
  <button type="button" class="focus:bg-slate-800 hover:bg-slate-800 active:bg-slate-900 height-48 width-100 radius-md-8 padding-16-w Body1-M-18 color-white bg-slate-700">
    검색
  </button>
</div>
```

---

## 5. `html/header.html` — 헤더·메뉴

### Head

```html
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/root.css">
<link rel="stylesheet" href="../css/class.css">
<link rel="stylesheet" href="../css/responsive.css">
<script src="../js/header.js"></script>
```

### `header.js`가 사용하는 클래스

- `.onedepth-item` — 1depth 메뉴 행
- `.submenu-list` — 펼쳐지는 서브메뉴 컨테이너

### 마크업 뼈대 (로고·유틸·내비)

```html
<header>
  <div class="inner-default height-76 flex flex-center flex-between">
    <h1 class="logo">
      <a class="flex flex-center gap-8" aria-label="환경정보 융합 빅데이터 플랫폼 홈으로 이동">
        <img class="logo-text" src="../image/icon/header-logo.svg" height="40" alt="환경정보 융합 빅데이터 플랫폼 로고">
      </a>
    </h1>
    <div class="header-util flex flex-center gap-8" role="group" aria-label="사용자 계정 관리">
      <a href="javascript:void(0)" class="hover:bg-gray-50 active:bg-gray-100 height-40 bg-white padding-12-w radius-md-8 flex flex-center gap-8" aria-label="로그인 페이지로 이동">
        <img aria-hidden="true" src="../image/icon/login.svg" alt="">
        <span class="Body2-M-16 color-gray-700">로그인</span>
      </a>
      <a href="javascript:void(0)" class="hover:bg-gray-50 active:bg-gray-100 height-40 bg-white padding-12-w radius-md-8 flex flex-center gap-8 all-search-btn" aria-label="통합검색 페이지로 이동">
        <img aria-hidden="true" src="../image/icon/search.svg" alt="">
        <span class="Body2-M-16 color-gray-700">통합검색</span>
      </a>
    </div>
  </div>

  <div class="height-56 border-top-gray-200 border-bottom-gray-200" id="topMenu">
    <nav class="height-100-per inner-default" aria-label="메인 메뉴">
      <ul class="height-100-per menu-list flex flex-start gap-16" role="menubar">
        <li class="onedepth-item padding-16-l overflow-hidden responsive height-100-per flex align-center" role="none">
          <a href="javascript:void(0)" class="fit-width flex flex-center gap-8 height-100-per" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="데이터 탐색">
            <span class="Body1-M-18 color-gray-800">depth01</span>
            <img aria-hidden="true" src="../image/icon/arrow-90deg-gray-900.svg" alt="">
          </a>
          <div class="submenu-list width-100-per height-0 visibility-hidden transition-ease absolute overflow-hidden right-0 top-132 border-bottom-gray-200" role="menu">
            <div class="submenu-container inner-default flex">
              <p class="padding-28-w padding-28-t padding-28-b Heading9-SB-22 color-gray-900 width-240 bg-gray-50">데이터 탐색</p>
              <ul class="padding-24-w padding-24-b padding-24-t flex flex-column gap-2">
                <li class="menu-item height-56 width-240" role="none">
                  <a href="javascript:void(0)" class="hover:bg-gray-50 active:bg-gray-100 menu-link flex align-center justify-between width-100-per height-56 padding-16-w radius-md-8" role="menuitem" aria-label="통합검색">
                    <span class="Body1-M-18 color-gray-500">depth02</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

(실제 파일에는 동일 구조의 `depth02` 항목이 여러 개 있습니다.)

---

## 6. `html/footer.html` — 풋터

### Head

```html
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/root.css">
<link rel="stylesheet" href="../css/class.css">
<link rel="stylesheet" href="../css/responsive.css">
```

### 본문

```html
<footer class="bg-gray-50 padding-40-t padding-40-b" role="contentinfo">
  <div class="inner-default flex flex-column gap-28">
    <a class="logo fit-width" href="javascript:void(0)" title="홈으로 이동">
      <img src="../image/icon/footer-logo.svg" alt="로고" width="190" height="40">
    </a>
    <address class="flex flex-center flex-between flex-wrap">
      <p class="Body2-R-16 color-gray-700">(우)30103 세종특별자치시 도움6로 11 정부세종청사 6동</p>
      <p class="Body2-SB-16 color-gray-900 width-100-per">민원실 1577-8866 (월~금 09:00~18:00, 공휴일 제외)</p>
    </address>
    <div class="bottom flex flex-between border-top-gray-200 padding-16-t">
      <nav aria-label="풋터 관련 정책">
        <ul class="footer-links flex flex-center flex-wrap gap-10">
          <li><a class="height-32 Body3-M-14 color-gray-500" href="javascript:void(0)">이용약관</a></li>
          <li><a class="height-32 Body3-M-14 color-gray-500" href="javascript:void(0)">개인정보처리방침</a></li>
          <li><a class="height-32 Body3-M-14 color-gray-500" href="javascript:void(0)">위치기반서비스약관</a></li>
          <li><a class="height-32 Body3-M-14 color-gray-500" href="javascript:void(0)">저작권정책</a></li>
        </ul>
      </nav>
      <div class="footer-copy">
        <small class="Body3-M-14 color-gray-500">© Ministry of Climate, Energy and Environment. The Government of the Republic of Korea. All rights reserved.</small>
      </div>
    </div>
  </div>
</footer>
```

---

## 7. 사용 규칙 (정리)

- **새 화면에서 빠르게 맞출 때**: `playground.html`의 `btn` / `input-field` / `select-field` / `textarea-field` + `field-hint` / `field-error` 조합을 우선 참고합니다.
- **기존 화면과 동일한 룩**: `button.html`, `form.html`처럼 유틸 클래스를 그대로 조합합니다.
- **상태**: 시맨틱 필드는 입력에 `is-error` + `field-error` 문구. 폼 예제는 `error-message` + `is-error`와 `form.js` 로직을 함께 씁니다.
- **접근성**: 스크린리더 전용 문구는 `.blind`, 장식 이미지는 `aria-hidden="true"` 패턴을 유지합니다.

HTML 예제가 바뀌면 이 문서도 같은 기준으로 맞춰 갱신하는 것이 좋습니다.
