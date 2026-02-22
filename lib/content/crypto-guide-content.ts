import type { Locale } from '@/lib/i18n/config'

export interface CryptoGuideTranslations {
  badge: string
  h1: string
  h1Highlight: string
  intro1: string
  intro2: string
  // Section 1 — Why track crypto alongside other assets
  s1Title: string
  s1Body: string
  s1Points: readonly [string, string][] // [title, desc]
  s1Note: string
  // Section 2 — Add a crypto transaction
  s2Title: string
  s2Intro: string
  s2Steps: readonly string[]
  s2ImgAlt: string
  s2ImgCaption: string
  s2Tip: string
  // Section 3 — Crypto not found
  s3Title: string
  s3Body: string
  s3Steps: readonly string[]
  s3ImgAlt: string
  s3ImgCaption: string
  s3Note: string
  // Section 4 — Performance comparison chart
  s4Title: string
  s4Body: string
  s4Points: readonly string[]
  s4ImgAlt: string
  s4ImgCaption: string
  s4Tip: string
  // Section 5 — Complete portfolio
  s5Title: string
  s5Body: string
  s5Items: readonly [string, string][] // [asset type, description]
  s5Summary: string
  // FAQ
  faqTitle: string
  faqItems: readonly { q: string; a: string }[]
  // CTA
  ctaTitle: string
  ctaBody: string
  ctaButton: string
}

