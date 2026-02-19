import type { Locale } from '@/lib/i18n/config'

export interface BenchmarkGuideTranslations {
  badge: string
  h1: string
  h1Highlight: string
  intro1: string
  intro2: string
  // Section 1: Why compare with inflation
  s1Title: string
  s1Body1: string
  s1Body2: string
  s1CalloutTitle: string
  s1CalloutItems: readonly string[]
  // Section 2: How to configure
  s2Title: string
  s2Intro: string
  s2Steps: readonly string[]
  s2ImgAlt: string
  s2ImgCaption: string
  s2Note: string
  // Section 3: How to read the chart
  s3Title: string
  s3Intro: string
  s3ViewModesTitle: string
  s3ViewModesItems: readonly [string, string][]
  s3ImgAlt: string
  s3Rules: readonly [string, string][]
  s3AnalysisTitle: string
  s3AnalysisItems: readonly string[]
  s3AnalysisNote: string
  // Section 4: Available benchmarks
  s4Title: string
  s4Intro: string
  s4ImgAlt: string
  s4ImgCaption: string
  s4IndexTitle: string
  s4IndexItems: readonly string[]
  s4MacroTitle: string
  s4MacroItems: readonly string[]
  s4MacroNote: string
  // Section 5: Which benchmark to choose
  s5Title: string
  s5Items: readonly [string, string, string][]
  // FAQ
  faqTitle: string
  faqItems: readonly { q: string; a: string }[]
  // CTA
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  ctaFooter: string
}

