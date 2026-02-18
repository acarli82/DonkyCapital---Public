import type { Locale } from '@/lib/i18n/config'

export interface CommonMistakesTranslations {
  badge: string
  h1: string
  h1Highlight: string
  intro1: string
  intro2: string
  tocTitle: string
  tocItems: readonly string[]
  fixTitle: string
  // Error 1
  e1Title: string
  e1Body1: string
  e1ExTitle: string
  e1ExItems: readonly string[]
  e1Body2: string
  e1ImgAlt: string
  e1ImgCaption: string
  e1FixBody: string
  // Error 2
  e2Title: string
  e2Body1: string
  e2Body2: string
  e2ExTitle: string
  e2ExItems: readonly string[]
  e2ImgAlt: string
  e2ImgCaption: string
  e2FixBefore: string
  e2FixMiddle: string
  e2FixMiddle2: string
  e2FixLinkText: string
  // Error 3
  e3Title: string
  e3Body1: string
  e3Body2: string
  e3ExTitle: string
  e3ExItems: readonly string[]
  e3Body3: string
  e3FixBody: string
  // Error 4
  e4Title: string
  e4Body1: string
  e4ExTitle: string
  e4ExItems: readonly string[]
  e4Body2: string
  e4ImgAlt: string
  e4ImgCaption: string
  e4FixBody: string
  // Error 5
  e5Title: string
  e5Body1: string
  e5Body2: string
  e5ExTitle: string
  e5Formula: string
  e5ExItems: readonly string[]
  e5ImgAlt: string
  e5ImgCaption: string
  e5FixBody: string
  // Bonus
  bonusTitle: string
  bonusIntro: string
  bonusItems: readonly [string, string][]
  // Checklist
  checklistTitle: string
  checklistIntro: string
  checklistItems: readonly string[]
  checklistFooter: string
  // Tools
  toolsTitle: string
  toolsIntro: string
  toolsCards: readonly [string, string][]
  toolsImgAlt: string
  toolsImgCaption: string
  toolsBody2: string
  toolsLinkLabels: readonly [string, string, string]
  // FAQ
  faqTitle: string
  faqItems: readonly { q: string; a: string }[]
  // CTA
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  ctaFooter: string
}

