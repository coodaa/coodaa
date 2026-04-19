import type { Metadata } from 'next'
import CasesClient from './CasesClient'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'de' ? 'Projekte — Webentwicklung Berlin' : 'Case Studies — Web Development Berlin',
    description: locale === 'de'
      ? 'Webprojekte aus Berlin: Portfolio-Websites, Restaurant-Apps mit Online-Shop, Theater-Websites und mehr. Fullstack-Entwicklung mit Next.js, Vue.js und Tailwind CSS.'
      : 'Web projects from Berlin: portfolio websites, restaurant apps with online shop, theatre websites and more. Fullstack development with Next.js, Vue.js and Tailwind CSS.',
    keywords: locale === 'de'
      ? ['Webentwickler Berlin', 'Next.js Entwickler Berlin', 'Freelance Webentwickler Berlin', 'Theater Website Berlin', 'Kulturinstitution Website', 'Restaurant Website Online-Shop', 'Fullstack Entwickler Berlin', 'Webdesign Berlin']
      : ['Web developer Berlin', 'Next.js developer Berlin', 'Freelance web developer Berlin', 'Theatre website Berlin', 'Cultural institution website', 'Restaurant website online shop', 'Fullstack developer Berlin'],
    alternates: {
      canonical: `https://coodaa.de/${locale}/cases`,
      languages: {
        'de': 'https://coodaa.de/de/cases',
        'en': 'https://coodaa.de/en/cases',
      },
    },
    openGraph: {
      title: locale === 'de' ? 'Projekte — coodaa Berlin' : 'Case Studies — coodaa Berlin',
      description: locale === 'de'
        ? 'Webprojekte aus Berlin: Fullstack-Entwicklung für Kultur, Gastronomie und Kreativwirtschaft.'
        : 'Web projects from Berlin: fullstack development for culture, hospitality and creative industries.',
    },
  }
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <CasesClient locale={locale} />
}
