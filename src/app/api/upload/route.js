import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const password = req.headers.get('x-upload-password');
        if (password !== '0916sam') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const formData = await req.formData();
        const file = formData.get('file');
        const category = formData.get('category') || 'Uncategorized';

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Upload to Vercel Blob with category folder
        const blob = await put(`gallery/${category}/${file.name}`, file, {
            access: 'public',
        });

        return NextResponse.json({ success: true, url: blob.url });
    } catch (e) {
        console.error('Upload error details:', e);
        return NextResponse.json({
            error: 'Upload failed',
            details: e.message
        }, { status: 500 });
    }
}
