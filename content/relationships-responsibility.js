// Module: Relationships & Responsibility
// New module added 2026-08-18. Framing note (per explicit user decision):
// decision-readiness and responsibility, not a predetermined "don't date"
// conclusion — matches every other module's approach to personal choices.
// Handles consent/pressure scenarios in general terms, never graphic,
// appropriate for a school platform. Same schema: dcera + reason per choice.
//
// Lessons added 2026-10-23 (fifth module with lessons), same `lesson` shape
// as content/decision-making.js. Sensitive-module rules applied: every
// lesson has a care note; the photo-pressure and boundary lessons use
// written practice only (never role-play); trusted-adult and leaving options
// are framed as strong choices; a plain "No." is shown as complete, never as
// a weaker rung. `counselorLed: true` makes the teacher guide show a banner
// saying this module runs with the counselor or a trained teacher present.

const MODULE_RELATIONSHIPS_RESPONSIBILITY = {
  id: "relationships-responsibility",
  title: "Relationships & Responsibility",
  counselorLed: true,
  coreIdea: "Wanting a relationship and being ready for what it actually asks of you are two different questions. Only one of them gets answered by dating.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · What Does \"Together\" Actually Mean?",
      scenarios: [
        {
          id: "everyones-getting-into-something",
          title: "Everyone's Getting Into Something",
          hook: "A lot of your friends have started dating this term. Someone asks you out. You're not sure you even like them that way, but it feels like everyone else is doing it.",
          predictionPrompts: [
            "What are you really being asked? To like this person, or just to keep up with everyone else?",
            "What happens a few weeks later if you say yes for the wrong reason?"
          ],
          choices: [
            { id: "A", text: "Say yes, mostly so you're not the only one left out.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 2 }, reason: "This answers the social pressure, not the real question: do you actually want this?" },
            { id: "B", text: "Say no, honestly, even if it feels awkward.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 3 }, reason: "It costs a little comfort, but it's the one answer that's actually true." },
            { id: "C", text: "Say you need time to think about it.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Time is the one thing you actually have here. Use it before you commit to something you're not sure about." },
            { id: "D", text: "Ask them what \"together\" would actually mean to them.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This gets at the real question everyone skipped: what would this actually involve? Ask it before either of you says yes." },
            { id: "E", text: "Say yes, but keep it low-key and see how it feels.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "It's technically a yes, but 'keeping it low-key' is really just a way to avoid the real question: do you want this?" }
          ],
          consequences: {
            A: "You go along with it. A few weeks in, you realize you agreed to something you weren't sure you wanted, just to keep up.",
            B: "It's a little awkward for a day. But it's honest, and you're not carrying around a 'yes' you didn't mean.",
            C: "They respect the pause, and you use it to actually figure out what you want instead of deciding on the spot.",
            D: "The question genuinely surprises them. They hadn't thought that far either, and the conversation gets more real.",
            E: "It's technically a yes, but 'keeping it low-key' mostly means avoiding the real question: do you want this?"
          },
          concept: "Wanting to fit in with your friends and wanting a specific relationship are two different feelings. At this age, it's easy to mix them up. The first feeling fades fast. The second one is the one actually worth checking for.",
          takeaway: "Next time, how would you tell the difference between the two?",
          lesson: {
            goal: "Students practice telling apart wanting to fit in and wanting a particular relationship, and saying an honest no or \"not yet\" kindly.",
            skills: ["Self-awareness", "Decision making"],
            focus: ["D", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Some students will feel left out or unsure, and some won't be interested in dating at all. Keep the message that every one of those is normal. Don't ask anyone about their own relationships in front of the class.",
            prompts: [
              { q: "What was really pushing the yes in this scenario?", listenFor: "Fitting in, not being left out. Name it as a normal feeling." },
              { q: "Is \"not yet\" a real answer?", listenFor: "Yes. Not being ready, or not being interested, is a complete answer." },
              { q: "What would a good reason to say yes look like?", listenFor: "Actually liking the person, wanting to spend time with them, and feeling no pressure." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it kindly",
                situation: "Someone asks you out. You're not sure you like them that way.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Umm, yeah, sure, I guess?\"", note: "A yes you don't mean is harder to undo later." },
                  { label: "Clear", strength: 2, text: "\"No, sorry.\"", note: "Honest, and allowed. It can just feel a little sharp." },
                  { label: "Strong", strength: 3, text: "\"Thanks for asking, that's really nice. But I don't feel that way, and I'd rather be honest.\"", note: "Kind and clear. It respects both of you." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "Everyone your age is dating.", fact: "Lots of people aren't, for lots of reasons. It only looks like everyone because those stories get talked about." },
                  { myth: "If you say no, you'll be left out.", fact: "Real friends don't drop you over who you date, or whether you date at all." },
                  { myth: "You should know right away if you like someone.", fact: "It's normal to need time, or not to be interested at all." }
                ]
              }
            ],
            story: {
              body: "When three of her friends started dating in the same month, Ananya felt like she was falling behind. When a classmate asked her out, she said, \"Can I think about it?\" A week later she realized she'd mostly wanted something to talk about with her friends. She said no kindly, and they stayed friends.",
              question: "What did the week of thinking give Ananya?"
            },
            practice: {
              title: "Two kinds of wanting",
              steps: [
                "Work as a team.",
                "Make two lists on paper: signs you want to fit in, and signs you actually like someone.",
                "Share one item from each list with the class."
              ],
              rounds: [{ label: "Make the lists", seconds: 90 }]
            },
            exitCheck: "How clear are you on the difference between fitting in and actually wanting something?",
            mission: "This week, notice one moment you did something mostly because others were doing it. It doesn't have to be about dating."
          }
        },
        {
          id: "the-constant-check-ins",
          title: "The Constant Check-Ins",
          hook: "Someone you're seeing always wants to know where you are. They get upset if you don't reply within minutes, and they've asked you to stop sitting with one of your friends.",
          predictionPrompts: [
            "Is this concern, or is it something else?",
            "What would you tell a friend if they described this exact thing happening to them?"
          ],
          choices: [
            { id: "A", text: "Go along with it. It's easier, and it feels like they just care a lot.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This treats controlling behavior like caring. Usually that means more control is coming, not less." },
            { id: "B", text: "Stop replying to them as much to create some space.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids confrontation, but doesn't actually test or address what's happening." },
            { id: "C", text: "Tell them directly this feels like too much control, not concern.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "This names the pattern directly. It's the only option that actually tells you something, either way." },
            { id: "D", text: "Ask a trusted adult or friend what they think about it.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 4 }, reason: "This brings in an outside view on something that's genuinely hard to see clearly when you're inside it." },
            { id: "E", text: "Break up immediately without explaining why.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "This ends the situation, but you don't get to find out if naming the behavior would have changed it." }
          ],
          consequences: {
            A: "The requests keep growing. First it was one friend, now it's several, and your world quietly gets smaller.",
            B: "The distance makes things worse. You get more messages asking where you were, not fewer.",
            C: "They either recognize it and dial back, or they get defensive. Either way, you find out something important fast.",
            D: "The adult names it clearly as controlling behavior, which makes it much easier to see what's actually happening.",
            E: "It ends the immediate issue, but you never get to test whether naming it directly might have changed anything."
          },
          concept: "'They just care a lot' and 'they're trying to control who I see' can look exactly the same from the inside. The real test isn't how it feels. It's whether your world gets bigger or smaller the longer it goes on.",
          takeaway: "To you, what would 'checking in' look like if it felt like care instead of control?",
          lesson: {
            goal: "Students learn to tell care from control with one test (does your world get bigger or smaller?), and that asking a trusted adult is a good first step, not a last resort.",
            skills: ["Critical thinking", "Interpersonal relationships"],
            focus: ["R", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student describes this happening to them or a friend (tracking, being cut off from friends, threats, or anger when they don't reply), thank them, don't ask for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "Would you call this care or control if it happened to a friend?", listenFor: "Control. It's often easier to see from the outside." },
              { q: "Why does it feel like care from the inside?", listenFor: "They seem worried. The attention feels flattering. It starts small." },
              { q: "What's the test that works every time?", listenFor: "Is my world getting bigger or smaller?" }
            ],
            examples: [
              {
                kind: "list",
                title: "Care sounds like",
                items: [
                  "\"Let me know you got home okay.\"",
                  "\"Have fun with your friends!\"",
                  "\"No worries if you're busy. Talk later.\""
                ]
              },
              {
                kind: "list",
                title: "Control sounds like",
                items: [
                  "\"Why didn't you reply in five minutes?\"",
                  "\"I don't like you hanging out with her.\"",
                  "\"Send me your location. If you loved me, you would.\""
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "Jealousy shows how much someone loves you.", fact: "Some jealousy is normal. Trying to control who you see is not." },
                  { myth: "Telling an adult means you're overreacting.", fact: "Asking for an outside view is smart. These patterns are hard to see from inside." }
                ]
              }
            ],
            story: {
              body: "Tanya's best friend kept saying she was \"too busy\" to hang out. Then Tanya noticed her friend replied to her boyfriend within seconds, every time, even in class. When Tanya gently asked, her friend admitted he got upset if she didn't. Tanya said, \"That doesn't sound okay. Want to talk to the counselor with me?\" They went the next day.",
              question: "What did Tanya notice from the outside that her friend couldn't see?"
            },
            practice: {
              title: "Care or control?",
              steps: [
                "Work as a team.",
                "Write five short messages a partner might send. Mix caring ones and controlling ones.",
                "Swap with another team. Sort their messages into care or control, and explain one of them."
              ],
              rounds: [{ label: "Write them", seconds: 90 }, { label: "Swap and sort", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could tell care from control?",
            mission: "This week, think of one adult you could talk to if a relationship ever felt controlling, yours or a friend's. You don't have to tell anyone who."
          }
        },
        {
          id: "the-homework-that-didnt-get-done",
          title: "The Homework That Didn't Get Done",
          hook: "You've been spending most evenings texting or video-calling someone you're seeing. Your grades are slipping, and your parents have noticed.",
          predictionPrompts: [
            "What would 'balance' actually look like here, specifically?",
            "What happens if you don't deal with this for another month?"
          ],
          choices: [
            { id: "A", text: "Keep going as is. It'll balance out eventually.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This avoids the real decision. The gap between the two priorities just keeps growing." },
            { id: "B", text: "Cut off contact with them almost entirely to fix your grades.", dcera: { D: 3, C: 3, E: 1, R: 3, A: 2 }, reason: "This fixes the grades, but it treats the relationship as something to throw away, not something to actually manage." },
            { id: "C", text: "Set specific times for talking, separate from homework time.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Tests whether both things can coexist with real structure, instead of assuming they can't." },
            { id: "D", text: "Tell your parents everything is fine and hope they stop noticing.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This buys a little time, but the gap between what you said and what's true usually comes out anyway." },
            { id: "E", text: "Talk to your parents honestly about what's going on.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "Costs an uncomfortable conversation, but brings in people who can actually help you figure out the balance." }
          ],
          consequences: {
            A: "The slide continues, and by the time you decide to act, there's more to catch up on than there would have been.",
            B: "Grades recover, but the sudden cutoff feels harsh and unexplained to the other person.",
            C: "Both things get some space. It's not perfect, but grades stabilize and the relationship doesn't just disappear.",
            D: "Your parents notice the gap between what you said and what's actually happening, and trust takes a hit.",
            E: "It's an uncomfortable conversation, but your parents help you think through it instead of just reacting to a grade report."
          },
          concept: "The problem was never that a relationship and schoolwork can't mix. It's that neither one gets structure unless you decide to give it some.",
          takeaway: "What would 'set times' actually look like for you, specifically?",
          lesson: {
            goal: "Students practice giving two important things real structure, with set times and an honest conversation at home, instead of letting one quietly crowd out the other.",
            skills: ["Decision making", "Problem solving"],
            focus: ["C", "A"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Some students can't talk to their family about relationships, for cultural or safety reasons. Respect that, and point them to the counselor as another trusted adult.",
            prompts: [
              { q: "What would \"balance\" look like here, in actual hours?", listenFor: "Specific times. Vague plans don't change anything." },
              { q: "Why is telling your parents \"everything's fine\" risky?", listenFor: "They can see the marks. The gap between the story and the truth costs trust." },
              { q: "If talking to family feels impossible, who else could help?", listenFor: "The counselor, an older sibling, a teacher you trust." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: one school evening",
                intro: "A weekday evening, 5 pm to 10 pm. That's five hours.",
                rows: [
                  { label: "Homework and revision", value: "2 hours", tone: "good" },
                  { label: "Talking or video calls", value: "45 minutes", tone: "good" },
                  { label: "Dinner and family", value: "1 hour" },
                  { label: "Free time, rest, getting ready for bed", value: "1 hour 15 minutes" }
                ],
                note: "Nothing here is the \"right\" amount. The point is that each thing gets its time on purpose."
              },
              {
                kind: "ladder",
                title: "Talk to your parents",
                situation: "Your parents ask why your marks have dropped.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Everything's fine. The tests were just hard.\"", note: "It buys a week. Then the next report arrives." },
                  { label: "Clear", strength: 2, text: "\"I've been distracted. I'll fix it.\"", note: "Honest, but they still don't know how to help." },
                  { label: "Strong", strength: 3, text: "\"I've been spending too many evenings on my phone. I want to set fixed study times. Can you help me stick to them?\"", note: "Honest about what's happening, with a plan they can support." }
                ]
              }
            ],
            story: {
              body: "Rohan was on video calls with his girlfriend until midnight most nights, and his maths marks dropped. They agreed on a rule: calls from 9 to 9:30, then phones off. The first week felt strange. By the next test his marks were back up, and the calls felt better because they weren't squeezed in between homework.",
              question: "Why did the calls feel better once they had a set time?"
            },
            practice: {
              title: "Plan the evening",
              steps: [
                "Work as a team.",
                "Plan one school evening for a student who wants time for studying, family, friends, and someone they're seeing.",
                "Give every hour from 5 pm to 10 pm a job. Share one choice your team argued about."
              ],
              rounds: [{ label: "Plan it", seconds: 90 }]
            },
            exitCheck: "How sure are you that you could set real limits when something starts taking over your time?",
            mission: "This week, pick one evening and decide in advance when you'll study and when you'll be on your phone. See if you stick to it."
          }
        },
        {
          id: "just-this-once",
          title: "Just This Once",
          hook: "Someone you're seeing asks you to send a photo that you're not fully comfortable with. They say it's normal, that \"everyone does it.\"",
          predictionPrompts: [
            "Is 'everyone does it' actually true, or does it just feel true?",
            "A year from now, looking back, what would you want to have done?"
          ],
          choices: [
            { id: "A", text: "Send it to avoid an awkward moment.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Trades a real discomfort now for a real risk later, just to skip an awkward thirty seconds." },
            { id: "B", text: "Say no clearly, without over-explaining.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "A clear no, without over-explaining it, is what actually protects you here. It's also more respected than it feels like it will be." },
            { id: "C", text: "Ask why it matters to them so much.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Turns 'everyone does it' into something specific and checkable, instead of accepting it as a given." },
            { id: "D", text: "Change the subject and hope they drop it.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids the moment without resolving it, which usually means it returns." },
            { id: "E", text: "Send a joke instead of an actual answer.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 3 }, reason: "This deflects without deciding. The question doesn't go away just because you didn't answer it directly." },
            { id: "F", text: "Tell a parent, teacher, or counselor about the pressure you're getting.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Pressure like this can escalate. This is exactly the kind of thing a trusted adult can help you handle. You don't have to manage it alone." }
          ],
          consequences: {
            A: "It's sent. Now something you weren't comfortable with exists outside your control, not because you actually agreed with it, but just to avoid an awkward moment. Beyond how it feels, images like this carry real risks once they're out of your hands, for both people involved.",
            B: "There's a beat of awkwardness, and then it's over. A clear no is easier to respect than an unclear one.",
            C: "The answer reveals whether this is really about you, or about pressure they're passing along from somewhere else.",
            D: "The subject comes back up again later, since it was never actually addressed.",
            E: "It buys a moment, but the actual question is still sitting there unanswered.",
            F: "The adult takes it seriously, helps you figure out what to say and do next, and you're not carrying the pressure by yourself anymore."
          },
          concept: "'Everyone does it' is almost never actually true, and it's not a reason on its own. This also isn't just about one awkward moment. Images like this can have real consequences once they exist outside your control. That's exactly why a clear no matters more than it might feel like right now.",
          takeaway: "What's a clear, simple way to say no to something like this, one you'd actually feel comfortable using? And who could you tell if the pressure kept going?",
          lesson: {
            goal: "Students learn that a clear no is enough, that \"everyone does it\" isn't a reason, that these images carry real risks (including legal ones) for anyone under 18, and that telling a trusted adult is a strong choice.",
            skills: ["Decision making", "Critical thinking"],
            focus: ["R", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student says they've been asked for, sent, or received an image like this, thank them, don't ask for details in class, and tell the counselor the same day. No one should save, screenshot, or forward the image, even as evidence. Don't role-play this pressure in class. The practice below is written, not acted out.",
            prompts: [
              { q: "Is \"everyone does it\" true?", listenFor: "No. And even if it were, it isn't a reason." },
              { q: "Who controls a photo once it's sent?", listenFor: "Not you. It can be saved, shared, or used to pressure you later." },
              { q: "Who could you tell if the pressure kept going?", listenFor: "A parent, a teacher, the counselor, an older sibling. Telling is a strong move, not a weak one." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "A clear no",
                situation: "\"Come on, just one photo. Everyone does it.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Maybe later...\"", note: "It sounds like a yes is coming, so the pressure keeps going." },
                  { label: "Enough", strength: 3, text: "\"No.\"", note: "A no is a complete answer. You don't owe a reason." },
                  { label: "Enough, with a plan", strength: 3, text: "\"No, I'm not doing that. If you keep asking, I'll talk to someone about it.\"", note: "Also complete, with a next step if the pressure doesn't stop." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If it's just between the two of you, it's fine.", fact: "Once it's sent, you can't control where it goes. For anyone under 18, these images can be against the law to send or keep, even between students." },
                  { myth: "Saying no will end the relationship.", fact: "Someone who cares about you will accept a no. If they don't, that tells you something important." },
                  { myth: "Telling an adult will get you in trouble.", fact: "The person being pressured isn't the one in trouble. A trusted adult can help you make it stop." }
                ]
              }
            ],
            story: {
              body: "Aryan's partner kept asking for a photo, saying all their friends did it. He said no twice. When the reply was, \"Then you don't really care about me,\" he told his older cousin, who helped him see it was pressure, not love. Aryan ended the relationship that week, and says it was one of the clearest decisions he's ever made.",
              question: "What helped Aryan see it clearly?"
            },
            practice: {
              title: "Write the no",
              steps: [
                "Work as a team. This one is written, not acted out.",
                "Write a clear no to \"just one photo, everyone does it,\" plus one person you could tell if the pressure kept going.",
                "Read your no aloud. The class checks: is it short, clear, and free of excuses?"
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How sure are you that you'd know what to say, and who to tell, if this happened?",
            mission: "This week, think of the one adult you would tell if someone pressured you like this. You don't have to tell anyone who."
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Real Relationships, Real Trade-offs",
      scenarios: [
        {
          id: "when-it-ends",
          title: "When It Ends",
          hook: "A relationship you were serious about just ended, and you have a major exam in three days.",
          predictionPrompts: [
            "What does this feeling actually need right now, before you ask yourself to focus on something else?",
            "What's the difference between processing this and dwelling on it?"
          ],
          choices: [
            { id: "A", text: "Throw yourself completely into studying to avoid feeling anything.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Suppressing the feeling doesn't make it go away. It just moves it somewhere less visible, including into your exam performance." },
            { id: "B", text: "Take a day to actually process it, then get back to prepping.", dcera: { D: 5, C: 5, E: 3, R: 4, A: 5 }, reason: "This gives the feeling somewhere to go, before you ask yourself to focus on something else entirely." },
            { id: "C", text: "Reach out to your ex repeatedly, hoping to fix things before the exam.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Spends energy trying to reverse something instead of processing that it happened." },
            { id: "D", text: "Tell friends you're 'totally fine' while barely holding it together.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Pretending to be fine takes real energy, and it stops anyone from actually helping you." },
            { id: "E", text: "Talk to someone you trust about how you're actually doing.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "This doesn't undo the breakup, but it takes some of the weight off before the exam. That's the part you can actually do something about right now." }
          ],
          consequences: {
            A: "You get through some material, but you're distracted and retaining less than it looks like on the surface.",
            B: "You lose a day of prep time, but you go into the exam actually able to focus, instead of carrying it in unprocessed.",
            C: "The repeated outreach doesn't change the outcome, and now you're anxious about both the breakup and the exam.",
            D: "Pretending costs energy you needed elsewhere, and nobody around you realizes you could use some support.",
            E: "It doesn't fix the breakup, but naming it out loud takes some of the weight off before you have to focus on anything else."
          },
          concept: "A breakup doesn't pause just because you have somewhere else to be. The skill isn't ignoring it. It's giving it real space, so it doesn't quietly take over the space meant for something else.",
          takeaway: "What's your usual way of dealing with a big feeling right before you need to perform? Does it actually work?",
          lesson: {
            goal: "Students practice giving a big feeling real space before a big demand: naming it, talking to someone, and planning around it, instead of hiding it or chasing the other person.",
            skills: ["Coping with emotions", "Coping with stress"],
            focus: ["A", "D"],
            needs: "The smartboard.",
            careNote: "Breakups can hit hard. If a student seems unable to cope, or talks about not wanting to go on or about hurting themselves, treat it as serious. Stay with them, don't press for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "What does a breakup feeling need before you can focus?", listenFor: "To be felt, to be said out loud to someone, and some sleep." },
              { q: "What's the difference between processing and dwelling?", listenFor: "Processing has an end time. Dwelling just loops." },
              { q: "Who would you actually talk to?", listenFor: "A friend, a sibling, a parent, the counselor." }
            ],
            examples: [
              {
                kind: "list",
                title: "Three days before the exam: a plan",
                items: [
                  "Day 1: let it hurt. Talk to one person you trust. Sleep.",
                  "Day 2: study in short blocks with breaks. Mute their chat if seeing it pulls you back.",
                  "Day 3: light revision and an early night. The feeling can come with you. It doesn't have to drive."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If you're sad, you should just push through.", fact: "Feelings you push down tend to show up anyway, often at the worst time." },
                  { myth: "Talking about it makes it worse.", fact: "Saying it out loud to someone you trust usually makes it lighter." },
                  { myth: "Getting back together will fix the exam stress.", fact: "Chasing it adds a second worry on top of the first." }
                ]
              }
            ],
            story: {
              body: "Three days before her chemistry practical, Sana's relationship ended. She cried most of that evening and called her cousin. The next day she studied in 40-minute blocks and muted the chat. She went in tired but focused, and said afterward, \"Letting myself be sad first is what let me concentrate.\"",
              question: "Why did giving it a day help instead of hurt?"
            },
            practice: {
              title: "Advice to a friend",
              steps: [
                "Get into pairs.",
                "One of you describes a made-up friend whose relationship just ended before an exam. The other gives three pieces of advice.",
                "Swap, with a new situation: a friend who lost a big match, or whose plans fell through."
              ],
              rounds: [{ label: "Partner 1", seconds: 90 }, { label: "Partner 2", seconds: 90 }]
            },
            exitCheck: "How ready do you feel to handle a big feeling before something important?",
            mission: "This week, write down two people you could call when something big goes wrong. Keep the list somewhere you'll find it."
          }
        },
        {
          id: "the-version-of-you-they-wanted",
          title: "The Version of You They Wanted",
          hook: "Over the past few months, someone you're with has slowly started commenting on your friends, your clothes, and your plans. They always frame it as \"just an opinion.\" But you've noticed you do less of what you used to.",
          predictionPrompts: [
            "What's the difference between an opinion and a pattern?",
            "What would this look like from outside, to someone who cared about you?"
          ],
          choices: [
            { id: "A", text: "Keep adjusting. It's easier than having the conversation it would take not to.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Each adjustment feels small on its own. You can only see the pattern from far enough outside it, and that's exactly what's hard here." },
            { id: "B", text: "Bring specific examples to them directly and see how they respond.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Puts specific evidence in front of the actual person, instead of guessing at what they'd say." },
            { id: "C", text: "Quietly start doing the things you'd stopped doing again, without discussing it.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 4 }, reason: "A real test, though a quieter one. It shows you how flexible the relationship actually is, without a confrontation." },
            { id: "D", text: "Ask a friend who's known you a long time if they've noticed a change.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 4 }, reason: "Someone who's known you longer than this relationship has real, useful perspective on what's actually changed." },
            { id: "E", text: "End it without any conversation about why.", dcera: { D: 4, C: 3, E: 2, R: 5, A: 3 }, reason: "This ends a pattern that was already costing you real parts of your life. You don't need to fully figure out an isolating dynamic before deciding you're done with it." },
            { id: "F", text: "Talk to a school counselor or trusted adult about what's been happening.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "A pattern like this is genuinely hard to see clearly from inside it. Someone trained to spot it can help you name what's actually going on." }
          ],
          consequences: {
            A: "The adjustments keep compounding, and a year from now, a lot less of your life looks like it used to.",
            B: "Their response tells you a lot. Either they actually reflect on it, or they give you more reasons why your friends, clothes, or plans were the problem.",
            C: "It creates friction, but it also tests whether the relationship can hold you doing your own things again.",
            D: "The friend confirms what you'd started to suspect, and it's easier to trust once someone else has seen it too.",
            E: "It's over. You don't get a direct answer for why it was happening, but you also don't owe anyone a full investigation before choosing to leave.",
            F: "They help you see the pattern clearly, and having an adult's perspective makes it much easier to decide what to do next, whatever that turns out to be."
          },
          concept: "Isolation rarely arrives as one big moment. It arrives as a hundred small 'just an opinion' comments, each one too small on its own to be worth a fight, until the total adds up to something worth fighting for.",
          takeaway: "Who in your life would notice first, if this started happening to you?",
          lesson: {
            goal: "Students learn to spot slow isolation (small comments that add up), use outside views to see the pattern, and know that leaving or getting help are legitimate choices.",
            skills: ["Critical thinking", "Self-awareness"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student recognizes this pattern in their own relationship or a friend's, thank them, don't ask for details in class, and tell the counselor the same day. If anyone is afraid of how a partner will react to a breakup, the counselor should help them plan it safely.",
            prompts: [
              { q: "What's the difference between an opinion and a pattern?", listenFor: "One comment is an opinion. The same kind of comment again and again, shrinking your life, is a pattern." },
              { q: "Why is this so hard to see from the inside?", listenFor: "Each comment is small, and you adjust a little each time." },
              { q: "Is ending it without a big conversation allowed?", listenFor: "Yes. You don't owe anyone a full investigation before you leave." }
            ],
            examples: [
              {
                kind: "list",
                title: "Signs it's a pattern, not an opinion",
                items: [
                  "You've stopped seeing certain friends, and it wasn't your idea.",
                  "You check how they'll react before you choose your clothes or plans.",
                  "Friends or family say they've noticed you've changed.",
                  "The comments always come with \"just saying\" or \"it's only an opinion.\""
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If it were really bad, it would be obvious.", fact: "Controlling patterns usually start small and build slowly." },
                  { myth: "You have to explain yourself before you leave.", fact: "You don't. Ending something that's shrinking your life is reason enough." },
                  { myth: "Asking a friend if they've noticed anything is disloyal.", fact: "People who've known you longer can see changes you can't." }
                ]
              }
            ],
            story: {
              body: "Over a few months, Dev stopped wearing his favourite jacket, stopped playing football on Saturdays, and saw his old friends less. Each change came after a small comment from his girlfriend. When his friend Kunal said, \"You've gone quiet, man. Are you okay?\", Dev listed the changes out loud for the first time. Hearing them all together made the pattern obvious.",
              question: "Why did it only become obvious when Dev said everything together?"
            },
            practice: {
              title: "Spot the pattern",
              steps: [
                "Work as a team.",
                "Write a short made-up example where small comments add up over three months.",
                "Swap with another team. Find the moment it became a pattern, and write one thing a friend could say."
              ],
              rounds: [{ label: "Write it", seconds: 90 }, { label: "Swap and spot", seconds: 90 }]
            },
            exitCheck: "How confident are you that you'd notice if this started happening to you or a friend?",
            mission: "This week, do one thing you love that's fully yours: a hobby, a friend, a place. Do it once, just for you."
          }
        },
        {
          id: "the-line-you-didnt-draw",
          title: "The Line You Didn't Draw",
          hook: "You've told your partner you're not ready to move faster physically. They keep bringing it up, saying \"if you really cared, you would.\"",
          predictionPrompts: [
            "Is 'if you really cared, you would' actually an argument, or a pressure tactic?",
            "What makes a boundary easy or hard to hold, in the moment?"
          ],
          choices: [
            { id: "A", text: "Give in to stop the conversation from coming up again.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "'If you really cared, you would' is a pressure tactic, not a real argument. Giving in just confirms the tactic works." },
            { id: "B", text: "Repeat your boundary clearly, without new justification each time.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Staying consistent is what makes a boundary real. But this is just one good option among several here, not the only one, and it doesn't have to be the last thing you try." },
            { id: "C", text: "Ask them directly why 'if you really cared' feels like the right argument to them.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "This names the tactic itself, not just the disagreement. That often reveals more than arguing about the actual issue would." },
            { id: "D", text: "End the relationship over this pattern.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 3 }, reason: "This is a clear, protective response to pressure that keeps coming back. Leaving isn't a failure to communicate well enough. It's a legitimate answer when a boundary isn't being respected." },
            { id: "E", text: "Avoid being alone with them to sidestep the conversation.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This delays the conversation without resolving it. The same pressure is likely to come back." },
            { id: "F", text: "Talk to a school counselor or trusted adult about the pressure you're getting.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Persistent pressure like this is exactly what a trusted adult can help you think through. You don't have to carry it, or decide what to do about it, alone." }
          ],
          consequences: {
            A: "The boundary moves, but not because you actually changed your mind. The same pressure tactic will likely work again next time.",
            B: "It takes repeating more than once, and it works for now. But the same pressure may well come back again, in another form.",
            C: "The question puts the tactic itself in the open, which often reveals more than arguing about the boundary directly.",
            D: "It's a clear, complete answer to a pattern that kept coming back no matter how it was addressed. You don't owe anyone a repeated negotiation over a boundary you already stated.",
            E: "The avoidance buys short-term relief, but the actual conversation is still unresolved and waiting.",
            F: "They take it seriously, help you think through what's happening, and remind you that a clear no doesn't need to be defended alone."
          },
          concept: "\"If you really cared, you would\" is designed to make caring and doing the same thing. They aren't the same thing. When someone keeps pushing against a boundary, again and again, that isn't a communication problem for you to fix alone. It's information about the relationship itself.",
          takeaway: "What's a boundary you've held clearly before, and what made it easier to hold that time?",
          lesson: {
            goal: "Students learn that a stated boundary doesn't need to be argued again, that \"if you really cared\" is a pressure tactic, and that ending it or telling a trusted adult are strong, legitimate responses.",
            skills: ["Decision making", "Self-awareness"],
            focus: ["R", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Keep consent in general terms, as the scenario does, and don't role-play this pressure in class. If a student says they're being pressured, or that something happened without their consent, thank them, don't ask for details, and tell the counselor the same day.",
            prompts: [
              { q: "Is \"if you really cared, you would\" an argument?", listenFor: "No. It's a way to make caring and giving in seem like the same thing." },
              { q: "How many times should you have to explain a boundary?", listenFor: "Once is enough. After that, the problem is the pushing, not your explanation." },
              { q: "Why can ending it or telling an adult feel hard, and why are they still strong choices?", listenFor: "Fear of hurting them, or of being judged. They're strong because they take the pressure seriously." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Hold the line",
                situation: "\"If you really cared about me, you would.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"I do care, it's just... I don't know...\"", note: "Now you're defending your feelings instead of your boundary." },
                  { label: "Enough", strength: 3, text: "\"I said no, and that's my answer.\"", note: "A boundary doesn't need a new reason every time." },
                  { label: "Enough, and naming it", strength: 3, text: "\"Caring about you doesn't mean doing this. If you keep pushing, that's a problem for us.\"", note: "Names the tactic, and says what the pushing means." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If you really care, you'll change your mind.", fact: "Caring and agreeing are different things. A partner who cares accepts a no." },
                  { myth: "Ending a relationship over this is overreacting.", fact: "Pressure that keeps coming back after a clear no is a serious reason to leave." },
                  { myth: "This is private, so you should sort it out alone.", fact: "A trusted adult or counselor can help you think it through. You don't have to carry it alone." }
                ]
              }
            ],
            story: {
              body: "Meera told her boyfriend she wasn't ready, twice. Each time, he said she'd come around if she really loved him. She wrote it down in her notes app: what she'd said, what he'd said, and the dates. Seeing it as a list made the pattern clear. She ended it, and talked it through with the school counselor afterward.",
              question: "What did writing it down show her?"
            },
            practice: {
              title: "What a friend could say",
              steps: [
                "Work as a team. This one is written, not acted out.",
                "A friend tells you their partner keeps saying \"if you really cared, you would.\" Write what you'd say to them, in three sentences or fewer.",
                "Include one person or place they could go to for help. Then share."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How clear are you that a no doesn't need defending, and on who you could tell?",
            mission: "This week, think about one boundary you hold easily, like not lending your phone. Notice what makes it easy to hold."
          }
        },
        {
          id: "two-full-time-things",
          title: "Two Full-Time Things",
          hook: "You're in a serious relationship heading into a demanding exam year. Your partner wants more time together, and you both know this year matters for what comes after.",
          predictionPrompts: [
            "Is there actually a hidden 'right amount' of time here, or is this a planning problem?",
            "What happens to both things if neither of you names what you actually need?"
          ],
          choices: [
            { id: "A", text: "Scale back the relationship significantly until exams are over.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "This protects the exam year, but a one-sided change without discussion leaves your partner guessing why." },
            { id: "B", text: "Keep things exactly as they are and hope it works out.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Avoids the actual decision, and both priorities quietly lose out to the lack of a plan." },
            { id: "C", text: "Have an honest conversation about what both of you actually need this year.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "The only option that treats both things as real, and both of you as having a say in the plan." },
            { id: "D", text: "Let your partner decide how much time you spend together.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Hands over a decision that's genuinely yours to make, based on your own year, not someone else's read of it." },
            { id: "E", text: "End the relationship now to remove the variable entirely.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "This is a decisive answer to a real tension, but it costs you ever finding out if a plan could have worked for both of you." }
          ],
          consequences: {
            A: "The relationship survives on less, though your partner feels the change without always understanding why.",
            B: "Neither the studying nor the relationship gets what it needs, and both start to show strain.",
            C: "It takes an uncomfortable conversation, but you both leave with an actual plan instead of two unspoken expectations.",
            D: "The relationship gets prioritized, but by someone else's judgment of what you need, not your own.",
            E: "It's a clean, complete answer, but it closes the door on whether a real conversation might have found a way to make both work."
          },
          concept: "This isn't a question with a hidden right amount of time. It's a question of whether the two of you can actually agree on a plan, out loud, instead of each guessing at what the other expects.",
          takeaway: "What would a plan that actually worked for both of you look like, specifically?",
          lesson: {
            goal: "Students practice turning two unspoken expectations into one shared plan, by saying needs out loud, without either person deciding for the other.",
            skills: ["Effective communication", "Problem solving"],
            focus: ["C", "E"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student mentions a partner who gets angry or punishes them when they need study time, treat it like the pattern in \"The Version of You They Wanted\": thank them, don't ask for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "Is there a right amount of time to spend together this year?", listenFor: "No. It's a planning question, and both people get a say." },
              { q: "What happens if nobody says what they need?", listenFor: "Both people guess, both feel let down, and both things suffer." },
              { q: "Why shouldn't you just let your partner decide?", listenFor: "It's your year too. Your needs count as much as theirs." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Start the conversation",
                situation: "Your partner says, \"We hardly see each other anymore.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"I'm busy. You know it's exam year.\"", note: "True, but it shuts the conversation down." },
                  { label: "Clear", strength: 2, text: "\"Sorry. I'll try to make more time.\"", note: "Kind, but a vague promise neither of you can plan around." },
                  { label: "Strong", strength: 3, text: "\"I miss you too. Can we work out a plan? Maybe Sunday afternoons and a call on Wednesdays, and the rest goes to studying?\"", note: "Says you care, and turns it into something specific you can both agree to." }
                ]
              },
              {
                kind: "list",
                title: "A plan that works covers",
                items: [
                  "When you'll see each other, and for how long.",
                  "When you're each off-limits for studying.",
                  "What changes during exam weeks.",
                  "When you'll check whether the plan is working."
                ]
              }
            ],
            story: {
              body: "Kiran and Aisha both had board exams. Instead of arguing about time, they sat down with a calendar. They kept Sunday afternoons, a short call on Wednesdays, and no plans during exam weeks. When Aisha's exams ended a week earlier, they added an extra day. Neither of them had to guess anymore.",
              question: "What changed once the plan was written down?"
            },
            practice: {
              title: "Make the plan",
              steps: [
                "Work as a team.",
                "Write a plan for a couple in exam year: when they see each other, when they study, and what changes in exam weeks.",
                "Share it. The class checks: did both people get a say?"
              ],
              rounds: [{ label: "Plan it", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could talk through a plan like this instead of guessing?",
            mission: "This week, with someone you spend a lot of time with (a friend, a sibling, a teammate), say out loud one thing you need from them."
          }
        }
      ]
    }
  }
};
