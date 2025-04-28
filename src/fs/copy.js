import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirPath = join(__dirname, 'files');
const dirCopyPath = join(__dirname, 'files_copy');
const errorMessage = 'FS operation failed';

const copy = async () => {
    try {
        const files = await readdir(dirPath);
        if (!files.length) {
            throw Error(errorMessage);
        }
        await mkdir(dirCopyPath, { recursive: false });
        files.forEach(async (file) => {
            const content = await readFile(join(dirPath, file));
            await writeFile(join(dirCopyPath, file), content);
        })
    } catch(e) {
        if (e.code === 'EEXIST' || e.code === 'ENOENT') {
            throw Error(errorMessage);
        }
        throw e;
    }
};

await copy();
