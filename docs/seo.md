# SEO 규칙

페이지 생성 시 아래 규칙을 반드시 준수한다.

---

## 1. 메타데이터

모든 페이지에 아래 메타태그를 포함한다.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 기본 메타 -->
<meta name="description" content="페이지 설명 (150자 이내)">
<meta name="keywords" content="ui, ux, publishing, solvek">
<meta name="author" content="Solvek">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="페이지 제목 | 솔브케이">
<meta property="og:description" content="페이지 설명">
<!-- <meta property="og:image" content="https://example.com/image.jpg"> -->
<!-- <meta property="og:url" content="https://example.com/page"> -->

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="페이지 제목 | 솔브케이">
<meta name="twitter:description" content="페이지 설명">
<!-- <meta name="twitter:image" content="https://example.com/image.jpg"> -->

<!-- 캐노니컬 (실제 서비스 시 반드시 적용) -->
<!-- <link rel="canonical" href="https://example.com/page"> -->
```

---

## 2. 시맨틱 구조

검색 엔진이 콘텐츠 구조를 파악할 수 있도록 시맨틱 태그를 사용한다.

```html
<header>
  <nav>메인 네비게이션</nav>
</header>
<main>
  <article>
    <section>주요 콘텐츠 섹션</section>
    <aside>부가 정보</aside>
  </article>
</main>
<footer>푸터 정보</footer>
```

---

## 3. 헤딩 구조

- `h1`은 페이지당 1개, 핵심 키워드 포함
- 계층 순서 준수 (h1 → h2 → h3)
- 스타일 목적으로 헤딩 태그 선택 금지

---

## 4. 이미지 최적화

```html
<img src="image.jpg"
     alt="이미지에 대한 정확한 설명"
     title="이미지 제목"
     loading="lazy">
```

- `alt`: 키워드를 자연스럽게 포함한 설명
- `loading="lazy"`: 스크롤 하단 이미지에 적용
- 파일명도 의미 있게 작성 (`product-main.jpg` 등)

---

## 5. 링크 구조

```html
<!-- 의미 있는 앵커 텍스트 -->
<a href="/about">솔브케이 소개</a>

<!-- 외부 링크 -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">외부 사이트</a>
```

- 앵커 텍스트에 키워드 포함
- "여기", "클릭" 등 무의미한 텍스트 금지

---

## 6. 구조화 데이터 (Schema.org)

SEO가 중요한 콘텐츠(상품, 기사, 이벤트, 리뷰 등)에만 적용한다.

```html
<!-- 기사 -->
<article itemscope itemtype="http://schema.org/Article">
  <h1 itemprop="headline">기사 제목</h1>
  <div itemprop="author" itemscope itemtype="http://schema.org/Person">
    <span itemprop="name">저자 이름</span>
  </div>
  <time itemprop="datePublished" datetime="2024-12-30">12월 30일</time>
  <div itemprop="articleBody">본문 내용</div>
</article>

<!-- 사람 (중첩 구조) -->
<div itemscope itemtype="http://schema.org/Person">
  <span itemprop="name">홍길동</span>
  <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    <span itemprop="streetAddress">테헤란로 123</span>
    <span itemprop="addressLocality">서울</span>
  </div>
</div>
```

주요 속성:
- `itemscope`: 구조화 데이터 범위 정의
- `itemtype`: 스키마 타입 (Article, Product, Person, Event 등)
- `itemprop`: 실제 속성값 (name, price, datePublished 등)

---

## 7. 추가 권장사항

- URL은 짧고 의미 있게 구성
- 페이지 로딩 속도 최적화 (이미지 압축, 불필요한 스크립트 제거)
- 모바일 반응형 필수
- 사이트맵 XML 생성 및 관리
- robots.txt 적절히 설정
