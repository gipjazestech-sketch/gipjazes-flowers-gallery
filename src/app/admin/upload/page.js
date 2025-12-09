'use client';

import { useState } from 'react';

export default function UploadPage() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const f = e.target.files[0];
        if (f) {
            setFile(f);
            setPreview(URL.createObjectURL(f));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        setStatus('Uploading...');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setStatus('Success! Flower planted.');
                setFile(null);
                setPreview(null);
                // Reset file input
                document.getElementById('fileInput').value = '';
            } else {
                setStatus('Failed to upload.');
            }
        } catch (err) {
            setStatus('Error uploading.');
        }
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="glass-panel" style={{ padding: '40px', width: '100%', maxWidth: '500px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', background: 'linear-gradient(to right, #d946ef, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Plant a Flower
                </h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div style={{
                        border: '2px dashed #ffffff33',
                        borderRadius: '12px',
                        padding: '20px',
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        position: 'relative',
                        background: 'rgba(255,255,255,0.02)',
                        transition: 'border-color 0.3s'
                    }}
                        onDragOver={e => e.currentTarget.style.borderColor = '#d946ef'}
                        onDragLeave={e => e.currentTarget.style.borderColor = '#ffffff33'}
                    >
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer'
                            }}
                        />
                        {preview ? (
                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '250px', borderRadius: '8px', objectFit: 'contain' }} />
                            </div>
                        ) : (
                            <div style={{ pointerEvents: 'none' }}>
                                <p style={{ fontSize: '2rem', marginBottom: '10px' }}>🌸</p>
                                <p style={{ opacity: 0.5 }}>Drag & drop or click to select</p>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn-premium"
                        style={{ justifyContent: 'center', opacity: file ? 1 : 0.5, pointerEvents: file ? 'all' : 'none' }}
                    >
                        Upload to Gallery
                    </button>

                    {status && <p style={{ textAlign: 'center', marginTop: '10px', color: status.includes('Success') ? '#4ade80' : '#ef4444' }}>{status}</p>}
                </form>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <a href="/" style={{ fontSize: '0.9rem', opacity: 0.5, textDecoration: 'none' }}>← Back to Public Gallery</a>
                </div>
            </div>
        </div>
    );
}
