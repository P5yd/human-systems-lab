// Module: Relationships & Responsibility
// New module added 2026-08-18. Framing note (per explicit user decision):
// decision-readiness and responsibility, not a predetermined "don't date"
// conclusion — matches every other module's approach to personal choices.
// Handles consent/pressure scenarios in general terms, never graphic,
// appropriate for a school platform. Same schema: dcera + reason per choice.

const MODULE_RELATIONSHIPS_RESPONSIBILITY = {
  id: "relationships-responsibility",
  title: "Relationships & Responsibility",
  coreIdea: "Wanting a relationship and being ready for what it actually asks of you are two different questions — and only one of them gets answered by dating.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · What Does \"Together\" Actually Mean?",
      scenarios: [
        {
          id: "everyones-getting-into-something",
          title: "Everyone's Getting Into Something",
          hook: "Half your friend group has started dating this term. Someone you're not sure you even like that way asks you out, mostly because \"it's what everyone's doing.\"",
          predictionPrompts: [
            "What are you actually being asked — to like this person, or to keep up?",
            "What happens a few weeks from now if you say yes for the wrong reason?"
          ],
          choices: [
            { id: "A", text: "Say yes, mostly to not be the only one left out.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 2 }, reason: "Answers a social pressure question instead of the actual one being asked — whether you want this." },
            { id: "B", text: "Say no, honestly, even though it might be awkward.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 3 }, reason: "Costs a little social comfort, but it's the one answer that's actually true." },
            { id: "C", text: "Say you need time to think about it.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Uses the one thing actually available to you — time — before committing to something you're unsure about." },
            { id: "D", text: "Ask them what they actually want from being \"together.\"", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Gets at the real question everyone skipped — what this would actually involve — before either of you says yes." },
            { id: "E", text: "Say yes but plan to keep it low-key and see how it feels.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Technically a yes, but 'keeping it low-key' mostly means avoiding the actual question of whether you want this." }
          ],
          consequences: {
            A: "You go along with it, but a few weeks in you realize you agreed to something you weren't sure you wanted, just to keep up.",
            B: "It's a little awkward for a day, but it's honest, and you're not carrying around a 'yes' you didn't mean.",
            C: "They respect the pause, and you use it to actually figure out what you want instead of deciding on the spot.",
            D: "The question genuinely surprises them — they hadn't thought that far either, and the conversation gets more real.",
            E: "It's technically a yes, but the 'keeping it low-key' mostly means avoiding the actual question of whether you want this."
          },
          concept: "Wanting to be part of what your friends are doing, and wanting a specific relationship, are two different feelings that get confused easily at this age. The first one wears off fast — the second one is the one actually worth checking for.",
          takeaway: "How would you tell the difference between the two, next time?"
        },
        {
          id: "the-constant-check-ins",
          title: "The Constant Check-Ins",
          hook: "Someone you're seeing wants to know where you are constantly, gets upset when you don't reply within minutes, and asks you to stop sitting with a particular friend.",
          predictionPrompts: [
            "Is this concern, or something else?",
            "What would you tell a friend describing this exact thing to you?"
          ],
          choices: [
            { id: "A", text: "Go along with it — it's easier, and it feels like they just care a lot.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Treats controlling behavior as caring, which usually means there's more of it coming, not less." },
            { id: "B", text: "Stop replying to them as much to create some space.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids confrontation, but doesn't actually test or address what's happening." },
            { id: "C", text: "Tell them directly this feels like too much control, not concern.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "Names the actual pattern directly, which is the only option that gives clear information either way." },
            { id: "D", text: "Ask a trusted adult or friend what they think about it.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 4 }, reason: "Brings in an outside perspective on something that's genuinely hard to see clearly from inside it." },
            { id: "E", text: "Break up immediately without explaining why.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "Ends the situation, but skips the chance to find out whether the behavior would have changed if named." }
          ],
          consequences: {
            A: "The requests keep growing — first it was one friend, now it's several, and your world quietly gets smaller.",
            B: "The distance makes things worse — you get more messages asking where you were, not fewer.",
            C: "They either recognize it and dial back, or they get defensive — either way, you find out something important fast.",
            D: "The adult names it clearly as controlling behavior, which makes it much easier to see what's actually happening.",
            E: "It ends the immediate issue, but you never get to test whether naming it directly might have changed anything."
          },
          concept: "'They just care a lot' and 'they're trying to control who I see' can look identical from the inside. The test isn't how it feels — it's whether your world gets bigger or smaller the longer it goes on.",
          takeaway: "What's a version of 'checking in' that feels like care instead of control, to you?"
        },
        {
          id: "the-homework-that-didnt-get-done",
          title: "The Homework That Didn't Get Done",
          hook: "You've been spending most evenings texting or video-calling someone you're seeing. Your grades have started slipping, and your parents have noticed.",
          predictionPrompts: [
            "What would 'balance' actually look like here, specifically?",
            "What happens if this keeps going unaddressed for another month?"
          ],
          choices: [
            { id: "A", text: "Keep going as is — it'll balance out eventually.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Avoids the actual decision, and the gap between the two priorities just keeps growing." },
            { id: "B", text: "Cut off contact with them almost entirely to fix your grades.", dcera: { D: 3, C: 3, E: 1, R: 3, A: 2 }, reason: "Fixes the grades but treats the relationship as disposable rather than something to actually manage." },
            { id: "C", text: "Set specific times for talking, separate from homework time.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Tests whether both things can coexist with real structure, instead of assuming they can't." },
            { id: "D", text: "Tell your parents everything is fine and hope they stop noticing.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Buys a little time, but the mismatch between what you said and what's true tends to surface anyway." },
            { id: "E", text: "Talk to your parents honestly about what's going on.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "Costs an uncomfortable conversation, but brings in people who can actually help you figure out the balance." }
          ],
          consequences: {
            A: "The slide continues, and by the time you decide to act, there's more to catch up on than there would have been.",
            B: "Grades recover, but the sudden cutoff feels harsh and unexplained to the other person.",
            C: "Both things get some space — it's not perfect, but grades stabilize and the relationship doesn't just vanish either.",
            D: "Your parents notice the gap between what you said and what's actually happening, and trust takes a hit.",
            E: "It's an uncomfortable conversation, but your parents help you think through it instead of just reacting to a grade report."
          },
          concept: "The problem was never that a relationship and schoolwork can't coexist — it's that neither one gets structure without you deciding to give it some.",
          takeaway: "What would 'set times' actually look like for you, specifically?"
        },
        {
          id: "just-this-once",
          title: "Just This Once",
          hook: "Someone you're seeing asks you to send a photo you're not fully comfortable with, saying it's normal and \"everyone does it.\"",
          predictionPrompts: [
            "Is 'everyone does it' actually true, or does it just feel true?",
            "What would you want to have done, looking back on this a year from now?"
          ],
          choices: [
            { id: "A", text: "Send it to avoid an awkward moment.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Trades a real discomfort now for a real risk later, just to skip an awkward thirty seconds." },
            { id: "B", text: "Say no clearly, without over-explaining.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "A clear no, without justifying it, is the option that actually protects you — and it's more respected than it feels like it will be." },
            { id: "C", text: "Ask why it matters to them so much.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Turns 'everyone does it' into something specific and checkable, instead of accepting it as a given." },
            { id: "D", text: "Change the subject and hope they drop it.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids the moment without resolving it, which usually means it returns." },
            { id: "E", text: "Send a joke instead of an actual answer.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 3 }, reason: "Deflects without deciding — the question doesn't go away just because it wasn't answered directly." },
            { id: "F", text: "Tell a parent, teacher, or counselor about the pressure you're getting.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Pressure like this can escalate, and it's exactly the kind of thing a trusted adult can help you handle — not something to manage alone." }
          ],
          consequences: {
            A: "It's sent, and now something you weren't comfortable with exists somewhere outside your control — not because of a decision you actually agreed with, just to avoid a moment. Beyond how it feels, images like this carry real risks once they're out of your hands, for both people involved.",
            B: "There's a beat of awkwardness, and then it's over — a clear no is easier to respect than an unclear one.",
            C: "The answer reveals whether this is really about you, or about pressure they're passing along from somewhere else.",
            D: "The subject comes back up again later, since it was never actually addressed.",
            E: "It buys a moment, but the actual question is still sitting there unanswered.",
            F: "The adult takes it seriously, helps you figure out what to say and do next, and you're not carrying the pressure by yourself anymore."
          },
          concept: "'Everyone does it' is almost never actually true, and it's not a reason on its own. This also isn't only about one awkward moment — images like this can have real consequences once they exist outside your control, which is exactly why a clear no matters more than it might feel like it does right now.",
          takeaway: "What's a clear, simple way you could say no to something like this, that you'd actually feel comfortable using — and who's someone you could tell if the pressure kept going?"
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
            "What does the feeling actually need right now, before you ask your focus to do something else?",
            "What's the difference between processing this and dwelling on it?"
          ],
          choices: [
            { id: "A", text: "Throw yourself completely into studying to avoid feeling anything.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Suppressing the feeling doesn't remove it — it just moves it somewhere less visible, including into your exam performance." },
            { id: "B", text: "Take a day to actually process it, then get back to prepping.", dcera: { D: 5, C: 5, E: 3, R: 4, A: 5 }, reason: "Gives the feeling somewhere to go before asking your focus to do something else entirely." },
            { id: "C", text: "Reach out to your ex repeatedly, hoping to fix things before the exam.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Spends energy trying to reverse something instead of processing that it happened." },
            { id: "D", text: "Tell friends you're 'totally fine' while barely holding it together.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "The performance of being fine costs real energy and blocks anyone from actually helping." },
            { id: "E", text: "Talk to someone you trust about how you're actually doing.", dcera: { D: 4, C: 4, E: 3, R: 3, A: 4 }, reason: "Doesn't undo the breakup, but takes some of the weight off before the exam, which is the actually solvable part right now." }
          ],
          consequences: {
            A: "You get through some material, but you're distracted and retaining less than it looks like on the surface.",
            B: "You lose a day of prep time, but you go into the exam actually able to focus, instead of carrying it in unprocessed.",
            C: "The repeated outreach doesn't change the outcome, and now you're anxious about both the breakup and the exam.",
            D: "The performance costs energy you needed elsewhere, and nobody around you realizes you could use support.",
            E: "It doesn't fix the breakup, but naming it out loud takes some of the weight off before you have to focus on anything else."
          },
          concept: "A breakup doesn't pause just because you have somewhere else to be. The skill isn't ignoring it — it's giving it real space so it doesn't quietly take up the space meant for something else.",
          takeaway: "What's your usual way of dealing with a big feeling right before you need to perform at something? Does it actually work?"
        },
        {
          id: "the-version-of-you-they-wanted",
          title: "The Version of You They Wanted",
          hook: "Over months, someone you're with has slowly started commenting on your friends, your clothes, and your plans — always framed as \"just an opinion,\" but you've noticed you do less of what you used to.",
          predictionPrompts: [
            "What's the difference between an opinion and a pattern?",
            "What would this look like from outside, to someone who cared about you?"
          ],
          choices: [
            { id: "A", text: "Keep adjusting — it's easier than the conversation it would take not to.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Each adjustment feels small on its own — the pattern is only visible from far enough outside it, which is exactly what's hard here." },
            { id: "B", text: "Bring specific examples to them directly and see how they respond.", dcera: { D: 5, C: 4, E: 3, R: 4, A: 4 }, reason: "Puts specific evidence in front of the actual person, instead of guessing at what they'd say." },
            { id: "C", text: "Quietly start doing the things you'd stopped doing again, without discussing it.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 4 }, reason: "A real test, though a quieter one — it reveals the relationship's actual flexibility without a confrontation." },
            { id: "D", text: "Ask a friend who's known you a long time if they've noticed a change.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 4 }, reason: "Someone who's known you longer than this relationship has real, useful perspective on what's actually changed." },
            { id: "E", text: "End it without any conversation about why.", dcera: { D: 4, C: 3, E: 2, R: 5, A: 3 }, reason: "Ends a pattern that was already costing you real parts of your life — you don't need to fully diagnose an isolating dynamic before deciding you're done with it." },
            { id: "F", text: "Talk to a school counselor or trusted adult about what's been happening.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "A pattern like this is genuinely hard to see clearly from inside it — someone trained to spot it can help you name what's actually going on." }
          ],
          consequences: {
            A: "The adjustments keep compounding, and a year from now, a lot less of your life looks like it used to.",
            B: "Their response tells you a lot — either real reflection, or more reasons why your friends, clothes, or plans were the problem.",
            C: "It creates friction, but it also tests whether the relationship can hold you doing your own things again.",
            D: "The friend confirms what you'd started to suspect, and it's easier to trust once someone else has seen it too.",
            E: "It's over. You don't get a direct answer for why it was happening, but you also don't owe anyone a full investigation before choosing to leave.",
            F: "They help you see the pattern clearly, and having an adult's perspective makes it much easier to decide what to do next, whatever that turns out to be."
          },
          concept: "Isolation rarely arrives as one big moment — it arrives as a hundred small 'just an opinion' comments that are each too small to be worth a fight, until the total adds up to something a fight was actually warranted for.",
          takeaway: "Who in your life would notice first, if this started happening to you?"
        },
        {
          id: "the-line-you-didnt-draw",
          title: "The Line You Didn't Draw",
          hook: "You've told your partner you're not ready for something physical they want to move faster on. They keep bringing it up, framing it as \"if you really cared, you would.\"",
          predictionPrompts: [
            "Is 'if you really cared, you would' actually an argument, or a pressure tactic?",
            "What makes a boundary easy or hard to hold, in the moment?"
          ],
          choices: [
            { id: "A", text: "Give in to stop the conversation from coming up again.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "'If you really cared, you would' is a pressure tactic, not an argument — giving in confirms the tactic works." },
            { id: "B", text: "Repeat your boundary clearly, without new justification each time.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Consistency is what makes a boundary real — but it's one good response among several here, not the only one, and it doesn't have to be the last one you try." },
            { id: "C", text: "Ask them directly why 'if you really cared' feels like the right argument to them.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Names the tactic itself instead of just the disagreement, which often reveals more than debating the actual issue." },
            { id: "D", text: "End the relationship over this pattern.", dcera: { D: 5, C: 4, E: 3, R: 5, A: 3 }, reason: "A clear, protective response to pressure that keeps returning — leaving isn't a failure to communicate well enough; it's a legitimate answer to a boundary that isn't being respected." },
            { id: "E", text: "Avoid being alone with them to sidestep the conversation.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Delays the conversation without resolving it — the same pressure is likely to resurface." },
            { id: "F", text: "Talk to a school counselor or trusted adult about the pressure you're getting.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Persistent pressure like this is exactly what a trusted adult can help you think through — you don't have to carry it, or decide what to do about it, alone." }
          ],
          consequences: {
            A: "The boundary moves, but not because you actually changed your mind — and the same pressure tactic likely works again next time.",
            B: "It takes repeating more than once, and it works for now — though the same pressure may well return again another way.",
            C: "The question puts the tactic itself under a light, which is often more revealing than arguing about the boundary directly.",
            D: "It's a clear, complete answer to a pattern that kept returning no matter how it was addressed — you don't owe anyone a repeated negotiation over a boundary you already stated.",
            E: "The avoidance buys short-term relief, but the actual conversation is still unresolved and waiting.",
            F: "They take it seriously, help you think through what's happening, and remind you that a clear no doesn't need to be defended alone."
          },
          concept: "\"If you really cared, you would\" is designed to make caring and doing the same thing — they aren't. A boundary that someone keeps pushing against, again and again, isn't a communication problem for you to solve on your own — it's information about the relationship itself.",
          takeaway: "What's a boundary you've held clearly before, and what made it easier to hold that time?"
        },
        {
          id: "two-full-time-things",
          title: "Two Full-Time Things",
          hook: "You're in a serious relationship heading into a demanding exam year. Your partner wants more time together; you both know this year matters for what comes after.",
          predictionPrompts: [
            "Is there actually a hidden 'right amount' of time here, or is this a planning problem?",
            "What happens to both things if neither of you names what you actually need?"
          ],
          choices: [
            { id: "A", text: "Scale back the relationship significantly until exams are over.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "Protects the exam year, though a one-sided scale-back without discussion leaves your partner guessing at the reason." },
            { id: "B", text: "Keep things exactly as they are and hope it works out.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Avoids the actual decision, and both priorities quietly lose out to the lack of a plan." },
            { id: "C", text: "Have an honest conversation about what both of you actually need this year.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "The only option that treats both things as real, and both of you as having a say in the plan." },
            { id: "D", text: "Let your partner decide how much time you spend together.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Hands over a decision that's genuinely yours to make, based on your own year, not someone else's read of it." },
            { id: "E", text: "End the relationship now to remove the variable entirely.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "A decisive answer to a real tension, at the cost of ever testing whether a plan could have worked for both." }
          ],
          consequences: {
            A: "The relationship survives on less, though your partner feels the change without always understanding why.",
            B: "Neither the studying nor the relationship gets what it needs, and both start to show strain.",
            C: "It takes an uncomfortable conversation, but you both leave with an actual plan instead of two unspoken expectations.",
            D: "The relationship gets prioritized, but by someone else's judgment of what you need, not your own.",
            E: "It's a clean, complete answer, though it forecloses whether a real conversation might have found a workable version of both."
          },
          concept: "This isn't a question with a hidden right amount of time — it's a question of whether the two of you can actually agree on a plan, out loud, instead of each guessing at what the other expects.",
          takeaway: "What would a plan that actually worked for both of you look like, specifically?"
        }
      ]
    }
  }
};
