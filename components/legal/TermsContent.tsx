import type { Locale } from '@/lib/i18n/config'

interface TermsContentProps {
  lang: Locale
}

export default function TermsContent({ lang }: TermsContentProps) {
  if (lang === 'it') {
    return <TermsIT />
  }
  if (lang === 'de') {
    return <TermsDE />
  }
  if (lang === 'fr') {
    return <TermsFR />
  }
  if (lang === 'es') {
    return <TermsES />
  }
  return <TermsEN />
}

function TermsEN() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        DonkyCapital Terms and Conditions
      </h1>
      <p className="text-white/80 text-sm mb-6 font-semibold">
        Last Updated: December 11, 2025
      </p>

      <p className="mb-6">
        Welcome to <strong>DonkyCapital</strong>. By accessing and using our platform, you accept
        these Terms and Conditions.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-lg font-semibold mb-4 text-primary">1. Contracting Party</h2>
      <p className="mb-6">
        The contract is entered into between the registered user (&quot;Customer&quot;) and <strong>DonkyCapital</strong>,
        with registered office in Italy, email: support@donkycapital.com
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">2. Scope of Application</h2>
      <p className="mb-6">
        These terms govern the use of DonkyCapital, its online services, and mobile app.
        Future changes will be communicated to the Customer, who may accept them or withdraw from the services.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">3. Contract Subject</h2>
      <p className="mb-2">
        DonkyCapital is a fintech platform that allows registered users to view financial data and
        manage simulated portfolios.
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>We do not execute real financial transactions.</li>
        <li>Some data comes from external sources and may be updated or corrected.</li>
        <li>We offer both free and paid services.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">4. Registration and Account</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Using the services requires registration.</li>
        <li>The user guarantees that the data provided is truthful and up to date.</li>
        <li>Each account is personal: do not share credentials with third parties.</li>
        <li>DonkyCapital reserves the right to suspend or delete accounts for violations of the terms.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">5. User Obligations</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Do not damage the infrastructure or extract data illegally.</li>
        <li>Do not publish offensive, illegal, or discriminatory content.</li>
        <li>Keep your personal data up to date.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">6. Duration and Termination of Contract</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>The contract has an indefinite duration, with automatic renewal for paid subscriptions.</li>
        <li>You can withdraw at any time.</li>
        <li>DonkyCapital may suspend or discontinue services for contractual violations or legal reasons.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">7. Prices and Subscriptions</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Paid services are clearly indicated on the site.</li>
        <li>Monthly or annual subscriptions renew automatically unless canceled.</li>
        <li>No refunds are provided for partial periods.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">8. Price and Feature Changes</h2>
      <p className="mb-6">
        DonkyCapital may update prices and services. The user will be informed in advance and may
        cancel the subscription if they do not agree.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">9. Service Cancellation</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Monthly subscriptions: cancellation at the end of the current period.</li>
        <li>Annual subscriptions: cancellation at the end of the current year.</li>
        <li>Purchases through App Store or Google Play follow their respective refund policies.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">10. Payments</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Payments are made through indicated methods (Apple, Google, Stripe).</li>
        <li>The user is responsible for any additional charges or missed payments.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">11. Intellectual Property</h2>
      <p className="mb-6">
        All platform content is protected by copyright and trademarks. The user retains rights to
        their own content but grants DonkyCapital a license to use and promote public content.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">12. Electronic Communication</h2>
      <p className="mb-6">
        All communications occur primarily via email or platform. Postal mail is used only when
        legally necessary.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">13. Right of Withdrawal</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Consumers: 14 days to withdraw without reason.</li>
        <li>In case of withdrawal, services received must be returned or economically compensated if used before revocation.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">14. Liability Limitations</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>DonkyCapital does not guarantee completeness or accuracy of data.</li>
        <li>Not responsible for financial damages arising from use of the platform.</li>
        <li>The user is responsible for their own violations and will hold DonkyCapital harmless from third-party claims.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">15. Assignment Prohibition</h2>
      <p className="mb-6">
        The user&apos;s rights towards DonkyCapital cannot be assigned without consent.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">16. Applicable Law and Jurisdiction</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Italian law.</li>
        <li>Competent court: user&apos;s residence for consumers; Verona court for other users.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">17. Severability Clause</h2>
      <p className="mb-6">
        If a provision is invalid, the others remain valid. The invalid provision will be replaced
        by one that reflects the original intent.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          For questions: <a href="mailto:support@donkycapital.com" className="text-primary hover:underline">support@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function TermsIT() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        Termini e Condizioni di DonkyCapital
      </h1>
      <p className="text-white/80 text-sm mb-6 font-semibold">
        Ultimo aggiornamento: 11 dicembre 2025
      </p>

      <p className="mb-6">
        Benvenuto su <strong>DonkyCapital</strong>. Accedendo e utilizzando la nostra piattaforma,
        accetti i presenti Termini e Condizioni.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-lg font-semibold mb-4 text-primary">1. Parte contraente</h2>
      <p className="mb-6">
        Il contratto viene stipulato tra l&apos;utente registrato (&quot;Cliente&quot;) e <strong>DonkyCapital</strong>,
        con sede legale in Italia, email: support@donkycapital.com
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">2. Ambito di applicazione</h2>
      <p className="mb-6">
        Questi termini regolano l&apos;uso di DonkyCapital, dei suoi servizi online e dell&apos;app mobile.
        Modifiche future saranno comunicate al Cliente, che potrà accettarle o recedere dai servizi.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">3. Oggetto del contratto</h2>
      <p className="mb-2">
        DonkyCapital è una piattaforma fintech che consente agli utenti registrati di visualizzare
        dati finanziari e gestire portafogli simulati.
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Non eseguiamo transazioni finanziarie reali.</li>
        <li>Alcuni dati provengono da fonti esterne e potrebbero essere aggiornati o corretti.</li>
        <li>Offriamo servizi gratuiti e a pagamento.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">4. Registrazione e account</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>L&apos;uso dei servizi richiede registrazione.</li>
        <li>L&apos;utente garantisce che i dati forniti siano veritieri e aggiornati.</li>
        <li>Ogni account è personale: non condividere credenziali con terzi.</li>
        <li>DonkyCapital si riserva il diritto di sospendere o cancellare account per violazioni dei termini.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">5. Obblighi dell&apos;utente</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Non danneggiare l&apos;infrastruttura o estrarre dati in modo illecito.</li>
        <li>Non pubblicare contenuti offensivi, illegali o discriminatori.</li>
        <li>Mantieni aggiornati i tuoi dati personali.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">6. Durata e cessazione del contratto</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Il contratto ha durata indeterminata, con rinnovo automatico per gli abbonamenti a pagamento.</li>
        <li>Puoi recedere in qualsiasi momento.</li>
        <li>DonkyCapital può sospendere o interrompere i servizi per violazioni contrattuali o motivi legali.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">7. Prezzi e abbonamenti</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>I servizi a pagamento sono indicati chiaramente sul sito.</li>
        <li>Abbonamenti mensili o annuali si rinnovano automaticamente salvo cancellazione.</li>
        <li>Non sono previsti rimborsi per periodi parziali.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">8. Modifica delle tariffe e caratteristiche</h2>
      <p className="mb-6">
        DonkyCapital può aggiornare prezzi e servizi. L&apos;utente sarà informato in anticipo e potrà
        cancellare l&apos;abbonamento se non concorda.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">9. Cancellazione dei servizi</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Abbonamenti mensili: cancellazione alla fine del periodo corrente.</li>
        <li>Abbonamenti annuali: cancellazione alla fine dell&apos;anno in corso.</li>
        <li>L&apos;acquisto tramite App Store o Google Play segue le rispettive politiche di rimborso.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">10. Pagamenti</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>I pagamenti avvengono tramite metodi indicati (Apple, Google, Stripe).</li>
        <li>L&apos;utente è responsabile di eventuali spese aggiuntive o mancati pagamenti.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">11. Proprietà intellettuale</h2>
      <p className="mb-6">
        Tutti i contenuti della piattaforma sono protetti da copyright e marchi. L&apos;utente mantiene
        i diritti sui propri contenuti ma concede a DonkyCapital una licenza per l&apos;utilizzo e la
        promozione dei contenuti pubblici.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">12. Comunicazione elettronica</h2>
      <p className="mb-6">
        Tutte le comunicazioni avvengono principalmente via email o piattaforma. La posta cartacea
        viene usata solo se legalmente necessaria.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">13. Diritto di recesso</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Consumatori: 14 giorni per recedere senza motivazione.</li>
        <li>In caso di recesso, i servizi ricevuti devono essere restituiti o compensati economicamente se utilizzati prima della revoca.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">14. Limitazioni di responsabilità</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>DonkyCapital non garantisce completezza o correttezza dei dati.</li>
        <li>Non è responsabile per danni finanziari derivanti dall&apos;uso della piattaforma.</li>
        <li>L&apos;utente è responsabile delle proprie violazioni e terrà indenne DonkyCapital da richieste di terzi.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">15. Divieto di cessione</h2>
      <p className="mb-6">
        I diritti dell&apos;utente verso DonkyCapital non possono essere ceduti senza consenso.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">16. Legge applicabile e foro competente</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Legge italiana.</li>
        <li>Foro competente: residenza dell&apos;utente per i consumatori; tribunale di Verona per altri utenti.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">17. Clausola di separabilità</h2>
      <p className="mb-6">
        Se una disposizione fosse invalida, le altre restano valide. La disposizione invalida sarà
        sostituita da una che rispecchi il senso originale.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Per domande: <a href="mailto:support@donkycapital.com" className="text-primary hover:underline">support@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function TermsDE() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        DonkyCapital Allgemeine Geschäftsbedingungen
      </h1>
      <p className="text-white/80 text-sm mb-6 font-semibold">
        Letzte Aktualisierung: 11. Dezember 2025
      </p>

      <p className="mb-6">
        Willkommen bei <strong>DonkyCapital</strong>. Durch den Zugriff auf und die Nutzung unserer Plattform akzeptieren Sie
        diese Allgemeinen Geschäftsbedingungen.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-lg font-semibold mb-4 text-primary">1. Vertragspartei</h2>
      <p className="mb-6">
        Der Vertrag wird zwischen dem registrierten Benutzer (&quot;Kunde&quot;) und <strong>DonkyCapital</strong> geschlossen,
        mit Sitz in Italien, E-Mail: support@donkycapital.com
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">2. Anwendungsbereich</h2>
      <p className="mb-6">
        Diese Bedingungen regeln die Nutzung von DonkyCapital, seiner Online-Dienste und der mobilen App.
        Zukünftige Änderungen werden dem Kunden mitgeteilt, der sie akzeptieren oder von den Diensten zurücktreten kann.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">3. Vertragsgegenstand</h2>
      <p className="mb-2">
        DonkyCapital ist eine Fintech-Plattform, die es registrierten Benutzern ermöglicht, Finanzdaten anzuzeigen und
        simulierte Portfolios zu verwalten.
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Wir führen keine echten Finanztransaktionen durch.</li>
        <li>Einige Daten stammen aus externen Quellen und können aktualisiert oder korrigiert werden.</li>
        <li>Wir bieten sowohl kostenlose als auch kostenpflichtige Dienste an.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">4. Registrierung und Konto</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Die Nutzung der Dienste erfordert eine Registrierung.</li>
        <li>Der Benutzer garantiert, dass die angegebenen Daten wahrheitsgemäß und aktuell sind.</li>
        <li>Jedes Konto ist persönlich: Teilen Sie Ihre Zugangsdaten nicht mit Dritten.</li>
        <li>DonkyCapital behält sich das Recht vor, Konten bei Verstößen gegen die Bedingungen zu sperren oder zu löschen.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">5. Pflichten des Benutzers</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Beschädigen Sie nicht die Infrastruktur oder extrahieren Sie Daten nicht illegal.</li>
        <li>Veröffentlichen Sie keine beleidigenden, illegalen oder diskriminierenden Inhalte.</li>
        <li>Halten Sie Ihre persönlichen Daten aktuell.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">6. Vertragsdauer und -beendigung</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Der Vertrag hat eine unbefristete Laufzeit mit automatischer Verlängerung für kostenpflichtige Abonnements.</li>
        <li>Sie können jederzeit zurücktreten.</li>
        <li>DonkyCapital kann Dienste bei Vertragsverletzungen oder aus rechtlichen Gründen aussetzen oder beenden.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">7. Preise und Abonnements</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Kostenpflichtige Dienste sind auf der Website klar gekennzeichnet.</li>
        <li>Monatliche oder jährliche Abonnements verlängern sich automatisch, sofern sie nicht gekündigt werden.</li>
        <li>Für Teilzeiträume werden keine Rückerstattungen gewährt.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">8. Preis- und Funktionsänderungen</h2>
      <p className="mb-6">
        DonkyCapital kann Preise und Dienste aktualisieren. Der Benutzer wird im Voraus informiert und kann
        das Abonnement kündigen, wenn er nicht einverstanden ist.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">9. Dienstkündigung</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Monatliche Abonnements: Kündigung zum Ende des laufenden Zeitraums.</li>
        <li>Jährliche Abonnements: Kündigung zum Ende des laufenden Jahres.</li>
        <li>Käufe über den App Store oder Google Play folgen den jeweiligen Rückerstattungsrichtlinien.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">10. Zahlungen</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Zahlungen erfolgen über die angegebenen Methoden (Apple, Google, Stripe).</li>
        <li>Der Benutzer ist für zusätzliche Gebühren oder versäumte Zahlungen verantwortlich.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">11. Geistiges Eigentum</h2>
      <p className="mb-6">
        Alle Plattforminhalte sind durch Urheberrechte und Marken geschützt. Der Benutzer behält die Rechte an
        seinen eigenen Inhalten, gewährt DonkyCapital jedoch eine Lizenz zur Nutzung und Förderung öffentlicher Inhalte.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">12. Elektronische Kommunikation</h2>
      <p className="mb-6">
        Alle Kommunikationen erfolgen hauptsächlich per E-Mail oder Plattform. Postversand wird nur verwendet, wenn
        rechtlich erforderlich.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">13. Widerrufsrecht</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Verbraucher: 14 Tage Widerruf ohne Angabe von Gründen.</li>
        <li>Bei Widerruf müssen erhaltene Dienste zurückgegeben oder wirtschaftlich kompensiert werden, wenn sie vor dem Widerruf genutzt wurden.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">14. Haftungsbeschränkungen</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>DonkyCapital garantiert nicht die Vollständigkeit oder Richtigkeit der Daten.</li>
        <li>Nicht verantwortlich für finanzielle Schäden, die aus der Nutzung der Plattform entstehen.</li>
        <li>Der Benutzer ist für seine eigenen Verstöße verantwortlich und stellt DonkyCapital von Ansprüchen Dritter frei.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">15. Abtretungsverbot</h2>
      <p className="mb-6">
        Die Rechte des Benutzers gegenüber DonkyCapital können nicht ohne Zustimmung abgetreten werden.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">16. Anwendbares Recht und Gerichtsstand</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Italienisches Recht.</li>
        <li>Zuständiges Gericht: Wohnsitz des Benutzers für Verbraucher; Gericht Verona für andere Benutzer.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">17. Salvatorische Klausel</h2>
      <p className="mb-6">
        Wenn eine Bestimmung ungültig ist, bleiben die anderen gültig. Die ungültige Bestimmung wird durch
        eine ersetzt, die die ursprüngliche Absicht widerspiegelt.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Bei Fragen: <a href="mailto:support@donkycapital.com" className="text-primary hover:underline">support@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function TermsFR() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        Conditions générales de DonkyCapital
      </h1>
      <p className="text-white/80 text-sm mb-6 font-semibold">
        Dernière mise à jour : 11 décembre 2025
      </p>

      <p className="mb-6">
        Bienvenue sur <strong>DonkyCapital</strong>. En accédant et en utilisant notre plateforme, vous acceptez
        ces conditions générales.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-lg font-semibold mb-4 text-primary">1. Partie contractante</h2>
      <p className="mb-6">
        Le contrat est conclu entre l&apos;utilisateur enregistré (&quot;Client&quot;) et <strong>DonkyCapital</strong>,
        dont le siège social est en Italie, email : support@donkycapital.com
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">2. Champ d&apos;application</h2>
      <p className="mb-6">
        Ces conditions régissent l&apos;utilisation de DonkyCapital, de ses services en ligne et de l&apos;application mobile.
        Les modifications futures seront communiquées au Client, qui pourra les accepter ou se retirer des services.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">3. Objet du contrat</h2>
      <p className="mb-2">
        DonkyCapital est une plateforme fintech qui permet aux utilisateurs enregistrés de visualiser des données financières et
        de gérer des portefeuilles simulés.
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Nous n&apos;effectuons pas de transactions financières réelles.</li>
        <li>Certaines données proviennent de sources externes et peuvent être mises à jour ou corrigées.</li>
        <li>Nous offrons des services gratuits et payants.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">4. Inscription et compte</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>L&apos;utilisation des services nécessite une inscription.</li>
        <li>L&apos;utilisateur garantit que les données fournies sont véridiques et à jour.</li>
        <li>Chaque compte est personnel : ne partagez pas vos identifiants avec des tiers.</li>
        <li>DonkyCapital se réserve le droit de suspendre ou de supprimer des comptes en cas de violation des conditions.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">5. Obligations de l&apos;utilisateur</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Ne pas endommager l&apos;infrastructure ni extraire des données illégalement.</li>
        <li>Ne pas publier de contenu offensant, illégal ou discriminatoire.</li>
        <li>Maintenir vos données personnelles à jour.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">6. Durée et résiliation du contrat</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Le contrat a une durée indéterminée, avec renouvellement automatique pour les abonnements payants.</li>
        <li>Vous pouvez vous retirer à tout moment.</li>
        <li>DonkyCapital peut suspendre ou interrompre les services pour violations contractuelles ou raisons légales.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">7. Prix et abonnements</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Les services payants sont clairement indiqués sur le site.</li>
        <li>Les abonnements mensuels ou annuels se renouvellent automatiquement sauf annulation.</li>
        <li>Aucun remboursement n&apos;est prévu pour les périodes partielles.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">8. Modifications des prix et fonctionnalités</h2>
      <p className="mb-6">
        DonkyCapital peut mettre à jour les prix et les services. L&apos;utilisateur sera informé à l&apos;avance et pourra
        annuler l&apos;abonnement s&apos;il n&apos;est pas d&apos;accord.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">9. Annulation du service</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Abonnements mensuels : annulation à la fin de la période en cours.</li>
        <li>Abonnements annuels : annulation à la fin de l&apos;année en cours.</li>
        <li>Les achats via l&apos;App Store ou Google Play suivent leurs politiques de remboursement respectives.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">10. Paiements</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Les paiements s&apos;effectuent via les méthodes indiquées (Apple, Google, Stripe).</li>
        <li>L&apos;utilisateur est responsable des frais supplémentaires ou des paiements manqués.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">11. Propriété intellectuelle</h2>
      <p className="mb-6">
        Tout le contenu de la plateforme est protégé par des droits d&apos;auteur et des marques. L&apos;utilisateur conserve les droits sur
        son propre contenu mais accorde à DonkyCapital une licence pour utiliser et promouvoir le contenu public.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">12. Communication électronique</h2>
      <p className="mb-6">
        Toutes les communications s&apos;effectuent principalement par email ou plateforme. Le courrier postal n&apos;est utilisé que lorsque
        légalement nécessaire.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">13. Droit de rétractation</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Consommateurs : 14 jours pour se rétracter sans motif.</li>
        <li>En cas de rétractation, les services reçus doivent être restitués ou compensés économiquement s&apos;ils ont été utilisés avant la révocation.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">14. Limitations de responsabilité</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>DonkyCapital ne garantit pas l&apos;exhaustivité ou l&apos;exactitude des données.</li>
        <li>Non responsable des dommages financiers résultant de l&apos;utilisation de la plateforme.</li>
        <li>L&apos;utilisateur est responsable de ses propres violations et tiendra DonkyCapital indemne des réclamations de tiers.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">15. Interdiction de cession</h2>
      <p className="mb-6">
        Les droits de l&apos;utilisateur envers DonkyCapital ne peuvent être cédés sans consentement.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">16. Loi applicable et juridiction</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Loi italienne.</li>
        <li>Tribunal compétent : résidence de l&apos;utilisateur pour les consommateurs ; tribunal de Vérone pour les autres utilisateurs.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">17. Clause de divisibilité</h2>
      <p className="mb-6">
        Si une disposition est invalide, les autres restent valides. La disposition invalide sera remplacée
        par une qui reflète l&apos;intention originale.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Pour toute question : <a href="mailto:support@donkycapital.com" className="text-primary hover:underline">support@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}

