// Module: Self-Esteem & Personal Accountability
// New module added 2026-08-18, following the established pattern.

const MODULE_SELF_ESTEEM_ACCOUNTABILITY = {
  id: "self-esteem-accountability",
  title: "Self-Esteem & Personal Accountability",
  coreIdea: "Confidence isn't about being right all the time. It's about how you handle being wrong.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Owning It",
      scenarios: [
        {
          id: "the-group-chat-comparison",
          title: "The Group Chat Comparison",
          hook: "You're scrolling through social media. Everyone in your group chat seems to be doing more, achieving more, and having more fun than you.",
          predictionPrompts: [
            "What are you really seeing? Someone's whole life, or just their highlight reel?",
            "What does this comparison make you want to do next?"
          ],
          choices: [
            { id: "A", text: "Keep scrolling and let the feeling sit.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "The longer you sit with the comparison without questioning it, the bigger it gets. This choice lets it keep building unchecked." },
            { id: "B", text: "Post something to compete, even if it's exaggerated.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This chases the same comparison that's bothering you. It also adds some dishonesty about your own life on top of it." },
            { id: "C", text: "Close the app and do something that's actually yours.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "This breaks the comparison loop right away, instead of feeding it or fighting it." },
            { id: "D", text: "Message a friend honestly about feeling behind.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "Saying the feeling out loud usually makes it smaller. It also often shows that your friend feels the same way." },
            { id: "E", text: "Tell yourself everyone else's posts are probably fake anyway.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "This thought is partly true, but you're using it to brush off the feeling instead of understanding where it comes from." }
          ],
          consequences: {
            A: "An hour later, you feel worse than when you started. You're not even sure why.",
            B: "The post gets a few likes. But it doesn't touch the real feeling. If anything, it feels a little hollow.",
            C: "The activity doesn't erase the comparison. But now you have something real of your own to focus on.",
            D: "Your friend admits they feel the same way sometimes. Suddenly the comparison feels a lot less personal.",
            E: "It works for about ten minutes. Then the feeling creeps back in, still unresolved."
          },
          concept: "A feed shows you results. It edits out the effort, the boredom, and the failed attempts. Comparing your whole life to someone else's highlight reel isn't fair. You're comparing two completely different things.",
          takeaway: "What's one thing in your life that would never make it into a highlight reel, but you're genuinely proud of it?"
        },
        {
          id: "the-mistake-in-front-of-the-class",
          title: "The Mistake in Front of the Class",
          hook: "You answer a question confidently in class, and you're completely wrong. A couple of people laugh quietly.",
          predictionPrompts: [
            "Does this mistake really say anything about who you are as a person?",
            "What would make this moment worse? What would make it smaller?"
          ],
          choices: [
            { id: "A", text: "Insist you were probably right anyway.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This protects your ego instead of the truth. It usually makes the moment last longer than it needs to." },
            { id: "B", text: "Say 'good to know, thanks' and move on.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 5 }, reason: "This treats a wrong answer as useful information, not proof that you're not good enough. It's the fastest way through the moment." },
            { id: "C", text: "Go quiet for the rest of class and stop raising your hand.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 1 }, reason: "This protects you from being wrong again. But it costs you the chance to take part in class at all." },
            { id: "D", text: "Make a joke at your own expense before anyone else can.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "This often calms the moment down well. It works best when it's not a habit you lean on every single time." },
            { id: "E", text: "Overexplain why you thought that was the answer.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This keeps the moment in the spotlight longer than the mistake itself ever did." }
          ],
          consequences: {
            A: "The teacher gently corrects you again. Now it takes twice as long to move past it.",
            B: "The class moves on within seconds. Most people have already forgotten by the next question.",
            C: "You get through class fine today. But later you notice you've stopped raising your hand, even when you know the answer.",
            D: "A couple of people laugh with you this time, and the moment passes easily.",
            E: "The explanation draws more attention to the mistake than the mistake itself ever did."
          },
          concept: "Being wrong out loud feels huge to you, but it looks small to everyone else. Most of the room moves on in seconds. The story that lasts is the one you keep telling yourself about it later.",
          takeaway: "What's a wrong answer you gave a long time ago that you still remember? Do you think anyone else does?"
        },
        {
          id: "taking-the-blame-or-not",
          title: "Taking the Blame (or Not)",
          hook: "A shared project goes wrong. Part of it is really your fault, and part of it is your teammate's. The teacher asks what happened.",
          predictionPrompts: [
            "What's the difference between owning your part and owning all of it?",
            "How might your friendship with your teammate change, depending on what you say?"
          ],
          choices: [
            { id: "A", text: "Take the blame for everything to avoid conflict.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "This avoids a hard conversation now. But it gives a false picture of what happened, and the real problem never gets fixed." },
            { id: "B", text: "Name exactly your part, clearly, without minimizing it.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "This gives an honest, accurate account. It's the version most likely to actually fix what went wrong next time." },
            { id: "C", text: "Point out it was mostly the teammate's fault.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "This might be accurate. But pointing at your teammate's mistake before naming your own looks like you're dodging blame." },
            { id: "D", text: "Stay vague about who did what.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "This avoids saying anything clearly. Usually that means nothing gets fixed, and the same mistake happens again." },
            { id: "E", text: "Talk to your teammate privately first, then give a joint honest account.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This protects the friendship and the truth at the same time. It takes the most effort, and it pays off the most." }
          ],
          consequences: {
            A: "The teacher believes you. But your teammate never learns what they need to fix, so the same mistake shows up on the next project.",
            B: "The teacher appreciates how clear you are. It's easy for them to see exactly what you need to change.",
            C: "It's technically true. But your teammate feels betrayed, and your friendship takes a hit.",
            D: "The teacher can't tell what really happened. They end up treating you both the same, no matter who did what.",
            E: "Your account is honest and specific. Your teammate appreciates that you talked to them first, before saying anything to the teacher."
          },
          concept: "Accountability isn't taking all the blame, or none of it. It's being precise about the part that was actually yours.",
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
          hook: "Your supervisor gives you harsh but fair feedback on a project you were proud of. It hurts more than you expected.",
          predictionPrompts: [
            "Is this feedback really about your worth as a person, or just about this one piece of work?",
            "What would you do with this feedback if it didn't hurt at all?"
          ],
          choices: [
            { id: "A", text: "Get defensive and explain why the criticism is wrong.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This protects your ego in the moment. But it blocks the useful information the feedback actually contains." },
            { id: "B", text: "Say thank you, then process the sting privately before responding further.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This separates taking in the information from dealing with the feeling. Both can happen without one getting in the way of the other." },
            { id: "C", text: "Agree with everything immediately, even the parts you're not sure about.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This avoids conflict. But it skips the step of actually checking whether the feedback is fully right." },
            { id: "D", text: "Decide your supervisor just doesn't like you.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This turns useful, specific feedback into a story about whether you're liked. That switch makes the feedback impossible to actually use." },
            { id: "E", text: "Ask clarifying questions to understand exactly what to change.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "This turns the hurt into something useful. It's the fastest way to actually improve next time." }
          ],
          consequences: {
            A: "Your supervisor feels unheard. The same feedback will likely come up again on the next project.",
            B: "You come back a day later with real questions. Your supervisor notices how maturely you handled it.",
            C: "You make changes based on feedback you didn't fully understand. Some of them miss the actual point.",
            D: "You start doubting every interaction with your supervisor, even when there's no real reason to.",
            E: "You leave with a clear, specific list of what to change. The hurt fades once you have something useful to do with it."
          },
          concept: "Harsh feedback and your worth as a person are two different things, even when they arrive in the same sentence. The skill is telling them apart fast enough to actually use the feedback.",
          takeaway: "What's some feedback you once got that hurt at first, but turned out to be useful?"
        },
        {
          id: "when-it-really-was-your-fault",
          title: "When It Really Was Your Fault",
          hook: "A mistake you made costs your team a client. This time there's no question about it. It was genuinely your error.",
          predictionPrompts: [
            "What's the difference between owning your mistake and punishing yourself for it?",
            "What does the team actually need from you next?"
          ],
          choices: [
            { id: "A", text: "Offer to resign or step back from the team entirely.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "This is an extreme response to a mistake that's real but fixable. It removes you right when your knowledge of what went wrong is most useful." },
            { id: "B", text: "Own it clearly, and propose specific steps to prevent it happening again.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This takes full responsibility while staying useful. It's the kind of accountability that actually moves things forward." },
            { id: "C", text: "Spend the next weeks trying to overcompensate on everything.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This is an understandable instinct. But burning yourself out to prove your worth after one mistake usually just creates a second problem." },
            { id: "D", text: "Minimize it as 'these things happen' and move on quickly.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This undersells a mistake serious enough to lose a client. The team notices the gap between how serious it was and how you're treating it." },
            { id: "E", text: "Talk to a mentor about how to actually process and learn from this.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "This is genuinely useful for the long run. But on its own, it doesn't address what the team needs from you right now." }
          ],
          consequences: {
            A: "The team is left short-handed right when they need your knowledge of what happened the most.",
            B: "The team appreciates having a concrete plan. Trust rebuilds faster than it would have otherwise.",
            C: "You're exhausted within a month. The overcompensating starts affecting your other work too.",
            D: "The team feels like the loss wasn't taken seriously enough. Trust is slower to rebuild.",
            E: "You work through it well on your own. But the team still needs you to have a direct conversation with them separately."
          },
          concept: "A real mistake deserves real accountability, not a performance in either direction. Underplaying it and punishing yourself for it are both ways of avoiding the actual work of fixing it.",
          takeaway: "What does 'making it right' actually look like here, beyond just feeling bad?"
        },
        {
          id: "comparing-chapter-3-to-their-chapter-20",
          title: "Comparing Your Chapter 3 to Their Chapter 20",
          hook: "A former classmate, a few years older than you, just had big career success online. You're still early in your own career, and the comparison hurts more than you expected.",
          predictionPrompts: [
            "What are you really comparing? Two similar moments, or two completely different timelines?",
            "What would you tell a younger friend who felt this way about you someday?"
          ],
          choices: [
            { id: "A", text: "Assume you're just behind and probably always will be.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "This treats one moment in time as a final verdict on a much longer story that hasn't finished yet." },
            { id: "B", text: "Unfollow or mute to protect your headspace for now.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "This is a reasonable short-term boundary. But it doesn't deal with the urge to compare itself." },
            { id: "C", text: "Reach out to congratulate them genuinely, and ask what their path looked like.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 5 }, reason: "This turns a one-sided comparison into real information. Most 'overnight' success stories have years of unseen work behind them." },
            { id: "D", text: "Push yourself into a rushed, unplanned decision to 'catch up.'", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "This makes a real decision based on someone else's timeline, instead of your own actual situation." },
            { id: "E", text: "Remind yourself of your own progress over the last year, specifically.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 3 }, reason: "This shifts the comparison to something that actually matters: your own progress, instead of someone else's different path." }
          ],
          consequences: {
            A: "This assumption becomes a quiet weight that colors how you see your own work for months.",
            B: "You feel some relief. But the urge to compare is still there the next time it shows up somewhere else.",
            C: "They mention years of rejections and false starts you never saw. The story turns out to be far less 'overnight' than it looked.",
            D: "The rushed decision doesn't fit your actual situation. You end up further from where you wanted to be, not closer.",
            E: "It doesn't erase the hurt completely. But it gives you something true and specific to hold onto instead."
          },
          concept: "You're almost never comparing two equal moments. You're comparing your current chapter to someone else's highlight, years ahead, with everything in between edited out.",
          takeaway: "What would 'success' on your own timeline actually look like, the kind you'd be proud of no matter what anyone else is doing?"
        }
      ]
    }
  }
};
