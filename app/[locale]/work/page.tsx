'use client'

import { useRef, use } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'

type Project = {
  id: string
  name: string
  nameEn?: string
  year: string
  role: { de: string; en: string }
  description: { de: string; en: string }
  images: string[]
  url?: string
  category: 'theater' | 'web'
}

const projects: Project[] = [
  // ── Theater & Events ────────────────────────────────────────
  {
    id: 'volksbuehne',
    name: 'Volksbühne Berlin',
    year: '2023–heute',
    category: 'theater',
    role: {
      de: 'Technischer Produktionsleiter',
      en: 'Technical Production Manager',
    },
    description: {
      de: 'Technische Produktionsleitung und Projektmanagement an einem der bekanntesten Theater Berlins. Koordination komplexer Produktionen, Teamführung und technische Planung. Seit 2023 in unterschiedlichen Rollen — aktuell als Technischer Produktionsleiter, u.a. für Peer Gynt (Herbst 2025).',
      en: 'Technical production management and project coordination at one of Berlin\'s most iconic theatres. Complex production coordination, team leadership and technical planning. In various roles since 2023 — currently as Technical Production Manager, including Peer Gynt (autumn 2025).',
    },
    images: ['/img/gas.webp', '/img/gas2.webp', '/img/gas3.webp'],
    url: 'https://www.volksbuehne.berlin/de/repertoire/peer-gynt',
  },
  {
    id: 'gropiusbau',
    name: 'Gropius Bau — MaerzMusik',
    year: '2021–2022',
    category: 'theater',
    role: {
      de: 'Technical Manager',
      en: 'Technical Manager',
    },
    description: {
      de: 'Technische Leitung des MaerzMusik Festivals im Martin-Gropius-Bau. Koordination aller technischen Gewerke für das internationale Musikfestival.',
      en: 'Technical management of the MaerzMusik festival at the Martin-Gropius-Bau. Coordination of all technical departments for the international music festival.',
    },
    images: ['/img/gas2.webp', '/img/gas3.webp', '/img/gas.webp'],
  },
  {
    id: 'festspiele',
    name: 'Berliner Festspiele',
    year: '2016–2020',
    category: 'theater',
    role: {
      de: 'Technical Manager — Immersion',
      en: 'Technical Manager — Immersion',
    },
    description: {
      de: 'Vier Jahre als Technical Manager bei den Berliner Festspielen, u.a. für das Immersion-Festival. Planung und Durchführung großer internationaler Produktionen.',
      en: 'Four years as Technical Manager at the Berliner Festspiele, including the Immersion festival. Planning and execution of major international productions.',
    },
    images: ['/img/gas3.webp', '/img/gas.webp', '/img/gas2.webp'],
  },
  // ── Web & Digital ───────────────────────────────────────────
  {
    id: 'lsd',
    name: 'LSD Berlin',
    year: '2025',
    category: 'web',
    role: {
      de: 'Web Development',
      en: 'Web Development',
    },
    description: {
      de: 'Website für das Berliner Studio LSD Berlin. Moderne, klare Online-Präsenz mit Fokus auf das kreative Portfolio.',
      en: 'Website for Berlin-based studio LSD Berlin. Modern, clear online presence focused on the creative portfolio.',
    },
    images: ['/img/gas.webp', '/img/gas2.webp'],
    url: 'https://www.lsd-berlin.de/',
  },
  {
    id: 'hamburg',
    name: 'Haus Hamburg Leer',
    year: '2024',
    category: 'web',
    role: {
      de: 'Web Development',
      en: 'Web Development',
    },
    description: {
      de: 'Website für Haus Hamburg in Leer. Barrierefreie, moderne Präsenz für die Einrichtung.',
      en: 'Website for Haus Hamburg in Leer. Accessible, modern online presence for the facility.',
    },
    images: ['/img/gas.webp', '/img/gas3.webp'],
    url: 'https://www.haus-hamburg-leer.de/',
  },
  {
    id: 'lysius',
    name: 'Lysius',
    year: '2024',
    category: 'web',
    role: {
      de: 'Web Development',
      en: 'Web Development',
    },
    description: {
      de: 'Online-Auftritt für die Theatergruppe Lysius. Atmosphärisches Design das die künstlerische Arbeit in den Vordergrund stellt.',
      en: 'Online presence for theatre group Lysius. Atmospheric design that foregrounds the artistic work.',
    },
    images: ['/img/gas3.webp', '/img/gas.webp'],
    url: 'https://www.lysius.org/',
  },
  {
    id: 'wagemann',
    name: 'Wagemann Schweiß-Service',
    year: '2023',
    category: 'web',
    role: {
      de: 'Web Development',
      en: 'Web Development',
    },
    description: {
      de: 'Corporate Website für ein Berliner Handwerksunternehmen. Klare Struktur, mobile-first, schnelle Ladezeiten.',
      en: 'Corporate website for a Berlin-based craft business. Clear structure, mobile-first, fast loading times.',
    },
    images: ['/img/gas2.webp', '/img/gas3.webp'],
    url: 'https://www.wagemann-schweiss-service.de/',
  },
]

