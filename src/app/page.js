import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getImages() {
  const uploadsDir = path.join(process.cwd(), 'public/uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
  const files = fs.readdirSync(uploadsDir);
  return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
}

export default async function Home() {
  const images = await getImages();

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px', background: 'linear-gradient(to bottom right, #fff, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Gipjazes Flowers
        </h1>
        <p style={{ opacity: 0.8, fontSize: '1.2rem', fontWeight: 300 }}>
          Exclusive 4D Digital Flora Collection
        </p>
        <Link href="/admin/upload" style={{
          marginTop: '20px', display: 'inline-block', opacity: 0.4, fontSize: '0.9rem', textDecoration: 'none'
        }}>
          Owner Portal
        </Link>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {images.length === 0 ? (
          <div className="glass-panel" style={{ gridColumn: '1/-1', padding: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', opacity: 0.6 }}>No flowers have bloomed yet.</p>
          </div>
        ) : (
          images.map(img => (
            <div key={img} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s' }}>
              <div style={{ height: '350px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={`/uploads/${img}`}
                  alt={img}
                  className="flower-card-img"
                />
              </div>
              <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.3)' }}>
                <span style={{ fontWeight: 500, fontSize: '0.9rem', opacity: 0.9, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }} title={img}>
                  {img}
                </span>
                <a
                  href={`/uploads/${img}`}
                  download
                  className="btn-premium"
                  style={{ padding: '8px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
