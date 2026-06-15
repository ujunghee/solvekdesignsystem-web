# Card

데이터셋·API 등 정보 리소스를 목록 형태로 보여주는 카드 컴포넌트입니다. 분류 태그(`components/meta-tag`)와 조회수를 상단에, 제목과 업데이트일/제공기관, 파일형식을 하단에 표시합니다. 카드 전체가 상세 페이지로 이동하는 링크입니다.

---

## 구조

```
ul.flex.flex-row.gap-24
└── li.flex-1
    └── a[href].border.border-slate-200.radius-md-8.p-24.flex.flex-col.bg-white.gap-10.h-full[itemscope][itemtype=https://schema.org/Dataset]
        ├── div.flex.justify-between.align-center
        │   ├── ul.meta-tag-list (components/meta-tag)
        │   │   └── li > span.meta-tag[.meta-tag--active]
        │   └── div.flex.align-center.gap-6
        │       ├── i.view-count-icon[aria-hidden=true]
        │       ├── span.blind (조회수)
        │       └── span.body3-r-14.color-slate-400 (숫자)
        ├── h3.body1-sb-18.color-slate-900.line-160[itemprop=name] (제목)
        └── div.flex.flex-col.gap-6
            ├── p.body3-r-14.color-slate-700.line-auto.flex.align-center.gap-6
            │   ├── time[datetime][itemprop=dateModified] (업데이트일)
            │   ├── span (업데이트)
            │   ├── span.color-slate-200[aria-hidden=true] (구분자 |)
            │   └── span[itemprop=creator] (제공기관)
            └── p.body2-m-16.color-slate-900.line-160
                ├── span.blind (제공 형식)
                └── span[itemprop=encodingFormat] (형식 값)
```

목록 페이지 전체는 `main[role=main] > h1.blind(목록 제목) + section[role=region][aria-labelledby] > h2.blind(섹션 제목) + ul...` 구조로 감쌉니다.

---

## 사이즈

| 속성 | 값 |
|---|---|
| padding | `p-24` |
| radius | `radius-md-8` |
| 테두리 | `border border-slate-200` |
| 배경 | `bg-white` |
| 높이 | `h-full` (목록 내 카드 높이 맞춤) |
| 간격 | 목록 `gap-24`, 루트 `gap-10`, 조회수/메타정보/날짜행 `gap-6` |
| 제목 | `body1-sb-18 color-slate-900 line-160` |
| 조회수 숫자 | `body3-r-14 color-slate-400` |
| 업데이트일/제공기관 | `body3-r-14 color-slate-700 line-auto`, 구분자 `\|`는 `color-slate-200` |
| 파일형식 | `body2-m-16 color-slate-900 line-160` |

---

## 사용 예시

```html
<main role="main" class="inner-default py-24">
  <h1 class="blind">데이터셋 목록</h1>
  <section role="region" aria-labelledby="dataset-list-title">
    <h2 id="dataset-list-title" class="blind">미세먼지 관련 데이터셋</h2>
    <ul class="flex flex-row gap-24">
      <li class="flex-1">
        <a href="#" class="border border-slate-200 radius-md-8 p-24 flex flex-col bg-white gap-10 h-full" itemscope itemtype="https://schema.org/Dataset">
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
          <h3 class="body1-sb-18 color-slate-900 line-160" itemprop="name">한국언론진흥재단 뉴스빅데이터 메타데이터 미세먼지</h3>
          <div class="flex flex-col gap-6">
            <p class="body3-r-14 color-slate-700 line-auto flex align-center gap-6">
              <time datetime="2025-10-27" itemprop="dateModified">2025.10.27</time>
              <span>업데이트</span>
              <span class="color-slate-200" aria-hidden="true">|</span>
              <span itemprop="creator">환경부 · 국립환경과학원</span>
            </p>
            <p class="body2-m-16 color-slate-900 line-160">
              <span class="blind">제공 형식</span>
              <span itemprop="encodingFormat">CSV, JSON+XML</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</main>
```

여러 개 나열할 때는 위 `li > a` 블록을 반복합니다. 카드 높이를 맞추려면 `a`에 `h-full`을 유지합니다.

---

## 의존성

| 컴포넌트 | 사용처 |
|---|---|
| [meta-tag](../../../components/meta-tag/README.md) | 대/중/소분류 표시, 강조할 depth에만 `meta-tag--active` |
| [icon](../../../components/icon/README.md) | `view-count-icon` (24x24, `#8A949E`, 조회수) |

---

## 접근성

- 카드 전체가 링크이므로 `a[href]`로 감싸고, 클릭 가능 영역과 시각 영역이 일치하도록 `div`/`button`으로 대체하지 않음
- 조회수 아이콘(`view-count-icon`)은 `aria-hidden="true"`, 숫자 앞에 `span.blind`로 "조회수" 텍스트 제공
- 업데이트일은 `time[datetime]`으로 표시, 업데이트일/제공기관 사이 구분자 `|`는 `aria-hidden="true"`로 장식 처리
- 파일형식 값 앞에 `span.blind`로 "제공 형식" 텍스트 제공
- 카드 제목은 `h3` 등 의미 있는 헤딩 레벨 사용 (목록 내 위치에 맞는 레벨로 조정 가능)
- 목록 페이지는 `main[role=main]` + `h1.blind` + `section[role=region][aria-labelledby]` + `h2.blind`로 영역과 제목을 명시
- `schema.org/Dataset` 마이크로데이터(`itemscope`/`itemtype`/`itemprop`: `name`, `dateModified`, `creator`, `encodingFormat`)로 검색엔진에 데이터셋 정보 제공

---

## 규칙

- 카드 루트는 반드시 `a[href]` (div/button 대체 금지), 여러 개 나열 시 `ul.flex.flex-row.gap-24 > li.flex-1 > a...` 구조 사용
- 분류 태그는 `components/meta-tag`의 `ul.meta-tag-list > li > span.meta-tag[.meta-tag--active]` 구조 그대로 사용
- 조회수는 `view-count-icon` + `span.blind`(조회수) + `body3-r-14 color-slate-400` 숫자 조합으로 표시
- 업데이트일은 `time[datetime][itemprop=dateModified]`, 파일형식은 `span.blind`(제공 형식) + `span[itemprop=encodingFormat]` 조합 사용
- `line-auto`/`line-160` 등 line-height 예외 유틸은 기본 타이포 line-height를 보정해야 할 때만 사용
- card 자체는 새 BEM 블록이 아니라 `border-slate-200 radius-md-8 p-24 bg-white h-full` 등 정의된 유틸리티 조합으로만 구성
- 정의되지 않은 임의 색상·간격·타이포 클래스, 인라인 `style` 사용 금지
