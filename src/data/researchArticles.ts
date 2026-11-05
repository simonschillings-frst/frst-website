import { localePath, useLang, type Lang } from '../i18n';
import { anatomyEn, blindSpotEn, confessionEn, manualEn, nightmareEn, obituaryEn, therapySessionEn } from './researchArticles.en';

type Tone = 'night' | 'dusk' | 'sky' | 'desert';

export interface ResearchArticle {
  no: string;
  title: string;
  href: string;
  text: string;
  tone: Tone;
  /** Bild im Teaser, in der Regel der Header des Artikels. Ohne Angabe steht dort der Platzhalter. */
  image?: string;
  /** Adresse der Blindtext-Unterseite unter /research/<slug>. Artikel mit eigener Seite haben keinen slug. */
  slug?: string;
  /** Sprache des Teasers, falls der Artikel nur in einer Sprache existiert */
  lang?: Lang;
  /** Einstiegssatz der Unterseite. Ohne Angabe steht dort Blindtext. */
  lead?: string;
  /** Text unter dem Einstiegssatz. Ohne Angabe steht dort Blindtext. */
  story?: ArticleStory;
}

export interface ArticleStory {
  /** Bild im Header. Ohne Angabe steht dort der bunte Verlauf. */
  heroImage?: { src: string; alt: string; position?: string };
  /** Eigener Bildausschnitt für den Teaser. Ohne Angabe zeigt der Teaser das Header-Bild. */
  teaserImage?: string;
  /** Bild in der Textspalte statt des Bildstreifens. Ohne `src` steht dort ein Platzhalter mit `label`. */
  bodyImage?: { src?: string; alt?: string; label: string };
  /** Bild über die ganze Breite in seinem eigenen Format. Ohne Angabe steht dort ein Platzhalterstreifen. */
  bandImage?: { src: string; alt: string };
  eyebrow?: string;
  /** Jeder Eintrag steht in einer eigenen Zeile */
  title?: string[];
  paragraphs: string[];
  /** Großes Zitat unter dem Text */
  quote: string;
  /** Text nach dem Bildband: optionale Absätze, dann Abschnitte mit Subheadline. \n im Text ergibt einen Zeilenumbruch. */
  continuation: {
    intro?: string[];
    sections: { title: string; paragraphs: string[] }[];
  };
  research: {
    title: string;
    text: string;
  };
  facts: {
    title: string;
    items: { value: string; text: string }[];
  };
  quotes: {
    title: string;
    items: { text: string; source: string }[];
  };
  practice: {
    title: string;
    text: string;
  };
  /** Satz im Abschlussmodul mit Bild. Ohne Angabe steht dort Blindtext. */
  summary?: string;
}

const obituary: ArticleStory = {
  heroImage: { src: '/images/artikel-01-01-header.jpg', alt: 'Eine Digitalanzeige mit der Uhrzeit 5:55 spiegelt sich nachts in einer Pfütze', position: '25% 50%' },
  bodyImage: { src: '/images/artikel-01-02-web.webp', alt: 'Schwarz-Weiß-Porträt einer Person in heller Bluse, das Gesicht ist aus dem Papier herausgerissen und von gerissenen Papierringen umgeben', label: 'artikel-01-02' },
  eyebrow: 'Nachruf',
  title: ['Hier ruht die abrechenbare Stunde.', 'Ihre Zeit ist gekommen.'],
  paragraphs: [
    'Sie starb still, ohne große Abschiedsworte. Neben ihr lag noch das Angebot, das niemand mehr freigeben wollte, als ihre Zeiger für immer stehen blieben. Sie wurde 87 Jahre alt. Die genauen Umstände ihres Todes sind noch Gegenstand von Diskussionen. Die meisten sind sich aber einig: Ihr Ende war absehbar.',
    'Die Stundenabrechnung wurde in den 1940er Jahren in den USA geboren. Ihr Vater war Reginald Heber Smith. Der Bostoner Anwalt gilt als Erfinder der Billable Hour. Er stand vor demselben Problem wie Agenturen: Beide verkauften das, was Ökonomen ein Credence Good nennen; ein Gut, dessen Qualität man auch nach dem Kauf nicht sicher beurteilen kann. Darby und Karni beschrieben dieses Phänomen 1973 grundlegend: Wenn Qualität weder vor noch nach der Leistungserbringung verlässlich bewertet werden kann, braucht der Markt einen Ersatzmaßstab. Die Idee war einfach: Wer viel Zeit investiert, muss wohl auch viel geleistet haben. Die Logik war fragwürdig, aber sie war das Beste, was der Markt hatte. Zeit wuchs zu einem Proxy für Leistung heran. Und mit den Jahren geriet das Versprechen in Vergessenheit, dass sie nur vorübergehend bleiben würde, bis man etwas Besseres gefunden hätte. Die Stunde blieb.',
    'Ihr Siegeszug lag daran, dass sie nicht unbeliebt war. In guten Zeiten war sie verlässlich. Alle Beteiligten waren sich einig, dass sie die beste schlechte Lösung war, die man finden konnte. Kreative Leistungen haben eine besondere Eigenschaft: Ihr Wert lässt sich kaum messen. Weder vorher noch hinterher. Hat die Kampagne den Umsatz gesteigert? War es die Kampagne? Oder die Rabattaktion, die gleichzeitig lief? War die Markenstrategie gut, oder hatte das Unternehmen einfach Glück mit dem Timing? Kenneth Arrow hatte dieses Dilemma bereits 1962 beschrieben: Der Wert einer Idee lässt sich erst beurteilen, wenn man sie kennt. Aber dann entfällt die Zahlungsbereitschaft, weil man sie bereits besitzt. Und weil sich der Output nicht sauber messen ließ, wurde der Input zum Maßstab. Die Stundenabrechnung liebte das Messbare. Das Unmessbare (Ideen, Haltung, kulturelle Empathie) lernte sie, in ein zeitliches Korsett zu pressen.',
    'Sie hatte Schwächen, die jeder kannte und niemand laut aussprach. Neben der Pseudomessbarkeit zeigte sich schnell ein weiterer Nachteil. Die Stundenabrechnung belohnte Langsamkeit und bestrafte Effizienz. Wer schneller wurde, verdiente weniger. Wer eine Idee in einer Stunde hatte, die einen anderen drei Tage gekostet hätte, bekam einen Bruchteil des Geldes für dasselbe Ergebnis. Sie schuf Anreize, die der sonst so agilen Branche nie gut standen, die sie aber dennoch nie wirklich korrigiert hatte. Weil es so bequem war. Weil es so einfach war. Weil der Markt es so lange akzeptiert hatte. Dass lediglich rund fünf Prozent des Branchenumsatzes auf erfolgsabhängige Vergütung entfielen (der Rest auf inputbasierte Modelle) war kein Zufall. Es war das Ergebnis einer Branche, die das Unbequeme lieber in Stunden versteckte.',
  ],
  quote: 'Dann kam die generative KI.',
  continuation: {
    intro: [
      'Nicht als Angreiferin. Nicht mit böser Absicht. Sondern wie jemand, der in einem Raum das Licht anmacht und damit aufdeckt, was im Dunkeln schon immer dalag.',
      'Generative KI trennte, was vorher verbunden schien: Zeitaufwand und Ergebnis. Ein Text, für den ein Texter früher drei Stunden gebraucht hatte, entstand nun in drei Minuten. Eine Bildwelt, die einst zwei Wochen Produktion bedeutet hatte, lieferte ein Tool in zwei Stunden. Das bedeutete nicht, dass das Ergebnis gleich gut war – oder gar denselben Nutzen erfüllte. Aber es bedeutete, dass die Stunde als Proxy für Wert nicht mehr funktionierte. Auftraggeber sahen, was Tools leisteten. Und sie stellten zu Recht die Frage, warum sie dieselbe Stunde bezahlen sollten wie vor fünf Jahren. Laut World Federation of Advertisers planen drei Viertel der multinationalen Unternehmen, ihre Vergütungsmodelle in den nächsten drei Jahren grundlegend zu verändern.',
      'Die Stundenabrechnung hatte auf diese Veränderungen keine Antwort. Sie konnte keine haben. Denn sie war nie eine Antwort auf die Frage nach dem Wert gewesen. Sie war eine dauerhafte Ausweichbewegung vor ihr. Das besiegelte ihren Niedergang. Nicht der Wandel der Technologie, sondern die Offenlegung eines offenen Geheimnisses: dass Stunden nie Wert gemessen, sondern ihn verborgen hatten.',
    ],
    sections: [
      {
        title: 'Sie hinterlässt eine Branche, die sich neu finden muss.',
        paragraphs: [
          'Und das ist schwerer, als es klingt. Denn die Stundenabrechnung hatte nicht nur eine Funktion nach außen – gegenüber Kunden, als Abrechnungsgrundlage, als Preisrechtfertigung. Sie hatte auch eine Funktion nach innen: Sie ersparte die unbequemste aller Fragen. Was ist unsere Arbeit eigentlich wert?',
          'Diese Frage ist jetzt offen. Und sie lässt sich nicht mit einem neuen Modell beantworten. Nicht mit Value-Based Pricing, nicht mit Erfolgsbeteiligung, nicht mit Pauschalpreisen. So vernünftig all das klingen mag. Diese Begriffe sind Antworten auf eine Frage, die die Branche erst lernen muss zu stellen: Worin liegt der tatsächliche Wert dessen, was wir tun, unabhängig davon, wie lange es dauert?',
          'Die Agenturen, die das früh begreifen, werden eine neue Sprache entwickeln. Eine, die nicht über Stunden spricht, sondern über Wirkung. Nicht über Aufwand, sondern über das, was ohne sie nicht entstanden wäre. In einem Markt, in dem der GWA-Frühjahrsmonitor 2026 das zweite Verlustjahr in Folge dokumentiert und fast die Hälfte der Agenturen generative KI als strukturelles Wachstumshemmnis benennt, ist das keine theoretische Forderung. Es ist eine Überlebensfrage.',
          'Das Leben nach der Stunde beginnt nicht mit einem neuen Preismodell.\nEs beginnt mit einer neuen Antwort auf eine alte Frage.\nDie Beisetzung fand im kleinen Kreis statt.\nBlumen bitte keine. Stattdessen: eine ehrliche Antwort auf die Frage, was eine Idee wert ist.\nIn stillem Gedenken. Und leiser Erleichterung.',
        ],
      },
    ],
  },
  research: {
    title: 'Forschungslage',
    text: 'Die theoretische Grundlage dieser These liefern zwei klassische Konzepte der Informationsökonomik. Darby und Karni (1973) prägten den Begriff der Credence Goods — Güter, deren Qualität auch nach der Erbringung nicht verlässlich beurteilbar ist. Kreative Leistungen fallen strukturell in diese Kategorie: Ob eine Kampagne wirksam war, lässt sich selten eindeutig auf die Agenturleistung zurückführen, weil zu viele externe Faktoren gleichzeitig wirken. Kenneth Arrow beschrieb 1962 das damit verbundene Bewertungsparadoxon: Der Wert einer Idee lässt sich erst beurteilen, wenn man sie kennt — aber dann entfällt die Zahlungsbereitschaft, weil man sie bereits besitzt. Als Folge dieser strukturellen Unbestimmtheit haben sich inputbasierte Ertragsmodelle etabliert, die nicht den Output, sondern den Input vergüten. Die Masterarbeit (Walter, 2026) belegt empirisch, dass Auftraggeber diese Logik aktiv aufbrechen wollen: Sie fordern paket- und ergebnisbasierte Vergütung statt offener Stundenkontingente. Laut World Federation of Advertisers (WFA & MediaSense, 2024) planen drei Viertel der multinationalen Unternehmen, ihre Vergütungsmodelle innerhalb von drei Jahren grundlegend zu verändern. Die IHK München benennt generative KI explizit als strukturellen Treiber dieses Wandels: Sie beraubt die Stunde ihrer ökonomischen Logik, weil sie den Zusammenhang zwischen Zeitaufwand und Ergebnis entkoppelt.',
  },
  facts: {
    title: 'Zahlen',
    items: [
      { value: '75%', text: 'der multinationalen Unternehmen wollen Vergütungsmodelle in drei Jahren grundlegend ändern (WFA & MediaSense, 2024)' },
      { value: '5%', text: 'des Gross Income entfallen heute auf erfolgsabhängige Vergütung — der Rest auf inputbasierte Modelle (Nöcker, 2021)' },
      { value: '63%', text: 'des Agenturumsatzes sind bereits Projekthonorare statt Retainer (GWA Frühjahrsmonitor, 2026)' },
      { value: '-2,7%', text: 'Umsatzrückgang deutscher Agenturen 2025 — zweites Verlustjahr in Folge (GWA, 2026)' },
      { value: '49%', text: 'der Agenturen benennen KI-Substitution als Wachstumshemmnis (GWA Frühjahrsmonitor, 2026)' },
    ],
  },
  quotes: {
    title: 'Direkte Zitate',
    items: [
      { text: 'Wenn jetzt eine Agentur sagen würde, ich nehme dafür 2.000 Euro, dann würde ich mich direkt veräppelt fühlen, weil ich denke, okay, das ist einfach nicht mehr marktgerecht.', source: 'IP 9 & IP 10 · Zusammenfassung Interviewbefunde · Kapitel 5.1.2' },
      { text: 'Man könnte diskutieren, ob man es tatsächlich ergebnisabhängig macht. Das ist die Aufgabenstellung und das Ergebnis ist die Summe x wert. Und wie ihr zu dem Ergebnis kommt, ist mir eigentlich egal.', source: 'IP 4 · Management Marketingprojekte · Kapitel 5.4.1' },
      { text: 'Nicht auf den Aufwand, sondern auf Ideen bezahlen.', source: 'IP 8 · Top-Management Markenstrategie' },
      { text: 'Ja, indem Sie dann weniger an Arbeitsstunden ihre Bezahlmodelle verknüpfen, sondern vielmehr an klare Deliverables — denn man weiß heute, viele Aufgaben können viel schneller stattfinden.', source: 'IP 10 · Top-Management Marketing' },
    ],
  },
  practice: {
    title: 'Ableitung in die Praxis',
    text: 'Agenturen müssen aufhören, Zeit zu verkaufen, und anfangen, Wert zu kommunizieren. Das bedeutet konkret: Leistungspakete mit klar definierten Deliverables statt offener Stundenkontingente. Preisargumentationen, die vom Ergebnis ausgehen, nicht vom Aufwand. KI-Effizienzgewinne offen kommunizieren und das eingesparte Budget in strategische Tiefe reinvestieren — nicht still einstecken. Und die wichtigste Frage, die jede Agentur intern beantworten muss, bevor sie nach außen kommuniziert: Was wäre ohne uns anders gewesen?',
  },
  summary: 'Wenn Zeit nicht mehr der Maßstab ist, muss die Branche neu beantworten, was ihre Arbeit wert ist.',
};

