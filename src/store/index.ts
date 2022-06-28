import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
