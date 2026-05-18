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

| 클래스 접두사 | 용도 |
|---|---|
| `blue` | 주요 CTA |
| `border-blue` | 보조 액션 (blue 테두리) |
| `slate` | 중립 액션 |
| `border-slate` | 중립 보조 액션 (slate 테두리) |
| `slate-50` | 약한 강조, 배경이 있는 중립 액션 |
| `transparent` | 배경 없는 텍스트형 액션 |

---

## 사이즈 (size)

높이(rem 기준, 1rem = 10px 가정 시 px)에 맞춘 숫자 접미사입니다.

| 높이 | 클래스 접미사 |
|---|---|
| 4.8rem (48px) | `48` |
| 4.0rem (40px) | `40` |
| 3.6rem (36px) | `36` |
| 3.2rem (32px) | `32` |
| 2.8rem (28px) | `28` |

---

## 사용 예시

```html
<!-- 주요 CTA -->
<button type="button" class="blue-button-40">저장</button>

<!-- 보조 액션 -->
<button type="button" class="border-blue-button-36">취소</button>

<!-- 중립 액션 -->
<button type="button" class="slate-button-40">확인</button>

<!-- 중립 보조 -->
<button type="button" class="border-slate-button-36">닫기</button>

<!-- 약한 강조 -->
<button type="button" class="slate-50-button-32">더보기</button>

<!-- 텍스트형 -->
<button type="button" class="transparent-button-32">삭제</button>

<!-- 아이콘 포함 -->
<button type="button" class="blue-button-48 flex align-center">
  시작하기
  <span class="arrow-right-white"></span>
</button>

<!-- disabled -->
<button type="button" class="blue-button-40" disabled>저장</button>
```

---

## 규칙

- `type` 속성 반드시 명시 (`button` / `submit` / `reset`)
- 정의된 클래스만 사용, 임의 클래스 생성 금지
- 사이즈 없이 색상만 단독 사용 금지
- `div` / `span` 으로 버튼 대체 금지