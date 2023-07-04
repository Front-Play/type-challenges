```ts
type Join<T extends any[], U extends string | number> = T extends [
  infer F,
  ...infer R
]
  ? R['length'] extends 0
    ? `${F & string}`
    : `${F & string}${U}${Join<R, U>}`
  : never;
```

<!-- 531 -->

```ts
type StringToUnion<T extends string> = T extends `${infer Letter}${infer Rest}`
  ? Letter | StringToUnion<Rest>
  : never;

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
```