const it: BenchmarkGuideTranslations = {
  badge: 'Guida · Benchmark & Inflazione',
  h1: 'Come Battere l\'Inflazione: Monitorare il Rendimento Reale',
  h1Highlight: 'con i Benchmark HICP in DonkyCapital',
  intro1: 'Nella nostra guida agli errori nel portfolio tracking abbiamo visto come l\'inflazione possa trasformare un rendimento nominale positivo in una perdita reale. Ma conoscere il problema non basta: serve uno strumento che ti mostri, anno per anno, se il tuo portafoglio sta davvero battendo l\'inflazione.',
  intro2: 'DonkyCapital integra i dati HICP (Harmonised Index of Consumer Prices) di Eurostat direttamente nel widget Performance Timeline, permettendoti di sovrapporre l\'inflazione europea al grafico del tuo rendimento. Il risultato: una visione immediata del rendimento reale, senza calcoli manuali.',
  s1Title: 'Perché Confrontarsi con l\'Inflazione, Non Solo con i Mercati',
  s1Body1: 'La maggior parte degli investitori usa indici azionari come benchmark — S&P 500, EURO STOXX 50, DAX. Ha senso: vuoi sapere se stai battendo il mercato. Ma c\'è una domanda più fondamentale che spesso viene ignorata: il tuo portafoglio sta creando ricchezza reale o stai solo preservando il capitale nominale mentre il suo valore reale si erode?',
  s1Body2: 'Un portafoglio che guadagna il +7% in un anno con inflazione al 9% ha perso potere d\'acquisto. Investire per preservare il potere d\'acquisto è l\'obiettivo minimo di qualsiasi strategia di lungo periodo — ed è la prima cosa da monitorare prima ancora di confrontarsi con i mercati.',
  s1CalloutTitle: 'Il rendimento che conta davvero',
  s1CalloutItems: [
    '→ 2022: portafoglio +7%, inflazione HICP EU +9,2% → rendimento reale −2,0%',
    '→ 2021: portafoglio +12%, inflazione HICP EU +2,6% → rendimento reale +9,2%',
    '→ 2023: portafoglio +8%, inflazione HICP EU +5,4% → rendimento reale +2,5%',
    '→ Formula: rendimento reale = [(1 + nominale) / (1 + inflazione)] − 1',
  ],
  s2Title: 'Come Configurare il Benchmark nel Widget Performance Timeline',
  s2Intro: 'Il benchmark si configura direttamente dal widget Performance Timeline. Sono necessari tre click:',
  s2Steps: [
    'Apri il widget Performance Timeline nella tua dashboard DonkyCapital',
    'Clicca sull\'icona a ingranaggio ⚙ in alto a destra del widget per aprire le impostazioni',
    'Nella sezione "Benchmark", seleziona dal menu a tendina "HICP European Union" (oppure la variante HICP del tuo paese)',
    'Clicca "Save Changes" — il grafico si aggiornerà immediatamente',
  ],
  s2ImgAlt: 'DonkyCapital — configurazione widget Performance Timeline con benchmark HICP European Union',
  s2ImgCaption: 'La sezione Benchmark nel pannello Widget Configuration. Il tag "Macro" distingue i benchmark inflazionistici dagli indici azionari.',
  s2Note: 'Il benchmark si applica solo al widget in cui lo configuri. Puoi avere più widget Performance Timeline sulla stessa dashboard, ognuno con benchmark diversi — uno con HICP per la visione del rendimento reale, uno con S&P 500 per il confronto con il mercato.',
  s3Title: 'Come Leggere il Grafico Rendimento vs Inflazione',
  s3Intro: 'Una volta configurato, il widget sovrappone la linea tratteggiata dell\'inflazione alle barre del rendimento. Prima di leggere il grafico, scegli la granularità temporale più adatta al tuo obiettivo:',
  s3ViewModesTitle: 'Tre visualizzazioni disponibili',
  s3ViewModesItems: [
    ['WEEKLY (settimanale)', 'Utile per monitorare la volatilità a breve termine. L\'inflazione settimanale ha variazioni minime — la lettura più utile è individuare picchi di rendimento nel contesto macro.'],
    ['MONTHLY (mensile)', 'Ideale per seguire l\'andamento mensile in periodi di alta inflazione. Permette di vedere i mesi in cui il portafoglio ha subìto le perdite reali maggiori.'],
    ['YEARLY (annuale)', 'La vista più significativa per la pianificazione di lungo periodo. Confronta rendimento annuo vs inflazione annua — la metrica più chiara per capire se stai creando ricchezza reale.'],
  ],
  s3ImgAlt: 'DonkyCapital — Performance Timeline (vista annuale) con benchmark HICP EU sovrapposto al rendimento del portafoglio',
  s3Rules: [
    ['Barra verde sopra la linea tratteggiata', 'Rendimento reale positivo — il portafoglio ha battuto l\'inflazione in quell\'anno'],
    ['Barra verde sotto la linea tratteggiata', 'Rendimento reale negativo — l\'inflazione ha eroso il guadagno nominale'],
    ['Barra sotto lo zero', 'Perdita sia nominale che reale — il doppio effetto negativo del 2022'],
  ],
  s3AnalysisTitle: 'Analisi dell\'esempio reale in figura',
  s3AnalysisItems: [
    '2021: rendimento ~+17% vs HICP ~+2,6% → rendimento reale eccellente (+14%)',
    '2022: rendimento ~−16% vs HICP ~+9,2% → anno devastante in termini reali (perdita reale circa −23%)',
    '2023: rendimento ~+7% vs HICP ~+5,4% → rendimento reale sottile, appena positivo',
    '2024: rendimento ~+10% vs HICP ~+2,7% → solido rendimento reale (+7%)',
    '2025: rendimento ~+8% vs HICP ~+2% → buon rendimento reale',
  ],
  s3AnalysisNote: 'Il 2022 sembra già grave con −16% nominale, ma sovrapporre l\'HICP rivela che la perdita di potere d\'acquisto era circa −23% reale. Senza questo confronto, il danno è sistematicamente sottostimato.',
  s4Title: 'Tutti i Benchmark Disponibili in DonkyCapital',
  s4Intro: 'DonkyCapital offre due categorie di benchmark, selezionabili dal menu nel pannello di configurazione del widget:',
  s4ImgAlt: 'DonkyCapital — lista completa dei benchmark disponibili: indici azionari e benchmark macro HICP',
  s4ImgCaption: 'Il menu mostra benchmark di tipo "Index" (indici azionari) e "Macro" (indicatori inflazionistici HICP per paese).',
  s4IndexTitle: 'Benchmark Indici — confronto con i mercati',
  s4IndexItems: [
    'S&P 500 — il principale indice azionario americano (500 grandi aziende USA)',
    'EURO STOXX 50 — le 50 maggiori aziende dell\'Eurozona',
    'DAX — indice azionario tedesco (40 blue chip)',
    'FTSE 100 — indice britannico delle 100 maggiori capitalizzazioni',
    'FTSE MIB — indice azionario italiano (40 principali titoli di Borsa Italiana)',
    'CAC 40 — indice azionario francese',
    'IBEX 35 — indice azionario spagnolo',
    'Dow Jones Industrial — 30 grandi aziende americane storiche',
    'Russell 2000 — small cap americane (2000 piccole aziende USA)',
  ],
  s4MacroTitle: 'Benchmark Macro — confronto con l\'inflazione HICP',
  s4MacroItems: [
    'HICP European Union — inflazione media dell\'intera Eurozona (raccomandato come baseline)',
    'HICP Italia — inflazione specifica italiana (ideale per chi spende principalmente in Italia)',
    'HICP Germania — inflazione tedesca',
    'HICP Francia — inflazione francese',
    'HICP Spagna — inflazione spagnola',
  ],
  s4MacroNote: 'Usa l\'HICP del tuo paese di residenza se le tue spese quotidiane sono principalmente in quella valuta e in quel contesto di prezzi. L\'HICP EU è più adatto per chi ha un profilo di spesa internazionale o vuole un benchmark "neutro" europeo.',
  s5Title: 'Quale Benchmark Scegliere in Base al Tuo Profilo',
  s5Items: [
    ['Investitore ETF globale (MSCI World, All World)', 'HICP EU come baseline inflazionistica', 'Aggiungi S&P 500 su un secondo widget per vedere il confronto con il mercato americano'],
    ['Portafoglio prevalentemente europeo', 'HICP EU o HICP del tuo paese di residenza', 'Poi EURO STOXX 50 per il confronto con il mercato europeo'],
    ['Obiettivo principale: preservare il capitale reale', 'HICP EU o HICP nazionale', 'L\'inflazione è il benchmark minimo da battere prima di qualsiasi altro confronto'],
    ['Vuoi capire se sei un buon stock picker?', 'S&P 500 o l\'indice di riferimento del tuo mercato principale', 'Se batti il mercato di riferimento, stai creando alpha reale'],
  ],
  faqTitle: 'Domande Frequenti',
  faqItems: [
    {
      q: 'Posso usare il benchmark su periodi diversi da quello annuale?',
      a: 'Sì. Il widget Performance Timeline supporta le visualizzazioni settimanale, mensile e annuale. Puoi usare il benchmark HICP in qualsiasi di queste modalità, anche se la lettura annuale è quella più significativa per l\'analisi del rendimento reale nel lungo periodo.',
    },
    {
      q: 'I dati HICP sono aggiornati in tempo reale?',
      a: 'I dati HICP sono pubblicati da Eurostat con cadenza mensile e vengono aggiornati in DonkyCapital non appena disponibili. Il dato del mese corrente potrebbe non essere ancora disponibile se non ancora rilasciato da Eurostat.',
    },
    {
      q: 'Posso sovrapporre sia un indice azionario che l\'HICP sullo stesso grafico?',
      a: 'Attualmente il widget supporta un solo benchmark per volta. Per confrontare il portafoglio sia con l\'inflazione che con un indice azionario, puoi aggiungere due istanze del widget Performance Timeline alla dashboard, ognuna con il proprio benchmark.',
    },
    {
      q: 'Perché il mio rendimento reale calcolato manualmente è diverso da quello che leggo dal grafico?',
      a: 'Il grafico sovrappone le due serie in modo visivo — non calcola automaticamente la differenza. La barra mostra il rendimento nominale, la linea mostra l\'inflazione. Per calcolare il rendimento reale esatto usa la formula: [(1 + rendimento nominale) / (1 + inflazione HICP)] − 1.',
    },
  ],
  ctaTitle: 'Inizia a Monitorare il Tuo Rendimento Reale',
  ctaBody: 'Configura il benchmark HICP nel tuo widget Performance Timeline e scopri immediatamente se il tuo portafoglio sta davvero battendo l\'inflazione — anno per anno, senza calcoli.',
  ctaButton: 'Accedi a DonkyCapital Gratis',
  ctaFooter: 'Early Access gratuito · Nessuna carta di credito richiesta',
}

