## [type-challenges] Trim

### 풀이

```
/* _____________ Your Code Here _____________ */


type CanTrim = ' ' | "\n" | "\t"

type Trim<S extends string> = S extends `${CanTrim}${infer T}` | `${infer T}${CanTrim}` ? Trim<T> : S
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Trim)
