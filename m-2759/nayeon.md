<!-- 2759 -->

### 2759 문제

```ts
interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, 'name'>; // { name: string; age?: number; address?: string }
```

### 정답

옵셔널을 제거해주는 연산자를 다시 한번 외우게된 것 같습니다..!  
옵셔널 제거해주는 연산자를 앞선 솔루션에서 적용하면 통과될 것이라고 생각!

```ts
type Merge<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, K extends keyof T = never> = Merge<
  { [P in K]-?: T[P] } & { [P in keyof T as P extends K ? never : P]?: T[P] }
>;
```

옵셔널 제거해주는 연산자를 찾아서 했을 때, 당연히 모든 테스트케이스가 통과된다고 생각했는데,

```ts
Expect<Equal<RequiredByKeys<User>, Required<User>>>; //
// 이 테스트에서 에러 발생.
```

해당 테스트 케이스를 아직 통과하지 못하였습니다..
