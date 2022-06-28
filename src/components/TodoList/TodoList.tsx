import { FC } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { todoAPI } from "../../services/todo.service";
import { ITodo } from "../../types/ITodo";

const TodoList: FC<any> = ({ data, isError }) => {
  if (isError) return <h1>Что-то не так с сервером</h1>;

  return (
    <ul className="flex flex-col gap-2">
      {data.map((todo: ITodo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
