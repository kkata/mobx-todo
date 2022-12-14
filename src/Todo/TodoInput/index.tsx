import { useState } from "react";
import TodoStore from "../../stores/TodoStore";

export const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleButtonClick = () => {
    todos.add(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}></button>
    </>
  );
};
