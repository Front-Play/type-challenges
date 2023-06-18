## medium난이도 - TypeChallenges 110번: Capitalize

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCM0AwQLQQMIEMAOBLALmgNlgF4CmkSilV5ARgJ4QCCAdjgBYD2zDAYgK4QAFAAE0rAGZ8AlBADEAWxIATLH3lycJeRnxpNiQpoBOBMOVkWIART4kAzjixczUAJLb8WkqwgADdNh4hKQAPAAqAHy+EADubFgAxmwQCVwAbiRGOHYQ7CQQ4lhGDhCeOMYQHOIQaBAORljMAOa5HBB8GBiZCWh2+WJKpSRoGbls+Ub2ODV2iFh2AHQuEDwcRhAkAB5oHmTkvgfZ5Dh0XSmYuATEyhAAvKgXQdchAOTj+PhtMWv4Si8REGAwA2my6CU0gxwbRo+ReAAkSB8vj8-vsDssAQA1LAkGKVZgQADiuDhfBoAC4IGxyhg7OSgdkkgsAFaLNZNYCwOBgEDAMygCAAfWFItFIogAE0OHx1igOEp8gjJkKxarBRBeWYTmcALJ0AKXYIkEIAZRBmmYShy9UaTQB9zEdH5IBVatFEDCUwefRybrFGr5WG0a2m2vyAG8IABRACOfAIABpo6CSOCIABfApGDjqF7CMOIJIETzNezAPiOfB2F5a075Ho+u4QADa5CjKfBIVj8fwIT1BqeoRe4g4HBoaCM-yTL1WY4n-wiCbbHZwXbjBD7+seVyHPAA8nuAEKMABKU4gM4Px7PEUXy7Bq+7G-726NrxH0Pni4vs4g48nt5LlA7YPmuPabgOO7Gi854wYB96po+669i+gRQa8aCwYwC5AcmoFPihW5oW+Lw0LBh44QhnYERBr7PC8CSwSglHASuYHPkRhr0X834vAAIixeGIexhGQSRJCwVGgkgcJNGoVxQ7iLBPDSWxcmcYO0FNLBhKqfhyG0cR9FsLBcJ6bJBnyZprxYLBrjmdRlkaehLzMrBABSDlIeBVkuQA1rBADSXkiYZCnQfgsEADIhepYn0fIsE6rFTnxUOzCwQAcilPnOSRHCwXuOUcWl0EYLBAAKxWiXRQ4xrBVjVWF1kvAB043nerH6blpWvNWvEmk1vkkTgsFhENeX0XwsEAKoTb1LxpLBmLzbV0ExLBADqq1GUOmywQAGjt4WvHQsESsdLVELBABalEALrOq6frqvwWTjOsJqaLSz1+gGYCgOQAImmwE75HQ0rrHYHD4BWTjMHSVI0nSDJ2EyrILOynLwMAYh2DEmRAxA2K4nUMNw1wiPUjgtL0sAjJsCybJGByXLANDsOOJTRM6ms+QoKDHzeE09iUtTtOo+jzNNDyfJAA)

<br/>

해답 중 내장객체를 사용하지 않는 방식이 재미있어 보여서 가져와 봤습니다.

## 정답 풀이

```ts
// 1단계: 세팅
interface ToUpperCase {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
}

type LowerCase = keyof ToUpperCase;

// 2단계: 적용
type MyCapitalize<S extends string> =
  S extends `${infer First extends LowerCase}${infer Rest}`
    ? `${ToUpperCase[First]}${Rest}`
    : S;
```

- 먼저 `key: value`를 `LowerCase: UpperCase`로 대비되게 설정
  - 이에 대한 key값을 `LowerCase`로 다시 type 설정
- `S`는 string을 extends하도록 설정하여 제네릭이 string이 들어오도록 함
- 이후 S라는 문자열의 첫 글자가 LowerCase라면 첫글자를 `ToUpperCase[First]`를 통해 객체의 value값을 가져오도록 하여 대문자로 치환하고 뒤에 나머지 글자를 다시 붙여줌
  - 이때 `infer`키워드 사용
- 만약 소문자가 아니라면 그대로 `S`반환

<br/>

### Reference

- [typechallenges - 문제 해답(issues#11344)](https://github.com/type-challenges/type-challenges/issues/11344)
