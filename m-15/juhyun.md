## [type-challenges] Last of Array

### 풀이

```
/* _____________ Your Code Here _____________ */

type Last<T extends any[]> = [any, ...T][T['length']]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Tuple-to-Object-1)
