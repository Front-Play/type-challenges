type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer A}${infer B}` ? LengthOfString<B, [A, ...T]> : T['length'];
