// Module: Decision-Making & Consequences
// Content authored from the user's curriculum design (2026-08-17).
// NOTE: the curriculum gave explicit A-E choices + a general list of possible
// consequences for Scenario 1 only. For Scenarios 2-3 (both levels) only the
// premise and concept were specified — the specific choice options and
// per-choice consequence text below were authored to fit that premise and
// need your review before real classroom use.

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
            { id: "A", text: "Go with them." },
            { id: "B", text: "Refuse." },
            { id: "C", text: "Tell a teacher." },
            { id: "D", text: "Go but return before anyone notices." },
            { id: "E", text: "Suggest something else." }
          ],
          consequences: {
            A: "You sneak out with the group and make it back before the bell. But a hall monitor notices five missing faces at the cafeteria count and flags it to your homeroom teacher — nothing happens today, but your name is now on a list.",
            B: "You stay behind. The group teases you for a day, then forgets about it. Two of them get caught by a teacher on the way back and receive a warning.",
            C: "The teacher intervenes before anyone leaves. The group is annoyed with you for about a week. No one gets in trouble — but no one asks you to come along next time either.",
            D: "You make it back in time. This time. The group now knows this works, and the next 'let's sneak out' becomes a much easier yes.",
            E: "You suggest staying and doing something else. Half the group stays with you; the rest leave without you — and get caught."
          },
          concept: "This is peer pressure disguised as loyalty. The useful skill isn't picking the 'right' letter — it's the habit you just practiced in the prediction step: separating what happens in 10 minutes from what happens tomorrow, and noticing which one you were actually weighing.",
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
            { id: "A", text: "Forward it to the group chat like everyone else." },
            { id: "B", text: "Don't forward it — but don't say anything either." },
            { id: "C", text: "Tell the group to stop and delete it." },
            { id: "D", text: "Message the person in the screenshot to warn them." },
            { id: "E", text: "Tell a teacher or counselor about it." }
          ],
          consequences: {
            A: "You forward it. Within an hour it's spread to three other group chats, and someone adds a cruel caption. The person in it finds out you were one of the people who sent it on — not the first, but not the last either.",
            B: "You stay silent and don't forward it, but you don't stop it either. It spreads anyway. Later, the group assumes you were 'in on it' since you never objected.",
            C: "You ask the group to stop. Two people listen; one had already forwarded it before you spoke up. It still spreads, but slower — and the group remembers you tried.",
            D: "You warn the person in the screenshot directly. They're upset but grateful for the warning, and manage to get ahead of it before it spreads much further.",
            E: "You tell a teacher. The school steps in fast and the spread stops within the day. Word gets around that you 'told,' and it takes a few weeks to rebuild some trust with the group."
          },
          concept: "The real decision wasn't the moment of forwarding — it was the ten seconds after you first saw it. Staying silent, waiting, and acting all count as decisions, even the ones that don't feel like one.",
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
            { id: "A", text: "Tell your friend you can't talk right now — you need to study." },
            { id: "B", text: "Make time for a short conversation, then go back to studying." },
            { id: "C", text: "Set the exam aside and be there for your friend." },
            { id: "D", text: "Suggest they talk to a counselor, and offer to sit with them while they do." },
            { id: "E", text: "Try to do both at once — half-focus on studying while texting back." }
          ],
          consequences: {
            A: "You study uninterrupted and do well on the exam. Your friend gets through the night on their own, and later tells you they felt alone at a bad moment.",
            B: "You give them 20 focused minutes, then return to your books. You do reasonably well on the exam, and your friend appreciates that you showed up even briefly.",
            C: "You spend the evening with your friend. Your exam performance suffers a little, but your friend later says that night mattered more than anything else that week.",
            D: "You point your friend toward a counselor and stay while they make the call. It takes the pressure off you to have every answer, and your exam prep mostly stays on track.",
            E: "You try to do both. Your exam performance drops, and your friend can tell mid-conversation that you're distracted — the support lands half-hearted either way."
          },
          concept: "This isn't a time-management problem. Boundaries and care aren't opposites — the skill is being honest with yourself and your friend about which one this moment actually calls for.",
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
          hook: "You receive ₹30,000. Six months from now, your laptop breaks and repairs cost ₹18,000 — but you don't know that yet.",
          predictionPrompts: [
            "What would you do with unexpected money right now?",
            "What's the chance something unplanned comes up in the next six months?"
          ],
          choices: [
            { id: "A", text: "Buy a phone.", savedAmount: 3000 },
            { id: "B", text: "Save it.", savedAmount: 30000 },
            { id: "C", text: "Invest it.", savedAmount: 30000, locked: true },
            { id: "D", text: "Take a short trip.", savedAmount: 5000 },
            { id: "E", text: "Buy something you've wanted for years.", savedAmount: 5000 },
            { id: "F", text: "Spend ₹10,000 and save ₹20,000.", savedAmount: 20000 },
            { id: "G", text: "Use it for a course.", savedAmount: 2000 }
          ],
          followUpEvent: "Six months later: your laptop suddenly breaks. Repairs cost ₹18,000.",
          consequenceFor(choiceId) {
            const choice = this.choices.find(c => c.id === choiceId);
            const saved = choice.savedAmount;
            if (choice.locked) {
              return "Your ₹30,000 is invested and can't be withdrawn quickly without a penalty. You have to borrow the ₹18,000 or delay the repair.";
            }
            if (saved >= 18000) {
              return `You cover the repair without stress, with ₹${saved - 18000} left over.`;
            }
            const gap = 18000 - saved;
            return `You're short by ₹${gap}. You borrow the difference from family, or delay the repair and explain where the money already went.`;
          },
          concept: "Savings isn't about the amount — it's about what it can absorb when something unplanned happens. Six months out, the choice that felt like 'the fun option' or 'the safe option' shows its real cost.",
          takeaway: "Would you make the same choice again, now that you know what came next?"
        },
        {
          id: "the-easy-career",
          title: "The Easy Career",
          hook: "You're choosing between two paths, with only partial information about each.",
          predictionPrompts: [
            "What matters more to you right now — security or growth?",
            "What information are you missing that you wish you had?"
          ],
          choices: [
            { id: "A", text: "Career A — ₹45,000 starting salary, high job security, work you find boring." },
            { id: "B", text: "Career B — ₹20,000 starting salary, high uncertainty, strong growth potential, work you genuinely enjoy." }
          ],
          consequences: {
            A: "One year in: the job is stable, but you dread Mondays. A friend who chose the uncertain path is being offered more responsibility elsewhere, and you find yourself wondering what that would've felt like.",
            B: "One year in: it's been a financially tight year, but you've started to specialize in something you're genuinely good at. Your income is still well below Career A's, and some days that's hard to sit with."
          },
          concept: "Neither path is the 'smart' one in the abstract — this is a decision made with incomplete information, the same way it happens outside a classroom. The skill is noticing what you're actually trading off, not finding the hidden correct answer.",
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
            { id: "A", text: "Accept the internship." },
            { id: "B", text: "Decline and stay in the college-prep programme." },
            { id: "C", text: "Try to do a reduced version of both." }
          ],
          consequences: {
            A: "You gain real experience and a strong reference — but you enter entrance exams less prepared than peers who used that time to study, and you missed time with friends you won't get back.",
            B: "You stay on track for your exams and keep your usual routine — but you pass on an opportunity that may not come again, and you'll never know exactly what it would have led to.",
            C: "You spread yourself across both and do neither fully — a partial reference from the internship, and a compressed exam schedule that leaves you anxious going in."
          },
          concept: "Opportunity cost isn't about the option you pick — it's about the one you give up, even when giving it up was the right call.",
          takeaway: "What would have made this an easier decision to make?"
        }
      ]
    }
  }
};
