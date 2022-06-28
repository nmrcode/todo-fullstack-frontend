import { FC } from "react";
import s from "./TodoItem.module.scss";
import classNames from "classnames";

interface TodoItemProps {}

const TodoItem: FC<TodoItemProps> = () => {
  return (
    <>
      <div className={s.wrapper}>
        <span>Text</span>
        <div className={s.buttons}>
          <button type="button" className={classNames(s.button)}>
            Изменить
          </button>
          <button
            type="button"
            className={classNames(s.button, s.button__success)}
          >
            Выполнить
          </button>
          <button
            type="button"
            className={classNames(s.button, s.button__danger)}
          >
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
