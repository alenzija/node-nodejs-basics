import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToCompress.txt');
const compressedFilePath = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(compressedFilePath);

    const gZip = createGzip();

    readStream.pipe(gZip).pipe(writeStream);

    readStream.on('error', console.error);
    writeStream.on('error', console.error);
    gZip.on('error', console.error);
};

await compress();
