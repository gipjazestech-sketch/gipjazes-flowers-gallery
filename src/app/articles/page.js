import Link from 'next/link';

export default function ArticlesPage() {
    const articles = [
        {
            title: "Understanding Wallpaper Resolutions",
            summary: "A comprehensive guide to 4K, HD, and beyond. Learn how math defines digital quality.",
            link: "/articles/resolution-guide",
            date: "Jan 2026",
            tag: "Guide"
        },
        {
            title: "The Psychology of Colors in Digital Spaces",
            summary: "Coming Soon: How your wallpaper choice affects your focus and mood.",
            link: "#",
            date: "Feb 2026",
            tag: "Opinion"
        },
        {
            title: "Mobile Optimization: iPhone vs Android",
            summary: "Coming Soon: How we tailor our collection for every screen size.",
            link: "#",
            date: "Feb 2026",
            tag: "Technical"
        }
    ];

    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '4rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                    Digital Insights
                </h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>
                    Expert articles on digital art, technology, and design.
                </p>
            </header>

            <div style={{ display: 'grid', gap: '40px' }}>
                {articles.map((article, i) => (
                    <div key={i} style={{
                        background: 'rgba(255,255,255,0.02)',
                        padding: '40px',
                        borderRadius: '30px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'transform 0.3s ease'
                    }} className="hover-scale">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <span style={{ fontSize: '0.8rem', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>{article.tag}</span>
                            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{article.date}</span>
                        </div>
                        <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '15px' }}>{article.title}</h2>
                        <p style={{ lineHeight: '1.7', opacity: 0.7, marginBottom: '25px' }}>{article.summary}</p>
                        {article.link !== "#" ? (
                            <Link href={article.link} style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>Read Full Article →</Link>
                        ) : (
                            <span style={{ opacity: 0.3 }}>Coming Soon...</span>
                        )}
                    </div>
                ))}
            </div>

            <footer style={{ marginTop: '80px', textAlign: 'center' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Back to the Collection
                </Link>
            </footer>
        </div>
    );
}
