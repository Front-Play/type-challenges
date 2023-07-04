<!-- 645 -->

```ts
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
```

**Omit<O & O1, keyof (O | O1)>에서 (O | O1)는 O와 O1의 합집합 타입을 나타냄.**

=> 중복되는 키들을 지우고, 남은 속성들로 새로운 타입을 생성하기땜누에, O와 O1 사이의 차이를 알수있다고 한다!
