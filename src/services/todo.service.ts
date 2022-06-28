import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITodo } from "../types/ITodo";

export const todoAPI = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    fetchAllTodos: build.query<ITodo[], void>({
      query: () => ({
        url: "todos",
      }),
      providesTags: (result) => ["Todos"],
    }),

    createTodo: build.mutation<ITodo, string>({
      query: (todoText) => ({
        url: "todos",
        method: "POST",
        body: { title: todoText },
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: build.mutation<ITodo, string>({
      query: (id: string) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),

    toggleTodo: build.mutation<ITodo, ITodo>({
      query: (todo: ITodo) => ({
        url: `todos/${todo.id}`,
        method: "PATCH",
        body: { completed: !todo.completed },
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});
