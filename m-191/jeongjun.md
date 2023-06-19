## medium난이도 - TypeChallenges 191번: Append Argument

[💻문제 보기](https://www.typescriptlang.org/play?ssl=2&ssc=9&pln=2&pc=24#code/PQKgUABBCMCc0QLQQIIAc0FMB2ATVATgOYCuAtjgC6RKJ300BGAnhALICGAxgJaYBWEAMo8A1gHsCHCAAoAAmW59+AZzGSOASggBiQC89gVsXdHYuSoqwNHdYiAJycAc3ZaiALVcAYQxEADC4FDxiAAMAYti+gD81EIAto4AlrZ4+vii+gAA1EIA-E2G2EIAyrX6BvoAa4xCAHuOugAJjfnGAPp0QgBOdgAOTgJOdBa6AOh0QgNg9gClNWUGhgJvNgD7jgDqrEG4QgATjgKhr+X4A4r4VgLsDgIyDgBqrgByDgCljAHROEIAQY4A7QxAAXNu+p5TMWCpcBDxo1FDnWBCBEAC8shyHENjkjJgEABoIIwvipKDdsERtK8AHzfX7-baPTAQABKmBUJAANpQ3qgMDhcChTBRsJQADyBIGMcTiLGYDjYGE0YDACCABjrAADNgAwWjqABprgh0ZJ94WQ-oDgaDwTxIUCAB5fGl0hnYaFwn5i-4QLyACabACdNWygp182zhgBdxiD2QA4Ex0ANoKJQCNQSKQAXRkAAtKJQ0CpDqyiDxKB6SIwNlxxGRgIpeE71FJNIlAInjC0GtsAC2P2CCAADr3V6fX7WbhMAA3DaUcTR7jOjTADi4EuMriYXCIZFXG53RCYOX-XgqDGIACOJAxlB44mwiAALDPYABWLiaQALo4AcQYggBwewAzs4AI1cArUP6rY0OFTIMACVDa4genZX3zvv9wEoVw9G1UG0kRGAcGgwAkYBAYBLFACAAH1wIgyCIIgQAb0fZZcIEAFXnAB2W7VAFIOsCoKw0CIEAyxkXxLA8GJUhSQpKlUDhd5GWYYCQEw7DIIgQAZRcAEqHAA6liBAAB5s1WIYxjwNwoCeDINBJFxAiAG8IAAURHDgsSBGS5SwLhcQAXwgAAzAhIwgAByORkUQLgPQU+lIQxYASHHLEVH0-CLhRABhDgBwQd50CIokSSoclhS+DVxWpKUIShN51QRCUlXpRlmQI9FMRxDyPkCqKQogMEwvlRVaVi1UItFcVHKeVyBwAJjxLzCRIswyX8tUIBLcQeFwIESDwTAtJlFt4qctEMWxShKveGQFQgDri267AW0a5rWpKlEuDcjE8VtGhlNUik5JIBTyTKzBoCBRKhugGEYQBDaVMwNTyR2vaDvK47BpxcrzsuqBWQgIyVG7a61O7AhdIIGhquI3z6o60RsHEAB3bB2s66besu106P4gSID1QAZcYgQALpsAEZqMcYoSwFAY8IEAVAnAFemiBAFeakYllvCB70LJ8XzfFQP2Ib94DrbAVFh-4-3ECmaevZnWcfZ9TM57mvx-YAVDpGyJwFim9UAD07LStQATlrvb0H1ZGXX3fT8RYAoCgA)

<br/>

## 정답 풀이

```ts
type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never
```

- `Fn`함수의 인수가 몇 개가 될 지 모르기 때문에 나머지 매개변수로 표현: `...args`
  - 그리고 이 인수들이 있을 시 이를 지칭할 타입 변수로 `infer R` 작성
  - 반환 값 `T`도 `infer`를 이용해 표현
- Fn이 이러한 함수형을 extends할 경우 `R`과 또 다른 제네릭 `A`를 인수로 갖고 `T`를 반환하는 함수 타입이 되도록 지정
  - 이 외엔 `never`

<br/>

### Reference

- [typechallenges - 문제 해답(issues#222)](https://github.com/type-challenges/type-challenges/issues/222)
