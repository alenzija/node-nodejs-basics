import { Transform } from 'stream'

const transform = async () => {
    const reverseTransformStream = new Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split('').reverse().join('');
            this.push(reversedData);
            callback();
        }
    });

    process.stdout.write('Enter your text\n');

    process.stdin.pipe(reverseTransformStream).on('data', data => {
        process.stdout.write(`Reverse string: ${data}\n`);
    });
   
};

await transform();