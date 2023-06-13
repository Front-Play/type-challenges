## medium난이도 - TypeChallenges 119번: Replace All

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCM0JwQLQQEoFMAOAbAhgYzQEEstIlELKyAjATwkIDsAXACwHtH6AxAVwgAUAARwsAZrwCUEAMQBbNABMAlrzmzmaOdhybEWZZoBOOUmRkWIARV5oAzs2WcwZAJLasWtCwgADdDoExFgAPADKADQQ3EbsclEAKuwAfL4QAO6synisEEaYuAQQbGgQpljFrKV2vNQORsqMAOZ+MXFp6Ya5vklpjZWlTcoAbt4Q9Y0tvmG+LlDc7EYQaAAeOB5oc36+vsx2ZMy0GKX5gUoQALyoBfhEJCEA5MwQ9BjL4w9RDxCfPw-JEGAwGWK2OeE0imK7Ag1FKTyO9geZB2szIAIAaso0OkIJwIABxQwACVqAC4IKxmMwMHZSUC9jkAHQAKzsjMWTWAsDgYBAwBcoAgAH0RaKxaKIABNdi8JYAYXYilKRLQ+WF4o1QogfJch2O1zOwXCIM0jEUdnGzAazSibXUq1N5st1qaiWhDu8TomzQBV1EtAFIHVmrFEAS9mecpwdnswZDIu1-OU2kWzz1pQA3hAAKIAR14pii2dBaHBEAAvhAxLF1A8hOnEDlyt4mvZgLxHFg7EiwOmIHho7GrgBtMjFsHMEJ5guhAKFO6hB5idjsag4Iy-B5rjdfZfsf67ld7-7JCJjkvgqf50whOe3I1Llfbzdrpqb4+nn575-JU-nidXjOt43EE9yPqu67Pl8UFfiuB6wewe4fn+UDjqWk7Tjed6gYuzyvO83ZfD8XzwfCxzdr+Z6oReGHXrOIELo836Qeum7vnBn7gduP4oTmNGAVhDEPtux7Qaxh77pxSEcbxaGXph9GGmBzFGCpm6ri+pHLiJEEbpR-7oQJinzg+2krqpq7sOJPzUPu0FaZZFk8VRfEAQpwFKYubEkZxJ5ngAuoGcbxtEsolEsYSaDSwUhomYCgGiEBhKw66lLQMpLHY7BYB2TiMLSFJUjSdLAAyrAsmyHJcvAwCiHY6SqolmLYuM2W5ZwBWUtStL0nYTKsuyRictywBZTljgdYlACyiylHKKUkC29jkl1xW9f1lVDby-JAA)

<br/>

## 내 접근

```ts
type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends '' ? S :
```

- 바로 직전 문제처럼 `From extends '' ? S : ~~`의 경우를 세팅하며 접근
- 이 이후에 `:`뒤를 어떻게 작성해야 할까?

<br/>

## 정답 풀이

```ts
type ReplaceAll<S extends string, From extends string, To extends string > =
  From extends ''
  ? S
  : S extends `${infer R1}${From}${infer R2}`
    ? `${R1}${To}${ReplaceAll<R2, From, To>}`
    : S
```

- 재귀적 접근을 통해서 `R2`값을 다시 ReplaceAll 실행

<br/>

### Reference

- [typechallenges - 문제 해답(issues#367)](https://github.com/type-challenges/type-challenges/issues/367)
