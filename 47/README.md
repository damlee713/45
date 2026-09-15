# ZOMBIE SURVIVAL TEST (좀비 아포칼립스 생존 테스트)

HTML5와 Vanilla JavaScript로 구현된 **귀엽고 위트 있는 B급 좀비 서바이벌 테스트** 웹 애플리케이션입니다.

---

## 🎮 서비스 소개

- 좀비 아포칼립스 상황에서 5가지 돌발 상황형 질문에 답하고, 자신의 생존 기간과 능력 등급을 확인합니다.
- 복잡한 라이브러리나 프레임워크 없이 순수 **HTML5 Semantic Tag**, **Embedded CSS (BEM 방식)**, **Vanilla JavaScript**로 제작되었습니다.
- GitHub Pages를 통해 별도의 빌드 과정 없이 즉시 배포 가능합니다.

---

## 🕹️ 서비스 Flow

```text
START (인트로)
   ↓
테스트 시작
   ↓
Q1 ~ Q5 (상황형 질문 진행 & 프로그레스 바 갱신)
   ↓
점수 집계 (0 ~ 10점)
   ↓
생존 결과 출력 (초보 생존자 / 도시 생존자 / ULTIMATE SURVIVOR)
   ↓
RETRY (초기화 및 다시 도전)
```

---

## 🏆 점수 및 결과 체계

- **질문당 배점**: 0점 ~ 2점 (총 5문항, 0 ~ 10점)
- **0 ~ 3점**: `3 DAYS SURVIVED` - 초보 생존자
- **4 ~ 7점**: `17 DAYS SURVIVED` - 도시 생존자
- **8 ~ 10점**: `365+ DAYS SURVIVED` - ULTIMATE SURVIVOR

---

## 📁 프로젝트 폴더 구조

```text
zombie-survival-test/
│
├── index.html          # HTML5 시맨틱 마크업 및 내부 <style> (BEM)
│
├── js/
│   └── script.js       # 순수 바닐라 자바스크립트 로직 (데이터, 상태, 렌더링)
│
├── images/             # 이미지 에셋 저장용 디렉토리
│   ├── logo/
│   ├── character/
│   ├── background/
│   └── result/
│
├── README.md           # 프로젝트 안내 문서
└── .gitignore          # Git 설정
```

---

## 🚀 로컬 실행 방법

1. 저장소를 클론하거나 다운로드합니다.
2. `index.html` 파일을 최신 웹 브라우저(Chrome, Edge, Safari 등)에서 더블 클릭하여 엽니다.
3. 또는 로컬 웹 서버(예: `npx serve .` 또는 VS Code Live Server)를 통해 실행할 수 있습니다.
