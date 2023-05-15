//배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현 🥲

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};
