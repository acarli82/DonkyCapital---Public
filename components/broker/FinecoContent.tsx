import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import ZoomableImage from '@/components/common/ZoomableImage'

interface FinecoContentProps {
  dict: Dictionary
}

export default function FinecoContent({ dict }: FinecoContentProps) {
  const fineco = dict.fineco || {}

  // Helper function to linkify all "Fineco" occurrences
  const linkifyFineco = (text: string): string => {
    return text.replace(
      /Fineco/gi,
      '<a href="https://www.finecobank.com/" target="_blank" rel="noopener noreferrer nofollow" class="text-primary hover:underline">Fineco</a>'
    )
  }

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {(fineco.pageTitle || 'Importare da Fineco').split('Fineco').map((part: string, index: number, array: string[]) => (
            <span key={index}>
              {index > 0 && (
                <Link
                  href="https://www.finecobank.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="gradient-text hover:opacity-80 transition-opacity"
                >
                  Fineco
                </Link>
              )}
              {part.split('DonkyCapital').map((subPart: string, subIndex: number, subArray: string[]) => (
                <span key={subIndex}>
                  {subIndex > 0 && <span className="gradient-text">DonkyCapital</span>}
                  {subPart}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p
          className="text-lg text-white/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: linkifyFineco(fineco.intro || 'Importa il tuo portafoglio da Fineco.') }}
        />
      </div>

      {/* Image Section */}
      <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-white/80 leading-relaxed text-lg">{fineco.whyExportText1 || 'Esporta facilmente i tuoi dati da Fineco.'}</p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://www.finecobank.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:shadow-lg hover:shadow-primary/20 transition-shadow inline-block"
          >
            <Image
              src="/assets/import-providers/fineco.svg"
              alt="Import Fineco to DonkyCapital"
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </Link>
        </div>
      </section>

      {/* Why Export Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(fineco.whyExportTitle || 'Perché esportare da Fineco').split('Fineco').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (fineco.whyExportTitle || 'Perché esportare da Fineco').split('Fineco').length - 1 && (
                <Link
                  href="https://www.finecobank.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Fineco
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6 space-y-4">
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: linkifyFineco(fineco.whyExportText2 || 'Esporta i tuoi dati in modo facile e veloce.') }}
          />
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {(fineco.whyExportList || []).map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: linkifyFineco(item) }} />
            ))}
          </ul>
          <blockquote className="border-l-4 border-primary pl-4 py-2 text-white/90 italic bg-primary/5 rounded-r">
            {fineco.whyExportQuote || 'Mantieni il controllo totale dei tuoi dati.'}
          </blockquote>
          <p className="text-white/60 text-sm mt-4">
            Learn more about{' '}
            <Link
              href="https://www.finecobank.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:underline"
            >
              Fineco features
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Why DonkyCapital Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{fineco.whyDonkyTitle || 'Perché DonkyCapital'}</h2>
        <div className="card p-6 space-y-4">
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: linkifyFineco(fineco.whyDonkyText1 || 'DonkyCapital offre una dashboard completa per il tuo portafoglio.') }}
          />
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {(fineco.whyDonkyList || []).map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: linkifyFineco(item) }} />
            ))}
          </ul>
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: linkifyFineco(fineco.whyDonkyText2 || 'Gestisci tutti i tuoi investimenti in un unico posto.') }}
          />
          <blockquote className="border-l-4 border-primary pl-4 py-2 text-white/90 italic bg-primary/5 rounded-r">
            {fineco.whyDonkyQuote || 'Il monitoraggio semplificato del tuo portafoglio.'}
          </blockquote>
        </div>
      </section>

      {/* Step 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(fineco.step1Title || 'Passo 1').split('Fineco').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (fineco.step1Title || 'Passo 1').split('Fineco').length - 1 && (
                <Link
                  href="https://www.finecobank.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Fineco
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6 space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-white/80">
            {(fineco.step1List || []).map((item: string, index: number) => (
              <li key={index}>
                <span dangerouslySetInnerHTML={{ __html: linkifyFineco(item) }} />
              </li>
            ))}
          </ol>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-primary text-sm">{fineco.step1Tip || 'Consiglio utile.'}</p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(fineco.step2Title || 'Passo 2').split('Fineco').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (fineco.step2Title || 'Passo 2').split('Fineco').length - 1 && (
                <Link
                  href="https://www.finecobank.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Fineco
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6 space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-white/80">
            {(fineco.step2List || []).map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: linkifyFineco(item) }} />
            ))}
          </ol>
          <p className="text-white/80" dangerouslySetInnerHTML={{ __html: linkifyFineco(fineco.step2Text || 'Segui questi passaggi.') }} />
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-primary text-sm">{fineco.step2Highlight || 'Highlight.'}</p>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(fineco.step3Title || 'Passo 3').split('Fineco').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (fineco.step3Title || 'Passo 3').split('Fineco').length - 1 && (
                <Link
                  href="https://www.finecobank.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Fineco
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6">
          <div className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-white/80">
              {(fineco.step3List || []).map((item: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: linkifyFineco(item) }} />
              ))}
            </ol>
            <p className="text-white/80" dangerouslySetInnerHTML={{ __html: linkifyFineco(fineco.step3Text || 'Ulteriori dettagli.') }} />
            <ul className="list-disc list-inside space-y-2 text-white/80">
              {(fineco.step3ReportList || []).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p
                className="text-primary text-sm"
                dangerouslySetInnerHTML={{ __html: fineco.step3Highlight || 'Highlight.' }}
              />
            </div>
            <p className="text-white/60 text-sm mt-4">
              Visit{' '}
              <Link
                href="https://www.finecobank.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-primary hover:underline"
              >
                Fineco official website
              </Link>{' '}
              for more information about their platform.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{fineco.faqTitle || 'FAQ'}</h2>
        <div className="space-y-4">
          {(fineco.faq || []).map((faq: { question: string; answer: string }, index: number) => (
            <div key={index} className="card p-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-white/80 text-sm" dangerouslySetInnerHTML={{ __html: linkifyFineco(faq.answer) }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="card p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="text-xl font-bold mb-4">{dict.landing.cta.title}</h3>
          <p className="text-white/80 mb-6">{dict.landing.cta.subtitle}</p>
          <Link
            href="https://app.donkycapital.com"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
          >
            {dict.landing.cta.button}
          </Link>
        </div>
      </section>
    </div>
  )
}
