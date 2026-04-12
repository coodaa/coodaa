import type { Metadata } from 'next'
import TheaterClient from './TheaterClient'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'de' ? 'Theater' : 'Theatre',
    description: locale === 'de'
      ? 'Technische Produktionsleitung für Theater und Kulturinstitutionen — von der Volksbühne Berlin bis zum Aranya Theater Festival in China.'
      : 'Technical production management for theatre and cultural institutions — from Volksbühne Berlin to the Aranya Theater Festival in China.',
    openGraph: {
      title: locale === 'de' ? 'Theater — Coodaa' : 'Theatre — Coodaa',
      description: locale === 'de'
        ? 'Technische Produktionsleitung für Theater und Kulturinstitutionen.'
        : 'Technical production management for theatre and cultural institutions.',
    },
  }
}

export default async function TheaterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <TheaterClient locale={locale} />
}