const it: CommonMistakesTranslations = {
  badge: 'Guida · Errori Comuni',
  h1: '5 Errori Mortali nel Tracciare il Portafoglio',
  h1Highlight: '(Che Costano Migliaia di Euro)',
  intro1: 'Analizzando centinaia di portafogli importati su DonkyCapital, emerge un pattern ricorrente: la maggior parte degli investitori retail commette gli stessi errori sistematici nel tracciamento dei propri investimenti. Errori che sembrano innocui ma che, sommati nel tempo, possono costare anche migliaia di euro in rendimento perso o in decisioni sbagliate prese sulla base di dati incorretti.',
  intro2: 'In questo articolo analizziamo i 5 errori più critici, con esempi numerici concreti e soluzioni pratiche. Per ognuno vedremo anche come DonkyCapital li previene automaticamente.',
  tocTitle: 'Indice degli errori',
  tocItems: [
    'Ignorare le commissioni di transazione',
    'Calcolare il rendimento nel modo sbagliato',
    'Non tracciare i dividendi reinvestiti',
    'Ignorare il rischio di cambio valuta',
    'Non considerare l\'inflazione',
    'Bonus: altri errori frequenti',
    'Checklist completa',
    'Tool che prevengono gli errori automaticamente',
  ],
  fixTitle: 'Come evitarlo',
  e1Title: 'Ignorare le Commissioni di Transazione',
  e1Body1: 'Le commissioni di transazione sembrano trascurabili prese singolarmente — €2, €5, €10 per operazione. Ma sommate nel tempo e confrontate con il capitale che avrebbero potuto generare se reinvestite, diventano un costo significativo che la maggior parte degli investitori non traccia mai.',
  e1ExTitle: 'Impatto reale — esempio numerico',
  e1ExItems: [
    '→ Piano di accumulo mensile su ETF: 2 operazioni/mese a €5 ciascuna = €120/anno',
    '→ Su un portafoglio da €30.000, €120/anno = −0,40% di rendimento reale ogni anno',
    '→ In 20 anni, quel €120/anno investito al 7% = oltre €5.200 di capitale perso',
    '→ Aggiungendo il TER medio degli ETF attivi (1,5% vs 0,2% di un ETF passivo): la differenza su €30.000 in 20 anni supera €15.000',
  ],
  e1Body2: 'Il problema non è solo il costo in sé: è che senza tracciarle, non puoi calcolare il rendimento netto reale e confrontarlo correttamente tra diversi broker o prodotti finanziari.',
  e1ImgAlt: 'DonkyCapital — lista transazioni con acquisti, vendite e dividendi',
  e1ImgCaption: 'Il registro completo delle transazioni è il punto di partenza per tracciare correttamente commissioni e costi.',
  e1FixBody: 'Registra ogni transazione includendo il costo esatto della commissione. DonkyCapital aggrega automaticamente i costi nel calcolo del rendimento netto — così puoi vedere il vero costo del tuo portafoglio, non solo il guadagno lordo.',
  e2Title: 'Calcolare il Rendimento nel Modo Sbagliato',
  e2Body1: 'Il tuo broker mostra +83% di performance. Ma stai davvero guadagnando +83% annuo? Quasi certamente no. Il numero che i broker mostrano di default è il ROI semplice: la differenza tra valore attuale e capitale investito totale, senza tenere conto di quando hai investito i singoli importi.',
  e2Body2: 'Se hai fatto versamenti periodici nel corso degli anni, il ROI semplice può essere molto fuorviante rispetto al rendimento annualizzato reale.',
  e2ExTitle: 'Esempio pratico',
  e2ExItems: [
    '→ Portafoglio con TWRR +83% dalla data di apertura',
    '→ Lo stesso portafoglio ha un TWRR annualizzato di +33,5% per anno',
    '→ E un MWRR di +56% — il rendimento effettivo sul tuo capitale specifico',
    '→ Un investitore che legge solo "+83%" e pensa di fare +83% l\'anno commette un errore enorme nelle proprie proiezioni',
  ],
  e2ImgAlt: 'DonkyCapital — metriche di performance con TWRR e TWRR annualizzato',
  e2ImgCaption: 'DonkyCapital mostra TWRR, TWRR annualizzato e rendimento lordo separati — così non confonderai mai i dati.',
  e2FixBefore: 'Usa sempre ',
  e2FixMiddle: ' per confrontarti con i benchmark e ',
  e2FixMiddle2: ' per capire il rendimento effettivo sul tuo capitale. Approfondisci le differenze nella nostra',
  e2FixLinkText: 'guida a ROI, TWR e IRR',
  e3Title: 'Non Tracciare i Dividendi Reinvestiti',
  e3Body1: 'I dividendi sono spesso considerati "extra" — un bonus che arriva ogni trimestre e viene incassato senza essere contabilizzato correttamente. È uno degli errori più costosi nel lungo periodo.',
  e3Body2: 'Storicamente, i dividendi hanno contribuito a oltre il 40% del rendimento totale dell\'S&P 500 negli ultimi 50 anni. Non tracciarli significa sottostimare enormemente la performance reale e perdere la visibilità sull\'effetto dell\'interesse composto nel lungo termine.',
  e3ExTitle: 'Impatto reale — esempio numerico',
  e3ExItems: [
    '→ Hai 100 azioni Apple. Dividendo trimestrale: €0,25/azione = €25 ogni trimestre',
    '→ €100/anno reinvestiti in Apple per 15 anni al 12% annuo = €547 aggiuntivi',
    '→ Su un portafoglio da €50.000 con dividend yield del 2%: €1.000/anno non tracciati',
    '→ In 20 anni a 7% di crescita: oltre €40.000 di rendimento invisibile',
  ],
  e3Body3: 'Nota che nell\'immagine delle transazioni sopra, il dividendo Apple del 18 gennaio 2024 (€25,00) è chiaramente registrato come voce separata. Senza questo livello di dettaglio, il tuo calcolo di performance è incompleto.',
  e3FixBody: 'Registra ogni pagamento di dividendo come transazione separata. Se li reinvesti, registra anche l\'acquisto corrispondente. DonkyCapital include i dividendi nel calcolo del rendimento totale e del P&L realizzato automaticamente, senza configurazione aggiuntiva.',
  e4Title: 'Ignorare il Rischio di Cambio Valuta',
  e4Body1: 'La maggior parte degli investitori europei ha in portafoglio ETF o azioni denominate in dollari — S&P 500, Nasdaq, azioni tech americane. Ma molti non tengono conto di quello che succede quando il cambio EUR/USD si muove significativamente.',
  e4ExTitle: 'Esempio pratico — doppio effetto valutario',
  e4ExItems: [
    '→ Acquisti un ETF S&P 500 quando EUR/USD = 1,05',
    '→ L\'ETF sale del +20% in USD nel corso dell\'anno',
    '→ Nel frattempo EUR/USD sale a 1,15 (EUR si apprezza del ~9,5%)',
    '→ Il tuo rendimento in EUR: 1,20 / 1,095 − 1 = +9,6% (non +20%)',
    '→ Hai "perso" oltre 10 punti percentuali di rendimento a causa del cambio',
  ],
  e4Body2: 'Il fenomeno vale anche al contrario: un EUR debole amplifica i guadagni su asset in USD. L\'importante è sapere quanta esposizione valutaria hai — e monitorarla nel tempo.',
  e4ImgAlt: 'DonkyCapital — allocazione per asset class con breakdown geografico',
  e4ImgCaption: 'Conoscere la composizione del portafoglio per asset class e area geografica aiuta a valutare l\'esposizione valutaria.',
  e4FixBody: 'Monitora l\'allocazione valutaria del tuo portafoglio e calcola sempre il rendimento nella tua valuta di riferimento (EUR). Considera se una quota di hedging valutario è appropriata per la tua strategia — specialmente se hai un\'esposizione &gt;50% in USD.',
  e5Title: 'Non Considerare l\'Inflazione',
  e5Body1: 'Il portafoglio è cresciuto del +10% quest\'anno. Ottimo risultato, vero? Dipende. Se l\'inflazione nello stesso periodo è stata del 4%, il tuo rendimento reale — quello che conta davvero in termini di potere d\'acquisto — è stato solo del +5,8%.',
  e5Body2: 'Negli anni 2021-2023, l\'inflazione europea ha toccato picchi del 10%. Un portafoglio che avesse restituito il +7% nel 2022 avrebbe in realtà perso potere d\'acquisto in termini reali. Ignorare questo dato significa sopravvalutare sistematicamente il proprio patrimonio.',
  e5ExTitle: 'Formula del rendimento reale',
  e5Formula: 'Rendimento reale = [(1 + rendimento nominale) / (1 + inflazione)] − 1',
  e5ExItems: [
    '→ Rendimento nominale: +10% | Inflazione: +4%',
    '→ Rendimento reale = (1,10 / 1,04) − 1 = +5,77%',
    '→ Rendimento nominale: +7% | Inflazione: +10% (2022)',
    '→ Rendimento reale = (1,07 / 1,10) − 1 = −2,7% (perdita reale!)',
  ],
  e5ImgAlt: 'DonkyCapital — grafico andamento portafoglio nel tempo',
  e5ImgCaption: 'Il grafico di performance mostra l\'andamento nominale — ricorda di confrontarlo con l\'inflazione del periodo per ottenere il rendimento reale.',
  e5FixBody: 'Abituati a calcolare il rendimento reale sottraendo l\'inflazione del periodo dal rendimento nominale. Per valutazioni a lungo termine, usa sempre l\'HICP (Indice dei Prezzi al Consumo Armonizzato) europeo come riferimento.',
  bonusTitle: 'Bonus: Altri Errori Frequenti',
  bonusIntro: 'Oltre ai cinque errori principali, ecco altri comportamenti che compromettono la qualità del portfolio tracking:',
  bonusItems: [
    ['Tracciare solo un broker', 'Con più conti su piattaforme diverse, chi aggrega solo il principale non vede l\'immagine completa. La vera performance è quella del portafoglio consolidato. Approfondisci nella guida al tracking multi-broker.'],
    ['Aggiornare raramente i dati', 'Un foglio Excel aggiornato una volta al mese non permette di intercettare derive di allocazione in tempo reale.'],
    ['Confondere P&L realizzato e non realizzato', 'Il guadagno sulla carta non è guadagno finché non vendi. Trattarli come equivalenti porta a decisioni errate su quando liquidare una posizione.'],
    ['Non considerare la liquidità in portafoglio', 'La liquidità disponibile è capitale che non rende. Non includerla nel calcolo distorce l\'allocazione reale e riduce artificialmente la performance percentuale.'],
    ['Ignorare le tasse sulle plusvalenze', 'In molti paesi le plusvalenze realizzate sono tassate. Non considerare questa aliquota nel calcolo del rendimento netto porta a sopravvalutare il risultato effettivo.'],
  ],
  checklistTitle: 'Checklist Completa: Stai Commettendo Questi Errori?',
  checklistIntro: 'Usa questa checklist per verificare la qualità del tuo attuale sistema di tracking:',
  checklistItems: [
    'Registro ogni transazione con la commissione esatta inclusa',
    'Uso TWRR (non ROI semplice) per confrontarmi con i benchmark',
    'Uso MWRR/IRR per capire il rendimento effettivo sul mio capitale',
    'Registro ogni dividendo ricevuto come transazione separata',
    'Reinvesto i dividendi e registro il relativo acquisto',
    'Conosco la mia esposizione valutaria totale (% in USD, GBP, ecc.)',
    'Calcolo il rendimento reale sottraendo l\'inflazione del periodo',
    'Aggrego tutti i broker in una vista consolidata',
    'Tengo separati P&L realizzato e non realizzato',
    'Includo la liquidità nel calcolo dell\'allocazione totale',
    'Considero l\'impatto fiscale sulle plusvalenze nel rendimento netto',
  ],
  checklistFooter: 'Se stai mettendo una spunta a tutti i punti manualmente su Excel, considera che DonkyCapital gestisce tutto questo in automatico.',
  toolsTitle: 'Tool che Prevengono Questi Errori Automaticamente',
  toolsIntro: 'La soluzione più efficace per tutti e cinque gli errori descritti è un software di portfolio tracking che gestisca questi aspetti automaticamente. Vediamo come DonkyCapital affronta ciascuno di essi.',
  toolsCards: [
    ['Commissioni', 'Ogni importazione CSV include le commissioni di transazione nel calcolo del rendimento netto.'],
    ['Rendimento corretto', 'TWRR, TWRR annualizzato e MWRR calcolati automaticamente per ogni portafoglio.'],
    ['Dividendi', 'I dividendi vengono riconosciuti automaticamente dall\'importazione e inclusi nel P&L realizzato.'],
    ['Valuta', 'Performance mostrata nella valuta di riferimento del portafoglio con conversione automatica.'],
  ],
  toolsImgAlt: 'DonkyCapital — Realized P/L, Unrealized P/L e Total P/L per posizione',
  toolsImgCaption: 'DonkyCapital separa automaticamente P&L realizzato e non realizzato per ogni posizione.',
  toolsBody2: 'DonkyCapital supporta l\'importazione da Fineco, DeGiro, Scalable Capital, Directa e altri broker europei. Per sapere come importare i dati dal tuo broker specifico, consulta le nostre guide:',
  toolsLinkLabels: [
    'Come importare il portafoglio da DeGiro',
    'Come esportare le transazioni da Scalable Capital',
    'Guida al tracking multi-broker',
  ],
  faqTitle: 'Domande Frequenti',
  faqItems: [
    {
      q: 'Questi errori si applicano anche a chi investe solo in ETF?',
      a: 'Sì, tutti e cinque si applicano agli investitori in ETF. Le commissioni di acquisto, il calcolo del rendimento con versamenti periodici (PAC), i dividendi distribuiti, l\'esposizione valutaria degli ETF a replica fisica e l\'impatto dell\'inflazione sul rendimento reale sono aspetti rilevanti per qualsiasi investitore, ETF inclusi.',
    },
    {
      q: 'L\'errore sulle commissioni vale anche per broker con "zero commission"?',
      a: 'Sì. I broker zero commission spesso recuperano i costi tramite spread sul prezzo di esecuzione, prestito titoli o conversione valuta. Anche questi costi impliciti andrebbero stimati e inclusi nell\'analisi del rendimento netto.',
    },
    {
      q: 'Quanto spesso dovrei controllare questi parametri?',
      a: 'Per le commissioni e i dividendi: ad ogni transazione. Per rendimento e allocazione: almeno mensilmente. Per l\'effetto cambio e l\'inflazione: trimestralmente è sufficiente per la maggior parte degli investitori retail.',
    },
    {
      q: 'È possibile correggere questi errori su un portafoglio già esistente?',
      a: 'Sì, ma richiede di ricostruire lo storico delle transazioni con tutti i dettagli mancanti. Importando il CSV storico del tuo broker su DonkyCapital, il sistema ricalcola automaticamente tutte le metriche includendo dividendi e commissioni presenti nell\'export.',
    },
  ],
  ctaTitle: 'Elimina Questi Errori dal Tuo Portafoglio',
  ctaBody: 'DonkyCapital gestisce automaticamente commissioni, dividendi, cambio valuta e metriche di rendimento corrette — così puoi concentrarti sulle decisioni di investimento, non sui calcoli.',
  ctaButton: 'Accedi a DonkyCapital Gratis',
  ctaFooter: 'Early Access gratuito · Nessuna carta di credito richiesta',
}

