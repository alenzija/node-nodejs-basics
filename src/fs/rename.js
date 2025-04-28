import { access, rename as fsRename } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWithWrongName = join(__dirname, 'files', 'wrongFilename.txt');
const fileWithRightName = join(__dirname, 'files', 'properFilename.md');
const errorMessage = 'FS operation failed';

const rename = async () => {
    try {
        await access(fileWithWrongName);
        await fsRename(fileWithWrongName, fileWithRightName);
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw Error(errorMessage);
        }
        throw e;
    }
};

await rename();
