## [type-challenges] AnyOf

### 풀이

```
/* _____________ Your Code Here _____________ */

type PickByType<T, U> = {[K in keyof T as T[K] extends U ? K: never]:T[K]}

type t = PickByType<Model, boolean>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]
```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-PickByType)
