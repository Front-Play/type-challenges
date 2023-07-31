<!-- 2688 -->

### 2688 문제

```ts
type a = StartsWith<'abc', 'ac'>; // expected to be false
type b = StartsWith<'abc', 'ab'>; // expected to be true
type c = StartsWith<'abc', 'abcd'>; // expected to be false
```

### 풀이

```ts
type StartsWith<T, U extends string> = T extends `${U}${string}` ? true : false;

// U로 시작하고 그 뒤에 어떤 문자열이든 올 수 있음 ? ture : false
```