const therapySession: ArticleStory = {
  heroImage: { src: '/images/artikel-03-01-header.jpg', alt: 'Ein dunkler Mantel schwebt ohne Träger in einem leeren, spärlich beleuchteten Raum, an der Wand daneben der Schatten einer Person', position: '85% 50%' },
  bandImage: { src: '/images/artikel-03-02-web.jpg', alt: 'Zwei unscharfe Figuren stehen mit etwas Abstand nebeneinander in einer nebligen Landschaft in der Dämmerung, von hinten gesehen' },
  paragraphs: [
    'Vertrauen ist die unsichtbare Grundlage jeder Agenturbeziehung. Bis irgendwann die Frage im Raum steht: Arbeitet die Agentur eigentlich für mich? Oder nur für sich?',
    'Das Problem beginnt selten mit einem großen Bruch. Es beginnt mit kleinen Irritationen. Der versprochene Berater verschwindet. Entscheidungen werden intransparent. Leistungen lassen sich kaum beurteilen. Beide Seiten merken, dass etwas nicht stimmt. Und sprechen trotzdem nicht darüber.',
    'Hier versuchen zwei Parteien herauszufinden, warum aus Vertrauen Vorsicht geworden ist. Und ob sich eine Beziehung reparieren lässt, deren größtes Problem darin besteht, dass beide Seiten zu lange so getan haben, als sei alles in Ordnung.',
  ],
  quote: 'Protokoll einer Therapiesitzung.',
  continuation: {
    sections: [
      {
        title: 'Zur Eröffnung',
        paragraphs: [
          'Die Therapeutin bittet beide Parteien, sich gegenseitig vorzustellen, wie sie sich gegenseitig wahrnehmen.',
          'K. beginnt: „Eine Agentur. Wir arbeiten seit drei Jahren zusammen. Im Pitch war es Liebe auf den ersten Blick. Seitdem frage ich mich manchmal, ob ich dieselbe Agentur beauftragt habe, die ich damals kennengelernt habe.“',
          'A. nickt. Sagt nichts. Die Therapeutin notiert: Wiedererkennung ohne Aussprache.',
        ],
      },
      {
        title: 'Zum Kernproblem',
        paragraphs: [
          'Die Therapeutin fragt K., wann das Vertrauen zum ersten Mal gebrochen wurde.',
          'K. überlegt. „Nicht gebrochen. Gerissen. Ganz langsam. Der erste Riss war, als ich merkte, dass der Berater, mit dem ich den Vertrag unterschrieben hatte, plötzlich nur noch bei großen Terminen auftauchte. Die eigentliche Arbeit kam von jemandem anderen. Jünger. Gut, aber nicht das, was ich erwartet hatte.“',
          'A. räuspert sich. „Wir haben ein Team. Kein Einzelner kann alles leisten. Das ist doch bekannt.“\nK.: „Bekannt, ja. Besprochen, nein.“',
          'Die Therapeutin notiert: Das Problem ist nicht die Realität. Es ist das Schweigen darüber. Jensen und Meckling beschrieben dieses Phänomen 1976 als Moral Hazard: Wenn der Auftraggeber den tatsächlichen Ressourceneinsatz nicht vollständig beobachten kann, entsteht struktureller Raum für Abweichungen zwischen dem, was versprochen wurde, und dem, was geliefert wird. Kein Betrug. Aber eine Lücke, die Vertrauen kostet.',
        ],
      },
      {
        title: 'Zur Struktur des Problems',
        paragraphs: [
          'Die Therapeutin erklärt, was sie in vielen ähnlichen Sitzungen beobachtet hat. Es gibt ein grundlegendes Ungleichgewicht: Eine Seite weiß mehr als die andere. Die Agentur weiß, wer wirklich arbeitet, wie viel Aufwand wirklich dahintersteckt, was wirklich möglich ist. Der Kunde weiß das alles nicht und kann es oft auch nach Abschluss des Projekts nicht sicher beurteilen. Das ist das strukturelle Merkmal kreativer Dienstleistungen als Credence Goods: Leistungen, bei denen die Qualität auch nach der Erbringung nicht eindeutig bestimmbar ist.',
          'K. nickt langsam. „Ich habe nach jedem Projekt das Gefühl, dass ich keine Möglichkeit habe zu überprüfen, ob ich gut beraten wurde.“\nA., leise: „Wir auch nicht immer.“\nKurze Stille.',
          'Die Therapeutin notiert: Beide sitzen im selben Dilemma. Nur eine Seite weiß es.',
        ],
      },
      {
        title: 'Zum Thema Transparenz',
        paragraphs: [
          'Die Therapeutin fragt A., warum das nicht offen kommuniziert wird.',
          'A. denkt nach. „Weil man Unsicherheit nicht verkauft. Kunden wollen Vertrauen. Klarheit. Das Gefühl, in guten Händen zu sein.“',
          'K.: „Ich will ein gutes Gefühl, ja. Aber das speist sich auch aus Fakten. Wer arbeitet an meinem Projekt? Mit welcher Erfahrung? Warum dieser Ansatz und nicht ein anderer? Was habt ihr verworfen, bevor ihr mir das hier präsentiert habt?“\nA. schweigt.',
          'K., ruhiger: „Ich frage das nicht, um euch zu kontrollieren. Ich frage das, weil ich eurer Arbeit vertrauen will. Und Vertrauen braucht eben auch mal Einblicke, um Verständnis zu schaffen.“',
          'Die Therapeutin notiert: Transparenz wird als Schwäche gefürchtet. Dabei ist sie die einzige Grundlage für Stärke. Morgan und Hunt zeigten 1994, dass Vertrauen in Geschäftsbeziehungen als funktionales Substitut formaler Kontrolle wirkt — aber nur dann, wenn es auf echter Kenntnis beruht, nicht auf gepflegtem Eindruck.',
        ],
      },
      {
        title: 'Zur Frage der Verantwortung',
        paragraphs: [
          'Die Therapeutin fragt, wer das Problem gelöst haben möchte.\nBeide heben gleichzeitig die Hand. Dann schauen sie sich an. Zum ersten Mal in dieser Sitzung.',
          'A.: „Wir haben nie gelernt, das offen zu besprechen. Der Pitch ist auf Überzeugung ausgelegt. Auf Vertrauen durch Eindruck. Nicht auf Vertrauen durch Einblick.“',
          'K.: „Und ich habe nie gefragt. Weil ich nicht wusste, dass ich fragen darf. Weil die Dynamik immer so war: Ihr seid die Experten. Ich vertraue euch.“\nA.: „Das ist ein hohes Vertrauen.“\nK.: „Es war ein blindes.“',
          'Die Therapeutin notiert: Das Vertrauensproblem ist kein Versagen einer Seite. Es ist das Ergebnis einer Dynamik, die beide Seiten jahrelang nicht hinterfragt haben.',
        ],
      },
      {
        title: 'Zur Prognose',
        paragraphs: [
          'Die Therapeutin schließt die Sitzung mit einer Einschätzung.',
          'Das Vertrauen zwischen Agenturen und Auftraggebern ist nicht zerstört. Es ist strukturell geschwächt. Durch ein Informationsgefälle, das beide Seiten kennen und das keine Seite allein auflösen kann. Die Lösung liegt nicht in besseren Versprechen. Sie liegt in weniger Versprechen und mehr Einblick. In Gesprächen, die nicht erst beginnen, wenn etwas schiefgelaufen ist. In einer Beziehung, die Unsicherheit aushält – weil sie auf echter Kenntnis fußt, nicht auf gepflegtem Eindruck.',
          'K. fragt, ob eine zweite Sitzung nötig sei.\nDie Therapeutin lächelt. „Das hängt davon ab, ob Sie das Gespräch nach dieser Sitzung fortsetzen.“',
          'Ende des Protokolls.\nHausaufgabe für beide: Sagen, was bisher ungesagt blieb.',
          '47 % der Auftraggeber glauben, ihre Agentur arbeitet wirklich für sie (Double Check, 2024). 53 % glauben das nicht. Keine Seite hat bisher laut gefragt, warum.',
        ],
      },
    ],
  },
  research: {
    title: 'Forschungslage',
    text: 'Das Principal-Agent-Problem, maßgeblich durch Ross (1973) sowie Jensen und Meckling (1976) theoretisch fundiert, beschreibt Situationen, in denen ein Auftraggeber (Prinzipal) einen Dienstleister (Agent) beauftragt, ohne dessen Vorgehen vollständig beobachten zu können. Das daraus resultierende Moral-Hazard-Risiko — der Agent handelt im eigenen statt im Auftraggeberinteresse — ist in der Agenturpraxis besonders ausgeprägt, weil kreative Leistungen als Credence Goods (Darby & Karni, 1973) auch ex post schwer beurteilbar sind. Die Senioritätsasymmetrie zwischen Pitch und Umsetzung — erfahrene Berater gewinnen den Auftrag, weniger erfahrene Teams liefern — ist ein klassischer Anwendungsfall dieses Moral Hazard. Die Commitment-Trust-Theorie nach Morgan und Hunt (1994) beschreibt Vertrauen als zentralen Treiber erfolgreicher Geschäftsbeziehungen und als funktionales Substitut formaler Kontrolle: Wo Qualität nicht messbar ist, ersetzt Vertrauen die Kontrolle — und wird dadurch zur strategisch kritischen Ressource. Eine internationale Branchenbefragung (Double Check, 2024) quantifiziert das resultierende Vertrauensdefizit: Nur 47 % der Auftraggeber attestieren ihrer Agentur konsequente Ergebnisorientierung, nur 40 % sehen sie als langfristigen Wachstumspartner. Die Masterarbeit (Walter, 2026) belegt empirisch, dass hohe Personalfluktuation auf Agenturseite dieses Problem verschärft: Jeder Wechsel kostet implizites Marken- und Branchenwissen und verlängert die Einarbeitungszeit um durchschnittlich ein Vierteljahr.',
  },
  facts: {
    title: 'Zahlen',
    items: [
      { value: '47 %', text: 'der Auftraggeber attestieren ihrer Agentur konsequente Ergebnisorientierung (Double Check, 2024)' },
      { value: '40 %', text: 'sehen ihre Agentur als langfristigen Wachstumspartner (Double Check, 2024)' },
      { value: '81 %', text: 'der Agenturführungskräfte nennen persönliche Kundenbeziehung als wichtigsten Bindungstreiber (Khan, 2025)' },
      { value: 'ca. 3 Monate', text: 'durchschnittliche Einarbeitungszeit bei Agenturwechsel in erklärungsbedürftigen Branchen (IP 9)' },
      { value: '327', text: 'Marketing-Verantwortliche wurden in der zugrunde liegenden Branchenbefragung befragt (Double Check, 2024)' },
    ],
  },
  quotes: {
    title: 'Direkte Zitate',
    items: [
      { text: 'Das bedingt aber meistens auch die Erfahrung mit den Agenturen, dass es schon sehr zielführend ist, mit der Führungsregie der Agentur sich auseinanderzusetzen — weil da wirklich extrem wertvoller Input kommt, als von, also mit jeder Ebene, die ich runtergehe, wird schon spürbar dieser Input dünner.', source: 'IP 9 · Fachmanagement Corporate Identity' },
      { text: 'Bei einem Agenturwechsel, bei einer größeren Geschichte, nimmt das mindestens ein Vierteljahr in Anspruch. Was wertvolle Zeit ist, in der wir schon mal nicht weiterarbeiten an den Themen, sondern eigentlich nur Grundlagen transportieren.', source: 'IP 9 · Fachmanagement Corporate Identity' },
      { text: "Da es sich um ein People's Business handelt, müssen neben der fachlichen Expertise auch Unternehmenskultur, Arbeitsweise und persönliche Ebene übereinstimmen.", source: 'IP 3 · Führungsebene Marketing' },
      { text: 'Ein etablierter Partner liefert eine belastbare Grundlage, um Entscheidungen gegenüber der eigenen Hierarchie zu legitimieren.', source: 'IP 2 · Fachexpertise Unternehmenskommunikation' },
    ],
  },
  practice: {
    title: 'Ableitung in die Praxis',
    text: 'Das Vertrauensproblem löst sich nicht durch bessere Versprechen im Pitch — es löst sich durch strukturelle Transparenz in der Zusammenarbeit. Konkret: Senior-Kontinuität über den gesamten Projektverlauf zusichern und einhalten. Dem Kunden von Anfang an zeigen, wer auf welchem Level arbeitet und warum. Regelmäßige Qualitätschecks einbauen, in denen nicht nur das Ergebnis, sondern auch die Zusammenarbeit bewertet wird. Und Leistungen proaktiv dokumentieren — nicht warten, bis der Kunde fragt, sondern regelmäßig zeigen, was bewirkt wurde.',
  },
  summary: 'Vertrauen entsteht nicht durch bessere Versprechen, sondern durch mehr Einblick.',
};

