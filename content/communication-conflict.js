// Module: Communication & Conflict Resolution
// Content authored from the user's curriculum design (2026-08-17). Choices
// were explicit for "The Group Project" and "Best Friend Betrayal" — the
// rest were authored to fit the given premise. The "Communication Ladder"
// signature activity (same conflict, Passive → Aggressive → Assertive) is
// folded in as its own scenario per level rather than a separate exercise.

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
          hook: "One student did almost nothing on your group project. The teacher gives everyone the same grade.",
          predictionPrompts: [
            "What does this person need to hear?",
            "What would make this worse?"
          ],
          choices: [
            { id: "A", text: "Confront them in front of the group." },
            { id: "B", text: "Ignore it and move on." },
            { id: "C", text: "Tell the teacher what really happened." },
            { id: "D", text: "Suggest removing them from the group for future projects." },
            { id: "E", text: "Talk to them privately." },
            { id: "F", text: "Ask them why they didn't contribute, before deciding anything." }
          ],
          consequences: {
            A: "They get defensive immediately, and the rest of the group feels the tension for the rest of the term — the grade issue is never actually resolved.",
            B: "The grade stands, and it happens again on the next project because nothing changed.",
            C: "The teacher looks into it, but the group now sees you as someone who goes over their heads rather than talking directly.",
            D: "It solves this project, but the group dynamic — and this person's opinion of you — is permanently changed, and you never learn what was actually going on with them.",
            E: "They're more honest one-on-one, and you can address it without embarrassing them in front of others, though it takes more effort to arrange.",
            F: "You find out they were dealing with something you didn't know about. It doesn't fix the grade, but it changes how you understand the whole situation."
          },
          concept: "Winning an argument is not the same as solving a problem. Most of these options address the grade — only one addresses the actual person.",
          takeaway: "Would your answer change if you knew this person had a good reason for not contributing?"
        },
        {
          id: "the-rumour",
          title: "The Rumour",
          hook: 'Someone says: "I heard that you said something horrible about me." You didn\'t.',
          predictionPrompts: [
            "What's your first instinct when accused of something untrue?",
            "What does the other person actually need to hear from you?"
          ],
          choices: [
            { id: "A", text: "Deny it immediately and demand to know who told them." },
            { id: "B", text: "Get defensive and list all the ways this is unfair." },
            { id: "C", text: "Stay calm, ask what exactly they heard, and where." },
            { id: "D", text: "Apologize anyway, just to make the conversation end." },
            { id: "E", text: "Ignore them until they calm down." }
          ],
          consequences: {
            A: "They feel like you're attacking back instead of addressing them — the conversation gets worse before it gets better, even though you're right.",
            B: "The conversation becomes about your feelings instead of theirs, and the actual rumour never gets traced or corrected.",
            C: "You find out where it came from and can address the real source. The other person feels heard instead of argued with.",
            D: "It ends the conversation, but you've now confirmed something false, and it may resurface later as 'proof.'",
            E: "The rumour keeps spreading uncorrected while you wait it out, and the other person feels dismissed."
          },
          concept: "Conflict resolution doesn't start with defending yourself — it starts with understanding what the other person actually heard, and why they believed it.",
          takeaway: "How do you stay calm when you're accused of something you didn't do?"
        },
        {
          id: "best-friend-betrayal",
          title: "Best Friend Betrayal",
          hook: "Your best friend shares something private about you that you told them in confidence.",
          predictionPrompts: [
            "What does 'resolving' this conflict actually require?",
            "Does resolving it have to mean staying friends?"
          ],
          choices: [
            { id: "A", text: "Confront them directly about it." },
            { id: "B", text: "Forgive them without saying anything." },
            { id: "C", text: "Distance yourself without explaining why." },
            { id: "D", text: "End the friendship." }
          ],
          consequences: {
            A: "It's uncomfortable, but you both know exactly where things stand — whatever happens next, it's based on the truth.",
            B: "The friendship continues on the surface, but the trust doesn't fully return, and you carry it quietly.",
            C: "They're confused and hurt without understanding why, and the friendship fades without either of you learning anything from it.",
            D: "It's final and clear, but you never find out whether this was a one-time mistake or a pattern — because the conversation never happened."
          },
          concept: "Conflict resolution does not always mean reconciliation. Sometimes the most honest outcome isn't staying friends — it's just knowing clearly what happened and why.",
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
            { id: "A", text: "Passive — say nothing and hope they remember on their own." },
            { id: "B", text: "Aggressive — call them out publicly for forgetting." },
            { id: "C", text: "Assertive — bring it up privately and directly: 'Hey, can you pay me back the ₹500 when you get a chance?'" }
          ],
          consequences: {
            A: "You avoid conflict, but you're also quietly annoyed every time you see them, and the money may never come back.",
            B: "They pay you back, embarrassed — but the friendship now has a strained edge that wasn't there before.",
            C: "It's a five-second conversation, and it's resolved with no damage to the friendship either way."
          },
          concept: "Assertive isn't the midpoint between passive and aggressive — it's the only one of the three that actually solves the problem without creating a new one.",
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
          hook: "A teacher repeatedly criticises your work publicly, in front of the class.",
          predictionPrompts: [
            "What happens if you say nothing?",
            "What happens if you react in the moment, publicly?"
          ],
          choices: [
            { id: "A", text: "Say nothing and hope it stops." },
            { id: "B", text: "React in the moment, in front of the class." },
            { id: "C", text: "Ask to speak privately: 'When X happens, I experience Y, and I would prefer Z.'" },
            { id: "D", text: "Go straight to a higher authority, without speaking to the teacher first." }
          ],
          consequences: {
            A: "It doesn't stop, and you start dreading the class, which affects your work in it further.",
            B: "The teacher feels publicly challenged and becomes more defensive, not less — the pattern likely continues or worsens.",
            C: "The teacher may not have realized the effect on you. Not guaranteed to work, but it's the only option that gives them a real chance to change.",
            D: "It may get addressed, but the teacher finds out you went around them, which can damage the relationship for the rest of the year regardless of the outcome."
          },
          concept: "The 'When X, I experience Y, I would prefer Z' structure isn't about being polite — it's about giving the other person something to actually act on, instead of just something to defend against.",
          takeaway: "What's the hardest part of saying this kind of thing to someone with more power than you?"
        },
        {
          id: "workplace-conflict",
          title: "Workplace Conflict",
          hook: "You're an intern. Your supervisor gives you instructions that contradict what they said yesterday.",
          predictionPrompts: [
            "What does blaming the supervisor accomplish?",
            "What do you actually need to move forward?"
          ],
          choices: [
            { id: "A", text: '"You told me something completely different yesterday."' },
            { id: "B", text: '"I want to make sure I understand the priority correctly — could we align on today\'s instructions?"' },
            { id: "C", text: "Guess which instruction to follow and hope it's right." },
            { id: "D", text: "Do nothing until they notice and clarify on their own." }
          ],
          consequences: {
            A: "You're technically right, but it puts your supervisor on the defensive, and your working relationship gets a little more guarded.",
            B: "You get clarity without anyone losing face, and your supervisor notices you handle ambiguity well.",
            C: "You might guess right — or you might redo the work, and either way you haven't actually resolved the underlying confusion.",
            D: "The task stalls, and it looks like you weren't proactive, even though the contradiction wasn't your fault."
          },
          concept: "In a workplace, being right about who said what matters far less than getting the work unstuck. The goal isn't to win the disagreement — it's to move forward.",
          takeaway: "How is this different from how you'd handle a contradiction from a friend?"
        },
        {
          id: "the-unfair-colleague",
          title: "The Unfair Colleague",
          hook: "A colleague takes credit for work you did.",
          predictionPrompts: [
            "What's the cost of saying nothing?",
            "What's the cost of escalating immediately?"
          ],
          choices: [
            { id: "A", text: "Ignore it." },
            { id: "B", text: "Confront them privately." },
            { id: "C", text: "Document your work going forward, say nothing yet." },
            { id: "D", text: "Escalate to a manager immediately." },
            { id: "E", text: "Address it collaboratively — raise it as something to sort out together, not an accusation." }
          ],
          consequences: {
            A: "It's likely to happen again, and you'll have no record to point to if it does.",
            B: "They may explain, apologize, or get defensive — but at least the issue is between the two of you, not yet a bigger deal.",
            C: "You're protected going forward, but this specific instance goes unaddressed.",
            D: "It gets resolved by authority rather than by relationship — effective, but the colleague may see you as someone who escalates rather than talks.",
            E: "It takes more emotional effort, but it's the option most likely to fix the pattern without permanently damaging the working relationship."
          },
          concept: "Every one of these options is defensible. The real question this scenario is testing is: what matters more to you here — being protected, being right, or preserving the relationship? Different situations call for different answers.",
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
            { id: "A", text: "Passive — say nothing and let it keep happening." },
            { id: "B", text: "Aggressive — snap at them in front of the team." },
            { id: "C", text: "Assertive — privately: 'I've noticed I get interrupted a lot in meetings — can we work on that?'" }
          ],
          consequences: {
            A: "It continues, and you start saying less in meetings altogether — which costs you visibility, not just airtime.",
            B: "It probably stops, but you're now known as someone who reacts sharply, which can outweigh being right.",
            C: "It's a short, low-drama conversation, and most people genuinely don't realize they're doing it until it's named directly."
          },
          concept: "Assertive isn't the midpoint between passive and aggressive — it's the only one of the three built to actually change the pattern instead of just reacting to it.",
          takeaway: "Which style is your default at work or school, and does it usually work?"
        }
      ]
    }
  }
};
