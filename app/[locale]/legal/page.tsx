import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Impressum / Legal Notice',
}

export default function LegalPage() {
  const t = useTranslations('legal')

  return (
    <div className="px-6 md:px-10 pt-28 pb-24 max-w-2xl mx-auto">
      <AnimateIn>
        <h1 className="text-3xl font-bold mb-12 tracking-tight text-fg">
          {t('heading')}
        </h1>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted">
          <section>
            <p className="font-semibold mb-1 text-fg">{t('section_info')}</p>
            <p>Florian Schneider</p>
            <p>Linienstraße 227</p>
            <p>10178 Berlin</p>
          </section>
          <section>
            <p className="font-semibold mb-1 text-fg">{t('section_contact')}</p>
            <p>E-Mail: <a href="mailto:hi@coodaa.de" className="text-accent hover:underline">hi@coodaa.de</a></p>
          </section>
          <section>
            <p className="font-semibold mb-1 text-fg">{t('section_liability')}</p>
            <p>{t('liability_text')}</p>
          </section>
          <section>
            <p className="font-semibold mb-1 text-fg">{t('section_copyright')}</p>
            <p>{t('copyright_text')}</p>
          </section>
          <section>
            <p className="font-semibold mb-1 text-fg">{t('section_a11y')}</p>
            <p>{t('a11y_text')}</p>
          </section>
        </div>
      </AnimateIn>
    </div>
  )
}
