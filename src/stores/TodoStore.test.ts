import TodoStore from "./TodoStore";

let todos = TodoStore();

describe("TodoStore", () => {
  beforeEach(() => {
    todos = TodoStore();
  });

  it("adds todos", () => {
    todos.add("My Todo");

    expect(todos.list.length).toBe(1);
    expect(todos.list.find((todo) => todo.title === "My Todo")).toBeDefined();
  });

  it("removes a todos", () => {
    todos.add("My Todo");

    todos.remove(todos.list[0]);

    expect(todos.list.length).toBe(0);
  });

  it("toggles a todo", () => {
    todos.add("My Todo");

    todos.toggle(todos.list[0]);

    expect(todos.list[0].isDone).toBe(true);
    expect(todos.unfinishedTodos.length).toBe(0);
  });

  it("has unfinished todos", () => {
    todos.add("My Todo");

    expect(todos.unfinishedTodos.length).toBe(1);
  });

  it("cannot add an empty todo", () => {
    todos.add("");

    expect(todos.list.length).toBe(0);
  });

  it("cannnot add a todo with less than 3 characters", () => {
    todos.add("ab");

    expect(todos.list.length).toBe(0);
  });

  it("can add a todo with at least 3 characters", () => {
    todos.add("abc");

    expect(todos.list.length).toBe(1);
  });
});
