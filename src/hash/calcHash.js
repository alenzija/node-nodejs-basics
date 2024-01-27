import crypto from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

const __dirname = path.resolve();

const calculateHash = () => {
    const filePath = path.join(__dirname, 'src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256')
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        hash.update(chunk);
      });
    
      readStream.on('end', () => {
        const hex = hash.digest('hex');
        console.log(hex);
      });
    
      readStream.on('error', (e) => {
        console.error(e.message);
      });
};

 calculateHash();