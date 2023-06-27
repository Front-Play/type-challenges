type Capitalize<S extends string> = S extends `${infer x}${infer tail}` ? `${Uppercase<x>}${tail}` : S;
