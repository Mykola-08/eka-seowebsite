import { put } from "@vercel/blob";

export async function uploadTestBlob(token: string) {
    try {
        const { url } = await put('articles/blob.txt', 'Hello World!', {
            access: 'public',
            token: token
        });
        return { success: true, url };
    } catch (error) {
        console.error('Error uploading blob:', error);
        return { success: false, error: String(error) };
    }
}
