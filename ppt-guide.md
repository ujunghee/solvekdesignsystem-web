# SolveK Design System — PPT 생성 가이드

이 문서는 AI가 SolveK Design System 기준으로 PPT를 생성할 때 따라야 하는 규칙입니다.
웹 CSS 변수 대신 HEX 색상값과 pt 단위를 사용합니다.

---

## 1. 기본 설정

- **슬라이드 크기**: 16:9 (33.867cm × 19.05cm)
- **폰트**: Pretendard (없을 경우 Noto Sans KR 또는 맑은 고딕)
- **기본 텍스트 색상**: #2a313a (slate-900)
- **기본 배경**: #ffffff (white)
- **언어**: 한국어
- **단위**: pt (포인트)

---

## 2. 색상 팔레트

### 2-1. 핵심 색상 (자주 사용)

| 용도 | 이름 | HEX | 사용 상황 |
|---|---|---|---|
| 주요 강조 | blue-500 | `#1a76ff` | 제목 강조, CTA 버튼, 핵심 키워드 |
| 주요 강조 밝은 | blue-50 | `#e8f1ff` | 강조 배경, 하이라이트 영역 |
| 주요 강조 어두운 | blue-700 | `#1254b5` | 진한 강조, 다크 배경 위 텍스트 |
| 기본 텍스트 | slate-900 | `#2a313a` | 제목, 본문 텍스트 |
| 보조 텍스트 | slate-500 | `#64748b` | 부제, 설명, 캡션 |
| 약한 텍스트 | slate-400 | `#8390a2` | 주석, placeholder |
| 구분선 | slate-200 | `#b8bfca` | 구분선, 테두리 |
| 밝은 배경 | slate-50 | `#f0f1f3` | 섹션 배경, 카드 배경 |
| 에러/경고 | red-500 | `#e60023` | 주의, 경고, 감소 표시 |
| 성공 | green-500 | `#38be78` | 완료, 성공, 증가 표시 |
| 알림 | orange-500 | `#f78a1d` | 주의, 알림 |
| 알림 밝은 | yellow-500 | `#f8c840` | 하이라이트, 별표 |
| 흰색 | white | `#ffffff` | 배경, 다크 배경 위 텍스트 |
| 검정 | black | `#000000` | 강한 강조 (최소 사용) |

### 2-2. 전체 색상 팔레트

**Gray 계열**

| 단계 | HEX | 용도 |
|---|---|---|
| gray-50 | `#f0f2f3` | 밝은 배경 |
| gray-100 | `#d2d5d8` | 비활성 테두리 |
| gray-200 | `#bcc1c6` | 비활성 배경 |
| gray-300 | `#9da5ab` | 비활성 아이콘 |
| gray-400 | `#8a939b` | placeholder |
| gray-500 | `#6d7882` | 보조 텍스트 |
| gray-600 | `#636d76` | 보조 텍스트 |
| gray-700 | `#4d555c` | 본문 텍스트 |
| gray-800 | `#3c4248` | 진한 텍스트 |
| gray-900 | `#2e3237` | 제목 텍스트 |

**Slate 계열 (주요 사용)**

| 단계 | HEX | 용도 |
|---|---|---|
| slate-50 | `#f0f1f3` | 섹션 배경 |
| slate-100 | `#cfd4db` | 밝은 테두리 |
| slate-200 | `#b8bfca` | 구분선 |
| slate-300 | `#97a2b1` | 비활성 요소 |
| slate-400 | `#8390a2` | 약한 텍스트 |
| slate-500 | `#64748b` | 보조 텍스트 |
| slate-600 | `#5b6a7e` | 부제 |
| slate-700 | `#475263` | 본문 텍스트 |
| slate-800 | `#37404c` | 강조 텍스트 |
| slate-900 | `#2a313a` | 제목 텍스트 |

**Blue 계열 (주요 강조)**

