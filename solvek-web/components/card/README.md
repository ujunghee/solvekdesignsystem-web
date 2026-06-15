# Card

데이터셋·API 등 정보 리소스를 목록 형태로 보여주는 카드 컴포넌트입니다. 분류 태그(`components/meta-tag`)와 조회수를 상단에, 제목과 업데이트일/제공기관, 파일형식을 하단에 표시합니다.

---

## 구조

```
div.border.border-slate-200.radius-md-8.p-24.flex.flex-col.bg-white.gap-10
├── div.flex.justify-between.align-center
│   ├── ul.meta-tag-list (components/meta-tag)
│   │   └── li > span.meta-tag[.meta-tag--active]
│   └── div.flex.align-center.gap-6
│       ├── i.view-count-icon[aria-hidden=true]
│       ├── span.blind (조회수)
│       └── span.body3-r-14.color-slate-400 (숫자)
├── h3.body1-sb-18.color-slate-900.line-160 (제목)
└── div.flex.flex-col.gap-6
    ├── p.body3-r-14.color-slate-700.line-auto.flex.align-center.gap-6
    │   ├── span (업데이트일)
    │   ├── span.color-slate-200[aria-hidden=true] (구분자 |)
    │   └── span (제공기관)
    └── p.body2-m-16.color-slate-900.line-160 (파일형식)
```

---

## 사이즈

| 속성 | 값 |
|---|---|
| padding | `p-24` |
| radius | `radius-md-8` |
| 테두리 | `border border-slate-200` |
| 배경 | `bg-white` |
| 간격 | 루트 `gap-10`, 조회수/메타정보/날짜행 `gap-6` |
| 제목 | `body1-sb-18 color-slate-900 line-160` |
| 조회수 숫자 | `body3-r-14 color-slate-400` |
| 업데이트일/제공기관 | `body3-r-14 color-slate-700 line-auto`, 구분자 `\|`는 `color-slate-200` |
| 파일형식 | `body2-m-16 color-slate-900 line-160` |

---

## 사용 예시

```html
<div class="border border-slate-200 radius-md-8 p-24 flex flex-col bg-white gap-10">
  <div class="flex justify-between align-center">
    <ul class="meta-tag-list">
      <li><span class="meta-tag meta-tag--active">대분류</span></li>
      <li><span class="meta-tag">중분류</span></li>
      <li><span class="meta-tag">소분류</span></li>
    </ul>
    <div class="flex align-center gap-6">
      <i class="view-count-icon" aria-hidden="true"></i>
      <span class="blind">조회수</span>
      <span class="body3-r-14 color-slate-400">675</span>
    </div>
  </div>
  <h3 class="body1-sb-18 color-slate-900 line-160">한국언론진흥재단 뉴스빅데이터 메타데이터 미세먼지</h3>
  <div class="flex flex-col gap-6">
    <p class="body3-r-14 color-slate-700 line-auto flex align-center gap-6">
      <span>2025.10.27 업데이트</span>
      <span class="color-slate-200" aria-hidden="true">|</span>
      <span>환경부 · 국립환경과학원</span>
    </p>
    <p class="body2-m-16 color-slate-900 line-160">CSV, JSON+XML</p>
  </div>
</div>
```

여러 개 나열할 때는 위 `div.card` 블록을 그리드/리스트 레이아웃(`grid-column-*`, `flex` 등 `css/default/layout.css` 기준 유틸리티)으로 반복합니다.

---

## 의존성

| 컴포넌트 | 사용처 |
|---|---|
| [meta-tag](../../../components/meta-tag/README.md) | 대/중/소분류 표시, 강조할 depth에만 `meta-tag--active` |
| [icon](../../../components/icon/README.md) | `view-count-icon` (24x24, `#8A949E`, 조회수) |

---

## 접근성

- 조회수 아이콘(`view-count-icon`)은 `aria-hidden="true"`, 숫자 앞에 `span.blind`로 "조회수" 텍스트 제공
- 업데이트일/제공기관 사이 구분자 `|`는 `aria-hidden="true"`로 장식 처리
- 카드 제목은 `h3` 등 의미 있는 헤딩 레벨 사용 (목록 내 위치에 맞는 레벨로 조정 가능)

---

## 규칙

- 분류 태그는 `components/meta-tag`의 `ul.meta-tag-list > li > span.meta-tag[.meta-tag--active]` 구조 그대로 사용
- 조회수는 `view-count-icon` + `span.blind`(조회수) + `body3-r-14 color-slate-400` 숫자 조합으로 표시
- `line-auto`/`line-160` 등 line-height 예외 유틸은 기본 타이포 line-height를 보정해야 할 때만 사용
- card 자체는 새 BEM 블록이 아니라 `border-slate-200 radius-md-8 p-24 bg-white` 등 정의된 유틸리티 조합으로만 구성
- 정의되지 않은 임의 색상·간격·타이포 클래스, 인라인 `style` 사용 금지
