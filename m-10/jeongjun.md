## medium난이도 - TypeChallenges 10번: Tuple to Union

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCMAMEFoIBUCuAHANgUwgFwHsIBVAOwEsDTJEE76aAjATwgEFS8ALK1gMVQQAFAAEAhpwBmqAJQQAxAFtsAE3KpFC8qUnYATgrwYcC1BSpga86xACKqbAGc8lajQCSirNmWcIYiABzbFJ9cgBjCAADNG9kAjJXAB5kAD4oiAB3LgiuCHCCADd9R3wuXEKxTAdSgkl-fGNcQghyPFLK6qcIM1cAOksoPgIDbAAPMS8cQeioqPaaPGZ0XDY9AwBeCABtAHJoXYAaCF2AJiOTgGZdgF0ZpZWUJzwILdiceMSqJLW9VIhgMAIOMVuE8Kp8ERGLh9rsIAAfE7nBFXXY0OZRGb-ABq5GwmQgVAgAHE2gAJVCMABcEC4eDw6EcVMB7XCXD6ACtHH0RoFgHAwCBgJZQBAAPoSyVSyUQACaBFQBgAwgQVLgyfpcNLtRKIELLA9cO9sJ9zKQUv8thJmCKQOKddKns4IEqxI5ug7HfryF4Ri9DRAAN4QACiAEdUFVjiGxqCXgBfCCSPQETS7ESGhBsqo4UjBRzAVAuTCONFgAPhN3dLbbGgxuNJcORzApJqm5LbaCnS7HXYAFgArAA2C54PQOG6pY5dy4o-vDuGIscOVJTuux7BgxsRqqtuIJM1JTvdyfT7urw5gO5gUWeqUQAR6bj6CAAZXBjPtd7FeuFoBo-yvlwYh6LgzAKgYjgENULhUEytL0oyzLAKy7Jcjyeh8nAwASI4mT6ABEC4viEBQTBrjwXSDJMiyjhspy3K8vysDAGRRYUYRACyIy4EqwGYLm+Y0lRSG0fR6G8oKwpAA)

<br/>

## 내 풀이

```ts
type TupleToUnion<T extends readonly any[]> = T[number];
```

- `readonly any[]`를 통해 `T`가 튜플이 되도록 제한
- `T[number]`로 배열의 각 값을 가져옴
