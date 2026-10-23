// Module: Digital Safety for Girls
// New module added 2026-08-20, adapted from the external counsellor's field
// guide at thehumansystemslab.netlify.app/guides/digital-safety-girls-delhi
// — a professional resource on recognizing online grooming/exploitation,
// NOT primarily youth-facing (unlike the companion "guide_for_boys"). Built
// carefully from only the guide's own student-facing sections: the toolkit's
// "Message Decoder" activity, Essay III ("On Being Understood by the Wrong
// People"), and Essay IV's shame-bind framing. Handled in general,
// non-graphic terms throughout — no explicit content, no operational detail
// beyond what's needed for pattern recognition.
//
// Design commitments made explicitly with the user before this was built:
// (1) every scenario includes an option to tell a trusted adult, and that
// option never scores lower than staying silent; (2) real Indian helplines
// are included in-app, not just documented elsewhere — see the concept text
// in "If I Tell, What Happens?"; (3) anti-shame framing throughout, echoing
// the source guide's own facilitation language almost verbatim.
//
// Lessons added 2026-10-23 (ninth module with lessons), same `lesson` shape
// as content/decision-making.js, with the sensitive-module rules: a care
// note on every lesson, written practice only (nobody plays the other
// person), "No." shown as complete, and `counselorLed: true` for the guide
// banner. The toolkit's Message Decoder returns as a paper activity. The
// evidence lesson separates saving messages and usernames (helpful) from
// forwarding images (never, even to report). Existing scenario text,
// including the helpline concept, is untouched.

