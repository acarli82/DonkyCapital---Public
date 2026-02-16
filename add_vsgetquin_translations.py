import json

MASTER = 'dictionaries/labels.master.json'

with open(MASTER, 'r', encoding='utf-8') as f:
    data = json.load(f)

vg = data.setdefault('vsGetquin', {})

vg['pageTitle'] = {
    'it': 'DonkyCapital vs Getquin: Quale Portfolio Tracker Scegliere nel 2026?',
    'en': 'DonkyCapital vs Getquin: Best Portfolio Tracker for Privacy & Control (2026 Review)',
    'de': 'DonkyCapital vs. Getquin: Der beste Portfolio-Tracker 2026 im Vergleich',
    'fr': 'DonkyCapital vs Getquin : Quel Suivi de Portefeuille Choisir en 2026 ?',
    'es': 'DonkyCapital vs Getquin: Que Rastreador de Cartera Elegir en 2026?',
}

vg['intro1'] = {
    'it': 'Il 2026 e l\'anno in cui l\'investitore consapevole smette di fidarsi ciecamente dei file Excel rotti e inizia a cercare strumenti professionali. Se sei arrivato qui, probabilmente hai sentito parlare di Getquin, il gigante social del tracking, ma ti stai chiedendo se esista un\'alternativa piu privata, flessibile e magari meno "rumorosa".',
    'en': '2026 is the year when the conscious investor stops blindly trusting broken Excel files and starts looking for professional tools. If you\'ve landed here, you\'ve probably heard of Getquin, the social tracking giant, but you\'re wondering if there\'s a more private, flexible, and perhaps less "noisy" alternative.',
    'de': '2026 ist das Jahr, in dem der bewusste Anleger aufhoert, blind kaputten Excel-Dateien zu vertrauen, und nach professionellen Tools sucht. Wenn Sie hier gelandet sind, haben Sie wahrscheinlich von Getquin gehoert, dem sozialen Tracking-Riesen, aber Sie fragen sich, ob es eine privatere, flexiblere und vielleicht weniger "laute" Alternative gibt.',
    'fr': '2026 est l\'annee ou l\'investisseur averti arrete de faire confiance aveuglement aux fichiers Excel casses et commence a chercher des outils professionnels. Si vous etes arrive ici, vous avez probablement entendu parler de Getquin, le geant social du tracking, mais vous vous demandez s\'il existe une alternative plus privee, flexible et peut-etre moins "bruyante".',
    'es': '2026 es el ano en que el inversor consciente deja de confiar ciegamente en archivos Excel rotos y empieza a buscar herramientas profesionales. Si has llegado aqui, probablemente has oido hablar de Getquin, el gigante social del tracking, pero te preguntas si existe una alternativa mas privada, flexible y quizas menos "ruidosa".',
}
vg['intro2'] = {
    'it': 'In questo articolo analizziamo <strong>DonkyCapital</strong> e <strong>Getquin</strong> fianco a fianco. Non ti diremo solo quale usare, ma ti aiuteremo a capire quale si adatta al tuo stile di investimento: sei un investitore che vuole "impostare e dimenticare" o un analista che vuole il controllo totale sui propri dati?',
    'en': 'In this article we analyze <strong>DonkyCapital</strong> and <strong>Getquin</strong> side by side. We won\'t just tell you which one to use, but help you understand which one fits your investing style: are you a "set it and forget it" investor or an analyst who wants total control over your data?',
    'de': 'In diesem Artikel analysieren wir <strong>DonkyCapital</strong> und <strong>Getquin</strong> Seite an Seite. Wir sagen Ihnen nicht nur, welches Sie verwenden sollten, sondern helfen Ihnen zu verstehen, welches zu Ihrem Anlagestil passt: Sind Sie ein "einstellen und vergessen"-Anleger oder ein Analyst, der die totale Kontrolle ueber seine Daten will?',
    'fr': 'Dans cet article, nous analysons <strong>DonkyCapital</strong> et <strong>Getquin</strong> cote a cote. Nous ne vous dirons pas seulement lequel utiliser, mais nous vous aiderons a comprendre lequel correspond a votre style d\'investissement : etes-vous un investisseur "configurer et oublier" ou un analyste qui veut le controle total de ses donnees ?',
    'es': 'En este articulo analizamos <strong>DonkyCapital</strong> y <strong>Getquin</strong> lado a lado. No solo te diremos cual usar, sino que te ayudaremos a entender cual se adapta a tu estilo de inversion: eres un inversor de "configurar y olvidar" o un analista que quiere el control total de sus datos?',
}

