## [type-challenges] AnyOf

### 풀이

```
/* _____________ Your Code Here _____________ */

type False = 0 | '' | false | [] |undefined | null | {[key:string]:never}

type AnyOf<T extends readonly any[]> = T[number] extends False ? false: true

type t = AnyOf<[0, '', false, [], {}, undefined, null]>
type tt = AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>

type temp =  0 extends null ? 'f' : 't'
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-AnyOf-keystringnever%EC%99%80-type%EC%9D%80-%EB%AD%90%EA%B0%80-%EB%8B%A4%EB%A5%BC%EA%B9%8C)
