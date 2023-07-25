## medium난이도 - TypeChallenges 1367번: Remove Index Signature

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCMDMBsB2CBaCAlApgWwPYDdMIBJAOwBNMAPCAZQEsBzUgQwBcBXAJ00lRQGC+AIwCeEABb0uuUSwj16ALw4BreQAoAAlJlzFK9QEoIAYkAvPYFbFs7mEArTAGM2KVZlEBnMH1O+IgCcnADm7vKEBcGsAWmYhAAnHAVDXABdHAHEGIQA9xwEdmwBKhiEAdocAP2sAJpsAMmcAfTohAHAnADzHADVXAFKaIAAMsPEIySioGZnZuTAAeABUAPjqSwBtawBA1ysAOQcAUsZCIQAgxrIAuWbrVti8oNlEAByIAMVxcCABeCABvPigAbTdRRYgPNi56UkYAXXuWUlFLiAAzQ4aIz3fC4ejkPgAX1mW12EAAgicMDgCJgWtR2qxODxugdcP0IMBgBBqLtnJhyOd-oDgRBQeCINCoKs6rMCQBxehsAASHGEiQg5kADHX3CRsNjbDyLInrRwSAB0dg88twXEYwDgSGAqlwYBAwG8oAgAH1TWbzWaIIAb0aFcQggBV5wA7LRBAKHjgFIOk0Wr3GiD67ywoiNVHotpMLFdPoE05fH5gI3er0QQAyi+lAB1LEEAAPOAF3HMgmLb6DfRsNtVWwIAGqQBRACOHBYABsADQQStUMllyH-GTYCAAci0AZQcob9cwr0wHmAHDY9HrHl7-p2+0OSIu11u90ez1eHwgMb4ANwQJBYIh0LAFYAQiwuKu+Dd3PdSBxsMJMFxd-uoMIb8e6ae+AABk3J4XkYMBz0cXBSEealbBvJFaFEV9cHrDRe0PH8uF7IwLyXCA8WvW9TjXCAHzuB5kOEVDP2+e9MJvN4-3pM9Fzha8lDvb9f1pFiRBYJQQO3cDzwrRwWA8CckSuPhW3bboazretuiDZoKAxMNOhxPF+mbM44OY09GX6XTZLbJw2AU2sGxUlE1NaTEtJ6IjdKpLDDPBABuCBgIeUDXmM0yoDkiyrKU2ymjRdTQw6bEekIm9XP0q4GI-DzKUhEzGzM+TFJs1SooczS4u6DikogdzeNPbyf0EvzhMC7K3kNEBPTzU0IEAE6bABlxiBAAumwARmra9qCzjcAoAJQBUCcAV6aIEAV5qokqEVJHFSVpWAWUFSVFU1Q1BBEGAL4PAAd3fbVdQmiAZsFZaxQlKUZQ8OVFWVVV1U1A6PFQ6d6GgjYIAJTrAA9OiBAlKQATltFVaHo2p6tte3adT1A0gA)

<br/>

## 정답 풀이

```ts
type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T
    as P extends K
      ? never
      : K extends P
        ? K
        : never]
  : T[K]
};
```

- `P`를 `PropertyKey`로 설정하니 `string | number | symbol`type이 기본값이 됨
- `K`는 `T`의 key값, 그리고 이를 `as ~ extends ~ ? ~ : never` 구조를 이용해 조건에 따라 `as never`를 주어서 제외시킨다.
  - index signature의 경우에 key값으로 가져오게 되는 `K`는 해당 index signature의 `type`값을 가져오게 된다.
  - **_ex) [key: string] -> K = string_**
- 그런데 이 이후 처리 과정이 이해가 잘 안 된다..

<br/>

>**의문점**
>
>왜 두번을 거쳐서 never처리를 하는가?  
>

>**쪼개서 파악해보기**
>
>```typescript
>type A = {
>  name: string;
>  age: number;
>  [key: string]: any;
>};
>```
>- 예시 타입 `A`: 여기서 나올 `K`는 `'name', 'age', 'string'`
>- 파악을 위해 `as`뒤 구조를 분리해서 `K`의 각 값을 넣어보고, `P`자리에 `string | number | symbol`를 넣어봄
>
>```typescript
>type a = string|number|symbol extends 'name'  ? never : 'name' extends string|number|symbol ? 'name' : never
>type b = string|number|symbol extends 'age'  ? never : 'age' extends string|number|symbol ? 'age' : never
>type c = string|number|symbol extends string  ? never : string extends string|number|symbol ? string : never
>```
>
>- `a`, `b`는 예상대로 각각 `'name'`과 `'age'`가 나옴
>- `c`는 예상대로면 `never`가 나와야 하는데 `a`, `b`처럼 그대로 `string`이 나옴
>
>=> 대체 이유가 뭘까..? 어디서 무얼 놓친거지..

<br/>

### Reference

- [typechallenges - 문제 해답(issues#14662)](https://github.com/type-challenges/type-challenges/issues/14662)
