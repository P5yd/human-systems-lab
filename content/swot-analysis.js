// Module: SWOT Analysis
// New module added 2026-08-18, following the established pattern: choices
// authored to fit each scenario's premise, each with a `dcera` score and a
// `reason` for automatic scoring.

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
          takeaway: "If you had to do this week again, what's the one thing you'd protect first?"
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
          takeaway: "What's the difference between practicing a skill and practicing the actual situation you're worried about?"
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
          takeaway: "Before doing this scenario, which quadrant would you have focused on first?"
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
          takeaway: "Before seeing the consequences, which of these five would you have picked?"
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
          takeaway: "If nobody had told you the answer, how would you have found out if the rumor was real?"
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
          takeaway: "If you'd known asking was an option, what would you have asked for?"
        }
      ]
    }
  }
};
