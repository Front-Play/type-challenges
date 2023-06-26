## [type-challenges] Deep Readonly

### 풀이

```
/* _____________ Your Code Here _____________ */

type DeepReadonly<T> = {readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>}

type temp =  DeepReadonly<X1>
type t2 = DeepReadonly<X2>
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Deep-Readonly)