# Multi-Broker Problem
vg['multiBrokerTitle'] = {
    'it': 'Il problema del "Multi-Broker"',
    'en': 'The "Multi-Broker" Problem',
    'de': 'Das "Multi-Broker"-Problem',
    'fr': 'Le probleme du "Multi-Courtier"',
    'es': 'El problema del "Multi-Broker"',
}
vg['multiBrokerP1'] = {
    'it': 'Oggi l\'investitore medio italiano ha un conto su Directa per il regime amministrato, magari Degiro o Scalable Capital per gli ETF esteri, e un wallet crypto. Il risultato? Non hai mai idea del tuo vero Net Worth in tempo reale.',
    'en': 'Today the average European investor has an account on one broker for tax-advantaged investing, perhaps Degiro or Scalable Capital for foreign ETFs, and a crypto wallet. The result? You never know your true Net Worth in real time.',
    'de': 'Heute hat der durchschnittliche europaeische Anleger ein Konto bei einem Broker fuer steuerbeguenstigtes Investieren, vielleicht Degiro oder Scalable Capital fuer auslaendische ETFs und ein Krypto-Wallet. Das Ergebnis? Sie kennen nie Ihren wahren Nettowert in Echtzeit.',
    'fr': 'Aujourd\'hui, l\'investisseur europeen moyen a un compte chez un courtier pour l\'investissement fiscalement avantageux, peut-etre Degiro ou Scalable Capital pour les ETF etrangers, et un portefeuille crypto. Le resultat ? Vous ne connaissez jamais votre vraie valeur nette en temps reel.',
    'es': 'Hoy el inversor europeo promedio tiene una cuenta en un broker para inversion con ventajas fiscales, quizas Degiro o Scalable Capital para ETFs extranjeros, y una wallet crypto. El resultado? Nunca sabes tu verdadero patrimonio neto en tiempo real.',
}
vg['multiBrokerP2'] = {
    'it': 'Sia DonkyCapital che Getquin risolvono questo problema, ma lo fanno con filosofie diametralmente opposte.',
    'en': 'Both DonkyCapital and Getquin solve this problem, but they do it with diametrically opposite philosophies.',
    'de': 'Sowohl DonkyCapital als auch Getquin loesen dieses Problem, aber mit diametral entgegengesetzten Philosophien.',
    'fr': 'DonkyCapital et Getquin resolvent tous deux ce probleme, mais avec des philosophies diametralement opposees.',
    'es': 'Tanto DonkyCapital como Getquin resuelven este problema, pero lo hacen con filosofias diametralmente opuestas.',
}

# Overview
vg['overviewTitle'] = {
    'it': 'Overview: Due Filosofie a Confronto',
    'en': 'Overview: Two Philosophies Compared',
    'de': 'Ueberblick: Zwei Philosophien im Vergleich',
    'fr': 'Apercu : Deux Philosophies Comparees',
    'es': 'Panorama: Dos Filosofias Comparadas',
}
vg['getquinSubtitle'] = {
    'it': 'Getquin: Il Social Network della Finanza',
    'en': 'Getquin: The Social Network of Finance',
    'de': 'Getquin: Das Soziale Netzwerk der Finanzen',
    'fr': 'Getquin : Le Reseau Social de la Finance',
    'es': 'Getquin: La Red Social de las Finanzas',
}
vg['getquinDesc'] = {
    'it': 'Getquin e nato con l\'idea di rendere gli investimenti "social". E un\'ottima app se ti piace confrontare il tuo portafoglio con quello degli altri, leggere feed di notizie e avere un\'esperienza molto simile a un social network. Punta tutto sull\'automazione: colleghi la tua banca e lui fa il resto.',
    'en': 'Getquin was born with the idea of making investing "social". It\'s a great app if you like comparing your portfolio with others, reading news feeds, and having an experience very similar to a social network. It\'s all about automation: connect your bank and it does the rest.',
    'de': 'Getquin wurde mit der Idee geboren, das Investieren "sozial" zu machen. Es ist eine grossartige App, wenn Sie Ihr Portfolio gerne mit anderen vergleichen, News-Feeds lesen und ein Erlebnis wie ein soziales Netzwerk haben moechten. Alles dreht sich um Automatisierung: Bank verbinden und es erledigt den Rest.',
    'fr': 'Getquin est ne avec l\'idee de rendre l\'investissement "social". C\'est une excellente app si vous aimez comparer votre portefeuille avec celui des autres, lire des fils d\'actualite et avoir une experience tres similaire a un reseau social. Tout est base sur l\'automatisation : connectez votre banque et il fait le reste.',
    'es': 'Getquin nacio con la idea de hacer la inversion "social". Es una excelente app si te gusta comparar tu cartera con la de otros, leer feeds de noticias y tener una experiencia muy similar a una red social. Todo gira en torno a la automatizacion: conectas tu banco y el hace el resto.',
}
vg['donkySubtitle'] = {
    'it': 'DonkyCapital: Il Tuo Santuario Privato',
    'en': 'DonkyCapital: Your Private Sanctuary',
    'de': 'DonkyCapital: Ihr privates Heiligtum',
    'fr': 'DonkyCapital : Votre Sanctuaire Prive',
    'es': 'DonkyCapital: Tu Santuario Privado',
}
vg['donkyDesc'] = {
    'it': 'DonkyCapital e nato per chi odia dare le password della banca alle app. Si posiziona come il "sostituto definitivo di Excel". Non e un social network; e uno strumento di analisi professionale. Punta tutto sulla privacy (i dati restano tuoi), sulla personalizzazione (dashboard drag & drop) e sull\'analisi profonda (heatmap, P&L granulare).',
    'en': 'DonkyCapital was born for those who hate giving bank passwords to apps. It positions itself as the "ultimate Excel replacement". It\'s not a social network; it\'s a professional analysis tool. It\'s all about privacy (your data stays yours), customization (drag & drop dashboards) and deep analysis (heatmaps, granular P&L).',
    'de': 'DonkyCapital wurde fuer diejenigen entwickelt, die es hassen, Bank-Passwoerter an Apps weiterzugeben. Es positioniert sich als der "ultimative Excel-Ersatz". Es ist kein soziales Netzwerk; es ist ein professionelles Analyse-Tool. Alles dreht sich um Privatsphaere (Ihre Daten bleiben Ihre), Anpassung (Drag & Drop Dashboards) und tiefgehende Analyse (Heatmaps, granulare P&L).',
    'fr': 'DonkyCapital est ne pour ceux qui detestent donner les mots de passe bancaires aux apps. Il se positionne comme le "remplacant definitif d\'Excel". Ce n\'est pas un reseau social ; c\'est un outil d\'analyse professionnel. Tout est base sur la confidentialite (vos donnees restent les votres), la personnalisation (tableaux de bord drag & drop) et l\'analyse approfondie (heatmaps, P&L granulaire).',
    'es': 'DonkyCapital nacio para quienes odian dar contrasenas bancarias a las apps. Se posiciona como el "sustituto definitivo de Excel". No es una red social; es una herramienta de analisis profesional. Todo gira en torno a la privacidad (tus datos siguen siendo tuyos), la personalizacion (dashboards drag & drop) y el analisis profundo (heatmaps, P&L granular).',
}

