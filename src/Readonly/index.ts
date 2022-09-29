interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
