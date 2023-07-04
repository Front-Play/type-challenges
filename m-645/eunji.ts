// Omit<Type,Keys> : Type의 모든 프로퍼티를 선택하고 Keys를 제거한 타입을 생성합니다.
// keyof(O | O1) : O와 O1의 공통된 key를 반환한다. -> keyof (Foo | Bar) // "name" | "age" 
type Diff<O, O1> = Omit<O & O1, keyof(O | O1)>
