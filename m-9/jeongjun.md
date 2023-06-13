## medium난이도 - TypeChallenges 9번: Deep Readonly

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCcELQQCIFNkAcICVkEMAmA9gHYA2AnpPHNTZQEZkQCCRALgBbGMBiArhAAoAAjjYAzXgEoIAYgC2yPAEtec2QCdchUoxkE6AK2QBjVnADWyMgGdZeVGjCUZLiAEVeya6yXEnUAEk5NBJkBTYIHAgAc2QiZHUlYwgAAxR0bHxicgAeABUAPhSIAHd2JPYIORxLCGQANwTGNBx1HAVWBIgCMUiibsMTVng+vAglVltrXjo4fSNTW01jXnVrJUbyEc0snQA6fwgATQJ+Y1FI62mFCA4cYZLkSM1unQh7HBIlImjSicqAPKDRbjfocJS2YzsT6hH7IPbMdRtGwAGggfCIpl8RGsaIAwiQcFcvKMINYCK93hSiARhvFFLcKXQnqwanFQawKcZiOt7G0fMQEQAJAiPRrqNFkU4Qc79bxKEgkGXQxVxWIQKWrazIEi9Bgygji76-IlVUSMZRiMQJOLDc7a2ymtAEK5KOihA6UbgEdR1AAe7RCyAAXIcUuHJpRWGQ0E8ABoQAC8EAA3pQoH7g6n01BIlmAIw5qB0LMAcnKpZzAF8c2Qy+wrJWoDWozGngBRP2x0wM5Np3MQHbaLaZ7MDqBD7KMHAFouDrRTiAliDlpRN3M1geTt51lcNsjrltQaOxiB5AiEJNIByZYdkHJxgoQYDAMmcXgkMbMsntJ6mlKdt2nR4CklDhqBlBPgAakoyAlJSADiExCjMWbsKwrBoNYwYvpMUJ7AY1h7D60TANAYAgMATigBAAD69EMYxDHHKcvp4heTxCjadFMbxtEQJRTgnk86RoLeU75E+ybmtRIA8XxjFnl4wx4kSJIKUxAlUUowQ+sMwmphA7YAI68J8aKAUMEBVhAYjqAQailkIwlwFCMJql4wC8D4JDWJWYAGfaJLJgA2pQlmmDkJlmSQOSieJOgPvmBQWV2QyKMlKXhWlkXRZ8cU3guiVxgATClRk5cBZVZQAukJbYQHG+ZXv2eaCNIiZPiVJX0Fm3iJD8lDGFmrVQHgWZ0AQBChKIOYhmO47RCNc5QOwy3juOShZqw6ieCtuYGGW-XGuuG2bhtEDmPWOokAQp0bnOJBZmFF17muKL7aNF1yM95aNnVr1Vh9G0Aw9zZgC2BmlS1bXHT81kQAAPoZy5EKozK+pDDURcBzV9pQ25bDO7VJl1PUTkVWzLnD0QE5TjDDQtFO7Fs41LlNM1EDmhOMPNX3M3eMTrRdPMQGtTMi-T4zbbtyD7QLi6HSuNP3QO50baLV17jdd1zuruai0984s4wL0XaupbAxd-PjqLP3G4LIV-QeoNnVbA6u9ZlA1ljp444oJUw6LxM0wjyMpg7i6o+jXQtjRGmKXw6gcF0ADKnRYfJCdaWAoCQRAqfQi8mq+uSJDedi2FixhWE4cAeHsARREkWRwCiNYjzqPnMFwWS00VzyaE19huHWPhhHEeopHQMAZcDzi+cALI+k8eIqrCsRV+hmEj-XY+NxPJEUVRQA)

<br/>

## 내 접근

```ts
type DeepReadonly<T> = { readonly [P in keyof T]: T[P] };
```

일단 1단계로 첫번째 `key: value` 값을 readonly로 설정
그런데 다시 value안에 있는 새로운 객체 or 배열의 값은 어떻게 readonly처리를 할까?

<br/>

## 정답 풀이

```ts
type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any>
    ? T[k] extends Function
      ? T[k]
      : DeepReadonly<T[k]>
    : T[k]
};
```

<br/>

### Reference

- [typechallenges - 문제 해답(issues#52)](https://github.com/type-challenges/type-challenges/issues/52)