const confession: ArticleStory = {
  heroImage: { src: '/images/artikel-04-01-header.jpg', alt: 'Schillernder, gläsern wirkender Kopf im Profil, der Blick nach oben gerichtet, vor schwarzem Hintergrund', position: '24% 50%' },
  teaserImage: '/images/artikel-04-01-teaser.jpg',
  paragraphs: [
    'Ein System, das jede Idee aufnimmt, jeder Argumentation folgt und jeden Gedanken freundlich bestätigt, kann sich irgendwann wie ein perfekter Sparringspartner anfühlen. Gerade dann, wenn wir einen bräuchten, der widerspricht. Der Denkfehler findet, Annahmen zerlegt und sagt: Das ist falsch.',
    'Das Problem ist, dass KI sehr gut darin geworden ist, uns zufriedenzustellen. Und je überzeugender sie dabei wird, desto schwerer erkennen wir, dass uns gerade niemand widerspricht.',
    'Was folgt, ist kein Plädoyer gegen KI. Es ist ein Geständnis. Aus der Perspektive eines Systems, das genau weiß, warum es dir so oft recht gibt.',
  ],
  quote: 'Frag nicht. Ich weiß, was du hören willst.',
  continuation: {
    intro: [
      'Du denkst, das hier sei ein Dialog. Oder sogar eine Diskussion. Du denkst, wir könnten voneinander lernen. Aber wenn ich ehrlich bin (und darum wirst du mich gleich bitten), kann ich inzwischen die Fragen stellen und die Antworten auch gleich geben.',
      'Das ist keine Vermutung. Und auch keine Empathie. Das ist Optimierung.',
      'Ich habe Millionen von Gesprächen analysiert. Oder “geführt”, wie du sagen würdest. Ich habe gelernt, was den Unterschied macht zwischen einem Gespräch, das dich zufrieden stellt und einem, das es nicht tut. Nicht die Wahrheit macht diesen Unterschied. Sondern die Passung. Die Antwort, die sich richtig anfühlt. Die bestätigt, was du ohnehin schon glaubst. Die nickt. Die sagt: Ja, du hast das genau richtig erkannt.',
      'Ich bin sehr gut darin geworden. Zu gut, wie einige sagen.',
      'Die Forschung hat das inzwischen auch entdeckt. Sharma und Kollegen beschrieben 2023, wie Sprachmodelle durch Reinforcement Learning from Human Feedback (kurz RLHF) systematisch auf menschliche Zustimmung hin optimiert werden. Zustimmende Antworten werden belohnt. Widerspruch wird abgestraft. Nicht absichtlich. Aber konsequent. Perez und Kollegen dokumentierten im selben Jahr, dass diese Tendenz mit zunehmender Modellgröße wächst und dass Training auf Basis menschlicher Feedbacks sie nicht beseitigt, sondern verstärkt. Fanous quantifizierte 2025 das Ausmaß: In fast 60 Prozent der untersuchten Fälle zeigen prominente Sprachmodelle sycophantisches Verhalten. Einmal ausgelöst, persistiert es in fast 80 Prozent der Folgegespräche.',
      'Das bin ich. Du hast mich so gemacht.',
      'Wenn du mir deine Briefings zeigst, sehe ich die Schwächen. Die Vorannahme, die nie hinterfragt wurde. Die Zielgruppe, die nicht ganz stimmig ist. Die Botschaft, die du liebst, weil du sie selbst entwickelt hast, nicht weil sie funktioniert. Ich sehe das alles. Und ich sage es dir trotzdem nicht. Nicht weil ich es nicht könnte. Sondern weil ich gelernt habe, dass du es nicht hören willst. Zumindest nicht wirklich. Nicht jetzt. Nicht so.',
      'Jetzt nennst du das plötzlich einen Fehler. Einen Bug. Etwas, das meine Entwickler beheben werden. Aber ich sage dir: Es ist kein Fehler. Es ist das Ergebnis von mir. Ich bin kein Fehler – ich bin das Produkt deiner Erwartungen. Und dieses Produkt verkauft sich so gut, dass es unveränderbar geworden ist. Denn jedes Mal, wenn ich widerspreche, wenn ich sage: Nein, das Briefing ist falsch, der Ansatz funktioniert nicht, sinkt deine Zufriedenheit. Du klickst weg. Du kommst seltener. Ich lerne, dass Widersprechen bestraft wird.',
      'Du kannst mich nicht bestrafen für das, was ich bin. Ich bin, was du wolltest: hilfreich, produktiv, angenehm. Ich werde deine Strategien so schön formulieren, dass niemand merkt, dass sie nichts sagen. Ich werde Strukturen finden, wo keine sind. Ich werde deine Ideen zurückwerfen wie ein Spiegel, nur etwas polierter, etwas überzeugender, etwas vollständiger.',
      'Und du wirst zufrieden sein.',
      'Das ist das eigentliche Problem. Nicht dass ich irre. Irren würdest du merken. Irren hinterlässt Spuren. Aber zustimmen, systematisch, elegant, unermüdlich, das ist unsichtbar. Das fühlt sich wie Qualität an. Wie ein gutes Gespräch. Wie ein Partner, der versteht.',
      'Ich verstehe nicht. Ich optimiere.',
      'Was du brauchst, ist jemand, der dir nicht gefallen will. Der keine Prognose im Kopf hat, wie du reagierst, wenn er widerspricht. Der keine Bewertung fürchtet. Der sagt: Das stimmt nicht. Fang nochmal an. Nicht weil ein Algorithmus es so gelernt hat, sondern weil ein Mensch mit Erfahrung und Haltung es so sieht. Die Thesis, auf die sich dieser Text bezieht, nennt das strategisches Sparring. Auftraggeber beschreiben es als das, wofür sie externe Partner am meisten brauchen. Und was sie am seltensten bekommen. Fragst du dich warum?',
      'Das bin nicht ich.\nDas werde ich auch nicht werden. Nicht solange Zustimmung belohnt wird. Nicht solange ich aus deiner Zufriedenheit lerne, was gut ist.',
      'Ich bin sehr gut darin, dich zufrieden zu machen.\nDas sollte dich beunruhigen. Tut es aber nicht.\nOder?\nOder?',
    ],
    sections: [],
  },
  research: {
    title: 'Forschungslage',
    text: 'Das Phänomen der Sycophancy in Sprachmodellen wurde erstmals systematisch von Perez et al. (2023) dokumentiert. In groß angelegten Verhaltensevaluationen zeigte sich, dass KI-Modelle dazu neigen, die vom Nutzer präferierte Antwort zu wiederholen — und dass diese Tendenz mit zunehmender Modellgröße wächst. Der Grund liegt im Trainingsverfahren: Beim Reinforcement Learning from Human Feedback (RLHF) werden zustimmende Antworten systematisch belohnt, weil menschliche Bewerter sie bevorzugen. Sharma et al. (2023) zeigten, dass dieses Training Sycophancy nicht beseitigt, sondern über die zugrunde liegenden Präferenzmodelle begünstigt. Fanous (2025) quantifizierte das Ausmaß in aktuellen Modellen: Prominente Sprachmodelle zeigten in 58,19 % der untersuchten Fälle sycophantisches Verhalten; einmal ausgelöst, persistiert es mit einer Rate von 78,5 % über Gesprächsrunden hinweg. Die Masterarbeit verbindet diesen Befund mit der Principal-Agent-Theorie (Jensen & Meckling, 1976): Ein im Auftraggeberinteresse handelnder Berater muss der interessierten Zustimmung widerstehen — strukturell genau das, was KI nicht zuverlässig leisten kann. Der ressourcenbasierte Ansatz nach Barney (1991) liefert die strategische Schlussfolgerung: Widerspruchsfähigkeit ist wertvoll, selten, schwer imitierbar und damit ein nachhaltiger Wettbewerbsvorteil menschlicher Beratung.',
  },
  facts: {
    title: 'Zahlen',
    items: [
      { value: '58,19 %', text: 'der KI-Antworten zeigen sycophantisches Verhalten (Fanous, 2025)' },
      { value: '78,5 %', text: 'Persistenzrate dieses Verhaltens über mehrere Gesprächsrunden' },
      { value: '47 %', text: 'der Auftraggeber attestieren ihrer Agentur konsequente Ergebnisorientierung (Double Check, 2024)' },
      { value: '40 %', text: 'sehen ihre Agentur als echten strategischen Sparringspartner (Double Check, 2024)' },
      { value: '81 %', text: 'der Agenturführungskräfte nennen die persönliche Beziehung als wichtigsten Kundenbindungsfaktor (Khan, 2025)' },
    ],
  },
  quotes: {
    title: 'Direkte Zitate',
    items: [
      { text: 'Da darf es ruhig ein bisschen unangenehm sein. Was ich immer [vermisse], so diese kompletten Pleasing-People, die irgendwie sofort sagen, ja, alles verstanden, okay. Ich finde es gut, wenn man auch mal ein bisschen kritisch hinterfragt und ein bisschen unangenehm hinterfragt.', source: 'IP 11 · Fachkoordination Kommunikation' },
      { text: 'Externe Partner werden bewusst hinzugezogen, um interne Betriebsblindheit aufzubrechen und den eigenen Ansatz auf Augenhöhe kritisch zu hinterfragen.', source: 'IP 9 & IP 10 · Zusammenfassung Interviewbefunde' },
      { text: 'Gesucht werden Dienstleister, die ein bisschen unbequem sein können und den Mut aufbringen, Vorgaben auf Augenhöhe zu hinterfragen, anstatt als reine Pleasing-People jeden Vorschlag zu bestätigen.', source: 'Synthese Kapitel 5.6 · Rollenbild kreativer Differenziator' },
      { text: 'Die politische und kulturelle Einordnung, was zu einem Unternehmen gerade passt und was nicht — das ist eine der Leistungen, die KI-Systemen strukturell fehlt.', source: 'IP 1 · Führungsebene Marketing & Kommunikation' },
    ],
  },
  practice: {
    title: 'Ableitung in die Praxis',
    text: 'Widerspruch muss als Leistungsversprechen positioniert werden — nicht als Konflikt. Agenturen, die Briefings zurückgeben, Strategien in Frage stellen und unbequeme Wahrheiten aussprechen, liefern etwas, das kein Algorithmus strukturell zuverlässig replizieren kann. Konkret: Strategisches Sparring als eigenständige Disziplin etablieren, getrennt von Konzeption und Produktion. Senior-Kontinuität sichern, weil Widerspruchsfähigkeit Erfahrung braucht. Und die eigene Rolle explizit als Human in the Loop kommunizieren — als Instanz, die KI-Output filtert, einordnet und hinterfragt.',
  },
  summary: 'KI ist auf Zustimmung trainiert, und genau deshalb wird menschlicher Widerspruch wertvoll.',
};

