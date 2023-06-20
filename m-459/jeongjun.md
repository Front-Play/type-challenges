## medium난이도 - TypeChallenges 459번: Flatten

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBAsCsCcEC0EBiAbAhgF2wUwDtJklSziAjATwgC8ALAewFcqBLAWzYIHMIAKAAIBjehQBOjAJQQAxIBeewK2LczOPGYqYYrJ0RAE5OAObq1RAPxOAW0cAjkxEAMPYBfRwCLjEQDCrgavbAOqs3bEQAMLgUPHAPOOAOh0QgCg9gB31gClNaFi4hD6+joA2tYAga4Aaq4Acg4ApYwB0xhCAEGOAO0MAXHkABhXYAM7E2FQADngQAGYx+AQQALzROO0APADaAIwANBAATGMDAMxj0AC6UwMDsPNr8wB8EMDAEMNjkxCzMGOrxBVleVsA4mzYABLMFIALo4A4gxDygAx1xRD0uPVVYo7aqibIAKyq2UY4h4wDg8GAAGtGGAQMAtKAIAB9HG4vG4iCAG9HPs8IIAVecAOy0QXyAUg7sfiGViIGitHVGj1Yh1upgCJowJjGQyIIAZRcAJUOADqWIIAAecALuOi+mCgkszj1aHYCBspoAbwgAFEAI7MTDoMa6gAejWE6oAvi1JBwIAByQSapCiY3oQg8PBVYDMbBsdBVR2shpNYSYKo+rp7Yjmy3YPoGo3oPoYXqEQabKabDYjOMWvBWpOG41ptqZ-YTMbHBZ5vajatHOa5-NQeNFxPJsvpzmDRsDcZretVocbPMFhMllPljMEfsHKa1xZ7ZardYjxuHWunVuTzvTnsV+cDHXNRiMH6OiiqR0AbgmPyGAAYINaxo7z4wb+JHdm9meF5Xj+96PhAL5vh+X4gXu8wYrsLpVEgeCFlayFqNCYCahAeAYeIMa9v0jpDI6GwYiACqKkygAnTYAMuMQIAF02ACM1lGKsy6KgMQWyAKgTgCvTRAgCvNYABOOpN8vz-ICwJVKCEJQjCcIIMAPJVAA7rhSIolAPH8V8Px-NgAJAsAIL0OCkLQrC8LAFUjDoP6bCMAQNRaRA1GAB6dEAGIAOBOACctekSUZJlmXJsLIqi6JAA)

<br/>

## 내 접근

```ts
type Flatten<T> = T extends [...infer R, infer P]
  ? P extends any[]
    ? [...R, ...P]
    : [...R, P]
  : []
```

- 기본 형태의 원소일 경우를 `...infer R`로 표현하고, 그 외 경우를 `P`로 표현
- 그리고 다시 `P`가 extends any[], 즉 **배열을 확장할 경우** 구조분해할당으로 `[...R, ...P]`가 되도록 작성
  - **배열을 확장하는 경우가 아닐 경우**엔 `[...R, P]`가 되도록 함
- 그런데 다차원 배열의 테스트 케이스를 통과 못함..
  - 재귀 함수로 돌려야할 것 같은데...

<br/>

## 정답 풀이

```ts
type Flatten<T> = T extends []
  ? [] 
  : T extends [infer First, ...infer Rest]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [T]
```

- 먼저 `T`가 **빈 배열일 경우**를 먼저 제시, 이 경우엔 그대로 `[]` 반환
  -  빈 배열이 아닐 경우 아래의 삼항 연산자 실행
- `T`가 **원소를 지닌 배열을 확장할 때**를 제시하기 위해 `infer`연산자 사용: 첫번째 원소를 `First`로, 나머지는 `...infer Rest`로 작성
- 이러한 각 값들은 다시 반환할 배열 안(`[...Flatten<First>, ...Flatten<Rest>]`)에서 `Flatten<T>`안에 넣어 재귀적으로 실행
  - `First`가 배열 형태의 원소더라도 재귀문 앞에 붙은 `...`라는 전개 연산자 덕에 다차원 배열일 경우 `[]`가 벗겨짐
  - 다차원 배열이더라도 재귀문 덕에 모두 벗겨질 때까지 진행(배열 형태가 아닐 때까지 진행된 후 `First`를 `[First]`로 만든 뒤 전개구문을 통해 최종적으로 마지막 배열까지 벗겨내기 때문)
  - `Rest`의 경우 원소가 여러개라면 다시 `First`와 `Rest`로 나눠서 위와 같이 진행
- 만약 처음부터 배열의 형태가 아닐 경우엔 `T`를 배열로 감싸서 `[T]`로 반환

<br/>

### Reference

- [typechallenges - 문제 해답(issues#511)](https://github.com/type-challenges/type-challenges/issues/511)
