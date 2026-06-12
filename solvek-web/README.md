# solvek-web 레이아웃

일반 웹사이트(공공기관 홈페이지 등) 레이아웃 참조 파일을 모아둔 폴더입니다. 이 폴더의 페이지들은 아래 컴포넌트로 구성됩니다.

> **마크업·규칙의 단일 출처는 항상 `components/{name}/README.md` + `spec.json`입니다.** 이 문서는 이 폴더의 파일이 어떤 컴포넌트로 구성되는지 안내하는 인덱스이며, 마크업 예시를 별도로 두지 않습니다.

| 파일 | 구성 컴포넌트 |
|---|---|
| [`header.html`](header.html) | [Header](../components/header/README.md) — 로고·GNB·통합검색·모바일 드로어, [Search](../components/search/README.md) (메인 통합검색) |
| [`footer.html`](footer.html) | [Footer](../components/footer/README.md) — 퀵 아코디언·연락처·정책 링크 |
| [`filter.html`](filter.html) | [Search Filter](../components/filter/README.md) — 좌측 사이드바 아코디언 필터, [Checkbox](../components/checkbox/README.md), [Radio](../components/radio/README.md), [Select](../components/select/README.md), [Datepicker](../components/datepicker/README.md) |
| [`number.html`](number.html) | [Pagination](../components/pagination/README.md) — 이전/다음 + 숫자 페이지 + 생략(...) |

`Breadcrumb`(webkit variant)도 일반 웹사이트 페이지 상단에 함께 사용됩니다 → [Breadcrumb](../components/breadcrumb/README.md)

---

## 규칙

- 새 페이지를 이 폴더에 만들 때도 컴포넌트 마크업은 위 표가 링크한 `components/{name}/README.md`를 그대로 따른다.
- 컴포넌트 규칙·variant·접근성 속성을 바꿀 필요가 있으면 `components/{name}/spec.json`과 `README.md`를 먼저 수정하고, 이 폴더의 페이지에 반영한다.
- 이 폴더 전용 임의 클래스나 구조를 새로 만들지 않는다 — `CLAUDE.md`의 절대 금지 사항을 따른다.
