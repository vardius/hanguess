const i18n = {
  en: {
    welcome: "Welcome to HANGUESS",
    startGameBtn: "Start Game",
    newChars: "New Characters to Learn",
    clickToHear: "Click on a card to hear its pronunciation",
    startRoundBtn: "Start Round",
    placeholder: "Type romanization here...",
    levelProgress: "Level Progress",
    details: "Details",
    timeUp: "Time's up!",
    incorrect: "Incorrect!",
    correctWas: "Correct: ",
    stage: "Stage: ",
    levelInfo: "Level: ",
    itemsInfo: " | Items: ",
    gameCompleted: "Game Completed! Congratulations!",
    resetProgress: "Reset Progress",
    replayLevel: "Replay Level: ",
    playSelected: "Play Selected Level",
    listeningMode: "Listening Mode",
    listeningScore: "Score: ",
    gameOver: "Game Over!",
    finalScore: "Your Final Score: ",
  },
  pl: {
    welcome: "Witamy w HANGUESS",
    startGameBtn: "Rozpocznij Grę",
    newChars: "Nowe znaki do nauki",
    clickToHear: "Kliknij kartę, aby usłyszeć wymowę",
    startRoundBtn: "Rozpocznij Rundę",
    placeholder: "Wpisz tutaj romanizację...",
    levelProgress: "Postęp Poziomu",
    details: "Szczegóły",
    timeUp: "Koniec czasu!",
    incorrect: "Źle!",
    correctWas: "Poprawnie: ",
    stage: "Etap: ",
    levelInfo: "Poziom: ",
    itemsInfo: " | Elementy: ",
    gameCompleted: "Gra Ukończona! Gratulacje!",
    resetProgress: "Zresetuj Postępy",
    replayLevel: "Zagraj ponownie w poziom: ",
    playSelected: "Graj w wybrany poziom",
    listeningMode: "Tryb Słuchania",
    listeningScore: "Wynik: ",
    gameOver: "Koniec gry!",
    finalScore: "Twój końcowy wynik: ",
  },
};

const stages = {
  letters: [
    { kr: "ㄱ", en: "g/k", pl: "g/k" },
    { kr: "ㄴ", en: "n", pl: "n" },
    { kr: "ㄷ", en: "d/t", pl: "d/t" },
    { kr: "ㄹ", en: "r/l", pl: "r/l" },
    { kr: "ㅁ", en: "m", pl: "m" },
    { kr: "ㅂ", en: "b/p", pl: "b/p" },
    { kr: "ㅅ", en: "s", pl: "s" },
    { kr: "ㅇ", en: "ng", pl: "ng" },
    { kr: "ㅈ", en: "j", pl: "dź/j" },
    { kr: "ㅊ", en: "ch", pl: "ć/cz" },
    { kr: "ㅋ", en: "k", pl: "k" },
    { kr: "ㅌ", en: "t", pl: "t" },
    { kr: "ㅍ", en: "p", pl: "p" },
    { kr: "ㅎ", en: "h", pl: "h" },
    { kr: "ㅏ", en: "a", pl: "a" },
    { kr: "ㅓ", en: "eo", pl: "o/eo" },
    { kr: "ㅗ", en: "o", pl: "o" },
    { kr: "ㅜ", en: "u", pl: "u" },
    { kr: "ㅡ", en: "eu", pl: "y/eu" },
    { kr: "ㅣ", en: "i", pl: "i" },
    { kr: "ㅐ", en: "ae", pl: "ae/e" },
    { kr: "ㅔ", en: "e", pl: "e" },
  ],

  batchim: [
    { kr: "각", en: "gak", pl: "gak" },
    { kr: "간", en: "gan", pl: "gan" },
    { kr: "갈", en: "gal/gar", pl: "gal/gar" },
    { kr: "감", en: "gam", pl: "gam" },
    { kr: "갑", en: "gap", pl: "gap" },
    { kr: "강", en: "gang", pl: "gang" },
    { kr: "값", en: "gap/gaps", pl: "gap/gaps" },
    { kr: "읽", en: "ilg/il/ik", pl: "ilg/il/ik" },
  ],

  syllables: [
    { kr: "가", en: "ga/ka", pl: "ga/ka" },
    { kr: "너", en: "neo", pl: "no/neo" },
    { kr: "도", en: "do/to", pl: "do/to" },
    { kr: "고", en: "go/ko", pl: "go/ko" },
    { kr: "구", en: "gu/ku", pl: "gu/ku" },
    { kr: "귀", en: "gwi/kwi", pl: "gwi/kwi" },
    { kr: "한", en: "han", pl: "han" },
    { kr: "달", en: "dal/tar", pl: "dal/tal" },
  ],

  words: [
    { kr: "집", en: "jip", pl: "dźip" },
    { kr: "사람", en: "saram/salam", pl: "saram/salam" },
    { kr: "학교", en: "hakgyo", pl: "hakgio" },
    { kr: "사랑", en: "sarang/salang", pl: "sarang/salang" },
    { kr: "한국", en: "hanguk/hangug", pl: "hanguk/hangug" },
  ],
};

