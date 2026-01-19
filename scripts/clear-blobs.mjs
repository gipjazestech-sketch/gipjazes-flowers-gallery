import { list, del } from '@vercel/blob';
import 'dotenv/config'; // Ensure .env.local is loaded

async function clearBlobs() {
    console.log('Listing blobs...');
    try {
        const { blobs } = await list();
        const galleryBlobs = blobs.filter(blob => blob.pathname.startsWith('gallery/'));

        if (galleryBlobs.length === 0) {
            console.log('No gallery blobs found.');
            return;
        }

        console.log(`Deleting ${galleryBlobs.length} blobs...`);
        for (const blob of galleryBlobs) {
            await del(blob.url);
            console.log(`Deleted: ${blob.pathname}`);
        }
        console.log('All gallery blobs deleted successfully.');
    } catch (err) {
        console.error('Error clearing blobs:', err);
    }
}

clearBlobs();
