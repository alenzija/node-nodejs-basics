import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [filePath, ...args]);

    stdin.pipe(child.stdin);

    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
