<!-- 612 -->

type KebabCase<T extends string, K extends string = ''> = T extends `${infer S}${infer R}` ?
S extends Lowercase<S> ? `${S}${KebabCase<R, S>}` : `${K extends '' ? '' : '-'}${Lowercase<S>}${KebabCase<R, S>}`
: T;
