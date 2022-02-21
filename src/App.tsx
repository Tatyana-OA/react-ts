import React from 'react';

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';

const App: React.FC = () =>{
  const todos = [
    {id: 't1', text:'Finish this course'}
]
  const todoAddHandler = (text:string) => {
    console.log(text)
  }

  return (
    <div className="App">

      <h1>Hello, TS + React Demo!</h1>
      <NewToDo onAddTodo = {todoAddHandler}/>
      <ToDoList items = {todos}/>
    </div>
  );
}

export default App;
