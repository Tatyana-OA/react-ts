import React from 'react';

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';

const App: React.FC = () =>{
  const todos = [
    {id: 't1', text:'Finish this course'}
]

  return (
    <div className="App">

      <h1>Hello, TS + React Demo!</h1>
      <NewToDo />
      <ToDoList items = {todos}/>
    </div>
  );
}

export default App;
