## [type-challenges] Replace

### 풀이

```
/* _____________ Your Code Here _____________ */

type Replace<S extends string, From extends string, To extends string> = From extends "" ? S : S extends `${infer A}${From}${infer B}` ? `${A}${To}${B}`: S
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Replace)
