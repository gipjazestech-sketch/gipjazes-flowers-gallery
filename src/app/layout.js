import './globals.css'
import Background from '@/components/Background'

export const metadata = {
  title: 'Gipjazes Flowers Gallery',
  description: 'Premium Flower Gallery',
  verification: {
    google: '51ac07993292d92f',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, color: 'white' }}>
        <Background />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', overflowY: 'auto' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
