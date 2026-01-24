import Link from 'next/link';
import { Shield, Lock, AlertTriangle, Eye, Server } from 'lucide-react';

export const metadata = {
    title: 'Cybersecurity Mastery: Defense Against Hackers | Gipjazes Academy',
    description: 'A complete guide to understanding cybersecurity, hackers, and how to protect your digital life in 2026.',
    keywords: ['Cybersecurity', 'Hacking Protection', 'Digital Safety', 'Network Security', 'InfoSec Guide']
};

export default function SecurityGuide() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', lineHeight: '1.8', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Link href="/articles" style={{ color: '#ef4444', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>← Back to Academy</Link>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Shield size={64} color="#ef4444" />
                </div>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #ef4444, #f87171, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900' }}>
                    Cybersecurity Mastery
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
                    How to Think Like a Hacker to Defend Like a Pro.
                </p>
            </header>

            <article className="prose prose-invert max-w-none">
                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Eye /> The Threat Landscape
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                        The internet is a battlefield. In 2026, threats have evolved from simple phishing emails to AI-driven social engineering and quantum decryption attacks. Understanding the enemy is the first step to defense.
                    </p>
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '30px', borderRadius: '20px', borderLeft: '4px solid #ef4444' }}>
                        <h4 style={{ color: '#f87171', margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>Did you know?</h4>
                        <p style={{ marginTop: '10px' }}>
                            A cyber attack occurs every 39 seconds. Most successful breaches are due to human error, not technical failure.
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <AlertTriangle /> Common Attack Vectors
                    </h2>

                    <h3 style={{ color: '#fca5a5', fontSize: '1.8rem', marginTop: '30px' }}>1. Phishing & Social Engineering</h3>
                    <p>Hackers manipulate you into revealing secrets. Never trust urgent requests for money or passwords, even if they appear to come from your boss or family.</p>

                    <h3 style={{ color: '#fca5a5', fontSize: '1.8rem', marginTop: '30px' }}>2. Man-in-the-Middle (MitM)</h3>
                    <p>Using public Wi-Fi at a coffee shop? A hacker could be intercepting everything you send. Always use a VPN on untrusted networks.</p>

                    <h3 style={{ color: '#fca5a5', fontSize: '1.8rem', marginTop: '30px' }}>3. SQL Injection (SQLi)</h3>
                    <p>For web developers: if you don't sanitize user inputs, a hacker can inject code into your database commands, stealing or deleting your entire user base.</p>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Lock /> The Defense Playbook
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                        You don't need to be a coding genius to be secure. Follow these ironclad rules:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '20px' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '10px' }}>Turn on MFA</h4>
                            <p>Multi-Factor Authentication is the single most effective deterrent. Even if they have your password, they can't get in without your phone.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '20px' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '10px' }}>Unique Passwords</h4>
                            <p>Reuse passwords? You're doomed. Use a Password Manager (like Bitwarden or 1Password) to generate 20-character random strings for every site.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '20px' }}>
                            <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '10px' }}>Update Everything</h4>
                            <p>Those annoying system updates? They patch security holes. Install them immediately.</p>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Server /> For Developers: secureCode()
                    </h2>
                    <p>If you are building the next big app, security starts with you.</p>
                    <pre style={{ background: '#111', padding: '20px', borderRadius: '10px', overflowX: 'auto', border: '1px solid #333' }}>
                        <code style={{ color: '#ef4444' }}>
                            {`// BAD: Vulnerable to SQL Injection
const query = "SELECT * FROM users WHERE name = '" + userName + "'";

// GOOD: Parameterized Queries
const query = "SELECT * FROM users WHERE name = ?";
db.execute(query, [userName]);`}
                        </code>
                    </pre>
                    <p style={{ marginTop: '15px' }}>Always assume user input is malicious.</p>
                </section>

                <div style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(251, 191, 36, 0.1))', padding: '50px', borderRadius: '30px', border: '1px solid rgba(239, 68, 68, 0.2)', textAlign: 'center' }}>
                    <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '20px' }}>Stay Vigilant</h3>
                    <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
                        Security is not a destination, it is a journey. stay curious, stay paranoid, stay safe.
                    </p>
                    <Link href="/articles/complete-coding-guide" className="btn-premium" style={{ display: 'inline-block', padding: '15px 40px', fontSize: '1.1rem', textDecoration: 'none', background: '#ef4444' }}>
                        Learn How to Code This →
                    </Link>
                </div>
            </article>

            <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                <Link href="/" style={{ color: '#ef4444', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Homepage
                </Link>
            </footer>
        </div>
    );
}
