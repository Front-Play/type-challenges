type whitespace = ' ' | '\t' | '\n'
type TrimLeft<S extends string> = S extends `${whitespace}${infer K}` ? TrimLeft<K> : S