# Feature Table
vg['featureTitle'] = {
    'it': 'Confronto Feature-by-Feature',
    'en': 'Feature-by-Feature Comparison',
    'de': 'Feature-fuer-Feature-Vergleich',
    'fr': 'Comparaison Fonction par Fonction',
    'es': 'Comparacion Funcion por Funcion',
}
vg['featureIntro'] = {
    'it': 'Ecco come si comportano i due contendenti nelle aree critiche per un investitore:',
    'en': 'Here\'s how the two contenders perform in the critical areas for an investor:',
    'de': 'So schneiden die beiden Kontrahenten in den kritischen Bereichen fuer Anleger ab:',
    'fr': 'Voici comment les deux concurrents se comportent dans les domaines critiques pour un investisseur :',
    'es': 'Asi se desempenan los dos contendientes en las areas criticas para un inversor:',
}
vg['tableHeaderFeature'] = {
    'it': 'Caratteristica', 'en': 'Feature', 'de': 'Eigenschaft', 'fr': 'Caracteristique', 'es': 'Caracteristica',
}
vg['tableRowImportLabel'] = {
    'it': 'Importazione Dati', 'en': 'Data Import', 'de': 'Datenimport', 'fr': 'Import de Donnees', 'es': 'Importacion de Datos',
}
vg['tableRowImportDonky'] = {
    'it': 'File Import / No-Login. Importi PDF/CSV o usi l\'estensione browser. Nessuna password bancaria richiesta.',
    'en': 'File Import / No-Login. Import PDF/CSV or use the browser extension. No bank password required.',
    'de': 'Datei-Import / Kein Login. PDF/CSV importieren oder Browser-Erweiterung nutzen. Kein Bank-Passwort erforderlich.',
    'fr': 'Import de fichier / Sans connexion. Importez PDF/CSV ou utilisez l\'extension navigateur. Aucun mot de passe bancaire requis.',
    'es': 'Importacion de archivos / Sin login. Importa PDF/CSV o usa la extension del navegador. Sin contrasena bancaria requerida.',
}
vg['tableRowImportGetquin'] = {
    'it': 'Open Banking. Colleghi direttamente il conto corrente/broker tramite API.',
    'en': 'Open Banking. Connect your bank/broker account directly via API.',
    'de': 'Open Banking. Verbinden Sie Ihr Bank-/Brokerkonto direkt per API.',
    'fr': 'Open Banking. Connectez votre compte bancaire/courtier directement via API.',
    'es': 'Open Banking. Conectas tu cuenta bancaria/broker directamente via API.',
}
vg['tableRowPrivacyLabel'] = {
    'it': 'Privacy', 'en': 'Privacy', 'de': 'Datenschutz', 'fr': 'Confidentialite', 'es': 'Privacidad',
}
vg['tableRowPrivacyDonky'] = {
    'it': 'Massima. I tuoi dati finanziari non sono collegati alle credenziali bancarie.',
    'en': 'Maximum. Your financial data is not linked to bank credentials.',
    'de': 'Maximal. Ihre Finanzdaten sind nicht mit Bankzugangsdaten verknuepft.',
    'fr': 'Maximale. Vos donnees financieres ne sont pas liees aux identifiants bancaires.',
    'es': 'Maxima. Tus datos financieros no estan vinculados a credenciales bancarias.',
}
vg['tableRowPrivacyGetquin'] = {
    'it': 'Limitata. Richiede accesso in lettura ai tuoi conti bancari, o direttamente le credenziali dispositivo per i broker che non supportano la modalita sola lettura.',
    'en': 'Limited. Requires read access to your bank accounts, or device credentials for brokers that don\'t support read-only mode.',
    'de': 'Eingeschraenkt. Erfordert Lesezugriff auf Ihre Bankkonten oder Geraetezugangsdaten fuer Broker, die den Nur-Lese-Modus nicht unterstuetzen.',
    'fr': 'Limitee. Necessite un acces en lecture a vos comptes bancaires, ou les identifiants d\'appareil pour les courtiers qui ne supportent pas le mode lecture seule.',
    'es': 'Limitada. Requiere acceso de lectura a tus cuentas bancarias, o credenciales de dispositivo para brokers que no soportan modo solo lectura.',
}
vg['tableRowPlatformLabel'] = {
    'it': 'Piattaforma', 'en': 'Platform', 'de': 'Plattform', 'fr': 'Plateforme', 'es': 'Plataforma',
}
vg['tableRowPlatformDonky'] = {
    'it': 'Web & PWA. Accessibile ovunque, installabile come app leggera, ottimizzata per Desktop/Tablet.',
    'en': 'Web & PWA. Accessible anywhere, installable as a lightweight app, optimized for Desktop/Tablet.',
    'de': 'Web & PWA. Ueberall zugaenglich, als leichte App installierbar, optimiert fuer Desktop/Tablet.',
    'fr': 'Web & PWA. Accessible partout, installable comme app legere, optimisee pour Desktop/Tablette.',
    'es': 'Web & PWA. Accesible desde cualquier lugar, instalable como app ligera, optimizada para Desktop/Tablet.',
}
vg['tableRowPlatformGetquin'] = {
    'it': 'Mobile App. Nasce come app nativa (iOS/Android), forte focus sull\'uso da smartphone.',
    'en': 'Mobile App. Born as a native app (iOS/Android), strong focus on smartphone usage.',
    'de': 'Mobile App. Als native App (iOS/Android) geboren, starker Fokus auf Smartphone-Nutzung.',
    'fr': 'Application Mobile. Nee comme app native (iOS/Android), fort focus sur l\'utilisation smartphone.',
    'es': 'App Movil. Nacida como app nativa (iOS/Android), fuerte enfoque en uso desde smartphone.',
}
vg['tableRowCustomLabel'] = {
    'it': 'Personalizzazione', 'en': 'Customization', 'de': 'Anpassung', 'fr': 'Personnalisation', 'es': 'Personalizacion',
}
vg['tableRowCustomDonky'] = {
    'it': 'Totale. Dashboard modulari, widget spostabili, 48+ viste analitiche.',
    'en': 'Total. Modular dashboards, movable widgets, 48+ analytical views.',
    'de': 'Total. Modulare Dashboards, verschiebbare Widgets, 48+ analytische Ansichten.',
    'fr': 'Totale. Tableaux de bord modulaires, widgets deplacables, 48+ vues analytiques.',
    'es': 'Total. Dashboards modulares, widgets movibles, 48+ vistas analiticas.',
}
vg['tableRowCustomGetquin'] = {
    'it': 'Standard. Layout predefinito, meno flessibilita nella visualizzazione dei dati.',
    'en': 'Standard. Predefined layout, less flexibility in data visualization.',
    'de': 'Standard. Vordefiniertes Layout, weniger Flexibilitaet bei der Datenvisualisierung.',
    'fr': 'Standard. Mise en page predefinie, moins de flexibilite dans la visualisation des donnees.',
    'es': 'Estandar. Layout predefinido, menos flexibilidad en la visualizacion de datos.',
}
vg['tableRowKillerLabel'] = {
    'it': 'Feature "Killer"', 'en': 'Killer Feature', 'de': 'Killer-Feature', 'fr': 'Feature "Killer"', 'es': 'Feature "Killer"',
}
vg['tableRowKillerDonky'] = {
    'it': 'Scalable Free Export. Esporti i dati da Scalable Capital senza pagare Prime+ grazie all\'estensione proprietaria.',
    'en': 'Scalable Free Export. Export data from Scalable Capital without paying Prime+ thanks to the proprietary extension.',
    'de': 'Scalable Free Export. Exportieren Sie Daten von Scalable Capital ohne Prime+ dank der proprietaeren Erweiterung.',
    'fr': 'Scalable Free Export. Exportez les donnees de Scalable Capital sans payer Prime+ grace a l\'extension proprietaire.',
    'es': 'Scalable Free Export. Exporta datos de Scalable Capital sin pagar Prime+ gracias a la extension propietaria.',
}
vg['tableRowKillerGetquin'] = {
    'it': 'Social Benchmark. Vedi come performa il tuo portafoglio rispetto alla community.',
    'en': 'Social Benchmark. See how your portfolio performs compared to the community.',
    'de': 'Social Benchmark. Sehen Sie, wie Ihr Portfolio im Vergleich zur Community abschneidet.',
    'fr': 'Social Benchmark. Voyez comment votre portefeuille performe par rapport a la communaute.',
    'es': 'Social Benchmark. Ve como rinde tu cartera comparada con la comunidad.',
}
vg['tableRowPriceLabel'] = {
    'it': 'Prezzo', 'en': 'Price', 'de': 'Preis', 'fr': 'Prix', 'es': 'Precio',
}
vg['tableRowPriceDonky'] = {
    'it': 'Early Access Gratuito (o Freemium/Tiered).',
    'en': 'Free Early Access (or Freemium/Tiered).',
    'de': 'Kostenloser Early Access (oder Freemium/Tiered).',
    'fr': 'Early Access Gratuit (ou Freemium/par niveaux).',
    'es': 'Early Access Gratuito (o Freemium/por niveles).',
}
vg['tableRowPriceGetquin'] = {
    'it': 'Freemium (Funzioni base gratis, analitiche avanzate a pagamento ~90\u20ac/anno).',
    'en': 'Freemium (Basic features free, advanced analytics behind paywall ~\u20ac90/year).',
    'de': 'Freemium (Basisfunktionen kostenlos, erweiterte Analysen hinter Paywall ~90\u20ac/Jahr).',
    'fr': 'Freemium (Fonctions de base gratuites, analyses avancees payantes ~90\u20ac/an).',
    'es': 'Freemium (Funciones basicas gratis, analiticas avanzadas de pago ~90\u20ac/ano).',
}

