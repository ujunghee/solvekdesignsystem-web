# Search Filter (검색필터)

검색 결과 페이지 좌측 사이드바 필터 컴포넌트입니다. 아코디언 섹션 + 체크박스·라디오·셀렉트·기간(datepicker) 조합으로 구성됩니다.

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
│       ├── ul.search-filter__list--cols-2.search-filter__period-radios (기간 라디오)
│       │   └── .search-filter__period-dates (단일 datepicker × 2) | .search-filter__period-range (range datepicker × 1)
│       └── .search-filter__selects > select-wrapper × 2
```

---

## 사이즈

| 속성 | 값 |
|---|---|
| max-width | `28.4rem` (284px) |
| 타이틀 | `heading10-sb-20 color-slate-900` |
| 섹션 토글 | `body1-m-18 color-slate-900` |
| 체크박스 | `checkbox-basic checkbox-basic-md` |
| 라디오 | `radio-basic radio-basic-md` |
| 셀렉트 | `select-wrapper` + `select-40 flex align-center` + `error-message` (`components/select` 스펙 준수) |
| 기간 datepicker | `input-field-default-40 input-with-trailing-icon` (`components/datepicker` 스펙 준수) |
| 옵션 라벨 | `body2-r-16 color-slate-900` |
| 건수 | `search-filter__count body3-r-14 color-slate-500` |

---

## 섹션 유형

| 유형 | 클래스 | 용도 |
|---|---|---|
| 1열 + 건수 | `search-filter__list` + `justify-between` + `search-filter__count` | 결과 건수 표시 |
| 1열 체크박스 | `search-filter__list` | 단일 열 옵션 |
| 2열 체크박스 | `search-filter__list--cols-2` | 옵션 다수 |
| 기간 type1 | `search-filter__period-radios` + `search-filter__period-dates` | 라디오 + 시작일자·종료일자 단일 datepicker 2개 |
| 기간 type2 | `search-filter__period-radios` + `search-filter__period-range` | 라디오 + range datepicker 1개 |
| 셀렉트 2개 | `search-filter__selects` | 옵션 그룹 2개 |

---

## 상태

| 상태 | 처리 방식 |
|---|---|
| 섹션 펼침 | `search-filter__section.active` + `aria-expanded="true"` |
| 섹션 접힘 | `active` 제거 + `aria-expanded="false"` |
| 초기화 | `data-search-filter-reset` 클릭 시 체크박스·셀렉트·기간 라디오/날짜 초기값 복원 |
| 기간 '직접 설정' | 라디오에서 `value="custom"` 선택 시에만 datepicker input·트리거 버튼 활성화(`disabled` 해제), 그 외에는 비활성화 + 값 초기화 |

> 펼침/접힘·화살표 회전은 CSS + JS `active` 토글로만 제어합니다.

---

## 사용 예시

### 1열 + 건수

```html
<div class="search-filter__section active">
  <button type="button" class="search-filter__toggle body1-m-18 color-slate-900 flex align-center justify-between w-full" aria-expanded="true" data-search-filter-toggle>
    1열 + 건수
    <i class="arrow-icon" aria-hidden="true"></i>
  </button>
  <div class="search-filter__panel">
    <ul class="search-filter__list">
      <li class="search-filter__item">
        <div class="flex align-center justify-between gap-8">
          <div class="flex align-center gap-8">
            <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="filter-count-1" checked>
            <label for="filter-count-1" class="body2-r-16 color-slate-900">필터 항목 1</label>
          </div>
          <span class="search-filter__count body3-r-14 color-slate-500 text-nowrap">1,234</span>
        </div>
      </li>
    </ul>
  </div>
</div>
```

### 2열 체크박스

```html
<ul class="search-filter__list search-filter__list--cols-2">
  <li class="search-filter__item">
    <div class="flex align-center gap-8">
      <input type="checkbox" class="checkbox-basic checkbox-basic-md" id="filter-col2-1">
      <label for="filter-col2-1" class="body2-r-16 color-slate-900">옵션 1</label>
    </div>
  </li>
  <!-- ... -->
</ul>
```

### 기간 type1 (라디오 + 시작일·종료일 datepicker)

```html
<div class="search-filter__panel">
  <ul class="search-filter__list search-filter__list--cols-2 search-filter__period-radios">
    <li class="search-filter__item">
      <div class="flex align-center gap-8">
        <input type="radio" name="filter-period" class="radio-basic radio-basic-md" id="filter-period-all" value="all" checked>
        <label for="filter-period-all" class="body2-r-16 color-slate-900">기간 전체</label>
      </div>
    </li>
    <li class="search-filter__item">
      <div class="flex align-center gap-8">
        <input type="radio" name="filter-period" class="radio-basic radio-basic-md" id="filter-period-1y" value="1y">
        <label for="filter-period-1y" class="body2-r-16 color-slate-900">최근 1년</label>
      </div>
    </li>
    <li class="search-filter__item">
      <div class="flex align-center gap-8">
        <input type="radio" name="filter-period" class="radio-basic radio-basic-md" id="filter-period-custom" value="custom">
        <label for="filter-period-custom" class="body2-r-16 color-slate-900">직접 설정</label>
      </div>
    </li>
  </ul>
  <div class="search-filter__period-dates">
    <div class="search-filter__period-date flex align-center gap-8">
      <label for="filter-period-start" class="search-filter__period-label body2-r-16 color-slate-900">시작일자</label>
      <div class="input-wrapper flex-1">
        <div class="relative w-full flex align-center">
          <input type="text" id="filter-period-start" class="input-field-default-40 input-with-trailing-icon w-full" placeholder="연도-월-일" autocomplete="off" disabled>
          <button type="button" class="absolute right-0 top-50 translate-y-50" data-datepicker-for="filter-period-start" disabled>
            <i class="calendar-icon" aria-hidden="true"></i>
            <span class="blind">시작일자 선택</span>
          </button>
        </div>
      </div>
    </div>
    <div class="search-filter__period-date flex align-center gap-8">
      <label for="filter-period-end" class="search-filter__period-label body2-r-16 color-slate-900">종료일자</label>
      <div class="input-wrapper flex-1">
        <div class="relative w-full flex align-center">
          <input type="text" id="filter-period-end" class="input-field-default-40 input-with-trailing-icon w-full" placeholder="연도-월-일" autocomplete="off" disabled>
          <button type="button" class="absolute right-0 top-50 translate-y-50" data-datepicker-for="filter-period-end" disabled>
            <i class="calendar-icon" aria-hidden="true"></i>
            <span class="blind">종료일자 선택</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 기간 type2 (라디오 + range datepicker)