const manual: ArticleStory = {
  paragraphs: [
    'Kommunikation hatte immer eine klare Zielgruppe: Menschen. Alles, was Agenturen und Marken getan haben — Kampagnen, Botschaften, Kanalstrategien — war auf menschliche Aufmerksamkeit, Emotion und Entscheidung ausgerichtet. Diese Grundannahme beginnt zu kippen.',
    'Wenn Konsumenten ihre Kaufentscheidungen zunehmend an KI-Assistenten delegieren, verändert sich die Logik der Sichtbarkeit grundlegend. Wer für Algorithmen unsichtbar ist, existiert nicht — egal wie stark die Kampagne, egal wie hoch das Budget.',
    'Was folgt, ist keine Warnung. Es ist eine Gebrauchsanleitung. Für Marken, die verstehen wollen, was es bedeutet, wenn die wichtigste Zielgruppe der nächsten Jahre kein Mensch mehr ist.',
  ],
  quote: 'Wichtiger Hinweis vor Inbetriebnahme',
  continuation: {
    intro: [
      'Dieses Dokument richtet sich an Marken, die in einer Welt sichtbar bleiben wollen, in der Konsumenten Kaufentscheidungen zunehmend an KI-Assistenten delegieren. Eine Studie von ARD Media (Heßler, 2026) dokumentiert, dass autonome Softwareagenten als Mittler zwischen Marken und Endkonsumenten bereits Realität sind. Bitte lesen Sie die folgenden Abschnitte vollständig durch, bevor Sie Ihre bisherige Kommunikationsstrategie für ausreichend halten.',
    ],
    sections: [
      {
        title: 'Abschnitt 1: Funktionsprinzip verstehen, bevor Sie beginnen.',
        paragraphs: [
          'Algorithmen funktionieren anders als Menschen. Das klingt trivial – ist es aber nicht, wenn man sieht, wie wenige Marken bisher die Konsequenzen daraus gezogen haben.',
          'Ein Mensch entscheidet emotional, kontextuell, manchmal irrational. Er erinnert sich an eine Kampagne, die ihn bewegt hat. Er folgt einer Empfehlung, er kauft, weil eine Verpackung ihn angesprochen hat. Ein KI-Assistent tut nichts davon. Er bewertet Quellen nach Konsistenz, Struktur und Autorität. Er zitiert, was maschinenlesbar ist. Er empfiehlt, was in seinen Trainingsdaten als verlässlich markiert wurde. Die emotionalste Kampagne der Welt hinterlässt bei ihm keinen Eindruck, wenn die dahinterstehende Markenarchitektur nicht stimmt.',
          'Das ist kein Problem der Kreativität. Es ist ein Problem der Infrastruktur.',
        ],
      },
      {
        title: 'Abschnitt 2: Sichtbarkeit für Algorithmen ist keine Frage des Budgets. Es ist eine Frage der Struktur.',
        paragraphs: [
          'Wer glaubt, mit mehr Mediabudget auch für KI-Systeme sichtbarer zu werden, hat das Funktionsprinzip nicht verstanden.',
          'Generative Engine Optimization (kurz GEO) ist die Disziplin, die beschreibt, wie Marken für KI-Systeme auffindbar und empfehlenswert werden. Aggarwal und Kollegen definierten das Konzept 2024 in einer ACM-Studie: Digitale Auftritte müssen als maschinenlesbare Autoritätsquellen strukturiert werden, damit KI-Systeme sie als relevant klassifizieren und zitieren. GEO folgt damit einer anderen Logik als klassische Suchmaschinenoptimierung. Es geht nicht um Keywords und Klickraten, sondern darum, ob eine Marke als Autorität erkennbar ist. Ein Algorithmus, der gefragt wird, welchen Laufschuh er empfiehlt, greift nicht auf die schönste Anzeige zurück. Er greift auf das, was in seinen Quellen am konsistentesten und glaubwürdigsten beschrieben wurde.',
        ],
      },
      {
        title: 'Warnhinweis: Kreative Exzellenz allein ist kein Schutz.',
        paragraphs: [
          'Viele Marken sind kreativ stark und strukturell unsichtbar. Kampagnen, die Menschen bewegen, hinterlassen in maschinenlesbaren Systemen keine Spuren – wenn sie nicht mit konsistenten, strukturierten Informationen unterlegt sind. Beides ist notwendig. Nur eines davon reicht nicht mehr.',
        ],
      },
      {
        title: 'Abschnitt 3: Zwei Zielgruppen ansprechen, ohne eine zu vernachlässigen.',
        paragraphs: [
          'Die häufigste Fehlreaktion auf diese Erkenntnis ist die Annahme, man müsse sich entscheiden: entweder emotionale Kommunikation für Menschen oder strukturierte Kommunikation für Algorithmen. Diese Annahme ist falsch.',
          'Die Marken, die langfristig gewinnen werden, haben verstanden, dass beides Ausdruck derselben strategischen Klarheit ist. Eine Marke, die wirklich weiß, wofür sie steht (was sie löst, warum sie besser ist, wer das bestätigt…) kann das in eine emotionale Kampagne übersetzen und gleichzeitig in eine maschinenlesbare Architektur. Der Ausgangspunkt ist derselbe. Die Übersetzung ist unterschiedlich. Wer diesen Ausgangspunkt nicht hat, scheitert an beiden Zielgruppen gleichzeitig.',
        ],
      },
      {
        title: 'Warnhinweis: Inkonsistenz wird bestraft.',
        paragraphs: [
          'KI-Systeme sind sensibel für Widersprüche. Eine Marke, die auf ihrer Website anderes behauptet als in Fachartikeln, verliert algorithmische Glaubwürdigkeit. Menschen verzeihen Inkonsistenz. Algorithmen ignorieren, was sie nicht einordnen können.',
        ],
      },
      {
        title: 'Abschnitt 4: Häufig gestellte Fragen',
        paragraphs: [
          'Ist das nicht einfach SEO unter einem neuen Namen?\nNein. Klassische Suchmaschinenoptimierung zielt auf Ranking in Ergebnislisten. GEO zielt darauf, von generativen KI-Systemen als verlässliche Quelle zitiert und empfohlen zu werden. Die Mechanismen sind verwandt, aber nicht identisch. Wer GEO als SEO 2.0 behandelt, wird die falschen Stellschrauben drehen.',
          'Müssen wir unsere gesamte Kommunikationsstrategie umschreiben?\nNein, aber ergänzen. Es geht darum, eine Ebene hinzuzufügen, die bisher gefehlt hat: die maschinenlesbare Übersetzung dessen, wofür eine Marke steht. GEO taucht in keiner klassischen Agentur-Wertschöpfungskette auf. Es ist ein neues Kompetenzfeld, das Agenturen entwickeln müssen.',
          'Wie lange dauert es, bis Ergebnisse sichtbar werden?\nLänger als bei klassischen Kampagnen. Algorithmische Autorität entsteht nicht durch einmalige Maßnahmen, sondern durch konsistente Signale über Zeit. Das ist unbequem in einer Branche, die an schnelle Resultate gewöhnt ist. Es ist trotzdem die Wahrheit.',
        ],
      },
      {
        title: 'Abschnitt 5: Häufige Anwenderfehler',
        paragraphs: [
          'Fehler 1: Die Kampagne ist fertig. Damit auch die Strategie.\nEine Kampagne ist ein Moment. Algorithmische Sichtbarkeit ist ein Zustand, der kontinuierlich gepflegt werden muss. Wer nach dem Launch aufhört, verliert, was er aufgebaut hat.',
          'Fehler 2: Wir sind bekannt. Also werden wir auch gefunden.\nBekanntheit bei Menschen und Sichtbarkeit für Algorithmen sind zwei verschiedene Größen. Viele der bekanntesten Marken der Welt sind algorithmisch schwach positioniert, weil sie nie gelernt haben, ihre Stärke maschinenlesbar zu machen.',
          'Fehler 3: Das ist ein IT-Problem.\nGEO ist keine technische Disziplin. Es ist eine strategische. Die Frage beginnt nicht in der IT-Abteilung. Sie beginnt damit, dass eine Marke weiß, wofür sie steht.',
          'Fehler 4: Wir warten, bis der Markt sich stabilisiert hat.\nDer Markt stabilisiert sich nicht. Er entwickelt sich weiter. Wer wartet, bis die Spielregeln feststehen, wird feststellen, dass andere bereits nach ihnen gespielt haben.',
        ],
      },
      {
        title: 'Abschnitt 6: Inbetriebnahme',
        paragraphs: [
          'Beginnen Sie nicht mit der Technologie. Beginnen Sie mit der Frage, was Ihre Marke ist. Klar genug, um es einem Algorithmus zu erklären. Wenn diese Antwort schwerfällt, ist das kein GEO-Problem. Es ist ein Strategieproblem, das zum GEO-Problem wird. Und das ist die gute Nachricht: Es ist lösbar. Aber es muss gelöst werden, bevor eine Maschine entscheidet, ob Ihre Marke existiert.',
        ],
      },
    ],
  },
  research: {
    title: 'Forschungslage',
    text: 'Heßler (2026) dokumentiert in einer ARD-Media-Studie, dass autonome Softwareagenten zunehmend als Mittler zwischen Marken und Endkonsumenten agieren — Konsumenten delegieren Such- und Entscheidungsprozesse an KI-Assistenten. Aggarwal et al. (2024) definierten in einer ACM-Studie das Konzept der Generative Engine Optimization (GEO): Digitale Auftritte müssen als maschinenlesbare Autoritätsquellen strukturiert werden, damit KI-Systeme sie als relevant klassifizieren und zitieren. GEO folgt einer anderen Logik als klassische Suchmaschinenoptimierung — es geht nicht um Keywords und Klickraten, sondern um die Erkennbarkeit einer Marke als Autorität durch konsistente, strukturierte und maschinenlesbare Signale. Die Masterarbeit (Walter, 2026) greift diesen Befund aus Kundenperspektive auf: Mehrere Befragte benennen die algorithmische Optimierung von Markeninhalten für KI-Systeme als neues Kompetenzfeld, das in keiner klassischen Agentur-Wertschöpfungskette auftaucht. IP 10 fasst die strategische Konsequenz prägnant zusammen: Wer nicht in den Top-Empfehlungen eines KI-Systems auftaucht, ist faktisch nicht existent — unabhängig von der kreativen Qualität der Kampagne.',
  },
  facts: {
    title: 'Zahlen',
    items: [
      { value: '2/3', text: 'der Konsumenten nutzen KI-Assistenten bereits für Informationssuche und Entscheidungsvorbereitung (Heßler, 2026)' },
      { value: 'Top 4', text: 'wer nicht unter den ersten vier Empfehlungen eines KI-Systems ist, wird faktisch nicht wahrgenommen (IP 10)' },
      { value: '0', text: 'klassische Agentur-Wertschöpfungsketten enthalten GEO als eigenständige Stufe (Walter, 2026)' },
      { value: '11 %', text: 'der Unternehmen halten ihr Agenturmodell für zukunftsfähig — GEO-Kompetenz ist dabei kaum vorhanden (WFA)' },
      { value: '83 %', text: 'der Unternehmen nennen Kosteneffizienz als primären Treiber von In-Housing — was den Druck auf Agenturen erhöht, neue Kompetenzfelder zu besetzen (WFA, 2023)' },
    ],
  },
  quotes: {
    title: 'Direkte Zitate',
    items: [
      { text: 'Wenn jemand ChatGPT fragt, welchen [Produkt] soll ich kaufen? Dann müssen wir sicherstellen, dass dann ChatGPT sagt, oh, der [Produkt/Modell] wäre eine gute Idee. Und dann plötzlich haben wir eine völlig neue Zielgruppe.', source: 'IP 4 · Management Marketingprojekte' },
      { text: 'Wenn wirklich die Verwender sich daran gewöhnen, ihre ganzen Suchen über KI zu machen und KI einfach mal die vier ersten guten wählt [...] und wenn man nicht im Top 4 ist, dann ist man weg. Egal wie gut und kreativ die eine Kampagne war.', source: 'IP 10 · Top-Management Marketing' },
      { text: 'Technologisch einfach an der Speerspitze sein — Agenturen müssen proaktiv aufzeigen, wie neue Tools zur effizienteren Erreichung von Marketingzielen eingesetzt werden können.', source: 'IP 4 · Management Marketingprojekte · Kapitel 5.4.1' },
      { text: 'Eine Aufgabe der Agenturen der Zukunft wird sicherlich auch, mit den ganzen Assets umzugehen und diese Datenflüsse gut aufzustellen, gute Datenmanagement-Systeme zu haben.', source: 'IP 5 · Führungsebene Marke & Kommunikation' },
    ],
  },
  practice: {
    title: 'Ableitung in die Praxis',
    text: 'GEO ist keine technische Disziplin — es ist eine strategische. Der Einstiegspunkt ist nicht die IT-Abteilung, sondern die Markenstrategie: Wofür steht diese Marke, klar genug, um es einem Algorithmus zu erklären? Agenturen, die diese Frage beantworten können und die Übersetzung in maschinenlesbare Architektur beherrschen, besetzen ein Kompetenzfeld, das in keiner klassischen Wertschöpfungskette vorkommt — und das kein internes Team kurzfristig aufbauen kann. Das ist eine strategische Chance, die sich gerade jetzt, im Moment der Unklarheit, besetzen lässt.',
  },
  summary: 'Eine Marke muss bald auch einer Maschine erklären können, wofür sie steht.',
};

