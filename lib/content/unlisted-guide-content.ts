import type { Locale } from '@/lib/i18n/config'

export interface UnlistedGuideTranslations {
  badge: string
  h1: string
  h1Highlight: string
  intro1: string
  intro2: string
  // Section 1 — What are unlisted assets
  s1Title: string
  s1Body: string
  s1Examples: readonly [string, string][] // [label, description]
  s1Note: string
  // Section 2 — Create the unlisted asset
  s2Title: string
  s2Intro: string
  s2Steps: readonly string[]
  s2ImgAlt: string
  s2ImgCaption: string
  s2Tip: string
  // Section 3 — Record the buy transaction
  s3Title: string
  s3Body: string
  s3Steps: readonly string[]
  s3ImgAlt: string
  s3ImgCaption: string
  // Section 4 — Update price over time
  s4Title: string
  s4Body: string
  s4Steps: readonly string[]
  s4ImgAlt: string
  s4ImgCaption: string
  s4Tip: string
  // Section 5 — Record income / dividends
  s5Title: string
  s5Body: string
  s5Steps: readonly string[]
  s5ImgAlt: string
  s5ImgCaption: string
  s5Examples: readonly string[]
  // Section 6 — Full picture
  s6Title: string
  s6Body: string
  s6ImgTxAlt: string
  s6ImgTxCaption: string
  s6ImgTrendAlt: string
  s6ImgTrendCaption: string
  s6Summary: string
  // FAQ
  faqTitle: string
  faqItems: readonly { q: string; a: string }[]
  // CTA
  ctaTitle: string
  ctaBody: string
  ctaButton: string
}

