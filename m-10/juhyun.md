## [type-challenges] Tuple to Union

### 풀이

```
/* _____________ Your Code Here _____________ */

type TupleToUnion<T extends (number|string|boolean)[] > = T[number]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Tuple-to-Union)
