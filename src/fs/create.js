import { access, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';


const create = async () => {
    try {
        await access(filePath);
        throw Error(errorMessage);        
    } catch(e) {
        if(e.code === 'ENOENT') {
            await writeFile(filePath, content); 
        } else {
            throw e;
        }
    }
};

await create();