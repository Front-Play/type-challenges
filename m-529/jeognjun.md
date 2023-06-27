## medium난이도 - TypeChallenges 529번: Absolute

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCsBMCcEC0ECCAjAzgewDYFcAXAU0mSQsrPQE80A7AEwCdi6BpZgQxwDdMA1nQAUAAXSsAzAAYB3AGzwAxpgCUEAMQBbYowCW+LZq1dCAC00ktAB1yniSXHpLdcYMhs8QAivmKZCPWx6dygASRtcYh16QghzYggAAwwcAhIk+JprYgA6NCyc+LNTeK4BRIDmPXoAcwAaCHpDdGJmCGx29D1amsJ8gBUzROwiayIITDNR3EYIVoguCGtsTGc9XkTmrVb2qpra0IgAMU6IYgAPLkjSMiT7wkwyQmzEgf84gF5kAEZpaQA3M9XhAAEr+fC4L5oLB4IjEAA87wCAD4ARBgMBzhcckoSHNCNh5okAER-aQku73I4oiAANT0xAA7h16BAAOLOAAS+HQAC4IGZCIRrJg+ZjHkozLkAFaYXKdWrAODwMAgYDuUAQAD6ur1+r1EAAmqN2gBhbCMRJctqJA323UQdXuF5FVJwkhI7EkJiYJotNoQAA+k0I1TqwfmPT6tO+XHoNE1IB1DoNEGRcTNPH8KdThudehsnTirsSAG8IABRACO+C4uEalZxxDxEAAvhAAGbMbBGADkolLSCl9aidX8wCIelwmD7LpBSmzfu+AG0yE3cYQETW67gEe70ojpCjGn3pH2USf1828dva-X97DDwikMfT+fL-Vr5u77vH2l4QRP4TwgPs-gvK8oA3Fstx3B8D0ApBoBAvtoAgr8oJvWD7z3BDPTPC933Q78YN-eCn0AvtX0I0CP0gqssLI3CKPw8CULY+joNvODmIA-CkJo1DiMwn8eP-D1ESQH5tX+aQZP+eh2Nk2ThIY0ScPE594G1eBdMU09dN04iAF0k1zPNtROfBmASdoAGUSFFcy8ydDVQDIWk7JKVgIBoU1Jg9IJ6DFQVhVFcVgElaU5QVZglRVYB40wJk2g8+lGRZPigpCoURTFCVMClWV5UVZUEGALLgieKBaQAWU6RIzRKXAx1qfwBVy8KCqKmLFTVDUgA)

<br/>

## 내 접근

- 삼항 연산자로 경우를 쪼개서 작성하려 했는데 막힘

<br/>

## 정답 풀이

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`
```

- 리터럴 템플릿을 이용하여 `T`가 문자(string)일 경우와 숫자(number, bigint)일 경우 모두 연산 가능토록 하는 것이 포인트
- 그렇게 해서 만약 `${T}`가 `-${infer U}`를 확장(extends)하는 경우라면, 즉 `-`가 붙어있는 경우라면 `U`를 반환
  - 이때 `-`의 제거는 `infer`연산자를 이용해서 '-'가 제외된 `U`만 분리
- 그리고 위 경우가 아니라면, 즉 '-'가 붙은게 아니라면 그대로 다시 `T`를 반환

<br/>

>### Test Case에서 `-1_000_000n`에 대한 의문
>- `n`은 bigint를 의미한다고 이해가 되는데 `_`(언더바)는 무엇일까?
>
>#### numeric separators
>큰 숫자를 쓸 경우 가독성을 높이기 위해 사용할 수 있는 구분자이다.
>이를 이용하면 원하는 부분마다 숫자를 끊어서 표현할 수 있고, 이 그대로 숫자로 인식된다.
>- 이 때문에 `-1_000_000n` test case는 그대로 숫자로 인식되어서 `1000000`가 됨
>- 만약 이를 `''`로 깜싸서 스트링으로 만든다면(`'-1_000_000n'`) test case를 통과하지 못함

<br/>

### Reference

- [typechallenges - 문제 해답(issues#10386)](https://github.com/type-challenges/type-challenges/issues/10386)
- [MDN docs - Bigint](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [MDN docs > Misc > Lexical Grammer > Literals > Numeric Separators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
- [What are numeric separators?](https://writingjavascript.com/what-are-numeric-separators)