// T의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 Readonly<T>를 이를 사용하지 않고 구현

// 오답
type MyReadonlyIncorrect<T> = {
  readonly [k in T]: T[k];
};

// 정답
type MyReadonlyCorrect<T> = {
  readonly [k in keyof T]: T[k];
};