let lang = localStorage.getItem("hanguess_lang") || "en";
let maxLevelReached = parseInt(localStorage.getItem("hanguess_max_level")) || 1;
let stageKeys = ["letters", "batchim", "syllables", "words"];
let currentStageIndex = parseInt(localStorage.getItem("hanguess_stage")) || 0;
let level = parseInt(localStorage.getItem("hanguess_level")) || 1;
let pool = [];
let progress = {};
let targets = {};
let currentItem;
let lastChar = "";
let timer;
let timeLimit = 5000;
let startTime;
let isListeningMode = false;
let listeningScore = 0;
let listeningQueue = [];

function updateI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    let key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) {
      if (
        (el.tagName === "INPUT" && el.type === "text") ||
        el.hasAttribute("placeholder")
      ) {
        el.placeholder = i18n[lang][key];
      } else {
        el.textContent = i18n[lang][key];
      }
    }
  });
}

function setLang(selectedLang) {
  lang = selectedLang;
  localStorage.setItem("hanguess_lang", lang);
  document.getElementById("btn-lang-en").className =
    lang === "en" ? "" : "secondary";
  document.getElementById("btn-lang-pl").className =
    lang === "pl" ? "" : "secondary";
  updateI18n();
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}

function speakCurrent() {
  if (currentItem) {
    speak(currentItem.kr);
  }
}

function renderLevelSelector() {
  let selectorHtml = "";
  if (maxLevelReached > 1 || currentStageIndex > 0) {
    selectorHtml += `<div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border-color);">`;
    selectorHtml += `<select id="levelSelect" style="padding: 10px; border-radius: 8px; background: rgba(0,0,0,0.3); color: white; border: 1px solid var(--border-color); margin-right: 10px;">`;

    let stageCount = 0;
    let levelCount = 1;

    while (stageCount <= currentStageIndex) {
      let sKey = stageKeys[stageCount];
      let maxLForStage =
        stageCount === currentStageIndex
          ? level
          : Math.ceil(stages[sKey].length / 4);
      for (let l = 1; l <= maxLForStage; l++) {
        selectorHtml += `<option value="${stageCount}-${l}">Stage: ${sKey}, Level: ${l}</option>`;
      }
      stageCount++;
    }

    selectorHtml += `</select>`;
    selectorHtml += `<button class="secondary" onclick="playSelectedLevel()" data-i18n="playSelected" style="font-size: 0.9rem; padding: 10px;">${i18n[lang].playSelected}</button>`;
    selectorHtml += `</div>`;
  }

  let resetBtn = `<button class="secondary" onclick="resetProgress()" data-i18n="resetProgress" style="margin-top: 20px; width: 100%; color: var(--error-color); border-color: rgba(239, 68, 68, 0.3);">${i18n[lang].resetProgress}</button>`;

  let div = document.getElementById("extraControls");
  if (!div) {
    div = document.createElement("div");
    div.id = "extraControls";
    document.getElementById("startScreen").appendChild(div);
  }
  div.innerHTML = selectorHtml + resetBtn;
}

function startGame() {
  isListeningMode = false;
  document.getElementById("startScreen").classList.add("hidden");
  loadState();
  initStage();
}

function startListeningGame() {
  isListeningMode = true;
  listeningScore = 0;
  document.getElementById("startScreen").classList.add("hidden");

  listeningQueue = [];
  for (let key of stageKeys) {
    let arr = [...stages[key]];
    arr.sort(() => Math.random() - 0.5);
    listeningQueue = listeningQueue.concat(arr);
  }

  document.getElementById("game").classList.remove("hidden");
  nextQuestion();
}

function playSelectedLevel() {
  let select = document.getElementById("levelSelect");
  if (select) {
    let parts = select.value.split("-");
    currentStageIndex = parseInt(parts[0]);
    level = parseInt(parts[1]);
    saveState();
    startGame();
  }
}

function resetProgress() {
  if (confirm("Are you sure you want to reset all game progress?")) {
    localStorage.removeItem("hanguess");
    localStorage.removeItem("hanguess_stage");
    localStorage.removeItem("hanguess_level");
    localStorage.removeItem("hanguess_max_level");
    location.reload();
  }
}

