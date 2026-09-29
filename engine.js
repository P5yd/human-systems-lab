// LIFE//SHIFT — engine.js
// Generic state machine: session setup, the seven-beat scenario flow with
// simultaneous team answering, automatic DCERA scoring, a live scoreboard,
// and an end-of-session winner reveal. Never references module content by
// name — modules are pure data (see content/*.js).

const AVAILABLE_MODULES = [
  MODULE_DECISION_MAKING,
  MODULE_MONEY_BUDGETING,
  MODULE_COMMUNICATION_CONFLICT,
  MODULE_DIGITAL_CITIZENSHIP,
  MODULE_CAREER_GOALS,
  MODULE_SWOT_ANALYSIS,
  MODULE_VALUES_EMOTIONS,
  MODULE_SELF_ESTEEM_ACCOUNTABILITY,
  MODULE_RELATIONSHIPS_RESPONSIBILITY,
  MODULE_GUIDE_FOR_BOYS,
  MODULE_DIGITAL_SAFETY_GIRLS
];

const DCERA_DIMS = [
  { letter: "D", name: "Decision quality" },
  { letter: "C", name: "Consequence awareness" },
  { letter: "E", name: "Empathy" },
  { letter: "R", name: "Risk assessment" },
  { letter: "A", name: "Adaptability" }
];

const BEAT_LABELS = ["Hook", "Think", "Discuss", "Answer", "Results", "Reflect", "Takeaway"];
// "Full lesson" mode swaps the takeaway beat for the Phase 1 lesson layer.
const LESSON_BEATS = ["Hook", "Think", "Discuss", "Answer", "Results", "Reflect", "Examples", "Practice", "Exit check", "Mission"];
const MISSIONS_KEY = "hsl_last_missions"; // className -> last Life Mission, for next lesson's warm-up
const SHEET_URL_KEY = "hsl_sheet_url"; // legacy single-URL key, migrated on load
const SHEET_URLS_KEY = "hsl_sheet_urls";
const SHEET_SELECTED_KEY = "hsl_sheet_selected_id";
const TEAM_COLORS = ["#FF2F7E", "#45E8FF", "#9B5CFF", "#FFB92E", "#7DFFB0", "#FF5C8A", "#4C9BFF", "#FF8A3D", "#C86BFF", "#2DE8C0"];
const REDUCE_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Baked-in default so the app needs zero setup on any classroom computer.
// This URL only accepts writes (appends a row) — it can't read or expose
// existing sheet data back to the caller.
const DEFAULT_SHEETS = [
  { id: "default", label: "Human Systems Lab — Sessions", url: "https://script.google.com/macros/s/AKfycbzsNFMnE1HcL0uSS1RJxSeXN6UCAjZSpX_YKzlxQLVJYM6vV0sJv4aufHnchvFrsV8xKQ/exec" }
];

let state = null;
let timerInterval = null;

function loadSheetUrls() {
  try {
    const raw = localStorage.getItem(SHEET_URLS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fall through to migration */ }
  const legacy = localStorage.getItem(SHEET_URL_KEY);
  if (legacy) {
    const migrated = [{ id: "legacy", label: "Sessions Sheet", url: legacy }];
    localStorage.setItem(SHEET_URLS_KEY, JSON.stringify(migrated));
    return migrated;
  }
  if (DEFAULT_SHEETS.length) {
    localStorage.setItem(SHEET_URLS_KEY, JSON.stringify(DEFAULT_SHEETS));
    return DEFAULT_SHEETS.slice();
  }
  return [];
}
function saveSheetUrls(list) { localStorage.setItem(SHEET_URLS_KEY, JSON.stringify(list)); }
function resolveSheetUrl(sheetUrls, selectedId) {
  const found = sheetUrls.find(s => s.id === selectedId);
  return found ? found.url : "";
}

function freshState() {
  const sheetUrls = loadSheetUrls();
  const selectedSheetId = localStorage.getItem(SHEET_SELECTED_KEY) || (sheetUrls[0] && sheetUrls[0].id) || "";
  return {
    screen: "home",
    className: "",
    level: "L1",
    moduleId: AVAILABLE_MODULES[0].id,
    sheetUrls,
    selectedSheetId,
    sheetUrl: resolveSheetUrl(sheetUrls, selectedSheetId),
    syncStatus: "idle",
    teams: [],
    nextTeamNum: 1,
    mode: "lesson",       // "lesson" = one scenario with the full lesson layer, "quick" = whole module, game only
    lessonScenarioIndex: 0,
    lastMission: null,    // { mission, scenarioTitle, date } from this class's previous lesson, if any
    rewinding: false,     // true while teams re-answer a scenario with hindsight
    rewindAnswers: {},    // teamId -> choiceId, for the rewind in progress
    rewound: {},          // rewound[scenarioId][teamId] = choiceId (never changes scores)
    exitChecks: {},       // exitChecks[scenarioId] = 0-5, the class's fist-to-five average
    practiceRound: 0,
    scenarioIndex: 0,
    activeTeamIndex: 0,
    pendingAnswers: {}, // teamId -> choiceId, for the scenario currently being answered
    scores: {},          // scores[teamId][scenarioId] = { D, C, E, R, A }
    flags: {},            // flags[teamId][flagName] = scenarioId that set it (session-only memory)
    log: []               // [{ scenarioId, teamId, choiceId, dcera }]
  };
}

function showBootSequence() {
  if (sessionStorage.getItem("hsl_booted")) return; // once per browser tab session
  sessionStorage.setItem("hsl_booted", "1");
  if (REDUCE_MOTION) return;
  const lines = [
    "> STARTING LIFE//SHIFT...",
    "> GETTING THE SIMULATOR READY...",
    "> LOADING YOUR SCORES... OK",
    "> LET'S GO."
  ];
  const boot = el(`<div id="boot"><div class="scan"></div><div class="line" id="bootText"></div><div class="skip-hint no-print">tap anywhere to skip</div></div>`);
  document.body.appendChild(boot);
  const textEl = boot.querySelector("#bootText");
  let li = 0, ci = 0, out = "", done = false;
  function finish() {
    if (done) return;
    done = true;
    boot.classList.add("hide");
    setTimeout(() => boot.remove(), 1000);
  }
  function typeStep() {
    if (done) return;
    if (li >= lines.length) { setTimeout(finish, 450); return; }
    const line = lines[li];
    if (ci <= line.length) {
      textEl.innerHTML = out + line.slice(0, ci) + '<span class="cursor"></span>';
      ci++;
      setTimeout(typeStep, 16 + Math.random() * 20);
    } else {
      out += line + "\n";
      li++; ci = 0;
      setTimeout(typeStep, 200);
    }
  }
  boot.addEventListener("click", finish);
  typeStep();
}

function init() {
  state = freshState();
  showBootSequence();
  render();
}

function newSession() {
  state = freshState();
  state.screen = "launcher"; // trainer already knows the app — skip straight to setup
  render();
}

function currentModule() { return AVAILABLE_MODULES.find(m => m.id === state.moduleId); }
function currentScenarios() { return currentModule().levels[state.level].scenarios; }
function currentScenario() { return currentScenarios()[state.scenarioIndex]; }
function getChoice(scenario, choiceId) { return scenario.choices.find(c => c.id === choiceId); }
function getConsequenceText(scenario, choiceId) {
  if (typeof scenario.consequenceFor === "function") return scenario.consequenceFor(choiceId);
  return scenario.consequences[choiceId];
}
// Returns the extra callback sentence (if any) this choice should show for a
// team, based on a flag they earned in an earlier scenario this session.
// Ignores a flag set by the current scenario itself, so a choice can't call
// back to something it just triggered in the same reveal.
function getCallbackText(scenario, choice, teamId) {
  if (!choice.reasonCallbacks) return "";
  const teamFlags = state.flags[teamId] || {};
  for (const flagName in choice.reasonCallbacks) {
    if (teamFlags[flagName] && teamFlags[flagName] !== scenario.id) {
      return choice.reasonCallbacks[flagName];
    }
  }
  return "";
}
function lessonReady() { return currentScenarios().some(s => s.lesson); }
function isLessonMode() { return state.mode === "lesson" && lessonReady(); }

// Last Life Mission per class, so the next lesson can open with it. Keyed by
// the class name typed on the launcher; an unnamed class isn't remembered.
function classKey() { return (state.className || "").trim().toLowerCase(); }
function loadMissions() {
  try { return JSON.parse(localStorage.getItem(MISSIONS_KEY)) || {}; } catch (e) { return {}; }
}
function saveMission(scenario) {
  if (!classKey()) return;
  try {
    const all = loadMissions();
    all[classKey()] = { mission: scenario.lesson.mission, scenarioTitle: scenario.title, date: new Date().toISOString() };
    localStorage.setItem(MISSIONS_KEY, JSON.stringify(all));
  } catch (e) { /* storage blocked: the warm-up just won't appear next time */ }
}

function clearTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }
function stopAndGo(fn) { clearTimer(); fn(); }

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function render() {
  clearTimer();
  const app = document.getElementById("app");
  app.innerHTML = "";
  const map = {
    home: renderHome,
    launcher: renderLauncher,
    hook: renderHook,
    think: renderThink,
    discuss: renderDiscuss,
    answerAll: renderAnswerAll,
    results: renderResults,
    rewindResults: renderRewindResults,
    reflection: renderReflection,
    takeaway: renderTakeaway,
    warmup: renderWarmup,
    examples: renderExamples,
    story: renderStory,
    practice: renderPractice,
    exitCheck: renderExitCheck,
    mission: renderMission,
    debrief: renderDebrief
  };
  app.appendChild(map[state.screen]());
}

