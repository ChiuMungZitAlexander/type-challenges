type TupleToUnion<T extends any[]> = T["length"] extends 0
  ? never
  : T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never;

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
