import TodoStore from "../../stores/TodoStore";

export const TodoList = ({ todos }: { todos: TodoStore }) => {
  return (
    <ul>
      {todos.list.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