function showLearningScreen(items) {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("learningScreen").classList.remove("hidden");

  let grid = document.getElementById("learningGrid");
  grid.innerHTML = "";

  items.forEach((item) => {
    let card = document.createElement("div");
    card.className = "flashcard";
    card.onclick = () => speak(item.kr);
    let pronunciation = lang === "pl" && item.pl ? item.pl : item.en;
    card.innerHTML = `
        <div class="kr">${item.kr}</div>
        <div class="romaja">${pronunciation}</div>
        <div class="speaker">🔊 <span data-i18n="details">${i18n[lang].details}</span></div>
      `;
    grid.appendChild(card);
  });
}

function startRoundFromLearning() {
  document.getElementById("learningScreen").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  nextQuestion();
}

function initStage() {
  let stageName = stageKeys[currentStageIndex];
  let data = stages[stageName];

  // limit items for this level
  let endIndex = Math.min(level * 4, data.length);
  pool = data.slice(0, endIndex);

  // determine new items for learning phase
  let startIndex = (level - 1) * 4;
  let newItems = [];
  if (startIndex < data.length) {
    newItems = data.slice(startIndex, startIndex + 4);
  }

  progress = {};

  // Set explicit targets: "new" items need 2, "known" items need 1
  pool.forEach((x) => {
    progress[x.kr] = 0;
    targets[x.kr] = newItems.includes(x) ? 2 : 1;
  });

  updateUI();

  if (newItems.length > 0) {
    showLearningScreen(newItems);
  } else {
    document.getElementById("game").classList.remove("hidden");
    nextQuestion();
  }
}

function nextQuestion() {
  if (isListeningMode) {
    if (listeningScore < listeningQueue.length) {
      currentItem = listeningQueue[listeningScore];
    } else {
      currentItem =
        listeningQueue[Math.floor(Math.random() * listeningQueue.length)];
    }
    currentStageIndex = stageKeys.findIndex((k) =>
      stages[k].some((x) => x.kr === currentItem.kr),
    );
    if (currentStageIndex === -1) currentStageIndex = 0;
  } else {
    let incompletePool = pool.filter(
      (x) => (progress[x.kr] || 0) < targets[x.kr],
    );
    let choices = incompletePool.filter((x) => x.kr !== lastChar);
    if (choices.length === 0) {
      choices = incompletePool.length > 0 ? incompletePool : pool;
    }
    currentItem = choices[Math.floor(Math.random() * choices.length)];
  }

  lastChar = currentItem.kr;

  let charEl = document.getElementById("char");
  charEl.className = "hangul";
  charEl.textContent = isListeningMode ? "?" : currentItem.kr;

  document.getElementById("feedback").textContent = "";

  let answerEl = document.getElementById("answer");
  answerEl.value = "";
  answerEl.focus();

  startTimer();

  if (isListeningMode) {
    speakCurrent();
  }
}

function startTimer() {
  clearInterval(timer);
  if (isListeningMode) {
    timeLimit = 5000 - currentStageIndex * 500;
  } else {
    timeLimit = 5000 - level * 200;
  }
  if (timeLimit < 2000) timeLimit = 2000;
  startTime = Date.now();

  timer = setInterval(() => {
    let elapsed = Date.now() - startTime;
    let percent = 100 - (elapsed / timeLimit) * 100;
    if (percent < 0) percent = 0;

    let bar = document.getElementById("timerBar");
    bar.style.width = percent + "%";

    if (percent < 25) {
      bar.className = "progressInner danger";
    } else if (percent < 50) {
      bar.className = "progressInner warning";
    } else {
      bar.className = "progressInner";
    }

    if (elapsed > timeLimit) {
      clearInterval(timer);
      handleWrong(i18n[lang].timeUp);
    }
  }, 50);
}

function handleCorrect() {
  clearInterval(timer);
  playBeep(800);

  if (isListeningMode) {
    listeningScore++;
    updateUI();
    setTimeout(nextQuestion, 400);
    return;
  }

  progress[currentItem.kr]++;
  updateUI();
  if (progress[currentItem.kr] >= targets[currentItem.kr]) {
    checkAdvance();
  } else {
    saveState();
    nextQuestion();
  }
}

function handleWrong(msg) {
  clearInterval(timer);
  playBeep(200);

  let charEl = document.getElementById("char");
  charEl.className = "hangul error";

  let pronunciation =
    lang === "pl" && currentItem.pl ? currentItem.pl : currentItem.en;

  let correctText = isListeningMode
    ? `${msg} ${currentItem.kr} = ${pronunciation}`
    : `${msg} ${i18n[lang].correctWas}${pronunciation}`;

  document.getElementById("feedback").textContent = correctText;

  if (isListeningMode) {
    charEl.textContent = currentItem.kr; // reveal what it was
    updateUI();
    setTimeout(() => {
      alert(
        i18n[lang].gameOver + "\n" + i18n[lang].finalScore + listeningScore,
      );
      quit();
    }, 2000);
    return;
  }

  progress[currentItem.kr]--;
  targets[currentItem.kr]++; // Only increase target for this specific character
  updateUI();

  if (progress[currentItem.kr] < 0) {
    let allZero = Object.values(progress).every((v) => v <= 0);
    if (allZero && level > 1) {
      level--;
    }
  }

  saveState();
  setTimeout(nextQuestion, 1500);
}

