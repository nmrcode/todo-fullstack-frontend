import { FC } from "react";
import s from "./TodoItem.module.scss";
import classNames from "classnames";
import { ITodo } from "../../types/ITodo";
import { todoAPI } from "../../services/todo.service";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { id, completed, title } = todo;
  const [deleteTodo] = todoAPI.useDeleteTodoMutation();
  const [toggleTodo] = todoAPI.useToggleTodoMutation();

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
  };

  const handleToggle = async (todo: any) => {
    await toggleTodo(todo);
  };

  return (
    <>
      <div className={s.wrapper}>
        <span>{title}</span>
        <div className={s.buttons}>
          <button type="button" className={classNames(s.button)}>
            Изменить
          </button>
          <button
            type="button"
            className={classNames(
              s.button,
              !completed ? s.button__success : s.button__info
            )}
            onClick={() => handleToggle(todo)}
          >
            {!completed ? "Выполнить" : "Отменить"}
          </button>
          <button
            type="button"
            className={classNames(s.button, s.button__danger)}
            onClick={() => handleDelete(id)}
          >
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
