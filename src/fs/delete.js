import { unlink } from 'node:fs/promises';
import path from 'path';

const __dirname = path.resolve();

const remove = async () => {
    const filePath = path.join(__dirname, 'src', 'fs', 'files', 'fileToRemove.txt');
    try {
        await unlink(filePath);
    }
    catch {
       throw new Error('FS operation failed');
    }
};

await remove();