import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('error', console.error);

    stream.on('close', () => {
        console.log(hash);
    });

};

await calculateHash();
