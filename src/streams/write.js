import { createWriteStream } from 'fs';
import path from 'path';

const __dirname = path.resolve();

const write = () => {
    const filePath = path.join(__dirname, 'src', 'streams', 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);

    process.stdout.write('Enter your text\n');
    process.stdin.on('data', data => {
        writeStream.write(data);
    });
   
};

write();