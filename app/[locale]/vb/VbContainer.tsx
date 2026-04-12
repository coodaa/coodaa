'use client'

import dynamic from 'next/dynamic'

const VbViewer = dynamic(() => import('./VbViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-muted text-sm uppercase tracking-widest animate-pulse">
        Lädt 3D-Modell…
      </span>
    </div>
  ),
})

export default function VbContainer() {
  return <VbViewer />
}
