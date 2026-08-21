// Module: Values Clarification & Emotional Regulation
// New module added 2026-08-18, following the established pattern.

const MODULE_VALUES_EMOTIONS = {
  id: "values-emotions",
  title: "Values Clarification & Emotional Regulation",
  coreIdea: "You can't manage a feeling you haven't named, and you can't live by a value you haven't actually chosen.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · What Am I Feeling, and Why?",
      scenarios: [
        {
          id: "the-slammed-door",
          title: "The Slammed Door",
          hook: "You get detention for something you didn't do. A teacher misread what happened. You're furious, and class isn't even over yet.",
          predictionPrompts: [
            "What does your anger want you to do right now?",
            "An hour from now, what will you wish you had done?"
          ],
          choices: [
            { id: "A", text: "Argue back loudly in front of the class.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "It feels like justice in the moment. But it almost always makes things worse, not better." },
            { id: "B", text: "Go silent and shut down for the rest of class.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "This avoids a fight, but the anger doesn't go away. You just carry it, unresolved, through the rest of your day." },
            { id: "C", text: "Take a breath, wait until after class, and calmly explain what actually happened.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This gives your anger somewhere to go without acting on it right away. It also gives the teacher a real chance to fix the mistake." },
            { id: "D", text: "Vent to your friends about it for the rest of the day.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "It feels better for a little while. But it doesn't fix the detention or clear up the misunderstanding." },
            { id: "E", text: "Accept the detention without saying anything, even later.", dcera: { D: 1, C: 2, E: 2, R: 3, A: 1 }, reason: "This avoids any conflict. But it leaves a real mistake uncorrected, and the unfairness stays unresolved." }
          ],
          consequences: {
            A: "The teacher gets defensive too and adds a second consequence for talking back. The real misunderstanding never gets sorted out.",
            B: "You get through class, but you're distracted. Later you snap at a friend. The anger found somewhere else to land.",
            C: "The teacher listens, realizes the mistake, and clears the detention. It takes more self-control in the moment, but it actually works.",
            D: "Your friends agree it's unfair, which feels good. But the detention still stands, and the teacher never learns they made a mistake.",
            E: "The detention stays on your record. Weeks later you're still quietly annoyed every time you see that teacher."
          },
          concept: "Anger isn't the problem. It's useful information that something feels unfair to you. The skill is keeping the feeling separate from what you do next.",
          takeaway: "What's your usual first move when you're angry? Did the choice you made today match that?"
        },
        {
          id: "everyones-watching",
          title: "Everyone's Watching",
          hook: "You freeze halfway through a class presentation. A few people laugh. You still have two more minutes to get through.",
          predictionPrompts: [
            "What is the embarrassment really about? Is it the mistake, or is it being seen making the mistake?",
            "What happens if you let the moment become bigger than it is?"
          ],
          choices: [
            { id: "A", text: "Rush through the rest as fast as possible to end it.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This ends the discomfort fast. But rushing usually looks worse than the pause did." },
            { id: "B", text: "Stop and say 'give me a second' before continuing at your own pace.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 5 }, reason: "This names the moment instead of fighting it, and gives you room to actually recover." },
            { id: "C", text: "Make a joke about yourself freezing up, then continue.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "This often eases the tension in the room. But if the joke doesn't land, it can make the embarrassment worse." },
            { id: "D", text: "Ask to sit down and finish another day.", dcera: { D: 2, C: 3, E: 2, R: 4, A: 2 }, reason: "This removes you from the discomfort completely. But it also means missing the chance to practice this exact skill." },
            { id: "E", text: "Stay frozen and let the silence stretch until someone else steps in.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This is the longest and most uncomfortable version of the moment, for everyone, including you." }
          ],
          consequences: {
            A: "You finish, but you stumble over two more points from rushing. The presentation ends worse than the freeze did.",
            B: "The pause is a few seconds long. Most of the class barely registers it, and you finish clearly.",
            C: "A few people laugh with you, not at you, and the room relaxes along with you.",
            D: "You avoid finishing today. But the same nerves will be waiting for you next time, just as strong.",
            E: "The teacher eventually steps in, and the moment becomes the thing people remember about the presentation."
          },
          concept: "The freeze itself lasts only a few seconds. What people remember, including you, mostly comes down to what happens in the next thirty seconds.",
          takeaway: "What would you want a friend to say to you, right after a moment like this?"
        },
        {
          id: "the-green-eyed-moment",
          title: "The Green-Eyed Moment",
          hook: "Your friend gets the lead role you badly wanted. They're excited and want to tell you about it.",
          predictionPrompts: [
            "Is the jealousy about them, or about what you wanted for yourself?",
            "What does your friend actually need from you right now?"
          ],
          choices: [
            { id: "A", text: "Act excited even though you don't feel it.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "This protects the friendship on the surface. But the gap between what you feel and what you show tends to show up eventually." },
            { id: "B", text: "Avoid them for a few days until the feeling passes.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 1 }, reason: "This buys you time. But to a friend who's excited and doesn't know why you disappeared, it just feels distant." },
            { id: "C", text: "Be honest that it's hard to hear right now, while still being happy for them.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "This names both true feelings at once: the jealousy and the real happiness. You don't have to pick just one to show." },
            { id: "D", text: "Point out reasons the casting might have been unfair.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This turns your own disappointment into something aimed at your friend. They didn't do anything to deserve that." },
            { id: "E", text: "Say nothing and let the friendship quietly cool off.", dcera: { D: 1, C: 2, E: 1, R: 3, A: 1 }, reason: "The friendship absorbs the jealousy slowly, without either of you ever naming what actually happened." }
          ],
          consequences: {
            A: "Your friend doesn't notice at first. But a few weeks later, they ask why you've seemed distant since the news.",
            B: "By the time you talk again, your friend feels hurt that you weren't around for something exciting for them.",
            C: "Your friend appreciates the honesty. It doesn't stop them from being excited either. The friendship can hold both feelings just fine.",
            D: "Your friend hears the doubt behind your words, and it puts a real strain on the friendship going forward.",
            E: "The friendship never quite recovers its old closeness, and neither of you ever figures out exactly why."
          },
          concept: "Jealousy and real happiness for someone else aren't opposites. You can feel both at the same time. The mistake is thinking you have to pick just one to show.",
          takeaway: "Has jealousy ever cost you a friendship you didn't mean to lose?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Staying Steady Under Pressure",
      scenarios: [
        {
          id: "the-panic-before-the-interview",
          title: "The Panic Before the Interview",
          hook: "You have a college or internship interview in ten minutes. Your mind is racing and you can feel your heart pounding.",
          predictionPrompts: [
            "What does the panic think will happen if you walk in like this?",
            "What's actually true about how ready you are, underneath the panic?"
          ],
          choices: [
            { id: "A", text: "Try to review every possible answer in your head one more time.", dcera: { D: 1, C: 2, E: 2, R: 1, A: 1 }, reason: "This adds more information to a mind that's already overloaded. It usually makes the panic worse, not better." },
            { id: "B", text: "Do a few minutes of slow, steady breathing before going in.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "This works directly on the physical panic in your body, instead of trying to think your way past it." },
            { id: "C", text: "Text a friend for reassurance right before walking in.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "This can really help, but only if they reply in time. It also doesn't do anything for the physical panic itself." },
            { id: "D", text: "Tell yourself the panic means you're not ready and consider rescheduling.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "This treats a normal physical response to pressure as proof that something is wrong, when it isn't." },
            { id: "E", text: "Push the feeling down and walk in acting completely calm.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This can work for a short while. But panic you push down often comes out later as stiffness or losing focus." }
          ],
          consequences: {
            A: "You walk in more overloaded than before, and the first question catches you off guard anyway.",
            B: "Your heart rate settles enough to think clearly, and you walk in able to actually listen to the first question.",
            C: "The reply comes just in time and genuinely helps. Though honestly, you got lucky with the timing.",
            D: "You reschedule, but the same panic is waiting for you at the new interview time, now with extra self-doubt too.",
            E: "You get through the first few questions fine, then visibly lose your calm partway through."
          },
          concept: "Panic is a physical state, not proof of whether you're ready. The fastest way out of it is almost never more thinking. It's something that works directly on the body.",
          takeaway: "What's actually worked for you before, in a moment like this?"
        },
        {
          id: "when-youre-the-one-who-messed-up",
          title: "When You're the One Who Messed Up",
          hook: "You missed a deadline that affected your whole team's project. It's genuinely your fault, and you feel terrible about it.",
          predictionPrompts: [
            "What's the difference between feeling guilty and being useful right now?",
            "What does the team actually need from you in the next hour?"
          ],
          choices: [
            { id: "A", text: "Apologize repeatedly and keep bringing it up for days.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "The guilt is real. But apologizing over and over makes the team spend their energy comforting you instead of fixing the problem." },
            { id: "B", text: "Own it clearly once, then focus on what can still be fixed.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This takes real responsibility, without turning your guilt into one more problem for the team to manage." },
            { id: "C", text: "Explain the reasons the deadline was missed before apologizing.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Context can come later. Leading with it before you own the mistake usually just sounds like an excuse." },
            { id: "D", text: "Avoid the team for a day because you're too embarrassed to face them.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "The project still needs fixing. Your absence right now makes that harder for everyone, including you." },
            { id: "E", text: "Quietly work extra hours to fix it without saying anything to the team.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 3 }, reason: "This comes from a good place. But the team is left in the dark about what happened and what's being done about it." }
          ],
          consequences: {
            A: "The team reassures you again and again, but the fix gets delayed while everyone manages your guilt instead of the project.",
            B: "The team appreciates the directness, and the group moves quickly into fixing what's still fixable.",
            C: "The reasons might be true. But the team hears the excuse first and the apology second, so it doesn't land the way you meant it to.",
            D: "The project sits unaddressed for a day, and the team starts making decisions without you in the room.",
            E: "The fix happens, but the team is confused about what happened and whether it will happen again."
          },
          concept: "Guilt that turns into clear ownership helps everyone move forward. Guilt that turns into a performance for others to manage just adds a second problem on top of the first.",
          takeaway: "What's the difference between taking responsibility and punishing yourself?"
        },
        {
          id: "the-argument-you-didnt-start",
          title: "The Argument You Didn't Start",
          hook: "A coworker snaps at you unfairly in front of others, over something that wasn't your fault. You feel your face getting hot.",
          predictionPrompts: [
            "What does snapping back actually accomplish here?",
            "What do you actually want to be true an hour from now?"
          ],
          choices: [
            { id: "A", text: "Snap back immediately, matching their tone.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This matches the escalation instead of stopping it. It's the opposite of what calming things down needs." },
            { id: "B", text: "Stay quiet in the moment, then address it privately later.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This keeps the public heat of the moment separate from the real conversation you need to have." },
            { id: "C", text: "Calmly point out, in the moment, that the tone wasn't fair.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 3 }, reason: "This can work. But correcting someone publicly in the same heated moment can sometimes restart the fight instead of ending it." },
            { id: "D", text: "Say nothing at all, ever, and let it go completely.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "This avoids conflict completely. But an unfair pattern that's never addressed usually just repeats." },
            { id: "E", text: "Complain to other coworkers about it afterward instead of addressing it directly.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This feels satisfying. But it fixes nothing, and it can make you look like the source of the tension instead of them." }
          ],
          consequences: {
            A: "The argument escalates in front of everyone, and both of you look worse for it than the original comment did.",
            B: "The private conversation goes well. Once the heat of the moment has passed, your coworker apologizes.",
            C: "It mostly lands fine, though the coworker feels slightly cornered in front of others and stays a little defensive after.",
            D: "The coworker snaps at you again a few weeks later, in a very similar way.",
            E: "Word gets back to the coworker secondhand, and now there are two unresolved tensions instead of one."
          },
          concept: "Not reacting in the heated moment isn't the same as ignoring it. When you respond matters just as much as what you say.",
          takeaway: "What's your usual gap between feeling provoked and actually responding? Is that gap working for you?"
        }
      ]
    }
  }
};
