## medium난이도 - TypeChallenges 108번: Trim

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCMAMAcEC0EAqAnAlgW0spBheARgJ4QCCAdgC4AWA9leQGICuEAFAAICGtAMzYBKCAGJsAUwAmmNtnE1J2AA4AbXkqRrMS9LzVg8YkxACKbSQGcamJkagBJVWuWTaEAAYYcAHlQAfJ4QAO50mADGdBA0vADW1hD8EJIAHrwRNBA2WFQA5jGkKpJJVNIQ6JI0bOhUVkkQVJIh2TS5BSG60fQlYbrWKhklAugMCsQM9Cll9ZXYDABuMgB0DhAsDOgp6S6Sa54HNFZ4NEUlbThS5QC8aFjYvgDkUAASkmpqDBAA6ptq5RBHgEIMBgNtipkZDEvsQSo83h8vr90P9HngDp41sCAGqYZoQJgQADiuhebGIAC4IHQaDQVFYKaCjlFlgArKzLTZ5YBweBgEDAIygCAAfTF4ol4ogAE0GDUIABhBjSEpvSqiyWakUQAVGU7FO5+ADK2yUM1a7WBt34pCFIA1WolaGsWQVvCsiUdkp1gpwKk2WX1JQA3hAAKIARzYBgANOHUhCsgBfCAjMaA7hBpBRAyufLWYBsWxqKxosBBiARd2JW4AbTwYYTkkyvkj0bU-nuTxyQLjjx7AQCMYbTZbbYMnb8zwHfYHQ5HidbUYnPgezygUBngLnw6gjcX447q+7bQ3ve3bSB873o5oS-bk7XG83p+f5-7l8Hu-jB+XR6764QAAOlQQFZAIDAwrwWxge+EFQegV7fvuzZ3oej5PO+SELqh94rgBwGgVkWFfmAAC6doOl62rsOgPRbEaSj0lRXo+mAoB4MCRp0NBJSkHKWxWAwahFnYdRUjSdIMkyVgsuynLoNyvLAPwVghJI6CcRAuL4kJIm2EwDLUrS9KMsAzJ0GyHJcjyCDAHpomGVpACymwlAqPEfO4eTWBJJnSeZsmWfJXL8oKQA)

<br/>

## 내 접근

```ts
type Space = ' ' | '\t' | '\n';

type Trim<S extends string> = S extends `${Space}${infer T}${Space}` ? Trim<T> : S;
```

- 이전 문제인 `Trim Left`를 참고하여 진행
  - 그런데 몇가지 test case를 통과 못함

<br/>

## 정답 풀이

```ts
type Space = ' ' | '\t' | '\n';

type Trim<S extends string> = S extends `${Space}${infer T}` | `${infer T}${Space}` ? Trim<T> : S;
```

- `Space`가 앞에 있는 경우와 뒤에 있는 경우를 나눈 뒤에 다시 유니온 타입으로 묶어서 extends시킴

<br/>

### Reference

- [typechallenges - 문제 해답(issues#481)](https://github.com/type-challenges/type-challenges/issues/481)
