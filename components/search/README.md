# Search

검색 입력 컴포넌트입니다. 선행형 / 후행형 / CTA버튼형 / 팝업형 / 메인검색형 5가지 variant를 제공합니다.

---

## 사이즈

| 사이즈 | 클래스 | 아이콘 | 폰트 | padding | gap |
|---|---|---|---|---|---|
| 54 | `search-54` | `search-icon-54` | `body1-r-18` | `px-16` | `gap-12` |
| 48 | `search-48` | `search-icon-54` | `body1-r-18` | `px-16` | `gap-12` |
| 40 | `search-40` | `search-icon-40` | `body2-r-16` | `px-12` | `gap-10` |
| 36 | `search-36` | `search-icon-40` | `body3-r-14` | `px-8`  | `gap-10` |

---

## variant

### 선행형 (Leading Icon)

아이콘이 input 왼쪽에 위치합니다. 버튼 래퍼 없이 `i` 태그를 직접 사용합니다.

**대표 상황:** 모바일 검색창, GIS 검색창, 콘텐츠 내 검색

```html
<!-- 54 -->
<div class="search-54 flex px-16 gap-12 align-center">
  <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  <input type="search" class="body1-r-18 w-full" placeholder="검색어를 입력해주세요">
</div>

<!-- 48 -->
<div class="search-48 flex px-16 gap-12 align-center">
  <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  <input type="search" class="body1-r-18 w-full" placeholder="검색어를 입력해주세요">
</div>

<!-- 40 -->
<div class="search-40 flex px-12 gap-10 align-center">
  <i class="search-icon-40"><span class="blind">검색 버튼</span></i>
  <input type="search" class="body2-r-16 w-full" placeholder="검색어를 입력해주세요">
</div>

<!-- 36 -->
<div class="search-36 flex px-8 gap-10 align-center">
  <i class="search-icon-40"><span class="blind">검색 버튼</span></i>
  <input type="search" class="body3-r-14 w-full" placeholder="검색어를 입력해주세요">
</div>
```

---

### 후행형 (Trailing Icon)

아이콘이 input 오른쪽에 위치합니다. 모든 사이즈 `align-center` + `search-button h-fit` 사용.

**대표 상황:** 웹 배치, 빠른 조회

```html
<!-- 54 -->
<div class="search-54 flex pl-20 pr-16 justify-between align-center">
  <input type="search" class="body1-r-18 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="search-button h-fit">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
</div>

<!-- 48 -->
<div class="search-48 flex pl-16 pr-12 justify-between align-center">
  <input type="search" class="body1-r-18 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="search-button h-fit">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
</div>

<!-- 40 -->
<div class="search-40 flex pl-12 pr-10 justify-between align-center">
  <input type="search" class="body2-r-16 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="search-button h-fit">
    <i class="search-icon-40"><span class="blind">검색 버튼</span></i>
  </button>
</div>

<!-- 36 -->
<div class="search-36 flex pl-8 pr-8 justify-between align-center">
  <input type="search" class="body3-r-14 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="search-button h-fit">
    <i class="search-icon-40"><span class="blind">검색 버튼</span></i>
  </button>
</div>
```

---

### CTA 버튼형 (Button)

input + 버튼 조합으로 검색 실행을 강조합니다.

**대표 상황:** 관리자 페이지, 필터/조건 검색

```html
<div class="search-bar flex gap-8 align-center">
  <input type="search" class="search-48 px-12 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="slate-button-48 w-100 h-fit">검색</button>
</div>
```

---

### 팝업형 (Popup)

최근 검색어 팝업이 포함된 응용형입니다.

**대표 상황:** 메인 검색창, 통합 검색

```html
<div class="search-wrapper">
  <div class="search-54 flex pl-20 pr-16 justify-between align-center">
    <input type="search" class="body1-r-18 w-full search-input"
      placeholder="검색어를 입력해주세요" id="search-example">
    <button type="button" class="search-button h-fit">
      <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
    </button>
  </div>
  <div class="search-popup py-8" role="dialog" aria-modal="true" aria-labelledby="search-example">
    <div class="search flex align-center justify-between">
      <p class="body2-sb-16 color-slate-900 pl-20">최근 검색어</p>
      <button type="button" class="transparent-button-40">전체삭제</button>
    </div>
    <ul>
      <li class="px-20 flex align-center justify-between">
        <a href="#" class="flex align-center gap-8 py-8">
          <i class="clock-icon"><span class="blind">시계 아이콘</span></i>
          <span class="body2-r-16 color-slate-900">최근 검색어</span>
        </a>
        <button type="button">
          <i class="close-icon"><span class="blind">닫기 버튼</span></i>
        </button>
      </li>
    </ul>
  </div>
</div>
```

---

### 메인 검색창 (Main Search)

카테고리 `select` + `input` + 그라데이션 테두리로 강조한 검색창입니다. 반드시 `main-search-wrapper`로 감쌉니다.

**사이즈 구분**

| 사이즈 | 클래스 | 사용 위치 |
|---|---|---|
| 54 | `main-search-54` | 메인 화면 검색창 |
| 62 | `main-search-62` | 통합검색 검색창 |

