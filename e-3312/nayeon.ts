type Parameters<T> = T extends (...args: infer K) => any ? K : any;
