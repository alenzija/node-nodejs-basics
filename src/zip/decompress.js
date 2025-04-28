import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGunzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToCompress.txt');
const compressedFilePath = join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
        const readStream = createReadStream(compressedFilePath);
        const writeStream = createWriteStream(filePath);
    
        const gunZip = createGunzip();
    
        readStream.pipe(gunZip).pipe(writeStream);
    
        readStream.on('error', console.error);
        writeStream.on('error', console.error);
        gunZip.on('error', console.error);
};

await decompress();
