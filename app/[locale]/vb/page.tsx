import type { Metadata } from 'next'
import VbContainer from './VbContainer'

export const metadata: Metadata = {
  title: 'Volksbühne 3D',
  description: 'Interaktiver 3D-Viewer der Volksbühne am Rosa-Luxemburg-Platz, Berlin.',
}

export default function VbPage() {
  return (
    <div className="fixed inset-0 pt-14 bg-bg">
      <VbContainer />
    </div>
  )
}