```html
<!-- 메인 화면: main-search-54 -->
<div class="main-search-wrapper">
  <div class="main-search-54 flex align-center gap-8 px-12">
    <div class="select-wrapper main-search__select-wrapper">
      <label for="main-search-category" class="blind">검색 분류</label>
      <select id="main-search-category" class="select-48 flex align-center" name="main-search-category" aria-label="검색 분류">
        <option value="heritage" selected>국가유산명</option>
        <option value="region">지역명</option>
      </select>
    </div>
    <label for="main-search-example" class="blind">검색어</label>
    <input type="search" id="main-search-example" class="main-search__input body1-r-18 flex-1"
      placeholder="찾고 싶은 국가유산명을 입력해주세요" autocomplete="off">
    <button type="button" class="search-button h-fit">
      <i class="main-search-blue-icon">
        <span class="blind">검색 버튼</span>
      </i>
    </button>
  </div>
</div>

<!-- 통합검색: main-search-62 -->
<div class="main-search-wrapper">
  <div class="main-search-62 flex align-center gap-8 px-12">
    <div class="select-wrapper main-search__select-wrapper">
      <label for="main-search-category-2" class="blind">검색 분류</label>
      <select id="main-search-category-2" class="select-48 flex align-center" name="main-search-category-2" aria-label="검색 분류">
        <option value="heritage" selected>국가유산명</option>
        <option value="region">지역명</option>
      </select>
    </div>
    <label for="main-search-example-2" class="blind">검색어</label>
    <input type="search" id="main-search-example-2" class="main-search__input body1-r-18 flex-1"
      placeholder="찾고 싶은 국가유산명을 입력해주세요" autocomplete="off">
    <button type="button" class="search-button h-fit">
      <i class="main-search-blue-icon">
        <span class="blind">검색 버튼</span>
      </i>
    </button>
  </div>
</div>
```

---

### 지도 헤더 검색창 (Map Header Search)

지도/GIS 헤더 중앙에 위치하는 주소 검색창입니다. `search-{size}` 패턴과 별개의 자체 클래스 `map-header-search-44`를 사용합니다. `map-search-wrapper`로 감싸면 검색 결과 드롭다운 + 지도 미리보기를 배치할 수 있습니다.

**대표 상황:** 지도 헤더 중앙 주소 검색창

#### 기본형 (드롭다운 없음)

```html
<div class="map-header-search-44 flex pl-8 pr-16 gap-8 align-center">
  <i class="map-search-icon"><span class="blind">검색</span></i>
  <label for="map-header-search-example" class="blind">주소 검색</label>
  <input type="search" id="map-header-search-example" class="body2-r-16 w-full" placeholder="주소를 검색해주세요">
</div>
```

#### 검색 결과 드롭다운 포함

```html
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
            <p class="body2-m-16 color-slate-900">장소명</p>
            <p class="body3-r-14 color-slate-500">시・도 <span class="color-blue-500">시・군・구</span> 도로명</p>
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
```

---

## JS — 팝업 열기/닫기

```javascript
const searchWrapper = document.querySelector('.search-wrapper');
const searchPopup = document.querySelector('.search-popup');
const searchInput = searchWrapper.querySelector('.search-input');

searchInput.addEventListener('click', (e) => {
  e.stopPropagation();
  searchPopup.classList.add('active');
});

searchInput.addEventListener('focus', () => {
  searchPopup.classList.add('active');
});

document.addEventListener('click', (e) => {
  if (!searchWrapper.contains(e.target)) {
    searchPopup.classList.remove('active');
  }
});
```

---

## 규칙

- 선행형: `i.search-icon-{size}` 직접 사용, `button.search-button`으로 감싸지 않는다
- 후행형: 모든 사이즈 `align-center` + `search-button h-fit` 사용
- 팝업형은 반드시 `search-wrapper`로 감싸야 함
- 팝업 상태는 `search-popup`에 `active` 클래스 토글만 사용, 인라인 스타일 금지
- 팝업에 `role="dialog"`, `aria-modal="true"`, `aria-labelledby`(input id와 일치) 필수
- 최근 검색어 `<a>` 태그에 `href` 반드시 포함
- 닫기 버튼: `<button> > <i class="close-icon">` 구조 (button에 close-icon 직접 금지)
- 메인 검색창은 `main-search-wrapper`로 감싸고, `main-search-54`(메인 화면) / `main-search-62`(통합검색) 용도에 맞게 사용
- 메인 검색창 검색 버튼: `<button class="search-button h-fit"> > <i class="main-search-blue-icon">` 구조
- `search-input` 클래스는 팝업형 input에만 추가 (JS 이벤트 바인딩용)
- 지도 헤더 검색창은 `map-header-search-44` 클래스를 사용하며 `map-search-icon` 아이콘과 `body2-r-16` 폰트로 구성
- 검색 결과 드롭다운 사용 시 `map-search-wrapper`로 감싸야 함
- `map-search-result`는 `active` 클래스로 노출, 항목 호버/active 시 `bg-slate-50`
- `map-search-result__preview`는 결과 항목 호버 시 지도 미리보기(320×200) 표시, `active` 클래스로 노출
- 드롭다운 사용 시 input에 `autocomplete="off"`, `aria-controls`(결과 리스트 id), `aria-expanded` 필수
