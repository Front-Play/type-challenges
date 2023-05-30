// 배열(튜플)을 받아 길이를 반환하는 제네릭 Length<T>를 구현
// as const로 타입화 된 배열의 원소는 삭제, 수정 불가능

type Length<T extends readonly any[]> = T['length'];