# Privacy Deep Dive
vg['privacyTitle'] = {
    'it': 'Approfondimento: La Questione Privacy e Importazione',
    'en': 'Deep Dive: The Privacy & Import Question',
    'de': 'Vertiefung: Die Frage nach Datenschutz und Import',
    'fr': 'Approfondissement : La Question Confidentialite et Importation',
    'es': 'Profundizacion: La Cuestion de Privacidad e Importacion',
}
vg['privacyIntro'] = {
    'it': 'Questo e il punto di rottura per molti utenti.',
    'en': 'This is the breaking point for many users.',
    'de': 'Dies ist der Knackpunkt fuer viele Nutzer.',
    'fr': 'C\'est le point de rupture pour de nombreux utilisateurs.',
    'es': 'Este es el punto de quiebre para muchos usuarios.',
}
vg['chooseGetquin'] = {
    'it': '<strong>Scegli Getquin se:</strong> Non ti preoccupa condividere le credenziali di accesso (in sola lettura) dei tuoi broker tramite provider terzi. Vuoi che, quando compri un\'azione su Trade Republic, appaia magicamente nell\'app dopo pochi minuti.',
    'en': '<strong>Choose Getquin if:</strong> You don\'t mind sharing your broker login credentials (read-only) via third-party providers. You want a stock you buy on Trade Republic to magically appear in the app within minutes.',
    'de': '<strong>Waehlen Sie Getquin, wenn:</strong> Es Ihnen nichts ausmacht, Ihre Broker-Zugangsdaten (nur Lesezugriff) ueber Drittanbieter zu teilen. Sie moechten, dass eine Aktie, die Sie bei Trade Republic kaufen, magisch innerhalb von Minuten in der App erscheint.',
    'fr': '<strong>Choisissez Getquin si :</strong> Partager vos identifiants de connexion courtier (en lecture seule) via des fournisseurs tiers ne vous derange pas. Vous voulez qu\'une action achetee sur Trade Republic apparaisse magiquement dans l\'app en quelques minutes.',
    'es': '<strong>Elige Getquin si:</strong> No te preocupa compartir las credenciales de acceso (solo lectura) de tus brokers a traves de proveedores terceros. Quieres que una accion que compres en Trade Republic aparezca magicamente en la app en pocos minutos.',
}
vg['chooseDonky'] = {
    'it': '<strong>Scegli DonkyCapital se:</strong> Il pensiero di inserire user e password della tua banca in un\'app esterna ti fa venire i brividi. DonkyCapital utilizza un approccio "Zero-Knowledge" sulle credenziali: carichi i file delle transazioni o usi l\'estensione Chrome.',
    'en': '<strong>Choose DonkyCapital if:</strong> The thought of entering your bank username and password into an external app gives you chills. DonkyCapital uses a "Zero-Knowledge" approach to credentials: you upload transaction files or use the Chrome extension.',
    'de': '<strong>Waehlen Sie DonkyCapital, wenn:</strong> Der Gedanke, Ihren Bank-Benutzernamen und Ihr Passwort in eine externe App einzugeben, Ihnen Schauer ueber den Ruecken jagt. DonkyCapital verwendet einen "Zero-Knowledge"-Ansatz: Sie laden Transaktionsdateien hoch oder nutzen die Chrome-Erweiterung.',
    'fr': '<strong>Choisissez DonkyCapital si :</strong> L\'idee d\'entrer votre nom d\'utilisateur et mot de passe bancaire dans une app externe vous donne des frissons. DonkyCapital utilise une approche "Zero-Knowledge" : vous telechargez les fichiers de transactions ou utilisez l\'extension Chrome.',
    'es': '<strong>Elige DonkyCapital si:</strong> La idea de ingresar tu usuario y contrasena bancaria en una app externa te da escalofrios. DonkyCapital usa un enfoque "Zero-Knowledge" en credenciales: subes los archivos de transacciones o usas la extension Chrome.',
}
vg['scalableBonus'] = {
    'it': '<strong>Bonus per utenti Scalable Capital:</strong> DonkyCapital offre un\'estensione gratuita che permette di scaricare i CSV delle transazioni anche se hai il piano Free di Scalable (che normalmente lo impedirebbe), risparmiandoti il costo dell\'abbonamento Prime+.',
    'en': '<strong>Bonus for Scalable Capital users:</strong> DonkyCapital offers a free extension that lets you download transaction CSVs even on Scalable\'s Free plan (which normally prevents it), saving you the cost of a Prime+ subscription.',
    'de': '<strong>Bonus fuer Scalable Capital-Nutzer:</strong> DonkyCapital bietet eine kostenlose Erweiterung, mit der Sie Transaktions-CSVs auch mit dem Free-Plan von Scalable herunterladen koennen (was normalerweise nicht moeglich ist), und sparen sich die Kosten eines Prime+-Abonnements.',
    'fr': '<strong>Bonus pour les utilisateurs Scalable Capital :</strong> DonkyCapital offre une extension gratuite qui permet de telecharger les CSV de transactions meme avec le plan Free de Scalable (qui l\'empeche normalement), vous economisant le cout d\'un abonnement Prime+.',
    'es': '<strong>Bonus para usuarios de Scalable Capital:</strong> DonkyCapital ofrece una extension gratuita que te permite descargar los CSV de transacciones incluso con el plan Free de Scalable (que normalmente lo impide), ahorrandote el coste de una suscripcion Prime+.',
}
vg['scalableGuideLink'] = {
    'it': 'Leggi la guida: Come esportare CSV da Scalable senza Prime+',
    'en': 'Read the guide: How to export CSV from Scalable without Prime+',
    'de': 'Lesen Sie den Leitfaden: CSV von Scalable ohne Prime+ exportieren',
    'fr': 'Lire le guide : Comment exporter les CSV de Scalable sans Prime+',
    'es': 'Lee la guia: Como exportar CSV de Scalable sin Prime+',
}

