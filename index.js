Function.prototype.clone = function(){
    const that = this;
    const tmp = function() {
        return that.apply(this, arguments);
    };
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            tmp[key] = this[key];
        }
    }
    return tmp;
};

console._log = console.log.clone();

console.log = (...args) => {
    args.forEach(arg => {
        if (typeof arg === 'string') {
            debugger;
            console._log(arg);
            return;
        }
        console.dir(arg, {
            // the default value of console.log.depth is undefined, which makes console.dir to trace recursively till the deepest layer 
            depth: console.log.depth,
            colors: true
        });
    });
};