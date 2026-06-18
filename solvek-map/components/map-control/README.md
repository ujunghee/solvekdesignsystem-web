# Map Control Panel

지도 화면에 배치되는 컨트롤 패널입니다. 현재위치 · 확대/축소 · 면적재기/지도분할 · 거리/면적 측정 · 인쇄 버튼을 그룹으로 묶어 세로로 배치합니다.

---

## 구조

```
div.map-control[role=group][aria-label="지도 컨트롤"]
├── div.map-control__group (현재 위치)
│   └── button.map-control__btn > i.gps-icon + span.blind
├── div.map-control__group (확대/축소)
│   ├── button.map-control__btn > i.plus-icon + span.blind
│   └── button.map-control__btn > i.minus-icon + span.blind
├── div.map-control__group (면적재기/지도분할)
│   ├── button.map-control__btn > i.arrow-expand-icon + span.blind
│   └── button.map-control__btn > i.divider-icon + span.blind
├── div.map-control__group (거리/면적 측정)
│   ├── button.map-control__btn (거리)
│   └── button.map-control__btn (면적)
└── div.map-control__group (인쇄)
    └── button.map-control__btn (인쇄)
```

- 버튼 크기: 40×40 (`4rem x 4rem`)
- 그룹 박스 radius: `radius-sm-4` (4px)
- 그룹 간 간격: `gap-12`
- 그룹 내부 버튼 사이는 1px `slate-200` 구분선

---

## 사용 예시

```html
<div class="map-control" role="group" aria-label="지도 컨트롤">
  <div class="map-control__group">
    <button type="button" class="map-control__btn" aria-pressed="false" data-control-toggle>
      <i class="gps-icon" aria-hidden="true"></i>
      <span class="blind">현재 위치</span>
    </button>
  </div>

  <div class="map-control__group">
    <button type="button" class="map-control__btn">
      <i class="plus-icon" aria-hidden="true"></i>
      <span class="blind">지도 확대</span>
    </button>
    <button type="button" class="map-control__btn">
      <i class="minus-icon" aria-hidden="true"></i>
      <span class="blind">지도 축소</span>
    </button>
  </div>

  <div class="map-control__group">
    <button type="button" class="map-control__btn" aria-pressed="false" data-control-toggle>
      <i class="arrow-expand-icon" aria-hidden="true"></i>
      <span class="blind">면적 재기</span>
    </button>
    <button type="button" class="map-control__btn" aria-pressed="false" data-control-toggle>
      <i class="divider-icon" aria-hidden="true"></i>
      <span class="blind">지도 분할</span>
    </button>
  </div>

  <div class="map-control__group">
    <button type="button" class="map-control__btn" aria-pressed="false" data-control-toggle>거리</button>
    <button type="button" class="map-control__btn" aria-pressed="false" data-control-toggle>면적</button>
  </div>

  <div class="map-control__group">
    <button type="button" class="map-control__btn">인쇄</button>
  </div>
</div>
```

---

## JS — 토글 버튼 활성화

```javascript
document.querySelectorAll('[data-control-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    btn.classList.toggle('active', !pressed);
    btn.querySelector('i')?.classList.toggle('active', !pressed);
  });
});
```

---

## 규칙

- 루트에 `role="group"`, `aria-label="지도 컨트롤"` 필수
- 모든 버튼은 `button[type=button]` 사용, `div`/`span`으로 대체 금지
- 토글형 버튼(현재위치/면적재기/지도분할/거리/면적)은 `aria-pressed` 필수, `active` 클래스와 JS로 동기화
- 아이콘 버튼은 `i[aria-hidden=true]` + `span.blind` 구조 필수
- 활성 상태는 아이콘형은 `i`에 `.active` 클래스(아이콘이 blue로 전환), 텍스트형은 버튼 자체에 `.active` 클래스(텍스트가 blue-500으로 전환)
- 확대(`plus-icon`)/축소(`minus-icon`) 버튼은 토글이 아니라 클릭하는 동안(CSS `:active`)만 아이콘이 blue로 전환되는 일시적 피드백이며, `aria-pressed`·JS 토글을 사용하지 않음
- 인쇄 버튼은 단발성 액션이므로 `aria-pressed` 없이 사용
- 정의되지 않은 임의 클래스 생성 금지 (`map-control__*` 패턴만 사용)
