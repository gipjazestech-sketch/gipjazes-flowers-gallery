'use client'

import { useEffect, useRef, useState } from 'react'
import OptimizedImage from './OptimizedImage'
import './Gallery.css'

export default function ImageGallery({ images = [] }) {
    const [loadedImages, setLoadedImages] = useState(new Set())
    const observerRef = useRef(null)

    useEffect(() => {
        // More reliable observer settings
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const imageId = entry.target.dataset.imageId
                        setLoadedImages((prev) => new Set([...prev, imageId]))
                        observerRef.current?.unobserve(entry.target)
                    }
                })
            },
            {
                rootMargin: '200px', // Load much earlier
                threshold: 0.01,
            }
        )

        return () => {
            observerRef.current?.disconnect()
        }
    }, [])

    return (
        <div className="gallery-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {images.length === 0 ? (
                <div style={{ gridColumn: '1/-1', padding: '100px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '1.5rem', opacity: 0.3 }}>Your flower garden is empty.<br />Upload your first bloom!</p>
                </div>
            ) : (
                images.map((image, index) => (
                    <ImageCard
                        key={image.url || image.src || index}
                        image={image}
                        index={index}
                        observerRef={observerRef}
                        isLoaded={loadedImages.has(String(index))}
                    />
                ))
            )}
        </div>
    )
}

function ImageCard({ image, index, observerRef, isLoaded }) {
    const cardRef = useRef(null)
    const imageSrc = typeof image === 'string' ? `/uploads/${image}` : (image.src || image.url)

    useEffect(() => {
        const currentCard = cardRef.current
        if (currentCard && observerRef.current && !isLoaded) {
            observerRef.current.observe(currentCard)
        }
        return () => {
            if (currentCard && observerRef.current) {
                observerRef.current.unobserve(currentCard)
            }
        }
    }, [observerRef, isLoaded])

    return (
        <div
            ref={cardRef}
            data-image-id={index}
            className="group relative flower-card rounded-lg overflow-hidden"
            style={{
                aspectRatio: '4/5',
                minHeight: '400px',
                background: 'rgba(255,255,255,0.02)'
            }}
        >
            {isLoaded ? (
                <>
                    <OptimizedImage
                        src={imageSrc}
                        alt="Flower"
                        fill={true}
                        priority={index < 2} // Load first two immediately
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay - Always visible on mobile, hover on desktop */}
                    <div className="absolute inset-0 bg-black-60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="w-full flex justify-between items-center">
                            <div style={{ maxWidth: '70%' }}>
                                <h3 className="text-sm font-medium text-white truncate" title={image.title || 'Flower'}>
                                    {image.title ? image.title.split('/').pop() : 'Stunning Bloom'}
                                </h3>
                            </div>

                            <a
                                href={image.downloadUrl || imageSrc}
                                download
                                className="bg-white/20 hover:bg-white/40 backdrop-blur-xl p-3 rounded-full transition-all"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full h-full shimmer-effect" />
            )}
        </div>
    )
}
