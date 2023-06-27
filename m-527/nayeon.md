type AppendToObject<T, U extends keyof any, V> = {
[K in keyof T | U]: K extends keyof T ? T[K] : V;
};

```
K 가 T의 key 라면 보존 or 아니라면 새로 V 할당
```
