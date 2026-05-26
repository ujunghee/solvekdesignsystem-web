# Shadow

그림자 유틸리티 클래스입니다. 요소의 고도(elevation)와 계층을 표현할 때 사용합니다.

---

## 고도 체계

| 클래스 | 고도 | 설명 | 대표 상황 |
|---|---|---|---|
| `shadow-xs` | 낮은 고도 | 기본 카드 | 기본 카드, 리스트 아이템, 입력 영역 구분 |
| `shadow-s` | 중간 고도 | 플로팅 요소 | 드롭다운, 툴팁, 플로팅 버튼, 날짜 선택기 |
| `shadow-md` | 높은 고도 | 오버레이 | 모달, 팝업, 바텀 시트, 사이드 패널 |
| `shadow-lg` | 최고 고도 | 최상위 레이어 | 다이얼로그, 알림 토스트, 전체화면 오버레이 |

```
shadow-lg  ← 최고 고도 · 최상위 레이어 (다이얼로그, 토스트)
shadow-md  ← 높은 고도 · 오버레이 (모달, 팝업)
shadow-s   ← 중간 고도 · 플로팅 요소 (드롭다운, 툴팁)
shadow-xs  ← 낮은 고도 · 기본 카드
```

---

## 사용 예시

```html
<!-- 낮은 고도 · 기본 카드 -->
<div class="shadow-xs">...</div>

<!-- 중간 고도 · 플로팅 요소 -->
<div class="shadow-s">...</div>

<!-- 높은 고도 · 오버레이 -->
<div class="shadow-md">...</div>

<!-- 최고 고도 · 최상위 레이어 -->
<div class="shadow-lg">...</div>
```

### 실제 적용 예시

```html
<!-- 기본 카드 -->
<div class="shadow-xs bg-white radius-md-8 p-20">
  <p class="body2-sb-16 color-slate-900">카드 제목</p>
  <p class="body3-r-14 color-slate-500 mt-8">카드 내용</p>
</div>

<!-- 드롭다운 -->
<div class="shadow-s bg-white radius-md-8 py-8">
  <ul>
    <li class="px-16 py-10 body2-r-16 color-slate-900">옵션 1</li>
    <li class="px-16 py-10 body2-r-16 color-slate-900">옵션 2</li>
  </ul>
</div>

<!-- 모달 -->
<div class="shadow-md bg-white radius-md-8 p-24">
  <p class="heading10-sb-20 color-slate-900">모달 제목</p>
  <p class="body2-r-16 color-slate-700 mt-12">모달 내용</p>
</div>
```

---

## 규칙

- 고도가 높을수록 더 큰 shadow 사용 (`shadow-xs` → `shadow-s` → `shadow-md` → `shadow-lg` 순서)
- 동일 레벨 요소에는 같은 shadow 클래스 사용
- `border`로 이미 구분된 요소에 중복 사용 금지
- 배경색이 투명한 요소에 사용 금지
- 장식 목적 또는 고도 순서를 역으로 사용 금지