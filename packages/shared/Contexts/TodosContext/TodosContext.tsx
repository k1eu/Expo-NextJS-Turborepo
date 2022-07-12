import * as React from "react";

// import { TodoItem } from "./types";

type TodoItem = {};

type TodosContextType = {
  todos: TodoItem[];
  addTodo: (todo: TodoItem) => void;
  removeTodo: (id: number) => void;
};

const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodosProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [todos, setTodos] = React.useState<TodoItem[]>([]);

  const addTodo = (todo: Omit<TodoItem, "id">) => {
    setTodos([...todos, { ...todo, id: todos[-1]?.id + 1 || 1 }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => React.useContext(TodosContext);
