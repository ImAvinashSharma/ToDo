import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = todo => {
    console.log("delete");
    setTodos(
      todos.filter(e => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("Im addind to do", title, desc);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Learn react js",
      desc: "reactJS"
    },
    {
      sno: 2,
      title: "Learn js",
      desc: "JS"
    },
    {
      sno: 3,
      title: "Learn NextJS",
      desc: "NextJS"
    }
  ]);
  return (
    <>
      <Header title="My Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
