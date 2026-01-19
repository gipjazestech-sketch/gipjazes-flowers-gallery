'use client';

import { useState } from 'react';

export default function UploadPage() {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('');
    const [previews, setPreviews] = useState([]);
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('Rose'); // Default category
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length > 0) {
            setFiles(selectedFiles);
            const newPreviews = selectedFiles.map(f => ({
                url: URL.createObjectURL(f),
                type: f.type.startsWith('video/') ? 'video' : 'image'
            }));
            setPreviews(newPreviews);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (files.length === 0) return;

        setUploading(true);
        setStatus(`Uploading 0/${files.length}...`);

        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('category', category);

            try {
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    headers: {
                        'x-upload-password': password,
                    },
                    body: formData,
                });

                if (res.ok) {
                    successCount++;
                } else {
                    failCount++;
                }
            } catch (err) {
                failCount++;
            }
            setStatus(`Uploading ${i + 1}/${files.length}...`);
        }

        setUploading(false);
        if (failCount === 0) {
            setStatus(`Success! ${successCount} wallpapers uploaded.`);
            setFiles([]);
            setPreviews([]);
            setPassword('');
            document.getElementById('fileInput').value = '';
        } else {
            setStatus(`Done. ${successCount} success, ${failCount} failed.`);
        }
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="glass-panel" style={{ padding: '40px', width: '100%', maxWidth: '600px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Upload Premium Wallpapers
                </h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input
                        type="password"
                        placeholder="Security Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            padding: '12px 15px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            outline: 'none'
                        }}
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        style={{
                            padding: '12px 15px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            outline: 'none',
                            appearance: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <option value="Rose">Rose</option>
                        <option value="Tulip">Tulip</option>
                        <option value="Lily">Lily</option>
                        <option value="Sunflower">Sunflower</option>
                        <option value="Orchid">Orchid</option>
                        <option value="Vibrant">Vibrant</option>
                        <option value="Nature">Nature</option>
                        <option value="Abstract">Abstract</option>
                        <option value="Others">Others</option>
                    </select>

                    <div style={{
                        border: '2px dashed #ffffff33',
                        borderRadius: '12px',
                        padding: '20px',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
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
                            accept="image/*,video/*"
                            multiple
                            onChange={handleFileChange}
                            style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2
                            }}
                        />
                        {previews.length > 0 ? (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                                gap: '10px',
                                width: '100%',
                                maxHeight: '300px',
                                overflowY: 'auto',
                                padding: '10px'
                            }}>
                                {previews.map((preview, i) => (
                                    preview.type === 'video' ? (
                                        <video key={i} src={preview.url} muted style={{ width: '100%', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
                                    ) : (
                                        <img key={i} src={preview.url} alt="Preview" style={{ width: '100%', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
                                    )
                                ))}
                            </div>
                        ) : (
                            <div style={{ pointerEvents: 'none' }}>
                                <p style={{ fontSize: '2rem', marginBottom: '10px' }}>🎬</p>
                                <p style={{ opacity: 0.5 }}>Drag & drop images or videos</p>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn-premium"
                        disabled={uploading || files.length === 0 || !password}
                        style={{
                            justifyContent: 'center',
                            opacity: (uploading || files.length === 0 || !password) ? 0.5 : 1,
                            cursor: (uploading || files.length === 0 || !password) ? 'not-allowed' : 'pointer',
                            background: 'linear-gradient(45deg, #0070f3, #8b5cf6)'
                        }}
                    >
                        {uploading ? 'Uploading...' : `Upload ${files.length} Wallpapers`}
                    </button>

                    {status && <p style={{ textAlign: 'center', marginTop: '10px', color: status.includes('Success') ? '#4ade80' : status.includes('Uploading') ? '#3b82f6' : '#ef4444' }}>{status}</p>}
                </form>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <a href="/" style={{ fontSize: '0.9rem', opacity: 0.5, textDecoration: 'none' }}>← Back to Public Gallery</a>
                </div>
            </div>
        </div>
    );
}
