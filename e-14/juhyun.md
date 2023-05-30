## [type-challenges] First of Array

### 풀이

```
type First<T extends any[]> = T extends [] ? never :T[0]

```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-First-of-Array)
