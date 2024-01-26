import { readdir, mkdir } from 'node:fs/promises';
import { writeFile, readFile } from 'node:fs/promises';
import path from 'path';

const __dirname = path.resolve();

const copy = async () => {
    const dir = path.join(__dirname,'src', 'fs', 'files');
    const copyDir = path.join(__dirname,'src', 'fs', 'files_copy');
    try {
        await readdir(copyDir);
        throw Error('FS operation failed');

    } catch (e) {
        if (e.message === 'FS operation failed') {
            throw Error('FS operation failed');
        }
        await mkdir(copyDir, { recursive: true });
        const files = await readdir(dir);
        files.forEach(async (file) => {
            const data = await readFile(path.join(dir,file));
            const newDir = path.join(copyDir, file);
            await writeFile(newDir, data);
        })
    }
};

await copy();
