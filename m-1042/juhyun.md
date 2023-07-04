## [type-challenges] IsNever

### 풀이

```
/* _____________ Your Code Here _____________ */

/* _____________ Your Code Here _____________ */

type IsNever<T> = [T] extends [never] ? true : false

type t = IsNever<never>
type r = IsNever<never | string>
type p = IsNever<[]>

type Never<T> = T extends never ? '무엇인가 출력' : '다른 무엇인가 출력'

type temp = Never<never>

type RR = never extends never ? 'yes' : 'no' // Resolves to 'yes'


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-IsNever)
