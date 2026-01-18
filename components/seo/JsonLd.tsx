import type { Dictionary } from '@/lib/i18n/getDictionary'

interface JsonLdProps {
  dict: Dictionary
  page: 'home' | 'earlyAccess' | 'privacyPolicy' | 'termsAndConditions' | 'contact'
}

export default function JsonLd({ dict, page }: JsonLdProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DonkyCapital',
    url: 'https://www.donkycapital.com',
    logo: 'https://www.donkycapital.com/assets/logos/Logo_dark.svg',
    sameAs: [
      'https://x.com/donkycapital',
      'https://www.instagram.com/donkycapital/',
      'https://www.facebook.com/profile.php?id=61585902694693',
      'https://www.linkedin.com/company/donkycapital'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@donkycapital.com',
      contactType: 'customer service'
    }
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DonkyCapital',
    url: 'https://www.donkycapital.com',
    description: dict.seo.home.description,
    inLanguage: ['en', 'it', 'de', 'fr', 'es']
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DonkyCapital',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Early Access Program - Free access to all Premium features'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50'
    }
  }

  const faqSchema = page === 'home' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: dict.landing.faq.questions.dataSecurity.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: dict.landing.faq.questions.dataSecurity.answer
        }
      },
      {
        '@type': 'Question',
        name: dict.landing.faq.questions.brokerImport.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: dict.landing.faq.questions.brokerImport.answer
        }
      },
      {
        '@type': 'Question',
        name: dict.landing.faq.questions.pricing.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: dict.landing.faq.questions.pricing.answer
        }
      }
    ]
  } : null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemas: Record<string, any>[] = [organizationSchema, webSiteSchema]

  if (page === 'home') {
    schemas.push(softwareApplicationSchema)
    if (faqSchema) {
      schemas.push(faqSchema)
    }
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
