## [type-challenges] Append Argument

### 풀이

```
/* _____________ Your Code Here _____________ */

type AppendArgument<Fn, A> = Fn extends (...args: infer R) =>infer T ? (...args:[...R,A])=>T : never
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Append-Argument)
