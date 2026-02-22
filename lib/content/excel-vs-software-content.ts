import type { Locale } from '@/lib/i18n/config'

export interface ExcelVsSoftwareTranslations {
  badge: string
  h1: string
  h1Highlight: string
  intro1: string
  intro2: string
  // Section 1 — Time cost
  s1Title: string
  s1Body: string
  s1TableHeaders: readonly [string, string, string] // Task | Excel | DonkyCapital
  s1TableRows: readonly [string, string, string][]
  s1Total: string
  s1Note: string
  // Section 2 — Error rate
  s2Title: string
  s2Body: string
  s2Errors: readonly { title: string; desc: string; impact: string }[]
  s2Tip: string
  // Section 3 — ROI analysis
  s3Title: string
  s3Body: string
  s3Scenarios: readonly { label: string; portfolio: string; hourly: string; yearlyHours: string; yearlyCost: string; missedReturn: string }[]
  s3Note: string
  s3Conclusion: string
  // Section 4 — What you actually gain
  s4Title: string
  s4Body: string
  s4Points: readonly [string, string][] // [feature, description]
  // Section 5 — When Excel still makes sense
  s5Title: string
  s5Body: string
  s5Cases: readonly string[]
  s5Switch: string
  // FAQ
  faqTitle: string
  faqItems: readonly { q: string; a: string }[]
  // CTA
  ctaTitle: string
  ctaBody: string
  ctaButton: string
}

