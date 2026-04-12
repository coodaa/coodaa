import type { MetadataRoute } from 'next'

const baseUrl = 'https://coodaa.de'
const locales = ['de', 'en']
const routes = ['', '/theater', '/web', '/about', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(locale =>
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )
}
