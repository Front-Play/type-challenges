<!-- 2693 -->

### 2693 문제

```ts
type a = EndsWith<'abc', 'bc'>; // expected to be true
type b = EndsWith<'abc', 'abc'>; // expected to be true
type c = EndsWith<'abc', 'd'>; // expected to be false
```

### 풀이

```ts
type EndsWith<T, U extends string> = T extends `${infer x}${U}` ? true : false;

// 앞선 문제와 반대로 앞에는 어떤 문자열이든 올 수 있고, 마지막에만 U 로 끝남 ? true : false
```