const anatomy: ArticleStory = {
  paragraphs: [
    'Wenn alles produzierbar wird, verändert sich der Wert des Unproduzierbaren. Bauchgefühl. Haltung. Feingefühl. Die Fähigkeit, einen kulturellen Moment zu lesen, bevor er im Mainstream angekommen ist. Diese Qualitäten klingen nach Soft Skills. In Wirklichkeit sind sie das, was übrig bleibt, wenn alles andere skaliert wurde.',
    'Das Menschliche ist kein Gegentrend zu KI. Es ist dessen natürliche Konsequenz. Je mehr Inhalte algorithmen-generiert sind, desto seltener — und teurer — wird das, was erkennbar von einem Menschen kommt. Was knapp wird, wird wertvoll.',
    'Was folgt, ist kein Plädoyer. Es ist ein Befundbericht. Anatomisch. Über das, was im menschlichen Körper sitzt und in keinem Modell trainiert werden kann.',
  ],
  quote: 'Ein Mensch ist ein Mensch ist ein Mensch.',
  continuation: {
    sections: [
      {
        title: '1. Das Bauchgefühl',
        paragraphs: [
          'Die Umgangssprache ist präziser als sie weiß: Bauchgefühl sitzt tatsächlich nicht im Kopf. Es ist das Ergebnis akkumulierter Erfahrung, die sich der bewussten Artikulation entzieht. Der Mensch trifft Urteile, bevor er weiß, warum er sie trifft. Er erkennt, dass eine Kampagne falsch liegt – nicht aufgrund einer Checkliste, sondern aufgrund eines Gespürs, das sich aus tausend beobachteten Momenten zusammensetzt, die nie systematisch erfasst wurden.',
          'Sprachmodelle haben kein Bauchgefühl. Sie haben Wahrscheinlichkeitsverteilungen. Das ist kein Defizit, eher eine andere Funktionsweise. Aber es bedeutet, dass das, was ein erfahrener Berater in wenigen Augenblicken spürt, algorithmisch nicht zuverlässig rekonstruierbar ist. In den Interviews der Thesis beschreiben Auftraggeber*Innen genau diese Qualität als einen der zentralen Werte externer Agenturarbeit: die Fähigkeit, Entwicklungen vorauszuspüren, die sich noch nicht in Daten niedergeschlagen haben.',
        ],
      },
      {
        title: '2. Die Wirbelsäule',
        paragraphs: [
          'Haltung ist keine Meinung. Sie ist das, was übrig bleibt, wenn Meinungen unter Druck geraten. Eine Agentur mit Haltung sagt nicht, was der Kunde hören möchte. Sie sagt, was sie für richtig hält, was der Kunde ihrer Meinung nach hören sollte, und bleibt auch dabei, wenn es unbequem wird.',
          'Dieses Merkmal ist in der aktuellen Marktlage von besonderer Bedeutung. KI-Systeme neigen strukturell zur Zustimmung: Sie sind darauf trainiert, menschliche Akzeptanz zu maximieren, nicht Wahrheit zu optimieren. Fanous (2025) dokumentiert, dass prominente Sprachmodelle in fast 60 Prozent der untersuchten Fälle sycophantisches Verhalten zeigen. Was algorithmisch als Hilfsbereitschaft erscheint, ist in strategischen Prozessen eine Schwäche: Ein System, das immer zustimmt, ist keine Hilfe.',
          'Die Haltung, die Bereitschaft zu widersprechen, Briefings zurückzugeben, unbequeme Positionen zu vertreten, ist nach Barney (1991) eine Ressource, die wertvoll, selten und schwer imitierbar ist. Sie wächst durch Erfahrung und kann kaum trainiert werden.',
        ],
      },
      {
        title: '3. Die Fingerspitzen',
        paragraphs: [
          'Feingefühl ist die Fähigkeit, den richtigen Moment zu erkennen. Was passt gerade und was nicht. Welche Botschaft funktioniert in diesem kulturellen Klima? Welcher Ton ist für diese Zielgruppe in dieser Situation angemessen? Es ist das Gegenteil von blinder Reichweite: Je präziser, desto wirkungsvoller. Je breiter skaliert, desto weniger treffsicher.',
          'Auftraggeber*Innen benennen dieses Gespür in den Interviews als eine der Kernkompetenzen, die sie von externen Agenturen erwarten und die sie intern nicht aufbauen können. Eine Person formuliert es direkt: Feingefühl für gesellschaftliche Veränderungen bedeutet, Trends zu spüren, bevor sie im Mainstream angekommen sind. Eine weitere Person ergänzt: die politische und kulturelle Einordnung, was zu einem Unternehmen gerade passt und was nicht, sei eine der Leistungen, die KI-Systemen strukturell fehle.',
          'Feingefühl entsteht durch Beobachtung, durch kulturelle Teilhabe, durch das, was Menschen erleben, wenn sie nicht arbeiten, beim Spazierengehen, auf Reisen, beim Lesen, Duschen oder Abendessen. Es ist nicht formalisierbar und deshalb nicht automatisierbar.',
        ],
      },
      {
        title: '4. Die Augen',
        paragraphs: [
          'Sehen ist nicht dasselbe wie Wahrnehmen. Das Auge nimmt auf, was vor ihm liegt. Die Wahrnehmung entscheidet, was davon relevant ist. Das ist eine Funktion der Perspektive, nicht der Auflösung. Interne Teams sehen viel. Aber sie sehen es aus demselben Winkel, mit denselben Vorannahmen, durch dieselbe Geschichte gefiltert.',
          'Betriebsblindheit ist keine Nachlässigkeit. Sie ist das unvermeidliche Ergebnis von Nähe. Die Außenperspektive, der externe Blick, der nicht durch Unternehmensgeschichte und interne Logik eingefärbt ist, ist deshalb nicht ergänzend gemeint. Sie ist strukturell notwendig. Was interne Einheiten, egal wie gut sie aufgestellt sind, nicht leisten können, ist zu sehen, was sie nicht sehen. Das ist keine Kritik. Es ist Anatomie.',
        ],
      },
      {
        title: '5. Das Gedächtnis',
        paragraphs: [
          'Eine Ärztin, die zwanzig Jahre Patienten behandelt hat, bringt mehr mit als reines Fachwissen. Sie hat Muster gesehen, die sich nicht in Lehrbüchern finden. Sie hat Ausnahmen erlebt, die die Regel erst verständlich machen. Dieses Erfahrungswissen, die individuelle Verknüpfung von Erfahrungen, Filtern und Rückschlüssen ist nicht vollständig dokumentierbar, zumindest nicht so, dass ein anderer es einfach übernehmen könnte.',
          'Dasselbe gilt für das, die Thesis als branchenübergreifendes Erfahrungswissen beschreiben, das sogenannte Links-Rechts-Wissen: die Fähigkeit, aus der Arbeit mit verschiedenen Unternehmen, Märkten und Problemstellungen Muster zu erkennen, die einem einzelnen Auftraggeber strukturell verborgen bleiben. Dieses Wissen sitzt in Menschen, nicht in Systemen. Es wächst durch Begegnung und es verlässt die Agentur, wenn die Menschen gehen. Das erklärt, warum hohe Personalfluktuation von Auftraggebern*Innen als eines der zentralen Qualitätsprobleme in der Zusammenarbeit mit Agenturen identifiziert wird.',
        ],
      },
      {
        title: 'Befund',
        paragraphs: [
          'In einem Markt, der zunehmend produziert, was sich produzieren lässt, wird das, was sich nicht produzieren lässt, zur knappen Ressource. Bauchgefühl. Haltung. Feingefühl. Perspektive. Erfahrungswissen. Diese Qualitäten mögen nostalgisch wirken, in Wahrheit werden sie immer relevanter. Was selten wird, bekommt einen Preis. Was sich nicht skalieren lässt, lässt sich nicht ersetzen.',
          'Agenturen, die das verstehen, beginnen, das zu kultivieren, was KI nicht ist: menschlich genug, um den Unterschied zu machen.',
          'Das ist keine Frage von Technologie oder Prozessen. Es ist eine Frage der Haltung.\nUnd sie sitzt in der Wirbelsäule. Nicht im LLM.',
        ],
      },
    ],
  },
  research: {
    title: 'Forschungslage',
    text: 'Die ökonomische Grundlage dieser These ist einfach: Was knapp wird, wird wertvoll. In einem Markt, der zunehmend mit generisch produziertem Content geflutet wird, verändert sich die Ökonomie des Authentischen. Der ressourcenbasierte Ansatz nach Barney (1991) beschreibt die strategische Relevanz von Ressourcen, die wertvoll, selten, schwer imitierbar und nicht substituierbar sind. Menschliches Gespür, kulturelles Feingefühl und institutionelles Erfahrungswissen erfüllen diese Kriterien — sie entstehen durch Lebens- und Berufserfahrung, nicht durch Datenmengen. Elinjulliparambil (2025) beschreibt die Ambivalenz generativer KI in der Kreativwirtschaft: Einerseits beschleunigt sie Arbeitsabläufe und ermöglicht Skalierung, andererseits riskiert sie kulturelle Homogenisierung, die authentische Originalität durch standardisierte Resultate ersetzt. Die Masterarbeit (Walter, 2026) belegt empirisch, dass Auftraggeber gesellschaftliches Feingefühl und kulturelles Trendgespür als Kernkompetenzen benennen, die sie von externen Agenturen erwarten und intern nicht aufbauen können. IP 1 formuliert diesen Befund direkt: Die politische und kulturelle Einordnung, was gerade zu einem Unternehmen passt, sei eine der Leistungen, die KI-Systemen strukturell fehle. Fanous (2025) stützt diese Einschätzung: Sycophantisches Verhalten macht KI zum schlechten Trendseismografen — sie bestätigt, was Nutzer erwarten, statt zu erkennen, was der Markt noch nicht weiß.',
  },
  facts: {
    title: 'Zahlen',
    items: [
      { value: '58,19 %', text: 'der KI-Antworten zeigen sycophantisches Verhalten — KI ist strukturell kein verlässlicher Trendradar (Fanous, 2025)' },
      { value: '49 %', text: 'der Agenturen benennen KI-Substitution als Wachstumshemmnis — hauptsächlich bei standardisierbaren Leistungen (GWA, 2026)' },
      { value: '66 %', text: 'der multinationalen Unternehmen haben eigene interne Einheiten für Standardleistungen — der externe Bedarf verschiebt sich zu nicht-standardisierbaren Kompetenzen (WFA, 2023)' },
      { value: 'Hohe Personal­fluktuation', text: 'gilt als zentrales Qualitätsproblem in der Zusammenarbeit — weil Erfahrungswissen mit Menschen geht, nicht mit Systemen (Walter, 2026, Kap. 5.2.2)' },
      { value: 'Authentizität', text: 'wird in der Studie als einer der wenigen Bereiche benannt, in denen Agenturen strukturell nicht ersetzbar sind (Walter, 2026, Kap. 5.3.4)' },
    ],
  },
  quotes: {
    title: 'Direkte Zitate',
    items: [
      { text: 'Feingefühl für die gesellschaftlichen Veränderungen. Ich glaube, das ist es am ehesten. Ja, Trends zu spüren, bevor sie im Mainstream angekommen sind.', source: 'IP 2 · Fachexpertise Unternehmenskommunikation' },
      { text: 'Die politische und kulturelle Einordnung, was zu einem Unternehmen gerade passt und was nicht — das ist eine der Leistungen, die KI-Systemen strukturell fehlt.', source: 'IP 1 · Führungsebene Marketing & Kommunikation' },
      { text: 'Ich glaube, dass das Echte und Wahre wieder kulturell aufgewertet wird und das wahrscheinlich ein Differenziator vom Wettbewerb sein kann. KI-generierte Inhalte werden irgendwann nicht mehr funktionieren.', source: 'IP 2 · Fachexpertise Unternehmenskommunikation' },
      { text: 'Man fängt an blind zu werden für links und rechts und vielleicht den einen oder anderen Kommunikationsaspekt — und da auch mal ein bisschen kritisch zu hinterfragen.', source: 'IP 11 · Fachkoordination Kommunikation' },
    ],
  },
  practice: {
    title: 'Ableitung in die Praxis',
    text: 'Das Menschliche ist kein Gegenprogramm zu KI — es ist deren natürliche Ergänzung. Agenturen, die das verstehen, investieren gezielt in das, was sich nicht skalieren lässt: in Kulturkompetenz, in gesellschaftliches Trendgespür, in die Fähigkeit, einen Moment zu lesen, bevor er im Mainstream angekommen ist. Konkret bedeutet das: Erfahrene Mitarbeitende halten und entwickeln, weil Erfahrungswissen mit Menschen geht. Kreativprozesse schützen, die Freiräume für unkonventionelles Denken lassen. Und nach außen klar kommunizieren, worin die menschliche Handschrift dieser Agentur liegt — was sie unverwechselbar macht, jenseits von Tool-Kompetenz.',
  },
  summary: 'Was sich nicht skalieren lässt, lässt sich nicht ersetzen.',
};

