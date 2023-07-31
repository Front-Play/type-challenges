<!-- 2757 -->

### 2757 문제

```ts
interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, 'name'>; // { name?:string; age:number; address:string }
```

### 풀이

1단계 : 일단 모든 프로퍼티가 옵션이 되도록 만들어 보았습니다.

```ts
type PartialByKeys<T> = {
  [P in keyof T]?: T[P];
};

//  User {
//   name?: string
//   age?: number
//   address?: string
// }
```

2단계 : .. 사실 여기서부터 막혔습니다.💦

### 정답

```ts
type Merge<T> = {
  [K in keyof T]: T[K];
};

type PartialByKeys<T, K = any> = Merge<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;
```

1. T의 속성 중 K에 해당하는 속성만 선택해서 옵셔널하게 만듬.
2. T의 속성 중에서 K에 해당하는 속성만 제외해서 만듬.

-> 두개를 머지. (즉 합집합!)
