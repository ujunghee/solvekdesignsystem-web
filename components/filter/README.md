# Search Filter (검색필터)

검색 결과 페이지 좌측 사이드바 필터 컴포넌트입니다. 아코디언 섹션 + 체크박스·셀렉트 조합으로 구성됩니다.

---

## 구조

```
aside.search-filter[aria-labelledby]
├── .search-filter__head
│   ├── h2.search-filter__title
│   └── button.search-filter__reset[data-search-filter-reset]
├── .search-filter__section.active
│   ├── button.search-filter__toggle[data-search-filter-toggle]
│   └── .search-filter__panel
│       ├── ul.search-filter__list
│       │   └── li.search-filter__item > checkbox + label (+ count)
│       ├── ul.search-filter__list.search-filter__list--cols-2 (2열)
│       └── .search-filter__selects > select-wrapper × 2
```

---

## 사이즈

| 속성 | 값 |
|---|---|
| max-width | `28.4rem` (284px) |
| 체크박스 | `checkbox-basic checkbox-basic-sm` |
| 셀렉트 (소재지) | `select-wrapper` + `select-40 flex align-center` + `error-message` (`components/select` 스펙 준수) |
| 옵션 라벨 | `body3-r-14 color-slate-700` |
| 건수 | `search-filter__count body3-r-14 color-slate-500` |

---

## 섹션 유형

| 유형 | 클래스 | 용도 |
|---|---|---|
| 단일 열 체크박스 | `search-filter__list` | 지정구분, 관련 자료 |
| 건수 포함 | `justify-between` + `search-filter__count` | 데이터 유형 |
| 2열 체크박스 | `search-filter__list--cols-2` | 지정종목, 파일형식 |
| 셀렉트 2개 | `search-filter__selects` | 소재지 |

---

## 상태

| 상태 | 처리 방식 |
|---|---|
| 섹션 펼침 | `search-filter__section.active` + `aria-expanded="true"` |
| 섹션 접힘 | `active` 제거 + `aria-expanded="false"` |
| 초기화 | `data-search-filter-reset` 클릭 시 체크박스·셀렉트 초기값 복원 |

> 펼침/접힘·화살표 회전은 CSS + JS `active` 토글로만 제어합니다.

---

## 사용 예시

```html
<aside class="search-filter" aria-labelledby="search-filter-title">
  <div class="search-filter__head flex justify-between align-center">
    <h2 id="search-filter-title" class="search-filter__title body1-sb-18 color-slate-900">검색필터</h2>
    <button type="button" class="search-filter__reset transparent-button-32 flex align-center gap-4" data-search-filter-reset>
      <span class="body3-r-14 color-slate-500">초기화</span>
      <i class="filter-reset-20" aria-hidden="true"></i>
      <span class="blind">필터 초기화</span>
    </button>
  </div>

  <div class="search-filter__section active">
    <button type="button" class="search-filter__toggle body2-sb-16 color-slate-900 flex align-center justify-between w-full" aria-expanded="true" data-search-filter-toggle>
      데이터 유형
      <i class="arrow-icon" aria-hidden="true"></i>
    </button>
    <div class="search-filter__panel">
      <ul class="search-filter__list">
        <li class="search-filter__item">
          <div class="flex align-center justify-between gap-8">
            <div class="flex align-center gap-8">
              <input type="checkbox" class="checkbox-basic checkbox-basic-sm" id="filter-data-1" checked>
              <label for="filter-data-1" class="body3-r-14 color-slate-700">지정유산</label>
            </div>
            <span class="search-filter__count body3-r-14 color-slate-500 text-nowrap">8,270</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</aside>
```

---

## 접근성

- `aside`에 `aria-labelledby` → `h2#search-filter-title` 연결
- 섹션 토글 `button`에 `aria-expanded` 필수
- 체크박스는 `id` / `label for` 분리 구조 (basic형 규칙)
- 셀렉트는 `select-wrapper` + `aria-label` 또는 `label.blind`
- 초기화 버튼에 `blind` 보조 텍스트

---

## 규칙

- 체크박스는 `checkbox-basic checkbox-basic-sm` + id/for 분리만 사용
- 셀렉트는 `components/select/README.md` 구조 그대로: `select-wrapper` > `label.blind`(또는 visible label) + `select-40 flex align-center` + `p.error-message`
- 셀렉트에 `w-full` 불필요 (`select-40`이 이미 `width: 100%`)
- 소재지 등 기본값이 있는 셀렉트는 placeholder option 생략 가능, `error-message`는 DOM에 항상 포함
- 섹션 토글은 `button` + `arrow-icon` (펼침 시 아래 방향)
- 초기화 아이콘은 `filter-reset-20`만 사용
- `search-filter__item`의 `label`은 긴 텍스트 줄바꿈(`word-break: keep-all`) 처리되며, 체크박스는 상단 정렬
- `search-filter__*` BEM 외 임의 클래스 추가 금지
