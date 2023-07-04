## [type-challenges] KebabCase

### 풀이

```
/* _____________ Your Code Here _____________ */

type KebabCase<S> = S extends `${infer A}${infer B}` ?
B extends Uncapitalize<B>
? `${Uncapitalize<A>}${KebabCase<B>}`
: `${Uncapitalize<A>}-${KebabCase<B>}`
: S


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-KebabCase)