const it: ExcelVsSoftwareTranslations = {
  badge: 'Guida DonkyCapital',
  h1: 'Excel vs Software:',
  h1Highlight: 'Il Vero Costo del Portafoglio Fai-da-Te',
  intro1: 'Milioni di investitori usano ancora Excel per tracciare il proprio portafoglio. È gratis, flessibile e familiare. Ma ha davvero senso economico? Questa guida calcola il costo reale in tempo, errori e opportunità perse.',
  intro2: 'Spoiler: il vero costo di Excel non è zero. Spesso supera di gran lunga quello di qualsiasi software dedicato.',

  s1Title: 'Il Costo del Tempo: Quante Ore Stai Spendendo?',
  s1Body: 'Ogni aggiornamento del portafoglio richiede operazioni manuali ripetitive. Vediamo quanto tempo richiede realisticamente la gestione con Excel rispetto a uno strumento automatizzato.',
  s1TableHeaders: ['Operazione', 'Excel (min)', 'DonkyCapital (min)'],
  s1TableRows: [
    ['Aggiornare i prezzi di 20 titoli', '15–25', '0 (automatico)'],
    ['Registrare una nuova transazione', '5–10', '1–2'],
    ['Calcolare performance YTD', '10–20', '0 (in tempo reale)'],
    ['Aggiornare allocazione per asset class', '10–15', '0 (automatico)'],
    ['Generare report mensile', '30–60', '1–3'],
    ['Riconciliare con estratto conto broker', '20–40', '5–10'],
    ['Controllare dividendi ricevuti', '10–20', '0 (automatico)'],
  ],
  s1Total: 'Totale stimato per mese: Excel 100–190 min · DonkyCapital 7–15 min',
  s1Note: 'Con 10 ore/anno risparmiate su un portafoglio medio, a €30/h di costo opportunità, significa €300/anno di valore recuperato — già con un portafoglio da €10.000.',

  s2Title: 'Il Tasso di Errore: Excel Non È Infallibile',
  s2Body: 'Uno studio dell\'Università di Hawaii ha analizzato 13.000 fogli Excel aziendali: il 94% conteneva almeno un errore. Per i portafogli finanziari, le conseguenze possono essere costose.',
  s2Errors: [
    {
      title: 'Errori di formula',
      desc: 'Trascinare una formula e dimenticare di bloccare un riferimento assoluto. Risultato: calcoli di performance completamente sbagliati per mesi.',
      impact: 'Impatto: decisioni di ribilanciamento basate su dati errati',
    },
    {
      title: 'Split azionari non gestiti',
      desc: 'Un\'azienda fa uno split 3:1 e dimentichi di aggiornare il foglio. La performance storica diventa incomprensibile.',
      impact: 'Impatto: performance storica distorta, PMC errato',
    },
    {
      title: 'Dividendi non registrati',
      desc: 'È facile dimenticare di registrare dividendi in accredito automatico. La performance reale risulta sottostimata.',
      impact: 'Impatto: rendimento reale sottovalutato del 1–3% annuo',
    },
    {
      title: 'Versioni multiple e dati inconsistenti',
      desc: 'Hai tre versioni del file: "portafoglio_finale", "portafoglio_finale_v2", "portafoglio_OK". Quale è quello giusto?',
      impact: 'Impatto: rischio di prendere decisioni su dati obsoleti',
    },
  ],
  s2Tip: 'DonkyCapital gestisce automaticamente split, dividendi e aggiornamenti prezzi. Nessuna formula da mantenere, nessun rischio di versioni errate.',

  s3Title: 'ROI Analysis: Vale la Pena Passare a un Software?',
  s3Body: 'Traduciamo il tempo perso in denaro reale. Il calcolo usa il concetto di costo opportunità: il valore dell\'ora che potresti dedicare ad altro (lavoro, famiglia, studio).',
  s3Scenarios: [
    {
      label: 'Investitore Occasionale',
      portfolio: '€10.000–30.000',
      hourly: '€20/h',
      yearlyHours: '12 ore/anno',
      yearlyCost: '€240/anno',
      missedReturn: '+ opportunità perse per analisi imprecise',
    },
    {
      label: 'Investitore Attivo',
      portfolio: '€30.000–100.000',
      hourly: '€35/h',
      yearlyHours: '25 ore/anno',
      yearlyCost: '€875/anno',
      missedReturn: '+ errori che possono costare l\'1–2% del portafoglio',
    },
    {
      label: 'Investitore Avanzato',
      portfolio: '€100.000+',
      hourly: '€50/h',
      yearlyHours: '40 ore/anno',
      yearlyCost: '€2.000/anno',
      missedReturn: '+ il 2% su €100k = €2.000 aggiuntivi a rischio',
    },
  ],
  s3Note: 'Il costo di un software di portfolio tracking professionale si aggira tipicamente tra €0 e €15/mese. Il break-even si raggiunge già risparmiando 1–2 ore/anno.',
  s3Conclusion: 'La domanda giusta non è "posso permettermi un software?" ma "posso permettermi di NON usarlo?"',

  s4Title: 'Cosa Guadagni Davvero con DonkyCapital',
  s4Body: 'Al di là del risparmio di tempo, un software dedicato offre funzionalità strutturalmente impossibili da replicare in Excel.',
  s4Points: [
    ['Prezzi in tempo reale', 'Aggiornamento automatico di azioni, ETF, crypto — senza aprire Yahoo Finance e fare copia-incolla.'],
    ['Performance TWR/MWR', 'Calcolo automatico del rendimento time-weighted e money-weighted, le metriche standard dei professionisti.'],
    ['Multi-broker in un\'unica vista', 'Consolida Fineco, Degiro, Scalable Capital e qualsiasi altro broker in un unico dashboard.'],
    ['Allocazione per asset class', 'Visualizza istantaneamente come sei distribuito tra azioni, ETF, obbligazioni, crypto e asset non quotati.'],
    ['Benchmark e inflazione', 'Confronta la tua performance con indici come MSCI World o S&P500 — e verifica se stai battendo l\'inflazione.'],
    ['Storico transazioni', 'Ogni acquisto, vendita, dividendo e commissione registrato in modo permanente e ricercabile.'],
  ],

  s5Title: 'Quando Excel Ha Ancora Senso',
  s5Body: 'Essere onesti: ci sono casi in cui Excel rimane la scelta giusta.',
  s5Cases: [
    'Hai meno di 5 posizioni e non fai quasi mai operazioni',
    'Hai esigenze di analisi molto custom che nessun software supporta',
    'Stai imparando Excel e il portafoglio è un esercizio didattico',
    'Hai bisogno di modelli fiscali molto specifici per la tua situazione',
  ],
  s5Switch: 'In tutti gli altri casi — cioè per la stragrande maggioranza degli investitori — il passaggio a un software dedicato ha un ROI positivo già nel primo mese.',

  faqTitle: 'Domande Frequenti',
  faqItems: [
    {
      q: 'Posso importare il mio portafoglio Excel in DonkyCapital?',
      a: 'Sì. DonkyCapital supporta l\'importazione di file CSV da molti broker (Degiro, Scalable, Fineco e altri). Puoi anche inserire le transazioni manualmente o importare da un foglio Excel strutturato.',
    },
    {
      q: 'Perdo il controllo dei miei dati se uso un software?',
      a: 'No. I tuoi dati rimangono tuoi. DonkyCapital non condivide i dati con terze parti e puoi esportare il tuo portafoglio in qualsiasi momento.',
    },
    {
      q: 'Excel è davvero così soggetto a errori?',
      a: 'La ricerca accademica conferma che sì: il 94% dei fogli Excel complessi contiene almeno un errore. Per i portafogli finanziari con formule di performance, il rischio è reale soprattutto dopo eventi corporativi (split, spin-off, dividendi straordinari).',
    },
    {
      q: 'Un software dedicato è adatto anche ai principianti?',
      a: 'Assolutamente. DonkyCapital è progettato per essere intuitivo anche per chi inizia. Non serve conoscere le formule TWR o capire come funziona il calcolo del PMC — il software fa tutto in automatico.',
    },
    {
      q: 'Quanto tempo ci vuole per migrare da Excel a DonkyCapital?',
      a: 'Per la maggior parte degli investitori, meno di un\'ora. Se hai un broker compatibile con l\'import CSV, puoi importare tutta la storia in pochi minuti. Per portafogli molto grandi o con molti broker, potrebbe volerci qualche ora — ma è un investimento una-tantum.',
    },
  ],

  ctaTitle: 'Pronto a Smettere di Perdere Tempo?',
  ctaBody: 'Inizia oggi con DonkyCapital. Gratuito, senza carta di credito, e il tuo portafoglio sarà aggiornato in tempo reale da subito.',
  ctaButton: 'Inizia Gratis',
}

