'use client';

import Link from 'next/link';

export default function WebDevGuide() {
    return (
        <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', color: '#fff', lineHeight: '1.8', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontSize: '0.9rem', fontWeight: '600' }}>
                ← Back to Gallery
            </Link>

            <header style={{ marginBottom: '80px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '4.5rem', marginBottom: '24px', background: 'linear-gradient(to right, #60a5fa, #d946ef, #fb7185)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', letterSpacing: '-0.02em' }}>
                    The 2026 Web Developer Roadmap
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
                    A comprehensive, high-octane guide to mastering the modern web. From your first line of HTML to architecting world-class applications.
                </p>
            </header>

            {/* Section 1: Mindset */}
            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#60a5fa', fontWeight: '800' }}>01. The Builder&apos;s Mindset</h2>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                        Before touching code, you must understand one thing: **Web development is about solving problems, not just writing syntax.**
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        The industry moves fast. Frameworks die, but fundamental principles remain. To succeed, you must become an &quot;Infinite Learner.&quot; Don&apos;t wait until you &quot;know everything&quot; to build. Build to learn. If you want to build a gallery like this one, start by trying to display one single image. Then two. Then add a button.
                    </p>
                    <blockquote style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '20px', fontStyle: 'italic', opacity: 0.9, fontSize: '1.1rem', margin: '30px 0' }}>
                        "Programming is not about what you know; it's about what you can figure out."
                    </blockquote>
                </div>
            </section>

            {/* NEW: The 4-Week Intensive Plan */}
            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#10b981', fontWeight: '800' }}>02. The 4-Week "Ship Fast" Plan</h2>
                <div style={{ display: 'grid', gap: '20px' }}>
                    {[
                        {
                            week: 'Week 1: The Visual Layer',
                            content: 'Focus exclusively on HTML and CSS. Stop using frameworks. Build 5 different landing pages using only Flexbox and Grid. Learn about CSS variables and responsive design. Goal: Make a site look beautiful on any screen.',
                            color: '#3b82f6'
                        },
                        {
                            week: 'Week 2: The Logic Engine',
                            content: 'Dive deep into JavaScript ES6. Understand Arrays, Objects, and the DOM. Master the "fetch" API to bring in real data. Build a weather app or a simple movie search engine using a public API. Goal: Make your site interactive.',
                            color: '#d946ef'
                        },
                        {
                            week: 'Week 3: The Productivity Layer',
                            content: 'Learn React and Next.js. Component architecture is your superpowers. Learn "useState" and "useEffect". Move your Week 2 logic into React components. Goal: Build a multi-page app with professional state management.',
                            color: '#fb7185'
                        },
                        {
                            week: 'Week 4: The Production Ready Layer',
                            content: 'Deployment and Database. Push your code to GitHub. Connect it to Vercel. Learn how to store user data using PostgreSQL or Supabase. Goal: A fully functional, live application that users can actually use.',
                            color: '#f59e0b'
                        }
                    ].map((item, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '24px', border: `1px solid ${item.color}33`, display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: '900', color: item.color, background: `${item.color}11`, padding: '10px 20px', borderRadius: '15px', whiteSpace: 'nowrap' }}>W{i + 1}</div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#fff' }}>{item.week}</h3>
                                <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: The Core Trinity (Refined) */}
            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#d946ef', fontWeight: '800' }}>03. Deep Dive into Tools</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#60a5fa', marginBottom: '15px' }}>Tailwind CSS</h3>
                        <p style={{ opacity: 0.7, fontSize: '0.95rem', marginBottom: '15px' }}>
                            Utility-first CSS is the fastest way to build modern UIs. Stop writing thousands of lines of CSS files. Learn how to style everything directly in your HTML.
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#3b82f6' }}>Tip: Use the Tailwind extension for VS Code to speed up your workflow.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#d946ef', marginBottom: '15px' }}>TypeScript</h3>
                        <p style={{ opacity: 0.7, fontSize: '0.95rem', marginBottom: '15px' }}>
                            JavaScript with types. It prevents 90% of the bugs you would otherwise find in production. It makes your code self-documenting and easier to scale.
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#d946ef' }}>Tip: Start by renaming your .js files to .ts and follow the errors.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#fb7185', marginBottom: '15px' }}>AI-Assisted Dev</h3>
                        <p style={{ opacity: 0.7, fontSize: '0.95rem', marginBottom: '15px' }}>
                            Use tools like GitHub Copilot or Cursor. They aren&apos;t just for writing code; they are for explaining it. Ask AI &quot;How does this function work?&quot; to learn faster.
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#fb7185' }}>Tip: Use AI to generate boilerplate, but always review the logic.</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Professional Frameworks */}
            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fb7185', fontWeight: '800' }}>04. The Next.js Advantage</h2>
                <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Architecting for 2026</h3>
                    <p style={{ marginBottom: '25px', opacity: 0.8 }}>
                        The web has shifted toward &quot;Server Components.&quot; This means your site can load faster because the server does the heavy lifting before the user even sees the page.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <div style={{ borderLeft: '2px solid #3b82f6', paddingLeft: '20px' }}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Zero-Bundle CSS</h4>
                            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Using Tailwind with Next.js ensures your CSS doesn&apos;t slow down your site as it grows.</p>
                        </div>
                        <div style={{ borderLeft: '2px solid #d946ef', paddingLeft: '20px' }}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Image Optimization</h4>
                            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Next.js automatically resizes and converts images to WebP for you. Never serve a 5MB image again.</p>
                        </div>
                        <div style={{ borderLeft: '2px solid #fb7185', paddingLeft: '20px' }}>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Static Regeneration</h4>
                            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Your content can stay fresh without a full rebuild every time you update your database.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: The Career Path */}
            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#f59e0b', fontWeight: '800' }}>05. Transcending Junior Level</h2>
                <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
                    <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>To become a world-class developer, you must care about the details that others ignore:</p>
                    <ul style={{ lineHeight: '2.2', paddingLeft: '20px', opacity: 0.9 }}>
                        <li><strong>Performance:</strong> Achieving a 100/100 Lighthouse score.</li>
                        <li><strong>Design Sytems:</strong> Building reusable components, not just one-off pages.</li>
                        <li><strong>Scalability:</strong> Writing code that a team of 10 people can understand.</li>
                        <li><strong>Web Vitals:</strong> Understanding LCP, FID, and CLS to ensure a smooth user experience.</li>
                    </ul>
                </div>
            </section>

            {/* Section 6: Curated Resources */}
            <section style={{ marginBottom: '80px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#fff', fontWeight: '800' }}>Developer Toolbelt</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <a href="https://developer.mozilla.org" target="_blank" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', textDecoration: 'none', color: '#fff', textAlign: 'center' }} className="hover-scale">MDN - The Bible</a>
                    <a href="https://nextjs.org/learn" target="_blank" style={{ padding: '20px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px', textDecoration: 'none', color: '#3b82f6', textAlign: 'center' }} className="hover-scale">Next.js Learn</a>
                    <a href="https://tailwindcss.com/docs" target="_blank" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', textDecoration: 'none', color: '#fff', textAlign: 'center' }} className="hover-scale">Tailwind Docs</a>
                    <a href="https://exercism.org" target="_blank" style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', textDecoration: 'none', color: '#fff', textAlign: 'center' }} className="hover-scale">Exercism (Practice)</a>
                </div>
            </section>

            <footer style={{ textAlign: 'center', marginTop: '100px', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>The Journey Begins Now.</h3>
                <p style={{ opacity: 0.6, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Stop reading and start building. Your first project is just one `npx create-next-app` away.</p>
                <Link href="/" style={{ padding: '18px 50px', background: 'linear-gradient(45deg, #3b82f6, #d946ef)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }} className="hover-scale">
                    Back to Gallery
                </Link>
            </footer>
        </div>
    );
}
