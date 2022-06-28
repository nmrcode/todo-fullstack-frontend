import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodoState {
  todoInputText: string;
}

const initialState: ITodoState = {
  todoInputText: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodoInputText(state, action: PayloadAction<string>) {
      state.todoInputText = action.payload;
    },
  },
});

export const { setTodoInputText } = todoSlice.actions;

export default todoSlice;
