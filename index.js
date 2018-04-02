console.log = (...args) => {
    args.forEach(arg => {
        console.dir(arg, {
            // the default value of console.log.depth is undefined, which makes console dir to trace recursively till the deepest layer 
            depth: console.log.depth,
            colors: true
        });
    });
};

