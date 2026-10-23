// Module: Money & Budgeting
// Content authored from the user's curriculum design (2026-08-17), adapted to
// the engine's choice→consequence format. NOTE: the original design used a
// true budget allocator and a separate "Financial Survival Game" signature
// activity, both folded here into budgeting *strategies* as choices — see
// the fidelity note in the action plan. Each choice carries a `dcera` score
// and `reason`, added 2026-08-18 for automatic scoring.
//
// Lessons added 2026-10-23 (sixth module with lessons), same `lesson` shape
// as content/decision-making.js. Each lesson has a "numbers" block; every
// table's figures are checked to add up. The ₹2,000 and ₹35,000 practices
// are paper versions of the original budget allocator. Care notes keep
// students from ever being asked about their own or their family's money.

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
          takeaway: "Which surprise this month would have hurt you the most, with the choice you made?",
          lesson: {
            goal: "Students see that every budget is a set of trade-offs chosen in advance, and practice building a simple monthly plan with a small emergency line.",
            skills: ["Decision making", "Problem solving"],
            focus: ["C", "R"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Pocket money varies a lot, and some students get none. Keep every example about the made-up ₹2,000, and never ask students how much they get.",
            prompts: [
              { q: "Which surprise hurt your plan the most?", listenFor: "The headphones. Surprises are the whole point of planning." },
              { q: "Is the saver the winner here?", listenFor: "Not exactly. They missed the fun. Every plan costs something." },
              { q: "What's the smallest change that would protect against surprises?", listenFor: "A small emergency line, even ₹100 to ₹200." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: a ₹2,000 month that works",
                intro: "One way to split it, decided at the start of the month.",
                rows: [
                  { label: "Food and snacks", value: "₹600" },
                  { label: "Fun and outings", value: "₹500" },
                  { label: "Transport", value: "₹400" },
                  { label: "Savings", value: "₹300", tone: "good" },
                  { label: "Emergency", value: "₹200", tone: "good" },
                  { label: "Total", value: "₹2,000" }
                ],
                note: "The ₹200 emergency line is small, but it's what lets the rest of the plan survive a bad week."
              },
              {
                kind: "list",
                title: "Three questions before the month starts",
                items: [
                  "What do I need to pay for, no matter what?",
                  "What do I want this month?",
                  "What happens if something breaks?"
                ]
              }
            ],
            story: {
              body: "Neha used to run out of money by the 20th of every month. She started putting ₹150 in a separate envelope marked \"oops\" on the 1st. In March her earphones broke, and the envelope paid for half of new ones. For the first time, the last week of the month didn't feel tight.",
              question: "Why did a separate envelope work better than just trying to spend less?"
            },
            practice: {
              title: "Build the budget",
              steps: [
                "Work as a team.",
                "Split ₹2,000 across five lines: food, fun, transport, savings, and emergency. It must add up to exactly ₹2,000.",
                "When the second timer starts, the teacher reads a surprise: \"Your bus pass costs ₹150 more this month.\" Which line pays for it?"
              ],
              rounds: [{ label: "Build it", seconds: 90 }, { label: "The surprise", seconds: 60 }]
            },
            exitCheck: "How confident are you that you could plan a month's money before it runs out?",
            mission: "This week, write down everything you spend money on, even small things. At the end of the week, sort it into needs and wants."
          }
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
          takeaway: "What would have been different if you'd set aside emergency money at the start of the month?",
          lesson: {
            goal: "Students see that when money goes missing, the plan matters more than the panic, and practice choosing a fix that doesn't just push the problem into next month.",
            skills: ["Problem solving", "Coping with stress"],
            focus: ["A", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student mentions real theft at school, or money trouble at home that worries them, follow up privately after class and let the counselor know.",
            prompts: [
              { q: "What was your first feeling when the money disappeared?", listenFor: "Panic, anger, blame. All normal. Then the question is: what now?" },
              { q: "Why is borrowing from a friend a risky fix?", listenFor: "The gap moves to next month, and it can strain the friendship." },
              { q: "Is asking your parents for help a bad choice?", listenFor: "No. Being honest about what happened is fine. It just costs some independence." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: three weeks, ₹300 short",
                intro: "What each fix does to the rest of the month.",
                rows: [
                  { label: "Ask your parents", value: "Covered now" },
                  { label: "Cut fun and transport", value: "Covered by you", tone: "good" },
                  { label: "Borrow from a friend", value: "Next month starts at ₹1,700", tone: "bad" },
                  { label: "Do nothing", value: "Out of money by week 3", tone: "bad" }
                ],
                note: "Only one fix solves it without moving the problem somewhere else."
              },
              {
                kind: "list",
                title: "When money goes missing",
                items: [
                  "Stop and check: is it really gone, or just misplaced?",
                  "Tell someone: a parent, and the school if it was stolen there.",
                  "Make a new plan for the rest of the month, the same day."
                ]
              }
            ],
            story: {
              body: "Karan lost ₹250 on the bus in the second week of the month. That evening he rewrote his plan: walk to tuition twice a week, and skip one outing. He told his mum what happened. She didn't give him the money, but she did give him a lift on Friday.",
              question: "What did rewriting the plan the same evening give Karan?"
            },
            practice: {
              title: "Rescue the month",
              steps: [
                "Work as a team.",
                "Start from this plan: food ₹600, fun ₹500, transport ₹400, savings ₹300, emergency ₹200. Now ₹300 has gone missing in week two.",
                "Rewrite the plan for the last three weeks. Share which line you cut, and why."
              ],
              rounds: [{ label: "Rescue it", seconds: 90 }]
            },
            exitCheck: "How sure are you that you could make a new plan quickly if money went missing?",
            mission: "This week, set aside a small amount, even ₹10 or ₹20, as your own emergency money, and don't touch it unless something goes wrong. If you don't get pocket money, decide what you would set aside if you did."
          }
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
          takeaway: "Looking back at your own choice, what would you change about how you handled month 5's loan request?",
          lesson: {
            goal: "Students see a first salary as a plan for a whole year, and practice splitting income into needs, family, savings, and fun before the spending starts.",
            skills: ["Decision making", "Problem solving"],
            focus: ["C", "R"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Some students already help support their families, or will need to. Treat \"family-first\" with respect. It's a real and admirable choice, and the lesson is about also keeping something for yourself, not about doing less for family.",
            prompts: [
              { q: "What's the first thing most people do with a first salary?", listenFor: "Buy something, treat the family, celebrate. All understandable." },
              { q: "Which events this year did your plan handle well, and which hurt?", listenFor: "The friend's loan in month 5, the trip in month 9." },
              { q: "How can you help family and still build something for yourself?", listenFor: "Decide a fixed amount for each, even if the savings line is small." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: one way to split ₹35,000",
                intro: "Every month, decided on payday, before any spending.",
                rows: [
                  { label: "Rent and bills", value: "₹12,000" },
                  { label: "Food and transport", value: "₹7,000" },
                  { label: "Sent home to family", value: "₹5,000" },
                  { label: "Savings", value: "₹5,000", tone: "good" },
                  { label: "Fun, clothes, eating out", value: "₹4,000" },
                  { label: "Emergency fund", value: "₹2,000", tone: "good" },
                  { label: "Total", value: "₹35,000" }
                ],
                note: "This isn't the right split, just one example. The point is that every rupee has a job before the month begins."
              },
              {
                kind: "list",
                title: "Rules many people use",
                items: [
                  "Pay yourself first: move your savings out on payday, before you spend.",
                  "Build an emergency fund worth a few months of your basic costs.",
                  "Decide what you'd lend, and how much, before a friend asks."
                ]
              }
            ],
            story: {
              body: "When Ritika got her first salary of ₹28,000, she set up an automatic transfer on payday: ₹3,000 to savings and ₹4,000 to her parents. She spent the rest freely. A year later she had ₹36,000 saved, and she says she never once felt like she was saving.",
              question: "Why does moving savings out on payday work better than saving whatever's left?"
            },
            practice: {
              title: "The first payslip",
              steps: [
                "Work as a team.",
                "Split ₹35,000 a month into needs, family, savings, fun, and emergency. It must add up.",
                "When the second timer starts, the teacher reads month 5: \"A friend asks to borrow ₹10,000.\" Decide your answer and how your plan handles it."
              ],
              rounds: [{ label: "Split it", seconds: 90 }, { label: "Month 5", seconds: 60 }]
            },
            exitCheck: "How confident are you that you could plan your first salary before you spend it?",
            mission: "This week, write down three things you'd want your first salary to do, in order of importance. If it feels comfortable, ask an adult what they wish they'd done with theirs."
          }
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
          takeaway: "Has this session changed what 'a little bit of savings' means to you?",
          lesson: {
            goal: "Students see the emergency fund as the point of all the earlier planning, and learn the real cost of borrowing in a hurry, including the risks of instant-loan apps.",
            skills: ["Decision making", "Critical thinking"],
            focus: ["R", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Medical bills and family money worries can be very real for some students. Don't ask about anyone's family situation. If a student mentions harassment from a loan app, or debt pressure at home, let the counselor know.",
            prompts: [
              { q: "What did eleven months of your choice leave you with?", listenFor: "Teams that saved could just pay. Others had to borrow or ask." },
              { q: "What does a loan really cost?", listenFor: "The interest, plus stress, plus months of repayments." },
              { q: "How can you tell a safe lender from a dangerous one?", listenFor: "Registered banks and lenders, clear interest, no pressure. Not unknown apps that ask for your contacts." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: borrowing ₹15,000",
                intro: "Example only: paying back ₹5,000 a month for 3 months, with 2% interest a month on whatever is still owed.",
                rows: [
                  { label: "Month 1 interest", value: "₹300" },
                  { label: "Month 2 interest", value: "₹200" },
                  { label: "Month 3 interest", value: "₹100" },
                  { label: "Extra cost of borrowing", value: "₹600", tone: "bad" }
                ],
                note: "Real rates vary. Some instant-loan apps charge far more, and add fees and penalties on top."
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "An instant-loan app is a quick, easy fix.", fact: "Many charge very high fees, and some unregistered apps harass borrowers and their contacts." },
                  { myth: "If you have savings, you didn't need a plan.", fact: "The savings are the plan. They're what eleven months of small choices built." },
                  { myth: "Borrowing from a friend is free.", fact: "There's no interest, but it puts weight on the friendship until it's paid back." }
                ]
              }
            ],
            story: {
              body: "When Aditya's father needed ₹12,000 for a hospital bill, Aditya had ₹14,000 in a savings account he'd been building for a year. He paid it that afternoon. A month later his cousin faced the same kind of bill and used a loan app. Clearing the app's fees took months.",
              question: "What did Aditya's year of small savings buy him that afternoon?"
            },
            practice: {
              title: "Safe or risky?",
              steps: [
                "Work as a team.",
                "Make two lists: signs a lender is safe, and warning signs that it isn't.",
                "Share your team's top warning sign with the class."
              ],
              rounds: [{ label: "Make the lists", seconds: 90 }]
            },
            exitCheck: "How clear are you on why an emergency fund matters, and on the risks of borrowing fast?",
            mission: "This week, write down one thing you'd want an emergency fund to cover someday, and the smallest first amount you could imagine putting aside."
          }
        }
      ]
    }
  }
};
