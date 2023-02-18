type TupleToNestedObject<T extends (string | number)[], U> = T extends [
  infer First extends string | number,
  ...infer Rest extends (string | number)[]
]
  ? { [key in First]: TupleToNestedObject<Rest, U> }
  : U;

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];