function checkAdvance() {
  let allDone = pool.every((x) => progress[x.kr] >= targets[x.kr]);
  if (allDone) {
    level++;
    if (level > maxLevelReached) maxLevelReached = level;
    let stageName = stageKeys[currentStageIndex];

    // if we exceeded all items in this stage:
    if ((level - 1) * 4 >= stages[stageName].length) {
      currentStageIndex++;
      level = 1;
    }

    // and if all stages are done:
    if (currentStageIndex >= stageKeys.length) {
      alert(i18n[lang].gameCompleted);
      quit();
      return;
    }
    saveState();
    initStage();
  } else {
    saveState();
    nextQuestion();
  }
}

function checkAnswer(input, validSpellings) {
  if (!input) return false;
  let pOptions = validSpellings.split("/").map((s) => s.trim().toLowerCase());
  return pOptions.includes(input);
}

document.getElementById("answer").addEventListener("input", (e) => {
  let pronunciation =
    lang === "pl" && currentItem.pl ? currentItem.pl : currentItem.en;
  let inputVal = e.target.value.trim().toLowerCase();
  if (checkAnswer(inputVal, pronunciation)) {
    setTimeout(() => {
      document.getElementById("answer").value = "";
    }, 0);
    handleCorrect();
  }
});
document.getElementById("answer").addEventListener("keydown", (e) => {
  let pronunciation =
    lang === "pl" && currentItem.pl ? currentItem.pl : currentItem.en;
  let inputVal = e.target.value.trim().toLowerCase();
  if (e.key === "Enter") {
    if (!checkAnswer(inputVal, pronunciation)) {
      handleWrong(i18n[lang].incorrect);
    }
  }
});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

function updateUI() {
  let stageName = stageKeys[currentStageIndex] || stageKeys[0];
  let stageDisplay = stageName.charAt(0).toUpperCase() + stageName.slice(1);

  if (isListeningMode) {
    document.getElementById("stageInfo").textContent =
      i18n[lang].listeningMode + " - " + stageDisplay;
    document.getElementById("levelInfo").textContent =
      i18n[lang].listeningScore + listeningScore;

    document.getElementById("stats").classList.add("hidden");
    document.querySelector(".level-progress-container").classList.add("hidden");
    return;
  }

  document.getElementById("stageInfo").textContent =
    i18n[lang].stage + stageDisplay;
  document.getElementById("levelInfo").textContent =
    i18n[lang].levelInfo + level + i18n[lang].itemsInfo + pool.length;

  document.getElementById("stats").classList.remove("hidden");
  document
    .querySelector(".level-progress-container")
    .classList.remove("hidden");

  let totalTarget = pool.reduce((sum, item) => sum + targets[item.kr], 0);
  let currentTotal = 0;

  let statsHtml = `<div class="progress-badges" style="max-height: none; overflow: visible;">`;
  for (let i = 0; i < pool.length; i++) {
    let char = pool[i].kr;
    let charTarget = targets[char];
    let score = Math.max(0, Math.min(progress[char] || 0, charTarget));
    currentTotal += score;
    let statusClass = score >= charTarget ? "done" : "";
    let dots = "";
    for (let j = 0; j < charTarget; j++) {
      dots += `<span class="dot ${j < score ? "filled" : ""}"></span>`;
    }
    statsHtml += `
              <div class="badge ${statusClass}">
                  <span class="badge-char">${char}</span>
                  <div class="badge-dots">${dots}</div>
              </div>
          `;
  }
  statsHtml += `</div>`;
  document.getElementById("stats").innerHTML = statsHtml;

  let progressPercent =
    totalTarget > 0 ? (currentTotal / totalTarget) * 100 : 0;
  document.getElementById("levelProgressInner").style.width =
    progressPercent + "%";
  document.getElementById("levelProgressText").textContent =
    Math.floor(progressPercent) + "%";
}

function playBeep(freq) {
  if (!window.AudioContext && !window.webkitAudioContext) return;
  try {
    let ctx = new (window.AudioContext || window.webkitAudioContext)();
    let osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

function quit() {
  location.reload();
}

function saveState() {
  localStorage.setItem(
    "hanguess",
    JSON.stringify({
      currentStageIndex,
      level,
      targets,
    }),
  );
}

function loadState() {
  let s = localStorage.getItem("hanguess");
  if (s) {
    let data = JSON.parse(s);
    mode = data.mode;
    currentStageIndex = data.currentStageIndex;
    level = data.level;
    targets = data.targets || {};
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
