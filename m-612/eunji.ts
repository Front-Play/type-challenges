// Uncapitalize<StringType> : 문자열의 첫 문자를 소문자로 변환합니다.
type KebabCase<S> = S extends `${infer A}${infer B}` 
  ? B extends Uncapitalize<B>
  ? `${Uncapitalize<A>}${KebabCase<B>}`
  : `${Uncapitalize<A>}-${KebabCase<B>}`
  : S;
