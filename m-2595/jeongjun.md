## medium난이도 - TypeChallenges 2595번: PickByType

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBBMCsCcsIFoIAUCWBjA1gIQE8AVAgBwFNIVkbaqAjAiAKwwEMA7AcwGcALThAAUAAVadeAjgFtyAFzYBKCAGJZAEwwBXaaoD29ZuSxywVFRYgBFLeR5yMejmagAxAE57dAAyLeANBCk2DgQbBA88hB6AGZBnhTuDnYQAO58epEQcmTkYe55bDw8GFwcbPQANnlyehDeAKreAHQuEK567hAAogAebNKk1W3eozkUPFjuGKSmUON5APIclQR4enrVggC86CGEJBQAPADeVFDlsgBcEXLT3OcQWHpaHHI3HDr05O6PGDwAJXIbHUTlWN3oGy2zigUH+3XKVXIEKhwJhEAAvoFIZs0QA+CDAYAQE4Qf5AkFgggo3GcADcZJ4CIq1Rp0IZGKoo28bQJADUMORUtEOBAAOIYOQACS09BufDkclIPCuRLkkz4zWYPGanS4wDgiDAIGAZlAEAA+lbrTbrRAAJovLoAYT06jyUp+eVtPqtEBNZgWe1wB1yRyIgQaBN2nAIZpAlt9togRDscggzqKKSTyYDGEGnXTQdJ3QAjlo2JVAn0KCZMRAYp5dAByEQLZBYASVarcOzALQOSo8ZtmDBvH4xNhYPIAWTd5EqJKol2Rt3uXCoz1e7wgn2k31+cMBwNBK2pEBx0Ko8MRrIvqM4YE5YCDWCzPAguwA2lQa8Y5EcZYVpURyYCGxBhnO7pVvetIcHigSkuSJ5UmyaIMjeLKrpeaKYniCG-r0tYAUBlagfsEHHFBC6BPY64ISSu4DKudFjlweEEVAf4mIB5ZkWB+CUeQRzUTBe4HgxpJbm8HxfD8HH+GAAC68aJjmfquFoSR8PJADKcjkMqanqf6pqgFQBK6QIBQQAQToRJsA6OBwKoQAqSoqmqGpajqeoGggsDAJwPCpD8FkQAKQoOZUTlOK57nKqqwDqp2Pm6u4+qGoFPCOQ4cXhXONnOl2PZcHY8qKolXmpdq6UbgGQA)

<br/>

## 정답 풀이

```ts
type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] }
```

- `as ~ extends ~ ? ~ : never` 구조를 이용해 조건에 맞지않는 경우의 key를 `as never`로 제외
  - 먼저 `T`의 key값을 `P`로 설정
  - 그 뒤 `as` 뒤 삼항연산자의 조건 설정을 `T[P] extends U`로 하여 `U`와 같은 value type일 경우엔 그대로 남기고(`p`), 아닐 경우를 `never`처리

<br/>

### Reference

- [typechallenges - 문제 해답(issues#2768)](https://github.com/type-challenges/type-challenges/issues/2768)