const en: BenchmarkGuideTranslations = {
  badge: 'Guide · Benchmarks & Inflation',
  h1: 'How to Beat Inflation: Monitoring Real Return',
  h1Highlight: 'with HICP Benchmarks in DonkyCapital',
  intro1: 'In our portfolio tracking mistakes guide, we saw how inflation can turn a positive nominal return into a real loss. But knowing the problem isn\'t enough: you need a tool that shows you, year by year, whether your portfolio is truly beating inflation.',
  intro2: 'DonkyCapital integrates Eurostat HICP (Harmonised Index of Consumer Prices) data directly into the Performance Timeline widget, letting you overlay European inflation on your return chart. The result: an immediate view of real return, without manual calculations.',
  s1Title: 'Why Compare Against Inflation, Not Just Markets',
  s1Body1: 'Most investors use stock indices as benchmarks — S&P 500, EURO STOXX 50, DAX. That makes sense: you want to know if you\'re beating the market. But there\'s a more fundamental question that\'s often ignored: is your portfolio creating real wealth, or are you just preserving nominal capital while its real value erodes?',
  s1Body2: 'A portfolio that gains +7% in a year with 9% inflation has lost purchasing power. Investing to preserve purchasing power is the minimum goal of any long-term strategy — and it\'s the first thing to monitor before even comparing yourself with the markets.',
  s1CalloutTitle: 'The return that truly matters',
  s1CalloutItems: [
    '→ 2022: portfolio +7%, HICP EU inflation +9.2% → real return −2.0%',
    '→ 2021: portfolio +12%, HICP EU inflation +2.6% → real return +9.2%',
    '→ 2023: portfolio +8%, HICP EU inflation +5.4% → real return +2.5%',
    '→ Formula: real return = [(1 + nominal) / (1 + inflation)] − 1',
  ],
  s2Title: 'How to Configure the Benchmark in the Performance Timeline Widget',
  s2Intro: 'The benchmark is configured directly in the Performance Timeline widget. It takes three clicks:',
  s2Steps: [
    'Open the Performance Timeline widget in your DonkyCapital dashboard',
    'Click the gear icon ⚙ in the top right of the widget to open settings',
    'In the "Benchmark" section, select "HICP European Union" from the dropdown (or your country\'s HICP variant)',
    'Click "Save Changes" — the chart will update immediately',
  ],
  s2ImgAlt: 'DonkyCapital — Performance Timeline widget configuration with HICP European Union benchmark',
  s2ImgCaption: 'The Benchmark section in the Widget Configuration panel. The "Macro" tag distinguishes inflation benchmarks from stock market indices.',
  s2Note: 'The benchmark applies only to the widget you configure it in. You can have multiple Performance Timeline widgets on the same dashboard, each with different benchmarks — one with HICP for real return view, one with S&P 500 for market comparison.',
  s3Title: 'How to Read the Return vs Inflation Chart',
  s3Intro: 'Once configured, the widget overlays the dashed inflation line on the return bars. Before reading the chart, choose the time granularity that best fits your goal:',
  s3ViewModesTitle: 'Three available views',
  s3ViewModesItems: [
    ['WEEKLY', 'Useful for monitoring short-term volatility. Weekly inflation variations are minimal — the most useful reading is spotting return spikes in the macro context.'],
    ['MONTHLY', 'Ideal for tracking monthly performance during periods of high inflation. Lets you identify the months where the portfolio suffered the largest real losses.'],
    ['YEARLY', 'The most meaningful view for long-term planning. Compares annual return vs annual inflation — the clearest metric to understand if you\'re building real wealth.'],
  ],
  s3ImgAlt: 'DonkyCapital — Performance Timeline (yearly view) with HICP EU benchmark overlaid on the portfolio return',
  s3Rules: [
    ['Green bar above the dashed line', 'Positive real return — the portfolio beat inflation that year'],
    ['Green bar below the dashed line', 'Negative real return — inflation eroded the nominal gain'],
    ['Bar below zero', 'Both nominal and real loss — the double negative effect of 2022'],
  ],
  s3AnalysisTitle: 'Analysis of the real example shown',
  s3AnalysisItems: [
    '2021: return ~+17% vs HICP ~+2.6% → excellent real return (+14%)',
    '2022: return ~−16% vs HICP ~+9.2% → devastating year in real terms (real loss ~−23%)',
    '2023: return ~+7% vs HICP ~+5.4% → thin real return, barely positive',
    '2024: return ~+10% vs HICP ~+2.7% → solid real return (+7%)',
    '2025: return ~+8% vs HICP ~+2% → good real return',
  ],
  s3AnalysisNote: '2022 already looks bad at −16% nominal, but overlaying HICP reveals that the loss of purchasing power was approximately −23% real. Without this comparison, the damage is systematically underestimated.',
  s4Title: 'All Available Benchmarks in DonkyCapital',
  s4Intro: 'DonkyCapital offers two categories of benchmarks, selectable from the widget configuration panel menu:',
  s4ImgAlt: 'DonkyCapital — full list of available benchmarks: stock market indices and HICP macro benchmarks',
  s4ImgCaption: 'The menu shows "Index" benchmarks (stock market indices) and "Macro" benchmarks (HICP inflation indicators by country).',
  s4IndexTitle: 'Index Benchmarks — market comparison',
  s4IndexItems: [
    'S&P 500 — the primary American stock index (500 large US companies)',
    'EURO STOXX 50 — the 50 largest companies in the Eurozone',
    'DAX — German stock index (40 blue chips)',
    'FTSE 100 — British index of top 100 capitalizations',
    'FTSE MIB — Italian stock index (40 main Italian Exchange stocks)',
    'CAC 40 — French stock index',
    'IBEX 35 — Spanish stock index',
    'Dow Jones Industrial — 30 historic large American companies',
    'Russell 2000 — American small caps (2000 small US companies)',
  ],
  s4MacroTitle: 'Macro Benchmarks — HICP inflation comparison',
  s4MacroItems: [
    'HICP European Union — average inflation across the entire Eurozone (recommended as baseline)',
    'HICP Italy — Italian-specific inflation (ideal for those spending primarily in Italy)',
    'HICP Germany — German inflation',
    'HICP France — French inflation',
    'HICP Spain — Spanish inflation',
  ],
  s4MacroNote: 'Use the HICP of your country of residence if your daily expenses are primarily in that currency and price context. HICP EU is more suitable for those with an international spending profile or who want a neutral European benchmark.',
  s5Title: 'Which Benchmark to Choose Based on Your Profile',
  s5Items: [
    ['Global ETF investor (MSCI World, All World)', 'HICP EU as inflation baseline', 'Add S&P 500 on a second widget to see comparison with the US market'],
    ['Predominantly European portfolio', 'HICP EU or your country\'s HICP', 'Then EURO STOXX 50 for comparison with the European market'],
    ['Main goal: preserve real capital', 'HICP EU or national HICP', 'Inflation is the minimum benchmark to beat before any other comparison'],
    ['Want to know if you\'re a good stock picker?', 'S&P 500 or the reference index of your main market', 'If you beat the reference market, you\'re creating real alpha'],
  ],
  faqTitle: 'Frequently Asked Questions',
  faqItems: [
    {
      q: 'Can I use the benchmark on periods other than yearly?',
      a: 'Yes. The Performance Timeline widget supports weekly, monthly, and yearly views. You can use the HICP benchmark in any of these modes, though the annual view is the most meaningful for long-term real return analysis.',
    },
    {
      q: 'Is HICP data updated in real time?',
      a: 'HICP data is published by Eurostat on a monthly basis and is updated in DonkyCapital as soon as it becomes available. The current month\'s data may not yet be available if it hasn\'t been released by Eurostat.',
    },
    {
      q: 'Can I overlay both a stock index and HICP on the same chart?',
      a: 'Currently the widget supports one benchmark at a time. To compare your portfolio against both inflation and a stock index, you can add two instances of the Performance Timeline widget to the dashboard, each with its own benchmark.',
    },
    {
      q: 'Why is my manually calculated real return different from what I read in the chart?',
      a: 'The chart overlays the two series visually — it doesn\'t automatically calculate the difference. The bar shows nominal return, the line shows inflation. To calculate the exact real return, use the formula: [(1 + nominal return) / (1 + HICP inflation)] − 1.',
    },
  ],
  ctaTitle: 'Start Monitoring Your Real Return',
  ctaBody: 'Configure the HICP benchmark in your Performance Timeline widget and instantly see whether your portfolio is truly beating inflation — year by year, without calculations.',
  ctaButton: 'Access DonkyCapital for Free',
  ctaFooter: 'Free Early Access · No credit card required',
}

