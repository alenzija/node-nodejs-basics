import { createUnzip } from 'zlib';
import { promisify } from 'util';
import { pipeline } from 'stream';
import {
    createReadStream,
    createWriteStream,
  } from 'fs';
import path from 'path';

const __dirname = path.resolve();
const pipe = promisify(pipeline);


const decompress = async () => {
    const inputFilePath = path.join(__dirname, 'src', 'zip', 'files', 'archive.gz');
    const input = createReadStream(inputFilePath);
    
    const outputFilePath = path.join(__dirname, 'src', 'zip', 'files', 'fileToCompressV2.txt');
    const output = createWriteStream(outputFilePath);

    const unzip = createUnzip();

    pipe(input, unzip, output).catch((err) => {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      });
    ;
};

await decompress();