'use client'

import Image from 'next/image'
import { useState } from 'react'
import './Gallery.css'

// A small, professional grey blur placeholder (base64)
const BLUR_PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8AKp286m6gAAAABJRU5ErkJggg==";

export default function OptimizedImage({
    src,
    alt,
    priority = false,
    className = '',
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality = 60, // Lowered for faster mobile loading
    fill = false,
}) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    if (hasError) {
        return (
            <div className="flex items-center justify-center bg-gray-900 w-full h-full rounded-lg" style={{ background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="text-xs opacity-50" style={{ fontSize: '0.7rem' }}>Image Unavailable</p>
            </div>
        )
    }

    return (
        <div className={`relative w-full h-full bg-black/20 ${className}`} style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
                src={src}
                alt={alt || "Premium wallpaper"}
                fill={fill}
                quality={quality}
                priority={priority}
                sizes={sizes}
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false)
                    setHasError(true)
                }}
                className={`
                    duration-500 ease-out object-cover transition-all
                    ${isLoading ? 'scale-105 blur-lg opacity-80' : 'scale-100 blur-0 opacity-100'}
                `}
                style={{
                    transition: 'transform 0.5s ease-out, filter 0.5s ease-out, opacity 0.5s ease-out',
                    objectFit: 'cover'
                }}
            />
            {isLoading && (
                <div className="absolute inset-0 shimmer-effect" style={{ zIndex: 1, backgroundColor: 'rgba(255,255,255,0.03)' }} />
            )}
        </div>
    )
}
