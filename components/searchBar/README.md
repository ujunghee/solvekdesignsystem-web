# Search

검색 입력 컴포넌트입니다. 선행형 / 후행형 / CTA버튼형 / 팝업형 4가지 variant를 제공합니다.

---

## 사이즈

| 사이즈 | 클래스 | 아이콘 | 폰트 |
|---|---|---|---|
| 54 | `search-54` | `search-icon-54` | `body1-r-18` |
| 48 | `search-48` | `search-icon-54` | `body1-r-18` |
| 40 | `search-40` | `search-icon-40` | `body2-r-16` |
| 36 | `search-36` | `search-icon-40` | `body3-r-14` |

---

## variant

### 선행형 (아이콘 왼쪽)

```html
<div class="search-54 flex px-16 gap-12">
  <button type="button" class="search-button">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
  <input type="text" class="body1-r-18" placeholder="검색어를 입력해주세요">
</div>
```

### 후행형 (아이콘 오른쪽)

```html
<div class="search-54 flex pl-20 pr-16 space-between">
  <input type="text" class="body1-r-18 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="search-button">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
</div>
```

### CTA 버튼형

```html
<div class="search-bar flex gap-8">
  <input type="text" class="search-48 px-12" placeholder="검색어를 입력해주세요">
  <button type="button" class="slate-button-lg w-100">검색</button>
</div>
```

### 팝업형 (최근 검색어)

```html
<div class="search-wrapper">
  <div class="search-54 flex pl-20 pr-16 space-between">
    <input type="text" class="body1-r-18 w-full search-input"
      placeholder="검색어를 입력해주세요" id="search-example">
    <button type="button" class="search-button">
      <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
    </button>
  </div>
  <div class="search-popup py-8" role="dialog" aria-modal="true" aria-labelledby="search-example">
    <div class="search flex align-center justify-between">
      <p class="body2-sb-16 color-slate-900 pl-20">최근 검색어</p>
      <button type="button" class="transparent-button-s">전체삭제</button>
    </div>
    <ul>
      <li class="px-20 flex align-center justify-between">
        <a class="flex align-center gap-8 py-8">
          <i class="clock-icon"><span class="blind">시계 아이콘</span></i>
          <span class="body2-r-16 color-slate-900">최근 검색어</span>
        </a>
        <button type="button" class="close-icon">
          <span class="blind">닫기 버튼</span>
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

- 팝업형은 반드시 `search-wrapper`로 감싸야 함
- 팝업 상태는 `search-popup`에 `active` 클래스 토글만 사용, 인라인 스타일 금지
- 접근성 속성 (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`) 반드시 포함
- `search-input` 클래스는 팝업형 input에만 추가 (JS 이벤트 바인딩용)