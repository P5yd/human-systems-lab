// Module: Career & Goal-Setting
// Content authored from the user's curriculum design (2026-08-17), adapted
// to the choice→consequence format (see leading notes in earlier revision
// for what was adapted from open reflection/ranking/classification
// exercises). Each choice carries a `dcera` score and `reason`, added
// 2026-08-18 for automatic scoring. For reflective scenarios (Strengths,
// Values) there's no "wrong" pick — scores reflect the trade-off each
// choice represents, not a right/wrong judgment.

const MODULE_CAREER_GOALS = {
  id: "career-goals",
  title: "Career & Goal-Setting",
  coreIdea: "A career is not a single decision. It is a series of decisions.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Who Am I Becoming?",
      scenarios: [
        {
          id: "strengths",
          title: "Strengths",
          hook: "Before mapping out any career path — what do people actually come to you for help with?",
          predictionPrompts: [
            "What do you get asked to help with more than once?",
            "What comes easily to you that seems to be hard for others?"
          ],
          choices: [
            { id: "A", text: "Explaining something complicated in a simple way.", dcera: { D: 4, C: 3, E: 4, R: 2, A: 3 }, reason: "Communication strengths show up as an ability to make complexity usable for someone else." },
            { id: "B", text: "Fixing or figuring out how something works.", dcera: { D: 4, C: 4, E: 2, R: 4, A: 3 }, reason: "Systems thinking shows up as noticing what will break before it does." },
            { id: "C", text: "Calming someone down or helping them feel understood.", dcera: { D: 3, C: 3, E: 5, R: 2, A: 4 }, reason: "Emotional strengths show up as making people, not just tasks, the actual work." },
            { id: "D", text: "Coming up with an idea nobody else thought of.", dcera: { D: 4, C: 2, E: 3, R: 1, A: 5 }, reason: "Creative strengths show up as comfort with an idea nobody else has tried yet." },
            { id: "E", text: "Organizing something chaotic into something that works.", dcera: { D: 4, C: 4, E: 2, R: 4, A: 3 }, reason: "Structural strengths show up as turning something chaotic into something that actually works." }
          ],
          consequences: {
            A: "That's a teaching/communication strength — useful in far more careers than 'teacher.' Anywhere that needs someone to translate complexity, this matters.",
            B: "That's a systems strength — useful in engineering, troubleshooting, and any career where things need to actually work, not just look good on paper.",
            C: "That's an emotional strength — useful in counseling, healthcare, HR, and any role where people, not just tasks, are the real work.",
            D: "That's a creative strength — useful anywhere that rewards a genuinely new idea over a safe, familiar one.",
            E: "That's a structural strength — useful in operations, project management, and any role that turns mess into a plan."
          },
          concept: "None of these strengths map to just one job. The mistake is picking a career title first and hoping your strengths fit it — instead of starting with what you're actually good at and asking where that's valuable.",
          takeaway: "Did the option you picked match what you expected, or did it surprise you?"
        },
        {
          id: "values",
          title: "Values",
          hook: "If a career could only guarantee you ONE of these, which would you choose?",
          predictionPrompts: [
            "What would you protect first if you had to give up everything else?",
            "Is your first instinct here the one you'd actually stand by?"
          ],
          choices: [
            { id: "A", text: "Money", dcera: { D: 3, C: 4, E: 1, R: 4, A: 2 }, reason: "Protects financial certainty, at the cost of flexibility and passion." },
            { id: "B", text: "Freedom", dcera: { D: 3, C: 2, E: 2, R: 1, A: 5 }, reason: "Protects control over your time, at the cost of stability." },
            { id: "C", text: "Security", dcera: { D: 3, C: 4, E: 2, R: 5, A: 1 }, reason: "Protects predictability, at the cost of upside and growth." },
            { id: "D", text: "Creativity", dcera: { D: 3, C: 1, E: 3, R: 1, A: 5 }, reason: "Protects the chance to make something new, at the cost of stability." },
            { id: "E", text: "Status", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Protects recognition, at the cost of asking who you're really trying to impress." },
            { id: "F", text: "Helping people", dcera: { D: 4, C: 3, E: 5, R: 2, A: 3 }, reason: "Protects impact on others, at the cost of personal gain and sustainability." },
            { id: "G", text: "Adventure", dcera: { D: 2, C: 2, E: 2, R: 1, A: 5 }, reason: "Protects novelty, at the cost of routine and predictability." },
            { id: "H", text: "Family time", dcera: { D: 3, C: 3, E: 5, R: 3, A: 2 }, reason: "Protects presence with people who matter, at the cost of ambition." },
            { id: "I", text: "Intellectual challenge", dcera: { D: 4, C: 2, E: 2, R: 1, A: 5 }, reason: "Protects constant growth, at the cost of comfort and certainty." },
            { id: "J", text: "Social impact", dcera: { D: 4, C: 3, E: 5, R: 2, A: 3 }, reason: "Protects collective good, at the cost of a clear way to measure it." }
          ],
          consequences: {
            A: "You'd trade flexibility and passion for financial certainty — worth asking what you'd do with the security once you had it.",
            B: "You'd trade stability for control over your own time — worth asking how you'd handle the uncertainty that often comes with it.",
            C: "You'd trade upside for predictability — worth asking whether the safety is worth what it might cost you in growth.",
            D: "You'd trade stability for the chance to make something genuinely new — worth asking how you'd handle the years that don't feel creative.",
            E: "You'd trade contentment for recognition — worth asking who you're actually trying to impress.",
            F: "You'd trade personal gain for impact on others — worth asking whether you can sustain that without burning out.",
            G: "You'd trade routine for novelty — worth asking what happens when the adventure becomes the routine.",
            H: "You'd trade ambition for presence — worth asking if you'd resent the trade-off later, or feel at peace with it.",
            I: "You'd trade comfort for constantly being challenged — worth asking how you handle long stretches without a clear answer.",
            J: "You'd trade personal reward for collective good — worth asking how you'd measure whether it's actually working."
          },
          concept: "There's no career that maximizes all ten. The instinct to want everything is normal — the actual decision-making skill is being able to name which one you'd protect first, because eventually something will ask you to choose.",
          takeaway: "Was your first instinct the same as your final answer?"
        },
        {
          id: "career-mythbusters",
          title: "Career Mythbusters",
          hook: '"If you get good marks, you\'ll be successful." Is this fact, myth, or does it depend?',
          predictionPrompts: [
            "What kind of success does this statement assume?",
            "Can you think of a counter-example either way?"
          ],
          choices: [
            { id: "A", text: "Fact — good marks are the clearest predictor of success.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 1 }, reason: "Treats marks as settled proof of success, which closes off paths that don't depend on them." },
            { id: "B", text: "Myth — marks have nothing to do with real-world success.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 1 }, reason: "Dismisses marks entirely, which ignores the real doors they do open." },
            { id: "C", text: "Depends — on what kind of success, and in what field.", dcera: { D: 5, C: 5, E: 3, R: 3, A: 5 }, reason: "The least satisfying answer, and the most accurate one — success depends on what you're measuring." }
          ],
          consequences: {
            A: "Marks predict certain things well — getting into certain programmes, certain jobs — and almost nothing about others, like people skills, resilience, or timing. Treating it as settled fact closes off a lot of paths early.",
            B: "Marks genuinely do open some doors that stay closed otherwise — dismissing them entirely can be just as costly as overvaluing them.",
            C: "This is the least satisfying answer and also the most accurate one — marks are one input among many, and their weight changes completely depending on the path."
          },
          concept: "Other common myths worth testing the same way: 'Arts doesn't have good careers,' 'Your first career determines your entire life,' and 'A high-paying career is a successful career.' None of them are simply true or false — the skill is asking 'depends on what?' instead of accepting the statement whole.",
          takeaway: "Which career myth did you believe most strongly before this?"
        },
        {
          id: "career-reality-check",
          title: "Career Reality Check",
          hook: "Instead of 'what do you want to become,' try: what kind of life do you want your career to help you build?",
          predictionPrompts: [
            "What does a normal Tuesday look like in the life you're picturing?",
            "What are you actually willing to give up for it?"
          ],
          choices: [
            { id: "A", text: "One with predictable hours and low stress, even if the pay is modest.", dcera: { D: 3, C: 4, E: 2, R: 5, A: 2 }, reason: "Optimizes for predictability, pointing toward stable, service-oriented careers." },
            { id: "B", text: "One with high income, even if the hours are long and unpredictable.", dcera: { D: 3, C: 3, E: 2, R: 2, A: 3 }, reason: "Optimizes for upside, pointing toward high-growth, high-stress fields." },
            { id: "C", text: "One with constant learning and creative challenge, even if job security is lower.", dcera: { D: 3, C: 2, E: 3, R: 1, A: 5 }, reason: "Optimizes for growth, pointing toward research and fast-moving fields." },
            { id: "D", text: "One with strong social interaction and teamwork, even if it means less independence.", dcera: { D: 3, C: 3, E: 5, R: 3, A: 3 }, reason: "Optimizes for connection, pointing toward people-first, collaborative roles." }
          ],
          consequences: {
            A: "This points toward roles that trade upside for predictability — many operations, government, and stable-service careers optimize for exactly this.",
            B: "This points toward roles in finance, entrepreneurship, or high-growth fields — where the trade-off is usually time and stress, not talent.",
            C: "This points toward research, design, and fast-moving fields — where the trade-off is usually stability, not interest.",
            D: "This points toward client-facing, team-based, and people-first roles — where the trade-off is usually autonomy, not connection."
          },
          concept: "None of these are 'better' lives. The question isn't what you want to become — it's which of these trade-offs you're actually willing to live with day to day.",
          takeaway: "Does your answer match the career you currently say you want?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Designing My Future",
      scenarios: [
        {
          id: "the-career-decision",
          title: "The Career Decision",
          hook: "Age 17. Marks: 86%. Interests: Technology + Psychology. Family expects Engineering. You're personally drawn to UX/Product Design.",
          predictionPrompts: [
            "What's actually being decided here — a subject, or something else?",
            "What conversation is this choice avoiding?"
          ],
          choices: [
            { id: "A", text: "Follow family expectations — study Engineering.", dcera: { D: 2, C: 2, E: 3, R: 4, A: 1 }, reason: "The path of least resistance now, and the one most likely to need revisiting later." },
            { id: "B", text: "Follow personal interest — pursue UX/Product Design directly.", dcera: { D: 3, C: 2, E: 2, R: 2, A: 4 }, reason: "The path of most resistance now, and the one most likely to feel right sooner." },
            { id: "C", text: "Study Engineering, but actively build UX/design skills on the side.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 3 }, reason: "Hedges the bet, but doing both fully is harder than it looks — something usually gives." },
            { id: "D", text: "Have an honest conversation with family before deciding anything.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "The only option that addresses the actual problem, which is a conversation, not a course." }
          ],
          consequences: {
            A: "It's the path of least resistance now, and the one most likely to create a harder conversation two or three years in, once the mismatch is clearer.",
            B: "It's the path of most resistance now, and the one most likely to feel right sooner — if the family conversation gets resolved along the way.",
            C: "It hedges the bet, but doing both fully is harder than it sounds, and something usually gives — usually rest, sometimes grades.",
            D: "It's the option that doesn't avoid the actual problem, which is a conversation, not a course selection."
          },
          concept: "This decision looks like it's about a subject. It's actually about whether you're willing to have a difficult conversation now, or postpone it to a version of yourself with more on the line.",
          takeaway: "What's stopping you from having that conversation, if that's the option you didn't pick?"
        },
        {
          id: "the-four-year-future",
          title: "The Four-Year Future",
          hook: "Pick a path, then fast-forward through four years of it — including what you didn't see coming.",
          predictionPrompts: [
            "What do you expect to be true about this path in year 4?",
            "What could realistically change that you're not accounting for?"
          ],
          choices: [
            { id: "A", text: "A well-established, in-demand field (e.g. traditional engineering).", dcera: { D: 3, C: 3, E: 2, R: 5, A: 2 }, reason: "Chooses stability, and gets tested on how much control that stability actually gives you." },
            { id: "B", text: "An emerging field with less certainty (e.g. a new tech specialization).", dcera: { D: 3, C: 3, E: 2, R: 2, A: 5 }, reason: "Chooses growth potential, and gets tested by exactly the disruption that comes with it." },
            { id: "C", text: "A passion-first path with an unclear job market (e.g. the arts).", dcera: { D: 3, C: 2, E: 3, R: 1, A: 4 }, reason: "Chooses meaning over certainty, and gets tested on whether the work matches the passion." }
          ],
          consequences: {
            A: "Year 1–2 go as expected. Year 3: your preferred specialization becomes significantly more expensive to pursue further. Year 4: the stability is real, but you notice how many of your decisions have started being made for you by the field's own momentum, not by you.",
            B: "Year 1–2 are uncertain but exciting. Year 3: AI and automation reshape parts of the job market you were counting on — some of what you trained for doesn't exist the way you expected. Year 4: you've had to adapt more than you planned, and it's made you noticeably better at adapting.",
            C: "Year 1–2 you discover you actually dislike parts of the day-to-day work, despite loving the subject. Year 3: a new opportunity appears that you wouldn't have been ready for without the years already put in. Year 4: the path looks nothing like what you originally imagined — and you're not sure yet if that's a failure or not."
          },
          concept: "Career planning is not career prediction. Every path above gets disrupted by something real — the skill this scenario is testing isn't which path you picked, it's how each version of you adapted when it stopped going according to plan.",
          takeaway: "Which of these four-year versions of yourself would have adapted best — and is that the one you actually picked?"
        },
        {
          id: "the-12-lakh-decision",
          title: "The ₹12 Lakh Decision",
          hook: "Two offers. Option A: ₹12 lakh/year, large company, long hours, Delhi, limited autonomy. Option B: ₹6 lakh/year, small company, high learning, Bangalore, rapid responsibility.",
          predictionPrompts: [
            "What are you actually optimizing for right now?",
            "What would you regret not trying?"
          ],
          choices: [
            { id: "A", text: "Take Option A — the large company offer.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "Optimizes for income and security, at a real cost to autonomy and time." },
            { id: "B", text: "Take Option B — the small company offer.", dcera: { D: 3, C: 3, E: 2, R: 2, A: 4 }, reason: "Optimizes for growth and autonomy, at a real cost to income." }
          ],
          consequences: {
            A: "The income difference is real and immediate — but so are the long hours and limited say over your own work, and those compound in ways salary alone doesn't capture.",
            B: "The learning curve and responsibility come fast — but so does the pay gap, and that's a real cost you'll feel every month, not just a number on paper."
          },
          concept: "There's no predetermined correct answer here. This scenario is testing whether you can name your own priorities honestly, rather than picking whichever option sounds more impressive to say out loud.",
          takeaway: "What would need to change about your situation for the other option to become the obvious choice?"
        },
        {
          id: "failure",
          title: "Failure",
          hook: "Your entrance exam doesn't go as planned.",
          predictionPrompts: [
            "Is the goal itself the problem, or was it just this one attempt at it?",
            "What would you tell a friend in this exact position?"
          ],
          choices: [
            { id: "A", text: "Drop the goal entirely.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "A clean ending, but only truthful if the goal itself has actually changed, not just the mood." },
            { id: "B", text: "Try again — repeat and re-attempt.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 2 }, reason: "Keeps the original plan alive, at a real cost of time and pressure." },
            { id: "C", text: "Find an alternative pathway toward the same broader goal.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 5 }, reason: "Takes the most creativity to find, and often leads somewhere better than the original plan." }
          ],
          consequences: {
            A: "It closes this chapter cleanly, but only if the goal itself is genuinely no longer what you want — not just what feels easiest to say after a hard result.",
            B: "It keeps the original plan alive, at the cost of time and, often, the emotional weight of a second attempt under pressure.",
            C: "It requires the most creativity to find, and often turns out to be the option nobody mentioned to you at first — because it takes more work to discover."
          },
          concept: "A failed plan is not necessarily a failed goal. The exam measured one attempt at one path — it didn't measure the goal itself, or whether you're still allowed to want it.",
          takeaway: "If a friend were in this exact situation, what would you tell them — and does that match what you'd tell yourself?"
        }
      ]
    }
  }
};