const en: CommonMistakesTranslations = {
  badge: 'Guide · Common Mistakes',
  h1: '5 Fatal Portfolio Tracking Mistakes',
  h1Highlight: '(That Cost Thousands of Euros)',
  intro1: 'Analyzing hundreds of portfolios imported into DonkyCapital, a recurring pattern emerges: most retail investors make the same systematic mistakes when tracking their investments. Mistakes that seem harmless individually but, accumulated over time, can cost thousands of euros in lost returns or wrong decisions based on incorrect data.',
  intro2: 'In this article we analyze the 5 most critical mistakes, with concrete numerical examples and practical solutions. For each one we\'ll also show how DonkyCapital prevents them automatically.',
  tocTitle: 'Mistakes index',
  tocItems: [
    'Ignoring transaction fees',
    'Calculating returns the wrong way',
    'Not tracking reinvested dividends',
    'Ignoring currency risk',
    'Not accounting for inflation',
    'Bonus: other common mistakes',
    'Full checklist',
    'Tools that prevent mistakes automatically',
  ],
  fixTitle: 'How to avoid it',
  e1Title: 'Ignoring Transaction Fees',
  e1Body1: 'Transaction fees seem negligible individually — €2, €5, €10 per trade. But summed over time and compared to the capital they could have generated if reinvested, they become a significant cost that most investors never track.',
  e1ExTitle: 'Real impact — numerical example',
  e1ExItems: [
    '→ Monthly ETF accumulation plan: 2 trades/month at €5 each = €120/year',
    '→ On a €30,000 portfolio, €120/year = −0.40% of real return every year',
    '→ Over 20 years, that €120/year invested at 7% = over €5,200 of lost capital',
    '→ Adding the average TER of active ETFs (1.5% vs 0.2% for a passive ETF): the difference on €30,000 over 20 years exceeds €15,000',
  ],
  e1Body2: 'The problem isn\'t just the cost itself: without tracking them, you can\'t calculate the true net return and compare it correctly across different brokers or financial products.',
  e1ImgAlt: 'DonkyCapital — transaction list with purchases, sales and dividends',
  e1ImgCaption: 'The complete transaction log is the starting point for correctly tracking fees and costs.',
  e1FixBody: 'Record every transaction including the exact commission cost. DonkyCapital automatically aggregates costs into the net return calculation — so you can see the real cost of your portfolio, not just the gross gain.',
  e2Title: 'Calculating Returns the Wrong Way',
  e2Body1: 'Your broker shows +83% performance. But are you really earning +83% per year? Almost certainly not. The number brokers show by default is the simple ROI: the difference between current value and total invested capital, without accounting for when you invested the individual amounts.',
  e2Body2: 'If you\'ve made periodic contributions over the years, simple ROI can be very misleading compared to the true annualized return.',
  e2ExTitle: 'Practical example',
  e2ExItems: [
    '→ Portfolio with TWRR +83% since the opening date',
    '→ The same portfolio has an annualized TWRR of +33.5% per year',
    '→ And a MWRR of +56% — the actual return on your specific capital',
    '→ An investor who only reads "+83%" and thinks they\'re making +83% a year makes a huge mistake in their projections',
  ],
  e2ImgAlt: 'DonkyCapital — performance metrics with TWRR and annualized TWRR',
  e2ImgCaption: 'DonkyCapital shows TWRR, annualized TWRR and gross return separately — so you\'ll never confuse the data.',
  e2FixBefore: 'Always use ',
  e2FixMiddle: ' to compare against benchmarks and ',
  e2FixMiddle2: ' to understand the actual return on your capital. Explore the differences in our',
  e2FixLinkText: 'guide to ROI, TWR and IRR',
  e3Title: 'Not Tracking Reinvested Dividends',
  e3Body1: 'Dividends are often considered an "extra" — a bonus that arrives every quarter and gets cashed in without being properly accounted for. It\'s one of the most costly mistakes in the long run.',
  e3Body2: 'Historically, dividends have contributed to over 40% of the total return of the S&P 500 over the last 50 years. Not tracking them means enormously underestimating real performance and losing visibility into the effect of compound interest over the long term.',
  e3ExTitle: 'Real impact — numerical example',
  e3ExItems: [
    '→ You hold 100 Apple shares. Quarterly dividend: €0.25/share = €25 each quarter',
    '→ €100/year reinvested in Apple for 15 years at 12% annual = €547 additional',
    '→ On a €50,000 portfolio with 2% dividend yield: €1,000/year untracked',
    '→ Over 20 years at 7% growth: over €40,000 of invisible return',
  ],
  e3Body3: 'Note that in the transaction image above, the Apple dividend of January 18, 2024 (€25.00) is clearly recorded as a separate entry. Without this level of detail, your performance calculation is incomplete.',
  e3FixBody: 'Record every dividend payment as a separate transaction. If you reinvest them, also record the corresponding purchase. DonkyCapital includes dividends in the total return and realized P&L calculation automatically, without additional configuration.',
  e4Title: 'Ignoring Currency Risk',
  e4Body1: 'Most European investors hold ETFs or stocks denominated in dollars — S&P 500, Nasdaq, American tech stocks. But many don\'t account for what happens when the EUR/USD exchange rate moves significantly.',
  e4ExTitle: 'Practical example — double currency effect',
  e4ExItems: [
    '→ You buy an S&P 500 ETF when EUR/USD = 1.05',
    '→ The ETF rises +20% in USD during the year',
    '→ Meanwhile EUR/USD rises to 1.15 (EUR appreciates ~9.5%)',
    '→ Your return in EUR: 1.20 / 1.095 − 1 = +9.6% (not +20%)',
    '→ You "lost" over 10 percentage points of return due to the exchange rate',
  ],
  e4Body2: 'The phenomenon also works in reverse: a weak EUR amplifies gains on USD assets. The important thing is knowing how much currency exposure you have — and monitoring it over time.',
  e4ImgAlt: 'DonkyCapital — allocation by asset class with geographic breakdown',
  e4ImgCaption: 'Knowing the portfolio composition by asset class and geography helps assess currency exposure.',
  e4FixBody: 'Monitor your portfolio\'s currency allocation and always calculate returns in your reference currency (EUR). Consider whether a currency hedging quota is appropriate for your strategy — especially if you have >50% exposure in USD.',
  e5Title: 'Not Accounting for Inflation',
  e5Body1: 'The portfolio grew +10% this year. Great result, right? It depends. If inflation over the same period was 4%, your real return — the one that truly matters in terms of purchasing power — was only +5.8%.',
  e5Body2: 'In the years 2021-2023, European inflation hit peaks of 10%. A portfolio that returned +7% in 2022 would have actually lost purchasing power in real terms. Ignoring this means systematically overestimating your wealth.',
  e5ExTitle: 'Real return formula',
  e5Formula: 'Real return = [(1 + nominal return) / (1 + inflation)] − 1',
  e5ExItems: [
    '→ Nominal return: +10% | Inflation: +4%',
    '→ Real return = (1.10 / 1.04) − 1 = +5.77%',
    '→ Nominal return: +7% | Inflation: +10% (2022)',
    '→ Real return = (1.07 / 1.10) − 1 = −2.7% (real loss!)',
  ],
  e5ImgAlt: 'DonkyCapital — portfolio performance chart over time',
  e5ImgCaption: 'The performance chart shows nominal performance — remember to compare it with the inflation of the period to obtain the real return.',
  e5FixBody: 'Make it a habit to calculate real return by subtracting the period\'s inflation from the nominal return. For long-term evaluations, always use the European HICP (Harmonised Index of Consumer Prices) as a reference.',
  bonusTitle: 'Bonus: Other Common Mistakes',
  bonusIntro: 'Beyond the five main mistakes, here are other behaviors that compromise portfolio tracking quality:',
  bonusItems: [
    ['Tracking only one broker', 'With multiple accounts on different platforms, anyone who only aggregates the main one doesn\'t see the full picture. True performance is that of the consolidated portfolio. Learn more in the multi-broker tracking guide.'],
    ['Updating data infrequently', 'An Excel sheet updated once a month doesn\'t allow you to detect allocation drifts in real time.'],
    ['Confusing realized and unrealized P&L', 'Paper gains aren\'t gains until you sell. Treating them as equivalent leads to wrong decisions about when to liquidate a position.'],
    ['Not including cash in the portfolio', 'Available cash is capital that isn\'t earning. Not including it in the calculation distorts the real allocation and artificially reduces percentage performance.'],
    ['Ignoring capital gains taxes', 'In many countries, realized capital gains are taxed. Not considering this rate in the net return calculation leads to overestimating the actual result.'],
  ],
  checklistTitle: 'Full Checklist: Are You Making These Mistakes?',
  checklistIntro: 'Use this checklist to verify the quality of your current tracking system:',
  checklistItems: [
    'I record every transaction with the exact commission included',
    'I use TWRR (not simple ROI) to compare against benchmarks',
    'I use MWRR/IRR to understand the actual return on my capital',
    'I record every dividend received as a separate transaction',
    'I reinvest dividends and record the corresponding purchase',
    'I know my total currency exposure (% in USD, GBP, etc.)',
    'I calculate real return by subtracting the period\'s inflation',
    'I aggregate all brokers in a consolidated view',
    'I keep realized and unrealized P&L separate',
    'I include cash in the total allocation calculation',
    'I consider the tax impact on capital gains in net return',
  ],
  checklistFooter: 'If you\'re manually checking all these points on Excel, consider that DonkyCapital handles all of this automatically.',
  toolsTitle: 'Tools That Prevent These Mistakes Automatically',
  toolsIntro: 'The most effective solution for all five described mistakes is portfolio tracking software that handles these aspects automatically. Let\'s see how DonkyCapital addresses each of them.',
  toolsCards: [
    ['Fees', 'Every CSV import includes transaction fees in the net return calculation.'],
    ['Correct returns', 'TWRR, annualized TWRR and MWRR calculated automatically for every portfolio.'],
    ['Dividends', 'Dividends are automatically recognized from the import and included in realized P&L.'],
    ['Currency', 'Performance shown in the portfolio reference currency with automatic conversion.'],
  ],
  toolsImgAlt: 'DonkyCapital — Realized P/L, Unrealized P/L and Total P/L per position',
  toolsImgCaption: 'DonkyCapital automatically separates realized and unrealized P&L for each position.',
  toolsBody2: 'DonkyCapital supports import from Fineco, DeGiro, Scalable Capital, Directa and other European brokers. To learn how to import data from your specific broker, check our guides:',
  toolsLinkLabels: [
    'How to import your DeGiro portfolio',
    'How to export Scalable Capital transactions',
    'Multi-broker tracking guide',
  ],
  faqTitle: 'Frequently Asked Questions',
  faqItems: [
    {
      q: 'Do these mistakes apply to ETF-only investors too?',
      a: 'Yes, all five apply to ETF investors. Purchase commissions, return calculation with periodic contributions (DCA), distributed dividends, currency exposure of physical replication ETFs, and the impact of inflation on real return are all relevant aspects for any investor, ETFs included.',
    },
    {
      q: 'Does the commission mistake apply to "zero commission" brokers too?',
      a: 'Yes. Zero commission brokers often recover costs through execution price spread, securities lending, or currency conversion. These implicit costs should also be estimated and included in the net return analysis.',
    },
    {
      q: 'How often should I check these parameters?',
      a: 'For fees and dividends: at every transaction. For returns and allocation: at least monthly. For currency effects and inflation: quarterly is sufficient for most retail investors.',
    },
    {
      q: 'Can these mistakes be corrected on an existing portfolio?',
      a: 'Yes, but it requires reconstructing the transaction history with all missing details. By importing your broker\'s historical CSV into DonkyCapital, the system automatically recalculates all metrics including dividends and fees present in the export.',
    },
  ],
  ctaTitle: 'Eliminate These Mistakes from Your Portfolio',
  ctaBody: 'DonkyCapital automatically handles fees, dividends, currency exchange, and correct return metrics — so you can focus on investment decisions, not calculations.',
  ctaButton: 'Access DonkyCapital for Free',
  ctaFooter: 'Free Early Access · No credit card required',
}

