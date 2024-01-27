const parseArgs = () => {
    const argv = process.argv;
    for (let i = 0; i < argv.length; i += 1) {
        if(/^--/.test(argv[i])) {
            console.log(`${argv[i].replace(/^--/,'')} is ${argv[i + 1]}`);
            i += 1;
        }
    }
};

parseArgs();