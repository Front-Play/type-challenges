## [type-challenges] Type Lookup

### 풀이

```
/* _____________ Your Code Here _____________ */

type LookUp<U, T> = U extends {type:T} ? U :never
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Type-Lookup)