# Dashboard vs Feed
vg['dashboardTitle'] = {
    'it': 'Analisi delle Performance: Dashboard vs Feed',
    'en': 'Performance Analysis: Dashboard vs Feed',
    'de': 'Performance-Analyse: Dashboard vs Feed',
    'fr': 'Analyse des Performances : Dashboard vs Feed',
    'es': 'Analisis de Rendimiento: Dashboard vs Feed',
}
vg['dashboardIntro'] = {
    'it': 'Mentre Getquin ti mostra un feed simile a Instagram con le notizie sui tuoi titoli, DonkyCapital ti accoglie con una dashboard che sembra la scrivania di un hedge fund manager.',
    'en': 'While Getquin shows you an Instagram-like feed with news about your stocks, DonkyCapital welcomes you with a dashboard that looks like a hedge fund manager\'s desk.',
    'de': 'Waehrend Getquin Ihnen einen Instagram-aehnlichen Feed mit Nachrichten ueber Ihre Aktien zeigt, begruesst DonkyCapital Sie mit einem Dashboard, das wie der Schreibtisch eines Hedgefonds-Managers aussieht.',
    'fr': 'Alors que Getquin vous montre un feed similaire a Instagram avec les actualites de vos titres, DonkyCapital vous accueille avec un tableau de bord qui ressemble au bureau d\'un gerant de hedge fund.',
    'es': 'Mientras Getquin te muestra un feed similar a Instagram con noticias de tus titulos, DonkyCapital te recibe con un dashboard que parece el escritorio de un gestor de hedge fund.',
}
vg['donkyScreenCaption'] = {
    'it': 'Dashboard con widget drag & drop, grafico performance multi-broker e allocazione per asset class',
    'en': 'Dashboard with drag & drop widgets, multi-broker performance chart and asset class allocation',
    'de': 'Dashboard mit Drag & Drop Widgets, Multi-Broker Performance-Diagramm und Asset-Klassen-Allokation',
    'fr': 'Tableau de bord avec widgets drag & drop, graphique de performance multi-courtiers et allocation par classe d\'actifs',
    'es': 'Dashboard con widgets drag & drop, grafico de rendimiento multi-broker y asignacion por clase de activo',
}
vg['getquinScreenCaption'] = {
    'it': 'Portafoglio con grafico performance e allocazione bloccata dietro paywall Premium',
    'en': 'Portfolio with performance chart and allocation locked behind Premium paywall',
    'de': 'Portfolio mit Performance-Diagramm und Allokation hinter Premium-Paywall gesperrt',
    'fr': 'Portefeuille avec graphique de performance et allocation bloquee derriere le paywall Premium',
    'es': 'Cartera con grafico de rendimiento y asignacion bloqueada detras del paywall Premium',
}
vg['dashboardFeature1'] = {
    'it': '<strong>Heatmap Settoriali:</strong> Vedi a colpo d\'occhio se sei troppo esposto sul Tech o sull\'Energy.',
    'en': '<strong>Sector Heatmaps:</strong> See at a glance if you\'re overexposed to Tech or Energy.',
    'de': '<strong>Sektor-Heatmaps:</strong> Sehen Sie auf einen Blick, ob Sie in Tech oder Energy ueberexponiert sind.',
    'fr': '<strong>Heatmaps Sectorielles :</strong> Voyez d\'un coup d\'oeil si vous etes surexpose au Tech ou a l\'Energy.',
    'es': '<strong>Heatmaps Sectoriales:</strong> Ve de un vistazo si estas sobreexpuesto en Tech o Energy.',
}
vg['dashboardFeature2'] = {
    'it': '<strong>P&L Multi-Periodo:</strong> Analizza i rendimenti non solo "totali", ma per trimestre, anno o mese specifico.',
    'en': '<strong>Multi-Period P&L:</strong> Analyze returns not just "total", but by quarter, year, or specific month.',
    'de': '<strong>Multi-Perioden P&L:</strong> Analysieren Sie Renditen nicht nur "gesamt", sondern nach Quartal, Jahr oder bestimmtem Monat.',
    'fr': '<strong>P&L Multi-Periode :</strong> Analysez les rendements pas seulement "totaux", mais par trimestre, annee ou mois specifique.',
    'es': '<strong>P&L Multi-Periodo:</strong> Analiza los rendimientos no solo "totales", sino por trimestre, ano o mes especifico.',
}
vg['dashboardFeature3'] = {
    'it': '<strong>Widget Personalizzabili:</strong> Vuoi il grafico a torta a sinistra e la lista dividendi a destra? Spostali. Sei tu a decidere cosa vedere.',
    'en': '<strong>Customizable Widgets:</strong> Want the pie chart on the left and the dividend list on the right? Move them. You decide what to see.',
    'de': '<strong>Anpassbare Widgets:</strong> Tortendiagramm links und Dividendenliste rechts? Verschieben Sie sie. Sie entscheiden, was Sie sehen.',
    'fr': '<strong>Widgets Personnalisables :</strong> Vous voulez le camembert a gauche et la liste des dividendes a droite ? Deplacez-les. C\'est vous qui decidez quoi voir.',
    'es': '<strong>Widgets Personalizables:</strong> Quieres el grafico de pastel a la izquierda y la lista de dividendos a la derecha? Muevelos. Tu decides que ver.',
}

