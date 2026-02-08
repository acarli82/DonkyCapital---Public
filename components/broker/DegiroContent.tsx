import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import ScalableCapitalFAQ from './ScalableCapitalFAQ'
import ZoomableImage from '@/components/common/ZoomableImage'

interface DegiroContentProps {
  dict: Dictionary
}

export default function DegiroContent({ dict }: DegiroContentProps) {
  const degiro = dict.degiro || {}

  // Helper function to linkify all "Degiro" occurrences
  const linkifyDegiro = (text: string): string => {
    return text.replace(
      /Degiro/gi,
      '<a href="https://www.degiro.com/" target="_blank" rel="noopener noreferrer nofollow" class="text-primary hover:underline">Degiro</a>'
    )
  }

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {(degiro.pageTitle || 'Importare da Degiro').split('Degiro').map((part: string, index: number, array: string[]) => (
            <span key={index}>
              {index > 0 && (
                <Link
                  href="https://www.degiro.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="gradient-text hover:opacity-80 transition-opacity"
                >
                  Degiro
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
          dangerouslySetInnerHTML={{ __html: linkifyDegiro(degiro.intro || 'Importa il tuo portafoglio da Degiro.') }}
        />
      </div>

      {/* Image Section */}
      <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-white/80 leading-relaxed text-lg">{degiro.whyExportText1 || 'Portabilità dei dati.'}</p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://www.degiro.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-white rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 transition-shadow"
          >
            <Image
              src="/assets/import-providers/degiro.svg"
              alt="Import Degiro to DonkyCapital"
              width={300}
              height={300}
              className="object-cover"
            />
          </Link>
        </div>
      </section>

      {/* Why Export Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(degiro.whyExportTitle || 'Perché esportare da Degiro').split('Degiro').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (degiro.whyExportTitle || 'Perché esportare da Degiro').split('Degiro').length - 1 && (
                <Link
                  href="https://www.degiro.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Degiro
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6 space-y-4">
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: linkifyDegiro(degiro.whyExportText2 || 'Esporta i tuoi dati in modo facile e veloce.') }}
          />
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {(degiro.whyExportList || []).map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: linkifyDegiro(item) }} />
            ))}
          </ul>
          <blockquote className="border-l-4 border-primary pl-4 py-2 text-white/90 italic bg-primary/5 rounded-r">
            {degiro.whyExportQuote || 'Mantieni il controllo totale dei tuoi dati.'}
          </blockquote>
          <p className="text-white/60 text-sm mt-4">
            Learn more about{' '}
            <Link
              href="https://www.degiro.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-primary hover:underline"
            >
              Degiro features
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Why DonkyCapital Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{degiro.whyDonkyTitle || 'Perché DonkyCapital'}</h2>
        <div className="card p-6 space-y-4">
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: linkifyDegiro(degiro.whyDonkyText1 || 'DonkyCapital offre una dashboard completa per il tuo portafoglio.') }}
          />
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {(degiro.whyDonkyList || []).map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: linkifyDegiro(item) }} />
            ))}
          </ul>
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: linkifyDegiro(degiro.whyDonkyText2 || 'Gestisci tutti i tuoi investimenti in un unico posto.') }}
          />
          <blockquote className="border-l-4 border-primary pl-4 py-2 text-white/90 italic bg-primary/5 rounded-r">
            {degiro.whyDonkyQuote || 'Il monitoraggio semplificato del tuo portafoglio.'}
          </blockquote>
        </div>
      </section>

      {/* Step 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(degiro.step1Title || 'Passo 1').split('Degiro').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (degiro.step1Title || 'Passo 1').split('Degiro').length - 1 && (
                <Link
                  href="https://www.degiro.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Degiro
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6 space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-white/80">
            {(degiro.step1List || []).map((item: string, index: number) => (
              <li key={index}>
                <span dangerouslySetInnerHTML={{ __html: linkifyDegiro(item) }} />
              </li>
            ))}
          </ol>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-primary text-sm">{degiro.step1Tip || 'Consiglio utile.'}</p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(degiro.step2Title || 'Passo 2').split('Degiro').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (degiro.step2Title || 'Passo 2').split('Degiro').length - 1 && (
                <Link
                  href="https://www.degiro.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Degiro
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6 space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-white/80">
            {(degiro.step2List || []).map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: linkifyDegiro(item) }} />
            ))}
          </ol>
          <p className="text-white/80">{linkifyDegiro(degiro.step2Text || 'Segui questi passaggi.')}</p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-primary text-sm">{degiro.step2Highlight || 'Highlight.'}</p>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {(degiro.step3Title || 'Passo 3').split('Degiro').map((part: string, index: number) => (
            <span key={index}>
              {part}
              {index < (degiro.step3Title || 'Passo 3').split('Degiro').length - 1 && (
                <Link
                  href="https://www.degiro.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Degiro
                </Link>
              )}
            </span>
          ))}
        </h2>
        <div className="card p-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                {(degiro.step3List || []).map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: linkifyDegiro(item) }} />
                ))}
              </ol>
              <p className="text-white/80">{linkifyDegiro(degiro.step3Text || 'Ulteriori dettagli.')}</p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                {(degiro.step3ReportList || []).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p
                  className="text-primary text-sm"
                  dangerouslySetInnerHTML={{ __html: degiro.step3Highlight || 'Highlight.' }}
                />
              </div>
              <p className="text-white/60 text-sm mt-4">
                Visit{' '}
                <Link
                  href="https://www.degiro.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  Degiro official website
                </Link>{' '}
                for more information about their platform.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <ZoomableImage
                src="/assets/import-providers/Import-degiro-donkycapital.webp"
                alt={degiro.step3Title || 'Passo 3'}
                width={400}
                height={400}
              />
            </div>
          </div>
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