const de: BenchmarkGuideTranslations = {
  badge: 'Leitfaden · Benchmarks & Inflation',
  h1: 'Inflation Schlagen: Reale Rendite Überwachen',
  h1Highlight: 'mit HICP-Benchmarks in DonkyCapital',
  intro1: 'In unserem Leitfaden zu Portfolio-Tracking-Fehlern haben wir gesehen, wie Inflation eine positive nominale Rendite in einen realen Verlust verwandeln kann. Aber das Problem zu kennen reicht nicht: Du brauchst ein Tool, das dir Jahr für Jahr zeigt, ob dein Portfolio die Inflation wirklich schlägt.',
  intro2: 'DonkyCapital integriert Eurostat-HICP-Daten (Harmonisierter Verbraucherpreisindex) direkt in das Performance-Timeline-Widget und ermöglicht es dir, die europäische Inflation über deinen Renditechart zu legen. Das Ergebnis: Eine sofortige Ansicht der realen Rendite ohne manuelle Berechnungen.',
  s1Title: 'Warum Man Sich Mit Inflation Vergleichen Sollte, Nicht Nur Mit Märkten',
  s1Body1: 'Die meisten Anleger verwenden Aktienindizes als Benchmarks — S&P 500, EURO STOXX 50, DAX. Das macht Sinn: Du willst wissen, ob du den Markt schlägst. Aber es gibt eine grundlegendere Frage, die oft ignoriert wird: Schafft dein Portfolio echten Reichtum, oder erhältst du nur nominales Kapital, während sein realer Wert erodiert?',
  s1Body2: 'Ein Portfolio, das in einem Jahr mit 9% Inflation +7% gewinnt, hat Kaufkraft verloren. Zu investieren, um die Kaufkraft zu erhalten, ist das Mindestziel jeder langfristigen Strategie — und es ist das Erste, was man überwachen sollte, bevor man sich mit den Märkten vergleicht.',
  s1CalloutTitle: 'Die Rendite, die wirklich zählt',
  s1CalloutItems: [
    '→ 2022: Portfolio +7%, HICP-EU-Inflation +9,2% → Realrendite −2,0%',
    '→ 2021: Portfolio +12%, HICP-EU-Inflation +2,6% → Realrendite +9,2%',
    '→ 2023: Portfolio +8%, HICP-EU-Inflation +5,4% → Realrendite +2,5%',
    '→ Formel: Realrendite = [(1 + Nominalrendite) / (1 + Inflation)] − 1',
  ],
  s2Title: 'So Konfigurierst Du Den Benchmark Im Performance-Timeline-Widget',
  s2Intro: 'Der Benchmark wird direkt im Performance-Timeline-Widget konfiguriert. Es dauert drei Klicks:',
  s2Steps: [
    'Öffne das Performance-Timeline-Widget in deinem DonkyCapital-Dashboard',
    'Klicke auf das Zahnrad-Symbol ⚙ oben rechts im Widget, um die Einstellungen zu öffnen',
    'Wähle im Abschnitt "Benchmark" aus dem Dropdown-Menü "HICP European Union" (oder die HICP-Variante deines Landes)',
    'Klicke auf "Save Changes" — der Chart wird sofort aktualisiert',
  ],
  s2ImgAlt: 'DonkyCapital — Performance-Timeline-Widget-Konfiguration mit HICP-European-Union-Benchmark',
  s2ImgCaption: 'Der Benchmark-Bereich im Widget-Konfigurationspanel. Das "Macro"-Tag unterscheidet Inflationsbenchmarks von Aktienmarktindizes.',
  s2Note: 'Der Benchmark gilt nur für das Widget, in dem du ihn konfigurierst. Du kannst mehrere Performance-Timeline-Widgets im selben Dashboard haben, jedes mit einem anderen Benchmark — eines mit HICP für die Realrendite-Ansicht, eines mit S&P 500 für den Marktvergleich.',
  s3Title: 'Wie Man Den Rendite-vs-Inflations-Chart Liest',
  s3Intro: 'Nach der Konfiguration legt das Widget die gestrichelte Inflationslinie über die Renditebalken. Wähle vor dem Lesen des Charts die zeitliche Granularität, die am besten zu deinem Ziel passt:',
  s3ViewModesTitle: 'Drei verfügbare Ansichten',
  s3ViewModesItems: [
    ['WEEKLY (wöchentlich)', 'Nützlich zur Überwachung der kurzfristigen Volatilität. Wöchentliche Inflationsschwankungen sind minimal — die nützlichste Lektüre ist das Erkennen von Renditespitzen im Makrokontext.'],
    ['MONTHLY (monatlich)', 'Ideal zur Verfolgung der monatlichen Entwicklung in Hochinflationsphasen. Ermöglicht es, die Monate zu identifizieren, in denen das Portfolio die größten realen Verluste erlitten hat.'],
    ['YEARLY (jährlich)', 'Die aussagekräftigste Ansicht für die langfristige Planung. Vergleicht jährliche Rendite vs. jährliche Inflation — die klarste Kennzahl, um zu verstehen, ob du echten Reichtum aufbaust.'],
  ],
  s3ImgAlt: 'DonkyCapital — Performance Timeline (Jahresansicht) mit HICP-EU-Benchmark über der Portfolio-Rendite',
  s3Rules: [
    ['Grüner Balken über der gestrichelten Linie', 'Positive Realrendite — das Portfolio hat die Inflation in diesem Jahr geschlagen'],
    ['Grüner Balken unter der gestrichelten Linie', 'Negative Realrendite — die Inflation hat den nominalen Gewinn erodiert'],
    ['Balken unter null', 'Sowohl nominaler als auch realer Verlust — der doppelte Negativeffekt von 2022'],
  ],
  s3AnalysisTitle: 'Analyse des gezeigten realen Beispiels',
  s3AnalysisItems: [
    '2021: Rendite ~+17% vs HICP ~+2,6% → ausgezeichnete Realrendite (+14%)',
    '2022: Rendite ~−16% vs HICP ~+9,2% → verheerendes Jahr in realen Begriffen (realer Verlust ~−23%)',
    '2023: Rendite ~+7% vs HICP ~+5,4% → knappe Realrendite, knapp positiv',
    '2024: Rendite ~+10% vs HICP ~+2,7% → solide Realrendite (+7%)',
    '2025: Rendite ~+8% vs HICP ~+2% → gute Realrendite',
  ],
  s3AnalysisNote: '2022 sieht mit −16% nominell bereits schlecht aus, aber das Überlagern von HICP zeigt, dass der Kaufkraftverlust ungefähr −23% real betrug. Ohne diesen Vergleich wird der Schaden systematisch unterschätzt.',
  s4Title: 'Alle Verfügbaren Benchmarks in DonkyCapital',
  s4Intro: 'DonkyCapital bietet zwei Kategorien von Benchmarks, die aus dem Widget-Konfigurationsmenü ausgewählt werden können:',
  s4ImgAlt: 'DonkyCapital — vollständige Liste der verfügbaren Benchmarks: Aktienmarktindizes und HICP-Makro-Benchmarks',
  s4ImgCaption: 'Das Menü zeigt "Index"-Benchmarks (Aktienmarktindizes) und "Macro"-Benchmarks (HICP-Inflationsindikatoren nach Land).',
  s4IndexTitle: 'Index-Benchmarks — Marktvergleich',
  s4IndexItems: [
    'S&P 500 — der primäre amerikanische Aktienindex (500 große US-Unternehmen)',
    'EURO STOXX 50 — die 50 größten Unternehmen der Eurozone',
    'DAX — Deutscher Aktienindex (40 Blue Chips)',
    'FTSE 100 — Britischer Index der Top-100-Kapitalisierungen',
    'FTSE MIB — Italienischer Aktienindex (40 Haupttitel der Borsa Italiana)',
    'CAC 40 — Französischer Aktienindex',
    'IBEX 35 — Spanischer Aktienindex',
    'Dow Jones Industrial — 30 historische große amerikanische Unternehmen',
    'Russell 2000 — Amerikanische Small Caps (2000 kleine US-Unternehmen)',
  ],
  s4MacroTitle: 'Makro-Benchmarks — HICP-Inflationsvergleich',
  s4MacroItems: [
    'HICP European Union — Durchschnittsinflation der gesamten Eurozone (als Baseline empfohlen)',
    'HICP Italien — Italiano-spezifische Inflation (ideal für Hauptausgaben in Italien)',
    'HICP Deutschland — Deutsche Inflation',
    'HICP Frankreich — Französische Inflation',
    'HICP Spanien — Spanische Inflation',
  ],
  s4MacroNote: 'Verwende den HICP deines Wohnsitzlandes, wenn deine täglichen Ausgaben hauptsächlich in dieser Währung und diesem Preiskontext anfallen. HICP EU ist besser geeignet für diejenigen mit einem internationalen Ausgabenprofil oder die einen neutralen europäischen Benchmark wünschen.',
  s5Title: 'Welchen Benchmark Du Je Nach Profil Wählen Solltest',
  s5Items: [
    ['Globaler ETF-Anleger (MSCI World, All World)', 'HICP EU als Inflationsbaseline', 'Füge S&P 500 in einem zweiten Widget hinzu, um den Vergleich mit dem US-Markt zu sehen'],
    ['Überwiegend europäisches Portfolio', 'HICP EU oder HICP deines Landes', 'Dann EURO STOXX 50 für den Vergleich mit dem europäischen Markt'],
    ['Hauptziel: reales Kapital erhalten', 'HICP EU oder nationaler HICP', 'Inflation ist der Mindest-Benchmark, den es zu schlagen gilt, vor jedem anderen Vergleich'],
    ['Willst du wissen, ob du ein guter Stock-Picker bist?', 'S&P 500 oder der Referenzindex deines Hauptmarkts', 'Wenn du den Referenzmarkt schlägst, schaffst du echtes Alpha'],
  ],
  faqTitle: 'Häufig Gestellte Fragen',
  faqItems: [
    {
      q: 'Kann ich den Benchmark für andere Zeiträume als jährlich verwenden?',
      a: 'Ja. Das Performance-Timeline-Widget unterstützt wöchentliche, monatliche und jährliche Ansichten. Du kannst den HICP-Benchmark in jedem dieser Modi verwenden, obwohl die Jahresansicht für die langfristige Realrenditeanalyse am aussagekräftigsten ist.',
    },
    {
      q: 'Werden HICP-Daten in Echtzeit aktualisiert?',
      a: 'HICP-Daten werden von Eurostat monatlich veröffentlicht und in DonkyCapital aktualisiert, sobald sie verfügbar sind. Die Daten des aktuellen Monats sind möglicherweise noch nicht verfügbar, wenn sie noch nicht von Eurostat veröffentlicht wurden.',
    },
    {
      q: 'Kann ich sowohl einen Aktienindex als auch HICP auf demselben Chart überlagern?',
      a: 'Derzeit unterstützt das Widget jeweils einen Benchmark. Um dein Portfolio sowohl mit Inflation als auch mit einem Aktienindex zu vergleichen, kannst du zwei Instanzen des Performance-Timeline-Widgets zum Dashboard hinzufügen, jede mit ihrem eigenen Benchmark.',
    },
    {
      q: 'Warum unterscheidet sich meine manuell berechnete Realrendite von der, die ich im Chart sehe?',
      a: 'Der Chart überlagert die beiden Serien visuell — er berechnet nicht automatisch die Differenz. Der Balken zeigt die nominale Rendite, die Linie zeigt die Inflation. Um die genaue Realrendite zu berechnen, verwende die Formel: [(1 + Nominalrendite) / (1 + HICP-Inflation)] − 1.',
    },
  ],
  ctaTitle: 'Beginne Mit Der Überwachung Deiner Realen Rendite',
  ctaBody: 'Konfiguriere den HICP-Benchmark in deinem Performance-Timeline-Widget und sieh sofort, ob dein Portfolio die Inflation wirklich schlägt — Jahr für Jahr, ohne Berechnungen.',
  ctaButton: 'Kostenlos auf DonkyCapital Zugreifen',
  ctaFooter: 'Kostenloser Early Access · Keine Kreditkarte erforderlich',
}