const de: CommonMistakesTranslations = {
  badge: 'Leitfaden · Häufige Fehler',
  h1: '5 Fatale Fehler beim Portfolio-Tracking',
  h1Highlight: '(Die Tausende Euro Kosten)',
  intro1: 'Bei der Analyse hunderter Portfolios, die in DonkyCapital importiert wurden, zeigt sich ein wiederkehrendes Muster: Die meisten Privatanleger machen beim Tracking ihrer Investitionen dieselben systematischen Fehler. Fehler, die einzeln harmlos wirken, aber über die Zeit summiert tausende Euro an entgangenem Ertrag oder falschen Entscheidungen aufgrund falscher Daten kosten können.',
  intro2: 'In diesem Artikel analysieren wir die 5 kritischsten Fehler mit konkreten Zahlenbeispielen und praktischen Lösungen. Für jeden zeigen wir auch, wie DonkyCapital diese automatisch verhindert.',
  tocTitle: 'Fehlerübersicht',
  tocItems: [
    'Transaktionskosten ignorieren',
    'Rendite falsch berechnen',
    'Reinvestierte Dividenden nicht tracken',
    'Währungsrisiko ignorieren',
    'Inflation nicht berücksichtigen',
    'Bonus: weitere häufige Fehler',
    'Vollständige Checkliste',
    'Tools, die Fehler automatisch verhindern',
  ],
  fixTitle: 'So vermeidest du es',
  e1Title: 'Transaktionskosten Ignorieren',
  e1Body1: 'Transaktionskosten erscheinen einzeln vernachlässigbar — €2, €5, €10 pro Trade. Aber über die Zeit summiert und verglichen mit dem Kapital, das sie bei Reinvestition hätten erwirtschaften können, werden sie zu erheblichen Kosten, die die meisten Anleger nie tracken.',
  e1ExTitle: 'Realer Einfluss — Zahlenbeispiel',
  e1ExItems: [
    '→ Monatlicher ETF-Sparplan: 2 Trades/Monat à €5 = €120/Jahr',
    '→ Bei einem Portfolio von €30.000 entsprechen €120/Jahr = −0,40% echter Rendite pro Jahr',
    '→ In 20 Jahren: €120/Jahr bei 7% investiert = über €5.200 verlorenes Kapital',
    '→ Hinzu kommt die durchschnittliche TER aktiver ETFs (1,5% vs. 0,2% bei passiven ETFs): Der Unterschied bei €30.000 über 20 Jahre überschreitet €15.000',
  ],
  e1Body2: 'Das Problem liegt nicht nur im Kostenbetrag selbst: Ohne Tracking kann die echte Nettorendite nicht berechnet und nicht korrekt zwischen verschiedenen Brokern oder Finanzprodukten verglichen werden.',
  e1ImgAlt: 'DonkyCapital — Transaktionsliste mit Käufen, Verkäufen und Dividenden',
  e1ImgCaption: 'Das vollständige Transaktionsprotokoll ist der Ausgangspunkt für die korrekte Erfassung von Gebühren und Kosten.',
  e1FixBody: 'Erfasse jede Transaktion einschließlich der genauen Gebühren. DonkyCapital aggregiert die Kosten automatisch in der Nettorenditeberechnung — so siehst du die echten Kosten deines Portfolios, nicht nur den Bruttogewinn.',
  e2Title: 'Rendite Falsch Berechnen',
  e2Body1: 'Dein Broker zeigt +83% Performance. Aber verdienst du wirklich +83% pro Jahr? Fast sicher nicht. Die Zahl, die Broker standardmäßig anzeigen, ist der einfache ROI: die Differenz zwischen aktuellem Wert und gesamtem investiertem Kapital, ohne zu berücksichtigen, wann die einzelnen Beträge investiert wurden.',
  e2Body2: 'Wenn du über die Jahre periodische Einzahlungen vorgenommen hast, kann der einfache ROI im Vergleich zur tatsächlichen annualisierten Rendite sehr irreführend sein.',
  e2ExTitle: 'Praktisches Beispiel',
  e2ExItems: [
    '→ Portfolio mit TWRR +83% seit Eröffnung',
    '→ Dasselbe Portfolio hat einen annualisierten TWRR von +33,5% pro Jahr',
    '→ Und einen MWRR von +56% — die tatsächliche Rendite auf dein spezifisches Kapital',
    '→ Ein Anleger, der nur "+83%" liest und glaubt, +83% pro Jahr zu machen, begeht einen riesigen Fehler bei seinen Projektionen',
  ],
  e2ImgAlt: 'DonkyCapital — Performancekennzahlen mit TWRR und annualisiertem TWRR',
  e2ImgCaption: 'DonkyCapital zeigt TWRR, annualisierten TWRR und Bruttorendite getrennt — so verwechselst du die Daten nie.',
  e2FixBefore: 'Verwende immer ',
  e2FixMiddle: ' für den Benchmark-Vergleich und ',
  e2FixMiddle2: ' um die tatsächliche Rendite auf dein Kapital zu verstehen. Tauche tiefer in die Unterschiede in unserem',
  e2FixLinkText: 'Leitfaden zu ROI, TWR und IRR',
  e3Title: 'Reinvestierte Dividenden Nicht Tracken',
  e3Body1: 'Dividenden werden oft als "Extra" betrachtet — ein Bonus, der quartalsweise eintrifft und eingesteckt wird, ohne korrekt verbucht zu werden. Dies ist einer der kostspieligsten Fehler auf lange Sicht.',
  e3Body2: 'Historisch haben Dividenden zu über 40% der Gesamtrendite des S&P 500 in den letzten 50 Jahren beigetragen. Sie nicht zu tracken bedeutet, die tatsächliche Performance enorm zu unterschätzen und die Sichtbarkeit auf den Zinseszinseffekt langfristig zu verlieren.',
  e3ExTitle: 'Realer Einfluss — Zahlenbeispiel',
  e3ExItems: [
    '→ Du hältst 100 Apple-Aktien. Quartalsdividende: €0,25/Aktie = €25 pro Quartal',
    '→ €100/Jahr reinvestiert in Apple für 15 Jahre bei 12% p.a. = €547 zusätzlich',
    '→ Bei einem €50.000-Portfolio mit 2% Dividendenrendite: €1.000/Jahr nicht getrackt',
    '→ In 20 Jahren bei 7% Wachstum: über €40.000 unsichtbare Rendite',
  ],
  e3Body3: 'Beachte, dass in der obigen Transaktionsübersicht die Apple-Dividende vom 18. Januar 2024 (€25,00) klar als separater Eintrag verbucht ist. Ohne diesen Detailgrad ist die Performanceberechnung unvollständig.',
  e3FixBody: 'Erfasse jede Dividendenzahlung als separate Transaktion. Falls du reinvestierst, erfasse auch den entsprechenden Kauf. DonkyCapital berücksichtigt Dividenden automatisch in der Gesamtrendite- und realisierten GuV-Berechnung, ohne zusätzliche Konfiguration.',
  e4Title: 'Währungsrisiko Ignorieren',
  e4Body1: 'Die meisten europäischen Anleger halten ETFs oder Aktien in Dollar — S&P 500, Nasdaq, amerikanische Tech-Aktien. Aber viele berücksichtigen nicht, was passiert, wenn sich der EUR/USD-Wechselkurs signifikant bewegt.',
  e4ExTitle: 'Praktisches Beispiel — doppelter Währungseffekt',
  e4ExItems: [
    '→ Du kaufst einen S&P 500 ETF bei EUR/USD = 1,05',
    '→ Der ETF steigt +20% in USD im Laufe des Jahres',
    '→ Gleichzeitig steigt EUR/USD auf 1,15 (EUR wertet ca. 9,5% auf)',
    '→ Deine Rendite in EUR: 1,20 / 1,095 − 1 = +9,6% (nicht +20%)',
    '→ Du hast über 10 Prozentpunkte Rendite durch den Wechselkurs "verloren"',
  ],
  e4Body2: 'Das Phänomen gilt auch umgekehrt: Ein schwacher EUR verstärkt Gewinne auf USD-Anlagen. Wichtig ist, zu wissen, wie viel Währungsexposition du hast — und sie im Laufe der Zeit zu überwachen.',
  e4ImgAlt: 'DonkyCapital — Allokation nach Asset-Klasse mit geografischer Aufschlüsselung',
  e4ImgCaption: 'Die Portfoliozusammensetzung nach Asset-Klasse und Geografie zu kennen hilft, die Währungsexposition zu beurteilen.',
  e4FixBody: 'Überwache die Währungsallokation deines Portfolios und berechne die Rendite immer in deiner Referenzwährung (EUR). Überlege, ob ein Anteil an Währungsabsicherung für deine Strategie angemessen ist — besonders wenn du >50% Exposition in USD hast.',
  e5Title: 'Inflation Nicht Berücksichtigen',
  e5Body1: 'Das Portfolio ist dieses Jahr um +10% gewachsen. Tolles Ergebnis, oder? Es kommt darauf an. Wenn die Inflation im gleichen Zeitraum 4% betrug, war deine reale Rendite — die einzige, die wirklich in Kaufkrafttermen zählt — nur +5,8%.',
  e5Body2: 'In den Jahren 2021-2023 erreichte die europäische Inflation Spitzen von 10%. Ein Portfolio, das 2022 +7% zurückgegeben hätte, hätte in realen Kaufkrafttermen tatsächlich an Wert verloren. Dies zu ignorieren bedeutet, das eigene Vermögen systematisch zu überschätzen.',
  e5ExTitle: 'Realrendite-Formel',
  e5Formula: 'Realrendite = [(1 + Nominalrendite) / (1 + Inflation)] − 1',
  e5ExItems: [
    '→ Nominalrendite: +10% | Inflation: +4%',
    '→ Realrendite = (1,10 / 1,04) − 1 = +5,77%',
    '→ Nominalrendite: +7% | Inflation: +10% (2022)',
    '→ Realrendite = (1,07 / 1,10) − 1 = −2,7% (realer Verlust!)',
  ],
  e5ImgAlt: 'DonkyCapital — Portfolio-Performancediagramm über die Zeit',
  e5ImgCaption: 'Das Performance-Diagramm zeigt die nominale Entwicklung — denke daran, sie mit der Inflation des Zeitraums zu vergleichen, um die reale Rendite zu erhalten.',
  e5FixBody: 'Gewöhne dich daran, die Realrendite zu berechnen, indem du die Inflation des Zeitraums von der Nominalrendite subtrahierst. Verwende für langfristige Bewertungen immer den europäischen HVPI (Harmonisierter Verbraucherpreisindex) als Referenz.',
  bonusTitle: 'Bonus: Weitere Häufige Fehler',
  bonusIntro: 'Neben den fünf Hauptfehlern gibt es weitere Verhaltensweisen, die die Qualität des Portfolio-Trackings beeinträchtigen:',
  bonusItems: [
    ['Nur einen Broker tracken', 'Wer mehrere Konten auf verschiedenen Plattformen hat und nur das Hauptkonto aggregiert, sieht nicht das vollständige Bild. Die echte Performance ist die des konsolidierten Portfolios. Mehr dazu im Multi-Broker-Tracking-Leitfaden.'],
    ['Daten selten aktualisieren', 'Eine Excel-Tabelle, die einmal im Monat aktualisiert wird, erlaubt es nicht, Allokationsabweichungen in Echtzeit zu erkennen.'],
    ['Realisierten und unrealisierten GuV verwechseln', 'Papiergewinne sind keine Gewinne, bis man verkauft. Sie als gleichwertig zu behandeln führt zu falschen Entscheidungen darüber, wann eine Position aufgelöst werden soll.'],
    ['Liquidität nicht im Portfolio berücksichtigen', 'Verfügbare Liquidität ist Kapital, das keine Rendite erzielt. Sie nicht in die Berechnung einzubeziehen verzerrt die reale Allokation und reduziert künstlich die prozentuale Performance.'],
    ['Kapitalertragssteuern ignorieren', 'In vielen Ländern werden realisierte Kapitalgewinne besteuert. Diese Steuerquote nicht in der Nettorenditeberechnung zu berücksichtigen führt zu einer Überschätzung des tatsächlichen Ergebnisses.'],
  ],
  checklistTitle: 'Vollständige Checkliste: Machst Du Diese Fehler?',
  checklistIntro: 'Verwende diese Checkliste, um die Qualität deines aktuellen Tracking-Systems zu überprüfen:',
  checklistItems: [
    'Ich erfasse jede Transaktion mit den genauen Gebühren',
    'Ich verwende TWRR (nicht einfachen ROI) für den Benchmark-Vergleich',
    'Ich verwende MWRR/IRR, um die tatsächliche Rendite auf mein Kapital zu verstehen',
    'Ich erfasse jede Dividende als separate Transaktion',
    'Ich reinvestiere Dividenden und erfasse den entsprechenden Kauf',
    'Ich kenne meine gesamte Währungsexposition (% in USD, GBP, usw.)',
    'Ich berechne die Realrendite durch Abzug der Inflation des Zeitraums',
    'Ich aggregiere alle Broker in einer konsolidierten Ansicht',
    'Ich halte realisierten und unrealisierten GuV getrennt',
    'Ich beziehe Liquidität in die Berechnung der Gesamtallokation ein',
    'Ich berücksichtige die steuerliche Auswirkung auf Kapitalgewinne in der Nettorendite',
  ],
  checklistFooter: 'Wenn du alle diese Punkte manuell in Excel abhakst, bedenke, dass DonkyCapital das alles automatisch erledigt.',
  toolsTitle: 'Tools, Die Diese Fehler Automatisch Verhindern',
  toolsIntro: 'Die effektivste Lösung für alle fünf beschriebenen Fehler ist eine Portfolio-Tracking-Software, die diese Aspekte automatisch behandelt. Sehen wir uns an, wie DonkyCapital jeden einzelnen angeht.',
  toolsCards: [
    ['Gebühren', 'Jeder CSV-Import berücksichtigt Transaktionsgebühren in der Nettorenditeberechnung.'],
    ['Korrekte Rendite', 'TWRR, annualisierter TWRR und MWRR werden automatisch für jedes Portfolio berechnet.'],
    ['Dividenden', 'Dividenden werden beim Import automatisch erkannt und in den realisierten GuV einbezogen.'],
    ['Währung', 'Performance wird in der Referenzwährung des Portfolios mit automatischer Konvertierung angezeigt.'],
  ],
  toolsImgAlt: 'DonkyCapital — realisierter GuV, nicht realisierter GuV und Gesamt-GuV pro Position',
  toolsImgCaption: 'DonkyCapital trennt automatisch realisierten und unrealisierten GuV für jede Position.',
  toolsBody2: 'DonkyCapital unterstützt den Import von Fineco, DeGiro, Scalable Capital, Directa und anderen europäischen Brokern. Wie du die Daten deines spezifischen Brokers importierst, erfährst du in unseren Leitfäden:',
  toolsLinkLabels: [
    'DeGiro-Daten importieren',
    'Scalable Capital Transaktionen exportieren',
    'Multi-Broker-Tracking-Leitfaden',
  ],
  faqTitle: 'Häufig Gestellte Fragen',
  faqItems: [
    {
      q: 'Gelten diese Fehler auch für ETF-Anleger?',
      a: 'Ja, alle fünf gelten für ETF-Anleger. Kaufgebühren, Renditenberechnung bei periodischen Einzahlungen (Sparplan), ausgeschüttete Dividenden, Währungsexposition von physisch replizierenden ETFs und der Einfluss der Inflation auf die Realrendite sind für jeden Anleger relevant, auch ETF-Anleger.',
    },
    {
      q: 'Gilt der Gebührenfehler auch bei "Zero-Commission"-Brokern?',
      a: 'Ja. Zero-Commission-Broker erholen ihre Kosten oft durch Spreads beim Ausführungspreis, Wertpapierleihe oder Währungskonvertierung. Auch diese impliziten Kosten sollten geschätzt und in die Nettorenditenanalyse einbezogen werden.',
    },
    {
      q: 'Wie oft sollte ich diese Parameter überprüfen?',
      a: 'Für Gebühren und Dividenden: bei jeder Transaktion. Für Rendite und Allokation: mindestens monatlich. Für Währungseffekte und Inflation: quartalsweise ist für die meisten Privatanleger ausreichend.',
    },
    {
      q: 'Können diese Fehler bei einem bestehenden Portfolio korrigiert werden?',
      a: 'Ja, aber es erfordert, die Transaktionshistorie mit allen fehlenden Details zu rekonstruieren. Durch Import des historischen CSVs deines Brokers in DonkyCapital berechnet das System automatisch alle Kennzahlen neu, einschließlich der im Export enthaltenen Dividenden und Gebühren.',
    },
  ],
  ctaTitle: 'Eliminiere Diese Fehler aus Deinem Portfolio',
  ctaBody: 'DonkyCapital verwaltet automatisch Gebühren, Dividenden, Währungsumrechnung und korrekte Renditekennzahlen — damit du dich auf Anlageentscheidungen konzentrieren kannst, nicht auf Berechnungen.',
  ctaButton: 'Kostenlos auf DonkyCapital Zugreifen',
  ctaFooter: 'Kostenloser Early Access · Keine Kreditkarte erforderlich',
}

