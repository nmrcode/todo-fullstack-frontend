import { EventHandler, FC } from "react";
import s from "./TodoForm.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setTodoInputText } from "../../store/todo/todoSlice";
import { todoAPI } from "../../services/todo.service";
interface TodoFormProps {}

const TodoForm: FC<TodoFormProps> = () => {
  const { todoInputText } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const [addTodo] = todoAPI.useCreateTodoMutation();

  const handleCreate = async (text: string, e: any) => {
    e.preventDefault();
    if (text) {
      await addTodo(text);
      dispatch(setTodoInputText(""));
    }
  };

  return (
    <form className={s.form} onSubmit={(e) => handleCreate(todoInputText, e)}>
      <label htmlFor="" className={s.label}>
        Введите текст задачи
      </label>
      <div className={s.wrapper}>
        <input
          type="text"
          id="rounded-email"
          className={s.input}
          placeholder="Текст задачи..."
          value={todoInputText}
          onChange={(e) => dispatch(setTodoInputText(e.target.value))}
        />
        <button type="submit" className={s.button}>
          Создать
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
