## medium난이도 - TypeChallenges 15번: Last of Array

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCMCsEFoIBkCGBnALhA9gMwgEEAnY1AT0kQRtqoCNyiA7TACx2aYDEBXCABQABVKzy8AlBADEAWwCmAEwCWvWTNSkKYKtL0QAir3lZlnHVAB8EACrkADvIDKAY2LL72ACwA6AAwQyugQxPIuOLIKzIpKgcwQ7EEQLmyoADZp8swA5vIWEACSsvaZUdioELnM8u4uEAAGaFgAPDaW9Qmp2JioANYmEKJEWkz1Nh2iiiHymLzEzMHKmMFpGNjypVmYPvncOMQQ8gAeqMWZ+fWXy1SYDvKDpNAQALwQANoA5KgfADQQH-Rfv8XB8ALo3O4PYgAJhe7wAzH9oX9oOCIY4EqhlGknq8mphmppiNBrMBgIcjo4XJhYpgcBB6PcPiD0fcetjYXi1oTSNDSeTjlSaVM6Qz7tAqJd6vlrAA1ZTyADuuHiAHElgAJXj0ABcEDYmEw9nQOrJyxSPgAVugfPtssA4GAQMAdKAIAB9T1e71eiAATRwcwgAGEcDEIBqavcfTHPRBnTpbhj8a0KTTosFROQ3qDrK8s66QB7Yz7bCZsMGMAMS6WE8pivtupCAN4QACiAEdeOk-m3KWFsABfCB4YgRf5CJPyBApdKZHImYC8TDY9AfROQlxV4KvN5UPtC5qd7tpZopt7Q3NIyyWH77-vUo9d9Jn7lvREQZEwK8wG93qAHgOT4nq+LRvAIUjPNY0DQh+raoHqWDuDkECDj+8GIZgyHZKhf5gGibo1t6EB8MQ7A1BATg0saxZEe68YuqAVDWE4qShBA5CBgc6A4Gky5mAseoGkaJpmugFrWraxD2nAwCiOgio1MxEDykqEA8XxK6cCa+qGsaprAOabBWjadoOrAwAafx2nKQAsvs9zBqkGRZLkOnCfpYkSaZ0lOi6QA)

<br/>

## 내 접근

```ts
type Last<T extends any[]> = [T[0], ...T];
```

배열의 마지막 요소를 지정할 수 있으면 될 것 같은데 그 방법을 못 떠올림

<br/>

## 정답 풀이

```ts
type Last<T extends any[]> = [any, ...T][T["length"]];
```

- `T["length"]`를 통해서 마지막 index를 지정

<br/>

### Reference

- [typechallenges - 문제 해답(issues#100)](https://github.com/type-challenges/type-challenges/issues/100)
