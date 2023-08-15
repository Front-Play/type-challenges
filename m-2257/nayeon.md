<!-- 2793 -->

### 2793

```ts
interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutableTodo = Mutable<Todo>;
// { title: string; description: string; completed: boolean; }
```

읽기 전용에서 mutable 하게 바꾸는 문제

### 정답

```ts
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
```

### 참고

```ts
type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] };
// readonly, optional 제거
type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] };
// readonly, optional 추가
```
