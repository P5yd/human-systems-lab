// Module: Self-Esteem & Personal Accountability
// New module added 2026-08-18, following the established pattern.
//
// Lessons added 2026-10-23 (seventh module with lessons), same `lesson`
// shape as content/decision-making.js. "When It Really Was Your Fault"
// focuses on a make-it-right plan with a prevention step, to avoid
// repeating the apology lesson in Values & Emotions.

const MODULE_SELF_ESTEEM_ACCOUNTABILITY = {
  id: "self-esteem-accountability",
  title: "Self-Esteem & Personal Accountability",
  coreIdea: "Confidence isn't about being right all the time. It's about how you handle being wrong.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Owning It",
      scenarios: [
        {
          id: "the-group-chat-comparison",
          title: "The Group Chat Comparison",
          hook: "You're scrolling through social media. Everyone in your group chat seems to be doing more, achieving more, and having more fun than you.",
          predictionPrompts: [
            "What are you really seeing? Someone's whole life, or just their highlight reel?",
            "What does this comparison make you want to do next?"
          ],
          choices: [
            { id: "A", text: "Keep scrolling and let the feeling sit.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "The longer you sit with the comparison without questioning it, the bigger it gets. This choice lets it keep building unchecked." },
            { id: "B", text: "Post something to compete, even if it's exaggerated.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This chases the same comparison that's bothering you. It also adds some dishonesty about your own life on top of it." },
            { id: "C", text: "Close the app and do something that's actually yours.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "This breaks the comparison loop right away, instead of feeding it or fighting it." },
            { id: "D", text: "Message a friend honestly about feeling behind.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "Saying the feeling out loud usually makes it smaller. It also often shows that your friend feels the same way." },
            { id: "E", text: "Tell yourself everyone else's posts are probably fake anyway.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "This thought is partly true, but you're using it to brush off the feeling instead of understanding where it comes from." }
          ],
          consequences: {
            A: "An hour later, you feel worse than when you started. You're not even sure why.",
            B: "The post gets a few likes. But it doesn't touch the real feeling. If anything, it feels a little hollow.",
            C: "The activity doesn't erase the comparison. But now you have something real of your own to focus on.",
            D: "Your friend admits they feel the same way sometimes. Suddenly the comparison feels a lot less personal.",
            E: "It works for about ten minutes. Then the feeling creeps back in, still unresolved."
          },
          concept: "A feed shows you results. It edits out the effort, the boredom, and the failed attempts. Comparing your whole life to someone else's highlight reel isn't fair. You're comparing two completely different things.",
          takeaway: "What's one thing in your life that would never make it into a highlight reel, but you're genuinely proud of it?",
          lesson: {
            goal: "Students see that a feed shows highlights, not whole lives, and practice two quick ways to break the comparison loop: closing the app for something of their own, or saying the feeling to a friend.",
            skills: ["Self-awareness", "Coping with emotions"],
            focus: ["D", "E"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Comparison can tie into body image, loneliness, or low mood. If a student says they feel bad about themselves most of the time, or mentions not eating or hurting themselves, treat it as serious and tell the counselor the same day.",
            prompts: [
              { q: "What does a feed leave out?", listenFor: "Boring days, failures, effort, arguments, editing." },
              { q: "Why does saying the feeling out loud help?", listenFor: "It gets smaller, and the friend often feels the same." },
              { q: "What's something you're proud of that would never get posted?", listenFor: "Small, real things: helping at home, slowly getting better at something." }
            ],
            examples: [
              {
                kind: "list",
                title: "What a post leaves out",
                items: [
                  "The 40 photos that didn't make it.",
                  "The hours of practice before the trophy.",
                  "The argument just before the happy family picture.",
                  "The ordinary Tuesday that most days actually are."
                ]
              },
              {
                kind: "ladder",
                title: "Say it to a friend",
                situation: "You've been scrolling for an hour and feel behind everyone.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Posting a fake-happy story to keep up.)", note: "It doesn't touch the feeling, and it adds pressure." },
                  { label: "Clear", strength: 2, text: "\"ugh, everyone's life looks so good\"", note: "Honest, but easy to brush off." },
                  { label: "Strong", strength: 3, text: "\"Honestly, scrolling just made me feel really behind everyone. Do you ever get that?\"", note: "Names the real feeling and invites them in. Most people say yes." }
                ]
              }
            ],
            story: {
              body: "Simran posted a photo from a wedding: perfect outfit, perfect smile. Her friend Jaya felt left out all evening. The next day, Simran told her the photo took 30 tries, her shoes hurt all night, and she'd argued with her cousin. Jaya laughed. \"I spent the whole night thinking your life was better than mine.\"",
              question: "What did Jaya not see in the photo?"
            },
            practice: {
              title: "Behind the post",
              steps: [
                "Work as a team.",
                "Write a made-up, perfect-looking post: the caption, and what the photo shows.",
                "Then write what really happened that day, outside the frame. Read both out."
              ],
              rounds: [{ label: "The post", seconds: 60 }, { label: "The real day", seconds: 90 }]
            },
            exitCheck: "How likely are you to notice when a feed is making you feel worse?",
            mission: "This week, when scrolling makes you feel behind, close the app and do one thing that's yours for ten minutes. Notice whether the feeling changes."
          }
        },
        {
          id: "the-mistake-in-front-of-the-class",
          title: "The Mistake in Front of the Class",
          hook: "You answer a question confidently in class, and you're completely wrong. A couple of people laugh quietly.",
          predictionPrompts: [
            "Does this mistake really say anything about who you are as a person?",
            "What would make this moment worse? What would make it smaller?"
          ],
          choices: [
            { id: "A", text: "Insist you were probably right anyway.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This protects your ego instead of the truth. It usually makes the moment last longer than it needs to." },
            { id: "B", text: "Say 'good to know, thanks' and move on.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 5 }, reason: "This treats a wrong answer as useful information, not proof that you're not good enough. It's the fastest way through the moment." },
            { id: "C", text: "Go quiet for the rest of class and stop raising your hand.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "This protects you from being wrong again. But it costs you the chance to take part in class at all." },
            { id: "D", text: "Make a joke at your own expense before anyone else can.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "This often calms the moment down well. It works best when it's not a habit you lean on every single time." },
            { id: "E", text: "Overexplain why you thought that was the answer.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This keeps the moment in the spotlight longer than the mistake itself ever did." }
          ],
          consequences: {
            A: "The teacher gently corrects you again. Now it takes twice as long to move past it.",
            B: "The class moves on within seconds. Most people have already forgotten by the next question.",
            C: "You get through class fine today. But later you notice you've stopped raising your hand, even when you know the answer.",
            D: "A couple of people laugh with you this time, and the moment passes easily.",
            E: "The explanation draws more attention to the mistake than the mistake itself ever did."
          },
          concept: "Being wrong out loud feels huge to you, but it looks small to everyone else. Most of the room moves on in seconds. The story that lasts is the one you keep telling yourself about it later.",
          takeaway: "What's a wrong answer you gave a long time ago that you still remember? Do you think anyone else does?",
          lesson: {
            goal: "Students see that being wrong out loud looks small to everyone else, and practice a quick, calm recovery line instead of arguing, going silent, or overexplaining.",
            skills: ["Self-awareness", "Coping with emotions"],
            focus: ["A", "D"],
            needs: "The smartboard.",
            careNote: "Show the class that wrong answers are welcome here: thank students for trying, during this lesson too. If a student says they're laughed at for their answers regularly, follow up privately. It may be bullying.",
            prompts: [
              { q: "How long do you think the class remembered the wrong answer?", listenFor: "Seconds. Most people forget by the next question." },
              { q: "Why do we remember our own mistakes for so long?", listenFor: "We replay them. Nobody else does." },
              { q: "What would make wrong answers feel safer in this class?", listenFor: "No laughing, teachers thanking people for trying, and everyone being wrong sometimes." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Recover in one line",
                situation: "You answer confidently. You're completely wrong. Two people snigger.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"No, but... I think it could still be right, because...\"", note: "The moment gets longer and louder." },
                  { label: "Clear", strength: 2, text: "\"Oh. Okay.\"", note: "Fine, but it can feel like you're shrinking." },
                  { label: "Strong", strength: 3, text: "\"Ah, good to know. Thanks!\"", note: "Calm and done. The class moves on in seconds." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "Smart people don't get answers wrong in class.", fact: "Everyone does. The people who learn fastest are the ones who keep answering." },
                  { myth: "People will remember it for weeks.", fact: "Most people forget within minutes. The one who remembers is you." },
                  { myth: "If you stay quiet, you can't be wrong.", fact: "True, but you also can't learn out loud or show what you know." }
                ]
              }
            ],
            story: {
              body: "In a history quiz, Varun said Akbar built the Taj Mahal. A few people giggled. He grinned and said, \"Wrong Mughal. Good to know.\" The teacher laughed too, and corrected it. Two minutes later Varun got the next answer right, and nobody mentioned the first one again.",
              question: "What made Varun's moment so short?"
            },
            practice: {
              title: "Wrong on purpose",
              steps: [
                "Get into pairs.",
                "Take turns asking each other easy quiz questions. The person answering gives a wrong answer on purpose.",
                "Practice a calm one-line recovery, like \"Good to know.\" Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready are you to keep putting your hand up after getting something wrong?",
            mission: "This week, answer one question in class that you're not 100% sure about. Notice what actually happens."
          }
        },
        {
          id: "taking-the-blame-or-not",
          title: "Taking the Blame (or Not)",
          hook: "A shared project goes wrong. Part of it is really your fault, and part of it is your teammate's. The teacher asks what happened.",
          predictionPrompts: [
            "What's the difference between owning your part and owning all of it?",
            "How might your friendship with your teammate change, depending on what you say?"
          ],
          choices: [
            { id: "A", text: "Take the blame for everything to avoid conflict.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "This avoids a hard conversation now. But it gives a false picture of what happened, and the real problem never gets fixed." },
            { id: "B", text: "Name exactly your part, clearly, without minimizing it.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "This gives an honest, accurate account. It's the version most likely to actually fix what went wrong next time." },
            { id: "C", text: "Point out it was mostly the teammate's fault.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "This might be accurate. But pointing at your teammate's mistake before naming your own looks like you're dodging blame." },
            { id: "D", text: "Stay vague about who did what.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "This avoids saying anything clearly. Usually that means nothing gets fixed, and the same mistake happens again." },
            { id: "E", text: "Talk to your teammate privately first, then give a joint honest account.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This protects the friendship and the truth at the same time. It takes the most effort, and it pays off the most." }
          ],
          consequences: {
            A: "The teacher believes you. But your teammate never learns what they need to fix, so the same mistake shows up on the next project.",
            B: "The teacher appreciates how clear you are. It's easy for them to see exactly what you need to change.",
            C: "It's technically true. But your teammate feels betrayed, and your friendship takes a hit.",
            D: "The teacher can't tell what really happened. They end up treating you both the same, no matter who did what.",
            E: "Your account is honest and specific. Your teammate appreciates that you talked to them first, before saying anything to the teacher."
          },
          concept: "Accountability isn't taking all the blame, or none of it. It's being precise about the part that was actually yours.",
          takeaway: "Have you ever taken blame that wasn't fully yours, just to avoid an awkward conversation?",
          lesson: {
            goal: "Students practice precise accountability: naming exactly their own part, without taking all the blame or pointing at others first, and talking to a teammate before the teacher.",
            skills: ["Effective communication", "Self-awareness"],
            focus: ["D", "E"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student says they always take the blame to keep the peace, at home or with friends, a gentle private check-in may help.",
            prompts: [
              { q: "Why is taking all the blame not actually kind?", listenFor: "It isn't true, so the real problem never gets fixed." },
              { q: "Why does pointing at your teammate first backfire?", listenFor: "It sounds like dodging, even if it's accurate." },
              { q: "Why talk to your teammate before the teacher?", listenFor: "No surprises, you agree on the facts, and the friendship survives." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Answer the teacher",
                situation: "\"So, what happened with the project?\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"It was mostly Aarav. He didn't send his part.\"", note: "Maybe true, but it sounds like dodging, and Aarav hears it." },
                  { label: "Clear", strength: 2, text: "\"It's all my fault, sir.\"", note: "Avoids conflict, but it isn't true, so nothing gets fixed." },
                  { label: "Strong", strength: 3, text: "\"I didn't check the final slides before we submitted. That was my part. Aarav and I have talked, and here's what we'll do differently.\"", note: "Exact about your part, honest about the rest, and looking forward." }
                ]
              },
              {
                kind: "list",
                title: "My part, precisely",
                items: [
                  "What did I do, or not do?",
                  "What happened because of it?",
                  "What will I do differently next time?"
                ]
              }
            ],
            story: {
              body: "Zara and Om's science model collapsed on display day. Zara had used the wrong glue, and Om had built the base too thin. Before talking to the teacher, Zara said to Om, \"Let's each say our own part.\" They did. The teacher said it was the clearest explanation she'd heard all week, and gave them a day to rebuild it.",
              question: "Why did agreeing first make the conversation easier?"
            },
            practice: {
              title: "Split the blame fairly",
              steps: [
                "Work as a team.",
                "Make up a group project that went wrong, with mistakes by two different people.",
                "Write the one-sentence answer each person should give the teacher. Each sentence names only their own part."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could own your part, no more and no less?",
            mission: "This week, when something goes wrong, finish this sentence privately: \"My part was...\" Be exact."
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Standing on Your Own Two Feet",
      scenarios: [
        {
          id: "the-feedback-that-stung",
          title: "The Feedback That Stung",
          hook: "Your supervisor gives you harsh but fair feedback on a project you were proud of. It hurts more than you expected.",
          predictionPrompts: [
            "Is this feedback really about your worth as a person, or just about this one piece of work?",
            "What would you do with this feedback if it didn't hurt at all?"
          ],
          choices: [
            { id: "A", text: "Get defensive and explain why the criticism is wrong.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This protects your ego in the moment. But it blocks the useful information the feedback actually contains." },
            { id: "B", text: "Say thank you, then process the sting privately before responding further.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This separates taking in the information from dealing with the feeling. Both can happen without one getting in the way of the other." },
            { id: "C", text: "Agree with everything immediately, even the parts you're not sure about.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This avoids conflict. But it skips the step of actually checking whether the feedback is fully right." },
            { id: "D", text: "Decide your supervisor just doesn't like you.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This turns useful, specific feedback into a story about whether you're liked. That switch makes the feedback impossible to actually use." },
            { id: "E", text: "Ask clarifying questions to understand exactly what to change.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "This turns the hurt into something useful. It's the fastest way to actually improve next time." }
          ],
          consequences: {
            A: "Your supervisor feels unheard. The same feedback will likely come up again on the next project.",
            B: "You come back a day later with real questions. Your supervisor notices how maturely you handled it.",
            C: "You make changes based on feedback you didn't fully understand. Some of them miss the actual point.",
            D: "You start doubting every interaction with your supervisor, even when there's no real reason to.",
            E: "You leave with a clear, specific list of what to change. The hurt fades once you have something useful to do with it."
          },
          concept: "Harsh feedback and your worth as a person are two different things, even when they arrive in the same sentence. The skill is telling them apart fast enough to actually use the feedback.",
          takeaway: "What's some feedback you once got that hurt at first, but turned out to be useful?",
          lesson: {
            goal: "Students practice separating the sting of harsh feedback from the information in it: thanking, pausing, then asking clarifying questions.",
            skills: ["Self-awareness", "Effective communication"],
            focus: ["A", "D"],
            needs: "The smartboard.",
            prompts: [
              { q: "Is this feedback about you, or about this piece of work?", listenFor: "The work. It just doesn't feel that way at first." },
              { q: "Why does defending yourself in the moment backfire?", listenFor: "The useful part gets lost, and the other person feels unheard." },
              { q: "What could you ask to make the feedback useful?", listenFor: "What exactly should change? Can you show me an example?" }
            ],
            examples: [
              {
                kind: "ladder",
                title: "In the moment",
                situation: "\"Honestly, this report isn't good enough. The analysis is shallow.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"That's not fair. I spent ages on this.\"", note: "True about the effort, but now it's an argument." },
                  { label: "Clear", strength: 2, text: "\"Okay, sorry.\"", note: "Calm, but you leave without knowing what to change." },
                  { label: "Strong", strength: 3, text: "\"Thanks for being straight with me. Can I take a day with this, then come back with questions about the analysis?\"", note: "Takes it in, gives you time for the sting, and keeps the door open." }
                ]
              },
              {
                kind: "list",
                title: "Three questions that turn hurt into a plan",
                items: [
                  "\"Which part worked, and which didn't?\"",
                  "\"What would a stronger version look like?\"",
                  "\"What should I fix first?\""
                ]
              }
            ],
            story: {
              body: "Aman's internship supervisor said his presentation \"had no clear point.\" He went home angry. The next morning he asked her, \"What would a clear point have looked like?\" She showed him one slide from a past intern. His next presentation got her first \"well done.\"",
              question: "What changed between that evening and the next morning?"
            },
            practice: {
              title: "Feedback swap",
              steps: [
                "Get into pairs.",
                "One of you gives made-up harsh feedback on an imaginary piece of work, like \"Your poster is messy and hard to read.\"",
                "The other thanks them and asks one clarifying question. Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready are you to take harsh feedback without defending yourself straight away?",
            mission: "This week, ask someone for honest feedback on one small thing you did. Thank them, and ask one clarifying question."
          }
        },
        {
          id: "when-it-really-was-your-fault",
          title: "When It Really Was Your Fault",
          hook: "A mistake you made costs your team a client. This time there's no question about it. It was genuinely your error.",
          predictionPrompts: [
            "What's the difference between owning your mistake and punishing yourself for it?",
            "What does the team actually need from you next?"
          ],
          choices: [
            { id: "A", text: "Offer to resign or step back from the team entirely.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "This is an extreme response to a mistake that's real but fixable. It removes you right when your knowledge of what went wrong is most useful." },
            { id: "B", text: "Own it clearly, and propose specific steps to prevent it happening again.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This takes full responsibility while staying useful. It's the kind of accountability that actually moves things forward." },
            { id: "C", text: "Spend the next weeks trying to overcompensate on everything.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This is an understandable instinct. But burning yourself out to prove your worth after one mistake usually just creates a second problem." },
            { id: "D", text: "Minimize it as 'these things happen' and move on quickly.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This undersells a mistake serious enough to lose a client. The team notices the gap between how serious it was and how you're treating it." },
            { id: "E", text: "Talk to a mentor about how to actually process and learn from this.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "This is genuinely useful for the long run. But on its own, it doesn't address what the team needs from you right now." }
          ],
          consequences: {
            A: "The team is left short-handed right when they need your knowledge of what happened the most.",
            B: "The team appreciates having a concrete plan. Trust rebuilds faster than it would have otherwise.",
            C: "You're exhausted within a month. The overcompensating starts affecting your other work too.",
            D: "The team feels like the loss wasn't taken seriously enough. Trust is slower to rebuild.",
            E: "You work through it well on your own. But the team still needs you to have a direct conversation with them separately."
          },
          concept: "A real mistake deserves real accountability, not a performance in either direction. Underplaying it and punishing yourself for it are both ways of avoiding the actual work of fixing it.",
          takeaway: "What does 'making it right' actually look like here, beyond just feeling bad?",
          lesson: {
            goal: "Students practice accountability that fixes things: an honest admission, the real cause, and a concrete prevention step, without minimizing the mistake or punishing themselves.",
            skills: ["Self-awareness", "Problem solving"],
            focus: ["C", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student talks about feeling worthless after mistakes, punishing themselves, or hurting themselves, treat it as serious. Thank them, don't press for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "What's the difference between owning a mistake and punishing yourself?", listenFor: "Owning it fixes things. Punishing yourself just hurts, and helps nobody." },
              { q: "Why is \"these things happen\" a problem here?", listenFor: "It undersells how serious it was, so trust drops." },
              { q: "What does the team need from you this week?", listenFor: "Honesty, a fix, a prevention step, and you still showing up." }
            ],
            examples: [
              {
                kind: "list",
                title: "The make-it-right plan",
                items: [
                  "What happened, in one honest sentence.",
                  "Why it happened: the real cause, not an excuse.",
                  "What changes so it can't happen the same way again.",
                  "Who you'll check in with to make sure the change is working."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If you feel terrible enough, it shows you care.", fact: "Fixing it shows you care. Feeling terrible on its own doesn't help anyone." },
                  { myth: "Stepping back is the honourable thing to do.", fact: "You're usually the person who knows most about what went wrong. Stay and help fix it." },
                  { myth: "One big mistake defines you.", fact: "People remember how you handled it far longer than the mistake itself." }
                ]
              }
            ],
            story: {
              body: "At her café job, Sunita forgot to place the weekly milk order, and the café ran out on a busy Saturday. On Monday she told the owner, \"That was my mistake. I've set a phone reminder for every Thursday, and I've added the order to the shift checklist.\" Three months later, Sunita was the one training new staff on that checklist.",
              question: "Why did the owner trust her more afterward, not less?"
            },
            practice: {
              title: "Make it right",
              steps: [
                "Work as a team.",
                "Make up a mistake a student made at a part-time job that cost the business something.",
                "Write their make-it-right plan in four lines. Share it, and the class checks: is there a real prevention step?"
              ],
              rounds: [{ label: "Write the plan", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could own a big mistake without making it worse?",
            mission: "This week, think of a past mistake you still feel bad about. Write one sentence about what you'd do differently now. Then let it rest."
          }
        },
        {
          id: "comparing-chapter-3-to-their-chapter-20",
          title: "Comparing Your Chapter 3 to Their Chapter 20",
          hook: "A former classmate, a few years older than you, just had big career success online. You're still early in your own career, and the comparison hurts more than you expected.",
          predictionPrompts: [
            "What are you really comparing? Two similar moments, or two completely different timelines?",
            "What would you tell a younger friend who felt this way about you someday?"
          ],
          choices: [
            { id: "A", text: "Assume you're just behind and probably always will be.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This treats one moment in time as a final verdict on a much longer story that hasn't finished yet." },
            { id: "B", text: "Unfollow or mute to protect your headspace for now.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "This is a reasonable short-term boundary. But it doesn't deal with the urge to compare itself." },
            { id: "C", text: "Reach out to congratulate them genuinely, and ask what their path looked like.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 5 }, reason: "This turns a one-sided comparison into real information. Most 'overnight' success stories have years of unseen work behind them." },
            { id: "D", text: "Push yourself into a rushed, unplanned decision to 'catch up.'", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This makes a real decision based on someone else's timeline, instead of your own actual situation." },
            { id: "E", text: "Remind yourself of your own progress over the last year, specifically.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 3 }, reason: "This shifts the comparison to something that actually matters: your own progress, instead of someone else's different path." }
          ],
          consequences: {
            A: "This assumption becomes a quiet weight that colors how you see your own work for months.",
            B: "You feel some relief. But the urge to compare is still there the next time it shows up somewhere else.",
            C: "They mention years of rejections and false starts you never saw. The story turns out to be far less 'overnight' than it looked.",
            D: "The rushed decision doesn't fit your actual situation. You end up further from where you wanted to be, not closer.",
            E: "It doesn't erase the hurt completely. But it gives you something true and specific to hold onto instead."
          },
          concept: "You're almost never comparing two equal moments. You're comparing your current chapter to someone else's highlight, years ahead, with everything in between edited out.",
          takeaway: "What would 'success' on your own timeline actually look like, the kind you'd be proud of no matter what anyone else is doing?",
          lesson: {
            goal: "Students learn to measure against their own past progress instead of someone else's highlight, and practice turning envy into curiosity about how someone actually got there.",
            skills: ["Self-awareness", "Coping with emotions"],
            focus: ["A", "E"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Comparison can feed hopelessness about the future. If a student says they feel like a failure, or that there's no point trying, check in privately and let the counselor know.",
            prompts: [
              { q: "What are you really comparing?", listenFor: "Their year ten to my year one. Two different timelines." },
              { q: "What's hidden behind most \"overnight\" success?", listenFor: "Years of work, rejections, luck, and help from other people." },
              { q: "How could you measure your own progress instead?", listenFor: "Me now against me a year ago." }
            ],
            examples: [
              {
                kind: "list",
                title: "Compare with you, not them",
                items: [
                  "One thing I can do now that I couldn't do a year ago.",
                  "One thing I tried this year, even if it didn't work.",
                  "One person who helped me, and one person I helped."
                ]
              },
              {
                kind: "ladder",
                title: "Turn envy into a question",
                situation: "A former classmate's new company is all over your feed.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Muting them, and quietly deciding you'll never catch up.)", note: "It protects you for a day. The story about yourself stays." },
                  { label: "Clear", strength: 2, text: "\"Congrats!!\" (in the comments)", note: "Kind, and fine. You just don't learn anything." },
                  { label: "Strong", strength: 3, text: "\"Congratulations, that's huge. I'd love to hear how you got started. What were the first couple of years like?\"", note: "Generous, and you'll probably hear about the years you couldn't see." }
                ]
              }
            ],
            story: {
              body: "Arjun felt crushed when a senior from his school became a well-known YouTuber. Eventually he messaged him. The senior wrote back that his first 80 videos got almost no views, and that he'd nearly quit twice. Arjun pinned the message above his desk.",
              question: "Why did Arjun pin the message?"
            },
            practice: {
              title: "The hidden years",
              steps: [
                "Work as a team.",
                "Pick a made-up success story: a famous athlete, a chef, or the founder of a company.",
                "Write the five years before the success that nobody posted: the setbacks, the boring work, the help. Share one surprising line."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How likely are you to compare against your own progress next time, instead of someone else's?",
            mission: "This week, write down one thing you can do now that you couldn't do a year ago. Keep it somewhere you'll see it."
          }
        }
      ]
    }
  }
};
