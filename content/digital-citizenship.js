// Module: Digital Citizenship & Online Safety
// Content authored from the user's curriculum design (2026-08-17), adapted
// to the choice→consequence format (see leading notes in earlier revision
// for what was adapted from investigation/classification exercises). Each
// choice carries a `dcera` score and `reason`, added 2026-08-18 for
// automatic scoring.
//
// Lessons added 2026-10-23 (fourth module with lessons): every scenario
// carries a `lesson` object with the shape documented in
// content/decision-making.js. The Privacy lesson's practice brings back the
// curriculum's "Digital Detective" activity on paper. Care notes on the
// viral-post and peer-pressure lessons tell teachers that sexual images of
// students must never be saved or forwarded, even as evidence.

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
          takeaway: "Which of these felt like 'not really doing anything', before you saw what happens next?",
          lesson: {
            goal: "Students see that every click (liking, commenting, even scrolling past) affects how far harmful content spreads, and practice the quick moves that slow it down and support the person in it.",
            skills: ["Empathy", "Critical thinking"],
            focus: ["E", "R"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student mentions a real video or photo that's sexual or shows someone undressed, it must not be saved, screenshotted, or forwarded, even as evidence. Tell the counselor right away so the school can handle it properly.",
            prompts: [
              { q: "Which choice felt like doing nothing, but wasn't?", listenFor: "Liking or commenting. Both tell the app to show it to more people." },
              { q: "If you were in the video, what would you want a classmate to do?", listenFor: "Tell me, report it, don't share it." },
              { q: "Why is it hard to be the first to say \"take it down\"?", listenFor: "Fear of looking uncool, or of becoming the next target." }
            ],
            examples: [
              {
                kind: "list",
                title: "What each click does",
                items: [
                  "Like or comment: tells the app this post is interesting, so it shows it to more people.",
                  "Share: puts it in front of people who would never have seen it.",
                  "Scroll past: doesn't spread it, but doesn't help either.",
                  "Report: asks the platform to check it and take it down.",
                  "Message the person: gives them the earliest chance to act."
                ]
              },
              {
                kind: "ladder",
                title: "Message the person in the video",
                situation: "You see the video spreading. The person in it is in your class.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"lol have u seen this??\" (with the link)", note: "Now you've spread it to them too, and it sounds like you're laughing." },
                  { label: "Clear", strength: 2, text: "\"Hey, there's a video of you going around.\"", note: "Kind enough, but they're left alone with the panic." },
                  { label: "Strong", strength: 3, text: "\"Hey, a video of you is going around. I've reported it and I'm not sharing it. Do you want help telling a teacher?\"", note: "They hear it from someone on their side, with a next step." }
                ]
              }
            ],
            story: {
              body: "When a video of Imran tripping on stage started going round, Leena didn't like it or share it. She reported it, then messaged Imran: \"Just so you know, I reported it.\" Imran's older sister helped him ask the poster to take it down. By the evening it was gone.",
              question: "What did Leena's two small moves do?"
            },
            practice: {
              title: "The one-line message",
              steps: [
                "Work as a team.",
                "Write the message you'd send to the person in a viral video, so they know you're on their side.",
                "Read it out. The class checks: does it avoid sharing the video? Does it offer help?"
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How likely are you to report instead of react, the next time something like this spreads?",
            mission: "This week, notice one post you were about to like or comment on without thinking. Ask yourself: \"Does my click help this spread?\""
          }
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
          takeaway: "What's the actual worst-case version of 'just this once'?",
          lesson: {
            goal: "Students see that anything posted \"for a laugh\" leaves their control, and practice saying no in a group chat while staying in it, and knowing when to bring in a trusted adult.",
            skills: ["Decision making", "Critical thinking"],
            focus: ["R", "D"],
            needs: "The smartboard.",
            careNote: "If a student says they've been pressured to send photos of themselves, or that something private has already been shared, treat it as serious. Thank them, don't ask for details in class, and tell the counselor the same day. Nobody should save or forward the image, even as evidence.",
            prompts: [
              { q: "What's the worst-case version of \"just this once\"?", listenFor: "It gets screenshotted, shared beyond the group, and brought up later." },
              { q: "Who controls a post after you send it?", listenFor: "Not you. Anyone can save it or forward it." },
              { q: "When should a group chat stop being something you handle alone?", listenFor: "When the pressure keeps going, turns into threats, or involves photos. Then show a trusted adult." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say no in the chat",
                situation: "\"Come on, post it! It's just for a laugh. Don't be boring.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"haha maybe later\"", note: "They hear a yes coming, and keep pushing." },
                  { label: "Clear", strength: 2, text: "\"No.\"", note: "Clear, but it can make you the next target in the chat." },
                  { label: "Strong", strength: 3, text: "\"Not posting that. But look at this dog video 😂\"", note: "A clear no, then a new topic. The pressure has somewhere else to go." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "It's a private group, so it stays private.", fact: "Anyone in the group can screenshot it and send it anywhere." },
                  { myth: "You can always delete it later.", fact: "Deleting removes your copy. It doesn't remove anyone else's screenshot." },
                  { myth: "Telling an adult will make it worse.", fact: "A trusted adult can help stop the pressure before anything gets posted." }
                ]
              }
            ],
            story: {
              body: "Nikhil's group chat kept pushing him to post a silly video of himself dancing. He wrote, \"Nah, but check this meme,\" and changed the subject. Two weeks later, another friend's \"just for a laugh\" video turned up in a group full of people none of them knew.",
              question: "Why did Nikhil's \"nah\" matter two weeks later?"
            },
            practice: {
              title: "The group chat no",
              steps: [
                "Get into pairs.",
                "One of you is the group pushing someone to post. The other says no, then changes the subject.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready are you to say no in a group chat when everyone's pushing?",
            mission: "This week, before you post anything, ask yourself: \"Would I be okay if this ended up outside this group?\""
          }
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
          takeaway: "What evidence would you wish you'd saved, looking back a week later?",
          lesson: {
            goal: "Students learn the order that protects a friend from an impersonation account: save evidence, tell the friend, report, and bring in a trusted adult.",
            skills: ["Problem solving", "Critical thinking"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "Why does calling it out publicly backfire?", listenFor: "The owner deletes it, and the evidence goes with it." },
              { q: "What evidence exists right now that might be gone tomorrow?", listenFor: "The profile, the posts, the messages, the username, the date." },
              { q: "Who needs to know first?", listenFor: "The friend being copied. It's their name and their photos." }
            ],
            examples: [
              {
                kind: "list",
                title: "The order that works",
                items: [
                  "Screenshot the profile, the posts, and any messages. Include the username and the date.",
                  "Tell your friend privately. It's their name, so they decide the next steps with you.",
                  "Report the account on the platform, using the \"pretending to be someone\" option.",
                  "If it's being used to bully or scam people, show a trusted adult."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "Commenting \"FAKE!\" on it is the fastest way to stop it.", fact: "It warns the person behind it, who can delete everything before anyone acts." },
                  { myth: "Reporting does nothing.", fact: "Platforms do remove fake accounts. It often works better when the real person reports it too." },
                  { myth: "It's only a joke if nobody gets hurt.", fact: "Using someone's photos and name without asking can hurt them even if nothing else happens." }
                ]
              }
            ],
            story: {
              body: "Someone made an account using Ritu's photos and started messaging her friends. Megha spotted it, took screenshots first, then called Ritu. They reported it together, and Ritu's mum helped her report it again from her own account. It was gone in two days.",
              question: "What would have happened if Megha had commented first?"
            },
            practice: {
              title: "Put it in order",
              steps: [
                "Work as a team.",
                "On paper, write the four steps in the right order: save evidence, tell the friend, report it, involve a trusted adult.",
                "Add one reason why step one comes first. Then share your reason."
              ],
              rounds: [{ label: "Order it", seconds: 90 }]
            },
            exitCheck: "How sure are you about what to do first if you find a fake account of a friend?",
            mission: "This week, check your privacy settings on one app. See who can view your photos and who can message you."
          }
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
          takeaway: "If a recruiter looked you up right now, what would be the first thing they'd see?",
          lesson: {
            goal: "Students see their public profile the way a stranger with no context would, and practice a quick check before they apply for anything.",
            skills: ["Self-awareness", "Critical thinking"],
            focus: ["C", "R"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "What would a stranger assume about you from your top three posts?", listenFor: "Honest guesses. Notice the gap between what you meant and what's visible." },
              { q: "Is cleaning up your profile fake?", listenFor: "Not if you're choosing what to show. Everyone chooses what to share in an interview too." },
              { q: "What could a profile show that helps you?", listenFor: "Projects, volunteering, skills, interests, kind comments." }
            ],
            examples: [
              {
                kind: "list",
                title: "The 10-minute profile check",
                items: [
                  "Search your full name in a private browser window. What comes up?",
                  "Scroll your public posts from the oldest. Would you show each one to an interviewer?",
                  "Check your photo, bio and username. Do they look like someone you'd hire?",
                  "Look at what you've commented on and been tagged in, not just what you posted."
                ]
              },
              {
                kind: "compare",
                title: "Two lists, before you decide",
                columns: [
                  { heading: "Keep it as it is", get: ["It's honestly you", "No extra work"], give: ["Control over the first impression", "A chance to explain old posts"] },
                  { heading: "Clean it up first", get: ["A first impression you chose", "Fewer surprises in the interview"], give: ["Some time", "Maybe a few posts you liked"] }
                ]
              }
            ],
            story: {
              body: "Before applying for a summer internship, Arnav searched his own name. The first result was a joke comment he'd made at 14. He deleted it, added a short bio about his robotics club, and made his old photos private. In the interview, they asked him about the robotics club.",
              question: "What did ten minutes of checking change?"
            },
            practice: {
              title: "Profile makeover",
              steps: [
                "Work as a team.",
                "Make up a student's profile with three posts: one great, one fine, and one that could cost them an internship.",
                "Swap papers with another team. Decide what to keep, change, or delete, and why."
              ],
              rounds: [{ label: "Write the profile", seconds: 90 }, { label: "Swap and fix", seconds: 90 }]
            },
            exitCheck: "How clear are you on what a recruiter would see if they looked you up today?",
            mission: "This week, search your own name in a private browser window. Write down the first thing a stranger would see."
          }
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
          takeaway: "What's the most convincing scam message you've actually gotten?",
          lesson: {
            goal: "Students learn the real tell of a scam (pressure to act right now, before checking) and practice the safe response: stop, check through an official route, and report.",
            skills: ["Critical thinking", "Decision making"],
            focus: ["R", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student or their family has lost money or shared bank details with a scammer, they should call 1930 (the national cybercrime helpline) or report at cybercrime.gov.in as soon as possible, because speed matters for getting money back. Let the counselor know too.",
            prompts: [
              { q: "What was the message pushing you to do, and how fast?", listenFor: "Click now, claim today. The hurry is the trick." },
              { q: "What scam messages have you or your family actually received?", listenFor: "Fake parcels, bank KYC updates, job offers, prizes, \"wrong number\" chats." },
              { q: "How could you check if a message is real without clicking it?", listenFor: "Open the official app, call the number on the back of your card, or ask an adult." }
            ],
            examples: [
              {
                kind: "list",
                title: "Spot the scam: three tells",
                items: [
                  "Pressure: \"Act now,\" \"Offer ends today,\" \"Your account will be blocked.\"",
                  "A prize or a job you never applied for.",
                  "A request for an OTP, PIN, password, or a small \"processing fee.\" Real banks and real employers never ask for these."
                ]
              },
              {
                kind: "ladder",
                title: "What to do with it",
                situation: "\"Your bank account will be blocked today. Update your KYC here: [link]\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Clicking the link to check.)", note: "The page is built to get your details. Checking there means checking on the scammer's terms." },
                  { label: "Clear", strength: 2, text: "(Deleting it.)", note: "You're safe. The next person who gets it isn't any safer." },
                  { label: "Strong", strength: 3, text: "(Not clicking. Opening your bank's official app, or calling the number on your card, then reporting the message.)", note: "You check through a route the scammer doesn't control, and help flag it for others." }
                ]
              }
            ],
            story: {
              body: "Simran's grandfather got a call saying his electricity would be cut off tonight unless he paid ₹10 through a link. Simran said, \"Let's call the electricity office first.\" The office had never heard of it. They reported the number. Two neighbours had already lost money to the same call.",
              question: "Why was the amount so small?"
            },
            practice: {
              title: "Scam or real?",
              steps: [
                "Work as a team.",
                "Write one scam message and one genuine message that looks similar, like a real school reminder.",
                "Read both out. The other teams vote on which is the scam, and name the tell."
              ],
              rounds: [{ label: "Write them", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could spot a scam that looks real?",
            mission: "This week, show one older family member the three tells of a scam. Ask if they've ever received one."
          }
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
          takeaway: "Which piece of information here would you remove first, now that you've seen it combined with the rest?",
          lesson: {
            goal: "Students see how harmless details combine into a full picture of them, and practice trimming a profile to what friends need and strangers don't.",
            skills: ["Critical thinking", "Self-awareness"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "Which detail felt the most harmless?", listenFor: "School or birthday. Point out that those are often used to guess passwords and recovery answers." },
              { q: "What could a stranger work out by combining them?", listenFor: "Where you'll be and when, who your family is, how to sound like someone you know." },
              { q: "What do your real friends need from your profile?", listenFor: "Very little. Most of them already know where you go to school." }
            ],
            examples: [
              {
                kind: "list",
                title: "What each detail gives away",
                items: [
                  "School name: where you are on weekdays.",
                  "Birthday: a common security question for accounts.",
                  "Phone number: a way to message you directly.",
                  "Family names: a way to sound like someone you know.",
                  "Live location: where you are, right now."
                ]
              },
              {
                kind: "ladder",
                title: "Write the bio",
                situation: "Your public profile bio.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Riya ✨ Class 11, [school name], Pune | 14 May | 98XXXXXXXX\"", note: "School, city, birthday and number. Enough for a stranger to find you." },
                  { label: "Clear", strength: 2, text: "\"Riya ✨ Pune\"", note: "Much safer. A city on its own is fine for most people." },
                  { label: "Strong", strength: 3, text: "\"Riya ✨ robotics, sketching, bad puns\"", note: "Shows who you are, not where to find you." }
                ]
              }
            ],
            story: {
              body: "In a class activity, Kabir's team was handed a made-up student's public profile: a school logo, a birthday post, a tagged café, and a photo outside a house with the number showing. In five minutes they had worked out his school, his age, where he spent Saturdays, and roughly where he lived.",
              question: "Which one detail would you have removed first?"
            },
            practice: {
              title: "Digital detective",
              steps: [
                "Work as a team.",
                "Make up a short public profile for a fake student, with four details that seem harmless.",
                "Swap with another team. Write down everything you can work out about their student by combining the details."
              ],
              rounds: [{ label: "Make the profile", seconds: 90 }, { label: "Investigate", seconds: 90 }]
            },
            exitCheck: "How sure are you about which details to keep off your public profile?",
            mission: "This week, check one of your public profiles. Remove one detail a stranger doesn't need."
          }
        }
      ]
    }
  }
};