| 단계 | HEX | 용도 |
|---|---|---|
| blue-50 | `#e8f1ff` | 강조 배경 |
| blue-100 | `#b8d5ff` | 밝은 강조 |
| blue-200 | `#96c0ff` | 차트 보조색 |
| blue-300 | `#66a3ff` | 차트 보조색 |
| blue-400 | `#4891ff` | 호버 강조 |
| blue-500 | `#1a76ff` | 주요 강조색 |
| blue-600 | `#186be8` | 클릭 강조 |
| blue-700 | `#1254b5` | 진한 강조 |
| blue-800 | `#0e418c` | 다크 강조 |
| blue-900 | `#0b326b` | 최진한 강조 |

**Sky Blue 계열**

| 단계 | HEX |
|---|---|
| sky-blue-50 | `#e8f4fe` |
| sky-blue-100 | `#b8ddfd` |
| sky-blue-200 | `#95ccfc` |
| sky-blue-300 | `#65b5fb` |
| sky-blue-400 | `#47a7fa` |
| sky-blue-500 | `#1991f9` |
| sky-blue-600 | `#1784e3` |
| sky-blue-700 | `#1267b1` |
| sky-blue-800 | `#0e5089` |
| sky-blue-900 | `#0b3d69` |

**Navy 계열**

| 단계 | HEX |
|---|---|
| navy-50 | `#e6edf8` |
| navy-100 | `#b2c7ea` |
| navy-200 | `#8cacdf` |
| navy-300 | `#5886d1` |
| navy-400 | `#376ec8` |
| navy-500 | `#054aba` |
| navy-600 | `#0543a9` |
| navy-700 | `#043584` |
| navy-800 | `#032966` |
| navy-900 | `#021f4e` |

**Red 계열**

| 단계 | HEX |
|---|---|
| red-50 | `#fde6e9` |
| red-100 | `#f7b0bb` |
| red-200 | `#f48a9a` |
| red-300 | `#ee546c` |
| red-400 | `#eb334f` |
| red-500 | `#e60023` |
| red-600 | `#d10020` |
| red-700 | `#a30019` |
| red-800 | `#7f0013` |
| red-900 | `#61000f` |

**Orange 계열**

| 단계 | HEX |
|---|---|
| orange-50 | `#fef3e8` |
| orange-100 | `#fddbb9` |
| orange-200 | `#fbc997` |
| orange-300 | `#fab168` |
| orange-400 | `#f9a14a` |
| orange-500 | `#f78a1d` |
| orange-600 | `#e17e1a` |
| orange-700 | `#af6215` |
| orange-800 | `#884c10` |
| orange-900 | `#683a0c` |

**Yellow 계열**

| 단계 | HEX |
|---|---|
| yellow-50 | `#fefaec` |
| yellow-100 | `#fdeec4` |
| yellow-200 | `#fce6a7` |
| yellow-300 | `#fada7f` |
| yellow-400 | `#f9d366` |
| yellow-500 | `#f8c840` |
| yellow-600 | `#e2b63a` |
| yellow-700 | `#b08e2d` |
| yellow-800 | `#886e23` |
| yellow-900 | `#68541b` |

**Green 계열**

| 단계 | HEX |
|---|---|
| green-50 | `#ebf9f2` |
| green-100 | `#c1ebd5` |
| green-200 | `#a3e1c1` |
| green-300 | `#7ad3a5` |
| green-400 | `#60cb93` |
| green-500 | `#38be78` |
| green-600 | `#33ad6d` |
| green-700 | `#288755` |
| green-800 | `#1f6942` |
| green-900 | `#185032` |

**Blue-Green 계열**

| 단계 | HEX |
|---|---|
| blue-green-50 | `#e6f3ef` |
| blue-green-100 | `#b1dbcd` |
| blue-green-200 | `#8ccab5` |
| blue-green-300 | `#57b193` |
| blue-green-400 | `#36a27e` |
| blue-green-500 | `#048b5e` |
| blue-green-600 | `#047e56` |
| blue-green-700 | `#036343` |
| blue-green-800 | `#024c34` |
| blue-green-900 | `#023a27` |

**Teal 계열**

