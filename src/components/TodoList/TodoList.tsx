import { FC } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TransitionGroup } from "react-transition-group";

const TodoList: FC = () => {
  return (
    <TransitionGroup component="ul" className="flex flex-col gap-3">
      <li>
        <TodoItem />
      </li>
      <li>
        <TodoItem />
      </li>
      <li>
        <TodoItem />
      </li>
    </TransitionGroup>
  );
};

export default TodoList;
