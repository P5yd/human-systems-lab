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
          hook: "Your monthly allowance is ₹2,000. Decide how you'll manage it before this month's surprises show up.",
          predictionPrompts: [
            "What could go wrong, even with a good plan?",
            "What would you regret not saving for?"
          ],
          choices: [
            { id: "A", text: "Balanced spender. Spread your money evenly across food, fun, transport, and a little savings.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 4 }, reason: "A reasonable middle path. It covers most surprises, but the emergency empties your savings." },
            { id: "B", text: "Saver. Spend only on essentials and save the rest.", dcera: { D: 4, C: 5, E: 2, R: 5, A: 3 }, reason: "Handles every surprise without any strain. But you miss out on the fun things everyone else did this month." },
            { id: "C", text: "Spender. Enjoy the month and worry about savings later.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "You enjoy the month fully, but you have nothing left when the real surprise hits." },
            { id: "D", text: "Cautious planner. Keep a large emergency cushion and spend little elsewhere.", dcera: { D: 4, C: 4, E: 2, R: 5, A: 2 }, reason: "The safest choice for your money, but the least flexible. Your friends noticed what you skipped." }
          ],
          consequences: {
            A: "Your balance covers a friend's birthday gift and the class trip with no trouble. When your headphones break mid-month, you dip into savings. You end the month with almost nothing saved, but you didn't have to skip anything either.",
            B: "You cover every surprise without touching your emergency money, and you still have some left over by month's end. But you skip the new game you wanted, and you feel like you missed out on the month's fun.",
            C: "The birthday gift and class trip are easy. But when your headphones break, you're already out of money. You either go without them or ask your parents for extra, and they weren't expecting that.",
            D: "You handle every surprise easily and save more than anyone else. But friends notice you sat out the class trip's optional extras, and the month feels more careful than fun."
          },
          concept: "No version of this budget avoids every trade-off. The real skill is choosing which trade-off you can live with, before the surprises show up, not after.",
          takeaway: "Which surprise this month would have hurt you the most, with the choice you made?"
        },
        {
          id: "the-emergency-round",
          title: "The Emergency Round",
          hook: "Halfway through the month, your bag gets stolen with ₹300 cash inside. You still have three weeks to go.",
          predictionPrompts: [
            "What's your first move when money disappears out of nowhere?",
            "Who do you tell, and when?"
          ],
          choices: [
            { id: "A", text: "Ask parents for extra money to cover the gap.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "Solves the problem right away, but costs you some independence." },
            { id: "B", text: "Cut entertainment and transport spending for the rest of the month.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "You solve it yourself by making direct trade-offs. It works, even if it's a little uncomfortable." },
            { id: "C", text: "Borrow ₹300 from a friend, pay them back next month.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Fixes this month by borrowing from next month. The gap doesn't disappear, it just moves." },
            { id: "D", text: "Do nothing differently and see what happens.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Puts off the decision until you can't avoid it anymore, leaving less time to plan your response." }
          ],
          consequences: {
            A: "The gap is covered right away, but you'll need to explain what happened. You might get less independence next month.",
            B: "You cover the gap yourself, but the rest of the month feels tight. You walk instead of taking transport and skip some outings.",
            C: "You're fine for now, but next month starts ₹300 behind before you've even spent a rupee.",
            D: "By the third week, you run out of money completely and have to ask for help anyway, with less time to plan for it."
          },
          concept: "An emergency fund isn't about guessing what will happen. It's about having a plan that doesn't fall apart, no matter which option above you'd have picked.",
          takeaway: "What would have been different if you'd set aside emergency money at the start of the month?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · First Salary",
      scenarios: [
        {
          id: "first-salary",
          title: "First Salary",
          hook: "Your monthly salary is ₹35,000. Decide how you'll structure it before this year's surprises hit.",
          predictionPrompts: [
            "What's the first thing most people do with a first paycheck?",
            "A year from now, what would you want to be true about your finances?"
          ],
          choices: [
            { id: "A", text: "Balanced. Rent, essentials, and a modest savings habit starting from month one.", dcera: { D: 5, C: 5, E: 4, R: 5, A: 4 }, reason: "Handles every event of the year with room to spare. That's the clearest sign a plan was actually working." },
            { id: "B", text: "Aggressive saver. A minimal lifestyle, with maximum savings and investment.", dcera: { D: 3, C: 4, E: 1, R: 5, A: 2 }, reason: "Financially bulletproof, but the cost shows up in your social life, not on a spreadsheet." },
            { id: "C", text: "Comfortable now. Enjoy your first real income and save what's left.", dcera: { D: 2, C: 2, E: 3, R: 1, A: 2 }, reason: "Manageable until two things go wrong close together, which is exactly what happened." },
            { id: "D", text: "Family-first. Send money home first and live modestly yourself.", dcera: { D: 3, C: 3, E: 5, R: 2, A: 3 }, reason: "Consistently puts others first, which is admirable, but it leaves nothing set aside for you." }
          ],
          consequences: {
            A: "Your phone repair in month 3 barely dents your plan. In month 5, you're able to lend your friend part of what they need without real strain. The bonus in month 7 goes straight to savings. When the unexpected trip comes up in month 9, you have enough set aside to travel without a second thought.",
            B: "Every event this year is easy to handle. But your colleagues notice you never join outings, and by month 9 you realize you've saved a lot of money while building very little of a life around it.",
            C: "The phone repair is fine. Lending ₹10,000 in month 5 means some genuinely tight weeks after. The bonus in month 7 helps you recover. By month 9, the unexpected trip forces you to borrow again, the second loan of your first year.",
            D: "You handle every event, but always by cutting your own spending first. By month 9, you're proud of what you've supported at home, but you haven't built any savings of your own yet."
          },
          concept: "A first salary isn't just about income. It's the first year you find out what kind of financial person you really are under pressure, not just on paper.",
          takeaway: "Looking back at your own choice, what would you change about how you handled month 5's loan request?"
        },
        {
          id: "the-emergency-fund-test",
          title: "The Emergency Fund Test",
          hook: "Eleven months in, your family urgently needs ₹15,000 for a medical expense. It's due this week.",
          predictionPrompts: [
            "Right now, what do eleven months of your choice actually leave you with?",
            "What's the real cost of not having this covered?"
          ],
          choices: [
            { id: "A", text: "Pay it from savings immediately.", dcera: { D: 5, C: 5, E: 4, R: 5, A: 4 }, reason: "This is exactly what a fund like this is for. It does its job without any drama." },
            { id: "B", text: "Take a short-term loan and pay it back over 3 months.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Solves the timing problem, but adds a cost that planning earlier in the year would have avoided." },
            { id: "C", text: "Delay a personal expense to cover part of it, borrow the rest from a friend.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 3 }, reason: "A workable patch, but it quietly puts financial weight on a personal relationship." },
            { id: "D", text: "You don't have it. Ask your family to find another way.", dcera: { D: 1, C: 2, E: 2, R: 1, A: 2 }, reason: "The gap still gets closed, just with more difficulty than it needed to." }
          ],
          consequences: {
            A: "It's stressful, but manageable. Your emergency fund exists for exactly this, and it does its job.",
            B: "The loan covers it right away, but now you're paying interest on money you wouldn't have needed to borrow if you'd planned differently.",
            C: "You cover part of it and lean on a friend for the rest. It works, but now that friendship carries a financial thread it didn't have before.",
            D: "The family finds another way, but you know it was harder than it needed to be. That stays with you."
          },
          concept: "This is the real purpose of everything earlier in the year. Not the spreadsheet, but the moment it gets tested.",
          takeaway: "Has this session changed what 'a little bit of savings' means to you?"
        }
      ]
    }
  }
};
