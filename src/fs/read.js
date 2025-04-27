import { access, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToRead.txt');
const errorMessage = 'FS operation failed';

const read = async () => {
    try {
        const content = await readFile(filePath, 'utf-8');
        console.log(content);
    } catch(e) {
        if (e.code === 'ENOENT') {
            throw Error(errorMessage);
        }
        throw e;
    }
};

await read();