<!-- 1367 -->

```ts
type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
```

## 정답

```ts
type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};
```

..이해가 잘 안됩니다 ㅠㅠ

```ts
type Person = {
  name: string;
  age: number;
  [key: string]: any;
};

type FilteredPerson = RemoveIndexSignature<Person, string>;
```

```ts
keyof Preson // name | age \ string
```

```ts
[K in keyof Person as string extends K ? never : K extends string ? K : never]
```

```ts
'name' extends string ? never : 'name' extends string ? 'name' : never
```

```ts
'never' | ('name' extends string ? 'name' : never) | 'never'
```

```ts
{
  [K in keyof Person as 'never' | ('name' extends string ? 'name' : never) | 'never']: Person[K]
}
```
