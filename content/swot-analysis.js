// Module: SWOT Analysis
// New module added 2026-08-18, following the established pattern: choices
// authored to fit each scenario's premise, each with a `dcera` score and a
// `reason` for automatic scoring.
//
// Lessons added 2026-10-23 (tenth module with lessons), same `lesson` shape
// as content/decision-making.js. The lessons teach ranking a SWOT, not just
// filling it in: which quadrant to act on first, practicing the real
// situation, checking uncertain threats cheaply, and asking for levers
// (time, terms, information) under deadline pressure.

const MODULE_SWOT_ANALYSIS = {
  id: "swot-analysis",
  title: "SWOT Analysis",
  coreIdea: "Knowing your Strengths, Weaknesses, Opportunities, and Threats isn't just a business tool. It's how you make any decision with your eyes open.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Mapping Myself",
      scenarios: [
        {
          id: "before-the-big-match",
          title: "Before the Big Match",
          hook: "Your team has a big inter-school match next week, and you're the captain.<br><br><b>Strength:</b> Your defense is fast and well-drilled.<br><b>Weakness:</b> Your team's fitness is low and players don't communicate well.<br><b>Opportunity:</b> The rival team's star player is injured.<br><b>Threat:</b> Your own key player has a knee problem.",
          predictionPrompts: [
            "What could go wrong if you chase the opportunity but ignore the threat?",
            "What happens if you fix the weakness but never use your strength?"
          ],
          choices: [
            { id: "A", text: "Spend the whole week practicing to fix the team's communication.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "This fixes a real weakness. But it ignores the injury risk and the rare chance you have this week." },
            { id: "B", text: "Add extra fitness training to close the fitness gap.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "A fitness gap can't close in just one week. This spends your only prep time on the weakness least likely to change." },
            { id: "C", text: "Build your whole game plan around the rival's missing star player.", dcera: { D: 4, C: 3, E: 2, R: 2, A: 4 }, reason: "This uses the opportunity fully. But a plan built around one thing has no backup if things don't go as expected." },
            { id: "D", text: "Protect your injured player's knee and change your tactics around them.", dcera: { D: 4, C: 5, E: 4, R: 5, A: 4 }, reason: "This deals with the threat that could end your team's chances completely, before chasing anything else." },
            { id: "E", text: "Try to work on all four areas evenly in the time you have.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 3 }, reason: "Spreading one week across four priorities usually means none of them get enough attention to really help." }
          ],
          consequences: {
            A: "Communication improves a little. But your best player hurts the knee again in a late training drill, and you barely used the rival's injury news.",
            B: "Fitness barely improves in a week. Your player's knee holds up fine on its own. This time, the risk you didn't manage never became a real problem.",
            C: "The plan looks good on paper. But your key player's knee gives out mid-match, before you can fully use the opportunity.",
            D: "Your player gets through the match safely. There's still enough time left to adjust your tactics and use the rival's weak spot when it counts.",
            E: "Nothing gets fixed enough to matter, and your player's knee problem goes unaddressed the whole week."
          },
          concept: "A SWOT map only helps once you decide which quadrant deserves your limited time this week. Usually that's the threat that could end everything, not the weakness that would take months to fix anyway.",
          takeaway: "If you had to do this week again, what's the one thing you'd protect first?",
          lesson: {
            goal: "Students practice the key SWOT move: deciding which quadrant deserves limited time first, which is usually the threat that could end everything.",
            skills: ["Critical thinking", "Decision making"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "Which quadrant could end everything this week?", listenFor: "The injured player's knee." },
              { q: "Why is fixing fitness in one week a trap?", listenFor: "Some weaknesses take months. A week won't move them." },
              { q: "When is it right to chase the opportunity?", listenFor: "Once the threat is handled, so you have a backup plan." }
            ],
            examples: [
              {
                kind: "list",
                title: "Three questions to rank a SWOT",
                items: [
                  "Which item could end everything if I ignore it?",
                  "Which item can actually change in the time I have?",
                  "Which item is only here for a short time?"
                ]
              },
              {
                kind: "numbers",
                title: "Real numbers: one week before the match",
                intro: "Seven days, in order of what matters most.",
                rows: [
                  { label: "Days 1 to 2", value: "Rest the knee, plan around it", tone: "good" },
                  { label: "Days 3 to 5", value: "Drill the new tactics" },
                  { label: "Day 6", value: "Practice using their missing star" },
                  { label: "Day 7", value: "Light session and team talk" }
                ],
                note: "Fitness isn't on the list. It won't change in a week, so it waits until after the match."
              }
            ],
            story: {
              body: "Two days before the district final, Aarav's goalkeeper twisted her ankle. Instead of drilling everyone harder, Aarav rested her and moved a defender into goal for practice. She played the final with the ankle strapped but rested. They won 2–1, and she played the whole next season.",
              question: "Why did Aarav deal with the threat first?"
            },
            practice: {
              title: "Rank the SWOT",
              steps: [
                "Work as a team.",
                "Write a SWOT for a made-up school event happening in one week: a play, a fundraiser, or a quiz.",
                "When the second timer starts, rank the four items: first, second, third, last. Share your first pick and why."
              ],
              rounds: [{ label: "Write it", seconds: 90 }, { label: "Rank it", seconds: 60 }]
            },
            exitCheck: "How confident are you that you could decide what to deal with first when everything feels important?",
            mission: "This week, before a busy day, ask yourself: \"What's the one thing that would ruin today if I ignored it?\" Do that first."
          }
        },
        {
          id: "the-exam-youre-worried-about",
          title: "The Exam You're Worried About",
          hook: "You have a big exam in two weeks.<br><br><b>Strength:</b> You're quick at math.<br><b>Weakness:</b> You freeze up when you're under time pressure.<br><b>Opportunity:</b> Your teacher posted last year's exam paper.<br><b>Threat:</b> Two other assignments are due that same week.",
          predictionPrompts: [
            "Which of these four things can you actually control right now?",
            "What happens if you run out of time before you deal with all four?"
          ],
          choices: [
            { id: "A", text: "Spend most of your time on extra math practice. Lean on your strength.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "You're already fast at math. Hours spent here give you less back than time spent anywhere else." },
            { id: "B", text: "Do timed practice tests to work on freezing under pressure.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "This targets the exact weakness the exam will test. It's the best use of your two weeks." },
            { id: "C", text: "Make last year's paper your main way of studying.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "This makes real use of a real opportunity. But it doesn't directly fix the freezing-under-pressure problem." },
            { id: "D", text: "Finish the other two assignments first, then start exam prep late.", dcera: { D: 3, C: 3, E: 3, R: 4, A: 3 }, reason: "This removes a real threat to your time. But it leaves you less time than the other options." },
            { id: "E", text: "Try to split your time evenly across all four.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 3 }, reason: "Two weeks split four ways rarely moves any single one enough to change the outcome." }
          ],
          consequences: {
            A: "You're even faster at math now. But the exam's time pressure catches you the same way it always has.",
            B: "You still make a few small mistakes under pressure, but far fewer. The freezing happens less, and you finish with time to spare.",
            C: "You recognize several questions from the old paper. But the timed, high-pressure moments still rattle you.",
            D: "The other assignments stop weighing on you. But you start real exam prep with less than a week left.",
            E: "You touch everything lightly and master nothing. The exam feels just as unpredictable as it did two weeks ago."
          },
          concept: "Your strengths don't need more work, they're already working for you. Your two weeks are worth the most where your weakness and the real exam conditions overlap.",
          takeaway: "What's the difference between practicing a skill and practicing the actual situation you're worried about?",
          lesson: {
            goal: "Students learn to spend limited time where a weakness meets the real situation, by practicing under exam conditions instead of polishing a strength.",
            skills: ["Self-awareness", "Problem solving"],
            focus: ["D", "A"],
            needs: "The smartboard. Paper and a pen for each student.",
            careNote: "Exam worries can be heavy. If a student says they freeze or panic in every exam, or that exam pressure at home feels overwhelming, check in privately and let the counselor know.",
            prompts: [
              { q: "Why doesn't more maths practice help here?", listenFor: "Being fast at maths isn't the problem. Freezing under time pressure is." },
              { q: "What's the difference between practicing a skill and practicing the situation?", listenFor: "The situation includes the timer, the pressure, and the silence." },
              { q: "How could you handle the other assignments without losing exam prep?", listenFor: "Plan them in, ask for help, do them in short blocks." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Use the two weeks",
                situation: "Two weeks to go, and you freeze under time pressure.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(More practice on the maths you're already good at.)", note: "Feels productive, but doesn't touch the real problem." },
                  { label: "Clear", strength: 2, text: "(Working through last year's paper, without a timer.)", note: "Useful, but the pressure isn't there." },
                  { label: "Strong", strength: 3, text: "(Last year's paper, timed, in silence, with your phone in another room.)", note: "Practices the exact situation that scares you, until it scares you less." }
                ]
              },
              {
                kind: "list",
                title: "Practice the situation",
                items: [
                  "Use a real timer, set a little shorter than the exam.",
                  "Sit somewhere quiet, with your phone away.",
                  "When you freeze, practice moving on: skip it, mark it, come back later.",
                  "Do it at least three times before the exam."
                ]
              }
            ],
            story: {
              body: "Ishaan knew his chemistry but went blank in every test. For two weeks he did one timed past paper every other evening, in silence, with his phone in another room. The first time he finished only half. By the fifth paper he finished with ten minutes to spare. In the real exam he still felt nervous, but he kept moving.",
              question: "What changed between the first paper and the fifth?"
            },
            practice: {
              title: "Mini mock",
              steps: [
                "Everyone works alone, in silence.",
                "The teacher reads out five quick general-knowledge questions. Write your answers.",
                "If you get stuck, write \"skip\" and move on. Afterward, talk about it: did skipping help?"
              ],
              rounds: [{ label: "Mini mock", seconds: 90 }]
            },
            exitCheck: "How ready do you feel to practice under real conditions before your next exam?",
            mission: "This week, do one timed practice for an upcoming test, with your phone in another room. Notice where you get stuck."
          }
        },
        {
          id: "the-club-you-want-to-start",
          title: "The Club You Want to Start",
          hook: "You want to start a coding club.<br><br><b>Strength:</b> You already know how to code, and three friends want to join.<br><b>Weakness:</b> You've never organized anything before.<br><b>Opportunity:</b> The school is funding new clubs this term.<br><b>Threat:</b> A robotics club already has the senior students' attention.",
          predictionPrompts: [
            "What's really stopping this club from existing at all?",
            "What happens if you wait too long to apply for funding?"
          ],
          choices: [
            { id: "A", text: "Spend the first month just improving your own coding skills.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Your coding skill was never the real problem. This avoids the actual problem completely." },
            { id: "B", text: "Take a course on organizing, or ask a teacher to mentor you on running a club.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "This directly builds the one skill you're missing, before it becomes the reason the club fails." },
            { id: "C", text: "Apply for the school's club funding right away, before it fills up.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 3 }, reason: "This grabs a time-limited opportunity. But a funded club with no real structure can still fall apart." },
            { id: "D", text: "Try to team up with the robotics club instead of competing with it for attention.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This turns the biggest threat into a shared advantage. It's the only option that deals with the competition without a fight." },
            { id: "E", text: "Launch right away with just your three friends and figure things out as you go.", dcera: { D: 2, C: 2, E: 2, R: 1, A: 3 }, reason: "This gets started fast. But with no funding, no structure, and no plan for the competing club, most of the real risks are still there." }
          ],
          consequences: {
            A: "A month later you're a better coder. But you still don't know how to run a club, and the funding window has gotten smaller.",
            B: "You learn the basics of running a group. It costs you a month you didn't have much of, but the club starts on steadier ground.",
            C: "You get funding fast. But early meetings are messy since you're still learning as you go.",
            D: "The robotics club agrees to a joint event, and suddenly your club gets attention it never could have built alone.",
            E: "You start meeting right away. But without funding or a real plan, interest fades within a few weeks."
          },
          concept: "All four quadrants were true at the same time. The real skill here is deciding which one actually decides whether this club exists in six months, not which one feels most urgent this week.",
          takeaway: "Before doing this scenario, which quadrant would you have focused on first?",
          lesson: {
            goal: "Students practice finding the quadrant that decides whether a plan survives, and see that a threat can sometimes become a partner.",
            skills: ["Creative thinking", "Problem solving"],
            focus: ["A", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "What's really stopping this club from existing?", listenFor: "Not coding skill. Organizing, funding, and getting attention." },
              { q: "How can a competitor become a partner?", listenFor: "Joint events, shared members, splitting topics between you." },
              { q: "Which quadrant decides whether the club still exists in six months?", listenFor: "Organizing and the robotics club, much more than coding." }
            ],
            examples: [
              {
                kind: "list",
                title: "Turn a threat into a partner",
                items: [
                  "What do they want that you could help with?",
                  "What could you do together that neither of you could do alone?",
                  "Who could introduce you?"
                ]
              },
              {
                kind: "compare",
                title: "Two lists, before you decide",
                columns: [
                  { heading: "Compete with the robotics club", get: ["Your own identity", "Full control"], give: ["The senior students' attention", "Shared events and members"] },
                  { heading: "Team up with the robotics club", get: ["Instant attention", "Help from experienced seniors"], give: ["Some control", "Sharing the credit"] }
                ]
              }
            ],
            story: {
              body: "Mehak wanted to start a book club, but the debate society already owned Friday afternoons. She asked their president to co-host one \"debate the book\" session a month. Forty people came to the first one. By the next term her club had its own slot.",
              question: "Why did teaming up work better than competing?"
            },
            practice: {
              title: "SWOT a real idea",
              steps: [
                "Work as a team.",
                "Pick a club your class would actually like. Write its SWOT.",
                "When the second timer starts, circle the one quadrant that decides whether it survives six months. Share it."
              ],
              rounds: [{ label: "Write the SWOT", seconds: 90 }, { label: "Circle and share", seconds: 60 }]
            },
            exitCheck: "How confident are you that you could spot the quadrant that really decides a plan?",
            mission: "This week, write a quick SWOT for something you want to start: a habit, a hobby, a project. Circle the quadrant that matters most."
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · SWOT for the Real World",
      scenarios: [
        {
          id: "the-college-application",
          title: "The College Application",
          hook: "You're deciding where to apply for college.<br><br><b>Strength:</b> Strong grades in science.<br><b>Weakness:</b> Not many extracurricular activities on your record.<br><b>Opportunity:</b> A new scholarship for your intended major just opened.<br><b>Threat:</b> Application deadlines are tighter this year than usual.",
          predictionPrompts: [
            "What can you still actually change before the deadline?",
            "What's outside your control, no matter what you do?"
          ],
          choices: [
            { id: "A", text: "Spend the time you have left trying to quickly build up extracurriculars.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "A thin extracurricular record can't really be fixed in the time you have left. This chases something that's already out of reach." },
            { id: "B", text: "Lead every application with your strongest science work.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 3 }, reason: "This plays to a real strength. But it doesn't deal with the tighter timeline this year." },
            { id: "C", text: "Put the new scholarship application ahead of your general applications.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "This uses a time-limited opportunity that won't be there next year. That's a real reason to change your priorities now." },
            { id: "D", text: "Build a strict week-by-week deadline tracker before doing anything else.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "This deals with the threat most likely to sink every application at once, missing a deadline, before improving anything else." },
            { id: "E", text: "Apply to fewer schools so you can put full effort into each one.", dcera: { D: 3, C: 4, E: 3, R: 4, A: 3 }, reason: "This reduces the risk of a rushed, weak application. But it means fewer total chances if one doesn't work out." }
          ],
          consequences: {
            A: "The extracurricular additions look rushed and thin on the application. Reviewers can usually tell the difference.",
            B: "Your science work stands out. But you miss a smaller deadline on one application, and it costs you a shot you didn't need to lose.",
            C: "You submit the scholarship application with real care, and it becomes your strongest shot this year.",
            D: "Every deadline is met with time to spare, and the rest of your effort goes where it matters most.",
            E: "Each application is genuinely strong. But you have fewer total chances than classmates who applied more broadly."
          },
          concept: "A tight deadline isn't just one more factor. It's the constraint that decides whether your strengths and opportunities even get a chance to matter.",
          takeaway: "Before seeing the consequences, which of these five would you have picked?",
          lesson: {
            goal: "Students see that a hard limit like a deadline decides whether strengths and opportunities ever count, and practice planning around it first.",
            skills: ["Problem solving", "Decision making"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "College decisions can carry heavy family expectations and money worries. Keep examples general, and don't ask students to share their own plans or marks in class. If a student seems overwhelmed, check in privately.",
            prompts: [
              { q: "What can you still change before the deadline?", listenFor: "Which applications you send, how well you write them, the scholarship." },
              { q: "What's outside your control?", listenFor: "Past extracurriculars, and this year's deadlines." },
              { q: "Why do deadlines come first?", listenFor: "Missing one cancels everything else, however strong it is." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: four weeks to the deadlines",
                intro: "An example plan, worked out backwards from the deadlines.",
                rows: [
                  { label: "Week 1", value: "Deadline tracker, gather documents", tone: "good" },
                  { label: "Week 2", value: "Scholarship application, full effort", tone: "good" },
                  { label: "Week 3", value: "The two main applications" },
                  { label: "Week 4", value: "Final checks, submit 3 days early", tone: "good" }
                ],
                note: "Submitting a few days early leaves room for a website crash or a missing document."
              },
              {
                kind: "list",
                title: "Build a deadline tracker",
                items: [
                  "List every deadline, with the date and time.",
                  "Work backwards: when must each draft be finished?",
                  "Set a reminder three days before each one.",
                  "Tick each one off when it's submitted, not when it's written."
                ]
              }
            ],
            story: {
              body: "Riya had brilliant science marks and a scholarship form she was excited about, plus five other application deadlines. She spent the first evening making a tracker. It showed that two deadlines fell on the same day as a school exam. She moved one application earlier, and everything went in on time.",
              question: "What did one evening of planning save her from?"
            },
            practice: {
              title: "Work backwards",
              steps: [
                "Work as a team.",
                "You have four applications due in four weeks, one of them a scholarship. Make a week-by-week plan, working backwards.",
                "Share your plan. Did you leave a buffer before each deadline?"
              ],
              rounds: [{ label: "Plan it", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could plan around deadlines before they catch you out?",
            mission: "This week, write down every deadline you have for the next month, with dates, all in one place."
          }
        },
        {
          id: "the-startup-idea",
          title: "The Startup Idea",
          hook: "A friend pitches you a startup idea: a delivery app for small local shops.<br><br><b>Strength:</b> You both know how to build the app.<br><b>Weakness:</b> Neither of you has run a business before.<br><b>Opportunity:</b> No local competitor exists yet.<br><b>Threat:</b> A national chain might be planning the same thing.",
          predictionPrompts: [
            "What happens if the rumored competitor is real, and you wait?",
            "What happens if it's not real, and you rush?"
          ],
          choices: [
            { id: "A", text: "Spend months perfecting the app before launching anything.", dcera: { D: 2, C: 1, E: 2, R: 1, A: 2 }, reason: "Polishing the product ignores the threat completely. A rumored competitor won't wait for you to feel ready." },
            { id: "B", text: "Find a mentor or advisor with real business experience first.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "This directly deals with the weakness most likely to sink a first-time business, before you build or launch further." },
            { id: "C", text: "Launch a fast, basic version now, before anyone else can.", dcera: { D: 4, C: 3, E: 3, R: 2, A: 5 }, reason: "This moves fast on a real, time-limited opportunity. But with no business experience behind it, that speed carries real risk." },
            { id: "D", text: "Find out if the rumored competitor is actually real before doing anything else.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "This turns a rumor into a fact, before you bet months of effort on it either way. It's the smartest first move." },
            { id: "E", text: "Drop the idea. There's too much uncertainty about both the threat and your own inexperience.", dcera: { D: 2, C: 2, E: 2, R: 4, A: 1 }, reason: "This avoids all risk. But it also gives up a real opportunity, based on a threat that was never actually confirmed." }
          ],
          consequences: {
            A: "By the time you're ready to launch, the rumored competitor has entered the market. Real or not, the delay cost you the opening.",
            B: "The mentor points out two serious mistakes you were about to make, and your eventual launch is stronger for it.",
            C: "You're first to market. But early mistakes from inexperience cost you some of your first users' trust.",
            D: "You find out the rumor was exaggerated. It was a small regional test, not a real national rollout, so you launch with much more confidence.",
            E: "A friend later builds a similar app, and it does well. The threat turns out to have been mostly imagined."
          },
          concept: "Threats and opportunities are often the least certain parts of a SWOT. The cheapest thing you can do with uncertainty is often just to check it, before you commit months to a guess.",
          takeaway: "If nobody had told you the answer, how would you have found out if the rumor was real?",
          lesson: {
            goal: "Students learn to treat uncertain threats and opportunities as things to check cheaply before committing, instead of guessing or giving up.",
            skills: ["Critical thinking", "Creative thinking"],
            focus: ["C", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "What's the cheapest way to check whether the rumor is true?", listenFor: "Search online, ask shop owners, ask people in the industry, check the news." },
              { q: "What does guessing wrong cost, either way?", listenFor: "Rushing into a fight, or giving up a real chance." },
              { q: "Why find a mentor before launching?", listenFor: "They've already seen the mistakes you're about to make." }
            ],
            examples: [
              {
                kind: "list",
                title: "Check before you bet",
                items: [
                  "Search for news, job posts, or app listings from the rumored competitor.",
                  "Ask five local shop owners what they've heard, and what they need.",
                  "Ask one person who has started a business what they'd check first."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If a big company might do it, there's no point trying.", fact: "Big companies often ignore small local markets. Check before you give up." },
                  { myth: "Building the perfect app comes first.", fact: "Finding out whether people actually want it comes first." },
                  { myth: "Asking for advice shows you don't know what you're doing.", fact: "It shows you're serious. Many founders say a mentor saved them from big mistakes." }
                ]
              }
            ],
            story: {
              body: "Kunal and Tara wanted to build a tiffin-delivery app for their area, then heard a big app was coming. Instead of guessing, they spent a weekend asking twenty local tiffin cooks. Most had never heard of the big app, and all of them wanted simpler ordering. A month later they launched a tiny version with six cooks.",
              question: "What did one weekend of asking give them?"
            },
            practice: {
              title: "Design a cheap test",
              steps: [
                "Work as a team.",
                "Pick a business idea your team likes. Write down the biggest thing you're unsure about.",
                "Design a test you could run in one week, for under ₹500, to find out. Share it."
              ],
              rounds: [{ label: "Design it", seconds: 90 }]
            },
            exitCheck: "How likely are you to check an uncertain threat before you let it decide for you?",
            mission: "This week, pick one worry you're unsure about. Find one fact that checks it, instead of guessing."
          }
        },
        {
          id: "the-job-offer",
          title: "The Job Offer",
          hook: "You've been offered an internship.<br><br><b>Strength:</b> It's exactly in the field you're interested in.<br><b>Weakness:</b> It pays very little, and you'd need to move.<br><b>Opportunity:</b> The company is growing fast and hiring a lot of people.<br><b>Threat:</b> The offer expires in 48 hours.",
          predictionPrompts: [
            "What part of this decision can you undo later, and what part can't you?",
            "What information would you want that you don't have yet?"
          ],
          choices: [
            { id: "A", text: "Accept right away. The good field-fit and growth opportunity outweigh everything else.", dcera: { D: 3, C: 2, E: 2, R: 2, A: 3 }, reason: "This weighs the upside heavily. But it locks in the move and low pay without checking if either is actually workable." },
            { id: "B", text: "Decline. The pay and moving costs make it not worth it.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "This protects your finances. But it costs you a role that fits your interests unusually well." },
            { id: "C", text: "Ask for 24 more hours to check relocation costs and confirm you can actually afford it.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "This uses the one thing you actually have, time, to replace a guess with real numbers before deciding." },
            { id: "D", text: "Accept, planning to sort out the financial details after you've already committed.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This commits you to real financial strain before you know if it's sustainable. It's the riskiest way to accept." },
            { id: "E", text: "Ask if the pay or relocation terms can be adjusted before deciding either way.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "This tests whether the weakness can actually be fixed or negotiated, without needing to guess or wait." }
          ],
          consequences: {
            A: "You're excited on day one. But the financial strain becomes a real problem by month two.",
            B: "You keep your finances stable. Later you hear the company grew even faster than expected, a door that's now closed to you.",
            C: "The company gives you the extra day. The numbers are tighter than expected, but workable, and you accept with real confidence.",
            D: "You accept, and the financial stress shows up almost right away, affecting your work before you've even settled in.",
            E: "They can't move on pay, but they offer a relocation stipend, enough to change your answer from no to yes."
          },
          concept: "A 48-hour deadline is designed to make weaknesses feel impossible to fix. Most of the time, one of your levers, time, terms, or information, is more available than the deadline makes it feel.",
          takeaway: "If you'd known asking was an option, what would you have asked for?",
          lesson: {
            goal: "Students learn that pressure deadlines can hide levers that are still available (time, terms, and information) and practice asking for them politely before deciding.",
            skills: ["Decision making", "Effective communication"],
            focus: ["D", "A"],
            needs: "The smartboard.",
            careNote: "Moving away for work can be a big money question for families. Keep examples general, and don't ask students about their family's finances.",
            prompts: [
              { q: "Which part of this decision can't you undo later?", listenFor: "The move and the money. The yes itself can wait until you've checked." },
              { q: "Why do offers come with short deadlines?", listenFor: "To speed you up. Sometimes there's a real reason, but often there's room." },
              { q: "What could you ask for?", listenFor: "More time, relocation support, a later start date, details about pay." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Ask for a lever",
                situation: "\"We need your answer within 48 hours.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Yes! I accept.\" (Before checking any costs.)", note: "Exciting now, but you've committed before knowing if it works." },
                  { label: "Clear", strength: 2, text: "\"Sorry, I can't afford to move.\"", note: "Might be true, but you closed the door without checking." },
                  { label: "Strong", strength: 3, text: "\"I'm really excited about this. Could I have until Friday to work out the costs of moving? And is there any relocation support?\"", note: "Shows you're keen, asks for time, and checks the terms, all at once." }
                ]
              },
              {
                kind: "numbers",
                title: "Real numbers: can you afford it?",
                intro: "An example month after moving, on internship pay of ₹15,000.",
                rows: [
                  { label: "Rent", value: "₹7,000" },
                  { label: "Food", value: "₹4,000" },
                  { label: "Transport", value: "₹1,500" },
                  { label: "Phone and other costs", value: "₹1,000" },
                  { label: "Left over", value: "₹1,500", tone: "good" }
                ],
                note: "Example only. Write down your own numbers before you say yes."
              }
            ],
            story: {
              body: "Arjun got an internship offer in Pune with 48 hours to reply. He emailed back: \"I'm very keen. Could I have until Monday to sort out accommodation?\" They said yes, and mentioned a hostel arrangement he hadn't known about. It cut his rent in half.",
              question: "What did one polite email unlock?"
            },
            practice: {
              title: "Ask for more time",
              steps: [
                "Get into pairs.",
                "One of you is the company with a 48-hour deadline. The other politely asks for more time and one piece of information.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could ask for time or better terms when a deadline feels tight?",
            mission: "This week, the next time something feels rushed, ask: \"Can I have a little more time to decide?\" Notice the answer."
          }
        }
      ]
    }
  }
};
