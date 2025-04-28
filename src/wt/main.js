import { cpus } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const startValue = 10;

const performCalculations = async () => {
    const cores = new Array(cpus().length).fill(0);
    const workers = cores.map((_, index) => {
        const worker = new Worker(join(__dirname, 'worker.js'), { type: 'module' });
        worker.postMessage(startValue + index);
        return worker;
    });

    const results = workers.map((worker) => {
        return new Promise((resolve, reject) => {
            worker.once('message', (data) => {
                resolve({
                    status: 'resolved',
                    data,
                });
                worker.terminate();
            });

            worker.once('error', () => {
                reject({
                    status: 'rejected',
                    data: null,
                });
                worker.terminate();
            });
        }) 
    });
    const finalResults = await Promise.all(results);
    console.log(finalResults);
};

await performCalculations();
