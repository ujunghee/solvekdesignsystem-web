# Breadcrumb

페이지 상단 타이틀과 현재 위치 경로를 보여주는 컴포넌트입니다. webkit(일반) / admin 2가지 variant를 제공합니다.

---

## 구조

```
header.breadcrumb
└── inner-default.breadcrumb__inner (flex align-end gap-{16|8})
    ├── h1.breadcrumb__title
    └── nav.breadcrumb__nav[aria-label="현재 위치"]
        └── ol.breadcrumb__list (flex align-center gap-{10|4})
            ├── li.breadcrumb__item > a.breadcrumb__link
            ├── li.breadcrumb__item[aria-hidden=true] (구분자)
            └── li.breadcrumb__item > span[aria-current=page]
```

---

## variant

### webkit (일반 페이지)

타이틀: `heading4-b-32`, 구분자: `breadcrumb-arrow` 아이콘

```html
<header class="breadcrumb">
  <div class="inner-default breadcrumb__inner flex align-end gap-16">
    <h1 class="breadcrumb__title heading4-b-32 color-slate-900">통합검색</h1>
    <nav class="breadcrumb__nav" aria-label="현재 위치">
      <ol class="breadcrumb__list flex align-center gap-10">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link body2-r-16 color-slate-500">홈</a>
        </li>
        <li class="breadcrumb__item" aria-hidden="true">
          <span class="breadcrumb-arrow" aria-hidden="true"></span>
        </li>
        <li class="breadcrumb__item">
          <span class="body2-m-16 color-slate-900" aria-current="page">통합검색</span>
        </li>
      </ol>
    </nav>
  </div>
</header>
```

---

### admin (관리자 페이지)

타이틀: `heading9-sb-22`, 구분자: `/` 텍스트

```html
<header class="breadcrumb">
  <div class="inner-default breadcrumb__inner flex align-end gap-8">
    <h1 class="breadcrumb__title heading9-sb-22 color-slate-900">통합검색</h1>
    <nav class="breadcrumb__nav" aria-label="현재 위치">
      <ol class="breadcrumb__list flex align-center gap-4">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__link body2-r-16 color-slate-500">홈</a>
        </li>
        <li class="breadcrumb__item body2-m-16 color-slate-500" aria-hidden="true">
          /
        </li>
        <li class="breadcrumb__item">
          <span class="body2-m-16 color-slate-900" aria-current="page">통합검색</span>
        </li>
      </ol>
    </nav>
  </div>
</header>
```

---

## 규칙

- `breadcrumb__nav`에 `aria-label="현재 위치"` 필수
- `breadcrumb__list`는 `ol > li` 구조 유지
- 마지막(현재 위치) 항목은 `a`가 아닌 `span[aria-current="page"]` 사용
- 구분자(`breadcrumb-arrow` 또는 `/` 텍스트) 항목에는 `aria-hidden="true"` 필수
- webkit variant: `heading4-b-32` 타이틀 + `breadcrumb-arrow` 아이콘 구분자, `gap-16`/`gap-10`
- admin variant: `heading9-sb-22` 타이틀 + `/` 텍스트 구분자, `gap-8`/`gap-4`
- 색상·타이포·간격은 토큰/유틸 클래스만 사용, 인라인 스타일 금지
- 정의되지 않은 임의 클래스 생성 금지 (`breadcrumb__*` BEM 패턴만 사용)
