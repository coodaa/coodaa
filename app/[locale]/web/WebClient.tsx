'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'

type WebProject = {
  id: string
  name: string
  year: string
  role: { de: string; en: string }
  description: { de: string; en: string }
  detail: { de: string; en: string }
  images: string[]
  url?: string
  tech?: string[]
}

const projects: WebProject[] = [
  {
    id: 'helgawretman',
    name: 'Helga Wretman',
    year: '2025',
    role: { de: 'Design & Web Development', en: 'Design & Web Development' },
    description: {
      de: 'Portfolio-Website für die Berliner Medienkünstlerin Helga Wretman. Minimalistische Ästhetik für eine Praxis aus Videokunst, Performance und digitaler Kultur.',
      en: 'Portfolio website for Berlin-based media artist Helga Wretman. Minimalist, dark aesthetic for a practice spanning video art, performance and digital culture.',
    },
    detail: {
      de: 'Gebaut mit Next.js für maximale Performance und semantisches HTML für Barrierefreiheit und SEO. Alle Seiten server-side gerendert, Core Web Vitals im grünen Bereich. Vollständige Metadaten und mehrsprachige Unterstützung für internationale Reichweite.',
      en: 'Built with Next.js for maximum performance and semantic HTML for accessibility and SEO. All pages server-side rendered, Core Web Vitals in the green. Full metadata and multilingual support for international reach.',
    },
    images: ['/img/web/helgawretman/helgawretman.png'],
    url: 'https://www.helgawretman.com',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'lsd',
    name: 'LSD Berlin',
    year: '2025',
    role: { de: 'Web Development', en: 'Web Development' },
    description: {
      de: 'Website für LSD Berlin — Berliner Künstlerkollektiv für experimentelles Theater und Performance. Online-Präsenz für ein Spektrum aus Theater, Performance, Film und Musik.',
      en: 'Website for LSD Berlin — Berlin artist collective for experimental theatre and performance. Online presence spanning theatre, performance, film and music.',
    },
    detail: {
      de: 'Flexible Next.js-Architektur, die neue Inhalte einfach aufnimmt. Strukturierte Metadaten für jede Produktion sorgen dafür, dass einzelne Stücke bei Berliner Theater-Suchen sichtbar werden — nicht nur die Homepage.',
      en: 'Flexible Next.js architecture that makes adding new content straightforward. Structured metadata for each production ensures individual shows appear in Berlin theatre searches — not just the homepage.',
    },
    images: ['/img/web/lsd/lsd.png'],
    url: 'https://www.lsd-berlin.de/',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'hamburg',
    name: 'Haus Hamburg Leer',
    year: '2024',
    role: { de: 'Design & Fullstack Development', en: 'Design & Fullstack Development' },
    description: {
      de: 'Fullstack-Website für ein Restaurant in Leer, Ostfriesland — mit Online-Shop, Bestellfunktion und Tischreservierung. Direkte Bestellungen ohne Drittplattform-Provision.',
      en: 'Fullstack website for a restaurant in Leer, East Frisia — with online shop, ordering and table reservations. Direct orders without third-party commission.',
    },
    detail: {
      de: 'Vue.js Frontend, Node.js Backend, Stripe-Integration für sichere Zahlungen. Tischreservierungssystem mit E-Mail-Bestätigung. Lokales SEO mit strukturierten Daten (Schema.org Restaurant) und auf Leer / Ostfriesland optimierten Texten. Mobile-first.',
      en: 'Vue.js frontend, Node.js backend, Stripe integration for secure payments. Table reservation system with email confirmation. Local SEO with structured data (Schema.org Restaurant) and texts optimised for Leer / East Frisia. Mobile-first.',
    },
    images: ['/img/web/haushamburg/haushamburg.png'],
    url: 'https://www.haus-hamburg-leer.de/',
    tech: ['Vue.js', 'Pinia', 'Tailwind CSS', 'Node.js', 'Stripe'],
  },
  {
    id: 'lysius',
    name: 'Lysius',
    year: '2024',
    role: { de: 'Fullstack Development', en: 'Fullstack Development' },
    description: {
      de: 'Website für die Berliner Theatergruppe Lysius — multimediale Produktionen mit Musikern, Chören und Künstlern verschiedener Disziplinen.',
      en: 'Website for Berlin theatre group Lysius — multimedia productions with musicians, choirs and artists from various disciplines.',
    },
    detail: {
      de: 'Datenbankgestütztes Content-System mit Prisma und MySQL. Ein einfaches Admin-Interface erlaubt dem Team, neue Produktionen, Termine und Bilder selbst einzupflegen — ohne Entwickler beauftragen zu müssen.',
      en: 'Database-backed content system with Prisma and MySQL. A simple admin interface lets the team add new productions, dates and images themselves — without hiring a developer.',
    },
    images: ['/img/web/lysius/lysius.png'],
    url: 'https://www.lysius.org/',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'MySQL'],
  },
  {
    id: 'wagemann',
    name: 'Wagemann Schweiß-Service',
    year: '2023',
    role: { de: 'Design & Web Development', en: 'Design & Web Development' },
    description: {
      de: 'Corporate Website für Wagemann Schweiß-Service in Leer — technische Gase, Schweißarbeiten und Beratung in Ostfriesland.',
      en: 'Corporate website for Wagemann Schweiß-Service in Leer — technical gases, welding work and consulting in East Frisia.',
    },
    detail: {
      de: 'Mobile-first entwickelt mit klarer Struktur und lokalem SEO. Strukturierte Daten (Schema.org LocalBusiness) für bessere Sichtbarkeit bei lokalen Google-Suchen. Alle Seiten statisch generiert für maximale Ladegeschwindigkeit.',
      en: 'Developed mobile-first with clear structure and local SEO. Structured data (Schema.org LocalBusiness) for better visibility in local Google searches. All pages statically generated for maximum loading speed.',
    },
    images: ['/img/web/wagemann/wagemann.png'],
    url: 'https://www.wagemann-schweiss-service.de/',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
  },
]

