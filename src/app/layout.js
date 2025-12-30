import './globals.css'
import Background from '@/components/Background'
import Script from 'next/script'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.gipjazesflowersgallery.com'),
  title: 'Gipjazes Flowers Gallery',
  description: 'Premium Flower Gallery - Download Stunning 4D Digital Flora',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gipjazes Flowers Gallery',
    description: 'Premium Flower Gallery - Download Stunning 4D Digital Flora',
    url: 'https://www.gipjazesflowersgallery.com',
    siteName: 'Gipjazes Flowers',
    images: [
      {
        url: '/og-image.png', // Fallback to a default image if available
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gipjazes Flowers Gallery',
    description: 'Premium Flower Gallery - Download Stunning 4D Digital Flora',
    images: ['/og-image.png'],
  },
  verification: {
    google: '_z7VYmsaDFZMywyEnHEF4b2pNLQVf-e7pAtxgybdlwA',
  },
  other: {
    'google-adsense-account': 'ca-pub-2198481548549346',
  },
  icons: {
    apple: '/apple-icon.png',
  },
  keywords: [
    'Gipjazes Flowers', 'Digital Flora', '4D Flower Wallpapers',
    'Premium Nature Art', 'Flower Gallery', 'Digital Botany',
    'Android Wallpapers', 'iOS Wallpapers', 'High Resolution Flowers'
  ],
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Manual Placeholder */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2198481548549346"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "Gipjazes Flowers Gallery",
              "description": "Premium 4D Digital Flora Collection",
              "url": "https://www.gipjazesflowersgallery.com",
              "provider": {
                "@type": "Organization",
                "name": "Gipjazes"
              }
            })
          }}
        />
      </head>
      <body className={outfit.className} style={{ margin: 0, color: 'white' }}>
        <Background />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', overflowY: 'auto' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