// ---------- SHARED CHROME ----------

function progressDots(activeIdx) {
  const beats = isLessonMode() ? LESSON_BEATS : BEAT_LABELS;
  return `<div class="progress">${beats.map((_, i) =>
    `<span class="dot ${i < activeIdx ? "done" : ""} ${i === activeIdx ? "current" : ""}"></span>`
  ).join("")}</div>`;
}

function teamTotal(teamId) {
  const perScenario = Object.values(state.scores[teamId] || {});
  let total = 0;
  perScenario.forEach(sc => DCERA_DIMS.forEach(d => total += sc[d.letter]));
  return total;
}

function scoreboardStrip() {
  if (!state.teams.length) return "";
  const max = Math.max(1, ...state.teams.map(t => teamTotal(t.id)));
  return `<div class="scoreboard no-print">
    ${state.teams.map(t => {
      const total = teamTotal(t.id);
      const pct = Math.round((total / (max || 1)) * 100);
      return `<div class="sb-team">
        <span class="sb-dot" style="background:${t.color}; color:${t.color};"></span>
        <span class="sb-name">${t.name}</span>
        <span class="sb-bar-track"><span class="sb-bar-fill" style="width:${pct}%; background:${t.color}; color:${t.color};"></span></span>
        <span class="sb-total">${total}</span>
      </div>`;
    }).join("")}
  </div>`;
}

function sessionHeader(sub) {
  return `<div class="row no-print" style="justify-content:space-between; align-items:baseline;">
    <span class="eyebrow">${currentModule().title} · ${currentModule().levels[state.level].label}</span>
    <span class="pill">${state.className || "Unnamed class"}</span>
  </div>
  ${scoreboardStrip()}
  ${sub || ""}`;
}

// ---------- HOME ----------

