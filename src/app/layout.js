import './globals.css'
import Background from '@/components/Background'
import Script from 'next/script'

export const metadata = {
  title: 'Gipjazes Flowers Gallery',
  description: 'Premium Flower Gallery',
  verification: {
    google: 'HaqAUWNQx0X6PqVdmDzJt0BoW7wtk7fvzeCA9A85B0o',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Manual Placeholder */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2198481548549346"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0, color: 'white' }}>
        <Background />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', overflowY: 'auto' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
