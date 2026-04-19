import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'de' ? 'Kontakt' : 'Contact',
    description: locale === 'de'
      ? 'Neues Web-Projekt, Zusammenarbeit oder Fragen zur technischen Produktionsleitung? Schreib mir — hi@coodaa.de'
      : 'New web project, collaboration or questions about technical production management? Get in touch — hi@coodaa.de',
    alternates: {
      canonical: `https://www.coodaa.de/${locale}/contact`,
      languages: {
        'de': 'https://www.coodaa.de/de/contact',
        'en': 'https://www.coodaa.de/en/contact',
      },
    },
  }
}

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <div className="px-6 md:px-10 pt-28 pb-24 min-h-screen flex flex-col justify-center max-w-[1400px] mx-auto">
      <h1 className="display text-fg mb-10">
        <LetterReveal text={t('heading')} delay={0.1} stagger={0.08} />
      </h1>

      <AnimateIn delay={0.55}>
        <p className="text-muted text-base md:text-xl max-w-lg leading-relaxed mb-10">
          {t('description')}
        </p>
      </AnimateIn>

      <AnimateIn delay={0.7}>
        <a
          href="mailto:hi@coodaa.de"
          className="inline-flex items-center gap-3 group"
          aria-label="E-Mail senden an hi@coodaa.de"
        >
          <span className="heading-md font-bold text-fg group-hover:text-accent transition-colors duration-300">
            hi@coodaa.de
          </span>
          <span className="text-2xl text-accent transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">
            →
          </span>
        </a>
      </AnimateIn>

      <AnimateIn delay={0.9}>
        <div className="flex items-center gap-8 mt-16">
          <a
            href="https://github.com/coodaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent text-sm font-medium uppercase tracking-widest transition-colors duration-200"
            aria-label="GitHub Profil (öffnet in neuem Tab)"
          >
            {t('github')}
          </a>
          <a
            href="https://www.linkedin.com/in/florianschneiderberlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent text-sm font-medium uppercase tracking-widest transition-colors duration-200"
            aria-label="LinkedIn Profil (öffnet in neuem Tab)"
          >
            {t('linkedin')}
          </a>
        </div>
      </AnimateIn>
    </div>
  )
}