# Pricing
vg['pricingTitle'] = {
    'it': 'Pricing: Chi Conviene nel 2026?',
    'en': 'Pricing: Who Wins in 2026?',
    'de': 'Preise: Wer gewinnt 2026?',
    'fr': 'Tarifs : Qui est le plus avantageux en 2026 ?',
    'es': 'Precios: Quien Conviene en 2026?',
}
vg['pricingGetquin'] = {
    'it': 'Getquin offre molto gratuitamente, ma le funzioni di analisi profonda (come il raggi X del portafoglio) sono spesso dietro un paywall "Premium" che puo costare caro su base annua.',
    'en': 'Getquin offers a lot for free, but deep analysis features (like portfolio X-ray) are often behind a "Premium" paywall that can be costly on an annual basis.',
    'de': 'Getquin bietet viel kostenlos an, aber tiefgehende Analysefunktionen (wie Portfolio-Roentgen) stecken oft hinter einer "Premium"-Paywall, die jaehrlich teuer werden kann.',
    'fr': 'Getquin offre beaucoup gratuitement, mais les fonctions d\'analyse approfondie (comme la radiographie du portefeuille) sont souvent derriere un paywall "Premium" qui peut couter cher sur base annuelle.',
    'es': 'Getquin ofrece mucho gratis, pero las funciones de analisis profundo (como la radiografia del portafolio) estan a menudo detras de un paywall "Premium" que puede ser costoso anualmente.',
}
vg['pricingDonky'] = {
    'it': 'DonkyCapital sta lanciando un programma Early Access. Attualmente, i primi utenti possono accedere a tutte le funzionalita Premium (multi-portafoglio, transazioni illimitate, 8 dashboard) gratuitamente durante la fase beta. A regime, il piano Standard partira da un prezzo molto competitivo (circa 5,99\u20ac/mese), rendendolo una Getquin alternativa molto conveniente per chi gestisce piu portafogli (o per i consulenti finanziari che gestiscono i clienti).',
    'en': 'DonkyCapital is launching an Early Access program. Currently, the first users can access all Premium features (multi-portfolio, unlimited transactions, 8 dashboards) for free during the beta phase. At full launch, the Standard plan will start at a very competitive price (around \u20ac5.99/month), making it a very affordable Getquin alternative for those managing multiple portfolios (or financial advisors managing clients).',
    'de': 'DonkyCapital startet ein Early-Access-Programm. Derzeit koennen die ersten Nutzer alle Premium-Funktionen (Multi-Portfolio, unbegrenzte Transaktionen, 8 Dashboards) waehrend der Beta-Phase kostenlos nutzen. Im Regelbetrieb wird der Standard-Plan bei einem sehr wettbewerbsfaehigen Preis (ca. 5,99\u20ac/Monat) starten, was es zu einer sehr guenstigen Getquin-Alternative fuer Multi-Portfolio-Nutzer (oder Finanzberater) macht.',
    'fr': 'DonkyCapital lance un programme Early Access. Actuellement, les premiers utilisateurs peuvent acceder a toutes les fonctionnalites Premium (multi-portefeuille, transactions illimitees, 8 tableaux de bord) gratuitement pendant la phase beta. A terme, le plan Standard demarrera a un prix tres competitif (environ 5,99\u20ac/mois), ce qui en fait une alternative Getquin tres abordable pour ceux qui gerent plusieurs portefeuilles (ou les conseillers financiers).',
    'es': 'DonkyCapital esta lanzando un programa Early Access. Actualmente, los primeros usuarios pueden acceder a todas las funcionalidades Premium (multi-cartera, transacciones ilimitadas, 8 dashboards) gratis durante la fase beta. A regimen, el plan Standard partira de un precio muy competitivo (alrededor de 5,99\u20ac/mes), convirtiendolo en una alternativa Getquin muy asequible para quienes gestionan multiples carteras (o asesores financieros).',
}

