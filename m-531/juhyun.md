## [type-challenges] String to Union

### 풀이

```
/* _____________ Your Code Here _____________ */

type StringToUnion<T extends string,P extends any[] = [] > = T extends `${infer A}${infer B}` ? StringToUnion<B,[...P,A]> :P[number]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-String-to-Union)
