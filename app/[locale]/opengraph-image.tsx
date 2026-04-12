import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Coodaa — Creative Developer & Technischer Produktionsleiter, Berlin'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const subtitle = locale === 'de'
    ? 'Creative Developer & Technischer Produktionsleiter — Berlin'
    : 'Creative Developer & Technical Production Manager — Berlin'

  return new ImageResponse(
    <div
      style={{
        background: '#190811',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
      }}
    >
      <div
        style={{
          color: '#F72585',
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 32,
          fontFamily: 'sans-serif',
        }}
      >
        coodaa.de
      </div>
      <div
        style={{
          color: '#FEF0F5',
          fontSize: 80,
          fontWeight: 700,
          lineHeight: 1,
          marginBottom: 32,
          fontFamily: 'sans-serif',
        }}
      >
        Florian Schneider
      </div>
      <div
        style={{
          color: '#9E6B7E',
          fontSize: 26,
          fontFamily: 'sans-serif',
        }}
      >
        {subtitle}
      </div>
    </div>,
    { ...size }
  )
}
