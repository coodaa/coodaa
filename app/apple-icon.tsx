import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: '#F72585',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
      }}
    >
      <svg width="110" height="110" viewBox="0 0 32 32">
        <path
          d="M 23.07 23.07 A 10 10 0 1 1 23.07 8.93"
          fill="none"
          stroke="#FEF0F5"
          stroke-width="5.5"
          stroke-linecap="round"
        />
      </svg>
    </div>,
    { ...size }
  )
}