# Verdict
vg['verdictTitle'] = {
    'it': 'Verdetto: Quale scegliere?',
    'en': 'Verdict: Which One to Choose?',
    'de': 'Fazit: Welchen waehlen?',
    'fr': 'Verdict : Lequel choisir ?',
    'es': 'Veredicto: Cual elegir?',
}
vg['verdictGetquin'] = {
    'it': '<strong>Vincitore per "Social & Mobile": Getquin</strong><br/>Se vuoi investire dal divano e confrontarti con gli amici, Getquin rimane un\'ottima scelta consumer.',
    'en': '<strong>Winner for "Social & Mobile": Getquin</strong><br/>If you want to invest from the couch and compare with friends, Getquin remains a great consumer choice.',
    'de': '<strong>Gewinner fuer "Social & Mobile": Getquin</strong><br/>Wenn Sie vom Sofa aus investieren und sich mit Freunden vergleichen moechten, bleibt Getquin eine grossartige Consumer-Wahl.',
    'fr': '<strong>Gagnant pour "Social & Mobile" : Getquin</strong><br/>Si vous voulez investir depuis le canape et vous comparer avec vos amis, Getquin reste un excellent choix grand public.',
    'es': '<strong>Ganador en "Social & Movil": Getquin</strong><br/>Si quieres invertir desde el sofa y compararte con amigos, Getquin sigue siendo una excelente opcion consumer.',
}
vg['verdictDonky'] = {
    'it': '<strong>Vincitore per "Analisi & Privacy": DonkyCapital</strong><br/>Se sei un investitore che prende sul serio i propri dati, se usi piu broker (come Degiro, Directa, Scalable) e vuoi una dashboard unificata senza rischi di sicurezza, DonkyCapital e la scelta migliore. La sua natura di PWA lo rende perfetto per chi ama analizzare i grafici su uno schermo decente, senza rinunciare alla consultazione da mobile.',
    'en': '<strong>Winner for "Analysis & Privacy": DonkyCapital</strong><br/>If you\'re an investor who takes your data seriously, use multiple brokers (like Degiro, Directa, Scalable) and want a unified dashboard without security risks, DonkyCapital is the best choice. Its PWA nature makes it perfect for those who love analyzing charts on a decent screen without giving up mobile access.',
    'de': '<strong>Gewinner fuer "Analyse & Datenschutz": DonkyCapital</strong><br/>Wenn Sie ein Anleger sind, der seine Daten ernst nimmt, mehrere Broker nutzt (wie Degiro, Directa, Scalable) und ein einheitliches Dashboard ohne Sicherheitsrisiken moechte, ist DonkyCapital die beste Wahl. Seine PWA-Natur macht es perfekt fuer diejenigen, die Diagramme auf einem anstaendigen Bildschirm analysieren moechten, ohne auf den mobilen Zugriff zu verzichten.',
    'fr': '<strong>Gagnant pour "Analyse & Confidentialite" : DonkyCapital</strong><br/>Si vous etes un investisseur qui prend ses donnees au serieux, utilisez plusieurs courtiers (comme Degiro, Directa, Scalable) et voulez un tableau de bord unifie sans risques de securite, DonkyCapital est le meilleur choix. Sa nature de PWA le rend parfait pour ceux qui aiment analyser les graphiques sur un ecran decent sans renoncer a la consultation mobile.',
    'es': '<strong>Ganador en "Analisis & Privacidad": DonkyCapital</strong><br/>Si eres un inversor que se toma en serio sus datos, usas multiples brokers (como Degiro, Directa, Scalable) y quieres un dashboard unificado sin riesgos de seguridad, DonkyCapital es la mejor eleccion. Su naturaleza de PWA lo hace perfecto para quienes aman analizar graficos en una pantalla decente sin renunciar a la consulta movil.',
}

