// Module: Communication & Conflict Resolution
// Content authored from the user's curriculum design (2026-08-17). Each
// choice carries a `dcera` score and `reason`, added 2026-08-18 for
// automatic scoring.

const MODULE_COMMUNICATION_CONFLICT = {
  id: "communication-conflict",
  title: "Communication & Conflict Resolution",
  coreIdea: "Winning an argument is not the same as solving a problem.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · When Things Get Messy",
      scenarios: [
        {
          id: "the-group-project",
          title: "The Group Project",
          hook: "One student in your group barely did any work. But everyone still gets the same grade from the teacher.",
          predictionPrompts: [
            "What does this person need to hear?",
            "What would make this worse?"
          ],
          choices: [
            { id: "A", text: "Confront them in front of the group.", dcera: { D: 2, C: 1, E: 1, R: 2, A: 2 }, reason: "You do it in front of everyone. That usually makes people defensive instead of fixing anything." },
            { id: "B", text: "Ignore it and move on.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "You avoid the conflict completely. But the same problem will likely happen again next project." },
            { id: "C", text: "Tell the teacher what really happened.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 2 }, reason: "The teacher can fix the grade. But the group may stop trusting you directly." },
            { id: "D", text: "Suggest removing them from the group for future projects.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 2 }, reason: "This fixes the current project. But you never find out what was really going on with them." },
            { id: "E", text: "Talk to them privately.", dcera: { D: 4, C: 4, E: 5, R: 3, A: 4 }, reason: "You talk to the actual person, not just the grade problem, and you avoid the damage of confronting them in public." },
            { id: "F", text: "Ask them why they didn't contribute, before deciding anything.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "This is the only choice where you get the real story before deciding what to do." }
          ],
          consequences: {
            A: "They get defensive right away. The whole group feels the tension for the rest of the term, and the grade issue never really gets fixed.",
            B: "The grade stays the same. It happens again next project because nothing changed.",
            C: "The teacher looks into it. But the group starts to see you as someone who goes around them instead of talking directly.",
            D: "It solves this project. But the group dynamic changes for good, along with how this person sees you, and you never learn what was really going on with them.",
            E: "They're more honest one-on-one. You can talk about it without embarrassing them in front of others. It just takes more effort to set up.",
            F: "You find out they were dealing with something you didn't know about. It doesn't fix the grade, but it changes how you see the whole situation."
          },
          concept: "Winning an argument is not the same as solving a problem. Most of these choices deal with the grade. Only one deals with the actual person.",
          takeaway: "Would your answer change if you knew this person had a good reason for not contributing?"
        },
        {
          id: "the-rumour",
          title: "The Rumour",
          hook: 'Someone says: "I heard that you said something horrible about me." You didn\'t.',
          predictionPrompts: [
            "What's your first instinct when someone accuses you of something untrue?",
            "What does the other person actually need to hear from you?"
          ],
          choices: [
            { id: "A", text: "Deny it immediately and demand to know who told them.", dcera: { D: 2, C: 1, E: 1, R: 2, A: 2 }, reason: "You're technically right. But it feels like an attack, so it makes things worse instead of better." },
            { id: "B", text: "Get defensive and list all the ways this is unfair.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "This makes the moment about your feelings instead of the actual accusation." },
            { id: "C", text: "Stay calm, ask what exactly they heard, and where.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This gets to the real source of the rumour, instead of just reacting to being accused." },
            { id: "D", text: "Apologize anyway, just to make the conversation end.", dcera: { D: 1, C: 1, E: 2, R: 2, A: 1 }, reason: "This ends the conversation, but it confirms something false. It's a quick fix with a cost later." },
            { id: "E", text: "Ignore them until they calm down.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "This buys you time. But the rumour keeps spreading uncorrected while you wait." }
          ],
          consequences: {
            A: "They feel like you're attacking back instead of talking to them. The conversation gets worse before it gets better, even though you're right.",
            B: "The conversation becomes about your feelings instead of theirs, and the actual rumour never gets traced or corrected.",
            C: "You find out where it came from and can address the real source. The other person feels heard instead of argued with.",
            D: "It ends the conversation. But you've now confirmed something false, and it might come back later as 'proof.'",
            E: "The rumour keeps spreading uncorrected while you wait it out, and the other person feels dismissed."
          },
          concept: "Conflict resolution doesn't start with defending yourself. It starts with understanding what the other person actually heard, and why they believed it.",
          takeaway: "How do you stay calm when you're accused of something you didn't do?"
        },
        {
          id: "best-friend-betrayal",
          title: "Best Friend Betrayal",
          hook: "Your best friend shares something private about you that you told them in confidence.",
          predictionPrompts: [
            "What does it actually take to resolve this conflict?",
            "Does resolving it have to mean staying friends?"
          ],
          choices: [
            { id: "A", text: "Confront them directly about it.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 4 }, reason: "This is the only choice built on the actual truth of what happened, no matter what comes next." },
            { id: "B", text: "Forgive them without saying anything.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "This keeps the friendship looking fine on the surface. But you may never rebuild real trust." },
            { id: "C", text: "Distance yourself without explaining why.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 2 }, reason: "This protects you quietly. But the other person never learns what they did or why it mattered." },
            { id: "D", text: "End the friendship.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 1 }, reason: "This is a clean, final answer. But you never find out if this was a one-time mistake or a pattern." }
          ],
          consequences: {
            A: "It's uncomfortable. But you both know exactly where things stand, and whatever happens next is based on the truth.",
            B: "The friendship continues on the surface, but the trust doesn't fully return, and you carry it quietly.",
            C: "They're confused and hurt, and they don't understand why. The friendship fades, and neither of you learns anything from it.",
            D: "It's final and clear. But you never find out if this was a one-time mistake or a pattern, because the conversation never happened."
          },
          concept: "Conflict resolution does not always mean getting back together. Sometimes the most honest outcome isn't staying friends. It's just knowing clearly what happened and why.",
          takeaway: "What's the difference between forgiving someone and staying close to them?"
        },
        {
          id: "the-communication-ladder-l1",
          title: "The Communication Ladder",
          hook: "A friend borrowed ₹500 from you three weeks ago and hasn't brought it up since.",
          predictionPrompts: [
            "What happens if you say nothing at all?",
            "What happens if you demand it back right now, in front of others?"
          ],
          choices: [
            { id: "A", text: "Passive: say nothing and hope they remember on their own.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "Avoids the conflict but not the resentment, and the money may never come back." },
            { id: "B", text: "Aggressive: call them out publicly for forgetting.", dcera: { D: 2, C: 2, E: 1, R: 3, A: 2 }, reason: "Gets the result but damages the relationship to get there." },
            { id: "C", text: "Assertive: bring it up privately and directly. Say something like, 'Hey, can you pay me back the ₹500 when you get a chance?'", dcera: { D: 5, C: 5, E: 5, R: 5, A: 5 }, reason: "Solves the actual problem directly, with no cost to the friendship either way." }
          ],
          consequences: {
            A: "You avoid conflict, but you're also quietly annoyed every time you see them, and the money may never come back.",
            B: "They pay you back, but they're embarrassed. The friendship now has a strained edge that wasn't there before.",
            C: "It's a five-second conversation, and it's resolved with no damage to the friendship either way."
          },
          concept: "Assertive isn't the halfway point between passive and aggressive. It's the only one of the three that actually solves the problem without creating a new one.",
          takeaway: "Which style is your default, and does it usually work?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Conflict Beyond School",
      scenarios: [
        {
          id: "difficult-authority-figure",
          title: "Difficult Authority Figure",
          hook: "A teacher keeps criticizing your work in front of the whole class.",
          predictionPrompts: [
            "What happens if you say nothing?",
            "What happens if you react right away, in front of everyone?"
          ],
          choices: [
            { id: "A", text: "Say nothing and hope it stops.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "Nothing changes, and it starts affecting your work in that class too." },
            { id: "B", text: "React in the moment, in front of the class.", dcera: { D: 2, C: 1, E: 1, R: 1, A: 2 }, reason: "Understandable, but it puts the teacher on the defensive instead of open to change." },
            { id: "C", text: "Ask to speak privately. Say something like, 'When X happens, I feel Y, and I would prefer Z.'", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "The only option that gives the other person something to act on rather than defend against." },
            { id: "D", text: "Go straight to a higher authority, without speaking to the teacher first.", dcera: { D: 2, C: 3, E: 2, R: 3, A: 2 }, reason: "May solve the immediate problem, but damages the relationship for the rest of the year." }
          ],
          consequences: {
            A: "It doesn't stop, and you start dreading the class, which affects your work in it further.",
            B: "The teacher feels publicly challenged and becomes more defensive, not less. The pattern likely continues or gets worse.",
            C: "The teacher may not have realized the effect on you. Not guaranteed to work, but it's the only option that gives them a real chance to change.",
            D: "It may get addressed. But the teacher finds out you went around them, and that can damage the relationship for the rest of the year, no matter the outcome."
          },
          concept: "The 'When X happens, I feel Y, and I would prefer Z' structure isn't just about being polite. It's about giving the other person something to actually act on, instead of something to defend against.",
          takeaway: "What's the hardest part of saying this kind of thing to someone with more power than you?"
        },
        {
          id: "workplace-conflict",
          title: "Workplace Conflict",
          hook: "You're an intern. Your supervisor gives you instructions that contradict what they said yesterday.",
          predictionPrompts: [
            "What does blaming your supervisor actually get you?",
            "What do you actually need to move forward?"
          ],
          choices: [
            { id: "A", text: '"You told me something completely different yesterday."', dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "You're technically right. But it puts your supervisor on the defensive instead of solving the confusion." },
            { id: "B", text: '"I want to make sure I understand the priority correctly. Could we agree on today\'s instructions?"', dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "This clears up the actual confusion without anyone losing face. It's the most effective choice here." },
            { id: "C", text: "Guess which instruction to follow and hope it's right.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "This might work. But it leaves the real miscommunication unresolved either way." },
            { id: "D", text: "Do nothing until they notice and clarify on their own.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "The task stalls, and it looks like you didn't take initiative, even though it wasn't your fault." }
          ],
          consequences: {
            A: "You're technically right, but it puts your supervisor on the defensive, and your working relationship gets a little more guarded.",
            B: "You get clarity without anyone losing face. Your supervisor notices you handle confusing situations well.",
            C: "You might guess right, or you might end up redoing the work. Either way, the real confusion never gets resolved.",
            D: "The task stalls, and it looks like you weren't proactive. But the contradiction wasn't your fault."
          },
          concept: "In a workplace, being right about who said what matters far less than getting the work unstuck. The goal isn't to win the disagreement. It's to move forward.",
          takeaway: "How is this different from how you'd handle a contradiction from a friend?"
        },
        {
          id: "the-unfair-colleague",
          title: "The Unfair Colleague",
          hook: "A colleague takes credit for work you did.",
          predictionPrompts: [
            "What's the cost of saying nothing?",
            "What's the cost of escalating right away?"
          ],
          choices: [
            { id: "A", text: "Ignore it.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Leaves you with no record and a high chance it happens again." },
            { id: "B", text: "Confront them privately.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "Keeps it contained between the two of you, with an honest but uncertain outcome." },
            { id: "C", text: "Document your work going forward, say nothing yet.", dcera: { D: 3, C: 4, E: 2, R: 4, A: 3 }, reason: "Protects you for next time. But this specific time stays unresolved." },
            { id: "D", text: "Escalate to a manager immediately.", dcera: { D: 3, C: 3, E: 1, R: 4, A: 2 }, reason: "This works because a manager has authority. But the colleague is likely to see it as skipping the relationship entirely." },
            { id: "E", text: "Address it together. Raise it as something to sort out, not as an accusation.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 5 }, reason: "The option most likely to fix the actual pattern without permanently damaging the relationship." }
          ],
          consequences: {
            A: "It's likely to happen again, and you'll have no record to point to if it does.",
            B: "They may explain, apologize, or get defensive. But at least the issue stays between the two of you, not a bigger deal yet.",
            C: "You're protected going forward. But this specific time goes unaddressed.",
            D: "It gets resolved through authority instead of through the relationship. It works, but the colleague may see you as someone who escalates instead of talking.",
            E: "It takes more emotional effort, but it's the option most likely to fix the pattern without permanently damaging the working relationship."
          },
          concept: "Every one of these choices is defensible. The real question here is what matters more to you: being protected, being right, or keeping the relationship. Different situations call for different answers.",
          takeaway: "Would your answer change if this had happened three times before, not once?"
        },
        {
          id: "the-communication-ladder-l2",
          title: "The Communication Ladder",
          hook: "A colleague keeps interrupting you mid-sentence in team meetings.",
          predictionPrompts: [
            "What happens if you let it keep happening?",
            "What happens if you snap at them in the meeting?"
          ],
          choices: [
            { id: "A", text: "Passive: say nothing and let it keep happening.", dcera: { D: 1, C: 2, E: 2, R: 2, A: 1 }, reason: "The interruptions continue, and you start speaking up less in every meeting, not just this one." },
            { id: "B", text: "Aggressive: snap at them in front of the team.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Likely stops it, but at the cost of how the team sees you afterward." },
            { id: "C", text: "Assertive: talk to them privately. Say something like, 'I've noticed I get interrupted a lot in meetings. Can we work on that?'", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "This names the pattern directly and calmly. It's the option most likely to actually change it." }
          ],
          consequences: {
            A: "It continues, and you start saying less in meetings altogether. That costs you visibility, not just airtime.",
            B: "It probably stops, but you're now known as someone who reacts sharply, which can outweigh being right.",
            C: "It's a short, low-drama conversation, and most people genuinely don't realize they're doing it until it's named directly."
          },
          concept: "Assertive isn't the halfway point between passive and aggressive. It's the only one of the three built to actually change the pattern instead of just reacting to it.",
          takeaway: "Which style is your default at work or school, and does it usually work?"
        }
      ]
    }
  }
};