function renderHome() {
  const wrap = el(`<div class="screen home-screen">
    <div class="hero-wrap">
      <div class="hero-sky"></div>
      <div class="hero-burst"></div>
      <div class="hero-grid"></div>
      <div class="hero-content">
        <span class="eyebrow">Human Systems Lab // Classroom Simulator</span>
        <h1 class="title-chrome">LIFE&#47;&#47;SHIFT</h1>
        <p class="title-sub">MAKE THE CALL</p>
        <p class="lead">This is not a lecture. It's a game about real life. Your team gets a real problem, like a rumour, a budget, a viral post, or a career choice. You decide what to do. Nobody tells you the answer first. You choose, then you see what happens next.</p>
        <button class="btn btn-primary" id="enter" style="min-width:240px; margin-top:0.5rem;">&gt; Start a session_</button>
      </div>
    </div>

    <div class="stripe-divider"></div>

    <h3 style="margin-top:0.6rem;">SEQ_01 // How a round works</h3>
    <div class="steps-grid">
      <div class="step-card"><span class="step-num">1</span><h4>See what's happening</h4><p>You'll see one real situation. Everyone sees it at the same time.</p></div>
      <div class="step-card"><span class="step-num">2</span><h4>Think, then talk</h4><p>First, think on your own. Then talk it over with your team.</p></div>
      <div class="step-card"><span class="step-num">3</span><h4>Give your answer</h4><p>Every team answers the same question. Once you answer, that's it. No changing your mind.</p></div>
      <div class="step-card"><span class="step-num">4</span><h4>See what happens</h4><p>Now you find out what happens. Your choice, and everyone else's too.</p></div>
      <div class="step-card"><span class="step-num">5</span><h4>Get your score</h4><p>You get your score right away, and we tell you why. Not just a number.</p></div>
    </div>

    <div class="stripe-divider"></div>

    <h3 style="margin-top:0.6rem;">SEQ_02 // What DCERA actually measures</h3>
    <p class="lead" style="font-size:1rem;">Every choice you make gets a score in five parts. This is not about right or wrong. It is about how well you thought it through. There is no perfect score to chase. The goal is to get a little better at all five, all year.</p>
    <div class="dcera-legend">
      <div class="legend-card"><span class="legend-letter" data-l="D">D</span><h4>Decision quality</h4><p>Did you deal with the real problem, or just react?</p></div>
      <div class="legend-card"><span class="legend-letter" data-l="C">C</span><h4>Consequence awareness</h4><p>Did you think about what happens next, not just right now?</p></div>
      <div class="legend-card"><span class="legend-letter" data-l="E">E</span><h4>Empathy</h4><p>Did you think about how this affects other people too?</p></div>
      <div class="legend-card"><span class="legend-letter" data-l="R">R</span><h4>Risk assessment</h4><p>Did you think about what could really go wrong?</p></div>
      <div class="legend-card"><span class="legend-letter" data-l="A">A</span><h4>Adaptability</h4><p>Could you change your plan if things changed?</p></div>
    </div>

    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="enterBottom" style="min-width:240px;">&gt; Start a session_</button>
    </div>
  </div>`);
  wrap.querySelector("#enter").addEventListener("click", () => { state.screen = "launcher"; render(); });
  wrap.querySelector("#enterBottom").addEventListener("click", () => { state.screen = "launcher"; render(); });

  if (!REDUCE_MOTION && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); });
    }, { threshold: 0.2 });
    wrap.querySelectorAll(".step-card, .legend-card").forEach(card => io.observe(card));
  } else {
    wrap.querySelectorAll(".step-card, .legend-card").forEach(card => card.classList.add("in-view"));
  }
  return wrap;
}

// ---------- LAUNCHER ----------

