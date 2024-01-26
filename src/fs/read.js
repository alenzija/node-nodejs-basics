import { readFile } from 'node:fs/promises';
import path from 'path';

const __dirname = path.resolve();

const read = async () => {
    const filePath = path.join(__dirname, 'src', 'fs', 'files', 'fileToRead.txt');
    try {
        const data = await readFile(filePath, 'utf-8');
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();