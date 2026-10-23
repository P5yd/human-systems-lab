// Module: A Guide for Boys
// New module added 2026-08-20, adapted from the external guide at
// thehumansystemslab.netlify.app/guides/guide_for_boys — an 8-chapter
// mentorship guide on respect, emotional awareness, consent, and healthy
// masculinity for boys aged 11-18. Scenarios are built directly from the
// guide's own embedded case studies (Rohan/Priya, Arjun/Nandini,
// Vikram's timetable, Dev/Isha) plus its later chapters on anger,
// digital consent, safety allyship, and consent itself. Same schema:
// dcera + reason per choice, choice→consequence, concept revealed after.
//
// Lessons added 2026-10-23 (eighth module with lessons), same `lesson` shape
// as content/decision-making.js, with the sensitive-module rules from
// relationships-responsibility.js: a care note on every lesson, written
// practice only for the consent lesson (never role-play), stopping shown as
// a complete answer, and `counselorLed: true` for the guide banner.

const MODULE_GUIDE_FOR_BOYS = {
  id: "guide-for-boys",
  title: "A Guide for Boys",
  counselorLed: true,
  coreIdea: "Respect isn't a rule you follow. It's a hundred small choices, and you get to choose better ones.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Everyday Respect",
      scenarios: [
        {
          id: "the-cricket-conversation",
          title: "The Cricket Conversation",
          hook: "Your friend group is deep in a cricket debate at lunch. Priya is sitting right there, but she hasn't said a word. You all just assumed she wouldn't have an opinion.",
          predictionPrompts: [
            "What does that assumption actually cost her?",
            "What would change if you asked instead of assumed?"
          ],
          choices: [
            { id: "A", text: "Keep talking. If she wanted to join in, she would.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Assumes silence means she isn't interested. Maybe nobody just asked her." },
            { id: "B", text: "Ask her directly what she thinks about the match.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 5 }, reason: "Treats her like someone with an opinion worth hearing, instead of deciding for her." },
            { id: "C", text: "Explain the rules to her in case she doesn't follow cricket.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Assumes she needs the explanation instead of checking first. The assumption just moved, it didn't go away." },
            { id: "D", text: "Make a joke about girls not caring about sports.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns an assumption into a joke that costs her, which is worse than the assumption itself." },
            { id: "E", text: "Notice she's been quiet and genuinely ask if she's even into cricket.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Doesn't assume either way. It checks first, and lets her real answer guide the conversation." }
          ],
          consequences: {
            A: "She stays quiet for the rest of lunch. Later you find out she's followed the team for years, longer than most of you.",
            B: "She lights up and turns out to know more about the match than half the group.",
            C: "She's mildly annoyed. She already knows the rules, and now everyone's watching her get 'taught' something she didn't ask for.",
            D: "A couple of people laugh. She doesn't. The conversation moves on, but something closed.",
            E: "She says she actually doesn't follow cricket much, and the conversation shifts to something she does care about. No assumptions needed either way."
          },
          concept: "Girls are not a mystery to solve. They're people with full inner lives, and the fastest way to find out what someone thinks is to ask, not guess.",
          takeaway: "What's an assumption you've made about someone that turned out to be wrong?",
          lesson: {
            goal: "Students notice how assumptions about what someone knows or cares about shut them out, and practice asking open questions instead of guessing.",
            skills: ["Empathy", "Effective communication"],
            focus: ["E", "D"],
            needs: "The smartboard.",
            careNote: "If students share real experiences of being talked over or left out, thank them, and don't let others argue with their experience in the moment.",
            prompts: [
              { q: "Why did the group assume she wouldn't have an opinion?", listenFor: "She was quiet. Stereotypes about girls and sport." },
              { q: "What's the difference between asking and explaining?", listenFor: "Asking treats her as someone who knows things. Explaining assumes she doesn't." },
              { q: "When have you been left out because of an assumption?", listenFor: "Real examples: being younger, new, not sporty, from somewhere else." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Bring someone in",
                situation: "The group is arguing about the match. Priya hasn't said anything.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"So basically, in cricket, a wicket is when...\"", note: "You've decided she doesn't know. She might know more than you." },
                  { label: "Clear", strength: 2, text: "\"Priya, do you even watch cricket?\"", note: "It's a question, but the \"even\" already guesses the answer." },
                  { label: "Strong", strength: 3, text: "\"Priya, what did you think of yesterday's match? Or are you more into something else?\"", note: "A real question, with an easy way out if she isn't into it." }
                ]
              },
              {
                kind: "list",
                title: "Swap a guess for a question",
                items: [
                  "Instead of \"You wouldn't get it,\" ask \"What do you think?\"",
                  "Instead of explaining, ask \"Do you follow this?\"",
                  "Instead of a joke about it, ask what they're into."
                ]
              }
            ],
            story: {
              body: "Kabir's friends kept explaining football to Meenal at lunch. One day Kabir asked her who she thought would win the league. She gave a ten-minute answer, with statistics. The group had been explaining the offside rule to someone who'd played for the state under-16 team.",
              question: "What did the group miss out on by assuming?"
            },
            practice: {
              title: "Ask, don't assume",
              steps: [
                "Get into pairs.",
                "Each of you picks a topic you assume your partner knows nothing about.",
                "Ask them three open questions about it instead. Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How likely are you to ask instead of assume, next time someone's quiet in a conversation?",
            mission: "This week, ask someone you don't usually talk to what they think about something. Then really listen to the answer."
          }
        },
        {
          id: "when-shes-crying",
          title: "When She's Crying",
          hook: "Nandini is crying at her desk after getting bad news. You have no idea what to do, and you're frozen in place.",
          predictionPrompts: [
            "Does she need you to fix something, or just not be alone?",
            "What's the difference between actually helping and just looking helpful?"
          ],
          choices: [
            { id: "A", text: "Immediately start offering solutions to whatever's wrong.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Jumps to fixing things before understanding what she actually needs. Help nobody asked for isn't always help." },
            { id: "B", text: "Awkwardly walk away to give her space, unsure what else to do.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 1 }, reason: "Well-meaning, but leaving can look like you're uncomfortable with her feelings, not that you're respecting her space." },
            { id: "C", text: "Sit nearby quietly and just be present without saying much.", dcera: { D: 4, C: 4, E: 5, R: 3, A: 4 }, reason: "Just being there, without asking anything of her, is its own kind of support. You don't need the right words to help." },
            { id: "D", text: "Ask 'What happened?' and actually wait for the answer.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Asks, then actually waits for the answer. That's rare, and it's the most useful thing you can do." },
            { id: "E", text: "Tell her to cheer up because it's probably not that bad.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Brushes off her feeling instead of making room for it. That teaches her not to show her feelings around you again." }
          ],
          consequences: {
            A: "She cuts you off halfway through. She didn't ask for solutions, and now she has to manage your discomfort too.",
            B: "She notices you leaving and feels more alone than before, even though you meant well.",
            C: "She calms down faster with someone just there, and later tells a friend you were the only one who didn't make it weird.",
            D: "She tells you what happened, and just saying it out loud helps more than any advice would have.",
            E: "She stops crying in front of you, but not because she feels better. It's because she's learned not to show it around you."
          },
          concept: "Emotions aren't something broken that needs fixing. They're information. Being someone people feel safe around matters more than saying the right thing.",
          takeaway: "When someone near you is upset, what's your instinct? Fix it, leave, or stay?",
          lesson: {
            goal: "Students learn that being present matters more than having the right words, and practice two simple openers: asking what happened, and asking what the person needs.",
            skills: ["Empathy", "Coping with emotions"],
            focus: ["E", "A"],
            needs: "The smartboard.",
            careNote: "If a student describes a classmate who is often very upset, or who has talked about hurting themselves, treat it as serious. Thank them, and tell the counselor the same day.",
            prompts: [
              { q: "Why is it so hard to know what to do when someone's crying?", listenFor: "Fear of saying the wrong thing, feeling awkward, not being used to it." },
              { q: "What's wrong with \"cheer up, it's not that bad\"?", listenFor: "It tells them their feeling is wrong, so they hide it next time." },
              { q: "Is it okay for boys to cry too?", listenFor: "Yes. Everyone has feelings, and making room for them is a strength." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "What to say",
                situation: "A classmate is crying at her desk after some bad news.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"Don't cry, it's not that bad.\"", note: "It shuts the feeling down, so she learns to hide it from you." },
                  { label: "Good", strength: 2, text: "(Sitting nearby, quietly.)", note: "Being there without saying much is real support." },
                  { label: "Strong", strength: 3, text: "\"Hey. Do you want to talk about it, or do you just want some company?\"", note: "Lets her choose the kind of support she needs." }
                ]
              },
              {
                kind: "list",
                title: "Three things that help",
                items: [
                  "Stay. You don't need the right words.",
                  "Ask, then wait: \"What happened?\" or \"What do you need?\"",
                  "If it sounds serious, help them find a teacher or the counselor."
                ]
              }
            ],
            story: {
              body: "When Arnav's classmate Ritu started crying after a phone call, he didn't know what to say. He pulled his chair a little closer and said, \"I'm here if you want to talk.\" For a while she didn't. Then she told him her grandmother was in hospital. Later she said he was the only one who didn't make it weird.",
              question: "Why did saying very little help so much?"
            },
            practice: {
              title: "Two good openers",
              steps: [
                "Get into pairs.",
                "One of you describes a made-up bad day. The other uses one opener (\"Do you want to talk, or just want company?\" or \"What happened?\") and then just listens.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How confident are you that you'd know what to do if a friend was crying?",
            mission: "This week, when someone seems down, ask \"Are you okay?\" and wait for the real answer."
          }
        },
        {
          id: "the-study-timetable",
          title: "The Study Timetable",
          hook: "A friend tells you she's stressed about balancing study time before exams. You immediately start building her a detailed timetable, without her asking.",
          predictionPrompts: [
            "Did she ask for a solution, or for someone to hear that she's stressed?",
            "What's the cost of solving a problem nobody asked you to solve?"
          ],
          choices: [
            { id: "A", text: "Build the timetable anyway. It's genuinely useful advice.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Solves a problem before checking if that's actually the problem she wants solved." },
            { id: "B", text: "Ask if she wants advice or just wants to vent first.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 5 }, reason: "Checks what kind of support she actually wants, instead of defaulting to the one that's easiest for you to give." },
            { id: "C", text: "Tell her she's overthinking it and it'll be fine.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Dismisses her feeling instead of making space for what's underneath it." },
            { id: "D", text: "Share how you personally manage stress, even though she didn't ask.", dcera: { D: 1, C: 2, E: 1, R: 2, A: 2 }, reason: "Turns her problem into a conversation about you, even with good intentions." },
            { id: "E", text: "Just listen and ask what's making this exam period feel different.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Listens for what's really underneath the first thing she said, instead of jumping to solve it." }
          ],
          consequences: {
            A: "She says a polite thanks, but the conversation feels finished on your terms, not hers.",
            B: "She says she mostly just needed to say it out loud, and she appreciates being asked instead of assumed.",
            C: "She feels dismissed. 'Overthinking' wasn't what she needed to hear while stressed.",
            D: "The conversation quietly becomes about you, not her stress.",
            E: "She ends up naming the real thing bothering her. It wasn't the timetable, it was one subject she's scared of failing."
          },
          concept: "Listening means understanding what someone means, not just hearing their words. 'What happened?' and 'What do you need right now?' get you further than advice nobody asked for.",
          takeaway: "When was the last time you asked someone what kind of support they wanted, instead of guessing?",
          lesson: {
            goal: "Students practice asking what kind of support someone wants (advice, or just to be heard) before jumping in to fix things.",
            skills: ["Effective communication", "Empathy"],
            focus: ["E", "D"],
            needs: "The smartboard.",
            careNote: "Exam stress can be serious. If a student says a friend is overwhelmed, not sleeping, or talking about giving up, encourage them to tell a trusted adult, and let the counselor know.",
            prompts: [
              { q: "Why do we jump to giving advice?", listenFor: "It feels useful, and it's easier than sitting with someone's stress." },
              { q: "What's the difference between listening and waiting to talk?", listenFor: "Listening is trying to understand. Waiting is planning your answer." },
              { q: "How can you tell what someone needs?", listenFor: "Ask: \"Do you want ideas, or do you just want to vent?\"" }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Ask first",
                situation: "\"I'm so stressed about exams. I don't know how I'll fit everything in.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You're overthinking it. You'll be fine.\"", note: "It brushes off the feeling." },
                  { label: "Clear", strength: 2, text: "\"Okay, here's what you do. Monday, maths for two hours...\"", note: "Maybe useful, but she didn't ask for a plan." },
                  { label: "Strong", strength: 3, text: "\"That sounds like a lot. Do you want ideas, or do you just need to vent?\"", note: "Shows you heard her, then lets her choose." }
                ]
              },
              {
                kind: "list",
                title: "Good listening in three moves",
                items: [
                  "Let them finish, completely.",
                  "Say back what you heard: \"So it's mostly chemistry that's worrying you?\"",
                  "Ask before advising: \"Do you want ideas?\""
                ]
              }
            ],
            story: {
              body: "Vikram's friend Sana said she was stressed about exams. Vikram started planning her week, then stopped and asked, \"Sorry, do you want a plan, or do you just want to talk?\" She laughed and said, \"Talk.\" Five minutes later she admitted it was really just physics she was scared of. They made a plan for that one subject together.",
              question: "What would Vikram have missed if he'd finished the timetable?"
            },
            practice: {
              title: "Advice or vent?",
              steps: [
                "Get into pairs.",
                "One of you shares a made-up worry. The other listens, says back what they heard, and asks \"Do you want ideas, or just to vent?\"",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How likely are you to ask what kind of support someone wants before giving advice?",
            mission: "This week, the next time a friend tells you about a problem, ask \"Do you want ideas, or do you just want to vent?\" before saying anything else."
          }
        },
        {
          id: "its-not-what-i-meant",
          title: "It's Not What I Meant",
          hook: "Something you said hurt Isha's feelings. When she tells you, your first instinct is to explain that you didn't mean it that way.",
          predictionPrompts: [
            "Does explaining what you meant undo how it made her feel?",
            "What does she actually need to hear right now?"
          ],
          choices: [
            { id: "A", text: "Explain your intention first, so she understands you didn't mean harm.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Puts your own comfort, being understood, before hers, being heard. The order matters more than it seems." },
            { id: "B", text: "Say 'I hear that it hurt you' before anything else.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "Acknowledges how it made her feel first, since that's what she actually told you. The conversation about your intention can come after." },
            { id: "C", text: "Tell her she's misunderstanding what you said.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns her hurt into her mistake. That adds a second hurt on top of the first." },
            { id: "D", text: "Apologize right away, then ask what landed wrong.", dcera: { D: 5, C: 5, E: 4, R: 3, A: 5 }, reason: "Apologizes with no conditions attached, then asks what happened. Owning it first and understanding it second is the order that actually repairs things." },
            { id: "E", text: "Get defensive, since your intentions were good.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Uses good intentions as a shield instead of a starting point. The impact still needs to be addressed either way." }
          ],
          consequences: {
            A: "She hears 'you're wrong to be hurt,' even though that's not what you meant. The explanation doesn't undo how it made her feel.",
            B: "She feels heard first, which makes the rest of the conversation, including what you meant, land better.",
            C: "She feels dismissed on top of already being hurt.",
            D: "She appreciates that you didn't make her prove the hurt was real before addressing it.",
            E: "The conversation becomes about defending yourself instead of repairing what happened."
          },
          concept: "Respect with conditions isn't real respect, it's just performance. What you meant matters, but it doesn't erase what actually happened. She shouldn't have to argue you into believing her.",
          takeaway: "Have you ever cared more about being understood than making sure someone else felt heard first?",
          lesson: {
            goal: "Students practice repairing hurt in the right order: acknowledging the impact first, apologizing without conditions, and only then explaining what they meant.",
            skills: ["Empathy", "Effective communication"],
            focus: ["E", "D"],
            needs: "The smartboard.",
            careNote: "Don't ask students to share real hurtful things they've said or heard in front of the class. If a student describes being hurt by comments that are repeated or targeted, it may be bullying, so follow up privately.",
            prompts: [
              { q: "Why do we want to explain our intention first?", listenFor: "We want to be seen as a good person." },
              { q: "Can something hurt even if you didn't mean it to?", listenFor: "Yes. Impact and intention are different things." },
              { q: "What's a conditional apology?", listenFor: "\"Sorry if you were offended.\" It puts the problem on them." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Repair it",
                situation: "\"What you said earlier really hurt.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You're taking it the wrong way.\"", note: "Now she's hurt and \"wrong\". Two problems." },
                  { label: "Clear", strength: 2, text: "\"Sorry if you were offended, but I didn't mean it like that.\"", note: "Sounds like an apology, but the \"if\" and the \"but\" cancel it." },
                  { label: "Strong", strength: 3, text: "\"I'm sorry. I can see it hurt you. Can you tell me what landed badly? I want to understand.\"", note: "Impact first, no conditions, then a real question. What you meant can come later." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If you didn't mean it, you don't need to apologize.", fact: "You can apologize for the effect, even when your intention was good." },
                  { myth: "Saying sorry means admitting you're a bad person.", fact: "It means you care how your words landed. Good people do it all the time." },
                  { myth: "\"Sorry if you were offended\" is an apology.", fact: "It puts the problem on them. \"I'm sorry it hurt you\" is an apology." }
                ]
              }
            ],
            story: {
              body: "Dev joked that Isha \"only got the part because the teacher likes her.\" She told him it really hurt, because she'd practiced for weeks. His first thought was \"It was just a joke.\" Instead he said, \"I'm sorry. That wasn't fair to all your practice.\" She said, \"Thanks for not arguing about it.\" They were fine by the next day.",
              question: "What would \"It was just a joke\" have told Isha?"
            },
            practice: {
              title: "Impact first",
              steps: [
                "Get into pairs.",
                "One of you says, \"What you said earlier really hurt,\" about something made up. The other answers in order: impact, sorry, a question.",
                "Swap when the timer ends."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How ready are you to apologize for the impact, even when you didn't mean harm?",
            mission: "This week, if something you say lands badly, try saying \"I'm sorry it hurt\" before you explain anything."
          }
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Respect Under Pressure",
      scenarios: [
        {
          id: "what-anger-is-for",
          title: "What Anger Is For",
          hook: "You're genuinely angry at a friend for something unfair they did. You can feel it building as you're about to talk to them about it.",
          predictionPrompts: [
            "What's the difference between expressing anger and using it to control someone?",
            "What do you actually want to happen after this conversation?"
          ],
          choices: [
            { id: "A", text: "Raise your voice to make sure they understand how serious this is.", dcera: { D: 2, C: 1, E: 1, R: 1, A: 2 }, reason: "Uses volume to make someone afraid, which is different from making sure they understand you." },
            { id: "B", text: "Go quiet and give them the silent treatment until they notice.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 1 }, reason: "Holds back instead of communicating. The other person is left guessing what they did wrong." },
            { id: "C", text: "Name the emotion out loud and take a minute before responding.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Names the anger, takes time, then comes back clearer. The anger gets to exist without taking over the conversation." },
            { id: "D", text: "Say something cutting, since it's easier than working through it calmly.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Uses words to hurt instead of to fix things. A cutting comment punishes instead of repairing anything." },
            { id: "E", text: "Confront them right away, mid-anger, without pausing first.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "The anger is real and it's valid, but confronting someone in the heat of it usually turns a conversation into a collision." }
          ],
          consequences: {
            A: "They get defensive fast, focused on your volume instead of what you're actually upset about.",
            B: "They spend more energy guessing what's wrong than understanding what actually happened.",
            C: "You come back to the conversation clear enough to say what actually matters, and they can actually hear it.",
            D: "The comment lands, but it adds a new hurt on top of the original problem instead of fixing it.",
            E: "The conversation happens, but it turns mostly into venting. The real issue gets lost in the heat of the moment."
          },
          concept: "Anger is real and valid, not something to hide. The line is whether you use it to be understood, or to make someone afraid.",
          takeaway: "What's your version of naming it and buying time? What actually works for you?",
          lesson: {
            goal: "Students see anger as valid information, and practice using it to be understood (naming it and taking time) instead of using volume, silence, or cutting words to control someone.",
            skills: ["Coping with emotions", "Effective communication"],
            focus: ["D", "E"],
            needs: "The smartboard.",
            careNote: "If a student says their anger has led to hitting, breaking things, or scaring people, or that someone at home uses anger this way, take it seriously. Follow up privately and tell the counselor the same day.",
            prompts: [
              { q: "What's the difference between being angry and being scary?", listenFor: "Angry is a feeling. Scary is using it to control someone." },
              { q: "Why is the silent treatment not a calm option?", listenFor: "It still punishes. The other person is left guessing." },
              { q: "What does taking a minute actually look like for you?", listenFor: "A walk, water, breathing, writing it down." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it, don't use it",
                situation: "Your friend took credit for your idea in front of the class. You're furious.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Shouting in their face, or going silent for a week.)", note: "Either way, they react to your anger, not your point." },
                  { label: "Clear", strength: 2, text: "\"I'm really angry with you right now.\"", note: "Honest, and a good first step. Now take the minute." },
                  { label: "Strong", strength: 3, text: "\"I'm angry, and I need ten minutes. Then I want to talk about the project idea.\"", note: "Names it, buys time, and says what you actually want to fix." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "Real men don't show emotion, except anger.", fact: "Every feeling is normal. Anger often sits on top of hurt or embarrassment." },
                  { myth: "If you don't shout, they won't take you seriously.", fact: "People listen better when they're not scared." },
                  { myth: "Bottling it up is the mature option.", fact: "Saying it calmly is the mature option. Bottled-up anger tends to explode later." }
                ]
              }
            ],
            story: {
              body: "When Rehan found out his friend had told everyone his exam marks, he wanted to punch a wall. Instead he texted, \"I'm angry and I need some time. Can we talk after school?\" He went for a run. After school he explained exactly why it hurt. His friend apologized, and Rehan noticed he hadn't shouted once.",
              question: "What did the run and the text buy Rehan?"
            },
            practice: {
              title: "Name it, buy time",
              steps: [
                "Get into pairs.",
                "One of you describes a made-up unfair situation. The other answers calmly in one line: name the anger, ask for time, and say what you want to talk about.",
                "Swap when the timer ends. Keep your voices calm. Nobody shouts."
              ],
              rounds: [{ label: "Round 1", seconds: 90 }, { label: "Swap roles", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could use anger to be understood, not to scare someone?",
            mission: "This week, the next time you feel angry, name it to yourself first: \"I'm angry because...\" Then decide what to do."
          }
        },
        {
          id: "the-text-you-shouldnt-have-screenshotted",
          title: "The Text You Shouldn't Have Screenshotted",
          hook: "A friend screenshots a private conversation someone had with them and starts sharing it in a group chat, laughing about it.",
          predictionPrompts: [
            "What did that person agree to when they sent that message?",
            "What happens to trust once something private goes into a group chat?"
          ],
          choices: [
            { id: "A", text: "Join in on the group chat reaction, since it's already out there.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Someone agreeing to share a private message with you doesn't mean they agreed to let it spread further. Joining in extends the harm." },
            { id: "B", text: "Ask your friend to delete it and stop sharing it further.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "Directly stops it from spreading, instead of just refusing to take part." },
            { id: "C", text: "Screenshot it yourself to save for later.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 2 }, reason: "Adds a second copy out there, which makes it harder to contain if it spreads, not easier." },
            { id: "D", text: "Say nothing, since it's not your conversation to get involved in.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Avoids joining in, but doesn't use the position you're in to actually slow anything down." },
            { id: "E", text: "Tell the person whose message was shared, so they know it happened.", dcera: { D: 4, C: 4, E: 4, R: 3, A: 4 }, reason: "Doesn't stop the original sharing, but makes sure the person it happened to isn't the last one to find out." }
          ],
          consequences: {
            A: "You've now also spread something that was never meant to leave a private conversation.",
            B: "Your friend is annoyed at first, but the sharing stops. The person it was about never has to find out from a stranger.",
            C: "Now there are two people who have it saved instead of one, doubling how far it could spread if either shares it.",
            D: "The message keeps circulating without anyone stepping in, and it eventually gets back to the person it was about.",
            E: "They're upset it happened, but grateful to hear it from you directly instead of finding out secondhand."
          },
          concept: "Consent isn't just about physical contact. It covers texting too, like screenshots, and what happens to something someone shared with you, not with a whole group chat.",
          takeaway: "Has someone ever shared something private with you that you kept private, even when it would've been easy not to?",
          lesson: {
            goal: "Students see that consent covers private messages too, and practice asking a friend to stop sharing, and letting the person affected know.",
            skills: ["Empathy", "Critical thinking"],
            focus: ["E", "R"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student mentions a real screenshot or image that's sexual or shows someone undressed, it must not be saved, screenshotted, or forwarded, even as evidence. Tell the counselor right away.",
            prompts: [
              { q: "What did the person agree to when they sent that message?", listenFor: "Sharing it with one person. Not a group chat." },
              { q: "Why is \"it's already out there\" not a reason to join in?", listenFor: "Every share spreads it further." },
              { q: "What makes it hard to tell a friend to stop?", listenFor: "Not wanting to seem boring, or to take sides." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Say it in the chat",
                situation: "Your friend posts someone's private message in the group chat, with laughing emojis.",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"😂😂\"", note: "It reads as joining in, and keeps the message moving." },
                  { label: "Clear", strength: 2, text: "(Saying nothing.)", note: "You haven't spread it, but you haven't slowed it either." },
                  { label: "Strong", strength: 3, text: "\"Bro, delete that. They sent it to you, not to all of us.\"", note: "Short, clear, and it says exactly why it isn't okay." }
                ]
              },
              {
                kind: "list",
                title: "Consent covers messages too",
                items: [
                  "A message sent to you was sent to you, not to your group chat.",
                  "Asking \"Can I share this?\" takes five seconds.",
                  "If something private gets out, tell the person before they hear it from someone else."
                ]
              }
            ],
            story: {
              body: "Karthik's friend shared a long message a girl had sent him, so the group could laugh at it. Karthik wrote, \"Not cool, delete it.\" Two others agreed. The friend deleted it, grumbling. A week later he admitted, \"Good thing I deleted that. Her cousin's in the group.\"",
              question: "Why did it matter that Karthik spoke up first?"
            },
            practice: {
              title: "Write the messages",
              steps: [
                "Work as a team.",
                "Write the one line you'd send in the group chat to get a private screenshot deleted.",
                "Then write what you'd say to the person whose message was shared. Read both out."
              ],
              rounds: [{ label: "Write them", seconds: 90 }]
            },
            exitCheck: "How ready are you to speak up when someone shares a private message?",
            mission: "This week, before you forward a screenshot of anyone else's message, ask yourself: \"Would they be okay with this?\""
          }
        },
        {
          id: "walking-her-home",
          title: "Walking Her Home",
          hook: "It's getting dark, and a friend mentions she has a long walk home alone tonight. She seems a little tense about it, but she hasn't asked for anything.",
          predictionPrompts: [
            "What is she working out right now that you might never have to think about?",
            "What's the difference between offering help and assuming she needs saving?"
          ],
          choices: [
            { id: "A", text: "Offer to walk with her, making it easy to say no if she doesn't want that.", dcera: { D: 4, C: 4, E: 4, R: 4, A: 4 }, reason: "Offers without any pressure. Gives her a real, easy choice." },
            { id: "B", text: "Tell her she's probably overreacting, since it's not that late.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Dismisses a real, reasonable safety concern as an overreaction." },
            { id: "C", text: "Wait for her to ask directly, since offering might seem pushy.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Waiting for her to ask directly assumes asking is easy. For a lot of people, it isn't." },
            { id: "D", text: "Insist on walking her home whether she wants it or not.", dcera: { D: 2, C: 3, E: 1, R: 4, A: 2 }, reason: "Comes from a protective place, but takes away her ability to decide for herself. That's its own kind of disrespect." },
            { id: "E", text: "Ask if she'd feel better with company, and let her answer either way.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "Notices, offers, and lets her decide. Respects her safety and her right to choose, both at once." }
          ],
          consequences: {
            A: "She says yes, relieved, and mentions this is something she thinks through almost every day, something you've never had to think about.",
            B: "She doesn't bring it up again, but the tension doesn't go away. It just goes unspoken.",
            C: "She never asks, since asking for that kind of help doesn't come easily to her, and she walks home the way she was already planning to.",
            D: "She goes along with it, but it wasn't really her choice. The 'help' took away her say in it.",
            E: "She appreciates being asked rather than told, and decides for herself what she actually needs tonight."
          },
          concept: "Girls are often quietly working out safety, like routes, timing, and who's around, in a way most boys never have to think about. Noticing that, and making your offer easy to accept or turn down, is a small but real way to be a good ally.",
          takeaway: "What's something you've never had to think twice about, that someone else has to think through every day?",
          lesson: {
            goal: "Students notice the everyday safety planning many girls do, and practice making offers of help that are easy to accept or turn down.",
            skills: ["Empathy", "Interpersonal relationships"],
            focus: ["E", "A"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "If a student says they feel unsafe on the way to or from school, or describes being followed or harassed, take it seriously and tell the counselor so the school can respond.",
            prompts: [
              { q: "What might she think about on a walk home that you might not?", listenFor: "The route, lighting, timing, who's around, phone battery." },
              { q: "Why isn't insisting on walking her home the best choice?", listenFor: "It takes away her choice, even though it's meant kindly." },
              { q: "How do you make an offer easy to say no to?", listenFor: "Keep it casual, give an easy out, and accept the answer without fuss." }
            ],
            examples: [
              {
                kind: "ladder",
                title: "Make the offer",
                situation: "\"Ugh, I've got that long walk home in the dark.\"",
                rungs: [
                  { label: "Weak", strength: 1, text: "\"You're overthinking it. It's not even late.\"", note: "It brushes off a real concern." },
                  { label: "Clear", strength: 2, text: "\"I'm walking you home. No arguments.\"", note: "Kind, but she didn't get a say." },
                  { label: "Strong", strength: 3, text: "\"I'm heading that way anyway. Want company? Totally fine if not.\"", note: "Easy to say yes, easy to say no, and no pressure either way." }
                ]
              },
              {
                kind: "list",
                title: "Being a good ally",
                items: [
                  "Notice when someone seems tense, and ask.",
                  "Make offers that are easy to turn down.",
                  "If you see someone being bothered, check on them or get an adult. Don't film it."
                ]
              }
            ],
            story: {
              body: "After a late cricket practice, Siddharth's teammate Anjali mentioned her bus stop was badly lit. He said, \"I'm getting the same bus. Want to walk together? No worries if not.\" She said yes. On the way she told him she always texts her mum the bus number. He'd never once thought about doing that.",
              question: "What did Siddharth learn on that walk?"
            },
            practice: {
              title: "Easy-to-refuse offers",
              steps: [
                "Work as a team.",
                "Write three offers of help for different situations: carrying something heavy, a ride home, company on a walk.",
                "Read them out. The class checks: does each offer leave real room to say no?"
              ],
              rounds: [{ label: "Write them", seconds: 90 }]
            },
            exitCheck: "How confident are you that you could offer help without taking over?",
            mission: "This week, if it feels comfortable, ask a female friend or family member what they think about when they walk somewhere alone. Just listen."
          }
        },
        {
          id: "hesitation-isnt-a-yes",
          title: "Hesitation Isn't a Yes",
          hook: "You and someone you're seeing are about to do something you haven't clearly talked about together. She goes quiet and seems unsure, but she doesn't say no.",
          predictionPrompts: [
            "What does silence actually communicate here?",
            "What would 'enthusiastic and informed' look like, compared to someone just not saying no?"
          ],
          choices: [
            { id: "A", text: "Take the quiet as an unspoken yes and continue.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Hesitation and uncertainty are not consent. This treats the absence of a clear no as a yes, which it isn't." },
            { id: "B", text: "Stop and check in directly about what she wants.", dcera: { D: 5, C: 5, E: 5, R: 5, A: 4 }, reason: "Checks in directly instead of guessing what her silence means. It's the only option that actually confirms she's willing." },
            { id: "C", text: "Keep going but slow down, waiting to see if she stops you.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Waiting for her to stop you puts the whole responsibility on her, when it should be shared by both of you." },
            { id: "D", text: "Ask once, and if she doesn't answer clearly, proceed anyway.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Treats an unclear answer as good enough, when only a clear, willing yes actually is." },
            { id: "E", text: "Notice the hesitation and pause the moment entirely to talk.", dcera: { D: 5, C: 5, E: 5, R: 5, A: 5 }, reason: "Stops completely instead of just continuing at a different speed. That's the most respectful response to real uncertainty." }
          ],
          consequences: {
            A: "It turns out she felt frozen, not willing. The difference becomes clear far too late.",
            B: "She's relieved to be asked directly, and tells you honestly she wasn't sure.",
            C: "Nothing gets clearer. You're both still guessing instead of knowing.",
            D: "One unclear check-in gets treated as consent, which it wasn't.",
            E: "The pause itself tells her that her comfort matters more than the moment, and she opens up about how she's really feeling."
          },
          concept: "Consent means someone says yes freely, clearly, and without pressure, and actually knows what they're agreeing to. Hesitation or uncertainty is not consent. Checking in isn't a mood killer, it's the baseline.",
          takeaway: "What would make it easier for you to pause and check in, in a moment like this?",
          lesson: {
            goal: "Students learn what consent means (a free, clear, informed yes that can change at any time), that hesitation and silence are not consent, and that checking in is a normal, respectful habit.",
            skills: ["Decision making", "Empathy"],
            focus: ["R", "E"],
            needs: "The smartboard. Paper and a pen for each team.",
            careNote: "Keep this lesson in general terms, as the scenario does, and never role-play it. If a student says something happened to them or to someone else without consent, thank them, don't ask for details in class, and tell the counselor the same day.",
            prompts: [
              { q: "What does silence communicate here?", listenFor: "Uncertainty, discomfort, freezing. Not yes." },
              { q: "Why does \"waiting to see if she stops you\" put the responsibility in the wrong place?", listenFor: "Both people are responsible for checking. It shouldn't fall on the person who's unsure." },
              { q: "Why is checking in not a mood killer?", listenFor: "It shows respect, and it makes both people feel safe." }
            ],
            examples: [
              {
                kind: "list",
                title: "Consent is",
                items: [
                  "Freely given: no pressure, no guilt.",
                  "Clear: a real yes, not silence or \"I guess.\"",
                  "Informed: both people know what they're agreeing to.",
                  "Changeable: anyone can stop at any point, even after saying yes."
                ]
              },
              {
                kind: "ladder",
                title: "When you notice hesitation",
                situation: "Things are moving forward, and she's gone quiet and seems unsure.",
                rungs: [
                  { label: "Weak", strength: 1, text: "(Carrying on, and waiting to see if she says no.)", note: "Silence isn't a yes. It puts the whole job on her." },
                  { label: "Enough", strength: 3, text: "(Stopping.)", note: "Pausing completely is always the right first move." },
                  { label: "Enough, and checking in", strength: 3, text: "\"Hey, let's stop for a sec. Are you okay? We don't have to do anything.\"", note: "Stops, checks in, and makes it easy for her to be honest." }
                ]
              },
              {
                kind: "mythfact",
                title: "Myth or fact",
                items: [
                  { myth: "If she didn't say no, it's fine.", fact: "Only a clear, willing yes counts. Silence, freezing, or \"I don't know\" mean stop." },
                  { myth: "Once someone says yes, it's yes for everything.", fact: "Consent can change at any time, and each step needs its own yes." },
                  { myth: "Asking ruins the moment.", fact: "Checking in shows respect. Most people feel safer with someone who asks." }
                ]
              }
            ],
            story: {
              body: "Rahul's older brother gave him one rule: \"If you have to wonder whether someone wants to, stop and ask.\" Rahul says it made things simpler, not harder. In his friend group, checking in became normal, and nobody thought it was awkward anymore.",
              question: "Why might a clear rule make things easier, not harder?"
            },
            practice: {
              title: "Ways to check in",
              steps: [
                "Work as a team. This one is written, not acted out.",
                "Write three short, natural ways to check in with someone, like \"Are you okay with this?\"",
                "Read them out. The class checks: does each one make it easy to say no?"
              ],
              rounds: [{ label: "Write them", seconds: 90 }]
            },
            exitCheck: "How clear are you on what consent is, and on what to do when someone hesitates?",
            mission: "This week, practice checking in during everyday things: \"Is it okay if I borrow this?\" or \"Want to keep going, or take a break?\" Notice how normal it feels."
          }
        }
      ]
    }
  }
};
