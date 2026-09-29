// Module: Decision-Making & Consequences
// Content authored from the user's curriculum design (2026-08-17). Choices
// were explicit for Scenario 1 only in the original design — Scenarios 2-3
// (both levels) had their choices authored to fit the given premise.
// Each choice carries a `dcera` score (Decision quality, Consequence
// awareness, Empathy, Risk assessment, Adaptability, 1-5 each) and a `reason`
// — added 2026-08-18 to support automatic scoring, revealed to teams after
// all teams have answered a scenario.
//
// Prototype, 2026-08-21: this is the first module to use the "compounding
// scenarios" mechanic. A choice can carry `setsFlag: "name"` to mark a team
// with that flag for the rest of the session. A later choice can carry
// `reasonCallbacks: { "name": "extra sentence" }` — if the acting team holds
// that flag from an EARLIER scenario, the extra sentence is appended under
// their result card. Flags are per-team, session-only (see `state.flags` in
// engine.js), and never change the shared hook/choices everyone sees — only
// a flagged team's own result callback. Two pairs are wired up here: L1
// "everyone-is-doing-it" -> "study-or-help", and L2 "the-30000-choice" ->
// "the-opportunity-cost".
//
// Phase 1 pilot, 2026-09-29: every scenario here also carries a `lesson`
// object, which powers "Full lesson" mode in engine.js and the printable
// teacher guide (guide.html). `goal`, `prompts[].listenFor` and `careNote`
// are teacher-only and never shown on the class screen. `examples` blocks
// are rendered by lesson-blocks.js; supported kinds are ladder, numbers,
// list, mythfact and compare.