function ParallaxImage({ src, alt, i }: { src: string; alt: string; i: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? 40 : -40, i % 2 === 0 ? -40 : 40])

  return (
    <div ref={ref} className="w-full overflow-hidden rounded-lg">
      <motion.div style={{ y }} className="relative w-full aspect-[3/2]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
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
  project: WebProject
  index: number
  total: number
  locale: string
}) {
  const t = useTranslations('web')
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.85', 'start 0.2'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  const role = locale === 'en' ? project.role.en : project.role.de
  const description = locale === 'en' ? project.description.en : project.description.de
  const detail = locale === 'en' ? project.detail.en : project.detail.de

  return (
    <motion.article
      ref={sectionRef}
      style={{ opacity, y, borderTop: '1px solid color-mix(in srgb, var(--muted) 20%, transparent)' }}
      className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 py-24 md:py-32"
      aria-label={project.name}
    >
      <div className="md:sticky md:top-24 md:self-start flex flex-col gap-4 min-w-0">
        <span className="text-muted text-xs font-mono uppercase tracking-widest" aria-label={`Projekt ${index + 1} von ${total}`}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <h2 className="heading-lg text-fg [hyphens:auto] [overflow-wrap:break-word]">{project.name}</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full bg-surface text-accent">
            {role}
          </span>
          <span className="text-xs font-mono text-muted">{project.year}</span>
        </div>
        <p className="text-muted text-sm md:text-base leading-relaxed mt-2 max-w-xs">
          {description}
        </p>
        <p className="text-muted text-sm leading-relaxed max-w-xs">
          {detail}
        </p>
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map(tag => (
              <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-surface text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}
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

      <div className="flex flex-col gap-5 min-w-0">
        {project.images.map((src, i) => (
          <ParallaxImage key={src + i} src={src} alt={`${project.name} — Bild ${i + 1}`} i={i} />
        ))}
      </div>
    </motion.article>
  )
}

export default function WebClient({ locale }: { locale: string }) {
  const t = useTranslations('web')

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
        {projects.map((p, i) => (
          <ProjectSection key={p.id} project={p} index={i} total={projects.length} locale={locale} />
        ))}
      </section>
    </div>
  )
}
