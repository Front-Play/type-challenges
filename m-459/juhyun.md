## [type-challenges] Flatten

### 풀이

```
/* _____________ Your Code Here _____________ */

type Flatten<T,S extends any[] =[]> = T extends [any:infer K, ...a: infer P] ? K extends any[] ? Flatten<[...K,...P],S> : Flatten<[...P],[...S,K]> :S
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Flatten)
