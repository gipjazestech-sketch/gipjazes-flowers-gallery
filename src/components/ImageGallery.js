'use client'

import OptimizedImage from './OptimizedImage'
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

function ImageCard({ image, index }) {
    const imageSrc = image.src || image.url

    return (
        <div
            className="group relative flower-card rounded-lg overflow-hidden"
            style={{ aspectRatio: '4/5', minHeight: '350px' }}
        >
            <OptimizedImage
                src={imageSrc}
                alt="Flower"
                fill={true}
                priority={index < 4} // Load first row immediately
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="card-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' }}>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                            {image.title ? image.title.split('/').pop().split('.')[0] : 'Digital Flora'}
                        </h3>
                        <span className="text-[10px] text-white/50 bg-white/10 px-2 py-1 rounded">4D • HQ</span>
                    </div>

                    <a
                        href={image.downloadUrl || imageSrc}
                        download
                        style={{ zIndex: 10, position: 'relative' }}
                        className="btn-statement"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>COLLECT BLOOM</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
