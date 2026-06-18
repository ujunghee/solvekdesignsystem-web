# Map Navigation

지도 화면 좌측에 고정되는 도구 내비게이션입니다. 주요 지도 메뉴를 세로 목록으로 제공하고, 선택된 메뉴는 `active` 클래스와 `aria-pressed`로 상태를 동기화합니다.

---

## 구조

```text
nav.map-navigation[aria-label="지도 도구"]
└── ul.map-navigation__list
    ├── li
    │   └── button.map-navigation__item[type=button][aria-pressed]
    │       ├── i.map-nav-icon[aria-hidden=true]
    │       └── span.map-navigation__label.body3-m-14
    └── li.map-navigation__bottom
        └── button.map-navigation__item[type=button]
            ├── i.map-nav-icon[aria-hidden=true]
            └── span.map-navigation__label.body3-m-14
```

- 내비게이션 너비: `7.2rem` (72px)
- 높이: `100vh`
- 항목 최소 높이: `6.4rem` (64px)
- 목록 여백: `spacing-4`
- 항목 radius: `radius-md-8`
- 안내 항목은 `map-navigation__bottom`으로 하단 고정

---

## 사용 예시

```html
<nav class="map-navigation" aria-label="지도 도구">
  <ul class="map-navigation__list">
    <li>
      <button type="button" class="map-navigation__item active" aria-pressed="true">
        <i class="map-nav-icon" aria-hidden="true"></i>
        <span class="map-navigation__label body3-m-14">메뉴명 01</span>
      </button>
    </li>
    <li>
      <button type="button" class="map-navigation__item" aria-pressed="false">
        <i class="map-nav-icon" aria-hidden="true"></i>
        <span class="map-navigation__label body3-m-14">메뉴명 02</span>
      </button>
    </li>
    <li class="map-navigation__bottom">
      <button type="button" class="map-navigation__item">
        <i class="map-nav-icon" aria-hidden="true"></i>
        <span class="map-navigation__label body3-m-14">안내</span>
      </button>
    </li>
  </ul>
</nav>
```

---

## JS - 선택 상태 동기화

```javascript
document.querySelectorAll('.map-navigation__item[aria-pressed]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.map-navigation__item[aria-pressed]').forEach((el) => {
      el.classList.remove('active');
      el.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
  });
});
```

---

## 규칙

- 루트는 `nav.map-navigation`, `aria-label="지도 도구"` 필수
- 목록은 `ul.map-navigation__list > li > button.map-navigation__item` 구조 유지
- 메뉴 항목은 `button[type=button]` 사용, `a`/`div`/`span` 대체 금지
- 선택 가능한 메뉴 항목은 `aria-pressed` 필수, `active` 클래스와 JS로 동기화
- 한 번에 하나의 메뉴만 `aria-pressed="true"`와 `active` 상태를 가짐
- 아이콘은 `i.map-nav-icon[aria-hidden=true]`, 레이블은 `span.map-navigation__label.body3-m-14` 구조 사용
- 하단 안내 항목은 `li.map-navigation__bottom` 사용
- 정의되지 않은 임의 클래스 생성 금지 (`map-navigation__*` 패턴 + `map-nav-icon`만 사용)
