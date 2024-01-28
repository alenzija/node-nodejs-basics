import { spawn } from 'child_process';
import path from 'path';

const __dirname = path.resolve();

const spawnChildProcess = (args) => {
  const filePath = path.join(__dirname, 'src', 'cp', 'files', 'script.js');
    
  const childProcess = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
    shell: true,
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  childProcess.on('exit', (code, signal) => {
    if (code === null) {
      console.error(`Child process terminated by signal: ${signal}`);
    } else {
      console.log(`Child process exited with code ${code}`);
    }
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
