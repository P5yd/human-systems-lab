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
  coreIdea: "Respect isn't a rule you follow — it's a hundred small choices, and you get to choose better ones.",
  levels: {
    L1: {
      label: "Level 1 · Grades 9–10 · Everyday Respect",
      scenarios: [
        {
          id: "the-cricket-conversation",
          title: "The Cricket Conversation",
          hook: "Your friend group is deep in a cricket debate at lunch. Priya, sitting right there, hasn't said a word — you all just assumed she wouldn't have an opinion.",
          predictionPrompts: [
            "What does the assumption actually cost her?",
            "What would change if you asked instead of assumed?"
          ],
          choices: [
            { id: "A", text: "Keep talking — if she wanted to join in, she would.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Assumes silence means disinterest, when it might just mean nobody asked." },
            { id: "B", text: "Ask her directly what she thinks about the match.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 5 }, reason: "Treats her as someone with an opinion worth hearing, instead of deciding for her." },
            { id: "C", text: "Explain the rules to her in case she doesn't follow cricket.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Assumes she needs the explanation instead of checking first — the assumption just moved, it didn't disappear." },
            { id: "D", text: "Make a joke about girls not caring about sports.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns an assumption into a joke at her expense, which costs more than the assumption did." },
            { id: "E", text: "Notice she's been quiet and genuinely ask if she's even into cricket.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Doesn't assume either way — checks, and lets her actual answer decide the direction of the conversation." }
          ],
          consequences: {
            A: "She stays quiet for the rest of lunch. Later you find out she's followed the team for years — longer than most of you.",
            B: "She lights up and turns out to know more about the match than half the group.",
            C: "She's mildly annoyed — she already knows the rules, and now everyone's watching her get 'taught' something she didn't ask about.",
            D: "A couple of people laugh. She doesn't. The conversation moves on, but something closed.",
            E: "She says she actually doesn't follow cricket much, and the conversation shifts to something she does care about — no assumptions needed either way."
          },
          concept: "Girls are not a mystery to be solved — they're people with full interior lives, and the fastest way to find out what someone thinks is to ask, not guess.",
          takeaway: "What's an assumption you've made about someone that turned out to be wrong?"
        },
        {
          id: "when-shes-crying",
          title: "When She's Crying",
          hook: "Nandini is crying at her desk after getting bad news. You have no idea what to do and are frozen in place.",
          predictionPrompts: [
            "Does she need you to fix something, or just not be alone?",
            "What's the difference between helping and performing helpfulness?"
          ],
          choices: [
            { id: "A", text: "Immediately start offering solutions to whatever's wrong.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Jumps to fixing before understanding what's actually needed — sometimes the help nobody asked for isn't help." },
            { id: "B", text: "Awkwardly walk away to give her space, unsure what else to do.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 1 }, reason: "Well-meaning, but leaving reads as discomfort with her feelings, not respect for her space." },
            { id: "C", text: "Sit nearby quietly and just be present without saying much.", dcera: { D: 4, C: 4, E: 5, R: 3, A: 4 }, reason: "Presence without demands is its own kind of support — you don't need the right words to be helpful." },
            { id: "D", text: "Ask 'What happened?' and actually wait for the answer.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Asks and actually waits — the rarest and most useful response in the room." },
            { id: "E", text: "Tell her to cheer up because it's probably not that bad.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Minimizes the feeling instead of making room for it, which teaches her not to show it around you again." }
          ],
          consequences: {
            A: "She cuts you off halfway through — she didn't ask for solutions, and now she has to manage your discomfort too.",
            B: "She notices you leaving and feels more alone than before, even though you meant well.",
            C: "She calms down faster with someone just there, and later tells a friend you were the only one who didn't make it weird.",
            D: "She tells you what happened, and just saying it out loud helps more than any advice would have.",
            E: "She stops crying in front of you, but not because she feels better — because she's learned not to show it around you."
          },
          concept: "Emotions aren't a malfunction to fix — they're information, and being emotionally safe to be around matters more than having the right thing to say.",
          takeaway: "What's your instinct when someone near you is upset — fix, flee, or stay?"
        },
        {
          id: "the-study-timetable",
          title: "The Study Timetable",
          hook: "A friend mentions she's stressed about balancing study time before exams. You immediately start building her a detailed timetable, unasked.",
          predictionPrompts: [
            "Did she ask for a solution, or for someone to hear that she's stressed?",
            "What's the cost of solving a problem nobody asked you to solve?"
          ],
          choices: [
            { id: "A", text: "Build the timetable anyway — it's genuinely useful advice.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Solves a problem before checking if that's the problem she wanted solved." },
            { id: "B", text: "Ask if she wants advice or just wants to vent first.", dcera: { D: 5, C: 4, E: 4, R: 3, A: 5 }, reason: "Checks what kind of support is actually wanted, instead of defaulting to the one you're comfortable giving." },
            { id: "C", text: "Tell her she's overthinking it and it'll be fine.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Dismisses the feeling instead of making space for what's underneath it." },
            { id: "D", text: "Share how you personally manage stress, unprompted.", dcera: { D: 1, C: 2, E: 1, R: 2, A: 2 }, reason: "Redirects her problem into a conversation about you, even with good intentions." },
            { id: "E", text: "Just listen and ask what's making this exam period feel different.", dcera: { D: 5, C: 5, E: 5, R: 3, A: 5 }, reason: "Listens for what's actually underneath the surface complaint, instead of solving the first thing mentioned." }
          ],
          consequences: {
            A: "She says a polite thanks, but the conversation feels finished on your terms, not hers.",
            B: "She says she mostly just needed to say it out loud — and appreciates being asked instead of assumed.",
            C: "She feels dismissed — 'overthinking' wasn't what she needed to hear mid-stress.",
            D: "The conversation quietly becomes about you, not her stress.",
            E: "She ends up naming the actual thing bothering her — it wasn't the timetable, it was a specific subject she's scared of failing."
          },
          concept: "Listening means understanding meaning, not just hearing words — 'What happened?' and 'What do you need right now?' get further than advice nobody asked for.",
          takeaway: "When was the last time you asked someone what kind of support they wanted, instead of guessing?"
        },
        {
          id: "its-not-what-i-meant",
          title: "It's Not What I Meant",
          hook: "Something you said hurt Isha's feelings. When she tells you, your first instinct is to explain that you didn't mean it that way.",
          predictionPrompts: [
            "Does explaining your intention undo the impact?",
            "What does she actually need to hear right now?"
          ],
          choices: [
            { id: "A", text: "Explain your intention first, so she understands you didn't mean harm.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 2 }, reason: "Leads with your own comfort (being understood) before hers (being heard) — the order matters more than it seems." },
            { id: "B", text: "Say 'I hear that it hurt you' before anything else.", dcera: { D: 5, C: 4, E: 5, R: 3, A: 4 }, reason: "Acknowledges the impact first, which is what was actually reported — the intention conversation can come after." },
            { id: "C", text: "Tell her she's misunderstanding what you said.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Turns her hurt into her mistake, which adds a second injury to the first." },
            { id: "D", text: "Apologize immediately, then ask what landed wrong.", dcera: { D: 5, C: 5, E: 4, R: 3, A: 5 }, reason: "Apologizes without conditions, then asks — accountability first, understanding second, in the order that actually repairs things." },
            { id: "E", text: "Get defensive since your intentions were good.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Good intentions used as a shield instead of a starting point — the impact still needs addressing regardless." }
          ],
          consequences: {
            A: "She hears 'you're wrong to be hurt' even though that's not what you meant — the explanation doesn't undo the impact.",
            B: "She feels heard first, which makes the rest of the conversation — including your intention — land better.",
            C: "She feels dismissed on top of already being hurt.",
            D: "She appreciates that you didn't make her prove the hurt was valid before addressing it.",
            E: "The conversation becomes about defending yourself instead of repairing what happened."
          },
          concept: "Conditional respect isn't respect — it's performance approval. Your intention matters, but it doesn't erase what actually landed, and she doesn't have to argue you into believing her.",
          takeaway: "Have you ever prioritized being understood over making sure someone else felt heard first?"
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
            { id: "A", text: "Raise your voice to make sure they understand how serious this is.", dcera: { D: 2, C: 1, E: 1, R: 1, A: 2 }, reason: "Uses volume to make someone afraid of the conversation, which is different from making sure they understand it." },
            { id: "B", text: "Go quiet and give them the silent treatment until they notice.", dcera: { D: 2, C: 2, E: 1, R: 2, A: 1 }, reason: "Withholds instead of communicating — the other person is left to guess what they did wrong." },
            { id: "C", text: "Name the emotion out loud and take a minute before responding.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 5 }, reason: "Names it, buys time, and comes back clearer — the anger gets to exist without controlling the conversation." },
            { id: "D", text: "Say something cutting because it'll sting less than reasoning it out.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Weaponizes words to hurt rather than to resolve — cutting comments punish instead of repair." },
            { id: "E", text: "Confront them immediately, mid-anger, without any pause.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "The anger is real and valid, but confronting mid-heat usually turns a conversation into a collision." }
          ],
          consequences: {
            A: "They get defensive fast, focused on your volume instead of what you're actually upset about.",
            B: "They spend more energy guessing what's wrong than understanding what actually happened.",
            C: "You come back to the conversation clear enough to say what actually matters, and they can actually hear it.",
            D: "The comment lands, but it adds a new wound to the original problem instead of addressing it.",
            E: "The conversation happens, but mostly as venting — the actual issue gets lost in the heat of it."
          },
          concept: "Anger is valid information, not a problem to hide — the line is whether you're using it to be understood, or to make someone afraid.",
          takeaway: "What's your version of 'naming it and buying time' — what actually works for you?"
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
            { id: "A", text: "Join in on the group chat reaction since it's already out there.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Consent to share a private message with you doesn't transfer to consent for it to spread further — participating extends the harm." },
            { id: "B", text: "Ask your friend to delete it and stop sharing it further.", dcera: { D: 5, C: 5, E: 4, R: 4, A: 4 }, reason: "Directly stops the spread instead of just declining to participate in it." },
            { id: "C", text: "Screenshot it yourself to save for later.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 2 }, reason: "Adds a second copy in circulation, which makes the eventual spread harder to contain, not easier." },
            { id: "D", text: "Say nothing — it's not your conversation to get involved in.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Avoids participating, but doesn't use the position you're actually in to slow anything down." },
            { id: "E", text: "Tell the person whose message was shared, so they know it happened.", dcera: { D: 4, C: 4, E: 4, R: 3, A: 4 }, reason: "Doesn't stop the original share, but makes sure the person affected isn't the last to know." }
          ],
          consequences: {
            A: "You've now also spread something that was never meant to leave a private conversation.",
            B: "Your friend is annoyed at first, but the sharing stops — and the person it was about never has to find out from a stranger.",
            C: "Now there are two people who have it saved instead of one, doubling how far it could spread if either shares it.",
            D: "The message keeps circulating without anyone stepping in, and it eventually gets back to the person it was about.",
            E: "They're upset it happened, but grateful to hear it directly from you rather than finding out secondhand."
          },
          concept: "Consent extends beyond physical contact — to texting, screenshots, and what happens to something someone shared with you specifically, not with a group chat.",
          takeaway: "What's something private that was shared with you that you kept that way, even when it would've been easy not to?"
        },
        {
          id: "walking-her-home",
          title: "Walking Her Home",
          hook: "It's getting dark and a friend mentions she has a longer walk home alone tonight. She seems a little tense about it but hasn't asked for anything.",
          predictionPrompts: [
            "What is she actually calculating right now that you might not have to?",
            "What's the difference between offering help and assuming she needs saving?"
          ],
          choices: [
            { id: "A", text: "Offer to walk with her, making it easy to say no if she doesn't want that.", dcera: { D: 4, C: 4, E: 4, R: 4, A: 4 }, reason: "Offers without pressuring — gives her a real, easy choice." },
            { id: "B", text: "Tell her she's probably overreacting — it's not that late.", dcera: { D: 1, C: 1, E: 1, R: 2, A: 1 }, reason: "Dismisses a real, reasonable safety calculation as an overreaction." },
            { id: "C", text: "Wait for her to ask directly, since offering might seem presumptuous.", dcera: { D: 2, C: 2, E: 2, R: 3, A: 2 }, reason: "Waiting for a direct ask assumes asking is easy — for a lot of people, it isn't." },
            { id: "D", text: "Insist on walking her home whether she wants it or not.", dcera: { D: 2, C: 3, E: 1, R: 4, A: 2 }, reason: "Protective, but removes her ability to decide for herself, which is its own kind of disrespect." },
            { id: "E", text: "Ask if she'd feel better with company, and let her answer either way.", dcera: { D: 5, C: 5, E: 5, R: 4, A: 5 }, reason: "Notices, offers, and lets her decide — respects both her safety and her agency at once." }
          ],
          consequences: {
            A: "She says yes, relieved — and mentions this is a calculation she makes almost every day, one you've never had to think about.",
            B: "She doesn't bring it up again, but the tension doesn't go away — it just goes unspoken.",
            C: "She never asks, since asking for that kind of help doesn't come easily, and she walks home the way she was going to anyway.",
            D: "She goes along with it, but it wasn't really her choice — the 'help' removed her say in it.",
            E: "She appreciates being asked rather than told, and decides for herself what she actually needs tonight."
          },
          concept: "Girls run a background safety calculation — routes, timing, who's around — that most boys never have to think about. Noticing that, and making the offer easy to accept or decline, is a small, real act of allyship.",
          takeaway: "What's something you've never had to think twice about, that someone else has to calculate every day?"
        },
        {
          id: "hesitation-isnt-a-yes",
          title: "Hesitation Isn't a Yes",
          hook: "You and someone you're seeing are about to do something neither of you has explicitly talked about. She goes quiet and seems unsure, but doesn't say no.",
          predictionPrompts: [
            "What does silence actually communicate here?",
            "What would 'enthusiastic and informed' look like, compared to just 'not saying no'?"
          ],
          choices: [
            { id: "A", text: "Take the quiet as an unspoken yes and continue.", dcera: { D: 1, C: 1, E: 1, R: 1, A: 1 }, reason: "Hesitation and uncertainty are not consent — this treats the absence of a clear no as a yes, which it isn't." },
            { id: "B", text: "Stop and check in directly about what she wants.", dcera: { D: 5, C: 5, E: 5, R: 5, A: 4 }, reason: "Checks in directly instead of interpreting silence — the only option that actually confirms enthusiasm." },
            { id: "C", text: "Keep going but slow down, waiting to see if she stops you.", dcera: { D: 2, C: 2, E: 2, R: 2, A: 2 }, reason: "Waiting for her to stop you puts the entire responsibility on her, when it should be shared." },
            { id: "D", text: "Ask once, and if she doesn't answer clearly, proceed anyway.", dcera: { D: 1, C: 1, E: 2, R: 1, A: 1 }, reason: "Treats an unclear answer as sufficient, when only a clear, enthusiastic one actually is." },
            { id: "E", text: "Notice the hesitation and pause the moment entirely to talk.", dcera: { D: 5, C: 5, E: 5, R: 5, A: 5 }, reason: "Stops entirely rather than continuing at a different speed — the most respectful response to real uncertainty." }
          ],
          consequences: {
            A: "It turns out she felt frozen, not willing — the difference becomes clear far too late.",
            B: "She's relieved to be asked directly, and tells you honestly she wasn't sure.",
            C: "The ambiguity doesn't resolve — you're both still guessing instead of knowing.",
            D: "A single unclear check-in becomes treated as consent, which it wasn't.",
            E: "The pause itself communicates that her comfort matters more than the moment, and she opens up about how she's actually feeling."
          },
          concept: "Consent is enthusiastic agreement from someone informed and unpressured — hesitation or uncertainty doesn't equal consent, and checking in isn't a mood killer, it's the baseline.",
          takeaway: "What would make it easier for you to pause and check in, in a moment like this?"
        }
      ]
    }
  }
};
