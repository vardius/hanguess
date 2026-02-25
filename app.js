const i18n = {
  en: {
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
    listeningScore: "Score: ",
    gameOver: "Game Over!",
    finalScore: "Your Final Score: ",
    readingMode: "Reading Mode",
    speakingMode: "Speaking Mode",
    listening: "Listening...",
  },
  pl: {
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
    listeningScore: "Wynik: ",
    gameOver: "Koniec gry!",
    finalScore: "Twój końcowy wynik: ",
    readingMode: "Tryb Czytania",
    speakingMode: "Tryb Mówienia",
    listening: "Słuchanie...",
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
    { kr: "나무", en: "namu", pl: "namu" },
    { kr: "바다", en: "bada", pl: "bada" },
    { kr: "아이", en: "ai", pl: "ai" },
    { kr: "하늘", en: "haneul", pl: "haneul/hanyl" },
    { kr: "물", en: "mul", pl: "mul" },
    { kr: "불", en: "bul", pl: "bul" },
    { kr: "산", en: "san", pl: "san" },
    { kr: "책", en: "chaek", pl: "czak/chaek" },
    { kr: "문", en: "mun", pl: "mun" },
    { kr: "배", en: "bae", pl: "bae" },
    { kr: "새", en: "sae", pl: "sae" },
    { kr: "개", en: "gae", pl: "gae" },
    { kr: "해", en: "hae", pl: "hae" },
    { kr: "코", en: "ko", pl: "ko" },
    { kr: "입", en: "ip", pl: "ip" },
    { kr: "발", en: "bal", pl: "bal" },
    { kr: "몸", en: "mom", pl: "mom" },
    { kr: "방", en: "bang", pl: "bang" },
    { kr: "국", en: "guk/gug", pl: "guk/gug" },
    { kr: "밥", en: "bap", pl: "bap" },
    { kr: "오늘", en: "oneul", pl: "onyl/oneul" },
    { kr: "내일", en: "naeil", pl: "naeil" },
    { kr: "모레", en: "more", pl: "more" },
    { kr: "어제", en: "eoje", pl: "odźe/eoje" },
    { kr: "아침", en: "achim", pl: "aczim/achim" },
    { kr: "가을", en: "gaeul", pl: "gayl/gaeul" },
    { kr: "바지", en: "baji", pl: "badźi/baji" },
    { kr: "치마", en: "chima", pl: "czima/chima" },
    { kr: "모자", en: "moja", pl: "modźa/moja" },
    { kr: "구두", en: "gudu", pl: "gudu" },
    { kr: "포도", en: "podo", pl: "podo" },
    { kr: "피자", en: "pija", pl: "pidźa/pija" },
    { kr: "커피", en: "keopi", pl: "kopi/keopi" },
    { kr: "기차", en: "gicha", pl: "gicza/gicha" },
    { kr: "타조", en: "tajo", pl: "tadźo/tajo" },
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
let isSpeakingMode = false;
let listeningScore = 0;
let listeningQueue = [];

// Speech recognition setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "ko-KR";
  recognition.continuous = false;
  recognition.interimResults = false;
}

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
  if (currentItem && !isSpeakingMode) {
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
  isSpeakingMode = false;
  document.getElementById("startScreen").classList.add("hidden");
  loadState();
  initStage();
}

function startListeningGame() {
  isListeningMode = true;
  isSpeakingMode = false;
  initInfiniteModeQueue();
}

function startSpeakingGame() {
  if (!recognition) {
    alert("Speech recognition isn't supported in your browser.");
    return;
  }
  isSpeakingMode = true;
  isListeningMode = false;
  initInfiniteModeQueue();
}

function initInfiniteModeQueue() {
  listeningScore = 0;
  document.getElementById("startScreen").classList.add("hidden");

  listeningQueue = [];

  if (isSpeakingMode) {
    // For Speaking mode, only use words
    let arr = [...stages["words"]];
    arr.sort(() => Math.random() - 0.5);
    listeningQueue = listeningQueue.concat(arr);
  } else {
    // For Listening mode, use all stages
    for (let key of stageKeys) {
      let arr = [...stages[key]];
      arr.sort(() => Math.random() - 0.5);
      listeningQueue = listeningQueue.concat(arr);
    }
  }

  document.getElementById("game").classList.remove("hidden");

  if (isSpeakingMode) {
    document.getElementById("answer").disabled = true;
    document.getElementById("answer").placeholder = i18n[lang].listening;
  } else {
    document.getElementById("answer").disabled = false;
    document.getElementById("answer").placeholder = i18n[lang].placeholder;
  }

  // enable or disable speaker icon globally visually:
  document.querySelector(".hangul-container").style.cursor = isSpeakingMode
    ? "default"
    : "pointer";
  document.querySelector(".speaker-icon").style.display = isSpeakingMode
    ? "none"
    : "inline-block";

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
  if (isListeningMode || isSpeakingMode) {
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
  if (!isSpeakingMode) {
    answerEl.value = "";
    answerEl.focus();
  } else {
    answerEl.value = i18n[lang].listening;
  }

  startTimer();

  if (isListeningMode) {
    speakCurrent();
  }
  if (isSpeakingMode && recognition) {
    recognition.start();

    recognition.onend = () => {
      // Re-trigger listening as long as they haven't run out of time
      // and haven't navigated away from the active item.
      if (isSpeakingMode && currentItem) {
        try {
          recognition.start();
        } catch (e) {} // ignore if already started
      }
    };

    recognition.onresult = (event) => {
      let transcript = event.results[0][0].transcript.replace(/\s+/g, "");
      if (transcript.includes(currentItem.kr)) {
        recognition.onend = null; // stop infinite restarting loop
        recognition.stop();
        document.getElementById("answer").value = transcript;
        handleCorrect();
      } else {
        playBeep(200); // feedback that what they said was wrong
        document.getElementById("answer").value = `"${transcript}" - Retry...`;
      }
    };
    recognition.onerror = () => {
      /* ignore or handle mic issues */
    };
  }
}

function startTimer() {
  clearInterval(timer);
  if (isListeningMode || isSpeakingMode) {
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
  if (isSpeakingMode && recognition) {
    recognition.stop();
  }

  if (isListeningMode || isSpeakingMode) {
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
  if (isSpeakingMode && recognition) {
    recognition.stop();
  }

  let charEl = document.getElementById("char");
  charEl.className = "hangul error";

  let pronunciation =
    lang === "pl" && currentItem.pl ? currentItem.pl : currentItem.en;

  let correctText =
    isListeningMode || isSpeakingMode
      ? `${msg} ${currentItem.kr} = ${pronunciation}`
      : `${msg} ${i18n[lang].correctWas}${pronunciation}`;

  document.getElementById("feedback").textContent = correctText;

  if (isListeningMode || isSpeakingMode) {
    if (isSpeakingMode) {
      speak(currentItem.kr); // auto-play correct pronounciation if they failed
    }
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

  if (isListeningMode || isSpeakingMode) {
    document.getElementById("stageInfo").textContent =
      (isSpeakingMode ? i18n[lang].speakingMode : i18n[lang].listeningMode) +
      " - " +
      stageDisplay;
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
