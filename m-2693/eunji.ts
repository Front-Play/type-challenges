type EndsWith<T extends string, U extends string> = T extends `${infer A}${U}` ? true : false;