const it: UnlistedGuideTranslations = {
  badge: 'Guida DonkyCapital',
  h1: 'Come Monitorare',
  h1Highlight: 'Asset Non Quotati nel Portafoglio',
  intro1: 'Immobili, private equity, arte, oggetti da collezione, quote di startup, prestiti P2P: una parte importante del tuo patrimonio potrebbe non essere quotata in borsa. DonkyCapital ti permette di censire e monitorare questi asset esattamente come faresti con azioni ed ETF, avendo così una visione completa e reale della tua ricchezza.',
  intro2: 'In questa guida vediamo passo dopo passo come aggiungere un asset non quotato, registrare transazioni, aggiornare il prezzo nel tempo e contabilizzare i proventi.',

  s1Title: 'Cosa sono gli asset non quotati?',
  s1Body: 'Gli asset non quotati (unlisted assets) sono investimenti che non hanno un prezzo di mercato aggiornato in tempo reale. A differenza di azioni ed ETF, il loro valore deve essere stimato e aggiornato manualmente dall\'investitore. In DonkyCapital sono asset privati: solo tu li puoi vedere.',
  s1Examples: [
    ['Immobili', 'Prima casa, case vacanza, immobili a reddito, box, terreni'],
    ['Private Equity', 'Quote di startup, partecipazioni in società non quotate, fondi di PE'],
    ['Arte e Oggetti da Collezione', 'Quadri, sculture, orologi di lusso, vini pregiati, auto d\'epoca'],
    ['Crediti e Prestiti', 'Prestiti P2P, crediti verso terzi, obbligazioni private'],
    ['Altro', 'Criptovalute custodite in wallet privati, metalli fisici, royalties'],
  ],
  s1Note: 'Aggiungere asset non quotati al portafoglio ti permette di calcolare la performance e l\'allocazione del tuo patrimonio complessivo, non solo della parte investita in borsa.',

  s2Title: 'Step 1 — Crea l\'asset non quotato',
  s2Intro: 'Prima di tutto devi censire l\'asset nella sezione "My Unlisted Assets". Ogni asset ha un nome, un simbolo personalizzato, una valuta e — facoltativamente — un codice ISIN.',
  s2Steps: [
    'Vai su "My Unlisted Assets" dal menu principale',
    'Clicca su "+ ADD NEW ASSET"',
    'Inserisci il nome (es. "RentHouse"), un simbolo univoco (es. "HOUSE001") e la valuta (es. EUR)',
    'Il campo ISIN è opzionale: usalo se l\'asset ne ha uno, altrimenti lascialo vuoto',
    'Conferma: l\'asset appare nella lista e potrà essere usato nelle transazioni',
  ],
  s2ImgAlt: 'DonkyCapital — pagina My Unlisted Assets con asset RentHouse',
  s2ImgCaption: 'La sezione My Unlisted Assets mostra tutti gli asset privati che hai creato, con prezzo aggiornato e data dell\'ultimo aggiornamento.',
  s2Tip: 'Scegli un simbolo breve e riconoscibile (es. HOUSE001, STARTUPABC, PAINTING01). Lo userai per filtrare le transazioni.',

  s3Title: 'Step 2 — Registra l\'acquisto',
  s3Body: 'Una volta creato l\'asset, registra la transazione di acquisto come faresti per un qualsiasi strumento finanziario. Nel modal "Add Transaction" seleziona il tab "Unlisted" per vedere gli asset privati che hai creato.',
  s3Steps: [
    'Clicca su "Add Transaction" dal portafoglio dove vuoi inserire l\'asset',
    'Scegli il tipo "Buy Asset"',
    'Seleziona il tab "Unlisted"',
    'Cerca e seleziona l\'asset dall\'elenco (es. "RentHouse (HOUSE001)")',
    'Inserisci la quantità (es. 1 per un immobile), il prezzo di acquisto e la data della transazione',
    'Aggiungi commissioni o spese di transazione se pertinenti',
    'Clicca "CREATE" per confermare',
  ],
  s3ImgAlt: 'DonkyCapital — modal Add Transaction con tab Unlisted selezionato',
  s3ImgCaption: 'Nel modal di aggiunta transazione, il tab "Unlisted" permette di selezionare gli asset non quotati che hai creato. Puoi anche creare un nuovo asset al volo con "+ CREATE NEW".',

  s4Title: 'Step 3 — Aggiorna il prezzo nel tempo',
  s4Body: 'Gli asset non quotati non hanno un feed di prezzi automatico: sei tu a decidere quando e come aggiornare la valutazione. DonkyCapital mantiene uno storico completo di ogni aggiornamento di prezzo, così puoi vedere l\'evoluzione del valore nel tempo.',
  s4Steps: [
    'Dalla lista "My Unlisted Assets", clicca sull\'icona dell\'orologio (storico prezzi) accanto all\'asset',
    'Si apre il pannello "Price History" con tutti gli aggiornamenti precedenti',
    'Clicca "ADD NEW PRICE" per inserire la valutazione aggiornata e la data',
    'Il nuovo prezzo aggiorna automaticamente il valore di mercato del tuo portafoglio',
  ],
  s4ImgAlt: 'DonkyCapital — pannello Price History per l\'asset RentHouse',
  s4ImgCaption: 'Il pannello Price History mostra l\'evoluzione del prezzo nel tempo. Aggiorna la valutazione ogni volta che hai una nuova stima (perizia, offerta ricevuta, benchmark di mercato).',
  s4Tip: 'Con quale frequenza aggiornare? Per immobili: trimestrale o semestrale. Per arte/collezioni: annuale o dopo eventi significativi (aste, vendite comparabili). Per startup: dopo ogni round di finanziamento.',

  s5Title: 'Step 4 — Registra i proventi (affitti, dividendi, interessi)',
  s5Body: 'Un asset non quotato può generare reddito periodico: canoni di affitto, dividendi da partecipazioni, interessi su prestiti. DonkyCapital ti permette di registrare questi proventi come transazioni di tipo "Dividend", mantenendo la contabilità completa.',
  s5Steps: [
    'Aggiungi una nuova transazione nel portafoglio',
    'Seleziona il tipo "Dividend"',
    'Scegli l\'asset non quotato dal menu (es. "HOUSE001 - RentHouse")',
    'Inserisci la quantità di quote che hanno generato il provento (es. 1)',
    'Inserisci il provento per unità (es. 1000 per un canone mensile di €1.000)',
    'Il totale viene calcolato automaticamente: quantità × provento per unità',
    'Inserisci la data e conferma',
  ],
  s5ImgAlt: 'DonkyCapital — modal Add Transaction con tipo Dividend per asset non quotato',
  s5ImgCaption: 'Il tipo di transazione "Dividend" permette di registrare qualsiasi provento periodico: affitti, dividendi da startup, interessi su prestiti privati. Il totale si calcola automaticamente.',
  s5Examples: [
    'Affitto mensile da immobile: registra ogni canone come Dividend',
    'Dividendo da partecipazione societaria: una transazione per ogni distribuzione',
    'Interessi P2P: registra mensilmente o trimestralmente',
    'Royalties: una transazione per ogni pagamento ricevuto',
  ],

  s6Title: 'Visione d\'insieme: transazioni e andamento del portafoglio',
  s6Body: 'Una volta inserite le transazioni, DonkyCapital integra gli asset non quotati in tutta la piattaforma esattamente come quelli quotati. La sezione Transactions mostra il registro contabile completo, mentre il grafico Portfolios Trend visualizza l\'evoluzione del valore totale nel tempo.',
  s6ImgTxAlt: 'DonkyCapital — lista transazioni portafoglio con asset non quotato RentHouse',
  s6ImgTxCaption: 'La sezione Transactions mostra in ordine cronologico tutte le operazioni: il deposito di capitale, l\'acquisto dell\'immobile e i canoni di affitto incassati.',
  s6ImgTrendAlt: 'DonkyCapital — grafico Portfolios Trend con asset non quotato incluso',
  s6ImgTrendCaption: 'Il grafico Portfolios Trend include il valore degli asset non quotati: i salti nel grafico corrispondono all\'acquisto dell\'immobile (dicembre) e agli aggiornamenti di prezzo successivi.',
  s6Summary: 'Il risultato è un portafoglio davvero completo: azioni, ETF, crypto e asset non quotati convivono in un\'unica dashboard con metriche di performance coerenti.',

  faqTitle: 'Domande Frequenti',
  faqItems: [
    {
      q: 'Posso avere asset non quotati in più portafogli?',
      a: 'Sì. Puoi usare lo stesso asset non quotato in portafogli diversi. Gli asset creati in "My Unlisted Assets" sono disponibili per tutti i tuoi portafogli.',
    },
    {
      q: 'Come viene calcolata la performance di un asset non quotato?',
      a: 'DonkyCapital calcola la performance usando il prezzo di acquisto registrato nella transazione e il prezzo più recente inserito nello storico prezzi. Anche i proventi (affitti, dividendi) vengono inclusi nel calcolo del rendimento totale.',
    },
    {
      q: 'Devo aggiornare il prezzo ad ogni variazione?',
      a: 'No. Puoi aggiornare il prezzo con la frequenza che preferisci. Il valore nel portafoglio rimarrà invariato finché non inserisci un nuovo prezzo. Per asset illiquidi, un aggiornamento trimestrale o annuale è spesso sufficiente.',
    },
    {
      q: 'Posso importare uno storico di prezzi passati?',
      a: 'Sì. Puoi aggiungere più date nel pannello Price History, inserendo i prezzi storici uno per uno. Questo ti permette di ricostruire l\'andamento del valore dell\'asset nel tempo.',
    },
    {
      q: 'Gli asset non quotati influenzano l\'allocazione del portafoglio?',
      a: 'Sì. Una volta inseriti con un prezzo aggiornato, gli asset non quotati sono inclusi nel calcolo dell\'allocazione percentuale, consentendo una vista reale della composizione del patrimonio.',
    },
  ],

  ctaTitle: 'Inizia a monitorare il tuo patrimonio completo',
  ctaBody: 'Non lasciare fuori dal radar immobili, partecipazioni e investimenti alternativi. Con DonkyCapital puoi avere finalmente una visione a 360° del tuo portafoglio.',
  ctaButton: 'Prova DonkyCapital',
}

