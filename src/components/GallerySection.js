'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Lock, Filter } from 'lucide-react';
import ImageGallery from './ImageGallery';

export default function GallerySection({ images }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => {
        const cats = new Set(images.map(img => img.category));
        return ['All', ...Array.from(cats).sort()];
    }, [images]);

    const filteredImages = useMemo(() => {
        if (selectedCategory === 'All') return images;
        return images.filter(img => img.category === selectedCategory);
    }, [images, selectedCategory]);

    return (
        <>
            {/* Category Filter Bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '40px',
                flexWrap: 'wrap',
                padding: '0 10px'
            }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{
                            padding: '8px 20px',
                            borderRadius: '30px',
                            border: '1px solid',
                            borderColor: selectedCategory === cat ? '#d946ef' : 'rgba(255,255,255,0.1)',
                            background: selectedCategory === cat ? 'rgba(217, 70, 239, 0.1)' : 'rgba(255,255,255,0.02)',
                            color: selectedCategory === cat ? '#d946ef' : 'rgba(255,255,255,0.5)',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(5px)'
                        }}
                        className="hover-scale"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <ImageGallery images={filteredImages} />

            {/* Floating Owner Portal Button */}
            <Link
                href="/admin/upload"
                style={{
                    position: 'fixed',
                    top: '30px',
                    right: '30px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#0070f3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: 'none',
                    boxShadow: 'none'
                }}
                className="hover-scale"
                title="Owner Portal"
            >
                {/* Simplified: No inner dot as requested */}
            </Link>
        </>
    );
}
