import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const taskObject = useSelector((state) => state.todos.data);
  const taskItem = taskObject.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });
  return <div>{taskItem}</div>;
};

export default TodoList;
