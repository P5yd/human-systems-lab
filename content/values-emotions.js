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
          hook: "You get detention for something you didn't do — a teacher misread the situation. You're furious, and class hasn't even ended.",
          predictionPrompts: [
            "What does the anger want you to do right now?",
            "What would you actually want to have done, an hour from now?"
          ],
          choices: [
            { id: "A", text: "Argue back loudly in front of the class.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Feels like justice in the moment, but almost always makes the actual situation worse, not better." },
            { id: "B", text: "Go silent and shut down for the rest of class.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "Avoids escalating, but the anger doesn't go anywhere — it just gets carried, unresolved, into the rest of your day." },
            { id: "C", text: "Take a breath, wait until after class, and calmly explain what actually happened.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Gives the anger somewhere to go without acting on it immediately — and gives the teacher a real chance to fix the mistake." },
            { id: "D", text: "Vent to your friends about it for the rest of the day.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Feels better briefly, but doesn't address the actual detention or the misunderstanding behind it." },
            { id: "E", text: "Accept the detention without saying anything, even later.", dcera: { D: 1, C: 2, E: 2, R: 3, A: 1 }, reason: "Avoids all conflict, but leaves a real mistake uncorrected and the unfairness unresolved." }
          ],
          consequences: {
            A: "The teacher, now also defensive, adds a second consequence for talking back. The actual misunderstanding never gets addressed.",
            B: "You get through class, but you're distracted and short with a friend later — the anger found somewhere else to land.",
            C: "The teacher listens, realizes the mistake, and clears the detention. It takes more self-control in the moment, but it actually works.",
            D: "Your friends agree it's unfair, which feels good, but the detention still stands and the teacher never learns they made a mistake.",
            E: "The detention stays on your record. Weeks later you're still quietly annoyed every time you see that teacher."
          },
          concept: "Anger isn't the problem — it's useful information that something feels unfair. The skill is separating the feeling from the very next thing you do with it.",
          takeaway: "What's your usual first move when you're angry, and did today's choice match that?"
        },
        {
          id: "everyones-watching",
          title: "Everyone's Watching",
          hook: "You freeze halfway through a class presentation. A few people laugh. You still have two more minutes to get through.",
          predictionPrompts: [
            "What is the embarrassment actually about — the mistake, or being seen making it?",
            "What happens if you let the moment become bigger than it is?"
          ],
          choices: [
            { id: "A", text: "Rush through the rest as fast as possible to end it.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Ends the discomfort quickly, but the rushed finish usually reads worse than the pause did." },
            { id: "B", text: "Stop and say 'give me a second' before continuing at your own pace.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 5 }, reason: "Names the moment instead of fighting it, and gives yourself room to actually recover." },
            { id: "C", text: "Make a self-deprecating joke about freezing, then continue.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "Often defuses the room's tension effectively, though it can also reinforce the embarrassment if it doesn't land." },
            { id: "D", text: "Ask to sit down and finish another day.", dcera: { D: 2, C: 3, E: 2, R: 4, A: 2 }, reason: "Removes you from the discomfort completely, but avoids practicing the exact skill this moment could have built." },
            { id: "E", text: "Stay frozen and let the silence stretch until someone else steps in.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "The longest and most uncomfortable version of the moment for everyone, including you." }
          ],
          consequences: {
            A: "You finish, but stumble over two more points from rushing — the presentation ends worse than the freeze itself.",
            B: "The pause is a few seconds long. Most of the class barely registers it, and you finish clearly.",
            C: "A few people laugh with you, not at you, and the room relaxes along with you.",
            D: "You avoid finishing today, but the same nerves are waiting for you next time, undiminished.",
            E: "The teacher eventually steps in, and the moment becomes the thing people remember about the presentation."
          },
          concept: "The freeze itself lasts a few seconds. What determines how it's remembered — by you and everyone watching — is almost entirely what happens in the next thirty.",
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
            { id: "A", text: "Fake enthusiasm you don't feel.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Protects the friendship on the surface, but the gap between what you feel and what you show tends to leak out eventually." },
            { id: "B", text: "Avoid them for a few days until the feeling passes.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 1 }, reason: "Buys time, but reads as distant to a friend who's excited and doesn't know why you disappeared." },
            { id: "C", text: "Be honest that it's hard to hear right now, while still being happy for them.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "Names both true things at once — the jealousy and the genuine happiness — instead of picking one to perform." },
            { id: "D", text: "Point out reasons the casting might have been unfair.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns your own disappointment into something aimed at your friend, which they didn't do anything to deserve." },
            { id: "E", text: "Say nothing and let the friendship quietly cool off.", dcera: { D: 1, C: 2, E: 1, R: 3, A: 1 }, reason: "The friendship absorbs the jealousy slowly and invisibly, with neither of you ever naming what actually happened." }
          ],
          consequences: {
            A: "Your friend doesn't notice at first, but a few weeks later asks why you've seemed distant since the news.",
            B: "By the time you talk again, your friend feels hurt that you weren't around for something exciting for them.",
            C: "Your friend appreciates the honesty, and it doesn't stop them from being excited — the friendship holds both feelings fine.",
            D: "Your friend hears the doubt behind your words, and it puts a real strain on the friendship going forward.",
            E: "The friendship never quite recovers its old closeness, and neither of you ever figures out exactly why."
          },
          concept: "Jealousy and genuine happiness for someone else aren't opposites — they can both be true at the same time. The mistake is thinking you have to pick one to show.",
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
            { id: "A", text: "Try to mentally review every possible answer one more time.", dcera: { D: 1, C: 2, E: 2, R: 1, A: 1 }, reason: "Adds more information to an already-overloaded mind — usually increases the panic rather than calming it." },
            { id: "B", text: "Do a few minutes of slow, deliberate breathing before going in.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Directly regulates the physical panic response instead of trying to think your way past it." },
            { id: "C", text: "Text a friend for reassurance right before walking in.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "Can genuinely help, though it depends entirely on getting a response in time, and doesn't address the physical panic itself." },
            { id: "D", text: "Tell yourself the panic means you're not ready and consider rescheduling.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "Treats a normal physical response to pressure as proof of a problem that isn't actually there." },
            { id: "E", text: "Push the feeling down and walk in acting completely calm.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Can work in the short term, but suppressed panic often leaks out as stiffness or distraction partway through." }
          ],
          consequences: {
            A: "You walk in more overloaded than before, and the first question catches you off guard anyway.",
            B: "Your heart rate settles enough to think clearly, and you walk in able to actually listen to the first question.",
            C: "The reply comes just in time and genuinely helps — though you got lucky with the timing.",
            D: "You reschedule, and the same panic is waiting for you at the new interview time, now with added self-doubt attached.",
            E: "You get through the first few questions fine, then visibly lose your composure midway through."
          },
          concept: "Panic is a physical state, not a verdict on your readiness. The fastest way out of it is almost never more thinking — it's something that works directly on the body.",
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
            { id: "A", text: "Apologize repeatedly and keep bringing it up for days.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "The guilt is genuine, but repeated apologizing shifts the team's energy toward comforting you instead of fixing the problem." },
            { id: "B", text: "Own it clearly once, then focus on what can still be fixed.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Takes real responsibility without letting the guilt itself become the team's problem to manage." },
            { id: "C", text: "Explain the reasons the deadline was missed before apologizing.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Reasonable context can come later — leading with it before owning the mistake usually reads as an excuse." },
            { id: "D", text: "Avoid the team for a day because you're too embarrassed to face them.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "The project still needs fixing, and your absence right now makes that harder for everyone, including you." },
            { id: "E", text: "Quietly work extra hours to fix it without saying anything to the team.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 3 }, reason: "Well-intentioned, but the team is left in the dark about what happened and what's being done about it." }
          ],
          consequences: {
            A: "The team reassures you multiple times, but the actual fix gets delayed while everyone manages your guilt instead of the project.",
            B: "The team appreciates the directness, and the group moves quickly into fixing what's still fixable.",
            C: "The reasons might be valid, but the team hears the excuse first and the apology second — it lands differently than intended.",
            D: "The project sits unaddressed for a day, and the team starts making decisions without you in the room.",
            E: "The fix happens, but the team is confused about what occurred and whether it will happen again."
          },
          concept: "Guilt that turns into visible ownership helps everyone move forward. Guilt that turns into a performance for others to manage usually just adds a second problem to the first.",
          takeaway: "What's the difference between accountability and self-punishment?"
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
            { id: "A", text: "Snap back immediately, matching their tone.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Matches the escalation instead of interrupting it — the exact opposite of what de-escalation requires." },
            { id: "B", text: "Stay quiet in the moment, then address it privately later.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Separates the public heat of the moment from the real conversation that actually needs to happen." },
            { id: "C", text: "Point out calmly, in the moment, that the tone wasn't warranted.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 3 }, reason: "Can work, though correcting someone publicly in the same heated moment sometimes reignites it rather than closing it." },
            { id: "D", text: "Say nothing at all, ever, and let it go completely.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "Avoids conflict entirely, but an unfair pattern left unaddressed usually just repeats." },
            { id: "E", text: "Complain to other coworkers about it afterward instead of addressing it directly.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Feels satisfying, but resolves nothing and can make you look like the source of tension instead of them." }
          ],
          consequences: {
            A: "The argument escalates in front of everyone, and both of you look worse for it than the original comment did.",
            B: "The private conversation goes well — your coworker apologizes once the heat of the moment has passed.",
            C: "It mostly lands fine, though the coworker feels slightly cornered in front of others and stays a little defensive after.",
            D: "The coworker snaps at you again a few weeks later, in a very similar way.",
            E: "Word gets back to the coworker secondhand, and now there are two unresolved tensions instead of one."
          },
          concept: "Not reacting in the heated moment isn't the same as not addressing it. The timing of the response matters as much as the content of it.",
          takeaway: "What's your usual gap between feeling provoked and actually responding — and is it working for you?"
        }
      ]
    }
  }
};
