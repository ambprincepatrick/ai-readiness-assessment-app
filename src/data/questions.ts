import type { Category, Question } from "@/lib/types";

/**
 * The complete AI Readiness question bank: 72 questions, 12 per category.
 * Sourced verbatim from Project Documents/QUESTIONS.docx.
 * Options are stored without "A./B./C./D." prefixes; correctAnswer is a 0-based index.
 */
export const questions: Question[] = [
  // ===================== AI Foundations (AI-F) =====================
  {
    id: "AI-F01",
    category: "foundations",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "Which statement best describes modern generative AI tools?",
    options: [
      "They understand every subject in the same way humans do.",
      "They generate outputs by identifying and using patterns learned from large amounts of data.",
      "They search the internet and copy information exactly as it appears.",
      "They only provide answers that have been independently verified.",
    ],
    correctAnswer: 1,
    explanation:
      "Generative AI works by learning patterns from data and generating likely outputs. It does not automatically understand like a human, search the internet by default, or guarantee verified answers.",
  },
  {
    id: "AI-F02",
    category: "foundations",
    difficulty: "Foundation",
    type: "Identify the Weakness",
    question:
      "An AI gives a detailed answer in a very confident and professional tone. What can you reasonably conclude from its tone alone?",
    options: [
      "The answer is likely accurate because AI is confident.",
      "The answer has been checked against reliable sources.",
      "Nothing certain about its accuracy. Confident wording is not proof that the answer is correct.",
      "The AI must have used live information.",
    ],
    correctAnswer: 2,
    explanation:
      "One of the most important AI literacy skills is separating confidence from correctness.",
  },
  {
    id: "AI-F03",
    category: "foundations",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "You ask an AI to provide five academic references for a research topic. The references look realistic, but when you search for two of them, they do not exist. What is the most likely explanation?",
    options: [
      "The AI is deliberately trying to deceive you.",
      "The AI may have generated plausible but false information, sometimes called a hallucination.",
      "The search engine is unable to find academic references.",
      "The references are probably correct because they sound academically credible.",
    ],
    correctAnswer: 1,
    explanation:
      "AI can generate information that appears convincing but is inaccurate or completely fabricated.",
  },
  {
    id: "AI-F04",
    category: "foundations",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "Which task is most suitable for using generative AI as an assistant?",
    options: [
      "Making a final medical diagnosis without professional review.",
      "Generating ideas and a first draft for a presentation that a human will review and improve.",
      "Automatically deciding whether a person should be hired without human oversight.",
      "Making a legal judgement with no expert involvement.",
    ],
    correctAnswer: 1,
    explanation:
      "AI is useful for supporting human work, particularly tasks such as brainstorming and drafting. High-stakes decisions require appropriate human oversight.",
  },
  {
    id: "AI-F05",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Identify the Weakness",
    question:
      'Someone says: "An AI tool was trained on millions of documents, so it understands every fact contained in those documents." What is the biggest problem with this statement?',
    options: [
      "AI cannot process documents.",
      "Having access to patterns in training data does not mean the AI stores, understands, or can accurately recall every fact.",
      "AI tools are trained on only one document at a time.",
      "The more data AI uses, the less useful it becomes.",
    ],
    correctAnswer: 1,
    explanation:
      "Training on large amounts of data is not the same as perfect understanding or reliable factual recall.",
  },
  {
    id: "AI-F06",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "You need the current exchange rate between two currencies for an important financial transaction. What is the strongest approach?",
    options: [
      "Ask a generative AI tool and use the first number it gives you.",
      "Use an AI-generated estimate because AI processes large amounts of information.",
      "Check a reliable, current financial source and verify the rate before acting.",
      "Ask several AI tools and use the number that appears most often.",
    ],
    correctAnswer: 2,
    explanation:
      "For time-sensitive information, you need a reliable and current source. Multiple AI outputs agreeing does not guarantee accuracy.",
  },
  {
    id: "AI-F07",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Best Prompt",
    question: "Which instruction is most likely to help an AI produce a useful project summary?",
    options: [
      '"Summarise this."',
      '"Make this better."',
      '"Summarise this 3,000-word project report in 200 words for senior managers. Focus on key results, risks, and recommended next steps. Use clear, non-technical language."',
      '"Read everything carefully and give me the perfect answer."',
    ],
    correctAnswer: 2,
    explanation:
      "Useful AI instructions usually provide context, audience, objective, scope, constraints, and desired output.",
  },
  {
    id: "AI-F08",
    category: "foundations",
    difficulty: "Intermediate",
    type: "Scenario",
    question:
      'You ask an AI: "Write a reply to the client." The response is technically well-written but uses the wrong tone and misses important background information. What is the best explanation?',
    options: [
      "AI can never write professional replies.",
      "The AI may not have been given enough relevant context, instructions, or information about the situation.",
      "The AI deliberately ignored the user's instructions.",
      "Longer AI answers are always less accurate.",
    ],
    correctAnswer: 1,
    explanation: "AI output quality depends heavily on the quality and completeness of the context provided.",
  },
  {
    id: "AI-F09",
    category: "foundations",
    difficulty: "Advanced",
    type: "Identify the Correct Explanation",
    question: "Why can an AI generate a convincing answer that is factually wrong?",
    options: [
      "Because AI always intentionally invents information when it is uncertain.",
      "Because generative AI produces outputs based on learned patterns and likely relationships, which can sometimes result in plausible but incorrect information.",
      "Because AI can only repeat information word for word from its training data.",
      "Because every AI answer comes directly from a live search engine.",
    ],
    correctAnswer: 1,
    explanation: "This tests whether the user understands a central limitation of generative AI.",
  },
  {
    id: "AI-F10",
    category: "foundations",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "You ask an AI assistant to analyse a spreadsheet, but you have not uploaded the spreadsheet or provided any of its contents. The AI gives you a detailed analysis anyway. What should you do?",
    options: [
      "Trust the analysis because the AI produced detailed findings.",
      "Assume the AI accessed the spreadsheet automatically.",
      "Recognise that the AI may not have had access to the actual data and check what information or tools were available to it.",
      "Use the analysis but remove any numbers that look suspicious.",
    ],
    correctAnswer: 2,
    explanation: "Users must understand what information and tools an AI system actually has access to.",
  },
  {
    id: "AI-F11",
    category: "foundations",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "An AI system produces an excellent summary of a complex business proposal. The proposal will influence a major investment decision. What is the best use of the AI output?",
    options: [
      "Make the investment decision directly from the AI summary.",
      "Treat the AI summary as a useful starting point, then review the original proposal, verify important claims, and apply appropriate human judgement.",
      "Ask the AI to make the summary longer and then trust it.",
      "Reject the AI summary because AI should never be used for important work.",
    ],
    correctAnswer: 1,
    explanation:
      "Strong AI competence means knowing both how to use AI and when human review remains necessary.",
  },
  {
    id: "AI-F12",
    category: "foundations",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "You receive an AI-generated answer containing several factual claims that you intend to publish publicly. Which sequence represents the strongest approach?",
    options: [
      "Publish → Wait for corrections → Edit if necessary",
      "Rewrite for better grammar → Publish → Check facts later",
      "Identify important claims → Verify them using reliable sources → Correct any errors → Review the final context → Publish",
      "Ask another AI to confirm the first AI → Publish",
    ],
    correctAnswer: 2,
    explanation:
      "AI can support drafting, but important factual claims should be independently verified before publication.",
  },

  // ===================== AI Critical Thinking (AI-CT) =====================
  {
    id: "AI-CT01",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "An AI gives you a detailed answer containing statistics you want to use in a public presentation. What is the best first step before using the statistics?",
    options: [
      "Use them because AI can process large amounts of information.",
      "Verify the important statistics using reliable and appropriate sources.",
      "Ask the AI to repeat the statistics to confirm them.",
      "Use only the statistics that appear most convincing.",
    ],
    correctAnswer: 1,
    explanation:
      "AI-generated statistics should not be treated as automatically verified. Important claims require independent checking.",
  },
  {
    id: "AI-CT02",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Identify the Best Explanation",
    question:
      "An AI answers a question confidently and gives a detailed explanation. Later, you discover that its main conclusion is wrong. What is the most important lesson?",
    options: [
      "Detailed answers are usually less accurate than short answers.",
      "AI confidence and explanation quality are not reliable proof of factual accuracy.",
      "AI tools should never be used for research.",
      "The AI intentionally wanted to mislead you.",
    ],
    correctAnswer: 1,
    explanation:
      "A polished explanation can still be wrong. Users must separate presentation quality from evidence quality.",
  },
  {
    id: "AI-CT03",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "An AI provides three website links as sources for an important claim. What is the strongest way to evaluate the sources?",
    options: [
      "Trust them because the AI provided direct links.",
      "Check whether the links work, identify who published the information, assess the source's credibility, and confirm that the source actually supports the claim.",
      "Count how many links the AI provided. More links mean the answer is more reliable.",
      "Ask another AI whether the links are trustworthy.",
    ],
    correctAnswer: 1,
    explanation:
      "A source can exist and still be irrelevant, unreliable, outdated, or fail to support the claim being made.",
  },
  {
    id: "AI-CT04",
    category: "criticalThinking",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "You ask two different AI tools the same factual question and receive different answers. What should you do?",
    options: [
      "Choose the answer from the more popular AI tool.",
      "Choose the longer answer.",
      "Treat the disagreement as a reason to investigate and verify the claim using appropriate reliable sources.",
      "Average both answers and assume the middle answer is correct.",
    ],
    correctAnswer: 2,
    explanation:
      "AI disagreement does not tell you which answer is correct. It tells you that further verification may be necessary.",
  },
  {
    id: "AI-CT05",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Identify the Weakness",
    question:
      'An AI writes: "Remote work has increased employee productivity by 47% globally." The answer does not provide a source, study, timeframe, or explanation of how the figure was calculated. What is the biggest problem?',
    options: [
      "The sentence is too short.",
      "The exact figure may be unsupported, misleading, or impossible to evaluate without evidence and context.",
      "AI should never provide percentages.",
      "Global statistics are always inaccurate.",
    ],
    correctAnswer: 1,
    explanation:
      "Precise numbers can create a false sense of authority. Critical thinkers ask where the number came from and what it actually means.",
  },
  {
    id: "AI-CT06",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      'An AI analyses data and finds that employees who use AI tools more frequently also report higher productivity. The AI concludes: "Using AI causes higher productivity." What is the best response?',
    options: [
      "Accept the conclusion because the data shows a clear relationship.",
      "Recognise that a relationship between two factors does not automatically prove that one caused the other.",
      "Reject all data analysis produced with AI.",
      "Assume productivity caused people to stop using AI.",
    ],
    correctAnswer: 1,
    explanation: "The AI may identify a correlation, but other factors could explain the relationship.",
  },
  {
    id: "AI-CT07",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Scenario",
    question:
      'You ask AI: "Which is the best university for me?" It gives you a confident recommendation. What is the biggest critical-thinking problem with immediately accepting the answer?',
    options: [
      "AI cannot discuss universities.",
      "The recommendation may be based on assumptions because the AI does not yet know your priorities, budget, programme, location preferences, or other relevant criteria.",
      "Universities cannot be compared.",
      "AI recommendations are always biased.",
    ],
    correctAnswer: 1,
    explanation:
      "A good answer depends on the quality of the question and the information available. Missing context can produce an answer that sounds useful but does not fit the user's actual needs.",
  },
  {
    id: "AI-CT08",
    category: "criticalThinking",
    difficulty: "Intermediate",
    type: "Identify the Strongest AI Response",
    question:
      "You ask an AI about a complex issue where the available evidence is incomplete. Which response demonstrates the strongest intellectual reliability?",
    options: [
      '"There is only one correct answer, and I am completely certain."',
      '"Based on the available information, this appears to be the most likely explanation, but there are important uncertainties and alternative interpretations."',
      '"I have analysed everything on the internet, so this conclusion is final."',
      '"Because the issue is complex, no useful answer is possible."',
    ],
    correctAnswer: 1,
    explanation: "Good reasoning recognises uncertainty without becoming useless or avoiding a conclusion.",
  },
  {
    id: "AI-CT09",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "An AI recommends that a company automate a major customer service process because it predicts significant cost savings. What is the strongest approach before implementation?",
    options: [
      "Implement immediately because the AI identified a clear financial benefit.",
      "Ask the AI to predict even larger savings.",
      "Examine the assumptions, review the evidence and calculations, identify risks, test the proposal on a limited scale, and evaluate the results before wider implementation.",
      "Ignore the recommendation because AI should not be involved in business decisions.",
    ],
    correctAnswer: 2,
    explanation:
      "Strong critical thinking tests assumptions and predictions rather than blindly accepting or automatically rejecting AI recommendations.",
  },
  {
    id: "AI-CT10",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      "An AI is asked to recommend candidates for a leadership programme based on historical employee data. You discover that past promotions within the organisation may have been influenced by unfair patterns. What is the main concern?",
    options: [
      "Historical data automatically removes human bias.",
      "The AI may reproduce or reinforce unfair patterns contained in the historical data or the way the system is designed and used.",
      "AI cannot analyse employee information.",
      "More historical data will always eliminate the problem.",
    ],
    correctAnswer: 1,
    explanation:
      "AI systems can reflect, amplify, or interact with existing biases. Historical patterns are not automatically fair simply because they are data.",
  },
  {
    id: "AI-CT11",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Identify the Best Decision",
    question:
      "An AI gives you an explanation for why a project failed. The explanation sounds logical and matches your initial suspicion, but you have not examined the project data. What is the strongest response?",
    options: [
      "Accept it because it confirms what you already believed.",
      "Treat it as a possible hypothesis and test it against relevant evidence before drawing a conclusion.",
      "Reject it because AI explanations can never be useful.",
      "Ask the AI to make the explanation more persuasive.",
    ],
    correctAnswer: 1,
    explanation:
      "AI can reinforce confirmation bias by generating convincing explanations that fit what users already believe.",
  },
  {
    id: "AI-CT12",
    category: "criticalThinking",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "You have only 15 minutes before an important meeting. An AI gives you a strong-looking summary of a complex report that you have not read. What is the best use of the summary?",
    options: [
      "Present the summary as fully reliable because there is no time to check it.",
      "Use it as a quick orientation tool, identify the most important claims and decisions, check high-impact details against the original report where possible, and avoid presenting unverified AI output as certain fact.",
      "Ignore the report completely and rely only on your previous experience.",
      "Ask the AI to shorten the summary further and assume the shorter version is more accurate.",
    ],
    correctAnswer: 1,
    explanation:
      "Time pressure does not make unverified information more reliable. Strong AI users know how to use AI for speed without abandoning judgement.",
  },

  // ===================== Prompting and Communication (AI-PC) =====================
  {
    id: "AI-PC01",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Best Prompt",
    question:
      "You want AI to help you create a social media post promoting a professional training programme. Which prompt is strongest?",
    options: [
      '"Write a good post about our training."',
      '"Create something powerful and attractive about our programme."',
      '"Write a 150-word LinkedIn post promoting our 3-day AI training programme for teachers. Highlight practical classroom applications and responsible AI use. Use a professional but conversational tone and end with a clear call to action."',
      '"Write the best social media post possible."',
    ],
    correctAnswer: 2,
    explanation:
      "The strongest prompt clearly defines the task, audience, subject, important focus areas, tone, length, and expected outcome.",
  },
  {
    id: "AI-PC02",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "You ask AI to draft an email to a client, but the response uses the wrong tone and includes irrelevant information. What is the best next step?",
    options: [
      "Start a completely new conversation because AI cannot write client emails.",
      "Give the AI relevant context about the client, the purpose of the email, the desired tone, key points to include, and any information it should avoid.",
      "Ask the AI to make the same email longer.",
      "Copy the response and manually correct everything without using AI again.",
    ],
    correctAnswer: 1,
    explanation:
      "When an AI response misses the mark, the problem is often insufficient or unclear context rather than a complete failure of the tool.",
  },
  {
    id: "AI-PC03",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Identify the Strongest Instruction",
    question:
      "You ask AI to summarise a report for a busy executive. Which additional instruction is most useful?",
    options: [
      '"Make it excellent."',
      '"Use your intelligence."',
      '"Keep the summary under 250 words, focus on financial results, major risks, and recommended decisions, and use plain language."',
      '"Do not make any mistakes."',
    ],
    correctAnswer: 2,
    explanation:
      'Specific, relevant constraints give the AI a clearer target. Vague instructions such as "make it excellent" are open to interpretation.',
  },
  {
    id: "AI-PC04",
    category: "promptingCommunication",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "You have an AI-generated explanation of artificial intelligence written for technical experts. You now need to explain the same subject to secondary school students. What is the strongest instruction?",
    options: [
      '"Make it better."',
      '"Simplify it."',
      '"Rewrite this explanation for secondary school students with no technical background. Use simple language, familiar examples, and short paragraphs. Avoid unexplained technical terms."',
      '"Write about AI again."',
    ],
    correctAnswer: 2,
    explanation:
      "Effective prompting identifies the intended audience and clearly describes how the output should be adapted.",
  },
  {
    id: "AI-PC05",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "You want AI to help develop a complete business strategy for a new organisation. What is the strongest approach?",
    options: [
      'Ask, "Create the perfect business strategy," and use the first response.',
      "Break the work into stages, such as understanding the organisation and goals, analysing the market and challenges, developing strategic options, reviewing assumptions, and refining the final strategy.",
      "Ask several AI tools to create strategies and combine them without reviewing them.",
      "Give AI no background information so its ideas will be completely independent.",
    ],
    correctAnswer: 1,
    explanation:
      "Complex work often benefits from structured stages, iteration, and review rather than expecting one prompt to produce a perfect final answer.",
  },
  {
    id: "AI-PC06",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Scenario",
    question:
      "AI gives you a draft presentation, but the structure is good while the examples are too generic. What is the strongest next step?",
    options: [
      "Abandon the entire draft and start again from zero.",
      '"This is terrible."',
      "Keep the useful structure and give specific feedback about what needs improvement, including the type of examples you want and the audience they should relate to.",
      "Accept the generic examples because the structure is already good.",
    ],
    correctAnswer: 2,
    explanation:
      "Strong AI users treat prompting as an iterative process. They identify what works, what does not, and give focused instructions for improvement.",
  },
  {
    id: "AI-PC07",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Identify the Weakness",
    question:
      'A user gives AI the following instruction: "Write a complete and detailed report covering every important issue, but keep it under 100 words and do not leave anything out." What is the biggest problem?',
    options: [
      "The AI cannot write reports.",
      "The instruction contains potentially conflicting constraints because a complete, detailed report may not realistically fit into 100 words.",
      "Reports must always be longer than 1,000 words.",
      "AI performs better when no word limit is given.",
    ],
    correctAnswer: 1,
    explanation:
      "Good prompting requires realistic and internally consistent instructions. AI cannot always satisfy competing demands perfectly.",
  },
  {
    id: "AI-PC08",
    category: "promptingCommunication",
    difficulty: "Intermediate",
    type: "Best Prompt",
    question:
      "You want AI to analyse customer feedback and present the results in a format that your team can review quickly. Which prompt is strongest?",
    options: [
      '"Analyse this feedback."',
      '"Tell me what customers are saying."',
      '"Analyse the customer feedback below. Identify the five most common themes, estimate how frequently each theme appears, provide two representative examples for each theme, and present the results in a table followed by three recommended actions."',
      '"Read this carefully and tell me everything important."',
    ],
    correctAnswer: 2,
    explanation:
      "The prompt clearly defines the task, expected analysis, output structure, and desired action-oriented result.",
  },
  {
    id: "AI-PC09",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "AI produces a response that perfectly follows your requested format and tone, but you are unsure whether its factual claims are correct. What should you conclude?",
    options: [
      "The response is reliable because it followed the prompt accurately.",
      "Good instruction-following and factual accuracy are separate issues. The important claims may still require verification.",
      "A well-formatted answer is usually factually correct.",
      "If AI followed the tone correctly, its reasoning must also be correct.",
    ],
    correctAnswer: 1,
    explanation: "A prompt can improve relevance and format, but it does not guarantee factual accuracy.",
  },
  {
    id: "AI-PC10",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "An AI repeatedly gives you irrelevant answers. You decide to make your prompt much longer. Which approach is strongest?",
    options: [
      "Always make the prompt as long as possible.",
      "Add more random details until the AI gives the desired answer.",
      "Identify what relevant information or instruction is missing, clarify the objective and constraints, and remove details that do not help the task.",
      "Repeat the same prompt several times because AI will eventually understand.",
    ],
    correctAnswer: 2,
    explanation:
      "More words do not automatically create a better prompt. Relevant context and clear instructions matter more than unnecessary length.",
  },
  {
    id: "AI-PC11",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question: "You use AI to help draft an important proposal. What is the strongest workflow for improving the result?",
    options: [
      "Generate the proposal → Accept it because AI wrote it professionally.",
      "Generate the proposal → Ask AI to identify weaknesses, assumptions, and missing information → Review the critique yourself → Verify important claims → Revise the proposal.",
      "Generate the proposal → Ask AI whether it is perfect → Publish it if the AI says yes.",
      "Generate several proposals → Select the longest one.",
    ],
    correctAnswer: 1,
    explanation:
      "AI can assist with self-critique and revision, but the user must still apply independent judgement and verify important information.",
  },
  {
    id: "AI-PC12",
    category: "promptingCommunication",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      'A manager asks you: "Use AI to create a plan to improve our organisation." The organisation has several departments, unclear priorities, and limited resources. What is the strongest first step?',
    options: [
      "Immediately ask AI to create the plan using only the manager's sentence.",
      "Ask AI to invent the missing details so the process can move faster.",
      "Clarify the organisation's goals, current challenges, scope, priorities, available resources, and success measures before asking AI to help develop the plan.",
      "Ask AI to generate ten different plans and select the most impressive one.",
    ],
    correctAnswer: 2,
    explanation:
      "When the original task is ambiguous, better prompting begins with better problem definition. AI cannot reliably solve a poorly defined problem simply because it can generate detailed answers.",
  },

  // ===================== Practical AI Application (AI-PA) =====================
  {
    id: "AI-PA01",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "You need to prepare for a meeting about a 40-page report. Which is the strongest use of AI?",
    options: [
      "Ask AI to make all decisions for you before the meeting.",
      "Use AI to help summarise key sections, identify major themes and questions, then review important points against the original report.",
      "Upload the report and assume every AI summary is completely accurate.",
      "Avoid reading any part of the report because AI can understand everything for you.",
    ],
    correctAnswer: 1,
    explanation:
      "AI can reduce the time needed to process information, but important conclusions should still be reviewed.",
  },
  {
    id: "AI-PA02",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "Your team needs ideas for increasing student engagement in an online learning programme. What is the strongest way to use AI?",
    options: [
      "Ask AI for ideas, select the first one, and implement it without discussion.",
      "Use AI to generate multiple ideas based on your specific learners and goals, then evaluate and improve the ideas using your team's knowledge and experience.",
      "Ask AI to predict exactly what every student wants.",
      "Avoid using human input because AI can generate more ideas.",
    ],
    correctAnswer: 1,
    explanation: "AI is useful for expanding options, but human expertise is needed to judge relevance and feasibility.",
  },
  {
    id: "AI-PA03",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "A teacher spends several hours each week creating first drafts of lesson activities. What is a practical use of AI?",
    options: [
      "Ask AI to replace the teacher permanently.",
      "Use AI to generate draft activities based on the lesson objective and learner level, then review and adapt them before use.",
      "Allow students to use AI to create and mark their own work without oversight.",
      "Ask AI to create the same lesson every week.",
    ],
    correctAnswer: 1,
    explanation:
      "AI can reduce repetitive drafting work while the teacher remains responsible for quality, relevance, and final decisions.",
  },
  {
    id: "AI-PA04",
    category: "practicalApplication",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "You receive the same type of routine email request every day. Which use of AI is most practical?",
    options: [
      "Use AI to draft responses based on an approved structure, then review the output before sending when necessary.",
      "Give AI complete control of every message without checking what it sends.",
      "Stop responding to the emails and let AI decide which people deserve replies.",
      "Use AI only to make the emails longer.",
    ],
    correctAnswer: 0,
    explanation: "AI can assist with repetitive communication while appropriate human oversight remains in place.",
  },
  {
    id: "AI-PA05",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Best Decision",
    question: "You need to add five numbers: 24, 17, 9, 31, and 12. What is the strongest approach?",
    options: [
      "Build an AI workflow because every task should use AI.",
      "Use a simple calculator or mental arithmetic because AI is unnecessary for such a straightforward calculation.",
      "Ask several AI tools and compare their answers.",
      "Ask AI to explain what numbers are before calculating them.",
    ],
    correctAnswer: 1,
    explanation: "AI competence includes knowing when not to use AI. The best tool depends on the task.",
  },
  {
    id: "AI-PA06",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Scenario",
    question:
      "An organisation has 800 open-ended survey responses and wants to understand the main concerns raised by participants. What is the strongest AI-supported approach?",
    options: [
      "Ask AI to read the responses and make a final organisational decision.",
      "Provide the responses using an appropriate secure process, clearly define the analysis objective, ask AI to identify themes and patterns, review representative evidence, and validate the findings before acting.",
      "Ask AI to select only the responses it agrees with.",
      "Ignore the original responses once AI provides a summary.",
    ],
    correctAnswer: 1,
    explanation:
      "AI can help analyse large volumes of text, but findings should be reviewed and validated before important action is taken.",
  },
  {
    id: "AI-PA07",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Best Decision",
    question: "You need to create a visual presentation from a detailed written report. Which approach is strongest?",
    options: [
      "Ask a text-based AI to generate a presentation without giving it the report.",
      "Use appropriate AI tools to help extract key points, organise the narrative, and develop draft visuals or slide content, then review the presentation for accuracy and clarity.",
      "Copy the entire report onto slides because AI should not influence presentation design.",
      "Ask AI to make as many slides as possible.",
    ],
    correctAnswer: 1,
    explanation:
      "Strong practical use involves combining the right tools and maintaining human control over the final quality.",
  },
  {
    id: "AI-PA08",
    category: "practicalApplication",
    difficulty: "Intermediate",
    type: "Identify the Best Decision",
    question:
      "An AI suggests a marketing strategy based on general industry patterns. Your organisation has unusual local conditions that the AI does not know about. What is the strongest response?",
    options: [
      "Follow the AI strategy because general industry data is always more reliable than local experience.",
      "Reject all AI-generated ideas because AI cannot help with strategy.",
      "Use the AI strategy as input, combine it with relevant local knowledge and evidence, and adapt the recommendation to your actual situation.",
      "Ask AI to repeat the strategy until it becomes more relevant.",
    ],
    correctAnswer: 2,
    explanation: "AI-generated recommendations are more useful when combined with context that AI may not have.",
  },
  {
    id: "AI-PA09",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "Your organisation introduces AI to help staff prepare reports. How should you determine whether the AI use is genuinely improving the work?",
    options: [
      "Assume it is successful because staff enjoy using the tool.",
      "Compare the relevant outcomes before and after implementation, such as time required, error rates, quality, and user feedback, while considering other factors that may affect the results.",
      "Measure only how many times staff open the AI tool.",
      "Ask the AI whether it has improved productivity.",
    ],
    correctAnswer: 1,
    explanation: "Adoption does not automatically equal value. Practical AI competence includes evaluating actual results.",
  },
  {
    id: "AI-PA10",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      "A company wants AI to automatically reject customer refund requests that appear fraudulent. What is the biggest practical concern?",
    options: [
      "AI cannot read customer requests.",
      "Incorrect decisions could unfairly deny legitimate customers, so the system should be tested carefully with appropriate review, safeguards, and escalation for uncertain or high-risk cases.",
      "The system will be perfect if it processes enough requests.",
      "Customer refunds should never involve technology.",
    ],
    correctAnswer: 1,
    explanation:
      "The practical question is not simply whether AI can automate a task. It is whether errors are acceptable and what safeguards are needed.",
  },
  {
    id: "AI-PA11",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "A professional spends two hours researching a topic, then asks AI to produce an answer without seeing the research they collected. What is the strongest way to improve the workflow?",
    options: [
      "Keep the research separate because AI works better without evidence.",
      "Give AI the relevant research or accurately summarised evidence, explain the intended task, and ask it to help organise, analyse, or draft based on that information while checking the final result.",
      "Delete the research and ask AI to start from its own assumptions.",
      "Ask AI to guess what the research probably contained.",
    ],
    correctAnswer: 1,
    explanation:
      "AI becomes more useful when it can work with relevant information rather than being expected to guess missing context.",
  },
  {
    id: "AI-PA12",
    category: "practicalApplication",
    difficulty: "Advanced",
    type: "Best Decision",
    question: 'A team says: "We need to use AI because everyone else is using it." What is the strongest first response?',
    options: [
      "Buy as many AI tools as possible before competitors do.",
      "Start by identifying specific problems, repetitive tasks, bottlenecks, or opportunities where AI could provide measurable value.",
      "Use AI to replace the entire team.",
      "Select the most expensive AI tool because it is likely to be the best.",
    ],
    correctAnswer: 1,
    explanation:
      "Technology adoption without a defined problem can waste time and money. Strong AI application starts with the problem, not the tool.",
  },

  // ===================== Responsible AI Use (AI-RA) =====================
  {
    id: "AI-RA01",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "You want AI to help improve a confidential business proposal containing sensitive client information. What is the strongest first step?",
    options: [
      "Copy and paste the entire document into any free AI tool because AI conversations are always private.",
      "Check the organisation's policies and the AI service's data-handling terms, then remove or protect sensitive information where necessary before using the tool.",
      "Change the document title so the AI will not recognise that it is confidential.",
      "Ask AI to promise not to share the information.",
    ],
    correctAnswer: 1,
    explanation:
      "Confidential information should not automatically be uploaded to an AI service. Users need to understand organisational requirements and how the service handles data.",
  },
  {
    id: "AI-RA02",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "You are preparing a document containing names, phone numbers, email addresses, and other personal information. You want AI to help analyse it. What is the strongest approach?",
    options: [
      "Upload everything immediately because AI needs all available information.",
      "Remove or anonymise unnecessary personal information and use an appropriate approved process before sharing data with an AI system.",
      "Ask AI to delete the information after analysing it.",
      "Replace only the first person's name and leave all other information unchanged.",
    ],
    correctAnswer: 1,
    explanation: "Data minimisation and appropriate handling reduce unnecessary privacy risks.",
  },
  {
    id: "AI-RA03",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Identify the Best Decision",
    question:
      "You use AI to draft a public announcement. The announcement contains a serious factual error. Who is responsible for checking the final content before publication?",
    options: [
      "Only the AI tool because it generated the text.",
      "The person or organisation using and approving the output.",
      "Nobody because AI errors cannot be prevented.",
      "The audience because they should verify everything they read.",
    ],
    correctAnswer: 1,
    explanation:
      "Using AI does not remove human responsibility for decisions and content that people choose to publish or act upon.",
  },
  {
    id: "AI-RA04",
    category: "responsibleUse",
    difficulty: "Foundation",
    type: "Scenario",
    question: "An AI system helps prioritise applications for a scholarship programme. What is the strongest approach?",
    options: [
      "Allow the AI to make final decisions without human involvement.",
      "Use AI as one input within an appropriate review process, with humans responsible for oversight and important final decisions.",
      "Reject all technology because scholarships involve people.",
      "Let the AI decide only when it is very confident.",
    ],
    correctAnswer: 1,
    explanation:
      "Decisions affecting people's important opportunities may require meaningful human oversight and appropriate safeguards.",
  },
  {
    id: "AI-RA05",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "A company wants to use AI to predict which employees are most likely to leave the organisation. What should be considered before acting on the predictions?",
    options: [
      "AI predictions should be treated as certain because they are based on data.",
      "The quality and relevance of the data, possible bias, privacy implications, potential consequences for employees, and the need for appropriate human review.",
      "Only whether the AI can produce predictions quickly.",
      "Whether the AI output is presented in a professional-looking dashboard.",
    ],
    correctAnswer: 1,
    explanation: "Sensitive AI use requires consideration of both technical performance and human consequences.",
  },
  {
    id: "AI-RA06",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Scenario",
    question: "An AI tool recommends fewer women than men for a technical leadership programme. What is the strongest response?",
    options: [
      "Accept the recommendation because AI is objective.",
      "Assume the AI is intentionally discriminating.",
      "Investigate the possible causes, including data quality, selection criteria, system design, and other factors that may create unfair outcomes before relying on the recommendation.",
      "Automatically select exactly equal numbers without investigating the cause.",
    ],
    correctAnswer: 2,
    explanation:
      "Responsible use requires investigating potential unfairness rather than assuming either that AI is automatically objective or that every unequal result has the same cause.",
  },
  {
    id: "AI-RA07",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Best Decision",
    question:
      "You use AI to significantly help create a report that will influence an important organisational decision. What is the strongest approach?",
    options: [
      "Hide the use of AI in every situation because people may distrust the report.",
      "Consider whether the organisation, stakeholders, policies, or the nature of the work require disclosure of meaningful AI involvement, and be transparent where appropriate.",
      "Always announce that AI was used, regardless of context or relevance.",
      "Claim the report was written entirely by a human even when AI produced major sections.",
    ],
    correctAnswer: 1,
    explanation: "Responsible transparency depends on context, policies, and the significance of AI's role.",
  },
  {
    id: "AI-RA08",
    category: "responsibleUse",
    difficulty: "Intermediate",
    type: "Identify the Best Decision",
    question:
      "AI generates an image that looks extremely similar to the distinctive style and work of a living artist. What is the strongest response before using it commercially?",
    options: [
      "Assume there can never be legal or ethical concerns because AI created the image.",
      "Consider applicable intellectual property, platform terms, licensing, and ethical issues, and seek appropriate guidance where necessary.",
      "Remove the artist's name and use the image freely.",
      "Ask another AI to confirm that commercial use is always allowed.",
    ],
    correctAnswer: 1,
    explanation: "AI generation does not automatically eliminate questions about rights, terms of use, or ethical considerations.",
  },
  {
    id: "AI-RA09",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "A hospital is considering an AI system that recommends which patients may require urgent attention. What is the strongest implementation approach?",
    options: [
      "Deploy the system immediately if it performs well during a demonstration.",
      "Use it as the only decision-maker because speed is more important than oversight.",
      "Evaluate the system carefully for its intended use, test performance and limitations in the relevant setting, establish clinical oversight and escalation procedures, monitor outcomes, and ensure qualified professionals remain responsible for appropriate decisions.",
      "Avoid evaluating the system because AI technology is constantly changing.",
    ],
    correctAnswer: 2,
    explanation:
      "High-stakes AI requires rigorous evaluation, appropriate safeguards, ongoing monitoring, and meaningful professional oversight.",
  },
  {
    id: "AI-RA10",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Scenario",
    question: "A student submits an excellent assignment. A teacher suspects AI may have been used. What is the strongest response?",
    options: [
      "Automatically fail the student because the writing sounds too good.",
      "Ignore the issue because AI use cannot be investigated.",
      "Follow the institution's policies, examine the available evidence, discuss the work with the student where appropriate, and avoid treating unreliable detection tools as conclusive proof on their own.",
      "Ask an AI detector for a percentage and treat any high score as absolute proof.",
    ],
    correctAnswer: 2,
    explanation:
      "AI detection tools can have limitations. Important decisions should be based on appropriate evidence and established procedures.",
  },
  {
    id: "AI-RA11",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "An organisation deploys an AI system that automatically sends rejection emails to unsuccessful applicants. Several people complain that they received incorrect rejections. What is the most important governance failure if nobody in the organisation is clearly responsible for reviewing and correcting these errors?",
    options: [
      "The AI should have used a friendlier writing style.",
      "There is a lack of clear accountability and oversight for the automated process.",
      "The rejection emails should have been longer.",
      "Applicants should not have questioned the AI's decisions.",
    ],
    correctAnswer: 1,
    explanation:
      "Responsible AI systems require clear human responsibility for monitoring, correcting, and responding to harmful or incorrect outcomes.",
  },
  {
    id: "AI-RA12",
    category: "responsibleUse",
    difficulty: "Advanced",
    type: "Best Decision",
    question:
      "Your manager tells you to upload a confidential database to a public AI service immediately because there is no time to follow the normal approval process. What is the strongest response?",
    options: [
      "Upload it because instructions from a manager always remove privacy obligations.",
      "Upload only half of the database.",
      "Follow applicable data protection requirements and organisational policies, raise the concern, and seek an approved method for completing the task rather than bypassing safeguards.",
      "Send the database to several AI tools to get the fastest result.",
    ],
    correctAnswer: 2,
    explanation: "Time pressure and authority do not automatically remove legal, ethical, privacy, or organisational responsibilities.",
  },

  // ===================== AI Problem-Solving (AI-PS) =====================
  {
    id: "AI-PS01",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Best Decision",
    question: 'A team says: "Our customer service is poor. We need AI." What is the strongest first step?',
    options: [
      "Buy an AI customer service tool immediately.",
      "Identify the specific problems causing poor customer service, such as slow response times, repeated questions, poor information access, or inconsistent replies.",
      "Ask AI to redesign the entire company.",
      "Replace all customer service staff with AI.",
    ],
    correctAnswer: 1,
    explanation: "AI should be considered after the problem is clearly defined. A vague problem can lead to an expensive or ineffective solution.",
  },
  {
    id: "AI-PS02",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Best Decision",
    question: "A team needs to ensure that every invoice follows a fixed numbering sequence. What is the strongest approach?",
    options: [
      "Use generative AI because AI should handle every digital task.",
      "Use a reliable rule-based or standard software solution because the task is structured and does not require generative AI.",
      "Ask three AI tools to create invoice numbers and compare them.",
      "Ask AI to write an essay explaining what an invoice is.",
    ],
    correctAnswer: 1,
    explanation: "Strong problem-solving means selecting the simplest appropriate tool rather than forcing AI into every task.",
  },
  {
    id: "AI-PS03",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Scenario",
    question:
      "A school wants to reduce student absenteeism but is unsure why attendance is declining. How can AI be used most effectively at the beginning?",
    options: [
      "Ask AI to create a solution without examining any evidence.",
      "Gather relevant information about attendance patterns and possible causes, then use AI to help organise the information, identify questions, generate hypotheses, and suggest areas for further investigation.",
      "Ask AI to punish students with low attendance.",
      "Assume AI already knows the cause of the problem.",
    ],
    correctAnswer: 1,
    explanation: "AI can support early-stage problem analysis, but it should work with evidence rather than replace investigation.",
  },
  {
    id: "AI-PS04",
    category: "problemSolving",
    difficulty: "Foundation",
    type: "Best Decision",
    question:
      "AI recommends introducing a chatbot to reduce the number of customer service requests. What is the strongest question to ask before implementation?",
    options: [
      '"Does the chatbot look modern?"',
      '"Can we launch it this week?"',
      '"Which specific customer problems will it solve, how will success be measured, and what happens when the chatbot cannot handle a request?"',
      '"Can the chatbot answer every question perfectly?"',
    ],
    correctAnswer: 2,
    explanation: "A solution should be evaluated against the actual problem, measurable outcomes, and likely limitations.",
  },
  {
    id: "AI-PS05",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Best Decision",
    question: "You ask AI to help identify why sales have fallen over the last six months. Which information would be most useful to provide?",
    options: [
      "Only the total sales figure for the current month.",
      "Relevant sales trends over time, product changes, pricing changes, marketing activity, customer behaviour, market conditions, and other evidence connected to the problem.",
      "Your personal opinion about why sales probably fell.",
      "No information because AI should discover everything independently.",
    ],
    correctAnswer: 1,
    explanation: "Good AI-supported problem-solving depends on relevant evidence and context.",
  },
  {
    id: "AI-PS06",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Scenario",
    question:
      'AI analyses business data and says: "Sales fell because customers dislike the new pricing." The data shows that sales fell after prices changed, but it does not include customer feedback. What is the strongest response?',
    options: [
      "Accept the explanation because the timing proves the cause.",
      "Treat the explanation as a hypothesis and look for additional evidence, such as customer feedback, competitor pricing, demand changes, and other possible explanations.",
      "Reject all AI analysis.",
      "Lower prices immediately without further investigation.",
    ],
    correctAnswer: 1,
    explanation: "AI can generate plausible explanations, but a plausible explanation is not automatically proven.",
  },
  {
    id: "AI-PS07",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Multi-Step Decision",
    question:
      "A team receives hundreds of similar support requests each week and wants to use AI to improve response times. Which workflow is strongest?",
    options: [
      "Connect AI directly to customers and allow it to answer everything without limits.",
      "Identify common request types → organise and prepare approved information → define which requests AI can handle → establish escalation rules → test the system → monitor quality and errors → improve the workflow.",
      "Ask AI to answer every request differently so customers receive unique responses.",
      "Use AI only when employees are unavailable.",
    ],
    correctAnswer: 1,
    explanation:
      "Effective AI problem-solving includes clear scope, reliable information, escalation, testing, monitoring, and continuous improvement.",
  },
  {
    id: "AI-PS08",
    category: "problemSolving",
    difficulty: "Intermediate",
    type: "Scenario",
    question: "An AI assistant repeatedly gives incorrect answers about one particular company policy. What is the strongest first response?",
    options: [
      "Continue using it because most of its other answers are correct.",
      "Identify why the failures are happening, such as missing information, outdated information, unclear instructions, or limitations in the system, then improve the relevant part of the workflow.",
      "Assume AI is permanently useless.",
      "Tell users to ask the same question until they receive a correct answer.",
    ],
    correctAnswer: 1,
    explanation: "Strong problem-solvers investigate the cause of failure instead of blindly accepting the system or abandoning it after one problem.",
  },
  {
    id: "AI-PS09",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Best Decision",
    question: "An organisation has three possible AI solutions to improve internal knowledge access. How should it choose?",
    options: [
      "Select the solution with the most features.",
      "Select the cheapest solution without testing it.",
      "Define evaluation criteria based on the actual problem, such as answer quality, accuracy, security, integration needs, cost, usability, and maintenance, then test relevant options against those criteria.",
      "Select the tool that produces the most confident answers.",
    ],
    correctAnswer: 2,
    explanation: "The best solution depends on fit for purpose, not popularity, price alone, or the number of features.",
  },
  {
    id: "AI-PS10",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Scenario",
    question:
      "An AI system helps forecast demand for a product. The forecast will influence how much inventory the company purchases. What is the strongest approach?",
    options: [
      "Purchase exactly the amount predicted by AI.",
      "Treat the forecast as one input, examine uncertainty and assumptions, compare it with other relevant evidence, consider the consequences of overstocking and understocking, and make a risk-informed decision.",
      "Ignore the forecast because AI predictions are never useful.",
      "Ask AI to produce a more confident prediction.",
    ],
    correctAnswer: 1,
    explanation: "Good decisions under uncertainty consider risk, evidence, assumptions, and the consequences of being wrong.",
  },
  {
    id: "AI-PS11",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Multi-Step Decision",
    question:
      "A team introduces an AI tool to help create training materials. After one month, users report that the materials are fast to produce but sometimes inaccurate and poorly adapted to learners. What is the strongest response?",
    options: [
      "Keep using the tool exactly as it is because it saves time.",
      "Stop using AI permanently.",
      "Review the reported problems, identify where the workflow is failing, improve the instructions and source information, establish quality checks, test the improvements, and continue monitoring results.",
      "Ask AI to promise to make fewer mistakes.",
    ],
    correctAnswer: 2,
    explanation: "Effective AI problem-solving is iterative. Speed, accuracy, and suitability must all be evaluated.",
  },
  {
    id: "AI-PS12",
    category: "problemSolving",
    difficulty: "Advanced",
    type: "Best Decision",
    question: "An organisation wants to use AI to solve a major operational problem. Which approach represents the strongest end-to-end process?",
    options: [
      "Choose an AI tool → train staff to use it → search for problems it can solve.",
      "Define the problem and desired outcome → gather relevant evidence → assess whether AI is appropriate → design the workflow and safeguards → test on a limited scale → evaluate results and risks → improve → scale only if the evidence supports it.",
      "Ask AI to identify every possible problem in the organisation → automate everything.",
      "Buy the most advanced AI system available and assume its capabilities will create value.",
    ],
    correctAnswer: 1,
    explanation: "Strong AI problem-solving starts with the problem and follows a disciplined process of evidence, design, testing, evaluation, and improvement.",
  },
];

export function getQuestionsByCategory(category: Category): Question[] {
  return questions.filter((q) => q.category === category);
}