function ParallaxImage({ src, alt, i }: { src: string; alt: string; i: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? 40 : -40, i % 2 === 0 ? -40 : 40])

  return (
    <div ref={ref} className="overflow-hidden rounded-lg">
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={520}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  )
}

function ProjectSection({
  project,
  index,
  total,
  locale,
}: {
  project: Project
  index: number
  total: number
  locale: string
}) {
  const t = useTranslations('work')
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.85', 'start 0.2'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  const role = locale === 'en' ? project.role.en : project.role.de
  const description = locale === 'en' ? project.description.en : project.description.de

  return (
    <motion.article
      ref={sectionRef}
      style={{ opacity, y, borderTop: '1px solid color-mix(in srgb, var(--muted) 20%, transparent)' }}
      className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 py-24 md:py-32"
      aria-label={project.name}
    >
      <div className="md:sticky md:top-24 md:self-start flex flex-col gap-4">
        <span className="text-muted text-xs font-mono uppercase tracking-widest" aria-label={`Projekt ${index + 1} von ${total}`}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <h2 className="heading-lg text-fg">{project.name}</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full bg-surface text-accent">
            {role}
          </span>
          <span className="text-xs font-mono text-muted">{project.year}</span>
        </div>
        <p className="text-muted text-sm md:text-base leading-relaxed mt-2 max-w-xs">
          {description}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold uppercase tracking-widest text-accent group"
            aria-label={`${t('visit')} ${project.name} (öffnet in neuem Tab)`}
          >
            {t('visit')}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {project.images.map((src, i) => (
          <ParallaxImage key={src + i} src={src} alt={`${project.name} — Bild ${i + 1}`} i={i} />
        ))}
      </div>
    </motion.article>
  )
}

export default function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations('work')
  const { locale } = use(params)

  const theater = projects.filter(p => p.category === 'theater')
  const web = projects.filter(p => p.category === 'web')

  return (
    <div className="px-6 md:px-10 pt-28 max-w-[1400px] mx-auto">
      <h1 className="display text-fg mb-4">
        <LetterReveal text={t('heading')} delay={0.1} stagger={0.1} />
      </h1>

      <AnimateIn delay={0.5}>
        <p className="text-muted text-base md:text-lg max-w-md leading-relaxed mb-16">
          {t('description')}
        </p>
      </AnimateIn>

      {/* ── Theater & Events ── */}
      <section aria-labelledby="category-theater">
        <AnimateIn>
          <h2
            id="category-theater"
            className="text-xs uppercase tracking-widest font-semibold text-muted mb-2 mt-8"
          >
            {t('category_theater')}
          </h2>
        </AnimateIn>
        {theater.map((p, i) => (
          <ProjectSection key={p.id} project={p} index={i} total={theater.length} locale={locale} />
        ))}
      </section>

      {/* ── Web & Digital ── */}
      <section aria-labelledby="category-web" className="mt-8">
        <AnimateIn>
          <h2
            id="category-web"
            className="text-xs uppercase tracking-widest font-semibold text-muted mb-2"
          >
            {t('category_web')}
          </h2>
        </AnimateIn>
        {web.map((p, i) => (
          <ProjectSection key={p.id} project={p} index={i} total={web.length} locale={locale} />
        ))}
      </section>
    </div>
  )
}
