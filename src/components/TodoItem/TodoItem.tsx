import { FC, useState } from "react";
import s from "./TodoItem.module.scss";
import classNames from "classnames";
import { ITodo } from "../../types/ITodo";
import { todoAPI } from "../../services/todo.service";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { id, completed, title } = todo;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTodoText, setEditedTodoText] = useState(title);
  const [deleteTodo] = todoAPI.useDeleteTodoMutation();
  const [toggleTodo] = todoAPI.useToggleTodoMutation();
  const [changeTodoTitle] = todoAPI.useChangeTodoTitleMutation();

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
  };

  const handleToggle = async (todo: any) => {
    await toggleTodo(todo);
  };

  const handleOnToggleEditing = async (todo: any) => {
    setIsEditing((prevState) => !prevState);
    if (editedTodoText !== title) {
      changeTodoTitle({ todo, editedTodoText });
    }
  };

  return (
    <>
      <div className={classNames(s.wrapper, completed && s.wrapper__completed)}>
        {!isEditing ? (
          <span>{title}</span>
        ) : (
          <input
            type="text"
            className="w-full border-b"
            value={editedTodoText}
            onChange={(e) => setEditedTodoText(e.target.value)}
          />
        )}
        <div className={s.buttons}>
          {!completed && (
            <button
              type="button"
              className={classNames(s.button)}
              onClick={() => handleOnToggleEditing(todo)}
            >
              {isEditing ? "Сохранить" : "Изменить"}
            </button>
          )}

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
