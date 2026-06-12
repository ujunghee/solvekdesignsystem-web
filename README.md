# SolveK Design System

공공기관/정부 프로젝트용 HTML/CSS 퍼블리싱 디자인 시스템입니다. 프레임워크 없이 순수 HTML + CSS + JS로 구성되며, CSS 변수(Custom Properties) 기반 디자인 토큰을 사용합니다.

- 기본 폰트: Pretendard
- 기본 단위: rem (`html { font-size: 62.5% }` → 1rem = 10px)
- 접근성: KWCAG 2.1 기준 준수

---

## 페이지(레이아웃) 폴더

이 저장소 안에 참조용 레이아웃을 보관할 때 사이트 성격에 따라 폴더를 구분합니다.

| 폴더 | 용도 |
|---|---|
| [`solvek-web/`](solvek-web) | 일반 웹사이트(공공기관 홈페이지 등) 레이아웃 |
| `solvek-map/` | 지도/GIS 기반 서비스 레이아웃 |
| `solvek-admin/` | 관리자 페이지 레이아웃 |

> 실제 페이지를 만드는 위치는 사용자가 정합니다 — 이 저장소 바깥에 생성할 수도 있습니다. 위 폴더는 저장소 안에 레이아웃을 보관할 때의 분류 기준입니다.

어느 위치에 만들든 동일한 `components/`, `css/index.css` 기준을 따르며, variant가 있는 컴포넌트는 사이트 성격에 맞는 variant(예: 관리자 페이지는 Breadcrumb admin variant)를 사용합니다.

---

## CSS 호출

페이지에서는 아래 한 줄만 호출합니다.

```html
<link rel="stylesheet" href="/css/index.css">
```

`css/index.css` 구성:

```
tokens/    → color, typography, spacing, radius
default/   → border, color, common, component, icon, layout, responsive, spacing, typography
component/ → button, input, search, textarea, checkbox, radio, datepicker, select, shadow, modal, header, footer, breadcrumb
```

---

## 디자인 토큰 (대표)

| 구분 | 예시 |
|---|---|
| 색상 | `--slate-900`, `--blue-500` 등 16개 팔레트 × 50~900 단계, 유틸 클래스 `color-*` / `bg-*` / `border-*` |
| 타이포 | `heading{1~10}-{weight}-{px}`, `body{1~5}-{weight}-{px}` (Pretendard) |
| 간격 | `--spacing-{2~120}`, 유틸 클래스 `m-*` / `p-*` / `gap-*` |
| 라운드 | `--radius-xs-2` ~ `--radius-full` |

레이아웃 유틸(`grid-column-*`, `inner-default`, `flex-*`, `position`, `width/height` 등)은 `css/default/layout.css`에 정의되어 있습니다.

---

## 컴포넌트

각 컴포넌트는 `components/{name}/` 폴더에 다음 세 파일로 관리됩니다.

- **`spec.json`** — variant, 허용 클래스, 접근성 규칙
- **`README.md`** — 마크업 예시 (단일 출처)
- **`css/component/{name}.css`** — 스타일·상태(`:hover`, `.active`, `disabled` 등)

| 컴포넌트 | 설명 | 사용 예시 |
|---|---|---|
| [Button](components/button/README.md) | `{color}-button-{size}` 네이밍, 7색상 × 5~6사이즈, 아이콘/disabled 변형 | |
| [Input](components/input/README.md) | `input-field-default-{size}`, 에러/비밀번호/아이콘 변형 | |
| [Textarea](components/textarea/README.md) | `textarea-wrapper` + 글자수 카운터 | |
| [Search](components/search/README.md) | 선행/후행/CTA/팝업/메인검색 5가지 variant | |
| [Checkbox](components/checkbox/README.md) | basic / chip / list 3가지 variant | |
| [Radio](components/radio/README.md) | basic / segment / toggle 3가지 variant | |
| [Select](components/select/README.md) | `select-{size}`, wrapper 필수 | |
| [Datepicker](components/datepicker/README.md) | flatpickr 기반, 단일/기간 선택 | |
| [Modal](components/modal/README.md) | 일반/이벤트성, footer 3가지 레이아웃 | |
| [Shadow](components/shadow/README.md) | `shadow-xs/s/md/lg` 고도 단계 | |
| [Header](components/header/README.md) | 로고·GNB·통합검색·모바일 드로어 | [solvek-web/header.html](solvek-web/header.html) |
| [Footer](components/footer/README.md) | 퀵 아코디언·연락처·정책 링크 | [solvek-web/footer.html](solvek-web/footer.html) |
| [Breadcrumb](components/breadcrumb/README.md) | webkit/admin 2가지 variant | |
| [Search Filter](components/filter/README.md) | 검색 결과 좌측 사이드바 아코디언 필터 | [solvek-web/filter.html](solvek-web/filter.html) |
| [Pagination](components/pagination/README.md) | 이전/다음 + 숫자 페이지 + 생략(...) 표시 | [solvek-web/number.html](solvek-web/number.html) |
| [Chip](components/chip/README.md) | 선택/태그 표시 칩, 기본형/삭제 아이콘형 | |
| [Icon](components/icon/README.md) | `css/default/icon.css` 아이콘 전체 목록 + 이미지 미리보기 | |

> `solvek-web/` 폴더 페이지가 어떤 컴포넌트로 구성되는지는 [`solvek-web/README.md`](solvek-web/README.md) 인덱스에서도 확인할 수 있습니다.

---

## AI 페이지 생성 규칙

AI가 페이지를 생성·수정할 때 따라야 하는 전체 규칙(토큰, 유틸 클래스, 컴포넌트 사용법, 절대 금지 사항, JS 패턴 등)은 **[`CLAUDE.md`](CLAUDE.md)** 에 정리되어 있습니다.

페이지 생성 시 추가로 다음 문서를 함께 따릅니다.

- 접근성: [`docs/accessibility.md`](docs/accessibility.md)
- SEO: [`docs/seo.md`](docs/seo.md)
