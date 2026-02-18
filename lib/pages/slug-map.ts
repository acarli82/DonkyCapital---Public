import type { Locale } from '@/lib/i18n/config'
import { scalableCapitalSlugs } from './scalable-capital-slugs'
import { degiroSlugs } from './degiro-slugs'
import { finecoSlugs } from './fineco-slugs'
import { multiBrokerSlugs } from './multi-broker-slugs'
import { vsGetquinSlugs } from './vs-getquin-slugs'
import { capitalManagementSlugs } from './capital-management-slugs'
import { roiGuideSlugs } from './roi-guide-slugs'
import { commonMistakesSlugs } from './common-mistakes-slugs'

// All page slug maps grouped together
const allSlugMaps: Record<Locale, string>[] = [
  scalableCapitalSlugs,
  degiroSlugs,
  finecoSlugs,
  multiBrokerSlugs,
  vsGetquinSlugs,
  capitalManagementSlugs,
  roiGuideSlugs,
  commonMistakesSlugs,
]

/**
 * Given a slug from the current locale, find the equivalent slug for the target locale.
 * Returns null if the slug doesn't belong to any localized page.
 */
export function getLocalizedSlug(currentSlug: string, currentLang: Locale, targetLang: Locale): string | null {
  for (const slugMap of allSlugMaps) {
    if (slugMap[currentLang] === currentSlug) {
      return slugMap[targetLang]
    }
  }
  return null
}