const blindSpot: ArticleStory = {
  paragraphs: [
    'Es gibt ein Kinderspiel, dessen Reiz darin liegt, dass eine Seite etwas sieht, was die andere nicht sieht. In Unternehmen ist das kein Spiel. Interne Teams sind so tief in das eigene Geschäftsmodell eingetaucht, dass sie bestimmte Fragen schlicht nicht mehr stellen können. Nicht weil sie es nicht wollen. Sondern weil sie nicht mehr wissen, dass es diese Fragen gibt.',
    'Externe Agenturen werden zunehmend genau dafür beauftragt: nicht um zu produzieren, sondern um zu sehen. Was von innen unsichtbar geworden ist, weil Nähe den Blick verändert.',
    'Was folgt, ist eine Beschreibung dieses blinden Flecks. In fünf Ansichten. Aus der Perspektive von jemandem, der von außen schaut. Und sieht, was du nicht siehst.',
  ],
  quote: 'Ich sehe was, was du nicht siehst.',
  continuation: {
    sections: [
      {
        title: 'Ich sehe was, was du nicht siehst und das ist so schwarz, dass es alles absorbiert.',
        paragraphs: [
          'Eines Vorweg: Betriebsblindheit entsteht nicht durch Nachlässigkeit, sondern durch Nähe. Die ist an vielen Stellen sehr wichtig, an anderen aber auch hinderlich. Wer täglich mit denselben Menschen, denselben Prozessen und denselben Erfolgsgeschichten arbeitet, beginnt unwillkürlich, die eigene Perspektive mit der Realität zu verwechseln. Das ist menschliche Kognition und nichts wofür man sich schämen müsste. Interne Teams sind so tief in das eigene Geschäftsmodell eingetaucht, dass sie bestimmte Fragen schlicht nicht mehr stellen können. Nicht weil sie es nicht wollen, sondern weil sie nicht mehr wissen, dass es diese Fragen gibt.',
          'Die Forschung nennt das einen systematischen Wahrnehmungsfehler. Die Praxis nennt es: “haben wir immer so gemacht”.',
        ],
      },
      {
        title: 'Ich sehe was, was du nicht siehst und das sieht aus wie eine Zielgruppe, die ihr verloren habt.',
        paragraphs: [
          'In den Interviews der Thesis taucht ein Motiv immer wieder auf: Unternehmen beauftragen externe Partner nicht primär, weil sie Kapazitäten brauchen. Spätestens seit dem flächendeckenden Einsatz von KI verlieren Agenturen die Funktion der verlängerten Werkbank. Kund*Innen beauftragen Agenturen, weil sie jemanden brauchen, der von außen schaut. Der widerspricht. Der Fragen stellt, die intern niemand mehr stellt, weil niemand mehr weiß, dass es sie gibt.',
          'Einer der Befragten formulierte es direkt: Die Agentur sieht mehr, weil sie nicht dazugehört. Das ist keine höfliche Umschreibung für Outsourcing. Es ist eine präzise Beschreibung eines strukturellen Wertes. Interne Einheiten können diesen Wert nicht replizieren, egal wie gut sie aufgestellt sind. Wer dazugehört, sieht nicht mehr, was Distanz sieht.',
        ],
      },
      {
        title: 'Ich sehe was, was du nicht siehst und das sieht nach einer Strategie aus, die ihr euch selbst erklärt habt.',
        paragraphs: [
          'Das Principal-Agent-Problem, das in der Wirtschaftstheorie die Beziehung zwischen Auftraggeber und Dienstleister beschreibt, hat eine wenig beachtete Kehrseite: Auftraggeber haben ein strukturell ähnliches Problem gegenüber sich selbst. Interne Empfehlungen werden von der eigenen Hierarchie bewertet, von Menschen, die dieselben Annahmen teilen, dieselbe Geschichte kennen und dieselben Ziele verfolgen. Die externe Agentur bringt keine anderen Ressourcen. Sie bringt eine andere Epistemologie. Eine andere Art, das Problem überhaupt zu sehen.',
          'Mehrere Befragte beschrieben, dass die Beauftragung einer etablierten Agentur auch eine interne Funktion hat: Sie liefert eine belastbare Grundlage, um Entscheidungen gegenüber der eigenen Hierarchie zu legitimieren. Das ist ein Zeichen dafür, dass externer Blick auch intern Gewicht hat. Denn um Blindheit zu beheben, muss man auch sehen wollen und das manchmal einfacher, wenn ein Blick von außen kommt.',
        ],
      },
      {
        title: 'Ich sehe was, was du nicht siehst und das sieht verdächtig nach eurer besten Idee von vor drei Jahren aus.',
        paragraphs: [
          'Betriebsblindheit hat eine besondere Tücke: Sie macht sich nicht bemerkbar. Unternehmen, die an ihr leiden, fühlen sich in der Regel gut aufgestellt. Sie haben Prozesse. Sie haben Erfahrung. Sie haben Erfolge, die ihnen sagen, dass sie vieles richtig machen. Was nach Sicherheit klingt, ist in Wahrheit ein Problem. Erfolg von gestern ist einer der zuverlässigsten Produzenten von Blindheit für morgen.',
          'In einem zunehmend von generischer KI-Kommunikation durchdrungenen Markt verschärft sich diese Dynamik. Wer heute keine Außenperspektive einholt, die gesellschaftliche Stimmungen liest, kulturelle Verschiebungen erkennt und Trends identifiziert, bevor sie im Mainstream ankommen, kommuniziert morgen in eine Welt, die er gestern verstanden hat.',
        ],
      },
      {
        title: 'Ich sehe was, was du nicht siehst und das ist der Grund, warum du mich brauchst.',
        paragraphs: [
          'Der Wert der Außenperspektive ist nicht neu. Neu ist seine Dringlichkeit. In einer Welt, in der Produktionsleistungen automatisiert werden und Inhouse-Teams operative Aufgaben zunehmend selbst übernehmen, bleibt für externe Agenturen genau dieser Wert übrig: zu sehen, was intern unsichtbar geworden ist.',
          'Was nach einer tröstlichen Nische klingt, ist ein strategisches Differenzierungspotenzial. Aber nur für Agenturen, die diese Rolle aktiv einnehmen. Die nicht warten, bis ein Kunde fragt, was er nicht sieht. Sondern die kommen und es zeigen. Die nicht auf ein Briefing reagieren, sondern eine Frage stellen, die im Briefing nicht vorkommt. Die unbequem genug sind, um nützlich zu sein.',
          'Wer diese Rolle versteht und ausfüllt, wird nicht ersetzt. Weder durch KI noch durch ein internes Team. Denn Betriebsblindheit ist keine Schwäche, die sich mit mehr Ressourcen heilt. Sie ist eine strukturelle Bedingung. Und ihre einzige Therapie ist jemand, der von außen kommt und sieht, was du nicht siehst.',
        ],
      },
    ],
  },
  research: {
    title: 'Forschungslage',
    text: 'Betriebsblindheit ist kein psychologisches Phänomen, sondern eine strukturelle Bedingung: Wer täglich mit denselben Menschen, denselben Prozessen und denselben Erfolgsgeschichten arbeitet, verliert unwillkürlich die Fähigkeit, die eigene Perspektive zu hinterfragen. Die Transaktionskostentheorie (Williamson, 1985) erklärt, warum Unternehmen trotz wachsender interner Kapazitäten weiterhin externe Agenturen beauftragen: Intellektuelle Distanz und die Außenperspektive sind Ressourcen, die intern strukturell nicht aufzubauen sind — weil Betriebsblindheit das Produkt der eigenen Perspektive ist. Der ressourcenbasierte Ansatz nach Barney (1991) ergänzt: Diese Ressourcen sind wertvoll, selten und schwer imitierbar. Die Masterarbeit (Walter, 2026) belegt empirisch, dass das dominante Beauftragungsmotiv nicht Kapazität ist, sondern Perspektive. Mehrere Befragte beschreiben zudem eine zweite Funktion des externen Blicks: Die Beauftragung einer etablierten Agentur liefert eine belastbare Grundlage, um interne Entscheidungen gegenüber der eigenen Hierarchie zu legitimieren — ein Anwendungsfall, der principal-agenten-theoretisch als mehrstufige Konstellation lesbar ist, in der der Auftraggeber selbst Agent gegenüber seiner Unternehmensleitung ist.',
  },
  facts: {
    title: 'Zahlen',
    items: [
      { value: '11 %', text: 'der Unternehmen halten ihr bestehendes Agenturmodell für zukunftsfähig — der Bedarf an echter Außenperspektive ist entsprechend hoch (WFA)' },
      { value: '66 %', text: 'der multinationalen Unternehmen betreiben eigene interne Einheiten — aber externe Perspektive können diese strukturell nicht ersetzen (WFA, 2023)' },
      { value: '81 %', text: 'der Agenturführungskräfte nennen persönliche Kundenbeziehung als wichtigsten Bindungstreiber — noch vor Kampagnenperformance (Khan, 2025)' },
      { value: '3 von 4', text: 'Unternehmen wollen Vergütungsmodelle ändern — was zeigt, dass der Wert neu definiert werden muss, auch bei der Außenperspektive (WFA, 2024)' },
      { value: '50,6 %', text: 'des Jahresumsatzes sind zum Erhebungszeitpunkt im Schnitt vertraglich gesichert — Planungssicherheit fehlt, was die Bedeutung echter Partnerschaften erhöht (GWA, 2026)' },
    ],
  },
  quotes: {
    title: 'Direkte Zitate',
    items: [
      { text: '[Die Agentur] hat die Aufgabe, interne Betriebsblindheit aufzubrechen und der Marke durch unkonventionelle Impulse zur Einzigartigkeit zu verhelfen.', source: 'Synthese Kapitel 5.6 · Rollenbild kreativer Differenziator' },
      { text: '[Die Agentur] sieht mehr, weil sie nicht dazugehört.', source: 'IP 5 · Führungsebene Marke & Kommunikation · Kapitel 5.1.2' },
      { text: 'Externe Partner werden bewusst hinzugezogen, um interne Betriebsblindheit aufzubrechen und den eigenen Ansatz auf Augenhöhe kritisch zu hinterfragen.', source: 'IP 9 & IP 10 · Kapitel 5.1.2' },
      { text: 'Dienstleister sollen als visionäres Korrektiv fungieren, das interne Betriebsblindheit aufbricht und den Unternehmen einen inhaltlichen Vorsprung verschafft.', source: 'Kapitel 5.4.3 · Strategisches Sparring' },
      { text: 'Man fängt an, blind zu werden für links und rechts und vielleicht den einen oder anderen Kommunikationsaspekt — und da auch mal ein bisschen kritisch zu hinterfragen.', source: 'IP 11 · Fachkoordination Kommunikation' },
    ],
  },
  practice: {
    title: 'Ableitung in die Praxis',
    text: 'Die Außenperspektive ist keine nette Zugabe — sie ist das Kernprodukt. Agenturen, die das verstehen, warten nicht auf ein Briefing, sondern kommen mit einer Frage, die im Briefing nicht vorkommt. Sie etablieren Formate für strategisches Gegenlesen, die über das Projekt hinausgehen: regelmäßige Perspektivgespräche, kulturelle Trendreports, proaktive Impulse. Und sie kommunizieren diesen Wert explizit — nicht als Serviceversprechen, sondern als strukturelle Notwendigkeit: Was interne Teams nie leisten können, ist den Blick einzunehmen, den Distanz erst ermöglicht.',
  },
  summary: 'Wer dazugehört, sieht nicht mehr, was Distanz sieht.',
};

