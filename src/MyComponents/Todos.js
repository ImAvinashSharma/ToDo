import React from "react";
import { TodoItem } from "./TodoItem";
export const Todos = props => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {props.todo.length === 0
        ? "No Todos to display"
        : props.todo.map(todo => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
