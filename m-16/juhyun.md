## [type-challenges] POP

### 풀이

```
/* _____________ Your Code Here _____________ */

type Pop<T extends any[]> = T extends [ ...infer P, any] ? P : []

type temp = Pop<[3, 2, 1]>
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-POP)