function renderLauncher() {
  const wrap = el(`<div class="screen">
    <span class="eyebrow">LIFE&#47;&#47;SHIFT</span>
    <h1>Start a session</h1>
    <div class="card col">
      <div class="field">
        <label for="className">Class / section</label>
        <input type="text" id="className" placeholder="e.g. Grade 9 – B" value="${state.className}">
      </div>
      <div class="field">
        <label for="level">Level</label>
        <select id="level">
          <option value="L1" ${state.level === "L1" ? "selected" : ""}>Level 1 · Grades 9–10 · Decisions Around Me</option>
          <option value="L2" ${state.level === "L2" ? "selected" : ""}>Level 2 · Grades 11–12 · Decisions That Shape My Future</option>
        </select>
      </div>
      <div class="field">
        <label for="module">Module</label>
        <select id="module">
          ${AVAILABLE_MODULES.map(m => `<option value="${m.id}" ${m.id === state.moduleId ? "selected" : ""}>${m.title}</option>`).join("")}
        </select>
      </div>
    </div>

    <div class="col">
      <h3>Session type</h3>
      <div class="mode-picker" role="radiogroup" aria-label="Session type">
        <button class="mode-option ${isLessonMode() ? "active" : ""}" data-mode="lesson" role="radio" aria-checked="${isLessonMode()}" ${lessonReady() ? "" : "disabled"}>
          <span class="mode-title">Full lesson</span>
          <span class="mode-desc">One scenario, about 40 minutes. Adds examples, practice, an exit check, and a Life Mission.</span>
          ${lessonReady() ? "" : `<span class="mode-soon">Lesson plans are ready for Decision-Making so far.</span>`}
        </button>
        <button class="mode-option ${isLessonMode() ? "" : "active"}" data-mode="quick" role="radio" aria-checked="${!isLessonMode()}">
          <span class="mode-title">Quick play</span>
          <span class="mode-desc">Every scenario in the module, back to back. The game only.</span>
        </button>
      </div>
      ${isLessonMode() ? `
        <div class="card col">
          <div class="field">
            <label for="lessonScenario">Scenario for this lesson</label>
            <select id="lessonScenario">
              ${currentScenarios().map((s, i) => s.lesson ? `<option value="${i}" ${i === state.lessonScenarioIndex ? "selected" : ""}>${i + 1}. ${s.title}</option>` : "").join("")}
            </select>
          </div>
          <a class="btn guide-link" href="guide.html?module=${state.moduleId}&level=${state.level}" target="_blank" rel="noopener">Open the teacher guide ↗</a>
          <p style="font-size:0.85rem; color:var(--ink-soft);">The guide shows each lesson's goal and discussion notes. Read it or print it before class, and keep it off the projector.</p>
        </div>` : ""}
    </div>

    <div class="col">
      <h3>Teams</h3>
      <div class="team-list" id="teamList"></div>
      <div class="row">
        <button class="btn" id="addTeamBtn">+ Add team</button>
      </div>
    </div>

    <details class="card" id="syncSettings" ${state.sheetUrls.length ? "open" : ""}>
      <summary style="cursor:pointer; font-weight:700;">Save session history to Google Sheet (optional)</summary>
      <div class="col" style="margin-top:1rem;">
        <div class="field">
          <label for="sheetUrlSelect">Google Sheet</label>
          <select id="sheetUrlSelect">
            <option value="">None (skip saving)</option>
            ${state.sheetUrls.map(s => `<option value="${s.id}" ${s.id === state.selectedSheetId ? "selected" : ""}>${s.label}</option>`).join("")}
            <option value="__add__">+ Add new Google Sheet…</option>
          </select>
        </div>
        <div class="col" id="addSheetForm" style="display:none; gap:0.7rem; background:var(--surface-2); border-radius:12px; padding:1rem;">
          <div class="field">
            <label for="newSheetLabel">Label</label>
            <input type="text" id="newSheetLabel" placeholder="e.g. Grade 9 Sessions">
          </div>
          <div class="field">
            <label for="newSheetUrl">Apps Script Web App URL</label>
            <input type="text" id="newSheetUrl" placeholder="https://script.google.com/macros/s/.../exec">
          </div>
          <div class="row">
            <button class="btn btn-primary" id="saveNewSheet">Save this Sheet</button>
            <button class="btn btn-ghost" id="cancelNewSheet">Cancel</button>
          </div>
        </div>
        ${state.selectedSheetId ? `<button class="btn btn-ghost" id="removeSheet" style="align-self:flex-start; padding-left:0;">Remove this saved Sheet</button>` : ""}
        <p style="font-size:0.85rem; color:var(--ink-soft);">Pick "None" to skip saving. The game still works offline. You just won't keep a saved history.</p>
      </div>
    </details>

    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="startBtn" style="min-width:220px;">Start session</button>
    </div>
  </div>`);

  wrap.querySelector("#className").addEventListener("input", e => state.className = e.target.value);
  const firstLessonIndex = () => Math.max(0, currentScenarios().findIndex(s => s.lesson));
  wrap.querySelector("#level").addEventListener("change", e => {
    state.level = e.target.value;
    state.lessonScenarioIndex = firstLessonIndex();
    render();
  });
  wrap.querySelector("#module").addEventListener("change", e => {
    state.moduleId = e.target.value;
    state.lessonScenarioIndex = firstLessonIndex();
    render();
  });
  wrap.querySelectorAll(".mode-option").forEach(btn => {
    btn.addEventListener("click", () => { state.mode = btn.dataset.mode; render(); });
  });
  const lessonSelect = wrap.querySelector("#lessonScenario");
  if (lessonSelect) lessonSelect.addEventListener("change", e => state.lessonScenarioIndex = Number(e.target.value));
  const sheetSelect = wrap.querySelector("#sheetUrlSelect");
  const addForm = wrap.querySelector("#addSheetForm");
  sheetSelect.addEventListener("change", e => {
    if (e.target.value === "__add__") {
      addForm.style.display = "flex";
      e.target.value = state.selectedSheetId; // don't leave "+ Add new" selected
      return;
    }
    state.selectedSheetId = e.target.value;
    state.sheetUrl = resolveSheetUrl(state.sheetUrls, state.selectedSheetId);
    localStorage.setItem(SHEET_SELECTED_KEY, state.selectedSheetId);
    render();
  });
  wrap.querySelector("#saveNewSheet").addEventListener("click", () => {
    const label = wrap.querySelector("#newSheetLabel").value.trim();
    const url = wrap.querySelector("#newSheetUrl").value.trim();
    if (!url) { alert("Paste the Apps Script Web App URL first."); return; }
    const entry = { id: "s" + Date.now() + Math.random().toString(36).slice(2, 6), label: label || url, url };
    state.sheetUrls.push(entry);
    saveSheetUrls(state.sheetUrls);
    state.selectedSheetId = entry.id;
    state.sheetUrl = entry.url;
    localStorage.setItem(SHEET_SELECTED_KEY, state.selectedSheetId);
    render();
  });
  wrap.querySelector("#cancelNewSheet").addEventListener("click", () => render());
  const removeBtn = wrap.querySelector("#removeSheet");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      state.sheetUrls = state.sheetUrls.filter(s => s.id !== state.selectedSheetId);
      saveSheetUrls(state.sheetUrls);
      state.selectedSheetId = state.sheetUrls[0] ? state.sheetUrls[0].id : "";
      state.sheetUrl = resolveSheetUrl(state.sheetUrls, state.selectedSheetId);
      localStorage.setItem(SHEET_SELECTED_KEY, state.selectedSheetId);
      render();
    });
  }
  wrap.querySelector("#addTeamBtn").addEventListener("click", () => {
    const name = prompt("Team name?", `Team ${state.nextTeamNum}`);
    if (!name) return;
    const color = TEAM_COLORS[state.teams.length % TEAM_COLORS.length];
    state.teams.push({ id: "t" + Date.now() + Math.random().toString(36).slice(2, 6), name, members: [], color });
    state.nextTeamNum++;
    render();
  });
  wrap.querySelector("#startBtn").addEventListener("click", () => {
    if (!state.teams.length) { alert("Add at least one team first."); return; }
    state.scores = {};
    state.flags = {};
    state.teams.forEach(t => { state.scores[t.id] = {}; state.flags[t.id] = {}; });
    state.rewound = {};
    state.exitChecks = {};
    if (isLessonMode()) {
      state.mode = "lesson";
      state.scenarioIndex = state.lessonScenarioIndex;
      state.lastMission = classKey() ? loadMissions()[classKey()] || null : null;
      state.screen = state.lastMission ? "warmup" : "hook";
    } else {
      state.mode = "quick";
      state.scenarioIndex = 0;
      state.screen = "hook";
    }
    render();
  });

  renderTeamList(wrap.querySelector("#teamList"));
  return wrap;
}

function renderTeamList(container) {
  container.innerHTML = "";
  state.teams.forEach(team => {
    const row = el(`<div class="team-row" style="border-left: 4px solid ${team.color};">
      <span class="name">${team.name}</span>
      <span class="members">${team.members.length ? team.members.join(", ") : "no members added"}</span>
      <button class="btn" data-act="member">+ member</button>
      <button class="remove" data-act="remove">remove</button>
    </div>`);
    row.querySelector('[data-act="member"]').addEventListener("click", () => {
      const name = prompt(`Add member to ${team.name}:`);
      if (name) team.members.push(name);
      renderTeamList(container);
    });
    row.querySelector('[data-act="remove"]').addEventListener("click", () => {
      state.teams = state.teams.filter(t => t.id !== team.id);
      renderTeamList(container);
    });
    container.appendChild(row);
  });
}

// ---------- HOOK ----------

function renderHook() {
  const s = currentScenario();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(0))}
    <span class="eyebrow">Scenario ${state.scenarioIndex + 1} of ${currentScenarios().length}</span>
    <h1>${s.title}</h1>
    <p class="lead">${s.hook}</p>
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Begin</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => { state.screen = "think"; render(); });
  return wrap;
}

