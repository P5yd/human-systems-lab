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
          hook: "Before you think about any career path, ask yourself this. What do people actually come to you for help with?",
          predictionPrompts: [
            "What do you get asked to help with more than once?",
            "What comes easily to you that seems to be hard for others?"
          ],
          choices: [
            { id: "A", text: "Explaining something complicated in a simple way.", dcera: { D: 4, C: 3, E: 4, R: 2, A: 3 }, reason: "This is a communication strength. You can take something complex and make it useful for someone else." },
            { id: "B", text: "Fixing or figuring out how something works.", dcera: { D: 4, C: 4, E: 2, R: 4, A: 3 }, reason: "This is systems thinking. You notice what might break before it actually does." },
            { id: "C", text: "Calming someone down or helping them feel understood.", dcera: { D: 3, C: 3, E: 5, R: 2, A: 4 }, reason: "This is an emotional strength. You make people, not just tasks, the real focus." },
            { id: "D", text: "Coming up with an idea nobody else thought of.", dcera: { D: 4, C: 2, E: 3, R: 1, A: 5 }, reason: "This is a creative strength. You're comfortable with an idea nobody else has tried yet." },
            { id: "E", text: "Organizing something chaotic into something that works.", dcera: { D: 4, C: 4, E: 2, R: 4, A: 3 }, reason: "This is a structural strength. You turn something chaotic into something that actually works." }
          ],
          consequences: {
            A: "That's a teaching and communication strength. It's useful in way more careers than just 'teacher.' Anywhere that needs someone to explain hard things simply, this skill matters.",
            B: "That's a systems strength. It's useful in engineering, troubleshooting, and any career where things need to actually work, not just look good on paper.",
            C: "That's an emotional strength. It's useful in counseling, healthcare, HR, and any role where people, not just tasks, are the real work.",
            D: "That's a creative strength. It's useful anywhere that rewards a truly new idea over a safe, familiar one.",
            E: "That's a structural strength. It's useful in operations, project management, and any role that turns a mess into a plan."
          },
          concept: "None of these strengths belong to just one job. The mistake is picking a career title first and hoping your strengths fit it. Instead, start with what you're actually good at. Then ask where that's valuable.",
          takeaway: "Did the option you picked match what you expected, or did it surprise you?"
        },
        {
          id: "values",
          title: "Values",
          hook: "If a career could only guarantee you ONE of these, which would you choose?",
          predictionPrompts: [
            "What would you protect first if you had to give up everything else?",
            "Is your first instinct the one you'd actually stick with?"
          ],
          choices: [
            { id: "A", text: "Money", dcera: { D: 3, C: 4, E: 1, R: 4, A: 2 }, reason: "This protects financial certainty. But it costs you flexibility and passion." },
            { id: "B", text: "Freedom", dcera: { D: 3, C: 2, E: 2, R: 1, A: 5 }, reason: "This protects control over your time. But it costs you stability." },
            { id: "C", text: "Security", dcera: { D: 3, C: 4, E: 2, R: 5, A: 1 }, reason: "This protects predictability. But it costs you growth and new opportunities." },
            { id: "D", text: "Creativity", dcera: { D: 3, C: 1, E: 3, R: 1, A: 5 }, reason: "This protects your chance to create something new. But it costs you stability." },
            { id: "E", text: "Status", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "This protects recognition. But it's worth asking who you're really trying to impress." },
            { id: "F", text: "Helping people", dcera: { D: 4, C: 3, E: 5, R: 2, A: 3 }, reason: "This protects your impact on others. But it costs you personal gain, and it can be hard to keep up." },
            { id: "G", text: "Adventure", dcera: { D: 2, C: 2, E: 2, R: 1, A: 5 }, reason: "This protects new experiences. But it costs you routine and predictability." },
            { id: "H", text: "Family time", dcera: { D: 3, C: 3, E: 5, R: 3, A: 2 }, reason: "This protects time with people who matter. But it costs you ambition." },
            { id: "I", text: "Intellectual challenge", dcera: { D: 4, C: 2, E: 2, R: 1, A: 5 }, reason: "This protects constant growth. But it costs you comfort and certainty." },
            { id: "J", text: "Social impact", dcera: { D: 4, C: 3, E: 5, R: 2, A: 3 }, reason: "This protects the greater good. But it costs you a clear way to measure your progress." }
          ],
          consequences: {
            A: "You'd trade flexibility and passion for financial certainty. It's worth asking what you'd actually do with that security once you had it.",
            B: "You'd trade stability for control over your own time. It's worth asking how you'd handle the uncertainty that often comes with that.",
            C: "You'd trade growth for predictability. It's worth asking whether the safety is worth what it might cost you later.",
            D: "You'd trade stability for the chance to create something truly new. It's worth asking how you'd handle the years that don't feel creative.",
            E: "You'd trade contentment for recognition. It's worth asking who you're actually trying to impress.",
            F: "You'd trade personal gain for impact on others. It's worth asking whether you can keep that up without burning out.",
            G: "You'd trade routine for new experiences. It's worth asking what happens once the adventure becomes routine.",
            H: "You'd trade ambition for being present with people you love. It's worth asking if you'd resent that choice later, or feel at peace with it.",
            I: "You'd trade comfort for being constantly challenged. It's worth asking how you handle long stretches without a clear answer.",
            J: "You'd trade personal reward for the greater good. It's worth asking how you'd know if it's actually working."
          },
          concept: "No career can give you all ten of these. Wanting everything is normal. The real skill is knowing which one you'd protect first, because at some point, something will make you choose.",
          takeaway: "Was your first instinct the same as your final answer?"
        },
        {
          id: "career-mythbusters",
          title: "Career Mythbusters",
          hook: '"If you get good marks, you\'ll be successful." Is this fact, myth, or does it depend?',
          predictionPrompts: [
            "What kind of success does this statement assume?",
            "Can you think of an example that proves it wrong, either way?"
          ],
          choices: [
            { id: "A", text: "Fact. Good marks are the clearest sign you'll succeed.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 1 }, reason: "This treats marks as final proof of success. That closes off paths that don't depend on marks at all." },
            { id: "B", text: "Myth. Marks have nothing to do with real-world success.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 1 }, reason: "This dismisses marks completely. That ignores the real doors marks actually open." },
            { id: "C", text: "Depends. It depends on what kind of success, and in what field.", dcera: { D: 5, C: 5, E: 3, R: 3, A: 5 }, reason: "This is the least satisfying answer, and also the most accurate one. Success depends on what you're measuring." }
          ],
          consequences: {
            A: "Marks predict some things well, like getting into certain programmes or certain jobs. But they predict almost nothing about other things, like people skills, resilience, or timing. Treating marks as settled fact closes off a lot of paths early.",
            B: "Marks really do open some doors that stay closed otherwise. Dismissing them completely can cost you just as much as caring about them too much.",
            C: "This is the least satisfying answer, and also the most accurate one. Marks are just one factor among many, and how much they matter depends completely on the path you choose."
          },
          concept: "Other common myths worth testing the same way: 'Arts doesn't have good careers,' 'Your first career decides your whole life,' and 'A high-paying career is a successful career.' None of these are simply true or false. The real skill is asking 'depends on what?' instead of just accepting the statement.",
          takeaway: "Which career myth did you believe most strongly before this?"
        },
        {
          id: "career-reality-check",
          title: "Career Reality Check",
          hook: "Instead of asking 'what do you want to become,' try this instead. What kind of life do you want your career to help you build?",
          predictionPrompts: [
            "What does a normal Tuesday look like in the life you're picturing?",
            "What are you actually willing to give up for it?"
          ],
          choices: [
            { id: "A", text: "One with predictable hours and low stress, even if the pay is modest.", dcera: { D: 3, C: 4, E: 2, R: 5, A: 2 }, reason: "This picks predictability. It points toward stable, service-based careers." },
            { id: "B", text: "One with high income, even if the hours are long and unpredictable.", dcera: { D: 3, C: 3, E: 2, R: 2, A: 3 }, reason: "This picks upside. It points toward high-growth, high-stress fields." },
            { id: "C", text: "One with constant learning and creative challenge, even if job security is lower.", dcera: { D: 3, C: 2, E: 3, R: 1, A: 5 }, reason: "This picks growth. It points toward research and fast-moving fields." },
            { id: "D", text: "One with lots of teamwork and connection with people, even if it means less independence.", dcera: { D: 3, C: 3, E: 5, R: 3, A: 3 }, reason: "This picks connection. It points toward people-first, team-based roles." }
          ],
          consequences: {
            A: "This points toward roles that trade upside for predictability. Many operations, government, and stable-service careers are built exactly for this.",
            B: "This points toward roles in finance, entrepreneurship, or other high-growth fields. The trade-off there is usually time and stress, not talent.",
            C: "This points toward research, design, and fast-moving fields. The trade-off there is usually stability, not interest.",
            D: "This points toward client-facing, team-based, people-first roles. The trade-off there is usually autonomy, not connection."
          },
          concept: "None of these lives is 'better' than the others. The real question isn't what you want to become. It's which of these trade-offs you're actually willing to live with, day after day.",
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
            "What's actually being decided here? A subject, or something else?",
            "What conversation is this choice avoiding?"
          ],
          choices: [
            { id: "A", text: "Follow family expectations and study Engineering.", dcera: { D: 2, C: 2, E: 3, R: 4, A: 1 }, reason: "This is the easiest path right now. But it's also the one most likely to need revisiting later." },
            { id: "B", text: "Follow your own interest and go straight for UX/Product Design.", dcera: { D: 3, C: 2, E: 2, R: 2, A: 4 }, reason: "This is the hardest path right now. But it's also the one most likely to feel right sooner." },
            { id: "C", text: "Study Engineering, but actively build UX/design skills on the side.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 3 }, reason: "This hedges your bet. But doing both fully is harder than it looks. Something usually gives." },
            { id: "D", text: "Have an honest conversation with family before deciding anything.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This is the only option that deals with the real problem. The real problem is a conversation, not a course." }
          ],
          consequences: {
            A: "This is the easiest path right now. But it's also the one most likely to lead to a harder conversation two or three years from now, once the mismatch becomes clear.",
            B: "This is the hardest path right now. But it's also the one most likely to feel right sooner, if the family conversation gets resolved along the way.",
            C: "This hedges your bet. But doing both fully is harder than it sounds, and something usually gives. Usually it's rest. Sometimes it's your grades.",
            D: "This is the option that doesn't avoid the real problem. The real problem is a conversation, not a course choice."
          },
          concept: "This decision looks like it's about a subject. It's really about whether you're willing to have a hard conversation now, or put it off for a future version of you who has even more at stake.",
          takeaway: "What's stopping you from having that conversation, if that's the option you didn't pick?"
        },
        {
          id: "the-four-year-future",
          title: "The Four-Year Future",
          hook: "Pick a path. Then fast-forward through four years of it, including what you didn't see coming.",
          predictionPrompts: [
            "What do you expect to be true about this path in year 4?",
            "What could realistically change that you haven't thought about?"
          ],
          choices: [
            { id: "A", text: "A field that's established and in demand (like traditional engineering).", dcera: { D: 3, C: 3, E: 2, R: 5, A: 2 }, reason: "This picks stability. It gets tested by how much control that stability actually gives you." },
            { id: "B", text: "A new, growing field with less certainty (like a new tech specialty).", dcera: { D: 3, C: 3, E: 2, R: 2, A: 5 }, reason: "This picks growth potential. It gets tested by the exact disruption that comes with it." },
            { id: "C", text: "A path you're passionate about, even though the job market is unclear (like the arts).", dcera: { D: 3, C: 2, E: 3, R: 1, A: 4 }, reason: "This picks meaning over certainty. It gets tested by whether the actual work matches the passion." }
          ],
          consequences: {
            A: "Years 1 and 2 go as expected. Year 3: your preferred specialization becomes a lot more expensive to keep pursuing. Year 4: the stability is real, but you notice something. More and more of your decisions are being made by the field's own momentum, not by you.",
            B: "Years 1 and 2 are uncertain but exciting. Year 3: AI and automation reshape parts of the job market you were counting on. Some of what you trained for doesn't exist the way you expected. Year 4: you've had to adapt more than you planned, and it's made you a lot better at adapting.",
            C: "Years 1 and 2: you find out you actually dislike parts of the day-to-day work, even though you love the subject. Year 3: a new opportunity shows up that you wouldn't have been ready for without the years you already put in. Year 4: the path looks nothing like what you first imagined, and you're not sure yet if that's a failure or not."
          },
          concept: "Career planning is not career prediction. Every path above gets disrupted by something real. This scenario isn't testing which path you picked. It's testing how each version of you adapted when things stopped going according to plan.",
          takeaway: "Which of these four-year versions of yourself would have adapted best? Is that the one you actually picked?"
        },
        {
          id: "the-12-lakh-decision",
          title: "The ₹12 Lakh Decision",
          hook: "Two offers. Option A: ₹12 lakh/year, large company, long hours, Delhi, limited autonomy. Option B: ₹6 lakh/year, small company, high learning, Bangalore, rapid responsibility.",
          predictionPrompts: [
            "What do you actually care about most right now?",
            "What would you regret not trying?"
          ],
          choices: [
            { id: "A", text: "Take Option A, the offer from the large company.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "This picks income and security. It costs you real autonomy and time." },
            { id: "B", text: "Take Option B, the offer from the small company.", dcera: { D: 3, C: 3, E: 2, R: 2, A: 4 }, reason: "This picks growth and autonomy. It costs you real income." }
          ],
          consequences: {
            A: "The income difference is real and immediate. But so are the long hours and the limited say you have over your own work. Those add up in ways your salary alone doesn't show.",
            B: "The learning curve and responsibility come fast. But so does the pay gap, and that's a real cost you'll feel every month, not just a number on paper."
          },
          concept: "There's no correct answer here. This scenario is testing whether you can name your own priorities honestly, instead of picking whichever option sounds more impressive to say out loud.",
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
            { id: "A", text: "Drop the goal entirely.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "This is a clean ending. But it's only honest if the goal itself has actually changed, not just your mood." },
            { id: "B", text: "Try again. Repeat the exam and take another attempt.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 2 }, reason: "This keeps the original plan alive. It costs you real time and pressure." },
            { id: "C", text: "Find a different path toward the same bigger goal.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 5 }, reason: "This takes the most creativity to find. It often leads somewhere better than the original plan." }
          ],
          consequences: {
            A: "This closes the chapter cleanly. But only if the goal itself is truly no longer what you want, not just what feels easiest to say after a hard result.",
            B: "This keeps the original plan alive. It costs you time, and often, the emotional weight of trying again under pressure.",
            C: "This takes the most creativity to find. It's often the option nobody mentioned to you at first, because it takes more work to discover."
          },
          concept: "A failed plan is not the same as a failed goal. The exam measured one attempt at one path. It didn't measure the goal itself, or whether you're still allowed to want it.",
          takeaway: "If a friend were in this exact situation, what would you tell them? Does that match what you'd tell yourself?"
        }
      ]
    }
  }
};
