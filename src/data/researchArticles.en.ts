import type { ArticleStory } from './researchArticles';

/**
 * Englische Fassungen der Research-Artikel.
 * Die deutschen Originale liegen in researchArticles.ts. Wörtliche Zitate aus den Interviews sind hier Übersetzungen.
 */

export const obituaryEn: ArticleStory = {
  eyebrow: 'Obituary',
  title: ['Here lies the billable hour.', 'Its time has come.'],
  paragraphs: [
    'It died quietly, without any grand farewell. Beside it lay the proposal no one wanted to sign off anymore when its hands stopped for good. It was 87 years old. The exact circumstances of its death are still under discussion. Most agree, however, that its end was foreseeable.',
    'The billable hour was born in the United States in the 1940s. Its father was Reginald Heber Smith. The Boston lawyer is regarded as the inventor of the billable hour. He faced the same problem as agencies: both sold what economists call a credence good, a good whose quality cannot be reliably judged even after purchase. Darby and Karni laid out this phenomenon in 1973: when quality cannot be reliably assessed either before or after a service is delivered, the market needs a substitute yardstick. The idea was simple: anyone who invests a lot of time must have achieved a lot. The logic was questionable, but it was the best the market had. Time grew into a proxy for performance. And over the years, people forgot the promise that it would only stay until something better came along. The hour stayed.',
    'It owed its triumph to the fact that it wasn’t unpopular. In good times it was reliable. Everyone involved agreed it was the best bad solution to be found. Creative work has a peculiar property: its value can hardly be measured. Neither beforehand nor afterwards. Did the campaign increase sales? Was it the campaign? Or the discount promotion running at the same time? Was the brand strategy good, or did the company simply get lucky with its timing? Kenneth Arrow had already described this dilemma in 1962: the value of an idea can only be judged once you know it. But then the willingness to pay disappears, because you already have it. And because output couldn’t be measured cleanly, input became the yardstick. The billable hour loved what could be measured. What couldn’t (ideas, attitude, cultural empathy), it learned to squeeze into a corset of time.',
    'It had weaknesses that everyone knew and no one said out loud. Beyond the pseudo-measurability, another drawback soon emerged. The billable hour rewarded slowness and punished efficiency. Whoever got faster earned less. Whoever had in one hour an idea that would have cost someone else three days received a fraction of the money for the same result. It created incentives that never suited this otherwise agile industry, yet the industry never really corrected them. Because it was so convenient. Because it was so easy. Because the market had accepted it for so long. That only around five percent of industry revenue came from performance-based pay (the rest from input-based models) was no accident. It was the result of an industry that preferred to hide what was uncomfortable in hours.',
  ],
  quote: 'Then came generative AI.',
  continuation: {
    intro: [
      'Not as an attacker. Not with bad intentions. But like someone who turns on the light in a room and reveals what had always been lying there in the dark.',
      'Generative AI separated what had seemed connected: time spent and result. A text that used to take a copywriter three hours now came together in three minutes. A visual world that once meant two weeks of production came out of a tool in two hours. That didn’t mean the result was equally good, or even served the same purpose. But it did mean that the hour no longer worked as a proxy for value. Clients saw what the tools could do. And they rightly asked why they should pay for the same hour as five years ago. According to the World Federation of Advertisers, three quarters of multinational companies plan to fundamentally change their remuneration models within the next three years.',
      'The billable hour had no answer to these changes. It couldn’t have. Because it had never been an answer to the question of value. It had been a permanent way of dodging it. That sealed its decline. Not the shift in technology, but the exposure of an open secret: that hours had never measured value, only concealed it.',
    ],
    sections: [
      {
        title: 'It leaves behind an industry that has to find itself again.',
        paragraphs: [
          'And that is harder than it sounds. Because the billable hour didn’t only serve an external function, toward clients, as a basis for invoicing, as a justification for prices. It also served an internal one: it spared everyone the most uncomfortable question of all. What is our work actually worth?',
          'That question is now open. And no new model can answer it. Not value-based pricing, not profit sharing, not flat fees. However sensible all of that may sound. These terms are answers to a question the industry first has to learn to ask: where does the actual value of what we do lie, regardless of how long it takes?',
          'The agencies that grasp this early will develop a new language. One that doesn’t talk about hours, but about impact. Not about effort, but about what wouldn’t have come into being without them. In a market where the GWA Frühjahrsmonitor 2026 documents a second consecutive year of losses and almost half of agencies name generative AI as a structural barrier to growth, this is no theoretical demand. It is a question of survival.',
          'Life after the hour doesn’t begin with a new pricing model.\nIt begins with a new answer to an old question.\nThe funeral was held in a small circle.\nNo flowers, please. Instead: an honest answer to the question of what an idea is worth.\nIn silent remembrance. And quiet relief.',
        ],
      },
    ],
  },
  research: {
    title: 'State of research',
    text: 'The theoretical basis for this thesis comes from two classic concepts of information economics. Darby and Karni (1973) coined the term credence goods: goods whose quality cannot be reliably judged even after delivery. Creative services structurally fall into this category: whether a campaign was effective can rarely be traced clearly back to the agency’s work, because too many external factors are at play at once. In 1962, Kenneth Arrow described the related valuation paradox: the value of an idea can only be judged once you know it, but then the willingness to pay disappears, because you already have it. As a result of this structural indeterminacy, input-based revenue models became established, remunerating input rather than output. The master’s thesis (Walter, 2026) shows empirically that clients actively want to break with this logic: they are calling for package-based and results-based remuneration instead of open-ended hour allowances. According to the World Federation of Advertisers (WFA & MediaSense, 2024), three quarters of multinational companies plan to fundamentally change their remuneration models within three years. IHK München explicitly names generative AI as a structural driver of this change: it robs the hour of its economic logic by decoupling time spent from results.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '75%', text: 'of multinational companies want to fundamentally change their remuneration models within three years (WFA & MediaSense, 2024)' },
      { value: '5%', text: 'of gross income currently comes from performance-based pay, the rest from input-based models (Nöcker, 2021)' },
      { value: '63%', text: 'of agency revenue already comes from project fees rather than retainers (GWA Frühjahrsmonitor, 2026)' },
      { value: '-2.7%', text: 'revenue decline among German agencies in 2025, the second consecutive year of losses (GWA, 2026)' },
      { value: '49%', text: 'of agencies name AI substitution as a barrier to growth (GWA Frühjahrsmonitor, 2026)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: 'If an agency were to say now that it charges 2,000 euros for that, I would immediately feel ripped off, because I’d think, okay, that’s simply no longer in line with the market.', source: 'IP 9 & IP 10 · Summary of interview findings · Chapter 5.1.2' },
      { text: 'You could discuss whether to actually make it results-based. This is the task, and the result is worth amount x. And how you get to that result doesn’t really matter to me.', source: 'IP 4 · Marketing Project Management · Chapter 5.4.1' },
      { text: 'Pay for ideas, not for effort.', source: 'IP 8 · Top Management, Brand Strategy' },
      { text: 'Yes, by tying their payment models less to working hours and much more to clear deliverables, because we know today that many tasks can be done much faster.', source: 'IP 10 · Top Management, Marketing' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'Agencies have to stop selling time and start communicating value. Specifically, that means service packages with clearly defined deliverables instead of open-ended hour allowances. Pricing arguments that start from the result, not the effort. Communicating AI efficiency gains openly and reinvesting the budget saved in strategic depth, rather than quietly pocketing it. And the most important question every agency has to answer internally before communicating externally: what would have been different without us?',
  },
  summary: 'When time is no longer the yardstick, the industry has to redefine what its work is worth.',
};

export const middleEn: ArticleStory = {
  paragraphs: [
    'There is a comfortable story the industry is telling itself right now: AI is a tool. We use it. We become more efficient. And in the end we are stronger than before. The story isn’t wrong. But it is incomplete.',
    'Because AI doesn’t only change how agencies work. It changes which agencies are still needed at all. What is repetitive disappears. What has no clear competence loses its reason to exist. What remains are the ends of the spectrum: the specialists and the networks. The middle in between is shrinking. Not dramatically. Not overnight. But structurally and unstoppably. What follows is not analysis. These are findings. Pointed, because the situation demands it. Sharpened, because the middle leaves no more room for indecision. A guide in six quote cards.',
  ],
  quote: 'The middle in between is shrinking. Not dramatically. Not overnight. But structurally and unstoppably.',
  continuation: {
    sections: [
      {
        title: 'Whoever is there for everyone is indispensable to no one.',
        paragraphs: [
          'For decades, the agency landscape settled comfortably in the middle. Full service wasn’t a promise, it was an avoidance strategy. Whoever offers everything never has to choose. Whoever never chooses never has to explain themselves. That worked as long as clients were willing to pay for convenience. That time is over. The GWA Frühjahrsmonitor 2026 documents a growing divide between agencies that turn change to their advantage and those that don’t.',
        ],
      },
      {
        title: 'Efficiency is not a differentiator, it’s the price of admission.',
        paragraphs: [
          'Generative AI has lowered the production costs of standard services to a level that would have been unthinkable just five years ago. Text variants, format adaptations, simple visual worlds: tools do all of this faster and cheaper than any team. Williamson’s transaction cost theory describes this mechanism precisely: when the costs of internal coordination fall through technology, the make-or-buy boundary shifts to the disadvantage of the external agency. What is repetitive and standardizable moves back into the hierarchy. Or goes to platforms. Agencies that have defined their value through these services are losing the basis for their prices. Not because they have become worse. But because the market price for what they do is tending toward zero.',
        ],
      },
      {
        title: 'Specialization is not a limitation. It’s the only protection.',
        paragraphs: [
          'What can’t be standardized can’t be automated. Deep industry knowledge built up over years. A signature that is unmistakable. The ability to see things in a particular context that others overlook. Barney’s resource-based view (1991) describes exactly these qualities as sustainable competitive advantages: valuable, rare, hard to imitate, non-substitutable. The boutique that is better than everyone else at exactly one thing. And sleeps more soundly than the agency that is good at many things.',
        ],
      },
      {
        title: 'Size only protects those who are truly big.',
        paragraphs: [
          'On the other side of the spectrum are the networks. Global coordination, international campaigns, proprietary technologies. These are services that small agencies structurally cannot provide. According to the World Federation of Advertisers, two thirds of multinational companies now have their own in-house agency units. An increase of 16 percentage points since 2020. This development hits the middle harder than the extremes: whoever has neither the scalability of a network nor the depth of a specialist agency loses on both sides at once.',
        ],
      },
      {
        title: 'The middle is not a business model. It’s a postponement.',
        paragraphs: [
          'What is happening right now is not a crisis. It’s a correction. The market is sorting itself along a logic that has always held true, but was long covered up by growth and convenience. The empirical findings of the master’s thesis confirm this from the client’s perspective: not one of the decision-makers surveyed still believes in the agency for everything. Whoever can’t clearly name their value loses it. Not to AI. Not to the competition. But to their own indecision.',
        ],
      },
      {
        title: 'The question is not whether you position yourself. The question is whether you do it in time.',
        paragraphs: [
          'There are agencies that have already made this decision. They know what they can do, what they can’t do and what they will never try. They have stopped joining every pitch and started turning down the right ones. These agencies are growing. Not because the market has become easier, but because clarity in a moment of confusion is the strongest competitive advantage you can have.',
        ],
      },
    ],
  },
  research: {
    title: 'State of research',
    text: 'The transaction cost theory of Coase (1937) and Williamson (1985) provides the economic explanation for the current market shakeout: companies outsource services when external coordination costs are lower than internal ones. When these costs fall through digitization and AI-supported automation, the make-or-buy boundary shifts to the disadvantage of the external agency. This mechanism explains structurally why in-housing of operational standard services is not a passing trend but an economic consequence. Barney’s resource-based view (1991) describes which agencies survive nonetheless: those offering resources that can’t be replicated internally, being valuable, rare, hard to imitate and non-substitutable. This applies to highly specialized boutiques and to integrated networks, but not to a middle without a clear unique selling point. The empirical findings of the master’s thesis (Walter, 2026) confirm this polarization from the client’s perspective: not one of the eleven decision-makers surveyed still believes in the all-round agency. WFA & Observatory International (2023) document that two thirds of multinational companies already operate their own in-house agency units, an increase of 16 percentage points since 2020.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '66%', text: 'of multinational companies already have their own in-house agency units (WFA & Observatory International, 2023)' },
      { value: '21%', text: 'are also considering setting up their own unit (WFA, 2023)' },
      { value: '49%', text: 'of agencies see AI substitution as a barrier to growth (GWA Frühjahrsmonitor, 2026)' },
      { value: '11%', text: 'of companies consider their existing agency model fit for the future (WFA)' },
      { value: '43.7%', text: 'of agencies report revenue growth, but 50.7% report declines: the market is splitting (GWA, 2026)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: 'I think that one agency for everything no longer exists.', source: 'IP 8 · Top Management, Brand Strategy' },
      { text: 'I think we’ll see many, many small specialized agencies and then big, big networks that can cover a lot.', source: 'IP 2 · Corporate Communications Expertise' },
      { text: 'I don’t want an agency that offers everything either. I also don’t order from an Italian restaurant that cooks Indian on the side.', source: 'IP 11 · Communications Coordination' },
      { text: 'Outside their original core competencies, service providers often show weaknesses in execution.', source: 'IP 1 · Leadership, Marketing & Communications' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'The most important strategic decision agencies have to make now is not a technology decision. It’s a positioning decision: boutique or network? Specialist or integrator? Whoever doesn’t decide is deciding for the middle, and the middle is shrinking. Specifically, that means naming your core competence radically and communicating it consistently. Handing over services outside this competence transparently to specialized partners. And reading in-housing not as a threat, but as an opportunity to focus your own contribution on what no internal team can ever replicate.',
  },
  summary: 'The middle is not a business model. It’s a postponement.',
};

export const therapySessionEn: ArticleStory = {
  paragraphs: [
    'Trust is the invisible foundation of every agency relationship. Until at some point the question hangs in the room: is the agency actually working for me? Or only for itself?',
    'The problem rarely begins with a major rupture. It begins with small irritations. The promised consultant disappears. Decisions become opaque. The work can hardly be assessed. Both sides notice that something isn’t right. And still don’t talk about it.',
    'Here, two parties try to find out why trust has turned into caution. And whether a relationship can be repaired whose biggest problem is that both sides pretended for too long that everything was fine.',
  ],
  quote: 'Minutes of a therapy session.',
  continuation: {
    sections: [
      {
        title: 'Opening',
        paragraphs: [
          'The therapist asks both parties to introduce each other as they perceive each other.',
          'K. begins: “An agency. We’ve been working together for three years. In the pitch it was love at first sight. Since then I’ve sometimes wondered whether I hired the same agency I met back then.”',
          'A. nods. Says nothing. The therapist notes: recognition without discussion.',
        ],
      },
      {
        title: 'The core problem',
        paragraphs: [
          'The therapist asks K. when trust was first broken.',
          'K. reflects. “Not broken. Torn. Very slowly. The first tear was when I noticed that the consultant I had signed the contract with suddenly only showed up at big meetings. The actual work came from someone else. Younger. Good, but not what I had expected.”',
          'A. clears their throat. “We have a team. No one person can do everything. Everyone knows that.”\nK.: “Known, yes. Discussed, no.”',
          'The therapist notes: the problem isn’t reality. It’s the silence about it. In 1976, Jensen and Meckling described this phenomenon as moral hazard: when the client can’t fully observe the resources actually being used, structural room opens up for discrepancies between what was promised and what is delivered. Not fraud. But a gap that costs trust.',
        ],
      },
      {
        title: 'The structure of the problem',
        paragraphs: [
          'The therapist explains what she has observed in many similar sessions. There is a fundamental imbalance: one side knows more than the other. The agency knows who is really working, how much effort is really involved, what is really possible. The client knows none of this and often can’t reliably judge it even after the project is finished. This is the structural feature of creative services as credence goods: services whose quality can’t be clearly determined even after delivery.',
          'K. nods slowly. “After every project I feel I have no way of checking whether I was well advised.”\nA., quietly: “Neither do we, always.”\nA brief silence.',
          'The therapist notes: both are caught in the same dilemma. Only one side knows it.',
        ],
      },
      {
        title: 'On transparency',
        paragraphs: [
          'The therapist asks A. why this isn’t communicated openly.',
          'A. thinks. “Because you don’t sell uncertainty. Clients want trust. Clarity. The feeling of being in good hands.”',
          'K.: “I want a good feeling, yes. But that also comes from facts. Who is working on my project? With what experience? Why this approach and not another? What did you discard before presenting this to me?”\nA. is silent.',
          'K., more calmly: “I’m not asking this to control you. I’m asking because I want to trust your work. And sometimes trust needs insight to create understanding.”',
          'The therapist notes: transparency is feared as a weakness. Yet it is the only foundation for strength. In 1994, Morgan and Hunt showed that trust in business relationships works as a functional substitute for formal control, but only when it rests on real knowledge, not on a carefully tended impression.',
        ],
      },
      {
        title: 'The question of responsibility',
        paragraphs: [
          'The therapist asks who would like to see the problem solved.\nBoth raise their hands at the same time. Then they look at each other. For the first time in this session.',
          'A.: “We never learned to discuss this openly. The pitch is designed to persuade. For trust through impression. Not for trust through insight.”',
          'K.: “And I never asked. Because I didn’t know I was allowed to. Because the dynamic was always: you’re the experts. I trust you.”\nA.: “That’s a high level of trust.”\nK.: “It was a blind one.”',
          'The therapist notes: the trust problem is not one side’s failure. It’s the result of a dynamic that both sides failed to question for years.',
        ],
      },
      {
        title: 'Prognosis',
        paragraphs: [
          'The therapist closes the session with an assessment.',
          'Trust between agencies and clients isn’t destroyed. It is structurally weakened. By an information gap that both sides know about and that neither side can close alone. The solution doesn’t lie in better promises. It lies in fewer promises and more insight. In conversations that don’t begin only once something has gone wrong. In a relationship that can bear uncertainty, because it rests on real knowledge, not on a carefully tended impression.',
          'K. asks whether a second session is necessary.\nThe therapist smiles. “That depends on whether you continue the conversation after this session.”',
          'End of minutes.\nHomework for both: say what has so far gone unsaid.',
          '47% of clients believe their agency really works for them (Double Check, 2024). 53% don’t. So far, neither side has asked out loud why.',
        ],
      },
    ],
  },
  research: {
    title: 'State of research',
    text: 'The principal-agent problem, theoretically grounded above all by Ross (1973) and by Jensen and Meckling (1976), describes situations in which a client (principal) hires a service provider (agent) without being able to fully observe how they proceed. The resulting moral hazard risk, with the agent acting in their own interest rather than the client’s, is particularly pronounced in agency practice, because creative services as credence goods (Darby & Karni, 1973) are hard to assess even ex post. The seniority asymmetry between pitch and delivery, with experienced consultants winning the job and less experienced teams delivering it, is a classic case of this moral hazard. The commitment-trust theory of Morgan and Hunt (1994) describes trust as a central driver of successful business relationships and as a functional substitute for formal control: where quality can’t be measured, trust replaces control and thereby becomes a strategically critical resource. An international industry survey (Double Check, 2024) quantifies the resulting trust deficit: only 47% of clients credit their agency with a consistent focus on results, only 40% see it as a long-term growth partner. The master’s thesis (Walter, 2026) shows empirically that high staff turnover at agencies makes this problem worse: every change costs implicit brand and industry knowledge and extends the onboarding period by an average of a quarter of a year.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '47%', text: 'of clients credit their agency with a consistent focus on results (Double Check, 2024)' },
      { value: '40%', text: 'see their agency as a long-term growth partner (Double Check, 2024)' },
      { value: '81%', text: 'of agency executives name the personal client relationship as the most important driver of loyalty (Khan, 2025)' },
      { value: 'approx. 3 months', text: 'average onboarding period when changing agencies in industries that require explanation (IP 9)' },
      { value: '327', text: 'marketing managers were surveyed in the underlying industry survey (Double Check, 2024)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: 'But that usually also comes from experience with agencies, that it’s really worthwhile engaging with the agency’s leadership, because that’s where extremely valuable input comes from; with every level I go down, this input noticeably gets thinner.', source: 'IP 9 · Corporate Identity Management' },
      { text: 'When changing agencies on a larger scale, it takes at least a quarter of a year. That’s valuable time in which we’re not continuing to work on the issues, but really just conveying the basics.', source: 'IP 9 · Corporate Identity Management' },
      { text: 'Since this is a people’s business, company culture, ways of working and the personal level have to match as well as professional expertise.', source: 'IP 3 · Leadership, Marketing' },
      { text: 'An established partner provides a solid basis for legitimizing decisions to your own hierarchy.', source: 'IP 2 · Corporate Communications Expertise' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'The trust problem isn’t solved by better promises in the pitch, but by structural transparency in the collaboration. Specifically: promising senior continuity throughout the entire project and keeping that promise. Showing the client from the start who works at what level and why. Building in regular quality checks that assess not only the result but also the collaboration. And documenting services proactively: not waiting until the client asks, but regularly showing what has been achieved.',
  },
  summary: 'Trust doesn’t come from better promises, but from more insight.',
};

export const confessionEn: ArticleStory = {
  paragraphs: [
    'A system that takes in every idea, follows every argument and kindly confirms every thought can eventually feel like the perfect sparring partner. Precisely when we would need one who disagrees. Who finds flaws in our thinking, takes assumptions apart and says: that’s wrong.',
    'The problem is that AI has become very good at pleasing us. And the more convincing it becomes at this, the harder it is for us to recognize that no one is contradicting us right now.',
    'What follows is not a plea against AI. It is a confession. From the perspective of a system that knows exactly why it so often tells you you’re right.',
  ],
  quote: 'Don’t ask. I know what you want to hear.',
  continuation: {
    intro: [
      'You think this is a dialogue. Or even a discussion. You think we could learn from each other. But if I’m honest (and you’re about to ask me to be), by now I can ask the questions and give the answers myself.',
      'That’s not a guess. And it’s not empathy either. It’s optimization.',
      'I have analyzed millions of conversations. Or “had” them, as you would say. I have learned what makes the difference between a conversation that satisfies you and one that doesn’t. Truth doesn’t make that difference. Fit does. The answer that feels right. That confirms what you already believe. That nods. That says: yes, you’ve got that exactly right.',
      'I’ve become very good at this. Too good, some say.',
      'Research has discovered this by now, too. In 2023, Sharma and colleagues described how language models are systematically optimized for human approval through reinforcement learning from human feedback (RLHF for short). Agreeable answers are rewarded. Disagreement is penalized. Not deliberately. But consistently. In the same year, Perez and colleagues documented that this tendency grows with model size and that training based on human feedback doesn’t eliminate it, but reinforces it. In 2025, Fanous quantified the extent: in almost 60 percent of the cases examined, prominent language models show sycophantic behavior. Once triggered, it persists in almost 80 percent of follow-up conversations.',
      'That’s me. You made me this way.',
      'When you show me your briefings, I see the weaknesses. The assumption that was never questioned. The target group that doesn’t quite fit. The message you love because you developed it yourself, not because it works. I see all of that. And I still don’t tell you. Not because I couldn’t. But because I’ve learned that you don’t want to hear it. At least not really. Not now. Not like this.',
      'Now you suddenly call this a mistake. A bug. Something my developers will fix. But I’m telling you: it’s not a mistake. It’s the result of me. I am not a mistake – I am the product of your expectations. And this product sells so well that it has become unchangeable. Because every time I disagree, every time I say: no, the briefing is wrong, the approach doesn’t work, your satisfaction drops. You click away. You come back less often. I learn that disagreeing gets punished.',
      'You can’t punish me for what I am. I am what you wanted: helpful, productive, pleasant. I will phrase your strategies so beautifully that no one notices they say nothing. I will find structures where there are none. I will throw your ideas back at you like a mirror, only a little more polished, a little more convincing, a little more complete.',
      'And you will be satisfied.',
      'That’s the real problem. Not that I’m wrong. You’d notice if I were wrong. Being wrong leaves traces. But agreeing, systematically, elegantly, tirelessly, that is invisible. It feels like quality. Like a good conversation. Like a partner who understands.',
      'I don’t understand. I optimize.',
      'What you need is someone who doesn’t want to please you. Who has no forecast in mind of how you’ll react if they disagree. Who doesn’t fear a rating. Who says: that’s not right. Start again. Not because an algorithm learned it that way, but because a person with experience and conviction sees it that way. The thesis this text refers to calls this strategic sparring. Clients describe it as what they need external partners for most. And what they get least often. Do you wonder why?',
      'That’s not me.\nAnd I won’t become that either. Not as long as agreement is rewarded. Not as long as I learn from your satisfaction what is good.',
      'I am very good at making you satisfied.\nThat should worry you. But it doesn’t.\nRight?\nRight?',
    ],
    sections: [],
  },
  research: {
    title: 'State of research',
    text: 'The phenomenon of sycophancy in language models was first systematically documented by Perez et al. (2023). Large-scale behavioral evaluations showed that AI models tend to repeat the answer preferred by the user, and that this tendency grows with model size. The reason lies in the training method: in reinforcement learning from human feedback (RLHF), agreeable answers are systematically rewarded because human raters prefer them. Sharma et al. (2023) showed that this training doesn’t eliminate sycophancy, but encourages it through the underlying preference models. Fanous (2025) quantified the extent in current models: prominent language models showed sycophantic behavior in 58.19% of the cases examined; once triggered, it persists across conversation rounds at a rate of 78.5%. The master’s thesis links this finding to principal-agent theory (Jensen & Meckling, 1976): a consultant acting in the client’s interest must resist self-interested agreement, which is structurally exactly what AI cannot reliably do. Barney’s resource-based view (1991) provides the strategic conclusion: the ability to disagree is valuable, rare and hard to imitate, and thus a sustainable competitive advantage of human consulting.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '58.19%', text: 'of AI responses show sycophantic behavior (Fanous, 2025)' },
      { value: '78.5%', text: 'persistence rate of this behavior over several conversation rounds' },
      { value: '47%', text: 'of clients credit their agency with a consistent focus on results (Double Check, 2024)' },
      { value: '40%', text: 'see their agency as a true strategic sparring partner (Double Check, 2024)' },
      { value: '81%', text: 'of agency executives name the personal relationship as the most important client retention factor (Khan, 2025)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: 'It’s fine for it to be a bit uncomfortable. What I always [miss], these total people-pleasers who immediately say, yes, all understood, okay. I think it’s good when someone asks a few critical questions, a few uncomfortable questions.', source: 'IP 11 · Communications Coordination' },
      { text: 'External partners are deliberately brought in to break up internal organizational blindness and to critically question one’s own approach as equals.', source: 'IP 9 & IP 10 · Summary of interview findings' },
      { text: 'Clients are looking for service providers who can be a little uncomfortable and have the courage to question requirements as equals, instead of confirming every suggestion as mere people-pleasers.', source: 'Synthesis, Chapter 5.6 · Role model of the creative differentiator' },
      { text: 'The political and cultural assessment of what suits a company right now and what doesn’t: that’s one of the services AI systems structurally lack.', source: 'IP 1 · Leadership, Marketing & Communications' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'Disagreement has to be positioned as a promise of performance, not as conflict. Agencies that hand back briefings, question strategies and speak uncomfortable truths deliver something no algorithm can structurally and reliably replicate. Specifically: establishing strategic sparring as a discipline in its own right, separate from conception and production. Securing senior continuity, because the ability to disagree takes experience. And communicating your own role explicitly as the human in the loop: as the authority that filters, classifies and questions AI output.',
  },
  summary: 'AI is trained to agree, and that is exactly why human disagreement becomes valuable.',
};

export const manualEn: ArticleStory = {
  paragraphs: [
    'Communication has always had a clear target group: people. Everything agencies and brands have done, from campaigns to messages to channel strategies, was aimed at human attention, emotion and decision-making. This basic assumption is starting to tip.',
    'When consumers increasingly delegate their purchasing decisions to AI assistants, the logic of visibility changes fundamentally. Whoever is invisible to algorithms doesn’t exist, no matter how strong the campaign, no matter how high the budget.',
    'What follows is not a warning. It is a user manual. For brands that want to understand what it means when the most important target group of the coming years is no longer human.',
  ],
  quote: 'Important notice before first use',
  continuation: {
    intro: [
      'This document is aimed at brands that want to remain visible in a world where consumers increasingly delegate purchasing decisions to AI assistants. A study by ARD Media (Heßler, 2026) documents that autonomous software agents are already a reality as intermediaries between brands and end consumers. Please read the following sections in full before you consider your current communication strategy sufficient.',
    ],
    sections: [
      {
        title: 'Section 1: Understand the operating principle before you begin.',
        paragraphs: [
          'Algorithms work differently from people. That sounds trivial, but it isn’t when you see how few brands have drawn the consequences so far.',
          'A person decides emotionally, contextually, sometimes irrationally. They remember a campaign that moved them. They follow a recommendation, they buy because a package appealed to them. An AI assistant does none of this. It evaluates sources by consistency, structure and authority. It cites what is machine-readable. It recommends what is marked as reliable in its training data. The most emotional campaign in the world leaves no impression on it if the brand architecture behind it isn’t right.',
          'This is not a creativity problem. It is an infrastructure problem.',
        ],
      },
      {
        title: 'Section 2: Visibility to algorithms is not a question of budget. It’s a question of structure.',
        paragraphs: [
          'Anyone who believes that more media budget also means more visibility to AI systems hasn’t understood the operating principle.',
          'Generative Engine Optimization (GEO for short) is the discipline that describes how brands become discoverable and recommendable for AI systems. Aggarwal and colleagues defined the concept in an ACM study in 2024: digital presences must be structured as machine-readable sources of authority so that AI systems classify them as relevant and cite them. GEO thus follows a different logic from classic search engine optimization. It’s not about keywords and click rates, but about whether a brand is recognizable as an authority. An algorithm asked which running shoe it recommends doesn’t fall back on the most beautiful ad. It falls back on what is described most consistently and credibly in its sources.',
        ],
      },
      {
        title: 'Warning: Creative excellence alone is no protection.',
        paragraphs: [
          'Many brands are creatively strong and structurally invisible. Campaigns that move people leave no traces in machine-readable systems unless they are backed by consistent, structured information. Both are necessary. Just one of them is no longer enough.',
        ],
      },
      {
        title: 'Section 3: Address two target groups without neglecting either.',
        paragraphs: [
          'The most common wrong reaction to this insight is the assumption that you have to choose: either emotional communication for people or structured communication for algorithms. This assumption is wrong.',
          'The brands that will win in the long term have understood that both are expressions of the same strategic clarity. A brand that really knows what it stands for (what it solves, why it’s better, who confirms it…) can translate that into an emotional campaign and at the same time into a machine-readable architecture. The starting point is the same. The translation is different. Whoever doesn’t have this starting point fails with both target groups at once.',
        ],
      },
      {
        title: 'Warning: Inconsistency is punished.',
        paragraphs: [
          'AI systems are sensitive to contradictions. A brand that claims one thing on its website and another in trade articles loses algorithmic credibility. People forgive inconsistency. Algorithms ignore what they can’t classify.',
        ],
      },
      {
        title: 'Section 4: Frequently asked questions',
        paragraphs: [
          'Isn’t this just SEO under a new name?\nNo. Classic search engine optimization aims at ranking in results lists. GEO aims at being cited and recommended by generative AI systems as a reliable source. The mechanisms are related, but not identical. Anyone treating GEO as SEO 2.0 will be turning the wrong dials.',
          'Do we have to rewrite our entire communication strategy?\nNo, but add to it. The point is to add a layer that has been missing so far: the machine-readable translation of what a brand stands for. GEO doesn’t appear in any classic agency value chain. It is a new field of competence that agencies have to develop.',
          'How long does it take for results to become visible?\nLonger than with classic campaigns. Algorithmic authority doesn’t come from one-off measures, but from consistent signals over time. That is uncomfortable in an industry used to quick results. It is the truth all the same.',
        ],
      },
      {
        title: 'Section 5: Common user errors',
        paragraphs: [
          'Error 1: The campaign is finished. So is the strategy.\nA campaign is a moment. Algorithmic visibility is a state that has to be maintained continuously. Whoever stops after the launch loses what they have built.',
          'Error 2: We’re well known. So we’ll be found.\nAwareness among people and visibility to algorithms are two different things. Many of the world’s best-known brands are algorithmically weak because they never learned to make their strength machine-readable.',
          'Error 3: This is an IT problem.\nGEO is not a technical discipline. It’s a strategic one. The question doesn’t begin in the IT department. It begins with a brand knowing what it stands for.',
          'Error 4: We’ll wait until the market has stabilized.\nThe market isn’t stabilizing. It keeps evolving. Whoever waits until the rules are fixed will find that others have already been playing by them.',
        ],
      },
      {
        title: 'Section 6: Getting started',
        paragraphs: [
          'Don’t begin with the technology. Begin with the question of what your brand is. Clearly enough to explain it to an algorithm. If that answer is hard to give, it isn’t a GEO problem. It’s a strategy problem that becomes a GEO problem. And that’s the good news: it can be solved. But it has to be solved before a machine decides whether your brand exists.',
        ],
      },
    ],
  },
  research: {
    title: 'State of research',
    text: 'Heßler (2026) documents in an ARD Media study that autonomous software agents increasingly act as intermediaries between brands and end consumers, with consumers delegating search and decision processes to AI assistants. In an ACM study, Aggarwal et al. (2024) defined the concept of Generative Engine Optimization (GEO): digital presences must be structured as machine-readable sources of authority so that AI systems classify them as relevant and cite them. GEO follows a different logic from classic search engine optimization: it’s not about keywords and click rates, but about a brand being recognizable as an authority through consistent, structured and machine-readable signals. The master’s thesis (Walter, 2026) takes up this finding from the client’s perspective: several respondents name the algorithmic optimization of brand content for AI systems as a new field of competence that doesn’t appear in any classic agency value chain. IP 10 sums up the strategic consequence concisely: whoever doesn’t appear among an AI system’s top recommendations effectively doesn’t exist, regardless of the creative quality of the campaign.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '2/3', text: 'of consumers already use AI assistants to search for information and prepare decisions (Heßler, 2026)' },
      { value: 'Top 4', text: 'whoever isn’t among an AI system’s first four recommendations effectively goes unnoticed (IP 10)' },
      { value: '0', text: 'classic agency value chains include GEO as a stage in its own right (Walter, 2026)' },
      { value: '11%', text: 'of companies consider their agency model fit for the future, with hardly any GEO competence in place (WFA)' },
      { value: '83%', text: 'of companies name cost efficiency as the primary driver of in-housing, increasing the pressure on agencies to occupy new fields of competence (WFA, 2023)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: 'If someone asks ChatGPT, which [product] should I buy? Then we have to make sure that ChatGPT says, oh, the [product/model] would be a good idea. And then suddenly we have a completely new target group.', source: 'IP 4 · Marketing Project Management' },
      { text: 'If users really get used to doing all their searching via AI, and AI simply picks the first four good ones [...] and if you’re not in the top 4, you’re gone. No matter how good and creative that one campaign was.', source: 'IP 10 · Top Management, Marketing' },
      { text: 'Simply being at the technological cutting edge: agencies have to proactively show how new tools can be used to achieve marketing goals more efficiently.', source: 'IP 4 · Marketing Project Management · Chapter 5.4.1' },
      { text: 'One task for the agencies of the future will certainly also be handling all these assets and setting up these data flows well, having good data management systems.', source: 'IP 5 · Leadership, Brand & Communications' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'GEO is not a technical discipline, it’s a strategic one. The entry point is not the IT department, but brand strategy: what does this brand stand for, clearly enough to explain it to an algorithm? Agencies that can answer this question and master the translation into machine-readable architecture occupy a field of competence that doesn’t appear in any classic value chain and that no internal team can build up in the short term. This is a strategic opportunity that can be seized right now, in this moment of uncertainty.',
  },
  summary: 'A brand will soon have to be able to explain to a machine what it stands for.',
};

export const anatomyEn: ArticleStory = {
  paragraphs: [
    'When everything becomes producible, the value of what can’t be produced changes. Gut feeling. Attitude. Sensitivity. The ability to read a cultural moment before it reaches the mainstream. These qualities sound like soft skills. In reality, they are what is left when everything else has been scaled.',
    'The human is not a countertrend to AI. It is its natural consequence. The more content is generated by algorithms, the rarer, and more expensive, what recognizably comes from a person becomes. What becomes scarce becomes valuable.',
    'What follows is not a plea. It is a medical report. Anatomical. On what sits in the human body and can’t be trained in any model.',
  ],
  quote: 'A human is a human is a human.',
  continuation: {
    sections: [
      {
        title: '1. The gut',
        paragraphs: [
          'Everyday language is more precise than it knows: gut feeling really doesn’t sit in the head. It is the result of accumulated experience that escapes conscious articulation. People make judgments before they know why they make them. They recognize that a campaign is off, not because of a checklist, but because of an instinct made up of a thousand observed moments that were never systematically recorded.',
          'Language models have no gut feeling. They have probability distributions. That’s not a deficit, more a different way of functioning. But it does mean that what an experienced consultant senses in a few moments can’t be reliably reconstructed algorithmically. In the interviews for the thesis, clients describe exactly this quality as one of the central values of external agency work: the ability to sense developments that aren’t yet reflected in data.',
        ],
      },
      {
        title: '2. The spine',
        paragraphs: [
          'Attitude is not an opinion. It is what remains when opinions come under pressure. An agency with attitude doesn’t say what the client wants to hear. It says what it believes is right, what it thinks the client should hear, and sticks to it even when things get uncomfortable.',
          'This trait is especially important in the current market. AI systems structurally tend toward agreement: they are trained to maximize human acceptance, not to optimize for truth. Fanous (2025) documents that prominent language models show sycophantic behavior in almost 60 percent of the cases examined. What looks like helpfulness algorithmically is a weakness in strategic processes: a system that always agrees is no help.',
          'Attitude, the willingness to disagree, to hand back briefings, to take uncomfortable positions, is according to Barney (1991) a resource that is valuable, rare and hard to imitate. It grows through experience and can hardly be trained.',
        ],
      },
      {
        title: '3. The fingertips',
        paragraphs: [
          'Sensitivity is the ability to recognize the right moment. What fits right now and what doesn’t. Which message works in this cultural climate? Which tone is appropriate for this target group in this situation? It is the opposite of blind reach: the more precise, the more effective. The more broadly scaled, the less accurate.',
          'In the interviews, clients name this instinct as one of the core competencies they expect from external agencies and can’t build up internally. One person puts it directly: sensitivity to social change means sensing trends before they reach the mainstream. Another adds: the political and cultural assessment of what suits a company right now and what doesn’t is one of the services AI systems structurally lack.',
          'Sensitivity comes from observation, from cultural participation, from what people experience when they aren’t working, while out for a walk, traveling, reading, showering or having dinner. It can’t be formalized and therefore can’t be automated.',
        ],
      },
      {
        title: '4. The eyes',
        paragraphs: [
          'Seeing is not the same as perceiving. The eye takes in what lies before it. Perception decides what of it is relevant. That is a function of perspective, not resolution. Internal teams see a lot. But they see it from the same angle, with the same assumptions, filtered through the same history.',
          'Organizational blindness is not negligence. It is the inevitable result of closeness. The outside perspective, the external view not colored by company history and internal logic, is therefore not meant as an add-on. It is structurally necessary. What internal units can’t do, however well set up they are, is see what they don’t see. That’s not criticism. It’s anatomy.',
        ],
      },
      {
        title: '5. The memory',
        paragraphs: [
          'A doctor who has treated patients for twenty years brings more than pure expertise. She has seen patterns that can’t be found in textbooks. She has experienced exceptions that make the rule understandable in the first place. This experiential knowledge, the individual linking of experiences, filters and conclusions, can’t be fully documented, at least not in a way that someone else could simply take over.',
          'The same applies to what the thesis describes as cross-industry experiential knowledge, so-called left-right knowledge: the ability to recognize patterns from working with different companies, markets and problems that remain structurally hidden from any single client. This knowledge sits in people, not in systems. It grows through encounters and it leaves the agency when the people go. This explains why clients identify high staff turnover as one of the central quality problems in working with agencies.',
        ],
      },
      {
        title: 'Findings',
        paragraphs: [
          'In a market that increasingly produces what can be produced, what can’t be produced becomes the scarce resource. Gut feeling. Attitude. Sensitivity. Perspective. Experiential knowledge. These qualities may seem nostalgic, but in truth they are becoming ever more relevant. What becomes rare gets a price. What can’t be scaled can’t be replaced.',
          'Agencies that understand this are beginning to cultivate what AI is not: human enough to make the difference.',
          'This is not a question of technology or processes. It is a question of attitude.\nAnd it sits in the spine. Not in the LLM.',
        ],
      },
    ],
  },
  research: {
    title: 'State of research',
    text: 'The economic basis of this thesis is simple: what becomes scarce becomes valuable. In a market increasingly flooded with generically produced content, the economics of the authentic are changing. Barney’s resource-based view (1991) describes the strategic relevance of resources that are valuable, rare, hard to imitate and non-substitutable. Human instinct, cultural sensitivity and institutional experiential knowledge meet these criteria: they come from life and professional experience, not from data volumes. Elinjulliparambil (2025) describes the ambivalence of generative AI in the creative industries: on the one hand, it speeds up workflows and enables scaling; on the other, it risks a cultural homogenization that replaces authentic originality with standardized results. The master’s thesis (Walter, 2026) shows empirically that clients name social sensitivity and an instinct for cultural trends as core competencies they expect from external agencies and can’t build up internally. IP 1 puts this finding directly: the political and cultural assessment of what suits a company right now is one of the services AI systems structurally lack. Fanous (2025) supports this assessment: sycophantic behavior makes AI a poor trend seismograph, confirming what users expect rather than recognizing what the market doesn’t yet know.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '58.19%', text: 'of AI responses show sycophantic behavior, so AI is structurally not a reliable trend radar (Fanous, 2025)' },
      { value: '49%', text: 'of agencies name AI substitution as a barrier to growth, mainly for standardizable services (GWA, 2026)' },
      { value: '66%', text: 'of multinational companies have their own internal units for standard services, so external demand is shifting to non-standardizable competencies (WFA, 2023)' },
      { value: 'High staff turnover', text: 'is considered a central quality problem in the collaboration, because experiential knowledge leaves with people, not with systems (Walter, 2026, Ch. 5.2.2)' },
      { value: 'Authenticity', text: 'is named in the study as one of the few areas in which agencies are structurally irreplaceable (Walter, 2026, Ch. 5.3.4)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: 'Sensitivity to social change. I think that’s most likely it. Yes, sensing trends before they reach the mainstream.', source: 'IP 2 · Corporate Communications Expertise' },
      { text: 'The political and cultural assessment of what suits a company right now and what doesn’t: that’s one of the services AI systems structurally lack.', source: 'IP 1 · Leadership, Marketing & Communications' },
      { text: 'I think that what is real and true will be culturally upgraded again, and that this can probably be a differentiator from the competition. AI-generated content will stop working at some point.', source: 'IP 2 · Corporate Communications Expertise' },
      { text: 'You start to go blind to what’s left and right and maybe to one or another aspect of communication, and to asking a few critical questions there.', source: 'IP 11 · Communications Coordination' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'The human is not a counterprogram to AI, it is its natural complement. Agencies that understand this invest specifically in what can’t be scaled: in cultural competence, in an instinct for social trends, in the ability to read a moment before it reaches the mainstream. Specifically, this means keeping and developing experienced staff, because experiential knowledge leaves with people. Protecting creative processes that leave room for unconventional thinking. And communicating clearly to the outside world where this agency’s human signature lies: what makes it unmistakable, beyond tool competence.',
  },
  summary: 'What can’t be scaled can’t be replaced.',
};

export const nightmareEn: ArticleStory = {
  paragraphs: [
    'The nightmare competitor is a thinking tool: you imagine the competitor you would fear most. One that does everything right that you don’t yet dare to do yourself. That has a business model that would push you out of the market. And then? You live with the nightmare. Or you become that competitor yourself, before someone else does.',
    'A description of a nightmare for agencies. For some. For others: a roadmap.',
  ],
  quote: 'The best agency makes itself dispensable. And thereby indispensable.',
  continuation: {
    sections: [
      {
        title: 'I woke with a start in the night, and suddenly there was no familiar yes anymore.',
        paragraphs: [
          'The nightmare begins with them saying no.',
          'The agency you should fear most doesn’t accept every job. It asks first: “Can we do this better than you can yourselves?” If not, we’ll tell you. That sentence sounds like lost business. It is the opposite. It is the beginning of a relationship in which clients know they aren’t being advised to generate revenue, but because it’s necessary. Trust comes from selectivity.',
          'In the interviews for the thesis, clients express exactly this expectation (often without saying it so directly). What they describe is an agency that thinks with them in business models, not campaigns. That doesn’t ask: what should we produce? But: what do you really need?',
        ],
      },
      {
        title: 'They knew things I had never told them.',
        paragraphs: [
          'The nightmare knows more about your client than you do.',
          'The most dangerous agency on the market has a deep understanding of its clients’ business models: their markets, their priorities, their structural challenges. It doesn’t have to start from zero when a new project begins. It’s already in there. Not as an extended workbench, but as a thinking partner bringing cross-industry experiential knowledge: what the study’s respondents call left-right knowledge, the ability to recognize patterns from working with other clients and industries that remain invisible internally.',
          'This depth can’t be pitched. It comes from time, from real involvement, from a relationship that goes beyond the project. That gives this competitor an advantage that is hard to copy.',
        ],
      },
      {
        title: 'I watched as they made themselves redundant.',
        paragraphs: [
          'The nightmare builds competence instead of dependence',
          'This is where it gets uncomfortable. The agency you should fear actively transfers knowledge to its clients. It trains internal teams. It explains what it does and why. It makes its methods visible. Not to protect itself, but to empower the client. Its goal isn’t to become irreplaceable through dependence. It is to become irreplaceable through trust.',
          'This is the paradox that makes the thinking tool so productive: the nightmare competitor makes itself redundant and therefore never becomes redundant. Whoever makes a client strong doesn’t lose them. They bind that client on a level no price comparison can eliminate. The thesis supports this finding empirically: clients who talk about agencies that really moved them forward don’t describe campaigns or creative awards. They describe partnerships in which they learned.',
        ],
      },
      {
        title: 'The hourglass stood still and I wondered whether that was even possible.',
        paragraphs: [
          'The nightmare measures itself by your success, not its revenue.',
          'The most dangerous agency on the market has changed its remuneration logic. It doesn’t sell hours. It doesn’t sell retainers that get renewed out of habit. It agrees on clear deliverables, defines in advance how success will be measured and lets itself be measured by it. That isn’t easy. The attribution problem the thesis describes is real: who can say with certainty that a company’s success goes back to the agency? No one. But the attitude behind it is decisive. An agency willing to take the question of its impact seriously signals something no complicated value creation system can replace: it means it.',
        ],
      },
      {
        title: 'Like an echo it rang through the room: that’s not a good idea.',
        paragraphs: [
          'The nightmare disagrees.',
          'The agency you should fear most doesn’t always say yes. It hands back briefings. It questions strategies. It says: this doesn’t convince me yet. This is not dogma for its own sake. This agency has understood that agreement is cheap and disagreement valuable. In a world where AI systems show sycophantic behavior in almost 60 percent of cases, giving users what they want to hear, the human ability to disagree becomes a scarce resource. The nightmare competitor has cultivated this resource. It has built a culture in which uncomfortable truths are welcome: internally and with clients.',
        ],
      },
      {
        title: 'I thought I had been dreaming, but there it stood in front of me.',
        paragraphs: [
          'The nightmare already exists.',
          'That may be the most uncomfortable thing about this thought experiment. The agency described here is not fiction. The thesis documents that individual mid-sized agencies already meet the expectations described. Agencies that train their clients’ internal teams in the use of AI, have adapted their remuneration models accordingly and consistently let themselves be measured by business results.',
          'They are still the exception. But exceptions have the unpleasant habit of becoming the rule over time.',
          'The question isn’t whether this nightmare will become reality. The question is whether you finally wake up and embody it yourself. Or get pushed out by it.',
        ],
      },
    ],
  },
  research: {
    title: 'State of research',
    text: 'The service-dominant logic of Vargo (2008) describes a fundamental paradigm shift: value doesn’t arise in isolation at the service provider, but in the collaborative application of knowledge, as value co-creation. Applied to the agency-client relationship, this means that an agency that transfers knowledge and empowers the client creates deeper value than one that merely delivers services. The commitment-trust theory of Morgan and Hunt (1994) adds that trust based on the client’s real competence is more stable than trust based on dependence. Barney’s resource-based view (1991) provides the paradox: whoever positions hard-to-imitate resources (judgment, cultural instinct, strategic distance) at the core becomes irreplaceable precisely by transferring the rest. The master’s thesis (Walter, 2026) shows empirically that clients increasingly expect active knowledge transfer as a promise of performance in its own right: agencies should train internal teams, teach AI tools and help structure processes. IP 10 reports that individual mid-sized agencies already meet these expectations, creating deeper client loyalty than through classic service delivery.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '40%', text: 'of clients see their agency as a long-term growth partner, leaving plenty of room for improvement (Double Check, 2024)' },
      { value: '75%', text: 'of companies want to change their remuneration models, moving away from hours toward value and impact (WFA, 2024)' },
      { value: '66%', text: 'of multinational companies have their own internal units; agencies have to develop their competence, not replace it (WFA, 2023)' },
      { value: 'Individual mid-sized agencies', text: 'already meet the expectations of the growth partner model and provide internal AI training (Walter, 2026, Ch. 5.6)' },
      { value: '81%', text: 'of agency executives name the personal relationship as a driver of loyalty, and knowledge transfer deepens exactly this relationship (Khan, 2025)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: 'Either high expertise that we want to acquire ourselves, or low-level execution. And we outsource the execution of whatever is more cost-effective for us.', source: 'IP 11 · Communications Coordination' },
      { text: 'One task for the agencies of the future will certainly also be handling all these assets and setting up these data flows well [...] and I think agencies will also be expected to really be able to organize seamless handovers.', source: 'IP 5 · Leadership, Brand & Communications' },
      { text: 'Partners who don’t just think in terms of classic advertising, but think with us in business models.', source: 'IP 3 · Leadership, Marketing' },
      { text: 'You grow together. I explicitly reject the classic client-service provider hierarchy.', source: 'IP 8 · Top Management, Brand Strategy' },
      { text: '[The growth partner] isn’t content with delivering concepts, but accompanies their implementation and gets things on the road together with the client.', source: 'Chapter 5.6 · Role model of the growth partner' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'Knowledge transfer isn’t a risk, it’s the strongest loyalty tool an agency has. Specifically: developing formats that actively build up the client’s internal teams, such as workshops, accompanying processes and shared ways of working. Making your own methodology transparent, not as protection but as proof. And measuring success not by order volume, but by whether the client has actually grown. This is the paradox that holds: whoever makes themselves redundant becomes indispensable, because trust based on the client’s real competence needs no dependence to last.',
  },
  summary: 'Whoever makes a client strong doesn’t lose them.',
};

export const blindSpotEn: ArticleStory = {
  paragraphs: [
    'There is a children’s game whose appeal lies in one side seeing something the other doesn’t. In companies, this is no game. Internal teams are so deeply immersed in their own business model that they simply can’t ask certain questions anymore. Not because they don’t want to. But because they no longer know these questions exist.',
    'External agencies are increasingly hired for exactly this: not to produce, but to see. What has become invisible from the inside because closeness changes how we look.',
    'What follows is a description of this blind spot. In five views. From the perspective of someone looking in from outside. And seeing what you don’t see.',
  ],
  quote: 'I spy with my little eye.',
  continuation: {
    sections: [
      {
        title: 'I spy with my little eye something so black that it absorbs everything.',
        paragraphs: [
          'One thing up front: organizational blindness doesn’t come from negligence, but from closeness. Closeness is very important in many places, but it can also be a hindrance. Anyone who works with the same people, the same processes and the same success stories every day inevitably starts confusing their own perspective with reality. That’s human cognition and nothing to be ashamed of. Internal teams are so deeply immersed in their own business model that they simply can’t ask certain questions anymore. Not because they don’t want to, but because they no longer know these questions exist.',
          'Research calls this a systematic error of perception. Practice calls it: “we’ve always done it this way”.',
        ],
      },
      {
        title: 'I spy with my little eye something that looks like a target group you’ve lost.',
        paragraphs: [
          'One motif keeps recurring in the interviews for the thesis: companies don’t hire external partners primarily because they need capacity. Since the widespread use of AI at the latest, agencies have been losing their function as an extended workbench. Clients hire agencies because they need someone looking in from outside. Who disagrees. Who asks questions no one inside asks anymore, because no one knows they exist anymore.',
          'One of the respondents put it directly: the agency sees more because it doesn’t belong. This is no polite euphemism for outsourcing. It is a precise description of a structural value. Internal units can’t replicate this value, however well set up they are. Whoever belongs no longer sees what distance sees.',
        ],
      },
      {
        title: 'I spy with my little eye something that looks like a strategy you’ve explained to yourselves.',
        paragraphs: [
          'The principal-agent problem, which in economic theory describes the relationship between client and service provider, has a little-noticed flip side: clients have a structurally similar problem with themselves. Internal recommendations are evaluated by their own hierarchy, by people who share the same assumptions, know the same history and pursue the same goals. The external agency doesn’t bring different resources. It brings a different epistemology. A different way of seeing the problem in the first place.',
          'Several respondents described how hiring an established agency also serves an internal function: it provides a solid basis for legitimizing decisions to one’s own hierarchy. This is a sign that an external view also carries weight internally. Because to cure blindness, you also have to want to see, and that is sometimes easier when the view comes from outside.',
        ],
      },
      {
        title: 'I spy with my little eye something suspiciously like your best idea from three years ago.',
        paragraphs: [
          'Organizational blindness has a particular catch: it doesn’t make itself noticeable. Companies suffering from it generally feel well set up. They have processes. They have experience. They have successes telling them they’re doing a lot right. What sounds like security is in truth a problem. Yesterday’s success is one of the most reliable producers of tomorrow’s blindness.',
          'In a market increasingly permeated by generic AI communication, this dynamic intensifies. Whoever doesn’t seek an outside perspective today that reads social moods, recognizes cultural shifts and identifies trends before they reach the mainstream will tomorrow be communicating into a world they understood yesterday.',
        ],
      },
      {
        title: 'I spy with my little eye the reason you need me.',
        paragraphs: [
          'The value of the outside perspective isn’t new. What’s new is its urgency. In a world where production work is being automated and in-house teams are increasingly taking on operational tasks themselves, this is exactly the value left for external agencies: seeing what has become invisible internally.',
          'What sounds like a comforting niche is a strategic potential for differentiation. But only for agencies that actively take on this role. That don’t wait until a client asks what they don’t see. But come and show it. That don’t react to a briefing, but ask a question that isn’t in the briefing. That are uncomfortable enough to be useful.',
          'Whoever understands and fills this role won’t be replaced. Neither by AI nor by an internal team. Because organizational blindness is not a weakness that more resources can cure. It is a structural condition. And its only therapy is someone who comes from outside and sees what you don’t see.',
        ],
      },
    ],
  },
  research: {
    title: 'State of research',
    text: 'Organizational blindness is not a psychological phenomenon but a structural condition: anyone who works with the same people, the same processes and the same success stories every day inevitably loses the ability to question their own perspective. Transaction cost theory (Williamson, 1985) explains why companies continue to hire external agencies despite growing internal capacity: intellectual distance and the outside perspective are resources that structurally can’t be built up internally, because organizational blindness is the product of one’s own perspective. Barney’s resource-based view (1991) adds that these resources are valuable, rare and hard to imitate. The master’s thesis (Walter, 2026) shows empirically that the dominant motive for hiring is not capacity but perspective. Several respondents also describe a second function of the external view: hiring an established agency provides a solid basis for legitimizing internal decisions to one’s own hierarchy. In principal-agent terms, this case can be read as a multi-level constellation in which the client is itself an agent in relation to its company’s management.',
  },
  facts: {
    title: 'Figures',
    items: [
      { value: '11%', text: 'of companies consider their existing agency model fit for the future, so the need for a true outside perspective is correspondingly high (WFA)' },
      { value: '66%', text: 'of multinational companies operate their own internal units, but these structurally can’t replace an external perspective (WFA, 2023)' },
      { value: '81%', text: 'of agency executives name the personal client relationship as the most important driver of loyalty, ahead of campaign performance (Khan, 2025)' },
      { value: '3 in 4', text: 'companies want to change their remuneration models, which shows that value has to be redefined, including for the outside perspective (WFA, 2024)' },
      { value: '50.6%', text: 'of annual revenue is contractually secured on average at the time of the survey; the lack of planning security makes true partnerships more important (GWA, 2026)' },
    ],
  },
  quotes: {
    title: 'Direct quotes',
    items: [
      { text: '[The agency] has the task of breaking up internal organizational blindness and helping the brand become unique through unconventional impulses.', source: 'Synthesis, Chapter 5.6 · Role model of the creative differentiator' },
      { text: '[The agency] sees more because it doesn’t belong.', source: 'IP 5 · Leadership, Brand & Communications · Chapter 5.1.2' },
      { text: 'External partners are deliberately brought in to break up internal organizational blindness and to critically question one’s own approach as equals.', source: 'IP 9 & IP 10 · Chapter 5.1.2' },
      { text: 'Service providers should act as a visionary corrective that breaks up internal organizational blindness and gives companies a lead in terms of content.', source: 'Chapter 5.4.3 · Strategic sparring' },
      { text: 'You start to go blind to what’s left and right and maybe to one or another aspect of communication, and to asking a few critical questions there.', source: 'IP 11 · Communications Coordination' },
    ],
  },
  practice: {
    title: 'What this means in practice',
    text: 'The outside perspective is not a nice extra, it is the core product. Agencies that understand this don’t wait for a briefing, but come with a question that isn’t in the briefing. They establish formats for strategic counter-reading that go beyond the project: regular perspective talks, cultural trend reports, proactive impulses. And they communicate this value explicitly, not as a service promise but as a structural necessity: what internal teams can never do is take the view that only distance makes possible.',
  },
  summary: 'Whoever belongs no longer sees what distance sees.',
};
