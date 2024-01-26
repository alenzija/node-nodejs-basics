import { readdir } from 'node:fs/promises';
import path from 'path';

const __dirname = path.resolve();

const list = async () => {
    const dirPath = path.join(__dirname, 'src', 'fs', 'files');
    try {
        const files = await readdir(dirPath);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();