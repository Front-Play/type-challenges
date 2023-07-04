<!-- 612 -->

```ts
type KebabCase<T extends string, K extends string = ''> = T extends `${infer S}${infer R}` ?
S extends Lowercase<S> ? `${S}${KebabCase<R, S>}` : `${K extends '' ? '' : '-'}${Lowercase<S>}${KebabCase<R, S>}`
: T;

  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,

  // S 가 이미 소문자인지 확인
  // 소문자인 경우와 소문자가 아닌 경우로 나뉘어짐.

  // => 재귀적으로 반복
```
