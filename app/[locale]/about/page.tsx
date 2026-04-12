import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'
import Link from 'next/link'

const skills = [
  'Next.js', 'React', 'TypeScript', 'JavaScript',
  'Node.js', 'Tailwind CSS', 'Three.js', 'Framer Motion',
  'Ruby on Rails', 'SQL', 'Git',
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'de' ? 'Über mich' : 'About',
    description: locale === 'de'
      ? 'Florian Schneider — Creative Developer und Technischer Produktionsleiter aus Berlin. 10+ Jahre Theatertechnik, Volksbühne, Berliner Festspiele. Seit 2022 Full-Stack Web Development.'
      : 'Florian Schneider — Creative Developer and Technical Production Manager from Berlin. 10+ years theatre technology, Volksbühne, Berliner Festspiele. Full-Stack Web Development since 2022.',
    alternates: {
      canonical: `https://coodaa.de/${locale}/about`,
      languages: {
        'de': 'https://coodaa.de/de/about',
        'en': 'https://coodaa.de/en/about',
      },
    },
    openGraph: {
      title: locale === 'de' ? 'Über mich — Coodaa' : 'About — Coodaa',
      description: locale === 'de'
        ? 'Florian Schneider — Creative Developer und Technischer Produktionsleiter aus Berlin.'
        : 'Florian Schneider — Creative Developer and Technical Production Manager from Berlin.',
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  const heute = locale === 'de' ? 'heute' : 'present'

  const timeline = [
    {
      period: `2025 – ${heute}`,
      role: { de: 'Technischer Produktionsleiter', en: 'Technical Production Manager' },
      place: 'Volksbühne am Rosa-Luxemburg-Platz',
      description: {
        de: 'Technische Produktionsleitung an einem der bekanntesten Theater Berlins.',
        en: 'Technical production management at one of Berlin\'s most iconic theatres.',
      },
    },
    {
      period: `2024 – ${heute}`,
      role: { de: 'Full Stack Developer', en: 'Full Stack Developer' },
      place: 'Freelance',
      description: {
        de: 'Websites und digitale Erlebnisse für Kulturinstitutionen, Unternehmen und eigene Projekte.',
        en: 'Websites and digital experiences for cultural institutions, companies and personal projects.',
      },
    },
    {
      period: '2023 – 2024',
      role: { de: 'Technischer Projektleiter', en: 'Technical Project Manager' },
      place: 'Volksbühne Berlin',
      description: {
        de: 'Technische Leitung und Projektmanagement an einem der bekanntesten Theater Berlins.',
        en: 'Technical management and project coordination at one of Berlin\'s most iconic theatres.',
      },
    },
    {
      period: '2022',
      role: { de: 'Fullstack Web Development', en: 'Fullstack Web Development' },
      place: 'Le Wagon Berlin',
      description: {
        de: 'Intensives Coding Bootcamp: HTML, CSS, JavaScript, React, Ruby on Rails.',
        en: 'Intensive coding bootcamp: HTML, CSS, JavaScript, React, Ruby on Rails.',
      },
    },
    {
      period: '2021 – 2022',
      role: { de: 'Technischer Leiter MaerzMusik', en: 'Technical Manager MaerzMusik' },
      place: 'Gropius Bau',
      description: {
        de: 'Technische Leitung des MaerzMusik Festivals im Martin-Gropius-Bau. Außerdem: Ausstellungen "Welt ohne Außen" und "Philippe Parreno".',
        en: 'Technical management of the MaerzMusik festival. Also: exhibitions "Welt ohne Außen" and "Philippe Parreno".',
      },
    },
    {
      period: '2019 – 2020',
      role: { de: 'Technischer Leiter Immersion', en: 'Technical Manager Immersion' },
      place: 'Berliner Festspiele',
      description: {
        de: 'Technische Leitung der Programmreihe Immersion bei den Berliner Festspielen. Internationale Großproduktionen, u.a. The New Infinity und The Sun Machine Is Coming Down.',
        en: 'Technical management of the Immersion programme at the Berliner Festspiele. Major international productions, including The New Infinity and The Sun Machine Is Coming Down.',
      },
    },
    {
      period: '2016 – 2018',
      role: { de: 'Assistent der technischen Leitung', en: 'Assistant Technical Manager' },
      place: 'Berliner Festspiele — Immersion',
      description: {
        de: 'Assistent der technischen Leitung bei Immersion. U.a. Nationaltheater Reinickendorf (Vinge/Müller). Außerdem technische Leitung der Ausstellungen "Welt ohne Außen" und "Philippe Parreno" im Martin-Gropius-Bau.',
        en: 'Assistant Technical Manager at Immersion. Including Nationaltheater Reinickendorf (Vinge/Müller). Also technical management of "Welt ohne Außen" and "Philippe Parreno" exhibitions at Martin-Gropius-Bau.',
      },
    },
    {
      period: '2016 – 2017',
      role: { de: 'Assistent der technischen Leitung', en: 'Assistant Technical Manager' },
      place: 'Nationaltheater Reinickendorf — Berliner Festspiele / Immersion',
      description: {
        de: 'Offiziell Assistent der technischen Leitung — faktisch mit deutlich erweiterter Verantwortung. Produktion von Vegard Vinge & Ida Müller, eine der aufwändigsten und ungewöhnlichsten Theaterproduktionen Berlins.',
        en: 'Officially Assistant Technical Manager — in practice with significantly expanded responsibilities. Production by Vegard Vinge & Ida Müller, one of the most ambitious and unconventional theatre productions in Berlin.',
      },
    },
    {
      period: '2010 – 2011',
      role: { de: 'Technisches Praktikum', en: 'Technical Intern' },
      place: 'The Old Vic & King\'s Head Theatre, London',
      description: {
        de: 'Praktika an zwei renommierten Londoner Theatern.',
        en: 'Internships at two renowned London theatres.',
      },
    },
    {
      period: '2009 – 2016',
      role: { de: 'Bühnentechniker', en: 'Stagehand' },
      place: 'Deutsche Oper, Berliner Ensemble, Komische Oper Berlin',
      description: {
        de: 'Fast 7 Jahre auf den Bühnen Berlins — hier hat alles angefangen.',
        en: 'Almost 7 years on Berlin\'s stages — where it all began.',
      },
    },
  ]

  return (
    <div className="px-6 md:px-10 pt-28 pb-24 max-w-[1400px] mx-auto">
      <h1 className="display text-fg mb-16">
        <LetterReveal text={t('heading')} delay={0.1} stagger={0.1} />
      </h1>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-24">
        <div className="flex flex-col gap-6">
          <AnimateIn>
            <h2 className="heading-md text-fg">
              {locale === 'de'
                ? <>Ich habe 10 Jahre lang<br /><span className="text-accent">Berlins Kulturszene</span><br />von innen gesehen.</>
                : <>I spent 10 years inside<br /><span className="text-accent">Berlin&apos;s cultural scene.</span></>
              }
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}><p className="text-muted text-base md:text-lg leading-relaxed">{t('bio_1')}</p></AnimateIn>
          <AnimateIn delay={0.2}><p className="text-muted text-base md:text-lg leading-relaxed">{t('bio_2')}</p></AnimateIn>
          <AnimateIn delay={0.3}><p className="text-muted text-base md:text-lg leading-relaxed">{t('bio_3')}</p></AnimateIn>
          <AnimateIn delay={0.35}><p className="text-muted text-base md:text-lg leading-relaxed border-l-2 pl-4 border-accent">{t('bio_ai')}</p></AnimateIn>
          <AnimateIn delay={0.4}>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-2 text-sm font-semibold uppercase tracking-widest text-accent group">
              {t('contact_link')}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.2}>
          <div>
            <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-6">{t('skills_label')}</p>
            <div className="flex flex-wrap gap-3 mb-16">
              {skills.map(skill => (
                <span key={skill} className="text-sm font-medium px-4 py-2 rounded-full bg-surface text-fg">{skill}</span>
              ))}
            </div>

            <div className="pt-10 border-top-theme">
              <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-4">{t('education_label')}</p>
              <p className="text-fg text-base font-medium">{t('education_degree')}</p>
              <p className="text-muted text-sm mt-1">{t('education_place')}</p>
            </div>

            <div className="pt-10 mt-10 border-top-theme">
              <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-4">{t('accessibility_label')}</p>
              <p className="text-muted text-sm leading-relaxed">{t('accessibility_text')}</p>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Timeline */}
      <AnimateIn>
        <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-10">{t('experience_label')}</p>
      </AnimateIn>

      <div className="flex flex-col divide-theme" role="list" aria-label={t('experience_label')}>
        {timeline.map((item, i) => (
          <AnimateIn key={i} delay={i * 0.07}>
            <div className="py-6 grid md:grid-cols-[180px_1fr] gap-4 md:gap-10" role="listitem">
              <span className="text-muted text-sm font-mono">{item.period}</span>
              <div>
                <p className="text-fg font-semibold">{locale === 'en' ? item.role.en : item.role.de}</p>
                <p className="text-accent text-sm mb-2">{item.place}</p>
                <p className="text-muted text-sm leading-relaxed">{locale === 'en' ? item.description.en : item.description.de}</p>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  )
}