const it: CryptoGuideTranslations = {
  badge: 'Guida DonkyCapital',
  h1: 'Come Monitorare le',
  h1Highlight: 'Crypto nel Tuo Portafoglio',
  intro1: 'Bitcoin, Ethereum, altcoin: le criptovalute sono diventate una componente sempre più presente nei portafogli degli investitori. DonkyCapital offre un tab dedicato "Cryptocurrency" per tracciare le tue posizioni crypto esattamente come faresti con azioni ed ETF, con prezzi aggiornati in tempo reale e comparazione delle performance.',
  intro2: 'In questa guida vediamo come aggiungere transazioni crypto, cosa fare se una valuta non è ancora in catalogo, e come sfruttare il grafico di performance comparativa per capire come ogni crypto contribuisce al portafoglio.',

  s1Title: 'Perché tracciare le crypto insieme agli altri asset',
  s1Body: 'Molti investitori gestiscono le crypto separatamente dal resto del portafoglio, perdendo la visione d\'insieme. Integrare le criptovalute in DonkyCapital permette di:',
  s1Points: [
    ['Allocazione reale', 'Vedere quanto peso hanno effettivamente le crypto sul patrimonio complessivo, insieme ad azioni, ETF e asset non quotati'],
    ['Performance comparata', 'Confrontare la performance delle singole crypto tra loro e con gli altri asset del portafoglio nello stesso grafico'],
    ['Storico delle transazioni', 'Avere un registro unificato di acquisti, vendite e operazioni su tutti gli asset in un unico posto'],
    ['Calcolo del rendimento', 'Ottenere metriche coerenti (TWR, IRR, rendimento percentuale) su tutto il portafoglio, crypto incluse'],
  ],
  s1Note: 'DonkyCapital mantiene i prezzi delle crypto aggiornati automaticamente: non devi fare nulla per avere una valutazione corrente delle tue posizioni.',

  s2Title: 'Step 1 — Aggiungi una transazione crypto',
  s2Intro: 'Aggiungere una crypto al portafoglio è identico all\'aggiungere qualsiasi altro asset: dal modal "Add Transaction" selezioni il tab "Cryptocurrency" e cerchi la valuta per nome o ticker.',
  s2Steps: [
    'Apri la sezione Transactions del portafoglio e clicca "Add Transaction"',
    'Scegli il tipo di transazione (es. "Buy Asset" per un acquisto)',
    'Seleziona il tab "Cryptocurrency"',
    'Cerca la crypto per nome o ticker nel campo di ricerca (es. "BTC", "ETH", "BNB")',
    'Seleziona la crypto dall\'elenco — il catalogo include centinaia di valute: AAVE, ALGO, ARB, AVAX, BNB e molte altre',
    'Inserisci quantità, prezzo di acquisto e data della transazione',
    'Clicca "CREATE" per confermare',
  ],
  s2ImgAlt: 'DonkyCapital — modal Add Transaction con tab Cryptocurrency e lista crypto disponibili',
  s2ImgCaption: 'Il tab Cryptocurrency del modal Add Transaction mostra il catalogo completo. Puoi cercare qualsiasi crypto per nome o ticker: BTC, ETH, BNB, AAVE, ALGO, ARB, AVAX e centinaia di altre.',
  s2Tip: 'Puoi registrare qualsiasi tipo di transazione crypto: acquisto, vendita, staking reward (come Dividend), airdrop e trasferimenti. Usa il tipo più appropriato per mantenere la contabilità precisa.',

  s3Title: 'Step 2 — Crypto non trovata? Richiedila',
  s3Body: 'Il catalogo crypto di DonkyCapital è ampio ma non esaustivo. Se cerchi una crypto e non la trovi nell\'elenco, il sistema mostra un messaggio di avviso con la possibilità di richiederne l\'aggiunta direttamente dall\'interfaccia.',
  s3Steps: [
    'Digita il nome o ticker della crypto nel campo di ricerca',
    'Se non viene trovata, appare il banner giallo "Cryptocurrency not found. You can request its addition."',
    'Clicca il pulsante "REQUEST CRYPTOCURRENCY" a destra del banner',
    'Invia la richiesta: il team valuterà l\'aggiunta al catalogo',
  ],
  s3ImgAlt: 'DonkyCapital — messaggio crypto non trovata con pulsante REQUEST CRYPTOCURRENCY',
  s3ImgCaption: 'Quando una crypto non è nel catalogo, DonkyCapital mostra un banner con il pulsante per richiederne l\'aggiunta. In alternativa, puoi aggiungerla come asset non quotato con aggiornamento manuale del prezzo.',
  s3Note: 'Nel frattempo, se hai urgenza di tracciare una crypto non ancora in catalogo, puoi usare la funzionalità "Unlisted Assets" per aggiungerla manualmente con aggiornamento periodico del prezzo.',

  s4Title: 'Step 3 — Visualizza la performance comparativa',
  s4Body: 'Una volta inserite le posizioni crypto, il widget "Portfolio Performance Chart" diventa il tuo strumento principale per analizzare l\'andamento. Il grafico mostra la performance in percentuale di ogni asset nel tempo sullo stesso asse, permettendo confronti immediati.',
  s4Points: [
    'Ogni crypto (e ogni altro asset del portafoglio) appare come una linea colorata distinta',
    'L\'asse Y mostra la variazione percentuale dal punto di inizio del periodo selezionato',
    'Puoi scegliere finestre temporali: 1D, 1W, 1M, 3M, 6M, YTD, 1Y, MAX',
    'Puoi passare dalla visualizzazione in % a quella in valore assoluto (€) con il toggle in alto a destra',
    'La linea "Cash" rappresenta il capitale non investito, utile come riferimento di costo opportunità',
  ],
  s4ImgAlt: 'DonkyCapital — Portfolio Performance Chart con BNB, Bitcoin, Algorand e Cash in visualizzazione 1M',
  s4ImgCaption: 'Il Portfolio Performance Chart mostra l\'andamento percentuale di ciascuna crypto nello stesso grafico. In questo esempio su 1 mese: BNB (verde), Bitcoin (arancione), Algorand (rosso) e Cash (viola) partono tutti da 0% e divergono nel tempo.',
  s4Tip: 'Usa la vista percentuale (%) per confrontare performance su periodi diversi, anche per asset con valori assoluti molto diversi. Utile per capire quale crypto ha reso di più in un dato periodo.',

  s5Title: 'Portafoglio completo: crypto + azioni + asset non quotati',
  s5Body: 'Il vero valore di DonkyCapital emerge quando tutte le classi di asset convivono nello stesso portafoglio. Puoi combinare liberamente:',
  s5Items: [
    ['Azioni ed ETF (Listed)', 'Strumenti quotati in borsa con prezzi in tempo reale: azioni, ETF, obbligazioni'],
    ['Criptovalute (Cryptocurrency)', 'Bitcoin, Ethereum e centinaia di altcoin con prezzi aggiornati automaticamente'],
    ['Asset Non Quotati (Unlisted)', 'Immobili, private equity, arte, startup con prezzi aggiornati manualmente'],
  ],
  s5Summary: 'Dashboard unica, metriche coerenti, visione completa del tuo patrimonio. Senza fogli Excel, senza app multiple, senza dati dispersi.',

  faqTitle: 'Domande Frequenti',
  faqItems: [
    {
      q: 'I prezzi delle crypto si aggiornano automaticamente su DonkyCapital?',
      a: 'Sì. A differenza degli asset non quotati, le criptovalute presenti nel catalogo hanno prezzi aggiornati automaticamente. Non devi fare nulla per mantenere la valutazione corrente delle tue posizioni.',
    },
    {
      q: 'Posso tracciare crypto su wallet decentralizzati (self-custody)?',
      a: 'Sì. Puoi registrare manualmente le transazioni di qualsiasi wallet. Se la crypto è nel catalogo, il prezzo si aggiorna automaticamente. Se hai una crypto molto piccola o non ancora listata, puoi usare la funzionalità "Unlisted Assets" con aggiornamento manuale del prezzo.',
    },
    {
      q: 'Come registro uno staking reward o un airdrop?',
      a: 'Usa il tipo di transazione "Dividend" per gli staking reward (equivale a un dividendo sulla crypto che stai tenendo). Per un airdrop, puoi usare "Buy Asset" con prezzo zero o un valore simbolico, oppure "Dividend" se preferisci trattarlo come reddito.',
    },
    {
      q: 'Posso avere più portafogli separati, uno solo per crypto?',
      a: 'Sì. DonkyCapital supporta portafogli multipli. Puoi creare un portafoglio dedicato solo alle crypto per analizzarne la performance in isolamento, e un portafoglio "totale" che include tutto il patrimonio.',
    },
    {
      q: 'Le crypto influenzano l\'allocazione del portafoglio?',
      a: 'Sì. Una volta inserite, le crypto contribuiscono al calcolo dell\'allocazione percentuale del portafoglio insieme a tutti gli altri asset. Puoi vedere esattamente quale percentuale del tuo patrimonio è in crypto.',
    },
  ],

  ctaTitle: 'Inizia a tracciare le tue crypto',
  ctaBody: 'Unisci crypto, azioni, ETF e asset non quotati in un unico portafoglio. Con DonkyCapital hai finalmente una visione completa e coerente di tutto il tuo patrimonio.',
  ctaButton: 'Prova DonkyCapital',
}

