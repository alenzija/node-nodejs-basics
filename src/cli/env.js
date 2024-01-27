const parseEnv = () => {
    const env = process.env;
    Object.entries(env).forEach(([key, value]) => {
        if (/^RSS_/.test(key)) {
            console.log(`${key}=${value}`);
        }
    })
};

parseEnv();