// ---------- TIMER HELPER ----------

function timerBlock(seconds, onDone) {
  return { seconds, onDone };
}

function mountTimer(wrap, totalSeconds) {
  let remaining = totalSeconds;
  const display = wrap.querySelector("#timerDisplay");
  const bar = wrap.querySelector("#timerBar");
  timerInterval = setInterval(() => {
    remaining--;
    const m = Math.floor(remaining / 60), sec = remaining % 60;
    if (display) display.textContent = `${m}:${sec.toString().padStart(2, "0")}`;
    if (bar) bar.style.width = `${Math.max(0, (remaining / totalSeconds) * 100)}%`;
    if (remaining <= 0) clearTimer();
  }, 1000);
}

// ---------- THINK (individual) ----------

function renderThink() {
  const s = currentScenario();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(1))}
    <h2>Think it through. On your own, 30 seconds.</h2>
    <p class="lead">No talking yet. Everyone thinks on their own first.</p>
    <div class="card">
      <ul>${s.predictionPrompts.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>
    <div class="timer-row">
      <div class="timer" id="timerDisplay">0:30</div>
      <div class="timer-track"><div class="timer-fill" id="timerBar" style="width:100%;"></div></div>
    </div>
    <div class="row" style="align-items:center;">
      <button class="btn btn-ghost" id="skip">Skip timer</button>
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Continue</button>
    </div>
  </div>`);
  mountTimer(wrap, 30);
  const go = () => stopAndGo(() => { state.screen = "discuss"; render(); });
  wrap.querySelector("#skip").addEventListener("click", go);
  wrap.querySelector("#next").addEventListener("click", go);
  return wrap;
}

// ---------- DISCUSS (team) ----------

function renderDiscuss() {
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(2))}
    <h2>Team discussion. Up to 1 minute.</h2>
    <p class="lead">Each team talks it over and picks one answer. When you're ready, every team locks in their answer on the next screen.</p>
    <div class="timer-row">
      <div class="timer" id="timerDisplay">1:00</div>
      <div class="timer-track"><div class="timer-fill" id="timerBar" style="width:100%;"></div></div>
    </div>
    <div class="row" style="align-items:center;">
      <button class="btn btn-ghost" id="skip">Skip timer</button>
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Everyone answer now</button>
    </div>
  </div>`);
  mountTimer(wrap, 60);
  const go = () => stopAndGo(() => {
    state.activeTeamIndex = 0;
    state.pendingAnswers = {};
    state.screen = "answerAll";
    render();
  });
  wrap.querySelector("#skip").addEventListener("click", go);
  wrap.querySelector("#next").addEventListener("click", go);
  return wrap;
}

// ---------- ANSWER ALL (simultaneous capture) ----------

function renderAnswerAll() {
  const s = currentScenario();
  // A rewind reuses this screen, but records into rewindAnswers and never
  // touches scores: the first answer is the one that counts.
  const answers = state.rewinding ? state.rewindAnswers : state.pendingAnswers;
  const allAnswered = state.teams.every(t => answers[t.id]);
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(3))}
    ${state.rewinding ? `<span class="eyebrow rewind-eyebrow">Rewind</span>` : ""}
    <h2>${state.rewinding ? `You know what happens now. Would you choose the same?` : s.title}</h2>
    <p class="lead">${s.hook}</p>
    ${s.followUpEvent ? `<div class="consequence-box">${s.followUpEvent}</div>` : ""}

    <div class="team-tabs" id="teamTabs">
      ${state.teams.map((t, i) => `
        <button class="team-tab ${i === state.activeTeamIndex ? "active" : ""} ${answers[t.id] ? "answered" : ""}"
                data-idx="${i}" style="--team-color:${t.color};">
          <span class="tt-dot"></span>
          <span class="tt-name">${t.name}</span>
          ${answers[t.id] ? `<span class="tt-check">${answers[t.id]} ✓</span>` : ""}
        </button>
      `).join("")}
    </div>

    <p class="answer-for" id="answerFor">Answering for <strong>${state.teams[state.activeTeamIndex] ? state.teams[state.activeTeamIndex].name : "no team yet"}</strong></p>

    <div class="choice-list" id="choiceList">
      ${s.choices.map(c => `<button class="btn choice-btn" data-id="${c.id}"><span class="tag">${c.id}</span><span>${c.text}</span></button>`).join("")}
    </div>

    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="reveal" ${allAnswered ? "" : "disabled"} style="min-width:240px;">${state.rewinding ? "Reveal the rewind" : "Reveal results"}</button>
    </div>
  </div>`);

  function setActive(idx) {
    state.activeTeamIndex = idx;
    render();
  }

  wrap.querySelectorAll(".team-tab").forEach(tab => {
    tab.addEventListener("click", () => setActive(Number(tab.dataset.idx)));
  });

  wrap.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const team = state.teams[state.activeTeamIndex];
      if (!team) return;
      answers[team.id] = btn.dataset.id;
      const nextUnanswered = state.teams.findIndex(t => !answers[t.id]);
      state.activeTeamIndex = nextUnanswered === -1 ? state.activeTeamIndex : nextUnanswered;
      render();
    });
  });

  const revealBtn = wrap.querySelector("#reveal");
  if (allAnswered && state.rewinding) {
    revealBtn.addEventListener("click", () => {
      state.rewound[s.id] = { ...state.rewindAnswers };
      state.rewinding = false;
      state.screen = "rewindResults";
      render();
    });
  } else if (allAnswered) {
    revealBtn.addEventListener("click", () => {
      const s2 = currentScenario();
      state.teams.forEach(team => {
        const choiceId = state.pendingAnswers[team.id];
        const choice = getChoice(s2, choiceId);
        state.scores[team.id][s2.id] = { ...choice.dcera };
        state.log.push({ scenarioId: s2.id, teamId: team.id, choiceId, dcera: { ...choice.dcera } });
        if (choice.setsFlag) {
          state.flags[team.id] = state.flags[team.id] || {};
          state.flags[team.id][choice.setsFlag] = s2.id;
        }
      });
      state.screen = "results";
      render();
      maybeSyncLive();
    });
  }
  return wrap;
}

// ---------- RESULTS (auto-scored reveal) ----------

function renderResults() {
  const s = currentScenario();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(4))}
    <h2>Here's what happened</h2>
    <div class="results-list">
      ${state.teams.map((team, i) => {
        const choiceId = state.pendingAnswers[team.id];
        const choice = getChoice(s, choiceId);
        const consequence = getConsequenceText(s, choiceId);
        const callback = getCallbackText(s, choice, team.id);
        return `<div class="result-card" style="--team-color:${team.color}; animation-delay:${REDUCE_MOTION ? 0 : i * 0.12}s;">
          <div class="result-head">
            <span class="sb-dot" style="background:${team.color}; color:${team.color};"></span>
            <span class="result-team">${team.name}</span>
            <span class="result-choice">chose ${choiceId}</span>
          </div>
          <p class="result-consequence">${consequence}</p>
          <div class="dcera-row">
            ${DCERA_DIMS.map(d => `<span class="dcera-chip"><b>${d.letter}</b>${choice.dcera[d.letter]}</span>`).join("")}
          </div>
          <p class="result-reason">${choice.reason}</p>
          ${callback ? `<p class="result-callback"><span class="eyebrow" style="margin-bottom:0.4rem;">Noticed this session</span><br>${callback}</p>` : ""}
        </div>`;
      }).join("")}
    </div>
    <div class="row" style="margin-top:1.5rem;">
      ${state.rewound[s.id] ? "" : `<button class="btn" id="rewind">Rewind with hindsight</button>`}
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Continue</button>
    </div>
  </div>`);
  const rewindBtn = wrap.querySelector("#rewind");
  if (rewindBtn) {
    rewindBtn.addEventListener("click", () => {
      state.rewinding = true;
      state.rewindAnswers = {};
      state.activeTeamIndex = 0;
      state.screen = "answerAll";
      render();
    });
  }
  wrap.querySelector("#next").addEventListener("click", () => { state.screen = "reflection"; render(); });
  return wrap;
}

