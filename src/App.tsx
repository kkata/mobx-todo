import { TodoInput } from "./Todo/TodoInput";
import { TodoList } from "./Todo/TodoList";
import styles from "./App.module.css";
import {
  action,
  autorun,
  observable,
  reaction,
  runInAction,
  toJS,
  when,
} from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useEffect } from "react";
import store, { useStore } from "./stores";

const App = observer(({ todos }: { todos: typeof store.todos }) => {
  // useEffect(() => {
  //   const promiseWhen = when(() => !appUI.todoVisible);

  //   promiseWhen.then(() => {
  //     console.log("clean up");
  //   });
  // }, []);

  const appUI = useLocalObservable(() => ({
    todoVisible: true,
    loading: false,

    toggleTodoVisibility() {
      this.todoVisible = !this.todoVisible;
    },
  }));

  // debugging kind of things
  // console.log(JSON.parse(JSON.stringify(todos.list)));
  console.log(toJS(todos.list)); // This is expensive and should only ever be used when really needed

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
});

const AppWrapper = () => {
  const { todos } = useStore();

  return <App todos={todos} />;
};

export { App };
export default AppWrapper;
