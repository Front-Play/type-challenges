//  배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

//  1. 인덱스로 접근하면 간단하게 해결된다고 생각
//  Expect<Equal<First<[]>, never>> 타입 케이스 never 에서 에러발생
// type First<T extends any[]> =  T[0]

type First<T extends any[]> = T extends [] ? never : T[0];

// infer 을 사용하려고 했지만, infer 은 추론? 하는데 사용한다고 합니다.
