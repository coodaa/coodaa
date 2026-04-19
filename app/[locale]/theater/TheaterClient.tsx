'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LetterReveal from '@/components/LetterReveal'
import AnimateIn from '@/components/AnimateIn'

type Production = {
  id: string
  name: string
  year: string
  role: { de: string; en: string }
  description: { de: string; en: string }
  images: string[]
  url?: string
}

const productions: Production[] = [
  {
    id: 'volksbuehne-peergynt',
    name: 'Volksbühne Peer Gynt',
    year: '2025',
    role: {
      de: 'Technischer Produktionsleiter',
      en: 'Technical Production Manager',
    },
    description: {
      de: 'Technische Gesamtleitung für Peer Gynt an der Volksbühne am Rosa-Luxemburg-Platz. Regie: Vegard Vinge (Vinge / Müller / Reinholdtsen), Ensemble rund 100 Mitwirkende auf der Großen Bühne. Verantwortung für alle technischen Gewerke, Budgetplanung und Teamführung.',
      en: 'Full technical production management for Peer Gynt at the Volksbühne am Rosa-Luxemburg-Platz. Direction: Vegard Vinge (Vinge / Müller / Reinholdtsen), ensemble of around 100 performers on the main stage. Responsible for all technical departments, budget planning and team leadership.',
    },
    images: [
      '/img/theatre/peergynt/peergynt-stadtkulisse.webp',
      '/img/theatre/peergynt/peergynt-telefonzelle.webp',
      '/img/theatre/peergynt/peergynt-hexe.webp',
      '/img/theatre/peergynt/peergynt-jongynt.webp',
      '/img/theatre/peergynt/peergynt-maske.webp',
    ],
    url: 'https://www.volksbuehne.berlin/de/repertoire/peer-gynt',
  },
  {
    id: 'aranya',
    name: 'Aranya Theater Festival',
    year: '2022',
    role: {
      de: 'Gastspielleitung / Technical Manager',
      en: 'Tour Manager / Technical Manager',
    },
    description: {
      de: 'Technische Leitung des Gastspiels der Volksbühne Berlin am Aranya Theater Festival in Qinhuangdao, China. Outdoor-Produktion direkt am Meer — Koordination von Aufbau, Technik und internationalem Team vor Ort.',
      en: 'Technical management of the Volksbühne Berlin guest performance at the Aranya Theater Festival in Qinhuangdao, China. Outdoor production directly on the sea — coordination of setup, technical departments and international team on site.',
    },
    images: [
      '/img/theatre/aranya/aranya-buehne-meer.webp',
      '/img/theatre/aranya/aranya-buehne-nass.webp',
      '/img/theatre/aranya/aranya-technik.webp',
    ],
    url: 'https://www.aranyatheaterfestival.com/archive2021-2022',
  },
  {
    id: 'volksbuehne-2023',
    name: 'Volksbühne Berlin',
    year: '2023–2024',
    role: {
      de: 'Technical Project Manager',
      en: 'Technical Project Manager',
    },
    description: {
      de: 'Technisches Projektmanagement an der Volksbühne am Rosa-Luxemburg-Platz über mehrere Spielzeiten.',
      en: 'Technical project management at the Volksbühne am Rosa-Luxemburg-Platz across multiple seasons.',
    },
    images: [
      '/img/theatre/volksbuehne-2023/volksbuehne-ja-nichts-ist-ok.webp',
      '/img/theatre/volksbuehne-2023/extinction.webp',
      '/img/theatre/volksbuehne-2023/volksbuehne-sancta.webp',
    ],
  },
  {
    id: 'gropiusbau',
    name: 'MaerzMusik',
    year: '2021–2022',
    role: {
      de: 'Technical Manager',
      en: 'Technical Manager',
    },
    description: {
      de: 'Technische Leitung des MaerzMusik Festivals im Gropius Bau und weiteren Orten. Koordination aller technischen Gewerke für das internationale Musikfestival.',
      en: 'Technical management of the MaerzMusik festival at the Martin-Gropius-Bau and other locations. Coordination of all technical departments for the international music festival.',
    },
    images: [
      '/img/theatre/maerzmusik/mm22-p-100-cymbals-c-henri-vogt.webp',
      '/img/theatre/maerzmusik/maerzmusik-01.webp',
      '/img/theatre/maerzmusik/maerzmusik-02.webp',
    ],
  },
  {
    id: 'nationaltheater',
    name: 'Nationaltheater Reinickendorf',
    year: '2016–2017',
    role: {
      de: 'Assistent der technischen Leitung',
      en: 'Assistant Technical Manager',
    },
    description: {
      de: 'Produktion von Vegard Vinge & Ida Müller — eine der aufwändigsten und ungewöhnlichsten Theaterproduktionen Berlins. Einrichtung einer Industriehalle als temporäre Spielstätte. Offiziell Assistent der technischen Leitung, faktisch mit deutlich erweiterter Verantwortung.',
      en: 'Production by Vegard Vinge & Ida Müller — one of the most ambitious and unconventional theatre productions in Berlin. Conversion of an industrial hall into a temporary venue. Officially Assistant Technical Manager, in practice with significantly expanded responsibilities.',
    },
    images: [
      '/img/theatre/nationaltheater/nationaltheater-00.webp',
      '/img/theatre/nationaltheater/nationaltheater-01.webp',
      '/img/theatre/nationaltheater/nationaltheater-02.webp',
      '/img/theatre/nationaltheater/nationaltheater-03.webp',
      '/img/theatre/nationaltheater/nationaltheater-04.webp',
      '/img/theatre/nationaltheater/nationaltheater-05.webp',
    ],
  },
  {
    id: 'festspiele',
    name: 'Berliner Festspiele Immersion',
    year: '2016–2020',
    role: {
      de: 'Technischer Leiter Immersion',
      en: 'Technical Manager Immersion',
    },
    description: {
      de: 'Technische Leitung der Programmreihe Immersion (2019–2020), davor Assistent der technischen Leitung (2016–2018). Produktionen u.a.: The New Infinity, Uncanny Valley, Down to Earth, Nationaltheater Reinickendorf (Vinge/Müller). Ausstellungen: "Welt ohne Außen" und "Philippe Parreno" im Martin-Gropius-Bau.',
      en: 'Technical Manager of the Immersion programme (2019–2020), previously Assistant Technical Manager (2016–2018). Productions including: The New Infinity, Uncanny Valley, Down to Earth, Nationaltheater Reinickendorf (Vinge/Müller). Exhibitions: "Welt ohne Außen" and "Philippe Parreno" at Martin-Gropius-Bau.',
    },
    images: [
      '/img/theatre/immersion/immersion-uncanny-valley.webp',
      '/img/theatre/immersion/immersion-new-infinity.webp',
      '/img/theatre/immersion/immersion-down-to-earth.webp',
      '/img/theatre/immersion/immersion-down-to-earth-2.webp',
      '/img/theatre/immersion/immersion-01.webp',
      '/img/theatre/immersion/immersion-02.webp',
    ],
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

function ProductionSection({
  production,
  index,
  total,
  locale,
}: {
  production: Production
  index: number
  total: number
  locale: string
}) {
  const t = useTranslations('theater')
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.85', 'start 0.2'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  const role = locale === 'en' ? production.role.en : production.role.de
  const description = locale === 'en' ? production.description.en : production.description.de

  return (
    <motion.article
      ref={sectionRef}
      style={{ opacity, y, borderTop: '1px solid color-mix(in srgb, var(--muted) 20%, transparent)' }}
      className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 py-24 md:py-32"
      aria-label={production.name}
    >
      <div className="md:sticky md:top-24 md:self-start flex flex-col gap-4 min-w-0">
        <span className="text-muted text-xs font-mono uppercase tracking-widest" aria-label={`Produktion ${index + 1} von ${total}`}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <h2 className="heading-lg text-fg">{production.name}</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full bg-surface text-accent">
            {role}
          </span>
          <span className="text-xs font-mono text-muted">{production.year}</span>
        </div>
        <p className="text-muted text-sm md:text-base leading-relaxed mt-2 max-w-xs">
          {description}
        </p>
        {production.url && (
          <a
            href={production.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold uppercase tracking-widest text-accent group"
            aria-label={`${t('visit')} ${production.name} (öffnet in neuem Tab)`}
          >
            {t('visit')}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <div className="flex flex-col gap-5 min-w-0">
        {production.images.map((src, i) => (
          <ParallaxImage key={src + i} src={src} alt={`${production.name} — Bild ${i + 1}`} i={i} />
        ))}
      </div>
    </motion.article>
  )
}

export default function TheaterClient({ locale }: { locale: string }) {
  const t = useTranslations('theater')

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
        {productions.map((p, i) => (
          <ProductionSection key={p.id} production={p} index={i} total={productions.length} locale={locale} />
        ))}
      </section>
    </div>
  )
}
