# Header

사이트 공통 헤더 컴포넌트입니다. 로고·유틸 버튼·PC GNB·통합검색 패널·모바일 드로어로 구성됩니다.

---

## 구조

```
header.header[role=banner]
├── header-top
│   └── inner-default.header-top__inner (flex justify-between)
│       ├── h1.header__logo > a > img
│       └── header-util[role=group] (로그인 / 통합검색 / 모바일메뉴 버튼)
├── header-nav[role=navigation] (PC GNB, display-none-tablet)
│   └── header-nav__list > header-nav__item
│       ├── header-nav__link[data-header-nav-toggle] (depth1 트리거)
│       └── header-nav__sub (depth2 드롭다운 패널)
├── header-search-panel[role=dialog] (통합검색 오버레이)
└── header-drawer[role=dialog] (모바일 전체 메뉴)
```

---

## 의존성

```html
<link rel="stylesheet" href="/css/index.css">
```

---

## 사용 예시

### 기본 골격 (로고 + 유틸)

```html
<header class="header" role="banner">
  <div class="header-top">
    <div class="inner-default header-top__inner flex align-center justify-between">
      <h1 class="header__logo">
        <a href="/" aria-label="사이트명 홈으로 이동">
          <img src="/image/icon/header-logo.svg" alt="사이트명">
        </a>
      </h1>

      <div class="header-util flex align-center" role="group" aria-label="사용자 계정 관리">
        <!-- PC 로그인 -->
        <button type="button" class="header-util__btn transparent-button-40 gap-8 flex align-center display-none-tablet">
          <i class="header-login-24" aria-hidden="true"></i>
          <span class="body2-m-16">로그인</span>
        </button>

        <!-- 통합검색 열기 -->
        <button type="button" class="header-util__btn transparent-button-40 gap-8 flex align-center"
          data-header-search-open aria-expanded="false" aria-controls="header-search-panel">
          <i class="header-search-24" aria-hidden="true"></i>
          <span class="body2-m-16">통합검색</span>
        </button>

        <!-- 모바일 메뉴 -->
        <button type="button" class="header-util__btn header-util__btn--menu transparent-button-48 icon-button-left flex align-center"
          data-header-drawer-open aria-expanded="false" aria-controls="header-drawer">
          <i class="header-menu-24" aria-hidden="true"></i>
          <span class="body2-m-16">메뉴</span>
        </button>
      </div>
    </div>
  </div>
</header>
```

### PC GNB (depth1 + depth2 드롭다운)

```html
<nav class="header-nav display-none-tablet" role="navigation" aria-label="주 메뉴">
  <div class="inner-default">
    <ul class="header-nav__list">
      <li class="header-nav__item">
        <button type="button" class="header-nav__link body1-m-18" data-header-nav-toggle
          aria-expanded="false" aria-haspopup="true" aria-controls="header-nav-sub-1">
          depth1
          <i class="arrow-icon" aria-hidden="true"></i>
        </button>
        <div class="header-nav__sub" id="header-nav-sub-1">
          <div class="inner-default header-nav__sub-inner">
            <div class="header-nav__sub-aside">
              <p class="heading9-sb-22 color-slate-900">depth1</p>
            </div>
            <div class="header-nav__sub-content">
              <ul class="header-nav__sub-list" role="menu" aria-label="depth1 하위 메뉴">
                <li role="none">
                  <a href="#" class="header-nav__sub-link body2-r-16" role="menuitem">
                    depth2
                    <span class="chevron-right-slate-700" aria-hidden="true"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</nav>
```

### 통합검색 패널

```html
<div class="header-search-panel" id="header-search-panel" role="dialog" aria-modal="true" aria-labelledby="header-search-title">
  <div class="inner-default header-search-panel__inner">
    <h2 class="blind" id="header-search-title">통합 검색</h2>
    <button type="button" class="header-search-panel__close transparent-button-40" data-header-search-close>닫기</button>

    <div class="header-search-panel__top flex align-center gap-10">
      <div class="search-54 flex pl-20 pr-16 justify-between flex-1">
        <input type="search" id="header-search-input" class="body1-r-18 w-full" placeholder="검색어를 입력하세요">
        <button type="button" class="search-button">
          <i class="search-icon-54"><span class="blind">검색</span></i>
        </button>
      </div>
      <button type="button" class="border-blue-button-48" data-header-search-detail
        aria-expanded="false" aria-controls="header-search-filter">상세검색</button>
    </div>

    <div class="header-search-panel__filter mt-24" id="header-search-filter" aria-label="검색 필터">
      <div class="header-search-panel__filter-group active">
        <button type="button" class="header-search-panel__filter-trigger body2-sb-16" aria-expanded="true">
          필터명
          <i class="arrow-icon" aria-hidden="true"></i>
        </button>
        <div class="header-search-panel__filter-list">
          <label class="checkbox-chip-label body2-r-16">
            <input type="checkbox" class="checkbox-chip" checked>
            <span class="body2-m-16">전체</span>
          </label>
          <label class="checkbox-chip-label body2-r-16">
            <input type="checkbox" class="checkbox-chip">
            <span class="body2-m-16">옵션</span>
          </label>
        </div>
      </div>
      <div class="header-search-panel__actions flex justify-end gap-10">
        <button type="button" class="border-slate-button-48 w-100">검색 초기화</button>
        <button type="button" class="blue-button-48 w-100">검색</button>
      </div>
    </div>
  </div>
</div>
```

