import Link from 'next/link';

export default function AboutPage() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '4rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                    Gipjazes Wallpapers
                </h1>
                <p style={{ fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.1em', color: '#60a5fa' }}>
                    The Art of Digital Atmosphere
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <section style={{ background: 'rgba(255,255,255,0.02)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '25px' }}>Our Vision</h2>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                        In an era where we spend hours every day looking at our screens, we believe that the backdrop of your digital life should be a source of inspiration, calm, and beauty. Gipjazes Wallpapers was born from a simple mission: to curate and create the world's most stunning digital wallpapers, optimized for the modern high-resolution displays of today and tomorrow.
                    </p>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                        We don't just "host" images; we select pieces that transform your device into a window to another world. From the intricate geometry of a single petal to the sweeping vistas of cosmic nebulas, every asset in our gallery is a testament to the intersection of nature and technology.
                    </p>
                </section>

                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Technical Excellence</h2>
                        <p style={{ lineHeight: '1.8' }}>
                            Every wallpaper is processed through our proprietary optimization pipeline. We ensure that every pixel is perfect, utilizing <strong>8DX rendering techniques</strong> and AI-enhanced upscaling to provide native 4K and 8K support. Our mobile-first approach ensures that whether you're on a flagship Android or the latest iOS device, the crop and resolution are flawless.
                        </p>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h2 style={{ color: '#fff', marginBottom: '20px' }}>Human Curation</h2>
                        <p style={{ lineHeight: '1.8' }}>
                            While we leverage AI for technical tasks, the final choice is always human. Our team of digital artists and curators reviews every submission for composition, color balance, and emotive impact. This "Human-in-the-loop" philosophy is what sets Gipjazes apart from generic, automated wallpaper sites.
                        </p>
                    </div>
                </section>

                <section style={{ textAlign: 'center', padding: '60px 40px', background: 'rgba(255,255,255,0.02)', borderRadius: '30px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '30px' }}>Global Community</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.8' }}>
                        Gipjazes is a global project, serving millions of downloads to enthusiasts in over 150 countries. We are proud to be the trusted source for personal backgrounds for developers, gamers, photographers, and professionals worldwide.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '5px' }}>12K+</h4>
                            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>Wallpapers</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '5px' }}>1M+</h4>
                            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>Users</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '5px' }}>99.9%</h4>
                            <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>Satisfaction</p>
                        </div>
                    </div>
                </section>

                <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px', marginBottom: '40px' }}>
                    <h2 style={{ color: '#fff', marginBottom: '30px', textAlign: 'center' }}>Connect With Us</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ opacity: 0.5, marginBottom: '10px' }}>Email Support</p>
                            <p style={{ color: '#fff' }}>support@gipjazes.com</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ opacity: 0.5, marginBottom: '10px' }}>Business Inquiries</p>
                            <p style={{ color: '#fff' }}>business@gipjazes.com</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ opacity: 0.5, marginBottom: '10px' }}>Location</p>
                            <p style={{ color: '#fff' }}>Digital First / Global Team</p>
                        </div>
                    </div>
                </section>
            </div>

            <footer style={{ marginTop: '80px', textAlign: 'center' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    ← Back to the Collection
                </Link>
            </footer>
        </div>
    );
}
