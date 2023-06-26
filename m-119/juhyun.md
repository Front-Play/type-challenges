## [type-challenges] ReplaceAll

### 풀이

```
/* _____________ Your Code Here _____________ */

type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends ""
  ? S
  :
  S extends `${infer A}${From}${infer E}`
  ? `${A}${To}${ReplaceAll<E,From,To>}`
  : S
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-ReplaceAll)
