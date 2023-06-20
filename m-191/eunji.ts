type AppendArgument<Fn  extends Function, A> = Fn extends (...args: infer S) => infer R ?  (...args: [...S, A]) => R : never
