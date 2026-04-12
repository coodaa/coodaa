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
  images: string[]
  url?: string
}

const projects: WebProject[] = [
  {
    id: 'helgawretman',
    name: 'Helga Wretman',
    year: '2025',
    role: { de: 'Web Development', en: 'Web Development' },
    description: {
      de: 'Portfolio-Website für die Berliner Künstlerin Helga Wretman. Minimalistische, dunkle Ästhetik für eine Praxis aus Videokunst, Performance und digitaler Kultur.',
      en: 'Portfolio website for Berlin-based artist Helga Wretman. Minimalist, dark aesthetic for a practice spanning video art, performance and digital culture.',
    },
    images: ['/img/web/helgawretman/helgawretman.png'],
    url: 'https://www.helgawretman.com',
  },
  {
    id: 'lsd',
    name: 'LSD Berlin',
    year: '2025',
    role: { de: 'Web Development', en: 'Web Development' },
    description: {
      de: 'Website für LSD Berlin — Künstlerkollektiv für experimentelle Theater- und Performancearbeit. Online-Präsenz für ein breites Spektrum aus Theater, Performance, Film und Musik.',
      en: 'Website for LSD Berlin — artist collective for experimental theatre and performance work. Online presence for a broad spectrum of theatre, performance, film and music.',
    },
    images: ['/img/web/lsd/lsd.png'],
    url: 'https://www.lsd-berlin.de/',
  },
  {
    id: 'hamburg',
    name: 'Haus Hamburg Leer',
    year: '2024',
    role: { de: 'Web Development', en: 'Web Development' },
    description: {
      de: 'Restaurant-Website für Haus Hamburg in Leer — mit Online-Shop, Bestellfunktion und Tischreservierung.',
      en: 'Restaurant website for Haus Hamburg in Leer — with online shop, ordering function and table reservations.',
    },
    images: ['/img/web/haushamburg/haushamburg.png'],
    url: 'https://www.haus-hamburg-leer.de/',
  },
  {
    id: 'lysius',
    name: 'Lysius',
    year: '2024',
    role: { de: 'Web Development', en: 'Web Development' },
    description: {
      de: 'Website für die Theatergruppe Lysius — multimediale Produktionen mit Musikern, Chören und Künstlern verschiedener Disziplinen. Design das die experimentelle Arbeit in den Vordergrund stellt.',
      en: 'Website for theatre group Lysius — multimedia productions with musicians, choirs and artists from various disciplines. Design that foregrounds the experimental work.',
    },
    images: ['/img/web/lysius/lysius.png'],
    url: 'https://www.lysius.org/',
  },
  {
    id: 'wagemann',
    name: 'Wagemann Schweiß-Service',
    year: '2023',
    role: { de: 'Web Development', en: 'Web Development' },
    description: {
      de: 'Corporate Website für Wagemann Schweiß-Service in Leer — technische Gase, Schweißarbeiten und Beratung in Ostfriesland. Klare Struktur, mobile-first.',
      en: 'Corporate website for Wagemann Schweiß-Service in Leer — technical gases, welding work and consulting in East Frisia. Clean structure, mobile-first.',
    },
    images: ['/img/web/wagemann/wagemann.png'],
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
