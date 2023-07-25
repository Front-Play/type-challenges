type DropChar<S, C> = S extends `${infer A}${infer B}` ?
                      `${A extends C ? "" : A}${DropChar<B, C>}` : ""
