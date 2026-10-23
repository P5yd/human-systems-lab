// Module: Values Clarification & Emotional Regulation
// New module added 2026-08-18, following the established pattern.
//
// Lessons added 2026-10-23 (second module after the Decision-Making pilot):
// every scenario carries a `lesson` object with the same shape documented in
// content/decision-making.js. Care notes are on the four scenarios most
// likely to surface something real (anger, being laughed at, panic, guilt).

const MODULE_VALUES_EMOTIONS = {
  id: "values-emotions",
  title: "Values Clarification & Emotional Regulation",
  coreIdea: "You can't manage a feeling you haven't named, and you can't live by a value you haven't actually chosen.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · What Am I Feeling, and Why?",
      scenarios: [
        {
          id: "the-slammed-door",
          title: "The Slammed Door",
          hook: "You get detention for something you didn't do. A teacher misread what happened. You're furious, and class isn't even over yet.",
          predictionPrompts: [
            "What does your anger want you to do right now?",
            "An hour from now, what will you wish you had done?"
          ],
          choices: [
            { id: "A", text: "Argue back loudly in front of the class.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "It feels like justice in the moment. But it almost always makes things worse, not better." },
            { id: "B", text: "Go silent and shut down for the rest of class.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "This avoids a fight, but the anger doesn't go away. You just carry it, unresolved, through the rest of your day." },
            { id: "C", text: "Take a breath, wait until after class, and calmly explain what actually happened.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This gives your anger somewhere to go without acting on it right away. It also gives the teacher a real chance to fix the mistake." },
            { id: "D", text: "Vent to your friends about it for the rest of the day.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "It feels better for a little while. But it doesn't fix the detention or clear up the misunderstanding." },
            { id: "E", text: "Accept the detention without saying anything, even later.", dcera: { D: 1, C: 2, E: 2, R: 3, A: 1 }, reason: "This avoids any conflict. But it leaves a real mistake uncorrected, and the unfairness stays unresolved." }
          ],
          consequences: {
            A: "The teacher gets defensive too and adds a second consequence for talking back. The real misunderstanding never gets sorted out.",
            B: "You get through class, but you're distracted. Later you snap at a friend. The anger found somewhere else to land.",
            C: "The teacher listens, realizes the mistake, and clears the detention. It takes more self-control in the moment, but it actually works.",
            D: "Your friends agree it's unfair, which feels good. But the detention still stands, and the teacher never learns they made a mistake.",
            E: "The detention stays on your record. Weeks later you're still quietly annoyed every time you see that teacher."
          },
          concept: "Anger isn't the problem. It's useful information that something feels unfair to you. The skill is keeping the feeling separate from what you do next.",
          takeaway: "What's your usual first move when you're angry? Did the choice you made today match that?",
          lesson: {
            goal: "Students practice keeping a strong feeling separate from their next action: pausing, then raising an unfair situation calmly and at the right time.",
            skills: ["Coping with emotions", "Effective communication"],
            focus: ["D", "A"],
            needs: "The smartboard.",
            careNote: "If a student says they feel this angry often, or that anger has led to fights or someone getting hurt, follow up privately and let the counselor know.",
            prompts: [
              { q: "What did your anger want you to do in the first ten seconds?", listenFor: "Shout, argue, storm out. Name these without judging them. The urge is normal." },
              { q: "Why does waiting until after class work better than arguing right then?", listenFor: "The teacher isn't defending themselves in front of everyone. You're calmer. You can explain clearly." },
              { q: "What's the difference between feeling angry and acting angry?", listenFor: "The feeling just shows up. The action is a choice." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it like this",
                situation: "Class is over. You go up to the teacher about the detention.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"This is so unfair. You always blame me.\"", note: "It starts a new argument. The teacher has to defend themselves instead of listening." },
                  { label: "Clear", strength: 2, text: "\"I didn't do it. Can you check again?\"", note: "Calm and short. It might work, but the teacher still doesn't know what happened." },
                  { label: "Strong", strength: 3, text: "\"Can I have one minute? I think there was a mix-up. Here's what actually happened.\"", note: "You ask first, stay calm, and give the teacher what they need to fix it." }
                ]
              },
              {
                kind: "list",
                title: "When anger hits: the 3-step pause",
                items: [
                  "Notice it. Say in your head: \"I'm angry right now.\"",
                  "Breathe out slowly, longer than you breathe in. Do it three times.",
                  "Pick your moment. Ask yourself: \"Now, or after class?\""
                ]
              }
            ],
            story: {
              body: "Dev got blamed for a broken chair in the lab. His face went hot and he wanted to shout. Instead he wrote one line in his notebook: \"Talk to Sir after class.\" When the bell rang, he walked up and explained. Sir checked with the lab assistant, and the detention was gone by lunch.",
              question: "What did writing that one line do for Dev?"
            },
            practice: {
              title: "Pause, then speak",
              steps: [
                "Get into pairs.",
                "One of you is the teacher who blamed the wrong student. The other does the 3-step pause, then asks for one minute and explains calmly.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How sure are you that you could pause before reacting the next time you're angry?",
            mission: "This week, the next time you feel angry, try the 3-step pause once: notice it, breathe out slowly three times, then pick your moment. Notice what changes."
          }
        },
        {
          id: "everyones-watching",
          title: "Everyone's Watching",
          hook: "You freeze halfway through a class presentation. A few people laugh. You still have two more minutes to get through.",
          predictionPrompts: [
            "What is the embarrassment really about? Is it the mistake, or is it being seen making the mistake?",
            "What happens if you let the moment become bigger than it is?"
          ],
          choices: [
            { id: "A", text: "Rush through the rest as fast as possible to end it.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This ends the discomfort fast. But rushing usually looks worse than the pause did." },
            { id: "B", text: "Stop and say 'give me a second' before continuing at your own pace.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 5 }, reason: "This names the moment instead of fighting it, and gives you room to actually recover." },
            { id: "C", text: "Make a joke about yourself freezing up, then continue.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "This often eases the tension in the room. But if the joke doesn't land, it can make the embarrassment worse." },
            { id: "D", text: "Ask to sit down and finish another day.", dcera: { D: 2, C: 3, E: 2, R: 4, A: 2 }, reason: "This removes you from the discomfort completely. But it also means missing the chance to practice this exact skill." },
            { id: "E", text: "Stay frozen and let the silence stretch until someone else steps in.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This is the longest and most uncomfortable version of the moment, for everyone, including you." }
          ],
          consequences: {
            A: "You finish, but you stumble over two more points from rushing. The presentation ends worse than the freeze did.",
            B: "The pause is a few seconds long. Most of the class barely registers it, and you finish clearly.",
            C: "A few people laugh with you, not at you, and the room relaxes along with you.",
            D: "You avoid finishing today. But the same nerves will be waiting for you next time, just as strong.",
            E: "The teacher eventually steps in, and the moment becomes the thing people remember about the presentation."
          },
          concept: "The freeze itself lasts only a few seconds. What people remember, including you, mostly comes down to what happens in the next thirty seconds.",
          takeaway: "What would you want a friend to say to you, right after a moment like this?",
          lesson: {
            goal: "Students see that a freeze lasts seconds and the recovery is what people remember, and practice a short line plus a breath to get going again.",
            skills: ["Coping with emotions", "Self-awareness"],
            focus: ["A", "D"],
            needs: "The smartboard.",
            careNote: "If a student says people laugh at them often, or that they dread speaking in class because of how others treat them, follow up privately. It may be bullying, and the counselor should know.",
            prompts: [
              { q: "What felt worse: the freeze, or the laughing?", listenFor: "Being seen. Usually it's the audience, not the mistake." },
              { q: "How long do you think the class remembers a few seconds of silence?", listenFor: "Not long. Most people are thinking about their own turn." },
              { q: "What could the class do to make it easier for the person who freezes?", listenFor: "Not laughing, waiting, a small nod or smile. The room is part of this too." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Get going again",
                situation: "You freeze in the middle of your presentation. A few people laugh.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Standing silent, staring at the floor.)", note: "Every second feels longer, for you and for the room." },
                  { label: "Clear", strength: 2, text: "\"Sorry. Okay.\" (Then rushing on.)", note: "You're moving again, but rushing often causes the next stumble." },
                  { label: "Strong", strength: 3, text: "\"Give me a second.\" (One slow breath, a look at your notes, then carry on.)", note: "You name it, take back the pace, and the room relaxes with you." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "Everyone noticed and will remember it.", fact: "Most people barely notice a short pause. They're thinking about their own turn." },
                  { myth: "If you freeze, you're bad at presenting.", fact: "Lots of good speakers freeze. What matters is having a way to start again." },
                  { myth: "Laughing at someone is just a joke.", fact: "For the person up front, it can make a small moment feel huge. The audience has a job too." }
                ]
              }
            ],
            story: {
              body: "Ishita lost her place in a science presentation and froze. Someone giggled. She said, \"Give me a second,\" looked at her card, and carried on. Afterward, her friend said, \"What freeze? I thought you were pausing on purpose.\"",
              question: "Why did her friend barely notice?"
            },
            practice: {
              title: "The ten-second restart",
              steps: [
                "Get into pairs.",
                "One of you tells the other about your weekend. Partway through, the listener says \"Freeze!\"",
                "The speaker says \"Give me a second,\" takes one slow breath, and carries on. Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready are you to keep going if you freeze in front of the class?",
            mission: "This week, when someone else stumbles while speaking, try being the friendly face: wait, don't laugh, maybe give a small nod. Notice what it's like to be that person in the room."
          }
        },
        {
          id: "the-green-eyed-moment",
          title: "The Green-Eyed Moment",
          hook: "Your friend gets the lead role you badly wanted. They're excited and want to tell you about it.",
          predictionPrompts: [
            "Is the jealousy about them, or about what you wanted for yourself?",
            "What does your friend actually need from you right now?"
          ],
          choices: [
            { id: "A", text: "Act excited even though you don't feel it.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "This protects the friendship on the surface. But the gap between what you feel and what you show tends to show up eventually." },
            { id: "B", text: "Avoid them for a few days until the feeling passes.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 1 }, reason: "This buys you time. But to a friend who's excited and doesn't know why you disappeared, it just feels distant." },
            { id: "C", text: "Be honest that it's hard to hear right now, while still being happy for them.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "This names both true feelings at once: the jealousy and the real happiness. You don't have to pick just one to show." },
            { id: "D", text: "Point out reasons the casting might have been unfair.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This turns your own disappointment into something aimed at your friend. They didn't do anything to deserve that." },
            { id: "E", text: "Say nothing and let the friendship quietly cool off.", dcera: { D: 1, C: 2, E: 1, R: 3, A: 1 }, reason: "The friendship absorbs the jealousy slowly, without either of you ever naming what actually happened." }
          ],
          consequences: {
            A: "Your friend doesn't notice at first. But a few weeks later, they ask why you've seemed distant since the news.",
            B: "By the time you talk again, your friend feels hurt that you weren't around for something exciting for them.",
            C: "Your friend appreciates the honesty. It doesn't stop them from being excited either. The friendship can hold both feelings just fine.",
            D: "Your friend hears the doubt behind your words, and it puts a real strain on the friendship going forward.",
            E: "The friendship never quite recovers its old closeness, and neither of you ever figures out exactly why."
          },
          concept: "Jealousy and real happiness for someone else aren't opposites. You can feel both at the same time. The mistake is thinking you have to pick just one to show.",
          takeaway: "Has jealousy ever cost you a friendship you didn't mean to lose?",
          lesson: {
            goal: "Students see that jealousy and being happy for someone can exist together, and practice saying both honestly without hurting the friend.",
            skills: ["Coping with emotions", "Interpersonal relationships"],
            focus: ["E", "D"],
            needs: "The smartboard.",
            prompts: [
              { q: "Was the jealousy about your friend, or about what you wanted?", listenFor: "About what I wanted. The friend didn't take anything from me." },
              { q: "Why does pretending feel safer than being honest?", listenFor: "Fear of seeming petty, or of losing the friend." },
              { q: "What would you want a friend to say if it was the other way round?", listenFor: "Something honest and kind. Not a fake smile, and not silence." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say both feelings",
                situation: "Your friend runs up to you: \"I got the lead role!\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Oh. Cool.\" (Then you walk off.)", note: "Your friend feels the chill and doesn't know why." },
                  { label: "Clear", strength: 2, text: "\"That's great, congrats!\" (While you feel awful inside.)", note: "Kind, but the hidden feeling usually leaks out later." },
                  { label: "Strong", strength: 3, text: "\"Honestly, I'm a bit jealous. I really wanted it. But I'm so happy for you. You're going to be great.\"", note: "Both feelings, said kindly. Most friends can handle that easily." }
                ]
              },
              {
                kind: "list",
                title: "Jealousy check: three questions",
                items: [
                  "What did I actually want?",
                  "Did my friend take it from me, or did they just get it?",
                  "What's one step I can take toward what I want?"
                ]
              }
            ],
            story: {
              body: "Ravi didn't make the school football team. His best friend did. For a week, Ravi made excuses not to hang out. Then he said, \"I was jealous, man. Sorry I went quiet.\" His friend laughed: \"I thought you were mad at me!\" They practiced together every Saturday after that.",
              question: "What did a week of silence cost both of them?"
            },
            practice: {
              title: "Say both",
              steps: [
                "Get into pairs.",
                "One of you shares some good news. Made up is fine. The other answers with both feelings: one honest, one kind.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How comfortable are you now with saying both feelings to a friend?",
            mission: "This week, notice one moment of jealousy, even a small one. Ask yourself: \"What did I actually want?\" You don't have to tell anyone."
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Staying Steady Under Pressure",
      scenarios: [
        {
          id: "the-panic-before-the-interview",
          title: "The Panic Before the Interview",
          hook: "You have a college or internship interview in ten minutes. Your mind is racing and you can feel your heart pounding.",
          predictionPrompts: [
            "What does the panic think will happen if you walk in like this?",
            "What's actually true about how ready you are, underneath the panic?"
          ],
          choices: [
            { id: "A", text: "Try to review every possible answer in your head one more time.", dcera: { D: 1, C: 2, E: 2, R: 1, A: 1 }, reason: "This adds more information to a mind that's already overloaded. It usually makes the panic worse, not better." },
            { id: "B", text: "Do a few minutes of slow, steady breathing before going in.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "This works directly on the physical panic in your body, instead of trying to think your way past it." },
            { id: "C", text: "Text a friend for reassurance right before walking in.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "This can really help, but only if they reply in time. It also doesn't do anything for the physical panic itself." },
            { id: "D", text: "Tell yourself the panic means you're not ready and consider rescheduling.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "This treats a normal physical response to pressure as proof that something is wrong, when it isn't." },
            { id: "E", text: "Push the feeling down and walk in acting completely calm.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This can work for a short while. But panic you push down often comes out later as stiffness or losing focus." }
          ],
          consequences: {
            A: "You walk in more overloaded than before, and the first question catches you off guard anyway.",
            B: "Your heart rate settles enough to think clearly, and you walk in able to actually listen to the first question.",
            C: "The reply comes just in time and genuinely helps. Though honestly, you got lucky with the timing.",
            D: "You reschedule, but the same panic is waiting for you at the new interview time, now with extra self-doubt too.",
            E: "You get through the first few questions fine, then visibly lose your calm partway through."
          },
          concept: "Panic is a physical state, not proof of whether you're ready. The fastest way out of it is almost never more thinking. It's something that works directly on the body.",
          takeaway: "What's actually worked for you before, in a moment like this?",
          lesson: {
            goal: "Students see that panic is a body state rather than a verdict on how ready they are, and practice two quick body-first tools for high-pressure moments.",
            skills: ["Coping with stress", "Self-awareness"],
            focus: ["D", "R"],
            needs: "The smartboard.",
            careNote: "If a student describes panic that happens often, panic attacks, or anxiety that stops them from going to school or sitting exams, take it seriously and connect them with the counselor.",
            prompts: [
              { q: "What does your body do when you panic?", listenFor: "Fast heart, shaky hands, dry mouth, racing mind. All normal stress responses." },
              { q: "Why doesn't more revising help in the last ten minutes?", listenFor: "The mind is already full. Panic isn't a knowledge problem." },
              { q: "What's worked for you before, even a little?", listenFor: "Breathing, music, walking, talking to someone. Collect these on the board." }
            ],
            examples: [
              {
                kind: "list",
                title: "Two tools for the last ten minutes",
                items: [
                  "Slow breathing: breathe in for 4, breathe out for 6. Keep going for one minute. A longer breath out helps your body calm down.",
                  "5-4-3-2-1: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. It pulls your mind back into the room."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If I'm this nervous, I'm not ready.", fact: "Nerves show up for things you care about. They say nothing about how prepared you are." },
                  { myth: "Calm people don't feel panic.", fact: "Most people feel it. Calm people have a few tools for getting through it." },
                  { myth: "One more read of my notes will fix it.", fact: "In the last few minutes, a calmer body helps more than more information." }
                ]
              }
            ],
            story: {
              body: "Aanya sat outside the interview room reading the same line of her notes again and again. Her hands were shaking. She put the notes away, breathed in for 4 and out for 6, and named things she could see: a clock, a plant, a poster. When they called her name, her heart was still fast, but she could think.",
              question: "Did the panic go away completely? Did it need to?"
            },
            practice: {
              title: "One calm minute",
              steps: [
                "Everyone together, sitting down.",
                "Round 1: slow breathing. In for 4, out for 6. The teacher counts out loud.",
                "Round 2: 5-4-3-2-1, silently, in your head. Afterward, share which tool felt better."
              ],
              rounds: [{ label: "Slow breathing", seconds: 60 }, { label: "5-4-3-2-1", seconds: 60 }]
            },
            exitCheck: "How ready do you feel to calm your body down before your next big moment?",
            mission: "This week, try one minute of slow breathing before something that makes you nervous: a test, a call, a match. Notice what changes in your body."
          }
        },
        {
          id: "when-youre-the-one-who-messed-up",
          title: "When You're the One Who Messed Up",
          hook: "You missed a deadline that affected your whole team's project. It's genuinely your fault, and you feel terrible about it.",
          predictionPrompts: [
            "What's the difference between feeling guilty and being useful right now?",
            "What does the team actually need from you in the next hour?"
          ],
          choices: [
            { id: "A", text: "Apologize repeatedly and keep bringing it up for days.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "The guilt is real. But apologizing over and over makes the team spend their energy comforting you instead of fixing the problem." },
            { id: "B", text: "Own it clearly once, then focus on what can still be fixed.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This takes real responsibility, without turning your guilt into one more problem for the team to manage." },
            { id: "C", text: "Explain the reasons the deadline was missed before apologizing.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Context can come later. Leading with it before you own the mistake usually just sounds like an excuse." },
            { id: "D", text: "Avoid the team for a day because you're too embarrassed to face them.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "The project still needs fixing. Your absence right now makes that harder for everyone, including you." },
            { id: "E", text: "Quietly work extra hours to fix it without saying anything to the team.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 3 }, reason: "This comes from a good place. But the team is left in the dark about what happened and what's being done about it." }
          ],
          consequences: {
            A: "The team reassures you again and again, but the fix gets delayed while everyone manages your guilt instead of the project.",
            B: "The team appreciates the directness, and the group moves quickly into fixing what's still fixable.",
            C: "The reasons might be true. But the team hears the excuse first and the apology second, so it doesn't land the way you meant it to.",
            D: "The project sits unaddressed for a day, and the team starts making decisions without you in the room.",
            E: "The fix happens, but the team is confused about what happened and whether it will happen again."
          },
          concept: "Guilt that turns into clear ownership helps everyone move forward. Guilt that turns into a performance for others to manage just adds a second problem on top of the first.",
          takeaway: "What's the difference between taking responsibility and punishing yourself?",
          lesson: {
            goal: "Students practice turning guilt into clear ownership: one direct apology, a plan to fix what's still fixable, and no self-punishment.",
            skills: ["Coping with emotions", "Effective communication"],
            focus: ["D", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student talks about punishing themselves, feeling worthless after mistakes, or hurting themselves, treat it as serious. Thank them, don't press for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "What does guilt make you want to do?", listenFor: "Hide, over-apologize, explain. Name these as normal." },
              { q: "Why does an excuse before an apology land badly?", listenFor: "It sounds like you care more about the blame than about the team." },
              { q: "What's the difference between taking responsibility and punishing yourself?", listenFor: "Responsibility fixes things and moves on. Punishing yourself keeps the focus on you." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Own it in one message",
                situation: "You missed the deadline. Your team's group chat has gone quiet.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"I'm so sorry, I'm the worst, I ruin everything, I'm so so sorry\"", note: "Now your team has to comfort you instead of fixing the project." },
                  { label: "Clear", strength: 2, text: "\"Sorry, I had a lot going on this week.\"", note: "Maybe true. But it sounds like an excuse." },
                  { label: "Strong", strength: 3, text: "\"I missed the deadline, that's on me. I can finish my part by 6 pm today. Can someone check the slides with me at 7?\"", note: "Owns it once, gives a fix and a time, and asks for what you need." }
                ]
              },
              {
                kind: "list",
                title: "The ownership formula",
                items: [
                  "Say what happened in one sentence, starting with \"I\".",
                  "Say what you'll do, and by when.",
                  "Ask for the one thing you need.",
                  "Then stop apologizing and get to work."
                ]
              }
            ],
            story: {
              body: "Kiran forgot to book the hall for the class event. He felt sick about it. He wrote to the class rep: \"I forgot to book the hall. My mistake. I've emailed the office and I'll go in at 8 am to sort it.\" The hall got booked for the next day. Nobody brought it up again.",
              question: "Why did nobody bring it up again?"
            },
            practice: {
              title: "Write the message",
              steps: [
                "Work as a team.",
                "Your team missed a deadline because of one person. Write the message that person should send, using the ownership formula.",
                "Read it out. The class checks: did it own it once, give a fix, and stop?"
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How sure are you that you could own a mistake without beating yourself up?",
            mission: "This week, the next time you get something wrong, even something small, say it in one sentence with \"I\" and a fix. Then let it go."
          }
        },
        {
          id: "the-argument-you-didnt-start",
          title: "The Argument You Didn't Start",
          hook: "A coworker snaps at you unfairly in front of others, over something that wasn't your fault. You feel your face getting hot.",
          predictionPrompts: [
            "What does snapping back actually accomplish here?",
            "What do you actually want to be true an hour from now?"
          ],
          choices: [
            { id: "A", text: "Snap back immediately, matching their tone.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This matches the escalation instead of stopping it. It's the opposite of what calming things down needs." },
            { id: "B", text: "Stay quiet in the moment, then address it privately later.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This keeps the public heat of the moment separate from the real conversation you need to have." },
            { id: "C", text: "Calmly point out, in the moment, that the tone wasn't fair.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 3 }, reason: "This can work. But correcting someone publicly in the same heated moment can sometimes restart the fight instead of ending it." },
            { id: "D", text: "Say nothing at all, ever, and let it go completely.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "This avoids conflict completely. But an unfair pattern that's never addressed usually just repeats." },
            { id: "E", text: "Complain to other coworkers about it afterward instead of addressing it directly.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This feels satisfying. But it fixes nothing, and it can make you look like the source of the tension instead of them." }
          ],
          consequences: {
            A: "The argument escalates in front of everyone, and both of you look worse for it than the original comment did.",
            B: "The private conversation goes well. Once the heat of the moment has passed, your coworker apologizes.",
            C: "It mostly lands fine, though the coworker feels slightly cornered in front of others and stays a little defensive after.",
            D: "The coworker snaps at you again a few weeks later, in a very similar way.",
            E: "Word gets back to the coworker secondhand, and now there are two unresolved tensions instead of one."
          },
          concept: "Not reacting in the heated moment isn't the same as ignoring it. When you respond matters just as much as what you say.",
          takeaway: "What's your usual gap between feeling provoked and actually responding? Is that gap working for you?",
          lesson: {
            goal: "Students practice separating the heated moment from the real conversation: staying steady in public, then raising it privately, calmly, and specifically.",
            skills: ["Coping with emotions", "Effective communication"],
            focus: ["D", "E"],
            needs: "The smartboard.",
            prompts: [
              { q: "What would snapping back have won you?", listenFor: "A few seconds of feeling better. Usually nothing else." },
              { q: "Why does a private conversation later work better?", listenFor: "Nobody has to save face, and both people are calmer." },
              { q: "When should you not wait, and speak up or get help right away?", listenFor: "If you feel unsafe, if it's abusive or discriminatory, or if waiting lets real harm happen. Then involve a manager or a trusted adult." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "The later conversation",
                situation: "An hour later, you find the coworker on their own.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You were really rude earlier. What's your problem?\"", note: "It starts round two of the argument." },
                  { label: "Clear", strength: 2, text: "\"About earlier, that wasn't my fault.\"", note: "Fair, but they may get defensive with nothing else to go on." },
                  { label: "Strong", strength: 3, text: "\"Got a minute? Earlier, what you said in front of everyone felt unfair. The delay came from the printer. Can we agree how to flag things like that next time?\"", note: "Specific, calm, about what happened, and it looks forward." }
                ]
              },
              {
                kind: "list",
                title: "Buy yourself time in the moment",
                items: [
                  "\"Let me look into that and get back to you.\"",
                  "\"Can we talk about this in a bit?\"",
                  "Take one slow breath before you say anything at all."
                ]
              }
            ],
            story: {
              body: "At her weekend café job, Neha's manager snapped at her about a wrong order that wasn't hers. She said, \"I'll check what happened,\" and kept working. After the rush, she showed him the order slip. He looked at it, sighed, and said, \"Sorry. Long day.\"",
              question: "What made the later conversation easier for both of them?"
            },
            practice: {
              title: "The second conversation",
              steps: [
                "Get into pairs.",
                "One of you is the coworker who snapped. The other starts the private conversation, using the strong example as a guide.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could stay steady now and raise it later?",
            mission: "This week, notice the gap between being provoked and answering back. If you can, stretch it by one breath before you respond."
          }
        }
      ]
    }
  }
};
