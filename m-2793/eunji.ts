// readonly 없애라
type Mutable<T> =  {
  -readonly [P in keyof T]: T[P];
};