const en: ExcelVsSoftwareTranslations = {
  badge: 'DonkyCapital Guide',
  h1: 'Excel vs Software:',
  h1Highlight: 'The True Cost of DIY Portfolio Tracking',
  intro1: 'Millions of investors still use Excel to track their portfolio. It\'s free, flexible and familiar. But does it actually make financial sense? This guide calculates the real cost in time, errors and missed opportunities.',
  intro2: 'Spoiler: the true cost of Excel is not zero. It often far exceeds the cost of any dedicated software.',

  s1Title: 'The Time Cost: How Many Hours Are You Spending?',
  s1Body: 'Every portfolio update requires repetitive manual operations. Let\'s see how much time portfolio management realistically takes with Excel versus an automated tool.',
  s1TableHeaders: ['Task', 'Excel (min)', 'DonkyCapital (min)'],
  s1TableRows: [
    ['Update prices for 20 securities', '15–25', '0 (automatic)'],
    ['Record a new transaction', '5–10', '1–2'],
    ['Calculate YTD performance', '10–20', '0 (real-time)'],
    ['Update allocation by asset class', '10–15', '0 (automatic)'],
    ['Generate monthly report', '30–60', '1–3'],
    ['Reconcile with broker statement', '20–40', '5–10'],
    ['Check received dividends', '10–20', '0 (automatic)'],
  ],
  s1Total: 'Estimated monthly total: Excel 100–190 min · DonkyCapital 7–15 min',
  s1Note: 'With 10 hours/year saved on an average portfolio, at €30/h opportunity cost, that\'s €300/year recovered — even with a €10,000 portfolio.',

  s2Title: 'The Error Rate: Excel Is Not Infallible',
  s2Body: 'A University of Hawaii study analysed 13,000 corporate Excel spreadsheets: 94% contained at least one error. For financial portfolios, the consequences can be costly.',
  s2Errors: [
    {
      title: 'Formula errors',
      desc: 'Dragging a formula and forgetting to lock an absolute reference. Result: completely wrong performance calculations for months.',
      impact: 'Impact: rebalancing decisions based on incorrect data',
    },
    {
      title: 'Unhandled stock splits',
      desc: 'A company does a 3:1 split and you forget to update the spreadsheet. Historical performance becomes incomprehensible.',
      impact: 'Impact: distorted historical performance, incorrect average cost',
    },
    {
      title: 'Unrecorded dividends',
      desc: 'It\'s easy to forget to log automatically credited dividends. Actual performance appears understated.',
      impact: 'Impact: real return undervalued by 1–3% per year',
    },
    {
      title: 'Multiple versions and inconsistent data',
      desc: 'You have three file versions: "portfolio_final", "portfolio_final_v2", "portfolio_OK". Which one is correct?',
      impact: 'Impact: risk of making decisions on stale data',
    },
  ],
  s2Tip: 'DonkyCapital automatically handles splits, dividends and price updates. No formulas to maintain, no risk of incorrect versions.',

  s3Title: 'ROI Analysis: Is Switching to Software Worth It?',
  s3Body: 'Let\'s translate lost time into real money. The calculation uses the opportunity cost concept: the value of the hour you could dedicate to something else (work, family, study).',
  s3Scenarios: [
    {
      label: 'Casual Investor',
      portfolio: '€10,000–30,000',
      hourly: '€20/h',
      yearlyHours: '12 hours/year',
      yearlyCost: '€240/year',
      missedReturn: '+ missed opportunities from imprecise analysis',
    },
    {
      label: 'Active Investor',
      portfolio: '€30,000–100,000',
      hourly: '€35/h',
      yearlyHours: '25 hours/year',
      yearlyCost: '€875/year',
      missedReturn: '+ errors that can cost 1–2% of portfolio',
    },
    {
      label: 'Advanced Investor',
      portfolio: '€100,000+',
      hourly: '€50/h',
      yearlyHours: '40 hours/year',
      yearlyCost: '€2,000/year',
      missedReturn: '+ 2% on €100k = additional €2,000 at risk',
    },
  ],
  s3Note: 'The cost of professional portfolio tracking software is typically between €0 and €15/month. Break-even is reached by saving just 1–2 hours/year.',
  s3Conclusion: 'The right question is not "can I afford software?" but "can I afford NOT to use it?"',

  s4Title: 'What You Actually Gain with DonkyCapital',
  s4Body: 'Beyond time savings, dedicated software offers features that are structurally impossible to replicate in Excel.',
  s4Points: [
    ['Real-time prices', 'Automatic updates for stocks, ETFs, crypto — no need to open Yahoo Finance and copy-paste.'],
    ['TWR/MWR performance', 'Automatic calculation of time-weighted and money-weighted returns — the standard metrics used by professionals.'],
    ['Multi-broker in one view', 'Consolidate Fineco, Degiro, Scalable Capital and any other broker in a single dashboard.'],
    ['Asset class allocation', 'Instantly see how you\'re distributed across stocks, ETFs, bonds, crypto and unlisted assets.'],
    ['Benchmarks and inflation', 'Compare your performance against indices like MSCI World or S&P500 — and check if you\'re beating inflation.'],
    ['Transaction history', 'Every purchase, sale, dividend and commission recorded permanently and searchably.'],
  ],

  s5Title: 'When Excel Still Makes Sense',
  s5Body: 'Being honest: there are cases where Excel remains the right choice.',
  s5Cases: [
    'You have fewer than 5 positions and almost never trade',
    'You have very custom analysis needs that no software supports',
    'You\'re learning Excel and the portfolio is a didactic exercise',
    'You need very specific tax models for your situation',
  ],
  s5Switch: 'In all other cases — meaning the vast majority of investors — switching to dedicated software has a positive ROI from the very first month.',

  faqTitle: 'Frequently Asked Questions',
  faqItems: [
    {
      q: 'Can I import my Excel portfolio into DonkyCapital?',
      a: 'Yes. DonkyCapital supports CSV file import from many brokers (Degiro, Scalable, Fineco and others). You can also enter transactions manually or import from a structured Excel spreadsheet.',
    },
    {
      q: 'Do I lose control of my data if I use software?',
      a: 'No. Your data remains yours. DonkyCapital does not share data with third parties and you can export your portfolio at any time.',
    },
    {
      q: 'Is Excel really that prone to errors?',
      a: 'Academic research confirms it: 94% of complex Excel spreadsheets contain at least one error. For financial portfolios with performance formulas, the risk is real especially after corporate events (splits, spin-offs, special dividends).',
    },
    {
      q: 'Is dedicated software suitable for beginners too?',
      a: 'Absolutely. DonkyCapital is designed to be intuitive even for those just starting out. You don\'t need to know TWR formulas or understand how average cost calculations work — the software does everything automatically.',
    },
    {
      q: 'How long does it take to migrate from Excel to DonkyCapital?',
      a: 'For most investors, less than an hour. If you have a broker compatible with CSV import, you can import your entire history in minutes. For very large portfolios or many brokers, it might take a few hours — but it\'s a one-time investment.',
    },
  ],

  ctaTitle: 'Ready to Stop Wasting Time?',
  ctaBody: 'Start today with DonkyCapital. Free, no credit card required, and your portfolio will be updated in real-time from day one.',
  ctaButton: 'Get Started Free',
}