// ---------- REWIND RESULTS ----------

function dceraTotal(dcera) { return DCERA_DIMS.reduce((sum, d) => sum + dcera[d.letter], 0); }

function renderRewindResults() {
  const s = currentScenario();
  const rewind = state.rewound[s.id] || {};
  const switched = state.teams.filter(t => rewind[t.id] && rewind[t.id] !== state.pendingAnswers[t.id]).length;
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(4))}
    <span class="eyebrow rewind-eyebrow">Rewind</span>
    <h2>${switched === 0 ? "Every team stayed with its first choice" : `${switched} of ${state.teams.length} ${state.teams.length === 1 ? "team" : "teams"} changed their mind`}</h2>
    <p class="lead">Your score stays with your first answer. The rewind shows how your thinking moved once you knew what happens next.</p>
    <div class="results-list">
      ${state.teams.map((team, i) => {
        const first = getChoice(s, state.pendingAnswers[team.id]);
        const second = getChoice(s, rewind[team.id]);
        const changed = first.id !== second.id;
        return `<div class="result-card rewind-card" style="--team-color:${team.color}; animation-delay:${REDUCE_MOTION ? 0 : i * 0.12}s;">
          <div class="result-head">
            <span class="sb-dot" style="background:${team.color}; color:${team.color};"></span>
            <span class="result-team">${team.name}</span>
            <span class="rewind-verdict ${changed ? "changed" : ""}">${changed ? "Changed" : "Stayed"}</span>
          </div>
          <div class="rewind-row">
            <div class="rewind-pick"><span class="rewind-label">First</span><span class="rewind-choice">${first.id}</span><span class="rewind-text">${first.text}</span><span class="rewind-total">DCERA ${dceraTotal(first.dcera)}</span></div>
            ${changed ? `<div class="rewind-arrow" aria-hidden="true">→</div>
            <div class="rewind-pick"><span class="rewind-label">Rewind</span><span class="rewind-choice">${second.id}</span><span class="rewind-text">${second.text}</span><span class="rewind-total">DCERA ${dceraTotal(second.dcera)}</span></div>` : ""}
          </div>
        </div>`;
      }).join("")}
    </div>
    <div class="row" style="margin-top:1.5rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Continue</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => { state.screen = "reflection"; render(); });
  return wrap;
}

// ---------- REFLECTION ----------

function renderReflection() {
  const s = currentScenario();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(5))}
    <span class="eyebrow">The concept</span>
    <h2>What this scenario was really about</h2>
    <div class="consequence-box">${s.concept}</div>
    ${isLessonMode() && s.lesson ? `
      <div class="talk-box">
        <span class="talk-label">Talk about it</span>
        <ol class="talk-list">${s.lesson.prompts.map(p => `<li>${p.q}</li>`).join("")}</ol>
      </div>` : ""}
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Continue</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => {
    state.screen = isLessonMode() && s.lesson ? "examples" : "takeaway";
    render();
  });
  return wrap;
}

// ---------- LESSON LAYER (Full lesson mode only) ----------

