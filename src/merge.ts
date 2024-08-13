type Merge<F extends {}, S extends {}> = {
  [key in keyof F | keyof S]: key extends keyof S
    ? S[key]
    : key extends keyof F
    ? F[key]
    : never;
};

import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];
