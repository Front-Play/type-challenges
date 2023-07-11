type Front<T> = T extends '+' | '-' ? T : never;
type Back<T> =  T extends `${infer P}%` ? [P, '%'] : [T, ''];

type PercentageParser<A extends string> = A extends `${Front<infer L>}${infer R}` ? 
                                          [L, ...Back<R>] : ['', ...Back<A>];