```html
<div class="search-filter__panel">
  <ul class="search-filter__list search-filter__list--cols-2 search-filter__period-radios">
    <!-- 기간 type1과 동일한 라디오 구성, name="filter-period-2" -->
  </ul>
  <div class="search-filter__period-range pb-16">
    <div class="input-wrapper">
      <label for="filter-period-range" class="blind">기간</label>
      <div class="relative w-full flex align-center">
        <input type="text" id="filter-period-range" class="input-field-default-40 input-with-trailing-icon w-full" placeholder="시작일 ~ 종료일" autocomplete="off" disabled>
        <button type="button" class="absolute right-0 top-50 translate-y-50" data-datepicker-for="filter-period-range" disabled>
          <i class="calendar-icon" aria-hidden="true"></i>
          <span class="blind">기간 선택</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### 셀렉트 2개

```html
<div class="search-filter__selects flex gap-8 pb-16">
  <div class="select-wrapper flex-1">
    <label for="filter-select-1" class="blind">셀렉트 1</label>
    <select id="filter-select-1" class="select-40 flex align-center" name="filter-select-1" aria-label="셀렉트 1">
      <option value="all" selected>전체</option>
      <option value="option-a">옵션 A</option>
    </select>
    <p class="error-message">에러 메시지</p>
  </div>
  <div class="select-wrapper flex-1">
    <label for="filter-select-2" class="blind">셀렉트 2</label>
    <select id="filter-select-2" class="select-40 flex align-center" name="filter-select-2" aria-label="셀렉트 2">
      <option value="all" selected>전체</option>
      <option value="option-a">옵션 A</option>
    </select>
    <p class="error-message">에러 메시지</p>
  </div>
</div>
```

> 전체 페이지 예시(`solvek-web/filter.html`)에는 위 섹션들과 함께 초기화·기간 활성/비활성 토글·아코디언 펼침/접힘을 처리하는 JS가 포함되어 있습니다. 기간 datepicker는 `components/datepicker/datepicker.js`의 `initPicker(id)` / `initPicker(id, { mode: 'range' })`로 초기화합니다.

---

## 접근성

- `aside`에 `aria-labelledby` → `h2#search-filter-title` 연결
- 섹션 토글 `button`에 `aria-expanded` 필수
- 체크박스는 `id` / `label for` 분리 구조 (basic형 규칙)
- 라디오는 `id` / `label for` 분리 + 같은 섹션 내 동일 `name`
- 셀렉트는 `select-wrapper` + `aria-label` 또는 `label.blind`
- 기간 datepicker는 `input-wrapper` + `label`(또는 `label.blind`) + `data-datepicker-for` 일치, `autocomplete="off"`
- 초기화 버튼에 `blind` 보조 텍스트

---

## 규칙

- 체크박스는 `checkbox-basic checkbox-basic-md` + id/for 분리만 사용
- 라디오는 `radio-basic radio-basic-md` + id/for 분리, 같은 섹션 내 동일 `name`
- 셀렉트는 `components/select/README.md` 구조 그대로: `select-wrapper` > `label.blind`(또는 visible label) + `select-40 flex align-center` + `p.error-message`
- 셀렉트에 `w-full` 불필요 (`select-40`이 이미 `width: 100%`)
- 기간 datepicker는 `components/datepicker/README.md` 구조 그대로: `input-wrapper` > `input-field-default-40 input-with-trailing-icon` + `calendar-icon` 트리거
- 기간 라디오 그룹 첫 항목('기간 전체')은 `search-filter__list--cols-2`에서 전체 너비(`grid-column: 1 / -1`) 차지
- 기간 datepicker는 페이지 로드 시 `disabled` 상태로 시작, 라디오 '직접 설정'(`value="custom"`) 선택 시에만 활성화
- 섹션 토글은 `button` + `arrow-icon` (펼침 시 아래 방향)
- 초기화 아이콘은 `filter-reset-20`만 사용
- `search-filter__item`의 `label`은 긴 텍스트 줄바꿈(`word-break: keep-all`) 처리되며, 체크박스/라디오는 상단 정렬
- `search-filter__list--cols-2`는 별도 column-gap 없이 기본 `gap-8`만 사용
- `search-filter__*` BEM 외 임의 클래스 추가 금지
