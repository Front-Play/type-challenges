## [type-challenges] Readonly

### 풀이

```
/* _____________ Your Code Here _____________ */

type MyReadonly<T> = {readonly [key in keyof T]: T[key]}
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Readonly)
