# solvek-web 레이아웃

일반 웹사이트(공공기관 홈페이지 등) 레이아웃 참조 파일을 모아둔 폴더입니다.

이 폴더에는 **web 전용 컴포넌트**의 정의(`components/{name}/spec.json` + `README.md`)와 실제 페이지 HTML이 함께 들어 있습니다. 모든 사이트에서 공통으로 쓰는 컴포넌트(Button, Input, Breadcrumb 등)는 저장소 루트의 `../components/`에서 관리합니다.

---

## web 전용 컴포넌트

web 레이아웃에서만 사용하는 컴포넌트입니다. 마크업·규칙의 단일 출처는 각 `components/{name}/README.md` + `spec.json`입니다.

| 컴포넌트 | 설명 |
|---|---|
| [Header](components/header/README.md) | 로고·GNB·통합검색·모바일 드로어 |
| [Footer](components/footer/README.md) | 퀵 아코디언·연락처·정책 링크 |
| [Search Filter](components/filter/README.md) | 검색 결과 좌측 사이드바 아코디언 필터 |
| [Pagination](components/pagination/README.md) | 이전/다음 + 숫자 페이지 + 생략(...) 표시 |

> CSS는 `../css/component/{header,footer,filter,pagination}.css`에 있으며 `../css/index.css`가 통합 호출합니다 — 위치는 그대로 유지됩니다.

---

## 페이지 파일

| 파일 | 구성 컴포넌트 |
|---|---|
| [`header.html`](header.html) | [Header](components/header/README.md), [Search](../components/search/README.md) (메인 통합검색) |
| [`footer.html`](footer.html) | [Footer](components/footer/README.md) |
| [`filter.html`](filter.html) | [Search Filter](components/filter/README.md), [Checkbox](../components/checkbox/README.md), [Radio](../components/radio/README.md), [Select](../components/select/README.md), [Datepicker](../components/datepicker/README.md) |
| [`number.html`](number.html) | [Pagination](components/pagination/README.md) |

`Breadcrumb`(webkit variant)도 일반 웹사이트 페이지 상단에 함께 사용됩니다 → 공통 [Breadcrumb](../components/breadcrumb/README.md)

---

## 규칙

- web 전용 컴포넌트 마크업은 `solvek-web/components/{name}/README.md`를, 공통 컴포넌트는 `../components/{name}/README.md`를 단일 출처로 따른다.
- 규칙·variant·접근성 속성을 바꿀 때는 해당 `spec.json` + `README.md`를 먼저 수정하고 페이지에 반영한다.
- 이 폴더 전용 임의 클래스나 구조를 새로 만들지 않는다 — `../CLAUDE.md`의 절대 금지 사항을 따른다.
