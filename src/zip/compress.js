import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import {
  createReadStream,
  createWriteStream,
} from 'fs';
import path from 'path';
import { promisify } from 'util';

const __dirname = path.resolve();
const pipe = promisify(pipeline);

const compress = async () => {
    const filePath = path.join(__dirname, 'src', 'zip', 'files', 'fileToCompress.txt');
    const fileOutputPath = path.join(__dirname, 'src', 'zip', 'files', 'archive.gz');

    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(fileOutputPath);

    pipe(source, gzip, destination).catch((err) => {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      });
    ;
};

await compress();