const en: CryptoGuideTranslations = {
  badge: 'DonkyCapital Guide',
  h1: 'How to Track',
  h1Highlight: 'Crypto in Your Portfolio',
  intro1: 'Bitcoin, Ethereum, altcoins: cryptocurrencies have become an increasingly common component of investor portfolios. DonkyCapital offers a dedicated "Cryptocurrency" tab to track your crypto positions just like stocks and ETFs, with real-time price updates and performance comparison.',
  intro2: 'In this guide we cover how to add crypto transactions, what to do if a coin isn\'t in the catalogue yet, and how to use the performance comparison chart to understand how each crypto contributes to your portfolio.',

  s1Title: 'Why track crypto alongside other assets',
  s1Body: 'Many investors manage crypto separately from the rest of their portfolio, losing the big picture. Integrating cryptocurrencies into DonkyCapital allows you to:',
  s1Points: [
    ['Real allocation', 'See how much weight crypto actually has in your total wealth, alongside stocks, ETFs and unlisted assets'],
    ['Comparative performance', 'Compare the performance of individual cryptos against each other and against other portfolio assets in the same chart'],
    ['Transaction history', 'Have a unified register of buys, sells and operations across all assets in one place'],
    ['Return calculation', 'Get consistent metrics (TWR, IRR, percentage return) across your entire portfolio, crypto included'],
  ],
  s1Note: 'DonkyCapital keeps crypto prices updated automatically: you don\'t need to do anything to have a current valuation of your positions.',

  s2Title: 'Step 1 — Add a crypto transaction',
  s2Intro: 'Adding a crypto to your portfolio is identical to adding any other asset: from the "Add Transaction" modal, select the "Cryptocurrency" tab and search for the coin by name or ticker.',
  s2Steps: [
    'Open the Transactions section of your portfolio and click "Add Transaction"',
    'Choose the transaction type (e.g. "Buy Asset" for a purchase)',
    'Select the "Cryptocurrency" tab',
    'Search for the crypto by name or ticker in the search field (e.g. "BTC", "ETH", "BNB")',
    'Select the crypto from the list — the catalogue includes hundreds of coins: AAVE, ALGO, ARB, AVAX, BNB and many more',
    'Enter quantity, purchase price and transaction date',
    'Click "CREATE" to confirm',
  ],
  s2ImgAlt: 'DonkyCapital — Add Transaction modal with Cryptocurrency tab and available crypto list',
  s2ImgCaption: 'The Cryptocurrency tab in the Add Transaction modal shows the full catalogue. You can search for any crypto by name or ticker: BTC, ETH, BNB, AAVE, ALGO, ARB, AVAX and hundreds more.',
  s2Tip: 'You can record any type of crypto transaction: buy, sell, staking reward (as Dividend), airdrop and transfers. Use the most appropriate type to keep your accounting accurate.',

  s3Title: 'Step 2 — Crypto not found? Request it',
  s3Body: 'DonkyCapital\'s crypto catalogue is extensive but not exhaustive. If you search for a crypto and don\'t find it in the list, the system shows a warning with the option to request its addition directly from the interface.',
  s3Steps: [
    'Type the crypto name or ticker in the search field',
    'If not found, the yellow banner appears: "Cryptocurrency not found. You can request its addition."',
    'Click the "REQUEST CRYPTOCURRENCY" button on the right of the banner',
    'Submit the request: the team will evaluate its addition to the catalogue',
  ],
  s3ImgAlt: 'DonkyCapital — crypto not found message with REQUEST CRYPTOCURRENCY button',
  s3ImgCaption: 'When a crypto isn\'t in the catalogue, DonkyCapital shows a banner with a button to request its addition. Alternatively, you can add it as an Unlisted Asset with manual price updates.',
  s3Note: 'In the meantime, if you need to track a crypto not yet in the catalogue, you can use the "Unlisted Assets" feature to add it manually with periodic price updates.',

  s4Title: 'Step 3 — View comparative performance',
  s4Body: 'Once your crypto positions are entered, the "Portfolio Performance Chart" widget becomes your main tool for analysis. The chart shows the percentage performance of each asset over time on the same axis, enabling instant comparisons.',
  s4Points: [
    'Each crypto (and each other portfolio asset) appears as a distinct coloured line',
    'The Y axis shows the percentage change from the start of the selected period',
    'You can choose time windows: 1D, 1W, 1M, 3M, 6M, YTD, 1Y, MAX',
    'Switch between % and absolute value (€) with the toggle in the top right',
    'The "Cash" line represents uninvested capital, useful as an opportunity cost reference',
  ],
  s4ImgAlt: 'DonkyCapital — Portfolio Performance Chart with BNB, Bitcoin, Algorand and Cash in 1M view',
  s4ImgCaption: 'The Portfolio Performance Chart shows the percentage performance of each crypto in the same chart. In this 1-month example: BNB (green), Bitcoin (orange), Algorand (red) and Cash (purple) all start at 0% and diverge over time.',
  s4Tip: 'Use the percentage (%) view to compare performance across different periods, even for assets with very different absolute values. Useful for identifying which crypto performed best in a given period.',

  s5Title: 'Complete portfolio: crypto + stocks + unlisted assets',
  s5Body: 'The real value of DonkyCapital emerges when all asset classes coexist in the same portfolio. You can freely combine:',
  s5Items: [
    ['Stocks & ETFs (Listed)', 'Exchange-listed instruments with real-time prices: stocks, ETFs, bonds'],
    ['Cryptocurrencies (Cryptocurrency)', 'Bitcoin, Ethereum and hundreds of altcoins with automatically updated prices'],
    ['Unlisted Assets (Unlisted)', 'Real estate, private equity, art, startups with manually updated prices'],
  ],
  s5Summary: 'Single dashboard, consistent metrics, complete view of your wealth. No spreadsheets, no multiple apps, no scattered data.',

  faqTitle: 'Frequently Asked Questions',
  faqItems: [
    {
      q: 'Are crypto prices updated automatically in DonkyCapital?',
      a: 'Yes. Unlike unlisted assets, cryptocurrencies in the catalogue have automatically updated prices. You don\'t need to do anything to maintain a current valuation of your positions.',
    },
    {
      q: 'Can I track crypto held in self-custody wallets?',
      a: 'Yes. You can manually record transactions from any wallet. If the crypto is in the catalogue, prices update automatically. If you hold a very small or unlisted coin, you can use the "Unlisted Assets" feature with manual price updates.',
    },
    {
      q: 'How do I record a staking reward or airdrop?',
      a: 'Use the "Dividend" transaction type for staking rewards (equivalent to a dividend on the crypto you\'re holding). For an airdrop, you can use "Buy Asset" with zero or a symbolic price, or "Dividend" if you prefer to treat it as income.',
    },
    {
      q: 'Can I have multiple portfolios, one just for crypto?',
      a: 'Yes. DonkyCapital supports multiple portfolios. You can create a dedicated crypto-only portfolio to analyse its performance in isolation, and a "total wealth" portfolio that includes everything.',
    },
    {
      q: 'Do crypto assets affect portfolio allocation?',
      a: 'Yes. Once entered, cryptos contribute to the portfolio\'s percentage allocation calculation alongside all other assets. You can see exactly what percentage of your wealth is in crypto.',
    },
  ],

  ctaTitle: 'Start tracking your crypto',
  ctaBody: 'Combine crypto, stocks, ETFs and unlisted assets in a single portfolio. With DonkyCapital you finally have a complete and consistent view of your entire wealth.',
  ctaButton: 'Try DonkyCapital',
}

