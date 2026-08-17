// LIFE SKILLS PLATFORM — engine.js
// Generic state machine: session setup, the seven-beat scenario flow, the
// DCERA scoring loop, and the end-of-session debrief. Never references
// module content by name — modules are pure data (see content/*.js).

const AVAILABLE_MODULES = [
  MODULE_DECISION_MAKING,
  MODULE_MONEY_BUDGETING,
  MODULE_COMMUNICATION_CONFLICT,
  MODULE_DIGITAL_CITIZENSHIP,
  MODULE_CAREER_GOALS
];

const DCERA_DIMS = [
  { letter: "D", name: "Decision quality" },
  { letter: "C", name: "Consequence awareness" },
  { letter: "E", name: "Empathy" },
  { letter: "R", name: "Risk assessment" },
  { letter: "A", name: "Adaptability" }
];

const BEAT_LABELS = ["Hook", "Individual", "Team talk", "Choices", "Reveal", "Reflect", "Takeaway"];

let state = null;
let timerInterval = null;

function freshState() {
  return {
    screen: "launcher",
    className: "",
    level: "L1",
    moduleId: AVAILABLE_MODULES[0].id,
    teams: [],
    nextTeamNum: 1,
    scenarioIndex: 0,
    teamTurnIndex: 0,
    currentChoiceId: null,
    pendingDcera: { D: 0, C: 0, E: 0, R: 0, A: 0 },
    scores: {}, // scores[teamId][scenarioId] = {D,C,E,R,A}
    log: [] // [{scenarioId, teamId, choiceId, dcera}]
  };
}

function init() {
  state = freshState();
  render();
}

function currentModule() {
  return AVAILABLE_MODULES.find(m => m.id === state.moduleId);
}
function currentScenarios() {
  return currentModule().levels[state.level].scenarios;
}
function currentScenario() {
  return currentScenarios()[state.scenarioIndex];
}
function currentTeam() {
  return state.teams[state.teamTurnIndex];
}
function getConsequenceText(scenario, choiceId) {
  if (typeof scenario.consequenceFor === "function") {
    return scenario.consequenceFor(choiceId);
  }
  return scenario.consequences[choiceId];
}
function clearTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}
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
    launcher: renderLauncher,
    hook: renderHook,
    think: renderThink,
    discuss: renderDiscuss,
    teamChoice: renderTeamChoice,
    consequence: renderConsequence,
    dcera: renderDcera,
    reflection: renderReflection,
    takeaway: renderTakeaway,
    debrief: renderDebrief
  };
  app.appendChild(map[state.screen]());
}

function progressDots(activeIdx) {
  return `<div class="progress">${BEAT_LABELS.map((_, i) =>
    `<span class="dot ${i < activeIdx ? "done" : ""} ${i === activeIdx ? "current" : ""}"></span>`
  ).join("")}</div>`;
}

function sessionHeader(sub) {
  return `<div class="row no-print" style="justify-content:space-between; align-items:baseline;">
    <span class="eyebrow">${currentModule().title} · ${currentModule().levels[state.level].label}</span>
    <span class="pill">${state.className || "Unnamed class"}</span>
  </div>${sub || ""}`;
}

// ---------- LAUNCHER ----------

function renderLauncher() {
  const wrap = el(`<div class="screen">
    <span class="eyebrow">Human Systems Lab</span>
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
          ${AVAILABLE_MODULES.map(m => `<option value="${m.id}">${m.title}</option>`).join("")}
        </select>
      </div>
    </div>

    <div class="col">
      <h3>Teams</h3>
      <div class="team-list" id="teamList"></div>
      <div class="row">
        <button class="btn" id="addTeamBtn">+ Add team</button>
      </div>
    </div>

    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="startBtn" style="min-width:220px;">Start session</button>
    </div>
  </div>`);

  wrap.querySelector("#className").addEventListener("input", e => state.className = e.target.value);
  wrap.querySelector("#level").addEventListener("change", e => state.level = e.target.value);
  wrap.querySelector("#module").addEventListener("change", e => state.moduleId = e.target.value);
  wrap.querySelector("#addTeamBtn").addEventListener("click", () => {
    const name = prompt("Team name?", `Team ${state.nextTeamNum}`);
    if (!name) return;
    state.teams.push({ id: "t" + Date.now() + Math.random().toString(36).slice(2, 6), name, members: [] });
    state.nextTeamNum++;
    render();
  });
  wrap.querySelector("#startBtn").addEventListener("click", () => {
    if (!state.teams.length) { alert("Add at least one team first."); return; }
    state.scores = {};
    state.teams.forEach(t => state.scores[t.id] = {});
    state.scenarioIndex = 0;
    state.screen = "hook";
    render();
  });

  renderTeamList(wrap.querySelector("#teamList"));
  return wrap;
}

