// Module: Decision-Making & Consequences
// Content authored from the user's curriculum design (2026-08-17). Choices
// were explicit for Scenario 1 only in the original design — Scenarios 2-3
// (both levels) had their choices authored to fit the given premise.
// Each choice carries a `dcera` score (Decision quality, Consequence
// awareness, Empathy, Risk assessment, Adaptability, 1-5 each) and a `reason`
// — added 2026-08-18 to support automatic scoring, revealed to teams after
// all teams have answered a scenario.

const MODULE_DECISION_MAKING = {
  id: "decision-making",
  title: "Decision-Making & Consequences",
  coreIdea: "Every decision closes some doors and opens others.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Decisions Around Me",
      scenarios: [
        {
          id: "everyone-is-doing-it",
          title: "Everyone Is Doing It",
          hook: "A friend group wants to sneak out of school during lunch.",
          predictionPrompts: [
            "What happens in 10 minutes?",
            "What happens tomorrow?",
            "What happens if someone gets injured?",
            "What happens to the friendship?",
            "What happens if parents find out?",
            "What happens if nobody finds out?"
          ],
          choices: [
            { id: "A", text: "Go with them.", dcera: { D: 2, C: 2, E: 3, R: 1, A: 2 }, reason: "You followed the group without a real plan for what happens if you get caught. The risk wasn't worth what you gained." },
            { id: "B", text: "Refuse.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "This keeps you safe from the real risk, even though it costs you some social comfort for a little while." },
            { id: "C", text: "Tell a teacher.", dcera: { D: 3, C: 3, E: 2, R: 5, A: 2 }, reason: "This stops the risk completely, but skips talking to the group directly first. It costs some trust for a safer outcome." },
            { id: "D", text: "Go but return before anyone notices.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 2 }, reason: "This works this time, but that's luck, not good judgment. It also makes the next risky choice easier to say yes to." },
            { id: "E", text: "Suggest something else.", dcera: { D: 4, C: 4, E: 4, R: 4, A: 5 }, reason: "You offer another idea instead of just reacting. It's the most flexible choice here, even though you can't control what others do." }
          ],
          consequences: {
            A: "You sneak out with the group and make it back before the bell rings. But a hall monitor notices five missing faces at the cafeteria count and tells your homeroom teacher. Nothing happens today, but your name is now on a list.",
            B: "You stay behind. The group teases you for a day, then forgets about it. Two of them get caught by a teacher on the way back and get a warning.",
            C: "The teacher steps in before anyone leaves. The group is annoyed with you for about a week. No one gets in trouble, but no one asks you to come along next time either.",
            D: "You make it back in time. This time. Now the group knows this works, so the next 'let's sneak out' becomes a much easier yes.",
            E: "You suggest staying and doing something else instead. Half the group stays with you. The rest leave without you, and they get caught."
          },
          concept: "This is peer pressure wearing a mask of loyalty. The real skill isn't picking the 'right' letter. It's the habit you just practiced: thinking about what happens in 10 minutes and what happens tomorrow, and noticing which one you were actually weighing.",
          takeaway: "What would you do differently if this exact situation came up again next week?"
        },
        {
          id: "the-screenshot",
          title: "The Screenshot",
          hook: "A friend sends you a private screenshot of another student's embarrassing conversation. The group wants to forward it.",
          predictionPrompts: [
            "What happens if it spreads?",
            "What happens if the person in it finds out who forwarded it?",
            "What happens if a parent or teacher sees it?",
            "What happens to your friendship with the group either way?"
          ],
          choices: [
            { id: "A", text: "Forward it to the group chat like everyone else.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This directly causes the harm this scenario is about. It's the choice with the least awareness of what could happen." },
            { id: "B", text: "Don't forward it, but don't say anything either.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "You avoid causing harm yourself, but you do nothing to stop it either. Staying quiet still has a cost." },
            { id: "C", text: "Tell the group to stop and delete it.", dcera: { D: 4, C: 3, E: 4, R: 3, A: 4 }, reason: "You take a real stand with the group, even though you can't fully undo what's already spreading." },
            { id: "D", text: "Message the person in the screenshot to warn them.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 4 }, reason: "This puts the person who's actually affected first, and gives them the earliest possible chance to respond." },
            { id: "E", text: "Tell a teacher or counselor about it.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 3 }, reason: "This is the most effective way to stop the harm, even though it costs the group's trust for a while." }
          ],
          consequences: {
            A: "You forward it. Within an hour it spreads to three other group chats, and someone adds a cruel caption. The person in it finds out you were one of the people who sent it on. Not the first, but not the last either.",
            B: "You stay silent and don't forward it, but you don't stop it either. It spreads anyway. Later, the group assumes you were 'in on it' because you never said anything.",
            C: "You ask the group to stop. Two people listen, but one had already forwarded it before you spoke up. It still spreads, but slower, and the group remembers you tried.",
            D: "You warn the person in the screenshot directly. They're upset but grateful for the warning, and manage to get ahead of it before it spreads much further.",
            E: "You tell a teacher. The school steps in fast and the spread stops within the day. Word gets around that you 'told,' and it takes a few weeks to rebuild some trust with the group."
          },
          concept: "The real decision wasn't the moment you forwarded it. It was the ten seconds right after you first saw it. Staying silent, waiting, and acting all count as decisions, even the ones that don't feel like a choice.",
          takeaway: "Which of these consequences surprised you most, and why?"
        },
        {
          id: "study-or-help",
          title: "Study or Help?",
          hook: "You have an exam tomorrow. Your closest friend is having a serious personal problem and wants to talk.",
          predictionPrompts: [
            "What happens to your exam either way?",
            "What happens to your friend either way?",
            "What does your friend actually need right now?",
            "What do you need right now?"
          ],
          choices: [
            { id: "A", text: "Tell your friend you can't talk right now, you need to study.", dcera: { D: 2, C: 2, E: 1, R: 4, A: 2 }, reason: "This protects your exam outcome completely, but leaves your friend without support at a hard moment." },
            { id: "B", text: "Make time for a short conversation, then go back to studying.", dcera: { D: 4, C: 4, E: 4, R: 4, A: 5 }, reason: "This balances both needs directly instead of treating them like you can only pick one." },
            { id: "C", text: "Set the exam aside and be there for your friend.", dcera: { D: 4, C: 3, E: 5, R: 2, A: 3 }, reason: "This puts the relationship first. It's the right call if your friend's need is serious enough." },
            { id: "D", text: "Suggest they talk to a counselor, and offer to sit with them while they do.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "This gets your friend real support without making yourself their only resource. It works better for both of you." },
            { id: "E", text: "Try to do both at once, half-focus on studying while texting back.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "This splits your attention so thin that neither the exam nor the friendship gets what it actually needed." }
          ],
          consequences: {
            A: "You study uninterrupted and do well on the exam. Your friend gets through the night on their own, and later tells you they felt alone at a bad moment.",
            B: "You give them 20 focused minutes, then return to your books. You do reasonably well on the exam, and your friend appreciates that you showed up even briefly.",
            C: "You spend the evening with your friend. Your exam performance suffers a little, but your friend later says that night mattered more than anything else that week.",
            D: "You point your friend toward a counselor and stay while they make the call. It takes the pressure off you to have every answer, and your exam prep mostly stays on track.",
            E: "You try to do both. Your exam performance drops, and your friend can tell mid-conversation that you're distracted. The support lands half-hearted either way."
          },
          concept: "This isn't really a time-management problem. Boundaries and care aren't opposites. The skill is being honest with yourself and your friend about which one this moment actually calls for.",
          takeaway: "How would you tell your friend which choice you made, without it sounding like an excuse?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Decisions That Shape My Future",
      scenarios: [
        {
          id: "the-30000-choice",
          title: "The ₹30,000 Choice",
          hook: "You receive ₹30,000. Six months from now, your laptop breaks and repairs cost ₹18,000. But you don't know that yet.",
          predictionPrompts: [
            "What would you do with unexpected money right now?",
            "What's the chance something unplanned comes up in the next six months?"
          ],
          choices: [
            { id: "A", text: "Buy a phone.", savedAmount: 3000, dcera: { D: 2, C: 1, E: 3, R: 1, A: 2 }, reason: "This spends almost everything on something you want, with no cushion left. It feels good now, but leaves you exposed later." },
            { id: "B", text: "Save it.", savedAmount: 30000, dcera: { D: 4, C: 5, E: 3, R: 5, A: 3 }, reason: "This gives you the most protection against the unknown, even though it puts off everything you want right now." },
            { id: "C", text: "Invest it.", savedAmount: 30000, locked: true, dcera: { D: 3, C: 2, E: 3, R: 2, A: 2 }, reason: "This is a good long-term instinct, but locked-up money can't help with a short-term emergency. That's a real blind spot." },
            { id: "D", text: "Take a short trip.", savedAmount: 5000, dcera: { D: 2, C: 2, E: 4, R: 1, A: 3 }, reason: "This spends on an experience instead of a thing, but still leaves you very little cushion." },
            { id: "E", text: "Buy something you've wanted for years.", savedAmount: 5000, dcera: { D: 3, C: 2, E: 3, R: 1, A: 3 }, reason: "This is a thought-out want, not an impulse buy. But it still leaves little room for what comes next." },
            { id: "F", text: "Spend ₹10,000 and save ₹20,000.", savedAmount: 20000, dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "This is the clearest balance. You enjoy some of it now while staying protected against most surprises." },
            { id: "G", text: "Use it for a course.", savedAmount: 2000, dcera: { D: 4, C: 2, E: 3, R: 1, A: 4 }, reason: "This invests in yourself directly, which pays off later, but it leaves almost no room for the unexpected right now." }
          ],
          followUpEvent: "Six months later: your laptop suddenly breaks. Repairs cost ₹18,000.",
          consequenceFor(choiceId) {
            const choice = this.choices.find(c => c.id === choiceId);
            const saved = choice.savedAmount;
            if (choice.locked) {
              return "Your ₹30,000 is invested and can't be withdrawn quickly without a penalty. You have to borrow the ₹18,000 or wait to get the repair done.";
            }
            if (saved >= 18000) {
              return `You cover the repair without any stress, with ₹${saved - 18000} left over.`;
            }
            const gap = 18000 - saved;
            return `You're short by ₹${gap}. You borrow the difference from family, or wait on the repair and explain where the money already went.`;
          },
          concept: "Saving isn't really about the amount. It's about what it can absorb when something unplanned happens. Six months later, the choice that felt like 'the fun option' or 'the safe option' shows its real cost.",
          takeaway: "Would you make the same choice again, now that you know what came next?"
        },
        {
          id: "the-easy-career",
          title: "The Easy Career",
          hook: "You're choosing between two paths, with only partial information about each.",
          predictionPrompts: [
            "What matters more to you right now: security or growth?",
            "What information are you missing that you wish you had?"
          ],
          choices: [
            { id: "A", text: "Career A: ₹45,000 starting salary, high job security, work you find boring.", dcera: { D: 3, C: 4, E: 2, R: 5, A: 2 }, reason: "This choice goes for stability and predictability. It's a fair choice, even if it costs you fulfillment down the road." },
            { id: "B", text: "Career B: ₹20,000 starting salary, high uncertainty, strong growth potential, work you genuinely enjoy.", dcera: { D: 3, C: 3, E: 3, R: 2, A: 5 }, reason: "This choice goes for growth and interest over certainty. It's just as fair a choice, but at a real financial cost." }
          ],
          consequences: {
            A: "One year in, the job is stable, but you dread Mondays. A friend who chose the uncertain path is being offered more responsibility elsewhere, and you find yourself wondering what that would have felt like.",
            B: "One year in, it's been a tight year money-wise, but you've started to specialize in something you're genuinely good at. Your income is still well below Career A's, and some days that's hard to sit with."
          },
          concept: "Neither path is the 'smart' one on its own. This is a decision made with incomplete information, the same way it happens outside a classroom. The skill is noticing what you're actually trading off, not searching for a hidden correct answer.",
          takeaway: "Was your first-year outcome what you expected when you chose?"
        },
        {
          id: "the-opportunity-cost",
          title: "The Opportunity Cost",
          hook: "You're offered a prestigious internship. Taking it means missing a college-prep programme and losing time with friends and exam study.",
          predictionPrompts: [
            "What are you actually giving up if you say yes?",
            "What are you actually giving up if you say no?"
          ],
          choices: [
            { id: "A", text: "Accept the internship.", dcera: { D: 3, C: 3, E: 2, R: 2, A: 4 }, reason: "This chooses growth and experience, knowing it costs preparation time you can't get back." },
            { id: "B", text: "Decline and stay in the college-prep programme.", dcera: { D: 3, C: 4, E: 3, R: 4, A: 2 }, reason: "This protects your original plan, at the cost of an opportunity that might not come around again." },
            { id: "C", text: "Try to do a reduced version of both.", dcera: { D: 2, C: 1, E: 2, R: 2, A: 3 }, reason: "This tries to avoid the trade-off completely, which usually means taking a partial cost on both sides." }
          ],
          consequences: {
            A: "You gain real experience and a strong reference, but you enter entrance exams less prepared than peers who used that time to study, and you missed time with friends you won't get back.",
            B: "You stay on track for your exams and keep your usual routine, but you pass on an opportunity that might not come again, and you'll never know exactly where it would have led.",
            C: "You spread yourself across both and don't do either fully. You get a partial reference from the internship, and a compressed exam schedule that leaves you anxious going in."
          },
          concept: "Opportunity cost isn't about the option you pick. It's about the one you give up, even when giving it up was the right call.",
          takeaway: "What would have made this an easier decision to make?"
        }
      ]
    }
  }
};
