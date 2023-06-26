type Join<T extends any[], U extends string | number> = T extends [infer F, ...infer R]
? R['length'] extends 0
? `${F & string}`
: `${F & string}${U}${Join<R, U>}`
: never