const fr: BenchmarkGuideTranslations = {
  badge: 'Guide · Benchmarks & Inflation',
  h1: "Battre l'Inflation : Surveiller le Rendement Réel",
  h1Highlight: 'avec les Benchmarks HICP dans DonkyCapital',
  intro1: "Dans notre guide sur les erreurs de suivi de portefeuille, nous avons vu comment l'inflation peut transformer un rendement nominal positif en perte réelle. Mais connaître le problème ne suffit pas : il faut un outil qui vous montre, année par année, si votre portefeuille bat vraiment l'inflation.",
  intro2: "DonkyCapital intègre les données HICP (Indice des Prix à la Consommation Harmonisé) d'Eurostat directement dans le widget Performance Timeline, vous permettant de superposer l'inflation européenne sur votre graphique de rendement. Le résultat : une vue immédiate du rendement réel, sans calculs manuels.",
  s1Title: "Pourquoi Se Comparer à l'Inflation, Pas Seulement aux Marchés",
  s1Body1: "La plupart des investisseurs utilisent des indices boursiers comme benchmarks — S&P 500, EURO STOXX 50, DAX. Cela a du sens : vous voulez savoir si vous battez le marché. Mais il y a une question plus fondamentale souvent ignorée : votre portefeuille crée-t-il de la vraie richesse, ou préservez-vous simplement un capital nominal dont la valeur réelle s'érode ?",
  s1Body2: "Un portefeuille qui gagne +7% dans une année avec 9% d'inflation a perdu du pouvoir d'achat. Investir pour préserver le pouvoir d'achat est l'objectif minimum de toute stratégie à long terme — et c'est la première chose à surveiller avant même de se comparer aux marchés.",
  s1CalloutTitle: 'Le rendement qui compte vraiment',
  s1CalloutItems: [
    "→ 2022 : portefeuille +7%, inflation HICP EU +9,2% → rendement réel −2,0%",
    "→ 2021 : portefeuille +12%, inflation HICP EU +2,6% → rendement réel +9,2%",
    "→ 2023 : portefeuille +8%, inflation HICP EU +5,4% → rendement réel +2,5%",
    "→ Formule : rendement réel = [(1 + nominal) / (1 + inflation)] − 1",
  ],
  s2Title: 'Comment Configurer le Benchmark dans le Widget Performance Timeline',
  s2Intro: 'Le benchmark se configure directement dans le widget Performance Timeline. Il faut trois clics :',
  s2Steps: [
    'Ouvrez le widget Performance Timeline dans votre tableau de bord DonkyCapital',
    'Cliquez sur l\'icône d\'engrenage ⚙ en haut à droite du widget pour ouvrir les paramètres',
    'Dans la section "Benchmark", sélectionnez "HICP European Union" dans le menu déroulant (ou la variante HICP de votre pays)',
    'Cliquez sur "Save Changes" — le graphique se mettra à jour immédiatement',
  ],
  s2ImgAlt: 'DonkyCapital — configuration du widget Performance Timeline avec le benchmark HICP European Union',
  s2ImgCaption: 'La section Benchmark dans le panneau Widget Configuration. Le tag "Macro" distingue les benchmarks inflationnistes des indices boursiers.',
  s2Note: "Le benchmark s'applique uniquement au widget dans lequel vous le configurez. Vous pouvez avoir plusieurs widgets Performance Timeline sur le même tableau de bord, chacun avec un benchmark différent — un avec HICP pour la vue du rendement réel, un avec S&P 500 pour la comparaison avec le marché.",
  s3Title: 'Comment Lire le Graphique Rendement vs Inflation',
  s3Intro: 'Une fois configuré, le widget superpose la ligne en pointillés de l\'inflation aux barres de rendement. Avant de lire le graphique, choisissez la granularité temporelle la plus adaptée à votre objectif :',
  s3ViewModesTitle: 'Trois vues disponibles',
  s3ViewModesItems: [
    ['WEEKLY (hebdomadaire)', "Utile pour surveiller la volatilité à court terme. Les variations d'inflation hebdomadaires sont minimes — la lecture la plus utile est de repérer les pics de rendement dans le contexte macro."],
    ['MONTHLY (mensuel)', "Idéal pour suivre l'évolution mensuelle en période de forte inflation. Permet d'identifier les mois où le portefeuille a subi les pertes réelles les plus importantes."],
    ['YEARLY (annuel)', "La vue la plus significative pour la planification à long terme. Compare le rendement annuel vs l'inflation annuelle — la métrique la plus claire pour comprendre si vous créez de la vraie richesse."],
  ],
  s3ImgAlt: 'DonkyCapital — Performance Timeline (vue annuelle) avec le benchmark HICP EU superposé au rendement du portefeuille',
  s3Rules: [
    ['Barre verte au-dessus de la ligne en pointillés', "Rendement réel positif — le portefeuille a battu l'inflation cette année"],
    ['Barre verte sous la ligne en pointillés', "Rendement réel négatif — l'inflation a érodé le gain nominal"],
    ['Barre sous zéro', "Perte nominale et réelle — le double effet négatif de 2022"],
  ],
  s3AnalysisTitle: "Analyse de l'exemple réel présenté",
  s3AnalysisItems: [
    "2021 : rendement ~+17% vs HICP ~+2,6% → excellent rendement réel (+14%)",
    "2022 : rendement ~−16% vs HICP ~+9,2% → année dévastatrice en termes réels (perte réelle ~−23%)",
    "2023 : rendement ~+7% vs HICP ~+5,4% → rendement réel mince, à peine positif",
    "2024 : rendement ~+10% vs HICP ~+2,7% → solide rendement réel (+7%)",
    "2025 : rendement ~+8% vs HICP ~+2% → bon rendement réel",
  ],
  s3AnalysisNote: "2022 semble déjà mauvais à −16% nominal, mais superposer le HICP révèle que la perte de pouvoir d'achat était d'environ −23% réel. Sans cette comparaison, le dommage est systématiquement sous-estimé.",
  s4Title: 'Tous les Benchmarks Disponibles dans DonkyCapital',
  s4Intro: 'DonkyCapital propose deux catégories de benchmarks, sélectionnables dans le menu du panneau de configuration du widget :',
  s4ImgAlt: 'DonkyCapital — liste complète des benchmarks disponibles : indices boursiers et benchmarks macro HICP',
  s4ImgCaption: 'Le menu affiche les benchmarks "Index" (indices boursiers) et "Macro" (indicateurs d\'inflation HICP par pays).',
  s4IndexTitle: 'Benchmarks Index — comparaison avec les marchés',
  s4IndexItems: [
    "S&P 500 — le principal indice boursier américain (500 grandes entreprises américaines)",
    "EURO STOXX 50 — les 50 plus grandes entreprises de la zone euro",
    "DAX — indice boursier allemand (40 blue chips)",
    "FTSE 100 — indice britannique des 100 plus grandes capitalisations",
    "FTSE MIB — indice boursier italien (40 principales valeurs de la Bourse de Milan)",
    "CAC 40 — indice boursier français",
    "IBEX 35 — indice boursier espagnol",
    "Dow Jones Industrial — 30 grandes entreprises américaines historiques",
    "Russell 2000 — small caps américaines (2000 petites entreprises américaines)",
  ],
  s4MacroTitle: "Benchmarks Macro — comparaison avec l'inflation HICP",
  s4MacroItems: [
    "HICP European Union — inflation moyenne de l'ensemble de la zone euro (recommandé comme baseline)",
    "HICP Italie — inflation spécifique à l'Italie (idéal pour les dépenses principalement en Italie)",
    "HICP Allemagne — inflation allemande",
    "HICP France — inflation française",
    "HICP Espagne — inflation espagnole",
  ],
  s4MacroNote: "Utilisez le HICP de votre pays de résidence si vos dépenses quotidiennes sont principalement dans cette devise et ce contexte de prix. Le HICP EU convient mieux à ceux qui ont un profil de dépenses international ou qui souhaitent un benchmark européen neutre.",
  s5Title: 'Quel Benchmark Choisir Selon Votre Profil',
  s5Items: [
    ["Investisseur ETF mondial (MSCI World, All World)", "HICP EU comme baseline inflationniste", "Ajoutez S&P 500 sur un second widget pour voir la comparaison avec le marché américain"],
    ["Portefeuille principalement européen", "HICP EU ou HICP de votre pays", "Puis EURO STOXX 50 pour la comparaison avec le marché européen"],
    ["Objectif principal : préserver le capital réel", "HICP EU ou HICP national", "L'inflation est le benchmark minimum à battre avant toute autre comparaison"],
    ["Voulez-vous savoir si vous êtes un bon stock picker ?", "S&P 500 ou l'indice de référence de votre marché principal", "Si vous battez le marché de référence, vous créez de l'alpha réel"],
  ],
  faqTitle: 'Questions Fréquentes',
  faqItems: [
    {
      q: "Puis-je utiliser le benchmark sur des périodes autres qu'annuelles ?",
      a: "Oui. Le widget Performance Timeline prend en charge les vues hebdomadaires, mensuelles et annuelles. Vous pouvez utiliser le benchmark HICP dans n'importe lequel de ces modes, bien que la vue annuelle soit la plus significative pour l'analyse du rendement réel à long terme.",
    },
    {
      q: "Les données HICP sont-elles mises à jour en temps réel ?",
      a: "Les données HICP sont publiées par Eurostat mensuellement et mises à jour dans DonkyCapital dès qu'elles sont disponibles. Les données du mois en cours peuvent ne pas encore être disponibles si elles n'ont pas encore été publiées par Eurostat.",
    },
    {
      q: "Puis-je superposer à la fois un indice boursier et le HICP sur le même graphique ?",
      a: "Actuellement, le widget prend en charge un seul benchmark à la fois. Pour comparer votre portefeuille à la fois avec l'inflation et un indice boursier, vous pouvez ajouter deux instances du widget Performance Timeline au tableau de bord, chacune avec son propre benchmark.",
    },
    {
      q: "Pourquoi mon rendement réel calculé manuellement diffère-t-il de ce que je lis dans le graphique ?",
      a: "Le graphique superpose les deux séries visuellement — il ne calcule pas automatiquement la différence. La barre montre le rendement nominal, la ligne montre l'inflation. Pour calculer le rendement réel exact, utilisez la formule : [(1 + rendement nominal) / (1 + inflation HICP)] − 1.",
    },
  ],
  ctaTitle: 'Commencez à Surveiller Votre Rendement Réel',
  ctaBody: "Configurez le benchmark HICP dans votre widget Performance Timeline et voyez immédiatement si votre portefeuille bat vraiment l'inflation — année par année, sans calculs.",
  ctaButton: 'Accéder à DonkyCapital Gratuitement',
  ctaFooter: "Early Access gratuit · Aucune carte de crédit requise",
}

