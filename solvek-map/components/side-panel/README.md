# Map Side Panel

지도 화면 좌측에 배치되는 검색/정보 패널입니다. 지도 내비게이션에서 선택한 메뉴의 제목, 필터, 검색 입력, 결과 목록 또는 빈 상태 콘텐츠를 담는 영역으로 사용합니다.

---

## 구조

```text
aside.map-side-panel[aria-labelledby]
├── div.map-side-panel__head.flex.align-center.justify-between
│   ├── h2#map-side-panel-title.heading10-sb-20.color-slate-900
│   └── button.map-side-panel__close[type=button][aria-label="닫기"]
│       └── i.map-close-icon[aria-hidden=true]
├── div.map-side-panel__search.flex.align-center.gap-8
│   ├── button.border-slate-button-48.flex.align-center.gap-8[type=button]
│   │   └── i.filter-icon[aria-hidden=true]
│   └── div.search-48.flex.pl-12.pr-10.justify-between.align-center
│       ├── label.blind[for]
│       ├── input[type=search].body2-r-16.w-full[autocomplete=off]
│       └── button.search-button.h-fit[type=button]
│           └── i.search-icon-40 > span.blind
└── div.map-side-panel__body
```

- 패널 너비: `40rem` (400px)
- 높이: `100vh`
- 헤더 최소 높이: `5.6rem` (56px)
- 닫기 버튼 크기: `4.8rem x 4.8rem`
- 검색 영역 하단 여백: `spacing-20`
- 본문 영역은 `overflow-y: auto`

---

## 사용 예시

```html
<aside class="map-side-panel" aria-labelledby="map-side-panel-title">
  <div class="map-side-panel__head flex align-center justify-between">
    <h2 id="map-side-panel-title" class="heading10-sb-20 color-slate-900">지정유산</h2>
    <button type="button" class="map-side-panel__close" aria-label="닫기">
      <i class="map-close-icon" aria-hidden="true"></i>
    </button>
  </div>

  <div class="map-side-panel__search flex align-center gap-8">
    <button type="button" class="border-slate-button-48 flex align-center gap-8">
      상세필터
      <i class="filter-icon" aria-hidden="true"></i>
    </button>
    <div class="search-48 flex pl-12 pr-10 justify-between align-center">
      <label for="map-side-panel-search" class="blind">국가유산명 검색</label>
      <input type="search" id="map-side-panel-search" class="body2-r-16 w-full" placeholder="국가유산명 입력" autocomplete="off">
      <button type="button" class="search-button h-fit">
        <i class="search-icon-40"><span class="blind">검색</span></i>
      </button>
    </div>
  </div>

  <div class="map-side-panel__body">
    <!-- 검색 결과, 상세 정보, 빈 상태 등 콘텐츠 영역 -->
  </div>
</aside>
```

---

## 콘텐츠 상태

- 빈 상태: 검색어 입력 전 안내 문구, 아이콘, 보조 설명을 `map-side-panel__body` 안에 배치
- 결과 상태: 검색 결과 리스트, 필터 적용 결과, 페이지네이션 등을 `map-side-panel__body` 안에 배치
- 상세 상태: 지도 객체 선택 시 상세 정보와 관련 액션을 `map-side-panel__body` 안에 배치

---

## 규칙

- 루트는 `aside.map-side-panel`을 사용하고 `aria-labelledby`로 제목 `h2`와 연결
- 헤더는 `map-side-panel__head`, 제목은 `h2.heading10-sb-20.color-slate-900` 사용
- 닫기 버튼은 `button[type=button].map-side-panel__close[aria-label="닫기"]` 구조 필수
- 닫기 아이콘은 `i.map-close-icon[aria-hidden=true]` 사용
- 검색 영역은 `map-side-panel__search` 안에 상세필터 버튼과 `search-48` 검색 입력을 배치
- 검색 input은 `type="search"`, `autocomplete="off"`, `label.blind[for]` 필수
- 본문 콘텐츠는 `map-side-panel__body` 안에 배치하고, 결과가 길어질 수 있으므로 내부 스크롤을 사용
- 정의되지 않은 임의 클래스 생성 금지 (`map-side-panel__*` 패턴 + 기존 button/search/icon 유틸리티 사용)
