## [type-challenges] Diff

### 풀이

```

/* _____________ Your Code Here _____________ */

type Diff<T, K> = Omit<T&K, keyof (T | K)>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Diff)
