'use client'

import OptimizedImage from './OptimizedImage'
import LiveWallpaper from './LiveWallpaper'
import { Share2 } from 'lucide-react'
import './Gallery.css'

export default function ImageGallery({ images = [] }) {
    return (
        <div className="gallery-grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3">
            {images.length === 0 ? (
                <div style={{ gridColumn: '1/-1', padding: '100px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '1.5rem', opacity: 0.3 }}>Your gallery is empty.<br />Upload your first flower!</p>
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
            style={{ aspectRatio: '16/9', minHeight: '350px' }}
        >
            {isLive ? (
                <LiveWallpaper
                    src={imageSrc}
                    priority={index < 8}
                />
            ) : (
                <OptimizedImage
                    src={imageSrc}
                    alt="Wallpaper"
                    fill={true}
                    priority={index < 8}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
