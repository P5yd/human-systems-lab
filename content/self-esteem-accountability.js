// Module: Self-Esteem & Personal Accountability
// New module added 2026-08-18, following the established pattern.

const MODULE_SELF_ESTEEM_ACCOUNTABILITY = {
  id: "self-esteem-accountability",
  title: "Self-Esteem & Personal Accountability",
  coreIdea: "Confidence isn't about being right all the time — it's about how you handle being wrong.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Owning It",
      scenarios: [
        {
          id: "the-group-chat-comparison",
          title: "The Group Chat Comparison",
          hook: "Scrolling through social media, everyone in your group chat seems to be doing more, achieving more, and having more fun than you.",
          predictionPrompts: [
            "What are you actually seeing — someone's whole life, or their highlight reel?",
            "What does the comparison make you want to do next?"
          ],
          choices: [
            { id: "A", text: "Keep scrolling and let the feeling sit.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "The comparison compounds the longer it goes unexamined — this lets it keep building with no check on it." },
            { id: "B", text: "Post something to compete, even if it's exaggerated.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Chases the same comparison you're upset about, and adds a layer of dishonesty about your own life on top of it." },
            { id: "C", text: "Close the app and do something that's actually yours.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Interrupts the comparison loop directly instead of feeding it or fighting it." },
            { id: "D", text: "Message a friend honestly about feeling behind.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "Names the feeling out loud, which usually shrinks it — and often reveals the friend feels something similar." },
            { id: "E", text: "Tell yourself everyone else's posts are probably fake anyway.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "A partly true thought used to dismiss the feeling rather than actually sit with where it's coming from." }
          ],
          consequences: {
            A: "An hour later you feel worse than when you started, without really knowing why.",
            B: "The post gets a few likes, but it doesn't touch the actual feeling — if anything, it feels a little hollow.",
            C: "The activity doesn't erase the comparison, but it gives you something real of your own to think about instead.",
            D: "Your friend admits they feel the exact same way sometimes — the comparison suddenly feels a lot less personal.",
            E: "It works for about ten minutes before the feeling creeps back in, unresolved."
          },
          concept: "A feed shows outcomes with the effort, boredom, and failed attempts edited out. Comparing your whole life to someone else's highlight reel is comparing two different things and calling it fair.",
          takeaway: "What's one thing in your own life that wouldn't make it into anyone's highlight reel, but that you're genuinely proud of?"
        },
        {
          id: "the-mistake-in-front-of-the-class",
          title: "The Mistake in Front of the Class",
          hook: "You answer a question confidently in class, and you're completely wrong. A couple of people snicker.",
          predictionPrompts: [
            "What does the mistake actually say about you as a person?",
            "What would make this moment worse, and what would make it smaller?"
          ],
          choices: [
            { id: "A", text: "Insist you were probably right anyway.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Defends the ego instead of the truth, and usually makes the moment last longer than it needed to." },
            { id: "B", text: "Say 'good to know, thanks' and move on.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 5 }, reason: "Treats a wrong answer as information, not a verdict on your worth — the fastest way through the moment." },
            { id: "C", text: "Go quiet for the rest of class and stop raising your hand.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "Protects you from being wrong again, at the cost of participating at all going forward." },
            { id: "D", text: "Make a joke at your own expense before anyone else can.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "Often diffuses the moment effectively, though it works best when it doesn't become a habit you rely on every time." },
            { id: "E", text: "Overexplain why you thought that was the answer.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Keeps the moment in the spotlight longer than the mistake itself did." }
          ],
          consequences: {
            A: "The teacher gently corrects you again, and now it's taken twice as long to move past.",
            B: "The class moves on within seconds — most people have already forgotten by the next question.",
            C: "You get through class fine today, but you notice you've stopped participating even when you know the answer.",
            D: "A couple of people laugh with you this time, and the moment passes easily.",
            E: "The explanation draws more attention to the mistake than the mistake itself did."
          },
          concept: "Being wrong out loud feels bigger to you than it looks to anyone else — most of the room moves on in seconds. The story that lasts is the one you tell yourself about it afterward.",
          takeaway: "What's a wrong answer you gave a long time ago that you still remember — and does anyone else?"
        },
        {
          id: "taking-the-blame-or-not",
          title: "Taking the Blame (or Not)",
          hook: "A shared project goes wrong. Part of it is genuinely your fault; part of it is a teammate's. The teacher asks what happened.",
          predictionPrompts: [
            "What's the difference between owning your part and owning all of it?",
            "What happens to the teammate relationship depending on what you say?"
          ],
          choices: [
            { id: "A", text: "Take the blame for everything to avoid conflict.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Avoids a hard conversation now, but misrepresents what actually happened and lets the real issue go unaddressed." },
            { id: "B", text: "Name exactly your part, clearly, without minimizing it.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "Gives an honest, accurate account — the version most likely to actually fix what went wrong next time." },
            { id: "C", text: "Point out it was mostly the teammate's fault.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "May be accurate, but leading with someone else's mistake before naming your own reads as deflection." },
            { id: "D", text: "Stay vague about who did what.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "Avoids naming anything clearly, which usually means nothing gets fixed and the pattern repeats." },
            { id: "E", text: "Talk to your teammate privately first, then give a joint honest account.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "Protects the relationship and the truth at the same time — the option that requires the most effort and pays off the most." }
          ],
          consequences: {
            A: "The teacher believes you, but your teammate never learns what they need to fix, and the same mistake shows up on the next project.",
            B: "The teacher appreciates the clarity, and it's easy for them to see what needs to change on your end specifically.",
            C: "It's technically accurate, but the teammate feels thrown under the bus, and the relationship takes a hit.",
            D: "The teacher can't tell what actually happened, and ends up treating you both the same regardless of who did what.",
            E: "The account is honest and specific, and your teammate appreciates that you talked to them before saying anything to the teacher."
          },
          concept: "Accountability isn't taking all the blame or none of it — it's being precise about the part that was actually yours.",
          takeaway: "Have you ever taken blame that wasn't fully yours, just to avoid an awkward conversation?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Standing on Your Own Two Feet",
      scenarios: [
        {
          id: "the-feedback-that-stung",
          title: "The Feedback That Stung",
          hook: "Your supervisor gives you harsh but fair feedback on a project you were proud of. It stings more than you expected.",
          predictionPrompts: [
            "Is the feedback actually about your worth, or about this one piece of work?",
            "What would you do with this feedback if it didn't sting at all?"
          ],
          choices: [
            { id: "A", text: "Get defensive and explain why the criticism is wrong.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Protects the ego in the moment, but blocks the actual useful information the feedback contains." },
            { id: "B", text: "Say thank you, then process the sting privately before responding further.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Separates receiving the information from managing the feeling — lets both happen without one blocking the other." },
            { id: "C", text: "Agree with everything immediately, even the parts you're not sure about.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids conflict, but skips actually evaluating whether the feedback is fully accurate." },
            { id: "D", text: "Decide your supervisor just doesn't like you.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns useful, specific feedback into a story about your worth — the exact substitution that makes feedback impossible to use." },
            { id: "E", text: "Ask clarifying questions to understand exactly what to change.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Turns the sting into something concretely useful — the fastest way to actually improve next time." }
          ],
          consequences: {
            A: "The supervisor feels unheard, and the same feedback likely comes up again on the next project.",
            B: "You come back a day later with real questions, and the supervisor notices the maturity in how you handled it.",
            C: "You make changes based on feedback you didn't fully understand, and some of them miss the actual point.",
            D: "You start second-guessing every interaction with your supervisor, whether or not it's warranted.",
            E: "You leave with a clear, specific list of what to change — the sting fades once you have something useful to do with it."
          },
          concept: "Harsh feedback and your worth as a person are two different things, delivered in the same sentence. The skill is unbundling them fast enough to actually use the feedback.",
          takeaway: "What's feedback you received once that stung at first but turned out to be useful?"
        },
        {
          id: "when-it-really-was-your-fault",
          title: "When It Really Was Your Fault",
          hook: "A mistake you made costs your team a client. There's no ambiguity this time — it was genuinely your error.",
          predictionPrompts: [
            "What's the difference between accountability and self-punishment here?",
            "What does the team actually need from you next?"
          ],
          choices: [
            { id: "A", text: "Offer to resign or step back from the team entirely.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "An extreme response to a real but recoverable mistake — it removes you right when your understanding of what went wrong is most useful." },
            { id: "B", text: "Own it clearly, and propose specific steps to prevent it happening again.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Takes full responsibility while staying useful — the version of accountability that actually moves things forward." },
            { id: "C", text: "Spend the next weeks trying to overcompensate on everything.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Understandable instinct, but burning yourself out to prove worth after one mistake usually creates a second problem." },
            { id: "D", text: "Minimize it as 'these things happen' and move on quickly.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Undersells a mistake serious enough to lose a client, and the team notices the mismatch." },
            { id: "E", text: "Talk to a mentor about how to actually process and learn from this.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "A genuinely useful step for the long run, though it doesn't address the team's immediate need on its own." }
          ],
          consequences: {
            A: "The team is left short-handed right when they need your context on what happened most.",
            B: "The team appreciates the concrete plan, and trust rebuilds faster than it would have otherwise.",
            C: "You're exhausted within a month, and the overcompensation starts affecting your other work.",
            D: "The team feels like the seriousness of the loss wasn't taken seriously, and trust is slower to rebuild.",
            E: "You process it well personally, though the team still needs a direct conversation from you separately."
          },
          concept: "A real mistake deserves real accountability — not performance in either direction. Underplaying it and punishing yourself for it are both ways of avoiding the actual work of fixing it.",
          takeaway: "What does 'making it right' actually look like here, beyond just feeling bad about it?"
        },
        {
          id: "comparing-chapter-3-to-their-chapter-20",
          title: "Comparing Your Chapter 3 to Their Chapter 20",
          hook: "A former classmate, a few years older, just had major career success online. You're still early in yours, and the comparison stings more than you expected.",
          predictionPrompts: [
            "What are you actually comparing — two moments, or two different timelines entirely?",
            "What would you tell a younger friend who felt this way about you one day?"
          ],
          choices: [
            { id: "A", text: "Assume you're just behind and probably always will be.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Treats one snapshot in time as a permanent verdict on a much longer story that hasn't finished yet." },
            { id: "B", text: "Unfollow or mute to protect your headspace for now.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "A reasonable short-term boundary, though it doesn't address the comparison instinct itself." },
            { id: "C", text: "Reach out to congratulate them genuinely, and ask what their path looked like.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 5 }, reason: "Turns a one-sided comparison into real information — most 'overnight' stories have years of unseen work behind them." },
            { id: "D", text: "Push yourself into a rushed, unplanned decision to 'catch up.'", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Makes a real decision based on someone else's timeline instead of your own actual circumstances." },
            { id: "E", text: "Remind yourself of your own progress over the last year, specifically.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 3 }, reason: "Shifts the comparison to something meaningful — your own trajectory — instead of someone else's different one." }
          ],
          consequences: {
            A: "The assumption becomes a quiet, ongoing weight that colors how you see your own work for months.",
            B: "You feel some relief, though the underlying comparison instinct is still there the next time it comes up elsewhere.",
            C: "They mention years of rejections and false starts you never saw — the story turns out to be much less 'overnight' than it looked.",
            D: "The rushed decision doesn't fit your actual situation, and you end up further from where you wanted to be, not closer.",
            E: "It doesn't erase the sting completely, but it gives you something true and specific to hold onto instead."
          },
          concept: "You're almost never comparing two equivalent moments — you're comparing your current chapter to someone else's highlight, years ahead, with everything in between edited out.",
          takeaway: "What's a version of 'success' on your own timeline that you'd actually be proud of, regardless of anyone else's?"
        }
      ]
    }
  }
};
