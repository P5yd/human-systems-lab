// Module: Career & Goal-Setting
// Content authored from the user's curriculum design (2026-08-17), adapted
// to the choice→consequence format (see leading notes in earlier revision
// for what was adapted from open reflection/ranking/classification
// exercises). Each choice carries a `dcera` score and `reason`, added
// 2026-08-18 for automatic scoring. For reflective scenarios (Strengths,
// Values) there's no "wrong" pick — scores reflect the trade-off each
// choice represents, not a right/wrong judgment.
//
// Lessons added 2026-10-23 (eleventh and last module with lessons), same
// `lesson` shape as content/decision-making.js. Two practices are paper
// versions of the original curriculum's activities: the 10 -> 5 -> 3 -> 1
// values elimination ranking, and the Four-Year Future fast-forward.

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
          takeaway: "Did the option you picked match what you expected, or did it surprise you?",
          lesson: {
            goal: "Students identify a real strength from evidence (what people ask them for help with) and see that one strength fits many careers, not just one job title.",
            skills: ["Self-awareness", "Creative thinking"],
            focus: ["D", "A"],
            needs: "The smartboard.",
            careNote: "Some students find it hard to name any strength. Help gently with evidence (\"What do friends ask you for?\"), and make sure nobody's strengths are laughed at.",
            prompts: [
              { q: "What do people come to you for help with?", listenFor: "Real examples. Small things count: fixing phones, calming friends, explaining homework." },
              { q: "Why start with strengths instead of a job title?", listenFor: "Job titles change. Strengths travel with you." },
              { q: "Can a strength fit careers you've never heard of?", listenFor: "Yes. Most strengths fit dozens of jobs." }
            ],
            examples: [
              {
                kind: "list",
                title: "One strength, many careers",
                items: [
                  "Explaining things simply: teacher, trainer, doctor, product manager, video creator.",
                  "Figuring out how things work: engineer, mechanic, data analyst, lab technician.",
                  "Calming people down: counselor, nurse, HR, customer support, mediator.",
                  "Organizing chaos: event manager, operations, project manager, founder."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "A strength has to be something you're the best at.", fact: "A strength is something you do well and often. You don't have to be top of the class." },
                  { myth: "If it's easy for you, it isn't a real skill.", fact: "What feels easy to you is often hard for others. That's exactly what makes it valuable." }
                ]
              }
            ],
            story: {
              body: "Nidhi thought she had no strengths because she wasn't a topper. Then her teacher asked the class, \"Who do people go to when the class group chat gets into a fight?\" Everyone pointed at Nidhi. She'd been calming arguments for years without ever calling it a skill.",
              question: "Why hadn't Nidhi noticed her strength?"
            },
            practice: {
              title: "Strength detective",
              steps: [
                "Get into pairs.",
                "Tell your partner three things people have asked you to help with.",
                "Your partner names the strength behind them, and two careers where it would matter. Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How clear are you on one real strength you have?",
            mission: "This week, ask two people who know you well: \"What do you think I'm good at?\" Write down their answers."
          }
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
          takeaway: "Was your first instinct the same as your final answer?",
          lesson: {
            goal: "Students rank what they want from a career by giving things up step by step, so they can see which value they would protect first.",
            skills: ["Self-awareness", "Decision making"],
            focus: ["D", "C"],
            needs: "The smartboard. Paper and a pen for each student.",
            careNote: "There are no wrong values here. Family time, money, and helping people are all respected answers. Don't let anyone mock a classmate's choice.",
            prompts: [
              { q: "Was your first instinct your final answer?", listenFor: "Many people change their mind once they have to give things up." },
              { q: "Which value was hardest to cross out?", listenFor: "That one matters more than you thought." },
              { q: "Can your values change over time?", listenFor: "Yes. It's worth checking them again every year or two." }
            ],
            examples: [
              {
                kind: "list",
                title: "The elimination ranking",
                items: [
                  "Start with all ten values on paper.",
                  "Cross out five. Keep the five that matter most.",
                  "Cross out two more. Keep three.",
                  "Cross out two more. The one left is the one you'd protect first."
                ]
              },
              {
                kind: "compare",
                title: "Two lists, before you decide",
                columns: [
                  { heading: "If money comes first", get: ["Financial security", "The means to help your family"], give: ["Some free time", "Maybe some passion"] },
                  { heading: "If family time comes first", get: ["Time with people you love", "More balance"], give: ["Some income", "Some fast promotions"] }
                ]
              }
            ],
            story: {
              body: "When Rahul did the values ranking, he was sure \"money\" would win. He crossed it out third. What he kept was \"family time.\" His dad works night shifts, and Rahul realized he wanted a job where he'd be home for dinner.",
              question: "What did crossing things out show Rahul that just picking didn't?"
            },
            practice: {
              title: "Ten to one",
              steps: [
                "Everyone works alone, on paper.",
                "Write these ten: money, freedom, security, creativity, status, helping people, adventure, family time, challenge, social impact. Cross out five.",
                "When the second timer starts, cross out two more, then two more. If you want, share your last one with a partner."
              ],
              rounds: [{ label: "Ten to five", seconds: 60 }, { label: "Five to one", seconds: 60 }]
            },
            exitCheck: "How clear are you on which value you'd protect first in a career?",
            mission: "This week, look at your final value. Notice one moment when it shows up in a choice you make."
          }
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
          takeaway: "Which career myth did you believe most strongly before this?",
          lesson: {
            goal: "Students practice testing career beliefs by asking \"depends on what?\" instead of simply accepting or rejecting them.",
            skills: ["Critical thinking", "Self-awareness"],
            focus: ["C", "A"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Some students feel strong pressure about marks at home. Keep the message balanced: marks open some doors, and they aren't the whole story. If a student seems very anxious about marks, check in privately.",
            prompts: [
              { q: "Where did you first hear \"good marks mean success\"?", listenFor: "Family, teachers, relatives, news about toppers." },
              { q: "What does \"success\" mean in that sentence?", listenFor: "Usually money or a famous college. There are other kinds." },
              { q: "Which doors do marks really open?", listenFor: "Certain colleges, entrance cut-offs, some scholarships and jobs." }
            ],
            examples: [
              {
                kind: "mythfact",
                title: "Myth, fact, or depends?",
                items: [
                  { myth: "\"Arts doesn't have good careers.\"", fact: "It depends. Design, law, journalism, psychology and many more can start from arts. It depends on the field and the skills you build." },
                  { myth: "\"Your first career decides your whole life.\"", fact: "Many people change direction, some more than once. Skills carry over." },
                  { myth: "\"A high-paying career is a successful career.\"", fact: "It depends on what you value. Pay matters, but so do health, time, and meaning." }
                ]
              },
              {
                kind: "list",
                title: "Ask \"depends on what?\"",
                items: [
                  "Which kind of success: money, impact, freedom, happiness?",
                  "In which field, and in which city or country?",
                  "For which person, with which strengths?"
                ]
              }
            ],
            story: {
              body: "Sameer's uncle told him, \"Science or nothing.\" Sameer loved drawing. He asked three people who worked in design what they had studied. One had done science, one arts, and one commerce. All three said what got them hired was their portfolio.",
              question: "What did asking three people change?"
            },
            practice: {
              title: "Bust a myth",
              steps: [
                "Work as a team.",
                "Write down a career myth you've heard at home or at school.",
                "Decide: fact, myth, or depends? If it depends, write on what. Share with the class."
              ],
              rounds: [{ label: "Bust it", seconds: 90 }]
            },
            exitCheck: "How likely are you to ask \"depends on what?\" the next time you hear a career rule?",
            mission: "This week, ask one adult what they studied and what they do now. Notice whether the two match."
          }
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
          takeaway: "Does your answer match the career you currently say you want?",
          lesson: {
            goal: "Students describe the everyday life they want a career to give them, and name the trade-off they are willing to live with.",
            skills: ["Self-awareness", "Decision making"],
            focus: ["C", "D"],
            needs: "The smartboard. Paper and a pen for each student.",
            prompts: [
              { q: "What does a normal Tuesday look like in the life you picture?", listenFor: "Real details: wake-up time, commute, who you work with, evenings." },
              { q: "What are you willing to give up for it?", listenFor: "Honest trade-offs: pay, time, security, location." },
              { q: "Does your Tuesday match the job you currently say you want?", listenFor: "Sometimes not. That's useful to notice." }
            ],
            examples: [
              {
                kind: "list",
                title: "Picture your Tuesday",
                items: [
                  "What time do you wake up, and where?",
                  "Who do you spend most of the day with?",
                  "What are you doing at 3 pm?",
                  "What does your evening look like?"
                ]
              },
              {
                kind: "compare",
                title: "Two different Tuesdays",
                columns: [
                  { heading: "Hospital nurse", get: ["Helping people every day", "Steady demand for the job"], give: ["Night shifts", "Long hours on your feet"] },
                  { heading: "Software developer", get: ["Good pay", "Often able to work from home"], give: ["Long hours at a screen", "Constant learning to keep up"] }
                ]
              }
            ],
            story: {
              body: "Tara wanted to be a doctor because everyone said she'd be good at it. After talking to her aunt, a surgeon, she wrote out a surgeon's Tuesday, and she liked it more than she expected: long hours, but every day mattered. Her friend did the same for law, and realized he'd hate reading contracts all afternoon.",
              question: "Why does one Tuesday tell you so much?"
            },
            practice: {
              title: "My Tuesday",
              steps: [
                "Everyone works alone.",
                "Write the timeline of a normal Tuesday ten years from now: morning, 3 pm, and evening.",
                "Underline the one thing you'd refuse to give up. Share it with a partner if you want to."
              ],
              rounds: [{ label: "Write it", seconds: 90 }]
            },
            exitCheck: "How clear are you on the kind of everyday life you want your work to give you?",
            mission: "This week, ask one adult to describe a normal Tuesday at their job. Compare it to yours."
          }
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
          takeaway: "What's stopping you from having that conversation, if that's the option you didn't pick?",
          lesson: {
            goal: "Students see that many career choices are really about a hard conversation, and practice opening that conversation with family respectfully and with evidence.",
            skills: ["Effective communication", "Decision making"],
            focus: ["E", "D"],
            needs: "The smartboard.",
            careNote: "Family expectations about careers can be intense. Never suggest that students defy their families; the goal is an honest, respectful conversation. If a student says the pressure at home feels frightening or unbearable, check in privately and tell the counselor.",
            prompts: [
              { q: "What's actually being decided here?", listenFor: "Whether to have a hard conversation with family." },
              { q: "Why might families push for engineering?", listenFor: "Security, love, worry, what worked for them. Rarely just to control." },
              { q: "What evidence would help a family feel safer about UX design?", listenFor: "Colleges, salaries, people doing the job, a backup plan." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Start the conversation",
                situation: "Your family expects engineering. You want to explore UX design.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"It's my life. I'll do what I want.\"", note: "True in a way, but it starts a fight, not a conversation." },
                  { label: "Clear", strength: 2, text: "\"I don't really want engineering.\"", note: "Honest, but it gives them nothing to feel safe about." },
                  { label: "Strong", strength: 3, text: "\"I know you want me to have a secure future, and I want that too. Can I show you what UX design involves, what people earn, and my backup plan?\"", note: "Starts with what you share, then brings evidence and a plan." }
                ]
              },
              {
                kind: "list",
                title: "Bring evidence, not just feelings",
                items: [
                  "Two or three colleges that offer the course, and what they need for entry.",
                  "What people in the field actually do and earn, from real sources.",
                  "Someone in the field your family could talk to.",
                  "A backup plan if it doesn't work out."
                ]
              }
            ],
            story: {
              body: "Kabir's parents wanted him to do engineering. He wanted design. Instead of arguing, he made a one-page summary: three colleges, typical starting salaries, and a family friend who worked in UX. His dad read it twice. They agreed he'd apply for both and decide once the results were in.",
              question: "What changed when Kabir brought a page instead of an argument?"
            },
            practice: {
              title: "The first two minutes",
              steps: [
                "Get into pairs.",
                "One of you plays a worried, loving parent. The other opens the conversation: start with what you both want, then bring your evidence.",
                "Swap when the timer ends. Keep it respectful on both sides."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready do you feel to talk with your family about a career choice, respectfully and with evidence?",
            mission: "This week, write down one thing your family wants for your future that you want too. Start any conversation from there."
          }
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
          takeaway: "Which of these four-year versions of yourself would have adapted best? Is that the one you actually picked?",
          lesson: {
            goal: "Students see that every path gets disrupted, and practice planning to adapt instead of trying to predict the future.",
            skills: ["Creative thinking", "Problem solving"],
            focus: ["A", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            prompts: [
              { q: "What disrupted each path?", listenFor: "Rising costs, new technology, finding out you dislike parts of the work." },
              { q: "What helps someone adapt?", listenFor: "Skills that carry over, some savings, people who can help, curiosity." },
              { q: "Which version of you adapted best, and why?", listenFor: "Usually the one who expected some change." }
            ],
            examples: [
              {
                kind: "list",
                title: "Skills that travel to any path",
                items: [
                  "Learning new things quickly.",
                  "Explaining your ideas clearly.",
                  "Working well with different people.",
                  "Handling money sensibly."
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "A good plan means nothing goes wrong.", fact: "A good plan expects some things to go wrong, and leaves room to adjust." },
                  { myth: "If your path changes, you failed.", fact: "Most careers change direction. Adapting is a skill, not a failure." },
                  { myth: "Safe fields never change.", fact: "Every field changes. Technology is reshaping even the most established ones." }
                ]
              }
            ],
            story: {
              body: "Sanya studied journalism. In her second year, the magazine she dreamed of writing for shut down. She'd been running the college's social media pages as a hobby, so she pitched herself as a writer for a health startup. Four years later she writes about medicine, a job that didn't exist when she started college.",
              question: "What carried over from her original path?"
            },
            practice: {
              title: "Fast-forward",
              steps: [
                "Work as a team.",
                "Pick a career path. Write what years 1 and 2 might look like.",
                "When the second timer starts, write one big surprise in year 3, and how you'd adapt in year 4. Share it."
              ],
              rounds: [{ label: "Years 1 and 2", seconds: 60 }, { label: "The year 3 surprise", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could adapt if your path changed?",
            mission: "This week, write down two skills you have that would help in any career. Pick one to work on."
          }
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
          takeaway: "What would need to change about your situation for the other option to become the obvious choice?",
          lesson: {
            goal: "Students practice naming their own priorities honestly when two good offers differ, and check the real numbers behind each one.",
            skills: ["Decision making", "Self-awareness"],
            focus: ["D", "C"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Salary talk can be uncomfortable for students whose families are struggling. Keep the numbers about the made-up offers, never about anyone's family income.",
            prompts: [
              { q: "Which offer sounds better to say out loud? Is that the one you'd pick?", listenFor: "Option A often sounds better. That's worth noticing." },
              { q: "What does ₹12 lakh a year actually mean each month?", listenFor: "About ₹1 lakh a month before deductions, in an expensive city." },
              { q: "What would you regret not trying?", listenFor: "Honest answers. Either choice could be regretted." }
            ],
            examples: [
              {
                kind: "numbers",
                title: "Real numbers: per month",
                intro: "Example only: yearly pay divided by 12, before any deductions.",
                rows: [
                  { label: "Option A, Delhi", value: "₹1,00,000 a month" },
                  { label: "Option B, Bangalore", value: "₹50,000 a month" },
                  { label: "Difference", value: "₹50,000 a month" }
                ],
                note: "Rent, travel and everyday costs in each city change how far that money really goes."
              },
              {
                kind: "compare",
                title: "Two lists, before you decide",
                columns: [
                  { heading: "Option A: ₹12 lakh", get: ["Higher income", "A big company name on your CV"], give: ["Long hours", "Less say over your own work"] },
                  { heading: "Option B: ₹6 lakh", get: ["Fast learning", "Real responsibility early"], give: ["Half the income", "Less job security"] }
                ]
              }
            ],
            story: {
              body: "Neel took the smaller offer at a startup because he wanted to learn fast. The first year was tight on money, and he shared a flat with three people. By year three, the skills he'd built got him a role that paid more than the big-company offer would have. His friend took the big offer and was happy too. He'd wanted stability, and he got it.",
              question: "Why were both of them right?"
            },
            practice: {
              title: "Name your three",
              steps: [
                "Work as a team.",
                "Write the three things that matter most to your team in a first job, in order.",
                "Decide which offer wins using only your three. Share your choice and your top reason."
              ],
              rounds: [{ label: "Decide", seconds: 90 }]
            },
            exitCheck: "How clear are you on what you'd actually prioritize in a first job?",
            mission: "This week, write your own top three for a first job. Keep the list somewhere you'll find it in a year."
          }
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
          takeaway: "If a friend were in this exact situation, what would you tell them? Does that match what you'd tell yourself?",
          lesson: {
            goal: "Students separate a failed attempt from a failed goal, and practice finding different paths to the same goal after a setback.",
            skills: ["Coping with stress", "Problem solving"],
            focus: ["A", "D"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Exam results can hit very hard. If a student talks about feeling hopeless or worthless, or about not wanting to go on after a result, treat it as serious: stay with them, don't press for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "Is the goal the problem, or just this attempt?", listenFor: "Usually just this attempt." },
              { q: "What would you tell a friend in this position?", listenFor: "Kind, practical advice. Notice whether it's kinder than what you'd tell yourself." },
              { q: "What other paths lead to the same goal?", listenFor: "Other colleges, other exams, a related course, a gap year, working first." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Talk to yourself like a friend",
                situation: "Your results are out, and they're not what you wanted.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"I'm a failure. Everyone else made it.\"", note: "Turns one result into a verdict on your whole self." },
                  { label: "Clear", strength: 2, text: "\"I'll just try again next year, the same way.\"", note: "Possible, but it skips asking what else is out there." },
                  { label: "Strong", strength: 3, text: "\"This attempt didn't work. The goal still matters to me. What are all the ways I could still get there?\"", note: "Separates the attempt from the goal, and opens up new paths." }
                ]
              },
              {
                kind: "list",
                title: "One goal, many paths",
                items: [
                  "Work in healthcare: medicine, nursing, physiotherapy, pharmacy, medical research, public health.",
                  "Build technology: engineering, a computer science degree, diploma courses, building projects online.",
                  "Work in law: a five-year law course, a law degree after another degree, legal research and support roles."
                ]
              }
            ],
            story: {
              body: "Ananya didn't get the NEET score she needed on her first attempt. For a week she barely left her room. Then her counselor helped her list every route into healthcare they could think of. She found a physiotherapy course she'd never considered, loved it, and now works with athletes recovering from injuries.",
              question: "What did making that list do for Ananya?"
            },
            practice: {
              title: "More than one way",
              steps: [
                "Work as a team.",
                "Pick a big goal, like becoming a pilot, a chef, or a scientist.",
                "List as many different realistic paths to that goal as you can. Share your list."
              ],
              rounds: [{ label: "List them", seconds: 90 }]
            },
            exitCheck: "How ready do you feel to find another path if a plan doesn't work out?",
            mission: "This week, write down one goal that matters to you, and three different ways you could reach it."
          }
        }
      ]
    }
  }
};
