// Module: Digital Safety for Girls
// New module added 2026-08-20, adapted from the external counsellor's field
// guide at thehumansystemslab.netlify.app/guides/digital-safety-girls-delhi
// — a professional resource on recognizing online grooming/exploitation,
// NOT primarily youth-facing (unlike the companion "guide_for_boys"). Built
// carefully from only the guide's own student-facing sections: the toolkit's
// "Message Decoder" activity, Essay III ("On Being Understood by the Wrong
// People"), and Essay IV's shame-bind framing. Handled in general,
// non-graphic terms throughout — no explicit content, no operational detail
// beyond what's needed for pattern recognition.
//
// Design commitments made explicitly with the user before this was built:
// (1) every scenario includes an option to tell a trusted adult, and that
// option never scores lower than staying silent; (2) real Indian helplines
// are included in-app, not just documented elsewhere — see the concept text
// in "If I Tell, What Happens?"; (3) anti-shame framing throughout, echoing
// the source guide's own facilitation language almost verbatim.

const MODULE_DIGITAL_SAFETY_GIRLS = {
  id: "digital-safety-girls",
  title: "Digital Safety for Girls",
  coreIdea: "Recognizing a pattern is a skill, not a character test.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · What's Actually Visible",
      scenarios: [
        {
          id: "the-public-profile",
          title: "The Public Profile",
          hook: "You're setting up a new social media profile. It asks for your school, your city, your birthday, and whether to make your account public or private.",
          predictionPrompts: [
            "What could a stranger figure out from a public profile alone?",
            "What's the difference between 'nobody's looking' and 'anybody could look'?"
          ],
          choices: [
            { id: "A", text: "Make it public and fill in everything — more people can find you that way.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Maximizes how findable you are without maximizing how safe that makes you." },
            { id: "B", text: "Make it private, but still fill in everything in your bio.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 2 }, reason: "Protects the account's visibility, but doesn't reduce what's actually inside it." },
            { id: "C", text: "Make it private and only share what you're comfortable with strangers seeing.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Combines both real protections — who can see it, and what there is to see — instead of relying on just one." },
            { id: "D", text: "Make it public but leave the sensitive fields blank.", dcera: { D: 3, C: 3, E: 2, R: 4, A: 3 }, reason: "A reasonable middle ground if visibility matters to you, though it leaves the account's audience wide open." },
            { id: "E", text: "Ask a parent or older sibling to look it over with you before posting.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Brings in a second perspective before anything is posted, not after." }
          ],
          consequences: {
            A: "Anyone can see your school, your city, and your birthday — enough for a stranger to sound like they already know you.",
            B: "The profile itself is protected, but anyone who does get access sees everything at once.",
            C: "Strangers who find the account learn very little, and anyone you actually know still recognizes you fine.",
            D: "The account is easy to find, but there's less in it that could be used against you.",
            E: "It takes an extra step, but a second set of eyes often catches things you stop noticing about your own profile."
          },
          concept: "None of these choices are about hiding — they're about deciding on purpose what a stranger gets to know about you, instead of leaving it to whoever bothers to look.",
          takeaway: "If you looked at your own profile as a stranger would, what would you actually learn?"
        },
        {
          id: "someone-new-who-gets-it",
          title: "Someone New, Who Gets It",
          hook: "Someone you've never met in person messages you online. They're easy to talk to, remember small details about your life, and tell you that you're different from everyone else you know.",
          predictionPrompts: [
            "What does 'you're different from everyone else' actually do to how much you trust someone?",
            "Is there anything wrong with the friendship yet — how would you know either way?"
          ],
          choices: [
            { id: "A", text: "Keep talking — it feels genuinely nice to be understood.", dcera: { D: 2, C: 2, E: 3, R: 1, A: 2 }, reason: "Understandable — this is exactly what makes early-stage attention feel good — but it's not yet evaluated as anything, just accepted." },
            { id: "B", text: "Tell a close friend about this new person, just to have someone else know.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Doesn't require deciding anything about the person yet, but means you're not carrying this alone." },
            { id: "C", text: "Ask the person more about themselves — where they actually go to school, who their friends are.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "Tests the story instead of just accepting it, which is the actual skill here, not suspicion for its own sake." },
            { id: "D", text: "Stop responding without any explanation.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "Ends the specific interaction, without learning anything that would help you recognize the same pattern again." },
            { id: "E", text: "Keep talking, but avoid telling them anything specific about your daily routine.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 4 }, reason: "A reasonable form of caution, though it protects information more than it evaluates the relationship itself." },
            { id: "F", text: "Tell a parent or trusted adult about this new friendship, even though nothing seems wrong yet.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Normalizes involving an adult early, before anything is clearly wrong — the lowest-cost version of not carrying it alone." }
          ],
          consequences: {
            A: "The conversation continues to feel good, and you don't yet have anything concrete to weigh it against.",
            B: "Your friend doesn't have a strong reaction either way, but now someone else knows this exists.",
            C: "The answers are vague or don't quite add up, which is useful information either way.",
            D: "The account tries a few more times, then moves on to someone else.",
            E: "The friendship continues, but you've kept a layer of information between you and someone you don't actually know yet.",
            F: "The adult doesn't overreact — they ask a few questions and suggest keeping an eye on it together, which feels much less dramatic than you'd expected."
          },
          concept: "'You're different from everyone else' feels like being seen. It's also one of the most common opening lines in exactly the kind of relationship this module is about — feeling true and being used are not opposites.",
          takeaway: "What's a question you could ask early on that would tell you a lot about whether someone's being straight with you?"
        },
        {
          id: "the-secret-between-us",
          title: "The Secret Between Us",
          hook: "An online friend asks you not to mention them to your parents or your usual friends — they say it's 'just between us,' and that other people wouldn't get it.",
          predictionPrompts: [
            "What's the actual reason a healthy friendship would need to be secret?",
            "What does 'other people wouldn't get it' assume about the people who love you?"
          ],
          choices: [
            { id: "A", text: "Agree to keep it private — it feels special to have something just for the two of you.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Secrecy is one of the most consistent features of an unhealthy dynamic — agreeing to it removes the people most likely to notice a problem." },
            { id: "B", text: "Tell them you're not comfortable keeping people in your life secret from each other.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "Names the actual concern directly and tests the relationship's response to a real boundary." },
            { id: "C", text: "Keep it secret for now, but mention it to one trusted friend privately.", dcera: { D: 4, C: 4, E: 3, R: 5, A: 4 }, reason: "Keeps a safety net in place without an immediate confrontation." },
            { id: "D", text: "Ask them directly why it needs to be a secret at all.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "Asks the question a healthy relationship should have an easy answer to." },
            { id: "E", text: "Stop talking to them without any explanation.", dcera: { D: 3, C: 2, E: 2, R: 4, A: 2 }, reason: "Removes the immediate risk, but without understanding why the request was a warning sign in the first place." },
            { id: "F", text: "Tell a parent or trusted adult about the request for secrecy.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "A request to keep a relationship secret from the adults in your life is exactly the kind of thing worth telling one of them about." }
          ],
          consequences: {
            A: "The secrecy becomes normal, and it's now harder to bring up naturally later, even if you wanted to.",
            B: "The response tells you something real — either they respect it, or they push back, and either way you learn something.",
            C: "You get a second perspective without fully breaking the secrecy, which gives you somewhere to go if something feels off later.",
            D: "The answer, or the lack of one, is itself informative.",
            E: "The specific relationship ends, but the pattern — and how to recognize it next time — stays unexamined.",
            F: "The adult recognizes the request for what it is and helps you think through what to do next."
          },
          concept: "A request for secrecy is rarely about the relationship being special — it's usually about removing the people most likely to notice something's wrong.",
          takeaway: "Who in your life would you actually want to know about a new friendship like this?"
        },
        {
          id: "everyones-doing-it-kind-of",
          title: "Everyone's Doing It, Kind Of",
          hook: "In your friend group's private chat, people are sharing screenshots of conversations with people they've met online, half-joking about who's 'talking to someone.' You don't want to be the only one who says nothing.",
          predictionPrompts: [
            "What's the difference between sharing for fun and sharing because something feels off?",
            "Would you actually know if a friend's 'someone online' was a real concern?"
          ],
          choices: [
            { id: "A", text: "Share something too, just to keep up with the group.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 2 }, reason: "Shares information to match the room's energy rather than because it was the right call." },
            { id: "B", text: "Stay quiet and let the conversation move on.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids awkwardness, but the moment where someone could have actually checked in on a friend passes unused." },
            { id: "C", text: "Ask a friend privately how their own online conversation is actually going.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "Turns a group joke into an actual one-on-one check-in, which is where the real information usually is." },
            { id: "D", text: "Bring up, generally, some of the warning signs you've heard about.", dcera: { D: 4, C: 3, E: 3, R: 3, A: 4 }, reason: "Takes a small social risk to say something useful, even if not everyone's listening." },
            { id: "E", text: "Screenshot the conversation in case it becomes useful information later.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 3 }, reason: "A low-cost precaution, though it doesn't address anything happening in the moment." },
            { id: "F", text: "Tell a parent, teacher, or counselor what you're noticing in the group chat, even generally.", dcera: { D: 5, C: 4, E: 4, R: 4, A: 4 }, reason: "Doesn't require naming anyone specifically — just makes sure an adult who could help is aware something's being discussed." }
          ],
          consequences: {
            A: "You share more than you meant to, mostly to match the group's energy rather than because you chose to.",
            B: "The moment passes without incident, but nobody actually checked in on anyone.",
            C: "Your friend either reassures you it's fine, or you notice something in how they answer that gives you pause.",
            D: "A couple of people roll their eyes, but at least one person seems to actually be listening.",
            E: "It doesn't change anything about the conversation itself, though it could matter later if something did turn out to be wrong.",
            F: "The adult doesn't need names to start reinforcing what to watch for, and now they're primed to help if something surfaces."
          },
          concept: "Friend-group joking about 'talking to someone online' is often the only moment a warning sign would ever surface — most of it passes by exactly like this, as a joke nobody follows up on.",
          takeaway: "Has a joke in a group chat ever turned out to be about something real?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Reading the Pattern",
      scenarios: [
        {
          id: "message-decoder",
          title: "Message Decoder",
          hook: "A message thread with someone you've been talking to online, over a few weeks: it started with compliments about how mature you are, moved to asking for photos 'just between us,' and now includes a comment about how upset they'd be if you 'suddenly stopped talking to them.'",
          predictionPrompts: [
            "Which part of this thread would you have flagged first, reading it as a stranger?",
            "What's the actual function of each of those three moves?"
          ],
          choices: [
            { id: "A", text: "Reply and continue the conversation as normal.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "The pattern — flattery, then a request, then guilt about distance — is a known sequence, and continuing treats it as ordinary." },
            { id: "B", text: "Stop responding immediately, without saying anything.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 2 }, reason: "Stops the immediate conversation, but doesn't preserve evidence or bring in anyone who could help." },
            { id: "C", text: "Screenshot the whole thread before doing anything else.", dcera: { D: 4, C: 5, E: 2, R: 5, A: 3 }, reason: "The single most useful individual action — evidence doesn't disappear once it exists somewhere else." },
            { id: "D", text: "Tell a parent, teacher, or counselor what's been happening.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "The most complete response — you get support, and someone with more context and options is now involved." },
            { id: "E", text: "Confront them directly about the pattern you've noticed.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Understandable, but engaging directly with the pressure tactic already in the messages can amplify it rather than end it." }
          ],
          consequences: {
            A: "The pattern continues exactly as it has, since nothing about the dynamic has changed.",
            B: "The specific conversation ends, but the messages — and the pattern — aren't preserved or reported anywhere.",
            C: "You now have a preserved, timestamped record, whatever you decide to do next.",
            D: "The adult can help you think through next steps, including whether this needs to go further — and you're not carrying it alone anymore.",
            E: "It may end the conversation, but confronting someone using these tactics directly can also escalate the 'upset if you stop talking' pressure already in play."
          },
          concept: "This exact three-step shape — flattery, a request framed as 'just between us,' then guilt about pulling away — is common enough to have a name. Recognizing it is a skill, not proof that anything about you invited it.",
          takeaway: "Which single message in that thread would you point to as the moment it stopped being just a conversation?"
        },
        {
          id: "the-ask-that-changed",
          title: "The Ask That Changed",
          hook: "Someone you've been talking to online for a while, who's always been easy to talk to, asks for something you're not comfortable with — a photo, personal information, or to meet up somewhere they choose. It's the first time they've asked for anything like this.",
          predictionPrompts: [
            "Does how long you've known someone online change what a reasonable request looks like?",
            "What does saying no, once, actually tell you about them?"
          ],
          choices: [
            { id: "A", text: "Go along with it — you've trusted them this far.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "The first request that gets a yes tends not to be the last, or the biggest." },
            { id: "B", text: "Say no clearly, and see how they respond.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 4 }, reason: "A direct no is a real test — most healthy relationships absorb it without much friction." },
            { id: "C", text: "Say no, and immediately tell a trusted adult about the conversation.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "Combines the boundary with support, instead of finding out alone how it's received." },
            { id: "D", text: "Make an excuse instead of a direct no.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Avoids the direct confrontation, but doesn't close the door the way a clear no does." },
            { id: "E", text: "Ask them to explain why they're asking for this now.", dcera: { D: 3, C: 3, E: 3, R: 3, A: 3 }, reason: "A reasonable question, though it delays actually answering the request either way." }
          ],
          consequences: {
            A: "The request is met, and it becomes easier for the next request to be a little bigger than this one.",
            B: "Their reaction — respect, or pressure — tells you something real about what this relationship actually is.",
            C: "You get support immediately, before finding out on your own how they respond to being told no.",
            D: "The excuse might work for now, but it leaves the door open for the same ask again, framed differently.",
            E: "The explanation, or the lack of a good one, is itself useful information."
          },
          concept: "The first uncomfortable ask in an online relationship is rarely random — it's usually a test to see what you'll accept, and each yes tends to make the next ask easier to make.",
          takeaway: "What's a version of 'no' you could say to someone you'd been talking to for months, that you'd actually feel able to use?"
        },
        {
          id: "if-i-tell-what-happens",
          title: "If I Tell, What Happens?",
          hook: "Something's been happening online that you know isn't right, but you haven't told anyone. You keep picturing what happens if you say something — the questions, maybe having your phone taken away, maybe people finding out.",
          predictionPrompts: [
            "What's actually true about what happens when someone tells a trusted adult, versus what you're picturing?",
            "Whose fault is this, actually — and does the fear match that answer?"
          ],
          choices: [
            { id: "A", text: "Keep it to yourself and hope it resolves on its own.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Silence is consistently what allows situations like this to continue — it's the one thing that reliably makes things worse." },
            { id: "B", text: "Tell a friend, but ask them not to tell anyone else.", dcera: { D: 2, C: 2, E: 3, R: 2, A: 2 }, reason: "Shares the weight, but a friend your age usually can't actually change what's happening." },
            { id: "C", text: "Tell a parent, teacher, or school counselor directly.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 4 }, reason: "The response most likely to actually change the situation — trusted adults exist specifically for exactly this." },
            { id: "D", text: "Write it down somewhere without telling anyone yet.", dcera: { D: 3, C: 3, E: 2, R: 3, A: 3 }, reason: "A real step toward processing it, even though nothing external has changed yet." },
            { id: "E", text: "Look up what actually happens when someone reports something like this, before deciding.", dcera: { D: 4, C: 4, E: 3, R: 4, A: 5 }, reason: "Replaces imagined fear with real information, which often makes the next step easier to actually take." }
          ],
          consequences: {
            A: "The situation doesn't resolve on its own — it typically continues until someone else becomes involved.",
            B: "Your friend now carries something heavy alone too, and the situation still hasn't reached anyone who can actually help.",
            C: "A good first response from a trusted adult sounds close to: \"Thank you for telling me. I'm glad you did. You're not in trouble.\" — the fear of the reaction is usually worse than the reaction itself.",
            D: "It's a real first step, though the situation still doesn't have anyone actively helping yet.",
            E: "You find real information about the actual process — evidence preservation, who gets involved, what happens next — before deciding."
          },
          concept: "Nothing you've experienced or are experiencing makes you stupid or bad — this is about a pattern designed to work on anyone, not something you should have seen coming. Telling someone is what actually changes what happens next, and the reaction almost every trusted adult gives is relief that you told them, not anger.<br><br><b>If you ever need it:</b> Childline India — 1098 (24&#47;7) · Cybercrime helpline — 1930 (24&#47;7) · iCall (TISS) — 9152987821 · Delhi Women's Helpline — 181. None of these require you to already know what to say.",
          takeaway: "Who is one specific adult you'd actually go to first, if you needed to?"
        },
        {
          id: "the-screenshot-you-kept",
          title: "The Screenshot You Kept",
          hook: "Something did go wrong in an online conversation, and you're now deciding what to actually do about it. You have some of the conversation saved, but not all of it.",
          predictionPrompts: [
            "What matters more right now — how it happened, or what to do next?",
            "What would you tell a friend to do, in this exact situation?"
          ],
          choices: [
            { id: "A", text: "Delete everything — you just want it to be over.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Understandable relief-seeking, but it removes any record if the situation isn't actually over." },
            { id: "B", text: "Save everything you still have access to, with dates if possible.", dcera: { D: 4, C: 5, E: 2, R: 5, A: 3 }, reason: "Evidence with timestamps and profile details is exactly what a cybercrime report or school response needs." },
            { id: "C", text: "Confront the person directly, on your own.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "A real risk to take alone, especially with someone who's already shown a willingness to cross a boundary." },
            { id: "D", text: "Tell a trusted adult and show them what you've saved.", dcera: { D: 5, C: 5, E: 3, R: 5, A: 5 }, reason: "Combines preserved evidence with actual adult support — the option most likely to lead to real resolution." },
            { id: "E", text: "Post about it publicly to warn others.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Public posting can feel like taking control back, but it often complicates a formal report and isn't the same as actually resolving the situation." }
          ],
          consequences: {
            A: "The situation may genuinely be over, but there's no record if anything comes up again, or if the same person targets someone else.",
            B: "The evidence is preserved, which matters for whatever comes next — whether that's a school response, a police report, or simply having a clear record for yourself.",
            C: "It might end the conversation, but you're handling something serious entirely alone, without support if it escalates.",
            D: "The adult can help you decide what happens next — whether that's a school-level response, a formal report, or just support — with real evidence already in hand.",
            E: "It may raise awareness, but it can also alert the person involved, complicate any formal report, and put more of the situation in public than you may want."
          },
          concept: "Evidence preservation isn't about proving anything to anyone yet — it's about making sure that whenever you do decide to tell someone, the record still exists. You shouldn't have to handle the reporting step alone; a trusted adult can help you through the cybercrime helpline (1930) or the school's own process.",
          takeaway: "If a friend came to you with exactly this, what's the very first thing you'd tell them to do?"
        }
      ]
    }
  }
};
