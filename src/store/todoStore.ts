import { create } from "zustand";

export interface Todo {
  todo: {
    id: any;
    text: string;
    completed: boolean;
  };
}
interface Todos {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (id: any) => void;
  updateStatus: (id: any, value: boolean) => void;
}

export const useTodoStore = create<Todos>((set) => ({
  todos: [],
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...state.todos, newTodo],
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.todo.id !== id),
    })),
  updateStatus: (id, value: boolean) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.todo.id === id
          ? { ...todo, todo: { ...todo.todo, completed: value } }
          : todo
      ),
    })),
}));
