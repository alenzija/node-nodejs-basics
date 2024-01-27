import { createReadStream } from 'fs';
import path from 'path';

const __dirname = path.resolve();

const read = () => {
    const filePath = path.join(__dirname, 'src', 'streams', 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (e) => {
        console.error(e.message);
    });
};

read();