import { unlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToRemove.txt');
const errorMessage = 'FS operation failed';

const remove = async () => {
    try {
        await unlink(filePath);
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw Error(errorMessage);
        }
        throw e;
    } 
};

await remove();
