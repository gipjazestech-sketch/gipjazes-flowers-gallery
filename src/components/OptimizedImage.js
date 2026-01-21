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
    quality = 45, // Further lowered for extreme speed
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
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
                sizes={sizes} // Use the passed prop which is now optimized for 1-column
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false)
                    setHasError(true)
                }}
                className={`
                    duration-300 ease-out object-cover transition-all
                    ${isLoading ? 'scale-105 blur-lg opacity-0' : 'scale-100 blur-0 opacity-100'}
                `}
                style={{
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    objectFit: 'cover'
                }}
            />
            {isLoading && (
                <div className="absolute inset-0 shimmer-effect" style={{ zIndex: 1, backgroundColor: 'rgba(255,255,255,0.03)' }} />
            )}
        </div>
    )
}
