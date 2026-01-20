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
  title: 'Gipjazes Wallpapers | Premium 4K HD Digital Gallery',
  description: 'Download stunning 4K HD digital wallpapers for Android, iOS, and Desktop. High-resolution art collections optimized for every screen.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gipjazes Wallpapers | Premium 4K HD Digital Gallery',
    description: 'Download stunning 4K HD digital wallpapers for Android, iOS, and Desktop. High-resolution art collections optimized for every screen.',
    url: 'https://www.gipjazesflowersgallery.com',
    siteName: 'Gipjazes Wallpapers',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gipjazes Wallpapers | High-Res Digital Gallery',
    description: 'Premium 4K HD wallpapers for your digital life.',
    images: ['/og-image.png'],
  },
  verification: {
    google: '_z7VYmsaDFZMywyEnHEF4b2pNLQVf-e7pAtxgybdlwA',
  },
  other: {
    'google-adsense-account': 'ca-pub-2198481548549346',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2248%22 fill=%22%230070f3%22/><text y=%22.9em%22 x=%2250%22 font-size=%2270%22 fill=%22white%22 font-family=%22Arial, sans-serif%22 font-weight=%22bold%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>G</text></svg>',
    apple: '/apple-icon.png',
  },
  keywords: [
    'Gipjazes Wallpapers', '4K HD Wallpapers', 'Mobile Backgrounds',
    'Premium Digital Art', 'Desktop Wallpapers', 'Android 4K Art',
    'iPhone HD Backgrounds', '8DX Rendering', 'High Resolution Digital Gallery'
  ],
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense & WebView API for Ads */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2198481548549346"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="webview-ads-bridge" strategy="afterInteractive">
          {`
            (function() {
              window.googletag = window.googletag || { cmd: [] };
              if (window.googletag.registerAdWebViewManager) {
                window.googletag.registerAdWebViewManager();
              } else {
                window.googletag.cmd.push(function() {
                  if (window.googletag.registerAdWebViewManager) {
                    window.googletag.registerAdWebViewManager();
                  }
                });
              }
            })();
          `}
        </Script>
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://securepubads.g.doubleclick.net" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
