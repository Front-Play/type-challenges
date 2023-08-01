### 풀이

```
/* _____________ Your Code Here _____________ */

type EndsWith<T extends string, U extends string> =
U extends ""
? true
:T extends U
? true
:T extends `${infer A}${infer B}`
? B extends U
? true
: false
:false

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', ''>, true>>,
  Expect<Equal<EndsWith<'abc', ' '>, false>>,
]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-StartsWith)
