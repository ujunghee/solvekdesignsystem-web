# List

데이터셋·API 등 정보 리소스를 한 줄 리스트 형태로 보여주는 항목입니다. 분류 태그(`components/meta-tag`)와 제목을 한 줄에, 업데이트일/제공기관/파일형식을 다음 줄에 표시하고 우측에 조회수를 표기합니다. 항목 전체가 상세 페이지로 이동하는 링크입니다.

---

## 구조

```
ul.flex.flex-col.border-t.border-slate-200
└── li
    └── a[href].flex.justify-between.align-center.gap-16.py-16.border-b.border-slate-200[itemscope][itemtype=https://schema.org/Dataset]
        ├── div.flex.flex-col.gap-10
        │   ├── div.flex.align-center.gap-12.flex-wrap
        │   │   ├── ul.meta-tag-list (components/meta-tag)
        │   │   │   └── li > span.meta-tag[.meta-tag--active]
        │   │   └── h3.body1-sb-18.color-slate-900.line-140[itemprop=name] (제목)
        │   └── p.body3-r-14.color-slate-700.line-auto.flex.align-center.gap-6
        │       ├── time[datetime][itemprop=dateModified].color-slate-700 (업데이트일)
        │       ├── span.color-slate-700 (업데이트)
        │       ├── span.color-slate-200[aria-hidden=true] (구분자 |)
        │       ├── span.color-slate-700[itemprop=creator] (제공기관)
        │       ├── span.color-slate-200[aria-hidden=true] (구분자 |)
        │       └── span.color-slate-900[itemprop=encodingFormat] (파일형식)
        └── div.flex.align-center.gap-6.flex-none
            ├── i.view-count-icon[aria-hidden=true]
            ├── span.blind (조회수)
            └── span.body3-r-14.color-slate-400 (숫자)
```

목록 페이지 전체는 `main[role=main] > h1.blind(목록 제목) + section[role=region][aria-labelledby] > h2.blind(섹션 제목) + ul...` 구조로 감쌉니다.

---

## 사이즈

| 속성 | 값 |
|---|---|
| 구분선 | 목록 상단 `border-t border-slate-200`, 각 항목 `border-b border-slate-200` |
| 패딩 | `py-16` (항목) |
| 간격 | 항목 `gap-16`, 제목영역 `gap-10`, 분류태그+제목 `gap-12`, 메타정보/조회수 `gap-6` |
| 제목 | `body1-sb-18 color-slate-900 line-140` |
| 메타정보(업데이트일/제공기관/파일형식) | `body3-r-14 line-auto`, 날짜·업데이트·제공기관은 `color-slate-700`, 파일형식은 `color-slate-900`, 구분자 `\|`는 `color-slate-200` |
| 조회수 숫자 | `body3-r-14 color-slate-400` |

---

## 사용 예시

```html
<main role="main" class="inner-default py-24">
  <h1 class="blind">데이터셋 목록</h1>
  <section role="region" aria-labelledby="dataset-list-title">
    <h2 id="dataset-list-title" class="blind">미세먼지 관련 데이터셋</h2>
    <ul class="flex flex-col border-t border-slate-200">
      <li>
        <a href="#" class="flex justify-between align-center gap-16 py-16 border-b border-slate-200" itemscope itemtype="https://schema.org/Dataset">
          <div class="flex flex-col gap-10">
            <div class="flex align-center gap-12 flex-wrap">
              <ul class="meta-tag-list">
                <li><span class="meta-tag meta-tag--active">대분류</span></li>
                <li><span class="meta-tag">중분류</span></li>
                <li><span class="meta-tag">소분류</span></li>
              </ul>
              <h3 class="body1-sb-18 color-slate-900 line-140" itemprop="name">한국언론진흥재단 뉴스빅데이터 메타데이터 미세먼지</h3>
            </div>
            <p class="body3-r-14 color-slate-700 line-auto flex align-center gap-6">
              <time class="color-slate-700" datetime="2025-10-27" itemprop="dateModified">2025.10.27</time>
              <span class="color-slate-700">업데이트</span>
              <span class="color-slate-200" aria-hidden="true">|</span>
              <span class="color-slate-700" itemprop="creator">환경부 · 국립환경과학원</span>
              <span class="color-slate-200" aria-hidden="true">|</span>
              <span class="color-slate-900" itemprop="encodingFormat">CSV, JSON+XML</span>
            </p>
          </div>
          <div class="flex align-center gap-6 flex-none">
            <i class="view-count-icon" aria-hidden="true"></i>
            <span class="blind">조회수</span>
            <span class="body3-r-14 color-slate-400">1,234</span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</main>
```

여러 개 나열할 때는 위 `li > a` 블록을 반복합니다.

---

## 의존성

| 컴포넌트 | 사용처 |
|---|---|
| [meta-tag](../../../components/meta-tag/README.md) | 대/중/소분류 표시, 강조할 depth에만 `meta-tag--active` |
| [icon](../../../components/icon/README.md) | `view-count-icon` (24x24, `#8A949E`, 조회수) |

---

## 접근성

- 항목 전체가 링크이므로 `a[href]`로 감싸고, 클릭 가능 영역과 시각 영역이 일치하도록 `div`/`button`으로 대체하지 않음
- 조회수 아이콘(`view-count-icon`)은 `aria-hidden="true"`, 숫자 앞에 `span.blind`로 "조회수" 텍스트 제공
- 업데이트일은 `time[datetime]`으로 표시, 구분자 `|`는 `aria-hidden="true"`로 장식 처리
- 항목 제목은 `h3` 등 의미 있는 헤딩 레벨 사용 (목록 내 위치에 맞는 레벨로 조정 가능)
- 목록 페이지는 `main[role=main]` + `h1.blind` + `section[role=region][aria-labelledby]` + `h2.blind`로 영역과 제목을 명시
- `schema.org/Dataset` 마이크로데이터(`itemscope`/`itemtype`/`itemprop`: `name`, `dateModified`, `creator`, `encodingFormat`)로 검색엔진에 데이터셋 정보 제공

---

## 규칙

- 항목 루트는 반드시 `a[href]` (div/button 대체 금지), 여러 개 나열 시 `ul.flex.flex-col.border-t.border-slate-200 > li > a...` 구조 사용, 각 `a`에 `border-b border-slate-200`로 구분선 표시
- 분류 태그는 `components/meta-tag`의 `ul.meta-tag-list > li > span.meta-tag[.meta-tag--active]` 구조 그대로 사용, 제목과 같은 줄에 `flex align-center gap-12`로 배치
- 업데이트일은 `time[datetime][itemprop=dateModified]`, 업데이트일/제공기관/파일형식 사이 구분자는 `span.color-slate-200[aria-hidden=true]`(`|`) 사용
- 조회수는 `view-count-icon` + `span.blind`(조회수) + `body3-r-14 color-slate-400` 숫자 조합으로 표시
- `line-auto`/`line-140` 등 line-height 예외 유틸은 기본 타이포 line-height를 보정해야 할 때만 사용
- 정의되지 않은 임의 색상·간격·타이포 클래스, 인라인 `style` 사용 금지
