# Header (지도)

지도/GIS 서비스용 헤더 컴포넌트입니다. 공유포털형(외부 사용자용, type1) / 인트라넷형(내부 관리자용, type2) 2가지 variant를 제공합니다. 양쪽 모두 중앙 주소 검색창에 검색 결과 드롭다운(키워드 하이라이트 + 지도 미리보기)을 포함합니다.

---

## variant

### 공유포털형 (Portal / type1)

로고(좌) + 중앙 주소 검색창(결과 드롭다운 포함) + GNB·로그인(우) 배치입니다.

**대표 상황:** 외부 사용자에게 공개되는 지도/GIS 서비스. 주 메뉴(GNB)와 로그인 버튼이 헤더 우측에 위치하며, 비로그인 사용자도 접근 가능한 공개형 레이아웃에 사용합니다.

```
┌──────────────────────────────────────────────────────────────────────┐
│  [로고]        [🔍 주소를 검색해주세요      ]  홈 · 메뉴 · API [로그인] │
│  (좌 고정)        (중앙, flex:1)                     (우 고정)        │
└──────────────────────────────────────────────────────────────────────┘
```
```html
<header role="banner" class="bg-white border-b border-slate-200 px-16">
  <div class="flex align-center justify-between h-64 gap-24">
    <h1 class="header__logo flex-none">
      <a href="/" aria-label="사이트명 홈으로">
        <img src="/image/icon/header-logo.svg" alt="사이트명">
      </a>
    </h1>

    <div class="map-search-wrapper">
      <div class="map-header-search-44 flex pl-8 pr-16 gap-8 align-center">
        <i class="map-search-icon"><span class="blind">검색</span></i>
        <label for="map-header-search-1" class="blind">주소 검색</label>
        <input type="search" id="map-header-search-1" class="body2-r-16 w-full" placeholder="주소를 검색해주세요" autocomplete="off" aria-controls="map-search-result-1" aria-expanded="false">
      </div>
      <div class="map-search-dropdown">
        <ul id="map-search-result-1" class="map-search-result" aria-label="검색 결과">
          <li>
            <a href="#" class="map-search-result__item active">
              <i class="map-icon mt-6" aria-hidden="true"></i>
              <div class="map-search-result__body">
                <p class="body2-m-16 color-slate-900">장소명 01</p>
                <p class="body3-r-14 color-slate-500">시・도 <span class="color-blue-500">시・군・구</span> 도로명 00</p>
              </div>
              <span class="map-search-result__category body3-m-14 color-slate-500">분류</span>
            </a>
          </li>
        </ul>
        <div id="map-search-preview-1" class="map-search-result__preview" aria-hidden="true">
          <div class="map-search-result__preview-empty bg-slate-100"></div>
        </div>
      </div>
    </div>

    <nav role="navigation" aria-label="주 메뉴" class="flex align-center gap-24 flex-none">
      <ul class="flex align-center gap-24">
        <li><a href="#" class="body2-m-16 color-slate-700">홈</a></li>
        <li><a href="#" class="body2-m-16 color-slate-700">데이터 탐색</a></li>
        <li><a href="#" class="body2-m-16 color-slate-700">Open API</a></li>
        <li><a href="#" class="body2-m-16 color-slate-700">고객센터</a></li>
      </ul>
      <button type="button" class="border-slate-button-40">로그인</button>
    </nav>
  </div>
</header>
```

---

### 인트라넷형 (Intranet / type2)

로고·1depth 메뉴(좌) + 중앙 주소 검색창(결과 드롭다운 포함) + 사용자정보·시간·로그아웃(우) 배치입니다.

**대표 상황:** 로그인한 내부 사용자가 사용하는 인트라넷 지도 헤더. 1depth 메뉴가 로고 옆(좌)에 위치하고, 우측에 사용자명·현재시간·로그아웃이 표시되는 관리형 레이아웃에 사용합니다.

