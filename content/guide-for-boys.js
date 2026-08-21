// Module: A Guide for Boys
// New module added 2026-08-20, adapted from the external guide at
// thehumansystemslab.netlify.app/guides/guide_for_boys — an 8-chapter
// mentorship guide on respect, emotional awareness, consent, and healthy
// masculinity for boys aged 11-18. Scenarios are built directly from the
// guide's own embedded case studies (Rohan/Priya, Arjun/Nandini,
// Vikram's timetable, Dev/Isha) plus its later chapters on anger,
// digital consent, safety allyship, and consent itself. Same schema:
// dcera + reason per choice, choice→consequence, concept revealed after.

const MODULE_GUIDE_FOR_BOYS = {
  id: "guide-for-boys",
  title: "A Guide for Boys",
  coreIdea: "Respect isn't a rule you follow. It's a hundred small choices, and you get to choose better ones.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Everyday Respect",
      scenarios: [
        {
          id: "the-cricket-conversation",
          title: "The Cricket Conversation",
          hook: "Your friend group is deep in a cricket debate at lunch. Priya is sitting right there, but she hasn't said a word. You all just assumed she wouldn't have an opinion.",
          predictionPrompts: [
            "What does that assumption actually cost her?",
            "What would change if you asked instead of assumed?"
          ],
          choices: [
            { id: "A", text: "Keep talking. If she wanted to join in, she would.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Assumes silence means she isn't interested. Maybe nobody just asked her." },
            { id: "B", text: "Ask her directly what she thinks about the match.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 5 }, reason: "Treats her like someone with an opinion worth hearing, instead of deciding for her." },
            { id: "C", text: "Explain the rules to her in case she doesn't follow cricket.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Assumes she needs the explanation instead of checking first. The assumption just moved, it didn't go away." },
            { id: "D", text: "Make a joke about girls not caring about sports.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns an assumption into a joke that costs her, which is worse than the assumption itself." },
            { id: "E", text: "Notice she's been quiet and genuinely ask if she's even into cricket.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Doesn't assume either way. It checks first, and lets her real answer guide the conversation." }
          ],
          consequences: {
            A: "She stays quiet for the rest of lunch. Later you find out she's followed the team for years, longer than most of you.",
            B: "She lights up and turns out to know more about the match than half the group.",
            C: "She's mildly annoyed. She already knows the rules, and now everyone's watching her get 'taught' something she didn't ask for.",
            D: "A couple of people laugh. She doesn't. The conversation moves on, but something closed.",
            E: "She says she actually doesn't follow cricket much, and the conversation shifts to something she does care about. No assumptions needed either way."
          },
          concept: "Girls are not a mystery to solve. They're people with full inner lives, and the fastest way to find out what someone thinks is to ask, not guess.",
          takeaway: "What's an assumption you've made about someone that turned out to be wrong?"
        },
        {
          id: "when-shes-crying",
          title: "When She's Crying",
          hook: "Nandini is crying at her desk after getting bad news. You have no idea what to do, and you're frozen in place.",
          predictionPrompts: [
            "Does she need you to fix something, or just not be alone?",
            "What's the difference between actually helping and just looking helpful?"
          ],
          choices: [
            { id: "A", text: "Immediately start offering solutions to whatever's wrong.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Jumps to fixing things before understanding what she actually needs. Help nobody asked for isn't always help." },
            { id: "B", text: "Awkwardly walk away to give her space, unsure what else to do.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 1 }, reason: "Well-meaning, but leaving can look like you're uncomfortable with her feelings, not that you're respecting her space." },
            { id: "C", text: "Sit nearby quietly and just be present without saying much.", dcera: { D: 4, C: 4, E: 5, R: 3, A: 4 }, reason: "Just being there, without asking anything of her, is its own kind of support. You don't need the right words to help." },
            { id: "D", text: "Ask 'What happened?' and actually wait for the answer.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Asks, then actually waits for the answer. That's rare, and it's the most useful thing you can do." },
            { id: "E", text: "Tell her to cheer up because it's probably not that bad.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Brushes off her feeling instead of making room for it. That teaches her not to show her feelings around you again." }
          ],
          consequences: {
            A: "She cuts you off halfway through. She didn't ask for solutions, and now she has to manage your discomfort too.",
            B: "She notices you leaving and feels more alone than before, even though you meant well.",
            C: "She calms down faster with someone just there, and later tells a friend you were the only one who didn't make it weird.",
            D: "She tells you what happened, and just saying it out loud helps more than any advice would have.",
            E: "She stops crying in front of you, but not because she feels better. It's because she's learned not to show it around you."
          },
          concept: "Emotions aren't something broken that needs fixing. They're information. Being someone people feel safe around matters more than saying the right thing.",
          takeaway: "When someone near you is upset, what's your instinct? Fix it, leave, or stay?"
        },
        {
          id: "the-study-timetable",
          title: "The Study Timetable",
          hook: "A friend tells you she's stressed about balancing study time before exams. You immediately start building her a detailed timetable, without her asking.",
          predictionPrompts: [
            "Did she ask for a solution, or for someone to hear that she's stressed?",
            "What's the cost of solving a problem nobody asked you to solve?"
          ],
          choices: [
            { id: "A", text: "Build the timetable anyway. It's genuinely useful advice.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Solves a problem before checking if that's actually the problem she wants solved." },
            { id: "B", text: "Ask if she wants advice or just wants to vent first.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 5 }, reason: "Checks what kind of support she actually wants, instead of defaulting to the one that's easiest for you to give." },
            { id: "C", text: "Tell her she's overthinking it and it'll be fine.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Dismisses her feeling instead of making space for what's underneath it." },
            { id: "D", text: "Share how you personally manage stress, even though she didn't ask.", dcera: { D: 1, C: 2, E: 1, R: 2, A: 2 }, reason: "Turns her problem into a conversation about you, even with good intentions." },
            { id: "E", text: "Just listen and ask what's making this exam period feel different.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Listens for what's really underneath the first thing she said, instead of jumping to solve it." }
          ],
          consequences: {
            A: "She says a polite thanks, but the conversation feels finished on your terms, not hers.",
            B: "She says she mostly just needed to say it out loud, and she appreciates being asked instead of assumed.",
            C: "She feels dismissed. 'Overthinking' wasn't what she needed to hear while stressed.",
            D: "The conversation quietly becomes about you, not her stress.",
            E: "She ends up naming the real thing bothering her. It wasn't the timetable, it was one subject she's scared of failing."
          },
          concept: "Listening means understanding what someone means, not just hearing their words. 'What happened?' and 'What do you need right now?' get you further than advice nobody asked for.",
          takeaway: "When was the last time you asked someone what kind of support they wanted, instead of guessing?"
        },
        {
          id: "its-not-what-i-meant",
          title: "It's Not What I Meant",
          hook: "Something you said hurt Isha's feelings. When she tells you, your first instinct is to explain that you didn't mean it that way.",
          predictionPrompts: [
            "Does explaining what you meant undo how it made her feel?",
            "What does she actually need to hear right now?"
          ],
          choices: [
            { id: "A", text: "Explain your intention first, so she understands you didn't mean harm.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Puts your own comfort, being understood, before hers, being heard. The order matters more than it seems." },
            { id: "B", text: "Say 'I hear that it hurt you' before anything else.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "Acknowledges how it made her feel first, since that's what she actually told you. The conversation about your intention can come after." },
            { id: "C", text: "Tell her she's misunderstanding what you said.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns her hurt into her mistake. That adds a second hurt on top of the first." },
            { id: "D", text: "Apologize right away, then ask what landed wrong.", dcera: { D: 5, C: 5, E: 4, R: 3, A: 5 }, reason: "Apologizes with no conditions attached, then asks what happened. Owning it first and understanding it second is the order that actually repairs things." },
            { id: "E", text: "Get defensive, since your intentions were good.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Uses good intentions as a shield instead of a starting point. The impact still needs to be addressed either way." }
          ],
          consequences: {
            A: "She hears 'you're wrong to be hurt,' even though that's not what you meant. The explanation doesn't undo how it made her feel.",
            B: "She feels heard first, which makes the rest of the conversation, including what you meant, land better.",
            C: "She feels dismissed on top of already being hurt.",
            D: "She appreciates that you didn't make her prove the hurt was real before addressing it.",
            E: "The conversation becomes about defending yourself instead of repairing what happened."
          },
          concept: "Respect with conditions isn't real respect, it's just performance. What you meant matters, but it doesn't erase what actually happened. She shouldn't have to argue you into believing her.",
          takeaway: "Have you ever cared more about being understood than making sure someone else felt heard first?"
        }
      ]
    },
    L2: {
      label: "Level 2 · Grades 11–12 · Respect Under Pressure",
      scenarios: [
        {
          id: "what-anger-is-for",
          title: "What Anger Is For",
          hook: "You're genuinely angry at a friend for something unfair they did. You can feel it building as you're about to talk to them about it.",
          predictionPrompts: [
            "What's the difference between expressing anger and using it to control someone?",
            "What do you actually want to happen after this conversation?"
          ],
          choices: [
            { id: "A", text: "Raise your voice to make sure they understand how serious this is.", dcera: { D: 2, C: 1, E: 1, R: 1, A: 2 }, reason: "Uses volume to make someone afraid, which is different from making sure they understand you." },
            { id: "B", text: "Go quiet and give them the silent treatment until they notice.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 1 }, reason: "Holds back instead of communicating. The other person is left guessing what they did wrong." },
            { id: "C", text: "Name the emotion out loud and take a minute before responding.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Names the anger, takes time, then comes back clearer. The anger gets to exist without taking over the conversation." },
            { id: "D", text: "Say something cutting, since it's easier than working through it calmly.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Uses words to hurt instead of to fix things. A cutting comment punishes instead of repairing anything." },
            { id: "E", text: "Confront them right away, mid-anger, without pausing first.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "The anger is real and it's valid, but confronting someone in the heat of it usually turns a conversation into a collision." }
          ],
          consequences: {
            A: "They get defensive fast, focused on your volume instead of what you're actually upset about.",
            B: "They spend more energy guessing what's wrong than understanding what actually happened.",
            C: "You come back to the conversation clear enough to say what actually matters, and they can actually hear it.",
            D: "The comment lands, but it adds a new hurt on top of the original problem instead of fixing it.",
            E: "The conversation happens, but it turns mostly into venting. The real issue gets lost in the heat of the moment."
          },
          concept: "Anger is real and valid, not something to hide. The line is whether you use it to be understood, or to make someone afraid.",
          takeaway: "What's your version of naming it and buying time? What actually works for you?"
        },
        {
          id: "the-text-you-shouldnt-have-screenshotted",
          title: "The Text You Shouldn't Have Screenshotted",
          hook: "A friend screenshots a private conversation someone had with them and starts sharing it in a group chat, laughing about it.",
          predictionPrompts: [
            "What did that person agree to when they sent that message?",
            "What happens to trust once something private goes into a group chat?"
          ],
          choices: [
            { id: "A", text: "Join in on the group chat reaction, since it's already out there.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Someone agreeing to share a private message with you doesn't mean they agreed to let it spread further. Joining in extends the harm." },
            { id: "B", text: "Ask your friend to delete it and stop sharing it further.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "Directly stops it from spreading, instead of just refusing to take part." },
            { id: "C", text: "Screenshot it yourself to save for later.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 2 }, reason: "Adds a second copy out there, which makes it harder to contain if it spreads, not easier." },
            { id: "D", text: "Say nothing, since it's not your conversation to get involved in.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Avoids joining in, but doesn't use the position you're in to actually slow anything down." },
            { id: "E", text: "Tell the person whose message was shared, so they know it happened.", dcera: { D: 4, C: 4, E: 4, R: 3, A: 4 }, reason: "Doesn't stop the original sharing, but makes sure the person it happened to isn't the last one to find out." }
          ],
          consequences: {
            A: "You've now also spread something that was never meant to leave a private conversation.",
            B: "Your friend is annoyed at first, but the sharing stops. The person it was about never has to find out from a stranger.",
            C: "Now there are two people who have it saved instead of one, doubling how far it could spread if either shares it.",
            D: "The message keeps circulating without anyone stepping in, and it eventually gets back to the person it was about.",
            E: "They're upset it happened, but grateful to hear it from you directly instead of finding out secondhand."
          },
          concept: "Consent isn't just about physical contact. It covers texting too, like screenshots, and what happens to something someone shared with you, not with a whole group chat.",
          takeaway: "Has someone ever shared something private with you that you kept private, even when it would've been easy not to?"
        },
        {
          id: "walking-her-home",
          title: "Walking Her Home",
          hook: "It's getting dark, and a friend mentions she has a long walk home alone tonight. She seems a little tense about it, but she hasn't asked for anything.",
          predictionPrompts: [
            "What is she working out right now that you might never have to think about?",
            "What's the difference between offering help and assuming she needs saving?"
          ],
          choices: [
            { id: "A", text: "Offer to walk with her, making it easy to say no if she doesn't want that.", dcera: { D: 4, C: 4, E: 4, R: 4, A: 4 }, reason: "Offers without any pressure. Gives her a real, easy choice." },
            { id: "B", text: "Tell her she's probably overreacting, since it's not that late.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Dismisses a real, reasonable safety concern as an overreaction." },
            { id: "C", text: "Wait for her to ask directly, since offering might seem pushy.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Waiting for her to ask directly assumes asking is easy. For a lot of people, it isn't." },
            { id: "D", text: "Insist on walking her home whether she wants it or not.", dcera: { D: 2, C: 3, E: 1, R: 4, A: 2 }, reason: "Comes from a protective place, but takes away her ability to decide for herself. That's its own kind of disrespect." },
            { id: "E", text: "Ask if she'd feel better with company, and let her answer either way.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "Notices, offers, and lets her decide. Respects her safety and her right to choose, both at once." }
          ],
          consequences: {
            A: "She says yes, relieved, and mentions this is something she thinks through almost every day, something you've never had to think about.",
            B: "She doesn't bring it up again, but the tension doesn't go away. It just goes unspoken.",
            C: "She never asks, since asking for that kind of help doesn't come easily to her, and she walks home the way she was already planning to.",
            D: "She goes along with it, but it wasn't really her choice. The 'help' took away her say in it.",
            E: "She appreciates being asked rather than told, and decides for herself what she actually needs tonight."
          },
          concept: "Girls are often quietly working out safety, like routes, timing, and who's around, in a way most boys never have to think about. Noticing that, and making your offer easy to accept or turn down, is a small but real way to be a good ally.",
          takeaway: "What's something you've never had to think twice about, that someone else has to think through every day?"
        },
        {
          id: "hesitation-isnt-a-yes",
          title: "Hesitation Isn't a Yes",
          hook: "You and someone you're seeing are about to do something you haven't clearly talked about together. She goes quiet and seems unsure, but she doesn't say no.",
          predictionPrompts: [
            "What does silence actually communicate here?",
            "What would 'enthusiastic and informed' look like, compared to someone just not saying no?"
          ],
          choices: [
            { id: "A", text: "Take the quiet as an unspoken yes and continue.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Hesitation and uncertainty are not consent. This treats the absence of a clear no as a yes, which it isn't." },
            { id: "B", text: "Stop and check in directly about what she wants.", dcera: { D: 5, C: 5, E: 5, R: 5, A: 4 }, reason: "Checks in directly instead of guessing what her silence means. It's the only option that actually confirms she's willing." },
            { id: "C", text: "Keep going but slow down, waiting to see if she stops you.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Waiting for her to stop you puts the whole responsibility on her, when it should be shared by both of you." },
            { id: "D", text: "Ask once, and if she doesn't answer clearly, proceed anyway.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Treats an unclear answer as good enough, when only a clear, willing yes actually is." },
            { id: "E", text: "Notice the hesitation and pause the moment entirely to talk.", dcera: { D: 5, C: 5, E: 5, R: 5, A: 5 }, reason: "Stops completely instead of just continuing at a different speed. That's the most respectful response to real uncertainty." }
          ],
          consequences: {
            A: "It turns out she felt frozen, not willing. The difference becomes clear far too late.",
            B: "She's relieved to be asked directly, and tells you honestly she wasn't sure.",
            C: "Nothing gets clearer. You're both still guessing instead of knowing.",
            D: "One unclear check-in gets treated as consent, which it wasn't.",
            E: "The pause itself tells her that her comfort matters more than the moment, and she opens up about how she's really feeling."
          },
          concept: "Consent means someone says yes freely, clearly, and without pressure, and actually knows what they're agreeing to. Hesitation or uncertainty is not consent. Checking in isn't a mood killer, it's the baseline.",
          takeaway: "What would make it easier for you to pause and check in, in a moment like this?"
        }
      ]
    }
  }
};
