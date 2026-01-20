'use client';

import Link from 'next/link';

export default function UIUXGuide() {
    return (
        <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', color: '#fff', lineHeight: '1.8', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <Link href="/articles" style={{ color: '#3b82f6', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontSize: '0.9rem', fontWeight: '600' }}>
                ← Back to Insights
            </Link>

            <header style={{ marginBottom: '80px' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.8rem', textTransform: 'uppercase' }}>Technical deep-dive</span>
                <h1 style={{ fontSize: '4rem', marginBottom: '24px', background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', letterSpacing: '-0.02em' }}>
                    Mastering Modern UI/UX & Interactions
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '800px' }}>
                    Why the best sites feel "alive." A guide to motion design, glassmorphism, and the psychology of the interface.
                </p>
            </header>

            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff', fontWeight: '800' }}>01. The Theory of Motion</h2>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ marginBottom: '20px' }}>
                        In 2026, a static website is a dead website. But "motion" doesn't mean "everything should spin." High-end motion design is about **Context and Continuity**.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
                        <div style={{ padding: '20px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '20px' }}>
                            <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>Eased Transitions</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Never use "linear" animations. Use "cubic-bezier" to mimic the acceleration and deceleration of real-world objects.</p>
                        </div>
                        <div style={{ padding: '20px', background: 'rgba(217, 70, 239, 0.05)', borderRadius: '20px' }}>
                            <h4 style={{ color: '#d946ef', marginBottom: '10px' }}>Micro-Interactions</h4>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>A button that slightly scales when hovered, or a layout that shifts subtly as you scroll, builds trust with the user.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff', fontWeight: '800' }}>02. The Glassmorphism Era</h2>
                <p style={{ marginBottom: '30px', fontSize: '1.1rem', opacity: 0.8 }}>
                    Look at this website's design. Notice the semi-transparent cards with blurred backgrounds. This is **Glassmorphism**. It creates a sense of depth and hierarchy without needing heavy shadows or borders.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
                    <h3 style={{ marginBottom: '20px' }}>Visual Hierarchy 101</h3>
                    <ul style={{ paddingLeft: '20px', display: 'grid', gap: '15px' }}>
                        <li><strong>Brightness = Importance:</strong> Important items should be slightly brighter or have higher contrast.</li>
                        <li><strong>Depth = Focus:</strong> Use `z-index` and `backdrop-filter` to bring attention to modals or floating menus.</li>
                        <li><strong>Color Harmonies:</strong> Limit your palette. Use one primary color (blue) and one accent color (pink) to avoid visual fatigue.</li>
                    </ul>
                </div>
            </section>

            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff', fontWeight: '800' }}>03. Performance As Design</h2>
                <p style={{ marginBottom: '20px' }}>
                    You cannot have a great UX if the user is waiting. **Speed is the most important design feature.**
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    <div style={{ padding: '30px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Skeletons vs Spinners</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Spinners make users feel they are waiting. Skeleton screens (shimmering boxes) make them feel the content is arriving.</p>
                    </div>
                    <div style={{ padding: '30px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px' }}>
                        <h4 style={{ marginBottom: '10px' }}>Perceived Performance</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Start showing the images while they are still loading using blur-up techniques. A blurry image is better than a black box.</p>
                    </div>
                </div>
            </section>

            <footer style={{ textAlign: 'center', marginTop: '100px', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to create something stunning?</h3>
                <p style={{ opacity: 0.6, marginBottom: '40px' }}>The difference between a "good" site and a "premium" site is in the last 10% of polish.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Link href="/articles/how-to-become-a-web-developer" style={{ padding: '15px 30px', border: '1px solid #3b82f6', color: '#3b82f6', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
                        Return to Roadmap
                    </Link>
                    <Link href="/" style={{ padding: '15px 30px', background: '#fff', color: '#000', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
                        Back to Gallery
                    </Link>
                </div>
            </footer>
        </div>
    );
}
