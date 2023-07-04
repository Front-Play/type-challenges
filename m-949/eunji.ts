type False = 0 | '' | false | [] | null | undefined | { [key: string]: never };

type AnyOf<T extends readonly any[]> =  T extends False[] ? false : true