const fr: CommonMistakesTranslations = {
  badge: 'Guide · Erreurs Fréquentes',
  h1: '5 Erreurs Fatales de Suivi de Portefeuille',
  h1Highlight: "(Qui Coûtent des Milliers d'Euros)",
  intro1: "En analysant des centaines de portefeuilles importés dans DonkyCapital, un schéma récurrent apparaît : la plupart des investisseurs particuliers font les mêmes erreurs systématiques dans le suivi de leurs investissements. Des erreurs qui semblent inoffensives prises isolément mais qui, cumulées dans le temps, peuvent coûter des milliers d'euros en rendement perdu ou en mauvaises décisions prises sur la base de données incorrectes.",
  intro2: "Dans cet article, nous analysons les 5 erreurs les plus critiques, avec des exemples chiffrés concrets et des solutions pratiques. Pour chacune, nous verrons également comment DonkyCapital les prévient automatiquement.",
  tocTitle: 'Index des erreurs',
  tocItems: [
    'Ignorer les frais de transaction',
    'Calculer le rendement incorrectement',
    'Ne pas suivre les dividendes réinvestis',
    'Ignorer le risque de change',
    "Ne pas tenir compte de l'inflation",
    'Bonus : autres erreurs fréquentes',
    'Check-list complète',
    'Outils qui préviennent les erreurs automatiquement',
  ],
  fixTitle: "Comment l'éviter",
  e1Title: 'Ignorer les Frais de Transaction',
  e1Body1: "Les frais de transaction semblent négligeables pris individuellement — €2, €5, €10 par ordre. Mais cumulés dans le temps et comparés au capital qu'ils auraient pu générer s'ils avaient été réinvestis, ils deviennent un coût significatif que la plupart des investisseurs ne suivent jamais.",
  e1ExTitle: 'Impact réel — exemple chiffré',
  e1ExItems: [
    "→ Plan d'accumulation mensuel sur ETF : 2 ordres/mois à €5 chacun = €120/an",
    '→ Sur un portefeuille de €30 000, €120/an = −0,40% de rendement réel chaque année',
    '→ Sur 20 ans, ces €120/an investis à 7% = plus de €5 200 de capital perdu',
    '→ En ajoutant le TER moyen des ETF actifs (1,5% vs 0,2% pour un ETF passif) : la différence sur €30 000 en 20 ans dépasse €15 000',
  ],
  e1Body2: "Le problème n'est pas seulement le coût en lui-même : sans les suivre, impossible de calculer le rendement net réel et de le comparer correctement entre différents courtiers ou produits financiers.",
  e1ImgAlt: 'DonkyCapital — liste de transactions avec achats, ventes et dividendes',
  e1ImgCaption: 'Le registre complet des transactions est le point de départ pour suivre correctement les frais et les coûts.',
  e1FixBody: "Enregistrez chaque transaction en incluant le montant exact des frais. DonkyCapital agrège automatiquement les coûts dans le calcul du rendement net — vous pouvez ainsi voir le vrai coût de votre portefeuille, pas seulement le gain brut.",
  e2Title: 'Calculer le Rendement Incorrectement',
  e2Body1: "Votre courtier affiche +83% de performance. Mais gagnez-vous vraiment +83% par an ? Presque certainement non. Le chiffre que les courtiers affichent par défaut est le ROI simple : la différence entre la valeur actuelle et le capital total investi, sans tenir compte du moment où les montants individuels ont été investis.",
  e2Body2: "Si vous avez effectué des versements périodiques au fil des années, le ROI simple peut être très trompeur par rapport au rendement annualisé réel.",
  e2ExTitle: 'Exemple pratique',
  e2ExItems: [
    "→ Portefeuille avec TWRR +83% depuis la date d'ouverture",
    '→ Le même portefeuille a un TWRR annualisé de +33,5% par an',
    '→ Et un MWRR de +56% — le rendement effectif sur votre capital spécifique',
    "→ Un investisseur qui ne lit que '+83%' et pense faire +83% par an fait une erreur énorme dans ses projections",
  ],
  e2ImgAlt: 'DonkyCapital — métriques de performance avec TWRR et TWRR annualisé',
  e2ImgCaption: 'DonkyCapital affiche TWRR, TWRR annualisé et rendement brut séparément — vous ne confondrez jamais les données.',
  e2FixBefore: 'Utilisez toujours le ',
  e2FixMiddle: ' pour vous comparer aux benchmarks et le ',
  e2FixMiddle2: " pour comprendre le rendement effectif sur votre capital. Approfondissez les différences dans notre",
  e2FixLinkText: 'guide sur le ROI, TWR et IRR',
  e3Title: 'Ne Pas Suivre les Dividendes Réinvestis',
  e3Body1: 'Les dividendes sont souvent considérés comme un "bonus" — un extra qui arrive chaque trimestre et est encaissé sans être correctement comptabilisé. C\'est l\'une des erreurs les plus coûteuses sur le long terme.',
  e3Body2: "Historiquement, les dividendes ont contribué à plus de 40% du rendement total du S&P 500 sur les 50 dernières années. Ne pas les suivre signifie sous-estimer énormément la performance réelle et perdre la visibilité sur l'effet des intérêts composés sur le long terme.",
  e3ExTitle: 'Impact réel — exemple chiffré',
  e3ExItems: [
    '→ Vous détenez 100 actions Apple. Dividende trimestriel : €0,25/action = €25 par trimestre',
    '→ €100/an réinvestis dans Apple pendant 15 ans à 12% annuel = €547 supplémentaires',
    '→ Sur un portefeuille de €50 000 avec un rendement en dividendes de 2% : €1 000/an non suivis',
    '→ Sur 20 ans à 7% de croissance : plus de €40 000 de rendement invisible',
  ],
  e3Body3: "Notez que dans l'image des transactions ci-dessus, le dividende Apple du 18 janvier 2024 (€25,00) est clairement enregistré comme entrée séparée. Sans ce niveau de détail, votre calcul de performance est incomplet.",
  e3FixBody: "Enregistrez chaque paiement de dividende comme une transaction séparée. Si vous les réinvestissez, enregistrez également l'achat correspondant. DonkyCapital inclut les dividendes dans le calcul du rendement total et du P&L réalisé automatiquement, sans configuration supplémentaire.",
  e4Title: 'Ignorer le Risque de Change',
  e4Body1: "La plupart des investisseurs européens détiennent des ETF ou des actions libellés en dollars — S&P 500, Nasdaq, actions tech américaines. Mais beaucoup ne tiennent pas compte de ce qui se passe lorsque le taux de change EUR/USD évolue significativement.",
  e4ExTitle: 'Exemple pratique — double effet de change',
  e4ExItems: [
    "→ Vous achetez un ETF S&P 500 quand EUR/USD = 1,05",
    "→ L'ETF monte de +20% en USD au cours de l'année",
    "→ Pendant ce temps, EUR/USD monte à 1,15 (l'EUR s'apprécie de ~9,5%)",
    '→ Votre rendement en EUR : 1,20 / 1,095 − 1 = +9,6% (pas +20%)',
    '→ Vous avez "perdu" plus de 10 points de pourcentage de rendement à cause du taux de change',
  ],
  e4Body2: "Le phénomène fonctionne aussi en sens inverse : un euro faible amplifie les gains sur les actifs en USD. L'important est de savoir quelle exposition de change vous avez — et de la surveiller dans le temps.",
  e4ImgAlt: "DonkyCapital — allocation par classe d'actifs avec répartition géographique",
  e4ImgCaption: "Connaître la composition du portefeuille par classe d'actifs et zone géographique aide à évaluer l'exposition aux devises.",
  e4FixBody: "Surveillez l'allocation en devises de votre portefeuille et calculez toujours le rendement dans votre devise de référence (EUR). Considérez si une quote-part de couverture de change est appropriée pour votre stratégie — surtout si vous avez une exposition >50% en USD.",
  e5Title: "Ne Pas Tenir Compte de l'Inflation",
  e5Body1: "Le portefeuille a progressé de +10% cette année. Excellent résultat, non ? Cela dépend. Si l'inflation sur la même période était de 4%, votre rendement réel — celui qui compte vraiment en termes de pouvoir d'achat — n'était que de +5,8%.",
  e5Body2: "Dans les années 2021-2023, l'inflation européenne a atteint des pics de 10%. Un portefeuille ayant retourné +7% en 2022 aurait en réalité perdu du pouvoir d'achat en termes réels. Ignorer cette donnée signifie surestimer systématiquement son patrimoine.",
  e5ExTitle: 'Formule du rendement réel',
  e5Formula: 'Rendement réel = [(1 + rendement nominal) / (1 + inflation)] − 1',
  e5ExItems: [
    '→ Rendement nominal : +10% | Inflation : +4%',
    '→ Rendement réel = (1,10 / 1,04) − 1 = +5,77%',
    '→ Rendement nominal : +7% | Inflation : +10% (2022)',
    '→ Rendement réel = (1,07 / 1,10) − 1 = −2,7% (perte réelle !)',
  ],
  e5ImgAlt: 'DonkyCapital — graphique de performance du portefeuille dans le temps',
  e5ImgCaption: "Le graphique de performance montre l'évolution nominale — pensez à la comparer avec l'inflation de la période pour obtenir le rendement réel.",
  e5FixBody: "Prenez l'habitude de calculer le rendement réel en soustrayant l'inflation de la période du rendement nominal. Pour les évaluations à long terme, utilisez toujours l'IPCH européen (Indice des Prix à la Consommation Harmonisé) comme référence.",
  bonusTitle: 'Bonus : Autres Erreurs Fréquentes',
  bonusIntro: "Au-delà des cinq erreurs principales, voici d'autres comportements qui compromettent la qualité du suivi de portefeuille :",
  bonusItems: [
    ['Suivre un seul courtier', "Avec plusieurs comptes sur différentes plateformes, celui qui n'agrège que le principal ne voit pas l'image complète. La vraie performance est celle du portefeuille consolidé. En savoir plus dans le guide du suivi multi-courtiers."],
    ['Mettre à jour les données rarement', "Une feuille Excel mise à jour une fois par mois ne permet pas de détecter les dérives d'allocation en temps réel."],
    ['Confondre P&L réalisé et non réalisé', "Le gain sur le papier n'est pas un gain tant qu'on ne vend pas. Les traiter comme équivalents conduit à de mauvaises décisions sur le moment de liquider une position."],
    ['Ne pas inclure les liquidités dans le portefeuille', "Les liquidités disponibles sont du capital qui ne rapporte pas. Ne pas les inclure dans le calcul fausse l'allocation réelle et réduit artificiellement la performance en pourcentage."],
    ['Ignorer les impôts sur les plus-values', "Dans de nombreux pays, les plus-values réalisées sont imposées. Ne pas prendre en compte ce taux dans le calcul du rendement net conduit à surestimer le résultat effectif."],
  ],
  checklistTitle: 'Check-list Complète : Faites-Vous Ces Erreurs ?',
  checklistIntro: 'Utilisez cette check-list pour vérifier la qualité de votre système de suivi actuel :',
  checklistItems: [
    "J'enregistre chaque transaction avec les frais exacts inclus",
    "J'utilise le TWRR (pas le ROI simple) pour me comparer aux benchmarks",
    "J'utilise le MWRR/IRR pour comprendre le rendement effectif sur mon capital",
    "J'enregistre chaque dividende reçu comme transaction séparée",
    "Je réinvestis les dividendes et enregistre l'achat correspondant",
    'Je connais mon exposition totale en devises (% en USD, GBP, etc.)',
    "Je calcule le rendement réel en soustrayant l'inflation de la période",
    "J'agrège tous les courtiers dans une vue consolidée",
    'Je maintiens séparés P&L réalisé et non réalisé',
    "J'inclus les liquidités dans le calcul de l'allocation totale",
    "Je tiens compte de l'impact fiscal sur les plus-values dans le rendement net",
  ],
  checklistFooter: 'Si vous cochez tous ces points manuellement sur Excel, sachez que DonkyCapital gère tout cela automatiquement.',
  toolsTitle: 'Outils qui Préviennent Ces Erreurs Automatiquement',
  toolsIntro: "La solution la plus efficace pour les cinq erreurs décrites est un logiciel de suivi de portefeuille qui gère ces aspects automatiquement. Voyons comment DonkyCapital aborde chacun d'eux.",
  toolsCards: [
    ['Frais', 'Chaque import CSV inclut les frais de transaction dans le calcul du rendement net.'],
    ['Rendement correct', 'TWRR, TWRR annualisé et MWRR calculés automatiquement pour chaque portefeuille.'],
    ['Dividendes', "Les dividendes sont automatiquement reconnus lors de l'import et inclus dans le P&L réalisé."],
    ['Devise', 'Performance affichée dans la devise de référence du portefeuille avec conversion automatique.'],
  ],
  toolsImgAlt: 'DonkyCapital — P&L réalisé, non réalisé et total par position',
  toolsImgCaption: 'DonkyCapital sépare automatiquement P&L réalisé et non réalisé pour chaque position.',
  toolsBody2: "DonkyCapital prend en charge l'import depuis Fineco, DeGiro, Scalable Capital, Directa et d'autres courtiers européens. Pour savoir comment importer les données de votre courtier spécifique, consultez nos guides :",
  toolsLinkLabels: [
    'Importer les données DeGiro',
    'Exporter les transactions Scalable Capital',
    'Guide du suivi multi-courtiers',
  ],
  faqTitle: 'Questions Fréquentes',
  faqItems: [
    {
      q: "Ces erreurs s'appliquent-elles aussi aux investisseurs en ETF uniquement ?",
      a: "Oui, les cinq s'appliquent aux investisseurs en ETF. Les frais d'achat, le calcul du rendement avec des versements périodiques (DCA), les dividendes distribués, l'exposition aux devises des ETF à réplication physique et l'impact de l'inflation sur le rendement réel sont des aspects pertinents pour tout investisseur, ETF inclus.",
    },
    {
      q: "L'erreur sur les frais s'applique-t-elle aussi aux courtiers 'zéro commission' ?",
      a: "Oui. Les courtiers zéro commission récupèrent souvent leurs coûts via des spreads sur le prix d'exécution, le prêt de titres ou la conversion de devises. Ces coûts implicites devraient également être estimés et inclus dans l'analyse du rendement net.",
    },
    {
      q: 'À quelle fréquence dois-je vérifier ces paramètres ?',
      a: "Pour les frais et dividendes : à chaque transaction. Pour le rendement et l'allocation : au moins mensuellement. Pour les effets de change et l'inflation : trimestriellement est suffisant pour la plupart des investisseurs particuliers.",
    },
    {
      q: 'Est-il possible de corriger ces erreurs sur un portefeuille existant ?',
      a: "Oui, mais cela nécessite de reconstruire l'historique des transactions avec tous les détails manquants. En important le CSV historique de votre courtier dans DonkyCapital, le système recalcule automatiquement toutes les métriques en incluant les dividendes et les frais présents dans l'export.",
    },
  ],
  ctaTitle: 'Éliminez Ces Erreurs de Votre Portefeuille',
  ctaBody: "DonkyCapital gère automatiquement les frais, les dividendes, les taux de change et les métriques de rendement correctes — afin que vous puissiez vous concentrer sur les décisions d'investissement, pas sur les calculs.",
  ctaButton: 'Accéder à DonkyCapital Gratuitement',
  ctaFooter: "Early Access gratuit · Aucune carte de crédit requise",
}

