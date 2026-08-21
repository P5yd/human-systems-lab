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
          hook: "A friend posts an embarrassing video of another student. It starts to spread fast.",
          predictionPrompts: [
            "Which of your options actually helps it spread?",
            "Which one actually helps the person in the video?"
          ],
          choices: [
            { id: "A", text: "Like it.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Feels like doing nothing, but it tells the app to show this post to more people." },
            { id: "B", text: "Share it.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This spreads the harm the most. It's the most damaging option here." },
            { id: "C", text: "Comment on it.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Keeps the post active and visible, even if you don't mean any harm." },
            { id: "D", text: "Ignore it and scroll past.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "You don't spread it, but the person in it never finds out you could have warned them." },
            { id: "E", text: "Report the post.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "This works against the spread instead of adding to it, even if the platform takes a while." },
            { id: "F", text: "Message the person in the video to tell them what's happening.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 4 }, reason: "Puts the person who's actually affected first, and gives them the earliest chance to respond." },
            { id: "G", text: "Ask the original poster to take it down.", dcera: { D: 4, C: 3, E: 4, R: 2, A: 4 }, reason: "Goes straight to the source, but it also puts you right in the middle of it." }
          ],
          consequences: {
            A: "Liking feels harmless, but it tells the app to show this to more people. You've helped it spread without meaning to.",
            B: "You multiply how many people see it. The video reaches people the original poster never meant to reach, and now it's much harder to stop.",
            C: "Even a neutral comment keeps the post active and visible longer. A joking one adds to the harm.",
            D: "It doesn't spread because of you, but the person in the video never finds out you could have warned them.",
            E: "The platform may remove it, though not always quickly. Still, you've done something that works against the spread instead of adding to it.",
            F: "They find out fast, from someone on their side. That gives them time to respond, like asking for takedowns or talking to an adult, before it spreads everywhere.",
            G: "It might work, especially if you're not the only one asking. But it puts you in direct contact with the situation, and not everyone is comfortable with that."
          },
          concept: "Every action here, even the ones that feel passive, has a real effect on how far this goes. Once you've seen it, there's no truly neutral choice.",
          takeaway: "Which of these felt like 'not really doing anything', before you saw what happens next?"
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
            { id: "A", text: "Post it to fit in.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Fits in for a moment, but you give away control of something you can't take back." },
            { id: "B", text: "Refuse and leave the group.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "Removes the pressure completely, but you lose sight of what's happening in the group." },
            { id: "C", text: "Refuse but stay in the group.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Holds the line without giving anything up, and keeps you able to see what happens next." },
            { id: "D", text: "Suggest something else to post instead.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 4 }, reason: "Sometimes this shifts the pressure elsewhere, but it doesn't always work." },
            { id: "E", text: "Screenshot the pressure and show a trusted adult.", dcera: { D: 5, C: 5, E: 4, R: 5, A: 4 }, reason: "The only option that brings in outside help before anything is actually posted." }
          ],
          consequences: {
            A: "It gets a laugh in the moment. It also now exists somewhere outside your control, and you don't know who has it or where it ends up.",
            B: "You're safe from this pressure, but you lose sight of the group, and you may only hear about things secondhand.",
            C: "The pressure continues for a while, but you haven't given them anything to use against you, and you can watch what happens next.",
            D: "It sometimes works, and sometimes just delays the same pressure to next time.",
            E: "It feels like a big step, but it's the only option that brings an adult in before something has actually been posted."
          },
          concept: "Content posted 'for a laugh' between friends doesn't stay inside that group. Feeling pressure to post it now is not the same as having control over where it goes later.",
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
            { id: "B", text: "Screenshot everything as evidence before doing anything else.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Saves proof before it can disappear. This is the foundation for whatever comes next." },
            { id: "C", text: "Message the fake account directly to confront them.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Shows them you're watching, which could backfire into more harm just as easily as less." },
            { id: "D", text: "Report it to the platform right away.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "This is the formal way to handle it, but it's usually slower than the situation needs." },
            { id: "E", text: "Tell your friend first, then decide together what to do.", dcera: { D: 4, C: 4, E: 5, R: 4, A: 4 }, reason: "Puts the person with the most at stake at the center of deciding what happens next." }
          ],
          consequences: {
            A: "Calling it out publicly alerts the account's owner. They may delete it, and any evidence, before anyone can act on it.",
            B: "You save proof, which matters if this needs to go further, to the platform, a school, or beyond.",
            C: "It confirms someone's watching, which can either stop them or make them do it again elsewhere out of spite.",
            D: "The platform can act, but usually slower than you'd like. And if you don't keep proof somewhere else, the evidence may be lost if the account gets deleted.",
            E: "Your friend has the most at stake here. Deciding together, with evidence already saved, tends to lead to the clearest next step."
          },
          concept: "Your instinct is to react to a fake account right away. The real skill is saving proof before your reaction, or theirs, makes it disappear.",
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
            { id: "A", text: "Leave your profile exactly as it is, since it's a fair reflection of you.", dcera: { D: 3, C: 3, E: 4, R: 2, A: 3 }, reason: "Feels honest, but leaves the impression entirely to chance and old posts." },
            { id: "B", text: "Clean up old posts and set your profile to private before applying.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "Lowers risk, though a sudden change can itself look staged instead of real." },
            { id: "C", text: "Create a separate, more polished profile just for professional use.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Common, low-risk, and deliberate. The cost is keeping up two separate profiles." },
            { id: "D", text: "Assume they won't actually check.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Most recruiters do check. This leaves you with zero say over the story it tells." }
          ],
          consequences: {
            A: "Whatever impression it creates, good or bad, is genuinely yours. Some recruiters value that honesty. Others will judge old posts without knowing the full story.",
            B: "It lowers risk. But if they remember seeing your profile before and now it's suddenly private, that can look staged instead of real.",
            C: "This is common and low-risk, but it takes extra work to keep up two separate profiles.",
            D: "Most recruiters do check. If they find something concerning with no other context to balance it, you don't get a chance to explain."
          },
          concept: "People who read your digital footprint have never met you and have no other context. The impression it creates isn't about what you meant. It's about what's actually visible.",
          takeaway: "If a recruiter looked you up right now, what would be the first thing they'd see?"
        },
        {
          id: "the-scam",
          title: "The Scam",
          hook: 'A message just landed in your inbox: "Congratulations! You\'ve won ₹50,000. Click here to claim."',
          predictionPrompts: [
            "What's the message actually asking you to do, right now, urgently?",
            "What would happen if you waited 24 hours before responding at all?"
          ],
          choices: [
            { id: "A", text: "Click the link to see what happens.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Clicking itself is low-risk, but it walks you straight toward the page that isn't." },
            { id: "B", text: "Reply asking for more information.", dcera: { D: 2, C: 2, E: 2, R: 1, A: 2 }, reason: "Shows the scammer your inbox is active, which invites more of the same." },
            { id: "C", text: "Ignore and delete it.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "The safest immediate outcome, though it does nothing to stop the next attempt." },
            { id: "D", text: "Report it as spam / phishing.", dcera: { D: 5, C: 4, E: 4, R: 5, A: 4 }, reason: "Helps flag the pattern for others. It's the only option that helps beyond just your own inbox." },
            { id: "E", text: "Forward it to a friend to see what they think.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 3 }, reason: "A reasonable instinct to double-check, but it can spread the same risk to your friend too." }
          ],
          consequences: {
            A: "The link leads to a page asking for your bank details 'to process the transfer.' Clicking alone rarely causes harm. The real damage happens when you type in information, and this page is built to get you there.",
            B: "Replying tells the scammer your email is active and checked. That often means more scam attempts, not fewer.",
            C: "It's gone, and nothing happens. This is the safest outcome, though it doesn't stop the next one from arriving.",
            D: "Reporting helps the platform flag similar messages for others, which deleting alone doesn't do.",
            E: "It's a good instinct to double-check, but if your friend isn't sure either, you're both now exposed to the same risk."
          },
          concept: "This message is the obvious version. The same trick shows up in more convincing forms too, like a fake internship offer, a fake bank message, a fake scholarship, a fake delivery notice, a fake investment deal, or even an AI voice call pretending to be someone you know. The real tell isn't how it looks. It's whether it's pushing you to act right now, before you can check.",
          takeaway: "What's the most convincing scam message you've actually gotten?"
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
            { id: "A", text: "Include all of it, for full transparency.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Each detail alone seems minor. Combined, they're enough for someone to find you and pretend to be you." },
            { id: "B", text: "Include school and birthday only, since it feels harmless.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Feels harmless, but it's a common combination used to guess account recovery answers." },
            { id: "C", text: "Include none of it, and keep the bio generic.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "The safest option, though it makes it harder for real friends to find you." },
            { id: "D", text: "Include location tagging on posts, but nothing else.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This is the single riskiest item on the list by itself. It says exactly where you are, right now." }
          ],
          consequences: {
            A: "On their own, several of these seem harmless. Combined, they're enough for a stranger to know where to find you, when, and how to convincingly pretend to know you. This is the same trick a 'digital detective' exercise uses: building a full picture of a total stranger from public information alone.",
            B: "School plus birthday is a common combination used to guess security-question answers and account-recovery details. It's riskier than it looks.",
            C: "It's the safest option, though it also means people who should recognize you, like old friends or classmates, may not find you as easily.",
            D: "Live location tagging is the single riskiest item on this list by itself. It tells anyone watching exactly where you are, in real time."
          },
          concept: "No single piece of information here is dangerous by itself. The real risk is what a stranger can figure out about you without ever meeting you. That comes from combining details, not from any one detail alone.",
          takeaway: "Which piece of information here would you remove first, now that you've seen it combined with the rest?"
        }
      ]
    }
  }
};