const MODULE_DIGITAL_SAFETY_GIRLS = {
  id: "digital-safety-girls",
  title: "Digital Safety for Girls",
  counselorLed: true,
  coreIdea: "Recognizing a pattern is a skill, not a character test.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · What's Actually Visible",
      scenarios: [
        {
          id: "the-public-profile",
          title: "The Public Profile",
          hook: "You're setting up a new social media profile. It asks for your school, your city, your birthday, and whether to make your account public or private.",
          predictionPrompts: [
            "What could a stranger actually learn from a public profile alone?",
            "What's the difference between 'nobody's looking' and 'anybody could look'?"
          ],
          choices: [
            { id: "A", text: "Make it public and fill in everything. More people can find you that way.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This makes you easy to find, but it doesn't make you safe." },
            { id: "B", text: "Make it private, but still fill in everything in your bio.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 2 }, reason: "This protects who sees the account, but it doesn't reduce what's actually inside it." },
            { id: "C", text: "Make it private and only share what you're comfortable with strangers seeing.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "This combines two real protections: who can see it, and what there is to see. It doesn't rely on just one." },
            { id: "D", text: "Make it public but leave the sensitive fields blank.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "A reasonable middle ground if being easy to find matters to you. But anyone can still see the account." },
            { id: "E", text: "Ask a parent or older sibling to look it over with you before posting.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Gets a second opinion before you post, not after." }
          ],
          consequences: {
            A: "Anyone can see your school, your city, and your birthday. That's enough for a stranger to sound like they already know you.",
            B: "The profile itself is protected, but anyone who does get access sees everything at once.",
            C: "Strangers who find the account learn very little, and anyone you actually know still recognizes you fine.",
            D: "The account is easy to find, but there's less in it that could be used against you.",
            E: "It takes an extra step, but a second set of eyes often catches things you've stopped noticing about your own profile."
          },
          concept: "None of these choices are about hiding. They're about deciding on purpose what a stranger gets to know about you, instead of leaving it up to whoever bothers to look.",
          takeaway: "If you looked at your own profile as a stranger would, what would you actually learn?",
          lesson: {
            goal: "Students decide on purpose what a stranger can learn from their profile, using two protections together: who can see it, and what's in it.",
            skills: ["Critical thinking", "Decision making"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student mentions a stranger who already seems to know where they live or study, or who has turned up in person, treat it as urgent and tell the counselor the same day.",
            prompts: [
              { q: "What could a stranger learn from a public profile alone?", listenFor: "School, city, age, friends, and daily routine from photos." },
              { q: "Is a private account enough on its own?", listenFor: "No. What's inside it still matters if someone gets access." },
              { q: "Who could look over your profile with you?", listenFor: "A parent, an older sibling or cousin, a trusted friend." }
            ],
            examples: [
              {
                kind: "list",
                title: "Two protections, together",
                items: [
                  "Who can see it: make the account private, and check who your followers actually are.",
                  "What's in it: leave out your school, birthday, phone number, and live location.",
                  "Photos: check the background for school uniforms, house numbers, and street signs."
                ]
              },
              {
                kind: "ladder",
                title: "Write a safer bio",
                situation: "Your new profile bio.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Ananya | Class 9, [school name] | Born 3 March | Delhi\"", note: "School, age, birthday and city. A stranger could sound like they already know you." },
                  { label: "Clear", strength: 2, text: "\"Ananya | Delhi\"", note: "Much less to go on." },
                  { label: "Strong", strength: 3, text: "\"Ananya ✨ books, badminton, bad jokes\"", note: "Shows who you are, not where to find you." }
                ]
              }
            ],
            story: {
              body: "Before making her first account, Nisha asked her older cousin to look it over with her. Her cousin spotted the school logo on her blazer in two photos, and the name of her apartment building in another. Nisha swapped the photos. It took ten minutes.",
              question: "Why was a second pair of eyes so useful?"
            },
            practice: {
              title: "Stranger's-eye view",
              steps: [
                "Work as a team.",
                "Make up a profile for a fake student: a bio and three photo descriptions.",
                "Swap with another team. List everything a stranger could learn, and suggest one fix for each."
              ],
              rounds: [{ label: "Make it", seconds: 90 }, { label: "Swap and check", seconds: 90 }]
            },
            exitCheck: "How sure are you about what a stranger can learn from your profile?",
            mission: "This week, look at your own profile the way a stranger would. Remove or hide one thing they don't need to know."
          }
        },
        {
          id: "someone-new-who-gets-it",
          title: "Someone New, Who Gets It",
          hook: "Someone you've never met in person messages you online. They're easy to talk to, remember small details about your life, and tell you that you're different from everyone else you know.",
          predictionPrompts: [
            "What does 'you're different from everyone else' actually do to how much you trust someone?",
            "Is there anything wrong with this friendship yet? How would you know either way?"
          ],
          choices: [
            { id: "A", text: "Keep talking. It feels genuinely nice to be understood.", dcera: { D: 2, C: 2, E: 3, R: 1, A: 2 }, reason: "This makes sense. Early attention like this feels good. But you haven't actually thought about it yet, just accepted it." },
            { id: "B", text: "Tell a close friend about this new person, just to have someone else know.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "You don't have to decide anything about this person yet, but now you're not carrying it alone." },
            { id: "C", text: "Ask the person more about themselves, like where they actually go to school and who their friends are.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "This tests their story instead of just accepting it. That's the real skill here, not suspicion for its own sake." },
            { id: "D", text: "Stop responding without any explanation.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "This ends the conversation, but you don't learn anything that would help you spot the same pattern next time." },
            { id: "E", text: "Keep talking, but avoid telling them anything specific about your daily routine.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 4 }, reason: "A reasonable way to be careful. But it protects information more than it tells you about the relationship itself." },
            { id: "F", text: "Tell a parent or trusted adult about this new friendship, even though nothing seems wrong yet.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Makes it normal to involve an adult early, before anything is clearly wrong. It's the easiest way not to carry this alone." }
          ],
          consequences: {
            A: "The conversation continues to feel good, and you don't yet have anything concrete to weigh it against.",
            B: "Your friend doesn't have a strong reaction either way, but now someone else knows this exists.",
            C: "The answers are vague or don't quite add up, which is useful information either way.",
            D: "The account tries a few more times, then moves on to someone else.",
            E: "The friendship continues, but you've kept a layer of information between you and someone you don't actually know yet.",
            F: "The adult doesn't overreact. They ask a few questions and suggest keeping an eye on it together. It feels much less dramatic than you expected."
          },
          concept: "'You're different from everyone else' feels like being truly seen. But it's also one of the most common opening lines in exactly the kind of relationship this module is about. Feeling true and being used are not opposites.",
          takeaway: "What's a question you could ask early on that would tell you a lot about whether someone is being honest with you?",
          lesson: {
            goal: "Students learn that feeling understood quickly can be real or can be a tactic, and practice testing a new online friend's story and keeping an adult in the loop early.",
            skills: ["Critical thinking", "Self-awareness"],
            focus: ["R", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Students may feel embarrassed if they recognize a current online friendship here. Keep the tone free of blame. If a student shares worries about a real online contact, thank them and tell the counselor the same day.",
            prompts: [
              { q: "What does \"you're different from everyone else\" do to how much you trust someone?", listenFor: "It feels special, so you trust them faster." },
              { q: "Is there anything wrong with this friendship yet?", listenFor: "Not necessarily. That's why noticing and checking matter." },
              { q: "Why tell an adult when nothing seems wrong?", listenFor: "It's easier early, and you're not alone if things change." }
            ],
            examples: [
              {
                kind: "list",
                title: "Questions that test a story",
                items: [
                  "\"Which school do you go to? Who do you know there?\"",
                  "\"Do we have any friends in common I could ask about you?\"",
                  "\"Why do you want to talk to me, out of everyone online?\""
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If they really understand you, they must be genuine.", fact: "Feeling understood is real. But people who want something can learn to say exactly the right things." },
                  { myth: "Telling an adult means you think something's wrong.", fact: "It just means someone else knows. That's normal, and it's easiest early." },
                  { myth: "You'd definitely know if someone was fake.", fact: "Fake profiles can be very convincing. Checking someone's story is a skill, not paranoia." }
                ]
              }
            ],
            story: {
              body: "Ira met someone online who loved the same band, remembered her exam dates, and said she was more mature than girls her age. She told her elder sister, \"There's someone I've been talking to.\" Her sister asked one question: \"Do you have any friends in common?\" They didn't, and his story about his school didn't match the school's website. Ira stopped replying.",
              question: "What made her sister's question so useful?"
            },
            practice: {
              title: "Notice the moves",
              steps: [
                "Work as a team.",
                "Write three things a new online friend might say that feel nice but could also be a tactic, like \"Nobody gets you like I do.\"",
                "Next to each one, write a question you could ask, or a person you could tell."
              ],
              rounds: [{ label: "Write them", seconds: 90 }]
            },
            exitCheck: "How confident are you that you'd notice an online friendship moving too fast?",
            mission: "This week, think of one adult you'd tell about a new online friend, even if nothing seemed wrong. You don't have to tell anyone who."
          }
        },
        {
          id: "the-secret-between-us",
          title: "The Secret Between Us",
          hook: "An online friend asks you not to mention them to your parents or your usual friends. They say it's 'just between us,' and that other people wouldn't get it.",
          predictionPrompts: [
            "What's the actual reason a healthy friendship would need to be secret?",
            "What does 'other people wouldn't get it' assume about the people who love you?"
          ],
          choices: [
            { id: "A", text: "Agree to keep it private. It feels special to have something just for the two of you.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Secrecy is one of the clearest signs of an unhealthy relationship. Agreeing to it removes the people most likely to notice a problem." },
            { id: "B", text: "Tell them you're not comfortable keeping people in your life secret from each other.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "This names the real concern directly and tests how the relationship responds to a real boundary." },
            { id: "C", text: "Keep it secret for now, but mention it to one trusted friend privately.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 4 }, reason: "Keeps a safety net in place without needing a confrontation right away." },
            { id: "D", text: "Ask them directly why it needs to be a secret at all.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Asks the question a healthy relationship should have an easy answer to." },
            { id: "E", text: "Stop talking to them without any explanation.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "This removes the immediate risk, but you never learn why the request was a warning sign in the first place." },
            { id: "F", text: "Tell a parent or trusted adult about the request for secrecy.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "When someone asks you to keep a relationship secret from the adults in your life, that's exactly the kind of thing worth telling one of them about." }
          ],
          consequences: {
            A: "The secrecy becomes normal. It gets harder to bring up later, even if you wanted to.",
            B: "Their response tells you something real. Either they respect it, or they push back, and either way you learn something.",
            C: "You get a second perspective without fully breaking the secrecy, which gives you somewhere to go if something feels off later.",
            D: "The answer, or the lack of one, tells you something too.",
            E: "This relationship ends, but you never learn how to recognize the same pattern next time.",
            F: "The adult recognizes the request for what it is and helps you think through what to do next."
          },
          concept: "A request for secrecy is rarely about making the relationship special. It's usually about removing the people most likely to notice something's wrong.",
          takeaway: "Who in your life would you actually want to know about a new friendship like this?",
          lesson: {
            goal: "Students learn that a request to keep a friendship secret from family and friends is a warning sign, and practice a clear response and telling a trusted adult.",
            skills: ["Critical thinking", "Decision making"],
            focus: ["R", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student says someone online has asked them to keep things secret from family, take it seriously. Thank them, don't ask for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "Why would a healthy friendship need to be secret?", listenFor: "It wouldn't. Surprises are fine. Secrets from everyone who cares about you aren't." },
              { q: "What does \"they wouldn't get it\" assume about your family?", listenFor: "That they're against you. It cuts you off from help." },
              { q: "What's the difference between a surprise and a secret?", listenFor: "A surprise ends happily, and soon. A secret is meant to stay hidden." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Answer the request",
                situation: "\"Don't tell your parents about me, okay? They wouldn't get it. This is just between us.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Okay, I won't.\"", note: "Now the people most likely to notice a problem are cut out." },
                  { label: "Enough", strength: 3, text: "\"I don't keep people in my life secret from my family.\"", note: "A clear boundary. How they respond tells you a lot." },
                  { label: "Enough, and telling", strength: 3, text: "\"I don't keep secrets like that.\" (Then telling a parent or trusted adult about the request.)", note: "The boundary, plus someone on your side." }
                ]
              },
              {
                kind: "list",
                title: "Secret or surprise?",
                items: [
                  "A surprise is fun, and everyone finds out soon, like a birthday party.",
                  "A secret is meant to stay hidden, especially from the people who look after you.",
                  "Anyone who asks you to keep them secret from your family is asking for a secret, not a surprise."
                ]
              }
            ],
            story: {
              body: "An online friend kept telling Pooja, \"Your parents are too strict. Let's keep this between us.\" Pooja mentioned it to her school counselor, almost as a joke. The counselor didn't laugh or panic. She said, \"That request is a warning sign. Let's look at it together.\" Pooja says that was the moment it stopped feeling special and started feeling off.",
              question: "Why did the counselor's calm reaction matter?"
            },
            practice: {
              title: "Write the boundary",
              steps: [
                "Work as a team.",
                "Write a short reply to \"don't tell your parents about me,\" in your own words.",
                "Add one kind of adult you could tell: a parent, an aunt, a teacher, the counselor. Share your reply."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How sure are you that you'd recognize a request for secrecy as a warning sign?",
            mission: "This week, notice the difference between surprises and secrets around you. If anyone ever asks you to hide a friendship from your family, tell a trusted adult."
          }
        },
        {
          id: "everyones-doing-it-kind-of",
          title: "Everyone's Doing It, Kind Of",
          hook: "In your friend group's private chat, people are sharing screenshots of conversations with people they've met online, half-joking about who's 'talking to someone.' You don't want to be the only one who says nothing.",
          predictionPrompts: [
            "What's the difference between sharing for fun and sharing because something feels off?",
            "Would you actually know if a friend's 'someone online' was a real concern?"
          ],
          choices: [
            { id: "A", text: "Share something too, just to keep up with the group.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This shares information to match the group's mood, not because it's the right call." },
            { id: "B", text: "Stay quiet and let the conversation move on.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This avoids awkwardness, but you miss the chance to actually check in on a friend." },
            { id: "C", text: "Ask a friend privately how their own online conversation is actually going.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "Turns a group joke into an actual one-on-one check-in, which is where the real information usually is." },
            { id: "D", text: "Bring up, generally, some of the warning signs you've heard about.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "Takes a small social risk to say something useful, even if not everyone's listening." },
            { id: "E", text: "Screenshot the conversation in case it becomes useful information later.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 3 }, reason: "An easy precaution to take, though it doesn't address anything happening right now." },
            { id: "F", text: "Tell a parent, teacher, or counselor what you're noticing in the group chat, even generally.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "You don't have to name anyone. This just makes sure an adult who could help knows something's being discussed." }
          ],
          consequences: {
            A: "You share more than you meant to, mostly to match the group's energy rather than because you chose to.",
            B: "The moment passes without incident, but nobody actually checked in on anyone.",
            C: "Your friend either reassures you it's fine, or you notice something in how they answer that gives you pause.",
            D: "A couple of people roll their eyes, but at least one person seems to actually be listening.",
            E: "It doesn't change anything about the conversation itself, though it could matter later if something did turn out to be wrong.",
            F: "The adult doesn't need names to start reminding people what to watch for. Now they're ready to help if something comes up."
          },
          concept: "Friend group joking about 'talking to someone online' is often the only moment a warning sign ever comes up. Most of it passes by exactly like this, as a joke nobody follows up on.",
          takeaway: "Has a joke in a group chat ever turned out to be about something real?",
          lesson: {
            goal: "Students practice turning a group-chat joke into a real one-on-one check-in, and learn they can tell an adult about a worry without naming anyone.",
            skills: ["Empathy", "Interpersonal relationships"],
            focus: ["E", "D"],
            needs: "The smartboard. Paper and a pen for each pair.",
            careNote: "If a student is worried about a specific friend's online contact, they don't have to name the friend in class. Invite them to talk privately, and tell the counselor.",
            prompts: [
              { q: "Why do worries come up as jokes?", listenFor: "It feels safer. You can test the reaction without committing." },
              { q: "How would you know if a friend's \"someone online\" was a real concern?", listenFor: "Secrecy, gifts, pressure, changes in mood. Ask privately." },
              { q: "Can you tell an adult without getting a friend in trouble?", listenFor: "Yes. You can speak generally, and the adult can help carefully." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Check in privately",
                situation: "After the group chat, you message your friend on her own.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"lol so who's your mystery guy 👀\"", note: "Keeps it a joke, so she'll answer like it's a joke." },
                  { label: "Clear", strength: 2, text: "\"Is the online guy legit?\"", note: "Direct, but it can sound like you're judging her." },
                  { label: "Strong", strength: 3, text: "\"Hey, just checking. How's it going with the person you've been talking to? You can tell me anything, no judgement.\"", note: "Private and warm, and it makes it easy to say if something feels off." }
                ]
              },
              {
                kind: "list",
                title: "Worth a second look",
                items: [
                  "They want it kept secret.",
                  "They give gifts, money, or phone recharges.",
                  "They ask for photos, or to meet somewhere they choose.",
                  "Your friend seems worried or jumpy, or can't put her phone down."
                ]
              }
            ],
            story: {
              body: "In the group chat, everyone teased Riya about her \"online boyfriend.\" Later, Neha messaged her on her own: \"Just checking, is it all okay with him?\" Riya replied, \"Honestly, he's been asking for photos and I don't know what to do.\" Neha went with her to the counselor the next morning.",
              question: "Why did Riya tell Neha the truth, but not the group?"
            },
            practice: {
              title: "The private message",
              steps: [
                "Get into pairs.",
                "Together, write the private message you'd send to a friend who's been joking about \"someone online.\" Keep it warm, with no judgement.",
                "Then write what you'd say if she told you something felt wrong. Share one line."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could check in on a friend privately?",
            mission: "This week, send one friend a message that's just a check-in: \"How are you actually doing?\""
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Reading the Pattern",
      scenarios: [
        {
          id: "message-decoder",
          title: "Message Decoder",
          hook: "You've been messaging with someone online for a few weeks. It started with compliments about how mature you are. Then they asked for photos, saying 'just between us.' Now they've said how upset they'd be if you 'suddenly stopped talking to them.'",
          predictionPrompts: [
            "Which part of this thread would you have flagged first, reading it as a stranger?",
            "What is each of those three moves actually trying to do?"
          ],
          choices: [
            { id: "A", text: "Reply and continue the conversation as normal.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This pattern (flattery, then a request, then guilt about pulling away) is a known sequence. Continuing treats it like nothing's wrong." },
            { id: "B", text: "Stop responding immediately, without saying anything.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 2 }, reason: "Stops the immediate conversation, but doesn't preserve evidence or bring in anyone who could help." },
            { id: "C", text: "Screenshot the whole thread before doing anything else.", dcera: { D: 4, C: 5, E: 2, R: 5, A: 3 }, reason: "This is the single most useful thing you can do on your own. Evidence doesn't disappear once it's saved somewhere else." },
            { id: "D", text: "Tell a parent, teacher, or counselor what's been happening.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "The most complete response. You get support, and someone with more experience and options is now involved." },
            { id: "E", text: "Confront them directly about the pattern you've noticed.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This makes sense, but engaging directly with a pressure tactic already in the messages can make it worse instead of ending it." }
          ],
          consequences: {
            A: "The pattern continues exactly as it has, since nothing about the dynamic has changed.",
            B: "This conversation ends, but the messages, and the pattern, aren't saved or reported anywhere.",
            C: "You now have a preserved, timestamped record, whatever you decide to do next.",
            D: "The adult can help you think through next steps, including whether this needs to go further. You're not carrying it alone anymore.",
            E: "It might end the conversation, but confronting someone using these tactics directly can also make the 'upset if you stop talking' pressure worse."
          },
          concept: "This exact pattern happens so often it has a name: flattery, then a request framed as 'just between us,' then guilt about pulling away. Recognizing it is a skill. It's not proof that anything about you invited it.",
          takeaway: "Which single message in that thread would you point to as the moment it stopped being just a conversation?",
          lesson: {
            goal: "Students learn to recognize a common grooming pattern (flattery, a \"just between us\" request, then guilt about pulling away) and practice the response: save the messages and tell a trusted adult.",
            skills: ["Critical thinking", "Decision making"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Keep everything general and non-graphic, as the scenario does. If a student recognizes this pattern in their own messages, thank them, don't ask for details in class, and tell the counselor the same day. Nobody should forward any images involved.",
            prompts: [
              { q: "Which message would you have flagged first?", listenFor: "Any of them. Earlier is better, but it's never too late." },
              { q: "What is each move trying to do?", listenFor: "Flattery builds trust. \"Just between us\" cuts you off. Guilt stops you leaving." },
              { q: "Why isn't confronting them the best move?", listenFor: "It can make the pressure worse. Save, step back, and tell an adult." }
            ],
            examples: [
              {
                kind: "list",
                title: "The pattern, step by step",
                items: [
                  "Flattery: \"You're so mature for your age.\"",
                  "Secrecy: \"Just between us. Don't tell anyone.\"",
                  "A request: photos, personal information, or meeting up.",
                  "Guilt: \"I'd be so upset if you stopped talking to me.\""
                ]
              },
              {
                kind: "list",
                title: "What to do",
                items: [
                  "Don't reply to the request.",
                  "Screenshot the messages, the username, and the dates. Don't forward any images.",
                  "Tell a parent, teacher, or the counselor. You won't be in trouble."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If you replied at first, it's partly your fault.", fact: "It's never your fault. This pattern is designed to work on anyone." },
                  { myth: "Feeling guilty means you owe them a reply.", fact: "The guilt is part of the pattern. You don't owe anyone a reply." }
                ]
              }
            ],
            story: {
              body: "Megha's friend showed her a chat that had started with \"you're so mature\" and had become \"send me a pic, just between us.\" Megha said, \"That's the exact pattern from life skills class.\" They screenshotted the messages together, and her friend told her mum that evening. Her mum reported the account the same night.",
              question: "What did knowing the pattern change for them?"
            },
            practice: {
              title: "Message Decoder",
              steps: [
                "Work as a team.",
                "Write a made-up, non-graphic message thread of four short messages that follows the four-step pattern.",
                "Swap with another team. Label each message: flattery, secrecy, request, or guilt. Then write the first thing you'd do."
              ],
              rounds: [{ label: "Write it", seconds: 90 }, { label: "Swap and decode", seconds: 90 }]
            },
            exitCheck: "How confident are you that you'd recognize this pattern in a real conversation?",
            mission: "This week, save the number of one adult you'd go to if something online felt wrong, somewhere easy to find."
          }
        },
        {
          id: "the-ask-that-changed",
          title: "The Ask That Changed",
          hook: "Someone you've been talking to online for a while has always been easy to talk to. Now they ask for something you're not comfortable with: a photo, personal information, or to meet up somewhere they choose. It's the first time they've asked for anything like this.",
          predictionPrompts: [
            "Does how long you've known someone online change what a reasonable request looks like?",
            "What does saying no, once, actually tell you about them?"
          ],
          choices: [
            { id: "A", text: "Go along with it. You've trusted them this far.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "The first request that gets a yes tends not to be the last, or the biggest." },
            { id: "B", text: "Say no clearly, and see how they respond.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "A direct no is a real test. Most healthy relationships handle it just fine." },
            { id: "C", text: "Say no, and immediately tell a trusted adult about the conversation.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "Combines the boundary with support, instead of finding out alone how they react." },
            { id: "D", text: "Make an excuse instead of a direct no.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids the direct confrontation, but doesn't close the door the way a clear no does." },
            { id: "E", text: "Ask them to explain why they're asking for this now.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "A reasonable question, though it delays actually answering the request either way." }
          ],
          consequences: {
            A: "The request is met, and it becomes easier for the next request to be a little bigger than this one.",
            B: "Their reaction, respect or pressure, tells you something real about what this relationship actually is.",
            C: "You get support immediately, before finding out on your own how they respond to being told no.",
            D: "The excuse might work for now, but it leaves the door open for the same ask again, framed differently.",
            E: "The explanation, or the lack of a good one, tells you something useful."
          },
          concept: "The first uncomfortable ask in an online relationship is rarely random. It's usually a test to see what you'll accept, and each yes tends to make the next ask easier.",
          takeaway: "What's a way of saying 'no' to someone you've talked to for months, that you'd actually feel able to use?",
          lesson: {
            goal: "Students learn that a first uncomfortable request is often a test, and practice a clear no paired with telling a trusted adult.",
            skills: ["Decision making", "Self-awareness"],
            focus: ["R", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Never role-play this request in class. If a student says they've been asked for photos, personal details, or to meet up, thank them, don't ask for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "Does knowing someone for months make a request like this okay?", listenFor: "No. Time spent chatting isn't the same as trust earned." },
              { q: "What does their reaction to a no tell you?", listenFor: "If they respect it, fine. Pressure or guilt means it's a pattern." },
              { q: "Why combine a no with telling an adult?", listenFor: "So you're not alone when you find out how they react." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "A clear no",
                situation: "\"We've been talking for months. You can trust me. Just send one photo.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Maybe later...\"", note: "It sounds like a yes is coming, so they'll ask again." },
                  { label: "Enough", strength: 3, text: "\"No.\"", note: "A no is a complete answer. You don't owe a reason." },
                  { label: "Enough, with support", strength: 3, text: "\"No.\" (Then telling a trusted adult about the request.)", note: "The boundary, plus someone on your side before you see how they react." }
                ]
              },
              {
                kind: "list",
                title: "If someone from online wants to meet",
                items: [
                  "The safest choice is not to meet someone you only know online.",
                  "If it ever happens, a parent or trusted adult must know first, and come with you.",
                  "Never go somewhere they choose, and never go alone."
                ]
              }
            ],
            story: {
              body: "After four months of chatting, the person Tanvi talked to online asked to meet at a café near the bus depot and told her not to \"make it a big deal.\" Tanvi said no, and told her aunt the same day. Her aunt helped her block and report the account. Two days later the profile was deleted, and its photo turned out to belong to someone else.",
              question: "What did telling her aunt the same day give Tanvi?"
            },
            practice: {
              title: "No, plus one",
              steps: [
                "Work as a team. This one is written, not acted out.",
                "Write a clear no to an uncomfortable request, in one line.",
                "Add the one adult you'd tell, and how you'd start that conversation. Share your first line."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How sure are you that you'd say no, and tell someone, if a request like this came?",
            mission: "This week, write down your own one-line no, in words you'd actually use. Keep it somewhere private."
          }
        },
        {
          id: "if-i-tell-what-happens",
          title: "If I Tell, What Happens?",
          hook: "Something's been happening online that you know isn't right, but you haven't told anyone. You keep picturing what happens if you say something: the questions, maybe having your phone taken away, maybe people finding out.",
          predictionPrompts: [
            "What actually happens when someone tells a trusted adult, compared to what you're picturing?",
            "Whose fault is this, actually? Does the fear match that answer?"
          ],
          choices: [
            { id: "A", text: "Keep it to yourself and hope it resolves on its own.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Silence is what usually lets situations like this continue. It's the one thing that reliably makes things worse." },
            { id: "B", text: "Tell a friend, but ask them not to tell anyone else.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Shares the weight, but a friend your age usually can't actually change what's happening." },
            { id: "C", text: "Tell a parent, teacher, or school counselor directly.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "The response most likely to actually change the situation. Trusted adults exist for exactly this." },
            { id: "D", text: "Write it down somewhere without telling anyone yet.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 3 }, reason: "A real step toward processing it, even though nothing external has changed yet." },
            { id: "E", text: "Look up what actually happens when someone reports something like this, before deciding.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 5 }, reason: "Replaces imagined fear with real information, which often makes the next step easier to actually take." }
          ],
          consequences: {
            A: "The situation doesn't usually resolve on its own. It typically continues until someone else gets involved.",
            B: "Your friend now carries something heavy alone too, and the situation still hasn't reached anyone who can actually help.",
            C: "A good first response from a trusted adult sounds close to: \"Thank you for telling me. I'm glad you did. You're not in trouble.\" The fear of their reaction is usually worse than the reaction itself.",
            D: "It's a real first step, though the situation still doesn't have anyone actively helping yet.",
            E: "You find real information about the actual process: how to save evidence, who gets involved, what happens next, before deciding."
          },
          concept: "Nothing that's happened to you makes you stupid or bad. This is a pattern designed to work on anyone. It's not something you should have seen coming. Telling someone is what actually changes what happens next. Almost every trusted adult reacts with relief that you told them, not anger.<br><br><b>If you ever need it:</b> Childline India — 1098 (24&#47;7) · Cybercrime helpline — 1930 (24&#47;7) · iCall (TISS) — 9152987821 · Delhi Women's Helpline — 181. You don't need to already know what to say.",
          takeaway: "Who is one specific adult you'd actually go to first, if you needed to?",
          lesson: {
            goal: "Students replace imagined fears about telling with what really happens, learn that it's never their fault, and know which adults and helplines they can turn to.",
            skills: ["Coping with stress", "Decision making"],
            focus: ["R", "A"],
            needs: "The smartboard.",
            careNote: "This lesson may prompt a real disclosure, during class or after it. Respond the way the scenario describes: \"Thank you for telling me. I'm glad you did. You're not in trouble.\" Don't ask for details in front of others, don't promise to keep it secret, and tell the counselor the same day.",
            prompts: [
              { q: "What are people most afraid of when they think about telling?", listenFor: "Getting in trouble, losing their phone, people finding out, being blamed." },
              { q: "Whose fault is it, really?", listenFor: "Never the person it happened to." },
              { q: "What should a good first response from an adult sound like?", listenFor: "\"Thank you for telling me. You're not in trouble.\"" }
            ],
            examples: [
              {
                kind: "mythfact",
                title: "Fear or fact",
                items: [
                  { myth: "You'll get in trouble for what happened.", fact: "You won't. Telling is the right thing to do, and the adult's job is to help." },
                  { myth: "Everyone will find out.", fact: "A trusted adult or counselor shares only what's needed to keep you safe." },
                  { myth: "It's your fault for replying.", fact: "It's never your fault. These patterns are designed to work on anyone." }
                ]
              },
              {
                kind: "list",
                title: "What usually happens when you tell",
                items: [
                  "The adult thanks you and stays calm.",
                  "Together, you save the messages and details.",
                  "They help decide the next steps: blocking, reporting, or school support.",
                  "You keep getting support. You're not handling it alone anymore."
                ]
              }
            ],
            story: {
              body: "Zoya kept a chat secret for weeks, sure her dad would take her phone and be angry. When she finally told her school counselor, the first thing she heard was, \"Thank you for telling me. You're not in trouble.\" The counselor helped her talk to her dad. He was upset, but at the other person, not at her.",
              question: "How was what happened different from what Zoya had imagined?"
            },
            practice: {
              title: "The first sentence",
              steps: [
                "Work as a team.",
                "Write three ways someone could start telling a trusted adult, like \"Can I talk to you about something that happened online?\"",
                "Read them out. Notice how short a first sentence can be."
              ],
              rounds: [{ label: "Write them", seconds: 90 }]
            },
            exitCheck: "How sure are you about who you'd go to, and what you'd say first?",
            mission: "This week, save one trusted adult's number in your phone, along with the helpline numbers from today's lesson."
          }
        },
        {
          id: "the-screenshot-you-kept",
          title: "The Screenshot You Kept",
          hook: "Something did go wrong in an online conversation, and you're now deciding what to actually do about it. You have some of the conversation saved, but not all of it.",
          predictionPrompts: [
            "What matters more right now: how it happened, or what to do next?",
            "What would you tell a friend to do, in this exact situation?"
          ],
          choices: [
            { id: "A", text: "Delete everything. You just want it to be over.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This makes sense. You want relief. But it removes any record if the situation isn't actually over." },
            { id: "B", text: "Save everything you still have access to, with dates if possible.", dcera: { D: 4, C: 5, E: 2, R: 5, A: 3 }, reason: "Evidence with timestamps and profile details is exactly what a cybercrime report or school response needs." },
            { id: "C", text: "Confront the person directly, on your own.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "A real risk to take alone, especially with someone who's already shown they'll cross a boundary." },
            { id: "D", text: "Tell a trusted adult and show them what you've saved.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "Combines saved evidence with real adult support. This is the option most likely to actually resolve things." },
            { id: "E", text: "Post about it publicly to warn others.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Posting publicly can feel like taking back control. But it often makes a formal report harder, and it isn't the same as actually resolving things." }
          ],
          consequences: {
            A: "The situation may genuinely be over, but there's no record if anything comes up again, or if the same person targets someone else.",
            B: "The evidence is saved, which matters for whatever comes next: a school response, a police report, or just having a clear record for yourself.",
            C: "It might end the conversation, but you're handling something serious entirely alone, without support if it escalates.",
            D: "The adult can help you decide what happens next: a school response, a formal report, or just support, with real evidence already in hand.",
            E: "It may raise awareness, but it can also alert the person involved, complicate any formal report, and put more of the situation in public than you may want."
          },
          concept: "Saving evidence isn't about proving anything to anyone yet. It's about making sure the record still exists, whenever you do decide to tell someone. You shouldn't have to handle the reporting step alone. A trusted adult can help you through the cybercrime helpline (1930) or the school's own process.",
          takeaway: "If a friend came to you with exactly this, what's the very first thing you'd tell them to do?",
          lesson: {
            goal: "Students learn what to save and what not to do after something goes wrong online, and that the reporting step happens with a trusted adult, not alone.",
            skills: ["Problem solving", "Decision making"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Saving messages, usernames, and dates helps. If any saved content includes sexual images, no one, students or staff, should forward or share it, even to report it. Tell the counselor, who can report through the proper channel, such as the cybercrime helpline (1930) or cybercrime.gov.in.",
            prompts: [
              { q: "Why is deleting everything tempting, and what's the risk?", listenFor: "You want it over. But the record disappears if it isn't over." },
              { q: "What's the problem with posting about it publicly?", listenFor: "It can alert them, and make a formal report harder." },
              { q: "Who should handle the reporting?", listenFor: "You and a trusted adult together. Not you alone." }
            ],
            examples: [
              {
                kind: "list",
                title: "Save this",
                items: [
                  "Screenshots of the messages, showing the dates and times.",
                  "The person's username, profile link, and any other accounts they used.",
                  "Anything they sent that asked for something or threatened you."
                ]
              },
              {
                kind: "list",
                title: "Don't do this",
                items: [
                  "Don't forward or share any images, not even with friends.",
                  "Don't confront them alone.",
                  "Don't post about it publicly before talking to an adult."
                ]
              }
            ],
            story: {
              body: "When an online conversation went badly wrong, Kavya's first instinct was to delete the whole chat. Her friend said, \"Wait. Screenshot the messages and his username first.\" Kavya did, then showed her mum. Because the account details were saved, her mum could report it properly, even after he deleted his profile.",
              question: "Why did the saved username matter so much?"
            },
            practice: {
              title: "Tell a friend what to do",
              steps: [
                "Work as a team.",
                "A friend messages you: \"Something went wrong online and I just want to delete everything.\" Write your reply in four short lines or fewer.",
                "Include what to save, what not to do, and who to tell. Then share it."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How clear are you on what to save, and who to go to, if something went wrong online?",
            mission: "This week, find out how to take a screenshot on your phone that shows the date and time. Hopefully you'll never need it."
          }
        }
      ]
    }
  }
};
