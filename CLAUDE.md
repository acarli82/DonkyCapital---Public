# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DonkyCapital Public Pages - A Next.js 14 (App Router) SSR application for public-facing landing pages, optimized for SEO. Extracted from the main React application at `C:\Users\Andrea\Documents\Sites\DonkyCapital` to serve only public pages with server-side rendering.

## Commands

```bash
npm run dev      # Development server on port 3005
npm run build    # Production build
npm run start    # Production server on port 3005
npm run lint     # ESLint
```

## Architecture

### Internationalization (i18n)

- **5 locales:** en, it, de, fr, es (configured in `lib/i18n/config.ts`)
- **Dynamic routing:** All pages under `app/[lang]/` segment
- **Middleware:** `middleware.ts` handles locale detection (cookie → Accept-Language → default 'en')
- **Dictionaries:** JSON files in `dictionaries/` loaded dynamically via `lib/i18n/getDictionary.ts`

When adding new pages, always:
1. Place in `app/[lang]/` directory
2. Accept `params: Promise<{ lang: Locale }>` and await the dictionary
3. Implement `generateStaticParams()` returning all locales
4. Implement `generateMetadata()` with hreflang alternates

### Component Patterns

- **Server Components** (default): Pages, layouts, static sections
- **Client Components** (`'use client'`): Forms, interactive UI (LanguageSelector, MobileMenu)
- Components organized by feature: `components/landing/`, `components/forms/`, `components/legal/`, `components/seo/`, `components/contact/`

### SEO Implementation

- Dynamic metadata with `generateMetadata()` per language
- Schema.org structured data via `components/seo/JsonLd.tsx` (Organization, WebSite, SoftwareApplication, FAQPage)
- Auto-generated `sitemap.xml` (`app/sitemap.ts`) with language alternates
- Auto-generated `robots.txt` (`app/robots.ts`)

Ogni volta che aggiungi una nuova pagina ricorda di aggiornare la sitemap con link in tutte le lingue


### API Integration

- Public API client: `lib/api/public-api.ts`
- Endpoints hit `NEXT_PUBLIC_API_URL` or fallback `https://donkycapital.com/api`
- Forms use honeypot field for anti-spam

### Styling

- Tailwind CSS with custom theme in `tailwind.config.ts`
- Primary color: green (#10b981), Secondary: blue (#2464ea)
- Dark theme only (background: #0f151d)
- Custom animations: `fade-up`, `pulse-glow`, `ping-slow`
- Global utilities in `app/globals.css`

## Key Files

- `middleware.ts` - i18n locale routing logic
- `lib/i18n/config.ts` - Locale definitions and default settings
- `tailwind.config.ts` - Complete color palette and theme
- `app/globals.css` - CSS variables and custom utilities

## Adding New Content

### New Page
```typescript
// app/[lang]/new-page/page.tsx
import { Locale, locales } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  // Return metadata with alternates.languages for hreflang
}

export default async function NewPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  // Render page using dict translations
}
```

### New Translation Keys
Add to all 5 files in `dictionaries/` (en.json, it.json, de.json, fr.json, es.json).



## SEO Word by Language
Optimize all for this word, beetween Language
Keyword Base	IT	EN	DE	FR	ES
Monitoraggio Portafoglio	Portfolio Tracker	Portfolio Tracker	Depot-Tracker	Suivi de portefeuille	Seguimiento de cartera
ETF Tracker	ETF Tracker	ETF Tracker	ETF Sparplan Tracker	Suivi ETF	Rastreador de ETF
Alternativa Excel investimenti	Investment Excel alternative	Excel Alternative Investment	Alternative Excel bourse	Alternativa Excel inversiones

## Pagine dedicate
#"The best way to track your Degiro portfolio in 2026" (EN)
#"La miglior dashboard per il tuo portafoglio Scalable Capital" (IT)
#Importare file CSV Degiro
#Scalable Capital Tracker, possibilità di esportare da Scalable i propri dati senza pagare prime+



✅ LANGUAGE Claude Code Instructions: I18n & Token Optimization

CRITICAL: labels.master.json is a large file. NEVER use cat, read_file, or open the entire file. You must act as a "surgical editor" to minimize token consumption and costs.

1. Searching for Labels
Before modifying, locate the key using grep to keep the context clean.
    Command: !grep -i "your_key" labels.master.json
    Check Structure: !grep -C 3 "your_key" labels.master.json (to see surrounding lines without loading the file).
2. Modifying Labels
Do not attempt to rewrite the JSON manually. Use the provided automation script which handles the edit and the synchronization in one step.
    Protocol: Use update_label.py. This script updates the Master JSON and automatically triggers the distribution to all language files.
    Command: !python update_label.py "path.to.key.language" "New Value
    Example: !python update_label.py "assetClasses.stocks.en" "Equity"
3. Adding New Keys
Se devi inserire termini standard (pulsanti, etichette anagrafiche, messaggi di errore generici), non creare una nuova chiave. Valuta se ne esiste già una o usa un segnaposto come common.KEY_NAME.
When adding brand new translation keys:
    Use grep to find the appropriate parent object.
    Use update_label.py for each language required
    If adding many keys, write a temporary "throwaway" Python script to batch update the JSON, then run sync_from_master.py.
4. Context Management
    Post-Update: After completing a set of label changes, remind the user to run /compact or /clear to remove the accumulated string data from the message history.
    Strict Silence: Do not output the content of the language files (it.json, en.json, etc.) unless explicitly asked. Trust the sync_from_master.py output.
