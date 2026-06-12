# Meta Tag

API·데이터셋 등 **정보 리소스의 카테고리 분류**를 표시하는 정적 태그입니다.  
대분류 / 중분류 / 소분류처럼 **분류 체계의 value만** 노출하며, 클릭·필터·선택 동작은 없습니다.

---

## 용도

| 사용 상황 | 예시 |
|---|---|
| API 목록·상세 | 제공 API의 분류 체계 표시 |
| 데이터 카탈로그 | 데이터셋 소속 카테고리 표시 |
| 정보 리소스 메타 | 리소스가 속한 분류 depth 표시 |

> 조회수·날짜 등 다른 메타 정보는 이 컴포넌트가 아닙니다. 분류 **카테고리 value** 전용입니다.

---

## 구조

```
ul.meta-tag-list
└── li > span.meta-tag[.meta-tag--active]
```

---

## 분류 depth

| depth | 예시 value | 비고 |
|---|---|---|
| 1depth | 대분류 | 최상위 카테고리 |
| 2depth | 중분류 | 중간 카테고리 |
| 3depth | 소분류 | 하위 카테고리 |

실제 value 텍스트는 서비스/API 도메인에 맞게 교체합니다. 위 예시는 분류 depth 데모용입니다.

---

## 사용 예시

```html
<ul class="meta-tag-list">
  <li>
    <span class="meta-tag meta-tag--active">대분류</span>
  </li>
  <li>
    <span class="meta-tag">중분류</span>
  </li>
  <li>
    <span class="meta-tag">소분류</span>
  </li>
</ul>
```

단일 분류만 표시할 때:

```html
<span class="meta-tag">문화유산</span>
```

---

## 사이즈·스타일

| 속성 | 값 |
|---|---|
| 높이 | `2.4rem` |
| padding | `0 var(--spacing-6)` |
| radius | `radius-sm-4` |
| 폰트 | `body3` · 기본 semibold / active medium |
| 목록 gap | `spacing-8` |

| 유형 | 클래스 | 스타일 |
|---|---|---|
| 기본 | `meta-tag` | `slate-50` 배경 + `slate-700` 텍스트 (semibold) |
| 강조 | `meta-tag--active` | `blue-50` 배경 + `blue-500` 텍스트 (medium) |

`meta-tag--active`는 **현재 맥락에서 강조할 분류 depth**(예: 상세 화면 기준 depth)에만 마크업으로 지정합니다. 선택 UI가 아닙니다.

---

## 규칙

- `span.meta-tag`에 분류 value 텍스트만 사용 (`button`·`a` 금지)
- 여러 depth를 나열할 때 `ul.meta-tag-list > li` 구조 사용
- 스타일은 `css/component/meta-tag.css`에 정의된 클래스만 사용
- 필터·다중 선택이 필요하면 `components/checkbox` chip variant 또는 별도 컴포넌트 사용
- `components/chip`은 삭제 가능한 태그 UI, meta-tag는 **분류 정보 표시 전용**으로 구분

---

## 접근성

- 순수 표시용이므로 `role`·`aria-pressed` 불필요
- 목록 나열 시 의미상 목록이면 `ul.meta-tag-list > li` 유지
