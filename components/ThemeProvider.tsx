'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export type Theme = 'strawberry' | 'grape' | 'mint' | 'lemon'

const themeIds: Theme[] = ['strawberry', 'grape', 'mint', 'lemon']

function pickRandom(exclude?: Theme): Theme {
  const options = exclude ? themeIds.filter(t => t !== exclude) : themeIds
  return options[Math.floor(Math.random() * options.length)]
}

const ThemeContext = createContext<{ theme: Theme }>({ theme: 'strawberry' })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('strawberry')
  const pathname = usePathname()
  const isFirst = useRef(true)

  // On first load: pick random theme
  useEffect(() => {
    const initial = pickRandom()
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  // On every route change after first: pick a different random theme
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    setTheme(prev => {
      const next = pickRandom(prev)
      document.documentElement.setAttribute('data-theme', next)
      return next
    })
  }, [pathname])

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
