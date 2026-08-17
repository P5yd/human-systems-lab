# Human Systems Lab — Life Skills Platform

A single-source, projector-driven classroom platform for teaching life skills to grades 9–12: scenario-based decision labs with team play and live DCERA scoring (Decision quality, Consequence awareness, Empathy, Risk assessment, Adaptability), replacing the ten scattered tools — worksheets, videos, activity sheets, a scoreboard on the whiteboard — with one screen.

## Running it

No build step. Open `index.html` directly in a browser, or serve the folder locally:

```
python3 -m http.server 8420
```

Then visit `http://localhost:8420`.

## Structure

- `index.html`, `styles.css`, `engine.js` — the generic engine: session launcher, the seven-beat scenario flow, team rotation, live DCERA scoring, and the end-of-session debrief. Never references module content by name.
- `content/*.js` — pure module content (scenarios, choices, consequences). Adding a module means writing a new content file to the same schema, not touching the engine.

## Modules

Decision-Making & Consequences · Money & Budgeting · Communication & Conflict Resolution · Digital Citizenship & Online Safety · Career & Goal-Setting — each with a Level 1 (grades 9–10) and Level 2 (grades 11–12) scenario set.
