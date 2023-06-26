## [type-challenges] Trim Left

### 풀이

```
/* _____________ Your Code Here _____________ */

type Space = ' ' |'\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Trim-Left)
