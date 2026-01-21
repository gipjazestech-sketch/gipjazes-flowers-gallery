import Link from 'next/link';

export default function FAQPage() {
    const faqs = [
        {
            q: "What resolutions are available for the wallpapers?",
            a: "Most of our wallpapers are provided in Ultra HD 4K (3840x2160) or higher. We also provide mobile-optimized versions that fit standard smartphone aspect ratios (9:16 and 19.5:9)."
        },
        {
            q: "Are these wallpapers free to use?",
            a: "Yes, all wallpapers on Gipjazes are free for personal use on your devices. For commercial use, please contact our business team."
        },
        {
            q: "How do I set the wallpaper on my Android device?",
            a: "Download the image, open it in your Gallery app, tap the &apos;More&apos; or &apos;Three dots&apos; menu, and select &apos;Set as wallpaper&apos;. You can choose between Home screen, Lock screen, or both."
        },
        {
            q: "What does '8DX Rendering' mean?",
            a: "8DX is our proprietary rendering pipeline that combines spatial depth modeling with high-dynamic-range color grading to create images that feel &apos;alive&apos; on modern OLED and Liquid Retina displays."
        },
        {
            q: "Do you have wallpapers for iPhone/iOS?",
            a: "Absolutely. Our mobile collection is designed to work perfectly with iOS depth effects and perspective zoom features."
        }
    ];

    return (
        <div style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', color: '#ccc' }}>
            <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                    Frequently Asked Questions
                </h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>
                    Everything you need to know about Gipjazes Wallpapers
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {faqs.map((faq, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '15px' }}>{faq.q}</h3>
                        <p style={{ lineHeight: '1.7', opacity: 0.8 }}>{faq.a}</p>
                    </div>
                ))}
            </div>

            <section style={{ marginTop: '80px', padding: '40px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '30px', textAlign: 'center' }}>
                <h2 style={{ color: '#fff', marginBottom: '15px' }}>Still have questions?</h2>
                <p style={{ marginBottom: '25px' }}>We&apos;re here to help you get the best digital experience.</p>
                <a href="mailto:support@gipjazes.com" style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    background: '#3b82f6',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '30px',
                    fontWeight: 'bold'
                }}>Contact Support</a>
            </section>

            <footer style={{ marginTop: '80px', textAlign: 'center' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Back to the Collection
                </Link>
            </footer>
        </div>
    );
}
