import { Worker, isMainThread } from 'worker_threads';
import path from 'path';
import os from 'os';

const __dirname = path.resolve();

const performCalculations = () => {
    const filePath = path.join(__dirname, 'src', 'wt', 'worker.js');
    
    if (isMainThread) {
        const numCores = os.cpus().length;
    
        for (let i = 0; i < numCores; i++) {
          const worker = new Worker(filePath, { workerData: i + 1 });
    
          worker.on('message', (message) => {
            console.log(`Worker ${worker.threadId} finished with message status: ${message.status} & message data ${message.data}`);
          });
    
          worker.on('error', (error) => {
            console.log(`Worker ${worker.threadId} encountered an error: ${error}`);
          });
    
          worker.on('exit', (code) => {
            if (code !== 0) {
              console.log(`Worker ${worker.threadId} exited with code ${code}`);
            }
          });
    
          worker.postMessage(10 + i);
        }
      }
};

performCalculations();