# Search

검색 입력 컴포넌트입니다. 선행형 / 후행형 / CTA버튼형 / 팝업형 4가지 variant를 제공합니다.

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
- `search-input` 클래스는 팝업형 input에만 추가 (JS 이벤트 바인딩용)
