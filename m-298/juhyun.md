## [type-challenges] Length of String

### 풀이

```
/* _____________ Your Code Here _____________ */

type LengthOfString<S extends string,T extends string[]=[]> = S extends `${string}${infer R}` ? LengthOfString<R,[...T,string]>:T['length']
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Length-of-String)