function renderWarmup() {
  const last = state.lastMission;
  const when = last && last.date ? new Date(last.date).toLocaleDateString(undefined, { day: "numeric", month: "long" }) : "";
  const wrap = el(`<div class="screen">
    ${sessionHeader()}
    <span class="eyebrow lesson-eyebrow">Warm-up</span>
    <h1>Last time's mission</h1>
    <blockquote class="mission-quote">${last.mission}</blockquote>
    <p class="lead">From "${last.scenarioTitle}"${when ? `, ${when}` : ""}. Who noticed something? Two or three people share. There are no wrong answers.</p>
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:240px;">Start today's scenario</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => { state.screen = "hook"; render(); });
  return wrap;
}

function renderExamples() {
  const s = currentScenario();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(6))}
    <span class="eyebrow lesson-eyebrow">Worked examples</span>
    <h2>What good looks like</h2>
    <div class="lb-stack">${s.lesson.examples.map(lessonBlockHTML).join("")}</div>
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Continue</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => {
    state.practiceRound = 0;
    state.screen = s.lesson.story ? "story" : "practice";
    render();
  });
  return wrap;
}

function renderStory() {
  const s = currentScenario();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(6))}
    <span class="eyebrow lesson-eyebrow">Example story</span>
    ${lessonStoryHTML(s.lesson.story)}
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Time to practice</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => { state.practiceRound = 0; state.screen = "practice"; render(); });
  return wrap;
}

function renderPractice() {
  const s = currentScenario();
  const practice = s.lesson.practice;
  const round = practice.rounds[state.practiceRound];
  const isLastRound = state.practiceRound === practice.rounds.length - 1;
  const clock = `${Math.floor(round.seconds / 60)}:${(round.seconds % 60).toString().padStart(2, "0")}`;
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(7))}
    <span class="eyebrow lesson-eyebrow">Practice</span>
    <h2>${practice.title}</h2>
    <ol class="practice-steps">${practice.steps.map(step => `<li>${step}</li>`).join("")}</ol>
    ${practice.rounds.length > 1 ? `<div class="round-pills">${practice.rounds.map((r, i) =>
      `<span class="round-pill ${i === state.practiceRound ? "current" : ""} ${i < state.practiceRound ? "done" : ""}">${r.label}</span>`).join("")}</div>` : ""}
    <div class="timer-row">
      <div class="timer" id="timerDisplay">${clock}</div>
      <div class="timer-track"><div class="timer-fill" id="timerBar" style="width:100%;"></div></div>
    </div>
    <div class="row" style="align-items:center;">
      <button class="btn btn-ghost" id="skip">Skip practice</button>
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:220px;">${isLastRound ? "Continue" : practice.rounds[state.practiceRound + 1].label}</button>
    </div>
  </div>`);
  mountTimer(wrap, round.seconds);
  wrap.querySelector("#next").addEventListener("click", () => stopAndGo(() => {
    if (isLastRound) state.screen = "exitCheck";
    else state.practiceRound++;
    render();
  }));
  wrap.querySelector("#skip").addEventListener("click", () => stopAndGo(() => { state.screen = "exitCheck"; render(); }));
  return wrap;
}

