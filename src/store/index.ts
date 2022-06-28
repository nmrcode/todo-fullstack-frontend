import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";
import { todoAPI } from "../services/todo.service";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
