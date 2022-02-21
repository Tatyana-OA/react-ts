import React, { useRef } from "react";

import './NewToDo.css'

interface newToDoProps {
    onAddTodo: (todoText : string) => void;
}

// Using a type -> a function that takes in a string and returns void
// type newToDoProps = {
//     onAddTodo: (todoText: string) => void;
// }

const NewToDo: React.FC<newToDoProps>= ({onAddTodo}) => {
    //Specify the kind of element that will be stored in the ref with default value of null
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value; // ! telling TS that it will be ok, no null case.

        //Passing the text to the function so App receives it.
        onAddTodo(enteredText)
        textInputRef.current!.value =''
    }

  return (
    <form onSubmit={todoSubmitHandler} className="form-control">
      <div>
        <label htmlFor="todo-text">TODO:  </label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewToDo;
