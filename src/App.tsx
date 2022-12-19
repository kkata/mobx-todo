import { TodoInput } from "./Todo/TodoInput";
import { TodoList } from "./Todo/TodoList";
import styles from "./App.module.css";
import { action, observable, runInAction } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useEffect } from "react";

const App = () => {
  const appUI = useLocalObservable(() => ({
    todoVisible: true,
    loading: false,

    *toggleTodoVisibility() {
      this.loading = true;

      yield new Promise((resolve) => setTimeout(() => resolve(void 0), 1000));

      this.loading = false;
      this.todoVisible = !this.todoVisible;

      // new Promise((resolve) => setTimeout(() => resolve(void 0), 1000)).then(
      //   () =>
      //     runInAction(() => {
      //       this.loading = false;
      //       appUI.todoVisible = !appUI.todoVisible;
      //     })
      // );

      // new Promise((resolve) => setTimeout(() => resolve(void 0), 1000)).then(
      //   action(() => {
      //     this.loading = false;
      //     appUI.todoVisible = !appUI.todoVisible;
      //   })
      // );
    },
  }));

  // useEffect(() => {
  //   console.log({ loading: appUI.loading });
  // }, [appUI.loading]);

  // MobX  state hook like
  // const todosVisible = observable.box(true);
  // todosVisible.observe_(({ newValue }) => {
  //   console.log("the new value is", newValue);
  // });
  // todosVisible.set(false);
  // todosVisible.set(true);

  return (
    <div className="App">
      <TodoInput />
      <div className={styles["todo-list-wrapper"]}>
        {String(appUI.loading)}
        <h2 onClick={appUI.toggleTodoVisibility}>
          <span>{appUI.todoVisible ? "-" : "+"}</span>
          Todos
        </h2>
        {appUI.todoVisible && <TodoList />}
      </div>
    </div>
  );
};

export default observer(App);
