import type { Metadata } from 'next'
import WebClient from './WebClient'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Web & Digital',
    description: locale === 'de'
      ? 'Websites und digitale Erlebnisse von Florian Schneider — gebaut mit Next.js, React und echtem SEO-Fundament. Ich nehme gerne neue Aufträge an.'
      : 'Websites and digital experiences by Florian Schneider — built with Next.js, React and real SEO foundations. Open to new commissions.',
    alternates: {
      canonical: `https://www.coodaa.de/${locale}/web`,
      languages: {
        'de': 'https://www.coodaa.de/de/web',
        'en': 'https://www.coodaa.de/en/web',
      },
    },
    openGraph: {
      title: 'Web & Digital — coodaa',
      description: locale === 'de'
        ? 'Ausgewählte Web-Projekte von Florian Schneider.'
        : 'Selected web projects by Florian Schneider.',
    },
  }
}

export default async function WebPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <WebClient locale={locale} />
}
