import { TodoInput } from "./Todo/TodoInput";
import { TodoList } from "./Todo/TodoList";

const App = () => {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
