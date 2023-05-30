## [type-challenges] Parameters

### 풀이

```
type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer A)=> any ? A : A

```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Unshift-1)
