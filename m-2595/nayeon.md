<!-- 2595 -->

```ts
type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }
// boolean 이 아닌 값들을 걸러냄.
```

#### 정답

```ts
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};
```

Key Remapping in Mapped Types
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types

이 부분이 이해가 안되서 계속 어려운 듯 합니다...

어떻게 다시..리매핑이 가능한가...

```ts
type MappedTypeWithNewKeys<T> = {
  [K in keyof T as NewKeyType]: T[K];
  //            ^^^^^^^^^^^^^
  //            This is the new syntax!
};
```
