import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'coodaa — Creative Developer & Technischer Produktionsleiter, Berlin'
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
        background: '#FEF0F5',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '80px',
      }}
    >
      <div
        style={{
          color: '#F72585',
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: '0.1em',
          fontFamily: 'sans-serif',
        }}
      >
        coodaa.de
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            color: '#190811',
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1,
            fontFamily: 'sans-serif',
          }}
        >
          Florian Schneider
        </div>
        <div
          style={{
            color: '#9E6B7E',
            fontSize: 30,
            fontFamily: 'sans-serif',
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          width: 60,
          height: 6,
          background: '#F72585',
          borderRadius: 3,
        }}
      />
    </div>,
    { ...size }
  )
}
