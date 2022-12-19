import { TodoInput } from "./Todo/TodoInput";
import { TodoList } from "./Todo/TodoList";
import styles from "./App.module.css";
import { action, observable, runInAction } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "./stores";

const App = () => {
  const { todos } = useStore();

  const appUI = useLocalObservable(() => ({
    todoVisible: true,
    loading: false,

    toggleTodoVisibility() {
      this.todoVisible = !this.todoVisible;
    },
  }));

  return (
    <div className="App">
      <TodoInput />
      <div className={styles["todo-list-wrapper"]}>
        <h2 onClick={appUI.toggleTodoVisibility}>
          <span>{appUI.todoVisible ? "-" : "+"}</span>
          Todos (unfinished {todos.unfinishedTodos.length})
        </h2>
        {appUI.todoVisible && <TodoList />}
      </div>
    </div>
  );
};

export default observer(App);