const MODULE_DECISION_MAKING = {
  id: "decision-making",
  title: "Decision-Making & Consequences",
  coreIdea: "Every decision closes some doors and opens others.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Decisions Around Me",
      scenarios: [
        {
          id: "everyone-is-doing-it",
          title: "Everyone Is Doing It",
          hook: "A friend group wants to sneak out of school during lunch.",
          predictionPrompts: [
            "What happens in 10 minutes?",
            "What happens tomorrow?",
            "What happens if someone gets injured?",
            "What happens to the friendship?",
            "What happens if parents find out?",
            "What happens if nobody finds out?"
          ],
          choices: [
            { id: "A", text: "Go with them.", dcera: { D: 2, C: 2, E: 3, R: 1, A: 2 }, reason: "You followed the group without a real plan for what happens if you get caught. The risk wasn't worth what you gained.", setsFlag: "went-along-without-a-plan" },
            { id: "B", text: "Refuse.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "This keeps you safe from the real risk, even though it costs you some social comfort for a little while.", setsFlag: "named-the-risk" },
            { id: "C", text: "Tell a teacher.", dcera: { D: 3, C: 3, E: 2, R: 5, A: 2 }, reason: "This stops the risk completely, but skips talking to the group directly first. It costs some trust for a safer outcome." },
            { id: "D", text: "Go but return before anyone notices.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 2 }, reason: "This works this time, but that's luck, not good judgment. It also makes the next risky choice easier to say yes to." },
            { id: "E", text: "Suggest something else.", dcera: { D: 4, C: 4, E: 4, R: 4, A: 5 }, reason: "You offer another idea instead of just reacting. It's the most flexible choice here, even though you can't control what others do." }
          ],
          consequences: {
            A: "You sneak out with the group and make it back before the bell rings. But a hall monitor notices five missing faces at the cafeteria count and tells your homeroom teacher. Nothing happens today, but your name is now on a list.",
            B: "You stay behind. The group teases you for a day, then forgets about it. Two of them get caught by a teacher on the way back and get a warning.",
            C: "The teacher steps in before anyone leaves. The group is annoyed with you for about a week. No one gets in trouble, but no one asks you to come along next time either.",
            D: "You make it back in time. This time. Now the group knows this works, so the next 'let's sneak out' becomes a much easier yes.",
            E: "You suggest staying and doing something else instead. Half the group stays with you. The rest leave without you, and they get caught."
          },
          concept: "This is peer pressure wearing a mask of loyalty. The real skill isn't picking the 'right' letter. It's the habit you just practiced: thinking about what happens in 10 minutes and what happens tomorrow, and noticing which one you were actually weighing.",
          takeaway: "What would you do differently if this exact situation came up again next week?",
          lesson: {
            goal: "Students notice the gap between what happens in 10 minutes and what happens tomorrow, and practice one way to say no without losing the group.",
            skills: ["Decision making", "Critical thinking"],
            focus: ["R", "A"],
            needs: "The smartboard. Optional: printed mission strips.",
            prompts: [
              { q: "Which choice felt easiest in the moment? Why?", listenFor: "\"Everyone was going.\" Name it when you hear it." },
              { q: "What does tomorrow look like after each choice?", listenFor: "Trust, reputation, and the next time someone asks." },
              { q: "When did the real decision happen?", listenFor: "Before the lunch bell. At the first \"maybe.\"" }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it like this",
                situation: "Your friends are sneaking out at lunch and want you to come.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Umm... I don't know, maybe later?\"", note: "The group hears a maybe, and asks again tomorrow." },
                  { label: "Clear", strength: 2, text: "\"No, I'm staying.\"", note: "It works. You're on your own for lunch." },
                  { label: "Strong", strength: 3, text: "\"I'm staying back. Samosas at the canteen today, anyone coming?\"", note: "A clear no, plus somewhere else to be. Some of the group might follow you." }
                ]
              }
            ],
            story: {
              body: "Kabir said \"maybe next time\" the first time his friends sneaked out. The second time too. By the third time, \"maybe\" had turned into a promise, and saying no felt like breaking it. He went. Nothing happened that day. The next week, it was easier to go again.",
              question: "When did Kabir actually decide?"
            },
            practice: {
              title: "Say no, keep the friend",
              steps: [
                "Get into pairs.",
                "One of you is the friend who keeps pushing. The other says no, using a line from the board or your own words.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready are you to say no next time your group pushes?",
            mission: "This week, notice one moment you said yes because everyone else did. Don't fix it. Just notice it, and bring it next time."
          }
        },
        {
          id: "the-screenshot",
          title: "The Screenshot",
          hook: "A friend sends you a private screenshot of another student's embarrassing conversation. The group wants to forward it.",
          predictionPrompts: [
            "What happens if it spreads?",
            "What happens if the person in it finds out who forwarded it?",
            "What happens if a parent or teacher sees it?",
            "What happens to your friendship with the group either way?"
          ],
          choices: [
            { id: "A", text: "Forward it to the group chat like everyone else.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This directly causes the harm this scenario is about. It's the choice with the least awareness of what could happen." },
            { id: "B", text: "Don't forward it, but don't say anything either.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "You avoid causing harm yourself, but you do nothing to stop it either. Staying quiet still has a cost." },
            { id: "C", text: "Tell the group to stop and delete it.", dcera: { D: 4, C: 3, E: 4, R: 3, A: 4 }, reason: "You take a real stand with the group, even though you can't fully undo what's already spreading." },
            { id: "D", text: "Message the person in the screenshot to warn them.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 4 }, reason: "This puts the person who's actually affected first, and gives them the earliest possible chance to respond." },
            { id: "E", text: "Tell a teacher or counselor about it.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "This is the most effective way to stop the harm, even though it costs the group's trust for a while." }
          ],
          consequences: {
            A: "You forward it. Within an hour it spreads to three other group chats, and someone adds a cruel caption. The person in it finds out you were one of the people who sent it on. Not the first, but not the last either.",
            B: "You stay silent and don't forward it, but you don't stop it either. It spreads anyway. Later, the group assumes you were 'in on it' because you never said anything.",
            C: "You ask the group to stop. Two people listen, but one had already forwarded it before you spoke up. It still spreads, but slower, and the group remembers you tried.",
            D: "You warn the person in the screenshot directly. They're upset but grateful for the warning, and manage to get ahead of it before it spreads much further.",
            E: "You tell a teacher. The school steps in fast and the spread stops within the day. Word gets around that you 'told,' and it takes a few weeks to rebuild some trust with the group."
          },
          concept: "The real decision wasn't the moment you forwarded it. It was the ten seconds right after you first saw it. Staying silent, waiting, and acting all count as decisions, even the ones that don't feel like a choice.",
          takeaway: "Which of these consequences surprised you most, and why?",
          lesson: {
            goal: "Students see that staying silent is also a choice, and practice one short message that slows a harmful forward without attacking anyone.",
            skills: ["Empathy", "Critical thinking"],
            focus: ["E", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student mentions a real screenshot going around about someone at school, don't discuss it in front of the class. Follow up privately, and tell the counselor the same day.",
            prompts: [
              { q: "If the screenshot was about you, when would you want someone to act?", listenFor: "Right away. Before it spreads." },
              { q: "Why is staying quiet so easy here?", listenFor: "\"It's not my fault.\" \"Nobody blames the quiet one.\"" },
              { q: "What's the smallest thing that could slow it down?", listenFor: "Not forwarding it. One message. Telling the person." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it in the group chat",
                situation: "Someone posts the screenshot in your group chat. Three people have already sent a laughing emoji.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"😬\"", note: "It reads like a laugh. The screenshot keeps moving." },
                  { label: "Clear", strength: 2, text: "\"Not forwarding this.\"", note: "You're out of it. Others might keep going." },
                  { label: "Strong", strength: 3, text: "\"Guys, delete this. If it was one of us, we'd want the same.\"", note: "It names the harm and gives everyone an easy way to stop, without anyone looking bad." }
                ]
              }
            ],
            story: {
              body: "Meera saw the screenshot at 9:12 pm. She typed \"delete this\" and then deleted her own message. Twice. By 9:40 it was in three other groups. The next day, four people told her they'd thought the same thing and didn't say it either.",
              question: "What stopped everyone from saying it first?"
            },
            practice: {
              title: "Group chat drill",
              steps: [
                "Work as a team.",
                "Write the one message you'd actually send in that group chat. One line only.",
                "When time's up, each team reads theirs out. The class picks the one most likely to work."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How likely are you to speak up in a group chat next time something like this happens?",
            mission: "This week, notice one message in a group chat that someone would hate to see about themselves. See how fast it moves. If it feels safe, try the smallest move: don't forward it."
          }
        },
        {
          id: "study-or-help",
          title: "Study or Help?",
          hook: "You have an exam tomorrow. Your closest friend is having a serious personal problem and wants to talk.",
          predictionPrompts: [
            "What happens to your exam either way?",
            "What happens to your friend either way?",
            "What does your friend actually need right now?",
            "What do you need right now?"
          ],
          choices: [
            { id: "A", text: "Tell your friend you can't talk right now, you need to study.", dcera: { D: 2, C: 2, E: 1, R: 4, A: 2 }, reason: "This protects your exam outcome completely, but leaves your friend without support at a hard moment." },
            { id: "B", text: "Make time for a short conversation, then go back to studying.", dcera: { D: 4, C: 4, E: 4, R: 4, A: 5 }, reason: "This balances both needs directly instead of treating them like you can only pick one." },
            { id: "C", text: "Set the exam aside and be there for your friend.", dcera: { D: 4, C: 3, E: 5, R: 2, A: 3 }, reason: "This puts the relationship first. It's the right call if your friend's need is serious enough." },
            { id: "D", text: "Suggest they talk to a counselor, and offer to sit with them while they do.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "This gets your friend real support without making yourself their only resource. It works better for both of you.", reasonCallbacks: { "named-the-risk": "You did something like this earlier today too. Back then, you named the risk instead of just going along with it. That's starting to look like a pattern, not a one-time thing." } },
            { id: "E", text: "Try to do both at once, half-focus on studying while texting back.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "This splits your attention so thin that neither the exam nor the friendship gets what it actually needed.", reasonCallbacks: { "went-along-without-a-plan": "This looks a bit like what happened earlier today too. Both times, you tried to avoid picking one clear path instead of facing the trade-off head-on. Worth noticing." } }
          ],
          consequences: {
            A: "You study uninterrupted and do well on the exam. Your friend gets through the night on their own, and later tells you they felt alone at a bad moment.",
            B: "You give them 20 focused minutes, then return to your books. You do reasonably well on the exam, and your friend appreciates that you showed up even briefly.",
            C: "You spend the evening with your friend. Your exam performance suffers a little, but your friend later says that night mattered more than anything else that week.",
            D: "You point your friend toward a counselor and stay while they make the call. It takes the pressure off you to have every answer, and your exam prep mostly stays on track.",
            E: "You try to do both. Your exam performance drops, and your friend can tell mid-conversation that you're distracted. The support lands half-hearted either way."
          },
          concept: "This isn't really a time-management problem. Boundaries and care aren't opposites. The skill is being honest with yourself and your friend about which one this moment actually calls for.",
          takeaway: "How would you tell your friend which choice you made, without it sounding like an excuse?",
          lesson: {
            goal: "Students see that caring for a friend and keeping a limit can go together, and practice offering clear time plus a next step, including a trusted adult when a problem is too big.",
            skills: ["Empathy", "Interpersonal relationships"],
            focus: ["E", "A"],
            needs: "The smartboard. Optional: printed mission strips.",
            careNote: "If a student says a friend has talked about hurting themselves or feeling unsafe, treat it as serious. Thank them, don't press for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "What does your friend need tonight: a fix, or someone to listen?", listenFor: "Someone to listen. Not to be alone." },
              { q: "Is saying \"I have 20 minutes\" kind or cold?", listenFor: "Honest limits can be kind. They help both people." },
              { q: "When is a problem too big for a friend to handle alone?", listenFor: "Safety, anything about getting hurt, anything that scares you. That's when an adult needs to know." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it like this",
                situation: "It's 10 pm. Your exam is tomorrow. Your closest friend texts: \"can we talk? it's bad\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"sorry cant, exam tmrw\"", note: "True, but the door closes right when they needed it open." },
                  { label: "Clear", strength: 2, text: "\"I'm here. Can we talk for 20 minutes? Then I have to study.\"", note: "They get you, and you keep your night." },
                  { label: "Strong", strength: 3, text: "\"I'm here for the next 20 minutes. And tomorrow after the exam, let's go see the counselor together. You don't have to carry this alone.\"", note: "Time now, plus a next step with someone who can really help." }
                ]
              }
            ],
            story: {
              body: "Tanvi told her friend, \"I've got twenty minutes, and I'm all yours for those twenty.\" She set a timer. When it rang, her friend laughed and said, \"Go study. This helped.\" The next day, they went to the counselor together.",
              question: "Why did the timer make it easier for both of them?"
            },
            practice: {
              title: "Time plus a next step",
              steps: [
                "Get into pairs.",
                "One of you is the friend who needs to talk. The other offers a clear amount of time and one next step.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How sure are you that you could help a friend and still keep your limits?",
            mission: "This week, when someone asks for your time, try saying exactly how much you can give. \"I've got 10 minutes.\" Notice how they react."
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Decisions That Shape My Future",
      scenarios: [
        {
          id: "the-30000-choice",
          title: "The ₹30,000 Choice",
          hook: "You receive ₹30,000. Six months from now, your laptop breaks and repairs cost ₹18,000. But you don't know that yet.",
          predictionPrompts: [
            "What would you do with unexpected money right now?",
            "What's the chance something unplanned comes up in the next six months?"
          ],
          choices: [
            { id: "A", text: "Buy a phone.", savedAmount: 3000, dcera: { D: 2, C: 1, E: 3, R: 1, A: 2 }, reason: "This spends almost everything on something you want, with no cushion left. It feels good now, but leaves you exposed later.", setsFlag: "spent-with-no-cushion" },
            { id: "B", text: "Save it.", savedAmount: 30000, dcera: { D: 4, C: 5, E: 3, R: 5, A: 3 }, reason: "This gives you the most protection against the unknown, even though it puts off everything you want right now.", setsFlag: "protected-the-downside" },
            { id: "C", text: "Invest it.", savedAmount: 30000, locked: true, dcera: { D: 3, C: 2, E: 3, R: 2, A: 2 }, reason: "This is a good long-term instinct, but locked-up money can't help with a short-term emergency. That's a real blind spot." },
            { id: "D", text: "Take a short trip.", savedAmount: 5000, dcera: { D: 2, C: 2, E: 4, R: 1, A: 3 }, reason: "This spends on an experience instead of a thing, but still leaves you very little cushion." },
            { id: "E", text: "Buy something you've wanted for years.", savedAmount: 5000, dcera: { D: 3, C: 2, E: 3, R: 1, A: 3 }, reason: "This is a thought-out want, not an impulse buy. But it still leaves little room for what comes next." },
            { id: "F", text: "Spend ₹10,000 and save ₹20,000.", savedAmount: 20000, dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "This is the clearest balance. You enjoy some of it now while staying protected against most surprises." },
            { id: "G", text: "Use it for a course.", savedAmount: 2000, dcera: { D: 4, C: 2, E: 3, R: 1, A: 4 }, reason: "This invests in yourself directly, which pays off later, but it leaves almost no room for the unexpected right now." }
          ],
          followUpEvent: "Six months later: your laptop suddenly breaks. Repairs cost ₹18,000.",
          consequenceFor(choiceId) {
            const choice = this.choices.find(c => c.id === choiceId);
            const saved = choice.savedAmount;
            if (choice.locked) {
              return "Your ₹30,000 is invested and can't be withdrawn quickly without a penalty. You have to borrow the ₹18,000 or wait to get the repair done.";
            }
            if (saved >= 18000) {
              return `You cover the repair without any stress, with ₹${saved - 18000} left over.`;
            }
            const gap = 18000 - saved;
            return `You're short by ₹${gap}. You borrow the difference from family, or wait on the repair and explain where the money already went.`;
          },
          concept: "Saving isn't really about the amount. It's about what it can absorb when something unplanned happens. Six months later, the choice that felt like 'the fun option' or 'the safe option' shows its real cost.",
          takeaway: "Would you make the same choice again, now that you know what came next?",
          lesson: {
            goal: "Students see that savings exist to absorb surprises, and practice splitting surprise money between enjoying some now and protecting against what's coming.",
            skills: ["Decision making", "Problem solving"],
            focus: ["C", "R"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "Which choice looked best before you knew about the laptop?", listenFor: "The fun ones. That's normal. Surprises don't announce themselves." },
              { q: "What's one surprise cost you've seen in real life?", listenFor: "Phones, repairs, doctor visits, fees." },
              { q: "Why not save all of it?", listenFor: "Enjoying some of it matters too. The goal is a buffer, not zero fun." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: the laptop test",
                intro: "Every choice, six months later, when the ₹18,000 repair arrives.",
                rows: [
                  { label: "Buy a phone", value: "Short ₹15,000", tone: "bad" },
                  { label: "Save it", value: "₹12,000 left", tone: "good" },
                  { label: "Invest it", value: "Locked. Can't reach it in time.", tone: "bad" },
                  { label: "Take a short trip", value: "Short ₹13,000", tone: "bad" },
                  { label: "Buy something you've wanted for years", value: "Short ₹13,000", tone: "bad" },
                  { label: "Spend ₹10,000, save ₹20,000", value: "₹2,000 left", tone: "good" },
                  { label: "Use it for a course", value: "Short ₹16,000", tone: "bad" }
                ],
                note: "Only two choices get through the repair without borrowing. One of them still let you enjoy ₹10,000."
              }
            ],
            story: {
              body: "Rohan got ₹15,000 from relatives at Diwali. He split it: ₹5,000 to enjoy, and ₹10,000 into a savings account he couldn't spend from his phone. In March his phone screen cracked. The repair was ₹6,500. He paid it and still had ₹3,500 left.",
              question: "What did the ₹5,000 do for him? Why not save all of it?"
            },
            practice: {
              title: "Split it",
              steps: [
                "Work as a team.",
                "Your team just got ₹12,000 of surprise money. Decide how much you'll enjoy now and how much you'll keep.",
                "Write down one surprise your savings would cover. Then share with the class."
              ],
              rounds: [{ label: "Decide", seconds: 90 }]
            },
            exitCheck: "How sure are you about what you'd do with surprise money now?",
            mission: "This week, keep track of every unplanned cost in your own life, even small ones like a snack or a recharge. Add them up at the end of the week."
          }
        },
        {
          id: "the-easy-career",
          title: "The Easy Career",
          hook: "You're choosing between two paths, with only partial information about each.",
          predictionPrompts: [
            "What matters more to you right now: security or growth?",
            "What information are you missing that you wish you had?"
          ],
          choices: [
            { id: "A", text: "Career A: ₹45,000 starting salary, high job security, work you find boring.", dcera: { D: 3, C: 4, E: 2, R: 5, A: 2 }, reason: "This choice goes for stability and predictability. It's a fair choice, even if it costs you fulfillment down the road." },
            { id: "B", text: "Career B: ₹20,000 starting salary, high uncertainty, strong growth potential, work you genuinely enjoy.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 5 }, reason: "This choice goes for growth and interest over certainty. It's just as fair a choice, but at a real financial cost." }
          ],
          consequences: {
            A: "One year in, the job is stable, but you dread Mondays. A friend who chose the uncertain path is being offered more responsibility elsewhere, and you find yourself wondering what that would have felt like.",
            B: "One year in, it's been a tight year money-wise, but you've started to specialize in something you're genuinely good at. Your income is still well below Career A's, and some days that's hard to sit with."
          },
          concept: "Neither path is the 'smart' one on its own. This is a decision made with incomplete information, the same way it happens outside a classroom. The skill is noticing what you're actually trading off, not searching for a hidden correct answer.",
          takeaway: "Was your first-year outcome what you expected when you chose?",
          lesson: {
            goal: "Students practice deciding with incomplete information: naming what they're trading off, and what they'd need to find out before choosing for real.",
            skills: ["Self-awareness", "Critical thinking"],
            focus: ["D", "A"],
            needs: "The smartboard.",
            prompts: [
              { q: "What was your team really choosing: money, safety, or interest?", listenFor: "Clear trade-offs. Both answers are fair." },
              { q: "What information did you wish you had?", listenFor: "Real salaries a few years in, what the work is like day to day, whether you could switch later." },
              { q: "Who could you ask to find that out?", listenFor: "People doing the job. Family, older students, teachers." }
            ],
            examples: [
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "The high-paying path is the safe path.", fact: "Pay is one kind of safety. Skills that move with you to other jobs are another." },
                  { myth: "Whatever you pick at 17 is forever.", fact: "Plenty of people change direction in their twenties. Skills carry over more than job titles do." },
                  { myth: "If you love the work, money won't matter.", fact: "Money stress is real. It helps to know the lowest income you could actually live on." }
                ]
              },
              {
                kind: "list",
                title: "Ask before you choose",
                items: [
                  "Who do I know doing this work, and what does their Monday look like?",
                  "What's the lowest salary I could actually live on?",
                  "What skills would this give me that work in other jobs too?"
                ]
              }
            ],
            story: {
              body: "Two cousins, same year. Priya took a steady bank job. Ankit joined a small design studio for half the pay. Three years later, both said they'd choose the same again, for different reasons. Priya liked knowing her weekends were free. Ankit liked that his work felt like his own.",
              question: "What was each of them really choosing?"
            },
            practice: {
              title: "Interview your future self",
              steps: [
                "Get into pairs.",
                "One of you is you, five years into Career A. The other asks the three questions from \"Ask before you choose.\"",
                "Swap. This time, answer as you in Career B."
              ],
              rounds: [{ label: "Career A", seconds: 90 }, { label: "Career B", seconds: 90 }]
            },
            exitCheck: "How clear are you on what matters most to you in a career?",
            mission: "This week, ask one adult you know: \"What do you wish you'd known before choosing your work?\" Bring back one sentence."
          }
        },
        {
          id: "the-opportunity-cost",
          title: "The Opportunity Cost",
          hook: "You're offered a prestigious internship. Taking it means missing a college-prep programme and losing time with friends and exam study.",
          predictionPrompts: [
            "What are you actually giving up if you say yes?",
            "What are you actually giving up if you say no?"
          ],
          choices: [
            { id: "A", text: "Accept the internship.", dcera: { D: 3, C: 3, E: 2, R: 2, A: 4 }, reason: "This chooses growth and experience, knowing it costs preparation time you can't get back.", reasonCallbacks: { "spent-with-no-cushion": "This matches your ₹30,000 call earlier too. You lean toward the upside even when it leaves less of a safety net. Not wrong, just something worth knowing about how you decide." } },
            { id: "B", text: "Decline and stay in the college-prep programme.", dcera: { D: 3, C: 4, E: 3, R: 4, A: 2 }, reason: "This protects your original plan, at the cost of an opportunity that might not come around again.", reasonCallbacks: { "protected-the-downside": "Same instinct as your ₹30,000 call earlier. You protect against what you can't predict, even when it costs you something right now." } },
            { id: "C", text: "Try to do a reduced version of both.", dcera: { D: 2, C: 1, E: 2, R: 2, A: 3 }, reason: "This tries to avoid the trade-off completely, which usually means taking a partial cost on both sides." }
          ],
          consequences: {
            A: "You gain real experience and a strong reference, but you enter entrance exams less prepared than peers who used that time to study, and you missed time with friends you won't get back.",
            B: "You stay on track for your exams and keep your usual routine, but you pass on an opportunity that might not come again, and you'll never know exactly where it would have led.",
            C: "You spread yourself across both and don't do either fully. You get a partial reference from the internship, and a compressed exam schedule that leaves you anxious going in."
          },
          concept: "Opportunity cost isn't about the option you pick. It's about the one you give up, even when giving it up was the right call.",
          takeaway: "What would have made this an easier decision to make?",
          lesson: {
            goal: "Students see that every yes is also a no to something else, and practice listing what they give up before they decide.",
            skills: ["Decision making", "Critical thinking"],
            focus: ["C", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "What did your team give up with its choice?", listenFor: "Specific costs: time, friends, prep, the opportunity itself." },
              { q: "Why did doing both look so tempting?", listenFor: "Not wanting to lose anything. Doing both often means doing both halfway." },
              { q: "What would make this decision easier?", listenFor: "More information, advice, knowing whether the offer comes back." }
            ],
            examples: [
              {
                kind: "compare",
                title: "Two lists, before you decide",
                columns: [
                  { heading: "If you say yes", get: ["Real work experience", "A strong reference", "A story for college applications"], give: ["Prep time before entrance exams", "Time with friends", "Rest"] },
                  { heading: "If you say no", get: ["Full exam prep", "Your usual routine", "Time with friends"], give: ["The internship", "The reference", "Never knowing where it led"] }
                ]
              },
              {
                kind: "ladder",
                title: "Say no without closing the door",
                situation: "You've decided to turn the internship down.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Not replying for a week.)", note: "They move on, and they remember." },
                  { label: "Clear", strength: 2, text: "\"Thanks, I can't this time.\"", note: "Polite, but the conversation ends there." },
                  { label: "Strong", strength: 3, text: "\"Thank you for thinking of me. I've committed to exam prep this term. Could I apply again next summer?\"", note: "A clear no that keeps the door open." }
                ]
              }
            ],
            story: {
              body: "Sana turned down a paid internship in Class 12 and emailed to ask about next summer. They said yes. Her friend Kavya took an internship the same year, loved it, and started her exams two weeks behind. Both of them say they'd choose the same again.",
              question: "What did each of them give up?"
            },
            practice: {
              title: "The two lists",
              steps: [
                "Work as a team.",
                "New offer: the school cricket team wants you. Practice is five evenings a week.",
                "Make two lists: what you get, and what you give up. Then share the hardest thing to give up."
              ],
              rounds: [{ label: "Make the lists", seconds: 90 }]
            },
            exitCheck: "How easily can you see what you'd give up in your next big choice?",
            mission: "This week, before one choice, even a small one like one more episode, say out loud what you're giving up for it."
          }
        }
      ]
    }
  }
};
