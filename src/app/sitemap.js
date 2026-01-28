export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.gipjazesflowersgallery.com'

    const currentDate = new Date().toISOString()

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/articles`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Articles
        {
            url: `${baseUrl}/articles/resolution-guide`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/ai-development-guide`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/complete-coding-guide`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/cybersecurity-mastery`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/digital-marketing-2026`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/how-to-become-a-web-developer`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/mastering-modern-ui-ux`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Legal
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}
