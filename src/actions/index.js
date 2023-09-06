import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./type";

export const addTodo = (message) => ({
  type: ADD_TODO,
  message
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const editTodo = ({message, id}) => ({
  type: EDIT_TODO,
  message,
  id,
});
