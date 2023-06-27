## medium난이도 - TypeChallenges 599번: Merge

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCsCcsQLQQLIFMBOBzNkmIMLwCMBPCALQE0BlAL1IGcIAKAAWvqYEoIBiALZoAJgEsArgP4B7YgCs0AYwAuYPHw0QAiuLSNlo6QDs1UdNjQRlAd2lXSABz0RRR5XYCGEI2mv2nAHQQANJoTBDSAGZWABaWjErGwv6W0gBumBiiws4A1mHMUbGWkaIY+ikBphAAYtIYEGgAHh4CDgA2uHgABr3KjHjKjiXSdgC8EADeeFBGrWgAXBD6WUZYANwzEB44SyuuG3gAvoPDEIqjEBPTUFA7i96SxJibt8vNe8qrWMfVQ04QABKenE7WUV1QmBwAB5IqMADQXaQAPnWEGAwEaTScKhEVjszymcyEn2+8O2u0eAmeGHJCSapIOJygvW61WREAAaqJfBEjBAAOKiZQACXExCWMWUygcjAWGP6ihiATkjAC9SwwDgsDAIGAalAEAA+ibTWbTRAqNJxA0AMLSHIQEWYSzmt0miB6tT-SzmGE1ck0DkTDxGUgGkDG93miAAFT04NtHgSzGjMa9oja9XBPqmEAAogBHcQedrk-PYpTgo4QSIYaRSADkbB9iCVpc6az0wHEBnajEb3rOdXGUzwHiWRiemBIjLWYBOuYAQh4GtdZ1SaXhFEtiKNOqGF0OAYpk84JgBtPAVnHKaFFkvtaF+tDQkfklcYZHkm63Cebmc3glACMC2HcID3aQDxMKAjmRb8wAAXQjKM0w9GobWUOIGhoZQ0FlVC0M9fVQDwDkaBiVdLFIa0GkYKDe0MIw5QgKUZTlBVGCVFU1Q1LV4GAUNGGsQCIA5bleXo9pGOMFi2NleVgEVZVVXVbB+NgYApJk5iyNQepLFtSj2k7HA5OlBTOO41SNV1fUgA)

<br/>

## 내 접근

```ts
type Merge<F, S extends keyof any> = {
  [K in keyof F | S]: K extends keyof F
    ? K extends keyof S
      ? S[K]
      : F[K]
    : never
}
```

- 527번 문제의 세팅을 참고해서 제네릭 조건을 선언하고, `[K in keyof F | S]`로 `K`가 `F`와 `S`의 key값이 될 수 있도록 설정하고자 함
- value값은 연속적인 삼항 연산자로 설정하려함
  - 먼저 `K`가 `F`의 key를 확장하면 다시 삼항으로 `S`의 key도 확장하는지 체크
  - 만약 `F`와 `S` 모두 확장할 경우 `S[K]`를 value로 가지도록 하고 `F`의 key만 확장한다면 `F[K]`를 값으로 지니도록 함
  - 위 경우가 아니라면 `never` 반환
- 그런데 test case를 통과하지 못함..

<br/>

## 정답 풀이

```ts
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
      ? F[K]
      : never
}
```

- 별도의 제네릭 설정은 없음 대신 `K`에 대한 설정을 `in keyof F | S`가 아니라 `in keyof F | keyof S`로 설정
- 바로 `K`가 `S`의 key를 확장하는지 먼저 체크(삼항 연산자 진행)
  - 왜냐하면 어차피 두번째로 들어오는 `S`가 `F`의 key를 override되도록 할 것이기 때문에 `S`를 먼저 체크한 뒤 `K`가 `S`의 key를 확장하면 바로 `S[K]`를 value로 반환하고 `F[K]`는 건너 뜀
  - 만약 `S`의 key를 확장하지 않으면 다시 `K`가 `F`의 key를 확장하는지 체크하고, 맞으면 value로 `F[K]`반환
  - 두 경우 모두 아니라면 `never` 반환

<br/>

### Reference

- [typechallenges - 문제 해답(issues#608)](https://github.com/type-challenges/type-challenges/issues/608)
