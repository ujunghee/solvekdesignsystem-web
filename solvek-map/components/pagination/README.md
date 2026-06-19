# Map Pagination

지도 화면의 검색 결과나 사이드 패널 목록에서 사용하는 컴팩트 페이지네이션입니다. 공통 `pagination` 컴포넌트를 기반으로 하되, `map-pagination` 클래스를 추가해 아이콘-only 처음/이전/다음/마지막 이동 버튼과 작은 숫자 페이지를 제공합니다.

---

## 구조

```text
nav.pagination.map-pagination[aria-label="페이지 이동"]
└── ul.pagination__list.flex.align-center.justify-center
    ├── li > a.pagination__nav[aria-label="처음 페이지"]
    │   └── span.chevron-pagination-first-slate-700[aria-hidden=true]
    ├── li > a.pagination__nav[aria-label="이전 페이지"]
    │   └── span.chevron-pagination-left-slate-700[aria-hidden=true]
    ├── li > a.pagination__link.body3-r-14[aria-current=page]
    ├── li > a.pagination__link.body3-r-14
    ├── li > a.pagination__nav[aria-label="다음 페이지"]
    │   └── span.chevron-pagination-slate-700[aria-hidden=true]
    └── li > a.pagination__nav[aria-label="마지막 페이지"]
        └── span.chevron-pagination-last-slate-700[aria-hidden=true]
```

- 버튼 크기: `3.2rem x 3.2rem`
- 목록 간격: `spacing-4`
- 숫자 폰트: `body3-r-14`
- radius: `radius-sm-4`
- 현재 페이지: `aria-current="page"` + `slate-700` 배경 + `white` 텍스트

---

## 사용 예시

```html
<nav class="pagination map-pagination" aria-label="페이지 이동">
  <ul class="pagination__list flex align-center justify-center">
    <li>
      <a href="#" class="pagination__nav" aria-label="처음 페이지">
        <span class="chevron-pagination-first-slate-700" aria-hidden="true"></span>
      </a>
    </li>
    <li>
      <a href="#" class="pagination__nav" aria-label="이전 페이지">
        <span class="chevron-pagination-left-slate-700" aria-hidden="true"></span>
      </a>
    </li>
    <li>
      <a href="#" class="pagination__link body3-r-14" aria-current="page">1</a>
    </li>
    <li>
      <a href="#" class="pagination__link body3-r-14">2</a>
    </li>
    <li>
      <a href="#" class="pagination__link body3-r-14">3</a>
    </li>
    <li>
      <a href="#" class="pagination__link body3-r-14">4</a>
    </li>
    <li>
      <a href="#" class="pagination__nav" aria-label="다음 페이지">
        <span class="chevron-pagination-slate-700" aria-hidden="true"></span>
      </a>
    </li>
    <li>
      <a href="#" class="pagination__nav" aria-label="마지막 페이지">
        <span class="chevron-pagination-last-slate-700" aria-hidden="true"></span>
      </a>
    </li>
  </ul>
</nav>
```

---

## 접근성

- `nav`에는 `aria-label="페이지 이동"` 필수
- 아이콘-only 이동 버튼은 각각 명확한 `aria-label` 필수
- 이동 버튼 아이콘은 `aria-hidden="true"`로 숨김 처리
- 현재 페이지 링크에는 `aria-current="page"` 필수
- 비활성화가 필요한 경우 `aria-disabled="true"`와 클릭 방지 처리를 함께 적용

---

## 규칙

- 루트는 `nav.pagination.map-pagination[aria-label="페이지 이동"]` 사용
- 목록은 `ul.pagination__list > li` 구조 유지
- 처음/이전/다음/마지막 이동은 `a.pagination__nav[aria-label]` + 아이콘 `span[aria-hidden=true]` 구조 사용
- 숫자 페이지는 `a.pagination__link.body3-r-14` 사용
- 현재 페이지에는 `aria-current="page"` 필수
- 지도용 페이지네이션에서는 이전/다음 텍스트를 노출하지 않고 아이콘-only 버튼을 사용
- `pagination__*` BEM 패턴과 `map-pagination` variant 외 임의 클래스 생성 금지
