type MyAwaited<T extends PromiseLike<any | PromiseLike<any>>> =
  T extends PromiseLike<infer V>
    ? V extends PromiseLike<any>
      ? MyAwaited<V>
      : V
    : never