```
┌────────────────────────────────────────────────────────────────────────────┐
│  [로고] 홈 · 지도    [🔍 주소를 검색해주세요      ]  👤 홍길동님 09:40 로그아웃 │
│  (좌 고정)              (중앙, flex:1)                    (우 고정)          │
└────────────────────────────────────────────────────────────────────────────┘
```
```html
<header role="banner" class="bg-white border-b border-slate-200 px-16">
  <div class="flex align-center justify-between h-64 gap-24">
    <div class="flex align-center gap-24 flex-none">
      <h1 class="header__logo">
        <a href="/" aria-label="사이트명 홈으로">
          <img src="/image/icon/header-logo.svg" alt="사이트명">
        </a>
      </h1>
      <nav role="navigation" aria-label="주 메뉴">
        <ul class="flex align-center gap-24">
          <li><a href="#" class="body2-sb-16 color-slate-400">홈</a></li>
          <li><a href="#" class="body2-sb-16 color-slate-900">지도</a></li>
        </ul>
      </nav>
    </div>

    <div class="map-search-wrapper">
      <div class="map-header-search-44 flex pl-8 pr-16 gap-8 align-center">
        <i class="map-search-icon"><span class="blind">검색</span></i>
        <label for="map-header-search-2" class="blind">주소 검색</label>
        <input type="search" id="map-header-search-2" class="body2-r-16 w-full" placeholder="주소를 검색해주세요" autocomplete="off" aria-controls="map-search-result-2" aria-expanded="false">
      </div>
      <div class="map-search-dropdown">
        <ul id="map-search-result-2" class="map-search-result" aria-label="검색 결과">
          <li>
            <a href="#" class="map-search-result__item active">
              <i class="map-icon mt-6" aria-hidden="true"></i>
              <div class="map-search-result__body">
                <p class="body2-m-16 color-slate-900">장소명 01</p>
                <p class="body3-r-14 color-slate-500">시・도 <span class="color-blue-500">시・군・구</span> 도로명 00</p>
              </div>
              <span class="map-search-result__category body3-m-14 color-slate-500">분류</span>
            </a>
          </li>
        </ul>
        <div id="map-search-preview-2" class="map-search-result__preview" aria-hidden="true">
          <div class="map-search-result__preview-empty bg-slate-100"></div>
        </div>
      </div>
    </div>

    <div class="flex align-center gap-12 flex-none">
      <div class="flex align-center gap-6">
        <div class="flex align-center gap-8">
          <i class="user-icon" aria-hidden="true"></i>
          <span class="body2-m-16 color-slate-900">홍길동님</span>
        </div>
        <div class="flex align-center gap-6">
          <i class="clock-icon" aria-hidden="true"></i>
          <time class="body2-r-16 color-slate-800">09:40</time>
        </div>
      </div>
      <button type="button" class="transparent-button-48 flex align-center gap-6">
        <span class="body2-m-16 color-slate-700">로그아웃</span>
        <i class="admin-logout-icon" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</header>
```

---

## 검색 결과 드롭다운 구조

```
div.map-search-wrapper
├── div.map-header-search-44 (검색 입력)
│   ├── i.map-search-icon
│   ├── label.blind
│   └── input[type=search][autocomplete=off][aria-controls][aria-expanded]
└── div.map-search-dropdown (절대 위치, top: 100% + 0.4rem, z-index: 1000)
    ├── ul.map-search-result[aria-label] (.active로 노출)
    │   └── li > a.map-search-result__item[.active]
    │       ├── i.map-icon.mt-6[aria-hidden=true]
    │       ├── div.map-search-result__body
    │       │   ├── p.body2-m-16.color-slate-900 (장소명)
    │       │   └── p.body3-r-14.color-slate-500 (주소, 키워드 부분 color-blue-500)
    │       └── span.map-search-result__category.body3-m-14.color-slate-500 (분류)
    └── div.map-search-result__preview[aria-hidden=true] (320×200 지도 미리보기, .active로 노출)
        └── div.map-search-result__preview-empty.bg-slate-100 (또는 img/지도 SDK)
```

---

## JS — 검색 드롭다운 열기/닫기 + 키워드 하이라이트

