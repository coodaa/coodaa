import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer
      className="border-top-theme px-6 md:px-10 py-8 mt-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm"
    >
      <span className="text-muted">
        © {new Date().getFullYear()} Coodaa — Florian Schneider
      </span>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/coodaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200"
          aria-label="GitHub (öffnet in neuem Tab)"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/florianschneiderberlin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors duration-200"
          aria-label="LinkedIn (öffnet in neuem Tab)"
        >
          LinkedIn
        </a>
        <Link
          href="/legal"
          className="text-muted hover:text-accent transition-colors duration-200"
        >
          {t('imprint')}
        </Link>
      </div>
    </footer>
  )
}
