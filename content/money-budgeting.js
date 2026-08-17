// Module: Money & Budgeting
// Content authored from the user's curriculum design (2026-08-17), adapted to
// the engine's choice→consequence format per the "adapt everything to
// choices now" decision. NOTE: the original design used a true budget
// allocator (sliders across categories, multiple sequential random events)
// and a separate "Financial Survival Game" signature activity. Both are
// folded here into a small set of budgeting *strategies* as choices, with
// consequence text narrating how each strategy handles the events the
// curriculum specified. This trades the real allocation mechanic for
// immediate playability — a true budget-slider screen is future engine work,
// not content work, if you want to restore that fidelity later.

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
            { id: "A", text: "Balanced spender — spread evenly across food, fun, transport, and a little savings." },
            { id: "B", text: "Saver — spend only on essentials, save the rest." },
            { id: "C", text: "Spender — enjoy the month, worry about savings later." },
            { id: "D", text: "Cautious planner — keep a large emergency cushion, spend little elsewhere." }
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
            { id: "A", text: "Ask parents for extra money to cover the gap." },
            { id: "B", text: "Cut entertainment and transport spending for the rest of the month." },
            { id: "C", text: "Borrow ₹300 from a friend, pay them back next month." },
            { id: "D", text: "Do nothing differently and see what happens." }
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
            { id: "A", text: "Balanced — rent, essentials, and a modest savings habit from month one." },
            { id: "B", text: "Aggressive saver — minimal lifestyle, maximum savings and investment." },
            { id: "C", text: "Comfortable now — enjoy your first real income, save what's left." },
            { id: "D", text: "Family-first — prioritize sending money home, live modestly yourself." }
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
            { id: "A", text: "Pay it from savings immediately." },
            { id: "B", text: "Take a short-term loan and pay it back over 3 months." },
            { id: "C", text: "Delay a personal expense to cover part of it, borrow the rest from a friend." },
            { id: "D", text: "You don't have it — ask your family to find another way." }
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
