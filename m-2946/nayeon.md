<!-- 2946 -->

### 2946

```ts
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>;
// ['name', string] | ['age', number] | ['locations', string[] | null];
```