const en: UnlistedGuideTranslations = {
  badge: 'DonkyCapital Guide',
  h1: 'How to Track',
  h1Highlight: 'Unlisted Assets in Your Portfolio',
  intro1: 'Real estate, private equity, art, collectibles, startup shares, P2P loans: a significant part of your wealth may not be listed on any exchange. DonkyCapital lets you register and monitor these assets just like stocks and ETFs, giving you a complete and accurate picture of your total net worth.',
  intro2: 'In this guide, we walk through step by step how to add an unlisted asset, record transactions, update its price over time, and track income generated.',

  s1Title: 'What are unlisted assets?',
  s1Body: 'Unlisted assets are investments that do not have a real-time market price. Unlike stocks and ETFs, their value must be estimated and updated manually by the investor. In DonkyCapital, they are private assets: only you can see them.',
  s1Examples: [
    ['Real Estate', 'Primary residence, vacation homes, rental properties, parking spaces, land'],
    ['Private Equity', 'Startup shares, stakes in unlisted companies, PE fund units'],
    ['Art & Collectibles', 'Paintings, sculptures, luxury watches, fine wines, classic cars'],
    ['Loans & Credits', 'P2P loans, private bonds, receivables'],
    ['Other', 'Self-custodied crypto, physical precious metals, royalties'],
  ],
  s1Note: 'Adding unlisted assets to your portfolio lets you calculate performance and allocation of your total wealth — not just the exchange-traded portion.',

  s2Title: 'Step 1 — Create the unlisted asset',
  s2Intro: 'First, you need to register the asset in the "My Unlisted Assets" section. Each asset has a name, a custom symbol, a currency and — optionally — an ISIN code.',
  s2Steps: [
    'Go to "My Unlisted Assets" from the main menu',
    'Click "+ ADD NEW ASSET"',
    'Enter a name (e.g. "RentHouse"), a unique symbol (e.g. "HOUSE001") and a currency (e.g. EUR)',
    'The ISIN field is optional: use it if the asset has one, otherwise leave it blank',
    'Confirm: the asset appears in the list and can be used in transactions',
  ],
  s2ImgAlt: 'DonkyCapital — My Unlisted Assets page with RentHouse asset',
  s2ImgCaption: 'The My Unlisted Assets section shows all your private assets with their latest price and last update date.',
  s2Tip: 'Choose a short, recognisable symbol (e.g. HOUSE001, STARTUPABC, PAINTING01). You\'ll use it to filter transactions later.',

  s3Title: 'Step 2 — Record the purchase',
  s3Body: 'Once the asset is created, record the buy transaction just as you would for any financial instrument. In the "Add Transaction" modal, select the "Unlisted" tab to see your private assets.',
  s3Steps: [
    'Click "Add Transaction" from the portfolio where you want to add the asset',
    'Select type "Buy Asset"',
    'Select the "Unlisted" tab',
    'Search and select the asset from the list (e.g. "RentHouse (HOUSE001)")',
    'Enter the quantity (e.g. 1 for a property), the purchase price and the transaction date',
    'Add commissions or transaction costs if applicable',
    'Click "CREATE" to confirm',
  ],
  s3ImgAlt: 'DonkyCapital — Add Transaction modal with Unlisted tab selected',
  s3ImgCaption: 'In the Add Transaction modal, the "Unlisted" tab lets you select your private assets. You can also create a new asset on the fly with "+ CREATE NEW".',

  s4Title: 'Step 3 — Update the price over time',
  s4Body: 'Unlisted assets do not have an automatic price feed: you decide when and how to update the valuation. DonkyCapital keeps a full history of every price update, so you can track how the value evolves over time.',
  s4Steps: [
    'From the "My Unlisted Assets" list, click the clock icon (price history) next to the asset',
    'The "Price History" panel opens showing all previous updates',
    'Click "ADD NEW PRICE" to enter the updated valuation and date',
    'The new price automatically updates the market value of your portfolio',
  ],
  s4ImgAlt: 'DonkyCapital — Price History panel for RentHouse asset',
  s4ImgCaption: 'The Price History panel shows the evolution of the price over time. Update the valuation whenever you have a new estimate (appraisal, received offer, market benchmark).',
  s4Tip: 'How often to update? For real estate: quarterly or semi-annually. For art/collectibles: annually or after significant events (auctions, comparable sales). For startups: after each funding round.',

  s5Title: 'Step 4 — Record income (rent, dividends, interest)',
  s5Body: 'An unlisted asset can generate periodic income: rental income, dividends from holdings, interest on loans. DonkyCapital lets you record this income as "Dividend" transactions, keeping complete accounting records.',
  s5Steps: [
    'Add a new transaction to your portfolio',
    'Select type "Dividend"',
    'Choose the unlisted asset from the menu (e.g. "HOUSE001 - RentHouse")',
    'Enter the quantity of units that generated the income (e.g. 1)',
    'Enter the income per unit (e.g. 1000 for a €1,000 monthly rent)',
    'The total is auto-calculated: quantity × income per unit',
    'Enter the date and confirm',
  ],
  s5ImgAlt: 'DonkyCapital — Add Transaction modal with Dividend type for unlisted asset',
  s5ImgCaption: 'The "Dividend" transaction type lets you record any periodic income: rent, startup dividends, P2P interest. The total is calculated automatically.',
  s5Examples: [
    'Monthly rent from property: record each payment as a Dividend',
    'Dividend from company stake: one transaction per distribution',
    'P2P interest: record monthly or quarterly',
    'Royalties: one transaction per payment received',
  ],

  s6Title: 'The full picture: transactions and portfolio trend',
  s6Body: 'Once transactions are entered, DonkyCapital integrates unlisted assets across the entire platform, exactly like listed ones. The Transactions section shows the complete accounting ledger, while the Portfolios Trend chart visualises total value over time.',
  s6ImgTxAlt: 'DonkyCapital — transaction list with unlisted asset RentHouse',
  s6ImgTxCaption: 'The Transactions section shows all operations in chronological order: the cash deposit, the property purchase and the rent collected.',
  s6ImgTrendAlt: 'DonkyCapital — Portfolios Trend chart with unlisted asset included',
  s6ImgTrendCaption: 'The Portfolios Trend chart includes the value of unlisted assets: the jumps in the chart correspond to the property purchase (December) and subsequent price updates.',
  s6Summary: 'The result is a truly complete portfolio: stocks, ETFs, crypto and unlisted assets all live in a single dashboard with consistent performance metrics.',

  faqTitle: 'Frequently Asked Questions',
  faqItems: [
    {
      q: 'Can I use unlisted assets across multiple portfolios?',
      a: 'Yes. You can use the same unlisted asset in different portfolios. Assets created in "My Unlisted Assets" are available to all your portfolios.',
    },
    {
      q: 'How is performance calculated for unlisted assets?',
      a: 'DonkyCapital calculates performance using the purchase price recorded in the transaction and the most recent price entered in the price history. Income (rent, dividends) is also included in the total return calculation.',
    },
    {
      q: 'Do I need to update the price every time it changes?',
      a: 'No. You can update the price as often as you like. The portfolio value will remain unchanged until you enter a new price. For illiquid assets, a quarterly or annual update is often sufficient.',
    },
    {
      q: 'Can I import a historical price series?',
      a: 'Yes. You can add multiple dates in the Price History panel, entering historical prices one by one. This lets you reconstruct the asset\'s value evolution over time.',
    },
    {
      q: 'Do unlisted assets affect portfolio allocation?',
      a: 'Yes. Once added with an updated price, unlisted assets are included in the allocation percentage calculation, enabling a true view of your total wealth composition.',
    },
  ],

  ctaTitle: 'Start tracking your complete wealth',
  ctaBody: 'Don\'t leave real estate, private holdings and alternative investments off your radar. With DonkyCapital you can finally have a 360° view of your portfolio.',
  ctaButton: 'Try DonkyCapital',
}