| 단계 | HEX |
|---|---|
| teal-50 | `#ecf3f2` |
| teal-100 | `#c3dbd8` |
| teal-200 | `#a6cac5` |
| teal-300 | `#7db1ab` |
| teal-400 | `#64a29a` |
| teal-500 | `#3d8b81` |
| teal-600 | `#387e75` |
| teal-700 | `#2b635c` |
| teal-800 | `#224c47` |
| teal-900 | `#1a3a36` |

**Teal-Blue 계열**

| 단계 | HEX |
|---|---|
| teal-blue-50 | `#e6f1f3` |
| teal-blue-100 | `#b1d4db` |
| teal-blue-200 | `#8cbfca` |
| teal-blue-300 | `#57a2b1` |
| teal-blue-400 | `#3690a2` |
| teal-blue-500 | `#04748b` |
| teal-blue-600 | `#046a7e` |
| teal-blue-700 | `#035263` |
| teal-blue-800 | `#02404c` |
| teal-blue-900 | `#02313a` |

**Pink 계열**

| 단계 | HEX |
|---|---|
| pink-50 | `#feecee` |
| pink-100 | `#fac4c9` |
| pink-200 | `#f8a8af` |
| pink-300 | `#f5808a` |
| pink-400 | `#f36874` |
| pink-500 | `#f04251` |
| pink-600 | `#da3c4a` |
| pink-700 | `#aa2f3a` |
| pink-800 | `#84242d` |
| pink-900 | `#651c22` |

**Blue-Purple 계열**

| 단계 | HEX |
|---|---|
| blue-purple-50 | `#efe8f9` |
| blue-purple-100 | `#ccb8ec` |
| blue-purple-200 | `#b496e3` |
| blue-purple-300 | `#9166d6` |
| blue-purple-400 | `#7c49ce` |
| blue-purple-500 | `#5b1bc2` |
| blue-purple-600 | `#5319b1` |
| blue-purple-700 | `#41138a` |
| blue-purple-800 | `#320f6b` |
| blue-purple-900 | `#260b51` |

**Violet 계열**

| 단계 | HEX |
|---|---|
| violet-50 | `#f3e9f8` |
| violet-100 | `#d9bae9` |
| violet-200 | `#c698de` |
| violet-300 | `#ac69cf` |
| violet-400 | `#9c4cc5` |
| violet-500 | `#831fb7` |
| violet-600 | `#771ca7` |
| violet-700 | `#5d1682` |
| violet-800 | `#481165` |
| violet-900 | `#370d4d` |

**Mulberry 계열**

| 단계 | HEX |
|---|---|
| mulberry-50 | `#f6ecf3` |
| mulberry-100 | `#e4c4da` |
| mulberry-200 | `#d7a8c9` |
| mulberry-300 | `#c580b0` |
| mulberry-400 | `#ba68a1` |
| mulberry-500 | `#a94289` |
| mulberry-600 | `#9a3c7d` |
| mulberry-700 | `#782f61` |
| mulberry-800 | `#5d244b` |
| mulberry-900 | `#471c3a` |

---

## 3. 타이포그래피

### 3-1. 폰트

| 우선순위 | 폰트 |
|---|---|
| 1순위 | Pretendard |
| 2순위 | Noto Sans KR |
| 3순위 | 맑은 고딕 |

### 3-2. PPT 텍스트 스타일

| 용도 | 크기 (pt) | 굵기 | 색상 |
|---|---|---|---|
| 슬라이드 대제목 | 36~48pt | Bold | #2a313a |
| 섹션 제목 | 28~32pt | Bold | #2a313a |
| 소제목 | 22~26pt | SemiBold | #2a313a |
| 강조 소제목 | 20~24pt | SemiBold | #1a76ff |
| 본문 | 16~18pt | Regular | #2a313a |
| 보조 텍스트 | 14~16pt | Regular | #64748b |
| 캡션/주석 | 12~13pt | Regular | #8390a2 |
| 데이터 라벨 | 12~14pt | Medium | #475263 |
| 페이지 번호 | 10~12pt | Regular | #8390a2 |

### 3-3. Weight 매핑

| CSS weight | PPT 표기 | 값 |
|---|---|---|
| bold | Bold | 700 |
| semibold | SemiBold | 600 |
| medium | Medium | 500 |
| regular | Regular | 400 |

