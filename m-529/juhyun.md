## [type-challenges] Absolute

### 풀이

```
/* _____________ Your Code Here _____________ */

type Absolute<T extends number | string | bigint> = `${T}` extends `${'-'}${infer P}`? P :`${T}`
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Absolute)