const de: UnlistedGuideTranslations = {
  badge: 'DonkyCapital Leitfaden',
  h1: 'Nicht börsennotierte Assets',
  h1Highlight: 'im Portfolio verfolgen',
  intro1: 'Immobilien, Private Equity, Kunst, Sammlerstücke, Startup-Anteile, P2P-Kredite: Ein erheblicher Teil deines Vermögens ist möglicherweise an keiner Börse gelistet. DonkyCapital ermöglicht es dir, diese Assets genauso zu erfassen und zu überwachen wie Aktien und ETFs – für ein vollständiges und realistisches Bild deines Gesamtvermögens.',
  intro2: 'In dieser Anleitung zeigen wir Schritt für Schritt, wie du ein nicht börsennotiertes Asset hinzufügst, Transaktionen erfasst, den Preis im Zeitverlauf aktualisierst und generierte Erträge buchst.',

  s1Title: 'Was sind nicht börsennotierte Assets?',
  s1Body: 'Nicht börsennotierte Assets (Unlisted Assets) sind Investments ohne einen in Echtzeit verfügbaren Marktpreis. Im Gegensatz zu Aktien und ETFs muss ihr Wert vom Anleger manuell geschätzt und aktualisiert werden. In DonkyCapital sind sie private Assets: Nur du kannst sie sehen.',
  s1Examples: [
    ['Immobilien', 'Eigenheim, Ferienimmobilien, Mietobjekte, Garagen, Grundstücke'],
    ['Private Equity', 'Startup-Anteile, Beteiligungen an nicht börsennotierten Unternehmen, PE-Fonds'],
    ['Kunst & Sammlerstücke', 'Gemälde, Skulpturen, Luxusuhren, Weine, Oldtimer'],
    ['Kredite & Forderungen', 'P2P-Kredite, Privatanleihen, Forderungen gegenüber Dritten'],
    ['Sonstiges', 'Self-Custody-Krypto, physische Edelmetalle, Lizenzgebühren'],
  ],
  s1Note: 'Das Hinzufügen nicht börsennotierter Assets erlaubt es, die Performance und die Allokation deines Gesamtvermögens zu berechnen – nicht nur des börsennotierten Teils.',

  s2Title: 'Schritt 1 — Nicht börsennotiertes Asset anlegen',
  s2Intro: 'Zuerst musst du das Asset im Bereich „My Unlisted Assets" registrieren. Jedes Asset hat einen Namen, ein benutzerdefiniertes Symbol, eine Währung und – optional – eine ISIN.',
  s2Steps: [
    'Gehe über das Hauptmenü zu „My Unlisted Assets"',
    'Klicke auf „+ ADD NEW ASSET"',
    'Gib einen Namen (z.B. „RentHouse"), ein eindeutiges Symbol (z.B. „HOUSE001") und eine Währung (z.B. EUR) ein',
    'Das ISIN-Feld ist optional: Verwende es, wenn das Asset eine ISIN hat, andernfalls lasse es leer',
    'Bestätigen: Das Asset erscheint in der Liste und kann in Transaktionen verwendet werden',
  ],
  s2ImgAlt: 'DonkyCapital — My Unlisted Assets Seite mit RentHouse Asset',
  s2ImgCaption: 'Der Bereich „My Unlisted Assets" zeigt alle privaten Assets mit aktuellem Preis und Datum der letzten Aktualisierung.',
  s2Tip: 'Wähle ein kurzes, wiedererkennbares Symbol (z.B. HOUSE001, STARTUPABC, PAINTING01). Du wirst es später zum Filtern von Transaktionen verwenden.',

  s3Title: 'Schritt 2 — Kauf erfassen',
  s3Body: 'Sobald das Asset angelegt ist, erfasst du die Kauftransaktion wie bei jedem anderen Finanzinstrument. Im Modal „Add Transaction" wählst du den Tab „Unlisted", um deine privaten Assets anzuzeigen.',
  s3Steps: [
    'Klicke in dem Portfolio, dem du das Asset hinzufügen möchtest, auf „Add Transaction"',
    'Wähle Typ „Buy Asset"',
    'Wähle den Tab „Unlisted"',
    'Suche und wähle das Asset aus der Liste (z.B. „RentHouse (HOUSE001)")',
    'Gib Menge (z.B. 1 für eine Immobilie), Kaufpreis und Transaktionsdatum ein',
    'Füge ggf. Provisionen oder Transaktionskosten hinzu',
    'Klicke „CREATE" zum Bestätigen',
  ],
  s3ImgAlt: 'DonkyCapital — Add Transaction Modal mit ausgewähltem Unlisted Tab',
  s3ImgCaption: 'Im Add-Transaction-Modal ermöglicht der Tab „Unlisted" die Auswahl deiner privaten Assets. Mit „+ CREATE NEW" kannst du auch direkt ein neues Asset anlegen.',

  s4Title: 'Schritt 3 — Preis im Zeitverlauf aktualisieren',
  s4Body: 'Nicht börsennotierte Assets haben keinen automatischen Preisfeed: Du entscheidest, wann und wie du die Bewertung aktualisierst. DonkyCapital führt eine vollständige Historie aller Preisaktualisierungen, sodass du die Wertentwicklung über die Zeit verfolgen kannst.',
  s4Steps: [
    'Klicke in der Liste „My Unlisted Assets" auf das Uhr-Symbol (Preishistorie) neben dem Asset',
    'Das Panel „Price History" öffnet sich mit allen bisherigen Aktualisierungen',
    'Klicke „ADD NEW PRICE", um die aktualisierte Bewertung und das Datum einzugeben',
    'Der neue Preis aktualisiert automatisch den Marktwert deines Portfolios',
  ],
  s4ImgAlt: 'DonkyCapital — Price History Panel für RentHouse Asset',
  s4ImgCaption: 'Das Price-History-Panel zeigt die Preisentwicklung im Zeitverlauf. Aktualisiere die Bewertung, wann immer du eine neue Schätzung hast (Gutachten, erhaltenes Angebot, Markt-Benchmark).',
  s4Tip: 'Wie oft aktualisieren? Bei Immobilien: vierteljährlich oder halbjährlich. Bei Kunst/Sammlerstücken: jährlich oder nach bedeutenden Ereignissen (Auktionen, vergleichbare Verkäufe). Bei Startups: nach jeder Finanzierungsrunde.',

  s5Title: 'Schritt 4 — Erträge erfassen (Miete, Dividenden, Zinsen)',
  s5Body: 'Ein nicht börsennotiertes Asset kann periodische Erträge generieren: Mieteinnahmen, Dividenden aus Beteiligungen, Zinsen auf Kredite. DonkyCapital ermöglicht es, diese Erträge als „Dividend"-Transaktionen zu buchen und so eine vollständige Buchführung zu führen.',
  s5Steps: [
    'Füge eine neue Transaktion zum Portfolio hinzu',
    'Wähle Typ „Dividend"',
    'Wähle das nicht börsennotierte Asset aus dem Menü (z.B. „HOUSE001 - RentHouse")',
    'Gib die Anzahl der Anteile ein, die den Ertrag erzeugt haben (z.B. 1)',
    'Gib den Ertrag pro Einheit ein (z.B. 1000 für eine monatliche Miete von €1.000)',
    'Der Gesamtbetrag wird automatisch berechnet: Menge × Ertrag pro Einheit',
    'Datum eingeben und bestätigen',
  ],
  s5ImgAlt: 'DonkyCapital — Add Transaction Modal mit Typ Dividend für nicht börsennotiertes Asset',
  s5ImgCaption: 'Der Transaktionstyp „Dividend" ermöglicht die Erfassung aller periodischen Erträge: Mieten, Startup-Dividenden, P2P-Zinsen. Der Gesamtbetrag wird automatisch berechnet.',
  s5Examples: [
    'Monatliche Miete aus Immobilie: jede Zahlung als Dividend erfassen',
    'Dividende aus Unternehmensbeteiligung: eine Transaktion pro Ausschüttung',
    'P2P-Zinsen: monatlich oder vierteljährlich erfassen',
    'Lizenzgebühren: eine Transaktion pro erhaltener Zahlung',
  ],

  s6Title: 'Gesamtübersicht: Transaktionen und Portfolio-Trend',
  s6Body: 'Nach der Eingabe der Transaktionen integriert DonkyCapital nicht börsennotierte Assets in die gesamte Plattform – genau wie börsennotierte. Der Bereich Transaktionen zeigt das vollständige Buchführungsregister, während das Diagramm „Portfolios Trend" die gesamte Wertentwicklung im Zeitverlauf visualisiert.',
  s6ImgTxAlt: 'DonkyCapital — Transaktionsliste mit nicht börsennotiertem Asset RentHouse',
  s6ImgTxCaption: 'Der Bereich Transaktionen zeigt alle Vorgänge in chronologischer Reihenfolge: die Kapitaleinlage, den Immobilienkauf und die eingezogenen Mieten.',
  s6ImgTrendAlt: 'DonkyCapital — Portfolios Trend Diagramm mit einbezogenem nicht börsennotierten Asset',
  s6ImgTrendCaption: 'Das Portfolios-Trend-Diagramm schließt den Wert nicht börsennotierter Assets ein: Die Sprünge entsprechen dem Immobilienkauf (Dezember) und den nachfolgenden Preisaktualisierungen.',
  s6Summary: 'Das Ergebnis ist ein wirklich vollständiges Portfolio: Aktien, ETFs, Krypto und nicht börsennotierte Assets in einem einzigen Dashboard mit einheitlichen Performance-Kennzahlen.',

  faqTitle: 'Häufig gestellte Fragen',
  faqItems: [
    {
      q: 'Kann ich nicht börsennotierte Assets in mehreren Portfolios verwenden?',
      a: 'Ja. Du kannst dasselbe nicht börsennotierte Asset in verschiedenen Portfolios verwenden. In „My Unlisted Assets" angelegte Assets stehen in all deinen Portfolios zur Verfügung.',
    },
    {
      q: 'Wie wird die Performance nicht börsennotierter Assets berechnet?',
      a: 'DonkyCapital berechnet die Performance anhand des in der Transaktion erfassten Kaufpreises und des zuletzt in der Preishistorie eingegebenen Preises. Erträge (Mieten, Dividenden) werden ebenfalls in die Gesamtrenditeberechnung einbezogen.',
    },
    {
      q: 'Muss ich den Preis bei jeder Änderung aktualisieren?',
      a: 'Nein. Du kannst den Preis so oft aktualisieren, wie du möchtest. Der Portfoliowert bleibt unverändert, bis du einen neuen Preis eingibst. Bei illiquiden Assets ist eine vierteljährliche oder jährliche Aktualisierung oft ausreichend.',
    },
    {
      q: 'Kann ich eine historische Preisreihe importieren?',
      a: 'Ja. Du kannst mehrere Daten im Price-History-Panel hinzufügen und historische Preise einzeln eingeben. So kannst du die Wertentwicklung des Assets im Zeitverlauf rekonstruieren.',
    },
    {
      q: 'Beeinflussen nicht börsennotierte Assets die Portfolio-Allokation?',
      a: 'Ja. Einmal mit einem aktuellen Preis hinzugefügt, werden nicht börsennotierte Assets in die prozentuale Allokationsberechnung einbezogen – für eine reale Übersicht der Gesamtvermögensstruktur.',
    },
  ],

  ctaTitle: 'Fange an, dein vollständiges Vermögen zu verfolgen',
  ctaBody: 'Lass Immobilien, Beteiligungen und alternative Investments nicht aus dem Blick. Mit DonkyCapital hast du endlich eine 360°-Sicht auf dein Portfolio.',
  ctaButton: 'DonkyCapital ausprobieren',
}

