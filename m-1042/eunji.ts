// [T]는 T를 단일 요소로 가지는 tuple 타입을 나타냅니다
type IsNever<T> = [T] extends [never] ? true : false;
