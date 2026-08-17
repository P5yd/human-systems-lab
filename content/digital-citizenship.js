// Module: Digital Citizenship & Online Safety
// Content authored from the user's curriculum design (2026-08-17), adapted
// to the choice→consequence format (see leading notes in earlier revision
// for what was adapted from investigation/classification exercises). Each
// choice carries a `dcera` score and `reason`, added 2026-08-18 for
// automatic scoring.

const MODULE_DIGITAL_CITIZENSHIP = {
  id: "digital-citizenship",
  title: "Digital Citizenship & Online Safety",
  coreIdea: "The internet remembers things that you may forget.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Life Online",
      scenarios: [
        {
          id: "the-viral-post",
          title: "The Viral Post",
          hook: "A friend posts a humiliating video of another student. It starts going viral.",
          predictionPrompts: [
            "Which of your options actually helps it spread?",
            "Which one actually helps the person in the video?"
          ],
          choices: [
            { id: "A", text: "Like it.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Feels passive, but it's a real signal that helps the post spread further." },
            { id: "B", text: "Share it.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Directly multiplies the harm — the most damaging option on this list." },
            { id: "C", text: "Comment on it.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Keeps the post active and visible, even without meaning any harm." },
            { id: "D", text: "Ignore it and scroll past.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "Doesn't spread it, but the person in it never learns you could have warned them." },
            { id: "E", text: "Report the post.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "Works against the spread instead of adding to it, even if the platform is slow." },
            { id: "F", text: "Message the person in the video to tell them what's happening.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 4 }, reason: "Centers the person actually affected and gives them the earliest chance to respond." },
            { id: "G", text: "Ask the original poster to take it down.", dcera: { D: 4, C: 3, E: 4, R: 2, A: 4 }, reason: "Directly addresses the source, at the cost of putting yourself in the situation." }
          ],
          consequences: {
            A: "Liking feels harmless, but it's a signal to the algorithm that this content should be shown to more people — you've helped it spread without meaning to.",
            B: "You directly multiply how many people see it. The video reaches people the original poster never intended, and it's now much harder to contain.",
            C: "Even a neutral comment keeps the post active and visible longer. A joking one adds to the harm.",
            D: "It doesn't spread because of you, but the person in the video never finds out you could have warned them.",
            E: "The platform may remove it, though not always quickly — but you've done something that actually works against the spread instead of adding to it.",
            F: "They find out fast, from someone on their side, which lets them respond — ask for takedowns, talk to an adult — before it's everywhere.",
            G: "It might work, especially if you're not the only one asking — but it puts you in direct contact with the situation, which not everyone is comfortable with."
          },
          concept: "Every single action here — even the passive ones — has a measurable effect on how far this goes. There's no truly neutral option once you've seen it.",
          takeaway: "Which of these felt like 'not really doing anything' before you saw the consequence?"
        },
        {
          id: "online-peer-pressure",
          title: "Online Peer Pressure",
          hook: "Friends create a private group chat and pressure you to post something embarrassing 'for a laugh.'",
          predictionPrompts: [
            "What's the actual worst-case version of 'just this once'?",
            "Who controls it once it's posted?"
          ],
          choices: [
            { id: "A", text: "Post it to fit in.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Fits in for a moment but hands away control of something you can't take back." },
            { id: "B", text: "Refuse and leave the group.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "Removes the pressure completely, at the cost of losing visibility into the group." },
            { id: "C", text: "Refuse but stay in the group.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Holds the line without giving anything up, and keeps you able to see what happens next." },
            { id: "D", text: "Suggest something else to post instead.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 4 }, reason: "Sometimes redirects the pressure, though it isn't guaranteed to work." },
            { id: "E", text: "Screenshot the pressure and show a trusted adult.", dcera: { D: 5, C: 5, E: 4, R: 5, A: 4 }, reason: "The only option that brings in outside help before anything is actually posted." }
          ],
          consequences: {
            A: "It gets a laugh in the moment. It also now exists somewhere outside your control, and you don't know who has it or where it ends up.",
            B: "You're safe from this specific pressure, but you also lose visibility into the group and may hear about it secondhand instead.",
            C: "The pressure continues for a while, but you haven't given them anything to use against you, and you can watch what happens next.",
            D: "It sometimes works, and sometimes just delays the same pressure to next time.",
            E: "It feels like a big step, but it's the only option that brings an adult in before something has actually been posted."
          },
          concept: "Content posted 'for a laugh' between friends doesn't stay contained to that group — the pressure to post it now is not the same as control over where it goes after.",
          takeaway: "What's the actual worst-case version of 'just this once'?"
        },
        {
          id: "the-fake-account",
          title: "The Fake Account",
          hook: "Someone creates a social media account pretending to be your friend, using their photos.",
          predictionPrompts: [
            "What evidence exists right now that might not exist tomorrow?",
            "Who actually needs to know first?"
          ],
          choices: [
            { id: "A", text: "Comment publicly calling it out immediately.", dcera: { D: 2, C: 1, E: 2, R: 1, A: 2 }, reason: "Alerts the account's owner, who can delete the evidence before anyone can act on it." },
            { id: "B", text: "Screenshot everything as evidence before doing anything else.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Preserves proof before it can disappear — the foundation for whatever comes next." },
            { id: "C", text: "Message the fake account directly to confront them.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Confirms you're watching, which can backfire into more harm just as easily as less." },
            { id: "D", text: "Report it to the platform right away.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "The formal channel, but usually slower than the situation calls for." },
            { id: "E", text: "Tell your friend first, then decide together what to do.", dcera: { D: 4, C: 4, E: 5, R: 4, A: 4 }, reason: "Centers the person with the most at stake in deciding what happens next." }
          ],
          consequences: {
            A: "Calling it out publicly alerts the account's owner, who may delete it — and any evidence — before anyone can act on it.",
            B: "You preserve proof, which matters if this needs to go further — to the platform, a school, or beyond.",
            C: "It confirms someone's watching, which can either stop them or make them do it again elsewhere out of spite.",
            D: "The platform can act, but usually slower than you'd like, and without proof kept elsewhere, evidence may be lost if the account is later deleted.",
            E: "Your friend has the most at stake here — deciding together, with evidence already saved, tends to lead to the clearest next step."
          },
          concept: "The instinct is to react to a fake account. The actual skill is preserving proof before your reaction — or theirs — makes the proof disappear.",
          takeaway: "What evidence would you wish you'd saved, looking back a week later?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Digital Reputation",
      scenarios: [
        {
          id: "the-job-recruiter",
          title: "The Job Recruiter",
          hook: "You're applying for an internship. Before interviewing you, the recruiter looks at your public social media.",
          predictionPrompts: [
            "What's actually visible on your profile right now?",
            "What would a stranger assume about you from it?"
          ],
          choices: [
            { id: "A", text: "Leave your profile exactly as it is — it's a fair reflection of you.", dcera: { D: 3, C: 3, E: 4, R: 2, A: 3 }, reason: "Authentic, but leaves the impression entirely to chance and old context." },
            { id: "B", text: "Clean up old posts and set your profile to private before applying.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "Reduces risk, though a sudden change can itself look curated rather than genuine." },
            { id: "C", text: "Create a separate, more polished profile just for professional contexts.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Common, low-risk, and deliberate — at the cost of maintaining two separate presences." },
            { id: "D", text: "Assume they won't actually check.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Most recruiters do check — this leaves you with zero say over the story it tells." }
          ],
          consequences: {
            A: "Whatever impression it creates — good or bad — is genuinely yours. Some recruiters value authenticity; others will judge old posts out of context.",
            B: "It reduces risk, but if they compare a suddenly-private profile to what they remember seeing before, it can read as curated rather than genuine.",
            C: "This is common practice and low-risk, but takes upfront effort to maintain two separate presences.",
            D: "Most recruiters do check. If they find something concerning with no other context to balance it, you don't get a chance to explain."
          },
          concept: "A digital footprint is read by people who've never met you and have no other context — the impression it creates isn't about what you meant, it's about what's actually visible.",
          takeaway: "If a recruiter looked you up right now, what would be the first thing they'd see?"
        },
        {
          id: "the-scam",
          title: "The Scam",
          hook: '"Congratulations! You\'ve won ₹50,000. Click here to claim." — a message just landed in your inbox.',
          predictionPrompts: [
            "What's the message actually asking you to do, right now, urgently?",
            "What would happen if you waited 24 hours before responding at all?"
          ],
          choices: [
            { id: "A", text: "Click the link to see what happens.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "The click itself is low-risk, but it walks you straight toward the page that isn't." },
            { id: "B", text: "Reply asking for more information.", dcera: { D: 2, C: 2, E: 2, R: 1, A: 2 }, reason: "Confirms your inbox is active and watched, inviting more of the same." },
            { id: "C", text: "Ignore and delete it.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "The safest immediate outcome, though it does nothing to stop the next attempt." },
            { id: "D", text: "Report it as spam / phishing.", dcera: { D: 5, C: 4, E: 4, R: 5, A: 4 }, reason: "Helps flag the pattern for others — the only option with an effect beyond your own inbox." },
            { id: "E", text: "Forward it to a friend to see what they think.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 3 }, reason: "A reasonable instinct to double-check, but it can just spread the same exposure." }
          ],
          consequences: {
            A: "The link leads to a page asking for your bank details 'to process the transfer.' Clicking alone rarely causes harm — entering information is where the real damage happens, and this page is designed to get you there.",
            B: "Replying confirms your email is active and monitored, which often means more scam attempts, not fewer.",
            C: "It's gone, and nothing happens — the safest outcome, though it doesn't prevent the next one from arriving.",
            D: "Reporting helps the platform flag similar messages for others, which deleting alone doesn't do.",
            E: "It's a good instinct to double-check, but if your friend isn't sure either, you're both now exposed to the same risk."
          },
          concept: "This message is the obvious version. The same pattern shows up in far more convincing forms — a fake internship offer, a fake bank message, a fake scholarship, a fake delivery notice, a fake investment opportunity, even an AI-generated voice call imitating someone you know. The tell isn't how it looks — it's whether it's pushing you to act immediately, before you can check.",
          takeaway: "What's the most convincing scam-shaped message you've actually received?"
        },
        {
          id: "privacy",
          title: "Privacy",
          hook: "You're filling out a public profile bio. You could include your school name, location, birthday, phone number, family details, or live location.",
          predictionPrompts: [
            "Which of these feels harmless on its own?",
            "What could someone figure out by combining all of them?"
          ],
          choices: [
            { id: "A", text: "Include all of it — full transparency.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Each detail alone seems minor — combined, they're enough to locate and impersonate you." },
            { id: "B", text: "Include school and birthday only — feels harmless.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Feels harmless, but it's a common combination used to guess account recovery answers." },
            { id: "C", text: "Include none of it — keep the bio generic.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "The most protected option, at the cost of being harder for real friends to find." },
            { id: "D", text: "Include location tagging on posts, but nothing else.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "The single highest-risk item on the list on its own — it says exactly where you are, live." }
          ],
          consequences: {
            A: "Individually, several of these seem harmless. Combined, they're enough for a stranger to know where to find you, when, and how to convincingly pretend to know you — the same reconstruction a 'digital detective' exercise uses to build a picture of a total stranger from public information alone.",
            B: "School plus birthday is a common combination used to guess security-question answers and account-recovery details — more risk than it looks like.",
            C: "It's the most protected option, though it also means people who should recognize you — old friends, classmates — may not find you as easily.",
            D: "Live location tagging is the single highest-risk item on this list on its own — it tells anyone watching exactly where you are, in real time."
          },
          concept: "No single piece of this information is dangerous by itself. What can be inferred about you without ever meeting you is the actual risk — and that's a function of combination, not any one detail.",
          takeaway: "Which piece of information here would you remove first, now that you've seen it combined with the rest?"
        }
      ]
    }
  }
};
