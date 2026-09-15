// Zombie Survival Test Data & Controller
document.addEventListener('DOMContentLoaded', () => {
  // Questions Data
  const questions = [
    {
      id: 1,
      badge: 'Q1',
      question: '좀비가 나타났다. 가장 먼저 할 행동은?',
      subtext: '갑작스러운 비명과 함께 복도 끝에서 좀비가 달려옵니다!',
      icon: '🧟',
      answers: [
        { text: '주변에서 사용할 수 있는 무기를 찾는다', score: 2 },
        { text: '바로 도망간다', score: 1 },
        { text: '친구에게 전화한다', score: 0 }
      ]
    },
    {
      id: 2,
      badge: 'Q2',
      question: '하나의 물건만 챙길 수 있다면?',
      subtext: '급히 대피해야 하는 순간, 가방에 딱 하나만 넣을 수 있습니다.',
      icon: '🎒',
      answers: [
        { text: '생수', score: 2 },
        { text: '라면', score: 1 },
        { text: '스마트폰', score: 0 }
      ]
    },
    {
      id: 3,
      badge: 'Q3',
      question: '문 밖에서 이상한 소리가 들린다.',
      subtext: '스산한 긁는 소리와 불규칙한 발소리가 멈추지 않습니다.',
      icon: '🚪',
      answers: [
        { text: '창문이나 CCTV를 통해 확인한다', score: 2 },
        { text: '조용히 숨어 있는다', score: 1 },
        { text: '바로 문을 연다', score: 0 }
      ]
    },
    {
      id: 4,
      badge: 'Q4',
      question: '친구가 좀비에게 물린 것 같다.',
      subtext: '창백해진 얼굴과 목덜미에 선명한 이빨 자국이 보입니다.',
      icon: '🩹',
      answers: [
        { text: '바로 거리를 둔다', score: 2 },
        { text: '상태를 확인한다', score: 1 },
        { text: '괜찮다며 같이 이동한다', score: 0 }
      ]
    },
    {
      id: 5,
      badge: 'Q5',
      question: '안전한 장소를 발견했다.',
      subtext: '불이 켜진 쉘터 발견! 문은 닫혀있고 인기척은 없습니다.',
      icon: '🏚️',
      answers: [
        { text: '주변을 먼저 확인한다', score: 2 },
        { text: '바로 들어간다', score: 1 },
        { text: '다른 생존자를 기다린다', score: 0 }
      ]
    }
  ];

  // Result Definitions
  const results = {
    beginner: {
      min: 0,
      max: 3,
      tag: '초보 생존자',
      survivedDays: '3 DAYS SURVIVED',
      badgeClass: 'result__badge--beginner',
      title: '초보 생존자',
      description: '당신의 좀비 아포칼립스는 생각보다 빠르게 끝났습니다.\n호기심은 많지만 위험 판단 능력을 조금 더 키워야 합니다.',
      icon: '👻',
      tip: '생존 팁: 호기심을 버리고 일단 안전거리부터 확보하세요!'
    },
    intermediate: {
      min: 4,
      max: 7,
      tag: '도시 생존자',
      survivedDays: '17 DAYS SURVIVED',
      badgeClass: 'result__badge--intermediate',
      title: '도시 생존자',
      description: '위험한 상황에서도 제법 침착하게 판단할 수 있습니다.\n하지만 한 번의 잘못된 선택이 당신의 운명을 바꿀 수도 있습니다.',
      icon: '🏃',
      tip: '생존 팁: 냉정한 판단력을 1초만 더 유지하면 1년도 생존 가능!'
    },
    expert: {
      min: 8,
      max: 10,
      tag: 'ULTIMATE SURVIVOR',
      survivedDays: '365+ DAYS SURVIVED',
      badgeClass: 'result__badge--expert',
      title: 'ULTIMATE SURVIVOR',
      description: '좀비보다 당신이 더 무섭습니다.\n상황 판단, 생존 본능, 위기 대처 능력을 모두 갖춘 완벽한 생존자입니다.',
      icon: '👑',
      tip: '생존 팁: 이 구역의 지배자! 다른 생존자들을 이끌어주세요.'
    }
  };

  // State
  let currentQuestionIndex = 0;
  let totalScore = 0;
  let isAnswering = false;

  // DOM Elements
  const sectionIntro = document.querySelector('#introSection');
  const sectionQuiz = document.querySelector('#quizSection');
  const sectionResult = document.querySelector('#resultSection');

  const btnStart = document.querySelector('#btnStart');
  const btnRetry = document.querySelector('#btnRetry');

  // Quiz DOM
  const quizCounter = document.querySelector('#quizCounter');
  const quizProgressBar = document.querySelector('#quizProgressBar');
  const quizBadge = document.querySelector('#quizBadge');
  const quizIcon = document.querySelector('#quizIcon');
  const quizTitle = document.querySelector('#quizTitle');
  const quizSubtext = document.querySelector('#quizSubtext');
  const quizAnswersList = document.querySelector('#quizAnswersList');

  // Result DOM
  const resultDays = document.querySelector('#resultDays');
  const resultTitle = document.querySelector('#resultTitle');
  const resultDescription = document.querySelector('#resultDescription');
  const resultScoreValue = document.querySelector('#resultScoreValue');
  const resultIcon = document.querySelector('#resultIcon');
  const resultTip = document.querySelector('#resultTip');
  const resultBadge = document.querySelector('#resultBadge');

  // View Switcher Helper
  function showSection(target) {
    [sectionIntro, sectionQuiz, sectionResult].forEach((section) => {
      if (section) {
        section.classList.remove('app-card--active');
        section.setAttribute('aria-hidden', 'true');
      }
    });

    if (target) {
      target.classList.add('app-card--active');
      target.removeAttribute('aria-hidden');
    }
  }

  // Start Test
  function startTest() {
    currentQuestionIndex = 0;
    totalScore = 0;
    isAnswering = false;
    showSection(sectionQuiz);
    renderQuestion(currentQuestionIndex);
  }

  // Render Single Question
  function renderQuestion(index) {
    const qData = questions[index];
    if (!qData) return;

    // Reset answering lock
    isAnswering = false;

    // Progress updates
    const currentNum = index + 1;
    const totalCount = questions.length;
    const progressPercent = Math.round((currentNum / totalCount) * 100);

    quizCounter.textContent = `${String(currentNum).padStart(2, '0')} / ${String(totalCount).padStart(2, '0')}`;
    quizProgressBar.style.width = `${progressPercent}%`;
    quizProgressBar.setAttribute('aria-valuenow', progressPercent);

    // Text & Badges
    quizBadge.textContent = qData.badge;
    quizIcon.textContent = qData.icon;
    quizTitle.textContent = qData.question;
    quizSubtext.textContent = qData.subtext;

    // Render answer options
    quizAnswersList.innerHTML = '';
    qData.answers.forEach((ans, ansIdx) => {
      const li = document.createElement('li');
      li.className = 'quiz__answer-item';

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quiz__answer-btn';
      button.setAttribute('data-score', ans.score);
      button.setAttribute('id', `answer-btn-${ansIdx + 1}`);

      const numBadge = document.createElement('span');
      numBadge.className = 'quiz__answer-num';
      numBadge.textContent = `0${ansIdx + 1}`;

      const textSpan = document.createElement('span');
      textSpan.className = 'quiz__answer-text';
      textSpan.textContent = ans.text;

      button.appendChild(numBadge);
      button.appendChild(textSpan);

      button.addEventListener('click', () => handleAnswerSelect(button, ans.score));

      li.appendChild(button);
      quizAnswersList.appendChild(li);
    });
  }

  // Handle Answer Click
  function handleAnswerSelect(selectedButton, score) {
    if (isAnswering) return; // Prevent double click
    isAnswering = true;

    // Mark selected state
    selectedButton.classList.add('quiz__answer-btn--selected');

    // Disable other buttons
    const allButtons = quizAnswersList.querySelectorAll('.quiz__answer-btn');
    allButtons.forEach((btn) => {
      btn.disabled = true;
    });

    // Accumulate score
    totalScore += score;

    // Short transition before moving to next question or result
    setTimeout(() => {
      currentQuestionIndex += 1;
      if (currentQuestionIndex < questions.length) {
        renderQuestion(currentQuestionIndex);
      } else {
        renderResult(totalScore);
      }
    }, 400);
  }

  // Render Result
  function renderResult(finalScore) {
    let resultKey = 'beginner';
    if (finalScore >= 8) {
      resultKey = 'expert';
    } else if (finalScore >= 4) {
      resultKey = 'intermediate';
    }

    const data = results[resultKey];

    resultDays.textContent = data.survivedDays;
    resultTitle.textContent = data.title;
    resultDescription.textContent = data.description;
    resultScoreValue.textContent = `${finalScore} / 10`;
    resultIcon.textContent = data.icon;
    resultTip.textContent = data.tip;

    resultBadge.textContent = data.tag;
    resultBadge.className = `result__badge ${data.badgeClass}`;

    showSection(sectionResult);
  }

  // Reset to Intro
  function resetTest() {
    currentQuestionIndex = 0;
    totalScore = 0;
    isAnswering = false;
    showSection(sectionIntro);
  }

  // Event Listeners
  btnStart.addEventListener('click', startTest);
  btnRetry.addEventListener('click', resetTest);
});
