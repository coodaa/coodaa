import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'de'
      ? 'coodaa — Creative Developer & Technischer Produktionsleiter, Berlin'
      : 'coodaa — Creative Developer & Technical Production Manager, Berlin',
    description: locale === 'de'
      ? 'coodaa ist das Studio von Florian Schneider — Freelance Webentwickler und Technischer Produktionsleiter aus Berlin. Websites mit Next.js und echtem SEO-Fundament. Neue Projekte willkommen.'
      : 'coodaa is the studio of Florian Schneider — Freelance Web Developer and Technical Production Manager from Berlin. Websites built with Next.js and real SEO foundations. Open to new projects.',
    alternates: {
      canonical: `https://coodaa.de/${locale}`,
      languages: {
        'de': 'https://coodaa.de/de',
        'en': 'https://coodaa.de/en',
      },
    },
  }
}

const theaterProjects = [
  { name: 'Volksbühne — Peer Gynt',   year: '2025' },
  { name: 'Aranya Theater Festival',  year: '2022' },
  { name: 'Volksbühne Berlin',        year: '2023–2024' },
  { name: 'Gropius Bau MaerzMusik',   year: '2021–2022' },
  { name: 'Berliner Festspiele',      year: '2016–2020' },
]

const webProjects = [
  { name: 'Helga Wretman',        year: '2025' },
  { name: 'LSD Berlin',           year: '2025' },
  { name: 'Haus Hamburg Leer',    year: '2024' },
  { name: 'Lysius',               year: '2024' },
  { name: 'Wagemann Schweiß',     year: '2023' },
]

export default function Home() {
  const t = useTranslations('home')

  return (
    <div>
      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-14">
        <div className="max-w-[1400px] w-full mx-auto">
          <h1 className="display text-fg mb-6">
            <LetterReveal text="coodaa" delay={0.1} stagger={0.08} />
          </h1>

          <AnimateIn delay={0.65} y={20}>
            <p className="text-muted text-lg md:text-2xl font-medium tracking-tight max-w-xl">
              {t('tagline')}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.85} y={20}>
            <p className="text-muted mt-4 text-base md:text-lg max-w-lg leading-relaxed">
              {t('description')}
            </p>
          </AnimateIn>

          <AnimateIn delay={1.1} y={10}>
            <div className="flex flex-wrap gap-6 mt-10">
              <Link
                href="/theater"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent transition-colors duration-200 group"
              >
                {t('theater_label')}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link
                href="/web"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-fg hover:text-accent transition-colors duration-200 group"
              >
                {t('web_label')}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <AnimateIn delay={1.4}>
            <span className="text-muted text-xs uppercase tracking-widest" aria-hidden="true">{t('scroll')}</span>
            <div className="w-px h-10 mx-auto mt-2 bg-accent-light animate-pulse" aria-hidden="true" />
          </AnimateIn>
        </div>
      </section>

      {/* ─── Intro ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-24 md:py-32" aria-labelledby="intro-heading">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <AnimateIn>
            <h2 id="intro-heading" className="heading-lg text-fg">
              {t('intro_heading')}
              <br />
              <span className="text-accent">{t('intro_heading_accent')}</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-md">
              {t('intro_text')}
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-md mt-4 border-l-2 pl-4 border-accent">
              {t('ai_text')}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold uppercase tracking-widest text-accent group transition-colors duration-200"
            >
              {t('intro_link')}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Two columns: Theater + Web ────────────────────────── */}
      <section className="px-6 md:px-10 pb-24" aria-label="Projekte">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16">

          {/* Theater */}
          <div>
            <AnimateIn>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest font-semibold">{t('theater_label')}</p>
                  <p className="text-muted text-sm mt-1 max-w-xs">{t('theater_description')}</p>
                </div>
                <Link
                  href="/theater"
                  className="text-accent text-xs uppercase tracking-widest font-semibold group flex items-center gap-1 shrink-0"
                >
                  {t('theater_link')}
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>
            <ul className="flex flex-col border-top-theme">
              {theaterProjects.map((p, i) => (
                <AnimateIn key={p.name} delay={i * 0.07}>
                  <li className="border-bottom-theme">
                    <Link href="/theater" className="flex items-center justify-between py-4 group">
                      <span className="text-fg text-sm font-semibold group-hover:text-accent transition-colors duration-200">
                        {p.name}
                      </span>
                      <span className="text-muted text-xs font-mono ml-4 shrink-0">{p.year}</span>
                    </Link>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>

          {/* Web */}
          <div>
            <AnimateIn delay={0.1}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-muted text-xs uppercase tracking-widest font-semibold">{t('web_label')}</p>
                  <p className="text-muted text-sm mt-1 max-w-xs">{t('web_description')}</p>
                </div>
                <Link
                  href="/web"
                  className="text-accent text-xs uppercase tracking-widest font-semibold group flex items-center gap-1 shrink-0"
                >
                  {t('web_link')}
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>
            <ul className="flex flex-col border-top-theme">
              {webProjects.map((p, i) => (
                <AnimateIn key={p.name} delay={i * 0.07 + 0.1}>
                  <li className="border-bottom-theme">
                    <Link href="/web" className="flex items-center justify-between py-4 group">
                      <span className="text-fg text-sm font-semibold group-hover:text-accent transition-colors duration-200">
                        {p.name}
                      </span>
                      <span className="text-muted text-xs font-mono ml-4 shrink-0">{p.year}</span>
                    </Link>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  )
}
