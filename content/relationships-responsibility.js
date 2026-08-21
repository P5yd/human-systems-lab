// Module: Relationships & Responsibility
// New module added 2026-08-18. Framing note (per explicit user decision):
// decision-readiness and responsibility, not a predetermined "don't date"
// conclusion — matches every other module's approach to personal choices.
// Handles consent/pressure scenarios in general terms, never graphic,
// appropriate for a school platform. Same schema: dcera + reason per choice.

const MODULE_RELATIONSHIPS_RESPONSIBILITY = {
  id: "relationships-responsibility",
  title: "Relationships & Responsibility",
  coreIdea: "Wanting a relationship and being ready for what it actually asks of you are two different questions. Only one of them gets answered by dating.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · What Does \"Together\" Actually Mean?",
      scenarios: [
        {
          id: "everyones-getting-into-something",
          title: "Everyone's Getting Into Something",
          hook: "A lot of your friends have started dating this term. Someone asks you out. You're not sure you even like them that way, but it feels like everyone else is doing it.",
          predictionPrompts: [
            "What are you really being asked? To like this person, or just to keep up with everyone else?",
            "What happens a few weeks later if you say yes for the wrong reason?"
          ],
          choices: [
            { id: "A", text: "Say yes, mostly so you're not the only one left out.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 2 }, reason: "This answers the social pressure, not the real question: do you actually want this?" },
            { id: "B", text: "Say no, honestly, even if it feels awkward.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 3 }, reason: "It costs a little comfort, but it's the one answer that's actually true." },
            { id: "C", text: "Say you need time to think about it.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Time is the one thing you actually have here. Use it before you commit to something you're not sure about." },
            { id: "D", text: "Ask them what \"together\" would actually mean to them.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This gets at the real question everyone skipped: what would this actually involve? Ask it before either of you says yes." },
            { id: "E", text: "Say yes, but keep it low-key and see how it feels.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "It's technically a yes, but 'keeping it low-key' is really just a way to avoid the real question: do you want this?" }
          ],
          consequences: {
            A: "You go along with it. A few weeks in, you realize you agreed to something you weren't sure you wanted, just to keep up.",
            B: "It's a little awkward for a day. But it's honest, and you're not carrying around a 'yes' you didn't mean.",
            C: "They respect the pause, and you use it to actually figure out what you want instead of deciding on the spot.",
            D: "The question genuinely surprises them. They hadn't thought that far either, and the conversation gets more real.",
            E: "It's technically a yes, but 'keeping it low-key' mostly means avoiding the real question: do you want this?"
          },
          concept: "Wanting to fit in with your friends and wanting a specific relationship are two different feelings. At this age, it's easy to mix them up. The first feeling fades fast. The second one is the one actually worth checking for.",
          takeaway: "Next time, how would you tell the difference between the two?"
        },
        {
          id: "the-constant-check-ins",
          title: "The Constant Check-Ins",
          hook: "Someone you're seeing always wants to know where you are. They get upset if you don't reply within minutes, and they've asked you to stop sitting with one of your friends.",
          predictionPrompts: [
            "Is this concern, or is it something else?",
            "What would you tell a friend if they described this exact thing happening to them?"
          ],
          choices: [
            { id: "A", text: "Go along with it. It's easier, and it feels like they just care a lot.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This treats controlling behavior like caring. Usually that means more control is coming, not less." },
            { id: "B", text: "Stop replying to them as much to create some space.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids confrontation, but doesn't actually test or address what's happening." },
            { id: "C", text: "Tell them directly this feels like too much control, not concern.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "This names the pattern directly. It's the only option that actually tells you something, either way." },
            { id: "D", text: "Ask a trusted adult or friend what they think about it.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 4 }, reason: "This brings in an outside view on something that's genuinely hard to see clearly when you're inside it." },
            { id: "E", text: "Break up immediately without explaining why.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "This ends the situation, but you don't get to find out if naming the behavior would have changed it." }
          ],
          consequences: {
            A: "The requests keep growing. First it was one friend, now it's several, and your world quietly gets smaller.",
            B: "The distance makes things worse. You get more messages asking where you were, not fewer.",
            C: "They either recognize it and dial back, or they get defensive. Either way, you find out something important fast.",
            D: "The adult names it clearly as controlling behavior, which makes it much easier to see what's actually happening.",
            E: "It ends the immediate issue, but you never get to test whether naming it directly might have changed anything."
          },
          concept: "'They just care a lot' and 'they're trying to control who I see' can look exactly the same from the inside. The real test isn't how it feels. It's whether your world gets bigger or smaller the longer it goes on.",
          takeaway: "To you, what would 'checking in' look like if it felt like care instead of control?"
        },
        {
          id: "the-homework-that-didnt-get-done",
          title: "The Homework That Didn't Get Done",
          hook: "You've been spending most evenings texting or video-calling someone you're seeing. Your grades are slipping, and your parents have noticed.",
          predictionPrompts: [
            "What would 'balance' actually look like here, specifically?",
            "What happens if you don't deal with this for another month?"
          ],
          choices: [
            { id: "A", text: "Keep going as is. It'll balance out eventually.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This avoids the real decision. The gap between the two priorities just keeps growing." },
            { id: "B", text: "Cut off contact with them almost entirely to fix your grades.", dcera: { D: 3, C: 3, E: 1, R: 3, A: 2 }, reason: "This fixes the grades, but it treats the relationship as something to throw away, not something to actually manage." },
            { id: "C", text: "Set specific times for talking, separate from homework time.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Tests whether both things can coexist with real structure, instead of assuming they can't." },
            { id: "D", text: "Tell your parents everything is fine and hope they stop noticing.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This buys a little time, but the gap between what you said and what's true usually comes out anyway." },
            { id: "E", text: "Talk to your parents honestly about what's going on.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "Costs an uncomfortable conversation, but brings in people who can actually help you figure out the balance." }
          ],
          consequences: {
            A: "The slide continues, and by the time you decide to act, there's more to catch up on than there would have been.",
            B: "Grades recover, but the sudden cutoff feels harsh and unexplained to the other person.",
            C: "Both things get some space. It's not perfect, but grades stabilize and the relationship doesn't just disappear.",
            D: "Your parents notice the gap between what you said and what's actually happening, and trust takes a hit.",
            E: "It's an uncomfortable conversation, but your parents help you think through it instead of just reacting to a grade report."
          },
          concept: "The problem was never that a relationship and schoolwork can't mix. It's that neither one gets structure unless you decide to give it some.",
          takeaway: "What would 'set times' actually look like for you, specifically?"
        },
        {
          id: "just-this-once",
          title: "Just This Once",
          hook: "Someone you're seeing asks you to send a photo that you're not fully comfortable with. They say it's normal, that \"everyone does it.\"",
          predictionPrompts: [
            "Is 'everyone does it' actually true, or does it just feel true?",
            "A year from now, looking back, what would you want to have done?"
          ],
          choices: [
            { id: "A", text: "Send it to avoid an awkward moment.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Trades a real discomfort now for a real risk later, just to skip an awkward thirty seconds." },
            { id: "B", text: "Say no clearly, without over-explaining.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "A clear no, without over-explaining it, is what actually protects you here. It's also more respected than it feels like it will be." },
            { id: "C", text: "Ask why it matters to them so much.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Turns 'everyone does it' into something specific and checkable, instead of accepting it as a given." },
            { id: "D", text: "Change the subject and hope they drop it.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids the moment without resolving it, which usually means it returns." },
            { id: "E", text: "Send a joke instead of an actual answer.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 3 }, reason: "This deflects without deciding. The question doesn't go away just because you didn't answer it directly." },
            { id: "F", text: "Tell a parent, teacher, or counselor about the pressure you're getting.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Pressure like this can escalate. This is exactly the kind of thing a trusted adult can help you handle. You don't have to manage it alone." }
          ],
          consequences: {
            A: "It's sent. Now something you weren't comfortable with exists outside your control, not because you actually agreed with it, but just to avoid an awkward moment. Beyond how it feels, images like this carry real risks once they're out of your hands, for both people involved.",
            B: "There's a beat of awkwardness, and then it's over. A clear no is easier to respect than an unclear one.",
            C: "The answer reveals whether this is really about you, or about pressure they're passing along from somewhere else.",
            D: "The subject comes back up again later, since it was never actually addressed.",
            E: "It buys a moment, but the actual question is still sitting there unanswered.",
            F: "The adult takes it seriously, helps you figure out what to say and do next, and you're not carrying the pressure by yourself anymore."
          },
          concept: "'Everyone does it' is almost never actually true, and it's not a reason on its own. This also isn't just about one awkward moment. Images like this can have real consequences once they exist outside your control. That's exactly why a clear no matters more than it might feel like right now.",
          takeaway: "What's a clear, simple way to say no to something like this, one you'd actually feel comfortable using? And who could you tell if the pressure kept going?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Real Relationships, Real Trade-offs",
      scenarios: [
        {
          id: "when-it-ends",
          title: "When It Ends",
          hook: "A relationship you were serious about just ended, and you have a major exam in three days.",
          predictionPrompts: [
            "What does this feeling actually need right now, before you ask yourself to focus on something else?",
            "What's the difference between processing this and dwelling on it?"
          ],
          choices: [
            { id: "A", text: "Throw yourself completely into studying to avoid feeling anything.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Suppressing the feeling doesn't make it go away. It just moves it somewhere less visible, including into your exam performance." },
            { id: "B", text: "Take a day to actually process it, then get back to prepping.", dcera: { D: 5, C: 5, E: 3, R: 4, A: 5 }, reason: "This gives the feeling somewhere to go, before you ask yourself to focus on something else entirely." },
            { id: "C", text: "Reach out to your ex repeatedly, hoping to fix things before the exam.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Spends energy trying to reverse something instead of processing that it happened." },
            { id: "D", text: "Tell friends you're 'totally fine' while barely holding it together.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Pretending to be fine takes real energy, and it stops anyone from actually helping you." },
            { id: "E", text: "Talk to someone you trust about how you're actually doing.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "This doesn't undo the breakup, but it takes some of the weight off before the exam. That's the part you can actually do something about right now." }
          ],
          consequences: {
            A: "You get through some material, but you're distracted and retaining less than it looks like on the surface.",
            B: "You lose a day of prep time, but you go into the exam actually able to focus, instead of carrying it in unprocessed.",
            C: "The repeated outreach doesn't change the outcome, and now you're anxious about both the breakup and the exam.",
            D: "Pretending costs energy you needed elsewhere, and nobody around you realizes you could use some support.",
            E: "It doesn't fix the breakup, but naming it out loud takes some of the weight off before you have to focus on anything else."
          },
          concept: "A breakup doesn't pause just because you have somewhere else to be. The skill isn't ignoring it. It's giving it real space, so it doesn't quietly take over the space meant for something else.",
          takeaway: "What's your usual way of dealing with a big feeling right before you need to perform? Does it actually work?"
        },
        {
          id: "the-version-of-you-they-wanted",
          title: "The Version of You They Wanted",
          hook: "Over the past few months, someone you're with has slowly started commenting on your friends, your clothes, and your plans. They always frame it as \"just an opinion.\" But you've noticed you do less of what you used to.",
          predictionPrompts: [
            "What's the difference between an opinion and a pattern?",
            "What would this look like from outside, to someone who cared about you?"
          ],
          choices: [
            { id: "A", text: "Keep adjusting. It's easier than having the conversation it would take not to.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Each adjustment feels small on its own. You can only see the pattern from far enough outside it, and that's exactly what's hard here." },
            { id: "B", text: "Bring specific examples to them directly and see how they respond.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Puts specific evidence in front of the actual person, instead of guessing at what they'd say." },
            { id: "C", text: "Quietly start doing the things you'd stopped doing again, without discussing it.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 4 }, reason: "A real test, though a quieter one. It shows you how flexible the relationship actually is, without a confrontation." },
            { id: "D", text: "Ask a friend who's known you a long time if they've noticed a change.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 4 }, reason: "Someone who's known you longer than this relationship has real, useful perspective on what's actually changed." },
            { id: "E", text: "End it without any conversation about why.", dcera: { D: 4, C: 3, E: 2, R: 5, A: 3 }, reason: "This ends a pattern that was already costing you real parts of your life. You don't need to fully figure out an isolating dynamic before deciding you're done with it." },
            { id: "F", text: "Talk to a school counselor or trusted adult about what's been happening.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "A pattern like this is genuinely hard to see clearly from inside it. Someone trained to spot it can help you name what's actually going on." }
          ],
          consequences: {
            A: "The adjustments keep compounding, and a year from now, a lot less of your life looks like it used to.",
            B: "Their response tells you a lot. Either they actually reflect on it, or they give you more reasons why your friends, clothes, or plans were the problem.",
            C: "It creates friction, but it also tests whether the relationship can hold you doing your own things again.",
            D: "The friend confirms what you'd started to suspect, and it's easier to trust once someone else has seen it too.",
            E: "It's over. You don't get a direct answer for why it was happening, but you also don't owe anyone a full investigation before choosing to leave.",
            F: "They help you see the pattern clearly, and having an adult's perspective makes it much easier to decide what to do next, whatever that turns out to be."
          },
          concept: "Isolation rarely arrives as one big moment. It arrives as a hundred small 'just an opinion' comments, each one too small on its own to be worth a fight, until the total adds up to something worth fighting for.",
          takeaway: "Who in your life would notice first, if this started happening to you?"
        },
        {
          id: "the-line-you-didnt-draw",
          title: "The Line You Didn't Draw",
          hook: "You've told your partner you're not ready to move faster physically. They keep bringing it up, saying \"if you really cared, you would.\"",
          predictionPrompts: [
            "Is 'if you really cared, you would' actually an argument, or a pressure tactic?",
            "What makes a boundary easy or hard to hold, in the moment?"
          ],
          choices: [
            { id: "A", text: "Give in to stop the conversation from coming up again.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "'If you really cared, you would' is a pressure tactic, not a real argument. Giving in just confirms the tactic works." },
            { id: "B", text: "Repeat your boundary clearly, without new justification each time.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Staying consistent is what makes a boundary real. But this is just one good option among several here, not the only one, and it doesn't have to be the last thing you try." },
            { id: "C", text: "Ask them directly why 'if you really cared' feels like the right argument to them.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "This names the tactic itself, not just the disagreement. That often reveals more than arguing about the actual issue would." },
            { id: "D", text: "End the relationship over this pattern.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 3 }, reason: "This is a clear, protective response to pressure that keeps coming back. Leaving isn't a failure to communicate well enough. It's a legitimate answer when a boundary isn't being respected." },
            { id: "E", text: "Avoid being alone with them to sidestep the conversation.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This delays the conversation without resolving it. The same pressure is likely to come back." },
            { id: "F", text: "Talk to a school counselor or trusted adult about the pressure you're getting.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Persistent pressure like this is exactly what a trusted adult can help you think through. You don't have to carry it, or decide what to do about it, alone." }
          ],
          consequences: {
            A: "The boundary moves, but not because you actually changed your mind. The same pressure tactic will likely work again next time.",
            B: "It takes repeating more than once, and it works for now. But the same pressure may well come back again, in another form.",
            C: "The question puts the tactic itself in the open, which often reveals more than arguing about the boundary directly.",
            D: "It's a clear, complete answer to a pattern that kept coming back no matter how it was addressed. You don't owe anyone a repeated negotiation over a boundary you already stated.",
            E: "The avoidance buys short-term relief, but the actual conversation is still unresolved and waiting.",
            F: "They take it seriously, help you think through what's happening, and remind you that a clear no doesn't need to be defended alone."
          },
          concept: "\"If you really cared, you would\" is designed to make caring and doing the same thing. They aren't the same thing. When someone keeps pushing against a boundary, again and again, that isn't a communication problem for you to fix alone. It's information about the relationship itself.",
          takeaway: "What's a boundary you've held clearly before, and what made it easier to hold that time?"
        },
        {
          id: "two-full-time-things",
          title: "Two Full-Time Things",
          hook: "You're in a serious relationship heading into a demanding exam year. Your partner wants more time together, and you both know this year matters for what comes after.",
          predictionPrompts: [
            "Is there actually a hidden 'right amount' of time here, or is this a planning problem?",
            "What happens to both things if neither of you names what you actually need?"
          ],
          choices: [
            { id: "A", text: "Scale back the relationship significantly until exams are over.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "This protects the exam year, but a one-sided change without discussion leaves your partner guessing why." },
            { id: "B", text: "Keep things exactly as they are and hope it works out.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Avoids the actual decision, and both priorities quietly lose out to the lack of a plan." },
            { id: "C", text: "Have an honest conversation about what both of you actually need this year.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "The only option that treats both things as real, and both of you as having a say in the plan." },
            { id: "D", text: "Let your partner decide how much time you spend together.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Hands over a decision that's genuinely yours to make, based on your own year, not someone else's read of it." },
            { id: "E", text: "End the relationship now to remove the variable entirely.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "This is a decisive answer to a real tension, but it costs you ever finding out if a plan could have worked for both of you." }
          ],
          consequences: {
            A: "The relationship survives on less, though your partner feels the change without always understanding why.",
            B: "Neither the studying nor the relationship gets what it needs, and both start to show strain.",
            C: "It takes an uncomfortable conversation, but you both leave with an actual plan instead of two unspoken expectations.",
            D: "The relationship gets prioritized, but by someone else's judgment of what you need, not your own.",
            E: "It's a clean, complete answer, but it closes the door on whether a real conversation might have found a way to make both work."
          },
          concept: "This isn't a question with a hidden right amount of time. It's a question of whether the two of you can actually agree on a plan, out loud, instead of each guessing at what the other expects.",
          takeaway: "What would a plan that actually worked for both of you look like, specifically?"
        }
      ]
    }
  }
};
