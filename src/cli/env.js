const parseEnv = () => {
    const rssVariables = Object.entries(process.env).filter(([key,_]) => /^RSS_/.test(key));
    const rssVariablesString = rssVariables.reduce((acc, [key, value]) => `${acc} ${key}=${value}; `, '').replace(/; $/, '');
    console.log(rssVariablesString);
};

parseEnv();