```javascript
document.querySelectorAll('.map-search-wrapper').forEach((wrapper) => {
  const input = wrapper.querySelector('input[type="search"]');
  const result = wrapper.querySelector('.map-search-result');
  const preview = wrapper.querySelector('.map-search-result__preview');
  if (!input || !result) return;

  const escapeHtml = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const escapeReg = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const renderHighlight = (keyword) => {
    result.querySelectorAll('.map-search-result__body p').forEach((p) => {
      const base = p.dataset.text || (p.dataset.text = p.textContent);
      if (!keyword) { p.textContent = base; return; }
      const re = new RegExp('(' + escapeReg(escapeHtml(keyword)) + ')', 'gi');
      p.innerHTML = escapeHtml(base).replace(re, '<span class="color-blue-500">$1</span>');
    });
  };
  renderHighlight('');

  const box = wrapper.querySelector('.map-header-search-44');
  const hidePreview = () => preview && preview.classList.remove('active');
  const open = () => {
    result.classList.add('active');
    if (box) box.classList.add('active');
    input.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    result.classList.remove('active');
    if (box) box.classList.remove('active');
    input.setAttribute('aria-expanded', 'false');
    hidePreview();
  };

  input.addEventListener('focus', open);
  input.addEventListener('input', () => {
    const keyword = input.value.trim();
    renderHighlight(keyword);
    keyword ? open() : close();
  });

  result.querySelectorAll('.map-search-result__item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      if (preview) preview.classList.add('active');
    });
    item.addEventListener('click', (e) => {
      e.preventDefault();
      result.querySelectorAll('.map-search-result__item').forEach((el) => el.classList.remove('active'));
      item.classList.add('active');
      const name = item.querySelector('.map-search-result__body p');
      if (name) input.value = name.textContent.trim();
      close();
    });
  });

  result.addEventListener('mouseleave', hidePreview);

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) close();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.map-search-result.active').forEach((result) => {
      result.classList.remove('active');
      const wrapper = result.closest('.map-search-wrapper');
      if (!wrapper) return;
      const input = wrapper.querySelector('input[type="search"]');
      const preview = wrapper.querySelector('.map-search-result__preview');
      if (input) input.setAttribute('aria-expanded', 'false');
      if (preview) preview.classList.remove('active');
    });
  }
});
```

---

## 규칙

- `header` 루트에 `role="banner"` 필수
- 로고는 `h1.header__logo > a[aria-label] > img` 구조
- `nav`에 `role="navigation"`, `aria-label="주 메뉴"` 필수
- 중앙 주소 검색창은 `map-search-wrapper` > `map-header-search-44` + `map-search-icon` + `label.blind` + `input[type=search]` 구조 (`components/search/README.md` 지도 헤더 검색창 참고)
- 검색 결과 드롭다운은 `map-search-dropdown` > `ul.map-search-result` + `div.map-search-result__preview` 구조
- 드롭다운 항목은 `li > a.map-search-result__item > (i.map-icon + div.map-search-result__body + span.map-search-result__category)` 구조
- `map-search-result`는 `active` 클래스로 노출, 항목 hover/active 시 `bg-slate-50`
- `map-search-result__preview`는 검색 결과 옆에 지도 미리보기(320×200)를 표시하며 결과 항목 mouseenter 시 `active` 노출, mouseleave 시 숨김
- input에 `autocomplete="off"`, `aria-controls`(결과 리스트 id), `aria-expanded` 필수
- `.map-header-search-44.active`로 검색창 포커스 시 `border-color: blue-500`, `background: white`
- 인트라넷형 현재 위치(1depth)는 `body2-sb-16 color-slate-900`, 비활성은 `body2-sb-16 color-slate-400`으로 구분
- 인트라넷형 사용자 아이콘(`user-icon`)·시계 아이콘(`clock-icon`)·로그아웃 아이콘(`admin-logout-icon`)은 `aria-hidden="true"` 처리
- HTML 내 사이트명·장소명·주소·분류 등은 샘플 데이터이며 실제 서비스에 맞게 교체
- 정의되지 않은 임의 클래스 생성 금지
