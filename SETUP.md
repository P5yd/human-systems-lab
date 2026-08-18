# Setting up session history (Google Sheet sync)

This is optional — the app works fully without it, you just won't get a persistent history across devices. Takes about 5 minutes, done once.

## 1. Create the Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like **Human Systems Lab — Sessions**.

## 2. Add the script

1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete anything in the editor and paste this in:

```javascript
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Sessions') || ss.insertSheet('Sessions');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Class', 'Module', 'Level', 'Team', 'Scenario', 'Choice', 'D', 'C', 'E', 'R', 'A']);
  }
  const data = JSON.parse(e.postData.contents);
  data.rows.forEach(function (r) {
    sheet.appendRow([data.timestamp, data.className, data.module, data.level, r.team, r.scenario, r.choice, r.D, r.C, r.E, r.R, r.A]);
  });
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Click the **Save** icon (name the project e.g. "Human Systems Lab Sync").

## 3. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Google will ask you to authorize the script (it's only touching this one Sheet) — click through the consent screen with your own Google account.
6. Copy the **Web app URL** it gives you — looks like `https://script.google.com/macros/s/AKfycb.../exec`.

## 4. Wire it into the app

1. Open the Human Systems Lab site.
2. On the "Start a session" screen, open **Save session history to Google Sheet (optional)**.
3. Paste the Web app URL in.

That's it — it's saved in your browser, so you only need to paste it once per computer you use. Every time you finish a session, hit **Save to Google Sheet** on the debrief screen, and a row gets added to the "Sessions" tab for each team/scenario played.

## If you ever need to redeploy

If you edit the script later, use **Deploy → Manage deployments → Edit (pencil icon) → New version** rather than creating a brand-new deployment — that way the URL you already pasted into the app keeps working.

## Troubleshooting

**Getting a "Page not found" or login-page response when testing the URL directly:** double-check **Who has access** is set to exactly **Anyone** (not "Anyone with Google account" or "Only myself") under Deploy → Manage deployments → Edit. This is the most common cause of the sync silently failing.

**Testing the URL yourself:** don't test it with `curl` or similar command-line tools — Google's servers appear to reject automated non-browser POST requests to Apps Script web apps even when access is correctly set to "Anyone." A real browser's request (which is what the app itself sends) works fine even when a `curl` test to the same URL returns a 405. Test it by actually using the app and clicking "Save to Google Sheet" instead.
