## medium난이도 - TypeChallenges 116번: Replace

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCM0GwQLQQEoFMAOAbAhgYzUiURNKICMBPCAQQDsAXACwHs7qAxAVwgAoABHIwBmXAJQQAxAFs0AEwCWXaVIZpp2HGsRYFagE44sYIpLMQAilzQBnBgrYmoASQ1Z1aRhAAG6TQQAeAGUAGggOfRZpMIAVFgA+bwgAdyYFPCYIfUxcAghmNAg7fQU6AHMfCKik5L1M7ziktjzS-KZCsoUAN08ihhLynyDvJ3CWfQg0AA8cN0Iib0WGGyIGSgxC7P95CABeVBz8NACAcjWNmwgcbIhROgBCE7CTu6eIE5xk2yi0E-iIYDASZTDZ4NRyfIsCDkQpnda2K43T7fWSPBaLUb-ABqCjQyQgbAgAHE9AAJLjkABcECYDAYGBslMBywyADoAFY2VnjMrAWBwMAgYAmUAQAD6EslUslEAAmiwuBMAMIsOSFUloG7S7USiBCkznQp+XLHILAtR0OSXYqlMphKoqaYWq19AZ2iBxc2eF028r-fZCSgikDinXSj22BgQJU4GwIsPh-UKDTjKOGiAAbwgAFEAI5cIxhbMgtBgiAAX1ukRUJ34hsQGSM7nKtmAXHsWBsJwN8IgeFjCP2AG0iMXQQwAnmC1gAsajqdhCwWORrm8Tiv9GvFyw-s9t9u-vEQqOS2DJ-mjLPDoEXkuNxu1w+90vd+993fV-Ejyfx+fp1ftgXD99Cfd4txfI832Ah8v2PKAx1LCcp0vOcb23e9V2eUCTlfW9l0-b94NPJCLxnVDjjwjDNywwxwJ3SDKOuGDCJzYi-xQ68KLXbiGMPY8AF1g1DBNdW4fQCgmII1AZYSRL1YVQCIf4giYa5CkoBUJhsFgsHbBw6EZGk6QZJlgBZJgOS5Hk+XgYAhBsL59CUiAcTxIodL0thDNpelGWZGw2U5bl9F5flgG03T7C85yAFlxkKJVVKwZsylsakfJM-zAqskLBWFIA)

<br/>

## 정답 풀이

```ts
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer V}${From}${infer R}`
  ? `${V}${To}${R}`
  : S;
```

- 제네릭으로 들어온 `From`이 빈 스트링일 경우엔 그대로 `S`를 반환
- 그렇지 않다면 S의 구조를 `From`을 기준으로 앞뒤로 구분하여서 From의 앞인 `V`는 그대로 앞쪽에, From의 위치엔 제네릭으로 받은 `To`로 치환
  - 만약 위같은 구조가 아니라면 이 경우에도 `S`반환

### 궁금증

**`From extends '' ? S : ~~` 세팅 이유**

이 세팅을 하지 않으면 From으로 `''`이 들어왔을 때가 대비되지 않음

<br/>

### Reference

- [typechallenges - 문제 해답(issues#407)](https://github.com/type-challenges/type-challenges/issues/407)
