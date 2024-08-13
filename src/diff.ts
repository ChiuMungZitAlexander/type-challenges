type Diff<O extends {}, O1 extends {}> = {
  [key in
    | Exclude<keyof O, keyof O1>
    | Exclude<keyof O1, keyof O>]: key extends keyof O
    ? O[key]
    : key extends keyof O1
    ? O1[key]
    : never;
};

import type { Equal, Expect } from "@type-challenges/utils";

type a = Diff<Foo, Bar>;

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
