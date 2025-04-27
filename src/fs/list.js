import { readdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirPath = join(__dirname, 'files');
const errorMessage = 'FS operation failed';


const list = async () => {
    try {
        const files = await readdir(dirPath);
        files.filter(async (file) => {
            const stats = await stat(join(dirPath, file));
            return stats.isFile();
        })
        console.log(files);
    } catch (e) {
        if(e.code === 'ENOENT') {
            throw Error(errorMessage);
        }
        throw e;
    }
};

await list();