const es: CommonMistakesTranslations = {
  badge: 'Guía · Errores Comunes',
  h1: '5 Errores Fatales al Rastrear tu Cartera',
  h1Highlight: '(Que Cuestan Miles de Euros)',
  intro1: 'Al analizar cientos de carteras importadas en DonkyCapital, surge un patrón recurrente: la mayoría de los inversores minoristas cometen los mismos errores sistemáticos al rastrear sus inversiones. Errores que parecen inofensivos por separado pero que, acumulados en el tiempo, pueden costar miles de euros en rentabilidad perdida o en decisiones equivocadas tomadas con datos incorrectos.',
  intro2: 'En este artículo analizamos los 5 errores más críticos, con ejemplos numéricos concretos y soluciones prácticas. Para cada uno veremos también cómo DonkyCapital los previene automáticamente.',
  tocTitle: 'Índice de errores',
  tocItems: [
    'Ignorar las comisiones de transacción',
    'Calcular la rentabilidad incorrectamente',
    'No rastrear los dividendos reinvertidos',
    'Ignorar el riesgo de divisa',
    'No tener en cuenta la inflación',
    'Bonus: otros errores frecuentes',
    'Lista de verificación completa',
    'Herramientas que previenen errores automáticamente',
  ],
  fixTitle: 'Cómo evitarlo',
  e1Title: 'Ignorar las Comisiones de Transacción',
  e1Body1: 'Las comisiones de transacción parecen insignificantes individualmente — €2, €5, €10 por operación. Pero sumadas en el tiempo y comparadas con el capital que podrían haber generado si se hubieran reinvertido, se convierten en un coste significativo que la mayoría de los inversores nunca rastrea.',
  e1ExTitle: 'Impacto real — ejemplo numérico',
  e1ExItems: [
    '→ Plan de acumulación mensual en ETF: 2 operaciones/mes a €5 cada una = €120/año',
    '→ En una cartera de €30.000, €120/año = −0,40% de rentabilidad real cada año',
    '→ En 20 años, esos €120/año invertidos al 7% = más de €5.200 de capital perdido',
    '→ Añadiendo el TER medio de los ETF activos (1,5% vs 0,2% de un ETF pasivo): la diferencia en €30.000 en 20 años supera €15.000',
  ],
  e1Body2: 'El problema no es solo el coste en sí: sin rastrearlas, no puedes calcular la rentabilidad neta real ni compararla correctamente entre diferentes brokers o productos financieros.',
  e1ImgAlt: 'DonkyCapital — lista de transacciones con compras, ventas y dividendos',
  e1ImgCaption: 'El registro completo de transacciones es el punto de partida para rastrear correctamente comisiones y costes.',
  e1FixBody: 'Registra cada transacción incluyendo el coste exacto de la comisión. DonkyCapital agrega automáticamente los costes en el cálculo de la rentabilidad neta — así puedes ver el verdadero coste de tu cartera, no solo la ganancia bruta.',
  e2Title: 'Calcular la Rentabilidad Incorrectamente',
  e2Body1: 'Tu broker muestra +83% de rendimiento. ¿Pero realmente estás ganando +83% anual? Casi con toda seguridad no. El número que los brokers muestran por defecto es el ROI simple: la diferencia entre el valor actual y el capital total invertido, sin tener en cuenta cuándo invertiste los importes individuales.',
  e2Body2: 'Si has realizado aportaciones periódicas a lo largo de los años, el ROI simple puede ser muy engañoso comparado con la rentabilidad anualizada real.',
  e2ExTitle: 'Ejemplo práctico',
  e2ExItems: [
    '→ Cartera con TWRR +83% desde la fecha de apertura',
    '→ La misma cartera tiene un TWRR anualizado de +33,5% por año',
    '→ Y un MWRR del +56% — la rentabilidad efectiva sobre tu capital específico',
    '→ Un inversor que solo lee "+83%" y cree que está ganando +83% al año comete un error enorme en sus proyecciones',
  ],
  e2ImgAlt: 'DonkyCapital — métricas de rendimiento con TWRR y TWRR anualizado',
  e2ImgCaption: 'DonkyCapital muestra TWRR, TWRR anualizado y rentabilidad bruta por separado — así nunca confundirás los datos.',
  e2FixBefore: 'Usa siempre el ',
  e2FixMiddle: ' para compararte con los benchmarks y el ',
  e2FixMiddle2: ' para entender la rentabilidad efectiva sobre tu capital. Profundiza en las diferencias en nuestra',
  e2FixLinkText: 'guía sobre ROI, TWR e IRR',
  e3Title: 'No Rastrear los Dividendos Reinvertidos',
  e3Body1: 'Los dividendos se consideran a menudo como un "extra" — un bonus que llega cada trimestre y se cobra sin contabilizarse correctamente. Es uno de los errores más costosos a largo plazo.',
  e3Body2: 'Históricamente, los dividendos han contribuido a más del 40% de la rentabilidad total del S&P 500 en los últimos 50 años. No rastrearlos significa subestimar enormemente la rentabilidad real y perder la visibilidad sobre el efecto del interés compuesto a largo plazo.',
  e3ExTitle: 'Impacto real — ejemplo numérico',
  e3ExItems: [
    '→ Tienes 100 acciones de Apple. Dividendo trimestral: €0,25/acción = €25 cada trimestre',
    '→ €100/año reinvertidos en Apple durante 15 años al 12% anual = €547 adicionales',
    '→ En una cartera de €50.000 con un rendimiento por dividendo del 2%: €1.000/año no rastreados',
    '→ En 20 años al 7% de crecimiento: más de €40.000 de rentabilidad invisible',
  ],
  e3Body3: 'Ten en cuenta que en la imagen de transacciones anterior, el dividendo de Apple del 18 de enero de 2024 (€25,00) está claramente registrado como entrada separada. Sin este nivel de detalle, tu cálculo de rendimiento está incompleto.',
  e3FixBody: 'Registra cada pago de dividendo como una transacción separada. Si los reinviertes, registra también la compra correspondiente. DonkyCapital incluye los dividendos en el cálculo de la rentabilidad total y del P&L realizado automáticamente, sin configuración adicional.',
  e4Title: 'Ignorar el Riesgo de Divisa',
  e4Body1: 'La mayoría de los inversores europeos tienen en cartera ETF o acciones denominadas en dólares — S&P 500, Nasdaq, acciones tecnológicas americanas. Pero muchos no tienen en cuenta lo que sucede cuando el tipo de cambio EUR/USD se mueve significativamente.',
  e4ExTitle: 'Ejemplo práctico — doble efecto divisa',
  e4ExItems: [
    '→ Compras un ETF S&P 500 cuando EUR/USD = 1,05',
    '→ El ETF sube +20% en USD durante el año',
    '→ Mientras tanto EUR/USD sube a 1,15 (el EUR se aprecia un ~9,5%)',
    '→ Tu rentabilidad en EUR: 1,20 / 1,095 − 1 = +9,6% (no +20%)',
    '→ Has "perdido" más de 10 puntos porcentuales de rentabilidad por el tipo de cambio',
  ],
  e4Body2: 'El fenómeno también funciona al revés: un euro débil amplifica las ganancias en activos en USD. Lo importante es saber cuánta exposición a divisas tienes — y monitorizarla en el tiempo.',
  e4ImgAlt: 'DonkyCapital — asignación por clase de activo con desglose geográfico',
  e4ImgCaption: 'Conocer la composición de la cartera por clase de activo y área geográfica ayuda a evaluar la exposición a divisas.',
  e4FixBody: 'Monitoriza la asignación de divisas de tu cartera y calcula siempre la rentabilidad en tu divisa de referencia (EUR). Considera si una cuota de cobertura de divisa es apropiada para tu estrategia — especialmente si tienes una exposición >50% en USD.',
  e5Title: 'No Tener en Cuenta la Inflación',
  e5Body1: 'La cartera creció +10% este año. Buen resultado, ¿verdad? Depende. Si la inflación en el mismo período fue del 4%, tu rentabilidad real — la que realmente importa en términos de poder adquisitivo — fue solo del +5,8%.',
  e5Body2: 'En los años 2021-2023, la inflación europea alcanzó picos del 10%. Una cartera que hubiera devuelto el +7% en 2022 habría en realidad perdido poder adquisitivo en términos reales. Ignorar este dato significa sobrestimar sistemáticamente el propio patrimonio.',
  e5ExTitle: 'Fórmula de rentabilidad real',
  e5Formula: 'Rentabilidad real = [(1 + rentabilidad nominal) / (1 + inflación)] − 1',
  e5ExItems: [
    '→ Rentabilidad nominal: +10% | Inflación: +4%',
    '→ Rentabilidad real = (1,10 / 1,04) − 1 = +5,77%',
    '→ Rentabilidad nominal: +7% | Inflación: +10% (2022)',
    '→ Rentabilidad real = (1,07 / 1,10) − 1 = −2,7% (¡pérdida real!)',
  ],
  e5ImgAlt: 'DonkyCapital — gráfico de rendimiento de cartera en el tiempo',
  e5ImgCaption: 'El gráfico de rendimiento muestra la evolución nominal — recuerda compararlo con la inflación del período para obtener la rentabilidad real.',
  e5FixBody: 'Acostúmbrate a calcular la rentabilidad real restando la inflación del período a la rentabilidad nominal. Para evaluaciones a largo plazo, utiliza siempre el IPCA europeo (Índice de Precios al Consumo Armonizado) como referencia.',
  bonusTitle: 'Bonus: Otros Errores Frecuentes',
  bonusIntro: 'Además de los cinco errores principales, aquí hay otros comportamientos que comprometen la calidad del seguimiento de cartera:',
  bonusItems: [
    ['Rastrear solo un broker', 'Con varias cuentas en diferentes plataformas, quien solo agrega la principal no ve el panorama completo. La rentabilidad real es la del portafolio consolidado. Más información en la guía de seguimiento multi-broker.'],
    ['Actualizar los datos raramente', 'Una hoja de Excel actualizada una vez al mes no permite detectar desviaciones de asignación en tiempo real.'],
    ['Confundir P&L realizado y no realizado', 'La ganancia en papel no es ganancia hasta que no vendes. Tratarlos como equivalentes lleva a decisiones erróneas sobre cuándo liquidar una posición.'],
    ['No incluir la liquidez en la cartera', 'La liquidez disponible es capital que no genera rentabilidad. No incluirla en el cálculo distorsiona la asignación real y reduce artificialmente el rendimiento porcentual.'],
    ['Ignorar los impuestos sobre las plusvalías', 'En muchos países, las plusvalías realizadas están sujetas a impuestos. No considerar este tipo impositivo en el cálculo de la rentabilidad neta lleva a sobrestimar el resultado efectivo.'],
  ],
  checklistTitle: '¿Estás Cometiendo Estos Errores? Lista de Verificación Completa',
  checklistIntro: 'Usa esta lista de verificación para comprobar la calidad de tu sistema de seguimiento actual:',
  checklistItems: [
    'Registro cada transacción con la comisión exacta incluida',
    'Uso TWRR (no ROI simple) para compararme con los benchmarks',
    'Uso MWRR/IRR para entender la rentabilidad efectiva sobre mi capital',
    'Registro cada dividendo recibido como transacción separada',
    'Reinvierto los dividendos y registro la compra correspondiente',
    'Conozco mi exposición total a divisas (% en USD, GBP, etc.)',
    'Calculo la rentabilidad real restando la inflación del período',
    'Agrego todos los brokers en una vista consolidada',
    'Mantengo separados P&L realizado y no realizado',
    'Incluyo la liquidez en el cálculo de la asignación total',
    'Considero el impacto fiscal sobre las plusvalías en la rentabilidad neta',
  ],
  checklistFooter: 'Si estás marcando todos estos puntos manualmente en Excel, considera que DonkyCapital gestiona todo esto automáticamente.',
  toolsTitle: 'Herramientas que Previenen Estos Errores Automáticamente',
  toolsIntro: 'La solución más eficaz para los cinco errores descritos es un software de seguimiento de cartera que gestione estos aspectos automáticamente. Veamos cómo DonkyCapital aborda cada uno de ellos.',
  toolsCards: [
    ['Comisiones', 'Cada importación CSV incluye las comisiones de transacción en el cálculo de la rentabilidad neta.'],
    ['Rentabilidad correcta', 'TWRR, TWRR anualizado y MWRR calculados automáticamente para cada cartera.'],
    ['Dividendos', 'Los dividendos se reconocen automáticamente al importar y se incluyen en el P&L realizado.'],
    ['Divisa', 'Rendimiento mostrado en la divisa de referencia de la cartera con conversión automática.'],
  ],
  toolsImgAlt: 'DonkyCapital — P&L realizado, no realizado y total por posición',
  toolsImgCaption: 'DonkyCapital separa automáticamente el P&L realizado y no realizado para cada posición.',
  toolsBody2: 'DonkyCapital admite la importación desde Fineco, DeGiro, Scalable Capital, Directa y otros brokers europeos. Para saber cómo importar los datos de tu broker específico, consulta nuestras guías:',
  toolsLinkLabels: [
    'Cómo importar la cartera desde DeGiro',
    'Cómo exportar transacciones de Scalable Capital',
    'Guía de seguimiento multi-broker',
  ],
  faqTitle: 'Preguntas Frecuentes',
  faqItems: [
    {
      q: '¿Estos errores también se aplican a quienes solo invierten en ETF?',
      a: 'Sí, los cinco se aplican a los inversores en ETF. Las comisiones de compra, el cálculo de rentabilidad con aportaciones periódicas (DCA), los dividendos distribuidos, la exposición a divisas de los ETF de réplica física y el impacto de la inflación en la rentabilidad real son aspectos relevantes para cualquier inversor, incluidos los de ETF.',
    },
    {
      q: "¿El error de las comisiones también aplica a brokers con 'cero comisiones'?",
      a: 'Sí. Los brokers de cero comisiones suelen recuperar sus costes a través del spread en el precio de ejecución, el préstamo de valores o la conversión de divisas. Estos costes implícitos también deberían estimarse e incluirse en el análisis de rentabilidad neta.',
    },
    {
      q: '¿Con qué frecuencia debo revisar estos parámetros?',
      a: 'Para comisiones y dividendos: en cada transacción. Para rentabilidad y asignación: al menos mensualmente. Para el efecto divisa y la inflación: trimestralmente es suficiente para la mayoría de los inversores minoristas.',
    },
    {
      q: '¿Es posible corregir estos errores en una cartera ya existente?',
      a: 'Sí, pero requiere reconstruir el historial de transacciones con todos los detalles que faltan. Importando el CSV histórico de tu broker en DonkyCapital, el sistema recalcula automáticamente todas las métricas incluyendo los dividendos y comisiones presentes en la exportación.',
    },
  ],
  ctaTitle: 'Elimina Estos Errores de tu Cartera',
  ctaBody: 'DonkyCapital gestiona automáticamente comisiones, dividendos, tipo de cambio y métricas de rentabilidad correctas — para que puedas centrarte en las decisiones de inversión, no en los cálculos.',
  ctaButton: 'Acceder a DonkyCapital Gratis',
  ctaFooter: 'Early Access gratuito · Sin tarjeta de crédito requerida',
}

export const commonMistakesTranslations: Record<Locale, CommonMistakesTranslations> = {
  it,
  en,
  de,
  fr,
  es,
}
