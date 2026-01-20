'use client';

import Link from 'next/link';

export default function AIGuide() {
    return (
        <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', color: '#fff', lineHeight: '1.8', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <Link href="/articles" style={{ color: '#3b82f6', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontSize: '0.9rem', fontWeight: '600' }}>
                ← Back to Insights
            </Link>

            <header style={{ marginBottom: '80px' }}>
                <span style={{ color: '#fb7185', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.8rem', textTransform: 'uppercase' }}>Expert level</span>
                <h1 style={{ fontSize: '4rem', marginBottom: '24px', background: 'linear-gradient(to right, #fb7185, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', letterSpacing: '-0.02em' }}>
                    AI-Powered Development: The New Normal
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '800px' }}>
                    How to leverage LLMs and AI agents (like Antigravity) to build 10x faster while maintaining 10/10 quality.
                </p>
            </header>

            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff', fontWeight: '800' }}>01. The AI Multiplier</h2>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ marginBottom: '20px' }}>
                        In 2026, AI isn't just "writing code" for you. It's acts as a **Senior Architectural Partner**. The best developers use AI to brainstorm complex system designs, debug subtle edge cases, and automate repetitive boilerplate.
                    </p>
                    <p>
                        The key is **Prompt Engineering**. Learning how to describe a problem in a way that an AI agent can solve it perfectly is a core skill for the modern developer.
                    </p>
                </div>
            </section>

            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff', fontWeight: '800' }}>02. Top AI Tools for Devs</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                    <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: '#fb7185', marginBottom: '10px' }}>Cursor / VS Code</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>The IDE is now an AI agent itself. Use `Cmd+K` to edit and `Cmd+L` to chat with your codebase. It understands your context instantly.</p>
                    </div>
                    <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: '#d946ef', marginBottom: '10px' }}>v0.dev / Claude</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Generate entire UI components by just describing them. Copy-paste the code and then tweak the details to fit your brand.</p>
                    </div>
                    <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>Antigravity (Google)</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Advanced agentic coding that can perform complex migrations, performance audits, and full-feature implementations autonomously.</p>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff', fontWeight: '800' }}>03. The Human Responsibility</h2>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>Never ship "Black Box" code.</p>
                    <p style={{ opacity: 0.8 }}>
                        If an AI generates a function for you, you MUST understand how it works. Use the AI to explain it to you if you don't. A developer who doesn't understand their own code is a liability, not an asset.
                    </p>
                    <ul style={{ marginTop: '20px', paddingLeft: '20px', opacity: 0.7 }}>
                        <li>Verify security patterns</li>
                        <li>Check for performance regressions</li>
                        <li>Ensure alignment with existing design systems</li>
                    </ul>
                </div>
            </section>

            <footer style={{ textAlign: 'center', marginTop: '100px', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Upgrade your workflow.</h3>
                <p style={{ opacity: 0.6, marginBottom: '40px' }}>Don't fight the future. Master the tools and build things you never thought possible.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Link href="/" style={{ padding: '15px 40px', background: 'linear-gradient(45deg, #fb7185, #d946ef)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: '900' }}>
                        GALLERY HOME
                    </Link>
                </div>
            </footer>
        </div>
    );
}
