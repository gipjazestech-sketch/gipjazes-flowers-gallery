'use client';

import { useState } from 'react';

export default function LiveWallpaper({ src, className = '', priority = false }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative w-full h-full bg-[#0a0a0a] ${className}`} style={{ overflow: 'hidden', position: 'relative' }}>
            <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload={priority ? "auto" : "metadata"}
                onLoadedData={() => setIsLoading(false)}
                className={`
                    w-full h-full object-cover transition-all duration-400
                    ${isLoading ? 'opacity-0 scale-105 blur-lg' : 'opacity-100 scale-100 blur-0'}
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
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
                    <div className="shimmer-effect w-full h-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
                    <div className="absolute flex flex-col items-center gap-2">
                        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                </div>
            )}
        </div>
    );
}
