'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'

type CaseStudy = {
  id: string
  name: string
  year: string
  client: { de: string; en: string }
  challenge: { de: string; en: string }
  solution: { de: string; en: string }
  result: { de: string; en: string }
  tech: string[]
  image: string
  url?: string
}

const cases: CaseStudy[] = [
  {
    id: 'helgawretman',
    name: 'Helga Wretman',
    year: '2025',
    client: {
      de: 'Berliner Medienkünstlerin — Video, Performance, digitale Kultur',
      en: 'Berlin-based media artist — video, performance, digital culture',
    },
    challenge: {
      de: 'Eine Künstlerin, deren Arbeit von stiller Intensität lebt, braucht eine Website, die diese Qualität widerspiegelt. Keine bunten Galerien, kein Überangebot — sondern eine Präsenz, die das Werk sprechen lässt und gleichzeitig bei Google für die relevanten Begriffe sichtbar ist.',
      en: 'An artist whose work thrives on quiet intensity needs a website that reflects that quality. No flashy galleries, no overload — a presence that lets the work speak while remaining visible in search results for the right terms.',
    },
    solution: {
      de: 'Minimalistisches Design mit dunklem Theme, das die Bilder und Videos der Künstlerin in den Vordergrund stellt. Gebaut mit Next.js für maximale Performance und semantisches HTML für Barrierefreiheit und SEO. Alle Seiten server-side gerendert, Core Web Vitals im grünen Bereich. Vollständige Metadaten, strukturierte Daten und mehrsprachige Unterstützung für internationale Reichweite.',
      en: 'Minimalist dark-theme design that foregrounds the artist\'s images and videos. Built with Next.js for maximum performance and semantic HTML for accessibility and SEO. All pages server-side rendered, Core Web Vitals in the green. Full metadata, structured data and multilingual support for international reach.',
    },
    result: {
      de: 'Eine schnelle, zugängliche Portfolio-Website, die die Ästhetik der Künstlerin trägt und in Suchmaschinen für ihren Namen und ihre Disziplinen gefunden wird.',
      en: 'A fast, accessible portfolio website that carries the artist\'s aesthetic and ranks in search engines for her name and disciplines.',
    },
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    image: '/img/web/helgawretman/helgawretman.png',
    url: 'https://www.helgawretman.com',
  },
  {
    id: 'lsd',
    name: 'LSD Berlin',
    year: '2025',
    client: {
      de: 'Berliner Künstlerkollektiv für experimentelles Theater und Performance',
      en: 'Berlin artist collective for experimental theatre and performance',
    },
    challenge: {
      de: 'Ein Berliner Theaterkollektiv braucht eine Online-Präsenz, die die Bandbreite ihrer Arbeit zeigt — Theater, Performance, Film, Musik — ohne generisch zu wirken. Die Website muss regelmäßige Updates ermöglichen und bei Berliner Kultursuchen gefunden werden.',
      en: 'A Berlin theatre collective needs an online presence that shows the breadth of their work — theatre, performance, film, music — without feeling generic. The site must allow regular updates and appear in Berlin cultural searches.',
    },
    solution: {
      de: 'Flexible Architektur mit Next.js, die neue Inhalte einfach aufnimmt. Klare typografische Hierarchie, die auch ohne große Budgets für Fotografie professionell wirkt. Strukturierte Metadaten für jede Produktion sorgen dafür, dass einzelne Stücke in der Suche sichtbar werden — nicht nur die Homepage.',
      en: 'Flexible Next.js architecture that makes adding new content straightforward. Clear typographic hierarchy that reads as professional even without large photography budgets. Structured metadata for each production ensures individual shows appear in search — not just the homepage.',
    },
    result: {
      de: 'Eine lebendige Website, die das Kollektiv mit seiner Arbeit präsentiert und bei lokalen Suchen nach Berliner Theater und Performance sichtbar ist.',
      en: 'A living website that presents the collective with its work and is visible in local searches for Berlin theatre and performance.',
    },
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    image: '/img/web/lsd/lsd.png',
    url: 'https://www.lsd-berlin.de/',
  },
  {
    id: 'hamburg',
    name: 'Haus Hamburg Leer',
    year: '2024',
    client: {
      de: 'Restaurant in Leer, Ostfriesland — Gastronomie mit Anspruch',
      en: 'Restaurant in Leer, East Frisia — quality hospitality',
    },
    challenge: {
      de: 'Ein Restaurant braucht mehr als eine Speisekarte online. Gefragt war eine vollständige digitale Infrastruktur: Online-Bestellung mit Zahlungsabwicklung, Tischreservierung und eine Website, die bei lokalen Google-Suchen nach "Restaurant Leer" weit oben erscheint.',
      en: 'A restaurant needs more than a menu online. The ask was a complete digital infrastructure: online ordering with payment processing, table reservations, and a website that ranks high in local Google searches for "restaurant Leer".',
    },
    solution: {
      de: 'Fullstack-Anwendung mit Vue.js im Frontend und Node.js im Backend. Stripe-Integration für sichere Online-Zahlungen. Tischreservierungssystem mit E-Mail-Bestätigung. Lokales SEO mit strukturierten Daten (Schema.org Restaurant), Google My Business-Verknüpfung und auf Leer / Ostfriesland optimierten Texten. Mobile-first, da der Großteil der Restaurantsuchen vom Handy kommt.',
      en: 'Fullstack application with Vue.js frontend and Node.js backend. Stripe integration for secure online payments. Table reservation system with email confirmation. Local SEO with structured data (Schema.org Restaurant), Google My Business linkage and texts optimised for Leer / East Frisia. Mobile-first, since the majority of restaurant searches come from phones.',
    },
    result: {
      de: 'Messbar mehr Online-Bestellungen und Reservierungen direkt über die eigene Website, unabhängig von Drittplattformen mit hohen Provisionen.',
      en: 'Measurably more online orders and reservations directly through the restaurant\'s own website, independent of third-party platforms with high commissions.',
    },
    tech: ['Vue.js', 'Pinia', 'Tailwind CSS', 'Node.js', 'Stripe'],
    image: '/img/web/haushamburg/haushamburg.png',
    url: 'https://www.haus-hamburg-leer.de/',
  },
  {
    id: 'lysius',
    name: 'Lysius',
    year: '2024',
    client: {
      de: 'Theatergruppe Berlin — multimediale Produktionen mit Musikern, Chören und Künstlern',
      en: 'Berlin theatre group — multimedia productions with musicians, choirs and artists',
    },
    challenge: {
      de: 'Eine Theatergruppe, die regelmäßig neue Produktionen zeigt, braucht eine Website, die sie selbst pflegen kann — ohne bei jeder Spielplanänderung einen Entwickler zu beauftragen. Gleichzeitig soll die experimentelle Ästhetik ihrer Arbeit sichtbar sein.',
      en: 'A theatre group that regularly presents new productions needs a website they can manage themselves — without hiring a developer for every programme change. At the same time, the experimental aesthetic of their work should be visible.',
    },
    solution: {
      de: 'Fullstack-Lösung mit Next.js und einem datenbankgestützten Content-System (Prisma / MySQL). Ein einfaches Admin-Interface erlaubt es dem Team, neue Produktionen, Termine und Bilder selbst einzupflegen. Das Design stellt die Produktionsfotos in den Mittelpunkt und schafft eine klare visuelle Sprache für das experimentelle Programm.',
      en: 'Fullstack solution with Next.js and a database-backed content system (Prisma / MySQL). A simple admin interface lets the team add new productions, dates and images themselves. The design centres production photography and establishes a clear visual language for the experimental programme.',
    },
    result: {
      de: 'Ein selbstverwaltetes Web-Auftrittssystem, das dem Team echte Unabhängigkeit gibt — und eine schnelle, zugängliche Website, die in Berlin bei Suchen nach experimentellem Theater gefunden wird.',
      en: 'A self-managed web presence system that gives the team genuine independence — and a fast, accessible website found in Berlin searches for experimental theatre.',
    },
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'MySQL', 'TypeScript'],
    image: '/img/web/lysius/lysius.png',
    url: 'https://www.lysius.org/',
  },
  {
    id: 'wagemann',
    name: 'Wagemann Schweiß-Service',
    year: '2023',
    client: {
      de: 'Fachbetrieb für technische Gase und Schweißarbeiten, Leer (Ostfriesland)',
      en: 'Specialist in technical gases and welding services, Leer (East Frisia)',
    },
    challenge: {
      de: 'Ein gewachsenes Handwerksunternehmen hatte keine eigene Online-Präsenz — und verlor dadurch potenzielle Kunden, die bei Google nach "technische Gase Leer" oder "Schweißarbeiten Ostfriesland" suchen. Die Website sollte professionell, schnell und auf mobilen Geräten einwandfrei funktionieren.',
      en: 'An established craft business had no online presence — losing potential customers searching Google for "technical gases Leer" or "welding Ostfriesland". The website needed to be professional, fast and work flawlessly on mobile devices.',
    },
    solution: {
      de: 'Corporate Website mit Next.js, mobile-first entwickelt. Klare Struktur mit Leistungsübersicht, Kontaktformular und lokalem SEO. Strukturierte Daten (Schema.org LocalBusiness) für bessere Sichtbarkeit in der lokalen Google-Suche. Alle Seiten statisch generiert für maximale Ladegeschwindigkeit — auch auf langsameren Verbindungen.',
      en: 'Corporate website with Next.js, developed mobile-first. Clear structure with services overview, contact form and local SEO. Structured data (Schema.org LocalBusiness) for better visibility in local Google search. All pages statically generated for maximum loading speed — even on slower connections.',
    },
    result: {
      de: 'Professioneller Online-Auftritt, der das Unternehmen bei lokalen Suchen sichtbar macht und Neukunden über Google gewinnt.',
      en: 'Professional online presence that makes the business visible in local searches and wins new customers through Google.',
    },
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    image: '/img/web/wagemann/wagemann.png',
    url: 'https://www.wagemann-schweiss-service.de/',
  },
]