const es: BenchmarkGuideTranslations = {
  badge: 'Guía · Benchmarks & Inflación',
  h1: 'Cómo Batir la Inflación: Monitorizar la Rentabilidad Real',
  h1Highlight: 'con los Benchmarks HICP en DonkyCapital',
  intro1: 'En nuestra guía de errores en el seguimiento de cartera, vimos cómo la inflación puede convertir una rentabilidad nominal positiva en una pérdida real. Pero conocer el problema no es suficiente: necesitas una herramienta que te muestre, año a año, si tu cartera está realmente batiendo la inflación.',
  intro2: 'DonkyCapital integra datos HICP (Índice de Precios al Consumo Armonizado) de Eurostat directamente en el widget Performance Timeline, permitiéndote superponer la inflación europea sobre tu gráfico de rentabilidad. El resultado: una vista inmediata de la rentabilidad real, sin cálculos manuales.',
  s1Title: 'Por Qué Compararse con la Inflación, No Solo con los Mercados',
  s1Body1: 'La mayoría de los inversores usan índices bursátiles como benchmarks — S&P 500, EURO STOXX 50, DAX. Tiene sentido: quieres saber si estás batiendo al mercado. Pero hay una pregunta más fundamental que a menudo se ignora: ¿tu cartera está creando riqueza real, o solo estás preservando capital nominal mientras su valor real se erosiona?',
  s1Body2: 'Una cartera que gana +7% en un año con inflación del 9% ha perdido poder adquisitivo. Invertir para preservar el poder adquisitivo es el objetivo mínimo de cualquier estrategia a largo plazo — y es lo primero que hay que monitorizar antes de compararse con los mercados.',
  s1CalloutTitle: 'La rentabilidad que realmente importa',
  s1CalloutItems: [
    '→ 2022: cartera +7%, inflación HICP EU +9,2% → rentabilidad real −2,0%',
    '→ 2021: cartera +12%, inflación HICP EU +2,6% → rentabilidad real +9,2%',
    '→ 2023: cartera +8%, inflación HICP EU +5,4% → rentabilidad real +2,5%',
    '→ Fórmula: rentabilidad real = [(1 + nominal) / (1 + inflación)] − 1',
  ],
  s2Title: 'Cómo Configurar el Benchmark en el Widget Performance Timeline',
  s2Intro: 'El benchmark se configura directamente en el widget Performance Timeline. Son necesarios tres clics:',
  s2Steps: [
    'Abre el widget Performance Timeline en tu dashboard de DonkyCapital',
    'Haz clic en el icono de engranaje ⚙ en la parte superior derecha del widget para abrir la configuración',
    'En la sección "Benchmark", selecciona "HICP European Union" del menú desplegable (o la variante HICP de tu país)',
    'Haz clic en "Save Changes" — el gráfico se actualizará inmediatamente',
  ],
  s2ImgAlt: 'DonkyCapital — configuración del widget Performance Timeline con benchmark HICP European Union',
  s2ImgCaption: 'La sección Benchmark en el panel Widget Configuration. La etiqueta "Macro" distingue los benchmarks inflacionistas de los índices bursátiles.',
  s2Note: 'El benchmark se aplica solo al widget en el que lo configuras. Puedes tener múltiples widgets Performance Timeline en el mismo dashboard, cada uno con un benchmark diferente — uno con HICP para la vista de rentabilidad real, otro con S&P 500 para la comparación con el mercado.',
  s3Title: 'Cómo Leer el Gráfico Rentabilidad vs Inflación',
  s3Intro: 'Una vez configurado, el widget superpone la línea de puntos de la inflación sobre las barras de rentabilidad. Antes de leer el gráfico, elige la granularidad temporal más adecuada a tu objetivo:',
  s3ViewModesTitle: 'Tres vistas disponibles',
  s3ViewModesItems: [
    ['WEEKLY (semanal)', 'Útil para monitorizar la volatilidad a corto plazo. Las variaciones semanales de inflación son mínimas — la lectura más útil es identificar picos de rentabilidad en el contexto macro.'],
    ['MONTHLY (mensual)', 'Ideal para seguir la evolución mensual en períodos de alta inflación. Permite identificar los meses en que la cartera sufrió las mayores pérdidas reales.'],
    ['YEARLY (anual)', 'La vista más significativa para la planificación a largo plazo. Compara rentabilidad anual vs inflación anual — la métrica más clara para entender si estás creando riqueza real.'],
  ],
  s3ImgAlt: 'DonkyCapital — Performance Timeline (vista anual) con benchmark HICP EU superpuesto a la rentabilidad de la cartera',
  s3Rules: [
    ['Barra verde por encima de la línea de puntos', 'Rentabilidad real positiva — la cartera batió la inflación ese año'],
    ['Barra verde por debajo de la línea de puntos', 'Rentabilidad real negativa — la inflación erosionó la ganancia nominal'],
    ['Barra por debajo de cero', 'Pérdida tanto nominal como real — el doble efecto negativo de 2022'],
  ],
  s3AnalysisTitle: 'Análisis del ejemplo real mostrado',
  s3AnalysisItems: [
    '2021: rentabilidad ~+17% vs HICP ~+2,6% → excelente rentabilidad real (+14%)',
    '2022: rentabilidad ~−16% vs HICP ~+9,2% → año devastador en términos reales (pérdida real ~−23%)',
    '2023: rentabilidad ~+7% vs HICP ~+5,4% → rentabilidad real escasa, apenas positiva',
    '2024: rentabilidad ~+10% vs HICP ~+2,7% → sólida rentabilidad real (+7%)',
    '2025: rentabilidad ~+8% vs HICP ~+2% → buena rentabilidad real',
  ],
  s3AnalysisNote: '2022 ya parece malo con −16% nominal, pero superponer el HICP revela que la pérdida de poder adquisitivo fue aproximadamente −23% real. Sin esta comparación, el daño se subestima sistemáticamente.',
  s4Title: 'Todos los Benchmarks Disponibles en DonkyCapital',
  s4Intro: 'DonkyCapital ofrece dos categorías de benchmarks, seleccionables desde el menú del panel de configuración del widget:',
  s4ImgAlt: 'DonkyCapital — lista completa de benchmarks disponibles: índices bursátiles y benchmarks macro HICP',
  s4ImgCaption: 'El menú muestra benchmarks de tipo "Index" (índices bursátiles) y "Macro" (indicadores de inflación HICP por país).',
  s4IndexTitle: 'Benchmarks Índice — comparación con los mercados',
  s4IndexItems: [
    'S&P 500 — el principal índice bursátil americano (500 grandes empresas de EE.UU.)',
    'EURO STOXX 50 — las 50 mayores empresas de la Eurozona',
    'DAX — índice bursátil alemán (40 blue chips)',
    'FTSE 100 — índice británico de las 100 mayores capitalizaciones',
    'FTSE MIB — índice bursátil italiano (40 principales valores de la Bolsa de Milán)',
    'CAC 40 — índice bursátil francés',
    'IBEX 35 — índice bursátil español',
    'Dow Jones Industrial — 30 grandes empresas americanas históricas',
    'Russell 2000 — small caps americanas (2000 pequeñas empresas de EE.UU.)',
  ],
  s4MacroTitle: 'Benchmarks Macro — comparación con la inflación HICP',
  s4MacroItems: [
    'HICP European Union — inflación media de toda la Eurozona (recomendado como baseline)',
    'HICP Italia — inflación específica italiana (ideal para gastos principalmente en Italia)',
    'HICP Alemania — inflación alemana',
    'HICP Francia — inflación francesa',
    'HICP España — inflación española',
  ],
  s4MacroNote: 'Usa el HICP de tu país de residencia si tus gastos diarios son principalmente en esa divisa y contexto de precios. El HICP EU es más adecuado para quienes tienen un perfil de gasto internacional o quieren un benchmark europeo neutro.',
  s5Title: 'Qué Benchmark Elegir Según tu Perfil',
  s5Items: [
    ['Inversor ETF global (MSCI World, All World)', 'HICP EU como baseline inflacionista', 'Añade S&P 500 en un segundo widget para ver la comparación con el mercado americano'],
    ['Cartera predominantemente europea', 'HICP EU o HICP de tu país', 'Luego EURO STOXX 50 para la comparación con el mercado europeo'],
    ['Objetivo principal: preservar el capital real', 'HICP EU o HICP nacional', 'La inflación es el benchmark mínimo que hay que batir antes de cualquier otra comparación'],
    ['¿Quieres saber si eres un buen stock picker?', 'S&P 500 o el índice de referencia de tu mercado principal', 'Si bates el mercado de referencia, estás creando alpha real'],
  ],
  faqTitle: 'Preguntas Frecuentes',
  faqItems: [
    {
      q: '¿Puedo usar el benchmark en períodos distintos al anual?',
      a: 'Sí. El widget Performance Timeline soporta vistas semanales, mensuales y anuales. Puedes usar el benchmark HICP en cualquiera de estos modos, aunque la vista anual es la más significativa para el análisis de rentabilidad real a largo plazo.',
    },
    {
      q: '¿Los datos HICP se actualizan en tiempo real?',
      a: 'Los datos HICP son publicados por Eurostat mensualmente y se actualizan en DonkyCapital tan pronto como están disponibles. Los datos del mes actual pueden no estar disponibles aún si Eurostat no los ha publicado todavía.',
    },
    {
      q: '¿Puedo superponer tanto un índice bursátil como el HICP en el mismo gráfico?',
      a: 'Actualmente el widget soporta un solo benchmark a la vez. Para comparar tu cartera tanto con la inflación como con un índice bursátil, puedes añadir dos instancias del widget Performance Timeline al dashboard, cada una con su propio benchmark.',
    },
    {
      q: '¿Por qué mi rentabilidad real calculada manualmente difiere de la que leo en el gráfico?',
      a: 'El gráfico superpone las dos series visualmente — no calcula automáticamente la diferencia. La barra muestra la rentabilidad nominal, la línea muestra la inflación. Para calcular la rentabilidad real exacta usa la fórmula: [(1 + rentabilidad nominal) / (1 + inflación HICP)] − 1.',
    },
  ],
  ctaTitle: 'Empieza a Monitorizar tu Rentabilidad Real',
  ctaBody: 'Configura el benchmark HICP en tu widget Performance Timeline y descubre inmediatamente si tu cartera está batiendo realmente la inflación — año a año, sin cálculos.',
  ctaButton: 'Acceder a DonkyCapital Gratis',
  ctaFooter: 'Early Access gratuito · Sin tarjeta de crédito requerida',
}

export const benchmarkGuideTranslations: Record<Locale, BenchmarkGuideTranslations> = {
  it,
  en,
  de,
  fr,
  es,
}
