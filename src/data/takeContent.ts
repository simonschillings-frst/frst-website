// Inhalte der Take-Seiten. Takes ohne Eintrag zeigen noch den Blindtext aus Take.astro.
// Der Text liegt bisher nur auf Englisch vor und wird auch auf den deutschen Seiten angezeigt.

export interface TakeSection {
  heading: string;
  paragraphs: string[];
  /** Hervorgehobener Satz, groß und mittig nach den Absätzen */
  pull?: string;
  /** Aufzählung nach den Absätzen, je Punkt fett gesetzter Titel und Erklärung */
  list?: { title: string; text: string }[];
  /** Absätze nach der Aufzählung */
  paragraphsAfter?: string[];
  /** Kurzfazit „→ In short“ am Ende des Abschnitts */
  inShort?: string;
}

export interface TakeContent {
  /** Kurzer Anreißer für die Karte im Slider der Perspectives-Seite */
  teaser: string;
  sections: TakeSection[];
  sources?: string[];
}

export const takeContent: Record<string, TakeContent> = {
  // Take 1 (Adresse noch /perspectives/lorem-ipsum, darauf verlinkt auch die Startseite)
  'lorem-ipsum': {
    teaser: 'Creativity was never a production problem. It is a perspective problem.',
    sections: [
      {
        heading: 'The promise',
        paragraphs: [
          'Ever more companies are building in-house creative teams, and the pitch is simple. With AI, anyone in marketing can generate copy, images and campaign ideas in seconds. Faster than an agency. Cheaper than an agency. It sounds like logic. But most of all: It is a trap.',
          'Speed is not excellence. Companies that treat creativity as a solvable production problem are missing an important point.',
        ],
        pull: 'Creativity was never a production problem. It is a perspective problem.',
        inShort: 'AI fixes how fast you make things. It does not fix what you can’t see.',
      },
      {
        heading: 'Why experts get stuck',
        paragraphs: [
          'Insiders know everything: the product, the politics, the history of every best practice. That’s their value. And also their limit. Ask a team that has worked on one product for ten years for a fresh idea, and you get the eleventh version of the old one. None of them is lazy. Our brains are efficient: they take the path they know. Over time, the company’s language becomes the company’s restriction.',
          'Scott Page and Lu Hong made this case in their famous 2004 model: diverse problem solvers can beat groups of high-ability ones. The math has been contested, but the intuition holds. A team that thinks alike misses alike.',
        ],
      },
      {
        heading: 'The multiplier',
        paragraphs: [
          'Now add artificial intelligence. A language model returns the statistically likely answer, built from the past. A team with blind spots that prompts a model gets its own assumptions back, only faster, varied and more polished. What you ask depends on what you already believe is possible. The model answers inside that frame and hands it back as insight.',
          'The evidence is piling up. In a 2024 Science Advances experiment, about 300 people wrote short stories, some with AI-generated ideas. Outside raters found the AI-assisted stories more creative. But those stories were about 10 percent more similar to each other. Better for each writer, worse for everyone. A 2025 study led by Liwei Jiang found the same across models: ask different AI systems an open-ended question and they answer in strikingly similar ways. The authors call it the “Artificial Hivemind”.',
          'Your competitors use the same models. Welcome to the Sea of Sameness. You are paying to join it.',
        ],
        inShort: 'AI does not remove blind spots. It scales them, and everyone gets the same ones.',
      },
      {
        heading: 'The new job of the outsider',
        paragraphs: [
          'If average becomes free, average stops being worth anything. What stays scarce is a different way of looking. Agencies were once paid for hands. AI now does much of the handwork. What it cannot do is stand outside.',
          'A good external team brings patterns from other industries. It asks naive questions: why does everyone in your category do the same thing? It has no stake in internal politics. Not necessarily better tools. But a different position.',
        ],
      },
      {
        heading: 'The bottom line',
        paragraphs: [
          'Mediocrity just got cheaper. Distinctiveness did not. Insourcing with AI optimizes the status quo. That is fine for work that should be fast and cheap. But if you want to enter new markets and stand out, you don’t need faster yes-sayers. You need friction. The question is not “agency or AI?” It is: who will show us what we can no longer see?',
        ],
        inShort: 'Cheap average is everywhere. The outside view is rare.',
      },
    ],
    sources: [
      'Hong, L. & Page, S. (2004): Groups of diverse problem solvers can outperform groups of high-ability problem solvers, PNAS. Critique: Thompson, A. (2014), Notices of the AMS.',
      'Doshi, A. & Hauser, O. (2024): Generative AI enhances individual creativity but reduces the collective diversity of novel content, Science Advances. Summary: ScienceDaily.',
      'Jiang, L. et al. (2025): Artificial Hivemind: The Open-Ended Homogeneity of Language Models (and Beyond), presented at NeurIPS 2025.',
    ],
  },
  // Take 2
  'lorem-ipsum-02': {
    teaser: 'Campaigns buy attention. Documentaries earn it.',
    sections: [
      {
        heading: 'The attention paradox',
        paragraphs: [
          'We live in the age of the three-second hook. Every brand wants to stop the scroll. Every video needs a punchline before anyone has time to look away. The solution? Make it shorter. Make it louder. Add another cut. Another twist. Another reason not to leave.',
          'But there is a problem with this logic: the more we compete for attention with constant stimulation, the less attention we seem to have left.',
          'And somehow, brands have decided that the answer is even more of the same.',
          'Short formats are not the enemy. They are useful, efficient and often entertaining. But they have a limitation: while they can create awareness they rarely create meaning. You can show what a company does in 15 seconds. You cannot explain why it matters.',
        ],
        pull: 'Attention is not the same as connection. And a view is not a relationship.',
        inShort: 'We have learned to capture attention. We are forgetting how to hold it.',
      },
      {
        heading: 'People still have time. Just not for everything.',
        paragraphs: [
          'The idea that nobody has time for long content is simply wrong. People spend hours watching Twitch streams, listening to podcasts or finishing entire seasons in one weekend.',
          'The numbers tell a similar story. In its 2024 Connected Audience Study, Involved Media found that 93% of US respondents had watched long-form video in the previous month, spending an average of 34 hours per week across long-form video platforms. In 2026, Edison Research reported that 82% of weekly podcast consumers actively watched video podcasts.',
          'People are not running out of time. They are becoming more selective about what deserves it.',
          'The difference is simple: nobody watches a ten-hour stream because it is short. They stay because something keeps happening. Because they care about the person, the story or the world they are entering.',
        ],
      },
      {
        heading: 'The documentary advantage',
        paragraphs: [
          'A campaign is built to deliver a message. A documentary is built to make you care.',
          'That is a fundamental difference. Campaigns compress. Documentaries explore. Campaigns tell you what to think about a brand. Documentaries give you reasons to form your own opinion.',
          'A well-made corporate documentary does not need to shout its message. It lets people, places, conflicts and real moments do the talking. It can show the complexity behind a product, the ambition behind an idea or the people behind a promise.',
          'It replaces claims with evidence. Instead of saying “we are innovative”, it shows what innovation actually costs, who makes it happen and what is at stake.',
          'This is not a longer commercial. It is a different kind of relationship with an audience.',
        ],
      },
      {
        heading: 'The conditions for staying',
        paragraphs: [
          'Of course, length alone is not a virtue. Nobody owes a brand 30 minutes of their life.',
          'Long-form branded content only works when it meets a few conditions:',
        ],
        list: [
          { title: 'A story, not a sales pitch.', text: 'There must be a genuine question, tension or discovery. Something that makes people want to know what happens next.' },
          { title: 'Real people, not brand characters.', text: 'Audiences connect with human complexity, not perfectly rehearsed corporate statements.' },
          { title: 'Access, not advertising.', text: 'Show us something we would not normally get to see. Open doors. Reveal processes. Let us into a world.' },
          { title: 'A point of view.', text: 'Neutrality is not the same as honesty. A film needs a perspective, even if it does not have all the answers.' },
          { title: 'Respect for the audience.', text: 'No endless product shots. No forced brand moments. No explaining what the audience can understand for itself.' },
        ],
        paragraphsAfter: [
          'A 2025 study by Krowinska and Dineva in the Journal of Marketing Management reinforces a related point: meaningful engagement with branded content depends on functional, emotional and symbolic value. Being branded is not enough. There has to be something in it for the viewer.',
        ],
      },
      {
        heading: 'Who should make long films?',
        paragraphs: [
          'Not every brand needs a documentary. But some have much more to gain from one than from another campaign.',
          'Brands with complex products or processes that need explaining. Companies whose value lies in expertise, craftsmanship or people rather than a simple product benefit. Businesses operating in industries where trust matters more than impulse. And brands with a genuine cultural perspective, a strong mission or a world that people would find interesting even without the logo.',
          'Especially when a brand wants to change how it is perceived, not just remind people that it exists.',
        ],
      },
      {
        heading: 'The bottom line',
        paragraphs: [
          'Short formats are good at getting people through the door. Long formats can give them a reason to stay.',
          'In a world where everyone is fighting for the next three seconds, choosing to tell a 30-minute story is almost an act of rebellion. It signals confidence. Confidence in your subject, your people and your audience.',
          'The future of brand communication will not be short or long. It will be about knowing when to do which. But brands that only know how to interrupt will eventually struggle to mean anything.',
        ],
        inShort: 'Campaigns buy attention. Documentaries earn it. And the brands worth spending time with have nothing to fear from taking their time.',
      },
    ],
    sources: [
      'Involved Media (2024): Connected Audiences Fall 2024 Report – Connected Video. US consumer study, n=2,026.',
      'Edison Research / SSRS (2026): The Podcast Consumer 2026. Research on podcast and video podcast consumption.',
      'Krowinska, A. & Dineva, D. (2025): The role and forms of social media branded content driving active customer engagement behaviours. Journal of Marketing Management, 41(9–10), 1030–1060. https://doi.org/10.1080/0267257X.2025.2544808',
    ],
  },
  // Take 3
  'lorem-ipsum-03': {
    teaser: 'AI can make the work. Humans must make the decisions.',
    sections: [
      {
        heading: 'The comforting story',
        paragraphs: [
          'Whenever someone asks what AI means for creativity, the industry has a reassuring answer: The human will remain important. Because humans have intuition. Emotion. Empathy. Originality. Things machines cannot do.',
          'Sounds good. But it is not a strategy. It is wishful thinking.',
          'If AI can produce a hundred campaign ideas before a creative team has finished its first coffee, being slightly more creative is not enough. And being slower certainly isn’t a competitive advantage.',
          'The human will not remain relevant simply because we say so. Nor because human creativity is somehow sacred.',
          'The human remains valuable when human judgment changes the outcome. And when agencies can show clients exactly why that change matters.',
        ],
        inShort: 'Human creativity is not a birthright. It is a job that needs to be done.',
      },
      {
        heading: 'The value of disagreement',
        paragraphs: [
          'AI is very good at producing plausible answers. That is both its strength and its weakness. A plausible idea looks finished. It sounds convincing. It fits the brief. And suddenly, nobody asks whether it is actually any good.',
          'This is where human judgment becomes valuable: In challenging the version everyone already likes.',
          'A 2025 study at the CHI Conference tested 52 pairs of people working on creative tasks, with and without ChatGPT. AI support did not improve overall performance. In fact, participants developed their ideas less. The tool had made it easier to produce answers, not necessarily to think them through.',
        ],
      },
      {
        heading: 'So what should agencies do?',
        paragraphs: [
          'Make disagreement part of the process. Every AI-assisted concept should come with a counterargument: What is generic about it? Where does it misunderstand the brand? What cultural assumption does it get wrong?',
          'And protect the person making that argument. A good objection should count as good creative work, even when the team eventually chooses the AI suggestion.',
          'For important decisions, test both routes against the same criteria: brand fit, distinctiveness and audience response. Show clients what the AI suggested, why the team challenged it and what the alternative achieves.',
        ],
        pull: 'Do not sell human creativity as an abstract promise. Sell the quality of the decision.',
      },
      {
        heading: 'The value of responsibility',
        paragraphs: [
          'There is another problem. AI makes producing more options incredibly cheap. Which means options are no longer the scarce resource. Decisions are.',
          'If an agency presents 50 variations, it has not necessarily done more creative work. It may simply have outsourced the difficult part to the client.',
          'The real work starts before the prompt. It starts with understanding the world the brand operates in. Talking to customers. Visiting places. Listening to people who are not in the meeting. Finding out what the brief leaves out.',
          'Then comes the uncomfortable part: taking a position.',
          'Before designing anything, write down one sentence: We want to say X, not Y. AI can explore the possibilities, but it should not decide what the brand stands for.',
          'Research supports this more balanced view. A 2025 meta-analysis by Holzner, Maier and Feuerriegel, covering 28 studies and more than 8,200 participants, found that people working with generative AI performed better on creative tasks on average. But their ideas also became significantly less diverse.',
          'The lesson is not to use less AI. It is to use it without surrendering the choices that make the work distinctive.',
          'And the job does not end at delivery. Agencies should define what success looks like, check what the work actually does and take responsibility when it misses the mark.',
        ],
      },
      {
        heading: 'What needs to change',
        paragraphs: [
          'This requires more than a new prompt workshop.',
          'Agencies need to budget for research, critical review and creative judgment. They need to present fewer, better-reasoned options instead of selling volume. They need to make the human contribution visible in proposals and charge for it.',
          'Clients need to stop buying creative output by the kilo. A pitch should not only reward the best-looking execution, but also the strongest reasoning behind it.',
          'And the industry needs to talk about the alternatives that were rejected, the assumptions that were challenged and the mistakes that were made. Not just the shiny success stories.',
        ],
      },
      {
        heading: 'The bottom line',
        paragraphs: [
          'If agencies only deliver images, headlines and variations, they are competing with AI on its strongest ground. And they will lose.',
          'The human advantage is not that we can generate something machines cannot. It is that we can question what should be generated in the first place, connect it to reality and take responsibility for what happens next.',
          'But that advantage only exists if we build a process around it. And if clients are willing to pay for it.',
        ],
        inShort: 'AI can make the work. Humans must make the decisions. But only if we give them the right to disagree – and the responsibility to be right.',
      },
    ],
    sources: [
      'CHI Conference (2025): CreAItive Collaboration? Users’ Misjudgment of AI-Creativity Affects Their Collaborative Performance. Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems. https://doi.org/10.1145/3706598.3713886',
      'Holzner, N., Maier, S. & Feuerriegel, S. (2025): Generative AI and Creativity: A Systematic Literature Review and Meta-Analysis. Preprint, 28 studies, 8,214 participants.',
      'Tang, M. et al. (2025): Who Is the Best Creative Thinking Partner? An Experimental Investigation of Human–Human, Human–Internet, and Human–AI Co-Creation. Journal of Creative Behavior, 59(3).',
    ],
  },
};
