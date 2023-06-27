## medium난이도 - TypeChallenges 531번: String to Union

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCsDMCMEC0EDKAXATgSwHYHMJ0B7CAVV22N0mSXodoCMBPCAQVwBNMBTNgNKYAhgGdiAN1EBrNgAoAAkz6wADNJEA2AJwBjUQEoIAYgC2vLtgCupk1crUTorHnxhaxzxACKV3s6oaWgBJUwAHABtec1x0IgALXjQXAiJSCkCiFjDeADoIABVspPRhaSTnHFThTHwbXlj8gsSIYit0MPaIUXi2iK4IJiThCHtM4gAzCDxOuKj0dF5MUXcoADFiTAheAA9hcKjViAADU-QVqHRiwv84gF4IAHJ4ACZYR4BuWiuciAAlfxWCL3ZJVfAFYgZagAHgKtwAfB8IMBgNsdjldIsBiRBkkAETwPEQAA+EDxLyJpLxsDxtFOxyO8IgADVsLwAO6tXAQADi2HQAAkrEwAFwQeILMKiEUo866eK5ABWolym3wwDg8DAIGA7lAEAA+kbjSbjRAAJptLYAYWIXCSAqWSVNLqNEB17h+SQwYIhUNwsLRi24om6KXwTIewlwLD1IENrtNN2cEGtYn8CcTZo92HCmziXogAG8IABRACOVmEEQANGX0bxMRAAL4QCaYYi2R4KL1IeXVqIEfzAdrYCKiR6e666dOhh4AbVopYbmOhFarEWhPtcfocAcej3hddwvAkS3hR6XK-Qa8r1a34d3gWhj3Qh7rr8Pl6gy4xN-X97bgQT4wo8iQRBExDvk88SPCSTy8HBpKPBESFPKh8GPFBF41lef63huD6+pCe4vromzUMIEjYJgVgTkeTy6GhWHMZgzFQZhuDMcIzESMx2CscxVjMfRl4ALpxpmWYGhAaxWJg6CJFsGC8FKUlZu6uqgLQTKoPENRJCwVrdMQESjtQ0ripK0qyqI8pKiqaoaggwDRqI7JLDpLJspy4hmeggSWRKHQ2cAcoKsqqq1M58DAH55m4BcEBMgAspsSTWvpEENPg-hisFUoymFdkRY5tTarqQA)

<br/>

## 내 풀이

```ts
type StringToUnion<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? StringToUnion<R, [...T, F]>
  : T[number]
```

- 문제가 문자열을 각 단위로 쪼개서 union을 만드는 것인데 이걸 보고 지난 주 문자열의 길이를 알아내는 문제 때 아이디어가 떠오름
  - 문자열을 각 단위로 쪼개서 배열에 담은 다음 배열의 길이를 구해 문자열 길이를 알아내는 방법이었음
  - 그래서 이 방법을 이용해 문자열을 각 단위로 쪼갤 수 있다고 판단했고, 이를 union으로만 바꾸면 된다고 판단
- `S`를 extends를 이용해 string으로 설정하고 `T`를 기본값으로 `[]`(빈 배열)을 지니고 `string[]`를 지닐 수 있는 제네릭으로 설정
- `S`를 첫글자 `F`와 나머지 글자 `R`로 나뉘는 경우를 가정하고(삼항 연산자), 이 형태일 경우 재귀 용법으로 첫 글자 `F`를 빈 배열이었을 `T`에 담고 `R`은 다시 첫 글자와 나머지 글자로 나눔
  - 재귀 용법으로 이를 반복하면 모두 `T`배열에 한 글자씩 쪼개져 담기게 됨
- 최종적으로 모두 배열에 쪼개져 담기면 마지막으로 `T[number]`를 반환하여 union type 생성
  - 배열인 `T`에 number를 설정하면 각 index값의 경우를 모두 갖는 union type이 됨

<br/>

### Reference

- 지난 주 문제 Length of String 참고
