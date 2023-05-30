## [type-challenges] Pick

### 풀이

```
type MyPick<T, K extends keyof T> = {
  [key in K] :T[key]
}

```

### [설명](https://pottatt0.tistory.com/entry/type-challenges-Pick)
