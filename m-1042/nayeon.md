<!-- 1042 -->

type All<T extends any[], N> = T[number] extends N ? true : false;
