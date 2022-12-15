import { useStore } from "../../stores";
import styles from "./TodoInput.module.css";

export const TodoInput = () => {
  const { todos } = useStore();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const value = String(formData.get("todo-input")) || "";
    todos.add(value);
    formElement.reset();
  };

  return (
    <form className={styles["todo-input-group"]} onSubmit={handleSubmit}>
      <input name="todo-input" placeholder="Add todo..." />
      <button type="submit">Add Todo</button>
    </form>
  );
};
