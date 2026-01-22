import type { Locale } from '@/lib/i18n/config'

interface PrivacyContentProps {
  lang: Locale
}

export default function PrivacyContent({ lang }: PrivacyContentProps) {
  if (lang === 'it') {
    return <PrivacyIT />
  }
  if (lang === 'de') {
    return <PrivacyDE />
  }
  if (lang === 'fr') {
    return <PrivacyFR />
  }
  if (lang === 'es') {
    return <PrivacyES />
  }
  return <PrivacyEN />
}

function PrivacyEN() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        DonkyCapital Privacy Policy
      </h1>
      <p className="text-white/80 text-sm mb-6 italic">
        Last Updated: December 11, 2025
      </p>

      <p className="mb-4">
        This Privacy Policy describes how we collect, use, and disclose information about you when
        you use our Service, and explains your rights regarding personal data protection.
      </p>

      <p className="mb-6">
        We use Personal Data to provide and improve the Service. By using the Service, you agree
        to the collection and use of information in accordance with this Policy.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Interpretation and Definitions</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Interpretation</h3>
      <p className="mb-4">
        Capitalized words have the meanings defined in this Privacy Policy. Definitions apply to
        both singular and plural forms.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Definitions</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Account</strong>: an account created to access our Service or parts of it.</li>
        <li><strong>Affiliate</strong>: an entity that controls, is controlled by, or is under common control with another party (ownership ≥ 50%).</li>
        <li><strong>Company</strong> (&quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;): refers to DonkyCapital.</li>
        <li><strong>Cookies</strong>: small files stored on your device containing browsing information.</li>
        <li><strong>Country</strong>: Italy.</li>
        <li><strong>Device</strong>: any device that accesses the Service (computer, smartphone, tablet).</li>
        <li><strong>Personal Data</strong>: all information relating to an identified or identifiable individual.</li>
        <li><strong>Service</strong>: the website and services offered by DonkyCapital.</li>
        <li><strong>Service Provider</strong>: natural or legal persons who process data on behalf of the Company.</li>
        <li><strong>Usage Data</strong>: information collected automatically during use of the Service.</li>
        <li><strong>Website</strong>: DonkyCapital, accessible from www.donkycapital.com</li>
        <li><strong>You</strong>: the natural or legal person using the Service.</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Collection and Use of Your Personal Data</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Types of Data Collected</h3>

      <h4 className="font-semibold mt-4 mb-2">Personal Data</h4>
      <p className="mb-2">
        We may ask you to provide us with information useful to contact or identify you, including:
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>First and last name</li>
        <li>Email address</li>
        <li>Portfolio or financial transaction data</li>
        <li>Usage Data</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Usage Data</h4>
      <p className="mb-2">Collected automatically, may include:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Pages visited</li>
        <li>Date and duration of visit</li>
        <li>Unique device identifiers</li>
        <li>Diagnostic data</li>
        <li>Mobile device information (operating system, device type, unique ID)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Tracking Technologies and Cookies</h2>

      <p className="mb-4">
        We use Cookies and similar technologies (web beacons, tags, and scripts) to analyze Service
        usage and improve the experience.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Types of Cookies Used</h3>

      <h4 className="font-semibold mt-4 mb-2">Necessary / Essential Cookies</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Type: Session</li>
        <li>Managed by: Us</li>
        <li>Purpose: authentication and fraud prevention.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Policy Acceptance Cookies</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Type: Persistent</li>
        <li>Managed by: Us</li>
        <li>Purpose: store Cookie consent.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Functionality Cookies</h4>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Type: Persistent</li>
        <li>Managed by: Us</li>
        <li>Purpose: remember preferences (language, login).</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Use of Personal Data</h2>

      <p className="mb-2">The Company may use your data to:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Provide and maintain the Service</li>
        <li>Manage your Account</li>
        <li>Execute contracts and contractual obligations</li>
        <li>Contact you via email or notifications</li>
        <li>Provide news, updates, and offers</li>
        <li>Manage your requests</li>
        <li>Internal analysis and service improvement</li>
        <li>Corporate operations (mergers, acquisitions, transfers)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Sharing Your Data</h2>

      <p className="mb-2 font-semibold">Your data may be shared:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>With our Service Providers</li>
        <li>In case of corporate operations (mergers, acquisitions)</li>
        <li>With our Affiliates</li>
        <li>With other users (public areas of the service)</li>
        <li>With your explicit consent</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Data Retention</h2>

      <p className="mb-6">
        We retain your Personal Data only for as long as necessary for the purposes described or
        required by law.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Data Transfer</h2>

      <p className="mb-6">
        Your data is not transferred outside the European Union. All processing takes place within
        the EU, in compliance with GDPR.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Data Deletion</h2>

      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Access your data</li>
        <li>Rectify it</li>
        <li>Request deletion</li>
        <li>Restrict processing</li>
        <li>Request portability</li>
        <li>Object to processing</li>
      </ul>

      <p className="mb-6">
        You can manage some information directly from your Account or by contacting us.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Disclosure of Personal Data</h2>

      <p className="mb-4">We may disclose your data in case of:</p>

      <h4 className="font-semibold mt-4 mb-2">Business Transactions</h4>
      <p className="mb-4">Mergers, acquisitions, or sales.</p>

      <h4 className="font-semibold mt-4 mb-2">Law Enforcement</h4>
      <p className="mb-4">If required by legal obligations.</p>

      <h4 className="font-semibold mt-4 mb-2">General Legal Obligations</h4>
      <p className="mb-2">To:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>comply with regulations</li>
        <li>defend our rights</li>
        <li>prevent fraud</li>
        <li>protect user security</li>
        <li>manage legal liabilities</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Data Security</h2>

      <p className="mb-6">
        We adopt adequate technical and organizational measures to protect your personal data and
        ensure its confidentiality, integrity, and availability, in accordance with current regulations.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Links to Third Party Sites</h2>

      <p className="mb-6">
        We are not responsible for the content and policies of external sites linked to our Service.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Changes to Privacy Policy</h2>

      <p className="mb-6">
        We may update this Policy periodically.<br />
        We will inform you via email or notices on the Site.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Data Controller</h2>

      <p className="mb-6">
        The <em>DonkyCapital</em> project is currently managed by an individual controller operating
        on a personal basis, based in Verona (Italy).<br />
        The Data Controller can be identified via the address{' '}
        <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a> which can be
        contacted for requests relating to access, modification, or deletion of Personal Data, as
        well as for exercising the rights provided by GDPR.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          For questions: <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function PrivacyIT() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        Informativa sulla Privacy di DonkyCapital
      </h1>
      <p className="text-white/80 text-sm mb-6 italic">
        Ultimo aggiornamento: 11 dicembre 2025
      </p>

      <p className="mb-4">
        La presente Informativa sulla Privacy descrive come raccogliamo, utilizziamo e divulghiamo
        le informazioni che ti riguardano quando utilizzi il nostro Servizio, e illustra i tuoi diritti
        in materia di protezione dei dati personali.
      </p>

      <p className="mb-6">
        Utilizziamo i Dati Personali per fornire e migliorare il Servizio. Utilizzando il Servizio,
        accetti la raccolta e l&apos;utilizzo delle informazioni in conformità con la presente Informativa.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Interpretazione e Definizioni</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Interpretazione</h3>
      <p className="mb-4">
        Le parole con iniziale maiuscola hanno il significato definito nella presente Informativa.
        Le definizioni si applicano sia al singolare che al plurale.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Definizioni</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Account</strong>: un account creato per accedere al nostro Servizio o a parti di esso.</li>
        <li><strong>Affiliata</strong>: entità che controlla, è controllata o è sotto controllo comune con un&apos;altra parte (proprietà ≥ 50%).</li>
        <li><strong>Società</strong> (&quot;la Società&quot;, &quot;Noi&quot;, &quot;Ci&quot; o &quot;Nostro&quot;): si riferisce a DonkyCapital.</li>
        <li><strong>Cookie</strong>: piccoli file memorizzati sul tuo dispositivo che contengono informazioni di navigazione.</li>
        <li><strong>Paese</strong>: Italia.</li>
        <li><strong>Dispositivo</strong>: qualunque dispositivo che accede al Servizio (computer, smartphone, tablet).</li>
        <li><strong>Dati Personali</strong>: tutte le informazioni relative a individuo identificato o identificabile.</li>
        <li><strong>Servizio</strong>: il sito web e i servizi offerti da DonkyCapital.</li>
        <li><strong>Fornitore di Servizi</strong>: persone fisiche o giuridiche che elaborano dati per conto della Società.</li>
        <li><strong>Dati di Utilizzo</strong>: informazioni raccolte automaticamente durante l&apos;uso del Servizio.</li>
        <li><strong>Sito Web</strong>: DonkyCapital, accessibile da www.donkycapital.com</li>
        <li><strong>Tu</strong>: la persona fisica o giuridica che utilizza il Servizio.</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Raccolta e Utilizzo dei Tuoi Dati Personali</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Tipologie di dati raccolti</h3>

      <h4 className="font-semibold mt-4 mb-2">Dati Personali</h4>
      <p className="mb-2">
        Possiamo chiederti di fornirci informazioni utili a contattarti o identificarti, tra cui:
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Nome e cognome</li>
        <li>Indirizzo email</li>
        <li>Dati relativi al portafoglio o alle transazioni finanziarie</li>
        <li>Dati di Utilizzo</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Dati di Utilizzo</h4>
      <p className="mb-2">Raccolti automaticamente, possono includere:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Indirizzo IP</li>
        <li>Tipo e versione del browser</li>
        <li>Pagine visitate</li>
        <li>Data e durata della visita</li>
        <li>Identificatori univoci del dispositivo</li>
        <li>Dati diagnostici</li>
        <li>Informazioni sul dispositivo mobile (sistema operativo, tipo di dispositivo, ID univoco)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Tecnologie di tracciamento e Cookie</h2>

      <p className="mb-4">
        Utilizziamo Cookie e tecnologie simili (web beacon, tag e script) per analizzare l&apos;uso del Servizio
        e migliorarne l&apos;esperienza.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Tipi di Cookie utilizzati</h3>

      <h4 className="font-semibold mt-4 mb-2">Cookie Necessari / Essenziali</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Tipo: Sessione</li>
        <li>Gestiti da: Noi</li>
        <li>Scopo: autenticazione e prevenzione attività fraudolente.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Cookie di accettazione dell&apos;informativa</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Tipo: Persistenti</li>
        <li>Gestiti da: Noi</li>
        <li>Scopo: memorizzare il consenso ai Cookie.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Cookie di Funzionalità</h4>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Tipo: Persistenti</li>
        <li>Gestiti da: Noi</li>
        <li>Scopo: ricordare preferenze (lingua, login).</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Uso dei Dati Personali</h2>

      <p className="mb-2">La Società può utilizzare i tuoi dati per:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Fornire e mantenere il Servizio</li>
        <li>Gestire il tuo Account</li>
        <li>Eseguire contratti e obblighi contrattuali</li>
        <li>Contattarti tramite email o notifiche</li>
        <li>Fornire novità, aggiornamenti e offerte</li>
        <li>Gestire le tue richieste</li>
        <li>Analisi interne e miglioramento del servizio</li>
        <li>Operazioni societarie (fusioni, acquisizioni, cessioni)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Condivisione dei tuoi dati</h2>

      <p className="mb-2 font-semibold">I tuoi dati possono essere condivisi:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Con i nostri Fornitori di Servizi</li>
        <li>In caso di operazioni societarie (fusioni, acquisizioni)</li>
        <li>Con le nostre Affiliate</li>
        <li>Con altri utenti (aree pubbliche del servizio)</li>
        <li>Con il tuo consenso esplicito</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Conservazione dei Dati</h2>

      <p className="mb-6">
        Conserviamo i tuoi Dati Personali solo per il tempo necessario agli scopi descritti o richiesti per legge.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Trasferimento dei Dati</h2>

      <p className="mb-6">
        I tuoi dati non vengono trasferiti al di fuori dell&apos;Unione Europea. Tutti i trattamenti avvengono
        all&apos;interno dell&apos;UE, nel rispetto del GDPR.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Cancellazione dei Dati</h2>

      <p className="mb-2">Hai diritto a:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Accedere ai dati</li>
        <li>Rettificarli</li>
        <li>Richiederne la cancellazione</li>
        <li>Limitare il trattamento</li>
        <li>Richiedere portabilità</li>
        <li>Opporsi al trattamento</li>
      </ul>

      <p className="mb-6">
        Puoi gestire parte delle informazioni direttamente dal tuo Account o contattandoci.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Divulgazione dei Dati Personali</h2>

      <p className="mb-4">Possiamo divulgare i tuoi dati in caso di:</p>

      <h4 className="font-semibold mt-4 mb-2">Transazioni aziendali</h4>
      <p className="mb-4">Fusioni, acquisizioni o vendite.</p>

      <h4 className="font-semibold mt-4 mb-2">Forze dell&apos;ordine</h4>
      <p className="mb-4">Se richiesto per obblighi legali.</p>

      <h4 className="font-semibold mt-4 mb-2">Obblighi legali generali</h4>
      <p className="mb-2">Per:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>rispettare normative</li>
        <li>difendere i nostri diritti</li>
        <li>prevenire frodi</li>
        <li>proteggere la sicurezza degli utenti</li>
        <li>gestire responsabilità legali</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Sicurezza dei Dati</h2>

      <p className="mb-6">
        Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati personali e
        garantirne la riservatezza, l&apos;integrità e la disponibilità, conformemente alla normativa vigente.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Link a Siti Terzi</h2>

      <p className="mb-6">
        Non siamo responsabili per contenuti e policy dei siti esterni collegati al nostro Servizio.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Modifiche alla Privacy Policy</h2>

      <p className="mb-6">
        Potremmo aggiornare periodicamente questa Informativa.<br />
        Ti informeremo tramite email o avvisi sul Sito.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Titolare del Trattamento dei Dati</h2>

      <p className="mb-6">
        Il progetto <em>DonkyCapital</em> è attualmente gestito da un responsabile individuale operante
        a titolo personale, con sede a Verona (Italia).<br />
        Il Titolare del Trattamento è identificabile tramite indirizzo{' '}
        <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a> al quale può
        essere contattato per richieste relative all&apos;accesso, alla modifica o alla cancellazione dei
        Dati Personali, nonché per l&apos;esercizio dei diritti previsti dal GDPR.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Per domande: <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function PrivacyDE() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        DonkyCapital Datenschutzrichtlinie
      </h1>
      <p className="text-white/80 text-sm mb-6 italic">
        Letzte Aktualisierung: 11. Dezember 2025
      </p>

      <p className="mb-4">
        Diese Datenschutzrichtlinie beschreibt, wie wir Informationen über Sie sammeln, verwenden und weitergeben, wenn
        Sie unseren Dienst nutzen, und erläutert Ihre Rechte in Bezug auf den Schutz personenbezogener Daten.
      </p>

      <p className="mb-6">
        Wir verwenden personenbezogene Daten, um den Dienst bereitzustellen und zu verbessern. Durch die Nutzung des Dienstes stimmen Sie
        der Erfassung und Verwendung von Informationen gemäß dieser Richtlinie zu.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Interpretation und Definitionen</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Interpretation</h3>
      <p className="mb-4">
        Großgeschriebene Wörter haben die in dieser Datenschutzrichtlinie definierten Bedeutungen. Die Definitionen gelten sowohl für
        Singular- als auch für Pluralformen.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Definitionen</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Konto</strong>: ein Konto, das erstellt wurde, um auf unseren Dienst oder Teile davon zuzugreifen.</li>
        <li><strong>Verbundenes Unternehmen</strong>: eine Einheit, die eine andere Partei kontrolliert, von ihr kontrolliert wird oder unter gemeinsamer Kontrolle steht (Eigentum ≥ 50%).</li>
        <li><strong>Unternehmen</strong> (&quot;das Unternehmen&quot;, &quot;Wir&quot;, &quot;Uns&quot; oder &quot;Unser&quot;): bezieht sich auf DonkyCapital.</li>
        <li><strong>Cookies</strong>: kleine Dateien, die auf Ihrem Gerät gespeichert werden und Browsing-Informationen enthalten.</li>
        <li><strong>Land</strong>: Italien.</li>
        <li><strong>Gerät</strong>: jedes Gerät, das auf den Dienst zugreift (Computer, Smartphone, Tablet).</li>
        <li><strong>Personenbezogene Daten</strong>: alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.</li>
        <li><strong>Dienst</strong>: die Website und die von DonkyCapital angebotenen Dienste.</li>
        <li><strong>Dienstanbieter</strong>: natürliche oder juristische Personen, die Daten im Auftrag des Unternehmens verarbeiten.</li>
        <li><strong>Nutzungsdaten</strong>: Informationen, die automatisch während der Nutzung des Dienstes gesammelt werden.</li>
        <li><strong>Website</strong>: DonkyCapital, erreichbar unter www.donkycapital.com</li>
        <li><strong>Sie</strong>: die natürliche oder juristische Person, die den Dienst nutzt.</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Erfassung und Verwendung Ihrer personenbezogenen Daten</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Arten der gesammelten Daten</h3>

      <h4 className="font-semibold mt-4 mb-2">Personenbezogene Daten</h4>
      <p className="mb-2">
        Wir können Sie bitten, uns Informationen zur Verfügung zu stellen, die nützlich sind, um Sie zu kontaktieren oder zu identifizieren, einschließlich:
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Vor- und Nachname</li>
        <li>E-Mail-Adresse</li>
        <li>Portfolio- oder Finanztransaktionsdaten</li>
        <li>Nutzungsdaten</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Nutzungsdaten</h4>
      <p className="mb-2">Automatisch gesammelt, kann umfassen:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>IP-Adresse</li>
        <li>Browsertyp und -version</li>
        <li>Besuchte Seiten</li>
        <li>Datum und Dauer des Besuchs</li>
        <li>Eindeutige Gerätekennungen</li>
        <li>Diagnosedaten</li>
        <li>Informationen zum mobilen Gerät (Betriebssystem, Gerätetyp, eindeutige ID)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Tracking-Technologien und Cookies</h2>

      <p className="mb-4">
        Wir verwenden Cookies und ähnliche Technologien (Web Beacons, Tags und Skripte), um die Nutzung des Dienstes zu analysieren
        und das Erlebnis zu verbessern.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Arten der verwendeten Cookies</h3>

      <h4 className="font-semibold mt-4 mb-2">Notwendige / Wesentliche Cookies</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Typ: Sitzung</li>
        <li>Verwaltet von: Uns</li>
        <li>Zweck: Authentifizierung und Betrugsprävention.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Cookies zur Richtlinienakzeptanz</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Typ: Persistent</li>
        <li>Verwaltet von: Uns</li>
        <li>Zweck: Cookie-Einwilligung speichern.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Funktions-Cookies</h4>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Typ: Persistent</li>
        <li>Verwaltet von: Uns</li>
        <li>Zweck: Einstellungen merken (Sprache, Login).</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Verwendung personenbezogener Daten</h2>

      <p className="mb-2">Das Unternehmen kann Ihre Daten verwenden, um:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Den Dienst bereitzustellen und zu pflegen</li>
        <li>Ihr Konto zu verwalten</li>
        <li>Verträge und vertragliche Verpflichtungen auszuführen</li>
        <li>Sie per E-Mail oder Benachrichtigungen zu kontaktieren</li>
        <li>Neuigkeiten, Updates und Angebote bereitzustellen</li>
        <li>Ihre Anfragen zu verwalten</li>
        <li>Interne Analyse und Serviceverbesserung</li>
        <li>Unternehmensoperationen (Fusionen, Übernahmen, Übertragungen)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Weitergabe Ihrer Daten</h2>

      <p className="mb-2 font-semibold">Ihre Daten können weitergegeben werden:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>An unsere Dienstanbieter</li>
        <li>Im Falle von Unternehmensoperationen (Fusionen, Übernahmen)</li>
        <li>An unsere verbundenen Unternehmen</li>
        <li>Mit anderen Benutzern (öffentliche Bereiche des Dienstes)</li>
        <li>Mit Ihrer ausdrücklichen Zustimmung</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Datenspeicherung</h2>

      <p className="mb-6">
        Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie es für die beschriebenen Zwecke erforderlich ist oder
        gesetzlich vorgeschrieben.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Datenübertragung</h2>

      <p className="mb-6">
        Ihre Daten werden nicht außerhalb der Europäischen Union übertragen. Alle Verarbeitungen erfolgen innerhalb
        der EU, in Übereinstimmung mit der DSGVO.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Datenlöschung</h2>

      <p className="mb-2">Sie haben das Recht:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Auf Ihre Daten zuzugreifen</li>
        <li>Sie zu berichtigen</li>
        <li>Löschung zu verlangen</li>
        <li>Die Verarbeitung einzuschränken</li>
        <li>Übertragbarkeit zu verlangen</li>
        <li>Der Verarbeitung zu widersprechen</li>
      </ul>

      <p className="mb-6">
        Sie können einige Informationen direkt von Ihrem Konto aus verwalten oder uns kontaktieren.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Offenlegung personenbezogener Daten</h2>

      <p className="mb-4">Wir können Ihre Daten offenlegen im Falle von:</p>

      <h4 className="font-semibold mt-4 mb-2">Geschäftstransaktionen</h4>
      <p className="mb-4">Fusionen, Übernahmen oder Verkäufe.</p>

      <h4 className="font-semibold mt-4 mb-2">Strafverfolgung</h4>
      <p className="mb-4">Wenn gesetzlich erforderlich.</p>

      <h4 className="font-semibold mt-4 mb-2">Allgemeine rechtliche Verpflichtungen</h4>
      <p className="mb-2">Um:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Vorschriften einzuhalten</li>
        <li>Unsere Rechte zu verteidigen</li>
        <li>Betrug zu verhindern</li>
        <li>Die Sicherheit der Benutzer zu schützen</li>
        <li>Rechtliche Verbindlichkeiten zu verwalten</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Datensicherheit</h2>

      <p className="mb-6">
        Wir ergreifen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten zu schützen und
        ihre Vertraulichkeit, Integrität und Verfügbarkeit gemäß den geltenden Vorschriften zu gewährleisten.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Links zu Websites Dritter</h2>

      <p className="mb-6">
        Wir sind nicht verantwortlich für die Inhalte und Richtlinien externer Websites, die mit unserem Dienst verlinkt sind.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Änderungen der Datenschutzrichtlinie</h2>

      <p className="mb-6">
        Wir können diese Richtlinie regelmäßig aktualisieren.<br />
        Wir werden Sie per E-Mail oder durch Hinweise auf der Website informieren.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Verantwortlicher für die Datenverarbeitung</h2>

      <p className="mb-6">
        Das <em>DonkyCapital</em>-Projekt wird derzeit von einem einzelnen Verantwortlichen betrieben, der auf persönlicher Basis arbeitet, mit Sitz in Verona (Italien).<br />
        Der Verantwortliche für die Datenverarbeitung ist unter der Adresse{' '}
        <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a> erreichbar, die
        für Anfragen bezüglich des Zugangs, der Änderung oder Löschung personenbezogener Daten sowie für die Ausübung der durch die DSGVO gewährten Rechte kontaktiert werden kann.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Bei Fragen: <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function PrivacyFR() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        Politique de confidentialité de DonkyCapital
      </h1>
      <p className="text-white/80 text-sm mb-6 italic">
        Dernière mise à jour : 11 décembre 2025
      </p>

      <p className="mb-4">
        Cette politique de confidentialité décrit comment nous collectons, utilisons et divulguons des informations vous concernant lorsque
        vous utilisez notre Service, et explique vos droits en matière de protection des données personnelles.
      </p>

      <p className="mb-6">
        Nous utilisons les données personnelles pour fournir et améliorer le Service. En utilisant le Service, vous acceptez
        la collecte et l&apos;utilisation des informations conformément à cette politique.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Interprétation et définitions</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Interprétation</h3>
      <p className="mb-4">
        Les mots en majuscules ont les significations définies dans cette politique de confidentialité. Les définitions s&apos;appliquent
        aux formes singulières et plurielles.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Définitions</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Compte</strong> : un compte créé pour accéder à notre Service ou à des parties de celui-ci.</li>
        <li><strong>Affilié</strong> : une entité qui contrôle, est contrôlée par ou est sous contrôle commun avec une autre partie (propriété ≥ 50%).</li>
        <li><strong>Société</strong> (&quot;la Société&quot;, &quot;Nous&quot;, &quot;Notre&quot;) : désigne DonkyCapital.</li>
        <li><strong>Cookies</strong> : petits fichiers stockés sur votre appareil contenant des informations de navigation.</li>
        <li><strong>Pays</strong> : Italie.</li>
        <li><strong>Appareil</strong> : tout appareil accédant au Service (ordinateur, smartphone, tablette).</li>
        <li><strong>Données personnelles</strong> : toutes les informations relatives à une personne identifiée ou identifiable.</li>
        <li><strong>Service</strong> : le site web et les services offerts par DonkyCapital.</li>
        <li><strong>Prestataire de services</strong> : personnes physiques ou morales qui traitent des données pour le compte de la Société.</li>
        <li><strong>Données d&apos;utilisation</strong> : informations collectées automatiquement lors de l&apos;utilisation du Service.</li>
        <li><strong>Site web</strong> : DonkyCapital, accessible depuis www.donkycapital.com</li>
        <li><strong>Vous</strong> : la personne physique ou morale utilisant le Service.</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Collecte et utilisation de vos données personnelles</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Types de données collectées</h3>

      <h4 className="font-semibold mt-4 mb-2">Données personnelles</h4>
      <p className="mb-2">
        Nous pouvons vous demander de nous fournir des informations utiles pour vous contacter ou vous identifier, notamment :
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Prénom et nom</li>
        <li>Adresse e-mail</li>
        <li>Données de portefeuille ou de transactions financières</li>
        <li>Données d&apos;utilisation</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Données d&apos;utilisation</h4>
      <p className="mb-2">Collectées automatiquement, peuvent inclure :</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Adresse IP</li>
        <li>Type et version du navigateur</li>
        <li>Pages visitées</li>
        <li>Date et durée de la visite</li>
        <li>Identifiants d&apos;appareil uniques</li>
        <li>Données de diagnostic</li>
        <li>Informations sur l&apos;appareil mobile (système d&apos;exploitation, type d&apos;appareil, ID unique)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Technologies de suivi et cookies</h2>

      <p className="mb-4">
        Nous utilisons des cookies et des technologies similaires (balises web, tags et scripts) pour analyser l&apos;utilisation du Service
        et améliorer l&apos;expérience.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Types de cookies utilisés</h3>

      <h4 className="font-semibold mt-4 mb-2">Cookies nécessaires / essentiels</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Type : Session</li>
        <li>Géré par : Nous</li>
        <li>Objectif : authentification et prévention de la fraude.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Cookies d&apos;acceptation de la politique</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Type : Persistant</li>
        <li>Géré par : Nous</li>
        <li>Objectif : stocker le consentement aux cookies.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Cookies de fonctionnalité</h4>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Type : Persistant</li>
        <li>Géré par : Nous</li>
        <li>Objectif : mémoriser les préférences (langue, connexion).</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Utilisation des données personnelles</h2>

      <p className="mb-2">La Société peut utiliser vos données pour :</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Fournir et maintenir le Service</li>
        <li>Gérer votre compte</li>
        <li>Exécuter des contrats et des obligations contractuelles</li>
        <li>Vous contacter par e-mail ou notifications</li>
        <li>Fournir des actualités, mises à jour et offres</li>
        <li>Gérer vos demandes</li>
        <li>Analyse interne et amélioration du service</li>
        <li>Opérations d&apos;entreprise (fusions, acquisitions, transferts)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Partage de vos données</h2>

      <p className="mb-2 font-semibold">Vos données peuvent être partagées :</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Avec nos prestataires de services</li>
        <li>En cas d&apos;opérations d&apos;entreprise (fusions, acquisitions)</li>
        <li>Avec nos affiliés</li>
        <li>Avec d&apos;autres utilisateurs (zones publiques du service)</li>
        <li>Avec votre consentement explicite</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Conservation des données</h2>

      <p className="mb-6">
        Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire aux fins décrites ou
        requis par la loi.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Transfert de données</h2>

      <p className="mb-6">
        Vos données ne sont pas transférées en dehors de l&apos;Union européenne. Tous les traitements ont lieu au sein
        de l&apos;UE, conformément au RGPD.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Suppression des données</h2>

      <p className="mb-2">Vous avez le droit de :</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Accéder à vos données</li>
        <li>Les rectifier</li>
        <li>Demander leur suppression</li>
        <li>Limiter le traitement</li>
        <li>Demander la portabilité</li>
        <li>Vous opposer au traitement</li>
      </ul>

      <p className="mb-6">
        Vous pouvez gérer certaines informations directement depuis votre compte ou en nous contactant.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Divulgation des données personnelles</h2>

      <p className="mb-4">Nous pouvons divulguer vos données en cas de :</p>

      <h4 className="font-semibold mt-4 mb-2">Transactions commerciales</h4>
      <p className="mb-4">Fusions, acquisitions ou ventes.</p>

      <h4 className="font-semibold mt-4 mb-2">Application de la loi</h4>
      <p className="mb-4">Si requis par des obligations légales.</p>

      <h4 className="font-semibold mt-4 mb-2">Obligations légales générales</h4>
      <p className="mb-2">Pour :</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Respecter les réglementations</li>
        <li>Défendre nos droits</li>
        <li>Prévenir la fraude</li>
        <li>Protéger la sécurité des utilisateurs</li>
        <li>Gérer les responsabilités légales</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Sécurité des données</h2>

      <p className="mb-6">
        Nous adoptons des mesures techniques et organisationnelles adéquates pour protéger vos données personnelles et
        assurer leur confidentialité, intégrité et disponibilité, conformément aux réglementations en vigueur.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Liens vers des sites tiers</h2>

      <p className="mb-6">
        Nous ne sommes pas responsables du contenu et des politiques des sites externes liés à notre Service.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Modifications de la politique de confidentialité</h2>

      <p className="mb-6">
        Nous pouvons mettre à jour cette politique périodiquement.<br />
        Nous vous informerons par e-mail ou par des avis sur le site.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Responsable du traitement des données</h2>

      <p className="mb-6">
        Le projet <em>DonkyCapital</em> est actuellement géré par un responsable individuel opérant à titre personnel, basé à Vérone (Italie).<br />
        Le responsable du traitement des données peut être identifié via l&apos;adresse{' '}
        <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a> qui peut être
        contactée pour les demandes relatives à l&apos;accès, à la modification ou à la suppression des données personnelles, ainsi que pour l&apos;exercice des droits prévus par le RGPD.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Pour toute question : <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function PrivacyES() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        Política de privacidad de DonkyCapital
      </h1>
      <p className="text-white/80 text-sm mb-6 italic">
        Última actualización: 11 de diciembre de 2025
      </p>

      <p className="mb-4">
        Esta Política de privacidad describe cómo recopilamos, usamos y divulgamos información sobre usted cuando
        utiliza nuestro Servicio, y explica sus derechos en materia de protección de datos personales.
      </p>

      <p className="mb-6">
        Utilizamos los datos personales para proporcionar y mejorar el Servicio. Al usar el Servicio, acepta
        la recopilación y el uso de información de acuerdo con esta Política.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Interpretación y definiciones</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Interpretación</h3>
      <p className="mb-4">
        Las palabras en mayúsculas tienen los significados definidos en esta Política de privacidad. Las definiciones se aplican
        tanto a las formas singulares como plurales.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Definiciones</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Cuenta</strong>: una cuenta creada para acceder a nuestro Servicio o partes del mismo.</li>
        <li><strong>Afiliado</strong>: una entidad que controla, está controlada por o está bajo control común con otra parte (propiedad ≥ 50%).</li>
        <li><strong>Empresa</strong> (&quot;la Empresa&quot;, &quot;Nosotros&quot;, &quot;Nos&quot; o &quot;Nuestro&quot;): se refiere a DonkyCapital.</li>
        <li><strong>Cookies</strong>: pequeños archivos almacenados en su dispositivo que contienen información de navegación.</li>
        <li><strong>País</strong>: Italia.</li>
        <li><strong>Dispositivo</strong>: cualquier dispositivo que acceda al Servicio (ordenador, smartphone, tablet).</li>
        <li><strong>Datos personales</strong>: toda información relacionada con una persona identificada o identificable.</li>
        <li><strong>Servicio</strong>: el sitio web y los servicios ofrecidos por DonkyCapital.</li>
        <li><strong>Proveedor de servicios</strong>: personas físicas o jurídicas que procesan datos en nombre de la Empresa.</li>
        <li><strong>Datos de uso</strong>: información recopilada automáticamente durante el uso del Servicio.</li>
        <li><strong>Sitio web</strong>: DonkyCapital, accesible desde www.donkycapital.com</li>
        <li><strong>Usted</strong>: la persona física o jurídica que utiliza el Servicio.</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Recopilación y uso de sus datos personales</h2>

      <h3 className="text-lg font-medium mb-2 mt-6">Tipos de datos recopilados</h3>

      <h4 className="font-semibold mt-4 mb-2">Datos personales</h4>
      <p className="mb-2">
        Podemos pedirle que nos proporcione información útil para contactarlo o identificarlo, incluyendo:
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Nombre y apellidos</li>
        <li>Dirección de correo electrónico</li>
        <li>Datos de cartera o transacciones financieras</li>
        <li>Datos de uso</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Datos de uso</h4>
      <p className="mb-2">Recopilados automáticamente, pueden incluir:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Dirección IP</li>
        <li>Tipo y versión del navegador</li>
        <li>Páginas visitadas</li>
        <li>Fecha y duración de la visita</li>
        <li>Identificadores únicos del dispositivo</li>
        <li>Datos de diagnóstico</li>
        <li>Información del dispositivo móvil (sistema operativo, tipo de dispositivo, ID único)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Tecnologías de seguimiento y cookies</h2>

      <p className="mb-4">
        Utilizamos cookies y tecnologías similares (balizas web, etiquetas y scripts) para analizar el uso del Servicio
        y mejorar la experiencia.
      </p>

      <h3 className="text-lg font-medium mb-2 mt-6">Tipos de cookies utilizadas</h3>

      <h4 className="font-semibold mt-4 mb-2">Cookies necesarias / esenciales</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Tipo: Sesión</li>
        <li>Gestionado por: Nosotros</li>
        <li>Propósito: autenticación y prevención de fraude.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Cookies de aceptación de política</h4>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Tipo: Persistente</li>
        <li>Gestionado por: Nosotros</li>
        <li>Propósito: almacenar el consentimiento de cookies.</li>
      </ul>

      <h4 className="font-semibold mt-4 mb-2">Cookies de funcionalidad</h4>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Tipo: Persistente</li>
        <li>Gestionado por: Nosotros</li>
        <li>Propósito: recordar preferencias (idioma, inicio de sesión).</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Uso de datos personales</h2>

      <p className="mb-2">La Empresa puede usar sus datos para:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Proporcionar y mantener el Servicio</li>
        <li>Gestionar su cuenta</li>
        <li>Ejecutar contratos y obligaciones contractuales</li>
        <li>Contactarlo por correo electrónico o notificaciones</li>
        <li>Proporcionar noticias, actualizaciones y ofertas</li>
        <li>Gestionar sus solicitudes</li>
        <li>Análisis interno y mejora del servicio</li>
        <li>Operaciones corporativas (fusiones, adquisiciones, transferencias)</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Compartir sus datos</h2>

      <p className="mb-2 font-semibold">Sus datos pueden compartirse:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Con nuestros proveedores de servicios</li>
        <li>En caso de operaciones corporativas (fusiones, adquisiciones)</li>
        <li>Con nuestros afiliados</li>
        <li>Con otros usuarios (áreas públicas del servicio)</li>
        <li>Con su consentimiento explícito</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Retención de datos</h2>

      <p className="mb-6">
        Conservamos sus datos personales solo durante el tiempo necesario para los fines descritos o
        requerido por ley.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Transferencia de datos</h2>

      <p className="mb-6">
        Sus datos no se transfieren fuera de la Unión Europea. Todo el procesamiento tiene lugar dentro
        de la UE, en cumplimiento del RGPD.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Eliminación de datos</h2>

      <p className="mb-2">Tiene derecho a:</p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Acceder a sus datos</li>
        <li>Rectificarlos</li>
        <li>Solicitar su eliminación</li>
        <li>Restringir el procesamiento</li>
        <li>Solicitar portabilidad</li>
        <li>Oponerse al procesamiento</li>
      </ul>

      <p className="mb-6">
        Puede gestionar parte de la información directamente desde su cuenta o contactándonos.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Divulgación de datos personales</h2>

      <p className="mb-4">Podemos divulgar sus datos en caso de:</p>

      <h4 className="font-semibold mt-4 mb-2">Transacciones comerciales</h4>
      <p className="mb-4">Fusiones, adquisiciones o ventas.</p>

      <h4 className="font-semibold mt-4 mb-2">Cumplimiento de la ley</h4>
      <p className="mb-4">Si lo requieren obligaciones legales.</p>

      <h4 className="font-semibold mt-4 mb-2">Obligaciones legales generales</h4>
      <p className="mb-2">Para:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Cumplir con las regulaciones</li>
        <li>Defender nuestros derechos</li>
        <li>Prevenir el fraude</li>
        <li>Proteger la seguridad de los usuarios</li>
        <li>Gestionar responsabilidades legales</li>
      </ul>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Seguridad de los datos</h2>

      <p className="mb-6">
        Adoptamos medidas técnicas y organizativas adecuadas para proteger sus datos personales y
        garantizar su confidencialidad, integridad y disponibilidad, de acuerdo con las regulaciones vigentes.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Enlaces a sitios de terceros</h2>

      <p className="mb-6">
        No somos responsables del contenido y las políticas de sitios externos vinculados a nuestro Servicio.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Cambios en la política de privacidad</h2>

      <p className="mb-6">
        Podemos actualizar esta Política periódicamente.<br />
        Le informaremos por correo electrónico o mediante avisos en el sitio.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-xl font-semibold mb-4 text-primary">Responsable del tratamiento de datos</h2>

      <p className="mb-6">
        El proyecto <em>DonkyCapital</em> está actualmente gestionado por un responsable individual que opera a título personal, con sede en Verona (Italia).<br />
        El responsable del tratamiento de datos puede ser identificado a través de la dirección{' '}
        <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a> que puede ser
        contactada para solicitudes relacionadas con el acceso, modificación o eliminación de datos personales, así como para el ejercicio de los derechos previstos por el RGPD.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Para preguntas: <a href="mailto:privacy@donkycapital.com" className="text-primary hover:underline">privacy@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}
