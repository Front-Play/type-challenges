type Merge<F, S> = Omit<F, keyof S> & S
