## medium난이도 - TypeChallenges 2070번: Drop Char

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBBMAMDssIFoIBEBOB7ADhAwgBYCGGkKylV5ARgJ4HE4AuxAlgHYDyAZgAqEAQhAAUAAXxNWnXgMEBKCAGIAtgFMAJmwCuK5czUqcAG2IHkxtgYzFjyzjzVlyS1xACK2tQGdmbLBxg5Ji4EMQQ3jhqAMZsPGyaENEkGBA82HrhvhicAOYAdEFQAGJYqWoAHsRGxmoAXEUQAAYtzN7kzHRREILazNY8xgwAvOjYOESkADwA5BA0ENoQzMsQahCpPBB2DACEEDMANAcHAHwQwMAHNH0DQ7sz5C1NjecAagkA7hABEADiVgAEtoaHUIIR+jhvHVLm1kvkAFbefJlXLAOCIMAgYBBUAQAD6hKJxKJEAAmlhtKl8FgNOtAU51iTmYSINigp1uiEJikpgBlY74c6jYgcOi4kAElkkiAAFR8K0k3h8UulpPZbCMZRWnPWAG8IABRACO2lsx0NFSi0RWAF80hkDmJdchkrZahxcj5gH02MZvI8wLqksRld4IKMANrkS4QZ3eZCVa3MRMYbBkKCW5NTE1m4xTbmTDCzG79Jxpe5HA4zU7HGalu50B6nWvkLMxZg5022AvjIsl27lwZNqtzGt1htOYfN1uZq0drt53u4fv1webSt15sT9cVug12dG+c2xc9wu8uZQea76dXu8HOtnHdljDTg+HNvHzu5s99i-zRZVhWdZNm2CA9gfE5x2udc3xbD852zH983PaY5gWJYdTWDY0jAiDRxoaDL0w1YQNwnYIH2d9PyQ7sUL-NCAJI4CcK2CiqLrZgiKYq8yLY8DKLOVsAF0JVVNV8QgYoqWYQhyz5AwoXEtU2RxUByHOPkUnWOhKVSbwsGMX0AmhcFIWhWFvHhJEUQwNEMVgYBRW8T4nA0iAPjUb4DKMvwTLBCFmChGFgDhQhEWRVF0QQRyfOMjh2igc4AFkynWSZjA9L1TMC4LLOsyK7KxHEgA)

<br/>

## 내 접근

```ts
type DropChar<S, C extends string> = S extends `${infer F}${C}${infer R}` ? DropChar<`${F}${R}`, C> : S
```

- `S` string 구조 안에 있는 `C`들을 제거하는 것이므로 `F(First)`와 `R(Rest)`사이 존재하는 구조를 extends하는 경우를 제시
  - `C`가 가장 앞, 혹은 가장 뒤에 올 수 있으므로 `infer`키워드를 `F`와 `R`에 붙여준다.
- 만약 위에 제시된 구조를 extends하는 경우라면 재귀용법으로 다시 `DropChar`진행
- 그렇지 않을 경우엔 `C`가 없는 것이므로 바로 `S`를 반환

<br/>

### Reference

- [typechallenges - 문제 해답(issues#2074)](https://github.com/type-challenges/type-challenges/issues/2074)