function renderTeamList(container) {
  container.innerHTML = "";
  state.teams.forEach(team => {
    const row = el(`<div class="team-row">
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

// ---------- THINK (individual) ----------

function renderThink() {
  const s = currentScenario();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(1))}
    <h2>Think it through — on your own, 60 seconds</h2>
    <p class="lead">No talking yet. Everyone decides privately what they would do.</p>
    <div class="card">
      <ul>${s.predictionPrompts.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>
    <div class="row" style="align-items:center; margin-top:1rem;">
      <div class="timer" id="timerDisplay">1:00</div>
      <div class="spacer"></div>
      <button class="btn btn-ghost" id="skip">Skip timer</button>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Continue</button>
    </div>
  </div>`);

  let remaining = 60;
  const display = wrap.querySelector("#timerDisplay");
  timerInterval = setInterval(() => {
    remaining--;
    const m = Math.floor(remaining / 60), sec = remaining % 60;
    display.textContent = `${m}:${sec.toString().padStart(2, "0")}`;
    if (remaining <= 0) clearTimer();
  }, 1000);

  wrap.querySelector("#skip").addEventListener("click", () => stopAndGo(() => { state.screen = "discuss"; render(); }));
  wrap.querySelector("#next").addEventListener("click", () => stopAndGo(() => { state.screen = "discuss"; render(); }));
  return wrap;
}

// ---------- DISCUSS (team) ----------

function renderDiscuss() {
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(2))}
    <h2>Team discussion — up to 8 minutes</h2>
    <p class="lead">Each team talks it over and settles on one answer. When you're ready, move on and teams will answer one at a time.</p>
    <div class="row" style="align-items:center; margin-top:1rem;">
      <div class="timer" id="timerDisplay">8:00</div>
      <div class="spacer"></div>
      <button class="btn btn-ghost" id="skip">Skip timer</button>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Start answering</button>
    </div>
  </div>`);

  let remaining = 480;
  const display = wrap.querySelector("#timerDisplay");
  timerInterval = setInterval(() => {
    remaining--;
    const m = Math.floor(remaining / 60), sec = remaining % 60;
    display.textContent = `${m}:${sec.toString().padStart(2, "0")}`;
    if (remaining <= 0) clearTimer();
  }, 1000);

  const goNext = () => stopAndGo(() => { state.teamTurnIndex = 0; state.screen = "teamChoice"; render(); });
  wrap.querySelector("#skip").addEventListener("click", goNext);
  wrap.querySelector("#next").addEventListener("click", goNext);
  return wrap;
}

// ---------- TEAM CHOICE (loop per team) ----------

function renderTeamChoice() {
  const s = currentScenario();
  const team = currentTeam();
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(3))}
    <span class="eyebrow">Team ${state.teamTurnIndex + 1} of ${state.teams.length}</span>
    <h2>${team.name}, what's your call?</h2>
    <p class="lead">${s.hook}</p>
    ${s.followUpEvent ? `<div class="consequence-box">${s.followUpEvent}</div>` : ""}
    <div class="choice-list">
      ${s.choices.map(c => `<button class="btn choice-btn" data-id="${c.id}"><span class="tag">${c.id}</span><span>${c.text}</span></button>`).join("")}
    </div>
  </div>`);

  wrap.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentChoiceId = btn.dataset.id;
      state.screen = "consequence";
      render();
    });
  });
  return wrap;
}

// ---------- CONSEQUENCE ----------

