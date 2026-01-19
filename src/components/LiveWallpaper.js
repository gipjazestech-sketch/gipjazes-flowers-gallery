'use client';

import { useState } from 'react';

export default function LiveWallpaper({ src, className = '', priority = false }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative w-full h-full bg-black/20 ${className}`} style={{ overflow: 'hidden', position: 'relative' }}>
            <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setIsLoading(false)}
                className={`
                    w-full h-full object-cover transition-opacity duration-500
                    ${isLoading ? 'opacity-0' : 'opacity-100'}
                `}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />

            {isLoading && (
                <div className="absolute inset-0 shimmer-effect" style={{ zIndex: 1, backgroundColor: 'rgba(255,255,255,0.03)' }} />
            )}
        </div>
    );
}
