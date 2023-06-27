type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer F}${infer L}` ? LengthOfString<L, [...T, F]> : T['length']
