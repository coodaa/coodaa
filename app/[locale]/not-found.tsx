import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'

export default function NotFound() {
  const t = useTranslations('not_found')

  return (
    <div className="px-6 md:px-10 pt-28 min-h-screen flex flex-col justify-center max-w-[1400px] mx-auto">
      <h1 className="display text-fg mb-6">
        <LetterReveal text={t('heading')} delay={0.1} stagger={0.1} />
      </h1>
      <AnimateIn delay={0.4}>
        <p className="text-muted text-lg mb-8">{t('text')}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent group"
        >
          {t('link')}
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </AnimateIn>
    </div>
  )
}
