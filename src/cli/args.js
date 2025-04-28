const parseArgs = () => {
    const argv = process.argv.slice(2);

    const argvString = argv.reduce((acc, cur) => `${acc} ${/^--/.test(cur) ? cur.replace(/^--/, '') : `is ${cur}, ` }`, '').replace(/, $/, '');
    console.log(argvString);
};

parseArgs();
