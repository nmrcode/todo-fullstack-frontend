import { FC } from "react";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col gap-5 px-2">
        <TodoForm />
        <h2 className="text-lg font-semibold">Новые дела</h2>
        <TodoList />
      </main>
    </>
  );
};

export default App;
