'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function OptimizedImage({
    src,
    alt,
    priority = false,
    className = '',
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality = 75,
    fill = false,
    onLoadComplete = () => { },
}) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const handleLoad = (result) => {
        setIsLoading(false)
        onLoadComplete(result)
    }

    if (hasError) {
        return (
            <div className="flex items-center justify-center bg-gray-900 w-full h-full rounded-lg">
                <p className="text-sm opacity-50">Image Wilted</p>
            </div>
        )
    }

    return (
        <div className={`relative overflow-hidden w-full h-full rounded-lg ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 shimmer-effect" style={{ zIndex: 1 }} />
            )}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                quality={quality}
                priority={priority}
                sizes={sizes}
                loading={priority ? 'eager' : 'lazy'}
                onLoad={handleLoad}
                onError={() => setHasError(true)}
                className={`
                    duration-700 ease-in-out
                    ${isLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0'}
                `}
                style={{
                    objectFit: 'cover',
                }}
            />
        </div>
    )
}
