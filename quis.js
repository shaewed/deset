function memoize(method) {
    let cache = {};
    return function(...args) {
        let key = args.join(',');
        if (cache[key]) {
            return cache[key];
        } else {
            let result = method(...args);
            cache[key] = result;
            return result;
        }
    }
}
