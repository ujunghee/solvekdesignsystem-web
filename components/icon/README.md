# Icon (아이콘)

`css/default/icon.css`에 정의된 아이콘 클래스 모음입니다. 대부분 `data:image/svg+xml` 형태의 inline SVG `background-image`로 구성되며, GitHub에서 직접 확인할 수 있도록 동일한 내용을 `image/icon/generated/*.svg`로 추출해 두었습니다.

---

## 사용법

```html
<i class="arrow-icon" aria-hidden="true"></i>
```

- 장식용 아이콘은 항상 `aria-hidden="true"`
- 의미 전달이 필요하면 형제 요소로 `span.blind` 텍스트 제공 (예: 모달 닫기, 칩 삭제)
- 버튼/링크 내부에서 사용 시 `flex align-center`와 함께 배치

---

## 아이콘 목록 (Inline SVG)

| 미리보기 | 클래스 | 크기 | 색상 | 설명 |
|---|---|---|---|---|
| <img src="../../image/icon/generated/arrow-icon.svg" width="24" height="24"> | `arrow-icon` | 24×24 | `#33363D` | 드롭다운/펼침 화살표 |
| <img src="../../image/icon/generated/search-icon-54.svg" width="24" height="24"> | `search-icon-54` | 24×24 | `#58616A` | 검색 (대) — search-54/48 |
| <img src="../../image/icon/generated/search-icon-40.svg" width="20" height="20"> | `search-icon-40` | 20×20 | `#58616A` | 검색 (소) — search-40/36 |
| <img src="../../image/icon/generated/header-search-24.svg" width="24" height="24"> | `header-search-24` | 24×24 | `#58616A` | 헤더 통합검색 |
| <img src="../../image/icon/generated/search-icon-teal-24.svg" width="24" height="24"> | `search-icon-teal-24` | 24×24 | `#3d8b81` | 검색 (teal 강조) |
| <img src="../../image/icon/generated/search-icon-blue-54.svg" width="24" height="24"> | `search-icon-blue-54` | 24×24 | `#1a76ff` | 검색 (blue 강조) |
| <img src="../../image/icon/generated/main-search-blue-icon.svg" width="24" height="24"> | `main-search-blue-icon` | 30×30 box / 24×24 icon | `#1a76ff` | 메인 통합검색 버튼 아이콘 |
| <img src="../../image/icon/generated/header-menu-24.svg" width="24" height="24"> | `header-menu-24` | 24×24 | `#58616A` | 헤더 모바일 메뉴(햄버거) |
| <img src="../../image/icon/generated/calendar-icon.svg" width="24" height="24"> | `calendar-icon` | 24×24 | `#1E2124` | 기간 datepicker 트리거 |
| <img src="../../image/icon/generated/clock-icon.svg" width="24" height="24"> | `clock-icon` | 24×24 | `#6D7882` | 시간 선택 트리거 |
| <img src="../../image/icon/generated/chevron-right-white.svg" width="24" height="24"> | `chevron-right-white` | 24×24 | white | 우측 꺽쇠 — blue/slate 버튼 |
| <img src="../../image/icon/generated/chevron-left-white.svg" width="24" height="24"> | `chevron-left-white` | 24×24 | white | 좌측 꺽쇠 |
| <img src="../../image/icon/generated/chevron-pagination-slate-700.svg" width="20" height="20"> | `chevron-pagination-slate-700` | 20×20 | `#464C53` | 페이지네이션 다음 버튼 |
| <img src="../../image/icon/generated/chevron-pagination-left-slate-700.svg" width="20" height="20"> | `chevron-pagination-left-slate-700` | 20×20 | `#464C53` | 페이지네이션 이전 버튼 |
| <img src="../../image/icon/generated/chevron-right-slate-700.svg" width="24" height="24"> | `chevron-right-slate-700` | 24×24 | `#475263` | 우측 꺽쇠 — slate-50/transparent 버튼 |
| <img src="../../image/icon/generated/chevron-left-slate-700.svg" width="24" height="24"> | `chevron-left-slate-700` | 24×24 | `#475263` | 좌측 꺽쇠 |
| <img src="../../image/icon/generated/chevron-down-white.svg" width="24" height="24"> | `chevron-down-white` | 24×24 | white | 아래 꺽쇠 |
| <img src="../../image/icon/generated/download-02-white.svg" width="24" height="24"> | `download-02-white` | 24×24 | white | 다운로드 |
| <img src="../../image/icon/generated/arrow-right-sm-white.svg" width="24" height="24"> | `arrow-right-sm-white` | 24×24 | white | 우측 화살표 small |
| <img src="../../image/icon/generated/arrow-left-sm-white.svg" width="24" height="24"> | `arrow-left-sm-white` | 24×24 | white | 좌측 화살표 small |
| <img src="../../image/icon/generated/breadcrumb-arrow.svg" width="8" height="14"> | `breadcrumb-arrow` | 8×14 | `#64748B` | 브레드크럼 구분자 |
| <img src="../../image/icon/generated/close-icon-lg.svg" width="48" height="48"> | `close-icon-lg` | 48×48 (≤767px: 32×32) | `#33363D` | 큰 닫기 버튼 |
| <img src="../../image/icon/generated/modal__close.svg" width="22" height="22"> | `modal__close` | 40×40 box / 22×22 icon | `#33363D` | 모달 닫기 (40×40 터치 영역) |
| <img src="../../image/icon/generated/chips-close-icon.svg" width="12" height="12"> | `chips-close-icon` | 12×12 | `#475263` | 칩 삭제 아이콘 |
| <img src="../../image/icon/generated/footer-plus-20.svg" width="20" height="20"> | `footer-plus-20` | 20×20 | `#464C53` | 푸터 아코디언 펼침/접힘 + |
| <img src="../../image/icon/generated/filter-reset-20.svg" width="18" height="18"> | `filter-reset-20` | 18×18 | `#475263` | 검색필터 초기화 |
| <img src="../../image/icon/generated/filter-icon.svg" width="24" height="24"> | `filter-icon` | 24×24 | `#475263` | 필터 트리거 |

