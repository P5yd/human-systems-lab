// Module: Money & Budgeting
// Content authored from the user's curriculum design (2026-08-17), adapted to
// the engine's choice→consequence format. NOTE: the original design used a
// true budget allocator and a separate "Financial Survival Game" signature
// activity, both folded here into budgeting *strategies* as choices — see
// the fidelity note in the action plan. Each choice carries a `dcera` score
// and `reason`, added 2026-08-18 for automatic scoring.

const MODULE_MONEY_BUDGETING = {
  id: "money-budgeting",
  title: "Money & Budgeting",
  coreIdea: "Money is not just about earning. It is about choosing what your money cannot do.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · My ₹2,000 Month",
      scenarios: [
        {
          id: "my-2000-month",
          title: "My ₹2,000 Month",
          hook: "Your monthly allowance is ₹2,000. Decide how you'll manage it before the month's surprises hit.",
          predictionPrompts: [
            "What could go wrong even with a solid plan?",
            "What would you regret not saving for?"
          ],
          choices: [
            { id: "A", text: "Balanced spender — spread evenly across food, fun, transport, and a little savings.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 4 }, reason: "A reasonable middle path — covers most surprises, but the emergency draws savings down to nothing." },
            { id: "B", text: "Saver — spend only on essentials, save the rest.", dcera: { D: 4, C: 5, E: 2, R: 5, A: 3 }, reason: "Handles every surprise without strain, at the cost of skipping the month's shared fun." },
            { id: "C", text: "Spender — enjoy the month, worry about savings later.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Enjoys the month fully but has nothing left when the real surprise hits." },
            { id: "D", text: "Cautious planner — keep a large emergency cushion, spend little elsewhere.", dcera: { D: 4, C: 4, E: 2, R: 5, A: 2 }, reason: "The safest financial outcome, but the least flexible — friends noticed what was skipped." }
          ],
          consequences: {
            A: "Your balance covers a friend's birthday gift and the class trip comfortably. When your headphones break mid-month, you dip into savings — leaving almost nothing saved by month's end, but nothing skipped either.",
            B: "You cover every surprise without touching your emergency money, and still have some left over by month's end — but you skip the new game you wanted and feel like you missed out on the month's fun.",
            C: "The birthday gift and class trip are easy. But when your headphones break, you're already out of money — you either go without them or ask your parents for extra, which they weren't expecting.",
            D: "You handle every surprise easily and still save the most of anyone. But friends notice you sat out the class trip's optional extras, and the month felt more careful than fun."
          },
          concept: "There's no version of this budget that avoids every trade-off — the real skill is choosing which trade-off you can live with before the surprises show up, not after.",
          takeaway: "Which of this month's surprises would have hurt you the most, given your choice?"
        },
        {
          id: "the-emergency-round",
          title: "The Emergency Round",
          hook: "Halfway through the month, your bag is stolen with ₹300 cash inside. You still have three weeks left.",
          predictionPrompts: [
            "What's your first move when money disappears unexpectedly?",
            "Who do you tell, and when?"
          ],
          choices: [
            { id: "A", text: "Ask parents for extra money to cover the gap.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "Solves the immediate problem completely, at the cost of some independence." },
            { id: "B", text: "Cut entertainment and transport spending for the rest of the month.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Solves it yourself through direct trade-offs — effective, if a little uncomfortable." },
            { id: "C", text: "Borrow ₹300 from a friend, pay them back next month.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Fixes this month by borrowing against next month — the gap doesn't disappear, it moves." },
            { id: "D", text: "Do nothing differently and see what happens.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Avoids the decision until it becomes unavoidable, with less time to plan a response." }
          ],
          consequences: {
            A: "The gap is covered immediately, but you'll need to explain what happened and may lose some independence next month.",
            B: "You cover the gap yourself, but the rest of the month feels tight — walking instead of taking transport, skipping outings.",
            C: "You're fine for now, but next month starts ₹300 behind before you've spent a rupee.",
            D: "By the third week you run out of money entirely and have to ask for help anyway — with less time to plan for it."
          },
          concept: "An emergency fund isn't about predicting what will happen — it's about having a plan that doesn't fall apart no matter which option above you'd have picked.",
          takeaway: "What would have changed if you'd set aside emergency money at the start of the month?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · First Salary",
      scenarios: [
        {
          id: "first-salary",
          title: "First Salary",
          hook: "Your monthly salary is ₹35,000. Decide how you'll structure it before the year's surprises hit.",
          predictionPrompts: [
            "What's the first thing most people do with a first paycheck?",
            "What would you want to be true about your finances a year from now?"
          ],
          choices: [
            { id: "A", text: "Balanced — rent, essentials, and a modest savings habit from month one.", dcera: { D: 5, C: 5, E: 4, R: 5, A: 4 }, reason: "Handles every event of the year with room to spare — the clearest evidence a plan was actually working." },
            { id: "B", text: "Aggressive saver — minimal lifestyle, maximum savings and investment.", dcera: { D: 3, C: 4, E: 1, R: 5, A: 2 }, reason: "Financially bulletproof, but the cost shows up socially, not on a spreadsheet." },
            { id: "C", text: "Comfortable now — enjoy your first real income, save what's left.", dcera: { D: 2, C: 2, E: 3, R: 1, A: 2 }, reason: "Manageable until two things go wrong close together — which is exactly what happened." },
            { id: "D", text: "Family-first — prioritize sending money home, live modestly yourself.", dcera: { D: 3, C: 3, E: 5, R: 2, A: 3 }, reason: "Consistently prioritizes others, which is admirable but leaves nothing set aside for yourself." }
          ],
          consequences: {
            A: "Your phone repair in month 3 barely dents your plan. In month 5 you're able to lend your friend part of what they need without real strain. The bonus in month 7 goes straight to savings. By month 9's unexpected trip, you have enough set aside to travel without a second thought.",
            B: "Every event this year is easily absorbed — but your colleagues notice you never join outings, and by month 9 you realize you've saved a lot of money while building very little of a life around it.",
            C: "The phone repair is fine. Lending ₹10,000 in month 5 means genuinely tight weeks after. The bonus in month 7 helps you recover. By month 9, the unexpected trip forces you to borrow — the second loan of your first year.",
            D: "You handle every event, but always by cutting your own spending first. By month 9 you're proud of what you've supported at home, but you haven't built any savings of your own yet."
          },
          concept: "A first salary isn't just an income question — it's the first year you find out what kind of financial person you actually are under pressure, not just on paper.",
          takeaway: "Looking at your own choice, what would you change about how you handled month 5's loan request?"
        },
        {
          id: "the-emergency-fund-test",
          title: "The Emergency Fund Test",
          hook: "Eleven months in, your family needs ₹15,000 urgently for a medical expense. It's due this week.",
          predictionPrompts: [
            "What does eleven months of your choice actually leave you with, right now?",
            "What's the real cost of not having this covered?"
          ],
          choices: [
            { id: "A", text: "Pay it from savings immediately.", dcera: { D: 5, C: 5, E: 4, R: 5, A: 4 }, reason: "This is the entire point of a fund like this — it does its job without drama." },
            { id: "B", text: "Take a short-term loan and pay it back over 3 months.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Solves the timing problem but adds a cost that a plan earlier in the year would have avoided." },
            { id: "C", text: "Delay a personal expense to cover part of it, borrow the rest from a friend.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 3 }, reason: "A workable patch, but it quietly puts a financial weight on a personal relationship." },
            { id: "D", text: "You don't have it — ask your family to find another way.", dcera: { D: 1, C: 2, E: 2, R: 1, A: 2 }, reason: "The gap still gets closed, just with more difficulty than the situation needed." }
          ],
          consequences: {
            A: "It's stressful but manageable. Your emergency fund exists for exactly this, and it does its job.",
            B: "The loan covers it immediately, but you're now paying interest on money you didn't strictly need to borrow if you'd planned differently.",
            C: "You cover part of it and lean on a friend for the rest — it works, but now that friendship carries a financial thread that wasn't there before.",
            D: "The family finds another way, but you're aware it was harder than it needed to be, and that awareness stays with you."
          },
          concept: "This is the actual purpose of everything earlier in the year — not the spreadsheet, the moment it gets tested.",
          takeaway: "Has this session changed what 'a little bit of savings' means to you?"
        }
      ]
    }
  }
};