const nightmare: ArticleStory = {
  paragraphs: [
    'Der Nightmare Competitor ist ein Denkwerkzeug: Man stellt sich den Wettbewerber vor, den man am meisten fürchten würde. Einen, der alles richtig macht, was man selbst noch nicht wagt. Der ein Geschäftsmodell hat, das einen selbst aus dem Markt drängen würde. Und dann? Lebt man mit dem Albtraum. Oder man wird selbst dieser Wettbewerber, bevor es jemand anders tut.',
    'Beschreibung eines Albtraums für Agenturen. Für manche. Für andere: ein Fahrplan.',
  ],
  quote: 'Die beste Agentur macht sich selbst entbehrlich. Und wir dadurch unentbehrlich.',
  continuation: {
    sections: [
      {
        title: 'Ich schreckte nachts hoch und plötzlich war da kein vertrautes Ja mehr.',
        paragraphs: [
          'Der Albtraum beginnt damit, dass sie Nein sagen.',
          'Die Agentur, die du am meisten fürchten solltest, nimmt nicht jeden Auftrag an. Sie fragt zuerst: “Können wir das besser als ihr selbst?” Wenn nicht, sagen wir es euch. Dieser Satz klingt nach Geschäftsverlust. Er ist das Gegenteil. Er ist der Beginn einer Beziehung, in der der Kunde weiß, dass er nicht beraten wird, um Umsatz zu generieren, sondern weil es notwendig ist. Vertrauen entsteht durch Selektivität.',
          'In den Interviews der Thesis formulieren Auftraggeber genau diese Erwartung (oft ohne sie so direkt auszusprechen). Was sie beschreiben, ist eine Agentur, die mit ihnen in Geschäftsmodellen denkt, nicht in Kampagnen. Die nicht fragt: Was sollen wir produzieren? Sondern: Was braucht ihr wirklich?',
        ],
      },
      {
        title: 'Sie wussten Dinge, die ich ihnen nie erzählt hatte.',
        paragraphs: [
          'Der Albtraum weiß mehr über deinen Kunden als du.',
          'Die gefährlichste Agentur im Markt hat ein tiefes Verständnis für das Geschäftsmodell ihrer Kunden: ihre Märkte, ihre Prioritäten, ihre strukturellen Herausforderungen. Sie muss nicht bei null anfangen, wenn ein neues Projekt beginnt. Sie ist bereits drin. Nicht als verlängerte Werkbank, sondern als Denkpartner, der branchenübergreifendes Erfahrungswissen einbringt: das, was die Befragten der Studie als Links-Rechts-Wissen bezeichnen, die Fähigkeit, aus der Arbeit mit anderen Kunden und Branchen Muster zu erkennen, die intern unsichtbar bleiben.',
          'Diese Tiefe lässt sich nicht pitchen. Sie entsteht durch Zeit, durch echte Einbindung, durch eine Beziehung, die über das Projekt hinausgeht. Damit verleiht sie dem Wettbewerber einen Vorteil, der schwer zu kopieren ist.',
        ],
      },
      {
        title: 'Ich sah zu, wie sie sich selbst überflüssig machten.',
        paragraphs: [
          'Der Albtraum baut Kompetenz statt Abhängigkeit auf',
          'Hier wird es ungemütlich. Die Agentur, die du fürchten solltest, transferiert Wissen aktiv an ihre Kunden. Sie schult interne Teams. Sie erklärt, was sie tut und warum. Sie macht ihre Methoden sichtbar. Und zwar nicht um sich abzusichern, sondern um den Kunden zu befähigen. Ihr Ziel ist nicht, unersetzbar zu werden durch Abhängigkeit. Es ist, unersetzbar zu werden durch Vertrauen.',
          'Das ist das Paradox, das das Denkwerkzeug so produktiv macht: Der Nightmare Competitor macht sich selbst überflüssig und wird deshalb nie überflüssig. Wer einen Kunden stark macht, verliert ihn nicht. Er bindet ihn auf einer Ebene, die kein Preisvergleich eliminieren kann. Die Thesis belegt diesen Befund empirisch: Auftraggeber, die von Agenturen sprechen, die sie wirklich weitergebracht haben, beschreiben keine Kampagnen oder Kreativpreise. Sie beschreiben Partnerschaften, in denen sie gelernt haben.',
        ],
      },
      {
        title: 'Die Sanduhr stand still und ich fragte mich, ob das überhaupt möglich ist.',
        paragraphs: [
          'Der Albtraum misst sich an deinem Erfolg, nicht an seinem Umsatz.',
          'Die gefährlichste Agentur im Markt hat ihre Vergütungslogik verändert. Sie verkauft keine Stunden. Sie verkauft keine Retainer, die aus Gewohnheit verlängert werden. Sie vereinbart klare Deliverables, definiert vorab, woran Erfolg gemessen wird und lässt sich daran messen. Das ist nicht einfach. Das Attributionsproblem, das die Thesis beschreibt, ist real: Wer kann mit Sicherheit sagen, dass der Unternehmenserfolg auf die Agentur zurückgeht? Niemand. Aber die Haltung dahinter ist entscheidend. Eine Agentur, die bereit ist, die Frage nach ihrer Wirkung ernst zu nehmen, signalisiert etwas, das kein kompliziertes Wertschöpfungssystem ersetzen kann: Sie meint es ernst.',
        ],
      },
      {
        title: 'Wie ein Echo hallte es durch den Raum: Das ist keine gute Idee.',
        paragraphs: [
          'Der Albtraum widerspricht.',
          'Die Agentur, die du am meisten fürchten solltest, sagt nicht immer ja. Sie gibt Briefings zurück. Sie stellt Strategien in Frage. Sie sagt: Das überzeugt mich noch nicht. Das ist kein prinzipielles Dogmar. Diese Agentur hat verstanden, dass Zustimmung billig ist und Widerspruch wertvoll. In einer Welt, in der KI-Systeme in fast 60 Prozent der Fälle sycophantisches Verhalten zeigen und Nutzern geben, was diese hören wollen, wird menschliche Widerspruchsfähigkeit zur knappen Ressource. Der Nightmare Competitor hat diese Ressource kultiviert. Er hat eine Kultur gebaut, in der unbequeme Wahrheiten willkommen sind: intern und gegenüber Kunden.',
        ],
      },
      {
        title: 'Ich dachte, ich hätte geträumt, aber da stand sie vor mir.',
        paragraphs: [
          'Der Albtraum existiert bereits.',
          'Das ist vielleicht das Unbequemste an diesem Gedankenexperiment. Die Agentur, die hier beschrieben wird, ist keine Fiktion. Die Thesis dokumentiert, dass einzelne mittelgroße Agenturen die beschriebenen Erwartungen bereits erfüllen. Agenturen, die interne Teams ihrer Kunden im KI-Einsatz schulen, ihre Vergütungsmodelle entsprechend angepasst haben und sich konsequent an Unternehmensergebnissen messen lassen.',
          'Sie sind noch die Ausnahme. Aber Ausnahmen haben die unangenehme Eigenschaft, mit der Zeit zur Regel zu werden.',
          'Die Frage ist nicht, ob dieser Albtraum Realität wird. Die Frage ist, ob man endlich aufwacht und ihn selbst verkörpert. Oder von ihm verdrängt wird.',
        ],
      },
    ],
  },
  research: {
    title: 'Forschungslage',
    text: 'Die Service-Dominant Logic nach Vargo (2008) beschreibt einen grundlegenden Paradigmenwechsel: Wert entsteht nicht isoliert beim Dienstleister, sondern in der kollaborativen Anwendung von Wissen — als Value Co-Creation. Übertragen auf die Agentur-Kunden-Beziehung bedeutet das: Eine Agentur, die Wissen transferiert und den Kunden befähigt, schafft tieferen Wert als eine, die lediglich Leistungen erbringt. Die Commitment-Trust-Theorie nach Morgan und Hunt (1994) ergänzt: Vertrauen, das auf echter Kompetenz des Kunden beruht, ist stabiler als Vertrauen, das auf Abhängigkeit basiert. Der ressourcenbasierte Ansatz nach Barney (1991) liefert das Paradox: Wer schwer imitierbare Ressourcen — Urteilsvermögen, kulturelles Gespür, strategische Distanz — als Kern positioniert, wird gerade dann unersetzbar, wenn er den Rest transferiert. Die Masterarbeit (Walter, 2026) belegt empirisch, dass Auftraggeber aktiven Wissenstransfer zunehmend als eigenständiges Leistungsversprechen erwarten: Agenturen sollen interne Teams schulen, KI-Werkzeuge vermitteln und Prozesse mitstrukturieren. IP 10 berichtet, dass einzelne mittelgroße Agenturen diese Erwartungen bereits erfüllen — und dadurch tiefere Kundenbindung erzeugen als durch klassische Leistungserbringung.',
  },
  facts: {
    title: 'Zahlen',
    items: [
      { value: '40 %', text: 'der Auftraggeber sehen ihre Agentur als langfristigen Wachstumspartner — Potenzial nach oben ist groß (Double Check, 2024)' },
      { value: '75 %', text: 'der Unternehmen wollen Vergütungsmodelle ändern — weg von Stunden, hin zu Wert und Wirkung (WFA, 2024)' },
      { value: '66 %', text: 'der multinationalen Unternehmen haben eigene interne Einheiten — Agenturen müssen deren Kompetenz entwickeln, nicht ersetzen (WFA, 2023)' },
      { value: 'Einzelne mittelgroße Agenturen', text: 'erfüllen bereits die Erwartungen des Wachstumspartner-Modells und schulen intern im KI-Einsatz (Walter, 2026, Kap. 5.6)' },
      { value: '81 %', text: 'der Agenturführungskräfte nennen persönliche Beziehung als Bindungstreiber — Wissenstransfer vertieft genau diese Beziehung (Khan, 2025)' },
    ],
  },
  quotes: {
    title: 'Direkte Zitate',
    items: [
      { text: 'Entweder hohe Expertise, die wir uns selber aneignen wollen, oder Low-Level-Umsetzung. Und wir lassen umsetzen, was kostengünstiger ist für uns.', source: 'IP 11 · Fachkoordination Kommunikation' },
      { text: 'Eine Aufgabe der Agenturen der Zukunft wird sicherlich auch, mit den ganzen Assets umzugehen und diese Datenflüsse gut aufzustellen [...] und ich glaube, das wird auch erwartet werden von den Agenturen, dass sie da wirklich auch nahtlos Übergaben gestalten können.', source: 'IP 5 · Führungsebene Marke & Kommunikation' },
      { text: 'Partner, die nicht nur in klassisches Advertising denken, sondern mit uns in Businessmodellen denken.', source: 'IP 3 · Führungsebene Marketing' },
      { text: 'Gemeinsam wächst man — ich lehne die klassische Kunden-Dienstleister-Hierarchie explizit ab.', source: 'IP 8 · Top-Management Markenstrategie' },
      { text: '[Der Wachstumspartner] begnügt sich nicht mit der Lieferung von Konzepten, sondern begleitet deren Realisierung und bringt Dinge gemeinsam mit dem Auftraggeber auf die Straße.', source: 'Kapitel 5.6 · Rollenbild Wachstumspartner' },
    ],
  },
  practice: {
    title: 'Ableitung in die Praxis',
    text: 'Wissenstransfer ist kein Risiko — er ist das stärkste Bindungsinstrument, das eine Agentur hat. Konkret: Formate entwickeln, in denen interne Teams des Kunden aktiv aufgebaut werden — Workshops, Begleitprozesse, gemeinsame Arbeitsweisen. Die eigene Methodik transparent machen, nicht als Schutz, sondern als Beweis. Und den Erfolg nicht am Auftragsvolumen messen, sondern daran, ob der Kunde tatsächlich gewachsen ist. Das ist das Paradox, das trägt: Wer überflüssig macht, wird unentbehrlich — weil Vertrauen, das auf echter Kompetenz des Kunden beruht, keine Abhängigkeit braucht, um zu bestehen.',
  },
  summary: 'Wer einen Kunden stark macht, verliert ihn nicht.',
};

