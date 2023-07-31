```ts
type DropChar<S, C> = S extends `${infer A}${infer B}` ?
                      `${A extends C ? "" : A}${DropChar<B, C>}` : ""
```

```ts
type DropChar<S, C> = S extends `${infer A}${infer B}`
  ? A extends C
    ? DropChar<B, C>
    : `${A}${DropChar<B, C>}`
  : S
```
