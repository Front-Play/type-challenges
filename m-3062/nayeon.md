<!-- 3062 -->

### 3062

```ts
type Result = Shift<[3, 2, 1]>; // [2, 1]
```

### 정답

```ts
// 빈 배열은 테스트 통과 X
type Shift<T> = T extends [infer A, ...infer R] ? R : never;

// 테스트 통과
type Shift<T extends unknown[]> = T extends [unknown, ...infer R] ? R : T;
```