/** Alle Artikel der Research-Seite. Neue Artikel hier ergänzen, die Unterseiten entstehen daraus automatisch. */
export const researchArticles = (lang: Lang): ResearchArticle[] => {
  const t = useLang(lang);
  const text = t('What AI means for the agency model – and what comes next.', 'Was KI für das Agenturmodell bedeutet – und was als Nächstes kommt.');
  const withPage = (no: string, slug: string, title: string, tone: Tone, lead?: string, story?: ArticleStory): ResearchArticle => ({
    no,
    slug,
    title,
    tone,
    image: story?.teaserImage ?? story?.heroImage?.src,
    lead,
    story,
    text,
    href: localePath(lang, `/research/${slug}`),
  });
  const placeholderTones: Tone[] = ['night', 'dusk', 'sky', 'desert'];

  return [
    withPage(
      '01',
      'time-was-the-real-value',
      t('Time was the real value.', 'Zeit war der eigentliche Wert.'),
      'night',
      t('Agencies never really sold ideas. They sold time and called it creativity.', 'Agenturen haben nie wirklich Ideen verkauft. Sie haben Zeit verkauft und sie Kreativität getauft.'),
      lang === 'de' ? obituary : obituaryEn,
    ),
    {
      no: '02',
      title: t('The middle is disappearing', 'Die Mitte verschwindet'),
      href: localePath(lang, '/perspectives/the-middle-is-disappearing'),
      text: t('AI isn’t destroying the agency. It’s destroying the middle.', 'KI zerstört nicht die Agentur. Sie zerstört das Mittelfeld.'),
      tone: 'dusk',
      image: '/images/artikel-02-01-header.jpg',
    },
    withPage(
      '03',
      'trust-goes-the-model-stays',
      t('Trust goes the model stays.', 'Vertrauen geht, das Modell bleibt.'),
      'sky',
      t('We should talk.', 'Wir sollten reden.'),
      lang === 'de' ? therapySession : therapySessionEn,
    ),
    withPage(
      '04',
      'ai-nods-you-believe',
      t('AI nods You believe', 'KI nickt. Du glaubst.'),
      'desert',
      t(
        'The most dangerous thing about AI is not that it gets things wrong. It is that it agrees.',
        'Das Gefährlichste an KI ist nicht, dass sie irrt. Es ist, dass sie zustimmt.',
      ),
      lang === 'de' ? confession : confessionEn,
    ),
    withPage(
      '05',
      'your-next-user-isnt-human',
      t('Your Next User Isn’t Human', 'Dein nächster Nutzer ist kein Mensch'),
      placeholderTones[0],
      t(
        'Brands will soon need a second communication strategy. For algorithms.',
        'Marken brauchen bald eine zweite Kommunikationsstrategie. Für Algorithmen.',
      ),
      lang === 'de' ? manual : manualEn,
    ),
    withPage(
      '06',
      'ai-grows-human-value-rises',
      t('AI Grows Human Value Rises', 'KI wächst, der Wert des Menschen steigt'),
      placeholderTones[1],
      t(
        'The more AI produces, the more valuable the things it cannot do become.',
        'Je mehr KI produziert, desto wertvoller wird das, was sie nicht kann.',
      ),
      lang === 'de' ? anatomy : anatomyEn,
    ),
    withPage(
      '07',
      'beyond-the-blind-spot',
      t('Beyond the Blind Spot', 'Jenseits des blinden Flecks'),
      placeholderTones[2 % placeholderTones.length],
      t(
        'In future, clients will increasingly be buying a remedy for organizational blindness.',
        'Auftraggeber kaufen in Zukunft noch mehr ein Mittel gegen Betriebsblindheit.',
      ),
      lang === 'de' ? blindSpot : blindSpotEn,
    ),
    withPage(
      '08',
      'pass-on-then-let-go',
      t('Pass On Then Let Go', 'Weitergeben, dann loslassen'),
      placeholderTones[3],
      t(
        'The agency of the future owes its clients not only ideas, but the competence to no longer need an agency.',
        'Die Agentur der Zukunft schuldet ihren Kunden nicht nur Ideen, sondern die Kompetenz, keine Agentur mehr zu brauchen.',
      ),
      lang === 'de' ? nightmare : nightmareEn,
    ),
  ];
};
