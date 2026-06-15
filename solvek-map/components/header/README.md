# Header (지도)

지도/GIS 서비스용 헤더 컴포넌트입니다. 공유포털형(외부 사용자용) / 인트라넷형(내부 관리자용) 2가지 variant를 제공합니다.

---

## variant

### 공유포털형 (Portal)

로고 + 중앙 주소 검색창 + GNB + 로그인 버튼으로 구성됩니다.

**대표 상황:** 환경정보 융합 공유포털 등 외부 사용자에게 공개되는 지도 포털

```html
<header role="banner" class="bg-white border-b border-slate-200 px-16">
  <div class="flex align-center justify-between h-64 gap-24">
    <h1 class="header__logo flex-none">
      <a href="/" aria-label="환경정보 융합 공유포털 홈으로 이동">
        <img src="/image/icon/header-logo.svg" alt="환경정보 융합 공유포털">
      </a>
    </h1>

    <div class="map-header-search-44 flex pl-8 pr-16 gap-8 align-center">
      <i class="map-search-icon"><span class="blind">검색</span></i>
      <label for="map-header-search-1" class="blind">주소 검색</label>
      <input type="search" id="map-header-search-1" class="body2-r-16 w-full" placeholder="주소를 검색해주세요">
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

### 인트라넷형 (Intranet)

로고 + 1depth 메뉴 + 중앙 주소 검색창 + 사용자정보/시간/로그아웃으로 구성됩니다.

**대표 상황:** GIS통합인트라넷시스템 등 로그인한 내부 사용자가 사용하는 지도 헤더

```html
<header role="banner" class="bg-white border-b border-slate-200 px-16">
  <div class="flex align-center justify-between h-64 gap-24">
    <div class="flex align-center gap-24 flex-none">
      <h1 class="header__logo">
        <a href="/" aria-label="GIS통합인트라넷시스템 홈으로 이동">
          <img src="/image/icon/header-logo.svg" alt="GIS통합인트라넷시스템">
        </a>
      </h1>
      <nav role="navigation" aria-label="주 메뉴">
        <ul class="flex align-center gap-24">
          <li><a href="#" class="body2-sb-16 color-slate-400">홈</a></li>
          <li><a href="#" class="body2-sb-16 color-slate-900">지도</a></li>
        </ul>
      </nav>
    </div>

    <div class="map-header-search-44 flex pl-8 pr-16 gap-8 align-center">
      <i class="map-search-icon"><span class="blind">검색</span></i>
      <label for="map-header-search-2" class="blind">주소 검색</label>
      <input type="search" id="map-header-search-2" class="body2-r-16 w-full" placeholder="주소를 검색해주세요">
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

## 규칙

- `header` 루트에 `role="banner"` 필수
- 로고는 `h1.header__logo > a[aria-label] > img` 구조
- `nav`에 `role="navigation"`, `aria-label="주 메뉴"` 필수
- 중앙 주소 검색창은 `map-header-search-44` + `map-search-icon` + `label.blind` + `input[type=search]` 구조 (`components/search/README.md` 지도 헤더 검색창 참고)
- 인트라넷형 현재 위치(1depth)는 `body2-sb-16 color-slate-900`, 비활성은 `body2-sb-16 color-slate-400`으로 구분
- 인트라넷형 사용자 아이콘(`user-icon`)·시계 아이콘(`clock-icon`)·로그아웃 아이콘(`admin-logout-icon`)은 `aria-hidden="true"` 처리
- 로그아웃 버튼은 `transparent-button-48 flex align-center gap-6` 구조
- 정의되지 않은 임의 클래스 생성 금지 (`map-header-search-44`, `header__logo` 등 정의된 클래스만 사용)
