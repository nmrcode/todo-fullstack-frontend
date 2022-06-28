import { createSlice } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

interface ITodoState {
  list: ITodo[];
}

const initialState: ITodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;

export default todoSlice;