### 모바일 드로어

```html
<div class="header-drawer" id="header-drawer" role="dialog" aria-modal="true" aria-labelledby="header-drawer-title">
  <div class="header-drawer__overlay" data-header-drawer-close></div>
  <div class="header-drawer__panel">
    <h2 class="blind" id="header-drawer-title">전체 메뉴</h2>
    <div class="header-drawer__head flex justify-end">
      <button type="button" class="transparent-button-40" data-header-drawer-close aria-label="메뉴 닫기">
        <i class="close-icon"><span class="blind">메뉴 닫기</span></i>
      </button>
    </div>
    <div class="header-drawer__login">
      <button type="button" class="transparent-button-48 icon-button-left flex align-center w-full">
        <i class="header-login-24" aria-hidden="true"></i>
        <span class="body2-m-16">로그인을 해주세요</span>
      </button>
    </div>
    <nav class="header-drawer__nav" role="navigation" aria-label="주 메뉴">
      <ul class="header-drawer__list">
        <li class="header-drawer__item">
          <button type="button" class="header-drawer__link body2-m-16" aria-expanded="false">
            depth1
            <i class="arrow-icon" aria-hidden="true"></i>
          </button>
          <div class="header-drawer__sub">
            <ul class="header-drawer__sub-list">
              <li><a href="#" class="header-drawer__sub-link body2-r-16">depth2</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</div>
```

---

## JS 초기화

```js
// PC GNB depth1 토글 (active 클래스 + aria-expanded 동기화)
const headerNav = document.querySelector('.header-nav');

function closeHeaderNavItems() {
  document.querySelectorAll('.header-nav__item.active').forEach((item) => {
    item.classList.remove('active');
    item.querySelector('[data-header-nav-toggle]')?.setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('[data-header-nav-toggle]').forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = trigger.closest('.header-nav__item');
    const isOpen = item.classList.contains('active');
    closeHeaderNavItems();
    if (!isOpen) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', (e) => {
  if (!headerNav?.contains(e.target)) closeHeaderNavItems();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeHeaderNavItems();
});

// 통합검색 패널 / 드로어 열기·닫기 (active 토글 + aria-expanded 동기화 + ESC 닫기)
function toggleHeaderOverlay(panelId, triggerSelector, isOpen) {
  const panel = document.getElementById(panelId);
  panel?.classList.toggle('active', isOpen);
  document.querySelectorAll(triggerSelector).forEach((t) => t.setAttribute('aria-expanded', String(isOpen)));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

document.querySelectorAll('[data-header-search-open]').forEach((btn) =>
  btn.addEventListener('click', () => toggleHeaderOverlay('header-search-panel', '[data-header-search-open]', true)));
document.querySelectorAll('[data-header-search-close]').forEach((btn) =>
  btn.addEventListener('click', () => toggleHeaderOverlay('header-search-panel', '[data-header-search-open]', false)));

document.querySelectorAll('[data-header-drawer-open]').forEach((btn) =>
  btn.addEventListener('click', () => toggleHeaderOverlay('header-drawer', '[data-header-drawer-open]', true)));
document.querySelectorAll('[data-header-drawer-close]').forEach((btn) =>
  btn.addEventListener('click', () => toggleHeaderOverlay('header-drawer', '[data-header-drawer-open]', false)));

// 드로어 depth1 하위메뉴 토글
document.querySelectorAll('.header-drawer__link').forEach((link) => {
  link.addEventListener('click', () => {
    const item = link.closest('.header-drawer__item');
    const isOpen = item.classList.toggle('active');
    link.setAttribute('aria-expanded', String(isOpen));
  });
});
```

---

## 규칙

- `header` 루트에 `role="banner"` 필수
- `header-nav`에 `role="navigation"`, `aria-label` 필수
- GNB 트리거에는 `aria-expanded` / `aria-haspopup="true"` / `aria-controls`(서브메뉴 id와 일치) 필수
- 통합검색·드로어 열기 버튼에는 `aria-expanded` / `aria-controls`(패널 id와 일치) 필수
- 통합검색 패널·드로어는 `role="dialog"` `aria-modal="true"` `aria-labelledby`(blind 처리된 제목) 필수
- 드로어 닫기 버튼에는 `aria-label` 필수
- 열림/닫힘은 `active` 클래스 토글로만 제어 (인라인 스타일 금지)
- 유틸 버튼은 `transparent-button-{size}` 기반, 아이콘 포함 시 `flex align-center` 추가
- GNB 서브메뉴 링크 목록은 `ul[role=menu]` > `li[role=none]` > `a[role=menuitem]` 구조 유지
- PC GNB·PC 전용 유틸은 `display-none-tablet`로 1280px 기준 전환
- 정의되지 않은 임의 클래스 생성 금지 (`header-*` BEM 패턴만 사용)
