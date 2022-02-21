import React, { useState } from "react";

import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";

import { TodoInterface } from "../todo.model";

const App: React.FC = () => {
  // Initialize state at empty array BUT be explicit about it being an array of objects {id:''; text''}
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const todoAddHandler = (text: string) => {
    
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text }])
    // Option 2
    // setTodos([...todos, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId:string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== todoId)
    })
  }
  console.log(todos);
  return (
    <div className="App">
      <h1>Hello, TS + React Demo!</h1>
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
