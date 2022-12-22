import { TodoInput } from "./Todo/TodoInput";
import { TodoList } from "./Todo/TodoList";
import styles from "./App.module.css";
import { action, autorun, observable, reaction, runInAction } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "./stores";

const App = () => {
  const { todos } = useStore();

  useEffect(() => {
    const disposeReaction = reaction(
      () => {
        return {
          length: todos.list.length,
          unfinishedTodos: todos.unfinishedTodos,
        };
      },
      (newValue, oldValue) => {
        console.log({ newValue, oldValue });
      },
      {
        delay: 2000,
        onError: (err) => console.log(err.message),
      }
    );

    return () => {
      disposeReaction();
    };
  }, []);

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
