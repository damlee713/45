// Zombie Survival Test Data & Controller (Hardcore Enhanced)
document.addEventListener('DOMContentLoaded', () => {
  // 8가지 극한 딜레마 문제 데이터
  const questions = [
    {
      id: 1,
      badge: 'Q1',
      question: '갑작스러운 사이렌과 함께 복도 끝에서 좀비 3마리가 전력 질주해옵니다!',
      subtext: '주변에는 비상소화기, 닫히지 않은 방 문, 그리고 복도 비상구가 보입니다.',
      icon: '🏃',
      answers: [
        { text: '소화기 핀을 뽑아 시야를 가린 뒤 반대편 비상계단으로 질주한다', score: 3, hpCost: 0, feedback: '탁월한 순발력! 소화 분말로 시야를 막고 탈출했습니다.' },
        { text: '가장 가까운 빈방으로 뛰어 들어가 문을 잠근다', score: 1, hpCost: 1, feedback: '방에 숨었지만 문이 덜컥거리며 부서질 위기! 체력 -1' },
        { text: 'SNS 라이브를 켜며 상황을 알린다', score: 0, hpCost: 2, feedback: '플래시와 소음 때문에 좀비들이 즉각 덮칩니다! 체력 -2' }
      ]
    },
    {
      id: 2,
      badge: 'Q2',
      question: '급박한 탈출 중 배낭에 딱 하나만 챙길 수 있는 제한 상황입니다.',
      subtext: '무게가 늘어나면 도주 속도가 느려지므로 오직 한 가지만 선택해야 합니다.',
      icon: '🎒',
      answers: [
        { text: '다목적 정수 알약과 대용량 물통', score: 3, hpCost: 0, feedback: '식수 확보는 아포칼립스 장기 생존의 제1원칙입니다!' },
        { text: '견고한 쇠지렛대 (크로우바)', score: 2, hpCost: 0, feedback: '문 개폐와 호신용으로 훌륭한 생존 장비입니다.' },
        { text: '인스턴트 통조림 1박스 (10kg)', score: 0, hpCost: 1, feedback: '너무 무거워서 도주 중 발목을 삐끗했습니다! 체력 -1' }
      ]
    },
    {
      id: 3,
      badge: 'Q3',
      question: '야간 대피 중 정체불명의 문 밖에서 긁는 소리와 울음소리가 섞여 들립니다.',
      subtext: '사람 목소리처럼 들리지만 불규칙한 신음 소리가 섞여 있습니다.',
      icon: '🚪',
      answers: [
        { text: '숨죽이고 바리케이드를 점검하며 외시경이나 틈새로 정체를 먼저 살핀다', score: 3, hpCost: 0, feedback: '냉철한 상황 파악! 감염된 변종 좀비였습니다.' },
        { text: '불을 끄고 무기를 쥔 채 문 뒤 사각지대에 매복한다', score: 2, hpCost: 0, feedback: '신중한 대기 태세로 불필요한 충돌을 회피했습니다.' },
        { text: '"누구세요? 도움이 필요하신가요?"라고 문에 다가가 묻는다', score: 0, hpCost: 2, feedback: '말소리를 듣고 좀비가 문을 부수며 들이닥칩니다! 체력 -2' }
      ]
    },
    {
      id: 4,
      badge: 'Q4',
      question: '동행하던 동료의 손목에 긁힌 자국과 보랏빛 핏줄이 번지는 것을 목격했습니다!',
      subtext: '동료는 "넘어져서 긁힌 것뿐이야"라며 필사적으로 숨기려 합니다.',
      icon: '🩹',
      answers: [
        { text: '안전 거리를 벌리고 무기를 겨눈 뒤 잠복기(1시간) 동안 격리를 요구한다', score: 3, hpCost: 0, feedback: '가혹하지만 모두를 살리는 냉혹하고 현실적인 판단입니다.' },
        { text: '일단 구급약으로 소독해주며 좀 더 관찰해본다', score: 1, hpCost: 1, feedback: '치료 도중 갑작스러운 발작으로 손등을 물릴 뻔했습니다! 체력 -1' },
        { text: '믿음을 위해 아무 일 없다는 듯 좁은 차 안에 같이 탄다', score: 0, hpCost: 2, feedback: '이동 중 좀비로 변이하여 밀폐 공간에서 기습당합니다! 체력 -2' }
      ]
    },
    {
      id: 5,
      badge: 'Q5',
      question: '도심 대피로가 막혔습니다. 안전 지대로 가기 위해 건너야 할 경로는?',
      subtext: '전기가 끊긴 지하철 선로 터널 vs 차량들이 엉켜있는 지상 고가도로',
      icon: '🚇',
      answers: [
        { text: '시야가 확보되고 탈출로가 다양한 고가도로 측면 방음벽 통로', score: 3, hpCost: 0, feedback: '시야와 도주로를 확보하며 안전하게 돌파 성공!' },
        { text: '소음이 밖으로 새지 않는 캄캄한 지하철 지하 선로', score: 1, hpCost: 1, feedback: '어둠 속 웅덩이에 숨어있던 러너 좀비와 조우! 체력 -1' },
        { text: '길이 뚫려있을 거라 믿고 대형 버스 사이 좁은 틈으로 질주', score: 0, hpCost: 1, feedback: '차량 사이에 갇혀 오도가도 못하고 좀비에게 포위당할 뻔! 체력 -1' }
      ]
    },
    {
      id: 6,
      badge: 'Q6',
      question: '불 꺼진 대형 마트에 진입했습니다. 약탈 우선순위는?',
      subtext: '마트 내부 저편에서 좀비들의 인기척이 들려오며, 머물 수 있는 시간은 3분입니다.',
      icon: '🏪',
      answers: [
        { text: '1순위 소금·항생제·라이터·건전지 등 핵심 소형 생필품만 챙겨 빠진다', score: 3, hpCost: 0, feedback: '가장 생존율이 높은 경량급 필수품만 신속히 파밍!' },
        { text: '식품 코너에서 통조림과 즉석식품을 카트에 가득 채운다', score: 1, hpCost: 1, feedback: '카트 바퀴 소음에 마트 안 좀비들이 몰려옵니다! 체력 -1' },
        { text: '가전 코너의 대형 발전기와 TV로 정보 파악을 시도한다', score: 0, hpCost: 2, feedback: '시동 거는 엔진 굉음으로 일대 좀비가 총집결! 체력 -2' }
      ]
    },
    {
      id: 7,
      badge: 'Q7',
      question: '정체불명의 생존자 무리가 다가와 무기와 식량을 나누자고 제안합니다.',
      subtext: '그들은 무장 상태이며, 한 명은 뒤편으로 슬그머니 돌아가려 합니다.',
      icon: '👥',
      answers: [
        { text: '매복과 함정을 감지하고, 엄폐물을 등진 채 단호히 거절하고 후퇴한다', score: 3, hpCost: 0, feedback: '인간의 악의를 꿰뚫어본 베테랑의 육감! 기습을 피했습니다.' },
        { text: '무기를 내리지 않고 가진 식량의 일부만 던져주고 즉시 자리를 뜬다', score: 2, hpCost: 0, feedback: '미끼를 던져 추격을 지연시키고 무사 탈출!' },
        { text: '반갑게 인사하며 베이스캠프의 위치를 공유한다', score: 0, hpCost: 2, feedback: '약탈자들에게 뒤통수를 맞고 기지를 털렸습니다! 체력 -2' }
      ]
    },
    {
      id: 8,
      badge: 'Q8',
      question: '라디오에서 15분 후 마지막 군 헬기 철수 지점이 방송됩니다.',
      subtext: '거리 1.5km. 가는 길목 광장에는 50마리 이상의 좀비 무리가 가득합니다.',
      icon: '🚁',
      answers: [
        { text: '광장 반대편 건물에 폭죽/경보기를 작동시켜 좀비를 유인한 뒤 우회 돌파', score: 3, hpCost: 0, feedback: '완벽한 양동작전! 좀비 군단을 따돌리고 헬기 탑승 성공!' },
        { text: '좀비 피와 내장을 온몸에 바르고 냄새를 위장해 천천히 가로지른다', score: 2, hpCost: 1, feedback: '위장엔 성공했으나 독기 감염 위험으로 아슬아슬! 체력 -1' },
        { text: '가진 총기를 난사하며 정면 광장으로 전력 돌격한다', score: 0, hpCost: 3, feedback: '총알이 바닥나고 수십 마리 좀비에게 압도당합니다! 사망' }
      ]
    }
  ];

  // 6단계 세밀한 결과 정의 (다양한 엔딩)
  const results = {
    dead: {
      tag: '즉사 엔딩',
      survivedDays: '0.5 DAYS SURVIVED',
      badgeClass: 'result__badge--dead',
      title: '첫날의 희생양 (사망)',
      description: '아포칼립스 발발 반나절 만에 비명과 함께 쓰러졌습니다.\n위기 상황에서 본능보다 호기심이나 무모함이 앞섰습니다.\n좀비 바이러스 백신 연구진의 해부용 표본이 되었습니다.',
      icon: '💀',
      tip: '생존 팁: 호기심과 영웅 심리를 버리세요. 아포칼립스에선 도망치는 자가 승리자입니다.'
    },
    infected: {
      tag: '감염자 엔딩',
      survivedDays: '3 DAYS SURVIVED',
      badgeClass: 'result__badge--infected',
      title: '변이된 감염체 (감염)',
      description: '살아남으려 필사적으로 버텼지만 작은 상처 하나로 결국 바이러스에 굴복했습니다.\n이제 당신은 어두운 골목을 배회하며 다음 생존자의 냄새를 쫓고 있습니다.',
      icon: '🧟',
      tip: '생존 팁: 사소한 긁힘도 치명적입니다. 동료와 주변을 끝까지 방심하지 마세요!'
    },
    beginner: {
      tag: '초보 피난민',
      survivedDays: '14 DAYS SURVIVED',
      badgeClass: 'result__badge--beginner',
      title: '어설픈 생존자 (2주 생존)',
      description: '운 좋게 2주 동안 살아남았지만 비축 식량이 바닥나며 한계에 직면했습니다.\n결정적인 순간마다 흔들리는 멘탈과 우유부단함이 발목을 잡았습니다.',
      icon: '🏃',
      tip: '생존 팁: 자원 배분과 냉철한 결단력을 연습하면 한 달 이상도 가능합니다.'
    },
    intermediate: {
      tag: '고독한 방랑자',
      survivedDays: '60 DAYS SURVIVED',
      badgeClass: 'result__badge--intermediate',
      title: '황무지의 은둔자 (2개월 생존)',
      description: '도시의 폐허 속에서 살아남는 규칙을 체득한 생존자입니다.\n위험을 피하는 감각은 탁월하나, 타인을 향한 불신으로 고립되어 가고 있습니다.',
      icon: '🎒',
      tip: '생존 팁: 완벽한 개인 생존력! 이제 믿을 수 있는 동료와 쉘터를 찾을 때입니다.'
    },
    veteran: {
      tag: '쉘터 리더',
      survivedDays: '180 DAYS SURVIVED',
      badgeClass: 'result__badge--veteran',
      title: '쉘터의 사령관 (6개월 생존)',
      description: '냉철한 상황 판단력과 자원 관리 능력으로 소규모 생존자 그룹을 이끄는 리더입니다.\n좀비뿐만 아니라 악질 약탈자 무리로부터 요새를 성공적으로 방어해냈습니다.',
      icon: '🛡️',
      tip: '생존 팁: 훌륭한 전략가! 당신 밑에선 수많은 생존자들이 내일을 꿈꿀 수 있습니다.'
    },
    expert: {
      tag: '인간 병기',
      survivedDays: '365+ DAYS SURVIVED',
      badgeClass: 'result__badge--expert',
      title: '전설의 아포칼립스 정복자 (영구 생존)',
      description: '좀비들이 당신의 발소리를 듣고 먼저 숨습니다.\n극한의 침착함, 양동작전 전술, 철저한 위생과 무력까지 모두 갖춘 궁극의 생존자입니다.\n인류 재건의 유일한 희망입니다.',
      icon: '👑',
      tip: '생존 팁: 좀비 세상의 알파 프레데터! 당신에게 가르칠 것은 더 이상 없습니다.'
    }
  };

  // State
  const MAX_HP = 3;
  const QUESTION_TIME_LIMIT = 10; // 문항당 10초
  let currentQuestionIndex = 0;
  let totalScore = 0;
  let currentHP = MAX_HP;
  let timerRemaining = QUESTION_TIME_LIMIT;
  let timerInterval = null;
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
  const quizHearts = document.querySelector('#quizHearts');
  const quizTimer = document.querySelector('#quizTimer');
  const quizFeedback = document.querySelector('#quizFeedback');

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

  // Update Hearts UI
  function updateHeartsUI() {
    if (!quizHearts) return;
    const filledHearts = '❤️'.repeat(Math.max(0, currentHP));
    const brokenHearts = '🖤'.repeat(Math.max(0, MAX_HP - currentHP));
    quizHearts.textContent = filledHearts + brokenHearts;
  }

  // Stop Timer
  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // Start Timer per question
  function startQuestionTimer() {
    stopTimer();
    timerRemaining = QUESTION_TIME_LIMIT;
    if (quizTimer) {
      quizTimer.textContent = `${timerRemaining}s`;
      quizTimer.classList.remove('danger');
    }

    timerInterval = setInterval(() => {
      timerRemaining -= 1;
      if (quizTimer) {
        quizTimer.textContent = `${timerRemaining}s`;
        if (timerRemaining <= 3) {
          quizTimer.classList.add('danger');
        }
      }

      if (timerRemaining <= 0) {
        stopTimer();
        handleTimeOut();
      }
    }, 1000);
  }

  // Time Out Handler
  function handleTimeOut() {
    if (isAnswering) return;
    isAnswering = true;

    // Apply timeout damage
    currentHP -= 1;
    updateHeartsUI();
    if (quizHearts) {
      quizHearts.classList.add('hp-pulse');
      setTimeout(() => quizHearts.classList.remove('hp-pulse'), 500);
    }

    // Disable buttons
    const allButtons = quizAnswersList.querySelectorAll('.quiz__answer-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // Show timeout feedback
    showFeedbackToast(false, '⏰ 타임 오버! 망설이는 동안 좀비에게 기습당했습니다! (체력 -1)');

    setTimeout(() => {
      proceedNextOrEnd();
    }, 1400);
  }

  // Feedback Toast
  function showFeedbackToast(isGood, message) {
    if (!quizFeedback) return;
    quizFeedback.textContent = (isGood ? '✅ ' : '⚠️ ') + message;
    quizFeedback.className = `quiz__feedback-toast ${isGood ? 'quiz__feedback-toast--good' : 'quiz__feedback-toast--bad'}`;
  }

  function hideFeedbackToast() {
    if (!quizFeedback) return;
    quizFeedback.className = 'quiz__feedback-toast';
    quizFeedback.textContent = '';
  }

  // Start Test
  function startTest() {
    currentQuestionIndex = 0;
    totalScore = 0;
    currentHP = MAX_HP;
    isAnswering = false;
    updateHeartsUI();
    showSection(sectionQuiz);
    renderQuestion(currentQuestionIndex);
  }

  // Render Single Question
  function renderQuestion(index) {
    const qData = questions[index];
    if (!qData) return;

    isAnswering = false;
    hideFeedbackToast();

    // Progress
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
      button.setAttribute('id', `answer-btn-${ansIdx + 1}`);

      const numBadge = document.createElement('span');
      numBadge.className = 'quiz__answer-num';
      numBadge.textContent = `0${ansIdx + 1}`;

      const textSpan = document.createElement('span');
      textSpan.className = 'quiz__answer-text';
      textSpan.textContent = ans.text;

      button.appendChild(numBadge);
      button.appendChild(textSpan);

      button.addEventListener('click', () => handleAnswerSelect(button, ans));

      li.appendChild(button);
      quizAnswersList.appendChild(li);
    });

    startQuestionTimer();
  }

  // Handle Answer Click
  function handleAnswerSelect(selectedButton, answerData) {
    if (isAnswering) return;
    isAnswering = true;
    stopTimer();

    // Disable all buttons
    const allButtons = quizAnswersList.querySelectorAll('.quiz__answer-btn');
    allButtons.forEach(btn => btn.disabled = true);

    const isSuccess = answerData.hpCost === 0;
    if (isSuccess) {
      selectedButton.classList.add('quiz__answer-btn--correct');
    } else {
      selectedButton.classList.add('quiz__answer-btn--wrong');
    }

    // Score & HP
    totalScore += answerData.score;
    currentHP -= answerData.hpCost;
    if (currentHP < 0) currentHP = 0;
    updateHeartsUI();

    if (answerData.hpCost > 0 && quizHearts) {
      quizHearts.classList.add('hp-pulse');
      setTimeout(() => quizHearts.classList.remove('hp-pulse'), 500);
    }

    showFeedbackToast(isSuccess, answerData.feedback);

    setTimeout(() => {
      proceedNextOrEnd();
    }, 1200);
  }

  // Determine whether to continue or finish
  function proceedNextOrEnd() {
    // If HP drops to 0, immediate Game Over
    if (currentHP <= 0) {
      renderResult(totalScore, true);
      return;
    }

    currentQuestionIndex += 1;
    if (currentQuestionIndex < questions.length) {
      renderQuestion(currentQuestionIndex);
    } else {
      renderResult(totalScore, false);
    }
  }

  // Render Result (6 Fine-grained endings)
  function renderResult(finalScore, isDeadByHP) {
    stopTimer();
    let resultKey = 'beginner';

    if (isDeadByHP) {
      resultKey = 'dead';
    } else if (finalScore <= 6) {
      resultKey = 'infected';
    } else if (finalScore <= 12) {
      resultKey = 'beginner';
    } else if (finalScore <= 18) {
      resultKey = 'intermediate';
    } else if (finalScore <= 22) {
      resultKey = 'veteran';
    } else {
      resultKey = 'expert';
    }

    const data = results[resultKey];

    resultDays.textContent = data.survivedDays;
    resultTitle.textContent = data.title;
    resultDescription.textContent = data.description;
    resultScoreValue.textContent = `${finalScore} / 24점 (잔여 HP: ${currentHP}/${MAX_HP})`;
    resultIcon.textContent = data.icon;
    resultTip.textContent = data.tip;

    resultBadge.textContent = data.tag;
    resultBadge.className = `result__badge ${data.badgeClass}`;

    showSection(sectionResult);
  }

  // Reset to Intro
  function resetTest() {
    stopTimer();
    currentQuestionIndex = 0;
    totalScore = 0;
    currentHP = MAX_HP;
    isAnswering = false;
    showSection(sectionIntro);
  }

  // Event Listeners
  btnStart.addEventListener('click', startTest);
  btnRetry.addEventListener('click', resetTest);
});
