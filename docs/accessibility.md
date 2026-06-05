# 웹 접근성 규칙 (KWCAG 2.1)

페이지 생성 시 아래 규칙을 반드시 준수한다.

---

## 1. 랜드마크 역할

시맨틱 태그에 role을 명시해 스크린 리더가 페이지 구조를 파악할 수 있도록 한다.

```html
<header role="banner">
<nav role="navigation">
<main role="main">
<footer role="contentinfo">
<aside role="complementary">
<section role="region" aria-label="섹션 설명">
```

---

## 2. 헤딩 계층 구조

- `h1`은 페이지당 1개
- 계층 순서 건너뜀 금지 (h1 → h2 → h3 순서 준수)

```html
<h1>메인 제목</h1>
<section>
  <h2>섹션 제목</h2>
  <h3>하위 섹션 제목</h3>
</section>
```

---

## 3. 이미지 대체 텍스트

- 의미 있는 이미지: `alt`에 내용 설명
- 장식용 이미지: `alt=""`
- `title`은 부가 설명이 필요할 때만 추가

```html
<!-- 의미 있는 이미지 -->
<img src="chart.png" alt="2024년 월별 매출 그래프">

<!-- 장식용 이미지 -->
<img src="divider.png" alt="">
```

---

## 4. 링크 텍스트

- "여기", "클릭", "더보기" 단독 사용 금지
- 링크 목적을 텍스트만으로 파악 가능해야 함
- 새 창 열림 시 명시

```html
<!-- 좋은 예 -->
<a href="/report.pdf" title="2024 연간보고서 PDF 다운로드">2024 연간보고서 다운로드</a>

<!-- 새 창 -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  외부 사이트 <span class="blind">(새 창 열림)</span>
</a>
```

---

## 5. 폼 접근성

- 모든 입력 필드에 `label` 연결 필수 (`for`/`id` 일치)
- 필수 입력: `required` + `aria-required="true"`
- 에러 메시지: `aria-describedby`로 연결

```html
<label for="user-name">이름 <span aria-hidden="true">*</span></label>
<input type="text" id="user-name" required aria-required="true" aria-describedby="name-error">
<p id="name-error" class="error-message">이름을 입력해주세요</p>
```

---

## 6. 키보드 접근성

- 모든 인터랙티브 요소는 키보드로 접근·조작 가능해야 함
- `tabindex="0"`: 포커스 순서에 포함
- `tabindex="-1"`: 포커스 순서 제외 (JS로 직접 포커스할 때)
- 양수 `tabindex` 사용 금지

---

## 7. 스크린 리더 전용 텍스트

시각적으로 숨기되 스크린 리더에는 읽히는 텍스트는 `blind` 클래스 사용.

```html
<span class="blind">스크린 리더 전용 텍스트</span>
```

`display:none` / `visibility:hidden` 사용 금지 (스크린 리더도 무시함).

---

## 8. 모달·팝업 접근성

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` 필수
- 열릴 때 모달 내부로 포커스 이동
- 닫기 버튼에 `aria-label="닫기"` 필수
- ESC 키로 닫기 지원

---

## 9. 색상 대비

- 일반 텍스트: 명도 대비 4.5:1 이상
- 큰 텍스트(18px bold / 24px): 3:1 이상
- 색상만으로 정보 전달 금지 (아이콘·텍스트 병행)
