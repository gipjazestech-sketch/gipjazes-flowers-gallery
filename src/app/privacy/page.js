import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', color: '#ccc', lineHeight: '1.8' }}>
            <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                    Privacy Policy
                </h1>
                <p style={{ opacity: 0.6 }}>Effective Date: January 2026</p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <section>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>1. Introduction</h2>
                    <p>
                        Welcome to Gipjazes Wallpapers. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@gipjazes.com.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>2. Information We Collect</h2>
                    <p>
                        We do not require users to register or provide personal information to browse our gallery. However, we may collect certain information automatically when you visit, use, or navigate the site. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, and language preferences.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>3. Google AdSense & Cookies</h2>
                    <p>
                        We use Google AdSense to serve advertisements on our website. To do this, Google and third-party vendors use cookies to serve ads based on a user&apos;s prior visits to our website or other websites.
                    </p>
                    <p style={{ marginTop: '15px' }}>
                        Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" style={{ color: '#3b82f6' }}>Ads Settings</a>.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>4. Data Security</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. For example, our entire site is served over HTTPS (SSL encryption) to protect data integrity and user privacy.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>5. User Rights (GDPR/CCPA)</h2>
                    <p>
                        Depending on your location, you may have certain rights regarding your data, including the right to access, correct, or delete any information we may have collected automatically. We respect the privacy of all our global users and follow industry-standard practices for data minimization.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>6. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at **support@gipjazes.com** or contact us through the Owner Portal integration.
                    </p>
                </section>
            </div>

            <footer style={{ marginTop: '80px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Return to Wallpaper Gallery
                </Link>
            </footer>
        </div>
    );
}
