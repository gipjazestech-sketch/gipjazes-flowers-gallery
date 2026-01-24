'use client';

import Link from 'next/link';

export default function ArticlesPage() {
    const articles = [
        {
            title: "The 2026 Web Developer Roadmap",
            summary: "A high-octane, 4-week intensive guide to mastering Next.js, React, and modern engineering standards.",
            link: "/articles/how-to-become-a-web-developer",
            date: "Jan 2026",
            tag: "Roadmap",
            color: "#60a5fa"
        },
        {
            title: "Mastering Modern UI/UX & Interactions",
            summary: "Motion design, glassmorphism, and the psychology of premium interfaces. Why the best sites feel 'alive'.",
            link: "/articles/mastering-modern-ui-ux",
            date: "Jan 2026",
            tag: "Design",
            color: "#d946ef"
        },
        {
            title: "AI-Powered Development: The New Normal",
            summary: "Leveraging LLMs and AI agents (like Antigravity) to build 10x faster while maintaining expert quality.",
            link: "/articles/ai-development-guide",
            date: "Jan 2026",
            tag: "AI Expert",
            color: "#fb7185"
        },
        {
            title: "The Ultimate Coding: HTML to Python",
            summary: "A massive, zero-to-hero guide covering HTML5, CSS3, JavaScript, and Python. Everything you need to know.",
            link: "/articles/complete-coding-guide",
            date: "Jan 2026",
            tag: "Full Course",
            color: "#4ade80"
        },
        {
            title: "Cybersecurity Mastery: Defense Protocol",
            summary: "Learn how hackers think and how to secure your digital life. MFA, encryption, and secure coding practices.",
            link: "/articles/cybersecurity-mastery",
            date: "Jan 2026",
            tag: "Security",
            color: "#ef4444"
        },
        {
            title: "Understanding Wallpaper Resolutions",
            summary: "A technical guide to 4K, HD, and beyond. Learn how math defines digital quality.",
            link: "/articles/resolution-guide",
            date: "Jan 2026",
            tag: "Technical",
            color: "#3b82f6"
        }
    ];

    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>← Back to Collection</Link>
                <h1 style={{ fontSize: '4.5rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900', letterSpacing: '-0.02em' }}>
                    Digital Insights
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                    Expert articles on digital art, technology, and the future of web design.
                </p>
            </header>

            <div style={{ display: 'grid', gap: '30px' }}>
                {articles.map((article, i) => (
                    <Link key={i} href={article.link} style={{ textDecoration: 'none' }} className="hover-scale">
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            padding: '40px',
                            borderRadius: '32px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                background: article.color || '#3b82f6'
                            }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: article.color || '#3b82f6',
                                    background: `${article.color || '#3b82f6'}11`,
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    fontWeight: '900',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>{article.tag}</span>
                                <span style={{ fontSize: '0.8rem', opacity: 0.4 }}>{article.date}</span>
                            </div>

                            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '15px', fontWeight: '800' }}>{article.title}</h2>
                            <p style={{ lineHeight: '1.7', opacity: 0.6, fontSize: '1.1rem', maxWidth: '750px' }}>{article.summary}</p>

                            <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '8px', color: article.color || '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                Read Article <span style={{ fontSize: '1.2rem' }}>→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <footer style={{ marginTop: '120px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px' }}>
                <p style={{ opacity: 0.4, marginBottom: '20px' }}>© 2026 Gipjazes Academy. All rights reserved.</p>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
                    Explore Wallpapers
                </Link>
            </footer>
        </div>
    );
}
