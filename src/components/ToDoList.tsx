import React from "react";

import "./ToDoList.css";

// Interface describing the type of props received
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const ToDoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  // referring to the interface

  return (
    <>
      {items.length > 0 ? (
        <>
          <h1 className="list-title">Your Todos:</h1>
          <ul>
            {items.map((t) => (
              <li key={t.id}>
                <span>{t.text}</span>
                {/* Using bind ensures that the way the function is defined (receives id) doesn't irritate TS :D  */}
                <button onClick={onDeleteTodo.bind(null, t.id)}>DELETE</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1 className="list-title">No Todos found.</h1>
      )}
    </>
  );
};

export default ToDoList;