const de: ExcelVsSoftwareTranslations = {
  badge: 'DonkyCapital Ratgeber',
  h1: 'Excel vs. Software:',
  h1Highlight: 'Die wahren Kosten der manuellen Depot-Verwaltung',
  intro1: 'Millionen von Investoren nutzen noch immer Excel, um ihr Depot zu verwalten. Es ist kostenlos, flexibel und vertraut. Aber macht es wirtschaftlich wirklich Sinn? Dieser Ratgeber berechnet die echten Kosten in Zeit, Fehlern und verpassten Chancen.',
  intro2: 'Spoiler: Die wahren Kosten von Excel sind nicht null. Sie übersteigen oft bei weitem die Kosten jeder dedizierten Software.',

  s1Title: 'Zeitkosten: Wie viele Stunden verbringst du damit?',
  s1Body: 'Jede Portfolio-Aktualisierung erfordert repetitive manuelle Vorgänge. Schauen wir uns an, wie viel Zeit die Verwaltung mit Excel im Vergleich zu einem automatisierten Tool realistischerweise kostet.',
  s1TableHeaders: ['Aufgabe', 'Excel (Min.)', 'DonkyCapital (Min.)'],
  s1TableRows: [
    ['Kurse für 20 Wertpapiere aktualisieren', '15–25', '0 (automatisch)'],
    ['Eine neue Transaktion erfassen', '5–10', '1–2'],
    ['YTD-Performance berechnen', '10–20', '0 (Echtzeit)'],
    ['Allokation nach Anlageklasse aktualisieren', '10–15', '0 (automatisch)'],
    ['Monatlichen Bericht erstellen', '30–60', '1–3'],
    ['Mit Brokerauszug abgleichen', '20–40', '5–10'],
    ['Erhaltene Dividenden prüfen', '10–20', '0 (automatisch)'],
  ],
  s1Total: 'Geschätzte monatliche Summe: Excel 100–190 Min. · DonkyCapital 7–15 Min.',
  s1Note: 'Mit 10 eingesparten Stunden/Jahr bei einem durchschnittlichen Depot, bei €30/h Opportunitätskosten, entspricht das €300/Jahr — bereits bei einem Depot von €10.000.',

  s2Title: 'Die Fehlerquote: Excel ist nicht unfehlbar',
  s2Body: 'Eine Studie der Universität Hawaii analysierte 13.000 Excel-Tabellen aus Unternehmen: 94% enthielten mindestens einen Fehler. Bei Finanzportfolios können die Folgen kostspielig sein.',
  s2Errors: [
    {
      title: 'Formelenfehler',
      desc: 'Eine Formel ziehen und vergessen, einen absoluten Bezug zu fixieren. Ergebnis: monatelang völlig falsche Performance-Berechnungen.',
      impact: 'Auswirkung: Rebalancing-Entscheidungen auf Basis falscher Daten',
    },
    {
      title: 'Nicht verwaltete Aktiensplits',
      desc: 'Ein Unternehmen führt einen 3:1-Split durch und du vergisst, die Tabelle zu aktualisieren. Die historische Performance wird unverständlich.',
      impact: 'Auswirkung: verzerrte historische Performance, falscher Einstandspreis',
    },
    {
      title: 'Nicht erfasste Dividenden',
      desc: 'Automatisch gutgeschriebene Dividenden vergisst man leicht einzutragen. Die tatsächliche Performance wirkt unterschätzt.',
      impact: 'Auswirkung: tatsächliche Rendite um 1–3% p.a. unterschätzt',
    },
    {
      title: 'Mehrere Versionen und inkonsistente Daten',
      desc: 'Du hast drei Dateiversionen: "depot_final", "depot_final_v2", "depot_OK". Welche ist richtig?',
      impact: 'Auswirkung: Risiko, Entscheidungen auf Basis veralteter Daten zu treffen',
    },
  ],
  s2Tip: 'DonkyCapital verwaltet Splits, Dividenden und Kurs-Updates automatisch. Keine Formeln zu pflegen, kein Risiko falscher Versionen.',

  s3Title: 'ROI-Analyse: Lohnt sich der Wechsel zur Software?',
  s3Body: 'Übersetzen wir die verlorene Zeit in echtes Geld. Die Berechnung nutzt das Konzept der Opportunitätskosten: den Wert der Stunde, die du für etwas anderes nutzen könntest.',
  s3Scenarios: [
    {
      label: 'Gelegenheits-Investor',
      portfolio: '€10.000–30.000',
      hourly: '€20/h',
      yearlyHours: '12 Stunden/Jahr',
      yearlyCost: '€240/Jahr',
      missedReturn: '+ verpasste Chancen durch ungenaue Analysen',
    },
    {
      label: 'Aktiver Investor',
      portfolio: '€30.000–100.000',
      hourly: '€35/h',
      yearlyHours: '25 Stunden/Jahr',
      yearlyCost: '€875/Jahr',
      missedReturn: '+ Fehler können 1–2% des Depots kosten',
    },
    {
      label: 'Fortgeschrittener Investor',
      portfolio: '€100.000+',
      hourly: '€50/h',
      yearlyHours: '40 Stunden/Jahr',
      yearlyCost: '€2.000/Jahr',
      missedReturn: '+ 2% auf €100k = zusätzliche €2.000 gefährdet',
    },
  ],
  s3Note: 'Die Kosten professioneller Portfolio-Tracking-Software liegen typischerweise zwischen €0 und €15/Monat. Der Break-even wird bereits durch 1–2 eingesparte Stunden/Jahr erreicht.',
  s3Conclusion: 'Die richtige Frage ist nicht „Kann ich mir Software leisten?" sondern „Kann ich es mir leisten, KEINE zu nutzen?"',

  s4Title: 'Was du mit DonkyCapital wirklich gewinnst',
  s4Body: 'Über die Zeitersparnis hinaus bietet dedizierte Software Funktionen, die strukturell nicht in Excel replizierbar sind.',
  s4Points: [
    ['Echtzeitkurse', 'Automatische Aktualisierungen für Aktien, ETFs, Kryptowährungen — kein Yahoo Finance öffnen und kopieren.'],
    ['TWR/MWR-Performance', 'Automatische Berechnung des zeitgewichteten und geldgewichteten Ertrags — die Standardkennzahlen der Profis.'],
    ['Multi-Broker in einer Ansicht', 'Fineco, Degiro, Scalable Capital und jeden anderen Broker in einem einzigen Dashboard konsolidieren.'],
    ['Allokation nach Anlageklasse', 'Sofort sehen, wie du zwischen Aktien, ETFs, Anleihen, Krypto und nicht börsennotierten Anlagen verteilt bist.'],
    ['Benchmarks und Inflation', 'Performance mit Indizes wie MSCI World oder S&P500 vergleichen — und prüfen, ob du die Inflation schlägst.'],
    ['Transaktionshistorie', 'Jeder Kauf, Verkauf, jede Dividende und Gebühr dauerhaft und durchsuchbar erfasst.'],
  ],

  s5Title: 'Wann Excel noch sinnvoll ist',
  s5Body: 'Ehrlich gesagt: Es gibt Fälle, in denen Excel die richtige Wahl bleibt.',
  s5Cases: [
    'Du hast weniger als 5 Positionen und handelst kaum',
    'Du hast sehr individuelle Analyseanforderungen, die keine Software unterstützt',
    'Du lernst Excel und das Depot ist eine Lehrübung',
    'Du benötigst sehr spezifische Steuermodelle für deine Situation',
  ],
  s5Switch: 'In allen anderen Fällen — also für die große Mehrheit der Investoren — hat der Wechsel zu dedizierter Software bereits im ersten Monat einen positiven ROI.',

  faqTitle: 'Häufig gestellte Fragen',
  faqItems: [
    {
      q: 'Kann ich mein Excel-Portfolio in DonkyCapital importieren?',
      a: 'Ja. DonkyCapital unterstützt den CSV-Import von vielen Brokern (Degiro, Scalable, Fineco und andere). Du kannst Transaktionen auch manuell eingeben oder aus einer strukturierten Excel-Tabelle importieren.',
    },
    {
      q: 'Verliere ich die Kontrolle über meine Daten, wenn ich Software nutze?',
      a: 'Nein. Deine Daten bleiben deine. DonkyCapital gibt keine Daten an Dritte weiter und du kannst dein Portfolio jederzeit exportieren.',
    },
    {
      q: 'Ist Excel wirklich so fehleranfällig?',
      a: 'Die akademische Forschung bestätigt es: 94% komplexer Excel-Tabellen enthalten mindestens einen Fehler. Bei Finanzportfolios mit Performance-Formeln ist das Risiko real, besonders nach Unternehmensaktionen (Splits, Spin-offs, Sonderdividenden).',
    },
    {
      q: 'Ist dedizierte Software auch für Anfänger geeignet?',
      a: 'Absolut. DonkyCapital ist so konzipiert, dass es auch für Einsteiger intuitiv ist. Du musst keine TWR-Formeln kennen oder verstehen, wie die Einstandspreisberechnung funktioniert — die Software erledigt alles automatisch.',
    },
    {
      q: 'Wie lange dauert die Migration von Excel zu DonkyCapital?',
      a: 'Für die meisten Investoren weniger als eine Stunde. Wenn du einen Broker mit CSV-Import-Kompatibilität hast, kannst du deine gesamte Historie in Minuten importieren. Für sehr große Depots oder viele Broker kann es ein paar Stunden dauern — aber es ist eine einmalige Investition.',
    },
  ],

  ctaTitle: 'Bereit, keine Zeit mehr zu verschwenden?',
  ctaBody: 'Starte heute mit DonkyCapital. Kostenlos, keine Kreditkarte erforderlich, und dein Depot wird sofort in Echtzeit aktualisiert.',
  ctaButton: 'Kostenlos starten',
}

