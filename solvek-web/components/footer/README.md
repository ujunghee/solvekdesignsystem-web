# Footer

사이트 공통 푸터 컴포넌트입니다. 로고·연락처·정책 링크·저작권 정보로 구성됩니다.

---

## 구조

```
footer.footer[role=contentinfo]
├── footer__quick
│   └── inner-default
│       └── footer__quick-list (3컬럼)
│           └── li > footer__quick-btn (아코디언 버튼 + footer-plus-20)
└── footer__body
    └── inner-default.footer__inner
        ├── footer__brand > a.footer__logo > img
        ├── footer__info (연락처 + 이용안내 링크)
        ├── footer__divider[role=presentation][aria-hidden=true]
        └── footer__bottom (정책 링크 목록 + 저작권 문구)
```

---

## 사용 예시

```html
<footer class="footer" role="contentinfo">
  <div class="footer__quick">
    <div class="inner-default">
      <ul class="footer__quick-list">
        <li>
          <button type="button" class="footer__quick-btn flex justify-between align-center w-full" aria-expanded="false">
            <span class="body2-r-16 color-slate-700">산하기관 / 연계기관</span>
            <i class="footer-plus-20" aria-hidden="true"></i>
            <span class="blind">메뉴 열기</span>
          </button>
        </li>
        <li>
          <button type="button" class="footer__quick-btn flex justify-between align-center w-full" aria-expanded="false">
            <span class="body2-r-16 color-slate-700">정부기관 / 공공 포털</span>
            <i class="footer-plus-20" aria-hidden="true"></i>
            <span class="blind">메뉴 열기</span>
          </button>
        </li>
        <li>
          <button type="button" class="footer__quick-btn flex justify-between align-center w-full" aria-expanded="false">
            <span class="body2-r-16 color-slate-700">현장 운영 기관</span>
            <i class="footer-plus-20" aria-hidden="true"></i>
            <span class="blind">메뉴 열기</span>
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer__body">
    <div class="inner-default footer__inner">
      <div class="footer__brand">
        <a href="/" class="footer__logo" aria-label="사이트명 홈으로 이동">
          <img src="/image/icon/footer-logo.svg" alt="사이트명">
        </a>
      </div>

      <div class="footer__info flex justify-between align-start">
        <div class="footer__contact">
          <p class="body3-r-14 color-slate-700">주소</p>
          <p class="body3-b-14 color-slate-900 mt-8">민원실 연락처</p>
        </div>
        <a href="/guide" class="footer__guide body3-r-14 color-slate-700 flex align-center gap-8">
          이용안내
          <span class="chevron-right-slate-700" aria-hidden="true"></span>
        </a>
      </div>

      <div class="footer__divider border-t border-slate-200 mt-28 mb-16" role="presentation" aria-hidden="true"></div>

      <div class="footer__bottom flex justify-between align-center">
        <ul class="footer__policy-list flex flex-wrap gap-16">
          <li><a href="/terms" class="body4-r-13 color-slate-500">이용약관</a></li>
          <li><a href="/privacy" class="body4-r-13 color-slate-500">개인정보처리방침</a></li>
          <li><a href="/email-reject" class="body4-r-13 color-slate-500">이메일무단수집거부</a></li>
          <li><a href="/copyright" class="body4-r-13 color-slate-500">저작권보호정책</a></li>
        </ul>
        <p class="body4-r-13 color-slate-500">© 기관명. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
```

---

## 규칙

- `footer` 루트에 `role="contentinfo"` 필수
- `footer__quick`은 `footer__body` 위에 위치하는 외부 링크 아코디언 영역 (3컬럼 grid, 1024px 이하 1컬럼 전환)
- `footer__quick-btn`에 `aria-expanded` 필수, `footer-plus-20` 아이콘은 `aria-hidden="true"`, 안내 텍스트는 `span.blind`
- 로고 링크에 `aria-label`로 사이트명 명시
- 장식용 구분선(`footer__divider`)에는 `role="presentation"` `aria-hidden="true"` 필수
- 정책 링크 목록은 `ul` > `li` > `a` 구조 유지
- 1024px 이하에서 `footer__info`, `footer__bottom`을 column으로 전환 (반응형)
- 색상·타이포·간격은 토큰/유틸 클래스만 사용, 인라인 스타일 금지
- 정의되지 않은 임의 클래스 생성 금지 (`footer__*` BEM 패턴만 사용)