function TermsES() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
        Términos y condiciones de DonkyCapital
      </h1>
      <p className="text-white/80 text-sm mb-6 font-semibold">
        Última actualización: 11 de diciembre de 2025
      </p>

      <p className="mb-6">
        Bienvenido a <strong>DonkyCapital</strong>. Al acceder y utilizar nuestra plataforma, acepta
        estos Términos y condiciones.
      </p>

      <hr className="border-white/10 my-8" />

      <h2 className="text-lg font-semibold mb-4 text-primary">1. Parte contratante</h2>
      <p className="mb-6">
        El contrato se celebra entre el usuario registrado (&quot;Cliente&quot;) y <strong>DonkyCapital</strong>,
        con domicilio social en Italia, email: support@donkycapital.com
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">2. Ámbito de aplicación</h2>
      <p className="mb-6">
        Estos términos rigen el uso de DonkyCapital, sus servicios en línea y la aplicación móvil.
        Los cambios futuros serán comunicados al Cliente, quien podrá aceptarlos o retirarse de los servicios.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">3. Objeto del contrato</h2>
      <p className="mb-2">
        DonkyCapital es una plataforma fintech que permite a los usuarios registrados visualizar datos financieros y
        gestionar carteras simuladas.
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>No ejecutamos transacciones financieras reales.</li>
        <li>Algunos datos provienen de fuentes externas y pueden ser actualizados o corregidos.</li>
        <li>Ofrecemos servicios gratuitos y de pago.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">4. Registro y cuenta</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>El uso de los servicios requiere registro.</li>
        <li>El usuario garantiza que los datos proporcionados son verídicos y están actualizados.</li>
        <li>Cada cuenta es personal: no comparta credenciales con terceros.</li>
        <li>DonkyCapital se reserva el derecho de suspender o eliminar cuentas por violaciones de los términos.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">5. Obligaciones del usuario</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>No dañar la infraestructura ni extraer datos ilegalmente.</li>
        <li>No publicar contenido ofensivo, ilegal o discriminatorio.</li>
        <li>Mantener sus datos personales actualizados.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">6. Duración y terminación del contrato</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>El contrato tiene duración indefinida, con renovación automática para suscripciones de pago.</li>
        <li>Puede retirarse en cualquier momento.</li>
        <li>DonkyCapital puede suspender o interrumpir los servicios por violaciones contractuales o razones legales.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">7. Precios y suscripciones</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Los servicios de pago están claramente indicados en el sitio.</li>
        <li>Las suscripciones mensuales o anuales se renuevan automáticamente salvo cancelación.</li>
        <li>No se prevén reembolsos por períodos parciales.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">8. Cambios de precios y características</h2>
      <p className="mb-6">
        DonkyCapital puede actualizar precios y servicios. El usuario será informado con antelación y podrá
        cancelar la suscripción si no está de acuerdo.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">9. Cancelación del servicio</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Suscripciones mensuales: cancelación al final del período actual.</li>
        <li>Suscripciones anuales: cancelación al final del año en curso.</li>
        <li>Las compras a través de App Store o Google Play siguen sus respectivas políticas de reembolso.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">10. Pagos</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Los pagos se realizan a través de los métodos indicados (Apple, Google, Stripe).</li>
        <li>El usuario es responsable de cargos adicionales o pagos no realizados.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">11. Propiedad intelectual</h2>
      <p className="mb-6">
        Todo el contenido de la plataforma está protegido por derechos de autor y marcas. El usuario conserva los derechos sobre
        su propio contenido pero otorga a DonkyCapital una licencia para usar y promover el contenido público.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">12. Comunicación electrónica</h2>
      <p className="mb-6">
        Todas las comunicaciones se realizan principalmente por correo electrónico o plataforma. El correo postal solo se usa cuando
        es legalmente necesario.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">13. Derecho de desistimiento</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Consumidores: 14 días para desistir sin motivación.</li>
        <li>En caso de desistimiento, los servicios recibidos deben ser devueltos o compensados económicamente si se utilizaron antes de la revocación.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">14. Limitaciones de responsabilidad</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>DonkyCapital no garantiza la integridad o exactitud de los datos.</li>
        <li>No es responsable de daños financieros derivados del uso de la plataforma.</li>
        <li>El usuario es responsable de sus propias violaciones y mantendrá indemne a DonkyCapital de reclamaciones de terceros.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">15. Prohibición de cesión</h2>
      <p className="mb-6">
        Los derechos del usuario hacia DonkyCapital no pueden cederse sin consentimiento.
      </p>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">16. Ley aplicable y jurisdicción</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Ley italiana.</li>
        <li>Tribunal competente: residencia del usuario para consumidores; tribunal de Verona para otros usuarios.</li>
      </ul>

      <hr className="border-white/10 my-6" />

      <h2 className="text-lg font-semibold mb-4 text-primary">17. Cláusula de separabilidad</h2>
      <p className="mb-6">
        Si una disposición fuera inválida, las demás seguirán siendo válidas. La disposición inválida será reemplazada
        por una que refleje la intención original.
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-white/80 text-sm">
          Para preguntas: <a href="mailto:support@donkycapital.com" className="text-primary hover:underline">support@donkycapital.com</a>
        </p>
      </div>
    </>
  )
}