function renderExitCheck() {
  const s = currentScenario();
  const picked = state.exitChecks[s.id];
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(8))}
    <span class="eyebrow lesson-eyebrow">Exit check</span>
    <h2>${s.lesson.exitCheck}</h2>
    <p class="lead">Everyone holds up a hand. A fist means 0, all five fingers means 5. Teacher: tap roughly where the room landed.</p>
    <div class="fist-row" role="radiogroup" aria-label="Class average">
      ${[0, 1, 2, 3, 4, 5].map(n => `<button class="fist-btn ${picked === n ? "active" : ""}" data-n="${n}" role="radio" aria-checked="${picked === n}">${n}</button>`).join("")}
    </div>
    <div class="row" style="margin-top:1rem;">
      <button class="btn btn-ghost" id="skip">Skip</button>
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;" ${picked === undefined ? "disabled" : ""}>Continue</button>
    </div>
  </div>`);
  wrap.querySelectorAll(".fist-btn").forEach(btn => {
    btn.addEventListener("click", () => { state.exitChecks[s.id] = Number(btn.dataset.n); render(); });
  });
  const go = () => { state.screen = "mission"; render(); };
  wrap.querySelector("#next").addEventListener("click", go);
  wrap.querySelector("#skip").addEventListener("click", () => { delete state.exitChecks[s.id]; go(); });
  return wrap;
}

function renderMission() {
  const s = currentScenario();
  saveMission(s);
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(9))}
    <span class="eyebrow mission-eyebrow">Your Life Mission</span>
    <p class="mission-text">${s.lesson.mission}</p>
    <p class="lead">${classKey() ? "Next time this class plays, we'll start by asking how it went." : "Tip: give the class a name on the launcher, and next lesson will open with this mission."}</p>
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:220px;">Finish lesson</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => { state.screen = "debrief"; render(); });
  return wrap;
}

// ---------- TAKEAWAY ----------

function renderTakeaway() {
  const s = currentScenario();
  const isLast = state.scenarioIndex === currentScenarios().length - 1;
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(6))}
    <span class="eyebrow">Real-life takeaway</span>
    <h2>${s.takeaway}</h2>
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:240px;">${isLast ? "Finish module" : "Next scenario"}</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => {
    if (isLast) {
      state.screen = "debrief";
    } else {
      state.scenarioIndex++;
      state.activeTeamIndex = 0;
      state.pendingAnswers = {};
      state.screen = "hook";
    }
    render();
  });
  return wrap;
}

// ---------- DEBRIEF ----------

function avgDcera(teamId) {
  const perScenario = Object.values(state.scores[teamId] || {});
  if (!perScenario.length) return null;
  const totals = { D: 0, C: 0, E: 0, R: 0, A: 0 };
  perScenario.forEach(sc => DCERA_DIMS.forEach(d => totals[d.letter] += sc[d.letter]));
  const avg = {};
  DCERA_DIMS.forEach(d => avg[d.letter] = (totals[d.letter] / perScenario.length).toFixed(1));
  return avg;
}

function computeWinners() {
  if (!state.teams.length) return [];
  const totals = state.teams.map(t => ({ team: t, total: teamTotal(t.id) }));
  const max = Math.max(...totals.map(t => t.total));
  return totals.filter(t => t.total === max && max > 0).map(t => t.team);
}

function buildSyncPayload() {
  const scenarioById = id => currentScenarios().find(s => s.id === id);
  const rows = state.log.map(entry => {
    const scenario = scenarioById(entry.scenarioId);
    const team = state.teams.find(t => t.id === entry.teamId);
    return {
      team: team.name, scenario: scenario.title, choice: entry.choiceId,
      D: entry.dcera.D, C: entry.dcera.C, E: entry.dcera.E, R: entry.dcera.R, A: entry.dcera.A
    };
  });
  // Rewinds and exit checks reuse the Sheet's existing columns (the Apps
  // Script only knows Team/Scenario/Choice/D-A), tagged in the Scenario
  // column so they're easy to filter out of score totals.
  Object.entries(state.rewound).forEach(([scenarioId, answers]) => {
    const scenario = scenarioById(scenarioId);
    Object.entries(answers).forEach(([teamId, choiceId]) => {
      const team = state.teams.find(t => t.id === teamId);
      const dcera = getChoice(scenario, choiceId).dcera;
      rows.push({ team: team.name, scenario: `${scenario.title} (rewind)`, choice: choiceId, D: dcera.D, C: dcera.C, E: dcera.E, R: dcera.R, A: dcera.A });
    });
  });
  Object.entries(state.exitChecks).forEach(([scenarioId, value]) => {
    rows.push({ team: "Whole class", scenario: `${scenarioById(scenarioId).title} (exit check)`, choice: `${value} / 5`, D: "", C: "", E: "", R: "", A: "" });
  });
  return {
    timestamp: new Date().toISOString(),
    className: state.className || "Unnamed class",
    module: currentModule().title,
    level: currentModule().levels[state.level].label,
    rows
  };
}

function syncStatusLabel() {
  return {
    idle: "", saving: "Saving…", saved: "Saved to Google Sheet ✓",
    error: "Couldn't save. Check the sync URL on the launcher, and check your connection."
  }[state.syncStatus];
}

function syncSession() {
  state.syncStatus = "saving";
  render();
  fetch(state.sheetUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(buildSyncPayload())
  })
    .then(res => { if (!res.ok) throw new Error("bad response"); state.syncStatus = "saved"; })
    .catch(() => { state.syncStatus = "error"; })
    .finally(render);
}

function maybeSyncLive() {
  // Best-effort background save after each scenario, silent — the explicit
  // "Save to Google Sheet" button on debrief remains the reliable path.
  if (!state.sheetUrl) return;
  fetch(state.sheetUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(buildSyncPayload())
  }).catch(() => {});
}

function spawnConfetti(container) {
  if (REDUCE_MOTION) return;
  const colors = [...TEAM_COLORS, "#FFB92E"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    const color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.background = color;
    piece.style.color = color;
    piece.style.animationDelay = (Math.random() * 0.6) + "s";
    piece.style.animationDuration = (2.2 + Math.random() * 1.4) + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
  }
  // Pieces use animation-fill-mode: forwards so they hold their landing
  // spot instead of snapping back — clear them once every piece has
  // finished falling, or they'd sit frozen over whatever scrolls under them.
  setTimeout(() => { container.innerHTML = ""; }, 4200);
}

function renderDebrief() {
  const winners = computeWinners();
  const winnerText = winners.length === 0 ? "" :
    winners.length === 1 ? `🏆 Nice work, ${winners[0].name}! You made the strongest choices today.` :
    `🏆 ${winners.map(w => w.name).join(" & ")}, you're tied for the win! Great choices, both of you.`;
  const playedCount = new Set(state.log.map(e => e.scenarioId)).size || currentScenarios().length;
  const lessonNotes = [];
  Object.entries(state.exitChecks).forEach(([id, v]) => {
    lessonNotes.push(`<b>Exit check</b> · ${currentScenarios().find(s => s.id === id).title}: the class landed at <b>${v} / 5</b>.`);
  });
  Object.entries(state.rewound).forEach(([id, answers]) => {
    const changed = Object.entries(answers).filter(([teamId, c]) => c !== (state.log.find(e => e.scenarioId === id && e.teamId === teamId) || {}).choiceId).length;
    lessonNotes.push(`<b>Rewind</b> · ${currentScenarios().find(s => s.id === id).title}: ${changed} of ${Object.keys(answers).length} teams changed their answer with hindsight.`);
  });

  const wrap = el(`<div class="screen">
    ${sessionHeader()}
    <span class="eyebrow no-print">Session complete</span>
    <h1>${state.className || "Session"} debrief</h1>
    <p class="lead">${currentModule().title} · ${currentModule().levels[state.level].label}</p>

    ${winnerText ? `<div class="winner-banner" id="winnerBanner"><span>${winnerText}</span></div>` : ""}

    <div class="card" style="overflow-x:auto;">
      <table>
        <thead><tr><th>Team</th><th>Total</th><th>D</th><th>C</th><th>E</th><th>R</th><th>A</th></tr></thead>
        <tbody>
          ${state.teams.slice().sort((a, b) => teamTotal(b.id) - teamTotal(a.id)).map(t => {
            const avg = avgDcera(t.id);
            return `<tr><td><span class="sb-dot" style="background:${t.color}; color:${t.color};"></span> ${t.name}</td><td class="num"><b>${teamTotal(t.id)}</b></td>${avg ? DCERA_DIMS.map(d => `<td class="num">${avg[d.letter]}</td>`).join("") : `<td colspan="5">no scores recorded</td>`}</tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
    <p style="font-size:0.9rem; color:var(--ink-soft);">Total adds up every DCERA point from ${playedCount === 1 ? "this scenario" : `all ${playedCount} scenarios`}. The averages are right next to it. Want more detail? Check the full list below.</p>
    ${lessonNotes.length ? `<div class="card lesson-notes">${lessonNotes.map(n => `<p>${n}</p>`).join("")}</div>` : ""}
    <div class="card" style="overflow-x:auto;">
      <table>
        <thead><tr><th>Scenario</th><th>Team</th><th>Choice</th><th>D</th><th>C</th><th>E</th><th>R</th><th>A</th></tr></thead>
        <tbody>
          ${state.log.map(entry => {
            const scenario = currentScenarios().find(s => s.id === entry.scenarioId);
            const team = state.teams.find(t => t.id === entry.teamId);
            return `<tr><td>${scenario.title}</td><td>${team.name}</td><td>${entry.choiceId}</td>${DCERA_DIMS.map(d => `<td class="num">${entry.dcera[d.letter]}</td>`).join("")}</tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
    <div class="row no-print" style="margin-top:1rem; align-items:center;">
      <button class="btn" id="print">Print / export summary</button>
      ${state.sheetUrl ? `<button class="btn" id="sync" ${state.syncStatus === "saving" ? "disabled" : ""}>${state.syncStatus === "saved" ? "Saved ✓" : "Save to Google Sheet"}</button>` : ""}
      <span style="font-size:0.85rem; color:${state.syncStatus === "error" ? "var(--danger)" : "var(--ink-soft)"};">${syncStatusLabel()}</span>
      <div class="spacer"></div>
      <button class="btn btn-primary" id="restart" style="min-width:220px;">New session</button>
    </div>
    <div class="confetti-layer" id="confettiLayer"></div>
  </div>`);
  wrap.querySelector("#print").addEventListener("click", () => window.print());
  wrap.querySelector("#restart").addEventListener("click", () => newSession());
  const syncBtn = wrap.querySelector("#sync");
  if (syncBtn) syncBtn.addEventListener("click", syncSession);
  if (winners.length) spawnConfetti(wrap.querySelector("#confettiLayer"));
  return wrap;
}

document.addEventListener("DOMContentLoaded", init);
