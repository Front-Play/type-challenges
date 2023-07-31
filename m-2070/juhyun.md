## [type-challenges] AnyOf

### 풀이

```
//* _____________ Your Code Here _____________ */

type DropChar<S, C, T extends string = ""> = S extends `${infer A}${infer B}`
? A extends C
? DropChar<B,C,T>
: DropChar<B,C,`${T}${A}`>
:T


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Drop-Char)
