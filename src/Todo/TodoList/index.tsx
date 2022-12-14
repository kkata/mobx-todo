import { observer } from "mobx-react-lite";
import TodoStore from "../../stores/TodoStore";

export const TodoList = observer(({ todos }: { todos: TodoStore }) => {
  return (
    <ul>
      {todos.list.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
});
