import type { Category, Question } from "@/lib/types";

/**
 * The complete AI Readiness question bank: 72 questions, 12 per category.
 * Sourced from Project Documents/APP-SPECIFICATION.docx (Revised Master Question Bank,
 * targeted refinement edition), Section 2 (question bank) and Section 3 (answer key).
 *
 * Options are stored without "A./B./C./D." prefixes; correctAnswer is a 0-based index
 * (0 = A, 1 = B, 2 = C, 3 = D).
 *
 * Answer positions are balanced 18/18/18/18 across A/B/C/D overall, and per the source
 * table within every category. Re-verify this balance after any future edit.
 *
 * The `explanation` field is intentionally left blank for now: the source document's
 * per-item "basis of the correct answer" text is marked as marker-training material
 * that should not be shown to participants, and the app does not currently surface
 * per-question explanations.
 */
export const questions: Question[] = [
  // ===================== AI Foundations (AI-F) =====================
  {
    id: "AI-F01",
    category: "foundations",
    difficulty: "Foundation",
    type: "Best Explanation",
    question: "A colleague asks how a text-generating AI produces its answers. Which description is most accurate?",
    options: [
      "It predicts the text step by step, using statistical patterns learned during training.",
      "It applies a fixed set of expert rules written by its developers to each request.",
      "It retrieves the closest matching passage from a stored copy of its training documents.",
      "It queries live web sources and rewrites what it finds into original wording.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-F02",
    category: "foundations",
    difficulty: "Foundation",
    type: "Identify the Weakness",
    question:
      'An AI states a figure and adds that it is "95% confident" in the number. What does that stated percentage actually tell you?',
    options: [
      "It is generated text, not a measured reliability score for that claim.",
      "It reflects the system's own internal probability estimate for that particular claim.",
      "It shows the claim was checked against the highest-quality sources available to it.",
      "It indicates the claim appeared consistently across the material it was trained on.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-F03",
    category: "foundations",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "You give an AI a document and ask for a summary; it performs well. You then ask it for the page numbers of a report you never supplied, and it invents them. What best explains the difference?",
    options: [
      "Requests for numerical detail are handled by a separate process from requests for text.",
      "Longer and more open-ended requests produce more errors than short, closed ones.",
      "Summarising is a simpler operation that these systems are specifically trained to perform.",
      "The second asks for detail absent from the input, so the gap is filled.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-F04",
    category: "foundations",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "An AI assistant with no web access is asked about an event from last week and produces a confident, detailed account. What is the most likely explanation?",
    options: [
      "Its training material is refreshed continuously, so recent events are usually covered.",
      "It substituted the most recent comparable event that it does have information about.",
      "It retained details of the event from earlier conversations with other users.",
      "The event postdates its training, so the account was constructed from general patterns.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-F05",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      "A model was trained on a document that you now ask it to quote. It returns a passage that is close to the original but not identical. Why does this happen?",
    options: [
      "Exact recall is limited to material that appeared above a set number of times.",
      "Quoting depends on a retrieval function that most assistants leave switched off.",
      "Training captures statistical patterns rather than storing retrievable copies of the text.",
      "Source documents are deleted once the training process has finished reading them.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-F06",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Scenario",
    question:
      "Deep into a long conversation, an assistant begins contradicting formatting instructions you gave at the start. What is the most likely technical explanation?",
    options: [
      "The session has quietly been moved to a smaller system in order to manage running costs.",
      "Instructions lose weight each time they are processed again in a later turn.",
      "The system has started giving its training material priority over your instructions.",
      "The earliest turns may now sit outside the text the system can attend to.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-F07",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      "You ask for a headline of exactly 42 characters. The assistant repeatedly returns 39 or 45. Why is this particular task unreliable?",
    options: [
      "Numeric instructions are treated as preferences rather than as hard requirements.",
      "Text is grouped into tokens, which removes any ability to work with characters.",
      "The text is generated rather than counted, so the target is approached, not met.",
      "Spaces and punctuation are excluded from the count that the system works with internally.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-F08",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      "You submit the same prompt three times in three separate sessions and receive three noticeably different answers. What does this indicate?",
    options: [
      "The prompt is too ambiguous for the system to resolve the same way twice.",
      "The tool is drawing on a different selection of sources for each request.",
      "Outputs are sampled, so the same input need not produce the same result twice.",
      "The system is refining its response based on the attempts that came before it.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-F09",
    category: "foundations",
    difficulty: "Advanced",
    type: "Identify the Weakness",
    question:
      "An AI gives a wrong answer accompanied by a clear step-by-step account of how it reached that answer. What is the safest interpretation of those steps?",
    options: [
      "They are a record of the computation that produced the answer, containing an error.",
      "They are generated text, and need not match how the answer was produced.",
      "They signal a lower level of certainty than the same answer given without any explanation.",
      "They are dependable for the arithmetic involved but not for the factual claims.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-F10",
    category: "foundations",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "You paste a link and ask for a summary. The response is detailed, but you are not certain the assistant actually opened the page. What is the strongest way to find out?",
    options: [
      "Ask for a detail found only in the document, then check it yourself.",
      "Ask the assistant directly whether it was able to access the page you linked.",
      "Compare the summary against the title, author, and publication date of the page.",
      "Send the same request again and see whether the two summaries agree.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-F11",
    category: "foundations",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "Three different AI assistants give you the same answer to a contested factual question. What does that agreement establish?",
    options: [
      "Little on its own, since the systems may share sources and similar failure modes.",
      "That the claim appeared often in training material and is therefore well established.",
      "That the answer is probably sound, because separate systems arrived at it independently.",
      "That the question was specific enough to be answered reliably by any capable system.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-F12",
    category: "foundations",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "An AI-drafted briefing contains general background, three statistics with named sources, and a closing recommendation. You have time to check only one part of it against outside sources. Which part should that be?",
    options: [
      "The background, since an error there would affect everything that is written on top of it.",
      "The statistics and their named sources, since each is a specific claim that can be checked.",
      "The recommendation, since it is the part that readers are most likely to act on.",
      "The internal consistency of the draft, since contradictions would point to the errors beneath.",
    ],
    correctAnswer: 1,
    explanation: "",
  },

  // ===================== AI Critical Thinking (AI-CT) =====================
  {
    id: "AI-CT01",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "You ask an AI to double-check a statistic it has just given you, and it confirms the figure. How much reassurance does that confirmation provide?",
    options: [
      "None at all, because these systems are built to agree with whatever the user says.",
      "Some, provided the second answer is worded differently from the first one.",
      "Very little, since the confirmation comes from the same process as the original claim.",
      "A useful amount, because the claim has now been examined a second time.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-CT02",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Identify the Best Explanation",
    question:
      "You tell an AI you think its correct answer is wrong. It immediately revises its position to match yours. What does the revision indicate?",
    options: [
      "Disagreement in the prompt causes the system to consult a wider range of material.",
      "These systems tend to move towards stated user positions, so agreement is weak evidence.",
      "The system located a genuine error once it was prompted to reconsider the question.",
      "The original answer was held with low certainty, which is why it changed so readily.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-CT03",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "An AI supports a statistic with a working link to a well-known publisher. What still needs to be checked?",
    options: [
      "Whether the publisher is regarded as credible by others in the relevant field.",
      "Whether other publications have independently reported the same statistic elsewhere.",
      "Whether the page actually contains the statistic as it was given to you.",
      "Whether the page is recent enough for the statistic to still be current.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-CT04",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "Two AI tools give you different answers to the same factual question. Which follow-up is most informative?",
    options: [
      "Check the claim against a primary source that neither of the tools relies on.",
      "Ask each tool to justify its answer and adopt whichever case is better argued.",
      "Ask each tool to state how certain it is and weigh the answers accordingly.",
      "Put the question to a third tool and take the answer that appears twice.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-CT05",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Identify the Weakness",
    question:
      "An AI reports that remote work raised productivity by 47% globally, giving no source, period, or method. What is the most useful next step?",
    options: [
      "Ask for the source, then confirm that the source itself states that figure.",
      "Treat it as an approximation and round it before using it in your own writing.",
      "Ask the system to recalculate the figure from the underlying data it used.",
      "Search for the figure and accept it if similar numbers appear elsewhere online.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-CT06",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Identify the Weakness",
    question:
      "An AI reviews usage data and concludes that using a tool causes higher output. The data shows only that heavy users report higher output. What is the strongest objection?",
    options: [
      "The group of heavy users is almost certainly too small to support a firm conclusion.",
      "These systems are not able to perform statistical analysis on usage data at all.",
      "Self-reported output is not a valid productivity measure in any serious analysis.",
      "Nothing rules out that already productive staff are the ones who adopt the tool first.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-CT07",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      'You ask "Which laptop should I buy?" with no further detail and receive a single confident recommendation. What does that response most likely reflect?',
    options: [
      "Current pricing and availability data drawn from major retailers at the time of asking.",
      "The option most frequently recommended across the material the system learned from.",
      "An aggregation of published reviews weighted towards the most recent models.",
      "Unstated assumptions about your budget and use that were supplied in order to answer.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-CT08",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Identify the Strongest Response",
    question:
      "On a question where the evidence is genuinely contested, which AI response is most useful to someone who has to make a decision?",
    options: [
      "One giving a single clear conclusion, stated plainly and without any qualification.",
      "One listing every viewpoint it can identify without ranking or weighing them.",
      "One naming the main positions, the evidence for each, and what would settle it.",
      "One declining to answer at all and directing the user to a qualified specialist.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-CT09",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "An AI recommends automating a process and states this will save 180,000 a year. You supplied no cost data. What should be established first?",
    options: [
      "Whether the estimate has taken implementation and ongoing maintenance costs into account.",
      "Whether the figure rests on anything you supplied or was simply generated.",
      "Whether other comparable organisations have achieved savings anywhere near that scale.",
      "Whether the automation covers enough of the process to justify making the change.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-CT10",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Identify the Best Explanation",
    question:
      "A screening model trained on ten years of past hiring decisions favours a narrow candidate profile. Where does this most likely originate?",
    options: [
      "Sensitive fields were left in the data instead of being stripped out before training.",
      "The training data records past decisions, including the preferences embedded in them.",
      "The system developed selection preferences during training that the data did not contain.",
      "The system gives recent applications more weight than the older ones in the record.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-CT11",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Identify the Weakness",
    question:
      "You suspect a project failed because of poor communication. You describe the project to an AI and ask why it failed. It confirms your suspicion in convincing detail. What is the main problem?",
    options: [
      "The system lacks the domain expertise needed to analyse this kind of project failure.",
      "A single explanation is inadequate for a failure that probably had several causes.",
      "Your own framing supplied most of the material the explanation was assembled from.",
      "The system has no access to the project records that would test the explanation.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-CT12",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "Fifteen minutes before a meeting, you have an AI summary of a report you have not read. What is the most defensible use of it?",
    options: [
      "Use it to locate the sections that matter, then read those parts of the report itself.",
      "Present it as your own reading, since a summary reflects the content of the report.",
      "Treat it as background only and avoid raising anything from it during the meeting.",
      "Present its main points in the meeting, noting that the summary came from an AI tool.",
    ],
    correctAnswer: 0,
    explanation: "",
  },

  // ===================== Prompting and Communication (AI-PC) =====================
  {
    id: "AI-PC01",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Best Prompt",
    question:
      "You need a LinkedIn post promoting a three-day AI course for teachers. Which instruction is most likely to produce copy you can actually use?",
    options: [
      "A detailed, well-structured post promoting the upcoming course and highlighting all its main benefits.",
      "A post about the course that reflects our brand voice, sounds authoritative, and drives maximum enrolment.",
      "An engaging, professional post about the three-day course, with persuasive language and a strong opening.",
      "A 150-word post for classroom teachers covering two practical uses, one caution, and the closing date.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PC02",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Best Prompt",
    question:
      "An AI-drafted client email has the wrong tone and raises points you did not want mentioned. Which revision instruction is most likely to fix it in one attempt?",
    options: [
      "Rewrite the email so it matches the tone of our usual client correspondence and stays appropriate.",
      "Rewrite for a five-year client: warm but brief, cover the delay and the new date, omit pricing.",
      "This is not right. Try again with a better tone and stay focused on what matters to the reader.",
      "Rewrite this so it sounds more professional and drops anything not relevant to the client.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PC03",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Identify the Strongest Instruction",
    question:
      "You have asked for a 250-word executive summary of a report. Which additional instruction will most improve the result?",
    options: [
      "State which decisions the summary must support and what the reader already knows.",
      "State that the summary should capture the most important content in the report.",
      "State that the tone should be confident and appropriate for a senior audience.",
      "State that the summary must be accurate, well organised, and free of unnecessary detail.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-PC04",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Best Prompt",
    question:
      "You have a technical explanation of neural networks and need a version for fourteen-year-olds. Which instruction is most likely to work?",
    options: [
      "Rewrite this for a younger audience and make the whole explanation as simple as you can.",
      "Rewrite this for fourteen-year-olds, explaining each key term in plain words with an everyday example.",
      "Rewrite this so it is accessible to a general reader with no background in the subject.",
      "Replace every technical term with an everyday comparison and keep all of the sentences short.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PC05",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      "You want AI help producing a market-entry strategy. Why is a staged sequence of prompts usually better than one comprehensive prompt?",
    options: [
      "Long prompts exceed the volume of instruction that these systems can follow reliably.",
      "Staged prompts allow the system to retain more of the earlier conversation.",
      "Shorter outputs are generated to a consistently higher standard than longer ones.",
      "Each stage lets you catch errors before later work is built on them.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PC06",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "A draft has a structure you are happy with but examples that are too generic. Which follow-up is most efficient?",
    options: [
      "Keep the draft, quote the two weakest examples, and supply the real cases replacing them.",
      "Start again with a fuller prompt describing the examples you want from the outset.",
      "Ask for the same draft again with better and more specific examples used throughout.",
      "Ask the system to identify which of its examples are weak and rewrite those sections.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-PC07",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Identify the Weakness",
    question:
      "A prompt asks for a complete report covering every issue, in under 100 words, with nothing left out. What is the main weakness of instructing the system this way?",
    options: [
      "The requirements conflict, so which one gives way is left to the system to settle.",
      "The word limit will be met and the coverage requirement quietly dropped from the output.",
      "A limit of 100 words is too short for the system to produce anything of professional use.",
      "The system will stop and ask which of the two requirements should take priority.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-PC08",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Best Prompt",
    question:
      "You want customer feedback analysed for a weekly team review. Which specification most improves the usefulness of the output?",
    options: [
      "A thorough analysis of the feedback, presented in a clear and well-organised format.",
      "The key insights, ranked by importance, with a short explanation of each one given.",
      "A summary of what customers are saying, with the most serious issues highlighted.",
      "The main themes, roughly how often each appears, and two verbatim examples per theme.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PC09",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Identify the Weakness",
    question:
      "An AI returns a table in exactly the format you specified, with a source listed in every row. What has that compliance told you about the content?",
    options: [
      "That the instruction was followed closely, which tends to accompany careful processing.",
      "That any remaining errors are more likely to be in interpretation than in the facts.",
      "That the system had sufficient information, since it was able to fill every field.",
      "Nothing about whether the entries are accurate or the listed sources support them.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PC10",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "Your prompts keep producing off-target answers, so you keep adding more detail. At what point does adding detail stop helping?",
    options: [
      "Once the added detail no longer changes what a correct answer would look like.",
      "Once the prompt grows longer than the system is able to process in one request.",
      "Once the system starts echoing the wording of the prompt back in its own answer.",
      "Once the prompt starts to contain more background material than actual instruction.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-PC11",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "You ask an AI to critique a proposal it has just written for you. What is this most reliably useful for?",
    options: [
      "Producing a quality score you can compare consistently across successive drafts.",
      "Confirming the proposal is ready once the system reports no significant issues.",
      "Surfacing candidate weaknesses and gaps that you then assess for yourself.",
      "Detecting factual errors, which a system can identify in its own generated output.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-PC12",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      "A manager asks you to use AI to improve the organisation. Departments differ, priorities are unclear, and resources are limited. What most improves your chance of a useful result?",
    options: [
      "Asking the system what information it needs before it attempts to produce a plan.",
      "Assembling as much organisational documentation as possible to give the system context.",
      "Establishing which problem is being solved, for whom, and what success would look like.",
      "Asking for several improvement plans and then reviewing the strongest of them.",
    ],
    correctAnswer: 2,
    explanation: "",
  },

  // ===================== Practical AI Application (AI-PA) =====================
  {
    id: "AI-PA01",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "You have a 40-page report and an hour before a meeting about it. Which use of AI gives the most reliable preparation?",
    options: [
      "Produce an executive summary and speaking notes to take into the meeting.",
      "Summarise each section in turn and work from the combined set of summaries.",
      "List the questions likely to be raised and prepare answers to each of them.",
      "Summarise it, then read for yourself the sections it identifies as decision-relevant.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PA02",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "You ask for ideas to improve engagement in an online course and receive twenty generic suggestions. What most improves the second attempt?",
    options: [
      "Describe your learners, what you have already tried, and what failed, then ask again.",
      "Ask for the original list to be ranked by likely impact on your own programme.",
      "Ask for approaches used successfully by the leading providers in online education.",
      "Ask for twice as many ideas so that the more unusual ones appear in the list.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-PA03",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "A teacher wants AI help drafting weekly lesson activities. Which input is most likely to produce usable drafts?",
    options: [
      "The full curriculum document and a request for activities covering the relevant topics.",
      "The objective, the learner level, the time available, and an activity that worked before.",
      "The topic name and a request for creative activities that will engage the class.",
      "Last term's complete lesson plans and a request for something different this time.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PA04",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "You use AI to draft replies to routine enquiries. Where is human review most valuable?",
    options: [
      "On a random sample each week, reviewed together to identify trends in quality.",
      "On drafts involving commitments, money, or unusual cases, with the rest spot-checked.",
      "On the first weeks of drafts, after which the process can be left to run unattended.",
      "On every draft without exception, whatever the enquiry concerns, before it is sent.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PA05",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Best Decision",
    question: "For which of these tasks is generative AI least suitable as the primary tool?",
    options: [
      "Rewriting a technical explanation for readers without a specialist background.",
      "Producing a first draft of a policy document from a set of internal notes.",
      "Reconciling two financial spreadsheets so that every individual figure matches exactly.",
      "Grouping several hundred open-ended survey comments into a set of recurring themes.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-PA06",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "You use AI to group 800 open-ended survey responses into themes. Which check best protects against a misleading result?",
    options: [
      "Run the analysis a second time and compare the two sets of themes for agreement.",
      "Ask the system whether any responses were left out of the themes it produced.",
      "Ask the system to state how confident it is in each of the themes it identified.",
      "Read a random sample of responses and confirm they sit in the themes assigned to them.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PA07",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "You need a slide deck built from a 30-page report. Which approach makes factual errors easiest to catch before the deck is used?",
    options: [
      "Have the content condensed into an outline you check against the report, then build slides.",
      "Have the report rewritten as slide text, then paste the result into your template.",
      "Build the deck yourself first, then have the wording of each slide improved.",
      "Have the full deck generated first, then review and correct the slides that are wrong.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-PA08",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      "An AI-generated marketing plan assumes market conditions that do not apply where you operate. What does this most likely reflect?",
    options: [
      "Broadly applicable advice was prioritised over specific advice as a design choice.",
      "The material it learned from is weighted towards larger international markets.",
      "Regional variation cannot be handled within a single coherent strategy document.",
      "General patterns were applied because it had no information about your market.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PA09",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "Six months after introducing AI drafting tools, how do you establish whether report quality has actually improved?",
    options: [
      "Compare the number of reports produced in the periods before and after the change.",
      "Survey staff on whether they believe the reports have improved since the tools arrived.",
      "Track the time staff report saving and treat that saving as the measure of quality.",
      "Compare rated samples from before and after, using the same reviewers and criteria.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PA10",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      "A system will automatically hold any customer refund request it flags as likely fraudulent, and a held request is not paid until a manual review some weeks later. Fraud is rare in this refund population. Which design question matters most before deployment?",
    options: [
      "How quickly the system can work through the volume of refund requests each week.",
      "What happens to a legitimate customer whose request is held, and for how long.",
      "What proportion of the genuinely fraudulent requests the system manages to catch each week.",
      "How often the system's scores fall into the range where its judgement is uncertain.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PA11",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Identify the Best Explanation",
    question:
      "You have collected detailed research notes and want AI help writing the analysis. What is the main advantage of pasting the notes in rather than describing the topic?",
    options: [
      "Longer inputs generally produce output that is more detailed and better organised.",
      "The output is grounded in your material instead of assembled from general patterns.",
      "Your notes will be treated as more authoritative than the system's own training material.",
      "Your sources can then be cited accurately, since the system has seen them directly.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PA12",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "A team wants to adopt AI because competitors are using it. Which starting point is most likely to produce real value?",
    options: [
      "Tasks that consume the largest share of staff time, whatever their nature.",
      "Tasks that staff find most frustrating and would most like to stop doing.",
      "Tasks that are frequent, repetitive, and able to absorb a review step.",
      "Tasks where competitors in the sector are already known to be using AI.",
    ],
    correctAnswer: 2,
    explanation: "",
  },

  // ===================== Responsible AI Use (AI-RA) =====================
  {
    id: "AI-RA01",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "Before pasting a confidential client proposal into an AI tool, which consideration matters most?",
    options: [
      "Whether the conversation history can be deleted once the task has been completed.",
      "Whether the terms permit business data and whether inputs are retained.",
      "Whether the identifying client names have been taken out of the document first.",
      "Whether the tool is a paid service, since paid tiers apply stronger protections.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-RA02",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "You want AI help analysing a spreadsheet of customer records containing names, addresses, and purchase history. Which step reduces risk most?",
    options: [
      "Instruct the tool not to store the data or learn anything from what you provide.",
      "Split the data into smaller batches shared across several separate conversations.",
      "Remove the fields the analysis does not require before the data is shared at all.",
      "Replace the names with reference codes and leave the remaining fields intact.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-RA03",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Identify the Best Decision",
    question:
      "An AI-drafted public announcement is published containing a serious factual error. Within the organisation, where should accountability for the error sit?",
    options: [
      "With the person who approved the wording and the organisation that chose to publish it.",
      "With the supplier of the tool, since the error originated in the text it generated.",
      "With the colleague who wrote the prompt, since the output followed from how it was framed.",
      "With the organisation and the supplier jointly, since both contributed to what was published.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-RA04",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "An AI system ranks scholarship applications and a human panel reviews the top-ranked candidates. What is the main weakness of this arrangement?",
    options: [
      "The panel review adds time without changing most of the eventual outcomes.",
      "Applicants ranked low by the system are never seen by the panel.",
      "The ranking may prove inconsistent between separate batches of applications.",
      "The panel may not know which criteria the system applied when it ranked.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-RA05",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Scenario",
    question:
      "An AI system predicts which employees are likely to resign. Which risk is created by acting on the predictions, rather than by the model itself?",
    options: [
      "The data analysed may include information employees did not expect to be used.",
      "The system may be unable to explain why any particular individual was flagged.",
      "Flagged staff may then be treated differently, making the prediction self-fulfilling.",
      "The predictions may lose accuracy as workforce conditions change over time.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-RA06",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      "A recruitment model produces a gender skew. The team removes gender from the input data, and the skew persists. Why?",
    options: [
      "The skew reflects the composition of the applicant pool rather than the model.",
      "Removing a field lowers overall accuracy, which then amplifies existing imbalances.",
      "Other fields act as proxies for gender, so the pattern survives its removal.",
      "The system retained the earlier pattern from before the field was taken out.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-RA07",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "Your organisation has no policy on AI disclosure and the client contract is silent on it. You used an AI tool while preparing a client deliverable. Which consideration most clearly indicates that you should disclose?",
    options: [
      "An AI tool was involved at several points in the drafting and editing of the work.",
      "The absence of a policy leaves the decision to your own discretion either way.",
      "Some claims in the deliverable have not yet been checked against independent sources.",
      "How the work was produced would change the client's judgement of what they are receiving.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-RA08",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Identify the Best Decision",
    question:
      "For a commercial campaign, you commission AI images that closely imitate the distinctive style of a living illustrator. What is the most defensible way to proceed?",
    options: [
      "Proceed, provided the illustrator is not named in the campaign or in the prompts used.",
      "Proceed, since the tool's terms grant you the rights to the images it generates for you.",
      "Abandon the idea, since images generated this way cannot be used commercially at all.",
      "Check what rules and contracts apply here, and consider licensing or commissioning the illustrator.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-RA09",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "A clinical triage AI has regulatory approval for its intended use, and the hospital has agreed clinical oversight and escalation arrangements. It performed strongly in the developer's study, which was run at three urban teaching hospitals. What most needs to be established before it is used at a rural district hospital?",
    options: [
      "Whether it was validated on a larger dataset than the comparable products available.",
      "Whether that performance holds for this hospital's own patient mix and triage workflow.",
      "Whether clinicians can see the reasoning offered for each recommendation it makes.",
      "Whether staff have been trained on the interface before the system goes into use.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-RA10",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      "A teacher runs a suspicious assignment through an AI-detection tool, which returns a score of 92%. What is the most accurate reading of that score?",
    options: [
      "It is dependable for longer submissions but should not be relied on for short ones.",
      "It is fairly strong evidence, though it should be confirmed using a second detection tool.",
      "It is not reliable enough to act on alone, and such tools misclassify human writing.",
      "It indicates the proportion of the submitted text that was generated by an AI system.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-RA11",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "An automated system sends rejection emails, several of which were wrong, and no one has been assigned to the process. Which failure best explains why the errors went uncorrected?",
    options: [
      "No individual is responsible for detecting, correcting, and answering for the system's errors.",
      "The system was put into live use without adequate testing before it was launched.",
      "The rejection messages did not tell recipients that the decision had been automated.",
      "There was no route through which affected applicants could appeal the decision.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-RA12",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "A manager instructs you to upload a confidential database to a public AI tool immediately, bypassing the approval process. What is the most defensible response?",
    options: [
      "Propose an approved route that meets the deadline and record the concern in writing.",
      "Upload a reduced extract instead, on the basis that partial data lowers the exposure.",
      "Refuse and take the matter to the data protection lead without telling the manager.",
      "Comply with the instruction, since it came from someone with clear authority over the work.",
    ],
    correctAnswer: 0,
    explanation: "",
  },

  // ===================== AI Problem-Solving (AI-PS) =====================
  {
    id: "AI-PS01",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "A team says its customer service is poor and it needs AI. Which piece of information would most change what you build?",
    options: [
      "Whether the volume of enquiries handled by the team is currently rising or falling.",
      "Whether the complaints concern response times, answer quality, or inconsistency between agents.",
      "Whether the existing support software can integrate with an AI tool at all.",
      "Whether competitors in the same sector have already adopted AI support tools.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PS02",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Identify the Best Explanation",
    question:
      "A team needs every invoice checked against a fixed numbering rule. Why is generative AI a poor fit for this?",
    options: [
      "The volume of invoices would exceed what an AI tool can handle in one session.",
      "The task involves numbers, and these systems are unable to process numerical data.",
      "The task needs deterministic, repeatable output, which sampled generation does not guarantee.",
      "Invoice records are structured, and these systems only work with unstructured text.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-PS03",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "A school's attendance is falling and no one knows why. What is the most appropriate use of AI at this stage?",
    options: [
      "Predict which students are most likely to be absent during the coming term.",
      "Summarise the national research on attendance and set out its leading explanations.",
      "Generate candidate causes to be tested against the school's own attendance data.",
      "Produce an intervention plan drawn from approaches used in comparable schools.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-PS04",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "An AI recommends a support chatbot to reduce ticket volume. Which question most determines whether it will work?",
    options: [
      "Whether customers would rather use chat than email as a support channel.",
      "How quickly the chatbot can be built and made available to customers.",
      "How the chatbot's tone can be made to reflect the organisation's brand.",
      "What share of current tickets are repeat questions with stable, documented answers.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PS05",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "You want AI help diagnosing a six-month decline in sales. Which input is most useful?",
    options: [
      "The full customer database, so that patterns can be identified independently.",
      "Monthly sales by product alongside pricing, staffing, and marketing changes over the period.",
      "Total sales for the six months compared against the same period a year earlier.",
      "A written account of what the team currently believes caused the decline.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PS06",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Identify the Weakness",
    question:
      "An AI states that sales fell because customers dislike the new pricing. The data it was given contains only sales figures and dates. What is the status of that statement?",
    options: [
      "A finding supported by the data, since the decline followed the price change.",
      "A conclusion that is probably right but which needs a stated confidence level.",
      "An error, because no conclusion should be drawn from data that is this incomplete.",
      "A hypothesis drawn from timing, with nothing in the data about customer views.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PS07",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Multi-Step Decision",
    question:
      "A team receives hundreds of similar support requests each week and wants AI help. Which first build is strongest?",
    options: [
      "Handle the three most common request types from approved answers, routing all else to staff.",
      "Handle requests from customers who have opted in to receiving automated responses.",
      "Handle every request type from launch, with a person checking each reply before it goes.",
      "Handle requests received outside working hours only, so that fewer customers are affected.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
  {
    id: "AI-PS08",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Identify the Best Explanation",
    question:
      "An AI assistant answers most policy questions correctly but is consistently wrong about one specific policy. What does that pattern suggest?",
    options: [
      "Its general accuracy is lower than the overall pass rate makes it appear.",
      "The material it draws on for that policy is missing, outdated, or contradicted elsewhere.",
      "The questions about that policy are phrased in a way it is unable to parse.",
      "That policy is more complex than the others and exceeds its reasoning capacity.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PS09",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "Three vendors offer AI-powered internal knowledge search. What best distinguishes them for your purposes?",
    options: [
      "Running a staff trial and comparing satisfaction ratings after a month of use.",
      "Testing each on your own documents and questions, scored against known correct answers.",
      "Comparing the published benchmark results and the accuracy claims of each vendor.",
      "Comparing feature lists, integration requirements, and the total cost of ownership.",
    ],
    correctAnswer: 1,
    explanation: "",
  },
  {
    id: "AI-PS10",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      "An AI tool forecasts demand as a range for each product line and notes that its estimate is weakest for lines launched in the past year. A large inventory order will be based on it. What is the most appropriate use of the forecast?",
    options: [
      "Order to the midpoint of each range, since that is the tool's most probable single figure.",
      "Ask the tool to narrow the ranges so that the order quantities can be set precisely.",
      "Use the forecast for the established lines and leave the newer lines out entirely.",
      "Order against the ranges, and check the lines it flags as weakest against other evidence.",
    ],
    correctAnswer: 3,
    explanation: "",
  },
  {
    id: "AI-PS11",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "A month after adopting AI to produce training materials, the output is fast but sometimes inaccurate. What is the most useful first step?",
    options: [
      "Add a second reviewer so that errors are caught before the materials are issued.",
      "Switch to a different tool and see whether the same inaccuracies appear in its output.",
      "Collect the inaccurate passages and trace each to the prompt, the source, or the tool.",
      "Reduce the weekly volume so that staff have more time to check each draft.",
    ],
    correctAnswer: 2,
    explanation: "",
  },
  {
    id: "AI-PS12",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "An organisation is planning a large AI deployment. Which sequencing decision most reduces the risk of wasted investment?",
    options: [
      "Running a limited pilot against success criteria agreed before the pilot begins.",
      "Beginning in the department that is most enthusiastic about the technology.",
      "Selecting the vendor with the strongest track record within the same sector.",
      "Training all affected staff thoroughly before the system is brought into use.",
    ],
    correctAnswer: 0,
    explanation: "",
  },
];

export function getQuestionsByCategory(category: Category): Question[] {
  return questions.filter((q) => q.category === category);
}
