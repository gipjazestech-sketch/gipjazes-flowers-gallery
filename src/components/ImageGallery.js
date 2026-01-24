'use client'

import OptimizedImage from './OptimizedImage'
import LiveWallpaper from './LiveWallpaper'
import { Share2 } from 'lucide-react'
import './Gallery.css'

export default function ImageGallery({ images = [] }) {
    return (
        <div className="gallery-grid">
            {images.length === 0 ? (
                <div style={{ gridColumn: '1/-1', padding: '80px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>Gallery Collection Coming Soon</h3>
                    <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                        Our curators are currently selecting the finest 4K digital flora for this section.
                        In the meantime, explore our <Link href="/articles" style={{ color: '#d946ef' }}>latest articles</Link> on digital art and design.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Link href="/about" className="btn-premium" style={{ fontSize: '0.9rem', padding: '10px 20px', background: 'rgba(255,255,255,0.1)' }}>
                            About Us
                        </Link>
                        <Link href="/articles" className="btn-premium" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>
                            Read Blog
                        </Link>
                    </div>
                </div>
            ) : (
                images.map((image, index) => (
                    <ImageCard
                        key={image.url || image.src || index}
                        image={image}
                        index={index}
                    />
                ))
            )}
        </div>
    )
}

function isVideo(url) {
    if (!url) return false
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov']
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext)) || url.includes('video/')
}

function ImageCard({ image, index }) {
    const imageSrc = image.src || image.url

    const isLive = isVideo(imageSrc)

    return (
        <div
            className="group relative flower-card rounded-lg overflow-hidden"
            style={{ aspectRatio: '16/9', maxHeight: '400px' }}
        >
            {isLive ? (
                <LiveWallpaper
                    src={imageSrc}
                    priority={index < 4}
                />
            ) : (
                <OptimizedImage
                    src={imageSrc}
                    alt={image.title || `Gipjazes Premium Wallpaper ${index + 1}`}
                    title={image.title || "Premium 4K Wallpaper"}
                    fill={true}
                    priority={index < 4}
                    sizes="(max-width: 640px) 100vw, 600px"
                />
            )}

            <div className="card-overlay-permanent" style={{ display: 'flex', gap: '10px' }}>
                <a
                    href={image.downloadUrl || imageSrc}
                    download
                    style={{ zIndex: 10, position: 'relative', flex: 1 }}
                    className="btn-statement"
                    onClick={(e) => e.stopPropagation()}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>DOWNLOAD</span>
                </a>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (navigator.share) {
                            navigator.share({
                                title: 'Gipjazes Wallpapers',
                                text: 'Check out this stunning high-quality wallpaper!',
                                url: window.location.href,
                            });
                        }
                    }}
                    style={{
                        zIndex: 10,
                        position: 'relative',
                        width: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                    className="btn-statement"
                >
                    <Share2 size={16} />
                </button>
            </div>
        </div>
    )
}