function CaseSection({ study, index, total, locale }: { study: CaseStudy; index: number; total: number; locale: string }) {
  const t = useTranslations('cases')
  const isEven = index % 2 === 0

  return (
    <article
      className="py-20 md:py-28"
      style={{ borderTop: '1px solid color-mix(in srgb, var(--muted) 20%, transparent)' }}
      aria-label={study.name}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Text side */}
        <div className={`flex flex-col gap-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-muted text-xs font-mono uppercase tracking-widest">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="text-xs font-mono text-muted">{study.year}</span>
          </div>

          <h2 className="heading-lg text-fg">{study.name}</h2>

          <p className="text-xs uppercase tracking-widest font-medium text-accent">
            {locale === 'de' ? study.client.de : study.client.en}
          </p>

          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-muted mb-2">
                {t('challenge')}
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {locale === 'de' ? study.challenge.de : study.challenge.en}
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-muted mb-2">
                {t('solution')}
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {locale === 'de' ? study.solution.de : study.solution.en}
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-muted mb-2">
                {t('result')}
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                {locale === 'de' ? study.result.de : study.result.en}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tech.map(tag => (
              <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-surface text-muted">
                {tag}
              </span>
            ))}
          </div>

          {study.url && (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent group w-fit"
              aria-label={`${t('visit')} ${study.name} (öffnet in neuem Tab)`}
            >
              {t('visit')}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          )}
        </div>

        {/* Image side */}
        <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
            <Image
              src={study.image}
              alt={`${study.name} — Screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function CasesClient({ locale }: { locale: string }) {
  const t = useTranslations('cases')

  return (
    <div className="px-6 md:px-10 pt-28 max-w-[1400px] mx-auto">
      <h1 className="display text-fg mb-4">
        <LetterReveal text={t('heading')} delay={0.1} stagger={0.06} />
      </h1>

      <AnimateIn delay={0.5}>
        <p className="text-muted text-base md:text-lg max-w-md leading-relaxed mb-16">
          {t('description')}
        </p>
      </AnimateIn>

      <section aria-label={t('heading')}>
        {cases.map((study, i) => (
          <CaseSection key={study.id} study={study} index={i} total={cases.length} locale={locale} />
        ))}
      </section>
    </div>
  )
}
