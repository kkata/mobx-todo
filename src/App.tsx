import { TodoInput } from "./Todo/TodoInput";
import { TodoList } from "./Todo/TodoList";
import styles from "./App.module.css";
import { observable } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";

const App = () => {
  const appUI = useLocalObservable(() => ({
    todoVisible: true,
    toggleTodoVisibility() {
      appUI.todoVisible = !appUI.todoVisible;
    },
  }));

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
