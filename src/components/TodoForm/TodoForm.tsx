import { FC } from "react";
import s from "./TodoForm.module.scss";
interface TodoFormProps {}

const TodoForm: FC<TodoFormProps> = () => {
  return (
    <form className={s.form}>
      <label htmlFor="" className={s.label}>
        Введите текст задачи
      </label>
      <div className={s.wrapper}>
        <input
          type="text"
          id="rounded-email"
          className={s.input}
          placeholder="Текст задачи..."
        />
        <button type="button" className={s.button}>
          Создать
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
