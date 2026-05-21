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

### 선행형 (Leading Icon)

아이콘이 input 왼쪽에 위치합니다.

**언제 쓰나요?**
- 사용자가 바로 타이핑을 시작할 것이 확실할 때
- 검색 실행이 Enter(키보드)로 자연스럽게 이어질 때
- 검색이 보조 기능일 때

**대표 상황:** 모바일 검색창, GIS 검색창, 콘텐츠 내 검색

```html
<div class="search-54 flex px-16 gap-12">
  <button type="button" class="search-button">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
  <input type="search" class="body1-r-18" placeholder="검색어를 입력해주세요">
</div>
```

---

### 후행형 (Trailing Icon)

아이콘이 input 오른쪽에 위치합니다.

**언제 쓰나요?**
- 사용자가 아이콘을 눌러서 검색할 가능성이 있을 때
- Enter 대신 클릭/터치 실행을 보완해야 할 때
- 검색을 간단한 액션으로 제공할 때

**대표 상황:** 클릭이 잘 일어나는 위치에 배치할 경우(웹), 빠른 조회가 필요할 경우

```html
<div class="search-54 flex pl-20 pr-16 space-between">
  <input type="search" class="body1-r-18 w-full" placeholder="검색어를 입력해주세요">
  <button type="button" class="search-button">
    <i class="search-icon-54"><span class="blind">검색 버튼</span></i>
  </button>
</div>
```

---

### CTA 버튼형 (Button)

input + 버튼 조합으로 검색 실행을 강조합니다.

**언제 쓰나요?**
- 검색 결과가 중요한 행동으로 이어질 때
- 사용자가 검색 실행을 명확히 인지해야 할 때
- 입력 실수나 조건 확인이 필요한 경우

**대표 상황:** 관리자 페이지, 필터/조건 검색

```html
<div class="search-bar flex gap-8">
  <input type="search" class="search-48 px-12" placeholder="검색어를 입력해주세요">
  <button type="button" class="slate-button-lg w-100">검색</button>
</div>
```

---

### 팝업형 (Popup)

최근 검색어 팝업이 포함된 응용형입니다.

**언제 쓰나요?**
- 최근 검색어 또는 자동완성을 제공해야 할 때

**대표 상황:** 메인 검색창, 통합 검색

```html
<div class="search-wrapper">
  <div class="search-54 flex pl-20 pr-16 space-between">
    <input type="search" class="body1-r-18 w-full search-input"
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