const fr: UnlistedGuideTranslations = {
  badge: 'Guide DonkyCapital',
  h1: 'Suivre les Actifs',
  h1Highlight: 'Non Cotés dans Votre Portefeuille',
  intro1: 'Immobilier, private equity, art, objets de collection, parts de startup, prêts P2P : une part importante de votre patrimoine est peut-être absente des marchés boursiers. DonkyCapital vous permet d\'enregistrer et de suivre ces actifs exactement comme des actions et des ETF, pour une vision complète et réelle de votre richesse totale.',
  intro2: 'Dans ce guide, nous détaillons étape par étape comment ajouter un actif non coté, enregistrer des transactions, mettre à jour son prix dans le temps et suivre les revenus générés.',

  s1Title: 'Que sont les actifs non cotés ?',
  s1Body: 'Les actifs non cotés (unlisted assets) sont des investissements qui n\'ont pas de prix de marché en temps réel. Contrairement aux actions et ETF, leur valeur doit être estimée et mise à jour manuellement par l\'investisseur. Dans DonkyCapital, ce sont des actifs privés : vous seul pouvez les voir.',
  s1Examples: [
    ['Immobilier', 'Résidence principale, maisons de vacances, biens locatifs, garages, terrains'],
    ['Private Equity', 'Parts de startup, participations dans des sociétés non cotées, fonds de PE'],
    ['Art & Objets de Collection', 'Tableaux, sculptures, montres de luxe, vins fins, voitures anciennes'],
    ['Crédits & Prêts', 'Prêts P2P, obligations privées, créances sur tiers'],
    ['Autre', 'Crypto en self-custody, métaux précieux physiques, redevances'],
  ],
  s1Note: 'Ajouter des actifs non cotés à votre portefeuille vous permet de calculer la performance et l\'allocation de votre patrimoine total — pas seulement la partie cotée en bourse.',

  s2Title: 'Étape 1 — Créer l\'actif non coté',
  s2Intro: 'Vous devez d\'abord enregistrer l\'actif dans la section « My Unlisted Assets ». Chaque actif a un nom, un symbole personnalisé, une devise et — optionnellement — un code ISIN.',
  s2Steps: [
    'Accédez à « My Unlisted Assets » depuis le menu principal',
    'Cliquez sur « + ADD NEW ASSET »',
    'Entrez un nom (ex. « RentHouse »), un symbole unique (ex. « HOUSE001 ») et une devise (ex. EUR)',
    'Le champ ISIN est optionnel : utilisez-le si l\'actif en possède un, sinon laissez-le vide',
    'Confirmez : l\'actif apparaît dans la liste et peut être utilisé dans les transactions',
  ],
  s2ImgAlt: 'DonkyCapital — page My Unlisted Assets avec l\'actif RentHouse',
  s2ImgCaption: 'La section My Unlisted Assets affiche tous vos actifs privés avec leur dernier prix connu et la date de dernière mise à jour.',
  s2Tip: 'Choisissez un symbole court et reconnaissable (ex. HOUSE001, STARTUPABC, PAINTING01). Vous l\'utiliserez pour filtrer les transactions.',

  s3Title: 'Étape 2 — Enregistrer l\'achat',
  s3Body: 'Une fois l\'actif créé, enregistrez la transaction d\'achat comme pour n\'importe quel instrument financier. Dans le modal « Add Transaction », sélectionnez l\'onglet « Unlisted » pour accéder à vos actifs privés.',
  s3Steps: [
    'Cliquez sur « Add Transaction » dans le portefeuille où vous souhaitez ajouter l\'actif',
    'Sélectionnez le type « Buy Asset »',
    'Sélectionnez l\'onglet « Unlisted »',
    'Recherchez et sélectionnez l\'actif dans la liste (ex. « RentHouse (HOUSE001) »)',
    'Entrez la quantité (ex. 1 pour un bien immobilier), le prix d\'achat et la date de transaction',
    'Ajoutez les commissions ou frais de transaction le cas échéant',
    'Cliquez « CREATE » pour confirmer',
  ],
  s3ImgAlt: 'DonkyCapital — modal Add Transaction avec onglet Unlisted sélectionné',
  s3ImgCaption: 'Dans le modal Add Transaction, l\'onglet « Unlisted » permet de sélectionner vos actifs privés. Vous pouvez aussi créer un nouvel actif à la volée avec « + CREATE NEW ».',

  s4Title: 'Étape 3 — Mettre à jour le prix dans le temps',
  s4Body: 'Les actifs non cotés n\'ont pas de flux de prix automatique : c\'est vous qui décidez quand et comment mettre à jour la valorisation. DonkyCapital conserve un historique complet de chaque mise à jour de prix, afin de suivre l\'évolution de la valeur dans le temps.',
  s4Steps: [
    'Dans la liste « My Unlisted Assets », cliquez sur l\'icône d\'horloge (historique des prix) à côté de l\'actif',
    'Le panneau « Price History » s\'ouvre avec toutes les mises à jour précédentes',
    'Cliquez « ADD NEW PRICE » pour entrer la valorisation actualisée et la date',
    'Le nouveau prix met automatiquement à jour la valeur de marché de votre portefeuille',
  ],
  s4ImgAlt: 'DonkyCapital — panneau Price History pour l\'actif RentHouse',
  s4ImgCaption: 'Le panneau Price History montre l\'évolution du prix dans le temps. Mettez à jour la valorisation à chaque nouvelle estimation (expertise, offre reçue, benchmark de marché).',
  s4Tip: 'À quelle fréquence mettre à jour ? Pour l\'immobilier : trimestriel ou semestriel. Pour l\'art/collections : annuel ou après des événements significatifs (ventes aux enchères, ventes comparables). Pour les startups : après chaque tour de financement.',

  s5Title: 'Étape 4 — Enregistrer les revenus (loyers, dividendes, intérêts)',
  s5Body: 'Un actif non coté peut générer des revenus périodiques : loyers, dividendes de participations, intérêts sur prêts. DonkyCapital vous permet d\'enregistrer ces revenus comme des transactions de type « Dividend », pour une comptabilité complète.',
  s5Steps: [
    'Ajoutez une nouvelle transaction au portefeuille',
    'Sélectionnez le type « Dividend »',
    'Choisissez l\'actif non coté dans le menu (ex. « HOUSE001 - RentHouse »)',
    'Entrez la quantité de parts qui ont généré le revenu (ex. 1)',
    'Entrez le revenu par unité (ex. 1000 pour un loyer mensuel de 1 000 €)',
    'Le total est calculé automatiquement : quantité × revenu par unité',
    'Entrez la date et confirmez',
  ],
  s5ImgAlt: 'DonkyCapital — modal Add Transaction avec type Dividend pour actif non coté',
  s5ImgCaption: 'Le type de transaction « Dividend » permet d\'enregistrer tous les revenus périodiques : loyers, dividendes de startups, intérêts P2P. Le total est calculé automatiquement.',
  s5Examples: [
    'Loyer mensuel d\'un bien immobilier : enregistrez chaque paiement comme Dividend',
    'Dividende d\'une participation sociale : une transaction par distribution',
    'Intérêts P2P : enregistrement mensuel ou trimestriel',
    'Redevances : une transaction par paiement reçu',
  ],

  s6Title: 'Vue d\'ensemble : transactions et tendance du portefeuille',
  s6Body: 'Une fois les transactions saisies, DonkyCapital intègre les actifs non cotés dans toute la plateforme, exactement comme les actifs cotés. La section Transactions affiche le registre comptable complet, tandis que le graphique Portfolios Trend visualise l\'évolution de la valeur totale dans le temps.',
  s6ImgTxAlt: 'DonkyCapital — liste des transactions avec l\'actif non coté RentHouse',
  s6ImgTxCaption: 'La section Transactions affiche toutes les opérations en ordre chronologique : l\'apport en capital, l\'achat du bien immobilier et les loyers encaissés.',
  s6ImgTrendAlt: 'DonkyCapital — graphique Portfolios Trend avec actif non coté inclus',
  s6ImgTrendCaption: 'Le graphique Portfolios Trend inclut la valeur des actifs non cotés : les sauts correspondent à l\'achat du bien (décembre) et aux mises à jour de prix ultérieures.',
  s6Summary: 'Le résultat est un portefeuille véritablement complet : actions, ETF, crypto et actifs non cotés coexistent dans un seul tableau de bord avec des métriques de performance cohérentes.',

  faqTitle: 'Questions Fréquentes',
  faqItems: [
    {
      q: 'Puis-je utiliser des actifs non cotés dans plusieurs portefeuilles ?',
      a: 'Oui. Vous pouvez utiliser le même actif non coté dans différents portefeuilles. Les actifs créés dans « My Unlisted Assets » sont disponibles pour tous vos portefeuilles.',
    },
    {
      q: 'Comment la performance des actifs non cotés est-elle calculée ?',
      a: 'DonkyCapital calcule la performance en utilisant le prix d\'achat enregistré dans la transaction et le prix le plus récent saisi dans l\'historique des prix. Les revenus (loyers, dividendes) sont également inclus dans le calcul du rendement total.',
    },
    {
      q: 'Dois-je mettre à jour le prix à chaque variation ?',
      a: 'Non. Vous pouvez mettre à jour le prix aussi souvent que vous le souhaitez. La valeur du portefeuille restera inchangée tant que vous n\'entrez pas un nouveau prix. Pour les actifs illiquides, une mise à jour trimestrielle ou annuelle est souvent suffisante.',
    },
    {
      q: 'Puis-je importer une série historique de prix ?',
      a: 'Oui. Vous pouvez ajouter plusieurs dates dans le panneau Price History en entrant les prix historiques un par un. Cela vous permet de reconstituer l\'évolution de la valeur de l\'actif dans le temps.',
    },
    {
      q: 'Les actifs non cotés influencent-ils l\'allocation du portefeuille ?',
      a: 'Oui. Une fois ajoutés avec un prix actualisé, les actifs non cotés sont inclus dans le calcul de l\'allocation en pourcentage, permettant une vue réelle de la composition du patrimoine total.',
    },
  ],

  ctaTitle: 'Commencez à suivre votre patrimoine complet',
  ctaBody: 'Ne laissez pas l\'immobilier, les participations et les investissements alternatifs hors de votre radar. Avec DonkyCapital, ayez enfin une vue à 360° de votre portefeuille.',
  ctaButton: 'Essayer DonkyCapital',
}

