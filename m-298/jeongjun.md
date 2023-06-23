## medium난이도 - TypeChallenges 298번: Length of String

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBBMCcAcEC0EAyBTAdgcwC4AsIB7AMwgGVcAnASx0mSSeYYCMBPCABRuwgDEAhjggAKAALYkABwA2w9AEoIAYkAvPYFbF1bnQBbOYJ1JZNHVUGywDFTYiAJycAc3VagADSrRwrZWPPheAMmcAf9ohATebARPHADVXAFKaIB0AE8cAX0YhAGs7ABkXAF-bADXGIQA46wBdxwB9OiEAbWojADkHAFLGAOmcIAD4IAHFTAAkAV1ZABdHAHEGINUAGOoAuCHxcXGkAZ0HgYFwJgGN8KoArCaqiKmxgOHhgAGsiMBBgK1AIAH1Lq+uriEAb0f7OiEAVecAdlohAUPHAUg6Lm7-ziDHKy4djSdBoHwEADyJHcdGwAB5yBB0AAPHSYAAmEwgE2o8IaAF4IMJ2KcQL9-tcIIAZRcAJUOADqWIIAAebydMpVMugJONH0G1wEBBYIgAG8IABRACObQsABoJaiwfMBQBfCAkKhEXQQADk4iF6CQiws3hw6AmwDauBosgmOuBoPB80EE3NEGJAG0GOLFehlQipTLZAiMDhobD8TgETqdXV5QAGOpx72+-2BiwhyH4GFwqM6vZtXQ0A6x+UANiTspTStwAelGdDvhzkcROqo6DoglLEAArJXq37a+ng43w7nW+QiG0sQBCCVtaT4IiYGiF7sARgryYAuuSOZyIIATpsAMuMQQAXTYARmv3VO5YFADAagFQJwCvTRBAK81gAJxiJDEZjSbTWYFiWVZ1k2bYEGAYQJgAd3QKh9kOKAn1fAZhlGcYphmOZFhWNYNi2HZgAmIhZCtGhlwmB8j0AD07YkAHAnABOWtC-0wwCcJA-CEKOE4gA)

<br/>

## 정답 풀이

```ts
type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T['length'];
```

- 우리가 제네릭으로 넣어줄 값을 받아줄 `S`는 extends문을 통해 string으로 제한
- `T`는 string 배열 형태를 확장하는 제네릭으로 설정한 뒤, 넣어준 값이 없을 경우엔 기본값으로 빈배열 `[]`이 되도록 설정
- 문자열 `S`를 첫 글자 `F`와 그 뒤 나머지 글자 `R` 구조를 띄는 경우를 조건으로 삼항 연산자 실행
  - 위 형태를 띌 경우 재귀문 실행: `S`엔 나머지 글자인 `R`이, `T`엔 `[...T, F]`가 들어가도록 함
    - 이 의미는 시작엔 빈 배열이었을 `T`안에 문자열의 첫글자를 원소로 넣어주는 것
    - 이후엔 재귀문 안에서 `T`가 빈배열이 아니게 되더라도 `...T`를 통해 다시 전개연산자로 풀어줌
  - 재귀문의 반복 실행으로 `T`안에는 문자열 `S`의 한 글자씩 쪼개져서 원소로 들어감
    - **ex) S = 'apple' -> T = ['a', 'p', 'p', 'l', 'e']**
  - 최종적으론 모든 글자가 원소로 들어간 `T`의 length값을 구해서 string의 길이를 측정

<br/>

### Reference

- [typechallenges - 문제 해답(issues#359)](https://github.com/type-challenges/type-challenges/issues/359)