### 3-4. 행간 (줄 간격)

| 용도 | 배수 |
|---|---|
| 제목 | 1.4배 |
| 본문 | 1.6배 |
| 긴 본문 | 1.7배 |

---

## 4. 간격 및 여백

### 4-1. 슬라이드 여백

| 위치 | 최소 여백 |
|---|---|
| 좌우 | 40pt (약 1.4cm) |
| 상하 | 32pt (약 1.1cm) |
| 제목~본문 사이 | 24pt |
| 섹션 간 | 32~40pt |
| 요소 간 (같은 그룹) | 8~16pt |

### 4-2. 간격 토큰 (px → pt 변환 참고)

| 토큰 | px | pt (≈) | 용도 |
|---|---|---|---|
| spacing-4 | 4px | 3pt | 미세 간격 |
| spacing-8 | 8px | 6pt | 요소 내부 |
| spacing-12 | 12px | 9pt | 아이콘~텍스트 |
| spacing-16 | 16px | 12pt | 요소 간 |
| spacing-20 | 20px | 15pt | 소그룹 간 |
| spacing-24 | 24px | 18pt | 제목~본문 |
| spacing-32 | 32px | 24pt | 섹션 간 |
| spacing-40 | 40px | 30pt | 큰 섹션 간 |
| spacing-48 | 48px | 36pt | 슬라이드 여백 |
| spacing-80 | 80px | 60pt | 대형 여백 |

---

## 5. 라운드 (도형 모서리)

| 토큰 | 값 | PPT 적용 |
|---|---|---|
| radius-xs-2 | 2px | 작은 태그, 뱃지 |
| radius-sm-4 | 4px | 버튼, 입력 필드 |
| radius-md-6 | 6px | 카드 |
| radius-md-8 | 8px | 카드, 모달 |
| radius-lg-16 | 16px | 큰 카드, 배너 |
| radius-full | 원형 | 아바타, 상태 표시 |

---

## 6. 슬라이드 레이아웃 패턴

### 6-1. 슬라이드 유형

| 유형 | 설명 |
|---|---|
| 표지 | 프로젝트명, 날짜, 로고 |
| 목차 | 발표 구성 안내 |
| 섹션 구분 | 챕터 전환 (배경색 또는 큰 텍스트) |
| 본문 — 텍스트 | 제목 + 본문 텍스트 |
| 본문 — 이미지 | 텍스트 + 이미지 좌우 또는 상하 배치 |
| 본문 — 리스트 | 번호/불릿 목록 |
| 본문 — 카드 | 2~4칸 카드 그리드 |
| 본문 — 차트 | 데이터 시각화 |
| 본문 — 비교 | 좌우 비교 레이아웃 |
| 본문 — 타임라인 | 시간순 흐름 |
| 마무리 | 요약, Q&A, 연락처 |

### 6-2. 그리드

웹과 동일하게 12컬럼 기반으로 영역 분배:
- 2등분: 6 + 6
- 3등분: 4 + 4 + 4
- 1:2: 4 + 8
- 2:1: 8 + 4
- 1:1:1:1: 3 + 3 + 3 + 3

### 6-3. 표지 슬라이드

```
배경: #ffffff 또는 #e8f1ff (blue-50)
제목: 36~48pt, Bold, #2a313a
부제: 18~22pt, Regular, #64748b
날짜: 14pt, Regular, #8390a2
로고: 우하단 또는 좌하단
```

### 6-4. 섹션 구분 슬라이드

```
배경: #1a76ff (blue-500) 또는 #054aba (navy-500)
텍스트: 32~40pt, Bold, #ffffff
번호: 48pt, Bold, #ffffff (투명도 50%)
```

### 6-5. 본문 슬라이드

```
제목: 슬라이드 상단, 28~32pt, Bold, #2a313a
구분선: 제목 아래 1px, #b8bfca (slate-200)
본문: 16~18pt, Regular, #2a313a
여백: 좌우 40pt, 상하 32pt
```

---

