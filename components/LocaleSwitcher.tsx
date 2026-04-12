'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const otherLocale = locale === 'de' ? 'en' : 'de'

  const handleSwitch = () => {
    // Replace /de/ or /en/ prefix in pathname
    const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`)
    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <button
      type="button"
      onClick={handleSwitch}
      disabled={isPending}
      aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Deutsch'}`}
      className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200 text-muted hover:text-accent disabled:opacity-50"
    >
      {otherLocale}
    </button>
  )
}