function renderConsequence() {
  const s = currentScenario();
  const team = currentTeam();
  const text = getConsequenceText(s, state.currentChoiceId);
  const wrap = el(`<div class="screen">
    ${sessionHeader(progressDots(4))}
    <span class="eyebrow">${team.name} chose ${state.currentChoiceId}</span>
    <h2>Here's what happens</h2>
    <div class="consequence-box">${text}</div>
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Score this team</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => {
    state.pendingDcera = { D: 0, C: 0, E: 0, R: 0, A: 0 };
    state.screen = "dcera";
    render();
  });
  return wrap;
}

// ---------- DCERA SCORING ----------

function renderDcera() {
  const team = currentTeam();
  const wrap = el(`<div class="screen">
    ${sessionHeader()}
    <h2>Score ${team.name}</h2>
    <p class="lead">Based on their discussion and choice for this scenario — tap 1 to 5 for each.</p>
    <div class="dcera-grid" id="grid">
      ${DCERA_DIMS.map(d => `
        <div class="dcera-dim" data-letter="${d.letter}">
          <span class="letter">${d.letter}</span>
          <span class="name">${d.name}</span>
          <div class="dcera-stars">
            ${[1,2,3,4,5].map(n => `<button data-n="${n}">${n}</button>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="save" style="min-width:200px;">Save score</button>
    </div>
  </div>`);

  wrap.querySelectorAll(".dcera-dim").forEach(dim => {
    const letter = dim.dataset.letter;
    dim.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        state.pendingDcera[letter] = Number(btn.dataset.n);
        dim.querySelectorAll("button").forEach(b => b.classList.toggle("active", Number(b.dataset.n) <= state.pendingDcera[letter]));
      });
    });
  });

  wrap.querySelector("#save").addEventListener("click", () => {
    const s = currentScenario();
    const team = currentTeam();
    state.scores[team.id][s.id] = { ...state.pendingDcera };
    state.log.push({ scenarioId: s.id, teamId: team.id, choiceId: state.currentChoiceId, dcera: { ...state.pendingDcera } });

    if (state.teamTurnIndex < state.teams.length - 1) {
      state.teamTurnIndex++;
      state.screen = "teamChoice";
    } else {
      state.screen = "reflection";
    }
    render();
  });
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
    <div class="row" style="margin-top:1rem;">
      <div class="spacer"></div>
      <button class="btn btn-primary" id="next" style="min-width:200px;">Continue</button>
    </div>
  </div>`);
  wrap.querySelector("#next").addEventListener("click", () => { state.screen = "takeaway"; render(); });
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
      state.teamTurnIndex = 0;
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

function renderDebrief() {
  const wrap = el(`<div class="screen">
    ${sessionHeader()}
    <span class="eyebrow no-print">Session complete</span>
    <h1>${state.className || "Session"} debrief</h1>
    <p class="lead">${currentModule().title} · ${currentModule().levels[state.level].label}</p>
    <div class="card" style="overflow-x:auto;">
      <table>
        <thead><tr><th>Team</th><th>D</th><th>C</th><th>E</th><th>R</th><th>A</th></tr></thead>
        <tbody>
          ${state.teams.map(t => {
            const avg = avgDcera(t.id);
            return `<tr><td>${t.name}</td>${avg ? DCERA_DIMS.map(d => `<td class="num">${avg[d.letter]}</td>`).join("") : `<td colspan="5">no scores recorded</td>`}</tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
    <p style="font-size:0.9rem; color:var(--ink-soft);">Averages across all ${currentScenarios().length} scenarios this session. Full per-scenario detail is in the session log below.</p>
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
    <div class="row no-print" style="margin-top:1rem;">
      <button class="btn" id="print">Print / export summary</button>
      <div class="spacer"></div>
      <button class="btn btn-primary" id="restart" style="min-width:220px;">New session</button>
    </div>
  </div>`);
  wrap.querySelector("#print").addEventListener("click", () => window.print());
  wrap.querySelector("#restart").addEventListener("click", () => init());
  return wrap;
}

document.addEventListener("DOMContentLoaded", init);