## 7. 차트/그래프 색상

### 7-1. 기본 차트 색상 순서 (최대 8개)

| 순서 | 이름 | HEX |
|---|---|---|
| 1 | blue-500 | `#1a76ff` |
| 2 | green-500 | `#38be78` |
| 3 | orange-500 | `#f78a1d` |
| 4 | violet-500 | `#831fb7` |
| 5 | teal-500 | `#3d8b81` |
| 6 | pink-500 | `#f04251` |
| 7 | yellow-500 | `#f8c840` |
| 8 | navy-500 | `#054aba` |

### 7-2. 단일 계열 차트 (그라데이션)

blue 계열 예시: `#e8f1ff` → `#96c0ff` → `#4891ff` → `#1a76ff` → `#1254b5` → `#0b326b`

### 7-3. 증감 표시

| 상태 | 색상 | HEX |
|---|---|---|
| 증가/긍정 | green-500 | `#38be78` |
| 감소/부정 | red-500 | `#e60023` |
| 유지/중립 | slate-400 | `#8390a2` |

---

## 8. 컴포넌트 스타일 (PPT 도형 기준)

### 8-1. 버튼 도형

| 종류 | 배경 | 텍스트 | 테두리 | 라운드 |
|---|---|---|---|---|
| 주요 CTA | `#1a76ff` | `#ffffff` | 없음 | 8px |
| 보조 (테두리) | 투명 | `#1a76ff` | `#1a76ff` 1px | 8px |
| 중립 | `#64748b` | `#ffffff` | 없음 | 8px |
| 약한 | `#f0f1f3` | `#2a313a` | 없음 | 8px |

### 8-2. 카드 도형

```
배경: #ffffff
테두리: 1px solid #b8bfca (slate-200)
라운드: 8px
내부 여백: 24pt
그림자: 선택적 (연한 드롭쉐도우)
```

### 8-3. 태그/뱃지

```
배경: #e8f1ff (blue-50) 또는 해당 색상 50단계
텍스트: 12~14pt, Medium, 해당 색상 700단계
라운드: 4px
내부 여백: 좌우 8pt, 상하 4pt
```

### 8-4. 표 (테이블)

```
헤더 배경: #f0f1f3 (slate-50)
헤더 텍스트: 14pt, SemiBold, #2a313a
본문 텍스트: 14pt, Regular, #2a313a
구분선: 1px solid #b8bfca (slate-200)
행 호버: #f0f1f3 (slate-50)
```

### 8-5. 상태 표시

| 상태 | 배경 | 텍스트 |
|---|---|---|
| 성공/완료 | `#ebf9f2` (green-50) | `#288755` (green-700) |
| 진행 중 | `#e8f1ff` (blue-50) | `#1254b5` (blue-700) |
| 대기 | `#fefaec` (yellow-50) | `#b08e2d` (yellow-700) |
| 경고 | `#fef3e8` (orange-50) | `#af6215` (orange-700) |
| 오류/중단 | `#fde6e9` (red-50) | `#a30019` (red-700) |

---

## 9. 아이콘 가이드

- PPT 내장 아이콘 또는 Lucide/Heroicons 스타일 사용
- 아이콘 색상: `#33363D` (icon-gray) 기본, 강조 시 `#1a76ff` (blue-500)
- 아이콘 크기: 본문 옆 20×20pt, 독립 사용 시 24×24pt 이상

---

## 10. 절대 금지 사항

1. **팔레트에 없는 색상 사용 금지** — 반드시 위 HEX 값만 사용
2. **Pretendard 외 장식 폰트 사용 금지** (폴백 허용: Noto Sans KR, 맑은 고딕)
3. **그라데이션 남용 금지** — 차트 단일 계열에서만 허용
4. **텍스트 그림자/외곽선 사용 금지**
5. **슬라이드당 정보 과적 금지** — 하나의 슬라이드에 하나의 메시지
6. **5개 이상 색상 동시 사용 금지** (차트 제외)
7. **12pt 미만 텍스트 금지** (페이지 번호, 출처 표기 제외)
8. **WordArt, 클립아트 사용 금지**