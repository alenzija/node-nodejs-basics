import { rename, readFile } from 'node:fs/promises';
import path from 'path';

const __dirname = path.resolve();

const renameFile = async () => {
    const filePath = path.join(__dirname, 'src', 'fs', 'files', 'wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'src', 'fs', 'files', 'properFilename.md');

    try {
        await readFile(filePath);
        await rename(filePath, newFilePath);
    } catch {
        throw Error('FS operation failed');
    }
};

await renameFile();