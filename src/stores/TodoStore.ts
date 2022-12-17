import { makeAutoObservable } from "mobx";

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

const TodoStore = () =>
  makeAutoObservable({
    list: [] as Todo[],

    add(title: string) {
      if (title.length < 3) {
        return;
      }

      this.list.push({
        id: this.list.length,
        title,
        isDone: false,
      });
    },

    toggle(todo: Todo) {
      todo.isDone = !todo.isDone;
    },

    remove(todo: Todo) {
      this.list = this.list.filter((t) => t.id !== todo.id);
    },
  });

export default TodoStore;
