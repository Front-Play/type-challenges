// 마지막 요소 제외하고 추출
type Pop<T extends any[]> = T extends [...infer I, infer L] ? I : never