const de: CryptoGuideTranslations = {
  badge: 'DonkyCapital Leitfaden',
  h1: 'Kryptowährungen im',
  h1Highlight: 'Portfolio verfolgen',
  intro1: 'Bitcoin, Ethereum, Altcoins: Kryptowährungen sind zu einem immer häufigeren Bestandteil von Anlegerportfolios geworden. DonkyCapital bietet einen eigenen Tab „Cryptocurrency", um deine Krypto-Positionen genau wie Aktien und ETFs zu verfolgen – mit automatisch aktualisierten Preisen und Performancevergleich.',
  intro2: 'In diesem Leitfaden zeigen wir, wie du Krypto-Transaktionen hinzufügst, was zu tun ist, wenn eine Coin noch nicht im Katalog ist, und wie du das Performance-Vergleichsdiagramm nutzt, um zu verstehen, wie jede Krypto zum Portfolio beiträgt.',

  s1Title: 'Warum Krypto zusammen mit anderen Assets verfolgen?',
  s1Body: 'Viele Anleger verwalten Kryptowährungen getrennt vom Rest ihres Portfolios und verlieren dabei den Überblick. Die Integration von Kryptowährungen in DonkyCapital ermöglicht es dir:',
  s1Points: [
    ['Reale Allokation', 'Sehen, wie viel Gewicht Krypto tatsächlich im Gesamtvermögen hat – zusammen mit Aktien, ETFs und nicht börsennotierten Assets'],
    ['Vergleichende Performance', 'Die Performance einzelner Kryptowährungen untereinander und gegenüber anderen Portfolio-Assets im selben Diagramm vergleichen'],
    ['Transaktionshistorie', 'Ein einheitliches Register aller Käufe, Verkäufe und Operationen über alle Assets an einem Ort führen'],
    ['Renditeberechnung', 'Konsistente Kennzahlen (TWR, IRR, prozentuale Rendite) für das gesamte Portfolio einschließlich Krypto erhalten'],
  ],
  s1Note: 'DonkyCapital aktualisiert Krypto-Preise automatisch: Du musst nichts tun, um eine aktuelle Bewertung deiner Positionen zu erhalten.',

  s2Title: 'Schritt 1 — Krypto-Transaktion hinzufügen',
  s2Intro: 'Eine Krypto zum Portfolio hinzuzufügen ist identisch mit dem Hinzufügen eines anderen Assets: Im Modal „Add Transaction" wählst du den Tab „Cryptocurrency" und suchst die Coin nach Name oder Ticker.',
  s2Steps: [
    'Öffne den Bereich Transaktionen deines Portfolios und klicke „Add Transaction"',
    'Wähle den Transaktionstyp (z.B. „Buy Asset" für einen Kauf)',
    'Wähle den Tab „Cryptocurrency"',
    'Suche die Krypto nach Name oder Ticker im Suchfeld (z.B. „BTC", „ETH", „BNB")',
    'Wähle die Krypto aus der Liste – der Katalog umfasst Hunderte von Coins: AAVE, ALGO, ARB, AVAX, BNB und viele mehr',
    'Menge, Kaufpreis und Transaktionsdatum eingeben',
    'Auf „CREATE" klicken, um zu bestätigen',
  ],
  s2ImgAlt: 'DonkyCapital — Add Transaction Modal mit Cryptocurrency Tab und verfügbaren Krypto-Liste',
  s2ImgCaption: 'Der Cryptocurrency-Tab im Add-Transaction-Modal zeigt den vollständigen Katalog. Du kannst jede Krypto nach Name oder Ticker suchen: BTC, ETH, BNB, AAVE, ALGO, ARB, AVAX und Hunderte mehr.',
  s2Tip: 'Du kannst jeden Krypto-Transaktionstyp erfassen: Kauf, Verkauf, Staking-Reward (als Dividend), Airdrop und Transfers. Verwende den passendsten Typ, um die Buchführung präzise zu halten.',

  s3Title: 'Schritt 2 — Krypto nicht gefunden? Anfrage stellen',
  s3Body: 'Der Krypto-Katalog von DonkyCapital ist umfangreich, aber nicht vollständig. Wenn du eine Krypto suchst und sie nicht in der Liste findest, zeigt das System eine Warnung mit der Möglichkeit, ihre Aufnahme direkt über die Oberfläche anzufordern.',
  s3Steps: [
    'Gib den Krypto-Namen oder Ticker in das Suchfeld ein',
    'Falls nicht gefunden, erscheint das gelbe Banner: „Cryptocurrency not found. You can request its addition."',
    'Klicke auf die Schaltfläche „REQUEST CRYPTOCURRENCY" rechts neben dem Banner',
    'Anfrage einreichen: Das Team prüft die Aufnahme in den Katalog',
  ],
  s3ImgAlt: 'DonkyCapital — Krypto nicht gefunden Meldung mit REQUEST CRYPTOCURRENCY Schaltfläche',
  s3ImgCaption: 'Wenn eine Krypto nicht im Katalog ist, zeigt DonkyCapital ein Banner mit einer Schaltfläche zum Anfordern der Aufnahme. Alternativ kann die Krypto als Unlisted Asset mit manueller Preisaktualisierung hinzugefügt werden.',
  s3Note: 'In der Zwischenzeit kannst du eine noch nicht im Katalog enthaltene Krypto über die Funktion „Unlisted Assets" manuell mit periodischer Preisaktualisierung verfolgen.',

  s4Title: 'Schritt 3 — Vergleichende Performance anzeigen',
  s4Body: 'Sobald deine Krypto-Positionen erfasst sind, wird das Widget „Portfolio Performance Chart" zu deinem Hauptwerkzeug für die Analyse. Das Diagramm zeigt die prozentuale Performance jedes Assets über die Zeit auf derselben Achse und ermöglicht sofortige Vergleiche.',
  s4Points: [
    'Jede Krypto (und jedes andere Portfolio-Asset) erscheint als eigene farbige Linie',
    'Die Y-Achse zeigt die prozentuale Veränderung ab Beginn des gewählten Zeitraums',
    'Wählbare Zeitfenster: 1D, 1W, 1M, 3M, 6M, YTD, 1Y, MAX',
    'Wechsel zwischen % und absolutem Wert (€) mit dem Toggle oben rechts',
    'Die „Cash"-Linie stellt nicht investiertes Kapital dar – nützlich als Opportunitätskosten-Referenz',
  ],
  s4ImgAlt: 'DonkyCapital — Portfolio Performance Chart mit BNB, Bitcoin, Algorand und Cash in 1M Ansicht',
  s4ImgCaption: 'Das Portfolio Performance Chart zeigt die prozentuale Performance jeder Krypto im selben Diagramm. In diesem 1-Monats-Beispiel: BNB (grün), Bitcoin (orange), Algorand (rot) und Cash (lila) starten alle bei 0% und divergieren über die Zeit.',
  s4Tip: 'Verwende die prozentuale (%) Ansicht, um Performances über verschiedene Zeiträume zu vergleichen, auch für Assets mit sehr unterschiedlichen Absolutwerten. Nützlich, um herauszufinden, welche Krypto in einem bestimmten Zeitraum am besten abgeschnitten hat.',

  s5Title: 'Vollständiges Portfolio: Krypto + Aktien + nicht börsennotierte Assets',
  s5Body: 'Der wahre Mehrwert von DonkyCapital zeigt sich, wenn alle Asset-Klassen im selben Portfolio vereint sind. Du kannst frei kombinieren:',
  s5Items: [
    ['Aktien & ETFs (Listed)', 'Börsennotierte Instrumente mit Echtzeit-Preisen: Aktien, ETFs, Anleihen'],
    ['Kryptowährungen (Cryptocurrency)', 'Bitcoin, Ethereum und Hunderte Altcoins mit automatisch aktualisierten Preisen'],
    ['Nicht börsennotierte Assets (Unlisted)', 'Immobilien, Private Equity, Kunst, Startups mit manuell aktualisierten Preisen'],
  ],
  s5Summary: 'Ein einziges Dashboard, konsistente Kennzahlen, vollständiger Überblick über dein Vermögen. Keine Tabellenkalkulationen, keine mehreren Apps, keine verstreuten Daten.',

  faqTitle: 'Häufig gestellte Fragen',
  faqItems: [
    {
      q: 'Werden Krypto-Preise in DonkyCapital automatisch aktualisiert?',
      a: 'Ja. Im Gegensatz zu nicht börsennotierten Assets haben Kryptowährungen im Katalog automatisch aktualisierte Preise. Du musst nichts tun, um eine aktuelle Bewertung deiner Positionen zu erhalten.',
    },
    {
      q: 'Kann ich Krypto aus Self-Custody-Wallets verfolgen?',
      a: 'Ja. Du kannst Transaktionen aus jedem Wallet manuell erfassen. Wenn die Krypto im Katalog ist, werden Preise automatisch aktualisiert. Bei einer sehr kleinen oder noch nicht gelisteten Coin kannst du die Funktion „Unlisted Assets" mit manueller Preisaktualisierung nutzen.',
    },
    {
      q: 'Wie erfasse ich einen Staking-Reward oder Airdrop?',
      a: 'Verwende den Transaktionstyp „Dividend" für Staking-Rewards (entspricht einer Dividende auf die gehaltene Krypto). Für einen Airdrop kannst du „Buy Asset" mit null oder einem symbolischen Preis verwenden, oder „Dividend", wenn du ihn als Einkommen behandeln möchtest.',
    },
    {
      q: 'Kann ich mehrere Portfolios haben, eines nur für Krypto?',
      a: 'Ja. DonkyCapital unterstützt mehrere Portfolios. Du kannst ein reines Krypto-Portfolio erstellen, um dessen Performance isoliert zu analysieren, und ein „Gesamtvermögen"-Portfolio, das alles umfasst.',
    },
    {
      q: 'Beeinflussen Krypto-Assets die Portfolio-Allokation?',
      a: 'Ja. Nach der Erfassung tragen Kryptowährungen zur prozentualen Allokationsberechnung des Portfolios bei – zusammen mit allen anderen Assets. Du kannst genau sehen, welcher Prozentsatz deines Vermögens in Krypto steckt.',
    },
  ],

  ctaTitle: 'Beginne mit dem Tracking deiner Kryptowährungen',
  ctaBody: 'Kombiniere Krypto, Aktien, ETFs und nicht börsennotierte Assets in einem einzigen Portfolio. Mit DonkyCapital hast du endlich eine vollständige und konsistente Sicht auf dein gesamtes Vermögen.',
  ctaButton: 'DonkyCapital ausprobieren',
}

