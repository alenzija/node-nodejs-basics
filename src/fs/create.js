import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';

const __dirname = path.resolve();

const create = async () => {
    const filePath = path.join(__dirname, 'src', 'fs', 'files', 'fresh.txt');
    try {
        await readFile(filePath);
        throw Error('FS operation failed'); 
    } catch (e) {
        if (e.message === 'FS operation failed') {
            throw Error('FS operation failed');
        }  
        await writeFile(filePath, 'I am fresh and young');
    } 
};

await create();
