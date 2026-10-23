// Module: Communication & Conflict Resolution
// Content authored from the user's curriculum design (2026-08-17). Each
// choice carries a `dcera` score and `reason`, added 2026-08-18 for
// automatic scoring.
//
// Lessons added 2026-10-23 (third module after Decision-Making and Values &
// Emotions): every scenario carries a `lesson` object with the shape
// documented in content/decision-making.js. The two Communication Ladder
// scenarios use ladder rungs labeled Passive / Aggressive / Assertive, with
// only Assertive marked as the strong option.

const MODULE_COMMUNICATION_CONFLICT = {
  id: "communication-conflict",
  title: "Communication & Conflict Resolution",
  coreIdea: "Winning an argument is not the same as solving a problem.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · When Things Get Messy",
      scenarios: [
        {
          id: "the-group-project",
          title: "The Group Project",
          hook: "One student in your group barely did any work. But everyone still gets the same grade from the teacher.",
          predictionPrompts: [
            "What does this person need to hear?",
            "What would make this worse?"
          ],
          choices: [
            { id: "A", text: "Confront them in front of the group.", dcera: { D: 2, C: 1, E: 1, R: 2, A: 2 }, reason: "You do it in front of everyone. That usually makes people defensive instead of fixing anything." },
            { id: "B", text: "Ignore it and move on.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "You avoid the conflict completely. But the same problem will likely happen again next project." },
            { id: "C", text: "Tell the teacher what really happened.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "The teacher can fix the grade. But the group may stop trusting you directly." },
            { id: "D", text: "Suggest removing them from the group for future projects.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 2 }, reason: "This fixes the current project. But you never find out what was really going on with them." },
            { id: "E", text: "Talk to them privately.", dcera: { D: 4, C: 4, E: 5, R: 3, A: 4 }, reason: "You talk to the actual person, not just the grade problem, and you avoid the damage of confronting them in public." },
            { id: "F", text: "Ask them why they didn't contribute, before deciding anything.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "This is the only choice where you get the real story before deciding what to do." }
          ],
          consequences: {
            A: "They get defensive right away. The whole group feels the tension for the rest of the term, and the grade issue never really gets fixed.",
            B: "The grade stays the same. It happens again next project because nothing changed.",
            C: "The teacher looks into it. But the group starts to see you as someone who goes around them instead of talking directly.",
            D: "It solves this project. But the group dynamic changes for good, along with how this person sees you, and you never learn what was really going on with them.",
            E: "They're more honest one-on-one. You can talk about it without embarrassing them in front of others. It just takes more effort to set up.",
            F: "You find out they were dealing with something you didn't know about. It doesn't fix the grade, but it changes how you see the whole situation."
          },
          concept: "Winning an argument is not the same as solving a problem. Most of these choices deal with the grade. Only one deals with the actual person.",
          takeaway: "Would your answer change if you knew this person had a good reason for not contributing?",
          lesson: {
            goal: "Students practice getting the real story before judging, and raising a fairness problem with one person privately and kindly.",
            skills: ["Effective communication", "Empathy"],
            focus: ["E", "D"],
            needs: "The smartboard.",
            careNote: "If students mention that a classmate isn't contributing because of something at home, an illness, or stress, don't discuss it in front of the class. Check in privately, and tell the counselor if it sounds serious.",
            prompts: [
              { q: "What did your team want more: a fair grade, or to understand what happened?", listenFor: "Both are fair. Notice which one drove the choice." },
              { q: "Why does calling someone out in front of the group backfire?", listenFor: "Embarrassment makes people defend themselves instead of listening." },
              { q: "What might be going on with someone who stops doing their share?", listenFor: "Stress, trouble at home, not understanding the task, feeling left out." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Start the private conversation",
                situation: "After class, you catch your group member on their own.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You literally did nothing. Thanks a lot.\"", note: "They shut down or fight back, and you learn nothing." },
                  { label: "Clear", strength: 2, text: "\"You didn't do your part. That's not fair on us.\"", note: "True and direct, but it leaves no room for their side." },
                  { label: "Strong", strength: 3, text: "\"Hey, I noticed your part didn't get done. Is everything okay? What happened?\"", note: "Names the problem, then asks. Now you might hear the real story." }
                ]
              },
              {
                kind: "list",
                title: "Before you decide, find out",
                items: [
                  "What actually happened?",
                  "Is something going on that I don't know about?",
                  "What would make the next project work for everyone?"
                ]
              }
            ],
            story: {
              body: "Sneha's group was angry. Arjun hadn't sent his slides. Sneha messaged him on his own: \"Is everything okay?\" He wrote back that his grandfather was in hospital and he'd been there every evening. The group split his part for that week. On the next project, he did more than his share.",
              question: "How would the story have gone if Sneha had called him out in the group chat?"
            },
            practice: {
              title: "Ask first",
              steps: [
                "Get into pairs.",
                "One of you is the group member who didn't do the work. Decide your reason, but keep it secret.",
                "The other starts the conversation by asking, not accusing, and tries to find out the reason. Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How likely are you to ask what happened before deciding someone is lazy?",
            mission: "This week, when someone lets you down, try asking one question before you judge: \"What happened?\" Notice what you learn."
          }
        },
        {
          id: "the-rumour",
          title: "The Rumour",
          hook: 'Someone says: "I heard that you said something horrible about me." You didn\'t.',
          predictionPrompts: [
            "What's your first instinct when someone accuses you of something untrue?",
            "What does the other person actually need to hear from you?"
          ],
          choices: [
            { id: "A", text: "Deny it immediately and demand to know who told them.", dcera: { D: 2, C: 1, E: 1, R: 2, A: 2 }, reason: "You're technically right. But it feels like an attack, so it makes things worse instead of better." },
            { id: "B", text: "Get defensive and list all the ways this is unfair.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This makes the moment about your feelings instead of the actual accusation." },
            { id: "C", text: "Stay calm, ask what exactly they heard, and where.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This gets to the real source of the rumour, instead of just reacting to being accused." },
            { id: "D", text: "Apologize anyway, just to make the conversation end.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "This ends the conversation, but it confirms something false. It's a quick fix with a cost later." },
            { id: "E", text: "Ignore them until they calm down.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This buys you time. But the rumour keeps spreading uncorrected while you wait." }
          ],
          consequences: {
            A: "They feel like you're attacking back instead of talking to them. The conversation gets worse before it gets better, even though you're right.",
            B: "The conversation becomes about your feelings instead of theirs, and the actual rumour never gets traced or corrected.",
            C: "You find out where it came from and can address the real source. The other person feels heard instead of argued with.",
            D: "It ends the conversation. But you've now confirmed something false, and it might come back later as 'proof.'",
            E: "The rumour keeps spreading uncorrected while you wait it out, and the other person feels dismissed."
          },
          concept: "Conflict resolution doesn't start with defending yourself. It starts with understanding what the other person actually heard, and why they believed it.",
          takeaway: "How do you stay calm when you're accused of something you didn't do?",
          lesson: {
            goal: "Students practice staying calm when wrongly accused: asking what was heard and where, instead of attacking back or giving a fake apology.",
            skills: ["Effective communication", "Coping with emotions"],
            focus: ["D", "E"],
            needs: "The smartboard.",
            careNote: "If a student says rumours about them are spreading a lot, or online, it may be bullying. Follow up privately and tell the counselor.",
            prompts: [
              { q: "What do you want to do first when someone accuses you of something you didn't do?", listenFor: "Defend, shout, demand names. All normal urges." },
              { q: "Why does asking a question calm things down?", listenFor: "It shows you're listening, and it starts finding where the rumour came from." },
              { q: "Why is apologizing for something you didn't do risky?", listenFor: "It can be used as \"proof\" later." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it like this",
                situation: "\"I heard you said something horrible about me.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Who told you that? That's a lie!\"", note: "It feels like an attack, so they dig in." },
                  { label: "Clear", strength: 2, text: "\"I didn't say that.\"", note: "True, but they have no reason to believe you yet." },
                  { label: "Strong", strength: 3, text: "\"I didn't say that, and I get why you're upset. What exactly did you hear, and who from?\"", note: "Calm, shows you care that they're hurt, and starts finding the source." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If you stay calm, it looks like you're guilty.", fact: "Calm usually looks honest. Shouting is what makes people suspicious." },
                  { myth: "Saying sorry ends it.", fact: "Sorry for something you didn't do can be used against you later." },
                  { myth: "Rumours die if you ignore them.", fact: "Many keep spreading while you wait. A calm question can stop one at the source." }
                ]
              }
            ],
            story: {
              body: "Zoya heard that Tara had called her fake. Tara wanted to shout. Instead she asked, \"What exactly did you hear?\" Zoya showed her a screenshot. Someone had cropped Tara's message about a TV show so it looked like it was about Zoya. Five minutes later they were both annoyed at the same person.",
              question: "What would have happened if Tara had shouted first?"
            },
            practice: {
              title: "Calm under fire",
              steps: [
                "Get into pairs.",
                "One of you accuses the other of something made up and harmless, like \"You said my handwriting is ugly!\"",
                "The other stays calm and asks what exactly they heard, and from whom. Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How calm could you stay if someone accused you of something untrue tomorrow?",
            mission: "This week, if you hear something about someone, ask \"Where did you hear that?\" before you pass it on."
          }
        },
        {
          id: "best-friend-betrayal",
          title: "Best Friend Betrayal",
          hook: "Your best friend shares something private about you that you told them in confidence.",
          predictionPrompts: [
            "What does it actually take to resolve this conflict?",
            "Does resolving it have to mean staying friends?"
          ],
          choices: [
            { id: "A", text: "Confront them directly about it.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 4 }, reason: "This is the only choice built on the actual truth of what happened, no matter what comes next." },
            { id: "B", text: "Forgive them without saying anything.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "This keeps the friendship looking fine on the surface. But you may never rebuild real trust." },
            { id: "C", text: "Distance yourself without explaining why.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 2 }, reason: "This protects you quietly. But the other person never learns what they did or why it mattered." },
            { id: "D", text: "End the friendship.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 1 }, reason: "This is a clean, final answer. But you never find out if this was a one-time mistake or a pattern." }
          ],
          consequences: {
            A: "It's uncomfortable. But you both know exactly where things stand, and whatever happens next is based on the truth.",
            B: "The friendship continues on the surface, but the trust doesn't fully return, and you carry it quietly.",
            C: "They're confused and hurt, and they don't understand why. The friendship fades, and neither of you learns anything from it.",
            D: "It's final and clear. But you never find out if this was a one-time mistake or a pattern, because the conversation never happened."
          },
          concept: "Conflict resolution does not always mean getting back together. Sometimes the most honest outcome isn't staying friends. It's just knowing clearly what happened and why.",
          takeaway: "What's the difference between forgiving someone and staying close to them?",
          lesson: {
            goal: "Students practice telling a friend how broken trust felt, clearly and without attacking, and see that resolving a conflict doesn't always mean staying close.",
            skills: ["Interpersonal relationships", "Effective communication"],
            focus: ["D", "E"],
            needs: "The smartboard.",
            careNote: "If a student mentions that something very personal was shared about them (health, family, identity, or anything posted online), check in privately after class and tell the counselor. Never ask what the secret was in front of the class.",
            prompts: [
              { q: "What's harder: saying how you feel, or hearing their answer?", listenFor: "Fear of the friend's reaction, or of losing them." },
              { q: "Can you forgive someone and still not tell them secrets again?", listenFor: "Yes. Forgiving and trusting are different things." },
              { q: "What would you need to hear from them to trust them again?", listenFor: "A real apology with no excuses, and a change over time." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Tell them how it felt",
                situation: "You find out your best friend told other people something private you shared.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Saying nothing and slowly going cold.)", note: "They feel the distance and don't know why. Nothing gets fixed." },
                  { label: "Clear", strength: 2, text: "\"I can't believe you did that. I'm done.\"", note: "Honest, but it ends the talk before you learn anything." },
                  { label: "Strong", strength: 3, text: "\"I told you that in confidence, and it hurt to hear it from other people. I need to know why it happened.\"", note: "Says what happened, how it felt, and asks for their side." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "Forgiving means everything goes back to normal.", fact: "You can forgive someone and still decide what you share with them." },
                  { myth: "If you confront a friend, you'll lose them.", fact: "Honest talks often make friendships stronger. Silence is what usually ends them." },
                  { myth: "Resolving a conflict means staying friends.", fact: "Sometimes it just means both of you know what happened and why." }
                ]
              }
            ],
            story: {
              body: "Kavya told her best friend Riya who she had a crush on. A week later, half the class knew. Kavya waited a day, then said, \"That was private, and it really hurt.\" Riya said she'd thought it was harmless fun, and apologized. They're still friends. Kavya just shares a little less with her now, and that's okay.",
              question: "Did Kavya forgive Riya? Does she trust her the same way?"
            },
            practice: {
              title: "Say how it felt",
              steps: [
                "Get into pairs.",
                "One of you is the friend who broke a made-up secret. The other tells them how it felt, in three parts: what happened, how it felt, and what you need.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready are you to tell a friend when they've hurt you?",
            mission: "This week, think of one friend you really trust. Notice what makes that trust feel safe. You don't have to say anything to them."
          }
        },
        {
          id: "the-communication-ladder-l1",
          title: "The Communication Ladder",
          hook: "A friend borrowed ₹500 from you three weeks ago and hasn't brought it up since.",
          predictionPrompts: [
            "What happens if you say nothing at all?",
            "What happens if you demand it back right now, in front of others?"
          ],
          choices: [
            { id: "A", text: "Passive: say nothing and hope they remember on their own.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "Avoids the conflict but not the resentment, and the money may never come back." },
            { id: "B", text: "Aggressive: call them out publicly for forgetting.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 2 }, reason: "Gets the result but damages the relationship to get there." },
            { id: "C", text: "Assertive: bring it up privately and directly. Say something like, 'Hey, can you pay me back the ₹500 when you get a chance?'", dcera: { D: 5, C: 5, E: 5, R: 5, A: 5 }, reason: "Solves the actual problem directly, with no cost to the friendship either way." }
          ],
          consequences: {
            A: "You avoid conflict, but you're also quietly annoyed every time you see them, and the money may never come back.",
            B: "They pay you back, but they're embarrassed. The friendship now has a strained edge that wasn't there before.",
            C: "It's a five-second conversation, and it's resolved with no damage to the friendship either way."
          },
          concept: "Assertive isn't the halfway point between passive and aggressive. It's the only one of the three that actually solves the problem without creating a new one.",
          takeaway: "Which style is your default, and does it usually work?",
          lesson: {
            goal: "Students learn to tell passive, aggressive and assertive apart, and practice asking for something they're owed in one short, friendly sentence.",
            skills: ["Effective communication", "Interpersonal relationships"],
            focus: ["D", "A"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "Which style is your default: passive, aggressive, or assertive?", listenFor: "Honest answers. Most people use all three, in different places." },
              { q: "Why does asking feel so awkward when you're completely in the right?", listenFor: "Not wanting to seem greedy or rude. Worry about the friend's reaction." },
              { q: "What makes a request assertive and not aggressive?", listenFor: "Private, calm, specific, and no blame." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "The Communication Ladder",
                situation: "Your friend still owes you ₹500 from three weeks ago.",
                rungs: [
                  { label: "Passive", text: "(Saying nothing, and feeling annoyed every time you see them.)", note: "No conflict today. Resentment every day after." },
                  { label: "Aggressive", text: "\"Hey everyone, guess who still owes me money?\"", note: "You'll probably get paid. The friendship pays for it." },
                  { label: "Assertive", strength: 3, text: "\"Hey, can you pay me back the ₹500 when you get a chance?\"", note: "Five seconds, private, and friendly. Problem solved." }
                ]
              },
              {
                kind: "list",
                title: "What makes it assertive",
                items: [
                  "Say it privately.",
                  "Be specific: what, and how much.",
                  "Keep it calm and short. No blame, no lecture.",
                  "Make it easy to say yes: \"when you get a chance,\" or a clear day."
                ]
              }
            ],
            story: {
              body: "Aman lent his friend ₹300 for a new cricket bat grip. A month passed. Aman kept dropping hints like \"money's tight these days.\" His friend didn't get it. Finally Aman said, \"Hey, can I get that ₹300 back this week?\" His friend said, \"Oh no, I totally forgot!\" and paid him the next morning.",
              question: "Why didn't the hints work?"
            },
            practice: {
              title: "Climb the ladder",
              steps: [
                "Work as a team.",
                "Situation: a classmate keeps borrowing your pen and never gives it back.",
                "Write one passive, one aggressive, and one assertive line. Read them out in a random order, and the class guesses which is which."
              ],
              rounds: [{ label: "Write them", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could ask for what you're owed, the assertive way?",
            mission: "This week, notice your style when something bothers you: passive, aggressive, or assertive. Try one assertive sentence, even about something small."
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Conflict Beyond School",
      scenarios: [
        {
          id: "difficult-authority-figure",
          title: "Difficult Authority Figure",
          hook: "A teacher keeps criticizing your work in front of the whole class.",
          predictionPrompts: [
            "What happens if you say nothing?",
            "What happens if you react right away, in front of everyone?"
          ],
          choices: [
            { id: "A", text: "Say nothing and hope it stops.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "Nothing changes, and it starts affecting your work in that class too." },
            { id: "B", text: "React in the moment, in front of the class.", dcera: { D: 2, C: 1, E: 1, R: 1, A: 2 }, reason: "Understandable, but it puts the teacher on the defensive instead of open to change." },
            { id: "C", text: "Ask to speak privately. Say something like, 'When X happens, I feel Y, and I would prefer Z.'", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "The only option that gives the other person something to act on rather than defend against." },
            { id: "D", text: "Go straight to a higher authority, without speaking to the teacher first.", dcera: { D: 2, C: 3, E: 2, R: 3, A: 2 }, reason: "May solve the immediate problem, but damages the relationship for the rest of the year." }
          ],
          consequences: {
            A: "It doesn't stop, and you start dreading the class, which affects your work in it further.",
            B: "The teacher feels publicly challenged and becomes more defensive, not less. The pattern likely continues or gets worse.",
            C: "The teacher may not have realized the effect on you. Not guaranteed to work, but it's the only option that gives them a real chance to change.",
            D: "It may get addressed. But the teacher finds out you went around them, and that can damage the relationship for the rest of the year, no matter the outcome."
          },
          concept: "The 'When X happens, I feel Y, and I would prefer Z' structure isn't just about being polite. It's about giving the other person something to actually act on, instead of something to defend against.",
          takeaway: "What's the hardest part of saying this kind of thing to someone with more power than you?",
          lesson: {
            goal: "Students practice the \"When X happens, I feel Y, and I would prefer Z\" sentence for raising a problem with someone who has more power, privately and respectfully.",
            skills: ["Effective communication", "Self-awareness"],
            focus: ["D", "E"],
            needs: "The smartboard.",
            careNote: "If a student describes a real teacher or staff member humiliating them or treating them unfairly, don't discuss that person in front of the class. Talk to the student privately and pass it to the counselor or school leadership, following your school's process.",
            prompts: [
              { q: "What makes it so hard to speak up to someone with more power?", listenFor: "Fear of marks, of punishment, or of making it worse." },
              { q: "Why does a private conversation give the teacher a better chance to change?", listenFor: "No audience, so no need to defend themselves." },
              { q: "When should you go to another adult instead of talking to them first?", listenFor: "If you feel unsafe, if it's humiliating or abusive, or if talking already didn't work." }
            ],
            examples: [
              {
                kind: "list",
                title: "The X-Y-Z sentence",
                items: [
                  "When X happens: describe what they did, the way a camera would see it. No labels like \"rude\" or \"unfair\".",
                  "I feel Y: one honest feeling word.",
                  "I would prefer Z: one specific thing they could do instead."
                ]
              },
              {
                kind: "ladder",
                title: "Say it like this",
                situation: "You ask the teacher for two minutes after class.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You're always picking on me.\"", note: "It's a label, so they defend themselves instead of listening." },
                  { label: "Clear", strength: 2, text: "\"Can you stop criticizing my work in front of everyone?\"", note: "Direct and fair, but it can sound like an order." },
                  { label: "Strong", strength: 3, text: "\"When my work gets corrected in front of the class, I feel embarrassed and stop putting my hand up. I'd prefer feedback one-on-one or in writing.\"", note: "Describes what happened, how it felt, and gives them something easy to do." }
                ]
              }
            ],
            story: {
              body: "Rahul's maths teacher read out his wrong answers to the class twice in one week. Rahul asked to talk after class and used the X-Y-Z sentence. The teacher looked surprised and said, \"I thought I was helping everyone learn from it.\" After that, Rahul's corrections came on sticky notes.",
              question: "Did the teacher mean to embarrass Rahul? What changed once he knew?"
            },
            practice: {
              title: "Build the sentence",
              steps: [
                "Get into pairs.",
                "Pick a made-up situation with an adult in charge: a coach, a tutor, or a shop manager.",
                "Take turns saying the full X-Y-Z sentence out loud. The listener checks: was X a description, not a label?"
              ],
              rounds: [{ label: "Partner 1", seconds: 90 }, { label: "Partner 2", seconds: 90 }]
            },
            exitCheck: "How ready are you to raise a problem with someone who has more power than you?",
            mission: "This week, write one X-Y-Z sentence about something that bothers you, at home or at school. You don't have to say it. Just write it."
          }
        },
        {
          id: "workplace-conflict",
          title: "Workplace Conflict",
          hook: "You're an intern. Your supervisor gives you instructions that contradict what they said yesterday.",
          predictionPrompts: [
            "What does blaming your supervisor actually get you?",
            "What do you actually need to move forward?"
          ],
          choices: [
            { id: "A", text: '"You told me something completely different yesterday."', dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "You're technically right. But it puts your supervisor on the defensive instead of solving the confusion." },
            { id: "B", text: '"I want to make sure I understand the priority correctly. Could we agree on today\'s instructions?"', dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This clears up the actual confusion without anyone losing face. It's the most effective choice here." },
            { id: "C", text: "Guess which instruction to follow and hope it's right.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This might work. But it leaves the real miscommunication unresolved either way." },
            { id: "D", text: "Do nothing until they notice and clarify on their own.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "The task stalls, and it looks like you didn't take initiative, even though it wasn't your fault." }
          ],
          consequences: {
            A: "You're technically right, but it puts your supervisor on the defensive, and your working relationship gets a little more guarded.",
            B: "You get clarity without anyone losing face. Your supervisor notices you handle confusing situations well.",
            C: "You might guess right, or you might end up redoing the work. Either way, the real confusion never gets resolved.",
            D: "The task stalls, and it looks like you weren't proactive. But the contradiction wasn't your fault."
          },
          concept: "In a workplace, being right about who said what matters far less than getting the work unstuck. The goal isn't to win the disagreement. It's to move forward.",
          takeaway: "How is this different from how you'd handle a contradiction from a friend?",
          lesson: {
            goal: "Students practice getting unstuck when instructions conflict: checking the priority without blaming anyone, then confirming the plan in writing.",
            skills: ["Effective communication", "Problem solving"],
            focus: ["D", "A"],
            needs: "The smartboard.",
            prompts: [
              { q: "What do you gain by pointing out that they changed their mind?", listenFor: "Being right. It doesn't move the work forward." },
              { q: "Why do people at work give conflicting instructions?", listenFor: "They're busy, priorities changed, or they forgot. Rarely on purpose." },
              { q: "How is this different from a friend who changes plans?", listenFor: "More at stake, less room to argue, and writing things down matters more." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Check the priority",
                situation: "Yesterday: \"Finish the report.\" Today: \"Drop everything and do the slides.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You told me something completely different yesterday.\"", note: "True, but now they're defending themselves instead of deciding." },
                  { label: "Clear", strength: 2, text: "\"So I should stop the report?\"", note: "Fine, but you may still be unsure about deadlines." },
                  { label: "Strong", strength: 3, text: "\"Just to check: slides first, then back to the report? When do you need each one?\"", note: "Confirms the order and the deadlines without blaming anyone." }
                ]
              },
              {
                kind: "list",
                title: "Then confirm it in writing",
                items: [
                  "Send a short message after the chat.",
                  "\"Thanks! Slides by 4 pm today, report by Friday.\"",
                  "Now you both have the same plan, and a record if it changes again."
                ]
              }
            ],
            story: {
              body: "In her first week as an intern in a hospital office, Pooja got two different filing instructions from two seniors. Instead of picking one, she asked, \"Which one should I follow, so I don't mix things up?\" The seniors realized they had never agreed on it, and sorted it out in two minutes. Her supervisor mentioned it in her review.",
              question: "Why did one question fix a problem that wasn't Pooja's fault?"
            },
            practice: {
              title: "Clarify and confirm",
              steps: [
                "Get into pairs.",
                "One of you is the busy supervisor who gives a different instruction than yesterday. The other checks the priority, then says the follow-up message out loud.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How sure are you that you could clear up mixed instructions without blaming anyone?",
            mission: "This week, after someone gives you a task, repeat back the key detail: \"So that's due on Thursday?\" Notice how often it catches a mix-up."
          }
        },
        {
          id: "the-unfair-colleague",
          title: "The Unfair Colleague",
          hook: "A colleague takes credit for work you did.",
          predictionPrompts: [
            "What's the cost of saying nothing?",
            "What's the cost of escalating right away?"
          ],
          choices: [
            { id: "A", text: "Ignore it.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Leaves you with no record and a high chance it happens again." },
            { id: "B", text: "Confront them privately.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "Keeps it contained between the two of you, with an honest but uncertain outcome." },
            { id: "C", text: "Document your work going forward, say nothing yet.", dcera: { D: 3, C: 4, E: 2, R: 4, A: 3 }, reason: "Protects you for next time. But this specific time stays unresolved." },
            { id: "D", text: "Escalate to a manager immediately.", dcera: { D: 3, C: 3, E: 1, R: 4, A: 2 }, reason: "This works because a manager has authority. But the colleague is likely to see it as skipping the relationship entirely." },
            { id: "E", text: "Address it together. Raise it as something to sort out, not as an accusation.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 5 }, reason: "The option most likely to fix the actual pattern without permanently damaging the relationship." }
          ],
          consequences: {
            A: "It's likely to happen again, and you'll have no record to point to if it does.",
            B: "They may explain, apologize, or get defensive. But at least the issue stays between the two of you, not a bigger deal yet.",
            C: "You're protected going forward. But this specific time goes unaddressed.",
            D: "It gets resolved through authority instead of through the relationship. It works, but the colleague may see you as someone who escalates instead of talking.",
            E: "It takes more emotional effort, but it's the option most likely to fix the pattern without permanently damaging the working relationship."
          },
          concept: "Every one of these choices is defensible. The real question here is what matters more to you: being protected, being right, or keeping the relationship. Different situations call for different answers.",
          takeaway: "Would your answer change if this had happened three times before, not once?",
          lesson: {
            goal: "Students weigh what matters most when someone takes their credit (being protected, being right, or the relationship) and practice raising it as a problem to solve, not an accusation.",
            skills: ["Effective communication", "Critical thinking"],
            focus: ["D", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "What mattered most to your team: being protected, being right, or the relationship?", listenFor: "All three are fair. Different situations need different answers." },
              { q: "Does your answer change if it's the third time, not the first?", listenFor: "Yes. A pattern makes going to the manager more reasonable." },
              { q: "Why does keeping a record help, whatever you choose?", listenFor: "Facts are hard to argue with, and they protect you later." }
            ],
            examples: [
              {
                kind: "compare",
                title: "Two lists, before you decide",
                columns: [
                  { heading: "Talk to them first", get: ["A chance it was a misunderstanding", "The working relationship stays intact", "They hear it from you, not from the boss"], give: ["Time", "Some risk it happens again"] },
                  { heading: "Go to the manager first", get: ["Someone with authority acts", "The credit gets corrected fast"], give: ["The colleague's trust", "The chance to hear their side"] }
                ]
              },
              {
                kind: "ladder",
                title: "Raise it, don't accuse",
                situation: "You find the colleague after the meeting.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You stole my work and you know it.\"", note: "They defend themselves, and it becomes your word against theirs." },
                  { label: "Clear", strength: 2, text: "\"That analysis in the meeting was mine.\"", note: "Clear, but it leaves them nothing to do except agree or argue." },
                  { label: "Strong", strength: 3, text: "\"In the meeting, the analysis was presented as yours, but I did it. Can we fix that with the manager, and agree how we credit shared work from now on?\"", note: "States the fact, asks for a fix, and plans for next time." }
                ]
              }
            ],
            story: {
              body: "Meher's teammate presented her survey results as his own at a club meeting. She kept her notes, then talked to him afterward: \"Those were my results. Can we tell the group?\" He said he'd meant \"our team's\" results. At the next meeting he said, \"Meher did this part,\" and she has been credited ever since.",
              question: "What did keeping her notes give Meher, even before she talked to him?"
            },
            practice: {
              title: "Make the call",
              steps: [
                "Work as a team.",
                "Same situation, but it's the third time it has happened. Decide: talk to them first, or go to the manager?",
                "Write your first sentence and one reason. Then share. There's no single right answer."
              ],
              rounds: [{ label: "Decide", seconds: 90 }]
            },
            exitCheck: "How clear are you on how you'd handle someone taking credit for your work?",
            mission: "This week, keep a quick record of one thing you did in a group: a note or a message with the date. See how it feels to have it."
          }
        },
        {
          id: "the-communication-ladder-l2",
          title: "The Communication Ladder",
          hook: "A colleague keeps interrupting you mid-sentence in team meetings.",
          predictionPrompts: [
            "What happens if you let it keep happening?",
            "What happens if you snap at them in the meeting?"
          ],
          choices: [
            { id: "A", text: "Passive: say nothing and let it keep happening.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "The interruptions continue, and you start speaking up less in every meeting, not just this one." },
            { id: "B", text: "Aggressive: snap at them in front of the team.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Likely stops it, but at the cost of how the team sees you afterward." },
            { id: "C", text: "Assertive: talk to them privately. Say something like, 'I've noticed I get interrupted a lot in meetings. Can we work on that?'", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This names the pattern directly and calmly. It's the option most likely to actually change it." }
          ],
          consequences: {
            A: "It continues, and you start saying less in meetings altogether. That costs you visibility, not just airtime.",
            B: "It probably stops, but you're now known as someone who reacts sharply, which can outweigh being right.",
            C: "It's a short, low-drama conversation, and most people genuinely don't realize they're doing it until it's named directly."
          },
          concept: "Assertive isn't the halfway point between passive and aggressive. It's the only one of the three built to actually change the pattern instead of just reacting to it.",
          takeaway: "Which style is your default at work or school, and does it usually work?",
          lesson: {
            goal: "Students practice naming a pattern assertively and privately so it changes, instead of putting up with it or snapping in public.",
            skills: ["Effective communication", "Self-awareness"],
            focus: ["A", "D"],
            needs: "The smartboard.",
            prompts: [
              { q: "What does being interrupted again and again do to how you speak in meetings?", listenFor: "You speak less, or stop trying altogether." },
              { q: "Do most people know they interrupt?", listenFor: "Usually not. That's why naming it works." },
              { q: "What can you say in the moment, before the private talk?", listenFor: "\"Let me finish this point,\" said calmly." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "The Communication Ladder",
                situation: "Your colleague cuts you off mid-sentence, again.",
                rungs: [
                  { label: "Passive", text: "(Stopping mid-sentence and never finishing the point.)", note: "The idea is lost, and the pattern keeps going." },
                  { label: "Aggressive", text: "\"Can you stop interrupting me for once?\" (In front of the team.)", note: "It may stop it. People remember the snap more than your point." },
                  { label: "Assertive", strength: 3, text: "\"I've noticed I get cut off in meetings a lot. Can you let me finish, and I'll do the same for you?\"", note: "Private, calm, names the pattern, and offers something back." }
                ]
              },
              {
                kind: "list",
                title: "In the moment",
                items: [
                  "\"Let me finish this point, then I'd love to hear yours.\"",
                  "Keep your voice level, and keep going.",
                  "Have the private conversation later."
                ]
              }
            ],
            story: {
              body: "In every student council meeting, Farhan finished Ishaan's sentences for him. After one meeting, Ishaan said, \"You probably don't notice, but you cut me off a lot. Can you let me finish?\" Farhan was embarrassed. He really hadn't noticed. At the next meeting, he caught himself twice and said, \"Sorry, go on.\"",
              question: "Why did Farhan need someone to tell him?"
            },
            practice: {
              title: "Hold the floor",
              steps: [
                "Get into pairs.",
                "One of you explains your favourite food. The other keeps interrupting.",
                "The speaker says \"Let me finish this point\" and keeps going. Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could calmly stop someone talking over you?",
            mission: "This week, notice how often you interrupt others. Try letting one person finish completely before you speak."
          }
        }
      ]
    }
  }
};
