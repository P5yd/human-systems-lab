// Module: SWOT Analysis
// New module added 2026-08-18, following the established pattern: choices
// authored to fit each scenario's premise, each with a `dcera` score and a
// `reason` for automatic scoring.

const MODULE_SWOT_ANALYSIS = {
  id: "swot-analysis",
  title: "SWOT Analysis",
  coreIdea: "Knowing your Strengths, Weaknesses, Opportunities, and Threats isn't a business tool — it's how you make any decision with your eyes open.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Mapping Myself",
      scenarios: [
        {
          id: "before-the-big-match",
          title: "Before the Big Match",
          hook: "You're leading your team in an inter-school match next week. Strength: a fast, well-drilled defense. Weakness: poor fitness and weak communication. Opportunity: the rival's star player is injured. Threat: your own key player is nursing a knee issue.",
          predictionPrompts: [
            "What happens if you ignore the threat to chase the opportunity?",
            "What happens if you fix the weakness but never use the strength?"
          ],
          choices: [
            { id: "A", text: "Spend the week drilling to fix the weak communication.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "Fixes a real weakness, but ignores the injury risk and the rare opportunity in front of you this week specifically." },
            { id: "B", text: "Push extra fitness training to close the fitness gap.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "A fitness gap doesn't close in a week — this spends your only prep time on the weakness least likely to move." },
            { id: "C", text: "Build the whole game plan around exploiting the rival's missing star player.", dcera: { D: 4, C: 3, E: 2, R: 2, A: 4 }, reason: "Uses the opportunity fully, but a plan built on one thing has no backup if it doesn't play out as expected." },
            { id: "D", text: "Protect your injured player's knee and adjust tactics around them.", dcera: { D: 4, C: 5, E: 4, R: 5, A: 4 }, reason: "Addresses the threat that could end your team's chances entirely, before chasing anything else." },
            { id: "E", text: "Try to address all four areas evenly in the time you have.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 3 }, reason: "Spreading a week across four priorities usually means none of them get enough real attention to matter." }
          ],
          consequences: {
            A: "Communication improves a little, but your best player re-aggravates the knee in a late training drill, and the rival's injury news barely factors into your plan.",
            B: "Fitness barely moves in a week. Meanwhile your player's knee holds up fine untouched — the risk you didn't manage never became a problem, this time.",
            C: "The plan works well in theory, but your key player's knee gives out mid-match before the opportunity can be fully used.",
            D: "Your player manages the match safely, and there's still enough structure left to adjust and exploit the rival's weakened side when it counts.",
            E: "Nothing gets fixed enough to matter, and the threat to your player's knee goes unaddressed the whole week."
          },
          concept: "A SWOT map isn't useful until you decide which quadrant actually deserves this week's limited time — usually the threat that could end everything, not the weakness that would take months to fix anyway.",
          takeaway: "If you had to redo this week, what's the one thing you'd protect first?"
        },
        {
          id: "the-exam-youre-worried-about",
          title: "The Exam You're Worried About",
          hook: "A big exam is in two weeks. Strength: you're quick at math. Weakness: you freeze under time pressure. Opportunity: the teacher posted last year's paper. Threat: two other assignments are due the same week.",
          predictionPrompts: [
            "Which of these four is actually in your control right now?",
            "What happens if you run out of time before addressing all of them?"
          ],
          choices: [
            { id: "A", text: "Spend most of your time on extra math practice — lean on your strength.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "You're already fast at math — this hours spent here return less than time spent anywhere else." },
            { id: "B", text: "Do timed practice runs to work on freezing under pressure.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Targets the exact weakness the actual exam will test — the highest-leverage use of two weeks." },
            { id: "C", text: "Work through last year's paper as your main prep.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "Makes real use of a real opportunity, though it doesn't address the freezing-under-pressure problem directly." },
            { id: "D", text: "Get the other two assignments done first, then start exam prep late.", dcera: { D: 3, C: 3, E: 3, R: 4, A: 3 }, reason: "Removes a real threat to your time, but leaves less runway than the other two-week-long options." },
            { id: "E", text: "Try to split time evenly across all four.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 3 }, reason: "Two weeks split four ways rarely moves any one of them enough to change the outcome." }
          ],
          consequences: {
            A: "You're even faster at math now, but the exam's time pressure catches you exactly the way it always has.",
            B: "You still make small mistakes under pressure, but far fewer — the freezing happens less, and you finish with time to spare.",
            C: "You recognize several questions from the old paper, though the timed-pressure moments still rattle you.",
            D: "The other assignments stop weighing on you, but you start real exam prep with less than a week left.",
            E: "You touch everything lightly and master nothing — the exam feels exactly as unpredictable as it did two weeks ago."
          },
          concept: "Strengths don't need more investment — they're already working. The two weeks are worth the most wherever the weakness and the actual exam conditions overlap.",
          takeaway: "What's the difference between practicing a skill and practicing the actual condition you're worried about?"
        },
        {
          id: "the-club-you-want-to-start",
          title: "The Club You Want to Start",
          hook: "You want to start a coding club. Strength: you already code, and three friends are interested. Weakness: you've never organized anything before. Opportunity: the school is funding new clubs this term. Threat: a rival robotics club already has senior students' attention.",
          predictionPrompts: [
            "What's the actual bottleneck to this club existing at all?",
            "What happens if you wait too long to apply for funding?"
          ],
          choices: [
            { id: "A", text: "Spend the first month just improving your own coding skills.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Your coding skill was never the limiting factor — this avoids the actual problem entirely." },
            { id: "B", text: "Take an organizing course or ask a teacher to mentor you on running a club.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Directly builds the one skill you're actually missing, before it becomes the reason the club fails." },
            { id: "C", text: "Apply for the school's club funding immediately, before it's rescheduled or filled.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 3 }, reason: "Seizes a time-limited opportunity — but a funded club with no organizing structure can still collapse." },
            { id: "D", text: "Try to team up with the robotics club instead of competing with it for attention.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "Turns the biggest threat into a shared advantage — the only option that addresses competition without a fight." },
            { id: "E", text: "Launch immediately with just your three interested friends and figure it out as you go.", dcera: { D: 2, C: 2, E: 2, R: 1, A: 3 }, reason: "Gets started fast, but with no funding, no structure, and no plan for the competing club, most of the real risks are still unaddressed." }
          ],
          consequences: {
            A: "A month later you're a better coder, but you still have no idea how to actually run a club, and the funding window has narrowed.",
            B: "You learn the basics of running a group. It costs a month you didn't have much of, but the club starts on steadier footing.",
            C: "You secure funding fast, but early meetings are disorganized since you're still learning as you go.",
            D: "The robotics club agrees to a joint event, and suddenly your club has visibility it never could have built alone.",
            E: "You start meeting right away, but interest fades within a few weeks without funding or a real plan."
          },
          concept: "Every one of these quadrants was true at once. The skill this scenario tests is deciding which one was actually the deciding factor for whether this club exists in six months — not which one felt most urgent this week.",
          takeaway: "Which quadrant would you have focused on first before doing this scenario?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · SWOT for the Real World",
      scenarios: [
        {
          id: "the-college-application",
          title: "The College Application",
          hook: "You're choosing where to apply. Strength: strong grades in science. Weakness: a thin extracurricular record. Opportunity: a new scholarship for your intended major just opened. Threat: application deadlines are tighter this year than usual.",
          predictionPrompts: [
            "What can you actually still change before the deadline?",
            "What's outside your control no matter what you do?"
          ],
          choices: [
            { id: "A", text: "Spend remaining time trying to build extracurriculars fast.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "A thin extracurricular record can't be meaningfully fixed in the time left before a deadline — this chases something already out of reach." },
            { id: "B", text: "Lead every application with your strongest science work.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 3 }, reason: "Plays to a real strength, though it doesn't address the tighter timeline this year specifically creates." },
            { id: "C", text: "Prioritize the new scholarship application above the general applications.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "Uses a time-limited opportunity that won't exist next cycle — a real reason to reorder your priorities now." },
            { id: "D", text: "Build a strict week-by-week deadline tracker before doing anything else.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Addresses the threat most likely to sink every application at once — missing a date — before optimizing anything else." },
            { id: "E", text: "Apply to fewer schools so you can put full effort into each one.", dcera: { D: 3, C: 4, E: 3, R: 4, A: 3 }, reason: "Reduces risk of a rushed, weak application, at the cost of fewer total chances if any one doesn't work out." }
          ],
          consequences: {
            A: "The extracurricular additions look rushed and thin on the application — reviewers can usually tell the difference.",
            B: "Your science work stands out, but a missed secondary deadline on one application costs you a shot you didn't need to lose.",
            C: "You submit the scholarship application with real care, and it becomes your strongest shot of the cycle.",
            D: "Every deadline is met with room to spare, and the rest of your effort goes where it matters most.",
            E: "Each application is genuinely strong, though you have fewer total chances than classmates who applied more broadly."
          },
          concept: "A tight deadline isn't just one more factor — it's the constraint that determines whether your strengths and opportunities even get the chance to matter.",
          takeaway: "Which of these five would you have picked before seeing the consequences?"
        },
        {
          id: "the-startup-idea",
          title: "The Startup Idea",
          hook: "A friend pitches you a startup idea: a delivery app for small local shops. Strength: you both know how to build the app. Weakness: neither of you has run a business before. Opportunity: no local competitor exists yet. Threat: a national chain is rumored to be planning the same thing.",
          predictionPrompts: [
            "What happens if the rumored competitor is real, and you wait?",
            "What happens if it's not real, and you rush?"
          ],
          choices: [
            { id: "A", text: "Spend months perfecting the app before launching anything.", dcera: { D: 2, C: 1, E: 2, R: 1, A: 2 }, reason: "Polishing the product ignores the threat entirely — a rumored competitor doesn't wait for you to feel ready." },
            { id: "B", text: "Find a mentor or advisor with real business experience first.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Directly addresses the weakness most likely to sink a first-time venture, before either building or launching further." },
            { id: "C", text: "Launch a fast, basic version now to claim the opportunity before anyone else.", dcera: { D: 4, C: 3, E: 3, R: 2, A: 5 }, reason: "Moves fast on a real, time-limited opportunity — but with no business experience behind it, that speed carries real risk." },
            { id: "D", text: "Research whether the rumored competitor is actually real before doing anything else.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Turns a rumor into a fact before betting months of effort on it either way — the most information-efficient first move." },
            { id: "E", text: "Drop the idea — too much uncertainty on both the threat and your own inexperience.", dcera: { D: 2, C: 2, E: 2, R: 4, A: 1 }, reason: "Avoids all risk, but also gives up a real opportunity based on a threat that was never actually confirmed." }
          ],
          consequences: {
            A: "By the time you're ready to launch, the rumored competitor has entered the market — real or not, the delay cost you the opening.",
            B: "The mentor flags two serious mistakes you were about to make, and the eventual launch is stronger for it.",
            C: "You're first to market, but early mistakes from inexperience cost you some of your first users' trust.",
            D: "You find the rumor was exaggerated — a small regional test, not a real national rollout — and launch with much more confidence.",
            E: "A friend later builds a similar app and it does well. The threat, it turns out, was mostly imagined."
          },
          concept: "Threats and opportunities are often the least certain parts of a SWOT — and the cheapest thing you can do with uncertainty is often just resolve it before committing months to a guess.",
          takeaway: "How would you have found out if the rumor was real, if you hadn't been told the answer?"
        },
        {
          id: "the-job-offer",
          title: "The Job Offer",
          hook: "You've been offered an internship. Strength: it's exactly in your field of interest. Weakness: it pays very little and you'd need to relocate. Opportunity: the company is growing fast and hiring aggressively. Threat: the offer expires in 48 hours.",
          predictionPrompts: [
            "What's actually reversible about this decision, and what isn't?",
            "What information would you want that you don't currently have?"
          ],
          choices: [
            { id: "A", text: "Accept immediately — the field-fit and growth opportunity outweigh everything else.", dcera: { D: 3, C: 2, E: 2, R: 2, A: 3 }, reason: "Weighs the upside heavily, but locks in relocation and low pay without checking if either is actually workable." },
            { id: "B", text: "Decline — the pay and relocation costs are too weak to justify it.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "Protects your finances, at the cost of a role that fits your interests unusually well." },
            { id: "C", text: "Ask for 24 more hours to check relocation costs and confirm you can actually afford it.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "Uses the one lever you actually have — time — to replace a guess with real numbers before deciding." },
            { id: "D", text: "Accept, planning to sort out the financial details after you've already committed.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Commits to a real financial strain before knowing whether it's actually sustainable — the riskiest version of accepting." },
            { id: "E", text: "Ask if the pay or relocation terms can be adjusted before deciding either way.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Tests whether the weakness is actually fixed or negotiable, without needing to guess or wait." }
          ],
          consequences: {
            A: "You're excited on day one, but the financial strain becomes a real problem by month two.",
            B: "You keep your finances stable, and later hear the company grew even faster than expected — a door that's now closed.",
            C: "The company grants the extra day. The numbers work out tighter than expected, but workable — you accept with real confidence.",
            D: "You accept, and the financial stress shows up almost immediately, affecting your work before you've even settled in.",
            E: "They can't move on pay, but offer a relocation stipend — enough to change your answer from no to yes."
          },
          concept: "A 48-hour deadline is designed to make weaknesses feel unaddressable. Most of the time, at least one of the levers — time, terms, or information — is more available than the deadline makes it feel.",
          takeaway: "What would you have asked for, if you'd known asking was an option?"
        }
      ]
    }
  }
};
