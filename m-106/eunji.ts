type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S;

  
  /* 
- S extends ${' ' | '\n' | '\t'}${infer R}`:
  - 입력 문자열 S가 ' ', '\n', 또는 '\t'로 시작하는지 확인합니다.
  - 만약 시작하면, 문자열 S를 R 이후의 부분으로 분리합니다.
  - infer 키워드를 사용하여 분리한 부분을 R에 할당합니다.
- TrimLeft<R>:
  - 재귀적으로 R에 대해 TrimLeft를 호출합니다.
  - 이를 통해 문자열의 왼쪽에서 공백 문자를 계속 잘라내는 작업을 반복합니다.
- : S:
  - S가 ' ', '\n', 또는 '\t'로 시작하지 않는 경우, 입력 문자열 S 자체를 반환합니다.
  
  */