const fr: CryptoGuideTranslations = {
  badge: 'Guide DonkyCapital',
  h1: 'Suivre les',
  h1Highlight: 'Cryptos dans son Portefeuille',
  intro1: 'Bitcoin, Ethereum, altcoins : les cryptomonnaies sont devenues une composante de plus en plus présente dans les portefeuilles des investisseurs. DonkyCapital offre un onglet dédié « Cryptocurrency » pour suivre vos positions crypto exactement comme des actions et des ETF, avec des prix mis à jour en temps réel et une comparaison des performances.',
  intro2: 'Dans ce guide, nous verrons comment ajouter des transactions crypto, que faire si une devise n\'est pas encore dans le catalogue, et comment utiliser le graphique de performance comparative pour comprendre comment chaque crypto contribue au portefeuille.',

  s1Title: 'Pourquoi suivre les cryptos avec les autres actifs ?',
  s1Body: 'De nombreux investisseurs gèrent les cryptos séparément du reste de leur portefeuille, perdant ainsi la vue d\'ensemble. Intégrer les cryptomonnaies dans DonkyCapital permet de :',
  s1Points: [
    ['Allocation réelle', 'Voir le poids réel des cryptos dans le patrimoine total, aux côtés des actions, ETF et actifs non cotés'],
    ['Performance comparative', 'Comparer la performance des cryptos individuelles entre elles et avec les autres actifs du portefeuille dans le même graphique'],
    ['Historique des transactions', 'Disposer d\'un registre unifié de tous les achats, ventes et opérations sur tous les actifs en un seul endroit'],
    ['Calcul du rendement', 'Obtenir des métriques cohérentes (TWR, IRR, rendement en %) sur l\'ensemble du portefeuille, cryptos incluses'],
  ],
  s1Note: 'DonkyCapital maintient les prix des cryptos à jour automatiquement : vous n\'avez rien à faire pour avoir une valorisation actuelle de vos positions.',

  s2Title: 'Étape 1 — Ajouter une transaction crypto',
  s2Intro: 'Ajouter une crypto au portefeuille est identique à l\'ajout de tout autre actif : depuis le modal « Add Transaction », sélectionnez l\'onglet « Cryptocurrency » et cherchez la devise par nom ou ticker.',
  s2Steps: [
    'Ouvrez la section Transactions de votre portefeuille et cliquez « Add Transaction »',
    'Choisissez le type de transaction (ex. « Buy Asset » pour un achat)',
    'Sélectionnez l\'onglet « Cryptocurrency »',
    'Recherchez la crypto par nom ou ticker dans le champ de recherche (ex. « BTC », « ETH », « BNB »)',
    'Sélectionnez la crypto dans la liste — le catalogue comprend des centaines de devises : AAVE, ALGO, ARB, AVAX, BNB et bien d\'autres',
    'Entrez la quantité, le prix d\'achat et la date de transaction',
    'Cliquez « CREATE » pour confirmer',
  ],
  s2ImgAlt: 'DonkyCapital — modal Add Transaction avec onglet Cryptocurrency et liste des cryptos disponibles',
  s2ImgCaption: "L'onglet Cryptocurrency du modal Add Transaction affiche le catalogue complet. Vous pouvez rechercher n'importe quelle crypto par nom ou ticker : BTC, ETH, BNB, AAVE, ALGO, ARB, AVAX et des centaines d'autres.",
  s2Tip: 'Vous pouvez enregistrer tout type de transaction crypto : achat, vente, récompense de staking (comme Dividend), airdrop et transferts. Utilisez le type le plus approprié pour maintenir une comptabilité précise.',

  s3Title: 'Étape 2 — Crypto introuvable ? Demandez son ajout',
  s3Body: 'Le catalogue crypto de DonkyCapital est vaste mais non exhaustif. Si vous cherchez une crypto et ne la trouvez pas dans la liste, le système affiche un avertissement avec la possibilité d\'en demander l\'ajout directement depuis l\'interface.',
  s3Steps: [
    'Tapez le nom ou le ticker de la crypto dans le champ de recherche',
    'Si introuvable, la bannière jaune apparaît : « Cryptocurrency not found. You can request its addition. »',
    'Cliquez sur le bouton « REQUEST CRYPTOCURRENCY » à droite de la bannière',
    'Soumettez la demande : l\'équipe évaluera son ajout au catalogue',
  ],
  s3ImgAlt: 'DonkyCapital — message crypto introuvable avec bouton REQUEST CRYPTOCURRENCY',
  s3ImgCaption: "Quand une crypto n'est pas dans le catalogue, DonkyCapital affiche une bannière avec un bouton pour demander son ajout. Vous pouvez aussi l'ajouter comme actif non coté avec mise à jour manuelle du prix.",
  s3Note: 'En attendant, si vous avez besoin de suivre une crypto pas encore dans le catalogue, vous pouvez utiliser la fonctionnalité « Unlisted Assets » pour l\'ajouter manuellement avec des mises à jour périodiques du prix.',

  s4Title: 'Étape 3 — Visualiser la performance comparative',
  s4Body: 'Une fois les positions crypto saisies, le widget « Portfolio Performance Chart » devient votre principal outil d\'analyse. Le graphique affiche la performance en pourcentage de chaque actif dans le temps sur le même axe, permettant des comparaisons instantanées.',
  s4Points: [
    'Chaque crypto (et chaque autre actif du portefeuille) apparaît comme une ligne colorée distincte',
    "L'axe Y montre la variation en pourcentage depuis le début de la période sélectionnée",
    'Vous pouvez choisir des fenêtres temporelles : 1D, 1W, 1M, 3M, 6M, YTD, 1Y, MAX',
    'Basculez entre % et valeur absolue (€) avec le bouton en haut à droite',
    "La ligne « Cash » représente le capital non investi, utile comme référence de coût d'opportunité",
  ],
  s4ImgAlt: 'DonkyCapital — Portfolio Performance Chart avec BNB, Bitcoin, Algorand et Cash en vue 1M',
  s4ImgCaption: 'Le Portfolio Performance Chart montre la performance en pourcentage de chaque crypto dans le même graphique. Dans cet exemple sur 1 mois : BNB (vert), Bitcoin (orange), Algorand (rouge) et Cash (violet) partent tous de 0% et divergent dans le temps.',
  s4Tip: "Utilisez la vue en pourcentage (%) pour comparer les performances sur différentes périodes, même pour des actifs avec des valeurs absolues très différentes. Utile pour identifier quelle crypto a le mieux performé sur une période donnée.",

  s5Title: 'Portefeuille complet : cryptos + actions + actifs non cotés',
  s5Body: 'La vraie valeur de DonkyCapital apparaît quand toutes les classes d\'actifs coexistent dans le même portefeuille. Vous pouvez combiner librement :',
  s5Items: [
    ['Actions & ETF (Listed)', 'Instruments cotés en bourse avec prix en temps réel : actions, ETF, obligations'],
    ['Cryptomonnaies (Cryptocurrency)', 'Bitcoin, Ethereum et des centaines d\'altcoins avec des prix mis à jour automatiquement'],
    ['Actifs Non Cotés (Unlisted)', 'Immobilier, private equity, art, startups avec des prix mis à jour manuellement'],
  ],
  s5Summary: 'Un tableau de bord unique, des métriques cohérentes, une vision complète de votre patrimoine. Sans tableurs, sans plusieurs applications, sans données dispersées.',

  faqTitle: 'Questions Fréquentes',
  faqItems: [
    {
      q: 'Les prix des cryptos sont-ils mis à jour automatiquement dans DonkyCapital ?',
      a: "Oui. Contrairement aux actifs non cotés, les cryptomonnaies du catalogue ont des prix mis à jour automatiquement. Vous n'avez rien à faire pour maintenir une valorisation actuelle de vos positions.",
    },
    {
      q: 'Puis-je suivre des cryptos en self-custody (wallet décentralisé) ?',
      a: "Oui. Vous pouvez enregistrer manuellement les transactions de n'importe quel wallet. Si la crypto est dans le catalogue, les prix se mettent à jour automatiquement. Pour une très petite coin ou non encore listée, vous pouvez utiliser la fonctionnalité « Unlisted Assets » avec mise à jour manuelle du prix.",
    },
    {
      q: 'Comment enregistrer une récompense de staking ou un airdrop ?',
      a: 'Utilisez le type de transaction « Dividend » pour les récompenses de staking (équivalent à un dividende sur la crypto que vous détenez). Pour un airdrop, vous pouvez utiliser « Buy Asset » avec un prix nul ou symbolique, ou « Dividend » si vous préférez le traiter comme un revenu.',
    },
    {
      q: 'Puis-je avoir plusieurs portefeuilles, un uniquement pour les cryptos ?',
      a: 'Oui. DonkyCapital supporte plusieurs portefeuilles. Vous pouvez créer un portefeuille dédié aux cryptos pour analyser leur performance en isolation, et un portefeuille « patrimoine total » qui inclut tout.',
    },
    {
      q: "Les cryptos influencent-elles l'allocation du portefeuille ?",
      a: "Oui. Une fois saisies, les cryptos contribuent au calcul de l'allocation en pourcentage du portefeuille aux côtés de tous les autres actifs. Vous pouvez voir exactement quel pourcentage de votre patrimoine est en crypto.",
    },
  ],

  ctaTitle: 'Commencez à suivre vos cryptos',
  ctaBody: 'Combinez cryptos, actions, ETF et actifs non cotés dans un seul portefeuille. Avec DonkyCapital, ayez enfin une vision complète et cohérente de tout votre patrimoine.',
  ctaButton: 'Essayer DonkyCapital',
}

