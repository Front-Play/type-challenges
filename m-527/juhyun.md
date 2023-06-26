## [type-challenges] Append to object

### 풀이

```
/* _____________ Your Code Here _____________ */

type AppendToObject<T, U extends string | number | symbol, V> = {[P in keyof T | U]:P extends keyof T ? T[P] : V}
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Append-to-object)
