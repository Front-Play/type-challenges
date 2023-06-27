## medium난이도 - TypeChallenges 527번: Append to object

[💻문제 보기](https://www.typescriptlang.org/play?#code/PQKgUABBCsBMDsEC0ECCAHdBTAdgEwgBcB7CYgIwCssBjQyZJJ5h8gTzXwCcsOBpLgEMAzsQBuwgNYcAFAAFyPAMwAGSUIBsAThrCAlBADEgF57ArYtGK1Okkm9hYBoacRAE5OAObodRAPxOAW0cAjkxCAHuOADIuAGcuALuOAJUOAC6MQgBMDgDodgC1jEIAiq4A7LYA+nRCAKbOAADWAOqtkVLSEEIADC4Ch44Ai4xCANrWAIGuAGquAHIOAKWMAdBDhFZWAAuMQLRCAODWAGuNBgAnj2YDYPYCtQ4ATTYAnTR2eEIAQY4A7QwBcqwAG+4T2UIRs2BAAKljCZQC8EADeEACWeFsQAOQAjO8QAL4MJzOACUrgBXAA2tzQmFweHOxAA8iU6AAeS7XAA0HzEgnBoKw7yxABYAHwQYDACBYAAe2DoWAIJAg5CwD2erw+3yxOLxWDeRL+DH2u1WZIA4k9CAAJUHkaKAHEGIMZAAx1bwAFoRCOhhFsKYcaGqOpRhB1iFwAObAODwYCSYhgEDABygCAAfXdHs9HoggBvR5WxQAq8+kIJVAKQdbq9kddEEdDkBrIw2Hw8KRVkIaKxAFUsQA1Ml3QQ4NjOkARqOeiCAGUXIoAOpYggAB5qJl8vumNOp4AW3QZrK8bZAFEAI6g3FY-u00p-CAAMy4xA7Hzk8aQBtx4Nw5quwFBhCe4OE7zjp1ZhCuhE+EDu9wYtjYb3eNEEhEPUB5+Pv5p4uEP-zAfdP1zjnS56Xg8N68Pej7Pgwb58h8n5YN+DBqvOcHkMQxDroWYC-v+Z6wKB15QLe954MQ5o-AAPhAoL4Fg05PDgDIwbi74fAA7mqkoEgwwi0W8hBcPiOFHmcAGEEBpQEVe4F3h8ZEURA1G0Xg9GMcxr6sXB7ycdxL4QHxOACUJWDIahbyfCJf7HkQZ5KIRsmQcQ7H6bB95sFg4Lgs5+mGW8064sIpm4TZ4mSXQ9kycREEfDQPksby7med5Lm8fxM6BaZUAdhhRkZfurLKXRDFMXgVl9o+QXCKBADaDDhemQ4juCKKJrCKbIum4mfFi7woR2BJYuhmFYIWJJYmFE50J8JLjfVU2NcOuKtTCyaIp1KLibAvX9YNEAzRNZ4NbAs0YvNwEok1y1tWtqalJtdm9TlxA4IS+VBUpNHFepeDjbZgELUop1gAAuiWzYthAiyADLjECABdNgAjNRD5ZtmAoAMGSgCoE4Ar00QIArzWAATjTSqhAGpajqerCAaRommalrWsAhbCOxWBcLa9pQFjuMquqmrarqwD6oaxqmhaVoIMAoh4ruL1HBAZKLIAHp0QG4gA4E4AJy28+TAtCzTouWnaDpOkAA)

<br/>

## 내 접근

```ts
type AppendToObject<T, U, V> = T extends {} ? {[P in keyof T]: T[P]} & {U:V} : never
```

- `T`가 객체 형태를 띤다는 걸 설정하기 위해 빈 객체를 extends 확장
- 만약 `T`가 객체 형태라면 `P in keyof T`를 이용해 `T` 객체를 그대로 가져오고, `{U: V}`형태의 객체를 또 만든 다음 `&`(intersection type)를 이용해서 합치고자 함
  - 그런데 `{U: V}`가 의도한 대로 인식이 되지 않음

<br/>

## 정답 풀이

```ts
type AppendToObject<T, U extends keyof any, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
```

- `U`를 `extends keyof any`로 확장
  - 이것이 키 포인트로써, extends keyof any를 하게 되면 any를 확장하지만 keyof 연산자를 통해서 key를 지닐 수 있는 `string | number | symbol`로 제한 설정
  - 그래서 keyof any대신 바로 `extends string | number | symbol`를 해도 됨
- 그리고 `K in keyof T | U`를 통해 T의 key값과 U가 모두 key가 될 수 있도록 함
- value는 다시 삼항 연산자를 실행해서 만약 `K`가 **T의 key값을 가져온 경우**라면 `T[K]`로 value를 설정하고, **그게 아니라면 U가 key이니** `V`를 value로 갖도록 함

<br/>

### Reference

- [typechallenges - 문제 해답(issues#536)](https://github.com/type-challenges/type-challenges/issues/536)