const es: CryptoGuideTranslations = {
  badge: 'Guía DonkyCapital',
  h1: 'Cómo Monitorizar las',
  h1Highlight: 'Crypto en tu Cartera',
  intro1: 'Bitcoin, Ethereum, altcoins: las criptomonedas se han convertido en un componente cada vez más habitual en las carteras de los inversores. DonkyCapital ofrece un tab dedicado "Cryptocurrency" para seguir tus posiciones crypto exactamente igual que acciones y ETFs, con precios actualizados en tiempo real y comparación de rendimientos.',
  intro2: 'En esta guía veremos cómo añadir transacciones crypto, qué hacer si una moneda todavía no está en el catálogo, y cómo usar el gráfico de rendimiento comparativo para entender cómo cada crypto contribuye a la cartera.',

  s1Title: '¿Por qué monitorizar las crypto junto a otros activos?',
  s1Body: 'Muchos inversores gestionan las criptomonedas de forma separada al resto de su cartera, perdiendo la visión de conjunto. Integrar las criptomonedas en DonkyCapital te permite:',
  s1Points: [
    ['Asignación real', 'Ver cuánto peso tienen realmente las crypto en el patrimonio total, junto a acciones, ETFs y activos no cotizados'],
    ['Rentabilidad comparada', 'Comparar el rendimiento de cada cripto entre sí y con los demás activos de la cartera en el mismo gráfico'],
    ['Historial de transacciones', 'Disponer de un registro unificado de compras, ventas y operaciones en todos los activos en un solo lugar'],
    ['Cálculo del rendimiento', 'Obtener métricas coherentes (TWR, IRR, rentabilidad en %) sobre toda la cartera, criptos incluidas'],
  ],
  s1Note: 'DonkyCapital mantiene los precios de las criptos actualizados automáticamente: no tienes que hacer nada para tener una valoración actual de tus posiciones.',

  s2Title: 'Paso 1 — Añade una transacción crypto',
  s2Intro: 'Añadir una crypto a la cartera es idéntico a añadir cualquier otro activo: desde el modal "Add Transaction" selecciona el tab "Cryptocurrency" y busca la moneda por nombre o ticker.',
  s2Steps: [
    'Abre la sección Transactions de tu cartera y haz clic en "Add Transaction"',
    'Elige el tipo de transacción (ej. "Buy Asset" para una compra)',
    'Selecciona el tab "Cryptocurrency"',
    'Busca la crypto por nombre o ticker en el campo de búsqueda (ej. "BTC", "ETH", "BNB")',
    'Selecciona la crypto de la lista — el catálogo incluye cientos de monedas: AAVE, ALGO, ARB, AVAX, BNB y muchas más',
    'Introduce cantidad, precio de compra y fecha de la transacción',
    'Haz clic en "CREATE" para confirmar',
  ],
  s2ImgAlt: 'DonkyCapital — modal Add Transaction con tab Cryptocurrency y lista de criptos disponibles',
  s2ImgCaption: 'El tab Cryptocurrency del modal Add Transaction muestra el catálogo completo. Puedes buscar cualquier cripto por nombre o ticker: BTC, ETH, BNB, AAVE, ALGO, ARB, AVAX y cientos más.',
  s2Tip: 'Puedes registrar cualquier tipo de transacción crypto: compra, venta, staking reward (como Dividend), airdrop y transferencias. Usa el tipo más apropiado para mantener la contabilidad precisa.',

  s3Title: 'Paso 2 — ¿Crypto no encontrada? Solicita su añadido',
  s3Body: 'El catálogo crypto de DonkyCapital es amplio pero no exhaustivo. Si buscas una cripto y no la encuentras en la lista, el sistema muestra un aviso con la posibilidad de solicitar su incorporación directamente desde la interfaz.',
  s3Steps: [
    'Escribe el nombre o ticker de la cripto en el campo de búsqueda',
    'Si no se encuentra, aparece el banner amarillo: "Cryptocurrency not found. You can request its addition."',
    'Haz clic en el botón "REQUEST CRYPTOCURRENCY" a la derecha del banner',
    'Envía la solicitud: el equipo evaluará su incorporación al catálogo',
  ],
  s3ImgAlt: 'DonkyCapital — mensaje de crypto no encontrada con botón REQUEST CRYPTOCURRENCY',
  s3ImgCaption: 'Cuando una cripto no está en el catálogo, DonkyCapital muestra un banner con un botón para solicitar su incorporación. También puedes añadirla como Unlisted Asset con actualización manual del precio.',
  s3Note: 'Mientras tanto, si necesitas monitorizar una cripto que todavía no está en el catálogo, puedes usar la funcionalidad "Unlisted Assets" para añadirla manualmente con actualizaciones periódicas del precio.',

  s4Title: 'Paso 3 — Visualiza el rendimiento comparativo',
  s4Body: 'Una vez introducidas las posiciones crypto, el widget "Portfolio Performance Chart" se convierte en tu herramienta principal de análisis. El gráfico muestra la rentabilidad en porcentaje de cada activo en el tiempo sobre el mismo eje, permitiendo comparaciones instantáneas.',
  s4Points: [
    'Cada cripto (y cada otro activo de la cartera) aparece como una línea de color distinta',
    'El eje Y muestra la variación porcentual desde el inicio del período seleccionado',
    'Puedes elegir ventanas temporales: 1D, 1W, 1M, 3M, 6M, YTD, 1Y, MAX',
    'Cambia entre % y valor absoluto (€) con el toggle en la parte superior derecha',
    'La línea "Cash" representa el capital no invertido, útil como referencia de coste de oportunidad',
  ],
  s4ImgAlt: 'DonkyCapital — Portfolio Performance Chart con BNB, Bitcoin, Algorand y Cash en vista 1M',
  s4ImgCaption: 'El Portfolio Performance Chart muestra la rentabilidad porcentual de cada cripto en el mismo gráfico. En este ejemplo de 1 mes: BNB (verde), Bitcoin (naranja), Algorand (rojo) y Cash (morado) parten todos de 0% y divergen con el tiempo.',
  s4Tip: 'Usa la vista en porcentaje (%) para comparar rendimientos en distintos períodos, incluso para activos con valores absolutos muy diferentes. Útil para identificar qué cripto ha rendido más en un período concreto.',

  s5Title: 'Cartera completa: crypto + acciones + activos no cotizados',
  s5Body: 'El verdadero valor de DonkyCapital emerge cuando todas las clases de activos conviven en la misma cartera. Puedes combinar libremente:',
  s5Items: [
    ['Acciones y ETFs (Listed)', 'Instrumentos cotizados en bolsa con precios en tiempo real: acciones, ETFs, bonos'],
    ['Criptomonedas (Cryptocurrency)', 'Bitcoin, Ethereum y cientos de altcoins con precios actualizados automáticamente'],
    ['Activos No Cotizados (Unlisted)', 'Inmuebles, private equity, arte, startups con precios actualizados manualmente'],
  ],
  s5Summary: 'Un único dashboard, métricas coherentes, visión completa de tu patrimonio. Sin hojas de cálculo, sin múltiples apps, sin datos dispersos.',

  faqTitle: 'Preguntas Frecuentes',
  faqItems: [
    {
      q: '¿Los precios de las criptos se actualizan automáticamente en DonkyCapital?',
      a: 'Sí. A diferencia de los activos no cotizados, las criptomonedas del catálogo tienen precios actualizados automáticamente. No tienes que hacer nada para mantener una valoración actual de tus posiciones.',
    },
    {
      q: '¿Puedo monitorizar criptos en wallets self-custody (descentralizados)?',
      a: 'Sí. Puedes registrar manualmente las transacciones de cualquier wallet. Si la cripto está en el catálogo, los precios se actualizan automáticamente. Si tienes una cripto muy pequeña o todavía no listada, puedes usar la funcionalidad "Unlisted Assets" con actualización manual del precio.',
    },
    {
      q: '¿Cómo registro un staking reward o un airdrop?',
      a: 'Usa el tipo de transacción "Dividend" para los staking rewards (equivalente a un dividendo sobre la cripto que tienes). Para un airdrop, puedes usar "Buy Asset" con precio cero o simbólico, o "Dividend" si prefieres tratarlo como ingreso.',
    },
    {
      q: '¿Puedo tener varias carteras, una solo para crypto?',
      a: 'Sí. DonkyCapital soporta múltiples carteras. Puedes crear una cartera dedicada solo a crypto para analizar su rendimiento de forma aislada, y una cartera de "patrimonio total" que incluya todo.',
    },
    {
      q: '¿Los activos crypto afectan la asignación de la cartera?',
      a: 'Sí. Una vez introducidas, las criptos contribuyen al cálculo de la asignación porcentual de la cartera junto a todos los demás activos. Puedes ver exactamente qué porcentaje de tu patrimonio está en criptomonedas.',
    },
  ],

  ctaTitle: 'Empieza a monitorizar tus criptos',
  ctaBody: 'Combina criptos, acciones, ETFs y activos no cotizados en una única cartera. Con DonkyCapital tendrás por fin una visión completa y coherente de todo tu patrimonio.',
  ctaButton: 'Probar DonkyCapital',
}

export const cryptoGuideTranslations: Record<Locale, CryptoGuideTranslations> = {
  it,
  en,
  de,
  fr,
  es,
}
