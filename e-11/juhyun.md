## [type-challenges] Tuple to Object

### 풀이

```
type TupleToObject<T extends readonly (string|number)[]> = {[P in T[number]]: P}
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Tuple-to-Object)
