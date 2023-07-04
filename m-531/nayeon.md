type Join<T extends any[], U extends string | number> = T extends [infer F, ...infer R]
? R['length'] extends 0
? `${F & string}`
: `${F & string}${U}${Join<R, U>}`
: never

<!-- 531 -->

type StrintToUnion<T extends string> = T extends `${infer Letter}${infer Rest}`
? Letter | StrintToUnion<Rest>
: never;
