'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { href: '/theater', label: t('theater') },
    { href: '/web',     label: t('web')     },
    { href: '/about',   label: t('about')   },
    { href: '/contact', label: t('contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Active link check: pathname includes the href segment
  const isActive = (href: string) => pathname.includes(href)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid color-mix(in srgb, var(--accent) 15%, transparent)' : '1px solid transparent',
        }}
      >
        <nav
          className="flex items-center justify-between px-6 md:px-10 h-14"
          aria-label="Hauptnavigation"
        >
          <Link
            href="/"
            className="font-bold text-lg tracking-tight transition-colors duration-500 text-accent"
            aria-label="Coodaa — Startseite"
          >
            Coodaa
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: isActive(href) ? 'var(--accent)' : 'var(--fg)' }}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--accent)' }}
                  aria-hidden="true"
                />
              </Link>
            ))}
            <LocaleSwitcher />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-4">
            <LocaleSwitcher />
            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              className="flex flex-col gap-1.5 p-1 focus:outline-none focus-visible:ring-2 rounded"
              style={{ ['--tw-ring-color' as string]: 'var(--accent)' }}
              aria-label={menuOpen ? t('close_menu') : t('open_menu')}
              aria-expanded={menuOpen}
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-px" style={{ backgroundColor: 'var(--fg)' }} />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px" style={{ backgroundColor: 'var(--fg)' }} />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-px" style={{ backgroundColor: 'var(--fg)' }} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label={t('open_menu')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
              >
                <Link
                  href={href}
                  className="heading-md font-bold"
                  style={{ color: isActive(href) ? 'var(--accent)' : 'var(--fg)' }}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
