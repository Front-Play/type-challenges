## [type-challenges] Merge

### 풀이

```
/* _____________ Your Code Here _____________ */

type Merge<F, S> = {[P in keyof F | keyof S]: P extends keyof S ? S[P] :P extends keyof F ? F[P]:never}
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Merge)
