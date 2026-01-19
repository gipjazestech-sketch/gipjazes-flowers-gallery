import { list, del } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const password = req.headers.get('x-upload-password');
        if (password !== '0916sam') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // List all blobs
        const { blobs } = await list();

        if (blobs.length === 0) {
            return NextResponse.json({ message: 'No blobs found to delete.' });
        }

        // Delete each blob
        const urls = blobs.map(blob => blob.url);
        await del(urls);

        return NextResponse.json({
            success: true,
            message: `Successfully cleared ${blobs.length} images. Gallery is now fresh.`
        });
    } catch (e) {
        console.error('Cleanup error:', e);
        return NextResponse.json({
            error: 'Cleanup failed',
            details: e.message
        }, { status: 500 });
    }
}
