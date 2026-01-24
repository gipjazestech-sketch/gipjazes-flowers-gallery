import Link from 'next/link';

export const metadata = {
    title: 'Complete Full Stack Coding & Python Guide | Gipjazes Academy',
    description: 'The ultimate free resource for mastering HTML5, CSS3, JavaScript, and Python. From zero to professional engineer.',
    keywords: ['HTML Tutorial', 'CSS3 Guide', 'JavaScript Mastery', 'Python for Beginners', 'Full Stack Development']
};

export default function CodingGuide() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', lineHeight: '1.8', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Link href="/articles" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>← Back to Academy</Link>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #4ade80, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900' }}>
                    The Ultimate Coding Bible
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
                    Mastering HTML, CSS, JavaScript, and Python: The Four Pillars of Modern Tech.
                </p>
            </header>

            <article className="prose prose-invert max-w-none">
                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Part 1: HTML5 - The Skeleton</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                        HyperText Markup Language (HTML) is the absolute foundation of the web. It is not a programming language but a markup language that defines the structure of your content.
                    </p>

                    <h3 style={{ color: '#4ade80', fontSize: '1.8rem', marginTop: '30px' }}>1.1 Semantic Structure</h3>
                    <p>In 2026, semantic HTML is non-negotiable. It aids accessibility (screen readers) and SEO.</p>
                    <pre style={{ background: '#111', padding: '20px', borderRadius: '10px', overflowX: 'auto', border: '1px solid #333' }}>
                        <code style={{ color: '#a5b4fc' }}>
                            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Page</title>
</head>
<body>
    <header>
        <nav>...</nav>
    </header>
    <main>
        <article>
            <h1>Main Topic</h1>
            <p>Content goes here...</p>
        </article>
    </main>
    <footer>...</footer>
</body>
</html>`}
                        </code>
                    </pre>
                    <p style={{ marginTop: '20px' }}><strong>Key tags to master:</strong> <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;figure&gt;</code>.</p>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Part 2: CSS3 - The Beauty</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                        Cascading Style Sheets (CSS) bring your skeleton to life. Modern CSS allows for complex animations, responsive grids, and stunning visual effects without a single line of JavaScript.
                    </p>

                    <h3 style={{ color: '#4ade80', fontSize: '1.8rem', marginTop: '30px' }}>2.1 Flexbox & Grid</h3>
                    <p>Forget floats. Layouts today are built with Flexbox (1D) and Grid (2D).</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div style={{ background: '#222', padding: '20px', borderRadius: '10px' }}>
                            <h4 style={{ color: '#fff' }}>Flexbox Center</h4>
                            <pre style={{ color: '#e879f9', fontSize: '0.9rem' }}>
                                {`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
                            </pre>
                        </div>
                        <div style={{ background: '#222', padding: '20px', borderRadius: '10px' }}>
                            <h4 style={{ color: '#fff' }}>Grid Layout</h4>
                            <pre style={{ color: '#e879f9', fontSize: '0.9rem' }}>
                                {`.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}`}
                            </pre>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Part 3: JavaScript - The Brains</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                        JavaScript is the logic layer. It makes pages interactive. In 2026, we focus on ES6+ syntax (Modern JS).
                    </p>

                    <h3 style={{ color: '#4ade80', fontSize: '1.8rem', marginTop: '30px' }}>3.1 Async/Await</h3>
                    <p>Handling data fetching is critical.</p>
                    <pre style={{ background: '#111', padding: '20px', borderRadius: '10px', overflowX: 'auto', border: '1px solid #333' }}>
                        <code style={{ color: '#fcd34d' }}>
                            {`async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}`}
                        </code>
                    </pre>

                    <h3 style={{ color: '#4ade80', fontSize: '1.8rem', marginTop: '30px' }}>3.2 The DOM</h3>
                    <p>Understanding the Document Object Model (DOM) is creating the bridge between HTML and JS. While frameworks like React abstract this, knowing <code>document.querySelector</code> and event listeners is vital for a strong foundation.</p>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Part 4: Python - The Powerhouse</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                        Python is the language of AI, Data Science, and Backend capabilities. It is known for its readability and massive ecosystem.
                    </p>

                    <h3 style={{ color: '#4ade80', fontSize: '1.8rem', marginTop: '30px' }}>4.1 Syntax & Philosophy</h3>
                    <p>Python relies on indentation.</p>
                    <pre style={{ background: '#111', padding: '20px', borderRadius: '10px', overflowX: 'auto', border: '1px solid #333' }}>
                        <code style={{ color: '#60a5fa' }}>
                            {`def calculate_future(skill_level):
    if skill_level > 9000:
        return "Master Developer"
    else:
        return "Keep Learning"

print(calculate_future(9001)) # Output: Master Developer`}
                        </code>
                    </pre>

                    <h3 style={{ color: '#4ade80', fontSize: '1.8rem', marginTop: '30px' }}>4.2 Why Learn Python?</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2' }}>
                        <li><strong>Backend Web Dev:</strong> Tools like Django and FastAPI power massive sites.</li>
                        <li><strong>Artificial Intelligence:</strong> PyTorch and TensorFlow run the AI revolution.</li>
                        <li><strong>Automation:</strong> Write scripts to automate boring daily tasks.</li>
                    </ul>
                </section>

                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(59, 130, 246, 0.3)', textAlign: 'center' }}>
                    <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '20px' }}>Ready to Build?</h3>
                    <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
                        The best way to learn is by doing. Start a project today. Build a portfolio. Break things. Fix them.
                    </p>
                    <Link href="/" className="btn-premium" style={{ display: 'inline-block', padding: '15px 40px', fontSize: '1.1rem', textDecoration: 'none' }}>
                        Get Inspired by Our Gallery
                    </Link>
                </div>
            </article>

            <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Homepage
                </Link>
            </footer>
        </div>
    );
}