> 위 미리보기 SVG는 `image/icon/generated/`에 보관된 별도 파일로, `css/default/icon.css`의 inline `data:image/svg+xml` 값을 그대로 추출한 것입니다. 실제 사용 시에는 클래스만 적용하면 되며, 이 SVG 파일을 직접 `<img>`로 사용하지 않습니다.

---

## 파일 참조 아이콘

| 클래스 | 크기 | 파일 | 설명 |
|---|---|---|---|
| `header-login-24` | 24×24 | `image/icon/login.svg` | 헤더 로그인 |
| `eye-icon` | 24×24 | `image/icon/eye-closed.png` | 비밀번호 숨김 (기본) |
| `eye-icon.active` | 24×24 | `image/icon/eye-open.png` | 비밀번호 보임 |

---

## CSS 전용 아이콘 (이미지 없음)

| 클래스 | 크기 | 설명 |
|---|---|---|
| `close-icon` | 24×24 | `::before`/`::after`로 생성되는 X 모양 닫기 아이콘. 이미지 파일 없음 |

---

## 접근성

- 장식용 아이콘: `<i class="{class}" aria-hidden="true"></i>`
- 의미 전달이 필요한 아이콘(모달 닫기, 칩 삭제 등)은 형제 요소로 `span.blind` 텍스트 제공

```html
<button type="button" class="modal__close" data-modal-close="example-modal">
  <span class="blind">닫기</span>
</button>
```

---

## 규칙

- `css/default/icon.css`에 정의된 클래스만 사용
- 아이콘 `i`/`span`에 `style` 속성이나 색상 변경용 임의 클래스 추가 금지 (다른 색상이 필요하면 새 클래스 정의를 제안)
- 버튼/링크 내부 아이콘은 `flex align-center`와 함께 사용
