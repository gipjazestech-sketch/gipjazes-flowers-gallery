import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        // Safe filename
        const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filePath = path.join(process.cwd(), 'public/uploads', safeName);

        await fs.promises.writeFile(filePath, buffer);

        return NextResponse.json({ success: true, fileName: safeName });
    } catch (e) {
        console.error('Upload error:', e);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
