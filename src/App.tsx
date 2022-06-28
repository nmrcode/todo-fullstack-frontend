import { FC } from "react";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { todoAPI } from "./services/todo.service";

const App: FC = () => {
  const { data = [], isError } = todoAPI.useFetchAllTodosQuery();

  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col gap-5 px-2">
        <TodoForm />
        <h2 className="text-lg font-semibold">Новые дела</h2>
        <TodoList data={data} isError={isError} />
      </main>
    </>
  );
};

export default App;
