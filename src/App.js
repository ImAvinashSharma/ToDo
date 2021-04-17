import './App.css';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log('delete')
    let index = todos.indexOf(todo);
    todos.splice(index,1);
  }
       let todos = [
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
     ]
  return (
    <>
      <Header title="My Todo List" searchBar={false}/>
      <Todos todo={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;