const es: UnlistedGuideTranslations = {
  badge: 'Guía DonkyCapital',
  h1: 'Cómo Monitorizar',
  h1Highlight: 'Activos No Cotizados en tu Cartera',
  intro1: 'Inmuebles, private equity, arte, objetos de colección, participaciones en startups, préstamos P2P: una parte importante de tu patrimonio puede no estar cotizada en bolsa. DonkyCapital te permite registrar y monitorizar estos activos exactamente igual que acciones y ETFs, ofreciéndote una visión completa y real de tu riqueza total.',
  intro2: 'En esta guía veremos paso a paso cómo añadir un activo no cotizado, registrar transacciones, actualizar su precio en el tiempo y contabilizar los ingresos generados.',

  s1Title: '¿Qué son los activos no cotizados?',
  s1Body: 'Los activos no cotizados (unlisted assets) son inversiones que no tienen un precio de mercado en tiempo real. A diferencia de las acciones y ETFs, su valor debe ser estimado y actualizado manualmente por el inversor. En DonkyCapital son activos privados: solo tú los puedes ver.',
  s1Examples: [
    ['Inmuebles', 'Vivienda habitual, casas vacacionales, inmuebles en alquiler, garajes, terrenos'],
    ['Private Equity', 'Participaciones en startups, acciones en sociedades no cotizadas, fondos de PE'],
    ['Arte y Coleccionismo', 'Cuadros, esculturas, relojes de lujo, vinos finos, coches clásicos'],
    ['Créditos y Préstamos', 'Préstamos P2P, bonos privados, créditos frente a terceros'],
    ['Otros', 'Cripto en self-custody, metales preciosos físicos, royalties'],
  ],
  s1Note: 'Añadir activos no cotizados a tu cartera te permite calcular la rentabilidad y la asignación de tu patrimonio total, no solo la parte invertida en bolsa.',

  s2Title: 'Paso 1 — Crea el activo no cotizado',
  s2Intro: 'Primero debes registrar el activo en la sección "My Unlisted Assets". Cada activo tiene un nombre, un símbolo personalizado, una divisa y, opcionalmente, un código ISIN.',
  s2Steps: [
    'Ve a "My Unlisted Assets" desde el menú principal',
    'Haz clic en "+ ADD NEW ASSET"',
    'Introduce un nombre (ej. "RentHouse"), un símbolo único (ej. "HOUSE001") y una divisa (ej. EUR)',
    'El campo ISIN es opcional: úsalo si el activo tiene uno, de lo contrario déjalo en blanco',
    'Confirma: el activo aparece en la lista y podrá usarse en transacciones',
  ],
  s2ImgAlt: 'DonkyCapital — página My Unlisted Assets con el activo RentHouse',
  s2ImgCaption: 'La sección My Unlisted Assets muestra todos tus activos privados con el último precio conocido y la fecha de la última actualización.',
  s2Tip: 'Elige un símbolo corto y reconocible (ej. HOUSE001, STARTUPABC, PAINTING01). Lo usarás para filtrar transacciones más adelante.',

  s3Title: 'Paso 2 — Registra la compra',
  s3Body: 'Una vez creado el activo, registra la transacción de compra igual que harías con cualquier instrumento financiero. En el modal "Add Transaction" selecciona el tab "Unlisted" para ver tus activos privados.',
  s3Steps: [
    'Haz clic en "Add Transaction" en la cartera donde quieres añadir el activo',
    'Selecciona el tipo "Buy Asset"',
    'Selecciona el tab "Unlisted"',
    'Busca y selecciona el activo de la lista (ej. "RentHouse (HOUSE001)")',
    'Introduce la cantidad (ej. 1 para un inmueble), el precio de compra y la fecha de la transacción',
    'Añade comisiones o gastos de transacción si corresponde',
    'Haz clic en "CREATE" para confirmar',
  ],
  s3ImgAlt: 'DonkyCapital — modal Add Transaction con tab Unlisted seleccionado',
  s3ImgCaption: 'En el modal Add Transaction, el tab "Unlisted" permite seleccionar tus activos privados. También puedes crear un nuevo activo sobre la marcha con "+ CREATE NEW".',

  s4Title: 'Paso 3 — Actualiza el precio a lo largo del tiempo',
  s4Body: 'Los activos no cotizados no tienen un feed de precios automático: tú decides cuándo y cómo actualizar la valoración. DonkyCapital mantiene un historial completo de cada actualización de precio, para que puedas ver la evolución del valor en el tiempo.',
  s4Steps: [
    'Desde la lista "My Unlisted Assets", haz clic en el icono del reloj (historial de precios) junto al activo',
    'Se abre el panel "Price History" con todas las actualizaciones anteriores',
    'Haz clic en "ADD NEW PRICE" para introducir la valoración actualizada y la fecha',
    'El nuevo precio actualiza automáticamente el valor de mercado de tu cartera',
  ],
  s4ImgAlt: 'DonkyCapital — panel Price History para el activo RentHouse',
  s4ImgCaption: 'El panel Price History muestra la evolución del precio en el tiempo. Actualiza la valoración cada vez que tengas una nueva estimación (tasación, oferta recibida, benchmark de mercado).',
  s4Tip: '¿Con qué frecuencia actualizar? Para inmuebles: trimestral o semestral. Para arte/coleccionismo: anual o tras eventos significativos (subastas, ventas comparables). Para startups: tras cada ronda de financiación.',

  s5Title: 'Paso 4 — Registra los ingresos (alquileres, dividendos, intereses)',
  s5Body: 'Un activo no cotizado puede generar ingresos periódicos: rentas de alquiler, dividendos de participaciones, intereses sobre préstamos. DonkyCapital te permite registrar estos ingresos como transacciones de tipo "Dividend", manteniendo la contabilidad completa.',
  s5Steps: [
    'Añade una nueva transacción en la cartera',
    'Selecciona el tipo "Dividend"',
    'Elige el activo no cotizado del menú (ej. "HOUSE001 - RentHouse")',
    'Introduce la cantidad de participaciones que generaron el ingreso (ej. 1)',
    'Introduce el ingreso por unidad (ej. 1000 para una renta mensual de €1.000)',
    'El total se calcula automáticamente: cantidad × ingreso por unidad',
    'Introduce la fecha y confirma',
  ],
  s5ImgAlt: 'DonkyCapital — modal Add Transaction con tipo Dividend para activo no cotizado',
  s5ImgCaption: 'El tipo de transacción "Dividend" permite registrar cualquier ingreso periódico: alquileres, dividendos de startups, intereses P2P. El total se calcula automáticamente.',
  s5Examples: [
    'Alquiler mensual de inmueble: registra cada pago como Dividend',
    'Dividendo de participación societaria: una transacción por cada distribución',
    'Intereses P2P: registro mensual o trimestral',
    'Royalties: una transacción por cada pago recibido',
  ],

  s6Title: 'Visión de conjunto: transacciones y tendencia de la cartera',
  s6Body: 'Una vez introducidas las transacciones, DonkyCapital integra los activos no cotizados en toda la plataforma, exactamente igual que los cotizados. La sección Transactions muestra el registro contable completo, mientras que el gráfico Portfolios Trend visualiza la evolución del valor total en el tiempo.',
  s6ImgTxAlt: 'DonkyCapital — lista de transacciones con activo no cotizado RentHouse',
  s6ImgTxCaption: 'La sección Transactions muestra todas las operaciones en orden cronológico: el depósito de capital, la compra del inmueble y los alquileres cobrados.',
  s6ImgTrendAlt: 'DonkyCapital — gráfico Portfolios Trend con activo no cotizado incluido',
  s6ImgTrendCaption: 'El gráfico Portfolios Trend incluye el valor de los activos no cotizados: los saltos del gráfico corresponden a la compra del inmueble (diciembre) y las actualizaciones de precio posteriores.',
  s6Summary: 'El resultado es una cartera verdaderamente completa: acciones, ETFs, cripto y activos no cotizados conviven en un único dashboard con métricas de rentabilidad coherentes.',

  faqTitle: 'Preguntas Frecuentes',
  faqItems: [
    {
      q: '¿Puedo usar activos no cotizados en varias carteras?',
      a: 'Sí. Puedes usar el mismo activo no cotizado en diferentes carteras. Los activos creados en "My Unlisted Assets" están disponibles para todas tus carteras.',
    },
    {
      q: '¿Cómo se calcula la rentabilidad de un activo no cotizado?',
      a: 'DonkyCapital calcula la rentabilidad usando el precio de compra registrado en la transacción y el precio más reciente introducido en el historial de precios. Los ingresos (alquileres, dividendos) también se incluyen en el cálculo del rendimiento total.',
    },
    {
      q: '¿Tengo que actualizar el precio en cada variación?',
      a: 'No. Puedes actualizar el precio con la frecuencia que desees. El valor en la cartera permanecerá sin cambios hasta que introduzcas un nuevo precio. Para activos ilíquidos, una actualización trimestral o anual suele ser suficiente.',
    },
    {
      q: '¿Puedo importar un historial de precios pasados?',
      a: 'Sí. Puedes añadir varias fechas en el panel Price History, introduciendo los precios históricos uno a uno. Esto te permite reconstruir la evolución del valor del activo en el tiempo.',
    },
    {
      q: '¿Los activos no cotizados afectan la asignación de la cartera?',
      a: 'Sí. Una vez añadidos con un precio actualizado, los activos no cotizados se incluyen en el cálculo de la asignación porcentual, ofreciendo una visión real de la composición del patrimonio total.',
    },
  ],

  ctaTitle: 'Empieza a monitorizar tu patrimonio completo',
  ctaBody: 'No dejes fuera de tu radar inmuebles, participaciones e inversiones alternativas. Con DonkyCapital tendrás por fin una visión a 360° de tu cartera.',
  ctaButton: 'Probar DonkyCapital',
}

export const unlistedGuideTranslations: Record<Locale, UnlistedGuideTranslations> = {
  it,
  en,
  de,
  fr,
  es,
}
