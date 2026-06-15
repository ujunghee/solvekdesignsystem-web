# Board

공지사항/알림 등 게시판 목록을 표시하는 테이블 컴포넌트입니다. 유형 / 제목 / 게시일 3컬럼 구조로 구성됩니다.

---

## 구조

```
table.board-table.w-full
├── caption.blind (게시판 목록 안내)
├── thead
│   └── tr
│       ├── th.board-table__th[scope=col] 유형
│       ├── th.board-table__th[scope=col] 제목
│       └── th.board-table__th[scope=col] 게시일
└── tbody
    └── tr
        ├── td.board-table__td > span.board-table__type[.board-table__type--important]
        ├── td.board-table__td > a.board-table__link[href] (+ span.board-table__badge-new)
        └── td.board-table__td (게시일)
```

---

## 사용 예시

```html
<table class="board-table w-full">
  <caption class="blind">공지사항 목록</caption>
  <thead>
    <tr>
      <th scope="col" class="board-table__th">유형</th>
      <th scope="col" class="board-table__th">제목</th>
      <th scope="col" class="board-table__th">게시일</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="board-table__td text-center">
        <span class="board-table__type">알림</span>
      </td>
      <td class="board-table__td">
        <a href="#" class="board-table__link body2-r-16 color-slate-900 flex align-center gap-8">
          [기후에너지환경부] 피싱 문자 및 공공기관 위장 사이트, 웹 주의 안내
          <span class="board-table__badge-new"><span class="blind">신규 게시물</span>N</span>
        </a>
      </td>
      <td class="board-table__td text-center body3-r-14 color-slate-500">2025.07.23</td>
    </tr>
    <tr>
      <td class="board-table__td text-center">
        <span class="board-table__type board-table__type--important">중요</span>
      </td>
      <td class="board-table__td">
        <a href="#" class="board-table__link body2-r-16 color-slate-900">
          [기후에너지환경부] 피싱 문자 및 공공기관 위장 사이트, 웹 주의 안내
        </a>
      </td>
      <td class="board-table__td text-center body3-r-14 color-slate-500">2025.07.23</td>
    </tr>
    <tr>
      <td class="board-table__td text-center">
        <span class="board-table__type">알림</span>
      </td>
      <td class="board-table__td">
        <a href="#" class="board-table__link body2-r-16 color-slate-900">
          [기후에너지환경부] 피싱 문자 및 공공기관 위장 사이트, 웹 주의 안내
        </a>
      </td>
      <td class="board-table__td text-center body3-r-14 color-slate-500">2025.07.23</td>
    </tr>
  </tbody>
</table>
```

---

## 규칙

- `table`에 `caption.blind` 필수 (게시판 목록임을 스크린리더에 안내)
- `thead th`에 `scope="col"` 필수
- 유형 셀: `span.board-table__type` 사용, "중요"인 경우 `board-table__type--important` 추가 (blue-500, semibold)
- 제목 셀: `a.board-table__link[href]` 필수, div/span으로 대체 금지
- 신규 게시물 표시: `span.board-table__badge-new` + 내부 `span.blind`("신규 게시물") 구조
- 유형/게시일 컬럼은 가운데 정렬(`text-center`), 제목 컬럼은 좌측 정렬(기본값)
- 가로 스크롤이 필요하면 `table`을 `div.overflow-auto`로 감싸서 사용
- 정의되지 않은 임의 클래스 생성 금지 (`board-table__*` 패턴만 사용)
