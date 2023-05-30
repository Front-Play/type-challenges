type Includes<T extends readonly any[], U> = T extends [infer First, ... infer Rest] ?
  Equal<U, First> extends true ? true : Includes<Rest, U> : false;
