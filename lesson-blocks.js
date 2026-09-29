// LIFE//SHIFT — lesson-blocks.js
// Turns a scenario's `lesson.examples` and `lesson.story` data into HTML.
// Shared by the class screen (engine.js) and the teacher guide (guide.html)
// so a worked example looks the same in both places; each page styles the
// `lb-` classes itself.

function lessonBlockHTML(block) {
  const title = block.title ? `<h3 class="lb-title">${block.title}</h3>` : "";
  switch (block.kind) {
    case "ladder":
      return `<div class="lb lb-ladder">
        ${title}
        ${block.situation ? `<p class="lb-situation">${block.situation}</p>` : ""}
        <div class="lb-rungs">
          ${block.rungs.map(r => `<div class="lb-rung${r.strength === 3 ? " lb-best" : ""}">
            <div class="lb-meter">
              <span class="lb-rung-label">${r.label}</span>
              ${r.strength ? `<span class="lb-bars">${[1, 2, 3].map(n => `<i class="${n <= r.strength ? "on" : ""}"></i>`).join("")}</span>` : ""}
            </div>
            <div>
              <p class="lb-quote">${r.text}</p>
              ${r.note ? `<p class="lb-note">${r.note}</p>` : ""}
            </div>
          </div>`).join("")}
        </div>
      </div>`;

    case "numbers":
      return `<div class="lb lb-numbers">
        ${title}
        ${block.intro ? `<p class="lb-situation">${block.intro}</p>` : ""}
        <table class="lb-table">
          <tbody>
            ${block.rows.map(r => `<tr class="lb-tone-${r.tone || "neutral"}"><td>${r.label}</td><td>${r.value}</td></tr>`).join("")}
          </tbody>
        </table>
        ${block.note ? `<p class="lb-note">${block.note}</p>` : ""}
      </div>`;

    case "list":
      return `<div class="lb lb-list">
        ${title}
        ${block.intro ? `<p class="lb-situation">${block.intro}</p>` : ""}
        <ol class="lb-items">${block.items.map(i => `<li>${i}</li>`).join("")}</ol>
      </div>`;

    case "mythfact":
      return `<div class="lb lb-mythfact">
        ${title}
        <div class="lb-pairs">
          ${block.items.map(i => `<div class="lb-pair">
            <p><span class="lb-tag lb-tag-myth">Myth</span>${i.myth}</p>
            <p><span class="lb-tag lb-tag-fact">Fact</span>${i.fact}</p>
          </div>`).join("")}
        </div>
      </div>`;

    case "compare":
      return `<div class="lb lb-compare">
        ${title}
        <div class="lb-columns">
          ${block.columns.map(c => `<div class="lb-column">
            <h4>${c.heading}</h4>
            <span class="lb-tag lb-tag-fact">You get</span>
            <ul>${c.get.map(g => `<li>${g}</li>`).join("")}</ul>
            <span class="lb-tag lb-tag-myth">You give up</span>
            <ul>${c.give.map(g => `<li>${g}</li>`).join("")}</ul>
          </div>`).join("")}
        </div>
      </div>`;

    default:
      return "";
  }
}

function lessonStoryHTML(story) {
  if (!story) return "";
  return `<div class="lb lb-story">
    <span class="lb-story-label">Example story · made up for teaching</span>
    <p class="lb-story-body">${story.body}</p>
    ${story.question ? `<p class="lb-story-question">${story.question}</p>` : ""}
  </div>`;
}