const fr: ExcelVsSoftwareTranslations = {
  badge: 'Guide DonkyCapital',
  h1: 'Excel vs Logiciel :',
  h1Highlight: 'Le vrai coût du suivi de portefeuille maison',
  intro1: 'Des millions d\'investisseurs utilisent encore Excel pour suivre leur portefeuille. C\'est gratuit, flexible et familier. Mais est-ce vraiment rentable ? Ce guide calcule le vrai coût en temps, erreurs et opportunités manquées.',
  intro2: 'Spoiler : le vrai coût d\'Excel n\'est pas zéro. Il dépasse souvent de loin celui de n\'importe quel logiciel dédié.',

  s1Title: 'Le coût du temps : combien d\'heures dépenses-tu ?',
  s1Body: 'Chaque mise à jour du portefeuille nécessite des opérations manuelles répétitives. Voyons combien de temps la gestion avec Excel demande réalistement par rapport à un outil automatisé.',
  s1TableHeaders: ['Opération', 'Excel (min)', 'DonkyCapital (min)'],
  s1TableRows: [
    ['Mettre à jour les cours de 20 titres', '15–25', '0 (automatique)'],
    ['Enregistrer une nouvelle transaction', '5–10', '1–2'],
    ['Calculer la performance YTD', '10–20', '0 (temps réel)'],
    ['Mettre à jour l\'allocation par classe', '10–15', '0 (automatique)'],
    ['Générer un rapport mensuel', '30–60', '1–3'],
    ['Réconcilier avec le relevé courtier', '20–40', '5–10'],
    ['Vérifier les dividendes reçus', '10–20', '0 (automatique)'],
  ],
  s1Total: 'Total mensuel estimé : Excel 100–190 min · DonkyCapital 7–15 min',
  s1Note: 'Avec 10 heures économisées par an sur un portefeuille moyen, à €30/h de coût d\'opportunité, c\'est €300/an récupérés — même avec un portefeuille de €10.000.',

  s2Title: 'Le taux d\'erreur : Excel n\'est pas infaillible',
  s2Body: 'Une étude de l\'Université d\'Hawaï a analysé 13.000 feuilles Excel d\'entreprises : 94% contenaient au moins une erreur. Pour les portefeuilles financiers, les conséquences peuvent être coûteuses.',
  s2Errors: [
    {
      title: 'Erreurs de formule',
      desc: 'Faire glisser une formule et oublier de bloquer une référence absolue. Résultat : des calculs de performance complètement faux pendant des mois.',
      impact: 'Impact : décisions de rééquilibrage basées sur des données incorrectes',
    },
    {
      title: 'Divisions d\'actions non gérées',
      desc: 'Une entreprise fait un split 3:1 et tu oublies de mettre à jour le tableau. La performance historique devient incompréhensible.',
      impact: 'Impact : performance historique faussée, prix de revient incorrect',
    },
    {
      title: 'Dividendes non enregistrés',
      desc: 'Il est facile d\'oublier d\'enregistrer les dividendes crédités automatiquement. La performance réelle semble sous-estimée.',
      impact: 'Impact : rendement réel sous-évalué de 1–3% par an',
    },
    {
      title: 'Versions multiples et données incohérentes',
      desc: 'Tu as trois versions du fichier : "portefeuille_final", "portefeuille_final_v2", "portefeuille_OK". Laquelle est la bonne ?',
      impact: 'Impact : risque de prendre des décisions sur des données obsolètes',
    },
  ],
  s2Tip: 'DonkyCapital gère automatiquement les splits, dividendes et mises à jour des cours. Aucune formule à maintenir, aucun risque de versions incorrectes.',

  s3Title: 'Analyse ROI : ça vaut le coup de passer à un logiciel ?',
  s3Body: 'Traduisons le temps perdu en argent réel. Le calcul utilise le concept de coût d\'opportunité : la valeur de l\'heure que tu pourrais consacrer à autre chose.',
  s3Scenarios: [
    {
      label: 'Investisseur occasionnel',
      portfolio: '€10.000–30.000',
      hourly: '€20/h',
      yearlyHours: '12 heures/an',
      yearlyCost: '€240/an',
      missedReturn: '+ opportunités manquées par analyses imprécises',
    },
    {
      label: 'Investisseur actif',
      portfolio: '€30.000–100.000',
      hourly: '€35/h',
      yearlyHours: '25 heures/an',
      yearlyCost: '€875/an',
      missedReturn: '+ erreurs pouvant coûter 1–2% du portefeuille',
    },
    {
      label: 'Investisseur avancé',
      portfolio: '€100.000+',
      hourly: '€50/h',
      yearlyHours: '40 heures/an',
      yearlyCost: '€2.000/an',
      missedReturn: '+ 2% sur €100k = €2.000 supplémentaires à risque',
    },
  ],
  s3Note: 'Le coût d\'un logiciel professionnel de suivi de portefeuille se situe typiquement entre €0 et €15/mois. Le point mort est atteint en économisant seulement 1–2 heures/an.',
  s3Conclusion: 'La bonne question n\'est pas « puis-je me permettre un logiciel ? » mais « puis-je me permettre de NE PAS en utiliser ? »',

  s4Title: 'Ce que tu gagnes vraiment avec DonkyCapital',
  s4Body: 'Au-delà du gain de temps, un logiciel dédié offre des fonctionnalités structurellement impossibles à reproduire dans Excel.',
  s4Points: [
    ['Cours en temps réel', 'Mise à jour automatique des actions, ETF, cryptos — sans ouvrir Yahoo Finance et copier-coller.'],
    ['Performance TWR/MWR', 'Calcul automatique du rendement pondéré dans le temps et pondéré par la valeur — les métriques standard des professionnels.'],
    ['Multi-courtier en une vue', 'Consolidez Fineco, Degiro, Scalable Capital et tout autre courtier dans un seul tableau de bord.'],
    ['Allocation par classe d\'actifs', 'Visualisez instantanément votre répartition entre actions, ETF, obligations, cryptos et actifs non cotés.'],
    ['Benchmarks et inflation', 'Comparez votre performance avec des indices comme MSCI World ou S&P500 — et vérifiez si vous battez l\'inflation.'],
    ['Historique des transactions', 'Chaque achat, vente, dividende et commission enregistré de façon permanente et consultable.'],
  ],

  s5Title: 'Quand Excel a encore du sens',
  s5Body: 'Soyons honnêtes : il y a des cas où Excel reste le bon choix.',
  s5Cases: [
    'Tu as moins de 5 positions et n\'effectues presque jamais d\'opérations',
    'Tu as des besoins d\'analyse très personnalisés qu\'aucun logiciel ne supporte',
    'Tu apprends Excel et le portefeuille est un exercice pédagogique',
    'Tu as besoin de modèles fiscaux très spécifiques à ta situation',
  ],
  s5Switch: 'Dans tous les autres cas — c\'est-à-dire pour la grande majorité des investisseurs — le passage à un logiciel dédié a un ROI positif dès le premier mois.',

  faqTitle: 'Questions fréquentes',
  faqItems: [
    {
      q: 'Puis-je importer mon portefeuille Excel dans DonkyCapital ?',
      a: 'Oui. DonkyCapital supporte l\'import de fichiers CSV depuis de nombreux courtiers (Degiro, Scalable, Fineco et autres). Tu peux aussi saisir les transactions manuellement ou importer depuis un tableau Excel structuré.',
    },
    {
      q: 'Est-ce que je perds le contrôle de mes données en utilisant un logiciel ?',
      a: 'Non. Tes données restent les tiennes. DonkyCapital ne partage pas les données avec des tiers et tu peux exporter ton portefeuille à tout moment.',
    },
    {
      q: 'Excel est-il vraiment si sujet aux erreurs ?',
      a: 'La recherche académique le confirme : 94% des feuilles Excel complexes contiennent au moins une erreur. Pour les portefeuilles financiers avec des formules de performance, le risque est réel surtout après des événements corporatifs (splits, spin-offs, dividendes exceptionnels).',
    },
    {
      q: 'Un logiciel dédié convient-il aussi aux débutants ?',
      a: 'Absolument. DonkyCapital est conçu pour être intuitif même pour ceux qui débutent. Pas besoin de connaître les formules TWR ou comprendre comment fonctionne le calcul du prix de revient moyen — le logiciel fait tout automatiquement.',
    },
    {
      q: 'Combien de temps faut-il pour migrer d\'Excel à DonkyCapital ?',
      a: 'Pour la plupart des investisseurs, moins d\'une heure. Si tu as un courtier compatible avec l\'import CSV, tu peux importer tout ton historique en quelques minutes. Pour des portefeuilles très grands ou avec de nombreux courtiers, cela peut prendre quelques heures — mais c\'est un investissement unique.',
    },
  ],

  ctaTitle: 'Prêt à arrêter de perdre du temps ?',
  ctaBody: 'Commencez aujourd\'hui avec DonkyCapital. Gratuit, sans carte de crédit, et votre portefeuille sera mis à jour en temps réel dès le premier jour.',
  ctaButton: 'Commencer gratuitement',
}

