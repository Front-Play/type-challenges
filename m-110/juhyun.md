## [type-challenges] Capitalize

### 풀이

```
/* _____________ Your Code Here _____________ */

type MyCapitalize<S extends string> = S extends `${infer F}${infer E}` ? `${Uppercase<F>}${E}` : S
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Capitalize)
