import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { routing } from '@/i18n/routing'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://coodaa.de'),
  title: {
    default: 'coodaa — Creative Developer & Technischer Produktionsleiter',
    template: '%s — coodaa',
  },
  description:
    'coodaa — Florian Schneider, Freelance Webentwickler und Technischer Produktionsleiter aus Berlin. Websites mit Next.js, React und echtem SEO-Fundament. Ich nehme gerne neue Projekte an.',
  keywords: [
    'Freelance Webentwickler Berlin', 'Website erstellen lassen Berlin', 'Next.js Entwickler Berlin',
    'SEO-optimierte Websites', 'Technischer Produktionsleiter', 'Creative Developer',
    'Full Stack Developer', 'Berlin', 'Florian Schneider', 'coodaa',
    'Theatertechnik', 'React', 'Barrierefreiheit', 'Claude AI', 'KI-gestützte Entwicklung',
  ],
  authors: [{ name: 'Florian Schneider', url: 'https://coodaa.de' }],
  creator: 'Florian Schneider',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://coodaa.de/de',
    languages: {
      'de': 'https://coodaa.de/de',
      'en': 'https://coodaa.de/en',
      'x-default': 'https://coodaa.de/de',
    },
  },
  openGraph: {
    title: 'coodaa — Creative Developer & Technischer Produktionsleiter',
    description: 'Websites, digitale Erlebnisse und Theatertechnik. Berlin / Remote.',
    type: 'website',
    url: 'https://coodaa.de',
    locale: 'de_DE',
    alternateLocale: ['en_US'],
    siteName: 'coodaa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'coodaa — Creative Developer & Technischer Produktionsleiter',
    description: 'Websites, digitale Erlebnisse und Theatertechnik. Berlin / Remote.',
    creator: '@coodaa',
  },
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'de' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('coodaa-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'coodaa',
                url: 'https://coodaa.de',
                author: { '@type': 'Person', name: 'Florian Schneider' },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Florian Schneider',
                url: 'https://coodaa.de',
                jobTitle: locale === 'de'
                  ? ['Technischer Produktionsleiter', 'Full Stack Developer']
                  : ['Technical Production Manager', 'Full Stack Developer'],
                worksFor: { '@type': 'Organization', name: 'coodaa' },
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Linienstraße 227',
                  addressLocality: 'Berlin',
                  postalCode: '10178',
                  addressCountry: 'DE',
                },
                email: 'hi@coodaa.de',
                sameAs: [
                  'https://github.com/coodaa',
                  'https://www.linkedin.com/in/florianschneiderberlin/',
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={spaceGrotesk.variable}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <a
              href="#main-content"
              className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm"
            >
              {locale === 'de' ? 'Zum Inhalt springen' : 'Skip to content'}
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