const es: ExcelVsSoftwareTranslations = {
  badge: 'Guía DonkyCapital',
  h1: 'Excel vs Software:',
  h1Highlight: 'El verdadero coste del seguimiento manual de cartera',
  intro1: 'Millones de inversores aún usan Excel para rastrear su cartera. Es gratuito, flexible y familiar. Pero, ¿tiene realmente sentido económico? Esta guía calcula el coste real en tiempo, errores y oportunidades perdidas.',
  intro2: 'Spoiler: el verdadero coste de Excel no es cero. A menudo supera con creces el de cualquier software dedicado.',

  s1Title: 'El coste del tiempo: ¿cuántas horas estás dedicando?',
  s1Body: 'Cada actualización de la cartera requiere operaciones manuales repetitivas. Veamos cuánto tiempo requiere realisticamente la gestión con Excel frente a una herramienta automatizada.',
  s1TableHeaders: ['Operación', 'Excel (min)', 'DonkyCapital (min)'],
  s1TableRows: [
    ['Actualizar precios de 20 valores', '15–25', '0 (automático)'],
    ['Registrar una nueva transacción', '5–10', '1–2'],
    ['Calcular rendimiento YTD', '10–20', '0 (tiempo real)'],
    ['Actualizar asignación por clase de activo', '10–15', '0 (automático)'],
    ['Generar informe mensual', '30–60', '1–3'],
    ['Conciliar con extracto del bróker', '20–40', '5–10'],
    ['Revisar dividendos recibidos', '10–20', '0 (automático)'],
  ],
  s1Total: 'Total mensual estimado: Excel 100–190 min · DonkyCapital 7–15 min',
  s1Note: 'Con 10 horas/año ahorradas en una cartera media, a €30/h de coste de oportunidad, son €300/año recuperados — incluso con una cartera de €10.000.',

  s2Title: 'La tasa de error: Excel no es infalible',
  s2Body: 'Un estudio de la Universidad de Hawaii analizó 13.000 hojas Excel empresariales: el 94% contenía al menos un error. Para carteras financieras, las consecuencias pueden ser costosas.',
  s2Errors: [
    {
      title: 'Errores de fórmula',
      desc: 'Arrastrar una fórmula y olvidar fijar una referencia absoluta. Resultado: cálculos de rendimiento completamente erróneos durante meses.',
      impact: 'Impacto: decisiones de reequilibrio basadas en datos incorrectos',
    },
    {
      title: 'Splits no gestionados',
      desc: 'Una empresa hace un split 3:1 y olvidas actualizar la hoja. El rendimiento histórico se vuelve incomprensible.',
      impact: 'Impacto: rendimiento histórico distorsionado, precio medio incorrecto',
    },
    {
      title: 'Dividendos no registrados',
      desc: 'Es fácil olvidar registrar dividendos acreditados automáticamente. El rendimiento real parece subestimado.',
      impact: 'Impacto: rentabilidad real subestimada en 1–3% anual',
    },
    {
      title: 'Múltiples versiones y datos inconsistentes',
      desc: 'Tienes tres versiones del archivo: "cartera_final", "cartera_final_v2", "cartera_OK". ¿Cuál es la correcta?',
      impact: 'Impacto: riesgo de tomar decisiones con datos obsoletos',
    },
  ],
  s2Tip: 'DonkyCapital gestiona automáticamente splits, dividendos y actualizaciones de precios. Sin fórmulas que mantener, sin riesgo de versiones incorrectas.',

  s3Title: 'Análisis ROI: ¿vale la pena cambiar a un software?',
  s3Body: 'Traduzcamos el tiempo perdido en dinero real. El cálculo usa el concepto de coste de oportunidad: el valor de la hora que podrías dedicar a otra cosa.',
  s3Scenarios: [
    {
      label: 'Inversor ocasional',
      portfolio: '€10.000–30.000',
      hourly: '€20/h',
      yearlyHours: '12 horas/año',
      yearlyCost: '€240/año',
      missedReturn: '+ oportunidades perdidas por análisis imprecisos',
    },
    {
      label: 'Inversor activo',
      portfolio: '€30.000–100.000',
      hourly: '€35/h',
      yearlyHours: '25 horas/año',
      yearlyCost: '€875/año',
      missedReturn: '+ errores que pueden costar 1–2% de la cartera',
    },
    {
      label: 'Inversor avanzado',
      portfolio: '€100.000+',
      hourly: '€50/h',
      yearlyHours: '40 horas/año',
      yearlyCost: '€2.000/año',
      missedReturn: '+ 2% sobre €100k = €2.000 adicionales en riesgo',
    },
  ],
  s3Note: 'El coste de un software profesional de seguimiento de cartera es típicamente entre €0 y €15/mes. El punto de equilibrio se alcanza ahorrando solo 1–2 horas/año.',
  s3Conclusion: 'La pregunta correcta no es "¿puedo permitirme un software?" sino "¿puedo permitirme NO usarlo?"',

  s4Title: 'Lo que realmente ganas con DonkyCapital',
  s4Body: 'Más allá del ahorro de tiempo, el software dedicado ofrece funcionalidades estructuralmente imposibles de replicar en Excel.',
  s4Points: [
    ['Precios en tiempo real', 'Actualización automática de acciones, ETFs, cryptos — sin abrir Yahoo Finance y copiar-pegar.'],
    ['Rendimiento TWR/MWR', 'Cálculo automático del retorno ponderado por tiempo y por dinero — las métricas estándar de los profesionales.'],
    ['Multi-bróker en una vista', 'Consolida Fineco, Degiro, Scalable Capital y cualquier otro bróker en un único dashboard.'],
    ['Asignación por clase de activo', 'Visualiza instantáneamente cómo estás distribuido entre acciones, ETFs, bonos, cryptos y activos no cotizados.'],
    ['Benchmarks e inflación', 'Compara tu rendimiento con índices como MSCI World o S&P500 — y verifica si estás batiendo la inflación.'],
    ['Historial de transacciones', 'Cada compra, venta, dividendo y comisión registrado de forma permanente y con búsqueda.'],
  ],

  s5Title: 'Cuándo Excel todavía tiene sentido',
  s5Body: 'Siendo honestos: hay casos en que Excel sigue siendo la elección correcta.',
  s5Cases: [
    'Tienes menos de 5 posiciones y casi nunca operas',
    'Tienes necesidades de análisis muy personalizadas que ningún software soporta',
    'Estás aprendiendo Excel y la cartera es un ejercicio didáctico',
    'Necesitas modelos fiscales muy específicos para tu situación',
  ],
  s5Switch: 'En todos los demás casos — es decir, para la gran mayoría de inversores — el cambio a un software dedicado tiene un ROI positivo desde el primer mes.',

  faqTitle: 'Preguntas frecuentes',
  faqItems: [
    {
      q: '¿Puedo importar mi cartera de Excel en DonkyCapital?',
      a: 'Sí. DonkyCapital soporta la importación de archivos CSV de muchos brókers (Degiro, Scalable, Fineco y otros). También puedes introducir las transacciones manualmente o importar desde una hoja Excel estructurada.',
    },
    {
      q: '¿Pierdo el control de mis datos si uso un software?',
      a: 'No. Tus datos siguen siendo tuyos. DonkyCapital no comparte datos con terceros y puedes exportar tu cartera en cualquier momento.',
    },
    {
      q: '¿Es Excel realmente tan propenso a errores?',
      a: 'La investigación académica lo confirma: el 94% de las hojas Excel complejas contienen al menos un error. Para carteras financieras con fórmulas de rendimiento, el riesgo es real especialmente después de eventos corporativos (splits, spin-offs, dividendos especiales).',
    },
    {
      q: '¿Es el software dedicado adecuado también para principiantes?',
      a: 'Absolutamente. DonkyCapital está diseñado para ser intuitivo incluso para quienes empiezan. No necesitas conocer las fórmulas TWR ni entender cómo funciona el cálculo del precio medio — el software lo hace todo automáticamente.',
    },
    {
      q: '¿Cuánto tiempo lleva migrar de Excel a DonkyCapital?',
      a: 'Para la mayoría de los inversores, menos de una hora. Si tienes un bróker compatible con la importación CSV, puedes importar todo tu historial en minutos. Para carteras muy grandes o con muchos brókers, puede llevar unas horas — pero es una inversión única.',
    },
  ],

  ctaTitle: '¿Listo para dejar de perder tiempo?',
  ctaBody: 'Empieza hoy con DonkyCapital. Gratis, sin tarjeta de crédito, y tu cartera se actualizará en tiempo real desde el primer día.',
  ctaButton: 'Empezar gratis',
}

export const excelVsSoftwareTranslations: Record<Locale, ExcelVsSoftwareTranslations> = {
  it,
  en,
  de,
  fr,
  es,
}
