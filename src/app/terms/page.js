import Link from 'next/link';

export default function TermsPage() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto', color: '#ccc', lineHeight: '1.8' }}>
            <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                    Terms & Licensing
                </h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>
                    Understanding your rights and our policies
                </p>
            </header>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>1. Personal Use License</h2>
                <p>
                    All wallpapers available for download on Gipjazes Wallpapers are provided under a **Personal Use License**. This means you are granted the right to:
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Download and use any image as a background on your personal devices (smartphones, tablets, computers).</li>
                    <li>Display the images on your personal social media profiles provided they are not part of a commercial promotion.</li>
                    <li>Modify the crop or resolution to fit your specific display.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>2. Prohibited Uses</h2>
                <p>
                    You are strictly prohibited from:
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Reselling, redistributing, or sub-licensing the images in their original or modified form.</li>
                    <li>Using our images to create physical merchandise (t-shirts, posters, mugs, etc.) for sale.</li>
                    <li>Using the images in a way that implies endorsement of a brand, product, or political entity without explicit written permission.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>3. Intellectual Property</h2>
                <p>
                    All content on this website, including but not limited to images, logos, and UI design, is the intellectual property of **Gipjazes Studio** or its respective contributors. Unauthorized scraping or mass-downloading of assets via automated scripts is strictly forbidden.
                </p>
            </section>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>4. Disclaimer of Warranty</h2>
                <p>
                    Images are provided "as-is" without warranty of any kind. While we strive for absolute quality, Gipjazes Wallpapers is not responsible for any issues arising from the use of our digital assets.
                </p>
            </section>

            <footer style={{ marginTop: '80px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                <p style={{ marginBottom: '20px', opacity: 0.5 }}>Last Updated: January 2026</p>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Back to the Collection
                </Link>
            </footer>
        </div>
    );
}
