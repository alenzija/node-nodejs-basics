import { createWriteStream } from 'node:fs';
import { dirname, join } from 'node:path';
import { stdin } from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const stream = createWriteStream(filePath);

    stdin.pipe(stream);

    stream.on('error', console.error);
};

await write();
