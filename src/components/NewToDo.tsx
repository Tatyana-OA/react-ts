import React, { useRef } from "react";

const NewToDo: React.FC = () => {
    //Specify the kind of element that will be stored in the ref with default value of null
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value; // ! telling TS that it will be ok, no null case.
        console.log('Input text: ', enteredText)

    }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Item</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewToDo;
