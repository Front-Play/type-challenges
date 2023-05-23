## [type-challenges] Awaited

### 풀이

```
// 방법 1
type MyAwaited<T> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P :
T extends { then: (onfulfilled: (arg: infer K) => any) => any } ? K : error

// 방법 2
type MyAwaited2<T extends {then:unknown}> = Awaited<Promise<T>>


```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Awaited)
