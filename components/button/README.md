# Button

사용자가 액션을 트리거하는 버튼 컴포넌트입니다.

---

## 네이밍 패턴

```
{color}-button-{size}
border-{color}-button-{size}
```

---

## 색상 (color)

| 클래스 접두사 | 용도 | 사용 상황 | 대표 예시 |
|---|---|---|---|
| `blue` | 주요 CTA | 화면 내 가장 중요한 주요 액션 | 저장, 검색, 제출 |
| `border-blue` | 보조 액션 | 주요 액션을 보조하는 행동 | 수정, 추가, 상세 |
| `blue-50` | 주요 보완 (밝은 배경) | 주요 액션을 보완하는 부가 기능 | 문의, 옵션 설정, 목록보기 |
| `slate` | 중립 액션 | 주요 액션 (색상 톤만 다름) | 저장, 검색, 제출 |
| `border-slate` | 중립 보조 | 낮은 우선순위의 보조/취소/닫기 | 취소, 닫기 |
| `slate-50` | 약한 강조 | 부가 기능 | 문의, 옵션 설정, 테이블 액션 |
| `transparent` | 텍스트형 | 링크성 또는 최소 강조 액션 | 더보기, 상세보기, 관심 |

---

## 사이즈 (size)

| 사이즈 | 높이 |
|---|---|
| `48` | 4.8rem |
| `40` | 4.0rem |
| `36` | 3.6rem |
| `32` | 3.2rem |
| `28` | 2.8rem |

---

## 사용 예시

### 기본

```html
<!-- 주요 CTA -->
<button type="button" class="blue-button-40">저장</button>

<!-- 보조 액션 -->
<button type="button" class="border-blue-button-36">수정</button>

<!-- 주요 보완 -->
<button type="button" class="blue-50-button-36">문의</button>

<!-- 중립 액션 -->
<button type="button" class="slate-button-40">확인</button>

<!-- 중립 보조 -->
<button type="button" class="border-slate-button-36">취소</button>

<!-- 약한 강조 -->
<button type="button" class="slate-50-button-32">목록보기</button>

<!-- 텍스트형 -->
<button type="button" class="transparent-button-32">더보기</button>
```

### disabled

```html
<!-- disabled 버튼은 색상 접두사 없이 button-{size} + disabled 속성 -->
<button type="button" class="button-48" disabled>비활성</button>
```

### 아이콘 버튼

```html
<!-- 아이콘 오른쪽 (blue/slate 계열: chevron-right-white) -->
<button type="button" class="blue-button-48 icon-button-right flex align-center">
  저장
  <span class="chevron-right-white"></span>
</button>

<!-- 아이콘 왼쪽 -->
<button type="button" class="blue-button-48 icon-button-left flex align-center">
  <span class="chevron-right-white"></span>
  저장
</button>

<!-- slate-50 계열: chevron-right-slate-700 -->
<button type="button" class="slate-50-button-48 icon-button-right flex align-center">
  목록보기
  <span class="chevron-right-slate-700"></span>
</button>

<button type="button" class="slate-50-button-48 icon-button-left flex align-center">
  <span class="chevron-right-slate-700"></span>
  목록보기
</button>

<!-- slate 계열: chevron-right-white -->
<button type="button" class="slate-button-48 icon-button-right flex align-center">
  확인
  <span class="chevron-right-white"></span>
</button>
```

### 아이콘 색상 매핑

| 버튼 색상 | 아이콘 클래스 |
|---|---|
| blue, slate | `chevron-right-white` |
| slate-50, transparent | `chevron-right-slate-700` |

---

## 규칙

- `type` 속성 반드시 명시 (`button` / `submit` / `reset`)
- 정의된 클래스만 사용, 임의 클래스 생성 금지
- 사이즈 없이 색상만 단독 사용 금지
- 아이콘 버튼은 반드시 `flex align-center` 추가
- disabled 버튼은 색상 접두사 없이 `button-{size}` + `disabled` 속성
- `div` / `span` 으로 버튼 대체 금지