# CTA
vg['ctaTitle'] = {
    'it': 'Stanco di regalare i tuoi dati o di impazzire su Excel?',
    'en': 'Tired of giving away your data or going crazy with Excel?',
    'de': 'Muede davon, Ihre Daten herzugeben oder mit Excel verrueckt zu werden?',
    'fr': 'Fatigue de donner vos donnees ou de devenir fou avec Excel ?',
    'es': 'Cansado de regalar tus datos o de volverte loco con Excel?',
}
vg['ctaDesc'] = {
    'it': 'DonkyCapital sta aprendo le porte ai primi 100 utenti per l\'Early Access. Ottieni tutte le funzioni Premium Gratis per sempre (fino alla fine della beta).',
    'en': 'DonkyCapital is opening its doors to the first 100 users for Early Access. Get all Premium features Free forever (until the end of beta).',
    'de': 'DonkyCapital oeffnet seine Tueren fuer die ersten 100 Nutzer im Early Access. Erhalten Sie alle Premium-Funktionen fuer immer kostenlos (bis zum Ende der Beta).',
    'fr': 'DonkyCapital ouvre ses portes aux 100 premiers utilisateurs pour l\'Early Access. Obtenez toutes les fonctionnalites Premium Gratuitement pour toujours (jusqu\'a la fin de la beta).',
    'es': 'DonkyCapital esta abriendo sus puertas a los primeros 100 usuarios para el Early Access. Obtiene todas las funciones Premium Gratis para siempre (hasta el fin de la beta).',
}
vg['ctaButton'] = {
    'it': 'Crea la tua Dashboard Gratuita su DonkyCapital',
    'en': 'Create Your Free Dashboard on DonkyCapital',
    'de': 'Erstellen Sie Ihr kostenloses Dashboard auf DonkyCapital',
    'fr': 'Creez votre Dashboard Gratuit sur DonkyCapital',
    'es': 'Crea tu Dashboard Gratuito en DonkyCapital',
}
vg['ctaNote'] = {
    'it': 'Nessuna carta di credito richiesta. Nessuna password bancaria richiesta.',
    'en': 'No credit card required. No bank password required.',
    'de': 'Keine Kreditkarte erforderlich. Kein Bank-Passwort erforderlich.',
    'fr': 'Aucune carte de credit requise. Aucun mot de passe bancaire requis.',
    'es': 'Sin tarjeta de credito requerida. Sin contrasena bancaria requerida.',
}

with open(MASTER, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('Done: all vsGetquin translations added to master')
