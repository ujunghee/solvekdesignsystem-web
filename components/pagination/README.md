# Pagination (페이지네이션)

목록/게시판 하단에 사용하는 페이지 이동 컴포넌트입니다. 이전/다음 버튼 + 숫자 페이지 + 생략(...) 표시로 구성됩니다.

---

## 구조

```
nav.pagination[aria-label="페이지 이동"]
└── ul.pagination__list.flex.align-center.justify-center.gap-8
    ├── li > a.pagination__nav (이전)
    ├── li > a.pagination__link (숫자 페이지, 현재 페이지는 aria-current="page")
    ├── li > span.pagination__ellipsis (생략 ...)
    └── li > a.pagination__nav (다음)
```

---

## 사용 예시

```html
<nav class="pagination" aria-label="페이지 이동">
  <ul class="pagination__list flex align-center justify-center gap-8">
    <li>
      <a href="#" class="pagination__nav transparent-button-40 flex align-center body2-r-16 color-slate-700">
        <span class="chevron-pagination-left-slate-700" aria-hidden="true"></span>
        이전
      </a>
    </li>
    <li>
      <a href="#" class="pagination__link body2-r-16" aria-current="page">1</a>
    </li>
    <li>
      <a href="#" class="pagination__link body2-r-16">2</a>
    </li>
    <li>
      <a href="#" class="pagination__link body2-r-16">3</a>
    </li>
    <li>
      <span class="pagination__ellipsis body2-r-16 color-slate-500" aria-hidden="true">...</span>
    </li>
    <li>
      <a href="#" class="pagination__link body2-r-16">99</a>
    </li>
    <li>
      <a href="#" class="pagination__nav transparent-button-40 flex align-center body2-r-16 color-slate-700">
        다음
        <span class="chevron-pagination-slate-700" aria-hidden="true"></span>
      </a>
    </li>
  </ul>
</nav>
```

---

## 접근성

- `nav`에 `aria-label="페이지 이동"` 필수
- 현재 페이지의 `pagination__link`에 `aria-current="page"` 필수
- 생략(`...`) 항목은 `a`가 아닌 `span.pagination__ellipsis` + `aria-hidden="true"` 사용
- 이전/다음 아이콘(`chevron-pagination-left-slate-700`, `chevron-pagination-slate-700`)에 `aria-hidden="true"` 필수

---

## 규칙

- `pagination__list`는 `ul > li` 구조 유지
- `pagination__link`는 `min-width 3.2rem`, `height 3.2rem`의 정사각형에 가까운 클릭 영역
- 현재 페이지는 `aria-current="page"` → 배경 `slate-700` + 글자 `white`
- 이전/다음 버튼은 `pagination__nav` + `transparent-button-40 flex align-center body2-r-16 color-slate-700`
  - 이전: `chevron-pagination-left-slate-700` 아이콘 + '이전' 텍스트
  - 다음: '다음' 텍스트 + `chevron-pagination-slate-700` 아이콘
- 생략(...) 항목은 `span.pagination__ellipsis`만 사용, `a` 태그 금지
- `pagination__*` BEM 패턴 외 임의 클래스 추가 금지
