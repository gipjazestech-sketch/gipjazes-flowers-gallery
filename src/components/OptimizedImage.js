'use client'

import Image from 'next/image'
import { useState } from 'react'
import './Gallery.css'

export default function OptimizedImage({
    src,
    alt,
    priority = false,
    className = '',
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality = 75,
    fill = false,
}) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    if (hasError) {
        return (
            <div className="flex items-center justify-center bg-gray-900 w-full h-full rounded-lg">
                <p className="text-xs opacity-50">Image Unavailable</p>
            </div>
        )
    }

    return (
        <div className={`relative w-full h-full bg-black/20 ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 shimmer-effect" style={{ zIndex: 5 }} />
            )}
            <Image
                src={src}
                alt={alt || "Flower image"}
                fill={fill}
                quality={quality}
                priority={priority}
                sizes={sizes}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false)
                    setHasError(true)
                }}
                className={`
                    duration-300 ease-in-out object-cover
                    ${isLoading ? 'scale-105 blur-lg opacity-0' : 'scale-100 blur-0 opacity-100'}
                `}
            />
        </div>
    )
}
